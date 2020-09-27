
//Console log JSON samples data
var samples = "samples.json";

d3.json(samples).then(function(data) {


// Use D3 to create an event handler
d3.selectAll("body").on("change", updatePage);

function updatePage() {

  var dropdownMenu = d3.names("#selDataset");

  var dropdownMenuID = dropdownMenu.names;
  
  var selectedOption = dropdownMenu.names;

  console.log(dropdownMenuID);
  console.log(selectedOption);
}

function buildBarChart (samples) {
    var samples = "samples.json"
}

console.log(data.samples[0].otu_ids);
var xaxis = data.samples.otu_ids;
var yaxis = data.sample_values;

 
// Create the Trace
var trace1 = {
  x: xaxis ,
  y: yaxis,
  type: "bar"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "10 Most Common OTUs",
 };

// Plot the bar chart"
Plotly.newPlot("bar", data, layout);
    console.log(data);
});

