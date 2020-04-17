'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var getSlideArea = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(page) {
        var _ref3, screenwidth, screenheight, innerwidth, innerheight, width, height, left, top, right, bottom, slideArea;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return page.evaluate(function () {
                            return {
                                screenwidth: screen.width, screenheight: screen.height,
                                innerwidth: window.innerWidth, innerheight: window.innerHeight
                            };
                        });

                    case 2:
                        _ref3 = _context2.sent;
                        screenwidth = _ref3.screenwidth;
                        screenheight = _ref3.screenheight;
                        innerwidth = _ref3.innerwidth;
                        innerheight = _ref3.innerheight;
                        width = screenwidth * (0.2 + 0.1 * Math.random()) >> 0;
                        height = screenheight * (0.4 + 0.1 * Math.random()) >> 0;
                        left = (screenwidth - width) / 2;
                        top = (screenheight - height) / 2;
                        right = left + width;
                        bottom = top + height;
                        slideArea = {
                            meta: { screenwidth: screenwidth, screenheight: screenheight, innerwidth: innerwidth, innerheight: innerheight },
                            top: top >> 0,
                            left: left >> 0,
                            right: right >> 0,
                            bottom: bottom >> 0
                        };


                        LOGV('slideArea', slideArea);
                        return _context2.abrupt('return', slideArea);

                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function getSlideArea(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var util = require('util');

function LOGV(tag, obj) {
    console.log('----------', tag || 'no tag', '----------');
    console.log(util.inspect(obj, { colors: true }));
}

module.exports = {
    getBoundingClientRectBy: getBoundingClientRectBy,
    getSlideArea: getSlideArea,
    LOGV: LOGV
};