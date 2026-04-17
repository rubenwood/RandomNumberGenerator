//RANDOM FUNCTION BEGINS
var d = new Date();
var lastS = 0;
var s = d.getSeconds();

function randTest() {
  let s = Date.now();
  let x = Math.sin(s) * 137.508;
  return x - Math.floor(x);
}
//RANDOM FUNCTION ENDS

// TESTING
var lastOutput = 0;
for (var i = 0; i < 10; i++) {
  var output = randTest();
  alert("OP: " + output);
  //alert("RT: " + randTest());

  if ((output == lastOutput) || (output == randTest())) {
    alert("SAME!!!");
  }

  lastOutput = output;
}
//TESTING ENDS
