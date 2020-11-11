//global
var add = [
    "",
    ""
];
function loadForm(){
    var loginForm = document.querySelector('form');
    loginForm.addEventListener('submit', login);    
}

//login form
function login(e){
    e.preventDefault(); //to stop actions
    var userN = document.getElementById('userN').value;
    var pwd = document.getElementById('pwd').value;
    alert('h');

    //checks if the details present are true or not
    firebase.auth().onAuthStateChanged((user) => {
        //if user exists - provide entry
        if (user) {
            window.location = "../log/index.html";
        }
    });

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
    window.location = "../admin/index.html";
}

