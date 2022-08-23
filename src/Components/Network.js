import React from "react";

export default function Network() {
  const social = [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/milan-vlach-2277b5234/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "https://github.com/Milangithub22",
      className: "fa fa-github",
    },
  ];

  const socialNet = social.map((data) => {
    return (
      <li key={data.name}>
        <a href={data.url}>
          <i className={data.className}></i>
        </a>
      </li>
    );
  });
  return <div>{socialNet}</div>;
}
