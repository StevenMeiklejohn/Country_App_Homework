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
      populate_country_list(countries);
      // Define what page displays.
    }
  }


  request.send(null);
}


function populate_country_list(countries){
  var selectBox = document.getElementById('drop_down');
  for (var i = 0; i < countries.length; i++) {
    countries[i]
    var list_entry = document.createElement('option');
    list_entry.text = countries[i].name;
    list_entry.value = i;
    selectBox.appendChild(list_entry);
    selectBox.onchange = handleClick;

  }
}

var handleClick = function(){
  console.log("Option Selected")
  var selectBox = document.getElementById('drop_down');
  console.log("val:",selectBox.value)
  var selected = document.getElementById('drop_down').value;
  var selected_i = parseInt(selected, 10);

  var name = countries[selected_i].name;
  console.log('selected:', typeof selected_i);
  console.log(name);
  displayResults_n(name);

  var population = countries[selected_i].population;
  console.log(population);
  displayResults_p(population);

  var capital = countries[selected_i].capital;
  console.log(capital);
  displayResults_c(capital);
}

  
var displayResults_n = function(name) {
  var li = document.createElement('li');
  li.innerText = name;

  var ul = document.getElementById('p_name');
  ul.appendChild(li);
}

var displayResults_p = function(name) {
  var li = document.createElement('li');
  li.innerText = name;

  var ul = document.getElementById('p_pop');
  ul.appendChild(li);
}

var displayResults_c = function(name) {
  var li = document.createElement('li');
  li.innerText = name;

  var ul = document.getElementById('p_cap');
  ul.appendChild(li);
}






  // var selected_name = document.getElementById('drop_down').name;
  // console.log('selected_name', selected_name);
  // console.log(countries.name);
  // var display =document.getElementById('display_result');
  // display.innerText = selected;




