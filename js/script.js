const bgImage = document.querySelector('.navbar');
let imageEnd = bgImage.clientHeight;

$(window).resize(()=>{imageEnd= bgImage.clientHeight})

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>imageEnd)
   })
