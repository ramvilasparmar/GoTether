import React from "react";
import CryptoTeam from "../Assets/p1.png"; // Update the image path if needed
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={CryptoTeam} alt="Crypto Team" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          At Gotether, our mission is to empower traders with the tools and knowledge they need to succeed in the cryptocurrency market. We are a passionate team of experienced traders and tech enthusiasts who are dedicated to providing a cutting-edge platform that prioritizes security and user experience. Whether you're a seasoned trader or just starting out, we’re here to support your cryptocurrency trading journey every step of the way.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Create Your Account"
          description="Sign up for a free Gotether account and start your trading journey with confidence. We offer a secure platform for all your cryptocurrency needs."
        />

        <SolutionStep
          title="Deposit Funds"
          description="Easily deposit funds into your Gotether wallet using multiple payment methods. Quick and secure transactions to get you trading in no time."
        />

        <SolutionStep
          title="Trade USDT"
          description="Use our intuitive trading dashboard to buy or sell USDT effortlessly. Enjoy a seamless trading experience with real-time updates."
        />

        <SolutionStep
          title="Manage Your Investments"
          description="Track your trading performance and manage your investments. Withdraw your profits or reinvest in new opportunities with ease."
        />
      </div>
    </div>
  );
}

export default About;
