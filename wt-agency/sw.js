const CACHE = "wontech-agency-v1";
const ASSETS = [
  "/roi-calculator/wt-agency/",
  "/roi-calculator/wt-agency/index.html",
  "/roi-calculator/styles.css",
  "/roi-calculator/lang.js",
  "/roi-calculator/speech.js",
  "/roi-calculator/app.js",
  "/roi-calculator/KakaoTalk_20260413_161622234_01.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const c = res.clone();
        caches.open(CACHE).then((ca) => ca.put(e.request, c));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
