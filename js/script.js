
var btcusd;

var btceur;

var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d6145ff725aa5e9d592b4644c2ed399191603549207");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};



document.querySelector('button').addEventListener('click',function(){
  fetch("https://api.cryptonator.com/api/ticker/btc-usd", requestOptions)
  .then(response => response.text())
  .then(result => {
    btcusd = JSON.parse(result);
    document.getElementById('usd').innerHTML =parseInt(btcusd.ticker.price).toFixed(2) + " BTC/USD";
  })
  .catch(error => console.log('error', error));
  fetch("https://api.cryptonator.com/api/ticker/btc-eur", requestOptions)
  .then(response => response.text())
  .then(result => {
    btceur = JSON.parse(result);
    document.getElementById('eur').innerHTML =parseInt(btceur.ticker.price).toFixed(2) + " BTC/EUR";

  })
  .catch(error => console.log('error', error));
})
