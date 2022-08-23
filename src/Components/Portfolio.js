import React from "react";

export default function Portfolio() {
  const dataPortfolio = [
    {
      title: "quizzical-app",

      image: "canadian-wanderlust.jpg",
      url: "https://quizzical-app01.netlify.app/",
    },
    {
      title: "tenzies-game",

      image: "canadian-wanderlust.jpg",
      url: "https://tenzies-game01.netlify.app/",
    },
    {
      title: "quizzical-app",

      image: "canadian-wanderlust.jpg",
      url: "https://quizzical-app01.netlify.app/",
    },
    {
      title: "tenzies-game",

      image: "canadian-wanderlust.jpg",
      url: "https://tenzies-game01.netlify.app/",
    },
    {
      title: "quizzical-app",

      image: "canadian-wanderlust.jpg",
      url: "https://quizzical-app01.netlify.app/",
    },
    {
      title: "tenzies-game",

      image: "canadian-wanderlust.jpg",
      url: "https://tenzies-game01.netlify.app/",
    },
    {
      title: "quizzical-app",

      image: "canadian-wanderlust.jpg",
      url: "https://quizzical-app01.netlify.app/",
    },
    {
      title: "tenzies-game",

      image: "canadian-wanderlust.jpg",
      url: "https://tenzies-game01.netlify.app/",
    },
    {
      title: "quizzical-app",

      image: "canadian-wanderlust.jpg",
      url: "https://quizzical-app01.netlify.app/",
    },
    {
      title: "tenzies-game",

      image: "canadian-wanderlust.jpg",
      url: "https://tenzies-game01.netlify.app/",
    },
  ];

  const Items = dataPortfolio.map((data) => {
    return (
      <div key={data.title}>
        <div>
          <a href={data.url} title={data.title}>
            <img alt={data.title} src={`../portfolio/${data.image}`} />
            <div>
              <div>
                <h5>{data.title}</h5>
              </div>
            </div>
            <div className="link-icon">
              <i className="fa fa-link"></i>
            </div>
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="portfolio">
      <div className="portfolio_container">
        <div>
          <h1 className="portfolio_title">Here are a few of mine projects.</h1>

          <div className="portfolio_items">{Items}</div>
        </div>
      </div>
    </section>
  );
}
