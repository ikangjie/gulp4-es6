"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//数组扩展
//Array.of() 将一组值转换为数组
//这个方法主要目的是弥补数组构造函数Array()的不足，因为参数个数不同会导致Array()行为有差异，而ES6的Array.of()不存在由于参数不同而导致重载，它的行为非常统一
{
  //es6
  var arr1 = Array.of(1, "2", "hello", 3);
  console.log('Array.of()', arr1); //[1,"2","hello",3]
  //es5 行为有差异

  var arr2 = new Array(3);
  console.log('new Array()', '长度1', arr2, '长度', arr2.length);
} //Array.from() 把一些伪数组或集合转换为真正的数组

window.onload = function () {
  {
    var p = document.querySelectorAll('p');
    var pArr = Array.from(p);
    pArr.forEach(function (item) {
      console.log(item.textContent);
    }); //在原有的数组上遍历映射

    console.log('Array.from([1,2,3])', Array.from([1, 2, 3], function (item) {
      return item * 2;
    })); //2,4,6
  }
}; //fill()方法


{
  //把数组所有值都变成7
  console.log('把数组里所有值变成7 fill()', ['a', 'b', 'c', undefined].fill(7)); //改变某个位置的值

  console.log('改变某个位置的值 fill()', [1, 2, 3, 4, 5].fill(7, 1, 3)); //第一个参数表示新的的值，第二个参数表示起始位置，第三个参数表示结束位置

  console.log('改变某个位置的值 fill()', [1, 2, 3, 4, 5].fill('五', 0, 3));
} //keys()、value()、entries()方法 存在兼容问题，需要babel-polyfill支持

{
  //遍历数组键值
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = ['a', 'b', 'c'].keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var index = _step.value;
      console.log('keys()', index);
    } //遍历数组的值

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = ['a', 'b', 'c'].values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var value = _step2.value;
      console.log('values()', value);
    } //遍历数组的键值和值

  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = ['a', 'b', 'c'].entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _step3$value = _slicedToArray(_step3.value, 2),
          _index = _step3$value[0],
          _value = _step3$value[1];

      console.log('entries()', _index, _value);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
} //copyWithin()将数组里某个值移动到某个位置
//第一个参数：从该位置开始替换数据。如果为负值，表示倒数
//第二个参数（可选）：从该位置开始读取数据，默认0.如果为负值，表示倒数
//第三个参数（可选）：到该位置停止读取数据，默认等于数组长度。如果为负值，表示倒数

{
  console.log('copyWithin()', [1, 2, 3, 4, 5].copyWithin(0, 1, 5)); //[2,3,4,5]
} //find()检查某个值是否在数组中
//find()只查找一次符合条件的值
//find()的参数是一个回调函数，所有的数组成员依次执行该回调函数

{
  //检查某个值是否在数组中
  console.log('find() 检查某个值是否在数组中', [1, 2, 3, 4, 5, 6].find(function (i) {
    return i == 6;
  })); //查找大于3的值，注意：find只查找一次符合条件的值

  console.log('find() 查找大于3的值', [1, 2, 3, 4, 5, 6].find(function (i) {
    return i > 3;
  }));
} //findIndex()检查某个值的键值
//findIndex()只查找一次符合条件的值
//findIndex()参数是一个回调函数，所有的数组成员依次执行该回调函数

{
  console.log('findIndex() 查找某个值的键值', [1, 2, 3].findIndex(function (i) {
    return i > 2;
  }));
} //includes() 检查数组里是否包含某个值

{
  console.log('includes() 检查数组里是否包含某个值', [1, 2, 3].includes(2)); //true

  console.log('includes() 检查数组里是否包含某个值', [1, 2, 3, NaN].includes(NaN)); //true

  console.log('includes() 检查数组里是否包含某个值', [1, 2, 3].includes(10)); //false
}