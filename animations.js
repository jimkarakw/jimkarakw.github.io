//Animations

gsap.registerPlugin(ScrollTrigger);

const allrows = gsap.utils.toArray(".flex_row");
let bgs = document.getElementsByClassName("flex_row");

allrows.forEach((row, i) => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: row,
      start: "top 40%",
      end: "bottom 40%",
      toggleActions: "play pause resume pause",
      markers: false,
      invalidateOnRefresh: true, // to make it responsive
    },
  });
  // add animations
  tl.fromTo(
    row.children[(i = 1)],
    { clipPath: "circle(0% at 50% 0)" },
    {
      clipPath: "circle(141.8% at 50% 0)",
      duration: 1,
      ease: Linear.easeNone,
    }
  )
    .fromTo(
      row.children[(i = 1)].childNodes[i].childNodes[i],
      { opacity: 0, scale: 1.5, left: "200%" },
      {
        opacity: 1,
        scale: 1,
        left: "60%",
        ease: Linear.easeNone,
      },
      "-=0.5"
    ) //Change bg colors accordingly
    .to(bgs[1].children[1], { backgroundColor: "#BEB8B3" })
    .to(bgs[2].children[1], { backgroundColor: "#A0BDEA" })
    .to(bgs[3].children[1], { backgroundColor: "#E88B7A" })
    .to(bgs[4].children[1], { backgroundColor: "#C7C3A8" });
  // End add animations
});

//Title animation
//Split Title
const ttl = document.querySelector(".main_ttl");
const ttlString = ttl.textContent;
const splitText = ttlString.split(" ");
ttl.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  ttl.innerHTML += "<span class='fade'>" + splitText[i] + `&nbsp` + "</span>";
}

const wordsAn = gsap.timeline();
wordsAn.to(".fade", { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 });

//Split Works text
const allWorkTtls = gsap.utils.toArray(".work_big_ttl");

allWorkTtls.forEach((workTitle) => {
  const workTitleString = workTitle.textContent;
  const workTitleSplit = workTitleString.split(" ");
  workTitle.textContent = " ";
  for (let i = 0; i < workTitleSplit.length; i++) {
    workTitle.innerHTML +=
      "<span class='fade'>" + workTitleSplit[i] + `&nbsp` + "</span>";
  }
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: workTitle,
      start: "-245% 40%",
      end: "300% 40%",
      toggleActions: "play pause resume pause",
      markers: false,
      invalidateOnRefresh: true, // to make it responsive
    },
  });
  tl.to(".fade", { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.5");
});
