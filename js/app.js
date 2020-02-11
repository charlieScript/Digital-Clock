// Uicomponents
const hr = document.querySelector('.hr');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const am = document.querySelector('.time');
const body = document.querySelector('div.container');
const c = document.querySelector('.c')
const day = document.querySelector('.day');
const bd = document.querySelector('body');
const battery = document.querySelector('.fa-battery-empty');



function startClock() {
  const hrs = new Date();
  
  if (hrs.getHours() > 12) {
    am.textContent = 'AM'
    hr.textContent = hrs.getHours() - 12;
  }
  else{
    am.textContent = 'PM'
    hr.textContent = hrs.getHours();
  }
  min.textContent = hrs.getMinutes();
  sec.textContent = hrs.getSeconds();
  day.textContent = hrs.toDateString();
}
function playGround() {
  bd.style.backgroundColor = `rgb(${Math.random() * 100},${Math.random() * 100},${Math.random() * 100})`
  c.style.color = `rgb(${Math.random() * 100},${Math.random() * 100},${Math.random() * 100}`;
}
setInterval(startClock, 1000);
setInterval(playGround, 3000);