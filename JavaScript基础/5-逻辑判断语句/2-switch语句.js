
/**
 * 格式：
 * switch (表达式)
 * {
 *     case 表达式1:
 *         语句1
 *     case 表达式2:
 *         语句2
 *     ……
 *     case 表达式n:
 *         语句n
 *     default
 *         语句d
 * }
 * 注意：最后的default可有可无
 *
 * 逻辑：当程序执行到switch语句时，首先计算表达式的值，表达式的值能匹配到哪个case后的表达式那么就跳到那个case处继续向下执行。没有匹配的case表达式，且最后有个default，那么会执行语句d。
 *
 */

var num = 2;


//只执行对应标号处的语句？？
//可以使用break语句
//break语句：专门用来跳出switch语句和循环语句
switch (num)
{
    case 1:
        console.log("****1");
        break;
    case 2:
        console.log("****2");
        break;
    case 3:
        console.log("****3");
        break;
    case undefined:
        console.log("****4");
        break;
    case Infinity:
        console.log("****5");
        break;
    case NaN: //NaN疯狂起来连自己都不认识
        console.log("****6");
        break;
    default:
        console.log("****d");

}

num = 2;
switch (num)
{
    case 1+1:
        console.log("****a");
        break;
    case "1":
        console.log("****b");
        break;
    case "2":
        console.log("****c");
        break;
    default:
        console.log("****e");

}