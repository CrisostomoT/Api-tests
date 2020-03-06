import './index.scss';


document.querySelector('#convert').addEventListener("click", function btnConvert() {
    const cantidad = document.querySelector('#quantity').value;
    const desde = document.querySelector('#fromCurrency').value;
    const hacia = document.querySelector('#toCurrency').value;
    const url = `https://bravenewcoin-v1.p.rapidapi.com/convert?qty=${cantidad}&from=${desde}&to=${hacia}`;
    const output = document.querySelector('#currencyOutput');
    fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
                "x-rapidapi-key": "5318ddcf82msha503012fa24ea57p1e9fe9jsne71607a35fd0"
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            output.innerHTML += `
      <div class="card">
      <div class="card-body">
        <h2>${data.to_quantity}</h2>
      </div>
      </div>
    `
        });
});