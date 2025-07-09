let qrCodeContent = document.getElementById('qr-code-content');
let myform = document.getElementById("my-form");
let qrImgBox = document.getElementById("qr-image-box");
let qrImg = document.getElementById('qr-image')

let add = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

function qrCodeMaker(qrCodeContent) {
    qrImg.src = add + qrCodeContent.value;
}

myform.addEventListener('submit', ($event) => {
    $event.preventDefault();
    if (qrCodeContent.value.length === 0 ) {
        qrCodeContent.classList.add('error')
        setTimeout(() => {
            qrCodeContent.classList.remove("error")
        }, 1000)
    } else {
        qrCodeMaker(qrCodeContent);
        qrImgBox.classList.add("show-image");
        myform.reset();
    }
})