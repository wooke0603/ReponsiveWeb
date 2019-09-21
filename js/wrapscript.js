//변수 선언
let skills = document.querySelectorAll('.underbar'),
      skillsleng = skills.length;

// 윈도우 로드
window.onload = function() {
  for(let i = 0; i <= skillsleng; i++){
    skills[i].classList.add('iopen')
  }
}
