"use strict";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["Hi\n", ""], ["Hi\\n", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["i am ", ",", ",", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//字符串扩展
//Unicode表示法
{
  //正常识别
  //写出一个正确返回字符串长度的函数
  var codePointLength = function codePointLength(t) {
    var result = t.match(/(?:[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g);
    return result ? result.length : 0;
  };

  console.log('a', "a"); //大于0xFFFF码点

  console.log('𠮷', "\u20BB7", '大于0xFFFF码点无法识别'); //使用u修饰符处理

  console.log("\uD842\uDFB7");
  var a = '𠮷';
  console.log('非u修饰符"𠮷"长度', a.length);
  console.log('u修饰符"𠮷"长度', codePointLength(a));
} //es6字符串API

{
  var _a = '𠮷'; //es5
  //charAt()返回指定位置字符

  console.log('charAt()返回指定位置字符', _a.charAt(0));
  console.log('charAt()返回指定位置字符', _a.charAt(1)); //charCodeAt()返回指定位置字符的Unicode码

  console.log('charCodeAt()返回指定位置字符的Unicode码', _a.charCodeAt(0));
  console.log('charCodeAt()返回指定位置字符的Unicode码', _a.charCodeAt(1)); //es6

  console.log('es6 codePointAt() 十进制', _a.codePointAt(0));
  console.log('es6 codePointAt() 十六进制', _a.codePointAt(0).toString(16));
  console.log('es6 codePointAt() 十六进制', _a.codePointAt(1).toString(16));
}
{
  //es5
  console.log(String.fromCharCode('0x20BB7')); //es6

  console.log(String.fromCodePoint('0x20BB7'));
} //遍历器接口

{
  var str = "\uD842\uDFB7";
  console.log('\/u{20bb7}', str); //es5

  for (var i = 0; i < str.length; i++) {
    console.log('es5', str[i]);
  } //es6 处理大于0xffff编码情况


  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _i = _step.value;
      console.log('es6', _i);
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
} //常用的方法

{
  var _str = 'string'; //判断字符串是否包含某些字符

  console.log('includes', _str.includes('s')); //true

  console.log('includes', _str.includes('a')); //false
  //判断字符串是否以某些字符起始或截至的

  console.log('start', _str.startsWith('str')); //true

  console.log('start', _str.endsWith('ng')); //true
} //字符串重复

{
  var _str2 = "abc";
  console.log('es5字符串重复', _str2 += "abc");
  console.log('es6字符串重复方法 repeat()', _str2.repeat(2));
} //字符串模板

{
  var name = 'Kangjie';
  var info = 'hello world';
  var m = "i am ".concat(name, ",").concat(info); //用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量

  console.log(m);
  console.log("\u5EB7\u6770\u8981\u597D\u597D\u5B66\u4E60es6\u54E6\uFF01\n    \u52A0\u6CB9\n    "); //还可以计算

  var x = 1,
      y = 2;
  console.log('字符串模板计算', "\u539F\u672Cx\u7B49\u4E8E1\u7684\uFF0C\u73B0\u5728\u662F".concat(x + 1));
} //es7字符串补白 需要babel-polyfill支持兼容

{
  console.log('1'.padStart(2, '0')); //往前补白 第一个参数是长度，第二个参数是长度不够的补白

  console.log('2'.padEnd(2, '0')); //往后补白
} //标签模板

{
  var abc = function abc(s, v1, v2, v3) {
    console.log(s, v1, v2, v3);
    return s + v1 + v2;
  };

  var user = {
    name: 'list',
    info: 'hello world',
    qa: 'search'
  };
  console.log("i am ".concat(user.name, ",").concat(user.info));
  console.log(abc(_templateObject(), user.name, user.info, user.qa)); //对应着每个参数
} //String.raw 返回模板字符串原始字符串形式

{
  console.log(String.raw(_templateObject2(), 1 + 2));
  console.log("Hi\n".concat(1 + 2));
}