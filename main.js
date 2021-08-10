let array = [];


const url =`https://ws.smn.gob.ar/map_items/weather`
let idCity = "609de837818e15902c7513f6"
const $cityName = document.querySelector("#city-name");
const $actualTemp = document.querySelector("#actual-temp");
const $description = document.querySelector("#description");
const $wind = document.querySelector("#wind");
const $st = document.querySelector("#st");
const $humidity = document.querySelector("#humidity");
const $visibility = document.querySelector("#visibility");
const $date = document.querySelector("#date");
const  $pressure = document.querySelector("#pressure")
let reach = 0;
let date;
let months;

fetch(url)
    .then(response => response.json())
        .then(data => {
            console.log(data);
            changeBackground(months)
            array = data;
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if (element._id === idCity){
                    // let idForecast = element.lid;
                    console.log(element.lid) // con esto puedo buscar en https://ws.smn.gob.ar/forecast/ el pronostico extendido
                     reach = 1;
                    console.log("Entre")
                    chargeInfo(element);
                    console.log(idCity)
                    // fetchForecast(idForecast);
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
                    $date.textContent = date
                    $actualTemp.textContent = element.weather.tempDesc
                    $description.textContent = element.weather.description
                    $wind.textContent ="Viento  " + element.weather.wing_deg + " a " + element.weather.wind_speed + " Km/h " 
                    $humidity.textContent = "Humedad:  "+ element.weather.humidity + " %"
                    $visibility.textContent = "Visibilidad: "+ element.weather.visibility + " km."
                    $pressure.textContent = "Presion: " + element.weather.pressure+" hPa"

                    if (element.weather.st != null){
                        $st.textContent = "Sensacion termica: "+element.weather.st + " C°"
                    }
}


function changeBackground(months){
    if (months === 11 || months === 12 || months === 1 || months === 2 ){
        console.log("verano")
        if (hours > "06:30" && hours < "21:00" ){
            //Poner wallpaper verano de dia 
        }else{
            //poner wallpaper verano de noche
        }
    }
    else if (months === 3 || months === 4 || months === 5  ){
        console.log("otoño")
        if (hours > "06:30" && hours < "21:00" ){
            //Poner wallpaper verano de dia 
        }else{
            //poner wallpaper verano de noche
        }
    }
    else if (months === 6 || months === 7 ){
        console.log("invierno")
        if (hours > "06:30" && hours < "21:00" ){
            //Poner wallpaper verano de dia 
        }else{
            //poner wallpaper verano de noche
        }
    }
    else if (months === 8 || months === 9 || months === 10 ){
        console.log("primavera")
        if (hours > "06:30" && hours < "21:00" ){
            //Poner wallpaper verano de dia 
        }else{
            //poner wallpaper verano de noche
        }
    }

}
function dateTime(){
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var f=new Date();
date = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear()
console.log(date);
return date;
}
dateTime();
