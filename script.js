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

  /* SITE-WIDE GRID MOVEMENT */

  const gridY =
    window.scrollY * 0.12;

  document.body.style.setProperty(
    "--site-grid-y",
    `${gridY}px`
  );


  /* HERO RED GLOW */

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


      /* SITE-WIDE GRID MOVEMENT */

document.body.style.setProperty(
  "--site-grid-x",
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

      document.body.style.setProperty(
  "--site-grid-x",
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
   LOUD ADS — ALWAYS START AT HERO
========================================================= */

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
});


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
   START A PROJECT BUILDER
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const project = document.querySelector(".project-section");
  if (!project) return;

  const steps = [...project.querySelectorAll(".project-step")];
  const stepNumber = project.querySelector("#projectStep");

  const serviceOptions =
    [...project.querySelectorAll(".service-option")];

  const choiceGroups =
    [...project.querySelectorAll(".project-choice-group")];

  const goalGroups =
    [...project.querySelectorAll('[data-goal-group]')];

  const styleOptions =
    [...project.querySelectorAll(".project-style-options .project-choice")];

  const idea = project.querySelector("#projectIdea");
  const unsure = project.querySelector("#projectUnsure");

  const summary = project.querySelector("#projectSummary");
  const budget = project.querySelector("#projectBudget");
  const final = project.querySelector("#projectFinal");

  const summaryService = project.querySelector("#summaryService");
  const summaryType = project.querySelector("#summaryType");
  const summaryGoal = project.querySelector("#summaryGoal");
  const summaryStyle = project.querySelector("#summaryStyle");
  const summaryMessage = project.querySelector("#summaryMessage");

  const budgetOptions =
    [...project.querySelectorAll("#projectBudget .project-choice")];

  const projectStart = project.querySelector("#projectStart");
  const projectSubmit =
  project.querySelector("#projectSubmit");

  const state = {
    service: "",
    type: "",
    goal: "",
    styles: [],
    idea: "",
    budget: ""
  };


  /* =========================================================
     SHOW STEP
  ========================================================= */

  function showStep(number, shouldScroll = false) {

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

    if (shouldScroll) {
      project.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }


  /* =========================================================
     SHOW PROJECT TYPE
  ========================================================= */

  function showProjectTypes(service) {

    choiceGroups.forEach(group => {

      const groupName = group.dataset.group;

      if (
        groupName === "design" ||
        groupName === "web"
      ) {
        group.classList.toggle(
          "active",
          groupName === service
        );
      }

    });
  }


  /* =========================================================
     SHOW GOALS
  ========================================================= */

  function showGoals(service) {

    goalGroups.forEach(group => {

      group.classList.toggle(
        "active",
        group.dataset.goalGroup === service
      );

    });
  }


  /* =========================================================
     UPDATE SUMMARY
  ========================================================= */

  function updateSummary() {

    if (summaryService) {
      summaryService.textContent =
        state.service || "—";
    }

    if (summaryType) {
      summaryType.textContent =
        state.type || "—";
    }

    if (summaryGoal) {
      summaryGoal.textContent =
        state.goal || "—";
    }

    if (summaryStyle) {
      summaryStyle.textContent =
        state.styles.length
          ? state.styles.join(", ")
          : "—";
    }

    if (summaryMessage) {
      summaryMessage.textContent =
        state.idea || "Your idea will appear here.";
    }
  }


  /* =========================================================
     STEP 01 — SERVICE
  ========================================================= */

  serviceOptions.forEach(option => {

    option.addEventListener("click", () => {

      serviceOptions.forEach(item =>
        item.classList.remove("selected")
      );

      option.classList.add("selected");

      state.service =
        option.dataset.service || "";

      state.type = "";
      state.goal = "";
      state.styles = [];
      state.idea = "";
      state.budget = "";

      choiceGroups.forEach(group =>
        group.classList.remove("active")
      );

      goalGroups.forEach(group =>
        group.classList.remove("active")
      );

      styleOptions.forEach(item =>
        item.classList.remove("selected")
      );

      showProjectTypes(state.service);

      showStep(2, true);

    });

  });


  /* =========================================================
     STEP 02 — PROJECT TYPE
  ========================================================= */

  choiceGroups.forEach(group => {

    /*
      Only handle the project-type groups here.
      Ignore the style and budget groups.
    */

    if (
      !group.dataset.group ||
      group.dataset.goalGroup
    ) {
      return;
    }

    const options =
      [...group.querySelectorAll(".project-choice")];

    options.forEach(option => {

      option.addEventListener("click", () => {

        options.forEach(item =>
          item.classList.remove("selected")
        );

        option.classList.add("selected");

        state.type =
          option.dataset.value ||
          option.textContent.trim();

        showGoals(state.service);

        showStep(3, true);

      });

    });

  });


  /* =========================================================
     STEP 03 — GOAL
  ========================================================= */

  goalGroups.forEach(group => {

    const options =
      [...group.querySelectorAll(".project-choice")];

    options.forEach(option => {

      option.addEventListener("click", () => {

        options.forEach(item =>
          item.classList.remove("selected")
        );

        option.classList.add("selected");

        state.goal =
          option.dataset.value ||
          option.textContent.trim();

        showStep(4, true);

      });

    });

  });

/* =========================================================
   STEP 04 — CREATIVE DIRECTION
========================================================= */

styleOptions.forEach(option => {

  option.addEventListener("click", () => {

    const style =
      option.dataset.value ||
      option.textContent.trim();

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

  });

});


/* =========================================================
   STEP 04 → STEP 05
========================================================= */

const styleGroup =
  project.querySelector(".project-style-options");

if (styleGroup) {

  styleGroup.classList.add("active");

  const continueButton =
    document.createElement("button");

  continueButton.type = "button";
  continueButton.className = "project-style-continue";
  continueButton.textContent = "CONTINUE →";

  styleGroup.parentElement.appendChild(continueButton);

  continueButton.addEventListener("click", () => {

    if (!state.styles.length) return;

    showStep(5, true);

  });

}


  /* =========================================================
     STEP 05 — PROJECT IDEA
  ========================================================= */

  if (idea) {

    idea.addEventListener("input", () => {

      state.idea =
        idea.value.trim();

      updateSummary();

    });

  }


  /* =========================================================
     NOT SURE BUTTON
  ========================================================= */

  if (unsure) {

    unsure.addEventListener("click", () => {

      state.service = "Not sure yet";
      state.type = "Need help choosing";
      state.goal = "Find the right direction";
      state.styles = [];

      if (idea) {

        idea.value =
          "I'm not completely sure what I need yet. I'd like Loud Ads to help me find the right direction.";

        state.idea =
          idea.value;

      }

      updateSummary();

      showStep(5, true);

    });

  }


  /* =========================================================
     SHOW SUMMARY + BUDGET
  ========================================================= */

  function revealBudget() {

    updateSummary();

    if (summary) {
      summary.classList.add("active");
    }

    if (budget) {
      budget.classList.add("active");
    }

    if (budget) {

      setTimeout(() => {

        budget.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });

      }, 150);

    }

  }


  /*
    Reveal the summary once the user leaves
    the idea field.
  */

  if (idea) {

    idea.addEventListener("blur", () => {

      if (state.idea.length) {
        revealBudget();
      }

    });

  }


  /* =========================================================
     BUDGET
  ========================================================= */

  budgetOptions.forEach(option => {

    option.addEventListener("click", () => {

      budgetOptions.forEach(item =>
        item.classList.remove("selected")
      );

      option.classList.add("selected");

      state.budget =
        option.dataset.budget ||
        option.textContent.trim();

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


  /* =========================================================
     FINAL WHATSAPP MESSAGE
  ========================================================= */

  function updateFinalCTA() {

    if (!projectStart) return;

    const message = [
      "Hi Loud Ads, I'd like to start a project.",
      "",
      `Service: ${state.service || "Not selected"}`,
      `Project: ${state.type || "Not selected"}`,
      `Goal: ${state.goal || "Not selected"}`,
      `Direction: ${
        state.styles.length
          ? state.styles.join(", ")
          : "Not selected"
      }`,
      `Budget: ${state.budget || "Not selected"}`,
      "",
      `Project idea: ${
        state.idea ||
        "I'd like help shaping the direction."
      }`
    ].join("\n");

    projectStart.href =
      "https://wa.me/27711507774?text=" +
      encodeURIComponent(message);

  }



/* =========================================================
   STEP 05 — SEND PROJECT TO WHATSAPP
========================================================= */

if (projectSubmit) {

  projectSubmit.addEventListener("click", () => {

    state.idea =
      idea?.value.trim() || "";

    const message = [
      "Hi Loud Ads, I'd like to start a project.",
      "",
      "PROJECT BRIEF",
      "--------------------",
      `Service: ${state.service || "Not selected"}`,
      `Project: ${state.type || "Not selected"}`,
      `Goal: ${state.goal || "Not selected"}`,
      `Direction: ${
        state.styles.length
          ? state.styles.join(", ")
          : "Not selected"
      }`,
      "",
      "WHAT'S IN MY HEAD",
      state.idea ||
        "I don't have a specific idea yet. I'd like help figuring out the direction."
    ].join("\n");

    const whatsappURL =
      "https://wa.me/27711507774?text=" +
      encodeURIComponent(message);

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  });

}


/* =========================================================
   SECTION 03 — SELECTED WORK
========================================================= */

const workFilters = document.querySelectorAll(".work-filter");
const workCards = document.querySelectorAll(".work-card");

function showWork(category) {

  workCards.forEach(card => {

    if (card.dataset.category === category) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }

  });

}


workFilters.forEach(filter => {

  filter.addEventListener("click", function () {

    const category = this.dataset.filter;

    workFilters.forEach(button => {
      button.classList.remove("active");
    });

    this.classList.add("active");

    showWork(category);

  });

});


/* Start with Web Design */

showWork("web");


  /* =========================================================
     INITIAL STATE
     IMPORTANT: DO NOT SCROLL HERE
  ========================================================= */

  showStep(1);

});

