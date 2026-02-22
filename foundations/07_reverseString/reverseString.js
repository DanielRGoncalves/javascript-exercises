const reverseString = (string) => {
    
    let resultado = "";
    for (let i = string.length - 1; i >= 0; i--) {
       resultado = resultado + string[i];
    }
    return resultado;
};

// Do not edit below this line
module.exports = reverseString;
console.log(reverseString('hello there'));