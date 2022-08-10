const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

// select button and text-colorname
const btn = document.getElementById('btn');

// Could only use query selector to select this particular element.
const color = document.querySelector('.colorName');

btn.addEventListener('click', function(){
    hexColor = "#";
    
    // To make the random mumbers 6 figures as hex colors only work with 3 or 6 figs.
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }

    document.body.style.backgroundColor= hexColor;
    color.textContent = hexColor;
});

//  To return the random numbers generated
function getRandomNumber() {

    return Math.floor( Math.random() * hex.length);
    
}