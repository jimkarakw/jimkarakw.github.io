//Display date & time

// Inject the time in the UI
let renderTime = function () {
  let time = new Date();
  clock.textContent = time.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
};

// Render the time on load
renderTime();

// Update the time every second
setInterval(renderTime, 1000);

//End Display date & time

//Auto Year
document.querySelector("#copyright-year").innerText = new Date().getFullYear();
