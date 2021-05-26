import React from "react";
import profile from "../../img/profile.png";
import "../styles/pages/about.scss";

function About() {
  return (
    <section id="about" className="anchor">
      <div className="bio">
        <h2>Hi,</h2>
        <h2>I'm Mazahir.</h2>
        <p>
          Experienced mobile app developer who has a track record of success
          creating apps that are both well-received and commercially viable.
          Skilled with working as a team and incorporating input into projects.
          Ability to always look for ways to improve upon an already existing
          app to keep people downloading it and enjoying it. Strong eye for
          detail and tenacity to never quit on something until it is absolutely
          perfect.
        </p>
        <p>
          Knowledgeable and detail-oriented Game Programmer accustomed to
          working in fast-paced and deadline-driven environments. I have
          extensive expertise in using Unity 3D and Godot.
        </p>
        <p>
          Strong creative and analytical skills. I am an Experienced Web
          Developer with an eye for reactjs, javascript and, bootstrap.
        </p>
      </div>
      <div className="profile-wrapper">
        <img className="profile" src={profile} alt="Yeah, that's me"></img>
      </div>
      <div className="skills">
        <h3>Skills</h3>
        <div className="skills-container">
          <div className="programming">
            <h4>Programming</h4>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>Nodejs</li>
            </ul>
          </div>
          <div className="web-dev">
            <h4>Web Development</h4>
            <ul>
              <li>HTML</li>
              <li>Flutter</li>
              <li>React-Native</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>
          </div>
          <div className="mechanical">
            <h4>Game Development</h4>
            <ul>
              <li>Godot</li>
              <li>Unity 3D</li>
              <li>Blender</li>
              <li>Inksacpe</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
