import classes from "./SearchResult.module.css";
import React from "react";
import { useSelector } from "react-redux";

const SearchResult = (props) => {
  const pastNames = useSelector((state) => state.past);

  const clicked = async (id) => {
    const researchData = pastNames.filter((ev) => ev === id)[0];
    props.onhelper(researchData, researchData);
  };
  return (
    <div className={classes.SearchResult}>
      {pastNames.map((ev) => (
        <div
          onClick={clicked.bind(null, ev)}
          key={Math.random()}
          className={classes.SearchHover}
        >
          {ev}
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
