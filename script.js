  var cityName = document.getElementById("city")
var button = document.getElementById("Submit")
var name = document.querySelector(".name")
var desc = document.querySelector(".desc")
var temp = document.querySelector('.temp')


button.addEventListener("click", function(event){
    event.preventDefault 
function cityWeather(city){

// console.log(cityName)  
var APIKey = '66284989bad03649628f5e8d0376f58e';
var API = 'https://api.openweathermap.org/data/2.5/weather?q='+ cityName.value +'&units=imperial&appid='+APIKey;

$.ajax({
    url:API,
    method:"GET",
   
    
    
    

})
    



        .then(function(response){
            console.log(response);

        })
        
        .then(function(){
            // var lat = 
            // console.log()
            // var oneCallAPI ='https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&exclude={part}&appid='+APIKey
    }); 
}
cityWeather()   

   
})

// var API = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


