(function() {
    var details = document.querySelectorAll('details')

    if (details.forEach) {

        details.forEach(detail => {
            detail.addEventListener('click', function() {
                details.forEach(el => {
                    if (el !== this) {
                        el.removeAttribute('open')
                    }
                })
            })
        })
    } else {
        console.log('forEach is not supported')
    }
  })()