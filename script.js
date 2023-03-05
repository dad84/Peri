function generateQR() {
  // Get the input values
  var description = document.getElementById("description").value;
  var image = document.getElementById("image").files[0];

  // Build the image URL on your server
  var imageURL = "https://example.com/images/" + image.name;

  // Upload the image to your server
  var formData = new FormData();
  formData.append("image", image);
  fetch("https://example.com/upload", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  // Concatenate the input values into a single string
  var text = description + ", " + imageURL;

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
  // Get the QR code image
  var qrImage = document.getElementById("qrcode").getElementsByTagName("img")[0];

  // Open the QR code image in a new window
  var windowContent = "<!DOCTYPE html>";
  windowContent += "<html>";
  windowContent += "<head>";
  windowContent += "<title>QR-kode</title>";
  windowContent += "</head>";
  windowContent += "<body>";
  windowContent += qrImage.outerHTML;
  windowContent += "</body>";
  windowContent += "</html>";
  var printWindow = window.open("", "Print", "height=400,width=600");
  printWindow.document.open();
  printWindow.document.write(windowContent);
  printWindow.document.close();
}

function downloadQR() {
  // Get the QR code image
  var qrImage = document.getElementById("qrcode").getElementsByTagName("img")[0];

  // Create a temporary link element and click it to download the QR code image
  var link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-kode.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printQR() {
  // Get the QR code image
  var qrImage = document.getElementById("qrcode").getElementsByTagName("img")[0];

  // Create a new window and write the QR code image to it
  var printWindow = window.open("", "Print", "height=400,width=600");
  printWindow.document.write("<html><head><title>QR-kode</title></head><body>");
  printWindow.document.write(qrImage.outerHTML);
  printWindow.document.write("</body></html>");
  printWindow.print();
  printWindow.close();
}
