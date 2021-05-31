import classes from "./MobileView.module.css";
import React, { useRef } from "react";
import Text from "../main view/Text";
import { useSelector } from "react-redux";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import ColumnDetails from "./column Details/ColumnDetails";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/index";
import { pastActions } from "../../store/index";

const MobileView = () => {
  const data = useSelector((state) => state.data);
  const state = useSelector((state) => state.data.description);
  const ref = useRef();
  const dispatch = useDispatch();
  let starting = "#2a5e85c7";
  if (state.includes("cloud")) {
    starting = "#0d222dc7";
  } else if (state.includes("rain")) {
    starting = "#0c1011c7";
  }

  const helper = async (inputValue, opt = null) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=c2c7023fbf71a1033c4694bd51fce603`
    );
    const data = await response.json();

    let y = new Date()
      .toLocaleDateString("en-us", {
        year: "numeric",
      })
      .slice(2);
    y = "'" + y;

    const z = `${new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })} ${y}`;

    const formatData = {
      cityName: data.name,
      cityDegree: (data.main.temp - 273.15).toFixed(1),
      time: `${new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`,
      day: `${z}`,
      description: data.weather[0].description,
      cloudyNo: `${data.clouds.all}%`,
      humidityNo: `${data.main.humidity}%`,
      wind: `${data.wind.speed} m/s`,
      rain: `${data.rain ? `${data.rain["1h"]} mm` : "N/A"}`,
    };
    dispatch(dataActions.getCityName(formatData));
    if (!opt) dispatch(pastActions.change(data.name));
    else dispatch(pastActions.change(opt));
  };

  const submit = async (event) => {
    event.preventDefault();
    if (ref.current.value === "") {
      return;
    }
    try {
      await helper(ref.current.value);
    } catch (error) {
      alert(
        " Location not available, \n Check your internet connection and try again"
      );
    }
    ref.current.value = "";
  };

  return (
    <div className={classes.MobileView}>
      <div className={classes.Top}>
        <div className={classes.Date}>
          <Text>{data.day}</Text>

          <div className={classes.Location}>
            <i className="fas fa-map-marker-alt"></i>
            <Text>{data.cityName}</Text>
          </div>
        </div>

        <form
          className={classes.Form}
          onSubmit={submit}
          style={{
            backgroundColor: starting,
          }}
        >
          <span className={classes.Submit} onClick={submit}>
            <SearchRoundedIcon fontSize="large" />
          </span>
          <input type="text" placeholder="Another location" ref={ref} />
        </form>
      </div>

      <div className={classes.Flex}>
        <div className={classes.Flex1}>
          <Text>{data.description}</Text>
        </div>
        <div className={classes.Flex2}>
          <Text>
            {data.cityDegree} <sup>&deg;</sup>
          </Text>
        </div>
      </div>

      {/*  */}
      <div
        className={classes.Bottom}
        style={{
          backgroundColor: starting,
        }}
      >
        <ColumnDetails title="cloudy" value={data.cloudyNo} />
        <ColumnDetails title="humidity" value={data.humidityNo} />
        <ColumnDetails title="wind" value={data.wind} />
        <ColumnDetails title="rain" value={data.rain} />
      </div>
    </div>
  );
};

export default MobileView;
