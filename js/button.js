window.onload = function() {

document.getElementById("search_form").style.display = "none";

};

function search_form(a) {

if (a == 1) {
  document.getElementById("search_form").style.display = "block";
} else {
  document.getElementById("search_form").style.display = "none";
}

}
