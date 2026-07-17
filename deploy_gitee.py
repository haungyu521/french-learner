#!/usr/bin/env python3
import base64
import re
import requests
import rsa
import urllib3
import sys

urllib3.disable_warnings()

domain = 'https://gitee.com'
ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
timeout = 15

pubkey = """-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIrn+WB2Yi4ABAL5Tq6E09tumY
qVTFdpU01kCDUmClczJOCGZriLNMrshmN9NJxazpqizPthwS1OIK3HwRLEP9D3GL
7gCnvN6lpIpoVwppWd65f/rK2ewv6dstN0fCmtVj4WsLUchWlgNuVTfWljiBK/Dc
YkfslRZzCq5Fl3ooowIDAQAB
-----END PUBLIC KEY-----"""

username = 'topaz8596'
password = 'a515520753'
repo = 'topaz8596/french-learner'
branch = 'gh-pages'

def get_csrf_token(html):
    res1 = re.search(
        '<meta name="csrf-param" content="authenticity_token" />(.*?)'
        '<meta name="csrf-token" content="(.*?)" />', html, re.S)
    res2 = re.search(
        '<meta content="authenticity_token" name="csrf-param" />(.*?)'
        '<meta content="(.*?)" name="csrf-token" />', html, re.S)
    res = res1 or res2
    if res is None:
        raise Exception('Cannot find CSRF token')
    return res.group(2)

session = requests.session()
session.keep_alive = False

# Step 1: Login
print("Step 1: Logging in to Gitee...")
login_index_url = f'{domain}/login'
check_login_url = f'{domain}/check_user_login'

index_headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Host': 'gitee.com',
    'User-Agent': ua
}

resp = session.get(url=login_index_url, headers=index_headers, timeout=timeout, verify=False)
csrf_token = get_csrf_token(resp.text)
print(f"  Got CSRF token: {csrf_token[:20]}...")

headers = {
    'Referer': login_index_url,
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': csrf_token,
    'User-Agent': ua
}

form_data = {'user_login': username}
session.post(url=check_login_url, headers=headers, data=form_data, timeout=timeout, verify=False)

# Encrypt password
separator = '$gitee$'
data = f'{csrf_token[-8:]}{separator}{password}'
pk = rsa.PublicKey.load_pkcs1_openssl_pem(pubkey.encode())
encrypt_data = rsa.encrypt(data.encode(), pk)
encrypt_data = base64.b64encode(encrypt_data).decode()

form_data = {
    'encrypt_key': 'password',
    'utf8': '✓',
    'authenticity_token': csrf_token,
    'redirect_to_url': '',
    'user[login]': username,
    'encrypt_data[user[password]]': encrypt_data,
    'user[remember_me]': 1
}

res = session.post(url=login_index_url, headers=index_headers, data=form_data, timeout=timeout, verify=False).text

if '帐号或者密码错误' in res or 'Invalid email or password' in res:
    print("ERROR: Wrong username or password")
    sys.exit(1)
if 'captcha' in res.lower() and 'expired' in res.lower():
    print("ERROR: Captcha expired, need manual validation")
    sys.exit(1)
if 'phone_captcha' in res or '异常登录行为' in res:
    print("ERROR: Need phone captcha validation")
    sys.exit(1)

if '个人主页' in res or 'Dashboard' in res or '我的工作台' in res:
    print("  Login successful!")
else:
    print(f"  Login response unknown, checking if logged in...")

# Step 2: Deploy Gitee Pages
print("\nStep 2: Deploying Gitee Pages...")
pages_url = f'{domain}/{repo}/pages'
rebuild_url = f'{pages_url}/rebuild'

pages = session.get(pages_url, timeout=timeout, verify=False)
print(f"  Pages URL status: {pages.status_code}")

if pages.status_code == 404:
    print("  ERROR: Pages not initialized. Need manual first deployment.")
    print(f"  Please visit: {pages_url}")
    sys.exit(1)

csrf_token = get_csrf_token(pages.text)
headers = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Referer': pages_url,
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-Token': csrf_token,
    'User-Agent': ua
}

form_data = {
    'branch': branch,
    'build_directory': '',
    'force_https': 'true'
}

resp = session.post(url=rebuild_url, headers=headers, data=form_data, timeout=timeout, verify=False)
print(f"  Deploy status: {resp.status_code}")

if resp.status_code == 200:
    html = resp.text
    if '正在部署' in html:
        print("  SUCCESS! Deployment in progress...")
        print(f"\n  Your Gitee Pages URL: https://topaz8596.gitee.io/french-learner")
    elif '部署失败' in html:
        error_match = re.search('<p>错误信息:(.*?)<', html, re.S)
        if error_match:
            print(f"  Deploy failed: {error_match.group(1).strip()}")
        else:
            print(f"  Deploy failed. Response: {html[:500]}")
    elif '频繁' in html:
        print("  Too frequent, please wait 1 minute and try again")
    elif '未实名认证' in html:
        print("  ERROR: Account not verified (未实名认证)")
        print("  Please complete real-name verification on Gitee first")
    else:
        print(f"  Response: {html[:500]}")
else:
    print(f"  Error: {resp.status_code}")
    print(f"  Response: {resp.text[:500]}")
