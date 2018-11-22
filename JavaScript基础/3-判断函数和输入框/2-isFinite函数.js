

// isFinite()  检测输入是否是一个既非Infinity也非NaN的数字

console.log(isFinite(Infinity));//false
console.log(isFinite(-Infinity));//false

console.log(isFinite(NaN));//false


console.log(isFinite(123));//true