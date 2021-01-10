window.addEventListener("load", ()=>{
 
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".temperature");
    let temperatureSpan = document.querySelector(".temperature span");
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy="https://cors-anywhere.herokuapp.com/"
            var api=`${proxy}https://api.openweathermap.org/data/2.5/weather?lon=${long}&lat=${lat}&appid=29261066e4cb7f098ea26c534e20790b`
            console.log(api);
            fetch(api).then(response=>{
                return response.json();
            }).then(data=>{
                 console.log(data);
                 const{main,sys}=data;
              
                 //set Dom Elements from the api;
                 temperatureDegree.textContent=main.temp;
                 temperatureTimezone.textContent=sys.country;
                 temperatureDescription.textContent=data.weather[0].description;

                 //FORMULAR FOR CELSIUS
                 var celsius = ((main.temp) - 32) * (5 / 9);
                 //setIcon
                 setIcons( document.querySelector(".icon"));
                 //change temperature to Celsius/Farenheit
                
                 temperatureSection.addEventListener("click",()=>{

                    if(temperatureSpan.textContent=== "F"){
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius);
                    }
                    else{
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent=main.temp;
                    }

                 });





            });
        });
    }
function setIcons( iconID){
    var skycons = new Skycons ({color:"pink"});
  skycons.add(iconID,Skycons.RAIN);
    skycons.play();
    

}

});