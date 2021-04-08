// Data
const clicks = document.getElementById('loc');
const img = document.getElementById('cImg');

var totalClicks = 0;

function loadData() {
  var totalClicks = parseInt(localStorage.totalClicks);
  clicks.textContent = "Clicks: " + totalClicks;
};

// Event listeners
img.addEventListener("click", function() {
  totalClicks += 1;
  localStorage.totalClicks = totalClicks;;
  clicks.textContent = "Clicks: " + totalClicks;
});
