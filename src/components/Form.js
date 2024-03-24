import React, { useState } from "react";

const Form = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const handleName1Change = (event) => {
    setName1(event.target.value);
  };

  const handleName2Change = (event) => {
    setName2(event.target.value);
  };

  const calculateRelationship = () => {
    const name1Set = new Set(name1.toLowerCase());
    const name2Set = new Set(name2.toLowerCase());

    let count = 0;

    for (const char of name1Set) {
      if (!name2Set.has(char)) {
        count++;
      }
    }

    for (const char of name2Set) {
      if (!name1Set.has(char)) {
        count++;
      }
    }

    const resultIndex = count % 6;

    switch (resultIndex) {
      case 1:
        setResult("Friends");
        break;
      case 2:
        setResult("Love");
        break;
      case 3:
        setResult("Affection");
        break;
      case 4:
        setResult("Marriage");
        break;
      case 5:
        setResult("Enemy");
        break;
      case 0:
        setResult("Siblings");
        break;
      default:
        setResult("Please Enter valid input");
        break;
    }
  };

  const clearForm = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div>
      <label htmlFor="name1">Name 1:</label>
      <input
        type="text"
        id="name1"
        value={name1}
        onChange={handleName1Change}
        data-testid="input1"
      /> 
      <label htmlFor="name2">Name 2:</label>
      <input
        type="text"
        id="name2"
        value={name2}
        onChange={handleName2Change}
        data-testid="input2"
      /> 
      <button onClick={calculateRelationship} data-testid="calculate_relationship">
        Calculate Relationship
      </button>
      <button onClick={clearForm} data-testid="clear">
        Clear
      </button>
      {result && <h3 data-testid="answer">{result}</h3>}
    </div>
  );
};

export default Form;