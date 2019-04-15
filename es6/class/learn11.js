"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Proxy
{
  var obj = {
    time: '2018-03-28',
    name: 'net',
    _r: 123
  }; //代理对象

  var monnitor = new Proxy(obj, {
    //拦截对象属性的读取
    get: function get(target, key) {
      return target[key].replace('2018', '2019');
    },
    //拦截对象设置属性
    set: function set(target, key, value) {
      //只允许修改name属性
      if (key === 'name') {
        console.log(123);
        return target[key] = value;
      } else {
        return target[key];
      }
    },
    //拦截当前对象是否存在某个属性
    has: function has(target, key) {
      //只暴露name属性
      if (key === 'name') {
        return target[key];
      } else {
        return false;
      }
    },
    //拦截delete返回一个布尔值
    deleteProperty: function deleteProperty(target, key) {
      //以_开头允许删除
      if (key.indexOf('_') > -1) {
        delete target[key];
        return true;
      } else {
        return target[key];
      }
    },
    //拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
    ownKeys: function ownKeys(target) {
      return Object.keys(target).filter(function (i) {
        return i != 'time';
      });
    }
  }); // console.log('Proxy',obj,monnitor.time);
  // monnitor.time = '2020';
  // monnitor.name = 'hello world';//可以修改
  // console.log('只允许修改name属性',monnitor.time,monnitor.name,monnitor);
  // console.log('是否是monnitor属性','name' in monnitor);//true
  //无法删除time
  // delete monnitor.time;
  // console.log(monnitor);
  //已经删除_r
  // delete monnitor._r;
  // console.log(monnitor);
  //保护了time属性

  console.log('ownkeys保护time属性', Object.keys(monnitor));
} //Reflect

{
  var _obj = {
    time: '2018-03-28',
    name: 'net',
    _r: 123
  }; //Reflect读取属性

  console.log('Reflect get', Reflect.get(_obj, 'time')); //Reflect设置属性

  Reflect.set(_obj, 'name', 'hello world');
  console.log('Reflect set', _obj); //Reflect判断属性是否存在当前对象

  console.log('Reflect has', Reflect.has(_obj, 'name'));
} //Proxy和Reflxy使用场景

{
  var validator = function validator(target, _validator) {
    return new Proxy(target, {
      _validator: _validator,
      set: function set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          var va = this._validator[key];

          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy);
          } else {
            throw Error("\u4E0D\u80FD\u8BBE\u7F6E".concat(key, "\u5230").concat(value));
          }
        } else {
          throw Error("".concat(key, " \u4E0D\u5B58\u5728"));
        }
      }
    });
  };

  var personValidators = {
    name: function name(val) {
      return typeof val === 'string';
    },
    age: function age(val) {
      return typeof val === 'number' && val > 18;
    },
    mobile: function mobile(val) {}
  };

  var Person = function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    this.mobile = '1111'; //代理Person对象

    return validator(this, personValidators);
  };

  var person = new Person('Kangjie', 23);
  console.log(person); //Proxy {name: "Kangjie", age: 23}

  person.name = 'Kuoguoguo';
  console.log(person);
}