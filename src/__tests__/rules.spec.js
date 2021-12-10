import React from 'react';
import {validateCPF, validateCNPJ} from '../Rules';

describe('Rules', () => {

    // CPF
    it('cpf needs be valid', () => {
        const value = '226.365.981-11';
        expect(validateCPF(value)).toBe(true);
    });

    it('cpf needs be invalid', () => {
        const value = '226.365.981-12';
        expect(validateCPF(value)).toBe(false);
    });

    it('incomplete cpf needs be invalid', () => {
        const value = '226.365.981';
        expect(validateCPF(value)).toBe(false);
    });

    // // CNPJ
    // it('cnpj needs be valid', () => {
    //     const value = '60.645.441/0001-72';
    //     expect(validateCNPJ(value)).toBe(true);
    // });

    // it('cnpj needs be invalid', () => {
    //     const value = '60.645.441/0001-71';
    //     expect(validateCNPJ(value)).toBe(false);
    // });

    // it('incomplete cnpj needs be invalid', () => {
    //     const value = '60.645.441/0001';
    //     expect(validateCNPJ(value)).toBe(false);
    // });

});