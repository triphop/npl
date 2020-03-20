'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getSlideData = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(page) {
        var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var slideBtnID, slideBtnRect, slideBottomID, slideBottomRect;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (page) {
                            _context.next = 3;
                            break;
                        }

                        !!log && log.error('page not passed in');
                        return _context.abrupt('return', null);

                    case 3:
                        _context.next = 5;
                        return page.evaluate(function () {
                            var slideBtns = document.querySelectorAll('div[class="vcode-slide-button"]');
                            if (!slideBtns || slideBtns.length < 1) {
                                return null;
                            }

                            var slideBtn = null;
                            for (var i = 0; i < slideBtns.length; ++i) {
                                var x = slideBtns[i];
                                var attr = x.getAttribute('id');
                                if (/vcode\-slide\-button/i.test(attr)) {
                                    return attr;
                                }
                            }

                            return null;
                        });

                    case 5:
                        slideBtnID = _context.sent;

                        if (slideBtnID) {
                            _context.next = 17;
                            break;
                        }

                        !!log && log.warn('failed to find out vcode-slide-button');
                        _context.t0 = !!log;

                        if (!_context.t0) {
                            _context.next = 16;
                            break;
                        }

                        _context.t1 = log;
                        _context.t2 = 'url - ' + page.url();
                        _context.next = 14;
                        return page.content();

                    case 14:
                        _context.t3 = _context.sent;

                        _context.t1.info.call(_context.t1, 'vcode-slide-button page content', _context.t2, _context.t3);

                    case 16:
                        return _context.abrupt('return', null);

                    case 17:
                        _context.next = 19;
                        return pageHelper.getBoundingClientRectBy(page, '#' + slideBtnID);

                    case 19:
                        slideBtnRect = _context.sent;
                        slideBottomID = slideBtnID.replace('vcode-slide-button', 'vcode-slide-bottom');
                        _context.next = 23;
                        return pageHelper.getBoundingClientRectBy(page, '#' + slideBottomID);

                    case 23:
                        slideBottomRect = _context.sent;
                        return _context.abrupt('return', { slideBtnID: slideBtnID, slideBtnRect: slideBtnRect, slideBottomID: slideBottomID, slideBottomRect: slideBottomRect });

                    case 25:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function getSlideData(_x) {
        return _ref.apply(this, arguments);
    };
}();

var slide2unlock = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(page) {
        var _this = this;

        var log = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var slideData, buttonRect, distancePix, r, startPoint;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        if (page) {
                            _context4.next = 3;
                            break;
                        }

                        !!log && log.error('page not passed in');
                        return _context4.abrupt('return', false);

                    case 3:
                        _context4.next = 5;
                        return getSlideData(page, log);

                    case 5:
                        slideData = _context4.sent;

                        if (slideData) {
                            _context4.next = 9;
                            break;
                        }

                        !!log && log.warn('failed to get slide button rect');
                        return _context4.abrupt('return', false);

                    case 9:
                        buttonRect = slideData.slideBtnRect;
                        distancePix = slideData.slideBottomRect.width - slideData.slideBtnRect.width;
                        r = slideData.slideBtnRect;
                        startPoint = pageHelper.randomPointInRect({
                            top: r.top + 5,
                            left: r.left + 5,
                            width: r.width - 10,
                            height: r.height - 10
                        });
                        _context4.next = 15;
                        return new _promise2.default(function () {
                            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(resolve) {
                                var client, interpolator;
                                return _regenerator2.default.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                _context3.next = 2;
                                                return pageHelper.CDPTouchStart(page, startPoint.x, startPoint.y);

                                            case 2:
                                                client = _context3.sent;
                                                interpolator = new Interpolator([400, 412, 435, 476, 478, 481, 483, 488, 492, 497, 500], log);

                                                interpolator.setCallback(function () {
                                                    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(x, y, ongoing) {
                                                        var toX, toY;
                                                        return _regenerator2.default.wrap(function _callee2$(_context2) {
                                                            while (1) {
                                                                switch (_context2.prev = _context2.next) {
                                                                    case 0:
                                                                        toX = Interpolator.getAbsX(startPoint, distancePix, y);
                                                                        toY = Interpolator.getAbsY(startPoint, buttonRect, x);


                                                                        !!log && log.info('touchmove ---> (' + toX + ', ' + toY + ')');
                                                                        _context2.next = 5;
                                                                        return pageHelper.CDPTouchMove(client, toX, toY);

                                                                    case 5:
                                                                        if (ongoing) {
                                                                            _context2.next = 12;
                                                                            break;
                                                                        }

                                                                        _context2.next = 8;
                                                                        return pageHelper.CDPTouchMove(client, startPoint.x + distancePix, startPoint.y);

                                                                    case 8:
                                                                        _context2.next = 10;
                                                                        return pageHelper.CDPTouchEnd(client);

                                                                    case 10:
                                                                        client = null;

                                                                        resolve();

                                                                    case 12:
                                                                    case 'end':
                                                                        return _context2.stop();
                                                                }
                                                            }
                                                        }, _callee2, _this);
                                                    }));

                                                    return function (_x6, _x7, _x8) {
                                                        return _ref4.apply(this, arguments);
                                                    };
                                                }());

                                                interpolator.start(2000);

                                            case 6:
                                            case 'end':
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, _this);
                            }));

                            return function (_x5) {
                                return _ref3.apply(this, arguments);
                            };
                        }());

                    case 15:

                        !!log && log.info('DONE');

                    case 16:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this);
    }));

    return function slide2unlock(_x3) {
        return _ref2.apply(this, arguments);
    };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('babel-polyfill');

var Interpolator = require('./interpolator');
var pageHelper = require('./page_helper');

module.exports = {
    slide2unlock: slide2unlock
};