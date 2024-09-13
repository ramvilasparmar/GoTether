import React from "react";
import InformationCard from "./InformationCard";
import { faDollarSign, faLock, faHeadset } from "@fortawesome/free-solid-svg-icons"; // Updated icons
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>How it Works</span>
        </h3>
        <h4 className="info-subtitle">Trading Made Easy</h4> {/* Updated subtitle */}
        <ol className="info-description">
          <li>Sign Up: Create your free account in under a minute and verify your identity for secure trading.</li>
          <li>Deposit Funds: Choose from multiple payment options to deposit funds into your Gotether wallet swiftly.</li>
          <li>Buy/Sell USDT: Navigate to our trading dashboard, and effortlessly execute buy or sell orders in just a few clicks.</li>
          <li>Withdraw Profits: Transfer your earnings back to your bank account or reinvest in your trading strategy anytime.</li>
        </ol>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="User-Friendly Interface"
          description="Our platform is designed for traders of all experience levels, ensuring easy navigation and seamless transactions."
          icon={faDollarSign} // Updated icon
        />

        <InformationCard
          title="Competive Price"
          description="We prioritize your safety with industry-leading encryption technology and two-factor authentication (2FA)."
          icon={faLock} // Updated icon
        />

        <InformationCard
          title="24/7 Support"
          description="Our dedicated support team is available around the clock to assist you with any inquiries or trading issues."
          icon={faHeadset} // Updated icon
        />
      </div>
    </div>
  );
}

export default Info;
