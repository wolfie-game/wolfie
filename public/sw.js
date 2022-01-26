const CACHE = 'wolifie-cache-v1'
const timeout = 400

self.addEventListener('install', (event) => {
  console.log('install')
})

self.addEventListener('activate', (event) => {
  console.log('activate')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fromNetwork(event.request, timeout).catch((err) => { 
      console.log(`Error: ${err.message()}`)
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
