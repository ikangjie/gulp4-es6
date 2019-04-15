"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//ES6的模块化语法
//导出
// export let a = 123;
// export function test(){
//     console.log('test');
// }
// export class Hello{
//     test(){
//         console.log('class');
//     }
// }
var a = 123;

var test = function test() {
  console.log('test');
};

var Hello =
/*#__PURE__*/
function () {
  function Hello() {
    _classCallCheck(this, Hello);
  }

  _createClass(Hello, [{
    key: "test",
    value: function test() {
      console.log('class');
    }
  }]);

  return Hello;
}();

var _default = {
  a: a,
  test: test,
  Hello: Hello
};
exports.default = _default;