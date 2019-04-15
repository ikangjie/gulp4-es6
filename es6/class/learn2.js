"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//数组解构
//对象解构
//字符串解构
//数值解构
//布尔值解构
//函数参数解构
//数组解构赋值
{
  var _a, _b;

  _a = 1;
  _b = 2;
  console.log('数组：' + _a, _b);
}
{
  var _a2, _b2, c;

  _a2 = 1;
  _b2 = 2;
  c = [3, 4, 5, 6, 7, 8, 9, 0];
  console.log('数组：' + _a2, _b2, c);
}
{
  var _a3, _b3, _c;

  var _ref = [1, 2];
  _a3 = _ref[0];
  _b3 = _ref[1];
  var _ref$ = _ref[2];
  _c = _ref$ === void 0 ? 3 : _ref$;
  //c是默认值，防止没有配对上，如果解构赋值没有成功配对，那么就是undefined
  console.log('数组：' + _a3, _b3, _c);
} //es6变量交换

{
  var _a4 = 1,
      _b4 = 2;
  var _ref2 = [_b4, _a4];
  _a4 = _ref2[0];
  _b4 = _ref2[1];
  console.log('es6：' + _a4, _b4);
  var _a4 = 1,
      _b4 = 2;
  _a4 = _b4;
  _b4 = _a4;
  console.log("es5：" + _a4, _b4);
} //对象解构赋值

{
  var _a5, _b5;

  var _a$b = {
    a: 1,
    b: 2
  };
  _a5 = _a$b.a;
  _b5 = _a$b.b;
  console.log('对象：' + _a5, _b5);
}
{
  var o = {
    p: 42,
    q: ["a1", "b1"]
  };
  var p = o.p,
      q = o.q; //let [a = 0,b = 0] = o;
  //console.log("对象赋值数组："+a,b);//解构左右两边必须同类型s，否则会报错

  console.log("对象：" + p, q);
} //对象默认值赋值

{
  var _a7 = {
    a: 10
  },
      _a7$a = _a7.a,
      _a6 = _a7$a === void 0 ? 0 : _a7$a,
      _a7$b = _a7.b,
      _b6 = _a7$b === void 0 ? 5 : _a7$b;

  console.log('对象默认值处理' + _a6, _b6);
} //处理json数据

{
  var jsonData = {
    title: "abc",
    arrs: [{
      title: "arrTitle",
      desc: "description"
    }]
  }; //let {title,arrs} = jsonData;
  //console.log(title,arrs);

  var _a8 = jsonData.title,
      _jsonData$arrs = _slicedToArray(jsonData.arrs, 1),
      _b7 = _jsonData$arrs[0].title;

  console.log("Json数据接受方法：" + _a8, _b7);
} //字符串解构

{
  var _hello = 'hello',
      _hello2 = _slicedToArray(_hello, 5),
      _a9 = _hello2[0],
      _b8 = _hello2[1],
      _c2 = _hello2[2],
      d = _hello2[3],
      e = _hello2[4];

  console.log('字符串解构', _a9, _b8, _c2, d, e);
} //函数参数解构

{
  var f = function f() {
    return [1, 2];
  }; //es6


  var _a10, _b9;

  var _f = f();

  var _f2 = _slicedToArray(_f, 2);

  _a10 = _f2[0];
  _b9 = _f2[1];
  console.log("es6函数赋值：" + _a10, _b9); //es5

  var a5, b5;
  a5 = f();
  console.log("es5函数赋值：" + a5[0], a5[1]);
} //多个函数返回值情况下选择赋值

{
  var _f3 = function _f3() {
    return [1, 2, 3, 4, 5];
  }; //es6


  var _a11, _b10, _c3;

  var _f4 = _f3();

  var _f5 = _slicedToArray(_f4, 4);

  _a11 = _f5[0];
  _b10 = _f5[3];
  console.log("数组选择性赋值：" + _a11, _b10); //1,4
} //不确定函数返回数组长度

{
  var _f6 = function _f6() {
    return [1, 2, 3, 4, 5, 6, 7];
  }; //es6


  var _a12, _b11; //[a,...b] = f();


  var _f7 = _f6();

  var _f8 = _toArray(_f7);

  _a12 = _f8[0];
  _b11 = _f8.slice(2);
  console.log("不确定函数返回数组长度：" + _a12, _b11); //1,4
}