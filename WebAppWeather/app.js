
let cityName = document.getElementById("cityName");
const cityTemp = document.getElementById("cityTemp");
const weatherIcon = document.getElementById("cityIcon");
const minTemp = document.getElementById("min");
const maxTemp = document.getElementById("max");
const sensacion = document.getElementById("sensacion");
const humedad = document.getElementById("humedad");
const formInput = document.getElementById("form");    
const SearchInput = document.getElementById("search");



const getWeather = async (city)  => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=69a98cea33d11d79e58b77a88ca3a546&units=metric&lang=sp`)
    const data = await res.json()
    .then(data => {

        const minTempR = Math.round(data.main.temp_min);
        const maxTempR = Math.round(data.main.temp_max);
        const sensTempR = Math.round(data.main.feels_like);
        const principalTempR = Math.round(data.main.temp);

        cityName.textContent = data.name;
         cityTemp.textContent=`${principalTempR}º`;
         minTemp.textContent=`Min ${minTempR}º`;
         maxTemp.textContent=`Max ${maxTempR}º`;
        sensacion.textContent=`${sensTempR}º`;
         humedad.textContent=`${data.main.humidity}%`;
    })
     
}


formInput.addEventListener("click", e => {
     e.preventDefault()
     getWeather(SearchInput.value)

})








// --------------------------------------------------------

// 
//     let cityUser = SearchInput.value

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityUser}&appid=69a98cea33d11d79e58b77a88ca3a546&units=metric&lang=sp`)
//     .then((respuesta)=> respuesta.json())
//     .then(data => {   

//          cityName.textContent = data.name;
//          cityTemp.textContent=`${data.main.temp}º`
//          minTemp.textContent=`Min ${data.main.temp_min}º`
//          maxTemp.textContent=`Max ${data.main.temp_max}º`
//          sensacion.textContent=`${data.main.feels_like}º`
//          humedad.textContent=`${data.main.humidity}%`
//         })
// )

 window.onload = () => {
     getWeather("Hermosillo")
 }


        
    




