function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24,25,31];

for(let i of dezDaysList){
  let li = document.createElement('li');
  document.getElementById('days').appendChild(li).innerText = i;
}

document.querySelectorAll('#days li').forEach(li => {
  li.className = 'day';
  if(li.innerText == 24 || li.innerText == 25 || li.innerText == 31){
    li.classList.add('holiday');
  }
  if(li.innerText == 4 ||li.innerText == 11 ||li.innerText == 18 ||li.innerText == 25){
    li.classList.add('friday')
  }
});

function createButtons(buttonName,buttonId) {

  const button = document.createElement('button');
  document.querySelector('.buttons-container').appendChild(button);
  button.innerText = buttonName;
  button.id = buttonId;

}

createButtons('Feriados','btn-holiday');

const buttonHolidays = document.getElementById('btn-holiday');

buttonHolidays.addEventListener('click',spotlightHoli);
let validatorBtnHoliday = false;

function spotlightHoli(event){
  let holidays = document.querySelectorAll('.holiday');
  if(validatorBtnHoliday == false){
    holidays.forEach(li => {
      li.style.backgroundColor = 'white';
      validatorBtnHoliday = true;
    });
  }else{
    holidays.forEach(li => {
      li.style.backgroundColor = 'rgb(238,238,238)';
      validatorBtnHoliday = false;
    });
  }
}

createButtons('Sexta-feira','btn-friday');

const buttonFriday = document.getElementById('btn-friday');
buttonFriday.addEventListener('click',spotlightFriday);
let validatorBtnFriday = false;

function spotlightFriday(event){
  let friday = document.querySelectorAll('.friday');
  if(validatorBtnFriday == false){
    friday.forEach(element => {
      element.style.backgroundColor = 'white';
      validatorBtnFriday = true;
    });
  }else{
    friday.forEach(element => {
      element.style.backgroundColor = 'rgb(238,238,238)';
      validatorBtnFriday = false;
    });
  }
}

const lis = document.querySelectorAll('.day');

for(let i of lis){
  i.addEventListener('mouseover', zoom);
  i.addEventListener('mouseout', zoomOut);
  i.addEventListener('click',selectDay);
}

function zoom(event){
  // console.log(event.target);
  event.target.style.fontSize = '2em';
}
function zoomOut(event){
  // console.log(event.target);
  event.target.style.fontSize = '20px';
}

function tasks(task){

  let newTask = document.createElement('span');
  document.querySelector('.my-tasks').appendChild(newTask).innerText = task;
}

tasks('Cozinhar');

function colorTask(color) {
  
  let element = document.createElement('div');
  document.querySelector('.my-tasks').appendChild(element);
  element.style.backgroundColor = color;
  element.className = 'task';
}

colorTask('blue');

const tasksEvents = document.querySelectorAll('.my-tasks .task');
let taskSelected = false;

for(let i of tasksEvents) {
  i.addEventListener('click',selectTask);
}

function selectTask(event) {
  
  if(taskSelected == false){
    event.target.classList.add('selected');
    taskSelected = true;
  }else{
    for(let i of tasksEvents){
      i.classList.remove('selected');
      taskSelected = false;
    }
  }
}

function selectDay(e) {
  let colorTask = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');
  let colorDay = window.getComputedStyle(e.target).getPropertyValue('color');

  if(colorDay == colorTask){
    e.target.style.color = 'rgb(119,119,119)';
  }else{
    e.target.style.color = colorTask;
  }
}

// const text = document.getElementById('task-input').value;
document.getElementById('btn-add').addEventListener('click',compromisso);
const keyPressed = document.getElementById('task-input');

keyPressed.addEventListener('keydown', e => {
  if(e.key === 'Enter'){
    compromisso();
    e.currentTarget.value = '';
  }
});

function compromisso() {
  const text = document.getElementById('task-input').value;
  
  if (text == '') {
    alert('Nenhum compromisso descrito!');
  }else{
    let newCompromisso = document.createElement('li');
    document.querySelector('.task-list').appendChild(newCompromisso);
    newCompromisso.innerText = text;
  }
  
}