'use strict';

const langs = {
    en: {
        cpf: "CPF is invalid",
        cnpj: "CNPJ is invalid" 
    },
    'pt-BR': {
        cpf: "CPF inválido",
        cnpj: "CNPJ inválido"
    }
}

const FAIL_COLOR = 'RGBA(255,0,0,0.8)';

export function invalidateForm(event, language, color, type){
    event.target.setCustomValidity(language ?
        langs[language][type] : '');

    color ? 
        event.target.style.borderColor = FAIL_COLOR 
        :  event.target.style.borderColor = '' ;
}