function makeFullScreen() {
    var element = document.getElementById("fullscreenarea");
    if (!document.Fullscreen && !document.webkitFullScreen && !document.msRequestFullscreen) {
        document.getElementById('dontshowfullbtn').classList.add('d-none');
      if (element.requestFullScreen) {
        element.requestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }
    document.getElementById('dontshowfullbtn').classList.remove('d-none');
  }