const bgImage = document.getElementsByClassName('bgImg');
let imageEnd = bgImage[0].clientHeight;

$(window).resize(()=>{imageEnd= bgImage[0].clientHeight})

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>imageEnd)
   })

