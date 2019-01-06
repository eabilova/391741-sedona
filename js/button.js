window.addEventListener('load', function () {

  document.getElementById("search_form").classList.add('hidden')

  var button = document.getElementById("search_button") if (button) {
    button.addEventListener('click', toggle_search_form)
  }

});

function toggle_search_form() {
  document.getElementById("search_form").classList.toggle('hidden')
}
