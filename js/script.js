const bgImage = document.querySelector('.navbar');
let imageEnd = bgImage.clientHeight;
var eventRow = document.querySelector('.evt-row');

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


function firebaseCall(){
    var eventRef = firebase.database().ref("Events/");

    eventRef.on("child_added", function (data, prevChildKey) {
        var newEvent = data.val();
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
        `;
        var regBtn = document.querySelector('.register');
        regBtn.setAttribute('data-target', `#${newEvent.eventCode}`);
        
        addModal(newEvent.eventName, newEvent.eventDesc, newEvent.eventCode);
    });
}

function addModal(eventName, eventDesc, eventCode){
    eventRow.innerHTML += `<div class="modal fade" id="regForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                       <h5 class="modal-title" id="exampleModalLongTitle">${eventName}</h5>
                       <p class="modal-description">${eventDesc}</p></div>

                       <div class="modal-body">
                            <form class="regform" name="registrationForm" id="${eventCode}">
                                <input type="text" name="name" id="name" placeholder="name" required>
                                <input type="email" name="email" id="email" placeholder="email" required>
                                <input type="number" name="phone-number" id="phone-number" placeholder="phone-number" required>
                                <label for="year">Select your year:</label>
                                <select name="year" id="year" required>
                                    <option value="1">1st year</option>
                                    <option value="2">2nd year</option>
                                    <option value="3">3rd year</option>
                                    <option value="4">4th year</option>
                                </select>
                                <label for="comments">Any comments</label>
                                <textarea name="comments" id="comments" cols="10" rows="5"></textarea>
                                <button type="submit" class="btn btn-primary">Register</button>
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>`;
          
            var modal = document.querySelector('.modal');
            modal.setAttribute('id', eventCode);
            // var form = document.querySelector('form');
            // form.setAttribute('id', eventCode);          
            firebasePush(eventCode);
}

function firebasePush() {
    //sending data to firebase database
    var refVariable = firebase.database().ref().child('regestrationDetails');
    //on submit event
    var form = document.querySelectorAll('form');
    for (let i = 0; i < form.length; i++) {
        form[i].addEventListener("submit", submitForm);
        function submitForm(e) {

            e.preventDefault();
            //to prevent from loading default functions
            var name = document.querySelector("#name").value;
            var email = document.querySelector("#email").value;
            var phoneNo = document.querySelector("#phone-number").value;
            var year = document.querySelector('#year').value;
            var comments = document.querySelector('#comments').value;
            var eventCode = form[i].getAttribute('id');
            //Just to check if working or Not: console.log(email);

            saveDetails(email, name, phoneNo, year, comments, eventCode);
            //document.querySelector('form').reset();
        }

        function saveDetails(email, nam, phnNo, yr, coms, eventCode) {
            if (phnNo.length != 10) {
                alert('Not a valid phone number');
            }
            else {
                var newRefVariable = refVariable.push();
                newRefVariable.set(
                    {
                        Email: email,
                        Name: nam,
                        Phone: phnNo,
                        Year: yr,
                        Comments: coms,
                        ForEvent: eventCode
                    }
                );
                alert('Form Submitted');
            }
        }
    }
    
}


firebaseCall();
