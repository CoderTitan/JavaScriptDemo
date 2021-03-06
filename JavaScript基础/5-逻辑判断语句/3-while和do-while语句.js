

/** while语句
 * 格式：
 * while (表达式) {
 *     语句
 * }
 *
 * 逻辑：当程序执行到while语句时，首先计算"表达式"的值。如果"表达式"的值为假，跳过整个while语句继续向下执行。如果"表达式"的值为真，那么执行大括号中的语句。执行完语句，再去计算"表达式"的值。如果"表达式"的值为假，跳过整个while语句继续向下执行。如果"表达式"的值依然为真，执行语句。执行完语句，再去"计算表"达式的值。如此循环往复，知道"表达式"的值为假才停止。
 *
 *
 */

    //1+2+……+10的和
var num = 1;
var sum = 0;

while (num <= 10) {
    sum += num;
    num++;
}

console.log("sum = " + sum);




/** do-while语句
 * 格式：
 * do
 * {
 *     语句
 * } while (表达式)
 *
 * 逻辑：当程序执行到do-while语句时，首先执行一次“语句”，执行完语句再去计算表达式的值。如果表达式的值为假，则跳过整个do-while语句继续向下执行。如果表达式的值为真，则执行“语句”。执行完语句，再计算表达式的值。如此循环往复，直到表达式的值为假才停止。
 *
 * do-while语句与while语句的区别：
 * do-while语句中的语句至少会被执行一次
 *
 */

    //1+2+……+10
var num = 1;
var sum = 0;

do {
    sum += num;
    num++;
} while (num <= 10);

console.log("sum = " + sum);