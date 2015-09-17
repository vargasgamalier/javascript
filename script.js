function changeImage() {
  var image = document.getElementById('myImage');
  
  if (image.src.match("bulbon")){
    image.src = "images/pic_bulboff.gif"
  } else {
    image.src = "images/[ic_bulbon.gif";
  }
}
