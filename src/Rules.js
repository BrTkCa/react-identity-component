'use strict';

export function validateCPF(text){

    let cpf = text.replace(/\D+/g, ''), sum = 0, residual = 0;

    if (!cpf || new Set(cpf).size === 1){        
        return false;
    } 
    
	for (let i=1; i<=9; i++){
        sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
    } 
	residual = (sum * 10) % 11;
	
    if ((residual === 10) || (residual === 11)){
        residual = 0;
    }
    if (residual !== parseInt(cpf.substring(9, 10)) ){
        return false;
    }
	
	sum = 0;
    for (let i = 1; i <= 10; i++){
        sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    } 
    residual = (sum * 10) % 11;
	
    if ((residual === 10) || (residual === 11)){
        residual = 0;
    }

    if (residual !== parseInt(cpf.substring(10, 11) ) ) {
        return false;
    } else {
        return true;
    }
}

export function validateCNPJ(text){
    let cnpj = text.replace(/\D+/g, ''), size = 0, 
        numbers = 0, digits = 0, sum = 0, pos = 0, result = 0;
    
    if(cnpj.length !== 14 || new Set(cnpj).size === 1){
        return false;
    } 
        
    size = cnpj.length - 2;
    numbers = cnpj.substring(0,size);
    digits = cnpj.substring(size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    
    if (result != digits.charAt(0)){
        return false;
    }
         
    size = size + 1;
    numbers = cnpj.substring(0,size);
    sum = 0;
    pos = size - 7;
    for (let i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;

    if (result != digits.charAt(1)){
        return false;
    } else {
        return true;
    }
}