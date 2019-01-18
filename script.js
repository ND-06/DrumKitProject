window.addEventListener('keydown', function(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.toggle('playing');

});



/*var x = document.getElementsByClassName("key"); 

for (var i = 0; i < key.length; i++) {
  key[i].addEventListener('click', function() {
  key.classList.add('playing');
})
};*/



