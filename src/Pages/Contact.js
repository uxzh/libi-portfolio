import React from "react";
import "../Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="contactDiv">
      <h2>About me</h2>
      <Link to={"/"}>
        <span id="closeProj">✖</span>
      </Link>
      <div className="profile">
        <img
          alt="Libi"
          className="provilePhoto"
          src="https://i3.lensdump.com/i/Tu54tF.webp"
        />
        <div className="profileInfo">
          <p className="profileEmail">
            Email: <a href="mailto:libi.png@gmail.com">libi.png@gmail.com</a>
          </p>
          <p id="profileCV">
            CV:{" "}
            <a href="https://drive.google.com/file/d/1fvDz-vulrprCnN3WVsucAFrFMwG-MeNd/view?usp=drive_link">
              Download CV
            </a>
          </p>
          <p id="profileLocation">
            Location:{" "}
            <strong style={{ color: "white" }}>Syracuse NY / Remote</strong>
          </p>
          <h3 className="contactTitle">WHAT I DO</h3>
          <p className="whoIAm">
            <span>2D animation, 3D animation </span> based on MAYA software,{" "}
            <span>3D art and modeling</span>, mixed technics and filming
            assistance. Remote part time / freelance position.
          </p>
          <h3 className="contactTitle">WHO I AM</h3>
          <p className="whoIAm">
            Hi, my name is Libi Zak and{" "}
            <span>I am a 2D and 3D artist and animator</span> currently studying
            at the Bezalel Academy of Arts and Design in Jerusalem. I was born
            in Russia, but I have studied and worked in Israel and recently
            relocated to Syracuse NY. Throughout my studies, I have gained a
            strong foundation in various techniques and software programs used
            in cinematic arts, 3D and 2D animation. I am particularly interested
            in storytelling, developing art for unique projects, and bringing
            characters to life. I am always looking for new opportunities to
            grow and develop as an artist, and I am excited to see where my
            career will take me in the future. <span>My projects include</span>{" "}
            freelance animation for academic content, participation in a
            documentary feature film as a 2D animator, a variety of personal
            short animation films, and other projects. Thank you for visiting my
            portfolio website. I hope you enjoy viewing my work as much as I
            enjoyed creating it.
          </p>

          <h4 style={{ marginTop: 30, color: "gray" }}>
            For inquires please email: <br />
          </h4>
          <p className="profileEmail">
            <a href="mailto:libi.png@gmail.com">libi.png@gmail.com</a>
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
