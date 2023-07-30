import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Projects from "../projects";
import "../Project.css";

export default function Project() {
  const { projectUrl } = useParams();

  // Look up the project information by the projectUrl parameter
  const project = Projects.find((p) => p.hrefUrl === projectUrl);

  const navigate = useNavigate();

  return (
    <div className="projectDiv" id={project.hrefUrl}>
      <button id="closeProj" onClick={() => navigate(-1)}>
        ✖
      </button>
      <h2>{project.name}</h2>
      {project.fullVid && (
        <div id="video">
          <iframe
            id="fullVideo"
            src={project.fullVid}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            style={{ marginTop: 30 }}
          ></iframe>
          <p className="projDesc">{project.info}</p>
        </div>
      )}
      <h4 style={{ color: "grey" }} className="projMedium">
        Medium: {project.medium}
      </h4>
      {!project.fullVid && <p className="projDesc">{project.info}</p>}
      {project.otherImgs.length > 0 &&
        project.otherImgs.map((imgU) => (
          <img
            src={imgU}
            className="otherImgs"
            key={Math.floor(
              (new Date().getTime() * Math.random()) / Math.random() +
                Math.random()
            )}
            alt={project.name}
          />
        ))}
    </div>
  );
}
