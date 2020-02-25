import { request } from './requestHelper';
import './index.scss';

const title = document.getElementById('title');

title.innerText = 'Pelis de Mario';

// Aqui le decimos que busque peliculas que tengan el nombre Mario
const cantidad = prompt('cantidad a convertir');
const desde = prompt('desde que moneda/criptomoneda');
const hacia = prompt('a que moneda/criptomoneda');
const url = `https://bravenewcoin-v1.p.rapidapi.com/convert?qty=${cantidad}&from=${desde}&to=${hacia}`;

//La funcion request recibe 2 parametros, la url y el callback
request(url, function(response) {
    // response es la variable que devuelve el archivo requestHelper en la linea 13
    //const content = document.getElementById('resultado');
    //content.innerHTML = '';

    // como response estipo string, tenemos que hacer JSON.parse para convertirlo en objeto y poder trabajar
    JSON.parse(response);
    alert(response);
});