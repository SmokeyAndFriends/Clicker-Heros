// Data
const clicks = document.getElementById('loc');
const img = document.getElementById('cImg');

var totalClicks = 0;

function loadData() {
   totalClicks = localStorage.getItem("Clicks");
   clicks.textContent = 'Clicks: ' + totalClicks;
};

// Event listeners
img.addEventListener("click", function() {
  totalClicks += 1;
  localStorage.setItem("clicks", clicks.target.value);
  clicks.textContent = "Clicks: " + totalClicks;
});
