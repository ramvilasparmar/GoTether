import React, { useEffect, useState } from "react";
import gradient from "../Assets/gradient.png";
import iphone from "../Assets/iphone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <h2 className="text-title">Welcome to Gotether</h2>
          <p className="text-descritpion">
            At GoTether, we understand the dynamic world of cryptocurrency trading.
            Our platform is specifically designed for traders like you, looking for
            a reliable and efficient way to buy and sell USDT. With our user-friendly
            interface and cutting-edge security protocols, your trading experience
            is not only streamlined but also safe. Join our growing community of
            savvy traders and take your cryptocurrency journey to the next level!
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faExchangeAlt} /> Exchange
          </button>

          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Users Daily</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Experts</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years in Industry</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="gradient-container">
            <img src={gradient} className="gradient" alt="Gradient Background" />
            <motion.img
              src={iphone}
              className="iphone"
              alt="iPhone"
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
