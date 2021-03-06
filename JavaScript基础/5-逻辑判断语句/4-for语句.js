

/** for语句
 * 格式：
 * for (语句1; 表达式; 语句3) {
 *     语句2;
 * }
 *
 * 逻辑：当程序执行到for语句时，首先执行语句1(仅仅会执行一次)。执行完语句1，计算表达式的值。如果表达式的值为假，则跳过整个for语句。如果表达式的值为真，则执行语句2。执行完语句2再去执行语句3，执行完语句3再去计算表达式的值。如此循环往复，直到表达式的值为假才停止。
 *
 */

    //1+2+……+10
var sum = 0;
for (var i = 1; i <= 10; i++) {
    sum += i;
}
console.log("sum = " + sum);



/**  for-in语句
 * for-in语句:往往被用来遍历某个数组或对象中的元素
 *
 * 注：讲完数组在回顾for-in语句
 */
var arr = ['a','b','c','d'];
for (var i in arr) {
    console.log("index:" + i + "    value:" + arr[i]);
}