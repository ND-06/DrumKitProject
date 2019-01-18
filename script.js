window.addEventListener('keydown', function(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');


});

function removeTransition(e){
  if(e.propertyName !== 'transform') {
  return;
  } else { // stop if it is not a transform
  this.classList.remove('playing');
}
};

var keys = document.querySelectorAll('.key');
for (var i = 0; i < keys.length; i++) {
keys[i].addEventListener("transitionend", removeTransition);
};

/*var x = document.getElementsByClassName("key"); 

for (var i = 0; i < key.length; i++) {
  key[i].addEventListener('click', function() {
  key.classList.add('playing');
})
};*/



