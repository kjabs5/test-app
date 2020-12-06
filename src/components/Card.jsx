import React, { Component } from "react";

const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img className="card__img" src={props.imgsrc} alt="Card image cap" />

        <div className="card__info">
          <span className="card__category">{props.title}</span>

          <h3 className="card__title">{props.sname}</h3>

          <a href={props.link} target="_blank">
            <button>Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
