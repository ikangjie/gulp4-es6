//字符串扩展

//Unicode表示法
{
    console.log('a','\u0061');
    //大于0xFFFF码点
    console.log('𠮷','\u20BB7','大于0xFFFF码点无法识别');
    //使用u修饰符处理
    console.log('\u{20BB7}');//正常识别
    //写出一个正确返回字符串长度的函数
    function codePointLength(t){
        let result = t.match(/[\s\S]/gu);
        return result ? result.length : 0;
    }
    let a = '𠮷';
    console.log('非u修饰符"𠮷"长度',a.length);
    console.log('u修饰符"𠮷"长度',codePointLength(a));
}
//es6字符串API
{
    let a = '𠮷';
    //es5
    //charAt()返回指定位置字符
    console.log('charAt()返回指定位置字符',a.charAt(0));
    console.log('charAt()返回指定位置字符',a.charAt(1));
    //charCodeAt()返回指定位置字符的Unicode码
    console.log('charCodeAt()返回指定位置字符的Unicode码',a.charCodeAt(0));
    console.log('charCodeAt()返回指定位置字符的Unicode码',a.charCodeAt(1));
    
    //es6
    console.log('es6 codePointAt() 十进制',a.codePointAt(0));
    console.log('es6 codePointAt() 十六进制',a.codePointAt(0).toString(16));
    console.log('es6 codePointAt() 十六进制',a.codePointAt(1).toString(16));
}
{
    //es5
    console.log(String.fromCharCode('0x20BB7'));
    //es6
    console.log(String.fromCodePoint('0x20BB7'));
}
//遍历器接口
{
    let str = '\u{20bb7}';
    console.log('\/u{20bb7}',str);
    //es5
    for(let i = 0;i<str.length;i++){
        console.log('es5',str[i]);
    }
    //es6 处理大于0xffff编码情况
    for(let i of str){
        console.log('es6',i);
    }
}
//常用的方法
{
    let str = 'string';
    //判断字符串是否包含某些字符
    console.log('includes',str.includes('s'));//true
    console.log('includes',str.includes('a'));//false
    //判断字符串是否以某些字符起始或截至的
    console.log('start',str.startsWith('str'));//true
    console.log('start',str.endsWith('ng'));//true
}
//字符串重复
{
    let str = "abc";
    console.log('es5字符串重复',str+="abc");
    console.log('es6字符串重复方法 repeat()',str.repeat(2));
}
//字符串模板
{
    let name = 'Kangjie';
    let info = 'hello world';
    let m = `i am ${name},${info}`;//用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
    console.log(m);
    console.log(`康杰要好好学习es6哦！
    加油
    `);
    //还可以计算
    let x = 1,y = 2;
    console.log('字符串模板计算',`原本x等于1的，现在是${x+1}`);
}
//es7字符串补白 需要babel-polyfill支持兼容
{
    console.log('1'.padStart(2,'0'));//往前补白 第一个参数是长度，第二个参数是长度不够的补白
    console.log('2'.padEnd(2,'0'));//往后补白
}
//标签模板
{
    let user = {
        name : 'list',
        info : 'hello world',
        qa : 'search'
    };
    console.log(`i am ${user.name},${user.info}`);
    function abc(s,v1,v2,v3){
        console.log(s,v1,v2,v3);
        return s+v1+v2;
    }
    console.log(abc`i am ${user.name},${user.info},${user.qa}`);//对应着每个参数
}
//String.raw 返回模板字符串原始字符串形式
{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}