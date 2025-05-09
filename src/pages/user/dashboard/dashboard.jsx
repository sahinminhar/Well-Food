import React from "react";
import food from "../../../assets/img/food2.png";
import Navbar from "../../../organism/layouts/navbar";
import "../../../assets/css/style.css";
import { Spinner } from "react-bootstrap";

const Dashboard = () => {
  return (
    <header className="dashboard-header">
      <div className="body">
        <div className="main-content">
          <div className="image">
            <img src={food} width={600} />
          </div>
          <p className="promo-text">🍔 Start price ONLY $25</p>

          <h1>
            DELICIOUS FOOD <br />
            NEAR YOUR <br />
            TOWN
          </h1>

          <p className="description">
            Welcome to our culinary sanctuary, where every dish tells a story.
            Every bite is an adventure at our food website, we invite you to
            explore.
          </p>

          <button className="view-menu-button">View All Menu</button>
        </div>
      </div>
      <Spinner />
    </header>
  );
};

export default Dashboard;
