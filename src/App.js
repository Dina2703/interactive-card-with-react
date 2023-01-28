import { useState } from "react";
import CardForm from "./components/CardForm";
import CardImg from "./components/CardImg";
import Thanks from "./components/Thanks";

function App() {
  const [error, setError] = useState({
    cardNumberErr: false,
    cardDetails: true,
  });

  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const { cardNumber, month, year, cvc } = form;

  const re = /^[0-9\b]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    // console.log(form);
    if (cardNumber.length < 18 || re.test(cardNumber)) {
      setError((prev) => ({
        ...prev,
        cardNumberErr: true,
      }));
    }
    if (month === "" || year === "" || cvc === "") {
      setError((prev) => ({
        ...prev,
        cardDetails: true,
      }));
    } else {
      setSubmit(true);
      setForm({
        name: "",
        cardNumber: "",
        month: "",
        year: "",
        cvc: "",
      });
    }
    console.log(cardNumber.length);
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const restart = () => setSubmit(false);

  return (
    <div>
      <div className="background__wrapper">
        <div className="linear_side"></div>
        <div className="white_side"></div>
      </div>
      <div className="container">
        {submit ? (
          <Thanks restart={restart} />
        ) : (
          <CardForm
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            error={error}
          />
        )}
        <CardImg form={form} />
      </div>
    </div>
  );
}

export default App;
