import React from "react";
import logo from "../../img/material-tail-wind.png";

const MaterialTailwind = () => {
  return (
    <div className="container text-center" style={{paddingTop:"120px"}}>
      <div className="row align-items-center">
        <div className="col-12">
          <img style={{width:"200px"}} className="mb-5" src={logo} alt="" />
          <h1
            className="mb-3"
            style={{ color: "rgba(33,33,33)", fontSize: "3.75rem" }}
          >
            Material Tailwind
          </h1>
          <div className="description">
            <p style={{color:"rgba(69,90,100)", fontSize:"1.125rem"}}>
              @material-tailwind is an easy to use components library for
              Tailwind CSS and Material Design. It features multiple <br /> React
              components, all written with Tailwind CSS classes and Material
              Design guidelines. Coming soon components for <br /> VueJS, Angular and
              many more.
            </p>
            <a style={{fontWeight:"600",padding:"13px 30px", backgroundColor:"#009688", color:"#fff"}} className="btn me-2 mt-2" href="https://material-tailwind.com/#how-to-use">HOW TO USE</a>
            <a style={{fontWeight:"600",padding:"13px 30px", backgroundColor:"#03A9F4", color:"#fff"}} className="btn me-2 mt-2" href="https://material-tailwind.com/documentation/quick-start">GET STARTED</a>
            <a style={{fontWeight:"600",padding:"13px 30px", backgroundColor:"#334155", color:"#fff"}} className="btn mt-2" href="https://github.com/creativetimofficial/material-tailwind">GITHUB STAR</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialTailwind;
