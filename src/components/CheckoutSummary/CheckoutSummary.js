import React from 'react';
import {Button, Container, Jumbotron, Card} from 'react-bootstrap';
import Burger from '../Burger/Burger';
import { withRouter } from 'react-router-dom';
 
const CheckoutSummary = props => {
    return (
        <Container>
            <Jumbotron>
                <h3 className="text-center">We hope it tastes well!</h3>
                <Card style={{
                    transform: 'scale(0.7)'
                }}>
                    <Card.Body>
                        <Card.Title className="text-center">Your Burger</Card.Title>
                        <Burger ingredients={props.ingredients}/>
                    </Card.Body>
                </Card>
                <div className="text-center">
                    <p>
                        <strong>Total price: {props.totalPrice}</strong>
                    </p>
                    <Button size="sm" variant="danger" onClick={props.cancelCheckout} className="mr-2">Cancel</Button>
                    <Button size="md" variant="success" onClick={props.continueCheckout}>Continue</Button>
                </div>
            </Jumbotron>
        </Container>
    )
}

export default withRouter(CheckoutSummary);