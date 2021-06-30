
function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}

document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

// play countdown sound on scroll when you hit #chimes 
var played = false;

$(window).scroll(function() {
  console.log('scroll')
  var elemTop = $('#chimes').offset().top, 
  elemHeight = $('#chimes').outerHeight(), 
  windowHeight = $(window).height(),
  windowScroll = $(this).scrollTop();


  if( windowScroll > (elemTop + elemHeight - windowHeight && played === false) ) {
    var countdownSound = $('#chimesound')[0]
    console.log(countdownSound)
      countdownSound.volume = .01
      countdownSound.play();
      played = true;
  }
});

