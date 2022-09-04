import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1><span>launch your app</span> with confidence and creativity</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, pariatur?</p>
        <a href="#" className="cv-btn">Download</a>
      </div>
    </div>
  )
}