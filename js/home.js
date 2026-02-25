function openLetter() {
    document.getElementById('letterPopup').style.display = 'flex';
}

function closeLetter() {
    document.getElementById('letterPopup').style.display = 'none';
}

// Close popup when clicking outside
window.onclick = function(event) {
    var popup = document.getElementById('letterPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

