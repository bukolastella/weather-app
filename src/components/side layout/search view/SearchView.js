import classes from "./SearchView.module.css";
import React, { useEffect } from "react";
import SearchBar from "./search bar/SearchBar";
import SearchResult from "./search result/SearchResult";
import { useDispatch } from "react-redux";
import { dataActions } from "../../../store/index";
import { pastActions } from "../../../store/index";

const SearchView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const helper = async (latitude, longitude) => {
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

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=c2c7023fbf71a1033c4694bd51fce603`
      );
      const data = await response.json();

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
      dispatch(pastActions.change(data.cityName));
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude } = position.coords;
          const { longitude } = position.coords;
          helper(latitude, longitude);
        },
        function () {
          alert("Could not get your location");
        }
      );
    }
  }, [dispatch]);
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
  return (
    <div className={classes.SearchView}>
      <SearchBar onhelper={helper} />
      <SearchResult onhelper={helper} />
    </div>
  );
};

export default SearchView;
