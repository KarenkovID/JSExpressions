var binaryFunction = function(bin) {
    return function (f, g) {
        return function (x, y, z) {
            return bin(f(x, y, z), g(x, y, z));
        }
    }
}

var unaryFunction = function(un) {
    return function (f) {
        return function (x, y, z) {
            return un(f(x, y, z));
        }
    }
}

var add = binaryFunction(
    function (a, b) {
        return a + b;
    }
)

var subtract = binaryFunction(
    function(a, b) {
        return a - b;
    }
)

var multiply = binaryFunction(
    function (a, b) {
        return a * b;
    }
);

var divide = binaryFunction(
    function(a, b) {
        return a / b;
    }
)

var cnst = function(x) {
    return function() {
        return x;
    }
}
var vari = ['x', 'y', 'z']
var variable = function (arg) {
    
    return function(x, y, z) {
        return arguments[vari.indexOf(arg)];
    }
}

var mod = binaryFunction(
    function (x, y) {
        return x % y
    }
);

var power = binaryFunction(Math.pow);

var negate = unaryFunction(function (x) {
    return -x
});

var abs = unaryFunction(Math.abs);

var log = unaryFunction(Math.log);
