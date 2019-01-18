window.addEventListener('keydown', function(e) {
  var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.play();
});



/*var x = document.getElementsByClassName("key"); 

for (var i = 0; i < key.length; i++) {
  key[i].addEventListener('click', function() {
  key.classList.add('playing');
})
};*/



