import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import {
    Jumbotron,
    Card,
    Container,
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import {withRouter, Redirect} from 'react-router-dom';

import axios from '../../../axios.instance';
import errorHandler from '../../../hoc/errorHandler/errorHandler';
import * as dispatchTypes from '../../../store/actions/index';
import {checkValidity} from '../../../utility/validation';

import Spinner from '../../../components/UI/Spinner/Spinner';
import FormGroup from '../../../components/UI/Form/FormGroup/FormGroup';

const ContactData = props => {

    const [controls,
        setControls] = useState({
        name: {
            label: 'Name',
            config: {
                type: "text"
            },
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false
            }
        },

        email: {
            label: 'Email',
            config: {
                type: "email",
                info: "We'll never share your email with anyone else."
            },
            value: '',
            validation: {
                required: true,
                isValid: false,
                isEmail: true,
                error: '',
                touched: false
            }
        },

        zipCode: {
            label: 'Zip Code',
            config: {
                type: "text"
            },
            value: '',
            validation: {
                required: true,
                minLength: 5,
                maxLength: 5,
                isValid: false,
                error: '',
                touched: false
            }
        },

        street: {
            label: 'Street',
            config: {
                type: "text"
            },
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false
            }
        },

        country: {
            label: 'Country',
            config: {
                type: "text"
            },
            value: '',
            validation: {
                required: true,
                isValid: false,
                error: '',
                touched: false
            }
        },

        deliveryMethod: {
            label: 'Delivery Method',
            config: {
                as: "select",
                options: [
                    {
                        value: 'fastest',
                        display: 'Fastest'
                    }, {
                        value: 'cheapest',
                        display: 'Cheapest'
                    }
                ]
            },
            validation: {
                required: true,
                isValid: true,
                error: '',
                touched: false
            }
        }
    });
    const [validated,
        setValidated] = useState(false);

    useEffect(() => {
        props.onInitPurchase();
    }, []);

    const orderHandler = (e) => {
        e.preventDefault();

        if (validated) {
            const formData = {};

            for (let key in controls) {
                formData[key] = controls[key].value
            }

            const order = {
                userId: props.userId,
                ingredients: props.ingredients,
                totalPrice: + props.totalPrice,
                orderData: formData
            }

            props.onFetchPurchase(order, props.token);
        }
    }

    const inputChangeHandler = (key, event) => {
        const newForm = {
            ...controls
        };
        const {isValid, error} = checkValidity(event.target.value, controls[key]);
        newForm[key].value = event.target.value;
        newForm[key].validation.isValid = isValid;
        newForm[key].validation.error = error;
        newForm[key].validation.touched = true;

        let isFormValidated = true;
        for (let key in newForm) {
            if (!newForm[key].validation.isValid) {
                isFormValidated = false;
            }
        }

        setValidated(isFormValidated);
        setControls(newForm);
    }

    const form = [];
    for (let key in controls) {

        const config = {
            ...controls[key],
            name: key
        }
        const value = controls[key].value;
        const validation = {
            isValid: controls[key].validation.isValid,
            error: controls[key].validation.error,
            touched: controls[key].validation.touched
        }

        form.push((
            <FormGroup
                {...config}
                validation={validation}
                value={value}
                key={key}
                setValue={inputChangeHandler}></FormGroup>
        ))
    }

    return (
        <Container>
            {props.purchased
                ? <Redirect to="/"/>
                : null}
            <Jumbotron>
                {!props.loading
                    ? (
                        <Row>
                            <Col
                                lg={{
                                span: 6,
                                offset: 3
                            }}>
                                <h3 className="text-center">Enter your contact data</h3>
                                <Card>
                                    <Card.Body>
                                        <Form onSubmit={e => orderHandler(e)}>
                                            {form}
                                            <Button variant="primary" type="submit" disabled={!validated}>
                                                Submit
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    )
                    : (<Spinner/>)
}</Jumbotron>
        </Container>
    )
};

const mapStateWithProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        loading: state.purchase.loading,
        purchased: state.purchase.purchased,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPurchase: (order, token) => dispatch(dispatchTypes.purchase(order, token)),
        onInitPurchase: () => dispatch(dispatchTypes.purchase_init())
    }
}

export default connect(mapStateWithProps, mapDispatchToProps)(withRouter(errorHandler(ContactData, axios)));