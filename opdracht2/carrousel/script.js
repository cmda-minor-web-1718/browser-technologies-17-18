(function(){
    //Set width to number of articles
    var elements = document.querySelectorAll('.carr-element').length,
        carrousel = document.querySelector('.carrousel');
    carrousel.classList.remove('noJS')
    carrousel.style.width = elements / 2 * 10 + '0vw';
  
    // Interactive carrousel
  var articles = document.querySelectorAll('.carr-element'),
    arrowR = document.querySelector('.right'),
    arrowL = document.querySelector('.left'),
    left = 0;
    
    arrowL.addEventListener('click', function() {
        if (left >= 0) {}
        else {
            left = left + 50;
            carrousel.style.left = left + 'vw';
            return left
        }
    })
    
    arrowR.addEventListener('click', function() {
        if (left > -(elements / 2 * 100 - 100)) { 
            left = left - 50;
            carrousel.style.left = left + 'vw';
            return left
         }
    })
  })()