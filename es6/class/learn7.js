"use strict";

//默认参数，es6之前，不能直接为函数的参数指定默认值，只能采用变成通的方法
{
  //es5
  var log = function log(x, y) {
    x = x || 'hello';
    y = y || 'world';
    return x + ',' + y;
  };

  //es6允许为函数的参数设置默认值，即直接写在参数定义的后面
  //注意：参数变量是默认声明的，所以不能用let或const再次声明，否则会报错
  var es6log = function es6log() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello';
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';
    return x + ',' + y;
  };

  var eslog2 = function eslog2(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';
    console.log(x, y);
  };

  console.log(log());
  console.log('es6参数默认值', es6log());
  eslog2('hello'); //默认值后面不能没有默认值变量，否则会报错
  // function log(x,y = 1,x){} //报错
  // function log(x,y = 1,c = 1){} //不报错
} //与解构赋值参数默认值结合使用

{
  var _log = function _log() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    console.log(x, y);
  };

  //输出1 2
  var m1 = function m1() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$x = _ref.x,
        x = _ref$x === void 0 ? 0 : _ref$x,
        _ref$y = _ref.y,
        y = _ref$y === void 0 ? 0 : _ref$y;

    return [x, y];
  };

  //[0,0]
  var m2 = function m2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0
    },
        x = _ref2.x,
        y = _ref2.y;

    return [x, y];
  };

  _log({
    x: 1
  });

  console.log(m1());
  console.log(m2()); //[0,0]
} //函数作用域问题

{
  var test = function test(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    console.log('函数作用域', x, y);
  }; //test('hello');//输出hello hello


  var test2 = function test2(c) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    console.log(c, y);
  };

  var x = 'test';
  test2('hello'); //输出hello test
} //rest参数 用于获取多余的参数

{
  var _test = function _test() {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    for (var _i = 0; _i < arg.length; _i++) {
      var v = arg[_i];
      console.log('rest参数', v);
    }
  };

  _test(1, 2, 3, 4, 5, 'a');
} //扩展运算符

{
  var _console;

  //把数组转成离散值
  (_console = console).log.apply(_console, ['扩展运算符'].concat([1, 2, 3])); //1 2 3

} //箭头函数

{
  var f = function f(v) {
    return v;
  }; //参数名、返回数
  //等同

  /*var f = function(v){
      return v;
  }*/


  console.log('箭头函数：', f(5)); //5

  var sum = function sum(num1, num2) {
    return num1 + num2;
  }; //等同

  /*var sum  = function(num1,num2){
      return num1+num2;
  }*/


  console.log('箭头函数：', sum(1, 1)); //2
  //如果箭头函数的代码块多于一条语句就要用大括号将它们括起来

  var g = function g() {
    console.log(5);
  }; //等同

  /*var g = function(){
      console.log(5);
  }*/


  g();
} //尾调用：就是指某个函数的最后一步是调用另外一个函数 尾调用不一定出现在函数尾部，只要是最后一步操作即可

{
  var test1 = function test1(x) {
    console.log('尾调用', x);
  };

  var _test2 = function _test2(x) {
    return test1(x);
  };

  _test2(123); //以下三种情况都不属于尾调用
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