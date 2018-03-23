(function() {
    const details = document.querySelectorAll('details')

    details.forEach(detail => {
        detail.addEventListener('click', function() {
            console.log('all')
            details.forEach(el => {
                if (el !== this) {
                    el.removeAttribute('open')
                }
            })
        })
    })
  })()