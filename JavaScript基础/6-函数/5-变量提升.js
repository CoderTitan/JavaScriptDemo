

// 变量提升

//js在执行过程进入新函数时，这个函数内被声明的所有变量都会被移动到函数最开始的地方，叫做变量的提升。
//注意：仅仅提升变量的声明，不会提升赋值
function f() {
    console.log("1---num = " + num);

    var num = 2;
    //此时打印的值是2，因为函数域始终优先全局域，所以函数内定义的num会覆盖掉所有与它同名的全局变量。
    console.log("2---num = " + num);
}

f();



// 下面的代码等同于上面的代码
function f1() {
    var num
    console.log("1---num = " + num)

    num = 5
    console.log("1---num = " + num)
}

f1()
