import React from "react";
import classes from "./ColumnDetails.module.css";

const columnDetails = (props) => {
  return (
    <div className={classes.ColumnDetails}>
      <div className={classes.Title}>{props.title}</div>
      <div>{props.value}</div>
    </div>
  );
};

export default columnDetails;
