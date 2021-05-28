import React from "react";
import "../../static/style/layouts/windyItem.css";

const WindyItem = (props) => {
  return (
    <div className="windy-item-sec">
      <h3>{props.device}</h3>
      <p>{props.date}</p>
    </div>
  );
};

export default WindyItem;
