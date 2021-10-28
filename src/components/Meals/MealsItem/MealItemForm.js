import React, { useState } from "react";
import { useRef } from "react";
import Input from "../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid , setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredAmount = amountInputRef.current.value;
    const eneteredAmountNumber = +eneteredAmount;

    if (
      eneteredAmount.trim().length === 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(eneteredAmountNumber);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        label="Amount"
      />
      <button>+Add</button>
      {!amountIsValid && <p>Plese enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
