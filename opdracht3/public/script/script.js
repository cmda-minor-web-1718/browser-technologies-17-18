(function() {
    var showList = {
        getAside: function() {
            var aside = document.querySelector('aside');
            aside.classList.add('showAside');

            showList.removeButton();
        },
        removeButton: function() {
            var button = document.querySelector('.button');
            button.classList.add('begone');

            showList.makeList();
        },
        makeList: function() {
            var breadDropDown = document.querySelector('select[name="broodsoort"]'),
                cheese = document.querySelector('select[name="kaassoort"]'),
                breadValue = breadDropDown.value,
                cheeseValue = cheese.value,

                boodschappen = document.querySelectorAll('.boodschappen'),
                breadContent = document.createElement('p'),
                cheeseContent = document.createElement('p'),
                breadSelect = document.querySelector('select[name="broodsoort"]'),
                cheeseSelect = document.querySelector('select[name="kaassoort"]');
            breadContent.innerHTML = breadValue;
            breadContent.classList.add('priceItem');
            cheeseContent.innerHTML = cheeseValue;
            cheeseContent.classList.add('priceItem');
            boodschappen[0].appendChild(breadContent);
            boodschappen[1].appendChild(cheeseContent);

            breadSelect.addEventListener('change', function() {
                var breadDropDown = document.querySelector('select[name="broodsoort"]'),
                    breadValue = breadDropDown.value;
                breadContent.innerHTML = breadValue;
            })

            cheeseSelect.addEventListener('change', function() {
                var cheeseDropDown = document.querySelector('select[name="kaassoort"]'),
                    cheeseValue = cheeseDropDown.value;
                cheeseContent.innerHTML = cheeseValue;
            })

            var input = document.querySelectorAll('input');
            input.forEach(function(input) {
                input.setAttribute('type', 'button')
            })

            var extraInput = document.querySelectorAll('.extraIn');
            extraInput.forEach(function(el) {
                el.addEventListener('click', function() {
                    var extraList = document.querySelector('.boodschappenExtra'),
                        p = document.createElement('p'),
                        div = document.createElement('div'),
                        span = document.createElement('span');
                    p.innerHTML = el.value;
                    span.innerHTML = "X";
                    p.classList.add('priceItem');
                    div.appendChild(p);
                    div.appendChild(span);
                    extraList.appendChild(div);
                    var newSpan = document.querySelectorAll('span');
                    newSpan.forEach(function(span) {
                        span.addEventListener('click', function() {
                            span.parentNode.innerHTML = "";
                        })
                    })
                })
            })

            var sausInput = document.querySelectorAll('.sausIn');
            sausInput.forEach(function(el) {
                el.addEventListener('click', function() {
                    var sausList = document.querySelector('.boodschappenSaus'),
                        p = document.createElement('p'),
                        div = document.createElement('div'),
                        span = document.createElement('span');
                    p.innerHTML = el.value;
                    span.innerHTML = "X";
                    p.classList.add('priceItem');
                    div.appendChild(p);
                    div.appendChild(span);
                    sausList.appendChild(div);
                    var newSpan = document.querySelectorAll('span');
                    newSpan.forEach(function(span) {
                        span.addEventListener('click', function() {
                            span.parentNode.innerHTML = "";
                        })
                    })
                })
            })

            var label = document.querySelectorAll('label');
            label.forEach(function(label) {
                label.parentNode.removeChild(label);
            })
        }
    }
    showList.getAside();
})()