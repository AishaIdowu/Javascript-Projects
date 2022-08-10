const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
colorName = document.querySelector('.colorName');
btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    hexColor='#';

    for(var i=0; i<6; i++){
        hexColor += hex[getRandomNum()];
        document.body.style.backgroundColor = hexColor;
        colorName.textContent = hexColor;

    }

});

function getRandomNum() {
    return Math.floor(Math.random()* hex.length);
    
}