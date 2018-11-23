

/// Date对象方法

var date = new Date();


//获取年份
console.log(date.getFullYear());

//获取月份，注意0表示1月，依次类推
console.log(date.getMonth());

//获取日期
console.log(date.getDate());

//获取星期
console.log(date.getDay());

//获取小时
console.log(date.getHours());

//获取分钟
console.log(date.getMinutes());

//获取秒数
console.log(date.getSeconds());

//获取毫秒数
console.log(date.getMilliseconds());

//获取日期对象所表示的日期距离1970-01-01的毫秒数
console.log(date.getTime());



//设置年份
date.setFullYear(2015);


//设置月份
//注意：传入的月份大于11，则年份增加
date.setMonth(8);

//设置日期
//注意：如果传入的日期超过了该月应有的天数则会增加月份
date.setDate(29);

//注意：星期一般不用设置

//设置小时
//注意：如果传入的值超过23则增加日期
date.setHours(13);

//设置分钟
//注意：如果传入的值超过了59则增加小时数
date.setMinutes(56);

//设置秒数
//注意：传入的值超过59会增加分钟数
date.setSeconds(10);

//设置毫秒数
//注意：传入的值超过999会增加秒数
date.setMilliseconds(888);

//设置距离1970-01-01的毫秒数
date.setTime(1308484904898);

console.log(date);


console.log('----格式转换-----')
//转换成字符串
console.log(date.toString())
//日期部分转换为字符串
console.log(date.toDateString())
//把时间部分转换为字符串
console.log(date.toTimeString())
//包含年月日时分秒
console.log(date.toLocaleString());
//包含年月日
console.log(date.toLocaleDateString());
//包含时分秒
console.log(date.toLocaleTimeString());

//使用 ISO 标准返回字符串的日期格式
console.log(date.toISOString())
//JSON 数据格式返回日期字符串
console.log(date.toJSON())
//根据世界时，把 Date 对象转换为字符串
console.log(date.toUTCString())


//Date.parse(dateString)
//参数：日期字符串  格式：2016-05-08  2015/05/08 12:00:00
//返回该日期距离1970年1月1日0点的毫秒数
console.log(Date.parse("2016-10-10"));
