
// 其它基本类型转换成Number类型

/** Number()
 * 功能：将其他类型数据转成Number类型数据
*/

//1、Null-->Number
console.log(Number(null));//0

//2、Undefined-->Number
console.log(Number(undefined));//NaN

//3、Boolean-->Number
console.log(Number(true));//1
console.log(Number(false));//0

//4、String-->Number
//如果字符串中只有数字、小数点、(最前面空格 正负号)则转换成对应的十进制数
console.log(Number("123"));//123
console.log(Number("12.3"));//12.3
console.log(Number("+123"));//123
console.log(Number("-123"));//-123
console.log(Number("   123"));//123

//如果是一个空字符串，结果是0
console.log(Number(""));//0
console.log(Number("   "));//0

//如果字符串中含有非数字，非正负号，转换失败，结果NaN
console.log(Number("123abc"));//NaN
console.log(Number("123+456"));//NaN
console.log(Number("abc"));//NaN


/** parseInt()
 * 功能：会试图将其收到的任何输入值(通常是字符串）转成整数类型，如果转换失败就返回NaN。
 * 转换规则：如果第一个非空白字符(空格、换行、tab)是数字或者正负号则开始转换，直到碰到第一个非数字字符停止转换。如果第一个非空白字符不是数字或者正负号，转换失败，结果是NaN.
 * */
console.log('-----parseInt------')
console.log(parseInt("123"));//123
console.log(parseInt("+123"));//123
console.log(parseInt("-123"));//-123
console.log(parseInt("  123"));//123
console.log(parseInt("12a3"));//12
console.log(parseInt("12.3"));//12
console.log(parseInt("12 3"));//12
//NaN
console.log(parseInt("true"));
console.log(parseInt("  .123"));
console.log(parseInt("+-123"));



/** parseFloat()
 * 功能：会试图将其收到的任何输入值(通常是字符串）转成浮点数类型，如果转换失败就返回NaN。
 * */
console.log('-----parseFloat------')
console.log( parseFloat("   2.5a") );//2.5
console.log( parseFloat("  .56") ); //0.56
console.log( parseFloat("  -.23")); //- 0.23
console.log( parseFloat("   +.23 + .1") );//0.23
console.log( parseFloat("  3.14.956") ); //3.14
console.log( parseFloat("a3.14") ); //NaN
