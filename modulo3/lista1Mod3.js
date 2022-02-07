var a = 10;
(function() {
    var a = 15;
    window.x = function() {
        console.log(a);
    }
})();
x();