const youtube = [
  {
    title: "JavaScript Complete Course (2024) 4 Projects",
    link: "https://www.youtube.com/watch?v=cpoXLj24BDY",
    thumbnail: "https://i.ytimg.com/vi/cpoXLj24BDY/maxresdefault.jpg",
  },
  {
    title: "🚀🔥 React & Redux Complete Course (2024) with Projects",
    link: "https://www.youtube.com/watch?v=eILUmCJhl64",
    thumbnail: "https://i.ytimg.com/vi/eILUmCJhl64/maxresdefault.jpg",
  },
  {
    title: "Advance React Tutorial",
    link: "https://www.youtube.com/watch?v=qTDnwmMF5q8&list=PL6dw1BPCcLC4n-4o-t1kQZH0NJeZtpmGp",
    thumbnail: "https://i.ytimg.com/vi/qTDnwmMF5q8/maxresdefault.jpg",
  },
  {
    title: "Junior vs Senior React Folder Structure",
    link: "https://www.youtube.com/watch?v=UUga4-z7b6s",
    thumbnail: "https://i.ytimg.com/vi/UUga4-z7b6s/maxresdefault.jpg",
  },
  {
    title: "Next.js 15 Crash Course",
    link: "https://www.youtube.com/watch?v=Zq5fmkH0T78",
    thumbnail: "https://i.ytimg.com/vi/Zq5fmkH0T78/maxresdefault.jpg",
  },
];

const aboutContainer = document.getElementById("about-container");

aboutContainer.innerHTML = youtube
  .map((el) => {
    return `
        <div class='project-card tutorial-element' data-aos="fade-up" data-aos-delay="50">
            <a href="${el.link}" target="_blank">
                <img src="${
                  el.thumbnail || "https://placehold.co/400x236"
                }" alt="${
      el.title
    }" style="width:100%; max-width: 400px; display:block;" />
                <h3>${el.title}</h3>
            </a>
        </div>
    `;
  })
  .join("");
