const repeatString = function(string, num) {
  if (num < 0) {
    return 'ERROR';
  }

  let resultado = ''; 

  for (let i = 0; i < num; i++) {
    resultado = resultado + string; 
  }

  return resultado; 
};

// Teste rápido para você ver no terminal
console.log(repeatString('hey', 3));
// Do not edit below this line
module.exports = repeatString;
