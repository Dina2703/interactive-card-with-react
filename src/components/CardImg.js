import front from "../images/bg-card-front.png";
import back from "../images/bg-card-back.png";
import logo from "../images/card-logo.svg";

function CardImg({ form }) {
  const { name, cardNumber, month, year, cvc } = form;
  return (
    <div className="leftside">
      <div className="card front">
        <img src={front} alt="" />
        <div className="front__card_content card__box">
          <img src={logo} alt="" className="logo" />
          <div className="front__details">
            <div>
              {cardNumber
                ? cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")
                : "0000 0000 0000 0000"}
            </div>
            <div className="details">
              <div>{name ? name : "JANE APPLESEED"}</div>
              <div>
                {month ? month : "00"}/{year ? year : "00"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card back">
        <img src={back} alt="" />
        <div className="back__card_content card__box">
          <div>{cvc ? cvc : "000"}</div>
        </div>
      </div>
    </div>
  );
}

export default CardImg;
