![Coverage Badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/brtkca/7e8518effa060c374ddaeba872f5a0d5/raw/react-identity-component__heads_master.json)


<h1 align="center">ReactJS identity component</h1>
<h3 align="center"><b>ReactJS identity component</b> is a straightforward component to validate and apply a mask on input element that represents civil rights identity in React</h3>

<p align="center">
	<a href="https://travis-ci.org/luccascosta/react-identity-component">
		<img src="https://api.travis-ci.org/luccascosta/react-identity-component.svg?branch=master" />
	</a>
</p>

# About

[Live preview](https://luccascosta.github.io/react-identity-component/)

[Live demo and source code](https://jsfiddle.net/lbclucascosta/h2tjprsp/)

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
    import {Validator} from 'react-identity-component';

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

When the *prop* required is indicated the component will validate the value inputted. Validations can include mathematical rules and, if the value inputted is valid the form can be submitted, if not the input will be red-bordered and show a message. You can try it on live demo!

## LICENSE

MIT License

Copyright (c) 2018 Lucas Costa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.