import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl 
                added={() => props.ingredientAdded(control.type)}
                removed={() => props.ingredientsRemoved(control.type)}
                disabled={props.disabled[control.type]}
                key={control.label} 
                label={control.label}/>
        ))}
        <button 
            onClick={props.ordered}
            className={classes.OrderButton}
            disabled={!props.purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;