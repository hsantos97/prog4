// A
var a = 12;
(function() {
console.log(a);
})();

// B
var a = 5;
(function() {
var a = 12;
console.log(a);
})();

// C
var a = 10;
var x = (function() {
var a = 12;
return (function() {
console.log(a);
});
})();
x();

// D
var a = 10;
var x = (function() {
var y = function() {
var a = 12;
};
return function() {
console.log(a);
}
})();
x();

// E
var a = 10;
var x = (function() {
(function() {
a = 12;
})();
return (function() {
console.log(a);
});
})();
x();

// F
var a = 10;
(function() {
    var a = 15;
    window.x = function() {
        console.log(a);
    }
})();
x();
