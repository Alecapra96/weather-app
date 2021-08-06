let array = [];
let url =`https://ws.smn.gob.ar/map_items/weather`
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
                     reach = 1;
                    console.log("Entre")
                    chargeInfo(element);
                }
            }
            if (reach === 0){

                location.reload();

            }
          
        });   

function chargeInfo(element){
    console.log("Felicidades , encontraste la ciudad de idCity")
                    $cityName.textContent = element.name +" ," + element.province; 
                    $actualTemp.textContent = element.weather.tempDesc
                    $description.textContent = element.weather.description
                    $wind.textContent =element.weather.wind_speed + " Km/h , Direccion " + element.weather.wing_deg
                    $humidity.textContent = "La humedad es de "+ element.weather.humidity + " g/m3"
                    $visibility.textContent = "La visibilidad es de "+ element.weather.visibility + " Kilometros."
                    if (element.weather.st != null){
                        $st.textContent = element.weather.st
                    }
}

       