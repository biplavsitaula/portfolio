const Footer = () => {
  const start = Date.now();
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
    "p",
    {
      style: {
        width: "100%",
        color: "var(--text-secondary)",
        borderTop: "1px solid var(--text-secondary)",
        textAlign: "center",
        fontSize: "1.2rem",
        paddingBlock: "1rem",
        background: "var(--card-background)",
        display: "flex",
        justifyContent: "center",
        gap: "8px",
      },
      "data-aos": "fade-up",
      "data-aos-delay": "50",
    },
    "© Biplav Sitaula",
    React.createElement(
      "button",
      {
        onClick: handleClick,
        style: {
          color: "var(--text-secondary)",
          border: "1px solid var(--text-secondary)",
          background: "var(--background)",
          padding: "4px 8px",
          borderRadius: "2px",
          cursor: "pointer",
        },
      },
      "Up time"
    )
  );
};
const container = document.getElementById("footer");
const footer = ReactDOM.createRoot(container);
footer.render(React.createElement(Footer));

const Nav = () =>
  React.createElement(
    "nav",
    null,
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
        React.createElement("a", { href: "about.html" }, "About")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "experience.html" }, "Experience")
      ),
      React.createElement(
        "li",
        null,
        React.createElement("a", { href: "project.html" }, "Projects")
      )
    )
  );
const headContainer = document.getElementById("header");
const header = ReactDOM.createRoot(headContainer);
header.render(React.createElement(Nav));
