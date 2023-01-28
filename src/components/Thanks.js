import icon from "../images/icon-complete.svg";

function Thanks({ restart }) {
  return (
    <div
      className="thanks
  "
    >
      <img src={icon} alt="" />
      <h3>THANK YOU! </h3>
      <p>We've added your card details</p>
      <button className="btn" onClick={restart}>
        Continue
      </button>
    </div>
  );
}

export default Thanks;
