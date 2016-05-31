function expr(f, sign) {
    return function() {
        var parentArgs = [];
        for (var i = 0; i < arguments.length; ++i) {
            parentArgs[i] = arguments[i];
        }
        this.evaluate = function(x, y, z) {
            var args = [];
            parentArgs.forEach(function(element) {
                args.push(element.evaluate(x, y, z));
            });
            var olol = f.apply(this, args)
            console.log(this.toString() + " " + olol + " " + x + " " + y + " " + z);
            return olol;
        }

        this.toString = function () {
            var res = "";
            parentArgs.forEach(function (element) {
                res += element.toString() + " ";
            })
            return res + sign;
        }
    }
}

var Add = expr(function(a, b) {
    return a + b;
}, "+");

var Multiply = expr(function(a, b) {
    return a * b;
}, "*");

var Divide = expr(function(a, b) {
    return a / b;
}, "/");

var Subtract = expr(function(a, b) {
    return a - b;
}, "-");

var Const = function (val) {
    this.evaluate = function(){
        return val;
    }

    this.toString = function () {
        return val.toString();
    }
}



var Variable = function (type) {
    this.evaluate = function (x, y, z) {
        if (type === "x")
            return x;
        if (type === "y")
            return y;
        return z;
    }

    this.toString = function() {
        return type;
    }
}

var Negate = expr(function (x) {
    return -x;
}, "negate");

var Sin = expr(Math.sin, "sin");

var Cos = expr(Math.cos, "cos");
// var expr = new Cos(new Multiply(new Sin(new Multiply(new Multiply(new Subtract(new Add(new Multiply(new Const(543234497),new Variable('z')),new Multiply(new Const(-1780810098),new Variable('y'))),new Divide(new Divide(new Variable('x'),new Divide(new Variable('y'),new Variable('y'))),new Divide(new Const(-196005095),new Variable('y')))),new Const(490877817)),new Cos(new Variable('x')))),new Divide(new Variable('y'),new Subtract(new Variable('y'),new Variable('x')))));
// console.log(expr.toString());
// console.log(expr.evaluate(0.49414677875518040000, 0.92395530552400210000, 0.73328612551950370000));
var expr = new Cos(new Multiply(new Sin(new Multiply(new Multiply(new Subtract(new Add(new Multiply(new Const(543234497),new Variable('x')),new Multiply(new Const(-1780810098),new Variable('y'))),new Divide(new Divide(new Variable('x'),new Divide(new Variable('y'),new Variable('y'))),new Divide(new Const(-196005095),new Variable('y')))),new Const(490877817)),new Cos(new Variable('x')))),new Divide(new Variable('y'),new Subtract(new Variable('y'),new Variable('x')))));
console.log(expr.toString());
console.log(expr.evaluate(0.49414677875518040000, 0.92395530552400210000, 0.73328612551950370000));
// Expected -0.487615029700, found 0.497328934829