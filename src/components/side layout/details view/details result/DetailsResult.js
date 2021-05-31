import classes from "./DetailsResult.module.css";
import React from "react";

const detailsResult = (props) => {
  return (
    <div className={classes.DetailsResult}>
      <div className={classes.Title}>{props.title}</div>
      <div>{props.value}</div>
    </div>
  );
};

export default detailsResult;
