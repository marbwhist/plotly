
//Console log JSON samples data
var samples = "data/samples.json";

d3.json(samples).then(function(data) {
    console.log(data);
});

