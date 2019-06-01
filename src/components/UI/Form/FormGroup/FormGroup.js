import React from 'react';

import {Form} from 'react-bootstrap';

const FormGroup = props => {
    const options = [];

    if (props.config.as === 'select') {
        props
            .config
            .options
            .forEach(option => {
                options.push(
                    <option key={option.value} value={option.value}>
                        {option.display}
                    </option>
                )
            });
    }

    return (
        <Form.Group controlId={props.name + 'Group'}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                {...props.config}
                isInvalid={props.validation.touched && !props.validation.isValid}
                isValid={props.validation.touched && props.validation.isValid}
                value={props.defaultValue}
                name={props.name}
                placeholder={"Enter your " + props.label}
                onChange={(e) => props.setValue(props.name, e)}>

                {props.config.as === 'select'
                    ? options
                    : null}
            </Form.Control>
            
            <Form.Control.Feedback type="invalid">
                {props.validation.error
                    ? props.validation.error
                    : 'Please enter a valid ' + props.label}
            </Form.Control.Feedback>

            <Form.Control.Feedback >
                Looks good.
            </Form.Control.Feedback>

        </Form.Group>
    )
}

export default FormGroup;