const bgColor = document.querySelector('.prop-bg');
const textColor = document.querySelector('.prop-text-color');
const fontSize = document.querySelector('.prop-font-size');
const lineHeight = document.querySelector('.prop-line-heigth');
const fontFamily = document.querySelector('.prop-font-family');
const saveButton = document.querySelector('#save-visual');
const restoreButton = document.querySelector('#restore-visual');


bgColor.addEventListener('keydown', changeBgColor = e => {
    if(e.key === 'Enter'){
        document.body.style.backgroundColor = bgColor.value;
        bgColor.value = null;
    }
});

textColor.addEventListener('keydown', changeTextColor = e => {
    if(e.key === 'Enter'){
        document.querySelector('main').style.color = textColor.value;
        document.querySelector('h1').style.color = textColor.value;
        document.querySelector('section').style.color = textColor.value;
        textColor.value = null;
    }
});

fontSize.addEventListener('keydown', changeFontSize = e =>{
    if(e.key === 'Enter'){
        document.querySelector('main').style.fontSize = fontSize.value + 'px';
        fontSize.value = null;
    }
});

lineHeight.addEventListener('keydown', changeLineHeight = e => {
    if(e.key === 'Enter'){
        document.querySelector('main').style.lineHeight = lineHeight.value + 'px';
        lineHeight.value = null;
    }
});

fontFamily.addEventListener('keydown', changeFontFamily = e => {
  if(e.key === 'Enter'){
    let paragraphs = document.querySelectorAll('p');
   
    for(let i of paragraphs){
    i.style.fontFamily = fontFamily.value;
    }
    fontFamily.value = null;
  }
});

saveButton.addEventListener('click', e => {

  localStorage.setItem('bgColor',document.body.style.backgroundColor);
  localStorage.setItem('textColor',document.querySelector('main').style.color);
  localStorage.setItem('fontSize',document.querySelector('main').style.fontSize);
  localStorage.setItem('lineHeight',document.querySelector('main').style.lineHeight);
  localStorage.setItem('fontFamily',document.querySelector('p').style.fontFamily); 
  localStorage.setItem('lastView',true);   
});

restoreButton.addEventListener('click', e => {
  localStorage.setItem('lastView',false);
});

// window.onload = e => {

// }
if(localStorage.lastView === 'true'){
  document.body.style.backgroundColor = localStorage.bgColor;
  document.querySelector('main').style.color = localStorage.textColor;
  document.querySelector('h1').style.color = localStorage.textColor;
  document.querySelector('section').style.color = localStorage.textColor;
  document.querySelector('main').style.fontSize = localStorage.fontSize;
  document.querySelector('main').style.lineHeight = localStorage.lineHeight;
  
  let paragraphs = document.querySelectorAll('p'); 
  for(let i of paragraphs){
    i.style.fontFamily = localStorage.fontFamily;
  }  
}else{
  for(let key in localStorage){
    localStorage.removeItem(key);
  }
  localStorage.setItem('lastView',false);
}    

