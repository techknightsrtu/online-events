//checks if the details present are true or not
firebase.auth().onAuthStateChanged((user) => {
    //if user exists - provide entry
    if (user) {

        var user = firebase.auth().currentUser;
        if (user != null) {
            // window.location = add[1].toString(CryptoJS.enc.Utf8);
            window.location = "../index.html";
        }

    }
});

//global - For this line refer forUs.docx (Password with Shubham)
eval(function (p, a, c, k, e, d) { e = function (c) { return c }; if (!''.replace(/^/, String)) { while (c--) { d[c] = k[c] || c } k = [function (e) { return d[e] }]; e = function () { return '\\w+' }; c = 1 }; while (c--) { if (k[c]) { p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]) } } return p }('1 17=[0("../16/4.5"),0("../15/4.5")];14 0(6){1 8=3.7.13(6,"9 10");1 2=3.7.11(8,"9 10");12 2}', 10, 18, 'performEncr|var|decryptedStr|CryptoJS|index|html|addStr|AES|encryptedStr|Secret|Passphrase|decrypt|return|encrypt|function|log|admin|add'.split('|'), 0, {}))

function loadForm(){
    var loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', login);    
}

//login form
function login(e){
    e.preventDefault(); //to stop actions
    var userN = document.getElementById('userN').value;
    var pwd = document.getElementById('pwd').value;

    firebase.auth().signInWithEmailAndPassword(userN, pwd).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage);
    });
}

//Firebase logout function
function logout(){
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
    }).catch(function (error) {
        // An error happened.
    });
    window.location = add[0].toString(CryptoJS.enc.Utf8);
}

