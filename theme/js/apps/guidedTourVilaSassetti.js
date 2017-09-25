
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _ccapndave$elm_update_extra$Update_Extra$identity = function (model) {
	return A2(
		_elm_lang$core$Platform_Cmd_ops['!'],
		model,
		{ctor: '[]'});
};
var _ccapndave$elm_update_extra$Update_Extra$mapCmd = F2(
	function (tagger, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: A2(_elm_lang$core$Platform_Cmd$map, tagger, _p1._1)
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$addCmd = F2(
	function (cmd_, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: _p3._0,
			_1: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: _p3._1,
					_1: {
						ctor: '::',
						_0: cmd_,
						_1: {ctor: '[]'}
					}
				})
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$updateModel = F2(
	function (f, _p4) {
		var _p5 = _p4;
		return {
			ctor: '_Tuple2',
			_0: f(_p5._0),
			_1: _p5._1
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$filter = F2(
	function (pred, f) {
		return pred ? f : _elm_lang$core$Basics$identity;
	});
var _ccapndave$elm_update_extra$Update_Extra$andThen = F3(
	function (update, msg, _p6) {
		var _p7 = _p6;
		var _p8 = A2(update, msg, _p7._0);
		var model_ = _p8._0;
		var cmd_ = _p8._1;
		return {
			ctor: '_Tuple2',
			_0: model_,
			_1: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: _p7._1,
					_1: {
						ctor: '::',
						_0: cmd_,
						_1: {ctor: '[]'}
					}
				})
		};
	});
var _ccapndave$elm_update_extra$Update_Extra$sequence = F3(
	function (update, msgs, init) {
		var foldUpdate = _ccapndave$elm_update_extra$Update_Extra$andThen(update);
		return A3(_elm_lang$core$List$foldl, foldUpdate, init, msgs);
	});

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

//import Maybe, Native.Scheduler //

var _elm_lang$geolocation$Native_Geolocation = function() {


// LOCATIONS

function toLocation(rawPosition)
{
	var coords = rawPosition.coords;

	var rawAltitude = coords.altitude;
	var rawAccuracy = coords.altitudeAccuracy;
	var altitude =
		(rawAltitude === null || rawAccuracy === null)
			? _elm_lang$core$Maybe$Nothing
			: _elm_lang$core$Maybe$Just({ value: rawAltitude, accuracy: rawAccuracy });

	var heading = coords.heading;
	var speed = coords.speed;
	var movement =
		(heading === null || speed === null)
			? _elm_lang$core$Maybe$Nothing
			: _elm_lang$core$Maybe$Just(
				speed === 0
					? { ctor: 'Static' }
					: { ctor: 'Moving', _0: { speed: speed, degreesFromNorth: heading } }
			);

	return {
		latitude: coords.latitude,
		longitude: coords.longitude,
		accuracy: coords.accuracy,
		altitude: altitude,
		movement: movement,
		timestamp: rawPosition.timestamp
	};
}


// ERRORS

var errorTypes = ['PermissionDenied', 'PositionUnavailable', 'Timeout'];

function toError(rawError)
{
	return {
		ctor: errorTypes[rawError.code - 1],
		_0: rawError.message
	};
}


// OPTIONS

function fromOptions(options)
{
	return {
		enableHighAccuracy: options.enableHighAccuracy,
		timeout: options.timeout._0 || Infinity,
		maximumAge: options.maximumAge._0 || 0
	};
}


// GET LOCATION

function now(options)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		function onSuccess(rawPosition)
		{
			callback(_elm_lang$core$Native_Scheduler.succeed(toLocation(rawPosition)));
		}

		function onError(rawError)
		{
			callback(_elm_lang$core$Native_Scheduler.fail(toError(rawError)));
		}

		navigator.geolocation.getCurrentPosition(onSuccess, onError, fromOptions(options));
	});
}

function watch(options, toSuccessTask, toErrorTask)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		function onSuccess(rawPosition)
		{
			var location = toLocation(rawPosition);
			var task = toSuccessTask(location);
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}

		function onError(rawError)
		{
			var error = toError(rawError);
			var task = toErrorTask(error);
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}

		var id = navigator.geolocation.watchPosition(onSuccess, onError, fromOptions(options));

		return function() {
			navigator.geolocation.clearWatch(id);
		};
	});
}

return {
	now: now,
	watch: F3(watch)
};

}();

var _elm_lang$geolocation$Geolocation$onSelfMsg = F3(
	function (router, location, state) {
		var _p0 = state;
		if (_p0.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
		} else {
			var send = function (_p1) {
				var _p2 = _p1;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p2._0(location));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p3) {
					return _elm_lang$core$Task$succeed(state);
				},
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p0._0.subs)));
		}
	});
var _elm_lang$geolocation$Geolocation$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$geolocation$Geolocation$defaultOptions = {enableHighAccuracy: false, timeout: _elm_lang$core$Maybe$Nothing, maximumAge: _elm_lang$core$Maybe$Nothing};
var _elm_lang$geolocation$Geolocation$watchWith = _elm_lang$geolocation$Native_Geolocation.watch;
var _elm_lang$geolocation$Geolocation$watch = _elm_lang$geolocation$Geolocation$watchWith(_elm_lang$geolocation$Geolocation$defaultOptions);
var _elm_lang$geolocation$Geolocation$onEffects = F3(
	function (router, subs, state) {
		var _p4 = state;
		if (_p4.ctor === 'Nothing') {
			var _p5 = subs;
			if (_p5.ctor === '[]') {
				return _elm_lang$core$Task$succeed(state);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (watcher) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: subs, watcher: watcher}));
					},
					_elm_lang$core$Process$spawn(
						A2(
							_elm_lang$geolocation$Geolocation$watch,
							_elm_lang$core$Platform$sendToSelf(router),
							function (_p6) {
								return _elm_lang$core$Task$succeed(
									{ctor: '_Tuple0'});
							})));
			}
		} else {
			var _p9 = _p4._0.watcher;
			var _p7 = subs;
			if (_p7.ctor === '[]') {
				return A2(
					_elm_lang$core$Task$andThen,
					function (_p8) {
						return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
					},
					_elm_lang$core$Process$kill(_p9));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: subs, watcher: _p9}));
			}
		}
	});
var _elm_lang$geolocation$Geolocation$nowWith = _elm_lang$geolocation$Native_Geolocation.now;
var _elm_lang$geolocation$Geolocation$now = _elm_lang$geolocation$Geolocation$nowWith(_elm_lang$geolocation$Geolocation$defaultOptions);
var _elm_lang$geolocation$Geolocation$subscription = _elm_lang$core$Native_Platform.leaf('Geolocation');
var _elm_lang$geolocation$Geolocation$Location = F6(
	function (a, b, c, d, e, f) {
		return {latitude: a, longitude: b, accuracy: c, altitude: d, movement: e, timestamp: f};
	});
var _elm_lang$geolocation$Geolocation$Altitude = F2(
	function (a, b) {
		return {value: a, accuracy: b};
	});
var _elm_lang$geolocation$Geolocation$Options = F3(
	function (a, b, c) {
		return {enableHighAccuracy: a, timeout: b, maximumAge: c};
	});
var _elm_lang$geolocation$Geolocation$Moving = function (a) {
	return {ctor: 'Moving', _0: a};
};
var _elm_lang$geolocation$Geolocation$Static = {ctor: 'Static'};
var _elm_lang$geolocation$Geolocation$Timeout = function (a) {
	return {ctor: 'Timeout', _0: a};
};
var _elm_lang$geolocation$Geolocation$LocationUnavailable = function (a) {
	return {ctor: 'LocationUnavailable', _0: a};
};
var _elm_lang$geolocation$Geolocation$PermissionDenied = function (a) {
	return {ctor: 'PermissionDenied', _0: a};
};
var _elm_lang$geolocation$Geolocation$Tagger = function (a) {
	return {ctor: 'Tagger', _0: a};
};
var _elm_lang$geolocation$Geolocation$subMap = F2(
	function (func, _p10) {
		var _p11 = _p10;
		return _elm_lang$geolocation$Geolocation$Tagger(
			function (_p12) {
				return func(
					_p11._0(_p12));
			});
	});
var _elm_lang$geolocation$Geolocation$changes = function (tagger) {
	return _elm_lang$geolocation$Geolocation$subscription(
		_elm_lang$geolocation$Geolocation$Tagger(tagger));
};
_elm_lang$core$Native_Platform.effectManagers['Geolocation'] = {pkg: 'elm-lang/geolocation', init: _elm_lang$geolocation$Geolocation$init, onEffects: _elm_lang$geolocation$Geolocation$onEffects, onSelfMsg: _elm_lang$geolocation$Geolocation$onSelfMsg, tag: 'sub', subMap: _elm_lang$geolocation$Geolocation$subMap};

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Keyed$node = _elm_lang$virtual_dom$VirtualDom$keyedNode;
var _elm_lang$html$Html_Keyed$ol = _elm_lang$html$Html_Keyed$node('ol');
var _elm_lang$html$Html_Keyed$ul = _elm_lang$html$Html_Keyed$node('ul');

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _evancz$elm_markdown$Native_Markdown = function() {


// VIRTUAL-DOM WIDGETS

function toHtml(options, factList, rawMarkdown)
{
	var model = {
		options: options,
		markdown: rawMarkdown
	};
	return _elm_lang$virtual_dom$Native_VirtualDom.custom(factList, model, implementation);
}


// WIDGET IMPLEMENTATION

var implementation = {
	render: render,
	diff: diff
};

function render(model)
{
	var html = marked(model.markdown, formatOptions(model.options));
	var div = document.createElement('div');
	div.innerHTML = html;
	return div;
}

function diff(a, b)
{
	
	if (a.model.markdown === b.model.markdown && a.model.options === b.model.options)
	{
		return null;
	}

	return {
		applyPatch: applyPatch,
		data: marked(b.model.markdown, formatOptions(b.model.options))
	};
}

function applyPatch(domNode, data)
{
	domNode.innerHTML = data;
	return domNode;
}


// ACTUAL MARKDOWN PARSER

var marked = function() {
	// catch the `marked` object regardless of the outer environment.
	// (ex. a CommonJS module compatible environment.)
	// note that this depends on marked's implementation of environment detection.
	var module = {};
	var exports = module.exports = {};

	/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 * commit cd2f6f5b7091154c5526e79b5f3bfb4d15995a51
	 */
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

	return module.exports;
}();


// FORMAT OPTIONS FOR MARKED IMPLEMENTATION

function formatOptions(options)
{
	function toHighlight(code, lang)
	{
		if (!lang && options.defaultHighlighting.ctor === 'Just')
		{
			lang = options.defaultHighlighting._0;
		}

		if (typeof hljs !== 'undefined' && lang && hljs.listLanguages().indexOf(lang) >= 0)
		{
			return hljs.highlight(lang, code, true).value;
		}

		return code;
	}

	var gfm = options.githubFlavored;
	if (gfm.ctor === 'Just')
	{
		return {
			highlight: toHighlight,
			gfm: true,
			tables: gfm._0.tables,
			breaks: gfm._0.breaks,
			sanitize: options.sanitize,
			smartypants: options.smartypants
		};
	}

	return {
		highlight: toHighlight,
		gfm: false,
		tables: false,
		breaks: false,
		sanitize: options.sanitize,
		smartypants: options.smartypants
	};
}


// EXPORTS

return {
	toHtml: F3(toHtml)
};

}();

var _evancz$elm_markdown$Markdown$toHtmlWith = _evancz$elm_markdown$Native_Markdown.toHtml;
var _evancz$elm_markdown$Markdown$defaultOptions = {
	githubFlavored: _elm_lang$core$Maybe$Just(
		{tables: false, breaks: false}),
	defaultHighlighting: _elm_lang$core$Maybe$Nothing,
	sanitize: false,
	smartypants: false
};
var _evancz$elm_markdown$Markdown$toHtml = F2(
	function (attrs, string) {
		return A3(_evancz$elm_markdown$Native_Markdown.toHtml, _evancz$elm_markdown$Markdown$defaultOptions, attrs, string);
	});
var _evancz$elm_markdown$Markdown$Options = F4(
	function (a, b, c, d) {
		return {githubFlavored: a, defaultHighlighting: b, sanitize: c, smartypants: d};
	});

var _user$project$Types$Story = F7(
	function (a, b, c, d, e, f, g) {
		return {currentLocation: a, currentScene: b, history: c, manifest: d, rules: e, choiceLanguages: f, theEnd: g};
	});
var _user$project$Types$ItemData = F8(
	function (a, b, c, d, e, f, g, h) {
		return {interactableId: a, fixed: b, itemPlacement: c, isWritable: d, writtenContent: e, attributes: f, interactionErrors: g, interactionWarnings: h};
	});
var _user$project$Types$CharacterData = F5(
	function (a, b, c, d, e) {
		return {interactableId: a, characterPlacement: b, attributes: c, interactionErrors: d, interactionWarnings: e};
	});
var _user$project$Types$LocationData = F5(
	function (a, b, c, d, e) {
		return {interactableId: a, shown: b, attributes: c, interactionErrors: d, interactionWarnings: e};
	});
var _user$project$Types$AnswerInfo = F8(
	function (a, b, c, d, e, f, g, h) {
		return {maxTriesReached: a, interactableId: b, questionBody: c, playerAnswer: d, answered: e, correctAnswer: f, incorrectAnswer: g, additionalText: h};
	});
var _user$project$Types$InteractionExtraInfo = F4(
	function (a, b, c, d) {
		return {mbInputText: a, geolocationInfoText: b, bkAnsStatus: c, mbMatchedRuleId: d};
	});
var _user$project$Types$Rule_ = F3(
	function (a, b, c) {
		return {interaction: a, conditions: b, changes: c};
	});
var _user$project$Types$Rule = F4(
	function (a, b, c, d) {
		return {interaction: a, conditions: b, changes: c, quasiChanges: d};
	});
var _user$project$Types$CheckOptionData = F4(
	function (a, b, c, d) {
		return {valueToMatch: a, successTextDict: b, lnewAttrs: c, lotherInterAttrs: d};
	});
var _user$project$Types$CheckAnswerData = F8(
	function (a, b, c, d, e, f, g, h) {
		return {mbMaxNrTries: a, answerCase: b, answerSpaces: c, correctIncorrectFeedback: d, correctAnsTextDict: e, incorrectAnsTextDict: f, lnewAttrs: g, lotherInterAttrs: h};
	});
var _user$project$Types$TheEnd = F2(
	function (a, b) {
		return {ctor: 'TheEnd', _0: a, _1: b};
	});
var _user$project$Types$NotFreezingEnd = {ctor: 'NotFreezingEnd'};
var _user$project$Types$FreezingEnd = {ctor: 'FreezingEnd'};
var _user$project$Types$CharacterOffScreen = {ctor: 'CharacterOffScreen'};
var _user$project$Types$CharacterInLocation = function (a) {
	return {ctor: 'CharacterInLocation', _0: a};
};
var _user$project$Types$ItemOffScreen = {ctor: 'ItemOffScreen'};
var _user$project$Types$ItemInInventory = {ctor: 'ItemInInventory'};
var _user$project$Types$ItemInLocation = function (a) {
	return {ctor: 'ItemInLocation', _0: a};
};
var _user$project$Types$IncorrectlyAnswered = {ctor: 'IncorrectlyAnswered'};
var _user$project$Types$CorrectlyAnswered = {ctor: 'CorrectlyAnswered'};
var _user$project$Types$NotAnswered = {ctor: 'NotAnswered'};
var _user$project$Types$NotAnswerable = {ctor: 'NotAnswerable'};
var _user$project$Types$Abool = function (a) {
	return {ctor: 'Abool', _0: a};
};
var _user$project$Types$AnInt = function (a) {
	return {ctor: 'AnInt', _0: a};
};
var _user$project$Types$ADictStringLSS = function (a) {
	return {ctor: 'ADictStringLSS', _0: a};
};
var _user$project$Types$ADictStringString = function (a) {
	return {ctor: 'ADictStringString', _0: a};
};
var _user$project$Types$AListStringString = function (a) {
	return {ctor: 'AListStringString', _0: a};
};
var _user$project$Types$AListString = function (a) {
	return {ctor: 'AListString', _0: a};
};
var _user$project$Types$Astring = function (a) {
	return {ctor: 'Astring', _0: a};
};
var _user$project$Types$Character = function (a) {
	return {ctor: 'Character', _0: a};
};
var _user$project$Types$Location = function (a) {
	return {ctor: 'Location', _0: a};
};
var _user$project$Types$Item = function (a) {
	return {ctor: 'Item', _0: a};
};
var _user$project$Types$CommunicationFailure = {ctor: 'CommunicationFailure'};
var _user$project$Types$Ans = function (a) {
	return {ctor: 'Ans', _0: a};
};
var _user$project$Types$WaitingForInfoRequested = {ctor: 'WaitingForInfoRequested'};
var _user$project$Types$NoInfoYet = {ctor: 'NoInfoYet'};
var _user$project$Types$With = function (a) {
	return {ctor: 'With', _0: a};
};
var _user$project$Types$WithAnythingHighPriority = {ctor: 'WithAnythingHighPriority'};
var _user$project$Types$WithAnythingAfterGameEnded = {ctor: 'WithAnythingAfterGameEnded'};
var _user$project$Types$WithAnyLocationAnyCharacterAfterGameEnded = {ctor: 'WithAnyLocationAnyCharacterAfterGameEnded'};
var _user$project$Types$WithAnyCharacter = {ctor: 'WithAnyCharacter'};
var _user$project$Types$WithAnyLocation = {ctor: 'WithAnyLocation'};
var _user$project$Types$WithAnyItem = {ctor: 'WithAnyItem'};
var _user$project$Types$WithAnything = {ctor: 'WithAnything'};
var _user$project$Types$ChoiceHasAlreadyBeenMade = function (a) {
	return {ctor: 'ChoiceHasAlreadyBeenMade', _0: a};
};
var _user$project$Types$NoChosenOptionYet = function (a) {
	return {ctor: 'NoChosenOptionYet', _0: a};
};
var _user$project$Types$ChosenOptionIsEqualTo = F2(
	function (a, b) {
		return {ctor: 'ChosenOptionIsEqualTo', _0: a, _1: b};
	});
var _user$project$Types$AttrValueIsEqualTo = F3(
	function (a, b, c) {
		return {ctor: 'AttrValueIsEqualTo', _0: a, _1: b, _2: c};
	});
var _user$project$Types$CounterGreaterThenOrEqualTo = F3(
	function (a, b, c) {
		return {ctor: 'CounterGreaterThenOrEqualTo', _0: a, _1: b, _2: c};
	});
var _user$project$Types$CounterLessThen = F3(
	function (a, b, c) {
		return {ctor: 'CounterLessThen', _0: a, _1: b, _2: c};
	});
var _user$project$Types$CounterExists = F2(
	function (a, b) {
		return {ctor: 'CounterExists', _0: a, _1: b};
	});
var _user$project$Types$CurrentSceneIs = function (a) {
	return {ctor: 'CurrentSceneIs', _0: a};
};
var _user$project$Types$HasNotPreviouslyInteractedWith = function (a) {
	return {ctor: 'HasNotPreviouslyInteractedWith', _0: a};
};
var _user$project$Types$HasPreviouslyInteractedWith = function (a) {
	return {ctor: 'HasPreviouslyInteractedWith', _0: a};
};
var _user$project$Types$ItemIsNotCorrectlyAnswered = function (a) {
	return {ctor: 'ItemIsNotCorrectlyAnswered', _0: a};
};
var _user$project$Types$ItemIsCorrectlyAnswered = function (a) {
	return {ctor: 'ItemIsCorrectlyAnswered', _0: a};
};
var _user$project$Types$ItemIsInAnyLocationOrInventory = function (a) {
	return {ctor: 'ItemIsInAnyLocationOrInventory', _0: a};
};
var _user$project$Types$ItemIsOffScreen = function (a) {
	return {ctor: 'ItemIsOffScreen', _0: a};
};
var _user$project$Types$ItemIsNotInLocation = F2(
	function (a, b) {
		return {ctor: 'ItemIsNotInLocation', _0: a, _1: b};
	});
var _user$project$Types$ItemIsNotInInventory = function (a) {
	return {ctor: 'ItemIsNotInInventory', _0: a};
};
var _user$project$Types$ItemIsInLocation = F2(
	function (a, b) {
		return {ctor: 'ItemIsInLocation', _0: a, _1: b};
	});
var _user$project$Types$CurrentLocationIsNot = function (a) {
	return {ctor: 'CurrentLocationIsNot', _0: a};
};
var _user$project$Types$CurrentLocationIs = function (a) {
	return {ctor: 'CurrentLocationIs', _0: a};
};
var _user$project$Types$CharacterIsNotInLocation = F2(
	function (a, b) {
		return {ctor: 'CharacterIsNotInLocation', _0: a, _1: b};
	});
var _user$project$Types$CharacterIsInLocation = F2(
	function (a, b) {
		return {ctor: 'CharacterIsInLocation', _0: a, _1: b};
	});
var _user$project$Types$ItemIsInInventory = function (a) {
	return {ctor: 'ItemIsInInventory', _0: a};
};
var _user$project$Types$ProcessChosenOptionEqualTo = F2(
	function (a, b) {
		return {ctor: 'ProcessChosenOptionEqualTo', _0: a, _1: b};
	});
var _user$project$Types$CheckAndActIfChosenOptionIs = F3(
	function (a, b, c) {
		return {ctor: 'CheckAndActIfChosenOptionIs', _0: a, _1: b, _2: c};
	});
var _user$project$Types$EndStory = F2(
	function (a, b) {
		return {ctor: 'EndStory', _0: a, _1: b};
	});
var _user$project$Types$AddChoiceLanguage = F2(
	function (a, b) {
		return {ctor: 'AddChoiceLanguage', _0: a, _1: b};
	});
var _user$project$Types$SetChoiceLanguages = function (a) {
	return {ctor: 'SetChoiceLanguages', _0: a};
};
var _user$project$Types$LoadScene = function (a) {
	return {ctor: 'LoadScene', _0: a};
};
var _user$project$Types$MoveCharacterOffScreen = function (a) {
	return {ctor: 'MoveCharacterOffScreen', _0: a};
};
var _user$project$Types$MoveCharacterToLocation = F2(
	function (a, b) {
		return {ctor: 'MoveCharacterToLocation', _0: a, _1: b};
	});
var _user$project$Types$MoveItemOffScreen = function (a) {
	return {ctor: 'MoveItemOffScreen', _0: a};
};
var _user$project$Types$IncreaseCounter = F2(
	function (a, b) {
		return {ctor: 'IncreaseCounter', _0: a, _1: b};
	});
var _user$project$Types$RemoveMultiChoiceOptions = function (a) {
	return {ctor: 'RemoveMultiChoiceOptions', _0: a};
};
var _user$project$Types$CreateAMultiChoice = F2(
	function (a, b) {
		return {ctor: 'CreateAMultiChoice', _0: a, _1: b};
	});
var _user$project$Types$CreateOrSetAttributeValueFromOtherInterAttr = F4(
	function (a, b, c, d) {
		return {ctor: 'CreateOrSetAttributeValueFromOtherInterAttr', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Types$CreateAttributeIfNotExistsAndOrSetValue = F3(
	function (a, b, c) {
		return {ctor: 'CreateAttributeIfNotExistsAndOrSetValue', _0: a, _1: b, _2: c};
	});
var _user$project$Types$SetAttributeValue = F3(
	function (a, b, c) {
		return {ctor: 'SetAttributeValue', _0: a, _1: b, _2: c};
	});
var _user$project$Types$CreateAttributeIfNotExists = F3(
	function (a, b, c) {
		return {ctor: 'CreateAttributeIfNotExists', _0: a, _1: b, _2: c};
	});
var _user$project$Types$CreateCounterIfNotExists = F2(
	function (a, b) {
		return {ctor: 'CreateCounterIfNotExists', _0: a, _1: b};
	});
var _user$project$Types$CheckIfAnswerCorrect = F4(
	function (a, b, c, d) {
		return {ctor: 'CheckIfAnswerCorrect', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Types$ClearWrittenText = function (a) {
	return {ctor: 'ClearWrittenText', _0: a};
};
var _user$project$Types$WriteGpsLocInfoToItem = F2(
	function (a, b) {
		return {ctor: 'WriteGpsLocInfoToItem', _0: a, _1: b};
	});
var _user$project$Types$WriteForceTextToItemFromGivenItemAttr = F3(
	function (a, b, c) {
		return {ctor: 'WriteForceTextToItemFromGivenItemAttr', _0: a, _1: b, _2: c};
	});
var _user$project$Types$WriteTextToItem = F2(
	function (a, b) {
		return {ctor: 'WriteTextToItem', _0: a, _1: b};
	});
var _user$project$Types$MakeItUnanswerable = function (a) {
	return {ctor: 'MakeItUnanswerable', _0: a};
};
var _user$project$Types$MakeItemUnwritable = function (a) {
	return {ctor: 'MakeItemUnwritable', _0: a};
};
var _user$project$Types$MakeItemWritable = function (a) {
	return {ctor: 'MakeItemWritable', _0: a};
};
var _user$project$Types$MoveItemToInventory = function (a) {
	return {ctor: 'MoveItemToInventory', _0: a};
};
var _user$project$Types$MoveItemToLocation = F2(
	function (a, b) {
		return {ctor: 'MoveItemToLocation', _0: a, _1: b};
	});
var _user$project$Types$MoveItemToLocationFixed = F2(
	function (a, b) {
		return {ctor: 'MoveItemToLocationFixed', _0: a, _1: b};
	});
var _user$project$Types$RemoveChooseOptions = function (a) {
	return {ctor: 'RemoveChooseOptions', _0: a};
};
var _user$project$Types$RemoveLocation = function (a) {
	return {ctor: 'RemoveLocation', _0: a};
};
var _user$project$Types$AddLocation = function (a) {
	return {ctor: 'AddLocation', _0: a};
};
var _user$project$Types$MoveTo = function (a) {
	return {ctor: 'MoveTo', _0: a};
};
var _user$project$Types$NoChange = {ctor: 'NoChange'};
var _user$project$Types$Write_InputTextToItem = function (a) {
	return {ctor: 'Write_InputTextToItem', _0: a};
};
var _user$project$Types$Write_GpsInfoToItem = function (a) {
	return {ctor: 'Write_GpsInfoToItem', _0: a};
};
var _user$project$Types$CheckAndAct_IfChosenOptionIs = F2(
	function (a, b) {
		return {ctor: 'CheckAndAct_IfChosenOptionIs', _0: a, _1: b};
	});
var _user$project$Types$Check_IfAnswerCorrect = F3(
	function (a, b, c) {
		return {ctor: 'Check_IfAnswerCorrect', _0: a, _1: b, _2: c};
	});
var _user$project$Types$Check_IfAnswerCorrectUsingBackend = F3(
	function (a, b, c) {
		return {ctor: 'Check_IfAnswerCorrectUsingBackend', _0: a, _1: b, _2: c};
	});
var _user$project$Types$CaseInsensitiveAnswer = {ctor: 'CaseInsensitiveAnswer'};
var _user$project$Types$CaseSensitiveAnswer = {ctor: 'CaseSensitiveAnswer'};
var _user$project$Types$AnswerSpacesDontMatter = {ctor: 'AnswerSpacesDontMatter'};
var _user$project$Types$AnswerSpacesMatter = {ctor: 'AnswerSpacesMatter'};

var _user$project$ClientTypes$SaveHistoryRecord = F4(
	function (a, b, c, d) {
		return {interactableId: a, inputText: b, geolocationInfoText: c, mbMatchedRuleId: d};
	});
var _user$project$ClientTypes$SettingsModel = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {availableLanguages: a, displayLanguage: b, gpsOptionsEnabled: c, dontNeedToBeInZone: d, audioOptionsEnabled: e, audioAutoplay: f, layoutWithSidebar: g, showAnswerBoxInSideBar: h, showExpandedSettings: i, saveLoadEnabled: j, showSaveLoad: k, showExitToFinalScreenButton: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$ClientTypes$AudioFileInfo = F3(
	function (a, b, c) {
		return {displayName: a, fileName: b, mbAbsoluteUrl: c};
	});
var _user$project$ClientTypes$StorySnippet = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {interactableName: a, interactableId: b, isWritable: c, interactableCssSelector: d, narrative: e, mbAudio: f, mbSuggestedInteractionId: g, mbSuggestedInteractionName: h, isLastInZipper: i};
	});
var _user$project$ClientTypes$LanguageStorySnippets = F3(
	function (a, b, c) {
		return {interactableName: a, interactableCssSelector: b, narrativesDict: c};
	});
var _user$project$ClientTypes$GpsZone = F4(
	function (a, b, c, d) {
		return {needsToBeIn: a, lat: b, lon: c, mbRadius: d};
	});
var _user$project$ClientTypes$Loaded = {ctor: 'Loaded'};
var _user$project$ClientTypes$ExitToFinalScreen = {ctor: 'ExitToFinalScreen'};
var _user$project$ClientTypes$ProcessLoadHistory = F2(
	function (a, b) {
		return {ctor: 'ProcessLoadHistory', _0: a, _1: b};
	});
var _user$project$ClientTypes$LoadHistory = function (a) {
	return {ctor: 'LoadHistory', _0: a};
};
var _user$project$ClientTypes$RequestForStoredHistory = {ctor: 'RequestForStoredHistory'};
var _user$project$ClientTypes$SaveHistory = {ctor: 'SaveHistory'};
var _user$project$ClientTypes$ToggleShowHideSaveLoadBtns = {ctor: 'ToggleShowHideSaveLoadBtns'};
var _user$project$ClientTypes$LayoutWithSideBar = function (a) {
	return {ctor: 'LayoutWithSideBar', _0: a};
};
var _user$project$ClientTypes$ChangeOptionAudioAutoplay = function (a) {
	return {ctor: 'ChangeOptionAudioAutoplay', _0: a};
};
var _user$project$ClientTypes$ToggleShowExpandedSettings = {ctor: 'ToggleShowExpandedSettings'};
var _user$project$ClientTypes$CloseAlert = {ctor: 'CloseAlert'};
var _user$project$ClientTypes$NotInTheZone = F4(
	function (a, b, c, d) {
		return {ctor: 'NotInTheZone', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$ClientTypes$NewCoordsForInterId = F5(
	function (a, b, c, d, e) {
		return {ctor: 'NewCoordsForInterId', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _user$project$ClientTypes$ChangeOptionDontCheckGps = function (a) {
	return {ctor: 'ChangeOptionDontCheckGps', _0: a};
};
var _user$project$ClientTypes$ChangeOptionDisplayLanguage = function (a) {
	return {ctor: 'ChangeOptionDisplayLanguage', _0: a};
};
var _user$project$ClientTypes$NewUserSubmitedText = function (a) {
	return {ctor: 'NewUserSubmitedText', _0: a};
};
var _user$project$ClientTypes$AnswerChecked = F3(
	function (a, b, c) {
		return {ctor: 'AnswerChecked', _0: a, _1: b, _2: c};
	});
var _user$project$ClientTypes$InteractStepThree = F2(
	function (a, b) {
		return {ctor: 'InteractStepThree', _0: a, _1: b};
	});
var _user$project$ClientTypes$InteractStepTwo = F2(
	function (a, b) {
		return {ctor: 'InteractStepTwo', _0: a, _1: b};
	});
var _user$project$ClientTypes$Interact = function (a) {
	return {ctor: 'Interact', _0: a};
};
var _user$project$ClientTypes$InteractSendingText = F2(
	function (a, b) {
		return {ctor: 'InteractSendingText', _0: a, _1: b};
	});
var _user$project$ClientTypes$StartMainGameNewPlayerName = function (a) {
	return {ctor: 'StartMainGameNewPlayerName', _0: a};
};
var _user$project$ClientTypes$StartMainGame = {ctor: 'StartMainGame'};
var _user$project$ClientTypes$SettingsShowExitToFinalScreenButton = {ctor: 'SettingsShowExitToFinalScreenButton'};
var _user$project$ClientTypes$SettingsLayoutWithSidebar = function (a) {
	return {ctor: 'SettingsLayoutWithSidebar', _0: a};
};
var _user$project$ClientTypes$SettingsToggleShowHideSaveLoadBtns = {ctor: 'SettingsToggleShowHideSaveLoadBtns'};
var _user$project$ClientTypes$SettingsChangeOptionAutoplay = function (a) {
	return {ctor: 'SettingsChangeOptionAutoplay', _0: a};
};
var _user$project$ClientTypes$SettingsToggleShowExpanded = {ctor: 'SettingsToggleShowExpanded'};
var _user$project$ClientTypes$SetAvailableLanguages = function (a) {
	return {ctor: 'SetAvailableLanguages', _0: a};
};
var _user$project$ClientTypes$SetDisplayLanguage = function (a) {
	return {ctor: 'SetDisplayLanguage', _0: a};
};
var _user$project$ClientTypes$SetDontNeedToBeInZone = function (a) {
	return {ctor: 'SetDontNeedToBeInZone', _0: a};
};

var _user$project$Engine_Manifest$eliminateAllWhiteSpaces = function (theStr) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex(' '),
		function (_p0) {
			return '';
		},
		theStr);
};
var _user$project$Engine_Manifest$comparesEqual = F4(
	function (str1, str2, ansCase, ansSpaces) {
		var _p1 = _elm_lang$core$Native_Utils.eq(ansCase, _user$project$Types$CaseInsensitiveAnswer) ? {
			ctor: '_Tuple2',
			_0: _elm_lang$core$String$toLower(str1),
			_1: _elm_lang$core$String$toLower(str2)
		} : {ctor: '_Tuple2', _0: str1, _1: str2};
		var str1_ = _p1._0;
		var str2_ = _p1._1;
		var _p2 = _elm_lang$core$Native_Utils.eq(ansSpaces, _user$project$Types$AnswerSpacesDontMatter) ? {
			ctor: '_Tuple2',
			_0: _user$project$Engine_Manifest$eliminateAllWhiteSpaces(str1_),
			_1: _user$project$Engine_Manifest$eliminateAllWhiteSpaces(str2_)
		} : {ctor: '_Tuple2', _0: str1_, _1: str2_};
		var str1Alt = _p2._0;
		var str2Alt = _p2._1;
		return _elm_lang$core$Native_Utils.eq(str1Alt, str2Alt) ? true : false;
	});
var _user$project$Engine_Manifest$comparesEqualToAtLeastOne = F4(
	function (str1, lstrs, ansCase, ansSpaces) {
		return !_elm_lang$core$List$isEmpty(
			A2(
				_elm_lang$core$List$filter,
				function (x) {
					return _elm_lang$core$Native_Utils.eq(x, true);
				},
				A2(
					_elm_lang$core$List$map,
					function (x) {
						return A4(_user$project$Engine_Manifest$comparesEqual, str1, x, ansCase, ansSpaces);
					},
					lstrs)));
	});
var _user$project$Engine_Manifest$getReservedAttrIds = {
	ctor: '::',
	_0: 'playerAnswer',
	_1: {
		ctor: '::',
		_0: 'isCorrectlyAnswered',
		_1: {
			ctor: '::',
			_0: 'isIncorrectlyAnswered',
			_1: {
				ctor: '::',
				_0: 'narrativeHeader',
				_1: {
					ctor: '::',
					_0: 'additionalTextDict',
					_1: {
						ctor: '::',
						_0: 'chosenOption',
						_1: {
							ctor: '::',
							_0: 'answerOptionsList',
							_1: {ctor: '[]'}
						}
					}
				}
			}
		}
	}
};
var _user$project$Engine_Manifest$getInteractableAttribute = F2(
	function (attrId, mbinteractable) {
		var _p3 = mbinteractable;
		if (_p3.ctor === 'Just') {
			switch (_p3._0.ctor) {
				case 'Item':
					return A2(_elm_lang$core$Dict$get, attrId, _p3._0._0.attributes);
				case 'Character':
					return A2(_elm_lang$core$Dict$get, attrId, _p3._0._0.attributes);
				default:
					return A2(_elm_lang$core$Dict$get, attrId, _p3._0._0.attributes);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$removeAttributeIfExists = F2(
	function (attrId, mbinteractable) {
		var _p4 = mbinteractable;
		if (_p4.ctor === 'Just') {
			switch (_p4._0.ctor) {
				case 'Item':
					var _p5 = _p4._0._0;
					var newAttributes = A2(_elm_lang$core$Dict$remove, attrId, _p5.attributes);
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Item(
							_elm_lang$core$Native_Utils.update(
								_p5,
								{attributes: newAttributes})));
				case 'Character':
					var _p6 = _p4._0._0;
					var newAttributes = A2(_elm_lang$core$Dict$remove, attrId, _p6.attributes);
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Character(
							_elm_lang$core$Native_Utils.update(
								_p6,
								{attributes: newAttributes})));
				default:
					var _p7 = _p4._0._0;
					var newAttributes = A2(_elm_lang$core$Dict$remove, attrId, _p7.attributes);
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Location(
							_elm_lang$core$Native_Utils.update(
								_p7,
								{attributes: newAttributes})));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$setAttributeValue = F3(
	function (attrValue, attrId, mbinteractable) {
		var getNewDataRecord = F3(
			function (theattrValue, theattrId, dataRecord) {
				var newAttributes = function () {
					var _p8 = A2(_elm_lang$core$Dict$get, theattrId, dataRecord.attributes);
					if (_p8.ctor === 'Nothing') {
						return dataRecord.attributes;
					} else {
						return A3(
							_elm_lang$core$Dict$update,
							theattrId,
							function (_p9) {
								return _elm_lang$core$Maybe$Just(theattrValue);
							},
							dataRecord.attributes);
					}
				}();
				var newDataRecord = _elm_lang$core$Native_Utils.update(
					dataRecord,
					{attributes: newAttributes});
				return newDataRecord;
			});
		var _p10 = mbinteractable;
		if (_p10.ctor === 'Just') {
			switch (_p10._0.ctor) {
				case 'Item':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Item(
							A3(getNewDataRecord, attrValue, attrId, _p10._0._0)));
				case 'Character':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Character(
							A3(getNewDataRecord, attrValue, attrId, _p10._0._0)));
				default:
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Location(
							A3(getNewDataRecord, attrValue, attrId, _p10._0._0)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$attrValueIsEqualTo = F4(
	function (attrValue, attrId, interactableId, manifest) {
		var _p11 = A2(_elm_lang$core$Dict$get, interactableId, manifest);
		if (_p11.ctor === 'Nothing') {
			return false;
		} else {
			var _p12 = _p11._0;
			switch (_p12.ctor) {
				case 'Item':
					return _elm_lang$core$Native_Utils.eq(
						A2(_elm_lang$core$Dict$get, attrId, _p12._0.attributes),
						_elm_lang$core$Maybe$Just(attrValue)) ? true : false;
				case 'Character':
					return _elm_lang$core$Native_Utils.eq(
						A2(_elm_lang$core$Dict$get, attrId, _p12._0.attributes),
						_elm_lang$core$Maybe$Just(attrValue)) ? true : false;
				default:
					return _elm_lang$core$Native_Utils.eq(
						A2(_elm_lang$core$Dict$get, attrId, _p12._0.attributes),
						_elm_lang$core$Maybe$Just(attrValue)) ? true : false;
			}
		}
	});
var _user$project$Engine_Manifest$convertMbAttrTypeToMbInt = function (mbanint) {
	var _p13 = mbanint;
	if (_p13.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var _p14 = _p13._0;
		if (_p14.ctor === 'AnInt') {
			return _elm_lang$core$Maybe$Just(_p14._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}
};
var _user$project$Engine_Manifest$getICounterValue = F2(
	function (counterId, mbInteractable) {
		var _p15 = mbInteractable;
		if (_p15.ctor === 'Just') {
			switch (_p15._0.ctor) {
				case 'Item':
					return _user$project$Engine_Manifest$convertMbAttrTypeToMbInt(
						A2(
							_elm_lang$core$Dict$get,
							A2(_elm_lang$core$Basics_ops['++'], 'counter_', counterId),
							_p15._0._0.attributes));
				case 'Character':
					return _user$project$Engine_Manifest$convertMbAttrTypeToMbInt(
						A2(
							_elm_lang$core$Dict$get,
							A2(_elm_lang$core$Basics_ops['++'], 'counter_', counterId),
							_p15._0._0.attributes));
				default:
					return _user$project$Engine_Manifest$convertMbAttrTypeToMbInt(
						A2(
							_elm_lang$core$Dict$get,
							A2(_elm_lang$core$Basics_ops['++'], 'counter_', counterId),
							_p15._0._0.attributes));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$getCounterValue = F3(
	function (counterId, interId, manifest) {
		return A2(
			_user$project$Engine_Manifest$getICounterValue,
			counterId,
			A2(_elm_lang$core$Dict$get, interId, manifest));
	});
var _user$project$Engine_Manifest$counterLessThen = F4(
	function (val, counterId, interId, manifest) {
		var helperFunc = F2(
			function (theCounterId, dataRecord) {
				var _p16 = A2(
					_elm_lang$core$Dict$get,
					A2(_elm_lang$core$Basics_ops['++'], 'counter_', theCounterId),
					dataRecord.attributes);
				if (_p16.ctor === 'Nothing') {
					return false;
				} else {
					var _p17 = _p16._0;
					if (_p17.ctor === 'AnInt') {
						return (_elm_lang$core$Native_Utils.cmp(_p17._0, val) < 0) ? true : false;
					} else {
						return false;
					}
				}
			});
		var _p18 = A2(_elm_lang$core$Dict$get, interId, manifest);
		if (_p18.ctor === 'Just') {
			switch (_p18._0.ctor) {
				case 'Item':
					return A2(helperFunc, counterId, _p18._0._0);
				case 'Character':
					return A2(helperFunc, counterId, _p18._0._0);
				default:
					return A2(helperFunc, counterId, _p18._0._0);
			}
		} else {
			return false;
		}
	});
var _user$project$Engine_Manifest$counterExists = F3(
	function (counterId, interId, manifest) {
		var helperFunc = F2(
			function (theCounterId, dataRecord) {
				var _p19 = A2(
					_elm_lang$core$Dict$get,
					A2(_elm_lang$core$Basics_ops['++'], 'counter_', theCounterId),
					dataRecord.attributes);
				if (_p19.ctor === 'Nothing') {
					return false;
				} else {
					return true;
				}
			});
		var _p20 = A2(_elm_lang$core$Dict$get, interId, manifest);
		if (_p20.ctor === 'Just') {
			switch (_p20._0.ctor) {
				case 'Item':
					return A2(helperFunc, counterId, _p20._0._0);
				case 'Character':
					return A2(helperFunc, counterId, _p20._0._0);
				default:
					return A2(helperFunc, counterId, _p20._0._0);
			}
		} else {
			return false;
		}
	});
var _user$project$Engine_Manifest$counterGreaterThenOrEqualTo = F4(
	function (val, counterId, interId, manifest) {
		return A3(_user$project$Engine_Manifest$counterExists, counterId, interId, manifest) && (!A4(_user$project$Engine_Manifest$counterLessThen, val, counterId, interId, manifest));
	});
var _user$project$Engine_Manifest$itemIsInAnyLocationOrInventory = F2(
	function (id, manifest) {
		var _p21 = A2(_elm_lang$core$Dict$get, id, manifest);
		if (_p21.ctor === 'Just') {
			var _p22 = _p21._0;
			if (_p22.ctor === 'Item') {
				var _p23 = _p22._0.itemPlacement;
				switch (_p23.ctor) {
					case 'ItemInInventory':
						return true;
					case 'ItemInLocation':
						return true;
					default:
						return false;
				}
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var _user$project$Engine_Manifest$itemIsOffScreen = F2(
	function (id, manifest) {
		var _p24 = A2(_elm_lang$core$Dict$get, id, manifest);
		if (_p24.ctor === 'Just') {
			var _p25 = _p24._0;
			if (_p25.ctor === 'Item') {
				return _elm_lang$core$Native_Utils.eq(_p25._0.itemPlacement, _user$project$Types$ItemOffScreen) ? true : false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var _user$project$Engine_Manifest$itemIsIncorrectlyAnswered = F2(
	function (id, manifest) {
		return A4(
			_user$project$Engine_Manifest$attrValueIsEqualTo,
			_user$project$Types$Abool(true),
			'isIncorrectlyAnswered',
			id,
			manifest);
	});
var _user$project$Engine_Manifest$itemIsCorrectlyAnswered = F2(
	function (id, manifest) {
		return A4(
			_user$project$Engine_Manifest$attrValueIsEqualTo,
			_user$project$Types$Abool(true),
			'isCorrectlyAnswered',
			id,
			manifest);
	});
var _user$project$Engine_Manifest$itemIsNotCorrectlyAnswered = F2(
	function (id, manifest) {
		return !A2(_user$project$Engine_Manifest$itemIsCorrectlyAnswered, id, manifest);
	});
var _user$project$Engine_Manifest$itemIsNotAnswered = F2(
	function (id, manifest) {
		return (!A2(_user$project$Engine_Manifest$itemIsCorrectlyAnswered, id, manifest)) && (!A2(_user$project$Engine_Manifest$itemIsIncorrectlyAnswered, id, manifest));
	});
var _user$project$Engine_Manifest$getItemWrittenContent = function (mbInteractable) {
	var _p26 = mbInteractable;
	if ((_p26.ctor === 'Just') && (_p26._0.ctor === 'Item')) {
		return _p26._0._0.writtenContent;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$removeChooseOptions = function (mbinteractable) {
	return A2(_user$project$Engine_Manifest$removeAttributeIfExists, 'answerOptionsList', mbinteractable);
};
var _user$project$Engine_Manifest$clearInteractionIncidents = F2(
	function (incidentType, mbInteractable) {
		var clearHelper = F2(
			function (theIncidentType, dataRecord) {
				return _elm_lang$core$Native_Utils.eq(theIncidentType, 'warning') ? _elm_lang$core$Native_Utils.update(
					dataRecord,
					{
						interactionWarnings: {ctor: '[]'}
					}) : _elm_lang$core$Native_Utils.update(
					dataRecord,
					{
						interactionErrors: {ctor: '[]'}
					});
			});
		var _p27 = mbInteractable;
		if (_p27.ctor === 'Just') {
			switch (_p27._0.ctor) {
				case 'Item':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Item(
							A2(clearHelper, incidentType, _p27._0._0)));
				case 'Character':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Character(
							A2(clearHelper, incidentType, _p27._0._0)));
				default:
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Location(
							A2(clearHelper, incidentType, _p27._0._0)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$writeInteractionIncident = F3(
	function (incidentType, incidentStr, mbInteractable) {
		var writeHelper = F3(
			function (theIncidentType, theIncidentStr, dataRecord) {
				var descriptionStr = A2(
					_elm_lang$core$Basics_ops['++'],
					theIncidentStr,
					A2(_elm_lang$core$Basics_ops['++'], 'InteractableId : ', dataRecord.interactableId));
				return _elm_lang$core$Native_Utils.eq(theIncidentType, 'warning') ? _elm_lang$core$Native_Utils.update(
					dataRecord,
					{
						interactionWarnings: {ctor: '::', _0: descriptionStr, _1: dataRecord.interactionWarnings}
					}) : _elm_lang$core$Native_Utils.update(
					dataRecord,
					{
						interactionErrors: {ctor: '::', _0: descriptionStr, _1: dataRecord.interactionErrors}
					});
			});
		var _p28 = mbInteractable;
		if (_p28.ctor === 'Just') {
			switch (_p28._0.ctor) {
				case 'Item':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Item(
							A3(writeHelper, incidentType, incidentStr, _p28._0._0)));
				case 'Character':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Character(
							A3(writeHelper, incidentType, incidentStr, _p28._0._0)));
				default:
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Location(
							A3(writeHelper, incidentType, incidentStr, _p28._0._0)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$addLocation = function (mbInteractable) {
	var _p29 = mbInteractable;
	if (_p29.ctor === 'Just') {
		if (_p29._0.ctor === 'Location') {
			var newldata = _elm_lang$core$Native_Utils.update(
				_p29._0._0,
				{shown: true});
			return _elm_lang$core$Maybe$Just(
				_user$project$Types$Location(newldata));
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use addLocation function with an interactable that is not a Location ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$removeLocation = function (mbInteractable) {
	var _p30 = mbInteractable;
	if (_p30.ctor === 'Just') {
		if (_p30._0.ctor === 'Location') {
			var newldata = _elm_lang$core$Native_Utils.update(
				_p30._0._0,
				{shown: false});
			return _elm_lang$core$Maybe$Just(
				_user$project$Types$Location(newldata));
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use removeLocation function with an interactable that is not a Location ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$moveItemToInventory = function (mbInteractable) {
	var _p31 = mbInteractable;
	if (_p31.ctor === 'Just') {
		if (_p31._0.ctor === 'Item') {
			var _p32 = _p31._0._0;
			return (!_p32.fixed) ? _elm_lang$core$Maybe$Just(
				_user$project$Types$Item(
					_elm_lang$core$Native_Utils.update(
						_p32,
						{itemPlacement: _user$project$Types$ItemInInventory}))) : A3(_user$project$Engine_Manifest$writeInteractionIncident, 'warning', 'Trying to use moveItemToInventory function with an interactable that is an Item fixed to a Location . Can\'t be moved ! ', mbInteractable);
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemToInventory function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$moveItemOffScreen = function (mbInteractable) {
	var _p33 = mbInteractable;
	if (_p33.ctor === 'Just') {
		if (_p33._0.ctor === 'Item') {
			return _elm_lang$core$Maybe$Just(
				_user$project$Types$Item(
					_elm_lang$core$Native_Utils.update(
						_p33._0._0,
						{fixed: false, itemPlacement: _user$project$Types$ItemOffScreen})));
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemOffScreen function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$moveItemToLocationFixed = F2(
	function (locationId, mbInteractable) {
		var _p34 = mbInteractable;
		if (_p34.ctor === 'Just') {
			if (_p34._0.ctor === 'Item') {
				return _elm_lang$core$Maybe$Just(
					_user$project$Types$Item(
						_elm_lang$core$Native_Utils.update(
							_p34._0._0,
							{
								fixed: true,
								itemPlacement: _user$project$Types$ItemInLocation(locationId)
							})));
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemToLocationFixed function with an interactable that is not an Item ! ', mbInteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$moveItemToLocation = F2(
	function (locationId, mbInteractable) {
		var _p35 = mbInteractable;
		if (_p35.ctor === 'Just') {
			if (_p35._0.ctor === 'Item') {
				return _elm_lang$core$Maybe$Just(
					_user$project$Types$Item(
						_elm_lang$core$Native_Utils.update(
							_p35._0._0,
							{
								fixed: false,
								itemPlacement: _user$project$Types$ItemInLocation(locationId)
							})));
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemToLocation function with an interactable that is not an Item ! ', mbInteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$makeItemWritable = function (mbInteractable) {
	var _p36 = mbInteractable;
	if (_p36.ctor === 'Just') {
		if (_p36._0.ctor === 'Item') {
			return _elm_lang$core$Maybe$Just(
				_user$project$Types$Item(
					_elm_lang$core$Native_Utils.update(
						_p36._0._0,
						{isWritable: true})));
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use makeItemWritable function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$makeItemUnwritable = function (mbInteractable) {
	var _p37 = mbInteractable;
	if (_p37.ctor === 'Just') {
		if (_p37._0.ctor === 'Item') {
			return _elm_lang$core$Maybe$Just(
				_user$project$Types$Item(
					_elm_lang$core$Native_Utils.update(
						_p37._0._0,
						{isWritable: false})));
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use makeItemUnwritable function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$makeItUnanswerable = function (mbinteractable) {
	return _user$project$Engine_Manifest$removeChooseOptions(
		_user$project$Engine_Manifest$makeItemUnwritable(mbinteractable));
};
var _user$project$Engine_Manifest$writeTextToItem = F2(
	function (theText, mbinteractable) {
		var _p38 = mbinteractable;
		if (_p38.ctor === 'Just') {
			if (_p38._0.ctor === 'Item') {
				var _p39 = _p38._0._0;
				return _p39.isWritable ? _elm_lang$core$Maybe$Just(
					_user$project$Types$Item(
						_elm_lang$core$Native_Utils.update(
							_p39,
							{
								writtenContent: _elm_lang$core$Maybe$Just(theText)
							}))) : A3(_user$project$Engine_Manifest$writeInteractionIncident, 'warning', 'Trying to use writeTextToItem function with an interactable that is a notWritable Item ! ', mbinteractable);
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use writeTextToItem function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$writeForceTextToItemFromOtherInteractableAttrib = F4(
	function (attrid, intcId, manifest, mbinteractable) {
		var _p40 = mbinteractable;
		if (_p40.ctor === 'Just') {
			if (_p40._0.ctor === 'Item') {
				var theAttrVal = A2(
					_user$project$Engine_Manifest$getInteractableAttribute,
					attrid,
					A2(_elm_lang$core$Dict$get, intcId, manifest));
				var theText = function () {
					var _p41 = theAttrVal;
					_v32_3:
					do {
						if (_p41.ctor === 'Just') {
							switch (_p41._0.ctor) {
								case 'Abool':
									return _elm_lang$core$Basics$toString(_p41._0._0);
								case 'Astring':
									return _p41._0._0;
								case 'AnInt':
									return _elm_lang$core$Basics$toString(_p41._0._0);
								default:
									break _v32_3;
							}
						} else {
							break _v32_3;
						}
					} while(false);
					return '';
				}();
				return _elm_lang$core$Maybe$Just(
					_user$project$Types$Item(
						_elm_lang$core$Native_Utils.update(
							_p40._0._0,
							{
								writtenContent: _elm_lang$core$Maybe$Just(theText)
							})));
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use writeForceTextToItemFromOtherInteractableAttrib function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$writeGpsLocInfoToItem = F2(
	function (infoText, mbInteractable) {
		var _p42 = mbInteractable;
		if (_p42.ctor === 'Just') {
			if (_p42._0.ctor === 'Item') {
				return _elm_lang$core$Maybe$Just(
					_user$project$Types$Item(
						_elm_lang$core$Native_Utils.update(
							_p42._0._0,
							{
								writtenContent: _elm_lang$core$Maybe$Just(infoText)
							})));
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use writeGpsLocInfoToItem function with an interactable that is not an Item ! ', mbInteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$clearWrittenText = function (mbInteractable) {
	var _p43 = mbInteractable;
	if (_p43.ctor === 'Just') {
		if (_p43._0.ctor === 'Item') {
			return _elm_lang$core$Maybe$Just(
				_user$project$Types$Item(
					_elm_lang$core$Native_Utils.update(
						_p43._0._0,
						{writtenContent: _elm_lang$core$Maybe$Nothing})));
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use clearWrittenText function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$moveCharacterToLocation = F2(
	function (locationId, mbInteractable) {
		var _p44 = mbInteractable;
		if (_p44.ctor === 'Just') {
			if (_p44._0.ctor === 'Character') {
				return _elm_lang$core$Maybe$Just(
					_user$project$Types$Character(
						_elm_lang$core$Native_Utils.update(
							_p44._0._0,
							{
								characterPlacement: _user$project$Types$CharacterInLocation(locationId)
							})));
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use moveCharacterToLocation function with an interactable that is not a Character ! ', mbInteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$moveCharacterOffScreen = function (mbInteractable) {
	var _p45 = mbInteractable;
	if (_p45.ctor === 'Just') {
		if (_p45._0.ctor === 'Character') {
			return _elm_lang$core$Maybe$Just(
				_user$project$Types$Character(
					_elm_lang$core$Native_Utils.update(
						_p45._0._0,
						{characterPlacement: _user$project$Types$CharacterOffScreen})));
		} else {
			return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use moveCharacterOffScreen function with an interactable that is not a Character ! ', mbInteractable);
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Engine_Manifest$createAttributeIfNotExists = F3(
	function (initialVal, attrId, mbinteractable) {
		var getNewDataRecord = F3(
			function (theInitialVal, theAttrId, dataRecord) {
				var newAttributes = function () {
					var _p46 = A2(_elm_lang$core$Dict$get, theAttrId, dataRecord.attributes);
					if (_p46.ctor === 'Nothing') {
						return A3(_elm_lang$core$Dict$insert, theAttrId, theInitialVal, dataRecord.attributes);
					} else {
						return dataRecord.attributes;
					}
				}();
				var newDataRecord = _elm_lang$core$Native_Utils.update(
					dataRecord,
					{attributes: newAttributes});
				return newDataRecord;
			});
		var _p47 = mbinteractable;
		if (_p47.ctor === 'Just') {
			switch (_p47._0.ctor) {
				case 'Item':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Item(
							A3(getNewDataRecord, initialVal, attrId, _p47._0._0)));
				case 'Character':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Character(
							A3(getNewDataRecord, initialVal, attrId, _p47._0._0)));
				default:
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Location(
							A3(getNewDataRecord, initialVal, attrId, _p47._0._0)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue = F3(
	function (theVal, attrId, mbinteractable) {
		return A3(
			_user$project$Engine_Manifest$setAttributeValue,
			theVal,
			attrId,
			A3(_user$project$Engine_Manifest$createAttributeIfNotExists, theVal, attrId, mbinteractable));
	});
var _user$project$Engine_Manifest$createAttributesIfNotExistsAndOrSetValue = F2(
	function (ltupattrs, mbinteractable) {
		createAttributesIfNotExistsAndOrSetValue:
		while (true) {
			var _p48 = ltupattrs;
			if (_p48.ctor === '[]') {
				return mbinteractable;
			} else {
				var _p49 = _p48._0;
				var _v40 = _p48._1,
					_v41 = A3(
					_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
					_elm_lang$core$Tuple$second(_p49),
					_elm_lang$core$Tuple$first(_p49),
					mbinteractable);
				ltupattrs = _v40;
				mbinteractable = _v41;
				continue createAttributesIfNotExistsAndOrSetValue;
			}
		}
	});
var _user$project$Engine_Manifest$checkAndActIfChosenOptionIs = F3(
	function (playerChoice, cOptionData, mbinteractable) {
		var _p50 = mbinteractable;
		if (_p50.ctor === 'Just') {
			if (_p50._0.ctor === 'Item') {
				var _p51 = _p50._0._0;
				var choiceStr = A2(
					_elm_lang$core$Basics_ops['++'],
					'  \n ___YOUR_CHOICE___',
					A2(_elm_lang$core$Basics_ops['++'], ' ', playerChoice));
				var theMbInteractable = (_elm_lang$core$Native_Utils.eq(playerChoice, '') || (!_elm_lang$core$Native_Utils.eq(
					A2(_elm_lang$core$Dict$get, 'chosenOption', _p51.attributes),
					_elm_lang$core$Maybe$Nothing))) ? mbinteractable : (_elm_lang$core$Native_Utils.eq(playerChoice, cOptionData.valueToMatch) ? A2(
					_user$project$Engine_Manifest$removeAttributeIfExists,
					'answerOptionsList',
					A2(
						_user$project$Engine_Manifest$createAttributesIfNotExistsAndOrSetValue,
						cOptionData.lnewAttrs,
						A3(
							_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
							_user$project$Types$ADictStringString(cOptionData.successTextDict),
							'additionalTextDict',
							A3(
								_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
								_user$project$Types$Astring(playerChoice),
								'chosenOption',
								_elm_lang$core$Maybe$Just(
									_user$project$Types$Item(
										_elm_lang$core$Native_Utils.update(
											_p51,
											{
												writtenContent: _elm_lang$core$Maybe$Just(choiceStr)
											}))))))) : mbinteractable);
				return theMbInteractable;
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use checkIfAnswerCorrect function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$processChosenOptionEqualTo = F2(
	function (cOptionData, mbinteractable) {
		return A3(_user$project$Engine_Manifest$checkAndActIfChosenOptionIs, cOptionData.valueToMatch, cOptionData, mbinteractable);
	});
var _user$project$Engine_Manifest$createOrSetAttributeValueFromOtherInterAttr = F5(
	function (attrId, otherInterAtrrId, otherInterId, manifest, mbinteractable) {
		var mbAttrVal = A2(
			_user$project$Engine_Manifest$getInteractableAttribute,
			otherInterAtrrId,
			A2(_elm_lang$core$Dict$get, otherInterId, manifest));
		var _p52 = mbAttrVal;
		if (_p52.ctor === 'Just') {
			return A3(_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue, _p52._0, attrId, mbinteractable);
		} else {
			return A3(
				_user$project$Engine_Manifest$writeInteractionIncident,
				'warning',
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Trying to use createOrSetAttributeValueFromOtherInterAttr function but attribute in other interactable doesnt exist ( or other interactable doesnt exist ) ! attributeId : ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						attrId,
						A2(_elm_lang$core$Basics_ops['++'], ' , otherInteractableId : ', otherInterId))),
				mbinteractable);
		}
	});
var _user$project$Engine_Manifest$increaseCounter = F2(
	function (counterId, mbinteractable) {
		var getNewDataRecord = F2(
			function (thecounterId, dataRecord) {
				var counterStrID = A2(_elm_lang$core$Basics_ops['++'], 'counter_', thecounterId);
				var newAttributes = function () {
					var _p53 = A2(_elm_lang$core$Dict$get, counterStrID, dataRecord.attributes);
					if (_p53.ctor === 'Nothing') {
						return dataRecord.attributes;
					} else {
						var _p54 = _p53._0;
						if (_p54.ctor === 'AnInt') {
							return A3(
								_elm_lang$core$Dict$update,
								counterStrID,
								function (_p55) {
									return _elm_lang$core$Maybe$Just(
										_user$project$Types$AnInt(_p54._0 + 1));
								},
								dataRecord.attributes);
						} else {
							return dataRecord.attributes;
						}
					}
				}();
				var newDataRecord = _elm_lang$core$Native_Utils.update(
					dataRecord,
					{attributes: newAttributes});
				return newDataRecord;
			});
		var _p56 = mbinteractable;
		if (_p56.ctor === 'Just') {
			switch (_p56._0.ctor) {
				case 'Item':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Item(
							A2(getNewDataRecord, counterId, _p56._0._0)));
				case 'Character':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Character(
							A2(getNewDataRecord, counterId, _p56._0._0)));
				default:
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Location(
							A2(getNewDataRecord, counterId, _p56._0._0)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$createCounterIfNotExists = F2(
	function (counterId, mbinteractable) {
		var getNewDataRecord = F2(
			function (thecounterId, dataRecord) {
				var counterStrID = A2(_elm_lang$core$Basics_ops['++'], 'counter_', thecounterId);
				var newAttributes = function () {
					var _p57 = A2(_elm_lang$core$Dict$get, counterStrID, dataRecord.attributes);
					if (_p57.ctor === 'Nothing') {
						return A3(
							_elm_lang$core$Dict$insert,
							counterStrID,
							_user$project$Types$AnInt(0),
							dataRecord.attributes);
					} else {
						return dataRecord.attributes;
					}
				}();
				var newDataRecord = _elm_lang$core$Native_Utils.update(
					dataRecord,
					{attributes: newAttributes});
				return newDataRecord;
			});
		var _p58 = mbinteractable;
		if (_p58.ctor === 'Just') {
			switch (_p58._0.ctor) {
				case 'Item':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Item(
							A2(getNewDataRecord, counterId, _p58._0._0)));
				case 'Character':
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Character(
							A2(getNewDataRecord, counterId, _p58._0._0)));
				default:
					return _elm_lang$core$Maybe$Just(
						_user$project$Types$Location(
							A2(getNewDataRecord, counterId, _p58._0._0)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$checkIfAnswerCorrect = F4(
	function (theCorrectAnswers, playerAnswer, checkAnsData, mbinteractable) {
		var _p59 = mbinteractable;
		if (_p59.ctor === 'Just') {
			if (_p59._0.ctor === 'Item') {
				var _p60 = _p59._0._0;
				var makeItUnanswarableIfReachedMaxTries = F2(
					function (maxnr, mbinter) {
						var nrtries = A2(
							_elm_lang$core$Maybe$withDefault,
							0,
							A2(_user$project$Engine_Manifest$getICounterValue, 'nrIncorrectAnswers', mbinteractable));
						return ((_elm_lang$core$Native_Utils.cmp(maxnr, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(nrtries, maxnr) > -1)) ? _user$project$Engine_Manifest$makeItUnanswerable(mbinter) : mbinter;
					});
				var nrTries = A2(
					_elm_lang$core$Maybe$withDefault,
					0,
					A2(_user$project$Engine_Manifest$getICounterValue, 'nrIncorrectAnswers', mbinteractable));
				var maxNrTries = A2(_elm_lang$core$Maybe$withDefault, -999, checkAnsData.mbMaxNrTries);
				var playerAns = A2(
					_elm_lang$core$Basics_ops['++'],
					'  \n ___YOUR_ANSWER___',
					A2(_elm_lang$core$Basics_ops['++'], ' ', playerAnswer));
				var reach_max_nr_tries = '___REACH_MAX_NR_TRIES___';
				var incorrect = '  \n ___INCORRECT_ANSWER___';
				var getAnsWrong = F2(
					function (nrTries, theMax) {
						var ansFeedback = ((_elm_lang$core$Native_Utils.cmp(theMax, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(nrTries, theMax - 1) > -1)) ? A2(
							_elm_lang$core$Basics_ops['++'],
							'  \n',
							A2(_elm_lang$core$Basics_ops['++'], ' ', reach_max_nr_tries)) : A2(
							_elm_lang$core$Basics_ops['++'],
							incorrect,
							(_elm_lang$core$Native_Utils.cmp(theMax, 0) > 0) ? A2(
								_elm_lang$core$Basics_ops['++'],
								'  \n',
								A2(
									_elm_lang$core$Basics_ops['++'],
									' ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										'___NR_TRIES_LEFT___',
										A2(
											_elm_lang$core$Basics_ops['++'],
											' ',
											_elm_lang$core$Basics$toString((theMax - 1) - nrTries))))) : '');
						return A2(
							_elm_lang$core$Basics_ops['++'],
							playerAns,
							checkAnsData.correctIncorrectFeedback ? ansFeedback : '');
					});
				var correct = '  \n ___CORRECT_ANSWER___';
				var answerFeedback = function (x) {
					return checkAnsData.correctIncorrectFeedback ? x : '';
				}(
					A2(_elm_lang$core$Basics_ops['++'], correct, '  \n'));
				var ansRight = A2(_elm_lang$core$Basics_ops['++'], playerAns, answerFeedback);
				var theMbInteractable = ((_elm_lang$core$Native_Utils.cmp(maxNrTries, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(nrTries, maxNrTries) > -1)) ? _user$project$Engine_Manifest$makeItUnanswerable(mbinteractable) : ((_elm_lang$core$Native_Utils.eq(playerAnswer, '') || _elm_lang$core$Native_Utils.eq(
					A2(_elm_lang$core$Dict$get, 'isCorrectlyAnswered', _p60.attributes),
					_elm_lang$core$Maybe$Just(
						_user$project$Types$Abool(true)))) ? mbinteractable : (A4(_user$project$Engine_Manifest$comparesEqualToAtLeastOne, playerAnswer, theCorrectAnswers, checkAnsData.answerCase, checkAnsData.answerSpaces) ? A2(
					_user$project$Engine_Manifest$createAttributesIfNotExistsAndOrSetValue,
					checkAnsData.lnewAttrs,
					A3(
						_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
						_user$project$Types$ADictStringString(checkAnsData.correctAnsTextDict),
						'additionalTextDict',
						A3(
							_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
							_user$project$Types$Astring('___QUESTION_ANSWERED___'),
							'narrativeHeader',
							A2(
								_user$project$Engine_Manifest$removeAttributeIfExists,
								'isIncorrectlyAnswered',
								A3(
									_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
									_user$project$Types$Abool(true),
									'isCorrectlyAnswered',
									A3(
										_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
										_user$project$Types$Astring(playerAnswer),
										'playerAnswer',
										_user$project$Engine_Manifest$makeItUnanswerable(
											_elm_lang$core$Maybe$Just(
												_user$project$Types$Item(
													_elm_lang$core$Native_Utils.update(
														_p60,
														{
															writtenContent: _elm_lang$core$Maybe$Just(ansRight)
														})))))))))) : A2(
					_user$project$Engine_Manifest$increaseCounter,
					'nrIncorrectAnswers',
					A2(
						makeItUnanswarableIfReachedMaxTries,
						maxNrTries - 1,
						A2(
							_user$project$Engine_Manifest$createCounterIfNotExists,
							'nrIncorrectAnswers',
							A3(
								_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
								_user$project$Types$ADictStringString(checkAnsData.incorrectAnsTextDict),
								'additionalTextDict',
								A2(
									_user$project$Engine_Manifest$removeAttributeIfExists,
									'isCorrectlyAnswered',
									A3(
										_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
										_user$project$Types$Abool(true),
										'isIncorrectlyAnswered',
										A3(
											_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
											_user$project$Types$Astring(playerAnswer),
											'playerAnswer',
											_elm_lang$core$Maybe$Just(
												_user$project$Types$Item(
													_elm_lang$core$Native_Utils.update(
														_p60,
														{
															writtenContent: _elm_lang$core$Maybe$Just(
																A2(getAnsWrong, nrTries, maxNrTries))
														}))))))))))));
				return theMbInteractable;
			} else {
				return A3(_user$project$Engine_Manifest$writeInteractionIncident, 'error', 'Trying to use checkIfAnswerCorrect function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Engine_Manifest$getInteractionWarnings = F2(
	function (interactableId, manifest) {
		var _p61 = A2(_elm_lang$core$Dict$get, interactableId, manifest);
		if (_p61.ctor === 'Just') {
			switch (_p61._0.ctor) {
				case 'Item':
					return _p61._0._0.interactionWarnings;
				case 'Character':
					return _p61._0._0.interactionWarnings;
				default:
					return _p61._0._0.interactionWarnings;
			}
		} else {
			return {ctor: '[]'};
		}
	});
var _user$project$Engine_Manifest$getInteractionErrors = F2(
	function (interactableId, manifest) {
		var _p62 = A2(_elm_lang$core$Dict$get, interactableId, manifest);
		if (_p62.ctor === 'Just') {
			switch (_p62._0.ctor) {
				case 'Item':
					return _p62._0._0.interactionErrors;
				case 'Character':
					return _p62._0._0.interactionErrors;
				default:
					return _p62._0._0.interactionErrors;
			}
		} else {
			return {ctor: '[]'};
		}
	});
var _user$project$Engine_Manifest$removeMultiChoiceOptions = function (mbInteractable) {
	return A2(_user$project$Engine_Manifest$removeAttributeIfExists, 'answerOptionsList', mbInteractable);
};
var _user$project$Engine_Manifest$createAmultiChoice = F2(
	function (dslss, mbInteractable) {
		return A2(
			_user$project$Engine_Manifest$removeAttributeIfExists,
			'chosenOption',
			A3(
				_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue,
				_user$project$Types$ADictStringLSS(dslss),
				'answerOptionsList',
				mbInteractable));
	});
var _user$project$Engine_Manifest$checkForNonExistantLocationId = F3(
	function (locationId, manifest, linteractionincidents) {
		var _p63 = A2(_elm_lang$core$Dict$get, locationId, manifest);
		if (_p63.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$List$append,
				linteractionincidents,
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						'Problem on interaction with Location . LocationId : ',
						A2(_elm_lang$core$Basics_ops['++'], locationId, ' doesn\'t exist !')),
					_1: {ctor: '[]'}
				});
		} else {
			return linteractionincidents;
		}
	});
var _user$project$Engine_Manifest$checkForNonExistantInteractableId = F3(
	function (interactableId, manifest, linteractionincidents) {
		var _p64 = A2(_elm_lang$core$Dict$get, interactableId, manifest);
		if (_p64.ctor === 'Nothing') {
			return A2(
				_elm_lang$core$List$append,
				linteractionincidents,
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						'Interactable with InteractableId : ',
						A2(_elm_lang$core$Basics_ops['++'], interactableId, ' doesn\'t exist !')),
					_1: {ctor: '[]'}
				});
		} else {
			return linteractionincidents;
		}
	});
var _user$project$Engine_Manifest$manifestUpdate = F3(
	function (interactbaleId, updateFuncMbToMb, _p65) {
		var _p66 = _p65;
		var _p67 = _p66._0;
		var newInteractionIncidents = A3(_user$project$Engine_Manifest$checkForNonExistantInteractableId, interactbaleId, _p67, _p66._1);
		var incidentswithInterErrors = A2(
			_elm_lang$core$List$append,
			newInteractionIncidents,
			A2(
				_elm_lang$core$List$map,
				function (x) {
					return A2(_elm_lang$core$Basics_ops['++'], 'Interaction Error : ', x);
				},
				A2(_user$project$Engine_Manifest$getInteractionErrors, interactbaleId, _p67)));
		var incidentswithInterErrorsAndWarnings = A2(
			_elm_lang$core$List$append,
			incidentswithInterErrors,
			A2(
				_elm_lang$core$List$map,
				function (x) {
					return A2(_elm_lang$core$Basics_ops['++'], 'Interaction Warning : ', x);
				},
				A2(_user$project$Engine_Manifest$getInteractionWarnings, interactbaleId, _p67)));
		var newManifest = A3(_elm_lang$core$Dict$update, interactbaleId, updateFuncMbToMb, _p67);
		var newManifestUpdated = A3(
			_elm_lang$core$Dict$update,
			interactbaleId,
			_user$project$Engine_Manifest$clearInteractionIncidents('error'),
			A3(
				_elm_lang$core$Dict$update,
				interactbaleId,
				_user$project$Engine_Manifest$clearInteractionIncidents('warning'),
				newManifest));
		return {ctor: '_Tuple2', _0: newManifestUpdated, _1: incidentswithInterErrorsAndWarnings};
	});
var _user$project$Engine_Manifest$manifestUpdateWithLocCheck = F4(
	function (interactbaleId, locationId, updateFuncMbToMb, _p68) {
		var _p69 = _p68;
		var _p70 = _p69._0;
		var newInteractionIncidents = A3(
			_user$project$Engine_Manifest$checkForNonExistantLocationId,
			locationId,
			_p70,
			A3(_user$project$Engine_Manifest$checkForNonExistantInteractableId, interactbaleId, _p70, _p69._1));
		var incidentswithInterErrors = A2(
			_elm_lang$core$List$append,
			newInteractionIncidents,
			A2(
				_elm_lang$core$List$map,
				function (x) {
					return A2(_elm_lang$core$Basics_ops['++'], 'Interaction Error : ', x);
				},
				A2(_user$project$Engine_Manifest$getInteractionErrors, interactbaleId, _p70)));
		var incidentswithInterErrorsAndWarnings = A2(
			_elm_lang$core$List$append,
			incidentswithInterErrors,
			A2(
				_elm_lang$core$List$map,
				function (x) {
					return A2(_elm_lang$core$Basics_ops['++'], 'Interaction Warning : ', x);
				},
				A2(_user$project$Engine_Manifest$getInteractionWarnings, interactbaleId, _p70)));
		var newManifest = A3(_elm_lang$core$Dict$update, interactbaleId, updateFuncMbToMb, _p70);
		var newManifestUpdated = A3(
			_elm_lang$core$Dict$update,
			interactbaleId,
			_user$project$Engine_Manifest$clearInteractionIncidents('error'),
			A3(
				_elm_lang$core$Dict$update,
				interactbaleId,
				_user$project$Engine_Manifest$clearInteractionIncidents('warning'),
				newManifest));
		return {ctor: '_Tuple2', _0: newManifestUpdated, _1: incidentswithInterErrorsAndWarnings};
	});
var _user$project$Engine_Manifest$update = F2(
	function (change, _p71) {
		var _p72 = _p71;
		var _p82 = _p72._0;
		var _p81 = _p72._1;
		var _p73 = change;
		switch (_p73.ctor) {
			case 'NoChange':
				return {ctor: '_Tuple2', _0: _p82, _1: _p81};
			case 'MoveTo':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$addLocation,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'AddLocation':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$addLocation,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'RemoveLocation':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$removeLocation,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MoveItemToInventory':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$moveItemToInventory,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MoveItemToLocation':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$moveItemToLocation(_p73._1),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MoveItemToLocationFixed':
				var _p74 = _p73._1;
				return A4(
					_user$project$Engine_Manifest$manifestUpdateWithLocCheck,
					_p73._0,
					_p74,
					_user$project$Engine_Manifest$moveItemToLocationFixed(_p74),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MoveItemOffScreen':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$moveItemOffScreen,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MoveCharacterToLocation':
				var _p75 = _p73._1;
				return A4(
					_user$project$Engine_Manifest$manifestUpdateWithLocCheck,
					_p73._0,
					_p75,
					_user$project$Engine_Manifest$moveCharacterToLocation(_p75),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MoveCharacterOffScreen':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$moveCharacterOffScreen,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'WriteTextToItem':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._1,
					_user$project$Engine_Manifest$writeTextToItem(_p73._0),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'WriteForceTextToItemFromGivenItemAttr':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._2,
					A3(_user$project$Engine_Manifest$writeForceTextToItemFromOtherInteractableAttrib, _p73._0, _p73._1, _p82),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'WriteGpsLocInfoToItem':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._1,
					_user$project$Engine_Manifest$writeGpsLocInfoToItem(_p73._0),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'ClearWrittenText':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$clearWrittenText,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'CheckIfAnswerCorrect':
				var _p77 = _p73._3;
				var _p76 = _p73._2;
				return A3(
					_user$project$Engine_Manifest$processCreateOrSetOtherInteractableAttributesIfAnswerCorrect,
					_p76.lotherInterAttrs,
					_p77,
					A3(
						_user$project$Engine_Manifest$manifestUpdate,
						_p77,
						A3(_user$project$Engine_Manifest$checkIfAnswerCorrect, _p73._0, _p73._1, _p76),
						{ctor: '_Tuple2', _0: _p82, _1: _p81}));
			case 'CheckAndActIfChosenOptionIs':
				var _p80 = _p73._0;
				var _p79 = _p73._2;
				var _p78 = _p73._1;
				return A5(
					_user$project$Engine_Manifest$processCreateOrSetOtherInteractableAttributesIfChosenOptionIs,
					_p80,
					_p78.valueToMatch,
					_p78.lotherInterAttrs,
					_p79,
					A3(
						_user$project$Engine_Manifest$manifestUpdate,
						_p79,
						A2(_user$project$Engine_Manifest$checkAndActIfChosenOptionIs, _p80, _p78),
						{ctor: '_Tuple2', _0: _p82, _1: _p81}));
			case 'ProcessChosenOptionEqualTo':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._1,
					_user$project$Engine_Manifest$processChosenOptionEqualTo(_p73._0),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'CreateAMultiChoice':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._1,
					_user$project$Engine_Manifest$createAmultiChoice(_p73._0),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'RemoveMultiChoiceOptions':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$removeMultiChoiceOptions,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'CreateCounterIfNotExists':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._1,
					_user$project$Engine_Manifest$createCounterIfNotExists(_p73._0),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'IncreaseCounter':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._1,
					_user$project$Engine_Manifest$increaseCounter(_p73._0),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'CreateAttributeIfNotExists':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._2,
					A2(_user$project$Engine_Manifest$createAttributeIfNotExists, _p73._0, _p73._1),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'SetAttributeValue':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._2,
					A2(_user$project$Engine_Manifest$setAttributeValue, _p73._0, _p73._1),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'CreateAttributeIfNotExistsAndOrSetValue':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._2,
					A2(_user$project$Engine_Manifest$createAttributeIfNotExistsAndOrSetValue, _p73._0, _p73._1),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'CreateOrSetAttributeValueFromOtherInterAttr':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._3,
					A4(_user$project$Engine_Manifest$createOrSetAttributeValueFromOtherInterAttr, _p73._0, _p73._1, _p73._2, _p82),
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MakeItemWritable':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$makeItemWritable,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MakeItemUnwritable':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$makeItemUnwritable,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'RemoveChooseOptions':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$removeChooseOptions,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'MakeItUnanswerable':
				return A3(
					_user$project$Engine_Manifest$manifestUpdate,
					_p73._0,
					_user$project$Engine_Manifest$makeItUnanswerable,
					{ctor: '_Tuple2', _0: _p82, _1: _p81});
			case 'LoadScene':
				return {ctor: '_Tuple2', _0: _p82, _1: _p81};
			case 'SetChoiceLanguages':
				return {ctor: '_Tuple2', _0: _p82, _1: _p81};
			case 'AddChoiceLanguage':
				return {ctor: '_Tuple2', _0: _p82, _1: _p81};
			default:
				return {ctor: '_Tuple2', _0: _p82, _1: _p81};
		}
	});
var _user$project$Engine_Manifest$processCreateOrSetOtherInteractableAttributesIfAnswerCorrect = F3(
	function (lotherInterAttrs, interactableId, _p83) {
		var _p84 = _p83;
		var _p88 = _p84._0;
		var _p87 = _p84._1;
		return A4(
			_user$project$Engine_Manifest$attrValueIsEqualTo,
			_user$project$Types$Abool(true),
			'isCorrectlyAnswered',
			interactableId,
			_p88) ? A3(
			_elm_lang$core$List$foldl,
			F2(
				function (chg, tup) {
					return A2(_user$project$Engine_Manifest$update, chg, tup);
				}),
			{ctor: '_Tuple2', _0: _p88, _1: _p87},
			A2(
				_elm_lang$core$List$map,
				function (_p85) {
					var _p86 = _p85;
					return A3(_user$project$Types$CreateAttributeIfNotExistsAndOrSetValue, _p86._2, _p86._1, _p86._0);
				},
				lotherInterAttrs)) : {ctor: '_Tuple2', _0: _p88, _1: _p87};
	});
var _user$project$Engine_Manifest$processCreateOrSetOtherInteractableAttributesIfChosenOptionIs = F5(
	function (playerChoice, valToMatch, lotherInterAttrs, interactableId, _p89) {
		var _p90 = _p89;
		var _p94 = _p90._0;
		var _p93 = _p90._1;
		return _elm_lang$core$Native_Utils.eq(playerChoice, valToMatch) ? A3(
			_elm_lang$core$List$foldl,
			F2(
				function (chg, tup) {
					return A2(_user$project$Engine_Manifest$update, chg, tup);
				}),
			{ctor: '_Tuple2', _0: _p94, _1: _p93},
			A2(
				_elm_lang$core$List$map,
				function (_p91) {
					var _p92 = _p91;
					return A3(_user$project$Types$CreateAttributeIfNotExistsAndOrSetValue, _p92._2, _p92._1, _p92._0);
				},
				lotherInterAttrs)) : {ctor: '_Tuple2', _0: _p94, _1: _p93};
	});
var _user$project$Engine_Manifest$chosenOptionIsEqualTo = F2(
	function (valueToMatch, mbInputText) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$Maybe$Just(valueToMatch),
			mbInputText) ? true : false;
	});
var _user$project$Engine_Manifest$noChosenOptionYet = F2(
	function (interactableId, manifest) {
		return function (interactable) {
			var _p95 = interactable;
			if ((_p95.ctor === 'Just') && (_p95._0.ctor === 'Item')) {
				var _p96 = _p95._0._0;
				return ((!_elm_lang$core$Native_Utils.eq(
					A2(_elm_lang$core$Dict$get, 'answerOptionsList', _p96.attributes),
					_elm_lang$core$Maybe$Nothing)) && _elm_lang$core$Native_Utils.eq(
					A2(_elm_lang$core$Dict$get, 'chosenOption', _p96.attributes),
					_elm_lang$core$Maybe$Nothing)) ? true : false;
			} else {
				return false;
			}
		}(
			A2(_elm_lang$core$Dict$get, interactableId, manifest));
	});
var _user$project$Engine_Manifest$choiceHasAlreadyBeenMade = F2(
	function (interactableId, manifest) {
		return !A2(_user$project$Engine_Manifest$noChosenOptionYet, interactableId, manifest);
	});
var _user$project$Engine_Manifest$isCharacter = F2(
	function (id, manifest) {
		return function (interactable) {
			var _p97 = interactable;
			if ((_p97.ctor === 'Just') && (_p97._0.ctor === 'Character')) {
				return true;
			} else {
				return false;
			}
		}(
			A2(_elm_lang$core$Dict$get, id, manifest));
	});
var _user$project$Engine_Manifest$isLocation = F2(
	function (id, manifest) {
		return function (interactable) {
			var _p98 = interactable;
			if ((_p98.ctor === 'Just') && (_p98._0.ctor === 'Location')) {
				return true;
			} else {
				return false;
			}
		}(
			A2(_elm_lang$core$Dict$get, id, manifest));
	});
var _user$project$Engine_Manifest$isItem = F2(
	function (id, manifest) {
		return function (interactable) {
			var _p99 = interactable;
			if ((_p99.ctor === 'Just') && (_p99._0.ctor === 'Item')) {
				return true;
			} else {
				return false;
			}
		}(
			A2(_elm_lang$core$Dict$get, id, manifest));
	});
var _user$project$Engine_Manifest$getItemsInLocationIncludeWrittenContent = F2(
	function (locationId, manifest) {
		var isInLocation = F2(
			function (locationId, _p100) {
				var _p101 = _p100;
				var _p102 = _p101._1;
				if (_p102.ctor === 'Item') {
					var _p104 = _p102._0;
					var _p103 = _p104.itemPlacement;
					if (_p103.ctor === 'ItemInLocation') {
						return _elm_lang$core$Native_Utils.eq(_p103._0, locationId) ? _elm_lang$core$Maybe$Just(
							{ctor: '_Tuple2', _0: _p101._0, _1: _p104.writtenContent}) : _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			});
		return A2(
			_elm_lang$core$List$filterMap,
			isInLocation(locationId),
			_elm_lang$core$Dict$toList(manifest));
	});
var _user$project$Engine_Manifest$isWritable = F2(
	function (interactableId, manifest) {
		return function (mbinteractable) {
			var _p105 = mbinteractable;
			if ((_p105.ctor === 'Just') && (_p105._0.ctor === 'Item')) {
				return _p105._0._0.isWritable;
			} else {
				return false;
			}
		}(
			A2(_elm_lang$core$Dict$get, interactableId, manifest));
	});
var _user$project$Engine_Manifest$countWritableItemsInLocation = F2(
	function (locationId, manifest) {
		var isInLocationAndWritable = F2(
			function (locationId, _p106) {
				var _p107 = _p106;
				var _p108 = _p107._1;
				if (_p108.ctor === 'Item') {
					var _p110 = _p108._0;
					var _p109 = _p110.itemPlacement;
					if (_p109.ctor === 'ItemInLocation') {
						return (_elm_lang$core$Native_Utils.eq(_p109._0, locationId) && _p110.isWritable) ? _elm_lang$core$Maybe$Just(_p107._0) : _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			});
		return _elm_lang$core$List$length(
			A2(
				_elm_lang$core$List$filterMap,
				isInLocationAndWritable(locationId),
				_elm_lang$core$Dict$toList(manifest)));
	});
var _user$project$Engine_Manifest$getItemsInLocation = F2(
	function (locationId, manifest) {
		var isInLocation = F2(
			function (locationId, _p111) {
				var _p112 = _p111;
				var _p113 = _p112._1;
				if (_p113.ctor === 'Item') {
					var _p114 = _p113._0.itemPlacement;
					if (_p114.ctor === 'ItemInLocation') {
						return _elm_lang$core$Native_Utils.eq(_p114._0, locationId) ? _elm_lang$core$Maybe$Just(_p112._0) : _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			});
		return A2(
			_elm_lang$core$List$filterMap,
			isInLocation(locationId),
			_elm_lang$core$Dict$toList(manifest));
	});
var _user$project$Engine_Manifest$itemIsInLocation = F3(
	function (item, currentLocation, manifest) {
		return A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(item),
			A2(_user$project$Engine_Manifest$getItemsInLocation, currentLocation, manifest));
	});
var _user$project$Engine_Manifest$itemIsNotInLocation = F3(
	function (item, currentLocation, manifest) {
		return !A3(_user$project$Engine_Manifest$itemIsInLocation, item, currentLocation, manifest);
	});
var _user$project$Engine_Manifest$getCharactersInLocation = F2(
	function (locationId, manifest) {
		var isInLocation = F2(
			function (locId, _p115) {
				var _p116 = _p115;
				var _p117 = _p116._1;
				if (_p117.ctor === 'Character') {
					var _p118 = _p117._0.characterPlacement;
					if (_p118.ctor === 'CharacterInLocation') {
						return _elm_lang$core$Native_Utils.eq(_p118._0, locId) ? _elm_lang$core$Maybe$Just(_p116._0) : _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Maybe$Nothing;
					}
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			});
		return A2(
			_elm_lang$core$List$filterMap,
			isInLocation(locationId),
			_elm_lang$core$Dict$toList(manifest));
	});
var _user$project$Engine_Manifest$characterIsInLocation = F3(
	function (character, currentLocation, manifest) {
		return A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(character),
			A2(_user$project$Engine_Manifest$getCharactersInLocation, currentLocation, manifest));
	});
var _user$project$Engine_Manifest$getLocations = function (manifest) {
	var isShownLocation = function (_p119) {
		var _p120 = _p119;
		var _p121 = _p120._1;
		if (_p121.ctor === 'Location') {
			return _p121._0.shown ? _elm_lang$core$Maybe$Just(_p120._0) : _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	return A2(
		_elm_lang$core$List$filterMap,
		isShownLocation,
		_elm_lang$core$Dict$toList(manifest));
};
var _user$project$Engine_Manifest$getItemsInInventoryIncludeWrittenContent = function (manifest) {
	var isInInventory = function (_p122) {
		var _p123 = _p122;
		var _p124 = _p123._1;
		if (_p124.ctor === 'Item') {
			var _p125 = _p124._0;
			return _elm_lang$core$Native_Utils.eq(_p125.itemPlacement, _user$project$Types$ItemInInventory) ? _elm_lang$core$Maybe$Just(
				{ctor: '_Tuple2', _0: _p123._0, _1: _p125.writtenContent}) : _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	return A2(
		_elm_lang$core$List$filterMap,
		isInInventory,
		_elm_lang$core$Dict$toList(manifest));
};
var _user$project$Engine_Manifest$getItemsInInventory = function (manifest) {
	var isInInventory = function (_p126) {
		var _p127 = _p126;
		var _p128 = _p127._1;
		if (_p128.ctor === 'Item') {
			return _elm_lang$core$Native_Utils.eq(_p128._0.itemPlacement, _user$project$Types$ItemInInventory) ? _elm_lang$core$Maybe$Just(_p127._0) : _elm_lang$core$Maybe$Nothing;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	};
	return A2(
		_elm_lang$core$List$filterMap,
		isInInventory,
		_elm_lang$core$Dict$toList(manifest));
};
var _user$project$Engine_Manifest$itemIsInInventory = F2(
	function (id, manifest) {
		return A2(
			_elm_lang$core$List$any,
			F2(
				function (x, y) {
					return _elm_lang$core$Native_Utils.eq(x, y);
				})(id),
			_user$project$Engine_Manifest$getItemsInInventory(manifest));
	});
var _user$project$Engine_Manifest$character = function (caharacterId) {
	var characterData = A5(
		_user$project$Types$CharacterData,
		caharacterId,
		_user$project$Types$CharacterOffScreen,
		_elm_lang$core$Dict$empty,
		{ctor: '[]'},
		{ctor: '[]'});
	return _user$project$Types$Character(characterData);
};
var _user$project$Engine_Manifest$location = function (locationId) {
	var locationData = A5(
		_user$project$Types$LocationData,
		locationId,
		false,
		_elm_lang$core$Dict$empty,
		{ctor: '[]'},
		{ctor: '[]'});
	return _user$project$Types$Location(locationData);
};
var _user$project$Engine_Manifest$item = function (itemId) {
	var itemData = A8(
		_user$project$Types$ItemData,
		itemId,
		false,
		_user$project$Types$ItemOffScreen,
		false,
		_elm_lang$core$Maybe$Nothing,
		_elm_lang$core$Dict$empty,
		{ctor: '[]'},
		{ctor: '[]'});
	return _user$project$Types$Item(itemData);
};
var _user$project$Engine_Manifest$init = function (_p129) {
	var _p130 = _p129;
	var insertFn = F3(
		function (interactableConstructor, id, acc) {
			return A3(
				_elm_lang$core$Dict$insert,
				id,
				interactableConstructor(id),
				acc);
		});
	var foldFn = F3(
		function (interactableConstructor, interactableList, acc) {
			return A3(
				_elm_lang$core$List$foldr,
				insertFn(interactableConstructor),
				acc,
				interactableList);
		});
	return A3(
		foldFn,
		_user$project$Engine_Manifest$character,
		_p130.characters,
		A3(
			foldFn,
			_user$project$Engine_Manifest$location,
			_p130.locations,
			A3(foldFn, _user$project$Engine_Manifest$item, _p130.items, _elm_lang$core$Dict$empty)));
};

var _user$project$Engine_Rules$matchesCondition = F3(
	function (_p0, mbInputText, condition) {
		var _p1 = _p0;
		var _p5 = _p1.manifest;
		var _p4 = _p1.history;
		var _p3 = _p1.currentLocation;
		var _p2 = condition;
		switch (_p2.ctor) {
			case 'ItemIsInInventory':
				return A2(_user$project$Engine_Manifest$itemIsInInventory, _p2._0, _p5);
			case 'CharacterIsInLocation':
				return A3(_user$project$Engine_Manifest$characterIsInLocation, _p2._0, _p2._1, _p5);
			case 'ItemIsInLocation':
				return A3(_user$project$Engine_Manifest$itemIsInLocation, _p2._0, _p2._1, _p5);
			case 'CurrentLocationIs':
				return _elm_lang$core$Native_Utils.eq(_p3, _p2._0);
			case 'ItemIsNotInInventory':
				return !A2(_user$project$Engine_Manifest$itemIsInInventory, _p2._0, _p5);
			case 'CharacterIsNotInLocation':
				return !A3(_user$project$Engine_Manifest$characterIsInLocation, _p2._0, _p2._1, _p5);
			case 'ItemIsNotInLocation':
				return !A3(_user$project$Engine_Manifest$itemIsInLocation, _p2._0, _p2._1, _p5);
			case 'ItemIsOffScreen':
				return A2(_user$project$Engine_Manifest$itemIsOffScreen, _p2._0, _p5);
			case 'ItemIsInAnyLocationOrInventory':
				return A2(_user$project$Engine_Manifest$itemIsInAnyLocationOrInventory, _p2._0, _p5);
			case 'ItemIsCorrectlyAnswered':
				return A2(_user$project$Engine_Manifest$itemIsCorrectlyAnswered, _p2._0, _p5);
			case 'ItemIsNotCorrectlyAnswered':
				return A2(_user$project$Engine_Manifest$itemIsNotCorrectlyAnswered, _p2._0, _p5);
			case 'CurrentLocationIsNot':
				return !_elm_lang$core$Native_Utils.eq(_p3, _p2._0);
			case 'HasPreviouslyInteractedWith':
				return A2(
					_elm_lang$core$List$member,
					_p2._0,
					A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _p4));
			case 'HasNotPreviouslyInteractedWith':
				return !A2(
					_elm_lang$core$List$member,
					_p2._0,
					A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _p4));
			case 'CurrentSceneIs':
				return _elm_lang$core$Native_Utils.eq(_p1.currentScene, _p2._0);
			case 'CounterExists':
				return A3(_user$project$Engine_Manifest$counterExists, _p2._0, _p2._1, _p5);
			case 'CounterLessThen':
				return A4(_user$project$Engine_Manifest$counterLessThen, _p2._0, _p2._1, _p2._2, _p5);
			case 'CounterGreaterThenOrEqualTo':
				return A4(_user$project$Engine_Manifest$counterGreaterThenOrEqualTo, _p2._0, _p2._1, _p2._2, _p5);
			case 'AttrValueIsEqualTo':
				return A4(_user$project$Engine_Manifest$attrValueIsEqualTo, _p2._0, _p2._1, _p2._2, _p5);
			case 'ChosenOptionIsEqualTo':
				return A2(_user$project$Engine_Manifest$chosenOptionIsEqualTo, _p2._0, mbInputText);
			case 'NoChosenOptionYet':
				return A2(_user$project$Engine_Manifest$noChosenOptionYet, _p2._0, _p5);
			default:
				return A2(_user$project$Engine_Manifest$choiceHasAlreadyBeenMade, _p2._0, _p5);
		}
	});
var _user$project$Engine_Rules$matchesInteraction = F3(
	function (manifest, interactionMatcher, interactableId) {
		var _p6 = interactionMatcher;
		switch (_p6.ctor) {
			case 'WithAnything':
				return true;
			case 'WithAnyItem':
				return A2(_user$project$Engine_Manifest$isItem, interactableId, manifest);
			case 'WithAnyLocation':
				return A2(_user$project$Engine_Manifest$isLocation, interactableId, manifest);
			case 'WithAnyCharacter':
				return A2(_user$project$Engine_Manifest$isCharacter, interactableId, manifest);
			case 'WithAnyLocationAnyCharacterAfterGameEnded':
				return A2(_user$project$Engine_Manifest$isLocation, interactableId, manifest) || A2(_user$project$Engine_Manifest$isCharacter, interactableId, manifest);
			case 'WithAnythingAfterGameEnded':
				return true;
			case 'WithAnythingHighPriority':
				return true;
			default:
				return _elm_lang$core$Native_Utils.eq(_p6._0, interactableId);
		}
	});
var _user$project$Engine_Rules$matchesRule = F4(
	function (_p7, mbInputText, interaction, rule) {
		var _p8 = _p7;
		return A3(_user$project$Engine_Rules$matchesInteraction, _p8.manifest, rule.interaction, interaction) && A2(
			_elm_lang$core$List$all,
			A2(_user$project$Engine_Rules$matchesCondition, _p8, mbInputText),
			rule.conditions);
	});
var _user$project$Engine_Rules$specificityWeight = function (rule) {
	var _p9 = rule.interaction;
	switch (_p9.ctor) {
		case 'With':
			return 200;
		case 'WithAnyItem':
			return 100;
		case 'WithAnyLocation':
			return 100;
		case 'WithAnyCharacter':
			return 100;
		case 'WithAnyLocationAnyCharacterAfterGameEnded':
			return 100000;
		case 'WithAnythingAfterGameEnded':
			return 100000;
		case 'WithAnythingHighPriority':
			return 100000;
		default:
			return 0;
	}
};
var _user$project$Engine_Rules$sceneConstraintWeight = function (rule) {
	var hasSceneConstraints = function (condition) {
		var _p10 = condition;
		if (_p10.ctor === 'CurrentSceneIs') {
			return true;
		} else {
			return false;
		}
	};
	return A2(_elm_lang$core$List$any, hasSceneConstraints, rule.conditions) ? 300 : 0;
};
var _user$project$Engine_Rules$numConstrictionsWeight = function (_p11) {
	return _elm_lang$core$List$length(
		function (_) {
			return _.conditions;
		}(_p11));
};
var _user$project$Engine_Rules$bestMatch = F2(
	function (heuristics, matchingRules) {
		return _elm_lang$core$List$head(
			_elm_lang$core$List$reverse(
				A2(_elm_lang$core$List$sortBy, heuristics, matchingRules)));
	});
var _user$project$Engine_Rules_ops = _user$project$Engine_Rules_ops || {};
_user$project$Engine_Rules_ops['+>'] = F3(
	function (f1, f2, a) {
		return f1(a) + f2(a);
	});
var _user$project$Engine_Rules$chooseFrom = function (_p12) {
	var _p13 = _p12;
	return function (_p14) {
		return A2(
			_user$project$Engine_Rules$bestMatch,
			A2(_user$project$Engine_Rules_ops['+>'], _user$project$Engine_Rules$numConstrictionsWeight, _user$project$Engine_Rules$sceneConstraintWeight),
			A2(
				_elm_lang$core$List$filter,
				function (_p15) {
					return A2(
						_elm_lang$core$List$all,
						A2(_user$project$Engine_Rules$matchesCondition, _p13, _elm_lang$core$Maybe$Nothing),
						function (_) {
							return _.conditions;
						}(_p15));
				},
				_p14));
	};
};
var _user$project$Engine_Rules$findMatchingRule = F3(
	function (story, mbInputText, interaction) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (_p16) {
				var _p17 = _p16;
				return {
					ctor: '_Tuple2',
					_0: _p17.id,
					_1: {interaction: _p17.interaction, conditions: _p17.conditions, changes: _p17.changes, quasiChanges: _p17.quasiChanges}
				};
			},
			A2(
				_user$project$Engine_Rules$bestMatch,
				A2(
					_user$project$Engine_Rules_ops['+>'],
					A2(_user$project$Engine_Rules_ops['+>'], _user$project$Engine_Rules$numConstrictionsWeight, _user$project$Engine_Rules$sceneConstraintWeight),
					_user$project$Engine_Rules$specificityWeight),
				A2(
					_elm_lang$core$List$map,
					function (_p18) {
						var _p19 = _p18;
						return {id: _p19._0, interaction: _p19._1.interaction, conditions: _p19._1.conditions, changes: _p19._1.changes, quasiChanges: _p19._1.quasiChanges};
					},
					A2(
						_elm_lang$core$List$filter,
						function (_p20) {
							return A4(
								_user$project$Engine_Rules$matchesRule,
								story,
								mbInputText,
								interaction,
								_elm_lang$core$Tuple$second(_p20));
						},
						_elm_lang$core$Dict$toList(story.rules)))));
	});

var _user$project$Engine$endStory_ = F2(
	function (endingtype, ending) {
		return A2(_user$project$Types$EndStory, endingtype, ending);
	});
var _user$project$Engine$endStory = F2(
	function (endingtypeStr, ending) {
		return _elm_lang$core$Native_Utils.eq(endingtypeStr, 'notFreezingEnd') ? A2(_user$project$Types$EndStory, _user$project$Types$NotFreezingEnd, ending) : A2(_user$project$Types$EndStory, _user$project$Types$FreezingEnd, ending);
	});
var _user$project$Engine$loadScene = _user$project$Types$LoadScene;
var _user$project$Engine$answerSpacesDontMatter = _user$project$Types$AnswerSpacesDontMatter;
var _user$project$Engine$answerSpacesMatter = _user$project$Types$AnswerSpacesMatter;
var _user$project$Engine$caseInsensitiveAnswer = _user$project$Types$CaseInsensitiveAnswer;
var _user$project$Engine$caseSensitiveAnswer = _user$project$Types$CaseSensitiveAnswer;
var _user$project$Engine$completeTheRule = function (ruleData) {
	return A4(
		_user$project$Types$Rule,
		ruleData.interaction,
		ruleData.conditions,
		ruleData.changes,
		{ctor: '[]'});
};
var _user$project$Engine$aDictStringLSS = _user$project$Types$ADictStringLSS;
var _user$project$Engine$aDictStringString = _user$project$Types$ADictStringString;
var _user$project$Engine$abool = _user$project$Types$Abool;
var _user$project$Engine$anint = _user$project$Types$AnInt;
var _user$project$Engine$aliststringstring = _user$project$Types$AListStringString;
var _user$project$Engine$aliststring = _user$project$Types$AListString;
var _user$project$Engine$astring = _user$project$Types$Astring;
var _user$project$Engine$checkOptionData = _user$project$Types$CheckOptionData;
var _user$project$Engine$checkAnswerData = _user$project$Types$CheckAnswerData;
var _user$project$Engine$addChoiceLanguage = _user$project$Types$AddChoiceLanguage;
var _user$project$Engine$moveItemOffScreen = _user$project$Types$MoveItemOffScreen;
var _user$project$Engine$moveItemToLocation = _user$project$Types$MoveItemToLocation;
var _user$project$Engine$moveItemToLocationFixed = _user$project$Types$MoveItemToLocationFixed;
var _user$project$Engine$moveCharacterOffScreen = _user$project$Types$MoveCharacterOffScreen;
var _user$project$Engine$moveCharacterToLocation = _user$project$Types$MoveCharacterToLocation;
var _user$project$Engine$setAttributeValue = F3(
	function (val, attrId, interactableId) {
		var reservedAttrIds = _user$project$Engine_Manifest$getReservedAttrIds;
		if (!A2(_elm_lang$core$List$member, attrId, reservedAttrIds)) {
			return A3(_user$project$Types$CreateAttributeIfNotExists, val, attrId, interactableId);
		} else {
			var _p0 = A2(_elm_lang$core$Debug$log, 'Sorry ! It was not possible to set attribute value . That\'s a \'reserved\' attributeId : ', attrId);
			return _user$project$Types$NoChange;
		}
	});
var _user$project$Engine$createOrSetAttributeValueFromOtherInterAttr = _user$project$Types$CreateOrSetAttributeValueFromOtherInterAttr;
var _user$project$Engine$createAttributeIfNotExistsAndOrSetValue = F3(
	function (val, attrId, interactableId) {
		var reservedAttrIds = _user$project$Engine_Manifest$getReservedAttrIds;
		if (!A2(_elm_lang$core$List$member, attrId, reservedAttrIds)) {
			return A3(_user$project$Types$CreateAttributeIfNotExistsAndOrSetValue, val, attrId, interactableId);
		} else {
			var _p1 = A2(_elm_lang$core$Debug$log, 'Sorry ! It was not possible to create or set attribute. That\'s a \'reserved\' attributeId : ', attrId);
			return _user$project$Types$NoChange;
		}
	});
var _user$project$Engine$createAttributeIfNotExists = F3(
	function (val, attrId, interactableId) {
		var reservedAttrIds = _user$project$Engine_Manifest$getReservedAttrIds;
		if (!A2(_elm_lang$core$List$member, attrId, reservedAttrIds)) {
			return A3(_user$project$Types$CreateAttributeIfNotExists, val, attrId, interactableId);
		} else {
			var _p2 = A2(_elm_lang$core$Debug$log, 'Sorry ! It was not possible to create attribute. That\'s a \'reserved\' attributeId : ', attrId);
			return _user$project$Types$NoChange;
		}
	});
var _user$project$Engine$increaseCounter = _user$project$Types$IncreaseCounter;
var _user$project$Engine$createCounterIfNotExists = _user$project$Types$CreateCounterIfNotExists;
var _user$project$Engine$processChosenOptionEqualTo = _user$project$Types$ProcessChosenOptionEqualTo;
var _user$project$Engine$checkAndAct_IfChosenOptionIs = _user$project$Types$CheckAndAct_IfChosenOptionIs;
var _user$project$Engine$check_IfAnswerCorrectUsingBackend = _user$project$Types$Check_IfAnswerCorrectUsingBackend;
var _user$project$Engine$simpleCheck_IfAnswerCorrect = F3(
	function (lcorrectAnswers, mbNrTries, interactableId) {
		return A3(
			_user$project$Types$Check_IfAnswerCorrect,
			lcorrectAnswers,
			A8(
				_user$project$Types$CheckAnswerData,
				mbNrTries,
				_user$project$Types$CaseInsensitiveAnswer,
				_user$project$Types$AnswerSpacesDontMatter,
				true,
				_elm_lang$core$Dict$empty,
				_elm_lang$core$Dict$empty,
				{ctor: '[]'},
				{ctor: '[]'}),
			interactableId);
	});
var _user$project$Engine$check_IfAnswerCorrect = _user$project$Types$Check_IfAnswerCorrect;
var _user$project$Engine$write_GpsInfoToItem = _user$project$Types$Write_GpsInfoToItem;
var _user$project$Engine$writeForceTextToItemFromGivenItemAttr = _user$project$Types$WriteForceTextToItemFromGivenItemAttr;
var _user$project$Engine$clearWrittenText = _user$project$Types$ClearWrittenText;
var _user$project$Engine$write_InputTextToItem = _user$project$Types$Write_InputTextToItem;
var _user$project$Engine$writeTextToItem = _user$project$Types$WriteTextToItem;
var _user$project$Engine$makeItemUnwritable = _user$project$Types$MakeItemUnwritable;
var _user$project$Engine$makeItemWritable = _user$project$Types$MakeItemWritable;
var _user$project$Engine$moveItemToInventory = _user$project$Types$MoveItemToInventory;
var _user$project$Engine$removeLocation = _user$project$Types$RemoveLocation;
var _user$project$Engine$addLocation = _user$project$Types$AddLocation;
var _user$project$Engine$moveTo = _user$project$Types$MoveTo;
var _user$project$Engine$removeMultiChoiceOptions = _user$project$Types$RemoveMultiChoiceOptions;
var _user$project$Engine$createAmultiChoice = _user$project$Types$CreateAMultiChoice;
var _user$project$Engine$choiceHasAlreadyBeenMade = _user$project$Types$ChoiceHasAlreadyBeenMade;
var _user$project$Engine$noChosenOptionYet = _user$project$Types$NoChosenOptionYet;
var _user$project$Engine$chosenOptionIsEqualTo = _user$project$Types$ChosenOptionIsEqualTo;
var _user$project$Engine$counterGreaterThenOrEqualTo = _user$project$Types$CounterGreaterThenOrEqualTo;
var _user$project$Engine$counterLessThen = _user$project$Types$CounterLessThen;
var _user$project$Engine$counterExists = _user$project$Types$CounterExists;
var _user$project$Engine$currentSceneIs = _user$project$Types$CurrentSceneIs;
var _user$project$Engine$currentLocationIsNot = _user$project$Types$CurrentLocationIsNot;
var _user$project$Engine$currentLocationIs = _user$project$Types$CurrentLocationIs;
var _user$project$Engine$attrBValueIsEqualTo = function (bval) {
	return _user$project$Types$AttrValueIsEqualTo(
		_user$project$Types$Abool(bval));
};
var _user$project$Engine$attrValueIsEqualTo = _user$project$Types$AttrValueIsEqualTo;
var _user$project$Engine$itemIsNotCorrectlyAnswered = _user$project$Types$ItemIsNotCorrectlyAnswered;
var _user$project$Engine$itemIsCorrectlyAnswered = _user$project$Types$ItemIsCorrectlyAnswered;
var _user$project$Engine$itemIsInAnyLocationOrInventory = _user$project$Types$ItemIsInAnyLocationOrInventory;
var _user$project$Engine$itemIsOffScreen = _user$project$Types$ItemIsOffScreen;
var _user$project$Engine$itemIsNotInLocation = _user$project$Types$ItemIsNotInLocation;
var _user$project$Engine$itemIsInLocation = _user$project$Types$ItemIsInLocation;
var _user$project$Engine$characterIsNotInLocation = _user$project$Types$CharacterIsNotInLocation;
var _user$project$Engine$hasNotPreviouslyInteractedWith = _user$project$Types$HasNotPreviouslyInteractedWith;
var _user$project$Engine$hasPreviouslyInteractedWith = _user$project$Types$HasPreviouslyInteractedWith;
var _user$project$Engine$characterIsInLocation = _user$project$Types$CharacterIsInLocation;
var _user$project$Engine$itemIsNotInInventory = _user$project$Types$ItemIsNotInInventory;
var _user$project$Engine$itemIsInInventory = _user$project$Types$ItemIsInInventory;
var _user$project$Engine$withAnything = _user$project$Types$WithAnything;
var _user$project$Engine$withAnythingHighPriority = _user$project$Types$WithAnythingHighPriority;
var _user$project$Engine$withAnythingAfterGameEnded = _user$project$Types$WithAnythingAfterGameEnded;
var _user$project$Engine$withAnyLocationAnyCharacterAfterGameEnded = _user$project$Types$WithAnyLocationAnyCharacterAfterGameEnded;
var _user$project$Engine$withAnyCharacter = _user$project$Types$WithAnyCharacter;
var _user$project$Engine$withAnyLocation = _user$project$Types$WithAnyLocation;
var _user$project$Engine$withAnyItem = _user$project$Types$WithAnyItem;
var _user$project$Engine$with = function (id) {
	return _user$project$Types$With(id);
};
var _user$project$Engine$chooseFrom = F2(
	function (_p3, choices) {
		var _p4 = _p3;
		return A2(_user$project$Engine_Rules$chooseFrom, _p4._0, choices);
	});
var _user$project$Engine$replaceWriteGpsInfoToItem = F2(
	function (geolocationInfoText, id) {
		return A2(_user$project$Types$WriteGpsLocInfoToItem, geolocationInfoText, id);
	});
var _user$project$Engine$replaceWriteInputTextToItem = F2(
	function (mbText, id) {
		return A2(
			_user$project$Types$WriteTextToItem,
			A2(_elm_lang$core$Maybe$withDefault, '', mbText),
			id);
	});
var _user$project$Engine$replaceCheckAndActIfChosenOptionIs = F3(
	function (mbInputText, cOptionData, itemid) {
		var playerChoice = A2(_elm_lang$core$Maybe$withDefault, '', mbInputText);
		return A3(_user$project$Types$CheckAndActIfChosenOptionIs, playerChoice, cOptionData, itemid);
	});
var _user$project$Engine$replaceCheckIfAnswerCorrect = F4(
	function (mbInputText, theCorrectAnswers, cAnswerData, interactableId) {
		if ((!_elm_lang$core$Native_Utils.eq(mbInputText, _elm_lang$core$Maybe$Nothing)) && (!_elm_lang$core$Native_Utils.eq(
			mbInputText,
			_elm_lang$core$Maybe$Just('')))) {
			var playerAnswer = A2(_elm_lang$core$Maybe$withDefault, '', mbInputText);
			return A4(_user$project$Types$CheckIfAnswerCorrect, theCorrectAnswers, playerAnswer, cAnswerData, interactableId);
		} else {
			return _user$project$Types$NoChange;
		}
	});
var _user$project$Engine$replaceCheckIfAnswerCorrectUsingBackend = F4(
	function (bkendAnsStatus, strUrl, cAnswerData, interactableId) {
		var _p5 = bkendAnsStatus;
		switch (_p5.ctor) {
			case 'NoInfoYet':
				return _user$project$Types$NoChange;
			case 'WaitingForInfoRequested':
				return _user$project$Types$NoChange;
			case 'Ans':
				var _p6 = _p5._0;
				if (_p6.maxTriesReached) {
					return A2(
						_user$project$Types$WriteTextToItem,
						A2(
							_elm_lang$core$Basics_ops['++'],
							'  \n',
							A2(
								_elm_lang$core$Basics_ops['++'],
								' ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									'___MAX_TRIES_ON_BACKEND___',
									A2(
										_elm_lang$core$Basics_ops['++'],
										' ,  ',
										A2(
											_elm_lang$core$Basics_ops['++'],
											'  \n , ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												'___your_answer___',
												A2(_elm_lang$core$Basics_ops['++'], ' ', _p6.playerAnswer))))))),
						interactableId);
				} else {
					if (_p6.answered && _p6.correctAnswer) {
						var newCheckAnswerData = _elm_lang$core$Native_Utils.update(
							cAnswerData,
							{
								lnewAttrs: A2(
									_elm_lang$core$Basics_ops['++'],
									cAnswerData.lnewAttrs,
									{
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'bonusText',
											_1: _user$project$Types$Astring(_p6.additionalText)
										},
										_1: {ctor: '[]'}
									})
							});
						return A4(
							_user$project$Types$CheckIfAnswerCorrect,
							{
								ctor: '::',
								_0: _p6.playerAnswer,
								_1: {ctor: '[]'}
							},
							_p6.playerAnswer,
							newCheckAnswerData,
							interactableId);
					} else {
						if (_p6.answered && _p6.incorrectAnswer) {
							return A4(
								_user$project$Types$CheckIfAnswerCorrect,
								{
									ctor: '::',
									_0: A2(_elm_lang$core$Basics_ops['++'], _p6.playerAnswer, 'something'),
									_1: {ctor: '[]'}
								},
								_p6.playerAnswer,
								cAnswerData,
								interactableId);
						} else {
							return _user$project$Types$NoChange;
						}
					}
				}
			default:
				return A2(
					_user$project$Types$WriteTextToItem,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'  \n',
						A2(_elm_lang$core$Basics_ops['++'], ' ', '___Couldnt_check_Answer___')),
					interactableId);
		}
	});
var _user$project$Engine$replaceQuasiCwCmdsWithCwcommands = F2(
	function (extraInfo, quasiCwCommand) {
		var _p7 = quasiCwCommand;
		switch (_p7.ctor) {
			case 'Check_IfAnswerCorrectUsingBackend':
				return A4(_user$project$Engine$replaceCheckIfAnswerCorrectUsingBackend, extraInfo.bkAnsStatus, _p7._0, _p7._1, _p7._2);
			case 'Check_IfAnswerCorrect':
				return A4(_user$project$Engine$replaceCheckIfAnswerCorrect, extraInfo.mbInputText, _p7._0, _p7._1, _p7._2);
			case 'CheckAndAct_IfChosenOptionIs':
				return A3(_user$project$Engine$replaceCheckAndActIfChosenOptionIs, extraInfo.mbInputText, _p7._0, _p7._1);
			case 'Write_InputTextToItem':
				return A2(_user$project$Engine$replaceWriteInputTextToItem, extraInfo.mbInputText, _p7._0);
			default:
				return A2(_user$project$Engine$replaceWriteGpsInfoToItem, extraInfo.geolocationInfoText, _p7._0);
		}
	});
var _user$project$Engine$getListStrUrls = function (qcwcommands) {
	var helperFunc = function (cwcommand) {
		var _p8 = cwcommand;
		if (_p8.ctor === 'Check_IfAnswerCorrectUsingBackend') {
			return _p8._0;
		} else {
			return '';
		}
	};
	return A2(
		_elm_lang$core$List$filter,
		function (x) {
			return !_elm_lang$core$Native_Utils.eq(x, '');
		},
		A2(
			_elm_lang$core$List$map,
			function (cwcmd) {
				return helperFunc(cwcmd);
			},
			qcwcommands));
};
var _user$project$Engine$getStoryRules = function (_p9) {
	var _p10 = _p9;
	return _p10._0.rules;
};
var _user$project$Engine$getHistory = function (_p11) {
	var _p12 = _p11;
	return _p12._0.history;
};
var _user$project$Engine$isItemCorrectlyAnswered = F2(
	function (id, _p13) {
		var _p14 = _p13;
		return A2(_user$project$Engine_Manifest$itemIsCorrectlyAnswered, id, _p14._0.manifest);
	});
var _user$project$Engine$hasEnded = function (_p15) {
	var _p16 = _p15;
	var _p17 = _p16._0.theEnd;
	if (_p17.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _user$project$Engine$hasFreezingEnd = function (_p18) {
	var _p19 = _p18;
	var _p20 = _p19._0.theEnd;
	if (_p20.ctor === 'Nothing') {
		return false;
	} else {
		var _p21 = _p20._0;
		if (_p21._0.ctor === 'FreezingEnd') {
			return true;
		} else {
			return false;
		}
	}
};
var _user$project$Engine$getEndingText = function (_p22) {
	var _p23 = _p22;
	var _p24 = _p23._0.theEnd;
	if (_p24.ctor === 'Nothing') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var _p25 = _p24._0;
		return _elm_lang$core$Maybe$Just(_p25._1);
	}
};
var _user$project$Engine$getLocations = function (_p26) {
	var _p27 = _p26;
	return _user$project$Engine_Manifest$getLocations(_p27._0.manifest);
};
var _user$project$Engine$isWritable = F2(
	function (interactableId, _p28) {
		var _p29 = _p28;
		return A2(_user$project$Engine_Manifest$isWritable, interactableId, _p29._0.manifest);
	});
var _user$project$Engine$getInteractableAttribute = F3(
	function (attrId, interactableId, _p30) {
		var _p31 = _p30;
		return A2(
			_user$project$Engine_Manifest$getInteractableAttribute,
			attrId,
			A2(_elm_lang$core$Dict$get, interactableId, _p31._0.manifest));
	});
var _user$project$Engine$getItemWrittenContent = F2(
	function (id, _p32) {
		var _p33 = _p32;
		var theManifest = _p33._0.manifest;
		var mbinteractable = A2(_elm_lang$core$Dict$get, id, theManifest);
		return _user$project$Engine_Manifest$getItemWrittenContent(mbinteractable);
	});
var _user$project$Engine$getItemsInInventory = function (_p34) {
	var _p35 = _p34;
	return _user$project$Engine_Manifest$getItemsInInventory(_p35._0.manifest);
};
var _user$project$Engine$getCharactersInCurrentLocation = function (_p36) {
	var _p37 = _p36;
	var _p38 = _p37._0;
	return A2(_user$project$Engine_Manifest$getCharactersInLocation, _p38.currentLocation, _p38.manifest);
};
var _user$project$Engine$areThereWritableItemsInLocation = function (_p39) {
	var _p40 = _p39;
	var _p41 = _p40._0;
	return (_elm_lang$core$Native_Utils.cmp(
		A2(_user$project$Engine_Manifest$countWritableItemsInLocation, _p41.currentLocation, _p41.manifest),
		0) > 0) ? true : false;
};
var _user$project$Engine$getItemsInCurrentLocation = function (_p42) {
	var _p43 = _p42;
	var _p44 = _p43._0;
	return A2(_user$project$Engine_Manifest$getItemsInLocation, _p44.currentLocation, _p44.manifest);
};
var _user$project$Engine$getChoiceLanguages = function (_p45) {
	var _p46 = _p45;
	return _p46._0.choiceLanguages;
};
var _user$project$Engine$getCurrentLocation = function (_p47) {
	var _p48 = _p47;
	return _p48._0.currentLocation;
};
var _user$project$Engine$getCurrentScene = function (_p49) {
	var _p50 = _p49;
	return _p50._0.currentScene;
};
var _user$project$Engine$Model = function (a) {
	return {ctor: 'Model', _0: a};
};
var _user$project$Engine$init = F3(
	function (manifest, llanguages, rules) {
		return _user$project$Engine$Model(
			{
				history: {ctor: '[]'},
				manifest: _user$project$Engine_Manifest$init(manifest),
				rules: rules,
				currentScene: '',
				currentLocation: '',
				choiceLanguages: llanguages,
				theEnd: _elm_lang$core$Maybe$Nothing
			});
	});
var _user$project$Engine$changeWorld = F2(
	function (changes, _p51) {
		var _p52 = _p51;
		var doChange = F2(
			function (change, _p53) {
				var _p54 = _p53;
				var _p58 = _p54._0;
				var _p57 = _p54._1;
				var _p55 = change;
				switch (_p55.ctor) {
					case 'MoveTo':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								_p58,
								{currentLocation: _p55._0}),
							_1: _p57
						};
					case 'LoadScene':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								_p58,
								{currentScene: _p55._0}),
							_1: _p57
						};
					case 'EndStory':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								_p58,
								{
									theEnd: _elm_lang$core$Maybe$Just(
										A2(_user$project$Types$TheEnd, _p55._0, _p55._1))
								}),
							_1: _p57
						};
					case 'SetChoiceLanguages':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								_p58,
								{choiceLanguages: _p55._0}),
							_1: _p57
						};
					case 'AddChoiceLanguage':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								_p58,
								{
									choiceLanguages: A3(_elm_lang$core$Dict$insert, _p55._0, _p55._1, _p58.choiceLanguages)
								}),
							_1: _p57
						};
					default:
						var _p56 = A2(
							_user$project$Engine_Manifest$update,
							change,
							{ctor: '_Tuple2', _0: _p58.manifest, _1: _p57});
						var newManifest = _p56._0;
						var newIncidents = _p56._1;
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								_p58,
								{manifest: newManifest}),
							_1: newIncidents
						};
				}
			});
		return function (_p59) {
			var _p60 = _p59;
			return {
				ctor: '_Tuple2',
				_0: _user$project$Engine$Model(_p60._0),
				_1: _p60._1
			};
		}(
			A3(
				_elm_lang$core$List$foldr,
				F2(
					function (chg, y) {
						return A2(doChange, chg, y);
					}),
				{
					ctor: '_Tuple2',
					_0: _p52._0,
					_1: {ctor: '[]'}
				},
				changes));
	});
var _user$project$Engine$update = F3(
	function (interactableId, extraInfo, _p61) {
		var _p62 = _p61;
		var _p72 = _p62._0;
		var _p71 = _p62;
		var addHistory = function (_p63) {
			var _p64 = _p63;
			var _p65 = _p64._0;
			return _user$project$Engine$Model(
				_elm_lang$core$Native_Utils.update(
					_p65,
					{
						history: A2(
							_elm_lang$core$Basics_ops['++'],
							_p65.history,
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: interactableId, _1: extraInfo},
								_1: {ctor: '[]'}
							})
					}));
		};
		var matchingRule = function () {
			var _p66 = extraInfo.mbMatchedRuleId;
			if (_p66.ctor === 'Nothing') {
				return A3(_user$project$Engine_Rules$findMatchingRule, _p72, extraInfo.mbInputText, interactableId);
			} else {
				var _p67 = _p66._0;
				return A2(
					_elm_lang$core$Maybe$map,
					function (x) {
						return {ctor: '_Tuple2', _0: _p67, _1: x};
					},
					A2(_elm_lang$core$Dict$get, _p67, _p72.rules));
			}
		}();
		var lquasicwcmds = A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(
				_elm_lang$core$Maybe$map,
				function (_p68) {
					return function (_) {
						return _.quasiChanges;
					}(
						_elm_lang$core$Tuple$second(_p68));
				},
				matchingRule));
		var lstrUrls = _user$project$Engine$getListStrUrls(lquasicwcmds);
		var changesFromQuasi = A2(
			_elm_lang$core$List$map,
			_user$project$Engine$replaceQuasiCwCmdsWithCwcommands(extraInfo),
			lquasicwcmds);
		var defaultChanges = A2(_user$project$Engine_Manifest$isLocation, interactableId, _p72.manifest) ? {
			ctor: '::',
			_0: _user$project$Types$MoveTo(interactableId),
			_1: {ctor: '[]'}
		} : (A2(_user$project$Engine_Manifest$isItem, interactableId, _p72.manifest) ? {
			ctor: '::',
			_0: _user$project$Types$MoveItemToInventory(interactableId),
			_1: {ctor: '[]'}
		} : {ctor: '[]'});
		var somechanges = A2(
			_elm_lang$core$Maybe$withDefault,
			defaultChanges,
			A2(
				_elm_lang$core$Maybe$map,
				function (_p69) {
					return function (_) {
						return _.changes;
					}(
						_elm_lang$core$Tuple$second(_p69));
				},
				matchingRule));
		var changes = A2(_elm_lang$core$List$append, changesFromQuasi, somechanges);
		if ((_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(lstrUrls),
			0) > 0) && ((!_elm_lang$core$Native_Utils.eq(extraInfo.mbInputText, _elm_lang$core$Maybe$Nothing)) && (!_elm_lang$core$Native_Utils.eq(
			extraInfo.mbInputText,
			_elm_lang$core$Maybe$Just(''))))) {
			return {
				ctor: '_Tuple4',
				_0: _p71,
				_1: A2(_elm_lang$core$Maybe$map, _elm_lang$core$Tuple$first, matchingRule),
				_2: {ctor: '[]'},
				_3: _elm_lang$core$List$head(lstrUrls)
			};
		} else {
			var _p70 = A2(_user$project$Engine$changeWorld, changes, _p71);
			var newModel = _p70._0;
			var lincidents = _p70._1;
			return {
				ctor: '_Tuple4',
				_0: addHistory(newModel),
				_1: A2(_elm_lang$core$Maybe$map, _elm_lang$core$Tuple$first, matchingRule),
				_2: lincidents,
				_3: _elm_lang$core$Maybe$Nothing
			};
		}
	});

var _wernerdegroot$listzipper$List_Zipper$after = function (_p0) {
	var _p1 = _p0;
	return _p1._2;
};
var _wernerdegroot$listzipper$List_Zipper$current = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _wernerdegroot$listzipper$List_Zipper$before = function (_p4) {
	var _p5 = _p4;
	return _elm_lang$core$List$reverse(_p5._0);
};
var _wernerdegroot$listzipper$List_Zipper$toList = function (z) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_wernerdegroot$listzipper$List_Zipper$before(z),
		A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: _wernerdegroot$listzipper$List_Zipper$current(z),
				_1: {ctor: '[]'}
			},
			_wernerdegroot$listzipper$List_Zipper$after(z)));
};
var _wernerdegroot$listzipper$List_Zipper$Zipper = F3(
	function (a, b, c) {
		return {ctor: 'Zipper', _0: a, _1: b, _2: c};
	});
var _wernerdegroot$listzipper$List_Zipper$singleton = function (x) {
	return A3(
		_wernerdegroot$listzipper$List_Zipper$Zipper,
		{ctor: '[]'},
		x,
		{ctor: '[]'});
};
var _wernerdegroot$listzipper$List_Zipper$withDefault = function (x) {
	return _elm_lang$core$Maybe$withDefault(
		_wernerdegroot$listzipper$List_Zipper$singleton(x));
};
var _wernerdegroot$listzipper$List_Zipper$fromList = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			A3(
				_wernerdegroot$listzipper$List_Zipper$Zipper,
				{ctor: '[]'},
				_p6._0,
				_p6._1));
	}
};
var _wernerdegroot$listzipper$List_Zipper$map = F2(
	function (f, _p7) {
		var _p8 = _p7;
		return A3(
			_wernerdegroot$listzipper$List_Zipper$Zipper,
			A2(_elm_lang$core$List$map, f, _p8._0),
			f(_p8._1),
			A2(_elm_lang$core$List$map, f, _p8._2));
	});
var _wernerdegroot$listzipper$List_Zipper$mapBefore = F2(
	function (f, _p9) {
		var _p10 = _p9;
		var elementsBefore = _wernerdegroot$listzipper$List_Zipper$before(_p10);
		var mappedElementsBefore = f(elementsBefore);
		return A3(
			_wernerdegroot$listzipper$List_Zipper$Zipper,
			_elm_lang$core$List$reverse(mappedElementsBefore),
			_p10._1,
			_p10._2);
	});
var _wernerdegroot$listzipper$List_Zipper$mapCurrent = F2(
	function (f, _p11) {
		var _p12 = _p11;
		return A3(
			_wernerdegroot$listzipper$List_Zipper$Zipper,
			_p12._0,
			f(_p12._1),
			_p12._2);
	});
var _wernerdegroot$listzipper$List_Zipper$mapAfter = F2(
	function (f, _p13) {
		var _p14 = _p13;
		return A3(
			_wernerdegroot$listzipper$List_Zipper$Zipper,
			_p14._0,
			_p14._1,
			f(_p14._2));
	});
var _wernerdegroot$listzipper$List_Zipper$first = function (_p15) {
	var _p16 = _p15;
	var _p17 = _elm_lang$core$List$reverse(_p16._0);
	if (_p17.ctor === '[]') {
		return _p16;
	} else {
		return A3(
			_wernerdegroot$listzipper$List_Zipper$Zipper,
			{ctor: '[]'},
			_p17._0,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p17._1,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _p16._1,
						_1: {ctor: '[]'}
					},
					_p16._2)));
	}
};
var _wernerdegroot$listzipper$List_Zipper$previous = function (_p18) {
	var _p19 = _p18;
	var _p20 = _p19._0;
	if (_p20.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			A3(
				_wernerdegroot$listzipper$List_Zipper$Zipper,
				_p20._1,
				_p20._0,
				{ctor: '::', _0: _p19._1, _1: _p19._2}));
	}
};
var _wernerdegroot$listzipper$List_Zipper$next = function (_p21) {
	var _p22 = _p21;
	var _p23 = _p22._2;
	if (_p23.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			A3(
				_wernerdegroot$listzipper$List_Zipper$Zipper,
				{ctor: '::', _0: _p22._1, _1: _p22._0},
				_p23._0,
				_p23._1));
	}
};
var _wernerdegroot$listzipper$List_Zipper$find = F2(
	function (predicate, _p24) {
		find:
		while (true) {
			var _p25 = _p24;
			var _p27 = _p25;
			if (predicate(_p25._1)) {
				return _elm_lang$core$Maybe$Just(_p27);
			} else {
				var _p26 = _wernerdegroot$listzipper$List_Zipper$next(_p27);
				if (_p26.ctor === 'Just') {
					var _v16 = predicate,
						_v17 = _p26._0;
					predicate = _v16;
					_p24 = _v17;
					continue find;
				} else {
					return _elm_lang$core$Maybe$Nothing;
				}
			}
		}
	});
var _wernerdegroot$listzipper$List_Zipper$last = function (_p28) {
	var _p29 = _p28;
	var _p30 = _elm_lang$core$List$reverse(_p29._2);
	if (_p30.ctor === '[]') {
		return _p29;
	} else {
		return A3(
			_wernerdegroot$listzipper$List_Zipper$Zipper,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p30._1,
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: _p29._1,
						_1: {ctor: '[]'}
					},
					_p29._0)),
			_p30._0,
			{ctor: '[]'});
	}
};

var _user$project$Components$mergeDicts = F2(
	function (dict1, dict2) {
		var mergeRule = F2(
			function (tup, dict) {
				return _elm_lang$core$Native_Utils.eq(
					A2(
						_elm_lang$core$Dict$get,
						_elm_lang$core$Tuple$first(tup),
						dict),
					_elm_lang$core$Maybe$Nothing) ? A3(
					_elm_lang$core$Dict$insert,
					_elm_lang$core$Tuple$first(tup),
					_elm_lang$core$Tuple$second(tup),
					dict) : dict;
			});
		var ltups = _elm_lang$core$Dict$toList(dict1);
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (tup, dict) {
					return A2(mergeRule, tup, dict);
				}),
			dict2,
			ltups);
	});
var _user$project$Components$getRuleData = function (_p0) {
	var _p1 = _p0;
	var _p2 = A2(_elm_lang$core$Dict$get, 'ruleData', _p1._1);
	if ((_p2.ctor === 'Just') && (_p2._0.ctor === 'RuleData')) {
		return _p2._0._0;
	} else {
		return {
			interaction: _user$project$Engine$with(''),
			conditions: {ctor: '[]'},
			changes: {ctor: '[]'},
			quasiChanges: {ctor: '[]'}
		};
	}
};
var _user$project$Components$getLanguagesNarrativeDict = function (_p3) {
	var _p4 = _p3;
	var _p5 = A2(_elm_lang$core$Dict$get, 'languageNarratives', _p4._1);
	if ((_p5.ctor === 'Just') && (_p5._0.ctor === 'LanguageNarratives')) {
		return _p5._0._0;
	} else {
		return _elm_lang$core$Dict$empty;
	}
};
var _user$project$Components$getLanguageNarrative = F2(
	function (languageId, _p6) {
		var _p7 = _p6;
		var _p10 = _p7._0;
		var _p8 = A2(_elm_lang$core$Dict$get, 'languageNarratives', _p7._1);
		if ((_p8.ctor === 'Just') && (_p8._0.ctor === 'LanguageNarratives')) {
			var _p9 = A2(_elm_lang$core$Dict$get, languageId, _p8._0._0);
			if (_p9.ctor === 'Just') {
				return _p9._0;
			} else {
				return _wernerdegroot$listzipper$List_Zipper$singleton(_p10);
			}
		} else {
			return _wernerdegroot$listzipper$List_Zipper$singleton(_p10);
		}
	});
var _user$project$Components$getNarrative = function (_p11) {
	var _p12 = _p11;
	var _p13 = A2(_elm_lang$core$Dict$get, 'narrative', _p12._1);
	if ((_p13.ctor === 'Just') && (_p13._0.ctor === 'Narrative')) {
		return _p13._0._0;
	} else {
		return _wernerdegroot$listzipper$List_Zipper$singleton(_p12._0);
	}
};
var _user$project$Components$getExits = function (_p14) {
	var _p15 = _p14;
	var _p16 = A2(_elm_lang$core$Dict$get, 'connectedLocations', _p15._1);
	if ((_p16.ctor === 'Just') && (_p16._0.ctor === 'ConnectingLocations')) {
		return _p16._0._0;
	} else {
		return {ctor: '[]'};
	}
};
var _user$project$Components$getClassName = function (_p17) {
	var _p18 = _p17;
	var _p19 = A2(_elm_lang$core$Dict$get, 'className', _p18._1);
	if ((_p19.ctor === 'Just') && (_p19._0.ctor === 'ClassName')) {
		return _p19._0._0;
	} else {
		return '';
	}
};
var _user$project$Components$getNeedsToBeInGpsZone = function (_p20) {
	var _p21 = _p20;
	var _p22 = A2(_elm_lang$core$Dict$get, 'needsToBeInGpsZone', _p21._1);
	if ((_p22.ctor === 'Just') && (_p22._0.ctor === 'NeedsToBeInGpsZone')) {
		return _elm_lang$core$Maybe$Just(
			{needsToBeIn: _p22._0._0, lat: _p22._0._1, lon: _p22._0._2, mbRadius: _p22._0._3});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Components$getNeedsGpsCoords = function (_p23) {
	var _p24 = _p23;
	var _p25 = A2(_elm_lang$core$Dict$get, 'needsGpsCoords', _p24._1);
	if (((_p25.ctor === 'Just') && (_p25._0.ctor === 'NeedsGpsCoords')) && (_p25._0._0 === true)) {
		return true;
	} else {
		return false;
	}
};
var _user$project$Components$getEntityCoords = function (_p26) {
	var _p27 = _p26;
	var _p28 = A2(_elm_lang$core$Dict$get, 'needsToBeInGpsZone', _p27._1);
	if ((_p28.ctor === 'Just') && (_p28._0.ctor === 'NeedsToBeInGpsZone')) {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p28._0._1, _1: _p28._0._2});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Components$getTheLgsDisplayInfo = F3(
	function (ldesiredlanguageIds, priorDict, _p29) {
		var _p30 = _p29;
		var _p34 = _p30._0;
		var fillIt = F2(
			function (key, dict) {
				var _p31 = A2(_elm_lang$core$Dict$get, key, dict);
				if (_p31.ctor === 'Just') {
					return dict;
				} else {
					var _p32 = A2(_elm_lang$core$Dict$get, 'en', dict);
					if (_p32.ctor === 'Nothing') {
						return A3(
							_elm_lang$core$Dict$insert,
							key,
							{name: _p34, description: _p34},
							dict);
					} else {
						return A3(_elm_lang$core$Dict$insert, key, _p32._0, dict);
					}
				}
			});
		var dict1 = function () {
			var _p33 = A2(_elm_lang$core$Dict$get, 'displayInfo', _p30._1);
			if ((_p33.ctor === 'Just') && (_p33._0.ctor === 'DisplayInformation')) {
				return _p33._0._0;
			} else {
				return _elm_lang$core$Dict$empty;
			}
		}();
		var mergedDict = A2(_user$project$Components$mergeDicts, dict1, priorDict);
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (key, dict) {
					return A2(fillIt, key, dict);
				}),
			mergedDict,
			ldesiredlanguageIds);
	});
var _user$project$Components$getLgsDisplayInfo = F2(
	function (ldesiredlanguageIds, _p35) {
		var _p36 = _p35;
		return A3(
			_user$project$Components$getTheLgsDisplayInfo,
			ldesiredlanguageIds,
			_elm_lang$core$Dict$empty,
			{ctor: '_Tuple2', _0: _p36._0, _1: _p36._1});
	});
var _user$project$Components$getDictLgNames = F2(
	function (ldesiredlanguageIds, _p37) {
		var _p38 = _p37;
		var dict = A2(
			_user$project$Components$getLgsDisplayInfo,
			ldesiredlanguageIds,
			{ctor: '_Tuple2', _0: _p38._0, _1: _p38._1});
		return A2(
			_elm_lang$core$Dict$map,
			F2(
				function (key, val) {
					return val.name;
				}),
			dict);
	});
var _user$project$Components$getDictLgNamesAndCoords = F2(
	function (ldesiredlanguageIds, _p39) {
		var _p40 = _p39;
		var _p42 = _p40._1;
		var _p41 = A2(_elm_lang$core$Dict$get, 'needsToBeInGpsZone', _p42);
		if ((_p41.ctor === 'Just') && (_p41._0.ctor === 'NeedsToBeInGpsZone')) {
			var dict = A2(
				_user$project$Components$getLgsDisplayInfo,
				ldesiredlanguageIds,
				{ctor: '_Tuple2', _0: _p40._0, _1: _p42});
			return A2(
				_elm_lang$core$Dict$map,
				F2(
					function (key, val) {
						return {ctor: '_Tuple3', _0: val.name, _1: _p41._0._1, _2: _p41._0._2};
					}),
				dict);
		} else {
			return _elm_lang$core$Dict$empty;
		}
	});
var _user$project$Components$getDictLgDescriptions = F2(
	function (ldesiredlanguageIds, _p43) {
		var _p44 = _p43;
		var dict = A2(
			_user$project$Components$getLgsDisplayInfo,
			ldesiredlanguageIds,
			{ctor: '_Tuple2', _0: _p44._0, _1: _p44._1});
		return A2(
			_elm_lang$core$Dict$map,
			F2(
				function (key, val) {
					return val.description;
				}),
			dict);
	});
var _user$project$Components$getSingleLgDisplayInfo = F2(
	function (lgId, _p45) {
		var _p46 = _p45;
		var theDict = A2(
			_user$project$Components$getLgsDisplayInfo,
			{
				ctor: '::',
				_0: lgId,
				_1: {ctor: '[]'}
			},
			{ctor: '_Tuple2', _0: _p46._0, _1: _p46._1});
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{name: 'No Info', description: 'No Info'},
			A2(_elm_lang$core$Dict$get, lgId, theDict));
	});
var _user$project$Components$getDisplayInfo = function (_p47) {
	var _p48 = _p47;
	return A2(
		_user$project$Components$getSingleLgDisplayInfo,
		'en',
		{ctor: '_Tuple2', _0: _p48._0, _1: _p48._1});
};
var _user$project$Components$zipTheStringList = function (narrative) {
	return A2(
		_wernerdegroot$listzipper$List_Zipper$withDefault,
		'',
		_wernerdegroot$listzipper$List_Zipper$fromList(narrative));
};
var _user$project$Components$makeZipNarrativesDict = function (narrativeDict) {
	return A2(
		_elm_lang$core$Dict$map,
		F2(
			function (comparable, lstrs) {
				return _user$project$Components$zipTheStringList(lstrs);
			}),
		narrativeDict);
};
var _user$project$Components$getLanguagesAudioDict = function (_p49) {
	var _p50 = _p49;
	var _p51 = A2(_elm_lang$core$Dict$get, 'audioContent', _p50._1);
	if ((_p51.ctor === 'Just') && (_p51._0.ctor === 'AudioContent')) {
		return _p51._0._0;
	} else {
		return _elm_lang$core$Dict$empty;
	}
};
var _user$project$Components$getMbSingleLgAudioContent = F2(
	function (lgId, _p52) {
		var _p53 = _p52;
		var mbAudioComponent = A2(_elm_lang$core$Dict$get, 'audioContent', _p53._1);
		var audioDict = function () {
			var _p54 = mbAudioComponent;
			if ((_p54.ctor === 'Just') && (_p54._0.ctor === 'AudioContent')) {
				return _p54._0._0;
			} else {
				return _elm_lang$core$Dict$empty;
			}
		}();
		return A2(_elm_lang$core$Dict$get, lgId, audioDict);
	});
var _user$project$Components$addComponent = F3(
	function (componentId, component, _p55) {
		var _p56 = _p55;
		return {
			ctor: '_Tuple2',
			_0: _p56._0,
			_1: A3(_elm_lang$core$Dict$insert, componentId, component, _p56._1)
		};
	});
var _user$project$Components$entity = function (id) {
	return {ctor: '_Tuple2', _0: id, _1: _elm_lang$core$Dict$empty};
};
var _user$project$Components$AudioFileInfo = F3(
	function (a, b, c) {
		return {displayName: a, fileName: b, mbAbsoluteUrl: c};
	});
var _user$project$Components$NeedsToBeInGpsZone = F4(
	function (a, b, c, d) {
		return {ctor: 'NeedsToBeInGpsZone', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Components$addNeedsToBeInGpsZone = F4(
	function (bval, dlat, dlon, mbRadius) {
		return A2(
			_user$project$Components$addComponent,
			'needsToBeInGpsZone',
			A4(_user$project$Components$NeedsToBeInGpsZone, bval, dlat, dlon, mbRadius));
	});
var _user$project$Components$NeedsGpsCoords = function (a) {
	return {ctor: 'NeedsGpsCoords', _0: a};
};
var _user$project$Components$addNeedsGpsInfo = function (bval) {
	return A2(
		_user$project$Components$addComponent,
		'needsGpsCoords',
		_user$project$Components$NeedsGpsCoords(bval));
};
var _user$project$Components$RuleData = function (a) {
	return {ctor: 'RuleData', _0: a};
};
var _user$project$Components$addRuleData = function (ruleData) {
	return A2(
		_user$project$Components$addComponent,
		'ruleData',
		_user$project$Components$RuleData(ruleData));
};
var _user$project$Components$AudioContent = function (a) {
	return {ctor: 'AudioContent', _0: a};
};
var _user$project$Components$addAllLanguagesAudio = F2(
	function (audioDict, _p57) {
		var _p58 = _p57;
		return A3(
			_user$project$Components$addComponent,
			'audioContent',
			_user$project$Components$AudioContent(audioDict),
			{ctor: '_Tuple2', _0: _p58._0, _1: _p58._1});
	});
var _user$project$Components$addLgAudioContent = F5(
	function (lgId, audioName, audioFileName, mbAbsUrl, _p59) {
		var _p60 = _p59;
		var _p62 = _p60._1;
		var newDict = function () {
			var _p61 = A2(_elm_lang$core$Dict$get, 'audioContent', _p62);
			if ((_p61.ctor === 'Just') && (_p61._0.ctor === 'AudioContent')) {
				return A3(
					_elm_lang$core$Dict$insert,
					lgId,
					A3(_user$project$Components$AudioFileInfo, audioName, audioFileName, mbAbsUrl),
					_p61._0._0);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					lgId,
					A3(_user$project$Components$AudioFileInfo, audioName, audioFileName, mbAbsUrl),
					_elm_lang$core$Dict$empty);
			}
		}();
		return A3(
			_user$project$Components$addComponent,
			'audioContent',
			_user$project$Components$AudioContent(newDict),
			{ctor: '_Tuple2', _0: _p60._0, _1: _p62});
	});
var _user$project$Components$LanguageNarratives = function (a) {
	return {ctor: 'LanguageNarratives', _0: a};
};
var _user$project$Components$addLanguageNarratives = function (narrativeDict) {
	return A2(
		_user$project$Components$addComponent,
		'languageNarratives',
		_user$project$Components$LanguageNarratives(
			_user$project$Components$makeZipNarrativesDict(narrativeDict)));
};
var _user$project$Components$Narrative = function (a) {
	return {ctor: 'Narrative', _0: a};
};
var _user$project$Components$addNarrative = function (narrative) {
	return A2(
		_user$project$Components$addComponent,
		'narrative',
		_user$project$Components$Narrative(
			A2(
				_wernerdegroot$listzipper$List_Zipper$withDefault,
				'',
				_wernerdegroot$listzipper$List_Zipper$fromList(narrative))));
};
var _user$project$Components$ConnectingLocations = function (a) {
	return {ctor: 'ConnectingLocations', _0: a};
};
var _user$project$Components$addConnectingLocations = function (exits) {
	return A2(
		_user$project$Components$addComponent,
		'connectedLocations',
		_user$project$Components$ConnectingLocations(exits));
};
var _user$project$Components$ClassName = function (a) {
	return {ctor: 'ClassName', _0: a};
};
var _user$project$Components$addClassName = function (className) {
	return A2(
		_user$project$Components$addComponent,
		'className',
		_user$project$Components$ClassName(className));
};
var _user$project$Components$DisplayInformation = function (a) {
	return {ctor: 'DisplayInformation', _0: a};
};
var _user$project$Components$addLgDisplayInfo = F4(
	function (lgId, name, description, _p63) {
		var _p64 = _p63;
		var _p66 = _p64._1;
		var newDict = function () {
			var _p65 = A2(_elm_lang$core$Dict$get, 'displayInfo', _p66);
			if ((_p65.ctor === 'Just') && (_p65._0.ctor === 'DisplayInformation')) {
				return A3(
					_elm_lang$core$Dict$insert,
					lgId,
					{name: name, description: description},
					_p65._0._0);
			} else {
				return A3(
					_elm_lang$core$Dict$insert,
					lgId,
					{name: name, description: description},
					_elm_lang$core$Dict$empty);
			}
		}();
		return A3(
			_user$project$Components$addComponent,
			'displayInfo',
			_user$project$Components$DisplayInformation(newDict),
			{ctor: '_Tuple2', _0: _p64._0, _1: _p66});
	});
var _user$project$Components$addDisplayInfo = F3(
	function (name, description, _p67) {
		var _p68 = _p67;
		return A4(
			_user$project$Components$addLgDisplayInfo,
			'en',
			name,
			description,
			{ctor: '_Tuple2', _0: _p68._0, _1: _p68._1});
	});
var _user$project$Components$updateAllLgsDisplayName = F2(
	function (newNameStr, _p69) {
		var _p70 = _p69;
		var _p72 = _p70._1;
		var newDict = function () {
			var _p71 = A2(_elm_lang$core$Dict$get, 'displayInfo', _p72);
			if ((_p71.ctor === 'Just') && (_p71._0.ctor === 'DisplayInformation')) {
				return A2(
					_elm_lang$core$Dict$map,
					F2(
						function (key, val) {
							return _elm_lang$core$Native_Utils.update(
								val,
								{name: newNameStr});
						}),
					_p71._0._0);
			} else {
				return _elm_lang$core$Dict$empty;
			}
		}();
		return A3(
			_user$project$Components$addComponent,
			'displayInfo',
			_user$project$Components$DisplayInformation(newDict),
			{ctor: '_Tuple2', _0: _p70._0, _1: _p72});
	});
var _user$project$Components$West = {ctor: 'West'};
var _user$project$Components$East = {ctor: 'East'};
var _user$project$Components$SouthWest = {ctor: 'SouthWest'};
var _user$project$Components$SouthEast = {ctor: 'SouthEast'};
var _user$project$Components$South = {ctor: 'South'};
var _user$project$Components$NorthWest = {ctor: 'NorthWest'};
var _user$project$Components$NorthEast = {ctor: 'NorthEast'};
var _user$project$Components$North = {ctor: 'North'};
var _user$project$Components$bearingToDirection = function (angle) {
	return ((_elm_lang$core$Native_Utils.cmp(angle, 22.5) > -1) && (_elm_lang$core$Native_Utils.cmp(angle, 67.5) < 0)) ? _user$project$Components$NorthEast : (((_elm_lang$core$Native_Utils.cmp(angle, 67.5) > -1) && (_elm_lang$core$Native_Utils.cmp(angle, 112.5) < 0)) ? _user$project$Components$East : (((_elm_lang$core$Native_Utils.cmp(angle, 112.5) > -1) && (_elm_lang$core$Native_Utils.cmp(angle, 157.5) < 0)) ? _user$project$Components$SouthEast : (((_elm_lang$core$Native_Utils.cmp(angle, 157.5) > -1) && (_elm_lang$core$Native_Utils.cmp(angle, 202.5) < 0)) ? _user$project$Components$South : (((_elm_lang$core$Native_Utils.cmp(angle, 202.5) > -1) && (_elm_lang$core$Native_Utils.cmp(angle, 247.5) < 0)) ? _user$project$Components$SouthWest : (((_elm_lang$core$Native_Utils.cmp(angle, 247.5) > -1) && (_elm_lang$core$Native_Utils.cmp(angle, 292.5) < 0)) ? _user$project$Components$West : (((_elm_lang$core$Native_Utils.cmp(angle, 292.5) > -1) && (_elm_lang$core$Native_Utils.cmp(angle, 337.5) < 0)) ? _user$project$Components$NorthWest : _user$project$Components$North))))));
};

var _user$project$GpsUtils$calculateBearing = F2(
	function (_p1, _p0) {
		var _p2 = _p1;
		var _p3 = _p0;
		var latitude2 = _elm_lang$core$Basics$degrees(_p3._0);
		var latitude1 = _elm_lang$core$Basics$degrees(_p2._0);
		var longitude2 = _p3._1;
		var longitude1 = _p2._1;
		var longDiff = _elm_lang$core$Basics$degrees(longitude2 - longitude1);
		var y = _elm_lang$core$Basics$sin(longDiff) * _elm_lang$core$Basics$cos(latitude2);
		var x = (_elm_lang$core$Basics$cos(latitude1) * _elm_lang$core$Basics$sin(latitude2)) - ((_elm_lang$core$Basics$sin(latitude1) * _elm_lang$core$Basics$cos(latitude2)) * _elm_lang$core$Basics$cos(longDiff));
		var toDegrees = function (rad) {
			return (rad * 180) / _elm_lang$core$Basics$pi;
		};
		return function (x) {
			return A2(_elm_lang$core$Basics$rem, x, 360);
		}(
			_elm_lang$core$Basics$round(
				A2(
					F2(
						function (x, y) {
							return x + y;
						}),
					360,
					toDegrees(
						A2(_elm_lang$core$Basics$atan2, y, x)))));
	});
var _user$project$GpsUtils$calculateBearingsFromList = function (lcoords) {
	var calcBearingsHelper = function (lc) {
		var _p4 = lc;
		if (_p4.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: A2(
					_user$project$GpsUtils$calculateBearing,
					{ctor: '_Tuple2', _0: _p4._0._0._0, _1: _p4._0._0._1},
					{ctor: '_Tuple2', _0: _p4._0._1._0, _1: _p4._0._1._1}),
				_1: calcBearingsHelper(_p4._1)
			};
		}
	};
	var l1 = A2(
		_elm_lang$core$List$take,
		_elm_lang$core$List$length(lcoords) - 1,
		lcoords);
	var l2 = A2(_elm_lang$core$List$drop, 1, lcoords);
	var lzips = A2(_elm_community$list_extra$List_Extra$zip, l1, l2);
	return calcBearingsHelper(lzips);
};
var _user$project$GpsUtils$addRightZeros = F2(
	function (desiredlength, theStr) {
		addRightZeros:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$String$length(theStr),
				desiredlength) < 0) {
				var _v3 = desiredlength,
					_v4 = A2(_elm_lang$core$Basics_ops['++'], theStr, '0');
				desiredlength = _v3;
				theStr = _v4;
				continue addRightZeros;
			} else {
				return theStr;
			}
		}
	});
var _user$project$GpsUtils$roundit = F2(
	function (nrplaces, nr) {
		var intVal = _elm_lang$core$Basics$floor(nr);
		var strdecPlaces = A2(
			_user$project$GpsUtils$addRightZeros,
			3,
			_elm_lang$core$Basics$toString(
				_elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$round(
						(nr - _elm_lang$core$Basics$toFloat(intVal)) * _elm_lang$core$Basics$toFloat(
							Math.pow(10, nrplaces))))));
		var strintVal = _elm_lang$core$Basics$toString(intVal);
		return A2(
			_elm_lang$core$Basics_ops['++'],
			strintVal,
			A2(_elm_lang$core$Basics_ops['++'], '.', strdecPlaces));
	});
var _user$project$GpsUtils$addLeftZeros = F2(
	function (desiredlength, theStr) {
		addLeftZeros:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$String$length(theStr),
				desiredlength) < 0) {
				var _v5 = desiredlength,
					_v6 = A2(_elm_lang$core$Basics_ops['++'], '0', theStr);
				desiredlength = _v5;
				theStr = _v6;
				continue addLeftZeros;
			} else {
				return theStr;
			}
		}
	});
var _user$project$GpsUtils$convertDecimalToGps = F2(
	function (theStr, theVal) {
		var newVal = _elm_lang$core$Basics$abs(theVal);
		var deg = _elm_lang$core$Basics$floor(newVal);
		var strDeg = _elm_lang$core$Native_Utils.eq(theStr, 'longitude') ? A2(
			_user$project$GpsUtils$addLeftZeros,
			3,
			_elm_lang$core$Basics$toString(deg)) : _elm_lang$core$Basics$toString(deg);
		var minutes = (newVal - _elm_lang$core$Basics$toFloat(deg)) * 60;
		var charDir = (_elm_lang$core$Native_Utils.eq(theStr, 'latitude') && (_elm_lang$core$Native_Utils.cmp(theVal, 0) > -1)) ? 'N' : ((_elm_lang$core$Native_Utils.eq(theStr, 'longitude') && (_elm_lang$core$Native_Utils.cmp(theVal, 0) > -1)) ? 'E' : ((_elm_lang$core$Native_Utils.eq(theStr, 'latitude') && (_elm_lang$core$Native_Utils.cmp(theVal, 0) < 0)) ? 'S' : ((_elm_lang$core$Native_Utils.eq(theStr, 'longitude') && (_elm_lang$core$Native_Utils.cmp(theVal, 0) < 0)) ? 'W' : 'bad coordinate type')));
		var fstr = A2(
			_elm_lang$core$Basics_ops['++'],
			charDir,
			A2(
				_elm_lang$core$Basics_ops['++'],
				' ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					strDeg,
					A2(
						_elm_lang$core$Basics_ops['++'],
						'º ',
						A2(_user$project$GpsUtils$roundit, 3, minutes)))));
		return fstr;
	});
var _user$project$GpsUtils$convertDecimalTupleToGps = function (_p5) {
	var _p6 = _p5;
	var lon = A2(_user$project$GpsUtils$convertDecimalToGps, 'longitude', _p6._1);
	var lat = A2(_user$project$GpsUtils$convertDecimalToGps, 'latitude', _p6._0);
	var fstr = A2(
		_elm_lang$core$Basics_ops['++'],
		lat,
		A2(_elm_lang$core$Basics_ops['++'], ' , ', lon));
	return fstr;
};
var _user$project$GpsUtils$haversineInMeters = F2(
	function (_p8, _p7) {
		var _p9 = _p8;
		var _p12 = _p9._0;
		var _p10 = _p7;
		var _p11 = _p10._0;
		var dLon = _elm_lang$core$Basics$degrees(_p10._1 - _p9._1);
		var dLat = _elm_lang$core$Basics$degrees(_p11 - _p12);
		var a = Math.pow(
			_elm_lang$core$Basics$sin(dLat / 2),
			2) + ((Math.pow(
			_elm_lang$core$Basics$sin(dLon / 2),
			2) * _elm_lang$core$Basics$cos(
			_elm_lang$core$Basics$degrees(_p12))) * _elm_lang$core$Basics$cos(
			_elm_lang$core$Basics$degrees(_p11)));
		var r = 6372.8;
		return ((r * 2) * _elm_lang$core$Basics$asin(
			_elm_lang$core$Basics$sqrt(a))) * 1000;
	});
var _user$project$GpsUtils$getMbGpsZoneLatLon = function (mbGpsZone) {
	var _p13 = mbGpsZone;
	if (_p13.ctor === 'Just') {
		var _p14 = _p13._0;
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p14.lat, _1: _p14.lon});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$GpsUtils$checkIfInDistance = F3(
	function (mbGpsZone, theDistance, defaultDistance) {
		var _p15 = mbGpsZone;
		if (_p15.ctor === 'Nothing') {
			return true;
		} else {
			var _p16 = _p15._0.mbRadius;
			if (_p16.ctor === 'Just') {
				return (_elm_lang$core$Native_Utils.cmp(theDistance, _p16._0) < 1) ? true : false;
			} else {
				return (_elm_lang$core$Native_Utils.cmp(theDistance, defaultDistance) < 1) ? true : false;
			}
		}
	});
var _user$project$GpsUtils$getCurrentGeoLocationAsText = function (mbGeolocationInfo) {
	var _p17 = mbGeolocationInfo;
	if (_p17.ctor === 'Nothing') {
		return '\ngps info : not available ! ';
	} else {
		var _p18 = _p17._0;
		return _user$project$GpsUtils$convertDecimalTupleToGps(
			{ctor: '_Tuple2', _0: _p18.latitude, _1: _p18.longitude});
	}
};
var _user$project$GpsUtils$getTextDistancesFromListDistances = F2(
	function (nrdistances, ldistances) {
		return A2(
			_elm_lang$core$String$join,
			'  \n',
			A2(
				_elm_lang$core$List$take,
				nrdistances,
				A2(
					_elm_lang$core$List$map,
					function (_p19) {
						var _p20 = _p19;
						return A2(
							_elm_lang$core$Basics_ops['++'],
							' ___DISTANCE_TO___ ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p20._0,
								A2(
									_elm_lang$core$Basics_ops['++'],
									' ___IS___ ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_elm_lang$core$Basics$round(_p20._1)),
										' ___METERS___ '))));
					},
					ldistances)));
	});
var _user$project$GpsUtils$getCurrentGeoReportAsText = F4(
	function (currLocNameAndCoords, mbGeolocationInfo, lnameDistances, nrdistances) {
		return A2(
			_elm_lang$core$Basics_ops['++'],
			'  \n',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$GpsUtils$getCurrentGeoLocationAsText(mbGeolocationInfo),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'  \n',
					A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_user$project$GpsUtils$getTextDistancesFromListDistances, nrdistances, lnameDistances),
						A2(
							_elm_lang$core$Basics_ops['++'],
							'  \n',
							A2(
								_elm_lang$core$Basics_ops['++'],
								' ___center_coords_of_current_location___ ',
								A2(
									_elm_lang$core$Basics_ops['++'],
									'  \n',
									A2(
										_elm_lang$core$Maybe$withDefault,
										'',
										A2(
											_elm_lang$core$Maybe$map,
											function (_p21) {
												var _p22 = _p21;
												return _user$project$GpsUtils$convertDecimalTupleToGps(
													{ctor: '_Tuple2', _0: _p22._1, _1: _p22._2});
											},
											A2(_elm_lang$core$Dict$get, 'en', currLocNameAndCoords))))))))));
	});
var _user$project$GpsUtils$getDistanceTo = F2(
	function (location, _p23) {
		var _p24 = _p23;
		var theDistance = A2(
			_user$project$GpsUtils$haversineInMeters,
			{ctor: '_Tuple2', _0: location.latitude, _1: location.longitude},
			{ctor: '_Tuple2', _0: _p24._1, _1: _p24._2});
		return {ctor: '_Tuple2', _0: _p24._0, _1: theDistance};
	});
var _user$project$GpsUtils$getDistancesTo = F3(
	function (nrdistances, location, lmbnamecoordTuples) {
		return A2(
			_elm_lang$core$List$sortBy,
			function (x) {
				return _elm_lang$core$Tuple$second(x);
			},
			A2(
				_elm_lang$core$List$filter,
				function (_p25) {
					var _p26 = _p25;
					return _elm_lang$core$Native_Utils.cmp(_p26._1, 0) > -1;
				},
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Maybe$withDefault(
						{ctor: '_Tuple2', _0: '', _1: -999999}),
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Maybe$map(
							function (x) {
								return A2(_user$project$GpsUtils$getDistanceTo, location, x);
							}),
						lmbnamecoordTuples))));
	});
var _user$project$GpsUtils$getDistancesToAsText = F3(
	function (nrdistances, location, lmbnamecoordTuples) {
		return A2(
			_user$project$GpsUtils$getTextDistancesFromListDistances,
			nrdistances,
			A3(_user$project$GpsUtils$getDistancesTo, nrdistances, location, lmbnamecoordTuples));
	});
var _user$project$GpsUtils$getDistance = F2(
	function (location, mbGpsZone) {
		var _p27 = mbGpsZone;
		if (_p27.ctor === 'Nothing') {
			return 0.0;
		} else {
			var _p29 = _p27._0;
			var _p28 = _p29.needsToBeIn;
			if (_p28 === true) {
				return A2(
					_user$project$GpsUtils$haversineInMeters,
					{ctor: '_Tuple2', _0: location.latitude, _1: location.longitude},
					{ctor: '_Tuple2', _0: _p29.lat, _1: _p29.lon});
			} else {
				return 0.0;
			}
		}
	});

var _user$project$OurStory2_Narrative$gameHasEndedEn = {
	ctor: '::',
	_0: '\nGame has Ended ! You can take a look at your inventory items ( but game has ended ) ! Have Fun !\n      ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$gameHasEnded = {
	ctor: '::',
	_0: '\nEste jogo acabou ! Podes consultar todos os items no teu inventário ,\nmas o jogo chegou ao fim ! Diverte-te !\n      ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$gameHasEndedDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: _user$project$OurStory2_Narrative$gameHasEnded},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: _user$project$OurStory2_Narrative$gameHasEndedEn},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$creditsInformation = {
	ctor: '::',
	_0: '\n### Location Info : ###\nhttp://www.parquesdesintra.pt/\n\n\n### Elm Narrative Engine : ###\n\nJeff Schomay\n( that in no way endorses this particular extension or narrative)\n\n\n\n### extensions to the Narrative Engine : ###\n\nNuno Torres\n\n\n\n### Game-Narrative ###\n\nNuno Torres\n\n    ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$theCreditsInformationDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: _user$project$OurStory2_Narrative$creditsInformation},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: _user$project$OurStory2_Narrative$creditsInformation},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$interactingWithFinalPaperEn = {
	ctor: '::',
	_0: '\nCongratulations ! You overcome all challenges.\nYou will find a nice surprise located at ...\n\n Game has ended !\n     ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$interactingWithFinalPaperPt = {
	ctor: '::',
	_0: '\nParabéns ! Superaste todos os desafios propostos.\nEncontarás uma agradável surpresa em ...\n\n O jogo chegou ao fim !\n      ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$interactingWithFinalPaperDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: _user$project$OurStory2_Narrative$interactingWithFinalPaperPt},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: _user$project$OurStory2_Narrative$interactingWithFinalPaperEn},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$goodNewsMessageAfterAllQuestionsAnsweredEn = '\nAll questions have been answered . Look for an old paper in last stage ...\n       ';
var _user$project$OurStory2_Narrative$goodNewsMessageAfterAllQuestionsAnsweredPt = '\nRespondeste a todas as perguntas ... Procura o papiro no ultimo nivel\n       ';
var _user$project$OurStory2_Narrative$goodNewsMessageAfterAllQuestionsAnsweredDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: _user$project$OurStory2_Narrative$goodNewsMessageAfterAllQuestionsAnsweredPt},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: _user$project$OurStory2_Narrative$goodNewsMessageAfterAllQuestionsAnsweredEn},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$lookAtGpsEn = {
	ctor: '::',
	_0: '\nYou look at your gps receiver device :\n    ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$lookAtGps = {
	ctor: '::',
	_0: '\nConsultas o aparelho receptor de gps :\n    ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$lookAtGpsDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: _user$project$OurStory2_Narrative$lookAtGps},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: _user$project$OurStory2_Narrative$lookAtGpsEn},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$takeGpsEn = {
	ctor: '::',
	_0: '\nYou carefully pick up and store the gps receiver !\n     ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$takeGps = {
	ctor: '::',
	_0: 'Guardas cuidadosamente o Gps ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$takeGpsDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: _user$project$OurStory2_Narrative$takeGps},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: _user$project$OurStory2_Narrative$takeGpsEn},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$additionalStageInfoAfterAllQuestionsAnsweredDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: 'Todas as questões foram respondidas. Dirige-te para o ultimo nivel ... '},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: 'All questions have been answered. Now move to the last stage ... '},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$additionalStageInfoAfterQuestionAnsweredDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: 'A questão deste nivel já está respondida ... '},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: 'question on this stage is already  answered ... '},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$theStagesDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: {ctor: '_Tuple2', _0: 1, _1: 'pt'},
			_1: {
				stageNarrative: {
					ctor: '::',
					_0: '\n![pic500](img/entradaVilaSassetti.png)\n\nEstás na bonita Vila de Sintra próximo da entrada do percurso pedestre\nda Vila Sassetti ( Quinta da Amizade ) ...\n\n\"Este percurso pedestre permite o acesso ao Palácio Nacional da Pena e ao Castelo dos Mouros, desde o Centro Histórico de Sintra.\n\nA Vila Sassetti está integrada na Paisagem Cultural de Sintra, classificada como Património da Humanidade pela UNESCO.\n\nO jardim, concebido pelo arquiteto Luigi Manini, procura obedecer a uma estética naturalista, sendo estruturado por um caminho sinuoso que é atravessado por uma linha de água artificial. O jardim expressa a relação de harmonia entre a arquitetura e a paisagem, que assim parecem fundir-se naturalmente.\"\n\n![pic500](img/entradaVilaSassetti2.png)\n\n![pic500](img/entradaVilaSassetti3.png)\n            ',
					_1: {ctor: '[]'}
				},
				stageName: 'Stage 1 - Inicio '
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: {ctor: '_Tuple2', _0: 1, _1: 'en'},
				_1: {
					stageNarrative: {
						ctor: '::',
						_0: '\n![pic500](img/entradaVilaSassetti.png)\n\nYou are in the beautiful village of Sintra near the start of Vila Sassetti Pedestrian Footpath ...\n\n\"The Footpath  provides access to the National Palace of Pena and the Moorish Castle from the Historical Centre of Sintra.\n\nVilla Sassetti is integrated into the Cultural Landscape of Sintra, classified as UNESCO World Heritage.\n\nThe garden, designed by the architect Luigi Manini, strives to obey a naturalist aesthetic structured around a twisting pathway criss-crossed by an artificial watercourse. The garden expresses the harmonious relationship between architecture and the landscape that seem able to naturally merge into each other. \"\n\n![pic500](img/entradaVilaSassetti2.png)\n\n![pic500](img/entradaVilaSassetti3.png)\n    ',
						_1: {ctor: '[]'}
					},
					stageName: 'Stage 1 - Start'
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: {ctor: '_Tuple2', _0: 2, _1: 'pt'},
					_1: {
						stageNarrative: {
							ctor: '::',
							_0: '\n![pic500](img/largo.png)\n\nEstás agora num pequeno largo ... À esquerda ( de quem sobe ) é possível observar um extenso banco com vários pequenos azulejos\ne à direita ( de quem sobe ) é possível observar uma espécie de trono\n\n![pic500](img/largo2.png)\n\n          ',
							_1: {ctor: '[]'}
						},
						stageName: 'Stage 2 - o largo '
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: {ctor: '_Tuple2', _0: 2, _1: 'en'},
						_1: {
							stageNarrative: {
								ctor: '::',
								_0: '\n![pic500](img/largo.png)\n\nyou are now on a small round space ... To the left ( when going up ) one can observe a large bank with several small tiles\nand to the right ( when going up ) one can observe a sort of throne chair ...\n\n![pic500](img/largo2.png)\n\n          ',
								_1: {ctor: '[]'}
							},
							stageName: 'Stage 2'
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: {ctor: '_Tuple2', _0: 3, _1: 'pt'},
							_1: {
								stageNarrative: {
									ctor: '::',
									_0: '\n![pic500](img/arcadas.png)\n          ',
									_1: {ctor: '[]'}
								},
								stageName: 'Stage 3 - o corredor'
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: {ctor: '_Tuple2', _0: 3, _1: 'en'},
								_1: {
									stageNarrative: {
										ctor: '::',
										_0: '\n![pic500](img/arcadas.png)\n          ',
										_1: {ctor: '[]'}
									},
									stageName: 'Stage 3 - corridor '
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: {ctor: '_Tuple2', _0: 4, _1: 'pt'},
									_1: {
										stageNarrative: {
											ctor: '::',
											_0: 'Estás agora junto ao Edifício Principal ...\n\n![pic500](img/casaPrincipal.png)\n\n\" O edifício principal distingue-se pela torre circular central de três pisos ,\na partir da qual se estendem outros corpos de geometria variável\n, empregando o granito de Sintra como revestimento exterior principal\n, as faixas de terracota características do estilo Românico Lombardo e diversas\npeças da coleção de antiquária do comitente \"\n\n![pic500](img/casaPrincipalRelogio.png)\n            ',
											_1: {ctor: '[]'}
										},
										stageName: 'Stage 4 - Edificio Principal'
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: {ctor: '_Tuple2', _0: 4, _1: 'en'},
										_1: {
											stageNarrative: {
												ctor: '::',
												_0: 'You are now next to the Main Building ...\n\n![pic500](img/casaPrincipal.png)\n\n\"The main building stands out for its central circular tower spanning three storeys\n, out of which extend other constructions with variable geometries\n, applying Sintra granite as the main exterior finishing material with rows of terracotta\ncharacteristic of the Lombard Romanesque\n, alongside diverse pieces from the antiques collection of the owner\"\n\n![pic500](img/casaPrincipalRelogio.png)\n          ',
												_1: {ctor: '[]'}
											},
											stageName: 'Stage 4 - Main Building'
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: {ctor: '_Tuple2', _0: 5, _1: 'pt'},
											_1: {
												stageNarrative: {
													ctor: '::',
													_0: 'Estás agora em 5 ... À tua volta vês ...\n\n![pic500](img/camelliaJaponica.png)\n            ',
													_1: {ctor: '[]'}
												},
												stageName: 'Stage 5 - a Planta'
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: {ctor: '_Tuple2', _0: 5, _1: 'en'},
												_1: {
													stageNarrative: {
														ctor: '::',
														_0: 'You are now in stage 5 ... You look around and see ...\n\n![pic500](img/camelliaJaponica.png)\n            ',
														_1: {ctor: '[]'}
													},
													stageName: 'Stage 5 - the Plant'
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: {ctor: '_Tuple2', _0: 6, _1: 'pt'},
													_1: {
														stageNarrative: {
															ctor: '::',
															_0: 'reparas que estás junto a uma enigmática cadeira ...\n\n![pic500](img/cadeira.png)\n            ',
															_1: {ctor: '[]'}
														},
														stageName: 'Stage 6 - a cadeira'
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: {ctor: '_Tuple2', _0: 6, _1: 'en'},
														_1: {
															stageNarrative: {
																ctor: '::',
																_0: 'You notice an enigmatic chair right next to you\n![pic500](img/cadeira.png)\n            ',
																_1: {ctor: '[]'}
															},
															stageName: 'Stage 6 - the Chair'
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: {ctor: '_Tuple2', _0: 7, _1: 'pt'},
															_1: {
																stageNarrative: {
																	ctor: '::',
																	_0: '\n![pic500](img/rochedo1.png)\n\n![pic500](img/rochedo2.png)\n          ',
																	_1: {ctor: '[]'}
																},
																stageName: 'Stage 7 - o Rochedo'
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: {ctor: '_Tuple2', _0: 7, _1: 'en'},
																_1: {
																	stageNarrative: {
																		ctor: '::',
																		_0: '\n![pic500](img/rochedo1.png)\n\n![pic500](img/rochedo2.png)\n          ',
																		_1: {ctor: '[]'}
																	},
																	stageName: 'Stage 7 - the Rock'
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: {ctor: '_Tuple2', _0: 8, _1: 'pt'},
																	_1: {
																		stageNarrative: {
																			ctor: '::',
																			_0: '\n![pic500](img/portaSaida_.png)\n\n![pic500](img/placardProximoSaida1.png)\n             ',
																			_1: {ctor: '[]'}
																		},
																		stageName: 'Stage 8 - placard informativo'
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: {ctor: '_Tuple2', _0: 8, _1: 'en'},
																		_1: {
																			stageNarrative: {
																				ctor: '::',
																				_0: '\n![pic500](img/portaSaida_.png)\n\n![pic500](img/placardProximoSaida1.png)\n          ',
																				_1: {ctor: '[]'}
																			},
																			stageName: 'Stage 8 - info'
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: {ctor: '_Tuple2', _0: 9, _1: 'pt'},
																			_1: {
																				stageNarrative: {
																					ctor: '::',
																					_0: 'Estás agora junto a um topoguia sobre as vias de escalada do Penedo da Amizade\n\n![pic500](img/viasPenedoDaAmizade.png)\n          ',
																					_1: {ctor: '[]'}
																				},
																				stageName: 'Stage 9 - Topoguia'
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: {ctor: '_Tuple2', _0: 9, _1: 'en'},
																				_1: {
																					stageNarrative: {
																						ctor: '::',
																						_0: 'You are now next to a rock climbing guide that presents some info about Penedo da Amizade climbing routes\n\n![pic500](img/viasPenedoDaAmizade.png)\n          ',
																						_1: {ctor: '[]'}
																					},
																					stageName: 'Stage 9 - Rock climbing guide'
																				}
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: {ctor: '_Tuple2', _0: 10, _1: 'pt'},
																					_1: {
																						stageNarrative: {
																							ctor: '::',
																							_0: 'Passaste pela  última porta e encontras-te agora no Penedo da Amizade ...\n\n![pic500](img/portaSaida.png)\n\nÀ tua esquerda encontra-se um placard informativo com distâncias relativamente a alguns pontos de interesse\n\n![pic500](img/placardProximoSaidaDistancias.png)\n          ',
																							_1: {ctor: '[]'}
																						},
																						stageName: 'Stage 10 - Penedo da Amizade'
																					}
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: {ctor: '_Tuple2', _0: 10, _1: 'en'},
																						_1: {
																							stageNarrative: {
																								ctor: '::',
																								_0: 'You\'ve gone through the last door and are now in Penedo da Amizade ...\n\n![pic500](img/portaSaida.png)\n\nTo your left there\'s info on distances to some Points of Interest\n\n![pic500](img/placardProximoSaidaDistancias.png)\n          ',
																								_1: {ctor: '[]'}
																							},
																							stageName: 'Stage 10 - Penedo da Amizade'
																						}
																					},
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _user$project$OurStory2_Narrative$getTheStageInfo = F2(
	function (stageNr, languageId) {
		return A2(
			_elm_lang$core$Dict$get,
			{ctor: '_Tuple2', _0: stageNr, _1: languageId},
			_user$project$OurStory2_Narrative$theStagesDict);
	});
var _user$project$OurStory2_Narrative$getStageName = F2(
	function (stageNr, languageId) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			A2(
				_elm_lang$core$Basics_ops['++'],
				'Stage ',
				_elm_lang$core$Basics$toString(stageNr)),
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.stageName;
				},
				A2(_user$project$OurStory2_Narrative$getTheStageInfo, stageNr, languageId)));
	});
var _user$project$OurStory2_Narrative$getStageRecord = F2(
	function (stageNr, lgId) {
		var getEnteringFromHigherStage = _elm_lang$core$Native_Utils.eq(lgId, 'pt') ? 'Para terminar o percurso deves seguir na direcção oposta' : 'To finish the course you should move in the opposite direction';
		var getWithoutPreviousAnswered = _elm_lang$core$Native_Utils.eq(lgId, 'pt') ? {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'Deves responder à pergunta da etapa ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(stageNr - 1),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' antes de entrar na etapa ',
						_elm_lang$core$Basics$toString(stageNr)))),
			_1: {ctor: '[]'}
		} : {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Basics_ops['++'],
				'You have to answer stage ',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(stageNr - 1),
					A2(
						_elm_lang$core$Basics_ops['++'],
						' question ',
						A2(
							_elm_lang$core$Basics_ops['++'],
							' before being allowed in stage ',
							_elm_lang$core$Basics$toString(stageNr))))),
			_1: {ctor: '[]'}
		};
		var theStageDescription = A2(
			_elm_lang$core$Maybe$map,
			function (_) {
				return _.stageNarrative;
			},
			A2(_user$project$OurStory2_Narrative$getTheStageInfo, stageNr, lgId));
		var mbStandardQuestionRecord = function () {
			var _p0 = theStageDescription;
			if (_p0.ctor === 'Just') {
				var _p1 = _p0._0;
				return _elm_lang$core$Maybe$Just(
					{
						withoutPreviousAnswered: getWithoutPreviousAnswered,
						defaultStageDescription: _p1,
						enteringFromHigherStage: A2(
							_elm_lang$core$List$map,
							function (x) {
								return A2(
									_elm_lang$core$Basics_ops['++'],
									getEnteringFromHigherStage,
									A2(_elm_lang$core$Basics_ops['++'], '  \n', x));
							},
							_p1),
						noQuestionOrNotMandatory: _p1
					});
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}();
		return mbStandardQuestionRecord;
	});
var _user$project$OurStory2_Narrative$interactingWithStageN = F3(
	function (stageNr, lgId, fieldStr) {
		var theRec = A2(
			_elm_lang$core$Maybe$withDefault,
			{
				withoutPreviousAnswered: {
					ctor: '::',
					_0: '',
					_1: {ctor: '[]'}
				},
				defaultStageDescription: {
					ctor: '::',
					_0: '',
					_1: {ctor: '[]'}
				},
				enteringFromHigherStage: {
					ctor: '::',
					_0: '',
					_1: {ctor: '[]'}
				},
				noQuestionOrNotMandatory: {
					ctor: '::',
					_0: '',
					_1: {ctor: '[]'}
				}
			},
			A2(_user$project$OurStory2_Narrative$getStageRecord, stageNr, lgId));
		var theLString = _elm_lang$core$Native_Utils.eq(fieldStr, 'withoutPreviousAnswered') ? theRec.withoutPreviousAnswered : (_elm_lang$core$Native_Utils.eq(fieldStr, 'defaultStageDescription') ? theRec.defaultStageDescription : (_elm_lang$core$Native_Utils.eq(fieldStr, 'enteringFromHigherStage') ? theRec.enteringFromHigherStage : theRec.noQuestionOrNotMandatory));
		return theLString;
	});
var _user$project$OurStory2_Narrative$interactingWithStageNDict = F2(
	function (n, fieldStr) {
		return _elm_lang$core$Dict$fromList(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'pt',
					_1: A3(_user$project$OurStory2_Narrative$interactingWithStageN, n, 'pt', fieldStr)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'en',
						_1: A3(_user$project$OurStory2_Narrative$interactingWithStageN, n, 'en', fieldStr)
					},
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$OurStory2_Narrative$getQuestionsMaxNrTries = function (questionNr) {
	var dictMaxTries = _elm_lang$core$Dict$fromList(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 1,
				_1: _elm_lang$core$Maybe$Just(5)
			},
			_1: {
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 2, _1: _elm_lang$core$Maybe$Nothing},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 3,
						_1: _elm_lang$core$Maybe$Just(5)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 4,
							_1: _elm_lang$core$Maybe$Just(5)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 5,
								_1: _elm_lang$core$Maybe$Just(5)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 6,
									_1: _elm_lang$core$Maybe$Just(5)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 7,
										_1: _elm_lang$core$Maybe$Just(5)
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 8,
											_1: _elm_lang$core$Maybe$Just(5)
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 9,
												_1: _elm_lang$core$Maybe$Just(5)
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 10,
													_1: _elm_lang$core$Maybe$Just(5)
												},
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
	return A2(
		_elm_lang$core$Maybe$withDefault,
		_elm_lang$core$Maybe$Nothing,
		A2(_elm_lang$core$Dict$get, questionNr, dictMaxTries));
};
var _user$project$OurStory2_Narrative$theQuestionsDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: {ctor: '_Tuple2', _0: 1, _1: 'pt'},
			_1: {
				questionBody: 'Próximo da entrada da Vila Sassetti está também a entrada para um outro Parque. De que parque se trata ?',
				questionName: 'questão 1',
				additionalTextIfCorrectAnswer: 'Muito Bem ! A entrada do parque das merendas fica de facto ao lado da entrada para Vila Sassetti !\n              ',
				additionalTextIfIncorrectAnswer: '',
				availableChoices: {ctor: '[]'},
				questionAnswers: {
					ctor: '::',
					_0: 'Parque das Merendas',
					_1: {
						ctor: '::',
						_0: 'Merendas',
						_1: {ctor: '[]'}
					}
				}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: {ctor: '_Tuple2', _0: 1, _1: 'en'},
				_1: {
					questionBody: 'Near the entrance of Vila Sassetti is also the entrance to another Park . What\'s that Park ? ',
					questionName: 'question 1',
					additionalTextIfCorrectAnswer: 'Well Done ! The entrance to Parque das Merendas is located right next to the entrance to Vila Sassetti !\n\n![pic500](img/parqueDasMerendas.png)\n              ',
					additionalTextIfIncorrectAnswer: '',
					availableChoices: {ctor: '[]'},
					questionAnswers: {ctor: '[]'}
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: {ctor: '_Tuple2', _0: 2, _1: 'pt'},
					_1: {
						questionBody: 'quantos azulejos observas no maior banco  ?',
						questionName: 'questão 2',
						additionalTextIfCorrectAnswer: '',
						additionalTextIfIncorrectAnswer: 'Vá lá ... Não é uma pergunta difícil ! ',
						availableChoices: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: '18', _1: 'Dezoito (18)'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: '19', _1: 'Dezanove (19)'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: '20', _1: 'Vinte (20)'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: '21', _1: 'Vinte e um (21)'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '22', _1: 'Vinte e dois (22)'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '23', _1: 'Vinte e três (23)'},
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						},
						questionAnswers: {
							ctor: '::',
							_0: '21',
							_1: {
								ctor: '::',
								_0: 'vinte e um',
								_1: {ctor: '[]'}
							}
						}
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: {ctor: '_Tuple2', _0: 2, _1: 'en'},
						_1: {
							questionBody: 'How many tiles do you see on the biggest seat  ?',
							questionName: 'question 2',
							additionalTextIfCorrectAnswer: '',
							additionalTextIfIncorrectAnswer: 'Come on ... That\'s is not a tough question ! ',
							availableChoices: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: '18', _1: 'Eighteen (18)'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: '19', _1: 'Nineteen (19)'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: '20', _1: 'Twenty (20)'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '21', _1: 'Twenty One (21)'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '22', _1: 'Twenty Two (22)'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '23', _1: 'Twenty Three (23)'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '24', _1: 'Twenty Four (24)'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: '25', _1: 'Twenty Five (25)'},
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							},
							questionAnswers: {
								ctor: '::',
								_0: 'twenty one',
								_1: {ctor: '[]'}
							}
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: {ctor: '_Tuple2', _0: 3, _1: 'pt'},
							_1: {
								questionBody: 'Quantos pilares consegues contar até ao placard que indica \"Casa do Caseiro , Casa Principal , etc ...\" ',
								questionName: 'questão 3',
								additionalTextIfCorrectAnswer: '',
								additionalTextIfIncorrectAnswer: '',
								availableChoices: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: '9', _1: 'Nove (9)'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: '11', _1: 'Onze (11)'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '13', _1: 'Treze (13)'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '15', _1: 'Quinze (15)'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '17', _1: 'Dezassete (17)'},
													_1: {ctor: '[]'}
												}
											}
										}
									}
								},
								questionAnswers: {
									ctor: '::',
									_0: '15',
									_1: {
										ctor: '::',
										_0: 'quinze',
										_1: {ctor: '[]'}
									}
								}
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: {ctor: '_Tuple2', _0: 3, _1: 'en'},
								_1: {
									questionBody: 'How many pillars can you count from here to the placard with \"Casa do Caseiro , Casa Principal , etc ...\" written on it ',
									questionName: 'question 3',
									additionalTextIfCorrectAnswer: '',
									additionalTextIfIncorrectAnswer: '',
									availableChoices: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: '9', _1: 'Nine (9)'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '11', _1: 'Eleven (11)'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '13', _1: 'Thirteen (13)'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '15', _1: 'Fifteen (15)'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '17', _1: 'Seventeen (17)'},
														_1: {ctor: '[]'}
													}
												}
											}
										}
									},
									questionAnswers: {
										ctor: '::',
										_0: 'fifteen',
										_1: {ctor: '[]'}
									}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: {ctor: '_Tuple2', _0: 4, _1: 'pt'},
									_1: {
										questionBody: 'O relógio de sol indica de que horas a que horas (ex: 9 a 10)?',
										questionName: 'questão 4',
										additionalTextIfCorrectAnswer: '',
										additionalTextIfIncorrectAnswer: '',
										availableChoices: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: '1 a 12', _1: '1 a 12'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '8 a 12', _1: '8 a 12'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '1 a 8', _1: '1 a 8'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '8 a 4', _1: '8 a 4'},
														_1: {ctor: '[]'}
													}
												}
											}
										},
										questionAnswers: {
											ctor: '::',
											_0: '8 a 4',
											_1: {
												ctor: '::',
												_0: '8 as 4',
												_1: {
													ctor: '::',
													_0: '8-4',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: {ctor: '_Tuple2', _0: 4, _1: 'en'},
										_1: {
											questionBody: 'The sun clock tells the time from what hour of the day to what hour (ex: 9 to 10)?',
											questionName: 'question 4',
											additionalTextIfCorrectAnswer: '',
											additionalTextIfIncorrectAnswer: '',
											availableChoices: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: '1 to 12', _1: '1 to 12'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: '8 to 12', _1: '8 to 12'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: '1 to 8', _1: '1 to 8'},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: '8 to 4', _1: '8 to 4'},
															_1: {ctor: '[]'}
														}
													}
												}
											},
											questionAnswers: {
												ctor: '::',
												_0: '8 to 4',
												_1: {ctor: '[]'}
											}
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: {ctor: '_Tuple2', _0: 5, _1: 'pt'},
											_1: {
												questionBody: 'Qual o nome da planta que se encontra indicado ?',
												questionName: 'questão 5',
												additionalTextIfCorrectAnswer: '',
												additionalTextIfIncorrectAnswer: '',
												availableChoices: {ctor: '[]'},
												questionAnswers: {
													ctor: '::',
													_0: 'Camellia Japonica',
													_1: {
														ctor: '::',
														_0: 'Camellia Japonica L.',
														_1: {
															ctor: '::',
															_0: 'THEACEAE',
															_1: {ctor: '[]'}
														}
													}
												}
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: {ctor: '_Tuple2', _0: 5, _1: 'en'},
												_1: {
													questionBody: 'What\'s the name of the plant ( written on the sign ) ?',
													questionName: 'question 5',
													additionalTextIfCorrectAnswer: '',
													additionalTextIfIncorrectAnswer: '',
													availableChoices: {ctor: '[]'},
													questionAnswers: {ctor: '[]'}
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: {ctor: '_Tuple2', _0: 6, _1: 'pt'},
													_1: {
														questionBody: 'Parece-te uma cadeira confortável ?',
														questionName: 'questão 6',
														additionalTextIfCorrectAnswer: '',
														additionalTextIfIncorrectAnswer: '',
														availableChoices: {ctor: '[]'},
														questionAnswers: {
															ctor: '::',
															_0: 'sim',
															_1: {
																ctor: '::',
																_0: 'não',
																_1: {
																	ctor: '::',
																	_0: 'nao',
																	_1: {ctor: '[]'}
																}
															}
														}
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: {ctor: '_Tuple2', _0: 6, _1: 'en'},
														_1: {
															questionBody: 'Does it seem like a comfortable chair  ?',
															questionName: 'question 6',
															additionalTextIfCorrectAnswer: '',
															additionalTextIfIncorrectAnswer: '',
															availableChoices: {ctor: '[]'},
															questionAnswers: {
																ctor: '::',
																_0: 'yes',
																_1: {
																	ctor: '::',
																	_0: 'no',
																	_1: {ctor: '[]'}
																}
															}
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: {ctor: '_Tuple2', _0: 7, _1: 'pt'},
															_1: {
																questionBody: 'Quantos troncos ( cortados ) podes observar junto ao rochedo ?',
																questionName: 'questão 7',
																additionalTextIfCorrectAnswer: '',
																additionalTextIfIncorrectAnswer: '',
																availableChoices: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: '2', _1: 'Dois (2)'},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: '3', _1: 'Tres (3)'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: '4', _1: 'Quatro (4)'},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: '5', _1: 'Cinco (5)'},
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																},
																questionAnswers: {
																	ctor: '::',
																	_0: '2',
																	_1: {
																		ctor: '::',
																		_0: 'dois',
																		_1: {
																			ctor: '::',
																			_0: 'Dois',
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: {ctor: '_Tuple2', _0: 7, _1: 'en'},
																_1: {
																	questionBody: 'how many ( chopped ) logs can you see near the big rock',
																	questionName: 'question 7',
																	additionalTextIfCorrectAnswer: '',
																	additionalTextIfIncorrectAnswer: '',
																	availableChoices: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: '2', _1: 'Two (2)'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: '3', _1: 'Three (3)'},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: '4', _1: 'Four (4)'},
																				_1: {
																					ctor: '::',
																					_0: {ctor: '_Tuple2', _0: '5', _1: 'Five (5)'},
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	},
																	questionAnswers: {
																		ctor: '::',
																		_0: 'two',
																		_1: {
																			ctor: '::',
																			_0: 'Two',
																			_1: {ctor: '[]'}
																		}
																	}
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: {ctor: '_Tuple2', _0: 8, _1: 'pt'},
																	_1: {
																		questionBody: 'Qual a distância indicada ( em metros ) para o Penedo da Amizade ?',
																		questionName: 'questão 8',
																		additionalTextIfCorrectAnswer: '',
																		additionalTextIfIncorrectAnswer: '',
																		availableChoices: {ctor: '[]'},
																		questionAnswers: {
																			ctor: '::',
																			_0: '115',
																			_1: {
																				ctor: '::',
																				_0: 'cento e quinze',
																				_1: {ctor: '[]'}
																			}
																		}
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: {ctor: '_Tuple2', _0: 8, _1: 'en'},
																		_1: {
																			questionBody: 'What\'s the distance ( in meters ) to Penedo da Amizade ( Cliff of Amizade ) shown on the sign  ?',
																			questionName: 'question 8',
																			additionalTextIfCorrectAnswer: '',
																			additionalTextIfIncorrectAnswer: '',
																			availableChoices: {ctor: '[]'},
																			questionAnswers: {
																				ctor: '::',
																				_0: 'hundred and fifteen',
																				_1: {ctor: '[]'}
																			}
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: {ctor: '_Tuple2', _0: 9, _1: 'pt'},
																			_1: {
																				questionBody: 'No topoguia informativo sobre as vias de escalada no Penedo da Amizade qual o Nome da via Nº 7 ?',
																				questionName: 'questão 9',
																				additionalTextIfCorrectAnswer: '',
																				additionalTextIfIncorrectAnswer: '',
																				availableChoices: {ctor: '[]'},
																				questionAnswers: {
																					ctor: '::',
																					_0: 'Funk da Serra',
																					_1: {ctor: '[]'}
																				}
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: {ctor: '_Tuple2', _0: 9, _1: 'en'},
																				_1: {
																					questionBody: 'What\'s the name of climbing route Nº 7 shown on  Penedo da Amizade Rock climbing guide  ?',
																					questionName: 'question 9',
																					additionalTextIfCorrectAnswer: '',
																					additionalTextIfIncorrectAnswer: '',
																					availableChoices: {ctor: '[]'},
																					questionAnswers: {ctor: '[]'}
																				}
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: {ctor: '_Tuple2', _0: 10, _1: 'pt'},
																					_1: {
																						questionBody: 'Logo após a porta de saída está um placard informativo. Qual a distância ( em metros ) para o Palácio da Pena ? ',
																						questionName: 'questão 10',
																						additionalTextIfCorrectAnswer: '',
																						additionalTextIfIncorrectAnswer: '',
																						availableChoices: {ctor: '[]'},
																						questionAnswers: {
																							ctor: '::',
																							_0: '495',
																							_1: {
																								ctor: '::',
																								_0: 'quatrocentos e noventa e cinco',
																								_1: {ctor: '[]'}
																							}
																						}
																					}
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: {ctor: '_Tuple2', _0: 10, _1: 'en'},
																						_1: {
																							questionBody: 'right after the door there\'s an informative sign. What\'s the distance ( in meters ) to Parque da Pena ( Park of Pena )  ?',
																							questionName: 'question 10',
																							additionalTextIfCorrectAnswer: '',
																							additionalTextIfIncorrectAnswer: '',
																							availableChoices: {ctor: '[]'},
																							questionAnswers: {
																								ctor: '::',
																								_0: 'four hundred and ninety five',
																								_1: {ctor: '[]'}
																							}
																						}
																					},
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _user$project$OurStory2_Narrative$getQuestionBody = F2(
	function (nr, lgId) {
		var questionsDict = _user$project$OurStory2_Narrative$theQuestionsDict;
		var question = A2(
			_elm_lang$core$Dict$get,
			{ctor: '_Tuple2', _0: nr, _1: lgId},
			questionsDict);
		return function (x) {
			var _p2 = x;
			if (_p2.ctor === 'Nothing') {
				return {ctor: '[]'};
			} else {
				return {
					ctor: '::',
					_0: _p2._0,
					_1: {ctor: '[]'}
				};
			}
		}(
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.questionBody;
				},
				question));
	});
var _user$project$OurStory2_Narrative$getQuestionBodyAsString = F2(
	function (nr, lgId) {
		return A2(
			_elm_lang$core$String$join,
			' , ',
			A2(_user$project$OurStory2_Narrative$getQuestionBody, nr, lgId));
	});
var _user$project$OurStory2_Narrative$interactingWithQuestion = F2(
	function (questionNr, lgId) {
		return A2(_user$project$OurStory2_Narrative$getQuestionBody, questionNr, lgId);
	});
var _user$project$OurStory2_Narrative$interactingWithQuestionNDict = function (nr) {
	return _elm_lang$core$Dict$fromList(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'pt',
				_1: A2(_user$project$OurStory2_Narrative$interactingWithQuestion, nr, 'pt')
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'en',
					_1: A2(_user$project$OurStory2_Narrative$interactingWithQuestion, nr, 'en')
				},
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$OurStory2_Narrative$getQuestionName = F2(
	function (nr, lgId) {
		var questionsDict = _user$project$OurStory2_Narrative$theQuestionsDict;
		var question = A2(
			_elm_lang$core$Dict$get,
			{ctor: '_Tuple2', _0: nr, _1: lgId},
			questionsDict);
		return function (x) {
			var _p3 = x;
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Native_Utils.eq(lgId, 'pt') ? A2(
					_elm_lang$core$Basics_ops['++'],
					'questão ',
					_elm_lang$core$Basics$toString(nr)) : A2(
					_elm_lang$core$Basics_ops['++'],
					'question ',
					_elm_lang$core$Basics$toString(nr));
			} else {
				return _p3._0;
			}
		}(
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.questionName;
				},
				question));
	});
var _user$project$OurStory2_Narrative$additionalTextIfAnswerCorrect = F2(
	function (questionNr, lgId) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.additionalTextIfCorrectAnswer;
				},
				A2(
					_elm_lang$core$Dict$get,
					{ctor: '_Tuple2', _0: questionNr, _1: lgId},
					_user$project$OurStory2_Narrative$theQuestionsDict)));
	});
var _user$project$OurStory2_Narrative$additionalTextIfAnswerCorrectDict = function (questionNr) {
	return _elm_lang$core$Dict$fromList(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'pt',
				_1: A2(_user$project$OurStory2_Narrative$additionalTextIfAnswerCorrect, questionNr, 'pt')
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'en',
					_1: A2(_user$project$OurStory2_Narrative$additionalTextIfAnswerCorrect, questionNr, 'en')
				},
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$OurStory2_Narrative$additionalTextIfAnswerIncorrect = F2(
	function (questionNr, lgId) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.additionalTextIfIncorrectAnswer;
				},
				A2(
					_elm_lang$core$Dict$get,
					{ctor: '_Tuple2', _0: questionNr, _1: lgId},
					_user$project$OurStory2_Narrative$theQuestionsDict)));
	});
var _user$project$OurStory2_Narrative$additionalTextIfAnswerIncorrectDict = function (questionNr) {
	return _elm_lang$core$Dict$fromList(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'pt',
				_1: A2(_user$project$OurStory2_Narrative$additionalTextIfAnswerIncorrect, questionNr, 'pt')
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'en',
					_1: A2(_user$project$OurStory2_Narrative$additionalTextIfAnswerIncorrect, questionNr, 'en')
				},
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$OurStory2_Narrative$interactingWithPlayerOneEn = {
	ctor: '::',
	_0: '\nlocal researching his neighbourhood\n      ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$interactingWithPlayerOne = {
	ctor: '::',
	_0: '\ndeterminado residente em investigação das redondezas ...\n      ',
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Narrative$interactingWithPlayerOneDict = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: _user$project$OurStory2_Narrative$interactingWithPlayerOne},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: _user$project$OurStory2_Narrative$interactingWithPlayerOneEn},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$startingNarrativeEn = {interactableName: 'Pedestrian Footpath...', interactableId: 'onceUponAtime', isWritable: false, interactableCssSelector: 'opening', narrative: 'On a shiny September day you find yourself in the magnificent Vila de Sintra\n             about to start Vila Sassetti ( Quinta da Amizade ) pedestrian footpath ...\n       ', mbAudio: _elm_lang$core$Maybe$Nothing, mbSuggestedInteractionId: _elm_lang$core$Maybe$Nothing, mbSuggestedInteractionName: _elm_lang$core$Maybe$Nothing, isLastInZipper: true};
var _user$project$OurStory2_Narrative$startingNarrative = {interactableName: 'Percurso Pedestre Vila Sassetti...', interactableId: 'onceUponAtime', isWritable: false, interactableCssSelector: 'opening', narrative: 'Num  dia luminoso de Setembro encontras-te na\n            bela Vila de Sintra prestes a iniciar o percurso pedestre de Vila Sassetti\n            ( Quinta da Amizade )\n         ', mbAudio: _elm_lang$core$Maybe$Nothing, mbSuggestedInteractionId: _elm_lang$core$Maybe$Nothing, mbSuggestedInteractionName: _elm_lang$core$Maybe$Nothing, isLastInZipper: true};
var _user$project$OurStory2_Narrative$startingNarratives = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'pt',
			_1: {
				ctor: '::',
				_0: _user$project$OurStory2_Narrative$startingNarrative,
				_1: {ctor: '[]'}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'en',
				_1: {
					ctor: '::',
					_0: _user$project$OurStory2_Narrative$startingNarrativeEn,
					_1: {ctor: '[]'}
				}
			},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$initialChoiceLanguages = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'pt', _1: 'portuguese'},
		_1: {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: 'en', _1: 'english'},
			_1: {ctor: '[]'}
		}
	});
var _user$project$OurStory2_Narrative$desiredLanguages = {
	ctor: '::',
	_0: 'pt',
	_1: {
		ctor: '::',
		_0: 'en',
		_1: {ctor: '[]'}
	}
};
var _user$project$OurStory2_Narrative$getQuestionAnswers = function (questionNr) {
	var questionsDict = _user$project$OurStory2_Narrative$theQuestionsDict;
	var getLgAnswers = F2(
		function (theQuestionNr, lgId) {
			return function (x) {
				var _p4 = x;
				if (_p4.ctor === 'Nothing') {
					return {ctor: '[]'};
				} else {
					return _p4._0;
				}
			}(
				A2(
					_elm_lang$core$Maybe$map,
					function (_) {
						return _.questionAnswers;
					},
					A2(
						_elm_lang$core$Dict$get,
						{ctor: '_Tuple2', _0: theQuestionNr, _1: lgId},
						questionsDict)));
		});
	var validAnswers = _elm_lang$core$Set$toList(
		_elm_lang$core$Set$fromList(
			_elm_lang$core$List$concat(
				A2(
					_elm_lang$core$List$map,
					function (lgId) {
						return A2(getLgAnswers, questionNr, lgId);
					},
					_user$project$OurStory2_Narrative$desiredLanguages))));
	return validAnswers;
};
var _user$project$OurStory2_Narrative$getQuestionAvailableChoicesDict = function (questionNr) {
	var questionsDict = _user$project$OurStory2_Narrative$theQuestionsDict;
	var getLgOptions = F2(
		function (questionNr, lgId) {
			return function (x) {
				var _p5 = x;
				if (_p5.ctor === 'Nothing') {
					return {ctor: '[]'};
				} else {
					return _p5._0;
				}
			}(
				A2(
					_elm_lang$core$Maybe$map,
					function (_) {
						return _.availableChoices;
					},
					A2(
						_elm_lang$core$Dict$get,
						{ctor: '_Tuple2', _0: questionNr, _1: lgId},
						questionsDict)));
		});
	var availableChoicesDict = A3(
		_elm_lang$core$List$foldl,
		F2(
			function (lgId, d) {
				return A3(
					_elm_lang$core$Dict$insert,
					lgId,
					A2(getLgOptions, questionNr, lgId),
					d);
			}),
		_elm_lang$core$Dict$empty,
		_user$project$OurStory2_Narrative$desiredLanguages);
	return availableChoicesDict;
};
var _user$project$OurStory2_Narrative$Question = F6(
	function (a, b, c, d, e, f) {
		return {questionBody: a, questionName: b, additionalTextIfCorrectAnswer: c, additionalTextIfIncorrectAnswer: d, availableChoices: e, questionAnswers: f};
	});

var _user$project$OurStory2_Rules$ruleWithQuasiChange = F3(
	function (id, ruleData, narratives) {
		return A2(
			_user$project$Components$addLanguageNarratives,
			narratives,
			A2(
				_user$project$Components$addRuleData,
				ruleData,
				_user$project$Components$entity(id)));
	});
var _user$project$OurStory2_Rules$rule = F3(
	function (id, ruleData, narratives) {
		return A2(
			_user$project$Components$addLanguageNarratives,
			narratives,
			A2(
				_user$project$Components$addRuleData,
				_user$project$Engine$completeTheRule(ruleData),
				_user$project$Components$entity(id)));
	});
var _user$project$OurStory2_Rules$ruleWithAudioContent = F4(
	function (id, ruleData, narratives, audiodict) {
		return A2(
			_user$project$Components$addAllLanguagesAudio,
			audiodict,
			A3(_user$project$OurStory2_Rules$rule, id, ruleData, narratives));
	});
var _user$project$OurStory2_Rules$lRulesInteractingWithGps = {
	ctor: '::',
	_0: A3(
		_user$project$OurStory2_Rules$rule,
		'taking gps',
		{
			interaction: _user$project$Engine$with('gps'),
			conditions: {
				ctor: '::',
				_0: A2(_user$project$Engine$characterIsInLocation, 'playerOne', 'stage1'),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Engine$itemIsInLocation, 'gps', 'stage1'),
					_1: {ctor: '[]'}
				}
			},
			changes: {
				ctor: '::',
				_0: _user$project$Engine$moveItemToInventory('gps'),
				_1: {ctor: '[]'}
			}
		},
		_user$project$OurStory2_Narrative$takeGpsDict),
	_1: {
		ctor: '::',
		_0: A3(
			_user$project$OurStory2_Rules$ruleWithQuasiChange,
			'looking at gps',
			{
				interaction: _user$project$Engine$with('gps'),
				conditions: {ctor: '[]'},
				changes: {ctor: '[]'},
				quasiChanges: {
					ctor: '::',
					_0: _user$project$Engine$write_GpsInfoToItem('gps'),
					_1: {ctor: '[]'}
				}
			},
			_user$project$OurStory2_Narrative$lookAtGpsDict),
		_1: {ctor: '[]'}
	}
};
var _user$project$OurStory2_Rules$lRulesInteractingWithCreditsInfo = {
	ctor: '::',
	_0: A3(
		_user$project$OurStory2_Rules$rule,
		'view creditsInfo',
		{
			interaction: _user$project$Engine$with('creditsInfo'),
			conditions: {ctor: '[]'},
			changes: {ctor: '[]'}
		},
		_user$project$OurStory2_Narrative$theCreditsInformationDict),
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Rules$lRuleGameHasEnded = {
	ctor: '::',
	_0: A3(
		_user$project$OurStory2_Rules$rule,
		'game has ended',
		{
			interaction: _user$project$Engine$withAnyLocationAnyCharacterAfterGameEnded,
			conditions: {
				ctor: '::',
				_0: A3(
					_user$project$Engine$attrValueIsEqualTo,
					_user$project$Engine$abool(true),
					'gameHasEnded',
					'gameStateItem'),
				_1: {ctor: '[]'}
			},
			changes: {
				ctor: '::',
				_0: A2(_user$project$Engine$endStory, 'notFreezingEnd', 'The End'),
				_1: {ctor: '[]'}
			}
		},
		_user$project$OurStory2_Narrative$gameHasEndedDict),
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Rules$backendAnswerCheckerUrl = 'http://127.0.0.1:5000/questions/';
var _user$project$OurStory2_Rules$getStageId = function (nr) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'stage',
		_elm_lang$core$Basics$toString(nr));
};
var _user$project$OurStory2_Rules$standardRuleMoveToNplusOneNotRestricted = function (stageNr) {
	var currLocationId = _elm_lang$core$Native_Utils.eq(stageNr, 0) ? 'onceUponAtime' : _user$project$OurStory2_Rules$getStageId(stageNr);
	return A3(
		_user$project$OurStory2_Rules$rule,
		A2(
			_elm_lang$core$Basics_ops['++'],
			'interacting with Stage ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(stageNr + 1),
				' from lower')),
		{
			interaction: _user$project$Engine$with(
				_user$project$OurStory2_Rules$getStageId(stageNr + 1)),
			conditions: {
				ctor: '::',
				_0: _user$project$Engine$currentLocationIs(currLocationId),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Engine$characterIsInLocation, 'playerOne', currLocationId),
					_1: {ctor: '[]'}
				}
			},
			changes: {
				ctor: '::',
				_0: _user$project$Engine$moveTo(
					_user$project$OurStory2_Rules$getStageId(stageNr + 1)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Engine$moveCharacterToLocation,
						'playerOne',
						_user$project$OurStory2_Rules$getStageId(stageNr + 1)),
					_1: {ctor: '[]'}
				}
			}
		},
		A2(_user$project$OurStory2_Narrative$interactingWithStageNDict, stageNr + 1, 'defaultStageDescription'));
};
var _user$project$OurStory2_Rules$standardRuleMoveToNminusOne = function (_p0) {
	var _p1 = _p0;
	var _p2 = _p1._0;
	var ntype = 'enteringFromHigherStage';
	return A3(
		_user$project$OurStory2_Rules$rule,
		A2(
			_elm_lang$core$Basics_ops['++'],
			'interacting with Stage ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p2 - 1),
				' from higher')),
		{
			interaction: _user$project$Engine$with(
				_user$project$OurStory2_Rules$getStageId(_p2 - 1)),
			conditions: {
				ctor: '::',
				_0: _user$project$Engine$currentLocationIs(
					_user$project$OurStory2_Rules$getStageId(_p2)),
				_1: {ctor: '[]'}
			},
			changes: {
				ctor: '::',
				_0: _user$project$Engine$moveTo(
					_user$project$OurStory2_Rules$getStageId(_p2 - 1)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Engine$moveCharacterToLocation,
						'playerOne',
						_user$project$OurStory2_Rules$getStageId(_p2 - 1)),
					_1: {ctor: '[]'}
				}
			}
		},
		A2(_user$project$OurStory2_Narrative$interactingWithStageNDict, _p2 - 1, ntype));
};
var _user$project$OurStory2_Rules$getQuestionId = function (nr) {
	return A2(
		_elm_lang$core$Basics_ops['++'],
		'question',
		_elm_lang$core$Basics$toString(nr));
};
var _user$project$OurStory2_Rules$makeQuestionsAmultiChoice = function (lquestionNrs) {
	var createForOneElem = function (questionNr) {
		return A2(
			_user$project$Engine$createAmultiChoice,
			_user$project$OurStory2_Narrative$getQuestionAvailableChoicesDict(questionNr),
			_user$project$OurStory2_Rules$getQuestionId(questionNr));
	};
	return A2(_elm_lang$core$List$map, createForOneElem, lquestionNrs);
};
var _user$project$OurStory2_Rules$standardRuleTryMoveToNplusOneAndFail = function (_p3) {
	var _p4 = _p3;
	var _p5 = _p4._0;
	return A3(
		_user$project$OurStory2_Rules$rule,
		A2(
			_elm_lang$core$Basics_ops['++'],
			'interacting with higher Stage ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p5 + 1),
				'  and failing because wrong answer')),
		{
			interaction: _user$project$Engine$with(
				_user$project$OurStory2_Rules$getStageId(_p5 + 1)),
			conditions: {
				ctor: '::',
				_0: _user$project$Engine$currentLocationIs(
					_user$project$OurStory2_Rules$getStageId(_p5)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Engine$characterIsInLocation,
						'playerOne',
						_user$project$OurStory2_Rules$getStageId(_p5)),
					_1: {
						ctor: '::',
						_0: _user$project$Engine$itemIsNotCorrectlyAnswered(
							_user$project$OurStory2_Rules$getQuestionId(_p4._1)),
						_1: {ctor: '[]'}
					}
				}
			},
			changes: {ctor: '[]'}
		},
		A2(_user$project$OurStory2_Narrative$interactingWithStageNDict, _p5 + 1, 'withoutPreviousAnswered'));
};
var _user$project$OurStory2_Rules$standardRuleMoveToNplusOneRestricted = function (_p6) {
	var _p7 = _p6;
	var _p8 = _p7._0;
	return A3(
		_user$project$OurStory2_Rules$rule,
		A2(
			_elm_lang$core$Basics_ops['++'],
			'interacting with Stage ',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(_p8 + 1),
				' from lower correct answer required')),
		{
			interaction: _user$project$Engine$with(
				_user$project$OurStory2_Rules$getStageId(_p8 + 1)),
			conditions: {
				ctor: '::',
				_0: _user$project$Engine$currentLocationIs(
					_user$project$OurStory2_Rules$getStageId(_p8)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Engine$characterIsInLocation,
						'playerOne',
						_user$project$OurStory2_Rules$getStageId(_p8)),
					_1: {
						ctor: '::',
						_0: _user$project$Engine$itemIsCorrectlyAnswered(
							_user$project$OurStory2_Rules$getQuestionId(_p7._1)),
						_1: {ctor: '[]'}
					}
				}
			},
			changes: {
				ctor: '::',
				_0: _user$project$Engine$moveTo(
					_user$project$OurStory2_Rules$getStageId(_p8 + 1)),
				_1: {
					ctor: '::',
					_0: A2(
						_user$project$Engine$moveCharacterToLocation,
						'playerOne',
						_user$project$OurStory2_Rules$getStageId(_p8 + 1)),
					_1: {ctor: '[]'}
				}
			}
		},
		A2(_user$project$OurStory2_Narrative$interactingWithStageNDict, _p8 + 1, 'defaultStageDescription'));
};
var _user$project$OurStory2_Rules$standardInteractionWithQuestionNr = function (questionNr) {
	var stageNr = questionNr;
	var correctAnswers = _user$project$OurStory2_Narrative$getQuestionAnswers(questionNr);
	return A3(
		_user$project$OurStory2_Rules$ruleWithQuasiChange,
		A2(
			_elm_lang$core$Basics_ops['++'],
			'view question',
			_elm_lang$core$Basics$toString(questionNr)),
		{
			interaction: _user$project$Engine$with(
				_user$project$OurStory2_Rules$getQuestionId(questionNr)),
			conditions: {ctor: '[]'},
			changes: {ctor: '[]'},
			quasiChanges: {
				ctor: '::',
				_0: A3(
					_user$project$Engine$check_IfAnswerCorrect,
					correctAnswers,
					A8(
						_user$project$Engine$checkAnswerData,
						_user$project$OurStory2_Narrative$getQuestionsMaxNrTries(questionNr),
						_user$project$Engine$caseInsensitiveAnswer,
						_user$project$Engine$answerSpacesDontMatter,
						true,
						_user$project$OurStory2_Narrative$additionalTextIfAnswerCorrectDict(questionNr),
						_user$project$OurStory2_Narrative$additionalTextIfAnswerIncorrectDict(questionNr),
						{ctor: '[]'},
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple3',
								_0: _user$project$OurStory2_Rules$getStageId(stageNr),
								_1: 'additionalTextDict',
								_2: _user$project$Engine$aDictStringString(_user$project$OurStory2_Narrative$additionalStageInfoAfterQuestionAnsweredDict)
							},
							_1: {ctor: '[]'}
						}),
					_user$project$OurStory2_Rules$getQuestionId(questionNr)),
				_1: {ctor: '[]'}
			}
		},
		_user$project$OurStory2_Narrative$interactingWithQuestionNDict(questionNr));
};
var _user$project$OurStory2_Rules$correctAnswerNotRequiredToMove = {
	ctor: '::',
	_0: 7,
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Rules$questionsOnEveryStageExcept = {
	ctor: '::',
	_0: 6,
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Rules$numberOfDesiredStages = 10;
var _user$project$OurStory2_Rules$getLastStageId = A2(
	_elm_lang$core$Basics_ops['++'],
	'stage',
	_elm_lang$core$Basics$toString(_user$project$OurStory2_Rules$numberOfDesiredStages));
var _user$project$OurStory2_Rules$getLastStageNr = _user$project$OurStory2_Rules$numberOfDesiredStages;
var _user$project$OurStory2_Rules$getPenultimateStageId = A2(
	_elm_lang$core$Basics_ops['++'],
	'stage',
	_elm_lang$core$Basics$toString(_user$project$OurStory2_Rules$numberOfDesiredStages - 1));
var _user$project$OurStory2_Rules$getPenultimateStageNr = _user$project$OurStory2_Rules$numberOfDesiredStages - 1;
var _user$project$OurStory2_Rules$getListOfStageQuestions = A2(
	_elm_lang$core$List$map,
	_user$project$OurStory2_Rules$getQuestionId,
	A2(
		_elm_lang$core$List$filter,
		function (x) {
			return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
		},
		A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages)));
var _user$project$OurStory2_Rules$getListOfConditionsAllQuestionsAnswered = A2(_elm_lang$core$List$map, _user$project$Engine$itemIsCorrectlyAnswered, _user$project$OurStory2_Rules$getListOfStageQuestions);
var _user$project$OurStory2_Rules$lRulesMakeFinalPaperAppearAfterAllQuestionsAnswered = {
	ctor: '::',
	_0: A3(
		_user$project$OurStory2_Rules$rule,
		'final paper appears player moving from penultimate stage to last stage',
		{
			interaction: _user$project$Engine$with(_user$project$OurStory2_Rules$getLastStageId),
			conditions: A2(
				_elm_lang$core$List$append,
				{
					ctor: '::',
					_0: A2(_user$project$Engine$characterIsInLocation, 'playerOne', _user$project$OurStory2_Rules$getPenultimateStageId),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$List$append,
					{
						ctor: '::',
						_0: _user$project$Engine$currentLocationIs(_user$project$OurStory2_Rules$getPenultimateStageId),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$append,
						{
							ctor: '::',
							_0: _user$project$Engine$itemIsOffScreen('finalPaper'),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, _user$project$Engine$itemIsCorrectlyAnswered, _user$project$OurStory2_Rules$getListOfStageQuestions)))),
			changes: {
				ctor: '::',
				_0: _user$project$Engine$moveTo(_user$project$OurStory2_Rules$getLastStageId),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Engine$moveCharacterToLocation, 'playerOne', _user$project$OurStory2_Rules$getLastStageId),
					_1: {
						ctor: '::',
						_0: A2(_user$project$Engine$moveItemToLocation, 'finalPaper', _user$project$OurStory2_Rules$getLastStageId),
						_1: {ctor: '[]'}
					}
				}
			}
		},
		A2(_user$project$OurStory2_Narrative$interactingWithStageNDict, _user$project$OurStory2_Rules$getLastStageNr, 'defaultStageDescription')),
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Rules$lRuleInteractingWithFinalPaper = {
	ctor: '::',
	_0: A3(
		_user$project$OurStory2_Rules$rule,
		'interaction With Final Paper',
		{
			interaction: _user$project$Engine$with('finalPaper'),
			conditions: A2(_elm_lang$core$List$map, _user$project$Engine$itemIsCorrectlyAnswered, _user$project$OurStory2_Rules$getListOfStageQuestions),
			changes: {
				ctor: '::',
				_0: A3(
					_user$project$Engine$setAttributeValue,
					_user$project$Engine$abool(true),
					'gameHasEnded',
					'gameStateItem'),
				_1: {
					ctor: '::',
					_0: _user$project$Engine$moveItemToInventory('finalPaper'),
					_1: {ctor: '[]'}
				}
			}
		},
		_user$project$OurStory2_Narrative$interactingWithFinalPaperDict),
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Rules$getListOfStageQuestionNrs = A2(
	_elm_lang$core$List$filter,
	function (x) {
		return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
	},
	A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages));
var _user$project$OurStory2_Rules$getListOfStageIdWithQuestions = A2(
	_elm_lang$core$List$map,
	_user$project$OurStory2_Rules$getStageId,
	A2(
		_elm_lang$core$List$filter,
		function (x) {
			return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
		},
		A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages)));
var _user$project$OurStory2_Rules$getListOfStageNrsWithQuestions = A2(
	_elm_lang$core$List$filter,
	function (x) {
		return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
	},
	A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages));
var _user$project$OurStory2_Rules$moveQuestionsToStagesFixed = function () {
	var moveItFixed = function (nr) {
		return A2(
			_user$project$Engine$moveItemToLocationFixed,
			_user$project$OurStory2_Rules$getQuestionId(nr),
			_user$project$OurStory2_Rules$getStageId(nr));
	};
	return A2(
		_elm_lang$core$List$map,
		moveItFixed,
		A2(
			_elm_lang$core$List$filter,
			function (x) {
				return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
			},
			A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages)));
}();
var _user$project$OurStory2_Rules$makeQuestionsWritableExcept = function (lnotWritable) {
	var makeItWritable = function (n) {
		return _user$project$Engine$makeItemWritable(
			_user$project$OurStory2_Rules$getQuestionId(n));
	};
	return A2(
		_elm_lang$core$List$map,
		makeItWritable,
		A2(
			_elm_lang$core$List$filter,
			function (x) {
				return !A2(_elm_lang$core$List$member, x, lnotWritable);
			},
			A2(
				_elm_lang$core$List$filter,
				function (x) {
					return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
				},
				A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages))));
};
var _user$project$OurStory2_Rules$startingState = A2(
	_elm_lang$core$Basics_ops['++'],
	{
		ctor: '::',
		_0: _user$project$Engine$moveTo('onceUponAtime'),
		_1: {
			ctor: '::',
			_0: A2(_user$project$Engine$moveCharacterToLocation, 'playerOne', 'onceUponAtime'),
			_1: {
				ctor: '::',
				_0: A2(_user$project$Engine$moveItemToLocation, 'gps', 'stage1'),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Engine$moveItemToLocationFixed, 'creditsInfo', _user$project$OurStory2_Rules$getLastStageId),
					_1: {ctor: '[]'}
				}
			}
		}
	},
	A2(
		_elm_lang$core$Basics_ops['++'],
		_user$project$OurStory2_Rules$moveQuestionsToStagesFixed,
		A2(
			_elm_lang$core$Basics_ops['++'],
			_user$project$OurStory2_Rules$makeQuestionsAmultiChoice(
				{
					ctor: '::',
					_0: 2,
					_1: {
						ctor: '::',
						_0: 3,
						_1: {
							ctor: '::',
							_0: 4,
							_1: {
								ctor: '::',
								_0: 7,
								_1: {ctor: '[]'}
							}
						}
					}
				}),
			_user$project$OurStory2_Rules$makeQuestionsWritableExcept(
				{
					ctor: '::',
					_0: 2,
					_1: {
						ctor: '::',
						_0: 3,
						_1: {
							ctor: '::',
							_0: 4,
							_1: {
								ctor: '::',
								_0: 7,
								_1: {ctor: '[]'}
							}
						}
					}
				}))));
var _user$project$OurStory2_Rules$makeAllQuestionsWritable = _user$project$OurStory2_Rules$makeQuestionsWritableExcept(
	{ctor: '[]'});
var _user$project$OurStory2_Rules$interactionWithQuestionNrAllQuestionsAnsweredButThisOne = function (questionNr) {
	var additionalTextForStages = A2(
		_elm_lang$core$List$map,
		function (x) {
			return {
				ctor: '_Tuple3',
				_0: x,
				_1: 'additionalTextDict',
				_2: _user$project$Engine$aDictStringString(_user$project$OurStory2_Narrative$additionalStageInfoAfterAllQuestionsAnsweredDict)
			};
		},
		A2(
			_elm_lang$core$List$map,
			_user$project$OurStory2_Rules$getStageId,
			A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages - 1)));
	var stageNr = questionNr;
	var lsuggestedInteractionIfLastStage = _elm_lang$core$Native_Utils.eq(stageNr, _user$project$OurStory2_Rules$getLastStageNr) ? {
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'suggestedInteraction',
			_1: _user$project$Engine$astring('finalPaper')
		},
		_1: {ctor: '[]'}
	} : {ctor: '[]'};
	var correctAnswers = _user$project$OurStory2_Narrative$getQuestionAnswers(questionNr);
	return A3(
		_user$project$OurStory2_Rules$ruleWithQuasiChange,
		A2(
			_elm_lang$core$Basics_ops['++'],
			'view question',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(questionNr),
				' all questions answered but this one ')),
		{
			interaction: _user$project$Engine$with(
				_user$project$OurStory2_Rules$getQuestionId(questionNr)),
			conditions: A2(
				_elm_lang$core$List$append,
				{
					ctor: '::',
					_0: _user$project$Engine$itemIsOffScreen('finalPaper'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$List$map,
					_user$project$Engine$itemIsCorrectlyAnswered,
					A2(
						_elm_lang$core$List$filter,
						function (x) {
							return !_elm_lang$core$Native_Utils.eq(
								x,
								_user$project$OurStory2_Rules$getQuestionId(questionNr));
						},
						_user$project$OurStory2_Rules$getListOfStageQuestions))),
			changes: {ctor: '[]'},
			quasiChanges: {
				ctor: '::',
				_0: A3(
					_user$project$Engine$check_IfAnswerCorrect,
					correctAnswers,
					A8(
						_user$project$Engine$checkAnswerData,
						_user$project$OurStory2_Narrative$getQuestionsMaxNrTries(questionNr),
						_user$project$Engine$caseInsensitiveAnswer,
						_user$project$Engine$answerSpacesDontMatter,
						true,
						_user$project$OurStory2_Narrative$additionalTextIfAnswerCorrectDict(questionNr),
						_user$project$OurStory2_Narrative$additionalTextIfAnswerIncorrectDict(questionNr),
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'warningMessage',
									_1: _user$project$Engine$aDictStringString(_user$project$OurStory2_Narrative$goodNewsMessageAfterAllQuestionsAnsweredDict)
								},
								_1: {ctor: '[]'}
							},
							lsuggestedInteractionIfLastStage),
						additionalTextForStages),
					A2(
						_elm_lang$core$Basics_ops['++'],
						'question',
						_elm_lang$core$Basics$toString(questionNr))),
				_1: {ctor: '[]'}
			}
		},
		_user$project$OurStory2_Narrative$interactingWithQuestionNDict(questionNr));
};
var _user$project$OurStory2_Rules$rules = function () {
	var lRulesAboutQuestionsAllQuestionsAnsweredButOne = A2(
		_elm_lang$core$List$map,
		_user$project$OurStory2_Rules$interactionWithQuestionNrAllQuestionsAnsweredButThisOne,
		A2(
			_elm_lang$core$List$filter,
			function (x) {
				return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
			},
			A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages)));
	var lRulesAboutQuestions = A2(
		_elm_lang$core$List$map,
		_user$project$OurStory2_Rules$standardInteractionWithQuestionNr,
		A2(
			_elm_lang$core$List$filter,
			function (x) {
				return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
			},
			A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages)));
	var listOfStageNrs = A2(_elm_lang$core$List$range, 1, _user$project$OurStory2_Rules$numberOfDesiredStages);
	var lRulesToTryMoveToNextStageAndFail = A2(
		_elm_lang$core$List$map,
		_user$project$OurStory2_Rules$standardRuleTryMoveToNplusOneAndFail,
		A2(
			_elm_lang$core$List$map,
			function (x) {
				return {ctor: '_Tuple2', _0: x, _1: x};
			},
			A2(
				_elm_lang$core$List$filter,
				function (x) {
					return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$correctAnswerNotRequiredToMove);
				},
				A2(
					_elm_lang$core$List$filter,
					function (x) {
						return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
					},
					A2(
						_elm_lang$core$List$take,
						_elm_lang$core$List$length(listOfStageNrs) - 1,
						listOfStageNrs)))));
	var lRulesToMoveToNextStageRestricted = A2(
		_elm_lang$core$List$map,
		_user$project$OurStory2_Rules$standardRuleMoveToNplusOneRestricted,
		A2(
			_elm_lang$core$List$map,
			function (x) {
				return {ctor: '_Tuple2', _0: x, _1: x};
			},
			A2(
				_elm_lang$core$List$filter,
				function (x) {
					return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$correctAnswerNotRequiredToMove);
				},
				A2(
					_elm_lang$core$List$filter,
					function (x) {
						return !A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept);
					},
					A2(
						_elm_lang$core$List$take,
						_elm_lang$core$List$length(listOfStageNrs) - 1,
						listOfStageNrs)))));
	var lRulesToMoveToNextStageNotRestricted = A2(
		_elm_lang$core$List$map,
		_user$project$OurStory2_Rules$standardRuleMoveToNplusOneNotRestricted,
		A2(
			_elm_lang$core$List$append,
			{
				ctor: '::',
				_0: 0,
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$List$filter,
				function (x) {
					return A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$questionsOnEveryStageExcept) || A2(_elm_lang$core$List$member, x, _user$project$OurStory2_Rules$correctAnswerNotRequiredToMove);
				},
				A2(
					_elm_lang$core$List$take,
					_elm_lang$core$List$length(listOfStageNrs) - 1,
					listOfStageNrs))));
	var lRulesToMoveToPreviousStage = A2(
		_elm_lang$core$List$map,
		_user$project$OurStory2_Rules$standardRuleMoveToNminusOne,
		A2(
			_elm_lang$core$List$map,
			function (x) {
				return {ctor: '_Tuple2', _0: x, _1: x};
			},
			A2(
				_elm_lang$core$Maybe$withDefault,
				{ctor: '[]'},
				_elm_lang$core$List$tail(listOfStageNrs))));
	var lRules = A2(
		_elm_lang$core$List$append,
		_user$project$OurStory2_Rules$lRuleGameHasEnded,
		A2(
			_elm_lang$core$List$append,
			_user$project$OurStory2_Rules$lRuleInteractingWithFinalPaper,
			A2(
				_elm_lang$core$List$append,
				lRulesAboutQuestionsAllQuestionsAnsweredButOne,
				A2(
					_elm_lang$core$List$append,
					_user$project$OurStory2_Rules$lRulesMakeFinalPaperAppearAfterAllQuestionsAnswered,
					A2(
						_elm_lang$core$List$append,
						_user$project$OurStory2_Rules$lRulesInteractingWithCreditsInfo,
						A2(
							_elm_lang$core$List$append,
							_user$project$OurStory2_Rules$lRulesInteractingWithGps,
							A2(
								_elm_lang$core$List$append,
								lRulesAboutQuestions,
								A2(
									_elm_lang$core$List$append,
									lRulesToMoveToNextStageNotRestricted,
									A2(
										_elm_lang$core$List$append,
										lRulesToTryMoveToNextStageAndFail,
										A2(_elm_lang$core$List$append, lRulesToMoveToNextStageRestricted, lRulesToMoveToPreviousStage))))))))));
	return _elm_lang$core$Dict$fromList(lRules);
}();

var _user$project$OurStory2_Manifest$getStageCoordInfo = function (stageNr) {
	var dictCoordInfo = _elm_lang$core$Dict$fromList(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 1,
				_1: {ctor: '_Tuple3', _0: 38.7952, _1: -9.391733, _2: _elm_lang$core$Maybe$Nothing}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 2,
					_1: {ctor: '_Tuple3', _0: 38.795033, _1: -9.391517, _2: _elm_lang$core$Maybe$Nothing}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 3,
						_1: {ctor: '_Tuple3', _0: 38.79475, _1: -9.3914, _2: _elm_lang$core$Maybe$Nothing}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 4,
							_1: {ctor: '_Tuple3', _0: 38.7943, _1: -9.391567, _2: _elm_lang$core$Maybe$Nothing}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 5,
								_1: {ctor: '_Tuple3', _0: 38.79395, _1: -9.391267, _2: _elm_lang$core$Maybe$Nothing}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 6,
									_1: {ctor: '_Tuple3', _0: 38.793717, _1: -9.391167, _2: _elm_lang$core$Maybe$Nothing}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 7,
										_1: {ctor: '_Tuple3', _0: 38.793733, _1: -9.39095, _2: _elm_lang$core$Maybe$Nothing}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 8,
											_1: {ctor: '_Tuple3', _0: 38.793367, _1: -9.391167, _2: _elm_lang$core$Maybe$Nothing}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 9,
												_1: {ctor: '_Tuple3', _0: 38.792367, _1: -9.391267, _2: _elm_lang$core$Maybe$Nothing}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 10,
													_1: {ctor: '_Tuple3', _0: 38.7922, _1: -9.3913, _2: _elm_lang$core$Maybe$Nothing}
												},
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
	return A2(_elm_lang$core$Dict$get, stageNr, dictCoordInfo);
};
var _user$project$OurStory2_Manifest$getListOfLocations = F2(
	function (initLocations, nrLocations) {
		var mbAddCoordInfo = F2(
			function (stageNr, entity) {
				var _p0 = _user$project$OurStory2_Manifest$getStageCoordInfo(stageNr);
				if (_p0.ctor === 'Nothing') {
					return entity;
				} else {
					return A5(_user$project$Components$addNeedsToBeInGpsZone, true, _p0._0._0, _p0._0._1, _p0._0._2, entity);
				}
			});
		var getDirection = F2(
			function (s1, s2) {
				var _p1 = {
					ctor: '_Tuple2',
					_0: _user$project$OurStory2_Manifest$getStageCoordInfo(s1),
					_1: _user$project$OurStory2_Manifest$getStageCoordInfo(s2)
				};
				if ((((_p1._0.ctor === 'Just') && (_p1._0._0.ctor === '_Tuple3')) && (_p1._1.ctor === 'Just')) && (_p1._1._0.ctor === '_Tuple3')) {
					return _user$project$Components$bearingToDirection(
						_elm_lang$core$Basics$toFloat(
							A2(
								_user$project$GpsUtils$calculateBearing,
								{ctor: '_Tuple2', _0: _p1._0._0._0, _1: _p1._0._0._1},
								{ctor: '_Tuple2', _0: _p1._1._0._0, _1: _p1._1._0._1})));
				} else {
					return (_elm_lang$core$Native_Utils.cmp(s2, s1) > -1) ? _user$project$Components$West : _user$project$Components$East;
				}
			});
		var getConnectingLocations = function (stageNr) {
			return _elm_lang$core$Native_Utils.eq(stageNr, 1) ? {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: A2(getDirection, 1, 2),
					_1: 'stage2'
				},
				_1: {ctor: '[]'}
			} : (_elm_lang$core$Native_Utils.eq(stageNr, nrLocations) ? {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: A2(getDirection, nrLocations, nrLocations - 1),
					_1: _user$project$OurStory2_Rules$getStageId(nrLocations - 1)
				},
				_1: {ctor: '[]'}
			} : {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: A2(getDirection, stageNr, stageNr + 1),
					_1: _user$project$OurStory2_Rules$getStageId(stageNr + 1)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: A2(getDirection, stageNr, stageNr - 1),
						_1: _user$project$OurStory2_Rules$getStageId(stageNr - 1)
					},
					_1: {ctor: '[]'}
				}
			});
		};
		var createEntity = function (nr) {
			return A2(
				mbAddCoordInfo,
				nr,
				A2(
					_user$project$Components$addConnectingLocations,
					getConnectingLocations(nr),
					A4(
						_user$project$Components$addLgDisplayInfo,
						'pt',
						A2(_user$project$OurStory2_Narrative$getStageName, nr, 'pt'),
						A2(
							_elm_lang$core$String$join,
							' , ',
							A3(_user$project$OurStory2_Narrative$interactingWithStageN, nr, 'pt', 'defaultStageDescription')),
						A3(
							_user$project$Components$addDisplayInfo,
							A2(_user$project$OurStory2_Narrative$getStageName, nr, 'en'),
							A2(
								_elm_lang$core$String$join,
								' , ',
								A3(_user$project$OurStory2_Narrative$interactingWithStageN, nr, 'en', 'defaultStageDescription')),
							_user$project$Components$entity(
								_user$project$OurStory2_Rules$getStageId(nr))))));
		};
		var moreLocations = A2(
			_elm_lang$core$List$map,
			createEntity,
			A2(_elm_lang$core$List$range, 1, nrLocations));
		return A2(_elm_lang$core$List$append, initLocations, moreLocations);
	});
var _user$project$OurStory2_Manifest$initialLocations = {
	ctor: '::',
	_0: A2(
		_user$project$Components$addConnectingLocations,
		{
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _user$project$Components$West, _1: 'stage1'},
			_1: {ctor: '[]'}
		},
		A4(
			_user$project$Components$addLgDisplayInfo,
			'pt',
			'Era Uma Vez ...',
			'Era Uma Vez ...',
			A3(
				_user$project$Components$addDisplayInfo,
				'Once Upon a Time',
				'Once Upon a Time',
				_user$project$Components$entity('onceUponAtime')))),
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Manifest$locations = A2(_user$project$OurStory2_Manifest$getListOfLocations, _user$project$OurStory2_Manifest$initialLocations, _user$project$OurStory2_Rules$numberOfDesiredStages);
var _user$project$OurStory2_Manifest$characters = {
	ctor: '::',
	_0: A4(
		_user$project$Components$addLgDisplayInfo,
		'pt',
		'investigador',
		'Tu ...',
		A3(
			_user$project$Components$addDisplayInfo,
			'investigator',
			'You ...',
			_user$project$Components$entity('playerOne'))),
	_1: {ctor: '[]'}
};
var _user$project$OurStory2_Manifest$getListOfItems = F2(
	function (initItems, nrQuestions) {
		var createEntity = function (nr) {
			return A4(
				_user$project$Components$addLgDisplayInfo,
				'pt',
				A2(_user$project$OurStory2_Narrative$getQuestionName, nr, 'pt'),
				A2(_user$project$OurStory2_Narrative$getQuestionBodyAsString, nr, 'pt'),
				A3(
					_user$project$Components$addDisplayInfo,
					A2(_user$project$OurStory2_Narrative$getQuestionName, nr, 'en'),
					A2(_user$project$OurStory2_Narrative$getQuestionBodyAsString, nr, 'en'),
					_user$project$Components$entity(
						_user$project$OurStory2_Rules$getQuestionId(nr))));
		};
		var moreItems = A2(_elm_lang$core$List$map, createEntity, _user$project$OurStory2_Rules$getListOfStageQuestionNrs);
		return A2(_elm_lang$core$List$append, initItems, moreItems);
	});
var _user$project$OurStory2_Manifest$initialItems = {
	ctor: '::',
	_0: _user$project$Components$entity('gameStateItem'),
	_1: {
		ctor: '::',
		_0: A2(
			_user$project$Components$addNeedsGpsInfo,
			true,
			A4(
				_user$project$Components$addLgDisplayInfo,
				'pt',
				'GPSr',
				'Instrumento mágico que te ajuda a navegar no terreno.',
				A3(
					_user$project$Components$addDisplayInfo,
					'GPSr',
					'Magical Instrument that helps you navigate',
					_user$project$Components$entity('gps')))),
		_1: {
			ctor: '::',
			_0: A4(
				_user$project$Components$addLgDisplayInfo,
				'pt',
				'questão',
				'descrição da questão',
				A3(
					_user$project$Components$addDisplayInfo,
					'question',
					'question Description',
					_user$project$Components$entity('standardQuestion'))),
			_1: {
				ctor: '::',
				_0: A4(
					_user$project$Components$addLgDisplayInfo,
					'pt',
					'credits',
					'credits Info',
					A3(
						_user$project$Components$addDisplayInfo,
						'credits',
						'credits Info',
						_user$project$Components$entity('creditsInfo'))),
				_1: {
					ctor: '::',
					_0: A4(
						_user$project$Components$addLgDisplayInfo,
						'pt',
						'papiro',
						'papiro com alguma informação escrita',
						A3(
							_user$project$Components$addDisplayInfo,
							'old paper',
							'old paper with some info written in it',
							_user$project$Components$entity('finalPaper'))),
					_1: {ctor: '[]'}
				}
			}
		}
	}
};
var _user$project$OurStory2_Manifest$items = A2(_user$project$OurStory2_Manifest$getListOfItems, _user$project$OurStory2_Manifest$initialItems, _user$project$OurStory2_Rules$numberOfDesiredStages);

var _user$project$TranslationHelper$getInLanguage = F2(
	function (lgId, theStr) {
		var translationDict = _elm_lang$core$Dict$fromList(
			{
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: {ctor: '_Tuple2', _0: '___investigator___', _1: 'pt'},
					_1: 'Investigador'
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: {ctor: '_Tuple2', _0: '___investigator___', _1: 'en'},
						_1: 'Investigator'
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: {ctor: '_Tuple2', _0: '___QUESTION_ANSWERED___', _1: 'pt'},
							_1: 'Questão Respondida  '
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: {ctor: '_Tuple2', _0: '___QUESTION_ANSWERED___', _1: 'en'},
								_1: 'Question Answered  '
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: {ctor: '_Tuple2', _0: '___YOUR_ANSWER___', _1: 'pt'},
									_1: 'resposta :  '
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: {ctor: '_Tuple2', _0: '___YOUR_ANSWER___', _1: 'en'},
										_1: 'answer :  '
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: {ctor: '_Tuple2', _0: '___YOUR_CHOICE___', _1: 'pt'},
											_1: 'escolha :  '
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: {ctor: '_Tuple2', _0: '___YOUR_CHOICE___', _1: 'en'},
												_1: 'your choice :  '
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: {ctor: '_Tuple2', _0: '___CORRECT_ANSWER___', _1: 'pt'},
													_1: '  \nResposta Correcta'
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: {ctor: '_Tuple2', _0: '___CORRECT_ANSWER___', _1: 'en'},
														_1: '  \nCorrect Answer'
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: {ctor: '_Tuple2', _0: '___INCORRECT_ANSWER___', _1: 'pt'},
															_1: '  \nResposta Incorrecta'
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: {ctor: '_Tuple2', _0: '___INCORRECT_ANSWER___', _1: 'en'},
																_1: '  \nIncorrect Answer'
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: {ctor: '_Tuple2', _0: '__Characters_here__', _1: 'pt'},
																	_1: 'Personagens aqui: '
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: {ctor: '_Tuple2', _0: '__Characters_here__', _1: 'en'},
																		_1: 'Characters here: '
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: {ctor: '_Tuple2', _0: '__Items_here__', _1: 'pt'},
																			_1: 'Items aqui: '
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: {ctor: '_Tuple2', _0: '__Items_here__', _1: 'en'},
																				_1: 'Items here: '
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: {ctor: '_Tuple2', _0: '__Nothing_here__', _1: 'pt'},
																					_1: 'Nada aqui.'
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: {ctor: '_Tuple2', _0: '__Nothing_here__', _1: 'en'},
																						_1: 'Nothing here.'
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '_Tuple2',
																							_0: {ctor: '_Tuple2', _0: '__and__', _1: 'pt'},
																							_1: ' e '
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '_Tuple2',
																								_0: {ctor: '_Tuple2', _0: '__and__', _1: 'en'},
																								_1: ' and '
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: {ctor: '_Tuple2', _0: '__Inventory__', _1: 'pt'},
																									_1: 'Inventário'
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '_Tuple2',
																										_0: {ctor: '_Tuple2', _0: '__Inventory__', _1: 'en'},
																										_1: 'Inventory'
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '_Tuple2',
																											_0: {ctor: '_Tuple2', _0: '___Language___', _1: 'pt'},
																											_1: 'Linguagem'
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '_Tuple2',
																												_0: {ctor: '_Tuple2', _0: '___Language___', _1: 'en'},
																												_1: 'Language'
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '_Tuple2',
																													_0: {ctor: '_Tuple2', _0: '___Settings___', _1: 'pt'},
																													_1: 'Settings'
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '_Tuple2',
																														_0: {ctor: '_Tuple2', _0: '___Settings___', _1: 'en'},
																														_1: 'Settings'
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '_Tuple2',
																															_0: {ctor: '_Tuple2', _0: '___AUDIO___', _1: 'pt'},
																															_1: 'Audio'
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '_Tuple2',
																																_0: {ctor: '_Tuple2', _0: '___AUDIO___', _1: 'en'},
																																_1: 'Audio'
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '_Tuple2',
																																	_0: {ctor: '_Tuple2', _0: '___SAVE_LOAD___', _1: 'pt'},
																																	_1: 'Save/Load'
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '_Tuple2',
																																		_0: {ctor: '_Tuple2', _0: '___SAVE_LOAD___', _1: 'en'},
																																		_1: 'Save/Load'
																																	},
																																	_1: {
																																		ctor: '::',
																																		_0: {
																																			ctor: '_Tuple2',
																																			_0: {ctor: '_Tuple2', _0: '___Check_gps_coords___', _1: 'pt'},
																																			_1: 'verificar coords'
																																		},
																																		_1: {
																																			ctor: '::',
																																			_0: {
																																				ctor: '_Tuple2',
																																				_0: {ctor: '_Tuple2', _0: '___Check_gps_coords___', _1: 'en'},
																																				_1: 'check gps coords'
																																			},
																																			_1: {
																																				ctor: '::',
																																				_0: {
																																					ctor: '_Tuple2',
																																					_0: {ctor: '_Tuple2', _0: '___LAYOUT_OPTIONS___', _1: 'pt'},
																																					_1: 'Layout'
																																				},
																																				_1: {
																																					ctor: '::',
																																					_0: {
																																						ctor: '_Tuple2',
																																						_0: {ctor: '_Tuple2', _0: '___LAYOUT_OPTIONS___', _1: 'en'},
																																						_1: 'Layout'
																																					},
																																					_1: {
																																						ctor: '::',
																																						_0: {
																																							ctor: '_Tuple2',
																																							_0: {ctor: '_Tuple2', _0: '___NR_TRIES_LEFT___', _1: 'pt'},
																																							_1: 'numero de tentativas disponíveis : '
																																						},
																																						_1: {
																																							ctor: '::',
																																							_0: {
																																								ctor: '_Tuple2',
																																								_0: {ctor: '_Tuple2', _0: '___NR_TRIES_LEFT___', _1: 'en'},
																																								_1: 'number of tries left :'
																																							},
																																							_1: {
																																								ctor: '::',
																																								_0: {
																																									ctor: '_Tuple2',
																																									_0: {ctor: '_Tuple2', _0: '___more___', _1: 'pt'},
																																									_1: 'mais'
																																								},
																																								_1: {
																																									ctor: '::',
																																									_0: {
																																										ctor: '_Tuple2',
																																										_0: {ctor: '_Tuple2', _0: '___more___', _1: 'en'},
																																										_1: 'more'
																																									},
																																									_1: {
																																										ctor: '::',
																																										_0: {
																																											ctor: '_Tuple2',
																																											_0: {ctor: '_Tuple2', _0: '___Checking_Answer___', _1: 'pt'},
																																											_1: 'A verificar a resposta.  \nse o dinossauro :) estiver a dormir  \npode demorar até 10 seg. Por favor aguarde ... )'
																																										},
																																										_1: {
																																											ctor: '::',
																																											_0: {
																																												ctor: '_Tuple2',
																																												_0: {ctor: '_Tuple2', _0: '___Checking_Answer___', _1: 'en'},
																																												_1: 'Checking Answer.  \nIf dynosaur :) is sleeping  \nit can take up to 10 sec. Please be patient ... ) '
																																											},
																																											_1: {
																																												ctor: '::',
																																												_0: {
																																													ctor: '_Tuple2',
																																													_0: {ctor: '_Tuple2', _0: '___Couldnt_check_Answer___', _1: 'pt'},
																																													_1: 'Não foi possivel verificar a resposta. Por favor tente novamente ! '
																																												},
																																												_1: {
																																													ctor: '::',
																																													_0: {
																																														ctor: '_Tuple2',
																																														_0: {ctor: '_Tuple2', _0: '___Couldnt_check_Answer___', _1: 'en'},
																																														_1: 'Couldnt check Answer , Please try Again ! '
																																													},
																																													_1: {
																																														ctor: '::',
																																														_0: {
																																															ctor: '_Tuple2',
																																															_0: {ctor: '_Tuple2', _0: '___MAX_TRIES_ON_BACKEND___', _1: 'pt'},
																																															_1: 'Não foi possivel verificar a resposta.  \nDemasiadas tentativas a partir deste IP .  \nPor favor tente dentro de algumas horas ! '
																																														},
																																														_1: {
																																															ctor: '::',
																																															_0: {
																																																ctor: '_Tuple2',
																																																_0: {ctor: '_Tuple2', _0: '___MAX_TRIES_ON_BACKEND___', _1: 'en'},
																																																_1: 'Couldnt check Answer.  \nToo Many Tries coming from this IP .  \n Please try Again in a few hours ! '
																																															},
																																															_1: {
																																																ctor: '::',
																																																_0: {
																																																	ctor: '_Tuple2',
																																																	_0: {ctor: '_Tuple2', _0: '___REACH_MAX_NR_TRIES___', _1: 'pt'},
																																																	_1: 'O numero máximo de tentativas foi atingido !'
																																																},
																																																_1: {
																																																	ctor: '::',
																																																	_0: {
																																																		ctor: '_Tuple2',
																																																		_0: {ctor: '_Tuple2', _0: '___REACH_MAX_NR_TRIES___', _1: 'en'},
																																																		_1: 'You reached the maximum number of tries !'
																																																	},
																																																	_1: {
																																																		ctor: '::',
																																																		_0: {
																																																			ctor: '_Tuple2',
																																																			_0: {ctor: '_Tuple2', _0: '___type_answer___', _1: 'pt'},
																																																			_1: 'digite a resposta'
																																																		},
																																																		_1: {
																																																			ctor: '::',
																																																			_0: {
																																																				ctor: '_Tuple2',
																																																				_0: {ctor: '_Tuple2', _0: '___type_answer___', _1: 'en'},
																																																				_1: 'type answer'
																																																			},
																																																			_1: {
																																																				ctor: '::',
																																																				_0: {
																																																					ctor: '_Tuple2',
																																																					_0: {ctor: '_Tuple2', _0: '___SUGGESTED_INTERACTION___', _1: 'pt'},
																																																					_1: 'interacção sugerida :'
																																																				},
																																																				_1: {
																																																					ctor: '::',
																																																					_0: {
																																																						ctor: '_Tuple2',
																																																						_0: {ctor: '_Tuple2', _0: '___SUGGESTED_INTERACTION___', _1: 'en'},
																																																						_1: 'suggested interaction'
																																																					},
																																																					_1: {
																																																						ctor: '::',
																																																						_0: {
																																																							ctor: '_Tuple2',
																																																							_0: {ctor: '_Tuple2', _0: '___center_coords_of_current_location___', _1: 'pt'},
																																																							_1: 'coordenadas centrais do presente local :'
																																																						},
																																																						_1: {
																																																							ctor: '::',
																																																							_0: {
																																																								ctor: '_Tuple2',
																																																								_0: {ctor: '_Tuple2', _0: '___center_coords_of_current_location___', _1: 'en'},
																																																								_1: 'center coords of current location : '
																																																							},
																																																							_1: {
																																																								ctor: '::',
																																																								_0: {
																																																									ctor: '_Tuple2',
																																																									_0: {ctor: '_Tuple2', _0: '___DISTANCE_TO___', _1: 'pt'},
																																																									_1: 'Distância a '
																																																								},
																																																								_1: {
																																																									ctor: '::',
																																																									_0: {
																																																										ctor: '_Tuple2',
																																																										_0: {ctor: '_Tuple2', _0: '___DISTANCE_TO___', _1: 'en'},
																																																										_1: 'Distance to '
																																																									},
																																																									_1: {
																																																										ctor: '::',
																																																										_0: {
																																																											ctor: '_Tuple2',
																																																											_0: {ctor: '_Tuple2', _0: '___IS___', _1: 'pt'},
																																																											_1: ' é :'
																																																										},
																																																										_1: {
																																																											ctor: '::',
																																																											_0: {
																																																												ctor: '_Tuple2',
																																																												_0: {ctor: '_Tuple2', _0: '___IS___', _1: 'en'},
																																																												_1: ' is : '
																																																											},
																																																											_1: {
																																																												ctor: '::',
																																																												_0: {
																																																													ctor: '_Tuple2',
																																																													_0: {ctor: '_Tuple2', _0: '___METERS___', _1: 'pt'},
																																																													_1: 'metros'
																																																												},
																																																												_1: {
																																																													ctor: '::',
																																																													_0: {
																																																														ctor: '_Tuple2',
																																																														_0: {ctor: '_Tuple2', _0: '___METERS___', _1: 'en'},
																																																														_1: 'meters'
																																																													},
																																																													_1: {
																																																														ctor: '::',
																																																														_0: {
																																																															ctor: '_Tuple2',
																																																															_0: {ctor: '_Tuple2', _0: '___EXIT___', _1: 'pt'},
																																																															_1: 'Exit'
																																																														},
																																																														_1: {
																																																															ctor: '::',
																																																															_0: {
																																																																ctor: '_Tuple2',
																																																																_0: {ctor: '_Tuple2', _0: '___EXIT___', _1: 'en'},
																																																																_1: 'Exit'
																																																															},
																																																															_1: {ctor: '[]'}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			});
		var _p0 = A2(
			_elm_lang$core$Dict$get,
			{ctor: '_Tuple2', _0: theStr, _1: lgId},
			translationDict);
		if (_p0.ctor === 'Nothing') {
			return theStr;
		} else {
			return _p0._0;
		}
	});

var _user$project$Theme_CurrentSummary$view = F5(
	function (currentLocation, props, characters, lAlertMessages, lgId) {
		var format = function (list) {
			var interactables = (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$List$length(list),
				2) > 0) ? A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$List$intersperse,
					_elm_lang$html$Html$text(', '),
					A2(
						_elm_lang$core$List$take,
						_elm_lang$core$List$length(list) - 1,
						list)),
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(_user$project$TranslationHelper$getInLanguage, lgId, '__and__')),
					_1: A2(
						_elm_lang$core$List$drop,
						_elm_lang$core$List$length(list) - 1,
						list)
				}) : A2(
				_elm_lang$core$List$intersperse,
				_elm_lang$html$Html$text(
					A2(_user$project$TranslationHelper$getInLanguage, lgId, '__and__')),
				list);
			return A2(
				_elm_lang$core$Basics_ops['++'],
				interactables,
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('.'),
					_1: {ctor: '[]'}
				});
		};
		var interactableView = F2(
			function (msg, entity) {
				return A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('CurrentSummary__StoryElement u-selectable'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								msg(
									_elm_lang$core$Tuple$first(entity))),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							function (_) {
								return _.name;
							}(
								A2(_user$project$Components$getSingleLgDisplayInfo, lgId, entity))),
						_1: {ctor: '[]'}
					});
			});
		var charactersList = (!_elm_lang$core$List$isEmpty(characters)) ? A2(
			_elm_lang$html$Html$p,
			{ctor: '[]'},
			A2(
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_elm_lang$html$Html$text(
					A2(_user$project$TranslationHelper$getInLanguage, lgId, '__Characters_here__')),
				format(
					A2(
						_elm_lang$core$List$map,
						interactableView(_user$project$ClientTypes$Interact),
						characters)))) : A2(
			_elm_lang$html$Html$span,
			{ctor: '[]'},
			{ctor: '[]'});
		var propsList = (!_elm_lang$core$List$isEmpty(props)) ? A2(
			_elm_lang$html$Html$p,
			{ctor: '[]'},
			A2(
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_elm_lang$html$Html$text(
					A2(_user$project$TranslationHelper$getInLanguage, lgId, '__Items_here__')),
				format(
					A2(
						_elm_lang$core$List$map,
						interactableView(_user$project$ClientTypes$Interact),
						props)))) : A2(
			_elm_lang$html$Html$span,
			{ctor: '[]'},
			{ctor: '[]'});
		var isEmpty = _elm_lang$core$List$isEmpty(characters) && _elm_lang$core$List$isEmpty(props);
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('CurrentSummary'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$style(
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$h1,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('Current-location'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								function (_) {
									return _.name;
								}(
									A2(_user$project$Components$getSingleLgDisplayInfo, lgId, currentLocation))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				isEmpty ? {
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(_user$project$TranslationHelper$getInLanguage, lgId, '__Nothing_here__')),
					_1: {ctor: '[]'}
				} : {
					ctor: '::',
					_0: charactersList,
					_1: {
						ctor: '::',
						_0: propsList,
						_1: {ctor: '[]'}
					}
				}));
	});

var _user$project$Theme_AnswerBox$view = F6(
	function (answerboxtext, lgId, showHeaders, mbInteractableId, mbPlaceHolderText, className) {
		var placeHolderText = function () {
			var _p0 = mbPlaceHolderText;
			if (_p0.ctor === 'Nothing') {
				return '___type_answer___';
			} else {
				return _p0._0;
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(className),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: showHeaders ? A2(
					_elm_lang$html$Html$h3,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Text Box'),
						_1: {ctor: '[]'}
					}) : _elm_lang$html$Html$text(''),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('text'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$placeholder(
									A2(_user$project$TranslationHelper$getInLanguage, lgId, placeHolderText)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$autofocus(true),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$value(
											A2(_elm_lang$core$Maybe$withDefault, '', answerboxtext)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(_user$project$ClientTypes$NewUserSubmitedText),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: function () {
							var _p1 = mbInteractableId;
							if (_p1.ctor === 'Just') {
								return A2(
									_elm_lang$html$Html$button,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(
											A2(
												_user$project$ClientTypes$InteractSendingText,
												_p1._0,
												A2(_elm_lang$core$Maybe$withDefault, '', answerboxtext))),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('OK'),
										_1: {ctor: '[]'}
									});
							} else {
								return _elm_lang$html$Html$text('');
							}
						}(),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Theme_AnswerBox$update = F2(
	function (theText, model) {
		return _elm_lang$core$Native_Utils.eq(theText, '') ? _elm_lang$core$Native_Utils.update(
			model,
			{answerBoxText: _elm_lang$core$Maybe$Nothing}) : _elm_lang$core$Native_Utils.update(
			model,
			{
				answerBoxText: _elm_lang$core$Maybe$Just(theText)
			});
	});
var _user$project$Theme_AnswerBox$init = {answerBoxText: _elm_lang$core$Maybe$Nothing};
var _user$project$Theme_AnswerBox$Model = function (a) {
	return {answerBoxText: a};
};

var _user$project$Theme_Storyline$view = F6(
	function (storyLine, lgId, showTextBoxInStoryline, mbanswerboxtext, answerOptionsDict, ending) {
		var storyLi = F2(
			function (i, _p0) {
				var _p1 = _p0;
				var _p7 = _p1.interactableName;
				var _p6 = _p1.interactableId;
				var viewMbSuggestedInteraction = function () {
					if (_elm_lang$core$Native_Utils.eq(i, 0)) {
						var _p2 = _p1.mbSuggestedInteractionId;
						if (_p2.ctor === 'Just') {
							var _p3 = _p2._0;
							return A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('textRight'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$p,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('suggestInteraction'),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(
												A2(_user$project$TranslationHelper$getInLanguage, lgId, '___SUGGESTED_INTERACTION___')),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$a,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('suggestedInteractionLink'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(
														_user$project$ClientTypes$Interact(_p3)),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(
													A2(_elm_lang$core$Maybe$withDefault, _p3, _p1.mbSuggestedInteractionName)),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								});
						} else {
							return _elm_lang$html$Html$text('');
						}
					} else {
						return _elm_lang$html$Html$text('');
					}
				}();
				var viewMbMoreLink = (_elm_lang$core$Native_Utils.eq(i, 0) && (!_p1.isLastInZipper)) ? A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('textCenter'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$br,
							{ctor: '[]'},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$a,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('moreLink'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(
											_user$project$ClientTypes$Interact(_p6)),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										A2(_user$project$TranslationHelper$getInLanguage, lgId, '___more___')),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}) : _elm_lang$html$Html$text('');
				var viewMbAnswerButtons = (_elm_lang$core$Native_Utils.eq(i, 0) && (!_elm_lang$core$Dict$isEmpty(answerOptionsDict))) ? A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('OptionButton'),
						_1: {ctor: '[]'}
					},
					A2(
						_elm_lang$core$List$map,
						function (_p4) {
							var _p5 = _p4;
							return A2(
								_elm_lang$html$Html$button,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onClick(
										A2(_user$project$ClientTypes$InteractSendingText, _p6, _p5._0)),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(_p5._1),
									_1: {ctor: '[]'}
								});
						},
						A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							A2(_elm_lang$core$Dict$get, lgId, answerOptionsDict)))) : A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(''),
						_1: {ctor: '[]'}
					});
				var viewMbAnswerBox = (_elm_lang$core$Native_Utils.eq(i, 0) && (_p1.isWritable && showTextBoxInStoryline)) ? A6(
					_user$project$Theme_AnswerBox$view,
					mbanswerboxtext,
					lgId,
					false,
					_elm_lang$core$Maybe$Just(_p6),
					_elm_lang$core$Maybe$Nothing,
					'AnswerBoxInStoryLine2') : _elm_lang$html$Html$text('');
				var classes = {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'Storyline__Item', _1: true},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: A2(_elm_lang$core$Basics_ops['++'], 'Storyline__Item--', _p1.interactableCssSelector),
							_1: true
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'u-fade-in',
								_1: _elm_lang$core$Native_Utils.eq(i, 0)
							},
							_1: {ctor: '[]'}
						}
					}
				};
				var numLines = _elm_lang$core$List$length(storyLine);
				var key = A2(
					_elm_lang$core$Basics_ops['++'],
					_p7,
					_elm_lang$core$Basics$toString(numLines - i));
				return {
					ctor: '_Tuple2',
					_0: key,
					_1: A2(
						_elm_lang$html$Html$li,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(classes),
							_1: {ctor: '[]'}
						},
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$h4,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('Storyline__Item__Action'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(_p7),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_evancz$elm_markdown$Markdown$toHtml,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('Storyline__Item__Narrative markdown-body'),
											_1: {ctor: '[]'}
										},
										_p1.narrative),
									_1: {
										ctor: '::',
										_0: viewMbAnswerBox,
										_1: {
											ctor: '::',
											_0: viewMbAnswerButtons,
											_1: {
												ctor: '::',
												_0: viewMbMoreLink,
												_1: {
													ctor: '::',
													_0: viewMbSuggestedInteraction,
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							},
							(_elm_lang$core$Native_Utils.eq(i, 0) && (!_elm_lang$core$Native_Utils.eq(ending, _elm_lang$core$Maybe$Nothing))) ? {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$h5,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('Storyline__Item__Ending'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(
											A2(_elm_lang$core$Maybe$withDefault, 'The End', ending)),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							} : {ctor: '[]'}))
				};
			});
		return A2(
			_elm_lang$html$Html_Keyed$ol,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('Storyline'),
				_1: {ctor: '[]'}
			},
			A2(_elm_lang$core$List$indexedMap, storyLi, storyLine));
	});

var _user$project$Theme_Locations$view = F4(
	function (exits, currentLocation, lgId, bWithSidebar) {
		var locationsClass = bWithSidebar ? 'Locations' : 'Locations__NoSidebar';
		var exitsList = A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			A2(
				_elm_lang$core$List$map,
				function (_p0) {
					var _p1 = _p0;
					var _p2 = _p1._1;
					return (bWithSidebar ? _elm_lang$html$Html$p(
						{ctor: '[]'}) : _elm_lang$html$Html$span(
						{ctor: '[]'}))(
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('CurrentSummary__StoryElement u-selectable'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onClick(
											_user$project$ClientTypes$Interact(
												_elm_lang$core$Tuple$first(_p2))),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										A2(
											_elm_lang$core$Basics_ops['++'],
											function (_) {
												return _.name;
											}(
												A2(_user$project$Components$getSingleLgDisplayInfo, lgId, _p2)),
											A2(
												_elm_lang$core$Basics_ops['++'],
												' is to the ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(_p1._0),
													'.')))),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						});
				},
				exits));
		var formatIt = F2(
			function (bWithSidebar, list) {
				var interactables = bWithSidebar ? A2(
					_elm_lang$core$List$intersperse,
					A2(
						_elm_lang$html$Html$br,
						{ctor: '[]'},
						{ctor: '[]'}),
					list) : A2(
					_elm_lang$core$List$intersperse,
					_elm_lang$html$Html$text(', '),
					list);
				return bWithSidebar ? A2(
					_elm_lang$html$Html$p,
					{ctor: '[]'},
					interactables) : A2(
					_elm_lang$html$Html$p,
					{ctor: '[]'},
					A2(
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						_elm_lang$html$Html$text(
							A2(_user$project$TranslationHelper$getInLanguage, lgId, 'Connecting locations : ')),
						A2(
							_elm_lang$core$Basics_ops['++'],
							interactables,
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('.'),
								_1: {ctor: '[]'}
							})));
			});
		var interactableView = F3(
			function (msg, entity, direction) {
				return A2(
					_elm_lang$html$Html$span,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('CurrentSummary__StoryElement u-selectable'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onClick(
										msg(
											_elm_lang$core$Tuple$first(entity))),
									_1: {ctor: '[]'}
								}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(
									function (_) {
										return _.name;
									}(
										A2(_user$project$Components$getSingleLgDisplayInfo, lgId, entity))),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									' is to the ',
									_elm_lang$core$Basics$toString(direction))),
							_1: {ctor: '[]'}
						}
					});
			});
		var theExitsList = (!_elm_lang$core$List$isEmpty(exits)) ? A2(
			formatIt,
			bWithSidebar,
			A2(
				_elm_lang$core$List$map,
				function (_p3) {
					var _p4 = _p3;
					return A3(interactableView, _user$project$ClientTypes$Interact, _p4._1, _p4._0);
				},
				exits)) : A2(
			_elm_lang$html$Html$span,
			{ctor: '[]'},
			{ctor: '[]'});
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(locationsClass),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: bWithSidebar ? A2(
					_elm_lang$html$Html$h3,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Connecting locations'),
						_1: {ctor: '[]'}
					}) : _elm_lang$html$Html$text(''),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('Locations__list'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: theExitsList,
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});

var _user$project$Theme_Inventory$view = F3(
	function (items, lgId, bWithSidebar) {
		var inventoryClass = bWithSidebar ? 'Inventory' : 'Inventory__NoSidebar';
		var elem = bWithSidebar ? _elm_lang$html$Html$li : _elm_lang$html$Html$span;
		var inventoryItemClasses = bWithSidebar ? 'Inventory__Item u-selectable' : 'Inventory__Item__NoSidebar u-selectable';
		var numItems = _elm_lang$core$List$length(items);
		var inventoryItem = F2(
			function (i, entity) {
				var key = A2(
					_elm_lang$core$Basics_ops['++'],
					_elm_lang$core$Basics$toString(
						_elm_lang$core$Tuple$first(entity)),
					_elm_lang$core$Basics$toString(numItems - i));
				return {
					ctor: '_Tuple2',
					_0: key,
					_1: A2(
						elem,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class(inventoryItemClasses),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(
									_user$project$ClientTypes$Interact(
										_elm_lang$core$Tuple$first(entity))),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								function (_) {
									return _.name;
								}(
									A2(_user$project$Components$getSingleLgDisplayInfo, lgId, entity))),
							_1: {ctor: '[]'}
						})
				};
			});
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(inventoryClass),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: bWithSidebar ? A2(
					_elm_lang$html$Html$h3,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_user$project$TranslationHelper$getInLanguage, lgId, '__Inventory__')),
						_1: {ctor: '[]'}
					}) : _elm_lang$html$Html$text(''),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('Inventory__list'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: bWithSidebar ? A2(
								_elm_lang$html$Html_Keyed$ol,
								{ctor: '[]'},
								A2(_elm_lang$core$List$indexedMap, inventoryItem, items)) : A2(
								_elm_lang$html$Html$p,
								{ctor: '[]'},
								A2(
									F2(
										function (x, y) {
											return {ctor: '::', _0: x, _1: y};
										}),
									_elm_lang$html$Html$text(
										A2(
											_elm_lang$core$Basics_ops['++'],
											A2(_user$project$TranslationHelper$getInLanguage, lgId, '__Inventory__'),
											' : ')),
									A2(
										_elm_lang$core$List$intersperse,
										_elm_lang$html$Html$text(' , '),
										A2(
											_elm_lang$core$List$map,
											_elm_lang$core$Tuple$second,
											A2(_elm_lang$core$List$indexedMap, inventoryItem, items))))),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});

var _user$project$Theme_Settings$viewShowHideSaveLoad = function (model) {
	var theText = model.showSaveLoad ? 'Hide' : 'Show';
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$button,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('showHideBtn'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(_user$project$ClientTypes$ToggleShowHideSaveLoadBtns),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(theText),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Theme_Settings$radio = F4(
	function (frommodel, opt, name, msg) {
		return {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$input,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$type_('radio'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$checked(
							_elm_lang$core$Native_Utils.eq(frommodel, opt)),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onCheck(
								function (_p0) {
									return msg;
								}),
							_1: {ctor: '[]'}
						}
					}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html$text(name),
				_1: {ctor: '[]'}
			}
		};
	});
var _user$project$Theme_Settings$optionLanguagesView = F2(
	function (availableLanguages, displayLanguageId) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-group'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$label,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col-form-label'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_user$project$TranslationHelper$getInLanguage, displayLanguageId, '___Language___')),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class(''),
							_1: {ctor: '[]'}
						},
						_elm_lang$core$Dict$values(
							A2(
								_elm_lang$core$Dict$map,
								F2(
									function (lgId, lg) {
										return A2(
											_elm_lang$html$Html$div,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('theradios'),
												_1: {ctor: '[]'}
											},
											A4(
												_user$project$Theme_Settings$radio,
												displayLanguageId,
												lgId,
												lg,
												_user$project$ClientTypes$ChangeOptionDisplayLanguage(lgId)));
									}),
								availableLanguages))),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Theme_Settings$optionGpsCheckZone = F2(
	function (bdontcheck, displayLanguageId) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-group'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$label,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col-form-label'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_user$project$TranslationHelper$getInLanguage, displayLanguageId, '___Check_gps_coords___')),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('theradios'),
									_1: {ctor: '[]'}
								},
								A4(
									_user$project$Theme_Settings$radio,
									bdontcheck,
									true,
									'dont check gps',
									_user$project$ClientTypes$ChangeOptionDontCheckGps(true))),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('theradios'),
										_1: {ctor: '[]'}
									},
									A4(
										_user$project$Theme_Settings$radio,
										bdontcheck,
										false,
										'check',
										_user$project$ClientTypes$ChangeOptionDontCheckGps(false))),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Theme_Settings$optionAudioAutoplay = F2(
	function (bautoplay, displayLanguageId) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-group'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$label,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col-form-label'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_user$project$TranslationHelper$getInLanguage, displayLanguageId, '___AUDIO___')),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('theradios'),
									_1: {ctor: '[]'}
								},
								A4(
									_user$project$Theme_Settings$radio,
									bautoplay,
									true,
									'autoplay',
									_user$project$ClientTypes$ChangeOptionAudioAutoplay(true))),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('theradios'),
										_1: {ctor: '[]'}
									},
									A4(
										_user$project$Theme_Settings$radio,
										bautoplay,
										false,
										'dont autoplay',
										_user$project$ClientTypes$ChangeOptionAudioAutoplay(false))),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Theme_Settings$optionLayout = F2(
	function (bWithSidebar, displayLanguageId) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('form-group'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$label,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('col-form-label'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_user$project$TranslationHelper$getInLanguage, displayLanguageId, '___LAYOUT_OPTIONS___')),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('theradios'),
									_1: {ctor: '[]'}
								},
								A4(
									_user$project$Theme_Settings$radio,
									bWithSidebar,
									true,
									'with Sidebar',
									_user$project$ClientTypes$LayoutWithSideBar(true))),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('theradios'),
										_1: {ctor: '[]'}
									},
									A4(
										_user$project$Theme_Settings$radio,
										bWithSidebar,
										false,
										'no Sidebar',
										_user$project$ClientTypes$LayoutWithSideBar(false))),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Theme_Settings$viewSaveLoadButtons = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: model.layoutWithSidebar ? A2(
				_elm_lang$html$Html$h3,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(_user$project$TranslationHelper$getInLanguage, model.displayLanguage, '___SAVE_LOAD___')),
					_1: {ctor: '[]'}
				}) : A2(
				_elm_lang$html$Html$label,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('col-form-label'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(_user$project$TranslationHelper$getInLanguage, model.displayLanguage, '___SAVE_LOAD___')),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: _user$project$Theme_Settings$viewShowHideSaveLoad(model),
				_1: {
					ctor: '::',
					_0: model.showSaveLoad ? A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class(''),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$button,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('saveBtn'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onClick(_user$project$ClientTypes$SaveHistory),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Save'),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class(''),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$button,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('loadBtn'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Events$onClick(_user$project$ClientTypes$RequestForStoredHistory),
													_1: {ctor: '[]'}
												}
											},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text('Load'),
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$br,
										{ctor: '[]'},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}
						}) : _elm_lang$html$Html$text(''),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Theme_Settings$viewLanguageGpsAudioAndLayoutOptions = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(_user$project$Theme_Settings$optionLanguagesView, model.availableLanguages, model.displayLanguage),
			_1: {
				ctor: '::',
				_0: model.gpsOptionsEnabled ? A2(_user$project$Theme_Settings$optionGpsCheckZone, model.dontNeedToBeInZone, model.displayLanguage) : _elm_lang$html$Html$text(''),
				_1: {
					ctor: '::',
					_0: model.audioOptionsEnabled ? A2(_user$project$Theme_Settings$optionAudioAutoplay, model.audioAutoplay, model.displayLanguage) : _elm_lang$html$Html$text(''),
					_1: {
						ctor: '::',
						_0: A2(_user$project$Theme_Settings$optionLayout, model.layoutWithSidebar, model.displayLanguage),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$Theme_Settings$viewShowHideSettingsOptions = function (model) {
	var theText = model.showExpandedSettings ? '(Hide)' : '(Show)';
	return A2(
		_elm_lang$html$Html$a,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('u-selectable'),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(_user$project$ClientTypes$ToggleShowExpandedSettings),
				_1: {ctor: '[]'}
			}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(theText),
			_1: {ctor: '[]'}
		});
};
var _user$project$Theme_Settings$viewExitToFinalScreenButton = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h3,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('title'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(_user$project$TranslationHelper$getInLanguage, model.displayLanguage, '___EXIT___')),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$button,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('showHideBtn'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(_user$project$ClientTypes$ExitToFinalScreen),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Exit'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Theme_Settings$view = function (model) {
	var settingsClassStr = model.layoutWithSidebar ? 'Settings' : 'Settings__NoSidebar';
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class(settingsClassStr),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: model.showExitToFinalScreenButton ? _user$project$Theme_Settings$viewExitToFinalScreenButton(model) : _elm_lang$html$Html$text(''),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h3,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('title'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(
							A2(_user$project$TranslationHelper$getInLanguage, model.displayLanguage, '___Settings___')),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text('  '),
							_1: {
								ctor: '::',
								_0: _user$project$Theme_Settings$viewShowHideSettingsOptions(model),
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: model.showExpandedSettings ? A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _user$project$Theme_Settings$viewLanguageGpsAudioAndLayoutOptions(model),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$br,
									{ctor: '[]'},
									{ctor: '[]'}),
								_1: {
									ctor: '::',
									_0: model.saveLoadEnabled ? _user$project$Theme_Settings$viewSaveLoadButtons(model) : _elm_lang$html$Html$text(''),
									_1: {ctor: '[]'}
								}
							}
						}) : _elm_lang$html$Html$text(''),
					_1: {ctor: '[]'}
				}
			}
		});
};
var _user$project$Theme_Settings$update = F2(
	function (msg, model) {
		var _p1 = msg;
		switch (_p1.ctor) {
			case 'SetDontNeedToBeInZone':
				return _elm_lang$core$Native_Utils.update(
					model,
					{dontNeedToBeInZone: _p1._0});
			case 'SetDisplayLanguage':
				return _elm_lang$core$Native_Utils.update(
					model,
					{displayLanguage: _p1._0});
			case 'SetAvailableLanguages':
				return _elm_lang$core$Native_Utils.update(
					model,
					{availableLanguages: _p1._0});
			case 'SettingsToggleShowExpanded':
				return _elm_lang$core$Native_Utils.update(
					model,
					{showExpandedSettings: !model.showExpandedSettings});
			case 'SettingsChangeOptionAutoplay':
				return _elm_lang$core$Native_Utils.update(
					model,
					{audioAutoplay: _p1._0});
			case 'SettingsToggleShowHideSaveLoadBtns':
				return _elm_lang$core$Native_Utils.update(
					model,
					{showSaveLoad: !model.showSaveLoad});
			case 'SettingsLayoutWithSidebar':
				return _elm_lang$core$Native_Utils.update(
					model,
					{layoutWithSidebar: _p1._0});
			default:
				return _elm_lang$core$Native_Utils.update(
					model,
					{showExitToFinalScreenButton: !model.showExitToFinalScreenButton});
		}
	});
var _user$project$Theme_Settings$init = function (theLanguages) {
	return {availableLanguages: theLanguages, displayLanguage: 'pt', gpsOptionsEnabled: true, dontNeedToBeInZone: false, audioOptionsEnabled: true, audioAutoplay: false, layoutWithSidebar: true, showAnswerBoxInSideBar: false, showExpandedSettings: false, saveLoadEnabled: true, showSaveLoad: false, showExitToFinalScreenButton: false};
};

var _user$project$Theme_AlertMessages$viewAlertMessages = F2(
	function (lAlertMessages, lgId) {
		return (!_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(lAlertMessages),
			0)) ? A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('alert'),
				_1: {ctor: '[]'}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$List$intersperse,
					A2(
						_elm_lang$html$Html$br,
						{ctor: '[]'},
						{ctor: '[]'}),
					A2(
						_elm_lang$core$List$map,
						function (x) {
							return _elm_lang$html$Html$text(
								A2(_user$project$TranslationHelper$getInLanguage, lgId, x));
						},
						lAlertMessages)),
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$span,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('close'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$ClientTypes$CloseAlert),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('X'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				})) : _elm_lang$html$Html$text('');
	});

var _user$project$Theme_Layout$viewMbAudioFile = F2(
	function (mbAudioFileInfo, audioAutoplay) {
		var audioHtml = A2(
			_elm_lang$core$Maybe$withDefault,
			A2(
				_elm_lang$html$Html$h3,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(''),
					_1: {ctor: '[]'}
				}),
			A2(
				_elm_lang$core$Maybe$map,
				function (fileinfo) {
					return A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$audio,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$src(fileinfo.fileName),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$controls(true),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$autoplay(audioAutoplay),
											_1: {ctor: '[]'}
										}
									}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						});
				},
				mbAudioFileInfo));
		var out = A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: (!_elm_lang$core$Native_Utils.eq(mbAudioFileInfo, _elm_lang$core$Maybe$Nothing)) ? _elm_lang$html$Html$text('Audio : ') : _elm_lang$html$Html$text(''),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: audioHtml,
					_1: {ctor: '[]'}
				}
			});
		return out;
	});
var _user$project$Theme_Layout$viewExtraInfo = F2(
	function (displayState, layoutClassStr) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class(layoutClassStr),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A4(_user$project$Theme_Locations$view, displayState.exits, displayState.currentLocation, displayState.settingsModel.displayLanguage, displayState.settingsModel.layoutWithSidebar),
				_1: {
					ctor: '::',
					_0: A3(_user$project$Theme_Inventory$view, displayState.itemsInInventory, displayState.settingsModel.displayLanguage, displayState.settingsModel.layoutWithSidebar),
					_1: {
						ctor: '::',
						_0: displayState.boolTextBoxInSidebar ? A6(_user$project$Theme_AnswerBox$view, displayState.answerBoxMbText, displayState.settingsModel.displayLanguage, true, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing, 'AnswerBox') : _elm_lang$html$Html$text(''),
						_1: {
							ctor: '::',
							_0: displayState.settingsModel.layoutWithSidebar ? _user$project$Theme_Settings$view(displayState.settingsModel) : _elm_lang$html$Html$text(''),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _user$project$Theme_Layout$view = function (displayState) {
	var _p0 = displayState.layoutWithSidebar ? {ctor: '_Tuple2', _0: 'Layout', _1: 'Layout__Main'} : {ctor: '_Tuple2', _0: 'Layout__NoSidebar', _1: 'Layout__Main__NoSidebar'};
	var layoutClass = _p0._0;
	var layoutMainClass = _p0._1;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'GamePage GamePage--',
					_user$project$Components$getClassName(displayState.currentLocation))),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'GamePage__background GamePage__background--',
							_user$project$Components$getClassName(displayState.currentLocation))),
					_1: {ctor: '[]'}
				},
				{ctor: '[]'}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class(layoutClass),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class(layoutMainClass),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: (!displayState.settingsModel.layoutWithSidebar) ? A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class(''),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _user$project$Theme_Settings$view(displayState.settingsModel),
										_1: {ctor: '[]'}
									}) : _elm_lang$html$Html$text(''),
								_1: {
									ctor: '::',
									_0: A5(_user$project$Theme_CurrentSummary$view, displayState.currentLocation, displayState.itemsInCurrentLocation, displayState.charactersInCurrentLocation, displayState.alertMessages, displayState.settingsModel.displayLanguage),
									_1: {
										ctor: '::',
										_0: (!displayState.layoutWithSidebar) ? A2(_user$project$Theme_Layout$viewExtraInfo, displayState, 'Layout__NoSidebar__ExtraInfo') : _elm_lang$html$Html$text(''),
										_1: {
											ctor: '::',
											_0: A2(_user$project$Theme_Layout$viewMbAudioFile, displayState.mbAudioFileInfo, displayState.audioAutoplay),
											_1: {
												ctor: '::',
												_0: A2(_user$project$Theme_AlertMessages$viewAlertMessages, displayState.alertMessages, displayState.settingsModel.displayLanguage),
												_1: {
													ctor: '::',
													_0: A6(_user$project$Theme_Storyline$view, displayState.storyLine, displayState.settingsModel.displayLanguage, displayState.boolTextBoxInStoryline, displayState.answerBoxMbText, displayState.answerOptionsDict, displayState.ending),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}),
						_1: {
							ctor: '::',
							_0: displayState.layoutWithSidebar ? A2(_user$project$Theme_Layout$viewExtraInfo, displayState, 'Layout__Sidebar') : _elm_lang$html$Html$text(''),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Theme_Layout$DisplayState = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return {currentLocation: a, itemsInCurrentLocation: b, charactersInCurrentLocation: c, exits: d, itemsInInventory: e, answerBoxMbText: f, mbAudioFileInfo: g, audioAutoplay: h, answerOptionsDict: i, layoutWithSidebar: j, boolTextBoxInSidebar: k, boolTextBoxInStoryline: l, settingsModel: m, alertMessages: n, ending: o, storyLine: p};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _user$project$Theme_StartScreen$view = F2(
	function (baseImgUrl, answerBoxModel) {
		var imgUrl = _elm_lang$core$Native_Utils.eq(baseImgUrl, '') ? 'img/introImage.png' : A2(_elm_lang$core$Basics_ops['++'], baseImgUrl, 'introImage.png');
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('TitlePage'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$h1,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('TitlePage__Title'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('A Guided Tour Through Vila Sassetti - Sintra'),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$br,
								{ctor: '[]'},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$h3,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('TitlePage__Byline'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Uma história interactiva por Sintra Ubuntuer '),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('TitlePage__Prologue markdown-body'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$p,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('\n                               a guided tour through Vila Sassetti ( Quinta da Amizade ) - Sintra  ...\n                               '),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$img,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$src(imgUrl),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$class('StartScreenImage'),
												_1: {ctor: '[]'}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('textCenter'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$h3,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text('Please type your name to start game : '),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A6(
											_user$project$Theme_AnswerBox$view,
											answerBoxModel.answerBoxText,
											'pt',
											false,
											_elm_lang$core$Maybe$Nothing,
											_elm_lang$core$Maybe$Just('investigator'),
											'AnswerBoxStartScreen'),
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$span,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('TitlePage__StartGame'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												_user$project$ClientTypes$StartMainGameNewPlayerName(
													A2(
														_elm_lang$core$Maybe$withDefault,
														'',
														function (mbx) {
															return _elm_lang$core$Native_Utils.eq(
																mbx,
																_elm_lang$core$Maybe$Just('')) ? _elm_lang$core$Maybe$Nothing : mbx;
														}(
															A2(_elm_lang$core$Maybe$map, _elm_lang$core$String$trim, answerBoxModel.answerBoxText))))),
											_1: {ctor: '[]'}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Play '),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
	});

var _user$project$Theme_EndScreen$view = function (baseImgUrl) {
	var congratsMessage2 = 'You are now a hiking trail Master  :)';
	var congratsMessage1 = 'Congratulations ! You reached the End ! ...';
	var imgUrl = _elm_lang$core$Native_Utils.eq(baseImgUrl, '') ? 'img/finalImage.png' : A2(_elm_lang$core$Basics_ops['++'], baseImgUrl, 'finalImage.png');
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('TitlePage'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$h1,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('TitlePage__Title'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(congratsMessage1),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$br,
							{ctor: '[]'},
							{ctor: '[]'}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(congratsMessage2),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('TitlePage__Prologue markdown-body'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$p,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('...\n                                '),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$img,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$src(imgUrl),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('StartScreenImage'),
										_1: {ctor: '[]'}
									}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			}
		});
};

var _user$project$TypeConverterHelper$sendToDebug = F3(
	function (doDebug, valStr, returnVal) {
		var _p0 = doDebug;
		if (_p0 === true) {
			var _p1 = A2(_elm_lang$core$Debug$log, valStr, returnVal);
			return returnVal;
		} else {
			return returnVal;
		}
	});
var _user$project$TypeConverterHelper$mbAttributeToMbBool = F2(
	function (doDebug, mbAttrVal) {
		var _p2 = mbAttrVal;
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p2._0.ctor === 'Abool') {
				return _elm_lang$core$Maybe$Just(_p2._0._0);
			} else {
				return A3(_user$project$TypeConverterHelper$sendToDebug, doDebug, 'Trying to convert an attribute which is not of type Astring to a string', _elm_lang$core$Maybe$Nothing);
			}
		}
	});
var _user$project$TypeConverterHelper$mbAttributeToBool = F2(
	function (doDebug, mbAttrVal) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			false,
			A2(_user$project$TypeConverterHelper$mbAttributeToMbBool, doDebug, mbAttrVal));
	});
var _user$project$TypeConverterHelper$mbAttributeToMbString = F2(
	function (doDebug, mbAttrVal) {
		var _p3 = mbAttrVal;
		if (_p3.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p3._0.ctor === 'Astring') {
				return _elm_lang$core$Maybe$Just(_p3._0._0);
			} else {
				return A3(_user$project$TypeConverterHelper$sendToDebug, doDebug, 'Trying to convert an attribute which is not of type Astring to a string', _elm_lang$core$Maybe$Nothing);
			}
		}
	});
var _user$project$TypeConverterHelper$mbAttributeToString = F2(
	function (doDebug, mbAttrVal) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(_user$project$TypeConverterHelper$mbAttributeToMbString, doDebug, mbAttrVal));
	});
var _user$project$TypeConverterHelper$mbAttributeToMbListString = F2(
	function (doDebug, mbAttrVal) {
		var _p4 = mbAttrVal;
		if (_p4.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p4._0.ctor === 'AListString') {
				return _elm_lang$core$Maybe$Just(_p4._0._0);
			} else {
				return A3(_user$project$TypeConverterHelper$sendToDebug, doDebug, 'Trying to convert an attribute which is not of type AListString to a List of strings', _elm_lang$core$Maybe$Nothing);
			}
		}
	});
var _user$project$TypeConverterHelper$mbAttributeToListString = F2(
	function (doDebug, mbAttrVal) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(_user$project$TypeConverterHelper$mbAttributeToMbListString, doDebug, mbAttrVal));
	});
var _user$project$TypeConverterHelper$mbAttributeToMbListStringString = F2(
	function (doDebug, mbAttrVal) {
		var _p5 = mbAttrVal;
		if (_p5.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p5._0.ctor === 'AListStringString') {
				return _elm_lang$core$Maybe$Just(_p5._0._0);
			} else {
				return A3(_user$project$TypeConverterHelper$sendToDebug, doDebug, 'Trying to convert an attribute which is not of type AListStringString to a List of tuples (string , string )', _elm_lang$core$Maybe$Nothing);
			}
		}
	});
var _user$project$TypeConverterHelper$mbAttributeToListStringString = F2(
	function (doDebug, mbAttrVal) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{ctor: '[]'},
			A2(_user$project$TypeConverterHelper$mbAttributeToMbListStringString, doDebug, mbAttrVal));
	});
var _user$project$TypeConverterHelper$mbAttributeToMbDictStringString = F2(
	function (doDebug, mbAttrVal) {
		var _p6 = mbAttrVal;
		if (_p6.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p6._0.ctor === 'ADictStringString') {
				return _elm_lang$core$Maybe$Just(_p6._0._0);
			} else {
				return A3(_user$project$TypeConverterHelper$sendToDebug, doDebug, 'Trying to convert an attribute which is not of type ADictStringString to a Dict String String', _elm_lang$core$Maybe$Nothing);
			}
		}
	});
var _user$project$TypeConverterHelper$mbAttributeToDictStringString = F2(
	function (doDebug, mbAttrVal) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$core$Dict$empty,
			A2(_user$project$TypeConverterHelper$mbAttributeToMbDictStringString, doDebug, mbAttrVal));
	});
var _user$project$TypeConverterHelper$mbAttributeToMbDictStringListStringString = F2(
	function (doDebug, mbAttrVal) {
		var _p7 = mbAttrVal;
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			if (_p7._0.ctor === 'ADictStringLSS') {
				return _elm_lang$core$Maybe$Just(_p7._0._0);
			} else {
				return A3(_user$project$TypeConverterHelper$sendToDebug, doDebug, 'Trying to convert an attribute which is not of type ADictStringLSS to a Dict String (List (String , String )) ', _elm_lang$core$Maybe$Nothing);
			}
		}
	});
var _user$project$TypeConverterHelper$mbAttributeToDictStringListStringString = F2(
	function (doDebug, mbAttrVal) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$core$Dict$empty,
			A2(_user$project$TypeConverterHelper$mbAttributeToMbDictStringListStringString, doDebug, mbAttrVal));
	});

var _user$project$SomeTests$getaListStringOfPossibleIncidents = F2(
	function (lstartincidents, ltups) {
		var getAString = function (elem) {
			return function (x) {
				return (!_elm_lang$core$Native_Utils.eq(x, '')) ? A2(
					_elm_lang$core$Basics_ops['++'],
					'ruleId : ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Tuple$first(elem),
						A2(_elm_lang$core$Basics_ops['++'], ' ,   ', x))) : '';
			}(
				A2(
					_elm_lang$core$String$join,
					'  \n , ',
					_elm_lang$core$Tuple$second(elem)));
		};
		return A2(
			_elm_lang$core$List$filter,
			function (x) {
				return !_elm_lang$core$Native_Utils.eq(x, '');
			},
			A2(
				_elm_lang$core$List$map,
				getAString,
				A2(_elm_lang$core$List$append, lstartincidents, ltups)));
	});
var _user$project$SomeTests$getListIncidents = function (engineModel) {
	var getListIncidents = F2(
		function (lcwcmds, enginemodel) {
			return _elm_lang$core$Tuple$second(
				A2(_user$project$Engine$changeWorld, lcwcmds, enginemodel));
		});
	return _elm_lang$core$Dict$toList(
		A2(
			_elm_lang$core$Dict$map,
			F2(
				function (id, lcwcms) {
					return A2(getListIncidents, lcwcms, engineModel);
				}),
			A2(
				_elm_lang$core$Dict$map,
				F2(
					function (id, v) {
						return v.changes;
					}),
				_user$project$Engine$getStoryRules(engineModel))));
};
var _user$project$SomeTests$getAllPossibleIncidentsAboutCwcmds = F2(
	function (engineModel, lstartincidents) {
		var headerInfo = {
			ctor: '::',
			_0: 'Incidents on tests regarding all possible ChangeWorldCommands :',
			_1: {ctor: '[]'}
		};
		return function (x) {
			return (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$List$length(x),
				0) > 0) ? A2(_elm_lang$core$List$append, headerInfo, x) : {ctor: '[]'};
		}(
			A2(
				_user$project$SomeTests$getaListStringOfPossibleIncidents,
				lstartincidents,
				_user$project$SomeTests$getListIncidents(engineModel)));
	});

var _user$project$Main$viewStartScreen = F2(
	function (baseImgUrl, model) {
		return A2(_user$project$Theme_StartScreen$view, baseImgUrl, model.answerBoxModel);
	});
var _user$project$Main$backendAnswerDecoder = F2(
	function (interactableId, playerAnswer) {
		return A9(
			_elm_lang$core$Json_Decode$map8,
			_user$project$Types$AnswerInfo,
			A2(_elm_lang$core$Json_Decode$field, 'maxTriesReached', _elm_lang$core$Json_Decode$bool),
			_elm_lang$core$Json_Decode$succeed(interactableId),
			A2(_elm_lang$core$Json_Decode$field, 'questionBody', _elm_lang$core$Json_Decode$string),
			_elm_lang$core$Json_Decode$succeed(playerAnswer),
			A2(_elm_lang$core$Json_Decode$field, 'answered', _elm_lang$core$Json_Decode$bool),
			A2(_elm_lang$core$Json_Decode$field, 'correctAnswer', _elm_lang$core$Json_Decode$bool),
			A2(_elm_lang$core$Json_Decode$field, 'incorrectAnswer', _elm_lang$core$Json_Decode$bool),
			A2(_elm_lang$core$Json_Decode$field, 'additionalText', _elm_lang$core$Json_Decode$string));
	});
var _user$project$Main$getBackendAnswerInfo = F3(
	function (interactableId, interactionExtraInfo, strUrl) {
		var request = _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {
					ctor: '::',
					_0: A2(_elm_lang$http$Http$header, 'x-api-key', 'CfcnuERGFYh1KALSjTO4qh4lRFV762GIHTO73nuUTqg'),
					_1: {ctor: '[]'}
				},
				url: strUrl,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(
					A2(
						_user$project$Main$backendAnswerDecoder,
						interactableId,
						A2(_elm_lang$core$Maybe$withDefault, '', interactionExtraInfo.mbInputText))),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
		return A2(
			_elm_lang$http$Http$send,
			A2(_user$project$ClientTypes$AnswerChecked, interactableId, interactionExtraInfo),
			request);
	});
var _user$project$Main$getNewCoords = F4(
	function (interactableId, mbGpsZone, bval, interactionExtraInfo) {
		return A2(
			_elm_lang$core$Task$attempt,
			A4(_user$project$ClientTypes$NewCoordsForInterId, interactableId, mbGpsZone, bval, interactionExtraInfo),
			_elm_lang$geolocation$Geolocation$now);
	});
var _user$project$Main$helperEmptyStringToNothing = function (theStr) {
	return _elm_lang$core$Native_Utils.eq(theStr, '') ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(theStr);
};
var _user$project$Main$convertToListIdExtraInfo = function (lobjs) {
	return A2(
		_elm_lang$core$List$map,
		function (x) {
			return {
				ctor: '_Tuple2',
				_0: x.interactableId,
				_1: A4(
					_user$project$Types$InteractionExtraInfo,
					_user$project$Main$helperEmptyStringToNothing(x.inputText),
					x.geolocationInfoText,
					_user$project$Types$CommunicationFailure,
					_user$project$Main$helperEmptyStringToNothing(x.mbMatchedRuleId))
			};
		},
		lobjs);
};
var _user$project$Main$findEntity = F2(
	function (model, id) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			_user$project$Components$entity(id),
			_elm_lang$core$List$head(
				A2(
					_elm_lang$core$List$filter,
					function (_p0) {
						return A2(
							F2(
								function (x, y) {
									return _elm_lang$core$Native_Utils.eq(x, y);
								}),
							id,
							_elm_lang$core$Tuple$first(_p0));
					},
					model.itemsLocationsAndCharacters)));
	});
var _user$project$Main$getExtraInfoFromModel = F2(
	function (model, interactableId) {
		var currLocNameAndCoords = A2(
			_user$project$Components$getDictLgNamesAndCoords,
			_user$project$OurStory2_Narrative$desiredLanguages,
			A2(
				_user$project$Main$findEntity,
				model,
				_user$project$Engine$getCurrentLocation(model.engineModel)));
		return A4(
			_user$project$Types$InteractionExtraInfo,
			model.mbSentText,
			A4(_user$project$GpsUtils$getCurrentGeoReportAsText, currLocNameAndCoords, model.geoLocation, model.geoDistances, 3),
			A2(
				_elm_lang$core$Maybe$withDefault,
				_user$project$Types$NoInfoYet,
				A2(_elm_lang$core$Dict$get, interactableId, model.bkendAnswerStatusDict)),
			_elm_lang$core$Maybe$Nothing);
	});
var _user$project$Main$updateInterExtraInfoWithGeoInfo = F2(
	function (extraInforecord, model) {
		var currLocNameAndCoords = A2(
			_user$project$Components$getDictLgNamesAndCoords,
			_user$project$OurStory2_Narrative$desiredLanguages,
			A2(
				_user$project$Main$findEntity,
				model,
				_user$project$Engine$getCurrentLocation(model.engineModel)));
		return _elm_lang$core$Native_Utils.update(
			extraInforecord,
			{
				geolocationInfoText: A4(_user$project$GpsUtils$getCurrentGeoReportAsText, currLocNameAndCoords, model.geoLocation, model.geoDistances, 3)
			});
	});
var _user$project$Main$viewMainGame = function (model) {
	var theStoryLine = A2(
		_elm_lang$core$Maybe$withDefault,
		{ctor: '[]'},
		A2(_elm_lang$core$Dict$get, model.settingsModel.displayLanguage, model.languageStoryLines));
	var mbInteactableIdAtTop = A2(
		_elm_lang$core$Maybe$map,
		function (_) {
			return _.interactableId;
		},
		_elm_lang$core$List$head(theStoryLine));
	var currentLocation = A2(
		_user$project$Main$findEntity,
		model,
		_user$project$Engine$getCurrentLocation(model.engineModel));
	var displayState = {
		currentLocation: currentLocation,
		itemsInCurrentLocation: A2(
			_elm_lang$core$List$map,
			_user$project$Main$findEntity(model),
			_user$project$Engine$getItemsInCurrentLocation(model.engineModel)),
		charactersInCurrentLocation: A2(
			_elm_lang$core$List$map,
			_user$project$Main$findEntity(model),
			_user$project$Engine$getCharactersInCurrentLocation(model.engineModel)),
		exits: A2(
			_elm_lang$core$List$map,
			function (_p1) {
				var _p2 = _p1;
				return {
					ctor: '_Tuple2',
					_0: _p2._0,
					_1: A2(_user$project$Main$findEntity, model, _p2._1)
				};
			},
			_user$project$Components$getExits(currentLocation)),
		itemsInInventory: A2(
			_elm_lang$core$List$map,
			_user$project$Main$findEntity(model),
			_user$project$Engine$getItemsInInventory(model.engineModel)),
		answerBoxMbText: model.answerBoxModel.answerBoxText,
		mbAudioFileInfo: A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$core$Maybe$Nothing,
			A2(
				_elm_lang$core$Maybe$map,
				function (_) {
					return _.mbAudio;
				},
				_elm_lang$core$List$head(theStoryLine))),
		audioAutoplay: model.settingsModel.audioAutoplay,
		answerOptionsDict: A2(
			_elm_lang$core$Maybe$withDefault,
			_elm_lang$core$Dict$empty,
			A2(
				_elm_lang$core$Maybe$map,
				_user$project$TypeConverterHelper$mbAttributeToDictStringListStringString(model.debugMode),
				A2(
					_elm_lang$core$Maybe$map,
					function (x) {
						return A3(_user$project$Engine$getInteractableAttribute, 'answerOptionsList', x, model.engineModel);
					},
					mbInteactableIdAtTop))),
		layoutWithSidebar: model.settingsModel.layoutWithSidebar,
		boolTextBoxInSidebar: false,
		boolTextBoxInStoryline: function () {
			var _p3 = mbInteactableIdAtTop;
			if (_p3.ctor === 'Nothing') {
				return false;
			} else {
				var _p4 = _p3._0;
				return A2(_user$project$Engine$isWritable, _p4, model.engineModel) && (!_elm_lang$core$Native_Utils.eq(
					A2(_elm_lang$core$Dict$get, _p4, model.bkendAnswerStatusDict),
					_elm_lang$core$Maybe$Just(_user$project$Types$WaitingForInfoRequested)));
			}
		}(),
		settingsModel: model.settingsModel,
		alertMessages: model.alertMessages,
		ending: _user$project$Engine$getEndingText(model.engineModel),
		storyLine: theStoryLine
	};
	return (!model.loaded) ? A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('Loading'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Loading...'),
			_1: {ctor: '[]'}
		}) : _user$project$Theme_Layout$view(displayState);
};
var _user$project$Main$view = function (model) {
	return model.displayStartScreen ? A2(_user$project$Main$viewStartScreen, model.baseImgUrl, model) : (model.displayEndScreen ? _user$project$Theme_EndScreen$view(model.baseImgUrl) : _user$project$Main$viewMainGame(model));
};
var _user$project$Main$init = function (flags) {
	var debugMode = true;
	var settingsmodel = _user$project$Theme_Settings$init(_user$project$OurStory2_Narrative$initialChoiceLanguages);
	var displaylanguage = settingsmodel.displayLanguage;
	var answerboxmodel = _user$project$Theme_AnswerBox$init;
	var dictEntities = _user$project$OurStory2_Rules$rules;
	var _p5 = A2(
		_user$project$Engine$changeWorld,
		_user$project$OurStory2_Rules$startingState,
		A3(
			_user$project$Engine$init,
			{
				items: A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _user$project$OurStory2_Manifest$items),
				locations: A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _user$project$OurStory2_Manifest$locations),
				characters: A2(_elm_lang$core$List$map, _elm_lang$core$Tuple$first, _user$project$OurStory2_Manifest$characters)
			},
			_user$project$OurStory2_Narrative$initialChoiceLanguages,
			A2(
				_elm_lang$core$Dict$map,
				_elm_lang$core$Basics$curry(_user$project$Components$getRuleData),
				dictEntities)));
	var engineModel = _p5._0;
	var lincidents = _p5._1;
	var startLincidents = {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'startingState ', _1: lincidents},
		_1: {ctor: '[]'}
	};
	var allPossibleIncidentsAboutCwcmds = A2(_user$project$SomeTests$getAllPossibleIncidentsAboutCwcmds, engineModel, startLincidents);
	return {
		ctor: '_Tuple2',
		_0: {
			engineModel: engineModel,
			debugMode: false,
			baseImgUrl: flags.baseImgUrl,
			baseSoundUrl: flags.baseSoundUrl,
			itemsLocationsAndCharacters: A2(
				_elm_lang$core$Basics_ops['++'],
				_user$project$OurStory2_Manifest$items,
				A2(_elm_lang$core$Basics_ops['++'], _user$project$OurStory2_Manifest$locations, _user$project$OurStory2_Manifest$characters)),
			playerName: '___investigator___',
			answerBoxModel: answerboxmodel,
			settingsModel: settingsmodel,
			mbSentText: _elm_lang$core$Maybe$Nothing,
			alertMessages: debugMode ? allPossibleIncidentsAboutCwcmds : {ctor: '[]'},
			geoLocation: _elm_lang$core$Maybe$Nothing,
			geoDistances: {ctor: '[]'},
			defaultZoneRadius: 50.0,
			bkendAnswerStatusDict: _elm_lang$core$Dict$fromList(
				A2(
					_elm_lang$core$List$map,
					function (interactableId) {
						return {ctor: '_Tuple2', _0: interactableId, _1: _user$project$Types$NoInfoYet};
					},
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Tuple$first,
						A2(
							_elm_lang$core$Basics_ops['++'],
							_user$project$OurStory2_Manifest$items,
							A2(_elm_lang$core$Basics_ops['++'], _user$project$OurStory2_Manifest$locations, _user$project$OurStory2_Manifest$characters))))),
			loaded: true,
			languageStoryLines: _user$project$OurStory2_Narrative$startingNarratives,
			languageNarrativeContents: A2(
				_elm_lang$core$Dict$map,
				_elm_lang$core$Basics$curry(_user$project$Components$getLanguagesNarrativeDict),
				dictEntities),
			languageAudioContents: A2(
				_elm_lang$core$Dict$map,
				_elm_lang$core$Basics$curry(_user$project$Components$getLanguagesAudioDict),
				dictEntities),
			displayStartScreen: true,
			displayEndScreen: false
		},
		_1: _elm_lang$core$Platform_Cmd$none
	};
};
var _user$project$Main$saveHistoryToStorage = _elm_lang$core$Native_Platform.outgoingPort(
	'saveHistoryToStorage',
	function (v) {
		return {
			playerName: v.playerName,
			lInteractions: _elm_lang$core$Native_List.toArray(v.lInteractions).map(
				function (v) {
					return {interactableId: v.interactableId, inputText: v.inputText, geolocationInfoText: v.geolocationInfoText, mbMatchedRuleId: v.mbMatchedRuleId};
				})
		};
	});
var _user$project$Main$saveHistoryToStorageHelper = function (model) {
	var storyHistory = _user$project$Engine$getHistory(model.engineModel);
	var lToSave = A2(
		_elm_lang$core$List$map,
		function (x) {
			return {
				interactableId: _elm_lang$core$Tuple$first(x),
				inputText: A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					function (_) {
						return _.mbInputText;
					}(
						_elm_lang$core$Tuple$second(x))),
				geolocationInfoText: function (_) {
					return _.geolocationInfoText;
				}(
					_elm_lang$core$Tuple$second(x)),
				mbMatchedRuleId: A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					function (_) {
						return _.mbMatchedRuleId;
					}(
						_elm_lang$core$Tuple$second(x)))
			};
		},
		storyHistory);
	var infoToSave = {playerName: model.playerName, lInteractions: lToSave};
	return {
		ctor: '_Tuple2',
		_0: model,
		_1: _user$project$Main$saveHistoryToStorage(infoToSave)
	};
};
var _user$project$Main$sendRequestForStoredHistory = _elm_lang$core$Native_Platform.outgoingPort(
	'sendRequestForStoredHistory',
	function (v) {
		return v;
	});
var _user$project$Main$getHistoryFromStorage = _elm_lang$core$Native_Platform.incomingPort(
	'getHistoryFromStorage',
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (playerName) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (lInteractions) {
					return _elm_lang$core$Json_Decode$succeed(
						{playerName: playerName, lInteractions: lInteractions});
				},
				A2(
					_elm_lang$core$Json_Decode$field,
					'lInteractions',
					_elm_lang$core$Json_Decode$list(
						A2(
							_elm_lang$core$Json_Decode$andThen,
							function (interactableId) {
								return A2(
									_elm_lang$core$Json_Decode$andThen,
									function (inputText) {
										return A2(
											_elm_lang$core$Json_Decode$andThen,
											function (geolocationInfoText) {
												return A2(
													_elm_lang$core$Json_Decode$andThen,
													function (mbMatchedRuleId) {
														return _elm_lang$core$Json_Decode$succeed(
															{interactableId: interactableId, inputText: inputText, geolocationInfoText: geolocationInfoText, mbMatchedRuleId: mbMatchedRuleId});
													},
													A2(_elm_lang$core$Json_Decode$field, 'mbMatchedRuleId', _elm_lang$core$Json_Decode$string));
											},
											A2(_elm_lang$core$Json_Decode$field, 'geolocationInfoText', _elm_lang$core$Json_Decode$string));
									},
									A2(_elm_lang$core$Json_Decode$field, 'inputText', _elm_lang$core$Json_Decode$string));
							},
							A2(_elm_lang$core$Json_Decode$field, 'interactableId', _elm_lang$core$Json_Decode$string)))));
		},
		A2(_elm_lang$core$Json_Decode$field, 'playerName', _elm_lang$core$Json_Decode$string)));
var _user$project$Main$subscriptions = function (a) {
	return _user$project$Main$getHistoryFromStorage(_user$project$ClientTypes$LoadHistory);
};
var _user$project$Main$loaded = _elm_lang$core$Native_Platform.incomingPort('loaded', _elm_lang$core$Json_Decode$bool);
var _user$project$Main$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return function (n) {
														return function (o) {
															return function (p) {
																return function (q) {
																	return function (r) {
																		return function (s) {
																			return function (t) {
																				return {engineModel: a, debugMode: b, baseImgUrl: c, baseSoundUrl: d, itemsLocationsAndCharacters: e, playerName: f, answerBoxModel: g, settingsModel: h, mbSentText: i, alertMessages: j, geoLocation: k, geoDistances: l, defaultZoneRadius: m, bkendAnswerStatusDict: n, loaded: o, languageStoryLines: p, languageNarrativeContents: q, languageAudioContents: r, displayStartScreen: s, displayEndScreen: t};
																			};
																		};
																	};
																};
															};
														};
													};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Main$Flags = F2(
	function (a, b) {
		return {baseImgUrl: a, baseSoundUrl: b};
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			var _p6 = _user$project$Engine$hasFreezingEnd(model.engineModel);
			if (_p6 === true) {
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			} else {
				var _p7 = msg;
				switch (_p7.ctor) {
					case 'StartMainGame':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{displayStartScreen: false}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'StartMainGameNewPlayerName':
						var _p8 = _p7._0;
						if (!_elm_lang$core$Native_Utils.eq(_p8, '')) {
							var newAnswerBoxModel = A2(_user$project$Theme_AnswerBox$update, '', model.answerBoxModel);
							var newPlayerOneEntity = A2(
								_user$project$Components$updateAllLgsDisplayName,
								_p8,
								A2(_user$project$Main$findEntity, model, 'playerOne'));
							var newEntities = A2(
								_elm_lang$core$List$map,
								function (x) {
									return _elm_lang$core$Native_Utils.eq(
										_elm_lang$core$Tuple$first(x),
										'playerOne') ? newPlayerOneEntity : x;
								},
								model.itemsLocationsAndCharacters);
							var newModel = _elm_lang$core$Native_Utils.update(
								model,
								{itemsLocationsAndCharacters: newEntities, playerName: _p8, answerBoxModel: newAnswerBoxModel});
							var _v4 = _user$project$ClientTypes$StartMainGame,
								_v5 = newModel;
							msg = _v4;
							model = _v5;
							continue update;
						} else {
							var _v6 = _user$project$ClientTypes$StartMainGame,
								_v7 = model;
							msg = _v6;
							model = _v7;
							continue update;
						}
					case 'InteractSendingText':
						var newAnswerBoxModel = A2(_user$project$Theme_AnswerBox$update, '', model.answerBoxModel);
						var newModel = _elm_lang$core$Native_Utils.update(
							model,
							{
								mbSentText: _elm_lang$core$Maybe$Just(
									_elm_lang$core$String$trim(_p7._1)),
								answerBoxModel: newAnswerBoxModel
							});
						var _v8 = _user$project$ClientTypes$Interact(_p7._0),
							_v9 = newModel;
						msg = _v8;
						model = _v9;
						continue update;
					case 'Interact':
						var _p10 = _p7._0;
						var nModel = _elm_lang$core$Native_Utils.update(
							model,
							{
								alertMessages: {ctor: '[]'},
								mbSentText: _elm_lang$core$Maybe$Nothing
							});
						var interactionExtraInfo = A2(_user$project$Main$getExtraInfoFromModel, model, _p10);
						var mbGpsZone = _user$project$Components$getNeedsToBeInGpsZone(
							A2(_user$project$Main$findEntity, model, _p10));
						var needsToBeInZone = A2(
							_elm_lang$core$Maybe$withDefault,
							false,
							A2(
								_elm_lang$core$Maybe$map,
								function (_) {
									return _.needsToBeIn;
								},
								mbGpsZone)) && (!model.settingsModel.dontNeedToBeInZone);
						var needCoords = _user$project$Components$getNeedsGpsCoords(
							A2(_user$project$Main$findEntity, model, _p10));
						var _p9 = (needCoords && (!needsToBeInZone)) ? {
							ctor: '_Tuple2',
							_0: nModel,
							_1: A4(_user$project$Main$getNewCoords, _p10, _elm_lang$core$Maybe$Nothing, false, interactionExtraInfo)
						} : (needsToBeInZone ? {
							ctor: '_Tuple2',
							_0: nModel,
							_1: A4(_user$project$Main$getNewCoords, _p10, mbGpsZone, true, interactionExtraInfo)
						} : A2(
							_user$project$Main$update,
							A2(_user$project$ClientTypes$InteractStepTwo, _p10, interactionExtraInfo),
							nModel));
						var newModel = _p9._0;
						var cmds = _p9._1;
						return {ctor: '_Tuple2', _0: newModel, _1: cmds};
					case 'NewCoordsForInterId':
						if (_p7._4.ctor === 'Ok') {
							var _p14 = _p7._2;
							var _p13 = _p7._1;
							var _p12 = _p7._4._0;
							var _p11 = _p7._0;
							var updatedInteractionExtraInfo = A2(_user$project$Main$updateInterExtraInfoWithGeoInfo, _p7._3, model);
							var distanceToClosestLocations = A3(
								_user$project$GpsUtils$getDistancesTo,
								1000,
								_p12,
								A2(
									_elm_lang$core$List$map,
									_elm_lang$core$Dict$get(model.settingsModel.displayLanguage),
									A2(
										_elm_lang$core$List$map,
										_user$project$Components$getDictLgNamesAndCoords(
											{
												ctor: '::',
												_0: model.settingsModel.displayLanguage,
												_1: {ctor: '[]'}
											}),
										_user$project$OurStory2_Manifest$locations)));
							var newModel = _elm_lang$core$Native_Utils.update(
								model,
								{
									geoLocation: _elm_lang$core$Maybe$Just(_p12),
									geoDistances: distanceToClosestLocations
								});
							var theDistance = A2(_user$project$GpsUtils$getDistance, _p12, _p13);
							var inDistance = A3(_user$project$GpsUtils$checkIfInDistance, _p13, theDistance, model.defaultZoneRadius);
							if ((!_p14) || (_p14 && inDistance)) {
								var _v10 = A2(_user$project$ClientTypes$InteractStepTwo, _p11, updatedInteractionExtraInfo),
									_v11 = newModel;
								msg = _v10;
								model = _v11;
								continue update;
							} else {
								var _v12 = A4(_user$project$ClientTypes$NotInTheZone, _p11, _p13, _p12, theDistance),
									_v13 = newModel;
								msg = _v12;
								model = _v13;
								continue update;
							}
						} else {
							var updatedInteractionExtraInfo = A2(_user$project$Main$updateInterExtraInfoWithGeoInfo, _p7._3, model);
							var newModel = _elm_lang$core$Native_Utils.update(
								model,
								{
									geoLocation: _elm_lang$core$Maybe$Nothing,
									geoDistances: {ctor: '[]'},
									alertMessages: {
										ctor: '::',
										_0: 'Failed to get gps coordinates',
										_1: {ctor: '[]'}
									}
								});
							if (!_p7._2) {
								var _v14 = A2(_user$project$ClientTypes$InteractStepTwo, _p7._0, updatedInteractionExtraInfo),
									_v15 = newModel;
								msg = _v14;
								model = _v15;
								continue update;
							} else {
								return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
							}
						}
					case 'NotInTheZone':
						var _p15 = _p7._2;
						var theName = function (_) {
							return _.name;
						}(
							A2(
								_user$project$Components$getSingleLgDisplayInfo,
								model.settingsModel.displayLanguage,
								A2(_user$project$Main$findEntity, model, _p7._0)));
						var zoneCoordsStr = A2(
							_elm_lang$core$Maybe$withDefault,
							'',
							A2(
								_elm_lang$core$Maybe$map,
								_user$project$GpsUtils$convertDecimalTupleToGps,
								_user$project$GpsUtils$getMbGpsZoneLatLon(_p7._1)));
						var linfoStr = {
							ctor: '::',
							_0: A2(
								_elm_lang$core$Basics_ops['++'],
								' Trying to move to  ',
								A2(_elm_lang$core$Basics_ops['++'], theName, ' failed . ')),
							_1: {
								ctor: '::',
								_0: 'you\'re not close enough.',
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$core$Basics_ops['++'],
										'You are at : ',
										_user$project$GpsUtils$convertDecimalTupleToGps(
											{ctor: '_Tuple2', _0: _p15.latitude, _1: _p15.longitude})),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$core$Basics_ops['++'], 'Please move closer to ', zoneCoordsStr),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												'Your distance to where you should be is : ',
												A2(
													_elm_lang$core$Basics_ops['++'],
													_elm_lang$core$Basics$toString(
														_elm_lang$core$Basics$round(_p7._3)),
													' meters')),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						};
						var newModel = _elm_lang$core$Native_Utils.update(
							model,
							{alertMessages: linfoStr});
						return {ctor: '_Tuple2', _0: newModel, _1: _elm_lang$core$Platform_Cmd$none};
					case 'InteractStepTwo':
						var _p19 = _p7._1;
						var _p18 = _p7._0;
						if (!_elm_lang$core$Native_Utils.eq(
							A2(_elm_lang$core$Dict$get, _p18, model.bkendAnswerStatusDict),
							_elm_lang$core$Maybe$Just(_user$project$Types$WaitingForInfoRequested))) {
							var _p16 = A3(_user$project$Engine$update, _p18, _p19, model.engineModel);
							var newEngineModel = _p16._0;
							var maybeMatchedRuleId = _p16._1;
							var lInteractionIncidents = _p16._2;
							var mbstrUrl = _p16._3;
							var newModel = _elm_lang$core$Native_Utils.update(
								model,
								{engineModel: newEngineModel});
							var newInteractionExtraInfo = _elm_lang$core$Native_Utils.update(
								_p19,
								{mbMatchedRuleId: maybeMatchedRuleId});
							var thestrUrl = A2(
								_elm_lang$core$Basics_ops['++'],
								A2(_elm_lang$core$Maybe$withDefault, '', mbstrUrl),
								A2(
									_elm_lang$core$Basics_ops['++'],
									A2(_elm_lang$core$Maybe$withDefault, '', _p19.mbInputText),
									'/'));
							var interactionIncidents = model.debugMode ? lInteractionIncidents : {ctor: '[]'};
							var _p17 = mbstrUrl;
							if (_p17.ctor === 'Nothing') {
								var _v17 = A2(_user$project$ClientTypes$InteractStepThree, _p18, newInteractionExtraInfo.mbMatchedRuleId),
									_v18 = _elm_lang$core$Native_Utils.update(
									newModel,
									{
										bkendAnswerStatusDict: A3(
											_elm_lang$core$Dict$update,
											_p18,
											function (x) {
												return _elm_lang$core$Maybe$Just(_user$project$Types$NoInfoYet);
											},
											model.bkendAnswerStatusDict),
										alertMessages: interactionIncidents
									});
								msg = _v17;
								model = _v18;
								continue update;
							} else {
								var newInteractionExtraInfoTwo = _elm_lang$core$Native_Utils.update(
									newInteractionExtraInfo,
									{mbInputText: _elm_lang$core$Maybe$Nothing, bkAnsStatus: _user$project$Types$WaitingForInfoRequested});
								var newAnswerBoxModel = A2(_user$project$Theme_AnswerBox$update, '', model.answerBoxModel);
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										newModel,
										{
											bkendAnswerStatusDict: A3(
												_elm_lang$core$Dict$update,
												_p18,
												function (x) {
													return _elm_lang$core$Maybe$Just(_user$project$Types$WaitingForInfoRequested);
												},
												model.bkendAnswerStatusDict),
											alertMessages: {
												ctor: '::',
												_0: '___Checking_Answer___',
												_1: {ctor: '[]'}
											},
											answerBoxModel: newAnswerBoxModel
										}),
									_1: A3(_user$project$Main$getBackendAnswerInfo, _p18, newInteractionExtraInfo, thestrUrl)
								};
							}
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{
										alertMessages: {ctor: '::', _0: 'Please Wait ... \n', _1: model.alertMessages}
									}),
								_1: _elm_lang$core$Platform_Cmd$none
							};
						}
					case 'AnswerChecked':
						if (_p7._2.ctor === 'Ok') {
							var _p21 = _p7._0;
							var _p20 = _p7._2._0;
							var newInteractionExtraInfo = _elm_lang$core$Native_Utils.update(
								_p7._1,
								{
									bkAnsStatus: _user$project$Types$Ans(_p20)
								});
							var newModel = _elm_lang$core$Native_Utils.update(
								model,
								{
									bkendAnswerStatusDict: A3(
										_elm_lang$core$Dict$update,
										_p21,
										function (val) {
											return _elm_lang$core$Maybe$Just(
												_user$project$Types$Ans(_p20));
										},
										model.bkendAnswerStatusDict),
									alertMessages: {ctor: '[]'}
								});
							var _v19 = A2(_user$project$ClientTypes$InteractStepTwo, _p21, newInteractionExtraInfo),
								_v20 = newModel;
							msg = _v19;
							model = _v20;
							continue update;
						} else {
							var _p22 = _p7._0;
							var newInteractionExtraInfo = _elm_lang$core$Native_Utils.update(
								_p7._1,
								{bkAnsStatus: _user$project$Types$CommunicationFailure});
							var newModel = _elm_lang$core$Native_Utils.update(
								model,
								{
									bkendAnswerStatusDict: A3(
										_elm_lang$core$Dict$update,
										_p22,
										function (val) {
											return _elm_lang$core$Maybe$Just(_user$project$Types$CommunicationFailure);
										},
										model.bkendAnswerStatusDict),
									alertMessages: {
										ctor: '::',
										_0: '___Couldnt_check_Answer___',
										_1: {ctor: '[]'}
									}
								});
							var _v21 = A2(_user$project$ClientTypes$InteractStepTwo, _p22, newInteractionExtraInfo),
								_v22 = newModel;
							msg = _v21;
							model = _v22;
							continue update;
						}
					case 'InteractStepThree':
						var _p26 = _p7._1;
						var _p25 = _p7._0;
						var hasEnded = A2(
							_user$project$TypeConverterHelper$mbAttributeToBool,
							model.debugMode,
							A3(_user$project$Engine$getInteractableAttribute, 'gameHasEnded', 'gameStateItem', model.engineModel));
						var newAnswerBoxModel = A2(_user$project$Theme_AnswerBox$update, '', model.answerBoxModel);
						var mergeToDictStoryLine = F2(
							function (tup, storyLinesDict) {
								var newStorySnippet = _elm_lang$core$Tuple$second(tup);
								var languageId = _elm_lang$core$Tuple$first(tup);
								var mbExistingStorySnippets = A2(_elm_lang$core$Dict$get, languageId, storyLinesDict);
								var mbNewval = _elm_lang$core$Maybe$Just(
									{
										ctor: '::',
										_0: newStorySnippet,
										_1: A2(
											_elm_lang$core$Maybe$withDefault,
											{ctor: '[]'},
											mbExistingStorySnippets)
									});
								return A3(
									_elm_lang$core$Dict$update,
									languageId,
									function (mbval) {
										return mbNewval;
									},
									storyLinesDict);
							});
						var updateNarrativeContent = _elm_lang$core$Maybe$map(
							function (narrative) {
								return A2(
									_elm_lang$core$Maybe$withDefault,
									narrative,
									_wernerdegroot$listzipper$List_Zipper$next(narrative));
							});
						var updateNarrativeLgsDict = function (mbDict) {
							var _p23 = mbDict;
							if (_p23.ctor === 'Just') {
								return _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$core$Dict$map,
										F2(
											function (lgid, val) {
												return A2(
													_elm_lang$core$Maybe$withDefault,
													val,
													updateNarrativeContent(
														_elm_lang$core$Maybe$Just(val)));
											}),
										_p23._0));
							} else {
								return _elm_lang$core$Maybe$Nothing;
							}
						};
						var updatedContent = A2(
							_elm_lang$core$Maybe$withDefault,
							model.languageNarrativeContents,
							A2(
								_elm_lang$core$Maybe$map,
								function (id) {
									return A3(_elm_lang$core$Dict$update, id, updateNarrativeLgsDict, model.languageNarrativeContents);
								},
								_p26));
						var mbsuggestInteractionId = A2(
							_user$project$TypeConverterHelper$mbAttributeToMbString,
							model.debugMode,
							A3(_user$project$Engine$getInteractableAttribute, 'suggestedInteraction', _p25, model.engineModel));
						var temporaryHackToSubstitueImgUrl = F2(
							function (baseImgUrl, theStr) {
								return (!_elm_lang$core$Native_Utils.eq(baseImgUrl, '')) ? A4(
									_elm_lang$core$Regex$replace,
									_elm_lang$core$Regex$All,
									_elm_lang$core$Regex$regex('\\(img\\/'),
									function (_p24) {
										return A2(_elm_lang$core$Basics_ops['++'], '(', baseImgUrl);
									},
									theStr) : theStr;
							});
						var additionalTextDict = A2(
							_user$project$TypeConverterHelper$mbAttributeToDictStringString,
							model.debugMode,
							A3(_user$project$Engine$getInteractableAttribute, 'additionalTextDict', _p25, model.engineModel));
						var isLastZip = function (val) {
							return _elm_lang$core$Native_Utils.eq(
								_wernerdegroot$listzipper$List_Zipper$next(val),
								_elm_lang$core$Maybe$Nothing) ? true : false;
						};
						var newEngineModel = model.engineModel;
						var getTheNarrativeHeader = function (languageId) {
							return A2(
								_elm_lang$core$String$join,
								' ',
								A2(
									_elm_lang$core$List$map,
									function (x) {
										return A2(_user$project$TranslationHelper$getInLanguage, languageId, x);
									},
									A2(
										_elm_lang$core$String$split,
										' ',
										A2(
											_user$project$TypeConverterHelper$mbAttributeToString,
											model.debugMode,
											A3(_user$project$Engine$getInteractableAttribute, 'narrativeHeader', _p25, newEngineModel)))));
						};
						var getTheWrittenContent = function (languageId) {
							return A2(
								_elm_lang$core$String$join,
								' ',
								A2(
									_elm_lang$core$List$map,
									function (x) {
										return A2(_user$project$TranslationHelper$getInLanguage, languageId, x);
									},
									A2(
										_elm_lang$core$String$split,
										' ',
										A2(
											_elm_lang$core$Maybe$withDefault,
											'',
											A2(_user$project$Engine$getItemWrittenContent, _p25, newEngineModel)))));
						};
						var wrapWithHeaderWrittenContentAndAdditionalText = F2(
							function (lgId, mainContent) {
								return A2(
									_elm_lang$core$Basics_ops['++'],
									getTheNarrativeHeader(lgId),
									A2(
										_elm_lang$core$Basics_ops['++'],
										A2(_elm_lang$core$Basics_ops['++'], '\n', mainContent),
										A2(
											_elm_lang$core$Basics_ops['++'],
											A2(
												_elm_lang$core$Basics_ops['++'],
												'\n',
												getTheWrittenContent(lgId)),
											A2(
												_elm_lang$core$Basics_ops['++'],
												'  \n',
												A2(
													_elm_lang$core$Maybe$withDefault,
													'',
													A2(_elm_lang$core$Dict$get, lgId, additionalTextDict))))));
							});
						var narrativesForThisInteraction = {
							interactableNames: A2(
								_user$project$Components$getDictLgNames,
								_user$project$OurStory2_Narrative$desiredLanguages,
								A2(_user$project$Main$findEntity, model, _p25)),
							interactableCssSelector: _user$project$Components$getClassName(
								A2(_user$project$Main$findEntity, model, _p25)),
							narratives: function () {
								var dict2 = A2(
									_elm_lang$core$Dict$map,
									F2(
										function (lgId, val) {
											return {
												ctor: '_Tuple2',
												_0: A2(wrapWithHeaderWrittenContentAndAdditionalText, lgId, val),
												_1: true
											};
										}),
									A2(
										_user$project$Components$getDictLgDescriptions,
										_user$project$OurStory2_Narrative$desiredLanguages,
										A2(_user$project$Main$findEntity, model, _p25)));
								var dict1 = A2(
									_elm_lang$core$Dict$map,
									F2(
										function (lgId, val) {
											return {
												ctor: '_Tuple2',
												_0: A2(
													wrapWithHeaderWrittenContentAndAdditionalText,
													lgId,
													A2(
														temporaryHackToSubstitueImgUrl,
														model.baseImgUrl,
														_wernerdegroot$listzipper$List_Zipper$current(val))),
												_1: isLastZip(val)
											};
										}),
									A2(
										_elm_lang$core$Maybe$withDefault,
										_elm_lang$core$Dict$empty,
										A2(
											_elm_lang$core$Maybe$andThen,
											function (ruleId) {
												return A2(_elm_lang$core$Dict$get, ruleId, model.languageNarrativeContents);
											},
											_p26)));
								return A2(_user$project$Components$mergeDicts, dict2, dict1);
							}(),
							audios: A2(
								_elm_lang$core$Dict$map,
								F2(
									function (lgId, val) {
										return _elm_lang$core$Native_Utils.update(
											val,
											{
												fileName: A2(_elm_lang$core$Basics_ops['++'], model.baseSoundUrl, val.fileName)
											});
									}),
								A2(
									_elm_lang$core$Maybe$withDefault,
									_elm_lang$core$Dict$empty,
									A2(
										_elm_lang$core$Maybe$andThen,
										function (ruleId) {
											return A2(_elm_lang$core$Dict$get, ruleId, model.languageAudioContents);
										},
										_p26))),
							mbSuggestedInteractionId: mbsuggestInteractionId,
							suggestedInteractionNameDict: (!_elm_lang$core$Native_Utils.eq(mbsuggestInteractionId, _elm_lang$core$Maybe$Nothing)) ? A2(
								_user$project$Components$getDictLgNames,
								_user$project$OurStory2_Narrative$desiredLanguages,
								A2(
									_user$project$Main$findEntity,
									model,
									A2(_elm_lang$core$Maybe$withDefault, '', mbsuggestInteractionId))) : _elm_lang$core$Dict$empty
						};
						var newLanguageStoryLines = function () {
							var nfti = narrativesForThisInteraction;
							var llgssnippets = A2(
								_elm_lang$core$List$map,
								function (lgId) {
									return {
										ctor: '_Tuple2',
										_0: lgId,
										_1: {
											interactableName: A2(
												_elm_lang$core$Maybe$withDefault,
												A2(
													_elm_lang$core$Maybe$withDefault,
													'noName',
													A2(_elm_lang$core$Dict$get, 'en', nfti.interactableNames)),
												A2(_elm_lang$core$Dict$get, lgId, nfti.interactableNames)),
											interactableId: _p25,
											isWritable: A2(_user$project$Engine$isWritable, _p25, model.engineModel),
											interactableCssSelector: nfti.interactableCssSelector,
											narrative: A2(
												_elm_lang$core$Maybe$withDefault,
												'',
												A2(
													_elm_lang$core$Maybe$map,
													_elm_lang$core$Tuple$first,
													A2(_elm_lang$core$Dict$get, lgId, nfti.narratives))),
											mbAudio: A2(_elm_lang$core$Dict$get, lgId, nfti.audios),
											mbSuggestedInteractionId: nfti.mbSuggestedInteractionId,
											mbSuggestedInteractionName: A2(_elm_lang$core$Dict$get, lgId, nfti.suggestedInteractionNameDict),
											isLastInZipper: A2(
												_elm_lang$core$Maybe$withDefault,
												true,
												A2(
													_elm_lang$core$Maybe$map,
													_elm_lang$core$Tuple$second,
													A2(_elm_lang$core$Dict$get, lgId, nfti.narratives)))
										}
									};
								},
								_elm_lang$core$Dict$keys(narrativesForThisInteraction.narratives));
							return A3(
								_elm_lang$core$List$foldl,
								F2(
									function (x, y) {
										return A2(mergeToDictStoryLine, x, y);
									}),
								model.languageStoryLines,
								llgssnippets);
						}();
						var newSettingsModel = A2(
							_user$project$Theme_Settings$update,
							_user$project$ClientTypes$SetAvailableLanguages(
								_user$project$Engine$getChoiceLanguages(newEngineModel)),
							model.settingsModel);
						var newSettingsModel2 = (hasEnded && (!model.settingsModel.showExitToFinalScreenButton)) ? A2(_user$project$Theme_Settings$update, _user$project$ClientTypes$SettingsShowExitToFinalScreenButton, newSettingsModel) : newSettingsModel;
						var displayLanguage = model.settingsModel.displayLanguage;
						var getAlertMessage = function (x) {
							return (!_elm_lang$core$Native_Utils.eq(x, '')) ? {
								ctor: '::',
								_0: x,
								_1: {ctor: '[]'}
							} : {ctor: '[]'};
						}(
							A2(
								_elm_lang$core$Maybe$withDefault,
								'',
								A2(
									_elm_lang$core$Dict$get,
									displayLanguage,
									A2(
										_user$project$TypeConverterHelper$mbAttributeToDictStringString,
										model.debugMode,
										A3(_user$project$Engine$getInteractableAttribute, 'warningMessage', _p25, model.engineModel)))));
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{engineModel: newEngineModel, alertMessages: getAlertMessage, answerBoxModel: newAnswerBoxModel, languageStoryLines: newLanguageStoryLines, languageNarrativeContents: updatedContent, settingsModel: newSettingsModel2}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'NewUserSubmitedText':
						var newAnswerBoxModel = A2(_user$project$Theme_AnswerBox$update, _p7._0, model.answerBoxModel);
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{answerBoxModel: newAnswerBoxModel}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'ChangeOptionDisplayLanguage':
						var newSettingsModel = A2(
							_user$project$Theme_Settings$update,
							_user$project$ClientTypes$SetDisplayLanguage(_p7._0),
							model.settingsModel);
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{settingsModel: newSettingsModel}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'ChangeOptionDontCheckGps':
						var newSettingsModel = A2(
							_user$project$Theme_Settings$update,
							_user$project$ClientTypes$SetDontNeedToBeInZone(_p7._0),
							model.settingsModel);
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{settingsModel: newSettingsModel}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'CloseAlert':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{
									alertMessages: {ctor: '[]'}
								}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'ChangeOptionAudioAutoplay':
						var newSettingsModel = A2(
							_user$project$Theme_Settings$update,
							_user$project$ClientTypes$SettingsChangeOptionAutoplay(_p7._0),
							model.settingsModel);
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{settingsModel: newSettingsModel}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'LayoutWithSideBar':
						var newSettingsModel = A2(
							_user$project$Theme_Settings$update,
							_user$project$ClientTypes$SettingsLayoutWithSidebar(_p7._0),
							model.settingsModel);
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{settingsModel: newSettingsModel}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'ToggleShowExpandedSettings':
						var newSettingsModel = A2(_user$project$Theme_Settings$update, _user$project$ClientTypes$SettingsToggleShowExpanded, model.settingsModel);
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{settingsModel: newSettingsModel}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'ToggleShowHideSaveLoadBtns':
						var newSettingsModel = A2(_user$project$Theme_Settings$update, _user$project$ClientTypes$SettingsToggleShowHideSaveLoadBtns, model.settingsModel);
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{settingsModel: newSettingsModel}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'SaveHistory':
						return _user$project$Main$saveHistoryToStorageHelper(model);
					case 'RequestForStoredHistory':
						return {
							ctor: '_Tuple2',
							_0: model,
							_1: _user$project$Main$sendRequestForStoredHistory('')
						};
					case 'LoadHistory':
						var _p28 = _p7._0;
						var _p27 = _user$project$Main$init(
							A2(_user$project$Main$Flags, model.baseImgUrl, model.baseSoundUrl));
						var newModel = _p27._0;
						var cmds = _p27._1;
						var savedSettings = model.settingsModel;
						var newlist = _user$project$Main$convertToListIdExtraInfo(_p28.lInteractions);
						var newModel_ = _elm_lang$core$Native_Utils.eq(
							_elm_lang$core$List$length(newlist),
							0) ? _elm_lang$core$Native_Utils.update(
							newModel,
							{
								alertMessages: {ctor: '::', _0: 'Nothing To Load !', _1: newModel.alertMessages}
							}) : _elm_lang$core$Native_Utils.update(
							newModel,
							{
								alertMessages: {ctor: '[]'}
							});
						var playerName = _p28.playerName;
						return A3(
							_ccapndave$elm_update_extra$Update_Extra$andThen,
							_user$project$Main$update,
							A2(_user$project$ClientTypes$ProcessLoadHistory, newlist, savedSettings),
							A3(
								_ccapndave$elm_update_extra$Update_Extra$andThen,
								_user$project$Main$update,
								_user$project$ClientTypes$StartMainGameNewPlayerName(playerName),
								{ctor: '_Tuple2', _0: newModel_, _1: cmds}));
					case 'ProcessLoadHistory':
						var _p32 = _p7._1;
						var _p29 = function () {
							var _p30 = _p7._0;
							if (_p30.ctor === '[]') {
								return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
							} else {
								var _p31 = _p30._0;
								return A3(
									_ccapndave$elm_update_extra$Update_Extra$andThen,
									_user$project$Main$update,
									A2(_user$project$ClientTypes$ProcessLoadHistory, _p30._1, _p32),
									A3(
										_ccapndave$elm_update_extra$Update_Extra$andThen,
										_user$project$Main$update,
										A2(
											_user$project$ClientTypes$InteractStepTwo,
											_elm_lang$core$Tuple$first(_p31),
											_elm_lang$core$Tuple$second(_p31)),
										{ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none}));
							}
						}();
						var newModel = _p29._0;
						var cmds = _p29._1;
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								newModel,
								{settingsModel: _p32}),
							_1: cmds
						};
					case 'ExitToFinalScreen':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{displayEndScreen: true}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					default:
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{loaded: true}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
				}
			}
		}
	});
var _user$project$Main$main = _elm_lang$html$Html$programWithFlags(
	{init: _user$project$Main$init, view: _user$project$Main$view, update: _user$project$Main$update, subscriptions: _user$project$Main$subscriptions})(
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (baseImgUrl) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (baseSoundUrl) {
					return _elm_lang$core$Json_Decode$succeed(
						{baseImgUrl: baseImgUrl, baseSoundUrl: baseSoundUrl});
				},
				A2(_elm_lang$core$Json_Decode$field, 'baseSoundUrl', _elm_lang$core$Json_Decode$string));
		},
		A2(_elm_lang$core$Json_Decode$field, 'baseImgUrl', _elm_lang$core$Json_Decode$string)));

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

