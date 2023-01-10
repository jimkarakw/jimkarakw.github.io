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

//Anchor links
window.addEventListener(
  "DOMContentLoaded",
  function (e) {
    var links = document.getElementsByTagName("A");
    for (var i = 0; i < links.length; i++) {
      if (!links[i].hash) continue;
      if (links[i].origin + links[i].pathname != self.location.href) continue;
      (function (anchorPoint) {
        links[i].addEventListener(
          "click",
          function (e) {
            anchorPoint.scrollIntoView(true);
            e.preventDefault();
          },
          false
        );
      })(document.getElementById(links[i].hash.replace(/#/, "")));
    }
  },
  false
);

//Auto Year
document.querySelector("#copyright-year").innerText = new Date().getFullYear();
