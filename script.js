/* =========================================================
   LOUD ADS — NEW SITE
   HERO JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const hero = document.querySelector(".hero");
const heroGrid = document.querySelector(".hero-grid");
const heroLogo = document.querySelector(".hero-logo");

const menuToggle = document.querySelector("#menuToggle");
const mobileMenu = document.querySelector("#mobileMenu");


/* =========================================================
   HERO SCROLL INTERACTION
========================================================= */

function updateHeroScroll() {

  if (!hero || !heroGrid) return;

  const rect =
    hero.getBoundingClientRect();

  const heroHeight =
    hero.offsetHeight;

  const scrolled =
    Math.min(
      Math.max(-rect.top, 0),
      heroHeight
    );

  const progress =
    heroHeight > 0
      ? scrolled / heroHeight
      : 0;


  /* GRID MOVEMENT */

  const gridY =
    progress * 35;

  heroGrid.style.setProperty(
    "--grid-y",
    `${gridY}px`
  );


  /* RED GRID GLOW */

  const glow =
    Math.min(progress * 2.2, .75);

  const glowY =
    35 + (progress * 65);

  heroGrid.style.setProperty(
    "--glow-opacity",
    glow
  );

  heroGrid.style.setProperty(
    "--glow-y",
    `${glowY}%`
  );

}

window.addEventListener(
  "scroll",
  updateHeroScroll,
  { passive: true }
);

updateHeroScroll();


/* =========================================================
   HERO MOUSE MOVEMENT
========================================================= */

if (
  hero &&
  heroLogo &&
  window.matchMedia("(pointer:fine)").matches
) {

  hero.addEventListener(
    "mousemove",
    event => {

      const rect =
        hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) /
        rect.width -
        .5;

      const y =
        (event.clientY - rect.top) /
        rect.height -
        .5;


      heroLogo.style.setProperty(
        "--logo-x",
        `${x * 12}px`
      );

      heroLogo.style.setProperty(
        "--logo-y",
        `${y * 8}px`
      );

    }
  );


  hero.addEventListener(
    "mouseleave",
    () => {

      heroLogo.style.setProperty(
        "--logo-x",
        "0px"
      );

      heroLogo.style.setProperty(
        "--logo-y",
        "0px"
      );

    }
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        mobileMenu.classList.toggle("open");

      menuToggle.classList.toggle(
        "active",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? "Close menu"
          : "Open menu"
      );

      document.body.style.overflow =
        isOpen
          ? "hidden"
          : "";

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove(
            "open"
          );

          menuToggle.classList.remove(
            "active"
          );

          menuToggle.setAttribute(
            "aria-expanded",
            "false"
          );

          menuToggle.setAttribute(
            "aria-label",
            "Open menu"
          );

          document.body.style.overflow =
            "";

        }
      );

    });

}


/* =========================================================
   ESCAPE — CLOSE MOBILE MENU
========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape" &&
      mobileMenu &&
      mobileMenu.classList.contains("open")
    ) {

      mobileMenu.classList.remove(
        "open"
      );

      menuToggle.classList.remove(
        "active"
      );

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );

      document.body.style.overflow =
        "";

    }

  }
);
