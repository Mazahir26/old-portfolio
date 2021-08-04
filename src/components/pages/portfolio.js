import React from "react";
import anime from "animejs";
import Tile from "../tile";
import project1 from "../../img/project_1.png";
import project2 from "../../img/project_2.png";
import project3 from "../../img/project_3.png";
import project4 from "../../img/project_4.png";
import { content } from "../content";
import "../styles/pages/portfolio.scss";

function Portfolio() {
  const openTile = (elem, key, closeBtn) => {
    document.body.classList.add("no-scroll");

    const tl = anime.timeline();

    // Fade out old text and display new text
    tl.add({
      targets: [...elem.children],
      opacity: 0,
      easing: "linear",
      duration: 500,
      complete: () => {
        elem.classList.add("expanded");
      },
    }).add({
      targets: elem,
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      easing: "easeInOutQuad",
      borderRadius: 0,
      duration: 500,
      complete: () => {
        [...elem.children].forEach((child) => (child.style.display = "none"));
      },
    });

    tl.finished.then(function () {
      elem.appendChild(closeBtn);
      elem.insertAdjacentHTML("afterbegin", content[key]);
      anime({
        targets: [".portfolio-details", ".close"],
        opacity: [0, 1],
        easing: "linear",
        duration: 500,
      });
    });
  };

  const handleClick = (e) => {
    const tile = e.currentTarget,
      key = tile.querySelector(".portfolio-title").textContent,
      clone = tile.cloneNode(true),
      { top, left, width, height } = tile.getBoundingClientRect();

    // Clone and animate tile while hiding original tile
    clone.style.position = "fixed";
    clone.style.top = top + "px";
    clone.style.left = left + "px";
    clone.style.width = width + "px";
    clone.style.height = height + "px";
    clone.style.margin = "0";

    tile.style.opacity = "0";
    tile.parentNode.appendChild(clone);

    const closeBtn = document.createElement("div");
    closeBtn.classList.add("portfolio-close");
    closeBtn.appendChild(document.createElement("div"));
    closeBtn.firstChild.classList.add("close");

    openTile(clone, key, closeBtn);

    closeBtn.addEventListener("click", () => {
      // Set width and height to px for smooth animation
      clone.style.width =
        window.innerWidth + "px" ||
        document.documentElement.clientWidth + "px" ||
        document.body.clientWidth + "px";
      clone.style.height =
        window.innerHeight + "px" ||
        document.documentElement.clientHeight + "px" ||
        document.body.clientHeight + "px";

      const tl = anime.timeline();

      // Reverse animation from openTile
      tl.add({
        targets: [".portfolio-details", ".close"],
        opacity: 0,
        easing: "linear",
        duration: 500,
        complete: () => {
          closeBtn.remove();
          document.querySelector(".portfolio-details").remove();
        },
      }).add({
        targets: clone,
        top: top,
        left: left,
        width: width,
        height: height,
        borderRadius: "5px",
        easing: "easeInOutQuad",
        duration: 500,
        complete: () => {
          clone.classList.remove("expanded");
          [...clone.children].forEach((child) =>
            child.style.removeProperty("display")
          );
        },
      });

      tl.finished.then(function () {
        anime({
          targets: [...clone.children],
          opacity: 1,
          easing: "linear",
          duration: 500,
          complete: () => {
            tile.style.removeProperty("opacity");
            clone.remove();
            document.body.classList.remove("no-scroll");
          },
        });
      });
    });
  };

  return (
    <section id="portfolio" className="anchor">
      <header>
        <h2>Development </h2>
      </header>
      <div className="tile-wrap">
      <Tile
          func={handleClick}
          subtitle="Stay Up to date with Fread"
          title="Fread"
          label="Andriod App"
          src={project4}
          alt="Its Open Source"
          brief="its a Rss News app made with Expo and React-Native...."
        />
        <Tile
          func={handleClick}
          subtitle="Forget Nothing"
          title="Reminder-App"
          label="Andriod App"
          src={project3}
          alt="Its Open Source"
          brief="A Expo and React-Native Application with Notification Support...."
        />
        <Tile
          func={handleClick}
          subtitle="Harry Potter fan"
          title="Harry Potter App"
          label="Andriod App"
          src={project2}
          alt="Its Open Source"
          brief="Its a Simple react-native application where you can....."
        />
        <Tile
          func={handleClick}
          subtitle="Game Jam"
          title="The Spick Buster"
          label="Web Game"
          src={project1}
          alt="Its Open Source"
          brief="Its a pretty simple top down game made from godot....."
        />
      </div>
    </section>
  );
}

export default Portfolio;
