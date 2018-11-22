

/**
 * break语句：专门用于跳出switch和for循环(不会再执行for循环)
 */
var num1 = 1;
while (num1 <= 10) {
    if (num1 === 5) {
        break;
    }

    console.log("num1 = " + num1);
    num1++;
}
console.log("**********" + num1);


var num2 = 1;
do {
    if (num2 === 7) {
        break;
    }
    console.log("num2 = " + num2);
    num2++;
} while (num2 <= 10);
console.log("**********" + num2);


for (var num3 = 1; num3 <= 10; num3++) {
    if (num3 === 7) {
        break;
    }
    console.log("num3 = " + num3);
}
console.log("**********" + num3);



/**
 * continue语句：跳过本次循环，继续下一次循环。
 * 注意：本次循环中continue后面的代码不会被执行到
 */

var num1 = 1;
while (num1 <= 10) {
    if (num1 === 5) {
        num1++;
        continue;
    }

    console.log("num1 = " + num1);
    num1++;
}
console.log("**********" + num1);


var num2 = 1;
do {
    if (num2 === 7) {
        num2++;
        continue;
    }
    console.log("num2 = " + num2);
    num2++;
} while (num2 <= 10);
console.log("**********" + num2);


for (var num3 = 1; num3 <= 10; num3++) {
    if (num3 === 7) {
        continue;
    }
    console.log("num3 = " + num3);
}
console.log("**********" + num3);