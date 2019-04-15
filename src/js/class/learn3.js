//正则扩展

//RegExp构造函数
{

    let regex1 = new RegExp('LKJ','i');
    console.log(regex1.test('hello LKJ'));

    let regex3 = new RegExp(/LKJ/ig,'i');
    console.log(regex3.flags);//flags用于获取正则修饰符属性
}
//object.unicode 检查是否加了u修饰符
{
    let s1 = /hello/;
    let s2 = /hello/u;
    console.log('object.unicode',s1.unicode,s2.unicode);
}
//y修饰符
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;
    //g和y都是全局匹配，不同点是g是一直往下寻找，直到匹配上，y是必须紧接上一个相同字符寻找，否则不成功
    console.log('1：',a1.exec(s),a2.exec(s));
    console.log('2：',a1.exec(s),a2.exec(s));
    console.log(a1.sticky,a2.sticky);//检查是否开启了y修饰符
}
//u修饰符，Unicode 字符表示法
{
    let s = 'u1';
    let a1 = /^\uD83D/;
    let a2 = /^\uD83D/u;
    //a1匹配过程把\uD83D\uDC2A当成了两个字符
    //a2匹配过程把\uD83D\uDC2A当成了一个字符
    console.log(a1.test('\uD83D\uDC2A'),a2.test('\uD83D\uDC2A'));
    //a Unicode字符是 61
    console.log(/\u{61}/.test('a'));//如果是Unicode码。需要加上u修饰符，否则匹配61个连续的u
    console.log(/\u{61}/u.test('a'));//true
}
//点修饰符
{
    let s = '𠮷';//\ud842\udfb7
    console.log("大于0xFFFF码点：",/^.$/.test(s));
    console.log("大于0xFFFF码点：",/^.$/u.test(s));
}
{
    //使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符
    console.log(/a{2}/.test('aa'));//true 为a匹配两次
    console.log(/a{2}/u.test('aa'));//ture
    console.log(/𠮷{2}/.test('𠮷𠮷'));//flase，如\"𠮷"字节是大于两个（\ud842\udfb7）,所以必须加上u修饰符，否则无法识别
    
    let t = '𠮷';
    console.log(t.length);//2个字节

    console.log(/𠮷{2}/u.test('𠮷𠮷'));//true
    //下面代码中，不加u修饰符，就无法识别非规范的K字符
    console.log('\u212A',/[a-z]/i.test('\u212A'));//false
    console.log('\u212A',/[a-z]/iu.test('\u212A'));//true
}