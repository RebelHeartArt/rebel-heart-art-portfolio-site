console.log("Welcome to Sandi's Portfolio!")

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

function handleNavState() {
  var x = document.getElementById('myNavtoggle');
  if (window.innerWidth < 640) { // Or whatever your mobile breakpoint is
    x.className = 'navtoggle'; // Reset to default state
  }
}

window.onload = handleNavState;
window.onresize = handleNavState;