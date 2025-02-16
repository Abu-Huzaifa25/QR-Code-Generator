# QR Code Generator

A simple, fully responsive QR Code Generator built with HTML, CSS, JavaScript, and Bootstrap. This project allows users to input their information (Name, Email, Snapchat ID, and Instagram) and dynamically generates a QR code based on the provided data. The generated QR code is displayed in a modal popup, and the page refreshes automatically when the modal is closed.

## Features

- **Responsive Design:**  
  Uses CSS Flexbox to center the container both vertically and horizontally on all screen sizes.

- **Minimalistic UI:**  
  A clean interface with a compact 300px wide container and minimal margins/padding.

- **Dynamic QR Code Generation:**  
  Utilizes the [QR Code API](https://api.qrserver.com/v1/create-qr-code/) to generate QR codes from user input.

- **Modal Popup:**  
  Displays the generated QR code in a Bootstrap modal for a better user experience.

- **Auto Refresh:**  
  The page automatically reloads after closing the modal, resetting the form for new input.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- An active Internet connection to load Bootstrap from the CDN and call the QR Code API.

### How to Use

1. **Clone or Download:**  
   Clone the repository or download the project files.

2. **Open the Application:**  
   Open the `index.html` file in your web browser.

3. **Enter Your Details:**  
   Fill in the input fields for **Name**, **Email**, **Snapchat ID**, and **Instagram**.

4. **Generate QR Code:**  
   Click the **Generate QR Code** button. A modal will appear displaying your generated QR code.

5. **Reset the Form:**  
   Close the modal to automatically refresh the page and reset the form for a new entry.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **Bootstrap 5**

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **[QR Code API](https://api.qrserver.com/v1/create-qr-code/):** Provides the service to generate QR codes.
- **[Bootstrap](https://getbootstrap.com):** For the responsive design and UI components.

