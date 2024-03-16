import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" style={{objectFit: "contain !important"}}>
        <div className="carousel-inner" id="carousel" >
         
            <div className="carousel-caption" style={{zIndex: "10"}}>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success text-white bg-success" type="submit">
                  Search
                </button>
              </form>

            </div>
            <div className="carousel-item active">
            <img
              src="https://plus.unsplash.com/premium_photo-1682126591140-8042541a66ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgxfHxmb29kfGVufDB8fDB8fHww"
              className="d-block w-100"
              alt="..." style={{filter: "brightness(30%)"}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1679434137779-8a824574bbb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZvb2R8ZW58MHx8MHx8fDA%3D"style={{filter: "brightness(30%)"}}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              className="d-block w-100"
              alt="..."style={{filter: "brightness(30%)"}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
