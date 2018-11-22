

// 匿名函数
// 通过这种方式定义的函数被称为匿名函数(即没有名字的函数)，特别上当它不被赋值给变量单独使用时

var fun = function (name) {
    console.log('name = ' + name)
}

fun('titan')



// 有两种优雅的用法。
//1、可以将匿名函数作为参数传递给其他函数
//2、定义匿名函数完成某些一次性任务

unction fun(num1, num2, fc) {
    return fc(num1, num2);
}
var num = fun(1,2,function(a,b){
    return a + b;
});
console.log("num = " + num);
