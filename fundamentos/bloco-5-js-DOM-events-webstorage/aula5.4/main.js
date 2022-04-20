const bgColor = document.querySelector('.prop-bg');
const textColor = document.querySelector('.prop-text-color');
const fontSize = document.querySelector('.prop-font-size');
const lineHeight = document.querySelector('.prop-line-heigth');
const fontFamily = document.querySelector('.prop-font-family');

bgColor.addEventListener('keydown',e => {
    if(e.key === 'Enter'){
        document.body.style.backgroundColor = bgColor.value;
        bgColor.value = null;
    }
});

textColor.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        document.querySelector('main').style.color = textColor.value;
        document.querySelector('h1').style.color = textColor.value;
        document.querySelector('section').style.color = textColor.value;
        textColor.value = null;
    }
});

fontSize.addEventListener('keydown', e =>{
    if(e.key === 'Enter'){
        document.querySelector('main').style.fontSize = fontSize.value + 'px';
        fontSize.value = null;
    }
});

lineHeight.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        document.querySelector('main').style.lineHeight = lineHeight.value + 'px';
        lineHeight.value = null;
    }
})

fontFamily.addEventListener('keydown', e => {
    if(e.key === 'Enter'){
        let paragraphs = document.querySelectorAll('p');

        for(let i of paragraphs){
        i.style.fontFamily = fontFamily.value;
        }
        fontFamily.value = null;
    }
})