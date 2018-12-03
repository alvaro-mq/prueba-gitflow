const sumar = (a,b) => {
  const suma = a + b; 
  console.log(`${a}+${b}=${suma}`);
  return suma;
};

const multiplicar = (a,b) => {
  const resultado = a * b;
  console.log(`${a}*${b}=${resultado}`);
  return resultado;
}

sumar(4,5);
multiplicar(4,5);
