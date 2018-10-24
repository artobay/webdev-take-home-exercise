var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
};

/* We can add this part if we want the user clicks anywhere outside of the modal for closing it

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
*/

var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;

function openPicture() {
  modal.style.display = "block";
  modalImg.src = this.src;
  modalImg.alt = this.alt;
  captionText.innerHTML = this.nextElementSibling.innerHTML;

}

for (i = 0; i < images.length; i++) {
  images[i].onclick = openPicture;
}
