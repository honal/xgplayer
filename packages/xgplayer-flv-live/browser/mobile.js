window["FlvPlayer"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/events/events.js":
/*!*******************************************************************************************!*\
  !*** /Users/jiangyuqing/Desktop/Projects/devspace/xgplayer/node_modules/events/events.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
  return Function.prototype.apply.call(target, receiver, args);
};

var ReflectOwnKeys;
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys;
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
};

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function () {
    return defaultMaxListeners;
  },
  set: function (arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function () {

  if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = type === 'error';

  var events = this._events;
  if (events !== undefined) doError = doError && events.error === undefined;else if (!doError) return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0) er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined) return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i) ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type, listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = $getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' + existing.length + ' ' + String(type) + ' listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener = function prependListener(type, listener) {
  return _addListener(this, type, listener, true);
};

function onceWrapper() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) args.push(arguments[i]);
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    ReflectApply(this.listener, this.target, args);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
  this.prependListener(type, _onceWrap(this, type, listener));
  return this;
};

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener = function removeListener(type, listener) {
  var list, events, position, i, originalListener;

  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }

  events = this._events;
  if (events === undefined) return this;

  list = events[type];
  if (list === undefined) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = Object.create(null);else {
      delete events[type];
      if (events.removeListener) this.emit('removeListener', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (position === 0) list.shift();else {
      spliceOne(list, position);
    }

    if (list.length === 1) events[type] = list[0];

    if (events.removeListener !== undefined) this.emit('removeListener', type, originalListener || listener);
  }

  return this;
};

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
  var listeners, events, i;

  events = this._events;
  if (events === undefined) return this;

  // not listening for removeListener, no need to emit
  if (events.removeListener === undefined) {
    if (arguments.length === 0) {
      this._events = Object.create(null);
      this._eventsCount = 0;
    } else if (events[type] !== undefined) {
      if (--this._eventsCount === 0) this._events = Object.create(null);else delete events[type];
    }
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    var keys = Object.keys(events);
    var key;
    for (i = 0; i < keys.length; ++i) {
      key = keys[i];
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = Object.create(null);
    this._eventsCount = 0;
    return this;
  }

  listeners = events[type];

  if (typeof listeners === 'function') {
    this.removeListener(type, listeners);
  } else if (listeners !== undefined) {
    // LIFO order
    for (i = listeners.length - 1; i >= 0; i--) {
      this.removeListener(type, listeners[i]);
    }
  }

  return this;
};

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined) return [];

  var evlistener = events[type];
  if (evlistener === undefined) return [];

  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function (emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i) copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++) list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

/***/ }),

/***/ "../xgplayer-buffer/index.js":
/*!***********************************!*\
  !*** ../xgplayer-buffer/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Track: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").default,
  Tracks: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").Tracks,
  AudioTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").AudioTrack,
  VideoTrack: __webpack_require__(/*! ./src/track */ "../xgplayer-buffer/src/track.js").VideoTrack,

  XgBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").XgBuffer,
  RemuxBuffer: __webpack_require__(/*! ./src/buffer */ "../xgplayer-buffer/src/buffer.js").RemuxBuffer,

  PreSource: __webpack_require__(/*! ./src/presouce */ "../xgplayer-buffer/src/presouce.js").default
};

/***/ }),

/***/ "../xgplayer-buffer/src/buffer.js":
/*!****************************************!*\
  !*** ../xgplayer-buffer/src/buffer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class XgBuffer {
  /**
   * A buffer to store loaded data.
   *
   * @class LoaderBuffer
   * @param {number} length - Optional the buffer size
   */
  constructor(length) {
    this.length = length || 0;
    this.historyLen = length || 0;
    this.array = [];
    this.offset = 0;
  }

  /**
   * The function to push data.
   *
   * @param {number} data - The data to push into the buffer
   */
  push(data) {
    this.array.push(data);
    this.length += data.byteLength;
    this.historyLen += data.byteLength;
  }

  /**
   * The function to shift data.
   *
   * @param {number} length - The size of shift.
   */
  shift(length) {
    if (this.array.length < 1) {
      return new Uint8Array(0);
    }

    if (length === undefined) {
      return this._shiftBuffer();
    }
    if (this.offset + length === this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset = 0;
      this.array.shift();
      this.length -= length;
      return ret;
    }

    if (this.offset + length < this.array[0].length) {
      let ret = this.array[0].slice(this.offset, this.offset + length);
      this.offset += length;
      this.length -= length;
      return ret;
    }

    let ret = new Uint8Array(length);
    let tmpoff = 0;
    while (this.array.length > 0 && length > 0) {
      if (this.offset + length < this.array[0].length) {
        let tmp = this.array[0].slice(this.offset, this.offset + length);
        ret.set(tmp, tmpoff);
        this.offset += length;
        this.length -= length;
        length = 0;
        break;
      } else {
        let templength = this.array[0].length - this.offset;
        ret.set(this.array[0].slice(this.offset, this.array[0].length), tmpoff);
        this.array.shift();
        this.offset = 0;
        tmpoff += templength;
        this.length -= templength;
        length -= templength;
      }
    }
    return ret;
  }

  /**
   * Function to clear the buffer.
   */
  clear() {
    this.array = [];
    this.length = 0;
    this.offset = 0;
  }

  destroy() {
    this.clear();
    this.historyLen = 0;
  }

  /**
   * Function to shift one unit8Array.
   */
  _shiftBuffer() {
    this.length -= this.array[0].length;
    this.offset = 0;
    return this.array.shift();
  }

  /**
   * Convert uint8 data to number.
   *
   * @param {number} start - the start postion.
   * @param {number} length - the length of data.
   */
  toInt(start, length) {
    let retInt = 0;
    let i = this.offset + start;
    while (i < this.offset + length + start) {
      if (i < this.array[0].length) {
        retInt = retInt * 256 + this.array[0][i];
      } else if (this.array[1]) {
        retInt = retInt * 256 + this.array[1][i - this.array[0].length];
      }

      i++;
    }
    return retInt;
  }
}

exports.XgBuffer = XgBuffer;
class RemuxBuffer {
  constructor() {
    this.video = [];
    this.audio = [];
  }

  destroy() {
    this.video = [];
    this.audio = [];
  }
}
exports.RemuxBuffer = RemuxBuffer;

/***/ }),

/***/ "../xgplayer-buffer/src/presouce.js":
/*!******************************************!*\
  !*** ../xgplayer-buffer/src/presouce.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Source {
  constructor() {
    this.mimetype = '';
    this.init = null;
    this.data = [];
  }
}

class PreSource {
  constructor() {
    this.sources = {};
  }

  getSource(source) {
    return this.sources[source];
  }

  createSource(name) {
    this.sources[name] = new Source();
    return this.sources[name];
  }

  clear() {
    this.sources = {};
  }

  destroy() {
    this.sources = {};
  }
}

exports.default = PreSource;

/***/ }),

/***/ "../xgplayer-buffer/src/track.js":
/*!***************************************!*\
  !*** ../xgplayer-buffer/src/track.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Track {
  /**
   * The constructor.
   */
  constructor() {
    this.id = -1;
    this.sequenceNumber = 0;
    this.samples = [];
    this.droppedSamples = [];
    this.length = 0;
  }

  /**
   * Reset the track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
  }
  /**
   * destroy the track.
   */
  distroy() {
    this.reset();
    this.id = -1;
  }
}

exports.default = Track;
class AudioTrack extends Track {
  /**
   * The constructor for audio track.
   */
  constructor() {
    super();
    this.TAG = 'AudioTrack';
    this.type = 'audio';
  }
}

exports.AudioTrack = AudioTrack;
class VideoTrack extends Track {
  /**
   * The constructor for video track.
   */
  constructor() {
    super();
    this.TAG = 'VideoTrack';
    this.type = 'video';
    this.dropped = 0;
  }
  /**
   * reset the video track.
   */
  reset() {
    this.sequenceNumber = 0;
    this.samples = [];
    this.length = 0;
    this.dropped = 0;
  }
}

exports.VideoTrack = VideoTrack;
class Tracks {
  constructor() {
    this.audioTrack = null;
    this.videoTrack = null;
  }

  destroy() {
    this.audioTrack = null;
    this.videoTrack = null;
  }
}
exports.Tracks = Tracks;

/***/ }),

/***/ "../xgplayer-codec/index.js":
/*!**********************************!*\
  !*** ../xgplayer-codec/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Nalunit: __webpack_require__(/*! ./src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js").default,
  SpsParser: __webpack_require__(/*! ./src/h264/nalunit/sps */ "../xgplayer-codec/src/h264/nalunit/sps.js").default,

  Compatibility: __webpack_require__(/*! ./src/compatibility */ "../xgplayer-codec/src/compatibility.js").default
};

/***/ }),

/***/ "../xgplayer-codec/src/aac/aac-helper.js":
/*!***********************************************!*\
  !*** ../xgplayer-codec/src/aac/aac-helper.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

class AAC {

  static getSilentFrame(codec, channelCount) {
    if (codec === 'mp4a.40.2') {
      // handle LC-AAC
      if (channelCount === 1) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
      } else if (channelCount === 2) {
        return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
      } else if (channelCount === 3) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
      } else if (channelCount === 4) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
      } else if (channelCount === 5) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
      } else if (channelCount === 6) {
        return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
      }
    } else {
      // handle HE-AAC (mp4a.40.5 / mp4a.40.29)
      if (channelCount === 1) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0:d=0.05" -c:a libfdk_aac -profile:a aac_he -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x4e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x1c, 0x6, 0xf1, 0xc1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 2) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      } else if (channelCount === 3) {
        // ffmpeg -y -f lavfi -i "aevalsrc=0|0|0:d=0.05" -c:a libfdk_aac -profile:a aac_he_v2 -b:a 4k output.aac && hexdump -v -e '16/1 "0x%x," "\n"' -v output.aac
        return new Uint8Array([0x1, 0x40, 0x22, 0x80, 0xa3, 0x5e, 0xe6, 0x80, 0xba, 0x8, 0x0, 0x0, 0x0, 0x0, 0x95, 0x0, 0x6, 0xf1, 0xa1, 0xa, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5a, 0x5e]);
      }
    }
    return null;
  }

}

exports.default = AAC;

/***/ }),

/***/ "../xgplayer-codec/src/compatibility.js":
/*!**********************************************!*\
  !*** ../xgplayer-codec/src/compatibility.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _aacHelper = __webpack_require__(/*! ./aac/aac-helper */ "../xgplayer-codec/src/aac/aac-helper.js");

var _aacHelper2 = _interopRequireDefault(_aacHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { REMUX_EVENTS, DEMUX_EVENTS } = _xgplayerUtils.EVENTS;

class Compatibility {
  constructor() {
    this.nextAudioDts = 0; // 模拟下一段音频数据的dts
    this.nextVideoDts = 0; // 模拟下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    this.allAudioSamplesCount = 0; // 音频总数据量(原始帧)
    this.allVideoSamplesCount = 0; // 视频总数据量(原始帧)

    this._firstAudioSample = null;
    this._firstVideoSample = null;

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）

    this._videoLargeGap = 0;
    this._audioLargeGap = 0;
  }

  init() {
    this.before(REMUX_EVENTS.REMUX_MEDIA, this.doFix.bind(this));
  }

  reset() {
    this.nextAudioDts = null; // 估算下一段音频数据的dts
    this.nextVideoDts = null; // 估算下一段视频数据的dts

    this.lastAudioSamplesLen = 0; // 上一段音频数据的长度
    this.lastVideoSamplesLen = 0; // 上一段视频数据的长度

    this.lastVideoDts = undefined; // 上一段音频数据的长度
    this.lastAudioDts = undefined; // 上一段视频数据的长度

    // this.allAudioSamplesCount = 0 // 音频总数据量(原始帧)
    // this.allVideoSamplesCount = 0 // 视频总数据量(原始帧)

    // this._firstAudioSample = null
    // this._firstVideoSample = null

    this.filledAudioSamples = []; // 补充音频帧（）
    this.filledVideoSamples = []; // 补充视频帧（）
  }

  doFix() {
    const { isFirstAudioSamples, isFirstVideoSamples } = this.getFirstSample();

    // this.removeInvalidSamples()

    this.recordSamplesCount();

    if (this._firstVideoSample) {
      this.fixRefSampleDuration(this.videoTrack.meta, this.videoTrack.samples);
    }
    if (this._firstAudioSample) {
      this.fixRefSampleDuration(this.audioTrack.meta, this.audioTrack.samples);
    }

    const { changed: videoChanged, changedIdx: videoChangedIdx } = Compatibility.detactChangeStream(this.videoTrack.samples);
    if (videoChanged && !isFirstAudioSamples) {
      this.fixChangeStreamVideo(videoChangedIdx);
    } else {
      this.doFixVideo(isFirstVideoSamples);
    }

    const { changed: audioChanged, changedIdx: audioChangedIdx } = Compatibility.detactChangeStream(this.audioTrack.samples);
    if (audioChanged) {
      this.fixChangeStreamAudio(audioChangedIdx);
    } else {
      this.doFixAudio(isFirstAudioSamples);
    }

    // this.removeInvalidSamples()
  }

  doFixVideo(first, streamChangeStart) {
    let { samples: videoSamples, meta } = this.videoTrack;

    if (meta.frameRate && meta.frameRate.fixed === false) {
      return;
    }

    if (!videoSamples || !videoSamples.length || !this._firstVideoSample) {
      return;
    }

    // console.log(`video lastSample, ${videoSamples[videoSamples.length - 1].dts}`)

    const firstSample = videoSamples[0];

    const samplesLen = videoSamples.length;

    // step0.修复hls流出现巨大gap，需要强制重定位的问题
    if (this._videoLargeGap > 0) {
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    if (firstSample.dts !== this._firstVideoSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextVideoDts, firstSample))) {
      if (streamChangeStart) {
        this.nextVideoDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }

      this._videoLargeGap = this.nextVideoDts - firstSample.dts;
      Compatibility.doFixLargeGap(videoSamples, this._videoLargeGap);
    }

    const firstDts = firstSample.dts;

    // step1. 修复与audio首帧差距太大的问题
    if (first && this._firstAudioSample) {
      const videoFirstDts = this._firstVideoSample.dts;
      const audioFirstDts = this._firstAudioSample.dts;
      const gap = videoFirstDts - audioFirstDts;
      if (gap > 2 * meta.refSampleDuration) {
        const fillCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillCount; i++) {
          const clonedFirstSample = Object.assign({}, firstSample); // 视频头部帧缺失需要复制第一帧
          // 重新计算sample的dts和pts
          clonedFirstSample.dts = videoFirstDts - (i + 1) * meta.refSampleDuration;
          clonedFirstSample.pts = clonedFirstSample.dts + clonedFirstSample.cts;

          videoSamples.unshift(clonedFirstSample);

          this.filledVideoSamples.push({
            dts: clonedFirstSample.dts,
            size: clonedFirstSample.data.byteLength
          });
        }
      }
    }

    let gap;
    // step2. 修复samples段之间的间距问题、
    if (this.nextVideoDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于2帧时进行补帧
      gap = firstDts - this.nextVideoDts;
      const absGap = Math.abs(gap);
      if (gap > 2 * meta.refSampleDuration) {
        const fillFrameCount = Math.floor(gap / meta.refSampleDuration);

        for (let i = 0; i < fillFrameCount; i++) {
          const clonedSample = Object.assign({}, videoSamples[0]);
          const computed = firstDts - (i + 1) * meta.refSampleDuration;

          clonedSample.dts = computed > this.nextVideoDts ? computed : this.nextVideoDts; // 补的第一帧一定要是nextVideoDts
          clonedSample.pts = clonedSample.dts + clonedSample.cts;

          this.videoTrack.samples.unshift(clonedSample);

          this.filledVideoSamples.push({
            dts: clonedSample.dts,
            size: clonedSample.data.byteLength
          });
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距在+-一帧之间时将第一帧的dts强行定位到期望位置
        // console.log('重定位视频帧dts', videoSamples[0].dts, this.nextVideoDts)
        videoSamples[0].dts = this.nextVideoDts;
        videoSamples[0].originDts = videoSamples[0].dts;
        videoSamples[0].cts = videoSamples[0].cts !== undefined ? videoSamples[0].cts : videoSamples[0].pts - videoSamples[0].dts;
        videoSamples[0].pts = videoSamples[0].dts + videoSamples[0].cts;
      } else if (gap < 0) {
        // 出现大的gap
        Compatibility.doFixLargeGap(videoSamples, -1 * gap);
      }
    }
    const lastDts = videoSamples[videoSamples.length - 1].dts;

    const lastSampleDuration = videoSamples.length >= 2 ? lastDts - videoSamples[videoSamples.length - 2].dts : meta.refSampleDuration;

    this.lastVideoSamplesLen = samplesLen;
    this.nextVideoDts = lastDts + lastSampleDuration;
    this.lastVideoDts = lastDts;

    // step2. 修复sample段之内的间距问题
    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = videoSamples.length; i < len; i++) {
      const current = videoSamples[i];
      const next = videoSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;

      if (duration > 2 * meta.refSampleDuration) {
        // 两帧之间间隔太大，需要补空白帧
        let fillFrameCount = Math.floor(duration / meta.refSampleDuration);

        let fillFrameIdx = 0;
        while (fillFrameIdx < fillFrameCount) {
          const fillFrame = Object.assign({}, next);
          fillFrame.dts = current.dts + (fillFrameIdx + 1) * meta.refSampleDuration;
          fillFrame.pts = fillFrame.dts + fillFrame.cts;
          if (fillFrame < next.dts) {
            videoSamples.splice(i, 0, fillFrame);

            this.filledVideoSamples.push({
              dts: fillFrame.dts,
              size: fillFrame.data.byteLength
            });
          }

          fillFrameIdx++;
          i++;
        }
      }
    }

    this.videoTrack.samples = videoSamples;
  }

  doFixAudio(first, streamChangeStart) {
    let { samples: audioSamples, meta } = this.audioTrack;

    if (!audioSamples || !audioSamples.length) {
      return;
    }
    // console.log(`audio lastSample, ${audioSamples[audioSamples.length - 1].dts}`)

    const samplesLen = audioSamples.length;
    const silentFrame = _aacHelper2.default.getSilentFrame(meta.codec, meta.channelCount);

    const firstSample = this._firstAudioSample;

    const _firstSample = audioSamples[0];
    // 对audioSamples按照dts做排序
    // audioSamples = Compatibility.sortAudioSamples(audioSamples)
    if (this._audioLargeGap > 0) {
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }

    if (_firstSample.dts !== this._firstAudioSample.dts && (streamChangeStart || Compatibility.detectLargeGap(this.nextAudioDts, _firstSample))) {
      if (streamChangeStart) {
        this.nextAudioDts = streamChangeStart; // FIX: Hls中途切codec，在如果直接seek到后面的点会导致largeGap计算失败
      }
      this._audioLargeGap = this.nextAudioDts - _firstSample.dts;
      Compatibility.doFixLargeGap(audioSamples, this._audioLargeGap);
    }
    // step0. 首帧与video首帧间距大的问题
    if (this._firstVideoSample && first) {
      const videoFirstPts = this._firstVideoSample.pts ? this._firstVideoSample.pts : this._firstVideoSample.dts + this._firstVideoSample.cts;

      if (firstSample.dts - videoFirstPts > meta.refSampleDuration) {
        const silentSampleCount = Math.floor((firstSample.dts - videoFirstPts) / meta.refSampleDuration);

        for (let i = 0; i < silentSampleCount; i++) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: firstSample.dts - (i + 1) * meta.refSampleDuration,
            filtered: 0
          };

          audioSamples.unshift(silentSample);

          this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          });
        }
      }
    }

    let gap;
    const firstDts = audioSamples[0].dts;

    if (this.nextAudioDts) {
      // step1. 处理samples段之间的丢帧情况
      // 当发现duration差距大于1帧时进行补帧
      gap = firstDts - this.nextAudioDts;
      const absGap = Math.abs(gap);

      if (absGap > meta.refSampleDuration && samplesLen === 1 && this.lastAudioSamplesLen === 1) {
        meta.refSampleDurationFixed = undefined;
      }

      if (gap > 2 * meta.refSampleDuration) {
        if (samplesLen === 1 && this.lastAudioSamplesLen === 1) {
          // 如果sample的length一直是1，而且一直不符合refSampleDuration，需要动态修改refSampleDuration
          meta.refSampleDurationFixed = meta.refSampleDurationFixed !== undefined ? meta.refSampleDurationFixed + gap : meta.refSampleDuration + gap;
        } else {
          const silentFrameCount = Math.floor(gap / meta.refSampleDuration);

          for (let i = 0; i < silentFrameCount; i++) {
            const computed = firstDts - (i + 1) * meta.refSampleDuration;
            const silentSample = Object.assign({}, audioSamples[0], {
              dts: computed > this.nextAudioDts ? computed : this.nextAudioDts
            });

            this.filledAudioSamples.push({
              dts: silentSample.dts,
              size: silentSample.data.byteLength
            });
            this.audioTrack.samples.unshift(silentSample);
          }
        }
      } else if (absGap <= meta.refSampleDuration && absGap > 0) {
        // 当差距比较小的时候将音频帧重定位
        // console.log('重定位音频帧dts', audioSamples[0].dts, this.nextAudioDts)
        audioSamples[0].dts = this.nextAudioDts;
        audioSamples[0].pts = this.nextAudioDts;
      } else if (gap < 0) {
        Compatibility.doFixLargeGap(audioSamples, -1 * gap);
      }
    }
    const lastDts = audioSamples[audioSamples.length - 1].dts;
    const lastSampleDuration = audioSamples.length >= 2 ? lastDts - audioSamples[audioSamples.length - 2].dts : meta.refSampleDuration;

    this.lastAudioSamplesLen = samplesLen;
    this.nextAudioDts = meta.refSampleDurationFixed ? lastDts + meta.refSampleDurationFixed : lastDts + lastSampleDuration;
    this.lastAudioDts = lastDts;

    // step3. 修复samples段内部的dts异常问题
    for (let i = 0, len = audioSamples.length; i < len; i++) {
      const current = audioSamples[i];
      const next = audioSamples[i + 1];

      if (!next) {
        break;
      }

      const duration = next.dts - current.dts;
      audioSamples[i].duration = duration;
      /*
      if (duration > (2 * meta.refSampleDuration)) {
        // 两帧之间间隔太大，需要补空白帧
        /**
        let silentFrameCount = Math.floor(duration / meta.refSampleDuration)
        let frameIdx = 0
         while (frameIdx < silentFrameCount) {
          const silentSample = {
            data: silentFrame,
            datasize: silentFrame.byteLength,
            dts: current.dts + (frameIdx + 1) * meta.refSampleDuration,
            filtered: 0,
            isSilent: true
          }
           audioSamples.splice(i, 0, silentSample)
           this.filledAudioSamples.push({
            dts: silentSample.dts,
            size: silentSample.data.byteLength
          })
           frameIdx++
          i++ // 不对静音帧做比较
        }
      } */
    }

    this.audioTrack.samples = Compatibility.sortAudioSamples(audioSamples);
  }

  fixChangeStreamVideo(changeIdx) {
    const { samples, meta } = this.videoTrack;
    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixVideo(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.videoTrack.samples = samples.slice(0, changeIdx);

    this.doFixVideo(false);

    this.videoTrack.samples = samples.slice(changeIdx);

    this.doFixVideo(false, streamChangeStart);

    this.videoTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  fixChangeStreamAudio(changeIdx) {
    const { samples, meta } = this.audioTrack;

    const prevDts = changeIdx === 0 ? this.getStreamChangeStart(samples[0]) : samples[changeIdx - 1].dts;
    const curDts = samples[changeIdx].dts;
    const isContinue = Math.abs(prevDts - curDts) <= 2 * meta.refSampleDuration;

    if (isContinue) {
      if (!samples[changeIdx].options) {
        samples[changeIdx].options = {
          isContinue: true
        };
      } else {
        samples[changeIdx].options.isContinue = true;
      }
      return this.doFixAudio(false);
    }

    const firstPartSamples = samples.slice(0, changeIdx);
    const secondPartSamples = samples.slice(changeIdx);
    const firstSample = samples[0];

    const changeSample = secondPartSamples[0];
    const firstPartDuration = changeSample.dts - firstSample.dts;
    const streamChangeStart = firstSample.options && firstSample.options.start + firstPartDuration ? firstSample.options.start : null;

    this.audioTrack.samples = firstPartSamples;

    this.doFixAudio(false);

    this.audioTrack.samples = secondPartSamples;

    this.doFixAudio(false, streamChangeStart);

    this.audioTrack.samples = firstPartSamples.concat(secondPartSamples);
  }

  getFirstSample() {
    // 获取video和audio的首帧数据
    let { samples: videoSamples } = this.videoTrack;
    let { samples: audioSamples } = this.audioTrack;

    let isFirstVideoSamples = false;
    let isFirstAudioSamples = false;

    if (!this._firstVideoSample && videoSamples.length) {
      this._firstVideoSample = Compatibility.findFirstVideoSample(videoSamples);
      isFirstVideoSamples = true;
    }

    if (!this._firstAudioSample && audioSamples.length) {
      this._firstAudioSample = Compatibility.findFirstAudioSample(audioSamples); // 寻找dts最小的帧作为首个音频帧
      isFirstAudioSamples = true;
    }

    return {
      isFirstVideoSamples,
      isFirstAudioSamples
    };
  }

  /**
   * 在没有refSampleDuration的问题流中，
   */
  fixRefSampleDuration(meta, samples) {
    const isVideo = meta.type === 'video';
    const allSamplesCount = isVideo ? this.allVideoSamplesCount : this.allAudioSamplesCount;
    const firstDts = isVideo ? this._firstVideoSample.dts : this._firstAudioSample.dts;
    const filledSamplesCount = isVideo ? this.filledVideoSamples.length : this.filledAudioSamples.length;

    if (!meta.refSampleDuration || meta.refSampleDuration <= 0 || Number.isNaN(meta.refSampleDuration)) {
      if (samples.length >= 1) {
        const lastDts = samples[samples.length - 1].dts;

        meta.refSampleDuration = Math.floor((lastDts - firstDts) / (allSamplesCount + filledSamplesCount - 1)); // 将refSampleDuration重置为计算后的平均值
      }
    } else if (meta.refSampleDuration) {
      if (samples.length >= 5) {
        const lastDts = samples[samples.length - 1].dts;
        const firstDts = samples[0].dts;
        const durationAvg = (lastDts - firstDts) / (samples.length - 1);

        meta.refSampleDuration = Math.floor(Math.abs(meta.refSampleDuration - durationAvg) <= 5 ? meta.refSampleDuration : durationAvg); // 将refSampleDuration重置为计算后的平均值
      }
    }
  }

  /**
   * 记录截止目前一共播放了多少帧
   */
  recordSamplesCount() {
    const { audioTrack, videoTrack } = this;

    this.allAudioSamplesCount += audioTrack.samples.length;
    this.allVideoSamplesCount += videoTrack.samples.length;
  }

  /**
   * 去除不合法的帧（倒退、重复帧）
   */
  removeInvalidSamples() {
    const { _firstVideoSample, _firstAudioSample } = this;

    this.audioTrack.samples = this.audioTrack.samples.filter(sample => {
      return sample.dts >= _firstAudioSample.dts && (this.lastAudioDts === undefined || sample.dts > this.lastAudioDts);
    });

    this.videoTrack.samples = this.videoTrack.samples.filter(sample => {
      return sample.dts >= _firstVideoSample.dts && (this.lastVideoDts === undefined || sample.dts > this.lastVideoDts);
    });
  }

  getStreamChangeStart(sample) {
    if (sample.options && sample.options.start) {
      return sample.options.start - this.dtsBase;
    }
    return Infinity;
  }

  static sortAudioSamples(samples) {
    if (samples.length === 1) {
      return samples;
    }

    return samples.sort((a, b) => {
      return a.dts - b.dts;
    });
  }

  /**
   * 寻找dts最小的sample
   * @param samples
   */
  static findFirstAudioSample(samples) {
    if (!samples || samples.length === 0) {
      return null;
    }

    return Compatibility.sortAudioSamples(samples)[0];
  }

  static findFirstVideoSample(samples) {
    if (!samples.length) {
      return null;
    }

    const sorted = samples.sort((a, b) => {
      return a.dts - b.dts;
    });

    for (let i = 0, len = sorted.length; i < len; i++) {
      if (sorted[i].isKeyframe) {
        return sorted[i];
      }
    }
  }

  static detectLargeGap(nextDts, firstSample) {
    if (nextDts === null) {
      return;
    }
    const curDts = firstSample.dts || 0;
    const cond1 = nextDts - curDts >= 1000 || curDts - nextDts >= 1000; // fix hls流出现大量流dts间距问题
    const cond2 = firstSample.options && firstSample.options.discontinue;

    return cond1 || cond2;
  }

  static doFixLargeGap(samples, gap) {
    for (let i = 0, len = samples.length; i < len; i++) {
      const sample = samples[i];
      sample.dts += gap;
      if (sample.pts) {
        sample.pts += gap;
      }
    }
  }

  /**
   * 中途换流
   */
  static detactChangeStream(samples) {
    let changed = false;
    let changedIdx = -1;
    for (let i = 0, len = samples.length; i < len; i++) {
      if (samples[i].options && samples[i].options.meta) {
        changed = true;
        changedIdx = i;
        break;
      }
    }

    return {
      changed,
      changedIdx
    };
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get audioTrack() {
    if (this.tracks) {
      return this.tracks.audioTrack;
    }
    return null;
  }

  get videoTrack() {
    if (this.tracks) {
      return this.tracks.videoTrack;
    }
    return null;
  }

  get dtsBase() {
    const remuxer = this._context.getInstance('MP4_REMUXER');
    if (remuxer) {
      return remuxer._dtsBase;
    }
    return 0;
  }
}
exports.default = Compatibility;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/golomb.js":
/*!****************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/golomb.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Golomb {
  constructor(uint8array) {
    this.TAG = 'Golomb';
    this._buffer = uint8array;
    this._bufferIndex = 0;
    this._totalBytes = uint8array.byteLength;
    this._totalBits = uint8array.byteLength * 8;
    this._currentWord = 0;
    this._currentWordBitsLeft = 0;
  }

  destroy() {
    this._buffer = null;
  }

  _fillCurrentWord() {
    let bufferBytesLeft = this._totalBytes - this._bufferIndex;
    if (bufferBytesLeft <= 0) {
      // TODO 异常处理
    }

    let bytesRead = Math.min(4, bufferBytesLeft);
    let word = new Uint8Array(4);
    word.set(this._buffer.subarray(this._bufferIndex, this._bufferIndex + bytesRead));
    this._currentWord = new DataView(word.buffer).getUint32(0);

    this._bufferIndex += bytesRead;
    this._currentWordBitsLeft = bytesRead * 8;
  }

  readBits(size) {
    let bits = Math.min(this._currentWordBitsLeft, size); // :uint
    let valu = this._currentWord >>> 32 - bits;
    if (size > 32) {
      throw new Error('Cannot read more than 32 bits at a time');
    }
    this._currentWordBitsLeft -= bits;
    if (this._currentWordBitsLeft > 0) {
      this._currentWord <<= bits;
    } else if (this._totalBytes - this._bufferIndex > 0) {
      this._fillCurrentWord();
    }

    bits = size - bits;
    if (bits > 0 && this._currentWordBitsLeft) {
      return valu << bits | this.readBits(bits);
    } else {
      return valu;
    }
  }

  readBool() {
    return this.readBits(1) === 1;
  }

  readByte() {
    return this.readBits(8);
  }

  _skipLeadingZero() {
    let zeroCount;
    for (zeroCount = 0; zeroCount < this._currentWordBitsLeft; zeroCount++) {
      if ((this._currentWord & 0x80000000 >>> zeroCount) !== 0) {
        this._currentWord <<= zeroCount;
        this._currentWordBitsLeft -= zeroCount;
        return zeroCount;
      }
    }
    this._fillCurrentWord();
    return zeroCount + this._skipLeadingZero();
  }

  readUEG() {
    // unsigned exponential golomb
    let leadingZeros = this._skipLeadingZero();
    return this.readBits(leadingZeros + 1) - 1;
  }

  readSEG() {
    // signed exponential golomb
    let value = this.readUEG();
    if (value & 0x01) {
      return value + 1 >>> 1;
    } else {
      return -1 * (value >>> 1);
    }
  }
}

exports.default = Golomb;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/index.js":
/*!***************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sps = __webpack_require__(/*! ./sps */ "../xgplayer-codec/src/h264/nalunit/sps.js");

var _sps2 = _interopRequireDefault(_sps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Nalunit {
  static getNalunits(buffer) {
    if (buffer.length - buffer.position < 4) {
      return [];
    }

    let buf = buffer.dataview;
    let position = buffer.position;
    if (buf.getInt32(position) === 1 || buf.getInt16(position) === 0 && buf.getInt8(position + 2) === 1) {
      return Nalunit.getAnnexbNals(buffer);
    } else {
      return Nalunit.getAvccNals(buffer);
    }
  }

  static getAnnexbNals(buffer) {
    let nals = [];
    let position = Nalunit.getHeaderPositionAnnexB(buffer);
    let start = position.pos;
    let end = start;
    while (start < buffer.length - 4) {
      let header = buffer.buffer.slice(start, start + position.headerLength);
      if (position.pos === buffer.position) {
        buffer.skip(position.headerLength);
      }
      position = Nalunit.getHeaderPositionAnnexB(buffer);
      end = position.pos;
      let body = new Uint8Array(buffer.buffer.slice(start + header.byteLength, end));
      let unit = { header, body };
      Nalunit.analyseNal(unit);
      nals.push(unit);
      buffer.skip(end - buffer.position);
      start = end;
    }
    return nals;
  }

  static getAvccNals(buffer) {
    let nals = [];
    while (buffer.position < buffer.length - 4) {
      let length = buffer.dataview.getInt32(buffer.position);
      if (buffer.length - buffer.position >= length) {
        let header = buffer.buffer.slice(buffer.position, buffer.position + 4);
        buffer.skip(4);
        let body = buffer.buffer.slice(buffer.position, buffer.position + length);
        buffer.skip(length);
        let unit = { header, body };
        Nalunit.analyseNal(unit);
        nals.push(unit);
      } else {
        break;
      }
    }
    return nals;
  }

  static analyseNal(unit) {
    let type = unit.body[0] & 0x1f;
    switch (type) {
      case 1:
        // NDR
        unit.ndr = true;
        break;
      case 5:
        // IDR
        unit.idr = true;
        break;
      case 6:
        // SEI
        break;
      case 7:
        // SPS
        unit.sps = _sps2.default.parseSPS(unit.body);
        break;
      case 8:
        // PPS
        unit.pps = true;
        break;
      case 9:
        // AUD
        break;
      default:
        break;
    }
  }

  static getHeaderPositionAnnexB(buffer) {
    // seperate
    let pos = buffer.position;
    let headerLength = 0;
    while (headerLength !== 3 && headerLength !== 4 && pos < buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        } else if (buffer.dataview.getInt8(pos + 2) === 1) {
          headerLength = 3;
        } else {
          pos++;
        }
      } else {
        pos++;
      }
    }

    if (pos === buffer.length - 4) {
      if (buffer.dataview.getInt16(pos) === 0) {
        if (buffer.dataview.getInt16(pos + 2) === 1) {
          // 0x000001
          headerLength = 4;
        }
      } else {
        pos++;
        if (buffer.dataview.getInt16(pos) === 0 && buffer.dataview.getInt8(pos) === 1) {
          // 0x0000001
          headerLength = 3;
        } else {
          pos = buffer.length;
        }
      }
    }
    return { pos, headerLength };
  }

  static getAvcc(sps, pps) {
    let ret = new Uint8Array(sps.byteLength + pps.byteLength + 11);
    ret[0] = 0x01;
    ret[1] = sps[1];
    ret[2] = sps[2];
    ret[3] = sps[3];
    ret[4] = 255;
    ret[5] = 225;

    let offset = 6;

    ret.set(new Uint8Array([sps.byteLength >>> 8 & 0xff, sps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(sps, offset);
    offset += sps.byteLength;

    ret[offset] = 1;
    offset++;

    ret.set(new Uint8Array([pps.byteLength >>> 8 & 0xff, pps.byteLength & 0xff]), offset);
    offset += 2;
    ret.set(pps, offset);
    return ret;
  }
}

exports.default = Nalunit;

/***/ }),

/***/ "../xgplayer-codec/src/h264/nalunit/sps.js":
/*!*************************************************!*\
  !*** ../xgplayer-codec/src/h264/nalunit/sps.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _golomb = __webpack_require__(/*! ./golomb */ "../xgplayer-codec/src/h264/nalunit/golomb.js");

var _golomb2 = _interopRequireDefault(_golomb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SPSParser {
  static _ebsp2rbsp(uint8array) {
    let src = uint8array;
    let srcLength = src.byteLength;
    let dst = new Uint8Array(srcLength);
    let dstIdx = 0;

    for (let i = 0; i < srcLength; i++) {
      if (i >= 2) {
        if (src[i] === 0x03 && src[i - 1] === 0x00 && src[i - 2] === 0x00) {
          continue;
        }
      }
      dst[dstIdx] = src[i];
      dstIdx++;
    }

    return new Uint8Array(dst.buffer, 0, dstIdx);
  }

  static parseSPS(uint8array) {
    let rbsp = SPSParser._ebsp2rbsp(uint8array);
    let gb = new _golomb2.default(rbsp);

    gb.readByte();
    let profileIdc = gb.readByte();
    gb.readByte();
    let levelIdc = gb.readByte();
    gb.readUEG();

    let profile_string = SPSParser.getProfileString(profileIdc);
    let level_string = SPSParser.getLevelString(levelIdc);
    let chroma_format_idc = 1;
    let chroma_format = 420;
    let chroma_format_table = [0, 420, 422, 444];
    let bit_depth = 8;

    if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128 || profileIdc === 138 || profileIdc === 144) {
      chroma_format_idc = gb.readUEG();
      if (chroma_format_idc === 3) {
        gb.readBits(1);
      }
      if (chroma_format_idc <= 3) {
        chroma_format = chroma_format_table[chroma_format_idc];
      }

      bit_depth = gb.readUEG() + 8;
      gb.readUEG();
      gb.readBits(1);
      if (gb.readBool()) {
        let scaling_list_count = chroma_format_idc !== 3 ? 8 : 12;
        for (let i = 0; i < scaling_list_count; i++) {
          if (gb.readBool()) {
            if (i < 6) {
              SPSParser._skipScalingList(gb, 16);
            } else {
              SPSParser._skipScalingList(gb, 64);
            }
          }
        }
      }
    }
    gb.readUEG();
    let pic_order_cnt_type = gb.readUEG();
    if (pic_order_cnt_type === 0) {
      gb.readUEG();
    } else if (pic_order_cnt_type === 1) {
      gb.readBits(1);
      gb.readSEG();
      gb.readSEG();
      let num_ref_frames_in_pic_order_cnt_cycle = gb.readUEG();
      for (let i = 0; i < num_ref_frames_in_pic_order_cnt_cycle; i++) {
        gb.readSEG();
      }
    }
    gb.readUEG();
    gb.readBits(1);

    let pic_width_in_mbs_minus1 = gb.readUEG();
    let pic_height_in_map_units_minus1 = gb.readUEG();

    let frame_mbs_only_flag = gb.readBits(1);
    if (frame_mbs_only_flag === 0) {
      gb.readBits(1);
    }
    gb.readBits(1);

    let frame_crop_left_offset = 0;
    let frame_crop_right_offset = 0;
    let frame_crop_top_offset = 0;
    let frame_crop_bottom_offset = 0;

    let frame_cropping_flag = gb.readBool();
    if (frame_cropping_flag) {
      frame_crop_left_offset = gb.readUEG();
      frame_crop_right_offset = gb.readUEG();
      frame_crop_top_offset = gb.readUEG();
      frame_crop_bottom_offset = gb.readUEG();
    }

    let par_width = 1,
        par_height = 1;
    let fps = 0,
        fps_fixed = true,
        fps_num = 0,
        fps_den = 0;

    let vui_parameters_present_flag = gb.readBool();
    if (vui_parameters_present_flag) {
      if (gb.readBool()) {
        // aspect_ratio_info_present_flag
        let aspect_ratio_idc = gb.readByte();
        let par_w_table = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2];
        let par_h_table = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];

        if (aspect_ratio_idc > 0 && aspect_ratio_idc < 16) {
          par_width = par_w_table[aspect_ratio_idc - 1];
          par_height = par_h_table[aspect_ratio_idc - 1];
        } else if (aspect_ratio_idc === 255) {
          par_width = gb.readByte() << 8 | gb.readByte();
          par_height = gb.readByte() << 8 | gb.readByte();
        }
      }

      if (gb.readBool()) {
        gb.readBool();
      }
      if (gb.readBool()) {
        gb.readBits(4);
        if (gb.readBool()) {
          gb.readBits(24);
        }
      }
      if (gb.readBool()) {
        gb.readUEG();
        gb.readUEG();
      }
      if (gb.readBool()) {
        let num_units_in_tick = gb.readBits(32);
        let time_scale = gb.readBits(32);
        fps_fixed = gb.readBool();

        fps_num = time_scale;
        fps_den = num_units_in_tick * 2;
        fps = fps_num / fps_den;
      }
    }

    let parScale = 1;
    if (par_width !== 1 || par_height !== 1) {
      parScale = par_width / par_height;
    }

    let crop_unit_x = 0,
        crop_unit_y = 0;
    if (chroma_format_idc === 0) {
      crop_unit_x = 1;
      crop_unit_y = 2 - frame_mbs_only_flag;
    } else {
      let sub_wc = chroma_format_idc === 3 ? 1 : 2;
      let sub_hc = chroma_format_idc === 1 ? 2 : 1;
      crop_unit_x = sub_wc;
      crop_unit_y = sub_hc * (2 - frame_mbs_only_flag);
    }

    let codec_width = (pic_width_in_mbs_minus1 + 1) * 16;
    let codec_height = (2 - frame_mbs_only_flag) * ((pic_height_in_map_units_minus1 + 1) * 16);

    codec_width -= (frame_crop_left_offset + frame_crop_right_offset) * crop_unit_x;
    codec_height -= (frame_crop_top_offset + frame_crop_bottom_offset) * crop_unit_y;

    let present_width = Math.ceil(codec_width * parScale);

    gb.destroy();
    gb = null;

    return {
      profile_string: profile_string,
      level_string: level_string,
      bit_depth: bit_depth,
      chroma_format: chroma_format,
      chroma_format_string: SPSParser.getChromaFormatString(chroma_format),

      frame_rate: {
        fixed: fps_fixed,
        fps: fps,
        fps_den: fps_den,
        fps_num: fps_num
      },

      par_ratio: {
        width: par_width,
        height: par_height
      },

      codec_size: {
        width: codec_width,
        height: codec_height
      },

      present_size: {
        width: present_width,
        height: codec_height
      }
    };
  }

  static _skipScalingList(gb, count) {
    let last_scale = 8,
        next_scale = 8;
    let delta_scale = 0;
    for (let i = 0; i < count; i++) {
      if (next_scale !== 0) {
        delta_scale = gb.readSEG();
        next_scale = (last_scale + delta_scale + 256) % 256;
      }
      last_scale = next_scale === 0 ? last_scale : next_scale;
    }
  }

  static getProfileString(profileIdc) {
    switch (profileIdc) {
      case 66:
        return 'Baseline';
      case 77:
        return 'Main';
      case 88:
        return 'Extended';
      case 100:
        return 'High';
      case 110:
        return 'High10';
      case 122:
        return 'High422';
      case 244:
        return 'High444';
      default:
        return 'Unknown';
    }
  }

  static getLevelString(levelIdc) {
    return (levelIdc / 10).toFixed(1);
  }

  static getChromaFormatString(chroma) {
    switch (chroma) {
      case 420:
        return '4:2:0';
      case 422:
        return '4:2:2';
      case 444:
        return '4:4:4';
      default:
        return 'Unknown';
    }
  }

  static toVideoMeta(spsConfig) {
    let meta = {};
    if (spsConfig && spsConfig.codec_size) {
      meta.codecWidth = spsConfig.codec_size.width;
      meta.codecHeight = spsConfig.codec_size.height;
      meta.presentWidth = spsConfig.present_size.width;
      meta.presentHeight = spsConfig.present_size.height;
    }

    meta.profile = spsConfig.profile_string;
    meta.level = spsConfig.level_string;
    meta.bitDepth = spsConfig.bit_depth;
    meta.chromaFormat = spsConfig.chroma_format;

    meta.parRatio = {
      width: spsConfig.par_ratio.width,
      height: spsConfig.par_ratio.height
    };

    meta.frameRate = spsConfig.frame_rate;

    let fpsDen = meta.frameRate.fps_den;
    let fpsNum = meta.frameRate.fps_num;
    meta.refSampleDuration = Math.floor(meta.timescale * (fpsDen / fpsNum));
    return meta;
  }
} /* eslint-disable camelcase  */
/* eslint-disable one-var  */
exports.default = SPSParser;

/***/ }),

/***/ "../xgplayer-demux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-demux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  // HLS
  M3U8Parser: __webpack_require__(/*! ./src/hls/demuxer/m3u8parser */ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js").default,
  TsDemuxer: __webpack_require__(/*! ./src/hls/demuxer/ts */ "../xgplayer-demux/src/hls/demuxer/ts.js").default,
  Playlist: __webpack_require__(/*! ./src/hls/playlist */ "../xgplayer-demux/src/hls/playlist.js").default,
  FlvDemuxer: __webpack_require__(/*! ./src/flv/index */ "../xgplayer-demux/src/flv/index.js").default
};

/***/ }),

/***/ "../xgplayer-demux/src/flv/amf-parser.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/flv/amf-parser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DATA_TYPES = {
  NUMBER: 0,
  BOOLEAN: 1,
  STRING: 2,
  OBJECT: 3,
  MIX_ARRAY: 8,
  OBJECT_END: 9,
  STRICT_ARRAY: 10,
  DATE: 11,
  LONE_STRING: 12

  /**
   * meta信息解析
   */
};class AMFParser {
  constructor() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  resolve(meta, size) {
    if (size < 3) {
      throw new Error('not enough data for metainfo');
    }
    const metaData = {};
    const name = this.parseValue(meta);
    const value = this.parseValue(meta, size - name.bodySize);
    metaData[name.data] = value.data;

    this.resetStatus();
    return metaData;
  }

  resetStatus() {
    this.offset = 0;
    this.readOffset = this.offset;
  }

  parseString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint16(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    let size = strLen + 2;
    this.readOffset += size;
    return {
      data: str,
      bodySize: strLen + 2
    };
  }

  parseDate(buffer, size) {
    const dv = new DataView(buffer, this.readOffset, size);
    let ts = dv.getFloat64(0, !_xgplayerUtils.isLe);
    const timeOffset = dv.getInt16(8, !_xgplayerUtils.isLe);
    ts += timeOffset * 60 * 1000;

    this.readOffset += 10;
    return {
      data: new Date(ts),
      bodySize: 10
    };
  }

  parseObject(buffer, size) {
    const name = this.parseString(buffer, size);
    const value = this.parseValue(buffer, size - name.bodySize);
    return {
      data: {
        name: name.data,
        value: value.data
      },
      bodySize: name.bodySize + value.bodySize,
      isObjEnd: value.isObjEnd
    };
  }

  parseLongString(buffer) {
    const dv = new DataView(buffer, this.readOffset);
    const strLen = dv.getUint32(0, !_xgplayerUtils.isLe);
    let str = '';
    if (strLen > 0) {
      str = _xgplayerUtils.UTF8.decode(new Uint8Array(buffer, this.readOffset + 2, strLen));
    } else {
      str = '';
    }
    // const size = strLen + 4;
    this.readOffset += strLen + 4;
    return {
      data: str,
      bodySize: strLen + 4
    };
  }

  /**
   * 解析meta中的变量
   */
  parseValue(data, size) {
    let buffer = new ArrayBuffer();
    if (data instanceof ArrayBuffer) {
      buffer = data;
    } else {
      buffer = data.buffer;
    }
    const {
      NUMBER,
      BOOLEAN,
      STRING,
      OBJECT,
      MIX_ARRAY,
      OBJECT_END,
      STRICT_ARRAY,
      DATE,
      LONE_STRING
    } = DATA_TYPES;
    const dataView = new DataView(buffer, this.readOffset, size);
    let isObjEnd = false;
    const type = dataView.getUint8(0);
    let offset = 1;
    this.readOffset += 1;
    let value = null;

    switch (type) {
      case NUMBER:
        {
          value = dataView.getFloat64(1, !_xgplayerUtils.isLe);
          this.readOffset += 8;
          offset += 8;
          break;
        }
      case BOOLEAN:
        {
          const boolNum = dataView.getUint8(1);
          value = !!boolNum;
          this.readOffset += 1;
          offset += 1;
          break;
        }
      case STRING:
        {
          const str = this.parseString(buffer);
          value = str.data;
          offset += str.bodySize;
          break;
        }
      case OBJECT:
        {
          value = {};
          let objEndSize = 0;
          if (dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) {
            objEndSize = 3;
          }
          // this.readOffset += offset - 1;
          while (offset < size - 4) {
            const amfObj = this.parseObject(buffer, size - offset - objEndSize);
            if (amfObj.isObjectEnd) {
              break;
            }
            value[amfObj.data.name] = amfObj.data.value;
            offset += amfObj.bodySize;
          }
          if (offset <= size - 3) {
            const mark = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (mark === 9) {
              this.readOffset += 3;
              offset += 3;
            }
          }
          break;
        }
      case MIX_ARRAY:
        {
          value = {};
          offset += 4;
          this.readOffset += 4;
          let objEndSize = 0;
          if ((dataView.getUint32(size - 4, !_xgplayerUtils.isLe) & 0x00FFFFFF) === 9) {
            objEndSize = 3;
          }

          while (offset < size - 8) {
            const amfVar = this.parseObject(buffer, size - offset - objEndSize);
            if (amfVar.isObjectEnd) {
              break;
            }
            value[amfVar.data.name] = amfVar.data.value;
            offset += amfVar.bodySize;
          }
          if (offset <= size - 3) {
            const marker = dataView.getUint32(offset - 1, !_xgplayerUtils.isLe) & 0x00FFFFFF;
            if (marker === 9) {
              offset += 3;
              this.readOffset += 3;
            }
          }
          break;
        }

      case OBJECT_END:
        {
          value = null;
          isObjEnd = true;
          break;
        }

      case STRICT_ARRAY:
        {
          value = [];
          const arrLength = dataView.getUint32(1, !_xgplayerUtils.isLe);
          offset += 4;
          this.readOffset += 4;
          for (let i = 0; i < arrLength; i++) {
            const script = this.parseValue(buffer, size - offset);
            value.push(script.data);
            offset += script.bodySize;
          }
          break;
        }

      case DATE:
        {
          const date = this.parseDate(buffer, size - 1);
          value = date.data;
          offset += date.bodySize;
          break;
        }

      case LONE_STRING:
        {
          const longStr = this.parseLongString(buffer, size - 1);
          value = longStr.data;
          offset += longStr.bodySize;
          break;
        }

      default:
        {
          offset = size;
        }
    }

    return {
      data: value,
      bodySize: offset,
      isObjEnd: isObjEnd
    };
  }
}
exports.default = AMFParser;

/***/ }),

/***/ "../xgplayer-demux/src/flv/index.js":
/*!******************************************!*\
  !*** ../xgplayer-demux/src/flv/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _amfParser = __webpack_require__(/*! ./amf-parser */ "../xgplayer-demux/src/flv/amf-parser.js");

var _amfParser2 = _interopRequireDefault(_amfParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;

class FlvDemuxer {
  constructor() {
    this._firstFragmentLoaded = false;
    this._trackNum = 0;
    this._hasScript = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.doParseFlv.bind(this));
  }

  /**
   * if the flv head is valid
   * @param data
   * @returns {boolean}
   */
  static isFlvFile(data) {
    return !(data[0] !== 0x46 || data[1] !== 0x4C || data[2] !== 0x56 || data[3] !== 0x01);
  }

  /**
   * If the stream has audio or video.
   * @param {number} streamFlag - Data from the stream which is define whether the audio / video track is exist.
   */
  static getPlayType(streamFlag) {
    const result = {
      hasVideo: false,
      hasAudio: false
    };

    if (streamFlag & 0x01 > 0) {
      result.hasVideo = true;
    }

    if (streamFlag & 0x04 > 0) {
      result.hasAudio = true;
    }

    return result;
  }

  doParseFlv() {
    if (!this._firstFragmentLoaded) {
      if (this.loaderBuffer.length < 13) {
        return;
      }
      const header = this.loaderBuffer.shift(13);
      this.parseFlvHeader(header);
      this.doParseFlv(); // 递归调用，继续解析flv流
    } else {
      if (this.loaderBuffer.length < 11) {
        return;
      }
      let chunk;

      let loopMax = 100000; // 防止死循环产生
      do {
        chunk = this._parseFlvTag();
      } while (chunk && loopMax-- > 0);

      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
  }

  parseFlvHeader(header) {
    if (!FlvDemuxer.isFlvFile(header)) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('invalid flv file'));
      this.doParseFlv();
    } else {
      this._firstFragmentLoaded = true;
      const playType = FlvDemuxer.getPlayType(header[4]);

      if (playType.hasVideo) {
        this.initVideoTrack();
      }

      if (playType.hasAudio) {
        this.initAudioTrack();
      }
    }
    this.doParseFlv();
  }

  /**
   * init default video track configs
   */
  initVideoTrack() {
    this._trackNum++;
    let videoTrack = new _xgplayerBuffer.VideoTrack();
    videoTrack.meta = new _xgplayerUtils.VideoTrackMeta();
    videoTrack.id = videoTrack.meta.id = this._trackNum;

    this.tracks.videoTrack = videoTrack;
  }

  /**
   * init default audio track configs
   */
  initAudioTrack() {
    this._trackNum++;
    let audioTrack = new _xgplayerBuffer.AudioTrack();
    audioTrack.meta = new _xgplayerUtils.AudioTrackMeta();
    audioTrack.id = audioTrack.meta.id = this._trackNum;

    this.tracks.audioTrack = audioTrack;
  }

  /**
   * Package the data as the following data structure
   * {
   *    data: Uint8Array. the Stream data.
   *    info: The first byte info of the Tag.
   *    tagType: 8、9、18
   *    timeStamp: the timestemp
   * }
   */
  _parseFlvTag() {
    if (this.loaderBuffer.length < 11) {
      return null;
    }
    let chunk = this._parseFlvTagHeader();
    if (chunk) {
      this._processChunk(chunk);
    }
    return chunk;
  }

  /**
   * Parse the 11 byte tag Header
   */
  _parseFlvTagHeader() {
    let offset = 0;
    let chunk = {};

    let tagType = this.loaderBuffer.toInt(offset, 1);
    offset += 1;

    // 2 bit FMS reserved, 1 bit filtered, 5 bit tag type
    chunk.filtered = (tagType & 32) >>> 5;
    chunk.tagType = tagType & 31;

    // 3 Byte datasize
    chunk.datasize = this.loaderBuffer.toInt(offset, 3);
    offset += 3;

    if (chunk.tagType !== 8 && chunk.tagType !== 9 && chunk.tagType !== 11 && chunk.tagType !== 18 || this.loaderBuffer.toInt(8, 3) !== 0) {
      if (this.loaderBuffer && this.loaderBuffer.length > 0) {
        this.loaderBuffer.shift(1);
      }
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('tagType ' + chunk.tagType), false);
      return null;
    }

    if (this.loaderBuffer.length < chunk.datasize + 15) {
      return null;
    }

    // read the data.
    this.loaderBuffer.shift(4);

    // 3 Byte timestamp
    let timestamp = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 1 Byte timestampExt
    let timestampExt = this.loaderBuffer.shift(1)[0];
    if (timestampExt > 0) {
      timestamp += timestampExt * 0x1000000;
    }

    chunk.dts = timestamp;

    // streamId
    this.loaderBuffer.shift(3);
    return chunk;
  }

  _processChunk(chunk) {
    switch (chunk.tagType) {
      case 18:
        this._parseScriptData(chunk);
        break;
      case 8:
        this._parseAACData(chunk);
        break;
      case 9:
        this._parseHevcData(chunk);
        break;
      case 11:
        // for some CDN that did not process the currect RTMP messages
        this.loaderBuffer.shift(3);
        break;
      default:
        this.loaderBuffer.shift(1);
    }
  }

  /**
   * parse flv script data
   * @param chunk
   * @private
   */
  _parseScriptData(chunk) {
    let audioTrack = this.tracks.audioTrack;
    let videoTrack = this.tracks.videoTrack;

    let data = this.loaderBuffer.shift(chunk.datasize);

    const info = new _amfParser2.default().resolve(data, data.length);

    const onMetaData = this._context.onMetaData = info ? info.onMetaData : undefined;

    // fill mediaInfo
    this._context.mediaInfo.duration = onMetaData.duration;
    this._context.mediaInfo.hasVideo = onMetaData.hasVideo;
    this._context.mediaInfo.hsaAudio = onMetaData.hasAudio;

    let validate = this._datasizeValidator(chunk.datasize);
    if (validate) {
      this.emit(DEMUX_EVENTS.MEDIA_INFO);
      this._hasScript = true;
    }

    // Edit default meta.
    if (audioTrack && !audioTrack.hasSpecificConfig) {
      let meta = audioTrack.meta;
      if (onMetaData.audiosamplerate) {
        meta.sampleRate = onMetaData.audiosamplerate;
      }

      if (onMetaData.audiochannels) {
        meta.channelCount = onMetaData.audiochannels;
      }

      switch (onMetaData.audiosamplerate) {
        case 44100:
          meta.sampleRateIndex = 4;
          break;
        case 22050:
          meta.sampleRateIndex = 7;
          break;
        case 11025:
          meta.sampleRateIndex = 10;
          break;
      }
    }
    if (videoTrack && !videoTrack.hasSpecificConfig) {
      let meta = videoTrack.meta;
      if (typeof onMetaData.framerate === 'number') {
        let fpsNum = Math.floor(onMetaData.framerate * 1000);
        if (fpsNum > 0) {
          let fps = fpsNum / 1000;
          if (!meta.frameRate) {
            meta.frameRate = {};
          }
          meta.frameRate.fixed = true;
          meta.frameRate.fps = fps;
          meta.frameRate.fps_num = fpsNum;
          meta.frameRate.fps_den = 1000;
        }
      }
    }
  }

  _aacSequenceHeaderParser(data) {
    let ret = {};
    ret.hasSpecificConfig = true;
    ret.objectType = data[1] >>> 3;
    ret.originObjectType = ret.objectType;
    ret.sampleRateIndex = (data[1] & 7) << 1 | data[2] >>> 7;
    ret.audiosamplerate = this._switchAudioSampleRate(ret.sampleRateIndex);
    ret.channelCount = (data[2] & 120) >>> 3;
    ret.frameLength = (data[2] & 4) >>> 2;
    ret.dependsOnCoreCoder = (data[2] & 2) >>> 1;
    ret.extensionFlagIndex = data[2] & 1;

    ret.codec = `mp4a.40.${ret.objectType}`;
    let userAgent = window.navigator.userAgent.toLowerCase();
    let extensionSamplingIndex;

    let config;
    let samplingIndex = ret.sampleRateIndex;

    if (userAgent.indexOf('firefox') !== -1) {
      // firefox: use SBR (HE-AAC) if freq less than 24kHz
      if (ret.sampleRateIndex >= 6) {
        ret.objectType = 5;
        config = new Array(4);
        extensionSamplingIndex = samplingIndex - 3;
      } else {
        // use LC-AAC
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = samplingIndex;
      }
    } else if (userAgent.indexOf('android') !== -1 || _xgplayerUtils.sniffer.browser === 'safari') {
      // android: always use LC-AAC
      ret.objectType = 2;
      config = new Array(2);
      extensionSamplingIndex = samplingIndex;
    } else {
      // for other browsers, e.g. chrome...
      // Always use HE-AAC to make it easier to switch aac codec profile
      ret.objectType = 5;
      extensionSamplingIndex = ret.sampleRateIndex;
      config = new Array(4);

      if (ret.sampleRateIndex >= 6) {
        extensionSamplingIndex = ret.sampleRateIndex - 3;
      } else if (ret.channelCount === 1) {
        // Mono channel
        ret.objectType = 2;
        config = new Array(2);
        extensionSamplingIndex = ret.sampleRateIndex;
      }
    }

    config[0] = ret.objectType << 3;
    config[0] |= (ret.sampleRateIndex & 0x0F) >>> 1;
    config[1] = (ret.sampleRateIndex & 0x0F) << 7;
    config[1] |= (ret.channelCount & 0x0F) << 3;
    if (ret.objectType === 5) {
      config[1] |= (extensionSamplingIndex & 0x0F) >>> 1;
      config[2] = (extensionSamplingIndex & 0x01) << 7;
      // extended audio object type: force to 2 (LC-AAC)
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.config = config;
    return ret;
  }

  _parseAACData(chunk) {
    let track = this.tracks.audioTrack;
    if (!track) {
      return;
    }

    let meta = track.meta;

    if (!meta) {
      track.meta = new _xgplayerUtils.AudioTrackMeta();
      meta = track.meta;
    }

    let info = this.loaderBuffer.shift(1)[0];

    chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);

    let format = (info & 240) >>> 4;

    track.format = format;

    if (format !== 10) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error(`invalid audio format: ${format}`));
    }

    if (format === 10 && !this._hasAudioSequence) {
      meta.sampleRate = this._switchAudioSamplingFrequency(info);
      meta.sampleRateIndex = (info & 12) >>> 2;
      meta.frameLenth = (info & 2) >>> 1;
      meta.channelCount = info & 1;
      meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);
    }

    let audioSampleRate = meta.audioSampleRate;
    let audioSampleRateIndex = meta.sampleRateIndex;
    let refSampleDuration = meta.refSampleDuration;

    delete chunk.tagType;
    let validate = this._datasizeValidator(chunk.datasize);

    if (chunk.data[0] === 0) {
      // AAC Sequence Header
      let aacHeader = this._aacSequenceHeaderParser(chunk.data);
      audioSampleRate = aacHeader.audiosamplerate || meta.audioSampleRate;
      audioSampleRateIndex = aacHeader.sampleRateIndex || meta.sampleRateIndex;
      refSampleDuration = Math.floor(1024 / audioSampleRate * meta.timescale);

      meta.channelCount = aacHeader.channelCount;
      meta.sampleRate = audioSampleRate;
      meta.sampleRateIndex = audioSampleRateIndex;
      meta.refSampleDuration = refSampleDuration;
      meta.duration = this._context.mediaInfo.duration * meta.timescale;
      meta.config = aacHeader.config;
      meta.objectType = aacHeader.objectType;
      meta.originObjectType = aacHeader.originObjectType;

      const audioMedia = this._context.mediaInfo.audio;

      // fill audio media info
      audioMedia.codec = aacHeader.codec;
      audioMedia.channelCount = aacHeader.channelCount;
      audioMedia.sampleRate = audioSampleRate;
      audioMedia.sampleRateIndex = aacHeader.audioSampleRateIndex;

      if (this._hasScript && !this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
      } else if (this._hasScript && this._hasAudioSequence) {
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
        this.emit(DEMUX_EVENTS.AUDIO_METADATA_CHANGE);
        // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio')
      }
      this._hasAudioSequence = true;

      this._metaChange = true;
    } else {
      if (this._metaChange) {
        chunk.options = {
          meta: track.meta
        };
        this._metaChange = false;
      }

      chunk.data = chunk.data.slice(1, chunk.data.length);
      track.samples.push(chunk);
    }
    if (!validate) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error('TAG length error at ' + chunk.datasize), false);
      // this.logger.warn(this.TAG, error.message)
    }
  }

  /**
   * parse hevc/avc video data
   * @param chunk
   * @private
   */
  _parseHevcData(chunk) {
    // header
    let info = this.loaderBuffer.shift(1)[0];
    chunk.frameType = (info & 0xf0) >>> 4;
    chunk.isKeyframe = chunk.frameType === 1;
    // let tempCodecID = this.tracks.videoTrack.codecID
    let codecID = info & 0x0f;
    this.tracks.videoTrack.codecID = codecID;

    // hevc和avc的header解析方式一样
    chunk.avcPacketType = this.loaderBuffer.shift(1)[0];
    chunk.cts = this.loaderBuffer.toInt(0, 3);
    this.loaderBuffer.shift(3);

    // 12 for hevc, 7 for avc
    if (codecID === 12) {
      const data = this.loaderBuffer.shift(chunk.datasize - 5);
      chunk.data = data;

      if (Number.parseInt(chunk.avcPacketType) !== 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        }
        let nalu = {};
        let r = 0;
        nalu.cts = chunk.cts;
        nalu.dts = chunk.dts;
        while (chunk.data.length > r) {
          let sizes = chunk.data.slice(Number.parseInt(r), 4 + r);
          nalu.size = sizes[3];
          nalu.size += sizes[2] * 256;
          nalu.size += sizes[1] * 256 * 256;
          nalu.size += sizes[0] * 256 * 256 * 256;
          r += 4;
          nalu.data = chunk.data.slice(Number.parseInt(r), nalu.size + r);
          r += nalu.size;
          this.tracks.videoTrack.samples.push(nalu);
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      } else if (Number.parseInt(chunk.avcPacketType) === 0) {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
        } else {
          this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
        }
      }
    } else if (codecID === 7) {
      let data = this.loaderBuffer.shift(chunk.datasize - 5);
      if (data[4] === 0 && data[5] === 0 && data[6] === 0 && data[7] === 1) {
        let avcclength = 0;
        for (let i = 0; i < 4; i++) {
          avcclength = avcclength * 256 + data[i];
        }
        avcclength -= 4;
        data = data.slice(4, data.length);
        data[3] = avcclength % 256;
        avcclength = (avcclength - data[3]) / 256;
        data[2] = avcclength % 256;
        avcclength = (avcclength - data[2]) / 256;
        data[1] = avcclength % 256;
        data[0] = (avcclength - data[1]) / 256;
      }

      chunk.data = data;
      // If it is AVC sequece Header.
      if (chunk.avcPacketType === 0) {
        this._avcSequenceHeaderParser(chunk.data);
        let validate = this._datasizeValidator(chunk.datasize);
        if (validate) {
          if (this._hasScript && !this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
          } else if (this._hasScript && this._hasVideoSequence) {
            this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
            this.emit(DEMUX_EVENTS.VIDEO_METADATA_CHANGE);
            // this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video')
          }
          this._hasVideoSequence = true;
        }
        this._metaChange = true;
      } else {
        if (!this._datasizeValidator(chunk.datasize)) {
          this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
          return;
        }
        if (this._metaChange) {
          chunk.options = {
            meta: Object.assign({}, this.tracks.videoTrack.meta)
          };
          this._metaChange = false;
        }
        this.tracks.videoTrack.samples.push(chunk);
        // this.emit(DEMUX_EVENTS.DEMUX_COMPLETE)
      }
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`video codeid is ${codecID}`), false);
      chunk.data = this.loaderBuffer.shift(chunk.datasize - 1);
      if (!this._datasizeValidator(chunk.datasize)) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`invalid video tag datasize: ${chunk.datasize}`), false);
      }
      this.tracks.videoTrack.samples.push(chunk);
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE);
    }
    delete chunk.tagType;
  }

  /**
   * parse avc metadata
   * @param data
   * @private
   */
  _avcSequenceHeaderParser(data) {
    let track = this.tracks.videoTrack;

    if (!track) {
      return;
    }

    let offset = 0;

    if (!track.meta) {
      track.meta = new _xgplayerUtils.VideoTrackMeta();
    }
    let meta = track.meta;

    meta.configurationVersion = data[0];
    meta.avcProfileIndication = data[1];
    meta.profileCompatibility = data[2];
    meta.avcLevelIndication = data[3] / 10;
    meta.nalUnitLength = (data[4] & 0x03) + 1;

    let numOfSps = data[5] & 0x1f;
    offset = 6;
    let config = {};

    // parse SPS
    for (let i = 0; i < numOfSps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;

      let sps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        sps[j] = data[offset + j];
      }

      // codec string
      let codecString = 'avc1.';
      for (let j = 1; j < 4; j++) {
        let h = sps[j].toString(16);
        if (h.length < 2) {
          h = '0' + h;
        }
        codecString += h;
      }

      meta.codec = codecString;

      offset += size;
      this.tracks.videoTrack.meta.sps = sps;
      config = _xgplayerCodec.SpsParser.parseSPS(sps);
    }

    let numOfPps = data[offset];

    offset++;

    for (let i = 0; i < numOfPps; i++) {
      let size = data[offset] * 255 + data[offset + 1];
      offset += 2;
      let pps = new Uint8Array(size);
      for (let j = 0; j < size; j++) {
        pps[j] = data[offset + j];
      }
      offset += size;
      this.tracks.videoTrack.meta.pps = pps;
    }

    Object.assign(meta, _xgplayerCodec.SpsParser.toVideoMeta(config));

    // fill video media info
    const videoMedia = this._context.mediaInfo.video;

    videoMedia.codec = meta.codec;
    videoMedia.profile = meta.profile;
    videoMedia.level = meta.level;
    videoMedia.chromaFormat = meta.chromaFormat;
    videoMedia.frameRate = meta.frameRate;
    videoMedia.parRatio = meta.parRatio;
    videoMedia.width = videoMedia.width === meta.presentWidth ? videoMedia.width : meta.presentWidth;
    videoMedia.height = videoMedia.height === meta.presentHeight ? videoMedia.width : meta.presentHeight;

    meta.duration = this._context.mediaInfo.duration * meta.timescale;
    meta.avcc = new Uint8Array(data.length);
    meta.avcc.set(data);
    track.meta = meta;
  }

  /**
   * choose audio sample rate
   * @param samplingFrequencyIndex
   * @returns {number}
   * @private
   */
  _switchAudioSampleRate(samplingFrequencyIndex) {
    let samplingFrequencyList = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio sampling frequence
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioSamplingFrequency(info) {
    let samplingFrequencyIndex = (info & 12) >>> 2;
    let samplingFrequencyList = [5500, 11025, 22050, 44100, 48000];
    return samplingFrequencyList[samplingFrequencyIndex];
  }

  /**
   * choose audio channel count
   * @param info
   * @returns {number}
   * @private
   */
  _switchAudioChannel(info) {
    let sampleTrackNumIndex = info & 1;
    let sampleTrackNumList = [1, 2];
    return sampleTrackNumList[sampleTrackNumIndex];
  }

  /**
   * check datasize is valid use 4 Byte after current tag
   * @param datasize
   * @returns {boolean}
   * @private
   */
  _datasizeValidator(datasize) {
    let datasizeConfirm = this.loaderBuffer.toInt(0, 4);
    this.loaderBuffer.shift(4);
    return datasizeConfirm === datasize + 11;
  }

  get loaderBuffer() {
    const buffer = this._context.getInstance('LOADER_BUFFER');
    if (buffer) {
      return buffer;
    } else {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('找不到 loaderBuffer 实例'));
    }
  }

  get tracks() {
    return this._context.getInstance('TRACKS');
  }

  get logger() {
    return this._context.getInstance('LOGGER');
  }
}

exports.default = FlvDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/m3u8parser.js":
/*!*******************************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/m3u8parser.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Reference: https://tools.ietf.org/html/rfc8216#section-4.3
 */
class M3U8Parser {
  static parse(text, baseurl = '') {
    let ret = {
      duration: 0
    };
    if (!text || !text.split) {
      return;
    }
    let refs = text.split(/\r|\n/);
    refs = refs.filter(ref => {
      return ref;
    });
    let ref = refs.shift();
    if (!ref.match('#EXTM3U')) {
      throw new Error(`Invalid m3u8 file: not "#EXTM3U"`);
      return null;
    }
    ref = refs.shift();
    while (ref) {
      let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
      let refd = ref.match(/#(.[A-Z|-]*)/);
      if (refd && refm && refm.length > 2) {
        switch (refm[1]) {
          case 'EXT-X-VERSION':
            ret.version = parseInt(refm[2]);
            break;
          case 'EXT-X-MEDIA-SEQUENCE':
            ret.sequence = parseInt(refm[2]);
            break;
          case 'EXT-X-TARGETDURATION':
            ret.targetduration = parseFloat(refm[2]);
            break;
          case 'EXTINF':
            M3U8Parser.parseFrag(refm, refs, ret, baseurl);
            break;
          case 'EXT-X-KEY':
            M3U8Parser.parseDecrypt(refm[2], ret);
            break;
          default:
            break;
        }
      }if (refd && refd.length > 1) {
        switch (refd[1]) {
          case 'EXT-X-DISCONTINUITY':
            ref = refs.shift();
            let refm = ref.match(/#(.[A-Z|-]*):(.*)/);
            if (refm.length > 2 && refm[1] === 'EXTINF') {
              M3U8Parser.parseFrag(refm, refs, ret, baseurl, true);
            }
            break;
          default:
            break;
        }
      }
      ref = refs.shift();
    }
    return ret;
  }

  static parseFrag(refm, refs, ret, baseurl, discontinue) {
    if (!ret.frags) {
      ret.frags = [];
    }

    let freg = {
      start: ret.duration,
      duration: parseFloat(refm[2]) * 1000
    };

    ret.duration += freg.duration;
    let nextline = refs.shift();
    if (nextline.match(/#(.*):(.*)/)) {
      nextline = refs.shift();
    }
    if (nextline.length > 0 && nextline.charAt(0) === '/' && baseurl.match(/.*\/\/.*\.\w+/g)) {
      baseurl = baseurl.match(/.*\/\/.*\.\w+/g)[0];
    }
    if (nextline.match(/.*:\/\/.*/)) {
      freg.url = nextline;
    } else {
      freg.url = baseurl + nextline;
    }
    freg.discontinue = discontinue;
    ret.frags.push(freg);
  }

  static parseURL(url) {
    let baseurl = '';
    let urls = url.match(/(.*\/).*\.m3u8/);
    if (urls && urls.length > 0) {
      for (let i = 0; i < urls.length; i++) {
        if (urls[i].match(/.*\/$/g) && urls[i].length > baseurl.length) {
          baseurl = urls[i];
        }
      }
    }
    return baseurl;
  }

  static parseDecrypt(refm, ret) {
    ret.encrypt = {};
    let refs = refm.split(',');
    for (let i in refs) {
      let cmd = refs[i];
      if (cmd.match(/METHOD=(.*)/)) {
        ret.encrypt.method = cmd.match(/METHOD=(.*)/)[1];
      }
      if (cmd.match(/URI="(.*)"/)) {
        ret.encrypt.uri = cmd.match(/URI="(.*)"/)[1];
      }

      if (cmd.match(/IV=0x(.*)/)) {
        let iv = cmd.match(/IV=0x(.*)/)[1];
        let length = Math.ceil(iv.length / 2);
        ret.encrypt.ivb = new Uint8Array(length);
        for (let i = length - 1; i >= 0; i--) {
          let im = parseInt(iv.substr(i * 2, 2), 16);
          ret.encrypt.ivb[i] = im;
        }
        ret.encrypt.iv = iv;
      }
    };
  }
}

exports.default = M3U8Parser;

/***/ }),

/***/ "../xgplayer-demux/src/hls/demuxer/ts.js":
/*!***********************************************!*\
  !*** ../xgplayer-demux/src/hls/demuxer/ts.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const StreamType = {
  0x01: ['video', 'MPEG-1'],
  0x02: ['video', 'MPEG-2'],
  0x1b: ['video', 'AVC.H264'],
  0xea: ['video', 'VC-1'],
  0x03: ['audio', 'MPEG-1'],
  0x04: ['audio', 'MPEG-2'],
  0x0f: ['audio', 'MPEG-2.AAC'],
  0x11: ['audio', 'MPEG-4.AAC'],
  0x80: ['audio', 'LPCM'],
  0x81: ['audio', 'AC3'],
  0x06: ['audio', 'AC3'],
  0x82: ['audio', 'DTS'],
  0x83: ['audio', 'Dolby TrueHD'],
  0x84: ['audio', 'AC3-Plus'],
  0x85: ['audio', 'DTS-HD'],
  0x86: ['audio', 'DTS-MA'],
  0xa1: ['audio', 'AC3-Plus-SEC'],
  0xa2: ['audio', 'DTS-HD-SEC']
};

class TsDemuxer {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  init() {
    this.on(DEMUX_EVENTS.DEMUX_START, this.demux.bind(this));
  }

  demux(frag) {
    if (this.demuxing) {
      return;
    }

    let buffer = this.inputBuffer;
    let frags = { pat: [], pmt: [] };
    let peses = {};

    // Read TS segment
    while (buffer.length >= 188) {
      if (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        this.emit(DEMUX_EVENTS.DEMUX_ERROR, this.TAG, new Error(`Untrust sync code: ${buffer.array[0][buffer.offset]}, try to recover;`), false);
      }
      while (buffer.length >= 1 && buffer.array[0][buffer.offset] !== 71) {
        buffer.shift(1);
      }
      let buf = buffer.shift(188);
      // console.log(buf);
      let tsStream = new _xgplayerUtils.Stream(buf.buffer);
      let ts = {};
      TsDemuxer.read(tsStream, ts, frags);
      if (ts.pes) {
        if (!peses[ts.header.pid]) {
          peses[ts.header.pid] = [];
        }
        peses[ts.header.pid].push(ts.pes);
        ts.pes.ES.buffer = [ts.pes.ES.buffer];
      } else if (peses[ts.header.pid]) {
        peses[ts.header.pid][peses[ts.header.pid].length - 1].ES.buffer.push(ts.payload.stream);
      }
    }

    let AudioOptions = frag;
    let VideoOptions = frag;

    // Get Frames data
    for (let i = 0; i < Object.keys(peses).length; i++) {
      let epeses = peses[Object.keys(peses)[i]];
      for (let j = 0; j < epeses.length; j++) {
        epeses[j].id = Object.keys(peses)[i];
        epeses[j].ES.buffer = TsDemuxer.Merge(epeses[j].ES.buffer);
        if (epeses[j].type === 'audio') {
          this.pushAudioSample(epeses[j], AudioOptions);
          AudioOptions = {};
        } else if (epeses[j].type === 'video') {
          this.pushVideoSample(epeses[j], VideoOptions);
          VideoOptions = {};
        }
      }
    }

    if (this._hasAudioMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'audio');
    }
    if (this._hasVideoMeta) {
      this.emit(DEMUX_EVENTS.DEMUX_COMPLETE, 'video');
    }
  }

  pushAudioSample(pes, options) {
    let track;
    if (!this._tracks.audioTrack) {
      this._tracks.audioTrack = new _xgplayerBuffer.AudioTrack();
      track = this._tracks.audioTrack;
    } else {
      track = this._tracks.audioTrack;
    }
    let meta = new _xgplayerUtils.AudioTrackMeta({
      audioSampleRate: pes.ES.frequence,
      sampleRate: pes.ES.frequence,
      channelCount: pes.ES.channel,
      codec: 'mp4a.40.' + pes.ES.audioObjectType,
      config: pes.ES.audioConfig,
      id: 2,
      sampleRateIndex: pes.ES.frequencyIndex
    });
    meta.refSampleDuration = Math.floor(1024 / meta.audioSampleRate * meta.timescale);

    let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);

    if (!this._hasAudioMeta || !metaEqual) {
      track.meta = meta;
      this._hasAudioMeta = true;
      this.emit(DEMUX_EVENTS.METADATA_PARSED, 'audio');
    }

    let data = new Uint8Array(pes.ES.buffer.buffer.slice(pes.ES.buffer.position, pes.ES.buffer.length));
    let dts = parseInt(pes.pts / 90);
    let pts = parseInt(pes.pts / 90);
    let sample = new _xgplayerUtils.AudioTrackSample({ dts, pts, data, options });
    track.samples.push(sample);
  }

  pushVideoSample(pes, options) {
    let nals = _xgplayerCodec.Nalunit.getNalunits(pes.ES.buffer);
    let track;
    let meta = new _xgplayerUtils.VideoTrackMeta();
    if (!this._tracks.videoTrack) {
      this._tracks.videoTrack = new _xgplayerBuffer.VideoTrack();
      track = this._tracks.videoTrack;
    } else {
      track = this._tracks.videoTrack;
    }
    let sampleLength = 0;
    let sps = false;
    let pps = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      if (nal.sps) {
        sps = nal;
        track.sps = nal.body;
        meta.chromaFormat = sps.sps.chroma_format;
        meta.codec = 'avc1.';
        for (var j = 1; j < 4; j++) {
          var h = sps.body[j].toString(16);
          if (h.length < 2) {
            h = '0' + h;
          }
          meta.codec += h;
        }
        meta.codecHeight = sps.sps.codec_size.height;
        meta.codecWidth = sps.sps.codec_size.width;
        meta.frameRate = sps.sps.frame_rate;
        meta.id = 1;
        meta.level = sps.sps.level_string;
        meta.presentHeight = sps.sps.present_size.height;
        meta.presentWidth = sps.sps.present_size.width;
        meta.profile = sps.sps.profile_string;
        meta.refSampleDuration = Math.floor(meta.timescale * (sps.sps.frame_rate.fps_den / sps.sps.frame_rate.fps_num));
        meta.sarRatio = sps.sps.sar_ratio ? sps.sps.sar_ratio : sps.sps.par_ratio;
      } else if (nal.pps) {
        track.pps = nal.body;
        pps = nal;
      } else {
        sampleLength += 4 + nal.body.byteLength;
      }
    }

    if (sps && pps) {
      meta.avcc = _xgplayerCodec.Nalunit.getAvcc(sps.body, pps.body);
      let metaEqual = TsDemuxer.compaireMeta(track.meta, meta, true);
      if (!this._hasVideoMeta || !metaEqual) {
        if (options) {
          options.meta = Object.assign({}, meta);
        } else {
          options = {
            meta: Object.assign({}, meta)
          };
        }
        track.meta = meta;
        this._hasVideoMeta = true;
        this.emit(DEMUX_EVENTS.METADATA_PARSED, 'video');
      }
    }

    let data = new Uint8Array(sampleLength);
    let offset = 0;
    let isKeyframe = false;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      let length = nal.body.byteLength;
      if (nal.idr) {
        isKeyframe = true;
      }
      if (!nal.pps && !nal.sps) {
        data.set(new Uint8Array([length >>> 24 & 0xff, length >>> 16 & 0xff, length >>> 8 & 0xff, length & 0xff]), offset);
        offset += 4;
        data.set(nal.body, offset);
        offset += length;
      }
    }
    let sample = new _xgplayerUtils.VideoTrackSample({
      dts: parseInt(pes.dts / 90),
      pts: parseInt(pes.pts / 90),
      cts: (pes.pts - pes.dts) / 90,
      originDts: pes.dts,
      isKeyframe,
      data,
      options
    });
    track.samples.push(sample);
  }

  destory() {
    this.off(DEMUX_EVENTS.DEMUX_START, this.demux);
    this.configs = {};
    this.demuxing = false;
    this.pat = [];
    this.pmt = [];
    this._hasVideoMeta = false;
    this._hasAudioMeta = false;
  }

  static compaireArray(a, b, type) {
    let al = 0;
    let bl = 0;
    if (type === 'Uint8Array') {
      al = a.byteLength;
      bl = b.byteLength;
    } else if (type === 'Array') {
      al = a.length;
      bl = b.length;
    }
    if (al !== bl) {
      return false;
    }

    for (let i = 0; i < al; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  static compaireMeta(a, b, ignoreDuration) {
    if (!a || !b) {
      return false;
    }

    for (let i = 0, k = Object.keys(a).length; i < k; i++) {
      let itema = a[Object.keys(a)[i]];
      let itemb = b[Object.keys(a)[i]];
      if (typeof itema !== 'object') {
        if (ignoreDuration && Object.keys(a)[i] !== 'duration' && Object.keys(a)[i] !== 'refSampleDuration' && Object.keys(a)[i] !== 'refSampleDurationFixed' && itema !== itemb) {
          return false;
        }
      } else if (itema.byteLength !== undefined) {
        if (itemb.byteLength === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Uint8Array')) {
          return false;
        }
      } else if (itema.length !== undefined) {
        if (itemb.length === undefined) {
          return false;
        }
        if (!TsDemuxer.compaireArray(itema, itemb, 'Array')) {
          return false;
        }
      } else {
        if (!TsDemuxer.compaireMeta(itema, itemb)) {
          return false;
        }
      }
    }
    return true;
  }

  static Merge(buffers) {
    let data;
    let length = 0;
    let offset = 0;
    for (let i = 0; i < buffers.length; i++) {
      length += buffers[i].length - buffers[i].position;
    }

    data = new Uint8Array(length);
    for (let i = 0; i < buffers.length; i++) {
      let buffer = buffers[i];
      data.set(new Uint8Array(buffer.buffer, buffer.position), offset);
      offset += buffer.length - buffer.position;
    }
    return new _xgplayerUtils.Stream(data.buffer);
  }

  static read(stream, ts, frags) {
    TsDemuxer.readHeader(stream, ts);
    TsDemuxer.readPayload(stream, ts, frags);
    if (ts.header.packet === 'MEDIA' && ts.header.payload === 1 && !ts.unknownPIDs) {
      ts.pes = TsDemuxer.PES(ts);
    }
  }

  static readPayload(stream, ts, frags) {
    let header = ts.header;
    let pid = header.pid;
    switch (pid) {
      case 0:
        TsDemuxer.PAT(stream, ts, frags);
        break;
      case 1:
        TsDemuxer.CAT(stream, ts, frags);
        break;
      case 2:
        TsDemuxer.TSDT(stream, ts, frags);
        break;
      case 0x1fff:
        break;
      default:
        // TODO: some的写法不太好，得改
        if (frags.pat.some(item => {
          return item.pid === pid;
        })) {
          TsDemuxer.PMT(stream, ts, frags);
        } else {
          let sts = frags.pmt ? frags.pmt.filter(item => item.pid === pid) : [];
          if (sts.length > 0) {
            TsDemuxer.Media(stream, ts, StreamType[sts[0].streamType][0]);
          } else {
            ts.unknownPIDs = true;
          };
        }
    }
  }

  static readHeader(stream, ts) {
    let header = {};
    header.sync = stream.readUint8();
    let next = stream.readUint16();
    header.error = next >>> 15;
    header.payload = next >>> 14 & 1;
    header.priority = next >>> 13 & 1;
    header.pid = next & 0x1fff;

    next = stream.readUint8();

    header.scrambling = next >> 6 & 0x3; // 是否加密，00表示不加密

    /**
     * 00 ISO/IEC未来使用保留
     * 01 没有调整字段，仅含有184B有效净荷
     * 02 没有有效净荷，仅含有183B调整字段
     * 03 0~182B调整字段后为有效净荷
     */
    header.adaptation = next >> 4 & 0x3;
    header.continuity = next & 15;
    header.packet = header.pid === 0 ? 'PAT' : 'MEDIA';
    ts.header = header;
  }

  static PAT(stream, ts, frags) {
    let ret = {};
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tabelID = next;
    next = stream.readUint16();
    ret.error = next >>> 7;
    ret.zero = next >>> 6 & 1;
    ret.sectionLength = next & 0xfff;
    ret.streamID = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (ret.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      let programNumber = stream.readUint16();
      let pid = stream.readUint16() & 0x1fff;
      list.push({
        program: programNumber,
        pid,
        type: programNumber === 0 ? 'network' : 'mapPID'
      });
    }
    if (list.length > 0) {
      frags.pat = frags.pat.concat(list);
    }
    ret.list = list;
    ret.program = stream.readUint16();
    ret.pid = stream.readUint16() & 0x1fff;
    ts.payload = ret;
    // TODO CRC
  }

  static PMT(stream, ts, frags) {
    let ret = {};
    let header = ts.header;
    header.packet = 'PMT';
    let next = stream.readUint8();
    stream.skip(next);
    next = stream.readUint8();
    ret.tableID = next;
    next = stream.readUint16();
    ret.sectionLength = next & 0xfff;
    ret.program = stream.readUint16();
    ret.current = stream.readUint8() & 1;
    ret.order = stream.readUint8();
    ret.lastOrder = stream.readUint8();
    ret.PCR_PID = stream.readUint16() & 0x1fff;
    ret.programLength = stream.readUint16() & 0xfff;
    let N = (ret.sectionLength - 13) / 5;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({
        streamType: stream.readUint8(),
        pid: stream.readUint16() & 0x1fff, // 0x07e5 视频，0x07e6
        es: stream.readUint16() & 0xfff
      });
    }
    ret.list = list;
    if (!this.pmt) {
      this.pmt = [];
    }
    frags.pmt = this.pmt.concat(list.map(item => {
      return {
        pid: item.pid,
        es: item.es,
        streamType: item.streamType,
        program: ret.program
      };
    }));
    ts.payload = ret;
  }

  static Media(stream, ts, type) {
    let header = ts.header;
    let payload = {};
    header.type = type;
    if (header.adaptation === 0x03) {
      payload.adaptationLength = stream.readUint8();
      if (payload.adaptationLength > 0) {
        let next = stream.readUint8();
        payload.discontinue = next >>> 7;
        payload.access = next >>> 6 & 0x01;
        payload.priority = next >>> 5 & 0x01;
        payload.PCR = next >>> 4 & 0x01;
        payload.OPCR = next >>> 3 & 0x01;
        payload.splicePoint = next >>> 2 & 0x01;
        payload.transportPrivate = next >>> 1 & 0x01;
        payload.adaptationField = next & 0x01;
        let _start = stream.position;
        if (payload.PCR === 1) {
          payload.programClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.programClockBase |= next >>> 15;
          payload.programClockExtension = next & 0x1ff;
        }
        if (payload.OPCR === 1) {
          payload.originProgramClockBase = stream.readUint32() << 1;
          next = stream.readUint16();
          payload.originProgramClockBase += next >>> 15;
          payload.originProgramClockExtension = next & 0x1ff;
        }
        if (payload.splicePoint === 1) {
          payload.spliceCountdown = stream.readUint8();
        }
        if (payload.transportPrivate === 1) {
          let length = stream.readUint8();
          let transportPrivateData = [];
          for (let i = 0; i < length; i++) {
            transportPrivateData.push(stream.readUint8());
          }
        }
        if (payload.adaptationField === 1) {
          let length = stream.readUint8();
          let next = stream.readUint8();
          let start = stream.position;
          let ltw = next >>> 7;
          let piecewise = next >>> 6 & 0x1;
          let seamless = next >>> 5 & 0x1;
          if (ltw === 1) {
            next = stream.readUint16();
            payload.ltwValid = next >>> 15;
            payload.ltwOffset = next & 0xefff;
          }
          if (piecewise === 1) {
            next = stream.readUint24();
            payload.piecewiseRate = next & 0x3fffff;
          }
          if (seamless === 1) {
            next = stream.readInt8();
            payload.spliceType = next >>> 4;
            payload.dtsNextAU1 = next >>> 1 & 0x7;
            payload.marker1 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU2 = next >>> 1;
            payload.marker2 = next & 0x1;
            next = stream.readUint16();
            payload.dtsNextAU3 = next;
          }
          stream.skip(length - 1 - (stream.position - start));
        }
        let lastStuffing = payload.adaptationLength - 1 - (stream.position - _start);
        stream.skip(lastStuffing);
      }
    }
    payload.stream = new _xgplayerUtils.Stream(stream.buffer.slice(stream.position));
    ts.payload = payload;
  }

  static PES(ts) {
    let ret = {};
    let buffer = ts.payload.stream;

    let next = buffer.readUint24();
    if (next !== 1) {
      ret.ES = {};
      ret.ES.buffer = buffer;
    } else {
      let streamID = buffer.readUint8();
      if (streamID >= 0xe0 && streamID <= 0xef) {
        ret.type = 'video';
      }
      if (streamID >= 0xc0 && streamID <= 0xdf) {
        ret.type = 'audio';
      }
      let packetLength = buffer.readUint16();
      ret.packetLength = packetLength;
      if (ret.type === 'video' || ret.type === 'audio') {
        let next = buffer.readUint8();
        let first = next >>> 6;
        if (first !== 0x02) {
          throw new Error('error when parse pes header');
        }
        next = buffer.readUint8();
        ret.ptsDTSFlag = next >>> 6;
        ret.escrFlag = next >>> 5 & 0x01;
        ret.esRateFlag = next >>> 4 & 0x01;
        ret.dsmFlag = next >>> 3 & 0x01;
        ret.additionalFlag = next >>> 2 & 0x01;
        ret.crcFlag = next >>> 1 & 0x01;
        ret.extensionFlag = next & 0x01;
        ret.pesHeaderLength = buffer.readUint8();
        let N1 = ret.pesHeaderLength;

        if (ret.ptsDTSFlag === 2) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          N1 -= 5;
          // 视频如果没有dts用pts
          if (ret.type === 'video') {
            ret.dts = ret.pts;
          }
        }
        if (ret.ptsDTSFlag === 3) {
          let pts = [];
          next = buffer.readUint8();
          pts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          next = buffer.readUint16();
          pts.push(next >>> 1);
          ret.pts = pts[0] << 30 | pts[1] << 15 | pts[2];
          let dts = [];
          next = buffer.readUint8();
          dts.push(next >>> 1 & 0x07);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          next = buffer.readUint16();
          dts.push(next >>> 1);
          ret.dts = dts[0] << 30 | dts[1] << 15 | dts[2];
          N1 -= 10;
        }
        if (ret.escrFlag === 1) {
          let escr = [];
          let ex = [];
          next = buffer.readUint8();
          escr.push(next >>> 3 & 0x07);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          escr.push(next & 0x03);
          next = buffer.readUint16();
          escr.push(next >>> 13);
          ex.push(next & 0x03);
          next = buffer.readUint8();
          ex.push(next >>> 1);
          ret.escr = (escr[0] << 30 | escr[1] << 28 | escr[2] << 15 | escr[3] << 13 | escr[4]) * 300 + (ex[0] << 7 | ex[1]);
          N1 -= 6;
        }
        if (ret.esRateFlag === 1) {
          next = buffer.readUint24();
          ret.esRate = next >>> 1 & 0x3fffff;
          N1 -= 3;
        }
        if (ret.dsmFlag === 1) {
          throw new Error('not support DSM_trick_mode');
        }
        if (ret.additionalFlag === 1) {
          next = buffer.readUint8();
          ret.additionalCopyInfo = next & 0x7f;
          N1 -= 1;
        }
        if (ret.crcFlag === 1) {
          ret.pesCRC = buffer.readUint16();
          N1 -= 2;
        }
        if (ret.extensionFlag === 1) {
          throw new Error('not support extension');
        }
        if (N1 > 0) {
          buffer.skip(N1);
        }
        ret.ES = TsDemuxer.ES(buffer, ret.type);
      } else {
        throw new Error('format is not supported');
      }
    }
    return ret;
  }

  static ES(buffer, type) {
    let next;
    let ret = {};
    if (type === 'video') {
      next = buffer.readUint32();
      if (next !== 1) {
        buffer.back(4);
        next = buffer.readUint24();
        if (next !== 1) {
          throw new Error('h264 nal header parse failed');
        }
      }
      buffer.skip(2); // 09 F0
      // TODO readnalu
      ret.buffer = buffer;
    } else if (type === 'audio') {
      next = buffer.readUint16();
      // adts的同步字节，12位
      if (next >>> 4 !== 0xfff) {
        throw new Error('aac ES parse Error');
      }
      const fq = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
      ret.id = (next >>> 3 & 0x01) === 0 ? 'MPEG-4' : 'MPEG-2';
      ret.layer = next >>> 1 & 0x03;
      ret.absent = next & 0x01;
      next = buffer.readUint16();
      ret.audioObjectType = (next >>> 14 & 0x03) + 1;
      ret.profile = ret.audioObjectType - 1;
      ret.frequencyIndex = next >>> 10 & 0x0f;
      ret.frequence = fq[ret.frequencyIndex];
      ret.channel = next >>> 6 & 0x07;
      ret.frameLength = (next & 0x03) << 11 | buffer.readUint16() >>> 5;
      TsDemuxer.getAudioConfig(ret);
      buffer.skip(1);
      ret.buffer = buffer;
    } else {
      throw new Error(`ES ${type} is not supported`);
    }

    return ret;
  }

  static TSDT(stream, ts, frags) {
    // TODO
    ts.payload = {};
  }

  static CAT(stream, ts, frags) {
    let ret = {};
    ret.tableID = stream.readUint8();
    let next = stream.readUint16();
    ret.sectionIndicator = next >>> 7;
    ret.sectionLength = next & 0x0fff;
    stream.skip(2);
    next = stream.readUint8();
    ret.version = next >>> 3;
    ret.currentNextIndicator = next & 0x01;
    ret.sectionNumber = stream.readUint8();
    ret.lastSectionNumber = stream.readUint8();
    let N = (this.sectionLength - 9) / 4;
    let list = [];
    for (let i = 0; i < N; i++) {
      list.push({});
    }
    ret.crc32 = stream.readUint32();
    ts.payload = ret;
  }

  static getAudioConfig(ret) {
    let userAgent = navigator.userAgent.toLowerCase();
    let config;
    let extensionSampleIndex;
    if (/firefox/i.test(userAgent)) {
      if (ret.frequencyIndex >= 6) {
        ret.audioObjectType = 5;
        config = new Array(4);
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        ret.audioObjectType = 2;
        config = new Array(2);
        extensionSampleIndex = ret.frequencyIndex;
      }
    } else if (userAgent.indexOf('android') !== -1) {
      ret.audioObjectType = 2;
      config = new Array(2);
      extensionSampleIndex = ret.frequencyIndex;
    } else {
      ret.audioObjectType = 5;
      config = new Array(4);
      if (ret.frequencyIndex >= 6) {
        extensionSampleIndex = ret.frequencyIndex - 3;
      } else {
        if (ret.channel === 1) {
          ret.audioObjectType = 2;
          config = new Array(2);
        }
        extensionSampleIndex = ret.frequencyIndex;
      }
    }

    config[0] = ret.audioObjectType << 3;
    config[0] |= (ret.frequencyIndex & 0x0e) >> 1;
    config[1] = (ret.frequencyIndex & 0x01) << 7;
    config[1] |= ret.channel << 3;
    if (ret.audioObjectType === 5) {
      config[1] |= (extensionSampleIndex & 0x0e) >> 1;
      config[2] = (extensionSampleIndex & 0x01) << 7;
      config[2] |= 2 << 2;
      config[3] = 0;
    }
    ret.audioConfig = config;
  }

  get inputBuffer() {
    return this._context.getInstance(this.configs.inputbuffer);
  }

  get _tracks() {
    return this._context.getInstance('TRACKS');
  }
}

exports.default = TsDemuxer;

/***/ }),

/***/ "../xgplayer-demux/src/hls/playlist.js":
/*!*********************************************!*\
  !*** ../xgplayer-demux/src/hls/playlist.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Playlist {
  constructor(configs) {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = configs.autoclear || false;
  }

  get list() {
    return this._list;
  }

  set baseURL(baseURL) {
    if (this.baseURL !== baseURL) {
      this.clear();
      this._baseURL = baseURL;
    }
  }

  get baseURL() {
    return this._baseURL;
  }

  push(ts, duration, discontinue) {
    if (!this._ts[ts]) {
      this._ts[ts] = { duration: duration,
        downloaded: false,
        downloading: false,
        start: this.duration,
        discontinue: discontinue ? true : false
      };
      this._list[this.duration] = ts;
      this.duration += duration;
      this.fragLength += 1;
    }
  }

  deleteFrag(url) {
    if (this._ts[url]) {
      if (this._ts[url].start > this._lastget.time) {
        this._lastget = {
          duration: this._ts[url].duration,
          time: this._ts[url].start,
          downloaded: false,
          downloading: false,
          url: url
        };
      }
      delete this._list[this._ts[url].start];
      delete this._ts[url];
      this.fragLength -= 1;
    }
  }

  pushM3U8(data, deletepre) {
    // 常规信息替换
    if (!data) {
      throw new Error(`No m3u8 data received.`);
      return;
    }
    this.version = data.version;
    this.targetduration = data.targetduration;
    if (data.encrypt && !this.encrypt) {
      this.encrypt = data.encrypt;
    }
    // 新分片信息
    if (data.sequence > this.sequence) {
      this.sequence = data.sequence;
      let newfraglist = [];
      for (let i = 0; i < data.frags.length; i++) {
        let frag = data.frags[i];
        if (!this._ts[frag.url]) {
          newfraglist.push(frag.url);
          this.push(frag.url, frag.duration, frag.discontinue);
        }
      }

      if (newfraglist.length < 1) {
        throw new Error(`Can not read ts file list.`);
      }

      if (deletepre) {
        let tslist = this.getTsList();
        for (let i = 0; i < tslist.length; i++) {
          if (newfraglist.indexOf(tslist[i]) < 0) {
            this.deleteFrag(tslist[i]);
          }
        }
      }
    } else {
      throw new Error(`Old m3u8 file received, ${data.sequence}`);
    }
  }

  getTsList() {
    return Object.keys(this._ts);
  }

  downloaded(tsname, isloaded) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloaded = isloaded;
    }
  }

  downloading(tsname, loading) {
    let ts = this._ts[tsname];
    if (ts) {
      ts.downloading = loading;
    }
  }

  getTsByName(name) {
    return this._ts[name];
  }

  getTs(time) {
    let timelist = Object.keys(this._list);
    let ts;

    if (time === undefined) {
      if (this._lastget) {
        time = this._lastget.time + this._lastget.duration;
      } else {
        time = 0;
      }
    }

    if (timelist.length < 1 || time >= this.duration) {
      return undefined;
    }
    timelist.sort((a, b) => {
      return parseFloat(a) - parseFloat(b);
    });
    for (let i = 0; i < timelist.length; i++) {
      if (time >= parseInt(timelist[i])) {
        let url = this._list[timelist[i]];
        let downloaded = this._ts[url].downloaded;
        let downloading = this._ts[url].downloading;
        ts = { url, downloaded, downloading, time: parseInt(timelist[i]), duration: parseInt(this._ts[url].duration) };
        if (this.autoclear) {
          delete this._ts[this._lastget.url];
          delete this._list[this._lastget.time];
        }
        this._lastget = ts;
      } else {
        break;
      }
    }
    return ts;
  }

  clear() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
  }

  clearDownloaded() {
    for (let i = 0, l = Object.keys(this._ts).length; i < l; i++) {
      let ts = this._ts[Object.keys(this._ts)[i]];
      ts.downloaded = false;
      ts.downloading = false;
    }
  }

  destroy() {
    this._baseURL = '';
    this._list = {};
    this._ts = {};
    this.version = 0;
    this.sequence = -1;
    this.targetduration = 0;
    this.duration = 0;
    this.fragLength = 0;
    this._lastget = undefined;
    this._audoclear = false;
  }
}

exports.default = Playlist;

/***/ }),

/***/ "../xgplayer-loader/index.js":
/*!***********************************!*\
  !*** ../xgplayer-loader/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  FetchLoader: __webpack_require__(/*! ./src/fetch-loader */ "../xgplayer-loader/src/fetch-loader.js").default
};

/***/ }),

/***/ "../xgplayer-loader/src/fetch-loader.js":
/*!**********************************************!*\
  !*** ../xgplayer-loader/src/fetch-loader.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const READ_STREAM = 0;
const READ_TEXT = 1;
const READ_JSON = 2;
const READ_BUFFER = 3;
class FetchLoader {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.url = null;
    this.status = 0;
    this.error = null;
    this._reader = null;
    this._canceled = false;
    this._destroyed = false;
    this.readtype = this.configs.readtype;
    this.buffer = this.configs.buffer || 'LOADER_BUFFER';
    this._loaderTaskNo = 0;
  }

  init() {
    this.on(LOADER_EVENTS.LADER_START, this.load.bind(this));
  }

  static get type() {
    return 'loader';
  }

  load(url, opts) {
    let _this = this;
    this.url = url;
    this._canceled = false;

    // TODO: Add Ranges
    let params = this.getParams(opts);
    _this.loading = true;
    return fetch(this.url, params).then(function (response) {
      if (response.ok) {
        _this.status = response.status;
        return _this._onFetchResponse(response);
      }
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, new Error(`invalid response.`));
    }).catch(function (error) {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
      throw new Error(error.message);
    });
  }

  _onFetchResponse(response) {
    let _this = this;
    let buffer = this._context.getInstance(this.buffer);
    this._loaderTaskNo++;
    let taskno = this._loaderTaskNo;
    if (response.ok === true) {
      switch (this.readtype) {
        case READ_JSON:
          response.json().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_TEXT:
          response.text().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(data);
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_BUFFER:
          response.arrayBuffer().then(data => {
            _this.loading = false;
            if (!_this._canceled && !_this._destroyed) {
              if (buffer) {
                buffer.push(new Uint8Array(data));
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
              } else {
                _this.emit(LOADER_EVENTS.LOADER_COMPLETE, data);
              }
            }
          });
          break;
        case READ_STREAM:
        default:
          return this._onReader(response.body.getReader(), taskno);
      }
    }
  }

  _onReader(reader, taskno) {
    let buffer = this._context.getInstance(this.buffer);
    if (!buffer && this._reader || this._destroyed) {
      try {
        this._reader.cancel();
      } catch (e) {
        // DO NOTHING
      }
    }

    this._reader = reader;
    if (this.loading === false) {
      return;
    }

    let _this = this;
    // reader read function returns a Promise. get data when callback and has value.done when disconnected.
    // read方法返回一个Promise. 回调中可以获取到数据。当value.done存在时，说明链接断开。
    this._reader && this._reader.read().then(function (val) {
      if (val.done) {
        // TODO: 完成处理
        _this.loading = false;
        _this.status = 0;
        _this.emit(LOADER_EVENTS.LOADER_COMPLETE, buffer);
        return;
      }

      if (_this._canceled || _this._destroyed) {
        if (_this._reader) {
          try {
            _this._reader.cancel();
          } catch (e) {
            // DO NOTHING
          }
        }

        return;
      }
      buffer.push(val.value);
      _this.emit(LOADER_EVENTS.LOADER_DATALOADED, buffer);
      return _this._onReader(reader, taskno);
    }).catch(error => {
      _this.loading = false;
      _this.emit(LOADER_EVENTS.LOADER_ERROR, _this.TAG, error);
    });
  }

  getParams(opts) {
    let options = Object.assign({}, opts);
    let headers = new Headers();

    let params = {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'

      // add custmor headers
      // 添加自定义头
    };if (typeof this.configs.headers === 'object') {
      let configHeaders = this.configs.headers;
      for (let key in configHeaders) {
        if (configHeaders.hasOwnProperty(key)) {
          headers.append(key, configHeaders[key]);
        }
      }
    }

    if (typeof options.headers === 'object') {
      let optHeaders = options.headers;
      for (let key in optHeaders) {
        if (optHeaders.hasOwnProperty(key)) {
          headers.append(key, optHeaders[key]);
        }
      }
    }

    if (options.cors === false) {
      params.mode = 'same-origin';
    }

    // withCredentials is disabled by default
    // withCredentials 在默认情况下不被使用。
    if (options.withCredentials) {
      params.credentials = 'include';
    }

    // TODO: Add ranges;
    return params;
  }

  cancel() {
    if (this._reader) {
      try {
        this._reader.cancel();
      } catch (e) {
        // 防止failed: 200错误被打印到控制台上
      }
      this._reader = null;
      this.loading = false;
      this._canceled = true;
    }
  }

  destroy() {
    this._destroyed = true;
    this.cancel();
  }
}

exports.default = FetchLoader;

/***/ }),

/***/ "../xgplayer-remux/index.js":
/*!**********************************!*\
  !*** ../xgplayer-remux/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Mp4Remuxer: __webpack_require__(/*! ./src/mp4 */ "../xgplayer-remux/src/mp4/index.js").default
};

/***/ }),

/***/ "../xgplayer-remux/src/mp4/fmp4.js":
/*!*****************************************!*\
  !*** ../xgplayer-remux/src/mp4/fmp4.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

// const UINT32_MAX = Math.pow(2, 32) - 1;
class Fmp4 {
  static size(value) {
    return _xgplayerUtils.Buffer.writeUint32(value);
  }
  static initBox(size, name, ...content) {
    const buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(size), Fmp4.type(name), ...content);
    return buffer.buffer;
  }
  static extension(version, flag) {
    return new Uint8Array([version, flag >> 16 & 0xff, flag >> 8 & 0xff, flag & 0xff]);
  }
  static ftyp() {
    return Fmp4.initBox(24, 'ftyp', new Uint8Array([0x69, 0x73, 0x6F, 0x6D, // isom,
    0x0, 0x0, 0x00, 0x01, // minor_version: 0x01
    0x69, 0x73, 0x6F, 0x6D, // isom
    0x61, 0x76, 0x63, 0x31 // avc1
    ]));
  }
  static moov({ type, meta }) {
    let size = 8;
    let mvhd = Fmp4.mvhd(meta.duration, meta.timescale);
    let trak;

    if (type === 'video') {
      trak = Fmp4.videoTrak(meta);
    } else {
      trak = Fmp4.audioTrak(meta);
    }

    let mvex = Fmp4.mvex(meta.duration, meta.timescale || 1000, meta.id);
    [mvhd, trak, mvex].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moov', mvhd, trak, mvex);
  }
  static mvhd(duration, timescale = 1000) {
    // duration *= timescale;
    let bytes = new Uint8Array([0x00, 0x00, 0x00, 0x00, // version(0) + flags     1位的box版本+3位flags   box版本，0或1，一般为0。（以下字节数均按version=0）
    0x00, 0x00, 0x00, 0x00, // creation_time    创建时间  （相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification_time   修改时间

    /**
           * timescale: 4 bytes文件媒体在1秒时间内的刻度值，可以理解为1秒长度
           */
    timescale >>> 24 & 0xFF, timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF,

    /**
           * duration: 4 bytes该track的时间长度，用duration和time scale值可以计算track时长，比如audio track的time scale = 8000,
           * duration = 560128，时长为70.016，video track的time scale = 600, duration = 42000，时长为70
           */
    duration >>> 24 & 0xFF, duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x01, 0x00, 0x00, // Preferred rate: 1.0   推荐播放速率，高16位和低16位分别为小数点整数部分和小数部分，即[16.16] 格式，该值为1.0（0x00010000）表示正常前向播放
    /**
           * PreferredVolume(1.0, 2bytes) + reserved(2bytes)
           * 与rate类似，[8.8] 格式，1.0（0x0100）表示最大音量
           */
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, //  reserved: 4 + 4 bytes保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // 视频变换矩阵   线性代数
    0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    0x00, 0x00, 0x00, 0x00, // ----begin pre_defined 6 * 4 bytes----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre-defined 保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // ----end pre_defined 6 * 4 bytes----
    0xFF, 0xFF, 0xFF, 0xFF // next_track_ID 下一个track使用的id号
    ]);
    return Fmp4.initBox(8 + bytes.length, 'mvhd', new Uint8Array(bytes));
  }
  static videoTrak(data) {
    let size = 8;

    let tkhd = Fmp4.tkhd({
      id: 1,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: data.presentWidth,
      height: data.presentHeight,
      type: 'video'
    });
    let mdia = Fmp4.mdia({
      type: 'video',
      timescale: data.timescale || 1000,
      duration: data.duration,
      avcc: data.avcc,
      parRatio: data.parRatio,
      width: data.presentWidth,
      height: data.presentHeight
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static audioTrak(data) {
    let size = 8;
    let tkhd = Fmp4.tkhd({
      id: 2,
      duration: data.duration,
      timescale: data.timescale || 1000,
      width: 0,
      height: 0,
      type: 'audio'
    });
    let mdia = Fmp4.mdia({
      type: 'audio',
      timescale: data.timescale || 1000,
      duration: data.duration,
      channelCount: data.channelCount,
      samplerate: data.sampleRate,
      config: data.config
    });
    [tkhd, mdia].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'trak', tkhd, mdia);
  }
  static tkhd(data) {
    let id = data.id;
    let duration = data.duration;
    let width = data.width;
    let height = data.height;
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x07, // version(0) + flags 1位版本 box版本，0或1，一般为0。（以下字节数均按version=0）按位或操作结果值，预定义如下：
    // 0x000001 track_enabled，否则该track不被播放；
    // 0x000002 track_in_movie，表示该track在播放中被引用；
    // 0x000004 track_in_preview，表示该track在预览时被引用。
    // 一般该值为7，1+2+4 如果一个媒体所有track均未设置track_in_movie和track_in_preview，将被理解为所有track均设置了这两项；对于hint track，该值为0
    // hint track 这个特殊的track并不包含媒体数据，而是包含了一些将其他数据track打包成流媒体的指示信息。
    0x00, 0x00, 0x00, 0x00, // creation_time创建时间（相对于UTC时间1904-01-01零点的秒数）
    0x00, 0x00, 0x00, 0x00, // modification time 修改时间
    id >>> 24 & 0xFF, // track_ID: 4 bytes id号，不能重复且不能为0
    id >>> 16 & 0xFF, id >>> 8 & 0xFF, id & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 4 bytes    保留位
    duration >>> 24 & 0xFF, // duration: 4 bytes track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x00, 0x00, 0x00, 0x00, // reserved: 2 * 4 bytes    保留位
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // layer(2bytes) + alternate_group(2bytes)  视频层，默认为0，值小的在上层.track分组信息，默认为0表示该track未与其他track有群组关系
    0x00, 0x00, 0x00, 0x00, // volume(2bytes) + reserved(2bytes)    [8.8] 格式，如果为音频track，1.0（0x0100）表示最大音量；否则为0   +保留位
    0x00, 0x01, 0x00, 0x00, // ----begin composition matrix----
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, // 视频变换矩阵
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x00, 0x00, 0x00, // ----end composition matrix----
    width >>> 8 & 0xFF, // //宽度
    width & 0xFF, 0x00, 0x00, height >>> 8 & 0xFF, // 高度
    height & 0xFF, 0x00, 0x00]);
    return Fmp4.initBox(8 + content.byteLength, 'tkhd', content);
  }
  static edts(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let duration = data.duration;
    let mediaTime = data.mediaTime;
    buffer.write(Fmp4.size(36), Fmp4.type('edts'));
    // elst
    buffer.write(Fmp4.size(28), Fmp4.type('elst'));
    buffer.write(new Uint8Array([0x00, 0x00, 0x00, 0x01, // entry count
    duration >> 24 & 0xff, duration >> 16 & 0xff, duration >> 8 & 0xff, duration & 0xff, mediaTime >> 24 & 0xff, mediaTime >> 16 & 0xff, mediaTime >> 8 & 0xff, mediaTime & 0xff, 0x00, 0x00, 0x00, 0x01 // media rate
    ]));
    return buffer.buffer;
  }
  static mdia(data) {
    let size = 8;
    let mdhd = Fmp4.mdhd(data.timescale, data.duration);
    let hdlr = Fmp4.hdlr(data.type);
    let minf = Fmp4.minf(data);
    [mdhd, hdlr, minf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'mdia', mdhd, hdlr, minf);
  }
  static mdhd(timescale = 1000, duration) {
    let content = new Uint8Array([0x00, 0x00, 0x00, 0x00, // creation_time    创建时间
    0x00, 0x00, 0x00, 0x00, // modification_time修改时间
    timescale >>> 24 & 0xFF, // timescale: 4 bytes    文件媒体在1秒时间内的刻度值，可以理解为1秒长度
    timescale >>> 16 & 0xFF, timescale >>> 8 & 0xFF, timescale & 0xFF, duration >>> 24 & 0xFF, // duration: 4 bytes  track的时间长度
    duration >>> 16 & 0xFF, duration >>> 8 & 0xFF, duration & 0xFF, 0x55, 0xC4, // language: und (undetermined) 媒体语言码。最高位为0，后面15位为3个字符（见ISO 639-2/T标准中定义）
    0x00, 0x00 // pre_defined = 0
    ]);
    return Fmp4.initBox(12 + content.byteLength, 'mdhd', Fmp4.extension(0, 0), content);
  }
  static hdlr(type) {
    let value = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // pre_defined
    0x76, 0x69, 0x64, 0x65, // handler_type: 'vide'
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, // reserved
    0x56, 0x69, 0x64, 0x65, 0x6f, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00 // name: 'VideoHandler'
    ];
    if (type === 'audio') {
      value.splice(8, 4, ...[0x73, 0x6f, 0x75, 0x6e]);
      value.splice(24, 13, ...[0x53, 0x6f, 0x75, 0x6e, 0x64, 0x48, 0x61, 0x6e, 0x64, 0x6c, 0x65, 0x72, 0x00]);
    }
    return Fmp4.initBox(8 + value.length, 'hdlr', new Uint8Array(value));
  }
  static minf(data) {
    let size = 8;
    let vmhd = data.type === 'video' ? Fmp4.vmhd() : Fmp4.smhd();
    let dinf = Fmp4.dinf();
    let stbl = Fmp4.stbl(data);
    [vmhd, dinf, stbl].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'minf', vmhd, dinf, stbl);
  }
  static vmhd() {
    return Fmp4.initBox(20, 'vmhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x01, // flags
    0x00, 0x00, // graphicsmode
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // opcolor
    ]));
  }
  static smhd() {
    return Fmp4.initBox(16, 'smhd', new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, // balance
    0x00, 0x00 // reserved
    ]));
  }
  static dinf() {
    let buffer = new _xgplayerUtils.Buffer();
    let dref = [0x00, // version 0
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x01, // entry_count
    0x00, 0x00, 0x00, 0x0c, // entry_size
    0x75, 0x72, 0x6c, 0x20, // 'url' type
    0x00, // version 0
    0x00, 0x00, 0x01 // entry_flags
    ];
    buffer.write(Fmp4.size(36), Fmp4.type('dinf'), Fmp4.size(28), Fmp4.type('dref'), new Uint8Array(dref));
    return buffer.buffer;
  }
  static stbl(data) {
    let size = 8;
    let stsd = Fmp4.stsd(data);
    let stts = Fmp4.stts();
    let stsc = Fmp4.stsc();
    let stsz = Fmp4.stsz();
    let stco = Fmp4.stco();
    [stsd, stts, stsc, stsz, stco].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'stbl', stsd, stts, stsc, stsz, stco);
  }
  static stsd(data) {
    let content;
    if (data.type === 'audio') {
      // if (!data.isAAC && data.codec === 'mp4') {
      //     content = FMP4.mp3(data);
      // } else {
      //
      // }
      // 支持mp4a
      content = Fmp4.mp4a(data);
    } else {
      content = Fmp4.avc1(data);
    }
    return Fmp4.initBox(16 + content.byteLength, 'stsd', Fmp4.extension(0, 0), new Uint8Array([0x00, 0x00, 0x00, 0x01]), content);
  }
  static mp4a(data) {
    let content = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // reserved
    0x00, data.channelCount, // channelcount
    0x00, 0x10, // sampleSize:16bits
    0x00, 0x00, 0x00, 0x00, // reserved2
    data.samplerate >> 8 & 0xff, data.samplerate & 0xff, //
    0x00, 0x00]);
    let esds = Fmp4.esds(data.config);
    return Fmp4.initBox(8 + content.byteLength + esds.byteLength, 'mp4a', content, esds);
  }
  static esds(config = [43, 146, 8, 0]) {
    const configlen = config.length;
    let buffer = new _xgplayerUtils.Buffer();
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags

    0x03, // descriptor_type
    0x17 + configlen, // length
    0x00, 0x01, // es_id
    0x00, // stream_priority

    0x04, // descriptor_type
    0x0f + configlen, // length
    0x40, // codec : mpeg4_audio
    0x15, // stream_type
    0x00, 0x00, 0x00, // buffer_size
    0x00, 0x00, 0x00, 0x00, // maxBitrate
    0x00, 0x00, 0x00, 0x00, // avgBitrate

    0x05 // descriptor_type
    ].concat([configlen]).concat(config).concat([0x06, 0x01, 0x02]));
    buffer.write(Fmp4.size(8 + content.byteLength), Fmp4.type('esds'), content);
    return buffer.buffer;
  }
  static avc1(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 40; // 8(avc1)+8(avcc)+8(btrt)+16(pasp)
    // let sps = data.sps
    // let pps = data.pps
    let width = data.width;
    let height = data.height;
    let hSpacing = data.parRatio.height;
    let vSpacing = data.parRatio.width;
    // let avccBuffer = new Buffer()
    // avccBuffer.write(new Uint8Array([
    //   0x01, // version
    //   sps[1], // profile
    //   sps[2], // profile compatible
    //   sps[3], // level
    //   0xfc | 3,
    //   0xE0 | 1 // 目前只处理一个sps
    // ].concat([sps.length >>> 8 & 0xff, sps.length & 0xff])))
    // avccBuffer.write(sps, new Uint8Array([1, pps.length >>> 8 & 0xff, pps.length & 0xff]), pps)

    let avcc = data.avcc;
    let avc1 = new Uint8Array([0x00, 0x00, 0x00, // reserved
    0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // data_reference_index
    0x00, 0x00, // pre_defined
    0x00, 0x00, // reserved
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pre_defined
    width >> 8 & 0xff, width & 0xff, // width
    height >> 8 & 0xff, height & 0xff, // height
    0x00, 0x48, 0x00, 0x00, // horizresolution
    0x00, 0x48, 0x00, 0x00, // vertresolution
    0x00, 0x00, 0x00, 0x00, // reserved
    0x00, 0x01, // frame_count
    0x12, 0x64, 0x61, 0x69, 0x6C, // dailymotion/hls.js
    0x79, 0x6D, 0x6F, 0x74, 0x69, 0x6F, 0x6E, 0x2F, 0x68, 0x6C, 0x73, 0x2E, 0x6A, 0x73, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // compressorname
    0x00, 0x18, // depth = 24
    0x11, 0x11]); // pre_defined = -1
    let btrt = new Uint8Array([0x00, 0x1c, 0x9c, 0x80, // bufferSizeDB
    0x00, 0x2d, 0xc6, 0xc0, // maxBitrate
    0x00, 0x2d, 0xc6, 0xc0 // avgBitrate
    ]);
    let pasp = new Uint8Array([hSpacing >> 24, // hSpacing
    hSpacing >> 16 & 0xff, hSpacing >> 8 & 0xff, hSpacing & 0xff, vSpacing >> 24, // vSpacing
    vSpacing >> 16 & 0xff, vSpacing >> 8 & 0xff, vSpacing & 0xff]);

    buffer.write(Fmp4.size(size + avc1.byteLength + avcc.byteLength + btrt.byteLength), Fmp4.type('avc1'), avc1, Fmp4.size(8 + avcc.byteLength), Fmp4.type('avcC'), avcc, Fmp4.size(20), Fmp4.type('btrt'), btrt, Fmp4.size(16), Fmp4.type('pasp'), pasp);
    return buffer.buffer;
  }
  static stts() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stts', content);
  }
  static stsc() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stsc', content);
  }
  static stco() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00 // entry_count
    ]);
    return Fmp4.initBox(16, 'stco', content);
  }
  static stsz() {
    let content = new Uint8Array([0x00, // version
    0x00, 0x00, 0x00, // flags
    0x00, 0x00, 0x00, 0x00, // sample_size
    0x00, 0x00, 0x00, 0x00 // sample_count
    ]);
    return Fmp4.initBox(20, 'stsz', content);
  }
  static mvex(duration, timescale = 1000, trackID) {
    let buffer = new _xgplayerUtils.Buffer();
    let mehd = _xgplayerUtils.Buffer.writeUint32(duration);
    buffer.write(Fmp4.size(56), Fmp4.type('mvex'), Fmp4.size(16), Fmp4.type('mehd'), Fmp4.extension(0, 0), mehd, Fmp4.trex(trackID));
    return buffer.buffer;
  }
  static trex(id) {
    let content = new Uint8Array([0x00, // version 0
    0x00, 0x00, 0x00, // flags
    id >> 24, id >> 16 & 0xff, id >> 8 & 0xff, id & 0xff, // track_ID
    0x00, 0x00, 0x00, 0x01, // default_sample_description_index
    0x00, 0x00, 0x00, 0x00, // default_sample_duration
    0x00, 0x00, 0x00, 0x00, // default_sample_size
    0x00, 0x01, 0x00, 0x01 // default_sample_flags
    ]);
    return Fmp4.initBox(8 + content.byteLength, 'trex', content);
  }
  static moof(data) {
    let size = 8;
    let mfhd = Fmp4.mfhd();
    let traf = Fmp4.traf(data);
    [mfhd, traf].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'moof', mfhd, traf);
  }
  static mfhd() {
    let content = _xgplayerUtils.Buffer.writeUint32(Fmp4.sequence);
    Fmp4.sequence += 1;
    return Fmp4.initBox(16, 'mfhd', Fmp4.extension(0, 0), content);
  }
  static traf(data) {
    let size = 8;
    let tfhd = Fmp4.tfhd(data.id);
    let tfdt = Fmp4.tfdt(data.time);
    let sdtp = Fmp4.sdtp(data);
    let trun = Fmp4.trun(data, sdtp.byteLength);

    [tfhd, tfdt, trun, sdtp].forEach(item => {
      size += item.byteLength;
    });
    return Fmp4.initBox(size, 'traf', tfhd, tfdt, trun, sdtp);
  }
  static tfhd(id) {
    let content = _xgplayerUtils.Buffer.writeUint32(id);
    return Fmp4.initBox(16, 'tfhd', Fmp4.extension(0, 0), content);
  }
  static tfdt(time) {
    // let upper = Math.floor(time / (UINT32_MAX + 1)),
    //     lower = Math.floor(time % (UINT32_MAX + 1));
    return Fmp4.initBox(16, 'tfdt', Fmp4.extension(0, 0), _xgplayerUtils.Buffer.writeUint32(time));
  }
  static trun(data, sdtpLength) {
    // let id = data.id;
    // let ceil = id === 1 ? 16 : 12;
    let buffer = new _xgplayerUtils.Buffer();
    let sampleCount = _xgplayerUtils.Buffer.writeUint32(data.samples.length);
    // mdat-header 8
    // moof-header 8
    // mfhd 16
    // traf-header 8
    // thhd 16
    // tfdt 20
    // trun-header 12
    // sampleCount 4
    // data-offset 4
    // samples.length
    let offset = _xgplayerUtils.Buffer.writeUint32(8 + 8 + 16 + 8 + 16 + 16 + 12 + 4 + 4 + 16 * data.samples.length + sdtpLength);
    buffer.write(Fmp4.size(20 + 16 * data.samples.length), Fmp4.type('trun'), new Uint8Array([0x00, 0x00, 0x0F, 0x01]), sampleCount, offset);

    // let size = buffer.buffer.byteLength
    // let writeOffset = 0
    // data.samples.forEach(() => {
    //   size += 16
    // })
    //
    // let trunBox = new Uint8Array(size)

    // trunBox.set(buffer.buffer, 0)

    data.samples.forEach(item => {
      const flags = item.flags;
      // console.log(item.type, item.dts, item.duration)

      buffer.write(new Uint8Array([item.duration >>> 24 & 0xFF, // sample_duration
      item.duration >>> 16 & 0xFF, item.duration >>> 8 & 0xFF, item.duration & 0xFF, item.size >>> 24 & 0xFF, // sample_size
      item.size >>> 16 & 0xFF, item.size >>> 8 & 0xFF, item.size & 0xFF, flags.isLeading << 2 | flags.dependsOn, // sample_flags
      flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.isNonSync, 0x00, 0x00, // sample_degradation_priority
      item.cts >>> 24 & 0xFF, // sample_composition_time_offset
      item.cts >>> 16 & 0xFF, item.cts >>> 8 & 0xFF, item.cts & 0xFF]));
      // writeOffset += 16
      // buffer.write(Buffer.writeUint32(0));
    });
    return buffer.buffer;
  }
  static sdtp(data) {
    let buffer = new _xgplayerUtils.Buffer();
    buffer.write(Fmp4.size(12 + data.samples.length), Fmp4.type('sdtp'), Fmp4.extension(0, 0));
    data.samples.forEach(item => {
      const flags = item.flags;
      const num = flags.isLeading << 6 | // is_leading: 2 (bit)
      flags.dependsOn << 4 | // sample_depends_on
      flags.isDependedOn << 2 | // sample_is_depended_on
      flags.hasRedundancy; // sample_has_redundancy

      buffer.write(new Uint8Array([num]));
    });
    return buffer.buffer;
  }
  static mdat(data) {
    let buffer = new _xgplayerUtils.Buffer();
    let size = 8;
    data.samples.forEach(item => {
      size += item.size;
    });
    buffer.write(Fmp4.size(size), Fmp4.type('mdat'));
    let mdatBox = new Uint8Array(size);
    let offset = 0;
    mdatBox.set(buffer.buffer, offset);
    offset += 8;
    data.samples.forEach(item => {
      item.buffer.forEach(unit => {
        mdatBox.set(unit, offset);
        offset += unit.byteLength;
        // buffer.write(unit.data);
      });
    });
    return mdatBox;
  }
}
Fmp4.type = name => {
  return new Uint8Array([name.charCodeAt(0), name.charCodeAt(1), name.charCodeAt(2), name.charCodeAt(3)]);
};
Fmp4.sequence = 1;

exports.default = Fmp4;

/***/ }),

/***/ "../xgplayer-remux/src/mp4/index.js":
/*!******************************************!*\
  !*** ../xgplayer-remux/src/mp4/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _fmp = __webpack_require__(/*! ./fmp4 */ "../xgplayer-remux/src/mp4/fmp4.js");

var _fmp2 = _interopRequireDefault(_fmp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const REMUX_EVENTS = _xgplayerUtils.EVENTS.REMUX_EVENTS;

class Mp4Remuxer {
  constructor() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;

    this.isFirstVideo = true;
    this.isFirstAudio = true;

    this.videoAllDuration = 0;
    this.audioAllDuration = 0;
  }

  init() {
    this.on(REMUX_EVENTS.REMUX_MEDIA, this.remux.bind(this));
    this.on(REMUX_EVENTS.REMUX_METADATA, this.onMetaDataReady.bind(this));
    this.on(REMUX_EVENTS.DETECT_CHANGE_STREAM, this.resetDtsBase.bind(this));
  }

  destroy() {
    this._dtsBase = -1;
    this._dtsBaseInited = false;
  }

  reset() {
    this._dtsBase = 0;
    this._isDtsBaseInited = false;
  }

  remux() {
    const { audioTrack, videoTrack } = this._context.getInstance('TRACKS');
    !this._isDtsBaseInited && this.calcDtsBase(audioTrack, videoTrack);

    this._remuxVideo(videoTrack);
    this._remuxAudio(audioTrack);
  }

  resetDtsBase() {
    // for hls 中途切换 meta后seek
    this._dtsBase = 0;
    this._dtsBaseInited = false;
  }

  seek() {}

  onMetaDataReady(type) {
    let track;

    if (type === 'audio') {
      const { audioTrack } = this._context.getInstance('TRACKS');
      track = audioTrack;
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      track = videoTrack;
    }

    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.mimetype = track.meta.codec;
    source.init = this.remuxInitSegment(type, track.meta);
    // source.inited = false;

    // this.resetDtsBase()
    this.emit(REMUX_EVENTS.INIT_SEGMENT, type);
  }

  remuxInitSegment(type, meta) {
    let initSegment = new _xgplayerUtils.Buffer();
    let ftyp = _fmp2.default.ftyp();
    let moov = _fmp2.default.moov({ type, meta: meta });

    initSegment.write(ftyp, moov);
    return initSegment;
  }

  calcDtsBase(audioTrack, videoTrack) {
    if (!audioTrack.samples.length && !videoTrack.samples.length) {
      return;
    }

    let audioBase = Infinity;
    let videoBase = Infinity;

    if (audioTrack.samples && audioTrack.samples.length) {
      audioBase = audioTrack.samples[0].dts;
    }
    if (videoTrack.samples && videoTrack.samples.length) {
      videoBase = videoTrack.samples[0].dts;
    }

    this._dtsBase = Math.min(audioBase, videoBase);
    this._isDtsBaseInited = true;
  }

  _remuxVideo(videoTrack) {
    const track = videoTrack;

    if (!videoTrack.samples || !videoTrack.samples.length) {
      return;
    }

    let { samples } = track;
    let firstDts = -1;

    let initSegment = null;
    const mp4Samples = [];
    const mdatBox = {
      samples: []
    };

    while (samples.length) {
      const avcSample = samples.shift();

      const { isKeyframe, options } = avcSample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('video', options.meta);
        options.meta = null;
        samples.unshift(avcSample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = avcSample.dts - this._dtsBase;

      if (firstDts === -1) {
        firstDts = dts;
      }

      let cts;
      let pts;
      if (avcSample.pts !== undefined) {
        pts = avcSample.pts - this._dtsBase;
        cts = pts - dts;
      }
      if (avcSample.cts !== undefined) {
        pts = avcSample.cts + dts;
        cts = avcSample.cts;
      }

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatBox.samples.push(mdatSample);
      mdatSample.buffer.push(avcSample.data);
      mdatSample.size += avcSample.data.byteLength;

      let sampleDuration = 0;
      if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // lastest sample, use second last duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference duration
          sampleDuration = this.videoMeta.refSampleDuration;
        }
      }
      this.videoAllDuration += sampleDuration;
      // console.log(`dts ${dts}`, `pts ${pts}`, `cts: ${cts}`, `duration: ${sampleDuration}`, avcSample)
      mp4Samples.push({
        dts,
        cts,
        pts,
        data: avcSample.data,
        size: avcSample.data.byteLength,
        isKeyframe,
        duration: sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: isKeyframe ? 2 : 1,
          isDependedOn: isKeyframe ? 1 : 0,
          hasRedundancy: 0,
          isNonSync: isKeyframe ? 0 : 1
        },
        originDts: dts,
        type: 'video'
      });
    }

    let moofMdat = new _xgplayerUtils.Buffer();
    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('video', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('video', initSegment);

      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxVideo(track);
      }
    }

    this.isFirstVideo = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'video');

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  _remuxAudio(track) {
    const { samples } = track;
    let firstDts = -1;
    let mp4Samples = [];

    let initSegment = null;
    const mdatBox = {
      samples: []
    };
    if (!samples || !samples.length) {
      return;
    }
    let isFirstDtsInited = false;
    while (samples.length) {
      let sample = samples.shift();
      const { data, options } = sample;
      if (!this.isFirstAudio && options && options.meta) {
        initSegment = this.remuxInitSegment('audio', options.meta);
        options.meta = null;
        samples.unshift(sample);
        if (!options.isContinue) {
          this.resetDtsBase();
        }
        break;
      }

      let dts = sample.dts - this._dtsBase;
      const originDts = dts;
      if (!isFirstDtsInited) {
        firstDts = dts;
        isFirstDtsInited = true;
      }

      let sampleDuration = 0;

      if (this.audioMeta.refSampleDurationFixed) {
        sampleDuration = this.audioMeta.refSampleDurationFixed;
      } else if (samples.length >= 1) {
        const nextDts = samples[0].dts - this._dtsBase;
        sampleDuration = nextDts - dts;
      } else {
        if (mp4Samples.length >= 1) {
          // use second last sample duration
          sampleDuration = mp4Samples[mp4Samples.length - 1].duration;
        } else {
          // the only one sample, use reference sample duration
          sampleDuration = this.audioMeta.refSampleDuration;
        }
      }

      // console.log('remux audio ', dts)
      this.audioAllDuration += sampleDuration;
      const mp4Sample = {
        dts,
        pts: dts,
        cts: 0,
        size: data.byteLength,
        duration: sample.duration ? sample.duration : sampleDuration,
        flags: {
          isLeading: 0,
          dependsOn: 2,
          isDependedOn: 1,
          hasRedundancy: 0,
          isNonSync: 0
        },
        isKeyframe: true,
        originDts,
        type: 'audio'
      };

      let mdatSample = {
        buffer: [],
        size: 0
      };
      mdatSample.buffer.push(data);
      mdatSample.size += data.byteLength;

      mdatBox.samples.push(mdatSample);

      mp4Samples.push(mp4Sample);
    }

    const moofMdat = new _xgplayerUtils.Buffer();

    if (mp4Samples.length) {
      const moof = _fmp2.default.moof({
        id: track.meta.id,
        time: firstDts,
        samples: mp4Samples
      });
      const mdat = _fmp2.default.mdat(mdatBox);
      moofMdat.write(moof, mdat);

      this.writeToSource('audio', moofMdat);
    }

    if (initSegment) {
      this.writeToSource('audio', initSegment);
      if (samples.length) {
        // second part of stream change
        track.samples = samples;
        return this._remuxAudio(track);
      }
    }

    this.isFirstAudio = false;
    this.emit(REMUX_EVENTS.MEDIA_SEGMENT, 'audio', moofMdat);

    const lastSample = mp4Samples[mp4Samples.length - 1];
    this._videoNextDts = lastSample.dts + lastSample.duration;
    track.samples = [];
    track.length = 0;
  }

  writeToSource(type, buffer) {
    let presourcebuffer = this._context.getInstance('PRE_SOURCE_BUFFER');
    let source = presourcebuffer.getSource(type);
    if (!source) {
      source = presourcebuffer.createSource(type);
    }

    source.data.push(buffer);
  }

  initSilentAudio(dts, duration) {
    const unit = Mp4Remuxer.getSilentFrame(this.audioMeta.channelCount);
    return {
      dts,
      pts: dts,
      cts: 0,
      duration,
      unit,
      size: unit.byteLength,
      originDts: dts,
      type: 'video'
    };
  }

  get videoMeta() {
    return this._context.getInstance('TRACKS').videoTrack.meta;
  }
  get audioMeta() {
    return this._context.getInstance('TRACKS').audioTrack.meta;
  }

  static getSilentFrame(channelCount) {
    if (channelCount === 1) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x23, 0x80]);
    } else if (channelCount === 2) {
      return new Uint8Array([0x21, 0x00, 0x49, 0x90, 0x02, 0x19, 0x00, 0x23, 0x80]);
    } else if (channelCount === 3) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x8e]);
    } else if (channelCount === 4) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x80, 0x2c, 0x80, 0x08, 0x02, 0x38]);
    } else if (channelCount === 5) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x38]);
    } else if (channelCount === 6) {
      return new Uint8Array([0x00, 0xc8, 0x00, 0x80, 0x20, 0x84, 0x01, 0x26, 0x40, 0x08, 0x64, 0x00, 0x82, 0x30, 0x04, 0x99, 0x00, 0x21, 0x90, 0x02, 0x00, 0xb2, 0x00, 0x20, 0x08, 0xe0]);
    }
    return null;
  }
}
exports.default = Mp4Remuxer;

/***/ }),

/***/ "../xgplayer-utils/index.js":
/*!**********************************!*\
  !*** ../xgplayer-utils/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  Context: __webpack_require__(/*! ./src/context */ "../xgplayer-utils/src/context.js").default,

  // Modules from constants
  EVENTS: __webpack_require__(/*! ./src/constants/events */ "../xgplayer-utils/src/constants/events.js").default,
  WORKER_COMMANDS: __webpack_require__(/*! ./src/constants/worker-commands */ "../xgplayer-utils/src/constants/worker-commands.js").default,

  // Modules from env
  sniffer: __webpack_require__(/*! ./src/env/sniffer */ "../xgplayer-utils/src/env/sniffer.js").default,
  isLe: __webpack_require__(/*! ./src/env/isle */ "../xgplayer-utils/src/env/isle.js").default,
  UTF8: __webpack_require__(/*! ./src/env/utf8 */ "../xgplayer-utils/src/env/utf8.js").default,
  PageVisibility: __webpack_require__(/*! ./src/env/PageVisibility */ "../xgplayer-utils/src/env/PageVisibility.js").default,

  // Models
  MediaInfo: __webpack_require__(/*! ./src/models/media-info */ "../xgplayer-utils/src/models/media-info.js").default,
  MediaSample: __webpack_require__(/*! ./src/models/media-sample */ "../xgplayer-utils/src/models/media-sample.js").default,
  MediaSegment: __webpack_require__(/*! ./src/models/media-segment */ "../xgplayer-utils/src/models/media-segment.js").default,
  MediaSegmentList: __webpack_require__(/*! ./src/models/media-segment-list */ "../xgplayer-utils/src/models/media-segment-list.js").default,
  AudioTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").AudioTrackMeta,
  VideoTrackMeta: __webpack_require__(/*! ./src/models/track-meta */ "../xgplayer-utils/src/models/track-meta.js").VideoTrackMeta,
  AudioTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").AudioTrackSample,
  VideoTrackSample: __webpack_require__(/*! ./src/models/track-sample */ "../xgplayer-utils/src/models/track-sample.js").VideoTrackSample,

  // Modules from mse
  Mse: __webpack_require__(/*! ./src/mse/index */ "../xgplayer-utils/src/mse/index.js").default,

  // Modules from write
  Stream: __webpack_require__(/*! ./src/write/stream */ "../xgplayer-utils/src/write/stream.js").default,
  Buffer: __webpack_require__(/*! ./src/write/buffer */ "../xgplayer-utils/src/write/buffer.js").default,

  MobileVideo: __webpack_require__(/*! ./src/mobile/mobile-video */ "../xgplayer-utils/src/mobile/mobile-video.js"),
  // Crypto
  Crypto: __webpack_require__(/*! ./src/crypto */ "../xgplayer-utils/src/crypto/index.js").default
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js":
/*!***********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ResultConstructor) {
  var totalLength = 0;

  for (var _len = arguments.length, arrays = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    arrays[_key - 1] = arguments[_key];
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arrays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var arr = _step.value;

      totalLength += arr.length;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var result = new ResultConstructor(totalLength);
  var offset = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = arrays[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _arr = _step2.value;

      result.set(_arr, offset);
      offset += _arr.length;
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return result;
};

/***/ }),

/***/ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js":
/*!**********************************************************************!*\
  !*** ../xgplayer-utils/node_modules/concat-typed-array/lib/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _concat = __webpack_require__(/*! ./concat */ "../xgplayer-utils/node_modules/concat-typed-array/lib/concat.js");

var _concat2 = _interopRequireDefault(_concat);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

module.exports = _concat2.default;

/***/ }),

/***/ "../xgplayer-utils/node_modules/webworkify-webpack/index.js":
/*!******************************************************************!*\
  !*** ../xgplayer-utils/node_modules/webworkify-webpack/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function webpackBootstrapFunc(modules) {
  /******/ // The module cache
  /******/var installedModules = {};

  /******/ // The require function
  /******/function __webpack_require__(moduleId) {

    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId])
      /******/return installedModules[moduleId].exports;

    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };

    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

    /******/ // Flag the module as loaded
    /******/module.l = true;

    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }

  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;

  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;

  /******/ // identity function for calling harmony imports with the correct context
  /******/__webpack_require__.i = function (value) {
    return value;
  };

  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };

  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };

  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };

  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "/";

  /******/ // on error function for async loading
  /******/__webpack_require__.oe = function (err) {
    console.error(err);throw err;
  };

  var f = __webpack_require__(__webpack_require__.s = ENTRY_MODULE);
  return f.default || f; // try to call default if defined to also support babel esmodule exports
}

var moduleNameReqExp = '[\\.|\\-|\\+|\\w|\/|@]+';
var dependencyRegExp = '\\(\\s*(\/\\*.*?\\*\/)?\\s*.*?(' + moduleNameReqExp + ').*?\\)'; // additional chars when output.pathinfo is true

// http://stackoverflow.com/a/2593661/130442
function quoteRegExp(str) {
  return (str + '').replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&');
}

function isNumeric(n) {
  return !isNaN(1 * n); // 1 * n converts integers, integers as string ("123"), 1e3 and "1e3" to integers and strings to NaN
}

function getModuleDependencies(sources, module, queueName) {
  var retval = {};
  retval[queueName] = [];

  var fnString = module.toString();
  var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
  if (!wrapperSignature) return retval;
  var webpackRequireName = wrapperSignature[1];

  // main bundle deps
  var re = new RegExp('(\\\\n|\\W)' + quoteRegExp(webpackRequireName) + dependencyRegExp, 'g');
  var match;
  while (match = re.exec(fnString)) {
    if (match[3] === 'dll-reference') continue;
    retval[queueName].push(match[3]);
  }

  // dll deps
  re = new RegExp('\\(' + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, 'g');
  while (match = re.exec(fnString)) {
    if (!sources[match[2]]) {
      retval[queueName].push(match[1]);
      sources[match[2]] = __webpack_require__(match[1]).m;
    }
    retval[match[2]] = retval[match[2]] || [];
    retval[match[2]].push(match[4]);
  }

  // convert 1e3 back to 1000 - this can be important after uglify-js converted 1000 to 1e3
  var keys = Object.keys(retval);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < retval[keys[i]].length; j++) {
      if (isNumeric(retval[keys[i]][j])) {
        retval[keys[i]][j] = 1 * retval[keys[i]][j];
      }
    }
  }

  return retval;
}

function hasValuesInQueues(queues) {
  var keys = Object.keys(queues);
  return keys.reduce(function (hasValues, key) {
    return hasValues || queues[key].length > 0;
  }, false);
}

function getRequiredModules(sources, moduleId) {
  var modulesQueue = {
    main: [moduleId]
  };
  var requiredModules = {
    main: []
  };
  var seenModules = {
    main: {}
  };

  while (hasValuesInQueues(modulesQueue)) {
    var queues = Object.keys(modulesQueue);
    for (var i = 0; i < queues.length; i++) {
      var queueName = queues[i];
      var queue = modulesQueue[queueName];
      var moduleToCheck = queue.pop();
      seenModules[queueName] = seenModules[queueName] || {};
      if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck]) continue;
      seenModules[queueName][moduleToCheck] = true;
      requiredModules[queueName] = requiredModules[queueName] || [];
      requiredModules[queueName].push(moduleToCheck);
      var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
      var newModulesKeys = Object.keys(newModules);
      for (var j = 0; j < newModulesKeys.length; j++) {
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
        modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
      }
    }
  }

  return requiredModules;
}

module.exports = function (moduleId, options) {
  options = options || {};
  var sources = {
    main: __webpack_require__.m
  };

  var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId);

  var src = '';

  Object.keys(requiredModules).filter(function (m) {
    return m !== 'main';
  }).forEach(function (module) {
    var entryModule = 0;
    while (requiredModules[module][entryModule]) {
      entryModule++;
    }
    requiredModules[module].push(entryModule);
    sources[module][entryModule] = '(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })';
    src = src + 'var ' + module + ' = (' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(entryModule)) + ')({' + requiredModules[module].map(function (id) {
      return '' + JSON.stringify(id) + ': ' + sources[module][id].toString();
    }).join(',') + '});\n';
  });

  src = src + 'new ((' + webpackBootstrapFunc.toString().replace('ENTRY_MODULE', JSON.stringify(moduleId)) + ')({' + requiredModules.main.map(function (id) {
    return '' + JSON.stringify(id) + ': ' + sources.main[id].toString();
  }).join(',') + '}))(self);';

  var blob = new window.Blob([src], { type: 'text/javascript' });
  if (options.bare) {
    return blob;
  }

  var URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

  var workerUrl = URL.createObjectURL(blob);
  var worker = new window.Worker(workerUrl);
  worker.objectURL = workerUrl;

  return worker;
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/events.js":
/*!*************************************************!*\
  !*** ../xgplayer-utils/src/constants/events.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const LOADER_EVENTS = {
  LADER_START: 'LOADER_START',
  LOADER_DATALOADED: 'LOADER_DATALOADED',
  LOADER_COMPLETE: 'LOADER_COMPLETE',
  LOADER_ERROR: 'LOADER_ERROR'
};

const DEMUX_EVENTS = {
  DEMUX_START: 'DEMUX_START',
  DEMUX_COMPLETE: 'DEMUX_COMPLETE',
  DEMUX_ERROR: 'DEMUX_ERROR',
  METADATA_PARSED: 'METADATA_PARSED',
  VIDEO_METADATA_CHANGE: 'VIDEO_METADATA_CHANGE',
  AUDIO_METADATA_CHANGE: 'AUDIO_METADATA_CHANGE',
  MEDIA_INFO: 'MEDIA_INFO'
};

const REMUX_EVENTS = {
  REMUX_METADATA: 'REMUX_METADATA',
  REMUX_MEDIA: 'REMUX_MEDIA',
  MEDIA_SEGMENT: 'MEDIA_SEGMENT',
  REMUX_ERROR: 'REMUX_ERROR',
  INIT_SEGMENT: 'INIT_SEGMENT',
  DETECT_CHANGE_STREAM: 'DETECT_CHANGE_STREAM'
};

const MSE_EVENTS = {
  SOURCE_UPDATE_END: 'SOURCE_UPDATE_END'

  // hls专有events
};const HLS_EVENTS = {
  RETRY_TIME_EXCEEDED: 'RETRY_TIME_EXCEEDED'
};

const CRYTO_EVENTS = {
  START_DECRYPT: 'START_DECRYPT',
  DECRYPTED: 'DECRYPTED'
};

const BROWSER_EVENTS = {
  VISIBILITY_CHANGE: 'VISIBILITY_CHANGE'
};

const ALLEVENTS = Object.assign({}, LOADER_EVENTS, DEMUX_EVENTS, REMUX_EVENTS, MSE_EVENTS, HLS_EVENTS, BROWSER_EVENTS);

const FlvAllowedEvents = [];
const HlsAllowedEvents = [];

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    FlvAllowedEvents.push(ALLEVENTS[key]);
  }
}

for (let key in ALLEVENTS) {
  if (ALLEVENTS.hasOwnProperty(key)) {
    HlsAllowedEvents.push(ALLEVENTS[key]);
  }
}

exports.default = {
  ALLEVENTS,
  HLS_EVENTS,
  REMUX_EVENTS,
  DEMUX_EVENTS,
  MSE_EVENTS,
  LOADER_EVENTS,
  FlvAllowedEvents,
  HlsAllowedEvents,
  CRYTO_EVENTS,
  BROWSER_EVENTS
};

/***/ }),

/***/ "../xgplayer-utils/src/constants/worker-commands.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/constants/worker-commands.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const CONTEXT_COMOMANDS = exports.CONTEXT_COMOMANDS = {
  ON: 'on',
  ONCE: 'once',
  OFF: 'off',
  EMIT: 'emit',
  DESTROY: 'destroy'
};

/***/ }),

/***/ "../xgplayer-utils/src/context.js":
/*!****************************************!*\
  !*** ../xgplayer-utils/src/context.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediaInfo = __webpack_require__(/*! ./models/media-info */ "../xgplayer-utils/src/models/media-info.js");

var _mediaInfo2 = _interopRequireDefault(_mediaInfo);

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DIRECT_EMIT_FLAG = '__TO__';

class Context {
  constructor(allowedEvents = []) {
    this._emitter = new _events.EventEmitter();
    this._instanceMap = {}; // 所有的解码流程实例
    this._clsMap = {}; // 构造函数的map
    this._inited = false;
    this.mediaInfo = new _mediaInfo2.default();
    this.allowedEvents = allowedEvents;
    this._hooks = {}; // 注册在事件前/后的钩子，例如 before('DEMUX_COMPLETE')
  }

  /**
   * 从上下文中获取解码流程实例，如果没有实例，构造一个
   * @param tag
   * @param args
   * @returns {*}
   */
  getInstance(tag) {
    const instance = this._instanceMap[tag];
    if (instance) {
      return instance;
    } else {
      // throw new Error(`${tag}实例尚未初始化`)
      return null;
    }
  }

  /**
   * 初始化具体实例
   * @param tag
   * @param args
   */
  initInstance(tag, ...args) {
    if (this._clsMap[tag]) {
      const newInstance = new this._clsMap[tag](...args);
      this._instanceMap[tag] = newInstance;
      if (newInstance.init) {
        newInstance.init(); // TODO: lifecircle
      }
      return newInstance;
    } else {
      throw new Error(`${tag}未在context中注册`);
    }
  }

  /**
   * 避免大量的initInstance调用，初始化所有的组件
   * @param config
   */
  init(config) {
    if (this._inited) {
      return;
    }
    for (let tag in this._clsMap) {
      // if not inited, init an instance
      if (this._clsMap.hasOwnProperty(tag) && !this._instanceMap[tag]) {
        this.initInstance(tag, config);
      }
    }
    this._inited = true;
  }

  /**
   * 注册一个上下文流程，提供安全的事件发送机制
   * @param tag
   * @param cls
   */
  registry(tag, cls) {
    const emitter = this._emitter;
    const checkMessageName = this._isMessageNameValid.bind(this);
    const self = this;
    const enhanced = class extends cls {
      constructor(...args) {
        super(...args);
        this.listeners = {};
        this.onceListeners = {};
        this.TAG = tag;
        this._context = self;
      }

      on(messageName, callback) {
        checkMessageName(messageName);

        if (this.listeners[messageName]) {
          this.listeners[messageName].push(callback);
        } else {
          this.listeners[messageName] = [callback];
        }

        emitter.on(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback); // 建立定向通信监听
        return emitter.on(messageName, callback);
      }

      /**
       * 在某个事件触发前执行
       * @param messageName
       * @param callback
       */
      before(messageName, callback) {
        checkMessageName(messageName);
        if (self._hooks[messageName]) {
          self._hooks[messageName].push(callback);
        } else {
          self._hooks[messageName] = [callback];
        }
      }

      once(messageName, callback) {
        checkMessageName(messageName);

        if (this.onceListeners[messageName]) {
          this.onceListeners[messageName].push(callback);
        } else {
          this.onceListeners[messageName] = [callback];
        }

        emitter.once(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
        return emitter.once(messageName, callback);
      }

      emit(messageName, ...args) {
        checkMessageName(messageName);

        const beforeList = self._hooks ? self._hooks[messageName] : null;

        if (beforeList) {
          for (let i = 0, len = beforeList.length; i < len; i++) {
            const callback = beforeList[i];
            callback();
          }
        }
        return emitter.emit(messageName, ...args);
      }

      /**
       * 定向发送给某个组件单例的消息
       * @param messageName
       * @param args
       */
      emitTo(tag, messageName, ...args) {
        checkMessageName(messageName);

        return emitter.emit(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, ...args);
      }

      off(messageName, callback) {
        checkMessageName(messageName);
        return emitter.off(messageName, callback);
      }

      removeListeners() {
        const hasOwn = Object.prototype.hasOwnProperty.bind(this.listeners);

        for (let messageName in this.listeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.listeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }

        for (let messageName in this.onceListeners) {
          if (hasOwn(messageName)) {
            const callbacks = this.onceListeners[messageName] || [];
            for (let i = 0; i < callbacks.length; i++) {
              const callback = callbacks[i];
              emitter.off(messageName, callback);
              emitter.off(`${messageName}${DIRECT_EMIT_FLAG}${tag}`, callback);
            }
          }
        }
      }

      /**
       * 在组件销毁时，默认将它注册的事件全部卸载，确保不会造成内存泄漏
       */
      destroy() {
        // step1 unlisten events
        this.removeListeners();
        this.listeners = {};

        // step2 release from context
        delete self._instanceMap[tag];
        if (super.destroy) {
          return super.destroy();
        }
      }
    };
    this._clsMap[tag] = enhanced;

    /**
     * get instance immediately
     * e.g const instance = context.registry(tag, Cls)(config)
     * */
    return (...args) => {
      return this.initInstance(tag, ...args);
    };
  }

  /**
   * 对存在的实例进行
   */
  destroyInstances() {
    Object.keys(this._instanceMap).forEach(tag => {
      if (this._instanceMap[tag].destroy) {
        this._instanceMap[tag].destroy();
      }
    });
  }

  /**
   * 编解码流程无需关注事件的解绑
   */
  destroy() {
    this._emitter = null;
    this.allowedEvents = [];
    this._clsMap = null;
    this._context = null;
    this._hooks = null;
    this.destroyInstances();
  }

  /**
   * 对信道进行收拢
   * @param messageName
   * @private
   */
  _isMessageNameValid(messageName) {
    if (!this.allowedEvents.indexOf(messageName) < 0) {
      throw new Error(`unregistered message name: ${messageName}`);
    }
  }
}

exports.default = Context;

/***/ }),

/***/ "../xgplayer-utils/src/crypto/index.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/crypto/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _events = __webpack_require__(/*! ../constants/events */ "../xgplayer-utils/src/constants/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CRYTO_EVENTS = _events2.default.CRYTO_EVENTS;
class Crypto {
    constructor(config) {
        this.inputBuffer = config.inputbuffer;
        this.outputBuffer = config.outputbuffer;
        this.key = config.key;
        this.iv = config.iv;
        this.method = config.method;

        this.crypto = window.crypto || window.msCrypto;
    }

    init() {
        this.on(CRYTO_EVENTS.START_DECRYPT, this.decript.bind(this));
    }

    decript() {
        if (!this.aeskey) {
            let sbkey = this.crypto.subtle.importKey('raw', this.key.buffer, { name: 'AES-CBC' }, false, ['encrypt', 'decrypt']);
            sbkey.then(key => {
                this.aeskey = key;
                this.decriptData();
            });
        } else {
            this.decriptData();
        }
    }

    decriptData() {
        let inputbuffer = this._context.getInstance(this.inputBuffer);
        let outputbuffer = this._context.getInstance(this.outputBuffer);
        let data = inputbuffer.shift();
        if (data) {
            this.crypto.subtle.decrypt({ name: 'AES-CBC', iv: this.iv.buffer }, this.aeskey, data).then(res => {
                outputbuffer.push(new Uint8Array(res));
                this.emit(CRYTO_EVENTS.DECRYPTED);
                this.decriptData(data);
            });
        }
    }
}
exports.default = Crypto;

/***/ }),

/***/ "../xgplayer-utils/src/env/PageVisibility.js":
/*!***************************************************!*\
  !*** ../xgplayer-utils/src/env/PageVisibility.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! ../constants/events */ "../xgplayer-utils/src/constants/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BROWSER_EVENTS = _events2.default.BROWSER_EVENTS;

let hidden;
let visibilityChange;
if (typeof document.hidden !== 'undefined') {
  // Opera 12.10 and Firefox 18 and later support
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

class PageVisibility {

  constructor() {
    this.callbacks = {
      onShow: [],
      onHidden: []
    };
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.init();
  }

  init() {
    document.addEventListener(visibilityChange, this.handleVisibilityChange, false);
  }

  handleVisibilityChange() {
    this.emit(BROWSER_EVENTS.VISIBILITY_CHANGE, document[hidden]);
  }

  destroy() {
    document.removeEventListener(visibilityChange, this.handleVisibilityChange);
  }

}

exports.default = PageVisibility;

/***/ }),

/***/ "../xgplayer-utils/src/env/isle.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/isle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

exports.default = le;

/***/ }),

/***/ "../xgplayer-utils/src/env/sniffer.js":
/*!********************************************!*\
  !*** ../xgplayer-utils/src/env/sniffer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const le = function () {
  const buf = new ArrayBuffer(2);
  new DataView(buf).setInt16(0, 256, true); // little-endian write
  return new Int16Array(buf)[0] === 256; // platform-spec read, if equal then LE
}();

const sniffer = {
  get device() {
    let r = sniffer.os;
    return r.isPc ? 'pc' : r.isTablet ? 'tablet' : 'mobile';
  },
  get browser() {
    let ua = navigator.userAgent.toLowerCase();
    let reg = {
      ie: /rv:([\d.]+)\) like gecko/,
      firfox: /firefox\/([\d.]+)/,
      chrome: /chrome\/([\d.]+)/,
      opera: /opera.([\d.]+)/,
      safari: /version\/([\d.]+).*safari/
    };
    return [].concat(Object.keys(reg).filter(key => reg[key].test(ua)))[0];
  },
  get os() {
    let ua = navigator.userAgent;
    let isWindowsPhone = /(?:Windows Phone)/.test(ua);
    let isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone;
    let isAndroid = /(?:Android)/.test(ua);
    let isFireFox = /(?:Firefox)/.test(ua);
    let isTablet = /(?:iPad|PlayBook)/.test(ua) || isAndroid && !/(?:Mobile)/.test(ua) || isFireFox && /(?:Tablet)/.test(ua);
    let isPhone = /(?:iPhone)/.test(ua) && !isTablet;
    let isPc = !isPhone && !isAndroid && !isSymbian;
    return {
      isTablet,
      isPhone,
      isAndroid,
      isPc,
      isSymbian,
      isWindowsPhone,
      isFireFox
    };
  },

  get isLe() {
    return le;
  }
};

exports.default = sniffer;

/***/ }),

/***/ "../xgplayer-utils/src/env/utf8.js":
/*!*****************************************!*\
  !*** ../xgplayer-utils/src/env/utf8.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class UTF8 {
  static decode(uint8array) {
    const out = [];
    const input = uint8array;
    let i = 0;
    const length = uint8array.length;

    while (i < length) {
      if (input[i] < 0x80) {
        out.push(String.fromCharCode(input[i]));
        ++i;
        continue;
      } else if (input[i] < 0xC0) {
        // fallthrough
      } else if (input[i] < 0xE0) {
        if (UTF8._checkContinuation(input, i, 1)) {
          const ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
          if (ucs4 >= 0x80) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 2;
            continue;
          }
        }
      } else if (input[i] < 0xF0) {
        if (UTF8._checkContinuation(input, i, 2)) {
          const ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
          if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
            out.push(String.fromCharCode(ucs4 & 0xFFFF));
            i += 3;
            continue;
          }
        }
      } else if (input[i] < 0xF8) {
        if (UTF8._checkContinuation(input, i, 3)) {
          let ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
          if (ucs4 > 0x10000 && ucs4 < 0x110000) {
            ucs4 -= 0x10000;
            out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
            out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
            i += 4;
            continue;
          }
        }
      }
      out.push(String.fromCharCode(0xFFFD));
      ++i;
    }

    return out.join('');
  }

  static _checkContinuation(uint8array, start, checkLength) {
    let array = uint8array;
    if (start + checkLength < array.length) {
      while (checkLength--) {
        if ((array[++start] & 0xC0) !== 0x80) {
          return false;
        }
      }
      return true;
    } else {
      return false;
    }
  }
}

exports.default = UTF8;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/audio-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/audio-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _events = __webpack_require__(/*! events */ "../../node_modules/events/events.js");

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AudioCtx extends _events2.default {
  constructor(config) {
    super();
    this.config = Object.assign({}, config);
    let AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = new AudioContext();
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.context.destination);
    this.meta = undefined;
    this.samples = [];
    this.preloadTime = this.config.preloadTime || 0.5;
    this.duration = 0;

    this._currentBuffer = undefined;
    this._nextBuffer = undefined;
    this._lastpts = undefined;
    this._preDecode = [];
    this._currentTime = 0;
    this._decoding = false;
    this._volume = this.config.volume || 0.6;
    // 记录外部传输的状态
    this._played = false;
  }

  get currentTime() {
    return this._currentTime;
  }

  decodeAudio(audioTrack) {
    let { samples } = audioTrack;
    let data = samples;
    audioTrack.samples = [];
    this.setAudioData(data);
  }
  setAudioData(data) {
    for (let i = 0; i < data.length; i++) {
      data[i].pts = data[i].pts === undefined ? data[i].dts : data[i].pts;
      this._preDecode.push(data[i]);
    }
    if (this._preDecode.length > 0) {
      if (this._lastpts === undefined) {
        this._lastpts = this._preDecode[0].pts;
      }
      if ((this._preDecode[this._preDecode.length - 1].pts - this._lastpts) / 1000 > this.preloadTime) {
        this.decodeAAC();
      }
    }
  }

  decodeAAC() {
    if (this._decoding) {
      return;
    }
    this._decoding = true;
    let data = this._preDecode;
    let samples = [];
    let _this = this;
    let sample = data.shift();
    while (sample) {
      let sampleData = AudioCtx.getAACData(this.meta, sample);
      samples.push(sampleData);
      this._lastpts = sample.pts;
      sample = data.shift();
    }
    let buffer = AudioCtx.combileData(samples);
    try {
      this.context.decodeAudioData(buffer.buffer, function (buffer) {
        let audioSource = _this.context.createBufferSource();
        audioSource.buffer = buffer;
        audioSource.onended = _this.onSourceEnded.bind(_this);
        _this.samples.push({
          time: _this.duration,
          duration: buffer.duration,
          data: audioSource
        });

        _this.duration += buffer.duration;

        if (!_this._currentBuffer) {
          _this._currentBuffer = _this.getTimeBuffer(_this.currentTime);

          if (_this._played) {
            _this.play();
          }
        }

        if (!_this._nextBuffer && _this._currentBuffer) {
          _this._nextBuffer = _this.getTimeBuffer(_this.currentTime + _this._currentBuffer.duration);
        }
        _this._decoding = false;

        if ((_this._preDecode.length > 0 && _this._preDecode[_this._preDecode.length - 1].pts - _this._lastpts) / 1000 >= _this.preloadTime) {
          _this.decodeAAC();
        }
      }, e => {
        console.error(e);
      });
    } catch (err) {
      console.error(err);
    }
  }

  onSourceEnded() {
    if (!this._nextBuffer || !this._played) {
      return;
    }
    let audioSource = this._nextBuffer.data;
    audioSource.start();
    audioSource.connect(this.gainNode);
    this._currentBuffer = this._nextBuffer;
    this._currentTime = this._currentBuffer.time;
    this._nextBuffer = this.getTimeBuffer(this.currentTime);
    if (this._currentBuffer) {
      this._nextBuffer = this.getTimeBuffer(this.currentTime + this._currentBuffer.duration);
    }
    this.emit('AUDIO_SOURCE_END');
  }

  play() {
    this._played = true;
    if (!this._currentBuffer) {
      return;
    }

    let audioSource = this._currentBuffer.data;
    audioSource.connect(this.gainNode);
    audioSource.start();
  }

  pause() {
    const audioCtx = this.context;
    if (audioCtx.state === 'running') {
      audioCtx.suspend();
    }
  }

  destroy() {
    this.context.close();
  }

  getTimeBuffer(time) {
    let ret;
    for (let i = 0; i < this.samples.length; i++) {
      let sample = this.samples[i];
      if (sample.time <= time && sample.time + sample.duration > time) {
        ret = sample;
        break;
      }
    }
    return ret;
  }

  setAudioMetaData(meta) {
    this.meta = meta;
  }

  set muted(val) {
    if (val) {
      this.gainNode.gain.value = 0;
    } else {
      this.gainNode.gain.value = this._volume;
    }
  }

  get volume() {
    return this._volume;
  }

  set volume(val) {
    if (val < 0) {
      this._volume = 0;
      this.gainNode.gain.value = 0;
      return;
    } else if (val > 1) {
      this._volume = 1;
      this.gainNode.gain.value = 1;
      return;
    }

    this._volume = val;
    this.gainNode.gain.value = val;
  }

  static getAACData(meta, sample) {
    let buffer = new Uint8Array(sample.data.byteLength + 7);
    let adts = AudioCtx.getAdts(meta, sample.data);
    buffer.set(adts);
    buffer.set(sample.data, 7);
    return buffer;
  }

  static combileData(samples) {
    // get length
    let length = 0;
    for (let i = 0, k = samples.length; i < k; i++) {
      length += samples[i].byteLength;
    }

    let ret = new Uint8Array(length);
    let offset = 0;
    // combile data;
    for (let i = 0, k = samples.length; i < k; i++) {
      ret.set(samples[i], offset);
      offset += samples[i].byteLength;
    }
    return ret;
  }

  static getAdts(meta, data) {
    let adts = new Uint8Array(7);

    // 设置同步位 0xfff 12bit
    adts[0] = 0xff;
    adts[1] = 0xf0;

    // Object data (没什么人用MPEG-2了，HLS和FLV也全是MPEG-4，这里直接0)  1bit
    // Level always 00 2bit
    // CRC always 1 1bit
    adts[1] = adts[1] | 0x01;

    // profile 2bit
    adts[2] = 0xc0 & meta.objectType - 1 << 6;

    // sampleFrequencyIndex
    adts[2] = adts[2] | 0x3c & meta.sampleRateIndex << 2;

    // private bit 0 1bit
    // chanel configuration 3bit
    adts[2] = adts[2] | 0x01 & meta.channelCount >> 2;
    adts[3] = 0xc0 & meta.channelCount << 6;

    // original_copy: 0 1bit
    // home: 0 1bit

    // adts_variable_header()
    // copyrighted_id_bit 0 1bit
    // copyrighted_id_start 0 1bit

    // aac_frame_length 13bit;
    let aacframelength = data.byteLength + 7;

    adts[3] = adts[3] | 0x03 & aacframelength >> 11;
    adts[4] = 0xff & aacframelength >> 3;
    adts[5] = 0xe0 & aacframelength << 5;

    // adts_buffer_fullness 0x7ff 11bit
    adts[5] = adts[5] | 0x1f;
    adts[6] = 0xfc;

    // number_of_raw_data_blocks_in_frame 0 2bit;
    return adts;
  }
}

exports.default = AudioCtx;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/mobile-video.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/mobile-video.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _videoContext = __webpack_require__(/*! ./video-context */ "../xgplayer-utils/src/mobile/video-context.js");

var _videoContext2 = _interopRequireDefault(_videoContext);

var _audioContext = __webpack_require__(/*! ./audio-context */ "../xgplayer-utils/src/mobile/audio-context.js");

var _audioContext2 = _interopRequireDefault(_audioContext);

var _ticker = __webpack_require__(/*! ./ticker */ "../xgplayer-utils/src/mobile/ticker.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 音画同步调和器
 */
class AVReconciler {
  constructor(props) {
    this.aCtx = props.aCtx;
    this.vCtx = props.vCtx;
    this.video = props.video;
    this.timeoutId = null;
    this.start = null;
  }

  doReconcile() {
    const vCurTime = this.vCtx.currentTime || 0;
    const aCurTime = (this.aCtx.currentTime || 0) * 1000;

    const gap = vCurTime - aCurTime;
    if (this.timeoutId) {
      return;
    }
    if (gap > 200) {
      // audio delayed for more than 100ms
      this.video.start += gap;
      this.vCtx.pause();
      this.timeoutId = setTimeout(() => {
        this.vCtx.play();
        this.timeoutId = null;
      }, gap);
    } else if (gap < -120) {
      this.vCtx.currentTime = this.vCtx.currentTime + Math.abs(gap);
    }
  }

  destroy() {
    this.start = null;
    this.aCtx = null;
    this.vCtx = null;
  }
}

// eslint-disable-next-line no-undef
class MobileVideo extends HTMLElement {
  constructor(config) {
    super();
    this._canvas = document.createElement('canvas');
    this.handleAudioSourceEnd = this.handleAudioSourceEnd.bind(this);
    this.init(config);
    this.played = false;
    this._paused = true;
  }

  init(config) {
    this.vCtx = new _videoContext2.default({
      canvas: this._canvas
    });
    this.aCtx = new _audioContext2.default(config);
    this.ticker = new ((0, _ticker.getTicker)())();
    this.reconciler = new AVReconciler({
      vCtx: this.vCtx,
      aCtx: this.aCtx,
      video: this
    });
    this.vCtx.oncanplay = () => {
      if (!this.played) {
        this.appendChild(this._canvas);
      }
      this.dispatchEvent(new Event('canplay'));
    };

    this.ticker.start(() => {
      if (!this.start) {
        this.start = Date.now();
      }
      this._currentTime = Date.now() - this.start;
      this.vCtx._onTimer(this._currentTime);
    });

    this.aCtx.on('AUDIO_SOURCE_END', this.handleAudioSourceEnd);
  }

  handleAudioSourceEnd() {
    this.reconciler.doReconcile();
    this.vCtx.cleanBuffer();
  }

  _cleanBuffer() {
    this.vCtx.cleanBuffer();
  }

  destroy() {
    this.aCtx.destroy();
    this.vCtx.destroy();
    this.ticker.stop();
    this.start = null;
    this.reconciler.destroy();
    this.aCtx = null;
    this.vCtx = null;
    this.ticker = null;
  }

  onDemuxComplete(videoTrack, audioTrack) {
    this.aCtx.decodeAudio(audioTrack);
    this.vCtx.decodeVideo(videoTrack);
  }

  setAudioMeta(meta) {
    this.aCtx.setAudioMetaData(meta);
  }

  setVideoMeta(meta) {
    this.vCtx.setVideoMetaData(meta);
  }

  get width() {
    return this.vCtx.width;
  }

  get height() {
    return this.vCtx.height;
  }

  get videoWidth() {
    return this.vCtx.videoWidth;
  }

  get videoHeight() {
    return this.vCtx.videoHeight;
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(val) {
    // do nothing
  }

  get readyState() {
    return this.vCtx.readyState;
  }

  get seeking() {
    return this.vCtx.seeking;
  }

  get currentTime() {
    return this.aCtx.currentTime;
  }

  get duration() {
    return this.aCtx.duration;
  }

  get paused() {
    return this._paused;
  }

  get playbackRate() {
    if (this.hasAttribute('playbackRate')) {
      return this.getAttribute('playbackRate');
    } else {
      return 1.0;
    }
  }

  set playbackRate(val) {
    this.setAttribute('playbackrate', val);
    this.aCtx.playbackRate = val;
    this.vCtx.playbackRate = val;

    this.dispatchEvent(new Event('ratechange'));
  }

  get ended() {
    return this.aCtx.ended;
  }

  get autoplay() {
    if (this.hasAttribute('autoplay')) {
      return this.getAttribute('autoplay');
    } else {
      return false;
    }
  }
  set autoplay(value) {}
  play() {
    if (this.played) {
      this.destroy();
      this.init();
    }

    this.vCtx.play().then(() => {
      this.played = true;
      this.dispatchEvent(new Event('play'));
      this._paused = false;
    });
    this.aCtx.play();
  }

  pause() {
    this._paused = true;
    this.aCtx.pause();
    this.vCtx.pause();

    this.dispatchEvent(new Event('pause'));
  }

  get volume() {
    return this.aCtx.volume;
  }

  set volume(vol) {
    this.setAttribute('volume', vol);
    this.aCtx.volume = vol;
  }

  get muted() {
    if (this.getAttribute('muted')) {
      return this.getAttribute('muted');
    } else if (this.getAttribute('volume')) {
      return Number.parseInt(this.getAttribute('volume')) === 0;
    } else {
      return false;
    }
  }

  set muted(val) {
    this.setAttribute('muted', val);
    if (!val) {
      this.aCtx.muted = false;
    } else {
      this.aCtx.muted = true;
    }
  }

  get error() {
    return this.vCtx.error;
  }

  get buffered() {
    return this.vCtx.buffered;
  }
}
// eslint-disable-next-line no-undef
customElements.define('mobile-video', MobileVideo);

/***/ }),

/***/ "../xgplayer-utils/src/mobile/sourcebuffer.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/sourcebuffer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class SourceBuffer {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.type = this.config.type;
    this.buffer = [];
    this.currentGop = undefined;
    this._lastGet = undefined;
  }

  push(frame) {
    if (this.type === 'video') {
      if (frame.isKeyframe) {
        let currentGop = {
          samples: [],
          start: frame.dts,
          end: frame.dts,
          nextGop: undefined
        };
        if (this.currentGop) {
          this.currentGop.nextGop = currentGop;
        }
        this.currentGop = currentGop;
        this.buffer.push(this.currentGop);
      }

      if (this.currentGop) {
        this.currentGop.samples.push(frame);

        if (frame.dts < this.currentGop.start) {
          this.currentGop.start = frame.dts;
        }

        if (frame.dts > this.currentGop.end) {
          this.currentGop.end = frame.dts;
        }
      }
    }
  }

  get(time) {
    if (this.type === 'video') {
      if (this.buffer.length < 1) {
        return;
      }

      if (time === undefined) {
        let sample = this._getNext();
        return sample;
      }
    }
  }

  _getNext() {
    if (!this._lastGet) {
      let gop = this.buffer[0];
      if (gop.samples.length < 1) {
        return;
      }

      this._lastGet = {
        gop,
        index: 0
      };
      return gop.samples[0];
    } else {
      let gop = this._lastGet.gop;
      let sample = gop.samples[this._lastGet.index + 1];
      if (sample) {
        this._lastGet.index = this._lastGet.index + 1;
        return sample;
      } else {
        gop = gop.nextGop;
        if (!gop || gop.samples.length < 1) {
          return;
        }
        sample = gop.samples[0];
        this._lastGet = {
          gop,
          index: 0
        };
        return sample;
      }
    }
  }

  remove(start, end) {
    if (this.buffer.length < 0) {
      return;
    }

    let i = 0;
    let gop = this.buffer[0];
    while (gop) {
      if (gop.end < end && gop.start >= start) {
        this.buffer.splice(i, 1);
        gop = this.buffer[i];
      } else {
        i += 1;
        gop = this.buffer[i];
      }
    }
  }
}

exports.default = SourceBuffer;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/ticker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/ticker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @author fuyuhao@bytedance.com
 */

class Ticker {
  constructor(options) {
    this.options = Object.assign({}, options || {}, {
      interval: 16
    });

    this.callbacks = [];
  }

  start(...callbacks) {
    this.callbacks = callbacks;
  }

  onTick() {
    for (let i = 0, len = this.callbacks.length; i < len; i++) {
      const callback = this.callbacks[i];
      callback();
    }
  }

  setInterval(interval) {
    this.options.interval = interval;
    return this;
  }
}

/**
 * ticker use requestAnimationFrame
 */
class RafTicker extends Ticker {
  constructor(props) {
    super(props);
    this.prev = null;
    this.timerId = null;
    this._subTimerId = null;

    this._tickFunc = RafTicker.getTickFunc();
    this.tick = this.tick.bind(this);
  }

  start(...callbacks) {
    super.start(...callbacks);
    this.tick();
  }

  tick(timestamp) {
    this.nextTick();
    this.onTick();
  }

  nextTick() {
    const { _tickFunc } = this;
    this.timerId = _tickFunc(this.tick);
  }

  stop() {
    if (this.timerId) {
      const cancelFunc = RafTicker.getCancelFunc();

      cancelFunc(this.timerId);
    }
  }

  static getTickFunc() {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }

  static getCancelFunc() {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
  }

  static isSupported() {
    return RafTicker.getTickFunc() !== undefined;
  }
}

/**
 * use setTimeout for browsers without raf support
 */
class TimeoutTicker extends Ticker {
  constructor(config) {
    super(config);
    this.timeoutId = null;
  }

  start(...callbacks) {
    super.nextTick(...callbacks);
    this.timeoutId = window.setInterval(() => {
      this.onTick();
    }, this.options.interval || 16);
  }

  stop() {
    if (this.timeoutId) {
      window.clearInterval(this.timeoutId);
    }
  }

}

/**
 * 返回Ticker构造函数
 * @returns {Ticker}
 */
const getTicker = exports.getTicker = () => {
  if (RafTicker.isSupported()) {
    return RafTicker;
  } else {
    return TimeoutTicker;
  }
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/video-context.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/mobile/video-context.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webworkifyWebpack = __webpack_require__(/*! webworkify-webpack */ "../xgplayer-utils/node_modules/webworkify-webpack/index.js");

var _webworkifyWebpack2 = _interopRequireDefault(_webworkifyWebpack);

var _stream = __webpack_require__(/*! ../write/stream */ "../xgplayer-utils/src/write/stream.js");

var _stream2 = _interopRequireDefault(_stream);

var _nalunit = __webpack_require__(/*! ../../../xgplayer-codec/src/h264/nalunit */ "../xgplayer-codec/src/h264/nalunit/index.js");

var _nalunit2 = _interopRequireDefault(_nalunit);

var _yuvCanvas = __webpack_require__(/*! ./yuv-canvas */ "../xgplayer-utils/src/mobile/yuv-canvas.js");

var _yuvCanvas2 = _interopRequireDefault(_yuvCanvas);

var _sourcebuffer = __webpack_require__(/*! ./sourcebuffer */ "../xgplayer-utils/src/mobile/sourcebuffer.js");

var _sourcebuffer2 = _interopRequireDefault(_sourcebuffer);

var _TimeRanges = __webpack_require__(/*! ../models/TimeRanges */ "../xgplayer-utils/src/models/TimeRanges.js");

var _TimeRanges2 = _interopRequireDefault(_TimeRanges);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VideoCanvas {
  constructor(config) {
    this.config = Object.assign({}, config);
    this.canvas = this.config.canvas ? this.config.canvas : document.createElement('canvas');
    this.source = new _sourcebuffer2.default({ type: 'video' });
    this.preloadTime = this.config.preloadTime || 3;
    this.oncanplay = undefined;
    this.onFirstFrame = undefined;
    this.meta = undefined;
    this.readyStatus = 0;
    this.paused = true;
    this.count = 0;
    this.currentTime = 0;
    this.lastPlayed = 0;

    this._decoderInited = false;
    this._avccpushed = false;
    this._decodedFrames = {};
    this._lastSampleDts = undefined;
    this._baseDts = undefined;
    this._lastRenderTime = null;
    this.playFinish = null;
  }

  pause() {
    this.paused = true;
  }

  initWasmWorker() {
    let _this = this;
    this.wasmworker = (0, _webworkifyWebpack2.default)(/*require.resolve*/(/*! ./worker.js */ "../xgplayer-utils/src/mobile/worker.js"));
    this.wasmworker.postMessage({
      msg: 'init',
      meta: this.meta
    });
    this.wasmworker.addEventListener('message', msg => {
      switch (msg.data.msg) {
        case 'DECODER_READY':
          _this._decoderInited = true;
          break;
        case 'DECODED':
          this._onDecoded(msg.data);
          break;
      }
    });
  }

  setVideoMetaData(meta) {
    this.meta = meta;
    if (!this._decoderInited) {
      this.initWasmWorker();
      return;
    }
    this._avccpushed = true;
    let data = new Uint8Array(meta.sps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.sps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    data = new Uint8Array(meta.pps.byteLength + 4);
    data.set([0, 0, 0, 1]);
    data.set(meta.pps, 4);
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data
    });

    if (!this.yuvCanvas) {
      let config = Object.assign({ meta, canvas: this.canvas }, this.config);
      this.yuvCanvas = new _yuvCanvas2.default(config);
    }
    this.readyStatus = 1;
  }

  decodeVideo(videoTrack) {
    if (!this._decoderInited) {
      return;
    }

    if (!this._avccpushed) {
      this.setVideoMetaData(this.meta);
    }
    let { samples } = videoTrack;
    let sample = samples.shift();

    while (sample) {
      if (!this._baseDts) {
        this._baseDts = sample.dts;
      }
      this.source.push(sample);
      sample = samples.shift();
    }

    this._preload();
  }

  _preload() {
    if (!this._lastSampleDts || this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
      let sample = this.source.get();
      if (sample) {
        this._lastSampleDts = sample.dts;
        this._analyseNal(sample);
      }

      while (sample && this._lastSampleDts - this._baseDts < this.currentTime + this.preloadTime * 1000) {
        sample = this.source.get();
        if (sample) {
          this._analyseNal(sample);
          this._lastSampleDts = sample.dts;
        }
      }
    }
  }

  _analyseNal(sample) {
    let nals = _nalunit2.default.getAvccNals(new _stream2.default(sample.data.buffer));

    let length = 0;
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      length += nal.body.byteLength + 4;
    }
    let offset = 0;
    let data = new Uint8Array(length);
    for (let i = 0; i < nals.length; i++) {
      let nal = nals[i];
      data.set([0, 0, 0, 1], offset);
      offset += 4;
      data.set(new Uint8Array(nal.body), offset);
      offset += nal.body.byteLength;
    }
    this.wasmworker.postMessage({
      msg: 'decode',
      data: data,
      info: {
        dts: sample.dts,
        pts: sample.pts ? sample.pts : sample.dts + sample.cts,
        key: sample.isKeyframe
      }
    });
  }

  _onDecoded(data) {
    let { dts } = data.info;
    this._decodedFrames[dts] = data;
  }

  play() {
    this.paused = false;
    return new Promise(resolve => {
      this.playFinish = resolve;
    });
  }

  _onTimer(currentTime) {
    if (this.paused) {
      return;
    }
    if (this.meta) {
      if (this.meta.frameRate && this.meta.frameRate.fixed && this.meta.frameRate.fps) {}
      let frameTimes = Object.keys(this._decodedFrames);
      if (frameTimes.length > 0) {
        this.currentTime = currentTime;
        let frameTime = -1;
        for (let i = 0; i < frameTimes.length && Number.parseInt(frameTimes[i]) - this._baseDts <= this.currentTime; i++) {
          frameTime = Number.parseInt(frameTimes[i - 1]);
        }

        let frame = this._decodedFrames[frameTime];
        if (frame) {
          if (this.oncanplay && this.readyStatus < 4) {
            this.oncanplay();
            this.readyStatus = 4;
          }
          this.yuvCanvas.render(frame.buffer, frame.width, frame.height, frame.yLinesize, frame.uvLinesize);

          if (this.playFinish) {
            this.playFinish();
          }
        }
        for (let i = 0; i < frameTimes.length; i++) {
          if (Number.parseInt(frameTimes[i]) < frameTime) {
            delete this._decodedFrames[frameTimes[i]];
          }
        }
      }
    }
    this._lastRenderTime = Date.now();
  }

  cleanBuffer() {
    if (this.currentTime > 1) {
      this.source.remove(0, this.currentTime - 1);
    }
  }

  destroy() {
    this.wasmworker = null;
    this.canvas = null;
    this.source = null;
    this._decoderInited = false;
  }

  get buffered() {
    const ranges = [];
    let currentRange = {
      start: null,
      end: null
    };
    for (let i = 0; i < this.source.buffer.length; i++) {
      const { start, end } = this.source.buffer[i];
      if (!currentRange.start) {
        currentRange.start = start;
      }
      if (!currentRange.end) {
        currentRange.end = end;
      }

      if (start - currentRange.end > 1000) {
        currentRange.start = currentRange.start / 1000;
        currentRange.end = currentRange.end / 1000;
        currentRange = {
          start,
          end
        };
      } else {
        currentRange.end = end;
      }
    }

    if (currentRange.start !== null && currentRange.end !== null) {
      currentRange.start = currentRange.start / 1000;
      currentRange.end = currentRange.end / 1000;
      ranges.push(currentRange);
    }

    return new _TimeRanges2.default(ranges);
  }
}
exports.default = VideoCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/mobile/worker.js":
/*!**********************************************!*\
  !*** ../xgplayer-utils/src/mobile/worker.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const MAX_STREAM_BUFFER_LENGTH = 1024 * 1024;
var Decoder = function (self) {
  this.inited = false;
  this.self = self;
  this.meta = this.self.meta;
  this.infolist = {};
  self.par_broadwayOnBroadwayInited = this.broadwayOnBroadwayInited.bind(this);
  self.par_broadwayOnPictureDecoded = this.broadwayOnPictureDecoded.bind(this);
};

Decoder.prototype.toU8Array = function (ptr, length) {
  return this.self.HEAPU8.subarray(ptr, ptr + length);
};

Decoder.prototype.init = function () {
  Module._broadwayInit();
  this.streamBuffer = this.toU8Array(Module._broadwayCreateStream(MAX_STREAM_BUFFER_LENGTH), MAX_STREAM_BUFFER_LENGTH);
};

Decoder.prototype.broadwayOnPictureDecoded = function (offset, width, height, yLinesize, uvLinesize, infoid) {
  let info = Object.assign({}, this.infolist[infoid]);
  let yRowcount = height;
  let uvRowcount = height / 2;
  if (this.meta.chromaFormat === 444 || this.meta.chromaFormat === 422) {
    uvRowcount = height;
  }
  let data = this.toU8Array(offset, yLinesize * yRowcount + 2 * (uvLinesize * uvRowcount));
  this.infolist[infoid] = null;
  let datetemp = new Uint8Array(data.length);
  datetemp.set(data);
  let buffer = datetemp.buffer;
  this.self.postMessage({
    msg: 'DECODED',
    width,
    height,
    yLinesize,
    uvLinesize,
    info,
    buffer
  }, [buffer]);
};

Decoder.prototype.broadwayOnBroadwayInited = function () {
  this.inited = true;
  this.self.postMessage({ msg: 'DECODER_READY' });
};

Decoder.prototype.decode = function (data, info) {
  let time = parseInt(new Date().getTime());
  let infoid = time - Math.floor(time / 10e8) * 10e8;
  this.infolist[infoid] = info;
  this.streamBuffer.set(data);
  Module._broadwayPlayStream(data.length, infoid);
};

var decoder;

function onPostRun() {
  decoder = new Decoder(this);
  decoder.init();
}

function init(meta) {
  self.importScripts('https://sf1-vcloudcdn.pstatp.com/obj/ttfe/media/decoder/h264/decoder.js');
  addOnPostRun(onPostRun.bind(self));
}

module.exports = function (self) {
  self.addEventListener('message', function (e) {
    var data = e.data;
    if (!data.msg) {
      self.postMessage({
        msg: 'ERROR:invalid message'
      });
    } else {
      switch (data.msg) {
        case 'init':
          console.log(data);
          self.meta = data.meta;
          init();
          break;
        case 'decode':
          decoder.decode(data.data, data.info);
          break;
        default:
          break;
      }
    }
  }, false);
};

/***/ }),

/***/ "../xgplayer-utils/src/mobile/yuv-canvas.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/mobile/yuv-canvas.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class YUVCanvas {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.canvas = this.configs.canvas;
    this.meta = Object.assign({}, this.configs.meta);
    this.chroma = this.meta.chromaFormat;
    this.height = this.meta.presentHeight;
    this.width = this.meta.presentWidth;
    this.canvas.width = 1280;
    this.canvas.height = 720;
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this._initContextGL();
    if (this.contextGL) {
      this._initProgram();
      this._initBuffers();
      this._initTextures();
    };
  }

  _initContextGL() {
    var canvas = this.canvas;
    var gl = null;

    var validContextNames = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
    var nameIndex = 0;

    while (!gl && nameIndex < validContextNames.length) {
      var contextName = validContextNames[nameIndex];

      try {
        if (this.contextOptions) {
          gl = canvas.getContext(contextName, this.contextOptions);
        } else {
          gl = canvas.getContext(contextName);
        };
      } catch (e) {
        gl = null;
      }

      if (!gl || typeof gl.getParameter !== 'function') {
        gl = null;
      }

      ++nameIndex;
    };

    this.contextGL = gl;
  }

  _initProgram() {
    var gl = this.contextGL;

    // vertex shader is the same for all types
    var vertexShaderScript;
    var fragmentShaderScript;
    vertexShaderScript = ['attribute vec4 vertexPos;', 'attribute vec4 texturePos;', 'attribute vec4 uTexturePos;', 'attribute vec4 vTexturePos;', 'varying vec2 textureCoord;', 'varying vec2 uTextureCoord;', 'varying vec2 vTextureCoord;', 'void main()', '{', '  gl_Position = vertexPos;', '  textureCoord = texturePos.xy;', '  uTextureCoord = uTexturePos.xy;', '  vTextureCoord = vTexturePos.xy;', '}'].join('\n');

    fragmentShaderScript = ['precision highp float;', 'varying highp vec2 textureCoord;', 'varying highp vec2 uTextureCoord;', 'varying highp vec2 vTextureCoord;', 'uniform sampler2D ySampler;', 'uniform sampler2D uSampler;', 'uniform sampler2D vSampler;', 'uniform mat4 YUV2RGB;', 'void main(void) {', '  highp float y = texture2D(ySampler,  textureCoord).r;', '  highp float u = texture2D(uSampler,  uTextureCoord).r;', '  highp float v = texture2D(vSampler,  vTextureCoord).r;', '  gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;', '}'].join('\n');

    var YUV2RGB = [1.16438, 0.00000, 1.59603, -0.87079, 1.16438, -0.39176, -0.81297, 0.52959, 1.16438, 2.01723, 0.00000, -1.08139, 0, 0, 0, 1];
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderScript);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      console.log('Vertex shader failed to compile: ' + gl.getShaderInfoLog(vertexShader));
    }

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderScript);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      console.log('Fragment shader failed to compile: ' + gl.getShaderInfoLog(fragmentShader));
    }

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log('Program failed to compile: ' + gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    var YUV2RGBRef = gl.getUniformLocation(program, 'YUV2RGB');
    gl.uniformMatrix4fv(YUV2RGBRef, false, YUV2RGB);

    this.shaderProgram = program;
  }

  _initBuffers() {
    var gl = this.contextGL;
    var program = this.shaderProgram;

    var vertexPosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);

    var vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
    gl.enableVertexAttribArray(vertexPosRef);
    gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);

    var texturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var texturePosRef = gl.getAttribLocation(program, 'texturePos');
    gl.enableVertexAttribArray(texturePosRef);
    gl.vertexAttribPointer(texturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.texturePosBuffer = texturePosBuffer;

    var uTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var uTexturePosRef = gl.getAttribLocation(program, 'uTexturePos');
    gl.enableVertexAttribArray(uTexturePosRef);
    gl.vertexAttribPointer(uTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.uTexturePosBuffer = uTexturePosBuffer;

    var vTexturePosBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);

    var vTexturePosRef = gl.getAttribLocation(program, 'vTexturePos');
    gl.enableVertexAttribArray(vTexturePosRef);
    gl.vertexAttribPointer(vTexturePosRef, 2, gl.FLOAT, false, 0, 0);

    this.vTexturePosBuffer = vTexturePosBuffer;
  }

  _initTextures() {
    var gl = this.contextGL;
    var program = this.shaderProgram;
    var yTextureRef = this._initTexture();
    var ySamplerRef = gl.getUniformLocation(program, 'ySampler');
    gl.uniform1i(ySamplerRef, 0);
    this.yTextureRef = yTextureRef;

    var uTextureRef = this._initTexture();
    var uSamplerRef = gl.getUniformLocation(program, 'uSampler');
    gl.uniform1i(uSamplerRef, 1);
    this.uTextureRef = uTextureRef;

    var vTextureRef = this._initTexture();
    var vSamplerRef = gl.getUniformLocation(program, 'vSampler');
    gl.uniform1i(vSamplerRef, 2);
    this.vTextureRef = vTextureRef;
  }

  _initTexture() {
    var gl = this.contextGL;

    var textureRef = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, textureRef);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.bindTexture(gl.TEXTURE_2D, null);

    return textureRef;
  }

  _drawPictureGL(data, width, height, yLinesize, uvLinesize) {
    var ylen = yLinesize * height;
    var uvlen = uvLinesize * height / 2;
    if (this.chroma === 444 || this.chroma === 422) {
      uvlen *= 2;
    }
    data = new Uint8Array(data);
    let renderData = {
      yData: data.subarray(0, ylen),
      uData: data.subarray(ylen, ylen + uvlen),
      vData: data.subarray(ylen + uvlen, ylen + uvlen + uvlen)
    };
    this._drawPictureGL420(renderData, width, height, yLinesize, uvLinesize);
  }

  _drawPictureGL420(data, width, height, yLinesize, uvLinesize) {
    var gl = this.contextGL;
    var texturePosBuffer = this.texturePosBuffer;
    var uTexturePosBuffer = this.uTexturePosBuffer;
    var vTexturePosBuffer = this.vTexturePosBuffer;

    var yTextureRef = this.yTextureRef;
    var uTextureRef = this.uTextureRef;
    var vTextureRef = this.vTextureRef;

    var yData = data.yData;
    var uData = data.uData;
    var vData = data.vData;

    var yDataPerRow = yLinesize;
    var yRowCnt = height;

    var uDataPerRow = width / 2;
    var uRowCnt = height / 2;

    if (this.chroma === 422 || this.chroma === 444) {
      uRowCnt = height;
    }

    var vDataPerRow = uvLinesize;
    var vRowCnt = uRowCnt;

    let ratiow = this.canvas.width / this.width;
    let ratioh = this.canvas.height / this.height;
    let left = 0;
    let top = 0;
    let w = this.canvas.width;
    let h = this.canvas.height;
    if (ratiow < ratioh) {
      h = this.height * this.canvas.width / this.width;
      top = parseInt((this.canvas.height - this.height * this.canvas.width / this.width) / 2);
    } else {
      w = this.width * this.canvas.height / this.height;
      left = parseInt((this.canvas.width - this.width * this.canvas.height / this.height) / 2);
    }
    gl.viewport(left, top, w, h);

    var texturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, texturePosValues, gl.DYNAMIC_DRAW);

    var uTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, uTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uTexturePosValues, gl.DYNAMIC_DRAW);

    var vTexturePosValues = new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]);
    gl.bindBuffer(gl.ARRAY_BUFFER, vTexturePosBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vTexturePosValues, gl.DYNAMIC_DRAW);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, yTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, yDataPerRow, yRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, yData);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, uTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, uDataPerRow, uRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, uData);

    gl.activeTexture(gl.TEXTURE2);
    gl.bindTexture(gl.TEXTURE_2D, vTextureRef);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, vDataPerRow, vRowCnt, 0, gl.LUMINANCE, gl.UNSIGNED_BYTE, vData);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  _drawPictureRGB(data) {}

  render(data, width, height, yLinesize, uvLinesize) {
    var gl = this.contextGL;
    if (gl) {
      this._drawPictureGL(data, width, height, yLinesize, uvLinesize);
    } else {
      this._drawPictureRGB(data);
    }
  }
}

exports.default = YUVCanvas;

/***/ }),

/***/ "../xgplayer-utils/src/models/TimeRanges.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/TimeRanges.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class TimeRanges {
  constructor(ranges) {
    this.ranges = ranges || [];
  }

  start(idx) {
    return this.ranges[idx] ? this.ranges[idx].start : 0;
  }

  end(idx) {
    return this.ranges[idx] ? this.ranges[idx].end : 0;
  }

  add(range) {
    this.ranges.push(range);
  }

  get length() {
    return this.ranges.length;
  }
}
exports.default = TimeRanges;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-info.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/media-info.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
const isObjectFilled = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (obj[key] === null) {
        return false;
      }
    }
  }
  return true;
};

class MediaInfo {
  constructor() {
    this.mimeType = null;
    this.duration = null;

    this.hasVideo = null;
    this.video = {
      codec: null,
      width: null,
      height: null,
      profile: null,
      level: null,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      chromaFormat: null,
      parRatio: {
        width: 1,
        height: 1
      }
    };

    this.hasAudio = null;

    this.audio = {
      codec: null,
      sampleRate: null,
      sampleRateIndex: null,
      channelCount: null
    };
  }

  isComplete() {
    return MediaInfo.isBaseInfoReady(this) && MediaInfo.isVideoReady(this) && MediaInfo.isAudioReady(this);
  }

  static isBaseInfoReady(mediaInfo) {
    return isObjectFilled(mediaInfo);
  }

  static isVideoReady(mediaInfo) {
    if (!mediaInfo.hasVideo) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }

  static isAudioReady(mediaInfo) {
    if (!mediaInfo.hasAudio) {
      return true;
    }

    return isObjectFilled(mediaInfo.video);
  }
}
exports.default = MediaInfo;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MediaSample {
  constructor(info) {
    let _default = MediaSample.getDefaultInf();

    if (!info || Object.prototype.toString.call(info) !== '[object Object]') {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    Object.entries(sample).forEach(([k, v]) => {
      this[k] = v;
    });
  }

  static getDefaultInf() {
    return {
      dts: null,
      pts: null,
      duration: null,
      position: null,
      isRAP: false, // is Random access point
      originDts: null
    };
  }
}
exports.default = MediaSample;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment-list.js":
/*!**********************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment-list.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegmentList {

    constructor(type) {
        this._type = type;
        this._list = [];
        this._lastAppendLocation = -1; // cached last insert location
    }

    get type() {
        return this._type;
    }

    get length() {
        return this._list.length;
    }

    isEmpty() {
        return this._list.length === 0;
    }

    clear() {
        this._list = [];
        this._lastAppendLocation = -1;
    }

    _searchNearestSegmentBefore(beginDts) {
        let list = this._list;
        if (list.length === 0) {
            return -2;
        }
        let last = list.length - 1;
        let mid = 0;
        let lbound = 0;
        let ubound = last;

        let idx = 0;

        if (beginDts < list[0].originDts) {
            idx = -1;
            return idx;
        }

        while (lbound <= ubound) {
            mid = lbound + Math.floor((ubound - lbound) / 2);
            if (mid === last || beginDts > list[mid].lastSample.originDts && beginDts < list[mid + 1].originDts) {
                idx = mid;
                break;
            } else if (list[mid].originDts < beginDts) {
                lbound = mid + 1;
            } else {
                ubound = mid - 1;
            }
        }
        return idx;
    }

    _searchNearestSegmentAfter(beginDts) {
        return this._searchNearestSegmentBefore(beginDts) + 1;
    }

    append(segment) {
        let list = this._list;
        let lastAppendIdx = this._lastAppendLocation;
        let insertIdx = 0;

        if (lastAppendIdx !== -1 && lastAppendIdx < list.length && segment.originStartDts >= list[lastAppendIdx].lastSample.originDts && (lastAppendIdx === list.length - 1 || lastAppendIdx < list.length - 1 && segment.originStartDts < list[lastAppendIdx + 1].originStartDts)) {
            insertIdx = lastAppendIdx + 1; // use cached location idx
        } else {
            if (list.length > 0) {
                insertIdx = this._searchNearestSegmentBefore(segment.originStartDts) + 1;
            }
        }

        this._lastAppendLocation = insertIdx;
        this._list.splice(insertIdx, 0, segment);
    }

    getLastSegmentBefore(beginDts) {
        let idx = this._searchNearestSegmentBefore(beginDts);
        if (idx >= 0) {
            return this._list[idx];
        } else {
            // -1
            return null;
        }
    }

    getLastSampleBefore(beginDts) {
        let segment = this.getLastSegmentBefore(beginDts);
        if (segment !== null) {
            return segment.lastSample;
        } else {
            return null;
        }
    }

    getLastRAPBefore(beginDts) {
        let segmentIdx = this._searchNearestSegmentBefore(beginDts);
        let randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        while (randomAccessPoints.length === 0 && segmentIdx > 0) {
            segmentIdx--;
            randomAccessPoints = this._list[segmentIdx].randomAccessPoints;
        }
        if (randomAccessPoints.length > 0) {
            return randomAccessPoints[randomAccessPoints.length - 1];
        } else {
            return null;
        }
    }

}
exports.default = MediaSegmentList;

/***/ }),

/***/ "../xgplayer-utils/src/models/media-segment.js":
/*!*****************************************************!*\
  !*** ../xgplayer-utils/src/models/media-segment.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
class MediaSegment {
    constructor() {
        this.startDts = -1;
        this.endDts = -1;
        this.startPts = -1;
        this.endPts = -1;
        this.originStartDts = -1;
        this.originEndDts = -1;
        this.randomAccessPoints = [];
        this.firstSample = null;
        this.lastSample = null;
    }

    addRAP(sample) {
        sample.isRAP = true;
        this.randomAccessPoints.push(sample);
    }
}
exports.default = MediaSegment;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-meta.js":
/*!**************************************************!*\
  !*** ../xgplayer-utils/src/models/track-meta.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackMeta {
  constructor(meta) {
    const _default = {
      sampleRate: 48000,
      channelCount: 2,
      codec: 'mp4a.40.2',
      config: [41, 401, 136, 0],
      duration: 0,
      id: 2,
      refSampleDuration: 21,
      sampleRateIndex: 3,
      timescale: 1000,
      type: 'audio'
    };
    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
  }
}

exports.AudioTrackMeta = AudioTrackMeta;
class VideoTrackMeta {
  constructor(meta) {
    const _default = {
      avcc: null,
      sps: new Uint8Array(0),
      pps: new Uint8Array(0),
      chromaFormat: 420,
      codec: 'avc1.640020',
      codecHeight: 720,
      codecWidth: 1280,
      duration: 0,
      frameRate: {
        fixed: true,
        fps: 25,
        fps_num: 25000,
        fps_den: 1000
      },
      id: 1,
      level: '3.2',
      presentHeight: 720,
      presentWidth: 1280,
      profile: 'High',
      refSampleDuration: 40,
      parRatio: {
        height: 1,
        width: 1
      },
      timescale: 1000,
      type: 'video'
    };

    if (meta) {
      return Object.assign({}, _default, meta);
    }
    return _default;
  }

  destroy() {
    this.init = null;
    this.sps = null;
    this.pps = null;
  }
}
exports.VideoTrackMeta = VideoTrackMeta;

/***/ }),

/***/ "../xgplayer-utils/src/models/track-sample.js":
/*!****************************************************!*\
  !*** ../xgplayer-utils/src/models/track-sample.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class AudioTrackSample {
  constructor(info) {
    let _default = AudioTrackSample.getDefault();
    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      data: new Uint8Array()
    };
  }
}

exports.AudioTrackSample = AudioTrackSample;
class VideoTrackSample {
  constructor(info) {
    let _default = VideoTrackSample.getDefault();

    if (!info) {
      return _default;
    }
    let sample = Object.assign({}, _default, info);

    return sample;
  }

  static getDefault() {
    return {
      dts: null,
      pts: null,
      isKeyframe: false, // is Random access point
      originDts: null,
      data: new Uint8Array()
    };
  }
}
exports.VideoTrackSample = VideoTrackSample;

/***/ }),

/***/ "../xgplayer-utils/src/mse/index.js":
/*!******************************************!*\
  !*** ../xgplayer-utils/src/mse/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class MSE {
  constructor(configs) {
    this.configs = Object.assign({}, configs);
    this.container = this.configs.container;
    this.mediaSource = null;
    this.sourceBuffers = {};
    this.preloadTime = this.configs.preloadTime || 1;
    this.onSourceOpen = this.onSourceOpen.bind(this);
    this.onTimeUpdate = this.onTimeUpdate.bind(this);
    this.onUpdateEnd = this.onUpdateEnd.bind(this);
    this.onWaiting = this.onWaiting.bind(this);
  }

  init() {
    // eslint-disable-next-line no-undef
    this.mediaSource = new self.MediaSource();
    this.mediaSource.addEventListener('sourceopen', this.onSourceOpen);
    this.container.src = URL.createObjectURL(this.mediaSource);
    this.url = this.container.src;
    this.container.addEventListener('timeupdate', this.onTimeUpdate);
    this.container.addEventListener('waiting', this.onWaiting);
  }

  onTimeUpdate() {
    this.emit('TIME_UPDATE', this.container);
  }

  onWaiting() {
    this.emit('WAITING', this.container);
  }

  onSourceOpen() {
    this.addSourceBuffers();
  }

  onUpdateEnd() {
    this.emit('SOURCE_UPDATE_END');
    this.doAppend();
  }
  addSourceBuffers() {
    if (this.mediaSource.readyState !== 'open') {
      return;
    }
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    let tracks = this._context.getInstance('TRACKS');
    let track;

    sources = sources.sources;
    let add = false;
    for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
      let type = Object.keys(sources)[i];
      if (type === 'audio') {
        track = tracks.audioTrack;
      } else if (type === 'video') {
        track = tracks.videoTrack;
        // return;
      }
      if (track) {
        let dur = type === 'audio' ? 21 : 40;
        if (track.meta && track.meta.refSampleDuration) dur = track.meta.refSampleDuration;
        if (sources[type].data.length >= this.preloadTime / dur) {
          add = true;
        }
      }
    }

    if (add) {
      if (Object.keys(this.sourceBuffers).length > 0) {
        return;
      }
      for (let i = 0, k = Object.keys(sources).length; i < k; i++) {
        let type = Object.keys(sources)[i];
        let source = sources[type];
        let mime = type === 'video' ? 'video/mp4;codecs=' + source.mimetype : 'audio/mp4;codecs=' + source.mimetype;
        let sourceBuffer = this.mediaSource.addSourceBuffer(mime);
        this.sourceBuffers[type] = sourceBuffer;
        sourceBuffer.addEventListener('updateend', this.onUpdateEnd);
        this.doAppend();
      }
    }
  }

  doAppend() {
    let sources = this._context.getInstance('PRE_SOURCE_BUFFER');
    if (sources) {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let type = Object.keys(this.sourceBuffers)[i];
        let sourceBuffer = this.sourceBuffers[type];
        if (!sourceBuffer.updating) {
          let source = sources.sources[type];
          if (source && !source.inited) {
            // console.log('append initial segment')
            sourceBuffer.appendBuffer(source.init.buffer.buffer);
            source.inited = true;
          } else if (source) {
            let data = source.data.shift();
            if (data) {
              sourceBuffer.appendBuffer(data.buffer.buffer);
            }
          }
        }
      }
    }
  }

  endOfStream() {
    const { readyState, activeSourceBuffers } = this.mediaSource;
    if (readyState === 'open' && activeSourceBuffers.length === 0) {
      try {
        this.mediaSource.endOfStream();
      } catch (e) {
        // log
      }
    }
  }

  remove(end, start = 0) {
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      if (!buffer.updating) {
        // console.log(start, end)
        buffer.remove(start, end);
      }
    }
  }
  removeBuffers() {
    const taskList = [];
    for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
      let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      buffer.removeEventListener('updateend', this.onUpdateEnd);

      let task;
      if (buffer.updating) {
        task = new Promise(resolve => {
          const doCleanBuffer = function () {
            let retryTime = 3;

            const clean = () => {
              if (!buffer.updating) {
                MSE.clearBuffer(buffer);
                resolve();
              } else if (retryTime > 0) {
                setTimeout(clean, 200);
                retryTime--;
              } else {
                resolve();
              }
            };

            setTimeout(clean, 200);
            buffer.removeEventListener('updateend', doCleanBuffer);
          };
          buffer.addEventListener('updateend', doCleanBuffer);
        });
      } else {
        MSE.clearBuffer(buffer);
        task = Promise.resolve();
      }

      taskList.push(task);
    }

    return Promise.all(taskList);
  }

  destroy() {
    return this.removeBuffers().then(() => {
      for (let i = 0; i < Object.keys(this.sourceBuffers).length; i++) {
        let buffer = this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
        this.mediaSource.removeSourceBuffer(buffer);
        delete this.sourceBuffers[Object.keys(this.sourceBuffers)[i]];
      }

      this.container.removeEventListener('timeupdate', this.onTimeUpdate);
      this.container.removeEventListener('waiting', this.onWaiting);
      this.mediaSource.removeEventListener('sourceopen', this.onSourceOpen);

      this.endOfStream();
      window.URL.revokeObjectURL(this.url);

      this.url = null;
      this.configs = {};
      this.container = null;
      this.mediaSource = null;
      this.sourceBuffers = {};
      this.preloadTime = 1;
    });
  }

  static clearBuffer(buffer) {
    const buffered = buffer.buffered;
    let bEnd = 0.1;
    for (let i = 0, len = buffered.length; i < len; i++) {
      bEnd = buffered.end(i);
    }
    try {
      buffer.remove(0, bEnd);
    } catch (e) {
      // DO NOTHING
    }
  }
}
exports.default = MSE;

/***/ }),

/***/ "../xgplayer-utils/src/write/buffer.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/buffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _concatTypedArray = __webpack_require__(/*! concat-typed-array */ "../xgplayer-utils/node_modules/concat-typed-array/lib/index.js");

var _concatTypedArray2 = _interopRequireDefault(_concatTypedArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Buffer {
  constructor(buffer) {
    this.buffer = buffer || new Uint8Array(0);
  }

  write(...buffer) {
    buffer.forEach(item => {
      this.buffer = (0, _concatTypedArray2.default)(Uint8Array, this.buffer, item);
    });
  }

  static writeUint32(value) {
    return new Uint8Array([value >> 24, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff]);
  }

  static readAsInt(arr) {
    let temp = '';

    function padStart4Hex(hexNum) {
      let hexStr = hexNum.toString(16);
      return hexStr.padStart(2, '0');
    }

    arr.forEach(num => {
      temp += padStart4Hex(num);
    });
    return parseInt(temp, 16);
  }
}

exports.default = Buffer;

/***/ }),

/***/ "../xgplayer-utils/src/write/stream.js":
/*!*********************************************!*\
  !*** ../xgplayer-utils/src/write/stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class Stream {
  constructor(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
      this.dataview = new DataView(buffer);
      this.dataview.position = 0;
    } else {
      throw new Error('data is invalid');
    }
  }

  get length() {
    return this.buffer.byteLength;
  }

  set position(value) {
    this.dataview.position = value;
  }

  get position() {
    return this.dataview.position;
  }

  back(count) {
    this.position -= count;
  }

  skip(count) {
    let loop = Math.floor(count / 4);
    let last = count % 4;
    for (let i = 0; i < loop; i++) {
      Stream.readByte(this.dataview, 4);
    }
    if (last > 0) {
      Stream.readByte(this.dataview, last);
    }
  }

  /**
   * [readByte 从DataView中读取数据]
   * @param  {DataView} buffer [DataView实例]
   * @param  {Number} size   [读取字节数]
   * @return {Number}        [整数]
   */
  static readByte(buffer, size, sign) {
    let res;
    switch (size) {
      case 1:
        if (sign) {
          res = buffer.getInt8(buffer.position);
        } else {
          res = buffer.getUint8(buffer.position);
        }
        break;
      case 2:
        if (sign) {
          res = buffer.getInt16(buffer.position);
        } else {
          res = buffer.getUint16(buffer.position);
        }
        break;
      case 3:
        if (sign) {
          throw new Error('not supported for readByte 3');
        } else {
          res = buffer.getUint8(buffer.position) << 16;
          res |= buffer.getUint8(buffer.position + 1) << 8;
          res |= buffer.getUint8(buffer.position + 2);
        }
        break;
      case 4:
        if (sign) {
          res = buffer.getInt32(buffer.position);
        } else {
          res = buffer.getUint32(buffer.position);
        }
        break;
      case 8:
        if (sign) {
          throw new Error('not supported for readBody 8');
        } else {
          res = buffer.getUint32(buffer.position) << 32;
          res |= buffer.getUint32(buffer.position + 4);
        }
        break;
      default:
        res = '';
    }
    buffer.position += size;
    return res;
  }

  readUint8() {
    return Stream.readByte(this.dataview, 1);
  }

  readUint16() {
    return Stream.readByte(this.dataview, 2);
  }

  readUint24() {
    return Stream.readByte(this.dataview, 3);
  }

  readUint32() {
    return Stream.readByte(this.dataview, 4);
  }

  readUint64() {
    return Stream.readByte(this.dataview, 8);
  }

  readInt8() {
    return Stream.readByte(this.dataview, 1, true);
  }
  readInt16() {
    return Stream.readByte(this.dataview, 2, true);
  }

  readInt32() {
    return Stream.readByte(this.dataview, 4, true);
  }

  writeUint32(value) {
    return new Uint8Array([value >>> 24 & 0xff, value >>> 16 & 0xff, value >>> 8 & 0xff, value & 0xff]);
  }
}

exports.default = Stream;

/***/ }),

/***/ "./src/flv-live-mobile.js":
/*!********************************!*\
  !*** ./src/flv-live-mobile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _xgplayerLoader = __webpack_require__(/*! xgplayer-loader */ "../xgplayer-loader/index.js");

var _xgplayerDemux = __webpack_require__(/*! xgplayer-demux */ "../xgplayer-demux/index.js");

var _xgplayerRemux = __webpack_require__(/*! xgplayer-remux */ "../xgplayer-remux/index.js");

var _xgplayerBuffer = __webpack_require__(/*! xgplayer-buffer */ "../xgplayer-buffer/index.js");

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _xgplayerCodec = __webpack_require__(/*! xgplayer-codec */ "../xgplayer-codec/index.js");

var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEMUX_EVENTS = _xgplayerUtils.EVENTS.DEMUX_EVENTS;
const LOADER_EVENTS = _xgplayerUtils.EVENTS.LOADER_EVENTS;
const BROWSER_EVENTS = _xgplayerUtils.EVENTS.BROWSER_EVENTS;

const Tag = 'FLVController';

class Logger {
  warn() {}
}

class FlvController {
  constructor(player) {
    this.TAG = Tag;
    this._player = player;

    this.video = this._player.video;
    this.state = {
      initSegmentArrived: false
    };
  }

  init() {
    this._context.registry('FETCH_LOADER', _xgplayerLoader.FetchLoader);
    this._context.registry('LOADER_BUFFER', _xgplayerBuffer.XgBuffer);
    this._context.registry('PRE_SOURCE_BUFFER', _xgplayerBuffer.PreSource);

    this._context.registry('FLV_DEMUXER', _xgplayerDemux.FlvDemuxer);

    this._context.registry('MP4_REMUXER', _xgplayerRemux.Mp4Remuxer);
    this._context.registry('TRACKS', _xgplayerBuffer.Tracks);

    this._context.registry('COMPATIBILITY', _xgplayerCodec.Compatibility);
    this._context.registry('PAGE_VISIBILITY', _xgplayerUtils.PageVisibility);

    this._context.registry('LOGGER', Logger);

    this.initListeners();
  }

  initListeners() {
    this.on(LOADER_EVENTS.LOADER_DATALOADED, this._handleLoaderDataLoaded.bind(this));
    this.on(LOADER_EVENTS.LOADER_ERROR, this._handleNetworkError.bind(this));

    this.on(DEMUX_EVENTS.MEDIA_INFO, this._handleMediaInfo.bind(this));
    this.on(DEMUX_EVENTS.METADATA_PARSED, this._handleMetadataParsed.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_COMPLETE, this._handleDemuxComplete.bind(this));
    this.on(DEMUX_EVENTS.DEMUX_ERROR, this._handleDemuxError.bind(this));
  }

  _handleMediaInfo() {
    if (!this._context.mediaInfo) {
      this.emit(DEMUX_EVENTS.DEMUX_ERROR, new Error('failed to get mediainfo'));
    }
  }

  _handleLoaderDataLoaded() {
    this.emitTo('FLV_DEMUXER', DEMUX_EVENTS.DEMUX_START);
  }

  _handleMetadataParsed(type) {
    if (type === 'audio') {
      // 将音频meta信息交给audioContext，不走remux封装
      const { audioTrack } = this._context.getInstance('TRACKS');
      if (audioTrack && audioTrack.meta) {
        this._setMetaToAudio(audioTrack.meta);
      }
    } else {
      const { videoTrack } = this._context.getInstance('TRACKS');
      if (videoTrack && videoTrack.meta) {
        this._setMetaToVideo(videoTrack.meta);
      }
    }
  }

  _handleDemuxComplete() {
    if (this._player.video) {
      const { videoTrack, audioTrack } = this._context.getInstance('TRACKS');
      this._player.video.onDemuxComplete(videoTrack, audioTrack);
    }
  }

  _handleAppendInitSegment() {
    this.state.initSegmentArrived = true;
    //  this.mse.addSourceBuffers()
  }

  _handleNetworkError() {
    this._player.emit('error', new _xgplayer2.default.Errors('network', this._player.config.url));
  }

  _handleDemuxError() {
    this._player.emit('error', new _xgplayer2.default.Errors('parse', this._player.config.url));
  }

  _setMetaToAudio(audioMeta) {
    if (this._player.video) {
      this._player.video.setAudioMeta(audioMeta);
    }
  }

  _setMetaToVideo(videoMeta) {
    if (this._player.video) {
      this._player.video.setVideoMeta(videoMeta);
    }
  }

  seek() {
    if (!this.state.initSegmentArrived) {
      this.loadData();
    }
  }

  loadData() {
    this.emit(LOADER_EVENTS.LADER_START, this._player.config.url);
  }

  pause() {
    const loader = this._context.getInstance('FETCH_LOADER');

    if (loader) {
      loader.cancel();
    }
  }

  /**
   * 保证当前播放的视频以gop为单位
   * @param videoTrack
   */
  static resolveVideoGOP(videoTrack) {
    const { samples } = videoTrack;
    if (!samples.length) {
      return;
    }

    let firstIframeIdx = null;
    let lastIframeIdx = null;

    if (videoTrack.tempSamples && videoTrack.tempSamples.length) {
      // 将缓存帧放置到队列的头部
      samples.unshift.apply(samples, videoTrack.tempSamples);
    }

    // 寻找第一个I帧
    for (let i = 0, len = samples.length; i < len; i++) {
      const current = samples[i];
      if (current.isKeyframe) {
        firstIframeIdx = i;
        break;
      }
    }

    // 寻找最后一个I帧
    for (let i = samples.length - 1; i > 0; i++) {
      const current = samples[i];

      if (current.isKeyframe) {
        lastIframeIdx = i;
        break;
      }
    }

    if (firstIframeIdx !== 0) {
      samples.splice(0, firstIframeIdx - 1);
    }

    videoTrack.samples = samples.slice(0, lastIframeIdx);
    const rest = samples.slice(lastIframeIdx);
    if (videoTrack.tempSamples) {
      videoTrack.tempSamples.push.apply(videoTrack.tempSamples, rest);
    } else {
      // 将剩下的帧缓存，等待一个完整的gop
      videoTrack.tempSamples = rest;
    }
  }
}
exports.default = FlvController;

/***/ }),

/***/ "./src/mobile.js":
/*!***********************!*\
  !*** ./src/mobile.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _xgplayer = __webpack_require__(/*! xgplayer */ "xgplayer");

var _xgplayer2 = _interopRequireDefault(_xgplayer);

var _xgplayerUtils = __webpack_require__(/*! xgplayer-utils */ "../xgplayer-utils/index.js");

var _flvLiveMobile = __webpack_require__(/*! ./flv-live-mobile */ "./src/flv-live-mobile.js");

var _flvLiveMobile2 = _interopRequireDefault(_flvLiveMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const flvAllowedEvents = _xgplayerUtils.EVENTS.FlvAllowedEvents;

class FlvPlayer extends _xgplayer2.default {
  constructor(config) {
    if (!config.mediaType) {
      config.mediaType = 'mobile-video';
    }
    super(config);
    this.context = new _xgplayerUtils.Context(flvAllowedEvents);
    this.initEvents();
  }

  start() {
    this.initFlv();
    this.context.init();
    this.flv.seek(0);
    super.start(this.config.url);
    this.play();
  }

  initFlvEvents(flv) {
    const player = this;
    flv.once(_xgplayerUtils.EVENTS.REMUX_EVENTS.INIT_SEGMENT, () => {
      _xgplayer2.default.util.addClass(player.root, 'xgplayer-is-live');
      if (!_xgplayer2.default.util.findDom(this.root, 'xg-live')) {
        const live = _xgplayer2.default.util.createDom('xg-live', '正在直播', {}, 'xgplayer-live');
        player.controls.appendChild(live);
      }
    });

    flv.once(_xgplayerUtils.EVENTS.LOADER_EVENTS.LOADER_COMPLETE, () => {
      // 直播完成，待播放器播完缓存后发送关闭事件
      if (!player.paused) {
        const timer = setInterval(() => {
          const end = player.getBufferedRange()[1];
          if (Math.abs(player.currentTime - end) < 0.5) {
            player.emit('ended');
            window.clearInterval(timer);
          }
        }, 200);
      }
    });
    flv.on(_xgplayerUtils.EVENTS.BROWSER_EVENTS.VISIBILITY_CHANGE, hidden => {
      if (hidden) {
        this.pause();
      } else {
        this.play();
      }
    });
  }

  initEvents() {
    this.on('timeupdate', () => {
      this.loadData();
    });

    this.on('seeking', () => {
      const time = this.currentTime;
      const range = this.getBufferedRange();
      if (time > range[1] || time < range[0]) {
        this.flv.seek(this.currentTime);
      }
    });
  }

  initFlv() {
    const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
    this.initFlvEvents(flv);
    this.flv = flv;
  }

  play() {
    if (this._hasStart && this.paused) {
      this._destroy();
      this.context = new _xgplayerUtils.Context(flvAllowedEvents);
      const flv = this.context.registry('FLV_CONTROLLER', _flvLiveMobile2.default)(this);
      this.initFlvEvents(flv);
      this.flv = flv;
      this.context.init();
      this.loadData();
      super.start();
      super.play();
    } else {
      super.play();
    }
  }

  pause() {
    super.pause();
    if (this.flv) {
      this.flv.pause();
    }
  }

  loadData(time = this.currentTime) {
    if (this.flv) {
      this.flv.seek(time);
    }
  }
  destroy() {
    this._destroy();
    super.destroy();
  }

  _destroy() {
    this.context.destroy();
    this.flv = null;
    this.context = null;
  }

  get src() {
    return this.currentSrc;
  }

  set src(url) {
    this.player.config.url = url;
    if (!this.paused) {
      this.pause();
      this.once('pause', () => {
        this.start(url);
      });
      this.once('canplay', () => {
        this.play();
      });
    } else {
      this.start(url);
    }
    this.once('canplay', () => {
      this.currentTime = 0;
    });
  }
}

module.exports = FlvPlayer;

/***/ }),

/***/ 1:
/*!*****************************!*\
  !*** multi ./src/mobile.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/mobile.js */"./src/mobile.js");


/***/ }),

/***/ "xgplayer":
/*!*************************!*\
  !*** external "Player" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["Player"]; }());

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9GbHZQbGF5ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy9Vc2Vycy9qaWFuZ3l1cWluZy9EZXNrdG9wL1Byb2plY3RzL2RldnNwYWNlL3hncGxheWVyL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWJ1ZmZlci9zcmMvYnVmZmVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1idWZmZXIvc3JjL3ByZXNvdWNlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1idWZmZXIvc3JjL3RyYWNrLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvc3JjL2FhYy9hYWMtaGVscGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1jb2RlYy9zcmMvY29tcGF0aWJpbGl0eS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItY29kZWMvc3JjL2gyNjQvbmFsdW5pdC9nb2xvbWIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9oMjY0L25hbHVuaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWNvZGVjL3NyYy9oMjY0L25hbHVuaXQvc3BzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1kZW11eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2Zsdi9hbWYtcGFyc2VyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1kZW11eC9zcmMvZmx2L2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1kZW11eC9zcmMvaGxzL2RlbXV4ZXIvbTN1OHBhcnNlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItZGVtdXgvc3JjL2hscy9kZW11eGVyL3RzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1kZW11eC9zcmMvaGxzL3BsYXlsaXN0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLWxvYWRlci9zcmMvZmV0Y2gtbG9hZGVyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1yZW11eC9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItcmVtdXgvc3JjL21wNC9mbXA0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci1yZW11eC9zcmMvbXA0L2luZGV4LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvbm9kZV9tb2R1bGVzL2NvbmNhdC10eXBlZC1hcnJheS9saWIvY29uY2F0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9ub2RlX21vZHVsZXMvY29uY2F0LXR5cGVkLWFycmF5L2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvbm9kZV9tb2R1bGVzL3dlYndvcmtpZnktd2VicGFjay9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2NvbnN0YW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9jb25zdGFudHMvd29ya2VyLWNvbW1hbmRzLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2NyeXB0by9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2Vudi9QYWdlVmlzaWJpbGl0eS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL2Vudi9pc2xlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvZW52L3NuaWZmZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9lbnYvdXRmOC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS9hdWRpby1jb250ZXh0LmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL21vYmlsZS12aWRlby5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vYmlsZS9zb3VyY2VidWZmZXIuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvdGlja2VyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3ZpZGVvLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2JpbGUvd29ya2VyLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9iaWxlL3l1di1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvVGltZVJhbmdlcy5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy9tZWRpYS1pbmZvLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL21lZGlhLXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy9tZWRpYS1zZWdtZW50LWxpc3QuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyLy4uL3hncGxheWVyLXV0aWxzL3NyYy9tb2RlbHMvbWVkaWEtc2VnbWVudC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21vZGVscy90cmFjay1tZXRhLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uLi94Z3BsYXllci11dGlscy9zcmMvbW9kZWxzL3RyYWNrLXNhbXBsZS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL21zZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL3dyaXRlL2J1ZmZlci5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi4veGdwbGF5ZXItdXRpbHMvc3JjL3dyaXRlL3N0cmVhbS5qcyIsIndlYnBhY2s6Ly9GbHZQbGF5ZXIvLi9zcmMvZmx2LWxpdmUtbW9iaWxlLmpzIiwid2VicGFjazovL0ZsdlBsYXllci8uL3NyYy9tb2JpbGUuanMiLCJ3ZWJwYWNrOi8vRmx2UGxheWVyL2V4dGVybmFsIFwiUGxheWVyXCIiXSwibmFtZXMiOlsiUiIsIlJlZmxlY3QiLCJSZWZsZWN0QXBwbHkiLCJhcHBseSIsInRhcmdldCIsInJlY2VpdmVyIiwiYXJncyIsIkZ1bmN0aW9uIiwicHJvdG90eXBlIiwiY2FsbCIsIlJlZmxlY3RPd25LZXlzIiwib3duS2V5cyIsIk9iamVjdCIsImdldE93blByb3BlcnR5U3ltYm9scyIsImdldE93blByb3BlcnR5TmFtZXMiLCJjb25jYXQiLCJQcm9jZXNzRW1pdFdhcm5pbmciLCJ3YXJuaW5nIiwiY29uc29sZSIsIndhcm4iLCJOdW1iZXJJc05hTiIsIk51bWJlciIsImlzTmFOIiwidmFsdWUiLCJFdmVudEVtaXR0ZXIiLCJpbml0IiwibW9kdWxlIiwiZXhwb3J0cyIsIl9ldmVudHMiLCJ1bmRlZmluZWQiLCJfZXZlbnRzQ291bnQiLCJfbWF4TGlzdGVuZXJzIiwiZGVmYXVsdE1heExpc3RlbmVycyIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInNldCIsImFyZyIsIlJhbmdlRXJyb3IiLCJnZXRQcm90b3R5cGVPZiIsImNyZWF0ZSIsInNldE1heExpc3RlbmVycyIsIm4iLCIkZ2V0TWF4TGlzdGVuZXJzIiwidGhhdCIsImdldE1heExpc3RlbmVycyIsImVtaXQiLCJ0eXBlIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInB1c2giLCJkb0Vycm9yIiwiZXZlbnRzIiwiZXJyb3IiLCJlciIsIkVycm9yIiwiZXJyIiwibWVzc2FnZSIsImNvbnRleHQiLCJoYW5kbGVyIiwibGVuIiwibGlzdGVuZXJzIiwiYXJyYXlDbG9uZSIsIl9hZGRMaXN0ZW5lciIsImxpc3RlbmVyIiwicHJlcGVuZCIsIm0iLCJleGlzdGluZyIsIlR5cGVFcnJvciIsIm5ld0xpc3RlbmVyIiwidW5zaGlmdCIsIndhcm5lZCIsInciLCJTdHJpbmciLCJuYW1lIiwiZW1pdHRlciIsImNvdW50IiwiYWRkTGlzdGVuZXIiLCJvbiIsInByZXBlbmRMaXN0ZW5lciIsIm9uY2VXcmFwcGVyIiwiZmlyZWQiLCJyZW1vdmVMaXN0ZW5lciIsIndyYXBGbiIsIl9vbmNlV3JhcCIsInN0YXRlIiwid3JhcHBlZCIsImJpbmQiLCJvbmNlIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3QiLCJwb3NpdGlvbiIsIm9yaWdpbmFsTGlzdGVuZXIiLCJzaGlmdCIsInNwbGljZU9uZSIsIm9mZiIsInJlbW92ZUFsbExpc3RlbmVycyIsImtleXMiLCJrZXkiLCJfbGlzdGVuZXJzIiwidW53cmFwIiwiZXZsaXN0ZW5lciIsInVud3JhcExpc3RlbmVycyIsInJhd0xpc3RlbmVycyIsImxpc3RlbmVyQ291bnQiLCJldmVudE5hbWVzIiwiYXJyIiwiY29weSIsIkFycmF5IiwiaW5kZXgiLCJwb3AiLCJyZXQiLCJUcmFjayIsInJlcXVpcmUiLCJkZWZhdWx0IiwiVHJhY2tzIiwiQXVkaW9UcmFjayIsIlZpZGVvVHJhY2siLCJYZ0J1ZmZlciIsIlJlbXV4QnVmZmVyIiwiUHJlU291cmNlIiwiY29uc3RydWN0b3IiLCJoaXN0b3J5TGVuIiwiYXJyYXkiLCJvZmZzZXQiLCJkYXRhIiwiYnl0ZUxlbmd0aCIsIlVpbnQ4QXJyYXkiLCJfc2hpZnRCdWZmZXIiLCJzbGljZSIsInRtcG9mZiIsInRtcCIsInRlbXBsZW5ndGgiLCJjbGVhciIsImRlc3Ryb3kiLCJ0b0ludCIsInN0YXJ0IiwicmV0SW50IiwidmlkZW8iLCJhdWRpbyIsIlNvdXJjZSIsIm1pbWV0eXBlIiwic291cmNlcyIsImdldFNvdXJjZSIsInNvdXJjZSIsImNyZWF0ZVNvdXJjZSIsImlkIiwic2VxdWVuY2VOdW1iZXIiLCJzYW1wbGVzIiwiZHJvcHBlZFNhbXBsZXMiLCJyZXNldCIsImRpc3Ryb3kiLCJUQUciLCJkcm9wcGVkIiwiYXVkaW9UcmFjayIsInZpZGVvVHJhY2siLCJOYWx1bml0IiwiU3BzUGFyc2VyIiwiQ29tcGF0aWJpbGl0eSIsIkFBQyIsImdldFNpbGVudEZyYW1lIiwiY29kZWMiLCJjaGFubmVsQ291bnQiLCJSRU1VWF9FVkVOVFMiLCJERU1VWF9FVkVOVFMiLCJFVkVOVFMiLCJuZXh0QXVkaW9EdHMiLCJuZXh0VmlkZW9EdHMiLCJsYXN0QXVkaW9TYW1wbGVzTGVuIiwibGFzdFZpZGVvU2FtcGxlc0xlbiIsImxhc3RWaWRlb0R0cyIsImxhc3RBdWRpb0R0cyIsImFsbEF1ZGlvU2FtcGxlc0NvdW50IiwiYWxsVmlkZW9TYW1wbGVzQ291bnQiLCJfZmlyc3RBdWRpb1NhbXBsZSIsIl9maXJzdFZpZGVvU2FtcGxlIiwiZmlsbGVkQXVkaW9TYW1wbGVzIiwiZmlsbGVkVmlkZW9TYW1wbGVzIiwiX3ZpZGVvTGFyZ2VHYXAiLCJfYXVkaW9MYXJnZUdhcCIsImJlZm9yZSIsIlJFTVVYX01FRElBIiwiZG9GaXgiLCJpc0ZpcnN0QXVkaW9TYW1wbGVzIiwiaXNGaXJzdFZpZGVvU2FtcGxlcyIsImdldEZpcnN0U2FtcGxlIiwicmVjb3JkU2FtcGxlc0NvdW50IiwiZml4UmVmU2FtcGxlRHVyYXRpb24iLCJtZXRhIiwiY2hhbmdlZCIsInZpZGVvQ2hhbmdlZCIsImNoYW5nZWRJZHgiLCJ2aWRlb0NoYW5nZWRJZHgiLCJkZXRhY3RDaGFuZ2VTdHJlYW0iLCJmaXhDaGFuZ2VTdHJlYW1WaWRlbyIsImRvRml4VmlkZW8iLCJhdWRpb0NoYW5nZWQiLCJhdWRpb0NoYW5nZWRJZHgiLCJmaXhDaGFuZ2VTdHJlYW1BdWRpbyIsImRvRml4QXVkaW8iLCJmaXJzdCIsInN0cmVhbUNoYW5nZVN0YXJ0IiwidmlkZW9TYW1wbGVzIiwiZnJhbWVSYXRlIiwiZml4ZWQiLCJmaXJzdFNhbXBsZSIsInNhbXBsZXNMZW4iLCJkb0ZpeExhcmdlR2FwIiwiZHRzIiwiZGV0ZWN0TGFyZ2VHYXAiLCJmaXJzdER0cyIsInZpZGVvRmlyc3REdHMiLCJhdWRpb0ZpcnN0RHRzIiwiZ2FwIiwicmVmU2FtcGxlRHVyYXRpb24iLCJmaWxsQ291bnQiLCJNYXRoIiwiZmxvb3IiLCJjbG9uZWRGaXJzdFNhbXBsZSIsImFzc2lnbiIsInB0cyIsImN0cyIsInNpemUiLCJhYnNHYXAiLCJhYnMiLCJmaWxsRnJhbWVDb3VudCIsImNsb25lZFNhbXBsZSIsImNvbXB1dGVkIiwib3JpZ2luRHRzIiwibGFzdER0cyIsImxhc3RTYW1wbGVEdXJhdGlvbiIsImN1cnJlbnQiLCJuZXh0IiwiZHVyYXRpb24iLCJmaWxsRnJhbWVJZHgiLCJmaWxsRnJhbWUiLCJzcGxpY2UiLCJhdWRpb1NhbXBsZXMiLCJzaWxlbnRGcmFtZSIsIl9maXJzdFNhbXBsZSIsInZpZGVvRmlyc3RQdHMiLCJzaWxlbnRTYW1wbGVDb3VudCIsInNpbGVudFNhbXBsZSIsImRhdGFzaXplIiwiZmlsdGVyZWQiLCJyZWZTYW1wbGVEdXJhdGlvbkZpeGVkIiwic2lsZW50RnJhbWVDb3VudCIsInNvcnRBdWRpb1NhbXBsZXMiLCJjaGFuZ2VJZHgiLCJwcmV2RHRzIiwiZ2V0U3RyZWFtQ2hhbmdlU3RhcnQiLCJjdXJEdHMiLCJpc0NvbnRpbnVlIiwib3B0aW9ucyIsImZpcnN0UGFydFNhbXBsZXMiLCJzZWNvbmRQYXJ0U2FtcGxlcyIsImNoYW5nZVNhbXBsZSIsImZpcnN0UGFydER1cmF0aW9uIiwiZmluZEZpcnN0VmlkZW9TYW1wbGUiLCJmaW5kRmlyc3RBdWRpb1NhbXBsZSIsImlzVmlkZW8iLCJhbGxTYW1wbGVzQ291bnQiLCJmaWxsZWRTYW1wbGVzQ291bnQiLCJkdXJhdGlvbkF2ZyIsInJlbW92ZUludmFsaWRTYW1wbGVzIiwiZmlsdGVyIiwic2FtcGxlIiwiZHRzQmFzZSIsIkluZmluaXR5Iiwic29ydCIsImEiLCJiIiwic29ydGVkIiwiaXNLZXlmcmFtZSIsIm5leHREdHMiLCJjb25kMSIsImNvbmQyIiwiZGlzY29udGludWUiLCJ0cmFja3MiLCJfY29udGV4dCIsImdldEluc3RhbmNlIiwicmVtdXhlciIsIl9kdHNCYXNlIiwiR29sb21iIiwidWludDhhcnJheSIsIl9idWZmZXIiLCJfYnVmZmVySW5kZXgiLCJfdG90YWxCeXRlcyIsIl90b3RhbEJpdHMiLCJfY3VycmVudFdvcmQiLCJfY3VycmVudFdvcmRCaXRzTGVmdCIsIl9maWxsQ3VycmVudFdvcmQiLCJidWZmZXJCeXRlc0xlZnQiLCJieXRlc1JlYWQiLCJtaW4iLCJ3b3JkIiwic3ViYXJyYXkiLCJEYXRhVmlldyIsImJ1ZmZlciIsImdldFVpbnQzMiIsInJlYWRCaXRzIiwiYml0cyIsInZhbHUiLCJyZWFkQm9vbCIsInJlYWRCeXRlIiwiX3NraXBMZWFkaW5nWmVybyIsInplcm9Db3VudCIsInJlYWRVRUciLCJsZWFkaW5nWmVyb3MiLCJyZWFkU0VHIiwiZ2V0TmFsdW5pdHMiLCJidWYiLCJkYXRhdmlldyIsImdldEludDMyIiwiZ2V0SW50MTYiLCJnZXRJbnQ4IiwiZ2V0QW5uZXhiTmFscyIsImdldEF2Y2NOYWxzIiwibmFscyIsImdldEhlYWRlclBvc2l0aW9uQW5uZXhCIiwicG9zIiwiZW5kIiwiaGVhZGVyIiwiaGVhZGVyTGVuZ3RoIiwic2tpcCIsImJvZHkiLCJ1bml0IiwiYW5hbHlzZU5hbCIsIm5kciIsImlkciIsInNwcyIsInBhcnNlU1BTIiwicHBzIiwiZ2V0QXZjYyIsIlNQU1BhcnNlciIsIl9lYnNwMnJic3AiLCJzcmMiLCJzcmNMZW5ndGgiLCJkc3QiLCJkc3RJZHgiLCJyYnNwIiwiZ2IiLCJwcm9maWxlSWRjIiwibGV2ZWxJZGMiLCJwcm9maWxlX3N0cmluZyIsImdldFByb2ZpbGVTdHJpbmciLCJsZXZlbF9zdHJpbmciLCJnZXRMZXZlbFN0cmluZyIsImNocm9tYV9mb3JtYXRfaWRjIiwiY2hyb21hX2Zvcm1hdCIsImNocm9tYV9mb3JtYXRfdGFibGUiLCJiaXRfZGVwdGgiLCJzY2FsaW5nX2xpc3RfY291bnQiLCJfc2tpcFNjYWxpbmdMaXN0IiwicGljX29yZGVyX2NudF90eXBlIiwibnVtX3JlZl9mcmFtZXNfaW5fcGljX29yZGVyX2NudF9jeWNsZSIsInBpY193aWR0aF9pbl9tYnNfbWludXMxIiwicGljX2hlaWdodF9pbl9tYXBfdW5pdHNfbWludXMxIiwiZnJhbWVfbWJzX29ubHlfZmxhZyIsImZyYW1lX2Nyb3BfbGVmdF9vZmZzZXQiLCJmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCIsImZyYW1lX2Nyb3BfdG9wX29mZnNldCIsImZyYW1lX2Nyb3BfYm90dG9tX29mZnNldCIsImZyYW1lX2Nyb3BwaW5nX2ZsYWciLCJwYXJfd2lkdGgiLCJwYXJfaGVpZ2h0IiwiZnBzIiwiZnBzX2ZpeGVkIiwiZnBzX251bSIsImZwc19kZW4iLCJ2dWlfcGFyYW1ldGVyc19wcmVzZW50X2ZsYWciLCJhc3BlY3RfcmF0aW9faWRjIiwicGFyX3dfdGFibGUiLCJwYXJfaF90YWJsZSIsIm51bV91bml0c19pbl90aWNrIiwidGltZV9zY2FsZSIsInBhclNjYWxlIiwiY3JvcF91bml0X3giLCJjcm9wX3VuaXRfeSIsInN1Yl93YyIsInN1Yl9oYyIsImNvZGVjX3dpZHRoIiwiY29kZWNfaGVpZ2h0IiwicHJlc2VudF93aWR0aCIsImNlaWwiLCJjaHJvbWFfZm9ybWF0X3N0cmluZyIsImdldENocm9tYUZvcm1hdFN0cmluZyIsImZyYW1lX3JhdGUiLCJwYXJfcmF0aW8iLCJ3aWR0aCIsImhlaWdodCIsImNvZGVjX3NpemUiLCJwcmVzZW50X3NpemUiLCJsYXN0X3NjYWxlIiwibmV4dF9zY2FsZSIsImRlbHRhX3NjYWxlIiwidG9GaXhlZCIsImNocm9tYSIsInRvVmlkZW9NZXRhIiwic3BzQ29uZmlnIiwiY29kZWNXaWR0aCIsImNvZGVjSGVpZ2h0IiwicHJlc2VudFdpZHRoIiwicHJlc2VudEhlaWdodCIsInByb2ZpbGUiLCJsZXZlbCIsImJpdERlcHRoIiwiY2hyb21hRm9ybWF0IiwicGFyUmF0aW8iLCJmcHNEZW4iLCJmcHNOdW0iLCJ0aW1lc2NhbGUiLCJNM1U4UGFyc2VyIiwiVHNEZW11eGVyIiwiUGxheWxpc3QiLCJGbHZEZW11eGVyIiwiREFUQV9UWVBFUyIsIk5VTUJFUiIsIkJPT0xFQU4iLCJTVFJJTkciLCJPQkpFQ1QiLCJNSVhfQVJSQVkiLCJPQkpFQ1RfRU5EIiwiU1RSSUNUX0FSUkFZIiwiREFURSIsIkxPTkVfU1RSSU5HIiwiQU1GUGFyc2VyIiwicmVhZE9mZnNldCIsInJlc29sdmUiLCJtZXRhRGF0YSIsInBhcnNlVmFsdWUiLCJib2R5U2l6ZSIsInJlc2V0U3RhdHVzIiwicGFyc2VTdHJpbmciLCJkdiIsInN0ckxlbiIsImdldFVpbnQxNiIsImlzTGUiLCJzdHIiLCJVVEY4IiwiZGVjb2RlIiwicGFyc2VEYXRlIiwidHMiLCJnZXRGbG9hdDY0IiwidGltZU9mZnNldCIsIkRhdGUiLCJwYXJzZU9iamVjdCIsImlzT2JqRW5kIiwicGFyc2VMb25nU3RyaW5nIiwiQXJyYXlCdWZmZXIiLCJkYXRhVmlldyIsImdldFVpbnQ4IiwiYm9vbE51bSIsIm9iakVuZFNpemUiLCJhbWZPYmoiLCJpc09iamVjdEVuZCIsIm1hcmsiLCJhbWZWYXIiLCJtYXJrZXIiLCJhcnJMZW5ndGgiLCJzY3JpcHQiLCJkYXRlIiwibG9uZ1N0ciIsIl9maXJzdEZyYWdtZW50TG9hZGVkIiwiX3RyYWNrTnVtIiwiX2hhc1NjcmlwdCIsIkRFTVVYX1NUQVJUIiwiZG9QYXJzZUZsdiIsImlzRmx2RmlsZSIsImdldFBsYXlUeXBlIiwic3RyZWFtRmxhZyIsInJlc3VsdCIsImhhc1ZpZGVvIiwiaGFzQXVkaW8iLCJsb2FkZXJCdWZmZXIiLCJwYXJzZUZsdkhlYWRlciIsImNodW5rIiwibG9vcE1heCIsIl9wYXJzZUZsdlRhZyIsIkRFTVVYX0NPTVBMRVRFIiwiREVNVVhfRVJST1IiLCJwbGF5VHlwZSIsImluaXRWaWRlb1RyYWNrIiwiaW5pdEF1ZGlvVHJhY2siLCJWaWRlb1RyYWNrTWV0YSIsIkF1ZGlvVHJhY2tNZXRhIiwiX3BhcnNlRmx2VGFnSGVhZGVyIiwiX3Byb2Nlc3NDaHVuayIsInRhZ1R5cGUiLCJ0aW1lc3RhbXAiLCJ0aW1lc3RhbXBFeHQiLCJfcGFyc2VTY3JpcHREYXRhIiwiX3BhcnNlQUFDRGF0YSIsIl9wYXJzZUhldmNEYXRhIiwiaW5mbyIsIm9uTWV0YURhdGEiLCJtZWRpYUluZm8iLCJoc2FBdWRpbyIsInZhbGlkYXRlIiwiX2RhdGFzaXplVmFsaWRhdG9yIiwiTUVESUFfSU5GTyIsImhhc1NwZWNpZmljQ29uZmlnIiwiYXVkaW9zYW1wbGVyYXRlIiwic2FtcGxlUmF0ZSIsImF1ZGlvY2hhbm5lbHMiLCJzYW1wbGVSYXRlSW5kZXgiLCJmcmFtZXJhdGUiLCJfYWFjU2VxdWVuY2VIZWFkZXJQYXJzZXIiLCJvYmplY3RUeXBlIiwib3JpZ2luT2JqZWN0VHlwZSIsIl9zd2l0Y2hBdWRpb1NhbXBsZVJhdGUiLCJmcmFtZUxlbmd0aCIsImRlcGVuZHNPbkNvcmVDb2RlciIsImV4dGVuc2lvbkZsYWdJbmRleCIsInVzZXJBZ2VudCIsIndpbmRvdyIsIm5hdmlnYXRvciIsInRvTG93ZXJDYXNlIiwiZXh0ZW5zaW9uU2FtcGxpbmdJbmRleCIsImNvbmZpZyIsInNhbXBsaW5nSW5kZXgiLCJpbmRleE9mIiwic25pZmZlciIsImJyb3dzZXIiLCJ0cmFjayIsImZvcm1hdCIsIl9oYXNBdWRpb1NlcXVlbmNlIiwiX3N3aXRjaEF1ZGlvU2FtcGxpbmdGcmVxdWVuY3kiLCJmcmFtZUxlbnRoIiwiYXVkaW9TYW1wbGVSYXRlIiwiYXVkaW9TYW1wbGVSYXRlSW5kZXgiLCJhYWNIZWFkZXIiLCJhdWRpb01lZGlhIiwiTUVUQURBVEFfUEFSU0VEIiwiQVVESU9fTUVUQURBVEFfQ0hBTkdFIiwiX21ldGFDaGFuZ2UiLCJmcmFtZVR5cGUiLCJjb2RlY0lEIiwiYXZjUGFja2V0VHlwZSIsInBhcnNlSW50IiwibmFsdSIsInIiLCJzaXplcyIsImF2Y2NsZW5ndGgiLCJfYXZjU2VxdWVuY2VIZWFkZXJQYXJzZXIiLCJfaGFzVmlkZW9TZXF1ZW5jZSIsIlZJREVPX01FVEFEQVRBX0NIQU5HRSIsImNvbmZpZ3VyYXRpb25WZXJzaW9uIiwiYXZjUHJvZmlsZUluZGljYXRpb24iLCJwcm9maWxlQ29tcGF0aWJpbGl0eSIsImF2Y0xldmVsSW5kaWNhdGlvbiIsIm5hbFVuaXRMZW5ndGgiLCJudW1PZlNwcyIsImoiLCJjb2RlY1N0cmluZyIsImgiLCJ0b1N0cmluZyIsIm51bU9mUHBzIiwidmlkZW9NZWRpYSIsImF2Y2MiLCJzYW1wbGluZ0ZyZXF1ZW5jeUluZGV4Iiwic2FtcGxpbmdGcmVxdWVuY3lMaXN0IiwiX3N3aXRjaEF1ZGlvQ2hhbm5lbCIsInNhbXBsZVRyYWNrTnVtSW5kZXgiLCJzYW1wbGVUcmFja051bUxpc3QiLCJkYXRhc2l6ZUNvbmZpcm0iLCJsb2dnZXIiLCJwYXJzZSIsInRleHQiLCJiYXNldXJsIiwic3BsaXQiLCJyZWZzIiwicmVmIiwibWF0Y2giLCJyZWZtIiwicmVmZCIsInZlcnNpb24iLCJzZXF1ZW5jZSIsInRhcmdldGR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInBhcnNlRnJhZyIsInBhcnNlRGVjcnlwdCIsImZyYWdzIiwiZnJlZyIsIm5leHRsaW5lIiwiY2hhckF0IiwidXJsIiwicGFyc2VVUkwiLCJ1cmxzIiwiZW5jcnlwdCIsImNtZCIsIm1ldGhvZCIsInVyaSIsIml2IiwiaXZiIiwiaW0iLCJzdWJzdHIiLCJTdHJlYW1UeXBlIiwiY29uZmlncyIsImRlbXV4aW5nIiwicGF0IiwicG10IiwiX2hhc1ZpZGVvTWV0YSIsIl9oYXNBdWRpb01ldGEiLCJkZW11eCIsImZyYWciLCJpbnB1dEJ1ZmZlciIsInBlc2VzIiwidHNTdHJlYW0iLCJTdHJlYW0iLCJyZWFkIiwicGVzIiwicGlkIiwiRVMiLCJwYXlsb2FkIiwic3RyZWFtIiwiQXVkaW9PcHRpb25zIiwiVmlkZW9PcHRpb25zIiwiZXBlc2VzIiwiTWVyZ2UiLCJwdXNoQXVkaW9TYW1wbGUiLCJwdXNoVmlkZW9TYW1wbGUiLCJfdHJhY2tzIiwiZnJlcXVlbmNlIiwiY2hhbm5lbCIsImF1ZGlvT2JqZWN0VHlwZSIsImF1ZGlvQ29uZmlnIiwiZnJlcXVlbmN5SW5kZXgiLCJtZXRhRXF1YWwiLCJjb21wYWlyZU1ldGEiLCJBdWRpb1RyYWNrU2FtcGxlIiwic2FtcGxlTGVuZ3RoIiwibmFsIiwic2FyUmF0aW8iLCJzYXJfcmF0aW8iLCJWaWRlb1RyYWNrU2FtcGxlIiwiZGVzdG9yeSIsImNvbXBhaXJlQXJyYXkiLCJhbCIsImJsIiwiaWdub3JlRHVyYXRpb24iLCJrIiwiaXRlbWEiLCJpdGVtYiIsImJ1ZmZlcnMiLCJyZWFkSGVhZGVyIiwicmVhZFBheWxvYWQiLCJwYWNrZXQiLCJ1bmtub3duUElEcyIsIlBFUyIsIlBBVCIsIkNBVCIsIlRTRFQiLCJzb21lIiwiaXRlbSIsIlBNVCIsInN0cyIsIk1lZGlhIiwic3RyZWFtVHlwZSIsInN5bmMiLCJyZWFkVWludDgiLCJyZWFkVWludDE2IiwicHJpb3JpdHkiLCJzY3JhbWJsaW5nIiwiYWRhcHRhdGlvbiIsImNvbnRpbnVpdHkiLCJ0YWJlbElEIiwiemVybyIsInNlY3Rpb25MZW5ndGgiLCJzdHJlYW1JRCIsInNlY3Rpb25OdW1iZXIiLCJsYXN0U2VjdGlvbk51bWJlciIsIk4iLCJwcm9ncmFtTnVtYmVyIiwicHJvZ3JhbSIsInRhYmxlSUQiLCJvcmRlciIsImxhc3RPcmRlciIsIlBDUl9QSUQiLCJwcm9ncmFtTGVuZ3RoIiwiZXMiLCJtYXAiLCJhZGFwdGF0aW9uTGVuZ3RoIiwiYWNjZXNzIiwiUENSIiwiT1BDUiIsInNwbGljZVBvaW50IiwidHJhbnNwb3J0UHJpdmF0ZSIsImFkYXB0YXRpb25GaWVsZCIsIl9zdGFydCIsInByb2dyYW1DbG9ja0Jhc2UiLCJyZWFkVWludDMyIiwicHJvZ3JhbUNsb2NrRXh0ZW5zaW9uIiwib3JpZ2luUHJvZ3JhbUNsb2NrQmFzZSIsIm9yaWdpblByb2dyYW1DbG9ja0V4dGVuc2lvbiIsInNwbGljZUNvdW50ZG93biIsInRyYW5zcG9ydFByaXZhdGVEYXRhIiwibHR3IiwicGllY2V3aXNlIiwic2VhbWxlc3MiLCJsdHdWYWxpZCIsImx0d09mZnNldCIsInJlYWRVaW50MjQiLCJwaWVjZXdpc2VSYXRlIiwicmVhZEludDgiLCJzcGxpY2VUeXBlIiwiZHRzTmV4dEFVMSIsIm1hcmtlcjEiLCJkdHNOZXh0QVUyIiwibWFya2VyMiIsImR0c05leHRBVTMiLCJsYXN0U3R1ZmZpbmciLCJwYWNrZXRMZW5ndGgiLCJwdHNEVFNGbGFnIiwiZXNjckZsYWciLCJlc1JhdGVGbGFnIiwiZHNtRmxhZyIsImFkZGl0aW9uYWxGbGFnIiwiY3JjRmxhZyIsImV4dGVuc2lvbkZsYWciLCJwZXNIZWFkZXJMZW5ndGgiLCJOMSIsImVzY3IiLCJleCIsImVzUmF0ZSIsImFkZGl0aW9uYWxDb3B5SW5mbyIsInBlc0NSQyIsImJhY2siLCJmcSIsImxheWVyIiwiYWJzZW50IiwiZ2V0QXVkaW9Db25maWciLCJzZWN0aW9uSW5kaWNhdG9yIiwiY3VycmVudE5leHRJbmRpY2F0b3IiLCJjcmMzMiIsImV4dGVuc2lvblNhbXBsZUluZGV4IiwidGVzdCIsImlucHV0YnVmZmVyIiwiX2Jhc2VVUkwiLCJfbGlzdCIsIl90cyIsImZyYWdMZW5ndGgiLCJfbGFzdGdldCIsIl9hdWRvY2xlYXIiLCJhdXRvY2xlYXIiLCJiYXNlVVJMIiwiZG93bmxvYWRlZCIsImRvd25sb2FkaW5nIiwiZGVsZXRlRnJhZyIsInRpbWUiLCJwdXNoTTNVOCIsImRlbGV0ZXByZSIsIm5ld2ZyYWdsaXN0IiwidHNsaXN0IiwiZ2V0VHNMaXN0IiwidHNuYW1lIiwiaXNsb2FkZWQiLCJsb2FkaW5nIiwiZ2V0VHNCeU5hbWUiLCJnZXRUcyIsInRpbWVsaXN0IiwiY2xlYXJEb3dubG9hZGVkIiwibCIsIkZldGNoTG9hZGVyIiwiTE9BREVSX0VWRU5UUyIsIlJFQURfU1RSRUFNIiwiUkVBRF9URVhUIiwiUkVBRF9KU09OIiwiUkVBRF9CVUZGRVIiLCJzdGF0dXMiLCJfcmVhZGVyIiwiX2NhbmNlbGVkIiwiX2Rlc3Ryb3llZCIsInJlYWR0eXBlIiwiX2xvYWRlclRhc2tObyIsIkxBREVSX1NUQVJUIiwibG9hZCIsIm9wdHMiLCJfdGhpcyIsInBhcmFtcyIsImdldFBhcmFtcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJfb25GZXRjaFJlc3BvbnNlIiwiTE9BREVSX0VSUk9SIiwiY2F0Y2giLCJ0YXNrbm8iLCJqc29uIiwiTE9BREVSX0NPTVBMRVRFIiwiYXJyYXlCdWZmZXIiLCJfb25SZWFkZXIiLCJnZXRSZWFkZXIiLCJyZWFkZXIiLCJjYW5jZWwiLCJlIiwidmFsIiwiZG9uZSIsIkxPQURFUl9EQVRBTE9BREVEIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJtb2RlIiwiY2FjaGUiLCJjb25maWdIZWFkZXJzIiwiaGFzT3duUHJvcGVydHkiLCJhcHBlbmQiLCJvcHRIZWFkZXJzIiwiY29ycyIsIndpdGhDcmVkZW50aWFscyIsImNyZWRlbnRpYWxzIiwiTXA0UmVtdXhlciIsIkZtcDQiLCJCdWZmZXIiLCJ3cml0ZVVpbnQzMiIsImluaXRCb3giLCJjb250ZW50Iiwid3JpdGUiLCJleHRlbnNpb24iLCJmbGFnIiwiZnR5cCIsIm1vb3YiLCJtdmhkIiwidHJhayIsInZpZGVvVHJhayIsImF1ZGlvVHJhayIsIm12ZXgiLCJmb3JFYWNoIiwiYnl0ZXMiLCJ0a2hkIiwibWRpYSIsInNhbXBsZXJhdGUiLCJlZHRzIiwibWVkaWFUaW1lIiwibWRoZCIsImhkbHIiLCJtaW5mIiwidm1oZCIsInNtaGQiLCJkaW5mIiwic3RibCIsImRyZWYiLCJzdHNkIiwic3R0cyIsInN0c2MiLCJzdHN6Iiwic3RjbyIsIm1wNGEiLCJhdmMxIiwiZXNkcyIsImNvbmZpZ2xlbiIsImhTcGFjaW5nIiwidlNwYWNpbmciLCJidHJ0IiwicGFzcCIsInRyYWNrSUQiLCJtZWhkIiwidHJleCIsIm1vb2YiLCJtZmhkIiwidHJhZiIsInRmaGQiLCJ0ZmR0Iiwic2R0cCIsInRydW4iLCJzZHRwTGVuZ3RoIiwic2FtcGxlQ291bnQiLCJmbGFncyIsImlzTGVhZGluZyIsImRlcGVuZHNPbiIsImlzRGVwZW5kZWRPbiIsImhhc1JlZHVuZGFuY3kiLCJpc05vblN5bmMiLCJudW0iLCJtZGF0IiwibWRhdEJveCIsImNoYXJDb2RlQXQiLCJfaXNEdHNCYXNlSW5pdGVkIiwiaXNGaXJzdFZpZGVvIiwiaXNGaXJzdEF1ZGlvIiwidmlkZW9BbGxEdXJhdGlvbiIsImF1ZGlvQWxsRHVyYXRpb24iLCJyZW11eCIsIlJFTVVYX01FVEFEQVRBIiwib25NZXRhRGF0YVJlYWR5IiwiREVURUNUX0NIQU5HRV9TVFJFQU0iLCJyZXNldER0c0Jhc2UiLCJfZHRzQmFzZUluaXRlZCIsImNhbGNEdHNCYXNlIiwiX3JlbXV4VmlkZW8iLCJfcmVtdXhBdWRpbyIsInNlZWsiLCJwcmVzb3VyY2VidWZmZXIiLCJyZW11eEluaXRTZWdtZW50IiwiSU5JVF9TRUdNRU5UIiwiaW5pdFNlZ21lbnQiLCJhdWRpb0Jhc2UiLCJ2aWRlb0Jhc2UiLCJtcDRTYW1wbGVzIiwiYXZjU2FtcGxlIiwibWRhdFNhbXBsZSIsInNhbXBsZUR1cmF0aW9uIiwidmlkZW9NZXRhIiwibW9vZk1kYXQiLCJ3cml0ZVRvU291cmNlIiwiTUVESUFfU0VHTUVOVCIsImxhc3RTYW1wbGUiLCJfdmlkZW9OZXh0RHRzIiwiaXNGaXJzdER0c0luaXRlZCIsImF1ZGlvTWV0YSIsIm1wNFNhbXBsZSIsImluaXRTaWxlbnRBdWRpbyIsIkNvbnRleHQiLCJXT1JLRVJfQ09NTUFORFMiLCJQYWdlVmlzaWJpbGl0eSIsIk1lZGlhSW5mbyIsIk1lZGlhU2FtcGxlIiwiTWVkaWFTZWdtZW50IiwiTWVkaWFTZWdtZW50TGlzdCIsIk1zZSIsIk1vYmlsZVZpZGVvIiwiQ3J5cHRvIiwiUmVzdWx0Q29uc3RydWN0b3IiLCJ0b3RhbExlbmd0aCIsIl9sZW4iLCJhcnJheXMiLCJfa2V5IiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiIsIl9kaWRJdGVyYXRvckVycm9yIiwiX2l0ZXJhdG9yRXJyb3IiLCJfaXRlcmF0b3IiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zdGVwIiwicmV0dXJuIiwiX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbjIiLCJfZGlkSXRlcmF0b3JFcnJvcjIiLCJfaXRlcmF0b3JFcnJvcjIiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2FyciIsIl9jb25jYXQiLCJfY29uY2F0MiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwid2VicGFja0Jvb3RzdHJhcEZ1bmMiLCJtb2R1bGVzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImMiLCJkIiwiZ2V0dGVyIiwibyIsImNvbmZpZ3VyYWJsZSIsImdldERlZmF1bHQiLCJnZXRNb2R1bGVFeHBvcnRzIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwib2UiLCJmIiwicyIsIkVOVFJZX01PRFVMRSIsIm1vZHVsZU5hbWVSZXFFeHAiLCJkZXBlbmRlbmN5UmVnRXhwIiwicXVvdGVSZWdFeHAiLCJyZXBsYWNlIiwiaXNOdW1lcmljIiwiZ2V0TW9kdWxlRGVwZW5kZW5jaWVzIiwicXVldWVOYW1lIiwicmV0dmFsIiwiZm5TdHJpbmciLCJ3cmFwcGVyU2lnbmF0dXJlIiwid2VicGFja1JlcXVpcmVOYW1lIiwicmUiLCJSZWdFeHAiLCJleGVjIiwiaGFzVmFsdWVzSW5RdWV1ZXMiLCJxdWV1ZXMiLCJyZWR1Y2UiLCJoYXNWYWx1ZXMiLCJnZXRSZXF1aXJlZE1vZHVsZXMiLCJtb2R1bGVzUXVldWUiLCJtYWluIiwicmVxdWlyZWRNb2R1bGVzIiwic2Vlbk1vZHVsZXMiLCJxdWV1ZSIsIm1vZHVsZVRvQ2hlY2siLCJuZXdNb2R1bGVzIiwibmV3TW9kdWxlc0tleXMiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiYWxsIiwiZW50cnlNb2R1bGUiLCJKU09OIiwic3RyaW5naWZ5Iiwiam9pbiIsImJsb2IiLCJCbG9iIiwiYmFyZSIsIlVSTCIsIndlYmtpdFVSTCIsIm1velVSTCIsIm1zVVJMIiwid29ya2VyVXJsIiwiY3JlYXRlT2JqZWN0VVJMIiwid29ya2VyIiwiV29ya2VyIiwib2JqZWN0VVJMIiwiUkVNVVhfRVJST1IiLCJNU0VfRVZFTlRTIiwiU09VUkNFX1VQREFURV9FTkQiLCJITFNfRVZFTlRTIiwiUkVUUllfVElNRV9FWENFRURFRCIsIkNSWVRPX0VWRU5UUyIsIlNUQVJUX0RFQ1JZUFQiLCJERUNSWVBURUQiLCJCUk9XU0VSX0VWRU5UUyIsIlZJU0lCSUxJVFlfQ0hBTkdFIiwiQUxMRVZFTlRTIiwiRmx2QWxsb3dlZEV2ZW50cyIsIkhsc0FsbG93ZWRFdmVudHMiLCJDT05URVhUX0NPTU9NQU5EUyIsIk9OIiwiT05DRSIsIk9GRiIsIkVNSVQiLCJERVNUUk9ZIiwiRElSRUNUX0VNSVRfRkxBRyIsImFsbG93ZWRFdmVudHMiLCJfZW1pdHRlciIsIl9pbnN0YW5jZU1hcCIsIl9jbHNNYXAiLCJfaW5pdGVkIiwiX2hvb2tzIiwidGFnIiwiaW5zdGFuY2UiLCJpbml0SW5zdGFuY2UiLCJuZXdJbnN0YW5jZSIsInJlZ2lzdHJ5IiwiY2xzIiwiY2hlY2tNZXNzYWdlTmFtZSIsIl9pc01lc3NhZ2VOYW1lVmFsaWQiLCJzZWxmIiwiZW5oYW5jZWQiLCJvbmNlTGlzdGVuZXJzIiwibWVzc2FnZU5hbWUiLCJjYWxsYmFjayIsImJlZm9yZUxpc3QiLCJlbWl0VG8iLCJyZW1vdmVMaXN0ZW5lcnMiLCJoYXNPd24iLCJjYWxsYmFja3MiLCJkZXN0cm95SW5zdGFuY2VzIiwib3V0cHV0QnVmZmVyIiwib3V0cHV0YnVmZmVyIiwiY3J5cHRvIiwibXNDcnlwdG8iLCJkZWNyaXB0IiwiYWVza2V5Iiwic2JrZXkiLCJzdWJ0bGUiLCJpbXBvcnRLZXkiLCJkZWNyaXB0RGF0YSIsImRlY3J5cHQiLCJyZXMiLCJFdmVudHMiLCJoaWRkZW4iLCJ2aXNpYmlsaXR5Q2hhbmdlIiwiZG9jdW1lbnQiLCJtc0hpZGRlbiIsIndlYmtpdEhpZGRlbiIsIm9uU2hvdyIsIm9uSGlkZGVuIiwiaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGUiLCJzZXRJbnQxNiIsIkludDE2QXJyYXkiLCJkZXZpY2UiLCJvcyIsImlzUGMiLCJpc1RhYmxldCIsInVhIiwicmVnIiwiaWUiLCJmaXJmb3giLCJjaHJvbWUiLCJvcGVyYSIsInNhZmFyaSIsImlzV2luZG93c1Bob25lIiwiaXNTeW1iaWFuIiwiaXNBbmRyb2lkIiwiaXNGaXJlRm94IiwiaXNQaG9uZSIsIm91dCIsImlucHV0IiwiZnJvbUNoYXJDb2RlIiwiX2NoZWNrQ29udGludWF0aW9uIiwidWNzNCIsImNoZWNrTGVuZ3RoIiwiQXVkaW9DdHgiLCJBdWRpb0NvbnRleHQiLCJ3ZWJraXRBdWRpb0NvbnRleHQiLCJnYWluTm9kZSIsImNyZWF0ZUdhaW4iLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwcmVsb2FkVGltZSIsIl9jdXJyZW50QnVmZmVyIiwiX25leHRCdWZmZXIiLCJfbGFzdHB0cyIsIl9wcmVEZWNvZGUiLCJfY3VycmVudFRpbWUiLCJfZGVjb2RpbmciLCJfdm9sdW1lIiwidm9sdW1lIiwiX3BsYXllZCIsImN1cnJlbnRUaW1lIiwiZGVjb2RlQXVkaW8iLCJzZXRBdWRpb0RhdGEiLCJkZWNvZGVBQUMiLCJzYW1wbGVEYXRhIiwiZ2V0QUFDRGF0YSIsImNvbWJpbGVEYXRhIiwiZGVjb2RlQXVkaW9EYXRhIiwiYXVkaW9Tb3VyY2UiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJvbmVuZGVkIiwib25Tb3VyY2VFbmRlZCIsImdldFRpbWVCdWZmZXIiLCJwbGF5IiwicGF1c2UiLCJhdWRpb0N0eCIsInN1c3BlbmQiLCJjbG9zZSIsInNldEF1ZGlvTWV0YURhdGEiLCJtdXRlZCIsImdhaW4iLCJhZHRzIiwiZ2V0QWR0cyIsImFhY2ZyYW1lbGVuZ3RoIiwiQVZSZWNvbmNpbGVyIiwicHJvcHMiLCJhQ3R4IiwidkN0eCIsInRpbWVvdXRJZCIsImRvUmVjb25jaWxlIiwidkN1clRpbWUiLCJhQ3VyVGltZSIsInNldFRpbWVvdXQiLCJIVE1MRWxlbWVudCIsIl9jYW52YXMiLCJjcmVhdGVFbGVtZW50IiwiaGFuZGxlQXVkaW9Tb3VyY2VFbmQiLCJwbGF5ZWQiLCJfcGF1c2VkIiwiVmlkZW9DdHgiLCJjYW52YXMiLCJ0aWNrZXIiLCJyZWNvbmNpbGVyIiwib25jYW5wbGF5IiwiYXBwZW5kQ2hpbGQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJub3ciLCJfb25UaW1lciIsImNsZWFuQnVmZmVyIiwiX2NsZWFuQnVmZmVyIiwic3RvcCIsIm9uRGVtdXhDb21wbGV0ZSIsImRlY29kZVZpZGVvIiwic2V0QXVkaW9NZXRhIiwic2V0VmlkZW9NZXRhIiwic2V0VmlkZW9NZXRhRGF0YSIsInZpZGVvV2lkdGgiLCJ2aWRlb0hlaWdodCIsImdldEF0dHJpYnV0ZSIsInJlYWR5U3RhdGUiLCJzZWVraW5nIiwicGF1c2VkIiwicGxheWJhY2tSYXRlIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZW5kZWQiLCJhdXRvcGxheSIsInZvbCIsImJ1ZmZlcmVkIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJTb3VyY2VCdWZmZXIiLCJjdXJyZW50R29wIiwiX2xhc3RHZXQiLCJmcmFtZSIsIm5leHRHb3AiLCJfZ2V0TmV4dCIsImdvcCIsInJlbW92ZSIsIlRpY2tlciIsImludGVydmFsIiwib25UaWNrIiwic2V0SW50ZXJ2YWwiLCJSYWZUaWNrZXIiLCJwcmV2IiwidGltZXJJZCIsIl9zdWJUaW1lcklkIiwiX3RpY2tGdW5jIiwiZ2V0VGlja0Z1bmMiLCJ0aWNrIiwibmV4dFRpY2siLCJjYW5jZWxGdW5jIiwiZ2V0Q2FuY2VsRnVuYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwid2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpc1N1cHBvcnRlZCIsIlRpbWVvdXRUaWNrZXIiLCJjbGVhckludGVydmFsIiwiZ2V0VGlja2VyIiwiVmlkZW9DYW52YXMiLCJvbkZpcnN0RnJhbWUiLCJyZWFkeVN0YXR1cyIsImxhc3RQbGF5ZWQiLCJfZGVjb2RlckluaXRlZCIsIl9hdmNjcHVzaGVkIiwiX2RlY29kZWRGcmFtZXMiLCJfbGFzdFNhbXBsZUR0cyIsIl9iYXNlRHRzIiwiX2xhc3RSZW5kZXJUaW1lIiwicGxheUZpbmlzaCIsImluaXRXYXNtV29ya2VyIiwid2FzbXdvcmtlciIsInBvc3RNZXNzYWdlIiwibXNnIiwiX29uRGVjb2RlZCIsInl1dkNhbnZhcyIsIllVVkNhbnZhcyIsIl9wcmVsb2FkIiwiX2FuYWx5c2VOYWwiLCJQcm9taXNlIiwiZnJhbWVUaW1lcyIsImZyYW1lVGltZSIsInJlbmRlciIsInlMaW5lc2l6ZSIsInV2TGluZXNpemUiLCJyYW5nZXMiLCJjdXJyZW50UmFuZ2UiLCJUaW1lUmFuZ2VzIiwiTUFYX1NUUkVBTV9CVUZGRVJfTEVOR1RIIiwiRGVjb2RlciIsImluaXRlZCIsImluZm9saXN0IiwicGFyX2Jyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCIsImJyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCIsInBhcl9icm9hZHdheU9uUGljdHVyZURlY29kZWQiLCJicm9hZHdheU9uUGljdHVyZURlY29kZWQiLCJ0b1U4QXJyYXkiLCJwdHIiLCJIRUFQVTgiLCJNb2R1bGUiLCJfYnJvYWR3YXlJbml0Iiwic3RyZWFtQnVmZmVyIiwiX2Jyb2Fkd2F5Q3JlYXRlU3RyZWFtIiwiaW5mb2lkIiwieVJvd2NvdW50IiwidXZSb3djb3VudCIsImRhdGV0ZW1wIiwiZ2V0VGltZSIsIl9icm9hZHdheVBsYXlTdHJlYW0iLCJkZWNvZGVyIiwib25Qb3N0UnVuIiwiaW1wb3J0U2NyaXB0cyIsImFkZE9uUG9zdFJ1biIsImxvZyIsInN0eWxlIiwiX2luaXRDb250ZXh0R0wiLCJjb250ZXh0R0wiLCJfaW5pdFByb2dyYW0iLCJfaW5pdEJ1ZmZlcnMiLCJfaW5pdFRleHR1cmVzIiwiZ2wiLCJ2YWxpZENvbnRleHROYW1lcyIsIm5hbWVJbmRleCIsImNvbnRleHROYW1lIiwiY29udGV4dE9wdGlvbnMiLCJnZXRDb250ZXh0IiwiZ2V0UGFyYW1ldGVyIiwidmVydGV4U2hhZGVyU2NyaXB0IiwiZnJhZ21lbnRTaGFkZXJTY3JpcHQiLCJZVVYyUkdCIiwidmVydGV4U2hhZGVyIiwiY3JlYXRlU2hhZGVyIiwiVkVSVEVYX1NIQURFUiIsInNoYWRlclNvdXJjZSIsImNvbXBpbGVTaGFkZXIiLCJnZXRTaGFkZXJQYXJhbWV0ZXIiLCJDT01QSUxFX1NUQVRVUyIsImdldFNoYWRlckluZm9Mb2ciLCJmcmFnbWVudFNoYWRlciIsIkZSQUdNRU5UX1NIQURFUiIsImNyZWF0ZVByb2dyYW0iLCJhdHRhY2hTaGFkZXIiLCJsaW5rUHJvZ3JhbSIsImdldFByb2dyYW1QYXJhbWV0ZXIiLCJMSU5LX1NUQVRVUyIsImdldFByb2dyYW1JbmZvTG9nIiwidXNlUHJvZ3JhbSIsIllVVjJSR0JSZWYiLCJnZXRVbmlmb3JtTG9jYXRpb24iLCJ1bmlmb3JtTWF0cml4NGZ2Iiwic2hhZGVyUHJvZ3JhbSIsInZlcnRleFBvc0J1ZmZlciIsImNyZWF0ZUJ1ZmZlciIsImJpbmRCdWZmZXIiLCJBUlJBWV9CVUZGRVIiLCJidWZmZXJEYXRhIiwiRmxvYXQzMkFycmF5IiwiU1RBVElDX0RSQVciLCJ2ZXJ0ZXhQb3NSZWYiLCJnZXRBdHRyaWJMb2NhdGlvbiIsImVuYWJsZVZlcnRleEF0dHJpYkFycmF5IiwidmVydGV4QXR0cmliUG9pbnRlciIsIkZMT0FUIiwidGV4dHVyZVBvc0J1ZmZlciIsInRleHR1cmVQb3NSZWYiLCJ1VGV4dHVyZVBvc0J1ZmZlciIsInVUZXh0dXJlUG9zUmVmIiwidlRleHR1cmVQb3NCdWZmZXIiLCJ2VGV4dHVyZVBvc1JlZiIsInlUZXh0dXJlUmVmIiwiX2luaXRUZXh0dXJlIiwieVNhbXBsZXJSZWYiLCJ1bmlmb3JtMWkiLCJ1VGV4dHVyZVJlZiIsInVTYW1wbGVyUmVmIiwidlRleHR1cmVSZWYiLCJ2U2FtcGxlclJlZiIsInRleHR1cmVSZWYiLCJjcmVhdGVUZXh0dXJlIiwiYmluZFRleHR1cmUiLCJURVhUVVJFXzJEIiwidGV4UGFyYW1ldGVyaSIsIlRFWFRVUkVfTUFHX0ZJTFRFUiIsIk5FQVJFU1QiLCJURVhUVVJFX01JTl9GSUxURVIiLCJURVhUVVJFX1dSQVBfUyIsIkNMQU1QX1RPX0VER0UiLCJURVhUVVJFX1dSQVBfVCIsIl9kcmF3UGljdHVyZUdMIiwieWxlbiIsInV2bGVuIiwicmVuZGVyRGF0YSIsInlEYXRhIiwidURhdGEiLCJ2RGF0YSIsIl9kcmF3UGljdHVyZUdMNDIwIiwieURhdGFQZXJSb3ciLCJ5Um93Q250IiwidURhdGFQZXJSb3ciLCJ1Um93Q250IiwidkRhdGFQZXJSb3ciLCJ2Um93Q250IiwicmF0aW93IiwicmF0aW9oIiwibGVmdCIsInRvcCIsInZpZXdwb3J0IiwidGV4dHVyZVBvc1ZhbHVlcyIsIkRZTkFNSUNfRFJBVyIsInVUZXh0dXJlUG9zVmFsdWVzIiwidlRleHR1cmVQb3NWYWx1ZXMiLCJhY3RpdmVUZXh0dXJlIiwiVEVYVFVSRTAiLCJ0ZXhJbWFnZTJEIiwiTFVNSU5BTkNFIiwiVU5TSUdORURfQllURSIsIlRFWFRVUkUxIiwiVEVYVFVSRTIiLCJkcmF3QXJyYXlzIiwiVFJJQU5HTEVfU1RSSVAiLCJfZHJhd1BpY3R1cmVSR0IiLCJpZHgiLCJhZGQiLCJyYW5nZSIsImlzT2JqZWN0RmlsbGVkIiwibWltZVR5cGUiLCJpc0NvbXBsZXRlIiwiaXNCYXNlSW5mb1JlYWR5IiwiaXNWaWRlb1JlYWR5IiwiaXNBdWRpb1JlYWR5IiwiX2RlZmF1bHQiLCJnZXREZWZhdWx0SW5mIiwiZW50cmllcyIsInYiLCJpc1JBUCIsIl90eXBlIiwiX2xhc3RBcHBlbmRMb2NhdGlvbiIsImlzRW1wdHkiLCJfc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUiLCJiZWdpbkR0cyIsImxhc3QiLCJtaWQiLCJsYm91bmQiLCJ1Ym91bmQiLCJfc2VhcmNoTmVhcmVzdFNlZ21lbnRBZnRlciIsInNlZ21lbnQiLCJsYXN0QXBwZW5kSWR4IiwiaW5zZXJ0SWR4Iiwib3JpZ2luU3RhcnREdHMiLCJnZXRMYXN0U2VnbWVudEJlZm9yZSIsImdldExhc3RTYW1wbGVCZWZvcmUiLCJnZXRMYXN0UkFQQmVmb3JlIiwic2VnbWVudElkeCIsInJhbmRvbUFjY2Vzc1BvaW50cyIsInN0YXJ0RHRzIiwiZW5kRHRzIiwic3RhcnRQdHMiLCJlbmRQdHMiLCJvcmlnaW5FbmREdHMiLCJhZGRSQVAiLCJNU0UiLCJjb250YWluZXIiLCJtZWRpYVNvdXJjZSIsInNvdXJjZUJ1ZmZlcnMiLCJvblNvdXJjZU9wZW4iLCJvblRpbWVVcGRhdGUiLCJvblVwZGF0ZUVuZCIsIm9uV2FpdGluZyIsIk1lZGlhU291cmNlIiwiYWRkU291cmNlQnVmZmVycyIsImRvQXBwZW5kIiwiZHVyIiwibWltZSIsInNvdXJjZUJ1ZmZlciIsImFkZFNvdXJjZUJ1ZmZlciIsInVwZGF0aW5nIiwiYXBwZW5kQnVmZmVyIiwiZW5kT2ZTdHJlYW0iLCJhY3RpdmVTb3VyY2VCdWZmZXJzIiwicmVtb3ZlQnVmZmVycyIsInRhc2tMaXN0IiwidGFzayIsImRvQ2xlYW5CdWZmZXIiLCJyZXRyeVRpbWUiLCJjbGVhbiIsImNsZWFyQnVmZmVyIiwicmVtb3ZlU291cmNlQnVmZmVyIiwicmV2b2tlT2JqZWN0VVJMIiwiYkVuZCIsInJlYWRBc0ludCIsInRlbXAiLCJwYWRTdGFydDRIZXgiLCJoZXhOdW0iLCJoZXhTdHIiLCJwYWRTdGFydCIsImxvb3AiLCJzaWduIiwicmVhZFVpbnQ2NCIsInJlYWRJbnQxNiIsInJlYWRJbnQzMiIsIlRhZyIsIkxvZ2dlciIsIkZsdkNvbnRyb2xsZXIiLCJwbGF5ZXIiLCJfcGxheWVyIiwiaW5pdFNlZ21lbnRBcnJpdmVkIiwiaW5pdExpc3RlbmVycyIsIl9oYW5kbGVMb2FkZXJEYXRhTG9hZGVkIiwiX2hhbmRsZU5ldHdvcmtFcnJvciIsIl9oYW5kbGVNZWRpYUluZm8iLCJfaGFuZGxlTWV0YWRhdGFQYXJzZWQiLCJfaGFuZGxlRGVtdXhDb21wbGV0ZSIsIl9oYW5kbGVEZW11eEVycm9yIiwiX3NldE1ldGFUb0F1ZGlvIiwiX3NldE1ldGFUb1ZpZGVvIiwiX2hhbmRsZUFwcGVuZEluaXRTZWdtZW50IiwiUGxheWVyIiwiRXJyb3JzIiwibG9hZERhdGEiLCJsb2FkZXIiLCJyZXNvbHZlVmlkZW9HT1AiLCJmaXJzdElmcmFtZUlkeCIsImxhc3RJZnJhbWVJZHgiLCJ0ZW1wU2FtcGxlcyIsInJlc3QiLCJmbHZBbGxvd2VkRXZlbnRzIiwiRmx2UGxheWVyIiwibWVkaWFUeXBlIiwiaW5pdEV2ZW50cyIsImluaXRGbHYiLCJmbHYiLCJpbml0Rmx2RXZlbnRzIiwidXRpbCIsImFkZENsYXNzIiwicm9vdCIsImZpbmREb20iLCJsaXZlIiwiY3JlYXRlRG9tIiwiY29udHJvbHMiLCJ0aW1lciIsImdldEJ1ZmZlcmVkUmFuZ2UiLCJGTFYiLCJfaGFzU3RhcnQiLCJfZGVzdHJveSIsImN1cnJlbnRTcmMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWIsSUFBSUEsSUFBSSxPQUFPQyxPQUFQLEtBQW1CLFFBQW5CLEdBQThCQSxPQUE5QixHQUF3QyxJQUFoRDtBQUNBLElBQUlDLGVBQWVGLEtBQUssT0FBT0EsRUFBRUcsS0FBVCxLQUFtQixVQUF4QixHQUNmSCxFQUFFRyxLQURhLEdBRWYsU0FBU0QsWUFBVCxDQUFzQkUsTUFBdEIsRUFBOEJDLFFBQTlCLEVBQXdDQyxJQUF4QyxFQUE4QztBQUM5QyxTQUFPQyxTQUFTQyxTQUFULENBQW1CTCxLQUFuQixDQUF5Qk0sSUFBekIsQ0FBOEJMLE1BQTlCLEVBQXNDQyxRQUF0QyxFQUFnREMsSUFBaEQsQ0FBUDtBQUNELENBSkg7O0FBTUEsSUFBSUksY0FBSjtBQUNBLElBQUlWLEtBQUssT0FBT0EsRUFBRVcsT0FBVCxLQUFxQixVQUE5QixFQUEwQztBQUN4Q0QsbUJBQWlCVixFQUFFVyxPQUFuQjtBQUNELENBRkQsTUFFTyxJQUFJQyxPQUFPQyxxQkFBWCxFQUFrQztBQUN2Q0gsbUJBQWlCLFNBQVNBLGNBQVQsQ0FBd0JOLE1BQXhCLEVBQWdDO0FBQy9DLFdBQU9RLE9BQU9FLG1CQUFQLENBQTJCVixNQUEzQixFQUNKVyxNQURJLENBQ0dILE9BQU9DLHFCQUFQLENBQTZCVCxNQUE3QixDQURILENBQVA7QUFFRCxHQUhEO0FBSUQsQ0FMTSxNQUtBO0FBQ0xNLG1CQUFpQixTQUFTQSxjQUFULENBQXdCTixNQUF4QixFQUFnQztBQUMvQyxXQUFPUSxPQUFPRSxtQkFBUCxDQUEyQlYsTUFBM0IsQ0FBUDtBQUNELEdBRkQ7QUFHRDs7QUFFRCxTQUFTWSxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBcUM7QUFDbkMsTUFBSUMsV0FBV0EsUUFBUUMsSUFBdkIsRUFBNkJELFFBQVFDLElBQVIsQ0FBYUYsT0FBYjtBQUM5Qjs7QUFFRCxJQUFJRyxjQUFjQyxPQUFPQyxLQUFQLElBQWdCLFNBQVNGLFdBQVQsQ0FBcUJHLEtBQXJCLEVBQTRCO0FBQzVELFNBQU9BLFVBQVVBLEtBQWpCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTQyxZQUFULEdBQXdCO0FBQ3RCQSxlQUFhQyxJQUFiLENBQWtCaEIsSUFBbEIsQ0FBdUIsSUFBdkI7QUFDRDtBQUNEaUIsT0FBT0MsT0FBUCxHQUFpQkgsWUFBakI7O0FBRUE7QUFDQUEsYUFBYUEsWUFBYixHQUE0QkEsWUFBNUI7O0FBRUFBLGFBQWFoQixTQUFiLENBQXVCb0IsT0FBdkIsR0FBaUNDLFNBQWpDO0FBQ0FMLGFBQWFoQixTQUFiLENBQXVCc0IsWUFBdkIsR0FBc0MsQ0FBdEM7QUFDQU4sYUFBYWhCLFNBQWIsQ0FBdUJ1QixhQUF2QixHQUF1Q0YsU0FBdkM7O0FBRUE7QUFDQTtBQUNBLElBQUlHLHNCQUFzQixFQUExQjs7QUFFQXBCLE9BQU9xQixjQUFQLENBQXNCVCxZQUF0QixFQUFvQyxxQkFBcEMsRUFBMkQ7QUFDekRVLGNBQVksSUFENkM7QUFFekRDLE9BQUssWUFBVztBQUNkLFdBQU9ILG1CQUFQO0FBQ0QsR0FKd0Q7QUFLekRJLE9BQUssVUFBU0MsR0FBVCxFQUFjO0FBQ2pCLFFBQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkJBLE1BQU0sQ0FBakMsSUFBc0NqQixZQUFZaUIsR0FBWixDQUExQyxFQUE0RDtBQUMxRCxZQUFNLElBQUlDLFVBQUosQ0FBZSxvR0FBb0dELEdBQXBHLEdBQTBHLEdBQXpILENBQU47QUFDRDtBQUNETCwwQkFBc0JLLEdBQXRCO0FBQ0Q7QUFWd0QsQ0FBM0Q7O0FBYUFiLGFBQWFDLElBQWIsR0FBb0IsWUFBVzs7QUFFN0IsTUFBSSxLQUFLRyxPQUFMLEtBQWlCQyxTQUFqQixJQUNBLEtBQUtELE9BQUwsS0FBaUJoQixPQUFPMkIsY0FBUCxDQUFzQixJQUF0QixFQUE0QlgsT0FEakQsRUFDMEQ7QUFDeEQsU0FBS0EsT0FBTCxHQUFlaEIsT0FBTzRCLE1BQVAsQ0FBYyxJQUFkLENBQWY7QUFDQSxTQUFLVixZQUFMLEdBQW9CLENBQXBCO0FBQ0Q7O0FBRUQsT0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLElBQXNCRixTQUEzQztBQUNELENBVEQ7O0FBV0E7QUFDQTtBQUNBTCxhQUFhaEIsU0FBYixDQUF1QmlDLGVBQXZCLEdBQXlDLFNBQVNBLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCO0FBQ25FLE1BQUksT0FBT0EsQ0FBUCxLQUFhLFFBQWIsSUFBeUJBLElBQUksQ0FBN0IsSUFBa0N0QixZQUFZc0IsQ0FBWixDQUF0QyxFQUFzRDtBQUNwRCxVQUFNLElBQUlKLFVBQUosQ0FBZSxrRkFBa0ZJLENBQWxGLEdBQXNGLEdBQXJHLENBQU47QUFDRDtBQUNELE9BQUtYLGFBQUwsR0FBcUJXLENBQXJCO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FORDs7QUFRQSxTQUFTQyxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBZ0M7QUFDOUIsTUFBSUEsS0FBS2IsYUFBTCxLQUF1QkYsU0FBM0IsRUFDRSxPQUFPTCxhQUFhUSxtQkFBcEI7QUFDRixTQUFPWSxLQUFLYixhQUFaO0FBQ0Q7O0FBRURQLGFBQWFoQixTQUFiLENBQXVCcUMsZUFBdkIsR0FBeUMsU0FBU0EsZUFBVCxHQUEyQjtBQUNsRSxTQUFPRixpQkFBaUIsSUFBakIsQ0FBUDtBQUNELENBRkQ7O0FBSUFuQixhQUFhaEIsU0FBYixDQUF1QnNDLElBQXZCLEdBQThCLFNBQVNBLElBQVQsQ0FBY0MsSUFBZCxFQUFvQjtBQUNoRCxNQUFJekMsT0FBTyxFQUFYO0FBQ0EsT0FBSyxJQUFJMEMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkMxQyxLQUFLNkMsSUFBTCxDQUFVRixVQUFVRCxDQUFWLENBQVY7QUFDM0MsTUFBSUksVUFBV0wsU0FBUyxPQUF4Qjs7QUFFQSxNQUFJTSxTQUFTLEtBQUt6QixPQUFsQjtBQUNBLE1BQUl5QixXQUFXeEIsU0FBZixFQUNFdUIsVUFBV0EsV0FBV0MsT0FBT0MsS0FBUCxLQUFpQnpCLFNBQXZDLENBREYsS0FFSyxJQUFJLENBQUN1QixPQUFMLEVBQ0gsT0FBTyxLQUFQOztBQUVGO0FBQ0EsTUFBSUEsT0FBSixFQUFhO0FBQ1gsUUFBSUcsRUFBSjtBQUNBLFFBQUlqRCxLQUFLNEMsTUFBTCxHQUFjLENBQWxCLEVBQ0VLLEtBQUtqRCxLQUFLLENBQUwsQ0FBTDtBQUNGLFFBQUlpRCxjQUFjQyxLQUFsQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0EsWUFBTUQsRUFBTixDQUh1QixDQUdiO0FBQ1g7QUFDRDtBQUNBLFFBQUlFLE1BQU0sSUFBSUQsS0FBSixDQUFVLHNCQUFzQkQsS0FBSyxPQUFPQSxHQUFHRyxPQUFWLEdBQW9CLEdBQXpCLEdBQStCLEVBQXJELENBQVYsQ0FBVjtBQUNBRCxRQUFJRSxPQUFKLEdBQWNKLEVBQWQ7QUFDQSxVQUFNRSxHQUFOLENBWlcsQ0FZQTtBQUNaOztBQUVELE1BQUlHLFVBQVVQLE9BQU9OLElBQVAsQ0FBZDs7QUFFQSxNQUFJYSxZQUFZL0IsU0FBaEIsRUFDRSxPQUFPLEtBQVA7O0FBRUYsTUFBSSxPQUFPK0IsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQzFELGlCQUFhMEQsT0FBYixFQUFzQixJQUF0QixFQUE0QnRELElBQTVCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBSXVELE1BQU1ELFFBQVFWLE1BQWxCO0FBQ0EsUUFBSVksWUFBWUMsV0FBV0gsT0FBWCxFQUFvQkMsR0FBcEIsQ0FBaEI7QUFDQSxTQUFLLElBQUliLElBQUksQ0FBYixFQUFnQkEsSUFBSWEsR0FBcEIsRUFBeUIsRUFBRWIsQ0FBM0IsRUFDRTlDLGFBQWE0RCxVQUFVZCxDQUFWLENBQWIsRUFBMkIsSUFBM0IsRUFBaUMxQyxJQUFqQztBQUNIOztBQUVELFNBQU8sSUFBUDtBQUNELENBMUNEOztBQTRDQSxTQUFTMEQsWUFBVCxDQUFzQjVELE1BQXRCLEVBQThCMkMsSUFBOUIsRUFBb0NrQixRQUFwQyxFQUE4Q0MsT0FBOUMsRUFBdUQ7QUFDckQsTUFBSUMsQ0FBSjtBQUNBLE1BQUlkLE1BQUo7QUFDQSxNQUFJZSxRQUFKOztBQUVBLE1BQUksT0FBT0gsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxVQUFNLElBQUlJLFNBQUosQ0FBYyxxRUFBcUUsT0FBT0osUUFBMUYsQ0FBTjtBQUNEOztBQUVEWixXQUFTakQsT0FBT3dCLE9BQWhCO0FBQ0EsTUFBSXlCLFdBQVd4QixTQUFmLEVBQTBCO0FBQ3hCd0IsYUFBU2pELE9BQU93QixPQUFQLEdBQWlCaEIsT0FBTzRCLE1BQVAsQ0FBYyxJQUFkLENBQTFCO0FBQ0FwQyxXQUFPMEIsWUFBUCxHQUFzQixDQUF0QjtBQUNELEdBSEQsTUFHTztBQUNMO0FBQ0E7QUFDQSxRQUFJdUIsT0FBT2lCLFdBQVAsS0FBdUJ6QyxTQUEzQixFQUFzQztBQUNwQ3pCLGFBQU8wQyxJQUFQLENBQVksYUFBWixFQUEyQkMsSUFBM0IsRUFDWWtCLFNBQVNBLFFBQVQsR0FBb0JBLFNBQVNBLFFBQTdCLEdBQXdDQSxRQURwRDs7QUFHQTtBQUNBO0FBQ0FaLGVBQVNqRCxPQUFPd0IsT0FBaEI7QUFDRDtBQUNEd0MsZUFBV2YsT0FBT04sSUFBUCxDQUFYO0FBQ0Q7O0FBRUQsTUFBSXFCLGFBQWF2QyxTQUFqQixFQUE0QjtBQUMxQjtBQUNBdUMsZUFBV2YsT0FBT04sSUFBUCxJQUFla0IsUUFBMUI7QUFDQSxNQUFFN0QsT0FBTzBCLFlBQVQ7QUFDRCxHQUpELE1BSU87QUFDTCxRQUFJLE9BQU9zQyxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DO0FBQ2xDO0FBQ0FBLGlCQUFXZixPQUFPTixJQUFQLElBQ1RtQixVQUFVLENBQUNELFFBQUQsRUFBV0csUUFBWCxDQUFWLEdBQWlDLENBQUNBLFFBQUQsRUFBV0gsUUFBWCxDQURuQztBQUVBO0FBQ0QsS0FMRCxNQUtPLElBQUlDLE9BQUosRUFBYTtBQUNsQkUsZUFBU0csT0FBVCxDQUFpQk4sUUFBakI7QUFDRCxLQUZNLE1BRUE7QUFDTEcsZUFBU2pCLElBQVQsQ0FBY2MsUUFBZDtBQUNEOztBQUVEO0FBQ0FFLFFBQUl4QixpQkFBaUJ2QyxNQUFqQixDQUFKO0FBQ0EsUUFBSStELElBQUksQ0FBSixJQUFTQyxTQUFTbEIsTUFBVCxHQUFrQmlCLENBQTNCLElBQWdDLENBQUNDLFNBQVNJLE1BQTlDLEVBQXNEO0FBQ3BESixlQUFTSSxNQUFULEdBQWtCLElBQWxCO0FBQ0E7QUFDQTtBQUNBLFVBQUlDLElBQUksSUFBSWpCLEtBQUosQ0FBVSxpREFDRVksU0FBU2xCLE1BRFgsR0FDb0IsR0FEcEIsR0FDMEJ3QixPQUFPM0IsSUFBUCxDQUQxQixHQUN5QyxhQUR6QyxHQUVFLDBDQUZGLEdBR0UsZ0JBSFosQ0FBUjtBQUlBMEIsUUFBRUUsSUFBRixHQUFTLDZCQUFUO0FBQ0FGLFFBQUVHLE9BQUYsR0FBWXhFLE1BQVo7QUFDQXFFLFFBQUUxQixJQUFGLEdBQVNBLElBQVQ7QUFDQTBCLFFBQUVJLEtBQUYsR0FBVVQsU0FBU2xCLE1BQW5CO0FBQ0FsQyx5QkFBbUJ5RCxDQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT3JFLE1BQVA7QUFDRDs7QUFFRG9CLGFBQWFoQixTQUFiLENBQXVCc0UsV0FBdkIsR0FBcUMsU0FBU0EsV0FBVCxDQUFxQi9CLElBQXJCLEVBQTJCa0IsUUFBM0IsRUFBcUM7QUFDeEUsU0FBT0QsYUFBYSxJQUFiLEVBQW1CakIsSUFBbkIsRUFBeUJrQixRQUF6QixFQUFtQyxLQUFuQyxDQUFQO0FBQ0QsQ0FGRDs7QUFJQXpDLGFBQWFoQixTQUFiLENBQXVCdUUsRUFBdkIsR0FBNEJ2RCxhQUFhaEIsU0FBYixDQUF1QnNFLFdBQW5EOztBQUVBdEQsYUFBYWhCLFNBQWIsQ0FBdUJ3RSxlQUF2QixHQUNJLFNBQVNBLGVBQVQsQ0FBeUJqQyxJQUF6QixFQUErQmtCLFFBQS9CLEVBQXlDO0FBQ3ZDLFNBQU9ELGFBQWEsSUFBYixFQUFtQmpCLElBQW5CLEVBQXlCa0IsUUFBekIsRUFBbUMsSUFBbkMsQ0FBUDtBQUNELENBSEw7O0FBS0EsU0FBU2dCLFdBQVQsR0FBdUI7QUFDckIsTUFBSTNFLE9BQU8sRUFBWDtBQUNBLE9BQUssSUFBSTBDLElBQUksQ0FBYixFQUFnQkEsSUFBSUMsVUFBVUMsTUFBOUIsRUFBc0NGLEdBQXRDLEVBQTJDMUMsS0FBSzZDLElBQUwsQ0FBVUYsVUFBVUQsQ0FBVixDQUFWO0FBQzNDLE1BQUksQ0FBQyxLQUFLa0MsS0FBVixFQUFpQjtBQUNmLFNBQUs5RSxNQUFMLENBQVkrRSxjQUFaLENBQTJCLEtBQUtwQyxJQUFoQyxFQUFzQyxLQUFLcUMsTUFBM0M7QUFDQSxTQUFLRixLQUFMLEdBQWEsSUFBYjtBQUNBaEYsaUJBQWEsS0FBSytELFFBQWxCLEVBQTRCLEtBQUs3RCxNQUFqQyxFQUF5Q0UsSUFBekM7QUFDRDtBQUNGOztBQUVELFNBQVMrRSxTQUFULENBQW1CakYsTUFBbkIsRUFBMkIyQyxJQUEzQixFQUFpQ2tCLFFBQWpDLEVBQTJDO0FBQ3pDLE1BQUlxQixRQUFRLEVBQUVKLE9BQU8sS0FBVCxFQUFnQkUsUUFBUXZELFNBQXhCLEVBQW1DekIsUUFBUUEsTUFBM0MsRUFBbUQyQyxNQUFNQSxJQUF6RCxFQUErRGtCLFVBQVVBLFFBQXpFLEVBQVo7QUFDQSxNQUFJc0IsVUFBVU4sWUFBWU8sSUFBWixDQUFpQkYsS0FBakIsQ0FBZDtBQUNBQyxVQUFRdEIsUUFBUixHQUFtQkEsUUFBbkI7QUFDQXFCLFFBQU1GLE1BQU4sR0FBZUcsT0FBZjtBQUNBLFNBQU9BLE9BQVA7QUFDRDs7QUFFRC9ELGFBQWFoQixTQUFiLENBQXVCaUYsSUFBdkIsR0FBOEIsU0FBU0EsSUFBVCxDQUFjMUMsSUFBZCxFQUFvQmtCLFFBQXBCLEVBQThCO0FBQzFELE1BQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxVQUFNLElBQUlJLFNBQUosQ0FBYyxxRUFBcUUsT0FBT0osUUFBMUYsQ0FBTjtBQUNEO0FBQ0QsT0FBS2MsRUFBTCxDQUFRaEMsSUFBUixFQUFjc0MsVUFBVSxJQUFWLEVBQWdCdEMsSUFBaEIsRUFBc0JrQixRQUF0QixDQUFkO0FBQ0EsU0FBTyxJQUFQO0FBQ0QsQ0FORDs7QUFRQXpDLGFBQWFoQixTQUFiLENBQXVCa0YsbUJBQXZCLEdBQ0ksU0FBU0EsbUJBQVQsQ0FBNkIzQyxJQUE3QixFQUFtQ2tCLFFBQW5DLEVBQTZDO0FBQzNDLE1BQUksT0FBT0EsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxVQUFNLElBQUlJLFNBQUosQ0FBYyxxRUFBcUUsT0FBT0osUUFBMUYsQ0FBTjtBQUNEO0FBQ0QsT0FBS2UsZUFBTCxDQUFxQmpDLElBQXJCLEVBQTJCc0MsVUFBVSxJQUFWLEVBQWdCdEMsSUFBaEIsRUFBc0JrQixRQUF0QixDQUEzQjtBQUNBLFNBQU8sSUFBUDtBQUNELENBUEw7O0FBU0E7QUFDQXpDLGFBQWFoQixTQUFiLENBQXVCMkUsY0FBdkIsR0FDSSxTQUFTQSxjQUFULENBQXdCcEMsSUFBeEIsRUFBOEJrQixRQUE5QixFQUF3QztBQUN0QyxNQUFJMEIsSUFBSixFQUFVdEMsTUFBVixFQUFrQnVDLFFBQWxCLEVBQTRCNUMsQ0FBNUIsRUFBK0I2QyxnQkFBL0I7O0FBRUEsTUFBSSxPQUFPNUIsUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxVQUFNLElBQUlJLFNBQUosQ0FBYyxxRUFBcUUsT0FBT0osUUFBMUYsQ0FBTjtBQUNEOztBQUVEWixXQUFTLEtBQUt6QixPQUFkO0FBQ0EsTUFBSXlCLFdBQVd4QixTQUFmLEVBQ0UsT0FBTyxJQUFQOztBQUVGOEQsU0FBT3RDLE9BQU9OLElBQVAsQ0FBUDtBQUNBLE1BQUk0QyxTQUFTOUQsU0FBYixFQUNFLE9BQU8sSUFBUDs7QUFFRixNQUFJOEQsU0FBUzFCLFFBQVQsSUFBcUIwQixLQUFLMUIsUUFBTCxLQUFrQkEsUUFBM0MsRUFBcUQ7QUFDbkQsUUFBSSxFQUFFLEtBQUtuQyxZQUFQLEtBQXdCLENBQTVCLEVBQ0UsS0FBS0YsT0FBTCxHQUFlaEIsT0FBTzRCLE1BQVAsQ0FBYyxJQUFkLENBQWYsQ0FERixLQUVLO0FBQ0gsYUFBT2EsT0FBT04sSUFBUCxDQUFQO0FBQ0EsVUFBSU0sT0FBTzhCLGNBQVgsRUFDRSxLQUFLckMsSUFBTCxDQUFVLGdCQUFWLEVBQTRCQyxJQUE1QixFQUFrQzRDLEtBQUsxQixRQUFMLElBQWlCQSxRQUFuRDtBQUNIO0FBQ0YsR0FSRCxNQVFPLElBQUksT0FBTzBCLElBQVAsS0FBZ0IsVUFBcEIsRUFBZ0M7QUFDckNDLGVBQVcsQ0FBQyxDQUFaOztBQUVBLFNBQUs1QyxJQUFJMkMsS0FBS3pDLE1BQUwsR0FBYyxDQUF2QixFQUEwQkYsS0FBSyxDQUEvQixFQUFrQ0EsR0FBbEMsRUFBdUM7QUFDckMsVUFBSTJDLEtBQUszQyxDQUFMLE1BQVlpQixRQUFaLElBQXdCMEIsS0FBSzNDLENBQUwsRUFBUWlCLFFBQVIsS0FBcUJBLFFBQWpELEVBQTJEO0FBQ3pENEIsMkJBQW1CRixLQUFLM0MsQ0FBTCxFQUFRaUIsUUFBM0I7QUFDQTJCLG1CQUFXNUMsQ0FBWDtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJNEMsV0FBVyxDQUFmLEVBQ0UsT0FBTyxJQUFQOztBQUVGLFFBQUlBLGFBQWEsQ0FBakIsRUFDRUQsS0FBS0csS0FBTCxHQURGLEtBRUs7QUFDSEMsZ0JBQVVKLElBQVYsRUFBZ0JDLFFBQWhCO0FBQ0Q7O0FBRUQsUUFBSUQsS0FBS3pDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFDRUcsT0FBT04sSUFBUCxJQUFlNEMsS0FBSyxDQUFMLENBQWY7O0FBRUYsUUFBSXRDLE9BQU84QixjQUFQLEtBQTBCdEQsU0FBOUIsRUFDRSxLQUFLaUIsSUFBTCxDQUFVLGdCQUFWLEVBQTRCQyxJQUE1QixFQUFrQzhDLG9CQUFvQjVCLFFBQXREO0FBQ0g7O0FBRUQsU0FBTyxJQUFQO0FBQ0QsQ0FwREw7O0FBc0RBekMsYUFBYWhCLFNBQWIsQ0FBdUJ3RixHQUF2QixHQUE2QnhFLGFBQWFoQixTQUFiLENBQXVCMkUsY0FBcEQ7O0FBRUEzRCxhQUFhaEIsU0FBYixDQUF1QnlGLGtCQUF2QixHQUNJLFNBQVNBLGtCQUFULENBQTRCbEQsSUFBNUIsRUFBa0M7QUFDaEMsTUFBSWUsU0FBSixFQUFlVCxNQUFmLEVBQXVCTCxDQUF2Qjs7QUFFQUssV0FBUyxLQUFLekIsT0FBZDtBQUNBLE1BQUl5QixXQUFXeEIsU0FBZixFQUNFLE9BQU8sSUFBUDs7QUFFRjtBQUNBLE1BQUl3QixPQUFPOEIsY0FBUCxLQUEwQnRELFNBQTlCLEVBQXlDO0FBQ3ZDLFFBQUlvQixVQUFVQyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFdBQUt0QixPQUFMLEdBQWVoQixPQUFPNEIsTUFBUCxDQUFjLElBQWQsQ0FBZjtBQUNBLFdBQUtWLFlBQUwsR0FBb0IsQ0FBcEI7QUFDRCxLQUhELE1BR08sSUFBSXVCLE9BQU9OLElBQVAsTUFBaUJsQixTQUFyQixFQUFnQztBQUNyQyxVQUFJLEVBQUUsS0FBS0MsWUFBUCxLQUF3QixDQUE1QixFQUNFLEtBQUtGLE9BQUwsR0FBZWhCLE9BQU80QixNQUFQLENBQWMsSUFBZCxDQUFmLENBREYsS0FHRSxPQUFPYSxPQUFPTixJQUFQLENBQVA7QUFDSDtBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVEO0FBQ0EsTUFBSUUsVUFBVUMsTUFBVixLQUFxQixDQUF6QixFQUE0QjtBQUMxQixRQUFJZ0QsT0FBT3RGLE9BQU9zRixJQUFQLENBQVk3QyxNQUFaLENBQVg7QUFDQSxRQUFJOEMsR0FBSjtBQUNBLFNBQUtuRCxJQUFJLENBQVQsRUFBWUEsSUFBSWtELEtBQUtoRCxNQUFyQixFQUE2QixFQUFFRixDQUEvQixFQUFrQztBQUNoQ21ELFlBQU1ELEtBQUtsRCxDQUFMLENBQU47QUFDQSxVQUFJbUQsUUFBUSxnQkFBWixFQUE4QjtBQUM5QixXQUFLRixrQkFBTCxDQUF3QkUsR0FBeEI7QUFDRDtBQUNELFNBQUtGLGtCQUFMLENBQXdCLGdCQUF4QjtBQUNBLFNBQUtyRSxPQUFMLEdBQWVoQixPQUFPNEIsTUFBUCxDQUFjLElBQWQsQ0FBZjtBQUNBLFNBQUtWLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFFRGdDLGNBQVlULE9BQU9OLElBQVAsQ0FBWjs7QUFFQSxNQUFJLE9BQU9lLFNBQVAsS0FBcUIsVUFBekIsRUFBcUM7QUFDbkMsU0FBS3FCLGNBQUwsQ0FBb0JwQyxJQUFwQixFQUEwQmUsU0FBMUI7QUFDRCxHQUZELE1BRU8sSUFBSUEsY0FBY2pDLFNBQWxCLEVBQTZCO0FBQ2xDO0FBQ0EsU0FBS21CLElBQUljLFVBQVVaLE1BQVYsR0FBbUIsQ0FBNUIsRUFBK0JGLEtBQUssQ0FBcEMsRUFBdUNBLEdBQXZDLEVBQTRDO0FBQzFDLFdBQUttQyxjQUFMLENBQW9CcEMsSUFBcEIsRUFBMEJlLFVBQVVkLENBQVYsQ0FBMUI7QUFDRDtBQUNGOztBQUVELFNBQU8sSUFBUDtBQUNELENBakRMOztBQW1EQSxTQUFTb0QsVUFBVCxDQUFvQmhHLE1BQXBCLEVBQTRCMkMsSUFBNUIsRUFBa0NzRCxNQUFsQyxFQUEwQztBQUN4QyxNQUFJaEQsU0FBU2pELE9BQU93QixPQUFwQjs7QUFFQSxNQUFJeUIsV0FBV3hCLFNBQWYsRUFDRSxPQUFPLEVBQVA7O0FBRUYsTUFBSXlFLGFBQWFqRCxPQUFPTixJQUFQLENBQWpCO0FBQ0EsTUFBSXVELGVBQWV6RSxTQUFuQixFQUNFLE9BQU8sRUFBUDs7QUFFRixNQUFJLE9BQU95RSxVQUFQLEtBQXNCLFVBQTFCLEVBQ0UsT0FBT0QsU0FBUyxDQUFDQyxXQUFXckMsUUFBWCxJQUF1QnFDLFVBQXhCLENBQVQsR0FBK0MsQ0FBQ0EsVUFBRCxDQUF0RDs7QUFFRixTQUFPRCxTQUNMRSxnQkFBZ0JELFVBQWhCLENBREssR0FDeUJ2QyxXQUFXdUMsVUFBWCxFQUF1QkEsV0FBV3BELE1BQWxDLENBRGhDO0FBRUQ7O0FBRUQxQixhQUFhaEIsU0FBYixDQUF1QnNELFNBQXZCLEdBQW1DLFNBQVNBLFNBQVQsQ0FBbUJmLElBQW5CLEVBQXlCO0FBQzFELFNBQU9xRCxXQUFXLElBQVgsRUFBaUJyRCxJQUFqQixFQUF1QixJQUF2QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQXZCLGFBQWFoQixTQUFiLENBQXVCZ0csWUFBdkIsR0FBc0MsU0FBU0EsWUFBVCxDQUFzQnpELElBQXRCLEVBQTRCO0FBQ2hFLFNBQU9xRCxXQUFXLElBQVgsRUFBaUJyRCxJQUFqQixFQUF1QixLQUF2QixDQUFQO0FBQ0QsQ0FGRDs7QUFJQXZCLGFBQWFpRixhQUFiLEdBQTZCLFVBQVM3QixPQUFULEVBQWtCN0IsSUFBbEIsRUFBd0I7QUFDbkQsTUFBSSxPQUFPNkIsUUFBUTZCLGFBQWYsS0FBaUMsVUFBckMsRUFBaUQ7QUFDL0MsV0FBTzdCLFFBQVE2QixhQUFSLENBQXNCMUQsSUFBdEIsQ0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8wRCxjQUFjaEcsSUFBZCxDQUFtQm1FLE9BQW5CLEVBQTRCN0IsSUFBNUIsQ0FBUDtBQUNEO0FBQ0YsQ0FORDs7QUFRQXZCLGFBQWFoQixTQUFiLENBQXVCaUcsYUFBdkIsR0FBdUNBLGFBQXZDO0FBQ0EsU0FBU0EsYUFBVCxDQUF1QjFELElBQXZCLEVBQTZCO0FBQzNCLE1BQUlNLFNBQVMsS0FBS3pCLE9BQWxCOztBQUVBLE1BQUl5QixXQUFXeEIsU0FBZixFQUEwQjtBQUN4QixRQUFJeUUsYUFBYWpELE9BQU9OLElBQVAsQ0FBakI7O0FBRUEsUUFBSSxPQUFPdUQsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNwQyxhQUFPLENBQVA7QUFDRCxLQUZELE1BRU8sSUFBSUEsZUFBZXpFLFNBQW5CLEVBQThCO0FBQ25DLGFBQU95RSxXQUFXcEQsTUFBbEI7QUFDRDtBQUNGOztBQUVELFNBQU8sQ0FBUDtBQUNEOztBQUVEMUIsYUFBYWhCLFNBQWIsQ0FBdUJrRyxVQUF2QixHQUFvQyxTQUFTQSxVQUFULEdBQXNCO0FBQ3hELFNBQU8sS0FBSzVFLFlBQUwsR0FBb0IsQ0FBcEIsR0FBd0JwQixlQUFlLEtBQUtrQixPQUFwQixDQUF4QixHQUF1RCxFQUE5RDtBQUNELENBRkQ7O0FBSUEsU0FBU21DLFVBQVQsQ0FBb0I0QyxHQUFwQixFQUF5QmpFLENBQXpCLEVBQTRCO0FBQzFCLE1BQUlrRSxPQUFPLElBQUlDLEtBQUosQ0FBVW5FLENBQVYsQ0FBWDtBQUNBLE9BQUssSUFBSU0sSUFBSSxDQUFiLEVBQWdCQSxJQUFJTixDQUFwQixFQUF1QixFQUFFTSxDQUF6QixFQUNFNEQsS0FBSzVELENBQUwsSUFBVTJELElBQUkzRCxDQUFKLENBQVY7QUFDRixTQUFPNEQsSUFBUDtBQUNEOztBQUVELFNBQVNiLFNBQVQsQ0FBbUJKLElBQW5CLEVBQXlCbUIsS0FBekIsRUFBZ0M7QUFDOUIsU0FBT0EsUUFBUSxDQUFSLEdBQVluQixLQUFLekMsTUFBeEIsRUFBZ0M0RCxPQUFoQyxFQUNFbkIsS0FBS21CLEtBQUwsSUFBY25CLEtBQUttQixRQUFRLENBQWIsQ0FBZDtBQUNGbkIsT0FBS29CLEdBQUw7QUFDRDs7QUFFRCxTQUFTUixlQUFULENBQXlCSSxHQUF6QixFQUE4QjtBQUM1QixNQUFJSyxNQUFNLElBQUlILEtBQUosQ0FBVUYsSUFBSXpELE1BQWQsQ0FBVjtBQUNBLE9BQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJZ0UsSUFBSTlELE1BQXhCLEVBQWdDLEVBQUVGLENBQWxDLEVBQXFDO0FBQ25DZ0UsUUFBSWhFLENBQUosSUFBUzJELElBQUkzRCxDQUFKLEVBQU9pQixRQUFQLElBQW1CMEMsSUFBSTNELENBQUosQ0FBNUI7QUFDRDtBQUNELFNBQU9nRSxHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUMvYkR0RixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZzRixTQUFPQyxtQkFBT0EsQ0FBQyxvREFBUixFQUF1QkMsT0FEZjtBQUVmQyxVQUFRRixtQkFBT0EsQ0FBQyxvREFBUixFQUF1QkUsTUFGaEI7QUFHZkMsY0FBWUgsbUJBQU9BLENBQUMsb0RBQVIsRUFBdUJHLFVBSHBCO0FBSWZDLGNBQVlKLG1CQUFPQSxDQUFDLG9EQUFSLEVBQXVCSSxVQUpwQjs7QUFNZkMsWUFBVUwsbUJBQU9BLENBQUMsc0RBQVIsRUFBd0JLLFFBTm5CO0FBT2ZDLGVBQWFOLG1CQUFPQSxDQUFDLHNEQUFSLEVBQXdCTSxXQVB0Qjs7QUFTZkMsYUFBV1AsbUJBQU9BLENBQUMsMERBQVIsRUFBMEJDO0FBVHRCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sTUFBTUksUUFBTixDQUFlO0FBQ3BCOzs7Ozs7QUFNQUcsY0FBYXhFLE1BQWIsRUFBcUI7QUFDbkIsU0FBS0EsTUFBTCxHQUFjQSxVQUFVLENBQXhCO0FBQ0EsU0FBS3lFLFVBQUwsR0FBa0J6RSxVQUFVLENBQTVCO0FBQ0EsU0FBSzBFLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDRDs7QUFFRDs7Ozs7QUFLQTFFLE9BQU0yRSxJQUFOLEVBQVk7QUFDVixTQUFLRixLQUFMLENBQVd6RSxJQUFYLENBQWdCMkUsSUFBaEI7QUFDQSxTQUFLNUUsTUFBTCxJQUFlNEUsS0FBS0MsVUFBcEI7QUFDQSxTQUFLSixVQUFMLElBQW1CRyxLQUFLQyxVQUF4QjtBQUNEOztBQUVEOzs7OztBQUtBakMsUUFBTzVDLE1BQVAsRUFBZTtBQUNiLFFBQUksS0FBSzBFLEtBQUwsQ0FBVzFFLE1BQVgsR0FBb0IsQ0FBeEIsRUFBMkI7QUFDekIsYUFBTyxJQUFJOEUsVUFBSixDQUFlLENBQWYsQ0FBUDtBQUNEOztBQUVELFFBQUk5RSxXQUFXckIsU0FBZixFQUEwQjtBQUN4QixhQUFPLEtBQUtvRyxZQUFMLEVBQVA7QUFDRDtBQUNELFFBQUssS0FBS0osTUFBTCxHQUFjM0UsTUFBZixLQUEyQixLQUFLMEUsS0FBTCxDQUFXLENBQVgsRUFBYzFFLE1BQTdDLEVBQXFEO0FBQ25ELFVBQUk4RCxNQUFNLEtBQUtZLEtBQUwsQ0FBVyxDQUFYLEVBQWNNLEtBQWQsQ0FBb0IsS0FBS0wsTUFBekIsRUFBaUMsS0FBS0EsTUFBTCxHQUFjM0UsTUFBL0MsQ0FBVjtBQUNBLFdBQUsyRSxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtELEtBQUwsQ0FBVzlCLEtBQVg7QUFDQSxXQUFLNUMsTUFBTCxJQUFlQSxNQUFmO0FBQ0EsYUFBTzhELEdBQVA7QUFDRDs7QUFFRCxRQUFLLEtBQUthLE1BQUwsR0FBYzNFLE1BQWYsR0FBeUIsS0FBSzBFLEtBQUwsQ0FBVyxDQUFYLEVBQWMxRSxNQUEzQyxFQUFtRDtBQUNqRCxVQUFJOEQsTUFBTSxLQUFLWSxLQUFMLENBQVcsQ0FBWCxFQUFjTSxLQUFkLENBQW9CLEtBQUtMLE1BQXpCLEVBQWlDLEtBQUtBLE1BQUwsR0FBYzNFLE1BQS9DLENBQVY7QUFDQSxXQUFLMkUsTUFBTCxJQUFlM0UsTUFBZjtBQUNBLFdBQUtBLE1BQUwsSUFBZUEsTUFBZjtBQUNBLGFBQU84RCxHQUFQO0FBQ0Q7O0FBRUQsUUFBSUEsTUFBTSxJQUFJZ0IsVUFBSixDQUFlOUUsTUFBZixDQUFWO0FBQ0EsUUFBSWlGLFNBQVMsQ0FBYjtBQUNBLFdBQU8sS0FBS1AsS0FBTCxDQUFXMUUsTUFBWCxHQUFvQixDQUFwQixJQUF5QkEsU0FBUyxDQUF6QyxFQUE0QztBQUMxQyxVQUFLLEtBQUsyRSxNQUFMLEdBQWMzRSxNQUFmLEdBQXlCLEtBQUswRSxLQUFMLENBQVcsQ0FBWCxFQUFjMUUsTUFBM0MsRUFBbUQ7QUFDakQsWUFBSWtGLE1BQU0sS0FBS1IsS0FBTCxDQUFXLENBQVgsRUFBY00sS0FBZCxDQUFvQixLQUFLTCxNQUF6QixFQUFpQyxLQUFLQSxNQUFMLEdBQWMzRSxNQUEvQyxDQUFWO0FBQ0E4RCxZQUFJNUUsR0FBSixDQUFRZ0csR0FBUixFQUFhRCxNQUFiO0FBQ0EsYUFBS04sTUFBTCxJQUFlM0UsTUFBZjtBQUNBLGFBQUtBLE1BQUwsSUFBZUEsTUFBZjtBQUNBQSxpQkFBUyxDQUFUO0FBQ0E7QUFDRCxPQVBELE1BT087QUFDTCxZQUFJbUYsYUFBYSxLQUFLVCxLQUFMLENBQVcsQ0FBWCxFQUFjMUUsTUFBZCxHQUF1QixLQUFLMkUsTUFBN0M7QUFDQWIsWUFBSTVFLEdBQUosQ0FBUSxLQUFLd0YsS0FBTCxDQUFXLENBQVgsRUFBY00sS0FBZCxDQUFvQixLQUFLTCxNQUF6QixFQUFpQyxLQUFLRCxLQUFMLENBQVcsQ0FBWCxFQUFjMUUsTUFBL0MsQ0FBUixFQUFnRWlGLE1BQWhFO0FBQ0EsYUFBS1AsS0FBTCxDQUFXOUIsS0FBWDtBQUNBLGFBQUsrQixNQUFMLEdBQWMsQ0FBZDtBQUNBTSxrQkFBVUUsVUFBVjtBQUNBLGFBQUtuRixNQUFMLElBQWVtRixVQUFmO0FBQ0FuRixrQkFBVW1GLFVBQVY7QUFDRDtBQUNGO0FBQ0QsV0FBT3JCLEdBQVA7QUFDRDs7QUFFRDs7O0FBR0FzQixVQUFTO0FBQ1AsU0FBS1YsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLMUUsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLMkUsTUFBTCxHQUFjLENBQWQ7QUFDRDs7QUFFRFUsWUFBVztBQUNULFNBQUtELEtBQUw7QUFDQSxTQUFLWCxVQUFMLEdBQWtCLENBQWxCO0FBQ0Q7O0FBRUQ7OztBQUdBTSxpQkFBZ0I7QUFDZCxTQUFLL0UsTUFBTCxJQUFlLEtBQUswRSxLQUFMLENBQVcsQ0FBWCxFQUFjMUUsTUFBN0I7QUFDQSxTQUFLMkUsTUFBTCxHQUFjLENBQWQ7QUFDQSxXQUFPLEtBQUtELEtBQUwsQ0FBVzlCLEtBQVgsRUFBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQTBDLFFBQU9DLEtBQVAsRUFBY3ZGLE1BQWQsRUFBc0I7QUFDcEIsUUFBSXdGLFNBQVMsQ0FBYjtBQUNBLFFBQUkxRixJQUFJLEtBQUs2RSxNQUFMLEdBQWNZLEtBQXRCO0FBQ0EsV0FBT3pGLElBQUksS0FBSzZFLE1BQUwsR0FBYzNFLE1BQWQsR0FBdUJ1RixLQUFsQyxFQUF5QztBQUN2QyxVQUFJekYsSUFBSSxLQUFLNEUsS0FBTCxDQUFXLENBQVgsRUFBYzFFLE1BQXRCLEVBQThCO0FBQzVCd0YsaUJBQVNBLFNBQVMsR0FBVCxHQUFlLEtBQUtkLEtBQUwsQ0FBVyxDQUFYLEVBQWM1RSxDQUFkLENBQXhCO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBSzRFLEtBQUwsQ0FBVyxDQUFYLENBQUosRUFBbUI7QUFDeEJjLGlCQUFTQSxTQUFTLEdBQVQsR0FBZSxLQUFLZCxLQUFMLENBQVcsQ0FBWCxFQUFjNUUsSUFBSSxLQUFLNEUsS0FBTCxDQUFXLENBQVgsRUFBYzFFLE1BQWhDLENBQXhCO0FBQ0Q7O0FBRURGO0FBQ0Q7QUFDRCxXQUFPMEYsTUFBUDtBQUNEO0FBdEhtQjs7UUFBVG5CLFEsR0FBQUEsUTtBQXlITixNQUFNQyxXQUFOLENBQWtCO0FBQ3ZCRSxnQkFBZTtBQUNiLFNBQUtpQixLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7O0FBRURMLFlBQVc7QUFDVCxTQUFLSSxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7QUFUc0I7UUFBWnBCLFcsR0FBQUEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6SGIsTUFBTXFCLE1BQU4sQ0FBYTtBQUNYbkIsZ0JBQWU7QUFDYixTQUFLb0IsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtySCxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtxRyxJQUFMLEdBQVksRUFBWjtBQUNEO0FBTFU7O0FBUWIsTUFBTUwsU0FBTixDQUFnQjtBQUNkQyxnQkFBZTtBQUNiLFNBQUtxQixPQUFMLEdBQWUsRUFBZjtBQUNEOztBQUVEQyxZQUFXQyxNQUFYLEVBQW1CO0FBQ2pCLFdBQU8sS0FBS0YsT0FBTCxDQUFhRSxNQUFiLENBQVA7QUFDRDs7QUFFREMsZUFBY3ZFLElBQWQsRUFBb0I7QUFDbEIsU0FBS29FLE9BQUwsQ0FBYXBFLElBQWIsSUFBcUIsSUFBSWtFLE1BQUosRUFBckI7QUFDQSxXQUFPLEtBQUtFLE9BQUwsQ0FBYXBFLElBQWIsQ0FBUDtBQUNEOztBQUVEMkQsVUFBUztBQUNQLFNBQUtTLE9BQUwsR0FBZSxFQUFmO0FBQ0Q7O0FBRURSLFlBQVc7QUFDVCxTQUFLUSxPQUFMLEdBQWUsRUFBZjtBQUNEO0FBcEJhOztrQkF1QkR0QixTOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQSxNQUFNUixLQUFOLENBQVk7QUFDekI7OztBQUdBUyxnQkFBZTtBQUNiLFNBQUt5QixFQUFMLEdBQVUsQ0FBQyxDQUFYO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtwRyxNQUFMLEdBQWMsQ0FBZDtBQUNEOztBQUVEOzs7QUFHQXFHLFVBQVM7QUFDUCxTQUFLSCxjQUFMLEdBQXNCLENBQXRCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxTQUFLbkcsTUFBTCxHQUFjLENBQWQ7QUFDRDtBQUNEOzs7QUFHQXNHLFlBQVc7QUFDVCxTQUFLRCxLQUFMO0FBQ0EsU0FBS0osRUFBTCxHQUFVLENBQUMsQ0FBWDtBQUNEO0FBMUJ3Qjs7a0JBQU5sQyxLO0FBNkJkLE1BQU1JLFVBQU4sU0FBeUJKLEtBQXpCLENBQStCO0FBQ3BDOzs7QUFHQVMsZ0JBQWU7QUFDYjtBQUNBLFNBQUsrQixHQUFMLEdBQVcsWUFBWDtBQUNBLFNBQUsxRyxJQUFMLEdBQVksT0FBWjtBQUNEO0FBUm1DOztRQUF6QnNFLFUsR0FBQUEsVTtBQVdOLE1BQU1DLFVBQU4sU0FBeUJMLEtBQXpCLENBQStCO0FBQ3BDOzs7QUFHQVMsZ0JBQWU7QUFDYjtBQUNBLFNBQUsrQixHQUFMLEdBQVcsWUFBWDtBQUNBLFNBQUsxRyxJQUFMLEdBQVksT0FBWjtBQUNBLFNBQUsyRyxPQUFMLEdBQWUsQ0FBZjtBQUNEO0FBQ0Q7OztBQUdBSCxVQUFTO0FBQ1AsU0FBS0gsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS25HLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBS3dHLE9BQUwsR0FBZSxDQUFmO0FBQ0Q7QUFsQm1DOztRQUF6QnBDLFUsR0FBQUEsVTtBQXFCTixNQUFNRixNQUFOLENBQWE7QUFDbEJNLGdCQUFlO0FBQ2IsU0FBS2lDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRURyQixZQUFXO0FBQ1QsU0FBS29CLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7QUFUaUI7UUFBUHhDLE0sR0FBQUEsTTs7Ozs7Ozs7Ozs7Ozs7QUM3RGIxRixPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZrSSxXQUFTM0MsbUJBQU9BLENBQUMsdUVBQVIsRUFBOEJDLE9BRHhCO0FBRWYyQyxhQUFXNUMsbUJBQU9BLENBQUMseUVBQVIsRUFBa0NDLE9BRjlCOztBQUlmNEMsaUJBQWU3QyxtQkFBT0EsQ0FBQyxtRUFBUixFQUErQkM7QUFKL0IsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0EsTUFBTTZDLEdBQU4sQ0FBVTs7QUFFUixTQUFPQyxjQUFQLENBQXNCQyxLQUF0QixFQUE2QkMsWUFBN0IsRUFBMkM7QUFDekMsUUFBSUQsVUFBVSxXQUFkLEVBQTJCO0FBQ3pCO0FBQ0EsVUFBSUMsaUJBQWlCLENBQXJCLEVBQXdCO0FBQ3RCLGVBQU8sSUFBSW5DLFVBQUosQ0FBZSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixDQUFmLENBQVA7QUFDRCxPQUZELE1BRU8sSUFBSW1DLGlCQUFpQixDQUFyQixFQUF3QjtBQUM3QixlQUFPLElBQUluQyxVQUFKLENBQWUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsSUFBakQsQ0FBZixDQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUltQyxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDN0IsZUFBTyxJQUFJbkMsVUFBSixDQUFlLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELElBQWpELEVBQXVELElBQXZELEVBQTZELElBQTdELEVBQW1FLElBQW5FLEVBQXlFLElBQXpFLENBQWYsQ0FBUDtBQUNELE9BRk0sTUFFQSxJQUFJbUMsaUJBQWlCLENBQXJCLEVBQXdCO0FBQzdCLGVBQU8sSUFBSW5DLFVBQUosQ0FBZSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxJQUFqRCxFQUF1RCxJQUF2RCxFQUE2RCxJQUE3RCxFQUFtRSxJQUFuRSxFQUF5RSxJQUF6RSxFQUErRSxJQUEvRSxFQUFxRixJQUFyRixFQUEyRixJQUEzRixFQUFpRyxJQUFqRyxFQUF1RyxJQUF2RyxDQUFmLENBQVA7QUFDRCxPQUZNLE1BRUEsSUFBSW1DLGlCQUFpQixDQUFyQixFQUF3QjtBQUM3QixlQUFPLElBQUluQyxVQUFKLENBQWUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsSUFBakQsRUFBdUQsSUFBdkQsRUFBNkQsSUFBN0QsRUFBbUUsSUFBbkUsRUFBeUUsSUFBekUsRUFBK0UsSUFBL0UsRUFBcUYsSUFBckYsRUFBMkYsSUFBM0YsRUFBaUcsSUFBakcsRUFBdUcsSUFBdkcsRUFBNkcsSUFBN0csRUFBbUgsSUFBbkgsRUFBeUgsSUFBekgsQ0FBZixDQUFQO0FBQ0QsT0FGTSxNQUVBLElBQUltQyxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDN0IsZUFBTyxJQUFJbkMsVUFBSixDQUFlLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELElBQWpELEVBQXVELElBQXZELEVBQTZELElBQTdELEVBQW1FLElBQW5FLEVBQXlFLElBQXpFLEVBQStFLElBQS9FLEVBQXFGLElBQXJGLEVBQTJGLElBQTNGLEVBQWlHLElBQWpHLEVBQXVHLElBQXZHLEVBQTZHLElBQTdHLEVBQW1ILElBQW5ILEVBQXlILElBQXpILEVBQStILElBQS9ILEVBQXFJLElBQXJJLEVBQTJJLElBQTNJLEVBQWlKLElBQWpKLEVBQXVKLElBQXZKLENBQWYsQ0FBUDtBQUNEO0FBQ0YsS0FmRCxNQWVPO0FBQ0w7QUFDQSxVQUFJbUMsaUJBQWlCLENBQXJCLEVBQXdCO0FBQ3RCO0FBQ0EsZUFBTyxJQUFJbkMsVUFBSixDQUFlLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDLEVBQWdELElBQWhELEVBQXNELEdBQXRELEVBQTJELEdBQTNELEVBQWdFLEdBQWhFLEVBQXFFLEdBQXJFLEVBQTBFLElBQTFFLEVBQWdGLEdBQWhGLEVBQXFGLElBQXJGLEVBQTJGLElBQTNGLEVBQWlHLEdBQWpHLEVBQXNHLElBQXRHLEVBQTRHLElBQTVHLEVBQWtILElBQWxILEVBQXdILElBQXhILEVBQThILElBQTlILEVBQW9JLElBQXBJLEVBQTBJLElBQTFJLEVBQWdKLElBQWhKLEVBQXNKLElBQXRKLEVBQTRKLElBQTVKLEVBQWtLLElBQWxLLEVBQXdLLElBQXhLLEVBQThLLElBQTlLLEVBQW9MLElBQXBMLEVBQTBMLElBQTFMLEVBQWdNLElBQWhNLEVBQXNNLElBQXRNLEVBQTRNLElBQTVNLEVBQWtOLElBQWxOLEVBQXdOLElBQXhOLEVBQThOLElBQTlOLEVBQW9PLElBQXBPLEVBQTBPLElBQTFPLEVBQWdQLElBQWhQLEVBQXNQLElBQXRQLEVBQTRQLElBQTVQLEVBQWtRLElBQWxRLEVBQXdRLElBQXhRLEVBQThRLElBQTlRLEVBQW9SLElBQXBSLEVBQTBSLElBQTFSLEVBQWdTLElBQWhTLEVBQXNTLElBQXRTLEVBQTRTLElBQTVTLEVBQWtULElBQWxULEVBQXdULElBQXhULEVBQThULElBQTlULEVBQW9VLElBQXBVLEVBQTBVLElBQTFVLEVBQWdWLElBQWhWLEVBQXNWLElBQXRWLENBQWYsQ0FBUDtBQUNELE9BSEQsTUFHTyxJQUFJbUMsaUJBQWlCLENBQXJCLEVBQXdCO0FBQzdCO0FBQ0EsZUFBTyxJQUFJbkMsVUFBSixDQUFlLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDLEVBQWdELElBQWhELEVBQXNELEdBQXRELEVBQTJELEdBQTNELEVBQWdFLEdBQWhFLEVBQXFFLEdBQXJFLEVBQTBFLEdBQTFFLEVBQStFLElBQS9FLEVBQXFGLEdBQXJGLEVBQTBGLEdBQTFGLEVBQStGLElBQS9GLEVBQXFHLElBQXJHLEVBQTJHLEdBQTNHLEVBQWdILElBQWhILEVBQXNILElBQXRILEVBQTRILElBQTVILEVBQWtJLElBQWxJLEVBQXdJLElBQXhJLEVBQThJLElBQTlJLEVBQW9KLElBQXBKLEVBQTBKLElBQTFKLEVBQWdLLElBQWhLLEVBQXNLLElBQXRLLEVBQTRLLElBQTVLLEVBQWtMLElBQWxMLEVBQXdMLElBQXhMLEVBQThMLElBQTlMLEVBQW9NLElBQXBNLEVBQTBNLElBQTFNLEVBQWdOLElBQWhOLEVBQXNOLElBQXROLEVBQTROLElBQTVOLEVBQWtPLElBQWxPLEVBQXdPLElBQXhPLEVBQThPLElBQTlPLEVBQW9QLElBQXBQLEVBQTBQLElBQTFQLEVBQWdRLElBQWhRLEVBQXNRLElBQXRRLEVBQTRRLElBQTVRLEVBQWtSLElBQWxSLEVBQXdSLElBQXhSLEVBQThSLElBQTlSLEVBQW9TLElBQXBTLEVBQTBTLElBQTFTLEVBQWdULElBQWhULEVBQXNULElBQXRULEVBQTRULElBQTVULEVBQWtVLElBQWxVLEVBQXdVLElBQXhVLEVBQThVLElBQTlVLEVBQW9WLElBQXBWLENBQWYsQ0FBUDtBQUNELE9BSE0sTUFHQSxJQUFJbUMsaUJBQWlCLENBQXJCLEVBQXdCO0FBQzdCO0FBQ0EsZUFBTyxJQUFJbkMsVUFBSixDQUFlLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLElBQTlCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDLEVBQWdELElBQWhELEVBQXNELEdBQXRELEVBQTJELEdBQTNELEVBQWdFLEdBQWhFLEVBQXFFLEdBQXJFLEVBQTBFLEdBQTFFLEVBQStFLElBQS9FLEVBQXFGLEdBQXJGLEVBQTBGLEdBQTFGLEVBQStGLElBQS9GLEVBQXFHLElBQXJHLEVBQTJHLEdBQTNHLEVBQWdILElBQWhILEVBQXNILElBQXRILEVBQTRILElBQTVILEVBQWtJLElBQWxJLEVBQXdJLElBQXhJLEVBQThJLElBQTlJLEVBQW9KLElBQXBKLEVBQTBKLElBQTFKLEVBQWdLLElBQWhLLEVBQXNLLElBQXRLLEVBQTRLLElBQTVLLEVBQWtMLElBQWxMLEVBQXdMLElBQXhMLEVBQThMLElBQTlMLEVBQW9NLElBQXBNLEVBQTBNLElBQTFNLEVBQWdOLElBQWhOLEVBQXNOLElBQXROLEVBQTROLElBQTVOLEVBQWtPLElBQWxPLEVBQXdPLElBQXhPLEVBQThPLElBQTlPLEVBQW9QLElBQXBQLEVBQTBQLElBQTFQLEVBQWdRLElBQWhRLEVBQXNRLElBQXRRLEVBQTRRLElBQTVRLEVBQWtSLElBQWxSLEVBQXdSLElBQXhSLEVBQThSLElBQTlSLEVBQW9TLElBQXBTLEVBQTBTLElBQTFTLEVBQWdULElBQWhULEVBQXNULElBQXRULEVBQTRULElBQTVULEVBQWtVLElBQWxVLEVBQXdVLElBQXhVLEVBQThVLElBQTlVLEVBQW9WLElBQXBWLENBQWYsQ0FBUDtBQUNEO0FBQ0Y7QUFDRCxXQUFPLElBQVA7QUFDRDs7QUFoQ087O2tCQW9DS2dDLEc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDZjs7QUFDQTs7Ozs7O0FBRUEsTUFBTSxFQUFDSSxZQUFELEVBQWVDLFlBQWYsS0FBK0JDLHFCQUFyQzs7QUFFQSxNQUFNUCxhQUFOLENBQW9CO0FBQ2xCckMsZ0JBQWU7QUFDYixTQUFLNkMsWUFBTCxHQUFvQixDQUFwQixDQURhLENBQ1M7QUFDdEIsU0FBS0MsWUFBTCxHQUFvQixDQUFwQixDQUZhLENBRVM7O0FBRXRCLFNBQUtDLG1CQUFMLEdBQTJCLENBQTNCLENBSmEsQ0FJZ0I7QUFDN0IsU0FBS0MsbUJBQUwsR0FBMkIsQ0FBM0IsQ0FMYSxDQUtnQjs7QUFFN0IsU0FBS0MsWUFBTCxHQUFvQjlJLFNBQXBCLENBUGEsQ0FPaUI7QUFDOUIsU0FBSytJLFlBQUwsR0FBb0IvSSxTQUFwQixDQVJhLENBUWlCOztBQUU5QixTQUFLZ0osb0JBQUwsR0FBNEIsQ0FBNUIsQ0FWYSxDQVVpQjtBQUM5QixTQUFLQyxvQkFBTCxHQUE0QixDQUE1QixDQVhhLENBV2lCOztBQUU5QixTQUFLQyxpQkFBTCxHQUF5QixJQUF6QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLElBQXpCOztBQUVBLFNBQUtDLGtCQUFMLEdBQTBCLEVBQTFCLENBaEJhLENBZ0JnQjtBQUM3QixTQUFLQyxrQkFBTCxHQUEwQixFQUExQixDQWpCYSxDQWlCZ0I7O0FBRTdCLFNBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLENBQXRCO0FBQ0Q7O0FBRUQzSixTQUFRO0FBQ04sU0FBSzRKLE1BQUwsQ0FBWWpCLGFBQWFrQixXQUF6QixFQUFzQyxLQUFLQyxLQUFMLENBQVcvRixJQUFYLENBQWdCLElBQWhCLENBQXRDO0FBQ0Q7O0FBRUQrRCxVQUFTO0FBQ1AsU0FBS2dCLFlBQUwsR0FBb0IsSUFBcEIsQ0FETyxDQUNrQjtBQUN6QixTQUFLQyxZQUFMLEdBQW9CLElBQXBCLENBRk8sQ0FFa0I7O0FBRXpCLFNBQUtDLG1CQUFMLEdBQTJCLENBQTNCLENBSk8sQ0FJc0I7QUFDN0IsU0FBS0MsbUJBQUwsR0FBMkIsQ0FBM0IsQ0FMTyxDQUtzQjs7QUFFN0IsU0FBS0MsWUFBTCxHQUFvQjlJLFNBQXBCLENBUE8sQ0FPdUI7QUFDOUIsU0FBSytJLFlBQUwsR0FBb0IvSSxTQUFwQixDQVJPLENBUXVCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBS29KLGtCQUFMLEdBQTBCLEVBQTFCLENBaEJPLENBZ0JzQjtBQUM3QixTQUFLQyxrQkFBTCxHQUEwQixFQUExQixDQWpCTyxDQWlCc0I7QUFDOUI7O0FBRURLLFVBQVM7QUFDUCxVQUFNLEVBQUVDLG1CQUFGLEVBQXVCQyxtQkFBdkIsS0FBK0MsS0FBS0MsY0FBTCxFQUFyRDs7QUFFQTs7QUFFQSxTQUFLQyxrQkFBTDs7QUFFQSxRQUFJLEtBQUtYLGlCQUFULEVBQTRCO0FBQzFCLFdBQUtZLG9CQUFMLENBQTBCLEtBQUtoQyxVQUFMLENBQWdCaUMsSUFBMUMsRUFBZ0QsS0FBS2pDLFVBQUwsQ0FBZ0JQLE9BQWhFO0FBQ0Q7QUFDRCxRQUFJLEtBQUswQixpQkFBVCxFQUE0QjtBQUMxQixXQUFLYSxvQkFBTCxDQUEwQixLQUFLakMsVUFBTCxDQUFnQmtDLElBQTFDLEVBQWdELEtBQUtsQyxVQUFMLENBQWdCTixPQUFoRTtBQUNEOztBQUVELFVBQU0sRUFBRXlDLFNBQVNDLFlBQVgsRUFBeUJDLFlBQVlDLGVBQXJDLEtBQXlEbEMsY0FBY21DLGtCQUFkLENBQWlDLEtBQUt0QyxVQUFMLENBQWdCUCxPQUFqRCxDQUEvRDtBQUNBLFFBQUkwQyxnQkFBZ0IsQ0FBQ1AsbUJBQXJCLEVBQTBDO0FBQ3hDLFdBQUtXLG9CQUFMLENBQTBCRixlQUExQjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtHLFVBQUwsQ0FBZ0JYLG1CQUFoQjtBQUNEOztBQUVELFVBQU0sRUFBRUssU0FBU08sWUFBWCxFQUF5QkwsWUFBWU0sZUFBckMsS0FBeUR2QyxjQUFjbUMsa0JBQWQsQ0FBaUMsS0FBS3ZDLFVBQUwsQ0FBZ0JOLE9BQWpELENBQS9EO0FBQ0EsUUFBSWdELFlBQUosRUFBa0I7QUFDaEIsV0FBS0Usb0JBQUwsQ0FBMEJELGVBQTFCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS0UsVUFBTCxDQUFnQmhCLG1CQUFoQjtBQUNEOztBQUVEO0FBQ0Q7O0FBRURZLGFBQVlLLEtBQVosRUFBbUJDLGlCQUFuQixFQUFzQztBQUNwQyxRQUFJLEVBQUNyRCxTQUFTc0QsWUFBVixFQUF3QmQsSUFBeEIsS0FBZ0MsS0FBS2pDLFVBQXpDOztBQUVBLFFBQUlpQyxLQUFLZSxTQUFMLElBQWtCZixLQUFLZSxTQUFMLENBQWVDLEtBQWYsS0FBeUIsS0FBL0MsRUFBc0Q7QUFDcEQ7QUFDRDs7QUFFRCxRQUFJLENBQUNGLFlBQUQsSUFBaUIsQ0FBQ0EsYUFBYXpKLE1BQS9CLElBQXlDLENBQUMsS0FBSzhILGlCQUFuRCxFQUFzRTtBQUNwRTtBQUNEOztBQUVEOztBQUVBLFVBQU04QixjQUFjSCxhQUFhLENBQWIsQ0FBcEI7O0FBRUEsVUFBTUksYUFBYUosYUFBYXpKLE1BQWhDOztBQUVBO0FBQ0EsUUFBSSxLQUFLaUksY0FBTCxHQUFzQixDQUExQixFQUE2QjtBQUMzQnBCLG9CQUFjaUQsYUFBZCxDQUE0QkwsWUFBNUIsRUFBMEMsS0FBS3hCLGNBQS9DO0FBQ0Q7O0FBRUQsUUFBSTJCLFlBQVlHLEdBQVosS0FBb0IsS0FBS2pDLGlCQUFMLENBQXVCaUMsR0FBM0MsS0FBbURQLHFCQUFxQjNDLGNBQWNtRCxjQUFkLENBQTZCLEtBQUsxQyxZQUFsQyxFQUFnRHNDLFdBQWhELENBQXhFLENBQUosRUFBMkk7QUFDekksVUFBSUosaUJBQUosRUFBdUI7QUFDckIsYUFBS2xDLFlBQUwsR0FBb0JrQyxpQkFBcEIsQ0FEcUIsQ0FDaUI7QUFDdkM7O0FBRUQsV0FBS3ZCLGNBQUwsR0FBc0IsS0FBS1gsWUFBTCxHQUFvQnNDLFlBQVlHLEdBQXREO0FBQ0FsRCxvQkFBY2lELGFBQWQsQ0FBNEJMLFlBQTVCLEVBQTBDLEtBQUt4QixjQUEvQztBQUNEOztBQUVELFVBQU1nQyxXQUFXTCxZQUFZRyxHQUE3Qjs7QUFFQTtBQUNBLFFBQUlSLFNBQVMsS0FBSzFCLGlCQUFsQixFQUFxQztBQUNuQyxZQUFNcUMsZ0JBQWdCLEtBQUtwQyxpQkFBTCxDQUF1QmlDLEdBQTdDO0FBQ0EsWUFBTUksZ0JBQWdCLEtBQUt0QyxpQkFBTCxDQUF1QmtDLEdBQTdDO0FBQ0EsWUFBTUssTUFBTUYsZ0JBQWdCQyxhQUE1QjtBQUNBLFVBQUlDLE1BQU8sSUFBSXpCLEtBQUswQixpQkFBcEIsRUFBd0M7QUFDdEMsY0FBTUMsWUFBWUMsS0FBS0MsS0FBTCxDQUFXSixNQUFNekIsS0FBSzBCLGlCQUF0QixDQUFsQjs7QUFFQSxhQUFLLElBQUl2SyxJQUFJLENBQWIsRUFBZ0JBLElBQUl3SyxTQUFwQixFQUErQnhLLEdBQS9CLEVBQW9DO0FBQ2xDLGdCQUFNMkssb0JBQW9CL00sT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCZCxXQUFsQixDQUExQixDQURrQyxDQUN1QjtBQUN6RDtBQUNBYSw0QkFBa0JWLEdBQWxCLEdBQXdCRyxnQkFBZ0IsQ0FBQ3BLLElBQUksQ0FBTCxJQUFVNkksS0FBSzBCLGlCQUF2RDtBQUNBSSw0QkFBa0JFLEdBQWxCLEdBQXdCRixrQkFBa0JWLEdBQWxCLEdBQXdCVSxrQkFBa0JHLEdBQWxFOztBQUVBbkIsdUJBQWFwSSxPQUFiLENBQXFCb0osaUJBQXJCOztBQUVBLGVBQUt6QyxrQkFBTCxDQUF3Qi9ILElBQXhCLENBQTZCO0FBQzNCOEosaUJBQUtVLGtCQUFrQlYsR0FESTtBQUUzQmMsa0JBQU1KLGtCQUFrQjdGLElBQWxCLENBQXVCQztBQUZGLFdBQTdCO0FBSUQ7QUFDRjtBQUNGOztBQUVELFFBQUl1RixHQUFKO0FBQ0E7QUFDQSxRQUFJLEtBQUs5QyxZQUFULEVBQXVCO0FBQ3JCO0FBQ0E7QUFDQThDLFlBQU1ILFdBQVcsS0FBSzNDLFlBQXRCO0FBQ0EsWUFBTXdELFNBQVNQLEtBQUtRLEdBQUwsQ0FBU1gsR0FBVCxDQUFmO0FBQ0EsVUFBSUEsTUFBTyxJQUFJekIsS0FBSzBCLGlCQUFwQixFQUF3QztBQUN0QyxjQUFNVyxpQkFBaUJULEtBQUtDLEtBQUwsQ0FBV0osTUFBTXpCLEtBQUswQixpQkFBdEIsQ0FBdkI7O0FBRUEsYUFBSyxJQUFJdkssSUFBSSxDQUFiLEVBQWdCQSxJQUFJa0wsY0FBcEIsRUFBb0NsTCxHQUFwQyxFQUF5QztBQUN2QyxnQkFBTW1MLGVBQWV2TixPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0JqQixhQUFhLENBQWIsQ0FBbEIsQ0FBckI7QUFDQSxnQkFBTXlCLFdBQVdqQixXQUFXLENBQUNuSyxJQUFJLENBQUwsSUFBVTZJLEtBQUswQixpQkFBM0M7O0FBRUFZLHVCQUFhbEIsR0FBYixHQUFtQm1CLFdBQVcsS0FBSzVELFlBQWhCLEdBQStCNEQsUUFBL0IsR0FBMEMsS0FBSzVELFlBQWxFLENBSnVDLENBSXdDO0FBQy9FMkQsdUJBQWFOLEdBQWIsR0FBbUJNLGFBQWFsQixHQUFiLEdBQW1Ca0IsYUFBYUwsR0FBbkQ7O0FBRUEsZUFBS2xFLFVBQUwsQ0FBZ0JQLE9BQWhCLENBQXdCOUUsT0FBeEIsQ0FBZ0M0SixZQUFoQzs7QUFFQSxlQUFLakQsa0JBQUwsQ0FBd0IvSCxJQUF4QixDQUE2QjtBQUMzQjhKLGlCQUFLa0IsYUFBYWxCLEdBRFM7QUFFM0JjLGtCQUFNSSxhQUFhckcsSUFBYixDQUFrQkM7QUFGRyxXQUE3QjtBQUlEO0FBQ0YsT0FqQkQsTUFpQk8sSUFBSWlHLFVBQVVuQyxLQUFLMEIsaUJBQWYsSUFBb0NTLFNBQVMsQ0FBakQsRUFBb0Q7QUFDekQ7QUFDQTtBQUNBckIscUJBQWEsQ0FBYixFQUFnQk0sR0FBaEIsR0FBc0IsS0FBS3pDLFlBQTNCO0FBQ0FtQyxxQkFBYSxDQUFiLEVBQWdCMEIsU0FBaEIsR0FBNEIxQixhQUFhLENBQWIsRUFBZ0JNLEdBQTVDO0FBQ0FOLHFCQUFhLENBQWIsRUFBZ0JtQixHQUFoQixHQUFzQm5CLGFBQWEsQ0FBYixFQUFnQm1CLEdBQWhCLEtBQXdCak0sU0FBeEIsR0FBb0M4SyxhQUFhLENBQWIsRUFBZ0JtQixHQUFwRCxHQUEwRG5CLGFBQWEsQ0FBYixFQUFnQmtCLEdBQWhCLEdBQXNCbEIsYUFBYSxDQUFiLEVBQWdCTSxHQUF0SDtBQUNBTixxQkFBYSxDQUFiLEVBQWdCa0IsR0FBaEIsR0FBc0JsQixhQUFhLENBQWIsRUFBZ0JNLEdBQWhCLEdBQXNCTixhQUFhLENBQWIsRUFBZ0JtQixHQUE1RDtBQUNELE9BUE0sTUFPQSxJQUFJUixNQUFNLENBQVYsRUFBYTtBQUNsQjtBQUNBdkQsc0JBQWNpRCxhQUFkLENBQTRCTCxZQUE1QixFQUEyQyxDQUFDLENBQUQsR0FBS1csR0FBaEQ7QUFDRDtBQUNGO0FBQ0QsVUFBTWdCLFVBQVUzQixhQUFhQSxhQUFhekosTUFBYixHQUFzQixDQUFuQyxFQUFzQytKLEdBQXREOztBQUVBLFVBQU1zQixxQkFBcUI1QixhQUFhekosTUFBYixJQUF1QixDQUF2QixHQUEyQm9MLFVBQVUzQixhQUFhQSxhQUFhekosTUFBYixHQUFzQixDQUFuQyxFQUFzQytKLEdBQTNFLEdBQWlGcEIsS0FBSzBCLGlCQUFqSDs7QUFFQSxTQUFLN0MsbUJBQUwsR0FBMkJxQyxVQUEzQjtBQUNBLFNBQUt2QyxZQUFMLEdBQW9COEQsVUFBVUMsa0JBQTlCO0FBQ0EsU0FBSzVELFlBQUwsR0FBb0IyRCxPQUFwQjs7QUFFQTtBQUNBO0FBQ0EsU0FBSyxJQUFJdEwsSUFBSSxDQUFSLEVBQVdhLE1BQU04SSxhQUFhekosTUFBbkMsRUFBMkNGLElBQUlhLEdBQS9DLEVBQW9EYixHQUFwRCxFQUF5RDtBQUN2RCxZQUFNd0wsVUFBVTdCLGFBQWEzSixDQUFiLENBQWhCO0FBQ0EsWUFBTXlMLE9BQU85QixhQUFhM0osSUFBSSxDQUFqQixDQUFiOztBQUVBLFVBQUksQ0FBQ3lMLElBQUwsRUFBVztBQUNUO0FBQ0Q7O0FBRUQsWUFBTUMsV0FBV0QsS0FBS3hCLEdBQUwsR0FBV3VCLFFBQVF2QixHQUFwQzs7QUFFQSxVQUFJeUIsV0FBWSxJQUFJN0MsS0FBSzBCLGlCQUF6QixFQUE2QztBQUMzQztBQUNBLFlBQUlXLGlCQUFpQlQsS0FBS0MsS0FBTCxDQUFXZ0IsV0FBVzdDLEtBQUswQixpQkFBM0IsQ0FBckI7O0FBRUEsWUFBSW9CLGVBQWUsQ0FBbkI7QUFDQSxlQUFPQSxlQUFlVCxjQUF0QixFQUFzQztBQUNwQyxnQkFBTVUsWUFBWWhPLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQmEsSUFBbEIsQ0FBbEI7QUFDQUcsb0JBQVUzQixHQUFWLEdBQWdCdUIsUUFBUXZCLEdBQVIsR0FBYyxDQUFDMEIsZUFBZSxDQUFoQixJQUFxQjlDLEtBQUswQixpQkFBeEQ7QUFDQXFCLG9CQUFVZixHQUFWLEdBQWdCZSxVQUFVM0IsR0FBVixHQUFnQjJCLFVBQVVkLEdBQTFDO0FBQ0EsY0FBSWMsWUFBWUgsS0FBS3hCLEdBQXJCLEVBQTBCO0FBQ3hCTix5QkFBYWtDLE1BQWIsQ0FBb0I3TCxDQUFwQixFQUF1QixDQUF2QixFQUEwQjRMLFNBQTFCOztBQUVBLGlCQUFLMUQsa0JBQUwsQ0FBd0IvSCxJQUF4QixDQUE2QjtBQUMzQjhKLG1CQUFLMkIsVUFBVTNCLEdBRFk7QUFFM0JjLG9CQUFNYSxVQUFVOUcsSUFBVixDQUFlQztBQUZNLGFBQTdCO0FBSUQ7O0FBRUQ0RztBQUNBM0w7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBSzRHLFVBQUwsQ0FBZ0JQLE9BQWhCLEdBQTBCc0QsWUFBMUI7QUFDRDs7QUFFREgsYUFBWUMsS0FBWixFQUFtQkMsaUJBQW5CLEVBQXNDO0FBQ3BDLFFBQUksRUFBQ3JELFNBQVN5RixZQUFWLEVBQXdCakQsSUFBeEIsS0FBZ0MsS0FBS2xDLFVBQXpDOztBQUVBLFFBQUksQ0FBQ21GLFlBQUQsSUFBaUIsQ0FBQ0EsYUFBYTVMLE1BQW5DLEVBQTJDO0FBQ3pDO0FBQ0Q7QUFDRDs7QUFFQSxVQUFNNkosYUFBYStCLGFBQWE1TCxNQUFoQztBQUNBLFVBQU02TCxjQUFjL0Usb0JBQUlDLGNBQUosQ0FBbUI0QixLQUFLM0IsS0FBeEIsRUFBK0IyQixLQUFLMUIsWUFBcEMsQ0FBcEI7O0FBRUEsVUFBTTJDLGNBQWMsS0FBSy9CLGlCQUF6Qjs7QUFFQSxVQUFNaUUsZUFBZUYsYUFBYSxDQUFiLENBQXJCO0FBQ0E7QUFDQTtBQUNBLFFBQUksS0FBSzFELGNBQUwsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0JyQixvQkFBY2lELGFBQWQsQ0FBNEI4QixZQUE1QixFQUEwQyxLQUFLMUQsY0FBL0M7QUFDRDs7QUFFRCxRQUFJNEQsYUFBYS9CLEdBQWIsS0FBcUIsS0FBS2xDLGlCQUFMLENBQXVCa0MsR0FBNUMsS0FBb0RQLHFCQUFxQjNDLGNBQWNtRCxjQUFkLENBQTZCLEtBQUszQyxZQUFsQyxFQUFnRHlFLFlBQWhELENBQXpFLENBQUosRUFBNkk7QUFDM0ksVUFBSXRDLGlCQUFKLEVBQXVCO0FBQ3JCLGFBQUtuQyxZQUFMLEdBQW9CbUMsaUJBQXBCLENBRHFCLENBQ2lCO0FBQ3ZDO0FBQ0QsV0FBS3RCLGNBQUwsR0FBc0IsS0FBS2IsWUFBTCxHQUFvQnlFLGFBQWEvQixHQUF2RDtBQUNBbEQsb0JBQWNpRCxhQUFkLENBQTRCOEIsWUFBNUIsRUFBMEMsS0FBSzFELGNBQS9DO0FBQ0Q7QUFDRDtBQUNBLFFBQUksS0FBS0osaUJBQUwsSUFBMEJ5QixLQUE5QixFQUFxQztBQUNuQyxZQUFNd0MsZ0JBQWdCLEtBQUtqRSxpQkFBTCxDQUF1QjZDLEdBQXZCLEdBQTZCLEtBQUs3QyxpQkFBTCxDQUF1QjZDLEdBQXBELEdBQTBELEtBQUs3QyxpQkFBTCxDQUF1QmlDLEdBQXZCLEdBQTZCLEtBQUtqQyxpQkFBTCxDQUF1QjhDLEdBQXBJOztBQUVBLFVBQUloQixZQUFZRyxHQUFaLEdBQWtCZ0MsYUFBbEIsR0FBa0NwRCxLQUFLMEIsaUJBQTNDLEVBQThEO0FBQzVELGNBQU0yQixvQkFBb0J6QixLQUFLQyxLQUFMLENBQVcsQ0FBQ1osWUFBWUcsR0FBWixHQUFrQmdDLGFBQW5CLElBQW9DcEQsS0FBSzBCLGlCQUFwRCxDQUExQjs7QUFFQSxhQUFLLElBQUl2SyxJQUFJLENBQWIsRUFBZ0JBLElBQUlrTSxpQkFBcEIsRUFBdUNsTSxHQUF2QyxFQUE0QztBQUMxQyxnQkFBTW1NLGVBQWU7QUFDbkJySCxrQkFBTWlILFdBRGE7QUFFbkJLLHNCQUFVTCxZQUFZaEgsVUFGSDtBQUduQmtGLGlCQUFLSCxZQUFZRyxHQUFaLEdBQWtCLENBQUNqSyxJQUFJLENBQUwsSUFBVTZJLEtBQUswQixpQkFIbkI7QUFJbkI4QixzQkFBVTtBQUpTLFdBQXJCOztBQU9BUCx1QkFBYXZLLE9BQWIsQ0FBcUI0SyxZQUFyQjs7QUFFQSxlQUFLbEUsa0JBQUwsQ0FBd0I5SCxJQUF4QixDQUE2QjtBQUMzQjhKLGlCQUFLa0MsYUFBYWxDLEdBRFM7QUFFM0JjLGtCQUFNb0IsYUFBYXJILElBQWIsQ0FBa0JDO0FBRkcsV0FBN0I7QUFJRDtBQUNGO0FBQ0Y7O0FBRUQsUUFBSXVGLEdBQUo7QUFDQSxVQUFNSCxXQUFXMkIsYUFBYSxDQUFiLEVBQWdCN0IsR0FBakM7O0FBRUEsUUFBSSxLQUFLMUMsWUFBVCxFQUF1QjtBQUNyQjtBQUNBO0FBQ0ErQyxZQUFNSCxXQUFXLEtBQUs1QyxZQUF0QjtBQUNBLFlBQU15RCxTQUFTUCxLQUFLUSxHQUFMLENBQVNYLEdBQVQsQ0FBZjs7QUFFQSxVQUFJVSxTQUFTbkMsS0FBSzBCLGlCQUFkLElBQW1DUixlQUFlLENBQWxELElBQXVELEtBQUt0QyxtQkFBTCxLQUE2QixDQUF4RixFQUEyRjtBQUN6Rm9CLGFBQUt5RCxzQkFBTCxHQUE4QnpOLFNBQTlCO0FBQ0Q7O0FBRUQsVUFBSXlMLE1BQU8sSUFBSXpCLEtBQUswQixpQkFBcEIsRUFBd0M7QUFDdEMsWUFBSVIsZUFBZSxDQUFmLElBQW9CLEtBQUt0QyxtQkFBTCxLQUE2QixDQUFyRCxFQUF3RDtBQUN0RDtBQUNBb0IsZUFBS3lELHNCQUFMLEdBQThCekQsS0FBS3lELHNCQUFMLEtBQWdDek4sU0FBaEMsR0FBNENnSyxLQUFLeUQsc0JBQUwsR0FBOEJoQyxHQUExRSxHQUFnRnpCLEtBQUswQixpQkFBTCxHQUF5QkQsR0FBdkk7QUFDRCxTQUhELE1BR087QUFDTCxnQkFBTWlDLG1CQUFtQjlCLEtBQUtDLEtBQUwsQ0FBV0osTUFBTXpCLEtBQUswQixpQkFBdEIsQ0FBekI7O0FBRUEsZUFBSyxJQUFJdkssSUFBSSxDQUFiLEVBQWdCQSxJQUFJdU0sZ0JBQXBCLEVBQXNDdk0sR0FBdEMsRUFBMkM7QUFDekMsa0JBQU1vTCxXQUFXakIsV0FBVyxDQUFDbkssSUFBSSxDQUFMLElBQVU2SSxLQUFLMEIsaUJBQTNDO0FBQ0Esa0JBQU00QixlQUFldk8sT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCa0IsYUFBYSxDQUFiLENBQWxCLEVBQW1DO0FBQ3REN0IsbUJBQUttQixXQUFXLEtBQUs3RCxZQUFoQixHQUErQjZELFFBQS9CLEdBQTBDLEtBQUs3RDtBQURFLGFBQW5DLENBQXJCOztBQUlBLGlCQUFLVSxrQkFBTCxDQUF3QjlILElBQXhCLENBQTZCO0FBQzNCOEosbUJBQUtrQyxhQUFhbEMsR0FEUztBQUUzQmMsb0JBQU1vQixhQUFhckgsSUFBYixDQUFrQkM7QUFGRyxhQUE3QjtBQUlBLGlCQUFLNEIsVUFBTCxDQUFnQk4sT0FBaEIsQ0FBd0I5RSxPQUF4QixDQUFnQzRLLFlBQWhDO0FBQ0Q7QUFDRjtBQUNGLE9BcEJELE1Bb0JPLElBQUluQixVQUFVbkMsS0FBSzBCLGlCQUFmLElBQW9DUyxTQUFTLENBQWpELEVBQW9EO0FBQ3pEO0FBQ0E7QUFDQWMscUJBQWEsQ0FBYixFQUFnQjdCLEdBQWhCLEdBQXNCLEtBQUsxQyxZQUEzQjtBQUNBdUUscUJBQWEsQ0FBYixFQUFnQmpCLEdBQWhCLEdBQXNCLEtBQUt0RCxZQUEzQjtBQUNELE9BTE0sTUFLQSxJQUFJK0MsTUFBTSxDQUFWLEVBQWE7QUFDbEJ2RCxzQkFBY2lELGFBQWQsQ0FBNEI4QixZQUE1QixFQUEyQyxDQUFDLENBQUQsR0FBS3hCLEdBQWhEO0FBQ0Q7QUFDRjtBQUNELFVBQU1nQixVQUFVUSxhQUFhQSxhQUFhNUwsTUFBYixHQUFzQixDQUFuQyxFQUFzQytKLEdBQXREO0FBQ0EsVUFBTXNCLHFCQUFxQk8sYUFBYTVMLE1BQWIsSUFBdUIsQ0FBdkIsR0FBMkJvTCxVQUFVUSxhQUFhQSxhQUFhNUwsTUFBYixHQUFzQixDQUFuQyxFQUFzQytKLEdBQTNFLEdBQWlGcEIsS0FBSzBCLGlCQUFqSDs7QUFFQSxTQUFLOUMsbUJBQUwsR0FBMkJzQyxVQUEzQjtBQUNBLFNBQUt4QyxZQUFMLEdBQW9Cc0IsS0FBS3lELHNCQUFMLEdBQThCaEIsVUFBVXpDLEtBQUt5RCxzQkFBN0MsR0FBc0VoQixVQUFVQyxrQkFBcEc7QUFDQSxTQUFLM0QsWUFBTCxHQUFvQjBELE9BQXBCOztBQUVBO0FBQ0EsU0FBSyxJQUFJdEwsSUFBSSxDQUFSLEVBQVdhLE1BQU1pTCxhQUFhNUwsTUFBbkMsRUFBMkNGLElBQUlhLEdBQS9DLEVBQW9EYixHQUFwRCxFQUF5RDtBQUN2RCxZQUFNd0wsVUFBVU0sYUFBYTlMLENBQWIsQ0FBaEI7QUFDQSxZQUFNeUwsT0FBT0ssYUFBYTlMLElBQUksQ0FBakIsQ0FBYjs7QUFFQSxVQUFJLENBQUN5TCxJQUFMLEVBQVc7QUFDVDtBQUNEOztBQUVELFlBQU1DLFdBQVdELEtBQUt4QixHQUFMLEdBQVd1QixRQUFRdkIsR0FBcEM7QUFDQTZCLG1CQUFhOUwsQ0FBYixFQUFnQjBMLFFBQWhCLEdBQTJCQSxRQUEzQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCRDs7QUFFRCxTQUFLL0UsVUFBTCxDQUFnQk4sT0FBaEIsR0FBMEJVLGNBQWN5RixnQkFBZCxDQUErQlYsWUFBL0IsQ0FBMUI7QUFDRDs7QUFFRDNDLHVCQUFzQnNELFNBQXRCLEVBQWlDO0FBQy9CLFVBQU0sRUFBRXBHLE9BQUYsRUFBV3dDLElBQVgsS0FBb0IsS0FBS2pDLFVBQS9CO0FBQ0EsVUFBTThGLFVBQVVELGNBQWMsQ0FBZCxHQUFrQixLQUFLRSxvQkFBTCxDQUEwQnRHLFFBQVEsQ0FBUixDQUExQixDQUFsQixHQUEwREEsUUFBUW9HLFlBQVksQ0FBcEIsRUFBdUJ4QyxHQUFqRztBQUNBLFVBQU0yQyxTQUFTdkcsUUFBUW9HLFNBQVIsRUFBbUJ4QyxHQUFsQztBQUNBLFVBQU00QyxhQUFhcEMsS0FBS1EsR0FBTCxDQUFTeUIsVUFBVUUsTUFBbkIsS0FBOEIsSUFBSS9ELEtBQUswQixpQkFBMUQ7O0FBRUEsUUFBSXNDLFVBQUosRUFBZ0I7QUFDZCxVQUFJLENBQUN4RyxRQUFRb0csU0FBUixFQUFtQkssT0FBeEIsRUFBaUM7QUFDL0J6RyxnQkFBUW9HLFNBQVIsRUFBbUJLLE9BQW5CLEdBQTZCO0FBQzNCRCxzQkFBWTtBQURlLFNBQTdCO0FBR0QsT0FKRCxNQUlPO0FBQ0x4RyxnQkFBUW9HLFNBQVIsRUFBbUJLLE9BQW5CLENBQTJCRCxVQUEzQixHQUF3QyxJQUF4QztBQUNEO0FBQ0QsYUFBTyxLQUFLekQsVUFBTCxDQUFnQixLQUFoQixDQUFQO0FBQ0Q7O0FBRUQsVUFBTTJELG1CQUFtQjFHLFFBQVFuQixLQUFSLENBQWMsQ0FBZCxFQUFpQnVILFNBQWpCLENBQXpCO0FBQ0EsVUFBTU8sb0JBQW9CM0csUUFBUW5CLEtBQVIsQ0FBY3VILFNBQWQsQ0FBMUI7QUFDQSxVQUFNM0MsY0FBY3pELFFBQVEsQ0FBUixDQUFwQjs7QUFFQSxVQUFNNEcsZUFBZUQsa0JBQWtCLENBQWxCLENBQXJCO0FBQ0EsVUFBTUUsb0JBQW9CRCxhQUFhaEQsR0FBYixHQUFtQkgsWUFBWUcsR0FBekQ7QUFDQSxVQUFNUCxvQkFBb0JJLFlBQVlnRCxPQUFaLElBQXVCaEQsWUFBWWdELE9BQVosQ0FBb0JySCxLQUFwQixHQUE0QnlILGlCQUFuRCxHQUF1RXBELFlBQVlnRCxPQUFaLENBQW9CckgsS0FBM0YsR0FBbUcsSUFBN0g7O0FBRUEsU0FBS21CLFVBQUwsQ0FBZ0JQLE9BQWhCLEdBQTBCQSxRQUFRbkIsS0FBUixDQUFjLENBQWQsRUFBaUJ1SCxTQUFqQixDQUExQjs7QUFFQSxTQUFLckQsVUFBTCxDQUFnQixLQUFoQjs7QUFFQSxTQUFLeEMsVUFBTCxDQUFnQlAsT0FBaEIsR0FBMEJBLFFBQVFuQixLQUFSLENBQWN1SCxTQUFkLENBQTFCOztBQUVBLFNBQUtyRCxVQUFMLENBQWdCLEtBQWhCLEVBQXVCTSxpQkFBdkI7O0FBRUEsU0FBSzlDLFVBQUwsQ0FBZ0JQLE9BQWhCLEdBQTBCMEcsaUJBQWlCaFAsTUFBakIsQ0FBd0JpUCxpQkFBeEIsQ0FBMUI7QUFDRDs7QUFFRHpELHVCQUFzQmtELFNBQXRCLEVBQWlDO0FBQy9CLFVBQU0sRUFBRXBHLE9BQUYsRUFBV3dDLElBQVgsS0FBb0IsS0FBS2xDLFVBQS9COztBQUVBLFVBQU0rRixVQUFVRCxjQUFjLENBQWQsR0FBa0IsS0FBS0Usb0JBQUwsQ0FBMEJ0RyxRQUFRLENBQVIsQ0FBMUIsQ0FBbEIsR0FBMERBLFFBQVFvRyxZQUFZLENBQXBCLEVBQXVCeEMsR0FBakc7QUFDQSxVQUFNMkMsU0FBU3ZHLFFBQVFvRyxTQUFSLEVBQW1CeEMsR0FBbEM7QUFDQSxVQUFNNEMsYUFBYXBDLEtBQUtRLEdBQUwsQ0FBU3lCLFVBQVVFLE1BQW5CLEtBQThCLElBQUkvRCxLQUFLMEIsaUJBQTFEOztBQUVBLFFBQUlzQyxVQUFKLEVBQWdCO0FBQ2QsVUFBSSxDQUFDeEcsUUFBUW9HLFNBQVIsRUFBbUJLLE9BQXhCLEVBQWlDO0FBQy9CekcsZ0JBQVFvRyxTQUFSLEVBQW1CSyxPQUFuQixHQUE2QjtBQUMzQkQsc0JBQVk7QUFEZSxTQUE3QjtBQUdELE9BSkQsTUFJTztBQUNMeEcsZ0JBQVFvRyxTQUFSLEVBQW1CSyxPQUFuQixDQUEyQkQsVUFBM0IsR0FBd0MsSUFBeEM7QUFDRDtBQUNELGFBQU8sS0FBS3JELFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBUDtBQUNEOztBQUVELFVBQU11RCxtQkFBbUIxRyxRQUFRbkIsS0FBUixDQUFjLENBQWQsRUFBaUJ1SCxTQUFqQixDQUF6QjtBQUNBLFVBQU1PLG9CQUFvQjNHLFFBQVFuQixLQUFSLENBQWN1SCxTQUFkLENBQTFCO0FBQ0EsVUFBTTNDLGNBQWN6RCxRQUFRLENBQVIsQ0FBcEI7O0FBRUEsVUFBTTRHLGVBQWVELGtCQUFrQixDQUFsQixDQUFyQjtBQUNBLFVBQU1FLG9CQUFvQkQsYUFBYWhELEdBQWIsR0FBbUJILFlBQVlHLEdBQXpEO0FBQ0EsVUFBTVAsb0JBQW9CSSxZQUFZZ0QsT0FBWixJQUF1QmhELFlBQVlnRCxPQUFaLENBQW9CckgsS0FBcEIsR0FBNEJ5SCxpQkFBbkQsR0FBdUVwRCxZQUFZZ0QsT0FBWixDQUFvQnJILEtBQTNGLEdBQW1HLElBQTdIOztBQUVBLFNBQUtrQixVQUFMLENBQWdCTixPQUFoQixHQUEwQjBHLGdCQUExQjs7QUFFQSxTQUFLdkQsVUFBTCxDQUFnQixLQUFoQjs7QUFFQSxTQUFLN0MsVUFBTCxDQUFnQk4sT0FBaEIsR0FBMEIyRyxpQkFBMUI7O0FBRUEsU0FBS3hELFVBQUwsQ0FBZ0IsS0FBaEIsRUFBdUJFLGlCQUF2Qjs7QUFFQSxTQUFLL0MsVUFBTCxDQUFnQk4sT0FBaEIsR0FBMEIwRyxpQkFBaUJoUCxNQUFqQixDQUF3QmlQLGlCQUF4QixDQUExQjtBQUNEOztBQUVEdEUsbUJBQWtCO0FBQ2hCO0FBQ0EsUUFBSSxFQUFDckMsU0FBU3NELFlBQVYsS0FBMEIsS0FBSy9DLFVBQW5DO0FBQ0EsUUFBSSxFQUFDUCxTQUFTeUYsWUFBVixLQUEwQixLQUFLbkYsVUFBbkM7O0FBRUEsUUFBSThCLHNCQUFzQixLQUExQjtBQUNBLFFBQUlELHNCQUFzQixLQUExQjs7QUFFQSxRQUFJLENBQUMsS0FBS1IsaUJBQU4sSUFBMkIyQixhQUFhekosTUFBNUMsRUFBb0Q7QUFDbEQsV0FBSzhILGlCQUFMLEdBQXlCakIsY0FBY29HLG9CQUFkLENBQW1DeEQsWUFBbkMsQ0FBekI7QUFDQWxCLDRCQUFzQixJQUF0QjtBQUNEOztBQUVELFFBQUksQ0FBQyxLQUFLVixpQkFBTixJQUEyQitELGFBQWE1TCxNQUE1QyxFQUFvRDtBQUNsRCxXQUFLNkgsaUJBQUwsR0FBeUJoQixjQUFjcUcsb0JBQWQsQ0FBbUN0QixZQUFuQyxDQUF6QixDQURrRCxDQUN3QjtBQUMxRXRELDRCQUFzQixJQUF0QjtBQUNEOztBQUVELFdBQU87QUFDTEMseUJBREs7QUFFTEQ7QUFGSyxLQUFQO0FBSUQ7O0FBRUQ7OztBQUdBSSx1QkFBc0JDLElBQXRCLEVBQTRCeEMsT0FBNUIsRUFBcUM7QUFDbkMsVUFBTWdILFVBQVV4RSxLQUFLOUksSUFBTCxLQUFjLE9BQTlCO0FBQ0EsVUFBTXVOLGtCQUFrQkQsVUFBVSxLQUFLdkYsb0JBQWYsR0FBc0MsS0FBS0Qsb0JBQW5FO0FBQ0EsVUFBTXNDLFdBQVdrRCxVQUFVLEtBQUtyRixpQkFBTCxDQUF1QmlDLEdBQWpDLEdBQXVDLEtBQUtsQyxpQkFBTCxDQUF1QmtDLEdBQS9FO0FBQ0EsVUFBTXNELHFCQUFxQkYsVUFBVSxLQUFLbkYsa0JBQUwsQ0FBd0JoSSxNQUFsQyxHQUEyQyxLQUFLK0gsa0JBQUwsQ0FBd0IvSCxNQUE5Rjs7QUFFQSxRQUFJLENBQUMySSxLQUFLMEIsaUJBQU4sSUFBMkIxQixLQUFLMEIsaUJBQUwsSUFBMEIsQ0FBckQsSUFBMERsTSxPQUFPQyxLQUFQLENBQWF1SyxLQUFLMEIsaUJBQWxCLENBQTlELEVBQW9HO0FBQ2xHLFVBQUlsRSxRQUFRbkcsTUFBUixJQUFrQixDQUF0QixFQUF5QjtBQUN2QixjQUFNb0wsVUFBVWpGLFFBQVFBLFFBQVFuRyxNQUFSLEdBQWlCLENBQXpCLEVBQTRCK0osR0FBNUM7O0FBRUFwQixhQUFLMEIsaUJBQUwsR0FBeUJFLEtBQUtDLEtBQUwsQ0FBVyxDQUFDWSxVQUFVbkIsUUFBWCxLQUF5Qm1ELGtCQUFrQkMsa0JBQW5CLEdBQXlDLENBQWpFLENBQVgsQ0FBekIsQ0FIdUIsQ0FHbUY7QUFDM0c7QUFDRixLQU5ELE1BTU8sSUFBSTFFLEtBQUswQixpQkFBVCxFQUE0QjtBQUNqQyxVQUFJbEUsUUFBUW5HLE1BQVIsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsY0FBTW9MLFVBQVVqRixRQUFRQSxRQUFRbkcsTUFBUixHQUFpQixDQUF6QixFQUE0QitKLEdBQTVDO0FBQ0EsY0FBTUUsV0FBVzlELFFBQVEsQ0FBUixFQUFXNEQsR0FBNUI7QUFDQSxjQUFNdUQsY0FBYyxDQUFDbEMsVUFBVW5CLFFBQVgsS0FBd0I5RCxRQUFRbkcsTUFBUixHQUFpQixDQUF6QyxDQUFwQjs7QUFFQTJJLGFBQUswQixpQkFBTCxHQUF5QkUsS0FBS0MsS0FBTCxDQUFXRCxLQUFLUSxHQUFMLENBQVNwQyxLQUFLMEIsaUJBQUwsR0FBeUJpRCxXQUFsQyxLQUFrRCxDQUFsRCxHQUFzRDNFLEtBQUswQixpQkFBM0QsR0FBK0VpRCxXQUExRixDQUF6QixDQUx1QixDQUswRztBQUNsSTtBQUNGO0FBQ0Y7O0FBRUQ7OztBQUdBN0UsdUJBQXNCO0FBQ3BCLFVBQU0sRUFBRWhDLFVBQUYsRUFBY0MsVUFBZCxLQUE2QixJQUFuQzs7QUFFQSxTQUFLaUIsb0JBQUwsSUFBNkJsQixXQUFXTixPQUFYLENBQW1CbkcsTUFBaEQ7QUFDQSxTQUFLNEgsb0JBQUwsSUFBNkJsQixXQUFXUCxPQUFYLENBQW1CbkcsTUFBaEQ7QUFDRDs7QUFFRDs7O0FBR0F1Tix5QkFBd0I7QUFDdEIsVUFBTSxFQUFFekYsaUJBQUYsRUFBcUJELGlCQUFyQixLQUEyQyxJQUFqRDs7QUFFQSxTQUFLcEIsVUFBTCxDQUFnQk4sT0FBaEIsR0FBMEIsS0FBS00sVUFBTCxDQUFnQk4sT0FBaEIsQ0FBd0JxSCxNQUF4QixDQUFnQ0MsTUFBRCxJQUFZO0FBQ25FLGFBQU9BLE9BQU8xRCxHQUFQLElBQWNsQyxrQkFBa0JrQyxHQUFoQyxLQUF3QyxLQUFLckMsWUFBTCxLQUFzQi9JLFNBQXRCLElBQW1DOE8sT0FBTzFELEdBQVAsR0FBYSxLQUFLckMsWUFBN0YsQ0FBUDtBQUNELEtBRnlCLENBQTFCOztBQUlBLFNBQUtoQixVQUFMLENBQWdCUCxPQUFoQixHQUEwQixLQUFLTyxVQUFMLENBQWdCUCxPQUFoQixDQUF3QnFILE1BQXhCLENBQWdDQyxNQUFELElBQVk7QUFDbkUsYUFBT0EsT0FBTzFELEdBQVAsSUFBY2pDLGtCQUFrQmlDLEdBQWhDLEtBQXdDLEtBQUt0QyxZQUFMLEtBQXNCOUksU0FBdEIsSUFBbUM4TyxPQUFPMUQsR0FBUCxHQUFhLEtBQUt0QyxZQUE3RixDQUFQO0FBQ0QsS0FGeUIsQ0FBMUI7QUFHRDs7QUFFRGdGLHVCQUFzQmdCLE1BQXRCLEVBQThCO0FBQzVCLFFBQUlBLE9BQU9iLE9BQVAsSUFBa0JhLE9BQU9iLE9BQVAsQ0FBZXJILEtBQXJDLEVBQTRDO0FBQzFDLGFBQU9rSSxPQUFPYixPQUFQLENBQWVySCxLQUFmLEdBQXVCLEtBQUttSSxPQUFuQztBQUNEO0FBQ0QsV0FBT0MsUUFBUDtBQUNEOztBQUVELFNBQU9yQixnQkFBUCxDQUF5Qm5HLE9BQXpCLEVBQWtDO0FBQ2hDLFFBQUlBLFFBQVFuRyxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLGFBQU9tRyxPQUFQO0FBQ0Q7O0FBRUQsV0FBT0EsUUFBUXlILElBQVIsQ0FBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUM1QixhQUFPRCxFQUFFOUQsR0FBRixHQUFRK0QsRUFBRS9ELEdBQWpCO0FBQ0QsS0FGTSxDQUFQO0FBR0Q7O0FBRUQ7Ozs7QUFJQSxTQUFPbUQsb0JBQVAsQ0FBNkIvRyxPQUE3QixFQUFzQztBQUNwQyxRQUFJLENBQUNBLE9BQUQsSUFBWUEsUUFBUW5HLE1BQVIsS0FBbUIsQ0FBbkMsRUFBc0M7QUFDcEMsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQsV0FBTzZHLGNBQWN5RixnQkFBZCxDQUErQm5HLE9BQS9CLEVBQXdDLENBQXhDLENBQVA7QUFDRDs7QUFFRCxTQUFPOEcsb0JBQVAsQ0FBNkI5RyxPQUE3QixFQUFzQztBQUNwQyxRQUFJLENBQUNBLFFBQVFuRyxNQUFiLEVBQXFCO0FBQ25CLGFBQU8sSUFBUDtBQUNEOztBQUVELFVBQU0rTixTQUFTNUgsUUFBUXlILElBQVIsQ0FBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVTtBQUNwQyxhQUFPRCxFQUFFOUQsR0FBRixHQUFRK0QsRUFBRS9ELEdBQWpCO0FBQ0QsS0FGYyxDQUFmOztBQUlBLFNBQUssSUFBSWpLLElBQUksQ0FBUixFQUFXYSxNQUFNb04sT0FBTy9OLE1BQTdCLEVBQXFDRixJQUFJYSxHQUF6QyxFQUE4Q2IsR0FBOUMsRUFBbUQ7QUFDakQsVUFBSWlPLE9BQU9qTyxDQUFQLEVBQVVrTyxVQUFkLEVBQTBCO0FBQ3hCLGVBQU9ELE9BQU9qTyxDQUFQLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBT2tLLGNBQVAsQ0FBdUJpRSxPQUF2QixFQUFnQ3JFLFdBQWhDLEVBQTZDO0FBQzNDLFFBQUlxRSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCO0FBQ0Q7QUFDRCxVQUFNdkIsU0FBUzlDLFlBQVlHLEdBQVosSUFBbUIsQ0FBbEM7QUFDQSxVQUFNbUUsUUFBUUQsVUFBVXZCLE1BQVYsSUFBb0IsSUFBcEIsSUFBNEJBLFNBQVN1QixPQUFULElBQW9CLElBQTlELENBTDJDLENBS3dCO0FBQ25FLFVBQU1FLFFBQVF2RSxZQUFZZ0QsT0FBWixJQUF1QmhELFlBQVlnRCxPQUFaLENBQW9Cd0IsV0FBekQ7O0FBRUEsV0FBT0YsU0FBU0MsS0FBaEI7QUFDRDs7QUFFRCxTQUFPckUsYUFBUCxDQUFzQjNELE9BQXRCLEVBQStCaUUsR0FBL0IsRUFBb0M7QUFDbEMsU0FBSyxJQUFJdEssSUFBSSxDQUFSLEVBQVdhLE1BQU13RixRQUFRbkcsTUFBOUIsRUFBc0NGLElBQUlhLEdBQTFDLEVBQStDYixHQUEvQyxFQUFvRDtBQUNsRCxZQUFNMk4sU0FBU3RILFFBQVFyRyxDQUFSLENBQWY7QUFDQTJOLGFBQU8xRCxHQUFQLElBQWNLLEdBQWQ7QUFDQSxVQUFJcUQsT0FBTzlDLEdBQVgsRUFBZ0I7QUFDZDhDLGVBQU85QyxHQUFQLElBQWNQLEdBQWQ7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQ7OztBQUdBLFNBQU9wQixrQkFBUCxDQUEyQjdDLE9BQTNCLEVBQW9DO0FBQ2xDLFFBQUl5QyxVQUFVLEtBQWQ7QUFDQSxRQUFJRSxhQUFhLENBQUMsQ0FBbEI7QUFDQSxTQUFLLElBQUloSixJQUFJLENBQVIsRUFBV2EsTUFBTXdGLFFBQVFuRyxNQUE5QixFQUFzQ0YsSUFBSWEsR0FBMUMsRUFBK0NiLEdBQS9DLEVBQW9EO0FBQ2xELFVBQUlxRyxRQUFRckcsQ0FBUixFQUFXOE0sT0FBWCxJQUFzQnpHLFFBQVFyRyxDQUFSLEVBQVc4TSxPQUFYLENBQW1CakUsSUFBN0MsRUFBbUQ7QUFDakRDLGtCQUFVLElBQVY7QUFDQUUscUJBQWFoSixDQUFiO0FBQ0E7QUFDRDtBQUNGOztBQUVELFdBQU87QUFDTDhJLGFBREs7QUFFTEU7QUFGSyxLQUFQO0FBSUQ7O0FBRUQsTUFBSXVGLE1BQUosR0FBYztBQUNaLFdBQU8sS0FBS0MsUUFBTCxDQUFjQyxXQUFkLENBQTBCLFFBQTFCLENBQVA7QUFDRDs7QUFFRCxNQUFJOUgsVUFBSixHQUFrQjtBQUNoQixRQUFJLEtBQUs0SCxNQUFULEVBQWlCO0FBQ2YsYUFBTyxLQUFLQSxNQUFMLENBQVk1SCxVQUFuQjtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSUMsVUFBSixHQUFrQjtBQUNoQixRQUFJLEtBQUsySCxNQUFULEVBQWlCO0FBQ2YsYUFBTyxLQUFLQSxNQUFMLENBQVkzSCxVQUFuQjtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBSWdILE9BQUosR0FBZTtBQUNiLFVBQU1jLFVBQVUsS0FBS0YsUUFBTCxDQUFjQyxXQUFkLENBQTBCLGFBQTFCLENBQWhCO0FBQ0EsUUFBSUMsT0FBSixFQUFhO0FBQ1gsYUFBT0EsUUFBUUMsUUFBZjtBQUNEO0FBQ0QsV0FBTyxDQUFQO0FBQ0Q7QUE3bUJpQjtrQkErbUJMNUgsYTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwbkJmLE1BQU02SCxNQUFOLENBQWE7QUFDWGxLLGNBQWFtSyxVQUFiLEVBQXlCO0FBQ3ZCLFNBQUtwSSxHQUFMLEdBQVcsUUFBWDtBQUNBLFNBQUtxSSxPQUFMLEdBQWVELFVBQWY7QUFDQSxTQUFLRSxZQUFMLEdBQW9CLENBQXBCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkgsV0FBVzlKLFVBQTlCO0FBQ0EsU0FBS2tLLFVBQUwsR0FBa0JKLFdBQVc5SixVQUFYLEdBQXdCLENBQTFDO0FBQ0EsU0FBS21LLFlBQUwsR0FBb0IsQ0FBcEI7QUFDQSxTQUFLQyxvQkFBTCxHQUE0QixDQUE1QjtBQUNEOztBQUVENUosWUFBVztBQUNULFNBQUt1SixPQUFMLEdBQWUsSUFBZjtBQUNEOztBQUVETSxxQkFBb0I7QUFDbEIsUUFBSUMsa0JBQWtCLEtBQUtMLFdBQUwsR0FBbUIsS0FBS0QsWUFBOUM7QUFDQSxRQUFJTSxtQkFBbUIsQ0FBdkIsRUFBMEI7QUFDeEI7QUFDRDs7QUFFRCxRQUFJQyxZQUFZN0UsS0FBSzhFLEdBQUwsQ0FBUyxDQUFULEVBQVlGLGVBQVosQ0FBaEI7QUFDQSxRQUFJRyxPQUFPLElBQUl4SyxVQUFKLENBQWUsQ0FBZixDQUFYO0FBQ0F3SyxTQUFLcFEsR0FBTCxDQUFTLEtBQUswUCxPQUFMLENBQWFXLFFBQWIsQ0FBc0IsS0FBS1YsWUFBM0IsRUFBeUMsS0FBS0EsWUFBTCxHQUFvQk8sU0FBN0QsQ0FBVDtBQUNBLFNBQUtKLFlBQUwsR0FBb0IsSUFBSVEsUUFBSixDQUFhRixLQUFLRyxNQUFsQixFQUEwQkMsU0FBMUIsQ0FBb0MsQ0FBcEMsQ0FBcEI7O0FBRUEsU0FBS2IsWUFBTCxJQUFxQk8sU0FBckI7QUFDQSxTQUFLSCxvQkFBTCxHQUE0QkcsWUFBWSxDQUF4QztBQUNEOztBQUVETyxXQUFVOUUsSUFBVixFQUFnQjtBQUNkLFFBQUkrRSxPQUFPckYsS0FBSzhFLEdBQUwsQ0FBUyxLQUFLSixvQkFBZCxFQUFvQ3BFLElBQXBDLENBQVgsQ0FEYyxDQUN1QztBQUNyRCxRQUFJZ0YsT0FBTyxLQUFLYixZQUFMLEtBQXVCLEtBQUtZLElBQXZDO0FBQ0EsUUFBSS9FLE9BQU8sRUFBWCxFQUFlO0FBQ2IsWUFBTSxJQUFJdkssS0FBSixDQUFVLHlDQUFWLENBQU47QUFDRDtBQUNELFNBQUsyTyxvQkFBTCxJQUE2QlcsSUFBN0I7QUFDQSxRQUFJLEtBQUtYLG9CQUFMLEdBQTRCLENBQWhDLEVBQW1DO0FBQ2pDLFdBQUtELFlBQUwsS0FBc0JZLElBQXRCO0FBQ0QsS0FGRCxNQUVPLElBQUksS0FBS2QsV0FBTCxHQUFtQixLQUFLRCxZQUF4QixHQUF1QyxDQUEzQyxFQUE4QztBQUNuRCxXQUFLSyxnQkFBTDtBQUNEOztBQUVEVSxXQUFPL0UsT0FBTytFLElBQWQ7QUFDQSxRQUFJQSxPQUFPLENBQVAsSUFBWSxLQUFLWCxvQkFBckIsRUFBMkM7QUFDekMsYUFBT1ksUUFBUUQsSUFBUixHQUFlLEtBQUtELFFBQUwsQ0FBY0MsSUFBZCxDQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU9DLElBQVA7QUFDRDtBQUNGOztBQUVEQyxhQUFZO0FBQ1YsV0FBTyxLQUFLSCxRQUFMLENBQWMsQ0FBZCxNQUFxQixDQUE1QjtBQUNEOztBQUVESSxhQUFZO0FBQ1YsV0FBTyxLQUFLSixRQUFMLENBQWMsQ0FBZCxDQUFQO0FBQ0Q7O0FBRURLLHFCQUFvQjtBQUNsQixRQUFJQyxTQUFKO0FBQ0EsU0FBS0EsWUFBWSxDQUFqQixFQUFvQkEsWUFBWSxLQUFLaEIsb0JBQXJDLEVBQTJEZ0IsV0FBM0QsRUFBd0U7QUFDdEUsVUFBSSxDQUFDLEtBQUtqQixZQUFMLEdBQXFCLGVBQWVpQixTQUFyQyxNQUFxRCxDQUF6RCxFQUE0RDtBQUMxRCxhQUFLakIsWUFBTCxLQUFzQmlCLFNBQXRCO0FBQ0EsYUFBS2hCLG9CQUFMLElBQTZCZ0IsU0FBN0I7QUFDQSxlQUFPQSxTQUFQO0FBQ0Q7QUFDRjtBQUNELFNBQUtmLGdCQUFMO0FBQ0EsV0FBT2UsWUFBWSxLQUFLRCxnQkFBTCxFQUFuQjtBQUNEOztBQUVERSxZQUFXO0FBQUU7QUFDWCxRQUFJQyxlQUFlLEtBQUtILGdCQUFMLEVBQW5CO0FBQ0EsV0FBTyxLQUFLTCxRQUFMLENBQWNRLGVBQWUsQ0FBN0IsSUFBa0MsQ0FBekM7QUFDRDs7QUFFREMsWUFBVztBQUFFO0FBQ1gsUUFBSS9SLFFBQVEsS0FBSzZSLE9BQUwsRUFBWjtBQUNBLFFBQUk3UixRQUFRLElBQVosRUFBa0I7QUFDaEIsYUFBUUEsUUFBUSxDQUFULEtBQWdCLENBQXZCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxDQUFDLENBQUQsSUFBTUEsVUFBVSxDQUFoQixDQUFQO0FBQ0Q7QUFDRjtBQXBGVTs7a0JBdUZFcVEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkZmOzs7Ozs7QUFDQSxNQUFNL0gsT0FBTixDQUFjO0FBQ1osU0FBTzBKLFdBQVAsQ0FBb0JaLE1BQXBCLEVBQTRCO0FBQzFCLFFBQUlBLE9BQU96UCxNQUFQLEdBQWdCeVAsT0FBTy9NLFFBQXZCLEdBQWtDLENBQXRDLEVBQXlDO0FBQ3ZDLGFBQU8sRUFBUDtBQUNEOztBQUVELFFBQUk0TixNQUFNYixPQUFPYyxRQUFqQjtBQUNBLFFBQUk3TixXQUFXK00sT0FBTy9NLFFBQXRCO0FBQ0EsUUFBSTROLElBQUlFLFFBQUosQ0FBYTlOLFFBQWIsTUFBMkIsQ0FBM0IsSUFDSDROLElBQUlHLFFBQUosQ0FBYS9OLFFBQWIsTUFBMkIsQ0FBM0IsSUFBZ0M0TixJQUFJSSxPQUFKLENBQVloTyxXQUFXLENBQXZCLE1BQThCLENBRC9ELEVBQ21FO0FBQ2pFLGFBQU9pRSxRQUFRZ0ssYUFBUixDQUFzQmxCLE1BQXRCLENBQVA7QUFDRCxLQUhELE1BR087QUFDTCxhQUFPOUksUUFBUWlLLFdBQVIsQ0FBb0JuQixNQUFwQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPa0IsYUFBUCxDQUFzQmxCLE1BQXRCLEVBQThCO0FBQzVCLFFBQUlvQixPQUFPLEVBQVg7QUFDQSxRQUFJbk8sV0FBV2lFLFFBQVFtSyx1QkFBUixDQUFnQ3JCLE1BQWhDLENBQWY7QUFDQSxRQUFJbEssUUFBUTdDLFNBQVNxTyxHQUFyQjtBQUNBLFFBQUlDLE1BQU16TCxLQUFWO0FBQ0EsV0FBT0EsUUFBUWtLLE9BQU96UCxNQUFQLEdBQWdCLENBQS9CLEVBQWtDO0FBQ2hDLFVBQUlpUixTQUFTeEIsT0FBT0EsTUFBUCxDQUFjekssS0FBZCxDQUFvQk8sS0FBcEIsRUFBMkJBLFFBQVE3QyxTQUFTd08sWUFBNUMsQ0FBYjtBQUNBLFVBQUl4TyxTQUFTcU8sR0FBVCxLQUFpQnRCLE9BQU8vTSxRQUE1QixFQUFzQztBQUNwQytNLGVBQU8wQixJQUFQLENBQVl6TyxTQUFTd08sWUFBckI7QUFDRDtBQUNEeE8saUJBQVdpRSxRQUFRbUssdUJBQVIsQ0FBZ0NyQixNQUFoQyxDQUFYO0FBQ0F1QixZQUFNdE8sU0FBU3FPLEdBQWY7QUFDQSxVQUFJSyxPQUFPLElBQUl0TSxVQUFKLENBQWUySyxPQUFPQSxNQUFQLENBQWN6SyxLQUFkLENBQW9CTyxRQUFRMEwsT0FBT3BNLFVBQW5DLEVBQStDbU0sR0FBL0MsQ0FBZixDQUFYO0FBQ0EsVUFBSUssT0FBTyxFQUFDSixNQUFELEVBQVNHLElBQVQsRUFBWDtBQUNBekssY0FBUTJLLFVBQVIsQ0FBbUJELElBQW5CO0FBQ0FSLFdBQUs1USxJQUFMLENBQVVvUixJQUFWO0FBQ0E1QixhQUFPMEIsSUFBUCxDQUFZSCxNQUFNdkIsT0FBTy9NLFFBQXpCO0FBQ0E2QyxjQUFReUwsR0FBUjtBQUNEO0FBQ0QsV0FBT0gsSUFBUDtBQUNEOztBQUVELFNBQU9ELFdBQVAsQ0FBb0JuQixNQUFwQixFQUE0QjtBQUMxQixRQUFJb0IsT0FBTyxFQUFYO0FBQ0EsV0FBT3BCLE9BQU8vTSxRQUFQLEdBQWtCK00sT0FBT3pQLE1BQVAsR0FBZ0IsQ0FBekMsRUFBNEM7QUFDMUMsVUFBSUEsU0FBU3lQLE9BQU9jLFFBQVAsQ0FBZ0JDLFFBQWhCLENBQXlCZixPQUFPL00sUUFBaEMsQ0FBYjtBQUNBLFVBQUkrTSxPQUFPelAsTUFBUCxHQUFnQnlQLE9BQU8vTSxRQUF2QixJQUFtQzFDLE1BQXZDLEVBQStDO0FBQzdDLFlBQUlpUixTQUFTeEIsT0FBT0EsTUFBUCxDQUFjekssS0FBZCxDQUFvQnlLLE9BQU8vTSxRQUEzQixFQUFxQytNLE9BQU8vTSxRQUFQLEdBQWtCLENBQXZELENBQWI7QUFDQStNLGVBQU8wQixJQUFQLENBQVksQ0FBWjtBQUNBLFlBQUlDLE9BQU8zQixPQUFPQSxNQUFQLENBQWN6SyxLQUFkLENBQW9CeUssT0FBTy9NLFFBQTNCLEVBQXFDK00sT0FBTy9NLFFBQVAsR0FBa0IxQyxNQUF2RCxDQUFYO0FBQ0F5UCxlQUFPMEIsSUFBUCxDQUFZblIsTUFBWjtBQUNBLFlBQUlxUixPQUFPLEVBQUNKLE1BQUQsRUFBU0csSUFBVCxFQUFYO0FBQ0F6SyxnQkFBUTJLLFVBQVIsQ0FBbUJELElBQW5CO0FBQ0FSLGFBQUs1USxJQUFMLENBQVVvUixJQUFWO0FBQ0QsT0FSRCxNQVFPO0FBQ0w7QUFDRDtBQUNGO0FBQ0QsV0FBT1IsSUFBUDtBQUNEOztBQUVELFNBQU9TLFVBQVAsQ0FBbUJELElBQW5CLEVBQXlCO0FBQ3ZCLFFBQUl4UixPQUFPd1IsS0FBS0QsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUExQjtBQUNBLFlBQVF2UixJQUFSO0FBQ0UsV0FBSyxDQUFMO0FBQ0U7QUFDQXdSLGFBQUtFLEdBQUwsR0FBVyxJQUFYO0FBQ0E7QUFDRixXQUFLLENBQUw7QUFDRTtBQUNBRixhQUFLRyxHQUFMLEdBQVcsSUFBWDtBQUNBO0FBQ0YsV0FBSyxDQUFMO0FBQ0U7QUFDQTtBQUNGLFdBQUssQ0FBTDtBQUNFO0FBQ0FILGFBQUtJLEdBQUwsR0FBVzdLLGNBQVU4SyxRQUFWLENBQW1CTCxLQUFLRCxJQUF4QixDQUFYO0FBQ0E7QUFDRixXQUFLLENBQUw7QUFDRTtBQUNBQyxhQUFLTSxHQUFMLEdBQVcsSUFBWDtBQUNBO0FBQ0YsV0FBSyxDQUFMO0FBQ0U7QUFDQTtBQUNGO0FBQ0U7QUF4Qko7QUEwQkQ7O0FBRUQsU0FBT2IsdUJBQVAsQ0FBZ0NyQixNQUFoQyxFQUF3QztBQUN0QztBQUNBLFFBQUlzQixNQUFNdEIsT0FBTy9NLFFBQWpCO0FBQ0EsUUFBSXdPLGVBQWUsQ0FBbkI7QUFDQSxXQUFPQSxpQkFBaUIsQ0FBakIsSUFBc0JBLGlCQUFpQixDQUF2QyxJQUE0Q0gsTUFBTXRCLE9BQU96UCxNQUFQLEdBQWdCLENBQXpFLEVBQTRFO0FBQzFFLFVBQUl5UCxPQUFPYyxRQUFQLENBQWdCRSxRQUFoQixDQUF5Qk0sR0FBekIsTUFBa0MsQ0FBdEMsRUFBeUM7QUFDdkMsWUFBSXRCLE9BQU9jLFFBQVAsQ0FBZ0JFLFFBQWhCLENBQXlCTSxNQUFNLENBQS9CLE1BQXNDLENBQTFDLEVBQTZDO0FBQzNDO0FBQ0FHLHlCQUFlLENBQWY7QUFDRCxTQUhELE1BR08sSUFBSXpCLE9BQU9jLFFBQVAsQ0FBZ0JHLE9BQWhCLENBQXdCSyxNQUFNLENBQTlCLE1BQXFDLENBQXpDLEVBQTRDO0FBQ2pERyx5QkFBZSxDQUFmO0FBQ0QsU0FGTSxNQUVBO0FBQ0xIO0FBQ0Q7QUFDRixPQVRELE1BU087QUFDTEE7QUFDRDtBQUNGOztBQUVELFFBQUlBLFFBQVF0QixPQUFPelAsTUFBUCxHQUFnQixDQUE1QixFQUErQjtBQUM3QixVQUFJeVAsT0FBT2MsUUFBUCxDQUFnQkUsUUFBaEIsQ0FBeUJNLEdBQXpCLE1BQWtDLENBQXRDLEVBQXlDO0FBQ3ZDLFlBQUl0QixPQUFPYyxRQUFQLENBQWdCRSxRQUFoQixDQUF5Qk0sTUFBTSxDQUEvQixNQUFzQyxDQUExQyxFQUE2QztBQUMzQztBQUNBRyx5QkFBZSxDQUFmO0FBQ0Q7QUFDRixPQUxELE1BS087QUFDTEg7QUFDQSxZQUFJdEIsT0FBT2MsUUFBUCxDQUFnQkUsUUFBaEIsQ0FBeUJNLEdBQXpCLE1BQWtDLENBQWxDLElBQXVDdEIsT0FBT2MsUUFBUCxDQUFnQkcsT0FBaEIsQ0FBd0JLLEdBQXhCLE1BQWlDLENBQTVFLEVBQStFO0FBQzdFO0FBQ0FHLHlCQUFlLENBQWY7QUFDRCxTQUhELE1BR087QUFDTEgsZ0JBQU10QixPQUFPelAsTUFBYjtBQUNEO0FBQ0Y7QUFDRjtBQUNELFdBQU8sRUFBQytRLEdBQUQsRUFBTUcsWUFBTixFQUFQO0FBQ0Q7O0FBRUQsU0FBT1UsT0FBUCxDQUFnQkgsR0FBaEIsRUFBcUJFLEdBQXJCLEVBQTBCO0FBQ3hCLFFBQUk3TixNQUFNLElBQUlnQixVQUFKLENBQWUyTSxJQUFJNU0sVUFBSixHQUFpQjhNLElBQUk5TSxVQUFyQixHQUFrQyxFQUFqRCxDQUFWO0FBQ0FmLFFBQUksQ0FBSixJQUFTLElBQVQ7QUFDQUEsUUFBSSxDQUFKLElBQVMyTixJQUFJLENBQUosQ0FBVDtBQUNBM04sUUFBSSxDQUFKLElBQVMyTixJQUFJLENBQUosQ0FBVDtBQUNBM04sUUFBSSxDQUFKLElBQVMyTixJQUFJLENBQUosQ0FBVDtBQUNBM04sUUFBSSxDQUFKLElBQVMsR0FBVDtBQUNBQSxRQUFJLENBQUosSUFBUyxHQUFUOztBQUVBLFFBQUlhLFNBQVMsQ0FBYjs7QUFFQWIsUUFBSTVFLEdBQUosQ0FBUSxJQUFJNEYsVUFBSixDQUFlLENBQUUyTSxJQUFJNU0sVUFBSixLQUFtQixDQUFwQixHQUF5QixJQUExQixFQUFnQzRNLElBQUk1TSxVQUFKLEdBQWlCLElBQWpELENBQWYsQ0FBUixFQUFnRkYsTUFBaEY7QUFDQUEsY0FBVSxDQUFWO0FBQ0FiLFFBQUk1RSxHQUFKLENBQVF1UyxHQUFSLEVBQWE5TSxNQUFiO0FBQ0FBLGNBQVU4TSxJQUFJNU0sVUFBZDs7QUFFQWYsUUFBSWEsTUFBSixJQUFjLENBQWQ7QUFDQUE7O0FBRUFiLFFBQUk1RSxHQUFKLENBQVEsSUFBSTRGLFVBQUosQ0FBZSxDQUFFNk0sSUFBSTlNLFVBQUosS0FBbUIsQ0FBcEIsR0FBeUIsSUFBMUIsRUFBZ0M4TSxJQUFJOU0sVUFBSixHQUFpQixJQUFqRCxDQUFmLENBQVIsRUFBZ0ZGLE1BQWhGO0FBQ0FBLGNBQVUsQ0FBVjtBQUNBYixRQUFJNUUsR0FBSixDQUFReVMsR0FBUixFQUFhaE4sTUFBYjtBQUNBLFdBQU9iLEdBQVA7QUFDRDtBQXBKVzs7a0JBdUpDNkMsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEpmOzs7Ozs7QUFFQSxNQUFNa0wsU0FBTixDQUFnQjtBQUNkLFNBQU9DLFVBQVAsQ0FBbUJuRCxVQUFuQixFQUErQjtBQUM3QixRQUFJb0QsTUFBTXBELFVBQVY7QUFDQSxRQUFJcUQsWUFBWUQsSUFBSWxOLFVBQXBCO0FBQ0EsUUFBSW9OLE1BQU0sSUFBSW5OLFVBQUosQ0FBZWtOLFNBQWYsQ0FBVjtBQUNBLFFBQUlFLFNBQVMsQ0FBYjs7QUFFQSxTQUFLLElBQUlwUyxJQUFJLENBQWIsRUFBZ0JBLElBQUlrUyxTQUFwQixFQUErQmxTLEdBQS9CLEVBQW9DO0FBQ2xDLFVBQUlBLEtBQUssQ0FBVCxFQUFZO0FBQ1YsWUFBSWlTLElBQUlqUyxDQUFKLE1BQVcsSUFBWCxJQUFtQmlTLElBQUlqUyxJQUFJLENBQVIsTUFBZSxJQUFsQyxJQUEwQ2lTLElBQUlqUyxJQUFJLENBQVIsTUFBZSxJQUE3RCxFQUFtRTtBQUNqRTtBQUNEO0FBQ0Y7QUFDRG1TLFVBQUlDLE1BQUosSUFBY0gsSUFBSWpTLENBQUosQ0FBZDtBQUNBb1M7QUFDRDs7QUFFRCxXQUFPLElBQUlwTixVQUFKLENBQWVtTixJQUFJeEMsTUFBbkIsRUFBMkIsQ0FBM0IsRUFBOEJ5QyxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsU0FBT1IsUUFBUCxDQUFpQi9DLFVBQWpCLEVBQTZCO0FBQzNCLFFBQUl3RCxPQUFPTixVQUFVQyxVQUFWLENBQXFCbkQsVUFBckIsQ0FBWDtBQUNBLFFBQUl5RCxLQUFLLElBQUkxRCxnQkFBSixDQUFXeUQsSUFBWCxDQUFUOztBQUVBQyxPQUFHckMsUUFBSDtBQUNBLFFBQUlzQyxhQUFhRCxHQUFHckMsUUFBSCxFQUFqQjtBQUNBcUMsT0FBR3JDLFFBQUg7QUFDQSxRQUFJdUMsV0FBV0YsR0FBR3JDLFFBQUgsRUFBZjtBQUNBcUMsT0FBR2xDLE9BQUg7O0FBRUEsUUFBSXFDLGlCQUFpQlYsVUFBVVcsZ0JBQVYsQ0FBMkJILFVBQTNCLENBQXJCO0FBQ0EsUUFBSUksZUFBZVosVUFBVWEsY0FBVixDQUF5QkosUUFBekIsQ0FBbkI7QUFDQSxRQUFJSyxvQkFBb0IsQ0FBeEI7QUFDQSxRQUFJQyxnQkFBZ0IsR0FBcEI7QUFDQSxRQUFJQyxzQkFBc0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxHQUFkLENBQTFCO0FBQ0EsUUFBSUMsWUFBWSxDQUFoQjs7QUFFQSxRQUFJVCxlQUFlLEdBQWYsSUFBc0JBLGVBQWUsR0FBckMsSUFBNENBLGVBQWUsR0FBM0QsSUFDRkEsZUFBZSxHQURiLElBQ29CQSxlQUFlLEVBRG5DLElBQ3lDQSxlQUFlLEVBRHhELElBRUZBLGVBQWUsRUFGYixJQUVtQkEsZUFBZSxHQUZsQyxJQUV5Q0EsZUFBZSxHQUZ4RCxJQUdGQSxlQUFlLEdBSGIsSUFHb0JBLGVBQWUsR0FIdkMsRUFHNEM7QUFDMUNNLDBCQUFvQlAsR0FBR2xDLE9BQUgsRUFBcEI7QUFDQSxVQUFJeUMsc0JBQXNCLENBQTFCLEVBQTZCO0FBQzNCUCxXQUFHekMsUUFBSCxDQUFZLENBQVo7QUFDRDtBQUNELFVBQUlnRCxxQkFBcUIsQ0FBekIsRUFBNEI7QUFDMUJDLHdCQUFnQkMsb0JBQW9CRixpQkFBcEIsQ0FBaEI7QUFDRDs7QUFFREcsa0JBQVlWLEdBQUdsQyxPQUFILEtBQWUsQ0FBM0I7QUFDQWtDLFNBQUdsQyxPQUFIO0FBQ0FrQyxTQUFHekMsUUFBSCxDQUFZLENBQVo7QUFDQSxVQUFJeUMsR0FBR3RDLFFBQUgsRUFBSixFQUFtQjtBQUNqQixZQUFJaUQscUJBQXNCSixzQkFBc0IsQ0FBdkIsR0FBNEIsQ0FBNUIsR0FBZ0MsRUFBekQ7QUFDQSxhQUFLLElBQUk3UyxJQUFJLENBQWIsRUFBZ0JBLElBQUlpVCxrQkFBcEIsRUFBd0NqVCxHQUF4QyxFQUE2QztBQUMzQyxjQUFJc1MsR0FBR3RDLFFBQUgsRUFBSixFQUFtQjtBQUNqQixnQkFBSWhRLElBQUksQ0FBUixFQUFXO0FBQ1QrUix3QkFBVW1CLGdCQUFWLENBQTJCWixFQUEzQixFQUErQixFQUEvQjtBQUNELGFBRkQsTUFFTztBQUNMUCx3QkFBVW1CLGdCQUFWLENBQTJCWixFQUEzQixFQUErQixFQUEvQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7QUFDREEsT0FBR2xDLE9BQUg7QUFDQSxRQUFJK0MscUJBQXFCYixHQUFHbEMsT0FBSCxFQUF6QjtBQUNBLFFBQUkrQyx1QkFBdUIsQ0FBM0IsRUFBOEI7QUFDNUJiLFNBQUdsQyxPQUFIO0FBQ0QsS0FGRCxNQUVPLElBQUkrQyx1QkFBdUIsQ0FBM0IsRUFBOEI7QUFDbkNiLFNBQUd6QyxRQUFILENBQVksQ0FBWjtBQUNBeUMsU0FBR2hDLE9BQUg7QUFDQWdDLFNBQUdoQyxPQUFIO0FBQ0EsVUFBSThDLHdDQUF3Q2QsR0FBR2xDLE9BQUgsRUFBNUM7QUFDQSxXQUFLLElBQUlwUSxJQUFJLENBQWIsRUFBZ0JBLElBQUlvVCxxQ0FBcEIsRUFBMkRwVCxHQUEzRCxFQUFnRTtBQUM5RHNTLFdBQUdoQyxPQUFIO0FBQ0Q7QUFDRjtBQUNEZ0MsT0FBR2xDLE9BQUg7QUFDQWtDLE9BQUd6QyxRQUFILENBQVksQ0FBWjs7QUFFQSxRQUFJd0QsMEJBQTBCZixHQUFHbEMsT0FBSCxFQUE5QjtBQUNBLFFBQUlrRCxpQ0FBaUNoQixHQUFHbEMsT0FBSCxFQUFyQzs7QUFFQSxRQUFJbUQsc0JBQXNCakIsR0FBR3pDLFFBQUgsQ0FBWSxDQUFaLENBQTFCO0FBQ0EsUUFBSTBELHdCQUF3QixDQUE1QixFQUErQjtBQUM3QmpCLFNBQUd6QyxRQUFILENBQVksQ0FBWjtBQUNEO0FBQ0R5QyxPQUFHekMsUUFBSCxDQUFZLENBQVo7O0FBRUEsUUFBSTJELHlCQUF5QixDQUE3QjtBQUNBLFFBQUlDLDBCQUEwQixDQUE5QjtBQUNBLFFBQUlDLHdCQUF3QixDQUE1QjtBQUNBLFFBQUlDLDJCQUEyQixDQUEvQjs7QUFFQSxRQUFJQyxzQkFBc0J0QixHQUFHdEMsUUFBSCxFQUExQjtBQUNBLFFBQUk0RCxtQkFBSixFQUF5QjtBQUN2QkosK0JBQXlCbEIsR0FBR2xDLE9BQUgsRUFBekI7QUFDQXFELGdDQUEwQm5CLEdBQUdsQyxPQUFILEVBQTFCO0FBQ0FzRCw4QkFBd0JwQixHQUFHbEMsT0FBSCxFQUF4QjtBQUNBdUQsaUNBQTJCckIsR0FBR2xDLE9BQUgsRUFBM0I7QUFDRDs7QUFFRCxRQUFJeUQsWUFBWSxDQUFoQjtBQUFBLFFBQW1CQyxhQUFhLENBQWhDO0FBQ0EsUUFBSUMsTUFBTSxDQUFWO0FBQUEsUUFBYUMsWUFBWSxJQUF6QjtBQUFBLFFBQStCQyxVQUFVLENBQXpDO0FBQUEsUUFBNENDLFVBQVUsQ0FBdEQ7O0FBRUEsUUFBSUMsOEJBQThCN0IsR0FBR3RDLFFBQUgsRUFBbEM7QUFDQSxRQUFJbUUsMkJBQUosRUFBaUM7QUFDL0IsVUFBSTdCLEdBQUd0QyxRQUFILEVBQUosRUFBbUI7QUFBRTtBQUNuQixZQUFJb0UsbUJBQW1COUIsR0FBR3JDLFFBQUgsRUFBdkI7QUFDQSxZQUFJb0UsY0FBYyxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZLEVBQVosRUFBZ0IsRUFBaEIsRUFBb0IsRUFBcEIsRUFBd0IsRUFBeEIsRUFBNEIsRUFBNUIsRUFBZ0MsRUFBaEMsRUFBb0MsRUFBcEMsRUFBd0MsRUFBeEMsRUFBNEMsRUFBNUMsRUFBZ0QsR0FBaEQsRUFBcUQsQ0FBckQsRUFBd0QsQ0FBeEQsRUFBMkQsQ0FBM0QsQ0FBbEI7QUFDQSxZQUFJQyxjQUFjLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixFQUFoQixFQUFvQixFQUFwQixFQUF3QixFQUF4QixFQUE0QixFQUE1QixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQyxFQUF3QyxFQUF4QyxFQUE0QyxFQUE1QyxFQUFnRCxFQUFoRCxFQUFvRCxDQUFwRCxFQUF1RCxDQUF2RCxFQUEwRCxDQUExRCxDQUFsQjs7QUFFQSxZQUFJRixtQkFBbUIsQ0FBbkIsSUFBd0JBLG1CQUFtQixFQUEvQyxFQUFtRDtBQUNqRFAsc0JBQVlRLFlBQVlELG1CQUFtQixDQUEvQixDQUFaO0FBQ0FOLHVCQUFhUSxZQUFZRixtQkFBbUIsQ0FBL0IsQ0FBYjtBQUNELFNBSEQsTUFHTyxJQUFJQSxxQkFBcUIsR0FBekIsRUFBOEI7QUFDbkNQLHNCQUFZdkIsR0FBR3JDLFFBQUgsTUFBaUIsQ0FBakIsR0FBcUJxQyxHQUFHckMsUUFBSCxFQUFqQztBQUNBNkQsdUJBQWF4QixHQUFHckMsUUFBSCxNQUFpQixDQUFqQixHQUFxQnFDLEdBQUdyQyxRQUFILEVBQWxDO0FBQ0Q7QUFDRjs7QUFFRCxVQUFJcUMsR0FBR3RDLFFBQUgsRUFBSixFQUFtQjtBQUNqQnNDLFdBQUd0QyxRQUFIO0FBQ0Q7QUFDRCxVQUFJc0MsR0FBR3RDLFFBQUgsRUFBSixFQUFtQjtBQUNqQnNDLFdBQUd6QyxRQUFILENBQVksQ0FBWjtBQUNBLFlBQUl5QyxHQUFHdEMsUUFBSCxFQUFKLEVBQW1CO0FBQ2pCc0MsYUFBR3pDLFFBQUgsQ0FBWSxFQUFaO0FBQ0Q7QUFDRjtBQUNELFVBQUl5QyxHQUFHdEMsUUFBSCxFQUFKLEVBQW1CO0FBQ2pCc0MsV0FBR2xDLE9BQUg7QUFDQWtDLFdBQUdsQyxPQUFIO0FBQ0Q7QUFDRCxVQUFJa0MsR0FBR3RDLFFBQUgsRUFBSixFQUFtQjtBQUNqQixZQUFJdUUsb0JBQW9CakMsR0FBR3pDLFFBQUgsQ0FBWSxFQUFaLENBQXhCO0FBQ0EsWUFBSTJFLGFBQWFsQyxHQUFHekMsUUFBSCxDQUFZLEVBQVosQ0FBakI7QUFDQW1FLG9CQUFZMUIsR0FBR3RDLFFBQUgsRUFBWjs7QUFFQWlFLGtCQUFVTyxVQUFWO0FBQ0FOLGtCQUFVSyxvQkFBb0IsQ0FBOUI7QUFDQVIsY0FBTUUsVUFBVUMsT0FBaEI7QUFDRDtBQUNGOztBQUVELFFBQUlPLFdBQVcsQ0FBZjtBQUNBLFFBQUlaLGNBQWMsQ0FBZCxJQUFtQkMsZUFBZSxDQUF0QyxFQUF5QztBQUN2Q1csaUJBQVdaLFlBQVlDLFVBQXZCO0FBQ0Q7O0FBRUQsUUFBSVksY0FBYyxDQUFsQjtBQUFBLFFBQXFCQyxjQUFjLENBQW5DO0FBQ0EsUUFBSTlCLHNCQUFzQixDQUExQixFQUE2QjtBQUMzQjZCLG9CQUFjLENBQWQ7QUFDQUMsb0JBQWMsSUFBSXBCLG1CQUFsQjtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUlxQixTQUFVL0Isc0JBQXNCLENBQXZCLEdBQTRCLENBQTVCLEdBQWdDLENBQTdDO0FBQ0EsVUFBSWdDLFNBQVVoQyxzQkFBc0IsQ0FBdkIsR0FBNEIsQ0FBNUIsR0FBZ0MsQ0FBN0M7QUFDQTZCLG9CQUFjRSxNQUFkO0FBQ0FELG9CQUFjRSxVQUFVLElBQUl0QixtQkFBZCxDQUFkO0FBQ0Q7O0FBRUQsUUFBSXVCLGNBQWMsQ0FBQ3pCLDBCQUEwQixDQUEzQixJQUFnQyxFQUFsRDtBQUNBLFFBQUkwQixlQUFlLENBQUMsSUFBSXhCLG1CQUFMLEtBQTZCLENBQUNELGlDQUFpQyxDQUFsQyxJQUF1QyxFQUFwRSxDQUFuQjs7QUFFQXdCLG1CQUFlLENBQUN0Qix5QkFBeUJDLHVCQUExQixJQUFxRGlCLFdBQXBFO0FBQ0FLLG9CQUFnQixDQUFDckIsd0JBQXdCQyx3QkFBekIsSUFBcURnQixXQUFyRTs7QUFFQSxRQUFJSyxnQkFBZ0J2SyxLQUFLd0ssSUFBTCxDQUFVSCxjQUFjTCxRQUF4QixDQUFwQjs7QUFFQW5DLE9BQUcvTSxPQUFIO0FBQ0ErTSxTQUFLLElBQUw7O0FBRUEsV0FBTztBQUNMRyxzQkFBZ0JBLGNBRFg7QUFFTEUsb0JBQWNBLFlBRlQ7QUFHTEssaUJBQVdBLFNBSE47QUFJTEYscUJBQWVBLGFBSlY7QUFLTG9DLDRCQUFzQm5ELFVBQVVvRCxxQkFBVixDQUFnQ3JDLGFBQWhDLENBTGpCOztBQU9Mc0Msa0JBQVk7QUFDVnZMLGVBQU9tSyxTQURHO0FBRVZELGFBQUtBLEdBRks7QUFHVkcsaUJBQVNBLE9BSEM7QUFJVkQsaUJBQVNBO0FBSkMsT0FQUDs7QUFjTG9CLGlCQUFXO0FBQ1RDLGVBQU96QixTQURFO0FBRVQwQixnQkFBUXpCO0FBRkMsT0FkTjs7QUFtQkwwQixrQkFBWTtBQUNWRixlQUFPUixXQURHO0FBRVZTLGdCQUFRUjtBQUZFLE9BbkJQOztBQXdCTFUsb0JBQWM7QUFDWkgsZUFBT04sYUFESztBQUVaTyxnQkFBUVI7QUFGSTtBQXhCVCxLQUFQO0FBNkJEOztBQUVELFNBQU83QixnQkFBUCxDQUF5QlosRUFBekIsRUFBNkJ6USxLQUE3QixFQUFvQztBQUNsQyxRQUFJNlQsYUFBYSxDQUFqQjtBQUFBLFFBQW9CQyxhQUFhLENBQWpDO0FBQ0EsUUFBSUMsY0FBYyxDQUFsQjtBQUNBLFNBQUssSUFBSTVWLElBQUksQ0FBYixFQUFnQkEsSUFBSTZCLEtBQXBCLEVBQTJCN0IsR0FBM0IsRUFBZ0M7QUFDOUIsVUFBSTJWLGVBQWUsQ0FBbkIsRUFBc0I7QUFDcEJDLHNCQUFjdEQsR0FBR2hDLE9BQUgsRUFBZDtBQUNBcUYscUJBQWEsQ0FBQ0QsYUFBYUUsV0FBYixHQUEyQixHQUE1QixJQUFtQyxHQUFoRDtBQUNEO0FBQ0RGLG1CQUFjQyxlQUFlLENBQWhCLEdBQXFCRCxVQUFyQixHQUFrQ0MsVUFBL0M7QUFDRDtBQUNGOztBQUVELFNBQU9qRCxnQkFBUCxDQUF5QkgsVUFBekIsRUFBcUM7QUFDbkMsWUFBUUEsVUFBUjtBQUNFLFdBQUssRUFBTDtBQUNFLGVBQU8sVUFBUDtBQUNGLFdBQUssRUFBTDtBQUNFLGVBQU8sTUFBUDtBQUNGLFdBQUssRUFBTDtBQUNFLGVBQU8sVUFBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sTUFBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sUUFBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sU0FBUDtBQUNGLFdBQUssR0FBTDtBQUNFLGVBQU8sU0FBUDtBQUNGO0FBQ0UsZUFBTyxTQUFQO0FBaEJKO0FBa0JEOztBQUVELFNBQU9LLGNBQVAsQ0FBdUJKLFFBQXZCLEVBQWlDO0FBQy9CLFdBQU8sQ0FBQ0EsV0FBVyxFQUFaLEVBQWdCcUQsT0FBaEIsQ0FBd0IsQ0FBeEIsQ0FBUDtBQUNEOztBQUVELFNBQU9WLHFCQUFQLENBQThCVyxNQUE5QixFQUFzQztBQUNwQyxZQUFRQSxNQUFSO0FBQ0UsV0FBSyxHQUFMO0FBQ0UsZUFBTyxPQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxPQUFQO0FBQ0YsV0FBSyxHQUFMO0FBQ0UsZUFBTyxPQUFQO0FBQ0Y7QUFDRSxlQUFPLFNBQVA7QUFSSjtBQVVEOztBQUVELFNBQU9DLFdBQVAsQ0FBb0JDLFNBQXBCLEVBQStCO0FBQzdCLFFBQUluTixPQUFPLEVBQVg7QUFDQSxRQUFJbU4sYUFBYUEsVUFBVVIsVUFBM0IsRUFBdUM7QUFDckMzTSxXQUFLb04sVUFBTCxHQUFrQkQsVUFBVVIsVUFBVixDQUFxQkYsS0FBdkM7QUFDQXpNLFdBQUtxTixXQUFMLEdBQW1CRixVQUFVUixVQUFWLENBQXFCRCxNQUF4QztBQUNBMU0sV0FBS3NOLFlBQUwsR0FBb0JILFVBQVVQLFlBQVYsQ0FBdUJILEtBQTNDO0FBQ0F6TSxXQUFLdU4sYUFBTCxHQUFxQkosVUFBVVAsWUFBVixDQUF1QkYsTUFBNUM7QUFDRDs7QUFFRDFNLFNBQUt3TixPQUFMLEdBQWVMLFVBQVV2RCxjQUF6QjtBQUNBNUosU0FBS3lOLEtBQUwsR0FBYU4sVUFBVXJELFlBQXZCO0FBQ0E5SixTQUFLME4sUUFBTCxHQUFnQlAsVUFBVWhELFNBQTFCO0FBQ0FuSyxTQUFLMk4sWUFBTCxHQUFvQlIsVUFBVWxELGFBQTlCOztBQUVBakssU0FBSzROLFFBQUwsR0FBZ0I7QUFDZG5CLGFBQU9VLFVBQVVYLFNBQVYsQ0FBb0JDLEtBRGI7QUFFZEMsY0FBUVMsVUFBVVgsU0FBVixDQUFvQkU7QUFGZCxLQUFoQjs7QUFLQTFNLFNBQUtlLFNBQUwsR0FBaUJvTSxVQUFVWixVQUEzQjs7QUFFQSxRQUFJc0IsU0FBUzdOLEtBQUtlLFNBQUwsQ0FBZXNLLE9BQTVCO0FBQ0EsUUFBSXlDLFNBQVM5TixLQUFLZSxTQUFMLENBQWVxSyxPQUE1QjtBQUNBcEwsU0FBSzBCLGlCQUFMLEdBQXlCRSxLQUFLQyxLQUFMLENBQVc3QixLQUFLK04sU0FBTCxJQUFrQkYsU0FBU0MsTUFBM0IsQ0FBWCxDQUF6QjtBQUNBLFdBQU85TixJQUFQO0FBQ0Q7QUF2UmEsQyxDQUpoQjtBQUNBO2tCQTZSZWtKLFM7Ozs7Ozs7Ozs7Ozs7O0FDOVJmclQsT0FBT0MsT0FBUCxHQUFpQjtBQUNmO0FBQ0FrWSxjQUFZM1MsbUJBQU9BLENBQUMscUZBQVIsRUFBd0NDLE9BRnJDO0FBR2YyUyxhQUFXNVMsbUJBQU9BLENBQUMscUVBQVIsRUFBZ0NDLE9BSDVCO0FBSWY0UyxZQUFVN1MsbUJBQU9BLENBQUMsaUVBQVIsRUFBOEJDLE9BSnpCO0FBS2Y2UyxjQUFZOVMsbUJBQU9BLENBQUMsMkRBQVIsRUFBMkJDO0FBTHhCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBLE1BQU04UyxhQUFhO0FBQ2pCQyxVQUFRLENBRFM7QUFFakJDLFdBQVMsQ0FGUTtBQUdqQkMsVUFBUSxDQUhTO0FBSWpCQyxVQUFRLENBSlM7QUFLakJDLGFBQVcsQ0FMTTtBQU1qQkMsY0FBWSxDQU5LO0FBT2pCQyxnQkFBYyxFQVBHO0FBUWpCQyxRQUFNLEVBUlc7QUFTakJDLGVBQWE7O0FBR2Y7OztBQVptQixDQUFuQixDQWVlLE1BQU1DLFNBQU4sQ0FBZ0I7QUFDN0JqVCxnQkFBZTtBQUNiLFNBQUtHLE1BQUwsR0FBYyxDQUFkO0FBQ0EsU0FBSytTLFVBQUwsR0FBa0IsS0FBSy9TLE1BQXZCO0FBQ0Q7O0FBRURnVCxVQUFTaFAsSUFBVCxFQUFla0MsSUFBZixFQUFxQjtBQUNuQixRQUFJQSxPQUFPLENBQVgsRUFBYztBQUNaLFlBQU0sSUFBSXZLLEtBQUosQ0FBVSw4QkFBVixDQUFOO0FBQ0Q7QUFDRCxVQUFNc1gsV0FBVyxFQUFqQjtBQUNBLFVBQU1uVyxPQUFPLEtBQUtvVyxVQUFMLENBQWdCbFAsSUFBaEIsQ0FBYjtBQUNBLFVBQU10SyxRQUFRLEtBQUt3WixVQUFMLENBQWdCbFAsSUFBaEIsRUFBc0JrQyxPQUFPcEosS0FBS3FXLFFBQWxDLENBQWQ7QUFDQUYsYUFBU25XLEtBQUttRCxJQUFkLElBQXNCdkcsTUFBTXVHLElBQTVCOztBQUVBLFNBQUttVCxXQUFMO0FBQ0EsV0FBT0gsUUFBUDtBQUNEOztBQUVERyxnQkFBZTtBQUNiLFNBQUtwVCxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUsrUyxVQUFMLEdBQWtCLEtBQUsvUyxNQUF2QjtBQUNEOztBQUVEcVQsY0FBYXZJLE1BQWIsRUFBcUI7QUFDbkIsVUFBTXdJLEtBQUssSUFBSXpJLFFBQUosQ0FBYUMsTUFBYixFQUFxQixLQUFLaUksVUFBMUIsQ0FBWDtBQUNBLFVBQU1RLFNBQVNELEdBQUdFLFNBQUgsQ0FBYSxDQUFiLEVBQWdCLENBQUNDLG1CQUFqQixDQUFmO0FBQ0EsUUFBSUMsTUFBTSxFQUFWO0FBQ0EsUUFBSUgsU0FBUyxDQUFiLEVBQWdCO0FBQ2RHLFlBQU1DLG9CQUFLQyxNQUFMLENBQVksSUFBSXpULFVBQUosQ0FBZTJLLE1BQWYsRUFBdUIsS0FBS2lJLFVBQUwsR0FBa0IsQ0FBekMsRUFBNENRLE1BQTVDLENBQVosQ0FBTjtBQUNELEtBRkQsTUFFTztBQUNMRyxZQUFNLEVBQU47QUFDRDtBQUNELFFBQUl4TixPQUFPcU4sU0FBUyxDQUFwQjtBQUNBLFNBQUtSLFVBQUwsSUFBbUI3TSxJQUFuQjtBQUNBLFdBQU87QUFDTGpHLFlBQU15VCxHQUREO0FBRUxQLGdCQUFVSSxTQUFTO0FBRmQsS0FBUDtBQUlEOztBQUVETSxZQUFXL0ksTUFBWCxFQUFtQjVFLElBQW5CLEVBQXlCO0FBQ3ZCLFVBQU1vTixLQUFLLElBQUl6SSxRQUFKLENBQWFDLE1BQWIsRUFBcUIsS0FBS2lJLFVBQTFCLEVBQXNDN00sSUFBdEMsQ0FBWDtBQUNBLFFBQUk0TixLQUFLUixHQUFHUyxVQUFILENBQWMsQ0FBZCxFQUFpQixDQUFDTixtQkFBbEIsQ0FBVDtBQUNBLFVBQU1PLGFBQWFWLEdBQUd4SCxRQUFILENBQVksQ0FBWixFQUFlLENBQUMySCxtQkFBaEIsQ0FBbkI7QUFDQUssVUFBTUUsYUFBYSxFQUFiLEdBQWtCLElBQXhCOztBQUVBLFNBQUtqQixVQUFMLElBQW1CLEVBQW5CO0FBQ0EsV0FBTztBQUNMOVMsWUFBTSxJQUFJZ1UsSUFBSixDQUFTSCxFQUFULENBREQ7QUFFTFgsZ0JBQVU7QUFGTCxLQUFQO0FBSUQ7O0FBRURlLGNBQWFwSixNQUFiLEVBQXFCNUUsSUFBckIsRUFBMkI7QUFDekIsVUFBTXBKLE9BQU8sS0FBS3VXLFdBQUwsQ0FBaUJ2SSxNQUFqQixFQUF5QjVFLElBQXpCLENBQWI7QUFDQSxVQUFNeE0sUUFBUSxLQUFLd1osVUFBTCxDQUFnQnBJLE1BQWhCLEVBQXdCNUUsT0FBT3BKLEtBQUtxVyxRQUFwQyxDQUFkO0FBQ0EsV0FBTztBQUNMbFQsWUFBTTtBQUNKbkQsY0FBTUEsS0FBS21ELElBRFA7QUFFSnZHLGVBQU9BLE1BQU11RztBQUZULE9BREQ7QUFLTGtULGdCQUFVclcsS0FBS3FXLFFBQUwsR0FBZ0J6WixNQUFNeVosUUFMM0I7QUFNTGdCLGdCQUFVemEsTUFBTXlhO0FBTlgsS0FBUDtBQVFEOztBQUVEQyxrQkFBaUJ0SixNQUFqQixFQUF5QjtBQUN2QixVQUFNd0ksS0FBSyxJQUFJekksUUFBSixDQUFhQyxNQUFiLEVBQXFCLEtBQUtpSSxVQUExQixDQUFYO0FBQ0EsVUFBTVEsU0FBU0QsR0FBR3ZJLFNBQUgsQ0FBYSxDQUFiLEVBQWdCLENBQUMwSSxtQkFBakIsQ0FBZjtBQUNBLFFBQUlDLE1BQU0sRUFBVjtBQUNBLFFBQUlILFNBQVMsQ0FBYixFQUFnQjtBQUNkRyxZQUFNQyxvQkFBS0MsTUFBTCxDQUFZLElBQUl6VCxVQUFKLENBQWUySyxNQUFmLEVBQXVCLEtBQUtpSSxVQUFMLEdBQWtCLENBQXpDLEVBQTRDUSxNQUE1QyxDQUFaLENBQU47QUFDRCxLQUZELE1BRU87QUFDTEcsWUFBTSxFQUFOO0FBQ0Q7QUFDRDtBQUNBLFNBQUtYLFVBQUwsSUFBbUJRLFNBQVMsQ0FBNUI7QUFDQSxXQUFPO0FBQ0x0VCxZQUFNeVQsR0FERDtBQUVMUCxnQkFBVUksU0FBUztBQUZkLEtBQVA7QUFJRDs7QUFFRDs7O0FBR0FMLGFBQVlqVCxJQUFaLEVBQWtCaUcsSUFBbEIsRUFBd0I7QUFDdEIsUUFBSTRFLFNBQVMsSUFBSXVKLFdBQUosRUFBYjtBQUNBLFFBQUlwVSxnQkFBZ0JvVSxXQUFwQixFQUFpQztBQUMvQnZKLGVBQVM3SyxJQUFUO0FBQ0QsS0FGRCxNQUVPO0FBQ0w2SyxlQUFTN0ssS0FBSzZLLE1BQWQ7QUFDRDtBQUNELFVBQU07QUFDSnVILFlBREk7QUFFSkMsYUFGSTtBQUdKQyxZQUhJO0FBSUpDLFlBSkk7QUFLSkMsZUFMSTtBQU1KQyxnQkFOSTtBQU9KQyxrQkFQSTtBQVFKQyxVQVJJO0FBU0pDO0FBVEksUUFVRlQsVUFWSjtBQVdBLFVBQU1rQyxXQUFXLElBQUl6SixRQUFKLENBQWFDLE1BQWIsRUFBcUIsS0FBS2lJLFVBQTFCLEVBQXNDN00sSUFBdEMsQ0FBakI7QUFDQSxRQUFJaU8sV0FBVyxLQUFmO0FBQ0EsVUFBTWpaLE9BQU9vWixTQUFTQyxRQUFULENBQWtCLENBQWxCLENBQWI7QUFDQSxRQUFJdlUsU0FBUyxDQUFiO0FBQ0EsU0FBSytTLFVBQUwsSUFBbUIsQ0FBbkI7QUFDQSxRQUFJclosUUFBUSxJQUFaOztBQUVBLFlBQVF3QixJQUFSO0FBQ0UsV0FBS21YLE1BQUw7QUFBYTtBQUNYM1ksa0JBQVE0YSxTQUFTUCxVQUFULENBQW9CLENBQXBCLEVBQXVCLENBQUNOLG1CQUF4QixDQUFSO0FBQ0EsZUFBS1YsVUFBTCxJQUFtQixDQUFuQjtBQUNBL1Msb0JBQVUsQ0FBVjtBQUNBO0FBQ0Q7QUFDRCxXQUFLc1MsT0FBTDtBQUFjO0FBQ1osZ0JBQU1rQyxVQUFVRixTQUFTQyxRQUFULENBQWtCLENBQWxCLENBQWhCO0FBQ0E3YSxrQkFBUSxDQUFDLENBQUM4YSxPQUFWO0FBQ0EsZUFBS3pCLFVBQUwsSUFBbUIsQ0FBbkI7QUFDQS9TLG9CQUFVLENBQVY7QUFDQTtBQUNEO0FBQ0QsV0FBS3VTLE1BQUw7QUFBYTtBQUNYLGdCQUFNbUIsTUFBTSxLQUFLTCxXQUFMLENBQWlCdkksTUFBakIsQ0FBWjtBQUNBcFIsa0JBQVFnYSxJQUFJelQsSUFBWjtBQUNBRCxvQkFBVTBULElBQUlQLFFBQWQ7QUFDQTtBQUNEO0FBQ0QsV0FBS1gsTUFBTDtBQUFhO0FBQ1g5WSxrQkFBUSxFQUFSO0FBQ0EsY0FBSSthLGFBQWEsQ0FBakI7QUFDQSxjQUFJSCxTQUFTdkosU0FBVCxDQUFtQjdFLE9BQU8sQ0FBMUIsRUFBNkIsQ0FBQ3VOLG1CQUE5QixJQUFzQyxVQUExQyxFQUFzRDtBQUNwRGdCLHlCQUFhLENBQWI7QUFDRDtBQUNEO0FBQ0EsaUJBQU96VSxTQUFTa0csT0FBTyxDQUF2QixFQUEwQjtBQUN4QixrQkFBTXdPLFNBQVMsS0FBS1IsV0FBTCxDQUFpQnBKLE1BQWpCLEVBQXlCNUUsT0FBT2xHLE1BQVAsR0FBZ0J5VSxVQUF6QyxDQUFmO0FBQ0EsZ0JBQUlDLE9BQU9DLFdBQVgsRUFBd0I7QUFBRTtBQUFPO0FBQ2pDamIsa0JBQU1nYixPQUFPelUsSUFBUCxDQUFZbkQsSUFBbEIsSUFBMEI0WCxPQUFPelUsSUFBUCxDQUFZdkcsS0FBdEM7QUFDQXNHLHNCQUFVMFUsT0FBT3ZCLFFBQWpCO0FBQ0Q7QUFDRCxjQUFJblQsVUFBVWtHLE9BQU8sQ0FBckIsRUFBd0I7QUFDdEIsa0JBQU0wTyxPQUFPTixTQUFTdkosU0FBVCxDQUFtQi9LLFNBQVMsQ0FBNUIsRUFBK0IsQ0FBQ3lULG1CQUFoQyxJQUF3QyxVQUFyRDtBQUNBLGdCQUFJbUIsU0FBUyxDQUFiLEVBQWdCO0FBQ2QsbUJBQUs3QixVQUFMLElBQW1CLENBQW5CO0FBQ0EvUyx3QkFBVSxDQUFWO0FBQ0Q7QUFDRjtBQUNEO0FBQ0Q7QUFDRCxXQUFLeVMsU0FBTDtBQUFnQjtBQUNkL1ksa0JBQVEsRUFBUjtBQUNBc0csb0JBQVUsQ0FBVjtBQUNBLGVBQUsrUyxVQUFMLElBQW1CLENBQW5CO0FBQ0EsY0FBSTBCLGFBQWEsQ0FBakI7QUFDQSxjQUFJLENBQUNILFNBQVN2SixTQUFULENBQW1CN0UsT0FBTyxDQUExQixFQUE2QixDQUFDdU4sbUJBQTlCLElBQXNDLFVBQXZDLE1BQXVELENBQTNELEVBQThEO0FBQzVEZ0IseUJBQWEsQ0FBYjtBQUNEOztBQUVELGlCQUFPelUsU0FBU2tHLE9BQU8sQ0FBdkIsRUFBMEI7QUFDeEIsa0JBQU0yTyxTQUFTLEtBQUtYLFdBQUwsQ0FBaUJwSixNQUFqQixFQUF5QjVFLE9BQU9sRyxNQUFQLEdBQWdCeVUsVUFBekMsQ0FBZjtBQUNBLGdCQUFJSSxPQUFPRixXQUFYLEVBQXdCO0FBQUU7QUFBTztBQUNqQ2piLGtCQUFNbWIsT0FBTzVVLElBQVAsQ0FBWW5ELElBQWxCLElBQTBCK1gsT0FBTzVVLElBQVAsQ0FBWXZHLEtBQXRDO0FBQ0FzRyxzQkFBVTZVLE9BQU8xQixRQUFqQjtBQUNEO0FBQ0QsY0FBSW5ULFVBQVVrRyxPQUFPLENBQXJCLEVBQXdCO0FBQ3RCLGtCQUFNNE8sU0FBU1IsU0FBU3ZKLFNBQVQsQ0FBbUIvSyxTQUFTLENBQTVCLEVBQStCLENBQUN5VCxtQkFBaEMsSUFBd0MsVUFBdkQ7QUFDQSxnQkFBSXFCLFdBQVcsQ0FBZixFQUFrQjtBQUNoQjlVLHdCQUFVLENBQVY7QUFDQSxtQkFBSytTLFVBQUwsSUFBbUIsQ0FBbkI7QUFDRDtBQUNGO0FBQ0Q7QUFDRDs7QUFFRCxXQUFLTCxVQUFMO0FBQWlCO0FBQ2ZoWixrQkFBUSxJQUFSO0FBQ0F5YSxxQkFBVyxJQUFYO0FBQ0E7QUFDRDs7QUFFRCxXQUFLeEIsWUFBTDtBQUFtQjtBQUNqQmpaLGtCQUFRLEVBQVI7QUFDQSxnQkFBTXFiLFlBQVlULFNBQVN2SixTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQUMwSSxtQkFBdkIsQ0FBbEI7QUFDQXpULG9CQUFVLENBQVY7QUFDQSxlQUFLK1MsVUFBTCxJQUFtQixDQUFuQjtBQUNBLGVBQUssSUFBSTVYLElBQUksQ0FBYixFQUFnQkEsSUFBSTRaLFNBQXBCLEVBQStCNVosR0FBL0IsRUFBb0M7QUFDbEMsa0JBQU02WixTQUFTLEtBQUs5QixVQUFMLENBQWdCcEksTUFBaEIsRUFBd0I1RSxPQUFPbEcsTUFBL0IsQ0FBZjtBQUNBdEcsa0JBQU00QixJQUFOLENBQVcwWixPQUFPL1UsSUFBbEI7QUFDQUQsc0JBQVVnVixPQUFPN0IsUUFBakI7QUFDRDtBQUNEO0FBQ0Q7O0FBRUQsV0FBS1AsSUFBTDtBQUFXO0FBQ1QsZ0JBQU1xQyxPQUFPLEtBQUtwQixTQUFMLENBQWUvSSxNQUFmLEVBQXVCNUUsT0FBTyxDQUE5QixDQUFiO0FBQ0F4TSxrQkFBUXViLEtBQUtoVixJQUFiO0FBQ0FELG9CQUFVaVYsS0FBSzlCLFFBQWY7QUFDQTtBQUNEOztBQUVELFdBQUtOLFdBQUw7QUFBa0I7QUFDaEIsZ0JBQU1xQyxVQUFVLEtBQUtkLGVBQUwsQ0FBcUJ0SixNQUFyQixFQUE2QjVFLE9BQU8sQ0FBcEMsQ0FBaEI7QUFDQXhNLGtCQUFRd2IsUUFBUWpWLElBQWhCO0FBQ0FELG9CQUFVa1YsUUFBUS9CLFFBQWxCO0FBQ0E7QUFDRDs7QUFFRDtBQUFTO0FBQ1BuVCxtQkFBU2tHLElBQVQ7QUFDRDtBQXRHSDs7QUF5R0EsV0FBTztBQUNMakcsWUFBTXZHLEtBREQ7QUFFTHlaLGdCQUFVblQsTUFGTDtBQUdMbVUsZ0JBQVVBO0FBSEwsS0FBUDtBQUtEO0FBOU40QjtrQkFBVnJCLFM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCckI7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU10USxlQUFlQyxzQkFBT0QsWUFBNUI7O0FBRUEsTUFBTTJQLFVBQU4sQ0FBaUI7QUFDZnRTLGdCQUFlO0FBQ2IsU0FBS3NWLG9CQUFMLEdBQTRCLEtBQTVCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDRDs7QUFFRHpiLFNBQVE7QUFDTixTQUFLc0QsRUFBTCxDQUFRc0YsYUFBYThTLFdBQXJCLEVBQWtDLEtBQUtDLFVBQUwsQ0FBZ0I1WCxJQUFoQixDQUFxQixJQUFyQixDQUFsQztBQUNEOztBQUVEOzs7OztBQUtBLFNBQU82WCxTQUFQLENBQWtCdlYsSUFBbEIsRUFBd0I7QUFDdEIsV0FBTyxFQUFFQSxLQUFLLENBQUwsTUFBWSxJQUFaLElBQW9CQSxLQUFLLENBQUwsTUFBWSxJQUFoQyxJQUF3Q0EsS0FBSyxDQUFMLE1BQVksSUFBcEQsSUFBNERBLEtBQUssQ0FBTCxNQUFZLElBQTFFLENBQVA7QUFDRDs7QUFFRDs7OztBQUlBLFNBQU93VixXQUFQLENBQW9CQyxVQUFwQixFQUFnQztBQUM5QixVQUFNQyxTQUFTO0FBQ2JDLGdCQUFVLEtBREc7QUFFYkMsZ0JBQVU7QUFGRyxLQUFmOztBQUtBLFFBQUlILGFBQWEsT0FBTyxDQUF4QixFQUEyQjtBQUN6QkMsYUFBT0MsUUFBUCxHQUFrQixJQUFsQjtBQUNEOztBQUVELFFBQUlGLGFBQWEsT0FBTyxDQUF4QixFQUEyQjtBQUN6QkMsYUFBT0UsUUFBUCxHQUFrQixJQUFsQjtBQUNEOztBQUVELFdBQU9GLE1BQVA7QUFDRDs7QUFFREosZUFBYztBQUNaLFFBQUksQ0FBQyxLQUFLSixvQkFBVixFQUFnQztBQUM5QixVQUFJLEtBQUtXLFlBQUwsQ0FBa0J6YSxNQUFsQixHQUEyQixFQUEvQixFQUFtQztBQUNqQztBQUNEO0FBQ0QsWUFBTWlSLFNBQVMsS0FBS3dKLFlBQUwsQ0FBa0I3WCxLQUFsQixDQUF3QixFQUF4QixDQUFmO0FBQ0EsV0FBSzhYLGNBQUwsQ0FBb0J6SixNQUFwQjtBQUNBLFdBQUtpSixVQUFMLEdBTjhCLENBTVo7QUFDbkIsS0FQRCxNQU9PO0FBQ0wsVUFBSSxLQUFLTyxZQUFMLENBQWtCemEsTUFBbEIsR0FBMkIsRUFBL0IsRUFBbUM7QUFDakM7QUFDRDtBQUNELFVBQUkyYSxLQUFKOztBQUVBLFVBQUlDLFVBQVUsTUFBZCxDQU5LLENBTWdCO0FBQ3JCLFNBQUc7QUFDREQsZ0JBQVEsS0FBS0UsWUFBTCxFQUFSO0FBQ0QsT0FGRCxRQUVTRixTQUFTQyxZQUFZLENBRjlCOztBQUlBLFdBQUtoYixJQUFMLENBQVV1SCxhQUFhMlQsY0FBdkI7QUFDRDtBQUNGOztBQUVESixpQkFBZ0J6SixNQUFoQixFQUF3QjtBQUN0QixRQUFJLENBQUM2RixXQUFXcUQsU0FBWCxDQUFxQmxKLE1BQXJCLENBQUwsRUFBbUM7QUFDakMsV0FBS3JSLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxJQUFJemEsS0FBSixDQUFVLGtCQUFWLENBQXBDO0FBQ0EsV0FBSzRaLFVBQUw7QUFDRCxLQUhELE1BR087QUFDTCxXQUFLSixvQkFBTCxHQUE0QixJQUE1QjtBQUNBLFlBQU1rQixXQUFXbEUsV0FBV3NELFdBQVgsQ0FBdUJuSixPQUFPLENBQVAsQ0FBdkIsQ0FBakI7O0FBRUEsVUFBSStKLFNBQVNULFFBQWIsRUFBdUI7QUFDckIsYUFBS1UsY0FBTDtBQUNEOztBQUVELFVBQUlELFNBQVNSLFFBQWIsRUFBdUI7QUFDckIsYUFBS1UsY0FBTDtBQUNEO0FBQ0Y7QUFDRCxTQUFLaEIsVUFBTDtBQUNEOztBQUVEOzs7QUFHQWUsbUJBQWtCO0FBQ2hCLFNBQUtsQixTQUFMO0FBQ0EsUUFBSXJULGFBQWEsSUFBSXRDLDBCQUFKLEVBQWpCO0FBQ0FzQyxlQUFXaUMsSUFBWCxHQUFrQixJQUFJd1MsNkJBQUosRUFBbEI7QUFDQXpVLGVBQVdULEVBQVgsR0FBZ0JTLFdBQVdpQyxJQUFYLENBQWdCMUMsRUFBaEIsR0FBcUIsS0FBSzhULFNBQTFDOztBQUVBLFNBQUsxTCxNQUFMLENBQVkzSCxVQUFaLEdBQXlCQSxVQUF6QjtBQUNEOztBQUVEOzs7QUFHQXdVLG1CQUFrQjtBQUNoQixTQUFLbkIsU0FBTDtBQUNBLFFBQUl0VCxhQUFhLElBQUl0QywwQkFBSixFQUFqQjtBQUNBc0MsZUFBV2tDLElBQVgsR0FBa0IsSUFBSXlTLDZCQUFKLEVBQWxCO0FBQ0EzVSxlQUFXUixFQUFYLEdBQWdCUSxXQUFXa0MsSUFBWCxDQUFnQjFDLEVBQWhCLEdBQXFCLEtBQUs4VCxTQUExQzs7QUFFQSxTQUFLMUwsTUFBTCxDQUFZNUgsVUFBWixHQUF5QkEsVUFBekI7QUFDRDs7QUFFRDs7Ozs7Ozs7O0FBU0FvVSxpQkFBZ0I7QUFDZCxRQUFJLEtBQUtKLFlBQUwsQ0FBa0J6YSxNQUFsQixHQUEyQixFQUEvQixFQUFtQztBQUNqQyxhQUFPLElBQVA7QUFDRDtBQUNELFFBQUkyYSxRQUFRLEtBQUtVLGtCQUFMLEVBQVo7QUFDQSxRQUFJVixLQUFKLEVBQVc7QUFDVCxXQUFLVyxhQUFMLENBQW1CWCxLQUFuQjtBQUNEO0FBQ0QsV0FBT0EsS0FBUDtBQUNEOztBQUVEOzs7QUFHQVUsdUJBQXNCO0FBQ3BCLFFBQUkxVyxTQUFTLENBQWI7QUFDQSxRQUFJZ1csUUFBUSxFQUFaOztBQUVBLFFBQUlZLFVBQVUsS0FBS2QsWUFBTCxDQUFrQm5WLEtBQWxCLENBQXdCWCxNQUF4QixFQUFnQyxDQUFoQyxDQUFkO0FBQ0FBLGNBQVUsQ0FBVjs7QUFFQTtBQUNBZ1csVUFBTXhPLFFBQU4sR0FBaUIsQ0FBQ29QLFVBQVUsRUFBWCxNQUFtQixDQUFwQztBQUNBWixVQUFNWSxPQUFOLEdBQWdCQSxVQUFVLEVBQTFCOztBQUVBO0FBQ0FaLFVBQU16TyxRQUFOLEdBQWlCLEtBQUt1TyxZQUFMLENBQWtCblYsS0FBbEIsQ0FBd0JYLE1BQXhCLEVBQWdDLENBQWhDLENBQWpCO0FBQ0FBLGNBQVUsQ0FBVjs7QUFFQSxRQUFLZ1csTUFBTVksT0FBTixLQUFrQixDQUFsQixJQUF1QlosTUFBTVksT0FBTixLQUFrQixDQUF6QyxJQUE4Q1osTUFBTVksT0FBTixLQUFrQixFQUFoRSxJQUFzRVosTUFBTVksT0FBTixLQUFrQixFQUF6RixJQUNGLEtBQUtkLFlBQUwsQ0FBa0JuVixLQUFsQixDQUF3QixDQUF4QixFQUEyQixDQUEzQixNQUFrQyxDQURwQyxFQUN1QztBQUNyQyxVQUFJLEtBQUttVixZQUFMLElBQXFCLEtBQUtBLFlBQUwsQ0FBa0J6YSxNQUFsQixHQUEyQixDQUFwRCxFQUF1RDtBQUNyRCxhQUFLeWEsWUFBTCxDQUFrQjdYLEtBQWxCLENBQXdCLENBQXhCO0FBQ0Q7QUFDRCxXQUFLaEQsSUFBTCxDQUFVdUgsYUFBYTRULFdBQXZCLEVBQW9DLEtBQUt4VSxHQUF6QyxFQUE4QyxJQUFJakcsS0FBSixDQUFVLGFBQWFxYSxNQUFNWSxPQUE3QixDQUE5QyxFQUFxRixLQUFyRjtBQUNBLGFBQU8sSUFBUDtBQUNEOztBQUVELFFBQUksS0FBS2QsWUFBTCxDQUFrQnphLE1BQWxCLEdBQTJCMmEsTUFBTXpPLFFBQU4sR0FBaUIsRUFBaEQsRUFBb0Q7QUFDbEQsYUFBTyxJQUFQO0FBQ0Q7O0FBRUQ7QUFDQSxTQUFLdU8sWUFBTCxDQUFrQjdYLEtBQWxCLENBQXdCLENBQXhCOztBQUVBO0FBQ0EsUUFBSTRZLFlBQVksS0FBS2YsWUFBTCxDQUFrQm5WLEtBQWxCLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQWhCO0FBQ0EsU0FBS21WLFlBQUwsQ0FBa0I3WCxLQUFsQixDQUF3QixDQUF4Qjs7QUFFQTtBQUNBLFFBQUk2WSxlQUFlLEtBQUtoQixZQUFMLENBQWtCN1gsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBbkI7QUFDQSxRQUFJNlksZUFBZSxDQUFuQixFQUFzQjtBQUNwQkQsbUJBQWFDLGVBQWUsU0FBNUI7QUFDRDs7QUFFRGQsVUFBTTVRLEdBQU4sR0FBWXlSLFNBQVo7O0FBRUE7QUFDQSxTQUFLZixZQUFMLENBQWtCN1gsS0FBbEIsQ0FBd0IsQ0FBeEI7QUFDQSxXQUFPK1gsS0FBUDtBQUNEOztBQUVEVyxnQkFBZVgsS0FBZixFQUFzQjtBQUNwQixZQUFRQSxNQUFNWSxPQUFkO0FBQ0UsV0FBSyxFQUFMO0FBQ0UsYUFBS0csZ0JBQUwsQ0FBc0JmLEtBQXRCO0FBQ0E7QUFDRixXQUFLLENBQUw7QUFDRSxhQUFLZ0IsYUFBTCxDQUFtQmhCLEtBQW5CO0FBQ0E7QUFDRixXQUFLLENBQUw7QUFDRSxhQUFLaUIsY0FBTCxDQUFvQmpCLEtBQXBCO0FBQ0E7QUFDRixXQUFLLEVBQUw7QUFDRTtBQUNBLGFBQUtGLFlBQUwsQ0FBa0I3WCxLQUFsQixDQUF3QixDQUF4QjtBQUNBO0FBQ0Y7QUFDRSxhQUFLNlgsWUFBTCxDQUFrQjdYLEtBQWxCLENBQXdCLENBQXhCO0FBZko7QUFpQkQ7O0FBRUQ7Ozs7O0FBS0E4WSxtQkFBa0JmLEtBQWxCLEVBQXlCO0FBQ3ZCLFFBQUlsVSxhQUFhLEtBQUs0SCxNQUFMLENBQVk1SCxVQUE3QjtBQUNBLFFBQUlDLGFBQWEsS0FBSzJILE1BQUwsQ0FBWTNILFVBQTdCOztBQUVBLFFBQUk5QixPQUFPLEtBQUs2VixZQUFMLENBQWtCN1gsS0FBbEIsQ0FBd0IrWCxNQUFNek8sUUFBOUIsQ0FBWDs7QUFFQSxVQUFNMlAsT0FBTyxJQUFJcEUsbUJBQUosR0FBZ0JFLE9BQWhCLENBQXdCL1MsSUFBeEIsRUFBOEJBLEtBQUs1RSxNQUFuQyxDQUFiOztBQUVBLFVBQU04YixhQUFhLEtBQUt4TixRQUFMLENBQWN3TixVQUFkLEdBQTJCRCxPQUFPQSxLQUFLQyxVQUFaLEdBQXlCbmQsU0FBdkU7O0FBRUE7QUFDQSxTQUFLMlAsUUFBTCxDQUFjeU4sU0FBZCxDQUF3QnZRLFFBQXhCLEdBQW1Dc1EsV0FBV3RRLFFBQTlDO0FBQ0EsU0FBSzhDLFFBQUwsQ0FBY3lOLFNBQWQsQ0FBd0J4QixRQUF4QixHQUFtQ3VCLFdBQVd2QixRQUE5QztBQUNBLFNBQUtqTSxRQUFMLENBQWN5TixTQUFkLENBQXdCQyxRQUF4QixHQUFtQ0YsV0FBV3RCLFFBQTlDOztBQUVBLFFBQUl5QixXQUFXLEtBQUtDLGtCQUFMLENBQXdCdkIsTUFBTXpPLFFBQTlCLENBQWY7QUFDQSxRQUFJK1AsUUFBSixFQUFjO0FBQ1osV0FBS3JjLElBQUwsQ0FBVXVILGFBQWFnVixVQUF2QjtBQUNBLFdBQUtuQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJdlQsY0FBYyxDQUFDQSxXQUFXMlYsaUJBQTlCLEVBQWlEO0FBQy9DLFVBQUl6VCxPQUFPbEMsV0FBV2tDLElBQXRCO0FBQ0EsVUFBSW1ULFdBQVdPLGVBQWYsRUFBZ0M7QUFDOUIxVCxhQUFLMlQsVUFBTCxHQUFrQlIsV0FBV08sZUFBN0I7QUFDRDs7QUFFRCxVQUFJUCxXQUFXUyxhQUFmLEVBQThCO0FBQzVCNVQsYUFBSzFCLFlBQUwsR0FBb0I2VSxXQUFXUyxhQUEvQjtBQUNEOztBQUVELGNBQVFULFdBQVdPLGVBQW5CO0FBQ0UsYUFBSyxLQUFMO0FBQ0UxVCxlQUFLNlQsZUFBTCxHQUF1QixDQUF2QjtBQUNBO0FBQ0YsYUFBSyxLQUFMO0FBQ0U3VCxlQUFLNlQsZUFBTCxHQUF1QixDQUF2QjtBQUNBO0FBQ0YsYUFBSyxLQUFMO0FBQ0U3VCxlQUFLNlQsZUFBTCxHQUF1QixFQUF2QjtBQUNBO0FBVEo7QUFXRDtBQUNELFFBQUk5VixjQUFjLENBQUNBLFdBQVcwVixpQkFBOUIsRUFBaUQ7QUFDL0MsVUFBSXpULE9BQU9qQyxXQUFXaUMsSUFBdEI7QUFDQSxVQUFJLE9BQU9tVCxXQUFXVyxTQUFsQixLQUFnQyxRQUFwQyxFQUE4QztBQUM1QyxZQUFJaEcsU0FBU2xNLEtBQUtDLEtBQUwsQ0FBV3NSLFdBQVdXLFNBQVgsR0FBdUIsSUFBbEMsQ0FBYjtBQUNBLFlBQUloRyxTQUFTLENBQWIsRUFBZ0I7QUFDZCxjQUFJNUMsTUFBTTRDLFNBQVMsSUFBbkI7QUFDQSxjQUFJLENBQUM5TixLQUFLZSxTQUFWLEVBQXFCO0FBQ25CZixpQkFBS2UsU0FBTCxHQUFpQixFQUFqQjtBQUNEO0FBQ0RmLGVBQUtlLFNBQUwsQ0FBZUMsS0FBZixHQUF1QixJQUF2QjtBQUNBaEIsZUFBS2UsU0FBTCxDQUFlbUssR0FBZixHQUFxQkEsR0FBckI7QUFDQWxMLGVBQUtlLFNBQUwsQ0FBZXFLLE9BQWYsR0FBeUIwQyxNQUF6QjtBQUNBOU4sZUFBS2UsU0FBTCxDQUFlc0ssT0FBZixHQUF5QixJQUF6QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEMEksMkJBQTBCOVgsSUFBMUIsRUFBZ0M7QUFDOUIsUUFBSWQsTUFBTSxFQUFWO0FBQ0FBLFFBQUlzWSxpQkFBSixHQUF3QixJQUF4QjtBQUNBdFksUUFBSTZZLFVBQUosR0FBaUIvWCxLQUFLLENBQUwsTUFBWSxDQUE3QjtBQUNBZCxRQUFJOFksZ0JBQUosR0FBdUI5WSxJQUFJNlksVUFBM0I7QUFDQTdZLFFBQUkwWSxlQUFKLEdBQXVCLENBQUM1WCxLQUFLLENBQUwsSUFBVSxDQUFYLEtBQWlCLENBQWxCLEdBQXdCQSxLQUFLLENBQUwsTUFBWSxDQUExRDtBQUNBZCxRQUFJdVksZUFBSixHQUFzQixLQUFLUSxzQkFBTCxDQUE0Qi9ZLElBQUkwWSxlQUFoQyxDQUF0QjtBQUNBMVksUUFBSW1ELFlBQUosR0FBbUIsQ0FBQ3JDLEtBQUssQ0FBTCxJQUFVLEdBQVgsTUFBb0IsQ0FBdkM7QUFDQWQsUUFBSWdaLFdBQUosR0FBa0IsQ0FBQ2xZLEtBQUssQ0FBTCxJQUFVLENBQVgsTUFBa0IsQ0FBcEM7QUFDQWQsUUFBSWlaLGtCQUFKLEdBQXlCLENBQUNuWSxLQUFLLENBQUwsSUFBVSxDQUFYLE1BQWtCLENBQTNDO0FBQ0FkLFFBQUlrWixrQkFBSixHQUF5QnBZLEtBQUssQ0FBTCxJQUFVLENBQW5DOztBQUVBZCxRQUFJa0QsS0FBSixHQUFhLFdBQVVsRCxJQUFJNlksVUFBVyxFQUF0QztBQUNBLFFBQUlNLFlBQVlDLE9BQU9DLFNBQVAsQ0FBaUJGLFNBQWpCLENBQTJCRyxXQUEzQixFQUFoQjtBQUNBLFFBQUlDLHNCQUFKOztBQUVBLFFBQUlDLE1BQUo7QUFDQSxRQUFJQyxnQkFBZ0J6WixJQUFJMFksZUFBeEI7O0FBRUEsUUFBSVMsVUFBVU8sT0FBVixDQUFrQixTQUFsQixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDO0FBQ0EsVUFBSTFaLElBQUkwWSxlQUFKLElBQXVCLENBQTNCLEVBQThCO0FBQzVCMVksWUFBSTZZLFVBQUosR0FBaUIsQ0FBakI7QUFDQVcsaUJBQVMsSUFBSTNaLEtBQUosQ0FBVSxDQUFWLENBQVQ7QUFDQTBaLGlDQUF5QkUsZ0JBQWdCLENBQXpDO0FBQ0QsT0FKRCxNQUlPO0FBQUU7QUFDUHpaLFlBQUk2WSxVQUFKLEdBQWlCLENBQWpCO0FBQ0FXLGlCQUFTLElBQUkzWixLQUFKLENBQVUsQ0FBVixDQUFUO0FBQ0EwWixpQ0FBeUJFLGFBQXpCO0FBQ0Q7QUFDRixLQVhELE1BV08sSUFBSU4sVUFBVU8sT0FBVixDQUFrQixTQUFsQixNQUFpQyxDQUFDLENBQWxDLElBQXVDQyx1QkFBUUMsT0FBUixLQUFvQixRQUEvRCxFQUF5RTtBQUM5RTtBQUNBNVosVUFBSTZZLFVBQUosR0FBaUIsQ0FBakI7QUFDQVcsZUFBUyxJQUFJM1osS0FBSixDQUFVLENBQVYsQ0FBVDtBQUNBMFosK0JBQXlCRSxhQUF6QjtBQUNELEtBTE0sTUFLQTtBQUNMO0FBQ0E7QUFDQXpaLFVBQUk2WSxVQUFKLEdBQWlCLENBQWpCO0FBQ0FVLCtCQUF5QnZaLElBQUkwWSxlQUE3QjtBQUNBYyxlQUFTLElBQUkzWixLQUFKLENBQVUsQ0FBVixDQUFUOztBQUVBLFVBQUlHLElBQUkwWSxlQUFKLElBQXVCLENBQTNCLEVBQThCO0FBQzVCYSxpQ0FBeUJ2WixJQUFJMFksZUFBSixHQUFzQixDQUEvQztBQUNELE9BRkQsTUFFTyxJQUFJMVksSUFBSW1ELFlBQUosS0FBcUIsQ0FBekIsRUFBNEI7QUFBRTtBQUNuQ25ELFlBQUk2WSxVQUFKLEdBQWlCLENBQWpCO0FBQ0FXLGlCQUFTLElBQUkzWixLQUFKLENBQVUsQ0FBVixDQUFUO0FBQ0EwWixpQ0FBeUJ2WixJQUFJMFksZUFBN0I7QUFDRDtBQUNGOztBQUVEYyxXQUFPLENBQVAsSUFBWXhaLElBQUk2WSxVQUFKLElBQWtCLENBQTlCO0FBQ0FXLFdBQU8sQ0FBUCxLQUFhLENBQUN4WixJQUFJMFksZUFBSixHQUFzQixJQUF2QixNQUFpQyxDQUE5QztBQUNBYyxXQUFPLENBQVAsSUFBWSxDQUFDeFosSUFBSTBZLGVBQUosR0FBc0IsSUFBdkIsS0FBZ0MsQ0FBNUM7QUFDQWMsV0FBTyxDQUFQLEtBQWEsQ0FBQ3haLElBQUltRCxZQUFKLEdBQW1CLElBQXBCLEtBQTZCLENBQTFDO0FBQ0EsUUFBSW5ELElBQUk2WSxVQUFKLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCVyxhQUFPLENBQVAsS0FBYyxDQUFDRCx5QkFBeUIsSUFBMUIsTUFBb0MsQ0FBbEQ7QUFDQUMsYUFBTyxDQUFQLElBQVksQ0FBQ0QseUJBQXlCLElBQTFCLEtBQW1DLENBQS9DO0FBQ0E7QUFDQUMsYUFBTyxDQUFQLEtBQWMsS0FBSyxDQUFuQjtBQUNBQSxhQUFPLENBQVAsSUFBWSxDQUFaO0FBQ0Q7QUFDRHhaLFFBQUl3WixNQUFKLEdBQWFBLE1BQWI7QUFDQSxXQUFPeFosR0FBUDtBQUNEOztBQUVENlgsZ0JBQWVoQixLQUFmLEVBQXNCO0FBQ3BCLFFBQUlnRCxRQUFRLEtBQUt0UCxNQUFMLENBQVk1SCxVQUF4QjtBQUNBLFFBQUksQ0FBQ2tYLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBRUQsUUFBSWhWLE9BQU9nVixNQUFNaFYsSUFBakI7O0FBRUEsUUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVGdWLFlBQU1oVixJQUFOLEdBQWEsSUFBSXlTLDZCQUFKLEVBQWI7QUFDQXpTLGFBQU9nVixNQUFNaFYsSUFBYjtBQUNEOztBQUVELFFBQUlrVCxPQUFPLEtBQUtwQixZQUFMLENBQWtCN1gsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBWDs7QUFFQStYLFVBQU0vVixJQUFOLEdBQWEsS0FBSzZWLFlBQUwsQ0FBa0I3WCxLQUFsQixDQUF3QitYLE1BQU16TyxRQUFOLEdBQWlCLENBQXpDLENBQWI7O0FBRUEsUUFBSTBSLFNBQVMsQ0FBQy9CLE9BQU8sR0FBUixNQUFpQixDQUE5Qjs7QUFFQThCLFVBQU1DLE1BQU4sR0FBZUEsTUFBZjs7QUFFQSxRQUFJQSxXQUFXLEVBQWYsRUFBbUI7QUFDakIsV0FBS2hlLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxJQUFJemEsS0FBSixDQUFXLHlCQUF3QnNkLE1BQU8sRUFBMUMsQ0FBcEM7QUFDRDs7QUFFRCxRQUFJQSxXQUFXLEVBQVgsSUFBaUIsQ0FBQyxLQUFLQyxpQkFBM0IsRUFBOEM7QUFDNUNsVixXQUFLMlQsVUFBTCxHQUFrQixLQUFLd0IsNkJBQUwsQ0FBbUNqQyxJQUFuQyxDQUFsQjtBQUNBbFQsV0FBSzZULGVBQUwsR0FBdUIsQ0FBQ1gsT0FBTyxFQUFSLE1BQWdCLENBQXZDO0FBQ0FsVCxXQUFLb1YsVUFBTCxHQUFrQixDQUFDbEMsT0FBTyxDQUFSLE1BQWUsQ0FBakM7QUFDQWxULFdBQUsxQixZQUFMLEdBQW9CNFUsT0FBTyxDQUEzQjtBQUNBbFQsV0FBSzBCLGlCQUFMLEdBQXlCRSxLQUFLQyxLQUFMLENBQVcsT0FBTzdCLEtBQUtxVixlQUFaLEdBQThCclYsS0FBSytOLFNBQTlDLENBQXpCO0FBQ0Q7O0FBRUQsUUFBSXNILGtCQUFrQnJWLEtBQUtxVixlQUEzQjtBQUNBLFFBQUlDLHVCQUF1QnRWLEtBQUs2VCxlQUFoQztBQUNBLFFBQUluUyxvQkFBb0IxQixLQUFLMEIsaUJBQTdCOztBQUVBLFdBQU9zUSxNQUFNWSxPQUFiO0FBQ0EsUUFBSVUsV0FBVyxLQUFLQyxrQkFBTCxDQUF3QnZCLE1BQU16TyxRQUE5QixDQUFmOztBQUVBLFFBQUl5TyxNQUFNL1YsSUFBTixDQUFXLENBQVgsTUFBa0IsQ0FBdEIsRUFBeUI7QUFBRTtBQUN6QixVQUFJc1osWUFBWSxLQUFLeEIsd0JBQUwsQ0FBOEIvQixNQUFNL1YsSUFBcEMsQ0FBaEI7QUFDQW9aLHdCQUFrQkUsVUFBVTdCLGVBQVYsSUFBNkIxVCxLQUFLcVYsZUFBcEQ7QUFDQUMsNkJBQXVCQyxVQUFVMUIsZUFBVixJQUE2QjdULEtBQUs2VCxlQUF6RDtBQUNBblMsMEJBQW9CRSxLQUFLQyxLQUFMLENBQVcsT0FBT3dULGVBQVAsR0FBeUJyVixLQUFLK04sU0FBekMsQ0FBcEI7O0FBRUEvTixXQUFLMUIsWUFBTCxHQUFvQmlYLFVBQVVqWCxZQUE5QjtBQUNBMEIsV0FBSzJULFVBQUwsR0FBa0IwQixlQUFsQjtBQUNBclYsV0FBSzZULGVBQUwsR0FBdUJ5QixvQkFBdkI7QUFDQXRWLFdBQUswQixpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0ExQixXQUFLNkMsUUFBTCxHQUFnQixLQUFLOEMsUUFBTCxDQUFjeU4sU0FBZCxDQUF3QnZRLFFBQXhCLEdBQW1DN0MsS0FBSytOLFNBQXhEO0FBQ0EvTixXQUFLMlUsTUFBTCxHQUFjWSxVQUFVWixNQUF4QjtBQUNBM1UsV0FBS2dVLFVBQUwsR0FBa0J1QixVQUFVdkIsVUFBNUI7QUFDQWhVLFdBQUtpVSxnQkFBTCxHQUF3QnNCLFVBQVV0QixnQkFBbEM7O0FBRUEsWUFBTXVCLGFBQWEsS0FBSzdQLFFBQUwsQ0FBY3lOLFNBQWQsQ0FBd0JyVyxLQUEzQzs7QUFFQTtBQUNBeVksaUJBQVduWCxLQUFYLEdBQW1Ca1gsVUFBVWxYLEtBQTdCO0FBQ0FtWCxpQkFBV2xYLFlBQVgsR0FBMEJpWCxVQUFValgsWUFBcEM7QUFDQWtYLGlCQUFXN0IsVUFBWCxHQUF3QjBCLGVBQXhCO0FBQ0FHLGlCQUFXM0IsZUFBWCxHQUE2QjBCLFVBQVVELG9CQUF2Qzs7QUFFQSxVQUFJLEtBQUtqRSxVQUFMLElBQW1CLENBQUMsS0FBSzZELGlCQUE3QixFQUFnRDtBQUM5QyxhQUFLamUsSUFBTCxDQUFVdUgsYUFBYWlYLGVBQXZCLEVBQXdDLE9BQXhDO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBS3BFLFVBQUwsSUFBbUIsS0FBSzZELGlCQUE1QixFQUErQztBQUNwRCxhQUFLamUsSUFBTCxDQUFVdUgsYUFBYWlYLGVBQXZCLEVBQXdDLE9BQXhDO0FBQ0EsYUFBS3hlLElBQUwsQ0FBVXVILGFBQWFrWCxxQkFBdkI7QUFDQTtBQUNEO0FBQ0QsV0FBS1IsaUJBQUwsR0FBeUIsSUFBekI7O0FBRUEsV0FBS1MsV0FBTCxHQUFtQixJQUFuQjtBQUNELEtBakNELE1BaUNPO0FBQ0wsVUFBSSxLQUFLQSxXQUFULEVBQXNCO0FBQ3BCM0QsY0FBTS9OLE9BQU4sR0FBZ0I7QUFDZGpFLGdCQUFNZ1YsTUFBTWhWO0FBREUsU0FBaEI7QUFHQSxhQUFLMlYsV0FBTCxHQUFtQixLQUFuQjtBQUNEOztBQUVEM0QsWUFBTS9WLElBQU4sR0FBYStWLE1BQU0vVixJQUFOLENBQVdJLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IyVixNQUFNL1YsSUFBTixDQUFXNUUsTUFBL0IsQ0FBYjtBQUNBMmQsWUFBTXhYLE9BQU4sQ0FBY2xHLElBQWQsQ0FBbUIwYSxLQUFuQjtBQUNEO0FBQ0QsUUFBSSxDQUFDc0IsUUFBTCxFQUFlO0FBQ2IsV0FBS3JjLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxLQUFLeFUsR0FBekMsRUFBOEMsSUFBSWpHLEtBQUosQ0FBVSx5QkFBeUJxYSxNQUFNek8sUUFBekMsQ0FBOUMsRUFBa0csS0FBbEc7QUFDQTtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7O0FBS0EwUCxpQkFBZ0JqQixLQUFoQixFQUF1QjtBQUNyQjtBQUNBLFFBQUlrQixPQUFPLEtBQUtwQixZQUFMLENBQWtCN1gsS0FBbEIsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsQ0FBWDtBQUNBK1gsVUFBTTRELFNBQU4sR0FBa0IsQ0FBQzFDLE9BQU8sSUFBUixNQUFrQixDQUFwQztBQUNBbEIsVUFBTTNNLFVBQU4sR0FBbUIyTSxNQUFNNEQsU0FBTixLQUFvQixDQUF2QztBQUNBO0FBQ0EsUUFBSUMsVUFBVTNDLE9BQU8sSUFBckI7QUFDQSxTQUFLeE4sTUFBTCxDQUFZM0gsVUFBWixDQUF1QjhYLE9BQXZCLEdBQWlDQSxPQUFqQzs7QUFFQTtBQUNBN0QsVUFBTThELGFBQU4sR0FBc0IsS0FBS2hFLFlBQUwsQ0FBa0I3WCxLQUFsQixDQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUF0QjtBQUNBK1gsVUFBTS9QLEdBQU4sR0FBWSxLQUFLNlAsWUFBTCxDQUFrQm5WLEtBQWxCLENBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQVo7QUFDQSxTQUFLbVYsWUFBTCxDQUFrQjdYLEtBQWxCLENBQXdCLENBQXhCOztBQUVBO0FBQ0EsUUFBSTRiLFlBQVksRUFBaEIsRUFBb0I7QUFDbEIsWUFBTTVaLE9BQU8sS0FBSzZWLFlBQUwsQ0FBa0I3WCxLQUFsQixDQUF3QitYLE1BQU16TyxRQUFOLEdBQWlCLENBQXpDLENBQWI7QUFDQXlPLFlBQU0vVixJQUFOLEdBQWFBLElBQWI7O0FBRUEsVUFBSXpHLE9BQU91Z0IsUUFBUCxDQUFnQi9ELE1BQU04RCxhQUF0QixNQUF5QyxDQUE3QyxFQUFnRDtBQUM5QyxZQUFJLENBQUMsS0FBS3ZDLGtCQUFMLENBQXdCdkIsTUFBTXpPLFFBQTlCLENBQUwsRUFBOEM7QUFDNUMsZUFBS3RNLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxLQUFLeFUsR0FBekMsRUFBOEMsSUFBSWpHLEtBQUosQ0FBVywrQkFBOEJxYSxNQUFNek8sUUFBUyxFQUF4RCxDQUE5QyxFQUEwRyxLQUExRztBQUNEO0FBQ0QsWUFBSXlTLE9BQU8sRUFBWDtBQUNBLFlBQUlDLElBQUksQ0FBUjtBQUNBRCxhQUFLL1QsR0FBTCxHQUFXK1AsTUFBTS9QLEdBQWpCO0FBQ0ErVCxhQUFLNVUsR0FBTCxHQUFXNFEsTUFBTTVRLEdBQWpCO0FBQ0EsZUFBTzRRLE1BQU0vVixJQUFOLENBQVc1RSxNQUFYLEdBQW9CNGUsQ0FBM0IsRUFBOEI7QUFDNUIsY0FBSUMsUUFBUWxFLE1BQU0vVixJQUFOLENBQVdJLEtBQVgsQ0FBaUI3RyxPQUFPdWdCLFFBQVAsQ0FBZ0JFLENBQWhCLENBQWpCLEVBQXFDLElBQUlBLENBQXpDLENBQVo7QUFDQUQsZUFBSzlULElBQUwsR0FBWWdVLE1BQU0sQ0FBTixDQUFaO0FBQ0FGLGVBQUs5VCxJQUFMLElBQWFnVSxNQUFNLENBQU4sSUFBVyxHQUF4QjtBQUNBRixlQUFLOVQsSUFBTCxJQUFhZ1UsTUFBTSxDQUFOLElBQVcsR0FBWCxHQUFpQixHQUE5QjtBQUNBRixlQUFLOVQsSUFBTCxJQUFhZ1UsTUFBTSxDQUFOLElBQVcsR0FBWCxHQUFpQixHQUFqQixHQUF1QixHQUFwQztBQUNBRCxlQUFLLENBQUw7QUFDQUQsZUFBSy9aLElBQUwsR0FBWStWLE1BQU0vVixJQUFOLENBQVdJLEtBQVgsQ0FBaUI3RyxPQUFPdWdCLFFBQVAsQ0FBZ0JFLENBQWhCLENBQWpCLEVBQXFDRCxLQUFLOVQsSUFBTCxHQUFZK1QsQ0FBakQsQ0FBWjtBQUNBQSxlQUFLRCxLQUFLOVQsSUFBVjtBQUNBLGVBQUt3RCxNQUFMLENBQVkzSCxVQUFaLENBQXVCUCxPQUF2QixDQUErQmxHLElBQS9CLENBQW9DMGUsSUFBcEM7QUFDQSxlQUFLL2UsSUFBTCxDQUFVdUgsYUFBYWlYLGVBQXZCLEVBQXdDLE9BQXhDO0FBQ0Q7QUFDRixPQXBCRCxNQW9CTyxJQUFJamdCLE9BQU91Z0IsUUFBUCxDQUFnQi9ELE1BQU04RCxhQUF0QixNQUF5QyxDQUE3QyxFQUFnRDtBQUNyRCxZQUFJLENBQUMsS0FBS3ZDLGtCQUFMLENBQXdCdkIsTUFBTXpPLFFBQTlCLENBQUwsRUFBOEM7QUFDNUMsZUFBS3RNLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxLQUFLeFUsR0FBekMsRUFBOEMsSUFBSWpHLEtBQUosQ0FBVywrQkFBOEJxYSxNQUFNek8sUUFBUyxFQUF4RCxDQUE5QyxFQUEwRyxLQUExRztBQUNELFNBRkQsTUFFTztBQUNMLGVBQUt0TSxJQUFMLENBQVV1SCxhQUFhaVgsZUFBdkIsRUFBd0MsT0FBeEM7QUFDRDtBQUNGO0FBQ0YsS0EvQkQsTUErQk8sSUFBSUksWUFBWSxDQUFoQixFQUFtQjtBQUN4QixVQUFJNVosT0FBTyxLQUFLNlYsWUFBTCxDQUFrQjdYLEtBQWxCLENBQXdCK1gsTUFBTXpPLFFBQU4sR0FBaUIsQ0FBekMsQ0FBWDtBQUNBLFVBQUl0SCxLQUFLLENBQUwsTUFBWSxDQUFaLElBQWlCQSxLQUFLLENBQUwsTUFBWSxDQUE3QixJQUFrQ0EsS0FBSyxDQUFMLE1BQVksQ0FBOUMsSUFBbURBLEtBQUssQ0FBTCxNQUFZLENBQW5FLEVBQXNFO0FBQ3BFLFlBQUlrYSxhQUFhLENBQWpCO0FBQ0EsYUFBSyxJQUFJaGYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQmdmLHVCQUFhQSxhQUFhLEdBQWIsR0FBbUJsYSxLQUFLOUUsQ0FBTCxDQUFoQztBQUNEO0FBQ0RnZixzQkFBYyxDQUFkO0FBQ0FsYSxlQUFPQSxLQUFLSSxLQUFMLENBQVcsQ0FBWCxFQUFjSixLQUFLNUUsTUFBbkIsQ0FBUDtBQUNBNEUsYUFBSyxDQUFMLElBQVVrYSxhQUFhLEdBQXZCO0FBQ0FBLHFCQUFhLENBQUNBLGFBQWFsYSxLQUFLLENBQUwsQ0FBZCxJQUF5QixHQUF0QztBQUNBQSxhQUFLLENBQUwsSUFBVWthLGFBQWEsR0FBdkI7QUFDQUEscUJBQWEsQ0FBQ0EsYUFBYWxhLEtBQUssQ0FBTCxDQUFkLElBQXlCLEdBQXRDO0FBQ0FBLGFBQUssQ0FBTCxJQUFVa2EsYUFBYSxHQUF2QjtBQUNBbGEsYUFBSyxDQUFMLElBQVUsQ0FBQ2thLGFBQWFsYSxLQUFLLENBQUwsQ0FBZCxJQUF5QixHQUFuQztBQUNEOztBQUVEK1YsWUFBTS9WLElBQU4sR0FBYUEsSUFBYjtBQUNBO0FBQ0EsVUFBSStWLE1BQU04RCxhQUFOLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCLGFBQUtNLHdCQUFMLENBQThCcEUsTUFBTS9WLElBQXBDO0FBQ0EsWUFBSXFYLFdBQVcsS0FBS0Msa0JBQUwsQ0FBd0J2QixNQUFNek8sUUFBOUIsQ0FBZjtBQUNBLFlBQUkrUCxRQUFKLEVBQWM7QUFDWixjQUFJLEtBQUtqQyxVQUFMLElBQW1CLENBQUMsS0FBS2dGLGlCQUE3QixFQUFnRDtBQUM5QyxpQkFBS3BmLElBQUwsQ0FBVXVILGFBQWFpWCxlQUF2QixFQUF3QyxPQUF4QztBQUNELFdBRkQsTUFFTyxJQUFJLEtBQUtwRSxVQUFMLElBQW1CLEtBQUtnRixpQkFBNUIsRUFBK0M7QUFDcEQsaUJBQUtwZixJQUFMLENBQVV1SCxhQUFhaVgsZUFBdkIsRUFBd0MsT0FBeEM7QUFDQSxpQkFBS3hlLElBQUwsQ0FBVXVILGFBQWE4WCxxQkFBdkI7QUFDQTtBQUNEO0FBQ0QsZUFBS0QsaUJBQUwsR0FBeUIsSUFBekI7QUFDRDtBQUNELGFBQUtWLFdBQUwsR0FBbUIsSUFBbkI7QUFDRCxPQWRELE1BY087QUFDTCxZQUFJLENBQUMsS0FBS3BDLGtCQUFMLENBQXdCdkIsTUFBTXpPLFFBQTlCLENBQUwsRUFBOEM7QUFDNUMsZUFBS3RNLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxLQUFLeFUsR0FBekMsRUFBOEMsSUFBSWpHLEtBQUosQ0FBVywrQkFBOEJxYSxNQUFNek8sUUFBUyxFQUF4RCxDQUE5QyxFQUEwRyxLQUExRztBQUNBO0FBQ0Q7QUFDRCxZQUFJLEtBQUtvUyxXQUFULEVBQXNCO0FBQ3BCM0QsZ0JBQU0vTixPQUFOLEdBQWdCO0FBQ2RqRSxrQkFBTWpMLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLMkQsTUFBTCxDQUFZM0gsVUFBWixDQUF1QmlDLElBQXpDO0FBRFEsV0FBaEI7QUFHQSxlQUFLMlYsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0QsYUFBS2pRLE1BQUwsQ0FBWTNILFVBQVosQ0FBdUJQLE9BQXZCLENBQStCbEcsSUFBL0IsQ0FBb0MwYSxLQUFwQztBQUNBO0FBQ0Q7QUFDRixLQS9DTSxNQStDQTtBQUNMLFdBQUsvYSxJQUFMLENBQVV1SCxhQUFhNFQsV0FBdkIsRUFBb0MsS0FBS3hVLEdBQXpDLEVBQThDLElBQUlqRyxLQUFKLENBQVcsbUJBQWtCa2UsT0FBUSxFQUFyQyxDQUE5QyxFQUF1RixLQUF2RjtBQUNBN0QsWUFBTS9WLElBQU4sR0FBYSxLQUFLNlYsWUFBTCxDQUFrQjdYLEtBQWxCLENBQXdCK1gsTUFBTXpPLFFBQU4sR0FBaUIsQ0FBekMsQ0FBYjtBQUNBLFVBQUksQ0FBQyxLQUFLZ1Esa0JBQUwsQ0FBd0J2QixNQUFNek8sUUFBOUIsQ0FBTCxFQUE4QztBQUM1QyxhQUFLdE0sSUFBTCxDQUFVdUgsYUFBYTRULFdBQXZCLEVBQW9DLEtBQUt4VSxHQUF6QyxFQUE4QyxJQUFJakcsS0FBSixDQUFXLCtCQUE4QnFhLE1BQU16TyxRQUFTLEVBQXhELENBQTlDLEVBQTBHLEtBQTFHO0FBQ0Q7QUFDRCxXQUFLbUMsTUFBTCxDQUFZM0gsVUFBWixDQUF1QlAsT0FBdkIsQ0FBK0JsRyxJQUEvQixDQUFvQzBhLEtBQXBDO0FBQ0EsV0FBSy9hLElBQUwsQ0FBVXVILGFBQWEyVCxjQUF2QjtBQUNEO0FBQ0QsV0FBT0gsTUFBTVksT0FBYjtBQUNEOztBQUVEOzs7OztBQUtBd0QsMkJBQTBCbmEsSUFBMUIsRUFBZ0M7QUFDOUIsUUFBSStZLFFBQVEsS0FBS3RQLE1BQUwsQ0FBWTNILFVBQXhCOztBQUVBLFFBQUksQ0FBQ2lYLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBRUQsUUFBSWhaLFNBQVMsQ0FBYjs7QUFFQSxRQUFJLENBQUNnWixNQUFNaFYsSUFBWCxFQUFpQjtBQUNmZ1YsWUFBTWhWLElBQU4sR0FBYSxJQUFJd1MsNkJBQUosRUFBYjtBQUNEO0FBQ0QsUUFBSXhTLE9BQU9nVixNQUFNaFYsSUFBakI7O0FBRUFBLFNBQUt1VyxvQkFBTCxHQUE0QnRhLEtBQUssQ0FBTCxDQUE1QjtBQUNBK0QsU0FBS3dXLG9CQUFMLEdBQTRCdmEsS0FBSyxDQUFMLENBQTVCO0FBQ0ErRCxTQUFLeVcsb0JBQUwsR0FBNEJ4YSxLQUFLLENBQUwsQ0FBNUI7QUFDQStELFNBQUswVyxrQkFBTCxHQUEwQnphLEtBQUssQ0FBTCxJQUFVLEVBQXBDO0FBQ0ErRCxTQUFLMlcsYUFBTCxHQUFxQixDQUFDMWEsS0FBSyxDQUFMLElBQVUsSUFBWCxJQUFtQixDQUF4Qzs7QUFFQSxRQUFJMmEsV0FBVzNhLEtBQUssQ0FBTCxJQUFVLElBQXpCO0FBQ0FELGFBQVMsQ0FBVDtBQUNBLFFBQUkyWSxTQUFTLEVBQWI7O0FBRUE7QUFDQSxTQUFLLElBQUl4ZCxJQUFJLENBQWIsRUFBZ0JBLElBQUl5ZixRQUFwQixFQUE4QnpmLEdBQTlCLEVBQW1DO0FBQ2pDLFVBQUkrSyxPQUFPakcsS0FBS0QsTUFBTCxJQUFlLEdBQWYsR0FBcUJDLEtBQUtELFNBQVMsQ0FBZCxDQUFoQztBQUNBQSxnQkFBVSxDQUFWOztBQUVBLFVBQUk4TSxNQUFNLElBQUkzTSxVQUFKLENBQWUrRixJQUFmLENBQVY7QUFDQSxXQUFLLElBQUkyVSxJQUFJLENBQWIsRUFBZ0JBLElBQUkzVSxJQUFwQixFQUEwQjJVLEdBQTFCLEVBQStCO0FBQzdCL04sWUFBSStOLENBQUosSUFBUzVhLEtBQUtELFNBQVM2YSxDQUFkLENBQVQ7QUFDRDs7QUFFRDtBQUNBLFVBQUlDLGNBQWMsT0FBbEI7QUFDQSxXQUFLLElBQUlELElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUIsWUFBSUUsSUFBSWpPLElBQUkrTixDQUFKLEVBQU9HLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBUjtBQUNBLFlBQUlELEVBQUUxZixNQUFGLEdBQVcsQ0FBZixFQUFrQjtBQUNoQjBmLGNBQUksTUFBTUEsQ0FBVjtBQUNEO0FBQ0RELHVCQUFlQyxDQUFmO0FBQ0Q7O0FBRUQvVyxXQUFLM0IsS0FBTCxHQUFheVksV0FBYjs7QUFFQTlhLGdCQUFVa0csSUFBVjtBQUNBLFdBQUt3RCxNQUFMLENBQVkzSCxVQUFaLENBQXVCaUMsSUFBdkIsQ0FBNEI4SSxHQUE1QixHQUFrQ0EsR0FBbEM7QUFDQTZMLGVBQVMxVyx5QkFBVThLLFFBQVYsQ0FBbUJELEdBQW5CLENBQVQ7QUFDRDs7QUFFRCxRQUFJbU8sV0FBV2hiLEtBQUtELE1BQUwsQ0FBZjs7QUFFQUE7O0FBRUEsU0FBSyxJQUFJN0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJOGYsUUFBcEIsRUFBOEI5ZixHQUE5QixFQUFtQztBQUNqQyxVQUFJK0ssT0FBT2pHLEtBQUtELE1BQUwsSUFBZSxHQUFmLEdBQXFCQyxLQUFLRCxTQUFTLENBQWQsQ0FBaEM7QUFDQUEsZ0JBQVUsQ0FBVjtBQUNBLFVBQUlnTixNQUFNLElBQUk3TSxVQUFKLENBQWUrRixJQUFmLENBQVY7QUFDQSxXQUFLLElBQUkyVSxJQUFJLENBQWIsRUFBZ0JBLElBQUkzVSxJQUFwQixFQUEwQjJVLEdBQTFCLEVBQStCO0FBQzdCN04sWUFBSTZOLENBQUosSUFBUzVhLEtBQUtELFNBQVM2YSxDQUFkLENBQVQ7QUFDRDtBQUNEN2EsZ0JBQVVrRyxJQUFWO0FBQ0EsV0FBS3dELE1BQUwsQ0FBWTNILFVBQVosQ0FBdUJpQyxJQUF2QixDQUE0QmdKLEdBQTVCLEdBQWtDQSxHQUFsQztBQUNEOztBQUVEalUsV0FBT2dOLE1BQVAsQ0FBYy9CLElBQWQsRUFBb0IvQix5QkFBVWlQLFdBQVYsQ0FBc0J5SCxNQUF0QixDQUFwQjs7QUFFQTtBQUNBLFVBQU11QyxhQUFhLEtBQUt2UixRQUFMLENBQWN5TixTQUFkLENBQXdCdFcsS0FBM0M7O0FBRUFvYSxlQUFXN1ksS0FBWCxHQUFtQjJCLEtBQUszQixLQUF4QjtBQUNBNlksZUFBVzFKLE9BQVgsR0FBcUJ4TixLQUFLd04sT0FBMUI7QUFDQTBKLGVBQVd6SixLQUFYLEdBQW1Cek4sS0FBS3lOLEtBQXhCO0FBQ0F5SixlQUFXdkosWUFBWCxHQUEwQjNOLEtBQUsyTixZQUEvQjtBQUNBdUosZUFBV25XLFNBQVgsR0FBdUJmLEtBQUtlLFNBQTVCO0FBQ0FtVyxlQUFXdEosUUFBWCxHQUFzQjVOLEtBQUs0TixRQUEzQjtBQUNBc0osZUFBV3pLLEtBQVgsR0FBbUJ5SyxXQUFXekssS0FBWCxLQUFxQnpNLEtBQUtzTixZQUExQixHQUF5QzRKLFdBQVd6SyxLQUFwRCxHQUE0RHpNLEtBQUtzTixZQUFwRjtBQUNBNEosZUFBV3hLLE1BQVgsR0FBb0J3SyxXQUFXeEssTUFBWCxLQUFzQjFNLEtBQUt1TixhQUEzQixHQUEyQzJKLFdBQVd6SyxLQUF0RCxHQUE4RHpNLEtBQUt1TixhQUF2Rjs7QUFFQXZOLFNBQUs2QyxRQUFMLEdBQWdCLEtBQUs4QyxRQUFMLENBQWN5TixTQUFkLENBQXdCdlEsUUFBeEIsR0FBbUM3QyxLQUFLK04sU0FBeEQ7QUFDQS9OLFNBQUttWCxJQUFMLEdBQVksSUFBSWhiLFVBQUosQ0FBZUYsS0FBSzVFLE1BQXBCLENBQVo7QUFDQTJJLFNBQUttWCxJQUFMLENBQVU1Z0IsR0FBVixDQUFjMEYsSUFBZDtBQUNBK1ksVUFBTWhWLElBQU4sR0FBYUEsSUFBYjtBQUNEOztBQUVEOzs7Ozs7QUFNQWtVLHlCQUF3QmtELHNCQUF4QixFQUFnRDtBQUM5QyxRQUFJQyx3QkFBd0IsQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsS0FBaEUsRUFBdUUsS0FBdkUsRUFBOEUsSUFBOUUsRUFBb0YsSUFBcEYsQ0FBNUI7QUFDQSxXQUFPQSxzQkFBc0JELHNCQUF0QixDQUFQO0FBQ0Q7O0FBRUQ7Ozs7OztBQU1BakMsZ0NBQStCakMsSUFBL0IsRUFBcUM7QUFDbkMsUUFBSWtFLHlCQUF5QixDQUFDbEUsT0FBTyxFQUFSLE1BQWdCLENBQTdDO0FBQ0EsUUFBSW1FLHdCQUF3QixDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsS0FBZCxFQUFxQixLQUFyQixFQUE0QixLQUE1QixDQUE1QjtBQUNBLFdBQU9BLHNCQUFzQkQsc0JBQXRCLENBQVA7QUFDRDs7QUFFRDs7Ozs7O0FBTUFFLHNCQUFxQnBFLElBQXJCLEVBQTJCO0FBQ3pCLFFBQUlxRSxzQkFBc0JyRSxPQUFPLENBQWpDO0FBQ0EsUUFBSXNFLHFCQUFxQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCO0FBQ0EsV0FBT0EsbUJBQW1CRCxtQkFBbkIsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQWhFLHFCQUFvQmhRLFFBQXBCLEVBQThCO0FBQzVCLFFBQUlrVSxrQkFBa0IsS0FBSzNGLFlBQUwsQ0FBa0JuVixLQUFsQixDQUF3QixDQUF4QixFQUEyQixDQUEzQixDQUF0QjtBQUNBLFNBQUttVixZQUFMLENBQWtCN1gsS0FBbEIsQ0FBd0IsQ0FBeEI7QUFDQSxXQUFPd2Qsb0JBQW9CbFUsV0FBVyxFQUF0QztBQUNEOztBQUVELE1BQUl1TyxZQUFKLEdBQW9CO0FBQ2xCLFVBQU1oTCxTQUFTLEtBQUtuQixRQUFMLENBQWNDLFdBQWQsQ0FBMEIsZUFBMUIsQ0FBZjtBQUNBLFFBQUlrQixNQUFKLEVBQVk7QUFDVixhQUFPQSxNQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBSzdQLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxJQUFJemEsS0FBSixDQUFVLHFCQUFWLENBQXBDO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJK04sTUFBSixHQUFjO0FBQ1osV0FBTyxLQUFLQyxRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsQ0FBUDtBQUNEOztBQUVELE1BQUk4UixNQUFKLEdBQWM7QUFDWixXQUFPLEtBQUsvUixRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsQ0FBUDtBQUNEO0FBNXFCYzs7a0JBK3FCRnVJLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdHJCZjs7O0FBR0EsTUFBTUgsVUFBTixDQUFpQjtBQUNmLFNBQU8ySixLQUFQLENBQWNDLElBQWQsRUFBb0JDLFVBQVUsRUFBOUIsRUFBa0M7QUFDaEMsUUFBSTFjLE1BQU07QUFDUjBILGdCQUFVO0FBREYsS0FBVjtBQUdBLFFBQUksQ0FBQytVLElBQUQsSUFBUyxDQUFDQSxLQUFLRSxLQUFuQixFQUEwQjtBQUN4QjtBQUNEO0FBQ0QsUUFBSUMsT0FBT0gsS0FBS0UsS0FBTCxDQUFXLE9BQVgsQ0FBWDtBQUNBQyxXQUFPQSxLQUFLbFQsTUFBTCxDQUFhbVQsR0FBRCxJQUFTO0FBQzFCLGFBQU9BLEdBQVA7QUFDRCxLQUZNLENBQVA7QUFHQSxRQUFJQSxNQUFNRCxLQUFLOWQsS0FBTCxFQUFWO0FBQ0EsUUFBSSxDQUFDK2QsSUFBSUMsS0FBSixDQUFVLFNBQVYsQ0FBTCxFQUEyQjtBQUN6QixZQUFNLElBQUl0Z0IsS0FBSixDQUFXLGtDQUFYLENBQU47QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNEcWdCLFVBQU1ELEtBQUs5ZCxLQUFMLEVBQU47QUFDQSxXQUFPK2QsR0FBUCxFQUFZO0FBQ1YsVUFBSUUsT0FBT0YsSUFBSUMsS0FBSixDQUFVLG1CQUFWLENBQVg7QUFDQSxVQUFJRSxPQUFPSCxJQUFJQyxLQUFKLENBQVUsY0FBVixDQUFYO0FBQ0EsVUFBSUUsUUFBUUQsSUFBUixJQUFnQkEsS0FBSzdnQixNQUFMLEdBQWMsQ0FBbEMsRUFBcUM7QUFDbkMsZ0JBQVE2Z0IsS0FBSyxDQUFMLENBQVI7QUFDRSxlQUFLLGVBQUw7QUFDRS9jLGdCQUFJaWQsT0FBSixHQUFjckMsU0FBU21DLEtBQUssQ0FBTCxDQUFULENBQWQ7QUFDQTtBQUNGLGVBQUssc0JBQUw7QUFDRS9jLGdCQUFJa2QsUUFBSixHQUFldEMsU0FBU21DLEtBQUssQ0FBTCxDQUFULENBQWY7QUFDQTtBQUNGLGVBQUssc0JBQUw7QUFDRS9jLGdCQUFJbWQsY0FBSixHQUFxQkMsV0FBV0wsS0FBSyxDQUFMLENBQVgsQ0FBckI7QUFDQTtBQUNGLGVBQUssUUFBTDtBQUNFbEssdUJBQVd3SyxTQUFYLENBQXFCTixJQUFyQixFQUEyQkgsSUFBM0IsRUFBaUM1YyxHQUFqQyxFQUFzQzBjLE9BQXRDO0FBQ0E7QUFDRixlQUFLLFdBQUw7QUFDRTdKLHVCQUFXeUssWUFBWCxDQUF3QlAsS0FBSyxDQUFMLENBQXhCLEVBQWdDL2MsR0FBaEM7QUFDQTtBQUNGO0FBQ0U7QUFqQko7QUFtQkQsT0FBQyxJQUFHZ2QsUUFBUUEsS0FBSzlnQixNQUFMLEdBQWMsQ0FBekIsRUFBNEI7QUFDNUIsZ0JBQU84Z0IsS0FBSyxDQUFMLENBQVA7QUFDRSxlQUFLLHFCQUFMO0FBQ0VILGtCQUFNRCxLQUFLOWQsS0FBTCxFQUFOO0FBQ0EsZ0JBQUlpZSxPQUFPRixJQUFJQyxLQUFKLENBQVUsbUJBQVYsQ0FBWDtBQUNBLGdCQUFHQyxLQUFLN2dCLE1BQUwsR0FBYSxDQUFiLElBQWtCNmdCLEtBQUssQ0FBTCxNQUFZLFFBQWpDLEVBQTJDO0FBQ3pDbEsseUJBQVd3SyxTQUFYLENBQXFCTixJQUFyQixFQUEyQkgsSUFBM0IsRUFBaUM1YyxHQUFqQyxFQUFzQzBjLE9BQXRDLEVBQStDLElBQS9DO0FBQ0Q7QUFDRDtBQUNGO0FBQ0U7QUFUSjtBQVdEO0FBQ0RHLFlBQU1ELEtBQUs5ZCxLQUFMLEVBQU47QUFDRDtBQUNELFdBQU9rQixHQUFQO0FBQ0Q7O0FBRUQsU0FBT3FkLFNBQVAsQ0FBa0JOLElBQWxCLEVBQXdCSCxJQUF4QixFQUE4QjVjLEdBQTlCLEVBQW1DMGMsT0FBbkMsRUFBNENwUyxXQUE1QyxFQUF5RDtBQUN2RCxRQUFJLENBQUN0SyxJQUFJdWQsS0FBVCxFQUFnQjtBQUNkdmQsVUFBSXVkLEtBQUosR0FBWSxFQUFaO0FBQ0Q7O0FBRUQsUUFBSUMsT0FBTztBQUNUL2IsYUFBT3pCLElBQUkwSCxRQURGO0FBRVRBLGdCQUFVMFYsV0FBV0wsS0FBSyxDQUFMLENBQVgsSUFBc0I7QUFGdkIsS0FBWDs7QUFLQS9jLFFBQUkwSCxRQUFKLElBQWdCOFYsS0FBSzlWLFFBQXJCO0FBQ0EsUUFBSStWLFdBQVdiLEtBQUs5ZCxLQUFMLEVBQWY7QUFDQSxRQUFJMmUsU0FBU1gsS0FBVCxDQUFlLFlBQWYsQ0FBSixFQUFrQztBQUNoQ1csaUJBQVdiLEtBQUs5ZCxLQUFMLEVBQVg7QUFDRDtBQUNELFFBQUkyZSxTQUFTdmhCLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUJ1aEIsU0FBU0MsTUFBVCxDQUFnQixDQUFoQixNQUF1QixHQUE5QyxJQUFxRGhCLFFBQVFJLEtBQVIsQ0FBYyxnQkFBZCxDQUF6RCxFQUEwRjtBQUN4RkosZ0JBQVVBLFFBQVFJLEtBQVIsQ0FBYyxnQkFBZCxFQUFnQyxDQUFoQyxDQUFWO0FBQ0Q7QUFDRCxRQUFJVyxTQUFTWCxLQUFULENBQWUsV0FBZixDQUFKLEVBQWlDO0FBQy9CVSxXQUFLRyxHQUFMLEdBQVdGLFFBQVg7QUFDRCxLQUZELE1BRU87QUFDTEQsV0FBS0csR0FBTCxHQUFXakIsVUFBVWUsUUFBckI7QUFDRDtBQUNERCxTQUFLbFQsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQXRLLFFBQUl1ZCxLQUFKLENBQVVwaEIsSUFBVixDQUFlcWhCLElBQWY7QUFDRDs7QUFFRCxTQUFPSSxRQUFQLENBQWlCRCxHQUFqQixFQUFzQjtBQUNwQixRQUFJakIsVUFBVSxFQUFkO0FBQ0EsUUFBSW1CLE9BQU9GLElBQUliLEtBQUosQ0FBVSxnQkFBVixDQUFYO0FBQ0EsUUFBSWUsUUFBUUEsS0FBSzNoQixNQUFMLEdBQWMsQ0FBMUIsRUFBNkI7QUFDM0IsV0FBSyxJQUFJRixJQUFJLENBQWIsRUFBZ0JBLElBQUk2aEIsS0FBSzNoQixNQUF6QixFQUFpQ0YsR0FBakMsRUFBc0M7QUFDcEMsWUFBSTZoQixLQUFLN2hCLENBQUwsRUFBUThnQixLQUFSLENBQWMsUUFBZCxLQUEyQmUsS0FBSzdoQixDQUFMLEVBQVFFLE1BQVIsR0FBaUJ3Z0IsUUFBUXhnQixNQUF4RCxFQUFnRTtBQUM5RHdnQixvQkFBVW1CLEtBQUs3aEIsQ0FBTCxDQUFWO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsV0FBTzBnQixPQUFQO0FBQ0Q7O0FBRUQsU0FBT1ksWUFBUCxDQUFvQlAsSUFBcEIsRUFBMEIvYyxHQUExQixFQUErQjtBQUM3QkEsUUFBSThkLE9BQUosR0FBYyxFQUFkO0FBQ0EsUUFBSWxCLE9BQU9HLEtBQUtKLEtBQUwsQ0FBVyxHQUFYLENBQVg7QUFDQSxTQUFLLElBQUkzZ0IsQ0FBVCxJQUFjNGdCLElBQWQsRUFBb0I7QUFDbEIsVUFBSW1CLE1BQU1uQixLQUFLNWdCLENBQUwsQ0FBVjtBQUNBLFVBQUcraEIsSUFBSWpCLEtBQUosQ0FBVSxhQUFWLENBQUgsRUFBNkI7QUFDM0I5YyxZQUFJOGQsT0FBSixDQUFZRSxNQUFaLEdBQXFCRCxJQUFJakIsS0FBSixDQUFVLGFBQVYsRUFBeUIsQ0FBekIsQ0FBckI7QUFDRDtBQUNELFVBQUdpQixJQUFJakIsS0FBSixDQUFVLFlBQVYsQ0FBSCxFQUE0QjtBQUMxQjljLFlBQUk4ZCxPQUFKLENBQVlHLEdBQVosR0FBa0JGLElBQUlqQixLQUFKLENBQVUsWUFBVixFQUF3QixDQUF4QixDQUFsQjtBQUNEOztBQUVELFVBQUdpQixJQUFJakIsS0FBSixDQUFVLFdBQVYsQ0FBSCxFQUEyQjtBQUN6QixZQUFJb0IsS0FBS0gsSUFBSWpCLEtBQUosQ0FBVSxXQUFWLEVBQXVCLENBQXZCLENBQVQ7QUFDQSxZQUFJNWdCLFNBQVN1SyxLQUFLd0ssSUFBTCxDQUFVaU4sR0FBR2hpQixNQUFILEdBQVksQ0FBdEIsQ0FBYjtBQUNBOEQsWUFBSThkLE9BQUosQ0FBWUssR0FBWixHQUFrQixJQUFJbmQsVUFBSixDQUFlOUUsTUFBZixDQUFsQjtBQUNBLGFBQUksSUFBSUYsSUFBSUUsU0FBUyxDQUFyQixFQUF3QkYsS0FBSSxDQUE1QixFQUErQkEsR0FBL0IsRUFBb0M7QUFDbEMsY0FBSW9pQixLQUFLeEQsU0FBU3NELEdBQUdHLE1BQUgsQ0FBVXJpQixJQUFJLENBQWQsRUFBaUIsQ0FBakIsQ0FBVCxFQUE4QixFQUE5QixDQUFUO0FBQ0FnRSxjQUFJOGQsT0FBSixDQUFZSyxHQUFaLENBQWdCbmlCLENBQWhCLElBQXFCb2lCLEVBQXJCO0FBQ0Q7QUFDRHBlLFlBQUk4ZCxPQUFKLENBQVlJLEVBQVosR0FBaUJBLEVBQWpCO0FBQ0Q7QUFDRjtBQUNGO0FBMUhjOztrQkE2SEZyTCxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSWY7O0FBQ0E7O0FBQ0E7O0FBU0EsTUFBTXhQLGVBQWVDLHNCQUFPRCxZQUE1QjtBQUNBLE1BQU1pYixhQUFhO0FBQ2pCLFFBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQURXO0FBRWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQUZXO0FBR2pCLFFBQU0sQ0FBQyxPQUFELEVBQVUsVUFBVixDQUhXO0FBSWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsTUFBVixDQUpXO0FBS2pCLFFBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQUxXO0FBTWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQU5XO0FBT2pCLFFBQU0sQ0FBQyxPQUFELEVBQVUsWUFBVixDQVBXO0FBUWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsWUFBVixDQVJXO0FBU2pCLFFBQU0sQ0FBQyxPQUFELEVBQVUsTUFBVixDQVRXO0FBVWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsS0FBVixDQVZXO0FBV2pCLFFBQU0sQ0FBQyxPQUFELEVBQVUsS0FBVixDQVhXO0FBWWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsS0FBVixDQVpXO0FBYWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsY0FBVixDQWJXO0FBY2pCLFFBQU0sQ0FBQyxPQUFELEVBQVUsVUFBVixDQWRXO0FBZWpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsUUFBVixDQWZXO0FBZ0JqQixRQUFNLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FoQlc7QUFpQmpCLFFBQU0sQ0FBQyxPQUFELEVBQVUsY0FBVixDQWpCVztBQWtCakIsUUFBTSxDQUFDLE9BQUQsRUFBVSxZQUFWO0FBbEJXLENBQW5COztBQXFCQSxNQUFNeEwsU0FBTixDQUFnQjtBQUNkcFMsY0FBYTZkLE9BQWIsRUFBc0I7QUFDcEIsU0FBS0EsT0FBTCxHQUFlM2tCLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQjJYLE9BQWxCLENBQWY7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7O0FBRURua0IsU0FBUTtBQUNOLFNBQUtzRCxFQUFMLENBQVFzRixhQUFhOFMsV0FBckIsRUFBa0MsS0FBSzBJLEtBQUwsQ0FBV3JnQixJQUFYLENBQWdCLElBQWhCLENBQWxDO0FBQ0Q7O0FBRURxZ0IsUUFBT0MsSUFBUCxFQUFhO0FBQ1gsUUFBSSxLQUFLTixRQUFULEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBRUQsUUFBSTdTLFNBQVMsS0FBS29ULFdBQWxCO0FBQ0EsUUFBSXhCLFFBQVEsRUFBRWtCLEtBQUssRUFBUCxFQUFXQyxLQUFLLEVBQWhCLEVBQVo7QUFDQSxRQUFJTSxRQUFRLEVBQVo7O0FBRUE7QUFDQSxXQUFPclQsT0FBT3pQLE1BQVAsSUFBaUIsR0FBeEIsRUFBNkI7QUFDM0IsVUFBSXlQLE9BQU96UCxNQUFQLElBQWlCLENBQWpCLElBQXNCeVAsT0FBTy9LLEtBQVAsQ0FBYSxDQUFiLEVBQWdCK0ssT0FBTzlLLE1BQXZCLE1BQW1DLEVBQTdELEVBQWlFO0FBQy9ELGFBQUsvRSxJQUFMLENBQVV1SCxhQUFhNFQsV0FBdkIsRUFBb0MsS0FBS3hVLEdBQXpDLEVBQThDLElBQUlqRyxLQUFKLENBQVcsc0JBQXFCbVAsT0FBTy9LLEtBQVAsQ0FBYSxDQUFiLEVBQWdCK0ssT0FBTzlLLE1BQXZCLENBQStCLG1CQUEvRCxDQUE5QyxFQUFrSSxLQUFsSTtBQUNEO0FBQ0QsYUFBTzhLLE9BQU96UCxNQUFQLElBQWlCLENBQWpCLElBQXNCeVAsT0FBTy9LLEtBQVAsQ0FBYSxDQUFiLEVBQWdCK0ssT0FBTzlLLE1BQXZCLE1BQW1DLEVBQWhFLEVBQW9FO0FBQ2xFOEssZUFBTzdNLEtBQVAsQ0FBYSxDQUFiO0FBQ0Q7QUFDRCxVQUFJME4sTUFBTWIsT0FBTzdNLEtBQVAsQ0FBYSxHQUFiLENBQVY7QUFDQTtBQUNBLFVBQUltZ0IsV0FBVyxJQUFJQyxxQkFBSixDQUFXMVMsSUFBSWIsTUFBZixDQUFmO0FBQ0EsVUFBSWdKLEtBQUssRUFBVDtBQUNBN0IsZ0JBQVVxTSxJQUFWLENBQWVGLFFBQWYsRUFBeUJ0SyxFQUF6QixFQUE2QjRJLEtBQTdCO0FBQ0EsVUFBSTVJLEdBQUd5SyxHQUFQLEVBQVk7QUFDVixZQUFJLENBQUNKLE1BQU1ySyxHQUFHeEgsTUFBSCxDQUFVa1MsR0FBaEIsQ0FBTCxFQUEyQjtBQUN6QkwsZ0JBQU1ySyxHQUFHeEgsTUFBSCxDQUFVa1MsR0FBaEIsSUFBdUIsRUFBdkI7QUFDRDtBQUNETCxjQUFNckssR0FBR3hILE1BQUgsQ0FBVWtTLEdBQWhCLEVBQXFCbGpCLElBQXJCLENBQTBCd1ksR0FBR3lLLEdBQTdCO0FBQ0F6SyxXQUFHeUssR0FBSCxDQUFPRSxFQUFQLENBQVUzVCxNQUFWLEdBQW1CLENBQUNnSixHQUFHeUssR0FBSCxDQUFPRSxFQUFQLENBQVUzVCxNQUFYLENBQW5CO0FBQ0QsT0FORCxNQU1PLElBQUlxVCxNQUFNckssR0FBR3hILE1BQUgsQ0FBVWtTLEdBQWhCLENBQUosRUFBMEI7QUFDL0JMLGNBQU1ySyxHQUFHeEgsTUFBSCxDQUFVa1MsR0FBaEIsRUFBcUJMLE1BQU1ySyxHQUFHeEgsTUFBSCxDQUFVa1MsR0FBaEIsRUFBcUJuakIsTUFBckIsR0FBOEIsQ0FBbkQsRUFBc0RvakIsRUFBdEQsQ0FBeUQzVCxNQUF6RCxDQUFnRXhQLElBQWhFLENBQXFFd1ksR0FBRzRLLE9BQUgsQ0FBV0MsTUFBaEY7QUFDRDtBQUNGOztBQUVELFFBQUlDLGVBQWVYLElBQW5CO0FBQ0EsUUFBSVksZUFBZVosSUFBbkI7O0FBRUE7QUFDQSxTQUFLLElBQUk5aUIsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcEMsT0FBT3NGLElBQVAsQ0FBWThmLEtBQVosRUFBbUI5aUIsTUFBdkMsRUFBK0NGLEdBQS9DLEVBQW9EO0FBQ2xELFVBQUkyakIsU0FBU1gsTUFBTXBsQixPQUFPc0YsSUFBUCxDQUFZOGYsS0FBWixFQUFtQmhqQixDQUFuQixDQUFOLENBQWI7QUFDQSxXQUFLLElBQUkwZixJQUFJLENBQWIsRUFBZ0JBLElBQUlpRSxPQUFPempCLE1BQTNCLEVBQW1Dd2YsR0FBbkMsRUFBd0M7QUFDdENpRSxlQUFPakUsQ0FBUCxFQUFVdlosRUFBVixHQUFldkksT0FBT3NGLElBQVAsQ0FBWThmLEtBQVosRUFBbUJoakIsQ0FBbkIsQ0FBZjtBQUNBMmpCLGVBQU9qRSxDQUFQLEVBQVU0RCxFQUFWLENBQWEzVCxNQUFiLEdBQXNCbUgsVUFBVThNLEtBQVYsQ0FBZ0JELE9BQU9qRSxDQUFQLEVBQVU0RCxFQUFWLENBQWEzVCxNQUE3QixDQUF0QjtBQUNBLFlBQUlnVSxPQUFPakUsQ0FBUCxFQUFVM2YsSUFBVixLQUFtQixPQUF2QixFQUFnQztBQUM5QixlQUFLOGpCLGVBQUwsQ0FBcUJGLE9BQU9qRSxDQUFQLENBQXJCLEVBQWdDK0QsWUFBaEM7QUFDQUEseUJBQWUsRUFBZjtBQUNELFNBSEQsTUFHTyxJQUFJRSxPQUFPakUsQ0FBUCxFQUFVM2YsSUFBVixLQUFtQixPQUF2QixFQUFnQztBQUNyQyxlQUFLK2pCLGVBQUwsQ0FBcUJILE9BQU9qRSxDQUFQLENBQXJCLEVBQWdDZ0UsWUFBaEM7QUFDQUEseUJBQWUsRUFBZjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJLEtBQUtkLGFBQVQsRUFBd0I7QUFDdEIsV0FBSzlpQixJQUFMLENBQVV1SCxhQUFhMlQsY0FBdkIsRUFBdUMsT0FBdkM7QUFDRDtBQUNELFFBQUksS0FBSzJILGFBQVQsRUFBd0I7QUFDdEIsV0FBSzdpQixJQUFMLENBQVV1SCxhQUFhMlQsY0FBdkIsRUFBdUMsT0FBdkM7QUFDRDtBQUNGOztBQUVENkksa0JBQWlCVCxHQUFqQixFQUFzQnRXLE9BQXRCLEVBQStCO0FBQzdCLFFBQUkrUSxLQUFKO0FBQ0EsUUFBSSxDQUFDLEtBQUtrRyxPQUFMLENBQWFwZCxVQUFsQixFQUE4QjtBQUM1QixXQUFLb2QsT0FBTCxDQUFhcGQsVUFBYixHQUEwQixJQUFJdEMsMEJBQUosRUFBMUI7QUFDQXdaLGNBQVEsS0FBS2tHLE9BQUwsQ0FBYXBkLFVBQXJCO0FBQ0QsS0FIRCxNQUdPO0FBQ0xrWCxjQUFRLEtBQUtrRyxPQUFMLENBQWFwZCxVQUFyQjtBQUNEO0FBQ0QsUUFBSWtDLE9BQU8sSUFBSXlTLDZCQUFKLENBQW1CO0FBQzVCNEMsdUJBQWlCa0YsSUFBSUUsRUFBSixDQUFPVSxTQURJO0FBRTVCeEgsa0JBQVk0RyxJQUFJRSxFQUFKLENBQU9VLFNBRlM7QUFHNUI3YyxvQkFBY2ljLElBQUlFLEVBQUosQ0FBT1csT0FITztBQUk1Qi9jLGFBQU8sYUFBYWtjLElBQUlFLEVBQUosQ0FBT1ksZUFKQztBQUs1QjFHLGNBQVE0RixJQUFJRSxFQUFKLENBQU9hLFdBTGE7QUFNNUJoZSxVQUFJLENBTndCO0FBTzVCdVcsdUJBQWlCMEcsSUFBSUUsRUFBSixDQUFPYztBQVBJLEtBQW5CLENBQVg7QUFTQXZiLFNBQUswQixpQkFBTCxHQUF5QkUsS0FBS0MsS0FBTCxDQUFXLE9BQU83QixLQUFLcVYsZUFBWixHQUE4QnJWLEtBQUsrTixTQUE5QyxDQUF6Qjs7QUFFQSxRQUFJeU4sWUFBWXZOLFVBQVV3TixZQUFWLENBQXVCekcsTUFBTWhWLElBQTdCLEVBQW1DQSxJQUFuQyxFQUF5QyxJQUF6QyxDQUFoQjs7QUFFQSxRQUFJLENBQUMsS0FBSytaLGFBQU4sSUFBdUIsQ0FBQ3lCLFNBQTVCLEVBQXVDO0FBQ3JDeEcsWUFBTWhWLElBQU4sR0FBYUEsSUFBYjtBQUNBLFdBQUsrWixhQUFMLEdBQXFCLElBQXJCO0FBQ0EsV0FBSzlpQixJQUFMLENBQVV1SCxhQUFhaVgsZUFBdkIsRUFBd0MsT0FBeEM7QUFDRDs7QUFFRCxRQUFJeFosT0FBTyxJQUFJRSxVQUFKLENBQWVvZSxJQUFJRSxFQUFKLENBQU8zVCxNQUFQLENBQWNBLE1BQWQsQ0FBcUJ6SyxLQUFyQixDQUEyQmtlLElBQUlFLEVBQUosQ0FBTzNULE1BQVAsQ0FBYy9NLFFBQXpDLEVBQW1Ed2dCLElBQUlFLEVBQUosQ0FBTzNULE1BQVAsQ0FBY3pQLE1BQWpFLENBQWYsQ0FBWDtBQUNBLFFBQUkrSixNQUFNMlUsU0FBU3dFLElBQUl2WSxHQUFKLEdBQVUsRUFBbkIsQ0FBVjtBQUNBLFFBQUlBLE1BQU0rVCxTQUFTd0UsSUFBSXZZLEdBQUosR0FBVSxFQUFuQixDQUFWO0FBQ0EsUUFBSThDLFNBQVMsSUFBSTRXLCtCQUFKLENBQXFCLEVBQUN0YSxHQUFELEVBQU1ZLEdBQU4sRUFBVy9GLElBQVgsRUFBaUJnSSxPQUFqQixFQUFyQixDQUFiO0FBQ0ErUSxVQUFNeFgsT0FBTixDQUFjbEcsSUFBZCxDQUFtQndOLE1BQW5CO0FBQ0Q7O0FBRURtVyxrQkFBaUJWLEdBQWpCLEVBQXNCdFcsT0FBdEIsRUFBK0I7QUFDN0IsUUFBSWlFLE9BQU9sSyx1QkFBUTBKLFdBQVIsQ0FBb0I2UyxJQUFJRSxFQUFKLENBQU8zVCxNQUEzQixDQUFYO0FBQ0EsUUFBSWtPLEtBQUo7QUFDQSxRQUFJaFYsT0FBTyxJQUFJd1MsNkJBQUosRUFBWDtBQUNBLFFBQUksQ0FBQyxLQUFLMEksT0FBTCxDQUFhbmQsVUFBbEIsRUFBOEI7QUFDNUIsV0FBS21kLE9BQUwsQ0FBYW5kLFVBQWIsR0FBMEIsSUFBSXRDLDBCQUFKLEVBQTFCO0FBQ0F1WixjQUFRLEtBQUtrRyxPQUFMLENBQWFuZCxVQUFyQjtBQUNELEtBSEQsTUFHTztBQUNMaVgsY0FBUSxLQUFLa0csT0FBTCxDQUFhbmQsVUFBckI7QUFDRDtBQUNELFFBQUk0ZCxlQUFlLENBQW5CO0FBQ0EsUUFBSTdTLE1BQU0sS0FBVjtBQUNBLFFBQUlFLE1BQU0sS0FBVjtBQUNBLFNBQUssSUFBSTdSLElBQUksQ0FBYixFQUFnQkEsSUFBSStRLEtBQUs3USxNQUF6QixFQUFpQ0YsR0FBakMsRUFBc0M7QUFDcEMsVUFBSXlrQixNQUFNMVQsS0FBSy9RLENBQUwsQ0FBVjtBQUNBLFVBQUl5a0IsSUFBSTlTLEdBQVIsRUFBYTtBQUNYQSxjQUFNOFMsR0FBTjtBQUNBNUcsY0FBTWxNLEdBQU4sR0FBWThTLElBQUluVCxJQUFoQjtBQUNBekksYUFBSzJOLFlBQUwsR0FBb0I3RSxJQUFJQSxHQUFKLENBQVFtQixhQUE1QjtBQUNBakssYUFBSzNCLEtBQUwsR0FBYSxPQUFiO0FBQ0EsYUFBSyxJQUFJd1ksSUFBSSxDQUFiLEVBQWdCQSxJQUFJLENBQXBCLEVBQXVCQSxHQUF2QixFQUE0QjtBQUMxQixjQUFJRSxJQUFJak8sSUFBSUwsSUFBSixDQUFTb08sQ0FBVCxFQUFZRyxRQUFaLENBQXFCLEVBQXJCLENBQVI7QUFDQSxjQUFJRCxFQUFFMWYsTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDaEIwZixnQkFBSSxNQUFNQSxDQUFWO0FBQ0Q7QUFDRC9XLGVBQUszQixLQUFMLElBQWMwWSxDQUFkO0FBQ0Q7QUFDRC9XLGFBQUtxTixXQUFMLEdBQW1CdkUsSUFBSUEsR0FBSixDQUFRNkQsVUFBUixDQUFtQkQsTUFBdEM7QUFDQTFNLGFBQUtvTixVQUFMLEdBQWtCdEUsSUFBSUEsR0FBSixDQUFRNkQsVUFBUixDQUFtQkYsS0FBckM7QUFDQXpNLGFBQUtlLFNBQUwsR0FBaUIrSCxJQUFJQSxHQUFKLENBQVF5RCxVQUF6QjtBQUNBdk0sYUFBSzFDLEVBQUwsR0FBVSxDQUFWO0FBQ0EwQyxhQUFLeU4sS0FBTCxHQUFhM0UsSUFBSUEsR0FBSixDQUFRZ0IsWUFBckI7QUFDQTlKLGFBQUt1TixhQUFMLEdBQXFCekUsSUFBSUEsR0FBSixDQUFROEQsWUFBUixDQUFxQkYsTUFBMUM7QUFDQTFNLGFBQUtzTixZQUFMLEdBQW9CeEUsSUFBSUEsR0FBSixDQUFROEQsWUFBUixDQUFxQkgsS0FBekM7QUFDQXpNLGFBQUt3TixPQUFMLEdBQWUxRSxJQUFJQSxHQUFKLENBQVFjLGNBQXZCO0FBQ0E1SixhQUFLMEIsaUJBQUwsR0FBeUJFLEtBQUtDLEtBQUwsQ0FBVzdCLEtBQUsrTixTQUFMLElBQWtCakYsSUFBSUEsR0FBSixDQUFReUQsVUFBUixDQUFtQmxCLE9BQW5CLEdBQTZCdkMsSUFBSUEsR0FBSixDQUFReUQsVUFBUixDQUFtQm5CLE9BQWxFLENBQVgsQ0FBekI7QUFDQXBMLGFBQUs2YixRQUFMLEdBQWdCL1MsSUFBSUEsR0FBSixDQUFRZ1QsU0FBUixHQUFvQmhULElBQUlBLEdBQUosQ0FBUWdULFNBQTVCLEdBQXdDaFQsSUFBSUEsR0FBSixDQUFRMEQsU0FBaEU7QUFDRCxPQXRCRCxNQXNCTyxJQUFJb1AsSUFBSTVTLEdBQVIsRUFBYTtBQUNsQmdNLGNBQU1oTSxHQUFOLEdBQVk0UyxJQUFJblQsSUFBaEI7QUFDQU8sY0FBTTRTLEdBQU47QUFDRCxPQUhNLE1BR0E7QUFDTEQsd0JBQWlCLElBQUlDLElBQUluVCxJQUFKLENBQVN2TSxVQUE5QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSTRNLE9BQU9FLEdBQVgsRUFBZ0I7QUFDZGhKLFdBQUttWCxJQUFMLEdBQVluWix1QkFBUWlMLE9BQVIsQ0FBZ0JILElBQUlMLElBQXBCLEVBQTBCTyxJQUFJUCxJQUE5QixDQUFaO0FBQ0EsVUFBSStTLFlBQVl2TixVQUFVd04sWUFBVixDQUF1QnpHLE1BQU1oVixJQUE3QixFQUFtQ0EsSUFBbkMsRUFBeUMsSUFBekMsQ0FBaEI7QUFDQSxVQUFJLENBQUMsS0FBSzhaLGFBQU4sSUFBdUIsQ0FBQzBCLFNBQTVCLEVBQXVDO0FBQ3JDLFlBQUl2WCxPQUFKLEVBQWE7QUFDWEEsa0JBQVFqRSxJQUFSLEdBQWVqTCxPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0IvQixJQUFsQixDQUFmO0FBQ0QsU0FGRCxNQUVPO0FBQ0xpRSxvQkFBVTtBQUNSakUsa0JBQU1qTCxPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0IvQixJQUFsQjtBQURFLFdBQVY7QUFHRDtBQUNEZ1YsY0FBTWhWLElBQU4sR0FBYUEsSUFBYjtBQUNBLGFBQUs4WixhQUFMLEdBQXFCLElBQXJCO0FBQ0EsYUFBSzdpQixJQUFMLENBQVV1SCxhQUFhaVgsZUFBdkIsRUFBd0MsT0FBeEM7QUFDRDtBQUNGOztBQUVELFFBQUl4WixPQUFPLElBQUlFLFVBQUosQ0FBZXdmLFlBQWYsQ0FBWDtBQUNBLFFBQUkzZixTQUFTLENBQWI7QUFDQSxRQUFJcUosYUFBYSxLQUFqQjtBQUNBLFNBQUssSUFBSWxPLElBQUksQ0FBYixFQUFnQkEsSUFBSStRLEtBQUs3USxNQUF6QixFQUFpQ0YsR0FBakMsRUFBc0M7QUFDcEMsVUFBSXlrQixNQUFNMVQsS0FBSy9RLENBQUwsQ0FBVjtBQUNBLFVBQUlFLFNBQVN1a0IsSUFBSW5ULElBQUosQ0FBU3ZNLFVBQXRCO0FBQ0EsVUFBSTBmLElBQUkvUyxHQUFSLEVBQWE7QUFDWHhELHFCQUFhLElBQWI7QUFDRDtBQUNELFVBQUksQ0FBQ3VXLElBQUk1UyxHQUFMLElBQVksQ0FBQzRTLElBQUk5UyxHQUFyQixFQUEwQjtBQUN4QjdNLGFBQUsxRixHQUFMLENBQVMsSUFBSTRGLFVBQUosQ0FBZSxDQUFDOUUsV0FBVyxFQUFYLEdBQWdCLElBQWpCLEVBQ3RCQSxXQUFXLEVBQVgsR0FBZ0IsSUFETSxFQUV0QkEsV0FBVyxDQUFYLEdBQWUsSUFGTyxFQUd0QkEsU0FBUyxJQUhhLENBQWYsQ0FBVCxFQUlJMkUsTUFKSjtBQUtBQSxrQkFBVSxDQUFWO0FBQ0FDLGFBQUsxRixHQUFMLENBQVNxbEIsSUFBSW5ULElBQWIsRUFBbUJ6TSxNQUFuQjtBQUNBQSxrQkFBVTNFLE1BQVY7QUFDRDtBQUNGO0FBQ0QsUUFBSXlOLFNBQVMsSUFBSWlYLCtCQUFKLENBQXFCO0FBQ2hDM2EsV0FBSzJVLFNBQVN3RSxJQUFJblosR0FBSixHQUFVLEVBQW5CLENBRDJCO0FBRWhDWSxXQUFLK1QsU0FBU3dFLElBQUl2WSxHQUFKLEdBQVUsRUFBbkIsQ0FGMkI7QUFHaENDLFdBQUssQ0FBQ3NZLElBQUl2WSxHQUFKLEdBQVV1WSxJQUFJblosR0FBZixJQUFzQixFQUhLO0FBSWhDb0IsaUJBQVcrWCxJQUFJblosR0FKaUI7QUFLaENpRSxnQkFMZ0M7QUFNaENwSixVQU5nQztBQU9oQ2dJO0FBUGdDLEtBQXJCLENBQWI7QUFTQStRLFVBQU14WCxPQUFOLENBQWNsRyxJQUFkLENBQW1Cd04sTUFBbkI7QUFDRDs7QUFFRGtYLFlBQVc7QUFDVCxTQUFLN2hCLEdBQUwsQ0FBU3FFLGFBQWE4UyxXQUF0QixFQUFtQyxLQUFLMEksS0FBeEM7QUFDQSxTQUFLTixPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFyQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsS0FBckI7QUFDRDs7QUFFRCxTQUFPa0MsYUFBUCxDQUFzQi9XLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QmpPLElBQTVCLEVBQWtDO0FBQ2hDLFFBQUlnbEIsS0FBSyxDQUFUO0FBQ0EsUUFBSUMsS0FBSyxDQUFUO0FBQ0EsUUFBSWpsQixTQUFTLFlBQWIsRUFBMkI7QUFDekJnbEIsV0FBS2hYLEVBQUVoSixVQUFQO0FBQ0FpZ0IsV0FBS2hYLEVBQUVqSixVQUFQO0FBQ0QsS0FIRCxNQUdPLElBQUloRixTQUFTLE9BQWIsRUFBc0I7QUFDM0JnbEIsV0FBS2hYLEVBQUU3TixNQUFQO0FBQ0E4a0IsV0FBS2hYLEVBQUU5TixNQUFQO0FBQ0Q7QUFDRCxRQUFJNmtCLE9BQU9DLEVBQVgsRUFBZTtBQUNiLGFBQU8sS0FBUDtBQUNEOztBQUVELFNBQUssSUFBSWhsQixJQUFJLENBQWIsRUFBZ0JBLElBQUkra0IsRUFBcEIsRUFBd0Iva0IsR0FBeEIsRUFBNkI7QUFDM0IsVUFBSStOLEVBQUUvTixDQUFGLE1BQVNnTyxFQUFFaE8sQ0FBRixDQUFiLEVBQW1CO0FBQ2pCLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRCxXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPc2tCLFlBQVAsQ0FBcUJ2VyxDQUFyQixFQUF3QkMsQ0FBeEIsRUFBMkJpWCxjQUEzQixFQUEyQztBQUN6QyxRQUFJLENBQUNsWCxDQUFELElBQU0sQ0FBQ0MsQ0FBWCxFQUFjO0FBQ1osYUFBTyxLQUFQO0FBQ0Q7O0FBRUQsU0FBSyxJQUFJaE8sSUFBSSxDQUFSLEVBQVdrbEIsSUFBSXRuQixPQUFPc0YsSUFBUCxDQUFZNkssQ0FBWixFQUFlN04sTUFBbkMsRUFBMkNGLElBQUlrbEIsQ0FBL0MsRUFBa0RsbEIsR0FBbEQsRUFBdUQ7QUFDckQsVUFBSW1sQixRQUFRcFgsRUFBRW5RLE9BQU9zRixJQUFQLENBQVk2SyxDQUFaLEVBQWUvTixDQUFmLENBQUYsQ0FBWjtBQUNBLFVBQUlvbEIsUUFBUXBYLEVBQUVwUSxPQUFPc0YsSUFBUCxDQUFZNkssQ0FBWixFQUFlL04sQ0FBZixDQUFGLENBQVo7QUFDQSxVQUFJLE9BQU9tbEIsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUM3QixZQUFLRixrQkFBa0JybkIsT0FBT3NGLElBQVAsQ0FBWTZLLENBQVosRUFBZS9OLENBQWYsTUFBc0IsVUFBeEMsSUFBc0RwQyxPQUFPc0YsSUFBUCxDQUFZNkssQ0FBWixFQUFlL04sQ0FBZixNQUFzQixtQkFBNUUsSUFBbUdwQyxPQUFPc0YsSUFBUCxDQUFZNkssQ0FBWixFQUFlL04sQ0FBZixNQUFzQix3QkFBMUgsSUFBdUptbEIsVUFBVUMsS0FBckssRUFBNEs7QUFDMUssaUJBQU8sS0FBUDtBQUNEO0FBQ0YsT0FKRCxNQUlPLElBQUlELE1BQU1wZ0IsVUFBTixLQUFxQmxHLFNBQXpCLEVBQW9DO0FBQ3pDLFlBQUl1bUIsTUFBTXJnQixVQUFOLEtBQXFCbEcsU0FBekIsRUFBb0M7QUFDbEMsaUJBQU8sS0FBUDtBQUNEO0FBQ0QsWUFBSSxDQUFDaVksVUFBVWdPLGFBQVYsQ0FBd0JLLEtBQXhCLEVBQStCQyxLQUEvQixFQUFzQyxZQUF0QyxDQUFMLEVBQTBEO0FBQ3hELGlCQUFPLEtBQVA7QUFDRDtBQUNGLE9BUE0sTUFPQSxJQUFJRCxNQUFNamxCLE1BQU4sS0FBaUJyQixTQUFyQixFQUFnQztBQUNyQyxZQUFJdW1CLE1BQU1sbEIsTUFBTixLQUFpQnJCLFNBQXJCLEVBQWdDO0FBQzlCLGlCQUFPLEtBQVA7QUFDRDtBQUNELFlBQUksQ0FBQ2lZLFVBQVVnTyxhQUFWLENBQXdCSyxLQUF4QixFQUErQkMsS0FBL0IsRUFBc0MsT0FBdEMsQ0FBTCxFQUFxRDtBQUNuRCxpQkFBTyxLQUFQO0FBQ0Q7QUFDRixPQVBNLE1BT0E7QUFDTCxZQUFJLENBQUN0TyxVQUFVd04sWUFBVixDQUF1QmEsS0FBdkIsRUFBOEJDLEtBQTlCLENBQUwsRUFBMkM7QUFDekMsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVELFNBQU94QixLQUFQLENBQWN5QixPQUFkLEVBQXVCO0FBQ3JCLFFBQUl2Z0IsSUFBSjtBQUNBLFFBQUk1RSxTQUFTLENBQWI7QUFDQSxRQUFJMkUsU0FBUyxDQUFiO0FBQ0EsU0FBSyxJQUFJN0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcWxCLFFBQVFubEIsTUFBNUIsRUFBb0NGLEdBQXBDLEVBQXlDO0FBQ3ZDRSxnQkFBV21sQixRQUFRcmxCLENBQVIsRUFBV0UsTUFBWCxHQUFvQm1sQixRQUFRcmxCLENBQVIsRUFBVzRDLFFBQTFDO0FBQ0Q7O0FBRURrQyxXQUFPLElBQUlFLFVBQUosQ0FBZTlFLE1BQWYsQ0FBUDtBQUNBLFNBQUssSUFBSUYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcWxCLFFBQVFubEIsTUFBNUIsRUFBb0NGLEdBQXBDLEVBQXlDO0FBQ3ZDLFVBQUkyUCxTQUFTMFYsUUFBUXJsQixDQUFSLENBQWI7QUFDQThFLFdBQUsxRixHQUFMLENBQVMsSUFBSTRGLFVBQUosQ0FBZTJLLE9BQU9BLE1BQXRCLEVBQThCQSxPQUFPL00sUUFBckMsQ0FBVCxFQUF5RGlDLE1BQXpEO0FBQ0FBLGdCQUFVOEssT0FBT3pQLE1BQVAsR0FBZ0J5UCxPQUFPL00sUUFBakM7QUFDRDtBQUNELFdBQU8sSUFBSXNnQixxQkFBSixDQUFXcGUsS0FBSzZLLE1BQWhCLENBQVA7QUFDRDs7QUFFRCxTQUFPd1QsSUFBUCxDQUFhSyxNQUFiLEVBQXFCN0ssRUFBckIsRUFBeUI0SSxLQUF6QixFQUFnQztBQUM5QnpLLGNBQVV3TyxVQUFWLENBQXFCOUIsTUFBckIsRUFBNkI3SyxFQUE3QjtBQUNBN0IsY0FBVXlPLFdBQVYsQ0FBc0IvQixNQUF0QixFQUE4QjdLLEVBQTlCLEVBQWtDNEksS0FBbEM7QUFDQSxRQUFJNUksR0FBR3hILE1BQUgsQ0FBVXFVLE1BQVYsS0FBcUIsT0FBckIsSUFBZ0M3TSxHQUFHeEgsTUFBSCxDQUFVb1MsT0FBVixLQUFzQixDQUF0RCxJQUEyRCxDQUFDNUssR0FBRzhNLFdBQW5FLEVBQWdGO0FBQzlFOU0sU0FBR3lLLEdBQUgsR0FBU3RNLFVBQVU0TyxHQUFWLENBQWMvTSxFQUFkLENBQVQ7QUFDRDtBQUNGOztBQUVELFNBQU80TSxXQUFQLENBQW9CL0IsTUFBcEIsRUFBNEI3SyxFQUE1QixFQUFnQzRJLEtBQWhDLEVBQXVDO0FBQ3JDLFFBQUlwUSxTQUFTd0gsR0FBR3hILE1BQWhCO0FBQ0EsUUFBSWtTLE1BQU1sUyxPQUFPa1MsR0FBakI7QUFDQSxZQUFRQSxHQUFSO0FBQ0UsV0FBSyxDQUFMO0FBQ0V2TSxrQkFBVTZPLEdBQVYsQ0FBY25DLE1BQWQsRUFBc0I3SyxFQUF0QixFQUEwQjRJLEtBQTFCO0FBQ0E7QUFDRixXQUFLLENBQUw7QUFDRXpLLGtCQUFVOE8sR0FBVixDQUFjcEMsTUFBZCxFQUFzQjdLLEVBQXRCLEVBQTBCNEksS0FBMUI7QUFDQTtBQUNGLFdBQUssQ0FBTDtBQUNFekssa0JBQVUrTyxJQUFWLENBQWVyQyxNQUFmLEVBQXVCN0ssRUFBdkIsRUFBMkI0SSxLQUEzQjtBQUNBO0FBQ0YsV0FBSyxNQUFMO0FBQ0U7QUFDRjtBQUNFO0FBQ0EsWUFBSUEsTUFBTWtCLEdBQU4sQ0FBVXFELElBQVYsQ0FBZ0JDLElBQUQsSUFBVTtBQUFFLGlCQUFPQSxLQUFLMUMsR0FBTCxLQUFhQSxHQUFwQjtBQUEwQixTQUFyRCxDQUFKLEVBQTREO0FBQzFEdk0sb0JBQVVrUCxHQUFWLENBQWN4QyxNQUFkLEVBQXNCN0ssRUFBdEIsRUFBMEI0SSxLQUExQjtBQUNELFNBRkQsTUFFTztBQUNMLGNBQUkwRSxNQUFNMUUsTUFBTW1CLEdBQU4sR0FBWW5CLE1BQU1tQixHQUFOLENBQVVoVixNQUFWLENBQWtCcVksSUFBRCxJQUFVQSxLQUFLMUMsR0FBTCxLQUFhQSxHQUF4QyxDQUFaLEdBQTJELEVBQXJFO0FBQ0EsY0FBSTRDLElBQUkvbEIsTUFBSixHQUFhLENBQWpCLEVBQW9CO0FBQ2xCNFcsc0JBQVVvUCxLQUFWLENBQWdCMUMsTUFBaEIsRUFBd0I3SyxFQUF4QixFQUE0QjJKLFdBQVcyRCxJQUFJLENBQUosRUFBT0UsVUFBbEIsRUFBOEIsQ0FBOUIsQ0FBNUI7QUFDRCxXQUZELE1BRU87QUFDTHhOLGVBQUc4TSxXQUFILEdBQWlCLElBQWpCO0FBQ0Q7QUFDRjtBQXZCTDtBQXlCRDs7QUFFRCxTQUFPSCxVQUFQLENBQW1COUIsTUFBbkIsRUFBMkI3SyxFQUEzQixFQUErQjtBQUM3QixRQUFJeEgsU0FBUyxFQUFiO0FBQ0FBLFdBQU9pVixJQUFQLEdBQWM1QyxPQUFPNkMsU0FBUCxFQUFkO0FBQ0EsUUFBSTVhLE9BQU8rWCxPQUFPOEMsVUFBUCxFQUFYO0FBQ0FuVixXQUFPN1EsS0FBUCxHQUFlbUwsU0FBUyxFQUF4QjtBQUNBMEYsV0FBT29TLE9BQVAsR0FBaUI5WCxTQUFTLEVBQVQsR0FBYyxDQUEvQjtBQUNBMEYsV0FBT29WLFFBQVAsR0FBa0I5YSxTQUFTLEVBQVQsR0FBYyxDQUFoQztBQUNBMEYsV0FBT2tTLEdBQVAsR0FBYTVYLE9BQU8sTUFBcEI7O0FBRUFBLFdBQU8rWCxPQUFPNkMsU0FBUCxFQUFQOztBQUVBbFYsV0FBT3FWLFVBQVAsR0FBb0IvYSxRQUFRLENBQVIsR0FBWSxHQUFoQyxDQVg2QixDQVdROztBQUVyQzs7Ozs7O0FBTUEwRixXQUFPc1YsVUFBUCxHQUFvQmhiLFFBQVEsQ0FBUixHQUFZLEdBQWhDO0FBQ0EwRixXQUFPdVYsVUFBUCxHQUFvQmpiLE9BQU8sRUFBM0I7QUFDQTBGLFdBQU9xVSxNQUFQLEdBQWdCclUsT0FBT2tTLEdBQVAsS0FBZSxDQUFmLEdBQW1CLEtBQW5CLEdBQTJCLE9BQTNDO0FBQ0ExSyxPQUFHeEgsTUFBSCxHQUFZQSxNQUFaO0FBQ0Q7O0FBRUQsU0FBT3dVLEdBQVAsQ0FBWW5DLE1BQVosRUFBb0I3SyxFQUFwQixFQUF3QjRJLEtBQXhCLEVBQStCO0FBQzdCLFFBQUl2ZCxNQUFNLEVBQVY7QUFDQSxRQUFJeUgsT0FBTytYLE9BQU82QyxTQUFQLEVBQVg7QUFDQTdDLFdBQU9uUyxJQUFQLENBQVk1RixJQUFaO0FBQ0FBLFdBQU8rWCxPQUFPNkMsU0FBUCxFQUFQO0FBQ0FyaUIsUUFBSTJpQixPQUFKLEdBQWNsYixJQUFkO0FBQ0FBLFdBQU8rWCxPQUFPOEMsVUFBUCxFQUFQO0FBQ0F0aUIsUUFBSTFELEtBQUosR0FBWW1MLFNBQVMsQ0FBckI7QUFDQXpILFFBQUk0aUIsSUFBSixHQUFXbmIsU0FBUyxDQUFULEdBQWEsQ0FBeEI7QUFDQXpILFFBQUk2aUIsYUFBSixHQUFvQnBiLE9BQU8sS0FBM0I7QUFDQXpILFFBQUk4aUIsUUFBSixHQUFldEQsT0FBTzhDLFVBQVAsRUFBZjtBQUNBdGlCLFFBQUl3SCxPQUFKLEdBQWNnWSxPQUFPNkMsU0FBUCxLQUFxQixDQUFuQztBQUNBcmlCLFFBQUkraUIsYUFBSixHQUFvQnZELE9BQU82QyxTQUFQLEVBQXBCO0FBQ0FyaUIsUUFBSWdqQixpQkFBSixHQUF3QnhELE9BQU82QyxTQUFQLEVBQXhCO0FBQ0EsUUFBSVksSUFBSSxDQUFDampCLElBQUk2aUIsYUFBSixHQUFvQixDQUFyQixJQUEwQixDQUFsQztBQUNBLFFBQUlsa0IsT0FBTyxFQUFYO0FBQ0EsU0FBSyxJQUFJM0MsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaW5CLENBQXBCLEVBQXVCam5CLEdBQXZCLEVBQTRCO0FBQzFCLFVBQUlrbkIsZ0JBQWdCMUQsT0FBTzhDLFVBQVAsRUFBcEI7QUFDQSxVQUFJakQsTUFBTUcsT0FBTzhDLFVBQVAsS0FBc0IsTUFBaEM7QUFDQTNqQixXQUFLeEMsSUFBTCxDQUFVO0FBQ1JnbkIsaUJBQVNELGFBREQ7QUFFUjdELFdBRlE7QUFHUnRqQixjQUFNbW5CLGtCQUFrQixDQUFsQixHQUFzQixTQUF0QixHQUFrQztBQUhoQyxPQUFWO0FBS0Q7QUFDRCxRQUFJdmtCLEtBQUt6QyxNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJxaEIsWUFBTWtCLEdBQU4sR0FBWWxCLE1BQU1rQixHQUFOLENBQVUxa0IsTUFBVixDQUFpQjRFLElBQWpCLENBQVo7QUFDRDtBQUNEcUIsUUFBSXJCLElBQUosR0FBV0EsSUFBWDtBQUNBcUIsUUFBSW1qQixPQUFKLEdBQWMzRCxPQUFPOEMsVUFBUCxFQUFkO0FBQ0F0aUIsUUFBSXFmLEdBQUosR0FBVUcsT0FBTzhDLFVBQVAsS0FBc0IsTUFBaEM7QUFDQTNOLE9BQUc0SyxPQUFILEdBQWF2ZixHQUFiO0FBQ0E7QUFDRDs7QUFFRCxTQUFPZ2lCLEdBQVAsQ0FBWXhDLE1BQVosRUFBb0I3SyxFQUFwQixFQUF3QjRJLEtBQXhCLEVBQStCO0FBQzdCLFFBQUl2ZCxNQUFNLEVBQVY7QUFDQSxRQUFJbU4sU0FBU3dILEdBQUd4SCxNQUFoQjtBQUNBQSxXQUFPcVUsTUFBUCxHQUFnQixLQUFoQjtBQUNBLFFBQUkvWixPQUFPK1gsT0FBTzZDLFNBQVAsRUFBWDtBQUNBN0MsV0FBT25TLElBQVAsQ0FBWTVGLElBQVo7QUFDQUEsV0FBTytYLE9BQU82QyxTQUFQLEVBQVA7QUFDQXJpQixRQUFJb2pCLE9BQUosR0FBYzNiLElBQWQ7QUFDQUEsV0FBTytYLE9BQU84QyxVQUFQLEVBQVA7QUFDQXRpQixRQUFJNmlCLGFBQUosR0FBb0JwYixPQUFPLEtBQTNCO0FBQ0F6SCxRQUFJbWpCLE9BQUosR0FBYzNELE9BQU84QyxVQUFQLEVBQWQ7QUFDQXRpQixRQUFJd0gsT0FBSixHQUFjZ1ksT0FBTzZDLFNBQVAsS0FBcUIsQ0FBbkM7QUFDQXJpQixRQUFJcWpCLEtBQUosR0FBWTdELE9BQU82QyxTQUFQLEVBQVo7QUFDQXJpQixRQUFJc2pCLFNBQUosR0FBZ0I5RCxPQUFPNkMsU0FBUCxFQUFoQjtBQUNBcmlCLFFBQUl1akIsT0FBSixHQUFjL0QsT0FBTzhDLFVBQVAsS0FBc0IsTUFBcEM7QUFDQXRpQixRQUFJd2pCLGFBQUosR0FBb0JoRSxPQUFPOEMsVUFBUCxLQUFzQixLQUExQztBQUNBLFFBQUlXLElBQUksQ0FBQ2pqQixJQUFJNmlCLGFBQUosR0FBb0IsRUFBckIsSUFBMkIsQ0FBbkM7QUFDQSxRQUFJbGtCLE9BQU8sRUFBWDtBQUNBLFNBQUssSUFBSTNDLElBQUksQ0FBYixFQUFnQkEsSUFBSWluQixDQUFwQixFQUF1QmpuQixHQUF2QixFQUE0QjtBQUMxQjJDLFdBQUt4QyxJQUFMLENBQVU7QUFDUmdtQixvQkFBWTNDLE9BQU82QyxTQUFQLEVBREo7QUFFUmhELGFBQUtHLE9BQU84QyxVQUFQLEtBQXNCLE1BRm5CLEVBRTJCO0FBQ25DbUIsWUFBSWpFLE9BQU84QyxVQUFQLEtBQXNCO0FBSGxCLE9BQVY7QUFLRDtBQUNEdGlCLFFBQUlyQixJQUFKLEdBQVdBLElBQVg7QUFDQSxRQUFJLENBQUMsS0FBSytmLEdBQVYsRUFBZTtBQUNiLFdBQUtBLEdBQUwsR0FBVyxFQUFYO0FBQ0Q7QUFDRG5CLFVBQU1tQixHQUFOLEdBQVksS0FBS0EsR0FBTCxDQUFTM2tCLE1BQVQsQ0FBZ0I0RSxLQUFLK2tCLEdBQUwsQ0FBVTNCLElBQUQsSUFBVTtBQUM3QyxhQUFPO0FBQ0wxQyxhQUFLMEMsS0FBSzFDLEdBREw7QUFFTG9FLFlBQUkxQixLQUFLMEIsRUFGSjtBQUdMdEIsb0JBQVlKLEtBQUtJLFVBSFo7QUFJTGdCLGlCQUFTbmpCLElBQUltakI7QUFKUixPQUFQO0FBTUQsS0FQMkIsQ0FBaEIsQ0FBWjtBQVFBeE8sT0FBRzRLLE9BQUgsR0FBYXZmLEdBQWI7QUFDRDs7QUFFRCxTQUFPa2lCLEtBQVAsQ0FBYzFDLE1BQWQsRUFBc0I3SyxFQUF0QixFQUEwQjVZLElBQTFCLEVBQWdDO0FBQzlCLFFBQUlvUixTQUFTd0gsR0FBR3hILE1BQWhCO0FBQ0EsUUFBSW9TLFVBQVUsRUFBZDtBQUNBcFMsV0FBT3BSLElBQVAsR0FBY0EsSUFBZDtBQUNBLFFBQUlvUixPQUFPc1YsVUFBUCxLQUFzQixJQUExQixFQUFnQztBQUM5QmxELGNBQVFvRSxnQkFBUixHQUEyQm5FLE9BQU82QyxTQUFQLEVBQTNCO0FBQ0EsVUFBSTlDLFFBQVFvRSxnQkFBUixHQUEyQixDQUEvQixFQUFrQztBQUNoQyxZQUFJbGMsT0FBTytYLE9BQU82QyxTQUFQLEVBQVg7QUFDQTlDLGdCQUFRalYsV0FBUixHQUFzQjdDLFNBQVMsQ0FBL0I7QUFDQThYLGdCQUFRcUUsTUFBUixHQUFpQm5jLFNBQVMsQ0FBVCxHQUFhLElBQTlCO0FBQ0E4WCxnQkFBUWdELFFBQVIsR0FBbUI5YSxTQUFTLENBQVQsR0FBYSxJQUFoQztBQUNBOFgsZ0JBQVFzRSxHQUFSLEdBQWNwYyxTQUFTLENBQVQsR0FBYSxJQUEzQjtBQUNBOFgsZ0JBQVF1RSxJQUFSLEdBQWVyYyxTQUFTLENBQVQsR0FBYSxJQUE1QjtBQUNBOFgsZ0JBQVF3RSxXQUFSLEdBQXNCdGMsU0FBUyxDQUFULEdBQWEsSUFBbkM7QUFDQThYLGdCQUFReUUsZ0JBQVIsR0FBMkJ2YyxTQUFTLENBQVQsR0FBYSxJQUF4QztBQUNBOFgsZ0JBQVEwRSxlQUFSLEdBQTBCeGMsT0FBTyxJQUFqQztBQUNBLFlBQUl5YyxTQUFTMUUsT0FBTzVnQixRQUFwQjtBQUNBLFlBQUkyZ0IsUUFBUXNFLEdBQVIsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDckJ0RSxrQkFBUTRFLGdCQUFSLEdBQTJCM0UsT0FBTzRFLFVBQVAsTUFBdUIsQ0FBbEQ7QUFDQTNjLGlCQUFPK1gsT0FBTzhDLFVBQVAsRUFBUDtBQUNBL0Msa0JBQVE0RSxnQkFBUixJQUE0QjFjLFNBQVMsRUFBckM7QUFDQThYLGtCQUFROEUscUJBQVIsR0FBZ0M1YyxPQUFPLEtBQXZDO0FBQ0Q7QUFDRCxZQUFJOFgsUUFBUXVFLElBQVIsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJ2RSxrQkFBUStFLHNCQUFSLEdBQWlDOUUsT0FBTzRFLFVBQVAsTUFBdUIsQ0FBeEQ7QUFDQTNjLGlCQUFPK1gsT0FBTzhDLFVBQVAsRUFBUDtBQUNBL0Msa0JBQVErRSxzQkFBUixJQUFrQzdjLFNBQVMsRUFBM0M7QUFDQThYLGtCQUFRZ0YsMkJBQVIsR0FBc0M5YyxPQUFPLEtBQTdDO0FBQ0Q7QUFDRCxZQUFJOFgsUUFBUXdFLFdBQVIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0J4RSxrQkFBUWlGLGVBQVIsR0FBMEJoRixPQUFPNkMsU0FBUCxFQUExQjtBQUNEO0FBQ0QsWUFBSTlDLFFBQVF5RSxnQkFBUixLQUE2QixDQUFqQyxFQUFvQztBQUNsQyxjQUFJOW5CLFNBQVNzakIsT0FBTzZDLFNBQVAsRUFBYjtBQUNBLGNBQUlvQyx1QkFBdUIsRUFBM0I7QUFDQSxlQUFLLElBQUl6b0IsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRSxNQUFwQixFQUE0QkYsR0FBNUIsRUFBaUM7QUFDL0J5b0IsaUNBQXFCdG9CLElBQXJCLENBQTBCcWpCLE9BQU82QyxTQUFQLEVBQTFCO0FBQ0Q7QUFDRjtBQUNELFlBQUk5QyxRQUFRMEUsZUFBUixLQUE0QixDQUFoQyxFQUFtQztBQUNqQyxjQUFJL25CLFNBQVNzakIsT0FBTzZDLFNBQVAsRUFBYjtBQUNBLGNBQUk1YSxPQUFPK1gsT0FBTzZDLFNBQVAsRUFBWDtBQUNBLGNBQUk1Z0IsUUFBUStkLE9BQU81Z0IsUUFBbkI7QUFDQSxjQUFJOGxCLE1BQU1qZCxTQUFTLENBQW5CO0FBQ0EsY0FBSWtkLFlBQVlsZCxTQUFTLENBQVQsR0FBYSxHQUE3QjtBQUNBLGNBQUltZCxXQUFXbmQsU0FBUyxDQUFULEdBQWEsR0FBNUI7QUFDQSxjQUFJaWQsUUFBUSxDQUFaLEVBQWU7QUFDYmpkLG1CQUFPK1gsT0FBTzhDLFVBQVAsRUFBUDtBQUNBL0Msb0JBQVFzRixRQUFSLEdBQW1CcGQsU0FBUyxFQUE1QjtBQUNBOFgsb0JBQVF1RixTQUFSLEdBQW9CcmQsT0FBTyxNQUEzQjtBQUNEO0FBQ0QsY0FBSWtkLGNBQWMsQ0FBbEIsRUFBcUI7QUFDbkJsZCxtQkFBTytYLE9BQU91RixVQUFQLEVBQVA7QUFDQXhGLG9CQUFReUYsYUFBUixHQUF3QnZkLE9BQU8sUUFBL0I7QUFDRDtBQUNELGNBQUltZCxhQUFhLENBQWpCLEVBQW9CO0FBQ2xCbmQsbUJBQU8rWCxPQUFPeUYsUUFBUCxFQUFQO0FBQ0ExRixvQkFBUTJGLFVBQVIsR0FBcUJ6ZCxTQUFTLENBQTlCO0FBQ0E4WCxvQkFBUTRGLFVBQVIsR0FBcUIxZCxTQUFTLENBQVQsR0FBYSxHQUFsQztBQUNBOFgsb0JBQVE2RixPQUFSLEdBQWtCM2QsT0FBTyxHQUF6QjtBQUNBQSxtQkFBTytYLE9BQU84QyxVQUFQLEVBQVA7QUFDQS9DLG9CQUFROEYsVUFBUixHQUFxQjVkLFNBQVMsQ0FBOUI7QUFDQThYLG9CQUFRK0YsT0FBUixHQUFrQjdkLE9BQU8sR0FBekI7QUFDQUEsbUJBQU8rWCxPQUFPOEMsVUFBUCxFQUFQO0FBQ0EvQyxvQkFBUWdHLFVBQVIsR0FBcUI5ZCxJQUFyQjtBQUNEO0FBQ0QrWCxpQkFBT25TLElBQVAsQ0FBWW5SLFNBQVMsQ0FBVCxJQUFjc2pCLE9BQU81Z0IsUUFBUCxHQUFrQjZDLEtBQWhDLENBQVo7QUFDRDtBQUNELFlBQUkrakIsZUFBZWpHLFFBQVFvRSxnQkFBUixHQUEyQixDQUEzQixJQUFnQ25FLE9BQU81Z0IsUUFBUCxHQUFrQnNsQixNQUFsRCxDQUFuQjtBQUNBMUUsZUFBT25TLElBQVAsQ0FBWW1ZLFlBQVo7QUFDRDtBQUNGO0FBQ0RqRyxZQUFRQyxNQUFSLEdBQWlCLElBQUlOLHFCQUFKLENBQVdNLE9BQU83VCxNQUFQLENBQWN6SyxLQUFkLENBQW9Cc2UsT0FBTzVnQixRQUEzQixDQUFYLENBQWpCO0FBQ0ErVixPQUFHNEssT0FBSCxHQUFhQSxPQUFiO0FBQ0Q7O0FBRUQsU0FBT21DLEdBQVAsQ0FBWS9NLEVBQVosRUFBZ0I7QUFDZCxRQUFJM1UsTUFBTSxFQUFWO0FBQ0EsUUFBSTJMLFNBQVNnSixHQUFHNEssT0FBSCxDQUFXQyxNQUF4Qjs7QUFFQSxRQUFJL1gsT0FBT2tFLE9BQU9vWixVQUFQLEVBQVg7QUFDQSxRQUFJdGQsU0FBUyxDQUFiLEVBQWdCO0FBQ2R6SCxVQUFJc2YsRUFBSixHQUFTLEVBQVQ7QUFDQXRmLFVBQUlzZixFQUFKLENBQU8zVCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNELEtBSEQsTUFHTztBQUNMLFVBQUltWCxXQUFXblgsT0FBTzBXLFNBQVAsRUFBZjtBQUNBLFVBQUlTLFlBQVksSUFBWixJQUFvQkEsWUFBWSxJQUFwQyxFQUEwQztBQUN4QzlpQixZQUFJakUsSUFBSixHQUFXLE9BQVg7QUFDRDtBQUNELFVBQUkrbUIsWUFBWSxJQUFaLElBQW9CQSxZQUFZLElBQXBDLEVBQTBDO0FBQ3hDOWlCLFlBQUlqRSxJQUFKLEdBQVcsT0FBWDtBQUNEO0FBQ0QsVUFBSTBwQixlQUFlOVosT0FBTzJXLFVBQVAsRUFBbkI7QUFDQXRpQixVQUFJeWxCLFlBQUosR0FBbUJBLFlBQW5CO0FBQ0EsVUFBSXpsQixJQUFJakUsSUFBSixLQUFhLE9BQWIsSUFBd0JpRSxJQUFJakUsSUFBSixLQUFhLE9BQXpDLEVBQWtEO0FBQ2hELFlBQUkwTCxPQUFPa0UsT0FBTzBXLFNBQVAsRUFBWDtBQUNBLFlBQUk1YyxRQUFRZ0MsU0FBUyxDQUFyQjtBQUNBLFlBQUloQyxVQUFVLElBQWQsRUFBb0I7QUFDbEIsZ0JBQU0sSUFBSWpKLEtBQUosQ0FBVSw2QkFBVixDQUFOO0FBQ0Q7QUFDRGlMLGVBQU9rRSxPQUFPMFcsU0FBUCxFQUFQO0FBQ0FyaUIsWUFBSTBsQixVQUFKLEdBQWlCamUsU0FBUyxDQUExQjtBQUNBekgsWUFBSTJsQixRQUFKLEdBQWVsZSxTQUFTLENBQVQsR0FBYSxJQUE1QjtBQUNBekgsWUFBSTRsQixVQUFKLEdBQWlCbmUsU0FBUyxDQUFULEdBQWEsSUFBOUI7QUFDQXpILFlBQUk2bEIsT0FBSixHQUFjcGUsU0FBUyxDQUFULEdBQWEsSUFBM0I7QUFDQXpILFlBQUk4bEIsY0FBSixHQUFxQnJlLFNBQVMsQ0FBVCxHQUFhLElBQWxDO0FBQ0F6SCxZQUFJK2xCLE9BQUosR0FBY3RlLFNBQVMsQ0FBVCxHQUFhLElBQTNCO0FBQ0F6SCxZQUFJZ21CLGFBQUosR0FBb0J2ZSxPQUFPLElBQTNCO0FBQ0F6SCxZQUFJaW1CLGVBQUosR0FBc0J0YSxPQUFPMFcsU0FBUCxFQUF0QjtBQUNBLFlBQUk2RCxLQUFLbG1CLElBQUlpbUIsZUFBYjs7QUFFQSxZQUFJam1CLElBQUkwbEIsVUFBSixLQUFtQixDQUF2QixFQUEwQjtBQUN4QixjQUFJN2UsTUFBTSxFQUFWO0FBQ0FZLGlCQUFPa0UsT0FBTzBXLFNBQVAsRUFBUDtBQUNBeGIsY0FBSTFLLElBQUosQ0FBU3NMLFNBQVMsQ0FBVCxHQUFhLElBQXRCO0FBQ0FBLGlCQUFPa0UsT0FBTzJXLFVBQVAsRUFBUDtBQUNBemIsY0FBSTFLLElBQUosQ0FBU3NMLFNBQVMsQ0FBbEI7QUFDQUEsaUJBQU9rRSxPQUFPMlcsVUFBUCxFQUFQO0FBQ0F6YixjQUFJMUssSUFBSixDQUFTc0wsU0FBUyxDQUFsQjtBQUNBekgsY0FBSTZHLEdBQUosR0FBV0EsSUFBSSxDQUFKLEtBQVUsRUFBVixHQUFlQSxJQUFJLENBQUosS0FBVSxFQUF6QixHQUE4QkEsSUFBSSxDQUFKLENBQXpDO0FBQ0FxZixnQkFBTSxDQUFOO0FBQ0E7QUFDQSxjQUFJbG1CLElBQUlqRSxJQUFKLEtBQWEsT0FBakIsRUFBMEI7QUFDeEJpRSxnQkFBSWlHLEdBQUosR0FBVWpHLElBQUk2RyxHQUFkO0FBQ0Q7QUFDRjtBQUNELFlBQUk3RyxJQUFJMGxCLFVBQUosS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsY0FBSTdlLE1BQU0sRUFBVjtBQUNBWSxpQkFBT2tFLE9BQU8wVyxTQUFQLEVBQVA7QUFDQXhiLGNBQUkxSyxJQUFKLENBQVNzTCxTQUFTLENBQVQsR0FBYSxJQUF0QjtBQUNBQSxpQkFBT2tFLE9BQU8yVyxVQUFQLEVBQVA7QUFDQXpiLGNBQUkxSyxJQUFKLENBQVNzTCxTQUFTLENBQWxCO0FBQ0FBLGlCQUFPa0UsT0FBTzJXLFVBQVAsRUFBUDtBQUNBemIsY0FBSTFLLElBQUosQ0FBU3NMLFNBQVMsQ0FBbEI7QUFDQXpILGNBQUk2RyxHQUFKLEdBQVdBLElBQUksQ0FBSixLQUFVLEVBQVYsR0FBZUEsSUFBSSxDQUFKLEtBQVUsRUFBekIsR0FBOEJBLElBQUksQ0FBSixDQUF6QztBQUNBLGNBQUlaLE1BQU0sRUFBVjtBQUNBd0IsaUJBQU9rRSxPQUFPMFcsU0FBUCxFQUFQO0FBQ0FwYyxjQUFJOUosSUFBSixDQUFTc0wsU0FBUyxDQUFULEdBQWEsSUFBdEI7QUFDQUEsaUJBQU9rRSxPQUFPMlcsVUFBUCxFQUFQO0FBQ0FyYyxjQUFJOUosSUFBSixDQUFTc0wsU0FBUyxDQUFsQjtBQUNBQSxpQkFBT2tFLE9BQU8yVyxVQUFQLEVBQVA7QUFDQXJjLGNBQUk5SixJQUFKLENBQVNzTCxTQUFTLENBQWxCO0FBQ0F6SCxjQUFJaUcsR0FBSixHQUFXQSxJQUFJLENBQUosS0FBVSxFQUFWLEdBQWVBLElBQUksQ0FBSixLQUFVLEVBQXpCLEdBQThCQSxJQUFJLENBQUosQ0FBekM7QUFDQWlnQixnQkFBTSxFQUFOO0FBQ0Q7QUFDRCxZQUFJbG1CLElBQUkybEIsUUFBSixLQUFpQixDQUFyQixFQUF3QjtBQUN0QixjQUFJUSxPQUFPLEVBQVg7QUFDQSxjQUFJQyxLQUFLLEVBQVQ7QUFDQTNlLGlCQUFPa0UsT0FBTzBXLFNBQVAsRUFBUDtBQUNBOEQsZUFBS2hxQixJQUFMLENBQVVzTCxTQUFTLENBQVQsR0FBYSxJQUF2QjtBQUNBMGUsZUFBS2hxQixJQUFMLENBQVVzTCxPQUFPLElBQWpCO0FBQ0FBLGlCQUFPa0UsT0FBTzJXLFVBQVAsRUFBUDtBQUNBNkQsZUFBS2hxQixJQUFMLENBQVVzTCxTQUFTLEVBQW5CO0FBQ0EwZSxlQUFLaHFCLElBQUwsQ0FBVXNMLE9BQU8sSUFBakI7QUFDQUEsaUJBQU9rRSxPQUFPMlcsVUFBUCxFQUFQO0FBQ0E2RCxlQUFLaHFCLElBQUwsQ0FBVXNMLFNBQVMsRUFBbkI7QUFDQTJlLGFBQUdqcUIsSUFBSCxDQUFRc0wsT0FBTyxJQUFmO0FBQ0FBLGlCQUFPa0UsT0FBTzBXLFNBQVAsRUFBUDtBQUNBK0QsYUFBR2pxQixJQUFILENBQVFzTCxTQUFTLENBQWpCO0FBQ0F6SCxjQUFJbW1CLElBQUosR0FBVyxDQUFDQSxLQUFLLENBQUwsS0FBVyxFQUFYLEdBQWdCQSxLQUFLLENBQUwsS0FBVyxFQUEzQixHQUFnQ0EsS0FBSyxDQUFMLEtBQVcsRUFBM0MsR0FBZ0RBLEtBQUssQ0FBTCxLQUFXLEVBQTNELEdBQWdFQSxLQUFLLENBQUwsQ0FBakUsSUFBNEUsR0FBNUUsSUFBbUZDLEdBQUcsQ0FBSCxLQUFTLENBQVQsR0FBYUEsR0FBRyxDQUFILENBQWhHLENBQVg7QUFDQUYsZ0JBQU0sQ0FBTjtBQUNEO0FBQ0QsWUFBSWxtQixJQUFJNGxCLFVBQUosS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEJuZSxpQkFBT2tFLE9BQU9vWixVQUFQLEVBQVA7QUFDQS9rQixjQUFJcW1CLE1BQUosR0FBYTVlLFNBQVMsQ0FBVCxHQUFhLFFBQTFCO0FBQ0F5ZSxnQkFBTSxDQUFOO0FBQ0Q7QUFDRCxZQUFJbG1CLElBQUk2bEIsT0FBSixLQUFnQixDQUFwQixFQUF1QjtBQUNyQixnQkFBTSxJQUFJcnBCLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0Q7QUFDRCxZQUFJd0QsSUFBSThsQixjQUFKLEtBQXVCLENBQTNCLEVBQThCO0FBQzVCcmUsaUJBQU9rRSxPQUFPMFcsU0FBUCxFQUFQO0FBQ0FyaUIsY0FBSXNtQixrQkFBSixHQUF5QjdlLE9BQU8sSUFBaEM7QUFDQXllLGdCQUFNLENBQU47QUFDRDtBQUNELFlBQUlsbUIsSUFBSStsQixPQUFKLEtBQWdCLENBQXBCLEVBQXVCO0FBQ3JCL2xCLGNBQUl1bUIsTUFBSixHQUFhNWEsT0FBTzJXLFVBQVAsRUFBYjtBQUNBNEQsZ0JBQU0sQ0FBTjtBQUNEO0FBQ0QsWUFBSWxtQixJQUFJZ21CLGFBQUosS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsZ0JBQU0sSUFBSXhwQixLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNEO0FBQ0QsWUFBSTBwQixLQUFLLENBQVQsRUFBWTtBQUNWdmEsaUJBQU8wQixJQUFQLENBQVk2WSxFQUFaO0FBQ0Q7QUFDRGxtQixZQUFJc2YsRUFBSixHQUFTeE0sVUFBVXdNLEVBQVYsQ0FBYTNULE1BQWIsRUFBcUIzTCxJQUFJakUsSUFBekIsQ0FBVDtBQUNELE9BNUZELE1BNEZPO0FBQ0wsY0FBTSxJQUFJUyxLQUFKLENBQVUseUJBQVYsQ0FBTjtBQUNEO0FBQ0Y7QUFDRCxXQUFPd0QsR0FBUDtBQUNEOztBQUVELFNBQU9zZixFQUFQLENBQVczVCxNQUFYLEVBQW1CNVAsSUFBbkIsRUFBeUI7QUFDdkIsUUFBSTBMLElBQUo7QUFDQSxRQUFJekgsTUFBTSxFQUFWO0FBQ0EsUUFBSWpFLFNBQVMsT0FBYixFQUFzQjtBQUNwQjBMLGFBQU9rRSxPQUFPeVksVUFBUCxFQUFQO0FBQ0EsVUFBSTNjLFNBQVMsQ0FBYixFQUFnQjtBQUNka0UsZUFBTzZhLElBQVAsQ0FBWSxDQUFaO0FBQ0EvZSxlQUFPa0UsT0FBT29aLFVBQVAsRUFBUDtBQUNBLFlBQUl0ZCxTQUFTLENBQWIsRUFBZ0I7QUFDZCxnQkFBTSxJQUFJakwsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDRDtBQUNGO0FBQ0RtUCxhQUFPMEIsSUFBUCxDQUFZLENBQVosRUFUb0IsQ0FTTDtBQUNmO0FBQ0FyTixVQUFJMkwsTUFBSixHQUFhQSxNQUFiO0FBQ0QsS0FaRCxNQVlPLElBQUk1UCxTQUFTLE9BQWIsRUFBc0I7QUFDM0IwTCxhQUFPa0UsT0FBTzJXLFVBQVAsRUFBUDtBQUNBO0FBQ0EsVUFBSTdhLFNBQVMsQ0FBVCxLQUFlLEtBQW5CLEVBQTBCO0FBQ3hCLGNBQU0sSUFBSWpMLEtBQUosQ0FBVSxvQkFBVixDQUFOO0FBQ0Q7QUFDRCxZQUFNaXFCLEtBQUssQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLEtBQWYsRUFBc0IsS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0MsS0FBcEMsRUFBMkMsS0FBM0MsRUFBa0QsS0FBbEQsRUFBeUQsS0FBekQsRUFBZ0UsS0FBaEUsRUFBdUUsS0FBdkUsRUFBOEUsSUFBOUUsRUFBb0YsSUFBcEYsQ0FBWDtBQUNBem1CLFVBQUltQyxFQUFKLEdBQVMsQ0FBQ3NGLFNBQVMsQ0FBVCxHQUFhLElBQWQsTUFBd0IsQ0FBeEIsR0FBNEIsUUFBNUIsR0FBdUMsUUFBaEQ7QUFDQXpILFVBQUkwbUIsS0FBSixHQUFZamYsU0FBUyxDQUFULEdBQWEsSUFBekI7QUFDQXpILFVBQUkybUIsTUFBSixHQUFhbGYsT0FBTyxJQUFwQjtBQUNBQSxhQUFPa0UsT0FBTzJXLFVBQVAsRUFBUDtBQUNBdGlCLFVBQUlrZ0IsZUFBSixHQUFzQixDQUFDelksU0FBUyxFQUFULEdBQWMsSUFBZixJQUF1QixDQUE3QztBQUNBekgsVUFBSXFTLE9BQUosR0FBY3JTLElBQUlrZ0IsZUFBSixHQUFzQixDQUFwQztBQUNBbGdCLFVBQUlvZ0IsY0FBSixHQUFxQjNZLFNBQVMsRUFBVCxHQUFjLElBQW5DO0FBQ0F6SCxVQUFJZ2dCLFNBQUosR0FBZ0J5RyxHQUFHem1CLElBQUlvZ0IsY0FBUCxDQUFoQjtBQUNBcGdCLFVBQUlpZ0IsT0FBSixHQUFjeFksU0FBUyxDQUFULEdBQWEsSUFBM0I7QUFDQXpILFVBQUlnWixXQUFKLEdBQWtCLENBQUN2UixPQUFPLElBQVIsS0FBaUIsRUFBakIsR0FBdUJrRSxPQUFPMlcsVUFBUCxPQUF3QixDQUFqRTtBQUNBeFAsZ0JBQVU4VCxjQUFWLENBQXlCNW1CLEdBQXpCO0FBQ0EyTCxhQUFPMEIsSUFBUCxDQUFZLENBQVo7QUFDQXJOLFVBQUkyTCxNQUFKLEdBQWFBLE1BQWI7QUFDRCxLQXBCTSxNQW9CQTtBQUNMLFlBQU0sSUFBSW5QLEtBQUosQ0FBVyxNQUFLVCxJQUFLLG1CQUFyQixDQUFOO0FBQ0Q7O0FBRUQsV0FBT2lFLEdBQVA7QUFDRDs7QUFFRCxTQUFPNmhCLElBQVAsQ0FBYXJDLE1BQWIsRUFBcUI3SyxFQUFyQixFQUF5QjRJLEtBQXpCLEVBQWdDO0FBQzlCO0FBQ0E1SSxPQUFHNEssT0FBSCxHQUFhLEVBQWI7QUFDRDs7QUFFRCxTQUFPcUMsR0FBUCxDQUFZcEMsTUFBWixFQUFvQjdLLEVBQXBCLEVBQXdCNEksS0FBeEIsRUFBK0I7QUFDN0IsUUFBSXZkLE1BQU0sRUFBVjtBQUNBQSxRQUFJb2pCLE9BQUosR0FBYzVELE9BQU82QyxTQUFQLEVBQWQ7QUFDQSxRQUFJNWEsT0FBTytYLE9BQU84QyxVQUFQLEVBQVg7QUFDQXRpQixRQUFJNm1CLGdCQUFKLEdBQXVCcGYsU0FBUyxDQUFoQztBQUNBekgsUUFBSTZpQixhQUFKLEdBQW9CcGIsT0FBTyxNQUEzQjtBQUNBK1gsV0FBT25TLElBQVAsQ0FBWSxDQUFaO0FBQ0E1RixXQUFPK1gsT0FBTzZDLFNBQVAsRUFBUDtBQUNBcmlCLFFBQUlpZCxPQUFKLEdBQWN4VixTQUFTLENBQXZCO0FBQ0F6SCxRQUFJOG1CLG9CQUFKLEdBQTJCcmYsT0FBTyxJQUFsQztBQUNBekgsUUFBSStpQixhQUFKLEdBQW9CdkQsT0FBTzZDLFNBQVAsRUFBcEI7QUFDQXJpQixRQUFJZ2pCLGlCQUFKLEdBQXdCeEQsT0FBTzZDLFNBQVAsRUFBeEI7QUFDQSxRQUFJWSxJQUFJLENBQUMsS0FBS0osYUFBTCxHQUFxQixDQUF0QixJQUEyQixDQUFuQztBQUNBLFFBQUlsa0IsT0FBTyxFQUFYO0FBQ0EsU0FBSyxJQUFJM0MsSUFBSSxDQUFiLEVBQWdCQSxJQUFJaW5CLENBQXBCLEVBQXVCam5CLEdBQXZCLEVBQTRCO0FBQzFCMkMsV0FBS3hDLElBQUwsQ0FBVSxFQUFWO0FBQ0Q7QUFDRDZELFFBQUkrbUIsS0FBSixHQUFZdkgsT0FBTzRFLFVBQVAsRUFBWjtBQUNBelAsT0FBRzRLLE9BQUgsR0FBYXZmLEdBQWI7QUFDRDs7QUFFRCxTQUFPNG1CLGNBQVAsQ0FBdUI1bUIsR0FBdkIsRUFBNEI7QUFDMUIsUUFBSW1aLFlBQVlFLFVBQVVGLFNBQVYsQ0FBb0JHLFdBQXBCLEVBQWhCO0FBQ0EsUUFBSUUsTUFBSjtBQUNBLFFBQUl3TixvQkFBSjtBQUNBLFFBQUksV0FBV0MsSUFBWCxDQUFnQjlOLFNBQWhCLENBQUosRUFBZ0M7QUFDOUIsVUFBSW5aLElBQUlvZ0IsY0FBSixJQUFzQixDQUExQixFQUE2QjtBQUMzQnBnQixZQUFJa2dCLGVBQUosR0FBc0IsQ0FBdEI7QUFDQTFHLGlCQUFTLElBQUkzWixLQUFKLENBQVUsQ0FBVixDQUFUO0FBQ0FtbkIsK0JBQXVCaG5CLElBQUlvZ0IsY0FBSixHQUFxQixDQUE1QztBQUNELE9BSkQsTUFJTztBQUNMcGdCLFlBQUlrZ0IsZUFBSixHQUFzQixDQUF0QjtBQUNBMUcsaUJBQVMsSUFBSTNaLEtBQUosQ0FBVSxDQUFWLENBQVQ7QUFDQW1uQiwrQkFBdUJobkIsSUFBSW9nQixjQUEzQjtBQUNEO0FBQ0YsS0FWRCxNQVVPLElBQUlqSCxVQUFVTyxPQUFWLENBQWtCLFNBQWxCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDOUMxWixVQUFJa2dCLGVBQUosR0FBc0IsQ0FBdEI7QUFDQTFHLGVBQVMsSUFBSTNaLEtBQUosQ0FBVSxDQUFWLENBQVQ7QUFDQW1uQiw2QkFBdUJobkIsSUFBSW9nQixjQUEzQjtBQUNELEtBSk0sTUFJQTtBQUNMcGdCLFVBQUlrZ0IsZUFBSixHQUFzQixDQUF0QjtBQUNBMUcsZUFBUyxJQUFJM1osS0FBSixDQUFVLENBQVYsQ0FBVDtBQUNBLFVBQUlHLElBQUlvZ0IsY0FBSixJQUFzQixDQUExQixFQUE2QjtBQUMzQjRHLCtCQUF1QmhuQixJQUFJb2dCLGNBQUosR0FBcUIsQ0FBNUM7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJcGdCLElBQUlpZ0IsT0FBSixLQUFnQixDQUFwQixFQUF1QjtBQUNyQmpnQixjQUFJa2dCLGVBQUosR0FBc0IsQ0FBdEI7QUFDQTFHLG1CQUFTLElBQUkzWixLQUFKLENBQVUsQ0FBVixDQUFUO0FBQ0Q7QUFDRG1uQiwrQkFBdUJobkIsSUFBSW9nQixjQUEzQjtBQUNEO0FBQ0Y7O0FBRUQ1RyxXQUFPLENBQVAsSUFBWXhaLElBQUlrZ0IsZUFBSixJQUF1QixDQUFuQztBQUNBMUcsV0FBTyxDQUFQLEtBQWEsQ0FBQ3haLElBQUlvZ0IsY0FBSixHQUFxQixJQUF0QixLQUErQixDQUE1QztBQUNBNUcsV0FBTyxDQUFQLElBQVksQ0FBQ3haLElBQUlvZ0IsY0FBSixHQUFxQixJQUF0QixLQUErQixDQUEzQztBQUNBNUcsV0FBTyxDQUFQLEtBQWF4WixJQUFJaWdCLE9BQUosSUFBZSxDQUE1QjtBQUNBLFFBQUlqZ0IsSUFBSWtnQixlQUFKLEtBQXdCLENBQTVCLEVBQStCO0FBQzdCMUcsYUFBTyxDQUFQLEtBQWEsQ0FBQ3dOLHVCQUF1QixJQUF4QixLQUFpQyxDQUE5QztBQUNBeE4sYUFBTyxDQUFQLElBQVksQ0FBQ3dOLHVCQUF1QixJQUF4QixLQUFpQyxDQUE3QztBQUNBeE4sYUFBTyxDQUFQLEtBQWEsS0FBSyxDQUFsQjtBQUNBQSxhQUFPLENBQVAsSUFBWSxDQUFaO0FBQ0Q7QUFDRHhaLFFBQUltZ0IsV0FBSixHQUFrQjNHLE1BQWxCO0FBQ0Q7O0FBRUQsTUFBSXVGLFdBQUosR0FBbUI7QUFDakIsV0FBTyxLQUFLdlUsUUFBTCxDQUFjQyxXQUFkLENBQTBCLEtBQUs4VCxPQUFMLENBQWEySSxXQUF2QyxDQUFQO0FBQ0Q7O0FBRUQsTUFBSW5ILE9BQUosR0FBZTtBQUNiLFdBQU8sS0FBS3ZWLFFBQUwsQ0FBY0MsV0FBZCxDQUEwQixRQUExQixDQUFQO0FBQ0Q7QUFodUJhOztrQkFtdUJEcUksUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwd0JmLE1BQU1DLFFBQU4sQ0FBZTtBQUNiclMsY0FBYTZkLE9BQWIsRUFBc0I7QUFDcEIsU0FBSzRJLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS3BLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFDLENBQWpCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFNBQUt6VixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBSzRmLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCMXNCLFNBQWhCO0FBQ0EsU0FBSzJzQixVQUFMLEdBQWtCakosUUFBUWtKLFNBQVIsSUFBcUIsS0FBdkM7QUFDRDs7QUFFRCxNQUFJOW9CLElBQUosR0FBWTtBQUNWLFdBQU8sS0FBS3lvQixLQUFaO0FBQ0Q7O0FBRUQsTUFBSU0sT0FBSixDQUFhQSxPQUFiLEVBQXNCO0FBQ3BCLFFBQUksS0FBS0EsT0FBTCxLQUFpQkEsT0FBckIsRUFBOEI7QUFDNUIsV0FBS3BtQixLQUFMO0FBQ0EsV0FBSzZsQixRQUFMLEdBQWdCTyxPQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSUEsT0FBSixHQUFlO0FBQ2IsV0FBTyxLQUFLUCxRQUFaO0FBQ0Q7O0FBRURockIsT0FBTXdZLEVBQU4sRUFBVWpOLFFBQVYsRUFBb0I0QyxXQUFwQixFQUFpQztBQUMvQixRQUFJLENBQUMsS0FBSytjLEdBQUwsQ0FBUzFTLEVBQVQsQ0FBTCxFQUFtQjtBQUNqQixXQUFLMFMsR0FBTCxDQUFTMVMsRUFBVCxJQUFlLEVBQUNqTixVQUFVQSxRQUFYO0FBQ2JpZ0Isb0JBQVksS0FEQztBQUViQyxxQkFBYSxLQUZBO0FBR2JubUIsZUFBTyxLQUFLaUcsUUFIQztBQUliNEMscUJBQWFBLGNBQWMsSUFBZCxHQUFvQjtBQUpwQixPQUFmO0FBTUEsV0FBSzhjLEtBQUwsQ0FBVyxLQUFLMWYsUUFBaEIsSUFBNEJpTixFQUE1QjtBQUNBLFdBQUtqTixRQUFMLElBQWlCQSxRQUFqQjtBQUNBLFdBQUs0ZixVQUFMLElBQW1CLENBQW5CO0FBQ0Q7QUFDRjs7QUFFRE8sYUFBWWxLLEdBQVosRUFBaUI7QUFDZixRQUFJLEtBQUswSixHQUFMLENBQVMxSixHQUFULENBQUosRUFBbUI7QUFDakIsVUFBSSxLQUFLMEosR0FBTCxDQUFTMUosR0FBVCxFQUFjbGMsS0FBZCxHQUFzQixLQUFLOGxCLFFBQUwsQ0FBY08sSUFBeEMsRUFBOEM7QUFDNUMsYUFBS1AsUUFBTCxHQUFnQjtBQUNkN2Ysb0JBQVUsS0FBSzJmLEdBQUwsQ0FBUzFKLEdBQVQsRUFBY2pXLFFBRFY7QUFFZG9nQixnQkFBTSxLQUFLVCxHQUFMLENBQVMxSixHQUFULEVBQWNsYyxLQUZOO0FBR2RrbUIsc0JBQVksS0FIRTtBQUlkQyx1QkFBYSxLQUpDO0FBS2RqSyxlQUFLQTtBQUxTLFNBQWhCO0FBT0Q7QUFDRCxhQUFPLEtBQUt5SixLQUFMLENBQVcsS0FBS0MsR0FBTCxDQUFTMUosR0FBVCxFQUFjbGMsS0FBekIsQ0FBUDtBQUNBLGFBQU8sS0FBSzRsQixHQUFMLENBQVMxSixHQUFULENBQVA7QUFDQSxXQUFLMkosVUFBTCxJQUFtQixDQUFuQjtBQUNEO0FBQ0Y7O0FBRURTLFdBQVVqbkIsSUFBVixFQUFnQmtuQixTQUFoQixFQUEyQjtBQUN6QjtBQUNBLFFBQUksQ0FBQ2xuQixJQUFMLEVBQVc7QUFDVCxZQUFNLElBQUl0RSxLQUFKLENBQVcsd0JBQVgsQ0FBTjtBQUNBO0FBQ0Q7QUFDRCxTQUFLeWdCLE9BQUwsR0FBZW5jLEtBQUttYyxPQUFwQjtBQUNBLFNBQUtFLGNBQUwsR0FBc0JyYyxLQUFLcWMsY0FBM0I7QUFDQSxRQUFHcmMsS0FBS2dkLE9BQUwsSUFBZ0IsQ0FBQyxLQUFLQSxPQUF6QixFQUFrQztBQUNoQyxXQUFLQSxPQUFMLEdBQWVoZCxLQUFLZ2QsT0FBcEI7QUFDRDtBQUNEO0FBQ0EsUUFBSWhkLEtBQUtvYyxRQUFMLEdBQWdCLEtBQUtBLFFBQXpCLEVBQW1DO0FBQ2pDLFdBQUtBLFFBQUwsR0FBZ0JwYyxLQUFLb2MsUUFBckI7QUFDQSxVQUFJK0ssY0FBYyxFQUFsQjtBQUNBLFdBQUssSUFBSWpzQixJQUFJLENBQWIsRUFBZ0JBLElBQUk4RSxLQUFLeWMsS0FBTCxDQUFXcmhCLE1BQS9CLEVBQXVDRixHQUF2QyxFQUE0QztBQUMxQyxZQUFJOGlCLE9BQU9oZSxLQUFLeWMsS0FBTCxDQUFXdmhCLENBQVgsQ0FBWDtBQUNBLFlBQUksQ0FBQyxLQUFLcXJCLEdBQUwsQ0FBU3ZJLEtBQUtuQixHQUFkLENBQUwsRUFBeUI7QUFDdkJzSyxzQkFBWTlyQixJQUFaLENBQWlCMmlCLEtBQUtuQixHQUF0QjtBQUNBLGVBQUt4aEIsSUFBTCxDQUFVMmlCLEtBQUtuQixHQUFmLEVBQW9CbUIsS0FBS3BYLFFBQXpCLEVBQW1Db1gsS0FBS3hVLFdBQXhDO0FBQ0Q7QUFDRjs7QUFFRCxVQUFHMmQsWUFBWS9yQixNQUFaLEdBQXFCLENBQXhCLEVBQTJCO0FBQ3pCLGNBQU0sSUFBSU0sS0FBSixDQUFXLDRCQUFYLENBQU47QUFDRDs7QUFFRCxVQUFJd3JCLFNBQUosRUFBZTtBQUNiLFlBQUlFLFNBQVMsS0FBS0MsU0FBTCxFQUFiO0FBQ0EsYUFBSyxJQUFJbnNCLElBQUksQ0FBYixFQUFnQkEsSUFBSWtzQixPQUFPaHNCLE1BQTNCLEVBQW1DRixHQUFuQyxFQUF3QztBQUN0QyxjQUFJaXNCLFlBQVl2TyxPQUFaLENBQW9Cd08sT0FBT2xzQixDQUFQLENBQXBCLElBQWlDLENBQXJDLEVBQXdDO0FBQ3RDLGlCQUFLNnJCLFVBQUwsQ0FBZ0JLLE9BQU9sc0IsQ0FBUCxDQUFoQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLEtBdkJELE1BdUJPO0FBQ0wsWUFBTSxJQUFJUSxLQUFKLENBQVcsMkJBQTBCc0UsS0FBS29jLFFBQVMsRUFBbkQsQ0FBTjtBQUNEO0FBQ0Y7O0FBRURpTCxjQUFhO0FBQ1gsV0FBT3Z1QixPQUFPc0YsSUFBUCxDQUFZLEtBQUttb0IsR0FBakIsQ0FBUDtBQUNEOztBQUVETSxhQUFZUyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QjtBQUM1QixRQUFJMVQsS0FBSyxLQUFLMFMsR0FBTCxDQUFTZSxNQUFULENBQVQ7QUFDQSxRQUFJelQsRUFBSixFQUFRO0FBQ05BLFNBQUdnVCxVQUFILEdBQWdCVSxRQUFoQjtBQUNEO0FBQ0Y7O0FBRURULGNBQWFRLE1BQWIsRUFBcUJFLE9BQXJCLEVBQThCO0FBQzVCLFFBQUkzVCxLQUFLLEtBQUswUyxHQUFMLENBQVNlLE1BQVQsQ0FBVDtBQUNBLFFBQUl6VCxFQUFKLEVBQVE7QUFDTkEsU0FBR2lULFdBQUgsR0FBaUJVLE9BQWpCO0FBQ0Q7QUFDRjs7QUFFREMsY0FBYTVxQixJQUFiLEVBQW1CO0FBQ2pCLFdBQU8sS0FBSzBwQixHQUFMLENBQVMxcEIsSUFBVCxDQUFQO0FBQ0Q7O0FBRUQ2cUIsUUFBT1YsSUFBUCxFQUFhO0FBQ1gsUUFBSVcsV0FBVzd1QixPQUFPc0YsSUFBUCxDQUFZLEtBQUtrb0IsS0FBakIsQ0FBZjtBQUNBLFFBQUl6UyxFQUFKOztBQUVBLFFBQUltVCxTQUFTanRCLFNBQWIsRUFBd0I7QUFDdEIsVUFBSSxLQUFLMHNCLFFBQVQsRUFBbUI7QUFDakJPLGVBQU8sS0FBS1AsUUFBTCxDQUFjTyxJQUFkLEdBQXFCLEtBQUtQLFFBQUwsQ0FBYzdmLFFBQTFDO0FBQ0QsT0FGRCxNQUVPO0FBQ0xvZ0IsZUFBTyxDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJVyxTQUFTdnNCLE1BQVQsR0FBa0IsQ0FBbEIsSUFBdUI0ckIsUUFBUSxLQUFLcGdCLFFBQXhDLEVBQWtEO0FBQ2hELGFBQU83TSxTQUFQO0FBQ0Q7QUFDRDR0QixhQUFTM2UsSUFBVCxDQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQ3RCLGFBQU9vVCxXQUFXclQsQ0FBWCxJQUFnQnFULFdBQVdwVCxDQUFYLENBQXZCO0FBQ0QsS0FGRDtBQUdBLFNBQUssSUFBSWhPLElBQUksQ0FBYixFQUFnQkEsSUFBSXlzQixTQUFTdnNCLE1BQTdCLEVBQXFDRixHQUFyQyxFQUEwQztBQUN4QyxVQUFJOHJCLFFBQVFsTixTQUFTNk4sU0FBU3pzQixDQUFULENBQVQsQ0FBWixFQUFtQztBQUNqQyxZQUFJMmhCLE1BQU0sS0FBS3lKLEtBQUwsQ0FBV3FCLFNBQVN6c0IsQ0FBVCxDQUFYLENBQVY7QUFDQSxZQUFJMnJCLGFBQWEsS0FBS04sR0FBTCxDQUFTMUosR0FBVCxFQUFjZ0ssVUFBL0I7QUFDQSxZQUFJQyxjQUFjLEtBQUtQLEdBQUwsQ0FBUzFKLEdBQVQsRUFBY2lLLFdBQWhDO0FBQ0FqVCxhQUFLLEVBQUNnSixHQUFELEVBQU1nSyxVQUFOLEVBQWtCQyxXQUFsQixFQUErQkUsTUFBTWxOLFNBQVM2TixTQUFTenNCLENBQVQsQ0FBVCxDQUFyQyxFQUE0RDBMLFVBQVVrVCxTQUFTLEtBQUt5TSxHQUFMLENBQVMxSixHQUFULEVBQWNqVyxRQUF2QixDQUF0RSxFQUFMO0FBQ0EsWUFBSSxLQUFLK2YsU0FBVCxFQUFvQjtBQUNsQixpQkFBTyxLQUFLSixHQUFMLENBQVMsS0FBS0UsUUFBTCxDQUFjNUosR0FBdkIsQ0FBUDtBQUNBLGlCQUFPLEtBQUt5SixLQUFMLENBQVcsS0FBS0csUUFBTCxDQUFjTyxJQUF6QixDQUFQO0FBQ0Q7QUFDRCxhQUFLUCxRQUFMLEdBQWdCNVMsRUFBaEI7QUFDRCxPQVZELE1BVU87QUFDTDtBQUNEO0FBQ0Y7QUFDRCxXQUFPQSxFQUFQO0FBQ0Q7O0FBRURyVCxVQUFTO0FBQ1AsU0FBSzZsQixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsRUFBWDtBQUNBLFNBQUtwSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxDQUFqQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsQ0FBdEI7QUFDQSxTQUFLelYsUUFBTCxHQUFnQixDQUFoQjtBQUNEOztBQUVEZ2hCLG9CQUFtQjtBQUNqQixTQUFLLElBQUkxc0IsSUFBSSxDQUFSLEVBQVcyc0IsSUFBSS91QixPQUFPc0YsSUFBUCxDQUFZLEtBQUttb0IsR0FBakIsRUFBc0JuckIsTUFBMUMsRUFBa0RGLElBQUkyc0IsQ0FBdEQsRUFBeUQzc0IsR0FBekQsRUFBOEQ7QUFDNUQsVUFBSTJZLEtBQUssS0FBSzBTLEdBQUwsQ0FBU3p0QixPQUFPc0YsSUFBUCxDQUFZLEtBQUttb0IsR0FBakIsRUFBc0JyckIsQ0FBdEIsQ0FBVCxDQUFUO0FBQ0EyWSxTQUFHZ1QsVUFBSCxHQUFnQixLQUFoQjtBQUNBaFQsU0FBR2lULFdBQUgsR0FBaUIsS0FBakI7QUFDRDtBQUNGOztBQUVEcm1CLFlBQVc7QUFDVCxTQUFLNGxCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNBLFNBQUtDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsU0FBS3BLLE9BQUwsR0FBZSxDQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFDLENBQWpCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFNBQUt6VixRQUFMLEdBQWdCLENBQWhCO0FBQ0EsU0FBSzRmLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCMXNCLFNBQWhCO0FBQ0EsU0FBSzJzQixVQUFMLEdBQWtCLEtBQWxCO0FBQ0Q7QUEzTFk7O2tCQThMQXpVLFE7Ozs7Ozs7Ozs7Ozs7O0FDOUxmclksT0FBT0MsT0FBUCxHQUFpQjtBQUNmaXVCLGVBQWExb0IsbUJBQU9BLENBQUMsa0VBQVIsRUFBOEJDO0FBRDVCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBLE1BQU0wb0IsZ0JBQWdCdmxCLHNCQUFPdWxCLGFBQTdCO0FBQ0EsTUFBTUMsY0FBYyxDQUFwQjtBQUNBLE1BQU1DLFlBQVksQ0FBbEI7QUFDQSxNQUFNQyxZQUFZLENBQWxCO0FBQ0EsTUFBTUMsY0FBYyxDQUFwQjtBQUNBLE1BQU1MLFdBQU4sQ0FBa0I7QUFDaEJsb0IsY0FBYTZkLE9BQWIsRUFBc0I7QUFDcEIsU0FBS0EsT0FBTCxHQUFlM2tCLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQjJYLE9BQWxCLENBQWY7QUFDQSxTQUFLWixHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUt1TCxNQUFMLEdBQWMsQ0FBZDtBQUNBLFNBQUs1c0IsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLNnNCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEtBQUsvSyxPQUFMLENBQWErSyxRQUE3QjtBQUNBLFNBQUszZCxNQUFMLEdBQWMsS0FBSzRTLE9BQUwsQ0FBYTVTLE1BQWIsSUFBdUIsZUFBckM7QUFDQSxTQUFLNGQsYUFBTCxHQUFxQixDQUFyQjtBQUNEOztBQUVEOXVCLFNBQVE7QUFDTixTQUFLc0QsRUFBTCxDQUFROHFCLGNBQWNXLFdBQXRCLEVBQW1DLEtBQUtDLElBQUwsQ0FBVWpyQixJQUFWLENBQWUsSUFBZixDQUFuQztBQUNEOztBQUVELGFBQVd6QyxJQUFYLEdBQW1CO0FBQ2pCLFdBQU8sUUFBUDtBQUNEOztBQUVEMHRCLE9BQU05TCxHQUFOLEVBQVcrTCxJQUFYLEVBQWlCO0FBQ2YsUUFBSUMsUUFBUSxJQUFaO0FBQ0EsU0FBS2hNLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUt5TCxTQUFMLEdBQWlCLEtBQWpCOztBQUVBO0FBQ0EsUUFBSVEsU0FBUyxLQUFLQyxTQUFMLENBQWVILElBQWYsQ0FBYjtBQUNBQyxVQUFNckIsT0FBTixHQUFnQixJQUFoQjtBQUNBLFdBQU93QixNQUFNLEtBQUtuTSxHQUFYLEVBQWdCaU0sTUFBaEIsRUFBd0JHLElBQXhCLENBQTZCLFVBQVVDLFFBQVYsRUFBb0I7QUFDdEQsVUFBSUEsU0FBU0MsRUFBYixFQUFpQjtBQUNmTixjQUFNVCxNQUFOLEdBQWVjLFNBQVNkLE1BQXhCO0FBQ0EsZUFBT1MsTUFBTU8sZ0JBQU4sQ0FBdUJGLFFBQXZCLENBQVA7QUFDRDtBQUNETCxZQUFNckIsT0FBTixHQUFnQixLQUFoQjtBQUNBcUIsWUFBTTd0QixJQUFOLENBQVcrc0IsY0FBY3NCLFlBQXpCLEVBQXVDUixNQUFNbG5CLEdBQTdDLEVBQWtELElBQUlqRyxLQUFKLENBQVcsbUJBQVgsQ0FBbEQ7QUFDRCxLQVBNLEVBT0o0dEIsS0FQSSxDQU9FLFVBQVU5dEIsS0FBVixFQUFrQjtBQUN6QnF0QixZQUFNckIsT0FBTixHQUFnQixLQUFoQjtBQUNBcUIsWUFBTTd0QixJQUFOLENBQVcrc0IsY0FBY3NCLFlBQXpCLEVBQXVDUixNQUFNbG5CLEdBQTdDLEVBQWtEbkcsS0FBbEQ7QUFDQSxZQUFNLElBQUlFLEtBQUosQ0FBVUYsTUFBTUksT0FBaEIsQ0FBTjtBQUNELEtBWE0sQ0FBUDtBQVlEOztBQUVEd3RCLG1CQUFrQkYsUUFBbEIsRUFBNEI7QUFDMUIsUUFBSUwsUUFBUSxJQUFaO0FBQ0EsUUFBSWhlLFNBQVMsS0FBS25CLFFBQUwsQ0FBY0MsV0FBZCxDQUEwQixLQUFLa0IsTUFBL0IsQ0FBYjtBQUNBLFNBQUs0ZCxhQUFMO0FBQ0EsUUFBSWMsU0FBUyxLQUFLZCxhQUFsQjtBQUNBLFFBQUlTLFNBQVNDLEVBQVQsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsY0FBUSxLQUFLWCxRQUFiO0FBQ0UsYUFBS04sU0FBTDtBQUNFZ0IsbUJBQVNNLElBQVQsR0FBZ0JQLElBQWhCLENBQXNCanBCLElBQUQsSUFBVTtBQUM3QjZvQixrQkFBTXJCLE9BQU4sR0FBZ0IsS0FBaEI7QUFDQSxnQkFBSSxDQUFDcUIsTUFBTVAsU0FBUCxJQUFvQixDQUFDTyxNQUFNTixVQUEvQixFQUEyQztBQUN6QyxrQkFBSTFkLE1BQUosRUFBWTtBQUNWQSx1QkFBT3hQLElBQVAsQ0FBWTJFLElBQVo7QUFDQTZvQixzQkFBTTd0QixJQUFOLENBQVcrc0IsY0FBYzBCLGVBQXpCLEVBQTBDNWUsTUFBMUM7QUFDRCxlQUhELE1BR087QUFDTGdlLHNCQUFNN3RCLElBQU4sQ0FBVytzQixjQUFjMEIsZUFBekIsRUFBMEN6cEIsSUFBMUM7QUFDRDtBQUNGO0FBQ0YsV0FWRDtBQVdBO0FBQ0YsYUFBS2lvQixTQUFMO0FBQ0VpQixtQkFBU3ZOLElBQVQsR0FBZ0JzTixJQUFoQixDQUFzQmpwQixJQUFELElBQVU7QUFDN0I2b0Isa0JBQU1yQixPQUFOLEdBQWdCLEtBQWhCO0FBQ0EsZ0JBQUksQ0FBQ3FCLE1BQU1QLFNBQVAsSUFBb0IsQ0FBQ08sTUFBTU4sVUFBL0IsRUFBMkM7QUFDekMsa0JBQUkxZCxNQUFKLEVBQVk7QUFDVkEsdUJBQU94UCxJQUFQLENBQVkyRSxJQUFaO0FBQ0E2b0Isc0JBQU03dEIsSUFBTixDQUFXK3NCLGNBQWMwQixlQUF6QixFQUEwQzVlLE1BQTFDO0FBQ0QsZUFIRCxNQUdPO0FBQ0xnZSxzQkFBTTd0QixJQUFOLENBQVcrc0IsY0FBYzBCLGVBQXpCLEVBQTBDenBCLElBQTFDO0FBQ0Q7QUFDRjtBQUNGLFdBVkQ7QUFXQTtBQUNGLGFBQUttb0IsV0FBTDtBQUNFZSxtQkFBU1EsV0FBVCxHQUF1QlQsSUFBdkIsQ0FBNkJqcEIsSUFBRCxJQUFVO0FBQ3BDNm9CLGtCQUFNckIsT0FBTixHQUFnQixLQUFoQjtBQUNBLGdCQUFJLENBQUNxQixNQUFNUCxTQUFQLElBQW9CLENBQUNPLE1BQU1OLFVBQS9CLEVBQTJDO0FBQ3pDLGtCQUFJMWQsTUFBSixFQUFZO0FBQ1ZBLHVCQUFPeFAsSUFBUCxDQUFZLElBQUk2RSxVQUFKLENBQWVGLElBQWYsQ0FBWjtBQUNBNm9CLHNCQUFNN3RCLElBQU4sQ0FBVytzQixjQUFjMEIsZUFBekIsRUFBMEM1ZSxNQUExQztBQUNELGVBSEQsTUFHTztBQUNMZ2Usc0JBQU03dEIsSUFBTixDQUFXK3NCLGNBQWMwQixlQUF6QixFQUEwQ3pwQixJQUExQztBQUNEO0FBQ0Y7QUFDRixXQVZEO0FBV0E7QUFDRixhQUFLZ29CLFdBQUw7QUFDQTtBQUNFLGlCQUFPLEtBQUsyQixTQUFMLENBQWVULFNBQVMxYyxJQUFULENBQWNvZCxTQUFkLEVBQWYsRUFBMENMLE1BQTFDLENBQVA7QUExQ0o7QUE0Q0Q7QUFDRjs7QUFFREksWUFBV0UsTUFBWCxFQUFtQk4sTUFBbkIsRUFBMkI7QUFDekIsUUFBSTFlLFNBQVMsS0FBS25CLFFBQUwsQ0FBY0MsV0FBZCxDQUEwQixLQUFLa0IsTUFBL0IsQ0FBYjtBQUNBLFFBQUssQ0FBQ0EsTUFBRCxJQUFXLEtBQUt3ZCxPQUFqQixJQUE2QixLQUFLRSxVQUF0QyxFQUFrRDtBQUNoRCxVQUFJO0FBQ0YsYUFBS0YsT0FBTCxDQUFheUIsTUFBYjtBQUNELE9BRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVjtBQUNEO0FBQ0Y7O0FBRUQsU0FBSzFCLE9BQUwsR0FBZXdCLE1BQWY7QUFDQSxRQUFJLEtBQUtyQyxPQUFMLEtBQWlCLEtBQXJCLEVBQTRCO0FBQzFCO0FBQ0Q7O0FBRUQsUUFBSXFCLFFBQVEsSUFBWjtBQUNBO0FBQ0E7QUFDQSxTQUFLUixPQUFMLElBQWdCLEtBQUtBLE9BQUwsQ0FBYWhLLElBQWIsR0FBb0I0SyxJQUFwQixDQUF5QixVQUFVZSxHQUFWLEVBQWU7QUFDdEQsVUFBSUEsSUFBSUMsSUFBUixFQUFjO0FBQ1o7QUFDQXBCLGNBQU1yQixPQUFOLEdBQWdCLEtBQWhCO0FBQ0FxQixjQUFNVCxNQUFOLEdBQWUsQ0FBZjtBQUNBUyxjQUFNN3RCLElBQU4sQ0FBVytzQixjQUFjMEIsZUFBekIsRUFBMEM1ZSxNQUExQztBQUNBO0FBQ0Q7O0FBRUQsVUFBSWdlLE1BQU1QLFNBQU4sSUFBbUJPLE1BQU1OLFVBQTdCLEVBQXlDO0FBQ3ZDLFlBQUtNLE1BQU1SLE9BQVgsRUFBb0I7QUFDbEIsY0FBSTtBQUNGUSxrQkFBTVIsT0FBTixDQUFjeUIsTUFBZDtBQUNELFdBRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVjtBQUNEO0FBQ0Y7O0FBRUQ7QUFDRDtBQUNEbGYsYUFBT3hQLElBQVAsQ0FBWTJ1QixJQUFJdndCLEtBQWhCO0FBQ0FvdkIsWUFBTTd0QixJQUFOLENBQVcrc0IsY0FBY21DLGlCQUF6QixFQUE0Q3JmLE1BQTVDO0FBQ0EsYUFBT2dlLE1BQU1jLFNBQU4sQ0FBZ0JFLE1BQWhCLEVBQXdCTixNQUF4QixDQUFQO0FBQ0QsS0F2QmUsRUF1QmJELEtBdkJhLENBdUJOOXRCLEtBQUQsSUFBVztBQUNsQnF0QixZQUFNckIsT0FBTixHQUFnQixLQUFoQjtBQUNBcUIsWUFBTTd0QixJQUFOLENBQVcrc0IsY0FBY3NCLFlBQXpCLEVBQXVDUixNQUFNbG5CLEdBQTdDLEVBQWtEbkcsS0FBbEQ7QUFDRCxLQTFCZSxDQUFoQjtBQTJCRDs7QUFFRHV0QixZQUFXSCxJQUFYLEVBQWlCO0FBQ2YsUUFBSTVnQixVQUFVbFAsT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCOGlCLElBQWxCLENBQWQ7QUFDQSxRQUFJdUIsVUFBVSxJQUFJQyxPQUFKLEVBQWQ7O0FBRUEsUUFBSXRCLFNBQVM7QUFDWDVMLGNBQVEsS0FERztBQUVYaU4sZUFBU0EsT0FGRTtBQUdYRSxZQUFNLE1BSEs7QUFJWEMsYUFBTzs7QUFHVDtBQUNBO0FBUmEsS0FBYixDQVNBLElBQUksT0FBTyxLQUFLN00sT0FBTCxDQUFhME0sT0FBcEIsS0FBZ0MsUUFBcEMsRUFBOEM7QUFDNUMsVUFBSUksZ0JBQWdCLEtBQUs5TSxPQUFMLENBQWEwTSxPQUFqQztBQUNBLFdBQUssSUFBSTlyQixHQUFULElBQWdCa3NCLGFBQWhCLEVBQStCO0FBQzdCLFlBQUlBLGNBQWNDLGNBQWQsQ0FBNkJuc0IsR0FBN0IsQ0FBSixFQUF1QztBQUNyQzhyQixrQkFBUU0sTUFBUixDQUFlcHNCLEdBQWYsRUFBb0Jrc0IsY0FBY2xzQixHQUFkLENBQXBCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFFBQUksT0FBTzJKLFFBQVFtaUIsT0FBZixLQUEyQixRQUEvQixFQUF5QztBQUN2QyxVQUFJTyxhQUFhMWlCLFFBQVFtaUIsT0FBekI7QUFDQSxXQUFLLElBQUk5ckIsR0FBVCxJQUFnQnFzQixVQUFoQixFQUE0QjtBQUMxQixZQUFJQSxXQUFXRixjQUFYLENBQTBCbnNCLEdBQTFCLENBQUosRUFBb0M7QUFDbEM4ckIsa0JBQVFNLE1BQVIsQ0FBZXBzQixHQUFmLEVBQW9CcXNCLFdBQVdyc0IsR0FBWCxDQUFwQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxRQUFJMkosUUFBUTJpQixJQUFSLEtBQWlCLEtBQXJCLEVBQTRCO0FBQzFCN0IsYUFBT3VCLElBQVAsR0FBYyxhQUFkO0FBQ0Q7O0FBRUQ7QUFDQTtBQUNBLFFBQUlyaUIsUUFBUTRpQixlQUFaLEVBQTZCO0FBQzNCOUIsYUFBTytCLFdBQVAsR0FBcUIsU0FBckI7QUFDRDs7QUFFRDtBQUNBLFdBQU8vQixNQUFQO0FBQ0Q7O0FBRURnQixXQUFVO0FBQ1IsUUFBSSxLQUFLekIsT0FBVCxFQUFrQjtBQUNoQixVQUFJO0FBQ0YsYUFBS0EsT0FBTCxDQUFheUIsTUFBYjtBQUNELE9BRkQsQ0FFRSxPQUFPQyxDQUFQLEVBQVU7QUFDVjtBQUNEO0FBQ0QsV0FBSzFCLE9BQUwsR0FBZSxJQUFmO0FBQ0EsV0FBS2IsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLYyxTQUFMLEdBQWlCLElBQWpCO0FBQ0Q7QUFDRjs7QUFFRDduQixZQUFXO0FBQ1QsU0FBSzhuQixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBS3VCLE1BQUw7QUFDRDtBQTdNZTs7a0JBZ05IaEMsVzs7Ozs7Ozs7Ozs7Ozs7QUN2TmZsdUIsT0FBT0MsT0FBUCxHQUFpQjtBQUNmaXhCLGNBQVkxckIsbUJBQU9BLENBQUMscURBQVIsRUFBcUJDO0FBRGxCLENBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0EsTUFBTTByQixJQUFOLENBQVc7QUFDVCxTQUFPOWtCLElBQVAsQ0FBYXhNLEtBQWIsRUFBb0I7QUFDbEIsV0FBT3V4QixzQkFBT0MsV0FBUCxDQUFtQnh4QixLQUFuQixDQUFQO0FBQ0Q7QUFDRCxTQUFPeXhCLE9BQVAsQ0FBZ0JqbEIsSUFBaEIsRUFBc0JwSixJQUF0QixFQUE0QixHQUFHc3VCLE9BQS9CLEVBQXdDO0FBQ3RDLFVBQU10Z0IsU0FBUyxJQUFJbWdCLHFCQUFKLEVBQWY7QUFDQW5nQixXQUFPdWdCLEtBQVAsQ0FBYUwsS0FBSzlrQixJQUFMLENBQVVBLElBQVYsQ0FBYixFQUE4QjhrQixLQUFLOXZCLElBQUwsQ0FBVTRCLElBQVYsQ0FBOUIsRUFBK0MsR0FBR3N1QixPQUFsRDtBQUNBLFdBQU90Z0IsT0FBT0EsTUFBZDtBQUNEO0FBQ0QsU0FBT3dnQixTQUFQLENBQWtCbFAsT0FBbEIsRUFBMkJtUCxJQUEzQixFQUFpQztBQUMvQixXQUFPLElBQUlwckIsVUFBSixDQUFlLENBQ3BCaWMsT0FEb0IsRUFFbkJtUCxRQUFRLEVBQVQsR0FBZSxJQUZLLEVBR25CQSxRQUFRLENBQVQsR0FBYyxJQUhNLEVBSXBCQSxPQUFPLElBSmEsQ0FBZixDQUFQO0FBTUQ7QUFDRCxTQUFPQyxJQUFQLEdBQWU7QUFDYixXQUFPUixLQUFLRyxPQUFMLENBQWEsRUFBYixFQUFpQixNQUFqQixFQUF5QixJQUFJaHJCLFVBQUosQ0FBZSxDQUM3QyxJQUQ2QyxFQUN2QyxJQUR1QyxFQUNqQyxJQURpQyxFQUMzQixJQUQyQixFQUNyQjtBQUN4QixPQUY2QyxFQUV4QyxHQUZ3QyxFQUVuQyxJQUZtQyxFQUU3QixJQUY2QixFQUV2QjtBQUN0QixRQUg2QyxFQUd2QyxJQUh1QyxFQUdqQyxJQUhpQyxFQUczQixJQUgyQixFQUdyQjtBQUN4QixRQUo2QyxFQUl2QyxJQUp1QyxFQUlqQyxJQUppQyxFQUkzQixJQUoyQixDQUl0QjtBQUpzQixLQUFmLENBQXpCLENBQVA7QUFNRDtBQUNELFNBQU9zckIsSUFBUCxDQUFhLEVBQUV2d0IsSUFBRixFQUFROEksSUFBUixFQUFiLEVBQTZCO0FBQzNCLFFBQUlrQyxPQUFPLENBQVg7QUFDQSxRQUFJd2xCLE9BQU9WLEtBQUtVLElBQUwsQ0FBVTFuQixLQUFLNkMsUUFBZixFQUF5QjdDLEtBQUsrTixTQUE5QixDQUFYO0FBQ0EsUUFBSTRaLElBQUo7O0FBRUEsUUFBSXp3QixTQUFTLE9BQWIsRUFBc0I7QUFDcEJ5d0IsYUFBT1gsS0FBS1ksU0FBTCxDQUFlNW5CLElBQWYsQ0FBUDtBQUNELEtBRkQsTUFFTztBQUNMMm5CLGFBQU9YLEtBQUthLFNBQUwsQ0FBZTduQixJQUFmLENBQVA7QUFDRDs7QUFFRCxRQUFJOG5CLE9BQU9kLEtBQUtjLElBQUwsQ0FBVTluQixLQUFLNkMsUUFBZixFQUF5QjdDLEtBQUsrTixTQUFMLElBQWtCLElBQTNDLEVBQWlEL04sS0FBSzFDLEVBQXRELENBQVg7QUFDQSxLQUFDb3FCLElBQUQsRUFBT0MsSUFBUCxFQUFhRyxJQUFiLEVBQW1CQyxPQUFuQixDQUEyQjdLLFFBQVE7QUFDakNoYixjQUFRZ2IsS0FBS2hoQixVQUFiO0FBQ0QsS0FGRDtBQUdBLFdBQU84cUIsS0FBS0csT0FBTCxDQUFhamxCLElBQWIsRUFBbUIsTUFBbkIsRUFBMkJ3bEIsSUFBM0IsRUFBaUNDLElBQWpDLEVBQXVDRyxJQUF2QyxDQUFQO0FBQ0Q7QUFDRCxTQUFPSixJQUFQLENBQWE3a0IsUUFBYixFQUF1QmtMLFlBQVksSUFBbkMsRUFBeUM7QUFDdkM7QUFDQSxRQUFJaWEsUUFBUSxJQUFJN3JCLFVBQUosQ0FBZSxDQUN6QixJQUR5QixFQUNuQixJQURtQixFQUNiLElBRGEsRUFDUCxJQURPLEVBQ0Q7QUFDeEIsUUFGeUIsRUFFbkIsSUFGbUIsRUFFYixJQUZhLEVBRVAsSUFGTyxFQUVEO0FBQ3hCLFFBSHlCLEVBR25CLElBSG1CLEVBR2IsSUFIYSxFQUdQLElBSE8sRUFHRDs7QUFFeEI7OztBQUdDNFIsa0JBQWMsRUFBZixHQUFxQixJQVJJLEVBU3hCQSxjQUFjLEVBQWYsR0FBcUIsSUFUSSxFQVV4QkEsY0FBYyxDQUFmLEdBQW9CLElBVkssRUFXeEJBLFNBQUQsR0FBYyxJQVhXOztBQWF6Qjs7OztBQUlDbEwsaUJBQWEsRUFBZCxHQUFvQixJQWpCSyxFQWtCeEJBLGFBQWEsRUFBZCxHQUFvQixJQWxCSyxFQW1CeEJBLGFBQWEsQ0FBZCxHQUFtQixJQW5CTSxFQW9CeEJBLFFBQUQsR0FBYSxJQXBCWSxFQXFCekIsSUFyQnlCLEVBcUJuQixJQXJCbUIsRUFxQmIsSUFyQmEsRUFxQlAsSUFyQk8sRUFxQkQ7QUFDeEI7Ozs7QUFJQSxRQTFCeUIsRUEwQm5CLElBMUJtQixFQTBCYixJQTFCYSxFQTBCUCxJQTFCTyxFQTJCekIsSUEzQnlCLEVBMkJuQixJQTNCbUIsRUEyQmIsSUEzQmEsRUEyQlAsSUEzQk8sRUEyQkQ7QUFDeEIsUUE1QnlCLEVBNEJuQixJQTVCbUIsRUE0QmIsSUE1QmEsRUE0QlAsSUE1Qk8sRUE2QnpCLElBN0J5QixFQTZCbkIsSUE3Qm1CLEVBNkJiLElBN0JhLEVBNkJQLElBN0JPLEVBNkJEO0FBQ3hCLFFBOUJ5QixFQThCbkIsSUE5Qm1CLEVBOEJiLElBOUJhLEVBOEJQLElBOUJPLEVBK0J6QixJQS9CeUIsRUErQm5CLElBL0JtQixFQStCYixJQS9CYSxFQStCUCxJQS9CTyxFQStCRDtBQUN4QixRQWhDeUIsRUFnQ25CLElBaENtQixFQWdDYixJQWhDYSxFQWdDUCxJQWhDTyxFQWlDekIsSUFqQ3lCLEVBaUNuQixJQWpDbUIsRUFpQ2IsSUFqQ2EsRUFpQ1AsSUFqQ08sRUFrQ3pCLElBbEN5QixFQWtDbkIsSUFsQ21CLEVBa0NiLElBbENhLEVBa0NQLElBbENPLEVBbUN6QixJQW5DeUIsRUFtQ25CLElBbkNtQixFQW1DYixJQW5DYSxFQW1DUCxJQW5DTyxFQW9DekIsSUFwQ3lCLEVBb0NuQixJQXBDbUIsRUFvQ2IsSUFwQ2EsRUFvQ1AsSUFwQ08sRUFxQ3pCLElBckN5QixFQXFDbkIsSUFyQ21CLEVBcUNiLElBckNhLEVBcUNQLElBckNPLEVBcUNEO0FBQ3hCLFFBdEN5QixFQXNDbkIsSUF0Q21CLEVBc0NiLElBdENhLEVBc0NQLElBdENPLEVBc0NEO0FBQ3hCLFFBdkN5QixFQXVDbkIsSUF2Q21CLEVBdUNiLElBdkNhLEVBdUNQLElBdkNPLEVBd0N6QixJQXhDeUIsRUF3Q25CLElBeENtQixFQXdDYixJQXhDYSxFQXdDUCxJQXhDTyxFQXdDRDtBQUN4QixRQXpDeUIsRUF5Q25CLElBekNtQixFQXlDYixJQXpDYSxFQXlDUCxJQXpDTyxFQTBDekIsSUExQ3lCLEVBMENuQixJQTFDbUIsRUEwQ2IsSUExQ2EsRUEwQ1AsSUExQ08sRUEyQ3pCLElBM0N5QixFQTJDbkIsSUEzQ21CLEVBMkNiLElBM0NhLEVBMkNQLElBM0NPLEVBMkNEO0FBQ3hCLFFBNUN5QixFQTRDbkIsSUE1Q21CLEVBNENiLElBNUNhLEVBNENQLElBNUNPLENBNENGO0FBNUNFLEtBQWYsQ0FBWjtBQThDQSxXQUFPbWtCLEtBQUtHLE9BQUwsQ0FBYSxJQUFJYSxNQUFNM3dCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLElBQUk4RSxVQUFKLENBQWU2ckIsS0FBZixDQUF2QyxDQUFQO0FBQ0Q7QUFDRCxTQUFPSixTQUFQLENBQWtCM3JCLElBQWxCLEVBQXdCO0FBQ3RCLFFBQUlpRyxPQUFPLENBQVg7O0FBRUEsUUFBSStsQixPQUFPakIsS0FBS2lCLElBQUwsQ0FBVTtBQUNuQjNxQixVQUFJLENBRGU7QUFFbkJ1RixnQkFBVTVHLEtBQUs0RyxRQUZJO0FBR25Ca0wsaUJBQVc5UixLQUFLOFIsU0FBTCxJQUFrQixJQUhWO0FBSW5CdEIsYUFBT3hRLEtBQUtxUixZQUpPO0FBS25CWixjQUFRelEsS0FBS3NSLGFBTE07QUFNbkJyVyxZQUFNO0FBTmEsS0FBVixDQUFYO0FBUUEsUUFBSWd4QixPQUFPbEIsS0FBS2tCLElBQUwsQ0FBVTtBQUNuQmh4QixZQUFNLE9BRGE7QUFFbkI2VyxpQkFBVzlSLEtBQUs4UixTQUFMLElBQWtCLElBRlY7QUFHbkJsTCxnQkFBVTVHLEtBQUs0RyxRQUhJO0FBSW5Cc1UsWUFBTWxiLEtBQUtrYixJQUpRO0FBS25CdkosZ0JBQVUzUixLQUFLMlIsUUFMSTtBQU1uQm5CLGFBQU94USxLQUFLcVIsWUFOTztBQU9uQlosY0FBUXpRLEtBQUtzUjtBQVBNLEtBQVYsQ0FBWDtBQVNBLEtBQUMwYSxJQUFELEVBQU9DLElBQVAsRUFBYUgsT0FBYixDQUFxQjdLLFFBQVE7QUFDM0JoYixjQUFRZ2IsS0FBS2hoQixVQUFiO0FBQ0QsS0FGRDtBQUdBLFdBQU84cUIsS0FBS0csT0FBTCxDQUFhamxCLElBQWIsRUFBbUIsTUFBbkIsRUFBMkIrbEIsSUFBM0IsRUFBaUNDLElBQWpDLENBQVA7QUFDRDtBQUNELFNBQU9MLFNBQVAsQ0FBa0I1ckIsSUFBbEIsRUFBd0I7QUFDdEIsUUFBSWlHLE9BQU8sQ0FBWDtBQUNBLFFBQUkrbEIsT0FBT2pCLEtBQUtpQixJQUFMLENBQVU7QUFDbkIzcUIsVUFBSSxDQURlO0FBRW5CdUYsZ0JBQVU1RyxLQUFLNEcsUUFGSTtBQUduQmtMLGlCQUFXOVIsS0FBSzhSLFNBQUwsSUFBa0IsSUFIVjtBQUluQnRCLGFBQU8sQ0FKWTtBQUtuQkMsY0FBUSxDQUxXO0FBTW5CeFYsWUFBTTtBQU5hLEtBQVYsQ0FBWDtBQVFBLFFBQUlneEIsT0FBT2xCLEtBQUtrQixJQUFMLENBQVU7QUFDbkJoeEIsWUFBTSxPQURhO0FBRW5CNlcsaUJBQVc5UixLQUFLOFIsU0FBTCxJQUFrQixJQUZWO0FBR25CbEwsZ0JBQVU1RyxLQUFLNEcsUUFISTtBQUluQnZFLG9CQUFjckMsS0FBS3FDLFlBSkE7QUFLbkI2cEIsa0JBQVlsc0IsS0FBSzBYLFVBTEU7QUFNbkJnQixjQUFRMVksS0FBSzBZO0FBTk0sS0FBVixDQUFYO0FBUUEsS0FBQ3NULElBQUQsRUFBT0MsSUFBUCxFQUFhSCxPQUFiLENBQXFCN0ssUUFBUTtBQUMzQmhiLGNBQVFnYixLQUFLaGhCLFVBQWI7QUFDRCxLQUZEO0FBR0EsV0FBTzhxQixLQUFLRyxPQUFMLENBQWFqbEIsSUFBYixFQUFtQixNQUFuQixFQUEyQitsQixJQUEzQixFQUFpQ0MsSUFBakMsQ0FBUDtBQUNEO0FBQ0QsU0FBT0QsSUFBUCxDQUFhaHNCLElBQWIsRUFBbUI7QUFDakIsUUFBSXFCLEtBQUtyQixLQUFLcUIsRUFBZDtBQUNBLFFBQUl1RixXQUFXNUcsS0FBSzRHLFFBQXBCO0FBQ0EsUUFBSTRKLFFBQVF4USxLQUFLd1EsS0FBakI7QUFDQSxRQUFJQyxTQUFTelEsS0FBS3lRLE1BQWxCO0FBQ0EsUUFBSTBhLFVBQVUsSUFBSWpyQixVQUFKLENBQWUsQ0FDM0IsSUFEMkIsRUFDckIsSUFEcUIsRUFDZixJQURlLEVBQ1QsSUFEUyxFQUNIO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQVAyQixFQU9yQixJQVBxQixFQU9mLElBUGUsRUFPVCxJQVBTLEVBT0g7QUFDeEIsUUFSMkIsRUFRckIsSUFScUIsRUFRZixJQVJlLEVBUVQsSUFSUyxFQVFIO0FBQ3ZCbUIsV0FBTyxFQUFSLEdBQWMsSUFUYSxFQVNQO0FBQ25CQSxXQUFPLEVBQVIsR0FBYyxJQVZhLEVBVzFCQSxPQUFPLENBQVIsR0FBYSxJQVhjLEVBWTFCQSxFQUFELEdBQU8sSUFab0IsRUFhM0IsSUFiMkIsRUFhckIsSUFicUIsRUFhZixJQWJlLEVBYVQsSUFiUyxFQWFIO0FBQ3ZCdUYsaUJBQWEsRUFBZCxHQUFvQixJQWRPLEVBY0Q7QUFDekJBLGlCQUFhLEVBQWQsR0FBb0IsSUFmTyxFQWdCMUJBLGFBQWEsQ0FBZCxHQUFtQixJQWhCUSxFQWlCMUJBLFFBQUQsR0FBYSxJQWpCYyxFQWtCM0IsSUFsQjJCLEVBa0JyQixJQWxCcUIsRUFrQmYsSUFsQmUsRUFrQlQsSUFsQlMsRUFrQkg7QUFDeEIsUUFuQjJCLEVBbUJyQixJQW5CcUIsRUFtQmYsSUFuQmUsRUFtQlQsSUFuQlMsRUFvQjNCLElBcEIyQixFQW9CckIsSUFwQnFCLEVBb0JmLElBcEJlLEVBb0JULElBcEJTLEVBb0JIO0FBQ3hCLFFBckIyQixFQXFCckIsSUFyQnFCLEVBcUJmLElBckJlLEVBcUJULElBckJTLEVBcUJIO0FBQ3hCLFFBdEIyQixFQXNCckIsSUF0QnFCLEVBc0JmLElBdEJlLEVBc0JULElBdEJTLEVBc0JIO0FBQ3hCLFFBdkIyQixFQXVCckIsSUF2QnFCLEVBdUJmLElBdkJlLEVBdUJULElBdkJTLEVBd0IzQixJQXhCMkIsRUF3QnJCLElBeEJxQixFQXdCZixJQXhCZSxFQXdCVCxJQXhCUyxFQXlCM0IsSUF6QjJCLEVBeUJyQixJQXpCcUIsRUF5QmYsSUF6QmUsRUF5QlQsSUF6QlMsRUEwQjNCLElBMUIyQixFQTBCckIsSUExQnFCLEVBMEJmLElBMUJlLEVBMEJULElBMUJTLEVBMEJIO0FBQ3hCLFFBM0IyQixFQTJCckIsSUEzQnFCLEVBMkJmLElBM0JlLEVBMkJULElBM0JTLEVBNEIzQixJQTVCMkIsRUE0QnJCLElBNUJxQixFQTRCZixJQTVCZSxFQTRCVCxJQTVCUyxFQTZCM0IsSUE3QjJCLEVBNkJyQixJQTdCcUIsRUE2QmYsSUE3QmUsRUE2QlQsSUE3QlMsRUE4QjNCLElBOUIyQixFQThCckIsSUE5QnFCLEVBOEJmLElBOUJlLEVBOEJULElBOUJTLEVBOEJIO0FBQ3ZCNEosY0FBVSxDQUFYLEdBQWdCLElBL0JXLEVBK0JMO0FBQ3JCQSxTQUFELEdBQVUsSUFoQ2lCLEVBaUMzQixJQWpDMkIsRUFpQ3JCLElBakNxQixFQWtDMUJDLFdBQVcsQ0FBWixHQUFpQixJQWxDVSxFQWtDSjtBQUN0QkEsVUFBRCxHQUFXLElBbkNnQixFQW9DM0IsSUFwQzJCLEVBb0NyQixJQXBDcUIsQ0FBZixDQUFkO0FBc0NBLFdBQU9zYSxLQUFLRyxPQUFMLENBQWEsSUFBSUMsUUFBUWxyQixVQUF6QixFQUFxQyxNQUFyQyxFQUE2Q2tyQixPQUE3QyxDQUFQO0FBQ0Q7QUFDRCxTQUFPZ0IsSUFBUCxDQUFhbnNCLElBQWIsRUFBbUI7QUFDakIsUUFBSTZLLFNBQVMsSUFBSW1nQixxQkFBSixFQUFiO0FBQ0EsUUFBSXBrQixXQUFXNUcsS0FBSzRHLFFBQXBCO0FBQ0EsUUFBSXdsQixZQUFZcHNCLEtBQUtvc0IsU0FBckI7QUFDQXZoQixXQUFPdWdCLEtBQVAsQ0FBYUwsS0FBSzlrQixJQUFMLENBQVUsRUFBVixDQUFiLEVBQTRCOGtCLEtBQUs5dkIsSUFBTCxDQUFVLE1BQVYsQ0FBNUI7QUFDQTtBQUNBNFAsV0FBT3VnQixLQUFQLENBQWFMLEtBQUs5a0IsSUFBTCxDQUFVLEVBQVYsQ0FBYixFQUE0QjhrQixLQUFLOXZCLElBQUwsQ0FBVSxNQUFWLENBQTVCO0FBQ0E0UCxXQUFPdWdCLEtBQVAsQ0FBYSxJQUFJbHJCLFVBQUosQ0FBZSxDQUMxQixJQUQwQixFQUNwQixJQURvQixFQUNkLElBRGMsRUFDUixJQURRLEVBQ0Y7QUFDdkIwRyxnQkFBWSxFQUFiLEdBQW1CLElBRk8sRUFFQUEsWUFBWSxFQUFiLEdBQW1CLElBRmxCLEVBRXlCQSxZQUFZLENBQWIsR0FBa0IsSUFGMUMsRUFFZ0RBLFdBQVcsSUFGM0QsRUFHekJ3bEIsYUFBYSxFQUFkLEdBQW9CLElBSE0sRUFHQ0EsYUFBYSxFQUFkLEdBQW9CLElBSHBCLEVBRzJCQSxhQUFhLENBQWQsR0FBbUIsSUFIN0MsRUFHbURBLFlBQVksSUFIL0QsRUFJMUIsSUFKMEIsRUFJcEIsSUFKb0IsRUFJZCxJQUpjLEVBSVIsSUFKUSxDQUlIO0FBSkcsS0FBZixDQUFiO0FBTUEsV0FBT3ZoQixPQUFPQSxNQUFkO0FBQ0Q7QUFDRCxTQUFPb2hCLElBQVAsQ0FBYWpzQixJQUFiLEVBQW1CO0FBQ2pCLFFBQUlpRyxPQUFPLENBQVg7QUFDQSxRQUFJb21CLE9BQU90QixLQUFLc0IsSUFBTCxDQUFVcnNCLEtBQUs4UixTQUFmLEVBQTBCOVIsS0FBSzRHLFFBQS9CLENBQVg7QUFDQSxRQUFJMGxCLE9BQU92QixLQUFLdUIsSUFBTCxDQUFVdHNCLEtBQUsvRSxJQUFmLENBQVg7QUFDQSxRQUFJc3hCLE9BQU94QixLQUFLd0IsSUFBTCxDQUFVdnNCLElBQVYsQ0FBWDtBQUNBLEtBQUNxc0IsSUFBRCxFQUFPQyxJQUFQLEVBQWFDLElBQWIsRUFBbUJULE9BQW5CLENBQTJCN0ssUUFBUTtBQUNqQ2hiLGNBQVFnYixLQUFLaGhCLFVBQWI7QUFDRCxLQUZEO0FBR0EsV0FBTzhxQixLQUFLRyxPQUFMLENBQWFqbEIsSUFBYixFQUFtQixNQUFuQixFQUEyQm9tQixJQUEzQixFQUFpQ0MsSUFBakMsRUFBdUNDLElBQXZDLENBQVA7QUFDRDtBQUNELFNBQU9GLElBQVAsQ0FBYXZhLFlBQVksSUFBekIsRUFBK0JsTCxRQUEvQixFQUF5QztBQUN2QyxRQUFJdWtCLFVBQVUsSUFBSWpyQixVQUFKLENBQWUsQ0FDM0IsSUFEMkIsRUFDckIsSUFEcUIsRUFDZixJQURlLEVBQ1QsSUFEUyxFQUNIO0FBQ3hCLFFBRjJCLEVBRXJCLElBRnFCLEVBRWYsSUFGZSxFQUVULElBRlMsRUFFSDtBQUN2QjRSLGtCQUFjLEVBQWYsR0FBcUIsSUFITSxFQUdBO0FBQzFCQSxrQkFBYyxFQUFmLEdBQXFCLElBSk0sRUFLMUJBLGNBQWMsQ0FBZixHQUFvQixJQUxPLEVBTTFCQSxTQUFELEdBQWMsSUFOYSxFQU8xQmxMLGFBQWEsRUFBZCxHQUFvQixJQVBPLEVBT0Q7QUFDekJBLGlCQUFhLEVBQWQsR0FBb0IsSUFSTyxFQVMxQkEsYUFBYSxDQUFkLEdBQW1CLElBVFEsRUFVMUJBLFFBQUQsR0FBYSxJQVZjLEVBVzNCLElBWDJCLEVBV3JCLElBWHFCLEVBV2Y7QUFDWixRQVoyQixFQVlyQixJQVpxQixDQVloQjtBQVpnQixLQUFmLENBQWQ7QUFjQSxXQUFPbWtCLEtBQUtHLE9BQUwsQ0FBYSxLQUFLQyxRQUFRbHJCLFVBQTFCLEVBQXNDLE1BQXRDLEVBQThDOHFCLEtBQUtNLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQTlDLEVBQW9FRixPQUFwRSxDQUFQO0FBQ0Q7QUFDRCxTQUFPbUIsSUFBUCxDQUFhcnhCLElBQWIsRUFBbUI7QUFDakIsUUFBSXhCLFFBQVEsQ0FBQyxJQUFELEVBQU87QUFDakIsUUFEVSxFQUNKLElBREksRUFDRSxJQURGLEVBQ1E7QUFDbEIsUUFGVSxFQUVKLElBRkksRUFFRSxJQUZGLEVBRVEsSUFGUixFQUVjO0FBQ3hCLFFBSFUsRUFHSixJQUhJLEVBR0UsSUFIRixFQUdRLElBSFIsRUFHYztBQUN4QixRQUpVLEVBSUosSUFKSSxFQUlFLElBSkYsRUFJUSxJQUpSLEVBSWM7QUFDeEIsUUFMVSxFQUtKLElBTEksRUFLRSxJQUxGLEVBS1EsSUFMUixFQUtjO0FBQ3hCLFFBTlUsRUFNSixJQU5JLEVBTUUsSUFORixFQU1RLElBTlIsRUFNYztBQUN4QixRQVBVLEVBT0osSUFQSSxFQU9FLElBUEYsRUFPUSxJQVBSLEVBUVYsSUFSVSxFQVFKLElBUkksRUFRRSxJQVJGLEVBUVEsSUFSUixFQVNWLElBVFUsRUFTSixJQVRJLEVBU0UsSUFURixFQVNRLElBVFIsRUFTYyxJQVRkLENBU21CO0FBVG5CLEtBQVo7QUFXQSxRQUFJd0IsU0FBUyxPQUFiLEVBQXNCO0FBQ3BCeEIsWUFBTXNOLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBdEI7QUFDQXROLFlBQU1zTixNQUFOLENBQWEsRUFBYixFQUFpQixFQUFqQixFQUFxQixHQUFHLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQ3RCLElBRHNCLEVBQ2hCLElBRGdCLEVBQ1YsSUFEVSxFQUNKLElBREksRUFFdEIsSUFGc0IsRUFFaEIsSUFGZ0IsRUFFVixJQUZVLEVBRUosSUFGSSxFQUVFLElBRkYsQ0FBeEI7QUFHRDtBQUNELFdBQU9na0IsS0FBS0csT0FBTCxDQUFhLElBQUl6eEIsTUFBTTJCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLElBQUk4RSxVQUFKLENBQWV6RyxLQUFmLENBQXZDLENBQVA7QUFDRDtBQUNELFNBQU84eUIsSUFBUCxDQUFhdnNCLElBQWIsRUFBbUI7QUFDakIsUUFBSWlHLE9BQU8sQ0FBWDtBQUNBLFFBQUl1bUIsT0FBT3hzQixLQUFLL0UsSUFBTCxLQUFjLE9BQWQsR0FBd0I4dkIsS0FBS3lCLElBQUwsRUFBeEIsR0FBc0N6QixLQUFLMEIsSUFBTCxFQUFqRDtBQUNBLFFBQUlDLE9BQU8zQixLQUFLMkIsSUFBTCxFQUFYO0FBQ0EsUUFBSUMsT0FBTzVCLEtBQUs0QixJQUFMLENBQVUzc0IsSUFBVixDQUFYO0FBQ0EsS0FBQ3dzQixJQUFELEVBQU9FLElBQVAsRUFBYUMsSUFBYixFQUFtQmIsT0FBbkIsQ0FBMkI3SyxRQUFRO0FBQ2pDaGIsY0FBUWdiLEtBQUtoaEIsVUFBYjtBQUNELEtBRkQ7QUFHQSxXQUFPOHFCLEtBQUtHLE9BQUwsQ0FBYWpsQixJQUFiLEVBQW1CLE1BQW5CLEVBQTJCdW1CLElBQTNCLEVBQWlDRSxJQUFqQyxFQUF1Q0MsSUFBdkMsQ0FBUDtBQUNEO0FBQ0QsU0FBT0gsSUFBUCxHQUFlO0FBQ2IsV0FBT3pCLEtBQUtHLE9BQUwsQ0FBYSxFQUFiLEVBQWlCLE1BQWpCLEVBQXlCLElBQUlockIsVUFBSixDQUFlLENBQzdDLElBRDZDLEVBQ3ZDO0FBQ04sUUFGNkMsRUFFdkMsSUFGdUMsRUFFakMsSUFGaUMsRUFFM0I7QUFDbEIsUUFINkMsRUFHdkMsSUFIdUMsRUFHakM7QUFDWixRQUo2QyxFQUl2QyxJQUp1QyxFQUs3QyxJQUw2QyxFQUt2QyxJQUx1QyxFQU03QyxJQU42QyxFQU12QyxJQU51QyxDQU1sQztBQU5rQyxLQUFmLENBQXpCLENBQVA7QUFRRDtBQUNELFNBQU91c0IsSUFBUCxHQUFlO0FBQ2IsV0FBTzFCLEtBQUtHLE9BQUwsQ0FBYSxFQUFiLEVBQWlCLE1BQWpCLEVBQXlCLElBQUlockIsVUFBSixDQUFlLENBQzdDLElBRDZDLEVBQ3ZDO0FBQ04sUUFGNkMsRUFFdkMsSUFGdUMsRUFFakMsSUFGaUMsRUFFM0I7QUFDbEIsUUFINkMsRUFHdkMsSUFIdUMsRUFHakM7QUFDWixRQUo2QyxFQUl2QyxJQUp1QyxDQUlsQztBQUprQyxLQUFmLENBQXpCLENBQVA7QUFNRDtBQUNELFNBQU93c0IsSUFBUCxHQUFlO0FBQ2IsUUFBSTdoQixTQUFTLElBQUltZ0IscUJBQUosRUFBYjtBQUNBLFFBQUk0QixPQUFPLENBQUMsSUFBRCxFQUFPO0FBQ2hCLFFBRFMsRUFDSCxJQURHLEVBQ0csSUFESCxFQUNTO0FBQ2xCLFFBRlMsRUFFSCxJQUZHLEVBRUcsSUFGSCxFQUVTLElBRlQsRUFFZTtBQUN4QixRQUhTLEVBR0gsSUFIRyxFQUdHLElBSEgsRUFHUyxJQUhULEVBR2U7QUFDeEIsUUFKUyxFQUlILElBSkcsRUFJRyxJQUpILEVBSVMsSUFKVCxFQUllO0FBQ3hCLFFBTFMsRUFLSDtBQUNOLFFBTlMsRUFNSCxJQU5HLEVBTUcsSUFOSCxDQU1RO0FBTlIsS0FBWDtBQVFBL2hCLFdBQU91Z0IsS0FBUCxDQUFhTCxLQUFLOWtCLElBQUwsQ0FBVSxFQUFWLENBQWIsRUFBNEI4a0IsS0FBSzl2QixJQUFMLENBQVUsTUFBVixDQUE1QixFQUErQzh2QixLQUFLOWtCLElBQUwsQ0FBVSxFQUFWLENBQS9DLEVBQThEOGtCLEtBQUs5dkIsSUFBTCxDQUFVLE1BQVYsQ0FBOUQsRUFBaUYsSUFBSWlGLFVBQUosQ0FBZTBzQixJQUFmLENBQWpGO0FBQ0EsV0FBTy9oQixPQUFPQSxNQUFkO0FBQ0Q7QUFDRCxTQUFPOGhCLElBQVAsQ0FBYTNzQixJQUFiLEVBQW1CO0FBQ2pCLFFBQUlpRyxPQUFPLENBQVg7QUFDQSxRQUFJNG1CLE9BQU85QixLQUFLOEIsSUFBTCxDQUFVN3NCLElBQVYsQ0FBWDtBQUNBLFFBQUk4c0IsT0FBTy9CLEtBQUsrQixJQUFMLEVBQVg7QUFDQSxRQUFJQyxPQUFPaEMsS0FBS2dDLElBQUwsRUFBWDtBQUNBLFFBQUlDLE9BQU9qQyxLQUFLaUMsSUFBTCxFQUFYO0FBQ0EsUUFBSUMsT0FBT2xDLEtBQUtrQyxJQUFMLEVBQVg7QUFDQSxLQUFDSixJQUFELEVBQU9DLElBQVAsRUFBYUMsSUFBYixFQUFtQkMsSUFBbkIsRUFBeUJDLElBQXpCLEVBQStCbkIsT0FBL0IsQ0FBdUM3SyxRQUFRO0FBQzdDaGIsY0FBUWdiLEtBQUtoaEIsVUFBYjtBQUNELEtBRkQ7QUFHQSxXQUFPOHFCLEtBQUtHLE9BQUwsQ0FBYWpsQixJQUFiLEVBQW1CLE1BQW5CLEVBQTJCNG1CLElBQTNCLEVBQWlDQyxJQUFqQyxFQUF1Q0MsSUFBdkMsRUFBNkNDLElBQTdDLEVBQW1EQyxJQUFuRCxDQUFQO0FBQ0Q7QUFDRCxTQUFPSixJQUFQLENBQWE3c0IsSUFBYixFQUFtQjtBQUNqQixRQUFJbXJCLE9BQUo7QUFDQSxRQUFJbnJCLEtBQUsvRSxJQUFMLEtBQWMsT0FBbEIsRUFBMkI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Frd0IsZ0JBQVVKLEtBQUttQyxJQUFMLENBQVVsdEIsSUFBVixDQUFWO0FBQ0QsS0FSRCxNQVFPO0FBQ0xtckIsZ0JBQVVKLEtBQUtvQyxJQUFMLENBQVVudEIsSUFBVixDQUFWO0FBQ0Q7QUFDRCxXQUFPK3FCLEtBQUtHLE9BQUwsQ0FBYSxLQUFLQyxRQUFRbHJCLFVBQTFCLEVBQXNDLE1BQXRDLEVBQThDOHFCLEtBQUtNLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQTlDLEVBQW9FLElBQUluckIsVUFBSixDQUFlLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBQWYsQ0FBcEUsRUFBOEdpckIsT0FBOUcsQ0FBUDtBQUNEO0FBQ0QsU0FBTytCLElBQVAsQ0FBYWx0QixJQUFiLEVBQW1CO0FBQ2pCLFFBQUltckIsVUFBVSxJQUFJanJCLFVBQUosQ0FBZSxDQUMzQixJQUQyQixFQUNyQixJQURxQixFQUNmLElBRGUsRUFDVDtBQUNsQixRQUYyQixFQUVyQixJQUZxQixFQUVmLElBRmUsRUFFVDtBQUNsQixRQUgyQixFQUdyQixJQUhxQixFQUdmO0FBQ1osUUFKMkIsRUFJckIsSUFKcUIsRUFJZixJQUplLEVBSVQsSUFKUyxFQUszQixJQUwyQixFQUtyQixJQUxxQixFQUtmLElBTGUsRUFLVCxJQUxTLEVBS0g7QUFDeEIsUUFOMkIsRUFNckJGLEtBQUtxQyxZQU5nQixFQU1GO0FBQ3pCLFFBUDJCLEVBT3JCLElBUHFCLEVBT2Y7QUFDWixRQVIyQixFQVFyQixJQVJxQixFQVFmLElBUmUsRUFRVCxJQVJTLEVBUUg7QUFDdkJyQyxTQUFLa3NCLFVBQUwsSUFBbUIsQ0FBcEIsR0FBeUIsSUFURSxFQVUzQmxzQixLQUFLa3NCLFVBQUwsR0FBa0IsSUFWUyxFQVVIO0FBQ3hCLFFBWDJCLEVBV3JCLElBWHFCLENBQWYsQ0FBZDtBQWFBLFFBQUlrQixPQUFPckMsS0FBS3FDLElBQUwsQ0FBVXB0QixLQUFLMFksTUFBZixDQUFYO0FBQ0EsV0FBT3FTLEtBQUtHLE9BQUwsQ0FBYSxJQUFJQyxRQUFRbHJCLFVBQVosR0FBeUJtdEIsS0FBS250QixVQUEzQyxFQUF1RCxNQUF2RCxFQUErRGtyQixPQUEvRCxFQUF3RWlDLElBQXhFLENBQVA7QUFDRDtBQUNELFNBQU9BLElBQVAsQ0FBYTFVLFNBQVMsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLENBQVYsRUFBYSxDQUFiLENBQXRCLEVBQXVDO0FBQ3JDLFVBQU0yVSxZQUFZM1UsT0FBT3RkLE1BQXpCO0FBQ0EsUUFBSXlQLFNBQVMsSUFBSW1nQixxQkFBSixFQUFiO0FBQ0EsUUFBSUcsVUFBVSxJQUFJanJCLFVBQUosQ0FBZSxDQUMzQixJQUQyQixFQUNyQjtBQUNOLFFBRjJCLEVBRXJCLElBRnFCLEVBRWYsSUFGZSxFQUVUOztBQUVsQixRQUoyQixFQUlyQjtBQUNOLFdBQU9tdEIsU0FMb0IsRUFLVDtBQUNsQixRQU4yQixFQU1yQixJQU5xQixFQU1mO0FBQ1osUUFQMkIsRUFPckI7O0FBRU4sUUFUMkIsRUFTckI7QUFDTixXQUFPQSxTQVZvQixFQVVUO0FBQ2xCLFFBWDJCLEVBV3JCO0FBQ04sUUFaMkIsRUFZckI7QUFDTixRQWIyQixFQWFyQixJQWJxQixFQWFmLElBYmUsRUFhVDtBQUNsQixRQWQyQixFQWNyQixJQWRxQixFQWNmLElBZGUsRUFjVCxJQWRTLEVBY0g7QUFDeEIsUUFmMkIsRUFlckIsSUFmcUIsRUFlZixJQWZlLEVBZVQsSUFmUyxFQWVIOztBQUV4QixRQWpCMkIsQ0FpQnRCO0FBakJzQixNQWtCM0JwMEIsTUFsQjJCLENBa0JwQixDQUFDbzBCLFNBQUQsQ0FsQm9CLEVBa0JQcDBCLE1BbEJPLENBa0JBeWYsTUFsQkEsRUFrQlF6ZixNQWxCUixDQWtCZSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixDQWxCZixDQUFmLENBQWQ7QUFtQkE0UixXQUFPdWdCLEtBQVAsQ0FBYUwsS0FBSzlrQixJQUFMLENBQVUsSUFBSWtsQixRQUFRbHJCLFVBQXRCLENBQWIsRUFBZ0Q4cUIsS0FBSzl2QixJQUFMLENBQVUsTUFBVixDQUFoRCxFQUFtRWt3QixPQUFuRTtBQUNBLFdBQU90Z0IsT0FBT0EsTUFBZDtBQUNEO0FBQ0QsU0FBT3NpQixJQUFQLENBQWFudEIsSUFBYixFQUFtQjtBQUNqQixRQUFJNkssU0FBUyxJQUFJbWdCLHFCQUFKLEVBQWI7QUFDQSxRQUFJL2tCLE9BQU8sRUFBWCxDQUZpQixDQUVKO0FBQ2I7QUFDQTtBQUNBLFFBQUl1SyxRQUFReFEsS0FBS3dRLEtBQWpCO0FBQ0EsUUFBSUMsU0FBU3pRLEtBQUt5USxNQUFsQjtBQUNBLFFBQUk2YyxXQUFXdHRCLEtBQUsyUixRQUFMLENBQWNsQixNQUE3QjtBQUNBLFFBQUk4YyxXQUFXdnRCLEtBQUsyUixRQUFMLENBQWNuQixLQUE3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQUkwSyxPQUFPbGIsS0FBS2tiLElBQWhCO0FBQ0EsUUFBSWlTLE9BQU8sSUFBSWp0QixVQUFKLENBQWUsQ0FDeEIsSUFEd0IsRUFDbEIsSUFEa0IsRUFDWixJQURZLEVBQ047QUFDbEIsUUFGd0IsRUFFbEIsSUFGa0IsRUFFWixJQUZZLEVBRU47QUFDbEIsUUFId0IsRUFHbEIsSUFIa0IsRUFHWjtBQUNaLFFBSndCLEVBSWxCLElBSmtCLEVBSVo7QUFDWixRQUx3QixFQUtsQixJQUxrQixFQUtaO0FBQ1osUUFOd0IsRUFNbEIsSUFOa0IsRUFNWixJQU5ZLEVBTU4sSUFOTSxFQU94QixJQVB3QixFQU9sQixJQVBrQixFQU9aLElBUFksRUFPTixJQVBNLEVBUXhCLElBUndCLEVBUWxCLElBUmtCLEVBUVosSUFSWSxFQVFOLElBUk0sRUFRQTtBQUN2QnNRLGFBQVMsQ0FBVixHQUFlLElBVFMsRUFVeEJBLFFBQVEsSUFWZ0IsRUFVVjtBQUNiQyxjQUFVLENBQVgsR0FBZ0IsSUFYUSxFQVl4QkEsU0FBUyxJQVplLEVBWVQ7QUFDZixRQWJ3QixFQWFsQixJQWJrQixFQWFaLElBYlksRUFhTixJQWJNLEVBYUE7QUFDeEIsUUFkd0IsRUFjbEIsSUFka0IsRUFjWixJQWRZLEVBY04sSUFkTSxFQWNBO0FBQ3hCLFFBZndCLEVBZWxCLElBZmtCLEVBZVosSUFmWSxFQWVOLElBZk0sRUFlQTtBQUN4QixRQWhCd0IsRUFnQmxCLElBaEJrQixFQWdCWjtBQUNaLFFBakJ3QixFQWtCeEIsSUFsQndCLEVBa0JsQixJQWxCa0IsRUFrQlosSUFsQlksRUFrQk4sSUFsQk0sRUFrQkE7QUFDeEIsUUFuQndCLEVBbUJsQixJQW5Ca0IsRUFtQlosSUFuQlksRUFtQk4sSUFuQk0sRUFvQnhCLElBcEJ3QixFQW9CbEIsSUFwQmtCLEVBb0JaLElBcEJZLEVBb0JOLElBcEJNLEVBcUJ4QixJQXJCd0IsRUFxQmxCLElBckJrQixFQXFCWixJQXJCWSxFQXFCTixJQXJCTSxFQXNCeEIsSUF0QndCLEVBc0JsQixJQXRCa0IsRUFzQlosSUF0QlksRUFzQk4sSUF0Qk0sRUF1QnhCLElBdkJ3QixFQXVCbEIsSUF2QmtCLEVBdUJaLElBdkJZLEVBdUJOLElBdkJNLEVBd0J4QixJQXhCd0IsRUF3QmxCLElBeEJrQixFQXdCWixJQXhCWSxFQXdCTixJQXhCTSxFQXlCeEIsSUF6QndCLEVBeUJsQixJQXpCa0IsRUF5QlosSUF6QlksRUF5Qk47QUFDbEIsUUExQndCLEVBMEJsQixJQTFCa0IsRUEwQlo7QUFDWixRQTNCd0IsRUEyQmxCLElBM0JrQixDQUFmLENBQVgsQ0FyQmlCLENBZ0RGO0FBQ2YsUUFBSStjLE9BQU8sSUFBSXR0QixVQUFKLENBQWUsQ0FDeEIsSUFEd0IsRUFDbEIsSUFEa0IsRUFDWixJQURZLEVBQ04sSUFETSxFQUNBO0FBQ3hCLFFBRndCLEVBRWxCLElBRmtCLEVBRVosSUFGWSxFQUVOLElBRk0sRUFFQTtBQUN4QixRQUh3QixFQUdsQixJQUhrQixFQUdaLElBSFksRUFHTixJQUhNLENBR0Q7QUFIQyxLQUFmLENBQVg7QUFLQSxRQUFJdXRCLE9BQU8sSUFBSXZ0QixVQUFKLENBQWUsQ0FDdkJvdEIsWUFBWSxFQURXLEVBQ047QUFDakJBLGdCQUFZLEVBQWIsR0FBbUIsSUFGSyxFQUd2QkEsWUFBWSxDQUFiLEdBQWtCLElBSE0sRUFJeEJBLFdBQVcsSUFKYSxFQUt2QkMsWUFBWSxFQUxXLEVBS047QUFDakJBLGdCQUFZLEVBQWIsR0FBbUIsSUFOSyxFQU92QkEsWUFBWSxDQUFiLEdBQWtCLElBUE0sRUFReEJBLFdBQVcsSUFSYSxDQUFmLENBQVg7O0FBV0ExaUIsV0FBT3VnQixLQUFQLENBQ0VMLEtBQUs5a0IsSUFBTCxDQUFVQSxPQUFPa25CLEtBQUtsdEIsVUFBWixHQUF5QmliLEtBQUtqYixVQUE5QixHQUEyQ3V0QixLQUFLdnRCLFVBQTFELENBREYsRUFDeUU4cUIsS0FBSzl2QixJQUFMLENBQVUsTUFBVixDQUR6RSxFQUM0Rmt5QixJQUQ1RixFQUVFcEMsS0FBSzlrQixJQUFMLENBQVUsSUFBSWlWLEtBQUtqYixVQUFuQixDQUZGLEVBRWtDOHFCLEtBQUs5dkIsSUFBTCxDQUFVLE1BQVYsQ0FGbEMsRUFFcURpZ0IsSUFGckQsRUFHRTZQLEtBQUs5a0IsSUFBTCxDQUFVLEVBQVYsQ0FIRixFQUdpQjhrQixLQUFLOXZCLElBQUwsQ0FBVSxNQUFWLENBSGpCLEVBR29DdXlCLElBSHBDLEVBSUV6QyxLQUFLOWtCLElBQUwsQ0FBVSxFQUFWLENBSkYsRUFJaUI4a0IsS0FBSzl2QixJQUFMLENBQVUsTUFBVixDQUpqQixFQUlvQ3d5QixJQUpwQztBQU1BLFdBQU81aUIsT0FBT0EsTUFBZDtBQUNEO0FBQ0QsU0FBT2lpQixJQUFQLEdBQWU7QUFDYixRQUFJM0IsVUFBVSxJQUFJanJCLFVBQUosQ0FBZSxDQUMzQixJQUQyQixFQUNyQjtBQUNOLFFBRjJCLEVBRXJCLElBRnFCLEVBRWYsSUFGZSxFQUVUO0FBQ2xCLFFBSDJCLEVBR3JCLElBSHFCLEVBR2YsSUFIZSxFQUdULElBSFMsQ0FHSjtBQUhJLEtBQWYsQ0FBZDtBQUtBLFdBQU82cUIsS0FBS0csT0FBTCxDQUFhLEVBQWIsRUFBaUIsTUFBakIsRUFBeUJDLE9BQXpCLENBQVA7QUFDRDtBQUNELFNBQU80QixJQUFQLEdBQWU7QUFDYixRQUFJNUIsVUFBVSxJQUFJanJCLFVBQUosQ0FBZSxDQUMzQixJQUQyQixFQUNyQjtBQUNOLFFBRjJCLEVBRXJCLElBRnFCLEVBRWYsSUFGZSxFQUVUO0FBQ2xCLFFBSDJCLEVBR3JCLElBSHFCLEVBR2YsSUFIZSxFQUdULElBSFMsQ0FHSjtBQUhJLEtBQWYsQ0FBZDtBQUtBLFdBQU82cUIsS0FBS0csT0FBTCxDQUFhLEVBQWIsRUFBaUIsTUFBakIsRUFBeUJDLE9BQXpCLENBQVA7QUFDRDtBQUNELFNBQU84QixJQUFQLEdBQWU7QUFDYixRQUFJOUIsVUFBVSxJQUFJanJCLFVBQUosQ0FBZSxDQUMzQixJQUQyQixFQUNyQjtBQUNOLFFBRjJCLEVBRXJCLElBRnFCLEVBRWYsSUFGZSxFQUVUO0FBQ2xCLFFBSDJCLEVBR3JCLElBSHFCLEVBR2YsSUFIZSxFQUdULElBSFMsQ0FHSjtBQUhJLEtBQWYsQ0FBZDtBQUtBLFdBQU82cUIsS0FBS0csT0FBTCxDQUFhLEVBQWIsRUFBaUIsTUFBakIsRUFBeUJDLE9BQXpCLENBQVA7QUFDRDtBQUNELFNBQU82QixJQUFQLEdBQWU7QUFDYixRQUFJN0IsVUFBVSxJQUFJanJCLFVBQUosQ0FBZSxDQUMzQixJQUQyQixFQUNyQjtBQUNOLFFBRjJCLEVBRXJCLElBRnFCLEVBRWYsSUFGZSxFQUVUO0FBQ2xCLFFBSDJCLEVBR3JCLElBSHFCLEVBR2YsSUFIZSxFQUdULElBSFMsRUFHSDtBQUN4QixRQUoyQixFQUlyQixJQUpxQixFQUlmLElBSmUsRUFJVCxJQUpTLENBSUo7QUFKSSxLQUFmLENBQWQ7QUFNQSxXQUFPNnFCLEtBQUtHLE9BQUwsQ0FBYSxFQUFiLEVBQWlCLE1BQWpCLEVBQXlCQyxPQUF6QixDQUFQO0FBQ0Q7QUFDRCxTQUFPVSxJQUFQLENBQWFqbEIsUUFBYixFQUF1QmtMLFlBQVksSUFBbkMsRUFBeUM0YixPQUF6QyxFQUFrRDtBQUNoRCxRQUFJN2lCLFNBQVMsSUFBSW1nQixxQkFBSixFQUFiO0FBQ0EsUUFBSTJDLE9BQU8zQyxzQkFBT0MsV0FBUCxDQUFtQnJrQixRQUFuQixDQUFYO0FBQ0FpRSxXQUFPdWdCLEtBQVAsQ0FBYUwsS0FBSzlrQixJQUFMLENBQVUsRUFBVixDQUFiLEVBQTRCOGtCLEtBQUs5dkIsSUFBTCxDQUFVLE1BQVYsQ0FBNUIsRUFBK0M4dkIsS0FBSzlrQixJQUFMLENBQVUsRUFBVixDQUEvQyxFQUE4RDhrQixLQUFLOXZCLElBQUwsQ0FBVSxNQUFWLENBQTlELEVBQWlGOHZCLEtBQUtNLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQWpGLEVBQXVHc0MsSUFBdkcsRUFBNkc1QyxLQUFLNkMsSUFBTCxDQUFVRixPQUFWLENBQTdHO0FBQ0EsV0FBTzdpQixPQUFPQSxNQUFkO0FBQ0Q7QUFDRCxTQUFPK2lCLElBQVAsQ0FBYXZzQixFQUFiLEVBQWlCO0FBQ2YsUUFBSThwQixVQUFVLElBQUlqckIsVUFBSixDQUFlLENBQzNCLElBRDJCLEVBQ3JCO0FBQ04sUUFGMkIsRUFFckIsSUFGcUIsRUFFZixJQUZlLEVBRVQ7QUFDakJtQixVQUFNLEVBSG9CLEVBSTFCQSxNQUFNLEVBQVAsR0FBYSxJQUpjLEVBSzFCQSxNQUFNLENBQVAsR0FBWSxJQUxlLEVBTTFCQSxLQUFLLElBTnFCLEVBTWQ7QUFDYixRQVAyQixFQU9yQixJQVBxQixFQU9mLElBUGUsRUFPVCxJQVBTLEVBT0g7QUFDeEIsUUFSMkIsRUFRckIsSUFScUIsRUFRZixJQVJlLEVBUVQsSUFSUyxFQVFIO0FBQ3hCLFFBVDJCLEVBU3JCLElBVHFCLEVBU2YsSUFUZSxFQVNULElBVFMsRUFTSDtBQUN4QixRQVYyQixFQVVyQixJQVZxQixFQVVmLElBVmUsRUFVVCxJQVZTLENBVUo7QUFWSSxLQUFmLENBQWQ7QUFZQSxXQUFPMHBCLEtBQUtHLE9BQUwsQ0FBYSxJQUFJQyxRQUFRbHJCLFVBQXpCLEVBQXFDLE1BQXJDLEVBQTZDa3JCLE9BQTdDLENBQVA7QUFDRDtBQUNELFNBQU8wQyxJQUFQLENBQWE3dEIsSUFBYixFQUFtQjtBQUNqQixRQUFJaUcsT0FBTyxDQUFYO0FBQ0EsUUFBSTZuQixPQUFPL0MsS0FBSytDLElBQUwsRUFBWDtBQUNBLFFBQUlDLE9BQU9oRCxLQUFLZ0QsSUFBTCxDQUFVL3RCLElBQVYsQ0FBWDtBQUNBLEtBQUM4dEIsSUFBRCxFQUFPQyxJQUFQLEVBQWFqQyxPQUFiLENBQXFCN0ssUUFBUTtBQUMzQmhiLGNBQVFnYixLQUFLaGhCLFVBQWI7QUFDRCxLQUZEO0FBR0EsV0FBTzhxQixLQUFLRyxPQUFMLENBQWFqbEIsSUFBYixFQUFtQixNQUFuQixFQUEyQjZuQixJQUEzQixFQUFpQ0MsSUFBakMsQ0FBUDtBQUNEO0FBQ0QsU0FBT0QsSUFBUCxHQUFlO0FBQ2IsUUFBSTNDLFVBQVVILHNCQUFPQyxXQUFQLENBQW1CRixLQUFLM08sUUFBeEIsQ0FBZDtBQUNBMk8sU0FBSzNPLFFBQUwsSUFBaUIsQ0FBakI7QUFDQSxXQUFPMk8sS0FBS0csT0FBTCxDQUFhLEVBQWIsRUFBaUIsTUFBakIsRUFBeUJILEtBQUtNLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXpCLEVBQStDRixPQUEvQyxDQUFQO0FBQ0Q7QUFDRCxTQUFPNEMsSUFBUCxDQUFhL3RCLElBQWIsRUFBbUI7QUFDakIsUUFBSWlHLE9BQU8sQ0FBWDtBQUNBLFFBQUkrbkIsT0FBT2pELEtBQUtpRCxJQUFMLENBQVVodUIsS0FBS3FCLEVBQWYsQ0FBWDtBQUNBLFFBQUk0c0IsT0FBT2xELEtBQUtrRCxJQUFMLENBQVVqdUIsS0FBS2duQixJQUFmLENBQVg7QUFDQSxRQUFJa0gsT0FBT25ELEtBQUttRCxJQUFMLENBQVVsdUIsSUFBVixDQUFYO0FBQ0EsUUFBSW11QixPQUFPcEQsS0FBS29ELElBQUwsQ0FBVW51QixJQUFWLEVBQWdCa3VCLEtBQUtqdUIsVUFBckIsQ0FBWDs7QUFFQSxLQUFDK3RCLElBQUQsRUFBT0MsSUFBUCxFQUFhRSxJQUFiLEVBQW1CRCxJQUFuQixFQUF5QnBDLE9BQXpCLENBQWlDN0ssUUFBUTtBQUN2Q2hiLGNBQVFnYixLQUFLaGhCLFVBQWI7QUFDRCxLQUZEO0FBR0EsV0FBTzhxQixLQUFLRyxPQUFMLENBQWFqbEIsSUFBYixFQUFtQixNQUFuQixFQUEyQituQixJQUEzQixFQUFpQ0MsSUFBakMsRUFBdUNFLElBQXZDLEVBQTZDRCxJQUE3QyxDQUFQO0FBQ0Q7QUFDRCxTQUFPRixJQUFQLENBQWEzc0IsRUFBYixFQUFpQjtBQUNmLFFBQUk4cEIsVUFBVUgsc0JBQU9DLFdBQVAsQ0FBbUI1cEIsRUFBbkIsQ0FBZDtBQUNBLFdBQU8wcEIsS0FBS0csT0FBTCxDQUFhLEVBQWIsRUFBaUIsTUFBakIsRUFBeUJILEtBQUtNLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLENBQWxCLENBQXpCLEVBQStDRixPQUEvQyxDQUFQO0FBQ0Q7QUFDRCxTQUFPOEMsSUFBUCxDQUFhakgsSUFBYixFQUFtQjtBQUNqQjtBQUNBO0FBQ0EsV0FBTytELEtBQUtHLE9BQUwsQ0FBYSxFQUFiLEVBQWlCLE1BQWpCLEVBQXlCSCxLQUFLTSxTQUFMLENBQWUsQ0FBZixFQUFrQixDQUFsQixDQUF6QixFQUErQ0wsc0JBQU9DLFdBQVAsQ0FBbUJqRSxJQUFuQixDQUEvQyxDQUFQO0FBQ0Q7QUFDRCxTQUFPbUgsSUFBUCxDQUFhbnVCLElBQWIsRUFBbUJvdUIsVUFBbkIsRUFBK0I7QUFDN0I7QUFDQTtBQUNBLFFBQUl2akIsU0FBUyxJQUFJbWdCLHFCQUFKLEVBQWI7QUFDQSxRQUFJcUQsY0FBY3JELHNCQUFPQyxXQUFQLENBQW1CanJCLEtBQUt1QixPQUFMLENBQWFuRyxNQUFoQyxDQUFsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBSTJFLFNBQVNpckIsc0JBQU9DLFdBQVAsQ0FBbUIsSUFBSSxDQUFKLEdBQVEsRUFBUixHQUFhLENBQWIsR0FBaUIsRUFBakIsR0FBc0IsRUFBdEIsR0FBMkIsRUFBM0IsR0FBZ0MsQ0FBaEMsR0FBb0MsQ0FBcEMsR0FBd0MsS0FBS2pyQixLQUFLdUIsT0FBTCxDQUFhbkcsTUFBMUQsR0FBbUVnekIsVUFBdEYsQ0FBYjtBQUNBdmpCLFdBQU91Z0IsS0FBUCxDQUFhTCxLQUFLOWtCLElBQUwsQ0FBVSxLQUFLLEtBQUtqRyxLQUFLdUIsT0FBTCxDQUFhbkcsTUFBakMsQ0FBYixFQUF1RDJ2QixLQUFLOXZCLElBQUwsQ0FBVSxNQUFWLENBQXZELEVBQTBFLElBQUlpRixVQUFKLENBQWUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FBZixDQUExRSxFQUFvSG11QixXQUFwSCxFQUFpSXR1QixNQUFqSTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQUMsU0FBS3VCLE9BQUwsQ0FBYXVxQixPQUFiLENBQXNCN0ssSUFBRCxJQUFVO0FBQzdCLFlBQU1xTixRQUFRck4sS0FBS3FOLEtBQW5CO0FBQ0E7O0FBRUF6akIsYUFBT3VnQixLQUFQLENBQWEsSUFBSWxyQixVQUFKLENBQWUsQ0FDekIrZ0IsS0FBS3JhLFFBQUwsS0FBa0IsRUFBbkIsR0FBeUIsSUFEQyxFQUNLO0FBQzlCcWEsV0FBS3JhLFFBQUwsS0FBa0IsRUFBbkIsR0FBeUIsSUFGQyxFQUd6QnFhLEtBQUtyYSxRQUFMLEtBQWtCLENBQW5CLEdBQXdCLElBSEUsRUFJekJxYSxLQUFLcmEsUUFBTixHQUFrQixJQUpRLEVBS3pCcWEsS0FBS2hiLElBQUwsS0FBYyxFQUFmLEdBQXFCLElBTEssRUFLQztBQUMxQmdiLFdBQUtoYixJQUFMLEtBQWMsRUFBZixHQUFxQixJQU5LLEVBT3pCZ2IsS0FBS2hiLElBQUwsS0FBYyxDQUFmLEdBQW9CLElBUE0sRUFRekJnYixLQUFLaGIsSUFBTixHQUFjLElBUlksRUFTekJxb0IsTUFBTUMsU0FBTixJQUFtQixDQUFwQixHQUF5QkQsTUFBTUUsU0FUTCxFQVNnQjtBQUN6Q0YsWUFBTUcsWUFBTixJQUFzQixDQUF2QixHQUE2QkgsTUFBTUksYUFBTixJQUF1QixDQUFwRCxHQUF5REosTUFBTUssU0FWckMsRUFXMUIsSUFYMEIsRUFXcEIsSUFYb0IsRUFXZDtBQUNYMU4sV0FBS2piLEdBQUwsS0FBYSxFQUFkLEdBQW9CLElBWk0sRUFZQTtBQUN6QmliLFdBQUtqYixHQUFMLEtBQWEsRUFBZCxHQUFvQixJQWJNLEVBY3pCaWIsS0FBS2piLEdBQUwsS0FBYSxDQUFkLEdBQW1CLElBZE8sRUFlekJpYixLQUFLamIsR0FBTixHQUFhLElBZmEsQ0FBZixDQUFiO0FBaUJBO0FBQ0E7QUFDRCxLQXZCRDtBQXdCQSxXQUFPNkUsT0FBT0EsTUFBZDtBQUNEO0FBQ0QsU0FBT3FqQixJQUFQLENBQWFsdUIsSUFBYixFQUFtQjtBQUNqQixRQUFJNkssU0FBUyxJQUFJbWdCLHFCQUFKLEVBQWI7QUFDQW5nQixXQUFPdWdCLEtBQVAsQ0FBYUwsS0FBSzlrQixJQUFMLENBQVUsS0FBS2pHLEtBQUt1QixPQUFMLENBQWFuRyxNQUE1QixDQUFiLEVBQWtEMnZCLEtBQUs5dkIsSUFBTCxDQUFVLE1BQVYsQ0FBbEQsRUFBcUU4dkIsS0FBS00sU0FBTCxDQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FBckU7QUFDQXJyQixTQUFLdUIsT0FBTCxDQUFhdXFCLE9BQWIsQ0FBcUI3SyxRQUFRO0FBQzNCLFlBQU1xTixRQUFRck4sS0FBS3FOLEtBQW5CO0FBQ0EsWUFBTU0sTUFBT04sTUFBTUMsU0FBTixJQUFtQixDQUFwQixHQUF5QjtBQUNsQ0QsWUFBTUUsU0FBTixJQUFtQixDQURWLEdBQ2U7QUFDeEJGLFlBQU1HLFlBQU4sSUFBc0IsQ0FGYixHQUVrQjtBQUMzQkgsWUFBTUksYUFIVCxDQUYyQixDQUtKOztBQUV2QjdqQixhQUFPdWdCLEtBQVAsQ0FBYSxJQUFJbHJCLFVBQUosQ0FBZSxDQUFDMHVCLEdBQUQsQ0FBZixDQUFiO0FBQ0QsS0FSRDtBQVNBLFdBQU8vakIsT0FBT0EsTUFBZDtBQUNEO0FBQ0QsU0FBT2drQixJQUFQLENBQWE3dUIsSUFBYixFQUFtQjtBQUNqQixRQUFJNkssU0FBUyxJQUFJbWdCLHFCQUFKLEVBQWI7QUFDQSxRQUFJL2tCLE9BQU8sQ0FBWDtBQUNBakcsU0FBS3VCLE9BQUwsQ0FBYXVxQixPQUFiLENBQXFCN0ssUUFBUTtBQUMzQmhiLGNBQVFnYixLQUFLaGIsSUFBYjtBQUNELEtBRkQ7QUFHQTRFLFdBQU91Z0IsS0FBUCxDQUFhTCxLQUFLOWtCLElBQUwsQ0FBVUEsSUFBVixDQUFiLEVBQThCOGtCLEtBQUs5dkIsSUFBTCxDQUFVLE1BQVYsQ0FBOUI7QUFDQSxRQUFJNnpCLFVBQVUsSUFBSTV1QixVQUFKLENBQWUrRixJQUFmLENBQWQ7QUFDQSxRQUFJbEcsU0FBUyxDQUFiO0FBQ0ErdUIsWUFBUXgwQixHQUFSLENBQVl1USxPQUFPQSxNQUFuQixFQUEyQjlLLE1BQTNCO0FBQ0FBLGNBQVUsQ0FBVjtBQUNBQyxTQUFLdUIsT0FBTCxDQUFhdXFCLE9BQWIsQ0FBcUI3SyxRQUFRO0FBQzNCQSxXQUFLcFcsTUFBTCxDQUFZaWhCLE9BQVosQ0FBcUJyZixJQUFELElBQVU7QUFDNUJxaUIsZ0JBQVF4MEIsR0FBUixDQUFZbVMsSUFBWixFQUFrQjFNLE1BQWxCO0FBQ0FBLGtCQUFVME0sS0FBS3hNLFVBQWY7QUFDQTtBQUNELE9BSkQ7QUFLRCxLQU5EO0FBT0EsV0FBTzZ1QixPQUFQO0FBQ0Q7QUE5bEJRO0FBZ21CWC9ELEtBQUs5dkIsSUFBTCxHQUFhNEIsSUFBRCxJQUFVO0FBQ3BCLFNBQU8sSUFBSXFELFVBQUosQ0FBZSxDQUFDckQsS0FBS2t5QixVQUFMLENBQWdCLENBQWhCLENBQUQsRUFBcUJseUIsS0FBS2t5QixVQUFMLENBQWdCLENBQWhCLENBQXJCLEVBQXlDbHlCLEtBQUtreUIsVUFBTCxDQUFnQixDQUFoQixDQUF6QyxFQUE2RGx5QixLQUFLa3lCLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBN0QsQ0FBZixDQUFQO0FBQ0QsQ0FGRDtBQUdBaEUsS0FBSzNPLFFBQUwsR0FBZ0IsQ0FBaEI7O2tCQUVlMk8sSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeG1CZjs7QUFNQTs7Ozs7O0FBRUEsTUFBTXpvQixlQUFlRSxzQkFBT0YsWUFBNUI7O0FBRWUsTUFBTXdvQixVQUFOLENBQWlCO0FBQzlCbHJCLGdCQUFlO0FBQ2IsU0FBS2lLLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLbWxCLGdCQUFMLEdBQXdCLEtBQXhCOztBQUVBLFNBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLElBQXBCOztBQUVBLFNBQUtDLGdCQUFMLEdBQXdCLENBQXhCO0FBQ0EsU0FBS0MsZ0JBQUwsR0FBd0IsQ0FBeEI7QUFDRDs7QUFFRHoxQixTQUFRO0FBQ04sU0FBS3NELEVBQUwsQ0FBUXFGLGFBQWFrQixXQUFyQixFQUFrQyxLQUFLNnJCLEtBQUwsQ0FBVzN4QixJQUFYLENBQWdCLElBQWhCLENBQWxDO0FBQ0EsU0FBS1QsRUFBTCxDQUFRcUYsYUFBYWd0QixjQUFyQixFQUFxQyxLQUFLQyxlQUFMLENBQXFCN3hCLElBQXJCLENBQTBCLElBQTFCLENBQXJDO0FBQ0EsU0FBS1QsRUFBTCxDQUFRcUYsYUFBYWt0QixvQkFBckIsRUFBMkMsS0FBS0MsWUFBTCxDQUFrQi94QixJQUFsQixDQUF1QixJQUF2QixDQUEzQztBQUNEOztBQUVEK0MsWUFBVztBQUNULFNBQUtvSixRQUFMLEdBQWdCLENBQUMsQ0FBakI7QUFDQSxTQUFLNmxCLGNBQUwsR0FBc0IsS0FBdEI7QUFDRDs7QUFFRGp1QixVQUFTO0FBQ1AsU0FBS29JLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLbWxCLGdCQUFMLEdBQXdCLEtBQXhCO0FBQ0Q7O0FBRURLLFVBQVM7QUFDUCxVQUFNLEVBQUV4dEIsVUFBRixFQUFjQyxVQUFkLEtBQTZCLEtBQUs0SCxRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsQ0FBbkM7QUFDQSxLQUFDLEtBQUtxbEIsZ0JBQU4sSUFBMEIsS0FBS1csV0FBTCxDQUFpQjl0QixVQUFqQixFQUE2QkMsVUFBN0IsQ0FBMUI7O0FBRUEsU0FBSzh0QixXQUFMLENBQWlCOXRCLFVBQWpCO0FBQ0EsU0FBSyt0QixXQUFMLENBQWlCaHVCLFVBQWpCO0FBQ0Q7O0FBRUQ0dEIsaUJBQWdCO0FBQ2Q7QUFDQSxTQUFLNWxCLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLNmxCLGNBQUwsR0FBc0IsS0FBdEI7QUFDRDs7QUFFREksU0FBUSxDQUVQOztBQUVEUCxrQkFBaUJ0MEIsSUFBakIsRUFBdUI7QUFDckIsUUFBSThkLEtBQUo7O0FBRUEsUUFBSTlkLFNBQVMsT0FBYixFQUFzQjtBQUNwQixZQUFNLEVBQUU0RyxVQUFGLEtBQWlCLEtBQUs2SCxRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsQ0FBdkI7QUFDQW9QLGNBQVFsWCxVQUFSO0FBQ0QsS0FIRCxNQUdPO0FBQ0wsWUFBTSxFQUFFQyxVQUFGLEtBQWlCLEtBQUs0SCxRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsQ0FBdkI7QUFDQW9QLGNBQVFqWCxVQUFSO0FBQ0Q7O0FBRUQsUUFBSWl1QixrQkFBa0IsS0FBS3JtQixRQUFMLENBQWNDLFdBQWQsQ0FBMEIsbUJBQTFCLENBQXRCO0FBQ0EsUUFBSXhJLFNBQVM0dUIsZ0JBQWdCN3VCLFNBQWhCLENBQTBCakcsSUFBMUIsQ0FBYjtBQUNBLFFBQUksQ0FBQ2tHLE1BQUwsRUFBYTtBQUNYQSxlQUFTNHVCLGdCQUFnQjN1QixZQUFoQixDQUE2Qm5HLElBQTdCLENBQVQ7QUFDRDs7QUFFRGtHLFdBQU9ILFFBQVAsR0FBa0IrWCxNQUFNaFYsSUFBTixDQUFXM0IsS0FBN0I7QUFDQWpCLFdBQU94SCxJQUFQLEdBQWMsS0FBS3EyQixnQkFBTCxDQUFzQi8wQixJQUF0QixFQUE0QjhkLE1BQU1oVixJQUFsQyxDQUFkO0FBQ0E7O0FBRUE7QUFDQSxTQUFLL0ksSUFBTCxDQUFVc0gsYUFBYTJ0QixZQUF2QixFQUFxQ2gxQixJQUFyQztBQUNEOztBQUVEKzBCLG1CQUFrQi8wQixJQUFsQixFQUF3QjhJLElBQXhCLEVBQThCO0FBQzVCLFFBQUltc0IsY0FBYyxJQUFJbEYscUJBQUosRUFBbEI7QUFDQSxRQUFJTyxPQUFPUixjQUFLUSxJQUFMLEVBQVg7QUFDQSxRQUFJQyxPQUFPVCxjQUFLUyxJQUFMLENBQVUsRUFBRXZ3QixJQUFGLEVBQVE4SSxNQUFNQSxJQUFkLEVBQVYsQ0FBWDs7QUFFQW1zQixnQkFBWTlFLEtBQVosQ0FBa0JHLElBQWxCLEVBQXdCQyxJQUF4QjtBQUNBLFdBQU8wRSxXQUFQO0FBQ0Q7O0FBRURQLGNBQWE5dEIsVUFBYixFQUF5QkMsVUFBekIsRUFBcUM7QUFDbkMsUUFBSSxDQUFDRCxXQUFXTixPQUFYLENBQW1CbkcsTUFBcEIsSUFBOEIsQ0FBQzBHLFdBQVdQLE9BQVgsQ0FBbUJuRyxNQUF0RCxFQUE4RDtBQUM1RDtBQUNEOztBQUVELFFBQUkrMEIsWUFBWXBuQixRQUFoQjtBQUNBLFFBQUlxbkIsWUFBWXJuQixRQUFoQjs7QUFFQSxRQUFJbEgsV0FBV04sT0FBWCxJQUFzQk0sV0FBV04sT0FBWCxDQUFtQm5HLE1BQTdDLEVBQXFEO0FBQ25EKzBCLGtCQUFZdHVCLFdBQVdOLE9BQVgsQ0FBbUIsQ0FBbkIsRUFBc0I0RCxHQUFsQztBQUNEO0FBQ0QsUUFBSXJELFdBQVdQLE9BQVgsSUFBc0JPLFdBQVdQLE9BQVgsQ0FBbUJuRyxNQUE3QyxFQUFxRDtBQUNuRGcxQixrQkFBWXR1QixXQUFXUCxPQUFYLENBQW1CLENBQW5CLEVBQXNCNEQsR0FBbEM7QUFDRDs7QUFFRCxTQUFLMEUsUUFBTCxHQUFnQmxFLEtBQUs4RSxHQUFMLENBQVMwbEIsU0FBVCxFQUFvQkMsU0FBcEIsQ0FBaEI7QUFDQSxTQUFLcEIsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDRDs7QUFFRFksY0FBYTl0QixVQUFiLEVBQXlCO0FBQ3ZCLFVBQU1pWCxRQUFRalgsVUFBZDs7QUFFQSxRQUFJLENBQUNBLFdBQVdQLE9BQVosSUFBdUIsQ0FBQ08sV0FBV1AsT0FBWCxDQUFtQm5HLE1BQS9DLEVBQXVEO0FBQ3JEO0FBQ0Q7O0FBRUQsUUFBSSxFQUFDbUcsT0FBRCxLQUFZd1gsS0FBaEI7QUFDQSxRQUFJMVQsV0FBVyxDQUFDLENBQWhCOztBQUVBLFFBQUk2cUIsY0FBYyxJQUFsQjtBQUNBLFVBQU1HLGFBQWEsRUFBbkI7QUFDQSxVQUFNdkIsVUFBVTtBQUNkdnRCLGVBQVM7QUFESyxLQUFoQjs7QUFJQSxXQUFPQSxRQUFRbkcsTUFBZixFQUF1QjtBQUNyQixZQUFNazFCLFlBQVkvdUIsUUFBUXZELEtBQVIsRUFBbEI7O0FBRUEsWUFBTSxFQUFFb0wsVUFBRixFQUFjcEIsT0FBZCxLQUEwQnNvQixTQUFoQztBQUNBLFVBQUksQ0FBQyxLQUFLcEIsWUFBTixJQUFzQmxuQixPQUF0QixJQUFpQ0EsUUFBUWpFLElBQTdDLEVBQW1EO0FBQ2pEbXNCLHNCQUFjLEtBQUtGLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCaG9CLFFBQVFqRSxJQUF2QyxDQUFkO0FBQ0FpRSxnQkFBUWpFLElBQVIsR0FBZSxJQUFmO0FBQ0F4QyxnQkFBUTlFLE9BQVIsQ0FBZ0I2ekIsU0FBaEI7QUFDQSxZQUFJLENBQUN0b0IsUUFBUUQsVUFBYixFQUF5QjtBQUN2QixlQUFLMG5CLFlBQUw7QUFDRDtBQUNEO0FBQ0Q7O0FBRUQsVUFBSXRxQixNQUFNbXJCLFVBQVVuckIsR0FBVixHQUFnQixLQUFLMEUsUUFBL0I7O0FBRUEsVUFBSXhFLGFBQWEsQ0FBQyxDQUFsQixFQUFxQjtBQUNuQkEsbUJBQVdGLEdBQVg7QUFDRDs7QUFFRCxVQUFJYSxHQUFKO0FBQ0EsVUFBSUQsR0FBSjtBQUNBLFVBQUl1cUIsVUFBVXZxQixHQUFWLEtBQWtCaE0sU0FBdEIsRUFBaUM7QUFDL0JnTSxjQUFNdXFCLFVBQVV2cUIsR0FBVixHQUFnQixLQUFLOEQsUUFBM0I7QUFDQTdELGNBQU1ELE1BQU1aLEdBQVo7QUFDRDtBQUNELFVBQUltckIsVUFBVXRxQixHQUFWLEtBQWtCak0sU0FBdEIsRUFBaUM7QUFDL0JnTSxjQUFNdXFCLFVBQVV0cUIsR0FBVixHQUFnQmIsR0FBdEI7QUFDQWEsY0FBTXNxQixVQUFVdHFCLEdBQWhCO0FBQ0Q7O0FBRUQsVUFBSXVxQixhQUFhO0FBQ2YxbEIsZ0JBQVEsRUFETztBQUVmNUUsY0FBTTtBQUZTLE9BQWpCO0FBSUE2b0IsY0FBUXZ0QixPQUFSLENBQWdCbEcsSUFBaEIsQ0FBcUJrMUIsVUFBckI7QUFDQUEsaUJBQVcxbEIsTUFBWCxDQUFrQnhQLElBQWxCLENBQXVCaTFCLFVBQVV0d0IsSUFBakM7QUFDQXV3QixpQkFBV3RxQixJQUFYLElBQW1CcXFCLFVBQVV0d0IsSUFBVixDQUFlQyxVQUFsQzs7QUFFQSxVQUFJdXdCLGlCQUFpQixDQUFyQjtBQUNBLFVBQUlqdkIsUUFBUW5HLE1BQVIsSUFBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsY0FBTWlPLFVBQVU5SCxRQUFRLENBQVIsRUFBVzRELEdBQVgsR0FBaUIsS0FBSzBFLFFBQXRDO0FBQ0EybUIseUJBQWlCbm5CLFVBQVVsRSxHQUEzQjtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUlrckIsV0FBV2oxQixNQUFYLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDNUJvMUIsMkJBQWlCSCxXQUFXQSxXQUFXajFCLE1BQVgsR0FBb0IsQ0FBL0IsRUFBa0N3TCxRQUFuRDtBQUNELFNBRkQsTUFFTztBQUFFO0FBQ1A0cEIsMkJBQWlCLEtBQUtDLFNBQUwsQ0FBZWhyQixpQkFBaEM7QUFDRDtBQUNGO0FBQ0QsV0FBSzBwQixnQkFBTCxJQUF5QnFCLGNBQXpCO0FBQ0E7QUFDQUgsaUJBQVdoMUIsSUFBWCxDQUFnQjtBQUNkOEosV0FEYztBQUVkYSxXQUZjO0FBR2RELFdBSGM7QUFJZC9GLGNBQU1zd0IsVUFBVXR3QixJQUpGO0FBS2RpRyxjQUFNcXFCLFVBQVV0d0IsSUFBVixDQUFlQyxVQUxQO0FBTWRtSixrQkFOYztBQU9keEMsa0JBQVU0cEIsY0FQSTtBQVFkbEMsZUFBTztBQUNMQyxxQkFBVyxDQUROO0FBRUxDLHFCQUFXcGxCLGFBQWEsQ0FBYixHQUFpQixDQUZ2QjtBQUdMcWxCLHdCQUFjcmxCLGFBQWEsQ0FBYixHQUFpQixDQUgxQjtBQUlMc2xCLHlCQUFlLENBSlY7QUFLTEMscUJBQVd2bEIsYUFBYSxDQUFiLEdBQWlCO0FBTHZCLFNBUk87QUFlZDdDLG1CQUFXcEIsR0FmRztBQWdCZGxLLGNBQU07QUFoQlEsT0FBaEI7QUFrQkQ7O0FBRUQsUUFBSXkxQixXQUFXLElBQUkxRixxQkFBSixFQUFmO0FBQ0EsUUFBSXFGLFdBQVdqMUIsTUFBZixFQUF1QjtBQUNyQixZQUFNeXlCLE9BQU85QyxjQUFLOEMsSUFBTCxDQUFVO0FBQ3JCeHNCLFlBQUkwWCxNQUFNaFYsSUFBTixDQUFXMUMsRUFETTtBQUVyQjJsQixjQUFNM2hCLFFBRmU7QUFHckI5RCxpQkFBUzh1QjtBQUhZLE9BQVYsQ0FBYjtBQUtBLFlBQU14QixPQUFPOUQsY0FBSzhELElBQUwsQ0FBVUMsT0FBVixDQUFiO0FBQ0E0QixlQUFTdEYsS0FBVCxDQUFleUMsSUFBZixFQUFxQmdCLElBQXJCOztBQUVBLFdBQUs4QixhQUFMLENBQW1CLE9BQW5CLEVBQTRCRCxRQUE1QjtBQUNEOztBQUVELFFBQUlSLFdBQUosRUFBaUI7QUFDZixXQUFLUyxhQUFMLENBQW1CLE9BQW5CLEVBQTRCVCxXQUE1Qjs7QUFFQSxVQUFJM3VCLFFBQVFuRyxNQUFaLEVBQW9CO0FBQ2xCO0FBQ0EyZCxjQUFNeFgsT0FBTixHQUFnQkEsT0FBaEI7QUFDQSxlQUFPLEtBQUtxdUIsV0FBTCxDQUFpQjdXLEtBQWpCLENBQVA7QUFDRDtBQUNGOztBQUVELFNBQUtrVyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsU0FBS2owQixJQUFMLENBQVVzSCxhQUFhc3VCLGFBQXZCLEVBQXNDLE9BQXRDOztBQUVBLFVBQU1DLGFBQWFSLFdBQVdBLFdBQVdqMUIsTUFBWCxHQUFvQixDQUEvQixDQUFuQjtBQUNBLFNBQUswMUIsYUFBTCxHQUFxQkQsV0FBVzFyQixHQUFYLEdBQWlCMHJCLFdBQVdqcUIsUUFBakQ7QUFDQW1TLFVBQU14WCxPQUFOLEdBQWdCLEVBQWhCO0FBQ0F3WCxVQUFNM2QsTUFBTixHQUFlLENBQWY7QUFDRDs7QUFFRHkwQixjQUFhOVcsS0FBYixFQUFvQjtBQUNsQixVQUFNLEVBQUN4WCxPQUFELEtBQVl3WCxLQUFsQjtBQUNBLFFBQUkxVCxXQUFXLENBQUMsQ0FBaEI7QUFDQSxRQUFJZ3JCLGFBQWEsRUFBakI7O0FBRUEsUUFBSUgsY0FBYyxJQUFsQjtBQUNBLFVBQU1wQixVQUFVO0FBQ2R2dEIsZUFBUztBQURLLEtBQWhCO0FBR0EsUUFBSSxDQUFDQSxPQUFELElBQVksQ0FBQ0EsUUFBUW5HLE1BQXpCLEVBQWlDO0FBQy9CO0FBQ0Q7QUFDRCxRQUFJMjFCLG1CQUFtQixLQUF2QjtBQUNBLFdBQU94dkIsUUFBUW5HLE1BQWYsRUFBdUI7QUFDckIsVUFBSXlOLFNBQVN0SCxRQUFRdkQsS0FBUixFQUFiO0FBQ0EsWUFBTSxFQUFFZ0MsSUFBRixFQUFRZ0ksT0FBUixLQUFvQmEsTUFBMUI7QUFDQSxVQUFJLENBQUMsS0FBS3FtQixZQUFOLElBQXNCbG5CLE9BQXRCLElBQWlDQSxRQUFRakUsSUFBN0MsRUFBbUQ7QUFDakRtc0Isc0JBQWMsS0FBS0YsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0Job0IsUUFBUWpFLElBQXZDLENBQWQ7QUFDQWlFLGdCQUFRakUsSUFBUixHQUFlLElBQWY7QUFDQXhDLGdCQUFROUUsT0FBUixDQUFnQm9NLE1BQWhCO0FBQ0EsWUFBSSxDQUFDYixRQUFRRCxVQUFiLEVBQXlCO0FBQ3ZCLGVBQUswbkIsWUFBTDtBQUNEO0FBQ0Q7QUFDRDs7QUFFRCxVQUFJdHFCLE1BQU0wRCxPQUFPMUQsR0FBUCxHQUFhLEtBQUswRSxRQUE1QjtBQUNBLFlBQU10RCxZQUFZcEIsR0FBbEI7QUFDQSxVQUFJLENBQUM0ckIsZ0JBQUwsRUFBdUI7QUFDckIxckIsbUJBQVdGLEdBQVg7QUFDQTRyQiwyQkFBbUIsSUFBbkI7QUFDRDs7QUFFRCxVQUFJUCxpQkFBaUIsQ0FBckI7O0FBRUEsVUFBSSxLQUFLUSxTQUFMLENBQWV4cEIsc0JBQW5CLEVBQTJDO0FBQ3pDZ3BCLHlCQUFpQixLQUFLUSxTQUFMLENBQWV4cEIsc0JBQWhDO0FBQ0QsT0FGRCxNQUVPLElBQUlqRyxRQUFRbkcsTUFBUixJQUFrQixDQUF0QixFQUF5QjtBQUM5QixjQUFNaU8sVUFBVTlILFFBQVEsQ0FBUixFQUFXNEQsR0FBWCxHQUFpQixLQUFLMEUsUUFBdEM7QUFDQTJtQix5QkFBaUJubkIsVUFBVWxFLEdBQTNCO0FBQ0QsT0FITSxNQUdBO0FBQ0wsWUFBSWtyQixXQUFXajFCLE1BQVgsSUFBcUIsQ0FBekIsRUFBNEI7QUFBRTtBQUM1Qm8xQiwyQkFBaUJILFdBQVdBLFdBQVdqMUIsTUFBWCxHQUFvQixDQUEvQixFQUFrQ3dMLFFBQW5EO0FBQ0QsU0FGRCxNQUVPO0FBQUU7QUFDUDRwQiwyQkFBaUIsS0FBS1EsU0FBTCxDQUFldnJCLGlCQUFoQztBQUNEO0FBQ0Y7O0FBRUQ7QUFDQSxXQUFLMnBCLGdCQUFMLElBQXlCb0IsY0FBekI7QUFDQSxZQUFNUyxZQUFZO0FBQ2hCOXJCLFdBRGdCO0FBRWhCWSxhQUFLWixHQUZXO0FBR2hCYSxhQUFLLENBSFc7QUFJaEJDLGNBQU1qRyxLQUFLQyxVQUpLO0FBS2hCMkcsa0JBQVVpQyxPQUFPakMsUUFBUCxHQUFrQmlDLE9BQU9qQyxRQUF6QixHQUFvQzRwQixjQUw5QjtBQU1oQmxDLGVBQU87QUFDTEMscUJBQVcsQ0FETjtBQUVMQyxxQkFBVyxDQUZOO0FBR0xDLHdCQUFjLENBSFQ7QUFJTEMseUJBQWUsQ0FKVjtBQUtMQyxxQkFBVztBQUxOLFNBTlM7QUFhaEJ2bEIsb0JBQVksSUFiSTtBQWNoQjdDLGlCQWRnQjtBQWVoQnRMLGNBQU07QUFmVSxPQUFsQjs7QUFrQkEsVUFBSXMxQixhQUFhO0FBQ2YxbEIsZ0JBQVEsRUFETztBQUVmNUUsY0FBTTtBQUZTLE9BQWpCO0FBSUFzcUIsaUJBQVcxbEIsTUFBWCxDQUFrQnhQLElBQWxCLENBQXVCMkUsSUFBdkI7QUFDQXV3QixpQkFBV3RxQixJQUFYLElBQW1CakcsS0FBS0MsVUFBeEI7O0FBRUE2dUIsY0FBUXZ0QixPQUFSLENBQWdCbEcsSUFBaEIsQ0FBcUJrMUIsVUFBckI7O0FBRUFGLGlCQUFXaDFCLElBQVgsQ0FBZ0I0MUIsU0FBaEI7QUFDRDs7QUFFRCxVQUFNUCxXQUFXLElBQUkxRixxQkFBSixFQUFqQjs7QUFFQSxRQUFJcUYsV0FBV2oxQixNQUFmLEVBQXVCO0FBQ3JCLFlBQU15eUIsT0FBTzlDLGNBQUs4QyxJQUFMLENBQVU7QUFDckJ4c0IsWUFBSTBYLE1BQU1oVixJQUFOLENBQVcxQyxFQURNO0FBRXJCMmxCLGNBQU0zaEIsUUFGZTtBQUdyQjlELGlCQUFTOHVCO0FBSFksT0FBVixDQUFiO0FBS0EsWUFBTXhCLE9BQU85RCxjQUFLOEQsSUFBTCxDQUFVQyxPQUFWLENBQWI7QUFDQTRCLGVBQVN0RixLQUFULENBQWV5QyxJQUFmLEVBQXFCZ0IsSUFBckI7O0FBRUEsV0FBSzhCLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEJELFFBQTVCO0FBQ0Q7O0FBRUQsUUFBSVIsV0FBSixFQUFpQjtBQUNmLFdBQUtTLGFBQUwsQ0FBbUIsT0FBbkIsRUFBNEJULFdBQTVCO0FBQ0EsVUFBSTN1QixRQUFRbkcsTUFBWixFQUFvQjtBQUNsQjtBQUNBMmQsY0FBTXhYLE9BQU4sR0FBZ0JBLE9BQWhCO0FBQ0EsZUFBTyxLQUFLc3VCLFdBQUwsQ0FBaUI5VyxLQUFqQixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFLbVcsWUFBTCxHQUFvQixLQUFwQjtBQUNBLFNBQUtsMEIsSUFBTCxDQUFVc0gsYUFBYXN1QixhQUF2QixFQUFzQyxPQUF0QyxFQUErQ0YsUUFBL0M7O0FBRUEsVUFBTUcsYUFBYVIsV0FBV0EsV0FBV2oxQixNQUFYLEdBQW9CLENBQS9CLENBQW5CO0FBQ0EsU0FBSzAxQixhQUFMLEdBQXFCRCxXQUFXMXJCLEdBQVgsR0FBaUIwckIsV0FBV2pxQixRQUFqRDtBQUNBbVMsVUFBTXhYLE9BQU4sR0FBZ0IsRUFBaEI7QUFDQXdYLFVBQU0zZCxNQUFOLEdBQWUsQ0FBZjtBQUNEOztBQUVEdTFCLGdCQUFlMTFCLElBQWYsRUFBcUI0UCxNQUFyQixFQUE2QjtBQUMzQixRQUFJa2xCLGtCQUFrQixLQUFLcm1CLFFBQUwsQ0FBY0MsV0FBZCxDQUEwQixtQkFBMUIsQ0FBdEI7QUFDQSxRQUFJeEksU0FBUzR1QixnQkFBZ0I3dUIsU0FBaEIsQ0FBMEJqRyxJQUExQixDQUFiO0FBQ0EsUUFBSSxDQUFDa0csTUFBTCxFQUFhO0FBQ1hBLGVBQVM0dUIsZ0JBQWdCM3VCLFlBQWhCLENBQTZCbkcsSUFBN0IsQ0FBVDtBQUNEOztBQUVEa0csV0FBT25CLElBQVAsQ0FBWTNFLElBQVosQ0FBaUJ3UCxNQUFqQjtBQUNEOztBQUVEcW1CLGtCQUFpQi9yQixHQUFqQixFQUFzQnlCLFFBQXRCLEVBQWdDO0FBQzlCLFVBQU02RixPQUFPcWUsV0FBVzNvQixjQUFYLENBQTBCLEtBQUs2dUIsU0FBTCxDQUFlM3VCLFlBQXpDLENBQWI7QUFDQSxXQUFPO0FBQ0w4QyxTQURLO0FBRUxZLFdBQUtaLEdBRkE7QUFHTGEsV0FBSyxDQUhBO0FBSUxZLGNBSks7QUFLTDZGLFVBTEs7QUFNTHhHLFlBQU13RyxLQUFLeE0sVUFOTjtBQU9Mc0csaUJBQVdwQixHQVBOO0FBUUxsSyxZQUFNO0FBUkQsS0FBUDtBQVVEOztBQUVELE1BQUl3MUIsU0FBSixHQUFpQjtBQUNmLFdBQU8sS0FBSy9tQixRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsRUFBb0M3SCxVQUFwQyxDQUErQ2lDLElBQXREO0FBQ0Q7QUFDRCxNQUFJaXRCLFNBQUosR0FBaUI7QUFDZixXQUFPLEtBQUt0bkIsUUFBTCxDQUFjQyxXQUFkLENBQTBCLFFBQTFCLEVBQW9DOUgsVUFBcEMsQ0FBK0NrQyxJQUF0RDtBQUNEOztBQUVELFNBQU81QixjQUFQLENBQXVCRSxZQUF2QixFQUFxQztBQUNuQyxRQUFJQSxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDdEIsYUFBTyxJQUFJbkMsVUFBSixDQUFlLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLENBQWYsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJbUMsaUJBQWlCLENBQXJCLEVBQXdCO0FBQzdCLGFBQU8sSUFBSW5DLFVBQUosQ0FBZSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxJQUFqRCxDQUFmLENBQVA7QUFDRCxLQUZNLE1BRUEsSUFBSW1DLGlCQUFpQixDQUFyQixFQUF3QjtBQUM3QixhQUFPLElBQUluQyxVQUFKLENBQWUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsSUFBakQsRUFBdUQsSUFBdkQsRUFBNkQsSUFBN0QsRUFBbUUsSUFBbkUsRUFBeUUsSUFBekUsQ0FBZixDQUFQO0FBQ0QsS0FGTSxNQUVBLElBQUltQyxpQkFBaUIsQ0FBckIsRUFBd0I7QUFDN0IsYUFBTyxJQUFJbkMsVUFBSixDQUFlLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLElBQS9CLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELElBQWpELEVBQXVELElBQXZELEVBQTZELElBQTdELEVBQW1FLElBQW5FLEVBQXlFLElBQXpFLEVBQStFLElBQS9FLEVBQXFGLElBQXJGLEVBQTJGLElBQTNGLEVBQWlHLElBQWpHLEVBQXVHLElBQXZHLENBQWYsQ0FBUDtBQUNELEtBRk0sTUFFQSxJQUFJbUMsaUJBQWlCLENBQXJCLEVBQXdCO0FBQzdCLGFBQU8sSUFBSW5DLFVBQUosQ0FBZSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixFQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQyxJQUFyQyxFQUEyQyxJQUEzQyxFQUFpRCxJQUFqRCxFQUF1RCxJQUF2RCxFQUE2RCxJQUE3RCxFQUFtRSxJQUFuRSxFQUF5RSxJQUF6RSxFQUErRSxJQUEvRSxFQUFxRixJQUFyRixFQUEyRixJQUEzRixFQUFpRyxJQUFqRyxFQUF1RyxJQUF2RyxFQUE2RyxJQUE3RyxFQUFtSCxJQUFuSCxFQUF5SCxJQUF6SCxDQUFmLENBQVA7QUFDRCxLQUZNLE1BRUEsSUFBSW1DLGlCQUFpQixDQUFyQixFQUF3QjtBQUM3QixhQUFPLElBQUluQyxVQUFKLENBQWUsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0MsRUFBaUQsSUFBakQsRUFBdUQsSUFBdkQsRUFBNkQsSUFBN0QsRUFBbUUsSUFBbkUsRUFBeUUsSUFBekUsRUFBK0UsSUFBL0UsRUFBcUYsSUFBckYsRUFBMkYsSUFBM0YsRUFBaUcsSUFBakcsRUFBdUcsSUFBdkcsRUFBNkcsSUFBN0csRUFBbUgsSUFBbkgsRUFBeUgsSUFBekgsRUFBK0gsSUFBL0gsRUFBcUksSUFBckksRUFBMkksSUFBM0ksRUFBaUosSUFBakosRUFBdUosSUFBdkosQ0FBZixDQUFQO0FBQ0Q7QUFDRCxXQUFPLElBQVA7QUFDRDtBQXpYNkI7a0JBQVg0cUIsVTs7Ozs7Ozs7Ozs7Ozs7QUNWckJseEIsT0FBT0MsT0FBUCxHQUFpQjtBQUNmczNCLFdBQVMveEIsbUJBQU9BLENBQUMsdURBQVIsRUFBeUJDLE9BRG5COztBQUdmO0FBQ0FtRCxVQUFRcEQsbUJBQU9BLENBQUMseUVBQVIsRUFBa0NDLE9BSjNCO0FBS2YreEIsbUJBQWlCaHlCLG1CQUFPQSxDQUFDLDJGQUFSLEVBQTJDQyxPQUw3Qzs7QUFPZjtBQUNBd1osV0FBU3paLG1CQUFPQSxDQUFDLCtEQUFSLEVBQTZCQyxPQVJ2QjtBQVNmbVUsUUFBTXBVLG1CQUFPQSxDQUFDLHlEQUFSLEVBQTBCQyxPQVRqQjtBQVVmcVUsUUFBTXRVLG1CQUFPQSxDQUFDLHlEQUFSLEVBQTBCQyxPQVZqQjtBQVdmZ3lCLGtCQUFnQmp5QixtQkFBT0EsQ0FBQyw2RUFBUixFQUFvQ0MsT0FYckM7O0FBYWY7QUFDQWl5QixhQUFXbHlCLG1CQUFPQSxDQUFDLDJFQUFSLEVBQW1DQyxPQWQvQjtBQWVma3lCLGVBQWFueUIsbUJBQU9BLENBQUMsK0VBQVIsRUFBcUNDLE9BZm5DO0FBZ0JmbXlCLGdCQUFjcHlCLG1CQUFPQSxDQUFDLGlGQUFSLEVBQXNDQyxPQWhCckM7QUFpQmZveUIsb0JBQWtCcnlCLG1CQUFPQSxDQUFDLDJGQUFSLEVBQTJDQyxPQWpCOUM7QUFrQmZtWCxrQkFBZ0JwWCxtQkFBT0EsQ0FBQywyRUFBUixFQUFtQ29YLGNBbEJwQztBQW1CZkQsa0JBQWdCblgsbUJBQU9BLENBQUMsMkVBQVIsRUFBbUNtWCxjQW5CcEM7QUFvQmZrSixvQkFBa0JyZ0IsbUJBQU9BLENBQUMsK0VBQVIsRUFBcUNxZ0IsZ0JBcEJ4QztBQXFCZkssb0JBQWtCMWdCLG1CQUFPQSxDQUFDLCtFQUFSLEVBQXFDMGdCLGdCQXJCeEM7O0FBdUJmO0FBQ0E0UixPQUFLdHlCLG1CQUFPQSxDQUFDLDJEQUFSLEVBQTJCQyxPQXhCakI7O0FBMEJmO0FBQ0ErZSxVQUFRaGYsbUJBQU9BLENBQUMsaUVBQVIsRUFBOEJDLE9BM0J2QjtBQTRCZjJyQixVQUFRNXJCLG1CQUFPQSxDQUFDLGlFQUFSLEVBQThCQyxPQTVCdkI7O0FBOEJmc3lCLGVBQWF2eUIsbUJBQU9BLENBQUMsK0VBQVIsQ0E5QkU7QUErQmY7QUFDQXd5QixVQUFReHlCLG1CQUFPQSxDQUFDLDJEQUFSLEVBQXdCQztBQWhDakIsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDQWE7O0FBRWJ2RyxPQUFPcUIsY0FBUCxDQUFzQk4sT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkM7QUFDM0NKLFNBQU87QUFEb0MsQ0FBN0M7O0FBSUFJLFFBQVF3RixPQUFSLEdBQWtCLFVBQVV3eUIsaUJBQVYsRUFBNkI7QUFDN0MsTUFBSUMsY0FBYyxDQUFsQjs7QUFFQSxPQUFLLElBQUlDLE9BQU81MkIsVUFBVUMsTUFBckIsRUFBNkI0MkIsU0FBU2p6QixNQUFNZ3pCLE9BQU8sQ0FBUCxHQUFXQSxPQUFPLENBQWxCLEdBQXNCLENBQTVCLENBQXRDLEVBQXNFRSxPQUFPLENBQWxGLEVBQXFGQSxPQUFPRixJQUE1RixFQUFrR0UsTUFBbEcsRUFBMEc7QUFDeEdELFdBQU9DLE9BQU8sQ0FBZCxJQUFtQjkyQixVQUFVODJCLElBQVYsQ0FBbkI7QUFDRDs7QUFFRCxNQUFJQyw0QkFBNEIsSUFBaEM7QUFDQSxNQUFJQyxvQkFBb0IsS0FBeEI7QUFDQSxNQUFJQyxpQkFBaUJyNEIsU0FBckI7O0FBRUEsTUFBSTtBQUNGLFNBQUssSUFBSXM0QixZQUFZTCxPQUFPTSxPQUFPQyxRQUFkLEdBQWhCLEVBQTJDQyxLQUFoRCxFQUF1RCxFQUFFTiw0QkFBNEIsQ0FBQ00sUUFBUUgsVUFBVTFyQixJQUFWLEVBQVQsRUFBMkJzakIsSUFBekQsQ0FBdkQsRUFBdUhpSSw0QkFBNEIsSUFBbkosRUFBeUo7QUFDdkosVUFBSXJ6QixNQUFNMnpCLE1BQU0vNEIsS0FBaEI7O0FBRUFxNEIscUJBQWVqekIsSUFBSXpELE1BQW5CO0FBQ0Q7QUFDRixHQU5ELENBTUUsT0FBT08sR0FBUCxFQUFZO0FBQ1p3MkIsd0JBQW9CLElBQXBCO0FBQ0FDLHFCQUFpQnoyQixHQUFqQjtBQUNELEdBVEQsU0FTVTtBQUNSLFFBQUk7QUFDRixVQUFJLENBQUN1MkIseUJBQUQsSUFBOEJHLFVBQVVJLE1BQTVDLEVBQW9EO0FBQ2xESixrQkFBVUksTUFBVjtBQUNEO0FBQ0YsS0FKRCxTQUlVO0FBQ1IsVUFBSU4saUJBQUosRUFBdUI7QUFDckIsY0FBTUMsY0FBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxNQUFJMWMsU0FBUyxJQUFJbWMsaUJBQUosQ0FBc0JDLFdBQXRCLENBQWI7QUFDQSxNQUFJL3hCLFNBQVMsQ0FBYjtBQUNBLE1BQUkyeUIsNkJBQTZCLElBQWpDO0FBQ0EsTUFBSUMscUJBQXFCLEtBQXpCO0FBQ0EsTUFBSUMsa0JBQWtCNzRCLFNBQXRCOztBQUVBLE1BQUk7QUFDRixTQUFLLElBQUk4NEIsYUFBYWIsT0FBT00sT0FBT0MsUUFBZCxHQUFqQixFQUE0Q08sTUFBakQsRUFBeUQsRUFBRUosNkJBQTZCLENBQUNJLFNBQVNELFdBQVdsc0IsSUFBWCxFQUFWLEVBQTZCc2pCLElBQTVELENBQXpELEVBQTRIeUksNkJBQTZCLElBQXpKLEVBQStKO0FBQzdKLFVBQUlLLE9BQU9ELE9BQU9yNUIsS0FBbEI7O0FBRUFpYyxhQUFPcGIsR0FBUCxDQUFXeTRCLElBQVgsRUFBaUJoekIsTUFBakI7QUFDQUEsZ0JBQVVnekIsS0FBSzMzQixNQUFmO0FBQ0Q7QUFDRixHQVBELENBT0UsT0FBT08sR0FBUCxFQUFZO0FBQ1pnM0IseUJBQXFCLElBQXJCO0FBQ0FDLHNCQUFrQmozQixHQUFsQjtBQUNELEdBVkQsU0FVVTtBQUNSLFFBQUk7QUFDRixVQUFJLENBQUMrMkIsMEJBQUQsSUFBK0JHLFdBQVdKLE1BQTlDLEVBQXNEO0FBQ3BESSxtQkFBV0osTUFBWDtBQUNEO0FBQ0YsS0FKRCxTQUlVO0FBQ1IsVUFBSUUsa0JBQUosRUFBd0I7QUFDdEIsY0FBTUMsZUFBTjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPbGQsTUFBUDtBQUNELENBN0RELEM7Ozs7Ozs7Ozs7OztBQ05hOztBQUViLElBQUlzZCxVQUFVNXpCLG1CQUFPQSxDQUFDLGlGQUFSLENBQWQ7O0FBRUEsSUFBSTZ6QixXQUFXQyx1QkFBdUJGLE9BQXZCLENBQWY7O0FBRUEsU0FBU0Usc0JBQVQsQ0FBZ0NDLEdBQWhDLEVBQXFDO0FBQUUsU0FBT0EsT0FBT0EsSUFBSUMsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEIsRUFBRTl6QixTQUFTOHpCLEdBQVgsRUFBckM7QUFBd0Q7O0FBRS9GdjVCLE9BQU9DLE9BQVAsR0FBaUJvNUIsU0FBUzV6QixPQUExQixDOzs7Ozs7Ozs7Ozs7OztBQ1JBLFNBQVNnMEIsb0JBQVQsQ0FBK0JDLE9BQS9CLEVBQXdDO0FBQ3hDLFVBRHdDLENBQzlCO0FBQ1YsVUFBVSxJQUFJQyxtQkFBbUIsRUFBdkI7O0FBRVYsVUFKd0MsQ0FJOUI7QUFDVixVQUFVLFNBQVNDLG1CQUFULENBQTZCQyxRQUE3QixFQUF1Qzs7QUFFakQsWUFGaUQsQ0FFckM7QUFDWixZQUFZLElBQUdGLGlCQUFpQkUsUUFBakIsQ0FBSDtBQUNaLGNBQWMsT0FBT0YsaUJBQWlCRSxRQUFqQixFQUEyQjU1QixPQUFsQzs7QUFFZCxZQU5pRCxDQU1yQztBQUNaLFlBQVksSUFBSUQsU0FBUzI1QixpQkFBaUJFLFFBQWpCLElBQTZCO0FBQ3RELGNBQWN2NEIsR0FBR3U0QixRQURxQztBQUV0RCxjQUFjNUwsR0FBRyxLQUZxQztBQUd0RCxjQUFjaHVCLFNBQVM7QUFDdkIsY0FKc0QsRUFBMUM7O0FBTVosWUFiaUQsQ0FhckM7QUFDWixZQUFZeTVCLFFBQVFHLFFBQVIsRUFBa0I5NkIsSUFBbEIsQ0FBdUJpQixPQUFPQyxPQUE5QixFQUF1Q0QsTUFBdkMsRUFBK0NBLE9BQU9DLE9BQXRELEVBQStEMjVCLG1CQUEvRDs7QUFFWixZQWhCaUQsQ0FnQnJDO0FBQ1osWUFBWTU1QixPQUFPaXVCLENBQVAsR0FBVyxJQUFYOztBQUVaLFlBbkJpRCxDQW1CckM7QUFDWixZQUFZLE9BQU9qdUIsT0FBT0MsT0FBZDtBQUNaO0FBQVc7O0FBRVgsVUE1QndDLENBNEI5QjtBQUNWLFVBQVUyNUIsb0JBQW9CbjNCLENBQXBCLEdBQXdCaTNCLE9BQXhCOztBQUVWLFVBL0J3QyxDQStCOUI7QUFDVixVQUFVRSxvQkFBb0JFLENBQXBCLEdBQXdCSCxnQkFBeEI7O0FBRVYsVUFsQ3dDLENBa0M5QjtBQUNWLFVBQVVDLG9CQUFvQnQ0QixDQUFwQixHQUF3QixVQUFTekIsS0FBVCxFQUFnQjtBQUFFLFdBQU9BLEtBQVA7QUFBZSxHQUF6RDs7QUFFVixVQXJDd0MsQ0FxQzlCO0FBQ1YsVUFBVSs1QixvQkFBb0JHLENBQXBCLEdBQXdCLFVBQVM5NUIsT0FBVCxFQUFrQmdELElBQWxCLEVBQXdCKzJCLE1BQXhCLEVBQWdDO0FBQ2xFLFlBQVksSUFBRyxDQUFDSixvQkFBb0JLLENBQXBCLENBQXNCaDZCLE9BQXRCLEVBQStCZ0QsSUFBL0IsQ0FBSixFQUEwQztBQUN0RCxjQUFjL0QsT0FBT3FCLGNBQVAsQ0FBc0JOLE9BQXRCLEVBQStCZ0QsSUFBL0IsRUFBcUM7QUFDbkQsZ0JBQWdCaTNCLGNBQWMsS0FEcUI7QUFFbkQsZ0JBQWdCMTVCLFlBQVksSUFGdUI7QUFHbkQsZ0JBQWdCQyxLQUFLdTVCO0FBQ3JCLGdCQUptRCxFQUFyQztBQUtkO0FBQWE7QUFDYjtBQUFXLEdBUkQ7O0FBVVYsVUFoRHdDLENBZ0Q5QjtBQUNWLFVBQVVKLG9CQUFvQnhaLENBQXBCLEdBQXdCLFVBQVNuZ0IsT0FBVCxFQUFrQjtBQUNwRCxZQUFZZixPQUFPcUIsY0FBUCxDQUFzQk4sT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUosT0FBTyxJQUFULEVBQTdDO0FBQ1o7QUFBVyxHQUZEOztBQUlWLFVBckR3QyxDQXFEOUI7QUFDVixVQUFVKzVCLG9CQUFvQjU0QixDQUFwQixHQUF3QixVQUFTaEIsTUFBVCxFQUFpQjtBQUNuRCxZQUFZLElBQUlnNkIsU0FBU2g2QixVQUFVQSxPQUFPdzVCLFVBQWpCO0FBQ3pCLFlBQWMsU0FBU1csVUFBVCxHQUFzQjtBQUFFLGFBQU9uNkIsT0FBTyxTQUFQLENBQVA7QUFBMkIsS0FEeEM7QUFFekIsWUFBYyxTQUFTbzZCLGdCQUFULEdBQTRCO0FBQUUsYUFBT3A2QixNQUFQO0FBQWdCLEtBRmhEO0FBR1osWUFBWTQ1QixvQkFBb0JHLENBQXBCLENBQXNCQyxNQUF0QixFQUE4QixHQUE5QixFQUFtQ0EsTUFBbkM7QUFDWixZQUFZLE9BQU9BLE1BQVA7QUFDWjtBQUFXLEdBTkQ7O0FBUVYsVUE5RHdDLENBOEQ5QjtBQUNWLFVBQVVKLG9CQUFvQkssQ0FBcEIsR0FBd0IsVUFBU0ksTUFBVCxFQUFpQkMsUUFBakIsRUFBMkI7QUFBRSxXQUFPcDdCLE9BQU9KLFNBQVAsQ0FBaUI4eEIsY0FBakIsQ0FBZ0M3eEIsSUFBaEMsQ0FBcUNzN0IsTUFBckMsRUFBNkNDLFFBQTdDLENBQVA7QUFBZ0UsR0FBckg7O0FBRVYsVUFqRXdDLENBaUU5QjtBQUNWLFVBQVVWLG9CQUFvQlcsQ0FBcEIsR0FBd0IsR0FBeEI7O0FBRVYsVUFwRXdDLENBb0U5QjtBQUNWLFVBQVVYLG9CQUFvQlksRUFBcEIsR0FBeUIsVUFBU3o0QixHQUFULEVBQWM7QUFBRXZDLFlBQVFvQyxLQUFSLENBQWNHLEdBQWQsRUFBb0IsTUFBTUEsR0FBTjtBQUFZLEdBQXpFOztBQUVSLE1BQUkwNEIsSUFBSWIsb0JBQW9CQSxvQkFBb0JjLENBQXBCLEdBQXdCQyxZQUE1QyxDQUFSO0FBQ0EsU0FBT0YsRUFBRWgxQixPQUFGLElBQWFnMUIsQ0FBcEIsQ0F4RXNDLENBd0VoQjtBQUN2Qjs7QUFFRCxJQUFJRyxtQkFBbUIseUJBQXZCO0FBQ0EsSUFBSUMsbUJBQW1CLG9DQUFvQ0QsZ0JBQXBDLEdBQXVELFNBQTlFLEMsQ0FBd0Y7O0FBRXhGO0FBQ0EsU0FBU0UsV0FBVCxDQUFzQmpoQixHQUF0QixFQUEyQjtBQUN6QixTQUFPLENBQUNBLE1BQU0sRUFBUCxFQUFXa2hCLE9BQVgsQ0FBbUIsc0JBQW5CLEVBQTJDLE1BQTNDLENBQVA7QUFDRDs7QUFFRCxTQUFTQyxTQUFULENBQW1CaDZCLENBQW5CLEVBQXNCO0FBQ3BCLFNBQU8sQ0FBQ3BCLE1BQU0sSUFBSW9CLENBQVYsQ0FBUixDQURvQixDQUNFO0FBQ3ZCOztBQUVELFNBQVNpNkIscUJBQVQsQ0FBZ0M1ekIsT0FBaEMsRUFBeUNySCxNQUF6QyxFQUFpRGs3QixTQUFqRCxFQUE0RDtBQUMxRCxNQUFJQyxTQUFTLEVBQWI7QUFDQUEsU0FBT0QsU0FBUCxJQUFvQixFQUFwQjs7QUFFQSxNQUFJRSxXQUFXcDdCLE9BQU9taEIsUUFBUCxFQUFmO0FBQ0EsTUFBSWthLG1CQUFtQkQsU0FBU2haLEtBQVQsQ0FBZSx3Q0FBZixDQUF2QjtBQUNBLE1BQUksQ0FBQ2laLGdCQUFMLEVBQXVCLE9BQU9GLE1BQVA7QUFDdkIsTUFBSUcscUJBQXFCRCxpQkFBaUIsQ0FBakIsQ0FBekI7O0FBRUE7QUFDQSxNQUFJRSxLQUFLLElBQUlDLE1BQUosQ0FBVyxnQkFBZ0JWLFlBQVlRLGtCQUFaLENBQWhCLEdBQWtEVCxnQkFBN0QsRUFBK0UsR0FBL0UsQ0FBVDtBQUNBLE1BQUl6WSxLQUFKO0FBQ0EsU0FBUUEsUUFBUW1aLEdBQUdFLElBQUgsQ0FBUUwsUUFBUixDQUFoQixFQUFvQztBQUNsQyxRQUFJaFosTUFBTSxDQUFOLE1BQWEsZUFBakIsRUFBa0M7QUFDbEMrWSxXQUFPRCxTQUFQLEVBQWtCejVCLElBQWxCLENBQXVCMmdCLE1BQU0sQ0FBTixDQUF2QjtBQUNEOztBQUVEO0FBQ0FtWixPQUFLLElBQUlDLE1BQUosQ0FBVyxRQUFRVixZQUFZUSxrQkFBWixDQUFSLEdBQTBDLHdCQUExQyxHQUFxRVYsZ0JBQXJFLEdBQXdGLFdBQXhGLEdBQXNHQyxnQkFBakgsRUFBbUksR0FBbkksQ0FBTDtBQUNBLFNBQVF6WSxRQUFRbVosR0FBR0UsSUFBSCxDQUFRTCxRQUFSLENBQWhCLEVBQW9DO0FBQ2xDLFFBQUksQ0FBQy96QixRQUFRK2EsTUFBTSxDQUFOLENBQVIsQ0FBTCxFQUF3QjtBQUN0QitZLGFBQU9ELFNBQVAsRUFBa0J6NUIsSUFBbEIsQ0FBdUIyZ0IsTUFBTSxDQUFOLENBQXZCO0FBQ0EvYSxjQUFRK2EsTUFBTSxDQUFOLENBQVIsSUFBb0J3WCxtQkFBbUJBLENBQUN4WCxNQUFNLENBQU4sQ0FBcEIsRUFBOEIzZixDQUFsRDtBQUNEO0FBQ0QwNEIsV0FBTy9ZLE1BQU0sQ0FBTixDQUFQLElBQW1CK1ksT0FBTy9ZLE1BQU0sQ0FBTixDQUFQLEtBQW9CLEVBQXZDO0FBQ0ErWSxXQUFPL1ksTUFBTSxDQUFOLENBQVAsRUFBaUIzZ0IsSUFBakIsQ0FBc0IyZ0IsTUFBTSxDQUFOLENBQXRCO0FBQ0Q7O0FBRUQ7QUFDQSxNQUFJNWQsT0FBT3RGLE9BQU9zRixJQUFQLENBQVkyMkIsTUFBWixDQUFYO0FBQ0EsT0FBSyxJQUFJNzVCLElBQUksQ0FBYixFQUFnQkEsSUFBSWtELEtBQUtoRCxNQUF6QixFQUFpQ0YsR0FBakMsRUFBc0M7QUFDcEMsU0FBSyxJQUFJMGYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJbWEsT0FBTzMyQixLQUFLbEQsQ0FBTCxDQUFQLEVBQWdCRSxNQUFwQyxFQUE0Q3dmLEdBQTVDLEVBQWlEO0FBQy9DLFVBQUlnYSxVQUFVRyxPQUFPMzJCLEtBQUtsRCxDQUFMLENBQVAsRUFBZ0IwZixDQUFoQixDQUFWLENBQUosRUFBbUM7QUFDakNtYSxlQUFPMzJCLEtBQUtsRCxDQUFMLENBQVAsRUFBZ0IwZixDQUFoQixJQUFxQixJQUFJbWEsT0FBTzMyQixLQUFLbEQsQ0FBTCxDQUFQLEVBQWdCMGYsQ0FBaEIsQ0FBekI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsU0FBT21hLE1BQVA7QUFDRDs7QUFFRCxTQUFTTyxpQkFBVCxDQUE0QkMsTUFBNUIsRUFBb0M7QUFDbEMsTUFBSW4zQixPQUFPdEYsT0FBT3NGLElBQVAsQ0FBWW0zQixNQUFaLENBQVg7QUFDQSxTQUFPbjNCLEtBQUtvM0IsTUFBTCxDQUFZLFVBQVVDLFNBQVYsRUFBcUJwM0IsR0FBckIsRUFBMEI7QUFDM0MsV0FBT28zQixhQUFhRixPQUFPbDNCLEdBQVAsRUFBWWpELE1BQVosR0FBcUIsQ0FBekM7QUFDRCxHQUZNLEVBRUosS0FGSSxDQUFQO0FBR0Q7O0FBRUQsU0FBU3M2QixrQkFBVCxDQUE2QnowQixPQUE3QixFQUFzQ3d5QixRQUF0QyxFQUFnRDtBQUM5QyxNQUFJa0MsZUFBZTtBQUNqQkMsVUFBTSxDQUFDbkMsUUFBRDtBQURXLEdBQW5CO0FBR0EsTUFBSW9DLGtCQUFrQjtBQUNwQkQsVUFBTTtBQURjLEdBQXRCO0FBR0EsTUFBSUUsY0FBYztBQUNoQkYsVUFBTTtBQURVLEdBQWxCOztBQUlBLFNBQU9OLGtCQUFrQkssWUFBbEIsQ0FBUCxFQUF3QztBQUN0QyxRQUFJSixTQUFTejhCLE9BQU9zRixJQUFQLENBQVl1M0IsWUFBWixDQUFiO0FBQ0EsU0FBSyxJQUFJejZCLElBQUksQ0FBYixFQUFnQkEsSUFBSXE2QixPQUFPbjZCLE1BQTNCLEVBQW1DRixHQUFuQyxFQUF3QztBQUN0QyxVQUFJNDVCLFlBQVlTLE9BQU9yNkIsQ0FBUCxDQUFoQjtBQUNBLFVBQUk2NkIsUUFBUUosYUFBYWIsU0FBYixDQUFaO0FBQ0EsVUFBSWtCLGdCQUFnQkQsTUFBTTkyQixHQUFOLEVBQXBCO0FBQ0E2MkIsa0JBQVloQixTQUFaLElBQXlCZ0IsWUFBWWhCLFNBQVosS0FBMEIsRUFBbkQ7QUFDQSxVQUFJZ0IsWUFBWWhCLFNBQVosRUFBdUJrQixhQUF2QixLQUF5QyxDQUFDLzBCLFFBQVE2ekIsU0FBUixFQUFtQmtCLGFBQW5CLENBQTlDLEVBQWlGO0FBQ2pGRixrQkFBWWhCLFNBQVosRUFBdUJrQixhQUF2QixJQUF3QyxJQUF4QztBQUNBSCxzQkFBZ0JmLFNBQWhCLElBQTZCZSxnQkFBZ0JmLFNBQWhCLEtBQThCLEVBQTNEO0FBQ0FlLHNCQUFnQmYsU0FBaEIsRUFBMkJ6NUIsSUFBM0IsQ0FBZ0MyNkIsYUFBaEM7QUFDQSxVQUFJQyxhQUFhcEIsc0JBQXNCNXpCLE9BQXRCLEVBQStCQSxRQUFRNnpCLFNBQVIsRUFBbUJrQixhQUFuQixDQUEvQixFQUFrRWxCLFNBQWxFLENBQWpCO0FBQ0EsVUFBSW9CLGlCQUFpQnA5QixPQUFPc0YsSUFBUCxDQUFZNjNCLFVBQVosQ0FBckI7QUFDQSxXQUFLLElBQUlyYixJQUFJLENBQWIsRUFBZ0JBLElBQUlzYixlQUFlOTZCLE1BQW5DLEVBQTJDd2YsR0FBM0MsRUFBZ0Q7QUFDOUMrYSxxQkFBYU8sZUFBZXRiLENBQWYsQ0FBYixJQUFrQythLGFBQWFPLGVBQWV0YixDQUFmLENBQWIsS0FBbUMsRUFBckU7QUFDQSthLHFCQUFhTyxlQUFldGIsQ0FBZixDQUFiLElBQWtDK2EsYUFBYU8sZUFBZXRiLENBQWYsQ0FBYixFQUFnQzNoQixNQUFoQyxDQUF1Q2c5QixXQUFXQyxlQUFldGIsQ0FBZixDQUFYLENBQXZDLENBQWxDO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU9pYixlQUFQO0FBQ0Q7O0FBRURqOEIsT0FBT0MsT0FBUCxHQUFpQixVQUFVNDVCLFFBQVYsRUFBb0J6ckIsT0FBcEIsRUFBNkI7QUFDNUNBLFlBQVVBLFdBQVcsRUFBckI7QUFDQSxNQUFJL0csVUFBVTtBQUNaMjBCLFVBQU1PLHFCQUFtQkE7QUFEYixHQUFkOztBQUlBLE1BQUlOLGtCQUFrQjd0QixRQUFRb3VCLEdBQVIsR0FBYyxFQUFFUixNQUFNOThCLE9BQU9zRixJQUFQLENBQVk2QyxRQUFRMjBCLElBQXBCLENBQVIsRUFBZCxHQUFvREYsbUJBQW1CejBCLE9BQW5CLEVBQTRCd3lCLFFBQTVCLENBQTFFOztBQUVBLE1BQUl0bUIsTUFBTSxFQUFWOztBQUVBclUsU0FBT3NGLElBQVAsQ0FBWXkzQixlQUFaLEVBQTZCanRCLE1BQTdCLENBQW9DLFVBQVV2TSxDQUFWLEVBQWE7QUFBRSxXQUFPQSxNQUFNLE1BQWI7QUFBcUIsR0FBeEUsRUFBMEV5dkIsT0FBMUUsQ0FBa0YsVUFBVWx5QixNQUFWLEVBQWtCO0FBQ2xHLFFBQUl5OEIsY0FBYyxDQUFsQjtBQUNBLFdBQU9SLGdCQUFnQmo4QixNQUFoQixFQUF3Qnk4QixXQUF4QixDQUFQLEVBQTZDO0FBQzNDQTtBQUNEO0FBQ0RSLG9CQUFnQmo4QixNQUFoQixFQUF3QnlCLElBQXhCLENBQTZCZzdCLFdBQTdCO0FBQ0FwMUIsWUFBUXJILE1BQVIsRUFBZ0J5OEIsV0FBaEIsSUFBK0IsNEZBQS9CO0FBQ0FscEIsVUFBTUEsTUFBTSxNQUFOLEdBQWV2VCxNQUFmLEdBQXdCLE1BQXhCLEdBQWlDeTVCLHFCQUFxQnRZLFFBQXJCLEdBQWdDNFosT0FBaEMsQ0FBd0MsY0FBeEMsRUFBd0QyQixLQUFLQyxTQUFMLENBQWVGLFdBQWYsQ0FBeEQsQ0FBakMsR0FBd0gsS0FBeEgsR0FBZ0lSLGdCQUFnQmo4QixNQUFoQixFQUF3QmdwQixHQUF4QixDQUE0QixVQUFVdmhCLEVBQVYsRUFBYztBQUFFLGFBQU8sS0FBS2kxQixLQUFLQyxTQUFMLENBQWVsMUIsRUFBZixDQUFMLEdBQTBCLElBQTFCLEdBQWlDSixRQUFRckgsTUFBUixFQUFnQnlILEVBQWhCLEVBQW9CMFosUUFBcEIsRUFBeEM7QUFBd0UsS0FBcEgsRUFBc0h5YixJQUF0SCxDQUEySCxHQUEzSCxDQUFoSSxHQUFrUSxPQUF4UTtBQUNELEdBUkQ7O0FBVUFycEIsUUFBTUEsTUFBTSxRQUFOLEdBQWlCa21CLHFCQUFxQnRZLFFBQXJCLEdBQWdDNFosT0FBaEMsQ0FBd0MsY0FBeEMsRUFBd0QyQixLQUFLQyxTQUFMLENBQWU5QyxRQUFmLENBQXhELENBQWpCLEdBQXFHLEtBQXJHLEdBQTZHb0MsZ0JBQWdCRCxJQUFoQixDQUFxQmhULEdBQXJCLENBQXlCLFVBQVV2aEIsRUFBVixFQUFjO0FBQUUsV0FBTyxLQUFLaTFCLEtBQUtDLFNBQUwsQ0FBZWwxQixFQUFmLENBQUwsR0FBMEIsSUFBMUIsR0FBaUNKLFFBQVEyMEIsSUFBUixDQUFhdjBCLEVBQWIsRUFBaUIwWixRQUFqQixFQUF4QztBQUFxRSxHQUE5RyxFQUFnSHliLElBQWhILENBQXFILEdBQXJILENBQTdHLEdBQXlPLFlBQS9POztBQUVBLE1BQUlDLE9BQU8sSUFBSW5lLE9BQU9vZSxJQUFYLENBQWdCLENBQUN2cEIsR0FBRCxDQUFoQixFQUF1QixFQUFFbFMsTUFBTSxpQkFBUixFQUF2QixDQUFYO0FBQ0EsTUFBSStNLFFBQVEydUIsSUFBWixFQUFrQjtBQUFFLFdBQU9GLElBQVA7QUFBYTs7QUFFakMsTUFBSUcsTUFBTXRlLE9BQU9zZSxHQUFQLElBQWN0ZSxPQUFPdWUsU0FBckIsSUFBa0N2ZSxPQUFPd2UsTUFBekMsSUFBbUR4ZSxPQUFPeWUsS0FBcEU7O0FBRUEsTUFBSUMsWUFBWUosSUFBSUssZUFBSixDQUFvQlIsSUFBcEIsQ0FBaEI7QUFDQSxNQUFJUyxTQUFTLElBQUk1ZSxPQUFPNmUsTUFBWCxDQUFrQkgsU0FBbEIsQ0FBYjtBQUNBRSxTQUFPRSxTQUFQLEdBQW1CSixTQUFuQjs7QUFFQSxTQUFPRSxNQUFQO0FBQ0QsQ0FoQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S0EsTUFBTW5QLGdCQUFnQjtBQUNwQlcsZUFBYSxjQURPO0FBRXBCd0IscUJBQW1CLG1CQUZDO0FBR3BCVCxtQkFBaUIsaUJBSEc7QUFJcEJKLGdCQUFjO0FBSk0sQ0FBdEI7O0FBT0EsTUFBTTltQixlQUFlO0FBQ25COFMsZUFBYSxhQURNO0FBRW5CYSxrQkFBZ0IsZ0JBRkc7QUFHbkJDLGVBQWEsYUFITTtBQUluQnFELG1CQUFpQixpQkFKRTtBQUtuQmEseUJBQXVCLHVCQUxKO0FBTW5CWix5QkFBdUIsdUJBTko7QUFPbkJsQyxjQUFZO0FBUE8sQ0FBckI7O0FBVUEsTUFBTWpWLGVBQWU7QUFDbkJndEIsa0JBQWdCLGdCQURHO0FBRW5COXJCLGVBQWEsYUFGTTtBQUduQm90QixpQkFBZSxlQUhJO0FBSW5CeUcsZUFBYSxhQUpNO0FBS25CcEgsZ0JBQWMsY0FMSztBQU1uQlQsd0JBQXNCO0FBTkgsQ0FBckI7O0FBU0EsTUFBTThILGFBQWE7QUFDakJDLHFCQUFtQjs7QUFHckI7QUFKbUIsQ0FBbkIsQ0FLQSxNQUFNQyxhQUFhO0FBQ2pCQyx1QkFBcUI7QUFESixDQUFuQjs7QUFJQSxNQUFNQyxlQUFlO0FBQ25CQyxpQkFBZSxlQURJO0FBRW5CQyxhQUFXO0FBRlEsQ0FBckI7O0FBS0EsTUFBTUMsaUJBQWlCO0FBQ3JCQyxxQkFBbUI7QUFERSxDQUF2Qjs7QUFJQSxNQUFNQyxZQUFZai9CLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQmlpQixhQUFsQixFQUFpQ3hsQixZQUFqQyxFQUErQ0QsWUFBL0MsRUFBNkRnMUIsVUFBN0QsRUFBeUVFLFVBQXpFLEVBQXFGSyxjQUFyRixDQUFsQjs7QUFFQSxNQUFNRyxtQkFBbUIsRUFBekI7QUFDQSxNQUFNQyxtQkFBbUIsRUFBekI7O0FBRUEsS0FBSyxJQUFJNTVCLEdBQVQsSUFBZ0IwNUIsU0FBaEIsRUFBMkI7QUFDekIsTUFBSUEsVUFBVXZOLGNBQVYsQ0FBeUJuc0IsR0FBekIsQ0FBSixFQUFtQztBQUNqQzI1QixxQkFBaUIzOEIsSUFBakIsQ0FBc0IwOEIsVUFBVTE1QixHQUFWLENBQXRCO0FBQ0Q7QUFDRjs7QUFFRCxLQUFLLElBQUlBLEdBQVQsSUFBZ0IwNUIsU0FBaEIsRUFBMkI7QUFDekIsTUFBSUEsVUFBVXZOLGNBQVYsQ0FBeUJuc0IsR0FBekIsQ0FBSixFQUFtQztBQUNqQzQ1QixxQkFBaUI1OEIsSUFBakIsQ0FBc0IwOEIsVUFBVTE1QixHQUFWLENBQXRCO0FBQ0Q7QUFDRjs7a0JBRWM7QUFDYjA1QixXQURhO0FBRWJQLFlBRmE7QUFHYmwxQixjQUhhO0FBSWJDLGNBSmE7QUFLYiswQixZQUxhO0FBTWJ2UCxlQU5hO0FBT2JpUSxrQkFQYTtBQVFiQyxrQkFSYTtBQVNiUCxjQVRhO0FBVWJHO0FBVmEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RFIsTUFBTUssZ0RBQW9CO0FBQy9CQyxNQUFJLElBRDJCO0FBRS9CQyxRQUFNLE1BRnlCO0FBRy9CQyxPQUFLLEtBSDBCO0FBSS9CQyxRQUFNLE1BSnlCO0FBSy9CQyxXQUFTO0FBTHNCLENBQTFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FQOzs7O0FBQ0E7Ozs7QUFFQSxNQUFNQyxtQkFBbUIsUUFBekI7O0FBRUEsTUFBTXJILE9BQU4sQ0FBYztBQUNadnhCLGNBQWE2NEIsZ0JBQWdCLEVBQTdCLEVBQWlDO0FBQy9CLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSWgvQixvQkFBSixFQUFoQjtBQUNBLFNBQUtpL0IsWUFBTCxHQUFvQixFQUFwQixDQUYrQixDQUVSO0FBQ3ZCLFNBQUtDLE9BQUwsR0FBZSxFQUFmLENBSCtCLENBR2I7QUFDbEIsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxTQUFLMWhCLFNBQUwsR0FBaUIsSUFBSW1hLG1CQUFKLEVBQWpCO0FBQ0EsU0FBS21ILGFBQUwsR0FBcUJBLGFBQXJCO0FBQ0EsU0FBS0ssTUFBTCxHQUFjLEVBQWQsQ0FQK0IsQ0FPZDtBQUNsQjs7QUFFRDs7Ozs7O0FBTUFudkIsY0FBYW92QixHQUFiLEVBQWtCO0FBQ2hCLFVBQU1DLFdBQVcsS0FBS0wsWUFBTCxDQUFrQkksR0FBbEIsQ0FBakI7QUFDQSxRQUFJQyxRQUFKLEVBQWM7QUFDWixhQUFPQSxRQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNGOztBQUVEOzs7OztBQUtBQyxlQUFjRixHQUFkLEVBQW1CLEdBQUd2Z0MsSUFBdEIsRUFBNEI7QUFDMUIsUUFBSSxLQUFLb2dDLE9BQUwsQ0FBYUcsR0FBYixDQUFKLEVBQXVCO0FBQ3JCLFlBQU1HLGNBQWMsSUFBSSxLQUFLTixPQUFMLENBQWFHLEdBQWIsQ0FBSixDQUFzQixHQUFHdmdDLElBQXpCLENBQXBCO0FBQ0EsV0FBS21nQyxZQUFMLENBQWtCSSxHQUFsQixJQUF5QkcsV0FBekI7QUFDQSxVQUFJQSxZQUFZdi9CLElBQWhCLEVBQXNCO0FBQ3BCdS9CLG9CQUFZdi9CLElBQVosR0FEb0IsQ0FDRDtBQUNwQjtBQUNELGFBQU91L0IsV0FBUDtBQUNELEtBUEQsTUFPTztBQUNMLFlBQU0sSUFBSXg5QixLQUFKLENBQVcsR0FBRXE5QixHQUFJLGNBQWpCLENBQU47QUFDRDtBQUNGOztBQUVEOzs7O0FBSUFwL0IsT0FBTStlLE1BQU4sRUFBYztBQUNaLFFBQUksS0FBS21nQixPQUFULEVBQWtCO0FBQ2hCO0FBQ0Q7QUFDRCxTQUFLLElBQUlFLEdBQVQsSUFBZ0IsS0FBS0gsT0FBckIsRUFBOEI7QUFDNUI7QUFDQSxVQUFJLEtBQUtBLE9BQUwsQ0FBYXBPLGNBQWIsQ0FBNEJ1TyxHQUE1QixLQUFvQyxDQUFDLEtBQUtKLFlBQUwsQ0FBa0JJLEdBQWxCLENBQXpDLEVBQWlFO0FBQy9ELGFBQUtFLFlBQUwsQ0FBa0JGLEdBQWxCLEVBQXVCcmdCLE1BQXZCO0FBQ0Q7QUFDRjtBQUNELFNBQUttZ0IsT0FBTCxHQUFlLElBQWY7QUFDRDs7QUFFRDs7Ozs7QUFLQU0sV0FBVUosR0FBVixFQUFlSyxHQUFmLEVBQW9CO0FBQ2xCLFVBQU10OEIsVUFBVSxLQUFLNDdCLFFBQXJCO0FBQ0EsVUFBTVcsbUJBQW1CLEtBQUtDLG1CQUFMLENBQXlCNTdCLElBQXpCLENBQThCLElBQTlCLENBQXpCO0FBQ0EsVUFBTTY3QixPQUFPLElBQWI7QUFDQSxVQUFNQyxXQUFXLGNBQWNKLEdBQWQsQ0FBa0I7QUFDakN4NUIsa0JBQWEsR0FBR3BILElBQWhCLEVBQXNCO0FBQ3BCLGNBQU0sR0FBR0EsSUFBVDtBQUNBLGFBQUt3RCxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsYUFBS3k5QixhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsYUFBSzkzQixHQUFMLEdBQVdvM0IsR0FBWDtBQUNBLGFBQUtydkIsUUFBTCxHQUFnQjZ2QixJQUFoQjtBQUNEOztBQUVEdDhCLFNBQUl5OEIsV0FBSixFQUFpQkMsUUFBakIsRUFBMkI7QUFDekJOLHlCQUFpQkssV0FBakI7O0FBRUEsWUFBSSxLQUFLMTlCLFNBQUwsQ0FBZTA5QixXQUFmLENBQUosRUFBaUM7QUFDL0IsZUFBSzE5QixTQUFMLENBQWUwOUIsV0FBZixFQUE0QnIrQixJQUE1QixDQUFpQ3MrQixRQUFqQztBQUNELFNBRkQsTUFFTztBQUNMLGVBQUszOUIsU0FBTCxDQUFlMDlCLFdBQWYsSUFBOEIsQ0FBQ0MsUUFBRCxDQUE5QjtBQUNEOztBQUVENzhCLGdCQUFRRyxFQUFSLENBQVksR0FBRXk4QixXQUFZLEdBQUVsQixnQkFBaUIsR0FBRU8sR0FBSSxFQUFuRCxFQUFzRFksUUFBdEQsRUFUeUIsQ0FTdUM7QUFDaEUsZUFBTzc4QixRQUFRRyxFQUFSLENBQVd5OEIsV0FBWCxFQUF3QkMsUUFBeEIsQ0FBUDtBQUNEOztBQUVEOzs7OztBQUtBcDJCLGFBQVFtMkIsV0FBUixFQUFxQkMsUUFBckIsRUFBK0I7QUFDN0JOLHlCQUFpQkssV0FBakI7QUFDQSxZQUFJSCxLQUFLVCxNQUFMLENBQVlZLFdBQVosQ0FBSixFQUE4QjtBQUM1QkgsZUFBS1QsTUFBTCxDQUFZWSxXQUFaLEVBQXlCcitCLElBQXpCLENBQThCcytCLFFBQTlCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGVBQUtULE1BQUwsQ0FBWVksV0FBWixJQUEyQixDQUFDQyxRQUFELENBQTNCO0FBQ0Q7QUFDRjs7QUFFRGg4QixXQUFNKzdCLFdBQU4sRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzNCTix5QkFBaUJLLFdBQWpCOztBQUVBLFlBQUksS0FBS0QsYUFBTCxDQUFtQkMsV0FBbkIsQ0FBSixFQUFxQztBQUNuQyxlQUFLRCxhQUFMLENBQW1CQyxXQUFuQixFQUFnQ3IrQixJQUFoQyxDQUFxQ3MrQixRQUFyQztBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtGLGFBQUwsQ0FBbUJDLFdBQW5CLElBQWtDLENBQUNDLFFBQUQsQ0FBbEM7QUFDRDs7QUFFRDc4QixnQkFBUWEsSUFBUixDQUFjLEdBQUUrN0IsV0FBWSxHQUFFbEIsZ0JBQWlCLEdBQUVPLEdBQUksRUFBckQsRUFBd0RZLFFBQXhEO0FBQ0EsZUFBTzc4QixRQUFRYSxJQUFSLENBQWErN0IsV0FBYixFQUEwQkMsUUFBMUIsQ0FBUDtBQUNEOztBQUVEMytCLFdBQU0wK0IsV0FBTixFQUFtQixHQUFHbGhDLElBQXRCLEVBQTRCO0FBQzFCNmdDLHlCQUFpQkssV0FBakI7O0FBRUEsY0FBTUUsYUFBYUwsS0FBS1QsTUFBTCxHQUFjUyxLQUFLVCxNQUFMLENBQVlZLFdBQVosQ0FBZCxHQUF5QyxJQUE1RDs7QUFFQSxZQUFJRSxVQUFKLEVBQWdCO0FBQ2QsZUFBSyxJQUFJMStCLElBQUksQ0FBUixFQUFXYSxNQUFNNjlCLFdBQVd4K0IsTUFBakMsRUFBeUNGLElBQUlhLEdBQTdDLEVBQWtEYixHQUFsRCxFQUF1RDtBQUNyRCxrQkFBTXkrQixXQUFXQyxXQUFXMStCLENBQVgsQ0FBakI7QUFDQXkrQjtBQUNEO0FBQ0Y7QUFDRCxlQUFPNzhCLFFBQVE5QixJQUFSLENBQWEwK0IsV0FBYixFQUEwQixHQUFHbGhDLElBQTdCLENBQVA7QUFDRDs7QUFFRDs7Ozs7QUFLQXFoQyxhQUFRZCxHQUFSLEVBQWFXLFdBQWIsRUFBMEIsR0FBR2xoQyxJQUE3QixFQUFtQztBQUNqQzZnQyx5QkFBaUJLLFdBQWpCOztBQUVBLGVBQU81OEIsUUFBUTlCLElBQVIsQ0FBYyxHQUFFMCtCLFdBQVksR0FBRWxCLGdCQUFpQixHQUFFTyxHQUFJLEVBQXJELEVBQXdELEdBQUd2Z0MsSUFBM0QsQ0FBUDtBQUNEOztBQUVEMEYsVUFBS3c3QixXQUFMLEVBQWtCQyxRQUFsQixFQUE0QjtBQUMxQk4seUJBQWlCSyxXQUFqQjtBQUNBLGVBQU81OEIsUUFBUW9CLEdBQVIsQ0FBWXc3QixXQUFaLEVBQXlCQyxRQUF6QixDQUFQO0FBQ0Q7O0FBRURHLHdCQUFtQjtBQUNqQixjQUFNQyxTQUFTamhDLE9BQU9KLFNBQVAsQ0FBaUI4eEIsY0FBakIsQ0FBZ0M5c0IsSUFBaEMsQ0FBcUMsS0FBSzFCLFNBQTFDLENBQWY7O0FBRUEsYUFBSyxJQUFJMDlCLFdBQVQsSUFBd0IsS0FBSzE5QixTQUE3QixFQUF3QztBQUN0QyxjQUFJKzlCLE9BQU9MLFdBQVAsQ0FBSixFQUF5QjtBQUN2QixrQkFBTU0sWUFBWSxLQUFLaCtCLFNBQUwsQ0FBZTA5QixXQUFmLEtBQStCLEVBQWpEO0FBQ0EsaUJBQUssSUFBSXgrQixJQUFJLENBQWIsRUFBZ0JBLElBQUk4K0IsVUFBVTUrQixNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDekMsb0JBQU15K0IsV0FBV0ssVUFBVTkrQixDQUFWLENBQWpCO0FBQ0E0QixzQkFBUW9CLEdBQVIsQ0FBWXc3QixXQUFaLEVBQXlCQyxRQUF6QjtBQUNBNzhCLHNCQUFRb0IsR0FBUixDQUFhLEdBQUV3N0IsV0FBWSxHQUFFbEIsZ0JBQWlCLEdBQUVPLEdBQUksRUFBcEQsRUFBdURZLFFBQXZEO0FBQ0Q7QUFDRjtBQUNGOztBQUVELGFBQUssSUFBSUQsV0FBVCxJQUF3QixLQUFLRCxhQUE3QixFQUE0QztBQUMxQyxjQUFJTSxPQUFPTCxXQUFQLENBQUosRUFBeUI7QUFDdkIsa0JBQU1NLFlBQVksS0FBS1AsYUFBTCxDQUFtQkMsV0FBbkIsS0FBbUMsRUFBckQ7QUFDQSxpQkFBSyxJQUFJeCtCLElBQUksQ0FBYixFQUFnQkEsSUFBSTgrQixVQUFVNStCLE1BQTlCLEVBQXNDRixHQUF0QyxFQUEyQztBQUN6QyxvQkFBTXkrQixXQUFXSyxVQUFVOStCLENBQVYsQ0FBakI7QUFDQTRCLHNCQUFRb0IsR0FBUixDQUFZdzdCLFdBQVosRUFBeUJDLFFBQXpCO0FBQ0E3OEIsc0JBQVFvQixHQUFSLENBQWEsR0FBRXc3QixXQUFZLEdBQUVsQixnQkFBaUIsR0FBRU8sR0FBSSxFQUFwRCxFQUF1RFksUUFBdkQ7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDs7O0FBR0FsNUIsZ0JBQVc7QUFDVDtBQUNBLGFBQUtxNUIsZUFBTDtBQUNBLGFBQUs5OUIsU0FBTCxHQUFpQixFQUFqQjs7QUFFQTtBQUNBLGVBQU91OUIsS0FBS1osWUFBTCxDQUFrQkksR0FBbEIsQ0FBUDtBQUNBLFlBQUksTUFBTXQ0QixPQUFWLEVBQW1CO0FBQ2pCLGlCQUFPLE1BQU1BLE9BQU4sRUFBUDtBQUNEO0FBQ0Y7QUF0SGdDLEtBQW5DO0FBd0hBLFNBQUttNEIsT0FBTCxDQUFhRyxHQUFiLElBQW9CUyxRQUFwQjs7QUFFQTs7OztBQUlBLFdBQU8sQ0FBQyxHQUFHaGhDLElBQUosS0FBYTtBQUNsQixhQUFPLEtBQUt5Z0MsWUFBTCxDQUFrQkYsR0FBbEIsRUFBdUIsR0FBR3ZnQyxJQUExQixDQUFQO0FBQ0QsS0FGRDtBQUdEOztBQUVEOzs7QUFHQXloQyxxQkFBb0I7QUFDbEJuaEMsV0FBT3NGLElBQVAsQ0FBWSxLQUFLdTZCLFlBQWpCLEVBQStCN00sT0FBL0IsQ0FBd0NpTixHQUFELElBQVM7QUFDOUMsVUFBSSxLQUFLSixZQUFMLENBQWtCSSxHQUFsQixFQUF1QnQ0QixPQUEzQixFQUFvQztBQUNsQyxhQUFLazRCLFlBQUwsQ0FBa0JJLEdBQWxCLEVBQXVCdDRCLE9BQXZCO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRUQ7OztBQUdBQSxZQUFXO0FBQ1QsU0FBS2k0QixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0QsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFNBQUtHLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS2x2QixRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS292QixNQUFMLEdBQWMsSUFBZDtBQUNBLFNBQUttQixnQkFBTDtBQUNEOztBQUVEOzs7OztBQUtBWCxzQkFBcUJJLFdBQXJCLEVBQWtDO0FBQ2hDLFFBQUksQ0FBQyxLQUFLakIsYUFBTCxDQUFtQjdmLE9BQW5CLENBQTJCOGdCLFdBQTNCLENBQUQsR0FBMkMsQ0FBL0MsRUFBa0Q7QUFDaEQsWUFBTSxJQUFJaCtCLEtBQUosQ0FBVyw4QkFBNkJnK0IsV0FBWSxFQUFwRCxDQUFOO0FBQ0Q7QUFDRjtBQTFPVzs7a0JBNk9DdkksTzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbFBmOzs7Ozs7QUFDQSxNQUFNdUcsZUFBZWwxQixpQkFBT2sxQixZQUE1QjtBQUNBLE1BQU05RixNQUFOLENBQWE7QUFDVGh5QixnQkFBWThZLE1BQVosRUFBb0I7QUFDaEIsYUFBS3VGLFdBQUwsR0FBbUJ2RixPQUFPME4sV0FBMUI7QUFDQSxhQUFLOFQsWUFBTCxHQUFvQnhoQixPQUFPeWhCLFlBQTNCO0FBQ0EsYUFBSzk3QixHQUFMLEdBQVdxYSxPQUFPcmEsR0FBbEI7QUFDQSxhQUFLK2UsRUFBTCxHQUFVMUUsT0FBTzBFLEVBQWpCO0FBQ0EsYUFBS0YsTUFBTCxHQUFjeEUsT0FBT3dFLE1BQXJCOztBQUVBLGFBQUtrZCxNQUFMLEdBQWU5aEIsT0FBTzhoQixNQUFQLElBQWlCOWhCLE9BQU8raEIsUUFBdkM7QUFDSDs7QUFFRDFnQyxXQUFPO0FBQ0gsYUFBS3NELEVBQUwsQ0FBUXk2QixhQUFhQyxhQUFyQixFQUFvQyxLQUFLMkMsT0FBTCxDQUFhNThCLElBQWIsQ0FBa0IsSUFBbEIsQ0FBcEM7QUFDSDs7QUFFRDQ4QixjQUFVO0FBQ04sWUFBRyxDQUFDLEtBQUtDLE1BQVQsRUFBaUI7QUFDYixnQkFBSUMsUUFBUSxLQUFLSixNQUFMLENBQVlLLE1BQVosQ0FBbUJDLFNBQW5CLENBQTZCLEtBQTdCLEVBQW9DLEtBQUtyOEIsR0FBTCxDQUFTd00sTUFBN0MsRUFBcUQsRUFBRWhPLE1BQU0sU0FBUixFQUFyRCxFQUEwRSxLQUExRSxFQUFpRixDQUFDLFNBQUQsRUFBWSxTQUFaLENBQWpGLENBQVo7QUFDQTI5QixrQkFBTXZSLElBQU4sQ0FBVzVxQixPQUFPO0FBQ2QscUJBQUtrOEIsTUFBTCxHQUFjbDhCLEdBQWQ7QUFDQSxxQkFBS3M4QixXQUFMO0FBQ0gsYUFIRDtBQUlILFNBTkQsTUFNTztBQUNILGlCQUFLQSxXQUFMO0FBQ0g7QUFDSjs7QUFFREEsa0JBQWM7QUFDVixZQUFJdlUsY0FBYyxLQUFLMWMsUUFBTCxDQUFjQyxXQUFkLENBQTBCLEtBQUtzVSxXQUEvQixDQUFsQjtBQUNBLFlBQUlrYyxlQUFlLEtBQUt6d0IsUUFBTCxDQUFjQyxXQUFkLENBQTBCLEtBQUt1d0IsWUFBL0IsQ0FBbkI7QUFDQSxZQUFJbDZCLE9BQU9vbUIsWUFBWXBvQixLQUFaLEVBQVg7QUFDQSxZQUFHZ0MsSUFBSCxFQUFTO0FBQ0wsaUJBQUtvNkIsTUFBTCxDQUFZSyxNQUFaLENBQW1CRyxPQUFuQixDQUEyQixFQUFFLzlCLE1BQU0sU0FBUixFQUFtQnVnQixJQUFJLEtBQUtBLEVBQUwsQ0FBUXZTLE1BQS9CLEVBQTNCLEVBQW9FLEtBQUswdkIsTUFBekUsRUFBaUZ2NkIsSUFBakYsRUFBdUZpcEIsSUFBdkYsQ0FBNEY0UixPQUFLO0FBQzdGViw2QkFBYTkrQixJQUFiLENBQWtCLElBQUk2RSxVQUFKLENBQWUyNkIsR0FBZixDQUFsQjtBQUNBLHFCQUFLNy9CLElBQUwsQ0FBVTA4QixhQUFhRSxTQUF2QjtBQUNBLHFCQUFLK0MsV0FBTCxDQUFpQjM2QixJQUFqQjtBQUNILGFBSkQ7QUFLSDtBQUNKO0FBdENRO2tCQXdDRTR4QixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2Y7Ozs7OztBQUNBLE1BQU1pRyxpQkFBaUJpRCxpQkFBT2pELGNBQTlCOztBQUVBLElBQUlrRCxNQUFKO0FBQ0EsSUFBSUMsZ0JBQUo7QUFDQSxJQUFJLE9BQU9DLFNBQVNGLE1BQWhCLEtBQTJCLFdBQS9CLEVBQTRDO0FBQUU7QUFDNUNBLFdBQVMsUUFBVDtBQUNBQyxxQkFBbUIsa0JBQW5CO0FBQ0QsQ0FIRCxNQUdPLElBQUksT0FBT0MsU0FBU0MsUUFBaEIsS0FBNkIsV0FBakMsRUFBOEM7QUFDbkRILFdBQVMsVUFBVDtBQUNBQyxxQkFBbUIsb0JBQW5CO0FBQ0QsQ0FITSxNQUdBLElBQUksT0FBT0MsU0FBU0UsWUFBaEIsS0FBaUMsV0FBckMsRUFBa0Q7QUFDdkRKLFdBQVMsY0FBVDtBQUNBQyxxQkFBbUIsd0JBQW5CO0FBQ0Q7O0FBRUQsTUFBTTNKLGNBQU4sQ0FBcUI7O0FBRW5CenhCLGdCQUFlO0FBQ2IsU0FBS282QixTQUFMLEdBQWlCO0FBQ2ZvQixjQUFRLEVBRE87QUFFZkMsZ0JBQVU7QUFGSyxLQUFqQjtBQUlBLFNBQUtDLHNCQUFMLEdBQThCLEtBQUtBLHNCQUFMLENBQTRCNTlCLElBQTVCLENBQWlDLElBQWpDLENBQTlCO0FBQ0EsU0FBSy9ELElBQUw7QUFDRDs7QUFFREEsU0FBUTtBQUNOc2hDLGFBQVNNLGdCQUFULENBQTBCUCxnQkFBMUIsRUFBNEMsS0FBS00sc0JBQWpELEVBQXlFLEtBQXpFO0FBQ0Q7O0FBRURBLDJCQUEwQjtBQUN4QixTQUFLdGdDLElBQUwsQ0FBVTY4QixlQUFlQyxpQkFBekIsRUFBNENtRCxTQUFTRixNQUFULENBQTVDO0FBQ0Q7O0FBRUR0NkIsWUFBVztBQUNUdzZCLGFBQVNPLG1CQUFULENBQTZCUixnQkFBN0IsRUFBK0MsS0FBS00sc0JBQXBEO0FBQ0Q7O0FBckJrQjs7a0JBeUJOakssYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2YsTUFBTW9LLEtBQU0sWUFBWTtBQUN0QixRQUFNL3ZCLE1BQU0sSUFBSTBJLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUNDLE1BQUl4SixRQUFKLENBQWFjLEdBQWIsQ0FBRCxDQUFvQmd3QixRQUFwQixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxFQUFxQyxJQUFyQyxFQUZzQixDQUVxQjtBQUMzQyxTQUFRLElBQUlDLFVBQUosQ0FBZWp3QixHQUFmLENBQUQsQ0FBc0IsQ0FBdEIsTUFBNkIsR0FBcEMsQ0FIc0IsQ0FHa0I7QUFDekMsQ0FKVSxFQUFYOztrQkFNZSt2QixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05mLE1BQU1BLEtBQU0sWUFBWTtBQUN0QixRQUFNL3ZCLE1BQU0sSUFBSTBJLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUNDLE1BQUl4SixRQUFKLENBQWFjLEdBQWIsQ0FBRCxDQUFvQmd3QixRQUFwQixDQUE2QixDQUE3QixFQUFnQyxHQUFoQyxFQUFxQyxJQUFyQyxFQUZzQixDQUVxQjtBQUMzQyxTQUFRLElBQUlDLFVBQUosQ0FBZWp3QixHQUFmLENBQUQsQ0FBc0IsQ0FBdEIsTUFBNkIsR0FBcEMsQ0FIc0IsQ0FHa0I7QUFDekMsQ0FKVSxFQUFYOztBQU1BLE1BQU1tTixVQUFVO0FBQ2QsTUFBSStpQixNQUFKLEdBQWM7QUFDWixRQUFJNWhCLElBQUluQixRQUFRZ2pCLEVBQWhCO0FBQ0EsV0FBTzdoQixFQUFFOGhCLElBQUYsR0FBUyxJQUFULEdBQWdCOWhCLEVBQUUraEIsUUFBRixHQUFhLFFBQWIsR0FBd0IsUUFBL0M7QUFDRCxHQUphO0FBS2QsTUFBSWpqQixPQUFKLEdBQWU7QUFDYixRQUFJa2pCLEtBQUt6akIsVUFBVUYsU0FBVixDQUFvQkcsV0FBcEIsRUFBVDtBQUNBLFFBQUl5akIsTUFBTTtBQUNSQyxVQUFJLDBCQURJO0FBRVJDLGNBQVEsbUJBRkE7QUFHUkMsY0FBUSxrQkFIQTtBQUlSQyxhQUFPLGdCQUpDO0FBS1JDLGNBQVE7QUFMQSxLQUFWO0FBT0EsV0FBTyxHQUFHcmpDLE1BQUgsQ0FBVUgsT0FBT3NGLElBQVAsQ0FBWTY5QixHQUFaLEVBQWlCcnpCLE1BQWpCLENBQXdCdkssT0FBTzQ5QixJQUFJNTlCLEdBQUosRUFBUzhuQixJQUFULENBQWM2VixFQUFkLENBQS9CLENBQVYsRUFBNkQsQ0FBN0QsQ0FBUDtBQUNELEdBZmE7QUFnQmQsTUFBSUgsRUFBSixHQUFVO0FBQ1IsUUFBSUcsS0FBS3pqQixVQUFVRixTQUFuQjtBQUNBLFFBQUlra0IsaUJBQWlCLG9CQUFvQnBXLElBQXBCLENBQXlCNlYsRUFBekIsQ0FBckI7QUFDQSxRQUFJUSxZQUFZLGdCQUFnQnJXLElBQWhCLENBQXFCNlYsRUFBckIsS0FBNEJPLGNBQTVDO0FBQ0EsUUFBSUUsWUFBWSxjQUFjdFcsSUFBZCxDQUFtQjZWLEVBQW5CLENBQWhCO0FBQ0EsUUFBSVUsWUFBWSxjQUFjdlcsSUFBZCxDQUFtQjZWLEVBQW5CLENBQWhCO0FBQ0EsUUFBSUQsV0FBVyxvQkFBb0I1VixJQUFwQixDQUF5QjZWLEVBQXpCLEtBQWlDUyxhQUFhLENBQUMsYUFBYXRXLElBQWIsQ0FBa0I2VixFQUFsQixDQUEvQyxJQUEwRVUsYUFBYSxhQUFhdlcsSUFBYixDQUFrQjZWLEVBQWxCLENBQXRHO0FBQ0EsUUFBSVcsVUFBVSxhQUFheFcsSUFBYixDQUFrQjZWLEVBQWxCLEtBQXlCLENBQUNELFFBQXhDO0FBQ0EsUUFBSUQsT0FBTyxDQUFDYSxPQUFELElBQVksQ0FBQ0YsU0FBYixJQUEwQixDQUFDRCxTQUF0QztBQUNBLFdBQU87QUFDTFQsY0FESztBQUVMWSxhQUZLO0FBR0xGLGVBSEs7QUFJTFgsVUFKSztBQUtMVSxlQUxLO0FBTUxELG9CQU5LO0FBT0xHO0FBUEssS0FBUDtBQVNELEdBbENhOztBQW9DZCxNQUFJbHBCLElBQUosR0FBWTtBQUNWLFdBQU9pb0IsRUFBUDtBQUNEO0FBdENhLENBQWhCOztrQkF5Q2U1aUIsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ2YsTUFBTW5GLElBQU4sQ0FBVztBQUNULFNBQU9DLE1BQVAsQ0FBZTVKLFVBQWYsRUFBMkI7QUFDekIsVUFBTTZ5QixNQUFNLEVBQVo7QUFDQSxVQUFNQyxRQUFROXlCLFVBQWQ7QUFDQSxRQUFJN08sSUFBSSxDQUFSO0FBQ0EsVUFBTUUsU0FBUzJPLFdBQVczTyxNQUExQjs7QUFFQSxXQUFPRixJQUFJRSxNQUFYLEVBQW1CO0FBQ2pCLFVBQUl5aEMsTUFBTTNoQyxDQUFOLElBQVcsSUFBZixFQUFxQjtBQUNuQjBoQyxZQUFJdmhDLElBQUosQ0FBU3VCLE9BQU9rZ0MsWUFBUCxDQUFvQkQsTUFBTTNoQyxDQUFOLENBQXBCLENBQVQ7QUFDQSxVQUFFQSxDQUFGO0FBQ0E7QUFDRCxPQUpELE1BSU8sSUFBSTJoQyxNQUFNM2hDLENBQU4sSUFBVyxJQUFmLEVBQXFCO0FBQzFCO0FBQ0QsT0FGTSxNQUVBLElBQUkyaEMsTUFBTTNoQyxDQUFOLElBQVcsSUFBZixFQUFxQjtBQUMxQixZQUFJd1ksS0FBS3FwQixrQkFBTCxDQUF3QkYsS0FBeEIsRUFBK0IzaEMsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBSixFQUEwQztBQUN4QyxnQkFBTThoQyxPQUFPLENBQUNILE1BQU0zaEMsQ0FBTixJQUFXLElBQVosS0FBcUIsQ0FBckIsR0FBMEIyaEMsTUFBTTNoQyxJQUFJLENBQVYsSUFBZSxJQUF0RDtBQUNBLGNBQUk4aEMsUUFBUSxJQUFaLEVBQWtCO0FBQ2hCSixnQkFBSXZoQyxJQUFKLENBQVN1QixPQUFPa2dDLFlBQVAsQ0FBb0JFLE9BQU8sTUFBM0IsQ0FBVDtBQUNBOWhDLGlCQUFLLENBQUw7QUFDQTtBQUNEO0FBQ0Y7QUFDRixPQVRNLE1BU0EsSUFBSTJoQyxNQUFNM2hDLENBQU4sSUFBVyxJQUFmLEVBQXFCO0FBQzFCLFlBQUl3WSxLQUFLcXBCLGtCQUFMLENBQXdCRixLQUF4QixFQUErQjNoQyxDQUEvQixFQUFrQyxDQUFsQyxDQUFKLEVBQTBDO0FBQ3hDLGdCQUFNOGhDLE9BQU8sQ0FBQ0gsTUFBTTNoQyxDQUFOLElBQVcsR0FBWixLQUFvQixFQUFwQixHQUF5QixDQUFDMmhDLE1BQU0zaEMsSUFBSSxDQUFWLElBQWUsSUFBaEIsS0FBeUIsQ0FBbEQsR0FBc0QyaEMsTUFBTTNoQyxJQUFJLENBQVYsSUFBZSxJQUFsRjtBQUNBLGNBQUk4aEMsUUFBUSxLQUFSLElBQWlCLENBQUNBLE9BQU8sTUFBUixNQUFvQixNQUF6QyxFQUFpRDtBQUMvQ0osZ0JBQUl2aEMsSUFBSixDQUFTdUIsT0FBT2tnQyxZQUFQLENBQW9CRSxPQUFPLE1BQTNCLENBQVQ7QUFDQTloQyxpQkFBSyxDQUFMO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsT0FUTSxNQVNBLElBQUkyaEMsTUFBTTNoQyxDQUFOLElBQVcsSUFBZixFQUFxQjtBQUMxQixZQUFJd1ksS0FBS3FwQixrQkFBTCxDQUF3QkYsS0FBeEIsRUFBK0IzaEMsQ0FBL0IsRUFBa0MsQ0FBbEMsQ0FBSixFQUEwQztBQUN4QyxjQUFJOGhDLE9BQU8sQ0FBQ0gsTUFBTTNoQyxDQUFOLElBQVcsR0FBWixLQUFvQixFQUFwQixHQUF5QixDQUFDMmhDLE1BQU0zaEMsSUFBSSxDQUFWLElBQWUsSUFBaEIsS0FBeUIsRUFBbEQsR0FDRCxDQUFDMmhDLE1BQU0zaEMsSUFBSSxDQUFWLElBQWUsSUFBaEIsS0FBeUIsQ0FEeEIsR0FDNkIyaEMsTUFBTTNoQyxJQUFJLENBQVYsSUFBZSxJQUR2RDtBQUVBLGNBQUk4aEMsT0FBTyxPQUFQLElBQWtCQSxPQUFPLFFBQTdCLEVBQXVDO0FBQ3JDQSxvQkFBUSxPQUFSO0FBQ0FKLGdCQUFJdmhDLElBQUosQ0FBU3VCLE9BQU9rZ0MsWUFBUCxDQUFxQkUsU0FBUyxFQUFWLEdBQWdCLE1BQXBDLENBQVQ7QUFDQUosZ0JBQUl2aEMsSUFBSixDQUFTdUIsT0FBT2tnQyxZQUFQLENBQXFCRSxPQUFPLEtBQVIsR0FBaUIsTUFBckMsQ0FBVDtBQUNBOWhDLGlCQUFLLENBQUw7QUFDQTtBQUNEO0FBQ0Y7QUFDRjtBQUNEMGhDLFVBQUl2aEMsSUFBSixDQUFTdUIsT0FBT2tnQyxZQUFQLENBQW9CLE1BQXBCLENBQVQ7QUFDQSxRQUFFNWhDLENBQUY7QUFDRDs7QUFFRCxXQUFPMGhDLElBQUlwRyxJQUFKLENBQVMsRUFBVCxDQUFQO0FBQ0Q7O0FBRUQsU0FBT3VHLGtCQUFQLENBQTJCaHpCLFVBQTNCLEVBQXVDcEosS0FBdkMsRUFBOENzOEIsV0FBOUMsRUFBMkQ7QUFDekQsUUFBSW45QixRQUFRaUssVUFBWjtBQUNBLFFBQUlwSixRQUFRczhCLFdBQVIsR0FBc0JuOUIsTUFBTTFFLE1BQWhDLEVBQXdDO0FBQ3RDLGFBQU82aEMsYUFBUCxFQUFzQjtBQUNwQixZQUFJLENBQUNuOUIsTUFBTSxFQUFFYSxLQUFSLElBQWlCLElBQWxCLE1BQTRCLElBQWhDLEVBQXNDO0FBQ3BDLGlCQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0QsYUFBTyxJQUFQO0FBQ0QsS0FQRCxNQU9PO0FBQ0wsYUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQWhFUTs7a0JBbUVJK1MsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVmOzs7Ozs7QUFDQSxNQUFNd3BCLFFBQU4sU0FBdUJ4akMsZ0JBQXZCLENBQW9DO0FBQ2xDa0csY0FBYThZLE1BQWIsRUFBcUI7QUFDbkI7QUFDQSxTQUFLQSxNQUFMLEdBQWM1ZixPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0I0UyxNQUFsQixDQUFkO0FBQ0EsUUFBSXlrQixlQUFlN2tCLE9BQU82a0IsWUFBUCxJQUF1QjdrQixPQUFPOGtCLGtCQUFqRDtBQUNBLFNBQUt2aEMsT0FBTCxHQUFlLElBQUlzaEMsWUFBSixFQUFmO0FBQ0EsU0FBS0UsUUFBTCxHQUFnQixLQUFLeGhDLE9BQUwsQ0FBYXloQyxVQUFiLEVBQWhCO0FBQ0EsU0FBS0QsUUFBTCxDQUFjRSxPQUFkLENBQXNCLEtBQUsxaEMsT0FBTCxDQUFhMmhDLFdBQW5DO0FBQ0EsU0FBS3o1QixJQUFMLEdBQVloSyxTQUFaO0FBQ0EsU0FBS3dILE9BQUwsR0FBZSxFQUFmO0FBQ0EsU0FBS2s4QixXQUFMLEdBQW1CLEtBQUsva0IsTUFBTCxDQUFZK2tCLFdBQVosSUFBMkIsR0FBOUM7QUFDQSxTQUFLNzJCLFFBQUwsR0FBZ0IsQ0FBaEI7O0FBRUEsU0FBSzgyQixjQUFMLEdBQXNCM2pDLFNBQXRCO0FBQ0EsU0FBSzRqQyxXQUFMLEdBQW1CNWpDLFNBQW5CO0FBQ0EsU0FBSzZqQyxRQUFMLEdBQWdCN2pDLFNBQWhCO0FBQ0EsU0FBSzhqQyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBS3RsQixNQUFMLENBQVl1bEIsTUFBWixJQUFzQixHQUFyQztBQUNBO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQWY7QUFDRDs7QUFFRCxNQUFJQyxXQUFKLEdBQW1CO0FBQ2pCLFdBQU8sS0FBS0wsWUFBWjtBQUNEOztBQUVETSxjQUFhdjhCLFVBQWIsRUFBeUI7QUFDdkIsUUFBSSxFQUFDTixPQUFELEtBQVlNLFVBQWhCO0FBQ0EsUUFBSTdCLE9BQU91QixPQUFYO0FBQ0FNLGVBQVdOLE9BQVgsR0FBcUIsRUFBckI7QUFDQSxTQUFLODhCLFlBQUwsQ0FBa0JyK0IsSUFBbEI7QUFDRDtBQUNEcStCLGVBQWNyK0IsSUFBZCxFQUFvQjtBQUNsQixTQUFLLElBQUk5RSxJQUFJLENBQWIsRUFBZ0JBLElBQUk4RSxLQUFLNUUsTUFBekIsRUFBaUNGLEdBQWpDLEVBQXNDO0FBQ3BDOEUsV0FBSzlFLENBQUwsRUFBUTZLLEdBQVIsR0FBZS9GLEtBQUs5RSxDQUFMLEVBQVE2SyxHQUFSLEtBQWdCaE0sU0FBakIsR0FBOEJpRyxLQUFLOUUsQ0FBTCxFQUFRaUssR0FBdEMsR0FBNENuRixLQUFLOUUsQ0FBTCxFQUFRNkssR0FBbEU7QUFDQSxXQUFLODNCLFVBQUwsQ0FBZ0J4aUMsSUFBaEIsQ0FBcUIyRSxLQUFLOUUsQ0FBTCxDQUFyQjtBQUNEO0FBQ0QsUUFBSSxLQUFLMmlDLFVBQUwsQ0FBZ0J6aUMsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsVUFBSSxLQUFLd2lDLFFBQUwsS0FBa0I3akMsU0FBdEIsRUFBaUM7QUFDL0IsYUFBSzZqQyxRQUFMLEdBQWdCLEtBQUtDLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUI5M0IsR0FBbkM7QUFDRDtBQUNELFVBQUksQ0FBQyxLQUFLODNCLFVBQUwsQ0FBZ0IsS0FBS0EsVUFBTCxDQUFnQnppQyxNQUFoQixHQUF5QixDQUF6QyxFQUE0QzJLLEdBQTVDLEdBQWtELEtBQUs2M0IsUUFBeEQsSUFBb0UsSUFBcEUsR0FBMkUsS0FBS0gsV0FBcEYsRUFBaUc7QUFDL0YsYUFBS2EsU0FBTDtBQUNEO0FBQ0Y7QUFDRjs7QUFFREEsY0FBYTtBQUNYLFFBQUksS0FBS1AsU0FBVCxFQUFvQjtBQUNsQjtBQUNEO0FBQ0QsU0FBS0EsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFFBQUkvOUIsT0FBTyxLQUFLNjlCLFVBQWhCO0FBQ0EsUUFBSXQ4QixVQUFVLEVBQWQ7QUFDQSxRQUFJc25CLFFBQVEsSUFBWjtBQUNBLFFBQUloZ0IsU0FBUzdJLEtBQUtoQyxLQUFMLEVBQWI7QUFDQSxXQUFPNkssTUFBUCxFQUFlO0FBQ2IsVUFBSTAxQixhQUFhckIsU0FBU3NCLFVBQVQsQ0FBb0IsS0FBS3o2QixJQUF6QixFQUErQjhFLE1BQS9CLENBQWpCO0FBQ0F0SCxjQUFRbEcsSUFBUixDQUFha2pDLFVBQWI7QUFDQSxXQUFLWCxRQUFMLEdBQWdCLzBCLE9BQU85QyxHQUF2QjtBQUNBOEMsZUFBUzdJLEtBQUtoQyxLQUFMLEVBQVQ7QUFDRDtBQUNELFFBQUk2TSxTQUFTcXlCLFNBQVN1QixXQUFULENBQXFCbDlCLE9BQXJCLENBQWI7QUFDQSxRQUFJO0FBQ0YsV0FBSzFGLE9BQUwsQ0FBYTZpQyxlQUFiLENBQTZCN3pCLE9BQU9BLE1BQXBDLEVBQTRDLFVBQVVBLE1BQVYsRUFBa0I7QUFDNUQsWUFBSTh6QixjQUFjOVYsTUFBTWh0QixPQUFOLENBQWMraUMsa0JBQWQsRUFBbEI7QUFDQUQsb0JBQVk5ekIsTUFBWixHQUFxQkEsTUFBckI7QUFDQTh6QixvQkFBWUUsT0FBWixHQUFzQmhXLE1BQU1pVyxhQUFOLENBQW9CcGhDLElBQXBCLENBQXlCbXJCLEtBQXpCLENBQXRCO0FBQ0FBLGNBQU10bkIsT0FBTixDQUFjbEcsSUFBZCxDQUFtQjtBQUNqQjJyQixnQkFBTTZCLE1BQU1qaUIsUUFESztBQUVqQkEsb0JBQVVpRSxPQUFPakUsUUFGQTtBQUdqQjVHLGdCQUFNMitCO0FBSFcsU0FBbkI7O0FBTUE5VixjQUFNamlCLFFBQU4sSUFBa0JpRSxPQUFPakUsUUFBekI7O0FBRUEsWUFBSSxDQUFDaWlCLE1BQU02VSxjQUFYLEVBQTJCO0FBQ3pCN1UsZ0JBQU02VSxjQUFOLEdBQXVCN1UsTUFBTWtXLGFBQU4sQ0FBb0JsVyxNQUFNc1YsV0FBMUIsQ0FBdkI7O0FBRUEsY0FBSXRWLE1BQU1xVixPQUFWLEVBQW1CO0FBQ2pCclYsa0JBQU1tVyxJQUFOO0FBQ0Q7QUFDRjs7QUFFRCxZQUFJLENBQUNuVyxNQUFNOFUsV0FBUCxJQUFzQjlVLE1BQU02VSxjQUFoQyxFQUFnRDtBQUM5QzdVLGdCQUFNOFUsV0FBTixHQUFvQjlVLE1BQU1rVyxhQUFOLENBQW9CbFcsTUFBTXNWLFdBQU4sR0FBb0J0VixNQUFNNlUsY0FBTixDQUFxQjkyQixRQUE3RCxDQUFwQjtBQUNEO0FBQ0RpaUIsY0FBTWtWLFNBQU4sR0FBa0IsS0FBbEI7O0FBRUEsWUFBSSxDQUFDbFYsTUFBTWdWLFVBQU4sQ0FBaUJ6aUMsTUFBakIsR0FBMEIsQ0FBMUIsSUFBK0J5dEIsTUFBTWdWLFVBQU4sQ0FBaUJoVixNQUFNZ1YsVUFBTixDQUFpQnppQyxNQUFqQixHQUEwQixDQUEzQyxFQUE4QzJLLEdBQTlDLEdBQW9EOGlCLE1BQU0rVSxRQUExRixJQUFzRyxJQUF0RyxJQUE4Ry9VLE1BQU00VSxXQUF4SCxFQUFxSTtBQUNuSTVVLGdCQUFNeVYsU0FBTjtBQUNEO0FBQ0YsT0E1QkQsRUE0Qkl2VSxDQUFELElBQU87QUFDUjN3QixnQkFBUW9DLEtBQVIsQ0FBY3V1QixDQUFkO0FBQ0QsT0E5QkQ7QUErQkQsS0FoQ0QsQ0FnQ0UsT0FBT3B1QixHQUFQLEVBQVk7QUFDWnZDLGNBQVFvQyxLQUFSLENBQWNHLEdBQWQ7QUFDRDtBQUNGOztBQUVEbWpDLGtCQUFpQjtBQUNmLFFBQUksQ0FBQyxLQUFLbkIsV0FBTixJQUFxQixDQUFDLEtBQUtPLE9BQS9CLEVBQXdDO0FBQ3RDO0FBQ0Q7QUFDRCxRQUFJUyxjQUFjLEtBQUtoQixXQUFMLENBQWlCMzlCLElBQW5DO0FBQ0EyK0IsZ0JBQVloK0IsS0FBWjtBQUNBZytCLGdCQUFZcEIsT0FBWixDQUFvQixLQUFLRixRQUF6QjtBQUNBLFNBQUtLLGNBQUwsR0FBc0IsS0FBS0MsV0FBM0I7QUFDQSxTQUFLRyxZQUFMLEdBQW9CLEtBQUtKLGNBQUwsQ0FBb0IxVyxJQUF4QztBQUNBLFNBQUsyVyxXQUFMLEdBQW1CLEtBQUtvQixhQUFMLENBQW1CLEtBQUtaLFdBQXhCLENBQW5CO0FBQ0EsUUFBSSxLQUFLVCxjQUFULEVBQXlCO0FBQ3ZCLFdBQUtDLFdBQUwsR0FBbUIsS0FBS29CLGFBQUwsQ0FBbUIsS0FBS1osV0FBTCxHQUFtQixLQUFLVCxjQUFMLENBQW9COTJCLFFBQTFELENBQW5CO0FBQ0Q7QUFDRCxTQUFLNUwsSUFBTCxDQUFVLGtCQUFWO0FBQ0Q7O0FBRURna0MsU0FBUTtBQUNOLFNBQUtkLE9BQUwsR0FBZSxJQUFmO0FBQ0EsUUFBSSxDQUFDLEtBQUtSLGNBQVYsRUFBMEI7QUFDeEI7QUFDRDs7QUFFRCxRQUFJaUIsY0FBYyxLQUFLakIsY0FBTCxDQUFvQjE5QixJQUF0QztBQUNBMitCLGdCQUFZcEIsT0FBWixDQUFvQixLQUFLRixRQUF6QjtBQUNBc0IsZ0JBQVloK0IsS0FBWjtBQUNEOztBQUVEcytCLFVBQVM7QUFDUCxVQUFNQyxXQUFXLEtBQUtyakMsT0FBdEI7QUFDQSxRQUFJcWpDLFNBQVMxaEMsS0FBVCxLQUFtQixTQUF2QixFQUFrQztBQUNoQzBoQyxlQUFTQyxPQUFUO0FBQ0Q7QUFDRjs7QUFFRDErQixZQUFXO0FBQ1QsU0FBSzVFLE9BQUwsQ0FBYXVqQyxLQUFiO0FBQ0Q7O0FBRURMLGdCQUFlL1gsSUFBZixFQUFxQjtBQUNuQixRQUFJOW5CLEdBQUo7QUFDQSxTQUFLLElBQUloRSxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS3FHLE9BQUwsQ0FBYW5HLE1BQWpDLEVBQXlDRixHQUF6QyxFQUE4QztBQUM1QyxVQUFJMk4sU0FBUyxLQUFLdEgsT0FBTCxDQUFhckcsQ0FBYixDQUFiO0FBQ0EsVUFBSTJOLE9BQU9tZSxJQUFQLElBQWVBLElBQWYsSUFBd0JuZSxPQUFPbWUsSUFBUCxHQUFjbmUsT0FBT2pDLFFBQXRCLEdBQWtDb2dCLElBQTdELEVBQW1FO0FBQ2pFOW5CLGNBQU0ySixNQUFOO0FBQ0E7QUFDRDtBQUNGO0FBQ0QsV0FBTzNKLEdBQVA7QUFDRDs7QUFFRG1nQyxtQkFBa0J0N0IsSUFBbEIsRUFBd0I7QUFDdEIsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7O0FBRUQsTUFBSXU3QixLQUFKLENBQVd0VixHQUFYLEVBQWdCO0FBQ2QsUUFBSUEsR0FBSixFQUFTO0FBQ1AsV0FBS3FULFFBQUwsQ0FBY2tDLElBQWQsQ0FBbUI5bEMsS0FBbkIsR0FBMkIsQ0FBM0I7QUFDRCxLQUZELE1BRU87QUFDTCxXQUFLNGpDLFFBQUwsQ0FBY2tDLElBQWQsQ0FBbUI5bEMsS0FBbkIsR0FBMkIsS0FBS3VrQyxPQUFoQztBQUNEO0FBQ0Y7O0FBRUQsTUFBSUMsTUFBSixHQUFjO0FBQ1osV0FBTyxLQUFLRCxPQUFaO0FBQ0Q7O0FBRUQsTUFBSUMsTUFBSixDQUFZalUsR0FBWixFQUFpQjtBQUNmLFFBQUlBLE1BQU0sQ0FBVixFQUFhO0FBQ1gsV0FBS2dVLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS1gsUUFBTCxDQUFja0MsSUFBZCxDQUFtQjlsQyxLQUFuQixHQUEyQixDQUEzQjtBQUNBO0FBQ0QsS0FKRCxNQUlPLElBQUl1d0IsTUFBTSxDQUFWLEVBQWE7QUFDbEIsV0FBS2dVLE9BQUwsR0FBZSxDQUFmO0FBQ0EsV0FBS1gsUUFBTCxDQUFja0MsSUFBZCxDQUFtQjlsQyxLQUFuQixHQUEyQixDQUEzQjtBQUNBO0FBQ0Q7O0FBRUQsU0FBS3VrQyxPQUFMLEdBQWVoVSxHQUFmO0FBQ0EsU0FBS3FULFFBQUwsQ0FBY2tDLElBQWQsQ0FBbUI5bEMsS0FBbkIsR0FBMkJ1d0IsR0FBM0I7QUFDRDs7QUFFRCxTQUFPd1UsVUFBUCxDQUFtQno2QixJQUFuQixFQUF5QjhFLE1BQXpCLEVBQWlDO0FBQy9CLFFBQUlnQyxTQUFTLElBQUkzSyxVQUFKLENBQWUySSxPQUFPN0ksSUFBUCxDQUFZQyxVQUFaLEdBQXlCLENBQXhDLENBQWI7QUFDQSxRQUFJdS9CLE9BQU90QyxTQUFTdUMsT0FBVCxDQUFpQjE3QixJQUFqQixFQUF1QjhFLE9BQU83SSxJQUE5QixDQUFYO0FBQ0E2SyxXQUFPdlEsR0FBUCxDQUFXa2xDLElBQVg7QUFDQTMwQixXQUFPdlEsR0FBUCxDQUFXdU8sT0FBTzdJLElBQWxCLEVBQXdCLENBQXhCO0FBQ0EsV0FBTzZLLE1BQVA7QUFDRDs7QUFFRCxTQUFPNHpCLFdBQVAsQ0FBb0JsOUIsT0FBcEIsRUFBNkI7QUFDM0I7QUFDQSxRQUFJbkcsU0FBUyxDQUFiO0FBQ0EsU0FBSyxJQUFJRixJQUFJLENBQVIsRUFBV2tsQixJQUFJN2UsUUFBUW5HLE1BQTVCLEVBQW9DRixJQUFJa2xCLENBQXhDLEVBQTJDbGxCLEdBQTNDLEVBQWdEO0FBQzlDRSxnQkFBVW1HLFFBQVFyRyxDQUFSLEVBQVcrRSxVQUFyQjtBQUNEOztBQUVELFFBQUlmLE1BQU0sSUFBSWdCLFVBQUosQ0FBZTlFLE1BQWYsQ0FBVjtBQUNBLFFBQUkyRSxTQUFTLENBQWI7QUFDQTtBQUNBLFNBQUssSUFBSTdFLElBQUksQ0FBUixFQUFXa2xCLElBQUk3ZSxRQUFRbkcsTUFBNUIsRUFBb0NGLElBQUlrbEIsQ0FBeEMsRUFBMkNsbEIsR0FBM0MsRUFBZ0Q7QUFDOUNnRSxVQUFJNUUsR0FBSixDQUFRaUgsUUFBUXJHLENBQVIsQ0FBUixFQUFvQjZFLE1BQXBCO0FBQ0FBLGdCQUFVd0IsUUFBUXJHLENBQVIsRUFBVytFLFVBQXJCO0FBQ0Q7QUFDRCxXQUFPZixHQUFQO0FBQ0Q7O0FBRUQsU0FBT3VnQyxPQUFQLENBQWdCMTdCLElBQWhCLEVBQXNCL0QsSUFBdEIsRUFBNEI7QUFDMUIsUUFBSXcvQixPQUFPLElBQUl0L0IsVUFBSixDQUFlLENBQWYsQ0FBWDs7QUFFQTtBQUNBcy9CLFNBQUssQ0FBTCxJQUFVLElBQVY7QUFDQUEsU0FBSyxDQUFMLElBQVUsSUFBVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQUEsU0FBSyxDQUFMLElBQVVBLEtBQUssQ0FBTCxJQUFVLElBQXBCOztBQUVBO0FBQ0FBLFNBQUssQ0FBTCxJQUFVLE9BQVN6N0IsS0FBS2dVLFVBQUwsR0FBa0IsQ0FBbkIsSUFBeUIsQ0FBM0M7O0FBRUE7QUFDQXluQixTQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFMLElBQVcsT0FBUXo3QixLQUFLNlQsZUFBTCxJQUF3QixDQUFyRDs7QUFFQTtBQUNBO0FBQ0E0bkIsU0FBSyxDQUFMLElBQVVBLEtBQUssQ0FBTCxJQUFXLE9BQU96N0IsS0FBSzFCLFlBQUwsSUFBcUIsQ0FBakQ7QUFDQW05QixTQUFLLENBQUwsSUFBVSxPQUFRejdCLEtBQUsxQixZQUFMLElBQXFCLENBQXZDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBSXE5QixpQkFBaUIxL0IsS0FBS0MsVUFBTCxHQUFrQixDQUF2Qzs7QUFFQXUvQixTQUFLLENBQUwsSUFBVUEsS0FBSyxDQUFMLElBQVcsT0FBT0Usa0JBQWtCLEVBQTlDO0FBQ0FGLFNBQUssQ0FBTCxJQUFVLE9BQVFFLGtCQUFrQixDQUFwQztBQUNBRixTQUFLLENBQUwsSUFBVSxPQUFRRSxrQkFBa0IsQ0FBcEM7O0FBRUE7QUFDQUYsU0FBSyxDQUFMLElBQVVBLEtBQUssQ0FBTCxJQUFVLElBQXBCO0FBQ0FBLFNBQUssQ0FBTCxJQUFVLElBQVY7O0FBRUE7QUFDQSxXQUFPQSxJQUFQO0FBQ0Q7QUEzUGlDOztrQkE4UHJCdEMsUTs7Ozs7Ozs7Ozs7Ozs7QUMvUGY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7OztBQUdBLE1BQU15QyxZQUFOLENBQW1CO0FBQ2pCLy9CLGNBQWFnZ0MsS0FBYixFQUFvQjtBQUNsQixTQUFLQyxJQUFMLEdBQVlELE1BQU1DLElBQWxCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZRixNQUFNRSxJQUFsQjtBQUNBLFNBQUtqL0IsS0FBTCxHQUFhKytCLE1BQU0vK0IsS0FBbkI7QUFDQSxTQUFLay9CLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLcC9CLEtBQUwsR0FBYSxJQUFiO0FBQ0Q7O0FBRURxL0IsZ0JBQWU7QUFDYixVQUFNQyxXQUFZLEtBQUtILElBQUwsQ0FBVTNCLFdBQVYsSUFBeUIsQ0FBM0M7QUFDQSxVQUFNK0IsV0FBVyxDQUFDLEtBQUtMLElBQUwsQ0FBVTFCLFdBQVYsSUFBeUIsQ0FBMUIsSUFBK0IsSUFBaEQ7O0FBRUEsVUFBTTM0QixNQUFNeTZCLFdBQVdDLFFBQXZCO0FBQ0EsUUFBSSxLQUFLSCxTQUFULEVBQW9CO0FBQ2xCO0FBQ0Q7QUFDRCxRQUFJdjZCLE1BQU0sR0FBVixFQUFlO0FBQUU7QUFDZixXQUFLM0UsS0FBTCxDQUFXRixLQUFYLElBQW9CNkUsR0FBcEI7QUFDQSxXQUFLczZCLElBQUwsQ0FBVWIsS0FBVjtBQUNBLFdBQUtjLFNBQUwsR0FBaUJJLFdBQVcsTUFBTTtBQUNoQyxhQUFLTCxJQUFMLENBQVVkLElBQVY7QUFDQSxhQUFLZSxTQUFMLEdBQWlCLElBQWpCO0FBQ0QsT0FIZ0IsRUFHZHY2QixHQUhjLENBQWpCO0FBSUQsS0FQRCxNQU9PLElBQUlBLE1BQU0sQ0FBQyxHQUFYLEVBQWdCO0FBQ3JCLFdBQUtzNkIsSUFBTCxDQUFVM0IsV0FBVixHQUF3QixLQUFLMkIsSUFBTCxDQUFVM0IsV0FBVixHQUF3Qng0QixLQUFLUSxHQUFMLENBQVNYLEdBQVQsQ0FBaEQ7QUFDRDtBQUNGOztBQUVEL0UsWUFBVztBQUNULFNBQUtFLEtBQUwsR0FBYSxJQUFiO0FBQ0EsU0FBS2svQixJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxJQUFaO0FBQ0Q7QUFqQ2dCOztBQW9DbkI7QUFDQSxNQUFNbk8sV0FBTixTQUEwQnlPLFdBQTFCLENBQXNDO0FBQ3BDeGdDLGNBQWE4WSxNQUFiLEVBQXFCO0FBQ25CO0FBQ0EsU0FBSzJuQixPQUFMLEdBQWVwRixTQUFTcUYsYUFBVCxDQUF1QixRQUF2QixDQUFmO0FBQ0EsU0FBS0Msb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEI3aUMsSUFBMUIsQ0FBK0IsSUFBL0IsQ0FBNUI7QUFDQSxTQUFLL0QsSUFBTCxDQUFVK2UsTUFBVjtBQUNBLFNBQUs4bkIsTUFBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNEOztBQUVEOW1DLE9BQU0rZSxNQUFOLEVBQWM7QUFDWixTQUFLb25CLElBQUwsR0FBWSxJQUFJWSxzQkFBSixDQUFhO0FBQ3ZCQyxjQUFRLEtBQUtOO0FBRFUsS0FBYixDQUFaO0FBR0EsU0FBS1IsSUFBTCxHQUFZLElBQUkzQyxzQkFBSixDQUFheGtCLE1BQWIsQ0FBWjtBQUNBLFNBQUtrb0IsTUFBTCxHQUFjLEtBQUssd0JBQUwsR0FBZDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBSWxCLFlBQUosQ0FBaUI7QUFDakNHLFlBQU0sS0FBS0EsSUFEc0I7QUFFakNELFlBQU0sS0FBS0EsSUFGc0I7QUFHakNoL0IsYUFBTztBQUgwQixLQUFqQixDQUFsQjtBQUtBLFNBQUtpL0IsSUFBTCxDQUFVZ0IsU0FBVixHQUFzQixNQUFNO0FBQzFCLFVBQUksQ0FBQyxLQUFLTixNQUFWLEVBQWtCO0FBQ2hCLGFBQUtPLFdBQUwsQ0FBaUIsS0FBS1YsT0FBdEI7QUFDRDtBQUNELFdBQUtXLGFBQUwsQ0FBbUIsSUFBSUMsS0FBSixDQUFVLFNBQVYsQ0FBbkI7QUFDRCxLQUxEOztBQU9BLFNBQUtMLE1BQUwsQ0FBWWpnQyxLQUFaLENBQWtCLE1BQU07QUFDdEIsVUFBSSxDQUFDLEtBQUtBLEtBQVYsRUFBaUI7QUFDZixhQUFLQSxLQUFMLEdBQWFxVCxLQUFLa3RCLEdBQUwsRUFBYjtBQUNEO0FBQ0QsV0FBS3BELFlBQUwsR0FBb0I5cEIsS0FBS2t0QixHQUFMLEtBQWEsS0FBS3ZnQyxLQUF0QztBQUNBLFdBQUttL0IsSUFBTCxDQUFVcUIsUUFBVixDQUFtQixLQUFLckQsWUFBeEI7QUFDRCxLQU5EOztBQVFBLFNBQUsrQixJQUFMLENBQVU1aUMsRUFBVixDQUFhLGtCQUFiLEVBQWlDLEtBQUtzakMsb0JBQXRDO0FBQ0Q7O0FBRURBLHlCQUF3QjtBQUN0QixTQUFLTSxVQUFMLENBQWdCYixXQUFoQjtBQUNBLFNBQUtGLElBQUwsQ0FBVXNCLFdBQVY7QUFDRDs7QUFFREMsaUJBQWdCO0FBQ2QsU0FBS3ZCLElBQUwsQ0FBVXNCLFdBQVY7QUFDRDs7QUFFRDNnQyxZQUFXO0FBQ1QsU0FBS28vQixJQUFMLENBQVVwL0IsT0FBVjtBQUNBLFNBQUtxL0IsSUFBTCxDQUFVci9CLE9BQVY7QUFDQSxTQUFLbWdDLE1BQUwsQ0FBWVUsSUFBWjtBQUNBLFNBQUszZ0MsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLa2dDLFVBQUwsQ0FBZ0JwZ0MsT0FBaEI7QUFDQSxTQUFLby9CLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLYyxNQUFMLEdBQWMsSUFBZDtBQUNEOztBQUVEVyxrQkFBaUJ6L0IsVUFBakIsRUFBNkJELFVBQTdCLEVBQXlDO0FBQ3ZDLFNBQUtnK0IsSUFBTCxDQUFVekIsV0FBVixDQUFzQnY4QixVQUF0QjtBQUNBLFNBQUtpK0IsSUFBTCxDQUFVMEIsV0FBVixDQUFzQjEvQixVQUF0QjtBQUNEOztBQUVEMi9CLGVBQWMxOUIsSUFBZCxFQUFvQjtBQUNsQixTQUFLODdCLElBQUwsQ0FBVVIsZ0JBQVYsQ0FBMkJ0N0IsSUFBM0I7QUFDRDs7QUFFRDI5QixlQUFjMzlCLElBQWQsRUFBb0I7QUFDbEIsU0FBSys3QixJQUFMLENBQVU2QixnQkFBVixDQUEyQjU5QixJQUEzQjtBQUNEOztBQUVELE1BQUl5TSxLQUFKLEdBQWE7QUFDWCxXQUFPLEtBQUtzdkIsSUFBTCxDQUFVdHZCLEtBQWpCO0FBQ0Q7O0FBRUQsTUFBSUMsTUFBSixHQUFjO0FBQ1osV0FBTyxLQUFLcXZCLElBQUwsQ0FBVXJ2QixNQUFqQjtBQUNEOztBQUVELE1BQUlteEIsVUFBSixHQUFrQjtBQUNoQixXQUFPLEtBQUs5QixJQUFMLENBQVU4QixVQUFqQjtBQUNEOztBQUVELE1BQUlDLFdBQUosR0FBbUI7QUFDakIsV0FBTyxLQUFLL0IsSUFBTCxDQUFVK0IsV0FBakI7QUFDRDs7QUFFRCxNQUFJMTBCLEdBQUosR0FBVztBQUNULFdBQU8sS0FBSzIwQixZQUFMLENBQWtCLEtBQWxCLENBQVA7QUFDRDs7QUFFRCxNQUFJMzBCLEdBQUosQ0FBUzZjLEdBQVQsRUFBYztBQUNaO0FBQ0Q7O0FBRUQsTUFBSStYLFVBQUosR0FBa0I7QUFDaEIsV0FBTyxLQUFLakMsSUFBTCxDQUFVaUMsVUFBakI7QUFDRDs7QUFFRCxNQUFJQyxPQUFKLEdBQWU7QUFDYixXQUFPLEtBQUtsQyxJQUFMLENBQVVrQyxPQUFqQjtBQUNEOztBQUVELE1BQUk3RCxXQUFKLEdBQW1CO0FBQ2pCLFdBQU8sS0FBSzBCLElBQUwsQ0FBVTFCLFdBQWpCO0FBQ0Q7O0FBRUQsTUFBSXYzQixRQUFKLEdBQWdCO0FBQ2QsV0FBTyxLQUFLaTVCLElBQUwsQ0FBVWo1QixRQUFqQjtBQUNEOztBQUVELE1BQUlxN0IsTUFBSixHQUFjO0FBQ1osV0FBTyxLQUFLeEIsT0FBWjtBQUNEOztBQUVELE1BQUl5QixZQUFKLEdBQW9CO0FBQ2xCLFFBQUksS0FBS0MsWUFBTCxDQUFrQixjQUFsQixDQUFKLEVBQXVDO0FBQ3JDLGFBQU8sS0FBS0wsWUFBTCxDQUFrQixjQUFsQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxHQUFQO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJSSxZQUFKLENBQWtCbFksR0FBbEIsRUFBdUI7QUFDckIsU0FBS29ZLFlBQUwsQ0FBa0IsY0FBbEIsRUFBa0NwWSxHQUFsQztBQUNBLFNBQUs2VixJQUFMLENBQVVxQyxZQUFWLEdBQXlCbFksR0FBekI7QUFDQSxTQUFLOFYsSUFBTCxDQUFVb0MsWUFBVixHQUF5QmxZLEdBQXpCOztBQUVBLFNBQUtnWCxhQUFMLENBQW1CLElBQUlDLEtBQUosQ0FBVSxZQUFWLENBQW5CO0FBQ0Q7O0FBRUQsTUFBSW9CLEtBQUosR0FBYTtBQUNYLFdBQU8sS0FBS3hDLElBQUwsQ0FBVXdDLEtBQWpCO0FBQ0Q7O0FBRUQsTUFBSUMsUUFBSixHQUFnQjtBQUNkLFFBQUksS0FBS0gsWUFBTCxDQUFrQixVQUFsQixDQUFKLEVBQW1DO0FBQ2pDLGFBQU8sS0FBS0wsWUFBTCxDQUFrQixVQUFsQixDQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNELE1BQUlRLFFBQUosQ0FBYzdvQyxLQUFkLEVBQXFCLENBRXBCO0FBQ0R1bEMsU0FBUTtBQUNOLFFBQUksS0FBS3dCLE1BQVQsRUFBaUI7QUFDZixXQUFLLy9CLE9BQUw7QUFDQSxXQUFLOUcsSUFBTDtBQUNEOztBQUVELFNBQUttbUMsSUFBTCxDQUFVZCxJQUFWLEdBQWlCL1YsSUFBakIsQ0FBc0IsTUFBTTtBQUMxQixXQUFLdVgsTUFBTCxHQUFjLElBQWQ7QUFDQSxXQUFLUSxhQUFMLENBQW1CLElBQUlDLEtBQUosQ0FBVSxNQUFWLENBQW5CO0FBQ0EsV0FBS1IsT0FBTCxHQUFlLEtBQWY7QUFDRCxLQUpEO0FBS0EsU0FBS1osSUFBTCxDQUFVYixJQUFWO0FBQ0Q7O0FBRURDLFVBQVM7QUFDUCxTQUFLd0IsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLWixJQUFMLENBQVVaLEtBQVY7QUFDQSxTQUFLYSxJQUFMLENBQVViLEtBQVY7O0FBRUEsU0FBSytCLGFBQUwsQ0FBbUIsSUFBSUMsS0FBSixDQUFVLE9BQVYsQ0FBbkI7QUFDRDs7QUFFRCxNQUFJaEQsTUFBSixHQUFjO0FBQ1osV0FBTyxLQUFLNEIsSUFBTCxDQUFVNUIsTUFBakI7QUFDRDs7QUFFRCxNQUFJQSxNQUFKLENBQVlzRSxHQUFaLEVBQWlCO0FBQ2YsU0FBS0gsWUFBTCxDQUFrQixRQUFsQixFQUE0QkcsR0FBNUI7QUFDQSxTQUFLMUMsSUFBTCxDQUFVNUIsTUFBVixHQUFtQnNFLEdBQW5CO0FBQ0Q7O0FBRUQsTUFBSWpELEtBQUosR0FBYTtBQUNYLFFBQUksS0FBS3dDLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBSixFQUFnQztBQUM5QixhQUFPLEtBQUtBLFlBQUwsQ0FBa0IsT0FBbEIsQ0FBUDtBQUNELEtBRkQsTUFFTyxJQUFJLEtBQUtBLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBSixFQUFpQztBQUN0QyxhQUFPdm9DLE9BQU91Z0IsUUFBUCxDQUFnQixLQUFLZ29CLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBaEIsTUFBaUQsQ0FBeEQ7QUFDRCxLQUZNLE1BRUE7QUFDTCxhQUFPLEtBQVA7QUFDRDtBQUNGOztBQUVELE1BQUl4QyxLQUFKLENBQVd0VixHQUFYLEVBQWdCO0FBQ2QsU0FBS29ZLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJwWSxHQUEzQjtBQUNBLFFBQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ1IsV0FBSzZWLElBQUwsQ0FBVVAsS0FBVixHQUFrQixLQUFsQjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUtPLElBQUwsQ0FBVVAsS0FBVixHQUFrQixJQUFsQjtBQUNEO0FBQ0Y7O0FBRUQsTUFBSTlqQyxLQUFKLEdBQWE7QUFDWCxXQUFPLEtBQUtza0MsSUFBTCxDQUFVdGtDLEtBQWpCO0FBQ0Q7O0FBRUQsTUFBSWduQyxRQUFKLEdBQWdCO0FBQ2QsV0FBTyxLQUFLMUMsSUFBTCxDQUFVMEMsUUFBakI7QUFDRDtBQTFNbUM7QUE0TXRDO0FBQ0FDLGVBQWVDLE1BQWYsQ0FBc0IsY0FBdEIsRUFBc0MvUSxXQUF0QyxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hQQSxNQUFNZ1IsWUFBTixDQUFtQjtBQUNqQi9pQyxjQUFhOFksTUFBYixFQUFxQjtBQUNuQixTQUFLQSxNQUFMLEdBQWM1ZixPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0I0UyxNQUFsQixDQUFkO0FBQ0EsU0FBS3pkLElBQUwsR0FBWSxLQUFLeWQsTUFBTCxDQUFZemQsSUFBeEI7QUFDQSxTQUFLNFAsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLKzNCLFVBQUwsR0FBa0I3b0MsU0FBbEI7QUFDQSxTQUFLOG9DLFFBQUwsR0FBZ0I5b0MsU0FBaEI7QUFDRDs7QUFFRHNCLE9BQU15bkMsS0FBTixFQUFhO0FBQ1gsUUFBSSxLQUFLN25DLElBQUwsS0FBYyxPQUFsQixFQUEyQjtBQUN6QixVQUFJNm5DLE1BQU0xNUIsVUFBVixFQUFzQjtBQUNwQixZQUFJdzVCLGFBQWE7QUFDZnJoQyxtQkFBUyxFQURNO0FBRWZaLGlCQUFPbWlDLE1BQU0zOUIsR0FGRTtBQUdmaUgsZUFBSzAyQixNQUFNMzlCLEdBSEk7QUFJZjQ5QixtQkFBU2hwQztBQUpNLFNBQWpCO0FBTUEsWUFBSSxLQUFLNm9DLFVBQVQsRUFBcUI7QUFDbkIsZUFBS0EsVUFBTCxDQUFnQkcsT0FBaEIsR0FBMEJILFVBQTFCO0FBQ0Q7QUFDRCxhQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGFBQUsvM0IsTUFBTCxDQUFZeFAsSUFBWixDQUFpQixLQUFLdW5DLFVBQXRCO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLQSxVQUFULEVBQXFCO0FBQ25CLGFBQUtBLFVBQUwsQ0FBZ0JyaEMsT0FBaEIsQ0FBd0JsRyxJQUF4QixDQUE2QnluQyxLQUE3Qjs7QUFFQSxZQUFJQSxNQUFNMzlCLEdBQU4sR0FBWSxLQUFLeTlCLFVBQUwsQ0FBZ0JqaUMsS0FBaEMsRUFBdUM7QUFDckMsZUFBS2lpQyxVQUFMLENBQWdCamlDLEtBQWhCLEdBQXdCbWlDLE1BQU0zOUIsR0FBOUI7QUFDRDs7QUFFRCxZQUFJMjlCLE1BQU0zOUIsR0FBTixHQUFZLEtBQUt5OUIsVUFBTCxDQUFnQngyQixHQUFoQyxFQUFxQztBQUNuQyxlQUFLdzJCLFVBQUwsQ0FBZ0J4MkIsR0FBaEIsR0FBc0IwMkIsTUFBTTM5QixHQUE1QjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVEOUssTUFBSzJzQixJQUFMLEVBQVc7QUFDVCxRQUFJLEtBQUsvckIsSUFBTCxLQUFjLE9BQWxCLEVBQTJCO0FBQ3pCLFVBQUksS0FBSzRQLE1BQUwsQ0FBWXpQLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUI7QUFDRDs7QUFFRCxVQUFJNHJCLFNBQVNqdEIsU0FBYixFQUF3QjtBQUN0QixZQUFJOE8sU0FBUyxLQUFLbTZCLFFBQUwsRUFBYjtBQUNBLGVBQU9uNkIsTUFBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRG02QixhQUFZO0FBQ1YsUUFBSSxDQUFDLEtBQUtILFFBQVYsRUFBb0I7QUFDbEIsVUFBSUksTUFBTSxLQUFLcDRCLE1BQUwsQ0FBWSxDQUFaLENBQVY7QUFDQSxVQUFJbzRCLElBQUkxaEMsT0FBSixDQUFZbkcsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQjtBQUNEOztBQUVELFdBQUt5bkMsUUFBTCxHQUFnQjtBQUNkSSxXQURjO0FBRWRqa0MsZUFBTztBQUZPLE9BQWhCO0FBSUEsYUFBT2lrQyxJQUFJMWhDLE9BQUosQ0FBWSxDQUFaLENBQVA7QUFDRCxLQVhELE1BV087QUFDTCxVQUFJMGhDLE1BQU0sS0FBS0osUUFBTCxDQUFjSSxHQUF4QjtBQUNBLFVBQUlwNkIsU0FBU282QixJQUFJMWhDLE9BQUosQ0FBWSxLQUFLc2hDLFFBQUwsQ0FBYzdqQyxLQUFkLEdBQXNCLENBQWxDLENBQWI7QUFDQSxVQUFJNkosTUFBSixFQUFZO0FBQ1YsYUFBS2c2QixRQUFMLENBQWM3akMsS0FBZCxHQUFzQixLQUFLNmpDLFFBQUwsQ0FBYzdqQyxLQUFkLEdBQXNCLENBQTVDO0FBQ0EsZUFBTzZKLE1BQVA7QUFDRCxPQUhELE1BR087QUFDTG82QixjQUFNQSxJQUFJRixPQUFWO0FBQ0EsWUFBSSxDQUFDRSxHQUFELElBQVFBLElBQUkxaEMsT0FBSixDQUFZbkcsTUFBWixHQUFxQixDQUFqQyxFQUFvQztBQUNsQztBQUNEO0FBQ0R5TixpQkFBU282QixJQUFJMWhDLE9BQUosQ0FBWSxDQUFaLENBQVQ7QUFDQSxhQUFLc2hDLFFBQUwsR0FBZ0I7QUFDZEksYUFEYztBQUVkamtDLGlCQUFPO0FBRk8sU0FBaEI7QUFJQSxlQUFPNkosTUFBUDtBQUNEO0FBQ0Y7QUFDRjs7QUFFRHE2QixTQUFRdmlDLEtBQVIsRUFBZXlMLEdBQWYsRUFBb0I7QUFDbEIsUUFBSSxLQUFLdkIsTUFBTCxDQUFZelAsTUFBWixHQUFxQixDQUF6QixFQUE0QjtBQUMxQjtBQUNEOztBQUVELFFBQUlGLElBQUksQ0FBUjtBQUNBLFFBQUkrbkMsTUFBTSxLQUFLcDRCLE1BQUwsQ0FBWSxDQUFaLENBQVY7QUFDQSxXQUFPbzRCLEdBQVAsRUFBWTtBQUNWLFVBQUlBLElBQUk3MkIsR0FBSixHQUFVQSxHQUFWLElBQWlCNjJCLElBQUl0aUMsS0FBSixJQUFhQSxLQUFsQyxFQUF5QztBQUN2QyxhQUFLa0ssTUFBTCxDQUFZOUQsTUFBWixDQUFtQjdMLENBQW5CLEVBQXNCLENBQXRCO0FBQ0ErbkMsY0FBTSxLQUFLcDRCLE1BQUwsQ0FBWTNQLENBQVosQ0FBTjtBQUNELE9BSEQsTUFHTztBQUNMQSxhQUFLLENBQUw7QUFDQStuQyxjQUFNLEtBQUtwNEIsTUFBTCxDQUFZM1AsQ0FBWixDQUFOO0FBQ0Q7QUFDRjtBQUNGO0FBckdnQjs7a0JBd0dKeW5DLFk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEdmOzs7O0FBSUEsTUFBTVEsTUFBTixDQUFhO0FBQ1h2akMsY0FBYW9JLE9BQWIsRUFBc0I7QUFDcEIsU0FBS0EsT0FBTCxHQUFlbFAsT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCa0MsV0FBVyxFQUE3QixFQUFpQztBQUM5Q283QixnQkFBVTtBQURvQyxLQUFqQyxDQUFmOztBQUlBLFNBQUtwSixTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7O0FBRURyNUIsUUFBTSxHQUFHcTVCLFNBQVQsRUFBb0I7QUFDbEIsU0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDRDs7QUFFRHFKLFdBQVU7QUFDUixTQUFLLElBQUlub0MsSUFBSSxDQUFSLEVBQVdhLE1BQU0sS0FBS2krQixTQUFMLENBQWU1K0IsTUFBckMsRUFBNkNGLElBQUlhLEdBQWpELEVBQXNEYixHQUF0RCxFQUEyRDtBQUN6RCxZQUFNeStCLFdBQVcsS0FBS0ssU0FBTCxDQUFlOStCLENBQWYsQ0FBakI7QUFDQXkrQjtBQUNEO0FBQ0Y7O0FBRUQySixjQUFhRixRQUFiLEVBQXVCO0FBQ3JCLFNBQUtwN0IsT0FBTCxDQUFhbzdCLFFBQWIsR0FBd0JBLFFBQXhCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUF2QlU7O0FBMEJiOzs7QUFHQSxNQUFNRyxTQUFOLFNBQXdCSixNQUF4QixDQUErQjtBQUM3QnZqQyxjQUFhZ2dDLEtBQWIsRUFBb0I7QUFDbEIsVUFBTUEsS0FBTjtBQUNBLFNBQUs0RCxJQUFMLEdBQVksSUFBWjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjs7QUFFQSxTQUFLQyxTQUFMLEdBQWlCSixVQUFVSyxXQUFWLEVBQWpCO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVW5tQyxJQUFWLENBQWUsSUFBZixDQUFaO0FBQ0Q7O0FBRURpRCxRQUFPLEdBQUdxNUIsU0FBVixFQUFxQjtBQUNuQixVQUFNcjVCLEtBQU4sQ0FBWSxHQUFHcTVCLFNBQWY7QUFDQSxTQUFLNkosSUFBTDtBQUNEOztBQUVEQSxPQUFNanRCLFNBQU4sRUFBaUI7QUFDZixTQUFLa3RCLFFBQUw7QUFDQSxTQUFLVCxNQUFMO0FBQ0Q7O0FBRURTLGFBQVk7QUFDVixVQUFNLEVBQUVILFNBQUYsS0FBZ0IsSUFBdEI7QUFDQSxTQUFLRixPQUFMLEdBQWVFLFVBQVUsS0FBS0UsSUFBZixDQUFmO0FBQ0Q7O0FBRUR2QyxTQUFRO0FBQ04sUUFBSSxLQUFLbUMsT0FBVCxFQUFrQjtBQUNoQixZQUFNTSxhQUFhUixVQUFVUyxhQUFWLEVBQW5COztBQUVBRCxpQkFBVyxLQUFLTixPQUFoQjtBQUNEO0FBQ0Y7O0FBRUQsU0FBT0csV0FBUCxHQUFzQjtBQUNwQixXQUFPdHJCLE9BQU8yckIscUJBQVAsSUFBZ0MzckIsT0FBTzRyQiwyQkFBOUM7QUFDRDs7QUFFRCxTQUFPRixhQUFQLEdBQXdCO0FBQ3RCLFdBQU8xckIsT0FBTzZyQixvQkFBUCxJQUErQjdyQixPQUFPOHJCLDBCQUE3QztBQUNEOztBQUVELFNBQU9DLFdBQVAsR0FBc0I7QUFDcEIsV0FBT2QsVUFBVUssV0FBVixPQUE0QjdwQyxTQUFuQztBQUNEO0FBNUM0Qjs7QUErQy9COzs7QUFHQSxNQUFNdXFDLGFBQU4sU0FBNEJuQixNQUE1QixDQUFtQztBQUNqQ3ZqQyxjQUFZOFksTUFBWixFQUFvQjtBQUNsQixVQUFNQSxNQUFOO0FBQ0EsU0FBS3FuQixTQUFMLEdBQWlCLElBQWpCO0FBRUQ7O0FBRURwL0IsUUFBTyxHQUFHcTVCLFNBQVYsRUFBcUI7QUFDbkIsVUFBTThKLFFBQU4sQ0FBZSxHQUFHOUosU0FBbEI7QUFDQSxTQUFLK0YsU0FBTCxHQUFpQnpuQixPQUFPZ3JCLFdBQVAsQ0FBbUIsTUFBTTtBQUN4QyxXQUFLRCxNQUFMO0FBQ0QsS0FGZ0IsRUFFZCxLQUFLcjdCLE9BQUwsQ0FBYW83QixRQUFiLElBQXlCLEVBRlgsQ0FBakI7QUFHRDs7QUFFRDlCLFNBQVE7QUFDTixRQUFJLEtBQUt2QixTQUFULEVBQW9CO0FBQ2xCem5CLGFBQU9pc0IsYUFBUCxDQUFxQixLQUFLeEUsU0FBMUI7QUFDRDtBQUNGOztBQWxCZ0M7O0FBc0JuQzs7OztBQUlPLE1BQU15RSxnQ0FBWSxNQUFNO0FBQzdCLE1BQUlqQixVQUFVYyxXQUFWLEVBQUosRUFBNkI7QUFDM0IsV0FBT2QsU0FBUDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9lLGFBQVA7QUFDRDtBQUNGLENBTk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dQOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsTUFBTUcsV0FBTixDQUFrQjtBQUNoQjdrQyxjQUFhOFksTUFBYixFQUFxQjtBQUNuQixTQUFLQSxNQUFMLEdBQWM1ZixPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0I0UyxNQUFsQixDQUFkO0FBQ0EsU0FBS2lvQixNQUFMLEdBQWMsS0FBS2pvQixNQUFMLENBQVlpb0IsTUFBWixHQUFxQixLQUFLam9CLE1BQUwsQ0FBWWlvQixNQUFqQyxHQUEwQzFGLFNBQVNxRixhQUFULENBQXVCLFFBQXZCLENBQXhEO0FBQ0EsU0FBS24vQixNQUFMLEdBQWMsSUFBSXdoQyxzQkFBSixDQUFpQixFQUFDMW5DLE1BQU0sT0FBUCxFQUFqQixDQUFkO0FBQ0EsU0FBS3dpQyxXQUFMLEdBQW1CLEtBQUsva0IsTUFBTCxDQUFZK2tCLFdBQVosSUFBMkIsQ0FBOUM7QUFDQSxTQUFLcUQsU0FBTCxHQUFpQi9tQyxTQUFqQjtBQUNBLFNBQUsycUMsWUFBTCxHQUFvQjNxQyxTQUFwQjtBQUNBLFNBQUtnSyxJQUFMLEdBQVloSyxTQUFaO0FBQ0EsU0FBSzRxQyxXQUFMLEdBQW1CLENBQW5CO0FBQ0EsU0FBSzFDLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBS2xsQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtvaEMsV0FBTCxHQUFtQixDQUFuQjtBQUNBLFNBQUt5RyxVQUFMLEdBQWtCLENBQWxCOztBQUVBLFNBQUtDLGNBQUwsR0FBc0IsS0FBdEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0JqckMsU0FBdEI7QUFDQSxTQUFLa3JDLFFBQUwsR0FBZ0JsckMsU0FBaEI7QUFDQSxTQUFLbXJDLGVBQUwsR0FBdUIsSUFBdkI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0Q7O0FBRURsRyxVQUFTO0FBQ1AsU0FBS2dELE1BQUwsR0FBYyxJQUFkO0FBQ0Q7O0FBRURtRCxtQkFBa0I7QUFDaEIsUUFBSXZjLFFBQVEsSUFBWjtBQUNBLFNBQUt3YyxVQUFMLEdBQWtCLGlDQUFVam1DLG1CQUFBLENBQWdCLDJEQUFoQixDQUFWLENBQWxCO0FBQ0EsU0FBS2ltQyxVQUFMLENBQWdCQyxXQUFoQixDQUE0QjtBQUMxQkMsV0FBSyxNQURxQjtBQUUxQnhoQyxZQUFNLEtBQUtBO0FBRmUsS0FBNUI7QUFJQSxTQUFLc2hDLFVBQUwsQ0FBZ0I5SixnQkFBaEIsQ0FBaUMsU0FBakMsRUFBNENnSyxPQUFPO0FBQ2pELGNBQVFBLElBQUl2bEMsSUFBSixDQUFTdWxDLEdBQWpCO0FBQ0UsYUFBSyxlQUFMO0FBQ0UxYyxnQkFBTWdjLGNBQU4sR0FBdUIsSUFBdkI7QUFDQTtBQUNGLGFBQUssU0FBTDtBQUNFLGVBQUtXLFVBQUwsQ0FBZ0JELElBQUl2bEMsSUFBcEI7QUFDQTtBQU5KO0FBUUQsS0FURDtBQVVEOztBQUVEMmhDLG1CQUFrQjU5QixJQUFsQixFQUF3QjtBQUN0QixTQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxRQUFJLENBQUMsS0FBSzhnQyxjQUFWLEVBQTBCO0FBQ3hCLFdBQUtPLGNBQUw7QUFDQTtBQUNEO0FBQ0QsU0FBS04sV0FBTCxHQUFtQixJQUFuQjtBQUNBLFFBQUk5a0MsT0FBTyxJQUFJRSxVQUFKLENBQWU2RCxLQUFLOEksR0FBTCxDQUFTNU0sVUFBVCxHQUFzQixDQUFyQyxDQUFYO0FBQ0FELFNBQUsxRixHQUFMLENBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQVQ7QUFDQTBGLFNBQUsxRixHQUFMLENBQVN5SixLQUFLOEksR0FBZCxFQUFtQixDQUFuQjtBQUNBLFNBQUt3NEIsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEI7QUFDMUJDLFdBQUssUUFEcUI7QUFFMUJ2bEMsWUFBTUE7QUFGb0IsS0FBNUI7O0FBS0FBLFdBQU8sSUFBSUUsVUFBSixDQUFlNkQsS0FBS2dKLEdBQUwsQ0FBUzlNLFVBQVQsR0FBc0IsQ0FBckMsQ0FBUDtBQUNBRCxTQUFLMUYsR0FBTCxDQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFUO0FBQ0EwRixTQUFLMUYsR0FBTCxDQUFTeUosS0FBS2dKLEdBQWQsRUFBbUIsQ0FBbkI7QUFDQSxTQUFLczRCLFVBQUwsQ0FBZ0JDLFdBQWhCLENBQTRCO0FBQzFCQyxXQUFLLFFBRHFCO0FBRTFCdmxDLFlBQU1BO0FBRm9CLEtBQTVCOztBQUtBLFFBQUksQ0FBQyxLQUFLeWxDLFNBQVYsRUFBcUI7QUFDbkIsVUFBSS9zQixTQUFTNWYsT0FBT2dOLE1BQVAsQ0FBYyxFQUFDL0IsSUFBRCxFQUFPNDhCLFFBQVEsS0FBS0EsTUFBcEIsRUFBZCxFQUEyQyxLQUFLam9CLE1BQWhELENBQWI7QUFDQSxXQUFLK3NCLFNBQUwsR0FBaUIsSUFBSUMsbUJBQUosQ0FBY2h0QixNQUFkLENBQWpCO0FBQ0Q7QUFDRCxTQUFLaXNCLFdBQUwsR0FBbUIsQ0FBbkI7QUFDRDs7QUFFRG5ELGNBQWExL0IsVUFBYixFQUF5QjtBQUN2QixRQUFJLENBQUMsS0FBSytpQyxjQUFWLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRUQsUUFBSSxDQUFDLEtBQUtDLFdBQVYsRUFBdUI7QUFDckIsV0FBS25ELGdCQUFMLENBQXNCLEtBQUs1OUIsSUFBM0I7QUFDRDtBQUNELFFBQUksRUFBRXhDLE9BQUYsS0FBY08sVUFBbEI7QUFDQSxRQUFJK0csU0FBU3RILFFBQVF2RCxLQUFSLEVBQWI7O0FBRUEsV0FBTzZLLE1BQVAsRUFBZTtBQUNiLFVBQUksQ0FBQyxLQUFLbzhCLFFBQVYsRUFBb0I7QUFDbEIsYUFBS0EsUUFBTCxHQUFnQnA4QixPQUFPMUQsR0FBdkI7QUFDRDtBQUNELFdBQUtoRSxNQUFMLENBQVk5RixJQUFaLENBQWlCd04sTUFBakI7QUFDQUEsZUFBU3RILFFBQVF2RCxLQUFSLEVBQVQ7QUFDRDs7QUFFRCxTQUFLMm5DLFFBQUw7QUFDRDs7QUFFREEsYUFBWTtBQUNWLFFBQUksQ0FBQyxLQUFLWCxjQUFOLElBQXdCLEtBQUtBLGNBQUwsR0FBc0IsS0FBS0MsUUFBM0IsR0FBc0MsS0FBSzlHLFdBQUwsR0FBbUIsS0FBS1YsV0FBTCxHQUFtQixJQUF4RyxFQUE4RztBQUM1RyxVQUFJNTBCLFNBQVMsS0FBSzFILE1BQUwsQ0FBWTlHLEdBQVosRUFBYjtBQUNBLFVBQUl3TyxNQUFKLEVBQVk7QUFDVixhQUFLbThCLGNBQUwsR0FBc0JuOEIsT0FBTzFELEdBQTdCO0FBQ0EsYUFBS3lnQyxXQUFMLENBQWlCLzhCLE1BQWpCO0FBQ0Q7O0FBRUQsYUFBT0EsVUFBVSxLQUFLbThCLGNBQUwsR0FBc0IsS0FBS0MsUUFBM0IsR0FBc0MsS0FBSzlHLFdBQUwsR0FBbUIsS0FBS1YsV0FBTCxHQUFtQixJQUE3RixFQUFtRztBQUNqRzUwQixpQkFBUyxLQUFLMUgsTUFBTCxDQUFZOUcsR0FBWixFQUFUO0FBQ0EsWUFBSXdPLE1BQUosRUFBWTtBQUNWLGVBQUsrOEIsV0FBTCxDQUFpQi84QixNQUFqQjtBQUNBLGVBQUttOEIsY0FBTCxHQUFzQm44QixPQUFPMUQsR0FBN0I7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRHlnQyxjQUFhLzhCLE1BQWIsRUFBcUI7QUFDbkIsUUFBSW9ELE9BQU9sSyxrQkFBUWlLLFdBQVIsQ0FBb0IsSUFBSW9TLGdCQUFKLENBQVd2VixPQUFPN0ksSUFBUCxDQUFZNkssTUFBdkIsQ0FBcEIsQ0FBWDs7QUFFQSxRQUFJelAsU0FBUyxDQUFiO0FBQ0EsU0FBSyxJQUFJRixJQUFJLENBQWIsRUFBZ0JBLElBQUkrUSxLQUFLN1EsTUFBekIsRUFBaUNGLEdBQWpDLEVBQXNDO0FBQ3BDLFVBQUl5a0IsTUFBTTFULEtBQUsvUSxDQUFMLENBQVY7QUFDQUUsZ0JBQVV1a0IsSUFBSW5ULElBQUosQ0FBU3ZNLFVBQVQsR0FBc0IsQ0FBaEM7QUFDRDtBQUNELFFBQUlGLFNBQVMsQ0FBYjtBQUNBLFFBQUlDLE9BQU8sSUFBSUUsVUFBSixDQUFlOUUsTUFBZixDQUFYO0FBQ0EsU0FBSyxJQUFJRixJQUFJLENBQWIsRUFBZ0JBLElBQUkrUSxLQUFLN1EsTUFBekIsRUFBaUNGLEdBQWpDLEVBQXNDO0FBQ3BDLFVBQUl5a0IsTUFBTTFULEtBQUsvUSxDQUFMLENBQVY7QUFDQThFLFdBQUsxRixHQUFMLENBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQVQsRUFBdUJ5RixNQUF2QjtBQUNBQSxnQkFBVSxDQUFWO0FBQ0FDLFdBQUsxRixHQUFMLENBQVMsSUFBSTRGLFVBQUosQ0FBZXlmLElBQUluVCxJQUFuQixDQUFULEVBQW1Dek0sTUFBbkM7QUFDQUEsZ0JBQVU0ZixJQUFJblQsSUFBSixDQUFTdk0sVUFBbkI7QUFDRDtBQUNELFNBQUtvbEMsVUFBTCxDQUFnQkMsV0FBaEIsQ0FBNEI7QUFDMUJDLFdBQUssUUFEcUI7QUFFMUJ2bEMsWUFBTUEsSUFGb0I7QUFHMUJpWCxZQUFNO0FBQ0o5UixhQUFLMEQsT0FBTzFELEdBRFI7QUFFSlksYUFBSzhDLE9BQU85QyxHQUFQLEdBQWE4QyxPQUFPOUMsR0FBcEIsR0FBMEI4QyxPQUFPMUQsR0FBUCxHQUFhMEQsT0FBTzdDLEdBRi9DO0FBR0ozSCxhQUFLd0ssT0FBT087QUFIUjtBQUhvQixLQUE1QjtBQVNEOztBQUVEbzhCLGFBQVl4bEMsSUFBWixFQUFrQjtBQUNoQixRQUFJLEVBQUNtRixHQUFELEtBQVFuRixLQUFLaVgsSUFBakI7QUFDQSxTQUFLOHRCLGNBQUwsQ0FBb0I1L0IsR0FBcEIsSUFBMkJuRixJQUEzQjtBQUNEOztBQUVEZy9CLFNBQVE7QUFDTixTQUFLaUQsTUFBTCxHQUFjLEtBQWQ7QUFDQSxXQUFPLElBQUk0RCxPQUFKLENBQWE5eUIsT0FBRCxJQUFhO0FBQzlCLFdBQUtveUIsVUFBTCxHQUFrQnB5QixPQUFsQjtBQUNELEtBRk0sQ0FBUDtBQUdEOztBQUVEb3VCLFdBQVVoRCxXQUFWLEVBQXVCO0FBQ3JCLFFBQUksS0FBSzhELE1BQVQsRUFBaUI7QUFDZjtBQUNEO0FBQ0QsUUFBSSxLQUFLbCtCLElBQVQsRUFBZTtBQUNiLFVBQUksS0FBS0EsSUFBTCxDQUFVZSxTQUFWLElBQXVCLEtBQUtmLElBQUwsQ0FBVWUsU0FBVixDQUFvQkMsS0FBM0MsSUFBb0QsS0FBS2hCLElBQUwsQ0FBVWUsU0FBVixDQUFvQm1LLEdBQTVFLEVBQWlGLENBQ2hGO0FBQ0QsVUFBSTYyQixhQUFhaHRDLE9BQU9zRixJQUFQLENBQVksS0FBSzJtQyxjQUFqQixDQUFqQjtBQUNBLFVBQUllLFdBQVcxcUMsTUFBWCxHQUFvQixDQUF4QixFQUEyQjtBQUN6QixhQUFLK2lDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsWUFBSTRILFlBQVksQ0FBQyxDQUFqQjtBQUNBLGFBQUssSUFBSTdxQyxJQUFJLENBQWIsRUFBZ0JBLElBQUk0cUMsV0FBVzFxQyxNQUFmLElBQXlCN0IsT0FBT3VnQixRQUFQLENBQWdCZ3NCLFdBQVc1cUMsQ0FBWCxDQUFoQixJQUFpQyxLQUFLK3BDLFFBQXRDLElBQWtELEtBQUs5RyxXQUFoRyxFQUE2R2pqQyxHQUE3RyxFQUFrSDtBQUNoSDZxQyxzQkFBWXhzQyxPQUFPdWdCLFFBQVAsQ0FBZ0Jnc0IsV0FBVzVxQyxJQUFJLENBQWYsQ0FBaEIsQ0FBWjtBQUNEOztBQUVELFlBQUk0bkMsUUFBUSxLQUFLaUMsY0FBTCxDQUFvQmdCLFNBQXBCLENBQVo7QUFDQSxZQUFJakQsS0FBSixFQUFXO0FBQ1QsY0FBSSxLQUFLaEMsU0FBTCxJQUFrQixLQUFLNkQsV0FBTCxHQUFtQixDQUF6QyxFQUE0QztBQUMxQyxpQkFBSzdELFNBQUw7QUFDQSxpQkFBSzZELFdBQUwsR0FBbUIsQ0FBbkI7QUFDRDtBQUNELGVBQUtjLFNBQUwsQ0FBZU8sTUFBZixDQUFzQmxELE1BQU1qNEIsTUFBNUIsRUFBb0NpNEIsTUFBTXR5QixLQUExQyxFQUFpRHN5QixNQUFNcnlCLE1BQXZELEVBQStEcXlCLE1BQU1tRCxTQUFyRSxFQUFnRm5ELE1BQU1vRCxVQUF0Rjs7QUFFQSxjQUFJLEtBQUtmLFVBQVQsRUFBcUI7QUFDbkIsaUJBQUtBLFVBQUw7QUFDRDtBQUNGO0FBQ0QsYUFBSyxJQUFJanFDLElBQUksQ0FBYixFQUFnQkEsSUFBSTRxQyxXQUFXMXFDLE1BQS9CLEVBQXVDRixHQUF2QyxFQUE0QztBQUMxQyxjQUFJM0IsT0FBT3VnQixRQUFQLENBQWdCZ3NCLFdBQVc1cUMsQ0FBWCxDQUFoQixJQUFpQzZxQyxTQUFyQyxFQUFnRDtBQUM5QyxtQkFBTyxLQUFLaEIsY0FBTCxDQUFvQmUsV0FBVzVxQyxDQUFYLENBQXBCLENBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNELFNBQUtncUMsZUFBTCxHQUF1Qmx4QixLQUFLa3RCLEdBQUwsRUFBdkI7QUFDRDs7QUFFREUsZ0JBQWU7QUFDYixRQUFJLEtBQUtqRCxXQUFMLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3hCLFdBQUtoOUIsTUFBTCxDQUFZK2hDLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsS0FBSy9FLFdBQUwsR0FBbUIsQ0FBekM7QUFDRDtBQUNGOztBQUVEMTlCLFlBQVc7QUFDVCxTQUFLNGtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLMUUsTUFBTCxHQUFjLElBQWQ7QUFDQSxTQUFLeC9CLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBSzBqQyxjQUFMLEdBQXNCLEtBQXRCO0FBQ0Q7O0FBRUQsTUFBSXJDLFFBQUosR0FBZ0I7QUFDZCxVQUFNMkQsU0FBUyxFQUFmO0FBQ0EsUUFBSUMsZUFBZTtBQUNqQnpsQyxhQUFPLElBRFU7QUFFakJ5TCxXQUFLO0FBRlksS0FBbkI7QUFJQSxTQUFLLElBQUlsUixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBS2lHLE1BQUwsQ0FBWTBKLE1BQVosQ0FBbUJ6UCxNQUF2QyxFQUErQ0YsR0FBL0MsRUFBb0Q7QUFDbEQsWUFBTSxFQUFFeUYsS0FBRixFQUFTeUwsR0FBVCxLQUFpQixLQUFLakwsTUFBTCxDQUFZMEosTUFBWixDQUFtQjNQLENBQW5CLENBQXZCO0FBQ0EsVUFBSSxDQUFDa3JDLGFBQWF6bEMsS0FBbEIsRUFBeUI7QUFDdkJ5bEMscUJBQWF6bEMsS0FBYixHQUFxQkEsS0FBckI7QUFDRDtBQUNELFVBQUksQ0FBQ3lsQyxhQUFhaDZCLEdBQWxCLEVBQXVCO0FBQ3JCZzZCLHFCQUFhaDZCLEdBQWIsR0FBbUJBLEdBQW5CO0FBQ0Q7O0FBRUQsVUFBSXpMLFFBQVF5bEMsYUFBYWg2QixHQUFyQixHQUEyQixJQUEvQixFQUFxQztBQUNuQ2c2QixxQkFBYXpsQyxLQUFiLEdBQXFCeWxDLGFBQWF6bEMsS0FBYixHQUFxQixJQUExQztBQUNBeWxDLHFCQUFhaDZCLEdBQWIsR0FBbUJnNkIsYUFBYWg2QixHQUFiLEdBQW1CLElBQXRDO0FBQ0FnNkIsdUJBQWU7QUFDYnpsQyxlQURhO0FBRWJ5TDtBQUZhLFNBQWY7QUFJRCxPQVBELE1BT087QUFDTGc2QixxQkFBYWg2QixHQUFiLEdBQW1CQSxHQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsUUFBSWc2QixhQUFhemxDLEtBQWIsS0FBdUIsSUFBdkIsSUFBK0J5bEMsYUFBYWg2QixHQUFiLEtBQXFCLElBQXhELEVBQThEO0FBQzVEZzZCLG1CQUFhemxDLEtBQWIsR0FBcUJ5bEMsYUFBYXpsQyxLQUFiLEdBQXFCLElBQTFDO0FBQ0F5bEMsbUJBQWFoNkIsR0FBYixHQUFtQmc2QixhQUFhaDZCLEdBQWIsR0FBbUIsSUFBdEM7QUFDQSs1QixhQUFPOXFDLElBQVAsQ0FBWStxQyxZQUFaO0FBQ0Q7O0FBRUQsV0FBTyxJQUFJQyxvQkFBSixDQUFlRixNQUFmLENBQVA7QUFDRDtBQWpQZTtrQkFtUEgxQixXOzs7Ozs7Ozs7Ozs7OztBQzFQZixNQUFNNkIsMkJBQTJCLE9BQU8sSUFBeEM7QUFDQSxJQUFJQyxVQUFVLFVBQVVoTixJQUFWLEVBQWdCO0FBQzVCLE9BQUtpTixNQUFMLEdBQWMsS0FBZDtBQUNBLE9BQUtqTixJQUFMLEdBQVlBLElBQVo7QUFDQSxPQUFLeDFCLElBQUwsR0FBWSxLQUFLdzFCLElBQUwsQ0FBVXgxQixJQUF0QjtBQUNBLE9BQUswaUMsUUFBTCxHQUFnQixFQUFoQjtBQUNBbE4sT0FBS21OLDRCQUFMLEdBQW9DLEtBQUtDLHdCQUFMLENBQThCanBDLElBQTlCLENBQW1DLElBQW5DLENBQXBDO0FBQ0E2N0IsT0FBS3FOLDRCQUFMLEdBQW9DLEtBQUtDLHdCQUFMLENBQThCbnBDLElBQTlCLENBQW1DLElBQW5DLENBQXBDO0FBQ0QsQ0FQRDs7QUFTQTZvQyxRQUFRN3RDLFNBQVIsQ0FBa0JvdUMsU0FBbEIsR0FBOEIsVUFBVUMsR0FBVixFQUFlM3JDLE1BQWYsRUFBdUI7QUFDbkQsU0FBTyxLQUFLbStCLElBQUwsQ0FBVXlOLE1BQVYsQ0FBaUJyOEIsUUFBakIsQ0FBMEJvOEIsR0FBMUIsRUFBK0JBLE1BQU0zckMsTUFBckMsQ0FBUDtBQUNELENBRkQ7O0FBSUFtckMsUUFBUTd0QyxTQUFSLENBQWtCaUIsSUFBbEIsR0FBeUIsWUFBWTtBQUNuQ3N0QyxTQUFPQyxhQUFQO0FBQ0EsT0FBS0MsWUFBTCxHQUFvQixLQUFLTCxTQUFMLENBQWVHLE9BQU9HLHFCQUFQLENBQTZCZCx3QkFBN0IsQ0FBZixFQUF1RUEsd0JBQXZFLENBQXBCO0FBQ0QsQ0FIRDs7QUFLQUMsUUFBUTd0QyxTQUFSLENBQWtCbXVDLHdCQUFsQixHQUE2QyxVQUFVOW1DLE1BQVYsRUFBa0J5USxLQUFsQixFQUF5QkMsTUFBekIsRUFBaUN3MUIsU0FBakMsRUFBNENDLFVBQTVDLEVBQXdEbUIsTUFBeEQsRUFBZ0U7QUFDM0csTUFBSXB3QixPQUFPbmUsT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLEtBQUsyZ0MsUUFBTCxDQUFjWSxNQUFkLENBQWxCLENBQVg7QUFDQSxNQUFJQyxZQUFZNzJCLE1BQWhCO0FBQ0EsTUFBSTgyQixhQUFhOTJCLFNBQVMsQ0FBMUI7QUFDQSxNQUFJLEtBQUsxTSxJQUFMLENBQVUyTixZQUFWLEtBQTJCLEdBQTNCLElBQWtDLEtBQUszTixJQUFMLENBQVUyTixZQUFWLEtBQTJCLEdBQWpFLEVBQXNFO0FBQ3BFNjFCLGlCQUFhOTJCLE1BQWI7QUFDRDtBQUNELE1BQUl6USxPQUFPLEtBQUs4bUMsU0FBTCxDQUFlL21DLE1BQWYsRUFBd0JrbUMsWUFBWXFCLFNBQWIsR0FBMEIsS0FBS3BCLGFBQWFxQixVQUFsQixDQUFqRCxDQUFYO0FBQ0EsT0FBS2QsUUFBTCxDQUFjWSxNQUFkLElBQXdCLElBQXhCO0FBQ0EsTUFBSUcsV0FBVyxJQUFJdG5DLFVBQUosQ0FBZUYsS0FBSzVFLE1BQXBCLENBQWY7QUFDQW9zQyxXQUFTbHRDLEdBQVQsQ0FBYTBGLElBQWI7QUFDQSxNQUFJNkssU0FBUzI4QixTQUFTMzhCLE1BQXRCO0FBQ0EsT0FBSzB1QixJQUFMLENBQVUrTCxXQUFWLENBQXNCO0FBQ3BCQyxTQUFLLFNBRGU7QUFFcEIvMEIsU0FGb0I7QUFHcEJDLFVBSG9CO0FBSXBCdzFCLGFBSm9CO0FBS3BCQyxjQUxvQjtBQU1wQmp2QixRQU5vQjtBQU9wQnBNO0FBUG9CLEdBQXRCLEVBUUcsQ0FBQ0EsTUFBRCxDQVJIO0FBU0QsQ0FyQkQ7O0FBdUJBMDdCLFFBQVE3dEMsU0FBUixDQUFrQml1Qyx3QkFBbEIsR0FBNkMsWUFBWTtBQUN2RCxPQUFLSCxNQUFMLEdBQWMsSUFBZDtBQUNBLE9BQUtqTixJQUFMLENBQVUrTCxXQUFWLENBQXNCLEVBQUNDLEtBQUssZUFBTixFQUF0QjtBQUNELENBSEQ7O0FBS0FnQixRQUFRN3RDLFNBQVIsQ0FBa0JpYixNQUFsQixHQUEyQixVQUFVM1QsSUFBVixFQUFnQmlYLElBQWhCLEVBQXNCO0FBQy9DLE1BQUkrUCxPQUFPbE4sU0FBUyxJQUFJOUYsSUFBSixHQUFXeXpCLE9BQVgsRUFBVCxDQUFYO0FBQ0EsTUFBSUosU0FBU3JnQixPQUFRcmhCLEtBQUtDLEtBQUwsQ0FBV29oQixPQUFPLElBQWxCLElBQTBCLElBQS9DO0FBQ0EsT0FBS3lmLFFBQUwsQ0FBY1ksTUFBZCxJQUF3QnB3QixJQUF4QjtBQUNBLE9BQUtrd0IsWUFBTCxDQUFrQjdzQyxHQUFsQixDQUFzQjBGLElBQXRCO0FBQ0FpbkMsU0FBT1MsbUJBQVAsQ0FBMkIxbkMsS0FBSzVFLE1BQWhDLEVBQXdDaXNDLE1BQXhDO0FBQ0QsQ0FORDs7QUFRQSxJQUFJTSxPQUFKOztBQUVBLFNBQVNDLFNBQVQsR0FBc0I7QUFDcEJELFlBQVUsSUFBSXBCLE9BQUosQ0FBWSxJQUFaLENBQVY7QUFDQW9CLFVBQVFodUMsSUFBUjtBQUNEOztBQUVELFNBQVNBLElBQVQsQ0FBZW9LLElBQWYsRUFBcUI7QUFDbkJ3MUIsT0FBS3NPLGFBQUwsQ0FBbUIseUVBQW5CO0FBQ0FDLGVBQWFGLFVBQVVscUMsSUFBVixDQUFlNjdCLElBQWYsQ0FBYjtBQUNEOztBQUVEMy9CLE9BQU9DLE9BQVAsR0FBaUIsVUFBVTAvQixJQUFWLEVBQWdCO0FBQy9CQSxPQUFLZ0MsZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMsVUFBVXhSLENBQVYsRUFBYTtBQUM1QyxRQUFJL3BCLE9BQU8rcEIsRUFBRS9wQixJQUFiO0FBQ0EsUUFBSSxDQUFDQSxLQUFLdWxDLEdBQVYsRUFBZTtBQUNiaE0sV0FBSytMLFdBQUwsQ0FBaUI7QUFDZkMsYUFBSztBQURVLE9BQWpCO0FBR0QsS0FKRCxNQUlPO0FBQ0wsY0FBUXZsQyxLQUFLdWxDLEdBQWI7QUFDRSxhQUFLLE1BQUw7QUFDRW5zQyxrQkFBUTJ1QyxHQUFSLENBQVkvbkMsSUFBWjtBQUNBdTVCLGVBQUt4MUIsSUFBTCxHQUFZL0QsS0FBSytELElBQWpCO0FBQ0FwSztBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0VndUMsa0JBQVFoMEIsTUFBUixDQUFlM1QsS0FBS0EsSUFBcEIsRUFBMEJBLEtBQUtpWCxJQUEvQjtBQUNBO0FBQ0Y7QUFDRTtBQVZKO0FBWUQ7QUFDRixHQXBCRCxFQW9CRyxLQXBCSDtBQXFCRCxDQXRCRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQSxNQUFNeXVCLFNBQU4sQ0FBZ0I7QUFDZDlsQyxjQUFhNmQsT0FBYixFQUFzQjtBQUNwQixTQUFLQSxPQUFMLEdBQWUza0IsT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCMlgsT0FBbEIsQ0FBZjtBQUNBLFNBQUtrakIsTUFBTCxHQUFjLEtBQUtsakIsT0FBTCxDQUFha2pCLE1BQTNCO0FBQ0EsU0FBSzU4QixJQUFMLEdBQVlqTCxPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBSzJYLE9BQUwsQ0FBYTFaLElBQS9CLENBQVo7QUFDQSxTQUFLaU4sTUFBTCxHQUFjLEtBQUtqTixJQUFMLENBQVUyTixZQUF4QjtBQUNBLFNBQUtqQixNQUFMLEdBQWMsS0FBSzFNLElBQUwsQ0FBVXVOLGFBQXhCO0FBQ0EsU0FBS2QsS0FBTCxHQUFhLEtBQUt6TSxJQUFMLENBQVVzTixZQUF2QjtBQUNBLFNBQUtzdkIsTUFBTCxDQUFZbndCLEtBQVosR0FBb0IsSUFBcEI7QUFDQSxTQUFLbXdCLE1BQUwsQ0FBWWx3QixNQUFaLEdBQXFCLEdBQXJCO0FBQ0EsU0FBS2t3QixNQUFMLENBQVlxSCxLQUFaLENBQWtCeDNCLEtBQWxCLEdBQTBCLE1BQTFCO0FBQ0EsU0FBS213QixNQUFMLENBQVlxSCxLQUFaLENBQWtCdjNCLE1BQWxCLEdBQTJCLE1BQTNCO0FBQ0EsU0FBS3czQixjQUFMO0FBQ0EsUUFBSSxLQUFLQyxTQUFULEVBQW9CO0FBQ2xCLFdBQUtDLFlBQUw7QUFDQSxXQUFLQyxZQUFMO0FBQ0EsV0FBS0MsYUFBTDtBQUNEO0FBQ0Y7O0FBRURKLG1CQUFrQjtBQUNoQixRQUFJdEgsU0FBUyxLQUFLQSxNQUFsQjtBQUNBLFFBQUkySCxLQUFLLElBQVQ7O0FBRUEsUUFBSUMsb0JBQW9CLENBQUMsT0FBRCxFQUFVLG9CQUFWLEVBQWdDLFdBQWhDLEVBQTZDLFdBQTdDLENBQXhCO0FBQ0EsUUFBSUMsWUFBWSxDQUFoQjs7QUFFQSxXQUFPLENBQUNGLEVBQUQsSUFBT0UsWUFBWUQsa0JBQWtCbnRDLE1BQTVDLEVBQW9EO0FBQ2xELFVBQUlxdEMsY0FBY0Ysa0JBQWtCQyxTQUFsQixDQUFsQjs7QUFFQSxVQUFJO0FBQ0YsWUFBSSxLQUFLRSxjQUFULEVBQXlCO0FBQ3ZCSixlQUFLM0gsT0FBT2dJLFVBQVAsQ0FBa0JGLFdBQWxCLEVBQStCLEtBQUtDLGNBQXBDLENBQUw7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBSzNILE9BQU9nSSxVQUFQLENBQWtCRixXQUFsQixDQUFMO0FBQ0Q7QUFDRixPQU5ELENBTUUsT0FBTzFlLENBQVAsRUFBVTtBQUNWdWUsYUFBSyxJQUFMO0FBQ0Q7O0FBRUQsVUFBSSxDQUFDQSxFQUFELElBQU8sT0FBT0EsR0FBR00sWUFBVixLQUEyQixVQUF0QyxFQUFrRDtBQUNoRE4sYUFBSyxJQUFMO0FBQ0Q7O0FBRUQsUUFBRUUsU0FBRjtBQUNEOztBQUVELFNBQUtOLFNBQUwsR0FBaUJJLEVBQWpCO0FBQ0Q7O0FBRURILGlCQUFnQjtBQUNkLFFBQUlHLEtBQUssS0FBS0osU0FBZDs7QUFFQTtBQUNBLFFBQUlXLGtCQUFKO0FBQ0EsUUFBSUMsb0JBQUo7QUFDQUQseUJBQXFCLENBQ25CLDJCQURtQixFQUVuQiw0QkFGbUIsRUFHbkIsNkJBSG1CLEVBSW5CLDZCQUptQixFQUtuQiw0QkFMbUIsRUFNbkIsNkJBTm1CLEVBT25CLDZCQVBtQixFQVNuQixhQVRtQixFQVVuQixHQVZtQixFQVduQiw0QkFYbUIsRUFZbkIsaUNBWm1CLEVBYW5CLG1DQWJtQixFQWNuQixtQ0FkbUIsRUFlbkIsR0FmbUIsRUFnQm5CclMsSUFoQm1CLENBZ0JkLElBaEJjLENBQXJCOztBQWtCQXNTLDJCQUF1QixDQUNyQix3QkFEcUIsRUFFckIsa0NBRnFCLEVBR3JCLG1DQUhxQixFQUlyQixtQ0FKcUIsRUFLckIsNkJBTHFCLEVBTXJCLDZCQU5xQixFQU9yQiw2QkFQcUIsRUFRckIsdUJBUnFCLEVBVXJCLG1CQVZxQixFQVdyQix5REFYcUIsRUFZckIsMERBWnFCLEVBYXJCLDBEQWJxQixFQWNyQiw4Q0FkcUIsRUFlckIsR0FmcUIsRUFnQnJCdFMsSUFoQnFCLENBZ0JoQixJQWhCZ0IsQ0FBdkI7O0FBa0JBLFFBQUl1UyxVQUFVLENBQ1osT0FEWSxFQUNILE9BREcsRUFDTSxPQUROLEVBQ2UsQ0FBQyxPQURoQixFQUVaLE9BRlksRUFFSCxDQUFDLE9BRkUsRUFFTyxDQUFDLE9BRlIsRUFFaUIsT0FGakIsRUFHWixPQUhZLEVBR0gsT0FIRyxFQUdNLE9BSE4sRUFHZSxDQUFDLE9BSGhCLEVBSVosQ0FKWSxFQUlULENBSlMsRUFJTixDQUpNLEVBSUgsQ0FKRyxDQUFkO0FBTUEsUUFBSUMsZUFBZVYsR0FBR1csWUFBSCxDQUFnQlgsR0FBR1ksYUFBbkIsQ0FBbkI7QUFDQVosT0FBR2EsWUFBSCxDQUFnQkgsWUFBaEIsRUFBOEJILGtCQUE5QjtBQUNBUCxPQUFHYyxhQUFILENBQWlCSixZQUFqQjtBQUNBLFFBQUksQ0FBQ1YsR0FBR2Usa0JBQUgsQ0FBc0JMLFlBQXRCLEVBQW9DVixHQUFHZ0IsY0FBdkMsQ0FBTCxFQUE2RDtBQUMzRGx3QyxjQUFRMnVDLEdBQVIsQ0FBWSxzQ0FBc0NPLEdBQUdpQixnQkFBSCxDQUFvQlAsWUFBcEIsQ0FBbEQ7QUFDRDs7QUFFRCxRQUFJUSxpQkFBaUJsQixHQUFHVyxZQUFILENBQWdCWCxHQUFHbUIsZUFBbkIsQ0FBckI7QUFDQW5CLE9BQUdhLFlBQUgsQ0FBZ0JLLGNBQWhCLEVBQWdDVixvQkFBaEM7QUFDQVIsT0FBR2MsYUFBSCxDQUFpQkksY0FBakI7QUFDQSxRQUFJLENBQUNsQixHQUFHZSxrQkFBSCxDQUFzQkcsY0FBdEIsRUFBc0NsQixHQUFHZ0IsY0FBekMsQ0FBTCxFQUErRDtBQUM3RGx3QyxjQUFRMnVDLEdBQVIsQ0FBWSx3Q0FBd0NPLEdBQUdpQixnQkFBSCxDQUFvQkMsY0FBcEIsQ0FBcEQ7QUFDRDs7QUFFRCxRQUFJbm5CLFVBQVVpbUIsR0FBR29CLGFBQUgsRUFBZDtBQUNBcEIsT0FBR3FCLFlBQUgsQ0FBZ0J0bkIsT0FBaEIsRUFBeUIybUIsWUFBekI7QUFDQVYsT0FBR3FCLFlBQUgsQ0FBZ0J0bkIsT0FBaEIsRUFBeUJtbkIsY0FBekI7QUFDQWxCLE9BQUdzQixXQUFILENBQWV2bkIsT0FBZjtBQUNBLFFBQUksQ0FBQ2ltQixHQUFHdUIsbUJBQUgsQ0FBdUJ4bkIsT0FBdkIsRUFBZ0NpbUIsR0FBR3dCLFdBQW5DLENBQUwsRUFBc0Q7QUFDcEQxd0MsY0FBUTJ1QyxHQUFSLENBQVksZ0NBQWdDTyxHQUFHeUIsaUJBQUgsQ0FBcUIxbkIsT0FBckIsQ0FBNUM7QUFDRDs7QUFFRGltQixPQUFHMEIsVUFBSCxDQUFjM25CLE9BQWQ7O0FBRUEsUUFBSTRuQixhQUFhM0IsR0FBRzRCLGtCQUFILENBQXNCN25CLE9BQXRCLEVBQStCLFNBQS9CLENBQWpCO0FBQ0FpbUIsT0FBRzZCLGdCQUFILENBQW9CRixVQUFwQixFQUFnQyxLQUFoQyxFQUF1Q2xCLE9BQXZDOztBQUVBLFNBQUtxQixhQUFMLEdBQXFCL25CLE9BQXJCO0FBQ0Q7O0FBRUQrbEIsaUJBQWdCO0FBQ2QsUUFBSUUsS0FBSyxLQUFLSixTQUFkO0FBQ0EsUUFBSTdsQixVQUFVLEtBQUsrbkIsYUFBbkI7O0FBRUEsUUFBSUMsa0JBQWtCL0IsR0FBR2dDLFlBQUgsRUFBdEI7QUFDQWhDLE9BQUdpQyxVQUFILENBQWNqQyxHQUFHa0MsWUFBakIsRUFBK0JILGVBQS9CO0FBQ0EvQixPQUFHbUMsVUFBSCxDQUFjbkMsR0FBR2tDLFlBQWpCLEVBQStCLElBQUlFLFlBQUosQ0FBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsRUFBcUIsQ0FBQyxDQUF0QixFQUF5QixDQUFDLENBQTFCLENBQWpCLENBQS9CLEVBQStFcEMsR0FBR3FDLFdBQWxGOztBQUVBLFFBQUlDLGVBQWV0QyxHQUFHdUMsaUJBQUgsQ0FBcUJ4b0IsT0FBckIsRUFBOEIsV0FBOUIsQ0FBbkI7QUFDQWltQixPQUFHd0MsdUJBQUgsQ0FBMkJGLFlBQTNCO0FBQ0F0QyxPQUFHeUMsbUJBQUgsQ0FBdUJILFlBQXZCLEVBQXFDLENBQXJDLEVBQXdDdEMsR0FBRzBDLEtBQTNDLEVBQWtELEtBQWxELEVBQXlELENBQXpELEVBQTRELENBQTVEOztBQUVBLFFBQUlDLG1CQUFtQjNDLEdBQUdnQyxZQUFILEVBQXZCO0FBQ0FoQyxPQUFHaUMsVUFBSCxDQUFjakMsR0FBR2tDLFlBQWpCLEVBQStCUyxnQkFBL0I7QUFDQTNDLE9BQUdtQyxVQUFILENBQWNuQyxHQUFHa0MsWUFBakIsRUFBK0IsSUFBSUUsWUFBSixDQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWpCLENBQS9CLEVBQTJFcEMsR0FBR3FDLFdBQTlFOztBQUVBLFFBQUlPLGdCQUFnQjVDLEdBQUd1QyxpQkFBSCxDQUFxQnhvQixPQUFyQixFQUE4QixZQUE5QixDQUFwQjtBQUNBaW1CLE9BQUd3Qyx1QkFBSCxDQUEyQkksYUFBM0I7QUFDQTVDLE9BQUd5QyxtQkFBSCxDQUF1QkcsYUFBdkIsRUFBc0MsQ0FBdEMsRUFBeUM1QyxHQUFHMEMsS0FBNUMsRUFBbUQsS0FBbkQsRUFBMEQsQ0FBMUQsRUFBNkQsQ0FBN0Q7O0FBRUEsU0FBS0MsZ0JBQUwsR0FBd0JBLGdCQUF4Qjs7QUFFQSxRQUFJRSxvQkFBb0I3QyxHQUFHZ0MsWUFBSCxFQUF4QjtBQUNBaEMsT0FBR2lDLFVBQUgsQ0FBY2pDLEdBQUdrQyxZQUFqQixFQUErQlcsaUJBQS9CO0FBQ0E3QyxPQUFHbUMsVUFBSCxDQUFjbkMsR0FBR2tDLFlBQWpCLEVBQStCLElBQUlFLFlBQUosQ0FBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFqQixDQUEvQixFQUEyRXBDLEdBQUdxQyxXQUE5RTs7QUFFQSxRQUFJUyxpQkFBaUI5QyxHQUFHdUMsaUJBQUgsQ0FBcUJ4b0IsT0FBckIsRUFBOEIsYUFBOUIsQ0FBckI7QUFDQWltQixPQUFHd0MsdUJBQUgsQ0FBMkJNLGNBQTNCO0FBQ0E5QyxPQUFHeUMsbUJBQUgsQ0FBdUJLLGNBQXZCLEVBQXVDLENBQXZDLEVBQTBDOUMsR0FBRzBDLEtBQTdDLEVBQW9ELEtBQXBELEVBQTJELENBQTNELEVBQThELENBQTlEOztBQUVBLFNBQUtHLGlCQUFMLEdBQXlCQSxpQkFBekI7O0FBRUEsUUFBSUUsb0JBQW9CL0MsR0FBR2dDLFlBQUgsRUFBeEI7QUFDQWhDLE9BQUdpQyxVQUFILENBQWNqQyxHQUFHa0MsWUFBakIsRUFBK0JhLGlCQUEvQjtBQUNBL0MsT0FBR21DLFVBQUgsQ0FBY25DLEdBQUdrQyxZQUFqQixFQUErQixJQUFJRSxZQUFKLENBQWlCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBakIsQ0FBL0IsRUFBMkVwQyxHQUFHcUMsV0FBOUU7O0FBRUEsUUFBSVcsaUJBQWlCaEQsR0FBR3VDLGlCQUFILENBQXFCeG9CLE9BQXJCLEVBQThCLGFBQTlCLENBQXJCO0FBQ0FpbUIsT0FBR3dDLHVCQUFILENBQTJCUSxjQUEzQjtBQUNBaEQsT0FBR3lDLG1CQUFILENBQXVCTyxjQUF2QixFQUF1QyxDQUF2QyxFQUEwQ2hELEdBQUcwQyxLQUE3QyxFQUFvRCxLQUFwRCxFQUEyRCxDQUEzRCxFQUE4RCxDQUE5RDs7QUFFQSxTQUFLSyxpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0Q7O0FBRURoRCxrQkFBaUI7QUFDZixRQUFJQyxLQUFLLEtBQUtKLFNBQWQ7QUFDQSxRQUFJN2xCLFVBQVUsS0FBSytuQixhQUFuQjtBQUNBLFFBQUltQixjQUFjLEtBQUtDLFlBQUwsRUFBbEI7QUFDQSxRQUFJQyxjQUFjbkQsR0FBRzRCLGtCQUFILENBQXNCN25CLE9BQXRCLEVBQStCLFVBQS9CLENBQWxCO0FBQ0FpbUIsT0FBR29ELFNBQUgsQ0FBYUQsV0FBYixFQUEwQixDQUExQjtBQUNBLFNBQUtGLFdBQUwsR0FBbUJBLFdBQW5COztBQUVBLFFBQUlJLGNBQWMsS0FBS0gsWUFBTCxFQUFsQjtBQUNBLFFBQUlJLGNBQWN0RCxHQUFHNEIsa0JBQUgsQ0FBc0I3bkIsT0FBdEIsRUFBK0IsVUFBL0IsQ0FBbEI7QUFDQWltQixPQUFHb0QsU0FBSCxDQUFhRSxXQUFiLEVBQTBCLENBQTFCO0FBQ0EsU0FBS0QsV0FBTCxHQUFtQkEsV0FBbkI7O0FBRUEsUUFBSUUsY0FBYyxLQUFLTCxZQUFMLEVBQWxCO0FBQ0EsUUFBSU0sY0FBY3hELEdBQUc0QixrQkFBSCxDQUFzQjduQixPQUF0QixFQUErQixVQUEvQixDQUFsQjtBQUNBaW1CLE9BQUdvRCxTQUFILENBQWFJLFdBQWIsRUFBMEIsQ0FBMUI7QUFDQSxTQUFLRCxXQUFMLEdBQW1CQSxXQUFuQjtBQUNEOztBQUVETCxpQkFBZ0I7QUFDZCxRQUFJbEQsS0FBSyxLQUFLSixTQUFkOztBQUVBLFFBQUk2RCxhQUFhekQsR0FBRzBELGFBQUgsRUFBakI7QUFDQTFELE9BQUcyRCxXQUFILENBQWUzRCxHQUFHNEQsVUFBbEIsRUFBOEJILFVBQTlCO0FBQ0F6RCxPQUFHNkQsYUFBSCxDQUFpQjdELEdBQUc0RCxVQUFwQixFQUFnQzVELEdBQUc4RCxrQkFBbkMsRUFBdUQ5RCxHQUFHK0QsT0FBMUQ7QUFDQS9ELE9BQUc2RCxhQUFILENBQWlCN0QsR0FBRzRELFVBQXBCLEVBQWdDNUQsR0FBR2dFLGtCQUFuQyxFQUF1RGhFLEdBQUcrRCxPQUExRDtBQUNBL0QsT0FBRzZELGFBQUgsQ0FBaUI3RCxHQUFHNEQsVUFBcEIsRUFBZ0M1RCxHQUFHaUUsY0FBbkMsRUFBbURqRSxHQUFHa0UsYUFBdEQ7QUFDQWxFLE9BQUc2RCxhQUFILENBQWlCN0QsR0FBRzRELFVBQXBCLEVBQWdDNUQsR0FBR21FLGNBQW5DLEVBQW1EbkUsR0FBR2tFLGFBQXREO0FBQ0FsRSxPQUFHMkQsV0FBSCxDQUFlM0QsR0FBRzRELFVBQWxCLEVBQThCLElBQTlCOztBQUVBLFdBQU9ILFVBQVA7QUFDRDs7QUFFRFcsaUJBQWdCMXNDLElBQWhCLEVBQXNCd1EsS0FBdEIsRUFBNkJDLE1BQTdCLEVBQXFDdzFCLFNBQXJDLEVBQWdEQyxVQUFoRCxFQUE0RDtBQUMxRCxRQUFJeUcsT0FBTzFHLFlBQVl4MUIsTUFBdkI7QUFDQSxRQUFJbThCLFFBQVExRyxhQUFhejFCLE1BQWIsR0FBc0IsQ0FBbEM7QUFDQSxRQUFJLEtBQUtPLE1BQUwsS0FBZ0IsR0FBaEIsSUFBdUIsS0FBS0EsTUFBTCxLQUFnQixHQUEzQyxFQUFnRDtBQUM5QzQ3QixlQUFTLENBQVQ7QUFDRDtBQUNENXNDLFdBQU8sSUFBSUUsVUFBSixDQUFlRixJQUFmLENBQVA7QUFDQSxRQUFJNnNDLGFBQWE7QUFDZkMsYUFBTzlzQyxLQUFLMkssUUFBTCxDQUFjLENBQWQsRUFBaUJnaUMsSUFBakIsQ0FEUTtBQUVmSSxhQUFPL3NDLEtBQUsySyxRQUFMLENBQWNnaUMsSUFBZCxFQUFvQkEsT0FBT0MsS0FBM0IsQ0FGUTtBQUdmSSxhQUFPaHRDLEtBQUsySyxRQUFMLENBQWNnaUMsT0FBT0MsS0FBckIsRUFBNEJELE9BQU9DLEtBQVAsR0FBZUEsS0FBM0M7QUFIUSxLQUFqQjtBQUtBLFNBQUtLLGlCQUFMLENBQXVCSixVQUF2QixFQUFtQ3I4QixLQUFuQyxFQUEwQ0MsTUFBMUMsRUFBa0R3MUIsU0FBbEQsRUFBNkRDLFVBQTdEO0FBQ0Q7O0FBRUQrRyxvQkFBbUJqdEMsSUFBbkIsRUFBeUJ3USxLQUF6QixFQUFnQ0MsTUFBaEMsRUFBd0N3MUIsU0FBeEMsRUFBbURDLFVBQW5ELEVBQStEO0FBQzdELFFBQUlvQyxLQUFLLEtBQUtKLFNBQWQ7QUFDQSxRQUFJK0MsbUJBQW1CLEtBQUtBLGdCQUE1QjtBQUNBLFFBQUlFLG9CQUFvQixLQUFLQSxpQkFBN0I7QUFDQSxRQUFJRSxvQkFBb0IsS0FBS0EsaUJBQTdCOztBQUVBLFFBQUlFLGNBQWMsS0FBS0EsV0FBdkI7QUFDQSxRQUFJSSxjQUFjLEtBQUtBLFdBQXZCO0FBQ0EsUUFBSUUsY0FBYyxLQUFLQSxXQUF2Qjs7QUFFQSxRQUFJaUIsUUFBUTlzQyxLQUFLOHNDLEtBQWpCO0FBQ0EsUUFBSUMsUUFBUS9zQyxLQUFLK3NDLEtBQWpCO0FBQ0EsUUFBSUMsUUFBUWh0QyxLQUFLZ3RDLEtBQWpCOztBQUVBLFFBQUlFLGNBQWNqSCxTQUFsQjtBQUNBLFFBQUlrSCxVQUFVMThCLE1BQWQ7O0FBRUEsUUFBSTI4QixjQUFjNThCLFFBQVEsQ0FBMUI7QUFDQSxRQUFJNjhCLFVBQVU1OEIsU0FBUyxDQUF2Qjs7QUFFQSxRQUFJLEtBQUtPLE1BQUwsS0FBZ0IsR0FBaEIsSUFBdUIsS0FBS0EsTUFBTCxLQUFnQixHQUEzQyxFQUFnRDtBQUM5Q3E4QixnQkFBVTU4QixNQUFWO0FBQ0Q7O0FBRUQsUUFBSTY4QixjQUFjcEgsVUFBbEI7QUFDQSxRQUFJcUgsVUFBVUYsT0FBZDs7QUFFQSxRQUFJRyxTQUFTLEtBQUs3TSxNQUFMLENBQVlud0IsS0FBWixHQUFvQixLQUFLQSxLQUF0QztBQUNBLFFBQUlpOUIsU0FBUyxLQUFLOU0sTUFBTCxDQUFZbHdCLE1BQVosR0FBcUIsS0FBS0EsTUFBdkM7QUFDQSxRQUFJaTlCLE9BQU8sQ0FBWDtBQUNBLFFBQUlDLE1BQU0sQ0FBVjtBQUNBLFFBQUloeEMsSUFBSSxLQUFLZ2tDLE1BQUwsQ0FBWW53QixLQUFwQjtBQUNBLFFBQUlzSyxJQUFJLEtBQUs2bEIsTUFBTCxDQUFZbHdCLE1BQXBCO0FBQ0EsUUFBSSs4QixTQUFTQyxNQUFiLEVBQXFCO0FBQ25CM3lCLFVBQUssS0FBS3JLLE1BQUwsR0FBYyxLQUFLa3dCLE1BQUwsQ0FBWW53QixLQUExQixHQUFrQyxLQUFLQSxLQUE1QztBQUNBbTlCLFlBQU03ekIsU0FBUyxDQUFDLEtBQUs2bUIsTUFBTCxDQUFZbHdCLE1BQVosR0FBc0IsS0FBS0EsTUFBTCxHQUFjLEtBQUtrd0IsTUFBTCxDQUFZbndCLEtBQTFCLEdBQWtDLEtBQUtBLEtBQTlELElBQXdFLENBQWpGLENBQU47QUFDRCxLQUhELE1BR087QUFDTDdULFVBQUssS0FBSzZULEtBQUwsR0FBYSxLQUFLbXdCLE1BQUwsQ0FBWWx3QixNQUF6QixHQUFrQyxLQUFLQSxNQUE1QztBQUNBaTlCLGFBQU81ekIsU0FBUyxDQUFDLEtBQUs2bUIsTUFBTCxDQUFZbndCLEtBQVosR0FBcUIsS0FBS0EsS0FBTCxHQUFhLEtBQUttd0IsTUFBTCxDQUFZbHdCLE1BQXpCLEdBQWtDLEtBQUtBLE1BQTdELElBQXdFLENBQWpGLENBQVA7QUFDRDtBQUNENjNCLE9BQUdzRixRQUFILENBQVlGLElBQVosRUFBa0JDLEdBQWxCLEVBQXVCaHhDLENBQXZCLEVBQTBCbWUsQ0FBMUI7O0FBRUEsUUFBSSt5QixtQkFBbUIsSUFBSW5ELFlBQUosQ0FBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixDQUFqQixDQUF2QjtBQUNBcEMsT0FBR2lDLFVBQUgsQ0FBY2pDLEdBQUdrQyxZQUFqQixFQUErQlMsZ0JBQS9CO0FBQ0EzQyxPQUFHbUMsVUFBSCxDQUFjbkMsR0FBR2tDLFlBQWpCLEVBQStCcUQsZ0JBQS9CLEVBQWlEdkYsR0FBR3dGLFlBQXBEOztBQUVBLFFBQUlDLG9CQUFvQixJQUFJckQsWUFBSixDQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQWpCLENBQXhCO0FBQ0FwQyxPQUFHaUMsVUFBSCxDQUFjakMsR0FBR2tDLFlBQWpCLEVBQStCVyxpQkFBL0I7QUFDQTdDLE9BQUdtQyxVQUFILENBQWNuQyxHQUFHa0MsWUFBakIsRUFBK0J1RCxpQkFBL0IsRUFBa0R6RixHQUFHd0YsWUFBckQ7O0FBRUEsUUFBSUUsb0JBQW9CLElBQUl0RCxZQUFKLENBQWlCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FBakIsQ0FBeEI7QUFDQXBDLE9BQUdpQyxVQUFILENBQWNqQyxHQUFHa0MsWUFBakIsRUFBK0JhLGlCQUEvQjtBQUNBL0MsT0FBR21DLFVBQUgsQ0FBY25DLEdBQUdrQyxZQUFqQixFQUErQndELGlCQUEvQixFQUFrRDFGLEdBQUd3RixZQUFyRDs7QUFFQXhGLE9BQUcyRixhQUFILENBQWlCM0YsR0FBRzRGLFFBQXBCO0FBQ0E1RixPQUFHMkQsV0FBSCxDQUFlM0QsR0FBRzRELFVBQWxCLEVBQThCWCxXQUE5QjtBQUNBakQsT0FBRzZGLFVBQUgsQ0FBYzdGLEdBQUc0RCxVQUFqQixFQUE2QixDQUE3QixFQUFnQzVELEdBQUc4RixTQUFuQyxFQUE4Q2xCLFdBQTlDLEVBQTJEQyxPQUEzRCxFQUFvRSxDQUFwRSxFQUF1RTdFLEdBQUc4RixTQUExRSxFQUFxRjlGLEdBQUcrRixhQUF4RixFQUF1R3ZCLEtBQXZHOztBQUVBeEUsT0FBRzJGLGFBQUgsQ0FBaUIzRixHQUFHZ0csUUFBcEI7QUFDQWhHLE9BQUcyRCxXQUFILENBQWUzRCxHQUFHNEQsVUFBbEIsRUFBOEJQLFdBQTlCO0FBQ0FyRCxPQUFHNkYsVUFBSCxDQUFjN0YsR0FBRzRELFVBQWpCLEVBQTZCLENBQTdCLEVBQWdDNUQsR0FBRzhGLFNBQW5DLEVBQThDaEIsV0FBOUMsRUFBMkRDLE9BQTNELEVBQW9FLENBQXBFLEVBQXVFL0UsR0FBRzhGLFNBQTFFLEVBQXFGOUYsR0FBRytGLGFBQXhGLEVBQXVHdEIsS0FBdkc7O0FBRUF6RSxPQUFHMkYsYUFBSCxDQUFpQjNGLEdBQUdpRyxRQUFwQjtBQUNBakcsT0FBRzJELFdBQUgsQ0FBZTNELEdBQUc0RCxVQUFsQixFQUE4QkwsV0FBOUI7QUFDQXZELE9BQUc2RixVQUFILENBQWM3RixHQUFHNEQsVUFBakIsRUFBNkIsQ0FBN0IsRUFBZ0M1RCxHQUFHOEYsU0FBbkMsRUFBOENkLFdBQTlDLEVBQTJEQyxPQUEzRCxFQUFvRSxDQUFwRSxFQUF1RWpGLEdBQUc4RixTQUExRSxFQUFxRjlGLEdBQUcrRixhQUF4RixFQUF1R3JCLEtBQXZHOztBQUVBMUUsT0FBR2tHLFVBQUgsQ0FBY2xHLEdBQUdtRyxjQUFqQixFQUFpQyxDQUFqQyxFQUFvQyxDQUFwQztBQUNEOztBQUVEQyxrQkFBaUIxdUMsSUFBakIsRUFBdUIsQ0FFdEI7O0FBRURnbUMsU0FBUWhtQyxJQUFSLEVBQWN3USxLQUFkLEVBQXFCQyxNQUFyQixFQUE2QncxQixTQUE3QixFQUF3Q0MsVUFBeEMsRUFBb0Q7QUFDbEQsUUFBSW9DLEtBQUssS0FBS0osU0FBZDtBQUNBLFFBQUlJLEVBQUosRUFBUTtBQUNOLFdBQUtvRSxjQUFMLENBQW9CMXNDLElBQXBCLEVBQTBCd1EsS0FBMUIsRUFBaUNDLE1BQWpDLEVBQXlDdzFCLFNBQXpDLEVBQW9EQyxVQUFwRDtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUt3SSxlQUFMLENBQXFCMXVDLElBQXJCO0FBQ0Q7QUFDRjtBQTNTYTs7a0JBOFNEMGxDLFM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVNBLE1BQU1XLFVBQU4sQ0FBaUI7QUFDOUJ6bUMsY0FBYXVtQyxNQUFiLEVBQXFCO0FBQ25CLFNBQUtBLE1BQUwsR0FBY0EsVUFBVSxFQUF4QjtBQUNEOztBQUVEeGxDLFFBQU9ndUMsR0FBUCxFQUFZO0FBQ1YsV0FBTyxLQUFLeEksTUFBTCxDQUFZd0ksR0FBWixJQUFtQixLQUFLeEksTUFBTCxDQUFZd0ksR0FBWixFQUFpQmh1QyxLQUFwQyxHQUE0QyxDQUFuRDtBQUNEOztBQUVEeUwsTUFBS3VpQyxHQUFMLEVBQVU7QUFDUixXQUFPLEtBQUt4SSxNQUFMLENBQVl3SSxHQUFaLElBQW1CLEtBQUt4SSxNQUFMLENBQVl3SSxHQUFaLEVBQWlCdmlDLEdBQXBDLEdBQTBDLENBQWpEO0FBQ0Q7O0FBRUR3aUMsTUFBS0MsS0FBTCxFQUFZO0FBQ1YsU0FBSzFJLE1BQUwsQ0FBWTlxQyxJQUFaLENBQWlCd3pDLEtBQWpCO0FBQ0Q7O0FBRUQsTUFBSXp6QyxNQUFKLEdBQWM7QUFDWixXQUFPLEtBQUsrcUMsTUFBTCxDQUFZL3FDLE1BQW5CO0FBQ0Q7QUFuQjZCO2tCQUFYaXJDLFU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXJCLE1BQU15SSxpQkFBa0IzYixHQUFELElBQVM7QUFDOUIsT0FBSyxJQUFJOTBCLEdBQVQsSUFBZ0I4MEIsR0FBaEIsRUFBcUI7QUFDbkIsUUFBSUEsSUFBSTNJLGNBQUosQ0FBbUJuc0IsR0FBbkIsQ0FBSixFQUE2QjtBQUMzQixVQUFJODBCLElBQUk5MEIsR0FBSixNQUFhLElBQWpCLEVBQXVCO0FBQ3JCLGVBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFDRjtBQUNELFNBQU8sSUFBUDtBQUNELENBVEQ7O0FBV2UsTUFBTWl6QixTQUFOLENBQWdCO0FBQzdCMXhCLGdCQUFlO0FBQ2IsU0FBS212QyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS25vQyxRQUFMLEdBQWdCLElBQWhCOztBQUVBLFNBQUsrTyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBSzlVLEtBQUwsR0FBYTtBQUNYdUIsYUFBTyxJQURJO0FBRVhvTyxhQUFPLElBRkk7QUFHWEMsY0FBUSxJQUhHO0FBSVhjLGVBQVMsSUFKRTtBQUtYQyxhQUFPLElBTEk7QUFNWDFNLGlCQUFXO0FBQ1RDLGVBQU8sSUFERTtBQUVUa0ssYUFBSyxFQUZJO0FBR1RFLGlCQUFTLEtBSEE7QUFJVEMsaUJBQVM7QUFKQSxPQU5BO0FBWVhzQyxvQkFBYyxJQVpIO0FBYVhDLGdCQUFVO0FBQ1JuQixlQUFPLENBREM7QUFFUkMsZ0JBQVE7QUFGQTtBQWJDLEtBQWI7O0FBbUJBLFNBQUttRixRQUFMLEdBQWdCLElBQWhCOztBQUVBLFNBQUs5VSxLQUFMLEdBQWE7QUFDWHNCLGFBQU8sSUFESTtBQUVYc1Ysa0JBQVksSUFGRDtBQUdYRSx1QkFBaUIsSUFITjtBQUlYdlYsb0JBQWM7QUFKSCxLQUFiO0FBTUQ7O0FBRUQyc0MsZUFBYztBQUNaLFdBQU8xZCxVQUFVMmQsZUFBVixDQUEwQixJQUExQixLQUFtQzNkLFVBQVU0ZCxZQUFWLENBQXVCLElBQXZCLENBQW5DLElBQW1FNWQsVUFBVTZkLFlBQVYsQ0FBdUIsSUFBdkIsQ0FBMUU7QUFDRDs7QUFFRCxTQUFPRixlQUFQLENBQXdCOTNCLFNBQXhCLEVBQW1DO0FBQ2pDLFdBQU8yM0IsZUFBZTMzQixTQUFmLENBQVA7QUFDRDs7QUFFRCxTQUFPKzNCLFlBQVAsQ0FBcUIvM0IsU0FBckIsRUFBZ0M7QUFDOUIsUUFBSSxDQUFDQSxVQUFVeEIsUUFBZixFQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPbTVCLGVBQWUzM0IsVUFBVXRXLEtBQXpCLENBQVA7QUFDRDs7QUFFRCxTQUFPc3VDLFlBQVAsQ0FBcUJoNEIsU0FBckIsRUFBZ0M7QUFDOUIsUUFBSSxDQUFDQSxVQUFVdkIsUUFBZixFQUF5QjtBQUN2QixhQUFPLElBQVA7QUFDRDs7QUFFRCxXQUFPazVCLGVBQWUzM0IsVUFBVXRXLEtBQXpCLENBQVA7QUFDRDtBQXpENEI7a0JBQVZ5d0IsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTixNQUFNQyxXQUFOLENBQWtCO0FBQy9CM3hCLGNBQWFxWCxJQUFiLEVBQW1CO0FBQ2pCLFFBQUltNEIsV0FBVzdkLFlBQVk4ZCxhQUFaLEVBQWY7O0FBRUEsUUFBSSxDQUFDcDRCLElBQUQsSUFBU25lLE9BQU9KLFNBQVAsQ0FBaUJxaUIsUUFBakIsQ0FBMEJwaUIsSUFBMUIsQ0FBK0JzZSxJQUEvQixNQUF5QyxpQkFBdEQsRUFBeUU7QUFDdkUsYUFBT200QixRQUFQO0FBQ0Q7QUFDRCxRQUFJdm1DLFNBQVMvUCxPQUFPZ04sTUFBUCxDQUFjLEVBQWQsRUFBa0JzcEMsUUFBbEIsRUFBNEJuNEIsSUFBNUIsQ0FBYjs7QUFFQW5lLFdBQU93MkMsT0FBUCxDQUFlem1DLE1BQWYsRUFBdUJpakIsT0FBdkIsQ0FBK0IsQ0FBQyxDQUFDMUwsQ0FBRCxFQUFJbXZCLENBQUosQ0FBRCxLQUFZO0FBQ3pDLFdBQUtudkIsQ0FBTCxJQUFVbXZCLENBQVY7QUFDRCxLQUZEO0FBR0Q7O0FBRUQsU0FBT0YsYUFBUCxHQUF3QjtBQUN0QixXQUFPO0FBQ0xscUMsV0FBSyxJQURBO0FBRUxZLFdBQUssSUFGQTtBQUdMYSxnQkFBVSxJQUhMO0FBSUw5SSxnQkFBVSxJQUpMO0FBS0wweEMsYUFBTyxLQUxGLEVBS1M7QUFDZGpwQyxpQkFBVztBQU5OLEtBQVA7QUFRRDtBQXZCOEI7a0JBQVpnckIsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTixNQUFNRSxnQkFBTixDQUF1Qjs7QUFFbEM3eEIsZ0JBQWEzRSxJQUFiLEVBQW1CO0FBQ2YsYUFBS3cwQyxLQUFMLEdBQWF4MEMsSUFBYjtBQUNBLGFBQUtxckIsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLb3BCLG1CQUFMLEdBQTJCLENBQUMsQ0FBNUIsQ0FIZSxDQUdnQjtBQUNsQzs7QUFFRCxRQUFJejBDLElBQUosR0FBWTtBQUNSLGVBQU8sS0FBS3cwQyxLQUFaO0FBQ0g7O0FBRUQsUUFBSXIwQyxNQUFKLEdBQWM7QUFDVixlQUFPLEtBQUtrckIsS0FBTCxDQUFXbHJCLE1BQWxCO0FBQ0g7O0FBRUR1MEMsY0FBVztBQUNQLGVBQU8sS0FBS3JwQixLQUFMLENBQVdsckIsTUFBWCxLQUFzQixDQUE3QjtBQUNIOztBQUVEb0YsWUFBUztBQUNMLGFBQUs4bEIsS0FBTCxHQUFhLEVBQWI7QUFDQSxhQUFLb3BCLG1CQUFMLEdBQTJCLENBQUMsQ0FBNUI7QUFDSDs7QUFFREUsZ0NBQTZCQyxRQUE3QixFQUF1QztBQUNuQyxZQUFJaHlDLE9BQU8sS0FBS3lvQixLQUFoQjtBQUNBLFlBQUl6b0IsS0FBS3pDLE1BQUwsS0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkIsbUJBQU8sQ0FBQyxDQUFSO0FBQ0g7QUFDRCxZQUFJMDBDLE9BQU9qeUMsS0FBS3pDLE1BQUwsR0FBYyxDQUF6QjtBQUNBLFlBQUkyMEMsTUFBTSxDQUFWO0FBQ0EsWUFBSUMsU0FBUyxDQUFiO0FBQ0EsWUFBSUMsU0FBU0gsSUFBYjs7QUFFQSxZQUFJbkIsTUFBTSxDQUFWOztBQUVBLFlBQUlrQixXQUFXaHlDLEtBQUssQ0FBTCxFQUFRMEksU0FBdkIsRUFBa0M7QUFDOUJvb0Msa0JBQU0sQ0FBQyxDQUFQO0FBQ0EsbUJBQU9BLEdBQVA7QUFDSDs7QUFFRCxlQUFPcUIsVUFBVUMsTUFBakIsRUFBeUI7QUFDckJGLGtCQUFNQyxTQUFTcnFDLEtBQUtDLEtBQUwsQ0FBVyxDQUFDcXFDLFNBQVNELE1BQVYsSUFBb0IsQ0FBL0IsQ0FBZjtBQUNBLGdCQUFJRCxRQUFRRCxJQUFSLElBQWlCRCxXQUFXaHlDLEtBQUtreUMsR0FBTCxFQUFVbGYsVUFBVixDQUFxQnRxQixTQUFoQyxJQUNUc3BDLFdBQVdoeUMsS0FBS2t5QyxNQUFNLENBQVgsRUFBY3hwQyxTQURyQyxFQUNrRDtBQUM5Q29vQyxzQkFBTW9CLEdBQU47QUFDQTtBQUNILGFBSkQsTUFJTyxJQUFJbHlDLEtBQUtreUMsR0FBTCxFQUFVeHBDLFNBQVYsR0FBc0JzcEMsUUFBMUIsRUFBb0M7QUFDdkNHLHlCQUFTRCxNQUFNLENBQWY7QUFDSCxhQUZNLE1BRUE7QUFDSEUseUJBQVNGLE1BQU0sQ0FBZjtBQUNIO0FBQ0o7QUFDRCxlQUFPcEIsR0FBUDtBQUNIOztBQUVEdUIsK0JBQTRCTCxRQUE1QixFQUFzQztBQUNsQyxlQUFPLEtBQUtELDJCQUFMLENBQWlDQyxRQUFqQyxJQUE2QyxDQUFwRDtBQUNIOztBQUVEcGxCLFdBQVEwbEIsT0FBUixFQUFpQjtBQUNiLFlBQUl0eUMsT0FBTyxLQUFLeW9CLEtBQWhCO0FBQ0EsWUFBSThwQixnQkFBZ0IsS0FBS1YsbUJBQXpCO0FBQ0EsWUFBSVcsWUFBWSxDQUFoQjs7QUFFQSxZQUFJRCxrQkFBa0IsQ0FBQyxDQUFuQixJQUF3QkEsZ0JBQWdCdnlDLEtBQUt6QyxNQUE3QyxJQUNHKzBDLFFBQVFHLGNBQVIsSUFBMEJ6eUMsS0FBS3V5QyxhQUFMLEVBQW9CdmYsVUFBcEIsQ0FBK0J0cUIsU0FENUQsS0FFSzZwQyxrQkFBa0J2eUMsS0FBS3pDLE1BQUwsR0FBYyxDQUFqQyxJQUNJZzFDLGdCQUFnQnZ5QyxLQUFLekMsTUFBTCxHQUFjLENBQTlCLElBQ0crMEMsUUFBUUcsY0FBUixHQUF5Qnp5QyxLQUFLdXlDLGdCQUFnQixDQUFyQixFQUF3QkUsY0FKNUQsQ0FBSixFQUlrRjtBQUM5RUQsd0JBQVlELGdCQUFnQixDQUE1QixDQUQ4RSxDQUMvQztBQUNsQyxTQU5ELE1BTU87QUFDSCxnQkFBSXZ5QyxLQUFLekMsTUFBTCxHQUFjLENBQWxCLEVBQXFCO0FBQ2pCaTFDLDRCQUFZLEtBQUtULDJCQUFMLENBQWlDTyxRQUFRRyxjQUF6QyxJQUEyRCxDQUF2RTtBQUNIO0FBQ0o7O0FBRUQsYUFBS1osbUJBQUwsR0FBMkJXLFNBQTNCO0FBQ0EsYUFBSy9wQixLQUFMLENBQVd2ZixNQUFYLENBQWtCc3BDLFNBQWxCLEVBQTZCLENBQTdCLEVBQWdDRixPQUFoQztBQUNIOztBQUVESSx5QkFBc0JWLFFBQXRCLEVBQWdDO0FBQzVCLFlBQUlsQixNQUFNLEtBQUtpQiwyQkFBTCxDQUFpQ0MsUUFBakMsQ0FBVjtBQUNBLFlBQUlsQixPQUFPLENBQVgsRUFBYztBQUNWLG1CQUFPLEtBQUtyb0IsS0FBTCxDQUFXcW9CLEdBQVgsQ0FBUDtBQUNILFNBRkQsTUFFTztBQUFFO0FBQ0wsbUJBQU8sSUFBUDtBQUNIO0FBQ0o7O0FBRUQ2Qix3QkFBcUJYLFFBQXJCLEVBQStCO0FBQzNCLFlBQUlNLFVBQVUsS0FBS0ksb0JBQUwsQ0FBMEJWLFFBQTFCLENBQWQ7QUFDQSxZQUFJTSxZQUFZLElBQWhCLEVBQXNCO0FBQ2xCLG1CQUFPQSxRQUFRdGYsVUFBZjtBQUNILFNBRkQsTUFFTztBQUNILG1CQUFPLElBQVA7QUFDSDtBQUNKOztBQUVENGYscUJBQWtCWixRQUFsQixFQUE0QjtBQUN4QixZQUFJYSxhQUFhLEtBQUtkLDJCQUFMLENBQWlDQyxRQUFqQyxDQUFqQjtBQUNBLFlBQUljLHFCQUFxQixLQUFLcnFCLEtBQUwsQ0FBV29xQixVQUFYLEVBQXVCQyxrQkFBaEQ7QUFDQSxlQUFPQSxtQkFBbUJ2MUMsTUFBbkIsS0FBOEIsQ0FBOUIsSUFBbUNzMUMsYUFBYSxDQUF2RCxFQUEwRDtBQUN0REE7QUFDQUMsaUNBQXFCLEtBQUtycUIsS0FBTCxDQUFXb3FCLFVBQVgsRUFBdUJDLGtCQUE1QztBQUNIO0FBQ0QsWUFBSUEsbUJBQW1CdjFDLE1BQW5CLEdBQTRCLENBQWhDLEVBQW1DO0FBQy9CLG1CQUFPdTFDLG1CQUFtQkEsbUJBQW1CdjFDLE1BQW5CLEdBQTRCLENBQS9DLENBQVA7QUFDSCxTQUZELE1BRU87QUFDSCxtQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFoSGlDO2tCQUFqQnEyQixnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTixNQUFNRCxZQUFOLENBQW1CO0FBQzlCNXhCLGtCQUFlO0FBQ1gsYUFBS2d4QyxRQUFMLEdBQWdCLENBQUMsQ0FBakI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsQ0FBQyxDQUFmO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixDQUFDLENBQWpCO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLENBQUMsQ0FBZjtBQUNBLGFBQUtULGNBQUwsR0FBc0IsQ0FBQyxDQUF2QjtBQUNBLGFBQUtVLFlBQUwsR0FBb0IsQ0FBQyxDQUFyQjtBQUNBLGFBQUtMLGtCQUFMLEdBQTBCLEVBQTFCO0FBQ0EsYUFBSzNyQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsYUFBSzZyQixVQUFMLEdBQWtCLElBQWxCO0FBQ0g7O0FBRURvZ0IsV0FBUXBvQyxNQUFSLEVBQWdCO0FBQ1pBLGVBQU8ybUMsS0FBUCxHQUFlLElBQWY7QUFDQSxhQUFLbUIsa0JBQUwsQ0FBd0J0MUMsSUFBeEIsQ0FBNkJ3TixNQUE3QjtBQUNIO0FBaEI2QjtrQkFBYjJvQixZOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FkLE1BQU1oYixjQUFOLENBQXFCO0FBQzFCNVcsY0FBYW1FLElBQWIsRUFBbUI7QUFDakIsVUFBTXFyQyxXQUFXO0FBQ2YxM0Isa0JBQVksS0FERztBQUVmclYsb0JBQWMsQ0FGQztBQUdmRCxhQUFPLFdBSFE7QUFJZnNXLGNBQVEsQ0FBQyxFQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsRUFBZSxDQUFmLENBSk87QUFLZjlSLGdCQUFVLENBTEs7QUFNZnZGLFVBQUksQ0FOVztBQU9mb0UseUJBQW1CLEVBUEo7QUFRZm1TLHVCQUFpQixDQVJGO0FBU2Y5RixpQkFBVyxJQVRJO0FBVWY3VyxZQUFNO0FBVlMsS0FBakI7QUFZQSxRQUFJOEksSUFBSixFQUFVO0FBQ1IsYUFBT2pMLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQnNwQyxRQUFsQixFQUE0QnJyQyxJQUE1QixDQUFQO0FBQ0Q7QUFDRCxXQUFPcXJDLFFBQVA7QUFDRDs7QUFFRDN1QyxZQUFXO0FBQ1QsU0FBSzlHLElBQUwsR0FBWSxJQUFaO0FBQ0Q7QUF0QnlCOztRQUFmNmMsYyxHQUFBQSxjO0FBeUJOLE1BQU1ELGNBQU4sQ0FBcUI7QUFDMUIzVyxjQUFhbUUsSUFBYixFQUFtQjtBQUNqQixVQUFNcXJDLFdBQVc7QUFDZmwwQixZQUFNLElBRFM7QUFFZnJPLFdBQUssSUFBSTNNLFVBQUosQ0FBZSxDQUFmLENBRlU7QUFHZjZNLFdBQUssSUFBSTdNLFVBQUosQ0FBZSxDQUFmLENBSFU7QUFJZndSLG9CQUFjLEdBSkM7QUFLZnRQLGFBQU8sYUFMUTtBQU1mZ1AsbUJBQWEsR0FORTtBQU9mRCxrQkFBWSxJQVBHO0FBUWZ2SyxnQkFBVSxDQVJLO0FBU2Y5QixpQkFBVztBQUNUQyxlQUFPLElBREU7QUFFVGtLLGFBQUssRUFGSTtBQUdURSxpQkFBUyxLQUhBO0FBSVRDLGlCQUFTO0FBSkEsT0FUSTtBQWVmL04sVUFBSSxDQWZXO0FBZ0JmbVEsYUFBTyxLQWhCUTtBQWlCZkYscUJBQWUsR0FqQkE7QUFrQmZELG9CQUFjLElBbEJDO0FBbUJmRSxlQUFTLE1BbkJNO0FBb0JmOUwseUJBQW1CLEVBcEJKO0FBcUJma00sZ0JBQVU7QUFDUmxCLGdCQUFRLENBREE7QUFFUkQsZUFBTztBQUZDLE9BckJLO0FBeUJmc0IsaUJBQVcsSUF6Qkk7QUEwQmY3VyxZQUFNO0FBMUJTLEtBQWpCOztBQTZCQSxRQUFJOEksSUFBSixFQUFVO0FBQ1IsYUFBT2pMLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQnNwQyxRQUFsQixFQUE0QnJyQyxJQUE1QixDQUFQO0FBQ0Q7QUFDRCxXQUFPcXJDLFFBQVA7QUFDRDs7QUFFRDN1QyxZQUFXO0FBQ1QsU0FBSzlHLElBQUwsR0FBWSxJQUFaO0FBQ0EsU0FBS2tULEdBQUwsR0FBVyxJQUFYO0FBQ0EsU0FBS0UsR0FBTCxHQUFXLElBQVg7QUFDRDtBQXpDeUI7UUFBZndKLGMsR0FBQUEsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Qk4sTUFBTWtKLGdCQUFOLENBQXVCO0FBQzVCN2YsY0FBYXFYLElBQWIsRUFBbUI7QUFDakIsUUFBSW00QixXQUFXM3ZCLGlCQUFpQnNVLFVBQWpCLEVBQWY7QUFDQSxRQUFJLENBQUM5YyxJQUFMLEVBQVc7QUFDVCxhQUFPbTRCLFFBQVA7QUFDRDtBQUNELFFBQUl2bUMsU0FBUy9QLE9BQU9nTixNQUFQLENBQWMsRUFBZCxFQUFrQnNwQyxRQUFsQixFQUE0Qm40QixJQUE1QixDQUFiOztBQUVBLFdBQU9wTyxNQUFQO0FBQ0Q7O0FBRUQsU0FBT2tyQixVQUFQLEdBQXFCO0FBQ25CLFdBQU87QUFDTDV1QixXQUFLLElBREE7QUFFTFksV0FBSyxJQUZBO0FBR0wvRixZQUFNLElBQUlFLFVBQUo7QUFIRCxLQUFQO0FBS0Q7QUFqQjJCOztRQUFqQnVmLGdCLEdBQUFBLGdCO0FBb0JOLE1BQU1LLGdCQUFOLENBQXVCO0FBQzVCbGdCLGNBQWFxWCxJQUFiLEVBQW1CO0FBQ2pCLFFBQUltNEIsV0FBV3R2QixpQkFBaUJpVSxVQUFqQixFQUFmOztBQUVBLFFBQUksQ0FBQzljLElBQUwsRUFBVztBQUNULGFBQU9tNEIsUUFBUDtBQUNEO0FBQ0QsUUFBSXZtQyxTQUFTL1AsT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCc3BDLFFBQWxCLEVBQTRCbjRCLElBQTVCLENBQWI7O0FBRUEsV0FBT3BPLE1BQVA7QUFDRDs7QUFFRCxTQUFPa3JCLFVBQVAsR0FBcUI7QUFDbkIsV0FBTztBQUNMNXVCLFdBQUssSUFEQTtBQUVMWSxXQUFLLElBRkE7QUFHTHFELGtCQUFZLEtBSFAsRUFHYztBQUNuQjdDLGlCQUFXLElBSk47QUFLTHZHLFlBQU0sSUFBSUUsVUFBSjtBQUxELEtBQVA7QUFPRDtBQXBCMkI7UUFBakI0ZixnQixHQUFBQSxnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQmIsTUFBTW94QixHQUFOLENBQVU7QUFDUnR4QyxjQUFhNmQsT0FBYixFQUFzQjtBQUNwQixTQUFLQSxPQUFMLEdBQWUza0IsT0FBT2dOLE1BQVAsQ0FBYyxFQUFkLEVBQWtCMlgsT0FBbEIsQ0FBZjtBQUNBLFNBQUswekIsU0FBTCxHQUFpQixLQUFLMXpCLE9BQUwsQ0FBYTB6QixTQUE5QjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsU0FBSzVULFdBQUwsR0FBbUIsS0FBS2hnQixPQUFMLENBQWFnZ0IsV0FBYixJQUE0QixDQUEvQztBQUNBLFNBQUs2VCxZQUFMLEdBQW9CLEtBQUtBLFlBQUwsQ0FBa0I1ekMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDQSxTQUFLNnpDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQjd6QyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUs4ekMsV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCOXpDLElBQWpCLENBQXNCLElBQXRCLENBQW5CO0FBQ0EsU0FBSyt6QyxTQUFMLEdBQWlCLEtBQUtBLFNBQUwsQ0FBZS96QyxJQUFmLENBQW9CLElBQXBCLENBQWpCO0FBQ0Q7O0FBRUQvRCxTQUFRO0FBQ047QUFDQSxTQUFLeTNDLFdBQUwsR0FBbUIsSUFBSTdYLEtBQUttWSxXQUFULEVBQW5CO0FBQ0EsU0FBS04sV0FBTCxDQUFpQjdWLGdCQUFqQixDQUFrQyxZQUFsQyxFQUFnRCxLQUFLK1YsWUFBckQ7QUFDQSxTQUFLSCxTQUFMLENBQWVoa0MsR0FBZixHQUFxQnlwQixJQUFJSyxlQUFKLENBQW9CLEtBQUttYSxXQUF6QixDQUFyQjtBQUNBLFNBQUt2MEIsR0FBTCxHQUFXLEtBQUtzMEIsU0FBTCxDQUFlaGtDLEdBQTFCO0FBQ0EsU0FBS2drQyxTQUFMLENBQWU1VixnQkFBZixDQUFnQyxZQUFoQyxFQUE4QyxLQUFLZ1csWUFBbkQ7QUFDQSxTQUFLSixTQUFMLENBQWU1VixnQkFBZixDQUFnQyxTQUFoQyxFQUEyQyxLQUFLa1csU0FBaEQ7QUFDRDs7QUFFREYsaUJBQWdCO0FBQ2QsU0FBS3YyQyxJQUFMLENBQVUsYUFBVixFQUF5QixLQUFLbTJDLFNBQTlCO0FBQ0Q7O0FBRURNLGNBQWE7QUFDWCxTQUFLejJDLElBQUwsQ0FBVSxTQUFWLEVBQXFCLEtBQUttMkMsU0FBMUI7QUFDRDs7QUFFREcsaUJBQWdCO0FBQ2QsU0FBS0ssZ0JBQUw7QUFDRDs7QUFFREgsZ0JBQWU7QUFDYixTQUFLeDJDLElBQUwsQ0FBVSxtQkFBVjtBQUNBLFNBQUs0MkMsUUFBTDtBQUNEO0FBQ0RELHFCQUFvQjtBQUNsQixRQUFJLEtBQUtQLFdBQUwsQ0FBaUJyUCxVQUFqQixLQUFnQyxNQUFwQyxFQUE0QztBQUMxQztBQUNEO0FBQ0QsUUFBSTlnQyxVQUFVLEtBQUt5SSxRQUFMLENBQWNDLFdBQWQsQ0FBMEIsbUJBQTFCLENBQWQ7QUFDQSxRQUFJRixTQUFTLEtBQUtDLFFBQUwsQ0FBY0MsV0FBZCxDQUEwQixRQUExQixDQUFiO0FBQ0EsUUFBSW9QLEtBQUo7O0FBRUE5WCxjQUFVQSxRQUFRQSxPQUFsQjtBQUNBLFFBQUkydEMsTUFBTSxLQUFWO0FBQ0EsU0FBSyxJQUFJMXpDLElBQUksQ0FBUixFQUFXa2xCLElBQUl0bkIsT0FBT3NGLElBQVAsQ0FBWTZDLE9BQVosRUFBcUI3RixNQUF6QyxFQUFpREYsSUFBSWtsQixDQUFyRCxFQUF3RGxsQixHQUF4RCxFQUE2RDtBQUMzRCxVQUFJRCxPQUFPbkMsT0FBT3NGLElBQVAsQ0FBWTZDLE9BQVosRUFBcUIvRixDQUFyQixDQUFYO0FBQ0EsVUFBSUQsU0FBUyxPQUFiLEVBQXNCO0FBQ3BCOGQsZ0JBQVF0UCxPQUFPNUgsVUFBZjtBQUNELE9BRkQsTUFFTyxJQUFJNUcsU0FBUyxPQUFiLEVBQXNCO0FBQzNCOGQsZ0JBQVF0UCxPQUFPM0gsVUFBZjtBQUNBO0FBQ0Q7QUFDRCxVQUFJaVgsS0FBSixFQUFXO0FBQ1QsWUFBSTg0QixNQUFNNTJDLFNBQVMsT0FBVCxHQUFtQixFQUFuQixHQUF3QixFQUFsQztBQUNBLFlBQUk4ZCxNQUFNaFYsSUFBTixJQUFjZ1YsTUFBTWhWLElBQU4sQ0FBVzBCLGlCQUE3QixFQUFnRG9zQyxNQUFNOTRCLE1BQU1oVixJQUFOLENBQVcwQixpQkFBakI7QUFDaEQsWUFBSXhFLFFBQVFoRyxJQUFSLEVBQWMrRSxJQUFkLENBQW1CNUUsTUFBbkIsSUFBOEIsS0FBS3FpQyxXQUFMLEdBQW1Cb1UsR0FBckQsRUFBMkQ7QUFDekRqRCxnQkFBTSxJQUFOO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFFBQUlBLEdBQUosRUFBUztBQUNQLFVBQUk5MUMsT0FBT3NGLElBQVAsQ0FBWSxLQUFLaXpDLGFBQWpCLEVBQWdDajJDLE1BQWhDLEdBQXlDLENBQTdDLEVBQWdEO0FBQzlDO0FBQ0Q7QUFDRCxXQUFLLElBQUlGLElBQUksQ0FBUixFQUFXa2xCLElBQUl0bkIsT0FBT3NGLElBQVAsQ0FBWTZDLE9BQVosRUFBcUI3RixNQUF6QyxFQUFpREYsSUFBSWtsQixDQUFyRCxFQUF3RGxsQixHQUF4RCxFQUE2RDtBQUMzRCxZQUFJRCxPQUFPbkMsT0FBT3NGLElBQVAsQ0FBWTZDLE9BQVosRUFBcUIvRixDQUFyQixDQUFYO0FBQ0EsWUFBSWlHLFNBQVNGLFFBQVFoRyxJQUFSLENBQWI7QUFDQSxZQUFJNjJDLE9BQVE3MkMsU0FBUyxPQUFWLEdBQXFCLHNCQUFzQmtHLE9BQU9ILFFBQWxELEdBQTZELHNCQUFzQkcsT0FBT0gsUUFBckc7QUFDQSxZQUFJK3dDLGVBQWUsS0FBS1gsV0FBTCxDQUFpQlksZUFBakIsQ0FBaUNGLElBQWpDLENBQW5CO0FBQ0EsYUFBS1QsYUFBTCxDQUFtQnAyQyxJQUFuQixJQUEyQjgyQyxZQUEzQjtBQUNBQSxxQkFBYXhXLGdCQUFiLENBQThCLFdBQTlCLEVBQTJDLEtBQUtpVyxXQUFoRDtBQUNBLGFBQUtJLFFBQUw7QUFDRDtBQUNGO0FBQ0Y7O0FBRURBLGFBQVk7QUFDVixRQUFJM3dDLFVBQVUsS0FBS3lJLFFBQUwsQ0FBY0MsV0FBZCxDQUEwQixtQkFBMUIsQ0FBZDtBQUNBLFFBQUkxSSxPQUFKLEVBQWE7QUFDWCxXQUFLLElBQUkvRixJQUFJLENBQWIsRUFBZ0JBLElBQUlwQyxPQUFPc0YsSUFBUCxDQUFZLEtBQUtpekMsYUFBakIsRUFBZ0NqMkMsTUFBcEQsRUFBNERGLEdBQTVELEVBQWlFO0FBQy9ELFlBQUlELE9BQU9uQyxPQUFPc0YsSUFBUCxDQUFZLEtBQUtpekMsYUFBakIsRUFBZ0NuMkMsQ0FBaEMsQ0FBWDtBQUNBLFlBQUk2MkMsZUFBZSxLQUFLVixhQUFMLENBQW1CcDJDLElBQW5CLENBQW5CO0FBQ0EsWUFBSSxDQUFDODJDLGFBQWFFLFFBQWxCLEVBQTRCO0FBQzFCLGNBQUk5d0MsU0FBU0YsUUFBUUEsT0FBUixDQUFnQmhHLElBQWhCLENBQWI7QUFDQSxjQUFJa0csVUFBVSxDQUFDQSxPQUFPcWxDLE1BQXRCLEVBQThCO0FBQzVCO0FBQ0F1TCx5QkFBYUcsWUFBYixDQUEwQi93QyxPQUFPeEgsSUFBUCxDQUFZa1IsTUFBWixDQUFtQkEsTUFBN0M7QUFDQTFKLG1CQUFPcWxDLE1BQVAsR0FBZ0IsSUFBaEI7QUFDRCxXQUpELE1BSU8sSUFBSXJsQyxNQUFKLEVBQVk7QUFDakIsZ0JBQUluQixPQUFPbUIsT0FBT25CLElBQVAsQ0FBWWhDLEtBQVosRUFBWDtBQUNBLGdCQUFJZ0MsSUFBSixFQUFVO0FBQ1IreEMsMkJBQWFHLFlBQWIsQ0FBMEJseUMsS0FBSzZLLE1BQUwsQ0FBWUEsTUFBdEM7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRURzbkMsZ0JBQWU7QUFDYixVQUFNLEVBQUVwUSxVQUFGLEVBQWNxUSxtQkFBZCxLQUFzQyxLQUFLaEIsV0FBakQ7QUFDQSxRQUFJclAsZUFBZSxNQUFmLElBQXlCcVEsb0JBQW9CaDNDLE1BQXBCLEtBQStCLENBQTVELEVBQStEO0FBQzdELFVBQUk7QUFDRixhQUFLZzJDLFdBQUwsQ0FBaUJlLFdBQWpCO0FBQ0QsT0FGRCxDQUVFLE9BQU9wb0IsQ0FBUCxFQUFVO0FBQ1Y7QUFDRDtBQUNGO0FBQ0Y7O0FBRURtWixTQUFROTJCLEdBQVIsRUFBYXpMLFFBQVEsQ0FBckIsRUFBd0I7QUFDdEIsU0FBSyxJQUFJekYsSUFBSSxDQUFiLEVBQWdCQSxJQUFJcEMsT0FBT3NGLElBQVAsQ0FBWSxLQUFLaXpDLGFBQWpCLEVBQWdDajJDLE1BQXBELEVBQTRERixHQUE1RCxFQUFpRTtBQUMvRCxVQUFJMlAsU0FBUyxLQUFLd21DLGFBQUwsQ0FBbUJ2NEMsT0FBT3NGLElBQVAsQ0FBWSxLQUFLaXpDLGFBQWpCLEVBQWdDbjJDLENBQWhDLENBQW5CLENBQWI7QUFDQSxVQUFJLENBQUMyUCxPQUFPb25DLFFBQVosRUFBc0I7QUFDcEI7QUFDQXBuQyxlQUFPcTRCLE1BQVAsQ0FBY3ZpQyxLQUFkLEVBQXFCeUwsR0FBckI7QUFDRDtBQUNGO0FBQ0Y7QUFDRGltQyxrQkFBaUI7QUFDZixVQUFNQyxXQUFXLEVBQWpCO0FBQ0EsU0FBSyxJQUFJcDNDLElBQUksQ0FBYixFQUFnQkEsSUFBSXBDLE9BQU9zRixJQUFQLENBQVksS0FBS2l6QyxhQUFqQixFQUFnQ2oyQyxNQUFwRCxFQUE0REYsR0FBNUQsRUFBaUU7QUFDL0QsVUFBSTJQLFNBQVMsS0FBS3dtQyxhQUFMLENBQW1CdjRDLE9BQU9zRixJQUFQLENBQVksS0FBS2l6QyxhQUFqQixFQUFnQ24yQyxDQUFoQyxDQUFuQixDQUFiO0FBQ0EyUCxhQUFPMndCLG1CQUFQLENBQTJCLFdBQTNCLEVBQXdDLEtBQUtnVyxXQUE3Qzs7QUFFQSxVQUFJZSxJQUFKO0FBQ0EsVUFBSTFuQyxPQUFPb25DLFFBQVgsRUFBcUI7QUFDbkJNLGVBQU8sSUFBSTFNLE9BQUosQ0FBYTl5QixPQUFELElBQWE7QUFDOUIsZ0JBQU15L0IsZ0JBQWdCLFlBQVk7QUFDaEMsZ0JBQUlDLFlBQVksQ0FBaEI7O0FBRUEsa0JBQU1DLFFBQVEsTUFBTTtBQUNsQixrQkFBSSxDQUFDN25DLE9BQU9vbkMsUUFBWixFQUFzQjtBQUNwQmYsb0JBQUl5QixXQUFKLENBQWdCOW5DLE1BQWhCO0FBQ0FrSTtBQUNELGVBSEQsTUFHTyxJQUFJMC9CLFlBQVksQ0FBaEIsRUFBa0I7QUFDdkJ0UywyQkFBV3VTLEtBQVgsRUFBa0IsR0FBbEI7QUFDQUQ7QUFDRCxlQUhNLE1BR0E7QUFDTDEvQjtBQUNEO0FBQ0YsYUFWRDs7QUFZQW90Qix1QkFBV3VTLEtBQVgsRUFBa0IsR0FBbEI7QUFDQTduQyxtQkFBTzJ3QixtQkFBUCxDQUEyQixXQUEzQixFQUF3Q2dYLGFBQXhDO0FBQ0QsV0FqQkQ7QUFrQkEzbkMsaUJBQU8wd0IsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNpWCxhQUFyQztBQUNELFNBcEJNLENBQVA7QUFxQkQsT0F0QkQsTUFzQk87QUFDTHRCLFlBQUl5QixXQUFKLENBQWdCOW5DLE1BQWhCO0FBQ0EwbkMsZUFBTzFNLFFBQVE5eUIsT0FBUixFQUFQO0FBQ0Q7O0FBRUR1L0IsZUFBU2ozQyxJQUFULENBQWNrM0MsSUFBZDtBQUNEOztBQUVELFdBQU8xTSxRQUFRelAsR0FBUixDQUFZa2MsUUFBWixDQUFQO0FBQ0Q7O0FBRUQ3eEMsWUFBVztBQUNULFdBQU8sS0FBSzR4QyxhQUFMLEdBQXFCcHBCLElBQXJCLENBQTBCLE1BQU07QUFDckMsV0FBSyxJQUFJL3RCLElBQUksQ0FBYixFQUFnQkEsSUFBSXBDLE9BQU9zRixJQUFQLENBQVksS0FBS2l6QyxhQUFqQixFQUFnQ2oyQyxNQUFwRCxFQUE0REYsR0FBNUQsRUFBaUU7QUFDL0QsWUFBSTJQLFNBQVMsS0FBS3dtQyxhQUFMLENBQW1CdjRDLE9BQU9zRixJQUFQLENBQVksS0FBS2l6QyxhQUFqQixFQUFnQ24yQyxDQUFoQyxDQUFuQixDQUFiO0FBQ0EsYUFBS2syQyxXQUFMLENBQWlCd0Isa0JBQWpCLENBQW9DL25DLE1BQXBDO0FBQ0EsZUFBTyxLQUFLd21DLGFBQUwsQ0FBbUJ2NEMsT0FBT3NGLElBQVAsQ0FBWSxLQUFLaXpDLGFBQWpCLEVBQWdDbjJDLENBQWhDLENBQW5CLENBQVA7QUFDRDs7QUFFRCxXQUFLaTJDLFNBQUwsQ0FBZTNWLG1CQUFmLENBQW1DLFlBQW5DLEVBQWlELEtBQUsrVixZQUF0RDtBQUNBLFdBQUtKLFNBQUwsQ0FBZTNWLG1CQUFmLENBQW1DLFNBQW5DLEVBQThDLEtBQUtpVyxTQUFuRDtBQUNBLFdBQUtMLFdBQUwsQ0FBaUI1VixtQkFBakIsQ0FBcUMsWUFBckMsRUFBbUQsS0FBSzhWLFlBQXhEOztBQUVBLFdBQUthLFdBQUw7QUFDQTc1QixhQUFPc2UsR0FBUCxDQUFXaWMsZUFBWCxDQUEyQixLQUFLaDJCLEdBQWhDOztBQUVBLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0EsV0FBS1ksT0FBTCxHQUFlLEVBQWY7QUFDQSxXQUFLMHpCLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsV0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFdBQUs1VCxXQUFMLEdBQW1CLENBQW5CO0FBQ0QsS0FwQk0sQ0FBUDtBQXFCRDs7QUFFRCxTQUFPa1YsV0FBUCxDQUFvQjluQyxNQUFwQixFQUE0QjtBQUMxQixVQUFNMjNCLFdBQVczM0IsT0FBTzIzQixRQUF4QjtBQUNBLFFBQUlzUSxPQUFPLEdBQVg7QUFDQSxTQUFLLElBQUk1M0MsSUFBSSxDQUFSLEVBQVdhLE1BQU15bUMsU0FBU3BuQyxNQUEvQixFQUF1Q0YsSUFBSWEsR0FBM0MsRUFBZ0RiLEdBQWhELEVBQXFEO0FBQ25ENDNDLGFBQU90USxTQUFTcDJCLEdBQVQsQ0FBYWxSLENBQWIsQ0FBUDtBQUNEO0FBQ0QsUUFBSTtBQUNGMlAsYUFBT3E0QixNQUFQLENBQWMsQ0FBZCxFQUFpQjRQLElBQWpCO0FBQ0QsS0FGRCxDQUVFLE9BQU8vb0IsQ0FBUCxFQUFVO0FBQ1Y7QUFDRDtBQUNGO0FBeE1PO2tCQTBNS21uQixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTWY7Ozs7OztBQUVBLE1BQU1sbUIsTUFBTixDQUFhO0FBQ1hwckIsY0FBYWlMLE1BQWIsRUFBcUI7QUFDbkIsU0FBS0EsTUFBTCxHQUFjQSxVQUFVLElBQUkzSyxVQUFKLENBQWUsQ0FBZixDQUF4QjtBQUNEOztBQUVEa3JCLFFBQU8sR0FBR3ZnQixNQUFWLEVBQWtCO0FBQ2hCQSxXQUFPaWhCLE9BQVAsQ0FBZTdLLFFBQVE7QUFDckIsV0FBS3BXLE1BQUwsR0FBYyxnQ0FBTzNLLFVBQVAsRUFBbUIsS0FBSzJLLE1BQXhCLEVBQWdDb1csSUFBaEMsQ0FBZDtBQUNELEtBRkQ7QUFHRDs7QUFFRCxTQUFPZ0ssV0FBUCxDQUFvQnh4QixLQUFwQixFQUEyQjtBQUN6QixXQUFPLElBQUl5RyxVQUFKLENBQWUsQ0FDcEJ6RyxTQUFTLEVBRFcsRUFFbkJBLFNBQVMsRUFBVixHQUFnQixJQUZJLEVBR25CQSxTQUFTLENBQVYsR0FBZSxJQUhLLEVBSXBCQSxRQUFRLElBSlksQ0FBZixDQUFQO0FBTUQ7O0FBRUQsU0FBT3M1QyxTQUFQLENBQWtCbDBDLEdBQWxCLEVBQXVCO0FBQ3JCLFFBQUltMEMsT0FBTyxFQUFYOztBQUVBLGFBQVNDLFlBQVQsQ0FBdUJDLE1BQXZCLEVBQStCO0FBQzdCLFVBQUlDLFNBQVNELE9BQU9uNEIsUUFBUCxDQUFnQixFQUFoQixDQUFiO0FBQ0EsYUFBT280QixPQUFPQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLEdBQW5CLENBQVA7QUFDRDs7QUFFRHYwQyxRQUFJaXRCLE9BQUosQ0FBWThDLE9BQU87QUFDakJva0IsY0FBUUMsYUFBYXJrQixHQUFiLENBQVI7QUFDRCxLQUZEO0FBR0EsV0FBTzlVLFNBQVNrNUIsSUFBVCxFQUFlLEVBQWYsQ0FBUDtBQUNEO0FBaENVOztrQkFtQ0Vob0IsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2YsTUFBTTVNLE1BQU4sQ0FBYTtBQUNYeGUsY0FBYWlMLE1BQWIsRUFBcUI7QUFDbkIsUUFBSUEsa0JBQWtCdUosV0FBdEIsRUFBbUM7QUFDakMsV0FBS3ZKLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFdBQUtjLFFBQUwsR0FBZ0IsSUFBSWYsUUFBSixDQUFhQyxNQUFiLENBQWhCO0FBQ0EsV0FBS2MsUUFBTCxDQUFjN04sUUFBZCxHQUF5QixDQUF6QjtBQUNELEtBSkQsTUFJTztBQUNMLFlBQU0sSUFBSXBDLEtBQUosQ0FBVSxpQkFBVixDQUFOO0FBQ0Q7QUFDRjs7QUFFRCxNQUFJTixNQUFKLEdBQWM7QUFDWixXQUFPLEtBQUt5UCxNQUFMLENBQVk1SyxVQUFuQjtBQUNEOztBQUVELE1BQUluQyxRQUFKLENBQWNyRSxLQUFkLEVBQXFCO0FBQ25CLFNBQUtrUyxRQUFMLENBQWM3TixRQUFkLEdBQXlCckUsS0FBekI7QUFDRDs7QUFFRCxNQUFJcUUsUUFBSixHQUFnQjtBQUNkLFdBQU8sS0FBSzZOLFFBQUwsQ0FBYzdOLFFBQXJCO0FBQ0Q7O0FBRUQ0bkIsT0FBTTNvQixLQUFOLEVBQWE7QUFDWCxTQUFLZSxRQUFMLElBQWlCZixLQUFqQjtBQUNEOztBQUVEd1AsT0FBTXhQLEtBQU4sRUFBYTtBQUNYLFFBQUlzMkMsT0FBTzF0QyxLQUFLQyxLQUFMLENBQVc3SSxRQUFRLENBQW5CLENBQVg7QUFDQSxRQUFJK3lDLE9BQU8veUMsUUFBUSxDQUFuQjtBQUNBLFNBQUssSUFBSTdCLElBQUksQ0FBYixFQUFnQkEsSUFBSW00QyxJQUFwQixFQUEwQm40QyxHQUExQixFQUErQjtBQUM3QmtqQixhQUFPalQsUUFBUCxDQUFnQixLQUFLUSxRQUFyQixFQUErQixDQUEvQjtBQUNEO0FBQ0QsUUFBSW1rQyxPQUFPLENBQVgsRUFBYztBQUNaMXhCLGFBQU9qVCxRQUFQLENBQWdCLEtBQUtRLFFBQXJCLEVBQStCbWtDLElBQS9CO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7O0FBTUEsU0FBTzNrQyxRQUFQLENBQWlCTixNQUFqQixFQUF5QjVFLElBQXpCLEVBQStCcXRDLElBQS9CLEVBQXFDO0FBQ25DLFFBQUl6WSxHQUFKO0FBQ0EsWUFBUTUwQixJQUFSO0FBQ0UsV0FBSyxDQUFMO0FBQ0UsWUFBSXF0QyxJQUFKLEVBQVU7QUFDUnpZLGdCQUFNaHdCLE9BQU9pQixPQUFQLENBQWVqQixPQUFPL00sUUFBdEIsQ0FBTjtBQUNELFNBRkQsTUFFTztBQUNMKzhCLGdCQUFNaHdCLE9BQU95SixRQUFQLENBQWdCekosT0FBTy9NLFFBQXZCLENBQU47QUFDRDtBQUNEO0FBQ0YsV0FBSyxDQUFMO0FBQ0UsWUFBSXcxQyxJQUFKLEVBQVU7QUFDUnpZLGdCQUFNaHdCLE9BQU9nQixRQUFQLENBQWdCaEIsT0FBTy9NLFFBQXZCLENBQU47QUFDRCxTQUZELE1BRU87QUFDTCs4QixnQkFBTWh3QixPQUFPMEksU0FBUCxDQUFpQjFJLE9BQU8vTSxRQUF4QixDQUFOO0FBQ0Q7QUFDRDtBQUNGLFdBQUssQ0FBTDtBQUNFLFlBQUl3MUMsSUFBSixFQUFVO0FBQ1IsZ0JBQU0sSUFBSTUzQyxLQUFKLENBQVUsOEJBQVYsQ0FBTjtBQUNELFNBRkQsTUFFTztBQUNMbS9CLGdCQUFNaHdCLE9BQU95SixRQUFQLENBQWdCekosT0FBTy9NLFFBQXZCLEtBQW9DLEVBQTFDO0FBQ0ErOEIsaUJBQU9od0IsT0FBT3lKLFFBQVAsQ0FBZ0J6SixPQUFPL00sUUFBUCxHQUFrQixDQUFsQyxLQUF3QyxDQUEvQztBQUNBKzhCLGlCQUFPaHdCLE9BQU95SixRQUFQLENBQWdCekosT0FBTy9NLFFBQVAsR0FBa0IsQ0FBbEMsQ0FBUDtBQUNEO0FBQ0Q7QUFDRixXQUFLLENBQUw7QUFDRSxZQUFJdzFDLElBQUosRUFBVTtBQUNSelksZ0JBQU1od0IsT0FBT2UsUUFBUCxDQUFnQmYsT0FBTy9NLFFBQXZCLENBQU47QUFDRCxTQUZELE1BRU87QUFDTCs4QixnQkFBTWh3QixPQUFPQyxTQUFQLENBQWlCRCxPQUFPL00sUUFBeEIsQ0FBTjtBQUNEO0FBQ0Q7QUFDRixXQUFLLENBQUw7QUFDRSxZQUFJdzFDLElBQUosRUFBVTtBQUNSLGdCQUFNLElBQUk1M0MsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDRCxTQUZELE1BRU87QUFDTG0vQixnQkFBTWh3QixPQUFPQyxTQUFQLENBQWlCRCxPQUFPL00sUUFBeEIsS0FBcUMsRUFBM0M7QUFDQSs4QixpQkFBT2h3QixPQUFPQyxTQUFQLENBQWlCRCxPQUFPL00sUUFBUCxHQUFrQixDQUFuQyxDQUFQO0FBQ0Q7QUFDRDtBQUNGO0FBQ0UrOEIsY0FBTSxFQUFOO0FBeENKO0FBMENBaHdCLFdBQU8vTSxRQUFQLElBQW1CbUksSUFBbkI7QUFDQSxXQUFPNDBCLEdBQVA7QUFDRDs7QUFFRHRaLGNBQWE7QUFDWCxXQUFPbkQsT0FBT2pULFFBQVAsQ0FBZ0IsS0FBS1EsUUFBckIsRUFBK0IsQ0FBL0IsQ0FBUDtBQUNEOztBQUVENlYsZUFBYztBQUNaLFdBQU9wRCxPQUFPalQsUUFBUCxDQUFnQixLQUFLUSxRQUFyQixFQUErQixDQUEvQixDQUFQO0FBQ0Q7O0FBRURzWSxlQUFjO0FBQ1osV0FBTzdGLE9BQU9qVCxRQUFQLENBQWdCLEtBQUtRLFFBQXJCLEVBQStCLENBQS9CLENBQVA7QUFDRDs7QUFFRDJYLGVBQWM7QUFDWixXQUFPbEYsT0FBT2pULFFBQVAsQ0FBZ0IsS0FBS1EsUUFBckIsRUFBK0IsQ0FBL0IsQ0FBUDtBQUNEOztBQUVENG5DLGVBQWM7QUFDWixXQUFPbjFCLE9BQU9qVCxRQUFQLENBQWdCLEtBQUtRLFFBQXJCLEVBQStCLENBQS9CLENBQVA7QUFDRDs7QUFFRHdZLGFBQVk7QUFDVixXQUFPL0YsT0FBT2pULFFBQVAsQ0FBZ0IsS0FBS1EsUUFBckIsRUFBK0IsQ0FBL0IsRUFBa0MsSUFBbEMsQ0FBUDtBQUNEO0FBQ0Q2bkMsY0FBYTtBQUNYLFdBQU9wMUIsT0FBT2pULFFBQVAsQ0FBZ0IsS0FBS1EsUUFBckIsRUFBK0IsQ0FBL0IsRUFBa0MsSUFBbEMsQ0FBUDtBQUNEOztBQUVEOG5DLGNBQWE7QUFDWCxXQUFPcjFCLE9BQU9qVCxRQUFQLENBQWdCLEtBQUtRLFFBQXJCLEVBQStCLENBQS9CLEVBQWtDLElBQWxDLENBQVA7QUFDRDs7QUFFRHNmLGNBQWF4eEIsS0FBYixFQUFvQjtBQUNsQixXQUFPLElBQUl5RyxVQUFKLENBQWUsQ0FDcEJ6RyxVQUFVLEVBQVYsR0FBZSxJQURLLEVBRXBCQSxVQUFVLEVBQVYsR0FBZSxJQUZLLEVBR3BCQSxVQUFVLENBQVYsR0FBYyxJQUhNLEVBSXBCQSxRQUFRLElBSlksQ0FBZixDQUFQO0FBTUQ7QUFsSVU7O2tCQXFJRTJrQixNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySWY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLE1BQU03YixlQUFlQyxzQkFBT0QsWUFBNUI7QUFDQSxNQUFNd2xCLGdCQUFnQnZsQixzQkFBT3VsQixhQUE3QjtBQUNBLE1BQU04UCxpQkFBaUJyMUIsc0JBQU9xMUIsY0FBOUI7O0FBRUEsTUFBTTZiLE1BQU0sZUFBWjs7QUFFQSxNQUFNQyxNQUFOLENBQWE7QUFDWHQ2QyxTQUFRLENBQUU7QUFEQzs7QUFJRSxNQUFNdTZDLGFBQU4sQ0FBb0I7QUFDakNoMEMsY0FBYWkwQyxNQUFiLEVBQXFCO0FBQ25CLFNBQUtseUMsR0FBTCxHQUFXK3hDLEdBQVg7QUFDQSxTQUFLSSxPQUFMLEdBQWVELE1BQWY7O0FBRUEsU0FBS2h6QyxLQUFMLEdBQWEsS0FBS2l6QyxPQUFMLENBQWFqekMsS0FBMUI7QUFDQSxTQUFLckQsS0FBTCxHQUFhO0FBQ1h1MkMsMEJBQW9CO0FBRFQsS0FBYjtBQUdEOztBQUVEcDZDLFNBQVE7QUFDTixTQUFLK1AsUUFBTCxDQUFjeXZCLFFBQWQsQ0FBdUIsY0FBdkIsRUFBdUNyUiwyQkFBdkM7QUFDQSxTQUFLcGUsUUFBTCxDQUFjeXZCLFFBQWQsQ0FBdUIsZUFBdkIsRUFBd0MxNUIsd0JBQXhDO0FBQ0EsU0FBS2lLLFFBQUwsQ0FBY3l2QixRQUFkLENBQXVCLG1CQUF2QixFQUE0Q3g1Qix5QkFBNUM7O0FBRUEsU0FBSytKLFFBQUwsQ0FBY3l2QixRQUFkLENBQXVCLGFBQXZCLEVBQXNDam5CLHlCQUF0Qzs7QUFFQSxTQUFLeEksUUFBTCxDQUFjeXZCLFFBQWQsQ0FBdUIsYUFBdkIsRUFBc0NyTyx5QkFBdEM7QUFDQSxTQUFLcGhCLFFBQUwsQ0FBY3l2QixRQUFkLENBQXVCLFFBQXZCLEVBQWlDNzVCLHNCQUFqQzs7QUFFQSxTQUFLb0ssUUFBTCxDQUFjeXZCLFFBQWQsQ0FBdUIsZUFBdkIsRUFBd0NsM0IsNEJBQXhDO0FBQ0EsU0FBS3lILFFBQUwsQ0FBY3l2QixRQUFkLENBQXVCLGlCQUF2QixFQUEwQzlILDZCQUExQzs7QUFFQSxTQUFLM25CLFFBQUwsQ0FBY3l2QixRQUFkLENBQXVCLFFBQXZCLEVBQWlDd2EsTUFBakM7O0FBRUEsU0FBS0ssYUFBTDtBQUNEOztBQUVEQSxrQkFBaUI7QUFDZixTQUFLLzJDLEVBQUwsQ0FBUThxQixjQUFjbUMsaUJBQXRCLEVBQXlDLEtBQUsrcEIsdUJBQUwsQ0FBNkJ2MkMsSUFBN0IsQ0FBa0MsSUFBbEMsQ0FBekM7QUFDQSxTQUFLVCxFQUFMLENBQVE4cUIsY0FBY3NCLFlBQXRCLEVBQW9DLEtBQUs2cUIsbUJBQUwsQ0FBeUJ4MkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBcEM7O0FBRUEsU0FBS1QsRUFBTCxDQUFRc0YsYUFBYWdWLFVBQXJCLEVBQWlDLEtBQUs0OEIsZ0JBQUwsQ0FBc0J6MkMsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FBakM7QUFDQSxTQUFLVCxFQUFMLENBQVFzRixhQUFhaVgsZUFBckIsRUFBc0MsS0FBSzQ2QixxQkFBTCxDQUEyQjEyQyxJQUEzQixDQUFnQyxJQUFoQyxDQUF0QztBQUNBLFNBQUtULEVBQUwsQ0FBUXNGLGFBQWEyVCxjQUFyQixFQUFxQyxLQUFLbStCLG9CQUFMLENBQTBCMzJDLElBQTFCLENBQStCLElBQS9CLENBQXJDO0FBQ0EsU0FBS1QsRUFBTCxDQUFRc0YsYUFBYTRULFdBQXJCLEVBQWtDLEtBQUttK0IsaUJBQUwsQ0FBdUI1MkMsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBbEM7QUFFRDs7QUFFRHkyQyxxQkFBb0I7QUFDbEIsUUFBSSxDQUFDLEtBQUt6cUMsUUFBTCxDQUFjeU4sU0FBbkIsRUFBOEI7QUFDNUIsV0FBS25jLElBQUwsQ0FBVXVILGFBQWE0VCxXQUF2QixFQUFvQyxJQUFJemEsS0FBSixDQUFVLHlCQUFWLENBQXBDO0FBQ0Q7QUFDRjs7QUFFRHU0Qyw0QkFBMkI7QUFDekIsU0FBS3BhLE1BQUwsQ0FBWSxhQUFaLEVBQTJCdDNCLGFBQWE4UyxXQUF4QztBQUNEOztBQUVEKytCLHdCQUF1Qm41QyxJQUF2QixFQUE2QjtBQUMzQixRQUFJQSxTQUFTLE9BQWIsRUFBc0I7QUFDcEI7QUFDQSxZQUFNLEVBQUU0RyxVQUFGLEtBQWlCLEtBQUs2SCxRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsQ0FBdkI7QUFDQSxVQUFJOUgsY0FBY0EsV0FBV2tDLElBQTdCLEVBQW1DO0FBQ2pDLGFBQUt3d0MsZUFBTCxDQUFxQjF5QyxXQUFXa0MsSUFBaEM7QUFDRDtBQUNGLEtBTkQsTUFNTztBQUNMLFlBQU0sRUFBRWpDLFVBQUYsS0FBaUIsS0FBSzRILFFBQUwsQ0FBY0MsV0FBZCxDQUEwQixRQUExQixDQUF2QjtBQUNBLFVBQUk3SCxjQUFjQSxXQUFXaUMsSUFBN0IsRUFBbUM7QUFDakMsYUFBS3l3QyxlQUFMLENBQXFCMXlDLFdBQVdpQyxJQUFoQztBQUNEO0FBQ0Y7QUFDRjs7QUFFRHN3Qyx5QkFBd0I7QUFDdEIsUUFBRyxLQUFLUCxPQUFMLENBQWFqekMsS0FBaEIsRUFBdUI7QUFDckIsWUFBTSxFQUFFaUIsVUFBRixFQUFjRCxVQUFkLEtBQTZCLEtBQUs2SCxRQUFMLENBQWNDLFdBQWQsQ0FBMEIsUUFBMUIsQ0FBbkM7QUFDQSxXQUFLbXFDLE9BQUwsQ0FBYWp6QyxLQUFiLENBQW1CMGdDLGVBQW5CLENBQW1Dei9CLFVBQW5DLEVBQStDRCxVQUEvQztBQUNEO0FBQ0Y7O0FBRUQ0eUMsNkJBQTRCO0FBQzFCLFNBQUtqM0MsS0FBTCxDQUFXdTJDLGtCQUFYLEdBQWdDLElBQWhDO0FBQ0Y7QUFDQzs7QUFHREcsd0JBQXVCO0FBQ3JCLFNBQUtKLE9BQUwsQ0FBYTk0QyxJQUFiLENBQWtCLE9BQWxCLEVBQTJCLElBQUkwNUMsbUJBQU9DLE1BQVgsQ0FBa0IsU0FBbEIsRUFBNkIsS0FBS2IsT0FBTCxDQUFhcDdCLE1BQWIsQ0FBb0JtRSxHQUFqRCxDQUEzQjtBQUNEOztBQUVEeTNCLHNCQUFxQjtBQUNuQixTQUFLUixPQUFMLENBQWE5NEMsSUFBYixDQUFrQixPQUFsQixFQUEyQixJQUFJMDVDLG1CQUFPQyxNQUFYLENBQWtCLE9BQWxCLEVBQTJCLEtBQUtiLE9BQUwsQ0FBYXA3QixNQUFiLENBQW9CbUUsR0FBL0MsQ0FBM0I7QUFDRDs7QUFHRDAzQixrQkFBaUJ2akIsU0FBakIsRUFBNEI7QUFDMUIsUUFBSSxLQUFLOGlCLE9BQUwsQ0FBYWp6QyxLQUFqQixFQUF3QjtBQUN0QixXQUFLaXpDLE9BQUwsQ0FBYWp6QyxLQUFiLENBQW1CNGdDLFlBQW5CLENBQWdDelEsU0FBaEM7QUFDRDtBQUNGOztBQUVEd2pCLGtCQUFpQi9qQixTQUFqQixFQUE0QjtBQUMxQixRQUFJLEtBQUtxakIsT0FBTCxDQUFhanpDLEtBQWpCLEVBQXdCO0FBQ3RCLFdBQUtpekMsT0FBTCxDQUFhanpDLEtBQWIsQ0FBbUI2Z0MsWUFBbkIsQ0FBZ0NqUixTQUFoQztBQUNEO0FBQ0Y7O0FBRURYLFNBQVE7QUFDTixRQUFJLENBQUMsS0FBS3R5QixLQUFMLENBQVd1MkMsa0JBQWhCLEVBQW9DO0FBQ2xDLFdBQUthLFFBQUw7QUFDRDtBQUNGOztBQUVEQSxhQUFZO0FBQ1YsU0FBSzU1QyxJQUFMLENBQVUrc0IsY0FBY1csV0FBeEIsRUFBcUMsS0FBS29yQixPQUFMLENBQWFwN0IsTUFBYixDQUFvQm1FLEdBQXpEO0FBQ0Q7O0FBRURvaUIsVUFBUztBQUNQLFVBQU00VixTQUFTLEtBQUtuckMsUUFBTCxDQUFjQyxXQUFkLENBQTBCLGNBQTFCLENBQWY7O0FBRUEsUUFBSWtyQyxNQUFKLEVBQVk7QUFDVkEsYUFBTy9xQixNQUFQO0FBQ0Q7QUFDRjs7QUFFRDs7OztBQUlBLFNBQU9nckIsZUFBUCxDQUF3Qmh6QyxVQUF4QixFQUFvQztBQUNsQyxVQUFNLEVBQUVQLE9BQUYsS0FBY08sVUFBcEI7QUFDQSxRQUFJLENBQUNQLFFBQVFuRyxNQUFiLEVBQXFCO0FBQ25CO0FBQ0Q7O0FBRUQsUUFBSTI1QyxpQkFBaUIsSUFBckI7QUFDQSxRQUFJQyxnQkFBZ0IsSUFBcEI7O0FBRUEsUUFBSWx6QyxXQUFXbXpDLFdBQVgsSUFBMEJuekMsV0FBV216QyxXQUFYLENBQXVCNzVDLE1BQXJELEVBQTZEO0FBQzNEO0FBQ0FtRyxjQUFROUUsT0FBUixDQUFnQnBFLEtBQWhCLENBQXNCa0osT0FBdEIsRUFBK0JPLFdBQVdtekMsV0FBMUM7QUFDRDs7QUFFRDtBQUNBLFNBQUssSUFBSS81QyxJQUFJLENBQVIsRUFBV2EsTUFBTXdGLFFBQVFuRyxNQUE5QixFQUFzQ0YsSUFBSWEsR0FBMUMsRUFBK0NiLEdBQS9DLEVBQW9EO0FBQ2xELFlBQU13TCxVQUFVbkYsUUFBUXJHLENBQVIsQ0FBaEI7QUFDQSxVQUFJd0wsUUFBUTBDLFVBQVosRUFBd0I7QUFDdEIyckMseUJBQWlCNzVDLENBQWpCO0FBQ0E7QUFDRDtBQUNGOztBQUVEO0FBQ0EsU0FBSyxJQUFJQSxJQUFJcUcsUUFBUW5HLE1BQVIsR0FBaUIsQ0FBOUIsRUFBaUNGLElBQUksQ0FBckMsRUFBd0NBLEdBQXhDLEVBQTZDO0FBQzNDLFlBQU13TCxVQUFVbkYsUUFBUXJHLENBQVIsQ0FBaEI7O0FBRUEsVUFBSXdMLFFBQVEwQyxVQUFaLEVBQXdCO0FBQ3RCNHJDLHdCQUFnQjk1QyxDQUFoQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJNjVDLG1CQUFtQixDQUF2QixFQUEwQjtBQUN4Qnh6QyxjQUFRd0YsTUFBUixDQUFlLENBQWYsRUFBa0JndUMsaUJBQWlCLENBQW5DO0FBQ0Q7O0FBRURqekMsZUFBV1AsT0FBWCxHQUFxQkEsUUFBUW5CLEtBQVIsQ0FBYyxDQUFkLEVBQWlCNDBDLGFBQWpCLENBQXJCO0FBQ0EsVUFBTUUsT0FBTzN6QyxRQUFRbkIsS0FBUixDQUFjNDBDLGFBQWQsQ0FBYjtBQUNBLFFBQUlsekMsV0FBV216QyxXQUFmLEVBQTRCO0FBQzFCbnpDLGlCQUFXbXpDLFdBQVgsQ0FBdUI1NUMsSUFBdkIsQ0FBNEJoRCxLQUE1QixDQUFrQ3lKLFdBQVdtekMsV0FBN0MsRUFBMERDLElBQTFEO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQXB6QyxpQkFBV216QyxXQUFYLEdBQXlCQyxJQUF6QjtBQUNEO0FBQ0Y7QUF0S2dDO2tCQUFkdEIsYTs7Ozs7Ozs7Ozs7Ozs7QUNsQnJCOzs7O0FBQ0E7O0FBQ0E7Ozs7OztBQUNBLE1BQU11QixtQkFBbUIzeUMsc0JBQU93MUIsZ0JBQWhDOztBQUVBLE1BQU1vZCxTQUFOLFNBQXdCVixrQkFBeEIsQ0FBK0I7QUFDN0I5MEMsY0FBYThZLE1BQWIsRUFBcUI7QUFDbkIsUUFBSSxDQUFDQSxPQUFPMjhCLFNBQVosRUFBdUI7QUFDckIzOEIsYUFBTzI4QixTQUFQLEdBQW1CLGNBQW5CO0FBQ0Q7QUFDRCxVQUFNMzhCLE1BQU47QUFDQSxTQUFLN2MsT0FBTCxHQUFlLElBQUlzMUIsc0JBQUosQ0FBWWdrQixnQkFBWixDQUFmO0FBQ0EsU0FBS0csVUFBTDtBQUNEOztBQUVEMzBDLFVBQVM7QUFDUCxTQUFLNDBDLE9BQUw7QUFDQSxTQUFLMTVDLE9BQUwsQ0FBYWxDLElBQWI7QUFDQSxTQUFLNjdDLEdBQUwsQ0FBUzFsQixJQUFULENBQWMsQ0FBZDtBQUNBLFVBQU1udkIsS0FBTixDQUFZLEtBQUsrWCxNQUFMLENBQVltRSxHQUF4QjtBQUNBLFNBQUttaUIsSUFBTDtBQUNEOztBQUVEeVcsZ0JBQWVELEdBQWYsRUFBb0I7QUFDbEIsVUFBTTNCLFNBQVMsSUFBZjtBQUNBMkIsUUFBSTczQyxJQUFKLENBQVM2RSxzQkFBT0YsWUFBUCxDQUFvQjJ0QixZQUE3QixFQUEyQyxNQUFNO0FBQy9DeWtCLHlCQUFPZ0IsSUFBUCxDQUFZQyxRQUFaLENBQXFCOUIsT0FBTytCLElBQTVCLEVBQWtDLGtCQUFsQztBQUNBLFVBQUksQ0FBQ2xCLG1CQUFPZ0IsSUFBUCxDQUFZRyxPQUFaLENBQW9CLEtBQUtELElBQXpCLEVBQStCLFNBQS9CLENBQUwsRUFBZ0Q7QUFDOUMsY0FBTUUsT0FBT3BCLG1CQUFPZ0IsSUFBUCxDQUFZSyxTQUFaLENBQXNCLFNBQXRCLEVBQWlDLE1BQWpDLEVBQXlDLEVBQXpDLEVBQTZDLGVBQTdDLENBQWI7QUFDQWxDLGVBQU9tQyxRQUFQLENBQWdCalYsV0FBaEIsQ0FBNEIrVSxJQUE1QjtBQUNEO0FBQ0YsS0FORDs7QUFRQU4sUUFBSTczQyxJQUFKLENBQVM2RSxzQkFBT3VsQixhQUFQLENBQXFCMEIsZUFBOUIsRUFBK0MsTUFBTTtBQUNuRDtBQUNBLFVBQUksQ0FBQ29xQixPQUFPNVIsTUFBWixFQUFvQjtBQUNsQixjQUFNZ1UsUUFBUTNTLFlBQVksTUFBTTtBQUM5QixnQkFBTWwzQixNQUFNeW5DLE9BQU9xQyxnQkFBUCxHQUEwQixDQUExQixDQUFaO0FBQ0EsY0FBSXZ3QyxLQUFLUSxHQUFMLENBQVMwdEMsT0FBTzFWLFdBQVAsR0FBcUIveEIsR0FBOUIsSUFBcUMsR0FBekMsRUFBOEM7QUFDNUN5bkMsbUJBQU83NEMsSUFBUCxDQUFZLE9BQVo7QUFDQXNkLG1CQUFPaXNCLGFBQVAsQ0FBcUIwUixLQUFyQjtBQUNEO0FBQ0YsU0FOYSxFQU1YLEdBTlcsQ0FBZDtBQU9EO0FBQ0YsS0FYRDtBQVlBVCxRQUFJdjRDLEVBQUosQ0FBT3VGLHNCQUFPcTFCLGNBQVAsQ0FBc0JDLGlCQUE3QixFQUFpRGlELE1BQUQsSUFBWTtBQUMxRCxVQUFJQSxNQUFKLEVBQVk7QUFDVixhQUFLa0UsS0FBTDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtELElBQUw7QUFDRDtBQUNGLEtBTkQ7QUFPRDs7QUFFRHNXLGVBQWM7QUFDWixTQUFLcjRDLEVBQUwsQ0FBUSxZQUFSLEVBQXNCLE1BQU07QUFDMUIsV0FBSzIzQyxRQUFMO0FBQ0QsS0FGRDs7QUFJQSxTQUFLMzNDLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLE1BQU07QUFDdkIsWUFBTStwQixPQUFPLEtBQUttWCxXQUFsQjtBQUNBLFlBQU0wUSxRQUFRLEtBQUtxSCxnQkFBTCxFQUFkO0FBQ0EsVUFBSWx2QixPQUFPNm5CLE1BQU0sQ0FBTixDQUFQLElBQW1CN25CLE9BQU82bkIsTUFBTSxDQUFOLENBQTlCLEVBQXdDO0FBQ3RDLGFBQUsyRyxHQUFMLENBQVMxbEIsSUFBVCxDQUFjLEtBQUtxTyxXQUFuQjtBQUNEO0FBQ0YsS0FORDtBQU9EOztBQUVEb1gsWUFBVztBQUNULFVBQU1DLE1BQU0sS0FBSzM1QyxPQUFMLENBQWFzOUIsUUFBYixDQUFzQixnQkFBdEIsRUFBd0NnZCx1QkFBeEMsRUFBNkMsSUFBN0MsQ0FBWjtBQUNBLFNBQUtWLGFBQUwsQ0FBbUJELEdBQW5CO0FBQ0EsU0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0Q7O0FBRUR4VyxTQUFRO0FBQ04sUUFBSSxLQUFLb1gsU0FBTCxJQUFrQixLQUFLblUsTUFBM0IsRUFBbUM7QUFDakMsV0FBS29VLFFBQUw7QUFDQSxXQUFLeDZDLE9BQUwsR0FBZSxJQUFJczFCLHNCQUFKLENBQVlna0IsZ0JBQVosQ0FBZjtBQUNBLFlBQU1LLE1BQU0sS0FBSzM1QyxPQUFMLENBQWFzOUIsUUFBYixDQUFzQixnQkFBdEIsRUFBd0NnZCx1QkFBeEMsRUFBNkMsSUFBN0MsQ0FBWjtBQUNBLFdBQUtWLGFBQUwsQ0FBbUJELEdBQW5CO0FBQ0EsV0FBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsV0FBSzM1QyxPQUFMLENBQWFsQyxJQUFiO0FBQ0EsV0FBS2k3QyxRQUFMO0FBQ0EsWUFBTWowQyxLQUFOO0FBQ0EsWUFBTXErQixJQUFOO0FBQ0QsS0FWRCxNQVVPO0FBQ0wsWUFBTUEsSUFBTjtBQUNEO0FBQ0Y7O0FBRURDLFVBQVM7QUFDUCxVQUFNQSxLQUFOO0FBQ0EsUUFBSSxLQUFLdVcsR0FBVCxFQUFjO0FBQ1osV0FBS0EsR0FBTCxDQUFTdlcsS0FBVDtBQUNEO0FBQ0Y7O0FBRUQyVixXQUFVNXRCLE9BQU8sS0FBS21YLFdBQXRCLEVBQW1DO0FBQ2pDLFFBQUksS0FBS3FYLEdBQVQsRUFBYztBQUNaLFdBQUtBLEdBQUwsQ0FBUzFsQixJQUFULENBQWM5SSxJQUFkO0FBQ0Q7QUFDRjtBQUNEdm1CLFlBQVc7QUFDVCxTQUFLNDFDLFFBQUw7QUFDQSxVQUFNNTFDLE9BQU47QUFDRDs7QUFFRDQxQyxhQUFZO0FBQ1YsU0FBS3g2QyxPQUFMLENBQWE0RSxPQUFiO0FBQ0EsU0FBSyswQyxHQUFMLEdBQVcsSUFBWDtBQUNBLFNBQUszNUMsT0FBTCxHQUFlLElBQWY7QUFDRDs7QUFFRCxNQUFJc1IsR0FBSixHQUFXO0FBQ1QsV0FBTyxLQUFLbXBDLFVBQVo7QUFDRDs7QUFFRCxNQUFJbnBDLEdBQUosQ0FBUzBQLEdBQVQsRUFBYztBQUNaLFNBQUtnM0IsTUFBTCxDQUFZbjdCLE1BQVosQ0FBbUJtRSxHQUFuQixHQUF5QkEsR0FBekI7QUFDQSxRQUFJLENBQUMsS0FBS29sQixNQUFWLEVBQWtCO0FBQ2hCLFdBQUtoRCxLQUFMO0FBQ0EsV0FBS3RoQyxJQUFMLENBQVUsT0FBVixFQUFtQixNQUFNO0FBQ3ZCLGFBQUtnRCxLQUFMLENBQVdrYyxHQUFYO0FBQ0QsT0FGRDtBQUdBLFdBQUtsZixJQUFMLENBQVUsU0FBVixFQUFxQixNQUFNO0FBQ3pCLGFBQUtxaEMsSUFBTDtBQUNELE9BRkQ7QUFHRCxLQVJELE1BUU87QUFDTCxXQUFLcitCLEtBQUwsQ0FBV2tjLEdBQVg7QUFDRDtBQUNELFNBQUtsZixJQUFMLENBQVUsU0FBVixFQUFxQixNQUFNO0FBQ3pCLFdBQUt3Z0MsV0FBTCxHQUFtQixDQUFuQjtBQUNELEtBRkQ7QUFHRDtBQWhJNEI7O0FBbUkvQnZrQyxPQUFPQyxPQUFQLEdBQWlCdTdDLFNBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElBLGFBQWEsbUNBQW1DLEVBQUUsSSIsImZpbGUiOiJtb2JpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG4iLCIvLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUiA9IHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyA/IFJlZmxlY3QgOiBudWxsXG52YXIgUmVmbGVjdEFwcGx5ID0gUiAmJiB0eXBlb2YgUi5hcHBseSA9PT0gJ2Z1bmN0aW9uJ1xuICA/IFIuYXBwbHlcbiAgOiBmdW5jdGlvbiBSZWZsZWN0QXBwbHkodGFyZ2V0LCByZWNlaXZlciwgYXJncykge1xuICAgIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbCh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKTtcbiAgfVxuXG52YXIgUmVmbGVjdE93bktleXNcbmlmIChSICYmIHR5cGVvZiBSLm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdE93bktleXMgPSBSLm93bktleXNcbn0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpXG4gICAgICAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSk7XG4gIH07XG59IGVsc2Uge1xuICBSZWZsZWN0T3duS2V5cyA9IGZ1bmN0aW9uIFJlZmxlY3RPd25LZXlzKHRhcmdldCkge1xuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBQcm9jZXNzRW1pdFdhcm5pbmcod2FybmluZykge1xuICBpZiAoY29uc29sZSAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybih3YXJuaW5nKTtcbn1cblxudmFyIE51bWJlcklzTmFOID0gTnVtYmVyLmlzTmFOIHx8IGZ1bmN0aW9uIE51bWJlcklzTmFOKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgRXZlbnRFbWl0dGVyLmluaXQuY2FsbCh0aGlzKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gRXZlbnRFbWl0dGVyO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gJGdldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gJGdldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9ICRnZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICBpZiAoIXRoaXMuZmlyZWQpIHtcbiAgICB0aGlzLnRhcmdldC5yZW1vdmVMaXN0ZW5lcih0aGlzLnR5cGUsIHRoaXMud3JhcEZuKTtcbiAgICB0aGlzLmZpcmVkID0gdHJ1ZTtcbiAgICBSZWZsZWN0QXBwbHkodGhpcy5saXN0ZW5lciwgdGhpcy50YXJnZXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9vbmNlV3JhcCh0YXJnZXQsIHR5cGUsIGxpc3RlbmVyKSB7XG4gIHZhciBzdGF0ZSA9IHsgZmlyZWQ6IGZhbHNlLCB3cmFwRm46IHVuZGVmaW5lZCwgdGFyZ2V0OiB0YXJnZXQsIHR5cGU6IHR5cGUsIGxpc3RlbmVyOiBsaXN0ZW5lciB9O1xuICB2YXIgd3JhcHBlZCA9IG9uY2VXcmFwcGVyLmJpbmQoc3RhdGUpO1xuICB3cmFwcGVkLmxpc3RlbmVyID0gbGlzdGVuZXI7XG4gIHN0YXRlLndyYXBGbiA9IHdyYXBwZWQ7XG4gIHJldHVybiB3cmFwcGVkO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHR5cGUsIGxpc3RlbmVyKSB7XG4gIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgfVxuICB0aGlzLm9uKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucHJlcGVuZE9uY2VMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZE9uY2VMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJsaXN0ZW5lclwiIGFyZ3VtZW50IG11c3QgYmUgb2YgdHlwZSBGdW5jdGlvbi4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBUcmFjazogcmVxdWlyZSgnLi9zcmMvdHJhY2snKS5kZWZhdWx0LFxuICBUcmFja3M6IHJlcXVpcmUoJy4vc3JjL3RyYWNrJykuVHJhY2tzLFxuICBBdWRpb1RyYWNrOiByZXF1aXJlKCcuL3NyYy90cmFjaycpLkF1ZGlvVHJhY2ssXG4gIFZpZGVvVHJhY2s6IHJlcXVpcmUoJy4vc3JjL3RyYWNrJykuVmlkZW9UcmFjayxcblxuICBYZ0J1ZmZlcjogcmVxdWlyZSgnLi9zcmMvYnVmZmVyJykuWGdCdWZmZXIsXG4gIFJlbXV4QnVmZmVyOiByZXF1aXJlKCcuL3NyYy9idWZmZXInKS5SZW11eEJ1ZmZlcixcblxuICBQcmVTb3VyY2U6IHJlcXVpcmUoJy4vc3JjL3ByZXNvdWNlJykuZGVmYXVsdFxufTtcbiIsImV4cG9ydCBjbGFzcyBYZ0J1ZmZlciB7XG4gIC8qKlxuICAgKiBBIGJ1ZmZlciB0byBzdG9yZSBsb2FkZWQgZGF0YS5cbiAgICpcbiAgICogQGNsYXNzIExvYWRlckJ1ZmZlclxuICAgKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIC0gT3B0aW9uYWwgdGhlIGJ1ZmZlciBzaXplXG4gICAqL1xuICBjb25zdHJ1Y3RvciAobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGggfHwgMFxuICAgIHRoaXMuaGlzdG9yeUxlbiA9IGxlbmd0aCB8fCAwXG4gICAgdGhpcy5hcnJheSA9IFtdXG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gIH1cblxuICAvKipcbiAgICogVGhlIGZ1bmN0aW9uIHRvIHB1c2ggZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGRhdGEgLSBUaGUgZGF0YSB0byBwdXNoIGludG8gdGhlIGJ1ZmZlclxuICAgKi9cbiAgcHVzaCAoZGF0YSkge1xuICAgIHRoaXMuYXJyYXkucHVzaChkYXRhKVxuICAgIHRoaXMubGVuZ3RoICs9IGRhdGEuYnl0ZUxlbmd0aFxuICAgIHRoaXMuaGlzdG9yeUxlbiArPSBkYXRhLmJ5dGVMZW5ndGhcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZnVuY3Rpb24gdG8gc2hpZnQgZGF0YS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIFRoZSBzaXplIG9mIHNoaWZ0LlxuICAgKi9cbiAgc2hpZnQgKGxlbmd0aCkge1xuICAgIGlmICh0aGlzLmFycmF5Lmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheSgwKVxuICAgIH1cblxuICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NoaWZ0QnVmZmVyKClcbiAgICB9XG4gICAgaWYgKCh0aGlzLm9mZnNldCArIGxlbmd0aCkgPT09IHRoaXMuYXJyYXlbMF0ubGVuZ3RoKSB7XG4gICAgICBsZXQgcmV0ID0gdGhpcy5hcnJheVswXS5zbGljZSh0aGlzLm9mZnNldCwgdGhpcy5vZmZzZXQgKyBsZW5ndGgpXG4gICAgICB0aGlzLm9mZnNldCA9IDBcbiAgICAgIHRoaXMuYXJyYXkuc2hpZnQoKVxuICAgICAgdGhpcy5sZW5ndGggLT0gbGVuZ3RoXG4gICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgaWYgKCh0aGlzLm9mZnNldCArIGxlbmd0aCkgPCB0aGlzLmFycmF5WzBdLmxlbmd0aCkge1xuICAgICAgbGV0IHJldCA9IHRoaXMuYXJyYXlbMF0uc2xpY2UodGhpcy5vZmZzZXQsIHRoaXMub2Zmc2V0ICsgbGVuZ3RoKVxuICAgICAgdGhpcy5vZmZzZXQgKz0gbGVuZ3RoXG4gICAgICB0aGlzLmxlbmd0aCAtPSBsZW5ndGhcbiAgICAgIHJldHVybiByZXRcbiAgICB9XG5cbiAgICBsZXQgcmV0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIGxldCB0bXBvZmYgPSAwXG4gICAgd2hpbGUgKHRoaXMuYXJyYXkubGVuZ3RoID4gMCAmJiBsZW5ndGggPiAwKSB7XG4gICAgICBpZiAoKHRoaXMub2Zmc2V0ICsgbGVuZ3RoKSA8IHRoaXMuYXJyYXlbMF0ubGVuZ3RoKSB7XG4gICAgICAgIGxldCB0bXAgPSB0aGlzLmFycmF5WzBdLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLm9mZnNldCArIGxlbmd0aClcbiAgICAgICAgcmV0LnNldCh0bXAsIHRtcG9mZilcbiAgICAgICAgdGhpcy5vZmZzZXQgKz0gbGVuZ3RoXG4gICAgICAgIHRoaXMubGVuZ3RoIC09IGxlbmd0aFxuICAgICAgICBsZW5ndGggPSAwXG4gICAgICAgIGJyZWFrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgdGVtcGxlbmd0aCA9IHRoaXMuYXJyYXlbMF0ubGVuZ3RoIC0gdGhpcy5vZmZzZXRcbiAgICAgICAgcmV0LnNldCh0aGlzLmFycmF5WzBdLnNsaWNlKHRoaXMub2Zmc2V0LCB0aGlzLmFycmF5WzBdLmxlbmd0aCksIHRtcG9mZilcbiAgICAgICAgdGhpcy5hcnJheS5zaGlmdCgpXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgICAgICB0bXBvZmYgKz0gdGVtcGxlbmd0aFxuICAgICAgICB0aGlzLmxlbmd0aCAtPSB0ZW1wbGVuZ3RoXG4gICAgICAgIGxlbmd0aCAtPSB0ZW1wbGVuZ3RoXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXRcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiB0byBjbGVhciB0aGUgYnVmZmVyLlxuICAgKi9cbiAgY2xlYXIgKCkge1xuICAgIHRoaXMuYXJyYXkgPSBbXVxuICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5jbGVhcigpXG4gICAgdGhpcy5oaXN0b3J5TGVuID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIHNoaWZ0IG9uZSB1bml0OEFycmF5LlxuICAgKi9cbiAgX3NoaWZ0QnVmZmVyICgpIHtcbiAgICB0aGlzLmxlbmd0aCAtPSB0aGlzLmFycmF5WzBdLmxlbmd0aFxuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHJldHVybiB0aGlzLmFycmF5LnNoaWZ0KClcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHVpbnQ4IGRhdGEgdG8gbnVtYmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgLSB0aGUgc3RhcnQgcG9zdGlvbi5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCAtIHRoZSBsZW5ndGggb2YgZGF0YS5cbiAgICovXG4gIHRvSW50IChzdGFydCwgbGVuZ3RoKSB7XG4gICAgbGV0IHJldEludCA9IDBcbiAgICBsZXQgaSA9IHRoaXMub2Zmc2V0ICsgc3RhcnRcbiAgICB3aGlsZSAoaSA8IHRoaXMub2Zmc2V0ICsgbGVuZ3RoICsgc3RhcnQpIHtcbiAgICAgIGlmIChpIDwgdGhpcy5hcnJheVswXS5sZW5ndGgpIHtcbiAgICAgICAgcmV0SW50ID0gcmV0SW50ICogMjU2ICsgdGhpcy5hcnJheVswXVtpXVxuICAgICAgfSBlbHNlIGlmICh0aGlzLmFycmF5WzFdKSB7XG4gICAgICAgIHJldEludCA9IHJldEludCAqIDI1NiArIHRoaXMuYXJyYXlbMV1baSAtIHRoaXMuYXJyYXlbMF0ubGVuZ3RoXVxuICAgICAgfVxuXG4gICAgICBpKytcbiAgICB9XG4gICAgcmV0dXJuIHJldEludFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBSZW11eEJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLnZpZGVvID0gW11cbiAgICB0aGlzLmF1ZGlvID0gW11cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMudmlkZW8gPSBbXVxuICAgIHRoaXMuYXVkaW8gPSBbXVxuICB9XG59XG4iLCJjbGFzcyBTb3VyY2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5taW1ldHlwZSA9ICcnO1xuICAgIHRoaXMuaW5pdCA9IG51bGw7XG4gICAgdGhpcy5kYXRhID0gW107XG4gIH1cbn1cblxuY2xhc3MgUHJlU291cmNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuc291cmNlcyA9IHt9O1xuICB9XG5cbiAgZ2V0U291cmNlIChzb3VyY2UpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VyY2VzW3NvdXJjZV07XG4gIH1cblxuICBjcmVhdGVTb3VyY2UgKG5hbWUpIHtcbiAgICB0aGlzLnNvdXJjZXNbbmFtZV0gPSBuZXcgU291cmNlKCk7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlc1tuYW1lXTtcbiAgfVxuXG4gIGNsZWFyICgpIHtcbiAgICB0aGlzLnNvdXJjZXMgPSB7fTtcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc291cmNlcyA9IHt9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZVNvdXJjZTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLmlkID0gLTFcbiAgICB0aGlzLnNlcXVlbmNlTnVtYmVyID0gMFxuICAgIHRoaXMuc2FtcGxlcyA9IFtdXG4gICAgdGhpcy5kcm9wcGVkU2FtcGxlcyA9IFtdXG4gICAgdGhpcy5sZW5ndGggPSAwXG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgdGhlIHRyYWNrLlxuICAgKi9cbiAgcmVzZXQgKCkge1xuICAgIHRoaXMuc2VxdWVuY2VOdW1iZXIgPSAwXG4gICAgdGhpcy5zYW1wbGVzID0gW11cbiAgICB0aGlzLmxlbmd0aCA9IDBcbiAgfVxuICAvKipcbiAgICogZGVzdHJveSB0aGUgdHJhY2suXG4gICAqL1xuICBkaXN0cm95ICgpIHtcbiAgICB0aGlzLnJlc2V0KClcbiAgICB0aGlzLmlkID0gLTFcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXVkaW9UcmFjayBleHRlbmRzIFRyYWNrIHtcbiAgLyoqXG4gICAqIFRoZSBjb25zdHJ1Y3RvciBmb3IgYXVkaW8gdHJhY2suXG4gICAqL1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuVEFHID0gJ0F1ZGlvVHJhY2snXG4gICAgdGhpcy50eXBlID0gJ2F1ZGlvJ1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1RyYWNrIGV4dGVuZHMgVHJhY2sge1xuICAvKipcbiAgICogVGhlIGNvbnN0cnVjdG9yIGZvciB2aWRlbyB0cmFjay5cbiAgICovXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5UQUcgPSAnVmlkZW9UcmFjaydcbiAgICB0aGlzLnR5cGUgPSAndmlkZW8nXG4gICAgdGhpcy5kcm9wcGVkID0gMFxuICB9XG4gIC8qKlxuICAgKiByZXNldCB0aGUgdmlkZW8gdHJhY2suXG4gICAqL1xuICByZXNldCAoKSB7XG4gICAgdGhpcy5zZXF1ZW5jZU51bWJlciA9IDBcbiAgICB0aGlzLnNhbXBsZXMgPSBbXVxuICAgIHRoaXMubGVuZ3RoID0gMFxuICAgIHRoaXMuZHJvcHBlZCA9IDBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHJhY2tzIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuYXVkaW9UcmFjayA9IG51bGxcbiAgICB0aGlzLnZpZGVvVHJhY2sgPSBudWxsXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmF1ZGlvVHJhY2sgPSBudWxsXG4gICAgdGhpcy52aWRlb1RyYWNrID0gbnVsbFxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgTmFsdW5pdDogcmVxdWlyZSgnLi9zcmMvaDI2NC9uYWx1bml0JykuZGVmYXVsdCxcbiAgU3BzUGFyc2VyOiByZXF1aXJlKCcuL3NyYy9oMjY0L25hbHVuaXQvc3BzJykuZGVmYXVsdCxcblxuICBDb21wYXRpYmlsaXR5OiByZXF1aXJlKCcuL3NyYy9jb21wYXRpYmlsaXR5JykuZGVmYXVsdFxufTtcbiIsIlxuY2xhc3MgQUFDIHtcblxuICBzdGF0aWMgZ2V0U2lsZW50RnJhbWUoY29kZWMsIGNoYW5uZWxDb3VudCkge1xuICAgIGlmIChjb2RlYyA9PT0gJ21wNGEuNDAuMicpIHtcbiAgICAgIC8vIGhhbmRsZSBMQy1BQUNcbiAgICAgIGlmIChjaGFubmVsQ291bnQgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIzLCAweDgwXSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gMikge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MjEsIDB4MDAsIDB4NDksIDB4OTAsIDB4MDIsIDB4MTksIDB4MDAsIDB4MjMsIDB4ODBdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAzKSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4ZV0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFsweDAwLCAweGM4LCAweDAwLCAweDgwLCAweDIwLCAweDg0LCAweDAxLCAweDI2LCAweDQwLCAweDA4LCAweDY0LCAweDAwLCAweDgwLCAweDJjLCAweDgwLCAweDA4LCAweDAyLCAweDM4XSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5uZWxDb3VudCA9PT0gNSkge1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4YzgsIDB4MDAsIDB4ODAsIDB4MjAsIDB4ODQsIDB4MDEsIDB4MjYsIDB4NDAsIDB4MDgsIDB4NjQsIDB4MDAsIDB4ODIsIDB4MzAsIDB4MDQsIDB4OTksIDB4MDAsIDB4MjEsIDB4OTAsIDB4MDIsIDB4MzhdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSA2KSB7XG4gICAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgwMCwgMHhiMiwgMHgwMCwgMHgyMCwgMHgwOCwgMHhlMF0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYW5kbGUgSEUtQUFDIChtcDRhLjQwLjUgLyBtcDRhLjQwLjI5KVxuICAgICAgaWYgKGNoYW5uZWxDb3VudCA9PT0gMSkge1xuICAgICAgICAvLyBmZm1wZWcgLXkgLWYgbGF2ZmkgLWkgXCJhZXZhbHNyYz0wOmQ9MC4wNVwiIC1jOmEgbGliZmRrX2FhYyAtcHJvZmlsZTphIGFhY19oZSAtYjphIDRrIG91dHB1dC5hYWMgJiYgaGV4ZHVtcCAtdiAtZSAnMTYvMSBcIjB4JXgsXCIgXCJcXG5cIicgLXYgb3V0cHV0LmFhY1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MSwgMHg0MCwgMHgyMiwgMHg4MCwgMHhhMywgMHg0ZSwgMHhlNiwgMHg4MCwgMHhiYSwgMHg4LCAweDAsIDB4MCwgMHgwLCAweDFjLCAweDYsIDB4ZjEsIDB4YzEsIDB4YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1YSwgMHg1ZV0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDIpIHtcbiAgICAgICAgLy8gZmZtcGVnIC15IC1mIGxhdmZpIC1pIFwiYWV2YWxzcmM9MHwwOmQ9MC4wNVwiIC1jOmEgbGliZmRrX2FhYyAtcHJvZmlsZTphIGFhY19oZV92MiAtYjphIDRrIG91dHB1dC5hYWMgJiYgaGV4ZHVtcCAtdiAtZSAnMTYvMSBcIjB4JXgsXCIgXCJcXG5cIicgLXYgb3V0cHV0LmFhY1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MSwgMHg0MCwgMHgyMiwgMHg4MCwgMHhhMywgMHg1ZSwgMHhlNiwgMHg4MCwgMHhiYSwgMHg4LCAweDAsIDB4MCwgMHgwLCAweDAsIDB4OTUsIDB4MCwgMHg2LCAweGYxLCAweGExLCAweGEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWVdKTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbm5lbENvdW50ID09PSAzKSB7XG4gICAgICAgIC8vIGZmbXBlZyAteSAtZiBsYXZmaSAtaSBcImFldmFsc3JjPTB8MHwwOmQ9MC4wNVwiIC1jOmEgbGliZmRrX2FhYyAtcHJvZmlsZTphIGFhY19oZV92MiAtYjphIDRrIG91dHB1dC5hYWMgJiYgaGV4ZHVtcCAtdiAtZSAnMTYvMSBcIjB4JXgsXCIgXCJcXG5cIicgLXYgb3V0cHV0LmFhY1xuICAgICAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoWzB4MSwgMHg0MCwgMHgyMiwgMHg4MCwgMHhhMywgMHg1ZSwgMHhlNiwgMHg4MCwgMHhiYSwgMHg4LCAweDAsIDB4MCwgMHgwLCAweDAsIDB4OTUsIDB4MCwgMHg2LCAweGYxLCAweGExLCAweGEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWEsIDB4NWVdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBBQUM7XG4iLCJpbXBvcnQge0VWRU5UU30gZnJvbSAneGdwbGF5ZXItdXRpbHMnXG5pbXBvcnQgQUFDIGZyb20gJy4vYWFjL2FhYy1oZWxwZXInXG5cbmNvbnN0IHtSRU1VWF9FVkVOVFMsIERFTVVYX0VWRU5UU30gPSBFVkVOVFNcblxuY2xhc3MgQ29tcGF0aWJpbGl0eSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLm5leHRBdWRpb0R0cyA9IDAgLy8g5qih5ouf5LiL5LiA5q616Z+z6aKR5pWw5o2u55qEZHRzXG4gICAgdGhpcy5uZXh0VmlkZW9EdHMgPSAwIC8vIOaooeaLn+S4i+S4gOauteinhumikeaVsOaNrueahGR0c1xuXG4gICAgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID0gMCAvLyDkuIrkuIDmrrXpn7PpopHmlbDmja7nmoTplb/luqZcbiAgICB0aGlzLmxhc3RWaWRlb1NhbXBsZXNMZW4gPSAwIC8vIOS4iuS4gOauteinhumikeaVsOaNrueahOmVv+W6plxuXG4gICAgdGhpcy5sYXN0VmlkZW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616Z+z6aKR5pWw5o2u55qE6ZW/5bqmXG4gICAgdGhpcy5sYXN0QXVkaW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616KeG6aKR5pWw5o2u55qE6ZW/5bqmXG5cbiAgICB0aGlzLmFsbEF1ZGlvU2FtcGxlc0NvdW50ID0gMCAvLyDpn7PpopHmgLvmlbDmja7ph48o5Y6f5aeL5binKVxuICAgIHRoaXMuYWxsVmlkZW9TYW1wbGVzQ291bnQgPSAwIC8vIOinhumikeaAu+aVsOaNrumHjyjljp/lp4vluKcpXG5cbiAgICB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlID0gbnVsbFxuICAgIHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgPSBudWxsXG5cbiAgICB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcyA9IFtdIC8vIOihpeWFhemfs+mikeW4p++8iO+8iVxuICAgIHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzID0gW10gLy8g6KGl5YWF6KeG6aKR5bin77yI77yJXG5cbiAgICB0aGlzLl92aWRlb0xhcmdlR2FwID0gMFxuICAgIHRoaXMuX2F1ZGlvTGFyZ2VHYXAgPSAwXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLmJlZm9yZShSRU1VWF9FVkVOVFMuUkVNVVhfTUVESUEsIHRoaXMuZG9GaXguYmluZCh0aGlzKSlcbiAgfVxuXG4gIHJlc2V0ICgpIHtcbiAgICB0aGlzLm5leHRBdWRpb0R0cyA9IG51bGwgLy8g5Lyw566X5LiL5LiA5q616Z+z6aKR5pWw5o2u55qEZHRzXG4gICAgdGhpcy5uZXh0VmlkZW9EdHMgPSBudWxsIC8vIOS8sOeul+S4i+S4gOauteinhumikeaVsOaNrueahGR0c1xuXG4gICAgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID0gMCAvLyDkuIrkuIDmrrXpn7PpopHmlbDmja7nmoTplb/luqZcbiAgICB0aGlzLmxhc3RWaWRlb1NhbXBsZXNMZW4gPSAwIC8vIOS4iuS4gOauteinhumikeaVsOaNrueahOmVv+W6plxuXG4gICAgdGhpcy5sYXN0VmlkZW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616Z+z6aKR5pWw5o2u55qE6ZW/5bqmXG4gICAgdGhpcy5sYXN0QXVkaW9EdHMgPSB1bmRlZmluZWQgLy8g5LiK5LiA5q616KeG6aKR5pWw5o2u55qE6ZW/5bqmXG5cbiAgICAvLyB0aGlzLmFsbEF1ZGlvU2FtcGxlc0NvdW50ID0gMCAvLyDpn7PpopHmgLvmlbDmja7ph48o5Y6f5aeL5binKVxuICAgIC8vIHRoaXMuYWxsVmlkZW9TYW1wbGVzQ291bnQgPSAwIC8vIOinhumikeaAu+aVsOaNrumHjyjljp/lp4vluKcpXG5cbiAgICAvLyB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlID0gbnVsbFxuICAgIC8vIHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgPSBudWxsXG5cbiAgICB0aGlzLmZpbGxlZEF1ZGlvU2FtcGxlcyA9IFtdIC8vIOihpeWFhemfs+mikeW4p++8iO+8iVxuICAgIHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzID0gW10gLy8g6KGl5YWF6KeG6aKR5bin77yI77yJXG4gIH1cblxuICBkb0ZpeCAoKSB7XG4gICAgY29uc3QgeyBpc0ZpcnN0QXVkaW9TYW1wbGVzLCBpc0ZpcnN0VmlkZW9TYW1wbGVzIH0gPSB0aGlzLmdldEZpcnN0U2FtcGxlKClcblxuICAgIC8vIHRoaXMucmVtb3ZlSW52YWxpZFNhbXBsZXMoKVxuXG4gICAgdGhpcy5yZWNvcmRTYW1wbGVzQ291bnQoKVxuXG4gICAgaWYgKHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUpIHtcbiAgICAgIHRoaXMuZml4UmVmU2FtcGxlRHVyYXRpb24odGhpcy52aWRlb1RyYWNrLm1ldGEsIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzKVxuICAgIH1cbiAgICBpZiAodGhpcy5fZmlyc3RBdWRpb1NhbXBsZSkge1xuICAgICAgdGhpcy5maXhSZWZTYW1wbGVEdXJhdGlvbih0aGlzLmF1ZGlvVHJhY2subWV0YSwgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMpXG4gICAgfVxuXG4gICAgY29uc3QgeyBjaGFuZ2VkOiB2aWRlb0NoYW5nZWQsIGNoYW5nZWRJZHg6IHZpZGVvQ2hhbmdlZElkeCB9ID0gQ29tcGF0aWJpbGl0eS5kZXRhY3RDaGFuZ2VTdHJlYW0odGhpcy52aWRlb1RyYWNrLnNhbXBsZXMpXG4gICAgaWYgKHZpZGVvQ2hhbmdlZCAmJiAhaXNGaXJzdEF1ZGlvU2FtcGxlcykge1xuICAgICAgdGhpcy5maXhDaGFuZ2VTdHJlYW1WaWRlbyh2aWRlb0NoYW5nZWRJZHgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZG9GaXhWaWRlbyhpc0ZpcnN0VmlkZW9TYW1wbGVzKVxuICAgIH1cblxuICAgIGNvbnN0IHsgY2hhbmdlZDogYXVkaW9DaGFuZ2VkLCBjaGFuZ2VkSWR4OiBhdWRpb0NoYW5nZWRJZHggfSA9IENvbXBhdGliaWxpdHkuZGV0YWN0Q2hhbmdlU3RyZWFtKHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzKVxuICAgIGlmIChhdWRpb0NoYW5nZWQpIHtcbiAgICAgIHRoaXMuZml4Q2hhbmdlU3RyZWFtQXVkaW8oYXVkaW9DaGFuZ2VkSWR4KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRvRml4QXVkaW8oaXNGaXJzdEF1ZGlvU2FtcGxlcylcbiAgICB9XG5cbiAgICAvLyB0aGlzLnJlbW92ZUludmFsaWRTYW1wbGVzKClcbiAgfVxuXG4gIGRvRml4VmlkZW8gKGZpcnN0LCBzdHJlYW1DaGFuZ2VTdGFydCkge1xuICAgIGxldCB7c2FtcGxlczogdmlkZW9TYW1wbGVzLCBtZXRhfSA9IHRoaXMudmlkZW9UcmFja1xuXG4gICAgaWYgKG1ldGEuZnJhbWVSYXRlICYmIG1ldGEuZnJhbWVSYXRlLmZpeGVkID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdmlkZW9TYW1wbGVzIHx8ICF2aWRlb1NhbXBsZXMubGVuZ3RoIHx8ICF0aGlzLl9maXJzdFZpZGVvU2FtcGxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgdmlkZW8gbGFzdFNhbXBsZSwgJHt2aWRlb1NhbXBsZXNbdmlkZW9TYW1wbGVzLmxlbmd0aCAtIDFdLmR0c31gKVxuXG4gICAgY29uc3QgZmlyc3RTYW1wbGUgPSB2aWRlb1NhbXBsZXNbMF1cblxuICAgIGNvbnN0IHNhbXBsZXNMZW4gPSB2aWRlb1NhbXBsZXMubGVuZ3RoO1xuXG4gICAgLy8gc3RlcDAu5L+u5aSNaGxz5rWB5Ye6546w5beo5aSnZ2Fw77yM6ZyA6KaB5by65Yi26YeN5a6a5L2N55qE6Zeu6aKYXG4gICAgaWYgKHRoaXMuX3ZpZGVvTGFyZ2VHYXAgPiAwKSB7XG4gICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAodmlkZW9TYW1wbGVzLCB0aGlzLl92aWRlb0xhcmdlR2FwKVxuICAgIH1cblxuICAgIGlmIChmaXJzdFNhbXBsZS5kdHMgIT09IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUuZHRzICYmIChzdHJlYW1DaGFuZ2VTdGFydCB8fCBDb21wYXRpYmlsaXR5LmRldGVjdExhcmdlR2FwKHRoaXMubmV4dFZpZGVvRHRzLCBmaXJzdFNhbXBsZSkpKSB7XG4gICAgICBpZiAoc3RyZWFtQ2hhbmdlU3RhcnQpIHtcbiAgICAgICAgdGhpcy5uZXh0VmlkZW9EdHMgPSBzdHJlYW1DaGFuZ2VTdGFydCAvLyBGSVg6IEhsc+S4remAlOWIh2NvZGVj77yM5Zyo5aaC5p6c55u05o6lc2Vla+WIsOWQjumdoueahOeCueS8muWvvOiHtGxhcmdlR2Fw6K6h566X5aSx6LSlXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ZpZGVvTGFyZ2VHYXAgPSB0aGlzLm5leHRWaWRlb0R0cyAtIGZpcnN0U2FtcGxlLmR0c1xuICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKHZpZGVvU2FtcGxlcywgdGhpcy5fdmlkZW9MYXJnZUdhcClcbiAgICB9XG5cbiAgICBjb25zdCBmaXJzdER0cyA9IGZpcnN0U2FtcGxlLmR0c1xuXG4gICAgLy8gc3RlcDEuIOS/ruWkjeS4jmF1ZGlv6aaW5bin5beu6Led5aSq5aSn55qE6Zeu6aKYXG4gICAgaWYgKGZpcnN0ICYmIHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUpIHtcbiAgICAgIGNvbnN0IHZpZGVvRmlyc3REdHMgPSB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmR0c1xuICAgICAgY29uc3QgYXVkaW9GaXJzdER0cyA9IHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUuZHRzXG4gICAgICBjb25zdCBnYXAgPSB2aWRlb0ZpcnN0RHRzIC0gYXVkaW9GaXJzdER0c1xuICAgICAgaWYgKGdhcCA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgY29uc3QgZmlsbENvdW50ID0gTWF0aC5mbG9vcihnYXAgLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbENvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBjbG9uZWRGaXJzdFNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIGZpcnN0U2FtcGxlKSAvLyDop4bpopHlpLTpg6jluKfnvLrlpLHpnIDopoHlpI3liLbnrKzkuIDluKdcbiAgICAgICAgICAvLyDph43mlrDorqHnrpdzYW1wbGXnmoRkdHPlkoxwdHNcbiAgICAgICAgICBjbG9uZWRGaXJzdFNhbXBsZS5kdHMgPSB2aWRlb0ZpcnN0RHRzIC0gKGkgKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgICBjbG9uZWRGaXJzdFNhbXBsZS5wdHMgPSBjbG9uZWRGaXJzdFNhbXBsZS5kdHMgKyBjbG9uZWRGaXJzdFNhbXBsZS5jdHNcblxuICAgICAgICAgIHZpZGVvU2FtcGxlcy51bnNoaWZ0KGNsb25lZEZpcnN0U2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IGNsb25lZEZpcnN0U2FtcGxlLmR0cyxcbiAgICAgICAgICAgIHNpemU6IGNsb25lZEZpcnN0U2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZ2FwXG4gICAgLy8gc3RlcDIuIOS/ruWkjXNhbXBsZXPmrrXkuYvpl7TnmoTpl7Tot53pl67popjjgIFcbiAgICBpZiAodGhpcy5uZXh0VmlkZW9EdHMpIHtcbiAgICAgIC8vIHN0ZXAxLiDlpITnkIZzYW1wbGVz5q615LmL6Ze055qE5Lii5bin5oOF5Ya1XG4gICAgICAvLyDlvZPlj5HnjrBkdXJhdGlvbuW3rui3neWkp+S6jjLluKfml7bov5vooYzooaXluKdcbiAgICAgIGdhcCA9IGZpcnN0RHRzIC0gdGhpcy5uZXh0VmlkZW9EdHNcbiAgICAgIGNvbnN0IGFic0dhcCA9IE1hdGguYWJzKGdhcClcbiAgICAgIGlmIChnYXAgPiAoMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICAgIGNvbnN0IGZpbGxGcmFtZUNvdW50ID0gTWF0aC5mbG9vcihnYXAgLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsbEZyYW1lQ291bnQ7IGkrKykge1xuICAgICAgICAgIGNvbnN0IGNsb25lZFNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIHZpZGVvU2FtcGxlc1swXSlcbiAgICAgICAgICBjb25zdCBjb21wdXRlZCA9IGZpcnN0RHRzIC0gKGkgKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb25cblxuICAgICAgICAgIGNsb25lZFNhbXBsZS5kdHMgPSBjb21wdXRlZCA+IHRoaXMubmV4dFZpZGVvRHRzID8gY29tcHV0ZWQgOiB0aGlzLm5leHRWaWRlb0R0cyAvLyDooaXnmoTnrKzkuIDluKfkuIDlrpropoHmmK9uZXh0VmlkZW9EdHNcbiAgICAgICAgICBjbG9uZWRTYW1wbGUucHRzID0gY2xvbmVkU2FtcGxlLmR0cyArIGNsb25lZFNhbXBsZS5jdHNcblxuICAgICAgICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzLnVuc2hpZnQoY2xvbmVkU2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRWaWRlb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IGNsb25lZFNhbXBsZS5kdHMsXG4gICAgICAgICAgICBzaXplOiBjbG9uZWRTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhYnNHYXAgPD0gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiAmJiBhYnNHYXAgPiAwKSB7XG4gICAgICAgIC8vIOW9k+W3rui3neWcqCst5LiA5bin5LmL6Ze05pe25bCG56ys5LiA5bin55qEZHRz5by66KGM5a6a5L2N5Yiw5pyf5pyb5L2N572uXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfph43lrprkvY3op4bpopHluKdkdHMnLCB2aWRlb1NhbXBsZXNbMF0uZHRzLCB0aGlzLm5leHRWaWRlb0R0cylcbiAgICAgICAgdmlkZW9TYW1wbGVzWzBdLmR0cyA9IHRoaXMubmV4dFZpZGVvRHRzXG4gICAgICAgIHZpZGVvU2FtcGxlc1swXS5vcmlnaW5EdHMgPSB2aWRlb1NhbXBsZXNbMF0uZHRzXG4gICAgICAgIHZpZGVvU2FtcGxlc1swXS5jdHMgPSB2aWRlb1NhbXBsZXNbMF0uY3RzICE9PSB1bmRlZmluZWQgPyB2aWRlb1NhbXBsZXNbMF0uY3RzIDogdmlkZW9TYW1wbGVzWzBdLnB0cyAtIHZpZGVvU2FtcGxlc1swXS5kdHNcbiAgICAgICAgdmlkZW9TYW1wbGVzWzBdLnB0cyA9IHZpZGVvU2FtcGxlc1swXS5kdHMgKyB2aWRlb1NhbXBsZXNbMF0uY3RzXG4gICAgICB9IGVsc2UgaWYgKGdhcCA8IDApIHtcbiAgICAgICAgLy8g5Ye6546w5aSn55qEZ2FwXG4gICAgICAgIENvbXBhdGliaWxpdHkuZG9GaXhMYXJnZUdhcCh2aWRlb1NhbXBsZXMsICgtMSAqIGdhcCkpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGxhc3REdHMgPSB2aWRlb1NhbXBsZXNbdmlkZW9TYW1wbGVzLmxlbmd0aCAtIDFdLmR0cztcblxuICAgIGNvbnN0IGxhc3RTYW1wbGVEdXJhdGlvbiA9IHZpZGVvU2FtcGxlcy5sZW5ndGggPj0gMiA/IGxhc3REdHMgLSB2aWRlb1NhbXBsZXNbdmlkZW9TYW1wbGVzLmxlbmd0aCAtIDJdLmR0cyA6IG1ldGEucmVmU2FtcGxlRHVyYXRpb25cblxuICAgIHRoaXMubGFzdFZpZGVvU2FtcGxlc0xlbiA9IHNhbXBsZXNMZW5cbiAgICB0aGlzLm5leHRWaWRlb0R0cyA9IGxhc3REdHMgKyBsYXN0U2FtcGxlRHVyYXRpb25cbiAgICB0aGlzLmxhc3RWaWRlb0R0cyA9IGxhc3REdHNcblxuICAgIC8vIHN0ZXAyLiDkv67lpI1zYW1wbGXmrrXkuYvlhoXnmoTpl7Tot53pl67pophcbiAgICAvLyBzdGVwMy4g5L+u5aSNc2FtcGxlc+auteWGhemDqOeahGR0c+W8guW4uOmXrumimFxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB2aWRlb1NhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB2aWRlb1NhbXBsZXNbaV1cbiAgICAgIGNvbnN0IG5leHQgPSB2aWRlb1NhbXBsZXNbaSArIDFdXG5cbiAgICAgIGlmICghbmV4dCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHVyYXRpb24gPSBuZXh0LmR0cyAtIGN1cnJlbnQuZHRzO1xuXG4gICAgICBpZiAoZHVyYXRpb24gPiAoMiAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb24pKSB7XG4gICAgICAgIC8vIOS4pOW4p+S5i+mXtOmXtOmalOWkquWkp++8jOmcgOimgeihpeepuueZveW4p1xuICAgICAgICBsZXQgZmlsbEZyYW1lQ291bnQgPSBNYXRoLmZsb29yKGR1cmF0aW9uIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcblxuICAgICAgICBsZXQgZmlsbEZyYW1lSWR4ID0gMFxuICAgICAgICB3aGlsZSAoZmlsbEZyYW1lSWR4IDwgZmlsbEZyYW1lQ291bnQpIHtcbiAgICAgICAgICBjb25zdCBmaWxsRnJhbWUgPSBPYmplY3QuYXNzaWduKHt9LCBuZXh0KVxuICAgICAgICAgIGZpbGxGcmFtZS5kdHMgPSBjdXJyZW50LmR0cyArIChmaWxsRnJhbWVJZHggKyAxKSAqIG1ldGEucmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgICBmaWxsRnJhbWUucHRzID0gZmlsbEZyYW1lLmR0cyArIGZpbGxGcmFtZS5jdHNcbiAgICAgICAgICBpZiAoZmlsbEZyYW1lIDwgbmV4dC5kdHMpIHtcbiAgICAgICAgICAgIHZpZGVvU2FtcGxlcy5zcGxpY2UoaSwgMCwgZmlsbEZyYW1lKVxuXG4gICAgICAgICAgICB0aGlzLmZpbGxlZFZpZGVvU2FtcGxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZHRzOiBmaWxsRnJhbWUuZHRzLFxuICAgICAgICAgICAgICBzaXplOiBmaWxsRnJhbWUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbGxGcmFtZUlkeCsrXG4gICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSB2aWRlb1NhbXBsZXM7XG4gIH1cblxuICBkb0ZpeEF1ZGlvIChmaXJzdCwgc3RyZWFtQ2hhbmdlU3RhcnQpIHtcbiAgICBsZXQge3NhbXBsZXM6IGF1ZGlvU2FtcGxlcywgbWV0YX0gPSB0aGlzLmF1ZGlvVHJhY2tcblxuICAgIGlmICghYXVkaW9TYW1wbGVzIHx8ICFhdWRpb1NhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coYGF1ZGlvIGxhc3RTYW1wbGUsICR7YXVkaW9TYW1wbGVzW2F1ZGlvU2FtcGxlcy5sZW5ndGggLSAxXS5kdHN9YClcblxuICAgIGNvbnN0IHNhbXBsZXNMZW4gPSBhdWRpb1NhbXBsZXMubGVuZ3RoO1xuICAgIGNvbnN0IHNpbGVudEZyYW1lID0gQUFDLmdldFNpbGVudEZyYW1lKG1ldGEuY29kZWMsIG1ldGEuY2hhbm5lbENvdW50KVxuXG4gICAgY29uc3QgZmlyc3RTYW1wbGUgPSB0aGlzLl9maXJzdEF1ZGlvU2FtcGxlXG5cbiAgICBjb25zdCBfZmlyc3RTYW1wbGUgPSBhdWRpb1NhbXBsZXNbMF1cbiAgICAvLyDlr7lhdWRpb1NhbXBsZXPmjInnhadkdHPlgZrmjpLluo9cbiAgICAvLyBhdWRpb1NhbXBsZXMgPSBDb21wYXRpYmlsaXR5LnNvcnRBdWRpb1NhbXBsZXMoYXVkaW9TYW1wbGVzKVxuICAgIGlmICh0aGlzLl9hdWRpb0xhcmdlR2FwID4gMCkge1xuICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKGF1ZGlvU2FtcGxlcywgdGhpcy5fYXVkaW9MYXJnZUdhcClcbiAgICB9XG5cbiAgICBpZiAoX2ZpcnN0U2FtcGxlLmR0cyAhPT0gdGhpcy5fZmlyc3RBdWRpb1NhbXBsZS5kdHMgJiYgKHN0cmVhbUNoYW5nZVN0YXJ0IHx8IENvbXBhdGliaWxpdHkuZGV0ZWN0TGFyZ2VHYXAodGhpcy5uZXh0QXVkaW9EdHMsIF9maXJzdFNhbXBsZSkpKSB7XG4gICAgICBpZiAoc3RyZWFtQ2hhbmdlU3RhcnQpIHtcbiAgICAgICAgdGhpcy5uZXh0QXVkaW9EdHMgPSBzdHJlYW1DaGFuZ2VTdGFydCAvLyBGSVg6IEhsc+S4remAlOWIh2NvZGVj77yM5Zyo5aaC5p6c55u05o6lc2Vla+WIsOWQjumdoueahOeCueS8muWvvOiHtGxhcmdlR2Fw6K6h566X5aSx6LSlXG4gICAgICB9XG4gICAgICB0aGlzLl9hdWRpb0xhcmdlR2FwID0gdGhpcy5uZXh0QXVkaW9EdHMgLSBfZmlyc3RTYW1wbGUuZHRzXG4gICAgICBDb21wYXRpYmlsaXR5LmRvRml4TGFyZ2VHYXAoYXVkaW9TYW1wbGVzLCB0aGlzLl9hdWRpb0xhcmdlR2FwKVxuICAgIH1cbiAgICAvLyBzdGVwMC4g6aaW5bin5LiOdmlkZW/pppbluKfpl7Tot53lpKfnmoTpl67pophcbiAgICBpZiAodGhpcy5fZmlyc3RWaWRlb1NhbXBsZSAmJiBmaXJzdCkge1xuICAgICAgY29uc3QgdmlkZW9GaXJzdFB0cyA9IHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUucHRzID8gdGhpcy5fZmlyc3RWaWRlb1NhbXBsZS5wdHMgOiB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmR0cyArIHRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUuY3RzXG5cbiAgICAgIGlmIChmaXJzdFNhbXBsZS5kdHMgLSB2aWRlb0ZpcnN0UHRzID4gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikge1xuICAgICAgICBjb25zdCBzaWxlbnRTYW1wbGVDb3VudCA9IE1hdGguZmxvb3IoKGZpcnN0U2FtcGxlLmR0cyAtIHZpZGVvRmlyc3RQdHMpIC8gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbilcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbGVudFNhbXBsZUNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBzaWxlbnRTYW1wbGUgPSB7XG4gICAgICAgICAgICBkYXRhOiBzaWxlbnRGcmFtZSxcbiAgICAgICAgICAgIGRhdGFzaXplOiBzaWxlbnRGcmFtZS5ieXRlTGVuZ3RoLFxuICAgICAgICAgICAgZHRzOiBmaXJzdFNhbXBsZS5kdHMgLSAoaSArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbixcbiAgICAgICAgICAgIGZpbHRlcmVkOiAwXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXVkaW9TYW1wbGVzLnVuc2hpZnQoc2lsZW50U2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IHNpbGVudFNhbXBsZS5kdHMsXG4gICAgICAgICAgICBzaXplOiBzaWxlbnRTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBnYXBcbiAgICBjb25zdCBmaXJzdER0cyA9IGF1ZGlvU2FtcGxlc1swXS5kdHNcblxuICAgIGlmICh0aGlzLm5leHRBdWRpb0R0cykge1xuICAgICAgLy8gc3RlcDEuIOWkhOeQhnNhbXBsZXPmrrXkuYvpl7TnmoTkuKLluKfmg4XlhrVcbiAgICAgIC8vIOW9k+WPkeeOsGR1cmF0aW9u5beu6Led5aSn5LqOMeW4p+aXtui/m+ihjOihpeW4p1xuICAgICAgZ2FwID0gZmlyc3REdHMgLSB0aGlzLm5leHRBdWRpb0R0c1xuICAgICAgY29uc3QgYWJzR2FwID0gTWF0aC5hYnMoZ2FwKVxuXG4gICAgICBpZiAoYWJzR2FwID4gbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiAmJiBzYW1wbGVzTGVuID09PSAxICYmIHRoaXMubGFzdEF1ZGlvU2FtcGxlc0xlbiA9PT0gMSkge1xuICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGdhcCA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgaWYgKHNhbXBsZXNMZW4gPT09IDEgJiYgdGhpcy5sYXN0QXVkaW9TYW1wbGVzTGVuID09PSAxKSB7XG4gICAgICAgICAgLy8g5aaC5p6cc2FtcGxl55qEbGVuZ3Ro5LiA55u05pivMe+8jOiAjOS4lOS4gOebtOS4jeespuWQiHJlZlNhbXBsZUR1cmF0aW9u77yM6ZyA6KaB5Yqo5oCB5L+u5pS5cmVmU2FtcGxlRHVyYXRpb25cbiAgICAgICAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgPSBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgIT09IHVuZGVmaW5lZCA/IG1ldGEucmVmU2FtcGxlRHVyYXRpb25GaXhlZCArIGdhcCA6IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gKyBnYXBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzaWxlbnRGcmFtZUNvdW50ID0gTWF0aC5mbG9vcihnYXAgLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaWxlbnRGcmFtZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXB1dGVkID0gZmlyc3REdHMgLSAoaSArIDEpICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuICAgICAgICAgICAgY29uc3Qgc2lsZW50U2FtcGxlID0gT2JqZWN0LmFzc2lnbih7fSwgYXVkaW9TYW1wbGVzWzBdLCB7XG4gICAgICAgICAgICAgIGR0czogY29tcHV0ZWQgPiB0aGlzLm5leHRBdWRpb0R0cyA/IGNvbXB1dGVkIDogdGhpcy5uZXh0QXVkaW9EdHNcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzLnB1c2goe1xuICAgICAgICAgICAgICBkdHM6IHNpbGVudFNhbXBsZS5kdHMsXG4gICAgICAgICAgICAgIHNpemU6IHNpbGVudFNhbXBsZS5kYXRhLmJ5dGVMZW5ndGhcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcy51bnNoaWZ0KHNpbGVudFNhbXBsZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYWJzR2FwIDw9IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gJiYgYWJzR2FwID4gMCkge1xuICAgICAgICAvLyDlvZPlt67ot53mr5TovoPlsI/nmoTml7blgJnlsIbpn7PpopHluKfph43lrprkvY1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+mHjeWumuS9jemfs+mikeW4p2R0cycsIGF1ZGlvU2FtcGxlc1swXS5kdHMsIHRoaXMubmV4dEF1ZGlvRHRzKVxuICAgICAgICBhdWRpb1NhbXBsZXNbMF0uZHRzID0gdGhpcy5uZXh0QXVkaW9EdHNcbiAgICAgICAgYXVkaW9TYW1wbGVzWzBdLnB0cyA9IHRoaXMubmV4dEF1ZGlvRHRzXG4gICAgICB9IGVsc2UgaWYgKGdhcCA8IDApIHtcbiAgICAgICAgQ29tcGF0aWJpbGl0eS5kb0ZpeExhcmdlR2FwKGF1ZGlvU2FtcGxlcywgKC0xICogZ2FwKSlcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbGFzdER0cyA9IGF1ZGlvU2FtcGxlc1thdWRpb1NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzO1xuICAgIGNvbnN0IGxhc3RTYW1wbGVEdXJhdGlvbiA9IGF1ZGlvU2FtcGxlcy5sZW5ndGggPj0gMiA/IGxhc3REdHMgLSBhdWRpb1NhbXBsZXNbYXVkaW9TYW1wbGVzLmxlbmd0aCAtIDJdLmR0cyA6IG1ldGEucmVmU2FtcGxlRHVyYXRpb25cblxuICAgIHRoaXMubGFzdEF1ZGlvU2FtcGxlc0xlbiA9IHNhbXBsZXNMZW47XG4gICAgdGhpcy5uZXh0QXVkaW9EdHMgPSBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQgPyBsYXN0RHRzICsgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkIDogbGFzdER0cyArIGxhc3RTYW1wbGVEdXJhdGlvblxuICAgIHRoaXMubGFzdEF1ZGlvRHRzID0gbGFzdER0c1xuXG4gICAgLy8gc3RlcDMuIOS/ruWkjXNhbXBsZXPmrrXlhoXpg6jnmoRkdHPlvILluLjpl67pophcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYXVkaW9TYW1wbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gYXVkaW9TYW1wbGVzW2ldXG4gICAgICBjb25zdCBuZXh0ID0gYXVkaW9TYW1wbGVzW2kgKyAxXVxuXG4gICAgICBpZiAoIW5leHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gbmV4dC5kdHMgLSBjdXJyZW50LmR0cztcbiAgICAgIGF1ZGlvU2FtcGxlc1tpXS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgLypcbiAgICAgIGlmIChkdXJhdGlvbiA+ICgyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgICAgLy8g5Lik5bin5LmL6Ze06Ze06ZqU5aSq5aSn77yM6ZyA6KaB6KGl56m655m95binXG4gICAgICAgIC8qKlxuICAgICAgICBsZXQgc2lsZW50RnJhbWVDb3VudCA9IE1hdGguZmxvb3IoZHVyYXRpb24gLyBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKVxuICAgICAgICBsZXQgZnJhbWVJZHggPSAwXG5cbiAgICAgICAgd2hpbGUgKGZyYW1lSWR4IDwgc2lsZW50RnJhbWVDb3VudCkge1xuICAgICAgICAgIGNvbnN0IHNpbGVudFNhbXBsZSA9IHtcbiAgICAgICAgICAgIGRhdGE6IHNpbGVudEZyYW1lLFxuICAgICAgICAgICAgZGF0YXNpemU6IHNpbGVudEZyYW1lLmJ5dGVMZW5ndGgsXG4gICAgICAgICAgICBkdHM6IGN1cnJlbnQuZHRzICsgKGZyYW1lSWR4ICsgMSkgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uLFxuICAgICAgICAgICAgZmlsdGVyZWQ6IDAsXG4gICAgICAgICAgICBpc1NpbGVudDogdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGF1ZGlvU2FtcGxlcy5zcGxpY2UoaSwgMCwgc2lsZW50U2FtcGxlKVxuXG4gICAgICAgICAgdGhpcy5maWxsZWRBdWRpb1NhbXBsZXMucHVzaCh7XG4gICAgICAgICAgICBkdHM6IHNpbGVudFNhbXBsZS5kdHMsXG4gICAgICAgICAgICBzaXplOiBzaWxlbnRTYW1wbGUuZGF0YS5ieXRlTGVuZ3RoXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGZyYW1lSWR4KytcbiAgICAgICAgICBpKysgLy8g5LiN5a+56Z2Z6Z+z5bin5YGa5q+U6L6DXG4gICAgICAgIH1cbiAgICAgIH0gKi9cbiAgICB9XG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IENvbXBhdGliaWxpdHkuc29ydEF1ZGlvU2FtcGxlcyhhdWRpb1NhbXBsZXMpXG4gIH1cblxuICBmaXhDaGFuZ2VTdHJlYW1WaWRlbyAoY2hhbmdlSWR4KSB7XG4gICAgY29uc3QgeyBzYW1wbGVzLCBtZXRhIH0gPSB0aGlzLnZpZGVvVHJhY2s7XG4gICAgY29uc3QgcHJldkR0cyA9IGNoYW5nZUlkeCA9PT0gMCA/IHRoaXMuZ2V0U3RyZWFtQ2hhbmdlU3RhcnQoc2FtcGxlc1swXSkgOiBzYW1wbGVzW2NoYW5nZUlkeCAtIDFdLmR0cztcbiAgICBjb25zdCBjdXJEdHMgPSBzYW1wbGVzW2NoYW5nZUlkeF0uZHRzO1xuICAgIGNvbnN0IGlzQ29udGludWUgPSBNYXRoLmFicyhwcmV2RHRzIC0gY3VyRHRzKSA8PSAyICogbWV0YS5yZWZTYW1wbGVEdXJhdGlvbjtcblxuICAgIGlmIChpc0NvbnRpbnVlKSB7XG4gICAgICBpZiAoIXNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zKSB7XG4gICAgICAgIHNhbXBsZXNbY2hhbmdlSWR4XS5vcHRpb25zID0ge1xuICAgICAgICAgIGlzQ29udGludWU6IHRydWVcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMuaXNDb250aW51ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5kb0ZpeFZpZGVvKGZhbHNlKVxuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UGFydFNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKDAsIGNoYW5nZUlkeCk7XG4gICAgY29uc3Qgc2Vjb25kUGFydFNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKGNoYW5nZUlkeCk7XG4gICAgY29uc3QgZmlyc3RTYW1wbGUgPSBzYW1wbGVzWzBdXG5cbiAgICBjb25zdCBjaGFuZ2VTYW1wbGUgPSBzZWNvbmRQYXJ0U2FtcGxlc1swXVxuICAgIGNvbnN0IGZpcnN0UGFydER1cmF0aW9uID0gY2hhbmdlU2FtcGxlLmR0cyAtIGZpcnN0U2FtcGxlLmR0c1xuICAgIGNvbnN0IHN0cmVhbUNoYW5nZVN0YXJ0ID0gZmlyc3RTYW1wbGUub3B0aW9ucyAmJiBmaXJzdFNhbXBsZS5vcHRpb25zLnN0YXJ0ICsgZmlyc3RQYXJ0RHVyYXRpb24gPyBmaXJzdFNhbXBsZS5vcHRpb25zLnN0YXJ0IDogbnVsbFxuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKDAsIGNoYW5nZUlkeCk7XG5cbiAgICB0aGlzLmRvRml4VmlkZW8oZmFsc2UpO1xuXG4gICAgdGhpcy52aWRlb1RyYWNrLnNhbXBsZXMgPSBzYW1wbGVzLnNsaWNlKGNoYW5nZUlkeCk7XG5cbiAgICB0aGlzLmRvRml4VmlkZW8oZmFsc2UsIHN0cmVhbUNoYW5nZVN0YXJ0KTtcblxuICAgIHRoaXMudmlkZW9UcmFjay5zYW1wbGVzID0gZmlyc3RQYXJ0U2FtcGxlcy5jb25jYXQoc2Vjb25kUGFydFNhbXBsZXMpXG4gIH1cblxuICBmaXhDaGFuZ2VTdHJlYW1BdWRpbyAoY2hhbmdlSWR4KSB7XG4gICAgY29uc3QgeyBzYW1wbGVzLCBtZXRhIH0gPSB0aGlzLmF1ZGlvVHJhY2s7XG5cbiAgICBjb25zdCBwcmV2RHRzID0gY2hhbmdlSWR4ID09PSAwID8gdGhpcy5nZXRTdHJlYW1DaGFuZ2VTdGFydChzYW1wbGVzWzBdKSA6IHNhbXBsZXNbY2hhbmdlSWR4IC0gMV0uZHRzO1xuICAgIGNvbnN0IGN1ckR0cyA9IHNhbXBsZXNbY2hhbmdlSWR4XS5kdHM7XG4gICAgY29uc3QgaXNDb250aW51ZSA9IE1hdGguYWJzKHByZXZEdHMgLSBjdXJEdHMpIDw9IDIgKiBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uO1xuXG4gICAgaWYgKGlzQ29udGludWUpIHtcbiAgICAgIGlmICghc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMpIHtcbiAgICAgICAgc2FtcGxlc1tjaGFuZ2VJZHhdLm9wdGlvbnMgPSB7XG4gICAgICAgICAgaXNDb250aW51ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzYW1wbGVzW2NoYW5nZUlkeF0ub3B0aW9ucy5pc0NvbnRpbnVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmRvRml4QXVkaW8oZmFsc2UpXG4gICAgfVxuXG4gICAgY29uc3QgZmlyc3RQYXJ0U2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoMCwgY2hhbmdlSWR4KTtcbiAgICBjb25zdCBzZWNvbmRQYXJ0U2FtcGxlcyA9IHNhbXBsZXMuc2xpY2UoY2hhbmdlSWR4KTtcbiAgICBjb25zdCBmaXJzdFNhbXBsZSA9IHNhbXBsZXNbMF1cblxuICAgIGNvbnN0IGNoYW5nZVNhbXBsZSA9IHNlY29uZFBhcnRTYW1wbGVzWzBdXG4gICAgY29uc3QgZmlyc3RQYXJ0RHVyYXRpb24gPSBjaGFuZ2VTYW1wbGUuZHRzIC0gZmlyc3RTYW1wbGUuZHRzXG4gICAgY29uc3Qgc3RyZWFtQ2hhbmdlU3RhcnQgPSBmaXJzdFNhbXBsZS5vcHRpb25zICYmIGZpcnN0U2FtcGxlLm9wdGlvbnMuc3RhcnQgKyBmaXJzdFBhcnREdXJhdGlvbiA/IGZpcnN0U2FtcGxlLm9wdGlvbnMuc3RhcnQgOiBudWxsXG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IGZpcnN0UGFydFNhbXBsZXM7XG5cbiAgICB0aGlzLmRvRml4QXVkaW8oZmFsc2UpO1xuXG4gICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMgPSBzZWNvbmRQYXJ0U2FtcGxlcztcblxuICAgIHRoaXMuZG9GaXhBdWRpbyhmYWxzZSwgc3RyZWFtQ2hhbmdlU3RhcnQpO1xuXG4gICAgdGhpcy5hdWRpb1RyYWNrLnNhbXBsZXMgPSBmaXJzdFBhcnRTYW1wbGVzLmNvbmNhdChzZWNvbmRQYXJ0U2FtcGxlcylcbiAgfVxuXG4gIGdldEZpcnN0U2FtcGxlICgpIHtcbiAgICAvLyDojrflj5Z2aWRlb+WSjGF1ZGlv55qE6aaW5bin5pWw5o2uXG4gICAgbGV0IHtzYW1wbGVzOiB2aWRlb1NhbXBsZXN9ID0gdGhpcy52aWRlb1RyYWNrXG4gICAgbGV0IHtzYW1wbGVzOiBhdWRpb1NhbXBsZXN9ID0gdGhpcy5hdWRpb1RyYWNrXG5cbiAgICBsZXQgaXNGaXJzdFZpZGVvU2FtcGxlcyA9IGZhbHNlO1xuICAgIGxldCBpc0ZpcnN0QXVkaW9TYW1wbGVzID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuX2ZpcnN0VmlkZW9TYW1wbGUgJiYgdmlkZW9TYW1wbGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlyc3RWaWRlb1NhbXBsZSA9IENvbXBhdGliaWxpdHkuZmluZEZpcnN0VmlkZW9TYW1wbGUodmlkZW9TYW1wbGVzKVxuICAgICAgaXNGaXJzdFZpZGVvU2FtcGxlcyA9IHRydWVcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUgJiYgYXVkaW9TYW1wbGVzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fZmlyc3RBdWRpb1NhbXBsZSA9IENvbXBhdGliaWxpdHkuZmluZEZpcnN0QXVkaW9TYW1wbGUoYXVkaW9TYW1wbGVzKSAvLyDlr7vmib5kdHPmnIDlsI/nmoTluKfkvZzkuLrpppbkuKrpn7PpopHluKdcbiAgICAgIGlzRmlyc3RBdWRpb1NhbXBsZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmlyc3RWaWRlb1NhbXBsZXMsXG4gICAgICBpc0ZpcnN0QXVkaW9TYW1wbGVzXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWcqOayoeaciXJlZlNhbXBsZUR1cmF0aW9u55qE6Zeu6aKY5rWB5Lit77yMXG4gICAqL1xuICBmaXhSZWZTYW1wbGVEdXJhdGlvbiAobWV0YSwgc2FtcGxlcykge1xuICAgIGNvbnN0IGlzVmlkZW8gPSBtZXRhLnR5cGUgPT09ICd2aWRlbydcbiAgICBjb25zdCBhbGxTYW1wbGVzQ291bnQgPSBpc1ZpZGVvID8gdGhpcy5hbGxWaWRlb1NhbXBsZXNDb3VudCA6IHRoaXMuYWxsQXVkaW9TYW1wbGVzQ291bnRcbiAgICBjb25zdCBmaXJzdER0cyA9IGlzVmlkZW8gPyB0aGlzLl9maXJzdFZpZGVvU2FtcGxlLmR0cyA6IHRoaXMuX2ZpcnN0QXVkaW9TYW1wbGUuZHRzXG4gICAgY29uc3QgZmlsbGVkU2FtcGxlc0NvdW50ID0gaXNWaWRlbyA/IHRoaXMuZmlsbGVkVmlkZW9TYW1wbGVzLmxlbmd0aCA6IHRoaXMuZmlsbGVkQXVkaW9TYW1wbGVzLmxlbmd0aFxuXG4gICAgaWYgKCFtZXRhLnJlZlNhbXBsZUR1cmF0aW9uIHx8IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPD0gMCB8fCBOdW1iZXIuaXNOYU4obWV0YS5yZWZTYW1wbGVEdXJhdGlvbikpIHtcbiAgICAgIGlmIChzYW1wbGVzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIGNvbnN0IGxhc3REdHMgPSBzYW1wbGVzW3NhbXBsZXMubGVuZ3RoIC0gMV0uZHRzXG5cbiAgICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoKGxhc3REdHMgLSBmaXJzdER0cykgLyAoKGFsbFNhbXBsZXNDb3VudCArIGZpbGxlZFNhbXBsZXNDb3VudCkgLSAxKSk7IC8vIOWwhnJlZlNhbXBsZUR1cmF0aW9u6YeN572u5Li66K6h566X5ZCO55qE5bmz5Z2H5YC8XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSB7XG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gNSkge1xuICAgICAgICBjb25zdCBsYXN0RHRzID0gc2FtcGxlc1tzYW1wbGVzLmxlbmd0aCAtIDFdLmR0c1xuICAgICAgICBjb25zdCBmaXJzdER0cyA9IHNhbXBsZXNbMF0uZHRzXG4gICAgICAgIGNvbnN0IGR1cmF0aW9uQXZnID0gKGxhc3REdHMgLSBmaXJzdER0cykgLyAoc2FtcGxlcy5sZW5ndGggLSAxKVxuXG4gICAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKE1hdGguYWJzKG1ldGEucmVmU2FtcGxlRHVyYXRpb24gLSBkdXJhdGlvbkF2ZykgPD0gNSA/IG1ldGEucmVmU2FtcGxlRHVyYXRpb24gOiBkdXJhdGlvbkF2Zyk7IC8vIOWwhnJlZlNhbXBsZUR1cmF0aW9u6YeN572u5Li66K6h566X5ZCO55qE5bmz5Z2H5YC8XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOiusOW9leaIquatouebruWJjeS4gOWFseaSreaUvuS6huWkmuWwkeW4p1xuICAgKi9cbiAgcmVjb3JkU2FtcGxlc0NvdW50ICgpIHtcbiAgICBjb25zdCB7IGF1ZGlvVHJhY2ssIHZpZGVvVHJhY2sgfSA9IHRoaXNcblxuICAgIHRoaXMuYWxsQXVkaW9TYW1wbGVzQ291bnQgKz0gYXVkaW9UcmFjay5zYW1wbGVzLmxlbmd0aFxuICAgIHRoaXMuYWxsVmlkZW9TYW1wbGVzQ291bnQgKz0gdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aFxuICB9XG5cbiAgLyoqXG4gICAqIOWOu+mZpOS4jeWQiOazleeahOW4p++8iOWAkumAgOOAgemHjeWkjeW4p++8iVxuICAgKi9cbiAgcmVtb3ZlSW52YWxpZFNhbXBsZXMgKCkge1xuICAgIGNvbnN0IHsgX2ZpcnN0VmlkZW9TYW1wbGUsIF9maXJzdEF1ZGlvU2FtcGxlIH0gPSB0aGlzXG5cbiAgICB0aGlzLmF1ZGlvVHJhY2suc2FtcGxlcyA9IHRoaXMuYXVkaW9UcmFjay5zYW1wbGVzLmZpbHRlcigoc2FtcGxlKSA9PiB7XG4gICAgICByZXR1cm4gc2FtcGxlLmR0cyA+PSBfZmlyc3RBdWRpb1NhbXBsZS5kdHMgJiYgKHRoaXMubGFzdEF1ZGlvRHRzID09PSB1bmRlZmluZWQgfHwgc2FtcGxlLmR0cyA+IHRoaXMubGFzdEF1ZGlvRHRzKVxuICAgIH0pXG5cbiAgICB0aGlzLnZpZGVvVHJhY2suc2FtcGxlcyA9IHRoaXMudmlkZW9UcmFjay5zYW1wbGVzLmZpbHRlcigoc2FtcGxlKSA9PiB7XG4gICAgICByZXR1cm4gc2FtcGxlLmR0cyA+PSBfZmlyc3RWaWRlb1NhbXBsZS5kdHMgJiYgKHRoaXMubGFzdFZpZGVvRHRzID09PSB1bmRlZmluZWQgfHwgc2FtcGxlLmR0cyA+IHRoaXMubGFzdFZpZGVvRHRzKVxuICAgIH0pXG4gIH1cblxuICBnZXRTdHJlYW1DaGFuZ2VTdGFydCAoc2FtcGxlKSB7XG4gICAgaWYgKHNhbXBsZS5vcHRpb25zICYmIHNhbXBsZS5vcHRpb25zLnN0YXJ0KSB7XG4gICAgICByZXR1cm4gc2FtcGxlLm9wdGlvbnMuc3RhcnQgLSB0aGlzLmR0c0Jhc2U7XG4gICAgfVxuICAgIHJldHVybiBJbmZpbml0eVxuICB9XG5cbiAgc3RhdGljIHNvcnRBdWRpb1NhbXBsZXMgKHNhbXBsZXMpIHtcbiAgICBpZiAoc2FtcGxlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBzYW1wbGVzXG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbXBsZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuZHRzIC0gYi5kdHNcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIOWvu+aJvmR0c+acgOWwj+eahHNhbXBsZVxuICAgKiBAcGFyYW0gc2FtcGxlc1xuICAgKi9cbiAgc3RhdGljIGZpbmRGaXJzdEF1ZGlvU2FtcGxlIChzYW1wbGVzKSB7XG4gICAgaWYgKCFzYW1wbGVzIHx8IHNhbXBsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBDb21wYXRpYmlsaXR5LnNvcnRBdWRpb1NhbXBsZXMoc2FtcGxlcylbMF1cbiAgfVxuXG4gIHN0YXRpYyBmaW5kRmlyc3RWaWRlb1NhbXBsZSAoc2FtcGxlcykge1xuICAgIGlmICghc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc3Qgc29ydGVkID0gc2FtcGxlcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5kdHMgLSBiLmR0cztcbiAgICB9KVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNvcnRlZC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHNvcnRlZFtpXS5pc0tleWZyYW1lKSB7XG4gICAgICAgIHJldHVybiBzb3J0ZWRbaV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGV0ZWN0TGFyZ2VHYXAgKG5leHREdHMsIGZpcnN0U2FtcGxlKSB7XG4gICAgaWYgKG5leHREdHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY3VyRHRzID0gZmlyc3RTYW1wbGUuZHRzIHx8IDBcbiAgICBjb25zdCBjb25kMSA9IG5leHREdHMgLSBjdXJEdHMgPj0gMTAwMCB8fCBjdXJEdHMgLSBuZXh0RHRzID49IDEwMDAgLy8gZml4IGhsc+a1geWHuueOsOWkp+mHj+a1gWR0c+mXtOi3nemXrumimFxuICAgIGNvbnN0IGNvbmQyID0gZmlyc3RTYW1wbGUub3B0aW9ucyAmJiBmaXJzdFNhbXBsZS5vcHRpb25zLmRpc2NvbnRpbnVlXG5cbiAgICByZXR1cm4gY29uZDEgfHwgY29uZDJcbiAgfVxuXG4gIHN0YXRpYyBkb0ZpeExhcmdlR2FwIChzYW1wbGVzLCBnYXApIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2FtcGxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3Qgc2FtcGxlID0gc2FtcGxlc1tpXTtcbiAgICAgIHNhbXBsZS5kdHMgKz0gZ2FwXG4gICAgICBpZiAoc2FtcGxlLnB0cykge1xuICAgICAgICBzYW1wbGUucHRzICs9IGdhcFxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDkuK3pgJTmjaLmtYFcbiAgICovXG4gIHN0YXRpYyBkZXRhY3RDaGFuZ2VTdHJlYW0gKHNhbXBsZXMpIHtcbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGxldCBjaGFuZ2VkSWR4ID0gLTE7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNhbXBsZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChzYW1wbGVzW2ldLm9wdGlvbnMgJiYgc2FtcGxlc1tpXS5vcHRpb25zLm1ldGEpIHtcbiAgICAgICAgY2hhbmdlZCA9IHRydWVcbiAgICAgICAgY2hhbmdlZElkeCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBjaGFuZ2VkLFxuICAgICAgY2hhbmdlZElkeFxuICAgIH1cbiAgfVxuXG4gIGdldCB0cmFja3MgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICB9XG5cbiAgZ2V0IGF1ZGlvVHJhY2sgKCkge1xuICAgIGlmICh0aGlzLnRyYWNrcykge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tzLmF1ZGlvVHJhY2tcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGdldCB2aWRlb1RyYWNrICgpIHtcbiAgICBpZiAodGhpcy50cmFja3MpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrcy52aWRlb1RyYWNrXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBnZXQgZHRzQmFzZSAoKSB7XG4gICAgY29uc3QgcmVtdXhlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ01QNF9SRU1VWEVSJyk7XG4gICAgaWYgKHJlbXV4ZXIpIHtcbiAgICAgIHJldHVybiByZW11eGVyLl9kdHNCYXNlXG4gICAgfVxuICAgIHJldHVybiAwXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvbXBhdGliaWxpdHk7XG4iLCJjbGFzcyBHb2xvbWIge1xuICBjb25zdHJ1Y3RvciAodWludDhhcnJheSkge1xuICAgIHRoaXMuVEFHID0gJ0dvbG9tYidcbiAgICB0aGlzLl9idWZmZXIgPSB1aW50OGFycmF5XG4gICAgdGhpcy5fYnVmZmVySW5kZXggPSAwXG4gICAgdGhpcy5fdG90YWxCeXRlcyA9IHVpbnQ4YXJyYXkuYnl0ZUxlbmd0aFxuICAgIHRoaXMuX3RvdGFsQml0cyA9IHVpbnQ4YXJyYXkuYnl0ZUxlbmd0aCAqIDhcbiAgICB0aGlzLl9jdXJyZW50V29yZCA9IDBcbiAgICB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0ID0gMFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fYnVmZmVyID0gbnVsbFxuICB9XG5cbiAgX2ZpbGxDdXJyZW50V29yZCAoKSB7XG4gICAgbGV0IGJ1ZmZlckJ5dGVzTGVmdCA9IHRoaXMuX3RvdGFsQnl0ZXMgLSB0aGlzLl9idWZmZXJJbmRleFxuICAgIGlmIChidWZmZXJCeXRlc0xlZnQgPD0gMCkge1xuICAgICAgLy8gVE9ETyDlvILluLjlpITnkIZcbiAgICB9XG5cbiAgICBsZXQgYnl0ZXNSZWFkID0gTWF0aC5taW4oNCwgYnVmZmVyQnl0ZXNMZWZ0KVxuICAgIGxldCB3b3JkID0gbmV3IFVpbnQ4QXJyYXkoNClcbiAgICB3b3JkLnNldCh0aGlzLl9idWZmZXIuc3ViYXJyYXkodGhpcy5fYnVmZmVySW5kZXgsIHRoaXMuX2J1ZmZlckluZGV4ICsgYnl0ZXNSZWFkKSlcbiAgICB0aGlzLl9jdXJyZW50V29yZCA9IG5ldyBEYXRhVmlldyh3b3JkLmJ1ZmZlcikuZ2V0VWludDMyKDApXG5cbiAgICB0aGlzLl9idWZmZXJJbmRleCArPSBieXRlc1JlYWRcbiAgICB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0ID0gYnl0ZXNSZWFkICogOFxuICB9XG5cbiAgcmVhZEJpdHMgKHNpemUpIHtcbiAgICBsZXQgYml0cyA9IE1hdGgubWluKHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQsIHNpemUpOy8vIDp1aW50XG4gICAgbGV0IHZhbHUgPSB0aGlzLl9jdXJyZW50V29yZCA+Pj4gKDMyIC0gYml0cyk7XG4gICAgaWYgKHNpemUgPiAzMikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVhZCBtb3JlIHRoYW4gMzIgYml0cyBhdCBhIHRpbWUnKTtcbiAgICB9XG4gICAgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdCAtPSBiaXRzO1xuICAgIGlmICh0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0ID4gMCkge1xuICAgICAgdGhpcy5fY3VycmVudFdvcmQgPDw9IGJpdHM7XG4gICAgfSBlbHNlIGlmICh0aGlzLl90b3RhbEJ5dGVzIC0gdGhpcy5fYnVmZmVySW5kZXggPiAwKSB7XG4gICAgICB0aGlzLl9maWxsQ3VycmVudFdvcmQoKTtcbiAgICB9XG5cbiAgICBiaXRzID0gc2l6ZSAtIGJpdHM7XG4gICAgaWYgKGJpdHMgPiAwICYmIHRoaXMuX2N1cnJlbnRXb3JkQml0c0xlZnQpIHtcbiAgICAgIHJldHVybiB2YWx1IDw8IGJpdHMgfCB0aGlzLnJlYWRCaXRzKGJpdHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsdTtcbiAgICB9XG4gIH1cblxuICByZWFkQm9vbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEJpdHMoMSkgPT09IDFcbiAgfVxuXG4gIHJlYWRCeXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkQml0cyg4KVxuICB9XG5cbiAgX3NraXBMZWFkaW5nWmVybyAoKSB7XG4gICAgbGV0IHplcm9Db3VudFxuICAgIGZvciAoemVyb0NvdW50ID0gMDsgemVyb0NvdW50IDwgdGhpcy5fY3VycmVudFdvcmRCaXRzTGVmdDsgemVyb0NvdW50KyspIHtcbiAgICAgIGlmICgodGhpcy5fY3VycmVudFdvcmQgJiAoMHg4MDAwMDAwMCA+Pj4gemVyb0NvdW50KSkgIT09IDApIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFdvcmQgPDw9IHplcm9Db3VudFxuICAgICAgICB0aGlzLl9jdXJyZW50V29yZEJpdHNMZWZ0IC09IHplcm9Db3VudFxuICAgICAgICByZXR1cm4gemVyb0NvdW50XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2ZpbGxDdXJyZW50V29yZCgpXG4gICAgcmV0dXJuIHplcm9Db3VudCArIHRoaXMuX3NraXBMZWFkaW5nWmVybygpXG4gIH1cblxuICByZWFkVUVHICgpIHsgLy8gdW5zaWduZWQgZXhwb25lbnRpYWwgZ29sb21iXG4gICAgbGV0IGxlYWRpbmdaZXJvcyA9IHRoaXMuX3NraXBMZWFkaW5nWmVybygpXG4gICAgcmV0dXJuIHRoaXMucmVhZEJpdHMobGVhZGluZ1plcm9zICsgMSkgLSAxXG4gIH1cblxuICByZWFkU0VHICgpIHsgLy8gc2lnbmVkIGV4cG9uZW50aWFsIGdvbG9tYlxuICAgIGxldCB2YWx1ZSA9IHRoaXMucmVhZFVFRygpXG4gICAgaWYgKHZhbHVlICYgMHgwMSkge1xuICAgICAgcmV0dXJuICh2YWx1ZSArIDEpID4+PiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMSAqICh2YWx1ZSA+Pj4gMSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR29sb21iXG4iLCJpbXBvcnQgU3BzUGFyc2VyIGZyb20gJy4vc3BzJztcbmNsYXNzIE5hbHVuaXQge1xuICBzdGF0aWMgZ2V0TmFsdW5pdHMgKGJ1ZmZlcikge1xuICAgIGlmIChidWZmZXIubGVuZ3RoIC0gYnVmZmVyLnBvc2l0aW9uIDwgNCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBidWYgPSBidWZmZXIuZGF0YXZpZXc7XG4gICAgbGV0IHBvc2l0aW9uID0gYnVmZmVyLnBvc2l0aW9uO1xuICAgIGlmIChidWYuZ2V0SW50MzIocG9zaXRpb24pID09PSAxIHx8XG4gICAgKGJ1Zi5nZXRJbnQxNihwb3NpdGlvbikgPT09IDAgJiYgYnVmLmdldEludDgocG9zaXRpb24gKyAyKSA9PT0gMSkpIHtcbiAgICAgIHJldHVybiBOYWx1bml0LmdldEFubmV4Yk5hbHMoYnVmZmVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE5hbHVuaXQuZ2V0QXZjY05hbHMoYnVmZmVyKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0QW5uZXhiTmFscyAoYnVmZmVyKSB7XG4gICAgbGV0IG5hbHMgPSBbXTtcbiAgICBsZXQgcG9zaXRpb24gPSBOYWx1bml0LmdldEhlYWRlclBvc2l0aW9uQW5uZXhCKGJ1ZmZlcik7XG4gICAgbGV0IHN0YXJ0ID0gcG9zaXRpb24ucG9zO1xuICAgIGxldCBlbmQgPSBzdGFydDtcbiAgICB3aGlsZSAoc3RhcnQgPCBidWZmZXIubGVuZ3RoIC0gNCkge1xuICAgICAgbGV0IGhlYWRlciA9IGJ1ZmZlci5idWZmZXIuc2xpY2Uoc3RhcnQsIHN0YXJ0ICsgcG9zaXRpb24uaGVhZGVyTGVuZ3RoKTtcbiAgICAgIGlmIChwb3NpdGlvbi5wb3MgPT09IGJ1ZmZlci5wb3NpdGlvbikge1xuICAgICAgICBidWZmZXIuc2tpcChwb3NpdGlvbi5oZWFkZXJMZW5ndGgpO1xuICAgICAgfVxuICAgICAgcG9zaXRpb24gPSBOYWx1bml0LmdldEhlYWRlclBvc2l0aW9uQW5uZXhCKGJ1ZmZlcik7XG4gICAgICBlbmQgPSBwb3NpdGlvbi5wb3M7XG4gICAgICBsZXQgYm9keSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlci5idWZmZXIuc2xpY2Uoc3RhcnQgKyBoZWFkZXIuYnl0ZUxlbmd0aCwgZW5kKSk7XG4gICAgICBsZXQgdW5pdCA9IHtoZWFkZXIsIGJvZHl9O1xuICAgICAgTmFsdW5pdC5hbmFseXNlTmFsKHVuaXQpO1xuICAgICAgbmFscy5wdXNoKHVuaXQpO1xuICAgICAgYnVmZmVyLnNraXAoZW5kIC0gYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgIHN0YXJ0ID0gZW5kO1xuICAgIH1cbiAgICByZXR1cm4gbmFscztcbiAgfVxuXG4gIHN0YXRpYyBnZXRBdmNjTmFscyAoYnVmZmVyKSB7XG4gICAgbGV0IG5hbHMgPSBbXTtcbiAgICB3aGlsZSAoYnVmZmVyLnBvc2l0aW9uIDwgYnVmZmVyLmxlbmd0aCAtIDQpIHtcbiAgICAgIGxldCBsZW5ndGggPSBidWZmZXIuZGF0YXZpZXcuZ2V0SW50MzIoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgIGlmIChidWZmZXIubGVuZ3RoIC0gYnVmZmVyLnBvc2l0aW9uID49IGxlbmd0aCkge1xuICAgICAgICBsZXQgaGVhZGVyID0gYnVmZmVyLmJ1ZmZlci5zbGljZShidWZmZXIucG9zaXRpb24sIGJ1ZmZlci5wb3NpdGlvbiArIDQpO1xuICAgICAgICBidWZmZXIuc2tpcCg0KVxuICAgICAgICBsZXQgYm9keSA9IGJ1ZmZlci5idWZmZXIuc2xpY2UoYnVmZmVyLnBvc2l0aW9uLCBidWZmZXIucG9zaXRpb24gKyBsZW5ndGgpO1xuICAgICAgICBidWZmZXIuc2tpcChsZW5ndGgpO1xuICAgICAgICBsZXQgdW5pdCA9IHtoZWFkZXIsIGJvZHl9O1xuICAgICAgICBOYWx1bml0LmFuYWx5c2VOYWwodW5pdCk7XG4gICAgICAgIG5hbHMucHVzaCh1bml0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmFscztcbiAgfVxuXG4gIHN0YXRpYyBhbmFseXNlTmFsICh1bml0KSB7XG4gICAgbGV0IHR5cGUgPSB1bml0LmJvZHlbMF0gJiAweDFmO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICAvLyBORFJcbiAgICAgICAgdW5pdC5uZHIgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgLy8gSURSXG4gICAgICAgIHVuaXQuaWRyID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDY6XG4gICAgICAgIC8vIFNFSVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNzpcbiAgICAgICAgLy8gU1BTXG4gICAgICAgIHVuaXQuc3BzID0gU3BzUGFyc2VyLnBhcnNlU1BTKHVuaXQuYm9keSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSA4OlxuICAgICAgICAvLyBQUFNcbiAgICAgICAgdW5pdC5wcHMgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgOTpcbiAgICAgICAgLy8gQVVEXG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldEhlYWRlclBvc2l0aW9uQW5uZXhCIChidWZmZXIpIHtcbiAgICAvLyBzZXBlcmF0ZVxuICAgIGxldCBwb3MgPSBidWZmZXIucG9zaXRpb247XG4gICAgbGV0IGhlYWRlckxlbmd0aCA9IDA7XG4gICAgd2hpbGUgKGhlYWRlckxlbmd0aCAhPT0gMyAmJiBoZWFkZXJMZW5ndGggIT09IDQgJiYgcG9zIDwgYnVmZmVyLmxlbmd0aCAtIDQpIHtcbiAgICAgIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50MTYocG9zKSA9PT0gMCkge1xuICAgICAgICBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDE2KHBvcyArIDIpID09PSAxKSB7XG4gICAgICAgICAgLy8gMHgwMDAwMDFcbiAgICAgICAgICBoZWFkZXJMZW5ndGggPSA0O1xuICAgICAgICB9IGVsc2UgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQ4KHBvcyArIDIpID09PSAxKSB7XG4gICAgICAgICAgaGVhZGVyTGVuZ3RoID0gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwb3MrKztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvcyA9PT0gYnVmZmVyLmxlbmd0aCAtIDQpIHtcbiAgICAgIGlmIChidWZmZXIuZGF0YXZpZXcuZ2V0SW50MTYocG9zKSA9PT0gMCkge1xuICAgICAgICBpZiAoYnVmZmVyLmRhdGF2aWV3LmdldEludDE2KHBvcyArIDIpID09PSAxKSB7XG4gICAgICAgICAgLy8gMHgwMDAwMDFcbiAgICAgICAgICBoZWFkZXJMZW5ndGggPSA0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3MrKztcbiAgICAgICAgaWYgKGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQxNihwb3MpID09PSAwICYmIGJ1ZmZlci5kYXRhdmlldy5nZXRJbnQ4KHBvcykgPT09IDEpIHtcbiAgICAgICAgICAvLyAweDAwMDAwMDFcbiAgICAgICAgICBoZWFkZXJMZW5ndGggPSAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBvcyA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtwb3MsIGhlYWRlckxlbmd0aH07XG4gIH1cblxuICBzdGF0aWMgZ2V0QXZjYyAoc3BzLCBwcHMpIHtcbiAgICBsZXQgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoc3BzLmJ5dGVMZW5ndGggKyBwcHMuYnl0ZUxlbmd0aCArIDExKTtcbiAgICByZXRbMF0gPSAweDAxO1xuICAgIHJldFsxXSA9IHNwc1sxXTtcbiAgICByZXRbMl0gPSBzcHNbMl07XG4gICAgcmV0WzNdID0gc3BzWzNdO1xuICAgIHJldFs0XSA9IDI1NTtcbiAgICByZXRbNV0gPSAyMjU7XG5cbiAgICBsZXQgb2Zmc2V0ID0gNjtcblxuICAgIHJldC5zZXQobmV3IFVpbnQ4QXJyYXkoWyhzcHMuYnl0ZUxlbmd0aCA+Pj4gOCkgJiAweGZmLCBzcHMuYnl0ZUxlbmd0aCAmIDB4ZmZdKSwgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gMjtcbiAgICByZXQuc2V0KHNwcywgb2Zmc2V0KTtcbiAgICBvZmZzZXQgKz0gc3BzLmJ5dGVMZW5ndGg7XG5cbiAgICByZXRbb2Zmc2V0XSA9IDE7XG4gICAgb2Zmc2V0Kys7XG5cbiAgICByZXQuc2V0KG5ldyBVaW50OEFycmF5KFsocHBzLmJ5dGVMZW5ndGggPj4+IDgpICYgMHhmZiwgcHBzLmJ5dGVMZW5ndGggJiAweGZmXSksIG9mZnNldCk7XG4gICAgb2Zmc2V0ICs9IDI7XG4gICAgcmV0LnNldChwcHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIHJldDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYWx1bml0O1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICAqL1xuLyogZXNsaW50LWRpc2FibGUgb25lLXZhciAgKi9cbmltcG9ydCBHb2xvbWIgZnJvbSAnLi9nb2xvbWInXG5cbmNsYXNzIFNQU1BhcnNlciB7XG4gIHN0YXRpYyBfZWJzcDJyYnNwICh1aW50OGFycmF5KSB7XG4gICAgbGV0IHNyYyA9IHVpbnQ4YXJyYXlcbiAgICBsZXQgc3JjTGVuZ3RoID0gc3JjLmJ5dGVMZW5ndGhcbiAgICBsZXQgZHN0ID0gbmV3IFVpbnQ4QXJyYXkoc3JjTGVuZ3RoKVxuICAgIGxldCBkc3RJZHggPSAwXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNyY0xlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA+PSAyKSB7XG4gICAgICAgIGlmIChzcmNbaV0gPT09IDB4MDMgJiYgc3JjW2kgLSAxXSA9PT0gMHgwMCAmJiBzcmNbaSAtIDJdID09PSAweDAwKSB7XG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZHN0W2RzdElkeF0gPSBzcmNbaV1cbiAgICAgIGRzdElkeCsrXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KGRzdC5idWZmZXIsIDAsIGRzdElkeClcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZVNQUyAodWludDhhcnJheSkge1xuICAgIGxldCByYnNwID0gU1BTUGFyc2VyLl9lYnNwMnJic3AodWludDhhcnJheSlcbiAgICBsZXQgZ2IgPSBuZXcgR29sb21iKHJic3ApXG5cbiAgICBnYi5yZWFkQnl0ZSgpXG4gICAgbGV0IHByb2ZpbGVJZGMgPSBnYi5yZWFkQnl0ZSgpXG4gICAgZ2IucmVhZEJ5dGUoKVxuICAgIGxldCBsZXZlbElkYyA9IGdiLnJlYWRCeXRlKClcbiAgICBnYi5yZWFkVUVHKClcblxuICAgIGxldCBwcm9maWxlX3N0cmluZyA9IFNQU1BhcnNlci5nZXRQcm9maWxlU3RyaW5nKHByb2ZpbGVJZGMpXG4gICAgbGV0IGxldmVsX3N0cmluZyA9IFNQU1BhcnNlci5nZXRMZXZlbFN0cmluZyhsZXZlbElkYylcbiAgICBsZXQgY2hyb21hX2Zvcm1hdF9pZGMgPSAxXG4gICAgbGV0IGNocm9tYV9mb3JtYXQgPSA0MjBcbiAgICBsZXQgY2hyb21hX2Zvcm1hdF90YWJsZSA9IFswLCA0MjAsIDQyMiwgNDQ0XVxuICAgIGxldCBiaXRfZGVwdGggPSA4XG5cbiAgICBpZiAocHJvZmlsZUlkYyA9PT0gMTAwIHx8IHByb2ZpbGVJZGMgPT09IDExMCB8fCBwcm9maWxlSWRjID09PSAxMjIgfHxcbiAgICAgIHByb2ZpbGVJZGMgPT09IDI0NCB8fCBwcm9maWxlSWRjID09PSA0NCB8fCBwcm9maWxlSWRjID09PSA4MyB8fFxuICAgICAgcHJvZmlsZUlkYyA9PT0gODYgfHwgcHJvZmlsZUlkYyA9PT0gMTE4IHx8IHByb2ZpbGVJZGMgPT09IDEyOCB8fFxuICAgICAgcHJvZmlsZUlkYyA9PT0gMTM4IHx8IHByb2ZpbGVJZGMgPT09IDE0NCkge1xuICAgICAgY2hyb21hX2Zvcm1hdF9pZGMgPSBnYi5yZWFkVUVHKClcbiAgICAgIGlmIChjaHJvbWFfZm9ybWF0X2lkYyA9PT0gMykge1xuICAgICAgICBnYi5yZWFkQml0cygxKVxuICAgICAgfVxuICAgICAgaWYgKGNocm9tYV9mb3JtYXRfaWRjIDw9IDMpIHtcbiAgICAgICAgY2hyb21hX2Zvcm1hdCA9IGNocm9tYV9mb3JtYXRfdGFibGVbY2hyb21hX2Zvcm1hdF9pZGNdXG4gICAgICB9XG5cbiAgICAgIGJpdF9kZXB0aCA9IGdiLnJlYWRVRUcoKSArIDhcbiAgICAgIGdiLnJlYWRVRUcoKVxuICAgICAgZ2IucmVhZEJpdHMoMSlcbiAgICAgIGlmIChnYi5yZWFkQm9vbCgpKSB7XG4gICAgICAgIGxldCBzY2FsaW5nX2xpc3RfY291bnQgPSAoY2hyb21hX2Zvcm1hdF9pZGMgIT09IDMpID8gOCA6IDEyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NhbGluZ19saXN0X2NvdW50OyBpKyspIHtcbiAgICAgICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICAgICAgaWYgKGkgPCA2KSB7XG4gICAgICAgICAgICAgIFNQU1BhcnNlci5fc2tpcFNjYWxpbmdMaXN0KGdiLCAxNilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFNQU1BhcnNlci5fc2tpcFNjYWxpbmdMaXN0KGdiLCA2NClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2IucmVhZFVFRygpXG4gICAgbGV0IHBpY19vcmRlcl9jbnRfdHlwZSA9IGdiLnJlYWRVRUcoKVxuICAgIGlmIChwaWNfb3JkZXJfY250X3R5cGUgPT09IDApIHtcbiAgICAgIGdiLnJlYWRVRUcoKVxuICAgIH0gZWxzZSBpZiAocGljX29yZGVyX2NudF90eXBlID09PSAxKSB7XG4gICAgICBnYi5yZWFkQml0cygxKVxuICAgICAgZ2IucmVhZFNFRygpXG4gICAgICBnYi5yZWFkU0VHKClcbiAgICAgIGxldCBudW1fcmVmX2ZyYW1lc19pbl9waWNfb3JkZXJfY250X2N5Y2xlID0gZ2IucmVhZFVFRygpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bV9yZWZfZnJhbWVzX2luX3BpY19vcmRlcl9jbnRfY3ljbGU7IGkrKykge1xuICAgICAgICBnYi5yZWFkU0VHKClcbiAgICAgIH1cbiAgICB9XG4gICAgZ2IucmVhZFVFRygpXG4gICAgZ2IucmVhZEJpdHMoMSlcblxuICAgIGxldCBwaWNfd2lkdGhfaW5fbWJzX21pbnVzMSA9IGdiLnJlYWRVRUcoKVxuICAgIGxldCBwaWNfaGVpZ2h0X2luX21hcF91bml0c19taW51czEgPSBnYi5yZWFkVUVHKClcblxuICAgIGxldCBmcmFtZV9tYnNfb25seV9mbGFnID0gZ2IucmVhZEJpdHMoMSlcbiAgICBpZiAoZnJhbWVfbWJzX29ubHlfZmxhZyA9PT0gMCkge1xuICAgICAgZ2IucmVhZEJpdHMoMSlcbiAgICB9XG4gICAgZ2IucmVhZEJpdHMoMSlcblxuICAgIGxldCBmcmFtZV9jcm9wX2xlZnRfb2Zmc2V0ID0gMFxuICAgIGxldCBmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCA9IDBcbiAgICBsZXQgZnJhbWVfY3JvcF90b3Bfb2Zmc2V0ID0gMFxuICAgIGxldCBmcmFtZV9jcm9wX2JvdHRvbV9vZmZzZXQgPSAwXG5cbiAgICBsZXQgZnJhbWVfY3JvcHBpbmdfZmxhZyA9IGdiLnJlYWRCb29sKClcbiAgICBpZiAoZnJhbWVfY3JvcHBpbmdfZmxhZykge1xuICAgICAgZnJhbWVfY3JvcF9sZWZ0X29mZnNldCA9IGdiLnJlYWRVRUcoKVxuICAgICAgZnJhbWVfY3JvcF9yaWdodF9vZmZzZXQgPSBnYi5yZWFkVUVHKClcbiAgICAgIGZyYW1lX2Nyb3BfdG9wX29mZnNldCA9IGdiLnJlYWRVRUcoKVxuICAgICAgZnJhbWVfY3JvcF9ib3R0b21fb2Zmc2V0ID0gZ2IucmVhZFVFRygpXG4gICAgfVxuXG4gICAgbGV0IHBhcl93aWR0aCA9IDEsIHBhcl9oZWlnaHQgPSAxXG4gICAgbGV0IGZwcyA9IDAsIGZwc19maXhlZCA9IHRydWUsIGZwc19udW0gPSAwLCBmcHNfZGVuID0gMFxuXG4gICAgbGV0IHZ1aV9wYXJhbWV0ZXJzX3ByZXNlbnRfZmxhZyA9IGdiLnJlYWRCb29sKClcbiAgICBpZiAodnVpX3BhcmFtZXRlcnNfcHJlc2VudF9mbGFnKSB7XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkgeyAvLyBhc3BlY3RfcmF0aW9faW5mb19wcmVzZW50X2ZsYWdcbiAgICAgICAgbGV0IGFzcGVjdF9yYXRpb19pZGMgPSBnYi5yZWFkQnl0ZSgpXG4gICAgICAgIGxldCBwYXJfd190YWJsZSA9IFsxLCAxMiwgMTAsIDE2LCA0MCwgMjQsIDIwLCAzMiwgODAsIDE4LCAxNSwgNjQsIDE2MCwgNCwgMywgMl1cbiAgICAgICAgbGV0IHBhcl9oX3RhYmxlID0gWzEsIDExLCAxMSwgMTEsIDMzLCAxMSwgMTEsIDExLCAzMywgMTEsIDExLCAzMywgOTksIDMsIDIsIDFdXG5cbiAgICAgICAgaWYgKGFzcGVjdF9yYXRpb19pZGMgPiAwICYmIGFzcGVjdF9yYXRpb19pZGMgPCAxNikge1xuICAgICAgICAgIHBhcl93aWR0aCA9IHBhcl93X3RhYmxlW2FzcGVjdF9yYXRpb19pZGMgLSAxXVxuICAgICAgICAgIHBhcl9oZWlnaHQgPSBwYXJfaF90YWJsZVthc3BlY3RfcmF0aW9faWRjIC0gMV1cbiAgICAgICAgfSBlbHNlIGlmIChhc3BlY3RfcmF0aW9faWRjID09PSAyNTUpIHtcbiAgICAgICAgICBwYXJfd2lkdGggPSBnYi5yZWFkQnl0ZSgpIDw8IDggfCBnYi5yZWFkQnl0ZSgpXG4gICAgICAgICAgcGFyX2hlaWdodCA9IGdiLnJlYWRCeXRlKCkgPDwgOCB8IGdiLnJlYWRCeXRlKClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBnYi5yZWFkQm9vbCgpXG4gICAgICB9XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBnYi5yZWFkQml0cyg0KVxuICAgICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICAgIGdiLnJlYWRCaXRzKDI0KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBnYi5yZWFkVUVHKClcbiAgICAgICAgZ2IucmVhZFVFRygpXG4gICAgICB9XG4gICAgICBpZiAoZ2IucmVhZEJvb2woKSkge1xuICAgICAgICBsZXQgbnVtX3VuaXRzX2luX3RpY2sgPSBnYi5yZWFkQml0cygzMilcbiAgICAgICAgbGV0IHRpbWVfc2NhbGUgPSBnYi5yZWFkQml0cygzMilcbiAgICAgICAgZnBzX2ZpeGVkID0gZ2IucmVhZEJvb2woKVxuXG4gICAgICAgIGZwc19udW0gPSB0aW1lX3NjYWxlXG4gICAgICAgIGZwc19kZW4gPSBudW1fdW5pdHNfaW5fdGljayAqIDJcbiAgICAgICAgZnBzID0gZnBzX251bSAvIGZwc19kZW5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGFyU2NhbGUgPSAxXG4gICAgaWYgKHBhcl93aWR0aCAhPT0gMSB8fCBwYXJfaGVpZ2h0ICE9PSAxKSB7XG4gICAgICBwYXJTY2FsZSA9IHBhcl93aWR0aCAvIHBhcl9oZWlnaHRcbiAgICB9XG5cbiAgICBsZXQgY3JvcF91bml0X3ggPSAwLCBjcm9wX3VuaXRfeSA9IDBcbiAgICBpZiAoY2hyb21hX2Zvcm1hdF9pZGMgPT09IDApIHtcbiAgICAgIGNyb3BfdW5pdF94ID0gMVxuICAgICAgY3JvcF91bml0X3kgPSAyIC0gZnJhbWVfbWJzX29ubHlfZmxhZ1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgc3ViX3djID0gKGNocm9tYV9mb3JtYXRfaWRjID09PSAzKSA/IDEgOiAyXG4gICAgICBsZXQgc3ViX2hjID0gKGNocm9tYV9mb3JtYXRfaWRjID09PSAxKSA/IDIgOiAxXG4gICAgICBjcm9wX3VuaXRfeCA9IHN1Yl93Y1xuICAgICAgY3JvcF91bml0X3kgPSBzdWJfaGMgKiAoMiAtIGZyYW1lX21ic19vbmx5X2ZsYWcpXG4gICAgfVxuXG4gICAgbGV0IGNvZGVjX3dpZHRoID0gKHBpY193aWR0aF9pbl9tYnNfbWludXMxICsgMSkgKiAxNlxuICAgIGxldCBjb2RlY19oZWlnaHQgPSAoMiAtIGZyYW1lX21ic19vbmx5X2ZsYWcpICogKChwaWNfaGVpZ2h0X2luX21hcF91bml0c19taW51czEgKyAxKSAqIDE2KVxuXG4gICAgY29kZWNfd2lkdGggLT0gKGZyYW1lX2Nyb3BfbGVmdF9vZmZzZXQgKyBmcmFtZV9jcm9wX3JpZ2h0X29mZnNldCkgKiBjcm9wX3VuaXRfeFxuICAgIGNvZGVjX2hlaWdodCAtPSAoZnJhbWVfY3JvcF90b3Bfb2Zmc2V0ICsgZnJhbWVfY3JvcF9ib3R0b21fb2Zmc2V0KSAqIGNyb3BfdW5pdF95XG5cbiAgICBsZXQgcHJlc2VudF93aWR0aCA9IE1hdGguY2VpbChjb2RlY193aWR0aCAqIHBhclNjYWxlKVxuXG4gICAgZ2IuZGVzdHJveSgpXG4gICAgZ2IgPSBudWxsXG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvZmlsZV9zdHJpbmc6IHByb2ZpbGVfc3RyaW5nLFxuICAgICAgbGV2ZWxfc3RyaW5nOiBsZXZlbF9zdHJpbmcsXG4gICAgICBiaXRfZGVwdGg6IGJpdF9kZXB0aCxcbiAgICAgIGNocm9tYV9mb3JtYXQ6IGNocm9tYV9mb3JtYXQsXG4gICAgICBjaHJvbWFfZm9ybWF0X3N0cmluZzogU1BTUGFyc2VyLmdldENocm9tYUZvcm1hdFN0cmluZyhjaHJvbWFfZm9ybWF0KSxcblxuICAgICAgZnJhbWVfcmF0ZToge1xuICAgICAgICBmaXhlZDogZnBzX2ZpeGVkLFxuICAgICAgICBmcHM6IGZwcyxcbiAgICAgICAgZnBzX2RlbjogZnBzX2RlbixcbiAgICAgICAgZnBzX251bTogZnBzX251bVxuICAgICAgfSxcblxuICAgICAgcGFyX3JhdGlvOiB7XG4gICAgICAgIHdpZHRoOiBwYXJfd2lkdGgsXG4gICAgICAgIGhlaWdodDogcGFyX2hlaWdodFxuICAgICAgfSxcblxuICAgICAgY29kZWNfc2l6ZToge1xuICAgICAgICB3aWR0aDogY29kZWNfd2lkdGgsXG4gICAgICAgIGhlaWdodDogY29kZWNfaGVpZ2h0XG4gICAgICB9LFxuXG4gICAgICBwcmVzZW50X3NpemU6IHtcbiAgICAgICAgd2lkdGg6IHByZXNlbnRfd2lkdGgsXG4gICAgICAgIGhlaWdodDogY29kZWNfaGVpZ2h0XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIF9za2lwU2NhbGluZ0xpc3QgKGdiLCBjb3VudCkge1xuICAgIGxldCBsYXN0X3NjYWxlID0gOCwgbmV4dF9zY2FsZSA9IDhcbiAgICBsZXQgZGVsdGFfc2NhbGUgPSAwXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICBpZiAobmV4dF9zY2FsZSAhPT0gMCkge1xuICAgICAgICBkZWx0YV9zY2FsZSA9IGdiLnJlYWRTRUcoKVxuICAgICAgICBuZXh0X3NjYWxlID0gKGxhc3Rfc2NhbGUgKyBkZWx0YV9zY2FsZSArIDI1NikgJSAyNTZcbiAgICAgIH1cbiAgICAgIGxhc3Rfc2NhbGUgPSAobmV4dF9zY2FsZSA9PT0gMCkgPyBsYXN0X3NjYWxlIDogbmV4dF9zY2FsZVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRQcm9maWxlU3RyaW5nIChwcm9maWxlSWRjKSB7XG4gICAgc3dpdGNoIChwcm9maWxlSWRjKSB7XG4gICAgICBjYXNlIDY2OlxuICAgICAgICByZXR1cm4gJ0Jhc2VsaW5lJ1xuICAgICAgY2FzZSA3NzpcbiAgICAgICAgcmV0dXJuICdNYWluJ1xuICAgICAgY2FzZSA4ODpcbiAgICAgICAgcmV0dXJuICdFeHRlbmRlZCdcbiAgICAgIGNhc2UgMTAwOlxuICAgICAgICByZXR1cm4gJ0hpZ2gnXG4gICAgICBjYXNlIDExMDpcbiAgICAgICAgcmV0dXJuICdIaWdoMTAnXG4gICAgICBjYXNlIDEyMjpcbiAgICAgICAgcmV0dXJuICdIaWdoNDIyJ1xuICAgICAgY2FzZSAyNDQ6XG4gICAgICAgIHJldHVybiAnSGlnaDQ0NCdcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnVW5rbm93bidcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0TGV2ZWxTdHJpbmcgKGxldmVsSWRjKSB7XG4gICAgcmV0dXJuIChsZXZlbElkYyAvIDEwKS50b0ZpeGVkKDEpXG4gIH1cblxuICBzdGF0aWMgZ2V0Q2hyb21hRm9ybWF0U3RyaW5nIChjaHJvbWEpIHtcbiAgICBzd2l0Y2ggKGNocm9tYSkge1xuICAgICAgY2FzZSA0MjA6XG4gICAgICAgIHJldHVybiAnNDoyOjAnXG4gICAgICBjYXNlIDQyMjpcbiAgICAgICAgcmV0dXJuICc0OjI6MidcbiAgICAgIGNhc2UgNDQ0OlxuICAgICAgICByZXR1cm4gJzQ6NDo0J1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdVbmtub3duJ1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b1ZpZGVvTWV0YSAoc3BzQ29uZmlnKSB7XG4gICAgbGV0IG1ldGEgPSB7fVxuICAgIGlmIChzcHNDb25maWcgJiYgc3BzQ29uZmlnLmNvZGVjX3NpemUpIHtcbiAgICAgIG1ldGEuY29kZWNXaWR0aCA9IHNwc0NvbmZpZy5jb2RlY19zaXplLndpZHRoXG4gICAgICBtZXRhLmNvZGVjSGVpZ2h0ID0gc3BzQ29uZmlnLmNvZGVjX3NpemUuaGVpZ2h0XG4gICAgICBtZXRhLnByZXNlbnRXaWR0aCA9IHNwc0NvbmZpZy5wcmVzZW50X3NpemUud2lkdGhcbiAgICAgIG1ldGEucHJlc2VudEhlaWdodCA9IHNwc0NvbmZpZy5wcmVzZW50X3NpemUuaGVpZ2h0XG4gICAgfVxuXG4gICAgbWV0YS5wcm9maWxlID0gc3BzQ29uZmlnLnByb2ZpbGVfc3RyaW5nXG4gICAgbWV0YS5sZXZlbCA9IHNwc0NvbmZpZy5sZXZlbF9zdHJpbmdcbiAgICBtZXRhLmJpdERlcHRoID0gc3BzQ29uZmlnLmJpdF9kZXB0aFxuICAgIG1ldGEuY2hyb21hRm9ybWF0ID0gc3BzQ29uZmlnLmNocm9tYV9mb3JtYXRcblxuICAgIG1ldGEucGFyUmF0aW8gPSB7XG4gICAgICB3aWR0aDogc3BzQ29uZmlnLnBhcl9yYXRpby53aWR0aCxcbiAgICAgIGhlaWdodDogc3BzQ29uZmlnLnBhcl9yYXRpby5oZWlnaHRcbiAgICB9XG5cbiAgICBtZXRhLmZyYW1lUmF0ZSA9IHNwc0NvbmZpZy5mcmFtZV9yYXRlXG5cbiAgICBsZXQgZnBzRGVuID0gbWV0YS5mcmFtZVJhdGUuZnBzX2RlblxuICAgIGxldCBmcHNOdW0gPSBtZXRhLmZyYW1lUmF0ZS5mcHNfbnVtXG4gICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IobWV0YS50aW1lc2NhbGUgKiAoZnBzRGVuIC8gZnBzTnVtKSlcbiAgICByZXR1cm4gbWV0YTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTUFNQYXJzZXJcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBITFNcbiAgTTNVOFBhcnNlcjogcmVxdWlyZSgnLi9zcmMvaGxzL2RlbXV4ZXIvbTN1OHBhcnNlcicpLmRlZmF1bHQsXG4gIFRzRGVtdXhlcjogcmVxdWlyZSgnLi9zcmMvaGxzL2RlbXV4ZXIvdHMnKS5kZWZhdWx0LFxuICBQbGF5bGlzdDogcmVxdWlyZSgnLi9zcmMvaGxzL3BsYXlsaXN0JykuZGVmYXVsdCxcbiAgRmx2RGVtdXhlcjogcmVxdWlyZSgnLi9zcmMvZmx2L2luZGV4JykuZGVmYXVsdFxufTtcbiIsImltcG9ydCB7IGlzTGUsIFVURjggfSBmcm9tICd4Z3BsYXllci11dGlscydcblxuY29uc3QgREFUQV9UWVBFUyA9IHtcbiAgTlVNQkVSOiAwLFxuICBCT09MRUFOOiAxLFxuICBTVFJJTkc6IDIsXG4gIE9CSkVDVDogMyxcbiAgTUlYX0FSUkFZOiA4LFxuICBPQkpFQ1RfRU5EOiA5LFxuICBTVFJJQ1RfQVJSQVk6IDEwLFxuICBEQVRFOiAxMSxcbiAgTE9ORV9TVFJJTkc6IDEyXG59XG5cbi8qKlxuICogbWV0YeS/oeaBr+ino+aekFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBTUZQYXJzZXIge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5vZmZzZXQgPSAwXG4gICAgdGhpcy5yZWFkT2Zmc2V0ID0gdGhpcy5vZmZzZXRcbiAgfVxuXG4gIHJlc29sdmUgKG1ldGEsIHNpemUpIHtcbiAgICBpZiAoc2l6ZSA8IDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGVub3VnaCBkYXRhIGZvciBtZXRhaW5mbycpXG4gICAgfVxuICAgIGNvbnN0IG1ldGFEYXRhID0ge31cbiAgICBjb25zdCBuYW1lID0gdGhpcy5wYXJzZVZhbHVlKG1ldGEpXG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnBhcnNlVmFsdWUobWV0YSwgc2l6ZSAtIG5hbWUuYm9keVNpemUpXG4gICAgbWV0YURhdGFbbmFtZS5kYXRhXSA9IHZhbHVlLmRhdGFcblxuICAgIHRoaXMucmVzZXRTdGF0dXMoKVxuICAgIHJldHVybiBtZXRhRGF0YVxuICB9XG5cbiAgcmVzZXRTdGF0dXMgKCkge1xuICAgIHRoaXMub2Zmc2V0ID0gMFxuICAgIHRoaXMucmVhZE9mZnNldCA9IHRoaXMub2Zmc2V0XG4gIH1cblxuICBwYXJzZVN0cmluZyAoYnVmZmVyKSB7XG4gICAgY29uc3QgZHYgPSBuZXcgRGF0YVZpZXcoYnVmZmVyLCB0aGlzLnJlYWRPZmZzZXQpXG4gICAgY29uc3Qgc3RyTGVuID0gZHYuZ2V0VWludDE2KDAsICFpc0xlKVxuICAgIGxldCBzdHIgPSAnJ1xuICAgIGlmIChzdHJMZW4gPiAwKSB7XG4gICAgICBzdHIgPSBVVEY4LmRlY29kZShuZXcgVWludDhBcnJheShidWZmZXIsIHRoaXMucmVhZE9mZnNldCArIDIsIHN0ckxlbikpXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0ciA9ICcnXG4gICAgfVxuICAgIGxldCBzaXplID0gc3RyTGVuICsgMlxuICAgIHRoaXMucmVhZE9mZnNldCArPSBzaXplXG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IHN0cixcbiAgICAgIGJvZHlTaXplOiBzdHJMZW4gKyAyXG4gICAgfVxuICB9XG5cbiAgcGFyc2VEYXRlIChidWZmZXIsIHNpemUpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldCwgc2l6ZSlcbiAgICBsZXQgdHMgPSBkdi5nZXRGbG9hdDY0KDAsICFpc0xlKVxuICAgIGNvbnN0IHRpbWVPZmZzZXQgPSBkdi5nZXRJbnQxNig4LCAhaXNMZSlcbiAgICB0cyArPSB0aW1lT2Zmc2V0ICogNjAgKiAxMDAwXG5cbiAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMTBcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbmV3IERhdGUodHMpLFxuICAgICAgYm9keVNpemU6IDEwXG4gICAgfVxuICB9XG5cbiAgcGFyc2VPYmplY3QgKGJ1ZmZlciwgc2l6ZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgc2l6ZSlcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIHNpemUgLSBuYW1lLmJvZHlTaXplKVxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6IG5hbWUuZGF0YSxcbiAgICAgICAgdmFsdWU6IHZhbHVlLmRhdGFcbiAgICAgIH0sXG4gICAgICBib2R5U2l6ZTogbmFtZS5ib2R5U2l6ZSArIHZhbHVlLmJvZHlTaXplLFxuICAgICAgaXNPYmpFbmQ6IHZhbHVlLmlzT2JqRW5kXG4gICAgfVxuICB9XG5cbiAgcGFyc2VMb25nU3RyaW5nIChidWZmZXIpIHtcbiAgICBjb25zdCBkdiA9IG5ldyBEYXRhVmlldyhidWZmZXIsIHRoaXMucmVhZE9mZnNldClcbiAgICBjb25zdCBzdHJMZW4gPSBkdi5nZXRVaW50MzIoMCwgIWlzTGUpXG4gICAgbGV0IHN0ciA9ICcnXG4gICAgaWYgKHN0ckxlbiA+IDApIHtcbiAgICAgIHN0ciA9IFVURjguZGVjb2RlKG5ldyBVaW50OEFycmF5KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0ICsgMiwgc3RyTGVuKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gJydcbiAgICB9XG4gICAgLy8gY29uc3Qgc2l6ZSA9IHN0ckxlbiArIDQ7XG4gICAgdGhpcy5yZWFkT2Zmc2V0ICs9IHN0ckxlbiArIDRcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogc3RyLFxuICAgICAgYm9keVNpemU6IHN0ckxlbiArIDRcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6Kej5p6QbWV0YeS4reeahOWPmOmHj1xuICAgKi9cbiAgcGFyc2VWYWx1ZSAoZGF0YSwgc2l6ZSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQXJyYXlCdWZmZXIoKVxuICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIGJ1ZmZlciA9IGRhdGFcbiAgICB9IGVsc2Uge1xuICAgICAgYnVmZmVyID0gZGF0YS5idWZmZXJcbiAgICB9XG4gICAgY29uc3Qge1xuICAgICAgTlVNQkVSLFxuICAgICAgQk9PTEVBTixcbiAgICAgIFNUUklORyxcbiAgICAgIE9CSkVDVCxcbiAgICAgIE1JWF9BUlJBWSxcbiAgICAgIE9CSkVDVF9FTkQsXG4gICAgICBTVFJJQ1RfQVJSQVksXG4gICAgICBEQVRFLFxuICAgICAgTE9ORV9TVFJJTkdcbiAgICB9ID0gREFUQV9UWVBFU1xuICAgIGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlciwgdGhpcy5yZWFkT2Zmc2V0LCBzaXplKVxuICAgIGxldCBpc09iakVuZCA9IGZhbHNlXG4gICAgY29uc3QgdHlwZSA9IGRhdGFWaWV3LmdldFVpbnQ4KDApXG4gICAgbGV0IG9mZnNldCA9IDFcbiAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMVxuICAgIGxldCB2YWx1ZSA9IG51bGxcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBOVU1CRVI6IHtcbiAgICAgICAgdmFsdWUgPSBkYXRhVmlldy5nZXRGbG9hdDY0KDEsICFpc0xlKVxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gOFxuICAgICAgICBvZmZzZXQgKz0gOFxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBCT09MRUFOOiB7XG4gICAgICAgIGNvbnN0IGJvb2xOdW0gPSBkYXRhVmlldy5nZXRVaW50OCgxKVxuICAgICAgICB2YWx1ZSA9ICEhYm9vbE51bVxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gMVxuICAgICAgICBvZmZzZXQgKz0gMVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBTVFJJTkc6IHtcbiAgICAgICAgY29uc3Qgc3RyID0gdGhpcy5wYXJzZVN0cmluZyhidWZmZXIpXG4gICAgICAgIHZhbHVlID0gc3RyLmRhdGFcbiAgICAgICAgb2Zmc2V0ICs9IHN0ci5ib2R5U2l6ZVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgY2FzZSBPQkpFQ1Q6IHtcbiAgICAgICAgdmFsdWUgPSB7fVxuICAgICAgICBsZXQgb2JqRW5kU2l6ZSA9IDBcbiAgICAgICAgaWYgKGRhdGFWaWV3LmdldFVpbnQzMihzaXplIC0gNCwgIWlzTGUpICYgMHgwMEZGRkZGRikge1xuICAgICAgICAgIG9iakVuZFNpemUgPSAzXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5yZWFkT2Zmc2V0ICs9IG9mZnNldCAtIDE7XG4gICAgICAgIHdoaWxlIChvZmZzZXQgPCBzaXplIC0gNCkge1xuICAgICAgICAgIGNvbnN0IGFtZk9iaiA9IHRoaXMucGFyc2VPYmplY3QoYnVmZmVyLCBzaXplIC0gb2Zmc2V0IC0gb2JqRW5kU2l6ZSlcbiAgICAgICAgICBpZiAoYW1mT2JqLmlzT2JqZWN0RW5kKSB7IGJyZWFrIH1cbiAgICAgICAgICB2YWx1ZVthbWZPYmouZGF0YS5uYW1lXSA9IGFtZk9iai5kYXRhLnZhbHVlXG4gICAgICAgICAgb2Zmc2V0ICs9IGFtZk9iai5ib2R5U2l6ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChvZmZzZXQgPD0gc2l6ZSAtIDMpIHtcbiAgICAgICAgICBjb25zdCBtYXJrID0gZGF0YVZpZXcuZ2V0VWludDMyKG9mZnNldCAtIDEsICFpc0xlKSAmIDB4MDBGRkZGRkZcbiAgICAgICAgICBpZiAobWFyayA9PT0gOSkge1xuICAgICAgICAgICAgdGhpcy5yZWFkT2Zmc2V0ICs9IDNcbiAgICAgICAgICAgIG9mZnNldCArPSAzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlIE1JWF9BUlJBWToge1xuICAgICAgICB2YWx1ZSA9IHt9XG4gICAgICAgIG9mZnNldCArPSA0XG4gICAgICAgIHRoaXMucmVhZE9mZnNldCArPSA0XG4gICAgICAgIGxldCBvYmpFbmRTaXplID0gMFxuICAgICAgICBpZiAoKGRhdGFWaWV3LmdldFVpbnQzMihzaXplIC0gNCwgIWlzTGUpICYgMHgwMEZGRkZGRikgPT09IDkpIHtcbiAgICAgICAgICBvYmpFbmRTaXplID0gM1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA8IHNpemUgLSA4KSB7XG4gICAgICAgICAgY29uc3QgYW1mVmFyID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIHNpemUgLSBvZmZzZXQgLSBvYmpFbmRTaXplKVxuICAgICAgICAgIGlmIChhbWZWYXIuaXNPYmplY3RFbmQpIHsgYnJlYWsgfVxuICAgICAgICAgIHZhbHVlW2FtZlZhci5kYXRhLm5hbWVdID0gYW1mVmFyLmRhdGEudmFsdWVcbiAgICAgICAgICBvZmZzZXQgKz0gYW1mVmFyLmJvZHlTaXplXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9mZnNldCA8PSBzaXplIC0gMykge1xuICAgICAgICAgIGNvbnN0IG1hcmtlciA9IGRhdGFWaWV3LmdldFVpbnQzMihvZmZzZXQgLSAxLCAhaXNMZSkgJiAweDAwRkZGRkZGXG4gICAgICAgICAgaWYgKG1hcmtlciA9PT0gOSkge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDNcbiAgICAgICAgICAgIHRoaXMucmVhZE9mZnNldCArPSAzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgT0JKRUNUX0VORDoge1xuICAgICAgICB2YWx1ZSA9IG51bGxcbiAgICAgICAgaXNPYmpFbmQgPSB0cnVlXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgU1RSSUNUX0FSUkFZOiB7XG4gICAgICAgIHZhbHVlID0gW11cbiAgICAgICAgY29uc3QgYXJyTGVuZ3RoID0gZGF0YVZpZXcuZ2V0VWludDMyKDEsICFpc0xlKVxuICAgICAgICBvZmZzZXQgKz0gNFxuICAgICAgICB0aGlzLnJlYWRPZmZzZXQgKz0gNFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyckxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgc2l6ZSAtIG9mZnNldClcbiAgICAgICAgICB2YWx1ZS5wdXNoKHNjcmlwdC5kYXRhKVxuICAgICAgICAgIG9mZnNldCArPSBzY3JpcHQuYm9keVNpemVcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBjYXNlIERBVEU6IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHRoaXMucGFyc2VEYXRlKGJ1ZmZlciwgc2l6ZSAtIDEpXG4gICAgICAgIHZhbHVlID0gZGF0ZS5kYXRhXG4gICAgICAgIG9mZnNldCArPSBkYXRlLmJvZHlTaXplXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGNhc2UgTE9ORV9TVFJJTkc6IHtcbiAgICAgICAgY29uc3QgbG9uZ1N0ciA9IHRoaXMucGFyc2VMb25nU3RyaW5nKGJ1ZmZlciwgc2l6ZSAtIDEpXG4gICAgICAgIHZhbHVlID0gbG9uZ1N0ci5kYXRhXG4gICAgICAgIG9mZnNldCArPSBsb25nU3RyLmJvZHlTaXplXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgb2Zmc2V0ID0gc2l6ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiB2YWx1ZSxcbiAgICAgIGJvZHlTaXplOiBvZmZzZXQsXG4gICAgICBpc09iakVuZDogaXNPYmpFbmRcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEVWRU5UUywgQXVkaW9UcmFja01ldGEsIFZpZGVvVHJhY2tNZXRhLCBzbmlmZmVyIH0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuaW1wb3J0IHsgU3BzUGFyc2VyIH0gZnJvbSAneGdwbGF5ZXItY29kZWMnO1xuaW1wb3J0IHsgVmlkZW9UcmFjaywgQXVkaW9UcmFjayB9IGZyb20gJ3hncGxheWVyLWJ1ZmZlcidcbmltcG9ydCBBTUZQYXJzZXIgZnJvbSAnLi9hbWYtcGFyc2VyJ1xuXG5jb25zdCBERU1VWF9FVkVOVFMgPSBFVkVOVFMuREVNVVhfRVZFTlRTO1xuXG5jbGFzcyBGbHZEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuX2ZpcnN0RnJhZ21lbnRMb2FkZWQgPSBmYWxzZVxuICAgIHRoaXMuX3RyYWNrTnVtID0gMFxuICAgIHRoaXMuX2hhc1NjcmlwdCA9IGZhbHNlXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLm9uKERFTVVYX0VWRU5UUy5ERU1VWF9TVEFSVCwgdGhpcy5kb1BhcnNlRmx2LmJpbmQodGhpcykpXG4gIH1cblxuICAvKipcbiAgICogaWYgdGhlIGZsdiBoZWFkIGlzIHZhbGlkXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGlzRmx2RmlsZSAoZGF0YSkge1xuICAgIHJldHVybiAhKGRhdGFbMF0gIT09IDB4NDYgfHwgZGF0YVsxXSAhPT0gMHg0QyB8fCBkYXRhWzJdICE9PSAweDU2IHx8IGRhdGFbM10gIT09IDB4MDEpXG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIHN0cmVhbSBoYXMgYXVkaW8gb3IgdmlkZW8uXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlYW1GbGFnIC0gRGF0YSBmcm9tIHRoZSBzdHJlYW0gd2hpY2ggaXMgZGVmaW5lIHdoZXRoZXIgdGhlIGF1ZGlvIC8gdmlkZW8gdHJhY2sgaXMgZXhpc3QuXG4gICAqL1xuICBzdGF0aWMgZ2V0UGxheVR5cGUgKHN0cmVhbUZsYWcpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICBoYXNWaWRlbzogZmFsc2UsXG4gICAgICBoYXNBdWRpbzogZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc3RyZWFtRmxhZyAmIDB4MDEgPiAwKSB7XG4gICAgICByZXN1bHQuaGFzVmlkZW8gPSB0cnVlXG4gICAgfVxuXG4gICAgaWYgKHN0cmVhbUZsYWcgJiAweDA0ID4gMCkge1xuICAgICAgcmVzdWx0Lmhhc0F1ZGlvID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGRvUGFyc2VGbHYgKCkge1xuICAgIGlmICghdGhpcy5fZmlyc3RGcmFnbWVudExvYWRlZCkge1xuICAgICAgaWYgKHRoaXMubG9hZGVyQnVmZmVyLmxlbmd0aCA8IDEzKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3QgaGVhZGVyID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMTMpXG4gICAgICB0aGlzLnBhcnNlRmx2SGVhZGVyKGhlYWRlcilcbiAgICAgIHRoaXMuZG9QYXJzZUZsdigpIC8vIOmAkuW9kuiwg+eUqO+8jOe7p+e7reino+aekGZsdua1gVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgMTEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBsZXQgY2h1bms7XG5cbiAgICAgIGxldCBsb29wTWF4ID0gMTAwMDAwIC8vIOmYsuatouatu+W+queOr+S6p+eUn1xuICAgICAgZG8ge1xuICAgICAgICBjaHVuayA9IHRoaXMuX3BhcnNlRmx2VGFnKClcbiAgICAgIH0gd2hpbGUgKGNodW5rICYmIGxvb3BNYXgtLSA+IDApXG5cbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfQ09NUExFVEUpXG4gICAgfVxuICB9XG5cbiAgcGFyc2VGbHZIZWFkZXIgKGhlYWRlcikge1xuICAgIGlmICghRmx2RGVtdXhlci5pc0ZsdkZpbGUoaGVhZGVyKSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKCdpbnZhbGlkIGZsdiBmaWxlJykpXG4gICAgICB0aGlzLmRvUGFyc2VGbHYoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maXJzdEZyYWdtZW50TG9hZGVkID0gdHJ1ZVxuICAgICAgY29uc3QgcGxheVR5cGUgPSBGbHZEZW11eGVyLmdldFBsYXlUeXBlKGhlYWRlcls0XSlcblxuICAgICAgaWYgKHBsYXlUeXBlLmhhc1ZpZGVvKSB7XG4gICAgICAgIHRoaXMuaW5pdFZpZGVvVHJhY2soKVxuICAgICAgfVxuXG4gICAgICBpZiAocGxheVR5cGUuaGFzQXVkaW8pIHtcbiAgICAgICAgdGhpcy5pbml0QXVkaW9UcmFjaygpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZG9QYXJzZUZsdigpXG4gIH1cblxuICAvKipcbiAgICogaW5pdCBkZWZhdWx0IHZpZGVvIHRyYWNrIGNvbmZpZ3NcbiAgICovXG4gIGluaXRWaWRlb1RyYWNrICgpIHtcbiAgICB0aGlzLl90cmFja051bSsrXG4gICAgbGV0IHZpZGVvVHJhY2sgPSBuZXcgVmlkZW9UcmFjaygpXG4gICAgdmlkZW9UcmFjay5tZXRhID0gbmV3IFZpZGVvVHJhY2tNZXRhKClcbiAgICB2aWRlb1RyYWNrLmlkID0gdmlkZW9UcmFjay5tZXRhLmlkID0gdGhpcy5fdHJhY2tOdW1cblxuICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2sgPSB2aWRlb1RyYWNrXG4gIH1cblxuICAvKipcbiAgICogaW5pdCBkZWZhdWx0IGF1ZGlvIHRyYWNrIGNvbmZpZ3NcbiAgICovXG4gIGluaXRBdWRpb1RyYWNrICgpIHtcbiAgICB0aGlzLl90cmFja051bSsrXG4gICAgbGV0IGF1ZGlvVHJhY2sgPSBuZXcgQXVkaW9UcmFjaygpXG4gICAgYXVkaW9UcmFjay5tZXRhID0gbmV3IEF1ZGlvVHJhY2tNZXRhKClcbiAgICBhdWRpb1RyYWNrLmlkID0gYXVkaW9UcmFjay5tZXRhLmlkID0gdGhpcy5fdHJhY2tOdW1cblxuICAgIHRoaXMudHJhY2tzLmF1ZGlvVHJhY2sgPSBhdWRpb1RyYWNrXG4gIH1cblxuICAvKipcbiAgICogUGFja2FnZSB0aGUgZGF0YSBhcyB0aGUgZm9sbG93aW5nIGRhdGEgc3RydWN0dXJlXG4gICAqIHtcbiAgICogICAgZGF0YTogVWludDhBcnJheS4gdGhlIFN0cmVhbSBkYXRhLlxuICAgKiAgICBpbmZvOiBUaGUgZmlyc3QgYnl0ZSBpbmZvIG9mIHRoZSBUYWcuXG4gICAqICAgIHRhZ1R5cGU6IDjjgIE544CBMThcbiAgICogICAgdGltZVN0YW1wOiB0aGUgdGltZXN0ZW1wXG4gICAqIH1cbiAgICovXG4gIF9wYXJzZUZsdlRhZyAoKSB7XG4gICAgaWYgKHRoaXMubG9hZGVyQnVmZmVyLmxlbmd0aCA8IDExKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICBsZXQgY2h1bmsgPSB0aGlzLl9wYXJzZUZsdlRhZ0hlYWRlcigpXG4gICAgaWYgKGNodW5rKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzQ2h1bmsoY2h1bmspXG4gICAgfVxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIHRoZSAxMSBieXRlIHRhZyBIZWFkZXJcbiAgICovXG4gIF9wYXJzZUZsdlRhZ0hlYWRlciAoKSB7XG4gICAgbGV0IG9mZnNldCA9IDBcbiAgICBsZXQgY2h1bmsgPSB7fVxuXG4gICAgbGV0IHRhZ1R5cGUgPSB0aGlzLmxvYWRlckJ1ZmZlci50b0ludChvZmZzZXQsIDEpXG4gICAgb2Zmc2V0ICs9IDFcblxuICAgIC8vIDIgYml0IEZNUyByZXNlcnZlZCwgMSBiaXQgZmlsdGVyZWQsIDUgYml0IHRhZyB0eXBlXG4gICAgY2h1bmsuZmlsdGVyZWQgPSAodGFnVHlwZSAmIDMyKSA+Pj4gNVxuICAgIGNodW5rLnRhZ1R5cGUgPSB0YWdUeXBlICYgMzFcblxuICAgIC8vIDMgQnl0ZSBkYXRhc2l6ZVxuICAgIGNodW5rLmRhdGFzaXplID0gdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQob2Zmc2V0LCAzKVxuICAgIG9mZnNldCArPSAzXG5cbiAgICBpZiAoKGNodW5rLnRhZ1R5cGUgIT09IDggJiYgY2h1bmsudGFnVHlwZSAhPT0gOSAmJiBjaHVuay50YWdUeXBlICE9PSAxMSAmJiBjaHVuay50YWdUeXBlICE9PSAxOCkgfHxcbiAgICAgIHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDgsIDMpICE9PSAwKSB7XG4gICAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIgJiYgdGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVxuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcigndGFnVHlwZSAnICsgY2h1bmsudGFnVHlwZSksIGZhbHNlKVxuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAodGhpcy5sb2FkZXJCdWZmZXIubGVuZ3RoIDwgY2h1bmsuZGF0YXNpemUgKyAxNSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICAvLyByZWFkIHRoZSBkYXRhLlxuICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDQpXG5cbiAgICAvLyAzIEJ5dGUgdGltZXN0YW1wXG4gICAgbGV0IHRpbWVzdGFtcCA9IHRoaXMubG9hZGVyQnVmZmVyLnRvSW50KDAsIDMpXG4gICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMylcblxuICAgIC8vIDEgQnl0ZSB0aW1lc3RhbXBFeHRcbiAgICBsZXQgdGltZXN0YW1wRXh0ID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlbMF1cbiAgICBpZiAodGltZXN0YW1wRXh0ID4gMCkge1xuICAgICAgdGltZXN0YW1wICs9IHRpbWVzdGFtcEV4dCAqIDB4MTAwMDAwMFxuICAgIH1cblxuICAgIGNodW5rLmR0cyA9IHRpbWVzdGFtcFxuXG4gICAgLy8gc3RyZWFtSWRcbiAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgzKVxuICAgIHJldHVybiBjaHVua1xuICB9XG5cbiAgX3Byb2Nlc3NDaHVuayAoY2h1bmspIHtcbiAgICBzd2l0Y2ggKGNodW5rLnRhZ1R5cGUpIHtcbiAgICAgIGNhc2UgMTg6XG4gICAgICAgIHRoaXMuX3BhcnNlU2NyaXB0RGF0YShjaHVuaylcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgODpcbiAgICAgICAgdGhpcy5fcGFyc2VBQUNEYXRhKGNodW5rKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSA5OlxuICAgICAgICB0aGlzLl9wYXJzZUhldmNEYXRhKGNodW5rKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAxMTpcbiAgICAgICAgLy8gZm9yIHNvbWUgQ0ROIHRoYXQgZGlkIG5vdCBwcm9jZXNzIHRoZSBjdXJyZWN0IFJUTVAgbWVzc2FnZXNcbiAgICAgICAgdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMylcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGZsdiBzY3JpcHQgZGF0YVxuICAgKiBAcGFyYW0gY2h1bmtcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9wYXJzZVNjcmlwdERhdGEgKGNodW5rKSB7XG4gICAgbGV0IGF1ZGlvVHJhY2sgPSB0aGlzLnRyYWNrcy5hdWRpb1RyYWNrXG4gICAgbGV0IHZpZGVvVHJhY2sgPSB0aGlzLnRyYWNrcy52aWRlb1RyYWNrXG5cbiAgICBsZXQgZGF0YSA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KGNodW5rLmRhdGFzaXplKVxuXG4gICAgY29uc3QgaW5mbyA9IG5ldyBBTUZQYXJzZXIoKS5yZXNvbHZlKGRhdGEsIGRhdGEubGVuZ3RoKVxuXG4gICAgY29uc3Qgb25NZXRhRGF0YSA9IHRoaXMuX2NvbnRleHQub25NZXRhRGF0YSA9IGluZm8gPyBpbmZvLm9uTWV0YURhdGEgOiB1bmRlZmluZWRcblxuICAgIC8vIGZpbGwgbWVkaWFJbmZvXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uZHVyYXRpb24gPSBvbk1ldGFEYXRhLmR1cmF0aW9uXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uaGFzVmlkZW8gPSBvbk1ldGFEYXRhLmhhc1ZpZGVvXG4gICAgdGhpcy5fY29udGV4dC5tZWRpYUluZm8uaHNhQXVkaW8gPSBvbk1ldGFEYXRhLmhhc0F1ZGlvXG5cbiAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSlcbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVESUFfSU5GTylcbiAgICAgIHRoaXMuX2hhc1NjcmlwdCA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBFZGl0IGRlZmF1bHQgbWV0YS5cbiAgICBpZiAoYXVkaW9UcmFjayAmJiAhYXVkaW9UcmFjay5oYXNTcGVjaWZpY0NvbmZpZykge1xuICAgICAgbGV0IG1ldGEgPSBhdWRpb1RyYWNrLm1ldGFcbiAgICAgIGlmIChvbk1ldGFEYXRhLmF1ZGlvc2FtcGxlcmF0ZSkge1xuICAgICAgICBtZXRhLnNhbXBsZVJhdGUgPSBvbk1ldGFEYXRhLmF1ZGlvc2FtcGxlcmF0ZVxuICAgICAgfVxuXG4gICAgICBpZiAob25NZXRhRGF0YS5hdWRpb2NoYW5uZWxzKSB7XG4gICAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gb25NZXRhRGF0YS5hdWRpb2NoYW5uZWxzXG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAob25NZXRhRGF0YS5hdWRpb3NhbXBsZXJhdGUpIHtcbiAgICAgICAgY2FzZSA0NDEwMDpcbiAgICAgICAgICBtZXRhLnNhbXBsZVJhdGVJbmRleCA9IDRcbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDIyMDUwOlxuICAgICAgICAgIG1ldGEuc2FtcGxlUmF0ZUluZGV4ID0gN1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTEwMjU6XG4gICAgICAgICAgbWV0YS5zYW1wbGVSYXRlSW5kZXggPSAxMFxuICAgICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIGlmICh2aWRlb1RyYWNrICYmICF2aWRlb1RyYWNrLmhhc1NwZWNpZmljQ29uZmlnKSB7XG4gICAgICBsZXQgbWV0YSA9IHZpZGVvVHJhY2subWV0YVxuICAgICAgaWYgKHR5cGVvZiBvbk1ldGFEYXRhLmZyYW1lcmF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgbGV0IGZwc051bSA9IE1hdGguZmxvb3Iob25NZXRhRGF0YS5mcmFtZXJhdGUgKiAxMDAwKVxuICAgICAgICBpZiAoZnBzTnVtID4gMCkge1xuICAgICAgICAgIGxldCBmcHMgPSBmcHNOdW0gLyAxMDAwXG4gICAgICAgICAgaWYgKCFtZXRhLmZyYW1lUmF0ZSkge1xuICAgICAgICAgICAgbWV0YS5mcmFtZVJhdGUgPSB7fVxuICAgICAgICAgIH1cbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5maXhlZCA9IHRydWVcbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5mcHMgPSBmcHNcbiAgICAgICAgICBtZXRhLmZyYW1lUmF0ZS5mcHNfbnVtID0gZnBzTnVtXG4gICAgICAgICAgbWV0YS5mcmFtZVJhdGUuZnBzX2RlbiA9IDEwMDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hYWNTZXF1ZW5jZUhlYWRlclBhcnNlciAoZGF0YSkge1xuICAgIGxldCByZXQgPSB7fVxuICAgIHJldC5oYXNTcGVjaWZpY0NvbmZpZyA9IHRydWVcbiAgICByZXQub2JqZWN0VHlwZSA9IGRhdGFbMV0gPj4+IDNcbiAgICByZXQub3JpZ2luT2JqZWN0VHlwZSA9IHJldC5vYmplY3RUeXBlXG4gICAgcmV0LnNhbXBsZVJhdGVJbmRleCA9ICgoZGF0YVsxXSAmIDcpIDw8IDEpIHwgKGRhdGFbMl0gPj4+IDcpXG4gICAgcmV0LmF1ZGlvc2FtcGxlcmF0ZSA9IHRoaXMuX3N3aXRjaEF1ZGlvU2FtcGxlUmF0ZShyZXQuc2FtcGxlUmF0ZUluZGV4KVxuICAgIHJldC5jaGFubmVsQ291bnQgPSAoZGF0YVsyXSAmIDEyMCkgPj4+IDNcbiAgICByZXQuZnJhbWVMZW5ndGggPSAoZGF0YVsyXSAmIDQpID4+PiAyXG4gICAgcmV0LmRlcGVuZHNPbkNvcmVDb2RlciA9IChkYXRhWzJdICYgMikgPj4+IDFcbiAgICByZXQuZXh0ZW5zaW9uRmxhZ0luZGV4ID0gZGF0YVsyXSAmIDFcblxuICAgIHJldC5jb2RlYyA9IGBtcDRhLjQwLiR7cmV0Lm9iamVjdFR5cGV9YFxuICAgIGxldCB1c2VyQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBleHRlbnNpb25TYW1wbGluZ0luZGV4O1xuXG4gICAgbGV0IGNvbmZpZztcbiAgICBsZXQgc2FtcGxpbmdJbmRleCA9IHJldC5zYW1wbGVSYXRlSW5kZXg7XG5cbiAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTEpIHtcbiAgICAgIC8vIGZpcmVmb3g6IHVzZSBTQlIgKEhFLUFBQykgaWYgZnJlcSBsZXNzIHRoYW4gMjRrSHpcbiAgICAgIGlmIChyZXQuc2FtcGxlUmF0ZUluZGV4ID49IDYpIHtcbiAgICAgICAgcmV0Lm9iamVjdFR5cGUgPSA1O1xuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoNCk7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSBzYW1wbGluZ0luZGV4IC0gMztcbiAgICAgIH0gZWxzZSB7IC8vIHVzZSBMQy1BQUNcbiAgICAgICAgcmV0Lm9iamVjdFR5cGUgPSAyO1xuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSBzYW1wbGluZ0luZGV4O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPT0gLTEgfHwgc25pZmZlci5icm93c2VyID09PSAnc2FmYXJpJykge1xuICAgICAgLy8gYW5kcm9pZDogYWx3YXlzIHVzZSBMQy1BQUNcbiAgICAgIHJldC5vYmplY3RUeXBlID0gMjtcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSBzYW1wbGluZ0luZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3Igb3RoZXIgYnJvd3NlcnMsIGUuZy4gY2hyb21lLi4uXG4gICAgICAvLyBBbHdheXMgdXNlIEhFLUFBQyB0byBtYWtlIGl0IGVhc2llciB0byBzd2l0Y2ggYWFjIGNvZGVjIHByb2ZpbGVcbiAgICAgIHJldC5vYmplY3RUeXBlID0gNTtcbiAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSByZXQuc2FtcGxlUmF0ZUluZGV4O1xuICAgICAgY29uZmlnID0gbmV3IEFycmF5KDQpO1xuXG4gICAgICBpZiAocmV0LnNhbXBsZVJhdGVJbmRleCA+PSA2KSB7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSByZXQuc2FtcGxlUmF0ZUluZGV4IC0gMztcbiAgICAgIH0gZWxzZSBpZiAocmV0LmNoYW5uZWxDb3VudCA9PT0gMSkgeyAvLyBNb25vIGNoYW5uZWxcbiAgICAgICAgcmV0Lm9iamVjdFR5cGUgPSAyO1xuICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICAgIGV4dGVuc2lvblNhbXBsaW5nSW5kZXggPSByZXQuc2FtcGxlUmF0ZUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbmZpZ1swXSA9IHJldC5vYmplY3RUeXBlIDw8IDM7XG4gICAgY29uZmlnWzBdIHw9IChyZXQuc2FtcGxlUmF0ZUluZGV4ICYgMHgwRikgPj4+IDE7XG4gICAgY29uZmlnWzFdID0gKHJldC5zYW1wbGVSYXRlSW5kZXggJiAweDBGKSA8PCA3O1xuICAgIGNvbmZpZ1sxXSB8PSAocmV0LmNoYW5uZWxDb3VudCAmIDB4MEYpIDw8IDM7XG4gICAgaWYgKHJldC5vYmplY3RUeXBlID09PSA1KSB7XG4gICAgICBjb25maWdbMV0gfD0gKChleHRlbnNpb25TYW1wbGluZ0luZGV4ICYgMHgwRikgPj4+IDEpO1xuICAgICAgY29uZmlnWzJdID0gKGV4dGVuc2lvblNhbXBsaW5nSW5kZXggJiAweDAxKSA8PCA3O1xuICAgICAgLy8gZXh0ZW5kZWQgYXVkaW8gb2JqZWN0IHR5cGU6IGZvcmNlIHRvIDIgKExDLUFBQylcbiAgICAgIGNvbmZpZ1syXSB8PSAoMiA8PCAyKTtcbiAgICAgIGNvbmZpZ1szXSA9IDA7XG4gICAgfVxuICAgIHJldC5jb25maWcgPSBjb25maWdcbiAgICByZXR1cm4gcmV0XG4gIH1cblxuICBfcGFyc2VBQUNEYXRhIChjaHVuaykge1xuICAgIGxldCB0cmFjayA9IHRoaXMudHJhY2tzLmF1ZGlvVHJhY2tcbiAgICBpZiAoIXRyYWNrKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgbWV0YSA9IHRyYWNrLm1ldGFcblxuICAgIGlmICghbWV0YSkge1xuICAgICAgdHJhY2subWV0YSA9IG5ldyBBdWRpb1RyYWNrTWV0YSgpXG4gICAgICBtZXRhID0gdHJhY2subWV0YTtcbiAgICB9XG5cbiAgICBsZXQgaW5mbyA9IHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDEpWzBdXG5cbiAgICBjaHVuay5kYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUgLSAxKVxuXG4gICAgbGV0IGZvcm1hdCA9IChpbmZvICYgMjQwKSA+Pj4gNFxuXG4gICAgdHJhY2suZm9ybWF0ID0gZm9ybWF0XG5cbiAgICBpZiAoZm9ybWF0ICE9PSAxMCkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKGBpbnZhbGlkIGF1ZGlvIGZvcm1hdDogJHtmb3JtYXR9YCkpXG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdCA9PT0gMTAgJiYgIXRoaXMuX2hhc0F1ZGlvU2VxdWVuY2UpIHtcbiAgICAgIG1ldGEuc2FtcGxlUmF0ZSA9IHRoaXMuX3N3aXRjaEF1ZGlvU2FtcGxpbmdGcmVxdWVuY3koaW5mbylcbiAgICAgIG1ldGEuc2FtcGxlUmF0ZUluZGV4ID0gKGluZm8gJiAxMikgPj4+IDJcbiAgICAgIG1ldGEuZnJhbWVMZW50aCA9IChpbmZvICYgMikgPj4+IDFcbiAgICAgIG1ldGEuY2hhbm5lbENvdW50ID0gaW5mbyAmIDFcbiAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKDEwMjQgLyBtZXRhLmF1ZGlvU2FtcGxlUmF0ZSAqIG1ldGEudGltZXNjYWxlKVxuICAgIH1cblxuICAgIGxldCBhdWRpb1NhbXBsZVJhdGUgPSBtZXRhLmF1ZGlvU2FtcGxlUmF0ZVxuICAgIGxldCBhdWRpb1NhbXBsZVJhdGVJbmRleCA9IG1ldGEuc2FtcGxlUmF0ZUluZGV4XG4gICAgbGV0IHJlZlNhbXBsZUR1cmF0aW9uID0gbWV0YS5yZWZTYW1wbGVEdXJhdGlvblxuXG4gICAgZGVsZXRlIGNodW5rLnRhZ1R5cGVcbiAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSlcblxuICAgIGlmIChjaHVuay5kYXRhWzBdID09PSAwKSB7IC8vIEFBQyBTZXF1ZW5jZSBIZWFkZXJcbiAgICAgIGxldCBhYWNIZWFkZXIgPSB0aGlzLl9hYWNTZXF1ZW5jZUhlYWRlclBhcnNlcihjaHVuay5kYXRhKVxuICAgICAgYXVkaW9TYW1wbGVSYXRlID0gYWFjSGVhZGVyLmF1ZGlvc2FtcGxlcmF0ZSB8fCBtZXRhLmF1ZGlvU2FtcGxlUmF0ZVxuICAgICAgYXVkaW9TYW1wbGVSYXRlSW5kZXggPSBhYWNIZWFkZXIuc2FtcGxlUmF0ZUluZGV4IHx8IG1ldGEuc2FtcGxlUmF0ZUluZGV4XG4gICAgICByZWZTYW1wbGVEdXJhdGlvbiA9IE1hdGguZmxvb3IoMTAyNCAvIGF1ZGlvU2FtcGxlUmF0ZSAqIG1ldGEudGltZXNjYWxlKVxuXG4gICAgICBtZXRhLmNoYW5uZWxDb3VudCA9IGFhY0hlYWRlci5jaGFubmVsQ291bnRcbiAgICAgIG1ldGEuc2FtcGxlUmF0ZSA9IGF1ZGlvU2FtcGxlUmF0ZVxuICAgICAgbWV0YS5zYW1wbGVSYXRlSW5kZXggPSBhdWRpb1NhbXBsZVJhdGVJbmRleFxuICAgICAgbWV0YS5yZWZTYW1wbGVEdXJhdGlvbiA9IHJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICBtZXRhLmR1cmF0aW9uID0gdGhpcy5fY29udGV4dC5tZWRpYUluZm8uZHVyYXRpb24gKiBtZXRhLnRpbWVzY2FsZVxuICAgICAgbWV0YS5jb25maWcgPSBhYWNIZWFkZXIuY29uZmlnXG4gICAgICBtZXRhLm9iamVjdFR5cGUgPSBhYWNIZWFkZXIub2JqZWN0VHlwZTtcbiAgICAgIG1ldGEub3JpZ2luT2JqZWN0VHlwZSA9IGFhY0hlYWRlci5vcmlnaW5PYmplY3RUeXBlO1xuXG4gICAgICBjb25zdCBhdWRpb01lZGlhID0gdGhpcy5fY29udGV4dC5tZWRpYUluZm8uYXVkaW9cblxuICAgICAgLy8gZmlsbCBhdWRpbyBtZWRpYSBpbmZvXG4gICAgICBhdWRpb01lZGlhLmNvZGVjID0gYWFjSGVhZGVyLmNvZGVjXG4gICAgICBhdWRpb01lZGlhLmNoYW5uZWxDb3VudCA9IGFhY0hlYWRlci5jaGFubmVsQ291bnRcbiAgICAgIGF1ZGlvTWVkaWEuc2FtcGxlUmF0ZSA9IGF1ZGlvU2FtcGxlUmF0ZVxuICAgICAgYXVkaW9NZWRpYS5zYW1wbGVSYXRlSW5kZXggPSBhYWNIZWFkZXIuYXVkaW9TYW1wbGVSYXRlSW5kZXhcblxuICAgICAgaWYgKHRoaXMuX2hhc1NjcmlwdCAmJiAhdGhpcy5faGFzQXVkaW9TZXF1ZW5jZSkge1xuICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ2F1ZGlvJylcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faGFzU2NyaXB0ICYmIHRoaXMuX2hhc0F1ZGlvU2VxdWVuY2UpIHtcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpXG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuQVVESU9fTUVUQURBVEFfQ0hBTkdFKVxuICAgICAgICAvLyB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ2F1ZGlvJylcbiAgICAgIH1cbiAgICAgIHRoaXMuX2hhc0F1ZGlvU2VxdWVuY2UgPSB0cnVlXG5cbiAgICAgIHRoaXMuX21ldGFDaGFuZ2UgPSB0cnVlXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9tZXRhQ2hhbmdlKSB7XG4gICAgICAgIGNodW5rLm9wdGlvbnMgPSB7XG4gICAgICAgICAgbWV0YTogdHJhY2subWV0YVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9tZXRhQ2hhbmdlID0gZmFsc2VcbiAgICAgIH1cblxuICAgICAgY2h1bmsuZGF0YSA9IGNodW5rLmRhdGEuc2xpY2UoMSwgY2h1bmsuZGF0YS5sZW5ndGgpXG4gICAgICB0cmFjay5zYW1wbGVzLnB1c2goY2h1bmspXG4gICAgfVxuICAgIGlmICghdmFsaWRhdGUpIHtcbiAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoJ1RBRyBsZW5ndGggZXJyb3IgYXQgJyArIGNodW5rLmRhdGFzaXplKSwgZmFsc2UpXG4gICAgICAvLyB0aGlzLmxvZ2dlci53YXJuKHRoaXMuVEFHLCBlcnJvci5tZXNzYWdlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBwYXJzZSBoZXZjL2F2YyB2aWRlbyBkYXRhXG4gICAqIEBwYXJhbSBjaHVua1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3BhcnNlSGV2Y0RhdGEgKGNodW5rKSB7XG4gICAgLy8gaGVhZGVyXG4gICAgbGV0IGluZm8gPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCgxKVswXVxuICAgIGNodW5rLmZyYW1lVHlwZSA9IChpbmZvICYgMHhmMCkgPj4+IDRcbiAgICBjaHVuay5pc0tleWZyYW1lID0gY2h1bmsuZnJhbWVUeXBlID09PSAxXG4gICAgLy8gbGV0IHRlbXBDb2RlY0lEID0gdGhpcy50cmFja3MudmlkZW9UcmFjay5jb2RlY0lEXG4gICAgbGV0IGNvZGVjSUQgPSBpbmZvICYgMHgwZlxuICAgIHRoaXMudHJhY2tzLnZpZGVvVHJhY2suY29kZWNJRCA9IGNvZGVjSURcblxuICAgIC8vIGhldmPlkoxhdmPnmoRoZWFkZXLop6PmnpDmlrnlvI/kuIDmoLdcbiAgICBjaHVuay5hdmNQYWNrZXRUeXBlID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoMSlbMF1cbiAgICBjaHVuay5jdHMgPSB0aGlzLmxvYWRlckJ1ZmZlci50b0ludCgwLCAzKVxuICAgIHRoaXMubG9hZGVyQnVmZmVyLnNoaWZ0KDMpXG5cbiAgICAvLyAxMiBmb3IgaGV2YywgNyBmb3IgYXZjXG4gICAgaWYgKGNvZGVjSUQgPT09IDEyKSB7XG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUgLSA1KVxuICAgICAgY2h1bmsuZGF0YSA9IGRhdGFcblxuICAgICAgaWYgKE51bWJlci5wYXJzZUludChjaHVuay5hdmNQYWNrZXRUeXBlKSAhPT0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKSkge1xuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgdmlkZW8gdGFnIGRhdGFzaXplOiAke2NodW5rLmRhdGFzaXplfWApLCBmYWxzZSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmFsdSA9IHt9XG4gICAgICAgIGxldCByID0gMFxuICAgICAgICBuYWx1LmN0cyA9IGNodW5rLmN0c1xuICAgICAgICBuYWx1LmR0cyA9IGNodW5rLmR0c1xuICAgICAgICB3aGlsZSAoY2h1bmsuZGF0YS5sZW5ndGggPiByKSB7XG4gICAgICAgICAgbGV0IHNpemVzID0gY2h1bmsuZGF0YS5zbGljZShOdW1iZXIucGFyc2VJbnQociksIDQgKyByKVxuICAgICAgICAgIG5hbHUuc2l6ZSA9IHNpemVzWzNdXG4gICAgICAgICAgbmFsdS5zaXplICs9IHNpemVzWzJdICogMjU2XG4gICAgICAgICAgbmFsdS5zaXplICs9IHNpemVzWzFdICogMjU2ICogMjU2XG4gICAgICAgICAgbmFsdS5zaXplICs9IHNpemVzWzBdICogMjU2ICogMjU2ICogMjU2XG4gICAgICAgICAgciArPSA0XG4gICAgICAgICAgbmFsdS5kYXRhID0gY2h1bmsuZGF0YS5zbGljZShOdW1iZXIucGFyc2VJbnQociksIG5hbHUuc2l6ZSArIHIpXG4gICAgICAgICAgciArPSBuYWx1LnNpemVcbiAgICAgICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLnNhbXBsZXMucHVzaChuYWx1KVxuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKE51bWJlci5wYXJzZUludChjaHVuay5hdmNQYWNrZXRUeXBlKSA9PT0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKSkge1xuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgdmlkZW8gdGFnIGRhdGFzaXplOiAke2NodW5rLmRhdGFzaXplfWApLCBmYWxzZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLk1FVEFEQVRBX1BBUlNFRCwgJ3ZpZGVvJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY29kZWNJRCA9PT0gNykge1xuICAgICAgbGV0IGRhdGEgPSB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdChjaHVuay5kYXRhc2l6ZSAtIDUpXG4gICAgICBpZiAoZGF0YVs0XSA9PT0gMCAmJiBkYXRhWzVdID09PSAwICYmIGRhdGFbNl0gPT09IDAgJiYgZGF0YVs3XSA9PT0gMSkge1xuICAgICAgICBsZXQgYXZjY2xlbmd0aCA9IDBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICBhdmNjbGVuZ3RoID0gYXZjY2xlbmd0aCAqIDI1NiArIGRhdGFbaV1cbiAgICAgICAgfVxuICAgICAgICBhdmNjbGVuZ3RoIC09IDRcbiAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoNCwgZGF0YS5sZW5ndGgpXG4gICAgICAgIGRhdGFbM10gPSBhdmNjbGVuZ3RoICUgMjU2XG4gICAgICAgIGF2Y2NsZW5ndGggPSAoYXZjY2xlbmd0aCAtIGRhdGFbM10pIC8gMjU2XG4gICAgICAgIGRhdGFbMl0gPSBhdmNjbGVuZ3RoICUgMjU2XG4gICAgICAgIGF2Y2NsZW5ndGggPSAoYXZjY2xlbmd0aCAtIGRhdGFbMl0pIC8gMjU2XG4gICAgICAgIGRhdGFbMV0gPSBhdmNjbGVuZ3RoICUgMjU2XG4gICAgICAgIGRhdGFbMF0gPSAoYXZjY2xlbmd0aCAtIGRhdGFbMV0pIC8gMjU2XG4gICAgICB9XG5cbiAgICAgIGNodW5rLmRhdGEgPSBkYXRhXG4gICAgICAvLyBJZiBpdCBpcyBBVkMgc2VxdWVjZSBIZWFkZXIuXG4gICAgICBpZiAoY2h1bmsuYXZjUGFja2V0VHlwZSA9PT0gMCkge1xuICAgICAgICB0aGlzLl9hdmNTZXF1ZW5jZUhlYWRlclBhcnNlcihjaHVuay5kYXRhKVxuICAgICAgICBsZXQgdmFsaWRhdGUgPSB0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSlcbiAgICAgICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2hhc1NjcmlwdCAmJiAhdGhpcy5faGFzVmlkZW9TZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICd2aWRlbycpXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9oYXNTY3JpcHQgJiYgdGhpcy5faGFzVmlkZW9TZXF1ZW5jZSkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpXG4gICAgICAgICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLlZJREVPX01FVEFEQVRBX0NIQU5HRSlcbiAgICAgICAgICAgIC8vIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9oYXNWaWRlb1NlcXVlbmNlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX21ldGFDaGFuZ2UgPSB0cnVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMuX2RhdGFzaXplVmFsaWRhdG9yKGNodW5rLmRhdGFzaXplKSkge1xuICAgICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgdmlkZW8gdGFnIGRhdGFzaXplOiAke2NodW5rLmRhdGFzaXplfWApLCBmYWxzZSlcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX21ldGFDaGFuZ2UpIHtcbiAgICAgICAgICBjaHVuay5vcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50cmFja3MudmlkZW9UcmFjay5tZXRhKVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9tZXRhQ2hhbmdlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLnNhbXBsZXMucHVzaChjaHVuaylcbiAgICAgICAgLy8gdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgdmlkZW8gY29kZWlkIGlzICR7Y29kZWNJRH1gKSwgZmFsc2UpXG4gICAgICBjaHVuay5kYXRhID0gdGhpcy5sb2FkZXJCdWZmZXIuc2hpZnQoY2h1bmsuZGF0YXNpemUgLSAxKVxuICAgICAgaWYgKCF0aGlzLl9kYXRhc2l6ZVZhbGlkYXRvcihjaHVuay5kYXRhc2l6ZSkpIHtcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgaW52YWxpZCB2aWRlbyB0YWcgZGF0YXNpemU6ICR7Y2h1bmsuZGF0YXNpemV9YCksIGZhbHNlKVxuICAgICAgfVxuICAgICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5zYW1wbGVzLnB1c2goY2h1bmspXG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0NPTVBMRVRFKVxuICAgIH1cbiAgICBkZWxldGUgY2h1bmsudGFnVHlwZVxuICB9XG5cbiAgLyoqXG4gICAqIHBhcnNlIGF2YyBtZXRhZGF0YVxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2F2Y1NlcXVlbmNlSGVhZGVyUGFyc2VyIChkYXRhKSB7XG4gICAgbGV0IHRyYWNrID0gdGhpcy50cmFja3MudmlkZW9UcmFja1xuXG4gICAgaWYgKCF0cmFjaykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IG9mZnNldCA9IDBcblxuICAgIGlmICghdHJhY2subWV0YSkge1xuICAgICAgdHJhY2subWV0YSA9IG5ldyBWaWRlb1RyYWNrTWV0YSgpXG4gICAgfVxuICAgIGxldCBtZXRhID0gdHJhY2subWV0YVxuXG4gICAgbWV0YS5jb25maWd1cmF0aW9uVmVyc2lvbiA9IGRhdGFbMF1cbiAgICBtZXRhLmF2Y1Byb2ZpbGVJbmRpY2F0aW9uID0gZGF0YVsxXVxuICAgIG1ldGEucHJvZmlsZUNvbXBhdGliaWxpdHkgPSBkYXRhWzJdXG4gICAgbWV0YS5hdmNMZXZlbEluZGljYXRpb24gPSBkYXRhWzNdIC8gMTBcbiAgICBtZXRhLm5hbFVuaXRMZW5ndGggPSAoZGF0YVs0XSAmIDB4MDMpICsgMVxuXG4gICAgbGV0IG51bU9mU3BzID0gZGF0YVs1XSAmIDB4MWZcbiAgICBvZmZzZXQgPSA2XG4gICAgbGV0IGNvbmZpZyA9IHt9XG5cbiAgICAvLyBwYXJzZSBTUFNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mU3BzOyBpKyspIHtcbiAgICAgIGxldCBzaXplID0gZGF0YVtvZmZzZXRdICogMjU1ICsgZGF0YVtvZmZzZXQgKyAxXVxuICAgICAgb2Zmc2V0ICs9IDJcblxuICAgICAgbGV0IHNwcyA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICBzcHNbal0gPSBkYXRhW29mZnNldCArIGpdXG4gICAgICB9XG5cbiAgICAgIC8vIGNvZGVjIHN0cmluZ1xuICAgICAgbGV0IGNvZGVjU3RyaW5nID0gJ2F2YzEuJ1xuICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCA0OyBqKyspIHtcbiAgICAgICAgbGV0IGggPSBzcHNbal0udG9TdHJpbmcoMTYpXG4gICAgICAgIGlmIChoLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICBoID0gJzAnICsgaFxuICAgICAgICB9XG4gICAgICAgIGNvZGVjU3RyaW5nICs9IGhcbiAgICAgIH1cblxuICAgICAgbWV0YS5jb2RlYyA9IGNvZGVjU3RyaW5nXG5cbiAgICAgIG9mZnNldCArPSBzaXplXG4gICAgICB0aGlzLnRyYWNrcy52aWRlb1RyYWNrLm1ldGEuc3BzID0gc3BzXG4gICAgICBjb25maWcgPSBTcHNQYXJzZXIucGFyc2VTUFMoc3BzKVxuICAgIH1cblxuICAgIGxldCBudW1PZlBwcyA9IGRhdGFbb2Zmc2V0XVxuXG4gICAgb2Zmc2V0KytcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZQcHM7IGkrKykge1xuICAgICAgbGV0IHNpemUgPSBkYXRhW29mZnNldF0gKiAyNTUgKyBkYXRhW29mZnNldCArIDFdXG4gICAgICBvZmZzZXQgKz0gMlxuICAgICAgbGV0IHBwcyA9IG5ldyBVaW50OEFycmF5KHNpemUpXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuICAgICAgICBwcHNbal0gPSBkYXRhW29mZnNldCArIGpdXG4gICAgICB9XG4gICAgICBvZmZzZXQgKz0gc2l6ZVxuICAgICAgdGhpcy50cmFja3MudmlkZW9UcmFjay5tZXRhLnBwcyA9IHBwc1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24obWV0YSwgU3BzUGFyc2VyLnRvVmlkZW9NZXRhKGNvbmZpZykpXG5cbiAgICAvLyBmaWxsIHZpZGVvIG1lZGlhIGluZm9cbiAgICBjb25zdCB2aWRlb01lZGlhID0gdGhpcy5fY29udGV4dC5tZWRpYUluZm8udmlkZW9cblxuICAgIHZpZGVvTWVkaWEuY29kZWMgPSBtZXRhLmNvZGVjXG4gICAgdmlkZW9NZWRpYS5wcm9maWxlID0gbWV0YS5wcm9maWxlXG4gICAgdmlkZW9NZWRpYS5sZXZlbCA9IG1ldGEubGV2ZWxcbiAgICB2aWRlb01lZGlhLmNocm9tYUZvcm1hdCA9IG1ldGEuY2hyb21hRm9ybWF0XG4gICAgdmlkZW9NZWRpYS5mcmFtZVJhdGUgPSBtZXRhLmZyYW1lUmF0ZVxuICAgIHZpZGVvTWVkaWEucGFyUmF0aW8gPSBtZXRhLnBhclJhdGlvXG4gICAgdmlkZW9NZWRpYS53aWR0aCA9IHZpZGVvTWVkaWEud2lkdGggPT09IG1ldGEucHJlc2VudFdpZHRoID8gdmlkZW9NZWRpYS53aWR0aCA6IG1ldGEucHJlc2VudFdpZHRoXG4gICAgdmlkZW9NZWRpYS5oZWlnaHQgPSB2aWRlb01lZGlhLmhlaWdodCA9PT0gbWV0YS5wcmVzZW50SGVpZ2h0ID8gdmlkZW9NZWRpYS53aWR0aCA6IG1ldGEucHJlc2VudEhlaWdodFxuXG4gICAgbWV0YS5kdXJhdGlvbiA9IHRoaXMuX2NvbnRleHQubWVkaWFJbmZvLmR1cmF0aW9uICogbWV0YS50aW1lc2NhbGVcbiAgICBtZXRhLmF2Y2MgPSBuZXcgVWludDhBcnJheShkYXRhLmxlbmd0aClcbiAgICBtZXRhLmF2Y2Muc2V0KGRhdGEpXG4gICAgdHJhY2subWV0YSA9IG1ldGFcbiAgfVxuXG4gIC8qKlxuICAgKiBjaG9vc2UgYXVkaW8gc2FtcGxlIHJhdGVcbiAgICogQHBhcmFtIHNhbXBsaW5nRnJlcXVlbmN5SW5kZXhcbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zd2l0Y2hBdWRpb1NhbXBsZVJhdGUgKHNhbXBsaW5nRnJlcXVlbmN5SW5kZXgpIHtcbiAgICBsZXQgc2FtcGxpbmdGcmVxdWVuY3lMaXN0ID0gWzk2MDAwLCA4ODIwMCwgNjQwMDAsIDQ4MDAwLCA0NDEwMCwgMzIwMDAsIDI0MDAwLCAyMjA1MCwgMTYwMDAsIDEyMDAwLCAxMTAyNSwgODAwMCwgNzM1MF1cbiAgICByZXR1cm4gc2FtcGxpbmdGcmVxdWVuY3lMaXN0W3NhbXBsaW5nRnJlcXVlbmN5SW5kZXhdXG4gIH1cblxuICAvKipcbiAgICogY2hvb3NlIGF1ZGlvIHNhbXBsaW5nIGZyZXF1ZW5jZVxuICAgKiBAcGFyYW0gaW5mb1xuICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3N3aXRjaEF1ZGlvU2FtcGxpbmdGcmVxdWVuY3kgKGluZm8pIHtcbiAgICBsZXQgc2FtcGxpbmdGcmVxdWVuY3lJbmRleCA9IChpbmZvICYgMTIpID4+PiAyXG4gICAgbGV0IHNhbXBsaW5nRnJlcXVlbmN5TGlzdCA9IFs1NTAwLCAxMTAyNSwgMjIwNTAsIDQ0MTAwLCA0ODAwMF1cbiAgICByZXR1cm4gc2FtcGxpbmdGcmVxdWVuY3lMaXN0W3NhbXBsaW5nRnJlcXVlbmN5SW5kZXhdXG4gIH1cblxuICAvKipcbiAgICogY2hvb3NlIGF1ZGlvIGNoYW5uZWwgY291bnRcbiAgICogQHBhcmFtIGluZm9cbiAgICogQHJldHVybnMge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zd2l0Y2hBdWRpb0NoYW5uZWwgKGluZm8pIHtcbiAgICBsZXQgc2FtcGxlVHJhY2tOdW1JbmRleCA9IGluZm8gJiAxXG4gICAgbGV0IHNhbXBsZVRyYWNrTnVtTGlzdCA9IFsxLCAyXVxuICAgIHJldHVybiBzYW1wbGVUcmFja051bUxpc3Rbc2FtcGxlVHJhY2tOdW1JbmRleF1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBkYXRhc2l6ZSBpcyB2YWxpZCB1c2UgNCBCeXRlIGFmdGVyIGN1cnJlbnQgdGFnXG4gICAqIEBwYXJhbSBkYXRhc2l6ZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9kYXRhc2l6ZVZhbGlkYXRvciAoZGF0YXNpemUpIHtcbiAgICBsZXQgZGF0YXNpemVDb25maXJtID0gdGhpcy5sb2FkZXJCdWZmZXIudG9JbnQoMCwgNClcbiAgICB0aGlzLmxvYWRlckJ1ZmZlci5zaGlmdCg0KVxuICAgIHJldHVybiBkYXRhc2l6ZUNvbmZpcm0gPT09IGRhdGFzaXplICsgMTFcbiAgfVxuXG4gIGdldCBsb2FkZXJCdWZmZXIgKCkge1xuICAgIGNvbnN0IGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ0xPQURFUl9CVUZGRVInKVxuICAgIGlmIChidWZmZXIpIHtcbiAgICAgIHJldHVybiBidWZmZXJcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKCfmib7kuI3liLAgbG9hZGVyQnVmZmVyIOWunuS+iycpKVxuICAgIH1cbiAgfVxuXG4gIGdldCB0cmFja3MgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKVxuICB9XG5cbiAgZ2V0IGxvZ2dlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ0xPR0dFUicpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmx2RGVtdXhlclxuIiwiLyoqXG4gKiBSZWZlcmVuY2U6IGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM4MjE2I3NlY3Rpb24tNC4zXG4gKi9cbmNsYXNzIE0zVThQYXJzZXIge1xuICBzdGF0aWMgcGFyc2UgKHRleHQsIGJhc2V1cmwgPSAnJykge1xuICAgIGxldCByZXQgPSB7XG4gICAgICBkdXJhdGlvbjogMFxuICAgIH07XG4gICAgaWYgKCF0ZXh0IHx8ICF0ZXh0LnNwbGl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByZWZzID0gdGV4dC5zcGxpdCgvXFxyfFxcbi8pO1xuICAgIHJlZnMgPSByZWZzLmZpbHRlcigocmVmKSA9PiB7XG4gICAgICByZXR1cm4gcmVmO1xuICAgIH0pXG4gICAgbGV0IHJlZiA9IHJlZnMuc2hpZnQoKVxuICAgIGlmICghcmVmLm1hdGNoKCcjRVhUTTNVJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBtM3U4IGZpbGU6IG5vdCBcIiNFWFRNM1VcImApO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJlZiA9IHJlZnMuc2hpZnQoKVxuICAgIHdoaWxlIChyZWYpIHtcbiAgICAgIGxldCByZWZtID0gcmVmLm1hdGNoKC8jKC5bQS1afC1dKik6KC4qKS8pO1xuICAgICAgbGV0IHJlZmQgPSByZWYubWF0Y2goLyMoLltBLVp8LV0qKS8pO1xuICAgICAgaWYgKHJlZmQgJiYgcmVmbSAmJiByZWZtLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgc3dpdGNoIChyZWZtWzFdKSB7XG4gICAgICAgICAgY2FzZSAnRVhULVgtVkVSU0lPTic6XG4gICAgICAgICAgICByZXQudmVyc2lvbiA9IHBhcnNlSW50KHJlZm1bMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRVhULVgtTUVESUEtU0VRVUVOQ0UnOlxuICAgICAgICAgICAgcmV0LnNlcXVlbmNlID0gcGFyc2VJbnQocmVmbVsyXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFWFQtWC1UQVJHRVREVVJBVElPTic6XG4gICAgICAgICAgICByZXQudGFyZ2V0ZHVyYXRpb24gPSBwYXJzZUZsb2F0KHJlZm1bMl0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnRVhUSU5GJzpcbiAgICAgICAgICAgIE0zVThQYXJzZXIucGFyc2VGcmFnKHJlZm0sIHJlZnMsIHJldCwgYmFzZXVybCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdFWFQtWC1LRVknOlxuICAgICAgICAgICAgTTNVOFBhcnNlci5wYXJzZURlY3J5cHQocmVmbVsyXSxyZXQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGlmKHJlZmQgJiYgcmVmZC5sZW5ndGggPiAxKSB7XG4gICAgICAgIHN3aXRjaChyZWZkWzFdKSB7XG4gICAgICAgICAgY2FzZSAnRVhULVgtRElTQ09OVElOVUlUWSc6XG4gICAgICAgICAgICByZWYgPSByZWZzLnNoaWZ0KCk7XG4gICAgICAgICAgICBsZXQgcmVmbSA9IHJlZi5tYXRjaCgvIyguW0EtWnwtXSopOiguKikvKTtcbiAgICAgICAgICAgIGlmKHJlZm0ubGVuZ3RoID4yICYmIHJlZm1bMV0gPT09ICdFWFRJTkYnKSB7XG4gICAgICAgICAgICAgIE0zVThQYXJzZXIucGFyc2VGcmFnKHJlZm0sIHJlZnMsIHJldCwgYmFzZXVybCwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlZiA9IHJlZnMuc2hpZnQoKVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRnJhZyAocmVmbSwgcmVmcywgcmV0LCBiYXNldXJsLCBkaXNjb250aW51ZSkge1xuICAgIGlmICghcmV0LmZyYWdzKSB7XG4gICAgICByZXQuZnJhZ3MgPSBbXVxuICAgIH1cblxuICAgIGxldCBmcmVnID0ge1xuICAgICAgc3RhcnQ6IHJldC5kdXJhdGlvbixcbiAgICAgIGR1cmF0aW9uOiBwYXJzZUZsb2F0KHJlZm1bMl0pICogMTAwMFxuICAgIH1cblxuICAgIHJldC5kdXJhdGlvbiArPSBmcmVnLmR1cmF0aW9uO1xuICAgIGxldCBuZXh0bGluZSA9IHJlZnMuc2hpZnQoKTtcbiAgICBpZiAobmV4dGxpbmUubWF0Y2goLyMoLiopOiguKikvKSkge1xuICAgICAgbmV4dGxpbmUgPSByZWZzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGlmIChuZXh0bGluZS5sZW5ndGggPiAwICYmIG5leHRsaW5lLmNoYXJBdCgwKSA9PT0gJy8nICYmIGJhc2V1cmwubWF0Y2goLy4qXFwvXFwvLipcXC5cXHcrL2cpKSB7XG4gICAgICBiYXNldXJsID0gYmFzZXVybC5tYXRjaCgvLipcXC9cXC8uKlxcLlxcdysvZylbMF07XG4gICAgfVxuICAgIGlmIChuZXh0bGluZS5tYXRjaCgvLio6XFwvXFwvLiovKSkge1xuICAgICAgZnJlZy51cmwgPSBuZXh0bGluZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnJlZy51cmwgPSBiYXNldXJsICsgbmV4dGxpbmU7XG4gICAgfVxuICAgIGZyZWcuZGlzY29udGludWUgPSBkaXNjb250aW51ZTtcbiAgICByZXQuZnJhZ3MucHVzaChmcmVnKTtcbiAgfVxuXG4gIHN0YXRpYyBwYXJzZVVSTCAodXJsKSB7XG4gICAgbGV0IGJhc2V1cmwgPSAnJztcbiAgICBsZXQgdXJscyA9IHVybC5tYXRjaCgvKC4qXFwvKS4qXFwubTN1OC8pO1xuICAgIGlmICh1cmxzICYmIHVybHMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cmxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh1cmxzW2ldLm1hdGNoKC8uKlxcLyQvZykgJiYgdXJsc1tpXS5sZW5ndGggPiBiYXNldXJsLmxlbmd0aCkge1xuICAgICAgICAgIGJhc2V1cmwgPSB1cmxzW2ldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYXNldXJsO1xuICB9XG5cbiAgc3RhdGljIHBhcnNlRGVjcnlwdChyZWZtLCByZXQpIHtcbiAgICByZXQuZW5jcnlwdCA9IHt9O1xuICAgIGxldCByZWZzID0gcmVmbS5zcGxpdCgnLCcpO1xuICAgIGZvciAobGV0IGkgaW4gcmVmcykgeyBcbiAgICAgIGxldCBjbWQgPSByZWZzW2ldO1xuICAgICAgaWYoY21kLm1hdGNoKC9NRVRIT0Q9KC4qKS8pKSB7XG4gICAgICAgIHJldC5lbmNyeXB0Lm1ldGhvZCA9IGNtZC5tYXRjaCgvTUVUSE9EPSguKikvKVsxXTtcbiAgICAgIH1cbiAgICAgIGlmKGNtZC5tYXRjaCgvVVJJPVwiKC4qKVwiLykpIHtcbiAgICAgICAgcmV0LmVuY3J5cHQudXJpID0gY21kLm1hdGNoKC9VUkk9XCIoLiopXCIvKVsxXTtcbiAgICAgIH1cblxuICAgICAgaWYoY21kLm1hdGNoKC9JVj0weCguKikvKSkge1xuICAgICAgICBsZXQgaXYgPSBjbWQubWF0Y2goL0lWPTB4KC4qKS8pWzFdO1xuICAgICAgICBsZXQgbGVuZ3RoID0gTWF0aC5jZWlsKGl2Lmxlbmd0aCAvIDIpO1xuICAgICAgICByZXQuZW5jcnlwdC5pdmIgPSBuZXcgVWludDhBcnJheShsZW5ndGgpO1xuICAgICAgICBmb3IobGV0IGkgPSBsZW5ndGggLSAxOyBpID49MDsgaS0tKSB7XG4gICAgICAgICAgbGV0IGltID0gcGFyc2VJbnQoaXYuc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgICAgICAgIHJldC5lbmNyeXB0Lml2YltpXSA9IGltO1xuICAgICAgICB9IFxuICAgICAgICByZXQuZW5jcnlwdC5pdiA9IGl2O1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTTNVOFBhcnNlcjtcbiIsImltcG9ydCB7IE5hbHVuaXQgfSBmcm9tICd4Z3BsYXllci1jb2RlYyc7XG5pbXBvcnQgeyBBdWRpb1RyYWNrLCBWaWRlb1RyYWNrIH0gZnJvbSAneGdwbGF5ZXItYnVmZmVyJztcbmltcG9ydCB7XG4gIEF1ZGlvVHJhY2tNZXRhLFxuICBWaWRlb1RyYWNrTWV0YSxcbiAgQXVkaW9UcmFja1NhbXBsZSxcbiAgVmlkZW9UcmFja1NhbXBsZSxcbiAgRVZFTlRTLFxuICBTdHJlYW1cbn0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuXG5jb25zdCBERU1VWF9FVkVOVFMgPSBFVkVOVFMuREVNVVhfRVZFTlRTO1xuY29uc3QgU3RyZWFtVHlwZSA9IHtcbiAgMHgwMTogWyd2aWRlbycsICdNUEVHLTEnXSxcbiAgMHgwMjogWyd2aWRlbycsICdNUEVHLTInXSxcbiAgMHgxYjogWyd2aWRlbycsICdBVkMuSDI2NCddLFxuICAweGVhOiBbJ3ZpZGVvJywgJ1ZDLTEnXSxcbiAgMHgwMzogWydhdWRpbycsICdNUEVHLTEnXSxcbiAgMHgwNDogWydhdWRpbycsICdNUEVHLTInXSxcbiAgMHgwZjogWydhdWRpbycsICdNUEVHLTIuQUFDJ10sXG4gIDB4MTE6IFsnYXVkaW8nLCAnTVBFRy00LkFBQyddLFxuICAweDgwOiBbJ2F1ZGlvJywgJ0xQQ00nXSxcbiAgMHg4MTogWydhdWRpbycsICdBQzMnXSxcbiAgMHgwNjogWydhdWRpbycsICdBQzMnXSxcbiAgMHg4MjogWydhdWRpbycsICdEVFMnXSxcbiAgMHg4MzogWydhdWRpbycsICdEb2xieSBUcnVlSEQnXSxcbiAgMHg4NDogWydhdWRpbycsICdBQzMtUGx1cyddLFxuICAweDg1OiBbJ2F1ZGlvJywgJ0RUUy1IRCddLFxuICAweDg2OiBbJ2F1ZGlvJywgJ0RUUy1NQSddLFxuICAweGExOiBbJ2F1ZGlvJywgJ0FDMy1QbHVzLVNFQyddLFxuICAweGEyOiBbJ2F1ZGlvJywgJ0RUUy1IRC1TRUMnXVxufTtcblxuY2xhc3MgVHNEZW11eGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWdzKTtcbiAgICB0aGlzLmRlbXV4aW5nID0gZmFsc2U7XG4gICAgdGhpcy5wYXQgPSBbXTtcbiAgICB0aGlzLnBtdCA9IFtdO1xuICAgIHRoaXMuX2hhc1ZpZGVvTWV0YSA9IGZhbHNlO1xuICAgIHRoaXMuX2hhc0F1ZGlvTWV0YSA9IGZhbHNlO1xuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5vbihERU1VWF9FVkVOVFMuREVNVVhfU1RBUlQsIHRoaXMuZGVtdXguYmluZCh0aGlzKSlcbiAgfVxuXG4gIGRlbXV4IChmcmFnKSB7XG4gICAgaWYgKHRoaXMuZGVtdXhpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBidWZmZXIgPSB0aGlzLmlucHV0QnVmZmVyO1xuICAgIGxldCBmcmFncyA9IHsgcGF0OiBbXSwgcG10OiBbXSB9O1xuICAgIGxldCBwZXNlcyA9IHt9O1xuXG4gICAgLy8gUmVhZCBUUyBzZWdtZW50XG4gICAgd2hpbGUgKGJ1ZmZlci5sZW5ndGggPj0gMTg4KSB7XG4gICAgICBpZiAoYnVmZmVyLmxlbmd0aCA+PSAxICYmIGJ1ZmZlci5hcnJheVswXVtidWZmZXIub2Zmc2V0XSAhPT0gNzEpIHtcbiAgICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgdGhpcy5UQUcsIG5ldyBFcnJvcihgVW50cnVzdCBzeW5jIGNvZGU6ICR7YnVmZmVyLmFycmF5WzBdW2J1ZmZlci5vZmZzZXRdfSwgdHJ5IHRvIHJlY292ZXI7YCksIGZhbHNlKTtcbiAgICAgIH1cbiAgICAgIHdoaWxlIChidWZmZXIubGVuZ3RoID49IDEgJiYgYnVmZmVyLmFycmF5WzBdW2J1ZmZlci5vZmZzZXRdICE9PSA3MSkge1xuICAgICAgICBidWZmZXIuc2hpZnQoMSk7XG4gICAgICB9XG4gICAgICBsZXQgYnVmID0gYnVmZmVyLnNoaWZ0KDE4OCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhidWYpO1xuICAgICAgbGV0IHRzU3RyZWFtID0gbmV3IFN0cmVhbShidWYuYnVmZmVyKTtcbiAgICAgIGxldCB0cyA9IHt9O1xuICAgICAgVHNEZW11eGVyLnJlYWQodHNTdHJlYW0sIHRzLCBmcmFncyk7XG4gICAgICBpZiAodHMucGVzKSB7XG4gICAgICAgIGlmICghcGVzZXNbdHMuaGVhZGVyLnBpZF0pIHtcbiAgICAgICAgICBwZXNlc1t0cy5oZWFkZXIucGlkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHBlc2VzW3RzLmhlYWRlci5waWRdLnB1c2godHMucGVzKTtcbiAgICAgICAgdHMucGVzLkVTLmJ1ZmZlciA9IFt0cy5wZXMuRVMuYnVmZmVyXTtcbiAgICAgIH0gZWxzZSBpZiAocGVzZXNbdHMuaGVhZGVyLnBpZF0pIHtcbiAgICAgICAgcGVzZXNbdHMuaGVhZGVyLnBpZF1bcGVzZXNbdHMuaGVhZGVyLnBpZF0ubGVuZ3RoIC0gMV0uRVMuYnVmZmVyLnB1c2godHMucGF5bG9hZC5zdHJlYW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBBdWRpb09wdGlvbnMgPSBmcmFnO1xuICAgIGxldCBWaWRlb09wdGlvbnMgPSBmcmFnO1xuXG4gICAgLy8gR2V0IEZyYW1lcyBkYXRhXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyhwZXNlcykubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlcGVzZXMgPSBwZXNlc1tPYmplY3Qua2V5cyhwZXNlcylbaV1dO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBlcGVzZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZXBlc2VzW2pdLmlkID0gT2JqZWN0LmtleXMocGVzZXMpW2ldO1xuICAgICAgICBlcGVzZXNbal0uRVMuYnVmZmVyID0gVHNEZW11eGVyLk1lcmdlKGVwZXNlc1tqXS5FUy5idWZmZXIpO1xuICAgICAgICBpZiAoZXBlc2VzW2pdLnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICB0aGlzLnB1c2hBdWRpb1NhbXBsZShlcGVzZXNbal0sIEF1ZGlvT3B0aW9ucyk7XG4gICAgICAgICAgQXVkaW9PcHRpb25zID0ge307XG4gICAgICAgIH0gZWxzZSBpZiAoZXBlc2VzW2pdLnR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICB0aGlzLnB1c2hWaWRlb1NhbXBsZShlcGVzZXNbal0sIFZpZGVvT3B0aW9ucyk7XG4gICAgICAgICAgVmlkZW9PcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faGFzQXVkaW9NZXRhKSB7XG4gICAgICB0aGlzLmVtaXQoREVNVVhfRVZFTlRTLkRFTVVYX0NPTVBMRVRFLCAnYXVkaW8nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2hhc1ZpZGVvTWV0YSkge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9DT01QTEVURSwgJ3ZpZGVvJyk7XG4gICAgfVxuICB9XG5cbiAgcHVzaEF1ZGlvU2FtcGxlIChwZXMsIG9wdGlvbnMpIHtcbiAgICBsZXQgdHJhY2s7XG4gICAgaWYgKCF0aGlzLl90cmFja3MuYXVkaW9UcmFjaykge1xuICAgICAgdGhpcy5fdHJhY2tzLmF1ZGlvVHJhY2sgPSBuZXcgQXVkaW9UcmFjaygpO1xuICAgICAgdHJhY2sgPSB0aGlzLl90cmFja3MuYXVkaW9UcmFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2sgPSB0aGlzLl90cmFja3MuYXVkaW9UcmFjaztcbiAgICB9XG4gICAgbGV0IG1ldGEgPSBuZXcgQXVkaW9UcmFja01ldGEoe1xuICAgICAgYXVkaW9TYW1wbGVSYXRlOiBwZXMuRVMuZnJlcXVlbmNlLFxuICAgICAgc2FtcGxlUmF0ZTogcGVzLkVTLmZyZXF1ZW5jZSxcbiAgICAgIGNoYW5uZWxDb3VudDogcGVzLkVTLmNoYW5uZWwsXG4gICAgICBjb2RlYzogJ21wNGEuNDAuJyArIHBlcy5FUy5hdWRpb09iamVjdFR5cGUsXG4gICAgICBjb25maWc6IHBlcy5FUy5hdWRpb0NvbmZpZyxcbiAgICAgIGlkOiAyLFxuICAgICAgc2FtcGxlUmF0ZUluZGV4OiBwZXMuRVMuZnJlcXVlbmN5SW5kZXhcbiAgICB9KTtcbiAgICBtZXRhLnJlZlNhbXBsZUR1cmF0aW9uID0gTWF0aC5mbG9vcigxMDI0IC8gbWV0YS5hdWRpb1NhbXBsZVJhdGUgKiBtZXRhLnRpbWVzY2FsZSk7XG5cbiAgICBsZXQgbWV0YUVxdWFsID0gVHNEZW11eGVyLmNvbXBhaXJlTWV0YSh0cmFjay5tZXRhLCBtZXRhLCB0cnVlKTtcblxuICAgIGlmICghdGhpcy5faGFzQXVkaW9NZXRhIHx8ICFtZXRhRXF1YWwpIHtcbiAgICAgIHRyYWNrLm1ldGEgPSBtZXRhO1xuICAgICAgdGhpcy5faGFzQXVkaW9NZXRhID0gdHJ1ZVxuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5NRVRBREFUQV9QQVJTRUQsICdhdWRpbycpO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkocGVzLkVTLmJ1ZmZlci5idWZmZXIuc2xpY2UocGVzLkVTLmJ1ZmZlci5wb3NpdGlvbiwgcGVzLkVTLmJ1ZmZlci5sZW5ndGgpKTtcbiAgICBsZXQgZHRzID0gcGFyc2VJbnQocGVzLnB0cyAvIDkwKTtcbiAgICBsZXQgcHRzID0gcGFyc2VJbnQocGVzLnB0cyAvIDkwKTtcbiAgICBsZXQgc2FtcGxlID0gbmV3IEF1ZGlvVHJhY2tTYW1wbGUoe2R0cywgcHRzLCBkYXRhLCBvcHRpb25zfSk7XG4gICAgdHJhY2suc2FtcGxlcy5wdXNoKHNhbXBsZSk7XG4gIH1cblxuICBwdXNoVmlkZW9TYW1wbGUgKHBlcywgb3B0aW9ucykge1xuICAgIGxldCBuYWxzID0gTmFsdW5pdC5nZXROYWx1bml0cyhwZXMuRVMuYnVmZmVyKTtcbiAgICBsZXQgdHJhY2s7XG4gICAgbGV0IG1ldGEgPSBuZXcgVmlkZW9UcmFja01ldGEoKTtcbiAgICBpZiAoIXRoaXMuX3RyYWNrcy52aWRlb1RyYWNrKSB7XG4gICAgICB0aGlzLl90cmFja3MudmlkZW9UcmFjayA9IG5ldyBWaWRlb1RyYWNrKCk7XG4gICAgICB0cmFjayA9IHRoaXMuX3RyYWNrcy52aWRlb1RyYWNrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFjayA9IHRoaXMuX3RyYWNrcy52aWRlb1RyYWNrO1xuICAgIH1cbiAgICBsZXQgc2FtcGxlTGVuZ3RoID0gMDtcbiAgICBsZXQgc3BzID0gZmFsc2U7XG4gICAgbGV0IHBwcyA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5hbCA9IG5hbHNbaV07XG4gICAgICBpZiAobmFsLnNwcykge1xuICAgICAgICBzcHMgPSBuYWw7XG4gICAgICAgIHRyYWNrLnNwcyA9IG5hbC5ib2R5O1xuICAgICAgICBtZXRhLmNocm9tYUZvcm1hdCA9IHNwcy5zcHMuY2hyb21hX2Zvcm1hdFxuICAgICAgICBtZXRhLmNvZGVjID0gJ2F2YzEuJztcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICB2YXIgaCA9IHNwcy5ib2R5W2pdLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgICBpZiAoaC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICBoID0gJzAnICsgaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWV0YS5jb2RlYyArPSBoO1xuICAgICAgICB9XG4gICAgICAgIG1ldGEuY29kZWNIZWlnaHQgPSBzcHMuc3BzLmNvZGVjX3NpemUuaGVpZ2h0O1xuICAgICAgICBtZXRhLmNvZGVjV2lkdGggPSBzcHMuc3BzLmNvZGVjX3NpemUud2lkdGg7XG4gICAgICAgIG1ldGEuZnJhbWVSYXRlID0gc3BzLnNwcy5mcmFtZV9yYXRlO1xuICAgICAgICBtZXRhLmlkID0gMTtcbiAgICAgICAgbWV0YS5sZXZlbCA9IHNwcy5zcHMubGV2ZWxfc3RyaW5nO1xuICAgICAgICBtZXRhLnByZXNlbnRIZWlnaHQgPSBzcHMuc3BzLnByZXNlbnRfc2l6ZS5oZWlnaHQ7XG4gICAgICAgIG1ldGEucHJlc2VudFdpZHRoID0gc3BzLnNwcy5wcmVzZW50X3NpemUud2lkdGg7XG4gICAgICAgIG1ldGEucHJvZmlsZSA9IHNwcy5zcHMucHJvZmlsZV9zdHJpbmc7XG4gICAgICAgIG1ldGEucmVmU2FtcGxlRHVyYXRpb24gPSBNYXRoLmZsb29yKG1ldGEudGltZXNjYWxlICogKHNwcy5zcHMuZnJhbWVfcmF0ZS5mcHNfZGVuIC8gc3BzLnNwcy5mcmFtZV9yYXRlLmZwc19udW0pKTtcbiAgICAgICAgbWV0YS5zYXJSYXRpbyA9IHNwcy5zcHMuc2FyX3JhdGlvID8gc3BzLnNwcy5zYXJfcmF0aW8gOiBzcHMuc3BzLnBhcl9yYXRpbztcbiAgICAgIH0gZWxzZSBpZiAobmFsLnBwcykge1xuICAgICAgICB0cmFjay5wcHMgPSBuYWwuYm9keTtcbiAgICAgICAgcHBzID0gbmFsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtcGxlTGVuZ3RoICs9ICg0ICsgbmFsLmJvZHkuYnl0ZUxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNwcyAmJiBwcHMpIHtcbiAgICAgIG1ldGEuYXZjYyA9IE5hbHVuaXQuZ2V0QXZjYyhzcHMuYm9keSwgcHBzLmJvZHkpO1xuICAgICAgbGV0IG1ldGFFcXVhbCA9IFRzRGVtdXhlci5jb21wYWlyZU1ldGEodHJhY2subWV0YSwgbWV0YSwgdHJ1ZSk7XG4gICAgICBpZiAoIXRoaXMuX2hhc1ZpZGVvTWV0YSB8fCAhbWV0YUVxdWFsKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5tZXRhID0gT2JqZWN0LmFzc2lnbih7fSwgbWV0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGE6IE9iamVjdC5hc3NpZ24oe30sIG1ldGEpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRyYWNrLm1ldGEgPSBtZXRhO1xuICAgICAgICB0aGlzLl9oYXNWaWRlb01ldGEgPSB0cnVlXG4gICAgICAgIHRoaXMuZW1pdChERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCAndmlkZW8nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IG5ldyBVaW50OEFycmF5KHNhbXBsZUxlbmd0aCk7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgbGV0IGlzS2V5ZnJhbWUgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuYWwgPSBuYWxzW2ldO1xuICAgICAgbGV0IGxlbmd0aCA9IG5hbC5ib2R5LmJ5dGVMZW5ndGg7XG4gICAgICBpZiAobmFsLmlkcikge1xuICAgICAgICBpc0tleWZyYW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICghbmFsLnBwcyAmJiAhbmFsLnNwcykge1xuICAgICAgICBkYXRhLnNldChuZXcgVWludDhBcnJheShbbGVuZ3RoID4+PiAyNCAmIDB4ZmYsXG4gICAgICAgICAgbGVuZ3RoID4+PiAxNiAmIDB4ZmYsXG4gICAgICAgICAgbGVuZ3RoID4+PiA4ICYgMHhmZixcbiAgICAgICAgICBsZW5ndGggJiAweGZmXG4gICAgICAgIF0pLCBvZmZzZXQpO1xuICAgICAgICBvZmZzZXQgKz0gNDtcbiAgICAgICAgZGF0YS5zZXQobmFsLmJvZHksIG9mZnNldCk7XG4gICAgICAgIG9mZnNldCArPSBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBzYW1wbGUgPSBuZXcgVmlkZW9UcmFja1NhbXBsZSh7XG4gICAgICBkdHM6IHBhcnNlSW50KHBlcy5kdHMgLyA5MCksXG4gICAgICBwdHM6IHBhcnNlSW50KHBlcy5wdHMgLyA5MCksXG4gICAgICBjdHM6IChwZXMucHRzIC0gcGVzLmR0cykgLyA5MCxcbiAgICAgIG9yaWdpbkR0czogcGVzLmR0cyxcbiAgICAgIGlzS2V5ZnJhbWUsXG4gICAgICBkYXRhLFxuICAgICAgb3B0aW9uc1xuICAgIH0pXG4gICAgdHJhY2suc2FtcGxlcy5wdXNoKHNhbXBsZSk7XG4gIH1cblxuICBkZXN0b3J5ICgpIHtcbiAgICB0aGlzLm9mZihERU1VWF9FVkVOVFMuREVNVVhfU1RBUlQsIHRoaXMuZGVtdXgpO1xuICAgIHRoaXMuY29uZmlncyA9IHt9O1xuICAgIHRoaXMuZGVtdXhpbmcgPSBmYWxzZTtcbiAgICB0aGlzLnBhdCA9IFtdO1xuICAgIHRoaXMucG10ID0gW107XG4gICAgdGhpcy5faGFzVmlkZW9NZXRhID0gZmFsc2U7XG4gICAgdGhpcy5faGFzQXVkaW9NZXRhID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgY29tcGFpcmVBcnJheSAoYSwgYiwgdHlwZSkge1xuICAgIGxldCBhbCA9IDA7XG4gICAgbGV0IGJsID0gMDtcbiAgICBpZiAodHlwZSA9PT0gJ1VpbnQ4QXJyYXknKSB7XG4gICAgICBhbCA9IGEuYnl0ZUxlbmd0aDtcbiAgICAgIGJsID0gYi5ieXRlTGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0FycmF5Jykge1xuICAgICAgYWwgPSBhLmxlbmd0aDtcbiAgICAgIGJsID0gYi5sZW5ndGg7XG4gICAgfVxuICAgIGlmIChhbCAhPT0gYmwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgY29tcGFpcmVNZXRhIChhLCBiLCBpZ25vcmVEdXJhdGlvbikge1xuICAgIGlmICghYSB8fCAhYikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBrID0gT2JqZWN0LmtleXMoYSkubGVuZ3RoOyBpIDwgazsgaSsrKSB7XG4gICAgICBsZXQgaXRlbWEgPSBhW09iamVjdC5rZXlzKGEpW2ldXTtcbiAgICAgIGxldCBpdGVtYiA9IGJbT2JqZWN0LmtleXMoYSlbaV1dO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKChpZ25vcmVEdXJhdGlvbiAmJiBPYmplY3Qua2V5cyhhKVtpXSAhPT0gJ2R1cmF0aW9uJyAmJiBPYmplY3Qua2V5cyhhKVtpXSAhPT0gJ3JlZlNhbXBsZUR1cmF0aW9uJyAmJiBPYmplY3Qua2V5cyhhKVtpXSAhPT0gJ3JlZlNhbXBsZUR1cmF0aW9uRml4ZWQnKSAmJiBpdGVtYSAhPT0gaXRlbWIpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXRlbWEuYnl0ZUxlbmd0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpdGVtYi5ieXRlTGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFUc0RlbXV4ZXIuY29tcGFpcmVBcnJheShpdGVtYSwgaXRlbWIsICdVaW50OEFycmF5JykpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoaXRlbWEubGVuZ3RoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGl0ZW1iLmxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVHNEZW11eGVyLmNvbXBhaXJlQXJyYXkoaXRlbWEsIGl0ZW1iLCAnQXJyYXknKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFUc0RlbXV4ZXIuY29tcGFpcmVNZXRhKGl0ZW1hLCBpdGVtYikpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgTWVyZ2UgKGJ1ZmZlcnMpIHtcbiAgICBsZXQgZGF0YTtcbiAgICBsZXQgbGVuZ3RoID0gMDtcbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxlbmd0aCArPSAoYnVmZmVyc1tpXS5sZW5ndGggLSBidWZmZXJzW2ldLnBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBidWZmZXIgPSBidWZmZXJzW2ldO1xuICAgICAgZGF0YS5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmZmVyLmJ1ZmZlciwgYnVmZmVyLnBvc2l0aW9uKSwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBidWZmZXIubGVuZ3RoIC0gYnVmZmVyLnBvc2l0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFN0cmVhbShkYXRhLmJ1ZmZlcik7XG4gIH1cblxuICBzdGF0aWMgcmVhZCAoc3RyZWFtLCB0cywgZnJhZ3MpIHtcbiAgICBUc0RlbXV4ZXIucmVhZEhlYWRlcihzdHJlYW0sIHRzKTtcbiAgICBUc0RlbXV4ZXIucmVhZFBheWxvYWQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgIGlmICh0cy5oZWFkZXIucGFja2V0ID09PSAnTUVESUEnICYmIHRzLmhlYWRlci5wYXlsb2FkID09PSAxICYmICF0cy51bmtub3duUElEcykge1xuICAgICAgdHMucGVzID0gVHNEZW11eGVyLlBFUyh0cyk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHJlYWRQYXlsb2FkIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIGxldCBoZWFkZXIgPSB0cy5oZWFkZXJcbiAgICBsZXQgcGlkID0gaGVhZGVyLnBpZDtcbiAgICBzd2l0Y2ggKHBpZCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBUc0RlbXV4ZXIuUEFUKHN0cmVhbSwgdHMsIGZyYWdzKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIFRzRGVtdXhlci5DQVQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgVHNEZW11eGVyLlRTRFQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMHgxZmZmOlxuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIFRPRE86IHNvbWXnmoTlhpnms5XkuI3lpKrlpb3vvIzlvpfmlLlcbiAgICAgICAgaWYgKGZyYWdzLnBhdC5zb21lKChpdGVtKSA9PiB7IHJldHVybiBpdGVtLnBpZCA9PT0gcGlkOyB9KSkge1xuICAgICAgICAgIFRzRGVtdXhlci5QTVQoc3RyZWFtLCB0cywgZnJhZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBzdHMgPSBmcmFncy5wbXQgPyBmcmFncy5wbXQuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnBpZCA9PT0gcGlkKSA6IFtdO1xuICAgICAgICAgIGlmIChzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgVHNEZW11eGVyLk1lZGlhKHN0cmVhbSwgdHMsIFN0cmVhbVR5cGVbc3RzWzBdLnN0cmVhbVR5cGVdWzBdKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0cy51bmtub3duUElEcyA9IHRydWU7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyByZWFkSGVhZGVyIChzdHJlYW0sIHRzKSB7XG4gICAgbGV0IGhlYWRlciA9IHt9O1xuICAgIGhlYWRlci5zeW5jID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICBoZWFkZXIuZXJyb3IgPSBuZXh0ID4+PiAxNTtcbiAgICBoZWFkZXIucGF5bG9hZCA9IG5leHQgPj4+IDE0ICYgMTtcbiAgICBoZWFkZXIucHJpb3JpdHkgPSBuZXh0ID4+PiAxMyAmIDE7XG4gICAgaGVhZGVyLnBpZCA9IG5leHQgJiAweDFmZmY7XG5cbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuXG4gICAgaGVhZGVyLnNjcmFtYmxpbmcgPSBuZXh0ID4+IDYgJiAweDM7IC8vIOaYr+WQpuWKoOWvhu+8jDAw6KGo56S65LiN5Yqg5a+GXG5cbiAgICAvKipcbiAgICAgKiAwMCBJU08vSUVD5pyq5p2l5L2/55So5L+d55WZXG4gICAgICogMDEg5rKh5pyJ6LCD5pW05a2X5q6177yM5LuF5ZCr5pyJMTg0QuacieaViOWHgOiNt1xuICAgICAqIDAyIOayoeacieacieaViOWHgOiNt++8jOS7heWQq+aciTE4M0LosIPmlbTlrZfmrrVcbiAgICAgKiAwMyAwfjE4MkLosIPmlbTlrZfmrrXlkI7kuLrmnInmlYjlh4DojbdcbiAgICAgKi9cbiAgICBoZWFkZXIuYWRhcHRhdGlvbiA9IG5leHQgPj4gNCAmIDB4MztcbiAgICBoZWFkZXIuY29udGludWl0eSA9IG5leHQgJiAxNTtcbiAgICBoZWFkZXIucGFja2V0ID0gaGVhZGVyLnBpZCA9PT0gMCA/ICdQQVQnIDogJ01FRElBJztcbiAgICB0cy5oZWFkZXIgPSBoZWFkZXI7XG4gIH1cblxuICBzdGF0aWMgUEFUIChzdHJlYW0sIHRzLCBmcmFncykge1xuICAgIGxldCByZXQgPSB7fTtcbiAgICBsZXQgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICBzdHJlYW0uc2tpcChuZXh0KTtcbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC50YWJlbElEID0gbmV4dDtcbiAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuZXJyb3IgPSBuZXh0ID4+PiA3O1xuICAgIHJldC56ZXJvID0gbmV4dCA+Pj4gNiAmIDE7XG4gICAgcmV0LnNlY3Rpb25MZW5ndGggPSBuZXh0ICYgMHhmZmY7XG4gICAgcmV0LnN0cmVhbUlEID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuY3VycmVudCA9IHN0cmVhbS5yZWFkVWludDgoKSAmIDE7XG4gICAgcmV0LnNlY3Rpb25OdW1iZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0Lmxhc3RTZWN0aW9uTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIGxldCBOID0gKHJldC5zZWN0aW9uTGVuZ3RoIC0gOSkgLyA0O1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHtcbiAgICAgIGxldCBwcm9ncmFtTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgIGxldCBwaWQgPSBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHgxZmZmO1xuICAgICAgbGlzdC5wdXNoKHtcbiAgICAgICAgcHJvZ3JhbTogcHJvZ3JhbU51bWJlcixcbiAgICAgICAgcGlkLFxuICAgICAgICB0eXBlOiBwcm9ncmFtTnVtYmVyID09PSAwID8gJ25ldHdvcmsnIDogJ21hcFBJRCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBmcmFncy5wYXQgPSBmcmFncy5wYXQuY29uY2F0KGxpc3QpO1xuICAgIH1cbiAgICByZXQubGlzdCA9IGxpc3Q7XG4gICAgcmV0LnByb2dyYW0gPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5waWQgPSBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHgxZmZmO1xuICAgIHRzLnBheWxvYWQgPSByZXQ7XG4gICAgLy8gVE9ETyBDUkNcbiAgfVxuXG4gIHN0YXRpYyBQTVQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgbGV0IHJldCA9IHt9O1xuICAgIGxldCBoZWFkZXIgPSB0cy5oZWFkZXI7XG4gICAgaGVhZGVyLnBhY2tldCA9ICdQTVQnO1xuICAgIGxldCBuZXh0ID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHN0cmVhbS5za2lwKG5leHQpO1xuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0LnRhYmxlSUQgPSBuZXh0O1xuICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5zZWN0aW9uTGVuZ3RoID0gbmV4dCAmIDB4ZmZmO1xuICAgIHJldC5wcm9ncmFtID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICByZXQuY3VycmVudCA9IHN0cmVhbS5yZWFkVWludDgoKSAmIDE7XG4gICAgcmV0Lm9yZGVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIHJldC5sYXN0T3JkZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0LlBDUl9QSUQgPSBzdHJlYW0ucmVhZFVpbnQxNigpICYgMHgxZmZmO1xuICAgIHJldC5wcm9ncmFtTGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4ZmZmO1xuICAgIGxldCBOID0gKHJldC5zZWN0aW9uTGVuZ3RoIC0gMTMpIC8gNTtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2goe1xuICAgICAgICBzdHJlYW1UeXBlOiBzdHJlYW0ucmVhZFVpbnQ4KCksXG4gICAgICAgIHBpZDogc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4MWZmZiwgLy8gMHgwN2U1IOinhumike+8jDB4MDdlNlxuICAgICAgICBlczogc3RyZWFtLnJlYWRVaW50MTYoKSAmIDB4ZmZmXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0Lmxpc3QgPSBsaXN0O1xuICAgIGlmICghdGhpcy5wbXQpIHtcbiAgICAgIHRoaXMucG10ID0gW107XG4gICAgfVxuICAgIGZyYWdzLnBtdCA9IHRoaXMucG10LmNvbmNhdChsaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGlkOiBpdGVtLnBpZCxcbiAgICAgICAgZXM6IGl0ZW0uZXMsXG4gICAgICAgIHN0cmVhbVR5cGU6IGl0ZW0uc3RyZWFtVHlwZSxcbiAgICAgICAgcHJvZ3JhbTogcmV0LnByb2dyYW1cbiAgICAgIH07XG4gICAgfSkpO1xuICAgIHRzLnBheWxvYWQgPSByZXQ7XG4gIH1cblxuICBzdGF0aWMgTWVkaWEgKHN0cmVhbSwgdHMsIHR5cGUpIHtcbiAgICBsZXQgaGVhZGVyID0gdHMuaGVhZGVyO1xuICAgIGxldCBwYXlsb2FkID0ge307XG4gICAgaGVhZGVyLnR5cGUgPSB0eXBlO1xuICAgIGlmIChoZWFkZXIuYWRhcHRhdGlvbiA9PT0gMHgwMykge1xuICAgICAgcGF5bG9hZC5hZGFwdGF0aW9uTGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgICAgaWYgKHBheWxvYWQuYWRhcHRhdGlvbkxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgIHBheWxvYWQuZGlzY29udGludWUgPSBuZXh0ID4+PiA3O1xuICAgICAgICBwYXlsb2FkLmFjY2VzcyA9IG5leHQgPj4+IDYgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLnByaW9yaXR5ID0gbmV4dCA+Pj4gNSAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQuUENSID0gbmV4dCA+Pj4gNCAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQuT1BDUiA9IG5leHQgPj4+IDMgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLnNwbGljZVBvaW50ID0gbmV4dCA+Pj4gMiAmIDB4MDE7XG4gICAgICAgIHBheWxvYWQudHJhbnNwb3J0UHJpdmF0ZSA9IG5leHQgPj4+IDEgJiAweDAxO1xuICAgICAgICBwYXlsb2FkLmFkYXB0YXRpb25GaWVsZCA9IG5leHQgJiAweDAxO1xuICAgICAgICBsZXQgX3N0YXJ0ID0gc3RyZWFtLnBvc2l0aW9uO1xuICAgICAgICBpZiAocGF5bG9hZC5QQ1IgPT09IDEpIHtcbiAgICAgICAgICBwYXlsb2FkLnByb2dyYW1DbG9ja0Jhc2UgPSBzdHJlYW0ucmVhZFVpbnQzMigpIDw8IDE7XG4gICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcGF5bG9hZC5wcm9ncmFtQ2xvY2tCYXNlIHw9IG5leHQgPj4+IDE1O1xuICAgICAgICAgIHBheWxvYWQucHJvZ3JhbUNsb2NrRXh0ZW5zaW9uID0gbmV4dCAmIDB4MWZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkLk9QQ1IgPT09IDEpIHtcbiAgICAgICAgICBwYXlsb2FkLm9yaWdpblByb2dyYW1DbG9ja0Jhc2UgPSBzdHJlYW0ucmVhZFVpbnQzMigpIDw8IDE7XG4gICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgcGF5bG9hZC5vcmlnaW5Qcm9ncmFtQ2xvY2tCYXNlICs9IG5leHQgPj4+IDE1O1xuICAgICAgICAgIHBheWxvYWQub3JpZ2luUHJvZ3JhbUNsb2NrRXh0ZW5zaW9uID0gbmV4dCAmIDB4MWZmO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXlsb2FkLnNwbGljZVBvaW50ID09PSAxKSB7XG4gICAgICAgICAgcGF5bG9hZC5zcGxpY2VDb3VudGRvd24gPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQudHJhbnNwb3J0UHJpdmF0ZSA9PT0gMSkge1xuICAgICAgICAgIGxldCBsZW5ndGggPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgbGV0IHRyYW5zcG9ydFByaXZhdGVEYXRhID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJhbnNwb3J0UHJpdmF0ZURhdGEucHVzaChzdHJlYW0ucmVhZFVpbnQ4KCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5hZGFwdGF0aW9uRmllbGQgPT09IDEpIHtcbiAgICAgICAgICBsZXQgbGVuZ3RoID0gc3RyZWFtLnJlYWRVaW50OCgpXG4gICAgICAgICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQ4KClcbiAgICAgICAgICBsZXQgc3RhcnQgPSBzdHJlYW0ucG9zaXRpb247XG4gICAgICAgICAgbGV0IGx0dyA9IG5leHQgPj4+IDc7XG4gICAgICAgICAgbGV0IHBpZWNld2lzZSA9IG5leHQgPj4+IDYgJiAweDE7XG4gICAgICAgICAgbGV0IHNlYW1sZXNzID0gbmV4dCA+Pj4gNSAmIDB4MTtcbiAgICAgICAgICBpZiAobHR3ID09PSAxKSB7XG4gICAgICAgICAgICBuZXh0ID0gc3RyZWFtLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICAgIHBheWxvYWQubHR3VmFsaWQgPSBuZXh0ID4+PiAxNTtcbiAgICAgICAgICAgIHBheWxvYWQubHR3T2Zmc2V0ID0gbmV4dCAmIDB4ZWZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHBpZWNld2lzZSA9PT0gMSkge1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDI0KCk7XG4gICAgICAgICAgICBwYXlsb2FkLnBpZWNld2lzZVJhdGUgPSBuZXh0ICYgMHgzZmZmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZWFtbGVzcyA9PT0gMSkge1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkSW50OCgpO1xuICAgICAgICAgICAgcGF5bG9hZC5zcGxpY2VUeXBlID0gbmV4dCA+Pj4gNDtcbiAgICAgICAgICAgIHBheWxvYWQuZHRzTmV4dEFVMSA9IG5leHQgPj4+IDEgJiAweDc7XG4gICAgICAgICAgICBwYXlsb2FkLm1hcmtlcjEgPSBuZXh0ICYgMHgxO1xuICAgICAgICAgICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDE2KCk7XG4gICAgICAgICAgICBwYXlsb2FkLmR0c05leHRBVTIgPSBuZXh0ID4+PiAxO1xuICAgICAgICAgICAgcGF5bG9hZC5tYXJrZXIyID0gbmV4dCAmIDB4MTtcbiAgICAgICAgICAgIG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgICAgICAgICAgcGF5bG9hZC5kdHNOZXh0QVUzID0gbmV4dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3RyZWFtLnNraXAobGVuZ3RoIC0gMSAtIChzdHJlYW0ucG9zaXRpb24gLSBzdGFydCkpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0U3R1ZmZpbmcgPSBwYXlsb2FkLmFkYXB0YXRpb25MZW5ndGggLSAxIC0gKHN0cmVhbS5wb3NpdGlvbiAtIF9zdGFydCk7XG4gICAgICAgIHN0cmVhbS5za2lwKGxhc3RTdHVmZmluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHBheWxvYWQuc3RyZWFtID0gbmV3IFN0cmVhbShzdHJlYW0uYnVmZmVyLnNsaWNlKHN0cmVhbS5wb3NpdGlvbikpO1xuICAgIHRzLnBheWxvYWQgPSBwYXlsb2FkO1xuICB9XG5cbiAgc3RhdGljIFBFUyAodHMpIHtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgbGV0IGJ1ZmZlciA9IHRzLnBheWxvYWQuc3RyZWFtO1xuXG4gICAgbGV0IG5leHQgPSBidWZmZXIucmVhZFVpbnQyNCgpO1xuICAgIGlmIChuZXh0ICE9PSAxKSB7XG4gICAgICByZXQuRVMgPSB7fTtcbiAgICAgIHJldC5FUy5idWZmZXIgPSBidWZmZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzdHJlYW1JRCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgIGlmIChzdHJlYW1JRCA+PSAweGUwICYmIHN0cmVhbUlEIDw9IDB4ZWYpIHtcbiAgICAgICAgcmV0LnR5cGUgPSAndmlkZW8nO1xuICAgICAgfVxuICAgICAgaWYgKHN0cmVhbUlEID49IDB4YzAgJiYgc3RyZWFtSUQgPD0gMHhkZikge1xuICAgICAgICByZXQudHlwZSA9ICdhdWRpbyc7XG4gICAgICB9XG4gICAgICBsZXQgcGFja2V0TGVuZ3RoID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgIHJldC5wYWNrZXRMZW5ndGggPSBwYWNrZXRMZW5ndGg7XG4gICAgICBpZiAocmV0LnR5cGUgPT09ICd2aWRlbycgfHwgcmV0LnR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgbGV0IG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgIGxldCBmaXJzdCA9IG5leHQgPj4+IDY7XG4gICAgICAgIGlmIChmaXJzdCAhPT0gMHgwMikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZXJyb3Igd2hlbiBwYXJzZSBwZXMgaGVhZGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDgoKTtcbiAgICAgICAgcmV0LnB0c0RUU0ZsYWcgPSBuZXh0ID4+PiA2O1xuICAgICAgICByZXQuZXNjckZsYWcgPSBuZXh0ID4+PiA1ICYgMHgwMTtcbiAgICAgICAgcmV0LmVzUmF0ZUZsYWcgPSBuZXh0ID4+PiA0ICYgMHgwMTtcbiAgICAgICAgcmV0LmRzbUZsYWcgPSBuZXh0ID4+PiAzICYgMHgwMTtcbiAgICAgICAgcmV0LmFkZGl0aW9uYWxGbGFnID0gbmV4dCA+Pj4gMiAmIDB4MDE7XG4gICAgICAgIHJldC5jcmNGbGFnID0gbmV4dCA+Pj4gMSAmIDB4MDE7XG4gICAgICAgIHJldC5leHRlbnNpb25GbGFnID0gbmV4dCAmIDB4MDE7XG4gICAgICAgIHJldC5wZXNIZWFkZXJMZW5ndGggPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgIGxldCBOMSA9IHJldC5wZXNIZWFkZXJMZW5ndGg7XG5cbiAgICAgICAgaWYgKHJldC5wdHNEVFNGbGFnID09PSAyKSB7XG4gICAgICAgICAgbGV0IHB0cyA9IFtdO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgcHRzLnB1c2gobmV4dCA+Pj4gMSAmIDB4MDcpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIHJldC5wdHMgPSAocHRzWzBdIDw8IDMwIHwgcHRzWzFdIDw8IDE1IHwgcHRzWzJdKTtcbiAgICAgICAgICBOMSAtPSA1O1xuICAgICAgICAgIC8vIOinhumikeWmguaenOayoeaciWR0c+eUqHB0c1xuICAgICAgICAgIGlmIChyZXQudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgcmV0LmR0cyA9IHJldC5wdHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQucHRzRFRTRmxhZyA9PT0gMykge1xuICAgICAgICAgIGxldCBwdHMgPSBbXTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50OCgpO1xuICAgICAgICAgIHB0cy5wdXNoKG5leHQgPj4+IDEgJiAweDA3KTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBwdHMucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICByZXQucHRzID0gKHB0c1swXSA8PCAzMCB8IHB0c1sxXSA8PCAxNSB8IHB0c1syXSk7XG4gICAgICAgICAgbGV0IGR0cyA9IFtdO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgZHRzLnB1c2gobmV4dCA+Pj4gMSAmIDB4MDcpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIGR0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIGR0cy5wdXNoKG5leHQgPj4+IDEpO1xuICAgICAgICAgIHJldC5kdHMgPSAoZHRzWzBdIDw8IDMwIHwgZHRzWzFdIDw8IDE1IHwgZHRzWzJdKTtcbiAgICAgICAgICBOMSAtPSAxMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmVzY3JGbGFnID09PSAxKSB7XG4gICAgICAgICAgbGV0IGVzY3IgPSBbXVxuICAgICAgICAgIGxldCBleCA9IFtdO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgZXNjci5wdXNoKG5leHQgPj4+IDMgJiAweDA3KTtcbiAgICAgICAgICBlc2NyLnB1c2gobmV4dCAmIDB4MDMpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgICAgIGVzY3IucHVzaChuZXh0ID4+PiAxMyk7XG4gICAgICAgICAgZXNjci5wdXNoKG5leHQgJiAweDAzKTtcbiAgICAgICAgICBuZXh0ID0gYnVmZmVyLnJlYWRVaW50MTYoKTtcbiAgICAgICAgICBlc2NyLnB1c2gobmV4dCA+Pj4gMTMpO1xuICAgICAgICAgIGV4LnB1c2gobmV4dCAmIDB4MDMpO1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgZXgucHVzaChuZXh0ID4+PiAxKTtcbiAgICAgICAgICByZXQuZXNjciA9IChlc2NyWzBdIDw8IDMwIHwgZXNjclsxXSA8PCAyOCB8IGVzY3JbMl0gPDwgMTUgfCBlc2NyWzNdIDw8IDEzIHwgZXNjcls0XSkgKiAzMDAgKyAoZXhbMF0gPDwgNyB8IGV4WzFdKTtcbiAgICAgICAgICBOMSAtPSA2O1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXQuZXNSYXRlRmxhZyA9PT0gMSkge1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQyNCgpO1xuICAgICAgICAgIHJldC5lc1JhdGUgPSBuZXh0ID4+PiAxICYgMHgzZmZmZmY7XG4gICAgICAgICAgTjEgLT0gMztcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmRzbUZsYWcgPT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBzdXBwb3J0IERTTV90cmlja19tb2RlJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5hZGRpdGlvbmFsRmxhZyA9PT0gMSkge1xuICAgICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQ4KCk7XG4gICAgICAgICAgcmV0LmFkZGl0aW9uYWxDb3B5SW5mbyA9IG5leHQgJiAweDdmO1xuICAgICAgICAgIE4xIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJldC5jcmNGbGFnID09PSAxKSB7XG4gICAgICAgICAgcmV0LnBlc0NSQyA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICAgICAgTjEgLT0gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmV0LmV4dGVuc2lvbkZsYWcgPT09IDEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBzdXBwb3J0IGV4dGVuc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChOMSA+IDApIHtcbiAgICAgICAgICBidWZmZXIuc2tpcChOMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0LkVTID0gVHNEZW11eGVyLkVTKGJ1ZmZlciwgcmV0LnR5cGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXMgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIEVTIChidWZmZXIsIHR5cGUpIHtcbiAgICBsZXQgbmV4dDtcbiAgICBsZXQgcmV0ID0ge307XG4gICAgaWYgKHR5cGUgPT09ICd2aWRlbycpIHtcbiAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQzMigpO1xuICAgICAgaWYgKG5leHQgIT09IDEpIHtcbiAgICAgICAgYnVmZmVyLmJhY2soNCk7XG4gICAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQyNCgpO1xuICAgICAgICBpZiAobmV4dCAhPT0gMSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaDI2NCBuYWwgaGVhZGVyIHBhcnNlIGZhaWxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBidWZmZXIuc2tpcCgyKTsvLyAwOSBGMFxuICAgICAgLy8gVE9ETyByZWFkbmFsdVxuICAgICAgcmV0LmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgIG5leHQgPSBidWZmZXIucmVhZFVpbnQxNigpO1xuICAgICAgLy8gYWR0c+eahOWQjOatpeWtl+iKgu+8jDEy5L2NXG4gICAgICBpZiAobmV4dCA+Pj4gNCAhPT0gMHhmZmYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhYWMgRVMgcGFyc2UgRXJyb3InKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZxID0gWzk2MDAwLCA4ODIwMCwgNjQwMDAsIDQ4MDAwLCA0NDEwMCwgMzIwMDAsIDI0MDAwLCAyMjA1MCwgMTYwMDAsIDEyMDAwLCAxMTAyNSwgODAwMCwgNzM1MF07XG4gICAgICByZXQuaWQgPSAobmV4dCA+Pj4gMyAmIDB4MDEpID09PSAwID8gJ01QRUctNCcgOiAnTVBFRy0yJztcbiAgICAgIHJldC5sYXllciA9IG5leHQgPj4+IDEgJiAweDAzO1xuICAgICAgcmV0LmFic2VudCA9IG5leHQgJiAweDAxO1xuICAgICAgbmV4dCA9IGJ1ZmZlci5yZWFkVWludDE2KCk7XG4gICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gKG5leHQgPj4+IDE0ICYgMHgwMykgKyAxO1xuICAgICAgcmV0LnByb2ZpbGUgPSByZXQuYXVkaW9PYmplY3RUeXBlIC0gMTtcbiAgICAgIHJldC5mcmVxdWVuY3lJbmRleCA9IG5leHQgPj4+IDEwICYgMHgwZjtcbiAgICAgIHJldC5mcmVxdWVuY2UgPSBmcVtyZXQuZnJlcXVlbmN5SW5kZXhdO1xuICAgICAgcmV0LmNoYW5uZWwgPSBuZXh0ID4+PiA2ICYgMHgwNztcbiAgICAgIHJldC5mcmFtZUxlbmd0aCA9IChuZXh0ICYgMHgwMykgPDwgMTEgfCAoYnVmZmVyLnJlYWRVaW50MTYoKSA+Pj4gNSk7XG4gICAgICBUc0RlbXV4ZXIuZ2V0QXVkaW9Db25maWcocmV0KTtcbiAgICAgIGJ1ZmZlci5za2lwKDEpO1xuICAgICAgcmV0LmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBFUyAke3R5cGV9IGlzIG5vdCBzdXBwb3J0ZWRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc3RhdGljIFRTRFQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgLy8gVE9ET1xuICAgIHRzLnBheWxvYWQgPSB7fTtcbiAgfVxuXG4gIHN0YXRpYyBDQVQgKHN0cmVhbSwgdHMsIGZyYWdzKSB7XG4gICAgbGV0IHJldCA9IHt9XG4gICAgcmV0LnRhYmxlSUQgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgbGV0IG5leHQgPSBzdHJlYW0ucmVhZFVpbnQxNigpO1xuICAgIHJldC5zZWN0aW9uSW5kaWNhdG9yID0gbmV4dCA+Pj4gNztcbiAgICByZXQuc2VjdGlvbkxlbmd0aCA9IG5leHQgJiAweDBmZmY7XG4gICAgc3RyZWFtLnNraXAoMik7XG4gICAgbmV4dCA9IHN0cmVhbS5yZWFkVWludDgoKTtcbiAgICByZXQudmVyc2lvbiA9IG5leHQgPj4+IDM7XG4gICAgcmV0LmN1cnJlbnROZXh0SW5kaWNhdG9yID0gbmV4dCAmIDB4MDE7XG4gICAgcmV0LnNlY3Rpb25OdW1iZXIgPSBzdHJlYW0ucmVhZFVpbnQ4KCk7XG4gICAgcmV0Lmxhc3RTZWN0aW9uTnVtYmVyID0gc3RyZWFtLnJlYWRVaW50OCgpO1xuICAgIGxldCBOID0gKHRoaXMuc2VjdGlvbkxlbmd0aCAtIDkpIC8gNDtcbiAgICBsZXQgbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTjsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2goe30pO1xuICAgIH1cbiAgICByZXQuY3JjMzIgPSBzdHJlYW0ucmVhZFVpbnQzMigpO1xuICAgIHRzLnBheWxvYWQgPSByZXQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0QXVkaW9Db25maWcgKHJldCkge1xuICAgIGxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcbiAgICBsZXQgY29uZmlnO1xuICAgIGxldCBleHRlbnNpb25TYW1wbGVJbmRleDtcbiAgICBpZiAoL2ZpcmVmb3gvaS50ZXN0KHVzZXJBZ2VudCkpIHtcbiAgICAgIGlmIChyZXQuZnJlcXVlbmN5SW5kZXggPj0gNikge1xuICAgICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gNTtcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDQpO1xuICAgICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleCAtIDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gMjtcbiAgICAgICAgY29uZmlnID0gbmV3IEFycmF5KDIpO1xuICAgICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhbmRyb2lkJykgIT09IC0xKSB7XG4gICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gMjtcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSgyKTtcbiAgICAgIGV4dGVuc2lvblNhbXBsZUluZGV4ID0gcmV0LmZyZXF1ZW5jeUluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gNTtcbiAgICAgIGNvbmZpZyA9IG5ldyBBcnJheSg0KTtcbiAgICAgIGlmIChyZXQuZnJlcXVlbmN5SW5kZXggPj0gNikge1xuICAgICAgICBleHRlbnNpb25TYW1wbGVJbmRleCA9IHJldC5mcmVxdWVuY3lJbmRleCAtIDM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocmV0LmNoYW5uZWwgPT09IDEpIHtcbiAgICAgICAgICByZXQuYXVkaW9PYmplY3RUeXBlID0gMjtcbiAgICAgICAgICBjb25maWcgPSBuZXcgQXJyYXkoMik7XG4gICAgICAgIH1cbiAgICAgICAgZXh0ZW5zaW9uU2FtcGxlSW5kZXggPSByZXQuZnJlcXVlbmN5SW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnWzBdID0gcmV0LmF1ZGlvT2JqZWN0VHlwZSA8PCAzO1xuICAgIGNvbmZpZ1swXSB8PSAocmV0LmZyZXF1ZW5jeUluZGV4ICYgMHgwZSkgPj4gMTtcbiAgICBjb25maWdbMV0gPSAocmV0LmZyZXF1ZW5jeUluZGV4ICYgMHgwMSkgPDwgNztcbiAgICBjb25maWdbMV0gfD0gcmV0LmNoYW5uZWwgPDwgMztcbiAgICBpZiAocmV0LmF1ZGlvT2JqZWN0VHlwZSA9PT0gNSkge1xuICAgICAgY29uZmlnWzFdIHw9IChleHRlbnNpb25TYW1wbGVJbmRleCAmIDB4MGUpID4+IDE7XG4gICAgICBjb25maWdbMl0gPSAoZXh0ZW5zaW9uU2FtcGxlSW5kZXggJiAweDAxKSA8PCA3O1xuICAgICAgY29uZmlnWzJdIHw9IDIgPDwgMjtcbiAgICAgIGNvbmZpZ1szXSA9IDA7XG4gICAgfVxuICAgIHJldC5hdWRpb0NvbmZpZyA9IGNvbmZpZztcbiAgfVxuXG4gIGdldCBpbnB1dEJ1ZmZlciAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5jb25maWdzLmlucHV0YnVmZmVyKTtcbiAgfVxuXG4gIGdldCBfdHJhY2tzICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHNEZW11eGVyO1xuIiwiY2xhc3MgUGxheWxpc3Qge1xuICBjb25zdHJ1Y3RvciAoY29uZmlncykge1xuICAgIHRoaXMuX2Jhc2VVUkwgPSAnJztcbiAgICB0aGlzLl9saXN0ID0ge307XG4gICAgdGhpcy5fdHMgPSB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSAwO1xuICAgIHRoaXMuc2VxdWVuY2UgPSAtMTtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmZyYWdMZW5ndGggPSAwO1xuICAgIHRoaXMuX2xhc3RnZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fYXVkb2NsZWFyID0gY29uZmlncy5hdXRvY2xlYXIgfHwgZmFsc2U7XG4gIH1cblxuICBnZXQgbGlzdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3Q7XG4gIH1cblxuICBzZXQgYmFzZVVSTCAoYmFzZVVSTCkge1xuICAgIGlmICh0aGlzLmJhc2VVUkwgIT09IGJhc2VVUkwpIHtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIHRoaXMuX2Jhc2VVUkwgPSBiYXNlVVJMO1xuICAgIH1cbiAgfVxuXG4gIGdldCBiYXNlVVJMICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFzZVVSTDtcbiAgfVxuXG4gIHB1c2ggKHRzLCBkdXJhdGlvbiwgZGlzY29udGludWUpIHtcbiAgICBpZiAoIXRoaXMuX3RzW3RzXSkge1xuICAgICAgdGhpcy5fdHNbdHNdID0ge2R1cmF0aW9uOiBkdXJhdGlvbiwgXG4gICAgICAgIGRvd25sb2FkZWQ6IGZhbHNlLCBcbiAgICAgICAgZG93bmxvYWRpbmc6IGZhbHNlLCBcbiAgICAgICAgc3RhcnQ6IHRoaXMuZHVyYXRpb24sIFxuICAgICAgICBkaXNjb250aW51ZTogZGlzY29udGludWUgPyB0cnVlOiBmYWxzZVxuICAgICAgfTtcbiAgICAgIHRoaXMuX2xpc3RbdGhpcy5kdXJhdGlvbl0gPSB0cztcbiAgICAgIHRoaXMuZHVyYXRpb24gKz0gZHVyYXRpb247XG4gICAgICB0aGlzLmZyYWdMZW5ndGggKz0gMTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVGcmFnICh1cmwpIHtcbiAgICBpZiAodGhpcy5fdHNbdXJsXSkge1xuICAgICAgaWYgKHRoaXMuX3RzW3VybF0uc3RhcnQgPiB0aGlzLl9sYXN0Z2V0LnRpbWUpIHtcbiAgICAgICAgdGhpcy5fbGFzdGdldCA9IHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhpcy5fdHNbdXJsXS5kdXJhdGlvbixcbiAgICAgICAgICB0aW1lOiB0aGlzLl90c1t1cmxdLnN0YXJ0LFxuICAgICAgICAgIGRvd25sb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIGRvd25sb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5fbGlzdFt0aGlzLl90c1t1cmxdLnN0YXJ0XTtcbiAgICAgIGRlbGV0ZSB0aGlzLl90c1t1cmxdO1xuICAgICAgdGhpcy5mcmFnTGVuZ3RoIC09IDE7XG4gICAgfVxuICB9XG5cbiAgcHVzaE0zVTggKGRhdGEsIGRlbGV0ZXByZSkge1xuICAgIC8vIOW4uOinhOS/oeaBr+abv+aNolxuICAgIGlmICghZGF0YSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBtM3U4IGRhdGEgcmVjZWl2ZWQuYCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmVyc2lvbiA9IGRhdGEudmVyc2lvbjtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gZGF0YS50YXJnZXRkdXJhdGlvbjtcbiAgICBpZihkYXRhLmVuY3J5cHQgJiYgIXRoaXMuZW5jcnlwdCkge1xuICAgICAgdGhpcy5lbmNyeXB0ID0gZGF0YS5lbmNyeXB0O1xuICAgIH1cbiAgICAvLyDmlrDliIbniYfkv6Hmga9cbiAgICBpZiAoZGF0YS5zZXF1ZW5jZSA+IHRoaXMuc2VxdWVuY2UpIHtcbiAgICAgIHRoaXMuc2VxdWVuY2UgPSBkYXRhLnNlcXVlbmNlO1xuICAgICAgbGV0IG5ld2ZyYWdsaXN0ID0gW11cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5mcmFncy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgZnJhZyA9IGRhdGEuZnJhZ3NbaV07XG4gICAgICAgIGlmICghdGhpcy5fdHNbZnJhZy51cmxdKSB7XG4gICAgICAgICAgbmV3ZnJhZ2xpc3QucHVzaChmcmFnLnVybClcbiAgICAgICAgICB0aGlzLnB1c2goZnJhZy51cmwsIGZyYWcuZHVyYXRpb24sIGZyYWcuZGlzY29udGludWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKG5ld2ZyYWdsaXN0Lmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4gbm90IHJlYWQgdHMgZmlsZSBsaXN0LmApO1xuICAgICAgfVxuICAgICAgXG4gICAgICBpZiAoZGVsZXRlcHJlKSB7XG4gICAgICAgIGxldCB0c2xpc3QgPSB0aGlzLmdldFRzTGlzdCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRzbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChuZXdmcmFnbGlzdC5pbmRleE9mKHRzbGlzdFtpXSkgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZyYWcodHNsaXN0W2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBPbGQgbTN1OCBmaWxlIHJlY2VpdmVkLCAke2RhdGEuc2VxdWVuY2V9YCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VHNMaXN0ICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fdHMpO1xuICB9XG5cbiAgZG93bmxvYWRlZCAodHNuYW1lLCBpc2xvYWRlZCkge1xuICAgIGxldCB0cyA9IHRoaXMuX3RzW3RzbmFtZV07XG4gICAgaWYgKHRzKSB7XG4gICAgICB0cy5kb3dubG9hZGVkID0gaXNsb2FkZWRcbiAgICB9XG4gIH1cblxuICBkb3dubG9hZGluZyAodHNuYW1lLCBsb2FkaW5nKSB7XG4gICAgbGV0IHRzID0gdGhpcy5fdHNbdHNuYW1lXTtcbiAgICBpZiAodHMpIHtcbiAgICAgIHRzLmRvd25sb2FkaW5nID0gbG9hZGluZ1xuICAgIH1cbiAgfVxuXG4gIGdldFRzQnlOYW1lIChuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RzW25hbWVdO1xuICB9XG5cbiAgZ2V0VHMgKHRpbWUpIHtcbiAgICBsZXQgdGltZWxpc3QgPSBPYmplY3Qua2V5cyh0aGlzLl9saXN0KTtcbiAgICBsZXQgdHM7XG5cbiAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAodGhpcy5fbGFzdGdldCkge1xuICAgICAgICB0aW1lID0gdGhpcy5fbGFzdGdldC50aW1lICsgdGhpcy5fbGFzdGdldC5kdXJhdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWUgPSAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aW1lbGlzdC5sZW5ndGggPCAxIHx8IHRpbWUgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGltZWxpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoYSkgLSBwYXJzZUZsb2F0KGIpXG4gICAgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRpbWUgPj0gcGFyc2VJbnQodGltZWxpc3RbaV0pKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLl9saXN0W3RpbWVsaXN0W2ldXTtcbiAgICAgICAgbGV0IGRvd25sb2FkZWQgPSB0aGlzLl90c1t1cmxdLmRvd25sb2FkZWQ7XG4gICAgICAgIGxldCBkb3dubG9hZGluZyA9IHRoaXMuX3RzW3VybF0uZG93bmxvYWRpbmc7XG4gICAgICAgIHRzID0ge3VybCwgZG93bmxvYWRlZCwgZG93bmxvYWRpbmcsIHRpbWU6IHBhcnNlSW50KHRpbWVsaXN0W2ldKSwgZHVyYXRpb246IHBhcnNlSW50KHRoaXMuX3RzW3VybF0uZHVyYXRpb24pfTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b2NsZWFyKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX3RzW3RoaXMuX2xhc3RnZXQudXJsXTtcbiAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdFt0aGlzLl9sYXN0Z2V0LnRpbWVdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xhc3RnZXQgPSB0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHM7XG4gIH1cblxuICBjbGVhciAoKSB7XG4gICAgdGhpcy5fYmFzZVVSTCA9ICcnO1xuICAgIHRoaXMuX2xpc3QgPSB7fTtcbiAgICB0aGlzLl90cyA9IHt9O1xuICAgIHRoaXMudmVyc2lvbiA9IDA7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IC0xO1xuICAgIHRoaXMudGFyZ2V0ZHVyYXRpb24gPSAwO1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICB9XG5cbiAgY2xlYXJEb3dubG9hZGVkICgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IE9iamVjdC5rZXlzKHRoaXMuX3RzKS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCB0cyA9IHRoaXMuX3RzW09iamVjdC5rZXlzKHRoaXMuX3RzKVtpXV07XG4gICAgICB0cy5kb3dubG9hZGVkID0gZmFsc2U7XG4gICAgICB0cy5kb3dubG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuX2Jhc2VVUkwgPSAnJztcbiAgICB0aGlzLl9saXN0ID0ge307XG4gICAgdGhpcy5fdHMgPSB7fTtcbiAgICB0aGlzLnZlcnNpb24gPSAwO1xuICAgIHRoaXMuc2VxdWVuY2UgPSAtMTtcbiAgICB0aGlzLnRhcmdldGR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICB0aGlzLmZyYWdMZW5ndGggPSAwO1xuICAgIHRoaXMuX2xhc3RnZXQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fYXVkb2NsZWFyID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWxpc3Q7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgRmV0Y2hMb2FkZXI6IHJlcXVpcmUoJy4vc3JjL2ZldGNoLWxvYWRlcicpLmRlZmF1bHRcbn07XG4iLCJpbXBvcnQgeyBFVkVOVFMgfSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5cbmNvbnN0IExPQURFUl9FVkVOVFMgPSBFVkVOVFMuTE9BREVSX0VWRU5UUztcbmNvbnN0IFJFQURfU1RSRUFNID0gMDtcbmNvbnN0IFJFQURfVEVYVCA9IDE7XG5jb25zdCBSRUFEX0pTT04gPSAyO1xuY29uc3QgUkVBRF9CVUZGRVIgPSAzO1xuY2xhc3MgRmV0Y2hMb2FkZXIge1xuICBjb25zdHJ1Y3RvciAoY29uZmlncykge1xuICAgIHRoaXMuY29uZmlncyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZ3MpO1xuICAgIHRoaXMudXJsID0gbnVsbFxuICAgIHRoaXMuc3RhdHVzID0gMFxuICAgIHRoaXMuZXJyb3IgPSBudWxsXG4gICAgdGhpcy5fcmVhZGVyID0gbnVsbDtcbiAgICB0aGlzLl9jYW5jZWxlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgIHRoaXMucmVhZHR5cGUgPSB0aGlzLmNvbmZpZ3MucmVhZHR5cGU7XG4gICAgdGhpcy5idWZmZXIgPSB0aGlzLmNvbmZpZ3MuYnVmZmVyIHx8ICdMT0FERVJfQlVGRkVSJztcbiAgICB0aGlzLl9sb2FkZXJUYXNrTm8gPSAwO1xuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5vbihMT0FERVJfRVZFTlRTLkxBREVSX1NUQVJULCB0aGlzLmxvYWQuYmluZCh0aGlzKSlcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdHlwZSAoKSB7XG4gICAgcmV0dXJuICdsb2FkZXInXG4gIH1cblxuICBsb2FkICh1cmwsIG9wdHMpIHtcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMuX2NhbmNlbGVkID0gZmFsc2U7XG5cbiAgICAvLyBUT0RPOiBBZGQgUmFuZ2VzXG4gICAgbGV0IHBhcmFtcyA9IHRoaXMuZ2V0UGFyYW1zKG9wdHMpXG4gICAgX3RoaXMubG9hZGluZyA9IHRydWVcbiAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHBhcmFtcykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBfdGhpcy5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXNcbiAgICAgICAgcmV0dXJuIF90aGlzLl9vbkZldGNoUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9FUlJPUiwgX3RoaXMuVEFHLCBuZXcgRXJyb3IoYGludmFsaWQgcmVzcG9uc2UuYCkpO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikgIHtcbiAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfRVJST1IsIF90aGlzLlRBRywgZXJyb3IpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpXG4gICAgfSlcbiAgfVxuXG4gIF9vbkZldGNoUmVzcG9uc2UgKHJlc3BvbnNlKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICBsZXQgYnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSh0aGlzLmJ1ZmZlcik7XG4gICAgdGhpcy5fbG9hZGVyVGFza05vKys7XG4gICAgbGV0IHRhc2tubyA9IHRoaXMuX2xvYWRlclRhc2tObztcbiAgICBpZiAocmVzcG9uc2Uub2sgPT09IHRydWUpIHtcbiAgICAgIHN3aXRjaCAodGhpcy5yZWFkdHlwZSkge1xuICAgICAgICBjYXNlIFJFQURfSlNPTjpcbiAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoIV90aGlzLl9jYW5jZWxlZCAmJiAhX3RoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBkYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFJFQURfVEVYVDpcbiAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoIV90aGlzLl9jYW5jZWxlZCAmJiAhX3RoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgYnVmZmVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCBkYXRhKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFJFQURfQlVGRkVSOlxuICAgICAgICAgIHJlc3BvbnNlLmFycmF5QnVmZmVyKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgX3RoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoIV90aGlzLl9jYW5jZWxlZCAmJiAhX3RoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2gobmV3IFVpbnQ4QXJyYXkoZGF0YSkpO1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfQ09NUExFVEUsIGJ1ZmZlcik7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgZGF0YSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBSRUFEX1NUUkVBTTpcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gdGhpcy5fb25SZWFkZXIocmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKSwgdGFza25vKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25SZWFkZXIgKHJlYWRlciwgdGFza25vKSB7XG4gICAgbGV0IGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5idWZmZXIpO1xuICAgIGlmICgoIWJ1ZmZlciAmJiB0aGlzLl9yZWFkZXIpIHx8IHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5fcmVhZGVyLmNhbmNlbCgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIERPIE5PVEhJTkdcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9yZWFkZXIgPSByZWFkZXJcbiAgICBpZiAodGhpcy5sb2FkaW5nID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIC8vIHJlYWRlciByZWFkIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLiBnZXQgZGF0YSB3aGVuIGNhbGxiYWNrIGFuZCBoYXMgdmFsdWUuZG9uZSB3aGVuIGRpc2Nvbm5lY3RlZC5cbiAgICAvLyByZWFk5pa55rOV6L+U5Zue5LiA5LiqUHJvbWlzZS4g5Zue6LCD5Lit5Y+v5Lul6I635Y+W5Yiw5pWw5o2u44CC5b2TdmFsdWUuZG9uZeWtmOWcqOaXtu+8jOivtOaYjumTvuaOpeaWreW8gOOAglxuICAgIHRoaXMuX3JlYWRlciAmJiB0aGlzLl9yZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgaWYgKHZhbC5kb25lKSB7XG4gICAgICAgIC8vIFRPRE86IOWujOaIkOWkhOeQhlxuICAgICAgICBfdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgX3RoaXMuc3RhdHVzID0gMDtcbiAgICAgICAgX3RoaXMuZW1pdChMT0FERVJfRVZFTlRTLkxPQURFUl9DT01QTEVURSwgYnVmZmVyKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLl9jYW5jZWxlZCB8fCBfdGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIGlmICAoX3RoaXMuX3JlYWRlcikge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfdGhpcy5fcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gRE8gTk9USElOR1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGJ1ZmZlci5wdXNoKHZhbC52YWx1ZSlcbiAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfREFUQUxPQURFRCwgYnVmZmVyKVxuICAgICAgcmV0dXJuIF90aGlzLl9vblJlYWRlcihyZWFkZXIsIHRhc2tubylcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIF90aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIF90aGlzLmVtaXQoTE9BREVSX0VWRU5UUy5MT0FERVJfRVJST1IsIF90aGlzLlRBRywgZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuICBnZXRQYXJhbXMgKG9wdHMpIHtcbiAgICBsZXQgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG5cbiAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBjYWNoZTogJ2RlZmF1bHQnXG4gICAgfVxuXG4gICAgLy8gYWRkIGN1c3Rtb3IgaGVhZGVyc1xuICAgIC8vIOa3u+WKoOiHquWumuS5ieWktFxuICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWdzLmhlYWRlcnMgPT09ICdvYmplY3QnKSB7XG4gICAgICBsZXQgY29uZmlnSGVhZGVycyA9IHRoaXMuY29uZmlncy5oZWFkZXJzXG4gICAgICBmb3IgKGxldCBrZXkgaW4gY29uZmlnSGVhZGVycykge1xuICAgICAgICBpZiAoY29uZmlnSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCBjb25maWdIZWFkZXJzW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMuaGVhZGVycyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGxldCBvcHRIZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzXG4gICAgICBmb3IgKGxldCBrZXkgaW4gb3B0SGVhZGVycykge1xuICAgICAgICBpZiAob3B0SGVhZGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaGVhZGVycy5hcHBlbmQoa2V5LCBvcHRIZWFkZXJzW2tleV0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jb3JzID09PSBmYWxzZSkge1xuICAgICAgcGFyYW1zLm1vZGUgPSAnc2FtZS1vcmlnaW4nXG4gICAgfVxuXG4gICAgLy8gd2l0aENyZWRlbnRpYWxzIGlzIGRpc2FibGVkIGJ5IGRlZmF1bHRcbiAgICAvLyB3aXRoQ3JlZGVudGlhbHMg5Zyo6buY6K6k5oOF5Ya15LiL5LiN6KKr5L2/55So44CCXG4gICAgaWYgKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICBwYXJhbXMuY3JlZGVudGlhbHMgPSAnaW5jbHVkZSdcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBBZGQgcmFuZ2VzO1xuICAgIHJldHVybiBwYXJhbXM7XG4gIH1cblxuICBjYW5jZWwgKCkge1xuICAgIGlmICh0aGlzLl9yZWFkZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3JlYWRlci5jYW5jZWwoKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyDpmLLmraJmYWlsZWQ6IDIwMOmUmeivr+iiq+aJk+WNsOWIsOaOp+WItuWPsOS4ilxuICAgICAgfVxuICAgICAgdGhpcy5fcmVhZGVyID0gbnVsbFxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgIHRoaXMuX2NhbmNlbGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlXG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZXRjaExvYWRlclxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1wNFJlbXV4ZXI6IHJlcXVpcmUoJy4vc3JjL21wNCcpLmRlZmF1bHRcbn07XG4iLCJpbXBvcnQgeyBCdWZmZXIgfSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5cbi8vIGNvbnN0IFVJTlQzMl9NQVggPSBNYXRoLnBvdygyLCAzMikgLSAxO1xuY2xhc3MgRm1wNCB7XG4gIHN0YXRpYyBzaXplICh2YWx1ZSkge1xuICAgIHJldHVybiBCdWZmZXIud3JpdGVVaW50MzIodmFsdWUpXG4gIH1cbiAgc3RhdGljIGluaXRCb3ggKHNpemUsIG5hbWUsIC4uLmNvbnRlbnQpIHtcbiAgICBjb25zdCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKHNpemUpLCBGbXA0LnR5cGUobmFtZSksIC4uLmNvbnRlbnQpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgZXh0ZW5zaW9uICh2ZXJzaW9uLCBmbGFnKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIHZlcnNpb24sXG4gICAgICAoZmxhZyA+PiAxNikgJiAweGZmLFxuICAgICAgKGZsYWcgPj4gOCkgJiAweGZmLFxuICAgICAgZmxhZyAmIDB4ZmZcbiAgICBdKVxuICB9XG4gIHN0YXRpYyBmdHlwICgpIHtcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDI0LCAnZnR5cCcsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4NjksIDB4NzMsIDB4NkYsIDB4NkQsIC8vIGlzb20sXG4gICAgICAweDAsIDB4MCwgMHgwMCwgMHgwMSwgLy8gbWlub3JfdmVyc2lvbjogMHgwMVxuICAgICAgMHg2OSwgMHg3MywgMHg2RiwgMHg2RCwgLy8gaXNvbVxuICAgICAgMHg2MSwgMHg3NiwgMHg2MywgMHgzMSAvLyBhdmMxXG4gICAgXSkpXG4gIH1cbiAgc3RhdGljIG1vb3YgKHsgdHlwZSwgbWV0YSB9KSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IG12aGQgPSBGbXA0Lm12aGQobWV0YS5kdXJhdGlvbiwgbWV0YS50aW1lc2NhbGUpXG4gICAgbGV0IHRyYWtcblxuICAgIGlmICh0eXBlID09PSAndmlkZW8nKSB7XG4gICAgICB0cmFrID0gRm1wNC52aWRlb1RyYWsobWV0YSlcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhayA9IEZtcDQuYXVkaW9UcmFrKG1ldGEpXG4gICAgfVxuXG4gICAgbGV0IG12ZXggPSBGbXA0Lm12ZXgobWV0YS5kdXJhdGlvbiwgbWV0YS50aW1lc2NhbGUgfHwgMTAwMCwgbWV0YS5pZCk7XG4gICAgW212aGQsIHRyYWssIG12ZXhdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAnbW9vdicsIG12aGQsIHRyYWssIG12ZXgpXG4gIH1cbiAgc3RhdGljIG12aGQgKGR1cmF0aW9uLCB0aW1lc2NhbGUgPSAxMDAwKSB7XG4gICAgLy8gZHVyYXRpb24gKj0gdGltZXNjYWxlO1xuICAgIGxldCBieXRlcyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHZlcnNpb24oMCkgKyBmbGFncyAgICAgMeS9jeeahGJveOeJiOacrCsz5L2NZmxhZ3MgICBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvIlcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWUgICAg5Yib5bu65pe26Ze0ICDvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb25fdGltZSAgIOS/ruaUueaXtumXtFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIHRpbWVzY2FsZTogNCBieXRlc+aWh+S7tuWqkuS9k+WcqDHnp5Lml7bpl7TlhoXnmoTliLvluqblgLzvvIzlj6/ku6XnkIbop6PkuLox56eS6ZW/5bqmXG4gICAgICAgICAgICAgKi9cbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsXG4gICAgICAodGltZXNjYWxlID4+PiAxNikgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgKHRpbWVzY2FsZSkgJiAweEZGLFxuXG4gICAgICAvKipcbiAgICAgICAgICAgICAqIGR1cmF0aW9uOiA0IGJ5dGVz6K+ldHJhY2vnmoTml7bpl7Tplb/luqbvvIznlKhkdXJhdGlvbuWSjHRpbWUgc2NhbGXlgLzlj6/ku6XorqHnrpd0cmFja+aXtumVv++8jOavlOWmgmF1ZGlvIHRyYWNr55qEdGltZSBzY2FsZSA9IDgwMDAsXG4gICAgICAgICAgICAgKiBkdXJhdGlvbiA9IDU2MDEyOO+8jOaXtumVv+S4ujcwLjAxNu+8jHZpZGVvIHRyYWNr55qEdGltZSBzY2FsZSA9IDYwMCwgZHVyYXRpb24gPSA0MjAwMO+8jOaXtumVv+S4ujcwXG4gICAgICAgICAgICAgKi9cbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gOCkgJiAweEZGLFxuICAgICAgKGR1cmF0aW9uKSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAwLCAvLyBQcmVmZXJyZWQgcmF0ZTogMS4wICAg5o6o6I2Q5pKt5pS+6YCf546H77yM6auYMTbkvY3lkozkvY4xNuS9jeWIhuWIq+S4uuWwj+aVsOeCueaVtOaVsOmDqOWIhuWSjOWwj+aVsOmDqOWIhu+8jOWNs1sxNi4xNl0g5qC85byP77yM6K+l5YC85Li6MS4w77yIMHgwMDAxMDAwMO+8ieihqOekuuato+W4uOWJjeWQkeaSreaUvlxuICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcmVmZXJyZWRWb2x1bWUoMS4wLCAyYnl0ZXMpICsgcmVzZXJ2ZWQoMmJ5dGVzKVxuICAgICAgICAgICAgICog5LiOcmF0Zeexu+S8vO+8jFs4LjhdIOagvOW8j++8jDEuMO+8iDB4MDEwMO+8ieihqOekuuacgOWkp+mfs+mHj1xuICAgICAgICAgICAgICovXG4gICAgICAweDAxLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gIHJlc2VydmVkOiA0ICsgNCBieXRlc+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIC0tLS1iZWdpbiBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8g6KeG6aKR5Y+Y5o2i55+p6Zi1ICAg57q/5oCn5Luj5pWwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4NDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIC0tLS1lbmQgY29tcG9zaXRpb24gbWF0cml4LS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZS1kZWZpbmVkIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyAtLS0tZW5kIHByZV9kZWZpbmVkIDYgKiA0IGJ5dGVzLS0tLVxuICAgICAgMHhGRiwgMHhGRiwgMHhGRiwgMHhGRiAvLyBuZXh0X3RyYWNrX0lEIOS4i+S4gOS4qnRyYWNr5L2/55So55qEaWTlj7dcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goOCArIGJ5dGVzLmxlbmd0aCwgJ212aGQnLCBuZXcgVWludDhBcnJheShieXRlcykpXG4gIH1cbiAgc3RhdGljIHZpZGVvVHJhayAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuXG4gICAgbGV0IHRraGQgPSBGbXA0LnRraGQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBkdXJhdGlvbjogZGF0YS5kdXJhdGlvbixcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUgfHwgMTAwMCxcbiAgICAgIHdpZHRoOiBkYXRhLnByZXNlbnRXaWR0aCxcbiAgICAgIGhlaWdodDogZGF0YS5wcmVzZW50SGVpZ2h0LFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH0pXG4gICAgbGV0IG1kaWEgPSBGbXA0Lm1kaWEoe1xuICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgIHRpbWVzY2FsZTogZGF0YS50aW1lc2NhbGUgfHwgMTAwMCxcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgYXZjYzogZGF0YS5hdmNjLFxuICAgICAgcGFyUmF0aW86IGRhdGEucGFyUmF0aW8sXG4gICAgICB3aWR0aDogZGF0YS5wcmVzZW50V2lkdGgsXG4gICAgICBoZWlnaHQ6IGRhdGEucHJlc2VudEhlaWdodFxuICAgIH0pO1xuICAgIFt0a2hkLCBtZGlhXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ3RyYWsnLCB0a2hkLCBtZGlhKVxuICB9XG4gIHN0YXRpYyBhdWRpb1RyYWsgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgdGtoZCA9IEZtcDQudGtoZCh7XG4gICAgICBpZDogMixcbiAgICAgIGR1cmF0aW9uOiBkYXRhLmR1cmF0aW9uLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSB8fCAxMDAwLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICB0eXBlOiAnYXVkaW8nXG4gICAgfSlcbiAgICBsZXQgbWRpYSA9IEZtcDQubWRpYSh7XG4gICAgICB0eXBlOiAnYXVkaW8nLFxuICAgICAgdGltZXNjYWxlOiBkYXRhLnRpbWVzY2FsZSB8fCAxMDAwLFxuICAgICAgZHVyYXRpb246IGRhdGEuZHVyYXRpb24sXG4gICAgICBjaGFubmVsQ291bnQ6IGRhdGEuY2hhbm5lbENvdW50LFxuICAgICAgc2FtcGxlcmF0ZTogZGF0YS5zYW1wbGVSYXRlLFxuICAgICAgY29uZmlnOiBkYXRhLmNvbmZpZ1xuICAgIH0pO1xuICAgIFt0a2hkLCBtZGlhXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ3RyYWsnLCB0a2hkLCBtZGlhKVxuICB9XG4gIHN0YXRpYyB0a2hkIChkYXRhKSB7XG4gICAgbGV0IGlkID0gZGF0YS5pZFxuICAgIGxldCBkdXJhdGlvbiA9IGRhdGEuZHVyYXRpb25cbiAgICBsZXQgd2lkdGggPSBkYXRhLndpZHRoXG4gICAgbGV0IGhlaWdodCA9IGRhdGEuaGVpZ2h0XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDA3LCAvLyB2ZXJzaW9uKDApICsgZmxhZ3MgMeS9jeeJiOacrCBib3jniYjmnKzvvIww5oiWMe+8jOS4gOiIrOS4ujDjgILvvIjku6XkuIvlrZfoioLmlbDlnYfmjIl2ZXJzaW9uPTDvvInmjInkvY3miJbmk43kvZznu5PmnpzlgLzvvIzpooTlrprkuYnlpoLkuIvvvJpcbiAgICAgIC8vIDB4MDAwMDAxIHRyYWNrX2VuYWJsZWTvvIzlkKbliJnor6V0cmFja+S4jeiiq+aSreaUvu+8m1xuICAgICAgLy8gMHgwMDAwMDIgdHJhY2tfaW5fbW92aWXvvIzooajnpLror6V0cmFja+WcqOaSreaUvuS4reiiq+W8leeUqO+8m1xuICAgICAgLy8gMHgwMDAwMDQgdHJhY2tfaW5fcHJldmlld++8jOihqOekuuivpXRyYWNr5Zyo6aKE6KeI5pe26KKr5byV55So44CCXG4gICAgICAvLyDkuIDoiKzor6XlgLzkuLo377yMMSsyKzQg5aaC5p6c5LiA5Liq5aqS5L2T5omA5pyJdHJhY2vlnYfmnKrorr7nva50cmFja19pbl9tb3ZpZeWSjHRyYWNrX2luX3ByZXZpZXfvvIzlsIbooqvnkIbop6PkuLrmiYDmnIl0cmFja+Wdh+iuvue9ruS6hui/meS4pOmhue+8m+WvueS6jmhpbnQgdHJhY2vvvIzor6XlgLzkuLowXG4gICAgICAvLyBoaW50IHRyYWNrIOi/meS4queJueauiueahHRyYWNr5bm25LiN5YyF5ZCr5aqS5L2T5pWw5o2u77yM6ICM5piv5YyF5ZCr5LqG5LiA5Lqb5bCG5YW25LuW5pWw5o2udHJhY2vmiZPljIXmiJDmtYHlqpLkvZPnmoTmjIfnpLrkv6Hmga/jgIJcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGNyZWF0aW9uX3RpbWXliJvlu7rml7bpl7TvvIjnm7jlr7nkuo5VVEPml7bpl7QxOTA0LTAxLTAx6Zu254K555qE56eS5pWw77yJXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBtb2RpZmljYXRpb24gdGltZSDkv67mlLnml7bpl7RcbiAgICAgIChpZCA+Pj4gMjQpICYgMHhGRiwgLy8gdHJhY2tfSUQ6IDQgYnl0ZXMgaWTlj7fvvIzkuI3og73ph43lpI3kuJTkuI3og73kuLowXG4gICAgICAoaWQgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoaWQgPj4+IDgpICYgMHhGRixcbiAgICAgIChpZCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDQgYnl0ZXMgICAg5L+d55WZ5L2NXG4gICAgICAoZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIGR1cmF0aW9uOiA0IGJ5dGVzIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQ6IDIgKiA0IGJ5dGVzICAgIOS/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGxheWVyKDJieXRlcykgKyBhbHRlcm5hdGVfZ3JvdXAoMmJ5dGVzKSAg6KeG6aKR5bGC77yM6buY6K6k5Li6MO+8jOWAvOWwj+eahOWcqOS4iuWxgi50cmFja+WIhue7hOS/oeaBr++8jOm7mOiupOS4ujDooajnpLror6V0cmFja+acquS4juWFtuS7lnRyYWNr5pyJ576k57uE5YWz57O7XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyB2b2x1bWUoMmJ5dGVzKSArIHJlc2VydmVkKDJieXRlcykgICAgWzguOF0g5qC85byP77yM5aaC5p6c5Li66Z+z6aKRdHJhY2vvvIwxLjDvvIgweDAxMDDvvInooajnpLrmnIDlpKfpn7Pph4/vvJvlkKbliJnkuLowICAgK+S/neeVmeS9jVxuICAgICAgMHgwMCwgMHgwMSwgMHgwMCwgMHgwMCwgLy8gLS0tLWJlZ2luIGNvbXBvc2l0aW9uIG1hdHJpeC0tLS1cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDEsIDB4MDAsIDB4MDAsIC8vIOinhumikeWPmOaNouefqemYtVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHg0MCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gLS0tLWVuZCBjb21wb3NpdGlvbiBtYXRyaXgtLS0tXG4gICAgICAod2lkdGggPj4+IDgpICYgMHhGRiwgLy8gLy/lrr3luqZcbiAgICAgICh3aWR0aCkgJiAweEZGLFxuICAgICAgMHgwMCwgMHgwMCxcbiAgICAgIChoZWlnaHQgPj4+IDgpICYgMHhGRiwgLy8g6auY5bqmXG4gICAgICAoaGVpZ2h0KSAmIDB4RkYsXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0a2hkJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgZWR0cyAoZGF0YSkge1xuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZHVyYXRpb24gPSBkYXRhLmR1cmF0aW9uXG4gICAgbGV0IG1lZGlhVGltZSA9IGRhdGEubWVkaWFUaW1lXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgzNiksIEZtcDQudHlwZSgnZWR0cycpKVxuICAgIC8vIGVsc3RcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDI4KSwgRm1wNC50eXBlKCdlbHN0JykpXG4gICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5IGNvdW50XG4gICAgICAoZHVyYXRpb24gPj4gMjQpICYgMHhmZiwgKGR1cmF0aW9uID4+IDE2KSAmIDB4ZmYsIChkdXJhdGlvbiA+PiA4KSAmIDB4ZmYsIGR1cmF0aW9uICYgMHhmZixcbiAgICAgIChtZWRpYVRpbWUgPj4gMjQpICYgMHhmZiwgKG1lZGlhVGltZSA+PiAxNikgJiAweGZmLCAobWVkaWFUaW1lID4+IDgpICYgMHhmZiwgbWVkaWFUaW1lICYgMHhmZixcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEgLy8gbWVkaWEgcmF0ZVxuICAgIF0pKVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIG1kaWEgKGRhdGEpIHtcbiAgICBsZXQgc2l6ZSA9IDhcbiAgICBsZXQgbWRoZCA9IEZtcDQubWRoZChkYXRhLnRpbWVzY2FsZSwgZGF0YS5kdXJhdGlvbilcbiAgICBsZXQgaGRsciA9IEZtcDQuaGRscihkYXRhLnR5cGUpXG4gICAgbGV0IG1pbmYgPSBGbXA0Lm1pbmYoZGF0YSk7XG4gICAgW21kaGQsIGhkbHIsIG1pbmZdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAnbWRpYScsIG1kaGQsIGhkbHIsIG1pbmYpXG4gIH1cbiAgc3RhdGljIG1kaGQgKHRpbWVzY2FsZSA9IDEwMDAsIGR1cmF0aW9uKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBjcmVhdGlvbl90aW1lICAgIOWIm+W7uuaXtumXtFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbW9kaWZpY2F0aW9uX3RpbWXkv67mlLnml7bpl7RcbiAgICAgICh0aW1lc2NhbGUgPj4+IDI0KSAmIDB4RkYsIC8vIHRpbWVzY2FsZTogNCBieXRlcyAgICDmlofku7blqpLkvZPlnKgx56eS5pe26Ze05YaF55qE5Yi75bqm5YC877yM5Y+v5Lul55CG6Kej5Li6MeenkumVv+W6plxuICAgICAgKHRpbWVzY2FsZSA+Pj4gMTYpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUgPj4+IDgpICYgMHhGRixcbiAgICAgICh0aW1lc2NhbGUpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbiA+Pj4gMjQpICYgMHhGRiwgLy8gZHVyYXRpb246IDQgYnl0ZXMgIHRyYWNr55qE5pe26Ze06ZW/5bqmXG4gICAgICAoZHVyYXRpb24gPj4+IDE2KSAmIDB4RkYsXG4gICAgICAoZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgIChkdXJhdGlvbikgJiAweEZGLFxuICAgICAgMHg1NSwgMHhDNCwgLy8gbGFuZ3VhZ2U6IHVuZCAodW5kZXRlcm1pbmVkKSDlqpLkvZPor63oqIDnoIHjgILmnIDpq5jkvY3kuLow77yM5ZCO6Z2iMTXkvY3kuLoz5Liq5a2X56ym77yI6KeBSVNPIDYzOS0yL1TmoIflh4bkuK3lrprkuYnvvIlcbiAgICAgIDB4MDAsIDB4MDAgLy8gcHJlX2RlZmluZWQgPSAwXG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDEyICsgY29udGVudC5ieXRlTGVuZ3RoLCAnbWRoZCcsIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBoZGxyICh0eXBlKSB7XG4gICAgbGV0IHZhbHVlID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHByZV9kZWZpbmVkXG4gICAgICAweDc2LCAweDY5LCAweDY0LCAweDY1LCAvLyBoYW5kbGVyX3R5cGU6ICd2aWRlJ1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHg1NiwgMHg2OSwgMHg2NCwgMHg2NSxcbiAgICAgIDB4NmYsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAweDY0LCAweDZjLCAweDY1LCAweDcyLCAweDAwIC8vIG5hbWU6ICdWaWRlb0hhbmRsZXInXG4gICAgXVxuICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICB2YWx1ZS5zcGxpY2UoOCwgNCwgLi4uWzB4NzMsIDB4NmYsIDB4NzUsIDB4NmVdKVxuICAgICAgdmFsdWUuc3BsaWNlKDI0LCAxMywgLi4uWzB4NTMsIDB4NmYsIDB4NzUsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NDgsIDB4NjEsIDB4NmUsXG4gICAgICAgIDB4NjQsIDB4NmMsIDB4NjUsIDB4NzIsIDB4MDBdKVxuICAgIH1cbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyB2YWx1ZS5sZW5ndGgsICdoZGxyJywgbmV3IFVpbnQ4QXJyYXkodmFsdWUpKVxuICB9XG4gIHN0YXRpYyBtaW5mIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHZtaGQgPSBkYXRhLnR5cGUgPT09ICd2aWRlbycgPyBGbXA0LnZtaGQoKSA6IEZtcDQuc21oZCgpXG4gICAgbGV0IGRpbmYgPSBGbXA0LmRpbmYoKVxuICAgIGxldCBzdGJsID0gRm1wNC5zdGJsKGRhdGEpO1xuICAgIFt2bWhkLCBkaW5mLCBzdGJsXS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgc2l6ZSArPSBpdGVtLmJ5dGVMZW5ndGhcbiAgICB9KVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goc2l6ZSwgJ21pbmYnLCB2bWhkLCBkaW5mLCBzdGJsKVxuICB9XG4gIHN0YXRpYyB2bWhkICgpIHtcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDIwLCAndm1oZCcsIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAvLyBncmFwaGljc21vZGVcbiAgICAgIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCAvLyBvcGNvbG9yXG4gICAgXSkpXG4gIH1cbiAgc3RhdGljIHNtaGQgKCkge1xuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICdzbWhkJywgbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIC8vIGJhbGFuY2VcbiAgICAgIDB4MDAsIDB4MDAgLy8gcmVzZXJ2ZWRcbiAgICBdKSlcbiAgfVxuICBzdGF0aWMgZGluZiAoKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBkcmVmID0gWzB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDEsIC8vIGVudHJ5X2NvdW50XG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDBjLCAvLyBlbnRyeV9zaXplXG4gICAgICAweDc1LCAweDcyLCAweDZjLCAweDIwLCAvLyAndXJsJyB0eXBlXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uIDBcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDEgLy8gZW50cnlfZmxhZ3NcbiAgICBdXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgzNiksIEZtcDQudHlwZSgnZGluZicpLCBGbXA0LnNpemUoMjgpLCBGbXA0LnR5cGUoJ2RyZWYnKSwgbmV3IFVpbnQ4QXJyYXkoZHJlZikpXG4gICAgcmV0dXJuIGJ1ZmZlci5idWZmZXJcbiAgfVxuICBzdGF0aWMgc3RibCAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBzdHNkID0gRm1wNC5zdHNkKGRhdGEpXG4gICAgbGV0IHN0dHMgPSBGbXA0LnN0dHMoKVxuICAgIGxldCBzdHNjID0gRm1wNC5zdHNjKClcbiAgICBsZXQgc3RzeiA9IEZtcDQuc3RzeigpXG4gICAgbGV0IHN0Y28gPSBGbXA0LnN0Y28oKTtcbiAgICBbc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3Rjb10uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICdzdGJsJywgc3RzZCwgc3R0cywgc3RzYywgc3Rzeiwgc3RjbylcbiAgfVxuICBzdGF0aWMgc3RzZCAoZGF0YSkge1xuICAgIGxldCBjb250ZW50XG4gICAgaWYgKGRhdGEudHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgLy8gaWYgKCFkYXRhLmlzQUFDICYmIGRhdGEuY29kZWMgPT09ICdtcDQnKSB7XG4gICAgICAvLyAgICAgY29udGVudCA9IEZNUDQubXAzKGRhdGEpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vXG4gICAgICAvLyB9XG4gICAgICAvLyDmlK/mjIFtcDRhXG4gICAgICBjb250ZW50ID0gRm1wNC5tcDRhKGRhdGEpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnQgPSBGbXA0LmF2YzEoZGF0YSlcbiAgICB9XG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiArIGNvbnRlbnQuYnl0ZUxlbmd0aCwgJ3N0c2QnLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgbmV3IFVpbnQ4QXJyYXkoWzB4MDAsIDB4MDAsIDB4MDAsIDB4MDFdKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgbXA0YSAoZGF0YSkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCAweDAxLCAvLyBkYXRhX3JlZmVyZW5jZV9pbmRleFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIHJlc2VydmVkXG4gICAgICAweDAwLCBkYXRhLmNoYW5uZWxDb3VudCwgLy8gY2hhbm5lbGNvdW50XG4gICAgICAweDAwLCAweDEwLCAvLyBzYW1wbGVTaXplOjE2Yml0c1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWQyXG4gICAgICAoZGF0YS5zYW1wbGVyYXRlID4+IDgpICYgMHhmZixcbiAgICAgIGRhdGEuc2FtcGxlcmF0ZSAmIDB4ZmYsIC8vXG4gICAgICAweDAwLCAweDAwXG4gICAgXSlcbiAgICBsZXQgZXNkcyA9IEZtcDQuZXNkcyhkYXRhLmNvbmZpZylcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGggKyBlc2RzLmJ5dGVMZW5ndGgsICdtcDRhJywgY29udGVudCwgZXNkcylcbiAgfVxuICBzdGF0aWMgZXNkcyAoY29uZmlnID0gWzQzLCAxNDYsIDgsIDBdKSB7XG4gICAgY29uc3QgY29uZmlnbGVuID0gY29uZmlnLmxlbmd0aFxuICAgIGxldCBidWZmZXIgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb24gMFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcblxuICAgICAgMHgwMywgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDE3ICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGVzX2lkXG4gICAgICAweDAwLCAvLyBzdHJlYW1fcHJpb3JpdHlcblxuICAgICAgMHgwNCwgLy8gZGVzY3JpcHRvcl90eXBlXG4gICAgICAweDBmICsgY29uZmlnbGVuLCAvLyBsZW5ndGhcbiAgICAgIDB4NDAsIC8vIGNvZGVjIDogbXBlZzRfYXVkaW9cbiAgICAgIDB4MTUsIC8vIHN0cmVhbV90eXBlXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBidWZmZXJfc2l6ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gbWF4Qml0cmF0ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gYXZnQml0cmF0ZVxuXG4gICAgICAweDA1IC8vIGRlc2NyaXB0b3JfdHlwZVxuICAgIF0uY29uY2F0KFtjb25maWdsZW5dKS5jb25jYXQoY29uZmlnKS5jb25jYXQoWzB4MDYsIDB4MDEsIDB4MDJdKSlcbiAgICBidWZmZXIud3JpdGUoRm1wNC5zaXplKDggKyBjb250ZW50LmJ5dGVMZW5ndGgpLCBGbXA0LnR5cGUoJ2VzZHMnKSwgY29udGVudClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBhdmMxIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzaXplID0gNDAvLyA4KGF2YzEpKzgoYXZjYykrOChidHJ0KSsxNihwYXNwKVxuICAgIC8vIGxldCBzcHMgPSBkYXRhLnNwc1xuICAgIC8vIGxldCBwcHMgPSBkYXRhLnBwc1xuICAgIGxldCB3aWR0aCA9IGRhdGEud2lkdGhcbiAgICBsZXQgaGVpZ2h0ID0gZGF0YS5oZWlnaHRcbiAgICBsZXQgaFNwYWNpbmcgPSBkYXRhLnBhclJhdGlvLmhlaWdodFxuICAgIGxldCB2U3BhY2luZyA9IGRhdGEucGFyUmF0aW8ud2lkdGhcbiAgICAvLyBsZXQgYXZjY0J1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIC8vIGF2Y2NCdWZmZXIud3JpdGUobmV3IFVpbnQ4QXJyYXkoW1xuICAgIC8vICAgMHgwMSwgLy8gdmVyc2lvblxuICAgIC8vICAgc3BzWzFdLCAvLyBwcm9maWxlXG4gICAgLy8gICBzcHNbMl0sIC8vIHByb2ZpbGUgY29tcGF0aWJsZVxuICAgIC8vICAgc3BzWzNdLCAvLyBsZXZlbFxuICAgIC8vICAgMHhmYyB8IDMsXG4gICAgLy8gICAweEUwIHwgMSAvLyDnm67liY3lj6rlpITnkIbkuIDkuKpzcHNcbiAgICAvLyBdLmNvbmNhdChbc3BzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHNwcy5sZW5ndGggJiAweGZmXSkpKVxuICAgIC8vIGF2Y2NCdWZmZXIud3JpdGUoc3BzLCBuZXcgVWludDhBcnJheShbMSwgcHBzLmxlbmd0aCA+Pj4gOCAmIDB4ZmYsIHBwcy5sZW5ndGggJiAweGZmXSksIHBwcylcblxuICAgIGxldCBhdmNjID0gZGF0YS5hdmNjXG4gICAgbGV0IGF2YzEgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyByZXNlcnZlZFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGRhdGFfcmVmZXJlbmNlX2luZGV4XG4gICAgICAweDAwLCAweDAwLCAvLyBwcmVfZGVmaW5lZFxuICAgICAgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcHJlX2RlZmluZWRcbiAgICAgICh3aWR0aCA+PiA4KSAmIDB4ZmYsXG4gICAgICB3aWR0aCAmIDB4ZmYsIC8vIHdpZHRoXG4gICAgICAoaGVpZ2h0ID4+IDgpICYgMHhmZixcbiAgICAgIGhlaWdodCAmIDB4ZmYsIC8vIGhlaWdodFxuICAgICAgMHgwMCwgMHg0OCwgMHgwMCwgMHgwMCwgLy8gaG9yaXpyZXNvbHV0aW9uXG4gICAgICAweDAwLCAweDQ4LCAweDAwLCAweDAwLCAvLyB2ZXJ0cmVzb2x1dGlvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCwgLy8gcmVzZXJ2ZWRcbiAgICAgIDB4MDAsIDB4MDEsIC8vIGZyYW1lX2NvdW50XG4gICAgICAweDEyLFxuICAgICAgMHg2NCwgMHg2MSwgMHg2OSwgMHg2QywgLy8gZGFpbHltb3Rpb24vaGxzLmpzXG4gICAgICAweDc5LCAweDZELCAweDZGLCAweDc0LFxuICAgICAgMHg2OSwgMHg2RiwgMHg2RSwgMHgyRixcbiAgICAgIDB4NjgsIDB4NkMsIDB4NzMsIDB4MkUsXG4gICAgICAweDZBLCAweDczLCAweDAwLCAweDAwLFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCxcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBjb21wcmVzc29ybmFtZVxuICAgICAgMHgwMCwgMHgxOCwgLy8gZGVwdGggPSAyNFxuICAgICAgMHgxMSwgMHgxMV0pIC8vIHByZV9kZWZpbmVkID0gLTFcbiAgICBsZXQgYnRydCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIDB4MWMsIDB4OWMsIDB4ODAsIC8vIGJ1ZmZlclNpemVEQlxuICAgICAgMHgwMCwgMHgyZCwgMHhjNiwgMHhjMCwgLy8gbWF4Qml0cmF0ZVxuICAgICAgMHgwMCwgMHgyZCwgMHhjNiwgMHhjMCAvLyBhdmdCaXRyYXRlXG4gICAgXSlcbiAgICBsZXQgcGFzcCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIChoU3BhY2luZyA+PiAyNCksIC8vIGhTcGFjaW5nXG4gICAgICAoaFNwYWNpbmcgPj4gMTYpICYgMHhmZixcbiAgICAgIChoU3BhY2luZyA+PiA4KSAmIDB4ZmYsXG4gICAgICBoU3BhY2luZyAmIDB4ZmYsXG4gICAgICAodlNwYWNpbmcgPj4gMjQpLCAvLyB2U3BhY2luZ1xuICAgICAgKHZTcGFjaW5nID4+IDE2KSAmIDB4ZmYsXG4gICAgICAodlNwYWNpbmcgPj4gOCkgJiAweGZmLFxuICAgICAgdlNwYWNpbmcgJiAweGZmXG4gICAgXSlcblxuICAgIGJ1ZmZlci53cml0ZShcbiAgICAgIEZtcDQuc2l6ZShzaXplICsgYXZjMS5ieXRlTGVuZ3RoICsgYXZjYy5ieXRlTGVuZ3RoICsgYnRydC5ieXRlTGVuZ3RoKSwgRm1wNC50eXBlKCdhdmMxJyksIGF2YzEsXG4gICAgICBGbXA0LnNpemUoOCArIGF2Y2MuYnl0ZUxlbmd0aCksIEZtcDQudHlwZSgnYXZjQycpLCBhdmNjLFxuICAgICAgRm1wNC5zaXplKDIwKSwgRm1wNC50eXBlKCdidHJ0JyksIGJ0cnQsXG4gICAgICBGbXA0LnNpemUoMTYpLCBGbXA0LnR5cGUoJ3Bhc3AnKSwgcGFzcFxuICAgIClcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBzdHRzICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwIC8vIGVudHJ5X2NvdW50XG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAnc3R0cycsIGNvbnRlbnQpXG4gIH1cbiAgc3RhdGljIHN0c2MgKCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvblxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgLy8gZmxhZ3NcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAgLy8gZW50cnlfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICdzdHNjJywgY29udGVudClcbiAgfVxuICBzdGF0aWMgc3RjbyAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAweDAwLCAvLyB2ZXJzaW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBlbnRyeV9jb3VudFxuICAgIF0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3N0Y28nLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyBzdHN6ICgpIHtcbiAgICBsZXQgY29udGVudCA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgIDB4MDAsIC8vIHZlcnNpb25cbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGZsYWdzXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBzYW1wbGVfc2l6ZVxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMCAvLyBzYW1wbGVfY291bnRcbiAgICBdKVxuICAgIHJldHVybiBGbXA0LmluaXRCb3goMjAsICdzdHN6JywgY29udGVudClcbiAgfVxuICBzdGF0aWMgbXZleCAoZHVyYXRpb24sIHRpbWVzY2FsZSA9IDEwMDAsIHRyYWNrSUQpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IG1laGQgPSBCdWZmZXIud3JpdGVVaW50MzIoZHVyYXRpb24pXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSg1NiksIEZtcDQudHlwZSgnbXZleCcpLCBGbXA0LnNpemUoMTYpLCBGbXA0LnR5cGUoJ21laGQnKSwgRm1wNC5leHRlbnNpb24oMCwgMCksIG1laGQsIEZtcDQudHJleCh0cmFja0lEKSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyB0cmV4IChpZCkge1xuICAgIGxldCBjb250ZW50ID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgMHgwMCwgLy8gdmVyc2lvbiAwXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAvLyBmbGFnc1xuICAgICAgKGlkID4+IDI0KSxcbiAgICAgIChpZCA+PiAxNikgJiAweGZmLFxuICAgICAgKGlkID4+IDgpICYgMHhmZixcbiAgICAgIChpZCAmIDB4ZmYpLCAvLyB0cmFja19JRFxuICAgICAgMHgwMCwgMHgwMCwgMHgwMCwgMHgwMSwgLy8gZGVmYXVsdF9zYW1wbGVfZGVzY3JpcHRpb25faW5kZXhcbiAgICAgIDB4MDAsIDB4MDAsIDB4MDAsIDB4MDAsIC8vIGRlZmF1bHRfc2FtcGxlX2R1cmF0aW9uXG4gICAgICAweDAwLCAweDAwLCAweDAwLCAweDAwLCAvLyBkZWZhdWx0X3NhbXBsZV9zaXplXG4gICAgICAweDAwLCAweDAxLCAweDAwLCAweDAxIC8vIGRlZmF1bHRfc2FtcGxlX2ZsYWdzXG4gICAgXSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDggKyBjb250ZW50LmJ5dGVMZW5ndGgsICd0cmV4JywgY29udGVudClcbiAgfVxuICBzdGF0aWMgbW9vZiAoZGF0YSkge1xuICAgIGxldCBzaXplID0gOFxuICAgIGxldCBtZmhkID0gRm1wNC5tZmhkKClcbiAgICBsZXQgdHJhZiA9IEZtcDQudHJhZihkYXRhKTtcbiAgICBbbWZoZCwgdHJhZl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIHNpemUgKz0gaXRlbS5ieXRlTGVuZ3RoXG4gICAgfSlcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KHNpemUsICdtb29mJywgbWZoZCwgdHJhZilcbiAgfVxuICBzdGF0aWMgbWZoZCAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBCdWZmZXIud3JpdGVVaW50MzIoRm1wNC5zZXF1ZW5jZSlcbiAgICBGbXA0LnNlcXVlbmNlICs9IDFcbiAgICByZXR1cm4gRm1wNC5pbml0Qm94KDE2LCAnbWZoZCcsIEZtcDQuZXh0ZW5zaW9uKDAsIDApLCBjb250ZW50KVxuICB9XG4gIHN0YXRpYyB0cmFmIChkYXRhKSB7XG4gICAgbGV0IHNpemUgPSA4XG4gICAgbGV0IHRmaGQgPSBGbXA0LnRmaGQoZGF0YS5pZClcbiAgICBsZXQgdGZkdCA9IEZtcDQudGZkdChkYXRhLnRpbWUpXG4gICAgbGV0IHNkdHAgPSBGbXA0LnNkdHAoZGF0YSlcbiAgICBsZXQgdHJ1biA9IEZtcDQudHJ1bihkYXRhLCBzZHRwLmJ5dGVMZW5ndGgpO1xuXG4gICAgW3RmaGQsIHRmZHQsIHRydW4sIHNkdHBdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uYnl0ZUxlbmd0aFxuICAgIH0pXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveChzaXplLCAndHJhZicsIHRmaGQsIHRmZHQsIHRydW4sIHNkdHApXG4gIH1cbiAgc3RhdGljIHRmaGQgKGlkKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBCdWZmZXIud3JpdGVVaW50MzIoaWQpXG4gICAgcmV0dXJuIEZtcDQuaW5pdEJveCgxNiwgJ3RmaGQnLCBGbXA0LmV4dGVuc2lvbigwLCAwKSwgY29udGVudClcbiAgfVxuICBzdGF0aWMgdGZkdCAodGltZSkge1xuICAgIC8vIGxldCB1cHBlciA9IE1hdGguZmxvb3IodGltZSAvIChVSU5UMzJfTUFYICsgMSkpLFxuICAgIC8vICAgICBsb3dlciA9IE1hdGguZmxvb3IodGltZSAlIChVSU5UMzJfTUFYICsgMSkpO1xuICAgIHJldHVybiBGbXA0LmluaXRCb3goMTYsICd0ZmR0JywgRm1wNC5leHRlbnNpb24oMCwgMCksIEJ1ZmZlci53cml0ZVVpbnQzMih0aW1lKSlcbiAgfVxuICBzdGF0aWMgdHJ1biAoZGF0YSwgc2R0cExlbmd0aCkge1xuICAgIC8vIGxldCBpZCA9IGRhdGEuaWQ7XG4gICAgLy8gbGV0IGNlaWwgPSBpZCA9PT0gMSA/IDE2IDogMTI7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGxldCBzYW1wbGVDb3VudCA9IEJ1ZmZlci53cml0ZVVpbnQzMihkYXRhLnNhbXBsZXMubGVuZ3RoKVxuICAgIC8vIG1kYXQtaGVhZGVyIDhcbiAgICAvLyBtb29mLWhlYWRlciA4XG4gICAgLy8gbWZoZCAxNlxuICAgIC8vIHRyYWYtaGVhZGVyIDhcbiAgICAvLyB0aGhkIDE2XG4gICAgLy8gdGZkdCAyMFxuICAgIC8vIHRydW4taGVhZGVyIDEyXG4gICAgLy8gc2FtcGxlQ291bnQgNFxuICAgIC8vIGRhdGEtb2Zmc2V0IDRcbiAgICAvLyBzYW1wbGVzLmxlbmd0aFxuICAgIGxldCBvZmZzZXQgPSBCdWZmZXIud3JpdGVVaW50MzIoOCArIDggKyAxNiArIDggKyAxNiArIDE2ICsgMTIgKyA0ICsgNCArIDE2ICogZGF0YS5zYW1wbGVzLmxlbmd0aCArIHNkdHBMZW5ndGgpXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZSgyMCArIDE2ICogZGF0YS5zYW1wbGVzLmxlbmd0aCksIEZtcDQudHlwZSgndHJ1bicpLCBuZXcgVWludDhBcnJheShbMHgwMCwgMHgwMCwgMHgwRiwgMHgwMV0pLCBzYW1wbGVDb3VudCwgb2Zmc2V0KVxuXG4gICAgLy8gbGV0IHNpemUgPSBidWZmZXIuYnVmZmVyLmJ5dGVMZW5ndGhcbiAgICAvLyBsZXQgd3JpdGVPZmZzZXQgPSAwXG4gICAgLy8gZGF0YS5zYW1wbGVzLmZvckVhY2goKCkgPT4ge1xuICAgIC8vICAgc2l6ZSArPSAxNlxuICAgIC8vIH0pXG4gICAgLy9cbiAgICAvLyBsZXQgdHJ1bkJveCA9IG5ldyBVaW50OEFycmF5KHNpemUpXG5cbiAgICAvLyB0cnVuQm94LnNldChidWZmZXIuYnVmZmVyLCAwKVxuXG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGZsYWdzID0gaXRlbS5mbGFnc1xuICAgICAgLy8gY29uc29sZS5sb2coaXRlbS50eXBlLCBpdGVtLmR0cywgaXRlbS5kdXJhdGlvbilcblxuICAgICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgKGl0ZW0uZHVyYXRpb24gPj4+IDI0KSAmIDB4RkYsIC8vIHNhbXBsZV9kdXJhdGlvblxuICAgICAgICAoaXRlbS5kdXJhdGlvbiA+Pj4gMTYpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uZHVyYXRpb24gPj4+IDgpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uZHVyYXRpb24pICYgMHhGRixcbiAgICAgICAgKGl0ZW0uc2l6ZSA+Pj4gMjQpICYgMHhGRiwgLy8gc2FtcGxlX3NpemVcbiAgICAgICAgKGl0ZW0uc2l6ZSA+Pj4gMTYpICYgMHhGRixcbiAgICAgICAgKGl0ZW0uc2l6ZSA+Pj4gOCkgJiAweEZGLFxuICAgICAgICAoaXRlbS5zaXplKSAmIDB4RkYsXG4gICAgICAgIChmbGFncy5pc0xlYWRpbmcgPDwgMikgfCBmbGFncy5kZXBlbmRzT24sIC8vIHNhbXBsZV9mbGFnc1xuICAgICAgICAoZmxhZ3MuaXNEZXBlbmRlZE9uIDw8IDYpIHwgKGZsYWdzLmhhc1JlZHVuZGFuY3kgPDwgNCkgfCBmbGFncy5pc05vblN5bmMsXG4gICAgICAgIDB4MDAsIDB4MDAsIC8vIHNhbXBsZV9kZWdyYWRhdGlvbl9wcmlvcml0eVxuICAgICAgICAoaXRlbS5jdHMgPj4+IDI0KSAmIDB4RkYsIC8vIHNhbXBsZV9jb21wb3NpdGlvbl90aW1lX29mZnNldFxuICAgICAgICAoaXRlbS5jdHMgPj4+IDE2KSAmIDB4RkYsXG4gICAgICAgIChpdGVtLmN0cyA+Pj4gOCkgJiAweEZGLFxuICAgICAgICAoaXRlbS5jdHMpICYgMHhGRlxuICAgICAgXSkpXG4gICAgICAvLyB3cml0ZU9mZnNldCArPSAxNlxuICAgICAgLy8gYnVmZmVyLndyaXRlKEJ1ZmZlci53cml0ZVVpbnQzMigwKSk7XG4gICAgfSlcbiAgICByZXR1cm4gYnVmZmVyLmJ1ZmZlclxuICB9XG4gIHN0YXRpYyBzZHRwIChkYXRhKSB7XG4gICAgbGV0IGJ1ZmZlciA9IG5ldyBCdWZmZXIoKVxuICAgIGJ1ZmZlci53cml0ZShGbXA0LnNpemUoMTIgKyBkYXRhLnNhbXBsZXMubGVuZ3RoKSwgRm1wNC50eXBlKCdzZHRwJyksIEZtcDQuZXh0ZW5zaW9uKDAsIDApKVxuICAgIGRhdGEuc2FtcGxlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgZmxhZ3MgPSBpdGVtLmZsYWdzXG4gICAgICBjb25zdCBudW0gPSAoZmxhZ3MuaXNMZWFkaW5nIDw8IDYpIHwgLy8gaXNfbGVhZGluZzogMiAoYml0KVxuICAgICAgICAoZmxhZ3MuZGVwZW5kc09uIDw8IDQpIHwgLy8gc2FtcGxlX2RlcGVuZHNfb25cbiAgICAgICAgKGZsYWdzLmlzRGVwZW5kZWRPbiA8PCAyKSB8IC8vIHNhbXBsZV9pc19kZXBlbmRlZF9vblxuICAgICAgICAoZmxhZ3MuaGFzUmVkdW5kYW5jeSkvLyBzYW1wbGVfaGFzX3JlZHVuZGFuY3lcblxuICAgICAgYnVmZmVyLndyaXRlKG5ldyBVaW50OEFycmF5KFtudW1dKSlcbiAgICB9KVxuICAgIHJldHVybiBidWZmZXIuYnVmZmVyXG4gIH1cbiAgc3RhdGljIG1kYXQgKGRhdGEpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IEJ1ZmZlcigpXG4gICAgbGV0IHNpemUgPSA4XG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBzaXplICs9IGl0ZW0uc2l6ZVxuICAgIH0pXG4gICAgYnVmZmVyLndyaXRlKEZtcDQuc2l6ZShzaXplKSwgRm1wNC50eXBlKCdtZGF0JykpXG4gICAgbGV0IG1kYXRCb3ggPSBuZXcgVWludDhBcnJheShzaXplKVxuICAgIGxldCBvZmZzZXQgPSAwXG4gICAgbWRhdEJveC5zZXQoYnVmZmVyLmJ1ZmZlciwgb2Zmc2V0KVxuICAgIG9mZnNldCArPSA4XG4gICAgZGF0YS5zYW1wbGVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmJ1ZmZlci5mb3JFYWNoKCh1bml0KSA9PiB7XG4gICAgICAgIG1kYXRCb3guc2V0KHVuaXQsIG9mZnNldClcbiAgICAgICAgb2Zmc2V0ICs9IHVuaXQuYnl0ZUxlbmd0aFxuICAgICAgICAvLyBidWZmZXIud3JpdGUodW5pdC5kYXRhKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gbWRhdEJveFxuICB9XG59XG5GbXA0LnR5cGUgPSAobmFtZSkgPT4ge1xuICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW25hbWUuY2hhckNvZGVBdCgwKSwgbmFtZS5jaGFyQ29kZUF0KDEpLCBuYW1lLmNoYXJDb2RlQXQoMiksIG5hbWUuY2hhckNvZGVBdCgzKV0pXG59XG5GbXA0LnNlcXVlbmNlID0gMVxuXG5leHBvcnQgZGVmYXVsdCBGbXA0XG4iLCJpbXBvcnQge1xuICBFVkVOVFMsXG4gIHNuaWZmZXIsXG4gIE1lZGlhU2VnbWVudExpc3QsXG4gIEJ1ZmZlclxufSBmcm9tICd4Z3BsYXllci11dGlscyc7XG5pbXBvcnQgRm1wNCBmcm9tICcuL2ZtcDQnXG5cbmNvbnN0IFJFTVVYX0VWRU5UUyA9IEVWRU5UUy5SRU1VWF9FVkVOVFNcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXA0UmVtdXhlciB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLl9kdHNCYXNlID0gMFxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IGZhbHNlXG5cbiAgICB0aGlzLmlzRmlyc3RWaWRlbyA9IHRydWVcbiAgICB0aGlzLmlzRmlyc3RBdWRpbyA9IHRydWVcblxuICAgIHRoaXMudmlkZW9BbGxEdXJhdGlvbiA9IDBcbiAgICB0aGlzLmF1ZGlvQWxsRHVyYXRpb24gPSAwXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICB0aGlzLm9uKFJFTVVYX0VWRU5UUy5SRU1VWF9NRURJQSwgdGhpcy5yZW11eC5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oUkVNVVhfRVZFTlRTLlJFTVVYX01FVEFEQVRBLCB0aGlzLm9uTWV0YURhdGFSZWFkeS5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oUkVNVVhfRVZFTlRTLkRFVEVDVF9DSEFOR0VfU1RSRUFNLCB0aGlzLnJlc2V0RHRzQmFzZS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZHRzQmFzZSA9IC0xXG4gICAgdGhpcy5fZHRzQmFzZUluaXRlZCA9IGZhbHNlXG4gIH1cblxuICByZXNldCAoKSB7XG4gICAgdGhpcy5fZHRzQmFzZSA9IDBcbiAgICB0aGlzLl9pc0R0c0Jhc2VJbml0ZWQgPSBmYWxzZVxuICB9XG5cbiAgcmVtdXggKCkge1xuICAgIGNvbnN0IHsgYXVkaW9UcmFjaywgdmlkZW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgICAhdGhpcy5faXNEdHNCYXNlSW5pdGVkICYmIHRoaXMuY2FsY0R0c0Jhc2UoYXVkaW9UcmFjaywgdmlkZW9UcmFjaylcblxuICAgIHRoaXMuX3JlbXV4VmlkZW8odmlkZW9UcmFjaylcbiAgICB0aGlzLl9yZW11eEF1ZGlvKGF1ZGlvVHJhY2spXG4gIH1cblxuICByZXNldER0c0Jhc2UgKCkge1xuICAgIC8vIGZvciBobHMg5Lit6YCU5YiH5o2iIG1ldGHlkI5zZWVrXG4gICAgdGhpcy5fZHRzQmFzZSA9IDBcbiAgICB0aGlzLl9kdHNCYXNlSW5pdGVkID0gZmFsc2VcbiAgfVxuXG4gIHNlZWsgKCkge1xuXG4gIH1cblxuICBvbk1ldGFEYXRhUmVhZHkgKHR5cGUpIHtcbiAgICBsZXQgdHJhY2tcblxuICAgIGlmICh0eXBlID09PSAnYXVkaW8nKSB7XG4gICAgICBjb25zdCB7IGF1ZGlvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gICAgICB0cmFjayA9IGF1ZGlvVHJhY2s7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgdmlkZW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJylcbiAgICAgIHRyYWNrID0gdmlkZW9UcmFjaztcbiAgICB9XG5cbiAgICBsZXQgcHJlc291cmNlYnVmZmVyID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnUFJFX1NPVVJDRV9CVUZGRVInKTtcbiAgICBsZXQgc291cmNlID0gcHJlc291cmNlYnVmZmVyLmdldFNvdXJjZSh0eXBlKTtcbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgc291cmNlID0gcHJlc291cmNlYnVmZmVyLmNyZWF0ZVNvdXJjZSh0eXBlKTtcbiAgICB9XG5cbiAgICBzb3VyY2UubWltZXR5cGUgPSB0cmFjay5tZXRhLmNvZGVjO1xuICAgIHNvdXJjZS5pbml0ID0gdGhpcy5yZW11eEluaXRTZWdtZW50KHR5cGUsIHRyYWNrLm1ldGEpO1xuICAgIC8vIHNvdXJjZS5pbml0ZWQgPSBmYWxzZTtcblxuICAgIC8vIHRoaXMucmVzZXREdHNCYXNlKClcbiAgICB0aGlzLmVtaXQoUkVNVVhfRVZFTlRTLklOSVRfU0VHTUVOVCwgdHlwZSlcbiAgfVxuXG4gIHJlbXV4SW5pdFNlZ21lbnQgKHR5cGUsIG1ldGEpIHtcbiAgICBsZXQgaW5pdFNlZ21lbnQgPSBuZXcgQnVmZmVyKClcbiAgICBsZXQgZnR5cCA9IEZtcDQuZnR5cCgpXG4gICAgbGV0IG1vb3YgPSBGbXA0Lm1vb3YoeyB0eXBlLCBtZXRhOiBtZXRhIH0pXG5cbiAgICBpbml0U2VnbWVudC53cml0ZShmdHlwLCBtb292KVxuICAgIHJldHVybiBpbml0U2VnbWVudDtcbiAgfVxuXG4gIGNhbGNEdHNCYXNlIChhdWRpb1RyYWNrLCB2aWRlb1RyYWNrKSB7XG4gICAgaWYgKCFhdWRpb1RyYWNrLnNhbXBsZXMubGVuZ3RoICYmICF2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGF1ZGlvQmFzZSA9IEluZmluaXR5XG4gICAgbGV0IHZpZGVvQmFzZSA9IEluZmluaXR5XG5cbiAgICBpZiAoYXVkaW9UcmFjay5zYW1wbGVzICYmIGF1ZGlvVHJhY2suc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGF1ZGlvQmFzZSA9IGF1ZGlvVHJhY2suc2FtcGxlc1swXS5kdHNcbiAgICB9XG4gICAgaWYgKHZpZGVvVHJhY2suc2FtcGxlcyAmJiB2aWRlb1RyYWNrLnNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICB2aWRlb0Jhc2UgPSB2aWRlb1RyYWNrLnNhbXBsZXNbMF0uZHRzXG4gICAgfVxuXG4gICAgdGhpcy5fZHRzQmFzZSA9IE1hdGgubWluKGF1ZGlvQmFzZSwgdmlkZW9CYXNlKVxuICAgIHRoaXMuX2lzRHRzQmFzZUluaXRlZCA9IHRydWVcbiAgfVxuXG4gIF9yZW11eFZpZGVvICh2aWRlb1RyYWNrKSB7XG4gICAgY29uc3QgdHJhY2sgPSB2aWRlb1RyYWNrXG5cbiAgICBpZiAoIXZpZGVvVHJhY2suc2FtcGxlcyB8fCAhdmlkZW9UcmFjay5zYW1wbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHtzYW1wbGVzfSA9IHRyYWNrXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcblxuICAgIGxldCBpbml0U2VnbWVudCA9IG51bGxcbiAgICBjb25zdCBtcDRTYW1wbGVzID0gW11cbiAgICBjb25zdCBtZGF0Qm94ID0ge1xuICAgICAgc2FtcGxlczogW11cbiAgICB9XG5cbiAgICB3aGlsZSAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGF2Y1NhbXBsZSA9IHNhbXBsZXMuc2hpZnQoKVxuXG4gICAgICBjb25zdCB7IGlzS2V5ZnJhbWUsIG9wdGlvbnMgfSA9IGF2Y1NhbXBsZVxuICAgICAgaWYgKCF0aGlzLmlzRmlyc3RBdWRpbyAmJiBvcHRpb25zICYmIG9wdGlvbnMubWV0YSkge1xuICAgICAgICBpbml0U2VnbWVudCA9IHRoaXMucmVtdXhJbml0U2VnbWVudCgndmlkZW8nLCBvcHRpb25zLm1ldGEpXG4gICAgICAgIG9wdGlvbnMubWV0YSA9IG51bGxcbiAgICAgICAgc2FtcGxlcy51bnNoaWZ0KGF2Y1NhbXBsZSlcbiAgICAgICAgaWYgKCFvcHRpb25zLmlzQ29udGludWUpIHtcbiAgICAgICAgICB0aGlzLnJlc2V0RHRzQmFzZSgpXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGxldCBkdHMgPSBhdmNTYW1wbGUuZHRzIC0gdGhpcy5fZHRzQmFzZVxuXG4gICAgICBpZiAoZmlyc3REdHMgPT09IC0xKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICB9XG5cbiAgICAgIGxldCBjdHNcbiAgICAgIGxldCBwdHNcbiAgICAgIGlmIChhdmNTYW1wbGUucHRzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHRzID0gYXZjU2FtcGxlLnB0cyAtIHRoaXMuX2R0c0Jhc2VcbiAgICAgICAgY3RzID0gcHRzIC0gZHRzXG4gICAgICB9XG4gICAgICBpZiAoYXZjU2FtcGxlLmN0cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHB0cyA9IGF2Y1NhbXBsZS5jdHMgKyBkdHNcbiAgICAgICAgY3RzID0gYXZjU2FtcGxlLmN0c1xuICAgICAgfVxuXG4gICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfVxuICAgICAgbWRhdEJveC5zYW1wbGVzLnB1c2gobWRhdFNhbXBsZSlcbiAgICAgIG1kYXRTYW1wbGUuYnVmZmVyLnB1c2goYXZjU2FtcGxlLmRhdGEpXG4gICAgICBtZGF0U2FtcGxlLnNpemUgKz0gYXZjU2FtcGxlLmRhdGEuYnl0ZUxlbmd0aFxuXG4gICAgICBsZXQgc2FtcGxlRHVyYXRpb24gPSAwXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICBjb25zdCBuZXh0RHRzID0gc2FtcGxlc1swXS5kdHMgLSB0aGlzLl9kdHNCYXNlXG4gICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbmV4dER0cyAtIGR0c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG1wNFNhbXBsZXMubGVuZ3RoID49IDEpIHsgLy8gbGFzdGVzdCBzYW1wbGUsIHVzZSBzZWNvbmQgbGFzdCBkdXJhdGlvblxuICAgICAgICAgIHNhbXBsZUR1cmF0aW9uID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdLmR1cmF0aW9uXG4gICAgICAgIH0gZWxzZSB7IC8vIHRoZSBvbmx5IG9uZSBzYW1wbGUsIHVzZSByZWZlcmVuY2UgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IHRoaXMudmlkZW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMudmlkZW9BbGxEdXJhdGlvbiArPSBzYW1wbGVEdXJhdGlvblxuICAgICAgLy8gY29uc29sZS5sb2coYGR0cyAke2R0c31gLCBgcHRzICR7cHRzfWAsIGBjdHM6ICR7Y3RzfWAsIGBkdXJhdGlvbjogJHtzYW1wbGVEdXJhdGlvbn1gLCBhdmNTYW1wbGUpXG4gICAgICBtcDRTYW1wbGVzLnB1c2goe1xuICAgICAgICBkdHMsXG4gICAgICAgIGN0cyxcbiAgICAgICAgcHRzLFxuICAgICAgICBkYXRhOiBhdmNTYW1wbGUuZGF0YSxcbiAgICAgICAgc2l6ZTogYXZjU2FtcGxlLmRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgaXNLZXlmcmFtZSxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBmbGFnczoge1xuICAgICAgICAgIGlzTGVhZGluZzogMCxcbiAgICAgICAgICBkZXBlbmRzT246IGlzS2V5ZnJhbWUgPyAyIDogMSxcbiAgICAgICAgICBpc0RlcGVuZGVkT246IGlzS2V5ZnJhbWUgPyAxIDogMCxcbiAgICAgICAgICBoYXNSZWR1bmRhbmN5OiAwLFxuICAgICAgICAgIGlzTm9uU3luYzogaXNLZXlmcmFtZSA/IDAgOiAxXG4gICAgICAgIH0sXG4gICAgICAgIG9yaWdpbkR0czogZHRzLFxuICAgICAgICB0eXBlOiAndmlkZW8nXG4gICAgICB9KVxuICAgIH1cblxuICAgIGxldCBtb29mTWRhdCA9IG5ldyBCdWZmZXIoKVxuICAgIGlmIChtcDRTYW1wbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgbW9vZiA9IEZtcDQubW9vZih7XG4gICAgICAgIGlkOiB0cmFjay5tZXRhLmlkLFxuICAgICAgICB0aW1lOiBmaXJzdER0cyxcbiAgICAgICAgc2FtcGxlczogbXA0U2FtcGxlc1xuICAgICAgfSlcbiAgICAgIGNvbnN0IG1kYXQgPSBGbXA0Lm1kYXQobWRhdEJveClcbiAgICAgIG1vb2ZNZGF0LndyaXRlKG1vb2YsIG1kYXQpXG5cbiAgICAgIHRoaXMud3JpdGVUb1NvdXJjZSgndmlkZW8nLCBtb29mTWRhdClcbiAgICB9XG5cbiAgICBpZiAoaW5pdFNlZ21lbnQpIHtcbiAgICAgIHRoaXMud3JpdGVUb1NvdXJjZSgndmlkZW8nLCBpbml0U2VnbWVudClcblxuICAgICAgaWYgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICAgIC8vIHNlY29uZCBwYXJ0IG9mIHN0cmVhbSBjaGFuZ2VcbiAgICAgICAgdHJhY2suc2FtcGxlcyA9IHNhbXBsZXM7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZW11eFZpZGVvKHRyYWNrKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaXNGaXJzdFZpZGVvID0gZmFsc2VcbiAgICB0aGlzLmVtaXQoUkVNVVhfRVZFTlRTLk1FRElBX1NFR01FTlQsICd2aWRlbycpXG5cbiAgICBjb25zdCBsYXN0U2FtcGxlID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbGFzdFNhbXBsZS5kdHMgKyBsYXN0U2FtcGxlLmR1cmF0aW9uO1xuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcbiAgfVxuXG4gIF9yZW11eEF1ZGlvICh0cmFjaykge1xuICAgIGNvbnN0IHtzYW1wbGVzfSA9IHRyYWNrXG4gICAgbGV0IGZpcnN0RHRzID0gLTFcbiAgICBsZXQgbXA0U2FtcGxlcyA9IFtdXG5cbiAgICBsZXQgaW5pdFNlZ21lbnQgPSBudWxsXG4gICAgY29uc3QgbWRhdEJveCA9IHtcbiAgICAgIHNhbXBsZXM6IFtdXG4gICAgfVxuICAgIGlmICghc2FtcGxlcyB8fCAhc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBsZXQgaXNGaXJzdER0c0luaXRlZCA9IGZhbHNlXG4gICAgd2hpbGUgKHNhbXBsZXMubGVuZ3RoKSB7XG4gICAgICBsZXQgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpXG4gICAgICBjb25zdCB7IGRhdGEsIG9wdGlvbnMgfSA9IHNhbXBsZVxuICAgICAgaWYgKCF0aGlzLmlzRmlyc3RBdWRpbyAmJiBvcHRpb25zICYmIG9wdGlvbnMubWV0YSkge1xuICAgICAgICBpbml0U2VnbWVudCA9IHRoaXMucmVtdXhJbml0U2VnbWVudCgnYXVkaW8nLCBvcHRpb25zLm1ldGEpXG4gICAgICAgIG9wdGlvbnMubWV0YSA9IG51bGw7XG4gICAgICAgIHNhbXBsZXMudW5zaGlmdChzYW1wbGUpXG4gICAgICAgIGlmICghb3B0aW9ucy5pc0NvbnRpbnVlKSB7XG4gICAgICAgICAgdGhpcy5yZXNldER0c0Jhc2UoKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBsZXQgZHRzID0gc2FtcGxlLmR0cyAtIHRoaXMuX2R0c0Jhc2VcbiAgICAgIGNvbnN0IG9yaWdpbkR0cyA9IGR0c1xuICAgICAgaWYgKCFpc0ZpcnN0RHRzSW5pdGVkKSB7XG4gICAgICAgIGZpcnN0RHRzID0gZHRzXG4gICAgICAgIGlzRmlyc3REdHNJbml0ZWQgPSB0cnVlXG4gICAgICB9XG5cbiAgICAgIGxldCBzYW1wbGVEdXJhdGlvbiA9IDBcblxuICAgICAgaWYgKHRoaXMuYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uRml4ZWQpIHtcbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSB0aGlzLmF1ZGlvTWV0YS5yZWZTYW1wbGVEdXJhdGlvbkZpeGVkXG4gICAgICB9IGVsc2UgaWYgKHNhbXBsZXMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY29uc3QgbmV4dER0cyA9IHNhbXBsZXNbMF0uZHRzIC0gdGhpcy5fZHRzQmFzZTtcbiAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBuZXh0RHRzIC0gZHRzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGggPj0gMSkgeyAvLyB1c2Ugc2Vjb25kIGxhc3Qgc2FtcGxlIGR1cmF0aW9uXG4gICAgICAgICAgc2FtcGxlRHVyYXRpb24gPSBtcDRTYW1wbGVzW21wNFNhbXBsZXMubGVuZ3RoIC0gMV0uZHVyYXRpb25cbiAgICAgICAgfSBlbHNlIHsgLy8gdGhlIG9ubHkgb25lIHNhbXBsZSwgdXNlIHJlZmVyZW5jZSBzYW1wbGUgZHVyYXRpb25cbiAgICAgICAgICBzYW1wbGVEdXJhdGlvbiA9IHRoaXMuYXVkaW9NZXRhLnJlZlNhbXBsZUR1cmF0aW9uXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2coJ3JlbXV4IGF1ZGlvICcsIGR0cylcbiAgICAgIHRoaXMuYXVkaW9BbGxEdXJhdGlvbiArPSBzYW1wbGVEdXJhdGlvblxuICAgICAgY29uc3QgbXA0U2FtcGxlID0ge1xuICAgICAgICBkdHMsXG4gICAgICAgIHB0czogZHRzLFxuICAgICAgICBjdHM6IDAsXG4gICAgICAgIHNpemU6IGRhdGEuYnl0ZUxlbmd0aCxcbiAgICAgICAgZHVyYXRpb246IHNhbXBsZS5kdXJhdGlvbiA/IHNhbXBsZS5kdXJhdGlvbiA6IHNhbXBsZUR1cmF0aW9uLFxuICAgICAgICBmbGFnczoge1xuICAgICAgICAgIGlzTGVhZGluZzogMCxcbiAgICAgICAgICBkZXBlbmRzT246IDIsXG4gICAgICAgICAgaXNEZXBlbmRlZE9uOiAxLFxuICAgICAgICAgIGhhc1JlZHVuZGFuY3k6IDAsXG4gICAgICAgICAgaXNOb25TeW5jOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGlzS2V5ZnJhbWU6IHRydWUsXG4gICAgICAgIG9yaWdpbkR0cyxcbiAgICAgICAgdHlwZTogJ2F1ZGlvJ1xuICAgICAgfVxuXG4gICAgICBsZXQgbWRhdFNhbXBsZSA9IHtcbiAgICAgICAgYnVmZmVyOiBbXSxcbiAgICAgICAgc2l6ZTogMFxuICAgICAgfVxuICAgICAgbWRhdFNhbXBsZS5idWZmZXIucHVzaChkYXRhKVxuICAgICAgbWRhdFNhbXBsZS5zaXplICs9IGRhdGEuYnl0ZUxlbmd0aFxuXG4gICAgICBtZGF0Qm94LnNhbXBsZXMucHVzaChtZGF0U2FtcGxlKVxuXG4gICAgICBtcDRTYW1wbGVzLnB1c2gobXA0U2FtcGxlKVxuICAgIH1cblxuICAgIGNvbnN0IG1vb2ZNZGF0ID0gbmV3IEJ1ZmZlcigpXG5cbiAgICBpZiAobXA0U2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG1vb2YgPSBGbXA0Lm1vb2Yoe1xuICAgICAgICBpZDogdHJhY2subWV0YS5pZCxcbiAgICAgICAgdGltZTogZmlyc3REdHMsXG4gICAgICAgIHNhbXBsZXM6IG1wNFNhbXBsZXNcbiAgICAgIH0pXG4gICAgICBjb25zdCBtZGF0ID0gRm1wNC5tZGF0KG1kYXRCb3gpXG4gICAgICBtb29mTWRhdC53cml0ZShtb29mLCBtZGF0KVxuXG4gICAgICB0aGlzLndyaXRlVG9Tb3VyY2UoJ2F1ZGlvJywgbW9vZk1kYXQpXG4gICAgfVxuXG4gICAgaWYgKGluaXRTZWdtZW50KSB7XG4gICAgICB0aGlzLndyaXRlVG9Tb3VyY2UoJ2F1ZGlvJywgaW5pdFNlZ21lbnQpXG4gICAgICBpZiAoc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gc2Vjb25kIHBhcnQgb2Ygc3RyZWFtIGNoYW5nZVxuICAgICAgICB0cmFjay5zYW1wbGVzID0gc2FtcGxlcztcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbXV4QXVkaW8odHJhY2spXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pc0ZpcnN0QXVkaW8gPSBmYWxzZVxuICAgIHRoaXMuZW1pdChSRU1VWF9FVkVOVFMuTUVESUFfU0VHTUVOVCwgJ2F1ZGlvJywgbW9vZk1kYXQpXG5cbiAgICBjb25zdCBsYXN0U2FtcGxlID0gbXA0U2FtcGxlc1ttcDRTYW1wbGVzLmxlbmd0aCAtIDFdXG4gICAgdGhpcy5fdmlkZW9OZXh0RHRzID0gbGFzdFNhbXBsZS5kdHMgKyBsYXN0U2FtcGxlLmR1cmF0aW9uO1xuICAgIHRyYWNrLnNhbXBsZXMgPSBbXVxuICAgIHRyYWNrLmxlbmd0aCA9IDBcbiAgfVxuXG4gIHdyaXRlVG9Tb3VyY2UgKHR5cGUsIGJ1ZmZlcikge1xuICAgIGxldCBwcmVzb3VyY2VidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdQUkVfU09VUkNFX0JVRkZFUicpO1xuICAgIGxldCBzb3VyY2UgPSBwcmVzb3VyY2VidWZmZXIuZ2V0U291cmNlKHR5cGUpO1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICBzb3VyY2UgPSBwcmVzb3VyY2VidWZmZXIuY3JlYXRlU291cmNlKHR5cGUpO1xuICAgIH1cblxuICAgIHNvdXJjZS5kYXRhLnB1c2goYnVmZmVyKVxuICB9XG5cbiAgaW5pdFNpbGVudEF1ZGlvIChkdHMsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgdW5pdCA9IE1wNFJlbXV4ZXIuZ2V0U2lsZW50RnJhbWUodGhpcy5hdWRpb01ldGEuY2hhbm5lbENvdW50KVxuICAgIHJldHVybiB7XG4gICAgICBkdHMsXG4gICAgICBwdHM6IGR0cyxcbiAgICAgIGN0czogMCxcbiAgICAgIGR1cmF0aW9uLFxuICAgICAgdW5pdCxcbiAgICAgIHNpemU6IHVuaXQuYnl0ZUxlbmd0aCxcbiAgICAgIG9yaWdpbkR0czogZHRzLFxuICAgICAgdHlwZTogJ3ZpZGVvJ1xuICAgIH1cbiAgfVxuXG4gIGdldCB2aWRlb01ldGEgKCkge1xuICAgIHJldHVybiB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdUUkFDS1MnKS52aWRlb1RyYWNrLm1ldGFcbiAgfVxuICBnZXQgYXVkaW9NZXRhICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJykuYXVkaW9UcmFjay5tZXRhXG4gIH1cblxuICBzdGF0aWMgZ2V0U2lsZW50RnJhbWUgKGNoYW5uZWxDb3VudCkge1xuICAgIGlmIChjaGFubmVsQ291bnQgPT09IDEpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDIpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgyMSwgMHgwMCwgMHg0OSwgMHg5MCwgMHgwMiwgMHgxOSwgMHgwMCwgMHgyMywgMHg4MF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4ZV0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDQpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MCwgMHgyYywgMHg4MCwgMHgwOCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDUpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgzOF0pXG4gICAgfSBlbHNlIGlmIChjaGFubmVsQ291bnQgPT09IDYpIHtcbiAgICAgIHJldHVybiBuZXcgVWludDhBcnJheShbMHgwMCwgMHhjOCwgMHgwMCwgMHg4MCwgMHgyMCwgMHg4NCwgMHgwMSwgMHgyNiwgMHg0MCwgMHgwOCwgMHg2NCwgMHgwMCwgMHg4MiwgMHgzMCwgMHgwNCwgMHg5OSwgMHgwMCwgMHgyMSwgMHg5MCwgMHgwMiwgMHgwMCwgMHhiMiwgMHgwMCwgMHgyMCwgMHgwOCwgMHhlMF0pXG4gICAgfVxuICAgIHJldHVybiBudWxsXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBDb250ZXh0OiByZXF1aXJlKCcuL3NyYy9jb250ZXh0JykuZGVmYXVsdCxcblxuICAvLyBNb2R1bGVzIGZyb20gY29uc3RhbnRzXG4gIEVWRU5UUzogcmVxdWlyZSgnLi9zcmMvY29uc3RhbnRzL2V2ZW50cycpLmRlZmF1bHQsXG4gIFdPUktFUl9DT01NQU5EUzogcmVxdWlyZSgnLi9zcmMvY29uc3RhbnRzL3dvcmtlci1jb21tYW5kcycpLmRlZmF1bHQsXG5cbiAgLy8gTW9kdWxlcyBmcm9tIGVudlxuICBzbmlmZmVyOiByZXF1aXJlKCcuL3NyYy9lbnYvc25pZmZlcicpLmRlZmF1bHQsXG4gIGlzTGU6IHJlcXVpcmUoJy4vc3JjL2Vudi9pc2xlJykuZGVmYXVsdCxcbiAgVVRGODogcmVxdWlyZSgnLi9zcmMvZW52L3V0ZjgnKS5kZWZhdWx0LFxuICBQYWdlVmlzaWJpbGl0eTogcmVxdWlyZSgnLi9zcmMvZW52L1BhZ2VWaXNpYmlsaXR5JykuZGVmYXVsdCxcblxuICAvLyBNb2RlbHNcbiAgTWVkaWFJbmZvOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtaW5mbycpLmRlZmF1bHQsXG4gIE1lZGlhU2FtcGxlOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtc2FtcGxlJykuZGVmYXVsdCxcbiAgTWVkaWFTZWdtZW50OiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvbWVkaWEtc2VnbWVudCcpLmRlZmF1bHQsXG4gIE1lZGlhU2VnbWVudExpc3Q6IHJlcXVpcmUoJy4vc3JjL21vZGVscy9tZWRpYS1zZWdtZW50LWxpc3QnKS5kZWZhdWx0LFxuICBBdWRpb1RyYWNrTWV0YTogcmVxdWlyZSgnLi9zcmMvbW9kZWxzL3RyYWNrLW1ldGEnKS5BdWRpb1RyYWNrTWV0YSxcbiAgVmlkZW9UcmFja01ldGE6IHJlcXVpcmUoJy4vc3JjL21vZGVscy90cmFjay1tZXRhJykuVmlkZW9UcmFja01ldGEsXG4gIEF1ZGlvVHJhY2tTYW1wbGU6IHJlcXVpcmUoJy4vc3JjL21vZGVscy90cmFjay1zYW1wbGUnKS5BdWRpb1RyYWNrU2FtcGxlLFxuICBWaWRlb1RyYWNrU2FtcGxlOiByZXF1aXJlKCcuL3NyYy9tb2RlbHMvdHJhY2stc2FtcGxlJykuVmlkZW9UcmFja1NhbXBsZSxcblxuICAvLyBNb2R1bGVzIGZyb20gbXNlXG4gIE1zZTogcmVxdWlyZSgnLi9zcmMvbXNlL2luZGV4JykuZGVmYXVsdCxcblxuICAvLyBNb2R1bGVzIGZyb20gd3JpdGVcbiAgU3RyZWFtOiByZXF1aXJlKCcuL3NyYy93cml0ZS9zdHJlYW0nKS5kZWZhdWx0LFxuICBCdWZmZXI6IHJlcXVpcmUoJy4vc3JjL3dyaXRlL2J1ZmZlcicpLmRlZmF1bHQsXG5cbiAgTW9iaWxlVmlkZW86IHJlcXVpcmUoJy4vc3JjL21vYmlsZS9tb2JpbGUtdmlkZW8nKSxcbiAgLy8gQ3J5cHRvXG4gIENyeXB0bzogcmVxdWlyZSgnLi9zcmMvY3J5cHRvJykuZGVmYXVsdFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoUmVzdWx0Q29uc3RydWN0b3IpIHtcbiAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJyYXlzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFycmF5c1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBhcnJheXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgYXJyID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIHRvdGFsTGVuZ3RoICs9IGFyci5sZW5ndGg7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciByZXN1bHQgPSBuZXcgUmVzdWx0Q29uc3RydWN0b3IodG90YWxMZW5ndGgpO1xuICB2YXIgb2Zmc2V0ID0gMDtcbiAgdmFyIF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZTtcbiAgdmFyIF9kaWRJdGVyYXRvckVycm9yMiA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IyID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IGFycmF5c1tTeW1ib2wuaXRlcmF0b3JdKCksIF9zdGVwMjsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uMiA9IChfc3RlcDIgPSBfaXRlcmF0b3IyLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yID0gdHJ1ZSkge1xuICAgICAgdmFyIF9hcnIgPSBfc3RlcDIudmFsdWU7XG5cbiAgICAgIHJlc3VsdC5zZXQoX2Fyciwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBfYXJyLmxlbmd0aDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kaWRJdGVyYXRvckVycm9yMiA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IyID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24yICYmIF9pdGVyYXRvcjIucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvcjIucmV0dXJuKCk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZGlkSXRlcmF0b3JFcnJvcjIpIHtcbiAgICAgICAgdGhyb3cgX2l0ZXJhdG9yRXJyb3IyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xuXG52YXIgX2NvbmNhdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb25jYXQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25jYXQyLmRlZmF1bHQ7IiwiZnVuY3Rpb24gd2VicGFja0Jvb3RzdHJhcEZ1bmMgKG1vZHVsZXMpIHtcbi8qKioqKiovICAvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuLyoqKioqKi8gIC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4vKioqKioqLyAgICAvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovICAgIGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuLyoqKioqKi8gICAgICByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuLyoqKioqKi8gICAgLy8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovICAgICAgaTogbW9kdWxlSWQsXG4vKioqKioqLyAgICAgIGw6IGZhbHNlLFxuLyoqKioqKi8gICAgICBleHBvcnRzOiB7fVxuLyoqKioqKi8gICAgfTtcblxuLyoqKioqKi8gICAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyAgICBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuLyoqKioqKi8gICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gICAgbW9kdWxlLmwgPSB0cnVlO1xuXG4vKioqKioqLyAgICAvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gIH1cblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbi8qKioqKiovICAvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovICAgIGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyAgICAgICAgZ2V0OiBnZXR0ZXJcbi8qKioqKiovICAgICAgfSk7XG4vKioqKioqLyAgICB9XG4vKioqKioqLyAgfTtcblxuLyoqKioqKi8gIC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gICAgdmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyAgICAgIGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyAgICByZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gIH07XG5cbi8qKioqKiovICAvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbi8qKioqKiovICAvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4vKioqKioqLyAgLy8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbi8qKioqKiovICBfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gIHZhciBmID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBFTlRSWV9NT0RVTEUpXG4gIHJldHVybiBmLmRlZmF1bHQgfHwgZiAvLyB0cnkgdG8gY2FsbCBkZWZhdWx0IGlmIGRlZmluZWQgdG8gYWxzbyBzdXBwb3J0IGJhYmVsIGVzbW9kdWxlIGV4cG9ydHNcbn1cblxudmFyIG1vZHVsZU5hbWVSZXFFeHAgPSAnW1xcXFwufFxcXFwtfFxcXFwrfFxcXFx3fFxcL3xAXSsnXG52YXIgZGVwZW5kZW5jeVJlZ0V4cCA9ICdcXFxcKFxcXFxzKihcXC9cXFxcKi4qP1xcXFwqXFwvKT9cXFxccyouKj8oJyArIG1vZHVsZU5hbWVSZXFFeHAgKyAnKS4qP1xcXFwpJyAvLyBhZGRpdGlvbmFsIGNoYXJzIHdoZW4gb3V0cHV0LnBhdGhpbmZvIGlzIHRydWVcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjU5MzY2MS8xMzA0NDJcbmZ1bmN0aW9uIHF1b3RlUmVnRXhwIChzdHIpIHtcbiAgcmV0dXJuIChzdHIgKyAnJykucmVwbGFjZSgvWy4/KiteJFtcXF1cXFxcKCl7fXwtXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuICFpc05hTigxICogbik7IC8vIDEgKiBuIGNvbnZlcnRzIGludGVnZXJzLCBpbnRlZ2VycyBhcyBzdHJpbmcgKFwiMTIzXCIpLCAxZTMgYW5kIFwiMWUzXCIgdG8gaW50ZWdlcnMgYW5kIHN0cmluZ3MgdG8gTmFOXG59XG5cbmZ1bmN0aW9uIGdldE1vZHVsZURlcGVuZGVuY2llcyAoc291cmNlcywgbW9kdWxlLCBxdWV1ZU5hbWUpIHtcbiAgdmFyIHJldHZhbCA9IHt9XG4gIHJldHZhbFtxdWV1ZU5hbWVdID0gW11cblxuICB2YXIgZm5TdHJpbmcgPSBtb2R1bGUudG9TdHJpbmcoKVxuICB2YXIgd3JhcHBlclNpZ25hdHVyZSA9IGZuU3RyaW5nLm1hdGNoKC9eZnVuY3Rpb25cXHM/XFx3KlxcKFxcdyssXFxzKlxcdyssXFxzKihcXHcrKVxcKS8pXG4gIGlmICghd3JhcHBlclNpZ25hdHVyZSkgcmV0dXJuIHJldHZhbFxuICB2YXIgd2VicGFja1JlcXVpcmVOYW1lID0gd3JhcHBlclNpZ25hdHVyZVsxXVxuXG4gIC8vIG1haW4gYnVuZGxlIGRlcHNcbiAgdmFyIHJlID0gbmV3IFJlZ0V4cCgnKFxcXFxcXFxcbnxcXFxcVyknICsgcXVvdGVSZWdFeHAod2VicGFja1JlcXVpcmVOYW1lKSArIGRlcGVuZGVuY3lSZWdFeHAsICdnJylcbiAgdmFyIG1hdGNoXG4gIHdoaWxlICgobWF0Y2ggPSByZS5leGVjKGZuU3RyaW5nKSkpIHtcbiAgICBpZiAobWF0Y2hbM10gPT09ICdkbGwtcmVmZXJlbmNlJykgY29udGludWVcbiAgICByZXR2YWxbcXVldWVOYW1lXS5wdXNoKG1hdGNoWzNdKVxuICB9XG5cbiAgLy8gZGxsIGRlcHNcbiAgcmUgPSBuZXcgUmVnRXhwKCdcXFxcKCcgKyBxdW90ZVJlZ0V4cCh3ZWJwYWNrUmVxdWlyZU5hbWUpICsgJ1xcXFwoXCIoZGxsLXJlZmVyZW5jZVxcXFxzKCcgKyBtb2R1bGVOYW1lUmVxRXhwICsgJykpXCJcXFxcKVxcXFwpJyArIGRlcGVuZGVuY3lSZWdFeHAsICdnJylcbiAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMoZm5TdHJpbmcpKSkge1xuICAgIGlmICghc291cmNlc1ttYXRjaFsyXV0pIHtcbiAgICAgIHJldHZhbFtxdWV1ZU5hbWVdLnB1c2gobWF0Y2hbMV0pXG4gICAgICBzb3VyY2VzW21hdGNoWzJdXSA9IF9fd2VicGFja19yZXF1aXJlX18obWF0Y2hbMV0pLm1cbiAgICB9XG4gICAgcmV0dmFsW21hdGNoWzJdXSA9IHJldHZhbFttYXRjaFsyXV0gfHwgW11cbiAgICByZXR2YWxbbWF0Y2hbMl1dLnB1c2gobWF0Y2hbNF0pXG4gIH1cblxuICAvLyBjb252ZXJ0IDFlMyBiYWNrIHRvIDEwMDAgLSB0aGlzIGNhbiBiZSBpbXBvcnRhbnQgYWZ0ZXIgdWdsaWZ5LWpzIGNvbnZlcnRlZCAxMDAwIHRvIDFlM1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJldHZhbCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcmV0dmFsW2tleXNbaV1dLmxlbmd0aDsgaisrKSB7XG4gICAgICBpZiAoaXNOdW1lcmljKHJldHZhbFtrZXlzW2ldXVtqXSkpIHtcbiAgICAgICAgcmV0dmFsW2tleXNbaV1dW2pdID0gMSAqIHJldHZhbFtrZXlzW2ldXVtqXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0dmFsXG59XG5cbmZ1bmN0aW9uIGhhc1ZhbHVlc0luUXVldWVzIChxdWV1ZXMpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhxdWV1ZXMpXG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzVmFsdWVzLCBrZXkpIHtcbiAgICByZXR1cm4gaGFzVmFsdWVzIHx8IHF1ZXVlc1trZXldLmxlbmd0aCA+IDBcbiAgfSwgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGdldFJlcXVpcmVkTW9kdWxlcyAoc291cmNlcywgbW9kdWxlSWQpIHtcbiAgdmFyIG1vZHVsZXNRdWV1ZSA9IHtcbiAgICBtYWluOiBbbW9kdWxlSWRdXG4gIH1cbiAgdmFyIHJlcXVpcmVkTW9kdWxlcyA9IHtcbiAgICBtYWluOiBbXVxuICB9XG4gIHZhciBzZWVuTW9kdWxlcyA9IHtcbiAgICBtYWluOiB7fVxuICB9XG5cbiAgd2hpbGUgKGhhc1ZhbHVlc0luUXVldWVzKG1vZHVsZXNRdWV1ZSkpIHtcbiAgICB2YXIgcXVldWVzID0gT2JqZWN0LmtleXMobW9kdWxlc1F1ZXVlKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcXVldWVOYW1lID0gcXVldWVzW2ldXG4gICAgICB2YXIgcXVldWUgPSBtb2R1bGVzUXVldWVbcXVldWVOYW1lXVxuICAgICAgdmFyIG1vZHVsZVRvQ2hlY2sgPSBxdWV1ZS5wb3AoKVxuICAgICAgc2Vlbk1vZHVsZXNbcXVldWVOYW1lXSA9IHNlZW5Nb2R1bGVzW3F1ZXVlTmFtZV0gfHwge31cbiAgICAgIGlmIChzZWVuTW9kdWxlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdIHx8ICFzb3VyY2VzW3F1ZXVlTmFtZV1bbW9kdWxlVG9DaGVja10pIGNvbnRpbnVlXG4gICAgICBzZWVuTW9kdWxlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdID0gdHJ1ZVxuICAgICAgcmVxdWlyZWRNb2R1bGVzW3F1ZXVlTmFtZV0gPSByZXF1aXJlZE1vZHVsZXNbcXVldWVOYW1lXSB8fCBbXVxuICAgICAgcmVxdWlyZWRNb2R1bGVzW3F1ZXVlTmFtZV0ucHVzaChtb2R1bGVUb0NoZWNrKVxuICAgICAgdmFyIG5ld01vZHVsZXMgPSBnZXRNb2R1bGVEZXBlbmRlbmNpZXMoc291cmNlcywgc291cmNlc1txdWV1ZU5hbWVdW21vZHVsZVRvQ2hlY2tdLCBxdWV1ZU5hbWUpXG4gICAgICB2YXIgbmV3TW9kdWxlc0tleXMgPSBPYmplY3Qua2V5cyhuZXdNb2R1bGVzKVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBuZXdNb2R1bGVzS2V5cy5sZW5ndGg7IGorKykge1xuICAgICAgICBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dID0gbW9kdWxlc1F1ZXVlW25ld01vZHVsZXNLZXlzW2pdXSB8fCBbXVxuICAgICAgICBtb2R1bGVzUXVldWVbbmV3TW9kdWxlc0tleXNbal1dID0gbW9kdWxlc1F1ZXVlW25ld01vZHVsZXNLZXlzW2pdXS5jb25jYXQobmV3TW9kdWxlc1tuZXdNb2R1bGVzS2V5c1tqXV0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlcXVpcmVkTW9kdWxlc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChtb2R1bGVJZCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc291cmNlcyA9IHtcbiAgICBtYWluOiBfX3dlYnBhY2tfbW9kdWxlc19fXG4gIH1cblxuICB2YXIgcmVxdWlyZWRNb2R1bGVzID0gb3B0aW9ucy5hbGwgPyB7IG1haW46IE9iamVjdC5rZXlzKHNvdXJjZXMubWFpbikgfSA6IGdldFJlcXVpcmVkTW9kdWxlcyhzb3VyY2VzLCBtb2R1bGVJZClcblxuICB2YXIgc3JjID0gJydcblxuICBPYmplY3Qua2V5cyhyZXF1aXJlZE1vZHVsZXMpLmZpbHRlcihmdW5jdGlvbiAobSkgeyByZXR1cm4gbSAhPT0gJ21haW4nIH0pLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgIHZhciBlbnRyeU1vZHVsZSA9IDBcbiAgICB3aGlsZSAocmVxdWlyZWRNb2R1bGVzW21vZHVsZV1bZW50cnlNb2R1bGVdKSB7XG4gICAgICBlbnRyeU1vZHVsZSsrXG4gICAgfVxuICAgIHJlcXVpcmVkTW9kdWxlc1ttb2R1bGVdLnB1c2goZW50cnlNb2R1bGUpXG4gICAgc291cmNlc1ttb2R1bGVdW2VudHJ5TW9kdWxlXSA9ICcoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXzsgfSknXG4gICAgc3JjID0gc3JjICsgJ3ZhciAnICsgbW9kdWxlICsgJyA9ICgnICsgd2VicGFja0Jvb3RzdHJhcEZ1bmMudG9TdHJpbmcoKS5yZXBsYWNlKCdFTlRSWV9NT0RVTEUnLCBKU09OLnN0cmluZ2lmeShlbnRyeU1vZHVsZSkpICsgJykoeycgKyByZXF1aXJlZE1vZHVsZXNbbW9kdWxlXS5tYXAoZnVuY3Rpb24gKGlkKSB7IHJldHVybiAnJyArIEpTT04uc3RyaW5naWZ5KGlkKSArICc6ICcgKyBzb3VyY2VzW21vZHVsZV1baWRdLnRvU3RyaW5nKCkgfSkuam9pbignLCcpICsgJ30pO1xcbidcbiAgfSlcblxuICBzcmMgPSBzcmMgKyAnbmV3ICgoJyArIHdlYnBhY2tCb290c3RyYXBGdW5jLnRvU3RyaW5nKCkucmVwbGFjZSgnRU5UUllfTU9EVUxFJywgSlNPTi5zdHJpbmdpZnkobW9kdWxlSWQpKSArICcpKHsnICsgcmVxdWlyZWRNb2R1bGVzLm1haW4ubWFwKGZ1bmN0aW9uIChpZCkgeyByZXR1cm4gJycgKyBKU09OLnN0cmluZ2lmeShpZCkgKyAnOiAnICsgc291cmNlcy5tYWluW2lkXS50b1N0cmluZygpIH0pLmpvaW4oJywnKSArICd9KSkoc2VsZik7J1xuXG4gIHZhciBibG9iID0gbmV3IHdpbmRvdy5CbG9iKFtzcmNdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0pXG4gIGlmIChvcHRpb25zLmJhcmUpIHsgcmV0dXJuIGJsb2IgfVxuXG4gIHZhciBVUkwgPSB3aW5kb3cuVVJMIHx8IHdpbmRvdy53ZWJraXRVUkwgfHwgd2luZG93Lm1velVSTCB8fCB3aW5kb3cubXNVUkxcblxuICB2YXIgd29ya2VyVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxuICB2YXIgd29ya2VyID0gbmV3IHdpbmRvdy5Xb3JrZXIod29ya2VyVXJsKVxuICB3b3JrZXIub2JqZWN0VVJMID0gd29ya2VyVXJsXG5cbiAgcmV0dXJuIHdvcmtlclxufVxuIiwiY29uc3QgTE9BREVSX0VWRU5UUyA9IHtcbiAgTEFERVJfU1RBUlQ6ICdMT0FERVJfU1RBUlQnLFxuICBMT0FERVJfREFUQUxPQURFRDogJ0xPQURFUl9EQVRBTE9BREVEJyxcbiAgTE9BREVSX0NPTVBMRVRFOiAnTE9BREVSX0NPTVBMRVRFJyxcbiAgTE9BREVSX0VSUk9SOiAnTE9BREVSX0VSUk9SJ1xufVxuXG5jb25zdCBERU1VWF9FVkVOVFMgPSB7XG4gIERFTVVYX1NUQVJUOiAnREVNVVhfU1RBUlQnLFxuICBERU1VWF9DT01QTEVURTogJ0RFTVVYX0NPTVBMRVRFJyxcbiAgREVNVVhfRVJST1I6ICdERU1VWF9FUlJPUicsXG4gIE1FVEFEQVRBX1BBUlNFRDogJ01FVEFEQVRBX1BBUlNFRCcsXG4gIFZJREVPX01FVEFEQVRBX0NIQU5HRTogJ1ZJREVPX01FVEFEQVRBX0NIQU5HRScsXG4gIEFVRElPX01FVEFEQVRBX0NIQU5HRTogJ0FVRElPX01FVEFEQVRBX0NIQU5HRScsXG4gIE1FRElBX0lORk86ICdNRURJQV9JTkZPJ1xufVxuXG5jb25zdCBSRU1VWF9FVkVOVFMgPSB7XG4gIFJFTVVYX01FVEFEQVRBOiAnUkVNVVhfTUVUQURBVEEnLFxuICBSRU1VWF9NRURJQTogJ1JFTVVYX01FRElBJyxcbiAgTUVESUFfU0VHTUVOVDogJ01FRElBX1NFR01FTlQnLFxuICBSRU1VWF9FUlJPUjogJ1JFTVVYX0VSUk9SJyxcbiAgSU5JVF9TRUdNRU5UOiAnSU5JVF9TRUdNRU5UJyxcbiAgREVURUNUX0NIQU5HRV9TVFJFQU06ICdERVRFQ1RfQ0hBTkdFX1NUUkVBTSdcbn1cblxuY29uc3QgTVNFX0VWRU5UUyA9IHtcbiAgU09VUkNFX1VQREFURV9FTkQ6ICdTT1VSQ0VfVVBEQVRFX0VORCdcbn1cblxuLy8gaGxz5LiT5pyJZXZlbnRzXG5jb25zdCBITFNfRVZFTlRTID0ge1xuICBSRVRSWV9USU1FX0VYQ0VFREVEOiAnUkVUUllfVElNRV9FWENFRURFRCdcbn1cblxuY29uc3QgQ1JZVE9fRVZFTlRTID0ge1xuICBTVEFSVF9ERUNSWVBUOiAnU1RBUlRfREVDUllQVCcsXG4gIERFQ1JZUFRFRDogJ0RFQ1JZUFRFRCdcbn1cblxuY29uc3QgQlJPV1NFUl9FVkVOVFMgPSB7XG4gIFZJU0lCSUxJVFlfQ0hBTkdFOiAnVklTSUJJTElUWV9DSEFOR0UnXG59XG5cbmNvbnN0IEFMTEVWRU5UUyA9IE9iamVjdC5hc3NpZ24oe30sIExPQURFUl9FVkVOVFMsIERFTVVYX0VWRU5UUywgUkVNVVhfRVZFTlRTLCBNU0VfRVZFTlRTLCBITFNfRVZFTlRTLCBCUk9XU0VSX0VWRU5UUylcblxuY29uc3QgRmx2QWxsb3dlZEV2ZW50cyA9IFtdXG5jb25zdCBIbHNBbGxvd2VkRXZlbnRzID0gW11cblxuZm9yIChsZXQga2V5IGluIEFMTEVWRU5UUykge1xuICBpZiAoQUxMRVZFTlRTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBGbHZBbGxvd2VkRXZlbnRzLnB1c2goQUxMRVZFTlRTW2tleV0pXG4gIH1cbn1cblxuZm9yIChsZXQga2V5IGluIEFMTEVWRU5UUykge1xuICBpZiAoQUxMRVZFTlRTLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICBIbHNBbGxvd2VkRXZlbnRzLnB1c2goQUxMRVZFTlRTW2tleV0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBBTExFVkVOVFMsXG4gIEhMU19FVkVOVFMsXG4gIFJFTVVYX0VWRU5UUyxcbiAgREVNVVhfRVZFTlRTLFxuICBNU0VfRVZFTlRTLFxuICBMT0FERVJfRVZFTlRTLFxuICBGbHZBbGxvd2VkRXZlbnRzLFxuICBIbHNBbGxvd2VkRXZlbnRzLFxuICBDUllUT19FVkVOVFMsXG4gIEJST1dTRVJfRVZFTlRTXG59O1xuIiwiZXhwb3J0IGNvbnN0IENPTlRFWFRfQ09NT01BTkRTID0ge1xuICBPTjogJ29uJyxcbiAgT05DRTogJ29uY2UnLFxuICBPRkY6ICdvZmYnLFxuICBFTUlUOiAnZW1pdCcsXG4gIERFU1RST1k6ICdkZXN0cm95J1xufVxuIiwiaW1wb3J0IE1lZGlhSW5mbyBmcm9tICcuL21vZGVscy9tZWRpYS1pbmZvJ1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnZXZlbnRzJ1xuXG5jb25zdCBESVJFQ1RfRU1JVF9GTEFHID0gJ19fVE9fXydcblxuY2xhc3MgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yIChhbGxvd2VkRXZlbnRzID0gW10pIHtcbiAgICB0aGlzLl9lbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgdGhpcy5faW5zdGFuY2VNYXAgPSB7fSAvLyDmiYDmnInnmoTop6PnoIHmtYHnqIvlrp7kvotcbiAgICB0aGlzLl9jbHNNYXAgPSB7fSAvLyDmnoTpgKDlh73mlbDnmoRtYXBcbiAgICB0aGlzLl9pbml0ZWQgPSBmYWxzZVxuICAgIHRoaXMubWVkaWFJbmZvID0gbmV3IE1lZGlhSW5mbygpXG4gICAgdGhpcy5hbGxvd2VkRXZlbnRzID0gYWxsb3dlZEV2ZW50c1xuICAgIHRoaXMuX2hvb2tzID0ge30gLy8g5rOo5YaM5Zyo5LqL5Lu25YmNL+WQjueahOmSqeWtkO+8jOS+i+WmgiBiZWZvcmUoJ0RFTVVYX0NPTVBMRVRFJylcbiAgfVxuXG4gIC8qKlxuICAgKiDku47kuIrkuIvmlofkuK3ojrflj5bop6PnoIHmtYHnqIvlrp7kvovvvIzlpoLmnpzmsqHmnInlrp7kvovvvIzmnoTpgKDkuIDkuKpcbiAgICogQHBhcmFtIHRhZ1xuICAgKiBAcGFyYW0gYXJnc1xuICAgKiBAcmV0dXJucyB7Kn1cbiAgICovXG4gIGdldEluc3RhbmNlICh0YWcpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX2luc3RhbmNlTWFwW3RhZ11cbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYCR7dGFnfeWunuS+i+WwmuacquWIneWni+WMlmApXG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDliJ3lp4vljJblhbfkvZPlrp7kvotcbiAgICogQHBhcmFtIHRhZ1xuICAgKiBAcGFyYW0gYXJnc1xuICAgKi9cbiAgaW5pdEluc3RhbmNlICh0YWcsIC4uLmFyZ3MpIHtcbiAgICBpZiAodGhpcy5fY2xzTWFwW3RhZ10pIHtcbiAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IHRoaXMuX2Nsc01hcFt0YWddKC4uLmFyZ3MpXG4gICAgICB0aGlzLl9pbnN0YW5jZU1hcFt0YWddID0gbmV3SW5zdGFuY2VcbiAgICAgIGlmIChuZXdJbnN0YW5jZS5pbml0KSB7XG4gICAgICAgIG5ld0luc3RhbmNlLmluaXQoKSAvLyBUT0RPOiBsaWZlY2lyY2xlXG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3SW5zdGFuY2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RhZ33mnKrlnKhjb250ZXh05Lit5rOo5YaMYClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog6YG/5YWN5aSn6YeP55qEaW5pdEluc3RhbmNl6LCD55So77yM5Yid5aeL5YyW5omA5pyJ55qE57uE5Lu2XG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIGluaXQgKGNvbmZpZykge1xuICAgIGlmICh0aGlzLl9pbml0ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBmb3IgKGxldCB0YWcgaW4gdGhpcy5fY2xzTWFwKSB7XG4gICAgICAvLyBpZiBub3QgaW5pdGVkLCBpbml0IGFuIGluc3RhbmNlXG4gICAgICBpZiAodGhpcy5fY2xzTWFwLmhhc093blByb3BlcnR5KHRhZykgJiYgIXRoaXMuX2luc3RhbmNlTWFwW3RhZ10pIHtcbiAgICAgICAgdGhpcy5pbml0SW5zdGFuY2UodGFnLCBjb25maWcpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2luaXRlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiDms6jlhozkuIDkuKrkuIrkuIvmlofmtYHnqIvvvIzmj5DkvpvlronlhajnmoTkuovku7blj5HpgIHmnLrliLZcbiAgICogQHBhcmFtIHRhZ1xuICAgKiBAcGFyYW0gY2xzXG4gICAqL1xuICByZWdpc3RyeSAodGFnLCBjbHMpIHtcbiAgICBjb25zdCBlbWl0dGVyID0gdGhpcy5fZW1pdHRlclxuICAgIGNvbnN0IGNoZWNrTWVzc2FnZU5hbWUgPSB0aGlzLl9pc01lc3NhZ2VOYW1lVmFsaWQuYmluZCh0aGlzKVxuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgY29uc3QgZW5oYW5jZWQgPSBjbGFzcyBleHRlbmRzIGNscyB7XG4gICAgICBjb25zdHJ1Y3RvciAoLi4uYXJncykge1xuICAgICAgICBzdXBlciguLi5hcmdzKVxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9XG4gICAgICAgIHRoaXMub25jZUxpc3RlbmVycyA9IHt9XG4gICAgICAgIHRoaXMuVEFHID0gdGFnXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBzZWxmXG4gICAgICB9XG5cbiAgICAgIG9uIChtZXNzYWdlTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcblxuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnNbbWVzc2FnZU5hbWVdKSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbbWVzc2FnZU5hbWVdLnB1c2goY2FsbGJhY2spXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW5lcnNbbWVzc2FnZU5hbWVdID0gW2NhbGxiYWNrXVxuICAgICAgICB9XG5cbiAgICAgICAgZW1pdHRlci5vbihgJHttZXNzYWdlTmFtZX0ke0RJUkVDVF9FTUlUX0ZMQUd9JHt0YWd9YCwgY2FsbGJhY2spIC8vIOW7uueri+WumuWQkemAmuS/oeebkeWQrFxuICAgICAgICByZXR1cm4gZW1pdHRlci5vbihtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICog5Zyo5p+Q5Liq5LqL5Lu26Kem5Y+R5YmN5omn6KGMXG4gICAgICAgKiBAcGFyYW0gbWVzc2FnZU5hbWVcbiAgICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAgICovXG4gICAgICBiZWZvcmUgKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuICAgICAgICBpZiAoc2VsZi5faG9va3NbbWVzc2FnZU5hbWVdKSB7XG4gICAgICAgICAgc2VsZi5faG9va3NbbWVzc2FnZU5hbWVdLnB1c2goY2FsbGJhY2spXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5faG9va3NbbWVzc2FnZU5hbWVdID0gW2NhbGxiYWNrXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG9uY2UgKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuXG4gICAgICAgIGlmICh0aGlzLm9uY2VMaXN0ZW5lcnNbbWVzc2FnZU5hbWVdKSB7XG4gICAgICAgICAgdGhpcy5vbmNlTGlzdGVuZXJzW21lc3NhZ2VOYW1lXS5wdXNoKGNhbGxiYWNrKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25jZUxpc3RlbmVyc1ttZXNzYWdlTmFtZV0gPSBbY2FsbGJhY2tdXG4gICAgICAgIH1cblxuICAgICAgICBlbWl0dGVyLm9uY2UoYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIGNhbGxiYWNrKVxuICAgICAgICByZXR1cm4gZW1pdHRlci5vbmNlKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaylcbiAgICAgIH1cblxuICAgICAgZW1pdCAobWVzc2FnZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgY2hlY2tNZXNzYWdlTmFtZShtZXNzYWdlTmFtZSlcblxuICAgICAgICBjb25zdCBiZWZvcmVMaXN0ID0gc2VsZi5faG9va3MgPyBzZWxmLl9ob29rc1ttZXNzYWdlTmFtZV0gOiBudWxsXG5cbiAgICAgICAgaWYgKGJlZm9yZUxpc3QpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYmVmb3JlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBiZWZvcmVMaXN0W2ldXG4gICAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbWl0dGVyLmVtaXQobWVzc2FnZU5hbWUsIC4uLmFyZ3MpXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICog5a6a5ZCR5Y+R6YCB57uZ5p+Q5Liq57uE5Lu25Y2V5L6L55qE5raI5oGvXG4gICAgICAgKiBAcGFyYW0gbWVzc2FnZU5hbWVcbiAgICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICAgKi9cbiAgICAgIGVtaXRUbyAodGFnLCBtZXNzYWdlTmFtZSwgLi4uYXJncykge1xuICAgICAgICBjaGVja01lc3NhZ2VOYW1lKG1lc3NhZ2VOYW1lKVxuXG4gICAgICAgIHJldHVybiBlbWl0dGVyLmVtaXQoYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIC4uLmFyZ3MpXG4gICAgICB9XG5cbiAgICAgIG9mZiAobWVzc2FnZU5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGNoZWNrTWVzc2FnZU5hbWUobWVzc2FnZU5hbWUpXG4gICAgICAgIHJldHVybiBlbWl0dGVyLm9mZihtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZUxpc3RlbmVycyAoKSB7XG4gICAgICAgIGNvbnN0IGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZCh0aGlzLmxpc3RlbmVycylcblxuICAgICAgICBmb3IgKGxldCBtZXNzYWdlTmFtZSBpbiB0aGlzLmxpc3RlbmVycykge1xuICAgICAgICAgIGlmIChoYXNPd24obWVzc2FnZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLmxpc3RlbmVyc1ttZXNzYWdlTmFtZV0gfHwgW11cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gY2FsbGJhY2tzW2ldXG4gICAgICAgICAgICAgIGVtaXR0ZXIub2ZmKG1lc3NhZ2VOYW1lLCBjYWxsYmFjaylcbiAgICAgICAgICAgICAgZW1pdHRlci5vZmYoYCR7bWVzc2FnZU5hbWV9JHtESVJFQ1RfRU1JVF9GTEFHfSR7dGFnfWAsIGNhbGxiYWNrKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IG1lc3NhZ2VOYW1lIGluIHRoaXMub25jZUxpc3RlbmVycykge1xuICAgICAgICAgIGlmIChoYXNPd24obWVzc2FnZU5hbWUpKSB7XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLm9uY2VMaXN0ZW5lcnNbbWVzc2FnZU5hbWVdIHx8IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGNhbGxiYWNrc1tpXVxuICAgICAgICAgICAgICBlbWl0dGVyLm9mZihtZXNzYWdlTmFtZSwgY2FsbGJhY2spXG4gICAgICAgICAgICAgIGVtaXR0ZXIub2ZmKGAke21lc3NhZ2VOYW1lfSR7RElSRUNUX0VNSVRfRkxBR30ke3RhZ31gLCBjYWxsYmFjaylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiDlnKjnu4Tku7bplIDmr4Hml7bvvIzpu5jorqTlsIblroPms6jlhoznmoTkuovku7blhajpg6jljbjovb3vvIznoa7kv53kuI3kvJrpgKDmiJDlhoXlrZjms4TmvI9cbiAgICAgICAqL1xuICAgICAgZGVzdHJveSAoKSB7XG4gICAgICAgIC8vIHN0ZXAxIHVubGlzdGVuIGV2ZW50c1xuICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0ge31cblxuICAgICAgICAvLyBzdGVwMiByZWxlYXNlIGZyb20gY29udGV4dFxuICAgICAgICBkZWxldGUgc2VsZi5faW5zdGFuY2VNYXBbdGFnXVxuICAgICAgICBpZiAoc3VwZXIuZGVzdHJveSkge1xuICAgICAgICAgIHJldHVybiBzdXBlci5kZXN0cm95KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jbHNNYXBbdGFnXSA9IGVuaGFuY2VkXG5cbiAgICAvKipcbiAgICAgKiBnZXQgaW5zdGFuY2UgaW1tZWRpYXRlbHlcbiAgICAgKiBlLmcgY29uc3QgaW5zdGFuY2UgPSBjb250ZXh0LnJlZ2lzdHJ5KHRhZywgQ2xzKShjb25maWcpXG4gICAgICogKi9cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRJbnN0YW5jZSh0YWcsIC4uLmFyZ3MpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIOWvueWtmOWcqOeahOWunuS+i+i/m+ihjFxuICAgKi9cbiAgZGVzdHJveUluc3RhbmNlcyAoKSB7XG4gICAgT2JqZWN0LmtleXModGhpcy5faW5zdGFuY2VNYXApLmZvckVhY2goKHRhZykgPT4ge1xuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlTWFwW3RhZ10uZGVzdHJveSkge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZU1hcFt0YWddLmRlc3Ryb3koKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICog57yW6Kej56CB5rWB56iL5peg6ZyA5YWz5rOo5LqL5Lu255qE6Kej57uRXG4gICAqL1xuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLl9lbWl0dGVyID0gbnVsbFxuICAgIHRoaXMuYWxsb3dlZEV2ZW50cyA9IFtdXG4gICAgdGhpcy5fY2xzTWFwID0gbnVsbFxuICAgIHRoaXMuX2NvbnRleHQgPSBudWxsXG4gICAgdGhpcy5faG9va3MgPSBudWxsXG4gICAgdGhpcy5kZXN0cm95SW5zdGFuY2VzKClcbiAgfVxuXG4gIC8qKlxuICAgKiDlr7nkv6HpgZPov5vooYzmlLbmi6JcbiAgICogQHBhcmFtIG1lc3NhZ2VOYW1lXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfaXNNZXNzYWdlTmFtZVZhbGlkIChtZXNzYWdlTmFtZSkge1xuICAgIGlmICghdGhpcy5hbGxvd2VkRXZlbnRzLmluZGV4T2YobWVzc2FnZU5hbWUpIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB1bnJlZ2lzdGVyZWQgbWVzc2FnZSBuYW1lOiAke21lc3NhZ2VOYW1lfWApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRleHRcbiIsImltcG9ydCBFVkVOVFMgZnJvbSAnLi4vY29uc3RhbnRzL2V2ZW50cyc7XG5jb25zdCBDUllUT19FVkVOVFMgPSBFVkVOVFMuQ1JZVE9fRVZFTlRTXG5jbGFzcyBDcnlwdG8ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgICAgICB0aGlzLmlucHV0QnVmZmVyID0gY29uZmlnLmlucHV0YnVmZmVyO1xuICAgICAgICB0aGlzLm91dHB1dEJ1ZmZlciA9IGNvbmZpZy5vdXRwdXRidWZmZXI7XG4gICAgICAgIHRoaXMua2V5ID0gY29uZmlnLmtleTtcbiAgICAgICAgdGhpcy5pdiA9IGNvbmZpZy5pdjtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBjb25maWcubWV0aG9kO1xuXG4gICAgICAgIHRoaXMuY3J5cHRvID0gIHdpbmRvdy5jcnlwdG8gfHwgd2luZG93Lm1zQ3J5cHRvXG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5vbihDUllUT19FVkVOVFMuU1RBUlRfREVDUllQVCwgdGhpcy5kZWNyaXB0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBcbiAgICBkZWNyaXB0KCkge1xuICAgICAgICBpZighdGhpcy5hZXNrZXkpIHtcbiAgICAgICAgICAgIGxldCBzYmtleSA9IHRoaXMuY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoJ3JhdycsIHRoaXMua2V5LmJ1ZmZlciwgeyBuYW1lOiAnQUVTLUNCQycgfSwgZmFsc2UsIFsnZW5jcnlwdCcsICdkZWNyeXB0J10pO1xuICAgICAgICAgICAgc2JrZXkudGhlbihrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWVza2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIHRoaXMuZGVjcmlwdERhdGEoKTtcbiAgICAgICAgICAgIH0pIFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZWNyaXB0RGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjcmlwdERhdGEoKSB7XG4gICAgICAgIGxldCBpbnB1dGJ1ZmZlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UodGhpcy5pbnB1dEJ1ZmZlcik7XG4gICAgICAgIGxldCBvdXRwdXRidWZmZXIgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKHRoaXMub3V0cHV0QnVmZmVyKTtcbiAgICAgICAgbGV0IGRhdGEgPSBpbnB1dGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICBpZihkYXRhKSB7XG4gICAgICAgICAgICB0aGlzLmNyeXB0by5zdWJ0bGUuZGVjcnlwdCh7IG5hbWU6ICdBRVMtQ0JDJywgaXY6IHRoaXMuaXYuYnVmZmVyIH0sIHRoaXMuYWVza2V5LCBkYXRhKS50aGVuKHJlcz0+e1xuICAgICAgICAgICAgICAgIG91dHB1dGJ1ZmZlci5wdXNoKG5ldyBVaW50OEFycmF5KHJlcykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdChDUllUT19FVkVOVFMuREVDUllQVEVEKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3JpcHREYXRhKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBDcnlwdG87IiwiaW1wb3J0IEV2ZW50cyBmcm9tICcuLi9jb25zdGFudHMvZXZlbnRzJ1xuY29uc3QgQlJPV1NFUl9FVkVOVFMgPSBFdmVudHMuQlJPV1NFUl9FVkVOVFNcblxubGV0IGhpZGRlbjtcbmxldCB2aXNpYmlsaXR5Q2hhbmdlO1xuaWYgKHR5cGVvZiBkb2N1bWVudC5oaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7IC8vIE9wZXJhIDEyLjEwIGFuZCBGaXJlZm94IDE4IGFuZCBsYXRlciBzdXBwb3J0XG4gIGhpZGRlbiA9ICdoaWRkZW4nO1xuICB2aXNpYmlsaXR5Q2hhbmdlID0gJ3Zpc2liaWxpdHljaGFuZ2UnO1xufSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnQubXNIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XG4gIGhpZGRlbiA9ICdtc0hpZGRlbic7XG4gIHZpc2liaWxpdHlDaGFuZ2UgPSAnbXN2aXNpYmlsaXR5Y2hhbmdlJztcbn0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50LndlYmtpdEhpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaGlkZGVuID0gJ3dlYmtpdEhpZGRlbic7XG4gIHZpc2liaWxpdHlDaGFuZ2UgPSAnd2Via2l0dmlzaWJpbGl0eWNoYW5nZSc7XG59XG5cbmNsYXNzIFBhZ2VWaXNpYmlsaXR5IHtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7XG4gICAgICBvblNob3c6IFtdLFxuICAgICAgb25IaWRkZW46IFtdXG4gICAgfVxuICAgIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSA9IHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbml0KCk7XG4gIH1cblxuICBpbml0ICgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHZpc2liaWxpdHlDaGFuZ2UsIHRoaXMuaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuICB9XG5cbiAgaGFuZGxlVmlzaWJpbGl0eUNoYW5nZSAoKSB7XG4gICAgdGhpcy5lbWl0KEJST1dTRVJfRVZFTlRTLlZJU0lCSUxJVFlfQ0hBTkdFLCBkb2N1bWVudFtoaWRkZW5dKVxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih2aXNpYmlsaXR5Q2hhbmdlLCB0aGlzLmhhbmRsZVZpc2liaWxpdHlDaGFuZ2UpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGFnZVZpc2liaWxpdHk7XG4iLCJjb25zdCBsZSA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcigyKTtcbiAgKG5ldyBEYXRhVmlldyhidWYpKS5zZXRJbnQxNigwLCAyNTYsIHRydWUpIC8vIGxpdHRsZS1lbmRpYW4gd3JpdGVcbiAgcmV0dXJuIChuZXcgSW50MTZBcnJheShidWYpKVswXSA9PT0gMjU2IC8vIHBsYXRmb3JtLXNwZWMgcmVhZCwgaWYgZXF1YWwgdGhlbiBMRVxufSkoKVxuXG5leHBvcnQgZGVmYXVsdCBsZVxuIiwiY29uc3QgbGUgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCBidWYgPSBuZXcgQXJyYXlCdWZmZXIoMik7XG4gIChuZXcgRGF0YVZpZXcoYnVmKSkuc2V0SW50MTYoMCwgMjU2LCB0cnVlKSAvLyBsaXR0bGUtZW5kaWFuIHdyaXRlXG4gIHJldHVybiAobmV3IEludDE2QXJyYXkoYnVmKSlbMF0gPT09IDI1NiAvLyBwbGF0Zm9ybS1zcGVjIHJlYWQsIGlmIGVxdWFsIHRoZW4gTEVcbn0pKClcblxuY29uc3Qgc25pZmZlciA9IHtcbiAgZ2V0IGRldmljZSAoKSB7XG4gICAgbGV0IHIgPSBzbmlmZmVyLm9zO1xuICAgIHJldHVybiByLmlzUGMgPyAncGMnIDogci5pc1RhYmxldCA/ICd0YWJsZXQnIDogJ21vYmlsZSc7XG4gIH0sXG4gIGdldCBicm93c2VyICgpIHtcbiAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHJlZyA9IHtcbiAgICAgIGllOiAvcnY6KFtcXGQuXSspXFwpIGxpa2UgZ2Vja28vLFxuICAgICAgZmlyZm94OiAvZmlyZWZveFxcLyhbXFxkLl0rKS8sXG4gICAgICBjaHJvbWU6IC9jaHJvbWVcXC8oW1xcZC5dKykvLFxuICAgICAgb3BlcmE6IC9vcGVyYS4oW1xcZC5dKykvLFxuICAgICAgc2FmYXJpOiAvdmVyc2lvblxcLyhbXFxkLl0rKS4qc2FmYXJpL1xuICAgIH07XG4gICAgcmV0dXJuIFtdLmNvbmNhdChPYmplY3Qua2V5cyhyZWcpLmZpbHRlcihrZXkgPT4gcmVnW2tleV0udGVzdCh1YSkpKVswXTtcbiAgfSxcbiAgZ2V0IG9zICgpIHtcbiAgICBsZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgbGV0IGlzV2luZG93c1Bob25lID0gLyg/OldpbmRvd3MgUGhvbmUpLy50ZXN0KHVhKVxuICAgIGxldCBpc1N5bWJpYW4gPSAvKD86U3ltYmlhbk9TKS8udGVzdCh1YSkgfHwgaXNXaW5kb3dzUGhvbmU7XG4gICAgbGV0IGlzQW5kcm9pZCA9IC8oPzpBbmRyb2lkKS8udGVzdCh1YSk7XG4gICAgbGV0IGlzRmlyZUZveCA9IC8oPzpGaXJlZm94KS8udGVzdCh1YSk7XG4gICAgbGV0IGlzVGFibGV0ID0gLyg/OmlQYWR8UGxheUJvb2spLy50ZXN0KHVhKSB8fCAoaXNBbmRyb2lkICYmICEvKD86TW9iaWxlKS8udGVzdCh1YSkpIHx8IChpc0ZpcmVGb3ggJiYgLyg/OlRhYmxldCkvLnRlc3QodWEpKTtcbiAgICBsZXQgaXNQaG9uZSA9IC8oPzppUGhvbmUpLy50ZXN0KHVhKSAmJiAhaXNUYWJsZXQ7XG4gICAgbGV0IGlzUGMgPSAhaXNQaG9uZSAmJiAhaXNBbmRyb2lkICYmICFpc1N5bWJpYW47XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzVGFibGV0LFxuICAgICAgaXNQaG9uZSxcbiAgICAgIGlzQW5kcm9pZCxcbiAgICAgIGlzUGMsXG4gICAgICBpc1N5bWJpYW4sXG4gICAgICBpc1dpbmRvd3NQaG9uZSxcbiAgICAgIGlzRmlyZUZveFxuICAgIH07XG4gIH0sXG5cbiAgZ2V0IGlzTGUgKCkge1xuICAgIHJldHVybiBsZVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzbmlmZmVyO1xuIiwiY2xhc3MgVVRGOCB7XG4gIHN0YXRpYyBkZWNvZGUgKHVpbnQ4YXJyYXkpIHtcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBjb25zdCBpbnB1dCA9IHVpbnQ4YXJyYXk7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGxlbmd0aCA9IHVpbnQ4YXJyYXkubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgIGlmIChpbnB1dFtpXSA8IDB4ODApIHtcbiAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShpbnB1dFtpXSkpO1xuICAgICAgICArK2k7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4QzApIHtcbiAgICAgICAgLy8gZmFsbHRocm91Z2hcbiAgICAgIH0gZWxzZSBpZiAoaW5wdXRbaV0gPCAweEUwKSB7XG4gICAgICAgIGlmIChVVEY4Ll9jaGVja0NvbnRpbnVhdGlvbihpbnB1dCwgaSwgMSkpIHtcbiAgICAgICAgICBjb25zdCB1Y3M0ID0gKGlucHV0W2ldICYgMHgxRikgPDwgNiB8IChpbnB1dFtpICsgMV0gJiAweDNGKTtcbiAgICAgICAgICBpZiAodWNzNCA+PSAweDgwKSB7XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHVjczQgJiAweEZGRkYpKTtcbiAgICAgICAgICAgIGkgKz0gMjtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RjApIHtcbiAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAyKSkge1xuICAgICAgICAgIGNvbnN0IHVjczQgPSAoaW5wdXRbaV0gJiAweEYpIDw8IDEyIHwgKGlucHV0W2kgKyAxXSAmIDB4M0YpIDw8IDYgfCBpbnB1dFtpICsgMl0gJiAweDNGO1xuICAgICAgICAgIGlmICh1Y3M0ID49IDB4ODAwICYmICh1Y3M0ICYgMHhGODAwKSAhPT0gMHhEODAwKSB7XG4gICAgICAgICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKHVjczQgJiAweEZGRkYpKTtcbiAgICAgICAgICAgIGkgKz0gMztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbnB1dFtpXSA8IDB4RjgpIHtcbiAgICAgICAgaWYgKFVURjguX2NoZWNrQ29udGludWF0aW9uKGlucHV0LCBpLCAzKSkge1xuICAgICAgICAgIGxldCB1Y3M0ID0gKGlucHV0W2ldICYgMHg3KSA8PCAxOCB8IChpbnB1dFtpICsgMV0gJiAweDNGKSA8PCAxMiB8XG4gICAgICAgICAgICAgICAgICAgIChpbnB1dFtpICsgMl0gJiAweDNGKSA8PCA2IHwgKGlucHV0W2kgKyAzXSAmIDB4M0YpO1xuICAgICAgICAgIGlmICh1Y3M0ID4gMHgxMDAwMCAmJiB1Y3M0IDwgMHgxMTAwMDApIHtcbiAgICAgICAgICAgIHVjczQgLT0gMHgxMDAwMDtcbiAgICAgICAgICAgIG91dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKHVjczQgPj4+IDEwKSB8IDB4RDgwMCkpO1xuICAgICAgICAgICAgb3V0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgodWNzNCAmIDB4M0ZGKSB8IDB4REMwMCkpO1xuICAgICAgICAgICAgaSArPSA0O1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBvdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkpO1xuICAgICAgKytpO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQuam9pbignJyk7XG4gIH1cblxuICBzdGF0aWMgX2NoZWNrQ29udGludWF0aW9uICh1aW50OGFycmF5LCBzdGFydCwgY2hlY2tMZW5ndGgpIHtcbiAgICBsZXQgYXJyYXkgPSB1aW50OGFycmF5O1xuICAgIGlmIChzdGFydCArIGNoZWNrTGVuZ3RoIDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICB3aGlsZSAoY2hlY2tMZW5ndGgtLSkge1xuICAgICAgICBpZiAoKGFycmF5Wysrc3RhcnRdICYgMHhDMCkgIT09IDB4ODApIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVURjg7XG4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cydcbmNsYXNzIEF1ZGlvQ3R4IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICAgIGxldCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4gICAgdGhpcy5jb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZ2Fpbk5vZGUuY29ubmVjdCh0aGlzLmNvbnRleHQuZGVzdGluYXRpb24pO1xuICAgIHRoaXMubWV0YSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNhbXBsZXMgPSBbXTtcbiAgICB0aGlzLnByZWxvYWRUaW1lID0gdGhpcy5jb25maWcucHJlbG9hZFRpbWUgfHwgMC41O1xuICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuXG4gICAgdGhpcy5fY3VycmVudEJ1ZmZlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9uZXh0QnVmZmVyID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xhc3RwdHMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJlRGVjb2RlID0gW107XG4gICAgdGhpcy5fY3VycmVudFRpbWUgPSAwO1xuICAgIHRoaXMuX2RlY29kaW5nID0gZmFsc2U7XG4gICAgdGhpcy5fdm9sdW1lID0gdGhpcy5jb25maWcudm9sdW1lIHx8IDAuNlxuICAgIC8vIOiusOW9leWklumDqOS8oOi+k+eahOeKtuaAgVxuICAgIHRoaXMuX3BsYXllZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRUaW1lICgpIHtcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFRpbWU7XG4gIH1cblxuICBkZWNvZGVBdWRpbyAoYXVkaW9UcmFjaykge1xuICAgIGxldCB7c2FtcGxlc30gPSBhdWRpb1RyYWNrO1xuICAgIGxldCBkYXRhID0gc2FtcGxlcztcbiAgICBhdWRpb1RyYWNrLnNhbXBsZXMgPSBbXTtcbiAgICB0aGlzLnNldEF1ZGlvRGF0YShkYXRhKTtcbiAgfVxuICBzZXRBdWRpb0RhdGEgKGRhdGEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFbaV0ucHRzID0gKGRhdGFbaV0ucHRzID09PSB1bmRlZmluZWQpID8gZGF0YVtpXS5kdHMgOiBkYXRhW2ldLnB0cztcbiAgICAgIHRoaXMuX3ByZURlY29kZS5wdXNoKGRhdGFbaV0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcHJlRGVjb2RlLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLl9sYXN0cHRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fbGFzdHB0cyA9IHRoaXMuX3ByZURlY29kZVswXS5wdHM7XG4gICAgICB9XG4gICAgICBpZiAoKHRoaXMuX3ByZURlY29kZVt0aGlzLl9wcmVEZWNvZGUubGVuZ3RoIC0gMV0ucHRzIC0gdGhpcy5fbGFzdHB0cykgLyAxMDAwID4gdGhpcy5wcmVsb2FkVGltZSkge1xuICAgICAgICB0aGlzLmRlY29kZUFBQygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGRlY29kZUFBQyAoKSB7XG4gICAgaWYgKHRoaXMuX2RlY29kaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2RlY29kaW5nID0gdHJ1ZTtcbiAgICBsZXQgZGF0YSA9IHRoaXMuX3ByZURlY29kZTtcbiAgICBsZXQgc2FtcGxlcyA9IFtdO1xuICAgIGxldCBfdGhpcyA9IHRoaXM7XG4gICAgbGV0IHNhbXBsZSA9IGRhdGEuc2hpZnQoKTtcbiAgICB3aGlsZSAoc2FtcGxlKSB7XG4gICAgICBsZXQgc2FtcGxlRGF0YSA9IEF1ZGlvQ3R4LmdldEFBQ0RhdGEodGhpcy5tZXRhLCBzYW1wbGUpXG4gICAgICBzYW1wbGVzLnB1c2goc2FtcGxlRGF0YSk7XG4gICAgICB0aGlzLl9sYXN0cHRzID0gc2FtcGxlLnB0cztcbiAgICAgIHNhbXBsZSA9IGRhdGEuc2hpZnQoKVxuICAgIH1cbiAgICBsZXQgYnVmZmVyID0gQXVkaW9DdHguY29tYmlsZURhdGEoc2FtcGxlcyk7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyLmJ1ZmZlciwgZnVuY3Rpb24gKGJ1ZmZlcikge1xuICAgICAgICBsZXQgYXVkaW9Tb3VyY2UgPSBfdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICBhdWRpb1NvdXJjZS5idWZmZXIgPSBidWZmZXI7XG4gICAgICAgIGF1ZGlvU291cmNlLm9uZW5kZWQgPSBfdGhpcy5vblNvdXJjZUVuZGVkLmJpbmQoX3RoaXMpO1xuICAgICAgICBfdGhpcy5zYW1wbGVzLnB1c2goe1xuICAgICAgICAgIHRpbWU6IF90aGlzLmR1cmF0aW9uLFxuICAgICAgICAgIGR1cmF0aW9uOiBidWZmZXIuZHVyYXRpb24sXG4gICAgICAgICAgZGF0YTogYXVkaW9Tb3VyY2VcbiAgICAgICAgfSlcblxuICAgICAgICBfdGhpcy5kdXJhdGlvbiArPSBidWZmZXIuZHVyYXRpb247XG5cbiAgICAgICAgaWYgKCFfdGhpcy5fY3VycmVudEJ1ZmZlcikge1xuICAgICAgICAgIF90aGlzLl9jdXJyZW50QnVmZmVyID0gX3RoaXMuZ2V0VGltZUJ1ZmZlcihfdGhpcy5jdXJyZW50VGltZSk7XG5cbiAgICAgICAgICBpZiAoX3RoaXMuX3BsYXllZCkge1xuICAgICAgICAgICAgX3RoaXMucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghX3RoaXMuX25leHRCdWZmZXIgJiYgX3RoaXMuX2N1cnJlbnRCdWZmZXIpIHtcbiAgICAgICAgICBfdGhpcy5fbmV4dEJ1ZmZlciA9IF90aGlzLmdldFRpbWVCdWZmZXIoX3RoaXMuY3VycmVudFRpbWUgKyBfdGhpcy5fY3VycmVudEJ1ZmZlci5kdXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuX2RlY29kaW5nID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKChfdGhpcy5fcHJlRGVjb2RlLmxlbmd0aCA+IDAgJiYgX3RoaXMuX3ByZURlY29kZVtfdGhpcy5fcHJlRGVjb2RlLmxlbmd0aCAtIDFdLnB0cyAtIF90aGlzLl9sYXN0cHRzKSAvIDEwMDAgPj0gX3RoaXMucHJlbG9hZFRpbWUpIHtcbiAgICAgICAgICBfdGhpcy5kZWNvZGVBQUMoKTtcbiAgICAgICAgfVxuICAgICAgfSwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cblxuICBvblNvdXJjZUVuZGVkICgpIHtcbiAgICBpZiAoIXRoaXMuX25leHRCdWZmZXIgfHwgIXRoaXMuX3BsYXllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLl9uZXh0QnVmZmVyLmRhdGE7XG4gICAgYXVkaW9Tb3VyY2Uuc3RhcnQoKTtcbiAgICBhdWRpb1NvdXJjZS5jb25uZWN0KHRoaXMuZ2Fpbk5vZGUpO1xuICAgIHRoaXMuX2N1cnJlbnRCdWZmZXIgPSB0aGlzLl9uZXh0QnVmZmVyO1xuICAgIHRoaXMuX2N1cnJlbnRUaW1lID0gdGhpcy5fY3VycmVudEJ1ZmZlci50aW1lO1xuICAgIHRoaXMuX25leHRCdWZmZXIgPSB0aGlzLmdldFRpbWVCdWZmZXIodGhpcy5jdXJyZW50VGltZSk7XG4gICAgaWYgKHRoaXMuX2N1cnJlbnRCdWZmZXIpIHtcbiAgICAgIHRoaXMuX25leHRCdWZmZXIgPSB0aGlzLmdldFRpbWVCdWZmZXIodGhpcy5jdXJyZW50VGltZSArIHRoaXMuX2N1cnJlbnRCdWZmZXIuZHVyYXRpb24pO1xuICAgIH1cbiAgICB0aGlzLmVtaXQoJ0FVRElPX1NPVVJDRV9FTkQnKVxuICB9XG5cbiAgcGxheSAoKSB7XG4gICAgdGhpcy5fcGxheWVkID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuX2N1cnJlbnRCdWZmZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgYXVkaW9Tb3VyY2UgPSB0aGlzLl9jdXJyZW50QnVmZmVyLmRhdGE7XG4gICAgYXVkaW9Tb3VyY2UuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICBhdWRpb1NvdXJjZS5zdGFydCgpO1xuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIGNvbnN0IGF1ZGlvQ3R4ID0gdGhpcy5jb250ZXh0O1xuICAgIGlmIChhdWRpb0N0eC5zdGF0ZSA9PT0gJ3J1bm5pbmcnKSB7XG4gICAgICBhdWRpb0N0eC5zdXNwZW5kKClcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmNvbnRleHQuY2xvc2UoKTtcbiAgfVxuXG4gIGdldFRpbWVCdWZmZXIgKHRpbWUpIHtcbiAgICBsZXQgcmV0O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zYW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgc2FtcGxlID0gdGhpcy5zYW1wbGVzW2ldXG4gICAgICBpZiAoc2FtcGxlLnRpbWUgPD0gdGltZSAmJiAoc2FtcGxlLnRpbWUgKyBzYW1wbGUuZHVyYXRpb24pID4gdGltZSkge1xuICAgICAgICByZXQgPSBzYW1wbGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgc2V0QXVkaW9NZXRhRGF0YSAobWV0YSkge1xuICAgIHRoaXMubWV0YSA9IG1ldGE7XG4gIH1cblxuICBzZXQgbXV0ZWQgKHZhbCkge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi52YWx1ZSA9IDBcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gdGhpcy5fdm9sdW1lXG4gICAgfVxuICB9XG5cbiAgZ2V0IHZvbHVtZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZvbHVtZVxuICB9XG5cbiAgc2V0IHZvbHVtZSAodmFsKSB7XG4gICAgaWYgKHZhbCA8IDApIHtcbiAgICAgIHRoaXMuX3ZvbHVtZSA9IDA7XG4gICAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSAwXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmICh2YWwgPiAxKSB7XG4gICAgICB0aGlzLl92b2x1bWUgPSAxO1xuICAgICAgdGhpcy5nYWluTm9kZS5nYWluLnZhbHVlID0gMVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3ZvbHVtZSA9IHZhbDtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4udmFsdWUgPSB2YWxcbiAgfVxuXG4gIHN0YXRpYyBnZXRBQUNEYXRhIChtZXRhLCBzYW1wbGUpIHtcbiAgICBsZXQgYnVmZmVyID0gbmV3IFVpbnQ4QXJyYXkoc2FtcGxlLmRhdGEuYnl0ZUxlbmd0aCArIDcpO1xuICAgIGxldCBhZHRzID0gQXVkaW9DdHguZ2V0QWR0cyhtZXRhLCBzYW1wbGUuZGF0YSk7XG4gICAgYnVmZmVyLnNldChhZHRzKTtcbiAgICBidWZmZXIuc2V0KHNhbXBsZS5kYXRhLCA3KTtcbiAgICByZXR1cm4gYnVmZmVyO1xuICB9XG5cbiAgc3RhdGljIGNvbWJpbGVEYXRhIChzYW1wbGVzKSB7XG4gICAgLy8gZ2V0IGxlbmd0aFxuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gc2FtcGxlcy5sZW5ndGg7IGkgPCBrOyBpKyspIHtcbiAgICAgIGxlbmd0aCArPSBzYW1wbGVzW2ldLmJ5dGVMZW5ndGg7XG4gICAgfVxuXG4gICAgbGV0IHJldCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aCk7XG4gICAgbGV0IG9mZnNldCA9IDA7XG4gICAgLy8gY29tYmlsZSBkYXRhO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gc2FtcGxlcy5sZW5ndGg7IGkgPCBrOyBpKyspIHtcbiAgICAgIHJldC5zZXQoc2FtcGxlc1tpXSwgb2Zmc2V0KTtcbiAgICAgIG9mZnNldCArPSBzYW1wbGVzW2ldLmJ5dGVMZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBzdGF0aWMgZ2V0QWR0cyAobWV0YSwgZGF0YSkge1xuICAgIGxldCBhZHRzID0gbmV3IFVpbnQ4QXJyYXkoNyk7XG5cbiAgICAvLyDorr7nva7lkIzmraXkvY0gMHhmZmYgMTJiaXRcbiAgICBhZHRzWzBdID0gMHhmZjtcbiAgICBhZHRzWzFdID0gMHhmMDtcblxuICAgIC8vIE9iamVjdCBkYXRhICjmsqHku4DkuYjkurrnlKhNUEVHLTLkuobvvIxITFPlkoxGTFbkuZ/lhajmmK9NUEVHLTTvvIzov5nph4znm7TmjqUwKSAgMWJpdFxuICAgIC8vIExldmVsIGFsd2F5cyAwMCAyYml0XG4gICAgLy8gQ1JDIGFsd2F5cyAxIDFiaXRcbiAgICBhZHRzWzFdID0gYWR0c1sxXSB8IDB4MDE7XG5cbiAgICAvLyBwcm9maWxlIDJiaXRcbiAgICBhZHRzWzJdID0gMHhjMCAmICgobWV0YS5vYmplY3RUeXBlIC0gMSkgPDwgNik7XG5cbiAgICAvLyBzYW1wbGVGcmVxdWVuY3lJbmRleFxuICAgIGFkdHNbMl0gPSBhZHRzWzJdIHwgKDB4M2MgJiAobWV0YS5zYW1wbGVSYXRlSW5kZXggPDwgMikpXG5cbiAgICAvLyBwcml2YXRlIGJpdCAwIDFiaXRcbiAgICAvLyBjaGFuZWwgY29uZmlndXJhdGlvbiAzYml0XG4gICAgYWR0c1syXSA9IGFkdHNbMl0gfCAoMHgwMSAmIG1ldGEuY2hhbm5lbENvdW50ID4+IDIpO1xuICAgIGFkdHNbM10gPSAweGMwICYgKG1ldGEuY2hhbm5lbENvdW50IDw8IDYpO1xuXG4gICAgLy8gb3JpZ2luYWxfY29weTogMCAxYml0XG4gICAgLy8gaG9tZTogMCAxYml0XG5cbiAgICAvLyBhZHRzX3ZhcmlhYmxlX2hlYWRlcigpXG4gICAgLy8gY29weXJpZ2h0ZWRfaWRfYml0IDAgMWJpdFxuICAgIC8vIGNvcHlyaWdodGVkX2lkX3N0YXJ0IDAgMWJpdFxuXG4gICAgLy8gYWFjX2ZyYW1lX2xlbmd0aCAxM2JpdDtcbiAgICBsZXQgYWFjZnJhbWVsZW5ndGggPSBkYXRhLmJ5dGVMZW5ndGggKyA3O1xuXG4gICAgYWR0c1szXSA9IGFkdHNbM10gfCAoMHgwMyAmIGFhY2ZyYW1lbGVuZ3RoID4+IDExKTtcbiAgICBhZHRzWzRdID0gMHhmZiAmIChhYWNmcmFtZWxlbmd0aCA+PiAzKTtcbiAgICBhZHRzWzVdID0gMHhlMCAmIChhYWNmcmFtZWxlbmd0aCA8PCA1KTtcblxuICAgIC8vIGFkdHNfYnVmZmVyX2Z1bGxuZXNzIDB4N2ZmIDExYml0XG4gICAgYWR0c1s1XSA9IGFkdHNbNV0gfCAweDFmXG4gICAgYWR0c1s2XSA9IDB4ZmM7XG5cbiAgICAvLyBudW1iZXJfb2ZfcmF3X2RhdGFfYmxvY2tzX2luX2ZyYW1lIDAgMmJpdDtcbiAgICByZXR1cm4gYWR0cztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb0N0eDtcbiIsImltcG9ydCBWaWRlb0N0eCBmcm9tICcuL3ZpZGVvLWNvbnRleHQnO1xuaW1wb3J0IEF1ZGlvQ3R4IGZyb20gJy4vYXVkaW8tY29udGV4dCc7XG5pbXBvcnQgeyBnZXRUaWNrZXIgfSBmcm9tICcuL3RpY2tlcic7XG4vKipcbiAqIOmfs+eUu+WQjOatpeiwg+WSjOWZqFxuICovXG5jbGFzcyBBVlJlY29uY2lsZXIge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICB0aGlzLmFDdHggPSBwcm9wcy5hQ3R4O1xuICAgIHRoaXMudkN0eCA9IHByb3BzLnZDdHg7XG4gICAgdGhpcy52aWRlbyA9IHByb3BzLnZpZGVvXG4gICAgdGhpcy50aW1lb3V0SWQgPSBudWxsXG4gICAgdGhpcy5zdGFydCA9IG51bGxcbiAgfVxuXG4gIGRvUmVjb25jaWxlICgpIHtcbiAgICBjb25zdCB2Q3VyVGltZSA9ICh0aGlzLnZDdHguY3VycmVudFRpbWUgfHwgMCk7XG4gICAgY29uc3QgYUN1clRpbWUgPSAodGhpcy5hQ3R4LmN1cnJlbnRUaW1lIHx8IDApICogMTAwMDtcblxuICAgIGNvbnN0IGdhcCA9IHZDdXJUaW1lIC0gYUN1clRpbWU7XG4gICAgaWYgKHRoaXMudGltZW91dElkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChnYXAgPiAyMDApIHsgLy8gYXVkaW8gZGVsYXllZCBmb3IgbW9yZSB0aGFuIDEwMG1zXG4gICAgICB0aGlzLnZpZGVvLnN0YXJ0ICs9IGdhcFxuICAgICAgdGhpcy52Q3R4LnBhdXNlKClcbiAgICAgIHRoaXMudGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMudkN0eC5wbGF5KClcbiAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBudWxsXG4gICAgICB9LCBnYXApXG4gICAgfSBlbHNlIGlmIChnYXAgPCAtMTIwKSB7XG4gICAgICB0aGlzLnZDdHguY3VycmVudFRpbWUgPSB0aGlzLnZDdHguY3VycmVudFRpbWUgKyBNYXRoLmFicyhnYXApO1xuICAgIH1cbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuc3RhcnQgPSBudWxsXG4gICAgdGhpcy5hQ3R4ID0gbnVsbFxuICAgIHRoaXMudkN0eCA9IG51bGxcbiAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbmNsYXNzIE1vYmlsZVZpZGVvIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKVxuICAgIHRoaXMuaGFuZGxlQXVkaW9Tb3VyY2VFbmQgPSB0aGlzLmhhbmRsZUF1ZGlvU291cmNlRW5kLmJpbmQodGhpcylcbiAgICB0aGlzLmluaXQoY29uZmlnKVxuICAgIHRoaXMucGxheWVkID0gZmFsc2U7XG4gICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIGluaXQgKGNvbmZpZykge1xuICAgIHRoaXMudkN0eCA9IG5ldyBWaWRlb0N0eCh7XG4gICAgICBjYW52YXM6IHRoaXMuX2NhbnZhc1xuICAgIH0pO1xuICAgIHRoaXMuYUN0eCA9IG5ldyBBdWRpb0N0eChjb25maWcpO1xuICAgIHRoaXMudGlja2VyID0gbmV3IChnZXRUaWNrZXIoKSkoKVxuICAgIHRoaXMucmVjb25jaWxlciA9IG5ldyBBVlJlY29uY2lsZXIoe1xuICAgICAgdkN0eDogdGhpcy52Q3R4LFxuICAgICAgYUN0eDogdGhpcy5hQ3R4LFxuICAgICAgdmlkZW86IHRoaXNcbiAgICB9KVxuICAgIHRoaXMudkN0eC5vbmNhbnBsYXkgPSAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucGxheWVkKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5fY2FudmFzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NhbnBsYXknKSk7XG4gICAgfVxuXG4gICAgdGhpcy50aWNrZXIuc3RhcnQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXJ0KSB7XG4gICAgICAgIHRoaXMuc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgICB9XG4gICAgICB0aGlzLl9jdXJyZW50VGltZSA9IERhdGUubm93KCkgLSB0aGlzLnN0YXJ0XG4gICAgICB0aGlzLnZDdHguX29uVGltZXIodGhpcy5fY3VycmVudFRpbWUpXG4gICAgfSlcblxuICAgIHRoaXMuYUN0eC5vbignQVVESU9fU09VUkNFX0VORCcsIHRoaXMuaGFuZGxlQXVkaW9Tb3VyY2VFbmQpXG4gIH1cblxuICBoYW5kbGVBdWRpb1NvdXJjZUVuZCAoKSB7XG4gICAgdGhpcy5yZWNvbmNpbGVyLmRvUmVjb25jaWxlKClcbiAgICB0aGlzLnZDdHguY2xlYW5CdWZmZXIoKTtcbiAgfVxuXG4gIF9jbGVhbkJ1ZmZlciAoKSB7XG4gICAgdGhpcy52Q3R4LmNsZWFuQnVmZmVyKClcbiAgfVxuXG4gIGRlc3Ryb3kgKCkge1xuICAgIHRoaXMuYUN0eC5kZXN0cm95KClcbiAgICB0aGlzLnZDdHguZGVzdHJveSgpXG4gICAgdGhpcy50aWNrZXIuc3RvcCgpXG4gICAgdGhpcy5zdGFydCA9IG51bGw7XG4gICAgdGhpcy5yZWNvbmNpbGVyLmRlc3Ryb3koKVxuICAgIHRoaXMuYUN0eCA9IG51bGw7XG4gICAgdGhpcy52Q3R4ID0gbnVsbDtcbiAgICB0aGlzLnRpY2tlciA9IG51bGw7XG4gIH1cblxuICBvbkRlbXV4Q29tcGxldGUgKHZpZGVvVHJhY2ssIGF1ZGlvVHJhY2spIHtcbiAgICB0aGlzLmFDdHguZGVjb2RlQXVkaW8oYXVkaW9UcmFjayk7XG4gICAgdGhpcy52Q3R4LmRlY29kZVZpZGVvKHZpZGVvVHJhY2spO1xuICB9XG5cbiAgc2V0QXVkaW9NZXRhIChtZXRhKSB7XG4gICAgdGhpcy5hQ3R4LnNldEF1ZGlvTWV0YURhdGEobWV0YSk7XG4gIH1cblxuICBzZXRWaWRlb01ldGEgKG1ldGEpIHtcbiAgICB0aGlzLnZDdHguc2V0VmlkZW9NZXRhRGF0YShtZXRhKTtcbiAgfVxuXG4gIGdldCB3aWR0aCAoKSB7XG4gICAgcmV0dXJuIHRoaXMudkN0eC53aWR0aFxuICB9XG5cbiAgZ2V0IGhlaWdodCAoKSB7XG4gICAgcmV0dXJuIHRoaXMudkN0eC5oZWlnaHRcbiAgfVxuXG4gIGdldCB2aWRlb1dpZHRoICgpIHtcbiAgICByZXR1cm4gdGhpcy52Q3R4LnZpZGVvV2lkdGhcbiAgfVxuXG4gIGdldCB2aWRlb0hlaWdodCAoKSB7XG4gICAgcmV0dXJuIHRoaXMudkN0eC52aWRlb0hlaWdodFxuICB9XG5cbiAgZ2V0IHNyYyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgfVxuXG4gIHNldCBzcmMgKHZhbCkge1xuICAgIC8vIGRvIG5vdGhpbmdcbiAgfVxuXG4gIGdldCByZWFkeVN0YXRlICgpIHtcbiAgICByZXR1cm4gdGhpcy52Q3R4LnJlYWR5U3RhdGVcbiAgfVxuXG4gIGdldCBzZWVraW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy52Q3R4LnNlZWtpbmdcbiAgfVxuXG4gIGdldCBjdXJyZW50VGltZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYUN0eC5jdXJyZW50VGltZVxuICB9XG5cbiAgZ2V0IGR1cmF0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5hQ3R4LmR1cmF0aW9uXG4gIH1cblxuICBnZXQgcGF1c2VkICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF1c2VkXG4gIH1cblxuICBnZXQgcGxheWJhY2tSYXRlICgpIHtcbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ3BsYXliYWNrUmF0ZScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3BsYXliYWNrUmF0ZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxLjBcbiAgICB9XG4gIH1cblxuICBzZXQgcGxheWJhY2tSYXRlICh2YWwpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncGxheWJhY2tyYXRlJywgdmFsKTtcbiAgICB0aGlzLmFDdHgucGxheWJhY2tSYXRlID0gdmFsO1xuICAgIHRoaXMudkN0eC5wbGF5YmFja1JhdGUgPSB2YWw7XG5cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdyYXRlY2hhbmdlJykpXG4gIH1cblxuICBnZXQgZW5kZWQgKCkge1xuICAgIHJldHVybiB0aGlzLmFDdHguZW5kZWQ7XG4gIH1cblxuICBnZXQgYXV0b3BsYXkgKCkge1xuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYXV0b3BsYXknKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdhdXRvcGxheScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICBzZXQgYXV0b3BsYXkgKHZhbHVlKSB7XG5cbiAgfVxuICBwbGF5ICgpIHtcbiAgICBpZiAodGhpcy5wbGF5ZWQpIHtcbiAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgICB0aGlzLmluaXQoKVxuICAgIH1cblxuICAgIHRoaXMudkN0eC5wbGF5KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBsYXllZCA9IHRydWU7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdwbGF5JykpXG4gICAgICB0aGlzLl9wYXVzZWQgPSBmYWxzZVxuICAgIH0pXG4gICAgdGhpcy5hQ3R4LnBsYXkoKVxuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XG4gICAgdGhpcy5hQ3R4LnBhdXNlKClcbiAgICB0aGlzLnZDdHgucGF1c2UoKVxuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgncGF1c2UnKSlcbiAgfVxuXG4gIGdldCB2b2x1bWUgKCkge1xuICAgIHJldHVybiB0aGlzLmFDdHgudm9sdW1lXG4gIH1cblxuICBzZXQgdm9sdW1lICh2b2wpIHtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgndm9sdW1lJywgdm9sKTtcbiAgICB0aGlzLmFDdHgudm9sdW1lID0gdm9sXG4gIH1cblxuICBnZXQgbXV0ZWQgKCkge1xuICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgnbXV0ZWQnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdtdXRlZCcpXG4gICAgfSBlbHNlIGlmICh0aGlzLmdldEF0dHJpYnV0ZSgndm9sdW1lJykpIHtcbiAgICAgIHJldHVybiBOdW1iZXIucGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ3ZvbHVtZScpKSA9PT0gMFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBzZXQgbXV0ZWQgKHZhbCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdtdXRlZCcsIHZhbCk7XG4gICAgaWYgKCF2YWwpIHtcbiAgICAgIHRoaXMuYUN0eC5tdXRlZCA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYUN0eC5tdXRlZCA9IHRydWVcbiAgICB9XG4gIH1cblxuICBnZXQgZXJyb3IgKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHguZXJyb3I7XG4gIH1cblxuICBnZXQgYnVmZmVyZWQgKCkge1xuICAgIHJldHVybiB0aGlzLnZDdHguYnVmZmVyZWRcbiAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21vYmlsZS12aWRlbycsIE1vYmlsZVZpZGVvKTtcbiIsImNsYXNzIFNvdXJjZUJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yIChjb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XG4gICAgdGhpcy50eXBlID0gdGhpcy5jb25maWcudHlwZTtcbiAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICAgIHRoaXMuY3VycmVudEdvcCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9sYXN0R2V0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVzaCAoZnJhbWUpIHtcbiAgICBpZiAodGhpcy50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICBpZiAoZnJhbWUuaXNLZXlmcmFtZSkge1xuICAgICAgICBsZXQgY3VycmVudEdvcCA9IHtcbiAgICAgICAgICBzYW1wbGVzOiBbXSxcbiAgICAgICAgICBzdGFydDogZnJhbWUuZHRzLFxuICAgICAgICAgIGVuZDogZnJhbWUuZHRzLFxuICAgICAgICAgIG5leHRHb3A6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50R29wKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50R29wLm5leHRHb3AgPSBjdXJyZW50R29wO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudEdvcCA9IGN1cnJlbnRHb3A7XG4gICAgICAgIHRoaXMuYnVmZmVyLnB1c2godGhpcy5jdXJyZW50R29wKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY3VycmVudEdvcCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRHb3Auc2FtcGxlcy5wdXNoKGZyYW1lKTtcblxuICAgICAgICBpZiAoZnJhbWUuZHRzIDwgdGhpcy5jdXJyZW50R29wLnN0YXJ0KSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50R29wLnN0YXJ0ID0gZnJhbWUuZHRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyYW1lLmR0cyA+IHRoaXMuY3VycmVudEdvcC5lbmQpIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRHb3AuZW5kID0gZnJhbWUuZHRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0ICh0aW1lKSB7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgaWYgKHRoaXMuYnVmZmVyLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGxldCBzYW1wbGUgPSB0aGlzLl9nZXROZXh0KCk7XG4gICAgICAgIHJldHVybiBzYW1wbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2dldE5leHQgKCkge1xuICAgIGlmICghdGhpcy5fbGFzdEdldCkge1xuICAgICAgbGV0IGdvcCA9IHRoaXMuYnVmZmVyWzBdO1xuICAgICAgaWYgKGdvcC5zYW1wbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2xhc3RHZXQgPSB7XG4gICAgICAgIGdvcCxcbiAgICAgICAgaW5kZXg6IDBcbiAgICAgIH1cbiAgICAgIHJldHVybiBnb3Auc2FtcGxlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IGdvcCA9IHRoaXMuX2xhc3RHZXQuZ29wO1xuICAgICAgbGV0IHNhbXBsZSA9IGdvcC5zYW1wbGVzW3RoaXMuX2xhc3RHZXQuaW5kZXggKyAxXTtcbiAgICAgIGlmIChzYW1wbGUpIHtcbiAgICAgICAgdGhpcy5fbGFzdEdldC5pbmRleCA9IHRoaXMuX2xhc3RHZXQuaW5kZXggKyAxO1xuICAgICAgICByZXR1cm4gc2FtcGxlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ29wID0gZ29wLm5leHRHb3A7XG4gICAgICAgIGlmICghZ29wIHx8IGdvcC5zYW1wbGVzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2FtcGxlID0gZ29wLnNhbXBsZXNbMF07XG4gICAgICAgIHRoaXMuX2xhc3RHZXQgPSB7XG4gICAgICAgICAgZ29wLFxuICAgICAgICAgIGluZGV4OiAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNhbXBsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmUgKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAodGhpcy5idWZmZXIubGVuZ3RoIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZ29wID0gdGhpcy5idWZmZXJbMF07XG4gICAgd2hpbGUgKGdvcCkge1xuICAgICAgaWYgKGdvcC5lbmQgPCBlbmQgJiYgZ29wLnN0YXJ0ID49IHN0YXJ0KSB7XG4gICAgICAgIHRoaXMuYnVmZmVyLnNwbGljZShpLCAxKVxuICAgICAgICBnb3AgPSB0aGlzLmJ1ZmZlcltpXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgZ29wID0gdGhpcy5idWZmZXJbaV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNvdXJjZUJ1ZmZlcjtcbiIsIi8qKlxuICogQGF1dGhvciBmdXl1aGFvQGJ5dGVkYW5jZS5jb21cbiAqL1xuXG5jbGFzcyBUaWNrZXIge1xuICBjb25zdHJ1Y3RvciAob3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMgfHwge30sIHtcbiAgICAgIGludGVydmFsOiAxNlxuICAgIH0pXG5cbiAgICB0aGlzLmNhbGxiYWNrcyA9IFtdXG4gIH1cblxuICBzdGFydCguLi5jYWxsYmFja3MpIHtcbiAgICB0aGlzLmNhbGxiYWNrcyA9IGNhbGxiYWNrc1xuICB9XG5cbiAgb25UaWNrICgpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdGhpcy5jYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gdGhpcy5jYWxsYmFja3NbaV1cbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBzZXRJbnRlcnZhbCAoaW50ZXJ2YWwpIHtcbiAgICB0aGlzLm9wdGlvbnMuaW50ZXJ2YWwgPSBpbnRlcnZhbFxuICAgIHJldHVybiB0aGlzO1xuICB9XG59XG5cbi8qKlxuICogdGlja2VyIHVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAqL1xuY2xhc3MgUmFmVGlja2VyIGV4dGVuZHMgVGlja2VyIHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucHJldiA9IG51bGw7XG4gICAgdGhpcy50aW1lcklkID0gbnVsbFxuICAgIHRoaXMuX3N1YlRpbWVySWQgPSBudWxsXG5cbiAgICB0aGlzLl90aWNrRnVuYyA9IFJhZlRpY2tlci5nZXRUaWNrRnVuYygpXG4gICAgdGhpcy50aWNrID0gdGhpcy50aWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIHN0YXJ0ICguLi5jYWxsYmFja3MpIHtcbiAgICBzdXBlci5zdGFydCguLi5jYWxsYmFja3MpXG4gICAgdGhpcy50aWNrKClcbiAgfVxuXG4gIHRpY2sgKHRpbWVzdGFtcCkge1xuICAgIHRoaXMubmV4dFRpY2soKTtcbiAgICB0aGlzLm9uVGljaygpXG4gIH1cblxuICBuZXh0VGljayAoKSB7XG4gICAgY29uc3QgeyBfdGlja0Z1bmMgfSA9IHRoaXM7XG4gICAgdGhpcy50aW1lcklkID0gX3RpY2tGdW5jKHRoaXMudGljaylcbiAgfVxuXG4gIHN0b3AgKCkge1xuICAgIGlmICh0aGlzLnRpbWVySWQpIHtcbiAgICAgIGNvbnN0IGNhbmNlbEZ1bmMgPSBSYWZUaWNrZXIuZ2V0Q2FuY2VsRnVuYygpXG5cbiAgICAgIGNhbmNlbEZ1bmModGhpcy50aW1lcklkKVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXRUaWNrRnVuYyAoKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZVxuICB9XG5cbiAgc3RhdGljIGdldENhbmNlbEZ1bmMgKCkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lXG4gIH1cblxuICBzdGF0aWMgaXNTdXBwb3J0ZWQgKCkge1xuICAgIHJldHVybiBSYWZUaWNrZXIuZ2V0VGlja0Z1bmMoKSAhPT0gdW5kZWZpbmVkXG4gIH1cbn1cblxuLyoqXG4gKiB1c2Ugc2V0VGltZW91dCBmb3IgYnJvd3NlcnMgd2l0aG91dCByYWYgc3VwcG9ydFxuICovXG5jbGFzcyBUaW1lb3V0VGlja2VyIGV4dGVuZHMgVGlja2VyIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnKVxuICAgIHRoaXMudGltZW91dElkID0gbnVsbFxuXG4gIH1cblxuICBzdGFydCAoLi4uY2FsbGJhY2tzKSB7XG4gICAgc3VwZXIubmV4dFRpY2soLi4uY2FsbGJhY2tzKVxuICAgIHRoaXMudGltZW91dElkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMub25UaWNrKCk7XG4gICAgfSwgdGhpcy5vcHRpb25zLmludGVydmFsIHx8IDE2KVxuICB9XG5cbiAgc3RvcCAoKSB7XG4gICAgaWYgKHRoaXMudGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVvdXRJZClcbiAgICB9XG4gIH1cblxufVxuXG4vKipcbiAqIOi/lOWbnlRpY2tlcuaehOmAoOWHveaVsFxuICogQHJldHVybnMge1RpY2tlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGdldFRpY2tlciA9ICgpID0+IHtcbiAgaWYgKFJhZlRpY2tlci5pc1N1cHBvcnRlZCgpKSB7XG4gICAgcmV0dXJuIFJhZlRpY2tlclxuICB9IGVsc2Uge1xuICAgIHJldHVybiBUaW1lb3V0VGlja2VyXG4gIH1cbn1cbiIsImltcG9ydCBXb3JrZXJpZnkgZnJvbSAnd2Vid29ya2lmeS13ZWJwYWNrJ1xuaW1wb3J0IFN0cmVhbSBmcm9tICcuLi93cml0ZS9zdHJlYW0nO1xuaW1wb3J0IE5hbHVuaXQgZnJvbSAnLi4vLi4vLi4veGdwbGF5ZXItY29kZWMvc3JjL2gyNjQvbmFsdW5pdCc7XG5pbXBvcnQgWVVWQ2FudmFzIGZyb20gJy4veXV2LWNhbnZhcyc7XG5pbXBvcnQgU291cmNlQnVmZmVyIGZyb20gJy4vc291cmNlYnVmZmVyJztcbmltcG9ydCBUaW1lUmFuZ2VzIGZyb20gJy4uL21vZGVscy9UaW1lUmFuZ2VzJztcblxuY2xhc3MgVmlkZW9DYW52YXMge1xuICBjb25zdHJ1Y3RvciAoY29uZmlnKSB7XG4gICAgdGhpcy5jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5jb25maWcuY2FudmFzID8gdGhpcy5jb25maWcuY2FudmFzIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU291cmNlQnVmZmVyKHt0eXBlOiAndmlkZW8nfSk7XG4gICAgdGhpcy5wcmVsb2FkVGltZSA9IHRoaXMuY29uZmlnLnByZWxvYWRUaW1lIHx8IDM7XG4gICAgdGhpcy5vbmNhbnBsYXkgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5vbkZpcnN0RnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXRhID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucmVhZHlTdGF0dXMgPSAwO1xuICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgICB0aGlzLmxhc3RQbGF5ZWQgPSAwO1xuXG4gICAgdGhpcy5fZGVjb2RlckluaXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2F2Y2NwdXNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9kZWNvZGVkRnJhbWVzID0ge307XG4gICAgdGhpcy5fbGFzdFNhbXBsZUR0cyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9iYXNlRHRzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2xhc3RSZW5kZXJUaW1lID0gbnVsbFxuICAgIHRoaXMucGxheUZpbmlzaCA9IG51bGxcbiAgfVxuXG4gIHBhdXNlICgpIHtcbiAgICB0aGlzLnBhdXNlZCA9IHRydWU7XG4gIH1cblxuICBpbml0V2FzbVdvcmtlciAoKSB7XG4gICAgbGV0IF90aGlzID0gdGhpcztcbiAgICB0aGlzLndhc213b3JrZXIgPSBXb3JrZXJpZnkocmVxdWlyZS5yZXNvbHZlKCcuL3dvcmtlci5qcycpKTtcbiAgICB0aGlzLndhc213b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgbXNnOiAnaW5pdCcsXG4gICAgICBtZXRhOiB0aGlzLm1ldGFcbiAgICB9KVxuICAgIHRoaXMud2FzbXdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbXNnID0+IHtcbiAgICAgIHN3aXRjaCAobXNnLmRhdGEubXNnKSB7XG4gICAgICAgIGNhc2UgJ0RFQ09ERVJfUkVBRFknOlxuICAgICAgICAgIF90aGlzLl9kZWNvZGVySW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnREVDT0RFRCc6XG4gICAgICAgICAgdGhpcy5fb25EZWNvZGVkKG1zZy5kYXRhKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZpZGVvTWV0YURhdGEgKG1ldGEpIHtcbiAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICAgIGlmICghdGhpcy5fZGVjb2RlckluaXRlZCkge1xuICAgICAgdGhpcy5pbml0V2FzbVdvcmtlcigpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuX2F2Y2NwdXNoZWQgPSB0cnVlO1xuICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobWV0YS5zcHMuYnl0ZUxlbmd0aCArIDQpO1xuICAgIGRhdGEuc2V0KFswLCAwLCAwLCAxXSlcbiAgICBkYXRhLnNldChtZXRhLnNwcywgNCk7XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2RlY29kZScsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSlcblxuICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShtZXRhLnBwcy5ieXRlTGVuZ3RoICsgNCk7XG4gICAgZGF0YS5zZXQoWzAsIDAsIDAsIDFdKVxuICAgIGRhdGEuc2V0KG1ldGEucHBzLCA0KTtcbiAgICB0aGlzLndhc213b3JrZXIucG9zdE1lc3NhZ2Uoe1xuICAgICAgbXNnOiAnZGVjb2RlJyxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KVxuXG4gICAgaWYgKCF0aGlzLnl1dkNhbnZhcykge1xuICAgICAgbGV0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe21ldGEsIGNhbnZhczogdGhpcy5jYW52YXN9LCB0aGlzLmNvbmZpZyk7XG4gICAgICB0aGlzLnl1dkNhbnZhcyA9IG5ldyBZVVZDYW52YXMoY29uZmlnKTtcbiAgICB9XG4gICAgdGhpcy5yZWFkeVN0YXR1cyA9IDE7XG4gIH1cblxuICBkZWNvZGVWaWRlbyAodmlkZW9UcmFjaykge1xuICAgIGlmICghdGhpcy5fZGVjb2RlckluaXRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9hdmNjcHVzaGVkKSB7XG4gICAgICB0aGlzLnNldFZpZGVvTWV0YURhdGEodGhpcy5tZXRhKTtcbiAgICB9XG4gICAgbGV0IHsgc2FtcGxlcyB9ID0gdmlkZW9UcmFjaztcbiAgICBsZXQgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpO1xuXG4gICAgd2hpbGUgKHNhbXBsZSkge1xuICAgICAgaWYgKCF0aGlzLl9iYXNlRHRzKSB7XG4gICAgICAgIHRoaXMuX2Jhc2VEdHMgPSBzYW1wbGUuZHRzO1xuICAgICAgfVxuICAgICAgdGhpcy5zb3VyY2UucHVzaChzYW1wbGUpO1xuICAgICAgc2FtcGxlID0gc2FtcGxlcy5zaGlmdCgpO1xuICAgIH1cblxuICAgIHRoaXMuX3ByZWxvYWQoKTtcbiAgfVxuXG4gIF9wcmVsb2FkICgpIHtcbiAgICBpZiAoIXRoaXMuX2xhc3RTYW1wbGVEdHMgfHwgdGhpcy5fbGFzdFNhbXBsZUR0cyAtIHRoaXMuX2Jhc2VEdHMgPCB0aGlzLmN1cnJlbnRUaW1lICsgdGhpcy5wcmVsb2FkVGltZSAqIDEwMDApIHtcbiAgICAgIGxldCBzYW1wbGUgPSB0aGlzLnNvdXJjZS5nZXQoKTtcbiAgICAgIGlmIChzYW1wbGUpIHtcbiAgICAgICAgdGhpcy5fbGFzdFNhbXBsZUR0cyA9IHNhbXBsZS5kdHM7XG4gICAgICAgIHRoaXMuX2FuYWx5c2VOYWwoc2FtcGxlKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHNhbXBsZSAmJiB0aGlzLl9sYXN0U2FtcGxlRHRzIC0gdGhpcy5fYmFzZUR0cyA8IHRoaXMuY3VycmVudFRpbWUgKyB0aGlzLnByZWxvYWRUaW1lICogMTAwMCkge1xuICAgICAgICBzYW1wbGUgPSB0aGlzLnNvdXJjZS5nZXQoKTtcbiAgICAgICAgaWYgKHNhbXBsZSkge1xuICAgICAgICAgIHRoaXMuX2FuYWx5c2VOYWwoc2FtcGxlKTtcbiAgICAgICAgICB0aGlzLl9sYXN0U2FtcGxlRHRzID0gc2FtcGxlLmR0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hbmFseXNlTmFsIChzYW1wbGUpIHtcbiAgICBsZXQgbmFscyA9IE5hbHVuaXQuZ2V0QXZjY05hbHMobmV3IFN0cmVhbShzYW1wbGUuZGF0YS5idWZmZXIpKTtcblxuICAgIGxldCBsZW5ndGggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFscy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IG5hbCA9IG5hbHNbaV07XG4gICAgICBsZW5ndGggKz0gbmFsLmJvZHkuYnl0ZUxlbmd0aCArIDQ7XG4gICAgfVxuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBuYWwgPSBuYWxzW2ldO1xuICAgICAgZGF0YS5zZXQoWzAsIDAsIDAsIDFdLCBvZmZzZXQpO1xuICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICBkYXRhLnNldChuZXcgVWludDhBcnJheShuYWwuYm9keSksIG9mZnNldCk7XG4gICAgICBvZmZzZXQgKz0gbmFsLmJvZHkuYnl0ZUxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy53YXNtd29ya2VyLnBvc3RNZXNzYWdlKHtcbiAgICAgIG1zZzogJ2RlY29kZScsXG4gICAgICBkYXRhOiBkYXRhLFxuICAgICAgaW5mbzoge1xuICAgICAgICBkdHM6IHNhbXBsZS5kdHMsXG4gICAgICAgIHB0czogc2FtcGxlLnB0cyA/IHNhbXBsZS5wdHMgOiBzYW1wbGUuZHRzICsgc2FtcGxlLmN0cyxcbiAgICAgICAga2V5OiBzYW1wbGUuaXNLZXlmcmFtZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfb25EZWNvZGVkIChkYXRhKSB7XG4gICAgbGV0IHtkdHN9ID0gZGF0YS5pbmZvXG4gICAgdGhpcy5fZGVjb2RlZEZyYW1lc1tkdHNdID0gZGF0YTtcbiAgfVxuXG4gIHBsYXkgKCkge1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLnBsYXlGaW5pc2ggPSByZXNvbHZlXG4gICAgfSlcbiAgfVxuXG4gIF9vblRpbWVyIChjdXJyZW50VGltZSkge1xuICAgIGlmICh0aGlzLnBhdXNlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5tZXRhKSB7XG4gICAgICBpZiAodGhpcy5tZXRhLmZyYW1lUmF0ZSAmJiB0aGlzLm1ldGEuZnJhbWVSYXRlLmZpeGVkICYmIHRoaXMubWV0YS5mcmFtZVJhdGUuZnBzKSB7XG4gICAgICB9XG4gICAgICBsZXQgZnJhbWVUaW1lcyA9IE9iamVjdC5rZXlzKHRoaXMuX2RlY29kZWRGcmFtZXMpO1xuICAgICAgaWYgKGZyYW1lVGltZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICAgIGxldCBmcmFtZVRpbWUgPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZVRpbWVzLmxlbmd0aCAmJiBOdW1iZXIucGFyc2VJbnQoZnJhbWVUaW1lc1tpXSkgLSB0aGlzLl9iYXNlRHRzIDw9IHRoaXMuY3VycmVudFRpbWU7IGkrKykge1xuICAgICAgICAgIGZyYW1lVGltZSA9IE51bWJlci5wYXJzZUludChmcmFtZVRpbWVzW2kgLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLl9kZWNvZGVkRnJhbWVzW2ZyYW1lVGltZV07XG4gICAgICAgIGlmIChmcmFtZSkge1xuICAgICAgICAgIGlmICh0aGlzLm9uY2FucGxheSAmJiB0aGlzLnJlYWR5U3RhdHVzIDwgNCkge1xuICAgICAgICAgICAgdGhpcy5vbmNhbnBsYXkoKTtcbiAgICAgICAgICAgIHRoaXMucmVhZHlTdGF0dXMgPSA0O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnl1dkNhbnZhcy5yZW5kZXIoZnJhbWUuYnVmZmVyLCBmcmFtZS53aWR0aCwgZnJhbWUuaGVpZ2h0LCBmcmFtZS55TGluZXNpemUsIGZyYW1lLnV2TGluZXNpemUpO1xuXG4gICAgICAgICAgaWYgKHRoaXMucGxheUZpbmlzaCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5RmluaXNoKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZVRpbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKE51bWJlci5wYXJzZUludChmcmFtZVRpbWVzW2ldKSA8IGZyYW1lVGltZSkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2RlY29kZWRGcmFtZXNbZnJhbWVUaW1lc1tpXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX2xhc3RSZW5kZXJUaW1lID0gRGF0ZS5ub3coKVxuICB9XG5cbiAgY2xlYW5CdWZmZXIgKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lID4gMSkge1xuICAgICAgdGhpcy5zb3VyY2UucmVtb3ZlKDAsIHRoaXMuY3VycmVudFRpbWUgLSAxKTtcbiAgICB9XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLndhc213b3JrZXIgPSBudWxsO1xuICAgIHRoaXMuY2FudmFzID0gbnVsbFxuICAgIHRoaXMuc291cmNlID0gbnVsbFxuICAgIHRoaXMuX2RlY29kZXJJbml0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBidWZmZXJlZCAoKSB7XG4gICAgY29uc3QgcmFuZ2VzID0gW11cbiAgICBsZXQgY3VycmVudFJhbmdlID0ge1xuICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICBlbmQ6IG51bGxcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNvdXJjZS5idWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIGVuZCB9ID0gdGhpcy5zb3VyY2UuYnVmZmVyW2ldO1xuICAgICAgaWYgKCFjdXJyZW50UmFuZ2Uuc3RhcnQpIHtcbiAgICAgICAgY3VycmVudFJhbmdlLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICB9XG4gICAgICBpZiAoIWN1cnJlbnRSYW5nZS5lbmQpIHtcbiAgICAgICAgY3VycmVudFJhbmdlLmVuZCA9IGVuZDtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0IC0gY3VycmVudFJhbmdlLmVuZCA+IDEwMDApIHtcbiAgICAgICAgY3VycmVudFJhbmdlLnN0YXJ0ID0gY3VycmVudFJhbmdlLnN0YXJ0IC8gMTAwMFxuICAgICAgICBjdXJyZW50UmFuZ2UuZW5kID0gY3VycmVudFJhbmdlLmVuZCAvIDEwMDBcbiAgICAgICAgY3VycmVudFJhbmdlID0ge1xuICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgIGVuZFxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50UmFuZ2UuZW5kID0gZW5kXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRSYW5nZS5zdGFydCAhPT0gbnVsbCAmJiBjdXJyZW50UmFuZ2UuZW5kICE9PSBudWxsKSB7XG4gICAgICBjdXJyZW50UmFuZ2Uuc3RhcnQgPSBjdXJyZW50UmFuZ2Uuc3RhcnQgLyAxMDAwXG4gICAgICBjdXJyZW50UmFuZ2UuZW5kID0gY3VycmVudFJhbmdlLmVuZCAvIDEwMDBcbiAgICAgIHJhbmdlcy5wdXNoKGN1cnJlbnRSYW5nZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFRpbWVSYW5nZXMocmFuZ2VzKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBWaWRlb0NhbnZhcztcbiIsImNvbnN0IE1BWF9TVFJFQU1fQlVGRkVSX0xFTkdUSCA9IDEwMjQgKiAxMDI0O1xudmFyIERlY29kZXIgPSBmdW5jdGlvbiAoc2VsZikge1xuICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICB0aGlzLnNlbGYgPSBzZWxmO1xuICB0aGlzLm1ldGEgPSB0aGlzLnNlbGYubWV0YTtcbiAgdGhpcy5pbmZvbGlzdCA9IHt9O1xuICBzZWxmLnBhcl9icm9hZHdheU9uQnJvYWR3YXlJbml0ZWQgPSB0aGlzLmJyb2Fkd2F5T25Ccm9hZHdheUluaXRlZC5iaW5kKHRoaXMpO1xuICBzZWxmLnBhcl9icm9hZHdheU9uUGljdHVyZURlY29kZWQgPSB0aGlzLmJyb2Fkd2F5T25QaWN0dXJlRGVjb2RlZC5iaW5kKHRoaXMpO1xufVxuXG5EZWNvZGVyLnByb3RvdHlwZS50b1U4QXJyYXkgPSBmdW5jdGlvbiAocHRyLCBsZW5ndGgpIHtcbiAgcmV0dXJuIHRoaXMuc2VsZi5IRUFQVTguc3ViYXJyYXkocHRyLCBwdHIgKyBsZW5ndGgpO1xufVxuXG5EZWNvZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBNb2R1bGUuX2Jyb2Fkd2F5SW5pdCgpO1xuICB0aGlzLnN0cmVhbUJ1ZmZlciA9IHRoaXMudG9VOEFycmF5KE1vZHVsZS5fYnJvYWR3YXlDcmVhdGVTdHJlYW0oTUFYX1NUUkVBTV9CVUZGRVJfTEVOR1RIKSwgTUFYX1NUUkVBTV9CVUZGRVJfTEVOR1RIKTtcbn1cblxuRGVjb2Rlci5wcm90b3R5cGUuYnJvYWR3YXlPblBpY3R1cmVEZWNvZGVkID0gZnVuY3Rpb24gKG9mZnNldCwgd2lkdGgsIGhlaWdodCwgeUxpbmVzaXplLCB1dkxpbmVzaXplLCBpbmZvaWQpIHtcbiAgbGV0IGluZm8gPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmluZm9saXN0W2luZm9pZF0pO1xuICBsZXQgeVJvd2NvdW50ID0gaGVpZ2h0O1xuICBsZXQgdXZSb3djb3VudCA9IGhlaWdodCAvIDI7XG4gIGlmICh0aGlzLm1ldGEuY2hyb21hRm9ybWF0ID09PSA0NDQgfHwgdGhpcy5tZXRhLmNocm9tYUZvcm1hdCA9PT0gNDIyKSB7XG4gICAgdXZSb3djb3VudCA9IGhlaWdodDtcbiAgfVxuICBsZXQgZGF0YSA9IHRoaXMudG9VOEFycmF5KG9mZnNldCwgKHlMaW5lc2l6ZSAqIHlSb3djb3VudCkgKyAyICogKHV2TGluZXNpemUgKiB1dlJvd2NvdW50KSk7XG4gIHRoaXMuaW5mb2xpc3RbaW5mb2lkXSA9IG51bGw7XG4gIGxldCBkYXRldGVtcCA9IG5ldyBVaW50OEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgZGF0ZXRlbXAuc2V0KGRhdGEpO1xuICBsZXQgYnVmZmVyID0gZGF0ZXRlbXAuYnVmZmVyO1xuICB0aGlzLnNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgIG1zZzogJ0RFQ09ERUQnLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICB5TGluZXNpemUsXG4gICAgdXZMaW5lc2l6ZSxcbiAgICBpbmZvLFxuICAgIGJ1ZmZlclxuICB9LCBbYnVmZmVyXSk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmJyb2Fkd2F5T25Ccm9hZHdheUluaXRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICB0aGlzLnNlbGYucG9zdE1lc3NhZ2Uoe21zZzogJ0RFQ09ERVJfUkVBRFknfSk7XG59XG5cbkRlY29kZXIucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uIChkYXRhLCBpbmZvKSB7XG4gIGxldCB0aW1lID0gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkpO1xuICBsZXQgaW5mb2lkID0gdGltZSAtIChNYXRoLmZsb29yKHRpbWUgLyAxMGU4KSAqIDEwZTgpO1xuICB0aGlzLmluZm9saXN0W2luZm9pZF0gPSBpbmZvO1xuICB0aGlzLnN0cmVhbUJ1ZmZlci5zZXQoZGF0YSk7XG4gIE1vZHVsZS5fYnJvYWR3YXlQbGF5U3RyZWFtKGRhdGEubGVuZ3RoLCBpbmZvaWQpO1xufVxuXG52YXIgZGVjb2RlcjtcblxuZnVuY3Rpb24gb25Qb3N0UnVuICgpIHtcbiAgZGVjb2RlciA9IG5ldyBEZWNvZGVyKHRoaXMpO1xuICBkZWNvZGVyLmluaXQoKTtcbn1cblxuZnVuY3Rpb24gaW5pdCAobWV0YSkge1xuICBzZWxmLmltcG9ydFNjcmlwdHMoJ2h0dHBzOi8vc2YxLXZjbG91ZGNkbi5wc3RhdHAuY29tL29iai90dGZlL21lZGlhL2RlY29kZXIvaDI2NC9kZWNvZGVyLmpzJyk7XG4gIGFkZE9uUG9zdFJ1bihvblBvc3RSdW4uYmluZChzZWxmKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlbGYpIHtcbiAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgZGF0YSA9IGUuZGF0YTtcbiAgICBpZiAoIWRhdGEubXNnKSB7XG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgbXNnOiAnRVJST1I6aW52YWxpZCBtZXNzYWdlJ1xuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgc3dpdGNoIChkYXRhLm1zZykge1xuICAgICAgICBjYXNlICdpbml0JzpcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBzZWxmLm1ldGEgPSBkYXRhLm1ldGE7XG4gICAgICAgICAgaW5pdCgpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2RlY29kZSc6XG4gICAgICAgICAgZGVjb2Rlci5kZWNvZGUoZGF0YS5kYXRhLCBkYXRhLmluZm8pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSwgZmFsc2UpO1xufVxuIiwiY2xhc3MgWVVWQ2FudmFzIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZ3MpIHtcbiAgICB0aGlzLmNvbmZpZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWdzKTtcbiAgICB0aGlzLmNhbnZhcyA9IHRoaXMuY29uZmlncy5jYW52YXM7XG4gICAgdGhpcy5tZXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5jb25maWdzLm1ldGEpO1xuICAgIHRoaXMuY2hyb21hID0gdGhpcy5tZXRhLmNocm9tYUZvcm1hdDtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubWV0YS5wcmVzZW50SGVpZ2h0O1xuICAgIHRoaXMud2lkdGggPSB0aGlzLm1ldGEucHJlc2VudFdpZHRoO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gMTI4MDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIHRoaXMuX2luaXRDb250ZXh0R0woKTtcbiAgICBpZiAodGhpcy5jb250ZXh0R0wpIHtcbiAgICAgIHRoaXMuX2luaXRQcm9ncmFtKCk7XG4gICAgICB0aGlzLl9pbml0QnVmZmVycygpO1xuICAgICAgdGhpcy5faW5pdFRleHR1cmVzKCk7XG4gICAgfTtcbiAgfVxuXG4gIF9pbml0Q29udGV4dEdMICgpIHtcbiAgICB2YXIgY2FudmFzID0gdGhpcy5jYW52YXM7XG4gICAgdmFyIGdsID0gbnVsbDtcblxuICAgIHZhciB2YWxpZENvbnRleHROYW1lcyA9IFsnd2ViZ2wnLCAnZXhwZXJpbWVudGFsLXdlYmdsJywgJ21vei13ZWJnbCcsICd3ZWJraXQtM2QnXTtcbiAgICB2YXIgbmFtZUluZGV4ID0gMDtcblxuICAgIHdoaWxlICghZ2wgJiYgbmFtZUluZGV4IDwgdmFsaWRDb250ZXh0TmFtZXMubGVuZ3RoKSB7XG4gICAgICB2YXIgY29udGV4dE5hbWUgPSB2YWxpZENvbnRleHROYW1lc1tuYW1lSW5kZXhdO1xuXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0T3B0aW9ucykge1xuICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoY29udGV4dE5hbWUsIHRoaXMuY29udGV4dE9wdGlvbnMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoY29udGV4dE5hbWUpO1xuICAgICAgICB9O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBnbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmICghZ2wgfHwgdHlwZW9mIGdsLmdldFBhcmFtZXRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBnbCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgICsrbmFtZUluZGV4O1xuICAgIH07XG5cbiAgICB0aGlzLmNvbnRleHRHTCA9IGdsO1xuICB9O1xuXG4gIF9pbml0UHJvZ3JhbSAoKSB7XG4gICAgdmFyIGdsID0gdGhpcy5jb250ZXh0R0w7XG5cbiAgICAvLyB2ZXJ0ZXggc2hhZGVyIGlzIHRoZSBzYW1lIGZvciBhbGwgdHlwZXNcbiAgICB2YXIgdmVydGV4U2hhZGVyU2NyaXB0O1xuICAgIHZhciBmcmFnbWVudFNoYWRlclNjcmlwdDtcbiAgICB2ZXJ0ZXhTaGFkZXJTY3JpcHQgPSBbXG4gICAgICAnYXR0cmlidXRlIHZlYzQgdmVydGV4UG9zOycsXG4gICAgICAnYXR0cmlidXRlIHZlYzQgdGV4dHVyZVBvczsnLFxuICAgICAgJ2F0dHJpYnV0ZSB2ZWM0IHVUZXh0dXJlUG9zOycsXG4gICAgICAnYXR0cmlidXRlIHZlYzQgdlRleHR1cmVQb3M7JyxcbiAgICAgICd2YXJ5aW5nIHZlYzIgdGV4dHVyZUNvb3JkOycsXG4gICAgICAndmFyeWluZyB2ZWMyIHVUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICd2YXJ5aW5nIHZlYzIgdlRleHR1cmVDb29yZDsnLFxuXG4gICAgICAndm9pZCBtYWluKCknLFxuICAgICAgJ3snLFxuICAgICAgJyAgZ2xfUG9zaXRpb24gPSB2ZXJ0ZXhQb3M7JyxcbiAgICAgICcgIHRleHR1cmVDb29yZCA9IHRleHR1cmVQb3MueHk7JyxcbiAgICAgICcgIHVUZXh0dXJlQ29vcmQgPSB1VGV4dHVyZVBvcy54eTsnLFxuICAgICAgJyAgdlRleHR1cmVDb29yZCA9IHZUZXh0dXJlUG9zLnh5OycsXG4gICAgICAnfSdcbiAgICBdLmpvaW4oJ1xcbicpO1xuXG4gICAgZnJhZ21lbnRTaGFkZXJTY3JpcHQgPSBbXG4gICAgICAncHJlY2lzaW9uIGhpZ2hwIGZsb2F0OycsXG4gICAgICAndmFyeWluZyBoaWdocCB2ZWMyIHRleHR1cmVDb29yZDsnLFxuICAgICAgJ3ZhcnlpbmcgaGlnaHAgdmVjMiB1VGV4dHVyZUNvb3JkOycsXG4gICAgICAndmFyeWluZyBoaWdocCB2ZWMyIHZUZXh0dXJlQ29vcmQ7JyxcbiAgICAgICd1bmlmb3JtIHNhbXBsZXIyRCB5U2FtcGxlcjsnLFxuICAgICAgJ3VuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyOycsXG4gICAgICAndW5pZm9ybSBzYW1wbGVyMkQgdlNhbXBsZXI7JyxcbiAgICAgICd1bmlmb3JtIG1hdDQgWVVWMlJHQjsnLFxuXG4gICAgICAndm9pZCBtYWluKHZvaWQpIHsnLFxuICAgICAgJyAgaGlnaHAgZmxvYXQgeSA9IHRleHR1cmUyRCh5U2FtcGxlciwgIHRleHR1cmVDb29yZCkucjsnLFxuICAgICAgJyAgaGlnaHAgZmxvYXQgdSA9IHRleHR1cmUyRCh1U2FtcGxlciwgIHVUZXh0dXJlQ29vcmQpLnI7JyxcbiAgICAgICcgIGhpZ2hwIGZsb2F0IHYgPSB0ZXh0dXJlMkQodlNhbXBsZXIsICB2VGV4dHVyZUNvb3JkKS5yOycsXG4gICAgICAnICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHksIHUsIHYsIDEpICogWVVWMlJHQjsnLFxuICAgICAgJ30nXG4gICAgXS5qb2luKCdcXG4nKTtcblxuICAgIHZhciBZVVYyUkdCID0gW1xuICAgICAgMS4xNjQzOCwgMC4wMDAwMCwgMS41OTYwMywgLTAuODcwNzksXG4gICAgICAxLjE2NDM4LCAtMC4zOTE3NiwgLTAuODEyOTcsIDAuNTI5NTksXG4gICAgICAxLjE2NDM4LCAyLjAxNzIzLCAwLjAwMDAwLCAtMS4wODEzOSxcbiAgICAgIDAsIDAsIDAsIDFcbiAgICBdO1xuICAgIHZhciB2ZXJ0ZXhTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuVkVSVEVYX1NIQURFUik7XG4gICAgZ2wuc2hhZGVyU291cmNlKHZlcnRleFNoYWRlciwgdmVydGV4U2hhZGVyU2NyaXB0KTtcbiAgICBnbC5jb21waWxlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodmVydGV4U2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdWZXJ0ZXggc2hhZGVyIGZhaWxlZCB0byBjb21waWxlOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyh2ZXJ0ZXhTaGFkZXIpKTtcbiAgICB9XG5cbiAgICB2YXIgZnJhZ21lbnRTaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIoZ2wuRlJBR01FTlRfU0hBREVSKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UoZnJhZ21lbnRTaGFkZXIsIGZyYWdtZW50U2hhZGVyU2NyaXB0KTtcbiAgICBnbC5jb21waWxlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcbiAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcihmcmFnbWVudFNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRnJhZ21lbnQgc2hhZGVyIGZhaWxlZCB0byBjb21waWxlOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyhmcmFnbWVudFNoYWRlcikpO1xuICAgIH1cblxuICAgIHZhciBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XG4gICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG4gICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgY29uc29sZS5sb2coJ1Byb2dyYW0gZmFpbGVkIHRvIGNvbXBpbGU6ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSk7XG4gICAgfVxuXG4gICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIHZhciBZVVYyUkdCUmVmID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICdZVVYyUkdCJyk7XG4gICAgZ2wudW5pZm9ybU1hdHJpeDRmdihZVVYyUkdCUmVmLCBmYWxzZSwgWVVWMlJHQik7XG5cbiAgICB0aGlzLnNoYWRlclByb2dyYW0gPSBwcm9ncmFtO1xuICB9XG5cbiAgX2luaXRCdWZmZXJzICgpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcbiAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuc2hhZGVyUHJvZ3JhbTtcblxuICAgIHZhciB2ZXJ0ZXhQb3NCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdmVydGV4UG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMSwgMSwgLTEsIDEsIDEsIC0xLCAtMSwgLTFdKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdmFyIHZlcnRleFBvc1JlZiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICd2ZXJ0ZXhQb3MnKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh2ZXJ0ZXhQb3NSZWYpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodmVydGV4UG9zUmVmLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgdmFyIHRleHR1cmVQb3NCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDAsIDAsIDEsIDEsIDAsIDFdKSwgZ2wuU1RBVElDX0RSQVcpO1xuXG4gICAgdmFyIHRleHR1cmVQb3NSZWYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAndGV4dHVyZVBvcycpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRleHR1cmVQb3NSZWYpO1xuICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGV4dHVyZVBvc1JlZiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIHRoaXMudGV4dHVyZVBvc0J1ZmZlciA9IHRleHR1cmVQb3NCdWZmZXI7XG5cbiAgICB2YXIgdVRleHR1cmVQb3NCdWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdVRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSksIGdsLlNUQVRJQ19EUkFXKTtcblxuICAgIHZhciB1VGV4dHVyZVBvc1JlZiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICd1VGV4dHVyZVBvcycpO1xuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHVUZXh0dXJlUG9zUmVmKTtcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHVUZXh0dXJlUG9zUmVmLCAyLCBnbC5GTE9BVCwgZmFsc2UsIDAsIDApO1xuXG4gICAgdGhpcy51VGV4dHVyZVBvc0J1ZmZlciA9IHVUZXh0dXJlUG9zQnVmZmVyO1xuXG4gICAgdmFyIHZUZXh0dXJlUG9zQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHZUZXh0dXJlUG9zQnVmZmVyKTtcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pLCBnbC5TVEFUSUNfRFJBVyk7XG5cbiAgICB2YXIgdlRleHR1cmVQb3NSZWYgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAndlRleHR1cmVQb3MnKTtcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh2VGV4dHVyZVBvc1JlZik7XG4gICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih2VGV4dHVyZVBvc1JlZiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCAwLCAwKTtcblxuICAgIHRoaXMudlRleHR1cmVQb3NCdWZmZXIgPSB2VGV4dHVyZVBvc0J1ZmZlcjtcbiAgfTtcblxuICBfaW5pdFRleHR1cmVzICgpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcbiAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuc2hhZGVyUHJvZ3JhbTtcbiAgICB2YXIgeVRleHR1cmVSZWYgPSB0aGlzLl9pbml0VGV4dHVyZSgpO1xuICAgIHZhciB5U2FtcGxlclJlZiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAneVNhbXBsZXInKTtcbiAgICBnbC51bmlmb3JtMWkoeVNhbXBsZXJSZWYsIDApO1xuICAgIHRoaXMueVRleHR1cmVSZWYgPSB5VGV4dHVyZVJlZjtcblxuICAgIHZhciB1VGV4dHVyZVJlZiA9IHRoaXMuX2luaXRUZXh0dXJlKCk7XG4gICAgdmFyIHVTYW1wbGVyUmVmID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1U2FtcGxlcicpO1xuICAgIGdsLnVuaWZvcm0xaSh1U2FtcGxlclJlZiwgMSk7XG4gICAgdGhpcy51VGV4dHVyZVJlZiA9IHVUZXh0dXJlUmVmO1xuXG4gICAgdmFyIHZUZXh0dXJlUmVmID0gdGhpcy5faW5pdFRleHR1cmUoKTtcbiAgICB2YXIgdlNhbXBsZXJSZWYgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3ZTYW1wbGVyJyk7XG4gICAgZ2wudW5pZm9ybTFpKHZTYW1wbGVyUmVmLCAyKTtcbiAgICB0aGlzLnZUZXh0dXJlUmVmID0gdlRleHR1cmVSZWY7XG4gIH1cblxuICBfaW5pdFRleHR1cmUgKCkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuXG4gICAgdmFyIHRleHR1cmVSZWYgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZVJlZik7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCBudWxsKTtcblxuICAgIHJldHVybiB0ZXh0dXJlUmVmO1xuICB9XG5cbiAgX2RyYXdQaWN0dXJlR0wgKGRhdGEsIHdpZHRoLCBoZWlnaHQsIHlMaW5lc2l6ZSwgdXZMaW5lc2l6ZSkge1xuICAgIHZhciB5bGVuID0geUxpbmVzaXplICogaGVpZ2h0O1xuICAgIHZhciB1dmxlbiA9IHV2TGluZXNpemUgKiBoZWlnaHQgLyAyO1xuICAgIGlmICh0aGlzLmNocm9tYSA9PT0gNDQ0IHx8IHRoaXMuY2hyb21hID09PSA0MjIpIHtcbiAgICAgIHV2bGVuICo9IDI7XG4gICAgfVxuICAgIGRhdGEgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgICBsZXQgcmVuZGVyRGF0YSA9IHtcbiAgICAgIHlEYXRhOiBkYXRhLnN1YmFycmF5KDAsIHlsZW4pLFxuICAgICAgdURhdGE6IGRhdGEuc3ViYXJyYXkoeWxlbiwgeWxlbiArIHV2bGVuKSxcbiAgICAgIHZEYXRhOiBkYXRhLnN1YmFycmF5KHlsZW4gKyB1dmxlbiwgeWxlbiArIHV2bGVuICsgdXZsZW4pXG4gICAgfVxuICAgIHRoaXMuX2RyYXdQaWN0dXJlR0w0MjAocmVuZGVyRGF0YSwgd2lkdGgsIGhlaWdodCwgeUxpbmVzaXplLCB1dkxpbmVzaXplKTtcbiAgfVxuXG4gIF9kcmF3UGljdHVyZUdMNDIwIChkYXRhLCB3aWR0aCwgaGVpZ2h0LCB5TGluZXNpemUsIHV2TGluZXNpemUpIHtcbiAgICB2YXIgZ2wgPSB0aGlzLmNvbnRleHRHTDtcbiAgICB2YXIgdGV4dHVyZVBvc0J1ZmZlciA9IHRoaXMudGV4dHVyZVBvc0J1ZmZlcjtcbiAgICB2YXIgdVRleHR1cmVQb3NCdWZmZXIgPSB0aGlzLnVUZXh0dXJlUG9zQnVmZmVyO1xuICAgIHZhciB2VGV4dHVyZVBvc0J1ZmZlciA9IHRoaXMudlRleHR1cmVQb3NCdWZmZXI7XG5cbiAgICB2YXIgeVRleHR1cmVSZWYgPSB0aGlzLnlUZXh0dXJlUmVmO1xuICAgIHZhciB1VGV4dHVyZVJlZiA9IHRoaXMudVRleHR1cmVSZWY7XG4gICAgdmFyIHZUZXh0dXJlUmVmID0gdGhpcy52VGV4dHVyZVJlZjtcblxuICAgIHZhciB5RGF0YSA9IGRhdGEueURhdGE7XG4gICAgdmFyIHVEYXRhID0gZGF0YS51RGF0YTtcbiAgICB2YXIgdkRhdGEgPSBkYXRhLnZEYXRhO1xuXG4gICAgdmFyIHlEYXRhUGVyUm93ID0geUxpbmVzaXplO1xuICAgIHZhciB5Um93Q250ID0gaGVpZ2h0O1xuXG4gICAgdmFyIHVEYXRhUGVyUm93ID0gd2lkdGggLyAyO1xuICAgIHZhciB1Um93Q250ID0gaGVpZ2h0IC8gMjtcblxuICAgIGlmICh0aGlzLmNocm9tYSA9PT0gNDIyIHx8IHRoaXMuY2hyb21hID09PSA0NDQpIHtcbiAgICAgIHVSb3dDbnQgPSBoZWlnaHQ7XG4gICAgfVxuXG4gICAgdmFyIHZEYXRhUGVyUm93ID0gdXZMaW5lc2l6ZTtcbiAgICB2YXIgdlJvd0NudCA9IHVSb3dDbnQ7XG4gICAgXG4gICAgbGV0IHJhdGlvdyA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy53aWR0aDtcbiAgICBsZXQgcmF0aW9oID0gdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5oZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSAwO1xuICAgIGxldCB0b3AgPSAwO1xuICAgIGxldCB3ID0gdGhpcy5jYW52YXMud2lkdGg7XG4gICAgbGV0IGggPSB0aGlzLmNhbnZhcy5oZWlnaHQ7XG4gICAgaWYgKHJhdGlvdyA8IHJhdGlvaCkge1xuICAgICAgaCA9ICh0aGlzLmhlaWdodCAqIHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy53aWR0aCk7XG4gICAgICB0b3AgPSBwYXJzZUludCgodGhpcy5jYW52YXMuaGVpZ2h0IC0gKHRoaXMuaGVpZ2h0ICogdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLndpZHRoKSkgLyAyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdyA9ICh0aGlzLndpZHRoICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5oZWlnaHQpO1xuICAgICAgbGVmdCA9IHBhcnNlSW50KCh0aGlzLmNhbnZhcy53aWR0aCAtICh0aGlzLndpZHRoICogdGhpcy5jYW52YXMuaGVpZ2h0IC8gdGhpcy5oZWlnaHQpKSAvIDIpO1xuICAgIH1cbiAgICBnbC52aWV3cG9ydChsZWZ0LCB0b3AsIHcsIGgpO1xuXG4gICAgdmFyIHRleHR1cmVQb3NWYWx1ZXMgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAwLCAwLCAxLCAxLCAwLCAxXSk7XG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVQb3NCdWZmZXIpO1xuICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlUG9zVmFsdWVzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgdmFyIHVUZXh0dXJlUG9zVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB1VGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHVUZXh0dXJlUG9zVmFsdWVzLCBnbC5EWU5BTUlDX0RSQVcpO1xuXG4gICAgdmFyIHZUZXh0dXJlUG9zVmFsdWVzID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMCwgMCwgMSwgMSwgMCwgMV0pO1xuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB2VGV4dHVyZVBvc0J1ZmZlcik7XG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHZUZXh0dXJlUG9zVmFsdWVzLCBnbC5EWU5BTUlDX0RSQVcpO1xuICAgIFxuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHlUZXh0dXJlUmVmKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLkxVTUlOQU5DRSwgeURhdGFQZXJSb3csIHlSb3dDbnQsIDAsIGdsLkxVTUlOQU5DRSwgZ2wuVU5TSUdORURfQllURSwgeURhdGEpO1xuXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMSk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdVRleHR1cmVSZWYpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuTFVNSU5BTkNFLCB1RGF0YVBlclJvdywgdVJvd0NudCwgMCwgZ2wuTFVNSU5BTkNFLCBnbC5VTlNJR05FRF9CWVRFLCB1RGF0YSk7XG4gICAgXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMik7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdlRleHR1cmVSZWYpO1xuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuTFVNSU5BTkNFLCB2RGF0YVBlclJvdywgdlJvd0NudCwgMCwgZ2wuTFVNSU5BTkNFLCBnbC5VTlNJR05FRF9CWVRFLCB2RGF0YSk7XG5cbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFX1NUUklQLCAwLCA0KTtcbiAgfVxuXG4gIF9kcmF3UGljdHVyZVJHQiAoZGF0YSkge1xuXG4gIH1cblxuICByZW5kZXIgKGRhdGEsIHdpZHRoLCBoZWlnaHQsIHlMaW5lc2l6ZSwgdXZMaW5lc2l6ZSkge1xuICAgIHZhciBnbCA9IHRoaXMuY29udGV4dEdMO1xuICAgIGlmIChnbCkge1xuICAgICAgdGhpcy5fZHJhd1BpY3R1cmVHTChkYXRhLCB3aWR0aCwgaGVpZ2h0LCB5TGluZXNpemUsIHV2TGluZXNpemUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kcmF3UGljdHVyZVJHQihkYXRhKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgWVVWQ2FudmFzO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGltZVJhbmdlcyB7XG4gIGNvbnN0cnVjdG9yIChyYW5nZXMpIHtcbiAgICB0aGlzLnJhbmdlcyA9IHJhbmdlcyB8fCBbXTtcbiAgfVxuXG4gIHN0YXJ0IChpZHgpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZXNbaWR4XSA/IHRoaXMucmFuZ2VzW2lkeF0uc3RhcnQgOiAwXG4gIH1cblxuICBlbmQgKGlkeCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlc1tpZHhdID8gdGhpcy5yYW5nZXNbaWR4XS5lbmQgOiAwXG4gIH1cblxuICBhZGQgKHJhbmdlKSB7XG4gICAgdGhpcy5yYW5nZXMucHVzaChyYW5nZSlcbiAgfVxuXG4gIGdldCBsZW5ndGggKCkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlcy5sZW5ndGhcbiAgfVxufVxuIiwiY29uc3QgaXNPYmplY3RGaWxsZWQgPSAob2JqKSA9PiB7XG4gIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIGlmIChvYmpba2V5XSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFJbmZvIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMubWltZVR5cGUgPSBudWxsXG4gICAgdGhpcy5kdXJhdGlvbiA9IG51bGxcblxuICAgIHRoaXMuaGFzVmlkZW8gPSBudWxsXG4gICAgdGhpcy52aWRlbyA9IHtcbiAgICAgIGNvZGVjOiBudWxsLFxuICAgICAgd2lkdGg6IG51bGwsXG4gICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICBwcm9maWxlOiBudWxsLFxuICAgICAgbGV2ZWw6IG51bGwsXG4gICAgICBmcmFtZVJhdGU6IHtcbiAgICAgICAgZml4ZWQ6IHRydWUsXG4gICAgICAgIGZwczogMjUsXG4gICAgICAgIGZwc19udW06IDI1MDAwLFxuICAgICAgICBmcHNfZGVuOiAxMDAwXG4gICAgICB9LFxuICAgICAgY2hyb21hRm9ybWF0OiBudWxsLFxuICAgICAgcGFyUmF0aW86IHtcbiAgICAgICAgd2lkdGg6IDEsXG4gICAgICAgIGhlaWdodDogMVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaGFzQXVkaW8gPSBudWxsXG5cbiAgICB0aGlzLmF1ZGlvID0ge1xuICAgICAgY29kZWM6IG51bGwsXG4gICAgICBzYW1wbGVSYXRlOiBudWxsLFxuICAgICAgc2FtcGxlUmF0ZUluZGV4OiBudWxsLFxuICAgICAgY2hhbm5lbENvdW50OiBudWxsXG4gICAgfVxuICB9XG5cbiAgaXNDb21wbGV0ZSAoKSB7XG4gICAgcmV0dXJuIE1lZGlhSW5mby5pc0Jhc2VJbmZvUmVhZHkodGhpcykgJiYgTWVkaWFJbmZvLmlzVmlkZW9SZWFkeSh0aGlzKSAmJiBNZWRpYUluZm8uaXNBdWRpb1JlYWR5KHRoaXMpXG4gIH1cblxuICBzdGF0aWMgaXNCYXNlSW5mb1JlYWR5IChtZWRpYUluZm8pIHtcbiAgICByZXR1cm4gaXNPYmplY3RGaWxsZWQobWVkaWFJbmZvKVxuICB9XG5cbiAgc3RhdGljIGlzVmlkZW9SZWFkeSAobWVkaWFJbmZvKSB7XG4gICAgaWYgKCFtZWRpYUluZm8uaGFzVmlkZW8pIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzT2JqZWN0RmlsbGVkKG1lZGlhSW5mby52aWRlbylcbiAgfVxuXG4gIHN0YXRpYyBpc0F1ZGlvUmVhZHkgKG1lZGlhSW5mbykge1xuICAgIGlmICghbWVkaWFJbmZvLmhhc0F1ZGlvKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBpc09iamVjdEZpbGxlZChtZWRpYUluZm8udmlkZW8pXG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhU2FtcGxlIHtcbiAgY29uc3RydWN0b3IgKGluZm8pIHtcbiAgICBsZXQgX2RlZmF1bHQgPSBNZWRpYVNhbXBsZS5nZXREZWZhdWx0SW5mKClcblxuICAgIGlmICghaW5mbyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5mbykgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG4gICAgICByZXR1cm4gX2RlZmF1bHRcbiAgICB9XG4gICAgbGV0IHNhbXBsZSA9IE9iamVjdC5hc3NpZ24oe30sIF9kZWZhdWx0LCBpbmZvKVxuXG4gICAgT2JqZWN0LmVudHJpZXMoc2FtcGxlKS5mb3JFYWNoKChbaywgdl0pID0+IHtcbiAgICAgIHRoaXNba10gPSB2XG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyBnZXREZWZhdWx0SW5mICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHRzOiBudWxsLFxuICAgICAgcHRzOiBudWxsLFxuICAgICAgZHVyYXRpb246IG51bGwsXG4gICAgICBwb3NpdGlvbjogbnVsbCxcbiAgICAgIGlzUkFQOiBmYWxzZSwgLy8gaXMgUmFuZG9tIGFjY2VzcyBwb2ludFxuICAgICAgb3JpZ2luRHRzOiBudWxsXG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZWRpYVNlZ21lbnRMaXN0IHtcblxuICAgIGNvbnN0cnVjdG9yICh0eXBlKSB7XG4gICAgICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLl9saXN0ID0gW107XG4gICAgICAgIHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbiA9IC0xOyAvLyBjYWNoZWQgbGFzdCBpbnNlcnQgbG9jYXRpb25cbiAgICB9XG5cbiAgICBnZXQgdHlwZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90eXBlO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGggKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdC5sZW5ndGg7XG4gICAgfVxuXG4gICAgaXNFbXB0eSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0Lmxlbmd0aCA9PT0gMDtcbiAgICB9XG5cbiAgICBjbGVhciAoKSB7XG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gLTE7XG4gICAgfVxuXG4gICAgX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuX2xpc3Q7XG4gICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIC0yO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsYXN0ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICBsZXQgbWlkID0gMDtcbiAgICAgICAgbGV0IGxib3VuZCA9IDA7XG4gICAgICAgIGxldCB1Ym91bmQgPSBsYXN0O1xuXG4gICAgICAgIGxldCBpZHggPSAwO1xuXG4gICAgICAgIGlmIChiZWdpbkR0cyA8IGxpc3RbMF0ub3JpZ2luRHRzKSB7XG4gICAgICAgICAgICBpZHggPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBpZHg7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAobGJvdW5kIDw9IHVib3VuZCkge1xuICAgICAgICAgICAgbWlkID0gbGJvdW5kICsgTWF0aC5mbG9vcigodWJvdW5kIC0gbGJvdW5kKSAvIDIpO1xuICAgICAgICAgICAgaWYgKG1pZCA9PT0gbGFzdCB8fCAoYmVnaW5EdHMgPiBsaXN0W21pZF0ubGFzdFNhbXBsZS5vcmlnaW5EdHNcbiAgICAgICAgICAgICAgICAgICAgJiYgKGJlZ2luRHRzIDwgbGlzdFttaWQgKyAxXS5vcmlnaW5EdHMpKSkge1xuICAgICAgICAgICAgICAgIGlkeCA9IG1pZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGlzdFttaWRdLm9yaWdpbkR0cyA8IGJlZ2luRHRzKSB7XG4gICAgICAgICAgICAgICAgbGJvdW5kID0gbWlkICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdWJvdW5kID0gbWlkIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cblxuICAgIF9zZWFyY2hOZWFyZXN0U2VnbWVudEFmdGVyIChiZWdpbkR0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpICsgMTtcbiAgICB9XG5cbiAgICBhcHBlbmQgKHNlZ21lbnQpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLl9saXN0O1xuICAgICAgICBsZXQgbGFzdEFwcGVuZElkeCA9IHRoaXMuX2xhc3RBcHBlbmRMb2NhdGlvbjtcbiAgICAgICAgbGV0IGluc2VydElkeCA9IDA7XG5cbiAgICAgICAgaWYgKGxhc3RBcHBlbmRJZHggIT09IC0xICYmIGxhc3RBcHBlbmRJZHggPCBsaXN0Lmxlbmd0aFxuICAgICAgICAgICAgJiYgc2VnbWVudC5vcmlnaW5TdGFydER0cyA+PSBsaXN0W2xhc3RBcHBlbmRJZHhdLmxhc3RTYW1wbGUub3JpZ2luRHRzXG4gICAgICAgICAgICAmJiAoKGxhc3RBcHBlbmRJZHggPT09IGxpc3QubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICB8fCAobGFzdEFwcGVuZElkeCA8IGxpc3QubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAmJiBzZWdtZW50Lm9yaWdpblN0YXJ0RHRzIDwgbGlzdFtsYXN0QXBwZW5kSWR4ICsgMV0ub3JpZ2luU3RhcnREdHMpKSkge1xuICAgICAgICAgICAgaW5zZXJ0SWR4ID0gbGFzdEFwcGVuZElkeCArIDE7IC8vIHVzZSBjYWNoZWQgbG9jYXRpb24gaWR4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0SWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoc2VnbWVudC5vcmlnaW5TdGFydER0cykgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbGFzdEFwcGVuZExvY2F0aW9uID0gaW5zZXJ0SWR4O1xuICAgICAgICB0aGlzLl9saXN0LnNwbGljZShpbnNlcnRJZHgsIDAsIHNlZ21lbnQpO1xuICAgIH1cblxuICAgIGdldExhc3RTZWdtZW50QmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgaWR4ID0gdGhpcy5fc2VhcmNoTmVhcmVzdFNlZ21lbnRCZWZvcmUoYmVnaW5EdHMpO1xuICAgICAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0W2lkeF07XG4gICAgICAgIH0gZWxzZSB7IC8vIC0xXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExhc3RTYW1wbGVCZWZvcmUgKGJlZ2luRHRzKSB7XG4gICAgICAgIGxldCBzZWdtZW50ID0gdGhpcy5nZXRMYXN0U2VnbWVudEJlZm9yZShiZWdpbkR0cyk7XG4gICAgICAgIGlmIChzZWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VnbWVudC5sYXN0U2FtcGxlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0UkFQQmVmb3JlIChiZWdpbkR0cykge1xuICAgICAgICBsZXQgc2VnbWVudElkeCA9IHRoaXMuX3NlYXJjaE5lYXJlc3RTZWdtZW50QmVmb3JlKGJlZ2luRHRzKTtcbiAgICAgICAgbGV0IHJhbmRvbUFjY2Vzc1BvaW50cyA9IHRoaXMuX2xpc3Rbc2VnbWVudElkeF0ucmFuZG9tQWNjZXNzUG9pbnRzO1xuICAgICAgICB3aGlsZSAocmFuZG9tQWNjZXNzUG9pbnRzLmxlbmd0aCA9PT0gMCAmJiBzZWdtZW50SWR4ID4gMCkge1xuICAgICAgICAgICAgc2VnbWVudElkeC0tO1xuICAgICAgICAgICAgcmFuZG9tQWNjZXNzUG9pbnRzID0gdGhpcy5fbGlzdFtzZWdtZW50SWR4XS5yYW5kb21BY2Nlc3NQb2ludHM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmFuZG9tQWNjZXNzUG9pbnRzW3JhbmRvbUFjY2Vzc1BvaW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWFTZWdtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuc3RhcnREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5lbmREdHMgPSAtMTtcbiAgICAgICAgdGhpcy5zdGFydFB0cyA9IC0xO1xuICAgICAgICB0aGlzLmVuZFB0cyA9IC0xO1xuICAgICAgICB0aGlzLm9yaWdpblN0YXJ0RHRzID0gLTE7XG4gICAgICAgIHRoaXMub3JpZ2luRW5kRHRzID0gLTE7XG4gICAgICAgIHRoaXMucmFuZG9tQWNjZXNzUG9pbnRzID0gW107XG4gICAgICAgIHRoaXMuZmlyc3RTYW1wbGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RTYW1wbGUgPSBudWxsO1xuICAgIH1cblxuICAgIGFkZFJBUCAoc2FtcGxlKSB7XG4gICAgICAgIHNhbXBsZS5pc1JBUCA9IHRydWU7XG4gICAgICAgIHRoaXMucmFuZG9tQWNjZXNzUG9pbnRzLnB1c2goc2FtcGxlKTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEF1ZGlvVHJhY2tNZXRhIHtcbiAgY29uc3RydWN0b3IgKG1ldGEpIHtcbiAgICBjb25zdCBfZGVmYXVsdCA9IHtcbiAgICAgIHNhbXBsZVJhdGU6IDQ4MDAwLFxuICAgICAgY2hhbm5lbENvdW50OiAyLFxuICAgICAgY29kZWM6ICdtcDRhLjQwLjInLFxuICAgICAgY29uZmlnOiBbNDEsIDQwMSwgMTM2LCAwXSxcbiAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgaWQ6IDIsXG4gICAgICByZWZTYW1wbGVEdXJhdGlvbjogMjEsXG4gICAgICBzYW1wbGVSYXRlSW5kZXg6IDMsXG4gICAgICB0aW1lc2NhbGU6IDEwMDAsXG4gICAgICB0eXBlOiAnYXVkaW8nXG4gICAgfVxuICAgIGlmIChtZXRhKSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgX2RlZmF1bHQsIG1ldGEpXG4gICAgfVxuICAgIHJldHVybiBfZGVmYXVsdFxuICB9XG5cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5pbml0ID0gbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWaWRlb1RyYWNrTWV0YSB7XG4gIGNvbnN0cnVjdG9yIChtZXRhKSB7XG4gICAgY29uc3QgX2RlZmF1bHQgPSB7XG4gICAgICBhdmNjOiBudWxsLFxuICAgICAgc3BzOiBuZXcgVWludDhBcnJheSgwKSxcbiAgICAgIHBwczogbmV3IFVpbnQ4QXJyYXkoMCksXG4gICAgICBjaHJvbWFGb3JtYXQ6IDQyMCxcbiAgICAgIGNvZGVjOiAnYXZjMS42NDAwMjAnLFxuICAgICAgY29kZWNIZWlnaHQ6IDcyMCxcbiAgICAgIGNvZGVjV2lkdGg6IDEyODAsXG4gICAgICBkdXJhdGlvbjogMCxcbiAgICAgIGZyYW1lUmF0ZToge1xuICAgICAgICBmaXhlZDogdHJ1ZSxcbiAgICAgICAgZnBzOiAyNSxcbiAgICAgICAgZnBzX251bTogMjUwMDAsXG4gICAgICAgIGZwc19kZW46IDEwMDBcbiAgICAgIH0sXG4gICAgICBpZDogMSxcbiAgICAgIGxldmVsOiAnMy4yJyxcbiAgICAgIHByZXNlbnRIZWlnaHQ6IDcyMCxcbiAgICAgIHByZXNlbnRXaWR0aDogMTI4MCxcbiAgICAgIHByb2ZpbGU6ICdIaWdoJyxcbiAgICAgIHJlZlNhbXBsZUR1cmF0aW9uOiA0MCxcbiAgICAgIHBhclJhdGlvOiB7XG4gICAgICAgIGhlaWdodDogMSxcbiAgICAgICAgd2lkdGg6IDFcbiAgICAgIH0sXG4gICAgICB0aW1lc2NhbGU6IDEwMDAsXG4gICAgICB0eXBlOiAndmlkZW8nXG4gICAgfVxuXG4gICAgaWYgKG1ldGEpIHtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgbWV0YSlcbiAgICB9XG4gICAgcmV0dXJuIF9kZWZhdWx0XG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICB0aGlzLmluaXQgPSBudWxsXG4gICAgdGhpcy5zcHMgPSBudWxsXG4gICAgdGhpcy5wcHMgPSBudWxsXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBBdWRpb1RyYWNrU2FtcGxlIHtcbiAgY29uc3RydWN0b3IgKGluZm8pIHtcbiAgICBsZXQgX2RlZmF1bHQgPSBBdWRpb1RyYWNrU2FtcGxlLmdldERlZmF1bHQoKVxuICAgIGlmICghaW5mbykge1xuICAgICAgcmV0dXJuIF9kZWZhdWx0XG4gICAgfVxuICAgIGxldCBzYW1wbGUgPSBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgaW5mbylcblxuICAgIHJldHVybiBzYW1wbGVcbiAgfVxuXG4gIHN0YXRpYyBnZXREZWZhdWx0ICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHRzOiBudWxsLFxuICAgICAgcHRzOiBudWxsLFxuICAgICAgZGF0YTogbmV3IFVpbnQ4QXJyYXkoKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmlkZW9UcmFja1NhbXBsZSB7XG4gIGNvbnN0cnVjdG9yIChpbmZvKSB7XG4gICAgbGV0IF9kZWZhdWx0ID0gVmlkZW9UcmFja1NhbXBsZS5nZXREZWZhdWx0KClcblxuICAgIGlmICghaW5mbykge1xuICAgICAgcmV0dXJuIF9kZWZhdWx0XG4gICAgfVxuICAgIGxldCBzYW1wbGUgPSBPYmplY3QuYXNzaWduKHt9LCBfZGVmYXVsdCwgaW5mbylcblxuICAgIHJldHVybiBzYW1wbGVcbiAgfVxuXG4gIHN0YXRpYyBnZXREZWZhdWx0ICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZHRzOiBudWxsLFxuICAgICAgcHRzOiBudWxsLFxuICAgICAgaXNLZXlmcmFtZTogZmFsc2UsIC8vIGlzIFJhbmRvbSBhY2Nlc3MgcG9pbnRcbiAgICAgIG9yaWdpbkR0czogbnVsbCxcbiAgICAgIGRhdGE6IG5ldyBVaW50OEFycmF5KClcbiAgICB9XG4gIH1cbn1cbiIsImNsYXNzIE1TRSB7XG4gIGNvbnN0cnVjdG9yIChjb25maWdzKSB7XG4gICAgdGhpcy5jb25maWdzID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlncyk7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmNvbmZpZ3MuY29udGFpbmVyO1xuICAgIHRoaXMubWVkaWFTb3VyY2UgPSBudWxsO1xuICAgIHRoaXMuc291cmNlQnVmZmVycyA9IHt9O1xuICAgIHRoaXMucHJlbG9hZFRpbWUgPSB0aGlzLmNvbmZpZ3MucHJlbG9hZFRpbWUgfHwgMTtcbiAgICB0aGlzLm9uU291cmNlT3BlbiA9IHRoaXMub25Tb3VyY2VPcGVuLmJpbmQodGhpcylcbiAgICB0aGlzLm9uVGltZVVwZGF0ZSA9IHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcylcbiAgICB0aGlzLm9uVXBkYXRlRW5kID0gdGhpcy5vblVwZGF0ZUVuZC5iaW5kKHRoaXMpXG4gICAgdGhpcy5vbldhaXRpbmcgPSB0aGlzLm9uV2FpdGluZy5iaW5kKHRoaXMpXG4gIH1cblxuICBpbml0ICgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB0aGlzLm1lZGlhU291cmNlID0gbmV3IHNlbGYuTWVkaWFTb3VyY2UoKTtcbiAgICB0aGlzLm1lZGlhU291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ3NvdXJjZW9wZW4nLCB0aGlzLm9uU291cmNlT3Blbik7XG4gICAgdGhpcy5jb250YWluZXIuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLm1lZGlhU291cmNlKTtcbiAgICB0aGlzLnVybCA9IHRoaXMuY29udGFpbmVyLnNyYztcbiAgICB0aGlzLmNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy5vblRpbWVVcGRhdGUpO1xuICAgIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3dhaXRpbmcnLCB0aGlzLm9uV2FpdGluZyk7XG4gIH1cblxuICBvblRpbWVVcGRhdGUgKCkge1xuICAgIHRoaXMuZW1pdCgnVElNRV9VUERBVEUnLCB0aGlzLmNvbnRhaW5lcik7XG4gIH1cblxuICBvbldhaXRpbmcgKCkge1xuICAgIHRoaXMuZW1pdCgnV0FJVElORycsIHRoaXMuY29udGFpbmVyKTtcbiAgfVxuXG4gIG9uU291cmNlT3BlbiAoKSB7XG4gICAgdGhpcy5hZGRTb3VyY2VCdWZmZXJzKCk7XG4gIH1cblxuICBvblVwZGF0ZUVuZCAoKSB7XG4gICAgdGhpcy5lbWl0KCdTT1VSQ0VfVVBEQVRFX0VORCcpO1xuICAgIHRoaXMuZG9BcHBlbmQoKVxuICB9XG4gIGFkZFNvdXJjZUJ1ZmZlcnMgKCkge1xuICAgIGlmICh0aGlzLm1lZGlhU291cmNlLnJlYWR5U3RhdGUgIT09ICdvcGVuJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgc291cmNlcyA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1BSRV9TT1VSQ0VfQlVGRkVSJyk7XG4gICAgbGV0IHRyYWNrcyA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpO1xuICAgIGxldCB0cmFjaztcblxuICAgIHNvdXJjZXMgPSBzb3VyY2VzLnNvdXJjZXM7XG4gICAgbGV0IGFkZCA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwLCBrID0gT2JqZWN0LmtleXMoc291cmNlcykubGVuZ3RoOyBpIDwgazsgaSsrKSB7XG4gICAgICBsZXQgdHlwZSA9IE9iamVjdC5rZXlzKHNvdXJjZXMpW2ldO1xuICAgICAgaWYgKHR5cGUgPT09ICdhdWRpbycpIHtcbiAgICAgICAgdHJhY2sgPSB0cmFja3MuYXVkaW9UcmFjaztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICB0cmFjayA9IHRyYWNrcy52aWRlb1RyYWNrO1xuICAgICAgICAvLyByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgbGV0IGR1ciA9IHR5cGUgPT09ICdhdWRpbycgPyAyMSA6IDQwO1xuICAgICAgICBpZiAodHJhY2subWV0YSAmJiB0cmFjay5tZXRhLnJlZlNhbXBsZUR1cmF0aW9uKSBkdXIgPSB0cmFjay5tZXRhLnJlZlNhbXBsZUR1cmF0aW9uO1xuICAgICAgICBpZiAoc291cmNlc1t0eXBlXS5kYXRhLmxlbmd0aCA+PSAodGhpcy5wcmVsb2FkVGltZSAvIGR1cikpIHtcbiAgICAgICAgICBhZGQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGFkZCkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycykubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMCwgayA9IE9iamVjdC5rZXlzKHNvdXJjZXMpLmxlbmd0aDsgaSA8IGs7IGkrKykge1xuICAgICAgICBsZXQgdHlwZSA9IE9iamVjdC5rZXlzKHNvdXJjZXMpW2ldO1xuICAgICAgICBsZXQgc291cmNlID0gc291cmNlc1t0eXBlXVxuICAgICAgICBsZXQgbWltZSA9ICh0eXBlID09PSAndmlkZW8nKSA/ICd2aWRlby9tcDQ7Y29kZWNzPScgKyBzb3VyY2UubWltZXR5cGUgOiAnYXVkaW8vbXA0O2NvZGVjcz0nICsgc291cmNlLm1pbWV0eXBlXG4gICAgICAgIGxldCBzb3VyY2VCdWZmZXIgPSB0aGlzLm1lZGlhU291cmNlLmFkZFNvdXJjZUJ1ZmZlcihtaW1lKTtcbiAgICAgICAgdGhpcy5zb3VyY2VCdWZmZXJzW3R5cGVdID0gc291cmNlQnVmZmVyO1xuICAgICAgICBzb3VyY2VCdWZmZXIuYWRkRXZlbnRMaXN0ZW5lcigndXBkYXRlZW5kJywgdGhpcy5vblVwZGF0ZUVuZCk7XG4gICAgICAgIHRoaXMuZG9BcHBlbmQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkb0FwcGVuZCAoKSB7XG4gICAgbGV0IHNvdXJjZXMgPSB0aGlzLl9jb250ZXh0LmdldEluc3RhbmNlKCdQUkVfU09VUkNFX0JVRkZFUicpO1xuICAgIGlmIChzb3VyY2VzKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IHR5cGUgPSBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpW2ldXG4gICAgICAgIGxldCBzb3VyY2VCdWZmZXIgPSB0aGlzLnNvdXJjZUJ1ZmZlcnNbdHlwZV07XG4gICAgICAgIGlmICghc291cmNlQnVmZmVyLnVwZGF0aW5nKSB7XG4gICAgICAgICAgbGV0IHNvdXJjZSA9IHNvdXJjZXMuc291cmNlc1t0eXBlXTtcbiAgICAgICAgICBpZiAoc291cmNlICYmICFzb3VyY2UuaW5pdGVkKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBwZW5kIGluaXRpYWwgc2VnbWVudCcpXG4gICAgICAgICAgICBzb3VyY2VCdWZmZXIuYXBwZW5kQnVmZmVyKHNvdXJjZS5pbml0LmJ1ZmZlci5idWZmZXIpO1xuICAgICAgICAgICAgc291cmNlLmluaXRlZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gc291cmNlLmRhdGEuc2hpZnQoKVxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgc291cmNlQnVmZmVyLmFwcGVuZEJ1ZmZlcihkYXRhLmJ1ZmZlci5idWZmZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGVuZE9mU3RyZWFtICgpIHtcbiAgICBjb25zdCB7IHJlYWR5U3RhdGUsIGFjdGl2ZVNvdXJjZUJ1ZmZlcnMgfSA9IHRoaXMubWVkaWFTb3VyY2U7XG4gICAgaWYgKHJlYWR5U3RhdGUgPT09ICdvcGVuJyAmJiBhY3RpdmVTb3VyY2VCdWZmZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5tZWRpYVNvdXJjZS5lbmRPZlN0cmVhbSgpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGxvZ1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZSAoZW5kLCBzdGFydCA9IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycykubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBidWZmZXIgPSB0aGlzLnNvdXJjZUJ1ZmZlcnNbT2JqZWN0LmtleXModGhpcy5zb3VyY2VCdWZmZXJzKVtpXV07XG4gICAgICBpZiAoIWJ1ZmZlci51cGRhdGluZykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGFydCwgZW5kKVxuICAgICAgICBidWZmZXIucmVtb3ZlKHN0YXJ0LCBlbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZW1vdmVCdWZmZXJzICgpIHtcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgYnVmZmVyID0gdGhpcy5zb3VyY2VCdWZmZXJzW09iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycylbaV1dO1xuICAgICAgYnVmZmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWVuZCcsIHRoaXMub25VcGRhdGVFbmQpO1xuXG4gICAgICBsZXQgdGFzaztcbiAgICAgIGlmIChidWZmZXIudXBkYXRpbmcpIHtcbiAgICAgICAgdGFzayA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZG9DbGVhbkJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCByZXRyeVRpbWUgPSAzXG5cbiAgICAgICAgICAgIGNvbnN0IGNsZWFuID0gKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoIWJ1ZmZlci51cGRhdGluZykge1xuICAgICAgICAgICAgICAgIE1TRS5jbGVhckJ1ZmZlcihidWZmZXIpXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmV0cnlUaW1lID4gMCl7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChjbGVhbiwgMjAwKVxuICAgICAgICAgICAgICAgIHJldHJ5VGltZS0tXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2V0VGltZW91dChjbGVhbiwgMjAwKVxuICAgICAgICAgICAgYnVmZmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3VwZGF0ZWVuZCcsIGRvQ2xlYW5CdWZmZXIpXG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1ZmZlci5hZGRFdmVudExpc3RlbmVyKCd1cGRhdGVlbmQnLCBkb0NsZWFuQnVmZmVyKVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgTVNFLmNsZWFyQnVmZmVyKGJ1ZmZlcilcbiAgICAgICAgdGFzayA9IFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG5cbiAgICAgIHRhc2tMaXN0LnB1c2godGFzaylcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGFza0xpc3QpXG4gIH1cblxuICBkZXN0cm95ICgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVCdWZmZXJzKCkudGhlbigoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQnVmZmVycykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuc291cmNlQnVmZmVyc1tPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpW2ldXTtcbiAgICAgICAgdGhpcy5tZWRpYVNvdXJjZS5yZW1vdmVTb3VyY2VCdWZmZXIoYnVmZmVyKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc291cmNlQnVmZmVyc1tPYmplY3Qua2V5cyh0aGlzLnNvdXJjZUJ1ZmZlcnMpW2ldXTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMub25UaW1lVXBkYXRlKTtcbiAgICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dhaXRpbmcnLCB0aGlzLm9uV2FpdGluZyk7XG4gICAgICB0aGlzLm1lZGlhU291cmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3NvdXJjZW9wZW4nLCB0aGlzLm9uU291cmNlT3Blbik7XG5cbiAgICAgIHRoaXMuZW5kT2ZTdHJlYW0oKVxuICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy51cmwpO1xuXG4gICAgICB0aGlzLnVybCA9IG51bGxcbiAgICAgIHRoaXMuY29uZmlncyA9IHt9O1xuICAgICAgdGhpcy5jb250YWluZXIgPSBudWxsO1xuICAgICAgdGhpcy5tZWRpYVNvdXJjZSA9IG51bGw7XG4gICAgICB0aGlzLnNvdXJjZUJ1ZmZlcnMgPSB7fTtcbiAgICAgIHRoaXMucHJlbG9hZFRpbWUgPSAxO1xuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xlYXJCdWZmZXIgKGJ1ZmZlcikge1xuICAgIGNvbnN0IGJ1ZmZlcmVkID0gYnVmZmVyLmJ1ZmZlcmVkO1xuICAgIGxldCBiRW5kID0gMC4xXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGJ1ZmZlcmVkLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBiRW5kID0gYnVmZmVyZWQuZW5kKGkpXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBidWZmZXIucmVtb3ZlKDAsIGJFbmQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gRE8gTk9USElOR1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTVNFO1xuIiwiaW1wb3J0IENvbmNhdCBmcm9tICdjb25jYXQtdHlwZWQtYXJyYXknXG5cbmNsYXNzIEJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yIChidWZmZXIpIHtcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlciB8fCBuZXcgVWludDhBcnJheSgwKVxuICB9XG5cbiAgd3JpdGUgKC4uLmJ1ZmZlcikge1xuICAgIGJ1ZmZlci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgdGhpcy5idWZmZXIgPSBDb25jYXQoVWludDhBcnJheSwgdGhpcy5idWZmZXIsIGl0ZW0pXG4gICAgfSlcbiAgfVxuXG4gIHN0YXRpYyB3cml0ZVVpbnQzMiAodmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgdmFsdWUgPj4gMjQsXG4gICAgICAodmFsdWUgPj4gMTYpICYgMHhmZixcbiAgICAgICh2YWx1ZSA+PiA4KSAmIDB4ZmYsXG4gICAgICB2YWx1ZSAmIDB4ZmZcbiAgICBdKVxuICB9XG5cbiAgc3RhdGljIHJlYWRBc0ludCAoYXJyKSB7XG4gICAgbGV0IHRlbXAgPSAnJ1xuXG4gICAgZnVuY3Rpb24gcGFkU3RhcnQ0SGV4IChoZXhOdW0pIHtcbiAgICAgIGxldCBoZXhTdHIgPSBoZXhOdW0udG9TdHJpbmcoMTYpXG4gICAgICByZXR1cm4gaGV4U3RyLnBhZFN0YXJ0KDIsICcwJylcbiAgICB9XG5cbiAgICBhcnIuZm9yRWFjaChudW0gPT4ge1xuICAgICAgdGVtcCArPSBwYWRTdGFydDRIZXgobnVtKVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcnNlSW50KHRlbXAsIDE2KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1ZmZlclxuIiwiY2xhc3MgU3RyZWFtIHtcbiAgY29uc3RydWN0b3IgKGJ1ZmZlcikge1xuICAgIGlmIChidWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICB0aGlzLmRhdGF2aWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcik7XG4gICAgICB0aGlzLmRhdGF2aWV3LnBvc2l0aW9uID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdkYXRhIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbGVuZ3RoICgpIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXIuYnl0ZUxlbmd0aDtcbiAgfVxuXG4gIHNldCBwb3NpdGlvbiAodmFsdWUpIHtcbiAgICB0aGlzLmRhdGF2aWV3LnBvc2l0aW9uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcG9zaXRpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmRhdGF2aWV3LnBvc2l0aW9uO1xuICB9XG5cbiAgYmFjayAoY291bnQpIHtcbiAgICB0aGlzLnBvc2l0aW9uIC09IGNvdW50O1xuICB9XG5cbiAgc2tpcCAoY291bnQpIHtcbiAgICBsZXQgbG9vcCA9IE1hdGguZmxvb3IoY291bnQgLyA0KTtcbiAgICBsZXQgbGFzdCA9IGNvdW50ICUgNDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvb3A7IGkrKykge1xuICAgICAgU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDQpO1xuICAgIH1cbiAgICBpZiAobGFzdCA+IDApIHtcbiAgICAgIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCBsYXN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogW3JlYWRCeXRlIOS7jkRhdGFWaWV35Lit6K+75Y+W5pWw5o2uXVxuICAgKiBAcGFyYW0gIHtEYXRhVmlld30gYnVmZmVyIFtEYXRhVmlld+WunuS+i11cbiAgICogQHBhcmFtICB7TnVtYmVyfSBzaXplICAgW+ivu+WPluWtl+iKguaVsF1cbiAgICogQHJldHVybiB7TnVtYmVyfSAgICAgICAgW+aVtOaVsF1cbiAgICovXG4gIHN0YXRpYyByZWFkQnl0ZSAoYnVmZmVyLCBzaXplLCBzaWduKSB7XG4gICAgbGV0IHJlcztcbiAgICBzd2l0Y2ggKHNpemUpIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0SW50OChidWZmZXIucG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRVaW50OChidWZmZXIucG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBpZiAoc2lnbikge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRJbnQxNihidWZmZXIucG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IGJ1ZmZlci5nZXRVaW50MTYoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBzdXBwb3J0ZWQgZm9yIHJlYWRCeXRlIDMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0VWludDgoYnVmZmVyLnBvc2l0aW9uKSA8PCAxNjtcbiAgICAgICAgICByZXMgfD0gYnVmZmVyLmdldFVpbnQ4KGJ1ZmZlci5wb3NpdGlvbiArIDEpIDw8IDg7XG4gICAgICAgICAgcmVzIHw9IGJ1ZmZlci5nZXRVaW50OChidWZmZXIucG9zaXRpb24gKyAyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgaWYgKHNpZ24pIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0SW50MzIoYnVmZmVyLnBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXMgPSBidWZmZXIuZ2V0VWludDMyKGJ1ZmZlci5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDg6XG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3Qgc3VwcG9ydGVkIGZvciByZWFkQm9keSA4Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzID0gYnVmZmVyLmdldFVpbnQzMihidWZmZXIucG9zaXRpb24pIDw8IDMyO1xuICAgICAgICAgIHJlcyB8PSBidWZmZXIuZ2V0VWludDMyKGJ1ZmZlci5wb3NpdGlvbiArIDQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmVzID0gJyc7XG4gICAgfVxuICAgIGJ1ZmZlci5wb3NpdGlvbiArPSBzaXplO1xuICAgIHJldHVybiByZXM7XG4gIH1cblxuICByZWFkVWludDggKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgMSk7XG4gIH1cblxuICByZWFkVWludDE2ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDIpO1xuICB9XG5cbiAgcmVhZFVpbnQyNCAoKSB7XG4gICAgcmV0dXJuIFN0cmVhbS5yZWFkQnl0ZSh0aGlzLmRhdGF2aWV3LCAzKTtcbiAgfVxuXG4gIHJlYWRVaW50MzIgKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgNCk7XG4gIH1cblxuICByZWFkVWludDY0ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDgpO1xuICB9XG5cbiAgcmVhZEludDggKCkge1xuICAgIHJldHVybiBTdHJlYW0ucmVhZEJ5dGUodGhpcy5kYXRhdmlldywgMSwgdHJ1ZSk7XG4gIH1cbiAgcmVhZEludDE2ICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDIsIHRydWUpO1xuICB9XG5cbiAgcmVhZEludDMyICgpIHtcbiAgICByZXR1cm4gU3RyZWFtLnJlYWRCeXRlKHRoaXMuZGF0YXZpZXcsIDQsIHRydWUpO1xuICB9XG5cbiAgd3JpdGVVaW50MzIgKHZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KFtcbiAgICAgIHZhbHVlID4+PiAyNCAmIDB4ZmYsXG4gICAgICB2YWx1ZSA+Pj4gMTYgJiAweGZmLFxuICAgICAgdmFsdWUgPj4+IDggJiAweGZmLFxuICAgICAgdmFsdWUgJiAweGZmXG4gICAgXSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyZWFtO1xuIiwiaW1wb3J0IHsgRmV0Y2hMb2FkZXIgfSBmcm9tICd4Z3BsYXllci1sb2FkZXInXG5pbXBvcnQgeyBGbHZEZW11eGVyIH0gZnJvbSAneGdwbGF5ZXItZGVtdXgnXG5pbXBvcnQgeyBNcDRSZW11eGVyIH0gZnJvbSAneGdwbGF5ZXItcmVtdXgnXG5pbXBvcnQgeyBUcmFja3MsIFhnQnVmZmVyLCBQcmVTb3VyY2UgfSBmcm9tICd4Z3BsYXllci1idWZmZXInXG5pbXBvcnQgeyBFVkVOVFMsIFBhZ2VWaXNpYmlsaXR5IH0gZnJvbSAneGdwbGF5ZXItdXRpbHMnXG5pbXBvcnQgeyBDb21wYXRpYmlsaXR5IH0gZnJvbSAneGdwbGF5ZXItY29kZWMnXG5pbXBvcnQgUGxheWVyIGZyb20gJ3hncGxheWVyJ1xuXG5jb25zdCBERU1VWF9FVkVOVFMgPSBFVkVOVFMuREVNVVhfRVZFTlRTO1xuY29uc3QgTE9BREVSX0VWRU5UUyA9IEVWRU5UUy5MT0FERVJfRVZFTlRTXG5jb25zdCBCUk9XU0VSX0VWRU5UUyA9IEVWRU5UUy5CUk9XU0VSX0VWRU5UU1xuXG5jb25zdCBUYWcgPSAnRkxWQ29udHJvbGxlcidcblxuY2xhc3MgTG9nZ2VyIHtcbiAgd2FybiAoKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGbHZDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IgKHBsYXllcikge1xuICAgIHRoaXMuVEFHID0gVGFnXG4gICAgdGhpcy5fcGxheWVyID0gcGxheWVyXG5cbiAgICB0aGlzLnZpZGVvID0gdGhpcy5fcGxheWVyLnZpZGVvO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbml0U2VnbWVudEFycml2ZWQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnRkVUQ0hfTE9BREVSJywgRmV0Y2hMb2FkZXIpXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnTE9BREVSX0JVRkZFUicsIFhnQnVmZmVyKVxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ1BSRV9TT1VSQ0VfQlVGRkVSJywgUHJlU291cmNlKVxuXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnRkxWX0RFTVVYRVInLCBGbHZEZW11eGVyKVxuXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnTVA0X1JFTVVYRVInLCBNcDRSZW11eGVyKVxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ1RSQUNLUycsIFRyYWNrcylcblxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ0NPTVBBVElCSUxJVFknLCBDb21wYXRpYmlsaXR5KVxuICAgIHRoaXMuX2NvbnRleHQucmVnaXN0cnkoJ1BBR0VfVklTSUJJTElUWScsIFBhZ2VWaXNpYmlsaXR5KVxuXG4gICAgdGhpcy5fY29udGV4dC5yZWdpc3RyeSgnTE9HR0VSJywgTG9nZ2VyKVxuXG4gICAgdGhpcy5pbml0TGlzdGVuZXJzKClcbiAgfVxuXG4gIGluaXRMaXN0ZW5lcnMgKCkge1xuICAgIHRoaXMub24oTE9BREVSX0VWRU5UUy5MT0FERVJfREFUQUxPQURFRCwgdGhpcy5faGFuZGxlTG9hZGVyRGF0YUxvYWRlZC5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oTE9BREVSX0VWRU5UUy5MT0FERVJfRVJST1IsIHRoaXMuX2hhbmRsZU5ldHdvcmtFcnJvci5iaW5kKHRoaXMpKVxuXG4gICAgdGhpcy5vbihERU1VWF9FVkVOVFMuTUVESUFfSU5GTywgdGhpcy5faGFuZGxlTWVkaWFJbmZvLmJpbmQodGhpcykpXG4gICAgdGhpcy5vbihERU1VWF9FVkVOVFMuTUVUQURBVEFfUEFSU0VELCB0aGlzLl9oYW5kbGVNZXRhZGF0YVBhcnNlZC5iaW5kKHRoaXMpKVxuICAgIHRoaXMub24oREVNVVhfRVZFTlRTLkRFTVVYX0NPTVBMRVRFLCB0aGlzLl9oYW5kbGVEZW11eENvbXBsZXRlLmJpbmQodGhpcykpXG4gICAgdGhpcy5vbihERU1VWF9FVkVOVFMuREVNVVhfRVJST1IsIHRoaXMuX2hhbmRsZURlbXV4RXJyb3IuYmluZCh0aGlzKSlcblxuICB9XG5cbiAgX2hhbmRsZU1lZGlhSW5mbyAoKSB7XG4gICAgaWYgKCF0aGlzLl9jb250ZXh0Lm1lZGlhSW5mbykge1xuICAgICAgdGhpcy5lbWl0KERFTVVYX0VWRU5UUy5ERU1VWF9FUlJPUiwgbmV3IEVycm9yKCdmYWlsZWQgdG8gZ2V0IG1lZGlhaW5mbycpKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVMb2FkZXJEYXRhTG9hZGVkICgpIHtcbiAgICB0aGlzLmVtaXRUbygnRkxWX0RFTVVYRVInLCBERU1VWF9FVkVOVFMuREVNVVhfU1RBUlQpXG4gIH1cblxuICBfaGFuZGxlTWV0YWRhdGFQYXJzZWQgKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2F1ZGlvJykge1xuICAgICAgLy8g5bCG6Z+z6aKRbWV0YeS/oeaBr+S6pOe7mWF1ZGlvQ29udGV4dO+8jOS4jei1sHJlbXV45bCB6KOFXG4gICAgICBjb25zdCB7IGF1ZGlvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gICAgICBpZiAoYXVkaW9UcmFjayAmJiBhdWRpb1RyYWNrLm1ldGEpIHtcbiAgICAgICAgdGhpcy5fc2V0TWV0YVRvQXVkaW8oYXVkaW9UcmFjay5tZXRhKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHZpZGVvVHJhY2sgfSA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ1RSQUNLUycpXG4gICAgICBpZiAodmlkZW9UcmFjayAmJiB2aWRlb1RyYWNrLm1ldGEpIHtcbiAgICAgICAgdGhpcy5fc2V0TWV0YVRvVmlkZW8odmlkZW9UcmFjay5tZXRhKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVEZW11eENvbXBsZXRlICgpIHtcbiAgICBpZih0aGlzLl9wbGF5ZXIudmlkZW8pIHtcbiAgICAgIGNvbnN0IHsgdmlkZW9UcmFjaywgYXVkaW9UcmFjayB9ID0gdGhpcy5fY29udGV4dC5nZXRJbnN0YW5jZSgnVFJBQ0tTJyk7XG4gICAgICB0aGlzLl9wbGF5ZXIudmlkZW8ub25EZW11eENvbXBsZXRlKHZpZGVvVHJhY2ssIGF1ZGlvVHJhY2spO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVBcHBlbmRJbml0U2VnbWVudCAoKSB7XG4gICAgdGhpcy5zdGF0ZS5pbml0U2VnbWVudEFycml2ZWQgPSB0cnVlXG4gIC8vICB0aGlzLm1zZS5hZGRTb3VyY2VCdWZmZXJzKClcbiAgfVxuXG5cbiAgX2hhbmRsZU5ldHdvcmtFcnJvciAoKSB7XG4gICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgbmV3IFBsYXllci5FcnJvcnMoJ25ldHdvcmsnLCB0aGlzLl9wbGF5ZXIuY29uZmlnLnVybCkpXG4gIH1cblxuICBfaGFuZGxlRGVtdXhFcnJvciAoKSB7XG4gICAgdGhpcy5fcGxheWVyLmVtaXQoJ2Vycm9yJywgbmV3IFBsYXllci5FcnJvcnMoJ3BhcnNlJywgdGhpcy5fcGxheWVyLmNvbmZpZy51cmwpKVxuICB9XG5cblxuICBfc2V0TWV0YVRvQXVkaW8gKGF1ZGlvTWV0YSkge1xuICAgIGlmICh0aGlzLl9wbGF5ZXIudmlkZW8pIHtcbiAgICAgIHRoaXMuX3BsYXllci52aWRlby5zZXRBdWRpb01ldGEoYXVkaW9NZXRhKTtcbiAgICB9XG4gIH1cblxuICBfc2V0TWV0YVRvVmlkZW8gKHZpZGVvTWV0YSkge1xuICAgIGlmICh0aGlzLl9wbGF5ZXIudmlkZW8pIHtcbiAgICAgIHRoaXMuX3BsYXllci52aWRlby5zZXRWaWRlb01ldGEodmlkZW9NZXRhKTtcbiAgICB9XG4gIH1cblxuICBzZWVrICgpIHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaW5pdFNlZ21lbnRBcnJpdmVkKSB7XG4gICAgICB0aGlzLmxvYWREYXRhKClcbiAgICB9XG4gIH1cblxuICBsb2FkRGF0YSAoKSB7XG4gICAgdGhpcy5lbWl0KExPQURFUl9FVkVOVFMuTEFERVJfU1RBUlQsIHRoaXMuX3BsYXllci5jb25maWcudXJsKVxuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIGNvbnN0IGxvYWRlciA9IHRoaXMuX2NvbnRleHQuZ2V0SW5zdGFuY2UoJ0ZFVENIX0xPQURFUicpXG5cbiAgICBpZiAobG9hZGVyKSB7XG4gICAgICBsb2FkZXIuY2FuY2VsKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICog5L+d6K+B5b2T5YmN5pKt5pS+55qE6KeG6aKR5LulZ29w5Li65Y2V5L2NXG4gICAqIEBwYXJhbSB2aWRlb1RyYWNrXG4gICAqL1xuICBzdGF0aWMgcmVzb2x2ZVZpZGVvR09QICh2aWRlb1RyYWNrKSB7XG4gICAgY29uc3QgeyBzYW1wbGVzIH0gPSB2aWRlb1RyYWNrO1xuICAgIGlmICghc2FtcGxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZmlyc3RJZnJhbWVJZHggPSBudWxsXG4gICAgbGV0IGxhc3RJZnJhbWVJZHggPSBudWxsXG5cbiAgICBpZiAodmlkZW9UcmFjay50ZW1wU2FtcGxlcyAmJiB2aWRlb1RyYWNrLnRlbXBTYW1wbGVzLmxlbmd0aCkge1xuICAgICAgLy8g5bCG57yT5a2Y5bin5pS+572u5Yiw6Zif5YiX55qE5aS06YOoXG4gICAgICBzYW1wbGVzLnVuc2hpZnQuYXBwbHkoc2FtcGxlcywgdmlkZW9UcmFjay50ZW1wU2FtcGxlcyk7XG4gICAgfVxuXG4gICAgLy8g5a+75om+56ys5LiA5LiqSeW4p1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzYW1wbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gc2FtcGxlc1tpXTtcbiAgICAgIGlmIChjdXJyZW50LmlzS2V5ZnJhbWUpIHtcbiAgICAgICAgZmlyc3RJZnJhbWVJZHggPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlr7vmib7mnIDlkI7kuIDkuKpJ5binXG4gICAgZm9yIChsZXQgaSA9IHNhbXBsZXMubGVuZ3RoIC0gMTsgaSA+IDA7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudCA9IHNhbXBsZXNbaV1cblxuICAgICAgaWYgKGN1cnJlbnQuaXNLZXlmcmFtZSkge1xuICAgICAgICBsYXN0SWZyYW1lSWR4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0SWZyYW1lSWR4ICE9PSAwKSB7XG4gICAgICBzYW1wbGVzLnNwbGljZSgwLCBmaXJzdElmcmFtZUlkeCAtIDEpXG4gICAgfVxuXG4gICAgdmlkZW9UcmFjay5zYW1wbGVzID0gc2FtcGxlcy5zbGljZSgwLCBsYXN0SWZyYW1lSWR4KVxuICAgIGNvbnN0IHJlc3QgPSBzYW1wbGVzLnNsaWNlKGxhc3RJZnJhbWVJZHgpXG4gICAgaWYgKHZpZGVvVHJhY2sudGVtcFNhbXBsZXMpIHtcbiAgICAgIHZpZGVvVHJhY2sudGVtcFNhbXBsZXMucHVzaC5hcHBseSh2aWRlb1RyYWNrLnRlbXBTYW1wbGVzLCByZXN0KVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyDlsIbliankuIvnmoTluKfnvJPlrZjvvIznrYnlvoXkuIDkuKrlrozmlbTnmoRnb3BcbiAgICAgIHZpZGVvVHJhY2sudGVtcFNhbXBsZXMgPSByZXN0XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJ3hncGxheWVyJ1xuaW1wb3J0IHsgQ29udGV4dCwgRVZFTlRTIH0gZnJvbSAneGdwbGF5ZXItdXRpbHMnO1xuaW1wb3J0IEZMViBmcm9tICcuL2Zsdi1saXZlLW1vYmlsZSdcbmNvbnN0IGZsdkFsbG93ZWRFdmVudHMgPSBFVkVOVFMuRmx2QWxsb3dlZEV2ZW50cztcblxuY2xhc3MgRmx2UGxheWVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IgKGNvbmZpZykge1xuICAgIGlmICghY29uZmlnLm1lZGlhVHlwZSkge1xuICAgICAgY29uZmlnLm1lZGlhVHlwZSA9ICdtb2JpbGUtdmlkZW8nXG4gICAgfVxuICAgIHN1cGVyKGNvbmZpZylcbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChmbHZBbGxvd2VkRXZlbnRzKVxuICAgIHRoaXMuaW5pdEV2ZW50cygpXG4gIH1cblxuICBzdGFydCAoKSB7XG4gICAgdGhpcy5pbml0Rmx2KClcbiAgICB0aGlzLmNvbnRleHQuaW5pdCgpXG4gICAgdGhpcy5mbHYuc2VlaygwKTtcbiAgICBzdXBlci5zdGFydCh0aGlzLmNvbmZpZy51cmwpO1xuICAgIHRoaXMucGxheSgpO1xuICB9XG5cbiAgaW5pdEZsdkV2ZW50cyAoZmx2KSB7XG4gICAgY29uc3QgcGxheWVyID0gdGhpcztcbiAgICBmbHYub25jZShFVkVOVFMuUkVNVVhfRVZFTlRTLklOSVRfU0VHTUVOVCwgKCkgPT4ge1xuICAgICAgUGxheWVyLnV0aWwuYWRkQ2xhc3MocGxheWVyLnJvb3QsICd4Z3BsYXllci1pcy1saXZlJylcbiAgICAgIGlmICghUGxheWVyLnV0aWwuZmluZERvbSh0aGlzLnJvb3QsICd4Zy1saXZlJykpIHtcbiAgICAgICAgY29uc3QgbGl2ZSA9IFBsYXllci51dGlsLmNyZWF0ZURvbSgneGctbGl2ZScsICfmraPlnKjnm7Tmkq0nLCB7fSwgJ3hncGxheWVyLWxpdmUnKVxuICAgICAgICBwbGF5ZXIuY29udHJvbHMuYXBwZW5kQ2hpbGQobGl2ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZmx2Lm9uY2UoRVZFTlRTLkxPQURFUl9FVkVOVFMuTE9BREVSX0NPTVBMRVRFLCAoKSA9PiB7XG4gICAgICAvLyDnm7Tmkq3lrozmiJDvvIzlvoXmkq3mlL7lmajmkq3lroznvJPlrZjlkI7lj5HpgIHlhbPpl63kuovku7ZcbiAgICAgIGlmICghcGxheWVyLnBhdXNlZCkge1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBlbmQgPSBwbGF5ZXIuZ2V0QnVmZmVyZWRSYW5nZSgpWzFdXG4gICAgICAgICAgaWYgKE1hdGguYWJzKHBsYXllci5jdXJyZW50VGltZSAtIGVuZCkgPCAwLjUpIHtcbiAgICAgICAgICAgIHBsYXllci5lbWl0KCdlbmRlZCcpXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcilcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDIwMClcbiAgICAgIH1cbiAgICB9KVxuICAgIGZsdi5vbihFVkVOVFMuQlJPV1NFUl9FVkVOVFMuVklTSUJJTElUWV9DSEFOR0UsIChoaWRkZW4pID0+IHtcbiAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsYXkoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0RXZlbnRzICgpIHtcbiAgICB0aGlzLm9uKCd0aW1ldXBkYXRlJywgKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkRGF0YSgpXG4gICAgfSlcblxuICAgIHRoaXMub24oJ3NlZWtpbmcnLCAoKSA9PiB7XG4gICAgICBjb25zdCB0aW1lID0gdGhpcy5jdXJyZW50VGltZVxuICAgICAgY29uc3QgcmFuZ2UgPSB0aGlzLmdldEJ1ZmZlcmVkUmFuZ2UoKVxuICAgICAgaWYgKHRpbWUgPiByYW5nZVsxXSB8fCB0aW1lIDwgcmFuZ2VbMF0pIHtcbiAgICAgICAgdGhpcy5mbHYuc2Vlayh0aGlzLmN1cnJlbnRUaW1lKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBpbml0Rmx2ICgpIHtcbiAgICBjb25zdCBmbHYgPSB0aGlzLmNvbnRleHQucmVnaXN0cnkoJ0ZMVl9DT05UUk9MTEVSJywgRkxWKSh0aGlzKVxuICAgIHRoaXMuaW5pdEZsdkV2ZW50cyhmbHYpXG4gICAgdGhpcy5mbHYgPSBmbHZcbiAgfVxuXG4gIHBsYXkgKCkge1xuICAgIGlmICh0aGlzLl9oYXNTdGFydCAmJiB0aGlzLnBhdXNlZCkge1xuICAgICAgdGhpcy5fZGVzdHJveSgpXG4gICAgICB0aGlzLmNvbnRleHQgPSBuZXcgQ29udGV4dChmbHZBbGxvd2VkRXZlbnRzKVxuICAgICAgY29uc3QgZmx2ID0gdGhpcy5jb250ZXh0LnJlZ2lzdHJ5KCdGTFZfQ09OVFJPTExFUicsIEZMVikodGhpcylcbiAgICAgIHRoaXMuaW5pdEZsdkV2ZW50cyhmbHYpXG4gICAgICB0aGlzLmZsdiA9IGZsdlxuICAgICAgdGhpcy5jb250ZXh0LmluaXQoKVxuICAgICAgdGhpcy5sb2FkRGF0YSgpXG4gICAgICBzdXBlci5zdGFydCgpXG4gICAgICBzdXBlci5wbGF5KClcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIucGxheSgpXG4gICAgfVxuICB9XG5cbiAgcGF1c2UgKCkge1xuICAgIHN1cGVyLnBhdXNlKClcbiAgICBpZiAodGhpcy5mbHYpIHtcbiAgICAgIHRoaXMuZmx2LnBhdXNlKClcbiAgICB9XG4gIH1cblxuICBsb2FkRGF0YSAodGltZSA9IHRoaXMuY3VycmVudFRpbWUpIHtcbiAgICBpZiAodGhpcy5mbHYpIHtcbiAgICAgIHRoaXMuZmx2LnNlZWsodGltZSlcbiAgICB9XG4gIH1cbiAgZGVzdHJveSAoKSB7XG4gICAgdGhpcy5fZGVzdHJveSgpXG4gICAgc3VwZXIuZGVzdHJveSgpO1xuICB9XG5cbiAgX2Rlc3Ryb3kgKCkge1xuICAgIHRoaXMuY29udGV4dC5kZXN0cm95KClcbiAgICB0aGlzLmZsdiA9IG51bGxcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsXG4gIH1cblxuICBnZXQgc3JjICgpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U3JjXG4gIH1cblxuICBzZXQgc3JjICh1cmwpIHtcbiAgICB0aGlzLnBsYXllci5jb25maWcudXJsID0gdXJsXG4gICAgaWYgKCF0aGlzLnBhdXNlZCkge1xuICAgICAgdGhpcy5wYXVzZSgpXG4gICAgICB0aGlzLm9uY2UoJ3BhdXNlJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXJ0KHVybClcbiAgICAgIH0pXG4gICAgICB0aGlzLm9uY2UoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgICAgIHRoaXMucGxheSgpXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXJ0KHVybClcbiAgICB9XG4gICAgdGhpcy5vbmNlKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50VGltZSA9IDBcbiAgICB9KVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRmx2UGxheWVyXG4iLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUGxheWVyXCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=