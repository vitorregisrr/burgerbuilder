import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {NavLink} from 'react-router-dom';
import {NavItem} from 'react-bootstrap';
import Navigation from './Navigation';

configure({adapter: new Adapter()});

describe('<Navigation/>', () => {

    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<Navigation/>);
    })

    it('should render two <NavItem> if not authenticated', () => {
        expect(wrapper.find(NavItem)).toHaveLength(2);
    })

    it('should render four <NavItem> if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.find(NavItem)).toHaveLength(4);
    })

    it('should render <NavLink to="logout"/> if authenticated', () => {
        wrapper.setProps({isAuth: true});
        expect(wrapper.find(NavItem).contains(
            <NavLink to="/logout" className="nav-link">Logout</NavLink>
        )).toEqual(true);
    })
})