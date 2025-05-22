"use strict";

var Footer = function Footer() {
  var start = sessionStorage.getItem("startTime");
  var handleClick = function handleClick() {
    Toastify({
      text: "You are here since ".concat(((Date.now() - start) / 1000).toFixed(2), " seconds."),
      duration: 3000,
      destination: "https://github.com/biplavsitaula",
      gravity: "top",
      // `top` or `bottom`
      position: "right",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right,rgb(83, 83, 83),rgb(161, 161, 161))"
      },
      onClick: function onClick() {} // Callback after click
    }).showToast();
  };
  return React.createElement("div", {
    "data-aos": "fade-up",
    "data-aos-delay": "50"
  }, React.createElement("span", null, "© Biplav Sitaula"), React.createElement("button", {
    onClick: handleClick
  }, "Up time"));
};
var container = document.getElementById("footer");
var footer = ReactDOM.createRoot(container);
footer.render(React.createElement(Footer));
var Nav = function Nav() {
  return React.createElement("nav", {
    className: "navigation-menu",
    id: "navbar"
  }, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "/"
  }, "Home")), React.createElement("li", null, React.createElement("a", {
    href: "myplaylist.html"
  }, "My Playlist")), React.createElement("li", null, React.createElement("a", {
    href: "/v0/index.html"
  }, "Version v0"))));
};
var headContainer = document.getElementById("header");
var header = ReactDOM.createRoot(headContainer);
header.render(React.createElement(Nav));