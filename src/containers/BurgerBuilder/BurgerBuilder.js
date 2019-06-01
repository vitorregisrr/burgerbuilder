import React, {useState, useEffect} from 'react'
import axios from '../../axios.instance';
import {connect} from 'react-redux';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner'
import errorHandler from '../../hoc/errorHandler/errorHandler';
import * as dispatchActions from '../../store/actions/index';

const BurgerBuilder = props => {
    
    const [purchasing,
        setPurchasing] = useState(false)
    const [loadingOrder,
        setLoadingOrder] = useState(false);

    const updatePurchase = () => {
        const sum = Object
            .keys(props.ingredients)
            .map(igKey => props.ingredients[igKey])
            .reduce((sum, el) => sum + el);

        return sum > 0;
    }

    const loginHandler = () => {
        props.onSetRedirectPath('/checkout');
        props
            .history
            .push({pathname: '/auth'});
    }

    const purchaseHandler = () => {
        setPurchasing(!purchasing);
    }

    const continuePurchaseHandler = () => {
        props
            .history
            .push({pathname: '/checkout'});
    }

    useEffect(() => {
        props.onInitIngredients();
    }, []);

    let disabledIngredients = null;
    if (props.ingredients) {

        disabledIngredients = {
            ...props.ingredients
        };

        for (let key in disabledIngredients) {
            disabledIngredients[key] = props.ingredients[key] <= 0;
        }
    }

    return (
        <Aux>
            {!props.error
                ? <Aux>
                        {props.ingredients
                            ? (<BuildControls
                                isAuth={props.isAuth}
                                addIngredient={props.onAddIngredient}
                                loginHandler={loginHandler}
                                removeIngredient={props.onRemoveIngredient}
                                order={purchaseHandler}
                                disabled={disabledIngredients}
                                purchesable={updatePurchase()}
                                price={props.totalPrice}/>)
                            : <Spinner/>
}

                        {props.ingredients
                            ? <Modal show={purchasing} dismiss={purchaseHandler}>
                                    {loadingOrder
                                        ? <Spinner/>
                                        : <OrderSummary
                                            ingredients={props.ingredients}
                                            cancel={purchaseHandler}
                                            continue={continuePurchaseHandler}
                                            price={props.totalPrice}/>}
                                </Modal>
                            : <Spinner/>
}

                        {props.ingredients
                            ? (<Burger ingredients={props.ingredients}/>)
                            : <Spinner/>
}

                    </Aux >
                : <h3>
                    Ingredients cant be loaded!</h3>}
        </Aux>
    )

}

const mapStateToProps = store => {
    return {
        totalPrice: store.burger.totalPrice,
        ingredients: store.burger.ingredients,
        error: store.burger.error,
        isAuth: store.auth.token
            ? true
            : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingredient) => dispatch(dispatchActions.add_ingredient(ingredient)),
        onRemoveIngredient: (ingredient) => dispatch(dispatchActions.remove_ingredient(ingredient)),
        onInitIngredients: () => dispatch(dispatchActions.init_ingredients()),
        onSetRedirectPath: path => dispatch(dispatchActions.set_auth_redirect_path(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(errorHandler(BurgerBuilder, axios));