let heading = document.getElementById('typingHeading');
let text = 'This is a continuous typing transition';
let index = 0;

function preload() {
  // Load any assets if needed
}

function setup() {
  // Set up the canvas or other elements
}

function draw() {
  // Main animation loop
  if (index < text.length) {
    heading.textContent += text[index];
    index++;
  } else {
    noLoop(); // Stop the animation loop
  }
}
<script>
  window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
</script>