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

var eventRef = firebase.database().ref("Events/");

eventRef.on("child_added", function (data, prevChildKey) {
    var newEvent = data.val();
    
    var eventRow = document.querySelector('.evt-row');
    eventRow.innerHTML += `<div class="col-10 col-lg-5 py-3 py-lg-0 card-box">
          <div class="eventCard">
            <div class="eventImg">
              <!-- <div class="date">18<br><span>aug</span></div> -->
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Catogery</h6>
              <div class="event-date">${newEvent.eventDate}</div>
              <div class="event-venue">${newEvent.eventVenue}</div>
              <div class="event-type">Offline</div>
              <button class="register" data-toggle="modal" data-target="#regForm">Register</button>
              <div class="event-fee">FREE</div>
              <div class="share"> SHARE <button> <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.0559 9.05316C9.30819 9.05316 8.64145 9.40947 8.21495 9.96014L4.64373 7.96533C4.72741 7.72509 4.7733 7.46595 4.7733 7.19872C4.7733 6.92878 4.72741 6.67235 4.64103 6.42941L8.20956 4.4373C8.63335 4.99066 9.30279 5.34967 10.0532 5.34967C11.3327 5.34967 12.3773 4.30773 12.3773 3.02554C12.3773 1.74336 11.3354 0.701416 10.0532 0.701416C8.77102 0.701416 7.72907 1.74336 7.72907 3.02554C7.72907 3.29548 7.77496 3.55461 7.86134 3.79485L4.29552 5.78696C3.87172 5.2309 3.20229 4.87459 2.45187 4.87459C1.17239 4.87459 0.127747 5.91653 0.127747 7.19872C0.127747 8.4809 1.17239 9.52284 2.45457 9.52284C3.20499 9.52284 3.87442 9.16383 4.30092 8.60777L7.86944 10.6026C7.78306 10.8455 7.73447 11.1074 7.73447 11.3773C7.73447 12.6568 8.77642 13.7014 10.0586 13.7014C11.3408 13.7014 12.3827 12.6595 12.3827 11.3773C12.3827 10.0951 11.3381 9.05316 10.0559 9.05316ZM10.0559 1.43294C10.9359 1.43294 11.6512 2.14826 11.6512 3.02824C11.6512 3.90823 10.9359 4.62355 10.0559 4.62355C9.17592 4.62355 8.46059 3.90823 8.46059 3.02824C8.46059 2.14826 9.17862 1.43294 10.0559 1.43294ZM2.45457 8.79402C1.57459 8.79402 0.859266 8.0787 0.859266 7.19872C0.859266 6.31873 1.57459 5.60341 2.45457 5.60341C3.33456 5.60341 4.04988 6.31873 4.04988 7.19872C4.04988 8.0787 3.33186 8.79402 2.45457 8.79402ZM10.0559 12.9699C9.17592 12.9699 8.46059 12.2546 8.46059 11.3746C8.46059 10.4946 9.17592 9.77928 10.0559 9.77928C10.9359 9.77928 11.6512 10.4946 11.6512 11.3746C11.6512 12.2546 10.9359 12.9699 10.0559 12.9699Z"
                      fill="black" />
                  </svg>
                  </a></button>
              </div>
            </div>
          </div>
        </div>`;
    
});