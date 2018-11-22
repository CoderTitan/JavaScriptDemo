
// 其它基本类型转换成Boolean类型

//绝大部分值在转换为布尔类型时都为true，但以下6中falsy值除外
/**
 * 1、""
 * 2、null
 * 3、undefined
 * 4、0
 * 5、NaN
 * 6、false
 */
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(false));
