
// if相关语句

/** if语句
 * 格式：
 * if (表达式)
 * {
 *     语句
 * }
 *
 * 逻辑：当程序执行到if语句时，首先计算"表达式"的值，如果"表达式"的值为真，那么就执行if下大括号中的语句。如果"表达式"的值为假，则跳过整个if语句继续向下执行。
 *
 * falsthy值为假
 */

if (1) {
    console.log("******");
}



/** if-else语句
 * 格式：
 * if (表达式)
 * {
 *     语句1
 * } else {
 *     语句2
 * }
 *
 * 逻辑：当程序执行到if-else语句时，首先计算"表达式"值，如果"表达式"的值为真，那么执行语句1，执行完语句1则跳过整个if-else语句继续向下执行。如果"表达式"的值为假，那么执行语句2，执行完语句2则跳过整个if-else语句继续向下执行。
 *
 *
 *
 */

if (1) {
    console.log("真");
} else {
    console.log("假");
}




/** if-else if语句
 * 格式：
 * if (表达式1) {
			语句1
		 } else if (表达式2) {
			语句2
		 }
 ……
 else if (表达式n) {
			语句n
		 }
 else {
			语句e
		 }
 *
 * 注意：最后的else可有可没有
 *
 * 逻辑：当程序执行到if-else-if语句时，首先计算表达式1，如果表达式1的值为真，那么执行语句1，执行完语句1则跳出整个if-else-if语句继续向下执行。如果表达式1的值为假，那么去计算表达式2的值。如果表达式2的值为真，那么执行语句2，执行完语句2则跳出整个if-else-if语句继续向下执行，如果表达式2的值为假，计算下一个表达式。如此下去，直到某个表达式为真为止。如果没有一个表达式是真的，且最后有一个else，那么会执行语句e。
 *
 *【注】每一个else都是对它上面表达式的否定
 *
 */

/*
从终端输入一个人的年龄，判断这个年龄所属的阶段
0~3    婴儿
4~6    幼儿
7~14   儿童
15~18  少年
19~30 青年
31~40 中年
41~50 壮年
51~150 老年
151~    妖怪
*/

var age = 14;
if (age < 0) {
    console.log("输入有误");
} else if (age <= 3) {
    console.log("婴儿");
} else if (age <= 6) {
    console.log("幼儿");
} else if (age <= 14) {
    console.log("儿童");
} else if (age <= 18) {
    console.log("少年");
} else if (age <= 30) {
    console.log("青年");
} else if (age <= 40) {
    console.log("中年");
} else if (age <= 50) {
    console.log("壮年");
} else if (age <= 150) {
    console.log("老年");
} else {
    console.log("妖怪");
}