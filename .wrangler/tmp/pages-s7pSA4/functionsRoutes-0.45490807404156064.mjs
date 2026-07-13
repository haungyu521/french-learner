import { onRequest as __api_tts_js_onRequest } from "/Users/huangyu/Documents/Qoder/2026-07-12/chat-2/french-learner/functions/api/tts.js"

export const routes = [
    {
      routePath: "/api/tts",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_tts_js_onRequest],
    },
  ]