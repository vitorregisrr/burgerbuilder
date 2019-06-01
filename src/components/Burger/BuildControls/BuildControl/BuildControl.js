import React from 'react'
import {Button} from 'react-bootstrap';

const BuildControl = (props) => {
    return (
        <div className="d-flex justify-content-center flex-column p-3">
            <h4 className="text-center">{props.label}</h4>
            <div className="d-flex justify-content-center">
                <Button size="sm" variant="primary" className="mr-2" onClick={props.add}>+</Button>
                <Button size="sm" variant="primary"  onClick={props.remove} disabled={props.disabled} >-</Button>
            </div>
        </div>
    );
}

export default BuildControl;