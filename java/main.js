jQuery(document).ready(function(){
    "use strict"
    $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,
      });

      
      var typed=new Typed('.text',{
        strings:["<strong>Wait For </strong><strong class='primary'> Magic </strong>","<strong>We create</strong><strong class='primary'> your</strong>","<strong>Imagi</strong><strong class='primary'>nation.</strong>"],
        typeSpeed:50,
        backSpeed:50,
        loop: true
      });
    
      $('.works').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
          enabled:true
        }
        
      });
      
        $('#team-members').owlCarousel({
         items:3,
         autoplay:true,
         smartSpeed:700,
         loop:true,
         nav:false,
         autoplayHoverPause: true,
         responsive:{
         0:{
           items:1
         },
         480:{
          items:2
        },
        768:{
          items:3
        },
        }
        });
        
        
    
});

var buttons=document.getElementsByClassName('owl-dots')[0];

console.log(buttons);

// var dot=dots.getElementsByClassName('owl-dot')[0];
// var spans=dot.getElementsByTagName('span')[0];
// spans.style.background="red";