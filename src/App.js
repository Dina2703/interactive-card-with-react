import front from "./images/bg-card-front.png";
import back from "./images/bg-card-back.png";
import logo from "./images/card-logo.svg";

function App() {
  return (
    <div className="container">
      <div className="card__form">
        <form action="">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Appleseed"
          />
          <label htmlFor="name">CARDHOLDER NAME</label>
        </form>
      </div>
      <div
        className="leftside
      "
      >
        <div className="card front">
          <img src={front} alt="" />
          <div className="front__card_content card__box">
            <img src={logo} alt="" className="logo" />
            <div className="front__details">
              <div>0000 0000 0000 0000</div>
              <div className="details">
                <div>JANE APPLESEED</div>
                <div>00/00</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card back">
          <img src={back} alt="" />
          <div className="back__card_content card__box">
            <div>000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
