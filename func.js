function getnum(num1, num2) {
    return num1 + num2;
}
var mysum = function (num1, num2) {
    if (typeof num1 != 'number') {
        num1 = parseInt(num1);
    }
    else if (typeof num2 != 'number') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mysum('10', 3));
// optional arguments
var getname = function (first, second) {
    if (second == undefined) {
        return first;
    }
    return first + " " + second;
};
console.log(getname("m", "k"));
