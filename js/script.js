const bgImage = document.querySelector('.navbar');
let imageEnd = bgImage.clientHeight;

//for removing loader
var loader = document.querySelector('.loader');
window.addEventListener("load", () => {
    loader.classList.add('remove-loader');
} );


$(window).resize(()=>{imageEnd= bgImage.clientHeight})

//for scroll animations
$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop()>imageEnd)
});
