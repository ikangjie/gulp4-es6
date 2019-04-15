"use strict";

//正则扩展
//RegExp构造函数
{
  var regex1 = new RegExp('LKJ', 'i');
  console.log(regex1.test('hello LKJ'));
  var regex3 = new RegExp(/LKJ/ig, 'i');
  console.log(regex3.flags); //flags用于获取正则修饰符属性
} //object.unicode 检查是否加了u修饰符

{
  var s1 = /hello/;
  var s2 = /hello/;
  console.log('object.unicode', s1.unicode, s2.unicode);
} //y修饰符

{
  var s = 'bbb_bb_b';
  var a1 = /b+/g;
  var a2 = new RegExp("b+", "y"); //g和y都是全局匹配，不同点是g是一直往下寻找，直到匹配上，y是必须紧接上一个相同字符寻找，否则不成功

  console.log('1：', a1.exec(s), a2.exec(s));
  console.log('2：', a1.exec(s), a2.exec(s));
  console.log(a1.sticky, a2.sticky); //检查是否开启了y修饰符
} //u修饰符，Unicode 字符表示法

{
  var _s = 'u1';
  var _a = /^\uD83D/;
  var _a2 = /^(?:\uD83D(?![\uDC00-\uDFFF]))/; //a1匹配过程把\uD83D\uDC2A当成了两个字符
  //a2匹配过程把\uD83D\uDC2A当成了一个字符

  console.log(_a.test("\uD83D\uDC2A"), _a2.test("\uD83D\uDC2A")); //a Unicode字符是 61

  console.log(/\u{61}/.test('a')); //如果是Unicode码。需要加上u修饰符，否则匹配61个连续的u

  console.log(/a/.test('a')); //true
} //点修饰符

{
  var _s2 = '𠮷'; //\ud842\udfb7

  console.log("大于0xFFFF码点：", /^.$/.test(_s2));
  console.log("大于0xFFFF码点：", /^(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])$/.test(_s2));
}
{
  //使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符
  console.log(/a{2}/.test('aa')); //true 为a匹配两次

  console.log(/a{2}/.test('aa')); //ture

  console.log(/𠮷{2}/.test('𠮷𠮷')); //flase，如\"𠮷"字节是大于两个（\ud842\udfb7）,所以必须加上u修饰符，否则无法识别

  var t = '𠮷';
  console.log(t.length); //2个字节

  console.log(/(?:\uD842\uDFB7){2}/.test('𠮷𠮷')); //true
  //下面代码中，不加u修饰符，就无法识别非规范的K字符

  console.log("\u212A", /[a-z]/i.test("\u212A")); //false

  console.log("\u212A", /[a-z\u017F\u212A]/i.test("\u212A")); //true
}