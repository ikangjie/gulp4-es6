"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//基本定义和生成实例
{
  var Parent = function Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kangjie';

    _classCallCheck(this, Parent);

    this.name = name;
  };

  var v_parent = new Parent('v');
  console.log('构造函数和实例', v_parent);
} //继承

{
  var _Parent = function _Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kangjie';

    _classCallCheck(this, _Parent);

    this.name = name;
  };

  var Child =
  /*#__PURE__*/
  function (_Parent2) {
    _inherits(Child, _Parent2);

    function Child() {
      _classCallCheck(this, Child);

      return _possibleConstructorReturn(this, _getPrototypeOf(Child).apply(this, arguments));
    }

    return Child;
  }(_Parent);

  console.log('继承', new Child());
} //继承传递参数

{
  var _Parent3 = function _Parent3() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kangjie';
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 23;

    _classCallCheck(this, _Parent3);

    this.name = name;
    this.age = age;
  }; //在子类继承父类属性中使用了super，子类新增的属性必须往后加


  var _Child =
  /*#__PURE__*/
  function (_Parent4) {
    _inherits(_Child, _Parent4);

    function _Child() {
      var _this;

      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'child';
      var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;

      _classCallCheck(this, _Child);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_Child).call(this, name, age));
      _this.type = 'child';
      return _this;
    }

    return _Child;
  }(_Parent3);

  console.log('子类继承父类传递参数', new _Child());
  console.log('子类继承父类传递参数', new _Child('hello'));
} //getter和setter

{
  var _Parent5 =
  /*#__PURE__*/
  function () {
    function _Parent5() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kangjie';

      _classCallCheck(this, _Parent5);

      this.name = name;
    }

    _createClass(_Parent5, [{
      key: "longName",
      get: function get() {
        return 'mk' + this.name;
      },
      set: function set(value) {
        this.name = value;
      }
    }]);

    return _Parent5;
  }();

  var _v_parent = new _Parent5();

  console.log('getter', _v_parent.longName);
  _v_parent.longName = 'hello';
  console.log('setter', _v_parent.longName);
} //类的静态方法

{
  var _Parent6 =
  /*#__PURE__*/
  function () {
    function _Parent6() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kangjie';

      _classCallCheck(this, _Parent6);

      this.name = name;
    }

    _createClass(_Parent6, null, [{
      key: "tell",
      value: function tell() {
        return 'tell';
      }
    }]);

    return _Parent6;
  }(); //静态方法是通过类去调用，而不是类的实例去调用


  console.log('类的静态方法', _Parent6.tell());
} //类的静态属性

{
  var _Parent7 = function _Parent7() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'kangjie';

    _classCallCheck(this, _Parent7);

    this.name = name;
  };

  _Parent7.type = 'test';
  console.log('类的静态属性', _Parent7.type);
}