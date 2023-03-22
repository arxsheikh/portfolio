const skills_continer = document.getElementById("Skills")


const myskills = [
    {
        name: "Front-end Development",
        icon: "fa-code",
        description: "Expertise in building responsive and user-friendly interfaces using HTML, CSS, and JavaScript, with experience in popular frameworks such as React and Angular.",
        color: "#ffc800",
    },
    {
        name: "Back-end Development",
        icon: "fa-database",
        description: "Proficient in designing and implementing server-side applications and APIs using languages such as Node.js, Python, and PHP, with experience in database management and deployment using tools such as MySQL and AWS."
        ,
        color: "#34c152",
    },
    {
        name: "UI/UX Design",
        icon: "fa-paint-brush",
        description: "Strong design skills and experience creating user-centered interfaces and interactions, with proficiency in tools such as Sketch, Adobe XD, and Figma."
        ,
        color: "#0786d1",
    },
    {
        "name": "Graphics",
        icon: "fa-picture-o",
        description: "Expertise in creating high-quality graphics and visual designs for web and print, with proficiency in tools such as Adobe Photoshop and Illustrator."
        ,
        color: "#ff6d6d",
    },
    {
        name: "Desktop Application Development",
        icon: "fa-desktop",
        description: "Proficient in designing and developing desktop applications for Windows and macOS using technologies such as Electron and Qt."
        ,
        color: "#CDDC39",
    },
    {
        name: "Mobile App Development",
        icon: "fa-mobile",
        description: "Experience developing native mobile applications for iOS and Android using languages such as Swift, Kotlin, and Java, with proficiency in tools such as Xcode and Android Studio."
        ,
        color: "#b36eff",
    }

]



myskills.map((item) => {
    const Skill_ = document.createElement("div");
    Skill_.setAttribute("class", "Skill");
    Skill_.style.background = item.color
    Skill_.innerHTML = `
    <img src="img/${item.icon}.png" width="30" />
    <div>
   <b> ${item.name}</b>
    <span>${item.description}</span>
    </div>
    `;
    skills_continer.appendChild(Skill_);
});





function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    requestAnimationFrame(animation);
  }
  
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.getAttribute('href');
      smoothScroll(target, 1500);
    });
  }
  

let index = 0;
const text = `
Hello, and welcome to my Portfolio

I'm a full-stack developer with extensive experience in Node.js, React, ExpressJS, MongoDB, and
MySQL. I'm also proficient in desktop application development, API development, and web/mobile
design consultation. My expertise includes UI/UX prototyping and Electron.

I'm a dedicated and reliable freelancer who prides myself on delivering high-quality work that meets
or exceeds my clients' expectations. My goal is to help my clients achieve their objectives by
providing them with innovative and effective solutions.

Here are some of the services that I offer:

Full-stack web development using Node.js, React, ExpressJS, MongoDB, and MySQL.
Desktop application development using Electron.
API development for web and mobile applications.
UI/UX design consultation and prototyping.
Database design and management.  Startup management , project management
Testing, debugging, and maintenance of software applications.
If you're looking for a skilled and reliable freelancer who can help you with your software
development needs, look no further! Please feel free to contact me to discuss your project
requirements in more detail. I'm looking forward to hearing from you!
`

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 2); // adjust the typing speed here (in milliseconds)
  }
}

typeWriter();