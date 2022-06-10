const precache = async () => {
  const cache = await caches.open("v1")
  cache.addAll([
    "./index.html",
    "./main.js",
    "./favicon.png"
  ])
}

self.addEventListener("install", event => {
  event.waitUntil(precache())
})
