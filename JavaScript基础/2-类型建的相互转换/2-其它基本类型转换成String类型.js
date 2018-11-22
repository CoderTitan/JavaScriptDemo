

//其它基本类型转换成String类型

//Null-->String
var str0 = "titan" + null;
console.log(typeof str0);
console.log(str0);

//Undefined-->String
var str1 = "jun" + undefined;
console.log(typeof str1);
console.log(str1);

//Boolean-->String
var str2 = true.toString();
console.log(typeof str2);//string
console.log(str2);//"true"
console.log(false.toString());//"false"


//Number-->String
var num = 10;
var str3 = num.toString();
console.log(typeof str3);//string
console.log(str3);//"10"
