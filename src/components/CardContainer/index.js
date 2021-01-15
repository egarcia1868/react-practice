import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      {/* Pass props to Card */}
      <Card 
        title={props.title}
        profileUrl={props.profileUrl}
        image={props.image}
        handleBtnClick={props.handleBtnClick}
      />
    </div>
  );
}

export default CardContainer;
