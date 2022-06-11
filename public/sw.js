const doCache = false;
const CACHE_NAME = 'pwa-cache';

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log(`Deleting cache: ${key}`)
            return caches.delete(key);
          }
        }))
      )
  );
});

self.addEventListener('install', function (event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function (cache) {
          fetch("manifest.json")
            .then(response => {
              response.json()
            })
            .then(assets => {
              const urlsToCache = [
                "./index.html",
                "./main.js",
                "./favicon.png",
                "./assets/images/404.jpg",
                "./assets/images/avatar3.jpg",
                "./assets/images/bogota.jpg",
                "./assets/images/buenosaires.jpg",
                "./assets/images/lima.jpg",
                "./assets/images/london.jpg",
                "./assets/images/madrid.jpg",
                "./assets/images/mx.jpg",
                "./assets/images/paris.jpg",
                "./assets/images/venice.jpg",
                "./assets/images/washington.jpg",
                "./assets/icons/cancel.svg",
                "./assets/icons/cloudy.png",
                "./assets/icons/favicon.png",
                "./assets/icons/gauge.png",
                "./assets/icons/hamburgerButton.svg",
                "./assets/icons/humidity.png",
                "./assets/icons/layers.svg",
                "./assets/icons/magnifying-glass.svg",
                "./assets/icons/mail.png",
                "./assets/icons/rainy.png",
                "./assets/icons/rainyBlack.png",
                "./assets/icons/slightlyCloudy.png",
                "./assets/icons/slightlyCloudyBlack.png",
                "./assets/icons/snowy.png",
                "./assets/icons/snowyBlack.png",
                "./assets/icons/strange.png",
                "./assets/icons/stangeBlack.png",
                "./assets/icons/sunny.png",
                "./assets/icons/thunder.png",
                "./assets/icons/twitter.png",
                "./assets/icons/wind.png",
                assets["dist.js"]
              ]
              cache.addAll(urlsToCache)
              console.log('cached');
            })
        })
    );
  }
});

self.addEventListener('fetch', function (event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
      })
    );
  }
});


//

// const CACHE_VERSION = "v1"

// const precache = async () => {
//   const cache = await caches.open(CACHE_VERSION)
//   return cache.addAll([
//     "./index.html",
//     "./main.js",
//     "./favicon.png",
//     "./assets/images/404.jpg",
//     "./assets/images/avatar3.jpg",
//     "./assets/images/bogota.jpg",
//     "./assets/images/buenosaires.jpg",
//     "./assets/images/lima.jpg",
//     "./assets/images/london.jpg",
//     "./assets/images/madrid.jpg",
//     "./assets/images/mx.jpg",
//     "./assets/images/paris.jpg",
//     "./assets/images/venice.jpg",
//     "./assets/images/washington.jpg",
//     "./assets/icons/cancel.svg",
//     "./assets/icons/cloudy.png",
//     "./assets/icons/favicon.png",
//     "./assets/icons/gauge.png",
//     "./assets/icons/hamburgerButton.svg",
//     "./assets/icons/humidity.png",
//     "./assets/icons/layers.svg",
//     "./assets/icons/magnifying-glass.svg",
//     "./assets/icons/mail.png",
//     "./assets/icons/rainy.png",
//     "./assets/icons/rainyBlack.png",
//     "./assets/icons/slightlyCloudy.png",
//     "./assets/icons/slightlyCloudyBlack.png",
//     "./assets/icons/snowy.png",
//     "./assets/icons/snowyBlack.png",
//     "./assets/icons/strange.png",
//     "./assets/icons/stangeBlack.png",
//     "./assets/icons/sunny.png",
//     "./assets/icons/thunder.png",
//     "./assets/icons/twitter.png",
//     "./assets/icons/wind.png",
//   ])
// }

// self.addEventListener("install", event => {
//   event.waitUntil(precache())
// })

// self.addEventListener("fetch", event => {
//   const { request } = event

//   if(request === "GET"){
//     // search on cache
//     event.respondWith(cachedResponse(request))

//     // update cache
//     event.waitUntil(updateCache(request))
//   }

//   return
// })

// const cachedResponse = async (request) => {
//   const cache = await caches.open(CACHE_VERSION)
//   const response = await cache.match(request)
//   return response || fetch(request)
// }

// const updateCache = async (request) => {
//   const cache = await caches.open(CACHE_VERSION)
//   const response = await fetch(request)
//   return cache.put(request, response)
// }
