//your JS code here. If required.
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');

// Open the modal
openModalButton.onclick = function() {
    modal.style.display = 'block';
}

// Close the modal when the close button is clicked
closeModalButton.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when clicking outside of the modal-content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
