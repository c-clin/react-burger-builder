import React from "react";
import { withRouter } from "react-router-dom";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  console.log(props);
  let transformedIngredients = Object.keys(props.ingredients) // return the keys of ingredients eg. salad, cheese
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // turn the number of ingredients in each category into an array to prevent errors since we are mapping through it
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    // reduce it to one single array
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(burger);
