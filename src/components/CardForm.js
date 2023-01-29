function CardForm({ form, handleChange, handleSubmit, error }) {
  const { name, cardNumber, month, year, cvc } = form;

  const { cardNumberErr, monthErr, yearErr, cvcErr } = error;

  return (
    <div className="card__form">
      <form onSubmit={handleSubmit}>
        <div className="input__group">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="e.g. Jane Appleseed"
          />
        </div>
        <div className="input__group">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            className={cardNumberErr ? "red__border" : ""}
            type="text"
            name="cardNumber"
            value={cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")}
            id="cardNumber"
            maxLength="19"
            onChange={handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
          />
          {cardNumberErr ? (
            <p className="red__msg">Wrong format, numbers only</p>
          ) : (
            ""
          )}
        </div>
        <div className="input__group">
          <div className="grid">
            <div>
              <label htmlFor="month">EXP.DATE(MM/YY)</label>
              <div className="date">
                <input
                  className={monthErr ? "red__border" : ""}
                  type="text"
                  name="month"
                  pattern="\d*"
                  maxLength="2"
                  minLength="2"
                  value={month}
                  onChange={handleChange}
                  id="month"
                  placeholder="MM"
                />

                <input
                  className={yearErr ? "red__border" : ""}
                  type="text"
                  name="year"
                  id="year"
                  pattern="\d*"
                  maxLength="2"
                  minLength="2"
                  value={year}
                  onChange={handleChange}
                  placeholder="YY"
                />
              </div>
              {monthErr || yearErr ? (
                <p className="red__msg">Can't be blank</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <label htmlFor="cvc">CVC</label>
              <input
                className={`cvc ${cvcErr ? "red__border" : ""}`}
                type="text"
                name="cvc"
                pattern="\d*"
                maxLength="3"
                minLength="3"
                value={cvc}
                onChange={handleChange}
                id="cvc"
                placeholder="e.g. 123"
              />
              {cvcErr ? <p className="red__msg">Can't be blank</p> : ""}
            </div>
          </div>
        </div>
        <button type="submit" className="btn">
          Confirm
        </button>
      </form>
    </div>
  );
}

export default CardForm;
