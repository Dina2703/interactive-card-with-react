import CardForm from "./components/CardForm";
import CardImg from "./components/CardImg";
import { useState } from "react";

function App() {
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
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="background__wrapper">
        <div className="linear_side"></div>
        <div className="white_side"></div>
      </div>
      <div className="container">
        <CardForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <CardImg form={form} />
      </div>
    </div>
  );
}

export default App;
