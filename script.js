function generateQR() {
  // Get the input values
  var description = document.getElementById("description").value;
  var image = document.getElementById("image").value;

  // Concatenate the input values into a single string
  var text = description + ", " + image;

  // Generate the QR code using qrcode.js
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: text,
    width: 256,
    height: 256,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
}

function sendQR() {
  // Get the QR code image as a data URI
  var qrCodeImage = document.getElementById("qrcode").getElementsByTagName("img")[0].src;

  // TODO: Implement sending logic here
}

function downloadQR() {
  // Get the QR code image as a data URI
  var qrCodeImage = document.getElementById("qrcode").getElementsByTagName("img")[0].src;

  // Create a link element and set its download attribute
  var link = document.createElement("a");
  link.download = "qrcode.png";

  // Set the href attribute to the data URI
  link.href = qrCodeImage;

  // Click the link to initiate the download
  link.click();
}

function printQR() {
  // Get the QR code image as a data URI
  var qrCodeImage = document.getElementById("qrcode").getElementsByTagName("img")[0].src;

  // Create an image element with the QR code
  var image = new Image();
  image.src = qrCodeImage;

  // Open a new window and print the image
  var w = window.open();
  w.document.write("<html><head><title>QR Code</title></head><body>");
  w.document.write(image.outerHTML);
  w.document.write("</body></html>");
  w.print();
  w.close();
}