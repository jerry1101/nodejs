// var config = require('./resource/config');
var config = require('./resource/config1.json');
var reports = config.reports;

for(var key in reports)
{
    console.log("index : ",key,"output : ",reports[key]);

};

// console.log(config.name);
// console.log(config.outputs.output[0]);