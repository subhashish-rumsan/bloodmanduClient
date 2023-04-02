import React from "react";
import "./Stats.css";
import { animated, useSpring } from "react-spring";
function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>;
}
const Stats = () => {
  return (
    <div className="container d-flex justify-content-evenly align-items-center custom__container__css">
      <div className="tear__alternate">
        <p className="tear__stats__alt">
          + <Number n={5000} /> <br />{" "}
          <span className="tear__description__alt">Blood Collected</span>
        </p>
      </div>
      <div className="tear__alternate">
        <p className="tear__stats__alt">
          + <Number n={4980} /> <br />{" "}
          <span className="tear__description__alt">Live saved</span>
        </p>
      </div>
      <div className="tear__alternate">
        <p className="tear__stats__alt">
          + <Number n={5000} /> <br />{" "}
          <span className="tear__description__alt">Customers</span>
        </p>
      </div>
    </div>
  );
};

export default Stats;
