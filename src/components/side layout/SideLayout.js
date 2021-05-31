import React from "react";
import SearchView from "./search view/SearchView";
import classes from "./SideLayout.module.css";
import DetailsView from "./details view/DetailsView";
import { useSelector } from "react-redux";

const SideLayout = () => {
  const state = useSelector((state) => state.data.description);
  let starting = "linear-gradient(#2a5e85, #6d828e)";
  if (state.includes("cloud")) {
    starting = "linear-gradient(#0d222d, #0d2f3e)";
  } else if (state.includes("rain")) {
    starting = "linear-gradient(#0c1011, #38484a)";
  }
  return (
    <div
      className={classes.SideLayout}
      style={{
        backgroundImage: starting,
      }}
    >
      <SearchView />
      <DetailsView />
    </div>
  );
};

export default SideLayout;
