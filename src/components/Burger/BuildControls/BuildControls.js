import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import {Button} from 'react-bootstrap';

const BuildControls = (props) => {
    const controls = [
        {
            label: 'Salad',
            type: 'salad'
        }, {
            label: 'Cheese',
            type: 'cheese'
        }, {
            label: 'Bacon',
            type: 'bacon'
        }, {
            label: 'Meat',
            type: 'meat'
        }
    ]

    return (
        <div className="d-flex justify-content-center flex-column pb-5 text-center">
            <p className="text-center">Total price:
                <b>
                    {props.price}
                    usd</b>
            </p>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {controls.map(ctrl => (<BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    add={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}/>))}
            </div>
            <div className="p-3">
                {props.isAuth
                    ? <Button variant="primary" disabled={!props.purchesable} onClick={props.order}>
                            Order now
                        </Button>
                    : <Button variant="primary" onClick={props.loginHandler}>
                        Sign Up To Order
                    </Button>}
            </div>
        </div>
    );
}

// BuildControls.propTypes = {
//     price: propTypes.number.isRequired,

//     addIngredient: propTypes.func.isRequired,
//     removeIngredient: propTypes.func.isRequired,
//     order: propTypes.func.isRequired
// };

export default BuildControls;