

//这是String类型，是基本类型
var str1 = "https://titanjun.top/";
//字符串对象，引用类型，Object
var str2 = new String("https://titanjun.top/");

console.log(typeof str1);
console.log(typeof str2);

//引用类型封装属性与方法。在前端开发中有许多关于字符串的操作。基本类型的字符串无法完成这些操作，js就添加了一种引用类型的字符串，在该引用类型中封装了有关字符串的属性和方法，方便开发者对字符串进行操作。


//区别：
//1、数据类型不一样。
//2.引用类型的字符串包含了属性和方法。通常说引用类型的String是字符串包装类型


// 实际操作中，基本类型的字符串可以直接使用引用类型的字符串中封装的属性与方法。不要自己手动转换。

//字符串创建之后就不能改变了
console.log("str1 = " + str1);
console.log("str2 = " + str2);


