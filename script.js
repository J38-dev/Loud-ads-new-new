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

/* =========================================================
   HERO MOUSE MOVEMENT
========================================================= */

const heroTitle =
  document.querySelector(".hero-title-accent");

const heroCode =
  document.querySelector(".hero-code");


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


      /* LOGO MOVEMENT */

      heroLogo.style.setProperty(
        "--logo-x",
        `${x * 12}px`
      );

      heroLogo.style.setProperty(
        "--logo-y",
        `${y * 8}px`
      );


      /* GRID MOVEMENT */

      heroGrid.style.setProperty(
        "--grid-x",
        `${x * 14}px`
      );


      /* POINTER POSITION */

      hero.style.setProperty(
        "--pointer-x",
        `${(x + .5) * 100}%`
      );

      hero.style.setProperty(
        "--pointer-y",
        `${(y + .5) * 100}%`
      );


      /* HEADLINE INTERACTION */

      if (heroTitle) {

        const titleRect =
          heroTitle.getBoundingClientRect();

        const distanceX =
          event.clientX - (
            titleRect.left +
            titleRect.width / 2
          );

        const distanceY =
          event.clientY - (
            titleRect.top +
            titleRect.height / 2
          );

        const distance =
          Math.sqrt(
            distanceX * distanceX +
            distanceY * distanceY
          );

        heroTitle.classList.toggle(
          "is-active",
          distance < 220
        );

      }


      /* CODE → VISUAL */

      if (heroCode) {

        heroCode.classList.toggle(
          "is-active",
          Math.abs(x) < .25 &&
          Math.abs(y) < .25
        );

      }

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

      heroGrid.style.setProperty(
        "--grid-x",
        "0px"
      );

      hero.style.setProperty(
        "--pointer-x",
        "50%"
      );

      hero.style.setProperty(
        "--pointer-y",
        "50%"
      );


      if (heroTitle) {
        heroTitle.classList.remove(
          "is-active"
        );
      }

      if (heroCode) {
        heroCode.classList.remove(
          "is-active"
        );
      }

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







   /* =========================================================
   SECTION 02 — THE HOOK INTERACTION
========================================================= */

const hookGrid =
  document.querySelector(".hook-grid");

const hookCards =
  document.querySelectorAll(".hook-card");


hookCards.forEach(card => {

  card.addEventListener("click", () => {

    const wasActive =
      card.classList.contains("active");


    hookCards.forEach(otherCard => {

      otherCard.classList.remove("active");

      otherCard.setAttribute(
        "aria-expanded",
        "false"
      );

    });


    if (wasActive) {

      hookGrid.classList.remove(
        "has-selection"
      );

      return;

    }


    card.classList.add("active");

    card.setAttribute(
      "aria-expanded",
      "true"
    );

    hookGrid.classList.add(
      "has-selection"
    );

  });


  /* DESKTOP MICRO MOVEMENT */

  card.addEventListener("mousemove", event => {

    if (
      !window.matchMedia(
        "(pointer: fine)"
      ).matches
    ) return;


    const rect =
      card.getBoundingClientRect();


    const x =
      (event.clientX - rect.left) /
      rect.width -
      .5;

    const y =
      (event.clientY - rect.top) /
      rect.height -
      .5;


    card.style.setProperty(
      "--card-x",
      `${x * 2}px`
    );

    card.style.setProperty(
      "--card-y",
      `${y * 2}px`
    );

  });


  card.addEventListener("mouseleave", () => {

    card.style.setProperty(
      "--card-x",
      "0px"
    );

    card.style.setProperty(
      "--card-y",
      "0px"
    );

  });

});
