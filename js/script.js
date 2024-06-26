console.log("Hello world!");

const myName = "Jonas Schmedtmann";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);


const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


const togglebtns = document.querySelectorAll('.nav-toggle');
const sideBar = document.querySelector('div.side-navbar');
const sidebarLinks = document.querySelectorAll('.side-navbar li');
const threeDotMenu = document.querySelector('div.nav-menu-icon');
const navMenu = document.querySelector('div.nav-menu');
const backgroundFader = document.getElementsByClassName('background-fader')[0];


function toggleSidebar() {
  sideBar.classList.toggle('show-side-navbar');
  backgroundFader.classList.toggle('fade-background');
}

togglebtns.forEach(togglebtn => {
  togglebtn.onclick = function() {
    toggleSidebar();
  };
});

backgroundFader.onclick = () => {
  toggleSidebar(); 
};

sidebarLinks.forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    toggleSidebar();
  };
});

threeDotMenu.onclick = function() {
  navMenu.classList.toggle('show-nav-menu');
};

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});



const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});



const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);


function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

