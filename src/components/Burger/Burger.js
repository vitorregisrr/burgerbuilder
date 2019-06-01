import React from 'react';

import classes from './Burger.module.scss';
import './CSSTransitions.css';

import {TransitionGroup, CSSTransition} from 'react-transition-group';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
    let ingredients = Object
        .keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return (
                    <CSSTransition
                        mountOnEnter
                        unmountOnExit
                        timeout={300}
                        classNames='ingredient'
                        key={igKey + i}>
                        <BurgerIngredient type={igKey}></BurgerIngredient>
                    </CSSTransition>
                )
            })
        })
        .reduce((arr, el) => arr.concat(el), []);

    if (ingredients.length === 0) {
        ingredients = <CSSTransition
            mountOnEnter
            unmountOnExit
            timeout={300}
            classNames='ingredient'
            key={'emptyMessage'}>
            <h3>Your ingredients here!</h3>
        </CSSTransition>
    }

    return (
        <TransitionGroup className={classes.Burger} component='div'>
            <BurgerIngredient type="bread-top"/> {ingredients}
            <BurgerIngredient type="bread-bottom"/>
        </TransitionGroup>
    );
}

export default Burger;