var loginForm = document.querySelector('form');
loginForm.addEventListener('submit', login);

function login(e){
    e.preventDefault(); //to stop actions
    var userN = document.getElementById('userN').value;
    var encryptedUser = CryptoJS.AES.encrypt(userN, "Secret Passphrase");
    var decryptedUser = CryptoJS.AES.decrypt(encryptedUser, "Secret Passphrase");

    var pwd = document.getElementById('pwd').value;
    var encryptedPwd = CryptoJS.AES.encrypt(pwd, "Secret Passphrase"); //encrypting password
    var decryptedPwd = CryptoJS.AES.decrypt(encryptedPwd, "Secret Passphrase"); //descrepting password
    
    if (decryptedUser == '746563686b6e696768747341646d696e' && decryptedPwd == '746563686b6e696768747341646d696e'){ //remains same always
        alert('success');
    }
    else{
        alert('Sorry! Can not login');
    }
}