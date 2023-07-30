import React from "react";
const NotFound = () => {
  return (
    <div className="not-found" style={{ height: "100%", margin: "auto" }}>
      <h1 style={{ fontSize: 82, margin: "auto", marginTop: "8vh" }}>404</h1>
      <center>
        <h3>Page not found!</h3>
        Sorry, the page you are looking for<br></br> does not exist.
      </center>
      <center style={{ paddingTop: "4vh" }}>
        <a href="/">
          <button class="custom-btn btn-16">Home Page</button>
        </a>
      </center>
    </div>
  );
};

export default NotFound;
