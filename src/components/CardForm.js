function CardForm({ form, handleChange, handleSubmit }) {
  const { name, cardNumber, month, year, cvc } = form;

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
            required
          />
        </div>
        <div className="input__group">
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            required
            value={cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")}
            id="cardNumber"
            onChange={handleChange}
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </div>
        <div className="input__group">
          <div className="grid">
            <div>
              <label htmlFor="month">EXP.DATE(MM/YY)</label>
              <div className="date">
                <input
                  type="text"
                  required
                  name="month"
                  value={month}
                  onChange={handleChange}
                  id="month"
                  placeholder="MM"
                />
                <input
                  type="text"
                  name="year"
                  required
                  id="year"
                  value={year}
                  onChange={handleChange}
                  placeholder="YY"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cvc">CVC</label>
              <input
                className="cvc"
                type="text"
                required
                name="cvc"
                value={cvc}
                onChange={handleChange}
                id="cvc"
                placeholder="e.g. 123"
              />
            </div>
          </div>
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
}

export default CardForm;
