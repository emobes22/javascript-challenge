//Select table body and assign it to a variable
var tbody = d3.select("tbody");
var ufodata = data
//Loop through each UFO object and append data to table on website
function buildtable(ufodata){
  ufodata.forEach(function(UFO) {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key, value]) {
  var cell = row.append("td");
  cell.text(value);
});
});}


//---------------------------------------------------------------//
//object.addEventListener(event, function)

//Create variable for form that references form id
var form = d3.select("#formid")

//Create variable for button that references button id
var btn = d3.select('#buttonid');

//Creates event listner when form is submitted/enter is typed
btn.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  //Get the value property of the input element
  var inputValue = inputElement.property("value");

  var filteredData = data.filter(instance => instance.datetime === inputValue);

  console.log(filteredData);

  //Select table body so when you filter, it changes the table body
  var list = d3.select("tbody");

  // clear out the previous values in html that will changed based on filter criteria
  list.html("");

  // append stats to the list
  //tbody.append("li").text(filteredData)
  buildtable(filteredData)
}

//Call the buildtable function as a default when the page loads
buildtable(ufodata)