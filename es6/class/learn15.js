"use strict";

//generator基本定义 需要babel-polyfill支持
{
  var tell =
  /*#__PURE__*/
  regeneratorRuntime.mark(function tell() {
    return regeneratorRuntime.wrap(function tell$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return 'a';

          case 2:
            _context.next = 4;
            return 'b';

          case 4:
            return _context.abrupt("return", 'c');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, tell);
  });
  var k = tell();
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  console.log(k.next());
  var obj = {};
  obj[Symbol.iterator] =
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return 1;

          case 2:
            _context2.next = 4;
            return 2;

          case 4:
            _context2.next = 6;
            return 3;

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee);
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = obj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      console.log('value', value);
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
} //抽奖逻辑

window.onload = function () {
  var draw = function draw(count) {
    console.log("\u5269\u4F59\u62BD\u5956".concat(count, "\u6B21"));
  }; //防止定义全局变量会耗性能和被修改的风险


  var residue =
  /*#__PURE__*/
  regeneratorRuntime.mark(function residue(count) {
    return regeneratorRuntime.wrap(function residue$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!(count > 0)) {
              _context3.next = 6;
              break;
            }

            count--;
            _context3.next = 4;
            return draw(count);

          case 4:
            _context3.next = 0;
            break;

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, residue);
  });
  var star = residue(5);
  var btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = '抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', function () {
    star.next();
  }, false);
}; //长轮询


{
  var ajax =
  /*#__PURE__*/
  regeneratorRuntime.mark(function ajax() {
    return regeneratorRuntime.wrap(function ajax$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                //resolve({code:0});
                resolve({
                  code: 1
                });
              }, 200);
            });

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, ajax);
  });

  var pull = function pull() {
    var generator = ajax();
    var step = generator.next();
    step.value.then(function (d) {
      if (d.code != 0) {
        setTimeout(function () {
          console.info('查询中');
          pull();
        }, 1000);
      } else {
        console.info(d);
      }
    });
  };

  pull();
}