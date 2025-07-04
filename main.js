// Typed.js wrapper
class TypedText {
  constructor(elementId, options) {
    const el = document.getElementById(elementId);
    if (el) new Typed(el, options);
  }
}
// Hamburger menu toggle
class HamburgerMenu {
  constructor(toggleSelector, linksSelector) {
    const navToggle = document.querySelector(toggleSelector);
    const navLinks = document.querySelector(linksSelector);
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () =>
        navLinks.classList.toggle("active")
      );
    }
  }
}
// Projects rendering
class Projects {
  constructor(containerSelector, projects) {
    const container = document.querySelector(containerSelector);
    if (container) {
      container.innerHTML = projects
        .map(
          (project) => `
              <span class="project-card" loading="lazy">
                  <h2>${project.title}</h2>
                  <img src="${project.img}" alt="My_projects" />
                  <a href="${project.link}" target="_blank">View Project</a>
                  <p>${project.pra}</p>
                  <a href="${project.codeLink}" target="_blank" class="github-link">GitHub</a>
              </span>
            `
        )
        .join("");
    }
  }
}
// Cursor popper effect
class SmokeTrail {
  constructor() {
    document.addEventListener("mousemove", this.spawnSmoke.bind(this));
  }

  spawnSmoke(e) {
    const smoke = document.createElement("div");
    smoke.className = "smoke-particle";
    smoke.style.left = `${e.clientX}px`;
    smoke.style.top = `${e.clientY}px`;

    document.body.appendChild(smoke);

    setTimeout(() => smoke.remove(), 1200);
  }
}
// Main App
class App {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => this.init());
  }
  init() {
    // Only one TypedText per unique element
    ["element", "typed"].forEach(
      (id) =>
        new TypedText(id, {
          strings: ["Web Designer", "Web Developer"],
          typeSpeed: 80,
          backDelay: 1000,
          backSpeed: 50,
          loop: true,
          showCursor: false,
        })
    );
    new TypedText("navText", {
      strings: ["Portfolio"],
      typeSpeed: 150,
      loop: false,
      showCursor: false,
    });
    new HamburgerMenu(".nav-toggle", ".nav-links");
    new Projects(".projects-container", [
      {
        title: "📝 Circum Finder",
        link: "https://pi-program.vercel.app/",
        pra: "The Circumference Finder is a straightforward tool that calculates the circumference of a circle based on user input. By entering the radius or diameter.",
        codeLink: "https://github.com/FakhirAhmedKhan/PI-Program",
        img: "./assets/Circum Finder.jpeg",
      },
      {
        title: "🧾 Unit Converter",
        link: "https://temperature-converter-by-using-html-css-and-jave-script.vercel.app/",
        pra: "Temperature: Convert between Celsius (°C) and Fahrenheit (°F). Speed: Switch between Kilometers per hour, Miles per hour, Meters per second, and Knots.",
        codeLink:
          "https://github.com/FakhirAhmedKhan/Temperature-Converter-by-using-HTML--CSS-and-JaveScript",
        img: "./assets/Unit Converter.jpeg",
      },
      {
        title: "⛅ Weather App",
        link: "https://weather-app-cyan-one-55.vercel.app/",
        pra: "The Weather App provides weather updates for any global location. It displays temperature, humidity, wind speed, and overall weather conditions.",
        codeLink: "https://github.com/FakhirAhmedKhan/Weather-App",
        img: "./assets/Weather App.jpeg",
      },
      {
        title: "🎞️ Netflix Clone",
        link: "https://netflix-clone-jade-beta.vercel.app/",
        pra: "The Netflix Clone replicates the core features of the popular streaming platform, offering easy navigation, real-time updates, and interactive tools. Built with a clean design and efficient performance.",
        codeLink:
          "https://github.com/FakhirAhmedKhan/Netflix-Clone-Using-HTML---CSS",
        img: "./assets/Netflix Clone.jpeg",
      },
      {
        title: "▶️ YouTube Clone",
        link: "https://youtube-git-main-fakhir-ahmed-khans-projects.vercel.app/",
        pra: "This YouTube Clone is a responsive web page that replicates the core features. Built with modern web technologies like HTML5, JavaScript, and CSS, it demonstrates handling video data and user interaction.",
        codeLink: "https://github.com/FakhirAhmedKhan/YouTube-Clone",
        img: "./assets/YouTube Clone.jpeg",
      },
      {
        title: "🗣️ Text-to-Speech",
        link: "https://text-to-speech-ruby-phi.vercel.app",
        pra: "This app converts written text into natural-sounding audio instantly. Supporting multiple languages and voices, it allows users to listen to any text on the go. Whether improving accessibility or creating audio content.",
        codeLink: "https://github.com/FakhirAhmedKhan/text-to-speech",
        img: "./assets/Text-to-Speech.jpeg",
      },
      {
        title: "🛒 Amazon Clone",
        link: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
        pra: "Amazon Clone is a simple web made with JavaScript. It lets users view products, add them to a cart, and see the total. It's a good project to practice basic JavaScript and web skills.",
        codeLink: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
        img: "./assets/ammzon.jpeg",
      },
      {
        title: "🔢 Calculator",
        link: "https://calculator-alpha-one-55.vercel.app/",
        pra: "This Calculator App enables users to perform basic arithmetic operations such as addition, subtraction, and multiplication. It's easy to enter numbers and view results instantly.",
        codeLink:
          "https://github.com/FakhirAhmedKhan/Calculator-by-using-htmlc-css-or-js",
        img: "./assets/Calculator.jpeg",
      },
      {
        title: "📝 Task_Tracker",
        link: "https://to-do-list-neon-six.vercel.app/",
        pra: "ToDo App is a simple and easy-to-use task manager that helps you organize your daily tasks. You can add and delete tasks. Whether it’s for school, work, or personal use, it keeps you focused.",
        codeLink: "https://github.com/FakhirAhmedKhan/ToDOList",
        img: "./assets/Task Teacker.jpeg",
      },
      {
        title: "🐍 Python Basic Programs",
        link: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
        pra: "A collection of beginner-level Python programs designed to build a foundation in programming concepts like variables, loops, functions, and conditionals.",
        codeLink: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
        img: "./assets/python.jfif",
      },
      {
        title: "🐍 Basic Python Programs Part 2",
        link: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
        pra: "The second part of the beginner-level Python series focuses on more practice with functions, loops, user input, and basic problem-solving techniques.",
        codeLink:
          "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
        img: "./assets/python.jfif",
      },
      {
        title: "🐍 Grading System in Python",
        link: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
        pra: "A simple Python program that calculates student grades based on their marks. It uses if/else statements to assign grades, helping users check their grades.",
        codeLink: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
        img: "./assets/python.jfif",
      },
      {
        title: "🐍 Game in Python",
        link: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
        pra: "Word Guessing Game in Python is a fun terminal game where players guess letters to find the hidden word.",
        codeLink: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
        img: "./assets/python.jfif",
      },
      {
        title: "🐍 Quiz in Python",
        link: "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
        pra: "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
        codeLink:
          "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
        img: "./assets/python.jfif",
      },
      {
        title: "⚛️ /First React/",
        link: "https://github.com/FakhirAhmedKhan/First-React-Code/tree/main/First%20React",
        pra: "To set up React, install Node.js with npm. Then run npx create-react-app my-app in the terminal.folder with cd my-app and start.",
        codeLink: "https://github.com/FakhirAhmedKhan/First-React-Code",
        img: "./assets/react.png",
      },
      {
        title: "🎮 Rock, Paper, Scissors Game",
        link: "https://rock-three-umber.vercel.app/",
        pra: "The classic game allows players to test their luck against the computer. With instant results on choices, it's fun.",
        codeLink: "https://github.com/FakhirAhmedKhan/rock",
        img: "./assets/Rock.jpeg",
      },
      {
        title: "🔳 QR Code Generator",
        link: "https://qr-generator-lilac-beta.vercel.app/",
        pra: "A simple tool that creates QR codes from data. Users enter data, and the app generates a scannable QR code.",
        codeLink: "https://github.com/FakhirAhmedKhan/QR-Generator",
        img: "./assets/qr.jpeg",
      },
      {
        title: "⚛️ Calculator-in-React",
        link: "https://calculator-in-react-ten.vercel.app/",
        pra: "Calculator-in-React is a simple app built with React that performs basic math operations. It uses components and state to update results instantly. Great for beginners learning React.",
        codeLink: "https://github.com/FakhirAhmedKhan/Calculator-in-React",
        img: "./assets/Calculator.jpeg",
      },
      {
        title: "💻Basic JavaScript Program",
        link: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
        pra: "A collection of beginner-level JavaScrip programs designed to build a foundation in programming concepts like variables, loops, functions, and conditionals.",
        codeLink: "https://github.com/FakhirAhmedKhan/Basic-JavaScrip-Program",
        img: "./assets/jspic.jpeg",
      },
      {
        title: "💻 Basic JavaScript Program part 2",
        link: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
        pra: "The second part of the beginner-level JavaScript series focuses on more practice with functions, loops, user input, and basic problem-solving techniques.",
        codeLink: "https://github.com/FakhirAhmedKhan/Basic-Javascript-part-2",
        img: "./assets/jspic.jpeg",
      },
      {
        title: "💻 Quiz in JavaScript",
        link: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
        pra: "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
        codeLink: "https://github.com/FakhirAhmedKhan/Quiz-JavaScript",
        img: "./assets/jspic.jpeg",
      },
    ]);
  }
}
new SmokeTrail();
new App();
