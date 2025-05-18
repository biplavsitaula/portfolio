"use strict";

var Footer = function Footer() {
  return React.createElement("p", {
    style: {
      width: "100%",
      color: "var(--text-secondary)",
      borderTop: "1px solid var(--text-secondary)",
      textAlign: "center",
      fontSize: "1.2rem",
      paddingBlock: "1rem",
      background: "var(--card-background)"
    },
    "data-aos": "fade-up",
    "data-aos-delay": "50"
  }, "© Biplav Sitaula");
};
var container = document.getElementById("footer");
var footer = ReactDOM.createRoot(container);
footer.render(React.createElement(Footer));
var Nav = function Nav() {
  return React.createElement("nav", null, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "/"
  }, "Home")), React.createElement("li", null, React.createElement("a", {
    href: "about.html"
  }, "About")), React.createElement("li", null, React.createElement("a", {
    href: "experience.html"
  }, "Experience")), React.createElement("li", null, React.createElement("a", {
    href: "project.html"
  }, "Projects"))));
};
var headContainer = document.getElementById("header");
var header = ReactDOM.createRoot(headContainer);
header.render(React.createElement(Nav));