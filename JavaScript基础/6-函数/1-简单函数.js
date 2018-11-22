
/**
 * 认识函数：在一个完整的项目中，某些功能会被反复使用。那么会将某段代码封装成函数，当我们要使用功能的时候直接调用函数即可。
 * 注意：函数是对功能的封装
 * 优点：
 * 1、简化代码结构，增加代码的复用度(重复使用的程度)
 * 2、如果想修改或调试某一功能时，只需修改对应的函数即可
 */



/**
 * 函数概述(函数的声明)：
 * function 函数名(参数列表) {
 *     语句
 *     return 表达式;
 * }
 * 1、function：是函数的关键词
 * 2、函数名：遵循标识符的规则
 * 3、()：参数列表的开始和结束
 * 4、参数列表：函数从函数的调用者获得的信息，可以没有参数
 * 5、{}：函数体的开始和结束
 * 6、语句：函数封装的功能
 * 7、return 表达式：return一般用于结束函数，并返回给函数的调用者一些信息，"表达式"即为要返回的数据。如果一个函数没有显示的返回return子句，我们就默认它的返回值为undefined。
 *
 * 注意：在仅仅只声明之后是不会被执行的，只是说明有了一个能完成该功能的函数，还没有被使用
 *
 */


/**
 * 函数在声明之后就可以被使用了
 *
 * 函数的调用：函数名(参数列表);
 * 函数名：即要使用某个功能函数的名字
 * 参数列表：函数的调用者给函数传递的信息
 */


//函数的调用，可以写在函数声明之前或之后
myConsole();


//函数的声明
function myConsole() {
    console.log("https://www.titanjun.top");
}


//函数的调用
myConsole();
