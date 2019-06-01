import * as actionTypes from '../actions/types';

const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 2,
    bacon: 2.5,
    meat: 4
}

const initialState = {
    ingredients: null,
    totalPrice: 4
}

const reducer = (state = initialState, action) => {

    switch (action.type) {

            ///// INIT INGREDIENTS WITH FETCH /////
        case actionTypes.INIT_INGREDIENTS_SUCCESS:

            state = {
                ...state,
                ingredients: action.ingredients,
                totalPrice: 4
            }

            break;

             ///// FAILED INIT INGREDIENTS WITH FETCH/////
        case actionTypes.INIT_INGREDIENTS_FAILED:
        state = {
            ...state,
            error: action.error
        }

        break;
            ///// ADD INGREDIENT /////
        case actionTypes.ADD_INGREDIENT:

            state = {
                ...state,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] + 1
                }
            }

            break;

            ///// REMOVE INGREDIENT /////
        case actionTypes.REMOVE_INGREDIENT:
            state = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]: state.ingredients[action.ingredient] > 0
                        ? state.ingredients[action.ingredient] - 1
                        : 0
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredient]
            }

            break;

            default:
    }

    return state;
}

export default reducer;