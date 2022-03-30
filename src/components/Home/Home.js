import React from "react";
import logo from "../../logo.svg";
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
          <div className="col-lg-4 col-md-8 col-12 text-left ml-auto mr-auto position-relative">
            <img
              height={100}
              width={100}
              src={logo}
              alt=""
              style={{
                width: "200px",
                marginLeft: "-50px",
                marginTop: "100px",
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
