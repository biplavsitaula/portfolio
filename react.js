const Footer = () => {
  const start = sessionStorage.getItem("startTime");
  const handleClick = () => {
    Toastify({
      text: `You are here since ${((Date.now() - start) / 1000).toFixed(
        2
      )} seconds.`,
      duration: 3000,
      destination: "https://github.com/biplavsitaula",
      gravity: "top", // `top` or `bottom`
      position: "right",
      stopOnFocus: true,
      style: {
        background:
          "linear-gradient(to right,rgb(83, 83, 83),rgb(161, 161, 161))",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  };
  return React.createElement(
    "div",
    {
      "data-aos": "fade-up",
      "data-aos-delay": "50",
    },
    React.createElement("span", null, "© Biplav Sitaula"),
    React.createElement(
      "button",
      {
        onClick: handleClick,
      },
      "Up time"
    )
  );
};
const container = document.getElementById("footer");
const footer = ReactDOM.createRoot(container);
footer.render(React.createElement(Footer));

const Nav = () => {
  return React.createElement(
    "nav",
    { className: "navigation-menu", id: "navbar" },
    React.createElement(
      "ul",
      null,
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "/" }, "Home")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "myplaylist.html" }, "My Playlist")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "/v0/index.html" }, "Version v0")
      )
    )
  );
};
const headContainer = document.getElementById("header");
const header = ReactDOM.createRoot(headContainer);
header.render(React.createElement(Nav));
