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
   LOUD ADS — SECTION 02
   START A PROJECT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const project = document.querySelector(".project-section");

  if (!project) return;


  /* =======================================================
     ELEMENTS
  ======================================================= */

  const steps = [...project.querySelectorAll(".project-step")];
  const stepNumber = document.querySelector("#projectStep");

  const serviceOptions = [
    ...project.querySelectorAll(".service-option")
  ];

  const choiceGroups = [
    ...project.querySelectorAll(".project-choice-group")
  ];

  const goalGroups = [
    ...project.querySelectorAll(".project-goal-group")
  ];

  const styleOptions = [
    ...project.querySelectorAll(".project-style")
  ];

  const idea = document.querySelector("#projectIdea");
  const unsure = document.querySelector("#projectUnsure");

  const summary = document.querySelector("#projectSummary");
  const budget = document.querySelector("#projectBudget");
  const final = document.querySelector("#projectFinal");

  const summaryService = document.querySelector("#summaryService");
  const summaryType = document.querySelector("#summaryType");
  const summaryGoal = document.querySelector("#summaryGoal");
  const summaryStyle = document.querySelector("#summaryStyle");
  const summaryMessage = document.querySelector("#summaryMessage");

  const budgetOptions = [
    ...project.querySelectorAll(".project-budget-option")
  ];

  const projectStart = document.querySelector("#projectStart");


  /* =======================================================
     PROJECT DATA
  ======================================================= */

  const state = {
    service: "",
    type: "",
    goal: "",
    styles: [],
    idea: "",
    budget: ""
  };


  /* =======================================================
     HELPERS
  ======================================================= */

  function getLabel(element) {
    if (!element) return "";

    return (
      element.dataset.label ||
      element.querySelector("strong")?.textContent ||
      element.textContent
    ).trim();
  }


  function showStep(number) {

    steps.forEach(step => {
      step.classList.toggle(
        "active",
        Number(step.dataset.step) === number
      );
    });

    if (stepNumber) {
      stepNumber.textContent =
        String(number).padStart(2, "0");
    }

    project.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }


  function showGroup(groups, value) {

    groups.forEach(group => {
      group.classList.toggle(
        "active",
        group.dataset.group === value
      );
    });
  }


  function updateSummary() {

    if (summaryService) {
      summaryService.textContent =
        state.service || "Not selected";
    }

    if (summaryType) {
      summaryType.textContent =
        state.type || "Not selected";
    }

    if (summaryGoal) {
      summaryGoal.textContent =
        state.goal || "Not selected";
    }

    if (summaryStyle) {
      summaryStyle.textContent =
        state.styles.length
          ? state.styles.join(", ")
          : "Not selected";
    }

    if (summaryMessage) {
      summaryMessage.textContent =
        state.idea || "No additional notes";
    }
  }


  function showProjectSummary() {

    updateSummary();

    if (summary) {
      summary.classList.add("active");
    }

    if (budget) {
      budget.classList.add("active");
    }
  }


  /* =======================================================
     STEP 01 — DESIGN / WEB
  ======================================================= */

  serviceOptions.forEach(option => {

    option.addEventListener("click", () => {

      serviceOptions.forEach(item =>
        item.classList.remove("selected")
      );

      option.classList.add("selected");

      state.service =
        option.dataset.service ||
        getLabel(option);

      state.type = "";
      state.goal = "";
      state.styles = [];
      state.budget = "";

      choiceGroups.forEach(group =>
        group.classList.remove("active")
      );

      goalGroups.forEach(group =>
        group.classList.remove("active")
      );

      showGroup(choiceGroups, state.service);

      showStep(2);
    });

  });


  /* =======================================================
     STEP 02 — WHAT DO YOU NEED?
  ======================================================= */

  choiceGroups.forEach(group => {

    const options = [
      ...group.querySelectorAll(".project-choice")
    ];

    options.forEach(option => {

      option.addEventListener("click", () => {

        options.forEach(item =>
          item.classList.remove("selected")
        );

        option.classList.add("selected");

        state.type = getLabel(option);

        showGroup(goalGroups, state.service);

        showStep(3);
      });

    });

  });


  /* =======================================================
     STEP 03 — WHAT SHOULD IT DO?
  ======================================================= */

  goalGroups.forEach(group => {

    const options = [
      ...group.querySelectorAll(".project-goal")
    ];

    options.forEach(option => {

      option.addEventListener("click", () => {

        options.forEach(item =>
          item.classList.remove("selected")
        );

        option.classList.add("selected");

        state.goal = getLabel(option);

        showStep(4);
      });

    });

  });


  /* =======================================================
     STEP 04 — WHAT SHOULD IT FEEL LIKE?
     MAXIMUM 3
  ======================================================= */

  styleOptions.forEach(option => {

    option.addEventListener("click", () => {

      const style = getLabel(option);

      if (option.classList.contains("selected")) {

        option.classList.remove("selected");

        state.styles =
          state.styles.filter(item => item !== style);

        return;
      }


      if (state.styles.length >= 3) {
        return;
      }


      option.classList.add("selected");

      state.styles.push(style);


      /*
         Once a style is chosen, don't force the user
         forward immediately.

         This lets them choose up to three directions.
      */
    });

  });


  /* =======================================================
     STEP 05 — WHAT'S IN YOUR HEAD?
  ======================================================= */

  if (idea) {

    idea.addEventListener("input", () => {

      state.idea = idea.value.trim();

      updateSummary();

    });

  }


  /* =======================================================
     NOT SURE — HELP ME CHOOSE
  ======================================================= */

  if (unsure) {

    unsure.addEventListener("click", () => {

      state.service = "Not sure yet";
      state.type = "Need help choosing";
      state.goal = "Find the right direction";
      state.styles = [];
      state.idea = "";

      serviceOptions.forEach(item =>
        item.classList.remove("selected")
      );

      styleOptions.forEach(item =>
        item.classList.remove("selected")
      );

      if (idea) {
        idea.value =
          "I'm not completely sure what I need yet. I'd like Loud Ads to help me figure out the right direction.";
      }

      state.idea = idea?.value || "";

      showStep(5);

      setTimeout(() => {
        showProjectSummary();
      }, 350);

    });

  }


  /* =======================================================
     SHOW SUMMARY AFTER STEP 05
  ======================================================= */

  if (idea) {

    idea.addEventListener("blur", () => {

      if (
        state.idea.length > 0 ||
        state.service === "Not sure yet"
      ) {
        showProjectSummary();
      }

    });

  }


  /* =======================================================
     BUDGET
  ======================================================= */

  budgetOptions.forEach(option => {

    option.addEventListener("click", () => {

      budgetOptions.forEach(item =>
        item.classList.remove("selected")
      );

      option.classList.add("selected");

      state.budget =
        option.dataset.budget ||
        getLabel(option);

      updateFinalCTA();

      if (final) {
        final.classList.add("active");

        setTimeout(() => {
          final.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 150);
      }

    });

  });


  /* =======================================================
     FINAL WHATSAPP MESSAGE
  ======================================================= */

  function updateFinalCTA() {

    if (!projectStart) return;

    const message = [
      "Hi Loud Ads, I'd like to start a project.",
      "",
      `Service: ${state.service || "Not selected"}`,
      `What I need: ${state.type || "Not selected"}`,
      `Goal: ${state.goal || "Not selected"}`,
      `Style: ${state.styles.length ? state.styles.join(", ") : "Not selected"}`,
      `Budget: ${state.budget || "Not selected"}`,
      "",
      `What's in my head: ${state.idea || "I'd like help shaping the direction."}`
    ].join("\n");

    projectStart.href =
      `https://wa.me/27711507774?text=${encodeURIComponent(message)}`;
  }


  /* =======================================================
     INITIAL STATE
  ======================================================= */

  showStep(1);

});
