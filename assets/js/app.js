const signUpBtn = document.querySelector('.sign_up_btn');
const personWalkingBtn = document.querySelector('.fa-person-walking-arrow-right');
const premiumBtn = document.querySelector('.premium_btn');
const letsEnjoyBtn = document.querySelector('.letsEnjoyBtn');
const Block = document.querySelector('.blocks')
const hamburger = document.querySelectorAll('.hamburger')
const upperBlock = document.querySelector('.upperBlock')
const middleBlock = document.querySelector('.middleBlock')
const lowerBlock = document.querySelector('.lowerBlock')
const mobileNavbar = document.querySelector('.mobile-navigation')
const mobileNavLinks = document.querySelectorAll('.mb-nav-link')
const signUpPage = document.querySelector('.sign-up')

const usernameInput = document.querySelector('#username');
const invalidUsernameMessage = document.querySelector('.message-username-invalid')
const validUsernameMessage = document.querySelector('.message-username-valid')
const notiUser = document.querySelector('.noti-user')

const emailInput = document.querySelector("#email")
const invalidEmailMessage = document.querySelector('.message-email-invalid')
const validEmailMessage = document.querySelector('.message-email-valid')
const notiEmail = document.querySelector('.noti-email')

const passInput = document.querySelector("#password")
const invalidPassMessage = document.querySelector('.message-password-invalid')
const invalidPassMessageInfo = document.querySelector('.message-password-invalid-info')
const validPassMessage = document.querySelector('.message-password-valid')
const notiPass = document.querySelector('.noti-pass')
const accountName = document.querySelector('.acc')
const dropDown = document.querySelector('.dropdown')
const logInGoogle = document.querySelector('.log-in')
const loaderGif = document.querySelector('.loader')
const createdSuccessful = document.querySelector('.showingSuccessful')
const vectorImg = document.querySelector('.vector-my-app')
const info = document.querySelector('.vector-info')
const showProfile = document.querySelector('.Myprofile')
const naming = document.querySelector('.name')
const email = document.querySelector('.email')
const Lookpassword = document.querySelector('.password')
const closeProfile = document.querySelector('.close-profile')
const logOutBtn = document.querySelector('.log-out-btn')

const createButton = document.querySelector('.create-acc')
let userPass = "";
let users = [];
let emails = [];
let passwords= [];
let messages = 'message';
let count = 0;

const justClickedSignUp = () => {
    signUpBtn.classList.add('clicked');
    setTimeout(hasRemovedSignUp, 400);
}
const hasRemovedSignUp = () => {
    signUpBtn.classList.remove('clicked');
}

const justClickedPremium = () => {
    premiumBtn.classList.add('clicked');
    setTimeout(hasRemovedPremium, 400);
}
const hasRemovedPremium = () => {
    premiumBtn.classList.remove('clicked');
}

const justClickedEnjoy = () => {
    letsEnjoyBtn.classList.add('clicked');
    setTimeout(hasRemovedEnjoy, 400);
}
const hasRemovedEnjoy = () => {
    letsEnjoyBtn.classList.remove('clicked');
}

const justClickedPerson = () => {
    personWalkingBtn.classList.add('clicked');
    personWalkingBtn.style.color = "red";
    invalidUsernameMessage.classList.remove(messages)
    invalidEmailMessage.classList.remove(messages)
    invalidPassMessage.classList.remove(messages)
    validEmailMessage.classList.remove(messages)
    validPassMessage.classList.remove(messages)
    validUsernameMessage.classList.remove(messages)
    usernameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    setTimeout(hasRemovedPerson, 400);
    setTimeout(hasRemovedPersonColor, 400);
    setTimeout(togglingSignUpPage, 300)
}
const hasRemovedPerson = () => {
    personWalkingBtn.classList.remove('clicked');
}
const hasRemovedPersonColor = () => {
    personWalkingBtn.style.color = "black";
}

const justClickedGoogle = () => {
    logInGoogle.classList.add('clicked');
    setTimeout(hasRemovedGoogle, 400);
}
const hasRemovedGoogle = () => {
    logInGoogle.classList.remove('clicked');
}




premiumBtn.addEventListener('click', justClickedPremium);
signUpBtn.addEventListener('click', justClickedSignUp);
letsEnjoyBtn.addEventListener('click', justClickedEnjoy);
personWalkingBtn.addEventListener('click', justClickedPerson);
logInGoogle.addEventListener('click', justClickedGoogle);

Block.addEventListener('click', () => {
    upperBlock.classList.toggle('rotateBlock')
    middleBlock.classList.toggle('rotateBlock')
    lowerBlock.classList.toggle('rotateBlock')
    mobileNavbar.classList.toggle('showNavbar')
})

mobileNavLinks.forEach(e => {
    e.addEventListener('click', () => {
        upperBlock.classList.toggle('rotateBlock')
        middleBlock.classList.toggle('rotateBlock')
        lowerBlock.classList.toggle('rotateBlock')
        mobileNavbar.classList.toggle('showNavbar')
    })
})

signUpBtn.addEventListener('click', () => {
    setTimeout(togglingSignUpPage,800);
})

