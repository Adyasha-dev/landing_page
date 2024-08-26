import React from "react";
import "./Project1.css";

const Project1 = () => {
  return (
    <>
      <nav style={{ height: "3rem" }}>
        <ul className="One">
          <buttom
            style={{
              backgroundColor: "lightgreen",
              color: "white",
              height: "40px",
              width: "100px",
              borderRadius: "50px",
              textAlign: "center",
            }}
          >
            Try it Free
          </buttom>
          <li>contact</li>
          <li>Blog</li>
          <li>pricing</li>
          <li>About</li>
          <li>Service</li>
          <li>Features</li>
          <li>Home</li>
        </ul>{" "}
      </nav>
    </>
  );
};

export default Project1;
