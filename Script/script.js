function imagefun() {
    var Image_Id = document.getElementById('IMG2');
    if (Image_Id.src.match("https://www.tiqso.com/assets/images/homebanner/CREATE.jpg")) {
        Image_Id.src = "https://www.tiqso.com/assets/images/homebanner/CUSTOM.jpg";
    }
    else {
        Image_Id.src = "https://www.tiqso.com/assets/images/homebanner/TRANSFORMING.jpg";
    }
}
//   for button change
function imagefun2() {
    var Image_Id = document.getElementById('IMG2');
    if (Image_Id.src.match("https://www.tiqso.com/assets/images/homebanner/TRANSFORMING.jpg")) {
        Image_Id.src = "https://www.tiqso.com/assets/images/homebanner/CUSTOM.jpg";
    }
    else {
        Image_Id.src = "https://www.tiqso.com/assets/images/homebanner/CREATE.jpg";
    }
}