function togglingSignUpPage() {
        return   signUpPage.classList.toggle('show');
}
const hasClicked = () => {
    createButton.classList.remove('clicked');
}




const checkingValidation = (name) => {
    let username = name.target.value
    if (username === "") {
        invalidUsernameMessage.classList.add(messages)
        validUsernameMessage.classList.remove(messages)
        notiUser.classList.add(messages)
    } else if (username.slice(-10) === "@gmail.com") {
        invalidUsernameMessage.classList.add(messages)
        validUsernameMessage.classList.remove(messages)
        notiUser.classList.add(messages)
    } else{
        validUsernameMessage.classList.add(messages)
        invalidUsernameMessage.classList.remove(messages)
        notiUser.classList.remove(messages)
        users.push(username);
    }
}

const checkingValidationEmail = (email) => {
    let userEmail = email.target.value;
    if (userEmail === ""){
        invalidEmailMessage.classList.add(messages)
        validEmailMessage.classList.remove(messages)
        notiEmail.classList.add(messages)
    } else if (userEmail.slice(-10) !== "@gmail.com"){
        invalidEmailMessage.classList.add(messages)
        validEmailMessage.classList.remove(messages)
        notiEmail.classList.add(messages)
    } 
    else {
        validEmailMessage.classList.add(messages)
        invalidEmailMessage.classList.remove(messages)
        notiEmail.classList.remove(messages)
        emails.push(email);
    }
}

const checkingValidationPassword = (pass) => {
    userPass = pass.target.value;
    passwords.push(userPass)
    for (let i = 0; i< passwords.length; i++) {
        if (passwords[i].length <= 6) {
            invalidPassMessage.classList.add(messages)
            invalidPassMessageInfo.classList.remove(messages)
            validPassMessage.classList.remove(messages)
            notiPass.classList.add(messages)
        }  else if(passwords[i] === "") {
            invalidPassMessageInfo.classList.add(messages)
            validPassMessage.classList.remove(messages)
            notiPass.classList.add(messages)
        }
        else {
            invalidPassMessageInfo.classList.remove(messages)
            validPassMessage.classList.add(messages)
            invalidPassMessage.classList.remove(messages)
            notiPass.classList.remove(messages)
        }
    }
}


usernameInput.addEventListener('change', checkingValidation)
emailInput.addEventListener('change', checkingValidationEmail)
passInput.addEventListener('change', checkingValidationPassword)

const removeGif = () => {
    loaderGif.classList.remove('show')
}

createButton.addEventListener('click', () => {
    let userEmail = emailInput.value;
    if (usernameInput.value === ""){
        invalidUsernameMessage.classList.add(messages);
        notiUser.classList.add(messages)
    } else if (emailInput.value === "") {
        invalidEmailMessage.classList.add(messages);
        notiEmail.classList.add(messages)
    } else if (passInput.value === "" ) {
        invalidPassMessageInfo.classList.add(messages);
        notiPass.classList.add(messages)
    } else if (userPass.length >= 8 && userEmail.slice(-10) === "@gmail.com") {
        signUpPage.classList.toggle('show');
        signUpBtn.classList.add('show');
        accountName.classList.add('show')
        accountName.textContent = usernameInput.value;
        if (usernameInput.value === "" && emailInput.value === "" && passInput.value === "") {
            validUsernameMessage.classList.remove(messages)
            validEmailMessage.classList.remove(messages)
            validPassMessage.classList.remove(messages)
        }
        createdSuccessful.classList.add('show');
        setTimeout(() => {
            createdSuccessful.classList.remove('show')
        }, 2000)
    }
    createButton.classList.add('clicked');
    setTimeout(hasClicked, 100)
})

accountName.addEventListener('click', () => {
    dropDown.classList.toggle('show')
})
const removeLogOutClick = () => {
    logOutBtn.classList.toggle('clicked')
}
const showingSignUpBtn = () => {
    signUpBtn.classList.remove('show');
}
const dropDownToggling = () => {
    dropDown.classList.remove('show');
}

accountName.addEventListener('click', () => {
    showProfile.classList.toggle('show');
    showUserDetail()
})

const showUserDetail = () => {
    naming.textContent =`Name : ${usernameInput.value}`;
    email.textContent = `Email : ${emailInput.value}`;
    Lookpassword.textContent = `Password : ${passInput.value}`
}
showUserDetail();

closeProfile.addEventListener('click', () => {
    showProfile.classList.toggle('show');
})

logOutBtn.addEventListener('click', () => {
    loaderGif.classList.add('show')
    setTimeout(() => {
        loaderGif.classList.remove('show')
    },4000);
    signUpBtn.classList.remove('show');
    accountName.classList.remove('show')
    showProfile.classList.toggle('show');
    validUsernameMessage.classList.remove(messages)
    invalidUsernameMessage.classList.remove(messages)
    validEmailMessage.classList.remove(messages)
    validPassMessage.classList.remove(messages)
    usernameInput.value = "";
    emailInput.value = "";
    passInput.value = "";
    showUserDetail();
})