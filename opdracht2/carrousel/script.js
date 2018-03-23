(function(){
    //Set width to number of articles
    var elements = document.querySelectorAll('.carr-element').length,
        carrousel = document.querySelector('.carrousel');
    carrousel.style.width = elements / 2 * 10 + '0vw';
  
    // Interactive carrousel
  var articles = document.querySelectorAll('.carr-element'),
    arrowR = document.querySelector('.right'),
    arrowL = document.querySelector('.left'),
    left = 0;
    
    arrowL.addEventListener('click', function() {
      if (left <= -50) {}
      else {
        left = left + 50;
        carrousel.style.left = left + 'vw';
        console.log(left + ' arrowL')
        return left
      }
    })
    
    arrowR.addEventListener('click', function() {
      left = left - 50;
      carrousel.style.left = left + 'vw';
      console.log(left + ' arrowR')
      return left
    })
  })()