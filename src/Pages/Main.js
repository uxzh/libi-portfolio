import React from "react";
import Cards from "../Components/Cards";
import "../App.css";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Link to={"/contact"} as={"button"} className="btn">
        {" "}
        About Me{" "}
      </Link>
      <Cards />
    </>
  );
}
