$(function() {
  $('.title').hide().delay(500).fadeIn('slow');
  $('.bottom-arrow').hide().delay(1000).fadeIn('slow');
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
    rotate: { x: 0, y: 300, z: 300 }
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.skillbar',{
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
    delay: 700,
    distance: '400px',
    origin: 'right'
  });
});

window.addEventListener('DOMContentLoaded', function(){
  ScrollReveal().reveal('.estate-skill3',{
    delay: 900,
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
