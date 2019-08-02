function light(sw) {
  var pic;
  if (sw == 0) {
    pic = "assets/img/off.gif"
  } else {
    pic = "assets/img/on.gif"
  }
  document.getElementById('myImage').src = pic;
}