import React from "react";
import logo from "../../logo.png";
import hero from "../../img/hero.svg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-body">
      <div
        className="container"
        style={{ height: "100vh", paddingTop: "50px" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12 col-12 text-lg-start text-center ml-auto mr-auto position-relative">
            <img
              src={logo}
              alt=""
              style={{
                width: "80px",
                marginTop: "100px",
                marginBottom: "10px"
              }}
            />
            <h1
              className="text-title" 
              style={{ fontSize: "50px", color: "#223464" }}
            >
              Made with <br /> React
            </h1>
            <p className="text-description mt-4">
              A collection of websites and applications using the React or React
              Native JavaScript library.
            </p>
          </div>
          <div className="col-lg-8 d-lg-block d-none">
            <img className="w-100 h-100" src={hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
