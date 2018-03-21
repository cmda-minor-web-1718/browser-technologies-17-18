//detect none support for details
var detailCompitelity = 'open' in document.createElement('details');
if (!detailCompitelity) {
  var summarys = document.getElementsByTagName("summary");
  var details = document.getElementsByTagName("details");

  for(var i = 0; i < details.length; i++) {
    var tempChilderen = details[i].children;
    for(var j = 0; j < tempChilderen.length; j++){
      if (tempChilderen[j].tagName !== "SUMMARY") {
        if (tempChilderen[j].classList){
          tempChilderen[j].classList.add("hideDetails")
        } else {
          tempChilderen[j].setAttribute('class', tempChilderen[j].getAttribute('class') + ' ' + "hideDetails");
        }
      }
    }
  }

  for(var i = 0; i < summarys.length; i++){
    if (document.addEventListener) {
      summarys[i].addEventListener("click", clickSummery, false);
    }
    else {
      summarys[i].attachEvent("onclick", clickSummery);
    }
  }
}

function clickSummery() {
  var tempdetails = this.parentNode.children;
  for(var i = 0; i < tempdetails.length; i++){
    if (tempdetails[i].tagName !== "SUMMARY") {
      if (tempdetails[i].classList){
        if (tempdetails[i].classList == "hideDetails") {
          tempdetails[i].classList.remove("hideDetails");
        } else {
          tempdetails[i].classList.add("hideDetails");
        }
      } else {
        if (tempdetails[i].getAttribute('class').indexOf("hideDetails") > -1) {
          tempdetails[i].setAttribute('class', tempdetails[i].getAttribute('class').replace("hideDetails", ' '));
        } else {
          tempdetails[i].setAttribute('class', tempdetails[i].getAttribute('class') + ' ' + "hideDetails");
        }
      }
    }
  }
}
