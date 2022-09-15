import React from "react";
import { nanoid } from "nanoid";

export default function Portfolio({ data }) {
  const dataPortfolio = [
    {
      title: "quizzical-app",
      key: nanoid(),
      image: "quizzical.png",
      url: "https://quizzical-app01.netlify.app/",
    },
    {
      title: "tenzies-game",
      key: nanoid(),
      image: "tenzies.png",
      url: "https://tenzies-game01.netlify.app",
    },
    {
      title: "basic-react-form",
      key: nanoid(),
      image: "form.png",
      url: "https://basic-react-form01.netlify.app",
    },
    {
      title: "speed-typing-game",
      key: nanoid(),
      image: "speed.png",
      url: "https://speed-typing-game01.netlify.app",
    },
    {
      title: "airbnb-clone",
      key: nanoid(),
      image: "clone",
      url: "https://airbnb-clone01.netlify.app",
    },
  ];

  const Items = dataPortfolio.map((data) => {
    return (
      <div key={data.key}>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            href={data.url}
            title={data.title}
          >
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
          <h1 className="portfolio_title">
            {data
              ? "Here are a few of mine projects."
              : "Estos son algunos de mis proyectos."}
          </h1>
          <div className="portfolio_items">{Items}</div>
        </div>
      </div>
    </section>
  );
}
