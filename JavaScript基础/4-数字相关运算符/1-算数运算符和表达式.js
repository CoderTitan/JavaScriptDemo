
// 算数运算符和算数运算表达式

/**
 * 表达式：由变量、常量和运算符组成的式子称为表达式
 * 如何阅读表达式？
 * 1、阅读表达式的功能
 * 2、阅读表达式的值
 */


/**
 * 算数运算符：+  -  *  /  %(取余)
 *
 * 算数运算表达式
 * 功能：进行符号对象的算数运算，不会修改变量的值
 * 值：相关算数运算的结果
 */


//1、Number + Number  直接数学运算
var num1 = 10;
var num2 = 20;
console.log(num1 + num2);
//1.任何数与NaN进行运算结果都是NaN;
//2.Infinity+(-Infinity) = NaN;


//2、Boolean/Undefined/Null + Number
//先转换成Number类型，然后进行算术运算
console.log(num1 + null);


//3、String+(Number/Boolean/Undefined/Null)
//+相当于是字符串的拼接符
console.log("str" + num1);