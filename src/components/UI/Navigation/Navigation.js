import React from 'react'
import {Navbar, Nav, Container, NavItem} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Burger Builder</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavItem>
                            <NavLink exact to="/build" className="nav-link">Burger Builder</NavLink>
                        </NavItem>
                        {props.isAuth
                            ? <NavItem>
                                    <NavLink exact to="/orders" className="nav-link">Orders</NavLink>
                                </NavItem>
                            : null}
                            
                        {props.isAuth
                            ? <NavItem>
                                    <NavLink to="/checkout" className="nav-link">Checkout</NavLink>
                                </NavItem>
                            : null}

                        {props.isAuth
                            ? <NavItem>
                                    <NavLink to="/logout" className="nav-link">Logout</NavLink>
                                </NavItem>
                            : null}

                        {!props.isAuth
                            ? <NavItem>
                                    <NavLink to="/auth" className="nav-link">Auth</NavLink>
                                </NavItem>
                            : null}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
