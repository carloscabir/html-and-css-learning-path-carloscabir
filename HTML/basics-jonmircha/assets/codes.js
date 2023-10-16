/* alert("Hola, 'invocar' codigo JS en HTML"); */

const potencia = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
      resultado *= base;
    }
    return console.log(resultado);
  };
  potencia(4, 2);


  const cuadrado = x => console.log(x * x);
  cuadrado(8);