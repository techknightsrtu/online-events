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
form.addEventListener('submit', runAuthentication)

function runAuthentication(){
    var keyCode = document.querySelector('.key-code')
    keyCode.classList.add('show-me')

    var validationForm = document.querySelector('.validation-form')
    validationForm.addEventListener('submit', runCipher)
}

function runCipher(e){
    e.preventDefault();
    var pwdStr = document.querySelector('#pwd-str').value
    var keyNo = document.querySelector('#key-pwd').value
    
    var decryptedPwd = ''
    let decryptedLtr = ''
    for (let pwd = 0; pwd < pwdStr.length; pwd++) {
        decryptedLtr = letterDecryption(pwd[i], keyNo)

        decryptedPwd += decryptedLtr
    }
    if (decryptedPwd === 'cd') {
        fetchValues()
    }
}

function letterDecryption(letter, key){

    var ltrAscii = letter.charCodeAt(0);
    var aAscii = 97
    var alphaSize = 26
    var trueValue = aAscii + (((ltrAscii - aAscii) + key) % alphaSize)
    var decryptedLtr = String.fromCharCode(trueValue)

    return decryptedLtr
}

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

