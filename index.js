// Get the contact link and popup
const contactLink = document.getElementById('contact-link');
const contactPopup = document.getElementById('contact-popup');

// Show popup when contact link is clicked
contactLink.addEventListener('click', function (event) {
    event.preventDefault();  // Prevent default action of the link
    contactPopup.style.display = 'flex';  // Display the popup
});

// Function to close the popup
function closePopup() {
    contactPopup.style.display = 'none';  // Hide the popup
}
