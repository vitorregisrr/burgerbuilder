import React, {Component} from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Alert} from 'react-bootstrap';

import * as dispatchActions from '../../store/actions/index';
import { checkValidity } from '../../utility/validation';

import FormGroup from '../../components/UI/Form/FormGroup/FormGroup';
import Spinner from '../../components/UI/Spinner/Spinner';

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Form,
    Jumbotron
} from 'react-bootstrap';

class Auth extends Component {
    state = {
        controls: {
            email: {
                label: 'Email',
                config: {
                    type: "text"
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                    isValid: false,
                    error: '',
                    touched: false
                }
            },

            password: {
                label: 'Password',
                config: {
                    type: "password"
                },
                value: '',
                validation: {
                    required: true,
                    isValid: false,
                    minLength: 7,
                    error: '',
                    touched: false
                }
            }

        },

        method: 'SIGN'
    }

    inputChangeHandler = (key, event) => {
        const newForm = {
            ...this.state.controls
        };
        const {isValid, error} = checkValidity(event.target.value, this.state.controls[key]);
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

        this.setState({controls: newForm, validated: isFormValidated});
    }

    authHandler = (e) => {
        e.preventDefault();

        if (this.state.validated) {
            this
                .props
                .onSubmitLogin(this.state.controls.email.value, this.state.controls.password.value, this.state.method)
        }
    }

    switchMethodHandler(method) {
        this.setState({method})
    }

    render() {

        const form = [];

        for (let key in this.state.controls) {
            const config = {
                ...this.state.controls[key],
                name: key
            }
            const value = this.state.controls[key].value;
            const validation = {
                isValid: this.state.controls[key].validation.isValid,
                error: this.state.controls[key].validation.error,
                touched: this.state.controls[key].validation.touched
            }
            form.push((
                <FormGroup
                    {...config}
                    validation={validation}
                    value={value}
                    key={key}
                    setValue={this.inputChangeHandler}></FormGroup>
            ))
        }

        return (
            <Container>
                {this.props.isAuth
                    ? <Redirect to={this.props.loginRedirectPath}/>
                    : null}
                <Jumbotron>
                    {!this.props.loading
                        ? (
                            <Row>
                                <Col
                                    lg={{
                                    span: 6,
                                    offset: 3
                                }}>
                                    <h3 className="text-center display-3">Auth</h3>
                                    <Card>
                                        <Card.Body>
                                            {this.props.error
                                                ? <Alert dismissible variant="danger">
                                                        <p>{this.props.error.message}</p>
                                                    </Alert>
                                                : null}
                                            <Form onSubmit={e => this.authHandler(e)}>
                                                {form}
                                                <Button
                                                    variant="primary"
                                                    size="md"
                                                    type="submit"
                                                    disabled={!this.state.validated}
                                                    onClick={() => this.switchMethodHandler('SIGN')}>
                                                    SIGN
                                                </Button>
                                                <Button
                                                    variant="secondary"
                                                    className="ml-2"
                                                    size="sm"
                                                    type="submit"
                                                    disabled={!this.state.validated}
                                                    onClick={() => this.switchMethodHandler('SIGNUP')}>
                                                    SIGN UP
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
    }
}

const mapStoreToProps = store => {
    return {
        loading: store.auth.loading,
        error: store.auth.error,
        isAuth: store.auth.token
            ? true
            : false,
        loginRedirectPath: store.auth.redirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmitLogin: (email, password, method) => dispatch(dispatchActions.auth(email, password, method))
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Auth);