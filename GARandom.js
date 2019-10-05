//RANDOM FUNCTION BEGINS
var d = new Date();
var lastS = 0;
var s = d.getSeconds();

function randTest() {
  // s is the same as the lastS,
  // if we are still on the same second
  // then the new s becomes the result of the previous s
  if (lastS == s) {
    s = Math.sin(s) * 137.508;
  }

  //Randomness happens here
  var x = Math.sin(s) * 137.508;

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
    alert("SAME!!!SAME!!!SAME!!!SAME!!!SAME!!!");
  }

  lastOutput = output;
}
//TESTING ENDS
