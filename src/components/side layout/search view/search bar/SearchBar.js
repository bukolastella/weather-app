import classes from "./SearchBar.module.css";
import React, { useRef } from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";

const SearchBar = (props) => {
  const ref = useRef();
  const searchHandler = async (event) => {
    const inputValue = ref.current.value.trim();
    if (inputValue === "") {
      return;
    }
    event.preventDefault();
    try {
      await props.onhelper(inputValue);
    } catch (error) {
      alert(
        " Location not available, \n Check your internet connection and try again"
      );
    }
    ref.current.value = "";
  };
  return (
    <form className={classes.Form} onSubmit={searchHandler}>
      <input
        type="text"
        className={classes.SearchBar}
        placeholder="Another location"
        ref={ref}
      />
      <div className={classes.SearchIcon} onClick={searchHandler}>
        <SearchRoundedIcon fontSize="large" />
      </div>
    </form>
  );
};

export default SearchBar;
