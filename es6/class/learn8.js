"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//简洁表式发
{
  var o = 1;
  var k = 2;
  var es5 = {
    o: o,
    k: k
  };
  var es6 = {
    o: o,
    k: k
  };
  console.log('es5', es5);
  console.log('es6', es6); //对象中有方法

  var es5_fn = {
    hello: function hello() {
      console.log('es5()');
    }
  };
  var es6_fn = {
    hello: function hello() {
      console.log('es6()');
    }
  };
  es5_fn.hello();
  es6_fn.hello();
} //属性表达式

{
  var _es6_fn2;

  var a = 'b';
  var es5_obj = {
    a: 'c'
  }; //将a的值转换成对象

  var es6_obj = _defineProperty({}, a, 'c');

  console.log('es5_obj', es5_obj);
  console.log('es6_obj', es6_obj); //还可以定义方法名

  var _es6_fn = (_es6_fn2 = {}, _defineProperty(_es6_fn2, 'h' + 'ello', function () {
    return 'hi';
  }), _defineProperty(_es6_fn2, 'w' + 'orld', function () {
    return '世界';
  }), _es6_fn2);

  console.log(_es6_fn.hello());

  var _arr = Object.entries(_es6_fn);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    console.log('遍历对象', key, value);
  }
} //新增API

{
  //判断两个字符串是否相等
  console.log('字符串判断', Object.is('abc', 'abc')); //判断对象是否相等 数组是引用两个不同的地址，所以会false

  console.log('数组', Object.is([1, 2], [1, 2])); //false
  //对象拷贝 对象合并

  console.log('拷贝', Object.assign({
    a: 'a'
  }, {
    b: 'b'
  })); //遍历数组的值和键值

  var test = {
    k: 123,
    o: 456
  };

  var _arr2 = Object.entries(test);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
        key = _arr2$_i[0],
        value = _arr2$_i[1];

    console.log(key, value);
  }
} //扩展运算符

{
  var _a$b$c$d = {
    a: 'hello',
    b: 'world',
    c: '你好',
    d: '世界'
  },
      _a = _a$b$c$d.a,
      b = _a$b$c$d.b,
      c = _objectWithoutProperties(_a$b$c$d, ["a", "b"]);

  console.log(_a, b, c); //a hello b world c最后是对象 {c : '你好', d : '世界'}
}