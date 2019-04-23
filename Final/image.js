
//trying to check if the image is visible using an if statement
function toggleImage(Image) {
  var image = document.getElementById(Image);
  if (image.className='hidden') {
  image.className=('visible');
  }
  if (image.className='visible') {
  image.className=('hidden');
  }
}
