// Play function
function playSound(e){
    // making use of the data attribute to select the audio which also have a data-key (can use it in place of class to make code easier)
     const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`)
     const key = document.querySelector(`.key[data-key ="${e.keyCode}"]`)
     if(!audio) return; //stop the function from running all together
     audio.currentTime = 0; // rewind to the start
     audio.play();
     key.classList.add('playing');
}



// Transition function
function removeTransition (e){
    if (e.propertyName != "transform") return; //skip it if its not a transform
    e.target.classList.remove('playing'); 
}

    
  
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound );


  
    