"use strict";

//ES6提供了新的数据结构Set，它类似数组，但是成员的值都是唯一的，没有重复的值。
//Set本身是一个构造函数，用来生成Set数据结构
//通过add()方法向Set结构加入成员，结果表明Set结构不会添加重复的值
{
  var s = new Set();
  var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
  arr.forEach(function (x) {
    return s.add(x);
  });
  console.log('Set()', s);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;
      console.log('遍历', i);
    }
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
} //Set默认值

{
  var _s = new Set([1, 2, 3, 4, 5, 5, 5, 6]);

  console.log('Set默认值', _s, '长度', _s.size);
} //Set不会去转换数据类型，比如数值2和字符2是不相等的

{
  var _s2 = new Set([1, "1", 2, "2"]);

  console.log(_s2);
} //Set实例方法
//add(value) 添加某个值，返回Set结构本身
//delete(value) 删除某个值，返回一个布尔值，表示是否删除成功
//has(value) 返回一个布尔值，表示该值是否为Set成员
//clear() 清除所有成员，没有返回值

{
  var _arr = ['add', 'delete', 'has', 'clear'];

  var _s3 = new Set(_arr);

  console.log('has', _s3.has('has'));
  console.log('delete', _s3.delete('add'), _s3);

  _s3.clear();
} //Set遍历操作
//keys() 返回键名遍历器
//values() 返回键值遍历器
//entries() 返回键值和键名
//forEach() 使用回调函数遍历每个成员

{
  //keys()由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致
  var set = new Set(["a", 'b', 'c', 'd']);
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = set.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _i = _step2.value;
      console.log('keys', _i);
    } //values

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
    for (var _iterator3 = set.values()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _i2 = _step3.value;
      console.log('values', _i2);
    } //entries

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

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = set.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _i3 = _step4.value;
      console.log('entries', _i3);
    } //forEach

  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  set.forEach(function (i) {
    console.log('forEach', i);
  });
} //WeakSet结构与Set类似，也是去重，但是它与Set有两个区别，首先，weakSet的成员只能是对象，而不能是其他类型的值，不能遍历

{
  var ws = new WeakSet();
  var arg = {
    a: 1
  };
  ws.add(arg);
  console.log('weakSet', ws);
  console.log('has', ws.has(arg), ws);
  console.log('delete', ws.delete(arg), ws);
} //Map
//ES6提供了Map数据结构，它类似对象，也是键值对的集合，但是键的范围不限于字符串，各种类型的值都可以单座键，也就是说，Object结构提供的是字符串-值得对应，Map结构提供了值-值得对应

{
  var map = new Map();
  map.set(123, 123);
  console.log('map.set(key,value)', map);
} //size 返回Map结构的成员总数
//set(key,value) 设置键名 和 键值，然后返回整个Map结构。如果key已经有值，则键值会被更新
//get(key) 读取key对应的键值
//has(key) 表示某个键是否在当前Map对象中，返回一个布尔值
//delete(key) 删除某个键，返回布尔值 true/flase
//clear() 清除所有成员，没有返回值
//Map也有遍历，和Set遍历一样

{
  var _map = new Map();

  var arr1 = ['123'];

  _map.set(arr1, 456);

  console.log('map', _map, _map.get(arr1));
  var map2 = new Map([['a', 123], ['b', 456]]);
  console.log('map', map2.get('a')); //123

  console.log('map', map2.get('b')); //456

  console.log('size', map2.size);
  console.log('delete', map2.delete('a'), _map.size);
  console.log('clear', map2.clear(), map2);
} //weakMap 结构与Map结构类似，但是，WeakMap只接受对象作为键名，不接受其他类型的值作为键名

{
  var wsmap = new WeakMap();
  var o = {};
  wsmap.set(o, 123);
  console.log(wsmap.get(o));
}
{
  // 数据结构横向对比，增，查，改，删
  var _map2 = new Map();

  var array = []; // 增

  _map2.set('t', 1);

  array.push({
    t: 1
  });
  console.info('map-array', _map2, array); // 查

  var map_exist = _map2.has('t');

  var array_exist = array.find(function (item) {
    return item.t;
  });
  console.info('map-array', map_exist, array_exist); // 改

  _map2.set('t', 2);

  array.forEach(function (item) {
    return item.t ? item.t = 2 : '';
  });
  console.info('map-array-modify', _map2, array); // 删

  _map2.delete('t');

  var index = array.findIndex(function (item) {
    return item.t;
  });
  array.splice(index, 1);
  console.info('map-array-empty', _map2, array);
}
{
  // set和array的对比
  var _set = new Set();

  var _array = []; // 增

  _set.add({
    t: 1
  });

  _array.push({
    t: 1
  });

  console.info('set-array', _set, _array); // 查

  var set_exist = _set.has({
    t: 1
  });

  var _array_exist = _array.find(function (item) {
    return item.t;
  });

  console.info('set-array', set_exist, _array_exist); // 改

  _set.forEach(function (item) {
    return item.t ? item.t = 2 : '';
  });

  _array.forEach(function (item) {
    return item.t ? item.t = 2 : '';
  });

  console.info('set-array-modify', _set, _array); // 删

  _set.forEach(function (item) {
    return item.t ? _set.delete(item) : '';
  });

  var _index = _array.findIndex(function (item) {
    return item.t;
  });

  _array.splice(_index, 1);

  console.info('set-array-empty', _set, _array);
}
{
  // map,set,object对比
  var item = {
    t: 1
  };

  var _map3 = new Map();

  var _set2 = new Set();

  var obj = {}; // 增

  _map3.set('t', 1);

  _set2.add(item);

  obj['t'] = 1;
  console.info('map-set-obj', obj, _map3, _set2); // 查

  console.info({
    map_exist: _map3.has('t'),
    set_exist: _set2.has(item),
    obj_exist: 't' in obj
  }); // 改

  _map3.set('t', 2);

  item.t = 2;
  obj['t'] = 2;
  console.info('map-set-obj-modify', obj, _map3, _set2); // 删除

  _map3.delete('t');

  _set2.delete(item);

  delete obj['t'];
  console.info('map-set-obj-empty', obj, _map3, _set2);
}