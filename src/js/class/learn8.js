//简洁表式发
{
    let o = 1;
    let k = 2;
    let es5 = {
        o : o,
        k : k
    };
    let es6 = {o,k};
    console.log('es5',es5);
    console.log('es6',es6);

    //对象中有方法
    let es5_fn = {
        hello : function(){
            console.log('es5()');
        }
    };

    let es6_fn = {
        hello(){
            console.log('es6()');
        }
    };

    es5_fn.hello();
    es6_fn.hello();

}

//属性表达式
{
    let a = 'b';
    let es5_obj = {
        a : 'c'
    };

    //将a的值转换成对象
    let es6_obj = {
        [a] : 'c'
    };

    console.log('es5_obj',es5_obj);
    console.log('es6_obj',es6_obj);

    //还可以定义方法名
    let es6_fn = {
        ['h'+'ello'](){
            return 'hi';
        },
        ['w'+'orld'](){
            return '世界';
        }
    };
    console.log(es6_fn.hello());
    for(let [key,value] of Object.entries(es6_fn)){
        console.log('遍历对象',key,value);
    }
}

//新增API
{
    //判断两个字符串是否相等
    console.log('字符串判断',Object.is('abc','abc'));
    //判断对象是否相等 数组是引用两个不同的地址，所以会false
    console.log('数组',Object.is([1,2],[1,2]));//false
    
    //对象拷贝 对象合并
    console.log('拷贝',Object.assign({a : 'a'},{b : 'b'}));

    //遍历数组的值和键值
    let test = {k : 123, o : 456};
    for(let [key,value] of Object.entries(test)){
        console.log(key,value);
    }

}

//扩展运算符
{
    let {a,b,...c} = {a : 'hello',b : 'world',c : '你好',d : '世界'};
    console.log(a,b,c);//a hello b world c最后是对象 {c : '你好', d : '世界'}
}