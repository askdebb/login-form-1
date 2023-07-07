const Name = document.getElementById ('name')
const passWD = document.getElementById ('password')
const form = document.getElementById ('form')
const errorID_name = document.getElementById ('name-error-here')
const errorID_password = document.getElementById ('password-error-here')


form.addEventListener ('submit', (e) => {
    let nameMessage = []
    let passMsg = []

    if(Name.value === '' || Name.value === null) {
        nameMessage.push("Name is required.");
        // console.log(nameMessage);
    }
    // console.log(nameMessage)
    if(nameMessage.length > 0) {
        e.preventDefault()
        errorID_name.style = 'display: block; font-size:12px;';
        errorID_name.innerText = nameMessage[0];
    }
    
    if(passWD.value.length <= 6) {
        passMsg.push("Password must have more than 6 characters.")
        console.log(passMsg)
    }

    if(passMsg.length > 0) {
        e.preventDefault()
        errorID_password.style = 'display: block; font-size:12px;';
        errorID_password.innerText = passMsg[0];    }
});