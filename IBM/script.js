function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
    const registerPopup = document.getElementById('register-popup');
    const loginPopup = document.getElementById('login-popup');
    const contactPopup = document.getElementById('contact-popup');
    if (event.target == registerPopup) {
        registerPopup.style.display = 'none';
    }
    if (event.target == loginPopup) {
        loginPopup.style.display = 'none';
    }
    if (event.target == contactPopup) {
        contactPopup.style.display = 'none';
    }
}