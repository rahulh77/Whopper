import React from "react";
import Aux from "../../../hoc/Auxillary";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(mykey => {
    return (
      <li key={mykey}>
        <span style={{ textTransform: "capitalize" }}>{mykey}</span>:{
          props.ingredients[mykey]
        }
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients.</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
