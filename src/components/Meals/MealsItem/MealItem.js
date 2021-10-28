import React from "react";
import { useContext } from "react/cjs/react.development";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs.${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount: amount,
      price:props.price
    })
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id = {props.Id} onAddToCart = {addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
