//默认参数，es6之前，不能直接为函数的参数指定默认值，只能采用变成通的方法
{

    //es5
    function log(x,y){
        x = x || 'hello';
        y = y || 'world';
        return x + ',' + y;
    }
    console.log(log());

    //es6允许为函数的参数设置默认值，即直接写在参数定义的后面
    //注意：参数变量是默认声明的，所以不能用let或const再次声明，否则会报错
    function es6log(x = 'hello',y = 'world'){
        return x + ',' + y;
    }
    console.log('es6参数默认值',es6log());

    function eslog2(x,y = 'world'){
        console.log(x,y);
    }
    eslog2('hello');

    //默认值后面不能没有默认值变量，否则会报错
    // function log(x,y = 1,x){} //报错
    // function log(x,y = 1,c = 1){} //不报错

}

//与解构赋值参数默认值结合使用
{
    function log(x = 0,y = 2){
        console.log(x,y);
    }
    log({x:1});//输出1 2

    function m1({x = 0, y = 0} = {}) {
        return [x,y];
    }
    console.log(m1());//[0,0]

    function m2({x, y} = { x: 0, y: 0 }) {
        return [x, y];
    }
    console.log(m2());//[0,0]

}

//函数作用域问题
{
     let x = 'test';
     function test(x,y = x){
         console.log('函数作用域',x,y);
     }
     //test('hello');//输出hello hello
     function test2(c,y = x){
         console.log(c,y);
     }
     test2('hello');//输出hello test
}

//rest参数 用于获取多余的参数
{
    function test(...arg){
        for(let v of arg){
            console.log('rest参数',v);
        }
    }
    test(1,2,3,4,5,'a');
}

//扩展运算符
{
    //把数组转成离散值
    console.log('扩展运算符',...[1,2,3]);//1 2 3
}

//箭头函数
 {
     let f = v => v;//参数名、返回数
     //等同
     /*var f = function(v){
         return v;
     }*/
     console.log('箭头函数：',f(5));//5

     let sum = (num1,num2) => num1 + num2;
     //等同
     /*var sum  = function(num1,num2){
         return num1+num2;
     }*/
     console.log('箭头函数：',sum(1,1));//2

     //如果箭头函数的代码块多于一条语句就要用大括号将它们括起来
     let g = () => {console.log(5)};
     //等同
     /*var g = function(){
         console.log(5);
     }*/
     g();

 }

 //尾调用：就是指某个函数的最后一步是调用另外一个函数 尾调用不一定出现在函数尾部，只要是最后一步操作即可
 {
     function test1(x){
         console.log('尾调用',x);
     }
     function test2(x){
         return test1(x);
     }
     test2(123);

    //以下三种情况都不属于尾调用
    // 情况一
    /*function f(x){
        let y = g(x);
        return y;
    }
    
    // 情况二
    function f(x){
        return g(x) + 1;
    }
    
    // 情况三
    function f(x){
        g(x);
    }*/

 }