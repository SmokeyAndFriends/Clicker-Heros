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
  wipe = prompt("WARNING THIS WILL WIPE YOUR DATA (Including Total Clicks). \nARE YOU SURE? [y/n]")
  switch(wipe) {
    case("y"): {
      totalClicks = 0;
      localStorage.setItem('clicks', 0);
      clicks.textContent = "Clicks: " + totalClicks;
    }
    case("n"): {
      return;
    }
  };
};

// Event listeners
img.addEventListener("click", function() {
  totalClicks += 1;
  localStorage.setItem("clicks", JSON.stringify(totalClicks));
  clicks.textContent = "Clicks: " + totalClicks;
});
