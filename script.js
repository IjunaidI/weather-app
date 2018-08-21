// Note i know this code can be improved but due to some internet and electricity issues area i had
//several hours to complete this project so i did my best.
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function getWheather(){
    let input = document.querySelector("#search").value;
    document.querySelector(".container").style.display = "block";
    document.querySelector(".none").style.display = "none";

$.ajax({
    url:`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=e57e7a5644160b5415f28669e1ce97bf&units=metric`,
    
    success: function(data){
        var d = new Date(data.dt*1000); 
        console.log(data);
        document.querySelector(".day").innerHTML = days[d.getDay()];        
        document.querySelector(".location").innerHTML = `${data.name} , ${data.sys.country}`;
        document.querySelector(".tempr").innerHTML = Math.round(data.main.temp);
        document.querySelector(".humidity").innerHTML = " " + data.main.humidity;
        document.querySelector(".wspeed").innerHTML = " " + data.wind.speed;
        document.querySelector(".direct").innerHTML = " " + Math.round(data.wind.deg);
        weatherType = data.weather[0].icon;
        if(weatherType =="01d" || weatherType == "01n"){
            document.querySelector(".weatherIcon").src = "images/icons/clear.svg";
        }
        else if(weatherType =="02d" || weatherType == "02n"){
            document.querySelector(".weatherIcon").src = "images/icons/few-clouds.svg";
        }
        else if(weatherType == "03d" || weatherType == "03n"){
            document.querySelector(".weatherIcon").src = "images/icons/cloudy.svg";
        }
        else if(weatherType == "04d" || weatherType == "04n"){
            document.querySelector(".weatherIcon").src = "images/icons/brokken.svg";
        }
        else if(weatherType == "09d" || weatherType == "09n"){
            document.querySelector(".weatherIcon").src = "images/icons/shower-rain.svg";
        }
        else if(weatherType == "10d" || weatherType == "010n"){
            document.querySelector(".weatherIcon").src = "images/icons/rain.svg";
        }
        else if(weatherType == "11d" || weatherType == "11n"){
            document.querySelector(".weatherIcon").src = "images/icons/thunder.svg";
        }
        else if(weatherType == "13d" || weatherType == "13n"){
            document.querySelector(".weatherIcon").src = "images/icons/snow.svg";
        }
        else if(weatherType == "50d" || weatherType == "50n"){
            document.querySelector(".weatherIcon").src = "images/icons/mist.svg";
        }
    },
    error: function(error){
        console.log(error)
    }

})
$.ajax({
    
    url:`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=e57e7a5644160b5415f28669e1ce97bf&units=metric`,
    success: function(data){
        var d1 = new Date(data.list[0].dt*1000); 
        var d2 = new Date(data.list[8].dt*1000); 
        var d3 = new Date(data.list[16].dt*1000); 
        var d4 = new Date(data.list[24].dt*1000); 
        var d5 = new Date(data.list[32].dt*1000); 
        //DAYS
        document.querySelector(".day1").innerHTML = days[d1.getDay()]; 
        document.querySelector(".day2").innerHTML = days[d2.getDay()];        
        document.querySelector(".day3").innerHTML = days[d3.getDay()];        
        document.querySelector(".day4").innerHTML = days[d4.getDay()];  
        document.querySelector(".day5").innerHTML = days[d5.getDay()]; 
        //DATE MONTH/DATE  
        document.querySelector(".date1").innerHTML = `${months[d1.getMonth()]} ${d1.getDate()}`;        
        document.querySelector(".date2").innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}` ;        
        document.querySelector(".date3").innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;        
        document.querySelector(".date4").innerHTML = `${months[d4.getMonth()]} ${d4.getDate()}`;        
        document.querySelector(".date5").innerHTML = `${months[d5.getMonth()]} ${d5.getDate()}`;        
        //Temprature
        document.querySelector(".temp1").innerHTML = Math.round(data.list[0].main.temp) + " C°";        
        document.querySelector(".temp2").innerHTML = Math.round(data.list[5].main.temp) + " C°";          
        document.querySelector(".temp3").innerHTML = Math.round(data.list[13].main.temp) + " C°";         
        document.querySelector(".temp4").innerHTML = Math.round(data.list[21].main.temp) + " C°";         
        document.querySelector(".temp5").innerHTML = Math.round(data.list[29].main.temp) + " C°";         
        //Weather Description
        document.querySelector(".desc0").innerHTML = data.list[0].weather[0].description;        
        document.querySelector(".desc1").innerHTML = data.list[8].weather[0].description;          
        document.querySelector(".desc2").innerHTML = data.list[16].weather[0].description;         
        document.querySelector(".desc3").innerHTML = data.list[24].weather[0].description;         
        document.querySelector(".desc4").innerHTML = data.list[32].weather[0].description;     
        //DAY 1
        forecastType1 = data.list[0].weather[0].icon;
        if(forecastType1 == "01d" || forecastType1 == "01n"){
            document.querySelector(".weatherIcon1").src = "images/icons/clear.svg";
        }
        else if(forecastType1 == "02d" || forecastType1 == "02n"){
            document.querySelector(".weatherIcon1").src = "images/icons/few-clouds.svg";
        }
        else if(forecastType1 == "03d" || forecastType1 == "03n"){
            document.querySelector(".weatherIcon1").src = "images/icons/cloudy.svg";
        }
        else if(forecastType1 == "04d" || forecastType1 == "04n"){
            document.querySelector(".weatherIcon1").src = "images/icons/brokken.svg";
        }
        else if(forecastType1 == "09d" || forecastType1 == "09n"){
            document.querySelector(".weatherIcon1").src = "images/icons/shower-rain.svg";
        }
        else if(forecastType1 == "10d" || forecastType1 == "10n"){
            document.querySelector(".weatherIcon1").src = "images/icons/rain.svg";
        }
        else if(forecastType1 == "11d" || forecastType1 == "11n"){
            document.querySelector(".weatherIcon1").src = "images/icons/thunder.svg";
        }
        else if(forecastType1 == "13d" || forecastType1 == "13n"){
            document.querySelector(".weatherIcon1").src = "images/icons/snow.svg";
        }
        else if(forecastType1 == "50d" || forecastType1 == "50n"){
            document.querySelector(".weatherIcon1").src = "images/icons/mist.svg";
        }
        //DAY 2
        forecastType2 = data.list[8].weather[0].icon;
       
        if(forecastType2 == "01d" || forecastType2 == "01n"){
            document.querySelector(".weatherIcon2").src = "images/icons/clear.svg";
        }
        else if(forecastType2 == "02d" || forecastType2 == "02n"){
            document.querySelector(".weatherIcon2").src = "images/icons/few-clouds.svg";
        }
        else if(forecastType2 == "03d" || forecastType2 == "03n"){
            document.querySelector(".weatherIcon2").src = "images/icons/cloudy.svg";
        }
        else if(forecastType2 == "04d" || forecastType2 == "04n"){
            document.querySelector(".weatherIcon2").src = "images/icons/brokken.svg";
        }
        else if(forecastType2 == "09d" || forecastType2 == "09n"){
            document.querySelector(".weatherIcon2").src = "images/icons/shower-rain.svg";
        }
        else if(forecastType2 == "10d" || forecastType2 == "10n"){
            document.querySelector(".weatherIcon2").src = "images/icons/rain.svg";
        }
        else if(forecastType2 == "11d" || forecastType2 == "11n"){
            document.querySelector(".weatherIcon2").src = "images/icons/thunder.svg";
        }
        else if(forecastType2 == "13d" || forecastType2 == "13n"){
            document.querySelector(".weatherIcon2").src = "images/icons/snow.svg";
        }
        else if(forecastType2 == "50d" || forecastType2 == "50n"){
            document.querySelector(".weatherIcon2").src = "images/icons/mist.svg";
        }
        //DAY 3
        forecastType3 = data.list[16].weather[0].icon;
        if(forecastType3 == "01d" || forecastType3 == "01n"){
            document.querySelector(".weatherIcon3").src = "images/icons/clear.svg";
        }
        else if(forecastType3 == "02d" || forecastType3 == "02n"){
            document.querySelector(".weatherIcon3").src = "images/icons/few-clouds.svg";
        }
        else if(forecastType3 == "03d" || forecastType3 == "03n"){
            document.querySelector(".weatherIcon3").src = "images/icons/cloudy.svg";
        }
        else if(forecastType3 == "04d" || forecastType3 == "04n"){
            document.querySelector(".weatherIcon3").src = "images/icons/brokken.svg";
        }
        else if(forecastType3 == "09d" || forecastType3 == "09n"){
            document.querySelector(".weatherIcon3").src = "images/icons/shower-rain.svg";
        }
        else if(forecastType3 == "10d" || forecastType3 == "10n"){
            document.querySelector(".weatherIcon3").src = "images/icons/rain.svg";
        }
        else if(forecastType3 == "11d" || forecastType3 == "11n"){
            document.querySelector(".weatherIcon3").src = "images/icons/thunder.svg";
        }
        else if(forecastType3 == "13d" || forecastType3 == "13n"){
            document.querySelector(".weatherIcon3").src = "images/icons/snow.svg";
        }
        else if(forecastType3 == "50d" || forecastType3 == "50n"){
            document.querySelector(".weatherIcon3").src = "images/icons/mist.svg";
        }
        //DAY 4
        forecastType4 = data.list[24].weather[0].icon;        
        if(forecastType4 == "01d" || forecastType4 == "01n"){
            document.querySelector(".weatherIcon4").src = "images/icons/clear.svg";
        }
        else if(forecastType4 == "02d" || forecastType4 == "02n"){
            document.querySelector(".weatherIcon4").src = "images/icons/few-clouds.svg";
        }
        else if(forecastType4 == "03d" || forecastType4 == "03n"){
            document.querySelector(".weatherIcon4").src = "images/icons/cloudy.svg";
        }
        else if(forecastType4 == "04d" || forecastType4 == "04n"){
            document.querySelector(".weatherIcon4").src = "images/icons/brokken.svg";
        }
        else if(forecastType4 == "09d" || forecastType4 == "09n"){
            document.querySelector(".weatherIcon4").src = "images/icons/shower-rain.svg";
        }
        else if(forecastType4 == "10d" || forecastType4 == "10n"){
            document.querySelector(".weatherIcon4").src = "images/icons/rain.svg";
        }
        else if(forecastType4 == "11d" || forecastType4 == "11n"){
            document.querySelector(".weatherIcon4").src = "images/icons/thunder.svg";
        }
        else if(forecastType4 == "13d" || forecastType4 == "13n"){
            document.querySelector(".weatherIcon4").src = "images/icons/snow.svg";
        }
        else if(forecastType4 == "50d" || forecastType4 == "50n"){
            document.querySelector(".weatherIcon4").src = "images/icons/mist.svg";
        }
        //DAY 5
        forecastType5 = data.list[32].weather[0].icon;        
        if(forecastType5 == "01d" || forecastType5 == "01n"){
            document.querySelector(".weatherIcon5").src = "images/icons/clear.svg";
        }
        else if(forecastType5 == "02d" || forecastType5 == "02n"){
            document.querySelector(".weatherIcon5").src = "images/icons/few-clouds.svg";
        }
        else if(forecastType5 == "03d" || forecastType5 == "03n"){
            document.querySelector(".weatherIcon5").src = "images/icons/cloudy.svg";
        }
        else if(forecastType5 == "04d" || forecastType5 == "04n"){
            document.querySelector(".weatherIcon5").src = "images/icons/brokken.svg";
        }
        else if(forecastType5 == "09d" || forecastType5 == "09n"){
            document.querySelector(".weatherIcon5").src = "images/icons/shower-rain.svg";
        }
        else if(forecastType5 == "10d" || forecastType5 == "10n"){
            document.querySelector(".weatherIcon5").src = "images/icons/rain.svg";
        }
        else if(forecastType5 == "11d" || forecastType5 == "11n"){
            document.querySelector(".weatherIcon5").src = "images/icons/thunder.svg";
        }
        else if(forecastType5 == "13d" || forecastType5 == "13n"){
            document.querySelector(".weatherIcon5").src = "images/icons/snow.svg";
        }
        else if(forecastType5 == "50d" || forecastType5 == "50n"){
            document.querySelector(".weatherIcon5").src = "images/icons/mist.svg";
        }
    },
    error: function(error){
        console.log(error)
    }

})

}
