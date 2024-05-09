const jsIcon = document.querySelector('.js');
const cssIcon = document.querySelector('.css');
// import { dataArray } from './data'
const codingQuotes = [
  "Code is like humor; when you have to explain it, it’s bad. - Cory House",
  "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
  "Java is to JavaScript what car is to carpet. - Chris Heilmann",
  "It’s harder to read code than to write it. - Joel Spolsky",
  "Debugging is like trying to find a needle in a haystack, except the haystack is made of needles and you’re blindfolded. - Unknown",
  "First, solve the problem. Then, write the code. - John Johnson",
  "A programmer is a machine for turning coffee into code. - Unknown",
  "In software, the only numbers that matter are 0, 1, and N. - Unknown",
  "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. - Rick Cook",
  "To iterate is human, to recurse divine. - L. Peter Deutsch",
  "Perl – The only language that looks the same before and after RSA encryption. - Keith Bostic",
  "Code generation, like drinking alcohol, is good in moderation. - Alex Lowe",
  "Software and cathedrals are much the same – first we build them, then we pray. - Sam Redwine",
  "Simplicity is the soul of efficiency. - Austin Freeman",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. - Martin Fowler",
  "Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. - Mosher’s Law of Software Engineering",
  "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. - Linus Torvalds",
  "Talk is cheap. Show me the code. - Linus Torvalds",
  "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. - Seymour Cray",
  "Code never lies, comments sometimes do. - Ron Jeffries",
  "Premature optimization is the root of all evil. - Donald Knuth",
  "Programming is not about typing, it's about thinking. - Rich Hickey",
  "Programming is the closest thing we have to magic. - Drew Houston",
  "The best thing about a boolean is even if you are wrong, you are only off by a bit. - Unknown",
  "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
  "Every programmer is an author. - Sercan Leylek",
  "Code is like a poem; it has to follow certain structural requirements, but it should also be beautiful. - Unknown",
  "The computer was born to solve problems that did not exist before. - Bill Gates",
  "Software is a great combination between artistry and engineering. - Bill Gates",
  "The best software is written when the developers are sleeping. - Dave Thomas"
];


window.addEventListener('mousemove', (e) => {
  const iconRect = jsIcon.getBoundingClientRect();
  const iconCenterX = iconRect.left + iconRect.width / 2;
  const iconCenterY = iconRect.top + iconRect.height / 2;

  const jsX = -(e.clientY - iconCenterY) / 10; // Adjust for sensitivity
  const jsY = (e.clientX - iconCenterX) / 10;

  jsIcon.style.transform = `rotateX(${jsX}deg) rotateY(${jsY}deg)`;

  const cssX = -(e.clientX - iconCenterY) / 10; // Adjust for sensitivity
  const cssY = (e.clientY - iconCenterX) / 10;

  cssIcon.style.transform = `rotateX(${cssY}deg) rotateY(${cssX}deg)`;

});

function generateHTML(codingQuotes) {
  const dataIndex = Math.floor(Math.random() * codingQuotes.length);

  const containerDiv = document.createElement('div');
  containerDiv.classList.add('quotes');

  const dataParagraph = document.createElement('code');
  dataParagraph.textContent = codingQuotes[dataIndex];

  containerDiv.appendChild(dataParagraph);

  const logoElement = document.querySelector('.logo')
  logoElement.insertAdjacentElement('afterend', containerDiv);
}
generateHTML(codingQuotes);


const scrollToExperienceButton = document.querySelector(".scroll-to-experience");

scrollToExperienceButton.addEventListener("click", function (event) {
  event.preventDefault();


  var experienceSection = document.querySelector(".experience-container");
  var offsetTop = experienceSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
});


const scrollToProjectsButton = document.querySelector(".scroll-to-projects");

scrollToProjectsButton.addEventListener("click", function (event) {
  event.preventDefault();


  var projectsSection = document.querySelector(".projects-container");
  var offsetTop = projectsSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
});
const homeButton = document.querySelector(".logo");

homeButton.addEventListener("click", function (event) {
  event.preventDefault();

  var projectsSection = document.querySelector(".hero-section");
  var offsetTop = projectsSection.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
});

