import classes from "./DetailsView.module.css";
import React from "react";
import Text from "../../main view/Text";
import { useSelector } from "react-redux";
import DetailsResult from "./details result/DetailsResult";
const DetailsView = () => {
  const data = useSelector((state) => state.data);

  return (
    <div className={classes.DetailsView}>
      <div className={classes.Header}>
        <Text>weather details</Text>
      </div>
      <DetailsResult title="cloudy" value={data.cloudyNo} />
      <DetailsResult title="humidity" value={data.humidityNo} />
      <DetailsResult title="wind" value={data.wind} />
      <DetailsResult title="rain" value={data.rain} />
      <div className={classes.Dash}></div>
    </div>
  );
};

export default DetailsView;
