$(function() {
  $('.title').hide().delay(500).fadeIn('slow');
  $('.bottom-arrow').hide().delay(1200).fadeIn('slow');
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.profile-title,.profile-form,.estate-detail-title,.estate-detail,.pro-detail-title,.pro-detail',{
    delay: 500,
    distance: '40px',
    origin: 'bottom'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.estate-img,.pro-img',{
    delay: 500,
    rotate: { x: 0, y: 300, z: 0 }
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.skillbar-form',{
    delay: 500,
    distance: '400px',
    origin: 'bottom'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.estate-main-headline,.pro-main-headline,.work-main-headline',{
    delay: 700,
    distance: '400px',
    origin: 'right'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.estate-skill1',{
    delay: 500,
    distance: '400px',
    origin: 'right'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.estate-skill2',{
    delay: 800,
    distance: '400px',
    origin: 'right'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.estate-skill3',{
    delay: 1100,
    distance: '400px',
    origin: 'right'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.app-left',{
    delay: 500,
    distance: '400px',
    origin: 'right'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.app-right',{
    delay: 700,
    distance: '400px',
    origin: 'right'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.estate-title,.pro-title',{
    delay: 500,
    scale: 0.5
  });
});