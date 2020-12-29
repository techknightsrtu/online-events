window.addEventListener('load', crawlAnim)

function crawlAnim() {
    var welTxt = document.querySelector('.welcome-txt')
    welTxt.style.animation = `crawlUp 1.6s 0s ease-in-out`

    var addEvt = document.querySelector('.add-event')
    setTimeout(() => {
        addEvt.classList.add('show-me')
    }, 1500);
}

var form = document.querySelector('form')
form.addEventListener('submit', fetchValues)

var refVariable = firebase.database().ref().child('Events/');
function fetchValues(evt){
    evt.preventDefault()
    var eventCode = document.querySelector('#eventCode').value;
    var eventDate = document.querySelector('#eventDT').value;
    var eventName = document.querySelector('#eventName').value;
    var eventType = document.querySelector('#eventType').value;
    var eventVenue = document.querySelector('#eventVenue').value;
    var eventFee = document.querySelector('#eventFee').value;
    var eventDesc = document.querySelector('#eventDesc').value;
    
    saveEvent(eventCode, eventDate, eventName, eventType, eventVenue, eventFee, eventDesc);
}

function saveEvent(evtCode, evtDt, evtNm, evtType, evtVenue, evtFee, evtDesc) {
    var newRefVariable = refVariable.push();
    newRefVariable.set(
    {
        eventCode: evtCode,
        eventDate: evtDt,
        eventDesc: evtDesc,
        eventFee: evtFee,
        eventName: evtNm,
        eventType: evtType,
        eventVenue: evtVenue
    });

    form.reset();
}
