
/**
 * 格林尼治时间(GTM):是英国郊区皇家格林尼治天文台的时间，因为地球自转的原因，不同经度上的时间是不相同的，格林尼治天文台是经度为0的地方。世界上发生的重大时间都是以格林尼治时间时间为标准的。
 *
 *
 * 世界协调时间(UTC):世界时间。1970年1月1日0点。
 */

//ECMAScript中的Date类型是在早期Java中的java.util.Date类的基础上构建的。为此Date类型使用自UTC1970年1月1日午夜（零时）开始经过的毫秒数保存时间的。该Date类型保存的日期能够精确到1970年1月1日之前和之后的285616年


    //创建

    //1、直接用Date()函数
    //返回当前时间
    //注意：不论Date()是否带参数，返回的都是当前时间
var date1 = Date("2016-09-18");
console.log(typeof date1);//String类型
console.log(date1);


//2、构造函数法--不传参数
//返回当前时间
var date2 = new Date();
console.log(typeof date2);//Object类型
console.log(date2);


console.log('--------Date------')
//3、构造函数法--参数是一个表示时间的字符串
//3.1 格式：month day, year hours:minutes:seconds
//December 24, 2008 12:04:13
//注意：如果省略了小时、分钟、秒数，这些会被设置为0
//3.2 2016-09-18 18:32:32    2016-9-18 18:32:32
//3.3 2016/09/18 18:32:32
var date3 = new Date("2016/09/18");
console.log(date3);


//4、
var date4 = new Date("2016-09-08");
console.log(date4);
//5、
var date5 = new Date("2016-9-8");
console.log(date5);



//6、构造函数法--参数是(年,月,日,时,分,秒,毫秒)
//注意：年和月必须写，且月从0开始，日期从1开始
var date6 = new Date(2016,09,9,10,10,10,1000);
console.log(date6);
console.log(typeof date6)


//7、构造函数法--参数是毫秒数
//返回中国标准时间
var date7 = new Date(1000);
console.log(date7);
