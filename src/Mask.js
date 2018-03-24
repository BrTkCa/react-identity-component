'use strict';

export function CPF(event){
    let key = event.keyCode || event.which;
    const value = event.target.value;
    const regex = /[0-9]/;
    
    event.target.maxLength = 14;
    key = String.fromCharCode( key );

    if( !regex.test(key) ) {
        event.preventDefault();
    } else {
        if (value.match(/^\d{3}$/)){
            event.target.value += '.';
        } else if(value.match(/^(\d{3})\.(\d{3})$/)){
            event.target.value += '.';
        } else if(value.match(/^(\d{3})\.(\d{3})\.(\d{3})$/)){
            event.target.value += '-';
        }
    }
}

export function onPasteCPF(event){
    const value = event.target.value;
    const regex = /[0-9]/;
    
    event.target.maxLength = 14;

    if( !regex.test(value) ) {
        event.preventDefault();
    } else {
        event.target.value = event.target.value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
    }
}

export function CNPJ(event){
    let key = event.keyCode || event.which;
    const value = event.target.value;
    const regex = /[0-9]/;
    
    event.target.maxLength = 18;
    key = String.fromCharCode( key );

    if( !regex.test(key) ) {
        event.preventDefault();
    } else {
        if (value.match(/^\d{2}$/)){
            event.target.value += '.';
        } else if(value.match(/^(\d{2})\.(\d{3})$/)){
            event.target.value += '.';
        } else if(value.match(/^(\d{2})\.(\d{3})\.(\d{3})$/)){
            event.target.value += '/';
        } else if(value.match(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})$/)){
            event.target.value += '-';
        }
    }
}

export function onPasteCNPJ(event){
    const value = event.target.value;
    const regex = /[0-9]/;
    
    event.target.maxLength = 18;

    if( !regex.test(value) ) {
        event.preventDefault();
    } else {
        event.target.value = event.target.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
    }
}