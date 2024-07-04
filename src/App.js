import "./App.css";
import Profile from "./Profile";
import { Row, Col } from "antd";
import Category from "./Category";
import Details from "./Details";
import Statistics from "./Statistics";
import Reviews from "./Reviews";
import BackgroundImage from "./BackGroundImage";

function App() {
  return (
    <div
      class="main-container"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <BackgroundImage />
      <div class="container">
        <div
          class="top-row "
          style={{ display: "flex", alignItems: "flex-start", padding: "20px" }}
        >
          <div class="" style={{ flex: 1 }}>
            <Profile />
          </div>
          <div class=" top-right-div" style={{ flex: 3 }}>
            <Statistics />
            <Category />
            <Details />
          </div>
        </div>
        <div class="bottom-div">
          <Reviews />
        </div>
      </div>
    </div>
  );
}

export default App;
