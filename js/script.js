// Data
const clicks = document.getElementById('loc');
const img = document.getElementById('cImg');

var totalClicks = 0;
var cps = 0;

// functions
function loadData() {
   totalClicks = JSON.parse(localStorage.getItem('clicks'));
   clicks.textContent = "Clicks: " + totalClicks;
}

// Event listeners
img.addEventListener("click", function() {
  totalClicks += 1;
  localStorage.setItem("clicks", JSON.stringify(totalClicks));
  clicks.textContent = "Clicks: " + totalClicks;
});
