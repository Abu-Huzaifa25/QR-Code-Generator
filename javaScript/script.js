function generateQR() {
    // Retrieve input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const snapchat = document.getElementById('snapchat').value.trim();
    const instagram = document.getElementById('instagram').value.trim();

    // Validate that all fields are filled
    if (!name || !email || !snapchat || !instagram) {
        alert("Please fill in all fields.");
        return;
    }

    // Combine data into a formatted string
    const qrData = `Name: ${name}\nEmail: ${email}\nSnapchat ID: ${snapchat}\nInstagram: ${instagram}`;

    // Construct the QR code API URL
    const apiURL = "https://api.qrserver.com/v1/create-qr-code/";
    const size = "200x200";
    const qrImageURL = `${apiURL}?size=${size}&data=${encodeURIComponent(qrData)}`;

    // Set the QR code image source
    document.getElementById('qrImage').src = qrImageURL;

    // Show the modal
    var qrModal = new bootstrap.Modal(document.getElementById('qrModal'));
    qrModal.show();
}

// Refresh the page when the modal is closed
const qrModalEl = document.getElementById('qrModal');
qrModalEl.addEventListener('hidden.bs.modal', function () {
    location.reload();
});


