// Data
const clicks = document.getElementById('loc');
const img = document.getElementById('cImg');

var totalClicks = 0;
var cps = 0;
var wipe = NaN;

// functions
function loadData() {
   totalClicks = JSON.parse(localStorage.getItem('clicks'));
   clicks.textContent = "Clicks: " + totalClicks;
};

function wipeData() {
  wipe = prompt("WARNING THIS WILL WIPE YOUR DATA(Including Total Clicks). \nARE YOU SURE? [y/n]")
  switch(wipe) {
    case("y"): {
      localStorage.removeItem('clicks');
      totalClicks = 0;
      clicks.textContent = "clicks" + totalClicks;
      location.reload();
    }
    case("n"): {
      return;
    }
    default: {totalClicks}
  };
};

// Event listeners
img.addEventListener("click", function() {
  totalClicks += 1;
  localStorage.setItem("clicks", JSON.stringify(totalClicks));
  clicks.textContent = "Clicks: " + totalClicks;
});
