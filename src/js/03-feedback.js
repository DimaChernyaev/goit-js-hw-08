import throttle from "lodash.throttle";

const USER_INFO_KEY = "feedback-form-state";

const formEl = document.querySelector('.feedback-form');
const email = formEl.email;
const message = formEl.message;

formEl.addEventListener('submit', submitUserInfo);
email.addEventListener('input', throttle(savedUserInfo, 500));
message.addEventListener('input', throttle(savedUserInfo, 500));


function submitUserInfo(event) {
    event.preventDefault();

    event.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(USER_INFO_KEY)));
    localStorage.removeItem(USER_INFO_KEY);
}

function savedUserInfo() {
    const userInfo = {
        email:  email.value,
        message: message.value,
    };

    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
} 


function demonstrateSavedUserInfo() {

    const haveUserKey = localStorage.getItem(USER_INFO_KEY);

    if (haveUserKey) {
        const sevedUserInfoObj = JSON.parse(localStorage.getItem(USER_INFO_KEY));
        email.value = sevedUserInfoObj.email;
        message.value = sevedUserInfoObj.message;
    }
}

demonstrateSavedUserInfo()



