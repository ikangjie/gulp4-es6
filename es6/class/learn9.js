"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//Symbol定义一个独一无二的值
{
  var a1 = Symbol(2);
  var a2 = Symbol(2);
  console.log(a1 === a2); //false

  console.log(123456789000); //有时我们希望重新使用一个Symbol值

  var a3 = Symbol.for('a3');
  var a4 = Symbol.for('a3');
  console.log(a3 === a4); //true
} //Symbol使用场景

{
  var _obj;

  var _a = Symbol.for('abc');

  var obj = (_obj = {}, _defineProperty(_obj, _a, '123'), _defineProperty(_obj, 'abc', 345), _defineProperty(_obj, 'c', 456), _obj);
  console.log(obj); //已经赋值的Symbo没法获取值

  var _arr = Object.entries(obj);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    console.log(key, value);
  }
} //getOwnPropertySymbols获取Symbol值

{
  var _obj3;

  var _a2 = Symbol.for('abc');

  var _obj2 = (_obj3 = {}, _defineProperty(_obj3, _a2, '123'), _defineProperty(_obj3, 'abc', 345), _defineProperty(_obj3, 'c', 456), _obj3);

  Object.getOwnPropertySymbols(_obj2).forEach(function (i) {
    console.log('Object.getOwnPropertySymbols', _obj2[i]);
  }); //获取所有对象的Key值

  Reflect.ownKeys(_obj2).forEach(function (i) {
    console.log('Reflect.ownKeys()', _obj2[i]);
  });
}