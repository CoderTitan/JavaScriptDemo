
//1、push(item1,item2...)
// 功能：向数组的末尾插入元素
// 参数：一个或者多个数组元素
// 返回值：数组改变之后的容量
var arr1 = [1,2,3];
var length1 = arr1.push(4,5);
console.log("length1 = " + length1);
console.log(arr1);


//2、unshift(item1,item2......)
// 功能：向数组的头部插入元素
// 参数：一个或者多个数组元素
// 返回值：数组改变之后的容量
var arr2 = [1,2,3];
var length2 = arr2.unshift(-1,0);
console.log("length2 = " + length2);
console.log(arr2);


//3、pop()
// 功能：删除数组末尾的元素
// 参数：无参
// 返回值：删除的元素
var arr3 = [1,2,3];
var value3 = arr3.pop();
console.log("value3 = " + value3);
console.log(arr3);



//4.shift();
// 功能：删除数组头部的元素
// 参数：无参
// 返回值：删除的元素
var arr4 = [1,2,3];
var value4 = arr4.shift();
console.log("value4 = " + value4);
console.log(arr4);




//5、join(str)
//功能：用参数字符串将数组中元素拼接成一个新字符串
//参数：拼接使用的字符串
//返回值：拼接后的字符串
//不会改变原数组
var arr5 = [1,2,3,4];
var str5 = arr5.join("good");
console.log(arr5);
console.log(str5);



//6、reverse()
//功能：将原数组元素倒置
//参数：无
//返回值：返回原数组
//注意：原数组改变
var arr6 = [1,2,3,4];
var ret6 = arr6.reverse();
console.log(arr6);
console.log(ret6);



//7.slice(startIndex,endIndex)
// 功能：截取数组元素
// 参数：开始下标，结束下标
// 返回值：截取到的数组元素组成的数组
// 注意：
// 1.不包括arr[endIndex]元素
// 2.原数组不会改变
// 3.endIndex的值必须大于1并且不能小于startIndex的值
var arr7 = [1,2,3,4,5,6,7,8];
var ret7 = arr7.slice(0,6);
console.log("******");
console.log(ret7);
console.log(arr7);


// 8.splice(下标,个数,item1,item2...)
// 必须的参数：下标 个数
// 可选的参数：item1,item2...
// 功能：在数组中间插入或者删除数组元素，如果要插入元素的话，个数为0
// 返回值：被删除的元素组成的数组

//splice插入方式
var arr8 = [1,2,3,4,5];
var ret8 = arr5.splice(2, 0 , 8, 9);
console.log(ret8);
console.log(arr8);

//splice删除方式
ret8 = arr8.splice(3,2);
console.log(ret8);
console.log(arr8);




// 9、concat()
// 功能：将两个数组拼接
// 参数：一个或者多个数组
// 返回值：新数组，数组元素是所有拼接的数组元素。
// 注：对原数组没有影响。
var arr9 = [1,2,3,4];
var str9 = [8,9];
var acp9 = [0,6,8];
var ret9 = arr9.concat(str9, acp9);
console.log(arr9);
console.log(str9);
console.log(acp9);
console.log(ret9);



//10、indexOf()
//功能：从数组的头部查找数组元素，找到返回数组元素的下标，否则话返回-1.
//参数：要查找的元素
// 返回值：下标或者-1
var arr10 = [1,2,3,3,5];
var ret10 = arr10.indexOf(3);
console.log(arr10);
console.log(ret10);



// 8.lastIndexOf()
//功能：从数组的尾部查找数组元素，找到返回数组元素的下标，否则话返回-1.
//参数：要查找的元素
// 返回值：下标或者-1
var arr11 = [1,2,3,3,5];
var ret11 = arr11.lastIndexOf(3);
console.log(arr11);
console.log(ret11);