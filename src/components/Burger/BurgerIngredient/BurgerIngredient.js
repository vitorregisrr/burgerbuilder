import React from 'react';
import propTypes from 'prop-types';

import classes from './BurgerIngredient.module.scss';

const BurgerIngredient = (props) => {

    let ingredient = null;
    switch (props.type) {
        case 'bread-bottom':
            ingredient = <div className={`${classes.BreadBottom}`}></div>
            break;

        case 'bread-top':
            ingredient = (
                <div className={`${classes.BreadTop}`}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;

        case 'meat':
            ingredient = <div className={`${classes.Meat}`}></div>
            break;

        case 'cheese':
            ingredient = <div className={`${classes.Cheese}`}></div>
            break;

        case 'salad':
            ingredient = <div className={`${classes.Salad}`}></div>
            break;

        case 'bacon':
            ingredient = <div className={`${classes.Bacon}`}></div>
            break;

        default:
            ingredient = <div className={`${classes.BreadBottom}`}></div> //in doubt, always choose bacon! <3
            break;

    }

    return ingredient;

};

BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired
};

export default BurgerIngredient;