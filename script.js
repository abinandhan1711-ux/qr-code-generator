const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const downloadBtn = document.getElementById("downloadBtn");

function generateQR() {

    if(qrText.value.length === 0){
        alert("Please enter text or URL");
        return;
    }

    const qrUrl =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
        + encodeURIComponent(qrText.value);

    qrImage.src = qrUrl;
    qrImage.style.display = "block";
    downloadBtn.style.display = "block";
}

function downloadQR() {

    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qrcode.png";
    link.click();
}