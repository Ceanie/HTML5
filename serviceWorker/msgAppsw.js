self.addEventListener('message', function (e) {
  self.clients.matchAll()
    .then(function (clients) {
      if (clients && clients.length) {
        clients.forEach(client => {
          client.postMessage(e.data)
        })
      }
    })
})