import axios from '../../axios.instance';
import {put} from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* initIngredients(action) {
    try{
        const res = yield axios.get('/ingredients.json');
        yield put(actions.init_ingredients_success(res.data));

    }catch(err){
        yield put(actions.init_ingredients_failed(err));
    }
}