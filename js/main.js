var modal = document.getElementById("the_modal");
var img = document.getElementById("the_img");
var modalImg = document.getElementById("img"),
    modalCaption = document.getElementById("caption");


img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML = this.alt;
}
var close = document.getElementsByClassName("close")[0];
close.onclick = function() {
    modal.style.display = "none";
}
document.onkeydown = function(e) {
    if (e.keyCode == 27) {
        modal.style.display = "none";
    }

}