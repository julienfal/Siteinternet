var img = new Image();
img.src = "Images/France.jpg";
img.onload = function() {
context.scale(0.5, 0.5);
context.drawImage(img, 200, 0, 200, 200);
}