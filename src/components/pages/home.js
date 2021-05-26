import React, { useEffect } from "react";
import anime from "animejs";
import "../styles/pages/home.scss";

function Home() {
  useEffect(() => {
    const tl = anime.timeline({ easing: "easeInOutQuad" }),
      introText = document.querySelectorAll(".intro-line h1"),
      counter = document.querySelector(".counter");

    // Reveal hidden text for intro and header
    tl.add({
      targets: introText[0],
      translateY: ["100%", 0],
      duration: 1000,
      delay: anime.stagger(300, { start: 1200 }),
    })
      .add(
        {
          targets: ".counter",
          keyframes: [
            {
              opacity: [0, 1],
              translateY: ["100%", 0],
              duration: 500,
              endDelay: 500,
            },
            { opacity: [1, 0], translateY: [0, "-100%"], duration: 500 },
          ],
          update: function () {
            counter.textContent = "Welcome";
          },
          endDelay: 500,
          delay: 500,
          easing: "easeInOutQuad",
        },
        "-=500"
      )
      .add(
        {
          targets: ".counter",
          keyframes: [
            {
              opacity: [0, 1],
              translateY: ["100%", 0],
              duration: 500,
              endDelay: 500,
            },
            { opacity: [1, 0], translateY: [0, "-100%"], duration: 500 },
          ],
          update: function () {
            counter.textContent = "Saludos";
          },
          endDelay: 500,
          delay: 500,
          easing: "easeInOutQuad",
        },
        "-=500"
      )
      .add(
        {
          targets: ".counter",
          keyframes: [
            {
              opacity: [0, 1],
              translateY: ["100%", 0],
              duration: 500,
              endDelay: 500,
            },
          ],
          update: function () {
            counter.textContent = "Namaste";
          },
          endDelay: 500,
          delay: 500,
          easing: "easeInOutQuad",
        },
        "-=500"
      )
      .add({
        targets: introText[0],
        translateY: [0, "-100%"],
        duration: 1000,
        delay: anime.stagger(300),
      })
      .add(
        {
          targets: introText[1],
          keyframes: [
            { translateY: ["100%", 0], duration: 1000, endDelay: 1000 },
            { translateY: [0, "-100%"], duration: 1000, endDelay: 500 },
          ],
          delay: anime.stagger(300),
        },
        "-=500"
      )
      .add(
        {
          targets: ".fade-down",
          translateY: ["-100%", 0],
          opacity: [0, 1],
          duration: 1000,
        },
        "-=500"
      );
  }, []);
  return (
    <section id="home" className="anchor">
      <div className="header-container">
        <div className="intro-line">
          <div>
            <h1 className="fade-up">
              Hey there, <span className="counter"></span>
            </h1>
          </div>
        </div>
        <div className="intro-line">
          <div>
            <h1 className="fade-up">I am a web developer & app developer.</h1>
          </div>
        </div>
        <div className="header-line">
          <div>
            <h1 className="fade-down">
              <span className="shrink">My name is </span>Mazahir,
            </h1>
          </div>
          <div>
            <h2 className="fade-down">and I am from India.</h2>
          </div>
        </div>
        <div className="header-line">
          <div>
            <h1 className="fade-down shrink">
              I am a self-taught developer who likes to learn everything.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;

// targets: ".counter",
// opacity: { value: [0, 1], duration: 800, easing: "linear" },
// textContent: [0, 23],
// duration: 2500,
// round: 1,
// endDelay: 1000,
// easing: "easeInOutQuad",
