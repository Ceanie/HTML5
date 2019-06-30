if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js', {scope: './'})
        .then((req) => {
            console.log(req)
        })
        .catch(e => {
            console.log(e)
        })
} else {
    alert('not support serviceWorker')
}