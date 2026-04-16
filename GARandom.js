//RANDOM FUNCTION BEGINS
var d = new Date();
var lastS = 0;
var s = d.getSeconds();

function randTest() {
  // s is the same as the lastS,
  // if we are still on the same second
  // then the new s becomes the result of the previous s
  let d = new Date();
  let lastS = 0;
  let s = d.getMilliseconds();

  if (lastS == s) {
      s = Math.sin(s) * 137.508;
  }

  let x = Math.sin(s) * 137.508;
  lastS = s;
  return x;
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
