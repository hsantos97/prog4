var message = "in global";
console.log("global: message = " + message);

var a = function () {
  message = "inside a";
  console.log("a: message = " + message);

  function b () {
    var message = "inside b";

  }

  b();

}

a();
console.log("global: message2 = " + message);

