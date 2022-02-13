if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope,
        )
        console.log(process.env.NODE_ENV)
        if (process.env.NODE_ENV == 'development') {
          registration.unregister().then((boolean) => {
            console.log('Unregister succeeded!')
          })
        }
      })
      .catch((error: string) => {
        console.log('ServiceWorker registration failed: ', error)
      })
  })
}
