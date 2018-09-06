
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getWheather() {
    let input = document.querySelector("#search").value;
    document.querySelector(".container").style.display = "block";
    document.querySelector(".none").style.display = "none";
    //Main Weather
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=e57e7a5644160b5415f28669e1ce97bf&units=metric`,
        success: function (data) {
            var d = new Date(data.dt * 1000);
            document.querySelector(".day").innerHTML = days[d.getDay()];
            document.querySelector(".location").innerHTML = `${data.name} , ${data.sys.country}`;
            document.querySelector(".tempr").innerHTML = Math.round(data.main.temp) + "C°";
            document.querySelector(".humidity").innerHTML = " " + data.main.humidity;
            document.querySelector(".wspeed").innerHTML = " " + data.wind.speed;
            document.querySelector(".direct").innerHTML = " " + Math.round(data.wind.deg);
            document.querySelector(".weatherIcon").src = `images/icons/${data.weather[0].icon}.svg`;
        },
        error: function (error) {
            alert("City not Found");
        }
    })

    //Forecast
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=e57e7a5644160b5415f28669e1ce97bf&units=metric`,
        success: function (data) {
            for (let i = 0; i < 5; i++) {
                const index = i  * 8;
                var d = new Date(data.list[index].dt * 1000);
                document.querySelector(`.day${i}`).innerHTML = days[d.getDay()];
                document.querySelector(`.date${i}`).innerHTML = `${months[d.getMonth()]} ${d.getDate()}`;
                //Temprature
                document.querySelector(`.temp${i}`).innerHTML = Math.round(data.list[index].main.temp) + " C°";
                //Weather Description
                document.querySelector(`.desc${i}`).innerHTML = data.list[index].weather[0].description;
                //Forecast
                document.querySelector(`.weatherIcon${i}`).src = `images/icons/${data.list[index].weather[0].icon}.svg`;
            }
        },
        error: function (error) {
            console.log(error)
        }
    })
}
