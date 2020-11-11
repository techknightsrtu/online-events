var loginForm = document.querySelector('form');
loginForm.addEventListener('submit', login);

function login(e){
    e.preventDefault(); //to stop actions
    var userN = document.getElementById('userN').value;
    var pwd = document.getElementById('pwd').value;
    var encryptedPwd = CryptoJS.AES.encrypt(pwd, "Secret Passphrase");
    var decryptedPwd = CryptoJS.AES.decrypt(encryptedPwd, "Secret Passphrase");
    if (decryptedPwd == '746563686b6e696768747341646d696e'){
        window.location = "https://github.com/"
    }
}