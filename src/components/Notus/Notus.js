import React from "react";
import hero2 from "../../img/hero2.png";
import './Notus.css'

const Notus = () => {
  return (
    <div className="notus-body position-relative">
      <div className="container" style={{ height: "100vh" }}>
        <div className="row align-items-center" style={{ height: "100vh" }}>
          <div className="col-lg-6 col-12 text-left">
            <h1
              className="text-title"
              style={{ fontSize: "2.25rem", color: "rgba(71,85,105)" }}
            >
              Notus React - A beautiful extension for Tailwind CSS.
            </h1>
            <p className="text-description mt-4" style={{color:"rgba(69,90,100)", fontSize:"1.125rem"}}>
              Notus React is Free and Open Source. It does not change any of the
              CSS from Tailwind CSS. It features multiple HTML elements and it
              comes with dynamic components for ReactJS, Vue and Angular.
            </p>
            <a style={{fontWeight:"600",padding:"13px 30px", backgroundColor:"#0EA5E9", color:"#fff"}} className="btn me-2" href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus">GET STARTED</a>
            <a style={{fontWeight:"600",padding:"13px 30px", backgroundColor:"#334155", color:"#fff"}} className="btn" href="https://github.com/creativetimofficial/notus-react">GITHUB STAR</a>
          </div>
          <div className="col-lg-6 d-lg-block d-none">
            <img
              style={{ right: "0", top: "50px", bottom: "0", height: "90%" }}
              className="position-absolute"
              src={hero2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notus;
