import React from 'react'
import propTypes from 'prop-types';

import classes from './Backdrop.module.scss';
import './CSSTransitions.css'

import {CSSTransition} from 'react-transition-group';

const backdrop = props => {
    return (
        <CSSTransition
            in={props.show}
            timeout={400}
            unmountOnExit
            mountOnEnter
            classNames='backdrop'>
            <div className={classes.Backdrop} onClick={props.hide}></div>
        </CSSTransition>
    );
}

backdrop.propTypes = {
    hide: propTypes.func.isRequired
};

export default backdrop;