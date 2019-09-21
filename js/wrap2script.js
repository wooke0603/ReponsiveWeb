//변수 선언
let background = document.querySelector('#wrap2'),
  fontcolor = document.querySelectorAll('#wrap2 a, #wrap2 p, #wrap2 h3');
console.log(fontcolor);

//클릭시 이벤트 함수실행
background.addEventListener('click', function(){
  this.style.background = "gray";
})
