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

  
