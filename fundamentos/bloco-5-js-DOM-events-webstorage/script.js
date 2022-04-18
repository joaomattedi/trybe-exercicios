function newElement(type) {
    let newElement = document.createElement(type);
    return newElement;
}

function changeText(selector,text){
  document.querySelector(selector).innerText = text;
}

function changeClass(selector,classes){
  document.querySelector(selector).className = classes;
}

const bodyH1 = newElement('h1');
document.body.appendChild(bodyH1);
changeText('h1','Exercício 5.2 - JavaScript DOM');
  
const mainContent = newElement('main');
document.body.appendChild(mainContent);
changeClass('main', 'main-content');

const section1 = newElement('section');
document.querySelector('main').appendChild(section1);
changeClass('main section', 'center-content');

const text1 = newElement('p');
document.querySelector('main .center-content').appendChild(text1);
changeText('.center-content p','Algum texto dentro da tag P do center content');

const section2 = newElement('section');
document.querySelector('main').appendChild(section2);
changeClass('.center-content + section','left-content');

const section3 = newElement('section');
document.querySelector('main').appendChild(section3);
changeClass('.left-content + section', 'right-content');

const image = newElement('img');
document.querySelector('.left-content').appendChild(image);
changeClass('.left-content img', 'small-image');
image.src = 'https://picsum.photos/200'

const list = newElement('ul');
document.querySelector('.right-content').appendChild(list);
const numbers = ['um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez'];
for(let i of numbers){
  let lis = newElement('li');
  document.querySelector('.right-content ul').appendChild(lis).innerHTML = i;
}

for(let i = 0; i < 3; i += 1){
  let h3s = newElement('h3');
  document.querySelector('main').appendChild(h3s);
}

changeClass('h1','title');
// changeClass('h3','description');
// changeClass('h3 + h3','description');
// changeClass('h3 + h3 + h3','description');
const h3s = document.querySelectorAll('main h3');
h3s.forEach(h3 => {
  h3.className = 'description';
  h3.innerText = 'TESTE TESTE TESTE'
});

document.querySelector('main').removeChild(section2);

document.querySelector('.right-content').style.marginRight = 'auto';

document.querySelector('.center-content').parentElement.style.backgroundColor = 'green';

const lis = document.querySelectorAll('ul li');
lis.forEach(li => {
  if(li.innerText == 'nove' || li.innerText == 'dez'){
    document.querySelector('ul').removeChild(li);
  }
});