import React from 'react';
import {Button, Container} from 'react-bootstrap';

const OrderSummary = props => {
    const ingredientSummary = Object
        .keys(props.ingredients)
        .map(igKey => (
            <li key={igKey}>
                <span className="text-capitallize">{igKey}</span>: {props.ingredients[igKey]}
            </li>
        ));

    return (
        <Container>
            <h3>Your order</h3>
            <p>You delicius burger have the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>
                <strong>Total price: {props.price}</strong>
            </p>
            <Button size="sm" variant="danger" onClick={props.cancel} className="mr-2">Cancel</Button>
            <Button size="md" variant="success" onClick={props.continue}>Continue</Button>
        </Container>
    )
}

export default OrderSummary;