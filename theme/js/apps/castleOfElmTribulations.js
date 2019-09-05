(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
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


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File === 'function' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
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

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? elm$core$Result$Ok(value)
		: (value instanceof String)
			? elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList === 'function' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

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


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}



function _Time_now(millisToPosix)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(millisToPosix(Date.now())));
	});
}

var _Time_setInterval = F2(function(interval, task)
{
	return _Scheduler_binding(function(callback)
	{
		var id = setInterval(function() { _Scheduler_rawSpawn(task); }, interval);
		return function() { clearInterval(id); };
	});
});

function _Time_here()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(
			A2(elm$time$Time$customZone, -(new Date().getTimezoneOffset()), _List_Nil)
		));
	});
}


function _Time_getZoneName()
{
	return _Scheduler_binding(function(callback)
	{
		try
		{
			var name = elm$time$Time$Name(Intl.DateTimeFormat().resolvedOptions().timeZone);
		}
		catch (e)
		{
			var name = elm$time$Time$Offset(new Date().getTimezoneOffset());
		}
		callback(_Scheduler_succeed(name));
	});
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2(elm$json$Json$Decode$map, func, handler.a)
				:
			A3(elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
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
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
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

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return elm$core$Result$isOk(result) ? elm$core$Maybe$Just(result.a) : elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail(elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2(elm$core$Task$perform, elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$True = {$: 'True'};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$List$cons = _List_cons;
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Dict$values = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2(elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var author$project$Beings$BeingsInTileGrid$isTileWalkable = F2(
	function (being, tile) {
		switch (tile.$) {
			case 'Floor':
				var floorinfo = tile.a;
				return floorinfo.isWalkable;
			case 'Grass':
				var grassinfo = tile.a;
				return grassinfo.isWalkable;
			case 'Tree':
				var treeInfo = tile.a;
				return false;
			case 'Stairs':
				var sinfo = tile.a;
				return true;
			case 'Hole':
				var hinfo = tile.a;
				return true;
			case 'Wall':
				var wInfo = tile.a;
				var _n1 = wInfo.mbTeleporterObject;
				if (_n1.$ === 'Just') {
					var tel = _n1.a;
					return true;
				} else {
					return false;
				}
			case 'WallOver':
				var wOverInfo = tile.a;
				return false;
			case 'Door':
				var doorinfo = tile.a;
				return A3(
					elm$core$List$foldl,
					F2(
						function (it, bacc) {
							return A2(
								elm$core$List$member,
								it,
								elm$core$Dict$values(being.inventory)) && bacc;
						}),
					true,
					doorinfo.requiresToOpen);
			case 'Lever':
				var leverInfo = tile.a;
				return false;
			case 'Flag':
				var flagInfo = tile.a;
				return false;
			case 'Column':
				var columnInfo = tile.a;
				return false;
			case 'Water':
				var waterInfo = tile.a;
				return waterInfo.isWalkable;
			case 'ConverterTile':
				var it = tile.a;
				var ct = tile.b;
				return false;
			default:
				return false;
		}
	});
var elm$core$Array$branchFactor = 32;
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_n0.$ === 'SubTree') {
				var subTree = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _n0.a;
				return A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, values);
			}
		}
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Basics$or = _Basics_or;
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var elm$core$Array$get = F2(
	function (index, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? elm$core$Maybe$Just(
			A2(elm$core$Elm$JsArray$unsafeGet, elm$core$Array$bitMask & index, tail)) : elm$core$Maybe$Just(
			A3(elm$core$Array$getHelp, startShift, index, tree)));
	});
var author$project$Grid$get = F2(
	function (_n0, grid) {
		var x = _n0.x;
		var y = _n0.y;
		var _n1 = A2(elm$core$Array$get, y, grid.grid);
		if (_n1.$ === 'Nothing') {
			return elm$core$Maybe$Nothing;
		} else {
			var row = _n1.a;
			return A2(elm$core$Array$get, x, row);
		}
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Beings$BeingsInTileGrid$isGridTileWalkable = F3(
	function (location_, being, grid) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(
				elm$core$Maybe$map,
				author$project$Beings$BeingsInTileGrid$isTileWalkable(being),
				A2(author$project$Grid$get, location_, grid)));
	});
var author$project$Grid$Grid = F2(
	function (grid, size) {
		return {grid: grid, size: size};
	});
var author$project$Grid$Size = F2(
	function (width, height) {
		return {height: height, width: width};
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var author$project$Grid$getTheLength = function (mbla) {
	if (mbla.$ === 'Just') {
		var l = mbla.a;
		return elm$core$List$length(l);
	} else {
		return 0;
	}
};
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, list);
			var jsArray = _n0.a;
			var remainingItems = _n0.b;
			if (_Utils_cmp(
				elm$core$Elm$JsArray$length(jsArray),
				elm$core$Array$branchFactor) < 0) {
				return A2(
					elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					elm$core$List$cons,
					elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return elm$core$Array$empty;
	} else {
		return A3(elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var author$project$Grid$fromList = function (xs) {
	var row = function (x) {
		return elm$core$Array$fromList(x);
	};
	var grid = elm$core$Array$fromList(
		A2(elm$core$List$map, row, xs));
	return A2(
		author$project$Grid$Grid,
		grid,
		A2(
			author$project$Grid$Size,
			A3(elm$core$Basics$composeL, author$project$Grid$getTheLength, elm$core$List$head, xs),
			elm$core$List$length(xs)));
};
var author$project$Grid$toList = A2(
	elm$core$Basics$composeL,
	A2(
		elm$core$Basics$composeL,
		elm$core$List$map(elm$core$Array$toList),
		elm$core$Array$toList),
	function ($) {
		return $.grid;
	});
var author$project$Tile$Unexplored = {$: 'Unexplored'};
var author$project$GameDefinitions$Common$setAllAsUnexplored = function (level) {
	var grid = author$project$Grid$toList(level);
	return author$project$Grid$fromList(
		A2(
			elm$core$List$map,
			function (row) {
				return A2(
					elm$core$List$map,
					function (_n0) {
						return author$project$Tile$Unexplored;
					},
					row);
			},
			grid));
};
var author$project$GameDefinitions$Game1$Game1Definitions$dimensions = _Utils_Tuple2(80, 60);
var author$project$Beings$Beings$CustomMoveTowardsPlayerBeforeAndAfterEnl = F2(
	function (a, b) {
		return {$: 'CustomMoveTowardsPlayerBeforeAndAfterEnl', a: a, b: b};
	});
var author$project$Beings$Beings$DecreaseHealth = {$: 'DecreaseHealth'};
var author$project$Beings$Beings$Down = {$: 'Down'};
var author$project$Grid$Coordinate = F2(
	function (x, y) {
		return {x: x, y: y};
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var author$project$Beings$Beings$fightingCharacterCreationFunc = F7(
	function (elem, fcharId, ename, species_, x_coord, y_coord, floor_id) {
		return {
			armor: 1,
			attacksUsingGameOfThorns: true,
			coordination: 100,
			direction: author$project$Beings$Beings$Down,
			disappearsWhenHealthIsZero: false,
			disappearsWhenIndexOfLightMax: false,
			enlSpellEffect: author$project$Beings$Beings$DecreaseHealth,
			floorId: floor_id,
			health: 10,
			id: fcharId,
			indexOfLight: 1,
			indexOfLightMax: 11,
			initiative: 1,
			inventory: elm$core$Dict$empty,
			location: A2(author$project$Grid$Coordinate, x_coord, y_coord),
			mana: 100,
			maxNrCharacterMovesPerTurn: 2,
			movingStrategy: elm$core$Maybe$Just(
				A2(author$project$Beings$Beings$CustomMoveTowardsPlayerBeforeAndAfterEnl, 0.85, 0.6)),
			name: ename,
			nrMovesInCurrentTurn: 0,
			placed: false,
			playerCanWalkOverIfDead: true,
			power: 2,
			protection: 5,
			species: species_,
			stealth: 20,
			textAvatar: elem
		};
	});
var elm$core$Basics$append = _Utils_append;
var elm$core$String$fromInt = _String_fromNumber;
var author$project$GameDefinitions$Game1$Game1Definitions$initialFightingCharacter = F5(
	function (fcharId, species, x, y, floorId) {
		var elem = 'e' + elm$core$String$fromInt(fcharId);
		return A7(
			author$project$Beings$Beings$fightingCharacterCreationFunc,
			elem,
			fcharId,
			'fightingChar' + elm$core$String$fromInt(fcharId),
			species,
			x,
			y,
			floorId);
	});
var author$project$Beings$Beings$IncreaseIndexOfLight = {$: 'IncreaseIndexOfLight'};
var author$project$Beings$Beings$playerCreationFunc = F5(
	function (elem, pname, x_coord, y_coord, floor_nr) {
		return {
			armor: 1,
			coordination: 100,
			direction: author$project$Beings$Beings$Down,
			energy: 10,
			enlSpellEffect: author$project$Beings$Beings$IncreaseIndexOfLight,
			health: 30,
			hunger: 10,
			indexOfLight: 10,
			indexOfLightMax: 20,
			initiative: 2,
			inventory: elm$core$Dict$empty,
			location: A2(author$project$Grid$Coordinate, x_coord, y_coord),
			mana: 200,
			movingStrategy: elm$core$Maybe$Nothing,
			name: pname,
			placed: false,
			power: 2,
			protection: 5,
			stealth: 20,
			textAvatar: elem
		};
	});
var author$project$GameDefinitions$Game1$Game1Definitions$initialPlayer = F3(
	function (x, y, z) {
		var elem = '@';
		return A5(author$project$Beings$Beings$playerCreationFunc, elem, 'You', x, y, z);
	});
var author$project$GameModel$DisplayRegularGame = {$: 'DisplayRegularGame'};
var author$project$GameModel$RoomsInfo = F4(
	function (roomRectangles, maxNrOfRooms, maxRoomSize, minRoomSize) {
		return {maxNrOfRooms: maxNrOfRooms, maxRoomSize: maxRoomSize, minRoomSize: minRoomSize, roomRectangles: roomRectangles};
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			elm$core$Array$initialize,
			n,
			function (_n0) {
				return e;
			});
	});
var author$project$Grid$initialize = F2(
	function (size, a) {
		var width = size.width;
		var height = size.height;
		return A2(
			author$project$Grid$Grid,
			A3(
				elm$core$Basics$composeL,
				elm$core$Array$repeat(height),
				elm$core$Array$repeat(width),
				a),
			size);
	});
var author$project$Thorns$Types$FightingCharacter = function (a) {
	return {$: 'FightingCharacter', a: a};
};
var author$project$Thorns$Types$initialModel = F3(
	function (player, mbFightCharacter, imgBaseDir_) {
		return {
			currentSegment: _List_Nil,
			gridInteractionOptions: A2(
				author$project$Grid$initialize,
				A2(author$project$Grid$Size, 6, 6),
				elm$core$Maybe$Nothing),
			helpStr: elm$core$Maybe$Nothing,
			imgBaseDir: imgBaseDir_,
			interactionHasFinished: false,
			opponent: A2(
				elm$core$Maybe$map,
				function (x) {
					return author$project$Thorns$Types$FightingCharacter(x);
				},
				mbFightCharacter),
			player: player,
			pseudoRandomIntsPool: _List_Nil
		};
	});
var author$project$Tile$NoTileYet = {$: 'NoTileYet'};
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var author$project$GameDefinitions$Game1$Game1Definitions$initialModelFunc = function (imgBaseDir_) {
	var w = author$project$GameDefinitions$Game1$Game1Definitions$dimensions.a;
	var theFloorId = 1;
	var roomsInfo = elm$core$Maybe$Just(
		A4(author$project$GameModel$RoomsInfo, _List_Nil, 20, 12, 7));
	var randomlyPositionPlayer = true;
	var player_ = A3(author$project$GameDefinitions$Game1$Game1Definitions$initialPlayer, 10, 10, 0);
	var levers = elm$core$Dict$empty;
	var h = author$project$GameDefinitions$Game1$Game1Definitions$dimensions.b;
	var firstMap = A2(
		author$project$Grid$initialize,
		{height: h, width: w},
		author$project$Tile$NoTileYet);
	var firstExplored = author$project$GameDefinitions$Common$setAllAsUnexplored(firstMap);
	var fightingCharacter2 = A5(author$project$GameDefinitions$Game1$Game1Definitions$initialFightingCharacter, 2, 'small_worm', 3, 3, theFloorId);
	var fightingCharacter = A5(author$project$GameDefinitions$Game1$Game1Definitions$initialFightingCharacter, 1, 'slime', 5, 5, theFloorId);
	var createRandomMap = true;
	return _Utils_Tuple3(
		{
			currentDisplay: author$project$GameModel$DisplayRegularGame,
			currentFloorId: theFloorId,
			debugMode: false,
			displayStatsOverlay: false,
			explored: firstExplored,
			fightingCharacters: elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(1, fightingCharacter),
						_Utils_Tuple2(2, fightingCharacter2)
					])),
			floorDict: elm$core$Dict$empty,
			gameCompletionFunc: F2(
				function (fid, coords) {
					return false;
				}),
			gameOfThornsModel: A3(author$project$Thorns$Types$initialModel, player_, elm$core$Maybe$Nothing, imgBaseDir_),
			imgBaseDir: imgBaseDir_,
			level: firstMap,
			leverModelChangerFuncs: elm$core$Dict$empty,
			listeningToKeyInput: true,
			log: _List_fromArray(
				['you enter the dungeon']),
			otherCharacters: elm$core$Dict$empty,
			player: player_,
			pseudoRandomIntsPool: _List_Nil,
			radius_of_visibility: 5,
			roomsInfo: roomsInfo,
			showBlood: true,
			started: true,
			tileHeight: 64,
			tileWidth: 64,
			total_height: author$project$GameDefinitions$Game1$Game1Definitions$dimensions.b,
			total_width: author$project$GameDefinitions$Game1$Game1Definitions$dimensions.a,
			viewport_topleft_x: 3,
			viewport_topleft_y: 3,
			wallPercentage: elm$core$Maybe$Nothing,
			window_height: 12,
			window_width: 15
		},
		createRandomMap,
		randomlyPositionPlayer);
};
var author$project$GameDefinitions$Common$get_total_height = F2(
	function (config_params, nr_rooms_per_column) {
		return ((config_params.border_top_height + config_params.border_bottom_height) + (nr_rooms_per_column * (config_params.square_room_side + (2 * config_params.horizontal_wall_height)))) + ((nr_rooms_per_column - 1) * config_params.vertical_space_between_rooms);
	});
var author$project$GameDefinitions$Common$get_total_width = F2(
	function (config_params, nr_rooms_per_row) {
		return ((config_params.border_left_width + config_params.border_right_width) + (nr_rooms_per_row * (config_params.square_room_side + (2 * config_params.vertical_wall_width)))) + ((nr_rooms_per_row - 1) * config_params.horizontal_space_between_rooms);
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id = 1;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id = 0;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_ = 7;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params = {border_bottom_height: 4, border_left_width: 1, border_right_width: 4, border_top_height: 1, horizontal_space_between_rooms: 1, horizontal_wall_height: 1, small_height_room_height: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_ - 2, small_height_room_width: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_, small_width_room_height: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_, small_width_room_width: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_ - 2, square_room_side: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_, vertical_space_between_rooms: 1, vertical_wall_width: 1};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id = 3;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id = 2;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id = 4;
var author$project$GameDefinitions$Game2$Game2Definitions$common_window_height = 12;
var author$project$GameDefinitions$Game2$Game2Definitions$common_window_width = 12;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id = 5;
var author$project$GameDefinitions$Game2$Game2Definitions$customGameCompletionFunc = F2(
	function (floorid, coords) {
		return _Utils_eq(floorid, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id) && ((coords.x < 12) && (coords.y >= 5));
	});
var author$project$GameDefinitions$Common$gridInitializer = F3(
	function (nr_rows, nr_cols, config_params) {
		return A2(
			author$project$Grid$initialize,
			{
				height: A2(author$project$GameDefinitions$Common$get_total_height, config_params, nr_rows),
				width: A2(author$project$GameDefinitions$Common$get_total_width, config_params, nr_cols)
			},
			author$project$Tile$NoTileYet);
	});
var author$project$GameDefinitions$Common$getHoleCoordsAndHoleInfo = function (holeInfLoc) {
	return _Utils_Tuple2(
		_Utils_Tuple2(holeInfLoc.holeLocation.x, holeInfLoc.holeLocation.y),
		holeInfLoc.holeInfo);
};
var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (_n0.$ === 'SubTree') {
			var subTree = _n0.a;
			var newSub = A4(elm$core$Array$setHelp, shift - elm$core$Array$shiftStep, index, value, subTree);
			return A3(
				elm$core$Elm$JsArray$unsafeSet,
				pos,
				elm$core$Array$SubTree(newSub),
				tree);
		} else {
			var values = _n0.a;
			var newLeaf = A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, values);
			return A3(
				elm$core$Elm$JsArray$unsafeSet,
				pos,
				elm$core$Array$Leaf(newLeaf),
				tree);
		}
	});
var elm$core$Array$set = F3(
	function (index, value, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? array : ((_Utils_cmp(
			index,
			elm$core$Array$tailIndex(len)) > -1) ? A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			tree,
			A3(elm$core$Elm$JsArray$unsafeSet, elm$core$Array$bitMask & index, value, tail)) : A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A4(elm$core$Array$setHelp, startShift, index, value, tree),
			tail));
	});
var author$project$Grid$set = F3(
	function (_n0, a, grid) {
		var x = _n0.x;
		var y = _n0.y;
		if (x < 0) {
			return grid;
		} else {
			if (y < 0) {
				return grid;
			} else {
				if (_Utils_cmp(x, grid.size.width) > -1) {
					return grid;
				} else {
					if (_Utils_cmp(y, grid.size.height) > -1) {
						return grid;
					} else {
						var row = function () {
							var _n1 = A2(elm$core$Array$get, y, grid.grid);
							if (_n1.$ === 'Just') {
								var r = _n1.a;
								return r;
							} else {
								return elm$core$Array$fromList(_List_Nil);
							}
						}();
						var row_ = A3(elm$core$Array$set, x, a, row);
						return _Utils_update(
							grid,
							{
								grid: A3(elm$core$Array$set, y, row_, grid.grid)
							});
					}
				}
			}
		}
	});
var author$project$Tile$Hole = function (a) {
	return {$: 'Hole', a: a};
};
var author$project$GameDefinitions$Common$setHolesInGrid = F2(
	function (holesDict_, grid) {
		var tileHole = function (h_info) {
			return author$project$Tile$Hole(h_info);
		};
		var setTileHole = F4(
			function (xcoord, ycoord, h_info, grid_) {
				return A3(
					author$project$Grid$set,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					tileHole(h_info),
					grid_);
			});
		var lcoordsAndInfo = A2(
			elm$core$List$map,
			author$project$GameDefinitions$Common$getHoleCoordsAndHoleInfo,
			elm$core$Dict$values(holesDict_));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var _n1 = _n0.a;
					var x_coord = _n1.a;
					var y_coord = _n1.b;
					var hinfo = _n0.b;
					return A4(setTileHole, x_coord, y_coord, hinfo, gridacc);
				}),
			grid,
			lcoordsAndInfo);
	});
var author$project$Tile$FloorInfo = F7(
	function (item, floorDrawing, isTransparent, isWalkable, isExplored, visibility, color) {
		return {color: color, floorDrawing: floorDrawing, isExplored: isExplored, isTransparent: isTransparent, isWalkable: isWalkable, item: item, visibility: visibility};
	});
var author$project$GameDefinitions$Common$createItemFloorInfo = function (i_c_info) {
	return A7(
		author$project$Tile$FloorInfo,
		elm$core$Maybe$Just(i_c_info.item),
		elm$core$Maybe$Nothing,
		true,
		true,
		false,
		author$project$Tile$Unexplored,
		'');
};
var author$project$GameDefinitions$Common$get_room_height = F2(
	function (roomType, config_params) {
		switch (roomType.$) {
			case 'SquareRoom':
				return config_params.square_room_side;
			case 'HorizontalRoom':
				return config_params.small_height_room_height;
			default:
				return config_params.small_width_room_height;
		}
	});
var author$project$GameDefinitions$Common$square_room_top_left_x = F3(
	function (config_params, row_nr, col_nr) {
		return (config_params.border_left_width + ((col_nr * config_params.vertical_wall_width) + ((col_nr - 1) * ((config_params.square_room_side + config_params.vertical_wall_width) + config_params.horizontal_space_between_rooms)))) + 1;
	});
var author$project$GameDefinitions$Common$small_height_room_top_left_x = F3(
	function (config_params, row_nr, col_nr) {
		return A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr);
	});
var author$project$GameDefinitions$Common$small_width_room_top_left_x = F3(
	function (config_params, row_nr, col_nr) {
		return A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + 1;
	});
var author$project$GameDefinitions$Common$get_room_top_left_x = F4(
	function (row_nr, col_nr, roomType, config_params) {
		switch (roomType.$) {
			case 'SquareRoom':
				return A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr);
			case 'HorizontalRoom':
				return A3(author$project$GameDefinitions$Common$small_height_room_top_left_x, config_params, row_nr, col_nr);
			default:
				return A3(author$project$GameDefinitions$Common$small_width_room_top_left_x, config_params, row_nr, col_nr);
		}
	});
var author$project$GameDefinitions$Common$square_room_top_left_y = F3(
	function (config_params, row_nr, col_nr) {
		return (config_params.border_top_height + ((row_nr * config_params.horizontal_wall_height) + ((row_nr - 1) * ((config_params.square_room_side + config_params.horizontal_wall_height) + config_params.vertical_space_between_rooms)))) + 1;
	});
var author$project$GameDefinitions$Common$small_height_room_top_left_y = F3(
	function (config_params, row_nr, col_nr) {
		return A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + 1;
	});
var author$project$GameDefinitions$Common$small_width_room_top_left_y = F3(
	function (config_params, row_nr, col_nr) {
		return A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr);
	});
var author$project$GameDefinitions$Common$get_room_top_left_y = F4(
	function (row_nr, col_nr, roomType, config_params) {
		switch (roomType.$) {
			case 'SquareRoom':
				return A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr);
			case 'HorizontalRoom':
				return A3(author$project$GameDefinitions$Common$small_height_room_top_left_y, config_params, row_nr, col_nr);
			default:
				return A3(author$project$GameDefinitions$Common$small_width_room_top_left_y, config_params, row_nr, col_nr);
		}
	});
var author$project$GameDefinitions$Common$get_room_width = F2(
	function (roomType, config_params) {
		switch (roomType.$) {
			case 'SquareRoom':
				return config_params.square_room_side;
			case 'HorizontalRoom':
				return config_params.small_height_room_width;
			default:
				return config_params.small_width_room_width;
		}
	});
var author$project$GameDefinitions$Common$get_width_height_factors = function (position_nr) {
	return (position_nr === 1) ? _Utils_Tuple2(1.0, 1.0) : ((position_nr === 2) ? _Utils_Tuple2(2.0, 1.0) : ((position_nr === 3) ? _Utils_Tuple2(3.0, 1.0) : ((position_nr === 4) ? _Utils_Tuple2(1.0, 2.0) : ((position_nr === 5) ? _Utils_Tuple2(2.0, 2.0) : ((position_nr === 6) ? _Utils_Tuple2(3.0, 2.0) : ((position_nr === 7) ? _Utils_Tuple2(1.0, 3.0) : ((position_nr === 8) ? _Utils_Tuple2(2.0, 3.0) : _Utils_Tuple2(3.0, 3.0))))))));
};
var elm$core$Basics$round = _Basics_round;
var author$project$GameDefinitions$Common$get_room_position_nr = F5(
	function (row_nr, col_nr, pos_nr, roomType, config_params) {
		var _n0 = author$project$GameDefinitions$Common$get_width_height_factors(pos_nr);
		var w_factor = _n0.a;
		var h_factor = _n0.b;
		var add_height = ((A2(author$project$GameDefinitions$Common$get_room_height, roomType, config_params) - 2) * h_factor) / 3.0;
		var pos_y = elm$core$Basics$round(
			A4(author$project$GameDefinitions$Common$get_room_top_left_y, row_nr, col_nr, roomType, config_params) + add_height);
		var add_width = ((A2(author$project$GameDefinitions$Common$get_room_width, roomType, config_params) - 2) * w_factor) / 3.0;
		var pos_x = elm$core$Basics$round(
			A4(author$project$GameDefinitions$Common$get_room_top_left_x, row_nr, col_nr, roomType, config_params) + add_width);
		return _Utils_Tuple2(pos_x, pos_y);
	});
var author$project$GameDefinitions$Common$getItemCoordsAndItemInfo = F2(
	function (config_params, itemInfo) {
		var _n0 = function (_n1) {
			var x = _n1.a;
			var y = _n1.b;
			return _Utils_Tuple2(
				x + A2(
					elm$core$Maybe$withDefault,
					0,
					A2(elm$core$Maybe$map, elm$core$Tuple$first, itemInfo.mbLocationShift)),
				y + A2(
					elm$core$Maybe$withDefault,
					0,
					A2(elm$core$Maybe$map, elm$core$Tuple$second, itemInfo.mbLocationShift)));
		}(
			A5(author$project$GameDefinitions$Common$get_room_position_nr, itemInfo.room_row_nr, itemInfo.room_col_nr, itemInfo.position_in_room, itemInfo.room_type, config_params));
		var x_coord = _n0.a;
		var y_coord = _n0.b;
		return _Utils_Tuple2(
			_Utils_Tuple2(x_coord, y_coord),
			itemInfo);
	});
var author$project$Tile$Floor = function (a) {
	return {$: 'Floor', a: a};
};
var author$project$GameDefinitions$Common$setItemsInGrid = F3(
	function (config_params, dItemsToCreate, grid) {
		var tileItem = function (i_c_info) {
			return author$project$Tile$Floor(
				author$project$GameDefinitions$Common$createItemFloorInfo(i_c_info));
		};
		var setTileFloorItem = F4(
			function (xcoord, ycoord, i_creation_info_, grid_) {
				return A3(
					author$project$Grid$set,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					tileItem(i_creation_info_),
					grid_);
			});
		var lcoordsAndInfo = A2(
			elm$core$List$map,
			author$project$GameDefinitions$Common$getItemCoordsAndItemInfo(config_params),
			elm$core$Dict$values(dItemsToCreate));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var _n1 = _n0.a;
					var x_coord = _n1.a;
					var y_coord = _n1.b;
					var i_creation_info = _n0.b;
					return A4(setTileFloorItem, x_coord, y_coord, i_creation_info, gridacc);
				}),
			grid,
			lcoordsAndInfo);
	});
var author$project$Tile$LandingTargetDrawing = function (a) {
	return {$: 'LandingTargetDrawing', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var author$project$GameDefinitions$Common$createLandingTargetFloorInfo = function (ltinfo) {
	return A7(
		author$project$Tile$FloorInfo,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Just(
			author$project$Tile$LandingTargetDrawing(ltinfo.target_id)),
		true,
		true,
		false,
		author$project$Tile$Unexplored,
		'');
};
var author$project$GameDefinitions$Common$getLandingTargetsCoordsAndTargetInfo = function (targetInfo) {
	var _n0 = targetInfo.mbLocationShift;
	if (_n0.$ === 'Nothing') {
		return _Utils_Tuple2(
			_Utils_Tuple2(targetInfo.x, targetInfo.y),
			targetInfo);
	} else {
		var _n1 = _n0.a;
		var x_shift = _n1.a;
		var y_shift = _n1.b;
		return _Utils_Tuple2(
			_Utils_Tuple2(targetInfo.x + x_shift, targetInfo.y + y_shift),
			targetInfo);
	}
};
var author$project$GameDefinitions$Common$setLandingTargetsInGrid = F2(
	function (landingTargetsDict_, grid) {
		var tileLandingTarget = function (lt_info) {
			return author$project$Tile$Floor(
				author$project$GameDefinitions$Common$createLandingTargetFloorInfo(lt_info));
		};
		var setTileLandingTarget = F4(
			function (xcoord, ycoord, h_info, grid_) {
				return A3(
					author$project$Grid$set,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					tileLandingTarget(h_info),
					grid_);
			});
		var lcoordsAndInfo = A2(
			elm$core$List$map,
			author$project$GameDefinitions$Common$getLandingTargetsCoordsAndTargetInfo,
			elm$core$Dict$values(landingTargetsDict_));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var _n1 = _n0.a;
					var x_coord = _n1.a;
					var y_coord = _n1.b;
					var hinfo = _n0.b;
					return A4(setTileLandingTarget, x_coord, y_coord, hinfo, gridacc);
				}),
			grid,
			lcoordsAndInfo);
	});
var author$project$GameDefinitions$Common$createTeleporterWallInfo = F2(
	function (winfo, tel_info) {
		return _Utils_update(
			winfo,
			{
				mbTeleporterObject: elm$core$Maybe$Just(tel_info)
			});
	});
var elm$core$String$toLower = _String_toLower;
var author$project$GameDefinitions$Common$get_xy_coords_from_room_row_col = F5(
	function (row_nr, col_nr, rtype, pos_in_room, config_params) {
		var top_left_y = A4(author$project$GameDefinitions$Common$get_room_top_left_y, row_nr, col_nr, rtype, config_params);
		var top_left_x = A4(author$project$GameDefinitions$Common$get_room_top_left_x, row_nr, col_nr, rtype, config_params);
		var room_width = A2(author$project$GameDefinitions$Common$get_room_width, rtype, config_params);
		var room_height = A2(author$project$GameDefinitions$Common$get_room_height, rtype, config_params);
		var coords = (elm$core$String$toLower(pos_in_room) === 'up') ? _Utils_Tuple2(top_left_x + ((room_width / 2) | 0), top_left_y - 1) : ((elm$core$String$toLower(pos_in_room) === 'down') ? _Utils_Tuple2(top_left_x + ((room_width / 2) | 0), top_left_y + room_height) : ((elm$core$String$toLower(pos_in_room) === 'left') ? _Utils_Tuple2(top_left_x - 1, top_left_y + ((room_height / 2) | 0)) : _Utils_Tuple2(top_left_x + room_width, top_left_y + ((room_height / 2) | 0))));
		return coords;
	});
var author$project$GameDefinitions$Common$getTeleportersCoordsAndTeleportersInfo = F2(
	function (config_params, teleporterInfLoc) {
		var _n0 = A5(author$project$GameDefinitions$Common$get_xy_coords_from_room_row_col, teleporterInfLoc.teleporterLocation.room_row_nr, teleporterInfLoc.teleporterLocation.room_col_nr, teleporterInfLoc.teleporterLocation.room_type, teleporterInfLoc.teleporterLocation.position_in_room, config_params);
		var x_coord = _n0.a;
		var y_coord = _n0.b;
		var _n1 = function () {
			var _n2 = teleporterInfLoc.teleporterInfo.teleporterType;
			if (_n2.$ === 'Clock') {
				return ((elm$core$String$toLower(teleporterInfLoc.teleporterLocation.position_in_room) === 'up') || (elm$core$String$toLower(teleporterInfLoc.teleporterLocation.position_in_room) === 'down')) ? _Utils_Tuple2(x_coord - 2, y_coord) : _Utils_Tuple2(x_coord, y_coord);
			} else {
				return _Utils_Tuple2(x_coord, y_coord);
			}
		}();
		var x_c = _n1.a;
		var y_c = _n1.b;
		return _Utils_Tuple2(
			_Utils_Tuple2(x_c, y_c),
			teleporterInfLoc.teleporterInfo);
	});
var author$project$Tile$Wall = function (a) {
	return {$: 'Wall', a: a};
};
var author$project$GameDefinitions$Common$setTeleportersInGrid = F3(
	function (config_params, teleporterDict_, grid) {
		var tryTileTeleporter = F4(
			function (xcoord, ycoord, tel_info, grid_) {
				var c_wall_info = A2(
					author$project$Grid$get,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					grid_);
				if ((c_wall_info.$ === 'Just') && (c_wall_info.a.$ === 'Wall')) {
					var winfo = c_wall_info.a.a;
					return elm$core$Maybe$Just(
						author$project$Tile$Wall(
							A2(author$project$GameDefinitions$Common$createTeleporterWallInfo, winfo, tel_info)));
				} else {
					return elm$core$Maybe$Nothing;
				}
			});
		var setTileTeleporter = F4(
			function (xcoord, ycoord, t_info, grid_) {
				var _n2 = A4(tryTileTeleporter, xcoord, ycoord, t_info, grid_);
				if (_n2.$ === 'Just') {
					var atile = _n2.a;
					return A3(
						author$project$Grid$set,
						A2(author$project$Grid$Coordinate, xcoord, ycoord),
						atile,
						grid_);
				} else {
					return grid_;
				}
			});
		var lcoordsAndInfo = A2(
			elm$core$List$map,
			author$project$GameDefinitions$Common$getTeleportersCoordsAndTeleportersInfo(config_params),
			elm$core$Dict$values(teleporterDict_));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var _n1 = _n0.a;
					var x_coord = _n1.a;
					var y_coord = _n1.b;
					var tinfo = _n0.b;
					return A4(setTileTeleporter, x_coord, y_coord, tinfo, gridacc);
				}),
			grid,
			lcoordsAndInfo);
	});
var author$project$GameDefinitions$Common$StairsDown = {$: 'StairsDown'};
var author$project$GameDefinitions$Common$StairsToTheRight = {$: 'StairsToTheRight'};
var author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal = function (mbRoomType) {
	if ((mbRoomType.$ === 'Just') && (mbRoomType.a.$ === 'HorizontalRoom')) {
		var _n1 = mbRoomType.a;
		return 1;
	} else {
		return 0;
	}
};
var author$project$GameDefinitions$Common$addOneIfRoomTypeVertical = function (mbRoomType) {
	if ((mbRoomType.$ === 'Just') && (mbRoomType.a.$ === 'VerticalRoom')) {
		var _n1 = mbRoomType.a;
		return 1;
	} else {
		return 0;
	}
};
var author$project$Tile$Stairs = function (a) {
	return {$: 'Stairs', a: a};
};
var author$project$Tile$StairsInfo = F6(
	function (stairsId, toFloorId, toStairsId, shift, isExplored, visibility) {
		return {isExplored: isExplored, shift: shift, stairsId: stairsId, toFloorId: toFloorId, toStairsId: toStairsId, visibility: visibility};
	});
var author$project$GameDefinitions$Common$getStairsOnRoom = function (row_nr) {
	return function (col_nr) {
		return function (stairsId) {
			return function (toFloorId) {
				return function (toStairsId) {
					return function (orientation) {
						return function (mbFromRoomType) {
							return function (shiftOnDestinationTuple) {
								return function (mbShiftLocationTuple) {
									return function (config_params) {
										return function (grid) {
											var tunnel_width = config_params.vertical_wall_width + 1;
											var tunnel_height = config_params.horizontal_wall_height + 1;
											var tileStairs = author$project$Tile$Stairs(
												A6(author$project$Tile$StairsInfo, stairsId, toFloorId, toStairsId, shiftOnDestinationTuple, false, author$project$Tile$Unexplored));
											var _n0 = A2(
												elm$core$Maybe$withDefault,
												_Utils_Tuple2(0, 0),
												mbShiftLocationTuple);
											var loc_x_shift = _n0.a;
											var loc_y_shift = _n0.b;
											var _n1 = function () {
												switch (orientation.$) {
													case 'StairsToTheLeft':
														return _Utils_Tuple2(
															((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) - tunnel_width) + loc_x_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
															(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + loc_y_shift);
													case 'StairsToTheRight':
														return _Utils_Tuple2(
															((((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + config_params.square_room_side) + tunnel_width) - 1) + loc_x_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
															(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + loc_y_shift);
													case 'StairsUp':
														return _Utils_Tuple2(
															(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + loc_x_shift,
															((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) - tunnel_height) + loc_y_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
													default:
														return _Utils_Tuple2(
															(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + loc_x_shift,
															((((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + config_params.square_room_side) + tunnel_height) - 1) + loc_y_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
												}
											}();
											var top_left_x = _n1.a;
											var top_left_y = _n1.b;
											return A3(
												author$project$Grid$set,
												A2(author$project$Grid$Coordinate, top_left_x, top_left_y),
												tileStairs,
												grid);
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
var author$project$GameModel$SquareRoom = {$: 'SquareRoom'};
var author$project$GameDefinitions$Game2$Basement$addBasementStairs = function (grid) {
	var lstairs = _List_fromArray(
		[
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
			direction: author$project$GameDefinitions$Common$StairsToTheRight,
			mbLocationShift: elm$core$Maybe$Nothing,
			roomType: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			room_col: 6,
			room_row: 6,
			shift: _Utils_Tuple2(1, 0),
			stairsId: 2,
			toFloorId: 0,
			toStairsId: 1
		},
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
			direction: author$project$GameDefinitions$Common$StairsDown,
			mbLocationShift: elm$core$Maybe$Nothing,
			roomType: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			room_col: 6,
			room_row: 6,
			shift: _Utils_Tuple2(0, 1),
			stairsId: 5,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			toStairsId: 6
		}
		]);
	return A3(
		elm$core$List$foldl,
		F2(
			function (rec, gridacc) {
				return author$project$GameDefinitions$Common$getStairsOnRoom(rec.room_row)(rec.room_col)(rec.stairsId)(rec.toFloorId)(rec.toStairsId)(rec.direction)(rec.roomType)(rec.shift)(rec.mbLocationShift)(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)(gridacc);
			}),
		grid,
		lstairs);
};
var author$project$GameModel$RoomRectangle = F4(
	function (top_left_x, top_left_y, width, height) {
		return {height: height, top_left_x: top_left_x, top_left_y: top_left_y, width: width};
	});
var author$project$GameDefinitions$Common$getRoom = F4(
	function (row_nr, col_nr, room_type, config_params) {
		var _n0 = function () {
			switch (room_type.$) {
				case 'SquareRoom':
					return _Utils_Tuple2(
						A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr),
						A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr));
				case 'HorizontalRoom':
					return _Utils_Tuple2(
						A3(author$project$GameDefinitions$Common$small_height_room_top_left_x, config_params, row_nr, col_nr),
						A3(author$project$GameDefinitions$Common$small_height_room_top_left_y, config_params, row_nr, col_nr));
				default:
					return _Utils_Tuple2(
						A3(author$project$GameDefinitions$Common$small_width_room_top_left_x, config_params, row_nr, col_nr),
						A3(author$project$GameDefinitions$Common$small_width_room_top_left_y, config_params, row_nr, col_nr));
			}
		}();
		var top_left_x = _n0.a;
		var top_left_y = _n0.b;
		var _n2 = function () {
			switch (room_type.$) {
				case 'SquareRoom':
					return _Utils_Tuple2(config_params.square_room_side, config_params.square_room_side);
				case 'HorizontalRoom':
					return _Utils_Tuple2(config_params.small_height_room_width, config_params.small_height_room_height);
				default:
					return _Utils_Tuple2(config_params.small_width_room_width, config_params.small_width_room_height);
			}
		}();
		var room_width = _n2.a;
		var room_height = _n2.b;
		return A4(author$project$GameModel$RoomRectangle, top_left_x, top_left_y, room_width, room_height);
	});
var author$project$GameDefinitions$Common$getCustomRoom = F7(
	function (row_nr, col_nr, shift_x, shift_y, rwidth, rheight, config_params) {
		var room = A4(author$project$GameDefinitions$Common$getRoom, row_nr, col_nr, author$project$GameModel$SquareRoom, config_params);
		var new_room = A4(author$project$GameModel$RoomRectangle, room.top_left_x + shift_x, room.top_left_y + shift_y, rwidth, rheight);
		return new_room;
	});
var author$project$GameDefinitions$Game2$Basement$basementCustomRoomRectangles = _List_fromArray(
	[
		A7(author$project$GameDefinitions$Common$getCustomRoom, 4, 3, 5, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Common$TunnelDown = {$: 'TunnelDown'};
var author$project$Tile$DoorToDown = {$: 'DoorToDown'};
var author$project$Tile$DoorToUp = {$: 'DoorToUp'};
var author$project$Tile$NoDoorNoWall = {$: 'NoDoorNoWall'};
var author$project$Tile$UseDoor = function (a) {
	return {$: 'UseDoor', a: a};
};
var author$project$Item$Key = function (a) {
	return {$: 'Key', a: a};
};
var author$project$Tile$defaultBlueDoorInfo = function (dorientation) {
	return {
		color: elm$core$Maybe$Just('blue'),
		isExplored: false,
		isOpen: false,
		orientation: dorientation,
		requiresToOpen: _List_fromArray(
			[
				author$project$Item$Key(
				{keyColor: 'blue'})
			]),
		visibility: author$project$Tile$Unexplored
	};
};
var author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions = {
	bottom: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(author$project$Tile$DoorToUp)),
	left: author$project$Tile$NoDoorNoWall,
	right: author$project$Tile$NoDoorNoWall,
	top: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(author$project$Tile$DoorToDown))
};
var author$project$Tile$defaultGreenDoorInfo = function (dorientation) {
	return {
		color: elm$core$Maybe$Just('green'),
		isExplored: false,
		isOpen: false,
		orientation: dorientation,
		requiresToOpen: _List_fromArray(
			[
				author$project$Item$Key(
				{keyColor: 'green'})
			]),
		visibility: author$project$Tile$Unexplored
	};
};
var author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions = {
	bottom: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(author$project$Tile$DoorToUp)),
	left: author$project$Tile$NoDoorNoWall,
	right: author$project$Tile$NoDoorNoWall,
	top: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(author$project$Tile$DoorToDown))
};
var author$project$Tile$defaultOpenDoorInfo = function (dorientation) {
	return {color: elm$core$Maybe$Nothing, isExplored: false, isOpen: true, orientation: dorientation, requiresToOpen: _List_Nil, visibility: author$project$Tile$Unexplored};
};
var author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions = {
	bottom: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(author$project$Tile$DoorToUp)),
	left: author$project$Tile$NoDoorNoWall,
	right: author$project$Tile$NoDoorNoWall,
	top: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(author$project$Tile$DoorToDown))
};
var author$project$Tile$defaultRedDoorInfo = function (dorientation) {
	return {
		color: elm$core$Maybe$Just('red'),
		isExplored: false,
		isOpen: false,
		orientation: dorientation,
		requiresToOpen: _List_fromArray(
			[
				author$project$Item$Key(
				{keyColor: 'red'})
			]),
		visibility: author$project$Tile$Unexplored
	};
};
var author$project$GameDefinitions$Common$defaultVerticalRedDoorOptions = {
	bottom: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(author$project$Tile$DoorToUp)),
	left: author$project$Tile$NoDoorNoWall,
	right: author$project$Tile$NoDoorNoWall,
	top: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(author$project$Tile$DoorToDown))
};
var author$project$Tile$defaultYellowDoorInfo = function (dorientation) {
	return {
		color: elm$core$Maybe$Just('yellow'),
		isExplored: false,
		isOpen: false,
		orientation: dorientation,
		requiresToOpen: _List_fromArray(
			[
				author$project$Item$Key(
				{keyColor: 'yellow'})
			]),
		visibility: author$project$Tile$Unexplored
	};
};
var author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions = {
	bottom: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(author$project$Tile$DoorToUp)),
	left: author$project$Tile$NoDoorNoWall,
	right: author$project$Tile$NoDoorNoWall,
	top: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(author$project$Tile$DoorToDown))
};
var author$project$GameModel$TunnelRectangle = F4(
	function (top_left_x, top_left_y, width, height) {
		return {height: height, top_left_x: top_left_x, top_left_y: top_left_y, width: width};
	});
var author$project$GameDefinitions$Common$getVerticalTunnel = F9(
	function (row_nr, col_nr, orientation, mbWidth, mbHeight, mbFromRoomType, mbToRoomType, mbShift, config_params) {
		var tunnel_width = A2(elm$core$Maybe$withDefault, 1, mbWidth);
		var tunnel_height = function () {
			if (mbHeight.$ === 'Just') {
				var aheight = mbHeight.a;
				return aheight;
			} else {
				return (((2 * config_params.horizontal_wall_height) + config_params.vertical_space_between_rooms) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType)) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbToRoomType);
			}
		}();
		var _n0 = A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			mbShift);
		var x_shift = _n0.a;
		var y_shift = _n0.b;
		var _n1 = function () {
			if (orientation.$ === 'TunnelUp') {
				return _Utils_Tuple2(
					(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + x_shift,
					((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) - tunnel_height) + y_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
			} else {
				return _Utils_Tuple2(
					(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + x_shift,
					((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + config_params.square_room_side) + y_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
			}
		}();
		var top_left_x = _n1.a;
		var top_left_y = _n1.b;
		return A4(author$project$GameModel$TunnelRectangle, top_left_x, top_left_y, tunnel_width, tunnel_height);
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var author$project$GameDefinitions$Game2$Basement$basementCustomVerticalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				2,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(0, 0))),
			author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				5,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(0, 0))),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				3,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(-2, 0))),
			author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				4,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(2, 0))),
			author$project$GameDefinitions$Common$defaultVerticalRedDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				3,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(2, 0))),
			author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				4,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(-2, 0))),
			author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				4,
				3,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(2, 0))),
			author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				4,
				3,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_space_between_rooms),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(8, 0))),
			author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions)
		]));
var author$project$GameDefinitions$Game2$Basement$basementCustomVerticalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$Basement$basementCustomVerticalTunnelRectanglesWithOptions);
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3(elm$core$Dict$insert, k, v, d) : d;
				}),
			elm$core$Dict$empty,
			dict);
	});
var author$project$GameDefinitions$Common$getHolesByFloorId = F2(
	function (floorId, dHoles) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.holeInfo.floorId, floorId);
				}),
			dHoles);
	});
var author$project$Tile$HoleInfo = F5(
	function (holeId, floorId, target_id, isExplored, visibility) {
		return {floorId: floorId, holeId: holeId, isExplored: isExplored, target_id: target_id, visibility: visibility};
	});
var author$project$GameDefinitions$Common$createHoleInfoWithLocation = F8(
	function (holeId, floorId, row_nr, col_nr, pos_nr, roomType, targetId, config_params) {
		var _n0 = A5(author$project$GameDefinitions$Common$get_room_position_nr, row_nr, col_nr, pos_nr, roomType, config_params);
		var pos_x = _n0.a;
		var pos_y = _n0.b;
		return {
			holeInfo: A5(author$project$Tile$HoleInfo, holeId, floorId, targetId, false, author$project$Tile$Unexplored),
			holeLocation: A2(author$project$Grid$Coordinate, pos_x, pos_y)
		};
	});
var author$project$GameModel$HorizontalRoom = {$: 'HorizontalRoom'};
var author$project$GameModel$VerticalRoom = {$: 'VerticalRoom'};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$holesDict = elm$core$Dict$fromList(
	A2(
		elm$core$List$map,
		function (_n0) {
			var x = _n0.a;
			var func_y = _n0.b;
			return _Utils_Tuple2(
				x,
				func_y(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
		},
		_List_fromArray(
			[
				_Utils_Tuple2(
				1,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, 1, 1, 5, author$project$GameModel$HorizontalRoom, 1)),
				_Utils_Tuple2(
				2,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, 1, 4, 8, author$project$GameModel$HorizontalRoom, 2)),
				_Utils_Tuple2(
				3,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 3, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, 3, 5, 4, author$project$GameModel$SquareRoom, 3)),
				_Utils_Tuple2(
				4,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, 5, 5, 5, author$project$GameModel$SquareRoom, 4)),
				_Utils_Tuple2(
				5,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, 3, 4, 6, author$project$GameModel$SquareRoom, 5)),
				_Utils_Tuple2(
				6,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, 3, 3, 5, author$project$GameModel$VerticalRoom, 6)),
				_Utils_Tuple2(
				7,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, 5, 3, 2, author$project$GameModel$VerticalRoom, 7)),
				_Utils_Tuple2(
				8,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 8, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, 1, 2, 8, author$project$GameModel$SquareRoom, 8)),
				_Utils_Tuple2(
				9,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 9, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, 3, 4, 5, author$project$GameModel$SquareRoom, 9)),
				_Utils_Tuple2(
				10,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, 2, 1, 5, author$project$GameModel$SquareRoom, 10)),
				_Utils_Tuple2(
				11,
				A7(author$project$GameDefinitions$Common$createHoleInfoWithLocation, 11, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, 2, 3, 6, author$project$GameModel$SquareRoom, 11))
			])));
var author$project$GameDefinitions$Game2$Basement$basementHoles = A2(author$project$GameDefinitions$Common$getHolesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$holesDict);
var author$project$Tile$DoorToTheLeft = {$: 'DoorToTheLeft'};
var author$project$Tile$DoorToTheRight = {$: 'DoorToTheRight'};
var author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions = {
	bottom: author$project$Tile$NoDoorNoWall,
	left: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(author$project$Tile$DoorToTheRight)),
	right: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(author$project$Tile$DoorToTheLeft)),
	top: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions = {
	bottom: author$project$Tile$NoDoorNoWall,
	left: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(author$project$Tile$DoorToTheRight)),
	right: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(author$project$Tile$DoorToTheLeft)),
	top: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions = {
	bottom: author$project$Tile$NoDoorNoWall,
	left: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(author$project$Tile$DoorToTheRight)),
	right: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(author$project$Tile$DoorToTheLeft)),
	top: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$defaultHorizontalYellowDoorOptions = {
	bottom: author$project$Tile$NoDoorNoWall,
	left: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(author$project$Tile$DoorToTheRight)),
	right: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(author$project$Tile$DoorToTheLeft)),
	top: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$TunnelToTheRight = {$: 'TunnelToTheRight'};
var author$project$GameDefinitions$Common$getHorizontalTunnel = F9(
	function (row_nr, col_nr, orientation, mbWidth, mbHeight, mbFromRoomType, mbToRoomType, mbShift, config_params) {
		var tunnel_width = function () {
			if (mbWidth.$ === 'Just') {
				var awidth = mbWidth.a;
				return awidth;
			} else {
				return (((2 * config_params.vertical_wall_width) + config_params.horizontal_space_between_rooms) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType)) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbToRoomType);
			}
		}();
		var tunnel_height = A2(elm$core$Maybe$withDefault, 1, mbHeight);
		var _n0 = A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			mbShift);
		var x_shift = _n0.a;
		var y_shift = _n0.b;
		var _n1 = function () {
			if (orientation.$ === 'TunnelToTheLeft') {
				return _Utils_Tuple2(
					((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) - tunnel_width) + x_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
					(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + y_shift);
			} else {
				return _Utils_Tuple2(
					((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + config_params.square_room_side) + x_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
					(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + ((config_params.square_room_side / 2) | 0)) + y_shift);
			}
		}();
		var top_left_x = _n1.a;
		var top_left_y = _n1.b;
		return A4(author$project$GameModel$TunnelRectangle, top_left_x, top_left_y, tunnel_width, tunnel_height);
	});
var author$project$GameDefinitions$Common$getCommonHorizontalTunnel = F3(
	function (row_nr, col_nr, config_params) {
		return A9(author$project$GameDefinitions$Common$getHorizontalTunnel, row_nr, col_nr, author$project$GameDefinitions$Common$TunnelToTheRight, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, config_params);
	});
var author$project$GameDefinitions$Game2$Basement$basementInitialHorizontalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 1),
			author$project$GameDefinitions$Common$defaultHorizontalYellowDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 3),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 3),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 4),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 2),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 3),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 1),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 4),
			author$project$GameDefinitions$Common$defaultHorizontalYellowDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions)
		]));
var author$project$GameDefinitions$Game2$Basement$basementInitialHorizontalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$Basement$basementInitialHorizontalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$Basement$basementInitialRoomRectangles = A2(
	elm$core$List$map,
	function (xfunc) {
		return xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	},
	_List_fromArray(
		[
			A3(author$project$GameDefinitions$Common$getRoom, 1, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 6, author$project$GameModel$SquareRoom)
		]));
var author$project$GameDefinitions$Common$getCommonVerticalTunnel = F3(
	function (row_nr, col_nr, config_params) {
		return A9(author$project$GameDefinitions$Common$getVerticalTunnel, row_nr, col_nr, author$project$GameDefinitions$Common$TunnelDown, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, config_params);
	});
var author$project$GameDefinitions$Game2$Basement$basementInitialVerticalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 2),
			author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 5),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 3),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 4),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 5),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 3),
			author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 4),
			author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 5),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions)
		]));
var author$project$GameDefinitions$Game2$Basement$basementInitialVerticalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$Basement$basementInitialVerticalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Common$getItemsByFloorId = F2(
	function (floorId, dItems) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.floor_id, floorId);
				}),
			dItems);
	});
var author$project$GameDefinitions$Common$ItemCreationInfo = F8(
	function (item_id, item, floor_id, room_row_nr, room_col_nr, room_type, position_in_room, mbLocationShift) {
		return {floor_id: floor_id, item: item, item_id: item_id, mbLocationShift: mbLocationShift, position_in_room: position_in_room, room_col_nr: room_col_nr, room_row_nr: room_row_nr, room_type: room_type};
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			1,
			A8(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				1,
				author$project$Item$Key(
					{keyColor: 'blue'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				4,
				3,
				author$project$GameModel$SquareRoom,
				5,
				elm$core$Maybe$Nothing)),
			_Utils_Tuple2(
			2,
			A8(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				2,
				author$project$Item$Key(
					{keyColor: 'yellow'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				4,
				3,
				author$project$GameModel$SquareRoom,
				7,
				elm$core$Maybe$Just(
					_Utils_Tuple2(5, 0)))),
			_Utils_Tuple2(
			3,
			A8(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				3,
				author$project$Item$Key(
					{keyColor: 'red'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				1,
				2,
				author$project$GameModel$SquareRoom,
				3,
				elm$core$Maybe$Nothing)),
			_Utils_Tuple2(
			4,
			A8(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				4,
				author$project$Item$Key(
					{keyColor: 'green'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				5,
				6,
				author$project$GameModel$SquareRoom,
				5,
				elm$core$Maybe$Nothing))
		]));
var author$project$GameDefinitions$Game2$Basement$basementItems = A2(author$project$GameDefinitions$Common$getItemsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict);
var author$project$GameDefinitions$Common$getLandingTargetsByFloorId = F2(
	function (floorId, dlandingTargets) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.floor_id, floorId);
				}),
			dlandingTargets);
	});
var author$project$GameDefinitions$Common$LandingTargetInfo = F5(
	function (target_id, floor_id, x, y, mbLocationShift) {
		return {floor_id: floor_id, mbLocationShift: mbLocationShift, target_id: target_id, x: x, y: y};
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsDict = function () {
	var _n0 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 7, 6, 5, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x9 = _n0.a;
	var y9 = _n0.b;
	var _n1 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 5, 3, 8, author$project$GameModel$VerticalRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x8 = _n1.a;
	var y8 = _n1.b;
	var _n2 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 5, 4, 2, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x7 = _n2.a;
	var y7 = _n2.b;
	var _n3 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 3, 4, 5, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x6 = _n3.a;
	var y6 = _n3.b;
	var _n4 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 3, 5, 6, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x5 = _n4.a;
	var y5 = _n4.b;
	var _n5 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 3, 5, 5, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x4 = _n5.a;
	var y4 = _n5.b;
	var _n6 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 6, 5, 5, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x3 = _n6.a;
	var y3 = _n6.b;
	var _n7 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 4, 3, 5, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x2 = _n7.a;
	var y2 = _n7.b;
	var _n8 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 6, 4, 6, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x11 = _n8.a;
	var y11 = _n8.b;
	var _n9 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 6, 2, 5, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x10 = _n9.a;
	var y10 = _n9.b;
	var _n10 = A5(author$project$GameDefinitions$Common$get_room_position_nr, 2, 1, 5, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	var x1 = _n10.a;
	var y1 = _n10.b;
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				1,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id, x1, y1, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				2,
				A5(
					author$project$GameDefinitions$Common$LandingTargetInfo,
					2,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
					x2,
					y2,
					elm$core$Maybe$Just(
						_Utils_Tuple2(5, 0)))),
				_Utils_Tuple2(
				3,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 3, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, x3, y3, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				4,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id, x4, y4, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				5,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, x5, y5, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				6,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, x6, y6, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				7,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, x7, y7, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				8,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 8, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, x8, y8, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				9,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 9, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, x9, y9, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				10,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, x10, y10, elm$core$Maybe$Nothing)),
				_Utils_Tuple2(
				11,
				A5(author$project$GameDefinitions$Common$LandingTargetInfo, 11, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, x11, y11, elm$core$Maybe$Nothing))
			]));
}();
var author$project$GameDefinitions$Game2$Basement$basementLandingTargets = A2(author$project$GameDefinitions$Common$getLandingTargetsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsDict);
var author$project$GameDefinitions$Game2$Basement$basementStairsTunnel = _List_fromArray(
	[
		A9(
		author$project$GameDefinitions$Common$getHorizontalTunnel,
		6,
		6,
		author$project$GameDefinitions$Common$TunnelToTheRight,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_wall_width + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		A9(
		author$project$GameDefinitions$Common$getVerticalTunnel,
		6,
		6,
		author$project$GameDefinitions$Common$TunnelDown,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Common$getTeleportersByFloorId = F2(
	function (floorId, dTeleporters) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.teleporterInfo.floor_id, floorId);
				}),
			dTeleporters);
	});
var author$project$GameDefinitions$Common$LocationInfo = F4(
	function (room_row_nr, room_col_nr, room_type, position_in_room) {
		return {position_in_room: position_in_room, room_col_nr: room_col_nr, room_row_nr: room_row_nr, room_type: room_type};
	});
var author$project$GameDefinitions$Common$TeleporterInfoWithLocation = F2(
	function (teleporterInfo, teleporterLocation) {
		return {teleporterInfo: teleporterInfo, teleporterLocation: teleporterLocation};
	});
var author$project$Tile$TeleporterInfo = F7(
	function (teleporter_id, floor_id, teleporterType, target_id, shift, isExplored, visibility) {
		return {floor_id: floor_id, isExplored: isExplored, shift: shift, target_id: target_id, teleporterType: teleporterType, teleporter_id: teleporter_id, visibility: visibility};
	});
var author$project$GameDefinitions$Common$createTeleporterInfoWithLocation = F9(
	function (teleporterId, floorId, teleportertype, row_nr, col_nr, room_type, wall, targetId, shift) {
		var teleporterLocation = A4(author$project$GameDefinitions$Common$LocationInfo, row_nr, col_nr, room_type, wall);
		var teleporterInfo = A7(author$project$Tile$TeleporterInfo, teleporterId, floorId, teleportertype, targetId, shift, false, author$project$Tile$Unexplored);
		return A2(author$project$GameDefinitions$Common$TeleporterInfoWithLocation, teleporterInfo, teleporterLocation);
	});
var author$project$Tile$Barrel = {$: 'Barrel'};
var author$project$Tile$BookCase = {$: 'BookCase'};
var author$project$Tile$Clock = {$: 'Clock'};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			1,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				1,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Barrel,
				2,
				5,
				author$project$GameModel$SquareRoom,
				'right',
				2,
				_Utils_Tuple2(1, 0))),
			_Utils_Tuple2(
			2,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				2,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Barrel,
				1,
				7,
				author$project$GameModel$SquareRoom,
				'left',
				1,
				_Utils_Tuple2(-1, 0))),
			_Utils_Tuple2(
			3,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				3,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Barrel,
				3,
				5,
				author$project$GameModel$SquareRoom,
				'down',
				4,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			4,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				4,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Barrel,
				5,
				5,
				author$project$GameModel$SquareRoom,
				'up',
				3,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			5,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				5,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Barrel,
				1,
				11,
				author$project$GameModel$SquareRoom,
				'down',
				6,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			6,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				6,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Barrel,
				4,
				11,
				author$project$GameModel$SquareRoom,
				'up',
				5,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			7,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				7,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$BookCase,
				4,
				7,
				author$project$GameModel$VerticalRoom,
				'down',
				8,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			8,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				8,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$BookCase,
				6,
				7,
				author$project$GameModel$SquareRoom,
				'up',
				7,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			9,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				9,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$BookCase,
				7,
				7,
				author$project$GameModel$SquareRoom,
				'right',
				10,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			10,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				10,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$BookCase,
				6,
				10,
				author$project$GameModel$SquareRoom,
				'down',
				9,
				_Utils_Tuple2(-1, 0))),
			_Utils_Tuple2(
			11,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				11,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Clock,
				7,
				2,
				author$project$GameModel$SquareRoom,
				'right',
				12,
				_Utils_Tuple2(1, 0))),
			_Utils_Tuple2(
			12,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				12,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				author$project$Tile$Clock,
				7,
				9,
				author$project$GameModel$SquareRoom,
				'left',
				11,
				_Utils_Tuple2(-1, 0))),
			_Utils_Tuple2(
			13,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				13,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				author$project$Tile$BookCase,
				2,
				1,
				author$project$GameModel$SquareRoom,
				'down',
				14,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			14,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				14,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				author$project$Tile$BookCase,
				6,
				1,
				author$project$GameModel$SquareRoom,
				'up',
				13,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			15,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				15,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				author$project$Tile$Clock,
				1,
				2,
				author$project$GameModel$SquareRoom,
				'right',
				16,
				_Utils_Tuple2(1, 0))),
			_Utils_Tuple2(
			16,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				16,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				author$project$Tile$Clock,
				1,
				5,
				author$project$GameModel$SquareRoom,
				'left',
				15,
				_Utils_Tuple2(-1, 0))),
			_Utils_Tuple2(
			17,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				17,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$Barrel,
				3,
				3,
				author$project$GameModel$SquareRoom,
				'down',
				18,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			18,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				18,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$Barrel,
				5,
				3,
				author$project$GameModel$SquareRoom,
				'up',
				17,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			19,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				19,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$Barrel,
				6,
				6,
				author$project$GameModel$VerticalRoom,
				'left',
				20,
				_Utils_Tuple2(-1, 0))),
			_Utils_Tuple2(
			20,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				20,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
				author$project$Tile$Barrel,
				6,
				4,
				author$project$GameModel$SquareRoom,
				'right',
				19,
				_Utils_Tuple2(1, 0))),
			_Utils_Tuple2(
			21,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				21,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$BookCase,
				1,
				5,
				author$project$GameModel$HorizontalRoom,
				'down',
				22,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			22,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				22,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$BookCase,
				7,
				5,
				author$project$GameModel$HorizontalRoom,
				'up',
				21,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			23,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				23,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$BookCase,
				3,
				4,
				author$project$GameModel$SquareRoom,
				'down',
				24,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			24,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				24,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$BookCase,
				5,
				4,
				author$project$GameModel$SquareRoom,
				'up',
				23,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			25,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				25,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$Clock,
				1,
				2,
				author$project$GameModel$SquareRoom,
				'down',
				26,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			26,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				26,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$Clock,
				7,
				2,
				author$project$GameModel$SquareRoom,
				'up',
				25,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			27,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				27,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$Clock,
				1,
				6,
				author$project$GameModel$SquareRoom,
				'down',
				28,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			28,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				28,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				author$project$Tile$Clock,
				7,
				6,
				author$project$GameModel$SquareRoom,
				'up',
				27,
				_Utils_Tuple2(0, -1))),
			_Utils_Tuple2(
			29,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				29,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
				author$project$Tile$Clock,
				5,
				3,
				author$project$GameModel$VerticalRoom,
				'right',
				30,
				_Utils_Tuple2(1, 0))),
			_Utils_Tuple2(
			30,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				30,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
				author$project$Tile$Clock,
				4,
				4,
				author$project$GameModel$VerticalRoom,
				'left',
				29,
				_Utils_Tuple2(-1, 0))),
			_Utils_Tuple2(
			31,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				31,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
				author$project$Tile$Clock,
				1,
				1,
				author$project$GameModel$SquareRoom,
				'down',
				32,
				_Utils_Tuple2(0, 1))),
			_Utils_Tuple2(
			32,
			A9(
				author$project$GameDefinitions$Common$createTeleporterInfoWithLocation,
				32,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
				author$project$Tile$Clock,
				2,
				1,
				author$project$GameModel$SquareRoom,
				'up',
				31,
				_Utils_Tuple2(0, -1)))
		]));
var author$project$GameDefinitions$Game2$Basement$basementTeleporters = A2(author$project$GameDefinitions$Common$getTeleportersByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoDict);
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var author$project$Grid$toCoordinates = function (gridder) {
	var s = gridder.size;
	var xs = function (y) {
		return A2(
			elm$core$List$map,
			function (x) {
				return _Utils_Tuple2(x, y);
			},
			A2(elm$core$List$range, 0, s.width - 1));
	};
	var pairs = A2(
		elm$core$List$concatMap,
		xs,
		A2(elm$core$List$range, 0, s.height - 1));
	return A2(
		elm$core$List$map,
		function (_n0) {
			var x = _n0.a;
			var y = _n0.b;
			return A2(author$project$Grid$Coordinate, x, y);
		},
		pairs);
};
var author$project$Tile$isMbTileWall = function (mbtile) {
	if ((mbtile.$ === 'Just') && (mbtile.a.$ === 'Wall')) {
		return true;
	} else {
		return false;
	}
};
var author$project$Tile$setWallTileOrientation = F2(
	function (orientationStr, tile) {
		if (tile.$ === 'Wall') {
			var winfo = tile.a;
			return author$project$Tile$Wall(
				_Utils_update(
					winfo,
					{orientation: orientationStr}));
		} else {
			return tile;
		}
	});
var author$project$MapGen$correctSomeWallCorners = function (grid) {
	var lcoords = author$project$Grid$toCoordinates(grid);
	var isTopRightCorner = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_));
		});
	var isTopLeftCorner = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_));
		});
	var isThreeWayAtTop = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_)));
		});
	var isThreeWayAtRight = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_)));
		});
	var isThreeWayAtLeft = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_)));
		});
	var isThreeWayAtBottom = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_)));
		});
	var isInVerticalWall = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_));
		});
	var isInHorizontalWall = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_));
		});
	var isFourWay = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_))));
		});
	var isCulDeSacAtTop = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y + 1},
					grid_));
		});
	var isCulDeSacAtRight = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_));
		});
	var isCulDeSacAtLeft = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_));
		});
	var isCulDeSacAtBottom = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_));
		});
	var isBottomRightCorner = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x - 1, y: coords.y},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_));
		});
	var isBottomLeftCorner = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x + 1, y: coords.y},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{x: coords.x, y: coords.y - 1},
					grid_));
		});
	var checkAndUpdateGriCoord = F2(
		function (coord, grid_) {
			var _n0 = A2(author$project$Grid$get, coord, grid_);
			if (_n0.$ === 'Nothing') {
				return grid_;
			} else {
				var tile = _n0.a;
				return A3(isFourWay, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'four_way', tile),
					grid_) : (A3(isThreeWayAtBottom, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'three_way_at_bottom', tile),
					grid_) : (A3(isThreeWayAtRight, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'three_way_at_right', tile),
					grid_) : (A3(isThreeWayAtTop, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'three_way_at_top', tile),
					grid_) : (A3(isThreeWayAtLeft, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'three_way_at_left', tile),
					grid_) : (A3(isTopLeftCorner, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'corner_top_left', tile),
					grid_) : (A3(isTopRightCorner, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'corner_top_right', tile),
					grid_) : (A3(isBottomRightCorner, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'corner_bottom_right', tile),
					grid_) : (A3(isBottomLeftCorner, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'corner_bottom_left', tile),
					grid_) : (A3(isInVerticalWall, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'up', tile),
					grid_) : (A3(isInHorizontalWall, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'horizontal', tile),
					grid_) : (A3(isCulDeSacAtBottom, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'cul_de_sac_at_bottom', tile),
					grid_) : (A3(isCulDeSacAtTop, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'cul_de_sac_at_top', tile),
					grid_) : (A3(isCulDeSacAtLeft, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'cul_de_sac_at_left', tile),
					grid_) : (A3(isCulDeSacAtRight, tile, coord, grid_) ? A3(
					author$project$Grid$set,
					coord,
					A2(author$project$Tile$setWallTileOrientation, 'cul_de_sac_at_right', tile),
					grid_) : grid_))))))))))))));
			}
		});
	return A3(
		elm$core$List$foldl,
		F2(
			function (coord, gacc) {
				return A2(checkAndUpdateGriCoord, coord, gacc);
			}),
		grid,
		lcoords);
};
var author$project$MapGen$determineRectangularRegionBoundaries = F2(
	function (rrect, topBotLeftRightStr) {
		return (topBotLeftRightStr === 'top') ? A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Grid$Coordinate, x, rrect.top_left_y);
			},
			A2(elm$core$List$range, rrect.top_left_x, (rrect.top_left_x + rrect.width) - 1)) : ((topBotLeftRightStr === 'top-1') ? A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Grid$Coordinate, x, rrect.top_left_y - 1);
			},
			A2(elm$core$List$range, rrect.top_left_x, (rrect.top_left_x + rrect.width) - 1)) : ((topBotLeftRightStr === 'top-1andCorners') ? function (lc) {
			return A2(
				elm$core$List$append,
				lc,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.top_left_x + rrect.width, rrect.top_left_y - 1)
					]));
		}(
			A2(
				elm$core$List$append,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.top_left_x - 1, rrect.top_left_y - 1)
					]),
				A2(
					elm$core$List$map,
					function (x) {
						return A2(author$project$Grid$Coordinate, x, rrect.top_left_y - 1);
					},
					A2(elm$core$List$range, rrect.top_left_x, (rrect.top_left_x + rrect.width) - 1)))) : ((topBotLeftRightStr === 'bottom') ? A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Grid$Coordinate, x, (rrect.top_left_y + rrect.height) - 1);
			},
			A2(elm$core$List$range, rrect.top_left_x, (rrect.top_left_x + rrect.width) - 1)) : ((topBotLeftRightStr === 'bottom+1') ? A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Grid$Coordinate, x, ((rrect.top_left_y + rrect.height) - 1) + 1);
			},
			A2(elm$core$List$range, rrect.top_left_x, (rrect.top_left_x + rrect.width) - 1)) : ((topBotLeftRightStr === 'bottom+1andCorners') ? function (lc) {
			return A2(
				elm$core$List$append,
				lc,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.top_left_x + rrect.width, ((rrect.top_left_y + rrect.height) - 1) + 1)
					]));
		}(
			A2(
				elm$core$List$append,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.top_left_x - 1, ((rrect.top_left_y + rrect.height) - 1) + 1)
					]),
				A2(
					elm$core$List$map,
					function (x) {
						return A2(author$project$Grid$Coordinate, x, ((rrect.top_left_y + rrect.height) - 1) + 1);
					},
					A2(elm$core$List$range, rrect.top_left_x, (rrect.top_left_x + rrect.width) - 1)))) : ((topBotLeftRightStr === 'left') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, rrect.top_left_x, y);
			},
			A2(elm$core$List$range, rrect.top_left_y, (rrect.top_left_y + rrect.height) - 1)) : ((topBotLeftRightStr === 'left-1') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, rrect.top_left_x - 1, y);
			},
			A2(elm$core$List$range, rrect.top_left_y, (rrect.top_left_y + rrect.height) - 1)) : ((topBotLeftRightStr === 'right') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, (rrect.top_left_x + rrect.width) - 1, y);
			},
			A2(elm$core$List$range, rrect.top_left_y, (rrect.top_left_y + rrect.height) - 1)) : ((topBotLeftRightStr === 'right+1') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, ((rrect.top_left_x + rrect.width) - 1) + 1, y);
			},
			A2(elm$core$List$range, rrect.top_left_y, (rrect.top_left_y + rrect.height) - 1)) : _List_Nil)))))))));
	});
var author$project$Tile$defaultWallInfo = {isExplored: false, mbTeleporterObject: elm$core$Maybe$Nothing, orientation: 'horizontal', visibility: author$project$Tile$Unexplored};
var author$project$Tile$defaultWallUpInfo = {isExplored: false, mbTeleporterObject: elm$core$Maybe$Nothing, orientation: 'up', visibility: author$project$Tile$Unexplored};
var author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallIfNoTileYet = F3(
	function (rrect, topBotLeftRightStr, grid) {
		var lcoords = A2(author$project$MapGen$determineRectangularRegionBoundaries, rrect, topBotLeftRightStr);
		return A3(
			elm$core$List$foldl,
			F2(
				function (cellcoords, gridacc) {
					return _Utils_eq(
						A2(author$project$Grid$get, cellcoords, gridacc),
						elm$core$Maybe$Just(author$project$Tile$NoTileYet)) ? (((topBotLeftRightStr === 'left-1') || ((topBotLeftRightStr === 'left') || ((topBotLeftRightStr === 'right') || (topBotLeftRightStr === 'right+1')))) ? A3(
						author$project$Grid$set,
						cellcoords,
						author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
						gridacc) : A3(
						author$project$Grid$set,
						cellcoords,
						author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
						gridacc)) : gridacc;
				}),
			grid,
			lcoords);
	});
var author$project$MapGen$createWallBoundaries = F2(
	function (lrrect, grid) {
		var fillBoundariesIfNecessary = F2(
			function (rrect, grid_) {
				return A3(
					author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallIfNoTileYet,
					rrect,
					'right+1',
					A3(
						author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallIfNoTileYet,
						rrect,
						'left-1',
						A3(
							author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallIfNoTileYet,
							rrect,
							'bottom+1andCorners',
							A3(author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallIfNoTileYet, rrect, 'top-1andCorners', grid_))));
			});
		return A3(
			elm$core$List$foldl,
			F2(
				function (rrect, gridacc) {
					return A2(fillBoundariesIfNecessary, rrect, gridacc);
				}),
			grid,
			lrrect);
	});
var author$project$Tile$Door = function (a) {
	return {$: 'Door', a: a};
};
var author$project$Tile$defaultFloorInfo = {color: 'default', floorDrawing: elm$core$Maybe$Nothing, isExplored: false, isTransparent: true, isWalkable: true, item: elm$core$Maybe$Nothing, visibility: author$project$Tile$Unexplored};
var elm$core$Basics$neq = _Utils_notEqual;
var author$project$MapGen$dungeonRectangleToGridFunc = F4(
	function (roomrect, doorWallOptions, mbFloorColor, grid) {
		var useWalls = false;
		var top_y = roomrect.top_left_y;
		var right_x = (roomrect.top_left_x + roomrect.width) - 1;
		var left_x = roomrect.top_left_x;
		var lx = A2(elm$core$List$range, left_x, right_x);
		var floorColor = A2(elm$core$Maybe$withDefault, 'default', mbFloorColor);
		var defaultFloorInfoWithColor = function (x) {
			return _Utils_update(
				x,
				{color: floorColor});
		}(author$project$Tile$defaultFloorInfo);
		var getDoorWallOrFloor = function (doorWallOption) {
			switch (doorWallOption.$) {
				case 'UseWall':
					return author$project$Tile$Wall(author$project$Tile$defaultWallInfo);
				case 'UseDoor':
					var dinfo = doorWallOption.a;
					return author$project$Tile$Door(dinfo);
				default:
					return author$project$Tile$Floor(defaultFloorInfoWithColor);
			}
		};
		var bottom_y = (roomrect.top_left_y + roomrect.height) - 1;
		var generateTile = F2(
			function (xval, yval) {
				return (_Utils_eq(xval, left_x) && (!_Utils_eq(left_x, right_x))) ? getDoorWallOrFloor(doorWallOptions.left) : ((_Utils_eq(xval, right_x) && (!_Utils_eq(left_x, right_x))) ? getDoorWallOrFloor(doorWallOptions.right) : (_Utils_eq(yval, bottom_y) ? getDoorWallOrFloor(doorWallOptions.bottom) : (_Utils_eq(yval, top_y) ? getDoorWallOrFloor(doorWallOptions.top) : author$project$Tile$Floor(defaultFloorInfoWithColor))));
			});
		var ly = A2(elm$core$List$range, top_y, bottom_y);
		var ltiles = A2(
			elm$core$List$concatMap,
			function (xval) {
				return A2(
					elm$core$List$map,
					function (yval) {
						return _Utils_Tuple3(
							xval,
							yval,
							A2(generateTile, xval, yval));
					},
					ly);
			},
			lx);
		var new_grid = A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var xval = _n0.a;
					var yval = _n0.b;
					var tile = _n0.c;
					return A3(
						author$project$Grid$set,
						A2(author$project$Grid$Coordinate, xval, yval),
						tile,
						gridacc);
				}),
			grid,
			ltiles);
		return new_grid;
	});
var author$project$MapGen$listDungeonRectangleToGridFunc = F3(
	function (lroomrectsWithOptions, mbFloorColor, grid) {
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var roomrect = _n0.a;
					var doorWallOptions = _n0.b;
					return A4(author$project$MapGen$dungeonRectangleToGridFunc, roomrect, doorWallOptions, mbFloorColor, gridacc);
				}),
			grid,
			lroomrectsWithOptions);
	});
var author$project$Tile$DoorWallOptions = F4(
	function (left, top, right, bottom) {
		return {bottom: bottom, left: left, right: right, top: top};
	});
var author$project$MapGen$noDoornoWallOption = A4(author$project$Tile$DoorWallOptions, author$project$Tile$NoDoorNoWall, author$project$Tile$NoDoorNoWall, author$project$Tile$NoDoorNoWall, author$project$Tile$NoDoorNoWall);
var author$project$MapGen$listRoomRectangleToGridFunc = F2(
	function (lroomrects, grid) {
		return A3(
			author$project$MapGen$listDungeonRectangleToGridFunc,
			A2(
				elm$core$List$map,
				function (rrect) {
					return _Utils_Tuple2(rrect, author$project$MapGen$noDoornoWallOption);
				},
				lroomrects),
			elm$core$Maybe$Nothing,
			grid);
	});
var author$project$MapGen$listTunnelRectangleToGridFunc = F2(
	function (ltunnels, grid) {
		return A3(
			author$project$MapGen$listDungeonRectangleToGridFunc,
			A2(
				elm$core$List$map,
				function (tun) {
					return _Utils_Tuple2(tun, author$project$MapGen$noDoornoWallOption);
				},
				ltunnels),
			elm$core$Maybe$Just('orange'),
			grid);
	});
var author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc = F2(
	function (ltunnelsWithOptions, grid) {
		return A3(
			author$project$MapGen$listDungeonRectangleToGridFunc,
			ltunnelsWithOptions,
			elm$core$Maybe$Just('orange'),
			grid);
	});
var author$project$MapGen$transformFloorToWallOnDisplayBoundaries = function (grid) {
	var w = grid.size.width;
	var lcoordsTop = A2(
		elm$core$List$map,
		function (x_) {
			return {x: x_, y: 0};
		},
		A2(elm$core$List$range, 0, w - 1));
	var h = grid.size.height;
	var lcoordsBottom = A2(
		elm$core$List$map,
		function (x_) {
			return {x: x_, y: h - 1};
		},
		A2(elm$core$List$range, 0, w - 1));
	var lcoordsLeft = A2(
		elm$core$List$map,
		function (y_) {
			return {x: 0, y: y_};
		},
		A2(elm$core$List$range, 0, h - 1));
	var lcoordsRight = A2(
		elm$core$List$map,
		function (y_) {
			return {x: w - 1, y: y_};
		},
		A2(elm$core$List$range, 0, h - 1));
	var getNewGrid = F3(
		function (coord, lrtd, grid_) {
			var _n0 = A2(author$project$Grid$get, coord, grid_);
			if ((_n0.$ === 'Just') && (_n0.a.$ === 'Floor')) {
				return ((lrtd === 'l') || (lrtd === 'r')) ? A3(
					author$project$Grid$set,
					coord,
					author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
					grid_) : A3(
					author$project$Grid$set,
					coord,
					author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
					grid_);
			} else {
				return grid_;
			}
		});
	return function (gr) {
		return A3(
			elm$core$List$foldl,
			F2(
				function (coord, gacc) {
					return A3(getNewGrid, coord, 'b', gacc);
				}),
			gr,
			lcoordsBottom);
	}(
		function (gr) {
			return A3(
				elm$core$List$foldl,
				F2(
					function (coord, gacc) {
						return A3(getNewGrid, coord, 't', gacc);
					}),
				gr,
				lcoordsTop);
		}(
			function (gr) {
				return A3(
					elm$core$List$foldl,
					F2(
						function (coord, gacc) {
							return A3(getNewGrid, coord, 'r', gacc);
						}),
					gr,
					lcoordsRight);
			}(
				A3(
					elm$core$List$foldl,
					F2(
						function (coord, gacc) {
							return A3(getNewGrid, coord, 'l', gacc);
						}),
					grid,
					lcoordsLeft))));
};
var author$project$GameDefinitions$Game2$Basement$addBasementCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$Basement$basementItems,
				A3(
					author$project$GameDefinitions$Common$setTeleportersInGrid,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
					author$project$GameDefinitions$Game2$Basement$basementTeleporters,
					A2(
						author$project$GameDefinitions$Common$setLandingTargetsInGrid,
						author$project$GameDefinitions$Game2$Basement$basementLandingTargets,
						A2(
							author$project$GameDefinitions$Common$setHolesInGrid,
							author$project$GameDefinitions$Game2$Basement$basementHoles,
							author$project$GameDefinitions$Game2$Basement$addBasementStairs(
								A2(
									author$project$MapGen$createWallBoundaries,
									_Utils_ap(
										author$project$GameDefinitions$Game2$Basement$basementInitialRoomRectangles,
										_Utils_ap(
											author$project$GameDefinitions$Game2$Basement$basementCustomRoomRectangles,
											_Utils_ap(
												author$project$GameDefinitions$Game2$Basement$basementInitialHorizontalTunnelRectangles,
												_Utils_ap(
													author$project$GameDefinitions$Game2$Basement$basementStairsTunnel,
													_Utils_ap(author$project$GameDefinitions$Game2$Basement$basementInitialVerticalTunnelRectangles, author$project$GameDefinitions$Game2$Basement$basementCustomVerticalTunnelRectangles))))),
									A2(
										author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
										_Utils_ap(author$project$GameDefinitions$Game2$Basement$basementInitialVerticalTunnelRectanglesWithOptions, author$project$GameDefinitions$Game2$Basement$basementCustomVerticalTunnelRectanglesWithOptions),
										A2(
											author$project$MapGen$listTunnelRectangleToGridFunc,
											author$project$GameDefinitions$Game2$Basement$basementStairsTunnel,
											A2(
												author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
												author$project$GameDefinitions$Game2$Basement$basementInitialHorizontalTunnelRectanglesWithOptions,
												A2(
													author$project$MapGen$listRoomRectangleToGridFunc,
													_Utils_ap(author$project$GameDefinitions$Game2$Basement$basementInitialRoomRectangles, author$project$GameDefinitions$Game2$Basement$basementCustomRoomRectangles),
													grid))))))))))));
};
var author$project$GameDefinitions$Game2$Basement$gridBasement = author$project$GameDefinitions$Game2$Basement$addBasementCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 7, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Common$StairsToTheLeft = {$: 'StairsToTheLeft'};
var author$project$GameDefinitions$Game2$Caverns$addCavernsStairs = function (grid) {
	var lstairs = _List_fromArray(
		[
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
			direction: author$project$GameDefinitions$Common$StairsToTheLeft,
			mbLocationShift: elm$core$Maybe$Nothing,
			room_col: 8,
			room_row: 4,
			shift: _Utils_Tuple2(-1, 0),
			stairsId: 1,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
			toStairsId: 2
		},
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
			direction: author$project$GameDefinitions$Common$StairsDown,
			mbLocationShift: elm$core$Maybe$Nothing,
			room_col: 2,
			room_row: 7,
			shift: _Utils_Tuple2(0, 1),
			stairsId: 3,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			toStairsId: 4
		}
		]);
	return A3(
		elm$core$List$foldl,
		F2(
			function (rec, gridacc) {
				return author$project$GameDefinitions$Common$getStairsOnRoom(rec.room_row)(rec.room_col)(rec.stairsId)(rec.toFloorId)(rec.toStairsId)(rec.direction)(elm$core$Maybe$Nothing)(rec.shift)(rec.mbLocationShift)(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)(gridacc);
			}),
		grid,
		lstairs);
};
var author$project$GameDefinitions$Common$defaultHorizontalBlueDoorOptions = {
	bottom: author$project$Tile$NoDoorNoWall,
	left: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(author$project$Tile$DoorToTheRight)),
	right: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(author$project$Tile$DoorToTheLeft)),
	top: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Game2$Caverns$cavernsInitialHorizontalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 7),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 8),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 9),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 10),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 1),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 6),
			author$project$GameDefinitions$Common$defaultHorizontalBlueDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 7),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 8),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 8),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 9),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 10),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 5),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 6),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 7),
			author$project$GameDefinitions$Common$defaultHorizontalBlueDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 8),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 9),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 7, 6),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions)
		]));
var author$project$GameDefinitions$Game2$Caverns$cavernsInitialHorizontalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$Caverns$cavernsInitialHorizontalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$Caverns$cavernsInitialRoomRectangles = A2(
	elm$core$List$map,
	function (xfunc) {
		return xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	},
	_List_fromArray(
		[
			A3(author$project$GameDefinitions$Common$getRoom, 1, 7, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 8, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 9, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 10, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 11, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 7, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 9, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 6, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 7, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 8, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 9, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 7, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 8, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 9, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 10, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 11, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 3, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 4, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 9, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 7, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 8, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 9, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 10, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 7, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 9, author$project$GameModel$SquareRoom)
		]));
var author$project$GameDefinitions$Game2$Caverns$cavernsInitialVerticalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 3),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 3),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 5),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 5),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 6),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 6),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 6),
			author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 7),
			author$project$GameDefinitions$Common$defaultVerticalRedDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 7),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 7),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 7),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 9),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 9),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 9),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 9),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 9),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 9),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions)
		]));
var author$project$GameDefinitions$Game2$Caverns$cavernsInitialVerticalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tunnel = _n0.a;
		var opt = _n0.b;
		return tunnel;
	},
	author$project$GameDefinitions$Game2$Caverns$cavernsInitialVerticalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$Caverns$cavernsItems = A2(author$project$GameDefinitions$Common$getItemsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict);
var author$project$GameDefinitions$Game2$Caverns$cavernsLandingTargets = A2(author$project$GameDefinitions$Common$getLandingTargetsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsDict);
var author$project$GameDefinitions$Common$TunnelToTheLeft = {$: 'TunnelToTheLeft'};
var author$project$GameDefinitions$Game2$Caverns$cavernsStairsTunnel = _List_fromArray(
	[
		A9(
		author$project$GameDefinitions$Common$getHorizontalTunnel,
		4,
		8,
		author$project$GameDefinitions$Common$TunnelToTheLeft,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_wall_width + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		A9(
		author$project$GameDefinitions$Common$getVerticalTunnel,
		7,
		2,
		author$project$GameDefinitions$Common$TunnelDown,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Game2$Caverns$cavernsTeleporters = A2(author$project$GameDefinitions$Common$getTeleportersByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoDict);
var author$project$GameDefinitions$Game2$Caverns$addCavernsCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$Caverns$cavernsItems,
				A3(
					author$project$GameDefinitions$Common$setTeleportersInGrid,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
					author$project$GameDefinitions$Game2$Caverns$cavernsTeleporters,
					A2(
						author$project$GameDefinitions$Common$setLandingTargetsInGrid,
						author$project$GameDefinitions$Game2$Caverns$cavernsLandingTargets,
						author$project$GameDefinitions$Game2$Caverns$addCavernsStairs(
							A2(
								author$project$MapGen$createWallBoundaries,
								_Utils_ap(
									author$project$GameDefinitions$Game2$Caverns$cavernsInitialHorizontalTunnelRectangles,
									_Utils_ap(
										author$project$GameDefinitions$Game2$Caverns$cavernsStairsTunnel,
										_Utils_ap(author$project$GameDefinitions$Game2$Caverns$cavernsInitialRoomRectangles, author$project$GameDefinitions$Game2$Caverns$cavernsInitialVerticalTunnelRectangles))),
								A2(
									author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
									author$project$GameDefinitions$Game2$Caverns$cavernsInitialVerticalTunnelRectanglesWithOptions,
									A2(
										author$project$MapGen$listTunnelRectangleToGridFunc,
										author$project$GameDefinitions$Game2$Caverns$cavernsStairsTunnel,
										A2(
											author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
											author$project$GameDefinitions$Game2$Caverns$cavernsInitialHorizontalTunnelRectanglesWithOptions,
											A2(author$project$MapGen$listRoomRectangleToGridFunc, author$project$GameDefinitions$Game2$Caverns$cavernsInitialRoomRectangles, grid)))))))))));
};
var author$project$GameDefinitions$Game2$Caverns$gridCaverns = author$project$GameDefinitions$Game2$Caverns$addCavernsCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 7, 11, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Common$StairsUp = {$: 'StairsUp'};
var author$project$GameDefinitions$Game2$FirstFloor$addFirstFloorStairs = function (grid) {
	var lstairs = _List_fromArray(
		[
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
			direction: author$project$GameDefinitions$Common$StairsUp,
			mbLocationShift: elm$core$Maybe$Nothing,
			roomType: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			room_col: 5,
			room_row: 5,
			shift: _Utils_Tuple2(0, -1),
			stairsId: 8,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			toStairsId: 7
		},
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
			direction: author$project$GameDefinitions$Common$StairsDown,
			mbLocationShift: elm$core$Maybe$Nothing,
			roomType: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			room_col: 5,
			room_row: 3,
			shift: _Utils_Tuple2(0, 1),
			stairsId: 9,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
			toStairsId: 10
		}
		]);
	return A3(
		elm$core$List$foldl,
		F2(
			function (rec, gridacc) {
				return author$project$GameDefinitions$Common$getStairsOnRoom(rec.room_row)(rec.room_col)(rec.stairsId)(rec.toFloorId)(rec.toStairsId)(rec.direction)(rec.roomType)(rec.shift)(rec.mbLocationShift)(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)(gridacc);
			}),
		grid,
		lstairs);
};
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorCustomRoomRectangles = _List_Nil;
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorHoles = A2(author$project$GameDefinitions$Common$getHolesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$holesDict);
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialHorizontalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 1),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 1),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 2),
			author$project$GameDefinitions$Common$defaultHorizontalBlueDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 1),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 2),
			author$project$GameDefinitions$Common$defaultHorizontalYellowDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 6, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 7, 1),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions)
		]));
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialHorizontalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialHorizontalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialRoomRectangles = A2(
	elm$core$List$map,
	function (xfunc) {
		return xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	},
	_List_fromArray(
		[
			A3(author$project$GameDefinitions$Common$getRoom, 1, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 3, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 5, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 3, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 4, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 6, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 3, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 5, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 2, author$project$GameModel$SquareRoom)
		]));
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialVerticalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 1),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 1),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 2),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 3),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 3),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 3),
			author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 3),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 4),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 4),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 4),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 4),
			author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 6),
			author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 6),
			author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions)
		]));
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialVerticalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialVerticalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorItems = A2(author$project$GameDefinitions$Common$getItemsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict);
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorLandingTargets = A2(author$project$GameDefinitions$Common$getLandingTargetsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsDict);
var author$project$GameDefinitions$Common$TunnelUp = {$: 'TunnelUp'};
var author$project$GameDefinitions$Common$defaultNoDoorOptions = {bottom: author$project$Tile$NoDoorNoWall, left: author$project$Tile$NoDoorNoWall, right: author$project$Tile$NoDoorNoWall, top: author$project$Tile$NoDoorNoWall};
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnelWithOptions = _List_fromArray(
	[
		_Utils_Tuple2(
		A9(
			author$project$GameDefinitions$Common$getVerticalTunnel,
			5,
			5,
			author$project$GameDefinitions$Common$TunnelUp,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
			elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Nothing,
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultNoDoorOptions),
		_Utils_Tuple2(
		A9(
			author$project$GameDefinitions$Common$getVerticalTunnel,
			3,
			5,
			author$project$GameDefinitions$Common$TunnelDown,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
			elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Nothing,
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		{
			bottom: author$project$Tile$NoDoorNoWall,
			left: author$project$Tile$NoDoorNoWall,
			right: author$project$Tile$NoDoorNoWall,
			top: author$project$Tile$UseDoor(
				author$project$Tile$defaultYellowDoorInfo(author$project$Tile$DoorToDown))
		})
	]);
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnel = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnelWithOptions);
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorTeleporters = A2(author$project$GameDefinitions$Common$getTeleportersByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoDict);
var author$project$GameDefinitions$Game2$FirstFloor$addFirstFloorCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$FirstFloor$firstFloorItems,
				A3(
					author$project$GameDefinitions$Common$setTeleportersInGrid,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
					author$project$GameDefinitions$Game2$FirstFloor$firstFloorTeleporters,
					A2(
						author$project$GameDefinitions$Common$setLandingTargetsInGrid,
						author$project$GameDefinitions$Game2$FirstFloor$firstFloorLandingTargets,
						A2(
							author$project$GameDefinitions$Common$setHolesInGrid,
							author$project$GameDefinitions$Game2$FirstFloor$firstFloorHoles,
							author$project$GameDefinitions$Game2$FirstFloor$addFirstFloorStairs(
								A2(
									author$project$MapGen$createWallBoundaries,
									_Utils_ap(
										author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialRoomRectangles,
										_Utils_ap(
											author$project$GameDefinitions$Game2$FirstFloor$firstFloorCustomRoomRectangles,
											_Utils_ap(
												author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialHorizontalTunnelRectangles,
												_Utils_ap(author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnel, author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialVerticalTunnelRectangles)))),
									A2(
										author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
										author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialVerticalTunnelRectanglesWithOptions,
										A2(
											author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
											author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnelWithOptions,
											A2(
												author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
												author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialHorizontalTunnelRectanglesWithOptions,
												A2(
													author$project$MapGen$listRoomRectangleToGridFunc,
													_Utils_ap(author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialRoomRectangles, author$project$GameDefinitions$Game2$FirstFloor$firstFloorCustomRoomRectangles),
													grid))))))))))));
};
var author$project$GameDefinitions$Game2$FirstFloor$gridFirstFloor = author$project$GameDefinitions$Game2$FirstFloor$addFirstFloorCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 7, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Game2$GroundFloor$addGroundFloorStairs = function (grid) {
	var lstairs = _List_fromArray(
		[
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			direction: author$project$GameDefinitions$Common$StairsUp,
			mbLocationShift: elm$core$Maybe$Just(
				_Utils_Tuple2(-6, 0)),
			roomType: elm$core$Maybe$Nothing,
			room_col: 2,
			room_row: 9,
			shift: _Utils_Tuple2(0, -1),
			stairsId: 4,
			toFloorId: 0,
			toStairsId: 3
		},
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			direction: author$project$GameDefinitions$Common$StairsUp,
			mbLocationShift: elm$core$Maybe$Nothing,
			roomType: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			room_col: 6,
			room_row: 5,
			shift: _Utils_Tuple2(0, -1),
			stairsId: 6,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
			toStairsId: 5
		},
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			direction: author$project$GameDefinitions$Common$StairsDown,
			mbLocationShift: elm$core$Maybe$Nothing,
			roomType: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			room_col: 6,
			room_row: 3,
			shift: _Utils_Tuple2(0, 1),
			stairsId: 7,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
			toStairsId: 8
		},
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			direction: author$project$GameDefinitions$Common$StairsToTheRight,
			mbLocationShift: elm$core$Maybe$Just(
				_Utils_Tuple2(0, 0)),
			roomType: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			room_col: 7,
			room_row: 4,
			shift: _Utils_Tuple2(0, -1),
			stairsId: 11,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
			toStairsId: 12
		}
		]);
	return A3(
		elm$core$List$foldl,
		F2(
			function (rec, gridacc) {
				return author$project$GameDefinitions$Common$getStairsOnRoom(rec.room_row)(rec.room_col)(rec.stairsId)(rec.toFloorId)(rec.toStairsId)(rec.direction)(rec.roomType)(rec.shift)(rec.mbLocationShift)(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)(gridacc);
			}),
		grid,
		lstairs);
};
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomRoomRectangles = _List_fromArray(
	[
		A7(author$project$GameDefinitions$Common$getCustomRoom, 9, 2, -3, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side + 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.square_room_side, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorHoles = A2(author$project$GameDefinitions$Common$getHolesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$holesDict);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialHorizontalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 1),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 5),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getHorizontalTunnel,
				3,
				2,
				author$project$GameDefinitions$Common$TunnelToTheRight,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameModel$VerticalRoom),
				elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
				elm$core$Maybe$Nothing),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 4),
			author$project$GameDefinitions$Common$defaultHorizontalBlueDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 6),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getHorizontalTunnel,
				4,
				5,
				author$project$GameDefinitions$Common$TunnelToTheRight,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameModel$VerticalRoom),
				elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
				elm$core$Maybe$Nothing),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 6),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getHorizontalTunnel,
				5,
				2,
				author$project$GameDefinitions$Common$TunnelToTheRight,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameModel$VerticalRoom),
				elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
				elm$core$Maybe$Nothing),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 5, 6),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 7, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 7, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 7, 4),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 7, 5),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions)
		]));
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialHorizontalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialHorizontalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialRoomRectangles = A2(
	elm$core$List$map,
	function (xfunc) {
		return xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	},
	_List_fromArray(
		[
			A3(author$project$GameDefinitions$Common$getRoom, 1, 1, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 3, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 4, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 5, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 6, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 6, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 7, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 5, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 6, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 7, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 5, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 6, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 5, 7, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 2, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 6, 6, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 3, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 4, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 5, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 7, 6, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 8, 2, author$project$GameModel$VerticalRoom)
		]));
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialVerticalTunnelRectanglesWithOptions = _List_fromArray(
	[
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalRedDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 5, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 7, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 8, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
		_Utils_Tuple2(
		A9(
			author$project$GameDefinitions$Common$getVerticalTunnel,
			2,
			6,
			author$project$GameDefinitions$Common$TunnelDown,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Just(author$project$GameModel$VerticalRoom),
			elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			elm$core$Maybe$Nothing,
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A9(
			author$project$GameDefinitions$Common$getVerticalTunnel,
			5,
			6,
			author$project$GameDefinitions$Common$TunnelDown,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Nothing,
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 6, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 4, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions)
	]);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialVerticalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialVerticalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorItems = A2(author$project$GameDefinitions$Common$getItemsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorLandingTargets = A2(author$project$GameDefinitions$Common$getLandingTargetsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsDict);
var author$project$Item$Paper = function (a) {
	return {$: 'Paper', a: a};
};
var author$project$Item$PaperInfo = F4(
	function (id, imgSrc, description, text) {
		return {description: description, id: id, imgSrc: imgSrc, text: text};
	});
var author$project$GameDefinitions$Game2$GroundFloor$customStripedDoorInfo = function (dorientation) {
	return {
		color: elm$core$Maybe$Just('striped'),
		isExplored: false,
		isOpen: false,
		orientation: dorientation,
		requiresToOpen: _List_fromArray(
			[
				author$project$Item$Paper(
				A4(author$project$Item$PaperInfo, 1, '', '', '')),
				author$project$Item$Paper(
				A4(author$project$Item$PaperInfo, 2, '', '', '')),
				author$project$Item$Paper(
				A4(author$project$Item$PaperInfo, 3, '', '', ''))
			]),
		visibility: author$project$Tile$Unexplored
	};
};
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorStairsTunnelWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				9,
				2,
				author$project$GameDefinitions$Common$TunnelUp,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(-6, 0))),
			author$project$GameDefinitions$Common$defaultNoDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				5,
				6,
				author$project$GameDefinitions$Common$TunnelUp,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
				elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
				elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
				elm$core$Maybe$Nothing),
			author$project$GameDefinitions$Common$defaultNoDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				6,
				author$project$GameDefinitions$Common$TunnelDown,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
				elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing),
			author$project$GameDefinitions$Common$defaultNoDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getHorizontalTunnel,
				4,
				7,
				author$project$GameDefinitions$Common$TunnelToTheRight,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.vertical_wall_width + 1),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing),
			{
				bottom: author$project$Tile$NoDoorNoWall,
				left: author$project$Tile$UseDoor(
					author$project$GameDefinitions$Game2$GroundFloor$customStripedDoorInfo(author$project$Tile$DoorToTheRight)),
				right: author$project$Tile$NoDoorNoWall,
				top: author$project$Tile$NoDoorNoWall
			})
		]));
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorStairsTunnel = A2(
	elm$core$List$map,
	function (_n0) {
		var tun = _n0.a;
		var opt = _n0.b;
		return tun;
	},
	author$project$GameDefinitions$Game2$GroundFloor$groundFloorStairsTunnelWithOptions);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorTeleporters = A2(author$project$GameDefinitions$Common$getTeleportersByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoDict);
var author$project$GameDefinitions$Game2$GroundFloor$addGroundFloorCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$GroundFloor$groundFloorItems,
				A3(
					author$project$GameDefinitions$Common$setTeleportersInGrid,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
					author$project$GameDefinitions$Game2$GroundFloor$groundFloorTeleporters,
					A2(
						author$project$GameDefinitions$Common$setLandingTargetsInGrid,
						author$project$GameDefinitions$Game2$GroundFloor$groundFloorLandingTargets,
						A2(
							author$project$GameDefinitions$Common$setHolesInGrid,
							author$project$GameDefinitions$Game2$GroundFloor$groundFloorHoles,
							author$project$GameDefinitions$Game2$GroundFloor$addGroundFloorStairs(
								A2(
									author$project$MapGen$createWallBoundaries,
									_Utils_ap(
										author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialRoomRectangles,
										_Utils_ap(
											author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomRoomRectangles,
											_Utils_ap(
												author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialHorizontalTunnelRectangles,
												_Utils_ap(author$project$GameDefinitions$Game2$GroundFloor$groundFloorStairsTunnel, author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialVerticalTunnelRectangles)))),
									A2(
										author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
										author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialVerticalTunnelRectanglesWithOptions,
										A2(
											author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
											author$project$GameDefinitions$Game2$GroundFloor$groundFloorStairsTunnelWithOptions,
											A2(
												author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
												author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialHorizontalTunnelRectanglesWithOptions,
												A2(
													author$project$MapGen$listRoomRectangleToGridFunc,
													_Utils_ap(author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialRoomRectangles, author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomRoomRectangles),
													grid))))))))))));
};
var author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor = author$project$GameDefinitions$Game2$GroundFloor$addGroundFloorCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 9, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Game2$LastFloor$addLastFloorStairs = function (grid) {
	var recstairs = {
		current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
		direction: author$project$GameDefinitions$Common$StairsDown,
		mbLocationShift: elm$core$Maybe$Nothing,
		room_x: 20,
		room_y: 13,
		shift: _Utils_Tuple2(-1, 0),
		stairsId: 12,
		toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
		toStairsId: 11
	};
	var tileStairs = author$project$Tile$Stairs(
		A6(author$project$Tile$StairsInfo, recstairs.stairsId, recstairs.toFloorId, recstairs.toStairsId, recstairs.shift, false, author$project$Tile$Unexplored));
	return A3(
		author$project$Grid$set,
		A2(author$project$Grid$Coordinate, recstairs.room_x, recstairs.room_y),
		tileStairs,
		grid);
};
var author$project$Tile$Visible = {$: 'Visible'};
var author$project$GameDefinitions$Game2$LastFloor$customLeverInfo = {isExplored: false, isTransparent: false, isUp: false, leverId: 1, visibility: author$project$Tile$Visible};
var author$project$Tile$ConverterTile = F2(
	function (a, b) {
		return {$: 'ConverterTile', a: a, b: b};
	});
var author$project$Tile$Grass = function (a) {
	return {$: 'Grass', a: a};
};
var author$project$Tile$Lever = function (a) {
	return {$: 'Lever', a: a};
};
var author$project$Tile$Tree = function (a) {
	return {$: 'Tree', a: a};
};
var author$project$Tile$WallInfo = F4(
	function (isExplored, visibility, orientation, mbTeleporterObject) {
		return {isExplored: isExplored, mbTeleporterObject: mbTeleporterObject, orientation: orientation, visibility: visibility};
	});
var author$project$Tile$Water = function (a) {
	return {$: 'Water', a: a};
};
var author$project$Tile$defaultBrickWallInfo = {isExplored: false, mbTeleporterObject: elm$core$Maybe$Nothing, orientation: 'just_bricks', visibility: author$project$Tile$Unexplored};
var author$project$Tile$defaultGrassInfo = {description: 'grass', isExplored: false, isTransparent: false, isWalkable: true, visibility: author$project$Tile$Unexplored};
var author$project$Tile$defaultPineTreeInfo = {isExplored: false, treeType: 'pinetree', visibility: author$project$Tile$Unexplored};
var author$project$Tile$defaultRoundTreeInfo = {isExplored: false, treeType: 'roundtree', visibility: author$project$Tile$Unexplored};
var author$project$Tile$defaultWaterInfo = {description: 'just_water', isExplored: false, isTransparent: false, isWalkable: false, visibility: author$project$Tile$Unexplored};
var author$project$Tile$defaultWaterWallLeftInfo = {description: 'water_wall_left', isExplored: false, isTransparent: false, isWalkable: false, visibility: author$project$Tile$Unexplored};
var author$project$Tile$defaultWaterWallUpInfo = {description: 'water_wall_up', isExplored: false, isTransparent: false, isWalkable: false, visibility: author$project$Tile$Unexplored};
var author$project$GameDefinitions$Game2$LastFloor$lastFloorGridTiles = _List_fromArray(
	[
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'corner_top_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'corner_top_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			A2(
			author$project$Tile$ConverterTile,
			author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
			author$project$Tile$Lever(author$project$GameDefinitions$Game2$LastFloor$customLeverInfo)),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'cul_de_sac_at_top', elm$core$Maybe$Nothing)),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'three_way_at_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'three_way_at_top', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'corner_bottom_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'cul_de_sac_at_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'three_way_at_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'corner_bottom_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'cul_de_sac_at_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'corner_bottom_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A4(author$project$Tile$WallInfo, false, author$project$Tile$Unexplored, 'corner_bottom_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultBrickWallInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallUpInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$Grass(author$project$Tile$defaultGrassInfo),
			author$project$Tile$NoTileYet
		])
	]);
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var author$project$GameDefinitions$Game2$LastFloor$getTileAtCoords = function (coords) {
	var mb_relevant_row = A2(
		elm$core$Maybe$withDefault,
		_List_Nil,
		elm$core$List$head(
			A2(elm$core$List$drop, coords.y, author$project$GameDefinitions$Game2$LastFloor$lastFloorGridTiles)));
	return A2(
		elm$core$Maybe$withDefault,
		author$project$Tile$NoTileYet,
		elm$core$List$head(
			A2(elm$core$List$drop, coords.x, mb_relevant_row)));
};
var author$project$GameDefinitions$Game2$LastFloor$nr_cols = 23;
var author$project$GameDefinitions$Game2$LastFloor$nr_rows = 17;
var author$project$GameDefinitions$Game2$LastFloor$gridLastFloor = function () {
	var grid = A2(
		author$project$Grid$initialize,
		{height: author$project$GameDefinitions$Game2$LastFloor$nr_rows, width: author$project$GameDefinitions$Game2$LastFloor$nr_cols},
		author$project$Tile$NoTileYet);
	var lcoords = author$project$Grid$toCoordinates(grid);
	return author$project$GameDefinitions$Game2$LastFloor$addLastFloorStairs(
		A3(
			elm$core$List$foldl,
			F2(
				function (coords, gridacc) {
					return A3(
						author$project$Grid$set,
						coords,
						author$project$GameDefinitions$Game2$LastFloor$getTileAtCoords(coords),
						gridacc);
				}),
			grid,
			lcoords));
}();
var author$project$GameDefinitions$Game2$TheAttic$addTheAtticFloorStairs = function (grid) {
	var lstairs = _List_fromArray(
		[
			{
			current_floor_id: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
			direction: author$project$GameDefinitions$Common$StairsUp,
			mbLocationShift: elm$core$Maybe$Nothing,
			roomType: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			room_col: 4,
			room_row: 1,
			shift: _Utils_Tuple2(0, -1),
			stairsId: 10,
			toFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
			toStairsId: 9
		}
		]);
	return A3(
		elm$core$List$foldl,
		F2(
			function (rec, gridacc) {
				return author$project$GameDefinitions$Common$getStairsOnRoom(rec.room_row)(rec.room_col)(rec.stairsId)(rec.toFloorId)(rec.toStairsId)(rec.direction)(rec.roomType)(rec.shift)(rec.mbLocationShift)(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)(gridacc);
			}),
		grid,
		lstairs);
};
var author$project$GameDefinitions$Game2$TheAttic$theAtticCustomRoomRectangles = _List_Nil;
var author$project$GameDefinitions$Game2$TheAttic$theAtticHoles = A2(author$project$GameDefinitions$Common$getHolesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$holesDict);
var author$project$GameDefinitions$Game2$TheAttic$theAtticInitialHorizontalTunnelRectanglesWithOptions = A2(
	elm$core$List$map,
	function (_n0) {
		var xfunc = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			y);
	},
	_List_fromArray(
		[
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 1),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 2),
			author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 1, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 1),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 2, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 3, 3),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 1),
			author$project$GameDefinitions$Common$defaultHorizontalYellowDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 2),
			author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions),
			_Utils_Tuple2(
			A2(author$project$GameDefinitions$Common$getCommonHorizontalTunnel, 4, 3),
			author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions)
		]));
var author$project$GameDefinitions$Game2$TheAttic$theAtticInitialHorizontalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tunnel = _n0.a;
		var opts = _n0.b;
		return tunnel;
	},
	author$project$GameDefinitions$Game2$TheAttic$theAtticInitialHorizontalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$TheAttic$theAtticInitialRoomRectangles = A2(
	elm$core$List$map,
	function (xfunc) {
		return xfunc(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
	},
	_List_fromArray(
		[
			A3(author$project$GameDefinitions$Common$getRoom, 1, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 3, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 1, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 2, 4, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 1, author$project$GameModel$VerticalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 2, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 3, 4, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 1, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 2, author$project$GameModel$HorizontalRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 3, author$project$GameModel$SquareRoom),
			A3(author$project$GameDefinitions$Common$getRoom, 4, 4, author$project$GameModel$SquareRoom)
		]));
var author$project$GameDefinitions$Game2$TheAttic$theAtticInitialVerticalTunnelRectanglesWithOptions = _List_fromArray(
	[
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 3, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 1, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 2, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions),
		_Utils_Tuple2(
		A3(author$project$GameDefinitions$Common$getCommonVerticalTunnel, 3, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions)
	]);
var author$project$GameDefinitions$Game2$TheAttic$theAtticInitialVerticalTunnelRectangles = A2(
	elm$core$List$map,
	function (_n0) {
		var tunnel = _n0.a;
		var opts = _n0.b;
		return tunnel;
	},
	author$project$GameDefinitions$Game2$TheAttic$theAtticInitialVerticalTunnelRectanglesWithOptions);
var author$project$GameDefinitions$Game2$TheAttic$theAtticItems = A2(author$project$GameDefinitions$Common$getItemsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict);
var author$project$GameDefinitions$Game2$TheAttic$theAtticLandingTargets = A2(author$project$GameDefinitions$Common$getLandingTargetsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsDict);
var author$project$GameDefinitions$Game2$TheAttic$theAtticStairsTunnel = _List_fromArray(
	[
		A9(
		author$project$GameDefinitions$Common$getVerticalTunnel,
		1,
		4,
		author$project$GameDefinitions$Common$TunnelUp,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.horizontal_wall_height + 1),
		elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Game2$TheAttic$theAtticTeleporters = A2(author$project$GameDefinitions$Common$getTeleportersByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoDict);
var author$project$GameDefinitions$Game2$TheAttic$addTheAtticCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$TheAttic$theAtticItems,
				A3(
					author$project$GameDefinitions$Common$setTeleportersInGrid,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
					author$project$GameDefinitions$Game2$TheAttic$theAtticTeleporters,
					A2(
						author$project$GameDefinitions$Common$setLandingTargetsInGrid,
						author$project$GameDefinitions$Game2$TheAttic$theAtticLandingTargets,
						A2(
							author$project$GameDefinitions$Common$setHolesInGrid,
							author$project$GameDefinitions$Game2$TheAttic$theAtticHoles,
							author$project$GameDefinitions$Game2$TheAttic$addTheAtticFloorStairs(
								A2(
									author$project$MapGen$createWallBoundaries,
									_Utils_ap(
										author$project$GameDefinitions$Game2$TheAttic$theAtticInitialRoomRectangles,
										_Utils_ap(
											author$project$GameDefinitions$Game2$TheAttic$theAtticCustomRoomRectangles,
											_Utils_ap(
												author$project$GameDefinitions$Game2$TheAttic$theAtticInitialHorizontalTunnelRectangles,
												_Utils_ap(author$project$GameDefinitions$Game2$TheAttic$theAtticStairsTunnel, author$project$GameDefinitions$Game2$TheAttic$theAtticInitialVerticalTunnelRectangles)))),
									A2(
										author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
										author$project$GameDefinitions$Game2$TheAttic$theAtticInitialVerticalTunnelRectanglesWithOptions,
										A2(
											author$project$MapGen$listTunnelRectangleToGridFunc,
											author$project$GameDefinitions$Game2$TheAttic$theAtticStairsTunnel,
											A2(
												author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
												author$project$GameDefinitions$Game2$TheAttic$theAtticInitialHorizontalTunnelRectanglesWithOptions,
												A2(
													author$project$MapGen$listRoomRectangleToGridFunc,
													_Utils_ap(author$project$GameDefinitions$Game2$TheAttic$theAtticInitialRoomRectangles, author$project$GameDefinitions$Game2$TheAttic$theAtticCustomRoomRectangles),
													grid))))))))))));
};
var author$project$GameDefinitions$Game2$TheAttic$gridTheAttic = author$project$GameDefinitions$Game2$TheAttic$addTheAtticCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 4, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Game2$Game2Definitions$dStore = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			0,
			{
				explored: author$project$GameDefinitions$Common$setAllAsUnexplored(author$project$GameDefinitions$Game2$Caverns$gridCaverns),
				level: author$project$GameDefinitions$Game2$Caverns$gridCaverns,
				total_height: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				total_width: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 11),
				window_height: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				window_width: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			1,
			{
				explored: author$project$GameDefinitions$Common$setAllAsUnexplored(author$project$GameDefinitions$Game2$Basement$gridBasement),
				level: author$project$GameDefinitions$Game2$Basement$gridBasement,
				total_height: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				total_width: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 6),
				window_height: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				window_width: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			2,
			{
				explored: author$project$GameDefinitions$Common$setAllAsUnexplored(author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor),
				level: author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor,
				total_height: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 9),
				total_width: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				window_height: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				window_width: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			3,
			{
				explored: author$project$GameDefinitions$Common$setAllAsUnexplored(author$project$GameDefinitions$Game2$FirstFloor$gridFirstFloor),
				level: author$project$GameDefinitions$Game2$FirstFloor$gridFirstFloor,
				total_height: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				total_width: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 6),
				window_height: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				window_width: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			4,
			{
				explored: author$project$GameDefinitions$Common$setAllAsUnexplored(author$project$GameDefinitions$Game2$TheAttic$gridTheAttic),
				level: author$project$GameDefinitions$Game2$TheAttic$gridTheAttic,
				total_height: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 4),
				total_width: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 4),
				window_height: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				window_width: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			5,
			{
				explored: author$project$GameDefinitions$Common$setAllAsUnexplored(author$project$GameDefinitions$Game2$LastFloor$gridLastFloor),
				level: author$project$GameDefinitions$Game2$LastFloor$gridLastFloor,
				total_height: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 17),
				total_width: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 23),
				window_height: 18,
				window_width: 18
			})
		]));
var author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter = F5(
	function (fcharId, species, x_coord, y_coord, floorId) {
		var elem = 'e' + elm$core$String$fromInt(fcharId);
		return A7(
			author$project$Beings$Beings$fightingCharacterCreationFunc,
			elem,
			fcharId,
			'fightingChar' + elm$core$String$fromInt(fcharId),
			species,
			x_coord,
			y_coord,
			floorId);
	});
var author$project$GameDefinitions$Game2$Game2Definitions$initialPlayer = F3(
	function (x, y, z) {
		var elem = '@';
		return A5(author$project$Beings$Beings$playerCreationFunc, elem, 'You', x, y, z);
	});
var author$project$Beings$Beings$DontMove = {$: 'DontMove'};
var author$project$Beings$Beings$otherCharacterCreationFunc = F5(
	function (id_, ename, x_coord, y_coord, floor_id_) {
		return {
			direction: author$project$Beings$Beings$Down,
			disappearsWhenHealthIsZero: true,
			disappearsWhenIndexOfLightMax: false,
			enlSpellEffect: author$project$Beings$Beings$IncreaseIndexOfLight,
			floorId: floor_id_,
			health: 30,
			id: id_,
			indexOfLight: 8,
			indexOfLightMax: 30,
			initiative: 100,
			inventory: elm$core$Dict$empty,
			location: A2(author$project$Grid$Coordinate, x_coord, y_coord),
			mana: 100,
			maxNrCharacterMovesPerTurn: 1,
			movingStrategy: elm$core$Maybe$Just(author$project$Beings$Beings$DontMove),
			name: ename,
			nrMovesInCurrentTurn: 0,
			placed: true,
			playerCanWalkOverIfDead: true,
			species: 'otherYou',
			textAvatar: ''
		};
	});
var author$project$GameDefinitions$Game2$Game2Definitions$otherCharacterFunc = A5(author$project$Beings$Beings$otherCharacterCreationFunc, 1, 'otherYou', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id);
var author$project$GameDefinitions$Game2$Game2Definitions$getRandIntNr_ZeroTo = F2(
	function (maxnr, lrandints) {
		return function (x) {
			return x - 1;
		}(
			A2(
				elm$core$Maybe$withDefault,
				1,
				A2(
					elm$core$Maybe$map,
					function (x) {
						return elm$core$Basics$ceiling((x * (maxnr + 1)) / 100.0);
					},
					elm$core$List$head(lrandints))));
	});
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var lLeft = _n1.d;
			var lRight = _n1.e;
			var _n2 = dict.e;
			var rClr = _n2.a;
			var rK = _n2.b;
			var rV = _n2.c;
			var rLeft = _n2.d;
			var _n3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _n2.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n4 = dict.d;
			var lClr = _n4.a;
			var lK = _n4.b;
			var lV = _n4.c;
			var lLeft = _n4.d;
			var lRight = _n4.e;
			var _n5 = dict.e;
			var rClr = _n5.a;
			var rK = _n5.b;
			var rV = _n5.c;
			var rLeft = _n5.d;
			var rRight = _n5.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n1 = dict.d;
			var lClr = _n1.a;
			var lK = _n1.b;
			var lV = _n1.c;
			var _n2 = _n1.d;
			var _n3 = _n2.a;
			var llK = _n2.b;
			var llV = _n2.c;
			var llLeft = _n2.d;
			var llRight = _n2.e;
			var lRight = _n1.e;
			var _n4 = dict.e;
			var rClr = _n4.a;
			var rK = _n4.b;
			var rV = _n4.c;
			var rLeft = _n4.d;
			var rRight = _n4.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				elm$core$Dict$Red,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _n5 = dict.d;
			var lClr = _n5.a;
			var lK = _n5.b;
			var lV = _n5.c;
			var lLeft = _n5.d;
			var lRight = _n5.e;
			var _n6 = dict.e;
			var rClr = _n6.a;
			var rK = _n6.b;
			var rV = _n6.c;
			var rLeft = _n6.d;
			var rRight = _n6.e;
			if (clr.$ === 'Black') {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Black,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _n1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _n3 = right.a;
							var _n4 = right.d;
							var _n5 = _n4.a;
							return elm$core$Dict$moveRedRight(dict);
						} else {
							break _n2$2;
						}
					} else {
						var _n6 = right.a;
						var _n7 = right.d;
						return elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _n2$2;
				}
			}
			return dict;
		}
	});
var elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _n3 = lLeft.a;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					elm$core$Dict$removeMin(left),
					right);
			} else {
				var _n4 = elm$core$Dict$moveRedLeft(dict);
				if (_n4.$ === 'RBNode_elm_builtin') {
					var nColor = _n4.a;
					var nKey = _n4.b;
					var nValue = _n4.c;
					var nLeft = _n4.d;
					var nRight = _n4.e;
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _n6 = lLeft.a;
						return A5(
							elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2(elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _n7 = elm$core$Dict$moveRedLeft(dict);
						if (_n7.$ === 'RBNode_elm_builtin') {
							var nColor = _n7.a;
							var nKey = _n7.b;
							var nValue = _n7.c;
							var nLeft = _n7.d;
							var nRight = _n7.e;
							return A5(
								elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2(elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2(elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7(elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === 'RBNode_elm_builtin') {
					var minKey = _n1.b;
					var minValue = _n1.c;
					return A5(
						elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						elm$core$Dict$removeMin(right));
				} else {
					return elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2(elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var elm$core$Dict$remove = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$removeHelp, key, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (_n0.$ === 'Just') {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var author$project$GameDefinitions$Game2$Game2Definitions$place_one_item_in_random_coords = F3(
	function (floorId, newItem, _n0) {
		var storedict = _n0.a;
		var lrandints = _n0.b;
		var floorInfo = A2(elm$core$Dict$get, floorId, storedict);
		var auxFuncCheckIfEmptyAndPlaceOrRepeat = F3(
			function (floorRec, floorid, _n1) {
				auxFuncCheckIfEmptyAndPlaceOrRepeat:
				while (true) {
					var storeDict = _n1.a;
					var lrands = _n1.b;
					var try_nr = _n1.c;
					if (try_nr > 100) {
						return _Utils_Tuple2(storeDict, lrands);
					} else {
						var thelevel = floorRec.level;
						var lcoords = author$project$Grid$toCoordinates(floorRec.level);
						var _n2 = _Utils_Tuple2(
							A2(
								author$project$GameDefinitions$Game2$Game2Definitions$getRandIntNr_ZeroTo,
								elm$core$List$length(lcoords) - 1,
								lrands),
							A2(elm$core$List$drop, 1, lrands));
						var index_nr = _n2.a;
						var lrem_rands = _n2.b;
						var mbcoords = elm$core$List$head(
							A2(elm$core$List$drop, index_nr, lcoords));
						var mbNewLevel = function () {
							if (mbcoords.$ === 'Nothing') {
								return elm$core$Maybe$Nothing;
							} else {
								var coords = mbcoords.a;
								return function (mbtile) {
									if (mbtile.$ === 'Nothing') {
										return elm$core$Maybe$Nothing;
									} else {
										var atile = mbtile.a;
										if (atile.$ === 'Floor') {
											var finfo = atile.a;
											var tileWithItem = author$project$Tile$Floor(
												_Utils_update(
													finfo,
													{
														item: elm$core$Maybe$Just(newItem)
													}));
											var _n9 = finfo.item;
											if (_n9.$ === 'Nothing') {
												return elm$core$Maybe$Just(
													A3(author$project$Grid$set, coords, tileWithItem, thelevel));
											} else {
												var it = _n9.a;
												return elm$core$Maybe$Nothing;
											}
										} else {
											return elm$core$Maybe$Nothing;
										}
									}
								}(
									A2(author$project$Grid$get, coords, thelevel));
							}
						}();
						var mbNewFloor = function () {
							if (mbNewLevel.$ === 'Nothing') {
								return elm$core$Maybe$Nothing;
							} else {
								var newLevel = mbNewLevel.a;
								return elm$core$Maybe$Just(
									_Utils_update(
										floorRec,
										{level: newLevel}));
							}
						}();
						if (mbNewFloor.$ === 'Nothing') {
							var $temp$floorRec = floorRec,
								$temp$floorid = floorid,
								$temp$_n1 = _Utils_Tuple3(storeDict, lrem_rands, try_nr + 1);
							floorRec = $temp$floorRec;
							floorid = $temp$floorid;
							_n1 = $temp$_n1;
							continue auxFuncCheckIfEmptyAndPlaceOrRepeat;
						} else {
							var newFloor = mbNewFloor.a;
							return _Utils_Tuple2(
								A3(
									elm$core$Dict$update,
									floorid,
									function (_n4) {
										return elm$core$Maybe$Just(newFloor);
									},
									storeDict),
								lrem_rands);
						}
					}
				}
			});
		var _n10 = function () {
			if (floorInfo.$ === 'Just') {
				var afloorinfo = floorInfo.a;
				return A3(
					auxFuncCheckIfEmptyAndPlaceOrRepeat,
					afloorinfo,
					floorId,
					_Utils_Tuple3(storedict, lrandints, 1));
			} else {
				return _Utils_Tuple2(storedict, lrandints);
			}
		}();
		var newStore = _n10.a;
		var remainingRands = _n10.b;
		return _Utils_Tuple2(newStore, remainingRands);
	});
var author$project$Item$Food = function (a) {
	return {$: 'Food', a: a};
};
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var author$project$GameDefinitions$Game2$Game2Definitions$place_health_food_items_in_random_coords = F3(
	function (floorid, nrItems, _n0) {
		var storedict = _n0.a;
		var lrands = _n0.b;
		var newFoodItem = author$project$Item$Food('bread');
		var lfloornr_foodItemTuples = A2(
			elm$core$List$repeat,
			nrItems,
			_Utils_Tuple2(floorid, newFoodItem));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n1, _n2) {
					var flid = _n1.a;
					var fooditem = _n1.b;
					var storeacc = _n2.a;
					var lrand = _n2.b;
					return A3(
						author$project$GameDefinitions$Game2$Game2Definitions$place_one_item_in_random_coords,
						flid,
						fooditem,
						_Utils_Tuple2(storeacc, lrand));
				}),
			_Utils_Tuple2(storedict, lrands),
			lfloornr_foodItemTuples);
	});
var author$project$GameDefinitions$Game2$Game2Definitions$place_all_health_food_items = F2(
	function (nrItemsPerFloor, _n0) {
		var storedict = _n0.a;
		var lrands = _n0.b;
		var lfloorids = _List_fromArray(
			[author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id]);
		return A3(
			elm$core$List$foldl,
			F2(
				function (flid, _n1) {
					var storeacc = _n1.a;
					var lrand = _n1.b;
					return A3(
						author$project$GameDefinitions$Game2$Game2Definitions$place_health_food_items_in_random_coords,
						flid,
						nrItemsPerFloor,
						_Utils_Tuple2(storeacc, lrand));
				}),
			_Utils_Tuple2(storedict, lrands),
			lfloorids);
	});
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var author$project$GameDefinitions$Game2$Game2Definitions$inList = F2(
	function (a_val, la) {
		return function (x) {
			return x > 0;
		}(
			elm$core$List$length(
				A2(
					elm$core$List$filter,
					function (elem) {
						return _Utils_eq(elem, a_val);
					},
					la)));
	});
var elm$core$Basics$not = _Basics_not;
var author$project$GameDefinitions$Game2$Game2Definitions$generate_three_random_nrs_between_zero_and_four = function (lrandints) {
	var getRand = F2(
		function (maxnr, _n0) {
			getRand:
			while (true) {
				var lexisting = _n0.a;
				var lrand_ints = _n0.b;
				var try_nr = _n0.c;
				var nr = A2(author$project$GameDefinitions$Game2$Game2Definitions$getRandIntNr_ZeroTo, maxnr, lrand_ints);
				if ((_Utils_cmp(
					elm$core$List$length(lexisting),
					maxnr) > -1) || (try_nr > 100)) {
					return _Utils_Tuple2(lexisting, lrand_ints);
				} else {
					if (!A2(author$project$GameDefinitions$Game2$Game2Definitions$inList, nr, lexisting)) {
						return _Utils_Tuple2(
							A2(elm$core$List$cons, nr, lexisting),
							A2(elm$core$List$drop, 1, lrand_ints));
					} else {
						var $temp$maxnr = maxnr,
							$temp$_n0 = _Utils_Tuple3(
							lexisting,
							A2(elm$core$List$drop, 1, lrand_ints),
							try_nr + 1);
						maxnr = $temp$maxnr;
						_n0 = $temp$_n0;
						continue getRand;
					}
				}
			}
		});
	var _n1 = A2(
		getRand,
		4,
		_Utils_Tuple3(_List_Nil, lrandints, 1));
	var l1 = _n1.a;
	var lrands1 = _n1.b;
	var _n2 = A2(
		getRand,
		4,
		_Utils_Tuple3(l1, lrands1, 1));
	var l2 = _n2.a;
	var lrands2 = _n2.b;
	var _n3 = A2(
		getRand,
		4,
		_Utils_Tuple3(l2, lrands2, 1));
	var l3 = _n3.a;
	var lrands3 = _n3.b;
	return _Utils_Tuple2(l3, lrands3);
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var author$project$GameDefinitions$Game2$Game2Definitions$place_three_pieces_of_paper = function (_n0) {
	var storedict = _n0.a;
	var lrands = _n0.b;
	var newPaper = function (pidx) {
		return author$project$Item$Paper(
			A4(author$project$Item$PaperInfo, pidx, '', '', ''));
	};
	var _n1 = function (_n2) {
		var lx = _n2.a;
		var ly = _n2.b;
		return _Utils_Tuple2(
			A2(
				elm$core$List$indexedMap,
				F2(
					function (i, fnr) {
						return _Utils_Tuple2(
							fnr,
							newPaper(i + 1));
					}),
				lx),
			ly);
	}(
		author$project$GameDefinitions$Game2$Game2Definitions$generate_three_random_nrs_between_zero_and_four(lrands));
	var lfloornr_paperItemTuples = _n1.a;
	var lremainingrands = _n1.b;
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n3, _n4) {
				var fid = _n3.a;
				var paperitem = _n3.b;
				var storeacc = _n4.a;
				var lrand = _n4.b;
				return A3(
					author$project$GameDefinitions$Game2$Game2Definitions$place_one_item_in_random_coords,
					fid,
					paperitem,
					_Utils_Tuple2(storeacc, lrand));
			}),
		_Utils_Tuple2(storedict, lremainingrands),
		lfloornr_paperItemTuples);
};
var author$project$Tile$defaultVisibleGrassInfo = {description: 'grass', isExplored: false, isTransparent: false, isWalkable: true, visibility: author$project$Tile$Visible};
var author$project$Tile$walkableWaterInfo = {description: 'just_water', isExplored: false, isTransparent: false, isWalkable: true, visibility: author$project$Tile$Unexplored};
var author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForLever1 = function () {
	var nrEnlightenedOpponents = function (model) {
		return elm$core$List$length(
			A2(
				elm$core$List$filter,
				function (en) {
					return _Utils_cmp(en.indexOfLight, en.indexOfLightMax) > -1;
				},
				elm$core$Dict$values(model.fightingCharacters)));
	};
	var nrDeadOpponents = function (model) {
		return elm$core$List$length(
			A2(
				elm$core$List$filter,
				function (en) {
					return en.health <= 0;
				},
				elm$core$Dict$values(model.fightingCharacters)));
	};
	var reqsCompleted = function (model) {
		return (nrEnlightenedOpponents(model) >= 0) && (!nrDeadOpponents(model));
	};
	return _List_fromArray(
		[
			F2(
			function (coords, model) {
				return reqsCompleted(model) ? _Utils_update(
					model,
					{
						level: A3(
							author$project$Grid$set,
							A2(author$project$Grid$Coordinate, 20, 13),
							author$project$Tile$Grass(author$project$Tile$defaultVisibleGrassInfo),
							A3(
								author$project$Grid$set,
								A2(author$project$Grid$Coordinate, 17, 2),
								author$project$Tile$Water(author$project$Tile$walkableWaterInfo),
								A3(
									author$project$Grid$set,
									A2(author$project$Grid$Coordinate, 16, 2),
									author$project$Tile$Water(author$project$Tile$walkableWaterInfo),
									A3(
										author$project$Grid$set,
										A2(author$project$Grid$Coordinate, 15, 2),
										author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
										model.level))))
					}) : _Utils_update(
					model,
					{
						level: A3(
							author$project$Grid$set,
							coords,
							author$project$Tile$Lever(author$project$GameDefinitions$Game2$LastFloor$customLeverInfo),
							A3(
								author$project$Grid$set,
								A2(author$project$Grid$Coordinate, 15, 2),
								author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
								model.level))
					});
			})
		]);
}();
var author$project$GameModel$SimpleModelChanger = function (a) {
	return {$: 'SimpleModelChanger', a: a};
};
var author$project$GameDefinitions$Game2$LastFloor$leverModelChangerFuncs = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			1,
			author$project$GameModel$SimpleModelChanger(author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForLever1))
		]));
var author$project$GameDefinitions$Game2$Game2Definitions$initialModelFunc = F2(
	function (lrandints, imgBaseDir_) {
		var randomlyPositionPlayer = false;
		var player_ = A3(author$project$GameDefinitions$Game2$Game2Definitions$initialPlayer, 67, 36, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id);
		var otherCharacter = author$project$GameDefinitions$Game2$Game2Definitions$otherCharacterFunc;
		var levers = elm$core$Dict$empty;
		var fightingCharacter9 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 9, 'ghost', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id);
		var fightingCharacter8 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 8, 'pumpking', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id);
		var fightingCharacter7 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 7, 'ghost', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id);
		var fightingCharacter6 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 6, 'pumpking', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id);
		var fightingCharacter5 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 5, 'small_worm', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id);
		var fightingCharacter4 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 4, 'slime', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id);
		var fightingCharacter3 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 3, 'bat', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id);
		var fightingCharacter2 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 2, 'snake', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id);
		var fightingCharacter10 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 10, 'bat', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id);
		var fightingCharacter1 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 1, 'ghost', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id);
		var createRandomMap = false;
		var _n0 = A2(
			author$project$GameDefinitions$Game2$Game2Definitions$place_all_health_food_items,
			5,
			author$project$GameDefinitions$Game2$Game2Definitions$place_three_pieces_of_paper(
				_Utils_Tuple2(author$project$GameDefinitions$Game2$Game2Definitions$dStore, lrandints)));
		var storeDictWithPlacedPapers = _n0.a;
		var lrands = _n0.b;
		return _Utils_Tuple3(
			{
				currentDisplay: author$project$GameModel$DisplayRegularGame,
				currentFloorId: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				debugMode: false,
				displayStatsOverlay: false,
				explored: author$project$GameDefinitions$Common$setAllAsUnexplored(author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor),
				fightingCharacters: elm$core$Dict$fromList(
					_List_fromArray(
						[
							_Utils_Tuple2(fightingCharacter1.id, fightingCharacter1),
							_Utils_Tuple2(fightingCharacter2.id, fightingCharacter2),
							_Utils_Tuple2(fightingCharacter3.id, fightingCharacter3),
							_Utils_Tuple2(fightingCharacter4.id, fightingCharacter4),
							_Utils_Tuple2(fightingCharacter5.id, fightingCharacter5),
							_Utils_Tuple2(fightingCharacter6.id, fightingCharacter6),
							_Utils_Tuple2(fightingCharacter7.id, fightingCharacter7),
							_Utils_Tuple2(fightingCharacter8.id, fightingCharacter8),
							_Utils_Tuple2(fightingCharacter9.id, fightingCharacter9),
							_Utils_Tuple2(fightingCharacter10.id, fightingCharacter10)
						])),
				floorDict: storeDictWithPlacedPapers,
				gameCompletionFunc: author$project$GameDefinitions$Game2$Game2Definitions$customGameCompletionFunc,
				gameOfThornsModel: A3(author$project$Thorns$Types$initialModel, player_, elm$core$Maybe$Nothing, imgBaseDir_),
				imgBaseDir: imgBaseDir_,
				level: A2(
					elm$core$Maybe$withDefault,
					author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor,
					A2(
						elm$core$Maybe$map,
						function ($) {
							return $.level;
						},
						A2(elm$core$Dict$get, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, storeDictWithPlacedPapers))),
				leverModelChangerFuncs: author$project$GameDefinitions$Game2$LastFloor$leverModelChangerFuncs,
				listeningToKeyInput: true,
				log: _List_fromArray(
					['you enter the dungeons Ground Floor ']),
				otherCharacters: elm$core$Dict$fromList(
					_List_fromArray(
						[
							_Utils_Tuple2(1, otherCharacter)
						])),
				player: player_,
				pseudoRandomIntsPool: _List_Nil,
				radius_of_visibility: 5,
				roomsInfo: elm$core$Maybe$Nothing,
				showBlood: true,
				started: true,
				tileHeight: 64,
				tileWidth: 64,
				total_height: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 9),
				total_width: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				viewport_topleft_x: 3,
				viewport_topleft_y: 3,
				wallPercentage: elm$core$Maybe$Nothing,
				window_height: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				window_width: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			},
			createRandomMap,
			randomlyPositionPlayer);
	});
var author$project$GameModel$DisplayGameCompleted = {$: 'DisplayGameCompleted'};
var author$project$GameModel$DisplayGameOfThorns = {$: 'DisplayGameOfThorns'};
var author$project$GameModel$DisplayGameOver = {$: 'DisplayGameOver'};
var author$project$GameModel$DisplayHelpScreen = {$: 'DisplayHelpScreen'};
var author$project$GameModel$DisplayInventory = {$: 'DisplayInventory'};
var author$project$GameModel$DisplayOpponentReport = {$: 'DisplayOpponentReport'};
var author$project$GameModel$location = author$project$Grid$Coordinate;
var author$project$GameModel$mbUpdateFightingCharacterInitiativeByMbFCharId = F3(
	function (intval, mbFightCharid, model) {
		if (mbFightCharid.$ === 'Nothing') {
			return model;
		} else {
			var fCharId = mbFightCharid.a;
			var updatedFightingCharacters = A3(
				elm$core$Dict$update,
				fCharId,
				function (mbFightChar) {
					return A2(
						elm$core$Maybe$map,
						function (fCharRec) {
							return _Utils_update(
								fCharRec,
								{initiative: intval});
						},
						mbFightChar);
				},
				model.fightingCharacters);
			return _Utils_update(
				model,
				{fightingCharacters: updatedFightingCharacters});
		}
	});
var author$project$GameModel$mbUpdateFightingCharacterLocation = F2(
	function (loc, mbFightChar) {
		if (mbFightChar.$ === 'Nothing') {
			return elm$core$Maybe$Nothing;
		} else {
			var fchar = mbFightChar.a;
			return elm$core$Maybe$Just(
				_Utils_update(
					fchar,
					{location: loc, placed: true}));
		}
	});
var author$project$GameModel$placeExistingFightingCharacter = F3(
	function (fcharid, loc, dictacc) {
		var _n0 = A2(elm$core$Dict$get, fcharid, dictacc);
		if (_n0.$ === 'Nothing') {
			return dictacc;
		} else {
			return A3(
				elm$core$Dict$update,
				fcharid,
				function (mbFightChar) {
					return A2(author$project$GameModel$mbUpdateFightingCharacterLocation, loc, mbFightChar);
				},
				dictacc);
		}
	});
var author$project$GameUpdate$CleanUpAndFightingCharacterLogic = {$: 'CleanUpAndFightingCharacterLogic'};
var author$project$GameUpdate$NewRandomPointToPlaceFightingCharacter = F2(
	function (a, b) {
		return {$: 'NewRandomPointToPlaceFightingCharacter', a: a, b: b};
	});
var author$project$GameUpdate$StartOpponentInteraction = function (a) {
	return {$: 'StartOpponentInteraction', a: a};
};
var author$project$GameUpdate$ThornsMsg = function (a) {
	return {$: 'ThornsMsg', a: a};
};
var author$project$GameUpdate$TryAddToPlayerInventory = {$: 'TryAddToPlayerInventory'};
var author$project$GameUpdate$TryShiftPlayerPosition = function (a) {
	return {$: 'TryShiftPlayerPosition', a: a};
};
var author$project$GameModel$getCurrentFloorInfoToStore = function (model) {
	return {explored: model.explored, level: model.level, total_height: model.total_height, total_width: model.total_width, window_height: model.window_height, window_width: model.window_width};
};
var author$project$Beings$Beings$Left = {$: 'Left'};
var author$project$Beings$Beings$Right = {$: 'Right'};
var author$project$Beings$Beings$Up = {$: 'Up'};
var author$project$Beings$BeingsInTileGrid$move = F4(
	function (_n0, grid, isWalkableFunc, a) {
		var x_shift = _n0.a;
		var y_shift = _n0.b;
		var location = A2(author$project$Grid$Coordinate, a.location.x + x_shift, a.location.y + y_shift);
		var initiative = a.initiative + 100;
		var _n1 = A3(isWalkableFunc, location, a, grid);
		if (!_n1) {
			return (x_shift && y_shift) ? A4(
				author$project$Beings$BeingsInTileGrid$move,
				_Utils_Tuple2(0, y_shift),
				grid,
				isWalkableFunc,
				A4(
					author$project$Beings$BeingsInTileGrid$move,
					_Utils_Tuple2(x_shift, 0),
					grid,
					isWalkableFunc,
					a)) : a;
		} else {
			return _Utils_update(
				a,
				{
					direction: (x_shift > 0) ? author$project$Beings$Beings$Right : ((x_shift < 0) ? author$project$Beings$Beings$Left : ((y_shift > 0) ? author$project$Beings$Beings$Down : author$project$Beings$Beings$Up)),
					initiative: initiative,
					location: location
				});
		}
	});
var author$project$GameUpdate$move = F4(
	function (_n0, grid, isWalkableFunc, a) {
		var x_shift = _n0.a;
		var y_shift = _n0.b;
		return A4(
			author$project$Beings$BeingsInTileGrid$move,
			_Utils_Tuple2(x_shift, y_shift),
			grid,
			isWalkableFunc,
			a);
	});
var author$project$Tile$Column = function (a) {
	return {$: 'Column', a: a};
};
var author$project$Tile$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var author$project$Tile$WallOver = function (a) {
	return {$: 'WallOver', a: a};
};
var author$project$Tile$setTileVisibility = F2(
	function (visibility_, tile) {
		switch (tile.$) {
			case 'Floor':
				var floorinfo = tile.a;
				return author$project$Tile$Floor(
					_Utils_update(
						floorinfo,
						{visibility: visibility_}));
			case 'Grass':
				var grassinfo = tile.a;
				return author$project$Tile$Grass(
					_Utils_update(
						grassinfo,
						{visibility: visibility_}));
			case 'Tree':
				var treeInfo = tile.a;
				return author$project$Tile$Tree(
					_Utils_update(
						treeInfo,
						{visibility: visibility_}));
			case 'Stairs':
				var sinfo = tile.a;
				return author$project$Tile$Stairs(
					_Utils_update(
						sinfo,
						{visibility: visibility_}));
			case 'Hole':
				var hinfo = tile.a;
				return author$project$Tile$Hole(
					_Utils_update(
						hinfo,
						{visibility: visibility_}));
			case 'Wall':
				var wInfo = tile.a;
				return author$project$Tile$Wall(
					_Utils_update(
						wInfo,
						{visibility: visibility_}));
			case 'WallOver':
				var wOverInfo = tile.a;
				return author$project$Tile$WallOver(
					_Utils_update(
						wOverInfo,
						{visibility: visibility_}));
			case 'Door':
				var doorinfo = tile.a;
				return author$project$Tile$Door(
					_Utils_update(
						doorinfo,
						{visibility: visibility_}));
			case 'Lever':
				var leverInfo = tile.a;
				return author$project$Tile$Lever(
					_Utils_update(
						leverInfo,
						{visibility: visibility_}));
			case 'Flag':
				var flagInfo = tile.a;
				return author$project$Tile$Flag(
					_Utils_update(
						flagInfo,
						{visibility: visibility_}));
			case 'Column':
				var columnInfo = tile.a;
				return author$project$Tile$Column(
					_Utils_update(
						columnInfo,
						{visibility: visibility_}));
			case 'Water':
				var waterInfo = tile.a;
				return author$project$Tile$Water(
					_Utils_update(
						waterInfo,
						{visibility: visibility_}));
			case 'ConverterTile':
				var it = tile.a;
				var ct = tile.b;
				return A2(author$project$Tile$ConverterTile, it, ct);
			default:
				return author$project$Tile$NoTileYet;
		}
	});
var author$project$GameModel$setModelTileVisibility = F3(
	function (location_, visibility_, model) {
		var _n0 = A2(author$project$Grid$get, location_, model.level);
		if (_n0.$ === 'Nothing') {
			return model;
		} else {
			var tile = _n0.a;
			var newTile = A2(author$project$Tile$setTileVisibility, visibility_, tile);
			return _Utils_update(
				model,
				{
					level: A3(author$project$Grid$set, location_, newTile, model.level)
				});
		}
	});
var author$project$Grid$neighborhoodCalc = F2(
	function (d, _n0) {
		var x = _n0.x;
		var y = _n0.y;
		var linc = A2(elm$core$List$range, -d, d);
		var possible_new_x = A2(
			elm$core$List$map,
			function (el) {
				return el + x;
			},
			linc);
		var possible_new_y = A2(
			elm$core$List$map,
			function (el) {
				return el + y;
			},
			linc);
		var possible_end_pos = A2(
			elm$core$List$concatMap,
			function (el) {
				return A2(
					elm$core$List$map,
					function (yel) {
						return A2(author$project$Grid$Coordinate, el, yel);
					},
					possible_new_y);
			},
			possible_new_x);
		return possible_end_pos;
	});
var author$project$GameModel$visible = function (model) {
	return A2(author$project$Grid$neighborhoodCalc, model.radius_of_visibility, model.player.location);
};
var elm$core$Elm$JsArray$map = _JsArray_map;
var elm$core$Array$map = F2(
	function (func, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = function (node) {
			if (node.$ === 'SubTree') {
				var subTree = node.a;
				return elm$core$Array$SubTree(
					A2(elm$core$Elm$JsArray$map, helper, subTree));
			} else {
				var values = node.a;
				return elm$core$Array$Leaf(
					A2(elm$core$Elm$JsArray$map, func, values));
			}
		};
		return A4(
			elm$core$Array$Array_elm_builtin,
			len,
			startShift,
			A2(elm$core$Elm$JsArray$map, helper, tree),
			A2(elm$core$Elm$JsArray$map, func, tail));
	});
var author$project$Grid$map = F2(
	function (f, grid) {
		var grid_ = A2(
			elm$core$Array$map,
			function (row) {
				return A2(elm$core$Array$map, f, row);
			},
			grid.grid);
		return A2(author$project$Grid$Grid, grid_, grid.size);
	});
var author$project$Tile$Explored = {$: 'Explored'};
var author$project$Tile$getTileVisibility = function (tile) {
	switch (tile.$) {
		case 'Floor':
			var floorinfo = tile.a;
			return floorinfo.visibility;
		case 'Grass':
			var grassinfo = tile.a;
			return grassinfo.visibility;
		case 'Tree':
			var treeinfo = tile.a;
			return treeinfo.visibility;
		case 'Stairs':
			var sinfo = tile.a;
			return sinfo.visibility;
		case 'Hole':
			var hinfo = tile.a;
			return hinfo.visibility;
		case 'Wall':
			var wInfo = tile.a;
			return wInfo.visibility;
		case 'WallOver':
			var wOverInfo = tile.a;
			return wOverInfo.visibility;
		case 'Door':
			var doorinfo = tile.a;
			return doorinfo.visibility;
		case 'Lever':
			var leverInfo = tile.a;
			return leverInfo.visibility;
		case 'Flag':
			var flagInfo = tile.a;
			return flagInfo.visibility;
		case 'Column':
			var columnInfo = tile.a;
			return columnInfo.visibility;
		case 'Water':
			var waterInfo = tile.a;
			return waterInfo.visibility;
		case 'ConverterTile':
			var it = tile.a;
			var ct = tile.b;
			return author$project$Tile$Visible;
		default:
			return author$project$Tile$Unexplored;
	}
};
var author$project$GameUpdate$reveal = function (model) {
	var intermediateModelGrid = A2(
		author$project$Grid$map,
		function (t) {
			return _Utils_eq(
				author$project$Tile$getTileVisibility(t),
				author$project$Tile$Visible) ? A2(author$project$Tile$setTileVisibility, author$project$Tile$Explored, t) : t;
		},
		model.level);
	var intermediateModel = _Utils_update(
		model,
		{level: intermediateModelGrid});
	var newModel = A3(
		elm$core$List$foldl,
		F2(
			function (loc, imodel) {
				return A3(author$project$GameModel$setModelTileVisibility, loc, author$project$Tile$Visible, imodel);
			}),
		intermediateModel,
		author$project$GameModel$visible(model));
	return newModel;
};
var author$project$GameUpdate$changeFloorTo = F3(
	function (model, floorId, locTuple) {
		var newModel = function () {
			if (_Utils_eq(model.currentFloorId, floorId)) {
				return model;
			} else {
				var newCurrentFloor = A2(elm$core$Dict$get, floorId, model.floorDict);
				var currentFloorInfo = author$project$GameModel$getCurrentFloorInfoToStore(model);
				var newStore = A3(
					elm$core$Dict$update,
					model.currentFloorId,
					function (_n1) {
						return elm$core$Maybe$Just(currentFloorInfo);
					},
					model.floorDict);
				if (newCurrentFloor.$ === 'Just') {
					var cFloor = newCurrentFloor.a;
					return _Utils_update(
						model,
						{currentFloorId: floorId, explored: cFloor.explored, floorDict: newStore, level: cFloor.level, total_height: cFloor.total_height, total_width: cFloor.total_width, window_height: cFloor.window_height, window_width: cFloor.window_width});
				} else {
					return _Utils_update(
						model,
						{floorDict: newStore});
				}
			}
		}();
		var delta_y = locTuple.b - newModel.player.location.y;
		var delta_x = locTuple.a - newModel.player.location.x;
		var player_ = A4(
			author$project$GameUpdate$move,
			_Utils_Tuple2(delta_x, delta_y),
			newModel.level,
			author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
			newModel.player);
		return author$project$GameUpdate$reveal(
			_Utils_update(
				newModel,
				{
					player: player_,
					viewport_topleft_x: A2(
						elm$core$Basics$max,
						0,
						locTuple.a - elm$core$Basics$round(newModel.window_width / 2.0)),
					viewport_topleft_y: A2(
						elm$core$Basics$max,
						0,
						locTuple.b - elm$core$Basics$round(newModel.window_height / 2))
				}));
	});
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var author$project$GameUpdate$checkAndAlterDisplayAnchorIfNecessary = function (model) {
	var p_y_dist = 5;
	var p_x_dist = 5;
	var newYanchor = (_Utils_cmp(model.player.location.y, model.viewport_topleft_y) < 1) ? A2(elm$core$Basics$max, 0, model.viewport_topleft_y - (model.window_height - p_y_dist)) : ((_Utils_cmp(model.player.location.y, model.viewport_topleft_y + (model.window_height - 1)) > -1) ? A2(elm$core$Basics$min, model.viewport_topleft_y + (model.window_height - p_y_dist), model.total_height - (model.window_height - p_y_dist)) : model.viewport_topleft_y);
	var newXanchor = (_Utils_cmp(model.player.location.x, model.viewport_topleft_x) < 1) ? A2(elm$core$Basics$max, 0, model.viewport_topleft_x - (model.window_width - p_x_dist)) : ((_Utils_cmp(model.player.location.x, model.viewport_topleft_x + (model.window_width - 1)) > -1) ? A2(elm$core$Basics$min, model.viewport_topleft_x + (model.window_width - p_x_dist), model.total_width - (model.window_width - p_x_dist)) : model.viewport_topleft_x);
	return _Utils_update(
		model,
		{viewport_topleft_x: newXanchor, viewport_topleft_y: newYanchor});
};
var author$project$GameUpdate$checkGameCompletion = function (model) {
	return A2(model.gameCompletionFunc, model.currentFloorId, model.player.location);
};
var author$project$GameUpdate$searchFloorForStairsId = F3(
	function (floorId, stairsId, model) {
		var mbFloorGrid = A2(elm$core$Dict$get, floorId, model.floorDict);
		var getlcoords = function (fgrid) {
			return author$project$Grid$toCoordinates(fgrid);
		};
		var checkCoords = F2(
			function (coords_, fgrid) {
				var _n1 = A2(author$project$Grid$get, coords_, fgrid);
				if ((_n1.$ === 'Just') && (_n1.a.$ === 'Stairs')) {
					var sinfo = _n1.a.a;
					return _Utils_eq(sinfo.stairsId, stairsId);
				} else {
					return false;
				}
			});
		if (mbFloorGrid.$ === 'Just') {
			var floorGrid = mbFloorGrid.a;
			return A2(
				elm$core$Maybe$map,
				function (rec) {
					return _Utils_Tuple2(rec.x, rec.y);
				},
				elm$core$List$head(
					A2(
						elm$core$List$filter,
						function (coords) {
							return A2(checkCoords, coords, floorGrid.level);
						},
						getlcoords(floorGrid.level))));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$GameUpdate$searchFloorForTargetId = F3(
	function (fid, target_id, model) {
		var mbFloorGrid = A2(elm$core$Dict$get, fid, model.floorDict);
		var getlcoords = function (fgrid) {
			return author$project$Grid$toCoordinates(fgrid);
		};
		var checkCoords = F2(
			function (coords_, fgrid) {
				var _n1 = A2(author$project$Grid$get, coords_, fgrid);
				if ((_n1.$ === 'Just') && (_n1.a.$ === 'Floor')) {
					var finfo = _n1.a.a;
					var _n2 = finfo.floorDrawing;
					if (_n2.$ === 'Just') {
						var tid = _n2.a.a;
						return _Utils_eq(target_id, tid);
					} else {
						return false;
					}
				} else {
					return false;
				}
			});
		if (mbFloorGrid.$ === 'Just') {
			var floorGrid = mbFloorGrid.a;
			return A2(
				elm$core$Maybe$map,
				function (rec) {
					return _Utils_Tuple3(fid, rec.x, rec.y);
				},
				elm$core$List$head(
					A2(
						elm$core$List$filter,
						function (coords) {
							return A2(checkCoords, coords, floorGrid.level);
						},
						getlcoords(floorGrid.level))));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$GameUpdate$searchFloorForTeleporterId = F3(
	function (fid, target_id_, model) {
		var mbFloorGrid = A2(elm$core$Dict$get, fid, model.floorDict);
		var getlcoords = function (fgrid) {
			return author$project$Grid$toCoordinates(fgrid);
		};
		var checkCoords = F2(
			function (coords_, fgrid) {
				var _n1 = A2(author$project$Grid$get, coords_, fgrid);
				if ((_n1.$ === 'Just') && (_n1.a.$ === 'Wall')) {
					var wallinfo = _n1.a.a;
					var _n2 = wallinfo.mbTeleporterObject;
					if (_n2.$ === 'Just') {
						var ateleporter = _n2.a;
						return _Utils_eq(ateleporter.teleporter_id, target_id_);
					} else {
						return false;
					}
				} else {
					return false;
				}
			});
		if (mbFloorGrid.$ === 'Just') {
			var floorGrid = mbFloorGrid.a;
			return A2(
				elm$core$Maybe$map,
				function (rec) {
					return _Utils_Tuple3(fid, rec.x, rec.y);
				},
				elm$core$List$head(
					A2(
						elm$core$List$filter,
						function (coords) {
							return A2(checkCoords, coords, floorGrid.level);
						},
						getlcoords(floorGrid.level))));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var author$project$GameUpdate$checkIfPlayerStandingOnStairsOrHoleAndMoveToNewFloor = function (model) {
	var mbTile = A2(author$project$Grid$get, model.player.location, model.level);
	_n0$3:
	while (true) {
		if (mbTile.$ === 'Just') {
			switch (mbTile.a.$) {
				case 'Stairs':
					var sinfo = mbTile.a.a;
					var mbDestinationCoordsTuple = A3(author$project$GameUpdate$searchFloorForStairsId, sinfo.toFloorId, sinfo.toStairsId, model);
					if (mbDestinationCoordsTuple.$ === 'Just') {
						var _n2 = mbDestinationCoordsTuple.a;
						var newX = _n2.a;
						var newY = _n2.b;
						return A3(
							author$project$GameUpdate$changeFloorTo,
							model,
							sinfo.toFloorId,
							_Utils_Tuple2(newX + sinfo.shift.a, newY + sinfo.shift.b));
					} else {
						return model;
					}
				case 'Hole':
					var hinfo = mbTile.a.a;
					var lfloorIds = elm$core$Dict$keys(
						A2(
							elm$core$Dict$filter,
							F2(
								function (floorId, v) {
									return _Utils_cmp(floorId, model.currentFloorId) < 0;
								}),
							model.floorDict));
					var mbDestinationFloorAndCoordsTuple = elm$core$List$head(
						A2(
							elm$core$List$filterMap,
							function (x) {
								return x;
							},
							A2(
								elm$core$List$map,
								function (floorId) {
									return A3(author$project$GameUpdate$searchFloorForTargetId, floorId, hinfo.target_id, model);
								},
								lfloorIds)));
					if (mbDestinationFloorAndCoordsTuple.$ === 'Just') {
						var _n4 = mbDestinationFloorAndCoordsTuple.a;
						var floorId = _n4.a;
						var newX = _n4.b;
						var newY = _n4.c;
						return A3(
							author$project$GameUpdate$changeFloorTo,
							model,
							floorId,
							_Utils_Tuple2(newX, newY));
					} else {
						return model;
					}
				case 'Wall':
					var wallinfo = mbTile.a.a;
					var _n5 = wallinfo.mbTeleporterObject;
					if (_n5.$ === 'Nothing') {
						return model;
					} else {
						var teleporter = _n5.a;
						var sameFloorId = model.currentFloorId;
						var lOtherFloorIds = elm$core$Dict$keys(
							A2(
								elm$core$Dict$filter,
								F2(
									function (floorId, v) {
										return !_Utils_eq(floorId, model.currentFloorId);
									}),
								model.floorDict));
						var mbDestinationFloorAndCoordsTuple = function () {
							var _n8 = A3(author$project$GameUpdate$searchFloorForTeleporterId, sameFloorId, teleporter.target_id, model);
							if (_n8.$ === 'Just') {
								var _n9 = _n8.a;
								var floorid = _n9.a;
								var xcoord = _n9.b;
								var ycoord = _n9.c;
								return elm$core$Maybe$Just(
									_Utils_Tuple3(floorid, xcoord + teleporter.shift.a, ycoord + teleporter.shift.b));
							} else {
								return A2(
									elm$core$Maybe$map,
									function (_n10) {
										var floorid = _n10.a;
										var xcoord = _n10.b;
										var ycoord = _n10.c;
										return _Utils_Tuple3(floorid, xcoord + teleporter.shift.a, ycoord + teleporter.shift.b);
									},
									elm$core$List$head(
										A2(
											elm$core$List$filterMap,
											function (x) {
												return x;
											},
											A2(
												elm$core$List$map,
												function (floorId) {
													return A3(author$project$GameUpdate$searchFloorForTeleporterId, floorId, teleporter.target_id, model);
												},
												lOtherFloorIds))));
							}
						}();
						if (mbDestinationFloorAndCoordsTuple.$ === 'Just') {
							var _n7 = mbDestinationFloorAndCoordsTuple.a;
							var floorId = _n7.a;
							var newX = _n7.b;
							var newY = _n7.c;
							return A3(
								author$project$GameUpdate$changeFloorTo,
								model,
								floorId,
								_Utils_Tuple2(newX, newY));
						} else {
							return model;
						}
					}
				default:
					break _n0$3;
			}
		} else {
			break _n0$3;
		}
	}
	return model;
};
var author$project$GameUpdate$log = F2(
	function (s, model) {
		return _Utils_update(
			model,
			{
				log: A2(elm$core$List$cons, s, model.log)
			});
	});
var elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2(elm$core$Dict$map, func, left),
				A2(elm$core$Dict$map, func, right));
		}
	});
var elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2(elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var elm$core$Dict$size = function (dict) {
	return A2(elm$core$Dict$sizeHelp, 0, dict);
};
var author$project$GameUpdate$cleanup = function (model) {
	var dead_and_doesnt_disappear = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (fightingCharacter.health <= 0) && (!fightingCharacter.disappearsWhenHealthIsZero);
			}),
		model.fightingCharacters);
	var dead_and_disappears = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (fightingCharacter.health <= 0) && fightingCharacter.disappearsWhenHealthIsZero;
			}),
		model.fightingCharacters);
	var msg = (!elm$core$Dict$size(dead_and_disappears)) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
		A3(
			elm$core$Dict$foldl,
			F3(
				function (id, nstr, acc) {
					return _Utils_ap(acc, nstr);
				}),
			'',
			A2(
				elm$core$Dict$map,
				F2(
					function (fcharId, fightingCharacter) {
						return fightingCharacter.name + ' died. ';
					}),
				dead_and_disappears)));
	var alive_no_enlightenment = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (fightingCharacter.health > 0) && (_Utils_cmp(fightingCharacter.indexOfLight, fightingCharacter.indexOfLightMax) < 0);
			}),
		model.fightingCharacters);
	var alive_enlightened_doesnt_disappear = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (fightingCharacter.health > 0) && ((_Utils_cmp(fightingCharacter.indexOfLight, fightingCharacter.indexOfLightMax) > -1) && (!fightingCharacter.disappearsWhenIndexOfLightMax));
			}),
		model.fightingCharacters);
	var alive_enlightened_disappears = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (fightingCharacter.health > 0) && ((_Utils_cmp(fightingCharacter.indexOfLight, fightingCharacter.indexOfLightMax) > -1) && fightingCharacter.disappearsWhenIndexOfLightMax);
			}),
		model.fightingCharacters);
	var keys_to_remove = _Utils_ap(
		elm$core$Dict$keys(dead_and_disappears),
		elm$core$Dict$keys(alive_enlightened_disappears));
	var newModel = _Utils_update(
		model,
		{
			fightingCharacters: A2(
				elm$core$Dict$filter,
				F2(
					function (k, v) {
						return !A2(elm$core$List$member, k, keys_to_remove);
					}),
				model.fightingCharacters)
		});
	if (msg.$ === 'Nothing') {
		return newModel;
	} else {
		var m = msg.a;
		return A2(author$project$GameUpdate$log, m, newModel);
	}
};
var author$project$GameUpdate$NewRandomIntsAddToPool = function (a) {
	return {$: 'NewRandomIntsAddToPool', a: a};
};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$String$all = _String_all;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$random$Random$Generate = function (a) {
	return {$: 'Generate', a: a};
};
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 'Seed', a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$random$Random$initialSeed = function (x) {
	var _n0 = elm$random$Random$next(
		A2(elm$random$Random$Seed, 0, 1013904223));
	var state1 = _n0.a;
	var incr = _n0.b;
	var state2 = (state1 + x) >>> 0;
	return elm$random$Random$next(
		A2(elm$random$Random$Seed, state2, incr));
};
var elm$time$Time$Name = function (a) {
	return {$: 'Name', a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 'Offset', a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 'Zone', a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$Posix = function (a) {
	return {$: 'Posix', a: a};
};
var elm$time$Time$millisToPosix = elm$time$Time$Posix;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0.a;
	return millis;
};
var elm$random$Random$init = A2(
	elm$core$Task$andThen,
	function (time) {
		return elm$core$Task$succeed(
			elm$random$Random$initialSeed(
				elm$time$Time$posixToMillis(time)));
	},
	elm$time$Time$now);
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$random$Random$step = F2(
	function (_n0, seed) {
		var generator = _n0.a;
		return generator(seed);
	});
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a.a;
			var rest = commands.b;
			var _n1 = A2(elm$random$Random$step, generator, seed);
			var value = _n1.a;
			var newSeed = _n1.b;
			return A2(
				elm$core$Task$andThen,
				function (_n2) {
					return A3(elm$random$Random$onEffects, router, rest, newSeed);
				},
				A2(elm$core$Platform$sendToApp, router, value));
		}
	});
var elm$random$Random$onSelfMsg = F3(
	function (_n0, _n1, seed) {
		return elm$core$Task$succeed(seed);
	});
var elm$random$Random$Generator = function (a) {
	return {$: 'Generator', a: a};
};
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n1 = genA(seed0);
				var a = _n1.a;
				var seed1 = _n1.b;
				return _Utils_Tuple2(
					func(a),
					seed1);
			});
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0.a;
		return elm$random$Random$Generate(
			A2(elm$random$Random$map, func, generator));
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			elm$random$Random$Generate(
				A2(elm$random$Random$map, tagger, generator)));
	});
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return elm$random$Random$Generator(
			function (seed0) {
				var _n0 = (_Utils_cmp(a, b) < 0) ? _Utils_Tuple2(a, b) : _Utils_Tuple2(b, a);
				var lo = _n0.a;
				var hi = _n0.b;
				var range = (hi - lo) + 1;
				if (!((range - 1) & range)) {
					return _Utils_Tuple2(
						(((range - 1) & elm$random$Random$peel(seed0)) >>> 0) + lo,
						elm$random$Random$next(seed0));
				} else {
					var threshhold = (((-range) >>> 0) % range) >>> 0;
					var accountForBias = function (seed) {
						accountForBias:
						while (true) {
							var x = elm$random$Random$peel(seed);
							var seedN = elm$random$Random$next(seed);
							if (_Utils_cmp(x, threshhold) < 0) {
								var $temp$seed = seedN;
								seed = $temp$seed;
								continue accountForBias;
							} else {
								return _Utils_Tuple2((x % range) + lo, seedN);
							}
						}
					};
					return accountForBias(seed0);
				}
			});
	});
var elm$random$Random$listHelp = F4(
	function (revList, n, gen, seed) {
		listHelp:
		while (true) {
			if (n < 1) {
				return _Utils_Tuple2(revList, seed);
			} else {
				var _n0 = gen(seed);
				var value = _n0.a;
				var newSeed = _n0.b;
				var $temp$revList = A2(elm$core$List$cons, value, revList),
					$temp$n = n - 1,
					$temp$gen = gen,
					$temp$seed = newSeed;
				revList = $temp$revList;
				n = $temp$n;
				gen = $temp$gen;
				seed = $temp$seed;
				continue listHelp;
			}
		}
	});
var elm$random$Random$list = F2(
	function (n, _n0) {
		var gen = _n0.a;
		return elm$random$Random$Generator(
			function (seed) {
				return A4(elm$random$Random$listHelp, _List_Nil, n, gen, seed);
			});
	});
var author$project$GameUpdate$cmdFillRandomIntsPool = function (model) {
	var nrToAdd = 500 - elm$core$List$length(model.pseudoRandomIntsPool);
	return (nrToAdd > 0) ? A2(
		elm$random$Random$generate,
		author$project$GameUpdate$NewRandomIntsAddToPool,
		A2(
			elm$random$Random$list,
			nrToAdd,
			A2(elm$random$Random$int, 1, 100))) : elm$core$Platform$Cmd$none;
};
var author$project$GameUpdate$NewRandomIntsAddToPoolAndGenerateRandomMap = function (a) {
	return {$: 'NewRandomIntsAddToPoolAndGenerateRandomMap', a: a};
};
var author$project$GameUpdate$cmdFillRandomIntsPoolAndGenerateRandomMap = function (model) {
	var nrToAdd = 500 - elm$core$List$length(model.pseudoRandomIntsPool);
	return (nrToAdd > 0) ? A2(
		elm$random$Random$generate,
		author$project$GameUpdate$NewRandomIntsAddToPoolAndGenerateRandomMap,
		A2(
			elm$random$Random$list,
			nrToAdd,
			A2(elm$random$Random$int, 1, 100))) : A2(
		elm$random$Random$generate,
		author$project$GameUpdate$NewRandomIntsAddToPoolAndGenerateRandomMap,
		A2(
			elm$random$Random$list,
			1,
			A2(elm$random$Random$int, 1, 100)));
};
var author$project$GameUpdate$RandomInitiativeValue = F3(
	function (a, b, c) {
		return {$: 'RandomInitiativeValue', a: a, b: b, c: c};
	});
var author$project$GameUpdate$cmdGenerateRandomInitiativeValue = F4(
	function (strCharacter, mbCharacterId, minval, maxval) {
		return A2(
			elm$random$Random$generate,
			A2(author$project$GameUpdate$RandomInitiativeValue, strCharacter, mbCharacterId),
			A2(elm$random$Random$int, minval, maxval));
	});
var author$project$GameUpdate$NewGridCoordinatesIndexToPlaceFightingCharacter = F2(
	function (a, b) {
		return {$: 'NewGridCoordinatesIndexToPlaceFightingCharacter', a: a, b: b};
	});
var author$project$GameUpdate$getRandInt = F2(
	function (minX, maxX) {
		return A2(elm$random$Random$int, minX, maxX);
	});
var author$project$GameUpdate$cmdGetRandomPositionedFightingCharacter = F3(
	function (actualFightChar, fcharId, maxX) {
		return actualFightChar.placed ? elm$core$Platform$Cmd$none : A2(
			elm$random$Random$generate,
			author$project$GameUpdate$NewGridCoordinatesIndexToPlaceFightingCharacter(fcharId),
			A2(author$project$GameUpdate$getRandInt, 0, maxX - 1));
	});
var author$project$GameUpdate$NewRandomPointToPlacePlayer = function (a) {
	return {$: 'NewRandomPointToPlacePlayer', a: a};
};
var elm$random$Random$map2 = F3(
	function (func, _n0, _n1) {
		var genA = _n0.a;
		var genB = _n1.a;
		return elm$random$Random$Generator(
			function (seed0) {
				var _n2 = genA(seed0);
				var a = _n2.a;
				var seed1 = _n2.b;
				var _n3 = genB(seed1);
				var b = _n3.a;
				var seed2 = _n3.b;
				return _Utils_Tuple2(
					A2(func, a, b),
					seed2);
			});
	});
var elm$random$Random$pair = F2(
	function (genA, genB) {
		return A3(
			elm$random$Random$map2,
			F2(
				function (a, b) {
					return _Utils_Tuple2(a, b);
				}),
			genA,
			genB);
	});
var author$project$GameUpdate$getRandIntPair = F4(
	function (minX, maxX, minY, maxY) {
		return A2(
			elm$random$Random$pair,
			A2(elm$random$Random$int, minX, maxX),
			A2(elm$random$Random$int, minY, maxY));
	});
var author$project$GameUpdate$cmdGetRandomPositionedPlayer = F5(
	function (player, minX, maxX, minY, maxY) {
		return player.placed ? elm$core$Platform$Cmd$none : A2(
			elm$random$Random$generate,
			author$project$GameUpdate$NewRandomPointToPlacePlayer,
			A4(author$project$GameUpdate$getRandIntPair, minX, maxX, minY, maxY));
	});
var author$project$Beings$FightingCharacterInTileGrid$OpponentsAndPlayerRec = F7(
	function (fightingCharacters, player, grid, floorDict, lFightingCharactersForGameOfThorns, textMsgs, lrandInts) {
		return {fightingCharacters: fightingCharacters, floorDict: floorDict, grid: grid, lFightingCharactersForGameOfThorns: lFightingCharactersForGameOfThorns, lrandInts: lrandInts, player: player, textMsgs: textMsgs};
	});
var author$project$Beings$FightingCharacterInTileGrid$attack = F3(
	function (dude1, dude2, lprandInts) {
		var guard = ((dude1.coordination - dude2.stealth) > 100) ? (dude2.protection - (dude1.coordination - (dude2.stealth % 100))) : dude2.protection;
		var _n0 = _Utils_Tuple2(
			A2(
				elm$core$Maybe$withDefault,
				1,
				elm$core$List$head(lprandInts)),
			A2(elm$core$List$drop, 1, lprandInts));
		var roll1 = _n0.a;
		var newprandInts = _n0.b;
		var _n1 = _Utils_Tuple2(
			A2(
				elm$core$Maybe$withDefault,
				1,
				elm$core$List$head(newprandInts)),
			A2(elm$core$List$drop, 1, newprandInts));
		var roll2 = _n1.a;
		var newprandInts2 = _n1.b;
		var hit = (_Utils_cmp(roll1, dude1.coordination - dude2.stealth) > 0) ? false : true;
		var block = (hit && (_Utils_cmp(roll2, guard) < 0)) ? true : false;
		var dmg = (hit && (!block)) ? dude1.power : ((hit && block) ? A2(elm$core$Basics$max, 0, dude1.power - dude2.armor) : ((!hit) ? 0 : 0));
		var result = dude2.health - dmg;
		var msg = (!hit) ? (dude1.name + ' miss') : (dude1.name + (' hit ' + (dude2.name + (' for ' + (elm$core$String$fromInt(dmg) + ' dmg')))));
		return {
			dudeA: _Utils_update(
				dude1,
				{initiative: dude1.initiative + 100}),
			dudeB: _Utils_update(
				dude2,
				{health: result}),
			randInts: newprandInts2,
			textMsg: msg
		};
	});
var author$project$Beings$BeingsInTileGrid$characterMove_RandomMove = F5(
	function (character, player, grid, floorDict, lRandomInts) {
		var mb_relevant_grid = A2(elm$core$Dict$get, character.floorId, floorDict);
		var _n0 = _Utils_Tuple3(
			A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$List$head(lRandomInts)),
			A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$List$head(
					A2(elm$core$List$drop, 1, lRandomInts))),
			A2(elm$core$List$drop, 2, lRandomInts));
		var xrand = _n0.a;
		var yrand = _n0.b;
		var updatedRandInts = _n0.c;
		var xscaled = (xrand <= 33) ? (-1) : (((xrand > 33) && (xrand <= 66)) ? 0 : 1);
		var yscaled = (yrand <= 33) ? (-1) : (((yrand > 33) && (yrand <= 66)) ? 0 : 1);
		var updatedCharacter = function () {
			if (mb_relevant_grid.$ === 'Nothing') {
				return character;
			} else {
				var fstore = mb_relevant_grid.a;
				return A4(
					author$project$Beings$BeingsInTileGrid$move,
					_Utils_Tuple2(xscaled, yscaled),
					fstore.level,
					author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
					character);
			}
		}();
		return _Utils_Tuple2(updatedCharacter, updatedRandInts);
	});
var author$project$Beings$BeingsInTileGrid$ifOccupiedByPlayerGoBackToInitialPosition = F3(
	function (initial_char, player_location, fchar) {
		return _Utils_eq(fchar.location, player_location) ? initial_char : fchar;
	});
var author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer = F7(
	function (character, player, currentFloorId, probability, grid, floorDict, lRandomInts) {
		var player_location = player.location;
		var x_delta_toPlayer = player_location.x - character.location.x;
		var y_delta_toPlayer = player_location.y - character.location.y;
		var intProb = ((probability <= 1) && (probability >= 0)) ? elm$core$Basics$round(probability * 100.0) : 1;
		var _n0 = _Utils_Tuple3(
			A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$List$head(lRandomInts)),
			A2(
				elm$core$Maybe$withDefault,
				0,
				elm$core$List$head(
					A2(elm$core$List$drop, 1, lRandomInts))),
			A2(elm$core$List$drop, 2, lRandomInts));
		var xrand = _n0.a;
		var yrand = _n0.b;
		var updatedRandInts = _n0.c;
		var xscaled = (x_delta_toPlayer > 0) ? ((_Utils_cmp(xrand, intProb) < 1) ? 1 : (-1)) : ((x_delta_toPlayer < 0) ? ((_Utils_cmp(xrand, intProb) < 1) ? (-1) : 1) : ((xrand <= 33) ? (-1) : (((xrand > 33) && (xrand <= 66)) ? 0 : 1)));
		var yscaled = (y_delta_toPlayer > 0) ? ((_Utils_cmp(yrand, intProb) < 1) ? 1 : (-1)) : ((y_delta_toPlayer < 0) ? ((_Utils_cmp(yrand, intProb) < 1) ? (-1) : 1) : ((yrand <= 33) ? (-1) : (((yrand > 33) && (yrand <= 66)) ? 0 : 1)));
		var updatedCharacter = A3(
			author$project$Beings$BeingsInTileGrid$ifOccupiedByPlayerGoBackToInitialPosition,
			character,
			player_location,
			A4(
				author$project$Beings$BeingsInTileGrid$move,
				_Utils_Tuple2(xscaled, yscaled),
				grid,
				author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
				character));
		return _Utils_Tuple2(updatedCharacter, updatedRandInts);
	});
var author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove = F6(
	function (fightingCharacter, player, currentFloorId, grid, floorDict, lRandomInts) {
		if (!_Utils_eq(fightingCharacter.floorId, currentFloorId)) {
			return A5(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, fightingCharacter, player, grid, floorDict, lRandomInts);
		} else {
			var _n0 = fightingCharacter.movingStrategy;
			if (_n0.$ === 'Just') {
				switch (_n0.a.$) {
					case 'MoveTowardsPlayer':
						var _n1 = _n0.a;
						return A7(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, fightingCharacter, player, currentFloorId, 0.85, grid, floorDict, lRandomInts);
					case 'CustomMoveTowardsPlayerBeforeAndAfterEnl':
						var _n2 = _n0.a;
						var prob_before = _n2.a;
						var prob_after = _n2.b;
						return (_Utils_cmp(fightingCharacter.indexOfLight, fightingCharacter.indexOfLightMax) < 0) ? A7(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, fightingCharacter, player, currentFloorId, prob_before, grid, floorDict, lRandomInts) : A7(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, fightingCharacter, player, currentFloorId, prob_after, grid, floorDict, lRandomInts);
					case 'MoveRandomly':
						var _n3 = _n0.a;
						return A5(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, fightingCharacter, player, grid, floorDict, lRandomInts);
					default:
						var _n4 = _n0.a;
						return _Utils_Tuple2(fightingCharacter, lRandomInts);
				}
			} else {
				return _Utils_Tuple2(fightingCharacter, lRandomInts);
			}
		}
	});
var author$project$Beings$FightingCharacterInTileGrid$attackIfClose_OtherwiseMove = F6(
	function (fightingCharacter, player, currentFloorId, grid, floorDict, pseudoRandomIntsPool) {
		if ((!_Utils_eq(fightingCharacter.floorId, currentFloorId)) && (fightingCharacter.health > 0)) {
			var _n0 = A6(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove, fightingCharacter, player, currentFloorId, grid, floorDict, pseudoRandomIntsPool);
			var updatedFightingCharacter = _n0.a;
			var updatedRandInts = _n0.b;
			return {fightingCharacter: updatedFightingCharacter, lrandInts: updatedRandInts, mbFightingCharacterForGameOfThorns: elm$core$Maybe$Nothing, player: player, textMsg: ''};
		} else {
			var _n1 = A2(
				elm$core$List$filter,
				function (location) {
					return _Utils_eq(location, player.location);
				},
				A2(author$project$Grid$neighborhoodCalc, 1, fightingCharacter.location));
			if (_n1.b) {
				var location = _n1.a;
				var locs = _n1.b;
				if (fightingCharacter.attacksUsingGameOfThorns) {
					return {
						fightingCharacter: fightingCharacter,
						lrandInts: pseudoRandomIntsPool,
						mbFightingCharacterForGameOfThorns: elm$core$Maybe$Just(fightingCharacter),
						player: player,
						textMsg: ''
					};
				} else {
					var attackOutput = A3(author$project$Beings$FightingCharacterInTileGrid$attack, fightingCharacter, player, pseudoRandomIntsPool);
					return {fightingCharacter: attackOutput.dudeA, lrandInts: attackOutput.randInts, mbFightingCharacterForGameOfThorns: elm$core$Maybe$Nothing, player: attackOutput.dudeB, textMsg: attackOutput.textMsg};
				}
			} else {
				var _n2 = A6(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove, fightingCharacter, player, currentFloorId, grid, floorDict, pseudoRandomIntsPool);
				var updatedFightingCharacter = _n2.a;
				var updatedRandInts = _n2.b;
				return {fightingCharacter: updatedFightingCharacter, lrandInts: updatedRandInts, mbFightingCharacterForGameOfThorns: elm$core$Maybe$Nothing, player: player, textMsg: ''};
			}
		}
	});
var author$project$Beings$FightingCharacterInTileGrid$fightingCharacterExceedsNrMovesInCurrentTurn = F2(
	function (fcharId, opponentAndPlayerRec) {
		var mbFightingCharacter = A2(elm$core$Dict$get, fcharId, opponentAndPlayerRec.fightingCharacters);
		if (mbFightingCharacter.$ === 'Nothing') {
			return true;
		} else {
			var fightingCharacter = mbFightingCharacter.a;
			return _Utils_cmp(fightingCharacter.nrMovesInCurrentTurn, fightingCharacter.maxNrCharacterMovesPerTurn) > -1;
		}
	});
var author$project$Beings$FightingCharacterInTileGrid$increseNrOfFightingCharacterMovesInCurrentTurn = F2(
	function (fcharId, opponentAndPlayerRec) {
		var updatedFightingCharacters = A3(
			elm$core$Dict$update,
			fcharId,
			function (mbFightCharacter) {
				return A2(
					elm$core$Maybe$map,
					function (fchar) {
						return _Utils_update(
							fchar,
							{nrMovesInCurrentTurn: fchar.nrMovesInCurrentTurn + 1});
					},
					mbFightCharacter);
			},
			opponentAndPlayerRec.fightingCharacters);
		return _Utils_update(
			opponentAndPlayerRec,
			{fightingCharacters: updatedFightingCharacters});
	});
var author$project$Beings$FightingCharacterInTileGrid$ai_helper_func = F4(
	function (currentDisplay, currentFloorId, fcharId, opponents_and_player_rec) {
		ai_helper_func:
		while (true) {
			if (A2(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterExceedsNrMovesInCurrentTurn, fcharId, opponents_and_player_rec) || _Utils_eq(currentDisplay, author$project$GameModel$DisplayGameOfThorns)) {
				return opponents_and_player_rec;
			} else {
				var mbFightCharacter = A2(elm$core$Dict$get, fcharId, opponents_and_player_rec.fightingCharacters);
				var _n0 = function () {
					if (mbFightCharacter.$ === 'Nothing') {
						return _Utils_Tuple2(opponents_and_player_rec, elm$core$Maybe$Nothing);
					} else {
						var fightingCharacter = mbFightCharacter.a;
						if (_Utils_eq(fightingCharacter.floorId, currentFloorId) && ((_Utils_cmp(fightingCharacter.indexOfLight, fightingCharacter.indexOfLightMax) < 0) && ((opponents_and_player_rec.player.health > 0) && (!_Utils_eq(currentDisplay, author$project$GameModel$DisplayGameOfThorns))))) {
							var outRec = A6(author$project$Beings$FightingCharacterInTileGrid$attackIfClose_OtherwiseMove, fightingCharacter, opponents_and_player_rec.player, currentFloorId, opponents_and_player_rec.grid, opponents_and_player_rec.floorDict, opponents_and_player_rec.lrandInts);
							var newEnPlayerRec = function (_n3) {
								var x = _n3.a;
								var y = _n3.b;
								return _Utils_Tuple2(
									A2(author$project$Beings$FightingCharacterInTileGrid$increseNrOfFightingCharacterMovesInCurrentTurn, fcharId, x),
									y);
							}(
								_Utils_Tuple2(
									_Utils_update(
										opponents_and_player_rec,
										{
											fightingCharacters: A3(
												elm$core$Dict$update,
												fcharId,
												function (_n2) {
													return elm$core$Maybe$Just(outRec.fightingCharacter);
												},
												opponents_and_player_rec.fightingCharacters),
											lFightingCharactersForGameOfThorns: _Utils_ap(
												opponents_and_player_rec.lFightingCharactersForGameOfThorns,
												A2(
													elm$core$Maybe$withDefault,
													_List_Nil,
													A2(
														elm$core$Maybe$map,
														function (x) {
															return _List_fromArray(
																[x]);
														},
														outRec.mbFightingCharacterForGameOfThorns))),
											lrandInts: outRec.lrandInts,
											player: outRec.player,
											textMsgs: _List_Nil
										}),
									outRec.mbFightingCharacterForGameOfThorns));
							return newEnPlayerRec;
						} else {
							return _Utils_Tuple2(
								function (x) {
									return A2(author$project$Beings$FightingCharacterInTileGrid$increseNrOfFightingCharacterMovesInCurrentTurn, fcharId, x);
								}(
									function (_n4) {
										var fchar = _n4.a;
										var lrand = _n4.b;
										return _Utils_update(
											opponents_and_player_rec,
											{
												fightingCharacters: A3(
													elm$core$Dict$update,
													fcharId,
													function (_n5) {
														return elm$core$Maybe$Just(fchar);
													},
													opponents_and_player_rec.fightingCharacters),
												lrandInts: lrand
											});
									}(
										A6(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove, fightingCharacter, opponents_and_player_rec.player, currentFloorId, opponents_and_player_rec.grid, opponents_and_player_rec.floorDict, opponents_and_player_rec.lrandInts))),
								elm$core$Maybe$Nothing);
						}
					}
				}();
				var opponents_and_player_rec2 = _n0.a;
				var mbFightCharacterForGameOfThorns = _n0.b;
				if (mbFightCharacterForGameOfThorns.$ === 'Just') {
					var fchar = mbFightCharacterForGameOfThorns.a;
					return _Utils_update(
						opponents_and_player_rec2,
						{
							lFightingCharactersForGameOfThorns: _Utils_ap(
								opponents_and_player_rec.lFightingCharactersForGameOfThorns,
								_List_fromArray(
									[fchar]))
						});
				} else {
					var $temp$currentDisplay = currentDisplay,
						$temp$currentFloorId = currentFloorId,
						$temp$fcharId = fcharId,
						$temp$opponents_and_player_rec = opponents_and_player_rec2;
					currentDisplay = $temp$currentDisplay;
					currentFloorId = $temp$currentFloorId;
					fcharId = $temp$fcharId;
					opponents_and_player_rec = $temp$opponents_and_player_rec;
					continue ai_helper_func;
				}
			}
		}
	});
var author$project$Beings$FightingCharacterInTileGrid$fightingCharacter_AI = F3(
	function (currentDisplay, currentFloorId, opponentAndPlayerRec) {
		var fcIdFightCharacterPairList = elm$core$Dict$toList(
			A2(
				elm$core$Dict$filter,
				F2(
					function (fcharId, fightingCharacter) {
						return (fightingCharacter.health > 0) && (_Utils_cmp(fightingCharacter.nrMovesInCurrentTurn, fightingCharacter.maxNrCharacterMovesPerTurn) < 0);
					}),
				opponentAndPlayerRec.fightingCharacters));
		return A3(
			elm$core$List$foldl,
			F2(
				function (enpair, modelacc) {
					return A4(author$project$Beings$FightingCharacterInTileGrid$ai_helper_func, currentDisplay, currentFloorId, enpair.a, modelacc);
				}),
			opponentAndPlayerRec,
			fcIdFightCharacterPairList);
	});
var author$project$GameUpdate$fightingCharacter_AI = function (model) {
	var fightingCharactersPlayerRec = A3(
		author$project$Beings$FightingCharacterInTileGrid$fightingCharacter_AI,
		model.currentDisplay,
		model.currentFloorId,
		A7(author$project$Beings$FightingCharacterInTileGrid$OpponentsAndPlayerRec, model.fightingCharacters, model.player, model.level, model.floorDict, _List_Nil, _List_Nil, model.pseudoRandomIntsPool));
	var lfightingCharactersForGoT = fightingCharactersPlayerRec.lFightingCharactersForGameOfThorns;
	var newModel = _Utils_update(
		model,
		{fightingCharacters: fightingCharactersPlayerRec.fightingCharacters, floorDict: fightingCharactersPlayerRec.floorDict, level: fightingCharactersPlayerRec.grid, player: fightingCharactersPlayerRec.player, pseudoRandomIntsPool: fightingCharactersPlayerRec.lrandInts});
	return _Utils_Tuple2(newModel, lfightingCharactersForGoT);
};
var author$project$GameUpdate$getModelChangerFuncs = F2(
	function (leverId, model) {
		return function (x) {
			if (x.$ === 'Just') {
				var lfuncs = x.a.a;
				return lfuncs;
			} else {
				return _List_Nil;
			}
		}(
			A2(elm$core$Dict$get, leverId, model.leverModelChangerFuncs));
	});
var author$project$GameUpdate$getWallPercentage = function (gridAsList) {
	var getCountTuple = F2(
		function (elem, _n2) {
			var acc1 = _n2.a;
			var acc2 = _n2.b;
			switch (elem.$) {
				case 'Wall':
					return _Utils_Tuple2(acc1 + 1, acc2);
				case 'Floor':
					return _Utils_Tuple2(acc1, acc2 + 1);
				default:
					return _Utils_Tuple2(acc1, acc2);
			}
		});
	return function (tup) {
		return tup.a / tup.b;
	}(
		A3(
			elm$core$List$foldl,
			F2(
				function (el, _n0) {
					var ac1 = _n0.a;
					var ac2 = _n0.b;
					return A2(
						getCountTuple,
						el,
						_Utils_Tuple2(ac1, ac2));
				}),
			_Utils_Tuple2(0, 0),
			gridAsList));
};
var author$project$GameUpdate$openDoorIfPlayerStandingOnDoorAndClosed = function (model) {
	var newGrid = function () {
		var _n0 = A2(author$project$Grid$get, model.player.location, model.level);
		if ((_n0.$ === 'Just') && (_n0.a.$ === 'Door')) {
			var doorinfo = _n0.a.a;
			if (!doorinfo.isOpen) {
				var newDoorInfo = _Utils_update(
					doorinfo,
					{isOpen: true});
				return A3(
					author$project$Grid$set,
					model.player.location,
					author$project$Tile$Door(newDoorInfo),
					model.level);
			} else {
				return model.level;
			}
		} else {
			return model.level;
		}
	}();
	return _Utils_update(
		model,
		{level: newGrid});
};
var author$project$Beings$OtherCharacterInTileGrid$OthersAndPlayerRec = F6(
	function (otherCharacters, player, grid, floorDict, textMsgs, lrandInts) {
		return {floorDict: floorDict, grid: grid, lrandInts: lrandInts, otherCharacters: otherCharacters, player: player, textMsgs: textMsgs};
	});
var author$project$Beings$OtherCharacterInTileGrid$increseNrOfOtherCharacterMovesInCurrentTurn = F2(
	function (fcharId, othersAndPlayerRec) {
		var updatedOtherCharacters = A3(
			elm$core$Dict$update,
			fcharId,
			function (mbOtherCharacter) {
				return A2(
					elm$core$Maybe$map,
					function (fchar) {
						return _Utils_update(
							fchar,
							{nrMovesInCurrentTurn: fchar.nrMovesInCurrentTurn + 1});
					},
					mbOtherCharacter);
			},
			othersAndPlayerRec.otherCharacters);
		return _Utils_update(
			othersAndPlayerRec,
			{otherCharacters: updatedOtherCharacters});
	});
var author$project$Beings$OtherCharacterInTileGrid$otherCharacterExceedsNrMovesInCurrentTurn = F2(
	function (fcharId, othersAndPlayerRec) {
		var mbOtherCharacter = A2(elm$core$Dict$get, fcharId, othersAndPlayerRec.otherCharacters);
		if (mbOtherCharacter.$ === 'Nothing') {
			return true;
		} else {
			var otherCharacter = mbOtherCharacter.a;
			return _Utils_cmp(otherCharacter.nrMovesInCurrentTurn, otherCharacter.maxNrCharacterMovesPerTurn) > -1;
		}
	});
var author$project$Beings$OtherCharacterInTileGrid$otherCharacterMove = F6(
	function (otherCharacter, player, currentFloorId, grid, floorDict, lRandomInts) {
		if (!_Utils_eq(otherCharacter.floorId, currentFloorId)) {
			return A5(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, otherCharacter, player, grid, floorDict, lRandomInts);
		} else {
			var _n0 = otherCharacter.movingStrategy;
			if (_n0.$ === 'Just') {
				switch (_n0.a.$) {
					case 'MoveTowardsPlayer':
						var _n1 = _n0.a;
						return A7(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, otherCharacter, player, currentFloorId, 0.85, grid, floorDict, lRandomInts);
					case 'CustomMoveTowardsPlayerBeforeAndAfterEnl':
						var _n2 = _n0.a;
						var prob_before = _n2.a;
						var prob_after = _n2.b;
						return (_Utils_cmp(otherCharacter.indexOfLight, otherCharacter.indexOfLightMax) < 0) ? A7(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, otherCharacter, player, currentFloorId, prob_before, grid, floorDict, lRandomInts) : A7(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, otherCharacter, player, currentFloorId, prob_after, grid, floorDict, lRandomInts);
					case 'MoveRandomly':
						var _n3 = _n0.a;
						return A5(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, otherCharacter, player, grid, floorDict, lRandomInts);
					default:
						var _n4 = _n0.a;
						return _Utils_Tuple2(otherCharacter, lRandomInts);
				}
			} else {
				return _Utils_Tuple2(otherCharacter, lRandomInts);
			}
		}
	});
var author$project$Beings$OtherCharacterInTileGrid$ai_helper_func = F4(
	function (currentDisplay, currentFloorId, fcharId, opponents_and_player_rec) {
		ai_helper_func:
		while (true) {
			if (A2(author$project$Beings$OtherCharacterInTileGrid$otherCharacterExceedsNrMovesInCurrentTurn, fcharId, opponents_and_player_rec) || _Utils_eq(currentDisplay, author$project$GameModel$DisplayGameOfThorns)) {
				return opponents_and_player_rec;
			} else {
				var mbOtherCharacter = A2(elm$core$Dict$get, fcharId, opponents_and_player_rec.otherCharacters);
				var opponents_and_player_rec2 = function () {
					if (mbOtherCharacter.$ === 'Nothing') {
						return opponents_and_player_rec;
					} else {
						var otherCharacter = mbOtherCharacter.a;
						return ((otherCharacter.health > 0) && (!_Utils_eq(currentDisplay, author$project$GameModel$DisplayGameOfThorns))) ? function (x) {
							return A2(author$project$Beings$OtherCharacterInTileGrid$increseNrOfOtherCharacterMovesInCurrentTurn, fcharId, x);
						}(
							function (_n1) {
								var fchar = _n1.a;
								var lrand = _n1.b;
								return _Utils_update(
									opponents_and_player_rec,
									{
										lrandInts: lrand,
										otherCharacters: A3(
											elm$core$Dict$update,
											fcharId,
											function (_n2) {
												return elm$core$Maybe$Just(fchar);
											},
											opponents_and_player_rec.otherCharacters)
									});
							}(
								A6(author$project$Beings$OtherCharacterInTileGrid$otherCharacterMove, otherCharacter, opponents_and_player_rec.player, currentFloorId, opponents_and_player_rec.grid, opponents_and_player_rec.floorDict, opponents_and_player_rec.lrandInts))) : opponents_and_player_rec;
					}
				}();
				var $temp$currentDisplay = currentDisplay,
					$temp$currentFloorId = currentFloorId,
					$temp$fcharId = fcharId,
					$temp$opponents_and_player_rec = opponents_and_player_rec2;
				currentDisplay = $temp$currentDisplay;
				currentFloorId = $temp$currentFloorId;
				fcharId = $temp$fcharId;
				opponents_and_player_rec = $temp$opponents_and_player_rec;
				continue ai_helper_func;
			}
		}
	});
var author$project$Beings$OtherCharacterInTileGrid$otherCharacter_AI = F3(
	function (currentDisplay, currentFloorId, othersAndPlayerRec) {
		var ocharIdOtherCharacterPairList = elm$core$Dict$toList(
			A2(
				elm$core$Dict$filter,
				F2(
					function (fcharId, otherCharacter) {
						return (otherCharacter.health > 0) && (_Utils_cmp(otherCharacter.nrMovesInCurrentTurn, otherCharacter.maxNrCharacterMovesPerTurn) < 0);
					}),
				othersAndPlayerRec.otherCharacters));
		return A3(
			elm$core$List$foldl,
			F2(
				function (enpair, modelacc) {
					return A4(author$project$Beings$OtherCharacterInTileGrid$ai_helper_func, currentDisplay, currentFloorId, enpair.a, modelacc);
				}),
			othersAndPlayerRec,
			ocharIdOtherCharacterPairList);
	});
var author$project$GameUpdate$otherCharacters_AI = function (model) {
	var otherCharactersPlayerRec = A3(
		author$project$Beings$OtherCharacterInTileGrid$otherCharacter_AI,
		model.currentDisplay,
		model.currentFloorId,
		A6(author$project$Beings$OtherCharacterInTileGrid$OthersAndPlayerRec, model.otherCharacters, model.player, model.level, model.floorDict, _List_Nil, model.pseudoRandomIntsPool));
	var newModel = _Utils_update(
		model,
		{floorDict: otherCharactersPlayerRec.floorDict, level: otherCharactersPlayerRec.grid, otherCharacters: otherCharactersPlayerRec.otherCharacters, player: otherCharactersPlayerRec.player, pseudoRandomIntsPool: otherCharactersPlayerRec.lrandInts});
	return newModel;
};
var author$project$GameUpdate$position_viewport_in_order_to_center_player = function (model) {
	return author$project$GameUpdate$reveal(
		_Utils_update(
			model,
			{
				viewport_topleft_x: A2(
					elm$core$Basics$max,
					0,
					model.player.location.x - elm$core$Basics$round(model.window_width / 2.0)),
				viewport_topleft_y: A2(
					elm$core$Basics$max,
					0,
					model.player.location.y - elm$core$Basics$round(model.window_height / 2))
			}));
};
var author$project$GameUpdate$resetFightingCharacterMovesCurrentTurn = function (model) {
	var updatedFightCharacters = A2(
		elm$core$Dict$map,
		F2(
			function (fcharId, fightingCharacter) {
				return _Utils_update(
					fightingCharacter,
					{nrMovesInCurrentTurn: 0});
			}),
		model.fightingCharacters);
	return _Utils_update(
		model,
		{fightingCharacters: updatedFightCharacters});
};
var author$project$GameUpdate$resetOtherCharacterMovesCurrentTurn = function (model) {
	var updatedOtherCharacters = A2(
		elm$core$Dict$map,
		F2(
			function (ocharId, otherCharacter) {
				return _Utils_update(
					otherCharacter,
					{nrMovesInCurrentTurn: 0});
			}),
		model.otherCharacters);
	return _Utils_update(
		model,
		{otherCharacters: updatedOtherCharacters});
};
var author$project$Grid$getGridBoundsToPlacePlayer = function (grid) {
	return {maxX: grid.size.width - 1, maxY: grid.size.height - 1, minX: 1, minY: 1};
};
var author$project$Item$itemToString = function (item) {
	switch (item.$) {
		case 'Chest':
			var s = item.a;
			return 'chest_' + elm$core$String$fromInt(s);
		case 'Skull':
			return 'skull';
		case 'Key':
			var kinfo = item.a;
			return 'key_' + kinfo.keyColor;
		case 'Money':
			return 'money';
		case 'Box':
			return 'box';
		case 'Ash':
			return 'ash';
		case 'Paper':
			var paperinfo = item.a;
			return 'a piece of paper : ' + (paperinfo.description + (' , with some written text : ' + paperinfo.text));
		default:
			var fdescription = item.a;
			return 'a piece of food : ' + fdescription;
	}
};
var author$project$Grid$getWithDefault = F3(
	function (_default, coordinate, grid) {
		var _n0 = A2(author$project$Grid$get, coordinate, grid);
		if (_n0.$ === 'Nothing') {
			return _default;
		} else {
			var a = _n0.a;
			return a;
		}
	});
var author$project$MapGen$getNeighborsOrElse = F3(
	function (x, grid, coord) {
		return A2(
			elm$core$List$map,
			function (c) {
				return A3(author$project$Grid$getWithDefault, x, c, grid);
			},
			A2(author$project$Grid$neighborhoodCalc, 1, coord));
	});
var author$project$MapGen$getNeighbors = author$project$MapGen$getNeighborsOrElse(
	author$project$Tile$Wall(author$project$Tile$defaultWallInfo));
var author$project$MapGen$numberOfWalls = F2(
	function (grid, coord) {
		return elm$core$List$length(
			A2(
				elm$core$List$filter,
				function (t) {
					if (t.$ === 'Wall') {
						return true;
					} else {
						return false;
					}
				},
				A2(author$project$MapGen$getNeighbors, grid, coord)));
	});
var author$project$MapGen$iterate = function (grid) {
	var coords = author$project$Grid$toCoordinates(grid);
	var x = A2(
		elm$core$List$map,
		function (coord) {
			return _Utils_Tuple2(
				coord,
				(A2(author$project$MapGen$numberOfWalls, grid, coord) >= 5) ? author$project$Tile$Wall(author$project$Tile$defaultWallInfo) : author$project$Tile$Floor(author$project$Tile$defaultFloorInfo));
		},
		coords);
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, grid_) {
				var coord = _n0.a;
				var a = _n0.b;
				return A3(author$project$Grid$set, coord, a, grid_);
			}),
		grid,
		x);
};
var author$project$MapGen$getNeighborsOrElse2 = F3(
	function (x, grid, coord) {
		return A2(
			elm$core$List$map,
			function (c) {
				return A3(author$project$Grid$getWithDefault, x, c, grid);
			},
			A2(author$project$Grid$neighborhoodCalc, 2, coord));
	});
var author$project$MapGen$getNeighbors2 = author$project$MapGen$getNeighborsOrElse2(
	author$project$Tile$Wall(author$project$Tile$defaultWallInfo));
var author$project$MapGen$numberOfWalls2 = F2(
	function (grid, coord) {
		return elm$core$List$length(
			A2(
				elm$core$List$filter,
				function (t) {
					if (t.$ === 'Wall') {
						return true;
					} else {
						return false;
					}
				},
				A2(author$project$MapGen$getNeighbors2, grid, coord)));
	});
var author$project$MapGen$iterate2 = function (grid) {
	var rule = function (coord) {
		return (A2(author$project$MapGen$numberOfWalls, grid, coord) >= 5) ? author$project$Tile$Wall(author$project$Tile$defaultWallInfo) : ((A2(author$project$MapGen$numberOfWalls2, grid, coord) <= 2) ? author$project$Tile$Wall(author$project$Tile$defaultWallInfo) : author$project$Tile$Floor(author$project$Tile$defaultFloorInfo));
	};
	var coords = author$project$Grid$toCoordinates(grid);
	var x = A2(
		elm$core$List$map,
		function (coord) {
			return _Utils_Tuple2(
				coord,
				rule(coord));
		},
		coords);
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, grid_) {
				var coord = _n0.a;
				var a = _n0.b;
				return A3(author$project$Grid$set, coord, a, grid_);
			}),
		grid,
		x);
};
var author$project$MapGen$randomTile = function (rfloat) {
	var tile = (rfloat < 0.4) ? author$project$Tile$Wall(author$project$Tile$defaultWallInfo) : author$project$Tile$Floor(author$project$Tile$defaultFloorInfo);
	return tile;
};
var author$project$MapGen$randomMap = F2(
	function (_n0, lfloats) {
		var w = _n0.a;
		var h = _n0.b;
		var initialGrid = A2(
			author$project$Grid$initialize,
			{height: h, width: w},
			author$project$Tile$NoTileYet);
		var lcoordinates = author$project$Grid$toCoordinates(initialGrid);
		var lcoordsFloats = A3(
			elm$core$List$map2,
			F2(
				function (gcoord, rfl) {
					return _Utils_Tuple2(gcoord, rfl);
				}),
			lcoordinates,
			lfloats);
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n1, accy) {
					var gcoord = _n1.a;
					var rfl = _n1.b;
					return A3(
						author$project$Grid$set,
						gcoord,
						author$project$MapGen$randomTile(rfl),
						accy);
				}),
			initialGrid,
			lcoordsFloats);
	});
var author$project$MapGen$randomCave = F2(
	function (_n0, lfloats) {
		var w = _n0.a;
		var h = _n0.b;
		var bedrock = A2(
			author$project$MapGen$randomMap,
			_Utils_Tuple2(w, h),
			lfloats);
		return author$project$MapGen$iterate(
			author$project$MapGen$iterate(
				author$project$MapGen$iterate(
					author$project$MapGen$iterate2(
						author$project$MapGen$iterate2(
							author$project$MapGen$iterate2(
								author$project$MapGen$iterate2(bedrock)))))));
	});
var author$project$MapGen$addMbElemToList = F2(
	function (mba, la) {
		if (mba.$ === 'Nothing') {
			return la;
		} else {
			var a = mba.a;
			return A2(elm$core$List$cons, a, la);
		}
	});
var author$project$MapGen$cellBelongsToARectRegion = F2(
	function (coord, lrects) {
		var coordBelongsTorectRegion = F2(
			function (coord_, rrect) {
				return ((_Utils_cmp(coord_.x, rrect.top_left_x) > -1) && ((_Utils_cmp(coord_.x, (rrect.top_left_x + rrect.width) - 1) < 1) && ((_Utils_cmp(coord_.y, rrect.top_left_y) > -1) && (_Utils_cmp(coord_.y, (rrect.top_left_y + rrect.height) - 1) < 1)))) ? true : false;
			});
		return A3(
			elm$core$List$foldl,
			F2(
				function (roomrect, bacc) {
					return A2(coordBelongsTorectRegion, coord, roomrect) || bacc;
				}),
			false,
			lrects);
	});
var author$project$MapGen$getRectangularRegionCellCoordinates = function (rectregion) {
	var top_y = rectregion.top_left_y;
	var right_x = (rectregion.top_left_x + rectregion.width) - 1;
	var left_x = rectregion.top_left_x;
	var lx = A2(elm$core$List$range, left_x, right_x);
	var bottom_y = (rectregion.top_left_y + rectregion.height) - 1;
	var ly = A2(elm$core$List$range, top_y, bottom_y);
	return A2(
		elm$core$List$concatMap,
		function (xval) {
			return A2(
				elm$core$List$map,
				function (yval) {
					return A2(author$project$Grid$Coordinate, xval, yval);
				},
				ly);
		},
		lx);
};
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$List$minimum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$min, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$MapGen$getTunnelFromCellCoordinates = function (lcells) {
	var mbMinYval = elm$core$List$minimum(
		A2(
			elm$core$List$map,
			function (coords) {
				return coords.y;
			},
			lcells));
	var mbMinXval = elm$core$List$minimum(
		A2(
			elm$core$List$map,
			function (coords) {
				return coords.x;
			},
			lcells));
	var mbMaxYval = elm$core$List$maximum(
		A2(
			elm$core$List$map,
			function (coords) {
				return coords.y;
			},
			lcells));
	var mbMaxXval = elm$core$List$maximum(
		A2(
			elm$core$List$map,
			function (coords) {
				return coords.x;
			},
			lcells));
	var _n0 = _Utils_Tuple2(mbMinXval, mbMaxXval);
	if ((_n0.a.$ === 'Just') && (_n0.b.$ === 'Just')) {
		var minXval = _n0.a.a;
		var maxXval = _n0.b.a;
		var _n1 = _Utils_Tuple2(mbMinYval, mbMaxYval);
		if ((_n1.a.$ === 'Just') && (_n1.b.$ === 'Just')) {
			var minYval = _n1.a.a;
			var maxYval = _n1.b.a;
			return elm$core$Maybe$Just(
				A4(author$project$GameModel$TunnelRectangle, minXval, minYval, (maxXval - minXval) + 1, (maxYval - minYval) + 1));
		} else {
			return elm$core$Maybe$Nothing;
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$GameModel$getRoomCenterX = function (roomrectangle) {
	return roomrectangle.top_left_x + elm$core$Basics$round(roomrectangle.width / 2.0);
};
var author$project$GameModel$getRoomCenterY = function (roomrectangle) {
	return roomrectangle.top_left_y + elm$core$Basics$round(roomrectangle.height / 2.0);
};
var author$project$GameModel$getRoomRightX = function (roomrectangle) {
	return (roomrectangle.top_left_x + roomrectangle.width) - 1;
};
var author$project$MapGen$mbCreateHorizontalTunnel = F2(
	function (roomrect1, roomrect2) {
		var v_height = 2;
		var horizontal_tunnel_height = 2;
		var _n0 = (_Utils_cmp(
			author$project$GameModel$getRoomRightX(roomrect1),
			author$project$GameModel$getRoomCenterX(roomrect2)) < 0) ? _Utils_Tuple2(
			author$project$GameModel$getRoomRightX(roomrect1) + 1,
			(author$project$GameModel$getRoomCenterX(roomrect2) - author$project$GameModel$getRoomRightX(roomrect1)) + (v_height - 1)) : ((_Utils_cmp(
			roomrect1.top_left_x,
			author$project$GameModel$getRoomCenterX(roomrect2)) > 0) ? _Utils_Tuple2(
			author$project$GameModel$getRoomCenterX(roomrect2),
			roomrect1.top_left_x - author$project$GameModel$getRoomCenterX(roomrect2)) : _Utils_Tuple2(
			author$project$GameModel$getRoomCenterX(roomrect1),
			0));
		var start_x = _n0.a;
		var tunnel_length = _n0.b;
		return (tunnel_length > 0) ? elm$core$Maybe$Just(
			A4(
				author$project$GameModel$TunnelRectangle,
				start_x,
				author$project$GameModel$getRoomCenterY(roomrect1),
				tunnel_length,
				horizontal_tunnel_height)) : elm$core$Maybe$Nothing;
	});
var author$project$GameModel$getRoomBottomY = function (roomrectangle) {
	return (roomrectangle.top_left_y + roomrectangle.height) - 1;
};
var author$project$GameModel$getRoomTopY = function (roomrectangle) {
	return roomrectangle.top_left_y;
};
var author$project$MapGen$mbCreateVerticalTunnel = F2(
	function (roomrect1, roomrect2) {
		var vertical_tunnel_width = 2;
		var _n0 = (_Utils_cmp(
			author$project$GameModel$getRoomBottomY(roomrect1),
			author$project$GameModel$getRoomCenterY(roomrect2)) < 0) ? _Utils_Tuple2(
			author$project$GameModel$getRoomBottomY(roomrect1) + 1,
			author$project$GameModel$getRoomCenterY(roomrect2) - author$project$GameModel$getRoomBottomY(roomrect1)) : ((_Utils_cmp(
			author$project$GameModel$getRoomTopY(roomrect1),
			author$project$GameModel$getRoomCenterY(roomrect2)) > 0) ? _Utils_Tuple2(
			author$project$GameModel$getRoomCenterY(roomrect2),
			author$project$GameModel$getRoomTopY(roomrect1) - author$project$GameModel$getRoomCenterY(roomrect2)) : _Utils_Tuple2(
			author$project$GameModel$getRoomCenterY(roomrect1),
			0));
		var start_y = _n0.a;
		var tunnel_height = _n0.b;
		return (tunnel_height > 0) ? elm$core$Maybe$Just(
			A4(
				author$project$GameModel$TunnelRectangle,
				author$project$GameModel$getRoomCenterX(roomrect1),
				start_y,
				vertical_tunnel_width,
				tunnel_height)) : elm$core$Maybe$Nothing;
	});
var author$project$MapGen$createHorizontalAndVerticalTunnels = F3(
	function (lrandomints, lroomrectangles, grid) {
		var tup_ltunnels_lrandints = _Utils_Tuple2(_List_Nil, lrandomints);
		var lrooms2 = A2(elm$core$List$drop, 1, lroomrectangles);
		var ltupleRooms = A3(
			elm$core$List$map2,
			F2(
				function (rr1, rr2) {
					return _Utils_Tuple2(rr1, rr2);
				}),
			lroomrectangles,
			lrooms2);
		var createTunnels = F3(
			function (roomrect1, roomrect2, tupacc) {
				var mbFilteredTunnel = function (mbnewTunnel) {
					return author$project$MapGen$getTunnelFromCellCoordinates(
						A2(
							elm$core$List$filter,
							function (coords) {
								return !A2(
									author$project$MapGen$cellBelongsToARectRegion,
									coords,
									_List_fromArray(
										[roomrect1, roomrect2]));
							},
							A2(
								elm$core$Maybe$withDefault,
								_List_Nil,
								A2(elm$core$Maybe$map, author$project$MapGen$getRectangularRegionCellCoordinates, mbnewTunnel))));
				};
				var _n2 = tupacc;
				var ltunnels = _n2.a;
				var lrints = _n2.b;
				var newRandom = A2(
					elm$core$Maybe$withDefault,
					1,
					elm$core$List$head(lrints));
				var _n3 = (newRandom < 50) ? _Utils_Tuple2(
					mbFilteredTunnel(
						A2(author$project$MapGen$mbCreateHorizontalTunnel, roomrect1, roomrect2)),
					mbFilteredTunnel(
						A2(author$project$MapGen$mbCreateVerticalTunnel, roomrect2, roomrect1))) : _Utils_Tuple2(
					mbFilteredTunnel(
						A2(author$project$MapGen$mbCreateVerticalTunnel, roomrect1, roomrect2)),
					mbFilteredTunnel(
						A2(author$project$MapGen$mbCreateHorizontalTunnel, roomrect2, roomrect1)));
				var mbnewTunnel1 = _n3.a;
				var mbnewTunnel2 = _n3.b;
				var new_ltunnels = A2(
					author$project$MapGen$addMbElemToList,
					mbnewTunnel1,
					A2(author$project$MapGen$addMbElemToList, mbnewTunnel2, ltunnels));
				return _Utils_Tuple2(
					new_ltunnels,
					A2(elm$core$List$drop, 1, lrints));
			});
		var _n0 = A3(
			elm$core$List$foldl,
			F2(
				function (_n1, tupacc) {
					var r1 = _n1.a;
					var r2 = _n1.b;
					return A3(createTunnels, r1, r2, tupacc);
				}),
			tup_ltunnels_lrandints,
			ltupleRooms);
		var ltunnels_ = _n0.a;
		var lrandints = _n0.b;
		var newGrid = A2(author$project$MapGen$listTunnelRectangleToGridFunc, ltunnels_, grid);
		return _Utils_Tuple3(newGrid, ltunnels_, lrandints);
	});
var author$project$MapGen$getRandomIntBetweenValues = F3(
	function (minVal, maxVal, lrandomInts) {
		var randInt1To100 = A2(
			elm$core$Maybe$withDefault,
			1,
			elm$core$List$head(lrandomInts));
		var randInt = minVal + elm$core$Basics$round(((randInt1To100 - 1) / 100.0) * ((maxVal - minVal) + 1));
		return _Utils_Tuple2(
			randInt,
			A2(elm$core$List$drop, 1, lrandomInts));
	});
var author$project$MapGen$randomRoomGenerator = F5(
	function (totalwidth, totalheight, roomMaxSize, roomMinSize, _n0) {
		var lroomrectangles = _n0.a;
		var lrandomInts = _n0.b;
		var roomCheckIntersectsFunc = F2(
			function (room1rectangle, room2rectangle) {
				var rect2_TopY = room2rectangle.top_left_y;
				var rect2_RightX = room2rectangle.top_left_x + room2rectangle.width;
				var rect2_LeftX = room2rectangle.top_left_x;
				var rect2_BottomY = room2rectangle.top_left_y + room2rectangle.height;
				var rect1_TopY = room1rectangle.top_left_y;
				var rect1_RightX = room1rectangle.top_left_x + room1rectangle.width;
				var rect1_LeftX = room1rectangle.top_left_x;
				var rect1_BottomY = room1rectangle.top_left_y + room1rectangle.height;
				return (((_Utils_cmp(rect1_RightX, rect2_LeftX) < 0) || (_Utils_cmp(rect1_LeftX, rect2_RightX) > 0)) || ((_Utils_cmp(rect1_TopY, rect2_BottomY) > 0) || (_Utils_cmp(rect1_BottomY, rect2_TopY) < 0))) ? false : true;
			});
		var roomCheckIntersectsListRoomFunc = F2(
			function (room1rectangle, lroomrectangles_) {
				return A3(
					elm$core$List$foldl,
					F2(
						function (rrect, boolacc) {
							return A2(roomCheckIntersectsFunc, room1rectangle, rrect) ? true : boolacc;
						}),
					false,
					lroomrectangles_);
			});
		var _n1 = A3(author$project$MapGen$getRandomIntBetweenValues, roomMinSize, roomMaxSize, lrandomInts);
		var roomWidth = _n1.a;
		var lrandIntsAfterWidth = _n1.b;
		var _n2 = A3(author$project$MapGen$getRandomIntBetweenValues, roomMinSize, roomMaxSize, lrandIntsAfterWidth);
		var roomHeight = _n2.a;
		var lrandIntsAfterWidthHeight = _n2.b;
		var _n3 = A3(author$project$MapGen$getRandomIntBetweenValues, 0, (totalwidth - roomWidth) - 1, lrandIntsAfterWidthHeight);
		var room_topLeft_X = _n3.a;
		var lrandIntsAfterX = _n3.b;
		var _n4 = A3(author$project$MapGen$getRandomIntBetweenValues, 0, (totalheight - roomHeight) - 1, lrandIntsAfterX);
		var room_topLeft_Y = _n4.a;
		var lrandIntsAfterXandY = _n4.b;
		var newRoom = A4(author$project$GameModel$RoomRectangle, room_topLeft_X, room_topLeft_Y, roomWidth, roomHeight);
		return A2(roomCheckIntersectsListRoomFunc, newRoom, lroomrectangles) ? _Utils_Tuple2(lroomrectangles, lrandIntsAfterXandY) : _Utils_Tuple2(
			A2(elm$core$List$cons, newRoom, lroomrectangles),
			lrandIntsAfterXandY);
	});
var author$project$MapGen$randomMapRoomRectanglesGenerator = F6(
	function (totalwidth, totalheight, maxRooms, roomMaxSize, roomMinSize, lrandomInts) {
		var lroomrectanglesRandInts = _Utils_Tuple2(_List_Nil, lrandomInts);
		var lroomnrs = A2(elm$core$List$range, 1, maxRooms);
		var new_lroomrectanglesRandInts = A3(
			elm$core$List$foldl,
			F2(
				function (roomnr, tupAcc) {
					return A5(author$project$MapGen$randomRoomGenerator, totalwidth, totalheight, roomMaxSize, roomMinSize, tupAcc);
				}),
			lroomrectanglesRandInts,
			lroomnrs);
		return new_lroomrectanglesRandInts;
	});
var author$project$MapGen$randomMapGeneratorWithRooms = F7(
	function (totalwidth, totalheight, maxRooms, roomMaxSize, roomMinSize, lrandomInts, grid) {
		var _n0 = A6(author$project$MapGen$randomMapRoomRectanglesGenerator, totalwidth, totalheight, maxRooms, roomMaxSize, roomMinSize, lrandomInts);
		var lroomrectangles = _n0.a;
		var unused_lrandomints = _n0.b;
		var _n1 = A3(
			author$project$MapGen$createHorizontalAndVerticalTunnels,
			unused_lrandomints,
			lroomrectangles,
			A2(author$project$MapGen$listRoomRectangleToGridFunc, lroomrectangles, grid));
		var newGrid = _n1.a;
		var ltunnelrectangles = _n1.b;
		var lunusedrandints = _n1.c;
		var newnewgrid = author$project$MapGen$correctSomeWallCorners(
			author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
				A2(
					author$project$MapGen$createWallBoundaries,
					_Utils_ap(ltunnelrectangles, lroomrectangles),
					newGrid)));
		return {lroomRectangles: lroomrectangles, ltunnelRectangles: ltunnelrectangles, tileGrid: newnewgrid, unusedRandoms: lunusedrandints};
	});
var author$project$Thorns$Types$SetOpponentAndPlayerAndInitializeGrid = F2(
	function (a, b) {
		return {$: 'SetOpponentAndPlayerAndInitializeGrid', a: a, b: b};
	});
var author$project$Thorns$Types$NewRandomIntsAddToPool = function (a) {
	return {$: 'NewRandomIntsAddToPool', a: a};
};
var author$project$Thorns$Types$NewRandomIntsAddToPoolAndInitializeGrid = function (a) {
	return {$: 'NewRandomIntsAddToPoolAndInitializeGrid', a: a};
};
var author$project$Thorns$Update$cmdFillRandomIntsPool = F2(
	function (doInitializeGrid, model) {
		var nrToAdd = 500 - elm$core$List$length(model.pseudoRandomIntsPool);
		return (nrToAdd > 0) ? (doInitializeGrid ? A2(
			elm$random$Random$generate,
			author$project$Thorns$Types$NewRandomIntsAddToPoolAndInitializeGrid,
			A2(
				elm$random$Random$list,
				nrToAdd,
				A2(elm$random$Random$int, 1, 100))) : A2(
			elm$random$Random$generate,
			author$project$Thorns$Types$NewRandomIntsAddToPool,
			A2(
				elm$random$Random$list,
				nrToAdd,
				A2(elm$random$Random$int, 1, 100)))) : elm$core$Platform$Cmd$none;
	});
var author$project$Thorns$OpponentInteraction$activate = F3(
	function (coords, mbSegment, grid) {
		var mb_thorn_opt = A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			A2(author$project$Grid$get, coords, grid));
		var _n0 = function () {
			if (mbSegment.$ === 'Nothing') {
				return _Utils_Tuple2(grid, elm$core$Maybe$Nothing);
			} else {
				var lcoords = mbSegment.a;
				if (elm$core$List$length(lcoords) < 2) {
					return _Utils_Tuple2(grid, elm$core$Maybe$Nothing);
				} else {
					var power_value = elm$core$List$length(lcoords);
					var newGrid = A3(
						elm$core$List$foldl,
						F2(
							function (coord, gridacc) {
								return A3(author$project$Grid$set, coord, elm$core$Maybe$Nothing, gridacc);
							}),
						grid,
						lcoords);
					return _Utils_Tuple2(
						newGrid,
						elm$core$Maybe$Just(power_value));
				}
			}
		}();
		var outGrid = _n0.a;
		var mb_power = _n0.b;
		return _Utils_Tuple3(outGrid, mb_thorn_opt, mb_power);
	});
var author$project$Beings$Beings$COMMON_ATTACK = {$: 'COMMON_ATTACK'};
var author$project$Beings$Beings$ENLIGHTENMENT_SPELL = {$: 'ENLIGHTENMENT_SPELL'};
var author$project$Beings$Beings$OPPONENT_COMMON_ATTACK = {$: 'OPPONENT_COMMON_ATTACK'};
var author$project$Beings$Beings$OPPONENT_ENLIGHTENMENT_SPELL = {$: 'OPPONENT_ENLIGHTENMENT_SPELL'};
var author$project$Thorns$OpponentInteraction$get_attack_value = F2(
	function (attacker, opt) {
		var modifier = 0;
		return attacker.power + modifier;
	});
var author$project$Thorns$OpponentInteraction$get_defense_value = F2(
	function (defender, opt) {
		var modifier = 0;
		return (defender.protection + defender.armor) + modifier;
	});
var author$project$Thorns$OpponentInteraction$calcOpponentStatsAfterInteraction = F4(
	function (intervenient1, intervenient2, power, opp_interaction_chosen_option) {
		var get_defender_after_attack = F4(
			function (attacker_, defender_, power_, opp_interaction_chosen_option_) {
				var txt_msg = '';
				var defense_power_value = A2(author$project$Thorns$OpponentInteraction$get_defense_value, defender_, opp_interaction_chosen_option_);
				var attack_power_value = power_ + A2(author$project$Thorns$OpponentInteraction$get_attack_value, attacker_, opp_interaction_chosen_option_);
				var variation = function (x) {
					return A2(elm$core$Basics$max, 1, x);
				}(attack_power_value - defense_power_value);
				var _n6 = function () {
					if (_Utils_eq(opp_interaction_chosen_option_, author$project$Beings$Beings$ENLIGHTENMENT_SPELL) || _Utils_eq(opp_interaction_chosen_option_, author$project$Beings$Beings$OPPONENT_ENLIGHTENMENT_SPELL)) {
						var _n7 = attacker_.enlSpellEffect;
						switch (_n7.$) {
							case 'DecreaseHealth':
								return _Utils_Tuple2(
									A2(elm$core$Basics$max, 0, defender_.health - variation),
									defender_.indexOfLight);
							case 'IncreaseIndexOfLight':
								return _Utils_Tuple2(
									defender_.health,
									A2(elm$core$Basics$min, defender_.indexOfLight + variation, defender_.indexOfLightMax));
							default:
								return _Utils_Tuple2(
									defender_.health,
									A2(elm$core$Basics$max, 0, defender_.indexOfLight - variation));
						}
					} else {
						return _Utils_Tuple2(
							A2(elm$core$Basics$max, 0, defender_.health - variation),
							defender_.indexOfLight);
					}
				}();
				var defender_hp_after_attack = _n6.a;
				var defender_index_of_light_after_attack = _n6.b;
				var new_defender = _Utils_update(
					defender_,
					{health: defender_hp_after_attack, indexOfLight: defender_index_of_light_after_attack});
				return _Utils_Tuple2(new_defender, txt_msg);
			});
		var _n0 = function () {
			switch (opp_interaction_chosen_option.$) {
				case 'COMMON_ATTACK':
					var _n2 = A4(get_defender_after_attack, intervenient1, intervenient2, power, author$project$Beings$Beings$COMMON_ATTACK);
					var def = _n2.a;
					var txtm = _n2.b;
					return _Utils_Tuple3(
						intervenient1,
						def,
						'you initiate an attack . power of the attack is : ' + (elm$core$String$fromInt(power) + (' , ' + txtm)));
				case 'ENLIGHTENMENT_SPELL':
					if (_Utils_cmp(intervenient1.mana, power) > 0) {
						var _n3 = A4(get_defender_after_attack, intervenient1, intervenient2, power, author$project$Beings$Beings$ENLIGHTENMENT_SPELL);
						var def = _n3.a;
						var txtm = _n3.b;
						return _Utils_Tuple3(
							_Utils_update(
								intervenient1,
								{mana: intervenient1.mana - power}),
							def,
							'you enlighten your opponent with a light power of  : ' + (elm$core$String$fromInt(power) + (' , ' + txtm)));
					} else {
						return _Utils_Tuple3(intervenient1, intervenient2, '');
					}
				case 'OPPONENT_COMMON_ATTACK':
					var _n4 = A4(get_defender_after_attack, intervenient2, intervenient1, power, author$project$Beings$Beings$OPPONENT_COMMON_ATTACK);
					var def = _n4.a;
					var txtm = _n4.b;
					return _Utils_Tuple3(
						def,
						intervenient2,
						'your opponent initiates a fight with you . power of the attack is : ' + (elm$core$String$fromInt(power) + (' , ' + txtm)));
				default:
					if (_Utils_cmp(intervenient2.mana, power) < 0) {
						return _Utils_Tuple3(intervenient1, intervenient2, '');
					} else {
						var _n5 = A4(get_defender_after_attack, intervenient2, intervenient1, power, author$project$Beings$Beings$OPPONENT_ENLIGHTENMENT_SPELL);
						var def = _n5.a;
						var txtm = _n5.b;
						return _Utils_Tuple3(
							def,
							_Utils_update(
								intervenient2,
								{mana: intervenient2.mana - power}),
							'your opponent tries to enlighten you with a light power of : ' + (elm$core$String$fromInt(power) + (' , ' + txtm)));
					}
			}
		}();
		var intervenient1_f = _n0.a;
		var intervenient2_f = _n0.b;
		var ftxt_msg = _n0.c;
		return _Utils_Tuple3(intervenient1_f, intervenient2_f, ftxt_msg);
	});
var author$project$Thorns$OpponentInteraction$do_activate_and_calc_opponents = F5(
	function (coords, mbSegment, grid, player, opponent) {
		var _n0 = A3(author$project$Thorns$OpponentInteraction$activate, coords, mbSegment, grid);
		var finalGrid = _n0.a;
		var mb_opt = _n0.b;
		var mb_attack_power = _n0.c;
		var _n1 = function () {
			if (mb_attack_power.$ === 'Nothing') {
				return _Utils_Tuple3(player, opponent, '');
			} else {
				var val = mb_attack_power.a;
				if (mb_opt.$ === 'Just') {
					var opt = mb_opt.a;
					return A4(author$project$Thorns$OpponentInteraction$calcOpponentStatsAfterInteraction, player, opponent, val, opt);
				} else {
					return _Utils_Tuple3(player, opponent, '');
				}
			}
		}();
		var newPlayer = _n1.a;
		var newOpponent = _n1.b;
		var txtmsg = _n1.c;
		return {grid: finalGrid, opponent: newOpponent, player: newPlayer, txtmsg: txtmsg};
	});
var author$project$Thorns$ThornGrid$extractSegment = F2(
	function (coords_, grid_) {
		var mbValAtCoords = A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			A2(author$project$Grid$get, coords_, grid_));
		var auxFuncExtract = F2(
			function (coords, _n0) {
				var lextracted = _n0.a;
				var grid = _n0.b;
				if ((coords.x < 0) || ((coords.y < 0) || ((_Utils_cmp(coords.x, grid.size.width) > -1) || ((_Utils_cmp(coords.y, grid.size.height) > -1) || A2(elm$core$List$member, coords, lextracted))))) {
					return _Utils_Tuple2(lextracted, grid);
				} else {
					var _n1 = A2(author$project$Grid$get, coords, grid);
					if (_n1.$ === 'Nothing') {
						return _Utils_Tuple2(lextracted, grid);
					} else {
						var mbval = _n1.a;
						return (_Utils_eq(mbval, elm$core$Maybe$Nothing) || (!_Utils_eq(mbval, mbValAtCoords))) ? _Utils_Tuple2(lextracted, grid) : A2(
							auxFuncExtract,
							A2(author$project$Grid$Coordinate, coords.x, coords.y - 1),
							A2(
								auxFuncExtract,
								A2(author$project$Grid$Coordinate, coords.x, coords.y + 1),
								A2(
									auxFuncExtract,
									A2(author$project$Grid$Coordinate, coords.x - 1, coords.y),
									A2(
										auxFuncExtract,
										A2(author$project$Grid$Coordinate, coords.x + 1, coords.y),
										_Utils_Tuple2(
											_Utils_ap(
												lextracted,
												_List_fromArray(
													[coords])),
											A3(author$project$Grid$set, coords, elm$core$Maybe$Nothing, grid))))));
					}
				}
			});
		return A2(
			auxFuncExtract,
			coords_,
			_Utils_Tuple2(_List_Nil, grid_));
	});
var author$project$Thorns$ThornGrid$listSegmentComparison = F2(
	function (l1, l2) {
		return (_Utils_cmp(
			elm$core$List$length(l1),
			elm$core$List$length(l2)) > 0) ? elm$core$Basics$LT : ((_Utils_cmp(
			elm$core$List$length(l1),
			elm$core$List$length(l2)) < 0) ? elm$core$Basics$GT : elm$core$Basics$EQ);
	});
var elm$core$List$sortWith = _List_sortWith;
var author$project$Thorns$ThornGrid$getAllSegments = function (grid) {
	var lcoords = author$project$Grid$toCoordinates(grid);
	return A2(
		elm$core$List$sortWith,
		author$project$Thorns$ThornGrid$listSegmentComparison,
		A2(
			elm$core$List$map,
			function (coords) {
				return A2(author$project$Thorns$ThornGrid$extractSegment, coords, grid).a;
			},
			lcoords));
};
var author$project$Thorns$OpponentInteraction$getItemCombatOption = function (item) {
	return author$project$Beings$Beings$ENLIGHTENMENT_SPELL;
};
var author$project$Thorns$OpponentInteraction$get_interaction_options = F2(
	function (lrandints, player) {
		var lopt = _List_fromArray(
			[author$project$Beings$Beings$COMMON_ATTACK, author$project$Beings$Beings$OPPONENT_COMMON_ATTACK, author$project$Beings$Beings$COMMON_ATTACK, author$project$Beings$Beings$OPPONENT_COMMON_ATTACK, author$project$Beings$Beings$COMMON_ATTACK, author$project$Beings$Beings$OPPONENT_COMMON_ATTACK, author$project$Beings$Beings$ENLIGHTENMENT_SPELL, author$project$Beings$Beings$OPPONENT_ENLIGHTENMENT_SPELL, author$project$Beings$Beings$ENLIGHTENMENT_SPELL, author$project$Beings$Beings$OPPONENT_ENLIGHTENMENT_SPELL]);
		var litems = elm$core$Dict$values(player.inventory);
		var chooseFrom = A3(
			elm$core$List$foldl,
			F2(
				function (item, lacc) {
					return A2(
						elm$core$List$cons,
						author$project$Thorns$OpponentInteraction$getItemCombatOption(item),
						lacc);
				}),
			lopt,
			litems);
		var indexNr = function (x) {
			return x - 1;
		}(
			A2(
				elm$core$Maybe$withDefault,
				1,
				A2(
					elm$core$Maybe$map,
					function (x) {
						return elm$core$Basics$ceiling(
							(x * elm$core$List$length(chooseFrom)) / 100.0);
					},
					elm$core$List$head(lrandints))));
		return _Utils_Tuple2(
			elm$core$List$head(
				A2(elm$core$List$drop, indexNr, chooseFrom)),
			A2(elm$core$List$drop, 1, lrandints));
	});
var author$project$Thorns$ThornGrid$randomizeGrid = F3(
	function (grid, lrandints, player) {
		var updateGridAndRandInts = F4(
			function (coord_, grid_, lrands, player_) {
				var _n2 = A2(author$project$Thorns$OpponentInteraction$get_interaction_options, lrands, player_);
				var val = _n2.a;
				var newl = _n2.b;
				return _Utils_Tuple2(
					A3(author$project$Grid$set, coord_, val, grid_),
					newl);
			});
		var lcoords = author$project$Grid$toCoordinates(grid);
		var _n0 = A3(
			elm$core$List$foldl,
			F2(
				function (coord, _n1) {
					var gridacc = _n1.a;
					var lrandintsacc = _n1.b;
					return A4(updateGridAndRandInts, coord, gridacc, lrandintsacc, player);
				}),
			_Utils_Tuple2(grid, lrandints),
			lcoords);
		var newGrid = _n0.a;
		var newlrandints = _n0.b;
		return _Utils_Tuple2(newGrid, newlrandints);
	});
var author$project$Thorns$ThornGrid$checkSegments = F2(
	function (player, gridRandIntsTuple) {
		var _n0 = gridRandIntsTuple;
		var grid = _n0.a;
		var lrandints = _n0.b;
		var segments = author$project$Thorns$ThornGrid$getAllSegments(grid);
		var len = elm$core$List$length(
			A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				elm$core$List$head(segments)));
		return (len >= 2) ? _Utils_Tuple2(grid, lrandints) : A3(author$project$Thorns$ThornGrid$randomizeGrid, grid, lrandints, player);
	});
var author$project$Grid$getColumnWithDefault = F3(
	function (n, a_val, grid) {
		return (n < 0) ? _List_Nil : ((_Utils_cmp(n, grid.size.width) > -1) ? _List_Nil : A2(
			elm$core$List$map,
			function (coord) {
				return A2(
					elm$core$Maybe$withDefault,
					a_val,
					A2(author$project$Grid$get, coord, grid));
			},
			A2(
				elm$core$List$map,
				function (rownr) {
					return A2(author$project$Grid$Coordinate, n, rownr);
				},
				A2(elm$core$List$range, 0, grid.size.height - 1))));
	});
var author$project$Grid$getElemWithDefault = F3(
	function (y, aval, lelems) {
		return A2(
			elm$core$Maybe$withDefault,
			aval,
			elm$core$List$head(
				A2(elm$core$List$drop, y, lelems)));
	});
var author$project$Grid$setColumn = F4(
	function (n, adef, lelems, grid) {
		return (!_Utils_eq(
			elm$core$List$length(lelems),
			grid.size.height)) ? grid : A3(
			elm$core$List$foldl,
			F2(
				function (coords, gridacc) {
					return A3(
						author$project$Grid$set,
						coords,
						A3(author$project$Grid$getElemWithDefault, coords.y, adef, lelems),
						gridacc);
				}),
			grid,
			A2(
				elm$core$List$filter,
				function (coords) {
					return _Utils_eq(coords.x, n);
				},
				author$project$Grid$toCoordinates(grid)));
	});
var author$project$Thorns$ThornGrid$getThornFromRandomValue = F2(
	function (lrand, player) {
		return A2(author$project$Thorns$OpponentInteraction$get_interaction_options, lrand, player);
	});
var author$project$Thorns$ThornGrid$fallColumn = F3(
	function (lrands, player, lmbthorns) {
		var getNewl = function (_n0) {
			getNewl:
			while (true) {
				var oldl = _n0.a;
				var lrand = _n0.b;
				if (_Utils_cmp(
					elm$core$List$length(oldl),
					elm$core$List$length(lmbthorns)) < 0) {
					var _n1 = A2(author$project$Thorns$ThornGrid$getThornFromRandomValue, lrand, player);
					var addValue = _n1.a;
					var lrandremain = _n1.b;
					var addValue_ = A2(elm$core$Maybe$withDefault, author$project$Beings$Beings$ENLIGHTENMENT_SPELL, addValue);
					var $temp$_n0 = _Utils_Tuple2(
						_Utils_ap(
							_List_fromArray(
								[
									elm$core$Maybe$Just(addValue_)
								]),
							oldl),
						lrandremain);
					_n0 = $temp$_n0;
					continue getNewl;
				} else {
					return _Utils_Tuple2(oldl, lrand);
				}
			}
		};
		var filteredl = A2(
			elm$core$List$filter,
			function (mbv) {
				return !_Utils_eq(mbv, elm$core$Maybe$Nothing);
			},
			lmbthorns);
		return getNewl(
			_Utils_Tuple2(filteredl, lrands));
	});
var author$project$Thorns$ThornGrid$fall = F2(
	function (_n0, player) {
		var grid = _n0.a;
		var lrandval = _n0.b;
		var l_column_numbers = A2(elm$core$List$range, 0, grid.size.width - 1);
		var getFallColumnNrAndSet = F2(
			function (cnr, _n3) {
				var gridacc = _n3.a;
				var lrandacc = _n3.b;
				var _n2 = A3(
					author$project$Thorns$ThornGrid$fallColumn,
					lrandacc,
					player,
					A3(author$project$Grid$getColumnWithDefault, cnr, elm$core$Maybe$Nothing, gridacc));
				var theColumn = _n2.a;
				var lrandValsLeft = _n2.b;
				return _Utils_Tuple2(
					A4(author$project$Grid$setColumn, cnr, elm$core$Maybe$Nothing, theColumn, gridacc),
					lrandValsLeft);
			});
		return A3(
			elm$core$List$foldl,
			F2(
				function (cnr, _n1) {
					var gridacc = _n1.a;
					var lrandacc = _n1.b;
					return A2(
						getFallColumnNrAndSet,
						cnr,
						_Utils_Tuple2(gridacc, lrandacc));
				}),
			_Utils_Tuple2(grid, lrandval),
			l_column_numbers);
	});
var author$project$Thorns$ThornGrid$findSegment = F2(
	function (coords, grid) {
		return elm$core$List$head(
			A2(
				elm$core$List$filter,
				function (lcoords) {
					return A2(elm$core$List$member, coords, lcoords);
				},
				author$project$Thorns$ThornGrid$getAllSegments(grid)));
	});
var author$project$Thorns$Types$InitializeGrid = {$: 'InitializeGrid'};
var author$project$Thorns$Update$thornToHelpStr = F2(
	function (mbthorn, segmentLength) {
		if (segmentLength < 2) {
			return elm$core$Maybe$Nothing;
		} else {
			if (mbthorn.$ === 'Just') {
				switch (mbthorn.a.$) {
					case 'COMMON_ATTACK':
						var _n1 = mbthorn.a;
						return elm$core$Maybe$Just(
							'click for a common attack (power of ' + (elm$core$String$fromInt(segmentLength) + ')'));
					case 'ENLIGHTENMENT_SPELL':
						var _n2 = mbthorn.a;
						return elm$core$Maybe$Just(
							'click to throw an enlightenment spell (power of ' + (elm$core$String$fromInt(segmentLength) + ')'));
					case 'OPPONENT_COMMON_ATTACK':
						var _n3 = mbthorn.a;
						return elm$core$Maybe$Just(
							'click for your opponent  common attack (power of ' + (elm$core$String$fromInt(segmentLength) + ')'));
					default:
						var _n4 = mbthorn.a;
						return elm$core$Maybe$Just(
							'click for your opponent to throw an enlightenment spell (power of ' + (elm$core$String$fromInt(segmentLength) + ')'));
				}
			} else {
				return elm$core$Maybe$Nothing;
			}
		}
	});
var author$project$Thorns$Update$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'Noop':
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 'NewRandomIntsAddToPool':
				var lints = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							pseudoRandomIntsPool: _Utils_ap(model.pseudoRandomIntsPool, lints)
						}),
					elm$core$Platform$Cmd$none);
			case 'NewRandomIntsAddToPoolAndInitializeGrid':
				var lints = msg.a;
				return A2(
					author$project$Thorns$Update$update,
					author$project$Thorns$Types$InitializeGrid,
					_Utils_update(
						model,
						{
							pseudoRandomIntsPool: _Utils_ap(model.pseudoRandomIntsPool, lints)
						}));
			case 'SetOpponent':
				var opponent = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							interactionHasFinished: false,
							opponent: elm$core$Maybe$Just(
								author$project$Thorns$Types$FightingCharacter(opponent))
						}),
					elm$core$Platform$Cmd$none);
			case 'SetOpponentAndPlayerAndInitializeGrid':
				var opponent = msg.a;
				var player = msg.b;
				return A2(
					author$project$Thorns$Update$update,
					author$project$Thorns$Types$InitializeGrid,
					_Utils_update(
						model,
						{
							interactionHasFinished: false,
							opponent: elm$core$Maybe$Just(
								author$project$Thorns$Types$FightingCharacter(opponent)),
							player: player
						}));
			case 'MouseOver':
				var rownr = msg.a;
				var colnr = msg.b;
				var thorn = A2(
					elm$core$Maybe$withDefault,
					elm$core$Maybe$Nothing,
					A2(
						author$project$Grid$get,
						A2(author$project$Grid$Coordinate, colnr, rownr),
						model.gridInteractionOptions));
				var rowColStr = elm$core$String$fromInt(rownr) + (' , ' + elm$core$String$fromInt(colnr));
				var currentSegment = A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						author$project$Thorns$ThornGrid$findSegment,
						A2(author$project$Grid$Coordinate, colnr, rownr),
						model.gridInteractionOptions));
				var segmentLength = elm$core$List$length(currentSegment);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							currentSegment: currentSegment,
							helpStr: A2(author$project$Thorns$Update$thornToHelpStr, thorn, segmentLength)
						}),
					elm$core$Platform$Cmd$none);
			case 'MouseOut':
				var rownr = msg.a;
				var colnr = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{currentSegment: _List_Nil, helpStr: elm$core$Maybe$Nothing}),
					elm$core$Platform$Cmd$none);
			case 'DoActivate':
				var rownr = msg.a;
				var colnr = msg.b;
				var _n1 = model.opponent;
				if (_n1.$ === 'Nothing') {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				} else {
					if (_n1.a.$ === 'Ochar') {
						var opp = _n1.a.a;
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var opponent = _n1.a.a;
						var previous_grid = model.gridInteractionOptions;
						var coords = A2(author$project$Grid$Coordinate, colnr, rownr);
						var mbSegment = A2(author$project$Thorns$ThornGrid$findSegment, coords, model.gridInteractionOptions);
						var info_rec = A5(author$project$Thorns$OpponentInteraction$do_activate_and_calc_opponents, coords, mbSegment, model.gridInteractionOptions, model.player, opponent);
						var interactionHasFinished_ = (info_rec.player.health <= 0) || ((info_rec.opponent.health <= 0) || (_Utils_cmp(info_rec.opponent.indexOfLight, info_rec.opponent.indexOfLightMax) > -1));
						var _n2 = A2(
							author$project$Thorns$ThornGrid$checkSegments,
							info_rec.player,
							A2(
								author$project$Thorns$ThornGrid$fall,
								_Utils_Tuple2(info_rec.grid, model.pseudoRandomIntsPool),
								info_rec.player));
						var newGrid = _n2.a;
						var newlrands = _n2.b;
						var newModel = _Utils_update(
							model,
							{
								currentSegment: _List_Nil,
								gridInteractionOptions: newGrid,
								helpStr: elm$core$Maybe$Nothing,
								interactionHasFinished: interactionHasFinished_,
								opponent: elm$core$Maybe$Just(
									author$project$Thorns$Types$FightingCharacter(info_rec.opponent)),
								player: info_rec.player,
								pseudoRandomIntsPool: newlrands
							});
						return _Utils_Tuple2(
							newModel,
							A2(author$project$Thorns$Update$cmdFillRandomIntsPool, false, newModel));
					}
				}
			default:
				var lrandints = model.pseudoRandomIntsPool;
				var gridInteractionOptions = model.gridInteractionOptions;
				var _n3 = A3(author$project$Thorns$ThornGrid$randomizeGrid, gridInteractionOptions, lrandints, model.player);
				var newGrid = _n3.a;
				var newlrandints = _n3.b;
				var newModel = _Utils_update(
					model,
					{gridInteractionOptions: newGrid, helpStr: elm$core$Maybe$Nothing, pseudoRandomIntsPool: newlrandints});
				return _Utils_Tuple2(
					newModel,
					A2(author$project$Thorns$Update$cmdFillRandomIntsPool, false, newModel));
		}
	});
var elm$core$Platform$Cmd$map = _Platform_map;
var author$project$GameUpdate$update = F2(
	function (msg, model) {
		update:
		while (true) {
			switch (msg.$) {
				case 'Noop':
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 'ThornsMsg':
					var tmsg = msg.a;
					var _n1 = A2(author$project$Thorns$Update$update, tmsg, model.gameOfThornsModel);
					var newThornsModel = _n1.a;
					var thorns_cmds = _n1.b;
					var newModel = function () {
						if (newThornsModel.interactionHasFinished) {
							var _n2 = function () {
								var _n3 = newThornsModel.opponent;
								if (_n3.$ === 'Just') {
									if (_n3.a.$ === 'FightingCharacter') {
										var erec = _n3.a.a;
										return _Utils_Tuple3(
											A3(
												elm$core$Dict$update,
												erec.id,
												function (_n4) {
													return elm$core$Maybe$Just(erec);
												},
												model.fightingCharacters),
											model.otherCharacters,
											newThornsModel.player);
									} else {
										var orec = _n3.a.a;
										return _Utils_Tuple3(
											model.fightingCharacters,
											A3(
												elm$core$Dict$update,
												orec.id,
												function (_n5) {
													return elm$core$Maybe$Just(orec);
												},
												model.otherCharacters),
											newThornsModel.player);
									}
								} else {
									return _Utils_Tuple3(model.fightingCharacters, model.otherCharacters, model.player);
								}
							}();
							var updatedFightCharacters = _n2.a;
							var newOtherCharacters = _n2.b;
							var newPlayer = _n2.c;
							var newDisplay = (_Utils_eq(model.currentDisplay, author$project$GameModel$DisplayGameOfThorns) && (!newThornsModel.interactionHasFinished)) ? author$project$GameModel$DisplayGameOfThorns : ((_Utils_eq(model.currentDisplay, author$project$GameModel$DisplayGameOfThorns) && newThornsModel.interactionHasFinished) ? ((newPlayer.health <= 0) ? author$project$GameModel$DisplayGameOver : author$project$GameModel$DisplayRegularGame) : model.currentDisplay);
							return author$project$GameUpdate$cleanup(
								_Utils_update(
									model,
									{currentDisplay: newDisplay, fightingCharacters: updatedFightCharacters, gameOfThornsModel: newThornsModel, listeningToKeyInput: true, otherCharacters: newOtherCharacters, player: newPlayer}));
						} else {
							return _Utils_update(
								model,
								{gameOfThornsModel: newThornsModel});
						}
					}();
					return _Utils_Tuple2(
						newModel,
						A2(elm$core$Platform$Cmd$map, author$project$GameUpdate$ThornsMsg, thorns_cmds));
				case 'StartGameNr':
					var nr = msg.a;
					var floorGridCoordinates = function (floorId) {
						return _Utils_eq(floorId, model.currentFloorId) ? author$project$Grid$toCoordinates(model.level) : A2(
							elm$core$Maybe$withDefault,
							_List_Nil,
							A2(
								elm$core$Maybe$map,
								function (g) {
									return author$project$Grid$toCoordinates(g.level);
								},
								A2(elm$core$Dict$get, floorId, model.floorDict)));
					};
					var _n6 = function () {
						switch (nr) {
							case 1:
								return author$project$GameDefinitions$Game1$Game1Definitions$initialModelFunc(model.imgBaseDir);
							case 2:
								return A2(author$project$GameDefinitions$Game2$Game2Definitions$initialModelFunc, model.pseudoRandomIntsPool, model.imgBaseDir);
							default:
								return _Utils_Tuple3(model, false, false);
						}
					}();
					var initModel = _n6.a;
					var createRandomMap = _n6.b;
					var randomlyPositionPlayer = _n6.c;
					var gBounds = author$project$Grid$getGridBoundsToPlacePlayer(initModel.level);
					return _Utils_Tuple2(
						author$project$GameUpdate$position_viewport_in_order_to_center_player(initModel),
						elm$core$Platform$Cmd$batch(
							_Utils_ap(
								_List_fromArray(
									[
										createRandomMap ? author$project$GameUpdate$cmdFillRandomIntsPoolAndGenerateRandomMap(initModel) : author$project$GameUpdate$cmdFillRandomIntsPool(initModel),
										A4(author$project$GameUpdate$cmdGenerateRandomInitiativeValue, 'player', elm$core$Maybe$Nothing, 1, 100),
										randomlyPositionPlayer ? A5(author$project$GameUpdate$cmdGetRandomPositionedPlayer, initModel.player, gBounds.minX, gBounds.maxX, gBounds.minY, gBounds.maxY) : elm$core$Platform$Cmd$none,
										A2(
										elm$core$Platform$Cmd$map,
										author$project$GameUpdate$ThornsMsg,
										A2(author$project$Thorns$Update$cmdFillRandomIntsPool, true, initModel.gameOfThornsModel))
									]),
								_Utils_ap(
									elm$core$Dict$values(
										A2(
											elm$core$Dict$map,
											F2(
												function (fcharId, fightingCharacter) {
													return A3(
														author$project$GameUpdate$cmdGetRandomPositionedFightingCharacter,
														fightingCharacter,
														fcharId,
														elm$core$List$length(
															floorGridCoordinates(fightingCharacter.floorId)));
												}),
											initModel.fightingCharacters)),
									elm$core$Dict$values(
										A2(
											elm$core$Dict$map,
											F2(
												function (fcharId, fightingCharacter) {
													return A4(
														author$project$GameUpdate$cmdGenerateRandomInitiativeValue,
														'fightingCharacter',
														elm$core$Maybe$Just(fcharId),
														1,
														100);
												}),
											initModel.fightingCharacters))))));
				case 'KeyDown':
					var input = msg.a;
					if (!model.listeningToKeyInput) {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						switch (input.$) {
							case 'Up':
								var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
									_Utils_Tuple2(0, 0 - 1)),
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 'Down':
								var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
									_Utils_Tuple2(0, 0 + 1)),
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 'Left':
								var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
									_Utils_Tuple2(0 - 1, 0)),
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 'Right':
								var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
									_Utils_Tuple2(0 + 1, 0)),
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 'PickUpItem':
								var $temp$msg = author$project$GameUpdate$TryAddToPlayerInventory,
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 'ViewStatsOverlay':
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{displayStatsOverlay: !model.displayStatsOverlay}),
									elm$core$Platform$Cmd$none);
							case 'ViewHelpMode':
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											currentDisplay: _Utils_eq(model.currentDisplay, author$project$GameModel$DisplayHelpScreen) ? author$project$GameModel$DisplayRegularGame : author$project$GameModel$DisplayHelpScreen
										}),
									elm$core$Platform$Cmd$none);
							case 'ViewOpponentReport':
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											currentDisplay: _Utils_eq(model.currentDisplay, author$project$GameModel$DisplayOpponentReport) ? author$project$GameModel$DisplayRegularGame : author$project$GameModel$DisplayOpponentReport
										}),
									elm$core$Platform$Cmd$none);
							case 'ViewInventory':
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											currentDisplay: _Utils_eq(model.currentDisplay, author$project$GameModel$DisplayInventory) ? author$project$GameModel$DisplayRegularGame : author$project$GameModel$DisplayInventory
										}),
									elm$core$Platform$Cmd$none);
							case 'ViewMap':
								return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
							default:
								return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
						}
					}
				case 'TryAddToPlayerInventory':
					var player_ = model.player;
					var pcoords = model.player.location;
					var _n9 = function () {
						var _n10 = A2(author$project$Grid$get, pcoords, model.level);
						if ((_n10.$ === 'Just') && (_n10.a.$ === 'Floor')) {
							var floorinfo = _n10.a.a;
							var _n11 = floorinfo.item;
							if (_n11.$ === 'Just') {
								var item = _n11.a;
								switch (item.$) {
									case 'Paper':
										var paperinfo = item.a;
										return _Utils_Tuple3(
											A3(
												elm$core$Dict$update,
												'paper_' + elm$core$String$fromInt(paperinfo.id),
												function (_n13) {
													return elm$core$Maybe$Just(item);
												},
												model.player.inventory),
											A3(
												author$project$Grid$set,
												pcoords,
												author$project$Tile$Floor(
													_Utils_update(
														floorinfo,
														{item: elm$core$Maybe$Nothing})),
												model.level),
											model.player.health);
									case 'Food':
										var fdescription = item.a;
										return _Utils_Tuple3(
											model.player.inventory,
											A3(
												author$project$Grid$set,
												pcoords,
												author$project$Tile$Floor(
													_Utils_update(
														floorinfo,
														{item: elm$core$Maybe$Nothing})),
												model.level),
											model.player.health + 4);
									default:
										return _Utils_Tuple3(
											A3(
												elm$core$Dict$update,
												author$project$Item$itemToString(item),
												function (_n14) {
													return elm$core$Maybe$Just(item);
												},
												model.player.inventory),
											A3(
												author$project$Grid$set,
												pcoords,
												author$project$Tile$Floor(
													_Utils_update(
														floorinfo,
														{item: elm$core$Maybe$Nothing})),
												model.level),
											model.player.health);
								}
							} else {
								return _Utils_Tuple3(model.player.inventory, model.level, model.player.health);
							}
						} else {
							return _Utils_Tuple3(model.player.inventory, model.level, model.player.health);
						}
					}();
					var updatedInventory = _n9.a;
					var newGrid = _n9.b;
					var newHealth = _n9.c;
					var newPlayer = _Utils_update(
						player_,
						{health: newHealth, inventory: updatedInventory});
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{level: newGrid, player: newPlayer}),
						elm$core$Platform$Cmd$none);
				case 'TryShiftPlayerPosition':
					var shiftTuple = msg.a;
					var y_ = shiftTuple.b;
					var x_ = shiftTuple.a;
					var player = model.player;
					var _n15 = player.location;
					var x = _n15.x;
					var y = _n15.y;
					var _n16 = _Utils_Tuple2(x + x_, y + y_);
					var x2 = _n16.a;
					var y2 = _n16.b;
					var mbFightChar = function () {
						var _n22 = elm$core$Dict$values(
							A2(
								elm$core$Dict$filter,
								F2(
									function (fcharId, fightingCharacter) {
										return _Utils_eq(fightingCharacter.floorId, model.currentFloorId) && _Utils_eq(
											fightingCharacter.location,
											A2(author$project$GameModel$location, x2, y2));
									}),
								model.fightingCharacters));
						if (!_n22.b) {
							return elm$core$Maybe$Nothing;
						} else {
							var fightingCharacter = _n22.a;
							var es = _n22.b;
							return elm$core$Maybe$Just(fightingCharacter);
						}
					}();
					var newModel = function () {
						var _n19 = A2(
							author$project$Grid$get,
							A2(author$project$GameModel$location, x2, y2),
							model.level);
						if ((_n19.$ === 'Just') && (_n19.a.$ === 'Lever')) {
							var leverinfo = _n19.a.a;
							return leverinfo.isUp ? model : function (xmodel) {
								return A3(
									elm$core$List$foldl,
									F2(
										function (cfunc, modacc) {
											return A2(
												cfunc,
												A2(author$project$GameModel$location, x2, y2),
												modacc);
										}),
									xmodel,
									A2(author$project$GameUpdate$getModelChangerFuncs, leverinfo.leverId, model));
							}(
								_Utils_update(
									model,
									{
										level: A3(
											author$project$Grid$set,
											A2(author$project$GameModel$location, x2, y2),
											author$project$Tile$Lever(
												_Utils_update(
													leverinfo,
													{isUp: true})),
											model.level)
									}));
						} else {
							return function (model_) {
								var _n20 = A2(
									author$project$Grid$get,
									A2(author$project$GameModel$location, x2, y2),
									model_.level);
								if ((_n20.$ === 'Just') && (_n20.a.$ === 'ConverterTile')) {
									var _n21 = _n20.a;
									var initialTile = _n21.a;
									var newTile = _n21.b;
									return _Utils_update(
										model_,
										{
											level: A3(
												author$project$Grid$set,
												A2(author$project$GameModel$location, x2, y2),
												newTile,
												model_.level)
										});
								} else {
									return model_;
								}
							}(model);
						}
					}();
					var _n17 = function () {
						if (mbFightChar.$ === 'Just') {
							var fightingCharacter = mbFightChar.a;
							return ((fightingCharacter.health > 0) && ((_Utils_cmp(fightingCharacter.indexOfLight, fightingCharacter.indexOfLightMax) < 0) && (newModel.player.health > 0))) ? _Utils_Tuple2(
								newModel,
								author$project$GameUpdate$StartOpponentInteraction(fightingCharacter)) : (((fightingCharacter.health <= 0) && (fightingCharacter.playerCanWalkOverIfDead && (x_ || y_))) ? _Utils_Tuple2(
								author$project$GameUpdate$checkAndAlterDisplayAnchorIfNecessary(
									author$project$GameUpdate$openDoorIfPlayerStandingOnDoorAndClosed(
										author$project$GameUpdate$checkIfPlayerStandingOnStairsOrHoleAndMoveToNewFloor(
											_Utils_update(
												newModel,
												{
													player: A4(
														author$project$GameUpdate$move,
														_Utils_Tuple2(x_, y_),
														newModel.level,
														author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
														newModel.player)
												})))),
								author$project$GameUpdate$CleanUpAndFightingCharacterLogic) : _Utils_Tuple2(newModel, author$project$GameUpdate$CleanUpAndFightingCharacterLogic));
						} else {
							return (x_ || y_) ? _Utils_Tuple2(
								author$project$GameUpdate$checkAndAlterDisplayAnchorIfNecessary(
									author$project$GameUpdate$openDoorIfPlayerStandingOnDoorAndClosed(
										author$project$GameUpdate$checkIfPlayerStandingOnStairsOrHoleAndMoveToNewFloor(
											_Utils_update(
												newModel,
												{
													player: A4(
														author$project$GameUpdate$move,
														_Utils_Tuple2(x_, y_),
														newModel.level,
														author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
														newModel.player)
												})))),
								author$project$GameUpdate$CleanUpAndFightingCharacterLogic) : _Utils_Tuple2(newModel, author$project$GameUpdate$CleanUpAndFightingCharacterLogic);
						}
					}();
					var newModel2 = _n17.a;
					var themsg = _n17.b;
					var $temp$msg = themsg,
						$temp$model = newModel2;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 'CleanUpAndFightingCharacterLogic':
					var isGameCompleted = author$project$GameUpdate$checkGameCompletion(model);
					var _n23 = function (_n24) {
						var modl = _n24.a;
						var le = _n24.b;
						return _Utils_eq(modl.currentDisplay, author$project$GameModel$DisplayGameOver) ? _Utils_Tuple2(
							_Utils_update(
								modl,
								{listeningToKeyInput: false}),
							le) : _Utils_Tuple2(modl, le);
					}(
						author$project$GameUpdate$fightingCharacter_AI(
							author$project$GameUpdate$otherCharacters_AI(
								author$project$GameUpdate$resetOtherCharacterMovesCurrentTurn(
									author$project$GameUpdate$resetFightingCharacterMovesCurrentTurn(
										author$project$GameUpdate$cleanup(model))))));
					var newModel = _n23.a;
					var lfightingCharacters = _n23.b;
					if (isGameCompleted) {
						return _Utils_Tuple2(
							author$project$GameUpdate$reveal(
								_Utils_update(
									newModel,
									{currentDisplay: author$project$GameModel$DisplayGameCompleted, fightingCharacters: elm$core$Dict$empty, otherCharacters: elm$core$Dict$empty})),
							elm$core$Platform$Cmd$none);
					} else {
						var _n25 = elm$core$List$head(lfightingCharacters);
						if (_n25.$ === 'Just') {
							var fightingCharacter_ = _n25.a;
							var $temp$msg = author$project$GameUpdate$StartOpponentInteraction(fightingCharacter_),
								$temp$model = newModel;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							return _Utils_Tuple2(
								author$project$GameUpdate$reveal(newModel),
								author$project$GameUpdate$cmdFillRandomIntsPool(newModel));
						}
					}
				case 'StartOpponentInteraction':
					var fightingCharacter = msg.a;
					var _n26 = A2(
						author$project$Thorns$Update$update,
						A2(author$project$Thorns$Types$SetOpponentAndPlayerAndInitializeGrid, fightingCharacter, model.player),
						model.gameOfThornsModel);
					var newThornsModel = _n26.a;
					var thornsCmd = _n26.b;
					var newModel = _Utils_update(
						model,
						{currentDisplay: author$project$GameModel$DisplayGameOfThorns, gameOfThornsModel: newThornsModel, listeningToKeyInput: false});
					var newModel_after_cleanup = author$project$GameUpdate$reveal(
						author$project$GameUpdate$cleanup(newModel));
					return _Utils_Tuple2(
						newModel_after_cleanup,
						elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									author$project$GameUpdate$cmdFillRandomIntsPool(newModel_after_cleanup),
									A2(elm$core$Platform$Cmd$map, author$project$GameUpdate$ThornsMsg, thornsCmd)
								])));
				case 'ChangeFloorTo':
					var floorId = msg.a;
					var locTuple = msg.b;
					var newModel = A3(author$project$GameUpdate$changeFloorTo, model, floorId, locTuple);
					return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
				case 'NewRandomPointToPlacePlayer':
					var tupPosition = msg.a;
					var oldPlayer = model.player;
					var newLocation = A2(author$project$GameModel$location, tupPosition.a, tupPosition.b);
					var newPlayer = _Utils_update(
						oldPlayer,
						{location: newLocation, placed: true});
					var gridBounds = author$project$Grid$getGridBoundsToPlacePlayer(model.level);
					var _n27 = A3(author$project$Beings$BeingsInTileGrid$isGridTileWalkable, newLocation, newPlayer, model.level);
					if (_n27) {
						return _Utils_Tuple2(
							author$project$GameUpdate$reveal(
								_Utils_update(
									model,
									{
										player: newPlayer,
										viewport_topleft_x: A2(
											elm$core$Basics$max,
											0,
											newLocation.x - elm$core$Basics$round(model.window_width / 2.0)),
										viewport_topleft_y: A2(
											elm$core$Basics$max,
											0,
											newLocation.y - elm$core$Basics$round(model.window_height / 2))
									})),
							elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							model,
							A5(
								author$project$GameUpdate$cmdGetRandomPositionedPlayer,
								_Utils_update(
									oldPlayer,
									{placed: false}),
								gridBounds.minX,
								gridBounds.maxX,
								gridBounds.minY,
								gridBounds.maxY));
					}
				case 'NewGridCoordinatesIndexToPlaceFightingCharacter':
					var fcharId = msg.a;
					var idxPosition = msg.b;
					var mbActualFightChar = A2(elm$core$Dict$get, fcharId, model.fightingCharacters);
					var mbFloorGrid = function () {
						if (mbActualFightChar.$ === 'Nothing') {
							return elm$core$Maybe$Nothing;
						} else {
							var fchar = mbActualFightChar.a;
							return _Utils_eq(fchar.floorId, model.currentFloorId) ? elm$core$Maybe$Just(model.level) : A2(
								elm$core$Maybe$map,
								function ($) {
									return $.level;
								},
								A2(elm$core$Dict$get, fchar.floorId, model.floorDict));
						}
					}();
					var gridCoordinates = A2(
						elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							elm$core$Maybe$map,
							function (g) {
								return author$project$Grid$toCoordinates(g);
							},
							mbFloorGrid));
					return function (coords) {
						return A2(
							author$project$GameUpdate$update,
							A2(
								author$project$GameUpdate$NewRandomPointToPlaceFightingCharacter,
								fcharId,
								_Utils_Tuple2(coords.x, coords.y)),
							model);
					}(
						A2(
							elm$core$Maybe$withDefault,
							A2(author$project$Grid$Coordinate, 1, 1),
							elm$core$List$head(
								A2(elm$core$List$drop, idxPosition, gridCoordinates))));
				case 'NewRandomPointToPlaceFightingCharacter':
					var fcharId = msg.a;
					var tupPosition = msg.b;
					var newLocation = A2(author$project$GameModel$location, tupPosition.a, tupPosition.b);
					var mbActualFightChar = A2(elm$core$Dict$get, fcharId, model.fightingCharacters);
					var mbFloorGrid = function () {
						if (mbActualFightChar.$ === 'Nothing') {
							return elm$core$Maybe$Nothing;
						} else {
							var fchar = mbActualFightChar.a;
							return _Utils_eq(fchar.floorId, model.currentFloorId) ? elm$core$Maybe$Just(model.level) : A2(
								elm$core$Maybe$map,
								function ($) {
									return $.level;
								},
								A2(elm$core$Dict$get, fchar.floorId, model.floorDict));
						}
					}();
					var gridCoordinates = A2(
						elm$core$Maybe$withDefault,
						_List_Nil,
						A2(
							elm$core$Maybe$map,
							function (g) {
								return author$project$Grid$toCoordinates(g);
							},
							mbFloorGrid));
					var _n29 = _Utils_Tuple2(mbActualFightChar, mbFloorGrid);
					if ((_n29.a.$ === 'Just') && (_n29.b.$ === 'Just')) {
						var actualFightChar = _n29.a.a;
						var actualFloorGrid = _n29.b.a;
						var _n30 = A3(author$project$Beings$BeingsInTileGrid$isGridTileWalkable, newLocation, actualFightChar, actualFloorGrid);
						if (_n30) {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										fightingCharacters: A3(author$project$GameModel$placeExistingFightingCharacter, fcharId, newLocation, model.fightingCharacters)
									}),
								elm$core$Platform$Cmd$none);
						} else {
							return _Utils_Tuple2(
								model,
								A3(
									author$project$GameUpdate$cmdGetRandomPositionedFightingCharacter,
									actualFightChar,
									fcharId,
									elm$core$List$length(gridCoordinates)));
						}
					} else {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					}
				case 'NewRandomFloatsForGenCave':
					var lfloats = msg.a;
					var theSize = model.level.size;
					var newGrid = A2(
						author$project$MapGen$randomCave,
						_Utils_Tuple2(theSize.width, theSize.height),
						lfloats);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{level: newGrid}),
						elm$core$Platform$Cmd$none);
				case 'RandomInitiativeValue':
					var strCharacter = msg.a;
					var mbCharacterId = msg.b;
					var intval = msg.c;
					if (strCharacter === 'player') {
						var oldPlayer = model.player;
						var newPlayer = _Utils_update(
							oldPlayer,
							{initiative: intval});
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{player: newPlayer}),
							elm$core$Platform$Cmd$none);
					} else {
						if (strCharacter === 'fightingCharacter') {
							var newModel = A3(author$project$GameModel$mbUpdateFightingCharacterInitiativeByMbFCharId, intval, mbCharacterId, model);
							return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
						} else {
							return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
						}
					}
				case 'NewRandomIntsAddToPool':
					var lints = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								pseudoRandomIntsPool: _Utils_ap(lints, model.pseudoRandomIntsPool)
							}),
						elm$core$Platform$Cmd$none);
				default:
					var lints = msg.a;
					var minRoomSize = A2(
						elm$core$Maybe$withDefault,
						0,
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.minRoomSize;
							},
							model.roomsInfo));
					var maxRoomSize = A2(
						elm$core$Maybe$withDefault,
						0,
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.maxRoomSize;
							},
							model.roomsInfo));
					var maxNrOfRooms = A2(
						elm$core$Maybe$withDefault,
						0,
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.maxNrOfRooms;
							},
							model.roomsInfo));
					var genOutputRecord = A7(author$project$MapGen$randomMapGeneratorWithRooms, model.total_width, model.total_height, maxNrOfRooms, maxRoomSize, minRoomSize, lints, model.level);
					var gridAsList = A2(
						elm$core$List$concatMap,
						elm$core$Basics$identity,
						author$project$Grid$toList(genOutputRecord.tileGrid));
					var wallPercentage = author$project$GameUpdate$getWallPercentage(gridAsList);
					var newmodel = _Utils_update(
						model,
						{
							level: genOutputRecord.tileGrid,
							pseudoRandomIntsPool: genOutputRecord.unusedRandoms,
							wallPercentage: elm$core$Maybe$Just(wallPercentage)
						});
					return _Utils_Tuple2(
						newmodel,
						author$project$GameUpdate$cmdFillRandomIntsPool(newmodel));
			}
		}
	});
var author$project$GameModel$DisplayMap = {$: 'DisplayMap'};
var author$project$GameModel$getGridTileVisibility = F2(
	function (location_, gridtiles) {
		return A2(
			elm$core$Maybe$withDefault,
			author$project$Tile$Unexplored,
			A2(
				elm$core$Maybe$map,
				author$project$Tile$getTileVisibility,
				A2(author$project$Grid$get, location_, gridtiles)));
	});
var timjs$elm_collage$Collage$Core$Image = F2(
	function (a, b) {
		return {$: 'Image', a: a, b: b};
	});
var timjs$elm_collage$Collage$Core$collage = function (basic) {
	return {
		basic: basic,
		handlers: _List_Nil,
		name: elm$core$Maybe$Nothing,
		opacity: 1,
		rotation: 0,
		scale: _Utils_Tuple2(1, 1),
		shift: _Utils_Tuple2(0, 0)
	};
};
var timjs$elm_collage$Collage$image = function (dims) {
	return A2(
		elm$core$Basics$composeL,
		timjs$elm_collage$Collage$Core$collage,
		timjs$elm_collage$Collage$Core$Image(dims));
};
var author$project$GameView$fightingCharacterView = F6(
	function (fightChar, showBlood, visibility, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (_Utils_cmp(fightChar.indexOfLight, fightChar.indexOfLightMax) > -1) ? (imgBaseDir + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '_enlightened.png'))) : ((fightChar.health > 0) ? (imgBaseDir + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '.png'))) : (((fightChar.health <= 0) && showBlood) ? (imgBaseDir + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '_dead_blood.png'))) : (imgBaseDir + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '_dead.png')))));
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var the_sett$elm_color$Color$Color = F4(
	function (red, green, blue, alpha) {
		return {alpha: alpha, blue: blue, green: green, red: red};
	});
var the_sett$elm_color$Color$rgba = the_sett$elm_color$Color$Color;
var the_sett$elm_color$Color$black = A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1);
var timjs$elm_collage$Collage$Flat = {$: 'Flat'};
var timjs$elm_collage$Collage$Sharp = {$: 'Sharp'};
var timjs$elm_collage$Collage$thin = 2.0;
var timjs$elm_collage$Collage$Core$Uniform = function (a) {
	return {$: 'Uniform', a: a};
};
var timjs$elm_collage$Collage$uniform = timjs$elm_collage$Collage$Core$Uniform;
var timjs$elm_collage$Collage$defaultLineStyle = {
	cap: timjs$elm_collage$Collage$Flat,
	dashPattern: _List_Nil,
	dashPhase: 0,
	fill: timjs$elm_collage$Collage$uniform(the_sett$elm_color$Color$black),
	join: timjs$elm_collage$Collage$Sharp,
	thickness: timjs$elm_collage$Collage$thin
};
var timjs$elm_collage$Collage$broken = F3(
	function (dashes, thickness, fill) {
		return _Utils_update(
			timjs$elm_collage$Collage$defaultLineStyle,
			{dashPattern: dashes, fill: fill, thickness: thickness});
	});
var timjs$elm_collage$Collage$solid = timjs$elm_collage$Collage$broken(_List_Nil);
var timjs$elm_collage$Collage$Core$Transparent = {$: 'Transparent'};
var timjs$elm_collage$Collage$transparent = timjs$elm_collage$Collage$Core$Transparent;
var timjs$elm_collage$Collage$invisible = A2(timjs$elm_collage$Collage$solid, 0, timjs$elm_collage$Collage$transparent);
var timjs$elm_collage$Collage$Core$Shape = F2(
	function (a, b) {
		return {$: 'Shape', a: a, b: b};
	});
var timjs$elm_collage$Collage$styled = function (style) {
	return A2(
		elm$core$Basics$composeL,
		timjs$elm_collage$Collage$Core$collage,
		timjs$elm_collage$Collage$Core$Shape(style));
};
var timjs$elm_collage$Collage$filled = function (fill) {
	return timjs$elm_collage$Collage$styled(
		_Utils_Tuple2(fill, timjs$elm_collage$Collage$invisible));
};
var timjs$elm_collage$Collage$Core$Rectangle = F3(
	function (a, b, c) {
		return {$: 'Rectangle', a: a, b: b, c: c};
	});
var timjs$elm_collage$Collage$roundedRectangle = timjs$elm_collage$Collage$Core$Rectangle;
var timjs$elm_collage$Collage$rectangle = F2(
	function (w, h) {
		return A3(timjs$elm_collage$Collage$roundedRectangle, w, h, 0);
	});
var author$project$GameView$fog = F2(
	function (tileWidth, tileHeight) {
		return A2(
			timjs$elm_collage$Collage$filled,
			timjs$elm_collage$Collage$uniform(
				A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1)),
			A2(timjs$elm_collage$Collage$rectangle, tileWidth, tileHeight));
	});
var author$project$GameView$halfFog = F2(
	function (tileWidth, tileHeight) {
		return A2(
			timjs$elm_collage$Collage$filled,
			timjs$elm_collage$Collage$uniform(
				A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 0.6)),
			A2(timjs$elm_collage$Collage$rectangle, tileWidth, tileHeight));
	});
var the_sett$elm_color$Color$red = A4(the_sett$elm_color$Color$rgba, 204, 0, 0, 1);
var timjs$elm_collage$Collage$Core$Circle = function (a) {
	return {$: 'Circle', a: a};
};
var timjs$elm_collage$Collage$circle = timjs$elm_collage$Collage$Core$Circle;
var author$project$GameView$noForm = A2(
	timjs$elm_collage$Collage$filled,
	timjs$elm_collage$Collage$uniform(the_sett$elm_color$Color$red),
	timjs$elm_collage$Collage$circle(0));
var author$project$GameView$fogT = F4(
	function (tileWidth, tileHeight, displayMode, visibility) {
		switch (visibility.$) {
			case 'Visible':
				return author$project$GameView$noForm;
			case 'Explored':
				if (displayMode.$ === 'DisplayMap') {
					return author$project$GameView$noForm;
				} else {
					return A2(author$project$GameView$halfFog, tileWidth, tileHeight);
				}
			default:
				return A2(author$project$GameView$fog, tileWidth, tileHeight);
		}
	});
var author$project$GameView$getImgBaseDir = function (model) {
	return A2(elm$core$Maybe$withDefault, './img', model.imgBaseDir);
};
var author$project$GameView$otherCharacterView = F6(
	function (character, showBlood, visibility, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = imgBaseDir + '/pc/right.png';
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$playerImg = F5(
	function (player_, visibility, tileWidth, tileHeight, imgBaseDir) {
		if (visibility.$ === 'Visible') {
			var fileStr = function () {
				var _n1 = player_.direction;
				switch (_n1.$) {
					case 'Left':
						return imgBaseDir + '/pc/left.png';
					case 'Right':
						return imgBaseDir + '/pc/right.png';
					case 'Up':
						return imgBaseDir + '/pc/up.png';
					default:
						return imgBaseDir + '/pc/down.png';
				}
			}();
			return A2(
				timjs$elm_collage$Collage$image,
				_Utils_Tuple2(tileWidth, tileHeight),
				fileStr);
		} else {
			return author$project$GameView$noForm;
		}
	});
var author$project$GameView$door = F4(
	function (doorinfo, tileWidth, tileHeight, imgBaseDir) {
		var mbFileStr = (doorinfo.isOpen && (_Utils_eq(doorinfo.orientation, author$project$Tile$DoorToUp) || _Utils_eq(doorinfo.orientation, author$project$Tile$DoorToDown))) ? elm$core$Maybe$Just(imgBaseDir + '/doors/doorUp_open_floorBg.png') : ((doorinfo.isOpen && _Utils_eq(doorinfo.orientation, author$project$Tile$DoorToTheLeft)) ? elm$core$Maybe$Just(imgBaseDir + '/doors/doorLeft_open_floorBg.png') : ((doorinfo.isOpen && _Utils_eq(doorinfo.orientation, author$project$Tile$DoorToTheRight)) ? elm$core$Maybe$Just(imgBaseDir + '/doors/doorRight_open_floorBg.png') : (doorinfo.isOpen ? elm$core$Maybe$Just(imgBaseDir + '/floor/floor_01.png') : (_Utils_eq(
			doorinfo.color,
			elm$core$Maybe$Just('blue')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/blueDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.color,
			elm$core$Maybe$Just('green')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/greenDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.color,
			elm$core$Maybe$Just('red')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/redDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.color,
			elm$core$Maybe$Just('yellow')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/yellowDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.color,
			elm$core$Maybe$Just('black')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/blackDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.color,
			elm$core$Maybe$Just('striped')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/stripedDoorClosed_floorBg.png') : elm$core$Maybe$Just(imgBaseDir + '/doors/doorClosed_floorBg.png'))))))))));
		if (mbFileStr.$ === 'Just') {
			var fileStr = mbFileStr.a;
			return A2(
				timjs$elm_collage$Collage$image,
				_Utils_Tuple2(tileWidth, tileHeight),
				fileStr);
		} else {
			return author$project$GameView$noForm;
		}
	});
var author$project$GameView$floor_ = F4(
	function (floorinfo, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (floorinfo.color === 'orange') ? (imgBaseDir + '/floor/floor_01.png') : (imgBaseDir + '/floor/floor_01.png');
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$grass = F4(
	function (grassinfo, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (grassinfo.description === 'grass_with_dirt') ? (imgBaseDir + '/grass/grass_and_dirt.png') : (imgBaseDir + '/grass/grass.png');
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$hole = F3(
	function (tileWidth, tileHeight, imgBaseDir) {
		var fileStr = imgBaseDir + '/floor/floor_hole.png';
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$lever = F4(
	function (onOffStr, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = ((onOffStr === 'on') || ((onOffStr === 'On') || (onOffStr === 'ON'))) ? (imgBaseDir + '/levers/lever_color_on.png') : (imgBaseDir + '/levers/lever_color_off.png');
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$notileyet = F2(
	function (tileWidth, tileHeight) {
		return A2(
			timjs$elm_collage$Collage$filled,
			timjs$elm_collage$Collage$uniform(the_sett$elm_color$Color$black),
			A2(timjs$elm_collage$Collage$rectangle, tileWidth, tileHeight));
	});
var author$project$GameView$stairs = F4(
	function (upOrDownStr, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (elm$core$String$toLower(upOrDownStr) === 'up') ? (imgBaseDir + '/floor/floor_stairs_up.png') : (imgBaseDir + '/floor/floor_stairs_down.png');
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$tree = F4(
	function (treeinfo, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (treeinfo.treeType === 'pinetree') ? (imgBaseDir + '/trees/treetopPineTree_bg.png') : (imgBaseDir + '/trees/treetopRoundTree_bg.png');
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$wall = F4(
	function (orientationStr, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (elm$core$String$toLower(orientationStr) === 'four_way') ? (imgBaseDir + '/walls/empty-empty-empty-empty.png') : ((elm$core$String$toLower(orientationStr) === 'three_way_at_bottom') ? (imgBaseDir + '/walls/empty-empty-empty-flat.png') : ((elm$core$String$toLower(orientationStr) === 'three_way_at_right') ? (imgBaseDir + '/walls/empty-empty-flat-empty.png') : ((elm$core$String$toLower(orientationStr) === 'three_way_at_top') ? (imgBaseDir + '/walls/empty-flat-empty-empty.png') : ((elm$core$String$toLower(orientationStr) === 'three_way_at_left') ? (imgBaseDir + '/walls/flat-empty-empty-empty.png') : ((elm$core$String$toLower(orientationStr) === 'corner_top_right') ? (imgBaseDir + '/walls/empty-flat-flat-empty.png') : ((elm$core$String$toLower(orientationStr) === 'corner_top_left') ? (imgBaseDir + '/walls/flat-flat-empty-empty.png') : ((elm$core$String$toLower(orientationStr) === 'corner_bottom_right') ? (imgBaseDir + '/walls/empty-empty-flat-flat.png') : ((elm$core$String$toLower(orientationStr) === 'corner_bottom_left') ? (imgBaseDir + '/walls/flat-empty-empty-flat.png') : ((elm$core$String$toLower(orientationStr) === 'up') ? (imgBaseDir + '/walls/flat-empty-flat-empty.png') : ((elm$core$String$toLower(orientationStr) === 'horizontal') ? (imgBaseDir + '/walls/empty-flat-empty-flat.png') : ((elm$core$String$toLower(orientationStr) === 'cul_de_sac_at_bottom') ? (imgBaseDir + '/walls/flat-empty-flat-flat.png') : ((elm$core$String$toLower(orientationStr) === 'cul_de_sac_at_top') ? (imgBaseDir + '/walls/flat-flat-flat-empty.png') : ((elm$core$String$toLower(orientationStr) === 'cul_de_sac_at_left') ? (imgBaseDir + '/walls/flat-flat-empty-flat.png') : ((elm$core$String$toLower(orientationStr) === 'cul_de_sac_at_right') ? (imgBaseDir + '/walls/empty-flat-flat-flat.png') : ((elm$core$String$toLower(orientationStr) === 'just_bricks') ? (imgBaseDir + '/walls/wall.png') : (imgBaseDir + '/walls/wall.png'))))))))))))))));
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$water = F4(
	function (waterinfo, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (waterinfo.description === 'water_wall_up') ? (imgBaseDir + '/water/water_wall_up.png') : ((waterinfo.description === 'water_wall_left') ? (imgBaseDir + '/water/water_wall_left.png') : (imgBaseDir + '/water/just_water.png'));
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$tile = F5(
	function (currentFloorId, tileWidth, tileHeight, imgBaseDir, t) {
		tile:
		while (true) {
			switch (t.$) {
				case 'Floor':
					var floorinfo = t.a;
					return A4(author$project$GameView$floor_, floorinfo, tileWidth, tileHeight, imgBaseDir);
				case 'Stairs':
					var sinfo = t.a;
					return (_Utils_cmp(sinfo.toFloorId, currentFloorId) > 0) ? A4(author$project$GameView$stairs, 'up', tileWidth, tileHeight, imgBaseDir) : A4(author$project$GameView$stairs, 'down', tileWidth, tileHeight, imgBaseDir);
				case 'Tree':
					var treeinfo = t.a;
					return A4(author$project$GameView$tree, treeinfo, tileWidth, tileHeight, imgBaseDir);
				case 'Hole':
					var hinfo = t.a;
					return A3(author$project$GameView$hole, tileWidth, tileHeight, imgBaseDir);
				case 'Wall':
					var wallinfo = t.a;
					return (wallinfo.orientation === 'four_way') ? A4(author$project$GameView$wall, 'four_way', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'three_way_at_bottom') ? A4(author$project$GameView$wall, 'three_way_at_bottom', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'three_way_at_right') ? A4(author$project$GameView$wall, 'three_way_at_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'three_way_at_top') ? A4(author$project$GameView$wall, 'three_way_at_top', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'three_way_at_left') ? A4(author$project$GameView$wall, 'three_way_at_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'corner_top_right') ? A4(author$project$GameView$wall, 'corner_top_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'corner_top_left') ? A4(author$project$GameView$wall, 'corner_top_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'corner_bottom_right') ? A4(author$project$GameView$wall, 'corner_bottom_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'corner_bottom_left') ? A4(author$project$GameView$wall, 'corner_bottom_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'up') ? A4(author$project$GameView$wall, 'up', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'horizontal') ? A4(author$project$GameView$wall, 'horizontal', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'cul_de_sac_at_bottom') ? A4(author$project$GameView$wall, 'cul_de_sac_at_bottom', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'cul_de_sac_at_top') ? A4(author$project$GameView$wall, 'cul_de_sac_at_top', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'cul_de_sac_at_left') ? A4(author$project$GameView$wall, 'cul_de_sac_at_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'cul_de_sac_at_right') ? A4(author$project$GameView$wall, 'cul_de_sac_at_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.orientation === 'just_bricks') ? A4(author$project$GameView$wall, 'just_bricks', tileWidth, tileHeight, imgBaseDir) : A4(author$project$GameView$wall, 'horizontal', tileWidth, tileHeight, imgBaseDir))))))))))))))));
				case 'Door':
					var doorinfo = t.a;
					return A4(author$project$GameView$door, doorinfo, tileWidth, tileHeight, imgBaseDir);
				case 'NoTileYet':
					return A2(author$project$GameView$notileyet, tileWidth, tileHeight);
				case 'Lever':
					var leverinfo = t.a;
					return leverinfo.isUp ? A4(author$project$GameView$lever, 'on', tileWidth, tileHeight, imgBaseDir) : A4(author$project$GameView$lever, 'off', tileWidth, tileHeight, imgBaseDir);
				case 'Water':
					var waterinfo = t.a;
					return A4(author$project$GameView$water, waterinfo, tileWidth, tileHeight, imgBaseDir);
				case 'Grass':
					var grassinfo = t.a;
					return A4(author$project$GameView$grass, grassinfo, tileWidth, tileHeight, imgBaseDir);
				case 'ConverterTile':
					var it = t.a;
					var ct = t.b;
					var $temp$currentFloorId = currentFloorId,
						$temp$tileWidth = tileWidth,
						$temp$tileHeight = tileHeight,
						$temp$imgBaseDir = imgBaseDir,
						$temp$t = it;
					currentFloorId = $temp$currentFloorId;
					tileWidth = $temp$tileWidth;
					tileHeight = $temp$tileHeight;
					imgBaseDir = $temp$imgBaseDir;
					t = $temp$t;
					continue tile;
				default:
					return A2(author$project$GameView$notileyet, tileWidth, tileHeight);
			}
		}
	});
var author$project$GameView$doorOverlay = function (doorInfo) {
	return author$project$GameView$noForm;
};
var elm$core$String$startsWith = _String_startsWith;
var author$project$GameView$floorOverlay = F4(
	function (elemStr, tileWidth, tileHeight, imgBaseDir) {
		return (elemStr === 'ash') ? A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2((tileWidth / 2) | 0, (tileHeight / 2) | 0),
			imgBaseDir + '/floor/floor_ash.png') : (A2(elm$core$String$startsWith, 'key', elemStr) ? A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2((tileWidth / 2) | 0, (tileHeight / 2) | 0),
			imgBaseDir + ('/items/' + (elemStr + '.png'))) : ((elemStr === 'landingTarget') ? A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2((tileWidth / 2) | 0, (tileHeight / 2) | 0),
			imgBaseDir + '/floor/floor_landing_target.png') : author$project$GameView$noForm));
	});
var author$project$GameView$notileyetOverlay = author$project$GameView$noForm;
var author$project$GameView$wallOverlay = F4(
	function (wallinfo, tileWidth, tileHeight, imgBaseDir) {
		var woverlay = function () {
			var _n0 = wallinfo.mbTeleporterObject;
			if (_n0.$ === 'Just') {
				var tinfo = _n0.a;
				var _n1 = tinfo.teleporterType;
				switch (_n1.$) {
					case 'Barrel':
						return ((elm$core$String$toLower(wallinfo.orientation) === 'up') || (elm$core$String$toLower(wallinfo.orientation) === 'down')) ? A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_barrel_side.png') : A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_barrel_up.png');
					case 'BookCase':
						return ((elm$core$String$toLower(wallinfo.orientation) === 'up') || (elm$core$String$toLower(wallinfo.orientation) === 'down')) ? A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_bookcase_side.png') : A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_bookcase_up.png');
					default:
						return A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_clock_up.png');
				}
			} else {
				return author$project$GameView$noForm;
			}
		}();
		return woverlay;
	});
var author$project$GameView$tileOverlay = F4(
	function (tileWidth, tileHeight, imgBaseDir, t) {
		tileOverlay:
		while (true) {
			switch (t.$) {
				case 'Floor':
					var floorinfo = t.a;
					var _n1 = floorinfo.item;
					_n1$5:
					while (true) {
						if (_n1.$ === 'Just') {
							switch (_n1.a.$) {
								case 'Ash':
									var _n2 = _n1.a;
									return A4(author$project$GameView$floorOverlay, 'ash', tileWidth, tileHeight, imgBaseDir);
								case 'Key':
									var keyinfo = _n1.a.a;
									return A4(author$project$GameView$floorOverlay, 'key_' + keyinfo.keyColor, tileWidth, tileHeight, imgBaseDir);
								case 'Box':
									var _n3 = _n1.a;
									return A2(
										timjs$elm_collage$Collage$image,
										_Utils_Tuple2(tileWidth, tileHeight),
										imgBaseDir + '/items/box.png');
								case 'Paper':
									var paperinfo = _n1.a.a;
									return (paperinfo.id === 1) ? A2(
										timjs$elm_collage$Collage$image,
										_Utils_Tuple2(tileWidth, tileHeight),
										imgBaseDir + '/items/paper_part1.png') : ((paperinfo.id === 2) ? A2(
										timjs$elm_collage$Collage$image,
										_Utils_Tuple2(tileWidth, tileHeight),
										imgBaseDir + '/items/paper_part2.png') : A2(
										timjs$elm_collage$Collage$image,
										_Utils_Tuple2(tileWidth, tileHeight),
										imgBaseDir + '/items/paper_part3.png'));
								case 'Food':
									var fdescription = _n1.a.a;
									return (elm$core$String$toLower(fdescription) === 'bread') ? A2(
										timjs$elm_collage$Collage$image,
										_Utils_Tuple2(tileWidth, tileHeight),
										imgBaseDir + '/items/health_item.png') : A2(
										timjs$elm_collage$Collage$image,
										_Utils_Tuple2(tileWidth, tileHeight),
										imgBaseDir + '/items/box.png');
								default:
									break _n1$5;
							}
						} else {
							break _n1$5;
						}
					}
					var _n4 = floorinfo.floorDrawing;
					if (_n4.$ === 'Just') {
						var nr = _n4.a.a;
						return A4(author$project$GameView$floorOverlay, 'landingTarget', tileWidth, tileHeight, imgBaseDir);
					} else {
						return A4(author$project$GameView$floorOverlay, '', tileWidth, tileHeight, imgBaseDir);
					}
				case 'Wall':
					var wallinfo = t.a;
					return A4(author$project$GameView$wallOverlay, wallinfo, tileWidth, tileHeight, imgBaseDir);
				case 'Door':
					var doorinfo = t.a;
					return author$project$GameView$doorOverlay(doorinfo);
				case 'ConverterTile':
					var it = t.a;
					var ct = t.b;
					var $temp$tileWidth = tileWidth,
						$temp$tileHeight = tileHeight,
						$temp$imgBaseDir = imgBaseDir,
						$temp$t = it;
					tileWidth = $temp$tileWidth;
					tileHeight = $temp$tileHeight;
					imgBaseDir = $temp$imgBaseDir;
					t = $temp$t;
					continue tileOverlay;
				case 'NoTileYet':
					return author$project$GameView$notileyetOverlay;
				default:
					return author$project$GameView$notileyetOverlay;
			}
		}
	});
var author$project$Grid$getRowOrEmptyList = F2(
	function (n, grid) {
		var _n0 = A2(elm$core$Array$get, n, grid.grid);
		if (_n0.$ === 'Just') {
			var r = _n0.a;
			return elm$core$Array$toList(r);
		} else {
			return _List_Nil;
		}
	});
var author$project$Grid$getRow = F2(
	function (n, grid) {
		return (n < 0) ? _List_Nil : ((_Utils_cmp(n, grid.size.height) > -1) ? _List_Nil : A2(author$project$Grid$getRowOrEmptyList, n, grid));
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var author$project$Grid$getSubGrid = F5(
	function (minCol, maxCol, minRow, maxRow, grid) {
		var minRow_ = A2(elm$core$Basics$max, 0, minRow);
		var minCol_ = A2(elm$core$Basics$max, 0, minCol);
		var maxRow_ = A2(
			elm$core$Basics$max,
			minRow_,
			A2(elm$core$Basics$min, maxRow, grid.size.height - 1));
		var therows = A2(
			elm$core$List$map,
			function (v) {
				return A2(author$project$Grid$getRow, v, grid);
			},
			A2(elm$core$List$range, minRow_, maxRow_));
		var maxCol_ = A2(
			elm$core$Basics$max,
			minCol_,
			A2(elm$core$Basics$min, maxCol, grid.size.width - 1));
		var txtmsg = ('getSubGrid has been called with minCol ' + (elm$core$String$fromInt(minCol) + (' , with maxCol ' + (elm$core$String$fromInt(maxCol) + (' , with minRow ' + (elm$core$String$fromInt(minRow) + (' , with maxRow ' + elm$core$String$fromInt(maxRow)))))))) + (('getSubGrid has been called with minCol_ ' + (elm$core$String$fromInt(minCol_) + (' , with maxCol_ ' + (elm$core$String$fromInt(maxCol_) + (' , with minRow_ ' + (elm$core$String$fromInt(minRow_) + (' , with maxRow_ ' + elm$core$String$fromInt(maxRow_)))))))) + (' rows of the subgrid has ' + elm$core$String$fromInt(
			elm$core$List$length(therows))));
		var x_range = A2(elm$core$List$range, minCol_, maxCol_);
		var grid_nr_rows = elm$core$List$length(
			author$project$Grid$toList(grid));
		return _Utils_Tuple2(
			author$project$Grid$fromList(
				A2(
					elm$core$List$map,
					function (lrow) {
						return A2(elm$core$List$take, (maxCol_ - minCol_) + 1, lrow);
					},
					A2(
						elm$core$List$map,
						function (lrow) {
							return A2(elm$core$List$drop, minCol_, lrow);
						},
						therows))),
			txtmsg);
	});
var timjs$elm_collage$Collage$Core$Group = function (a) {
	return {$: 'Group', a: a};
};
var timjs$elm_collage$Collage$group = A2(elm$core$Basics$composeL, timjs$elm_collage$Collage$Core$collage, timjs$elm_collage$Collage$Core$Group);
var timjs$elm_collage$Collage$shift = F2(
	function (_n0, collage) {
		var dx = _n0.a;
		var dy = _n0.b;
		var _n1 = collage.shift;
		var x = _n1.a;
		var y = _n1.b;
		return _Utils_update(
			collage,
			{
				shift: _Utils_Tuple2(x + dx, y + dy)
			});
	});
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$sin = _Basics_sin;
var timjs$elm_collage$Collage$Core$apply = function (_n0) {
	var shift = _n0.shift;
	var scale = _n0.scale;
	var rotation = _n0.rotation;
	var rotated = function (_n5) {
		var x = _n5.a;
		var y = _n5.b;
		var s = elm$core$Basics$sin(rotation);
		var c = elm$core$Basics$cos(rotation);
		return _Utils_Tuple2((c * x) - (s * y), (s * x) + (c * y));
	};
	var _n1 = scale;
	var sx = _n1.a;
	var sy = _n1.b;
	var scaled = function (_n4) {
		var x = _n4.a;
		var y = _n4.b;
		return _Utils_Tuple2(sx * x, sy * y);
	};
	var _n2 = shift;
	var dx = _n2.a;
	var dy = _n2.b;
	var shifted = function (_n3) {
		var x = _n3.a;
		var y = _n3.b;
		return _Utils_Tuple2(x + dx, y + dy);
	};
	return A2(
		elm$core$Basics$composeL,
		A2(elm$core$Basics$composeL, shifted, scaled),
		rotated);
};
var timjs$elm_collage$Helpers$foldrLazy = F3(
	function (f, acc, list) {
		if (!list.b) {
			return acc;
		} else {
			var x = list.a;
			var xs = list.b;
			return A2(
				f,
				x,
				function (_n1) {
					return A3(timjs$elm_collage$Helpers$foldrLazy, f, acc, xs);
				});
		}
	});
var timjs$elm_collage$Helpers$orLazy = F2(
	function (ma, fmb) {
		if (ma.$ === 'Nothing') {
			return fmb(_Utils_Tuple0);
		} else {
			return ma;
		}
	});
var timjs$elm_collage$Collage$Layout$locate = F3(
	function (string, anchor, _this) {
		var recurse = function (col) {
			var match = A2(
				elm$core$Maybe$withDefault,
				false,
				A2(
					elm$core$Maybe$map,
					elm$core$Basics$eq(string),
					col.name));
			var firstOf = A2(
				timjs$elm_collage$Helpers$foldrLazy,
				A2(elm$core$Basics$composeL, timjs$elm_collage$Helpers$orLazy, recurse),
				elm$core$Maybe$Nothing);
			return match ? elm$core$Maybe$Just(
				anchor(col)) : A2(
				elm$core$Maybe$map,
				timjs$elm_collage$Collage$Core$apply(col),
				function () {
					var _n0 = col.basic;
					switch (_n0.$) {
						case 'Group':
							var cols = _n0.a;
							return firstOf(cols);
						case 'Subcollage':
							var fore = _n0.a;
							var back = _n0.b;
							return firstOf(
								_List_fromArray(
									[fore, back]));
						default:
							return elm$core$Maybe$Nothing;
					}
				}());
		};
		return recurse(_this);
	});
var timjs$elm_collage$Collage$Layout$name = F2(
	function (string, col) {
		return _Utils_update(
			col,
			{
				name: elm$core$Maybe$Just(string)
			});
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$List$unzip = function (pairs) {
	var step = F2(
		function (_n0, _n1) {
			var x = _n0.a;
			var y = _n0.b;
			var xs = _n1.a;
			var ys = _n1.b;
			return _Utils_Tuple2(
				A2(elm$core$List$cons, x, xs),
				A2(elm$core$List$cons, y, ys));
		});
	return A3(
		elm$core$List$foldr,
		step,
		_Utils_Tuple2(_List_Nil, _List_Nil),
		pairs);
};
var timjs$elm_collage$Collage$Core$Path = F2(
	function (a, b) {
		return {$: 'Path', a: a, b: b};
	});
var timjs$elm_collage$Collage$Layout$handlePoints = function (thickness) {
	var thicken = function (_n0) {
		var x = _n0.a;
		var y = _n0.b;
		var t = thickness / 2;
		return _Utils_Tuple2(
			(x < 0) ? (x - t) : (x + t),
			(y < 0) ? (y - t) : (y + t));
	};
	return elm$core$List$map(thicken);
};
var timjs$elm_collage$Collage$Layout$handleBox = F2(
	function (thickness, _n0) {
		var w = _n0.a;
		var h = _n0.b;
		var y = h / 2;
		var x = w / 2;
		return A2(
			timjs$elm_collage$Collage$Layout$handlePoints,
			thickness,
			_List_fromArray(
				[
					_Utils_Tuple2(-x, -y),
					_Utils_Tuple2(x, -y),
					_Utils_Tuple2(x, y),
					_Utils_Tuple2(-x, y)
				]));
	});
var timjs$elm_collage$Collage$Layout$unpack = function (_n0) {
	var toTop = _n0.toTop;
	var toBottom = _n0.toBottom;
	var toRight = _n0.toRight;
	var toLeft = _n0.toLeft;
	return _List_fromArray(
		[
			_Utils_Tuple2(-toLeft, -toBottom),
			_Utils_Tuple2(toRight, -toBottom),
			_Utils_Tuple2(toRight, toTop),
			_Utils_Tuple2(-toLeft, toTop)
		]);
};
var timjs$elm_collage$Collage$Layout$distances = function (col) {
	var points = timjs$elm_collage$Collage$Layout$handleBasic(col.basic);
	var _n8 = elm$core$List$unzip(
		A2(
			elm$core$List$map,
			timjs$elm_collage$Collage$Core$apply(col),
			points));
	var xs = _n8.a;
	var ys = _n8.b;
	return {
		toBottom: -A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$minimum(ys)),
		toLeft: -A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$minimum(xs)),
		toRight: A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$maximum(xs)),
		toTop: A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$maximum(ys))
	};
};
var timjs$elm_collage$Collage$Layout$handleBasic = function (basic) {
	handleBasic:
	while (true) {
		switch (basic.$) {
			case 'Shape':
				switch (basic.b.$) {
					case 'Circle':
						var _n1 = basic.a;
						var thickness = _n1.b.thickness;
						var r = basic.b.a;
						var d = 2 * r;
						return A2(
							timjs$elm_collage$Collage$Layout$handleBox,
							thickness,
							_Utils_Tuple2(d, d));
					case 'Ellipse':
						var _n2 = basic.a;
						var thickness = _n2.b.thickness;
						var _n3 = basic.b;
						var rx = _n3.a;
						var ry = _n3.b;
						return A2(
							timjs$elm_collage$Collage$Layout$handleBox,
							thickness,
							_Utils_Tuple2(2 * rx, 2 * ry));
					case 'Rectangle':
						var _n4 = basic.a;
						var thickness = _n4.b.thickness;
						var _n5 = basic.b;
						var w = _n5.a;
						var h = _n5.b;
						return A2(
							timjs$elm_collage$Collage$Layout$handleBox,
							thickness,
							_Utils_Tuple2(w, h));
					case 'Polygon':
						var _n6 = basic.a;
						var thickness = _n6.b.thickness;
						var ps = basic.b.a;
						return A2(timjs$elm_collage$Collage$Layout$handlePoints, thickness, ps);
					default:
						var _n7 = basic.a;
						var line = _n7.b;
						var path = basic.b.a;
						var $temp$basic = A2(timjs$elm_collage$Collage$Core$Path, line, path);
						basic = $temp$basic;
						continue handleBasic;
				}
			case 'Path':
				var thickness = basic.a.thickness;
				var cap = basic.a.cap;
				var ps = basic.b.a;
				return A2(
					timjs$elm_collage$Collage$Layout$handlePoints,
					_Utils_eq(cap, timjs$elm_collage$Collage$Flat) ? 0 : thickness,
					ps);
			case 'Text':
				var dims = basic.a;
				return A2(timjs$elm_collage$Collage$Layout$handleBox, 0, dims);
			case 'Image':
				var dims = basic.a;
				return A2(timjs$elm_collage$Collage$Layout$handleBox, 0, dims);
			case 'Html':
				var dims = basic.a;
				return A2(timjs$elm_collage$Collage$Layout$handleBox, 0, dims);
			case 'Group':
				var cols = basic.a;
				return A2(
					timjs$elm_collage$Collage$Layout$handlePoints,
					0,
					elm$core$List$concat(
						A2(
							elm$core$List$map,
							A2(elm$core$Basics$composeR, timjs$elm_collage$Collage$Layout$distances, timjs$elm_collage$Collage$Layout$unpack),
							cols)));
			default:
				var back = basic.b;
				return A2(
					timjs$elm_collage$Collage$Layout$handlePoints,
					0,
					timjs$elm_collage$Collage$Layout$unpack(
						timjs$elm_collage$Collage$Layout$distances(back)));
		}
	}
};
var timjs$elm_collage$Collage$Layout$topLeft = function (col) {
	var _n0 = timjs$elm_collage$Collage$Layout$distances(col);
	var toLeft = _n0.toLeft;
	var toTop = _n0.toTop;
	return _Utils_Tuple2(-toLeft, toTop);
};
var author$project$GameView$mainScreen = function (model) {
	var emptyg = timjs$elm_collage$Collage$group(_List_Nil);
	var _n0 = (!_Utils_eq(model.currentDisplay, author$project$GameModel$DisplayMap)) ? _Utils_Tuple2(model.viewport_topleft_x, model.viewport_topleft_y) : _Utils_Tuple2(0, 0);
	var viewport_topleft_x = _n0.a;
	var viewport_topleft_y = _n0.b;
	var _n1 = (!_Utils_eq(model.currentDisplay, author$project$GameModel$DisplayMap)) ? A5(author$project$Grid$getSubGrid, model.viewport_topleft_x, (model.viewport_topleft_x + model.window_width) - 1, model.viewport_topleft_y, (model.viewport_topleft_y + model.window_height) - 1, model.level) : _Utils_Tuple2(model.level, '');
	var subgrid = _n1.a;
	var txtmsg = _n1.b;
	var _n2 = _Utils_Tuple2(subgrid.size.width, subgrid.size.height);
	var wwidth = _n2.a;
	var wheight = _n2.b;
	var mkLayer = F2(
		function (agrid, mapRow) {
			var rows = A3(
				elm$core$List$map2,
				F2(
					function (v1, v2) {
						return _Utils_Tuple2(v1, v2);
					}),
				elm$core$List$reverse(
					A2(elm$core$List$range, 0, wheight - 1)),
				agrid);
			var forms = A2(elm$core$List$concatMap, mapRow, rows);
			return timjs$elm_collage$Collage$group(forms);
		});
	var yOffset = function (n) {
		return ((n - viewport_topleft_y) - (wheight / 2)) * model.tileHeight;
	};
	var yOffset_for_subgrid = function (n) {
		return (n - (wheight / 2)) * model.tileHeight;
	};
	var xOffset = function (n) {
		return ((n - viewport_topleft_x) - (wwidth / 2)) * model.tileWidth;
	};
	var location = function (r) {
		return _Utils_Tuple2(
			xOffset(r.location.x),
			0 - yOffset(r.location.y + 1));
	};
	var fightingCharacter_ = function () {
		var relevantFightingCharactersDict = A2(
			elm$core$Dict$filter,
			F2(
				function (fcharId, fightChar) {
					return _Utils_eq(fightChar.floorId, model.currentFloorId) && (((_Utils_cmp(fightChar.location.x, viewport_topleft_x) > -1) && (_Utils_cmp(fightChar.location.x - viewport_topleft_x, model.window_width) < 0)) && ((_Utils_cmp(fightChar.location.y, viewport_topleft_y) > -1) && (_Utils_cmp(fightChar.location.y - viewport_topleft_y, model.window_height) < 0)));
				}),
			model.fightingCharacters);
		var mkfightingCharacter = F2(
			function (fcharId, anfightingCharacter) {
				return A2(
					timjs$elm_collage$Collage$shift,
					location(anfightingCharacter),
					A6(
						author$project$GameView$fightingCharacterView,
						anfightingCharacter,
						model.showBlood,
						A2(author$project$GameModel$getGridTileVisibility, anfightingCharacter.location, model.level),
						model.tileWidth,
						model.tileHeight,
						author$project$GameView$getImgBaseDir(model)));
			});
		return timjs$elm_collage$Collage$group(
			elm$core$Dict$values(
				A2(elm$core$Dict$map, mkfightingCharacter, relevantFightingCharactersDict)));
	}();
	var eg = timjs$elm_collage$Collage$group(
		_List_fromArray(
			[fightingCharacter_]));
	var otherCharacters_ = function () {
		var relevantOtherCharsDict = A2(
			elm$core$Dict$filter,
			F2(
				function (charId, _char) {
					return _Utils_eq(_char.floorId, model.currentFloorId) && (((_Utils_cmp(_char.location.x, viewport_topleft_x) > -1) && (_Utils_cmp(_char.location.x - viewport_topleft_x, model.window_width) < 0)) && ((_Utils_cmp(_char.location.y, viewport_topleft_y) > -1) && (_Utils_cmp(_char.location.y - viewport_topleft_y, model.window_height) < 0)));
				}),
			model.otherCharacters);
		var mkOtherChar = F2(
			function (ch_id, achar) {
				return A2(
					timjs$elm_collage$Collage$shift,
					location(achar),
					A6(
						author$project$GameView$otherCharacterView,
						achar,
						model.showBlood,
						A2(author$project$GameModel$getGridTileVisibility, achar.location, model.level),
						model.tileWidth,
						model.tileHeight,
						author$project$GameView$getImgBaseDir(model)));
			});
		return timjs$elm_collage$Collage$group(
			elm$core$Dict$values(
				A2(elm$core$Dict$map, mkOtherChar, relevantOtherCharsDict)));
	}();
	var ocg = timjs$elm_collage$Collage$group(
		_List_fromArray(
			[otherCharacters_]));
	var player_ = A2(
		timjs$elm_collage$Collage$shift,
		location(model.player),
		A5(
			author$project$GameView$playerImg,
			model.player,
			author$project$Tile$Visible,
			model.tileWidth,
			model.tileHeight,
			author$project$GameView$getImgBaseDir(model)));
	var pg = timjs$elm_collage$Collage$group(
		_List_fromArray(
			[
				A2(
				timjs$elm_collage$Collage$shift,
				_Utils_Tuple2(0, 0),
				player_)
			]));
	var xOffset_for_subgrid = function (n) {
		return (n - (wwidth / 2)) * model.tileWidth;
	};
	var row = F2(
		function (mkTile, _n5) {
			var n = _n5.a;
			var tiles = _n5.b;
			var tiles_ = A3(
				elm$core$List$map2,
				F2(
					function (v1, v2) {
						return _Utils_Tuple2(v1, v2);
					}),
				A2(elm$core$List$range, 0, wwidth - 1),
				tiles);
			var makeTile = function (_n4) {
				var n_ = _n4.a;
				var t = _n4.b;
				return A2(
					timjs$elm_collage$Collage$shift,
					_Utils_Tuple2(
						xOffset_for_subgrid(n_),
						yOffset_for_subgrid(n)),
					mkTile(t));
			};
			return A2(elm$core$List$map, makeTile, tiles_);
		});
	var bg = A2(
		timjs$elm_collage$Collage$Layout$name,
		'background',
		timjs$elm_collage$Collage$group(
			_List_fromArray(
				[
					A2(
					mkLayer,
					author$project$Grid$toList(subgrid),
					row(
						A3(
							author$project$GameView$tileOverlay,
							model.tileWidth,
							model.tileHeight,
							author$project$GameView$getImgBaseDir(model)))),
					A2(
					mkLayer,
					author$project$Grid$toList(subgrid),
					row(
						A4(
							author$project$GameView$tile,
							model.currentFloorId,
							model.tileWidth,
							model.tileHeight,
							author$project$GameView$getImgBaseDir(model))))
				])));
	var pos = A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(-100000, -100000),
		A3(timjs$elm_collage$Collage$Layout$locate, 'background', timjs$elm_collage$Collage$Layout$topLeft, bg));
	var visibilitySubGrid = A2(
		author$project$Grid$map,
		function (t) {
			return author$project$Tile$getTileVisibility(t);
		},
		subgrid);
	var fogger = A2(
		mkLayer,
		author$project$Grid$toList(visibilitySubGrid),
		row(
			A3(author$project$GameView$fogT, model.tileWidth, model.tileHeight, model.currentDisplay)));
	var _n3 = _Utils_Tuple2(wwidth * model.tileWidth, wheight * model.tileHeight);
	var w = _n3.a;
	var h = _n3.b;
	return A2(
		timjs$elm_collage$Collage$Layout$name,
		'mainScreen',
		timjs$elm_collage$Collage$group(
			_List_fromArray(
				[
					fogger,
					A2(
					timjs$elm_collage$Collage$shift,
					_Utils_Tuple2(0, 0),
					pg),
					eg,
					ocg,
					bg
				])));
};
var elm$core$String$fromFloat = _String_fromNumber;
var the_sett$elm_color$Color$white = A4(the_sett$elm_color$Color$rgba, 255, 255, 255, 1);
var timjs$elm_collage$Collage$Core$Text = F2(
	function (a, b) {
		return {$: 'Text', a: a, b: b};
	});
var timjs$elm_collage$Collage$Text$height = function (_n0) {
	var sty = _n0.a;
	return sty.size;
};
var elm$core$String$length = _String_length;
var timjs$elm_collage$Collage$Text$width = function (text) {
	var sty = text.a;
	var str = text.b;
	return (timjs$elm_collage$Collage$Text$height(text) / 2) * elm$core$String$length(str);
};
var timjs$elm_collage$Collage$rendered = function (text) {
	return timjs$elm_collage$Collage$Core$collage(
		A2(
			timjs$elm_collage$Collage$Core$Text,
			_Utils_Tuple2(
				timjs$elm_collage$Collage$Text$width(text),
				timjs$elm_collage$Collage$Text$height(text)),
			text));
};
var timjs$elm_collage$Collage$Core$Chunk = F2(
	function (a, b) {
		return {$: 'Chunk', a: a, b: b};
	});
var timjs$elm_collage$Collage$Text$color = F2(
	function (newcolor, _n0) {
		var sty = _n0.a;
		var str = _n0.b;
		return A2(
			timjs$elm_collage$Collage$Core$Chunk,
			_Utils_update(
				sty,
				{color: newcolor}),
			str);
	});
var timjs$elm_collage$Collage$Text$None = {$: 'None'};
var timjs$elm_collage$Collage$Text$Regular = {$: 'Regular'};
var timjs$elm_collage$Collage$Text$Sansserif = {$: 'Sansserif'};
var timjs$elm_collage$Collage$Text$Upright = {$: 'Upright'};
var timjs$elm_collage$Collage$Text$normal = 16;
var timjs$elm_collage$Collage$Text$defaultStyle = {color: the_sett$elm_color$Color$black, line: timjs$elm_collage$Collage$Text$None, shape: timjs$elm_collage$Collage$Text$Upright, size: timjs$elm_collage$Collage$Text$normal, typeface: timjs$elm_collage$Collage$Text$Sansserif, weight: timjs$elm_collage$Collage$Text$Regular};
var timjs$elm_collage$Collage$Text$fromString = timjs$elm_collage$Collage$Core$Chunk(timjs$elm_collage$Collage$Text$defaultStyle);
var author$project$GameView$sidebar = F2(
	function (model, pos) {
		var x = 5;
		var theColor2 = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$red);
		var theColor = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$white);
		var barDebugMode = timjs$elm_collage$Collage$group(
			A2(
				elm$core$List$indexedMap,
				F2(
					function (i, elem) {
						return A2(
							timjs$elm_collage$Collage$shift,
							_Utils_Tuple2(-100, 200 - (i * 25)),
							elem);
					}),
				_List_fromArray(
					[
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(model.player.textAvatar + (' : ' + model.player.name)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Health: ' + elm$core$String$fromInt(model.player.health)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Energy: ' + elm$core$String$fromInt(model.player.energy)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'mana: ' + elm$core$String$fromInt(model.player.mana)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Hunger: ' + elm$core$String$fromInt(model.player.hunger)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Stealth: ' + (elm$core$String$fromInt(model.player.stealth) + '%')))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Armor: ' + elm$core$String$fromInt(model.player.armor)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Protection: ' + (elm$core$String$fromInt(model.player.protection) + '%')))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Coordination: ' + (elm$core$String$fromInt(model.player.coordination) + '%')))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Power: ' + elm$core$String$fromInt(model.player.power)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Initiative: ' + elm$core$String$fromInt(model.player.initiative)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'viewport_topleft_x: ' + elm$core$String$fromInt(model.viewport_topleft_x)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'viewport_topleft_y: ' + elm$core$String$fromInt(model.viewport_topleft_y)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'current_player_x : ' + elm$core$String$fromInt(model.player.location.x)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'current_player_y : ' + elm$core$String$fromInt(model.player.location.y)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'wall percentage : ' + elm$core$String$fromFloat(
									A2(elm$core$Maybe$withDefault, 0, model.wallPercentage)))))
					])));
		var bar = timjs$elm_collage$Collage$group(
			A2(
				elm$core$List$indexedMap,
				F2(
					function (i, elem) {
						return A2(
							timjs$elm_collage$Collage$shift,
							_Utils_Tuple2(-100, 200 - (i * 25)),
							elem);
					}),
				_List_fromArray(
					[
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(model.player.textAvatar + (' : ' + model.player.name)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Health: ' + elm$core$String$fromInt(model.player.health)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'mana: ' + elm$core$String$fromInt(model.player.mana))))
					])));
		return model.debugMode ? barDebugMode : bar;
	});
var author$project$GameView$viewGameOverOverlay = function (completed) {
	var theColor2 = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$red);
	var theColor = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$white);
	var completionMsg = completed ? 'You have completed all your quests and have become an enlightened version of yourself ' : '';
	return timjs$elm_collage$Collage$group(
		A2(
			elm$core$List$indexedMap,
			F2(
				function (i, elem) {
					return A2(
						timjs$elm_collage$Collage$shift,
						_Utils_Tuple2(-100, 200 - (i * 25)),
						elem);
				}),
			_List_fromArray(
				[
					timjs$elm_collage$Collage$rendered(
					theColor(
						timjs$elm_collage$Collage$Text$fromString('GAME OVER'))),
					timjs$elm_collage$Collage$rendered(
					theColor(
						timjs$elm_collage$Collage$Text$fromString(completionMsg)))
				])));
};
var author$project$GameView$display = function (model) {
	var pos = A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(-100000, -100000),
		A3(
			timjs$elm_collage$Collage$Layout$locate,
			'mainScreen',
			timjs$elm_collage$Collage$Layout$topLeft,
			author$project$GameView$mainScreen(model)));
	return timjs$elm_collage$Collage$group(
		_List_fromArray(
			[
				model.displayStatsOverlay ? A2(author$project$GameView$sidebar, model, pos) : author$project$GameView$noForm,
				_Utils_eq(model.currentDisplay, author$project$GameModel$DisplayGameOver) ? author$project$GameView$viewGameOverOverlay(false) : (_Utils_eq(model.currentDisplay, author$project$GameModel$DisplayGameCompleted) ? author$project$GameView$viewGameOverOverlay(true) : author$project$GameView$noForm),
				author$project$GameView$mainScreen(model)
			]));
};
var author$project$Thorns$Types$DoActivate = F2(
	function (a, b) {
		return {$: 'DoActivate', a: a, b: b};
	});
var author$project$Thorns$Types$MouseOut = F2(
	function (a, b) {
		return {$: 'MouseOut', a: a, b: b};
	});
var author$project$Thorns$Types$MouseOver = F2(
	function (a, b) {
		return {$: 'MouseOver', a: a, b: b};
	});
var author$project$Thorns$View$getImgBaseDir = function (model) {
	return A2(elm$core$Maybe$withDefault, './img', model.imgBaseDir);
};
var author$project$Thorns$ThornGrid$thornToString = function (thorn) {
	switch (thorn.$) {
		case 'COMMON_ATTACK':
			return '+ ';
		case 'OPPONENT_COMMON_ATTACK':
			return '- ';
		case 'ENLIGHTENMENT_SPELL':
			return '* ';
		default:
			return '/ ';
	}
};
var author$project$Thorns$View$mbthornToString = function (mbthorn) {
	if (mbthorn.$ === 'Nothing') {
		return 'nothing';
	} else {
		var thorn = mbthorn.a;
		return author$project$Thorns$ThornGrid$thornToString(thorn);
	}
};
var author$project$Thorns$View$rowToListStringIndex = function (lmbthorns) {
	return A2(
		elm$core$List$indexedMap,
		F2(
			function (i, mbt) {
				return _Utils_Tuple2(
					author$project$Thorns$View$mbthornToString(mbt),
					i);
			}),
		lmbthorns);
};
var author$project$Beings$Beings$DecreaseIndexOfLight = {$: 'DecreaseIndexOfLight'};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$div = _VirtualDom_node('div');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var author$project$Thorns$View$viewHealthReport = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text(
						'Your Health : ' + elm$core$String$fromInt(model.player.health)),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						elm$html$Html$text(
						'Your Mana : ' + elm$core$String$fromInt(model.player.mana))
					])),
				function () {
				var _n0 = model.opponent;
				if (_n0.$ === 'Just') {
					if (_n0.a.$ === 'FightingCharacter') {
						var opponent = _n0.a.a;
						return A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									A2(elm$html$Html$br, _List_Nil, _List_Nil),
									elm$html$Html$text(
									'Your Opponent\'s health : ' + elm$core$String$fromInt(opponent.health)),
									A2(elm$html$Html$br, _List_Nil, _List_Nil),
									(_Utils_eq(model.player.enlSpellEffect, author$project$Beings$Beings$IncreaseIndexOfLight) || _Utils_eq(model.player.enlSpellEffect, author$project$Beings$Beings$DecreaseIndexOfLight)) ? elm$html$Html$text(
									'Your Opponent\'s Index of Light : ' + elm$core$String$fromInt(opponent.indexOfLight)) : elm$html$Html$text('')
								]));
					} else {
						var opponent = _n0.a.a;
						return A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text(
									'Your Opponent\'s health : ' + elm$core$String$fromInt(opponent.health)),
									(_Utils_eq(model.player.enlSpellEffect, author$project$Beings$Beings$IncreaseIndexOfLight) || _Utils_eq(model.player.enlSpellEffect, author$project$Beings$Beings$DecreaseIndexOfLight)) ? elm$html$Html$text(
									'Your Opponent\'s Index of Light : ' + elm$core$String$fromInt(opponent.indexOfLight)) : elm$html$Html$text('')
								]));
					}
				} else {
					return A2(elm$html$Html$div, _List_Nil, _List_Nil);
				}
			}()
			]));
};
var author$project$Thorns$View$viewSuggestion = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text(
				A2(elm$core$Maybe$withDefault, '', model.helpStr))
			]));
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$h3 = _VirtualDom_node('h3');
var elm$html$Html$img = _VirtualDom_node('img');
var elm$html$Html$span = _VirtualDom_node('span');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$align = elm$html$Html$Attributes$stringProperty('align');
var elm$html$Html$Attributes$height = function (n) {
	return A2(
		_VirtualDom_attribute,
		'height',
		elm$core$String$fromInt(n));
};
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var elm$html$Html$Attributes$style = elm$virtual_dom$VirtualDom$style;
var elm$html$Html$Attributes$width = function (n) {
	return A2(
		_VirtualDom_attribute,
		'width',
		elm$core$String$fromInt(n));
};
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseOut = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseout',
		elm$json$Json$Decode$succeed(msg));
};
var elm$html$Html$Events$onMouseOver = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'mouseover',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$Thorns$View$view = function (model) {
	var opponentSpecies = function (oppo) {
		if (oppo.$ === 'FightingCharacter') {
			var fchar = oppo.a;
			return fchar.species;
		} else {
			var ochar = oppo.a;
			return ochar.species;
		}
	};
	var lrownrs = A2(
		elm$core$List$range,
		0,
		function (g) {
			return g.size.height;
		}(model.gridInteractionOptions));
	var lrows = A2(
		elm$core$List$map,
		function (nr) {
			return A2(author$project$Grid$getRow, nr, model.gridInteractionOptions);
		},
		lrownrs);
	var lcoords = author$project$Grid$toCoordinates(model.gridInteractionOptions);
	var imgBaseDir = author$project$Thorns$View$getImgBaseDir(model);
	var getAttr = F2(
		function (rownr, colnr) {
			return A2(
				elm$core$List$member,
				A2(author$project$Grid$Coordinate, colnr, rownr),
				model.currentSegment) ? _Utils_Tuple2(
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'font-weight', 'bold'),
						A2(elm$html$Html$Attributes$style, 'text-decoration', 'none !important')
					]),
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'color', '#DD0000'),
						A2(elm$html$Html$Attributes$style, 'text-decoration', 'none !important')
					])) : _Utils_Tuple2(
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'font-weight', 'regular')
					]),
				_List_fromArray(
					[
						A2(elm$html$Html$Attributes$style, 'color', 'black')
					]));
		});
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$align('center')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$h3,
						_List_Nil,
						_List_fromArray(
							[
								elm$html$Html$text('How about a nice game of thorns ?')
							])),
						A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$html$Html$span,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										elm$html$Html$img,
										_List_fromArray(
											[
												elm$html$Html$Attributes$width(64),
												elm$html$Html$Attributes$height(64),
												elm$html$Html$Attributes$src(imgBaseDir + '/pc/right.png')
											]),
										_List_Nil)
									])),
								function () {
								var _n0 = model.opponent;
								if (_n0.$ === 'Just') {
									var oppon = _n0.a;
									return A2(
										elm$html$Html$span,
										_List_Nil,
										_List_fromArray(
											[
												A2(
												elm$html$Html$img,
												_List_fromArray(
													[
														elm$html$Html$Attributes$width(50),
														elm$html$Html$Attributes$height(50),
														elm$html$Html$Attributes$src(
														(imgBaseDir + '/characters/') + (elm$core$String$toLower(
															opponentSpecies(oppon)) + '.png'))
													]),
												_List_Nil)
											]));
								} else {
									return A2(elm$html$Html$span, _List_Nil, _List_Nil);
								}
							}(),
								A2(
								elm$html$Html$div,
								_List_Nil,
								A2(
									elm$core$List$indexedMap,
									F2(
										function (rownr, row) {
											return A2(
												elm$html$Html$div,
												_List_fromArray(
													[
														A2(elm$html$Html$Attributes$style, 'padding', '1em'),
														A2(elm$html$Html$Attributes$style, 'font-family', 'monospace'),
														A2(elm$html$Html$Attributes$style, 'font-size', '1em')
													]),
												A2(
													elm$core$List$map,
													function (_n1) {
														var str = _n1.a;
														var colnr = _n1.b;
														return A2(
															elm$html$Html$span,
															A2(getAttr, rownr, colnr).a,
															_List_fromArray(
																[
																	A2(
																	elm$html$Html$a,
																	_Utils_ap(
																		A2(getAttr, rownr, colnr).b,
																		_List_fromArray(
																			[
																				elm$html$Html$Events$onMouseOut(
																				A2(author$project$Thorns$Types$MouseOut, rownr, colnr)),
																				elm$html$Html$Events$onMouseOver(
																				A2(author$project$Thorns$Types$MouseOver, rownr, colnr)),
																				elm$html$Html$Events$onClick(
																				A2(author$project$Thorns$Types$DoActivate, rownr, colnr))
																			])),
																	_List_fromArray(
																		[
																			elm$html$Html$text(str)
																		]))
																]));
													},
													author$project$Thorns$View$rowToListStringIndex(row)));
										}),
									lrows))
							]))
					])),
				author$project$Thorns$View$viewSuggestion(model),
				author$project$Thorns$View$viewHealthReport(model),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil)
			]));
};
var elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var elm$html$Html$map = elm$virtual_dom$VirtualDom$map;
var author$project$GameView$viewGameOfThorns = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$map,
				author$project$GameUpdate$ThornsMsg,
				author$project$Thorns$View$view(model.gameOfThornsModel))
			]));
};
var author$project$GameView$viewHelpMode = function (model) {
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$align('center')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text('Help Screen')
					])),
				elm$html$Html$text('Castle of Elm Tribulations is a minimalistic Rogue like game , inspired by Castle of Elm , Atic Atac , Roguelike in Elm  , Sleeping Beauty\'s Game of Thorns , ... '),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('Find your way through the Caverns, Basement , The Ground Floor , First Floor and the Attic , pick up the three pieces of paper with the codes to unlock the striped door and move towards enlightenment !!!'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('Use Arrow keys to move '),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('U to pick up items'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('I for inventory'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('S for Stats'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('E for Opponent Report '),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('and H for Help'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('Press H to leave Help Screen')
			]));
};
var author$project$Item$itemToImgSrc = function (item) {
	switch (item.$) {
		case 'Key':
			var keyInfo = item.a;
			return '/items/key_' + (keyInfo.keyColor + '_inventory.png');
		case 'Paper':
			var paperInfo = item.a;
			return '/items/paper_part' + (elm$core$String$fromInt(paperInfo.id) + '.png');
		default:
			return '';
	}
};
var elm$html$Html$Attributes$size = function (n) {
	return A2(
		_VirtualDom_attribute,
		'size',
		elm$core$String$fromInt(n));
};
var author$project$GameView$viewInventory = function (model) {
	var top = A2(
		elm$html$Html$h3,
		_List_Nil,
		_List_fromArray(
			[
				elm$html$Html$text('Inventory : ')
			]));
	var thelist = A2(
		elm$html$Html$div,
		_List_Nil,
		A2(
			elm$core$List$concatMap,
			function (it) {
				return _List_fromArray(
					[
						A2(
						elm$html$Html$a,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$html$Html$img,
								_List_fromArray(
									[
										elm$html$Html$Attributes$size(640),
										elm$html$Html$Attributes$src(
										_Utils_ap(
											author$project$GameView$getImgBaseDir(model),
											author$project$Item$itemToImgSrc(it)))
									]),
								_List_Nil)
							])),
						A2(elm$html$Html$br, _List_Nil, _List_Nil)
					]);
			},
			elm$core$Dict$values(model.player.inventory)));
	var theColor = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$white);
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$align('center')
			]),
		_List_fromArray(
			[
				top,
				thelist,
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('Press I to leave Inventory')
			]));
};
var author$project$GameView$viewOpponentReport = function (model) {
	var fileStr = function (fightChar) {
		return (_Utils_cmp(fightChar.indexOfLight, fightChar.indexOfLightMax) > -1) ? (author$project$GameView$getImgBaseDir(model) + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '_enlightened.png'))) : ((fightChar.health > 0) ? (author$project$GameView$getImgBaseDir(model) + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '.png'))) : (((fightChar.health <= 0) && model.showBlood) ? (author$project$GameView$getImgBaseDir(model) + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '_dead_blood.png'))) : (author$project$GameView$getImgBaseDir(model) + ('/characters/' + (elm$core$String$toLower(fightChar.species) + '_dead.png')))));
	};
	var fcharLine = function (fightChar) {
		return _List_fromArray(
			[
				A2(
				elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$img,
						_List_fromArray(
							[
								elm$html$Html$Attributes$width(50),
								elm$html$Html$Attributes$height(50),
								elm$html$Html$Attributes$src(
								fileStr(fightChar))
							]),
						_List_Nil)
					])),
				A2(
				elm$html$Html$span,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text(
						'    ,    health : ' + (elm$core$String$fromInt(fightChar.health) + ('  ,     IndexOfLight : ' + elm$core$String$fromInt(fightChar.indexOfLight)))),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil)
					]))
			]);
	};
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$align('center')
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text('Opponent Report :')
					])),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(
				elm$html$Html$div,
				_List_Nil,
				A2(
					elm$core$List$concatMap,
					function (fightChar_) {
						return fcharLine(fightChar_);
					},
					elm$core$Dict$values(model.fightingCharacters))),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('Press E to leave Opponent Report')
			]));
};
var author$project$GameUpdate$StartGameNr = function (a) {
	return {$: 'StartGameNr', a: a};
};
var author$project$GameView$viewStartMenuChoices = F2(
	function (model, imgBaseDir) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$align('center')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$h3,
							_List_Nil,
							_List_fromArray(
								[
									A2(
									elm$html$Html$a,
									_List_fromArray(
										[
											elm$html$Html$Events$onClick(
											author$project$GameUpdate$StartGameNr(2))
										]),
									_List_fromArray(
										[
											elm$html$Html$text('Start - Castle of Elm Tribulations')
										])),
									A2(elm$html$Html$br, _List_Nil, _List_Nil),
									A2(
									elm$html$Html$a,
									_List_fromArray(
										[
											elm$html$Html$Events$onClick(
											author$project$GameUpdate$StartGameNr(2))
										]),
									_List_fromArray(
										[
											A2(
											elm$html$Html$img,
											_List_fromArray(
												[
													elm$html$Html$Attributes$src(imgBaseDir + '/game/casteleOfElmTribulations_.png')
												]),
											_List_Nil)
										]))
								]))
						])),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(elm$html$Html$br, _List_Nil, _List_Nil)
				]));
	});
var timjs$elm_collage$Collage$opposite = function (_n0) {
	var x = _n0.a;
	var y = _n0.b;
	return _Utils_Tuple2(-x, -y);
};
var timjs$elm_collage$Collage$Layout$align = F2(
	function (anchor, col) {
		return A2(
			timjs$elm_collage$Collage$shift,
			timjs$elm_collage$Collage$opposite(
				anchor(col)),
			col);
	});
var timjs$elm_collage$Collage$Layout$height = function (col) {
	var _n0 = timjs$elm_collage$Collage$Layout$distances(col);
	var toTop = _n0.toTop;
	var toBottom = _n0.toBottom;
	return toTop + toBottom;
};
var timjs$elm_collage$Collage$Layout$width = function (col) {
	var _n0 = timjs$elm_collage$Collage$Layout$distances(col);
	var toLeft = _n0.toLeft;
	var toRight = _n0.toRight;
	return toLeft + toRight;
};
var elm$svg$Svg$trustedNode = _VirtualDom_nodeNS('http://www.w3.org/2000/svg');
var elm$svg$Svg$svg = elm$svg$Svg$trustedNode('svg');
var elm$svg$Svg$Attributes$height = _VirtualDom_attribute('height');
var elm$svg$Svg$Attributes$version = _VirtualDom_attribute('version');
var elm$svg$Svg$Attributes$width = _VirtualDom_attribute('width');
var elm$svg$Svg$circle = elm$svg$Svg$trustedNode('circle');
var elm$svg$Svg$ellipse = elm$svg$Svg$trustedNode('ellipse');
var elm$svg$Svg$foreignObject = elm$svg$Svg$trustedNode('foreignObject');
var elm$svg$Svg$g = elm$svg$Svg$trustedNode('g');
var elm$svg$Svg$image = elm$svg$Svg$trustedNode('image');
var elm$svg$Svg$polygon = elm$svg$Svg$trustedNode('polygon');
var elm$svg$Svg$polyline = elm$svg$Svg$trustedNode('polyline');
var elm$svg$Svg$rect = elm$svg$Svg$trustedNode('rect');
var elm$svg$Svg$text = elm$virtual_dom$VirtualDom$text;
var elm$svg$Svg$text_ = elm$svg$Svg$trustedNode('text');
var elm$svg$Svg$Attributes$id = _VirtualDom_attribute('id');
var elm$svg$Svg$Attributes$points = _VirtualDom_attribute('points');
var elm$svg$Svg$Attributes$r = _VirtualDom_attribute('r');
var elm$svg$Svg$Attributes$rx = _VirtualDom_attribute('rx');
var elm$svg$Svg$Attributes$ry = _VirtualDom_attribute('ry');
var elm$svg$Svg$Attributes$xlinkHref = function (value) {
	return A3(
		_VirtualDom_attributeNS,
		'http://www.w3.org/1999/xlink',
		'xlink:href',
		_VirtualDom_noJavaScriptUri(value));
};
var elm$svg$Svg$Attributes$dominantBaseline = _VirtualDom_attribute('dominant-baseline');
var elm$svg$Svg$Attributes$fill = _VirtualDom_attribute('fill');
var elm$svg$Svg$Attributes$fillOpacity = _VirtualDom_attribute('fill-opacity');
var elm$svg$Svg$Attributes$fontFamily = _VirtualDom_attribute('font-family');
var elm$svg$Svg$Attributes$fontSize = _VirtualDom_attribute('font-size');
var elm$svg$Svg$Attributes$fontStyle = _VirtualDom_attribute('font-style');
var elm$svg$Svg$Attributes$fontVariant = _VirtualDom_attribute('font-variant');
var elm$svg$Svg$Attributes$fontWeight = _VirtualDom_attribute('font-weight');
var elm$svg$Svg$Attributes$opacity = _VirtualDom_attribute('opacity');
var elm$svg$Svg$Attributes$stroke = _VirtualDom_attribute('stroke');
var elm$svg$Svg$Attributes$strokeDasharray = _VirtualDom_attribute('stroke-dasharray');
var elm$svg$Svg$Attributes$strokeDashoffset = _VirtualDom_attribute('stroke-dashoffset');
var elm$svg$Svg$Attributes$strokeLinecap = _VirtualDom_attribute('stroke-linecap');
var elm$svg$Svg$Attributes$strokeLinejoin = _VirtualDom_attribute('stroke-linejoin');
var elm$svg$Svg$Attributes$strokeOpacity = _VirtualDom_attribute('stroke-opacity');
var elm$svg$Svg$Attributes$strokeWidth = _VirtualDom_attribute('stroke-width');
var elm$svg$Svg$Attributes$textAnchor = _VirtualDom_attribute('text-anchor');
var elm$svg$Svg$Attributes$textDecoration = _VirtualDom_attribute('text-decoration');
var elm$svg$Svg$Attributes$transform = _VirtualDom_attribute('transform');
var timjs$elm_collage$Collage$Render$decodeCap = function (cap) {
	switch (cap.$) {
		case 'Round':
			return 'round';
		case 'Padded':
			return 'square';
		default:
			return 'butt';
	}
};
var timjs$elm_collage$Collage$Render$decodeDashing = function (ds) {
	var decodeOnOff = function (_n0) {
		var x = _n0.a;
		var y = _n0.b;
		return A2(
			elm$core$String$join,
			',',
			_List_fromArray(
				[
					elm$core$String$fromInt(x),
					elm$core$String$fromInt(y)
				]));
	};
	return A2(
		elm$core$String$join,
		' ',
		A2(elm$core$List$map, decodeOnOff, ds));
};
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var the_sett$elm_color$Color$toRgb = elm$core$Basics$identity;
var timjs$elm_collage$Collage$Render$decodeColor = function (c) {
	var _n0 = the_sett$elm_color$Color$toRgb(c);
	var red = _n0.red;
	var green = _n0.green;
	var blue = _n0.blue;
	var b = elm$core$String$fromInt(blue);
	var g = elm$core$String$fromInt(green);
	var r = elm$core$String$fromInt(red);
	return elm$core$String$concat(
		_List_fromArray(
			['rgb(', r, ',', g, ',', b, ')']));
};
var timjs$elm_collage$Collage$Render$decodeFill = function (fs) {
	if (fs.$ === 'Uniform') {
		var c = fs.a;
		return timjs$elm_collage$Collage$Render$decodeColor(c);
	} else {
		return 'none';
	}
};
var timjs$elm_collage$Collage$Render$decodeOpacity = function (c) {
	var _n0 = the_sett$elm_color$Color$toRgb(c);
	var alpha = _n0.alpha;
	return elm$core$String$fromFloat(alpha);
};
var timjs$elm_collage$Collage$Render$decodeFillOpacity = function (fs) {
	if (fs.$ === 'Uniform') {
		var c = fs.a;
		return timjs$elm_collage$Collage$Render$decodeOpacity(c);
	} else {
		return '0';
	}
};
var timjs$elm_collage$Collage$Render$decodeJoin = function (join) {
	switch (join.$) {
		case 'Smooth':
			return 'round';
		case 'Sharp':
			return 'miter';
		default:
			return 'bevel';
	}
};
var elm$core$Basics$pi = _Basics_pi;
var timjs$elm_collage$Collage$Render$decodeTransform = function (collage) {
	var sy = elm$core$String$fromFloat(collage.scale.b);
	var sx = elm$core$String$fromFloat(collage.scale.a);
	var r = elm$core$String$fromFloat((((-collage.rotation) / 2) / elm$core$Basics$pi) * 360);
	var dy = elm$core$String$fromFloat(-collage.shift.b);
	var dx = elm$core$String$fromFloat(collage.shift.a);
	return elm$core$String$concat(
		_List_fromArray(
			['translate(', dx, ',', dy, ') scale(', sx, ',', sy, ') rotate(', r, ')']));
};
var timjs$elm_collage$Collage$Render$attrs = function (collage) {
	var _n0 = collage.basic;
	switch (_n0.$) {
		case 'Path':
			var line = _n0.a;
			return _List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					timjs$elm_collage$Collage$Render$decodeFill(line.fill)),
					elm$svg$Svg$Attributes$strokeOpacity(
					timjs$elm_collage$Collage$Render$decodeFillOpacity(line.fill)),
					elm$svg$Svg$Attributes$strokeWidth(
					elm$core$String$fromFloat(line.thickness)),
					elm$svg$Svg$Attributes$strokeLinecap(
					timjs$elm_collage$Collage$Render$decodeCap(line.cap)),
					elm$svg$Svg$Attributes$strokeLinejoin(
					timjs$elm_collage$Collage$Render$decodeJoin(line.join)),
					elm$svg$Svg$Attributes$fill('none'),
					elm$svg$Svg$Attributes$opacity(
					elm$core$String$fromFloat(collage.opacity)),
					elm$svg$Svg$Attributes$transform(
					timjs$elm_collage$Collage$Render$decodeTransform(collage)),
					elm$svg$Svg$Attributes$strokeDashoffset(
					elm$core$String$fromInt(line.dashPhase)),
					elm$svg$Svg$Attributes$strokeDasharray(
					timjs$elm_collage$Collage$Render$decodeDashing(line.dashPattern))
				]);
		case 'Shape':
			var _n1 = _n0.a;
			var fill = _n1.a;
			var line = _n1.b;
			return _List_fromArray(
				[
					elm$svg$Svg$Attributes$fill(
					timjs$elm_collage$Collage$Render$decodeFill(fill)),
					elm$svg$Svg$Attributes$fillOpacity(
					timjs$elm_collage$Collage$Render$decodeFillOpacity(fill)),
					elm$svg$Svg$Attributes$stroke(
					timjs$elm_collage$Collage$Render$decodeFill(line.fill)),
					elm$svg$Svg$Attributes$strokeOpacity(
					timjs$elm_collage$Collage$Render$decodeFillOpacity(line.fill)),
					elm$svg$Svg$Attributes$strokeWidth(
					elm$core$String$fromFloat(line.thickness)),
					elm$svg$Svg$Attributes$strokeLinecap(
					timjs$elm_collage$Collage$Render$decodeCap(line.cap)),
					elm$svg$Svg$Attributes$strokeLinejoin(
					timjs$elm_collage$Collage$Render$decodeJoin(line.join)),
					elm$svg$Svg$Attributes$opacity(
					elm$core$String$fromFloat(collage.opacity)),
					elm$svg$Svg$Attributes$transform(
					timjs$elm_collage$Collage$Render$decodeTransform(collage)),
					elm$svg$Svg$Attributes$strokeDashoffset(
					elm$core$String$fromInt(line.dashPhase)),
					elm$svg$Svg$Attributes$strokeDasharray(
					timjs$elm_collage$Collage$Render$decodeDashing(line.dashPattern))
				]);
		case 'Text':
			var _n2 = _n0.b;
			var style = _n2.a;
			var str = _n2.b;
			return _List_fromArray(
				[
					elm$svg$Svg$Attributes$fill(
					timjs$elm_collage$Collage$Render$decodeFill(
						timjs$elm_collage$Collage$Core$Uniform(style.color))),
					elm$svg$Svg$Attributes$fontFamily(
					function () {
						var _n3 = style.typeface;
						switch (_n3.$) {
							case 'Serif':
								return 'serif';
							case 'Sansserif':
								return 'sans-serif';
							case 'Monospace':
								return 'monospace';
							default:
								var name = _n3.a;
								return name;
						}
					}()),
					elm$svg$Svg$Attributes$fontSize(
					elm$core$String$fromInt(style.size)),
					elm$svg$Svg$Attributes$fontWeight(
					function () {
						var _n4 = style.weight;
						switch (_n4.$) {
							case 'Thin':
								return '200';
							case 'Light':
								return '300';
							case 'Regular':
								return 'normal';
							case 'Medium':
								return '500';
							case 'SemiBold':
								return '600';
							case 'Bold':
								return 'bold';
							default:
								return '800';
						}
					}()),
					elm$svg$Svg$Attributes$fontStyle(
					function () {
						var _n5 = style.shape;
						switch (_n5.$) {
							case 'Upright':
								return 'normal';
							case 'SmallCaps':
								return 'normal';
							case 'Slanted':
								return 'oblique';
							default:
								return 'italic';
						}
					}()),
					elm$svg$Svg$Attributes$fontVariant(
					function () {
						var _n6 = style.shape;
						if (_n6.$ === 'SmallCaps') {
							return 'small-caps';
						} else {
							return 'normal';
						}
					}()),
					elm$svg$Svg$Attributes$textDecoration(
					function () {
						var _n7 = style.line;
						switch (_n7.$) {
							case 'None':
								return 'none';
							case 'Under':
								return 'underline';
							case 'Over':
								return 'overline';
							default:
								return 'line-through';
						}
					}()),
					elm$svg$Svg$Attributes$textAnchor('middle'),
					elm$svg$Svg$Attributes$dominantBaseline('middle'),
					elm$svg$Svg$Attributes$transform(
					timjs$elm_collage$Collage$Render$decodeTransform(collage))
				]);
		default:
			return _List_fromArray(
				[
					elm$svg$Svg$Attributes$transform(
					timjs$elm_collage$Collage$Render$decodeTransform(collage))
				]);
	}
};
var elm$svg$Svg$Attributes$x = _VirtualDom_attribute('x');
var elm$svg$Svg$Attributes$y = _VirtualDom_attribute('y');
var timjs$elm_collage$Collage$Render$box = F2(
	function (w, h) {
		return _List_fromArray(
			[
				elm$svg$Svg$Attributes$width(
				elm$core$String$fromFloat(w)),
				elm$svg$Svg$Attributes$height(
				elm$core$String$fromFloat(h)),
				elm$svg$Svg$Attributes$x(
				elm$core$String$fromFloat((-w) / 2)),
				elm$svg$Svg$Attributes$y(
				elm$core$String$fromFloat((-h) / 2))
			]);
	});
var timjs$elm_collage$Collage$Render$decodePoints = function (ps) {
	return A2(
		elm$core$String$join,
		' ',
		A2(
			elm$core$List$map,
			function (_n0) {
				var x = _n0.a;
				var y = _n0.b;
				return A2(
					elm$core$String$join,
					',',
					_List_fromArray(
						[
							elm$core$String$fromFloat(x),
							elm$core$String$fromFloat(-y)
						]));
			},
			ps));
};
var elm$svg$Svg$Events$on = elm$html$Html$Events$on;
var timjs$elm_collage$Helpers$uncurry = F2(
	function (f, _n0) {
		var a = _n0.a;
		var b = _n0.b;
		return A2(f, a, b);
	});
var timjs$elm_collage$Collage$Render$events = function (handlers) {
	return A2(
		elm$core$List$map,
		timjs$elm_collage$Helpers$uncurry(elm$svg$Svg$Events$on),
		handlers);
};
var timjs$elm_collage$Collage$Render$render = function (collage) {
	render:
	while (true) {
		var name = A2(elm$core$Maybe$withDefault, '_unnamed_', collage.name);
		var _n0 = collage.basic;
		switch (_n0.$) {
			case 'Path':
				var style = _n0.a;
				var path = _n0.b;
				var ps = path.a;
				return A2(
					elm$svg$Svg$polyline,
					_Utils_ap(
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$id(name),
								elm$svg$Svg$Attributes$points(
								timjs$elm_collage$Collage$Render$decodePoints(ps))
							]),
						_Utils_ap(
							timjs$elm_collage$Collage$Render$attrs(collage),
							timjs$elm_collage$Collage$Render$events(collage.handlers))),
					_List_Nil);
			case 'Shape':
				var _n2 = _n0.a;
				var fill = _n2.a;
				var line = _n2.b;
				var shape = _n0.b;
				switch (shape.$) {
					case 'Polygon':
						var ps = shape.a;
						return A2(
							elm$svg$Svg$polygon,
							_Utils_ap(
								_List_fromArray(
									[
										elm$svg$Svg$Attributes$id(name),
										elm$svg$Svg$Attributes$points(
										timjs$elm_collage$Collage$Render$decodePoints(ps))
									]),
								_Utils_ap(
									timjs$elm_collage$Collage$Render$attrs(collage),
									timjs$elm_collage$Collage$Render$events(collage.handlers))),
							_List_Nil);
					case 'Circle':
						var r = shape.a;
						return A2(
							elm$svg$Svg$circle,
							_Utils_ap(
								_List_fromArray(
									[
										elm$svg$Svg$Attributes$id(name),
										elm$svg$Svg$Attributes$r(
										elm$core$String$fromFloat(r))
									]),
								_Utils_ap(
									timjs$elm_collage$Collage$Render$attrs(collage),
									timjs$elm_collage$Collage$Render$events(collage.handlers))),
							_List_Nil);
					case 'Ellipse':
						var rx = shape.a;
						var ry = shape.b;
						return A2(
							elm$svg$Svg$ellipse,
							_Utils_ap(
								_List_fromArray(
									[
										elm$svg$Svg$Attributes$id(name),
										elm$svg$Svg$Attributes$rx(
										elm$core$String$fromFloat(rx)),
										elm$svg$Svg$Attributes$ry(
										elm$core$String$fromFloat(ry))
									]),
								_Utils_ap(
									timjs$elm_collage$Collage$Render$attrs(collage),
									timjs$elm_collage$Collage$Render$events(collage.handlers))),
							_List_Nil);
					case 'Rectangle':
						var w = shape.a;
						var h = shape.b;
						var r = shape.c;
						return A2(
							elm$svg$Svg$rect,
							_Utils_ap(
								_List_fromArray(
									[
										elm$svg$Svg$Attributes$id(name),
										elm$svg$Svg$Attributes$rx(
										elm$core$String$fromFloat(r)),
										elm$svg$Svg$Attributes$ry(
										elm$core$String$fromFloat(r))
									]),
								_Utils_ap(
									A2(timjs$elm_collage$Collage$Render$box, w, h),
									_Utils_ap(
										timjs$elm_collage$Collage$Render$attrs(collage),
										timjs$elm_collage$Collage$Render$events(collage.handlers)))),
							_List_Nil);
					default:
						var path = shape.a;
						var $temp$collage = _Utils_update(
							collage,
							{
								basic: A2(timjs$elm_collage$Collage$Core$Path, line, path)
							});
						collage = $temp$collage;
						continue render;
				}
			case 'Text':
				var _n4 = _n0.b;
				var style = _n4.a;
				var str = _n4.b;
				return A2(
					elm$svg$Svg$text_,
					_Utils_ap(
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$id(name)
							]),
						_Utils_ap(
							timjs$elm_collage$Collage$Render$attrs(collage),
							timjs$elm_collage$Collage$Render$events(collage.handlers))),
					_List_fromArray(
						[
							elm$svg$Svg$text(str)
						]));
			case 'Image':
				var _n5 = _n0.a;
				var w = _n5.a;
				var h = _n5.b;
				var url = _n0.b;
				return A2(
					elm$svg$Svg$image,
					_Utils_ap(
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$id(name),
								elm$svg$Svg$Attributes$xlinkHref(url)
							]),
						_Utils_ap(
							A2(timjs$elm_collage$Collage$Render$box, w, h),
							_Utils_ap(
								timjs$elm_collage$Collage$Render$attrs(collage),
								timjs$elm_collage$Collage$Render$events(collage.handlers)))),
					_List_Nil);
			case 'Html':
				var _n6 = _n0.a;
				var w = _n6.a;
				var h = _n6.b;
				var html = _n0.b;
				return A2(
					elm$svg$Svg$foreignObject,
					_Utils_ap(
						_List_fromArray(
							[
								elm$svg$Svg$Attributes$id(name)
							]),
						_Utils_ap(
							A2(timjs$elm_collage$Collage$Render$box, w, h),
							_Utils_ap(
								timjs$elm_collage$Collage$Render$attrs(collage),
								timjs$elm_collage$Collage$Render$events(collage.handlers)))),
					_List_fromArray(
						[html]));
			case 'Group':
				var collages = _n0.a;
				return A2(
					elm$svg$Svg$g,
					A2(
						elm$core$List$cons,
						elm$svg$Svg$Attributes$id(name),
						_Utils_ap(
							timjs$elm_collage$Collage$Render$attrs(collage),
							timjs$elm_collage$Collage$Render$events(collage.handlers))),
					A3(
						elm$core$List$foldl,
						F2(
							function (col, res) {
								return A2(
									elm$core$List$cons,
									timjs$elm_collage$Collage$Render$render(col),
									res);
							}),
						_List_Nil,
						collages));
			default:
				var fore = _n0.a;
				var back = _n0.b;
				var $temp$collage = _Utils_update(
					collage,
					{
						basic: timjs$elm_collage$Collage$Core$Group(
							_List_fromArray(
								[fore, back]))
					});
				collage = $temp$collage;
				continue render;
		}
	}
};
var timjs$elm_collage$Collage$Render$svgAbsolute = F2(
	function (_n0, collage) {
		var width = _n0.a;
		var height = _n0.b;
		var w = elm$core$String$fromFloat(width);
		var h = elm$core$String$fromFloat(height);
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$svg$Svg$svg,
					_List_fromArray(
						[
							elm$svg$Svg$Attributes$width(w),
							elm$svg$Svg$Attributes$height(h),
							elm$svg$Svg$Attributes$version('1.1')
						]),
					_List_fromArray(
						[
							timjs$elm_collage$Collage$Render$render(collage)
						]))
				]));
	});
var timjs$elm_collage$Collage$Render$svg = function (collage) {
	return A2(
		timjs$elm_collage$Collage$Render$svgAbsolute,
		_Utils_Tuple2(
			timjs$elm_collage$Collage$Layout$width(collage),
			timjs$elm_collage$Collage$Layout$height(collage)),
		A2(timjs$elm_collage$Collage$Layout$align, timjs$elm_collage$Collage$Layout$topLeft, collage));
};
var author$project$GameView$view = function (model) {
	var _n0 = model.started;
	if (_n0) {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					function () {
					var _n1 = model.currentDisplay;
					switch (_n1.$) {
						case 'DisplayGameOfThorns':
							return author$project$GameView$viewGameOfThorns(model);
						case 'DisplayOpponentReport':
							return author$project$GameView$viewOpponentReport(model);
						case 'DisplayInventory':
							return author$project$GameView$viewInventory(model);
						case 'DisplayHelpScreen':
							return author$project$GameView$viewHelpMode(model);
						default:
							return A2(
								elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										timjs$elm_collage$Collage$Render$svg(
										author$project$GameView$display(model))
									]));
					}
				}()
				]));
	} else {
		return A2(
			author$project$GameView$viewStartMenuChoices,
			model,
			author$project$GameView$getImgBaseDir(model));
	}
};
var author$project$GameDefinitions$Common$square_room_side_ = 7;
var author$project$GameDefinitions$Common$cParams = {border_bottom_height: 4, border_left_width: 1, border_right_width: 4, border_top_height: 1, horizontal_space_between_rooms: 1, horizontal_wall_height: 1, small_height_room_height: author$project$GameDefinitions$Common$square_room_side_ - 2, small_height_room_width: author$project$GameDefinitions$Common$square_room_side_, small_width_room_height: author$project$GameDefinitions$Common$square_room_side_, small_width_room_width: author$project$GameDefinitions$Common$square_room_side_ - 2, square_room_side: author$project$GameDefinitions$Common$square_room_side_, vertical_space_between_rooms: 1, vertical_wall_width: 1};
var author$project$GameDefinitions$Common$dimensions = _Utils_Tuple2(10, 10);
var author$project$GameDefinitions$Common$initialFightingCharacter = F5(
	function (fcharId, species, x, y, floor_id) {
		var elem = 'e' + elm$core$String$fromInt(fcharId);
		return A7(
			author$project$Beings$Beings$fightingCharacterCreationFunc,
			elem,
			fcharId,
			'fightingCharacter' + elm$core$String$fromInt(fcharId),
			species,
			x,
			y,
			floor_id);
	});
var author$project$GameDefinitions$Common$initialPlayer = F3(
	function (x, y, z) {
		var elem = '@';
		return A5(author$project$Beings$Beings$playerCreationFunc, elem, 'You', x, y, z);
	});
var author$project$GameDefinitions$Common$initialModelFunc = function (imgBaseDir_) {
	var w = author$project$GameDefinitions$Common$dimensions.a;
	var theFloorId = 0;
	var player_ = A3(author$project$GameDefinitions$Common$initialPlayer, 10, 10, 0);
	var levers = elm$core$Dict$empty;
	var h = author$project$GameDefinitions$Common$dimensions.b;
	var firstMap = A3(author$project$GameDefinitions$Common$gridInitializer, w, h, author$project$GameDefinitions$Common$cParams);
	var fightingCharacter2 = A5(author$project$GameDefinitions$Common$initialFightingCharacter, 2, 'ghost', 4, 4, theFloorId);
	var fightingCharacter = A5(author$project$GameDefinitions$Common$initialFightingCharacter, 1, 'ghost', 2, 2, theFloorId);
	var createRandomMap = false;
	return _Utils_Tuple2(
		{
			currentDisplay: author$project$GameModel$DisplayRegularGame,
			currentFloorId: theFloorId,
			debugMode: false,
			displayStatsOverlay: false,
			explored: author$project$GameDefinitions$Common$setAllAsUnexplored(firstMap),
			fightingCharacters: elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(1, fightingCharacter),
						_Utils_Tuple2(2, fightingCharacter2)
					])),
			floorDict: elm$core$Dict$empty,
			gameCompletionFunc: F2(
				function (fid, coords) {
					return false;
				}),
			gameOfThornsModel: A3(
				author$project$Thorns$Types$initialModel,
				player_,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(imgBaseDir_)),
			imgBaseDir: elm$core$Maybe$Just(imgBaseDir_),
			level: firstMap,
			leverModelChangerFuncs: elm$core$Dict$empty,
			listeningToKeyInput: true,
			log: _List_fromArray(
				['you enter the dungeon']),
			otherCharacters: elm$core$Dict$empty,
			player: player_,
			pseudoRandomIntsPool: _List_Nil,
			radius_of_visibility: 5,
			roomsInfo: elm$core$Maybe$Nothing,
			showBlood: true,
			started: false,
			tileHeight: 64,
			tileWidth: 64,
			total_height: author$project$GameDefinitions$Common$dimensions.b,
			total_width: author$project$GameDefinitions$Common$dimensions.a,
			viewport_topleft_x: 3,
			viewport_topleft_y: 3,
			wallPercentage: elm$core$Maybe$Nothing,
			window_height: 10,
			window_width: 10
		},
		createRandomMap);
};
var author$project$Main$init = function (flags) {
	var _n0 = author$project$GameDefinitions$Common$initialModelFunc(flags.imgBaseDir);
	var initModel = _n0.a;
	var createRandomMap = _n0.b;
	var gBounds = author$project$Grid$getGridBoundsToPlacePlayer(initModel.level);
	return _Utils_Tuple2(
		initModel,
		author$project$GameUpdate$cmdFillRandomIntsPool(initModel));
};
var author$project$GameUpdate$KeyDown = function (a) {
	return {$: 'KeyDown', a: a};
};
var author$project$GameModel$Down = {$: 'Down'};
var author$project$GameModel$Left = {$: 'Left'};
var author$project$GameModel$Nop = {$: 'Nop'};
var author$project$GameModel$PickUpItem = {$: 'PickUpItem'};
var author$project$GameModel$Right = {$: 'Right'};
var author$project$GameModel$Up = {$: 'Up'};
var author$project$GameModel$ViewHelpMode = {$: 'ViewHelpMode'};
var author$project$GameModel$ViewInventory = {$: 'ViewInventory'};
var author$project$GameModel$ViewMap = {$: 'ViewMap'};
var author$project$GameModel$ViewOpponentReport = {$: 'ViewOpponentReport'};
var author$project$GameModel$ViewStatsOverlay = {$: 'ViewStatsOverlay'};
var author$project$Main$fromCode = function (keyCode) {
	switch (keyCode) {
		case 79:
			return author$project$GameModel$Left;
		case 37:
			return author$project$GameModel$Left;
		case 80:
			return author$project$GameModel$Right;
		case 39:
			return author$project$GameModel$Right;
		case 81:
			return author$project$GameModel$Up;
		case 38:
			return author$project$GameModel$Up;
		case 40:
			return author$project$GameModel$Down;
		case 65:
			return author$project$GameModel$Down;
		case 85:
			return author$project$GameModel$PickUpItem;
		case 73:
			return author$project$GameModel$ViewInventory;
		case 83:
			return author$project$GameModel$ViewStatsOverlay;
		case 69:
			return author$project$GameModel$ViewOpponentReport;
		case 72:
			return author$project$GameModel$ViewHelpMode;
		case 77:
			return author$project$GameModel$ViewMap;
		default:
			return author$project$GameModel$Nop;
	}
};
var elm$browser$Browser$Events$Document = {$: 'Document'};
var elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 'MySub', a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {pids: pids, subs: subs};
	});
var elm$browser$Browser$Events$init = elm$core$Task$succeed(
	A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
var elm$browser$Browser$Events$nodeToKey = function (node) {
	if (node.$ === 'Document') {
		return 'd_';
	} else {
		return 'w_';
	}
};
var elm$browser$Browser$Events$addKey = function (sub) {
	var node = sub.a;
	var name = sub.b;
	return _Utils_Tuple2(
		_Utils_ap(
			elm$browser$Browser$Events$nodeToKey(node),
			name),
		sub);
};
var elm$browser$Browser$Events$Event = F2(
	function (key, event) {
		return {event: event, key: key};
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0.a;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var elm$core$String$slice = _String_slice;
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$url$Url$Http = {$: 'Http'};
var elm$url$Url$Https = {$: 'Https'};
var elm$core$String$indexes = _String_indexes;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(elm$core$String$slice, 0, n, string);
	});
var elm$core$String$contains = _String_contains;
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if (elm$core$String$isEmpty(str) || A2(elm$core$String$contains, '@', str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, ':', str);
			if (!_n0.b) {
				return elm$core$Maybe$Just(
					A6(elm$url$Url$Url, protocol, str, elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_n0.b.b) {
					var i = _n0.a;
					var _n1 = elm$core$String$toInt(
						A2(elm$core$String$dropLeft, i + 1, str));
					if (_n1.$ === 'Nothing') {
						return elm$core$Maybe$Nothing;
					} else {
						var port_ = _n1;
						return elm$core$Maybe$Just(
							A6(
								elm$url$Url$Url,
								protocol,
								A2(elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			}
		}
	});
var elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '/', str);
			if (!_n0.b) {
				return A5(elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _n0.a;
				return A5(
					elm$url$Url$chompBeforePath,
					protocol,
					A2(elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '?', str);
			if (!_n0.b) {
				return A4(elm$url$Url$chompBeforeQuery, protocol, elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _n0.a;
				return A4(
					elm$url$Url$chompBeforeQuery,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if (elm$core$String$isEmpty(str)) {
			return elm$core$Maybe$Nothing;
		} else {
			var _n0 = A2(elm$core$String$indexes, '#', str);
			if (!_n0.b) {
				return A3(elm$url$Url$chompBeforeFragment, protocol, elm$core$Maybe$Nothing, str);
			} else {
				var i = _n0.a;
				return A3(
					elm$url$Url$chompBeforeFragment,
					protocol,
					elm$core$Maybe$Just(
						A2(elm$core$String$dropLeft, i + 1, str)),
					A2(elm$core$String$left, i, str));
			}
		}
	});
var elm$url$Url$fromString = function (str) {
	return A2(elm$core$String$startsWith, 'http://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Http,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		elm$url$Url$Https,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$Events$spawn = F3(
	function (router, key, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var actualNode = function () {
			if (node.$ === 'Document') {
				return _Browser_doc;
			} else {
				return _Browser_window;
			}
		}();
		return A2(
			elm$core$Task$map,
			function (value) {
				return _Utils_Tuple2(key, value);
			},
			A3(
				_Browser_on,
				actualNode,
				name,
				function (event) {
					return A2(
						elm$core$Platform$sendToSelf,
						router,
						A2(elm$browser$Browser$Events$Event, key, event));
				}));
	});
var elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _n0) {
				stepState:
				while (true) {
					var list = _n0.a;
					var result = _n0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _n2 = list.a;
						var lKey = _n2.a;
						var lValue = _n2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_n0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_n0 = $temp$_n0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _n3 = A3(
			elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _n3.a;
		var intermediateResult = _n3.b;
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n4, result) {
					var k = _n4.a;
					var v = _n4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var elm$core$Dict$union = F2(
	function (t1, t2) {
		return A3(elm$core$Dict$foldl, elm$core$Dict$insert, t2, t1);
	});
var elm$core$Process$kill = _Scheduler_kill;
var elm$browser$Browser$Events$onEffects = F3(
	function (router, subs, state) {
		var stepRight = F3(
			function (key, sub, _n6) {
				var deads = _n6.a;
				var lives = _n6.b;
				var news = _n6.c;
				return _Utils_Tuple3(
					deads,
					lives,
					A2(
						elm$core$List$cons,
						A3(elm$browser$Browser$Events$spawn, router, key, sub),
						news));
			});
		var stepLeft = F3(
			function (_n4, pid, _n5) {
				var deads = _n5.a;
				var lives = _n5.b;
				var news = _n5.c;
				return _Utils_Tuple3(
					A2(elm$core$List$cons, pid, deads),
					lives,
					news);
			});
		var stepBoth = F4(
			function (key, pid, _n2, _n3) {
				var deads = _n3.a;
				var lives = _n3.b;
				var news = _n3.c;
				return _Utils_Tuple3(
					deads,
					A3(elm$core$Dict$insert, key, pid, lives),
					news);
			});
		var newSubs = A2(elm$core$List$map, elm$browser$Browser$Events$addKey, subs);
		var _n0 = A6(
			elm$core$Dict$merge,
			stepLeft,
			stepBoth,
			stepRight,
			state.pids,
			elm$core$Dict$fromList(newSubs),
			_Utils_Tuple3(_List_Nil, elm$core$Dict$empty, _List_Nil));
		var deadPids = _n0.a;
		var livePids = _n0.b;
		var makeNewPids = _n0.c;
		return A2(
			elm$core$Task$andThen,
			function (pids) {
				return elm$core$Task$succeed(
					A2(
						elm$browser$Browser$Events$State,
						newSubs,
						A2(
							elm$core$Dict$union,
							livePids,
							elm$core$Dict$fromList(pids))));
			},
			A2(
				elm$core$Task$andThen,
				function (_n1) {
					return elm$core$Task$sequence(makeNewPids);
				},
				elm$core$Task$sequence(
					A2(elm$core$List$map, elm$core$Process$kill, deadPids))));
	});
var elm$browser$Browser$Events$onSelfMsg = F3(
	function (router, _n0, state) {
		var key = _n0.key;
		var event = _n0.event;
		var toMessage = function (_n2) {
			var subKey = _n2.a;
			var _n3 = _n2.b;
			var node = _n3.a;
			var name = _n3.b;
			var decoder = _n3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing;
		};
		var messages = A2(elm$core$List$filterMap, toMessage, state.subs);
		return A2(
			elm$core$Task$andThen,
			function (_n1) {
				return elm$core$Task$succeed(state);
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Platform$sendToApp(router),
					messages)));
	});
var elm$browser$Browser$Events$subMap = F2(
	function (func, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var decoder = _n0.c;
		return A3(
			elm$browser$Browser$Events$MySub,
			node,
			name,
			A2(elm$json$Json$Decode$map, func, decoder));
	});
_Platform_effectManagers['Browser.Events'] = _Platform_createManager(elm$browser$Browser$Events$init, elm$browser$Browser$Events$onEffects, elm$browser$Browser$Events$onSelfMsg, 0, elm$browser$Browser$Events$subMap);
var elm$browser$Browser$Events$subscription = _Platform_leaf('Browser.Events');
var elm$browser$Browser$Events$on = F3(
	function (node, name, decoder) {
		return elm$browser$Browser$Events$subscription(
			A3(elm$browser$Browser$Events$MySub, node, name, decoder));
	});
var elm$browser$Browser$Events$onKeyDown = A2(elm$browser$Browser$Events$on, elm$browser$Browser$Events$Document, 'keydown');
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$html$Html$Events$keyCode = A2(elm$json$Json$Decode$field, 'keyCode', elm$json$Json$Decode$int);
var author$project$Main$subscriptions = function (model) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				elm$browser$Browser$Events$onKeyDown(
				A2(
					elm$json$Json$Decode$map,
					function (kCode) {
						return author$project$GameUpdate$KeyDown(
							author$project$Main$fromCode(kCode));
					},
					elm$html$Html$Events$keyCode))
			]));
};
var elm$browser$Browser$element = _Browser_element;
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Main$main = elm$browser$Browser$element(
	{init: author$project$Main$init, subscriptions: author$project$Main$subscriptions, update: author$project$GameUpdate$update, view: author$project$GameView$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (imgBaseDir) {
			return elm$json$Json$Decode$succeed(
				{imgBaseDir: imgBaseDir});
		},
		A2(elm$json$Json$Decode$field, 'imgBaseDir', elm$json$Json$Decode$string)))(0)}});}(this));