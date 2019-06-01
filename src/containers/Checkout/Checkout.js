import React from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary';
import {Route, Redirect, withRouter} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';

const Checkout = props => {

    const cancelCheckout = () => {
        props
            .history
            .goBack()
    }

    const continueCheckout = () => {
        props
            .history
            .replace('/checkout/contact-data')
    }

    return (
        <React.Fragment>
            {props.ingredients
                ? (
                    <React.Fragment>
                        <Route path={props.match.path + '/contact-data'} component={ContactData}/>
                        <CheckoutSummary
                            totalPrice={props.totalPrice}
                            ingredients={props.ingredients}
                            cancelCheckout={cancelCheckout}
                            continueCheckout={continueCheckout}/></React.Fragment>
                )
                : (<Redirect to="/build"/>)
    }
        </React.Fragment>
    )

}

const mapStateToProps = state => {
    return {totalPrice: state.burger.totalPrice, ingredients: state.burger.ingredients}
}

export default connect(mapStateToProps)(withRouter(Checkout));