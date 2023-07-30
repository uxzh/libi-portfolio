import React, { useState } from "react";
import Projects from "../projects";
import { Link, useNavigate } from "react-router-dom";

export default function Cards() {
  return (
    <>
      <div id="Cards">
        {Projects.map((project) => (
          <Link
            className={project.classImg + " card"}
            key={project.id}
            id={project.hrefUrl}
            to={`/project/${project.hrefUrl}`}
          >
            <img src={project.imgUrl} alt={project.name} draggable="false" />
            <div className="overlay"></div>
            <div className="projectName">
              <h3>{project.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
