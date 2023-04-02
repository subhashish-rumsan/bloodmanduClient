import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <div className="footer__main">
      <div className="footer-content">
        <div className="column">
          <div className="title">About</div>
          <div className="text">
            Voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo eaque ipsa quae ab illo.
          </div>
        </div>
        <div className="column">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Deubachowk, Budanilkantha, Kathmandu, Nepal 9843810334
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 9843810334</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: subhashishjungshah@gmail.com</div>
          </div>
        </div>
        <div className="column">
          <div className="title">Resources</div>
          <span className="text">Blood Basics</span>
          <span className="text">Blood bank Information</span>
          <span className="text">When you need Blood</span>
          <span className="text">Reports</span>
          <span className="text">Videos</span>
          <span className="text">Media Kit</span>
        </div>
        <div className="column">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About us</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Blood Center</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">Bloodmandu 2023 CREATED BY mindXcape</span>
          <img src={Payment} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
