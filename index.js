
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startColorChange = document.querySelector("[data-action = 'start'");
const stopColorChange = document.querySelector("[data-action = 'stop'");    
const bodyColor = document.querySelector('body');

let intervalId;


    
startColorChange.addEventListener('click', startColorChangeClick);
stopColorChange.addEventListener('click', stopColorChangeClick);


function startColorChangeClick() {

  intervalId = setInterval(colorSwitch, 1000);
  startColorChange.disabled = true;
  
  function colorSwitch() {
    bodyColor.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(bodyColor.style.backgroundColor);
  };
 };

function stopColorChangeClick() {
  startColorChange.disabled = false; 
  clearInterval(intervalId);
  console.log(stop);
 };