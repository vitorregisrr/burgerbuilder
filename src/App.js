import React, {Component, Suspense} from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import * as dispatchActions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import Spinner from './components/UI/Spinner/Spinner';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
const Orders = React.lazy(() => import ('./containers/Orders/Orders'));
const Checkout = React.lazy(() => import ('./containers/Checkout/Checkout'));
const Auth = React.lazy(() => import ('./containers/Auth/Auth'));
const Logout = React.lazy(() => import ('./containers/Auth/Logout/Logout'));

class App extends Component {
    componentDidMount() {
        this
            .props
            .onCheckAuth();
    }

    render() {
        return (
            <BrowserRouter basename="/">
                <Layout>
                    <Switch>
                        <Route exact path="/build" component={BurgerBuilder}/>
                        <Redirect exact from="/" to="/build"/> 
                        
                        {this.props.isAuth
                            ? <Route path="/checkout" render={() => <Suspense fallback={<Spinner/>}><Checkout/></Suspense>}/>
                            : null}

                        {this.props.isAuth
                            ? <Route path="/orders" render={() => <Suspense fallback={<Spinner/>}><Orders/></Suspense>}/>
                            : null}

                        <Route path="/logout" component={() => <Suspense fallback={<Spinner/>}><Logout/></Suspense>}/>
                        <Route path="/auth" component={() => <Suspense fallback={<Spinner/>}><Auth/></Suspense>}/>

                        <Route
                            from="/"
                            render={() => (
                            <h3 className="text-center">Page not found! (404)</h3>
                        )}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = store => {
    return {
        isAuth: store.auth.token
            ? true
            : false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckAuth: () => dispatch(dispatchActions.check_auth_state())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
