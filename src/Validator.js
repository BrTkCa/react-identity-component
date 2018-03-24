import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CPF, CNPJ, onPasteCPF, onPasteCNPJ} from './Mask';
import {validateCPF, validateCNPJ} from './Rules';
import {invalidateForm} from './handleErrors';

const RenderInput = (props) =>{
    const {
        type,
        classes,
        language,
        required
    } = props;
        
    return (
        <input 
            type="text"
            className={classes}
            required={required}
            language={language}
            coherence-type={type}
            onInput={props.onInput.bind(this)}
            onKeyPress={props.onKeyPress.bind(this)}
            onBlur={(element) => props.onBlur(element)} 
        />
    );
}

export default class Validator extends Component {
    constructor(props){
        super(props);
    }

    onBlur(element){
        const type = element.target.getAttribute('coherence-type');

        if (element.target.required){
            if (type === 'cpf'){
                if ( validateCPF(element.target.value) === true ){
                    invalidateForm(element);
                } else {
                    invalidateForm(element, element.target.getAttribute('language'), true, type);
                }
            } else if (type === 'cnpj'){
                if ( validateCNPJ(element.target.value) === true ){
                    invalidateForm(element);
                } else {
                    invalidateForm(element, element.target.getAttribute('language'), true, type);
                } 
            }
        } 
        else
            null;    
    }

    render(){
        if (this.props.type === 'cpf'){
            return (
                <RenderInput
                    {...this.props}
                    onInput={onPasteCPF}
                    onKeyPress={CPF}
                    onBlur={(element) => this.onBlur(element)} 
                />
            )
        } else if (this.props.type === 'cnpj'){
            return (
                <RenderInput
                    {...this.props}
                    onInput={onPasteCNPJ}
                    onKeyPress={CNPJ}
                    onBlur={(element) => this.onBlur(element)}
                />
            )
        }
    }
}

Validator.defaultProps = {
    type: 'cpf',
    language: 'en',
    required: true
}

Validator.propTypes = {
    type: PropTypes.oneOf(['cpf', 'cnpj']),
    language: PropTypes.oneOf(['en', 'pt-BR']),
    required: PropTypes.bool
}