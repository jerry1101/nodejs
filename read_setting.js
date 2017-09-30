var config = require('./resource/config');

var outputs = config.outputs;

for(var key in outputs)
{
    console.log("index : ",key,"output : ",outputs[key]);

};

// console.log(config.name);
// console.log(config.outputs.output[0]);