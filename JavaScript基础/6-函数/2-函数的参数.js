
// 函数的参数


//多个参数之间用逗号分隔
//此时str、age可以称为形式参数(形参)，本质是变量
function myConsole(str, age) {
    console.log(str, "he is " + age);
}

//此时()中的参数可以称为实际参数(实参)，本质是值
//函数的调用过程本质就是实参给形参赋值的过程
myConsole("https://www.titanjun.top", 18);



//对于已经传进来的参数js是来者不拒的，但是多余的部分会被默默的忽略掉
myConsole("https://www.titanjun.top", 18, "nice", "titanjun");


