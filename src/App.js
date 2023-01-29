import { useState } from "react";
import CardForm from "./components/CardForm";
import CardImg from "./components/CardImg";
import Thanks from "./components/Thanks";

function App() {
  const [error, setError] = useState({
    cardNumberErr: false,
    monthErr: false,
    yearErr: false,
    cvcErr: false,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("submitted");
    // console.log(form);
    if (/^[0-9]+$/.test(cardNumber)) {
      setError((prev) => ({
        ...prev,
        cardNumberErr: true,
      }));
    } else if (month === "") {
      setError((prev) => ({
        ...prev,
        monthErr: true,
      }));
    } else if (year === "") {
      setError((prev) => ({
        ...prev,
        yearErr: true,
      }));
    } else if (cvc === "") {
      setError((prev) => ({
        ...prev,
        cvcErr: true,
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
      setError({
        cardNumberErr: false,
        cardDetails: false,
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
