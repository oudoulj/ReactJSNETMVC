(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["components"],{

/***/ "./Scripts/Test.jsx":
/*!**************************!*\
  !*** ./Scripts/Test.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function Test() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      lazySelect = _useState2[0],
      setLazySelect = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      framework = _useState4[0],
      setFramework = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js")).then(function (component) {
      setLazySelect({
        Component: component["default"]
      });
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "That line is inside the React test component (Test.jsx)"), lazySelect && lazySelect.Component ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(lazySelect.Component, {
    defaultValue: 'React',
    isMulti: true,
    options: ['React', 'Vue', 'Svelte', 'Ember', 'Angular'].map(function (x) {
      return {
        value: x,
        label: x
      };
    }),
    className: "basic-multi-select",
    classNamePrefix: "select",
    onChange: setFramework
  }) : 'Loading', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, framework ? 'Pick a framework' : null));
}

/***/ }),

/***/ "./Scripts/expose-components.js":
/*!**************************************!*\
  !*** ./Scripts/expose-components.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Test_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Test.jsx */ "./Scripts/Test.jsx");
﻿// All JavaScript in here will be loaded server-side
// Expose components globally so ReactJS.NET can use them






// Needed when we want to bundle React ourselves, also make sure to use SetLoadReact(false) in the ReactConfig.cs file
global.React = react__WEBPACK_IMPORTED_MODULE_0___default.a;
global.ReactDOM = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a;
global.ReactDOMServer = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a;

// Components to expose
global.RootComponent = _Test_jsx__WEBPACK_IMPORTED_MODULE_3__["default"];
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler-tracing.development.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.13.6
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Helps identify side effects in begin-phase lifecycle hooks and setState reducers:


// In some cases, StrictMode should also double-render lifecycles.
// This can be confusing for tests though,
// And it can be bad for performance in production.
// This feature flag can be used to control the behavior:


// To preserve the "Pause on caught exceptions" behavior of the debugger, we
// replay the begin phase of a failed component inside invokeGuardedCallback.


// Warn about deprecated, async-unsafe lifecycles; relates to RFC #6:


// Gather advanced timing metrics for Profiler subtrees.


// Trace which interactions trigger each commit.
var enableSchedulerTracing = true;

// Only used in www builds.
 // TODO: true? Here it might just be false.

// Only used in www builds.


// Only used in www builds.


// React Fire: prevent the value and checked attributes from syncing
// with their related DOM properties


// These APIs will no longer be "unstable" in the upcoming 16.7 release,
// Control this behavior with a flag to support 16.6 minor releases in the meanwhile.

var DEFAULT_THREAD_ID = 0;

// Counters used to generate unique IDs.
var interactionIDCounter = 0;
var threadIDCounter = 0;

// Set of currently traced interactions.
// Interactions "stack"–
// Meaning that newly traced interactions are appended to the previously active set.
// When an interaction goes out of scope, the previous set (if any) is restored.
exports.__interactionsRef = null;

// Listener(s) to notify when interactions begin and end.
exports.__subscriberRef = null;

if (enableSchedulerTracing) {
  exports.__interactionsRef = {
    current: new Set()
  };
  exports.__subscriberRef = {
    current: null
  };
}

function unstable_clear(callback) {
  if (!enableSchedulerTracing) {
    return callback();
  }

  var prevInteractions = exports.__interactionsRef.current;
  exports.__interactionsRef.current = new Set();

  try {
    return callback();
  } finally {
    exports.__interactionsRef.current = prevInteractions;
  }
}

function unstable_getCurrent() {
  if (!enableSchedulerTracing) {
    return null;
  } else {
    return exports.__interactionsRef.current;
  }
}

function unstable_getThreadID() {
  return ++threadIDCounter;
}

function unstable_trace(name, timestamp, callback) {
  var threadID = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : DEFAULT_THREAD_ID;

  if (!enableSchedulerTracing) {
    return callback();
  }

  var interaction = {
    __count: 1,
    id: interactionIDCounter++,
    name: name,
    timestamp: timestamp
  };

  var prevInteractions = exports.__interactionsRef.current;

  // Traced interactions should stack/accumulate.
  // To do that, clone the current interactions.
  // The previous set will be restored upon completion.
  var interactions = new Set(prevInteractions);
  interactions.add(interaction);
  exports.__interactionsRef.current = interactions;

  var subscriber = exports.__subscriberRef.current;
  var returnValue = void 0;

  try {
    if (subscriber !== null) {
      subscriber.onInteractionTraced(interaction);
    }
  } finally {
    try {
      if (subscriber !== null) {
        subscriber.onWorkStarted(interactions, threadID);
      }
    } finally {
      try {
        returnValue = callback();
      } finally {
        exports.__interactionsRef.current = prevInteractions;

        try {
          if (subscriber !== null) {
            subscriber.onWorkStopped(interactions, threadID);
          }
        } finally {
          interaction.__count--;

          // If no async work was scheduled for this interaction,
          // Notify subscribers that it's completed.
          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        }
      }
    }
  }

  return returnValue;
}

function unstable_wrap(callback) {
  var threadID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_THREAD_ID;

  if (!enableSchedulerTracing) {
    return callback;
  }

  var wrappedInteractions = exports.__interactionsRef.current;

  var subscriber = exports.__subscriberRef.current;
  if (subscriber !== null) {
    subscriber.onWorkScheduled(wrappedInteractions, threadID);
  }

  // Update the pending async work count for the current interactions.
  // Update after calling subscribers in case of error.
  wrappedInteractions.forEach(function (interaction) {
    interaction.__count++;
  });

  var hasRun = false;

  function wrapped() {
    var prevInteractions = exports.__interactionsRef.current;
    exports.__interactionsRef.current = wrappedInteractions;

    subscriber = exports.__subscriberRef.current;

    try {
      var returnValue = void 0;

      try {
        if (subscriber !== null) {
          subscriber.onWorkStarted(wrappedInteractions, threadID);
        }
      } finally {
        try {
          returnValue = callback.apply(undefined, arguments);
        } finally {
          exports.__interactionsRef.current = prevInteractions;

          if (subscriber !== null) {
            subscriber.onWorkStopped(wrappedInteractions, threadID);
          }
        }
      }

      return returnValue;
    } finally {
      if (!hasRun) {
        // We only expect a wrapped function to be executed once,
        // But in the event that it's executed more than once–
        // Only decrement the outstanding interaction counts once.
        hasRun = true;

        // Update pending async counts for all wrapped interactions.
        // If this was the last scheduled async work for any of them,
        // Mark them as completed.
        wrappedInteractions.forEach(function (interaction) {
          interaction.__count--;

          if (subscriber !== null && interaction.__count === 0) {
            subscriber.onInteractionScheduledWorkCompleted(interaction);
          }
        });
      }
    }
  }

  wrapped.cancel = function cancel() {
    subscriber = exports.__subscriberRef.current;

    try {
      if (subscriber !== null) {
        subscriber.onWorkCanceled(wrappedInteractions, threadID);
      }
    } finally {
      // Update pending async counts for all wrapped interactions.
      // If this was the last scheduled async work for any of them,
      // Mark them as completed.
      wrappedInteractions.forEach(function (interaction) {
        interaction.__count--;

        if (subscriber && interaction.__count === 0) {
          subscriber.onInteractionScheduledWorkCompleted(interaction);
        }
      });
    }
  };

  return wrapped;
}

var subscribers = null;
if (enableSchedulerTracing) {
  subscribers = new Set();
}

function unstable_subscribe(subscriber) {
  if (enableSchedulerTracing) {
    subscribers.add(subscriber);

    if (subscribers.size === 1) {
      exports.__subscriberRef.current = {
        onInteractionScheduledWorkCompleted: onInteractionScheduledWorkCompleted,
        onInteractionTraced: onInteractionTraced,
        onWorkCanceled: onWorkCanceled,
        onWorkScheduled: onWorkScheduled,
        onWorkStarted: onWorkStarted,
        onWorkStopped: onWorkStopped
      };
    }
  }
}

function unstable_unsubscribe(subscriber) {
  if (enableSchedulerTracing) {
    subscribers.delete(subscriber);

    if (subscribers.size === 0) {
      exports.__subscriberRef.current = null;
    }
  }
}

