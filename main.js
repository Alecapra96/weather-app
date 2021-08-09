let array = [];
let arrayForecast = [];
const url =`https://ws.smn.gob.ar/map_items/weather`
const urlForecast ="https://ws.smn.gob.ar/forecast/"

let idCity = "609de837818e15902c7513f6"
const $cityName = document.querySelector("#city-name");
const $actualTemp = document.querySelector("#actual-temp");
const $description = document.querySelector("#description");
const $wind = document.querySelector("#wind");
const $st = document.querySelector("#st");
const $humidity = document.querySelector("#humidity");
const $visibility = document.querySelector("#visibility");
let reach = 0;



fetch(url)
    .then(response => response.json())
        .then(data => {
            console.log(data);
            array = data;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if (element._id === idCity){
                    let idForecast = element.lid;
                    console.log(element.lid) // con esto puedo buscar en https://ws.smn.gob.ar/forecast/ el pronostico extendido
                     reach = 1;
                    console.log("Entre")
                    chargeInfo(element);
                    console.log(idCity)
                    fetchForecast(idForecast);
                }
            }
            if (reach === 0){
                $actualTemp.textContent = "cargando..."

                location.reload();

            }
          
        });   

function chargeInfo(element){
    console.log("Felicidades , encontraste la ciudad de idCity")
                    $cityName.textContent = element.name +" ," + element.province; 
                    $actualTemp.textContent = element.weather.tempDesc
                    $description.textContent = element.weather.description
                    $wind.textContent ="La velocidad del viento es de " +element.weather.wind_speed + " Km/h , Direccion " + element.weather.wing_deg
                    $humidity.textContent = "La humedad es de "+ element.weather.humidity + " %"
                    $visibility.textContent = "La visibilidad es de "+ element.weather.visibility + " Kilometros."
                    if (element.weather.st != null){
                        $st.textContent = "La sensacion termica es de "+element.weather.st + " C°"
                    }
}

function fetchForecast(idForecast){
    fetch(urlForecast)
    .then(response => response.json())
        .then(data => {
            console.log(data)
            array = data;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if(element.location_id === idForecast){
                    console.log(element)
                    console.log("adentro")
                    reach = 2;
                    let keys = Object.keys(element.forecast);
                    console.log(keys)
                    for (let index = 0; index < keys.length; index++) {
                        let clave = keys[index];
                        console.log(keys[clave].date);
                    }
                }
            }
            if (reach != 2){
                $actualTemp.textContent = "cargando..."
                location.reload();
            }
        })
}