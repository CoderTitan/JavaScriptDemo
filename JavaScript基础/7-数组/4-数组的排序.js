/**
 * 冒泡排序
 *
 * 54321  -->  12345
 * 54321 -> 45321 -> 43521 -> 43251 -> 43215
 *           0-1      1-2      2-3      3-4
 * 43215 -> 34215 -> 32415 -> 32145
 *           0-1      1-2      2-3
 * 32145 -> 23145 -> 21345
 *           0-1      1-2
 * 21345 -> 12345
 *           0-1
 */


var arr = [5,4,3,2,1];

for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);


//sort()排序
//注意：默认排序结果为升序
var arr1 = [4,2,5,1,3];
arr1.sort();
console.log(arr1);

//改变sort()排序标准
var arr2 = [4,2,5,1,3];
arr2.sort(compare);
function compare(v1, v2) {
    if (v1 > v2) {
        return 1;
    }
    return -1;
}
console.log(arr2);