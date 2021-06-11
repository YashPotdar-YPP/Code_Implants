function imagefun() {
    var Image_Id = document.getElementById('IMG2');
    if (Image_Id.src.match("assets/Image/Capture.PNG")) {
        Image_Id.src = "assets/Image/main_img2.PNG";
    }
    else {
        Image_Id.src = "assets/Image/main_img3.PNG";
    }
}
//   for button change
function imagefun2() {
    var Image_Id = document.getElementById('IMG2');
    if (Image_Id.src.match("assets/Image/main_img3.PNG")) {
        Image_Id.src = "assets/Image/main_img2.PNG";
    }
    else {
        Image_Id.src = "assets/Image/Capture.PNG";
    }
}
