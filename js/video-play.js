var video = document.querySelector("#video"),
    button = document.querySelector("#video-btn");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".video-block-information-playbtn").click(function() {
  $(".video-block-information-playbtn").addClass('video-block-information--hide');
})