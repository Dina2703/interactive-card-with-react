import { useState } from "react";
import CardForm from "./components/CardForm";
import CardImg from "./components/CardImg";
import Thanks from "./components/Thanks";

function App() {
  const [submit, setSubmit] = useState(false);
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(form);
    setSubmit(true);
    setForm({
      name: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
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
          />
        )}
        <CardImg form={form} />
      </div>
    </div>
  );
}

export default App;
