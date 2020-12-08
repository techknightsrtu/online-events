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


function firebaseCallPull(){
    var eventRef = firebase.database().ref("Events/");

    eventRef.on("child_added", function (data, prevChildKey) {
        var newEvent = data.val();

        var eventRow = document.querySelector('.evt-row');
        eventRow.innerHTML += `<div class="col-10 col-lg-5 py-3 py-lg-0 card-box">
          <div class="eventCard">
            <div class="eventImg"></div>
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
        </div>
        <div class="modal fade" id="regForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                       <h5 class="modal-title" id="exampleModalLongTitle">${newEvent.eventName}</h5>
                       <p class="modal-description">${newEvent.eventDesc}</p></div>

                       <div class="modal-body">
                            <form class="regform" action="get" name="registrationForm">
                                <input type="text" name="name" id="name" placeholder="name">
                                <input type="email" name="email" id="email" placeholder="email">
                                <input type="number" name="phone-number" id="phone-number" placeholder="phone-number">
                                <label for="year">Select your year:</label>
                                <select name="year" id="year" form="registrationForm">
                                    <option value="1">1st year</option>
                                    <option value="2">2nd year</option>
                                    <option value="3">3rd year</option>
                                    <option value="4">4th year</option>
                                </select>
                                <label for="comments">Any comments</label>
                                <textarea name="comments" id="comments" cols="10" rows="5"></textarea>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Register</button>
                        </div>

                    </div>
                </div>
            </div>`
        ;
        var regBtn = document.querySelector('.register');
        regBtn.setAttribute('id', `${newEvent.eventName}`);

    });
}

firebaseCallPull();
