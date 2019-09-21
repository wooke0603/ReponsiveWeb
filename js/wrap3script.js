let liHover = document.querySelectorAll('.off');
let addClassEvent = document.getElementById('pfimg');
console.log(addClassEvent)

addClassEvent.addEventListener('onmouseenter', function(){
  liHover.style.opacity = "1";
})