function onInteractionTraced(interaction) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionTraced(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onInteractionScheduledWorkCompleted(interaction) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onInteractionScheduledWorkCompleted(interaction);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkScheduled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkScheduled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStarted(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStarted(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkStopped(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkStopped(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

function onWorkCanceled(interactions, threadID) {
  var didCatchError = false;
  var caughtError = null;

  subscribers.forEach(function (subscriber) {
    try {
      subscriber.onWorkCanceled(interactions, threadID);
    } catch (error) {
      if (!didCatchError) {
        didCatchError = true;
        caughtError = error;
      }
    }
  });

  if (didCatchError) {
    throw caughtError;
  }
}

exports.unstable_clear = unstable_clear;
exports.unstable_getCurrent = unstable_getCurrent;
exports.unstable_getThreadID = unstable_getThreadID;
exports.unstable_trace = unstable_trace;
exports.unstable_wrap = unstable_wrap;
exports.unstable_subscribe = unstable_subscribe;
exports.unstable_unsubscribe = unstable_unsubscribe;
  })();
}


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
/*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** @license React v0.13.6
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var enableSchedulerDebugging = false;

/* eslint-disable no-var */

// TODO: Use symbols?
var ImmediatePriority = 1;
var UserBlockingPriority = 2;
var NormalPriority = 3;
var LowPriority = 4;
var IdlePriority = 5;

// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
// Math.pow(2, 30) - 1
// 0b111111111111111111111111111111
var maxSigned31BitInt = 1073741823;

// Times out immediately
var IMMEDIATE_PRIORITY_TIMEOUT = -1;
// Eventually times out
var USER_BLOCKING_PRIORITY = 250;
var NORMAL_PRIORITY_TIMEOUT = 5000;
var LOW_PRIORITY_TIMEOUT = 10000;
// Never times out
var IDLE_PRIORITY = maxSigned31BitInt;

// Callbacks are stored as a circular, doubly linked list.
var firstCallbackNode = null;

var currentDidTimeout = false;
// Pausing the scheduler is useful for debugging.
var isSchedulerPaused = false;

var currentPriorityLevel = NormalPriority;
var currentEventStartTime = -1;
var currentExpirationTime = -1;

// This is set when a callback is being executed, to prevent re-entrancy.
var isExecutingCallback = false;

var isHostCallbackScheduled = false;

var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';

function ensureHostCallbackIsScheduled() {
  if (isExecutingCallback) {
    // Don't schedule work yet; wait until the next time we yield.
    return;
  }
  // Schedule the host callback using the earliest expiration in the list.
  var expirationTime = firstCallbackNode.expirationTime;
  if (!isHostCallbackScheduled) {
    isHostCallbackScheduled = true;
  } else {
    // Cancel the existing host callback.
    cancelHostCallback();
  }
  requestHostCallback(flushWork, expirationTime);
}

function flushFirstCallback() {
  var flushedNode = firstCallbackNode;

  // Remove the node from the list before calling the callback. That way the
  // list is in a consistent state even if the callback throws.
  var next = firstCallbackNode.next;
  if (firstCallbackNode === next) {
    // This is the last callback in the list.
    firstCallbackNode = null;
    next = null;
  } else {
    var lastCallbackNode = firstCallbackNode.previous;
    firstCallbackNode = lastCallbackNode.next = next;
    next.previous = lastCallbackNode;
  }

  flushedNode.next = flushedNode.previous = null;

  // Now it's safe to call the callback.
  var callback = flushedNode.callback;
  var expirationTime = flushedNode.expirationTime;
  var priorityLevel = flushedNode.priorityLevel;
  var previousPriorityLevel = currentPriorityLevel;
  var previousExpirationTime = currentExpirationTime;
  currentPriorityLevel = priorityLevel;
  currentExpirationTime = expirationTime;
  var continuationCallback;
  try {
    continuationCallback = callback();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentExpirationTime = previousExpirationTime;
  }

  // A callback may return a continuation. The continuation should be scheduled
  // with the same priority and expiration as the just-finished callback.
  if (typeof continuationCallback === 'function') {
    var continuationNode = {
      callback: continuationCallback,
      priorityLevel: priorityLevel,
      expirationTime: expirationTime,
      next: null,
      previous: null
    };

    // Insert the new callback into the list, sorted by its expiration. This is
    // almost the same as the code in `scheduleCallback`, except the callback
    // is inserted into the list *before* callbacks of equal expiration instead
    // of after.
    if (firstCallbackNode === null) {
      // This is the first callback in the list.
      firstCallbackNode = continuationNode.next = continuationNode.previous = continuationNode;
    } else {
      var nextAfterContinuation = null;
      var node = firstCallbackNode;
      do {
        if (node.expirationTime >= expirationTime) {
          // This callback expires at or after the continuation. We will insert
          // the continuation *before* this callback.
          nextAfterContinuation = node;
          break;
        }
        node = node.next;
      } while (node !== firstCallbackNode);

      if (nextAfterContinuation === null) {
        // No equal or lower priority callback was found, which means the new
        // callback is the lowest priority callback in the list.
        nextAfterContinuation = firstCallbackNode;
      } else if (nextAfterContinuation === firstCallbackNode) {
        // The new callback is the highest priority callback in the list.
        firstCallbackNode = continuationNode;
        ensureHostCallbackIsScheduled();
      }

      var previous = nextAfterContinuation.previous;
      previous.next = nextAfterContinuation.previous = continuationNode;
      continuationNode.next = nextAfterContinuation;
      continuationNode.previous = previous;
    }
  }
}

function flushImmediateWork() {
  if (
  // Confirm we've exited the outer most event handler
  currentEventStartTime === -1 && firstCallbackNode !== null && firstCallbackNode.priorityLevel === ImmediatePriority) {
    isExecutingCallback = true;
    try {
      do {
        flushFirstCallback();
      } while (
      // Keep flushing until there are no more immediate callbacks
      firstCallbackNode !== null && firstCallbackNode.priorityLevel === ImmediatePriority);
    } finally {
      isExecutingCallback = false;
      if (firstCallbackNode !== null) {
        // There's still work remaining. Request another callback.
        ensureHostCallbackIsScheduled();
      } else {
        isHostCallbackScheduled = false;
      }
    }
  }
}

function flushWork(didTimeout) {
  // Exit right away if we're currently paused

  if (enableSchedulerDebugging && isSchedulerPaused) {
    return;
  }

  isExecutingCallback = true;
  var previousDidTimeout = currentDidTimeout;
  currentDidTimeout = didTimeout;
  try {
    if (didTimeout) {
      // Flush all the expired callbacks without yielding.
      while (firstCallbackNode !== null && !(enableSchedulerDebugging && isSchedulerPaused)) {
        // TODO Wrap in feature flag
        // Read the current time. Flush all the callbacks that expire at or
        // earlier than that time. Then read the current time again and repeat.
        // This optimizes for as few performance.now calls as possible.
        var currentTime = exports.unstable_now();
        if (firstCallbackNode.expirationTime <= currentTime) {
          do {
            flushFirstCallback();
          } while (firstCallbackNode !== null && firstCallbackNode.expirationTime <= currentTime && !(enableSchedulerDebugging && isSchedulerPaused));
          continue;
        }
        break;
      }
    } else {
      // Keep flushing callbacks until we run out of time in the frame.
      if (firstCallbackNode !== null) {
        do {
          if (enableSchedulerDebugging && isSchedulerPaused) {
            break;
          }
          flushFirstCallback();
        } while (firstCallbackNode !== null && !shouldYieldToHost());
      }
    }
  } finally {
    isExecutingCallback = false;
    currentDidTimeout = previousDidTimeout;
    if (firstCallbackNode !== null) {
      // There's still work remaining. Request another callback.
      ensureHostCallbackIsScheduled();
    } else {
      isHostCallbackScheduled = false;
    }
    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_runWithPriority(priorityLevel, eventHandler) {
  switch (priorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
    case LowPriority:
    case IdlePriority:
      break;
    default:
      priorityLevel = NormalPriority;
  }

  var previousPriorityLevel = currentPriorityLevel;
  var previousEventStartTime = currentEventStartTime;
  currentPriorityLevel = priorityLevel;
  currentEventStartTime = exports.unstable_now();

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentEventStartTime = previousEventStartTime;

    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_next(eventHandler) {
  var priorityLevel = void 0;
  switch (currentPriorityLevel) {
    case ImmediatePriority:
    case UserBlockingPriority:
    case NormalPriority:
      // Shift down to normal priority
      priorityLevel = NormalPriority;
      break;
    default:
      // Anything lower than normal priority should remain at the current level.
      priorityLevel = currentPriorityLevel;
      break;
  }

  var previousPriorityLevel = currentPriorityLevel;
  var previousEventStartTime = currentEventStartTime;
  currentPriorityLevel = priorityLevel;
  currentEventStartTime = exports.unstable_now();

  try {
    return eventHandler();
  } finally {
    currentPriorityLevel = previousPriorityLevel;
    currentEventStartTime = previousEventStartTime;

    // Before exiting, flush all the immediate work that was scheduled.
    flushImmediateWork();
  }
}

function unstable_wrapCallback(callback) {
  var parentPriorityLevel = currentPriorityLevel;
  return function () {
    // This is a fork of runWithPriority, inlined for performance.
    var previousPriorityLevel = currentPriorityLevel;
    var previousEventStartTime = currentEventStartTime;
    currentPriorityLevel = parentPriorityLevel;
    currentEventStartTime = exports.unstable_now();

    try {
      return callback.apply(this, arguments);
    } finally {
      currentPriorityLevel = previousPriorityLevel;
      currentEventStartTime = previousEventStartTime;
      flushImmediateWork();
    }
  };
}

function unstable_scheduleCallback(callback, deprecated_options) {
  var startTime = currentEventStartTime !== -1 ? currentEventStartTime : exports.unstable_now();

  var expirationTime;
  if (typeof deprecated_options === 'object' && deprecated_options !== null && typeof deprecated_options.timeout === 'number') {
    // FIXME: Remove this branch once we lift expiration times out of React.
    expirationTime = startTime + deprecated_options.timeout;
  } else {
    switch (currentPriorityLevel) {
      case ImmediatePriority:
        expirationTime = startTime + IMMEDIATE_PRIORITY_TIMEOUT;
        break;
      case UserBlockingPriority:
        expirationTime = startTime + USER_BLOCKING_PRIORITY;
        break;
      case IdlePriority:
        expirationTime = startTime + IDLE_PRIORITY;
        break;
      case LowPriority:
        expirationTime = startTime + LOW_PRIORITY_TIMEOUT;
        break;
      case NormalPriority:
      default:
        expirationTime = startTime + NORMAL_PRIORITY_TIMEOUT;
    }
  }

  var newNode = {
    callback: callback,
    priorityLevel: currentPriorityLevel,
    expirationTime: expirationTime,
    next: null,
    previous: null
  };

  // Insert the new callback into the list, ordered first by expiration, then
  // by insertion. So the new callback is inserted any other callback with
  // equal expiration.
  if (firstCallbackNode === null) {
    // This is the first callback in the list.
    firstCallbackNode = newNode.next = newNode.previous = newNode;
    ensureHostCallbackIsScheduled();
  } else {
    var next = null;
    var node = firstCallbackNode;
    do {
      if (node.expirationTime > expirationTime) {
        // The new callback expires before this one.
        next = node;
        break;
      }
      node = node.next;
    } while (node !== firstCallbackNode);

    if (next === null) {
      // No callback with a later expiration was found, which means the new
      // callback has the latest expiration in the list.
      next = firstCallbackNode;
    } else if (next === firstCallbackNode) {
      // The new callback has the earliest expiration in the entire list.
      firstCallbackNode = newNode;
      ensureHostCallbackIsScheduled();
    }

    var previous = next.previous;
    previous.next = next.previous = newNode;
    newNode.next = next;
    newNode.previous = previous;
  }

  return newNode;
}

function unstable_pauseExecution() {
  isSchedulerPaused = true;
}

function unstable_continueExecution() {
  isSchedulerPaused = false;
  if (firstCallbackNode !== null) {
    ensureHostCallbackIsScheduled();
  }
}

function unstable_getFirstCallbackNode() {
  return firstCallbackNode;
}

function unstable_cancelCallback(callbackNode) {
  var next = callbackNode.next;
  if (next === null) {
    // Already cancelled.
    return;
  }

  if (next === callbackNode) {
    // This is the only scheduled callback. Clear the list.
    firstCallbackNode = null;
  } else {
    // Remove the callback from its position in the list.
    if (callbackNode === firstCallbackNode) {
      firstCallbackNode = next;
    }
    var previous = callbackNode.previous;
    previous.next = next;
    next.previous = previous;
  }

  callbackNode.next = callbackNode.previous = null;
}

function unstable_getCurrentPriorityLevel() {
  return currentPriorityLevel;
}

function unstable_shouldYield() {
  return !currentDidTimeout && (firstCallbackNode !== null && firstCallbackNode.expirationTime < currentExpirationTime || shouldYieldToHost());
}

// The remaining code is essentially a polyfill for requestIdleCallback. It
// works by scheduling a requestAnimationFrame, storing the time for the start
// of the frame, then scheduling a postMessage which gets scheduled after paint.
// Within the postMessage handler do as much work as possible until time + frame
// rate. By separating the idle call into a separate event tick we ensure that
// layout, paint and other browser work is counted against the available time.
// The frame rate is dynamically adjusted.

// We capture a local reference to any global, in case it gets polyfilled after
// this module is initially evaluated. We want to be using a
// consistent implementation.
var localDate = Date;

// This initialization code may run even on server environments if a component
// just imports ReactDOM (e.g. for findDOMNode). Some environments might not
// have setTimeout or clearTimeout. However, we always expect them to be defined
// on the client. https://github.com/facebook/react/pull/13088
var localSetTimeout = typeof setTimeout === 'function' ? setTimeout : undefined;
var localClearTimeout = typeof clearTimeout === 'function' ? clearTimeout : undefined;

// We don't expect either of these to necessarily be defined, but we will error
// later if they are missing on the client.
var localRequestAnimationFrame = typeof requestAnimationFrame === 'function' ? requestAnimationFrame : undefined;
var localCancelAnimationFrame = typeof cancelAnimationFrame === 'function' ? cancelAnimationFrame : undefined;

// requestAnimationFrame does not run when the tab is in the background. If
// we're backgrounded we prefer for that work to happen so that the page
// continues to load in the background. So we also schedule a 'setTimeout' as
// a fallback.
// TODO: Need a better heuristic for backgrounded work.
var ANIMATION_FRAME_TIMEOUT = 100;
var rAFID;
var rAFTimeoutID;
var requestAnimationFrameWithTimeout = function (callback) {
  // schedule rAF and also a setTimeout
  rAFID = localRequestAnimationFrame(function (timestamp) {
    // cancel the setTimeout
    localClearTimeout(rAFTimeoutID);
    callback(timestamp);
  });
  rAFTimeoutID = localSetTimeout(function () {
    // cancel the requestAnimationFrame
    localCancelAnimationFrame(rAFID);
    callback(exports.unstable_now());
  }, ANIMATION_FRAME_TIMEOUT);
};

if (hasNativePerformanceNow) {
  var Performance = performance;
  exports.unstable_now = function () {
    return Performance.now();
  };
} else {
  exports.unstable_now = function () {
    return localDate.now();
  };
}

var requestHostCallback;
var cancelHostCallback;
var shouldYieldToHost;

var globalValue = null;
if (typeof window !== 'undefined') {
  globalValue = window;
} else if (typeof global !== 'undefined') {
  globalValue = global;
}

if (globalValue && globalValue._schedMock) {
  // Dynamic injection, only for testing purposes.
  var globalImpl = globalValue._schedMock;
  requestHostCallback = globalImpl[0];
  cancelHostCallback = globalImpl[1];
  shouldYieldToHost = globalImpl[2];
  exports.unstable_now = globalImpl[3];
} else if (
// If Scheduler runs in a non-DOM environment, it falls back to a naive
// implementation using setTimeout.
typeof window === 'undefined' ||
// Check if MessageChannel is supported, too.
typeof MessageChannel !== 'function') {
  // If this accidentally gets imported in a non-browser environment, e.g. JavaScriptCore,
  // fallback to a naive implementation.
  var _callback = null;
  var _flushCallback = function (didTimeout) {
    if (_callback !== null) {
      try {
        _callback(didTimeout);
      } finally {
        _callback = null;
      }
    }
  };
  requestHostCallback = function (cb, ms) {
    if (_callback !== null) {
      // Protect against re-entrancy.
      setTimeout(requestHostCallback, 0, cb);
    } else {
      _callback = cb;
      setTimeout(_flushCallback, 0, false);
    }
  };
  cancelHostCallback = function () {
    _callback = null;
  };
  shouldYieldToHost = function () {
    return false;
  };
} else {
  if (typeof console !== 'undefined') {
    // TODO: Remove fb.me link
    if (typeof localRequestAnimationFrame !== 'function') {
      console.error("This browser doesn't support requestAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
    if (typeof localCancelAnimationFrame !== 'function') {
      console.error("This browser doesn't support cancelAnimationFrame. " + 'Make sure that you load a ' + 'polyfill in older browsers. https://fb.me/react-polyfills');
    }
  }

  var scheduledHostCallback = null;
  var isMessageEventScheduled = false;
  var timeoutTime = -1;

  var isAnimationFrameScheduled = false;

  var isFlushingHostCallback = false;

  var frameDeadline = 0;
  // We start out assuming that we run at 30fps but then the heuristic tracking
  // will adjust this value to a faster fps if we get more frequent animation
  // frames.
  var previousFrameTime = 33;
  var activeFrameTime = 33;

  shouldYieldToHost = function () {
    return frameDeadline <= exports.unstable_now();
  };

  // We use the postMessage trick to defer idle work until after the repaint.
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = function (event) {
    isMessageEventScheduled = false;

    var prevScheduledCallback = scheduledHostCallback;
    var prevTimeoutTime = timeoutTime;
    scheduledHostCallback = null;
    timeoutTime = -1;

    var currentTime = exports.unstable_now();

    var didTimeout = false;
    if (frameDeadline - currentTime <= 0) {
      // There's no time left in this idle period. Check if the callback has
      // a timeout and whether it's been exceeded.
      if (prevTimeoutTime !== -1 && prevTimeoutTime <= currentTime) {
        // Exceeded the timeout. Invoke the callback even though there's no
        // time left.
        didTimeout = true;
      } else {
        // No timeout.
        if (!isAnimationFrameScheduled) {
          // Schedule another animation callback so we retry later.
          isAnimationFrameScheduled = true;
          requestAnimationFrameWithTimeout(animationTick);
        }
        // Exit without invoking the callback.
        scheduledHostCallback = prevScheduledCallback;
        timeoutTime = prevTimeoutTime;
        return;
      }
    }

    if (prevScheduledCallback !== null) {
      isFlushingHostCallback = true;
      try {
        prevScheduledCallback(didTimeout);
      } finally {
        isFlushingHostCallback = false;
      }
    }
  };

  var animationTick = function (rafTime) {
    if (scheduledHostCallback !== null) {
      // Eagerly schedule the next animation callback at the beginning of the
      // frame. If the scheduler queue is not empty at the end of the frame, it
      // will continue flushing inside that callback. If the queue *is* empty,
      // then it will exit immediately. Posting the callback at the start of the
      // frame ensures it's fired within the earliest possible frame. If we
      // waited until the end of the frame to post the callback, we risk the
      // browser skipping a frame and not firing the callback until the frame
      // after that.
      requestAnimationFrameWithTimeout(animationTick);
    } else {
      // No pending work. Exit.
      isAnimationFrameScheduled = false;
      return;
    }

    var nextFrameTime = rafTime - frameDeadline + activeFrameTime;
    if (nextFrameTime < activeFrameTime && previousFrameTime < activeFrameTime) {
      if (nextFrameTime < 8) {
        // Defensive coding. We don't support higher frame rates than 120hz.
        // If the calculated frame time gets lower than 8, it is probably a bug.
        nextFrameTime = 8;
      }
      // If one frame goes long, then the next one can be short to catch up.
      // If two frames are short in a row, then that's an indication that we
      // actually have a higher frame rate than what we're currently optimizing.
      // We adjust our heuristic dynamically accordingly. For example, if we're
      // running on 120hz display or 90hz VR display.
      // Take the max of the two in case one of them was an anomaly due to
      // missed frame deadlines.
      activeFrameTime = nextFrameTime < previousFrameTime ? previousFrameTime : nextFrameTime;
    } else {
      previousFrameTime = nextFrameTime;
    }
    frameDeadline = rafTime + activeFrameTime;
    if (!isMessageEventScheduled) {
      isMessageEventScheduled = true;
      port.postMessage(undefined);
    }
  };

  requestHostCallback = function (callback, absoluteTimeout) {
    scheduledHostCallback = callback;
    timeoutTime = absoluteTimeout;
    if (isFlushingHostCallback || absoluteTimeout < 0) {
      // Don't wait for the next frame. Continue working ASAP, in a new event.
      port.postMessage(undefined);
    } else if (!isAnimationFrameScheduled) {
      // If rAF didn't already schedule one, we need to schedule a frame.
      // TODO: If this rAF doesn't materialize because the browser throttles, we
      // might want to still have setTimeout trigger rIC as a backup to ensure
      // that we keep performing work.
      isAnimationFrameScheduled = true;
      requestAnimationFrameWithTimeout(animationTick);
    }
  };

  cancelHostCallback = function () {
    scheduledHostCallback = null;
    isMessageEventScheduled = false;
    timeoutTime = -1;
  };
}

exports.unstable_ImmediatePriority = ImmediatePriority;
exports.unstable_UserBlockingPriority = UserBlockingPriority;
exports.unstable_NormalPriority = NormalPriority;
exports.unstable_IdlePriority = IdlePriority;
exports.unstable_LowPriority = LowPriority;
exports.unstable_runWithPriority = unstable_runWithPriority;
exports.unstable_next = unstable_next;
exports.unstable_scheduleCallback = unstable_scheduleCallback;
exports.unstable_cancelCallback = unstable_cancelCallback;
exports.unstable_wrapCallback = unstable_wrapCallback;
exports.unstable_getCurrentPriorityLevel = unstable_getCurrentPriorityLevel;
exports.unstable_shouldYield = unstable_shouldYield;
exports.unstable_continueExecution = unstable_continueExecution;
exports.unstable_pauseExecution = unstable_pauseExecution;
exports.unstable_getFirstCallbackNode = unstable_getFirstCallbackNode;
  })();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.development.js */ "./node_modules/scheduler/cjs/scheduler.development.js");
}


/***/ }),

/***/ "./node_modules/scheduler/tracing.js":
/*!*******************************************!*\
  !*** ./node_modules/scheduler/tracing.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/scheduler-tracing.development.js */ "./node_modules/scheduler/cjs/scheduler-tracing.development.js");
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

},[["./Scripts/expose-components.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9TY3JpcHRzL1Rlc3QuanN4Iiwid2VicGFjazovLy8uL1NjcmlwdHMvZXhwb3NlLWNvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci10cmFjaW5nLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2NoZWR1bGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvdHJhY2luZy5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIlRlc3QiLCJ1c2VTdGF0ZSIsImxhenlTZWxlY3QiLCJzZXRMYXp5U2VsZWN0IiwiZnJhbWV3b3JrIiwic2V0RnJhbWV3b3JrIiwidXNlRWZmZWN0IiwidGhlbiIsImNvbXBvbmVudCIsIkNvbXBvbmVudCIsIm1hcCIsIngiLCJ2YWx1ZSIsImxhYmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUEsa0JBQ01DLHNEQUFRLEVBRGQ7QUFBQTtBQUFBLE1BQ3ZCQyxVQUR1QjtBQUFBLE1BQ1hDLGFBRFc7O0FBQUEsbUJBRUlGLHNEQUFRLEVBRlo7QUFBQTtBQUFBLE1BRXZCRyxTQUZ1QjtBQUFBLE1BRVpDLFlBRlk7O0FBRzlCQyx5REFBUyxDQUFDLFlBQU07QUFDZixzS0FBdUJDLElBQXZCLENBQTRCLFVBQUFDLFNBQVMsRUFBSTtBQUN4Q0wsbUJBQWEsQ0FBQztBQUFFTSxpQkFBUyxFQUFFRCxTQUFTO0FBQXRCLE9BQUQsQ0FBYjtBQUNBLEtBRkQ7QUFHQSxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsU0FFQywyREFBQyw4Q0FBRCxRQUNDLGlJQURELEVBRUVOLFVBQVUsSUFBSUEsVUFBVSxDQUFDTyxTQUF6QixHQUNBLDJEQUFDLFVBQUQsQ0FBWSxTQUFaO0FBQ0MsZ0JBQVksRUFBRSxPQURmO0FBRUMsV0FBTyxNQUZSO0FBR0MsV0FBTyxFQUFFLENBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsUUFBakIsRUFBMkIsT0FBM0IsRUFBb0MsU0FBcEMsRUFBK0NDLEdBQS9DLENBQW1ELFVBQUFDLENBQUM7QUFBQSxhQUFLO0FBQUVDLGFBQUssRUFBRUQsQ0FBVDtBQUFZRSxhQUFLLEVBQUVGO0FBQW5CLE9BQUw7QUFBQSxLQUFwRCxDQUhWO0FBSUMsYUFBUyxFQUFDLG9CQUpYO0FBS0MsbUJBQWUsRUFBQyxRQUxqQjtBQU1DLFlBQVEsRUFBRU47QUFOWCxJQURBLEdBU0csU0FYTCxFQVlDLHdFQUFNRCxTQUFTLEdBQUcsa0JBQUgsR0FBd0IsSUFBdkMsQ0FaRCxDQUZEO0FBaUJBLEM7Ozs7Ozs7Ozs7OztBQzVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUMwQjtBQUNPO0FBQ2E7O0FBRVA7O0FBRXZDO0FBQ0EsZUFBZSw0Q0FBSztBQUNwQixrQkFBa0IsZ0RBQVE7QUFDMUIsd0JBQXdCLHVEQUFjOztBQUV0QztBQUNBLHVCQUF1QixpREFBYSxDOzs7Ozs7Ozs7Ozs7O0FDZHBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLG9CQUFvQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUEsSUFBSSxJQUFxQztBQUN6Qyw2QkFBNkIsbUJBQU8sQ0FBQyx5RkFBNEI7QUFDakU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3JHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBLGtEQUFrRDs7O0FBR2xEOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7OztBQ3RhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOzs7O0FBSWIsSUFBSSxJQUFxQztBQUN6QztBQUNBOztBQUVBLDhDQUE4QyxjQUFjOztBQUU1RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7O0FDMXJCYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyw2RkFBZ0M7QUFDM0Q7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxtQkFBbUIsbUJBQU8sQ0FBQyw2R0FBd0M7QUFDbkU7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1QyIsImZpbGUiOiJjb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdCgpIHtcclxuXHRjb25zdCBbbGF6eVNlbGVjdCwgc2V0TGF6eVNlbGVjdF0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0IFtmcmFtZXdvcmssIHNldEZyYW1ld29ya10gPSB1c2VTdGF0ZSgpO1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpbXBvcnQoJ3JlYWN0LXNlbGVjdCcpLnRoZW4oY29tcG9uZW50ID0+IHtcclxuXHRcdFx0c2V0TGF6eVNlbGVjdCh7IENvbXBvbmVudDogY29tcG9uZW50LmRlZmF1bHQgfSk7XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHRcclxuXHRcdDxGcmFnbWVudD5cclxuXHRcdFx0PGgyPlRoYXQgbGluZSBpcyBpbnNpZGUgdGhlIFJlYWN0IHRlc3QgY29tcG9uZW50IChUZXN0LmpzeCk8L2gyPlxyXG5cdFx0XHR7bGF6eVNlbGVjdCAmJiBsYXp5U2VsZWN0LkNvbXBvbmVudCA/IChcclxuXHRcdFx0XHQ8bGF6eVNlbGVjdC5Db21wb25lbnRcclxuXHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17J1JlYWN0J31cclxuXHRcdFx0XHRcdGlzTXVsdGlcclxuXHRcdFx0XHRcdG9wdGlvbnM9e1snUmVhY3QnLCAnVnVlJywgJ1N2ZWx0ZScsICdFbWJlcicsICdBbmd1bGFyJ10ubWFwKHggPT4gKHsgdmFsdWU6IHgsIGxhYmVsOiB4IH0pKX1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhc2ljLW11bHRpLXNlbGVjdFwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWVQcmVmaXg9XCJzZWxlY3RcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9e3NldEZyYW1ld29ya31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQpIDogJ0xvYWRpbmcnfVxyXG5cdFx0XHQ8ZGl2PntmcmFtZXdvcmsgPyAnUGljayBhIGZyYW1ld29yaycgOiBudWxsfTwvZGl2PlxyXG5cdFx0PC9GcmFnbWVudD5cclxuXHQpO1xyXG59XHJcbiIsIu+7vy8vIEFsbCBKYXZhU2NyaXB0IGluIGhlcmUgd2lsbCBiZSBsb2FkZWQgc2VydmVyLXNpZGVcclxuLy8gRXhwb3NlIGNvbXBvbmVudHMgZ2xvYmFsbHkgc28gUmVhY3RKUy5ORVQgY2FuIHVzZSB0aGVtXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcblxyXG5pbXBvcnQgUm9vdENvbXBvbmVudCBmcm9tICcuL1Rlc3QuanN4JztcclxuXHJcbi8vIE5lZWRlZCB3aGVuIHdlIHdhbnQgdG8gYnVuZGxlIFJlYWN0IG91cnNlbHZlcywgYWxzbyBtYWtlIHN1cmUgdG8gdXNlIFNldExvYWRSZWFjdChmYWxzZSkgaW4gdGhlIFJlYWN0Q29uZmlnLmNzIGZpbGVcclxuZ2xvYmFsLlJlYWN0ID0gUmVhY3Q7XHJcbmdsb2JhbC5SZWFjdERPTSA9IFJlYWN0RE9NO1xyXG5nbG9iYWwuUmVhY3RET01TZXJ2ZXIgPSBSZWFjdERPTVNlcnZlcjtcclxuXHJcbi8vIENvbXBvbmVudHMgdG8gZXhwb3NlXHJcbmdsb2JhbC5Sb290Q29tcG9uZW50ID0gUm9vdENvbXBvbmVudDsiLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjEzLjZcbiAqIHNjaGVkdWxlci10cmFjaW5nLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbi8vIEhlbHBzIGlkZW50aWZ5IHNpZGUgZWZmZWN0cyBpbiBiZWdpbi1waGFzZSBsaWZlY3ljbGUgaG9va3MgYW5kIHNldFN0YXRlIHJlZHVjZXJzOlxuXG5cbi8vIEluIHNvbWUgY2FzZXMsIFN0cmljdE1vZGUgc2hvdWxkIGFsc28gZG91YmxlLXJlbmRlciBsaWZlY3ljbGVzLlxuLy8gVGhpcyBjYW4gYmUgY29uZnVzaW5nIGZvciB0ZXN0cyB0aG91Z2gsXG4vLyBBbmQgaXQgY2FuIGJlIGJhZCBmb3IgcGVyZm9ybWFuY2UgaW4gcHJvZHVjdGlvbi5cbi8vIFRoaXMgZmVhdHVyZSBmbGFnIGNhbiBiZSB1c2VkIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yOlxuXG5cbi8vIFRvIHByZXNlcnZlIHRoZSBcIlBhdXNlIG9uIGNhdWdodCBleGNlcHRpb25zXCIgYmVoYXZpb3Igb2YgdGhlIGRlYnVnZ2VyLCB3ZVxuLy8gcmVwbGF5IHRoZSBiZWdpbiBwaGFzZSBvZiBhIGZhaWxlZCBjb21wb25lbnQgaW5zaWRlIGludm9rZUd1YXJkZWRDYWxsYmFjay5cblxuXG4vLyBXYXJuIGFib3V0IGRlcHJlY2F0ZWQsIGFzeW5jLXVuc2FmZSBsaWZlY3ljbGVzOyByZWxhdGVzIHRvIFJGQyAjNjpcblxuXG4vLyBHYXRoZXIgYWR2YW5jZWQgdGltaW5nIG1ldHJpY3MgZm9yIFByb2ZpbGVyIHN1YnRyZWVzLlxuXG5cbi8vIFRyYWNlIHdoaWNoIGludGVyYWN0aW9ucyB0cmlnZ2VyIGVhY2ggY29tbWl0LlxudmFyIGVuYWJsZVNjaGVkdWxlclRyYWNpbmcgPSB0cnVlO1xuXG4vLyBPbmx5IHVzZWQgaW4gd3d3IGJ1aWxkcy5cbiAvLyBUT0RPOiB0cnVlPyBIZXJlIGl0IG1pZ2h0IGp1c3QgYmUgZmFsc2UuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIE9ubHkgdXNlZCBpbiB3d3cgYnVpbGRzLlxuXG5cbi8vIFJlYWN0IEZpcmU6IHByZXZlbnQgdGhlIHZhbHVlIGFuZCBjaGVja2VkIGF0dHJpYnV0ZXMgZnJvbSBzeW5jaW5nXG4vLyB3aXRoIHRoZWlyIHJlbGF0ZWQgRE9NIHByb3BlcnRpZXNcblxuXG4vLyBUaGVzZSBBUElzIHdpbGwgbm8gbG9uZ2VyIGJlIFwidW5zdGFibGVcIiBpbiB0aGUgdXBjb21pbmcgMTYuNyByZWxlYXNlLFxuLy8gQ29udHJvbCB0aGlzIGJlaGF2aW9yIHdpdGggYSBmbGFnIHRvIHN1cHBvcnQgMTYuNiBtaW5vciByZWxlYXNlcyBpbiB0aGUgbWVhbndoaWxlLlxuXG52YXIgREVGQVVMVF9USFJFQURfSUQgPSAwO1xuXG4vLyBDb3VudGVycyB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMuXG52YXIgaW50ZXJhY3Rpb25JRENvdW50ZXIgPSAwO1xudmFyIHRocmVhZElEQ291bnRlciA9IDA7XG5cbi8vIFNldCBvZiBjdXJyZW50bHkgdHJhY2VkIGludGVyYWN0aW9ucy5cbi8vIEludGVyYWN0aW9ucyBcInN0YWNrXCLigJNcbi8vIE1lYW5pbmcgdGhhdCBuZXdseSB0cmFjZWQgaW50ZXJhY3Rpb25zIGFyZSBhcHBlbmRlZCB0byB0aGUgcHJldmlvdXNseSBhY3RpdmUgc2V0LlxuLy8gV2hlbiBhbiBpbnRlcmFjdGlvbiBnb2VzIG91dCBvZiBzY29wZSwgdGhlIHByZXZpb3VzIHNldCAoaWYgYW55KSBpcyByZXN0b3JlZC5cbmV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYgPSBudWxsO1xuXG4vLyBMaXN0ZW5lcihzKSB0byBub3RpZnkgd2hlbiBpbnRlcmFjdGlvbnMgYmVnaW4gYW5kIGVuZC5cbmV4cG9ydHMuX19zdWJzY3JpYmVyUmVmID0gbnVsbDtcblxuaWYgKGVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZiA9IHtcbiAgICBjdXJyZW50OiBuZXcgU2V0KClcbiAgfTtcbiAgZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9jbGVhcihjYWxsYmFjaykge1xuICBpZiAoIWVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuXG4gIHZhciBwcmV2SW50ZXJhY3Rpb25zID0gZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50O1xuICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQgPSBuZXcgU2V0KCk7XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQgPSBwcmV2SW50ZXJhY3Rpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEN1cnJlbnQoKSB7XG4gIGlmICghZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICAgIHJldHVybiBudWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfZ2V0VGhyZWFkSUQoKSB7XG4gIHJldHVybiArK3RocmVhZElEQ291bnRlcjtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfdHJhY2UobmFtZSwgdGltZXN0YW1wLCBjYWxsYmFjaykge1xuICB2YXIgdGhyZWFkSUQgPSBhcmd1bWVudHMubGVuZ3RoID4gMyAmJiBhcmd1bWVudHNbM10gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1szXSA6IERFRkFVTFRfVEhSRUFEX0lEO1xuXG4gIGlmICghZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICAgIHJldHVybiBjYWxsYmFjaygpO1xuICB9XG5cbiAgdmFyIGludGVyYWN0aW9uID0ge1xuICAgIF9fY291bnQ6IDEsXG4gICAgaWQ6IGludGVyYWN0aW9uSURDb3VudGVyKyssXG4gICAgbmFtZTogbmFtZSxcbiAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcFxuICB9O1xuXG4gIHZhciBwcmV2SW50ZXJhY3Rpb25zID0gZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50O1xuXG4gIC8vIFRyYWNlZCBpbnRlcmFjdGlvbnMgc2hvdWxkIHN0YWNrL2FjY3VtdWxhdGUuXG4gIC8vIFRvIGRvIHRoYXQsIGNsb25lIHRoZSBjdXJyZW50IGludGVyYWN0aW9ucy5cbiAgLy8gVGhlIHByZXZpb3VzIHNldCB3aWxsIGJlIHJlc3RvcmVkIHVwb24gY29tcGxldGlvbi5cbiAgdmFyIGludGVyYWN0aW9ucyA9IG5ldyBTZXQocHJldkludGVyYWN0aW9ucyk7XG4gIGludGVyYWN0aW9ucy5hZGQoaW50ZXJhY3Rpb24pO1xuICBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQgPSBpbnRlcmFjdGlvbnM7XG5cbiAgdmFyIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuICB2YXIgcmV0dXJuVmFsdWUgPSB2b2lkIDA7XG5cbiAgdHJ5IHtcbiAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uVHJhY2VkKGludGVyYWN0aW9uKTtcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnNjcmliZXIub25Xb3JrU3RhcnRlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuVmFsdWUgPSBjYWxsYmFjaygpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50ID0gcHJldkludGVyYWN0aW9ucztcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm9uV29ya1N0b3BwZWQoaW50ZXJhY3Rpb25zLCB0aHJlYWRJRCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGludGVyYWN0aW9uLl9fY291bnQtLTtcblxuICAgICAgICAgIC8vIElmIG5vIGFzeW5jIHdvcmsgd2FzIHNjaGVkdWxlZCBmb3IgdGhpcyBpbnRlcmFjdGlvbixcbiAgICAgICAgICAvLyBOb3RpZnkgc3Vic2NyaWJlcnMgdGhhdCBpdCdzIGNvbXBsZXRlZC5cbiAgICAgICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCAmJiBpbnRlcmFjdGlvbi5fX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm9uSW50ZXJhY3Rpb25TY2hlZHVsZWRXb3JrQ29tcGxldGVkKGludGVyYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0dXJuVmFsdWU7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3dyYXAoY2FsbGJhY2spIHtcbiAgdmFyIHRocmVhZElEID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBERUZBVUxUX1RIUkVBRF9JRDtcblxuICBpZiAoIWVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH1cblxuICB2YXIgd3JhcHBlZEludGVyYWN0aW9ucyA9IGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudDtcblxuICB2YXIgc3Vic2NyaWJlciA9IGV4cG9ydHMuX19zdWJzY3JpYmVyUmVmLmN1cnJlbnQ7XG4gIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgc3Vic2NyaWJlci5vbldvcmtTY2hlZHVsZWQod3JhcHBlZEludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSBwZW5kaW5nIGFzeW5jIHdvcmsgY291bnQgZm9yIHRoZSBjdXJyZW50IGludGVyYWN0aW9ucy5cbiAgLy8gVXBkYXRlIGFmdGVyIGNhbGxpbmcgc3Vic2NyaWJlcnMgaW4gY2FzZSBvZiBlcnJvci5cbiAgd3JhcHBlZEludGVyYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnRlcmFjdGlvbikge1xuICAgIGludGVyYWN0aW9uLl9fY291bnQrKztcbiAgfSk7XG5cbiAgdmFyIGhhc1J1biA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZWQoKSB7XG4gICAgdmFyIHByZXZJbnRlcmFjdGlvbnMgPSBleHBvcnRzLl9faW50ZXJhY3Rpb25zUmVmLmN1cnJlbnQ7XG4gICAgZXhwb3J0cy5fX2ludGVyYWN0aW9uc1JlZi5jdXJyZW50ID0gd3JhcHBlZEludGVyYWN0aW9ucztcblxuICAgIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHZvaWQgMDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHN1YnNjcmliZXIgIT09IG51bGwpIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLm9uV29ya1N0YXJ0ZWQod3JhcHBlZEludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgICAgICB9XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVyblZhbHVlID0gY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgIGV4cG9ydHMuX19pbnRlcmFjdGlvbnNSZWYuY3VycmVudCA9IHByZXZJbnRlcmFjdGlvbnM7XG5cbiAgICAgICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5vbldvcmtTdG9wcGVkKHdyYXBwZWRJbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoIWhhc1J1bikge1xuICAgICAgICAvLyBXZSBvbmx5IGV4cGVjdCBhIHdyYXBwZWQgZnVuY3Rpb24gdG8gYmUgZXhlY3V0ZWQgb25jZSxcbiAgICAgICAgLy8gQnV0IGluIHRoZSBldmVudCB0aGF0IGl0J3MgZXhlY3V0ZWQgbW9yZSB0aGFuIG9uY2XigJNcbiAgICAgICAgLy8gT25seSBkZWNyZW1lbnQgdGhlIG91dHN0YW5kaW5nIGludGVyYWN0aW9uIGNvdW50cyBvbmNlLlxuICAgICAgICBoYXNSdW4gPSB0cnVlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwZW5kaW5nIGFzeW5jIGNvdW50cyBmb3IgYWxsIHdyYXBwZWQgaW50ZXJhY3Rpb25zLlxuICAgICAgICAvLyBJZiB0aGlzIHdhcyB0aGUgbGFzdCBzY2hlZHVsZWQgYXN5bmMgd29yayBmb3IgYW55IG9mIHRoZW0sXG4gICAgICAgIC8vIE1hcmsgdGhlbSBhcyBjb21wbGV0ZWQuXG4gICAgICAgIHdyYXBwZWRJbnRlcmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICBpbnRlcmFjdGlvbi5fX2NvdW50LS07XG5cbiAgICAgICAgICBpZiAoc3Vic2NyaWJlciAhPT0gbnVsbCAmJiBpbnRlcmFjdGlvbi5fX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm9uSW50ZXJhY3Rpb25TY2hlZHVsZWRXb3JrQ29tcGxldGVkKGludGVyYWN0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHdyYXBwZWQuY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIHN1YnNjcmliZXIgPSBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChzdWJzY3JpYmVyICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnNjcmliZXIub25Xb3JrQ2FuY2VsZWQod3JhcHBlZEludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICAvLyBVcGRhdGUgcGVuZGluZyBhc3luYyBjb3VudHMgZm9yIGFsbCB3cmFwcGVkIGludGVyYWN0aW9ucy5cbiAgICAgIC8vIElmIHRoaXMgd2FzIHRoZSBsYXN0IHNjaGVkdWxlZCBhc3luYyB3b3JrIGZvciBhbnkgb2YgdGhlbSxcbiAgICAgIC8vIE1hcmsgdGhlbSBhcyBjb21wbGV0ZWQuXG4gICAgICB3cmFwcGVkSW50ZXJhY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKGludGVyYWN0aW9uKSB7XG4gICAgICAgIGludGVyYWN0aW9uLl9fY291bnQtLTtcblxuICAgICAgICBpZiAoc3Vic2NyaWJlciAmJiBpbnRlcmFjdGlvbi5fX2NvdW50ID09PSAwKSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5vbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZChpbnRlcmFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gd3JhcHBlZDtcbn1cblxudmFyIHN1YnNjcmliZXJzID0gbnVsbDtcbmlmIChlbmFibGVTY2hlZHVsZXJUcmFjaW5nKSB7XG4gIHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xufVxuXG5mdW5jdGlvbiB1bnN0YWJsZV9zdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICBpZiAoZW5hYmxlU2NoZWR1bGVyVHJhY2luZykge1xuICAgIHN1YnNjcmliZXJzLmFkZChzdWJzY3JpYmVyKTtcblxuICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAxKSB7XG4gICAgICBleHBvcnRzLl9fc3Vic2NyaWJlclJlZi5jdXJyZW50ID0ge1xuICAgICAgICBvbkludGVyYWN0aW9uU2NoZWR1bGVkV29ya0NvbXBsZXRlZDogb25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQsXG4gICAgICAgIG9uSW50ZXJhY3Rpb25UcmFjZWQ6IG9uSW50ZXJhY3Rpb25UcmFjZWQsXG4gICAgICAgIG9uV29ya0NhbmNlbGVkOiBvbldvcmtDYW5jZWxlZCxcbiAgICAgICAgb25Xb3JrU2NoZWR1bGVkOiBvbldvcmtTY2hlZHVsZWQsXG4gICAgICAgIG9uV29ya1N0YXJ0ZWQ6IG9uV29ya1N0YXJ0ZWQsXG4gICAgICAgIG9uV29ya1N0b3BwZWQ6IG9uV29ya1N0b3BwZWRcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3Vuc3Vic2NyaWJlKHN1YnNjcmliZXIpIHtcbiAgaWYgKGVuYWJsZVNjaGVkdWxlclRyYWNpbmcpIHtcbiAgICBzdWJzY3JpYmVycy5kZWxldGUoc3Vic2NyaWJlcik7XG5cbiAgICBpZiAoc3Vic2NyaWJlcnMuc2l6ZSA9PT0gMCkge1xuICAgICAgZXhwb3J0cy5fX3N1YnNjcmliZXJSZWYuY3VycmVudCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG9uSW50ZXJhY3Rpb25UcmFjZWQoaW50ZXJhY3Rpb24pIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcblxuICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblRyYWNlZChpbnRlcmFjdGlvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmICghZGlkQ2F0Y2hFcnJvcikge1xuICAgICAgICBkaWRDYXRjaEVycm9yID0gdHJ1ZTtcbiAgICAgICAgY2F1Z2h0RXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaWRDYXRjaEVycm9yKSB7XG4gICAgdGhyb3cgY2F1Z2h0RXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQoaW50ZXJhY3Rpb24pIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcblxuICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN1YnNjcmliZXIub25JbnRlcmFjdGlvblNjaGVkdWxlZFdvcmtDb21wbGV0ZWQoaW50ZXJhY3Rpb24pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uV29ya1NjaGVkdWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG5cbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uV29ya1NjaGVkdWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbldvcmtTdGFydGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcblxuICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN1YnNjcmliZXIub25Xb3JrU3RhcnRlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbldvcmtTdG9wcGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpIHtcbiAgdmFyIGRpZENhdGNoRXJyb3IgPSBmYWxzZTtcbiAgdmFyIGNhdWdodEVycm9yID0gbnVsbDtcblxuICBzdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHN1YnNjcmliZXIub25Xb3JrU3RvcHBlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKCFkaWRDYXRjaEVycm9yKSB7XG4gICAgICAgIGRpZENhdGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICBjYXVnaHRFcnJvciA9IGVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpZENhdGNoRXJyb3IpIHtcbiAgICB0aHJvdyBjYXVnaHRFcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbldvcmtDYW5jZWxlZChpbnRlcmFjdGlvbnMsIHRocmVhZElEKSB7XG4gIHZhciBkaWRDYXRjaEVycm9yID0gZmFsc2U7XG4gIHZhciBjYXVnaHRFcnJvciA9IG51bGw7XG5cbiAgc3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgIHRyeSB7XG4gICAgICBzdWJzY3JpYmVyLm9uV29ya0NhbmNlbGVkKGludGVyYWN0aW9ucywgdGhyZWFkSUQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoIWRpZENhdGNoRXJyb3IpIHtcbiAgICAgICAgZGlkQ2F0Y2hFcnJvciA9IHRydWU7XG4gICAgICAgIGNhdWdodEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlkQ2F0Y2hFcnJvcikge1xuICAgIHRocm93IGNhdWdodEVycm9yO1xuICB9XG59XG5cbmV4cG9ydHMudW5zdGFibGVfY2xlYXIgPSB1bnN0YWJsZV9jbGVhcjtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudCA9IHVuc3RhYmxlX2dldEN1cnJlbnQ7XG5leHBvcnRzLnVuc3RhYmxlX2dldFRocmVhZElEID0gdW5zdGFibGVfZ2V0VGhyZWFkSUQ7XG5leHBvcnRzLnVuc3RhYmxlX3RyYWNlID0gdW5zdGFibGVfdHJhY2U7XG5leHBvcnRzLnVuc3RhYmxlX3dyYXAgPSB1bnN0YWJsZV93cmFwO1xuZXhwb3J0cy51bnN0YWJsZV9zdWJzY3JpYmUgPSB1bnN0YWJsZV9zdWJzY3JpYmU7XG5leHBvcnRzLnVuc3RhYmxlX3Vuc3Vic2NyaWJlID0gdW5zdGFibGVfdW5zdWJzY3JpYmU7XG4gIH0pKCk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjAuMTMuNlxuICogc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgPSBmYWxzZTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5cbi8vIFRPRE86IFVzZSBzeW1ib2xzP1xudmFyIEltbWVkaWF0ZVByaW9yaXR5ID0gMTtcbnZhciBVc2VyQmxvY2tpbmdQcmlvcml0eSA9IDI7XG52YXIgTm9ybWFsUHJpb3JpdHkgPSAzO1xudmFyIExvd1ByaW9yaXR5ID0gNDtcbnZhciBJZGxlUHJpb3JpdHkgPSA1O1xuXG4vLyBNYXggMzEgYml0IGludGVnZXIuIFRoZSBtYXggaW50ZWdlciBzaXplIGluIFY4IGZvciAzMi1iaXQgc3lzdGVtcy5cbi8vIE1hdGgucG93KDIsIDMwKSAtIDFcbi8vIDBiMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExXG52YXIgbWF4U2lnbmVkMzFCaXRJbnQgPSAxMDczNzQxODIzO1xuXG4vLyBUaW1lcyBvdXQgaW1tZWRpYXRlbHlcbnZhciBJTU1FRElBVEVfUFJJT1JJVFlfVElNRU9VVCA9IC0xO1xuLy8gRXZlbnR1YWxseSB0aW1lcyBvdXRcbnZhciBVU0VSX0JMT0NLSU5HX1BSSU9SSVRZID0gMjUwO1xudmFyIE5PUk1BTF9QUklPUklUWV9USU1FT1VUID0gNTAwMDtcbnZhciBMT1dfUFJJT1JJVFlfVElNRU9VVCA9IDEwMDAwO1xuLy8gTmV2ZXIgdGltZXMgb3V0XG52YXIgSURMRV9QUklPUklUWSA9IG1heFNpZ25lZDMxQml0SW50O1xuXG4vLyBDYWxsYmFja3MgYXJlIHN0b3JlZCBhcyBhIGNpcmN1bGFyLCBkb3VibHkgbGlua2VkIGxpc3QuXG52YXIgZmlyc3RDYWxsYmFja05vZGUgPSBudWxsO1xuXG52YXIgY3VycmVudERpZFRpbWVvdXQgPSBmYWxzZTtcbi8vIFBhdXNpbmcgdGhlIHNjaGVkdWxlciBpcyB1c2VmdWwgZm9yIGRlYnVnZ2luZy5cbnZhciBpc1NjaGVkdWxlclBhdXNlZCA9IGZhbHNlO1xuXG52YXIgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBOb3JtYWxQcmlvcml0eTtcbnZhciBjdXJyZW50RXZlbnRTdGFydFRpbWUgPSAtMTtcbnZhciBjdXJyZW50RXhwaXJhdGlvblRpbWUgPSAtMTtcblxuLy8gVGhpcyBpcyBzZXQgd2hlbiBhIGNhbGxiYWNrIGlzIGJlaW5nIGV4ZWN1dGVkLCB0byBwcmV2ZW50IHJlLWVudHJhbmN5LlxudmFyIGlzRXhlY3V0aW5nQ2FsbGJhY2sgPSBmYWxzZTtcblxudmFyIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gZmFsc2U7XG5cbnZhciBoYXNOYXRpdmVQZXJmb3JtYW5jZU5vdyA9IHR5cGVvZiBwZXJmb3JtYW5jZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHBlcmZvcm1hbmNlLm5vdyA9PT0gJ2Z1bmN0aW9uJztcblxuZnVuY3Rpb24gZW5zdXJlSG9zdENhbGxiYWNrSXNTY2hlZHVsZWQoKSB7XG4gIGlmIChpc0V4ZWN1dGluZ0NhbGxiYWNrKSB7XG4gICAgLy8gRG9uJ3Qgc2NoZWR1bGUgd29yayB5ZXQ7IHdhaXQgdW50aWwgdGhlIG5leHQgdGltZSB3ZSB5aWVsZC5cbiAgICByZXR1cm47XG4gIH1cbiAgLy8gU2NoZWR1bGUgdGhlIGhvc3QgY2FsbGJhY2sgdXNpbmcgdGhlIGVhcmxpZXN0IGV4cGlyYXRpb24gaW4gdGhlIGxpc3QuXG4gIHZhciBleHBpcmF0aW9uVGltZSA9IGZpcnN0Q2FsbGJhY2tOb2RlLmV4cGlyYXRpb25UaW1lO1xuICBpZiAoIWlzSG9zdENhbGxiYWNrU2NoZWR1bGVkKSB7XG4gICAgaXNIb3N0Q2FsbGJhY2tTY2hlZHVsZWQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIC8vIENhbmNlbCB0aGUgZXhpc3RpbmcgaG9zdCBjYWxsYmFjay5cbiAgICBjYW5jZWxIb3N0Q2FsbGJhY2soKTtcbiAgfVxuICByZXF1ZXN0SG9zdENhbGxiYWNrKGZsdXNoV29yaywgZXhwaXJhdGlvblRpbWUpO1xufVxuXG5mdW5jdGlvbiBmbHVzaEZpcnN0Q2FsbGJhY2soKSB7XG4gIHZhciBmbHVzaGVkTm9kZSA9IGZpcnN0Q2FsbGJhY2tOb2RlO1xuXG4gIC8vIFJlbW92ZSB0aGUgbm9kZSBmcm9tIHRoZSBsaXN0IGJlZm9yZSBjYWxsaW5nIHRoZSBjYWxsYmFjay4gVGhhdCB3YXkgdGhlXG4gIC8vIGxpc3QgaXMgaW4gYSBjb25zaXN0ZW50IHN0YXRlIGV2ZW4gaWYgdGhlIGNhbGxiYWNrIHRocm93cy5cbiAgdmFyIG5leHQgPSBmaXJzdENhbGxiYWNrTm9kZS5uZXh0O1xuICBpZiAoZmlyc3RDYWxsYmFja05vZGUgPT09IG5leHQpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBsYXN0IGNhbGxiYWNrIGluIHRoZSBsaXN0LlxuICAgIGZpcnN0Q2FsbGJhY2tOb2RlID0gbnVsbDtcbiAgICBuZXh0ID0gbnVsbDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGFzdENhbGxiYWNrTm9kZSA9IGZpcnN0Q2FsbGJhY2tOb2RlLnByZXZpb3VzO1xuICAgIGZpcnN0Q2FsbGJhY2tOb2RlID0gbGFzdENhbGxiYWNrTm9kZS5uZXh0ID0gbmV4dDtcbiAgICBuZXh0LnByZXZpb3VzID0gbGFzdENhbGxiYWNrTm9kZTtcbiAgfVxuXG4gIGZsdXNoZWROb2RlLm5leHQgPSBmbHVzaGVkTm9kZS5wcmV2aW91cyA9IG51bGw7XG5cbiAgLy8gTm93IGl0J3Mgc2FmZSB0byBjYWxsIHRoZSBjYWxsYmFjay5cbiAgdmFyIGNhbGxiYWNrID0gZmx1c2hlZE5vZGUuY2FsbGJhY2s7XG4gIHZhciBleHBpcmF0aW9uVGltZSA9IGZsdXNoZWROb2RlLmV4cGlyYXRpb25UaW1lO1xuICB2YXIgcHJpb3JpdHlMZXZlbCA9IGZsdXNoZWROb2RlLnByaW9yaXR5TGV2ZWw7XG4gIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgdmFyIHByZXZpb3VzRXhwaXJhdGlvblRpbWUgPSBjdXJyZW50RXhwaXJhdGlvblRpbWU7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcbiAgY3VycmVudEV4cGlyYXRpb25UaW1lID0gZXhwaXJhdGlvblRpbWU7XG4gIHZhciBjb250aW51YXRpb25DYWxsYmFjaztcbiAgdHJ5IHtcbiAgICBjb250aW51YXRpb25DYWxsYmFjayA9IGNhbGxiYWNrKCk7XG4gIH0gZmluYWxseSB7XG4gICAgY3VycmVudFByaW9yaXR5TGV2ZWwgPSBwcmV2aW91c1ByaW9yaXR5TGV2ZWw7XG4gICAgY3VycmVudEV4cGlyYXRpb25UaW1lID0gcHJldmlvdXNFeHBpcmF0aW9uVGltZTtcbiAgfVxuXG4gIC8vIEEgY2FsbGJhY2sgbWF5IHJldHVybiBhIGNvbnRpbnVhdGlvbi4gVGhlIGNvbnRpbnVhdGlvbiBzaG91bGQgYmUgc2NoZWR1bGVkXG4gIC8vIHdpdGggdGhlIHNhbWUgcHJpb3JpdHkgYW5kIGV4cGlyYXRpb24gYXMgdGhlIGp1c3QtZmluaXNoZWQgY2FsbGJhY2suXG4gIGlmICh0eXBlb2YgY29udGludWF0aW9uQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgY29udGludWF0aW9uTm9kZSA9IHtcbiAgICAgIGNhbGxiYWNrOiBjb250aW51YXRpb25DYWxsYmFjayxcbiAgICAgIHByaW9yaXR5TGV2ZWw6IHByaW9yaXR5TGV2ZWwsXG4gICAgICBleHBpcmF0aW9uVGltZTogZXhwaXJhdGlvblRpbWUsXG4gICAgICBuZXh0OiBudWxsLFxuICAgICAgcHJldmlvdXM6IG51bGxcbiAgICB9O1xuXG4gICAgLy8gSW5zZXJ0IHRoZSBuZXcgY2FsbGJhY2sgaW50byB0aGUgbGlzdCwgc29ydGVkIGJ5IGl0cyBleHBpcmF0aW9uLiBUaGlzIGlzXG4gICAgLy8gYWxtb3N0IHRoZSBzYW1lIGFzIHRoZSBjb2RlIGluIGBzY2hlZHVsZUNhbGxiYWNrYCwgZXhjZXB0IHRoZSBjYWxsYmFja1xuICAgIC8vIGlzIGluc2VydGVkIGludG8gdGhlIGxpc3QgKmJlZm9yZSogY2FsbGJhY2tzIG9mIGVxdWFsIGV4cGlyYXRpb24gaW5zdGVhZFxuICAgIC8vIG9mIGFmdGVyLlxuICAgIGlmIChmaXJzdENhbGxiYWNrTm9kZSA9PT0gbnVsbCkge1xuICAgICAgLy8gVGhpcyBpcyB0aGUgZmlyc3QgY2FsbGJhY2sgaW4gdGhlIGxpc3QuXG4gICAgICBmaXJzdENhbGxiYWNrTm9kZSA9IGNvbnRpbnVhdGlvbk5vZGUubmV4dCA9IGNvbnRpbnVhdGlvbk5vZGUucHJldmlvdXMgPSBjb250aW51YXRpb25Ob2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbmV4dEFmdGVyQ29udGludWF0aW9uID0gbnVsbDtcbiAgICAgIHZhciBub2RlID0gZmlyc3RDYWxsYmFja05vZGU7XG4gICAgICBkbyB7XG4gICAgICAgIGlmIChub2RlLmV4cGlyYXRpb25UaW1lID49IGV4cGlyYXRpb25UaW1lKSB7XG4gICAgICAgICAgLy8gVGhpcyBjYWxsYmFjayBleHBpcmVzIGF0IG9yIGFmdGVyIHRoZSBjb250aW51YXRpb24uIFdlIHdpbGwgaW5zZXJ0XG4gICAgICAgICAgLy8gdGhlIGNvbnRpbnVhdGlvbiAqYmVmb3JlKiB0aGlzIGNhbGxiYWNrLlxuICAgICAgICAgIG5leHRBZnRlckNvbnRpbnVhdGlvbiA9IG5vZGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgIH0gd2hpbGUgKG5vZGUgIT09IGZpcnN0Q2FsbGJhY2tOb2RlKTtcblxuICAgICAgaWYgKG5leHRBZnRlckNvbnRpbnVhdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICAvLyBObyBlcXVhbCBvciBsb3dlciBwcmlvcml0eSBjYWxsYmFjayB3YXMgZm91bmQsIHdoaWNoIG1lYW5zIHRoZSBuZXdcbiAgICAgICAgLy8gY2FsbGJhY2sgaXMgdGhlIGxvd2VzdCBwcmlvcml0eSBjYWxsYmFjayBpbiB0aGUgbGlzdC5cbiAgICAgICAgbmV4dEFmdGVyQ29udGludWF0aW9uID0gZmlyc3RDYWxsYmFja05vZGU7XG4gICAgICB9IGVsc2UgaWYgKG5leHRBZnRlckNvbnRpbnVhdGlvbiA9PT0gZmlyc3RDYWxsYmFja05vZGUpIHtcbiAgICAgICAgLy8gVGhlIG5ldyBjYWxsYmFjayBpcyB0aGUgaGlnaGVzdCBwcmlvcml0eSBjYWxsYmFjayBpbiB0aGUgbGlzdC5cbiAgICAgICAgZmlyc3RDYWxsYmFja05vZGUgPSBjb250aW51YXRpb25Ob2RlO1xuICAgICAgICBlbnN1cmVIb3N0Q2FsbGJhY2tJc1NjaGVkdWxlZCgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcHJldmlvdXMgPSBuZXh0QWZ0ZXJDb250aW51YXRpb24ucHJldmlvdXM7XG4gICAgICBwcmV2aW91cy5uZXh0ID0gbmV4dEFmdGVyQ29udGludWF0aW9uLnByZXZpb3VzID0gY29udGludWF0aW9uTm9kZTtcbiAgICAgIGNvbnRpbnVhdGlvbk5vZGUubmV4dCA9IG5leHRBZnRlckNvbnRpbnVhdGlvbjtcbiAgICAgIGNvbnRpbnVhdGlvbk5vZGUucHJldmlvdXMgPSBwcmV2aW91cztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmx1c2hJbW1lZGlhdGVXb3JrKCkge1xuICBpZiAoXG4gIC8vIENvbmZpcm0gd2UndmUgZXhpdGVkIHRoZSBvdXRlciBtb3N0IGV2ZW50IGhhbmRsZXJcbiAgY3VycmVudEV2ZW50U3RhcnRUaW1lID09PSAtMSAmJiBmaXJzdENhbGxiYWNrTm9kZSAhPT0gbnVsbCAmJiBmaXJzdENhbGxiYWNrTm9kZS5wcmlvcml0eUxldmVsID09PSBJbW1lZGlhdGVQcmlvcml0eSkge1xuICAgIGlzRXhlY3V0aW5nQ2FsbGJhY2sgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBkbyB7XG4gICAgICAgIGZsdXNoRmlyc3RDYWxsYmFjaygpO1xuICAgICAgfSB3aGlsZSAoXG4gICAgICAvLyBLZWVwIGZsdXNoaW5nIHVudGlsIHRoZXJlIGFyZSBubyBtb3JlIGltbWVkaWF0ZSBjYWxsYmFja3NcbiAgICAgIGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsICYmIGZpcnN0Q2FsbGJhY2tOb2RlLnByaW9yaXR5TGV2ZWwgPT09IEltbWVkaWF0ZVByaW9yaXR5KTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNFeGVjdXRpbmdDYWxsYmFjayA9IGZhbHNlO1xuICAgICAgaWYgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIC8vIFRoZXJlJ3Mgc3RpbGwgd29yayByZW1haW5pbmcuIFJlcXVlc3QgYW5vdGhlciBjYWxsYmFjay5cbiAgICAgICAgZW5zdXJlSG9zdENhbGxiYWNrSXNTY2hlZHVsZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlzSG9zdENhbGxiYWNrU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZsdXNoV29yayhkaWRUaW1lb3V0KSB7XG4gIC8vIEV4aXQgcmlnaHQgYXdheSBpZiB3ZSdyZSBjdXJyZW50bHkgcGF1c2VkXG5cbiAgaWYgKGVuYWJsZVNjaGVkdWxlckRlYnVnZ2luZyAmJiBpc1NjaGVkdWxlclBhdXNlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzRXhlY3V0aW5nQ2FsbGJhY2sgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNEaWRUaW1lb3V0ID0gY3VycmVudERpZFRpbWVvdXQ7XG4gIGN1cnJlbnREaWRUaW1lb3V0ID0gZGlkVGltZW91dDtcbiAgdHJ5IHtcbiAgICBpZiAoZGlkVGltZW91dCkge1xuICAgICAgLy8gRmx1c2ggYWxsIHRoZSBleHBpcmVkIGNhbGxiYWNrcyB3aXRob3V0IHlpZWxkaW5nLlxuICAgICAgd2hpbGUgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsICYmICEoZW5hYmxlU2NoZWR1bGVyRGVidWdnaW5nICYmIGlzU2NoZWR1bGVyUGF1c2VkKSkge1xuICAgICAgICAvLyBUT0RPIFdyYXAgaW4gZmVhdHVyZSBmbGFnXG4gICAgICAgIC8vIFJlYWQgdGhlIGN1cnJlbnQgdGltZS4gRmx1c2ggYWxsIHRoZSBjYWxsYmFja3MgdGhhdCBleHBpcmUgYXQgb3JcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoYXQgdGltZS4gVGhlbiByZWFkIHRoZSBjdXJyZW50IHRpbWUgYWdhaW4gYW5kIHJlcGVhdC5cbiAgICAgICAgLy8gVGhpcyBvcHRpbWl6ZXMgZm9yIGFzIGZldyBwZXJmb3JtYW5jZS5ub3cgY2FsbHMgYXMgcG9zc2libGUuXG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG4gICAgICAgIGlmIChmaXJzdENhbGxiYWNrTm9kZS5leHBpcmF0aW9uVGltZSA8PSBjdXJyZW50VGltZSkge1xuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGZsdXNoRmlyc3RDYWxsYmFjaygpO1xuICAgICAgICAgIH0gd2hpbGUgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsICYmIGZpcnN0Q2FsbGJhY2tOb2RlLmV4cGlyYXRpb25UaW1lIDw9IGN1cnJlbnRUaW1lICYmICEoZW5hYmxlU2NoZWR1bGVyRGVidWdnaW5nICYmIGlzU2NoZWR1bGVyUGF1c2VkKSk7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEtlZXAgZmx1c2hpbmcgY2FsbGJhY2tzIHVudGlsIHdlIHJ1biBvdXQgb2YgdGltZSBpbiB0aGUgZnJhbWUuXG4gICAgICBpZiAoZmlyc3RDYWxsYmFja05vZGUgIT09IG51bGwpIHtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIGlmIChlbmFibGVTY2hlZHVsZXJEZWJ1Z2dpbmcgJiYgaXNTY2hlZHVsZXJQYXVzZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBmbHVzaEZpcnN0Q2FsbGJhY2soKTtcbiAgICAgICAgfSB3aGlsZSAoZmlyc3RDYWxsYmFja05vZGUgIT09IG51bGwgJiYgIXNob3VsZFlpZWxkVG9Ib3N0KCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpc0V4ZWN1dGluZ0NhbGxiYWNrID0gZmFsc2U7XG4gICAgY3VycmVudERpZFRpbWVvdXQgPSBwcmV2aW91c0RpZFRpbWVvdXQ7XG4gICAgaWYgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyBUaGVyZSdzIHN0aWxsIHdvcmsgcmVtYWluaW5nLiBSZXF1ZXN0IGFub3RoZXIgY2FsbGJhY2suXG4gICAgICBlbnN1cmVIb3N0Q2FsbGJhY2tJc1NjaGVkdWxlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpc0hvc3RDYWxsYmFja1NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBCZWZvcmUgZXhpdGluZywgZmx1c2ggYWxsIHRoZSBpbW1lZGlhdGUgd29yayB0aGF0IHdhcyBzY2hlZHVsZWQuXG4gICAgZmx1c2hJbW1lZGlhdGVXb3JrKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KHByaW9yaXR5TGV2ZWwsIGV2ZW50SGFuZGxlcikge1xuICBzd2l0Y2ggKHByaW9yaXR5TGV2ZWwpIHtcbiAgICBjYXNlIEltbWVkaWF0ZVByaW9yaXR5OlxuICAgIGNhc2UgVXNlckJsb2NraW5nUHJpb3JpdHk6XG4gICAgY2FzZSBOb3JtYWxQcmlvcml0eTpcbiAgICBjYXNlIExvd1ByaW9yaXR5OlxuICAgIGNhc2UgSWRsZVByaW9yaXR5OlxuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHByaW9yaXR5TGV2ZWwgPSBOb3JtYWxQcmlvcml0eTtcbiAgfVxuXG4gIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgdmFyIHByZXZpb3VzRXZlbnRTdGFydFRpbWUgPSBjdXJyZW50RXZlbnRTdGFydFRpbWU7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcbiAgY3VycmVudEV2ZW50U3RhcnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgICBjdXJyZW50RXZlbnRTdGFydFRpbWUgPSBwcmV2aW91c0V2ZW50U3RhcnRUaW1lO1xuXG4gICAgLy8gQmVmb3JlIGV4aXRpbmcsIGZsdXNoIGFsbCB0aGUgaW1tZWRpYXRlIHdvcmsgdGhhdCB3YXMgc2NoZWR1bGVkLlxuICAgIGZsdXNoSW1tZWRpYXRlV29yaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX25leHQoZXZlbnRIYW5kbGVyKSB7XG4gIHZhciBwcmlvcml0eUxldmVsID0gdm9pZCAwO1xuICBzd2l0Y2ggKGN1cnJlbnRQcmlvcml0eUxldmVsKSB7XG4gICAgY2FzZSBJbW1lZGlhdGVQcmlvcml0eTpcbiAgICBjYXNlIFVzZXJCbG9ja2luZ1ByaW9yaXR5OlxuICAgIGNhc2UgTm9ybWFsUHJpb3JpdHk6XG4gICAgICAvLyBTaGlmdCBkb3duIHRvIG5vcm1hbCBwcmlvcml0eVxuICAgICAgcHJpb3JpdHlMZXZlbCA9IE5vcm1hbFByaW9yaXR5O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIEFueXRoaW5nIGxvd2VyIHRoYW4gbm9ybWFsIHByaW9yaXR5IHNob3VsZCByZW1haW4gYXQgdGhlIGN1cnJlbnQgbGV2ZWwuXG4gICAgICBwcmlvcml0eUxldmVsID0gY3VycmVudFByaW9yaXR5TGV2ZWw7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHZhciBwcmV2aW91c1ByaW9yaXR5TGV2ZWwgPSBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbiAgdmFyIHByZXZpb3VzRXZlbnRTdGFydFRpbWUgPSBjdXJyZW50RXZlbnRTdGFydFRpbWU7XG4gIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcHJpb3JpdHlMZXZlbDtcbiAgY3VycmVudEV2ZW50U3RhcnRUaW1lID0gZXhwb3J0cy51bnN0YWJsZV9ub3coKTtcblxuICB0cnkge1xuICAgIHJldHVybiBldmVudEhhbmRsZXIoKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgICBjdXJyZW50RXZlbnRTdGFydFRpbWUgPSBwcmV2aW91c0V2ZW50U3RhcnRUaW1lO1xuXG4gICAgLy8gQmVmb3JlIGV4aXRpbmcsIGZsdXNoIGFsbCB0aGUgaW1tZWRpYXRlIHdvcmsgdGhhdCB3YXMgc2NoZWR1bGVkLlxuICAgIGZsdXNoSW1tZWRpYXRlV29yaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3dyYXBDYWxsYmFjayhjYWxsYmFjaykge1xuICB2YXIgcGFyZW50UHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaXMgaXMgYSBmb3JrIG9mIHJ1bldpdGhQcmlvcml0eSwgaW5saW5lZCBmb3IgcGVyZm9ybWFuY2UuXG4gICAgdmFyIHByZXZpb3VzUHJpb3JpdHlMZXZlbCA9IGN1cnJlbnRQcmlvcml0eUxldmVsO1xuICAgIHZhciBwcmV2aW91c0V2ZW50U3RhcnRUaW1lID0gY3VycmVudEV2ZW50U3RhcnRUaW1lO1xuICAgIGN1cnJlbnRQcmlvcml0eUxldmVsID0gcGFyZW50UHJpb3JpdHlMZXZlbDtcbiAgICBjdXJyZW50RXZlbnRTdGFydFRpbWUgPSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UHJpb3JpdHlMZXZlbCA9IHByZXZpb3VzUHJpb3JpdHlMZXZlbDtcbiAgICAgIGN1cnJlbnRFdmVudFN0YXJ0VGltZSA9IHByZXZpb3VzRXZlbnRTdGFydFRpbWU7XG4gICAgICBmbHVzaEltbWVkaWF0ZVdvcmsoKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2soY2FsbGJhY2ssIGRlcHJlY2F0ZWRfb3B0aW9ucykge1xuICB2YXIgc3RhcnRUaW1lID0gY3VycmVudEV2ZW50U3RhcnRUaW1lICE9PSAtMSA/IGN1cnJlbnRFdmVudFN0YXJ0VGltZSA6IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgdmFyIGV4cGlyYXRpb25UaW1lO1xuICBpZiAodHlwZW9mIGRlcHJlY2F0ZWRfb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgZGVwcmVjYXRlZF9vcHRpb25zICE9PSBudWxsICYmIHR5cGVvZiBkZXByZWNhdGVkX29wdGlvbnMudGltZW91dCA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBGSVhNRTogUmVtb3ZlIHRoaXMgYnJhbmNoIG9uY2Ugd2UgbGlmdCBleHBpcmF0aW9uIHRpbWVzIG91dCBvZiBSZWFjdC5cbiAgICBleHBpcmF0aW9uVGltZSA9IHN0YXJ0VGltZSArIGRlcHJlY2F0ZWRfb3B0aW9ucy50aW1lb3V0O1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoY3VycmVudFByaW9yaXR5TGV2ZWwpIHtcbiAgICAgIGNhc2UgSW1tZWRpYXRlUHJpb3JpdHk6XG4gICAgICAgIGV4cGlyYXRpb25UaW1lID0gc3RhcnRUaW1lICsgSU1NRURJQVRFX1BSSU9SSVRZX1RJTUVPVVQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBVc2VyQmxvY2tpbmdQcmlvcml0eTpcbiAgICAgICAgZXhwaXJhdGlvblRpbWUgPSBzdGFydFRpbWUgKyBVU0VSX0JMT0NLSU5HX1BSSU9SSVRZO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSWRsZVByaW9yaXR5OlxuICAgICAgICBleHBpcmF0aW9uVGltZSA9IHN0YXJ0VGltZSArIElETEVfUFJJT1JJVFk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb3dQcmlvcml0eTpcbiAgICAgICAgZXhwaXJhdGlvblRpbWUgPSBzdGFydFRpbWUgKyBMT1dfUFJJT1JJVFlfVElNRU9VVDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE5vcm1hbFByaW9yaXR5OlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZXhwaXJhdGlvblRpbWUgPSBzdGFydFRpbWUgKyBOT1JNQUxfUFJJT1JJVFlfVElNRU9VVDtcbiAgICB9XG4gIH1cblxuICB2YXIgbmV3Tm9kZSA9IHtcbiAgICBjYWxsYmFjazogY2FsbGJhY2ssXG4gICAgcHJpb3JpdHlMZXZlbDogY3VycmVudFByaW9yaXR5TGV2ZWwsXG4gICAgZXhwaXJhdGlvblRpbWU6IGV4cGlyYXRpb25UaW1lLFxuICAgIG5leHQ6IG51bGwsXG4gICAgcHJldmlvdXM6IG51bGxcbiAgfTtcblxuICAvLyBJbnNlcnQgdGhlIG5ldyBjYWxsYmFjayBpbnRvIHRoZSBsaXN0LCBvcmRlcmVkIGZpcnN0IGJ5IGV4cGlyYXRpb24sIHRoZW5cbiAgLy8gYnkgaW5zZXJ0aW9uLiBTbyB0aGUgbmV3IGNhbGxiYWNrIGlzIGluc2VydGVkIGFueSBvdGhlciBjYWxsYmFjayB3aXRoXG4gIC8vIGVxdWFsIGV4cGlyYXRpb24uXG4gIGlmIChmaXJzdENhbGxiYWNrTm9kZSA9PT0gbnVsbCkge1xuICAgIC8vIFRoaXMgaXMgdGhlIGZpcnN0IGNhbGxiYWNrIGluIHRoZSBsaXN0LlxuICAgIGZpcnN0Q2FsbGJhY2tOb2RlID0gbmV3Tm9kZS5uZXh0ID0gbmV3Tm9kZS5wcmV2aW91cyA9IG5ld05vZGU7XG4gICAgZW5zdXJlSG9zdENhbGxiYWNrSXNTY2hlZHVsZWQoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV4dCA9IG51bGw7XG4gICAgdmFyIG5vZGUgPSBmaXJzdENhbGxiYWNrTm9kZTtcbiAgICBkbyB7XG4gICAgICBpZiAobm9kZS5leHBpcmF0aW9uVGltZSA+IGV4cGlyYXRpb25UaW1lKSB7XG4gICAgICAgIC8vIFRoZSBuZXcgY2FsbGJhY2sgZXhwaXJlcyBiZWZvcmUgdGhpcyBvbmUuXG4gICAgICAgIG5leHQgPSBub2RlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG5vZGUgPSBub2RlLm5leHQ7XG4gICAgfSB3aGlsZSAobm9kZSAhPT0gZmlyc3RDYWxsYmFja05vZGUpO1xuXG4gICAgaWYgKG5leHQgPT09IG51bGwpIHtcbiAgICAgIC8vIE5vIGNhbGxiYWNrIHdpdGggYSBsYXRlciBleHBpcmF0aW9uIHdhcyBmb3VuZCwgd2hpY2ggbWVhbnMgdGhlIG5ld1xuICAgICAgLy8gY2FsbGJhY2sgaGFzIHRoZSBsYXRlc3QgZXhwaXJhdGlvbiBpbiB0aGUgbGlzdC5cbiAgICAgIG5leHQgPSBmaXJzdENhbGxiYWNrTm9kZTtcbiAgICB9IGVsc2UgaWYgKG5leHQgPT09IGZpcnN0Q2FsbGJhY2tOb2RlKSB7XG4gICAgICAvLyBUaGUgbmV3IGNhbGxiYWNrIGhhcyB0aGUgZWFybGllc3QgZXhwaXJhdGlvbiBpbiB0aGUgZW50aXJlIGxpc3QuXG4gICAgICBmaXJzdENhbGxiYWNrTm9kZSA9IG5ld05vZGU7XG4gICAgICBlbnN1cmVIb3N0Q2FsbGJhY2tJc1NjaGVkdWxlZCgpO1xuICAgIH1cblxuICAgIHZhciBwcmV2aW91cyA9IG5leHQucHJldmlvdXM7XG4gICAgcHJldmlvdXMubmV4dCA9IG5leHQucHJldmlvdXMgPSBuZXdOb2RlO1xuICAgIG5ld05vZGUubmV4dCA9IG5leHQ7XG4gICAgbmV3Tm9kZS5wcmV2aW91cyA9IHByZXZpb3VzO1xuICB9XG5cbiAgcmV0dXJuIG5ld05vZGU7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX3BhdXNlRXhlY3V0aW9uKCkge1xuICBpc1NjaGVkdWxlclBhdXNlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NvbnRpbnVlRXhlY3V0aW9uKCkge1xuICBpc1NjaGVkdWxlclBhdXNlZCA9IGZhbHNlO1xuICBpZiAoZmlyc3RDYWxsYmFja05vZGUgIT09IG51bGwpIHtcbiAgICBlbnN1cmVIb3N0Q2FsbGJhY2tJc1NjaGVkdWxlZCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2dldEZpcnN0Q2FsbGJhY2tOb2RlKCkge1xuICByZXR1cm4gZmlyc3RDYWxsYmFja05vZGU7XG59XG5cbmZ1bmN0aW9uIHVuc3RhYmxlX2NhbmNlbENhbGxiYWNrKGNhbGxiYWNrTm9kZSkge1xuICB2YXIgbmV4dCA9IGNhbGxiYWNrTm9kZS5uZXh0O1xuICBpZiAobmV4dCA9PT0gbnVsbCkge1xuICAgIC8vIEFscmVhZHkgY2FuY2VsbGVkLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChuZXh0ID09PSBjYWxsYmFja05vZGUpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHNjaGVkdWxlZCBjYWxsYmFjay4gQ2xlYXIgdGhlIGxpc3QuXG4gICAgZmlyc3RDYWxsYmFja05vZGUgPSBudWxsO1xuICB9IGVsc2Uge1xuICAgIC8vIFJlbW92ZSB0aGUgY2FsbGJhY2sgZnJvbSBpdHMgcG9zaXRpb24gaW4gdGhlIGxpc3QuXG4gICAgaWYgKGNhbGxiYWNrTm9kZSA9PT0gZmlyc3RDYWxsYmFja05vZGUpIHtcbiAgICAgIGZpcnN0Q2FsbGJhY2tOb2RlID0gbmV4dDtcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzID0gY2FsbGJhY2tOb2RlLnByZXZpb3VzO1xuICAgIHByZXZpb3VzLm5leHQgPSBuZXh0O1xuICAgIG5leHQucHJldmlvdXMgPSBwcmV2aW91cztcbiAgfVxuXG4gIGNhbGxiYWNrTm9kZS5uZXh0ID0gY2FsbGJhY2tOb2RlLnByZXZpb3VzID0gbnVsbDtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwoKSB7XG4gIHJldHVybiBjdXJyZW50UHJpb3JpdHlMZXZlbDtcbn1cblxuZnVuY3Rpb24gdW5zdGFibGVfc2hvdWxkWWllbGQoKSB7XG4gIHJldHVybiAhY3VycmVudERpZFRpbWVvdXQgJiYgKGZpcnN0Q2FsbGJhY2tOb2RlICE9PSBudWxsICYmIGZpcnN0Q2FsbGJhY2tOb2RlLmV4cGlyYXRpb25UaW1lIDwgY3VycmVudEV4cGlyYXRpb25UaW1lIHx8IHNob3VsZFlpZWxkVG9Ib3N0KCkpO1xufVxuXG4vLyBUaGUgcmVtYWluaW5nIGNvZGUgaXMgZXNzZW50aWFsbHkgYSBwb2x5ZmlsbCBmb3IgcmVxdWVzdElkbGVDYWxsYmFjay4gSXRcbi8vIHdvcmtzIGJ5IHNjaGVkdWxpbmcgYSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHN0b3JpbmcgdGhlIHRpbWUgZm9yIHRoZSBzdGFydFxuLy8gb2YgdGhlIGZyYW1lLCB0aGVuIHNjaGVkdWxpbmcgYSBwb3N0TWVzc2FnZSB3aGljaCBnZXRzIHNjaGVkdWxlZCBhZnRlciBwYWludC5cbi8vIFdpdGhpbiB0aGUgcG9zdE1lc3NhZ2UgaGFuZGxlciBkbyBhcyBtdWNoIHdvcmsgYXMgcG9zc2libGUgdW50aWwgdGltZSArIGZyYW1lXG4vLyByYXRlLiBCeSBzZXBhcmF0aW5nIHRoZSBpZGxlIGNhbGwgaW50byBhIHNlcGFyYXRlIGV2ZW50IHRpY2sgd2UgZW5zdXJlIHRoYXRcbi8vIGxheW91dCwgcGFpbnQgYW5kIG90aGVyIGJyb3dzZXIgd29yayBpcyBjb3VudGVkIGFnYWluc3QgdGhlIGF2YWlsYWJsZSB0aW1lLlxuLy8gVGhlIGZyYW1lIHJhdGUgaXMgZHluYW1pY2FsbHkgYWRqdXN0ZWQuXG5cbi8vIFdlIGNhcHR1cmUgYSBsb2NhbCByZWZlcmVuY2UgdG8gYW55IGdsb2JhbCwgaW4gY2FzZSBpdCBnZXRzIHBvbHlmaWxsZWQgYWZ0ZXJcbi8vIHRoaXMgbW9kdWxlIGlzIGluaXRpYWxseSBldmFsdWF0ZWQuIFdlIHdhbnQgdG8gYmUgdXNpbmcgYVxuLy8gY29uc2lzdGVudCBpbXBsZW1lbnRhdGlvbi5cbnZhciBsb2NhbERhdGUgPSBEYXRlO1xuXG4vLyBUaGlzIGluaXRpYWxpemF0aW9uIGNvZGUgbWF5IHJ1biBldmVuIG9uIHNlcnZlciBlbnZpcm9ubWVudHMgaWYgYSBjb21wb25lbnRcbi8vIGp1c3QgaW1wb3J0cyBSZWFjdERPTSAoZS5nLiBmb3IgZmluZERPTU5vZGUpLiBTb21lIGVudmlyb25tZW50cyBtaWdodCBub3Rcbi8vIGhhdmUgc2V0VGltZW91dCBvciBjbGVhclRpbWVvdXQuIEhvd2V2ZXIsIHdlIGFsd2F5cyBleHBlY3QgdGhlbSB0byBiZSBkZWZpbmVkXG4vLyBvbiB0aGUgY2xpZW50LiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC8xMzA4OFxudmFyIGxvY2FsU2V0VGltZW91dCA9IHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nID8gc2V0VGltZW91dCA6IHVuZGVmaW5lZDtcbnZhciBsb2NhbENsZWFyVGltZW91dCA9IHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicgPyBjbGVhclRpbWVvdXQgOiB1bmRlZmluZWQ7XG5cbi8vIFdlIGRvbid0IGV4cGVjdCBlaXRoZXIgb2YgdGhlc2UgdG8gbmVjZXNzYXJpbHkgYmUgZGVmaW5lZCwgYnV0IHdlIHdpbGwgZXJyb3Jcbi8vIGxhdGVyIGlmIHRoZXkgYXJlIG1pc3Npbmcgb24gdGhlIGNsaWVudC5cbnZhciBsb2NhbFJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPT09ICdmdW5jdGlvbicgPyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgOiB1bmRlZmluZWQ7XG52YXIgbG9jYWxDYW5jZWxBbmltYXRpb25GcmFtZSA9IHR5cGVvZiBjYW5jZWxBbmltYXRpb25GcmFtZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhbmNlbEFuaW1hdGlvbkZyYW1lIDogdW5kZWZpbmVkO1xuXG4vLyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZG9lcyBub3QgcnVuIHdoZW4gdGhlIHRhYiBpcyBpbiB0aGUgYmFja2dyb3VuZC4gSWZcbi8vIHdlJ3JlIGJhY2tncm91bmRlZCB3ZSBwcmVmZXIgZm9yIHRoYXQgd29yayB0byBoYXBwZW4gc28gdGhhdCB0aGUgcGFnZVxuLy8gY29udGludWVzIHRvIGxvYWQgaW4gdGhlIGJhY2tncm91bmQuIFNvIHdlIGFsc28gc2NoZWR1bGUgYSAnc2V0VGltZW91dCcgYXNcbi8vIGEgZmFsbGJhY2suXG4vLyBUT0RPOiBOZWVkIGEgYmV0dGVyIGhldXJpc3RpYyBmb3IgYmFja2dyb3VuZGVkIHdvcmsuXG52YXIgQU5JTUFUSU9OX0ZSQU1FX1RJTUVPVVQgPSAxMDA7XG52YXIgckFGSUQ7XG52YXIgckFGVGltZW91dElEO1xudmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZVdpdGhUaW1lb3V0ID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gIC8vIHNjaGVkdWxlIHJBRiBhbmQgYWxzbyBhIHNldFRpbWVvdXRcbiAgckFGSUQgPSBsb2NhbFJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAodGltZXN0YW1wKSB7XG4gICAgLy8gY2FuY2VsIHRoZSBzZXRUaW1lb3V0XG4gICAgbG9jYWxDbGVhclRpbWVvdXQockFGVGltZW91dElEKTtcbiAgICBjYWxsYmFjayh0aW1lc3RhbXApO1xuICB9KTtcbiAgckFGVGltZW91dElEID0gbG9jYWxTZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjYW5jZWwgdGhlIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIGxvY2FsQ2FuY2VsQW5pbWF0aW9uRnJhbWUockFGSUQpO1xuICAgIGNhbGxiYWNrKGV4cG9ydHMudW5zdGFibGVfbm93KCkpO1xuICB9LCBBTklNQVRJT05fRlJBTUVfVElNRU9VVCk7XG59O1xuXG5pZiAoaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cpIHtcbiAgdmFyIFBlcmZvcm1hbmNlID0gcGVyZm9ybWFuY2U7XG4gIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBQZXJmb3JtYW5jZS5ub3coKTtcbiAgfTtcbn0gZWxzZSB7XG4gIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBsb2NhbERhdGUubm93KCk7XG4gIH07XG59XG5cbnZhciByZXF1ZXN0SG9zdENhbGxiYWNrO1xudmFyIGNhbmNlbEhvc3RDYWxsYmFjaztcbnZhciBzaG91bGRZaWVsZFRvSG9zdDtcblxudmFyIGdsb2JhbFZhbHVlID0gbnVsbDtcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICBnbG9iYWxWYWx1ZSA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ2xvYmFsVmFsdWUgPSBnbG9iYWw7XG59XG5cbmlmIChnbG9iYWxWYWx1ZSAmJiBnbG9iYWxWYWx1ZS5fc2NoZWRNb2NrKSB7XG4gIC8vIER5bmFtaWMgaW5qZWN0aW9uLCBvbmx5IGZvciB0ZXN0aW5nIHB1cnBvc2VzLlxuICB2YXIgZ2xvYmFsSW1wbCA9IGdsb2JhbFZhbHVlLl9zY2hlZE1vY2s7XG4gIHJlcXVlc3RIb3N0Q2FsbGJhY2sgPSBnbG9iYWxJbXBsWzBdO1xuICBjYW5jZWxIb3N0Q2FsbGJhY2sgPSBnbG9iYWxJbXBsWzFdO1xuICBzaG91bGRZaWVsZFRvSG9zdCA9IGdsb2JhbEltcGxbMl07XG4gIGV4cG9ydHMudW5zdGFibGVfbm93ID0gZ2xvYmFsSW1wbFszXTtcbn0gZWxzZSBpZiAoXG4vLyBJZiBTY2hlZHVsZXIgcnVucyBpbiBhIG5vbi1ET00gZW52aXJvbm1lbnQsIGl0IGZhbGxzIGJhY2sgdG8gYSBuYWl2ZVxuLy8gaW1wbGVtZW50YXRpb24gdXNpbmcgc2V0VGltZW91dC5cbnR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4vLyBDaGVjayBpZiBNZXNzYWdlQ2hhbm5lbCBpcyBzdXBwb3J0ZWQsIHRvby5cbnR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAvLyBJZiB0aGlzIGFjY2lkZW50YWxseSBnZXRzIGltcG9ydGVkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnQsIGUuZy4gSmF2YVNjcmlwdENvcmUsXG4gIC8vIGZhbGxiYWNrIHRvIGEgbmFpdmUgaW1wbGVtZW50YXRpb24uXG4gIHZhciBfY2FsbGJhY2sgPSBudWxsO1xuICB2YXIgX2ZsdXNoQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZGlkVGltZW91dCkge1xuICAgIGlmIChfY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIF9jYWxsYmFjayhkaWRUaW1lb3V0KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9jYWxsYmFjayA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICByZXF1ZXN0SG9zdENhbGxiYWNrID0gZnVuY3Rpb24gKGNiLCBtcykge1xuICAgIGlmIChfY2FsbGJhY2sgIT09IG51bGwpIHtcbiAgICAgIC8vIFByb3RlY3QgYWdhaW5zdCByZS1lbnRyYW5jeS5cbiAgICAgIHNldFRpbWVvdXQocmVxdWVzdEhvc3RDYWxsYmFjaywgMCwgY2IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBfY2FsbGJhY2sgPSBjYjtcbiAgICAgIHNldFRpbWVvdXQoX2ZsdXNoQ2FsbGJhY2ssIDAsIGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNhbmNlbEhvc3RDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBfY2FsbGJhY2sgPSBudWxsO1xuICB9O1xuICBzaG91bGRZaWVsZFRvSG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59IGVsc2Uge1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gVE9ETzogUmVtb3ZlIGZiLm1lIGxpbmtcbiAgICBpZiAodHlwZW9mIGxvY2FsUmVxdWVzdEFuaW1hdGlvbkZyYW1lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUuIFwiICsgJ01ha2Ugc3VyZSB0aGF0IHlvdSBsb2FkIGEgJyArICdwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHMnKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsb2NhbENhbmNlbEFuaW1hdGlvbkZyYW1lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBjYW5jZWxBbmltYXRpb25GcmFtZS4gXCIgKyAnTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSAnICsgJ3BvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxscycpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBudWxsO1xuICB2YXIgaXNNZXNzYWdlRXZlbnRTY2hlZHVsZWQgPSBmYWxzZTtcbiAgdmFyIHRpbWVvdXRUaW1lID0gLTE7XG5cbiAgdmFyIGlzQW5pbWF0aW9uRnJhbWVTY2hlZHVsZWQgPSBmYWxzZTtcblxuICB2YXIgaXNGbHVzaGluZ0hvc3RDYWxsYmFjayA9IGZhbHNlO1xuXG4gIHZhciBmcmFtZURlYWRsaW5lID0gMDtcbiAgLy8gV2Ugc3RhcnQgb3V0IGFzc3VtaW5nIHRoYXQgd2UgcnVuIGF0IDMwZnBzIGJ1dCB0aGVuIHRoZSBoZXVyaXN0aWMgdHJhY2tpbmdcbiAgLy8gd2lsbCBhZGp1c3QgdGhpcyB2YWx1ZSB0byBhIGZhc3RlciBmcHMgaWYgd2UgZ2V0IG1vcmUgZnJlcXVlbnQgYW5pbWF0aW9uXG4gIC8vIGZyYW1lcy5cbiAgdmFyIHByZXZpb3VzRnJhbWVUaW1lID0gMzM7XG4gIHZhciBhY3RpdmVGcmFtZVRpbWUgPSAzMztcblxuICBzaG91bGRZaWVsZFRvSG9zdCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnJhbWVEZWFkbGluZSA8PSBleHBvcnRzLnVuc3RhYmxlX25vdygpO1xuICB9O1xuXG4gIC8vIFdlIHVzZSB0aGUgcG9zdE1lc3NhZ2UgdHJpY2sgdG8gZGVmZXIgaWRsZSB3b3JrIHVudGlsIGFmdGVyIHRoZSByZXBhaW50LlxuICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICB2YXIgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaXNNZXNzYWdlRXZlbnRTY2hlZHVsZWQgPSBmYWxzZTtcblxuICAgIHZhciBwcmV2U2NoZWR1bGVkQ2FsbGJhY2sgPSBzY2hlZHVsZWRIb3N0Q2FsbGJhY2s7XG4gICAgdmFyIHByZXZUaW1lb3V0VGltZSA9IHRpbWVvdXRUaW1lO1xuICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IG51bGw7XG4gICAgdGltZW91dFRpbWUgPSAtMTtcblxuICAgIHZhciBjdXJyZW50VGltZSA9IGV4cG9ydHMudW5zdGFibGVfbm93KCk7XG5cbiAgICB2YXIgZGlkVGltZW91dCA9IGZhbHNlO1xuICAgIGlmIChmcmFtZURlYWRsaW5lIC0gY3VycmVudFRpbWUgPD0gMCkge1xuICAgICAgLy8gVGhlcmUncyBubyB0aW1lIGxlZnQgaW4gdGhpcyBpZGxlIHBlcmlvZC4gQ2hlY2sgaWYgdGhlIGNhbGxiYWNrIGhhc1xuICAgICAgLy8gYSB0aW1lb3V0IGFuZCB3aGV0aGVyIGl0J3MgYmVlbiBleGNlZWRlZC5cbiAgICAgIGlmIChwcmV2VGltZW91dFRpbWUgIT09IC0xICYmIHByZXZUaW1lb3V0VGltZSA8PSBjdXJyZW50VGltZSkge1xuICAgICAgICAvLyBFeGNlZWRlZCB0aGUgdGltZW91dC4gSW52b2tlIHRoZSBjYWxsYmFjayBldmVuIHRob3VnaCB0aGVyZSdzIG5vXG4gICAgICAgIC8vIHRpbWUgbGVmdC5cbiAgICAgICAgZGlkVGltZW91dCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBObyB0aW1lb3V0LlxuICAgICAgICBpZiAoIWlzQW5pbWF0aW9uRnJhbWVTY2hlZHVsZWQpIHtcbiAgICAgICAgICAvLyBTY2hlZHVsZSBhbm90aGVyIGFuaW1hdGlvbiBjYWxsYmFjayBzbyB3ZSByZXRyeSBsYXRlci5cbiAgICAgICAgICBpc0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVXaXRoVGltZW91dChhbmltYXRpb25UaWNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeGl0IHdpdGhvdXQgaW52b2tpbmcgdGhlIGNhbGxiYWNrLlxuICAgICAgICBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBwcmV2U2NoZWR1bGVkQ2FsbGJhY2s7XG4gICAgICAgIHRpbWVvdXRUaW1lID0gcHJldlRpbWVvdXRUaW1lO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByZXZTY2hlZHVsZWRDYWxsYmFjayAhPT0gbnVsbCkge1xuICAgICAgaXNGbHVzaGluZ0hvc3RDYWxsYmFjayA9IHRydWU7XG4gICAgICB0cnkge1xuICAgICAgICBwcmV2U2NoZWR1bGVkQ2FsbGJhY2soZGlkVGltZW91dCk7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpc0ZsdXNoaW5nSG9zdENhbGxiYWNrID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHZhciBhbmltYXRpb25UaWNrID0gZnVuY3Rpb24gKHJhZlRpbWUpIHtcbiAgICBpZiAoc2NoZWR1bGVkSG9zdENhbGxiYWNrICE9PSBudWxsKSB7XG4gICAgICAvLyBFYWdlcmx5IHNjaGVkdWxlIHRoZSBuZXh0IGFuaW1hdGlvbiBjYWxsYmFjayBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICAgICAgLy8gZnJhbWUuIElmIHRoZSBzY2hlZHVsZXIgcXVldWUgaXMgbm90IGVtcHR5IGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lLCBpdFxuICAgICAgLy8gd2lsbCBjb250aW51ZSBmbHVzaGluZyBpbnNpZGUgdGhhdCBjYWxsYmFjay4gSWYgdGhlIHF1ZXVlICppcyogZW1wdHksXG4gICAgICAvLyB0aGVuIGl0IHdpbGwgZXhpdCBpbW1lZGlhdGVseS4gUG9zdGluZyB0aGUgY2FsbGJhY2sgYXQgdGhlIHN0YXJ0IG9mIHRoZVxuICAgICAgLy8gZnJhbWUgZW5zdXJlcyBpdCdzIGZpcmVkIHdpdGhpbiB0aGUgZWFybGllc3QgcG9zc2libGUgZnJhbWUuIElmIHdlXG4gICAgICAvLyB3YWl0ZWQgdW50aWwgdGhlIGVuZCBvZiB0aGUgZnJhbWUgdG8gcG9zdCB0aGUgY2FsbGJhY2ssIHdlIHJpc2sgdGhlXG4gICAgICAvLyBicm93c2VyIHNraXBwaW5nIGEgZnJhbWUgYW5kIG5vdCBmaXJpbmcgdGhlIGNhbGxiYWNrIHVudGlsIHRoZSBmcmFtZVxuICAgICAgLy8gYWZ0ZXIgdGhhdC5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZVdpdGhUaW1lb3V0KGFuaW1hdGlvblRpY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBObyBwZW5kaW5nIHdvcmsuIEV4aXQuXG4gICAgICBpc0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRGcmFtZVRpbWUgPSByYWZUaW1lIC0gZnJhbWVEZWFkbGluZSArIGFjdGl2ZUZyYW1lVGltZTtcbiAgICBpZiAobmV4dEZyYW1lVGltZSA8IGFjdGl2ZUZyYW1lVGltZSAmJiBwcmV2aW91c0ZyYW1lVGltZSA8IGFjdGl2ZUZyYW1lVGltZSkge1xuICAgICAgaWYgKG5leHRGcmFtZVRpbWUgPCA4KSB7XG4gICAgICAgIC8vIERlZmVuc2l2ZSBjb2RpbmcuIFdlIGRvbid0IHN1cHBvcnQgaGlnaGVyIGZyYW1lIHJhdGVzIHRoYW4gMTIwaHouXG4gICAgICAgIC8vIElmIHRoZSBjYWxjdWxhdGVkIGZyYW1lIHRpbWUgZ2V0cyBsb3dlciB0aGFuIDgsIGl0IGlzIHByb2JhYmx5IGEgYnVnLlxuICAgICAgICBuZXh0RnJhbWVUaW1lID0gODtcbiAgICAgIH1cbiAgICAgIC8vIElmIG9uZSBmcmFtZSBnb2VzIGxvbmcsIHRoZW4gdGhlIG5leHQgb25lIGNhbiBiZSBzaG9ydCB0byBjYXRjaCB1cC5cbiAgICAgIC8vIElmIHR3byBmcmFtZXMgYXJlIHNob3J0IGluIGEgcm93LCB0aGVuIHRoYXQncyBhbiBpbmRpY2F0aW9uIHRoYXQgd2VcbiAgICAgIC8vIGFjdHVhbGx5IGhhdmUgYSBoaWdoZXIgZnJhbWUgcmF0ZSB0aGFuIHdoYXQgd2UncmUgY3VycmVudGx5IG9wdGltaXppbmcuXG4gICAgICAvLyBXZSBhZGp1c3Qgb3VyIGhldXJpc3RpYyBkeW5hbWljYWxseSBhY2NvcmRpbmdseS4gRm9yIGV4YW1wbGUsIGlmIHdlJ3JlXG4gICAgICAvLyBydW5uaW5nIG9uIDEyMGh6IGRpc3BsYXkgb3IgOTBoeiBWUiBkaXNwbGF5LlxuICAgICAgLy8gVGFrZSB0aGUgbWF4IG9mIHRoZSB0d28gaW4gY2FzZSBvbmUgb2YgdGhlbSB3YXMgYW4gYW5vbWFseSBkdWUgdG9cbiAgICAgIC8vIG1pc3NlZCBmcmFtZSBkZWFkbGluZXMuXG4gICAgICBhY3RpdmVGcmFtZVRpbWUgPSBuZXh0RnJhbWVUaW1lIDwgcHJldmlvdXNGcmFtZVRpbWUgPyBwcmV2aW91c0ZyYW1lVGltZSA6IG5leHRGcmFtZVRpbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZpb3VzRnJhbWVUaW1lID0gbmV4dEZyYW1lVGltZTtcbiAgICB9XG4gICAgZnJhbWVEZWFkbGluZSA9IHJhZlRpbWUgKyBhY3RpdmVGcmFtZVRpbWU7XG4gICAgaWYgKCFpc01lc3NhZ2VFdmVudFNjaGVkdWxlZCkge1xuICAgICAgaXNNZXNzYWdlRXZlbnRTY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgcG9ydC5wb3N0TWVzc2FnZSh1bmRlZmluZWQpO1xuICAgIH1cbiAgfTtcblxuICByZXF1ZXN0SG9zdENhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrLCBhYnNvbHV0ZVRpbWVvdXQpIHtcbiAgICBzY2hlZHVsZWRIb3N0Q2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aW1lb3V0VGltZSA9IGFic29sdXRlVGltZW91dDtcbiAgICBpZiAoaXNGbHVzaGluZ0hvc3RDYWxsYmFjayB8fCBhYnNvbHV0ZVRpbWVvdXQgPCAwKSB7XG4gICAgICAvLyBEb24ndCB3YWl0IGZvciB0aGUgbmV4dCBmcmFtZS4gQ29udGludWUgd29ya2luZyBBU0FQLCBpbiBhIG5ldyBldmVudC5cbiAgICAgIHBvcnQucG9zdE1lc3NhZ2UodW5kZWZpbmVkKTtcbiAgICB9IGVsc2UgaWYgKCFpc0FuaW1hdGlvbkZyYW1lU2NoZWR1bGVkKSB7XG4gICAgICAvLyBJZiByQUYgZGlkbid0IGFscmVhZHkgc2NoZWR1bGUgb25lLCB3ZSBuZWVkIHRvIHNjaGVkdWxlIGEgZnJhbWUuXG4gICAgICAvLyBUT0RPOiBJZiB0aGlzIHJBRiBkb2Vzbid0IG1hdGVyaWFsaXplIGJlY2F1c2UgdGhlIGJyb3dzZXIgdGhyb3R0bGVzLCB3ZVxuICAgICAgLy8gbWlnaHQgd2FudCB0byBzdGlsbCBoYXZlIHNldFRpbWVvdXQgdHJpZ2dlciBySUMgYXMgYSBiYWNrdXAgdG8gZW5zdXJlXG4gICAgICAvLyB0aGF0IHdlIGtlZXAgcGVyZm9ybWluZyB3b3JrLlxuICAgICAgaXNBbmltYXRpb25GcmFtZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVXaXRoVGltZW91dChhbmltYXRpb25UaWNrKTtcbiAgICB9XG4gIH07XG5cbiAgY2FuY2VsSG9zdENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHNjaGVkdWxlZEhvc3RDYWxsYmFjayA9IG51bGw7XG4gICAgaXNNZXNzYWdlRXZlbnRTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICB0aW1lb3V0VGltZSA9IC0xO1xuICB9O1xufVxuXG5leHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5ID0gSW1tZWRpYXRlUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5ID0gVXNlckJsb2NraW5nUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX05vcm1hbFByaW9yaXR5ID0gTm9ybWFsUHJpb3JpdHk7XG5leHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eSA9IElkbGVQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHkgPSBMb3dQcmlvcml0eTtcbmV4cG9ydHMudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5ID0gdW5zdGFibGVfcnVuV2l0aFByaW9yaXR5O1xuZXhwb3J0cy51bnN0YWJsZV9uZXh0ID0gdW5zdGFibGVfbmV4dDtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjayA9IHVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2s7XG5leHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrID0gdW5zdGFibGVfY2FuY2VsQ2FsbGJhY2s7XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjayA9IHVuc3RhYmxlX3dyYXBDYWxsYmFjaztcbmV4cG9ydHMudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwgPSB1bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbDtcbmV4cG9ydHMudW5zdGFibGVfc2hvdWxkWWllbGQgPSB1bnN0YWJsZV9zaG91bGRZaWVsZDtcbmV4cG9ydHMudW5zdGFibGVfY29udGludWVFeGVjdXRpb24gPSB1bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb24gPSB1bnN0YWJsZV9wYXVzZUV4ZWN1dGlvbjtcbmV4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGUgPSB1bnN0YWJsZV9nZXRGaXJzdENhbGxiYWNrTm9kZTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9zY2hlZHVsZXIucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLXRyYWNpbmcucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLXRyYWNpbmcuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=