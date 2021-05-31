import MainView from "./components/main view/MainView";
import clear from "./assets/kupono1.jpg";
import cloudy from "./assets/tom-barrett-hgGplX3PFBg-unsplash.jpg";
import rainy from "./assets/valentin-muller-bWtd1ZyEy6w-unsplash.jpg";
import SideLayout from "./components/side layout/SideLayout";
import classes from "./App.module.css";
import MobileView from "./components/mobile view/MobileView";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.data.description);
  let startImg = clear;
  if (state.includes("cloud")) {
    startImg = cloudy;
  } else if (state.includes("rain")) {
    startImg = rainy;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${startImg})`,
      }}
      className={classes.App}
    >
      <div className={classes.Hidden}>
        <MainView />
        <SideLayout />
      </div>
      <MobileView />
    </div>
  );
}

export default App;
