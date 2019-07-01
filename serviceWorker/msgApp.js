navigator.serviceWorker.register('./msgAppsw.js', {scope: './'})
  .then(req => {
    const input = document.getElementById('input')
    const btn = document.getElementById('btn')
    btn.onclick = function () {
      console.log(input)
      navigator.serviceWorker.controller.postMessage(input.value)
    }
  }).catch(e => {
    console.log(e)
  })

  navigator.serviceWorker.addEventListener('message', function (e) {
    const ul = document.getElementsByTagName('ul')[0]
    const li = document.createElement('li')
    li.innerHTML = e.data
    ul.appendChild(li)
  })