var cube = document.querySelector('.cube');
var scene = document.querySelector('.scene');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {

  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
    scene.style.perspectiveOrigin = "0% 0%";

  }
  cube.classList.add(showClass);
  currentClass = showClass;
}

// set initial side

changeSide();

radioGroup.addEventListener('change', changeSide);