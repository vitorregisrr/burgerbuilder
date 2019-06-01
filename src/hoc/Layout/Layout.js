import React from 'react'
import {connect} from 'react-redux';
import {Container} from 'react-bootstrap';

import Aux from '../Auxiliary';
import Navigation from '../../components/UI/Navigation/Navigation';

const Layout = props => {
    return (
        <Aux>
            <Navigation isAuth={props.isAuth}/>
            <main>
                <Container className="pt-4">
                    {props.children}
                </Container>
            </main>
        </Aux>
    )

}

const mapStateToProps = store => {
    return {
        isAuth: store.auth.token
            ? true
            : false
    }
}

export default connect(mapStateToProps)(Layout);