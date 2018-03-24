import React from 'react';
import {configure,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Validator from '../Validator';

configure({ adapter: new Adapter() });

describe('Validator', () => {
    let props,
        mountedValidator;

    const validator = () => {
        if (!mountedValidator){
            mountedValidator = mount(
                <Validator {...props} />
            );
        }
        return mountedValidator;
    };
    
    beforeEach(() => {
        props = {
            type: undefined,
            required: undefined,
            language: undefined,
            classes: undefined
        }
    });

    it('always renders an input', () => {
        const input = validator().find('input');
        expect(input.length).toBeGreaterThan(0);
    });
    
})