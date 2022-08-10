const colors = ["green", "red", "purple", "blue", "yellow", "aliceblue", "antiquewhite","purple", 
"aquamarine", "azure", "blueviolet", "grey", "burlywood", "chocolate", "crimson", "coral", "cyan","cadetblue"];

btn = document.getElementById('btn');
color = document.querySelector('.colorName');

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}