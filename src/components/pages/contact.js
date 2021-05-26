import React, { useState, useEffect } from "react";
import anime from "animejs";
import "../styles/pages/contact.scss";
import emailjs from "emailjs-com";
function Contact() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status !== "") {
      animate();
    }
  }, [status]);

  function animate() {
    const tl = anime.timeline(),
      submitBtn = document.querySelector(".submit-btn"),
      submitText = document.querySelector(".submit-text"),
      check = `<i class="fa fa-check"></i>`,
      error = `<i class="fa fa-times">Error</i>`,
      submit = `<div className="submit-text">Submit</div>`;

    //Animate submit button to updated submission status
    tl.add({
      targets: submitText,
      opacity: [1, 0],
      duration: 300,
      delay: 1000,
    })
      .add({
        targets: submitBtn,
        width: "40px",
        begin: () => {
          status === "SUCCESS"
            ? (submitText.innerHTML = check)
            : (submitText.innerHTML = error);
        },
      })
      .add(
        {
          targets: submitText,
          opacity: [0, 1],
          duration: 5000,
        },
        "-=600"
      )
      .add(
        {
          targets: submitBtn,
          width: "125px",
          begin: () => {
            submitText.innerHTML = submit;
            setStatus("");
          },
        },
        "-=1000"
      );
  }

  function handleSubmit(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_ppzhgnj",
        "template_b3a64ln",
        event.target,
        "user_FVDeV8k6zLzKNLOtbxTm7"
      )
      .then(
        (result) => {
          event.target.reset();
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("Failed");
          setStatus("ERROR");
        }
      );
  }

  return (
    <section id="contact" className="anchor">
      <header className="contact-header">
        <h2>Get in touch?</h2>
        <p>
          You can ping me anytime. Any questions, Greetings or even Project
          ideas are welcome.
        </p>
      </header>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li>mazahirnajmi26@gmail.com</li>
        </ul>
      </div>
      <div className="social-media">
        <ul className="social-links">
          <li>
            <a
              href="https://twitter.com/mazahir_najmi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://t.me/mazahir26" target="_blank" rel="noreferrer">
              <i className="fa fa-telegram"></i>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Mazahir26"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            required
            type="text"
            className="form-control"
            name="user_name"
          ></input>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-group">
          <input
            required
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            name="user_email"
          ></input>
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="form-group">
          <textarea required className="form-control" name="message"></textarea>
          <label htmlFor="message">Message</label>
        </div>
        <button className="submit-btn">
          <div className="submit-text">Submit</div>
        </button>
      </form>
    </section>
  );
}

export default Contact;
