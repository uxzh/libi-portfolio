import React from "react";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1 style={{ fontSize: "40vw", margin: 0 }}>404</h1>
      <h2>Page not found!</h2>
      <center>
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
