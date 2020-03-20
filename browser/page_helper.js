'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var getBoundingClientRectBy = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page, selector) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return page.$eval(selector, function (el) {
                            var r = el.getBoundingClientRect();
                            return { top: r.top, left: r.left, width: r.width, height: r.height };
                        });

                    case 3:
                        return _context.abrupt('return', _context.sent);

                    case 6:
                        _context.prev = 6;
                        _context.t0 = _context['catch'](0);

                        console.error(_context.t0.message);
                        return _context.abrupt('return', null);

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 6]]);
    }));

    return function getBoundingClientRectBy(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var CDPTouchStart = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(page, x, y) {
        var client, touchPoints;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        if (page) {
                            _context2.next = 3;
                            break;
                        }

                        console.error('no page passed in');
                        return _context2.abrupt('return');

                    case 3:
                        _context2.next = 5;
                        return page.target().createCDPSession();

                    case 5:
                        client = _context2.sent;
                        _context2.next = 8;
                        return client.send('Runtime.evaluate', {
                            expression: 'new Promise(x => requestAnimationFrame(() => requestAnimationFrame(x)))',
                            awaitPromise: true
                        });

                    case 8:
                        touchPoints = [{ x: Math.round(x), y: Math.round(y) }];
                        _context2.next = 11;
                        return client.send('Input.dispatchTouchEvent', {
                            type: 'touchStart',
                            touchPoints: touchPoints
                        });

                    case 11:
                        return _context2.abrupt('return', client);

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function CDPTouchStart(_x3, _x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}();

var CDPTouchMove = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(client, tox, toy) {
        var touchPoints;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        if (client) {
                            _context3.next = 3;
                            break;
                        }

                        console.error('no client passed in');
                        return _context3.abrupt('return');

                    case 3:
                        _context3.next = 5;
                        return client.send('Runtime.evaluate', {
                            expression: 'new Promise(x => requestAnimationFrame(() => requestAnimationFrame(x)))',
                            awaitPromise: true
                        });

                    case 5:

                        console.log('touch move ' + tox + ',' + toy);
                        touchPoints = [{ x: Math.round(tox), y: Math.round(toy) }];
                        _context3.next = 9;
                        return client.send('Input.dispatchTouchEvent', {
                            type: 'touchMove',
                            touchPoints: touchPoints
                        });

                    case 9:
                        return _context3.abrupt('return', client);

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function CDPTouchMove(_x6, _x7, _x8) {
        return _ref3.apply(this, arguments);
    };
}();

var CDPTouchEnd = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(client) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        if (client) {
                            _context4.next = 3;
                            break;
                        }

                        console.error('no client passed in');
                        return _context4.abrupt('return');

                    case 3:
                        _context4.next = 5;
                        return client.send('Runtime.evaluate', {
                            expression: 'new Promise(x => requestAnimationFrame(() => requestAnimationFrame(x)))',
                            awaitPromise: true
                        });

                    case 5:
                        _context4.next = 7;
                        return client.send('Input.dispatchTouchEvent', {
                            type: 'touchEnd',
                            touchPoints: []
                        });

                    case 7:

                        client = null;

                    case 8:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function CDPTouchEnd(_x9) {
        return _ref4.apply(this, arguments);
    };
}();

var scrollPage = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(page) {
        var steps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

        var _ref6, screenwidth, screenheight, innerwidth, innerheight, gap, startX, startY, n, stations, i, x, y, client, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, e, _i, _client, distance;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        console.info('start to scroll page');

                        if (page) {
                            _context5.next = 4;
                            break;
                        }

                        console.error('no page passed in');
                        return _context5.abrupt('return', false);

                    case 4:

                        steps = Math.max(5, steps);

                        _context5.next = 7;
                        return page.evaluate(function () {
                            console.log('screen.width', screen.width);
                            console.log('screen.height', screen.height);
                            console.log('window.innerWidth', window.innerWidth);
                            console.log('window.innerHeight', window.innerHeight);
                            console.log('window.outerWidth', window.outerWidth);
                            console.log('window.outerHeight', window.outerHeight);
                            console.log('window.screenX', window.screenX);
                            console.log('window.screenY', window.screenY);

                            return {
                                screenwidth: screen.width, screenheight: screen.height,
                                innerwidth: window.innerWidth, innerheight: window.innerHeight
                            };
                        });

                    case 7:
                        _ref6 = _context5.sent;
                        screenwidth = _ref6.screenwidth;
                        screenheight = _ref6.screenheight;
                        innerwidth = _ref6.innerwidth;
                        innerheight = _ref6.innerheight;


                        console.info('[x] screenwidth  =', screenwidth);
                        console.info('[x] screenheight =', screenheight);
                        console.info('[x] innerwidth = ', innerwidth);
                        console.info('[x] innerheight = ', innerheight);

                        gap = screenheight / steps >> 0;
                        startX = Math.random() * screenwidth >> 0;
                        startY = screenheight - Math.random() * gap >> 0;
                        n = 0;

                    case 20:
                        if (!(n < 4)) {
                            _context5.next = 61;
                            break;
                        }

                        stations = [];

                        for (i = 0; i < steps; ++i) {
                            x = startX + (Math.random() < 0.3 ? -(Math.random() * 8 >> 0) : Math.random() * 8 >> 0);

                            if (x < 0) x = startX;

                            y = startY - i * gap + (gap * Math.random() >> 0);


                            stations.push({ x: x, y: y });
                        }

                        _context5.next = 25;
                        return CDPTouchStart(page, startX, startY);

                    case 25:
                        client = _context5.sent;
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context5.prev = 29;
                        _iterator = (0, _getIterator3.default)(stations);

                    case 31:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context5.next = 40;
                            break;
                        }

                        e = _step.value;
                        _context5.next = 35;
                        return sleep(200 + 100 * Math.random() >> 0);

                    case 35:
                        _context5.next = 37;
                        return CDPTouchMove(client, e.x, e.y);

                    case 37:
                        _iteratorNormalCompletion = true;
                        _context5.next = 31;
                        break;

                    case 40:
                        _context5.next = 46;
                        break;

                    case 42:
                        _context5.prev = 42;
                        _context5.t0 = _context5['catch'](29);
                        _didIteratorError = true;
                        _iteratorError = _context5.t0;

                    case 46:
                        _context5.prev = 46;
                        _context5.prev = 47;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 49:
                        _context5.prev = 49;

                        if (!_didIteratorError) {
                            _context5.next = 52;
                            break;
                        }

                        throw _iteratorError;

                    case 52:
                        return _context5.finish(49);

                    case 53:
                        return _context5.finish(46);

                    case 54:
                        _context5.next = 56;
                        return sleep(200 + 100 * Math.random() >> 0);

                    case 56:
                        _context5.next = 58;
                        return CDPTouchEnd(client);

                    case 58:
                        ++n;
                        _context5.next = 20;
                        break;

                    case 61:
                        _i = 0;

                    case 62:
                        if (!(_i < 10)) {
                            _context5.next = 83;
                            break;
                        }

                        _context5.next = 65;
                        return CDPTouchStart(page, startX, 0);

                    case 65:
                        _client = _context5.sent;
                        _context5.next = 68;
                        return page.evaluate(function () {
                            return window.scrollY || 10;
                        });

                    case 68:
                        distance = _context5.sent;

                        if (!(distance > 5)) {
                            _context5.next = 74;
                            break;
                        }

                        _context5.next = 72;
                        return CDPTouchMove(_client, startX, startY);

                    case 72:
                        _context5.next = 76;
                        break;

                    case 74:
                        console.info('goback done');
                        return _context5.abrupt('break', 83);

                    case 76:
                        _context5.next = 78;
                        return sleep(150 + 100 * Math.random() >> 0);

                    case 78:
                        _context5.next = 80;
                        return CDPTouchEnd(_client);

                    case 80:
                        ++_i;
                        _context5.next = 62;
                        break;

                    case 83:
                        return _context5.abrupt('return', true);

                    case 84:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[29, 42, 46, 54], [47,, 49, 53]]);
    }));

    return function scrollPage(_x10) {
        return _ref5.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

function sleep(ms) {
    return new _promise2.default(function (resolve) {
        return setTimeout(resolve, ms);
    });
}

function centerPointInRect(rect) {
    if (!rect) return { x: 0, y: 0 };else {
        return {
            x: rect.left + (rect.width / 2.0 >> 0),
            y: rect.top + (rect.height / 2.0 >> 0)
        };
    }
}

function randomPointInRect(rect) {
    if (!rect) return { x: 0, y: 0 };else {
        return {
            x: rect.left + (Math.random() * rect.width >> 0),
            y: rect.top + (Math.random() * rect.height >> 0)
        };
    }
}

module.exports = {
    getBoundingClientRectBy: getBoundingClientRectBy,
    centerPointInRect: centerPointInRect,
    randomPointInRect: randomPointInRect,
    scrollPage: scrollPage,
    CDPTouchStart: CDPTouchStart,
    CDPTouchMove: CDPTouchMove,
    CDPTouchEnd: CDPTouchEnd
};