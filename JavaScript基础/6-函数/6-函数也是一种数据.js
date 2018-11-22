
// 函数也是一种数据, 亦可以当成一种数据进行定义和使用, 但是不是很常用

/**
 * 函数实际上也是一种数据，我们可以把一个函数赋值给一个变量，在通过变量访问函数。
 */

function mySum(num1, num2) {
    return num1 + num2;
}

//将函数赋值给变量
var sum = mySum;

//通过变量执行函数
var a = sum(1,2);
console.log("a = " + a);
