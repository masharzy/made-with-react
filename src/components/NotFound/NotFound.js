import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="container">
      <div
        className="row align-items-center"
        style={{ height: "100vh" }}
      >
        <section className="page_404">
          <div className="col-12 ">
            <div className="text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <a href="/" className="link_404 btn">
                  Go to Home
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NotFound;
