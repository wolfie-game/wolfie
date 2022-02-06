const CACHE = 'wolifie-cache-v1'
const timeout = 400

const URLS = ['/', '/leaderboard', '/forum', '/sign-up', '/game', '/profile', '/authorization']

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => {
        return cache.addAll(URLS)
      })
      .catch((err) => {
        console.log(err)
        throw err
      }),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim())
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter(() => true).map((key) => caches.delete(key))),
      ),
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fromNetwork(event.request, timeout).catch(() => {
      console.log(`Fetching error`)
      return fromCache(event.request)
    }),
  )
})

function fromNetwork(request, timeout) {
  return new Promise((fulfill, reject) => {
    var timeoutId = setTimeout(reject, timeout)
    fetch(request).then((response) => {
      clearTimeout(timeoutId)
      fulfill(response)
    }, reject)
  })
}

function fromCache(request) {
  return caches
    .open(CACHE)
    .then((cache) =>
      cache
        .match(request)
        .then((matching) => matching || Promise.reject('no-match')),
    )
}
