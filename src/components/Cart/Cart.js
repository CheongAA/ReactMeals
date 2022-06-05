import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const context = useContext(CartContext);

  const totalAmount = `${context.totalAmount.toFixed(2)}`;
  const hasItems = context.items.length > 0;

  const cartItemAddHandler = (item) => {
    context.addItem(item);
  };

  const cartItmeRemoveHandler = (id) => {
    context.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {context.items.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={cartItmeRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>Total Amount</div>
      <div>{totalAmount}</div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
