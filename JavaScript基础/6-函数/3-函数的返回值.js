

// 函数的返回值
// 函数使用return返回结果

//函数声明
function mySum(num1, num2) {
    var sum = num1 + num2;
    return sum;//将结果返回给函数的调用者
}

//函数调用
var ret = mySum(1,2);
console.log("ret = " + ret);

