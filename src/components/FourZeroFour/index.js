import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/images/404.png";

export default function FourZeroFour() {
  const navigate = useNavigate();
  return (
    <section className="error-page text-center py-120 rpy-100">
      <div className="container">
        <div className="error-content">
          <img src={errorImg} alt="404 Error" />
          <h2>Oops! page not found.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="theme-btn mt-30"
          >
            go back
          </a>
        </div>
      </div>
    </section>
  );
}
