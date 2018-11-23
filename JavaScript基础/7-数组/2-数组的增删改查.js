
//数组元素的访问：数组名[下标]
//注意：下标是从0开始的
var arr = [1,2,3,4];
//取值
console.log(arr[2]);

//赋值
arr[2] = 5;
console.log(arr[2]);


//打印数组的长度(元素个数)
//(暂时了解就行)注意：不计算非下标类的属性名
console.log("数组arr长度：" + arr.length);


//改变数组的长度（增加）
//其余元素默认值为undefined, 不会出现iOS中的越界的问题
arr.length = 10;
console.log(arr);
console.log("arr[4] = " + arr[4]);
console.log("arr[5] = " + arr[5]);
console.log("arr[6] = " + arr[6]);
console.log("arr[7] = " + arr[7]);
console.log("arr[8] = " + arr[8]);
console.log("arr[9] = " + arr[9]);


//改变数组的长度（减少）
//多余的直接裁剪
arr.length = 2;
console.log(arr);



//通过索引一个之前不存在的位置来添加元素
arr[2] = 5;
console.log(arr.length);
console.log(arr);


//如果新元素添加的位置与原数组末端存在一定的间隔，那么这之间的元素将会被自动设置为undefined值
arr[5] = 10;
console.log(arr.length);
console.log(arr);
console.log("arr[3] = " + arr[3]);
console.log("arr[4] = " + arr[4]);


//删除：用delete操作符删除特定的元素
//原数组长度不会改变
//删除元素的位置知识被留空了而已，为undefined值
delete arr[2];
console.log(arr.length);
console.log(arr);
console.log("arr[2] = " + arr[2]);




/// 遍历数组
//下标循环遍历
for (var i = 0; i < arr.length; i++) {
    console.log("arr[" + i + "] = " + arr[i]);
}

//for-in快速遍历
//对于数组来说，in的前面是数组中的下标(属性名)
//arr["sunck"] = "abc";
console.log(arr);
for (var j in arr) {
    console.log(j);
    console.log("arr[" + j + "] = " + arr[j]);
}


//forEach()遍历数组，是ECMAScript5.0中加入的，在低版本的IE中无法使用
//forEach()中不能使用break和continue
arr.forEach(function(e){
    console.log(e);
});