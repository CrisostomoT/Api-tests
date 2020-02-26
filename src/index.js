import { request } from './requestHelper';
import './index.scss';


const cantidad = prompt('quantity') //document.querySelector('#quantity').value;
const desde = prompt('from') //document.querySelector('#fromCurrency').value;
const hacia = prompt('to') //document.querySelector('#toCurrency').value;
const url = `https://bravenewcoin-v1.p.rapidapi.com/convert?qty=${cantidad}&from=${desde}&to=${hacia}`;

//La funcion request recibe 2 parametros, la url y el callback
request(url, function(response) {
    // response es la variable que devuelve el archivo requestHelper en la linea 13
    //const content = document.getElementById('resultado');
    //content.innerHTML = '';

    // como response estipo string, tenemos que hacer JSON.parse para convertirlo en objeto y poder trabajar
    let datos = JSON.parse(response);
    datos.innerHTML = '';
});