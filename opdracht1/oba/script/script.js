import query from './queryCall.js'


(function() {
    'strict mode'
    const app = {
        init: function() {
            query.callSport() 
        },
    }

    document.onkeyup = function(e){
        if(e.keyCode == 9){
            const message = document.querySelector('.message')
            message.classList.add('display')
        }
    }

    app.init()
})()