import React from "react";
import "./style.css";

const Cards = (card, index) => {
  return (
    <div className="blog-item">
      <a href={card.blogLink}>
        <div className="icon">
          <img src={card.blogImage} alt="" />
        </div>
        <div className="content">
          <div className="title">
            {card.name}
            <span className="blog-date">{card.date}</span>
          </div>
          <div className="rounded"></div>
          <p>{card.desc}</p>
        </div>
        <div className="item-arrow">
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </div>
      </a>
    </div>
  );
};

export default Cards;
