const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', submitHadler);
const userProfile = {};
function submitHadler(event) {
    event.preventDefault();

const email = event.currentTarget.elements.email;
const password = event.currentTarget.elements.password;

if (email.value === "" || password.value === "") {
    alert('Please fill in all fields')
} else {
    userProfile.email = email.value;
    userProfile.password = password.value;
    console.log(userProfile);
}
    event.currentTarget.reset();
}