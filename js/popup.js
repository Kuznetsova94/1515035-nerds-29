const contactButton = document.querySelector(".contact-button");
const mailPopup = document.querySelector(".modal-mail");
const popupClose = mailPopup.querySelector(".modal-close");
const mailForm = mailPopup.querySelector(".mail-form");
const nameField = mailPopup.querySelector(".name-input");
const mailField = mailPopup.querySelector(".email-input");
const textField = mailPopup.querySelector(".textarea-input");

const isStorageSupport = true;
let storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

contactButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailPopup.classList.add("modal-show");

    if (storage) {
        nameField.value = storage;
        mailField.focus();
    } else {
        nameField.focus();
    }
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mailPopup.classList.remove("modal-show");
    mailPopup.classList.remove("modal-error");
});

mailForm.addEventListener("submit", function (evt) {
    if (!nameField.value || !mailField.value || !textField.value) {
        evt.preventDefault();
        mailPopup.classList.remove("modal-error");
        mailPopup.offsetWidth = mailPopup.offsetWidth;
        mailPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", nameField.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mailPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mailPopup.classList.remove("modal-show");
            mailPopup.classList.remove("modal-error");
        }
    }
});