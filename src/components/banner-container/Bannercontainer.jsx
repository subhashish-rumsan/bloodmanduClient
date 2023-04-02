import React from "react";
import "./Bannercontainer.css";
const Bannercontainer = () => {
  return (
    <div className="banner__single__container">
      <img
        src="https://static.vecteezy.com/system/resources/previews/005/424/812/non_2x/volunteers-donating-blood-blood-donor-charity-concept-world-blood-donor-day-health-care-for-banner-poster-card-ui-web-landing-page-template-for-blood-bank-or-hospital-flat-illustration-free-vector.jpg"
        alt="blood_image"
        className="container__image"
      />
      <div className="desc__container">
        <p className="description__title">
          Why <span style={{ color: "#880808" }}>Bloodmandu?</span>
        </p>
        <p className="description">
          Existing blood management system in Nepal is manual, cumbersome and
          inefficient. Most blood banks record the information on blood
          collection/supply manually in registers. Maintaining blood stock
          inventory is tedious with laborious back-office paperwork and managing
          information on availability and shortage of blood is a tall task. A
          social initiative for a smart, transparent and holistic blood
          management service from collection to supply. When it comes to blood,
          right information at the right time can be the answer to a life and
          death situation
        </p>
      </div>
    </div>
  );
};

export default Bannercontainer;
