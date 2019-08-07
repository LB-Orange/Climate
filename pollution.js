//console.log("Hello")

const USPS = require('usps-webtools');

const usps = new USPS({
  server: 'http://production.shippingapis.com/ShippingAPI.dll',
  userId: '852SELF06429',
  ttl: 10000  });

  //will create  a call back function, in the case of this code,
  //originally we will type a zipcode and it will return a city and State
  //with call back will return city and state not nexessarily in order
  //but function calls city and state

let zipInput = document.getElementById('Zip');

let outputP = document.getElementById('output');

let cityInput = document.getElementById("city");

let stateInput = document.getElementById("state");


zipInput.onkeyup = function () {
  outputP.innerText = this.value.length; //in javascript length is a property of a strong
  if(this.value.length == 5){
    usps.cityStateLookup(this.value,    // do not have to put in this.value.length becayse here we do not want the literal length of the what we put in.
          function (err, result){      //By putting in this.value, the computer knows to look at the literal value,not the length
            cityInput.value = result.city;
            stateInput.value = result.state;
            //console.log(result);
          });
  }
};

var map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([37.41, 8.82]),
      zoom: 4
    })
  });
