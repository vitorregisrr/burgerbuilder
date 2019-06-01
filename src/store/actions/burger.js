import * as actionTypes from './types';
export const add_ingredient = (ingredient) => {
    return {type: actionTypes.ADD_INGREDIENT, ingredient}
}

export const remove_ingredient = (ingredient) => {
    return {type: actionTypes.REMOVE_INGREDIENT, ingredient}
}

export const init_ingredients = () => {
    return{
        type: actionTypes.INIT_INGREDIENTS
    }
}

export const init_ingredients_success = (ingredients) => {
    return{
        type: actionTypes.INIT_INGREDIENTS_SUCCESS,
        ingredients,
        error: false
    }
}

export const init_ingredients_failed = (error) => {
    return{
        type: actionTypes.INIT_INGREDIENTS_FAILED,
        error
    }
}