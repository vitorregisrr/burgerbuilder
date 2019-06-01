import React, {Component} from 'react'
import propTypes from 'prop-types';

import classes from './Modal.module.scss';
import './CSSTransitions.css';

import {CSSTransition} from 'react-transition-group';
import Backdrop from '../../UI/Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <React.Fragment>
                <CSSTransition in={this.props.show} mountOnEnter unmountOnExit timeout={300} classNames='fade-bump' >
                    <div className={classes.Modal}>
                        {this.props.children}
                    </div>
                </CSSTransition>
                <Backdrop show={this.props.show} hide={this.props.dismiss}></Backdrop>
            </React.Fragment>
        )
    }
}

Modal.propTypes = {
    show: propTypes.bool.isRequired,

    dismiss: propTypes.func.isRequired
}

export default Modal;