import React from "react";
import logo from "../../logo.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <div className="container" style={{ height: "100vh" }}>
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-12 text-center">
            <img
              src={logo}
              alt=""
              style={{
                width: "200px",
                marginTop: "100px",
                marginBottom: "10px",
              }}
            />
            <h1
              className="text-title"
              style={{ fontSize: "80px", color: "#223464" }}
            >
              Made with <br /> React
            </h1>
            <p
              className="text-description mt-4"
              style={{ color: "rgba(69,90,100)", fontSize: "1.25rem" }}
            >
              A collection of websites and applications using the React or React
              Native JavaScript library.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
