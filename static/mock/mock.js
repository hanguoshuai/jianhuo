
var center = require('./center.json')
var center1 = require('./center1.json')

let indexdata = require('./indexData.json');
module.exports=function(){
  return {
    'indexdata':indexdata,
     'center': center,
    'center1': center1
  }
}


