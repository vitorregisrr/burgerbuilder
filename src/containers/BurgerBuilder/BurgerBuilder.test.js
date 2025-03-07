import React from 'react'

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {

    let wrapper = shallow(<BurgerBuilder  onInitIngredients={ () => {}}  />);
    beforeEach( () => {

    });

    it('should have <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ ingredients: {salad: 0}})
        expect(wrapper.find(BuildControls)).toHaveLength(1)
    })
})