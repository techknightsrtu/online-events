crawlAnim()

//for animation at the start
function crawlAnim() {
    var welTxt = document.querySelector('.welcome-txt')
    welTxt.style.animation = `crawlUp 1.6s 0s ease-in-out`

    var addEvt = document.querySelector('.add-event')
    setTimeout(() => {
        addEvt.classList.add('show-me')
    }, 1500);
}

//main-form
var form = document.querySelector('form')
form.addEventListener('submit', runAuthentication)

//authentication 
function runAuthentication(e){
    e.preventDefault();
    //password prompt
    var keyCode = document.querySelector('.key-code')
    keyCode.classList.add('show-me')
    
    //password area
    var validationForm = document.querySelector('.validation-form')
    validationForm.addEventListener('submit', runCipher)
    
    //to close the promt after event has been submitted
    keyCode.classList.add('show-me')
    
    //reset validation form
    validationForm.reset()
}

//running cipher
function runCipher(e){
    e.preventDefault();
    var pwdStr = document.querySelector('#pwd-str').value
    var keyNo = document.querySelector('#key-pwd').value
    
    var decryptedPwd = ''
    let decryptedLtr
    
    //checking pwd by invoking
    for (let pwd = 0; pwd < pwdStr.length; pwd++) {
        decryptedLtr = letterDecryption(pwdStr[pwd], keyNo)
        decryptedPwd += decryptedLtr
    }
    
    if (decryptedPwd === 'zkinqtomnzyajsot') {
        fetchValues()
        alert('Event Created!')
    }
    else{
        alert('Not Correct')
    }
}

function letterDecryption(letter, key){
    //fetching ascii value of letter
    var ltrAscii = letter.charCodeAt(0);
    
    //ascii value of 'a'
    var aAscii = 97
    var alphaSize = 26

    //algorithm
    var trueValue = aAscii + (((ltrAscii - aAscii) + Number(key)) % alphaSize)

    //decrypted letter
    var decryLtr = String.fromCharCode(trueValue)
    
    return decryLtr
}

//firebase refernce varaible
var eventReference = firebase.database().ref().child('Events/');
function fetchValues(){
    //getting values
    var eventCode = document.querySelector('#eventCode').value;
    var eventDate = document.querySelector('#eventDT').value;
    var eventName = document.querySelector('#eventName').value;
    var eventType = document.querySelector('#eventType').value;
    var eventVenue = document.querySelector('#eventVenue').value;
    var eventFee = document.querySelector('#eventFee').value;
    var eventDesc = document.querySelector('#eventDesc').value;
    
    //saving to firebase
    saveEvent(eventCode, eventDate, eventName, eventType, eventVenue, eventFee, eventDesc);
}

function saveEvent(evtCode, evtDt, evtNm, evtType, evtVenue, evtFee, evtDesc) {
    var newEvent = eventReference.push();
    newEvent.set(
    {
        eventCode: evtCode,
        eventDate: evtDt,
        eventDesc: evtDesc,
        eventFee: evtFee,
        eventName: evtNm,
        eventType: evtType,
        eventVenue: evtVenue
    });

    //main form reset
    form.reset();
}

