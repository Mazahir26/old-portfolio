import React, { useEffect } from "react";
import anime from "animejs";
import "./styles/loading.scss";

function Loading() {
  useEffect(() => {
    const tl = anime.timeline({ easing: "linear" });
    // Morph animation into logo
    tl.add({
      targets: [".loading-morph"],
      opacity: [0, 1],
      duration: 1000,
    })
      .add(
        {
          targets: ".loading-text path",
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: 2000,
          delay: function (el, i) {
            return i * 1000;
          },
          easing: "easeInOutQuad",
          direction: "alternate",
          loop: true,
        },
        "-=500"
      )
      .add({
        targets: ".loading-text",
        fill: "#EFEBE9",
        duration: 500,
      })
      .add(
        {
          targets: ".loading-wrapper",
          opacity: [1, 0],
          duration: 1000,
        },
        "+=250"
      );
  });
  return (
    <div id="loading">
      <div className="loading-wrapper">
        <svg
          className="loading-text"
          width="246"
          height="148"
          viewBox="0 0 246 148"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50 112.5 V 1.8313 H 71.4855 L 122.7181 37.7406 H 123.492 L 174.7247 1.8313 H 195.4654 V 112.5 H 170.7004 V 32.7876 L 135.565 56.3144 V 112.5 H 110.8 V 56.3144 L 75.5098 32.7876 V 112.5 Z"
            stroke="#D5D3E0"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Loading;
