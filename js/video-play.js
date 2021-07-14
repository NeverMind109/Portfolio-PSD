var video = document.getElementById("video"),
    button = document.getElementById("video-btn");

button.addEventListener("click", function() {
  video.play()
  video.setAttribute("controls","controls");
}, false);

$(".video-block-playbtn").click(function() {
  $(".video-block-playbtn").addClass('video-block-playbtn--hide');
})