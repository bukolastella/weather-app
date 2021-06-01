import React from "react";
import classes from "./Spinner.module.css";
import CircularProgress from "@material-ui/core/CircularProgress";

function Spinner() {
  return (
    <div className={classes.Spinner}>
      <CircularProgress />
    </div>
  );
}

export default Spinner;
