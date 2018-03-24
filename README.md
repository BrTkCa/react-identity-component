<h1 align="center">ReactJS identity component</h1>
<h3 align="center"><b>ReactJS identity component</b> is a straightforward component to validate and apply a mask on input element that represents civil rights identity in React</h3>

# About
Live preview

This component generates an input that applies a mask and validates the value if required. The validation is based on mathematical rules, without third-party libraries or online verification.

# Getting started
The first step is to install the component. if you are using Yarn:

    yarn add react-identity-component

Or if you are using NPM:

    npm i react-identity-component --save

## Implementation

It's only necessary to import the component and use it:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import {Validator} from 'react-ids-validator';

    ReactDOM.render((
        <Validator
            type="cpf"
            required={true}
            language="pt-BR"
            classes="input"
        />
    ), document.getElementById('root'));

## Props

| Prop  | Options | Description
| ------------- | ------------- | -------------
| type  | cpf, cnpj  | The type of input that the mask will apply
| required  | true, false  | If true the input will be validated based on rules
| language  | en, 'pt-BR'  | The language for the messaging
| classes  | *  | It's possible indicating CSS classes that will be applied on the rendered input

## Validation

When the *prop* required is indicated the component will validate the value inputted. Validations can include mathematical rules and, if the value inputted is valid the form can be submitted, if not the input will be red-bordered and show a message. You can try it on live preview!