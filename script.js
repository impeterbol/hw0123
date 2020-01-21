
$(document).ready(function () {

    var cities =[]

    // using moment to get current time and format it to 
    const curDate = moment().format('MMMM Do YYYY');
    console.log(curDate);
    $(".curDate").append(curDate);

 


    // Get value on button click and show alert
    $("#submitBtn").click(function () {
            // asking user for a city name
            var cityName = $("#nameInput").val();
            if (cityName == "") {
                alert("please enter the city")
            }

            else {
                cities.push(cityName);

                localStorage.setItem("name", JSON.stringify(cities));
                var storedCities = JSON.parse(localStorage.getItem("name"))
    
                $("#cityName").text(storedCities);

                var APIKey = "000a4bf7937f19571d8379dba047c801";
                var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=" + APIKey;


                $.ajax({
                            url: queryURL,
                            method: "GET"
                        }).then(function (response) {
                            console.log(response);
                            var temp = $('.temp');
                            temp.html(response.list[0].main.temp)
                            var humidity = $('.humidity');
                            var wind = $(".wind");
                            var uvInd = $(".uvInd");

                        });
            }
            

           
    
        // else {

        //     //API key. Add your own API key between the ""
        //     var APIKey = "000a4bf7937f19571d8379dba047c801";
        //     // gettign answer via query url
        //     
        //     $.ajax({
        //         url: queryURL,
        //         method: "GET"
        //     }).then(function (response) {

        //         console.log(response);
        //         var temp = $('.temp');
        //         var humidity = $('.humidity');
        //         var wind = $(".wind");
        //         var uvInd = $(".uvInd");

        //         temp.html(response.main.temp);


        //         for (var i = 0; i < response.list.length; i++) {
        //             const temp = response.list[i].main.temp;

        //             const humidity = response.list[i].main.humidity;
        //             const wind = esponse.list[i].main.wind;

                            
                            
                              

        // }


    });

});