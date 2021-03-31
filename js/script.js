// Data
const loc = document.getElementById('loc');
const img = document.getElementById('cImg');

var clicks = 0;

// Event listeners
img.addEventListener("click", function() {
  clicks += 1;
  loc.textContent = "Lines of code: " + clicks;
});
