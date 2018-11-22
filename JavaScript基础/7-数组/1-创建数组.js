
/**
 * 内置对象就是指这个语言自带的一些对象，供开发者使用，这些对象提供了一些常用的或是最基本而必要的功能.
 * 浏览器上面跑的JS的内置对象有Math, String，Array, Date等
 *
 * 对象：包含属性和方法(函数)
 *
 *
 * 数组：就是对象
 * 可以存储多个不同类型的数据
 *
 */


//1、构造函数法
// 1.1 使用构造函数创建一个空数组
// new 开辟空间并返回内存空间的引用
var arr1 = new Array();
console.log(arr1);
//1.2 使用构造函数创建一个容量为20的数组
var arr2 = new Array(20);
console.log(arr2);
//1.3 使用构造方法创建一个包含三个元素的数组
var arr3 = new Array("a", "b", 1);
console.log(arr3);



//2、数组字面量表示法
//2.1 通过字面量创建空数组
var arr4 = [];
console.log(arr4);
//2.2 通过字面量创建一个包含三个元素的数组
var arr5 = [1, 2, "abc"];
console.log(arr5);
