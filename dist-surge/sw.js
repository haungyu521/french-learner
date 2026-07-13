// Service Worker - 离线缓存版
const CACHE_NAME = 'french-learner-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.svg'
];

// 安装 - 缓存静态资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {
        // 部分资源可能已存在，忽略错误
      });
    })
  );
  self.skipWaiting(); // 立即激活新版本
});

// 激活 - 清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim(); // 立即接管所有页面
});

// 请求拦截 - 网络优先，失败回退缓存
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 跳过非 GET 请求
  if (request.method !== 'GET') return;

  // 跳过 TTS API 请求（不缓存，每次都走服务器）
  if (url.pathname.startsWith('/api/')) return;

  // 跳过跨域请求
  if (url.origin !== location.origin) return;

  event.respondWith(
    // 网络优先策略：有网用网，没网用缓存
    fetch(request)
      .then((response) => {
        // 成功则更新缓存
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // 网络失败，从缓存取
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          // HTML 请求回退到首页（SPA）
          if (request.destination === 'document') {
            return caches.match('/index.html');
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});
