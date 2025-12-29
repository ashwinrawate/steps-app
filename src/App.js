import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  let [step, setStep] = useState(2);

  function handlePrevious() {
    return setStep(step === 1 ? step : step - 1);
  }
  function handleNext() {
    return setStep(step === 3 ? step : step + 1);
  }
  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{ backgroundColor: "purple", color: "White" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "purple", color: "White" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default App;
