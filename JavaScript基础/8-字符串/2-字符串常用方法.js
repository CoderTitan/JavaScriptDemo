

//这是String类型，是基本类型
var str1 = "https://titanjun.top/";
//字符串对象，引用类型，Object
var str2 = new String("https://titanjun.top/");

//str1是String基本类型，当使用String的引用类型的属性与方法时，默认转换成Object类型
console.log(str1.length);
console.log(str2.length);
//lenght是只读属性


//根据各国字符计算长度
var str3 = "https://titanjun.top/";
console.log(str3);
console.log(str3.length);