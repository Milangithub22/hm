import React from "react";
import { nanoid } from "nanoid";

export default function Portfolio() {
  const dataPortfolio = [
    {
      title: "quizzical-app",
      key: nanoid(),
      image: "NEuip.jpg",
      url: "https://quizzical-app01.netlify.app/",
    },
    {
      title: "tenzies-game",
      key: nanoid(),
      image: "NEuip.jpg",
      url: "https://tenzies-game01.netlify.app",
    },
  ];

  const Items = dataPortfolio.map((data) => {
    return (
      <div key={data.key}>
        <div>
          <a href={data.url} title={data.title}>
            <img
              alt={data.title}
              style={{ height: 100, width: 100 }}
              src={require(`./Images/${data.image}`)}
            />

            <div>
              <div>
                <h5>{data.title}</h5>
              </div>
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
