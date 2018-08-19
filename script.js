var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
$.ajax({
    url:"http://api.openweathermap.org/data/2.5/weather?q=London&appid=e57e7a5644160b5415f28669e1ce97bf&units=metric",
    url:"http://api.openweathermap.org/data/2.5/forecast?q=London&appid=e57e7a5644160b5415f28669e1ce97bf&units=metric",
    success: function(data){
        var d = new Date(data.dt); 
        console.log(data);
        document.querySelector(".day").innerHTML = days[d.getDay()*1000];        
        document.querySelector(".location").innerHTML = `${data.name} , ${data.sys.country}`;
        document.querySelector(".tempr").innerHTML = Math.round(data.main.temp);
        document.querySelector(".humidity").innerHTML = data.main.humidity;
        document.querySelector(".wspeed").innerHTML = data.wind.speed;
        document.querySelector(".direct").innerHTML = Math.round(data.main.temp);
    },
    error: function(error){
        console.log(error)
    }

})