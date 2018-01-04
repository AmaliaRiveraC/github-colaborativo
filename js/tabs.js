
var liTab = document.querySelectorAll(".menu-nav");
for (var i = 0; i < liTab.length; i++) {
  liTab[i].addEventListener("click", changeTab);
}

function changeTab() {
  var divTab = document.querySelectorAll(".tab");
  for (var i = 0; i < divTab.length; i++) {
    divTab[i].style.display = "none";
  }
  var divToShow = event.target.dataset.selection;
  var div = document.getElementById(divToShow);
  div.style.display = "block";
}
