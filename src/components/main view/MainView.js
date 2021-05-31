import React from "react";
import Text from "./Text";
import classes from "./MainView.module.css";
import { useSelector } from "react-redux";
import WbSunnyTwoToneIcon from "@material-ui/icons/WbSunnyTwoTone";

const MainView = () => {
  const data = useSelector((state) => state.data);
  let icon = <WbSunnyTwoToneIcon fontSize="large" />;
  if (data.description.includes("cloud")) {
    icon = <i className="fas fa-cloud"></i>;
  } else if (data.description.includes("rain")) {
    icon = <i className="fas fa-cloud-rain"></i>;
  }
  return (
    <div className={classes.MainView}>
      <div className={classes.Degree}>
        {/* two digit */}
        <Text>
          {data.cityDegree} <sup>&deg;</sup>
        </Text>
      </div>
      {/* */}
      <div className={classes.Flex}>
        <div className={classes.Location}>
          <Text>{data.cityName}</Text>
        </div>
        <div className={classes.TimeDate}>
          <Text>{data.time} </Text>
          <div className={classes.Hypen}>
            <Text> - </Text>
          </div>
          <Text> {data.day}</Text>
        </div>
      </div>
      {/*  */}
      <div className={classes.Flex}>
        <div className={classes.Icon}>
          <Text>{icon}</Text>
        </div>
        <div className={classes.Weather}>
          <Text>{data.description}</Text>
        </div>
      </div>
    </div>
  );
};

export default MainView;
