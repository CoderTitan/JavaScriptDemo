
// 数字和查看类型操作符typeof

//定义了一个名为num的变量
var num;

//打印变量num的值
console.log(num);

//打印变量的数据类型
//查看类型操作符typeof
console.log(typeof num);


console.log('--------进制数--------')
//八进制数字
//八进制数以0开头
num1 = 0377;
//打印出的是八进制0377的十进制形式
console.log(num1);

//十六进制数字
//十六进制数以0x开头
num1 = 0xff;
//打印出的是十六进制0xff的十进制形式
console.log(num1);



console.log('------特殊值------')
//Infinity：特殊值，代表的是超出js处理范围的数值，但它依然是一个数字。
num1 = 1e308;
console.log(num1);

//超出表示范围
num1 = 1e309;
console.log(num1);

//任何数除以0结果为Infinity
console.log(10 / 0);
//Infinity与其他任何操作数执行任何算术运算的结果也是Infinity
console.log(num1 * 2);


//正负Infinity相加的结果？
//结果为NaN
console.log(Infinity + (-Infinity));
//NaN：表示不是数字，但事实上它依然属于数字类型，只不过是一种特殊的数字罢了
console.log(typeof NaN);

//如果我们在算术运算中使用了不恰当的操作数，导致运算失败，就会得到NaN
console.log(10 * 'f');
//NaN具有传染性，只要算术运算中存在一个NaN，整个运算就会失败
console.log(1 + 2 + NaN);


