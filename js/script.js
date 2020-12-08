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
              <h5 class="card-title">${newEvent.eventName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Catogery</h6>
              <div class="event-date">${newEvent.eventDate}</div>
              <div class="event-venue">${newEvent.eventVenue}</div>
              <div class="event-type">${newEvent.eventType}</div>
              <button class="register" data-toggle="modal" data-target="#regForm">Register</button>
              <div class="event-fee">${newEvent.eventFee}</div>
            </div>
          </div>
        </div>`;
    
});