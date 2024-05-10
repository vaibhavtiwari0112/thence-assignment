import React from "react";
import "../../../styles/Homepage/center/Center.css";
import CenterCard from "./CenterCard";
import CrouselCard from "./CrouselCard";

const Center = () => {
  return (
    <div className="center-container">
      <div className="center-text">
        <p className="italic-text">Share stories</p>
        <p className="plain-text">Every success journey we’ve encountered.</p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "34px" }}>
        <CenterCard />
        <div style={{ maxWidth: "500px" }}>
          <CrouselCard />
          <button className="explore-more-button">
            Explore more{" "}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1716 6.9999L-5.92571e-07 6.9999L-7.67416e-07 8.9999L12.1716 8.9999L6.8076 14.3638L8.2218 15.778L16 7.9999L8.2218 0.221679L6.8076 1.63589L12.1716 6.9999Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Center;
