//数组解构
//对象解构
//字符串解构
//数值解构
//布尔值解构
//函数参数解构


//数组解构赋值
{
    let a,b;
    [a,b] = [1,2]; 
    console.log('数组：'+a,b);
}
{
    let a,b,c;
    [a,b,...c] = [1,2,3,4,5,6,7,8,9,0]
    console.log('数组：'+a,b,c);
}
{
    let a,b,c;
    [a,b,c=3] = [1,2] //c是默认值，防止没有配对上，如果解构赋值没有成功配对，那么就是undefined
    console.log('数组：'+a,b,c);
}
//es6变量交换
{
    let a = 1,b = 2;
    [a,b] = [b,a];
    console.log('es6：'+a,b);
    var a = 1,b = 2;
    a = b;
    b = a;
    console.log("es5："+a,b);
}

//对象解构赋值
{
    let a,b;
    ({a,b} = {a:1,b:2})
    console.log('对象：' + a,b);
}
{
    let o = {p:42,q:["a1","b1"]};
    let {p,q} = o;
    //let [a = 0,b = 0] = o;
    //console.log("对象赋值数组："+a,b);//解构左右两边必须同类型s，否则会报错
    console.log("对象："+p,q);
}
//对象默认值赋值
{
    let {a = 0,b = 5} = {a:10};
    console.log('对象默认值处理'+a,b);
}
//处理json数据
{
    let jsonData = {
        title : "abc",
        arrs : [{
            title : "arrTitle",
            desc : "description"
        }]
    };
    //let {title,arrs} = jsonData;
    //console.log(title,arrs);
    let {title:a,arrs:[{title:b}]} = jsonData;
    console.log("Json数据接受方法："+a,b);
}

//字符串解构
{
    let [a,b,c,d,e] = 'hello';
    console.log('字符串解构',a,b,c,d,e);
}

//函数参数解构
{
    function f(){
        return [1,2];
    }
    //es6
    let a,b;
    [a,b] = f();
    console.log("es6函数赋值："+a,b);
    //es5
    var a5,b5;
    a5 = f();
    console.log("es5函数赋值："+a5[0],a5[1]);
}
//多个函数返回值情况下选择赋值
{
    function f(){
        return [1,2,3,4,5];
    }
    //es6
    let a,b,c;
    [a,,,b] = f();
    console.log("数组选择性赋值："+a,b);//1,4
}
//不确定函数返回数组长度
{
    function f(){
        return [1,2,3,4,5,6,7];
    }
    //es6
    let a,b;
    //[a,...b] = f();
    [a,,...b] = f();
    console.log("不确定函数返回数组长度："+a,b);//1,4
}