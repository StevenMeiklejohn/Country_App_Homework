var countries = [];

window.onload = function(){
  var url = "https://restcountries.eu/rest/v1";
  // define API location
  var request = new XMLHttpRequest();
  // constructor. New XMLHttpRequest

  // console.log(request);
  request.open("GET", url);
  // GET data from API
  request.onload = function() {
    if(request.status === 200){
      console.log("got the data");
      console.log(request.responseText);
      // when request.onload is true (i.e. the request completes, run the function which prints out a message dependant on the result.)

      var jsonString = request.responseText;
      // define returned data as a variable
      countries = JSON.parse(jsonString);
      // parse the returned data from JSON to JS.
      var country = countries[0];
      console.log(country);
      console.log(country.name);
      // Define what page displays.
    }
  }


  request.send(null);
}
  // acually send/initiate the request.
