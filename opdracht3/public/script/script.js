(function() {

        var showList = {
            getAside: function() {
                var aside = document.querySelector('aside'),
                    main = document.querySelector('main');
                aside.classList.add('showAside');
                main.classList.add('asideExposed');

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
                showList.makeTotal();

                breadSelect.addEventListener('change', function() {
                    var breadDropDown = document.querySelector('select[name="broodsoort"]'),
                        breadValue = breadDropDown.value;
                    breadContent.innerHTML = breadValue;
                    showList.makeTotal();
                    showList.share();
                })

                cheeseSelect.addEventListener('change', function() {
                    var cheeseDropDown = document.querySelector('select[name="kaassoort"]'),
                        cheeseValue = cheeseDropDown.value;
                    cheeseContent.innerHTML = cheeseValue;
                    showList.makeTotal();
                    showList.share();
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

                        showList.makeTotal();
                        showList.share();

                        var newSpan = document.querySelectorAll('span');
                        newSpan.forEach(function(span) {
                            span.addEventListener('click', function() {
                                span.parentNode.innerHTML = "";
                                showList.makeTotal();
                                showList.share();
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

                        showList.makeTotal();
                        showList.share();

                        var newSpan = document.querySelectorAll('span');
                        newSpan.forEach(function(span) {
                            span.addEventListener('click', function() {
                                span.parentNode.innerHTML = "";
                                showList.makeTotal();
                                showList.share();
                            })
                        })
                    })
                })

                var label = document.querySelectorAll('label');
                label.forEach(function(label) {
                    label.parentNode.removeChild(label);
                })
            },
            makeTotal: function(){
                var sum = 0
                var pricing = document.querySelectorAll('.priceItem');
                pricing.forEach(function(price) {
                    
                    price = Number(price.innerHTML.split('€')[1])
                    sum += price
                    return sum
                })
            var total = document.querySelector('.total');
            total.innerHTML = 'Totaal: €' + sum;
            },
            share: function() {

                var items = document.querySelectorAll('.priceItem')
                var itemList = []
                items.forEach(function(item) {
                    itemList.push(" " + item.innerHTML)
                })

                if(navigator.share !== undefined) {

                    const shareBtn = document.querySelector('.share');
                    shareBtn.classList.remove('begone')

                    shareBtn.addEventListener('click', clickEvent => {
                        clickEvent.preventDefault()

                        navigator.share({
                            title: document.title, 
                            text: "Boodschappen die je moet halen voor je tosti: " +  itemList
                        })
                          .then(() => console.log('Successful share'),
                           error => console.log('Error sharing:', error));
                        });
                    }
                }

            }
        showList.getAside();
        showList.share();
})()