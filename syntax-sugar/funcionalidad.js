//spread operador
/*let arreglo = [1, 2, 3];
let arreglo2 = [4, 5, 6];
const arreglofinal = [...arreglo, ...arreglo2]// para juntar los dos elementos
//const arreglofinal= arreglo.concat(arreglo2);// para juntar los dos const
//console.log("arreglo final ", arreglofinal);

/*let arreglo3 = arreglo;
arreglo3.push("numeros")// si quiero agregar un numero mas 
console.log(arreglo3);*/

/*arreglo4 = [...arreglo]
arreglo4.push(10);
console.log(arreglo4);*/

//Destructuring
/*const numeros = [5, 4]
const [num1, num2] = numeros;
console.log(numeros);*/

const {nombre,apellido,edad} = user;

function ObtenerValores(){
    console.log("edad: ", edad);
}
ObtenerValores(user)