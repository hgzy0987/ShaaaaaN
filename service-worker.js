self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("trustbd-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/app.js",
        "/https://i.postimg.cc/Gtt3XnYW/20250907-143732.png",
        "https://i.postimg.cc/Gtt3XnYW/20250907-143732.png"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
