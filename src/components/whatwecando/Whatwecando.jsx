import React from "react";
import "./Whatwecando.css";
import Card from "react-bootstrap/Card";
const Whatwecando = () => {
  return (
    <div className="main__container">
      <div className="description__section">
        <p className="description__title">What we Do?</p>
        <p className="description__content">
          With the right donor data management and blood stock management, HLB
          works closely with blood banks to maintain their information and also
          recruit, engage and retain donors as per the demand. Folks in search
          of blood can get access to blood availability info.
        </p>
      </div>
      <div className="card__section">
        <div className="card__one">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://previews.123rf.com/images/zuperia/zuperia2003/zuperia200300192/142389550-concept-of-blood-donation-world-blood-donor-day-volunteer-man-is-donating-blood-in-medical-blood.jpg"
            />
            <Card.Body>
              <Card.Title className="text-center">Blood Banks</Card.Title>
              <Card.Text className="text-center"></Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="card__two">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://www.vendavo.com/wp-content/uploads/2019/05/digitalization.png"
            />
            <Card.Body>
              <Card.Title className="text-center">Digitalization</Card.Title>
              <Card.Text className="text-center">
                We digitize blood banks.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-vector/ambulance-siren-vector-emergency-call-icon_567423-561.jpg?w=2000"
            />
            <Card.Body>
              <Card.Title>Emergency</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Whatwecando;
