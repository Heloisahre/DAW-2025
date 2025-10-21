const value1 = true;
const value2 = false;

if (value1) {
    console.log('É verdadeiro');
}else {
    console.log('É falso');
}
//É verdadeiro
if (!value1) {
    console.log('É verdadeiro');
}else {
    console.log('É falso');
}
//É falso


//Thruty/Falsy --> Variaveis vazias ou com valor 0, se submeter 
// a um teste lógico, retornam false
const value3 = '';
if (value3) {
    console.log('É verdadeiro');
}else {
    console.log('É falso');
}
//É falso


//Operador ternário

(Logica) ? (entao) : (senao)
const resultado = value3 ? 'É verdadeiro' : 'É falso';
console.log(resultado);
//É falso