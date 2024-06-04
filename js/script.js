const navbarNav = document.querySelector ('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik di luar side bar untuk menghilangkan nav 
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


// doom name
function replaceName() {
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name-hero").innerHTML = name
}

replaceName();


function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const email = document.forms["message-form"]["email"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name =="" || email =="" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUi(name, email, birthDate, gender, messages);

    return false;

}

function setSenderUi(name, email, birthDate, gender, messages) {
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-email").innerHTML = email;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}