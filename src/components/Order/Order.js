import React from 'react'
import {Card, Col, ListGroup, ListGroupItem} from 'react-bootstrap';

const order = props => {

    const ingredients = [];

    for (let key in props.ingredients) {
        ingredients.push(
            <ListGroupItem key={key}>
                <span className="text-capitalize">{key}</span>:
                <strong> {props.ingredients[key]}</strong>
            </ListGroupItem>
        );
    }

    return (
        <Col md="6" sm="12">
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>{props.id}</Card.Title>
                    <Card.Text>Price:
                        <strong>USD {props
                                .totalPrice
                                .toFixed(2)}</strong>
                    </Card.Text>
                    <Card.Text>Costumer:
                        <strong>{props.name}</strong>
                    </Card.Text>
                    <Card.Text>Street:
                        <strong>{props.street}</strong>
                    </Card.Text>
                    <Card.Text>Postal Code:
                        <strong>{props.postalCode}</strong>
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {ingredients}
                </ListGroup>
            </Card>
        </Col>
    )
}

export default order;