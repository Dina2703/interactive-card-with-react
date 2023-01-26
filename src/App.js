import front from "./images/bg-card-front.png";
import back from "./images/bg-card-back.png";
import logo from "./images/card-logo.svg";

function App() {
  return (
    <div className="container">
      <div className="card__form">
        <form action="">
          <div className="input__group">
            <label htmlFor="name">CARDHOLDER NAME</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div className="input__group">
            <label htmlFor="name">CARD NUMBER</label>
            <input
              type="text"
              name="number"
              id="number"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div className="input__group">
            <div className="grid">
              <div>
                <label htmlFor="name">EXP.DATE(MM/YY)</label>
                <div className="date">
                  <input
                    type="text"
                    name="number"
                    id="number"
                    placeholder="MM"
                  />
                  <input type="text" name="year" id="year" placeholder="YY" />
                </div>
              </div>
              <div>
                <label htmlFor="name">CVC</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="e.g. 1234 5678 9123 0000"
                />
              </div>
            </div>
          </div>
          <button type="submit">Confirm</button>
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
