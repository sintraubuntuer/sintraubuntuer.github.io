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



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


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



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
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

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
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



// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
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
	if (region.aT.ab === region.a5.ab)
	{
		return 'on line ' + region.aT.ab;
	}
	return 'on lines ' + region.aT.ab + ' through ' + region.a5.ab;
}



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

	/**_UNUSED/
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

	/**/
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

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (!x.$)
	//*/
	/**_UNUSED/
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

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


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
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
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



/**_UNUSED/
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

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
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
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
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

		case 13:
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

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
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

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
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

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

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
		impl.cq,
		impl.dC,
		impl.dt,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
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


function _Platform_export(exports)
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


function _Platform_export_UNUSED(exports)
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



// SEND REQUEST

var _Http_toTask = F2(function(request, maybeProgress)
{
	return _Scheduler_binding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		_Http_configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_Scheduler_fail(elm$http$Http$NetworkError));
		});
		xhr.addEventListener('timeout', function() {
			callback(_Scheduler_fail(elm$http$Http$Timeout));
		});
		xhr.addEventListener('load', function() {
			callback(_Http_handleResponse(xhr, request.ce.a));
		});

		try
		{
			xhr.open(request.cU, request.dD, true);
		}
		catch (e)
		{
			return callback(_Scheduler_fail(elm$http$Http$BadUrl(request.dD)));
		}

		_Http_configureRequest(xhr, request);

		var body = request.bN;
		xhr.send(elm$http$Http$Internal$isStringBody(body)
			? (xhr.setRequestHeader('Content-Type', body.a), body.b)
			: body.a
		);

		return function() { xhr.abort(); };
	});
});

function _Http_configureProgress(xhr, maybeProgress)
{
	if (!elm$core$Maybe$isJust(maybeProgress))
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_Scheduler_rawSpawn(maybeProgress.a({
			bR: event.loaded,
			bS: event.total
		}));
	});
}

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.ck; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}

	xhr.responseType = request.ce.b;
	xhr.withCredentials = request.dH;

	elm$core$Maybe$isJust(request.dy) && (xhr.timeout = request.dy.a);
}


// RESPONSES

function _Http_handleResponse(xhr, responseToResult)
{
	var response = _Http_toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _Scheduler_fail(elm$http$Http$BadStatus(response));
	}

	var result = responseToResult(response);

	if (elm$core$Result$isOk(result))
	{
		return _Scheduler_succeed(result.a);
	}
	else
	{
		response.body = xhr.responseText;
		return _Scheduler_fail(A2(elm$http$Http$BadPayload, result.a, response));
	}
}

function _Http_toResponse(xhr)
{
	return {
		dD: xhr.responseURL,
		dq: { bY: xhr.status, v: xhr.statusText },
		ck: _Http_parseHeaders(xhr.getAllResponseHeaders()),
		bN: xhr.response
	};
}

function _Http_parseHeaders(rawHeaders)
{
	var headers = elm$core$Dict$empty;

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

			headers = A3(elm$core$Dict$update, key, function(oldValue) {
				return elm$core$Maybe$Just(elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function _Http_expectStringResponse(responseToResult)
{
	return {
		$: 0,
		b: 'text',
		a: responseToResult
	};
}

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		b: expect.b,
		a: function(response) {
			var convertedResponse = expect.a(response);
			return A2(elm$core$Result$map, func, convertedResponse);
		}
	};
});


// BODY

function _Http_multipart(parts)
{


	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}

	return elm$http$Http$Internal$FormDataBody(formData);
}


// CREATE

var _Regex_never = /.^/;

var _Regex_fromStringWith = F2(function(options, string)
{
	var flags = 'g';
	if (options.bi) { flags += 'm'; }
	if (options.a$) { flags += 'i'; }

	try
	{
		return elm$core$Maybe$Just(new RegExp(string, flags));
	}
	catch(error)
	{
		return elm$core$Maybe$Nothing;
	}
});


// USE

var _Regex_contains = F2(function(re, string)
{
	return string.match(re) !== null;
});


var _Regex_findAtMost = F3(function(n, re, str)
{
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex == re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		out.push(A4(elm$regex$Regex$Match, result[0], result.index, number, _List_fromArray(subs)));
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _List_fromArray(out);
});


var _Regex_replaceAtMost = F4(function(n, re, replacer, string)
{
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
			submatches[--i] = submatch
				? elm$core$Maybe$Just(submatch)
				: elm$core$Maybe$Nothing;
		}
		return replacer(A4(elm$regex$Regex$Match, match, arguments[arguments.length - 2], count, _List_fromArray(submatches)));
	}
	return string.replace(re, jsReplacer);
});

var _Regex_splitAtMost = F3(function(n, re, str)
{
	var string = str;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		var result = re.exec(string);
		if (!result) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _List_fromArray(out);
});

var _Regex_infinity = Infinity;




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

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
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

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
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
		v: func(record.v),
		aV: record.aV,
		aQ: record.aQ
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
		(key !== 'value' || key !== 'checked' || domNode[key] !== value) && (domNode[key] = value);
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
		value
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

		value
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
		var message = !tag ? value : tag < 3 ? value.a : value.v;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.aV;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.aQ) && event.preventDefault(),
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
			var oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			var newMatch = xKey === yNextKey;
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



// VIRTUAL-DOM WIDGETS


var _Markdown_toHtml = F3(function(options, factList, rawMarkdown)
{
	return _VirtualDom_custom(
		factList,
		{
			a: options,
			b: rawMarkdown
		},
		_Markdown_render,
		_Markdown_diff
	);
});



// WIDGET IMPLEMENTATION


function _Markdown_render(model)
{
	return A2(_Markdown_replace, model, _VirtualDom_doc.createElement('div'));
}


function _Markdown_diff(x, y)
{
	return x.b === y.b && x.a === y.a
		? false
		: _Markdown_replace(y);
}


var _Markdown_replace = F2(function(model, div)
{
	div.innerHTML = _Markdown_marked(model.b, _Markdown_formatOptions(model.a));
	return div;
});



// ACTUAL MARKDOWN PARSER


var _Markdown_marked = function() {
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
	(function(){var block={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:noop,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:noop,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:noop,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};block.bullet=/(?:[*+-]|\d+\.)/;block.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;block.item=replace(block.item,"gm")(/bull/g,block.bullet)();block.list=replace(block.list)(/bull/g,block.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+block.def.source+")")();block.blockquote=replace(block.blockquote)("def",block.def)();block._tag="(?!(?:"+"a|em|strong|small|s|cite|q|dfn|abbr|data|time|code"+"|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo"+"|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";block.html=replace(block.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,block._tag)();block.paragraph=replace(block.paragraph)("hr",block.hr)("heading",block.heading)("lheading",block.lheading)("blockquote",block.blockquote)("tag","<"+block._tag)("def",block.def)();block.normal=merge({},block);block.gfm=merge({},block.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/});block.gfm.paragraph=replace(block.paragraph)("(?!","(?!"+block.gfm.fences.source.replace("\\1","\\2")+"|"+block.list.source.replace("\\1","\\3")+"|")();block.tables=merge({},block.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function Lexer(options){this.tokens=[];this.tokens.links={};this.options=options||marked.defaults;this.rules=block.normal;if(this.options.gfm){if(this.options.tables){this.rules=block.tables}else{this.rules=block.gfm}}}Lexer.rules=block;Lexer.lex=function(src,options){var lexer=new Lexer(options);return lexer.lex(src)};Lexer.prototype.lex=function(src){src=src.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(src,true)};Lexer.prototype.token=function(src,top,bq){var src=src.replace(/^ +$/gm,""),next,loose,cap,bull,b,item,space,i,l;while(src){if(cap=this.rules.newline.exec(src)){src=src.substring(cap[0].length);if(cap[0].length>1){this.tokens.push({type:"space"})}}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);cap=cap[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?cap.replace(/\n+$/,""):cap});continue}if(cap=this.rules.fences.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"code",lang:cap[2],text:cap[3]||""});continue}if(cap=this.rules.heading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[1].length,text:cap[2]});continue}if(top&&(cap=this.rules.nptable.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].split(/ *\| */)}this.tokens.push(item);continue}if(cap=this.rules.lheading.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"heading",depth:cap[2]==="="?1:2,text:cap[1]});continue}if(cap=this.rules.hr.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"hr"});continue}if(cap=this.rules.blockquote.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"blockquote_start"});cap=cap[0].replace(/^ *> ?/gm,"");this.token(cap,top,true);this.tokens.push({type:"blockquote_end"});continue}if(cap=this.rules.list.exec(src)){src=src.substring(cap[0].length);bull=cap[2];this.tokens.push({type:"list_start",ordered:bull.length>1});cap=cap[0].match(this.rules.item);next=false;l=cap.length;i=0;for(;i<l;i++){item=cap[i];space=item.length;item=item.replace(/^ *([*+-]|\d+\.) +/,"");if(~item.indexOf("\n ")){space-=item.length;item=!this.options.pedantic?item.replace(new RegExp("^ {1,"+space+"}","gm"),""):item.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&i!==l-1){b=block.bullet.exec(cap[i+1])[0];if(bull!==b&&!(bull.length>1&&b.length>1)){src=cap.slice(i+1).join("\n")+src;i=l-1}}loose=next||/\n\n(?!\s*$)/.test(item);if(i!==l-1){next=item.charAt(item.length-1)==="\n";if(!loose)loose=next}this.tokens.push({type:loose?"loose_item_start":"list_item_start"});this.token(item,false,bq);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(cap=this.rules.html.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&(cap[1]==="pre"||cap[1]==="script"||cap[1]==="style"),text:cap[0]});continue}if(!bq&&top&&(cap=this.rules.def.exec(src))){src=src.substring(cap[0].length);this.tokens.links[cap[1].toLowerCase()]={href:cap[2],title:cap[3]};continue}if(top&&(cap=this.rules.table.exec(src))){src=src.substring(cap[0].length);item={type:"table",header:cap[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:cap[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:cap[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(i=0;i<item.align.length;i++){if(/^ *-+: *$/.test(item.align[i])){item.align[i]="right"}else if(/^ *:-+: *$/.test(item.align[i])){item.align[i]="center"}else if(/^ *:-+ *$/.test(item.align[i])){item.align[i]="left"}else{item.align[i]=null}}for(i=0;i<item.cells.length;i++){item.cells[i]=item.cells[i].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(item);continue}if(top&&(cap=this.rules.paragraph.exec(src))){src=src.substring(cap[0].length);this.tokens.push({type:"paragraph",text:cap[1].charAt(cap[1].length-1)==="\n"?cap[1].slice(0,-1):cap[1]});continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);this.tokens.push({type:"text",text:cap[0]});continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return this.tokens};var inline={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:noop,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^_\_([\s\S]+?)_\_(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|_\_)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:noop,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};inline._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;inline._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;inline.link=replace(inline.link)("inside",inline._inside)("href",inline._href)();inline.reflink=replace(inline.reflink)("inside",inline._inside)();inline.normal=merge({},inline);inline.pedantic=merge({},inline.normal,{strong:/^_\_(?=\S)([\s\S]*?\S)_\_(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});inline.gfm=merge({},inline.normal,{escape:replace(inline.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:replace(inline.text)("]|","~]|")("|","|https?://|")()});inline.breaks=merge({},inline.gfm,{br:replace(inline.br)("{2,}","*")(),text:replace(inline.gfm.text)("{2,}","*")()});function InlineLexer(links,options){this.options=options||marked.defaults;this.links=links;this.rules=inline.normal;this.renderer=this.options.renderer||new Renderer;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=inline.breaks}else{this.rules=inline.gfm}}else if(this.options.pedantic){this.rules=inline.pedantic}}InlineLexer.rules=inline;InlineLexer.output=function(src,links,options){var inline=new InlineLexer(links,options);return inline.output(src)};InlineLexer.prototype.output=function(src){var out="",link,text,href,cap;while(src){if(cap=this.rules.escape.exec(src)){src=src.substring(cap[0].length);out+=cap[1];continue}if(cap=this.rules.autolink.exec(src)){src=src.substring(cap[0].length);if(cap[2]==="@"){text=cap[1].charAt(6)===":"?this.mangle(cap[1].substring(7)):this.mangle(cap[1]);href=this.mangle("mailto:")+text}else{text=escape(cap[1]);href=text}out+=this.renderer.link(href,null,text);continue}if(!this.inLink&&(cap=this.rules.url.exec(src))){src=src.substring(cap[0].length);text=escape(cap[1]);href=text;out+=this.renderer.link(href,null,text);continue}if(cap=this.rules.tag.exec(src)){if(!this.inLink&&/^<a /i.test(cap[0])){this.inLink=true}else if(this.inLink&&/^<\/a>/i.test(cap[0])){this.inLink=false}src=src.substring(cap[0].length);out+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(cap[0]):escape(cap[0]):cap[0];continue}if(cap=this.rules.link.exec(src)){src=src.substring(cap[0].length);this.inLink=true;out+=this.outputLink(cap,{href:cap[2],title:cap[3]});this.inLink=false;continue}if((cap=this.rules.reflink.exec(src))||(cap=this.rules.nolink.exec(src))){src=src.substring(cap[0].length);link=(cap[2]||cap[1]).replace(/\s+/g," ");link=this.links[link.toLowerCase()];if(!link||!link.href){out+=cap[0].charAt(0);src=cap[0].substring(1)+src;continue}this.inLink=true;out+=this.outputLink(cap,link);this.inLink=false;continue}if(cap=this.rules.strong.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.strong(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.em.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.em(this.output(cap[2]||cap[1]));continue}if(cap=this.rules.code.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.codespan(escape(cap[2],true));continue}if(cap=this.rules.br.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.br();continue}if(cap=this.rules.del.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.del(this.output(cap[1]));continue}if(cap=this.rules.text.exec(src)){src=src.substring(cap[0].length);out+=this.renderer.text(escape(this.smartypants(cap[0])));continue}if(src){throw new Error("Infinite loop on byte: "+src.charCodeAt(0))}}return out};InlineLexer.prototype.outputLink=function(cap,link){var href=escape(link.href),title=link.title?escape(link.title):null;return cap[0].charAt(0)!=="!"?this.renderer.link(href,title,this.output(cap[1])):this.renderer.image(href,title,escape(cap[1]))};InlineLexer.prototype.smartypants=function(text){if(!this.options.smartypants)return text;return text.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")};InlineLexer.prototype.mangle=function(text){if(!this.options.mangle)return text;var out="",l=text.length,i=0,ch;for(;i<l;i++){ch=text.charCodeAt(i);if(Math.random()>.5){ch="x"+ch.toString(16)}out+="&#"+ch+";"}return out};function Renderer(options){this.options=options||{}}Renderer.prototype.code=function(code,lang,escaped){if(this.options.highlight){var out=this.options.highlight(code,lang);if(out!=null&&out!==code){escaped=true;code=out}}if(!lang){return"<pre><code>"+(escaped?code:escape(code,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+escape(lang,true)+'">'+(escaped?code:escape(code,true))+"\n</code></pre>\n"};Renderer.prototype.blockquote=function(quote){return"<blockquote>\n"+quote+"</blockquote>\n"};Renderer.prototype.html=function(html){return html};Renderer.prototype.heading=function(text,level,raw){return"<h"+level+' id="'+this.options.headerPrefix+raw.toLowerCase().replace(/[^\w]+/g,"-")+'">'+text+"</h"+level+">\n"};Renderer.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};Renderer.prototype.list=function(body,ordered){var type=ordered?"ol":"ul";return"<"+type+">\n"+body+"</"+type+">\n"};Renderer.prototype.listitem=function(text){return"<li>"+text+"</li>\n"};Renderer.prototype.paragraph=function(text){return"<p>"+text+"</p>\n"};Renderer.prototype.table=function(header,body){return"<table>\n"+"<thead>\n"+header+"</thead>\n"+"<tbody>\n"+body+"</tbody>\n"+"</table>\n"};Renderer.prototype.tablerow=function(content){return"<tr>\n"+content+"</tr>\n"};Renderer.prototype.tablecell=function(content,flags){var type=flags.header?"th":"td";var tag=flags.align?"<"+type+' style="text-align:'+flags.align+'">':"<"+type+">";return tag+content+"</"+type+">\n"};Renderer.prototype.strong=function(text){return"<strong>"+text+"</strong>"};Renderer.prototype.em=function(text){return"<em>"+text+"</em>"};Renderer.prototype.codespan=function(text){return"<code>"+text+"</code>"};Renderer.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};Renderer.prototype.del=function(text){return"<del>"+text+"</del>"};Renderer.prototype.link=function(href,title,text){if(this.options.sanitize){try{var prot=decodeURIComponent(unescape(href)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(prot.indexOf("javascript:")===0||prot.indexOf("vbscript:")===0||prot.indexOf("data:")===0){return""}}var out='<a href="'+href+'"';if(title){out+=' title="'+title+'"'}out+=">"+text+"</a>";return out};Renderer.prototype.image=function(href,title,text){var out='<img src="'+href+'" alt="'+text+'"';if(title){out+=' title="'+title+'"'}out+=this.options.xhtml?"/>":">";return out};Renderer.prototype.text=function(text){return text};function Parser(options){this.tokens=[];this.token=null;this.options=options||marked.defaults;this.options.renderer=this.options.renderer||new Renderer;this.renderer=this.options.renderer;this.renderer.options=this.options}Parser.parse=function(src,options,renderer){var parser=new Parser(options,renderer);return parser.parse(src)};Parser.prototype.parse=function(src){this.inline=new InlineLexer(src.links,this.options,this.renderer);this.tokens=src.reverse();var out="";while(this.next()){out+=this.tok()}return out};Parser.prototype.next=function(){return this.token=this.tokens.pop()};Parser.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};Parser.prototype.parseText=function(){var body=this.token.text;while(this.peek().type==="text"){body+="\n"+this.next().text}return this.inline.output(body)};Parser.prototype.tok=function(){switch(this.token.type){case"space":{return""}case"hr":{return this.renderer.hr()}case"heading":{return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text)}case"code":{return this.renderer.code(this.token.text,this.token.lang,this.token.escaped)}case"table":{var header="",body="",i,row,cell,flags,j;cell="";for(i=0;i<this.token.header.length;i++){flags={header:true,align:this.token.align[i]};cell+=this.renderer.tablecell(this.inline.output(this.token.header[i]),{header:true,align:this.token.align[i]})}header+=this.renderer.tablerow(cell);for(i=0;i<this.token.cells.length;i++){row=this.token.cells[i];cell="";for(j=0;j<row.length;j++){cell+=this.renderer.tablecell(this.inline.output(row[j]),{header:false,align:this.token.align[j]})}body+=this.renderer.tablerow(cell)}return this.renderer.table(header,body)}case"blockquote_start":{var body="";while(this.next().type!=="blockquote_end"){body+=this.tok()}return this.renderer.blockquote(body)}case"list_start":{var body="",ordered=this.token.ordered;while(this.next().type!=="list_end"){body+=this.tok()}return this.renderer.list(body,ordered)}case"list_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(body)}case"loose_item_start":{var body="";while(this.next().type!=="list_item_end"){body+=this.tok()}return this.renderer.listitem(body)}case"html":{var html=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(html)}case"paragraph":{return this.renderer.paragraph(this.inline.output(this.token.text))}case"text":{return this.renderer.paragraph(this.parseText())}}};function escape(html,encode){return html.replace(!encode?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function unescape(html){return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(_,n){n=n.toLowerCase();if(n==="colon")return":";if(n.charAt(0)==="#"){return n.charAt(1)==="x"?String.fromCharCode(parseInt(n.substring(2),16)):String.fromCharCode(+n.substring(1))}return""})}function replace(regex,opt){regex=regex.source;opt=opt||"";return function self(name,val){if(!name)return new RegExp(regex,opt);val=val.source||val;val=val.replace(/(^|[^\[])\^/g,"$1");regex=regex.replace(name,val);return self}}function noop(){}noop.exec=noop;function merge(obj){var i=1,target,key;for(;i<arguments.length;i++){target=arguments[i];for(key in target){if(Object.prototype.hasOwnProperty.call(target,key)){obj[key]=target[key]}}}return obj}function marked(src,opt,callback){if(callback||typeof opt==="function"){if(!callback){callback=opt;opt=null}opt=merge({},marked.defaults,opt||{});var highlight=opt.highlight,tokens,pending,i=0;try{tokens=Lexer.lex(src,opt)}catch(e){return callback(e)}pending=tokens.length;var done=function(err){if(err){opt.highlight=highlight;return callback(err)}var out;try{out=Parser.parse(tokens,opt)}catch(e){err=e}opt.highlight=highlight;return err?callback(err):callback(null,out)};if(!highlight||highlight.length<3){return done()}delete opt.highlight;if(!pending)return done();for(;i<tokens.length;i++){(function(token){if(token.type!=="code"){return--pending||done()}return highlight(token.text,token.lang,function(err,code){if(err)return done(err);if(code==null||code===token.text){return--pending||done()}token.text=code;token.escaped=true;--pending||done()})})(tokens[i])}return}try{if(opt)opt=merge({},marked.defaults,opt);return Parser.parse(Lexer.lex(src,opt),opt)}catch(e){e.message+="\nPlease report this to https://github.com/chjj/marked.";if((opt||marked.defaults).silent){return"<p>An error occured:</p><pre>"+escape(e.message+"",true)+"</pre>"}throw e}}marked.options=marked.setOptions=function(opt){merge(marked.defaults,opt);return marked};marked.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,sanitizer:null,mangle:true,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new Renderer,xhtml:false};marked.Parser=Parser;marked.parser=Parser.parse;marked.Renderer=Renderer;marked.Lexer=Lexer;marked.lexer=Lexer.lex;marked.InlineLexer=InlineLexer;marked.inlineLexer=InlineLexer.output;marked.parse=marked;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=marked}else if(typeof define==="function"&&define.amd){define(function(){return marked})}else{this.marked=marked}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());

	return module.exports;
}();


// FORMAT OPTIONS FOR MARKED IMPLEMENTATION

function _Markdown_formatOptions(options)
{
	function toHighlight(code, lang)
	{
		if (!lang && elm$core$Maybe$isJust(options.a4))
		{
			lang = options.a4.a;
		}

		if (typeof hljs !== 'undefined' && lang && hljs.listLanguages().indexOf(lang) >= 0)
		{
			return hljs.highlight(lang, code, true).value;
		}

		return code;
	}

	var gfm = options.a8.a;

	return {
		highlight: toHighlight,
		gfm: gfm,
		tables: gfm && gfm.dw,
		breaks: gfm && gfm.bP,
		sanitize: options.df,
		smartypants: options.bv
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.cq,
		impl.dC,
		impl.dt,
		function(sendToApp, initialModel) {
			var view = impl.dF;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
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
		impl.cq,
		impl.dC,
		impl.dt,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.af && impl.af(sendToApp)
			var view = impl.dF;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.bN);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.dz) && (_VirtualDom_doc.title = title = doc.dz);
			});
		}
	);
});



// ANIMATION


var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };


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
	var onUrlChange = impl.c_;
	var onUrlRequest = impl.c$;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		af: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.download)
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.bq === next.bq
							&& curr.a9 === next.a9
							&& curr.bn.a === next.bn.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		cq: function(flags)
		{
			return A3(impl.cq, flags, _Browser_getUrl(), key);
		},
		dF: impl.dF,
		dC: impl.dC,
		dt: impl.dt
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
		? { cl: 'hidden', Y: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { cl: 'mozHidden', Y: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { cl: 'msHidden', Y: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { cl: 'webkitHidden', Y: 'webkitvisibilitychange' }
		: { cl: 'hidden', Y: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			cancelAnimationFrame(id);
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
		bu: _Browser_getScene(),
		bz: {
			ax: _Browser_window.pageXOffset,
			ay: _Browser_window.pageYOffset,
			V: _Browser_doc.documentElement.clientWidth,
			J: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		V: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		J: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			bu: {
				V: node.scrollWidth,
				J: node.scrollHeight
			},
			bz: {
				ax: node.scrollLeft,
				ay: node.scrollTop,
				V: node.clientWidth,
				J: node.clientHeight
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
			bu: _Browser_getScene(),
			bz: {
				ax: x,
				ay: y,
				V: _Browser_doc.documentElement.clientWidth,
				J: _Browser_doc.documentElement.clientHeight
			},
			ca: {
				ax: x + rect.left,
				ay: y + rect.top,
				V: rect.width,
				J: rect.height
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
var author$project$ClientTypes$FillRandomElemsList = function (a) {
	return {$: 26, a: a};
};
var author$project$ClientTypes$Interact = function (a) {
	return {$: 3, a: a};
};
var author$project$ClientTypes$InteractStepThree = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$ClientTypes$InteractStepTwo = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var author$project$ClientTypes$NewCoordsForInterIdFailed = function (a) {
	return {$: 11, a: a};
};
var author$project$ClientTypes$NotInTheZone = F4(
	function (a, b, c, d) {
		return {$: 12, a: a, b: b, c: c, d: d};
	});
var author$project$ClientTypes$ProcessLoadHistory = F2(
	function (a, b) {
		return {$: 22, a: a, b: b};
	});
var author$project$ClientTypes$SetAvailableLanguages = function (a) {
	return {$: 2, a: a};
};
var author$project$ClientTypes$SetDisplayLanguage = function (a) {
	return {$: 1, a: a};
};
var author$project$ClientTypes$SetDontNeedToBeInZone = function (a) {
	return {$: 0, a: a};
};
var author$project$ClientTypes$SettingsButtonsOption = function (a) {
	return {$: 7, a: a};
};
var author$project$ClientTypes$SettingsChangeOptionAutoplay = function (a) {
	return {$: 4, a: a};
};
var author$project$ClientTypes$SettingsHideExitToFinalScreenButton = {$: 9};
var author$project$ClientTypes$SettingsLayoutWithSidebar = function (a) {
	return {$: 6, a: a};
};
var author$project$ClientTypes$SettingsShowExitToFinalScreenButton = {$: 8};
var author$project$ClientTypes$SettingsToggleShowExpanded = {$: 3};
var author$project$ClientTypes$SettingsToggleShowHideSaveLoadBtns = {$: 5};
var author$project$ClientTypes$StartMainGame = {$: 0};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
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
var elm$core$Basics$EQ = 1;
var elm$core$Basics$LT = 0;
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = 2;
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
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
	var dict = _n0;
	return elm$core$Dict$keys(dict);
};
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
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
var author$project$Components$getClassName = function (_n0) {
	var id = _n0.a;
	var components = _n0.b;
	var _n1 = A2(elm$core$Dict$get, 'className', components);
	if ((!_n1.$) && (_n1.a.$ === 1)) {
		var className = _n1.a.a;
		return className;
	} else {
		return '';
	}
};
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$Red = 0;
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
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
					0,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1) {
				case 0:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
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
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
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
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var author$project$Components$mergeDicts = F2(
	function (dict1, dict2) {
		var mergeRule = F2(
			function (tup, dict) {
				return _Utils_eq(
					A2(elm$core$Dict$get, tup.a, dict),
					elm$core$Maybe$Nothing) ? A3(elm$core$Dict$insert, tup.a, tup.b, dict) : dict;
			});
		var ltups = elm$core$Dict$toList(dict1);
		return A3(
			elm$core$List$foldl,
			F2(
				function (tup, dict) {
					return A2(mergeRule, tup, dict);
				}),
			dict2,
			ltups);
	});
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var author$project$Components$getTheLgsDisplayInfo = F3(
	function (ldesiredlanguageIds, priorDict, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		var fillIt = F2(
			function (key, dict) {
				var _n2 = A2(elm$core$Dict$get, key, dict);
				if (!_n2.$) {
					var val = _n2.a;
					return dict;
				} else {
					var _n3 = A2(elm$core$Dict$get, 'en', dict);
					if (_n3.$ === 1) {
						return A3(
							elm$core$Dict$insert,
							key,
							{Z: id, E: id},
							dict);
					} else {
						var englishVal = _n3.a;
						return A3(elm$core$Dict$insert, key, englishVal, dict);
					}
				}
			});
		var dict1 = function () {
			var _n1 = A2(elm$core$Dict$get, 'displayInfo', components);
			if ((!_n1.$) && (!_n1.a.$)) {
				var dict = _n1.a.a;
				return dict;
			} else {
				return elm$core$Dict$empty;
			}
		}();
		var mergedDict = A2(author$project$Components$mergeDicts, dict1, priorDict);
		return A3(
			elm$core$List$foldl,
			F2(
				function (key, dict) {
					return A2(fillIt, key, dict);
				}),
			mergedDict,
			ldesiredlanguageIds);
	});
var author$project$Components$getLgsDisplayInfo = F2(
	function (ldesiredlanguageIds, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		return A3(
			author$project$Components$getTheLgsDisplayInfo,
			ldesiredlanguageIds,
			elm$core$Dict$empty,
			_Utils_Tuple2(id, components));
	});
var elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === -2) {
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
var author$project$Components$getDictLgDescriptions = F2(
	function (ldesiredlanguageIds, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		var dict = A2(
			author$project$Components$getLgsDisplayInfo,
			ldesiredlanguageIds,
			_Utils_Tuple2(id, components));
		return A2(
			elm$core$Dict$map,
			F2(
				function (key, val) {
					return val.Z;
				}),
			dict);
	});
var author$project$Components$getDictLgNames = F2(
	function (ldesiredlanguageIds, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		var dict = A2(
			author$project$Components$getLgsDisplayInfo,
			ldesiredlanguageIds,
			_Utils_Tuple2(id, components));
		return A2(
			elm$core$Dict$map,
			F2(
				function (key, val) {
					return val.E;
				}),
			dict);
	});
var author$project$Components$getDictLgNamesAndCoords = F2(
	function (ldesiredlanguageIds, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		var _n1 = A2(elm$core$Dict$get, 'needsToBeInGpsZone', components);
		if ((!_n1.$) && (_n1.a.$ === 8)) {
			var _n2 = _n1.a;
			var bval = _n2.a;
			var dlat = _n2.b;
			var dlon = _n2.c;
			var mbRadius = _n2.d;
			var dict = A2(
				author$project$Components$getLgsDisplayInfo,
				ldesiredlanguageIds,
				_Utils_Tuple2(id, components));
			return A2(
				elm$core$Dict$map,
				F2(
					function (key, val) {
						return _Utils_Tuple3(val.E, dlat, dlon);
					}),
				dict);
		} else {
			return elm$core$Dict$empty;
		}
	});
var author$project$Components$getExits = function (_n0) {
	var id = _n0.a;
	var components = _n0.b;
	var _n1 = A2(elm$core$Dict$get, 'connectedLocations', components);
	if ((!_n1.$) && (_n1.a.$ === 2)) {
		var exits = _n1.a.a;
		return exits;
	} else {
		return _List_Nil;
	}
};
var author$project$Components$getLanguagesAudioDict = function (_n0) {
	var id = _n0.a;
	var components = _n0.b;
	var _n1 = A2(elm$core$Dict$get, 'audioContent', components);
	if ((!_n1.$) && (_n1.a.$ === 5)) {
		var audioDict = _n1.a.a;
		return audioDict;
	} else {
		return elm$core$Dict$empty;
	}
};
var author$project$Components$getLanguagesNarrativeDict = function (_n0) {
	var id = _n0.a;
	var components = _n0.b;
	var _n1 = A2(elm$core$Dict$get, 'languageNarratives', components);
	if ((!_n1.$) && (_n1.a.$ === 4)) {
		var narrativesDict = _n1.a.a;
		return narrativesDict;
	} else {
		return elm$core$Dict$empty;
	}
};
var elm$core$Basics$False = 1;
var elm$core$Basics$True = 0;
var author$project$Components$getNeedsGpsCoords = function (_n0) {
	var id = _n0.a;
	var components = _n0.b;
	var _n1 = A2(elm$core$Dict$get, 'needsGpsCoords', components);
	if (((!_n1.$) && (_n1.a.$ === 7)) && _n1.a.a) {
		return true;
	} else {
		return false;
	}
};
var author$project$Components$getNeedsToBeInGpsZone = function (_n0) {
	var id = _n0.a;
	var components = _n0.b;
	var _n1 = A2(elm$core$Dict$get, 'needsToBeInGpsZone', components);
	if ((!_n1.$) && (_n1.a.$ === 8)) {
		var _n2 = _n1.a;
		var bval = _n2.a;
		var dlat = _n2.b;
		var dlon = _n2.c;
		var mbRadius = _n2.d;
		return elm$core$Maybe$Just(
			{cB: dlat, cF: dlon, cQ: mbRadius, cX: bval});
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Types$NoQuasiChangeWithBackend = {$: 0};
var author$project$Engine$noQuasiChangeWithBackend = author$project$Types$NoQuasiChangeWithBackend;
var author$project$Types$With = function (a) {
	return {$: 7, a: a};
};
var author$project$Engine$with = function (id) {
	return author$project$Types$With(id);
};
var author$project$Components$getRuleData = function (_n0) {
	var id = _n0.a;
	var components = _n0.b;
	var _n1 = A2(elm$core$Dict$get, 'ruleData', components);
	if ((!_n1.$) && (_n1.a.$ === 6)) {
		var rule = _n1.a.a;
		return rule;
	} else {
		return {
			bT: _List_Nil,
			bZ: _List_Nil,
			cu: author$project$Engine$with(''),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: _List_Nil
		};
	}
};
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Components$getSingleLgDisplayInfo = F2(
	function (lgId, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		var theDict = A2(
			author$project$Components$getLgsDisplayInfo,
			_List_fromArray(
				[lgId]),
			_Utils_Tuple2(id, components));
		return A2(
			elm$core$Maybe$withDefault,
			{Z: 'No Info', E: 'No Info'},
			A2(elm$core$Dict$get, lgId, theDict));
	});
var author$project$Engine$CompleteTheUpdate = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Engine$PreUpdate = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Engine$Model = elm$core$Basics$identity;
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
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
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var author$project$Engine$addToRandomElemsList = F2(
	function (lfloats, _n0) {
		var story = _n0;
		var newStory = _Utils_update(
			story,
			{
				B: A2(elm$core$List$append, story.B, lfloats)
			});
		return newStory;
	});
var author$project$Engine$getChoiceLanguages = function (_n0) {
	var story = _n0;
	return story.a1;
};
var author$project$Engine$getCurrentLocation = function (_n0) {
	var story = _n0;
	return story.b3;
};
var author$project$Engine$Manifest$getInteractableAttribute = F2(
	function (attrId, mbinteractable) {
		if (!mbinteractable.$) {
			switch (mbinteractable.a.$) {
				case 0:
					var idata = mbinteractable.a.a;
					return A2(elm$core$Dict$get, attrId, idata.a);
				case 2:
					var cdata = mbinteractable.a.a;
					return A2(elm$core$Dict$get, attrId, cdata.a);
				default:
					var ldata = mbinteractable.a.a;
					return A2(elm$core$Dict$get, attrId, ldata.a);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$getInteractableAttribute = F3(
	function (attrId, interactableId, _n0) {
		var story = _n0;
		return A2(
			author$project$Engine$Manifest$getInteractableAttribute,
			attrId,
			A2(elm$core$Dict$get, interactableId, story.l));
	});
var author$project$Engine$Manifest$getItemWrittenContent = function (mbInteractable) {
	if ((!mbInteractable.$) && (!mbInteractable.a.$)) {
		var idata = mbInteractable.a.a;
		return idata.q;
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Engine$getItemWrittenContent = F2(
	function (id, _n0) {
		var story = _n0;
		var theManifest = story.l;
		var mbinteractable = A2(elm$core$Dict$get, id, theManifest);
		return author$project$Engine$Manifest$getItemWrittenContent(mbinteractable);
	});
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
var author$project$Engine$getRandomElemsListSize = function (_n0) {
	var story = _n0;
	return elm$core$List$length(story.B);
};
var author$project$Engine$hasFreezingEnd = function (_n0) {
	var story = _n0;
	var _n1 = story.aw;
	if (_n1.$ === 1) {
		return false;
	} else {
		var anEnd = _n1.a;
		if (!anEnd.a) {
			var _n3 = anEnd.a;
			var mbs = anEnd.b;
			return true;
		} else {
			return false;
		}
	}
};
var author$project$Types$Character = function (a) {
	return {$: 2, a: a};
};
var author$project$Types$CharacterData = F6(
	function (interactableId, characterPlacement, attributes, newCWCmds, interactionErrors, interactionWarnings) {
		return {a: attributes, aB: characterPlacement, bc: interactableId, K: interactionErrors, L: interactionWarnings, Q: newCWCmds};
	});
var author$project$Types$CharacterOffScreen = {$: 1};
var author$project$Engine$Manifest$character = function (_n0) {
	var characterId = _n0.a;
	var dictCharacterInfo = _n0.b;
	var characterData = A6(author$project$Types$CharacterData, characterId, author$project$Types$CharacterOffScreen, dictCharacterInfo, _List_Nil, _List_Nil, _List_Nil);
	return author$project$Types$Character(characterData);
};
var author$project$Types$Item = function (a) {
	return {$: 0, a: a};
};
var author$project$Types$ItemData = F9(
	function (interactableId, fixed, itemPlacement, isWritable, writtenContent, attributes, newCWCmds, interactionErrors, interactionWarnings) {
		return {a: attributes, ap: fixed, bc: interactableId, K: interactionErrors, L: interactionWarnings, cx: isWritable, o: itemPlacement, Q: newCWCmds, q: writtenContent};
	});
var author$project$Types$ItemOffScreen = {$: 2};
var author$project$Engine$Manifest$item = function (_n0) {
	var itemId = _n0.a;
	var dictItemInfo = _n0.b;
	var itemData = A9(author$project$Types$ItemData, itemId, false, author$project$Types$ItemOffScreen, false, elm$core$Maybe$Nothing, dictItemInfo, _List_Nil, _List_Nil, _List_Nil);
	return author$project$Types$Item(itemData);
};
var author$project$Types$Location = function (a) {
	return {$: 1, a: a};
};
var author$project$Types$LocationData = F6(
	function (interactableId, shown, attributes, newCWCmds, interactionErrors, interactionWarnings) {
		return {a: attributes, bc: interactableId, K: interactionErrors, L: interactionWarnings, Q: newCWCmds, aS: shown};
	});
var author$project$Engine$Manifest$location = function (_n0) {
	var locationId = _n0.a;
	var dictLocationInfo = _n0.b;
	var locationData = A6(author$project$Types$LocationData, locationId, false, dictLocationInfo, _List_Nil, _List_Nil, _List_Nil);
	return author$project$Types$Location(locationData);
};
var author$project$Engine$Manifest$init = function (_n0) {
	var items = _n0.cy;
	var locations = _n0.cE;
	var characters = _n0.bU;
	var insertInterFn = F3(
		function (interactableConstructor, _n2, acc) {
			var interId = _n2.a;
			var interInfo = _n2.b;
			return A3(
				elm$core$Dict$insert,
				interId,
				interactableConstructor(
					_Utils_Tuple2(interId, interInfo)),
				acc);
		});
	var foldInterFn = F3(
		function (interactableConstructor, interactableList, acc) {
			return A3(
				elm$core$List$foldr,
				function (_n1) {
					var interId = _n1.a;
					var interInfo = _n1.b;
					return A2(
						insertInterFn,
						interactableConstructor,
						_Utils_Tuple2(interId, interInfo));
				},
				acc,
				interactableList);
		});
	return A3(
		foldInterFn,
		author$project$Engine$Manifest$character,
		characters,
		A3(
			foldInterFn,
			author$project$Engine$Manifest$location,
			locations,
			A3(foldInterFn, author$project$Engine$Manifest$item, items, elm$core$Dict$empty)));
};
var author$project$Engine$init = F5(
	function (itemsCharactersLocationsRecord, playerId, llanguages, rules, lprandom_floats) {
		return {
			a1: llanguages,
			b3: '',
			a2: '',
			aq: _List_Nil,
			B: lprandom_floats,
			l: author$project$Engine$Manifest$init(itemsCharactersLocationsRecord),
			aP: playerId,
			aR: rules,
			aw: elm$core$Maybe$Nothing
		};
	});
var author$project$Engine$Manifest$isWritable = F2(
	function (interactableId, manifest) {
		return function (mbinteractable) {
			if ((!mbinteractable.$) && (!mbinteractable.a.$)) {
				var idata = mbinteractable.a.a;
				return idata.cx;
			} else {
				return false;
			}
		}(
			A2(elm$core$Dict$get, interactableId, manifest));
	});
var author$project$Engine$isWritable = F2(
	function (interactableId, _n0) {
		var story = _n0;
		return A2(author$project$Engine$Manifest$isWritable, interactableId, story.l);
	});
var author$project$Engine$EngineUpdateCompleteResponse = function (a) {
	return {$: 1, a: a};
};
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$append = _Utils_append;
var author$project$Engine$Manifest$writeInteractionIncident = F3(
	function (incidentType, incidentStr, mbInteractable) {
		var writeHelper = F3(
			function (theIncidentType, theIncidentStr, dataRecord) {
				var descriptionStr = theIncidentStr + ('InteractableId : ' + dataRecord.bc);
				return (theIncidentType === 'warning') ? _Utils_update(
					dataRecord,
					{
						L: A2(elm$core$List$cons, descriptionStr, dataRecord.L)
					}) : _Utils_update(
					dataRecord,
					{
						K: A2(elm$core$List$cons, descriptionStr, dataRecord.K)
					});
			});
		if (!mbInteractable.$) {
			switch (mbInteractable.a.$) {
				case 0:
					var idata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							A3(writeHelper, incidentType, incidentStr, idata)));
				case 2:
					var cdata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							A3(writeHelper, incidentType, incidentStr, cdata)));
				default:
					var ldata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							A3(writeHelper, incidentType, incidentStr, ldata)));
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$addLocation = function (mbInteractable) {
	if (!mbInteractable.$) {
		if (mbInteractable.a.$ === 1) {
			var ldata = mbInteractable.a.a;
			var newldata = _Utils_update(
				ldata,
				{aS: true});
			return elm$core$Maybe$Just(
				author$project$Types$Location(newldata));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use addLocation function with an interactable that is not a Location ! ', mbInteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Engine$Manifest$createAttributeIfNotExists = F3(
	function (initialVal, attrId, mbinteractable) {
		var getNewDataRecord = F3(
			function (theInitialVal, theAttrId, dataRecord) {
				var newAttributes = function () {
					var _n1 = A2(elm$core$Dict$get, theAttrId, dataRecord.a);
					if (_n1.$ === 1) {
						return A3(elm$core$Dict$insert, theAttrId, theInitialVal, dataRecord.a);
					} else {
						var c = _n1.a;
						return dataRecord.a;
					}
				}();
				var newDataRecord = _Utils_update(
					dataRecord,
					{a: newAttributes});
				return newDataRecord;
			});
		if (!mbinteractable.$) {
			switch (mbinteractable.a.$) {
				case 0:
					var idata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							A3(getNewDataRecord, initialVal, attrId, idata)));
				case 2:
					var cdata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							A3(getNewDataRecord, initialVal, attrId, cdata)));
				default:
					var ldata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							A3(getNewDataRecord, initialVal, attrId, ldata)));
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
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
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
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
				0,
				rlK,
				rlV,
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5(elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
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
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
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
				0,
				lK,
				lV,
				A5(elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
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
			if (clr === 1) {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5(elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
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
				A5(elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_n2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
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
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
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
				if (_n4.$ === -1) {
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
		if (dict.$ === -2) {
			return elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _n4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
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
						if (_n7.$ === -1) {
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
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _n1 = elm$core$Dict$getMin(right);
				if (_n1.$ === -1) {
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
		if ((_n0.$ === -1) && (!_n0.a)) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _n0 = alter(
			A2(elm$core$Dict$get, targetKey, dictionary));
		if (!_n0.$) {
			var value = _n0.a;
			return A3(elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2(elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var author$project$Engine$Manifest$setAttributeValue = F3(
	function (attrValue, attrId, mbinteractable) {
		var getNewDataRecord = F3(
			function (theattrValue, theattrId, dataRecord) {
				var newAttributes = function () {
					var _n1 = A2(elm$core$Dict$get, theattrId, dataRecord.a);
					if (_n1.$ === 1) {
						return dataRecord.a;
					} else {
						var val = _n1.a;
						return A3(
							elm$core$Dict$update,
							theattrId,
							function (_n2) {
								return elm$core$Maybe$Just(theattrValue);
							},
							dataRecord.a);
					}
				}();
				var newDataRecord = _Utils_update(
					dataRecord,
					{a: newAttributes});
				return newDataRecord;
			});
		if (!mbinteractable.$) {
			switch (mbinteractable.a.$) {
				case 0:
					var idata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							A3(getNewDataRecord, attrValue, attrId, idata)));
				case 2:
					var cdata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							A3(getNewDataRecord, attrValue, attrId, cdata)));
				default:
					var ldata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							A3(getNewDataRecord, attrValue, attrId, ldata)));
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue = F3(
	function (theVal, attrId, mbinteractable) {
		return A3(
			author$project$Engine$Manifest$setAttributeValue,
			theVal,
			attrId,
			A3(author$project$Engine$Manifest$createAttributeIfNotExists, theVal, attrId, mbinteractable));
	});
var author$project$Engine$Manifest$createAttributesIfNotExistsAndOrSetValue = F2(
	function (ltupattrs, mbinteractable) {
		if (!ltupattrs.b) {
			return mbinteractable;
		} else {
			var head = ltupattrs.a;
			var rest = ltupattrs.b;
			return A2(
				author$project$Engine$Manifest$createAttributesIfNotExistsAndOrSetValue,
				rest,
				A3(author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue, head.b, head.a, mbinteractable));
		}
	});
var author$project$Engine$Manifest$generateFeedbackTextDict = F3(
	function (dcf, answerOrChoice, manifest) {
		var fnFeedbackText = F2(
			function (lgId, choiceFeedback) {
				switch (choiceFeedback.$) {
					case 0:
						return _List_Nil;
					case 1:
						var ls = choiceFeedback.a;
						return ls;
					default:
						var fn = choiceFeedback.a;
						var afterFunc = A2(fn, answerOrChoice, manifest);
						return afterFunc;
				}
			});
		var dAfterFunc = A2(
			elm$core$Dict$map,
			F2(
				function (lgId, cf) {
					return A2(fnFeedbackText, lgId, cf);
				}),
			dcf);
		return dAfterFunc;
	});
var author$project$Engine$Manifest$getAttributeByIdAndInteractableId = F3(
	function (attrId, interactableId, manifest) {
		var _n0 = A2(elm$core$Dict$get, interactableId, manifest);
		if (!_n0.$) {
			switch (_n0.a.$) {
				case 0:
					var idata = _n0.a.a;
					return A2(elm$core$Dict$get, attrId, idata.a);
				case 2:
					var cdata = _n0.a.a;
					return A2(elm$core$Dict$get, attrId, cdata.a);
				default:
					var ldata = _n0.a.a;
					return A2(elm$core$Dict$get, attrId, ldata.a);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$makeItemUnwritable = function (mbInteractable) {
	if (!mbInteractable.$) {
		if (!mbInteractable.a.$) {
			var idata = mbInteractable.a.a;
			return elm$core$Maybe$Just(
				author$project$Types$Item(
					_Utils_update(
						idata,
						{cx: false})));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use makeItemUnwritable function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Engine$Manifest$removeAttributeIfExists = F2(
	function (attrId, mbinteractable) {
		if (!mbinteractable.$) {
			switch (mbinteractable.a.$) {
				case 0:
					var idata = mbinteractable.a.a;
					var newAttributes = A2(elm$core$Dict$remove, attrId, idata.a);
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							_Utils_update(
								idata,
								{a: newAttributes})));
				case 2:
					var cdata = mbinteractable.a.a;
					var newAttributes = A2(elm$core$Dict$remove, attrId, cdata.a);
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							_Utils_update(
								cdata,
								{a: newAttributes})));
				default:
					var ldata = mbinteractable.a.a;
					var newAttributes = A2(elm$core$Dict$remove, attrId, ldata.a);
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							_Utils_update(
								ldata,
								{a: newAttributes})));
			}
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to remove attribute from  interactable that doesnt exist ', mbinteractable);
		}
	});
var author$project$Engine$Manifest$setNextChangeWorldCommandsToBeExecuted = F2(
	function (lcwcmds, mbInteractable) {
		if (!mbInteractable.$) {
			switch (mbInteractable.a.$) {
				case 0:
					var idata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							_Utils_update(
								idata,
								{Q: lcwcmds})));
				case 2:
					var cdata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							_Utils_update(
								cdata,
								{Q: lcwcmds})));
				default:
					var ldata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							_Utils_update(
								ldata,
								{Q: lcwcmds})));
			}
		} else {
			return mbInteractable;
		}
	});
var author$project$Types$ADictStringListString = function (a) {
	return {$: 4, a: a};
};
var author$project$Types$Abool = function (a) {
	return {$: 7, a: a};
};
var author$project$Types$Astring = function (a) {
	return {$: 0, a: a};
};
var author$project$Types$CreateAttributeIfNotExistsAndOrSetValue = F3(
	function (a, b, c) {
		return {$: 19, a: a, b: b, c: c};
	});
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$neq = _Utils_notEqual;
var elm$core$Basics$or = _Basics_or;
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
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Engine$Manifest$checkAndActIfChosenOptionIs = F5(
	function (playerChoice, lcOptionData, optionId, manifest, mbinteractable) {
		if (!mbinteractable.$) {
			if (!mbinteractable.a.$) {
				var idata = mbinteractable.a.a;
				var resetOptionId = 'reset_' + optionId;
				var isResetPossible = A2(
					elm$core$Maybe$withDefault,
					author$project$Types$Abool(false),
					A3(author$project$Engine$Manifest$getAttributeByIdAndInteractableId, 'isResetOptionPossible', optionId, manifest));
				var choiceStr = '  \n ___YOUR_CHOICE___' + (' ' + playerChoice);
				var choiceComparesEqualToValToMatch = function (choiceMatches) {
					if (!choiceMatches.$) {
						var strToMatch = choiceMatches.a;
						return _Utils_eq(playerChoice, strToMatch) ? true : false;
					} else {
						return (playerChoice !== '') ? true : false;
					}
				};
				var mbFindMatched = elm$core$List$head(
					A2(
						elm$core$List$filter,
						function (x) {
							return choiceComparesEqualToValToMatch(x.bX);
						},
						lcOptionData));
				var theMbInteractable = function () {
					if ((playerChoice === '') && _Utils_eq(
						A2(elm$core$Dict$get, 'chosenOption', idata.a),
						elm$core$Maybe$Nothing)) {
						return A2(author$project$Engine$Manifest$removeAttributeIfExists, 'suggestedInteraction', mbinteractable);
					} else {
						if ((playerChoice === '') || (!_Utils_eq(
							A2(elm$core$Dict$get, 'chosenOption', idata.a),
							elm$core$Maybe$Nothing))) {
							return mbinteractable;
						} else {
							if (!_Utils_eq(mbFindMatched, elm$core$Maybe$Nothing)) {
								if (!mbFindMatched.$) {
									var cOptionData = mbFindMatched.a;
									var theTextDict = A3(author$project$Engine$Manifest$generateFeedbackTextDict, cOptionData.bW, playerChoice, manifest);
									var otherInterAttribsRelatedCWcmds = A3(
										elm$core$List$foldl,
										F2(
											function (_n2, y) {
												var otherInterId = _n2.a;
												var attrId = _n2.b;
												var attrValue = _n2.c;
												return A2(
													elm$core$List$cons,
													A3(author$project$Types$CreateAttributeIfNotExistsAndOrSetValue, attrValue, attrId, otherInterId),
													y);
											}),
										_List_Nil,
										cOptionData.cG);
									return function (mbinter) {
										return _Utils_eq(
											isResetPossible,
											author$project$Types$Abool(true)) ? A3(
											author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
											author$project$Types$Astring(resetOptionId),
											'suggestedInteraction',
											mbinter) : mbinter;
									}(
										author$project$Engine$Manifest$makeItemUnwritable(
											A2(
												author$project$Engine$Manifest$removeAttributeIfExists,
												'answerOptionsList',
												A2(
													author$project$Engine$Manifest$setNextChangeWorldCommandsToBeExecuted,
													A2(elm$core$List$append, cOptionData.cD, otherInterAttribsRelatedCWcmds),
													A2(
														author$project$Engine$Manifest$createAttributesIfNotExistsAndOrSetValue,
														cOptionData.aJ,
														A3(
															author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
															author$project$Types$ADictStringListString(theTextDict),
															'additionalTextDict',
															A3(
																author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
																author$project$Types$Astring(playerChoice),
																'chosenOption',
																elm$core$Maybe$Just(
																	author$project$Types$Item(
																		_Utils_update(
																			idata,
																			{
																				q: elm$core$Maybe$Just(choiceStr)
																			}))))))))));
								} else {
									return mbinteractable;
								}
							} else {
								return mbinteractable;
							}
						}
					}
				}();
				return theMbInteractable;
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use checkIfAnswerCorrect function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$String$fromList = _String_fromList;
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var author$project$Engine$Manifest$eliminateAllWhiteSpaces = function (theStr) {
	return elm$core$String$fromList(
		A2(
			elm$core$List$filter,
			function (c) {
				return c !== ' ';
			},
			elm$core$String$toList(theStr)));
};
var author$project$Types$AnswerSpacesDontMatter = 1;
var author$project$Types$CaseInsensitiveAnswer = 1;
var elm$core$String$toLower = _String_toLower;
var author$project$Engine$Manifest$comparesEqual = F4(
	function (str1, str2, ansCase, ansSpaces) {
		var _n0 = (ansCase === 1) ? _Utils_Tuple2(
			elm$core$String$toLower(str1),
			elm$core$String$toLower(str2)) : _Utils_Tuple2(str1, str2);
		var str1_ = _n0.a;
		var str2_ = _n0.b;
		var _n1 = (ansSpaces === 1) ? _Utils_Tuple2(
			author$project$Engine$Manifest$eliminateAllWhiteSpaces(str1_),
			author$project$Engine$Manifest$eliminateAllWhiteSpaces(str2_)) : _Utils_Tuple2(str1_, str2_);
		var str1Alt = _n1.a;
		var str2Alt = _n1.b;
		return _Utils_eq(str1Alt, str2Alt) ? true : false;
	});
var elm$core$Basics$not = _Basics_not;
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
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
var author$project$Engine$Manifest$comparesEqualToAtLeastOne = F4(
	function (str1, lstrs, ansCase, ansSpaces) {
		return !elm$core$List$isEmpty(
			A2(
				elm$core$List$filter,
				function (x) {
					return x;
				},
				A2(
					elm$core$List$map,
					function (x) {
						return A4(author$project$Engine$Manifest$comparesEqual, str1, x, ansCase, ansSpaces);
					},
					lstrs)));
	});
var author$project$Types$AnInt = function (a) {
	return {$: 6, a: a};
};
var author$project$Engine$Manifest$createCounterIfNotExists = F2(
	function (counterId, mbinteractable) {
		var getNewDataRecord = F2(
			function (thecounterId, dataRecord) {
				var counterStrID = 'counter_' + thecounterId;
				var newAttributes = function () {
					var _n1 = A2(elm$core$Dict$get, counterStrID, dataRecord.a);
					if (_n1.$ === 1) {
						return A3(
							elm$core$Dict$insert,
							counterStrID,
							author$project$Types$AnInt(0),
							dataRecord.a);
					} else {
						var c = _n1.a;
						return dataRecord.a;
					}
				}();
				var newDataRecord = _Utils_update(
					dataRecord,
					{a: newAttributes});
				return newDataRecord;
			});
		if (!mbinteractable.$) {
			switch (mbinteractable.a.$) {
				case 0:
					var idata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							A2(getNewDataRecord, counterId, idata)));
				case 2:
					var cdata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							A2(getNewDataRecord, counterId, cdata)));
				default:
					var ldata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							A2(getNewDataRecord, counterId, ldata)));
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$convertMbAttrTypeToMbInt = function (mbanint) {
	if (mbanint.$ === 1) {
		return elm$core$Maybe$Nothing;
	} else {
		var val = mbanint.a;
		if (val.$ === 6) {
			var ival = val.a;
			return elm$core$Maybe$Just(ival);
		} else {
			return elm$core$Maybe$Nothing;
		}
	}
};
var author$project$Engine$Manifest$getICounterValue = F2(
	function (counterId, mbInteractable) {
		if (!mbInteractable.$) {
			switch (mbInteractable.a.$) {
				case 0:
					var idata = mbInteractable.a.a;
					return author$project$Engine$Manifest$convertMbAttrTypeToMbInt(
						A2(elm$core$Dict$get, 'counter_' + counterId, idata.a));
				case 2:
					var cdata = mbInteractable.a.a;
					return author$project$Engine$Manifest$convertMbAttrTypeToMbInt(
						A2(elm$core$Dict$get, 'counter_' + counterId, cdata.a));
				default:
					var ldata = mbInteractable.a.a;
					return author$project$Engine$Manifest$convertMbAttrTypeToMbInt(
						A2(elm$core$Dict$get, 'counter_' + counterId, ldata.a));
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$increaseCounter = F2(
	function (counterId, mbinteractable) {
		var getNewDataRecord = F2(
			function (thecounterId, dataRecord) {
				var counterStrID = 'counter_' + thecounterId;
				var newAttributes = function () {
					var _n1 = A2(elm$core$Dict$get, counterStrID, dataRecord.a);
					if (_n1.$ === 1) {
						return dataRecord.a;
					} else {
						var attrval = _n1.a;
						if (attrval.$ === 6) {
							var val = attrval.a;
							return A3(
								elm$core$Dict$update,
								counterStrID,
								function (_n3) {
									return elm$core$Maybe$Just(
										author$project$Types$AnInt(val + 1));
								},
								dataRecord.a);
						} else {
							return dataRecord.a;
						}
					}
				}();
				var newDataRecord = _Utils_update(
					dataRecord,
					{a: newAttributes});
				return newDataRecord;
			});
		if (!mbinteractable.$) {
			switch (mbinteractable.a.$) {
				case 0:
					var idata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							A2(getNewDataRecord, counterId, idata)));
				case 2:
					var cdata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							A2(getNewDataRecord, counterId, cdata)));
				default:
					var ldata = mbinteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							A2(getNewDataRecord, counterId, ldata)));
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$removeChooseOptions = function (mbinteractable) {
	return A2(author$project$Engine$Manifest$removeAttributeIfExists, 'answerOptionsList', mbinteractable);
};
var author$project$Engine$Manifest$makeItUnanswerable = function (mbinteractable) {
	return author$project$Engine$Manifest$removeChooseOptions(
		author$project$Engine$Manifest$makeItemUnwritable(mbinteractable));
};
var author$project$Types$HeaderAndAnswer = 3;
var author$project$Types$HeaderAnswerAndCorrectIncorrect = 4;
var author$project$Types$JustPlayerAnswer = 2;
var elm$core$Basics$ge = _Utils_ge;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$String$fromInt = _String_fromNumber;
var author$project$Engine$Manifest$checkIfAnswerCorrect = F5(
	function (questionAns, playerAnswer, checkAnsData, manifest, mbinteractable) {
		if (!mbinteractable.$) {
			if (!mbinteractable.a.$) {
				var idata = mbinteractable.a.a;
				var thesuccessTextDict = A3(author$project$Engine$Manifest$generateFeedbackTextDict, checkAnsData.b1, playerAnswer, manifest);
				var theInsuccessTextDict = A3(author$project$Engine$Manifest$generateFeedbackTextDict, checkAnsData.cn, playerAnswer, manifest);
				var reach_max_nr_tries = '___REACH_MAX_NR_TRIES___';
				var playerAns = ((checkAnsData.bG === 2) || ((checkAnsData.bG === 3) || (checkAnsData.bG === 4))) ? ('  \n ___YOUR_ANSWER___' + (' ' + playerAnswer)) : '';
				var otherInterAttribsRelatedCWcmds = A3(
					elm$core$List$foldl,
					F2(
						function (_n5, y) {
							var otherInterId = _n5.a;
							var attrId = _n5.b;
							var attrValue = _n5.c;
							return A2(
								elm$core$List$cons,
								A3(author$project$Types$CreateAttributeIfNotExistsAndOrSetValue, attrValue, attrId, otherInterId),
								y);
						}),
					_List_Nil,
					checkAnsData.cG);
				var nrTries = function () {
					var previousNrTries = A2(
						elm$core$Maybe$withDefault,
						0,
						A2(author$project$Engine$Manifest$getICounterValue, 'nrIncorrectAnswers', mbinteractable));
					return (playerAnswer !== '') ? (previousNrTries + 1) : previousNrTries;
				}();
				var mbMaxNrTries = checkAnsData.cO;
				var makeItUnanswarableIfReachedMaxTries = F3(
					function (mbMaxnr, nrtries, mbinter) {
						if (!mbMaxnr.$) {
							var maxnr = mbMaxnr.a;
							return (_Utils_cmp(nrtries, maxnr) > -1) ? author$project$Engine$Manifest$makeItUnanswerable(mbinter) : mbinter;
						} else {
							return mbinter;
						}
					});
				var incorrect = '  \n ___INCORRECT_ANSWER___';
				var getAnsWrong = F2(
					function (nrTriesArg, mbTheMax) {
						var ansFeedback = function () {
							if (!mbTheMax.$) {
								var theMax = mbTheMax.a;
								return (_Utils_cmp(nrTriesArg, theMax) > -1) ? ('  \n' + (' ' + reach_max_nr_tries)) : (incorrect + ('  \n' + (' ' + ('___NR_TRIES_LEFT___' + (' ' + elm$core$String$fromInt(theMax - nrTriesArg))))));
							} else {
								return incorrect;
							}
						}();
						return _Utils_ap(
							playerAns,
							(checkAnsData.bG === 4) ? ansFeedback : '');
					});
				var correct = '  \n ___CORRECT_ANSWER___';
				var answerFeedback = function (x) {
					return (checkAnsData.bG === 4) ? x : '';
				}(correct + '  \n');
				var ansRight = _Utils_ap(playerAns, answerFeedback);
				var _n1 = function () {
					var lstrs = questionAns.a;
					var lfns = questionAns.b;
					return _Utils_Tuple2(
						lstrs,
						A3(
							elm$core$List$foldl,
							F2(
								function (b1, b2) {
									return b1 || b2;
								}),
							false,
							A2(
								elm$core$List$map,
								function (fn) {
									return A2(fn, playerAnswer, manifest);
								},
								lfns)));
				}();
				var theCorrectAnswers = _n1.a;
				var bEval = _n1.b;
				var theMbInteractable = (_Utils_cmp(
					nrTries,
					A2(elm$core$Maybe$withDefault, 1000000, mbMaxNrTries)) > 0) ? author$project$Engine$Manifest$makeItUnanswerable(mbinteractable) : (((playerAnswer === '') || _Utils_eq(
					A2(elm$core$Dict$get, 'isCorrectlyAnswered', idata.a),
					elm$core$Maybe$Just(
						author$project$Types$Abool(true)))) ? mbinteractable : ((((elm$core$List$length(theCorrectAnswers) > 0) && A4(author$project$Engine$Manifest$comparesEqualToAtLeastOne, playerAnswer, theCorrectAnswers, checkAnsData.bF, checkAnsData.bI)) || bEval) ? A2(
					author$project$Engine$Manifest$setNextChangeWorldCommandsToBeExecuted,
					otherInterAttribsRelatedCWcmds,
					A2(
						author$project$Engine$Manifest$createAttributesIfNotExistsAndOrSetValue,
						checkAnsData.aJ,
						A3(
							author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
							author$project$Types$ADictStringListString(thesuccessTextDict),
							'additionalTextDict',
							A3(
								author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
								author$project$Types$Astring('___QUESTION_ANSWERED___'),
								'narrativeHeader',
								A2(
									author$project$Engine$Manifest$removeAttributeIfExists,
									'isIncorrectlyAnswered',
									A3(
										author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
										author$project$Types$Abool(true),
										'isCorrectlyAnswered',
										A3(
											author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
											author$project$Types$Astring(playerAnswer),
											'playerAnswer',
											author$project$Engine$Manifest$makeItUnanswerable(
												elm$core$Maybe$Just(
													author$project$Types$Item(
														_Utils_update(
															idata,
															{
																q: elm$core$Maybe$Just(ansRight)
															}))))))))))) : A2(
					author$project$Engine$Manifest$increaseCounter,
					'nrIncorrectAnswers',
					A3(
						makeItUnanswarableIfReachedMaxTries,
						mbMaxNrTries,
						nrTries,
						A2(
							author$project$Engine$Manifest$createCounterIfNotExists,
							'nrIncorrectAnswers',
							A3(
								author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
								author$project$Types$ADictStringListString(theInsuccessTextDict),
								'additionalTextDict',
								A2(
									author$project$Engine$Manifest$removeAttributeIfExists,
									'isCorrectlyAnswered',
									A3(
										author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
										author$project$Types$Abool(true),
										'isIncorrectlyAnswered',
										A3(
											author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
											author$project$Types$Astring(playerAnswer),
											'playerAnswer',
											elm$core$Maybe$Just(
												author$project$Types$Item(
													_Utils_update(
														idata,
														{
															q: elm$core$Maybe$Just(
																A2(getAnsWrong, nrTries, mbMaxNrTries))
														}))))))))))));
				return theMbInteractable;
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use checkIfAnswerCorrect function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$clearNextChangeWorldCommandsToBeExecuted = function (mbInteractable) {
	return A2(author$project$Engine$Manifest$setNextChangeWorldCommandsToBeExecuted, _List_Nil, mbInteractable);
};
var author$project$Engine$Manifest$clearWrittenText = function (mbInteractable) {
	if (!mbInteractable.$) {
		if (!mbInteractable.a.$) {
			var idata = mbInteractable.a.a;
			return elm$core$Maybe$Just(
				author$project$Types$Item(
					_Utils_update(
						idata,
						{q: elm$core$Maybe$Nothing})));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use clearWrittenText function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Types$ADictStringLSS = function (a) {
	return {$: 5, a: a};
};
var author$project$Engine$Manifest$createAmultiChoice = F2(
	function (dslss, mbInteractable) {
		return A2(
			author$project$Engine$Manifest$removeAttributeIfExists,
			'chosenOption',
			A3(
				author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
				author$project$Types$ADictStringLSS(dslss),
				'answerOptionsListBackup',
				A3(
					author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue,
					author$project$Types$ADictStringLSS(dslss),
					'answerOptionsList',
					mbInteractable)));
	});
var author$project$Engine$Manifest$createOrSetAttributeValueFromOtherInterAttr = F5(
	function (attrId, otherInterAtrrId, otherInterId, manifest, mbinteractable) {
		var mbAttrVal = A2(
			author$project$Engine$Manifest$getInteractableAttribute,
			otherInterAtrrId,
			A2(elm$core$Dict$get, otherInterId, manifest));
		if (!mbAttrVal.$) {
			var theAttrVal = mbAttrVal.a;
			return A3(author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue, theAttrVal, attrId, mbinteractable);
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'warning', 'Trying to use createOrSetAttributeValueFromOtherInterAttr function but attribute in other interactable doesnt exist ( or other interactable doesnt exist ) ! attributeId : ' + (attrId + (' , otherInteractableId : ' + otherInterId)), mbinteractable);
		}
	});
var author$project$Engine$Manifest$makeItemWritable = function (mbInteractable) {
	if (!mbInteractable.$) {
		if (!mbInteractable.a.$) {
			var idata = mbInteractable.a.a;
			return elm$core$Maybe$Just(
				author$project$Types$Item(
					_Utils_update(
						idata,
						{cx: true})));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use makeItemWritable function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Engine$Manifest$checkForNonExistantInteractableId = F3(
	function (interactableId, manifest, linteractionincidents) {
		var _n0 = A2(elm$core$Dict$get, interactableId, manifest);
		if (_n0.$ === 1) {
			return A2(
				elm$core$List$append,
				linteractionincidents,
				_List_fromArray(
					['Interactable with InteractableId : ' + (interactableId + ' doesn\'t exist !')]));
		} else {
			var interactable = _n0.a;
			return linteractionincidents;
		}
	});
var author$project$Engine$Manifest$clearInteractionIncidents = F2(
	function (incidentType, mbInteractable) {
		var clearHelper = F2(
			function (theIncidentType, dataRecord) {
				return (theIncidentType === 'warning') ? _Utils_update(
					dataRecord,
					{L: _List_Nil}) : _Utils_update(
					dataRecord,
					{K: _List_Nil});
			});
		if (!mbInteractable.$) {
			switch (mbInteractable.a.$) {
				case 0:
					var idata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Item(
							A2(clearHelper, incidentType, idata)));
				case 2:
					var cdata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Character(
							A2(clearHelper, incidentType, cdata)));
				default:
					var ldata = mbInteractable.a.a;
					return elm$core$Maybe$Just(
						author$project$Types$Location(
							A2(clearHelper, incidentType, ldata)));
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$getInteractionErrors = F2(
	function (interactableId, manifest) {
		var _n0 = A2(elm$core$Dict$get, interactableId, manifest);
		if (!_n0.$) {
			switch (_n0.a.$) {
				case 0:
					var idata = _n0.a.a;
					return idata.K;
				case 2:
					var cdata = _n0.a.a;
					return cdata.K;
				default:
					var ldata = _n0.a.a;
					return ldata.K;
			}
		} else {
			return _List_Nil;
		}
	});
var author$project$Engine$Manifest$getInteractionWarnings = F2(
	function (interactableId, manifest) {
		var _n0 = A2(elm$core$Dict$get, interactableId, manifest);
		if (!_n0.$) {
			switch (_n0.a.$) {
				case 0:
					var idata = _n0.a.a;
					return idata.L;
				case 2:
					var cdata = _n0.a.a;
					return cdata.L;
				default:
					var ldata = _n0.a.a;
					return ldata.L;
			}
		} else {
			return _List_Nil;
		}
	});
var author$project$Engine$Manifest$manifestUpdate = F3(
	function (interactbaleId, updateFuncMbToMb, _n0) {
		var manifest = _n0.a;
		var linteractionincidents = _n0.b;
		var newManifest = A3(elm$core$Dict$update, interactbaleId, updateFuncMbToMb, manifest);
		var newManifestUpdated = A3(
			elm$core$Dict$update,
			interactbaleId,
			author$project$Engine$Manifest$clearInteractionIncidents('error'),
			A3(
				elm$core$Dict$update,
				interactbaleId,
				author$project$Engine$Manifest$clearInteractionIncidents('warning'),
				newManifest));
		var newInteractionIncidents = A3(author$project$Engine$Manifest$checkForNonExistantInteractableId, interactbaleId, newManifest, linteractionincidents);
		var incidentswithInterErrors = A2(
			elm$core$List$append,
			newInteractionIncidents,
			A2(
				elm$core$List$map,
				function (x) {
					return 'Interaction Error : ' + x;
				},
				A2(author$project$Engine$Manifest$getInteractionErrors, interactbaleId, newManifest)));
		var incidentswithInterErrorsAndWarnings = A2(
			elm$core$List$append,
			incidentswithInterErrors,
			A2(
				elm$core$List$map,
				function (x) {
					return 'Interaction Warning : ' + x;
				},
				A2(author$project$Engine$Manifest$getInteractionWarnings, interactbaleId, newManifest)));
		return _Utils_Tuple2(newManifestUpdated, incidentswithInterErrorsAndWarnings);
	});
var author$project$Engine$Manifest$checkForNonExistantLocationId = F3(
	function (locationId, manifest, linteractionincidents) {
		var _n0 = A2(elm$core$Dict$get, locationId, manifest);
		if (_n0.$ === 1) {
			return A2(
				elm$core$List$append,
				linteractionincidents,
				_List_fromArray(
					['Problem on interaction with Location . LocationId : ' + (locationId + ' doesn\'t exist !')]));
		} else {
			var interactable = _n0.a;
			return linteractionincidents;
		}
	});
var author$project$Engine$Manifest$manifestUpdateWithLocCheck = F4(
	function (interactbaleId, locationId, updateFuncMbToMb, _n0) {
		var manifest = _n0.a;
		var linteractionincidents = _n0.b;
		var newManifest = A3(elm$core$Dict$update, interactbaleId, updateFuncMbToMb, manifest);
		var newManifestUpdated = A3(
			elm$core$Dict$update,
			interactbaleId,
			author$project$Engine$Manifest$clearInteractionIncidents('error'),
			A3(
				elm$core$Dict$update,
				interactbaleId,
				author$project$Engine$Manifest$clearInteractionIncidents('warning'),
				newManifest));
		var newInteractionIncidents = A3(
			author$project$Engine$Manifest$checkForNonExistantLocationId,
			locationId,
			newManifest,
			A3(author$project$Engine$Manifest$checkForNonExistantInteractableId, interactbaleId, newManifest, linteractionincidents));
		var incidentswithInterErrors = A2(
			elm$core$List$append,
			newInteractionIncidents,
			A2(
				elm$core$List$map,
				function (x) {
					return 'Interaction Error on lock check : ' + x;
				},
				A2(author$project$Engine$Manifest$getInteractionErrors, interactbaleId, newManifest)));
		var incidentswithInterErrorsAndWarnings = A2(
			elm$core$List$append,
			incidentswithInterErrors,
			A2(
				elm$core$List$map,
				function (x) {
					return 'Interaction Warning on lock check : ' + x;
				},
				A2(author$project$Engine$Manifest$getInteractionWarnings, interactbaleId, newManifest)));
		return _Utils_Tuple2(newManifestUpdated, incidentswithInterErrorsAndWarnings);
	});
var author$project$Engine$Manifest$moveCharacterOffScreen = function (mbInteractable) {
	if (!mbInteractable.$) {
		if (mbInteractable.a.$ === 2) {
			var cdata = mbInteractable.a.a;
			return elm$core$Maybe$Just(
				author$project$Types$Character(
					_Utils_update(
						cdata,
						{aB: author$project$Types$CharacterOffScreen})));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use moveCharacterOffScreen function with an interactable that is not a Character ! ', mbInteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Types$CharacterInLocation = function (a) {
	return {$: 0, a: a};
};
var author$project$Engine$Manifest$moveCharacterToLocation = F2(
	function (locationId, mbInteractable) {
		if (!mbInteractable.$) {
			if (mbInteractable.a.$ === 2) {
				var cdata = mbInteractable.a.a;
				return elm$core$Maybe$Just(
					author$project$Types$Character(
						_Utils_update(
							cdata,
							{
								aB: author$project$Types$CharacterInLocation(locationId)
							})));
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use moveCharacterToLocation function with an interactable that is not a Character ! ', mbInteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$moveItemOffScreen = function (mbInteractable) {
	if (!mbInteractable.$) {
		if (!mbInteractable.a.$) {
			var idata = mbInteractable.a.a;
			return elm$core$Maybe$Just(
				author$project$Types$Item(
					_Utils_update(
						idata,
						{ap: false, o: author$project$Types$ItemOffScreen})));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemOffScreen function with an interactable that is not an Item ! ', mbInteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Types$ItemInCharacterInventory = function (a) {
	return {$: 1, a: a};
};
var author$project$Engine$Manifest$moveItemToCharacterInventory = F3(
	function (charId, manifest, mbInteractable) {
		if (!mbInteractable.$) {
			if (!mbInteractable.a.$) {
				var idata = mbInteractable.a.a;
				if (!idata.ap) {
					var _n1 = A2(elm$core$Dict$get, charId, manifest);
					if (!_n1.$) {
						var acharacter = _n1.a;
						return elm$core$Maybe$Just(
							author$project$Types$Item(
								_Utils_update(
									idata,
									{
										o: author$project$Types$ItemInCharacterInventory(charId)
									})));
					} else {
						return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemToCharacterInventory function with a character that doesn\'t exist ! ', mbInteractable);
					}
				} else {
					return A3(author$project$Engine$Manifest$writeInteractionIncident, 'warning', 'Trying to use moveItemToCharacterInventory function with an interactable that is an Item fixed to a Location . Can\'t be moved ! ', mbInteractable);
				}
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemToCharacterInventory function with an interactable that is not an Item ! ', mbInteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Types$ItemInLocation = function (a) {
	return {$: 0, a: a};
};
var author$project$Engine$Manifest$moveItemToLocation = F2(
	function (locationId, mbInteractable) {
		if (!mbInteractable.$) {
			if (!mbInteractable.a.$) {
				var idata = mbInteractable.a.a;
				return elm$core$Maybe$Just(
					author$project$Types$Item(
						_Utils_update(
							idata,
							{
								ap: false,
								o: author$project$Types$ItemInLocation(locationId)
							})));
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemToLocation function with an interactable that is not an Item ! ', mbInteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$moveItemToLocationFixed = F2(
	function (locationId, mbInteractable) {
		if (!mbInteractable.$) {
			if (!mbInteractable.a.$) {
				var idata = mbInteractable.a.a;
				return elm$core$Maybe$Just(
					author$project$Types$Item(
						_Utils_update(
							idata,
							{
								ap: true,
								o: author$project$Types$ItemInLocation(locationId)
							})));
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use moveItemToLocationFixed function with an interactable that is not an Item ! ', mbInteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$removeLocation = function (mbInteractable) {
	if (!mbInteractable.$) {
		if (mbInteractable.a.$ === 1) {
			var ldata = mbInteractable.a.a;
			var newldata = _Utils_update(
				ldata,
				{aS: false});
			return elm$core$Maybe$Just(
				author$project$Types$Location(newldata));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use removeLocation function with an interactable that is not a Location ! ', mbInteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Engine$Manifest$removeMultiChoiceOptions = function (mbInteractable) {
	return A2(author$project$Engine$Manifest$removeAttributeIfExists, 'answerOptionsList', mbInteractable);
};
var author$project$Engine$Manifest$reactivateMultiChoiceFromBackup = function (mbInteractable) {
	var mbAnsOptList = A2(author$project$Engine$Manifest$getInteractableAttribute, 'answerOptionsListBackup', mbInteractable);
	if (!mbAnsOptList.$) {
		var ansOptList = mbAnsOptList.a;
		return A2(
			author$project$Engine$Manifest$removeAttributeIfExists,
			'chosenOption',
			A3(author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue, ansOptList, 'answerOptionsList', mbInteractable));
	} else {
		return mbInteractable;
	}
};
var author$project$Engine$Manifest$resetOption = function (mbinteractable) {
	if (!mbinteractable.$) {
		if (!mbinteractable.a.$) {
			var idata = mbinteractable.a.a;
			return function (mbint) {
				return _Utils_eq(
					A2(author$project$Engine$Manifest$getInteractableAttribute, 'displayOptionButtons', mbint),
					elm$core$Maybe$Just(
						author$project$Types$Abool(true))) ? author$project$Engine$Manifest$reactivateMultiChoiceFromBackup(mbint) : author$project$Engine$Manifest$makeItemWritable(mbint);
			}(
				A2(
					author$project$Engine$Manifest$removeAttributeIfExists,
					'additionalTextDict',
					A2(
						author$project$Engine$Manifest$removeAttributeIfExists,
						'chosenOption',
						elm$core$Maybe$Just(
							author$project$Types$Item(
								_Utils_update(
									idata,
									{q: elm$core$Maybe$Nothing}))))));
		} else {
			return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use resetOption function with an interactable that is not an Item ! ', mbinteractable);
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$Engine$Manifest$writeForceTextToItemFromOtherInteractableAttrib = F4(
	function (attrid, intcId, manifest, mbinteractable) {
		if (!mbinteractable.$) {
			if (!mbinteractable.a.$) {
				var idata = mbinteractable.a.a;
				var theAttrVal = A2(
					author$project$Engine$Manifest$getInteractableAttribute,
					attrid,
					A2(elm$core$Dict$get, intcId, manifest));
				var theText = function () {
					_n1$3:
					while (true) {
						if (!theAttrVal.$) {
							switch (theAttrVal.a.$) {
								case 7:
									var bval = theAttrVal.a.a;
									return bval ? 'True' : 'False';
								case 0:
									var s = theAttrVal.a.a;
									return s;
								case 6:
									var i = theAttrVal.a.a;
									return elm$core$String$fromInt(i);
								default:
									break _n1$3;
							}
						} else {
							break _n1$3;
						}
					}
					return '';
				}();
				return elm$core$Maybe$Just(
					author$project$Types$Item(
						_Utils_update(
							idata,
							{
								q: elm$core$Maybe$Just(theText)
							})));
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use writeForceTextToItemFromOtherInteractableAttrib function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$writeGpsLocInfoToItem = F2(
	function (infoText, mbInteractable) {
		if (!mbInteractable.$) {
			if (!mbInteractable.a.$) {
				var idata = mbInteractable.a.a;
				return elm$core$Maybe$Just(
					author$project$Types$Item(
						_Utils_update(
							idata,
							{
								q: elm$core$Maybe$Just(infoText)
							})));
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use writeGpsLocInfoToItem function with an interactable that is not an Item ! ', mbInteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$Manifest$writeTextToItem = F2(
	function (theText, mbinteractable) {
		if (!mbinteractable.$) {
			if (!mbinteractable.a.$) {
				var idata = mbinteractable.a.a;
				return idata.cx ? elm$core$Maybe$Just(
					author$project$Types$Item(
						_Utils_update(
							idata,
							{
								q: elm$core$Maybe$Just(theText)
							}))) : A3(author$project$Engine$Manifest$writeInteractionIncident, 'warning', 'Trying to use writeTextToItem function with an interactable that is a notWritable Item ! ', mbinteractable);
			} else {
				return A3(author$project$Engine$Manifest$writeInteractionIncident, 'error', 'Trying to use writeTextToItem function with an interactable that is not an Item ! ', mbinteractable);
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Types$TheEnd = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Engine$Manifest$processNewChangeWorldCommands = F2(
	function (interactableId, _n30) {
		var storyRecord = _n30.a;
		var linteractionincidents = _n30.b;
		var _n31 = A2(elm$core$Dict$get, interactableId, storyRecord.l);
		if (!_n31.$) {
			switch (_n31.a.$) {
				case 0:
					var idata = _n31.a.a;
					var _n32 = A3(
						elm$core$List$foldl,
						F2(
							function (chg, tup) {
								return A2(author$project$Engine$Manifest$update, chg, tup);
							}),
						_Utils_Tuple2(storyRecord, linteractionincidents),
						idata.Q);
					var newStory = _n32.a;
					var nInteractionIncidents = _n32.b;
					var _n33 = A3(
						author$project$Engine$Manifest$manifestUpdate,
						interactableId,
						author$project$Engine$Manifest$clearNextChangeWorldCommandsToBeExecuted,
						_Utils_Tuple2(newStory.l, nInteractionIncidents));
					var updatedManifest = _n33.a;
					var newInteractionIncidents = _n33.b;
					return _Utils_Tuple2(
						_Utils_update(
							newStory,
							{l: updatedManifest}),
						newInteractionIncidents);
				case 2:
					var cdata = _n31.a.a;
					var _n34 = A3(
						elm$core$List$foldl,
						F2(
							function (chg, tup) {
								return A2(author$project$Engine$Manifest$update, chg, tup);
							}),
						_Utils_Tuple2(storyRecord, linteractionincidents),
						cdata.Q);
					var newStory = _n34.a;
					var nInteractionIncidents = _n34.b;
					var _n35 = A3(
						author$project$Engine$Manifest$manifestUpdate,
						interactableId,
						author$project$Engine$Manifest$clearNextChangeWorldCommandsToBeExecuted,
						_Utils_Tuple2(newStory.l, nInteractionIncidents));
					var updatedManifest = _n35.a;
					var newInteractionIncidents = _n35.b;
					return _Utils_Tuple2(
						_Utils_update(
							newStory,
							{l: updatedManifest}),
						newInteractionIncidents);
				default:
					var ldata = _n31.a.a;
					var _n36 = A3(
						elm$core$List$foldl,
						F2(
							function (chg, tup) {
								return A2(author$project$Engine$Manifest$update, chg, tup);
							}),
						_Utils_Tuple2(storyRecord, linteractionincidents),
						ldata.Q);
					var newStory = _n36.a;
					var nInteractionIncidents = _n36.b;
					var _n37 = A3(
						author$project$Engine$Manifest$manifestUpdate,
						interactableId,
						author$project$Engine$Manifest$clearNextChangeWorldCommandsToBeExecuted,
						_Utils_Tuple2(newStory.l, nInteractionIncidents));
					var updatedManifest = _n37.a;
					var newInteractionIncidents = _n37.b;
					return _Utils_Tuple2(
						_Utils_update(
							newStory,
							{l: updatedManifest}),
						newInteractionIncidents);
			}
		} else {
			return _Utils_Tuple2(storyRecord, linteractionincidents);
		}
	});
var author$project$Engine$Manifest$update = F2(
	function (change, _n0) {
		var storyRecord = _n0.a;
		var linteractionincidents = _n0.b;
		switch (change.$) {
			case 0:
				return _Utils_Tuple2(storyRecord, linteractionincidents);
			case 1:
				var locationId = change.a;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{b3: locationId}),
					linteractionincidents);
			case 2:
				var id = change.a;
				var _n2 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$addLocation,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n2.a;
				var newIncidents = _n2.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 3:
				var id = change.a;
				var _n3 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$removeLocation,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n3.a;
				var newIncidents = _n3.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 7:
				var charId = change.a;
				var id = change.b;
				var _n4 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					A2(author$project$Engine$Manifest$moveItemToCharacterInventory, charId, storyRecord.l),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n4.a;
				var newIncidents = _n4.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 6:
				var itemId = change.a;
				var locationId = change.b;
				var _n5 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					itemId,
					author$project$Engine$Manifest$moveItemToLocation(locationId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n5.a;
				var newIncidents = _n5.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 5:
				var itemId = change.a;
				var locationId = change.b;
				var _n6 = A4(
					author$project$Engine$Manifest$manifestUpdateWithLocCheck,
					itemId,
					locationId,
					author$project$Engine$Manifest$moveItemToLocationFixed(locationId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n6.a;
				var newIncidents = _n6.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 26:
				var id = change.a;
				var _n7 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$moveItemOffScreen,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n7.a;
				var newIncidents = _n7.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 27:
				var characterId = change.a;
				var locationId = change.b;
				var _n8 = A4(
					author$project$Engine$Manifest$manifestUpdateWithLocCheck,
					characterId,
					locationId,
					author$project$Engine$Manifest$moveCharacterToLocation(locationId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n8.a;
				var newIncidents = _n8.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 28:
				var id = change.a;
				var _n9 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$moveCharacterOffScreen,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n9.a;
				var newIncidents = _n9.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 11:
				var theLgTextDict = change.a;
				var id = change.b;
				var _n10 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$writeTextToItem(theLgTextDict),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n10.a;
				var newIncidents = _n10.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 12:
				var attrid = change.a;
				var intcId = change.b;
				var id = change.c;
				var _n11 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					A3(author$project$Engine$Manifest$writeForceTextToItemFromOtherInteractableAttrib, attrid, intcId, storyRecord.l),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n11.a;
				var newIncidents = _n11.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 13:
				var theInfoStr = change.a;
				var extraInfo = change.b;
				var id = change.c;
				var _n12 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$writeGpsLocInfoToItem(theInfoStr),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n12.a;
				var newIncidents = _n12.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 14:
				var id = change.a;
				var _n13 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$clearWrittenText,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n13.a;
				var newIncidents = _n13.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 15:
				var theText = change.a;
				var playerAnswer = change.b;
				var cAnswerData = change.c;
				var interactableId = change.d;
				var _n14 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					A4(author$project$Engine$Manifest$checkIfAnswerCorrect, theText, playerAnswer, cAnswerData, storyRecord.l),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n14.a;
				var newIncidents = _n14.b;
				return A2(
					author$project$Engine$Manifest$processNewChangeWorldCommands,
					interactableId,
					_Utils_Tuple2(
						_Utils_update(
							storyRecord,
							{l: newManifest}),
						newIncidents));
			case 33:
				var playerChoice = change.a;
				var lcOptionData = change.b;
				var interactableId = change.c;
				var _n15 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					A4(author$project$Engine$Manifest$checkAndActIfChosenOptionIs, playerChoice, lcOptionData, interactableId, storyRecord.l),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n15.a;
				var newIncidents = _n15.b;
				return A2(
					author$project$Engine$Manifest$processNewChangeWorldCommands,
					interactableId,
					_Utils_Tuple2(
						_Utils_update(
							storyRecord,
							{l: newManifest}),
						newIncidents));
			case 23:
				var interactableId = change.a;
				var _n16 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					author$project$Engine$Manifest$resetOption,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n16.a;
				var newIncidents = _n16.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 21:
				var dslss = change.a;
				var id = change.b;
				var _n17 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$createAmultiChoice(dslss),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n17.a;
				var newIncidents = _n17.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 22:
				var id = change.a;
				var _n18 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$removeMultiChoiceOptions,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n18.a;
				var newIncidents = _n18.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 16:
				var counterId = change.a;
				var interactableId = change.b;
				var _n19 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					author$project$Engine$Manifest$createCounterIfNotExists(counterId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n19.a;
				var newIncidents = _n19.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 25:
				var counterId = change.a;
				var interactableId = change.b;
				var _n20 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					author$project$Engine$Manifest$increaseCounter(counterId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n20.a;
				var newIncidents = _n20.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 17:
				var attrValue = change.a;
				var attrId = change.b;
				var interactableId = change.c;
				var _n21 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					A2(author$project$Engine$Manifest$createAttributeIfNotExists, attrValue, attrId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n21.a;
				var newIncidents = _n21.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 18:
				var attrValue = change.a;
				var attrId = change.b;
				var interactableId = change.c;
				var _n22 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					A2(author$project$Engine$Manifest$setAttributeValue, attrValue, attrId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n22.a;
				var newIncidents = _n22.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 19:
				var attrValue = change.a;
				var attrId = change.b;
				var interactableId = change.c;
				var _n23 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					A2(author$project$Engine$Manifest$createAttributeIfNotExistsAndOrSetValue, attrValue, attrId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n23.a;
				var newIncidents = _n23.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 20:
				var attrId = change.a;
				var otherInterAtrrId = change.b;
				var otherInterId = change.c;
				var interactableId = change.d;
				var _n24 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					A4(author$project$Engine$Manifest$createOrSetAttributeValueFromOtherInterAttr, attrId, otherInterAtrrId, otherInterId, storyRecord.l),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n24.a;
				var newIncidents = _n24.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 24:
				var attrId = change.a;
				var interactableId = change.b;
				var _n25 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					interactableId,
					author$project$Engine$Manifest$removeAttributeIfExists(attrId),
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n25.a;
				var newIncidents = _n25.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 8:
				var id = change.a;
				var _n26 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$makeItemWritable,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n26.a;
				var newIncidents = _n26.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 9:
				var id = change.a;
				var _n27 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$makeItemUnwritable,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n27.a;
				var newIncidents = _n27.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 4:
				var id = change.a;
				var _n28 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$removeChooseOptions,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n28.a;
				var newIncidents = _n28.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 10:
				var id = change.a;
				var _n29 = A3(
					author$project$Engine$Manifest$manifestUpdate,
					id,
					author$project$Engine$Manifest$makeItUnanswerable,
					_Utils_Tuple2(storyRecord.l, linteractionincidents));
				var newManifest = _n29.a;
				var newIncidents = _n29.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{l: newManifest}),
					newIncidents);
			case 34:
				var func = change.a;
				var extraInfo = change.b;
				var interactableId = change.c;
				var lChangeWorldCommands = A2(func, extraInfo, storyRecord.l);
				return A3(
					elm$core$List$foldl,
					F2(
						function (chg, tup) {
							return A2(author$project$Engine$Manifest$update, chg, tup);
						}),
					_Utils_Tuple2(storyRecord, linteractionincidents),
					lChangeWorldCommands);
			case 29:
				var sceneName = change.a;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{a2: sceneName}),
					linteractionincidents);
			case 30:
				var dictLgs = change.a;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{a1: dictLgs}),
					linteractionincidents);
			case 31:
				var lgId = change.a;
				var lgName = change.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{
							a1: A3(elm$core$Dict$insert, lgId, lgName, storyRecord.a1)
						}),
					linteractionincidents);
			default:
				var endingtype = change.a;
				var ending = change.b;
				return _Utils_Tuple2(
					_Utils_update(
						storyRecord,
						{
							aw: elm$core$Maybe$Just(
								A2(author$project$Types$TheEnd, endingtype, ending))
						}),
					linteractionincidents);
		}
	});
var author$project$Engine$changeWorld = F2(
	function (changes, _n0) {
		var story = _n0;
		var doChange = F2(
			function (change, _n3) {
				var storyRecord = _n3.a;
				var linteractionIncidents = _n3.b;
				var _n2 = A2(
					author$project$Engine$Manifest$update,
					change,
					_Utils_Tuple2(storyRecord, linteractionIncidents));
				var newStory = _n2.a;
				var newIncidents = _n2.b;
				return _Utils_Tuple2(newStory, newIncidents);
			});
		return function (_n1) {
			var x = _n1.a;
			var y = _n1.b;
			return _Utils_Tuple2(x, y);
		}(
			A3(
				elm$core$List$foldr,
				F2(
					function (chg, y) {
						return A2(doChange, chg, y);
					}),
				_Utils_Tuple2(story, _List_Nil),
				changes));
	});
var author$project$Types$CheckAnswerData = F8(
	function (mbMaxNrTries, answerCase, answerSpaces, answerFeedback, correctAnsTextDict, incorrectAnsTextDict, lnewAttrs, lotherInterAttrs) {
		return {bF: answerCase, bG: answerFeedback, bI: answerSpaces, b1: correctAnsTextDict, cn: incorrectAnsTextDict, aJ: lnewAttrs, cG: lotherInterAttrs, cO: mbMaxNrTries};
	});
var author$project$Types$CheckIfAnswerCorrect = F4(
	function (a, b, c, d) {
		return {$: 15, a: a, b: b, c: c, d: d};
	});
var author$project$Types$ListOfAnswersAndFunctions = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Types$NoChange = {$: 0};
var author$project$Types$SimpleText = function (a) {
	return {$: 1, a: a};
};
var author$project$Types$WriteTextToItem = F2(
	function (a, b) {
		return {$: 11, a: a, b: b};
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
var author$project$Engine$replaceCheckIfAnswerCorrectUsingBackend = F4(
	function (bkendAnsStatus, strUrl, cAnswerData, interactableId) {
		switch (bkendAnsStatus.$) {
			case 0:
				return author$project$Types$NoChange;
			case 1:
				return author$project$Types$NoChange;
			case 2:
				var answerinfo = bkendAnsStatus.a;
				var checkAnswerDataRec = A8(
					author$project$Types$CheckAnswerData,
					cAnswerData.cO,
					1,
					1,
					cAnswerData.bG,
					elm$core$Dict$fromList(
						A2(
							elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x.aI,
									author$project$Types$SimpleText(
										_List_fromArray(
											[x.aW])));
							},
							answerinfo.du)),
					elm$core$Dict$fromList(
						A2(
							elm$core$List$map,
							function (x) {
								return _Utils_Tuple2(
									x.aI,
									author$project$Types$SimpleText(
										_List_fromArray(
											[x.aW])));
							},
							answerinfo.ct)),
					cAnswerData.aJ,
					cAnswerData.cG);
				var newCheckAnswerDataIfInsuccess = checkAnswerDataRec;
				var newCheckAnswerDataIfSuccess = _Utils_update(
					checkAnswerDataRec,
					{
						aJ: _Utils_ap(
							cAnswerData.aJ,
							_List_fromArray(
								[
									_Utils_Tuple2(
									'bonusText',
									author$project$Types$ADictStringListString(
										elm$core$Dict$fromList(
											A2(
												elm$core$List$map,
												function (x) {
													return _Utils_Tuple2(
														x.aI,
														_List_fromArray(
															[x.aW]));
												},
												answerinfo.dh))))
								]))
					});
				return answerinfo.cJ ? A2(author$project$Types$WriteTextToItem, '  \n' + (' ' + (' ___MAX_TRIES_ON_BACKEND___ ' + (' ,  ' + ('  \n , ' + (' ___YOUR_ANSWER___ ' + (' ' + answerinfo.ad)))))), interactableId) : ((answerinfo.aZ && answerinfo.b2) ? A4(
					author$project$Types$CheckIfAnswerCorrect,
					A2(
						author$project$Types$ListOfAnswersAndFunctions,
						_List_fromArray(
							[answerinfo.ad]),
						_List_Nil),
					answerinfo.ad,
					newCheckAnswerDataIfSuccess,
					interactableId) : ((answerinfo.aZ && answerinfo.co) ? A4(
					author$project$Types$CheckIfAnswerCorrect,
					A2(
						author$project$Types$ListOfAnswersAndFunctions,
						_List_fromArray(
							[answerinfo.ad + 'something']),
						_List_Nil),
					answerinfo.ad,
					newCheckAnswerDataIfInsuccess,
					interactableId) : author$project$Types$NoChange));
			default:
				return A2(author$project$Types$WriteTextToItem, '  \n' + (' ' + '___Couldnt_check_Answer___'), interactableId);
		}
	});
var author$project$Engine$replaceBkendQuasiCwCmdsWithCwcommands = F2(
	function (extraInfo, quasiBkendCwCommand) {
		if (!quasiBkendCwCommand.$) {
			return author$project$Types$NoChange;
		} else {
			var strUrl = quasiBkendCwCommand.a;
			var cAnswerData = quasiBkendCwCommand.b;
			var interactableId = quasiBkendCwCommand.c;
			return A4(author$project$Engine$replaceCheckIfAnswerCorrectUsingBackend, extraInfo.aA, strUrl, cAnswerData, interactableId);
		}
	});
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Engine$completeTheUpdate = F3(
	function (interactableId, extraInfoWithPendingChanges, model) {
		var story = model;
		var extraInfo = extraInfoWithPendingChanges.cv;
		var mbChangeFromQuasi = A2(
			elm$core$Maybe$map,
			author$project$Engine$replaceBkendQuasiCwCmdsWithCwcommands(extraInfo),
			extraInfoWithPendingChanges.cP);
		var allChanges = function () {
			if (mbChangeFromQuasi.$ === 1) {
				return extraInfoWithPendingChanges.bl;
			} else {
				var chg = mbChangeFromQuasi.a;
				return A2(elm$core$List$cons, chg, extraInfoWithPendingChanges.bl);
			}
		}();
		var addHistory = function (_n1) {
			var storyrec = _n1;
			return _Utils_update(
				storyrec,
				{
					aq: _Utils_ap(
						storyrec.aq,
						_List_fromArray(
							[
								_Utils_Tuple2(interactableId, extraInfo)
							]))
				});
		};
		var _n0 = A2(author$project$Engine$changeWorld, allChanges, model);
		var newModel = _n0.a;
		var lincidents = _n0.b;
		return author$project$Engine$EngineUpdateCompleteResponse(
			_Utils_Tuple2(
				addHistory(newModel),
				lincidents));
	});
var author$project$Engine$EnginePreResponse = function (a) {
	return {$: 0, a: a};
};
var author$project$Types$AnswerInfoToQuestionNeeded = function (a) {
	return {$: 1, a: a};
};
var author$project$Types$NoInfoNeeded = {$: 0};
var author$project$Engine$determineIfInfoNeeded = function (qcwcommand) {
	if (qcwcommand.$ === 1) {
		var strUrl = qcwcommand.a;
		var cAnsdata = qcwcommand.b;
		var id = qcwcommand.c;
		return author$project$Types$AnswerInfoToQuestionNeeded(strUrl);
	} else {
		return author$project$Types$NoInfoNeeded;
	}
};
var author$project$Engine$Manifest$isItem = F2(
	function (id, manifest) {
		return function (interactable) {
			if ((!interactable.$) && (!interactable.a.$)) {
				var idata = interactable.a.a;
				return true;
			} else {
				return false;
			}
		}(
			A2(elm$core$Dict$get, id, manifest));
	});
var author$project$Engine$Manifest$isLocation = F2(
	function (id, manifest) {
		return function (interactable) {
			if ((!interactable.$) && (interactable.a.$ === 1)) {
				return true;
			} else {
				return false;
			}
		}(
			A2(elm$core$Dict$get, id, manifest));
	});
var elm$core$List$sortBy = _List_sortBy;
var author$project$Engine$Rules$bestMatch = F2(
	function (heuristics, matchingRules) {
		return elm$core$List$head(
			elm$core$List$reverse(
				A2(elm$core$List$sortBy, heuristics, matchingRules)));
	});
var author$project$Engine$Manifest$attrValueIsEqualTo = F4(
	function (attrValue, attrId, interactableId, manifest) {
		var _n0 = A2(elm$core$Dict$get, interactableId, manifest);
		if (_n0.$ === 1) {
			return false;
		} else {
			var interactable = _n0.a;
			switch (interactable.$) {
				case 0:
					var idata = interactable.a;
					return _Utils_eq(
						A2(elm$core$Dict$get, attrId, idata.a),
						elm$core$Maybe$Just(attrValue)) ? true : false;
				case 2:
					var cdata = interactable.a;
					return _Utils_eq(
						A2(elm$core$Dict$get, attrId, cdata.a),
						elm$core$Maybe$Just(attrValue)) ? true : false;
				default:
					var ldata = interactable.a;
					return _Utils_eq(
						A2(elm$core$Dict$get, attrId, ldata.a),
						elm$core$Maybe$Just(attrValue)) ? true : false;
			}
		}
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (!_n0.$) {
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
var author$project$Engine$Manifest$getCharactersInLocation = F2(
	function (locationId, manifest) {
		var isInLocation = F2(
			function (locId, _n2) {
				var id = _n2.a;
				var interactable = _n2.b;
				if (interactable.$ === 2) {
					var cdata = interactable.a;
					var _n1 = cdata.aB;
					if (!_n1.$) {
						var alocation = _n1.a;
						return _Utils_eq(alocation, locId) ? elm$core$Maybe$Just(id) : elm$core$Maybe$Nothing;
					} else {
						return elm$core$Maybe$Nothing;
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			});
		return A2(
			elm$core$List$filterMap,
			isInLocation(locationId),
			elm$core$Dict$toList(manifest));
	});
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
var author$project$Engine$Manifest$characterIsInLocation = F3(
	function (characterid, currentLocation, manifest) {
		return A2(
			elm$core$List$any,
			elm$core$Basics$eq(characterid),
			A2(author$project$Engine$Manifest$getCharactersInLocation, currentLocation, manifest));
	});
var author$project$Engine$Manifest$noChosenOptionYet = F2(
	function (interactableId, manifest) {
		return function (interactable) {
			if ((!interactable.$) && (!interactable.a.$)) {
				var idata = interactable.a.a;
				return ((!_Utils_eq(
					A2(elm$core$Dict$get, 'answerOptionsList', idata.a),
					elm$core$Maybe$Nothing)) && _Utils_eq(
					A2(elm$core$Dict$get, 'chosenOption', idata.a),
					elm$core$Maybe$Nothing)) ? true : false;
			} else {
				return false;
			}
		}(
			A2(elm$core$Dict$get, interactableId, manifest));
	});
var author$project$Engine$Manifest$choiceHasAlreadyBeenMade = F2(
	function (interactableId, manifest) {
		return !A2(author$project$Engine$Manifest$noChosenOptionYet, interactableId, manifest);
	});
var author$project$Engine$Manifest$chosenOptionIsEqualTo = F2(
	function (valueToMatch, mbInputText) {
		return _Utils_eq(
			elm$core$Maybe$Just(valueToMatch),
			mbInputText) ? true : false;
	});
var author$project$Engine$Manifest$counterExists = F3(
	function (counterId, interId, manifest) {
		var helperFunc = F2(
			function (theCounterId, dataRecord) {
				var _n1 = A2(elm$core$Dict$get, 'counter_' + theCounterId, dataRecord.a);
				if (_n1.$ === 1) {
					return false;
				} else {
					var val = _n1.a;
					return true;
				}
			});
		var _n0 = A2(elm$core$Dict$get, interId, manifest);
		if (!_n0.$) {
			switch (_n0.a.$) {
				case 0:
					var idata = _n0.a.a;
					return A2(helperFunc, counterId, idata);
				case 2:
					var cdata = _n0.a.a;
					return A2(helperFunc, counterId, cdata);
				default:
					var ldata = _n0.a.a;
					return A2(helperFunc, counterId, ldata);
			}
		} else {
			return false;
		}
	});
var author$project$Engine$Manifest$counterLessThen = F4(
	function (val, counterId, interId, manifest) {
		var helperFunc = F2(
			function (theCounterId, dataRecord) {
				var _n1 = A2(elm$core$Dict$get, 'counter_' + theCounterId, dataRecord.a);
				if (_n1.$ === 1) {
					return false;
				} else {
					var attrvalue = _n1.a;
					if (attrvalue.$ === 6) {
						var value = attrvalue.a;
						return (_Utils_cmp(value, val) < 0) ? true : false;
					} else {
						return false;
					}
				}
			});
		var _n0 = A2(elm$core$Dict$get, interId, manifest);
		if (!_n0.$) {
			switch (_n0.a.$) {
				case 0:
					var idata = _n0.a.a;
					return A2(helperFunc, counterId, idata);
				case 2:
					var cdata = _n0.a.a;
					return A2(helperFunc, counterId, cdata);
				default:
					var ldata = _n0.a.a;
					return A2(helperFunc, counterId, ldata);
			}
		} else {
			return false;
		}
	});
var author$project$Engine$Manifest$counterGreaterThenOrEqualTo = F4(
	function (val, counterId, interId, manifest) {
		return A3(author$project$Engine$Manifest$counterExists, counterId, interId, manifest) && (!A4(author$project$Engine$Manifest$counterLessThen, val, counterId, interId, manifest));
	});
var author$project$Engine$Manifest$itemIsCorrectlyAnswered = F2(
	function (id, manifest) {
		return A4(
			author$project$Engine$Manifest$attrValueIsEqualTo,
			author$project$Types$Abool(true),
			'isCorrectlyAnswered',
			id,
			manifest);
	});
var author$project$Engine$Manifest$itemIsInAnyLocationOrAnyCharacterInventory = F2(
	function (itemId, manifest) {
		var _n0 = A2(elm$core$Dict$get, itemId, manifest);
		if (!_n0.$) {
			var interactable = _n0.a;
			if (!interactable.$) {
				var idata = interactable.a;
				var _n2 = idata.o;
				switch (_n2.$) {
					case 1:
						return true;
					case 0:
						var locid = _n2.a;
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
var author$project$Engine$Manifest$itemIsInAnyLocationOrCharacterInventory = F3(
	function (charId, itemId, manifest) {
		var _n0 = A2(elm$core$Dict$get, itemId, manifest);
		if (!_n0.$) {
			var interactable = _n0.a;
			if (!interactable.$) {
				var idata = interactable.a;
				var _n2 = idata.o;
				switch (_n2.$) {
					case 1:
						var charId_ = _n2.a;
						return _Utils_eq(charId, charId_) ? true : false;
					case 0:
						var locid = _n2.a;
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
var author$project$Engine$Manifest$getItemsInCharacterInventory = F2(
	function (charId, manifest) {
		var isInInventory = function (_n1) {
			var id = _n1.a;
			var interactable = _n1.b;
			if (!interactable.$) {
				var idata = interactable.a;
				return _Utils_eq(
					idata.o,
					author$project$Types$ItemInCharacterInventory(charId)) ? elm$core$Maybe$Just(id) : elm$core$Maybe$Nothing;
			} else {
				return elm$core$Maybe$Nothing;
			}
		};
		return A2(
			elm$core$List$filterMap,
			isInInventory,
			elm$core$Dict$toList(manifest));
	});
var author$project$Engine$Manifest$itemIsInCharacterInventory = F3(
	function (charId, itemId, manifest) {
		return A2(
			elm$core$List$any,
			elm$core$Basics$eq(itemId),
			A2(author$project$Engine$Manifest$getItemsInCharacterInventory, charId, manifest));
	});
var author$project$Engine$Manifest$getItemsInLocation = F2(
	function (locationId, manifest) {
		var isInLocation = F2(
			function (locationIdArg, _n2) {
				var id = _n2.a;
				var interactable = _n2.b;
				if (!interactable.$) {
					var idata = interactable.a;
					var _n1 = idata.o;
					if (!_n1.$) {
						var locId = _n1.a;
						return _Utils_eq(locId, locationIdArg) ? elm$core$Maybe$Just(id) : elm$core$Maybe$Nothing;
					} else {
						return elm$core$Maybe$Nothing;
					}
				} else {
					return elm$core$Maybe$Nothing;
				}
			});
		return A2(
			elm$core$List$filterMap,
			isInLocation(locationId),
			elm$core$Dict$toList(manifest));
	});
var author$project$Engine$Manifest$itemIsInLocation = F3(
	function (itemid, currentLocation, manifest) {
		return A2(
			elm$core$List$any,
			elm$core$Basics$eq(itemid),
			A2(author$project$Engine$Manifest$getItemsInLocation, currentLocation, manifest));
	});
var author$project$Engine$Manifest$itemIsNotCorrectlyAnswered = F2(
	function (id, manifest) {
		return !A2(author$project$Engine$Manifest$itemIsCorrectlyAnswered, id, manifest);
	});
var author$project$Engine$Manifest$itemIsOffScreen = F2(
	function (id, manifest) {
		var _n0 = A2(elm$core$Dict$get, id, manifest);
		if (!_n0.$) {
			var interactable = _n0.a;
			if (!interactable.$) {
				var idata = interactable.a;
				return _Utils_eq(idata.o, author$project$Types$ItemOffScreen) ? true : false;
			} else {
				return false;
			}
		} else {
			return false;
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
var author$project$Engine$Rules$matchesCondition = F3(
	function (_n0, mbInputText, condition) {
		var history = _n0.aq;
		var currentLocation = _n0.b3;
		var currentScene = _n0.a2;
		var manifest = _n0.l;
		switch (condition.$) {
			case 0:
				var charId = condition.a;
				var item = condition.b;
				return A3(author$project$Engine$Manifest$itemIsInCharacterInventory, charId, item, manifest);
			case 1:
				var character = condition.a;
				var location = condition.b;
				return A3(author$project$Engine$Manifest$characterIsInLocation, character, location, manifest);
			case 5:
				var item = condition.a;
				var location = condition.b;
				return A3(author$project$Engine$Manifest$itemIsInLocation, item, location, manifest);
			case 3:
				var location = condition.a;
				return _Utils_eq(currentLocation, location);
			case 6:
				var charId = condition.a;
				var item = condition.b;
				return !A3(author$project$Engine$Manifest$itemIsInCharacterInventory, charId, item, manifest);
			case 2:
				var character = condition.a;
				var location = condition.b;
				return !A3(author$project$Engine$Manifest$characterIsInLocation, character, location, manifest);
			case 7:
				var item = condition.a;
				var location = condition.b;
				return !A3(author$project$Engine$Manifest$itemIsInLocation, item, location, manifest);
			case 8:
				var item = condition.a;
				return A2(author$project$Engine$Manifest$itemIsOffScreen, item, manifest);
			case 9:
				var charId = condition.a;
				var item = condition.b;
				return A3(author$project$Engine$Manifest$itemIsInAnyLocationOrCharacterInventory, charId, item, manifest);
			case 10:
				var item = condition.a;
				return A2(author$project$Engine$Manifest$itemIsInAnyLocationOrAnyCharacterInventory, item, manifest);
			case 11:
				var item = condition.a;
				return A2(author$project$Engine$Manifest$itemIsCorrectlyAnswered, item, manifest);
			case 12:
				var item = condition.a;
				return A2(author$project$Engine$Manifest$itemIsNotCorrectlyAnswered, item, manifest);
			case 4:
				var location = condition.a;
				return !_Utils_eq(currentLocation, location);
			case 13:
				var id = condition.a;
				return A2(
					elm$core$List$member,
					id,
					A2(elm$core$List$map, elm$core$Tuple$first, history));
			case 14:
				var id = condition.a;
				return !A2(
					elm$core$List$member,
					id,
					A2(elm$core$List$map, elm$core$Tuple$first, history));
			case 15:
				var id = condition.a;
				return _Utils_eq(currentScene, id);
			case 16:
				var counterId = condition.a;
				var interId = condition.b;
				return A3(author$project$Engine$Manifest$counterExists, counterId, interId, manifest);
			case 17:
				var val = condition.a;
				var counterId = condition.b;
				var interId = condition.c;
				return A4(author$project$Engine$Manifest$counterLessThen, val, counterId, interId, manifest);
			case 18:
				var val = condition.a;
				var counterId = condition.b;
				var interId = condition.c;
				return A4(author$project$Engine$Manifest$counterGreaterThenOrEqualTo, val, counterId, interId, manifest);
			case 19:
				var val = condition.a;
				var attrId = condition.b;
				var interId = condition.c;
				return A4(author$project$Engine$Manifest$attrValueIsEqualTo, val, attrId, interId, manifest);
			case 20:
				var valueToMatch = condition.a;
				var interId = condition.b;
				return A2(author$project$Engine$Manifest$chosenOptionIsEqualTo, valueToMatch, mbInputText);
			case 21:
				var interactableId = condition.a;
				return A2(author$project$Engine$Manifest$noChosenOptionYet, interactableId, manifest);
			default:
				var interactableId = condition.a;
				return A2(author$project$Engine$Manifest$choiceHasAlreadyBeenMade, interactableId, manifest);
		}
	});
var author$project$Engine$Manifest$isCharacter = F2(
	function (id, manifest) {
		return function (interactable) {
			if ((!interactable.$) && (interactable.a.$ === 2)) {
				var cdata = interactable.a.a;
				return true;
			} else {
				return false;
			}
		}(
			A2(elm$core$Dict$get, id, manifest));
	});
var author$project$Engine$Rules$matchesInteraction = F3(
	function (manifest, interactionMatcher, interactableId) {
		switch (interactionMatcher.$) {
			case 0:
				return true;
			case 1:
				return A2(author$project$Engine$Manifest$isItem, interactableId, manifest);
			case 2:
				return A2(author$project$Engine$Manifest$isLocation, interactableId, manifest);
			case 3:
				return A2(author$project$Engine$Manifest$isCharacter, interactableId, manifest);
			case 4:
				return A2(author$project$Engine$Manifest$isLocation, interactableId, manifest) || A2(author$project$Engine$Manifest$isCharacter, interactableId, manifest);
			case 5:
				return true;
			case 6:
				return true;
			default:
				var id = interactionMatcher.a;
				return _Utils_eq(id, interactableId);
		}
	});
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			elm$core$List$any,
			A2(elm$core$Basics$composeL, elm$core$Basics$not, isOkay),
			list);
	});
var author$project$Engine$Rules$matchesRule = F4(
	function (story, mbInputText, interaction, rule) {
		var currentLocation = story.b3;
		var currentScene = story.a2;
		var manifest = story.l;
		var history = story.aq;
		return A3(author$project$Engine$Rules$matchesInteraction, manifest, rule.cu, interaction) && A2(
			elm$core$List$all,
			A2(author$project$Engine$Rules$matchesCondition, story, mbInputText),
			rule.bZ);
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var author$project$Engine$Rules$numConstrictionsWeight = A2(
	elm$core$Basics$composeR,
	function ($) {
		return $.bZ;
	},
	elm$core$List$length);
var author$project$Engine$Rules$sceneConstraintWeight = function (rule) {
	var hasSceneConstraints = function (condition) {
		if (condition.$ === 15) {
			return true;
		} else {
			return false;
		}
	};
	return A2(elm$core$List$any, hasSceneConstraints, rule.bZ) ? 300 : 0;
};
var author$project$Engine$Rules$specificityWeight = function (rule) {
	var _n0 = rule.cu;
	switch (_n0.$) {
		case 7:
			return 200;
		case 1:
			return 100;
		case 2:
			return 100;
		case 3:
			return 100;
		case 4:
			return 100000;
		case 5:
			return 100000;
		case 6:
			return 100000;
		default:
			return 0;
	}
};
var author$project$Engine$Rules$numConstrictionsWeightAndsceneConstraintWeightAndSpecificityWeight = function (rec) {
	return (author$project$Engine$Rules$numConstrictionsWeight(rec) + author$project$Engine$Rules$sceneConstraintWeight(rec)) + author$project$Engine$Rules$specificityWeight(rec);
};
var author$project$Engine$Rules$findMatchingRule = F3(
	function (story, mbInputText, interactionStr) {
		return A2(
			elm$core$Maybe$map,
			function (_n1) {
				var id = _n1.ba;
				var interaction = _n1.cu;
				var conditions = _n1.bZ;
				var changes = _n1.bT;
				var quasiChanges = _n1.c7;
				var quasiChangeWithBkend = _n1.c6;
				return _Utils_Tuple2(
					id,
					{bT: changes, bZ: conditions, cu: interaction, c6: quasiChangeWithBkend, c7: quasiChanges});
			},
			A2(
				author$project$Engine$Rules$bestMatch,
				author$project$Engine$Rules$numConstrictionsWeightAndsceneConstraintWeightAndSpecificityWeight,
				A2(
					elm$core$List$map,
					function (_n0) {
						var id = _n0.a;
						var interaction = _n0.b.cu;
						var conditions = _n0.b.bZ;
						var changes = _n0.b.bT;
						var quasiChanges = _n0.b.c7;
						var quasiChangeWithBkend = _n0.b.c6;
						return {bT: changes, bZ: conditions, ba: id, cu: interaction, c6: quasiChangeWithBkend, c7: quasiChanges};
					},
					A2(
						elm$core$List$filter,
						A2(
							elm$core$Basics$composeR,
							elm$core$Tuple$second,
							A3(author$project$Engine$Rules$matchesRule, story, mbInputText, interactionStr)),
						elm$core$Dict$toList(story.aR)))));
	});
var author$project$Types$ExtraInfoWithPendingChanges = F3(
	function (interactionExtraInfo, pendingChanges, mbQuasiCwCmdWithBk) {
		return {cv: interactionExtraInfo, cP: mbQuasiCwCmdWithBk, bl: pendingChanges};
	});
var author$project$Types$MoveItemToCharacterInventory = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var author$project$Types$MoveTo = function (a) {
	return {$: 1, a: a};
};
var author$project$Types$NoInfoYet = {$: 0};
var author$project$Types$WaitingForInfoRequested = {$: 1};
var author$project$Engine$preUpdate = F3(
	function (interactableId, extraInfo, model) {
		var story = model;
		var matchingRule = function () {
			var _n5 = extraInfo.cN;
			if (_n5.$ === 1) {
				return A3(author$project$Engine$Rules$findMatchingRule, story, extraInfo.O, interactableId);
			} else {
				var matchedRuleId = _n5.a;
				return A2(
					elm$core$Maybe$map,
					function (x) {
						return _Utils_Tuple2(matchedRuleId, x);
					},
					A2(elm$core$Dict$get, matchedRuleId, story.aR));
			}
		}();
		var mbQuasiCwCmdWithBk = A2(
			elm$core$Maybe$map,
			A2(
				elm$core$Basics$composeR,
				elm$core$Tuple$second,
				function ($) {
					return $.c6;
				}),
			matchingRule);
		var newExtraInfo = _Utils_update(
			extraInfo,
			{
				cN: A2(elm$core$Maybe$map, elm$core$Tuple$first, matchingRule)
			});
		var lquasicwcmds = A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				elm$core$Maybe$map,
				A2(
					elm$core$Basics$composeR,
					elm$core$Tuple$second,
					function ($) {
						return $.c7;
					}),
				matchingRule));
		var infoNeeded = function () {
			if (mbQuasiCwCmdWithBk.$ === 1) {
				return author$project$Types$NoInfoNeeded;
			} else {
				var quasicwcmd = mbQuasiCwCmdWithBk.a;
				return author$project$Engine$determineIfInfoNeeded(quasicwcmd);
			}
		}();
		var defaultChanges = A2(author$project$Engine$Manifest$isLocation, interactableId, story.l) ? _List_fromArray(
			[
				author$project$Types$MoveTo(interactableId)
			]) : (A2(author$project$Engine$Manifest$isItem, interactableId, story.l) ? _List_fromArray(
			[
				A2(author$project$Types$MoveItemToCharacterInventory, story.aP, interactableId)
			]) : _List_Nil);
		var somechanges = A2(
			elm$core$Maybe$withDefault,
			defaultChanges,
			A2(
				elm$core$Maybe$map,
				A2(
					elm$core$Basics$composeR,
					elm$core$Tuple$second,
					function ($) {
						return $.bT;
					}),
				matchingRule));
		var _n0 = A3(
			elm$core$List$foldl,
			F2(
				function (qcwcmdFunc, _n1) {
					var lcwcmds = _n1.a;
					var lfloats = _n1.b;
					if (qcwcmdFunc.$ === 1) {
						var qcmdFunc = qcwcmdFunc.a;
						return function (_n3) {
							var cwcmd = _n3.a;
							var new_lf = _n3.b;
							return _Utils_Tuple2(
								A2(
									elm$core$List$append,
									lcwcmds,
									_List_fromArray(
										[cwcmd])),
								new_lf);
						}(
							A2(qcmdFunc, extraInfo, lfloats));
					} else {
						var qcmdFunc = qcwcmdFunc.a;
						return function (cwcmd) {
							return _Utils_Tuple2(
								A2(
									elm$core$List$append,
									lcwcmds,
									_List_fromArray(
										[cwcmd])),
								lfloats);
						}(
							qcmdFunc(extraInfo));
					}
				}),
			_Utils_Tuple2(_List_Nil, story.B),
			lquasicwcmds);
		var changesFromQuasi = _n0.a;
		var newLfloats = _n0.b;
		var changes = _Utils_ap(somechanges, changesFromQuasi);
		var extraInfoWithPendingChanges = A3(author$project$Types$ExtraInfoWithPendingChanges, newExtraInfo, changes, mbQuasiCwCmdWithBk);
		var extraInfoWithPendingChangesNoBackend = A3(author$project$Types$ExtraInfoWithPendingChanges, newExtraInfo, changes, elm$core$Maybe$Nothing);
		var newModel = _Utils_update(
			story,
			{B: newLfloats});
		return ((!_Utils_eq(infoNeeded, author$project$Types$NoInfoNeeded)) && (_Utils_eq(extraInfo.aA, author$project$Types$NoInfoYet) && ((!_Utils_eq(extraInfo.bg, elm$core$Maybe$Nothing)) && (!_Utils_eq(
			extraInfo.bg,
			elm$core$Maybe$Just('')))))) ? author$project$Engine$EnginePreResponse(
			_Utils_Tuple3(newModel, extraInfoWithPendingChanges, infoNeeded)) : (((!_Utils_eq(infoNeeded, author$project$Types$NoInfoNeeded)) && _Utils_eq(extraInfo.aA, author$project$Types$WaitingForInfoRequested)) ? author$project$Engine$EnginePreResponse(
			_Utils_Tuple3(
				newModel,
				A3(author$project$Types$ExtraInfoWithPendingChanges, extraInfo, _List_Nil, elm$core$Maybe$Nothing),
				author$project$Types$NoInfoNeeded)) : author$project$Engine$EnginePreResponse(
			_Utils_Tuple3(newModel, extraInfoWithPendingChangesNoBackend, author$project$Types$NoInfoNeeded)));
	});
var author$project$Engine$update = F2(
	function (msg, model) {
		var story = model;
		if (!msg.$) {
			var interactableId = msg.a;
			var extraInfo = msg.b;
			return A3(author$project$Engine$preUpdate, interactableId, extraInfo, model);
		} else {
			var interactableId = msg.a;
			var extraInfoWithPendingChanges = msg.b;
			return A3(author$project$Engine$completeTheUpdate, interactableId, extraInfoWithPendingChanges, model);
		}
	});
var author$project$GpsUtils$GeolocationInfo = F2(
	function (latitude, longitude) {
		return {at: latitude, av: longitude};
	});
var elm$core$Basics$le = _Utils_le;
var author$project$GpsUtils$checkIfInDistance = F3(
	function (mbGpsZone, theDistance, defaultDistance) {
		if (mbGpsZone.$ === 1) {
			return true;
		} else {
			var gpszone = mbGpsZone.a;
			var _n1 = gpszone.cQ;
			if (!_n1.$) {
				var radius = _n1.a;
				return (_Utils_cmp(theDistance, radius) < 1) ? true : false;
			} else {
				return (_Utils_cmp(theDistance, defaultDistance) < 1) ? true : false;
			}
		}
	});
var elm$core$String$length = _String_length;
var author$project$GpsUtils$addLeftZeros = F2(
	function (desiredlength, theStr) {
		return (_Utils_cmp(
			elm$core$String$length(theStr),
			desiredlength) < 0) ? A2(author$project$GpsUtils$addLeftZeros, desiredlength, '0' + theStr) : theStr;
	});
var author$project$GpsUtils$addRightZeros = F2(
	function (desiredlength, theStr) {
		return (_Utils_cmp(
			elm$core$String$length(theStr),
			desiredlength) < 0) ? A2(author$project$GpsUtils$addRightZeros, desiredlength, theStr + '0') : theStr;
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$pow = _Basics_pow;
var elm$core$Basics$round = _Basics_round;
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$String$fromFloat = _String_fromNumber;
var author$project$GpsUtils$roundit = F2(
	function (nrplaces, nr) {
		var intVal = elm$core$Basics$floor(nr);
		var strdecPlaces = A2(
			author$project$GpsUtils$addRightZeros,
			3,
			elm$core$String$fromFloat(
				elm$core$Basics$round(
					(nr - intVal) * A2(elm$core$Basics$pow, 10, nrplaces))));
		var strintVal = elm$core$String$fromInt(intVal);
		return strintVal + ('.' + strdecPlaces);
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var author$project$GpsUtils$convertDecimalToGps = F2(
	function (theStr, theVal) {
		var newVal = elm$core$Basics$abs(theVal);
		var deg = elm$core$Basics$floor(newVal);
		var minutes = (newVal - deg) * 60;
		var strDeg = (theStr === 'longitude') ? A2(
			author$project$GpsUtils$addLeftZeros,
			3,
			elm$core$String$fromInt(deg)) : elm$core$String$fromInt(deg);
		var charDir = ((theStr === 'latitude') && (theVal >= 0)) ? 'N' : (((theStr === 'longitude') && (theVal >= 0)) ? 'E' : (((theStr === 'latitude') && (theVal < 0)) ? 'S' : (((theStr === 'longitude') && (theVal < 0)) ? 'W' : 'bad coordinate type')));
		var fstr = charDir + (' ' + (strDeg + ('º ' + A2(author$project$GpsUtils$roundit, 3, minutes))));
		return fstr;
	});
var author$project$GpsUtils$convertDecimalTupleToGps = function (_n0) {
	var decLat = _n0.a;
	var decLon = _n0.b;
	var lon = A2(author$project$GpsUtils$convertDecimalToGps, 'longitude', decLon);
	var lat = A2(author$project$GpsUtils$convertDecimalToGps, 'latitude', decLat);
	var fstr = lat + (' , ' + lon);
	return fstr;
};
var elm$core$Basics$asin = _Basics_asin;
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$pi = _Basics_pi;
var elm$core$Basics$degrees = function (angleInDegrees) {
	return (angleInDegrees * elm$core$Basics$pi) / 180;
};
var elm$core$Basics$sin = _Basics_sin;
var elm$core$Basics$sqrt = _Basics_sqrt;
var author$project$GpsUtils$haversineInMeters = F2(
	function (_n0, _n1) {
		var lat1 = _n0.a;
		var lon1 = _n0.b;
		var lat2 = _n1.a;
		var lon2 = _n1.b;
		var r = 6378.1;
		var dLon = elm$core$Basics$degrees(lon2 - lon1);
		var dLat = elm$core$Basics$degrees(lat2 - lat1);
		var a = A2(
			elm$core$Basics$pow,
			elm$core$Basics$sin(dLat / 2),
			2) + ((A2(
			elm$core$Basics$pow,
			elm$core$Basics$sin(dLon / 2),
			2) * elm$core$Basics$cos(
			elm$core$Basics$degrees(lat1))) * elm$core$Basics$cos(
			elm$core$Basics$degrees(lat2)));
		return ((r * 2) * elm$core$Basics$asin(
			elm$core$Basics$sqrt(a))) * 1000;
	});
var author$project$GpsUtils$getDistance = F2(
	function (location, mbGpsZone) {
		if (mbGpsZone.$ === 1) {
			return 0.0;
		} else {
			var gpszone = mbGpsZone.a;
			var _n1 = gpszone.cX;
			if (_n1) {
				return A2(
					author$project$GpsUtils$haversineInMeters,
					_Utils_Tuple2(location.at, location.av),
					_Utils_Tuple2(gpszone.cB, gpszone.cF));
			} else {
				return 0.0;
			}
		}
	});
var author$project$GpsUtils$getDistanceTo = F2(
	function (location, _n0) {
		var name = _n0.a;
		var lat = _n0.b;
		var lon = _n0.c;
		var theDistance = A2(
			author$project$GpsUtils$haversineInMeters,
			_Utils_Tuple2(location.at, location.av),
			_Utils_Tuple2(lat, lon));
		return _Utils_Tuple2(name, theDistance);
	});
var author$project$GpsUtils$getDistancesTo = F3(
	function (nrdistances, location, lmbnamecoordTuples) {
		return A2(
			elm$core$List$sortBy,
			function (x) {
				return x.b;
			},
			A2(
				elm$core$List$filter,
				function (_n0) {
					var n = _n0.a;
					var x = _n0.b;
					return x >= 0;
				},
				A2(
					elm$core$List$map,
					elm$core$Maybe$withDefault(
						_Utils_Tuple2('', -999999)),
					A2(
						elm$core$List$map,
						elm$core$Maybe$map(
							function (x) {
								return A2(author$project$GpsUtils$getDistanceTo, location, x);
							}),
						lmbnamecoordTuples))));
	});
var author$project$GpsUtils$getMbGpsZoneLatLon = function (mbGpsZone) {
	if (!mbGpsZone.$) {
		var gpszone = mbGpsZone.a;
		return elm$core$Maybe$Just(
			_Utils_Tuple2(gpszone.cB, gpszone.cF));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
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
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.e) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.g),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.g);
		} else {
			var treeLen = builder.e * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.h) : builder.h;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.e);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.g) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.g);
		}
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
					{h: nodeList, e: (len / elm$core$Array$branchFactor) | 0, g: tail});
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
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
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
var elm$core$List$map2 = _List_map2;
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
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 1) {
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
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
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
var elm$json$Json$Encode$float = _Json_wrap;
var elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$Leaflet$Ports$filterMarkersCmdPort = _Platform_outgoingPort(
	'filterMarkersCmdPort',
	function ($) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'playerCoords',
					function ($) {
						var a = $.a;
						var b = $.b;
						return A2(
							elm$json$Json$Encode$list,
							elm$core$Basics$identity,
							_List_fromArray(
								[
									elm$json$Json$Encode$float(a),
									elm$json$Json$Encode$float(b)
								]));
					}($.c5)),
					_Utils_Tuple2(
					'stageMarkerInfo',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'coords',
										function ($) {
											var a = $.a;
											var b = $.b;
											return A2(
												elm$json$Json$Encode$list,
												elm$core$Basics$identity,
												_List_fromArray(
													[
														elm$json$Json$Encode$float(a),
														elm$json$Json$Encode$float(b)
													]));
										}($.b0)),
										_Utils_Tuple2(
										'marker_type',
										elm$json$Json$Encode$string($.cH)),
										_Utils_Tuple2(
										'stageName',
										elm$json$Json$Encode$string($.$7))
									]));
						})($.dn))
				]));
	});
var elm$json$Json$Encode$bool = _Json_wrap;
var elm$json$Json$Encode$int = _Json_wrap;
var author$project$Leaflet$Ports$setView = _Platform_outgoingPort(
	'setView',
	function ($) {
		var a = $.a;
		var b = $.b;
		var c = $.c;
		return A2(
			elm$json$Json$Encode$list,
			elm$core$Basics$identity,
			_List_fromArray(
				[
					function ($) {
					var a = $.a;
					var b = $.b;
					return A2(
						elm$json$Json$Encode$list,
						elm$core$Basics$identity,
						_List_fromArray(
							[
								elm$json$Json$Encode$float(a),
								elm$json$Json$Encode$float(b)
							]));
				}(a),
					elm$json$Json$Encode$int(b),
					function ($) {
					return elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'animate',
								elm$json$Json$Encode$bool($.az)),
								_Utils_Tuple2(
								'pan',
								function ($) {
									return elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'animate',
												elm$json$Json$Encode$bool($.az)),
												_Utils_Tuple2(
												'duration',
												elm$json$Json$Encode$float($.b8)),
												_Utils_Tuple2(
												'easeLinearity',
												elm$json$Json$Encode$float($.b9)),
												_Utils_Tuple2(
												'noMoveStart',
												elm$json$Json$Encode$bool($.cY))
											]));
								}($.c4)),
								_Utils_Tuple2(
								'reset',
								elm$json$Json$Encode$bool($.dc)),
								_Utils_Tuple2(
								'zoom',
								function ($) {
									return elm$json$Json$Encode$object(
										_List_fromArray(
											[
												_Utils_Tuple2(
												'animate',
												elm$json$Json$Encode$bool($.az))
											]));
								}($.dJ))
							]));
				}(c)
				]));
	});
var author$project$Leaflet$Types$defaultPanOptions = {az: true, b8: 0.25, b9: 0.25, cY: false};
var author$project$Leaflet$Types$defaultZoomOptions = {az: true};
var author$project$Leaflet$Types$defaultZoomPanOptions = {az: true, c4: author$project$Leaflet$Types$defaultPanOptions, dc: false, dJ: author$project$Leaflet$Types$defaultZoomOptions};
var author$project$Main$Flags = F2(
	function (baseImgUrl, baseSoundUrl) {
		return {r: baseImgUrl, z: baseSoundUrl};
	});
var author$project$ClientTypes$NewRandomElemsAtGameStart = function (a) {
	return {$: 25, a: a};
};
var elm$core$Bitwise$and = _Bitwise_and;
var elm$random$Random$Generator = elm$core$Basics$identity;
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$random$Random$next = function (_n0) {
	var state0 = _n0.a;
	var incr = _n0.b;
	return A2(elm$random$Random$Seed, ((state0 * 1664525) + incr) >>> 0, incr);
};
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$float = F2(
	function (a, b) {
		return function (seed0) {
			var seed1 = elm$random$Random$next(seed0);
			var range = elm$core$Basics$abs(b - a);
			var n1 = elm$random$Random$peel(seed1);
			var n0 = elm$random$Random$peel(seed0);
			var lo = (134217727 & n1) * 1.0;
			var hi = (67108863 & n0) * 1.0;
			var val = ((hi * 1.34217728e8) + lo) / 9.007199254740992e15;
			var scaled = (val * range) + a;
			return _Utils_Tuple2(
				scaled,
				elm$random$Random$next(seed1));
		};
	});
var elm$random$Random$Generate = elm$core$Basics$identity;
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$succeed = _Scheduler_succeed;
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
	return {$: 0, a: a};
};
var elm$time$Time$Offset = function (a) {
	return {$: 1, a: a};
};
var elm$time$Time$Zone = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$time$Time$customZone = elm$time$Time$Zone;
var elm$time$Time$Posix = elm$core$Basics$identity;
var elm$time$Time$millisToPosix = elm$core$Basics$identity;
var elm$time$Time$now = _Time_now(elm$time$Time$millisToPosix);
var elm$time$Time$posixToMillis = function (_n0) {
	var millis = _n0;
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
		var generator = _n0;
		return generator(seed);
	});
var elm$random$Random$onEffects = F3(
	function (router, commands, seed) {
		if (!commands.b) {
			return elm$core$Task$succeed(seed);
		} else {
			var generator = commands.a;
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
var elm$random$Random$map = F2(
	function (func, _n0) {
		var genA = _n0;
		return function (seed0) {
			var _n1 = genA(seed0);
			var a = _n1.a;
			var seed1 = _n1.b;
			return _Utils_Tuple2(
				func(a),
				seed1);
		};
	});
var elm$random$Random$cmdMap = F2(
	function (func, _n0) {
		var generator = _n0;
		return A2(elm$random$Random$map, func, generator);
	});
_Platform_effectManagers['Random'] = _Platform_createManager(elm$random$Random$init, elm$random$Random$onEffects, elm$random$Random$onSelfMsg, elm$random$Random$cmdMap);
var elm$random$Random$command = _Platform_leaf('Random');
var elm$random$Random$generate = F2(
	function (tagger, generator) {
		return elm$random$Random$command(
			A2(elm$random$Random$map, tagger, generator));
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
		var gen = _n0;
		return function (seed) {
			return A4(elm$random$Random$listHelp, _List_Nil, n, gen, seed);
		};
	});
var author$project$Main$cmdForGeneratingListOfRandomFloats = function (lsize) {
	return A2(
		elm$random$Random$generate,
		author$project$ClientTypes$NewRandomElemsAtGameStart,
		A2(
			elm$random$Random$list,
			lsize,
			A2(elm$random$Random$float, 0, 1)));
};
var author$project$Main$helperEmptyStringToNothing = function (theStr) {
	return (theStr === '') ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(theStr);
};
var author$project$Types$CommunicationFailure = {$: 3};
var author$project$Types$InteractionExtraInfo = F6(
	function (mbInputText, mbInputTextForBackend, geolocationInfoText, currentLocation, bkAnsStatus, mbMatchedRuleId) {
		return {aA: bkAnsStatus, b3: currentLocation, ci: geolocationInfoText, O: mbInputText, bg: mbInputTextForBackend, cN: mbMatchedRuleId};
	});
var author$project$Main$convertToListIdExtraInfo = function (lobjs) {
	return A2(
		elm$core$List$map,
		function (x) {
			return _Utils_Tuple2(
				x.bc,
				A6(
					author$project$Types$InteractionExtraInfo,
					author$project$Main$helperEmptyStringToNothing(x.cr),
					author$project$Main$helperEmptyStringToNothing(x.cs),
					x.ci,
					x.b3,
					author$project$Types$CommunicationFailure,
					author$project$Main$helperEmptyStringToNothing(x.cN)));
		},
		lobjs);
};
var author$project$Components$entity = function (id) {
	return _Utils_Tuple2(id, elm$core$Dict$empty);
};
var author$project$Main$findEntity = F2(
	function (model, id) {
		return A2(
			elm$core$Maybe$withDefault,
			author$project$Components$entity(id),
			elm$core$List$head(
				A2(
					elm$core$List$filter,
					A2(
						elm$core$Basics$composeR,
						elm$core$Tuple$first,
						elm$core$Basics$eq(id)),
					model._)));
	});
var author$project$ClientTypes$AnswerChecked = F3(
	function (a, b, c) {
		return {$: 6, a: a, b: b, c: c};
	});
var author$project$InfoForBkendApiRequests$getApiKey = 'some-api-key';
var elm$json$Json$Decode$map2 = _Json_map2;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom = elm$json$Json$Decode$map2(elm$core$Basics$apR);
var elm$json$Json$Decode$succeed = _Json_succeed;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded = A2(elm$core$Basics$composeR, elm$json$Json$Decode$succeed, NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom);
var elm$json$Json$Decode$field = _Json_decodeField;
var NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$custom,
			A2(elm$json$Json$Decode$field, key, valDecoder),
			decoder);
	});
var author$project$Main$LgTxt = F2(
	function (lgId, text) {
		return {aI: lgId, aW: text};
	});
var elm$json$Json$Decode$string = _Json_decodeString;
var author$project$Main$textInLanguagesDecoder = A3(
	elm$json$Json$Decode$map2,
	author$project$Main$LgTxt,
	A2(elm$json$Json$Decode$field, 'lgId', elm$json$Json$Decode$string),
	A2(elm$json$Json$Decode$field, 'text', elm$json$Json$Decode$string));
var author$project$Types$AnswerInfo = function (maxTriesReached) {
	return function (interactableId) {
		return function (questionBody) {
			return function (playerAnswer) {
				return function (answered) {
					return function (correctAnswer) {
						return function (incorrectAnswer) {
							return function (secretTextList) {
								return function (successTextList) {
									return function (insuccessTextList) {
										return {aZ: answered, b2: correctAnswer, co: incorrectAnswer, ct: insuccessTextList, bc: interactableId, cJ: maxTriesReached, ad: playerAnswer, c9: questionBody, dh: secretTextList, du: successTextList};
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
var elm$json$Json$Decode$bool = _Json_decodeBool;
var elm$json$Json$Decode$list = _Json_decodeList;
var author$project$Main$backendAnswerDecoder = F2(
	function (interactableId, playerAnswer) {
		return A3(
			NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
			'lInsuccessTextDicts',
			elm$json$Json$Decode$list(author$project$Main$textInLanguagesDecoder),
			A3(
				NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
				'lSuccessTextDicts',
				elm$json$Json$Decode$list(author$project$Main$textInLanguagesDecoder),
				A3(
					NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
					'lSecretTextDicts',
					elm$json$Json$Decode$list(author$project$Main$textInLanguagesDecoder),
					A3(
						NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
						'incorrectAnswer',
						elm$json$Json$Decode$bool,
						A3(
							NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
							'correctAnswer',
							elm$json$Json$Decode$bool,
							A3(
								NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
								'answered',
								elm$json$Json$Decode$bool,
								A2(
									NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
									playerAnswer,
									A3(
										NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
										'questionBody',
										elm$json$Json$Decode$string,
										A2(
											NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$hardcoded,
											interactableId,
											A3(
												NoRedInk$elm_json_decode_pipeline$Json$Decode$Pipeline$required,
												'maxTriesReached',
												elm$json$Json$Decode$bool,
												elm$json$Json$Decode$succeed(author$project$Types$AnswerInfo)))))))))));
	});
var author$project$Main$playerAnswerEncoder = F2(
	function (interactableId, playerAnswer) {
		var attributes = _List_fromArray(
			[
				_Utils_Tuple2(
				'interactableId',
				elm$json$Json$Encode$string(interactableId)),
				_Utils_Tuple2(
				'playerAnswer',
				elm$json$Json$Encode$string(playerAnswer))
			]);
		return elm$json$Json$Encode$object(attributes);
	});
var author$project$TypesUpdateHelper$updateNestedMbInputTextBk = F2(
	function (extraInfoWithPendingChanges, mbInputTextForBackend) {
		var interactionExtraInfo_ = extraInfoWithPendingChanges.cv;
		var newinteractionExtraInfo = _Utils_update(
			interactionExtraInfo_,
			{bg: mbInputTextForBackend});
		var newExtraInfoWithPendingChanges = _Utils_update(
			extraInfoWithPendingChanges,
			{cv: newinteractionExtraInfo});
		return newExtraInfoWithPendingChanges;
	});
var elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Result$map = F2(
	function (func, ra) {
		if (!ra.$) {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var elm$http$Http$BadPayload = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var elm$http$Http$NetworkError = {$: 2};
var elm$http$Http$Timeout = {$: 1};
var elm$http$Http$Internal$FormDataBody = function (a) {
	return {$: 2, a: a};
};
var elm$http$Http$Internal$isStringBody = function (body) {
	if (body.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var elm$http$Http$expectStringResponse = _Http_expectStringResponse;
var elm$json$Json$Decode$decodeString = _Json_runOnString;
var elm$http$Http$expectJson = function (decoder) {
	return elm$http$Http$expectStringResponse(
		function (response) {
			var _n0 = A2(elm$json$Json$Decode$decodeString, decoder, response.bN);
			if (_n0.$ === 1) {
				var decodeError = _n0.a;
				return elm$core$Result$Err(
					elm$json$Json$Decode$errorToString(decodeError));
			} else {
				var value = _n0.a;
				return elm$core$Result$Ok(value);
			}
		});
};
var elm$http$Http$Internal$Header = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$http$Http$header = elm$http$Http$Internal$Header;
var elm$http$Http$Internal$StringBody = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var elm$http$Http$jsonBody = function (value) {
	return A2(
		elm$http$Http$Internal$StringBody,
		'application/json',
		A2(elm$json$Json$Encode$encode, 0, value));
};
var elm$http$Http$Internal$Request = elm$core$Basics$identity;
var elm$http$Http$request = elm$core$Basics$identity;
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Task$init = elm$core$Task$succeed(0);
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
		var task = _n0;
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
				return 0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0;
		return A2(elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$onError = _Scheduler_onError;
var elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return elm$core$Task$command(
			A2(
				elm$core$Task$onError,
				A2(
					elm$core$Basics$composeL,
					A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
					elm$core$Result$Err),
				A2(
					elm$core$Task$andThen,
					A2(
						elm$core$Basics$composeL,
						A2(elm$core$Basics$composeL, elm$core$Task$succeed, resultToMessage),
						elm$core$Result$Ok),
					task)));
	});
var elm$http$Http$toTask = function (_n0) {
	var request_ = _n0;
	return A2(_Http_toTask, request_, elm$core$Maybe$Nothing);
};
var elm$http$Http$send = F2(
	function (resultToMessage, request_) {
		return A2(
			elm$core$Task$attempt,
			resultToMessage,
			elm$http$Http$toTask(request_));
	});
var author$project$Main$getBackendAnswerInfo = F3(
	function (interactableId, extraInfoWithPendingChanges, strUrl) {
		var newExtraInfoWithPendingChanges = A2(author$project$TypesUpdateHelper$updateNestedMbInputTextBk, extraInfoWithPendingChanges, elm$core$Maybe$Nothing);
		var apiKey = author$project$InfoForBkendApiRequests$getApiKey;
		var request = elm$http$Http$request(
			{
				bN: elm$http$Http$jsonBody(
					A2(
						author$project$Main$playerAnswerEncoder,
						interactableId,
						A2(elm$core$Maybe$withDefault, '', extraInfoWithPendingChanges.cv.bg))),
				ce: elm$http$Http$expectJson(
					A2(
						author$project$Main$backendAnswerDecoder,
						interactableId,
						A2(elm$core$Maybe$withDefault, '', extraInfoWithPendingChanges.cv.bg))),
				ck: _List_fromArray(
					[
						A2(elm$http$Http$header, 'x-api-key', apiKey)
					]),
				cU: 'POST',
				dy: elm$core$Maybe$Nothing,
				dD: strUrl,
				dH: false
			});
		return A2(
			elm$http$Http$send,
			A2(author$project$ClientTypes$AnswerChecked, interactableId, newExtraInfoWithPendingChanges),
			request);
	});
var author$project$GpsUtils$getCurrentGeoLocationAsText = function (mbGeolocationInfo) {
	if (mbGeolocationInfo.$ === 1) {
		return '\ngps info : not available ! ';
	} else {
		var gInfo = mbGeolocationInfo.a;
		return author$project$GpsUtils$convertDecimalTupleToGps(
			_Utils_Tuple2(gInfo.at, gInfo.av));
	}
};
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
var author$project$GpsUtils$getTextDistancesFromListDistances = F2(
	function (nrdistances, ldistances) {
		return A2(
			elm$core$String$join,
			'  \n',
			A2(
				elm$core$List$take,
				nrdistances,
				A2(
					elm$core$List$map,
					function (_n0) {
						var name = _n0.a;
						var distance = _n0.b;
						return ' ___DISTANCE_TO___ ' + (name + (' ___IS___ ' + (elm$core$String$fromInt(
							elm$core$Basics$round(distance)) + ' ___METERS___ ')));
					},
					ldistances)));
	});
var author$project$GpsUtils$getCurrentGeoReportAsText = F4(
	function (currLocNameAndCoords, mbGeolocationInfo, lnameDistances, nrdistances) {
		return '  \n' + (author$project$GpsUtils$getCurrentGeoLocationAsText(mbGeolocationInfo) + ('  \n' + (A2(author$project$GpsUtils$getTextDistancesFromListDistances, nrdistances, lnameDistances) + ('  \n' + (' ___center_coords_of_current_location___ ' + ('  \n' + A2(
			elm$core$Maybe$withDefault,
			'',
			A2(
				elm$core$Maybe$map,
				function (_n0) {
					var name = _n0.a;
					var lat = _n0.b;
					var lon = _n0.c;
					return author$project$GpsUtils$convertDecimalTupleToGps(
						_Utils_Tuple2(lat, lon));
				},
				A2(elm$core$Dict$get, 'en', currLocNameAndCoords)))))))));
	});
var author$project$OurStory$Narrative$desiredLanguages = _List_fromArray(
	['pt', 'en']);
var author$project$Main$getExtraInfoFromModel = F2(
	function (model, interactableId) {
		var currLocationStrId = author$project$Engine$getCurrentLocation(model.c);
		var currLocNameAndCoords = A2(
			author$project$Components$getDictLgNamesAndCoords,
			author$project$OurStory$Narrative$desiredLanguages,
			A2(author$project$Main$findEntity, model, currLocationStrId));
		return A6(
			author$project$Types$InteractionExtraInfo,
			model.P,
			model.P,
			A4(author$project$GpsUtils$getCurrentGeoReportAsText, currLocNameAndCoords, model.C, model.I, 3),
			currLocationStrId,
			A2(
				elm$core$Maybe$withDefault,
				author$project$Types$NoInfoYet,
				A2(elm$core$Dict$get, interactableId, model.i)),
			elm$core$Maybe$Nothing);
	});
var author$project$Types$ADictStringString = function (a) {
	return {$: 3, a: a};
};
var author$project$Engine$aDictStringString = author$project$Types$ADictStringString;
var author$project$OurStory$Narrative$initialChoiceLanguages = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', 'portuguese'),
			_Utils_Tuple2('en', 'english')
		]));
var author$project$Main$getInteractableInfo = function (interactableEntity) {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'name',
				author$project$Engine$aDictStringString(
					A2(
						author$project$Components$getDictLgNames,
						elm$core$Dict$keys(author$project$OurStory$Narrative$initialChoiceLanguages),
						interactableEntity)))
			]));
};
var author$project$Engine$setRandomFloatElems = F2(
	function (lfloats, _n0) {
		var story = _n0;
		var newStory = _Utils_update(
			story,
			{B: lfloats});
		return newStory;
	});
var author$project$Types$MoveCharacterToLocation = F2(
	function (a, b) {
		return {$: 27, a: a, b: b};
	});
var author$project$Engine$moveCharacterToLocation = author$project$Types$MoveCharacterToLocation;
var author$project$Engine$moveItemToCharacterInventory = author$project$Types$MoveItemToCharacterInventory;
var author$project$Types$MoveItemToLocationFixed = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$Engine$moveItemToLocationFixed = author$project$Types$MoveItemToLocationFixed;
var author$project$Engine$moveTo = author$project$Types$MoveTo;
var author$project$OurStory$NarrativeDataStructures$numberOfDesiredStages = 10;
var author$project$OurStory$NarrativeDSFuncs$getNumberOfDesiredStages = author$project$OurStory$NarrativeDataStructures$numberOfDesiredStages;
var author$project$Types$CreateAMultiChoice = F2(
	function (a, b) {
		return {$: 21, a: a, b: b};
	});
var author$project$Engine$createAmultiChoice = author$project$Types$CreateAMultiChoice;
var author$project$Types$MakeItemUnwritable = function (a) {
	return {$: 9, a: a};
};
var author$project$Engine$makeItemUnwritable = author$project$Types$MakeItemUnwritable;
var author$project$Types$NoFeedbackText = {$: 0};
var author$project$OurStory$NarrativeDataStructures$theQuestionsDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			_Utils_Tuple2(101, 'pt'),
			{
				bB: author$project$Types$SimpleText(
					_List_fromArray(
						['Muito Bem ! A entrada do parque das merendas fica de facto ao lado da entrada para Vila Sassetti !\n              '])),
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['Parque das Merendas', 'Merendas']),
				c9: 'Próximo da entrada da Vila Sassetti está também a entrada para um outro Parque. De que parque se trata ?',
				da: 'questão 1'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(101, 'en'),
			{
				bB: author$project$Types$SimpleText(
					_List_fromArray(
						['Well Done ! The entrance to Parque das Merendas is located right next to the entrance to Vila Sassetti !\n              '])),
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_Nil,
				c9: 'Near the entrance of Vila Sassetti is also the entrance to another Park . What\'s that Park ? ',
				da: 'question 1'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(201, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$SimpleText(
					_List_fromArray(
						['Vá lá ... Não é uma pergunta difícil ! '])),
				am: _List_fromArray(
					[
						_Utils_Tuple2('18', 'Dezoito (18)'),
						_Utils_Tuple2('19', 'Dezanove (19)'),
						_Utils_Tuple2('20', 'Vinte (20)'),
						_Utils_Tuple2('21', 'Vinte e um (21)'),
						_Utils_Tuple2('22', 'Vinte e dois (22)'),
						_Utils_Tuple2('23', 'Vinte e três (23)')
					]),
				c8: _List_fromArray(
					['21', 'vinte e um']),
				c9: 'quantos azulejos observas no maior banco  ?',
				da: 'questão 2'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(201, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$SimpleText(
					_List_fromArray(
						['Come on ... That\'s is not a tough question ! '])),
				am: _List_fromArray(
					[
						_Utils_Tuple2('18', 'Eighteen (18)'),
						_Utils_Tuple2('19', 'Nineteen (19)'),
						_Utils_Tuple2('20', 'Twenty (20)'),
						_Utils_Tuple2('21', 'Twenty One (21)'),
						_Utils_Tuple2('22', 'Twenty Two (22)'),
						_Utils_Tuple2('23', 'Twenty Three (23)'),
						_Utils_Tuple2('24', 'Twenty Four (24)'),
						_Utils_Tuple2('25', 'Twenty Five (25)')
					]),
				c8: _List_fromArray(
					['twenty one']),
				c9: 'How many tiles do you see on the biggest seat  ?',
				da: 'question 2'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(202, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$SimpleText(
					_List_fromArray(
						['Vá lá ... Não é uma pergunta difícil ! '])),
				am: _List_fromArray(
					[
						_Utils_Tuple2('2', 'Dois (2)'),
						_Utils_Tuple2('3', 'Três (3)'),
						_Utils_Tuple2('4', 'Quatro (4)'),
						_Utils_Tuple2('5', 'Cinco (5)'),
						_Utils_Tuple2('6', 'Seis (6)')
					]),
				c8: _List_fromArray(
					['5', 'cinco']),
				c9: 'quantos circulos estão sobre a coroa   ?',
				da: 'questão 22'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(202, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$SimpleText(
					_List_fromArray(
						['Come on ... That is not a tough question ! '])),
				am: _List_fromArray(
					[
						_Utils_Tuple2('2', 'Two (2)'),
						_Utils_Tuple2('3', 'Three (3)'),
						_Utils_Tuple2('4', 'Four (4)'),
						_Utils_Tuple2('5', 'Five (5)'),
						_Utils_Tuple2('6', 'Six (6)')
					]),
				c8: _List_fromArray(
					['five']),
				c9: 'How many circles over the crown  ?',
				da: 'question 22'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(301, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('9', 'Nove (9)'),
						_Utils_Tuple2('11', 'Onze (11)'),
						_Utils_Tuple2('13', 'Treze (13)'),
						_Utils_Tuple2('15', 'Quinze (15)'),
						_Utils_Tuple2('17', 'Dezassete (17)')
					]),
				c8: _List_fromArray(
					['15', 'quinze']),
				c9: 'Quantos pilares consegues contar até à primeira curva para a direita ..." ',
				da: 'questão 3'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(301, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('9', 'Nine (9)'),
						_Utils_Tuple2('11', 'Eleven (11)'),
						_Utils_Tuple2('13', 'Thirteen (13)'),
						_Utils_Tuple2('15', 'Fifteen (15)'),
						_Utils_Tuple2('17', 'Seventeen (17)')
					]),
				c8: _List_fromArray(
					['fifteen']),
				c9: 'How many pillars can you count from here to the first corner to the right ? ',
				da: 'question 3'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(401, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('1 a 12', '1 a 12'),
						_Utils_Tuple2('8 a 12', '8 a 12'),
						_Utils_Tuple2('1 a 8', '1 a 8'),
						_Utils_Tuple2('8 a 4', '8 a 4')
					]),
				c8: _List_fromArray(
					['8 a 4', '8 as 4', '8-4']),
				c9: 'O relógio de sol indica de que horas a que horas (ex: 9 a 10)?',
				da: 'questão 4'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(401, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('1 to 12', '1 to 12'),
						_Utils_Tuple2('8 to 12', '8 to 12'),
						_Utils_Tuple2('1 to 8', '1 to 8'),
						_Utils_Tuple2('8 to 4', '8 to 4')
					]),
				c8: _List_fromArray(
					['8 to 4']),
				c9: 'The sun clock tells the time from what hour of the day to what hour (ex: 9 to 10)?',
				da: 'question 4'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(402, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('18', 'Dezoito (18)'),
						_Utils_Tuple2('19', 'Dezanove (19)'),
						_Utils_Tuple2('20', 'Vinte (20)'),
						_Utils_Tuple2('21', 'Vinte e um (21)'),
						_Utils_Tuple2('22', 'Vinte e dois (22)'),
						_Utils_Tuple2('23', 'Vinte e três (23)')
					]),
				c8: _List_fromArray(
					['21', 'vinte e um']),
				c9: 'Á tua direita quantos degraus podes observar ?',
				da: 'questão 42'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(402, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('18', 'Eighteen (18)'),
						_Utils_Tuple2('19', 'Nineteen (19)'),
						_Utils_Tuple2('20', 'Twenty (20)'),
						_Utils_Tuple2('21', 'Twenty One (21)'),
						_Utils_Tuple2('22', 'Twenty Two (22)'),
						_Utils_Tuple2('23', 'Twenty Three (23)')
					]),
				c8: _List_fromArray(
					['twenty one']),
				c9: 'How many steps do you see to the right ?',
				da: 'question 42'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(501, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['Camellia Japonica', 'Camellia Japonica L.', 'THEACEAE']),
				c9: 'Qual o nome da planta que se encontra indicado ?',
				da: 'questão 5'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(501, 'en'),
			{bB: author$project$Types$NoFeedbackText, bC: author$project$Types$NoFeedbackText, am: _List_Nil, c8: _List_Nil, c9: 'What\'s the name of the plant ( written on the sign ) ?', da: 'question 5'}),
			_Utils_Tuple2(
			_Utils_Tuple2(601, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['sim', 'não', 'nao']),
				c9: 'Parece-te uma cadeira confortável ?',
				da: 'questão 6'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(601, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['yes', 'no']),
				c9: 'Does it seem like a comfortable chair  ?',
				da: 'question 6'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(701, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('2', 'Dois (2)'),
						_Utils_Tuple2('3', 'Tres (3)'),
						_Utils_Tuple2('4', 'Quatro (4)'),
						_Utils_Tuple2('5', 'Cinco (5)')
					]),
				c8: _List_fromArray(
					['2', 'dois']),
				c9: 'Quantos troncos ( cortados ) podes observar junto ao rochedo ?',
				da: 'questão 7'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(701, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_fromArray(
					[
						_Utils_Tuple2('2', 'Two (2)'),
						_Utils_Tuple2('3', 'Three (3)'),
						_Utils_Tuple2('4', 'Four (4)'),
						_Utils_Tuple2('5', 'Five (5)')
					]),
				c8: _List_fromArray(
					['two']),
				c9: 'how many ( chopped ) logs can you see near the big rock',
				da: 'question 7'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(801, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['115', 'cento e quinze']),
				c9: 'Qual a distância indicada ( em metros ) para o Penedo da Amizade ?',
				da: 'questão 8'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(801, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['hundred and fifteen']),
				c9: 'What\'s the distance ( in meters ) to Penedo da Amizade ( Cliff of Amizade ) shown on the sign  ?',
				da: 'question 8'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(901, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['Funk da Serra']),
				c9: 'No topoguia informativo sobre as vias de escalada no Penedo da Amizade qual o Nome da via Nº 7 ?',
				da: 'questão 9'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(901, 'en'),
			{bB: author$project$Types$NoFeedbackText, bC: author$project$Types$NoFeedbackText, am: _List_Nil, c8: _List_Nil, c9: 'What\'s the name of climbing route Nº 7 shown on  Penedo da Amizade Rock climbing guide  ?', da: 'question 9'}),
			_Utils_Tuple2(
			_Utils_Tuple2(902, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['Gigante']),
				c9: 'No topoguia informativo sobre as vias de escalada no Penedo da Amizade qual o Nome da via Nº 21 ?',
				da: 'questão 9_2'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(902, 'en'),
			{bB: author$project$Types$NoFeedbackText, bC: author$project$Types$NoFeedbackText, am: _List_Nil, c8: _List_Nil, c9: 'What\'s the name of climbing route Nº 21 shown on  Penedo da Amizade Rock climbing guide  ?', da: 'question 9_2'}),
			_Utils_Tuple2(
			_Utils_Tuple2(1001, 'pt'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['495', 'quatrocentos e noventa e cinco']),
				c9: 'Logo após a porta de saída está um placard informativo. Qual a distância ( em metros ) para o Palácio da Pena ? ',
				da: 'questão 10'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(1001, 'en'),
			{
				bB: author$project$Types$NoFeedbackText,
				bC: author$project$Types$NoFeedbackText,
				am: _List_Nil,
				c8: _List_fromArray(
					['four hundred and ninety five']),
				c9: 'right after the door there\'s an informative sign. What\'s the distance ( in meters ) to Parque da Pena ( Park of Pena )  ?',
				da: 'question 10'
			})
		]));
var author$project$OurStory$NarrativeDSFuncs$getQuestionAvailableChoicesDict = function (questionNr) {
	var questionsDict = author$project$OurStory$NarrativeDataStructures$theQuestionsDict;
	var getLgOptions = F2(
		function (questionNrArg, lgId) {
			return function (x) {
				if (x.$ === 1) {
					return _List_Nil;
				} else {
					var lopt = x.a;
					return lopt;
				}
			}(
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.am;
					},
					A2(
						elm$core$Dict$get,
						_Utils_Tuple2(questionNrArg, lgId),
						questionsDict)));
		});
	var availableChoicesDict = A3(
		elm$core$List$foldl,
		F2(
			function (lgId, d) {
				return A3(
					elm$core$Dict$insert,
					lgId,
					A2(getLgOptions, questionNr, lgId),
					d);
			}),
		elm$core$Dict$empty,
		author$project$OurStory$Narrative$desiredLanguages);
	return availableChoicesDict;
};
var author$project$OurStory$NarrativeDSFuncs$getQuestionId = function (nr) {
	return 'question' + elm$core$String$fromInt(nr);
};
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var author$project$OurStory$Rules$makeQuestionsAmultiChoice = function (ltupQuestionNrs) {
	var createForOneElem = function (_n0) {
		var questionNr = _n0.a;
		var bmakeUnwritable = _n0.b;
		return _Utils_ap(
			_List_fromArray(
				[
					A2(
					author$project$Engine$createAmultiChoice,
					author$project$OurStory$NarrativeDSFuncs$getQuestionAvailableChoicesDict(questionNr),
					author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr))
				]),
			bmakeUnwritable ? _List_fromArray(
				[
					author$project$Engine$makeItemUnwritable(
					author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr))
				]) : _List_Nil);
	};
	return elm$core$List$concat(
		A2(elm$core$List$map, createForOneElem, ltupQuestionNrs));
};
var author$project$Types$MakeItemWritable = function (a) {
	return {$: 8, a: a};
};
var author$project$Engine$makeItemWritable = author$project$Types$MakeItemWritable;
var author$project$OurStory$NarrativeDSFuncs$getAllStageNrs = A2(elm$core$List$range, 1, author$project$OurStory$NarrativeDataStructures$numberOfDesiredStages);
var author$project$OurStory$NarrativeDataStructures$theStagesExtraInfo = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			1,
			{
				c3: _List_fromArray(
					[101]),
				db: _List_fromArray(
					[101])
			}),
			_Utils_Tuple2(
			2,
			{
				c3: _List_fromArray(
					[201]),
				db: _List_fromArray(
					[201, 202])
			}),
			_Utils_Tuple2(
			3,
			{
				c3: _List_fromArray(
					[301]),
				db: _List_fromArray(
					[301])
			}),
			_Utils_Tuple2(
			4,
			{
				c3: _List_fromArray(
					[401]),
				db: _List_fromArray(
					[401, 402])
			}),
			_Utils_Tuple2(
			5,
			{c3: _List_Nil, db: _List_Nil}),
			_Utils_Tuple2(
			6,
			{
				c3: _List_fromArray(
					[601]),
				db: _List_fromArray(
					[601])
			}),
			_Utils_Tuple2(
			7,
			{
				c3: _List_Nil,
				db: _List_fromArray(
					[701])
			}),
			_Utils_Tuple2(
			8,
			{
				c3: _List_Nil,
				db: _List_fromArray(
					[801])
			}),
			_Utils_Tuple2(
			9,
			{
				c3: _List_Nil,
				db: _List_fromArray(
					[901, 902])
			}),
			_Utils_Tuple2(
			10,
			{
				c3: _List_Nil,
				db: _List_fromArray(
					[1001])
			})
		]));
var author$project$OurStory$NarrativeDSFuncs$getTheStagesExtraInfo = author$project$OurStory$NarrativeDataStructures$theStagesExtraInfo;
var author$project$OurStory$NarrativeDSFuncs$getQuestionNrsByStageNr = function (stageNr) {
	return A2(
		elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			elm$core$Maybe$map,
			function ($) {
				return $.db;
			},
			A2(elm$core$Dict$get, stageNr, author$project$OurStory$NarrativeDSFuncs$getTheStagesExtraInfo)));
};
var author$project$OurStory$NarrativeDataStructures$questionsAndOrOptionsOnEveryStageExcept = _List_Nil;
var author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept = author$project$OurStory$NarrativeDataStructures$questionsAndOrOptionsOnEveryStageExcept;
var author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionNrs = elm$core$List$concat(
	A2(
		elm$core$List$map,
		author$project$OurStory$NarrativeDSFuncs$getQuestionNrsByStageNr,
		A2(
			elm$core$List$filter,
			function (x) {
				return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
			},
			author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)));
var author$project$OurStory$Rules$makeStageQuestionsWritableExcept = function (lnotWritable) {
	var makeItWritable = function (n) {
		return author$project$Engine$makeItemWritable(
			author$project$OurStory$NarrativeDSFuncs$getQuestionId(n));
	};
	return A2(
		elm$core$List$map,
		makeItWritable,
		A2(
			elm$core$List$filter,
			function (x) {
				return !A2(elm$core$List$member, x, lnotWritable);
			},
			author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionNrs));
};
var author$project$Engine$abool = author$project$Types$Abool;
var author$project$Engine$createAttributeIfNotExistsAndOrSetValue = F3(
	function (val, attrId, interactableId) {
		return A3(author$project$Types$CreateAttributeIfNotExistsAndOrSetValue, val, attrId, interactableId);
	});
var author$project$OurStory$Narrative$suggestedDeletedChoiceCaptionDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', 'alterar escolha : '),
			_Utils_Tuple2('en', 'alter choice : ')
		]));
var author$project$OurStory$NarrativeDataStructures$theMultiOptionParams = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			101,
			{b6: true, dd: true}),
			_Utils_Tuple2(
			201,
			{b6: true, dd: true}),
			_Utils_Tuple2(
			301,
			{b6: true, dd: true}),
			_Utils_Tuple2(
			401,
			{b6: true, dd: false}),
			_Utils_Tuple2(
			601,
			{b6: true, dd: false})
		]));
var author$project$OurStory$NarrativeDSFuncs$getDisplayOptionButtonsOptionParam = function (optionNr) {
	return A2(
		elm$core$Maybe$map,
		function (x) {
			return x.b6;
		},
		A2(elm$core$Dict$get, optionNr, author$project$OurStory$NarrativeDataStructures$theMultiOptionParams));
};
var author$project$OurStory$NarrativeDataStructures$theMultiOptionsDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			_Utils_Tuple2(101, 'pt'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3(
						'yes',
						'Sim',
						author$project$Types$SimpleText(
							_List_fromArray(
								['boa escolha , o percurso de Vila Sassetti é muito interessante']))),
						_Utils_Tuple3('no', 'Não', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('maybe', 'talvez', author$project$Types$NoFeedbackText)
					]),
				c1: 'o percurso de Vila Sassetti parece-te interessante ? ',
				c2: 'opcao1'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(101, 'en'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('yes', 'yes', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('no', 'no', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('maybe', 'maybe', author$project$Types$NoFeedbackText)
					]),
				c1: 'Does the footpath seem interesting ? ',
				c2: 'option1'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(201, 'pt'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('yes', 'Sim', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('no', 'Não', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('maybe', 'talvez', author$project$Types$NoFeedbackText)
					]),
				c1: 'a cadeira parece-te um pouco esquisita ?',
				c2: 'opcao21'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(201, 'en'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('yes', 'yes', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('no', 'no', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('maybe', 'maybe', author$project$Types$NoFeedbackText)
					]),
				c1: 'Do you find the seat a bit odd ?',
				c2: 'option21'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(301, 'pt'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('yes', 'Sim', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('no', 'Não', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('maybe', 'talvez', author$project$Types$NoFeedbackText)
					]),
				c1: 'estás a gostar do percurso ?',
				c2: 'opcao31'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(301, 'en'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('yes', 'yes', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('no', 'no', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('maybe', 'maybe', author$project$Types$NoFeedbackText)
					]),
				c1: 'Are you enjoying the trail ?',
				c2: 'option31'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(401, 'pt'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('fenomenal', 'fenomenal', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('engraçado', 'engraçado', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('esquisito', 'esquisito', author$project$Types$NoFeedbackText)
					]),
				c1: 'qual a tua opinião sobre o relógio',
				c2: 'opcao41'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(401, 'en'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('phenomenal', 'phenomenal', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('nice', 'nice', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('weird', 'weird', author$project$Types$NoFeedbackText)
					]),
				c1: 'What do you think about the clock ? ',
				c2: 'option41'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(601, 'pt'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('muito util', 'muito útil', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('artistica', 'artística', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('esquisita', 'esquisita', author$project$Types$NoFeedbackText)
					]),
				c1: 'O que pensas da cadeira ?',
				c2: 'opcao61'
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(601, 'en'),
			{
				am: _List_fromArray(
					[
						_Utils_Tuple3('very useful', 'very useful', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('artistic', 'artistic', author$project$Types$NoFeedbackText),
						_Utils_Tuple3('weird', 'weird', author$project$Types$NoFeedbackText)
					]),
				c1: 'What do you think of the chair ?',
				c2: 'option61'
			})
		]));
var author$project$OurStory$NarrativeDSFuncs$getMultiOptionAvailableChoicesDict = function (nr) {
	var optionDict = author$project$OurStory$NarrativeDataStructures$theMultiOptionsDict;
	var getLgOptions = F3(
		function (theNr, lgId, optDict) {
			return function (x) {
				if (x.$ === 1) {
					return _List_Nil;
				} else {
					var lopt = x.a;
					return A2(
						elm$core$List$map,
						function (_n1) {
							var k = _n1.a;
							var v = _n1.b;
							var stext = _n1.c;
							return _Utils_Tuple2(k, v);
						},
						lopt);
				}
			}(
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.am;
					},
					A2(
						elm$core$Dict$get,
						_Utils_Tuple2(theNr, lgId),
						optDict)));
		});
	var availableChoicesDict = A3(
		elm$core$List$foldl,
		F2(
			function (lgId, d) {
				return A3(
					elm$core$Dict$insert,
					lgId,
					A3(getLgOptions, nr, lgId, optionDict),
					d);
			}),
		elm$core$Dict$empty,
		author$project$OurStory$Narrative$desiredLanguages);
	return availableChoicesDict;
};
var author$project$OurStory$NarrativeDSFuncs$getOptionId = function (nr) {
	return 'option' + elm$core$String$fromInt(nr);
};
var author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr = function (stageNr) {
	return A2(
		elm$core$Maybe$withDefault,
		_List_Nil,
		A2(
			elm$core$Maybe$map,
			function ($) {
				return $.c3;
			},
			A2(elm$core$Dict$get, stageNr, author$project$OurStory$NarrativeDSFuncs$getTheStagesExtraInfo)));
};
var author$project$OurStory$NarrativeDSFuncs$getOptionIdsByStageNr = function (stageNr) {
	return A2(
		elm$core$List$map,
		author$project$OurStory$NarrativeDSFuncs$getOptionId,
		author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr(stageNr));
};
var author$project$OurStory$NarrativeDSFuncs$getResetPossibleOptionParam = function (optionNr) {
	return A2(
		elm$core$Maybe$map,
		function (x) {
			return x.dd;
		},
		A2(elm$core$Dict$get, optionNr, author$project$OurStory$NarrativeDataStructures$theMultiOptionParams));
};
var author$project$OurStory$NarrativeDSFuncs$getStageId = function (nr) {
	return 'stage' + elm$core$String$fromInt(nr);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var author$project$OurStory$Rules$moveMultiOptionsToStagesFixed = function () {
	var moveMultiOptionsToStageNr = function (stageNr) {
		var stageId = author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr);
		var loptionIds = author$project$OurStory$NarrativeDSFuncs$getOptionIdsByStageNr(stageNr);
		var lIdAndNrs = A2(
			elm$core$List$map,
			function (x) {
				return _Utils_Tuple2(
					author$project$OurStory$NarrativeDSFuncs$getOptionId(x),
					x);
			},
			author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr(stageNr));
		var cwcmds3 = A2(
			elm$core$List$map,
			function (oid) {
				return A3(
					author$project$Engine$createAttributeIfNotExistsAndOrSetValue,
					author$project$Engine$aDictStringString(author$project$OurStory$Narrative$suggestedDeletedChoiceCaptionDict),
					'suggestedInteractionCaption',
					oid);
			},
			loptionIds);
		var cwcmds2 = A2(
			elm$core$List$concatMap,
			function (_n0) {
				var id = _n0.a;
				var nr = _n0.b;
				return A2(
					elm$core$Maybe$withDefault,
					true,
					author$project$OurStory$NarrativeDSFuncs$getDisplayOptionButtonsOptionParam(nr)) ? _List_fromArray(
					[
						A2(
						author$project$Engine$createAmultiChoice,
						author$project$OurStory$NarrativeDSFuncs$getMultiOptionAvailableChoicesDict(nr),
						id),
						A3(
						author$project$Engine$createAttributeIfNotExistsAndOrSetValue,
						author$project$Engine$abool(true),
						'displayOptionButtons',
						id),
						A3(
						author$project$Engine$createAttributeIfNotExistsAndOrSetValue,
						author$project$Engine$abool(
							A2(
								elm$core$Maybe$withDefault,
								false,
								author$project$OurStory$NarrativeDSFuncs$getResetPossibleOptionParam(nr))),
						'isResetOptionPossible',
						id)
					]) : _List_fromArray(
					[
						author$project$Engine$makeItemWritable(id),
						A3(
						author$project$Engine$createAttributeIfNotExistsAndOrSetValue,
						author$project$Engine$abool(false),
						'displayOptionButtons',
						id),
						A3(
						author$project$Engine$createAttributeIfNotExistsAndOrSetValue,
						author$project$Engine$abool(
							A2(
								elm$core$Maybe$withDefault,
								false,
								author$project$OurStory$NarrativeDSFuncs$getResetPossibleOptionParam(nr))),
						'isResetOptionPossible',
						id)
					]);
			},
			lIdAndNrs);
		var cwcmds1 = A2(
			elm$core$List$map,
			function (id) {
				return A2(author$project$Engine$moveItemToLocationFixed, id, stageId);
			},
			loptionIds);
		return A2(
			elm$core$List$append,
			cwcmds3,
			A2(elm$core$List$append, cwcmds2, cwcmds1));
	};
	return elm$core$List$concat(
		A2(
			elm$core$List$map,
			moveMultiOptionsToStageNr,
			A2(
				elm$core$List$filter,
				function (x) {
					return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
				},
				author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)));
}();
var author$project$OurStory$NarrativeDSFuncs$getQuestionIdsByStageNr = function (stageNr) {
	return A2(
		elm$core$List$map,
		author$project$OurStory$NarrativeDSFuncs$getQuestionId,
		author$project$OurStory$NarrativeDSFuncs$getQuestionNrsByStageNr(stageNr));
};
var author$project$OurStory$Rules$moveQuestionsToStagesFixed = function () {
	var moveQuestionsToStageNr = function (stageNr) {
		var stageId = author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr);
		var lquestionIds = author$project$OurStory$NarrativeDSFuncs$getQuestionIdsByStageNr(stageNr);
		return A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Engine$moveItemToLocationFixed, x, stageId);
			},
			lquestionIds);
	};
	return elm$core$List$concat(
		A2(
			elm$core$List$map,
			moveQuestionsToStageNr,
			A2(
				elm$core$List$filter,
				function (x) {
					return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
				},
				author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)));
}();
var author$project$OurStory$Rules$useGoalStatusReport = true;
var author$project$OurStory$Rules$startingState = _Utils_ap(
	_List_fromArray(
		[
			author$project$Engine$moveTo('onceUponAtime'),
			A2(author$project$Engine$moveCharacterToLocation, 'playerOne', 'onceUponAtime'),
			A2(author$project$Engine$moveItemToCharacterInventory, 'playerOne', 'gps'),
			A2(
			author$project$Engine$moveItemToLocationFixed,
			'creditsInfo',
			'stage' + elm$core$String$fromInt(author$project$OurStory$NarrativeDSFuncs$getNumberOfDesiredStages))
		]),
	_Utils_ap(
		author$project$OurStory$Rules$moveQuestionsToStagesFixed,
		_Utils_ap(
			author$project$OurStory$Rules$makeQuestionsAmultiChoice(
				_List_fromArray(
					[
						_Utils_Tuple2(201, true),
						_Utils_Tuple2(202, true),
						_Utils_Tuple2(301, true),
						_Utils_Tuple2(401, true),
						_Utils_Tuple2(402, true),
						_Utils_Tuple2(701, true)
					])),
			_Utils_ap(
				author$project$OurStory$Rules$makeStageQuestionsWritableExcept(
					_List_fromArray(
						[201, 202, 301, 401, 402, 701])),
				_Utils_ap(
					author$project$OurStory$Rules$moveMultiOptionsToStagesFixed,
					author$project$OurStory$Rules$useGoalStatusReport ? _List_fromArray(
						[
							A2(author$project$Engine$moveItemToCharacterInventory, 'playerOne', 'goalsStatusPaper')
						]) : _List_Nil)))));
var author$project$Engine$getStoryRules = function (_n0) {
	var story = _n0;
	return story.aR;
};
var author$project$SomeTests$getListIncidents = function (engineModel) {
	var getLIncidents = F2(
		function (lcwcmds, enginemodel) {
			return A2(author$project$Engine$changeWorld, lcwcmds, enginemodel).b;
		});
	return elm$core$Dict$toList(
		A2(
			elm$core$Dict$map,
			F2(
				function (id, lcwcms) {
					return A2(getLIncidents, lcwcms, engineModel);
				}),
			A2(
				elm$core$Dict$map,
				F2(
					function (id, v) {
						return v.bT;
					}),
				author$project$Engine$getStoryRules(engineModel))));
};
var author$project$SomeTests$getaListStringOfPossibleIncidents = F2(
	function (lstartincidents, ltups) {
		var getAString = function (elem) {
			return function (x) {
				return (x !== '') ? ('ruleId : ' + (elem.a + (' ,   ' + x))) : '';
			}(
				A2(elm$core$String$join, '  \n , ', elem.b));
		};
		return A2(
			elm$core$List$filter,
			function (x) {
				return x !== '';
			},
			A2(
				elm$core$List$map,
				getAString,
				A2(elm$core$List$append, lstartincidents, ltups)));
	});
var author$project$SomeTests$getAllPossibleIncidentsAboutCwcmds = F2(
	function (engineModel, lstartincidents) {
		var headerInfo = _List_fromArray(
			['Incidents on tests regarding all possible ChangeWorldCommands :']);
		return function (x) {
			return (elm$core$List$length(x) > 0) ? A2(elm$core$List$append, headerInfo, x) : _List_Nil;
		}(
			A2(
				author$project$SomeTests$getaListStringOfPossibleIncidents,
				lstartincidents,
				author$project$SomeTests$getListIncidents(engineModel)));
	});
var author$project$Main$getNewModelAfterGameStartRandomElems = F2(
	function (lfloats, model) {
		var engineModel_ = A2(author$project$Engine$setRandomFloatElems, lfloats, model.c);
		var _n0 = A2(author$project$Engine$changeWorld, author$project$OurStory$Rules$startingState, engineModel_);
		var newEngineModel = _n0.a;
		var lincidents = _n0.b;
		var startLincidents = _List_fromArray(
			[
				_Utils_Tuple2('startingState ', lincidents)
			]);
		var allPossibleIncidentsAboutCwcmds = A2(author$project$SomeTests$getAllPossibleIncidentsAboutCwcmds, newEngineModel, startLincidents);
		var alertMessages_ = model.k ? allPossibleIncidentsAboutCwcmds : _List_Nil;
		var newModel = _Utils_update(
			model,
			{
				d: _Utils_ap(model.d, alertMessages_),
				c: newEngineModel,
				M: lfloats
			});
		return newModel;
	});
var author$project$Main$getNewModelAndInteractionExtraInfoByEngineUpdate = F3(
	function (interactableId, extraInfoWithPendingChanges, model) {
		if (_Utils_eq(
			A2(elm$core$Dict$get, interactableId, model.i),
			elm$core$Maybe$Just(author$project$Types$WaitingForInfoRequested))) {
			return _Utils_Tuple2(
				extraInfoWithPendingChanges.cv,
				_Utils_update(
					model,
					{
						d: A2(elm$core$List$cons, 'Please Wait ... \n', model.d)
					}));
		} else {
			var newInteractionExtraInfo = extraInfoWithPendingChanges.cv;
			var _n0 = function () {
				var _n1 = A2(
					author$project$Engine$update,
					A2(author$project$Engine$CompleteTheUpdate, interactableId, extraInfoWithPendingChanges),
					model.c);
				if (_n1.$ === 1) {
					var _n2 = _n1.a;
					var newEngineModel_ = _n2.a;
					var lInteractionIncidents_ = _n2.b;
					return _Utils_Tuple2(newEngineModel_, lInteractionIncidents_);
				} else {
					return _Utils_Tuple2(model.c, _List_Nil);
				}
			}();
			var newEngineModel = _n0.a;
			var lInteractionIncidents = _n0.b;
			var interactionIncidents = model.k ? lInteractionIncidents : _List_Nil;
			var newModel = _Utils_update(
				model,
				{
					d: interactionIncidents,
					i: A3(
						elm$core$Dict$update,
						interactableId,
						function (x) {
							return elm$core$Maybe$Just(author$project$Types$NoInfoYet);
						},
						model.i),
					c: newEngineModel
				});
			return _Utils_Tuple2(newInteractionExtraInfo, newModel);
		}
	});
var author$project$Components$DisplayInformation = function (a) {
	return {$: 0, a: a};
};
var author$project$Components$addComponent = F3(
	function (componentId, component, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		return _Utils_Tuple2(
			id,
			A3(elm$core$Dict$insert, componentId, component, components));
	});
var author$project$Components$updateAllLgsDisplayName = F2(
	function (newNameStr, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		var newDict = function () {
			var _n1 = A2(elm$core$Dict$get, 'displayInfo', components);
			if ((!_n1.$) && (!_n1.a.$)) {
				var dict = _n1.a.a;
				return A2(
					elm$core$Dict$map,
					F2(
						function (key, val) {
							return _Utils_update(
								val,
								{E: newNameStr});
						}),
					dict);
			} else {
				return elm$core$Dict$empty;
			}
		}();
		return A3(
			author$project$Components$addComponent,
			'displayInfo',
			author$project$Components$DisplayInformation(newDict),
			_Utils_Tuple2(id, components));
	});
var author$project$Theme$AnswerBox$update = F2(
	function (theText, model) {
		return (theText === '') ? _Utils_update(
			model,
			{bE: elm$core$Maybe$Nothing}) : _Utils_update(
			model,
			{
				bE: elm$core$Maybe$Just(theText)
			});
	});
var author$project$Main$setPlayerName = F2(
	function (playerNameStr, model) {
		if (playerNameStr === '') {
			return model;
		} else {
			var newPlayerOneEntity = A2(
				author$project$Components$updateAllLgsDisplayName,
				playerNameStr,
				A2(author$project$Main$findEntity, model, 'playerOne'));
			var newEntities = A2(
				elm$core$List$map,
				function (x) {
					return (x.a === 'playerOne') ? newPlayerOneEntity : x;
				},
				model._);
			var newAnswerBoxModel = A2(author$project$Theme$AnswerBox$update, '', model.j);
			var newModel = _Utils_update(
				model,
				{j: newAnswerBoxModel, _: newEntities, x: playerNameStr});
			return newModel;
		}
	});
var author$project$Main$mbSetPlayerName = F2(
	function (mbPlayerName, model) {
		if (mbPlayerName.$ === 1) {
			return model;
		} else {
			var playerName = mbPlayerName.a;
			return A2(author$project$Main$setPlayerName, playerName, model);
		}
	});
var elm$regex$Regex$Match = F4(
	function (match, index, number, submatches) {
		return {cp: index, cI: match, cZ: number, ds: submatches};
	});
var elm$regex$Regex$fromStringWith = _Regex_fromStringWith;
var elm$regex$Regex$fromString = function (string) {
	return A2(
		elm$regex$Regex$fromStringWith,
		{a$: false, bi: false},
		string);
};
var elm$regex$Regex$replace = _Regex_replaceAtMost(_Regex_infinity);
var author$project$Main$regexUserReplace = F3(
	function (userRegex, replacer, string) {
		var _n0 = elm$regex$Regex$fromString(userRegex);
		if (_n0.$ === 1) {
			return string;
		} else {
			var regex = _n0.a;
			return A3(elm$regex$Regex$replace, regex, replacer, string);
		}
	});
var author$project$Engine$getHistory = function (_n0) {
	var story = _n0;
	return story.aq;
};
var author$project$Main$saveHistoryToStorage = _Platform_outgoingPort(
	'saveHistoryToStorage',
	function ($) {
		return elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'lInteractions',
					elm$json$Json$Encode$list(
						function ($) {
							return elm$json$Json$Encode$object(
								_List_fromArray(
									[
										_Utils_Tuple2(
										'currentLocation',
										elm$json$Json$Encode$string($.b3)),
										_Utils_Tuple2(
										'geolocationInfoText',
										elm$json$Json$Encode$string($.ci)),
										_Utils_Tuple2(
										'inputText',
										elm$json$Json$Encode$string($.cr)),
										_Utils_Tuple2(
										'inputTextForBackend',
										elm$json$Json$Encode$string($.cs)),
										_Utils_Tuple2(
										'interactableId',
										elm$json$Json$Encode$string($.bc)),
										_Utils_Tuple2(
										'mbMatchedRuleId',
										elm$json$Json$Encode$string($.cN))
									]));
						})($.ar)),
					_Utils_Tuple2(
					'lPrandomFloats',
					elm$json$Json$Encode$list(elm$json$Json$Encode$float)($.as)),
					_Utils_Tuple2(
					'playerName',
					elm$json$Json$Encode$string($.x))
				]));
	});
var author$project$TranslationHelper$getInLanguage = F2(
	function (lgId, theStr) {
		var translationDict = elm$core$Dict$fromList(
			_List_fromArray(
				[
					_Utils_Tuple2(
					_Utils_Tuple2('___investigator___', 'pt'),
					'Investigador'),
					_Utils_Tuple2(
					_Utils_Tuple2('___investigator___', 'en'),
					'Investigator'),
					_Utils_Tuple2(
					_Utils_Tuple2('___QUESTION_ANSWERED___', 'pt'),
					'Questão Respondida  '),
					_Utils_Tuple2(
					_Utils_Tuple2('___QUESTION_ANSWERED___', 'en'),
					'Question Answered  '),
					_Utils_Tuple2(
					_Utils_Tuple2('___YOUR_ANSWER___', 'pt'),
					'resposta :  '),
					_Utils_Tuple2(
					_Utils_Tuple2('___YOUR_ANSWER___', 'en'),
					'answer :  '),
					_Utils_Tuple2(
					_Utils_Tuple2('___YOUR_CHOICE___', 'pt'),
					'escolha :  '),
					_Utils_Tuple2(
					_Utils_Tuple2('___YOUR_CHOICE___', 'en'),
					'your choice :  '),
					_Utils_Tuple2(
					_Utils_Tuple2('___CORRECT_ANSWER___', 'pt'),
					'  \nResposta Correcta'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CORRECT_ANSWER___', 'en'),
					'  \nCorrect Answer'),
					_Utils_Tuple2(
					_Utils_Tuple2('___INCORRECT_ANSWER___', 'pt'),
					'  \nResposta Incorrecta'),
					_Utils_Tuple2(
					_Utils_Tuple2('___INCORRECT_ANSWER___', 'en'),
					'  \nIncorrect Answer'),
					_Utils_Tuple2(
					_Utils_Tuple2('__Characters_here__', 'pt'),
					'Personagens aqui: '),
					_Utils_Tuple2(
					_Utils_Tuple2('__Characters_here__', 'en'),
					'Characters here: '),
					_Utils_Tuple2(
					_Utils_Tuple2('__Items_here__', 'pt'),
					'Items aqui: '),
					_Utils_Tuple2(
					_Utils_Tuple2('__Items_here__', 'en'),
					'Items here: '),
					_Utils_Tuple2(
					_Utils_Tuple2('__Nothing_here__', 'pt'),
					'Nada aqui.'),
					_Utils_Tuple2(
					_Utils_Tuple2('__Nothing_here__', 'en'),
					'Nothing here.'),
					_Utils_Tuple2(
					_Utils_Tuple2('__and__', 'pt'),
					' e '),
					_Utils_Tuple2(
					_Utils_Tuple2('__and__', 'en'),
					' and '),
					_Utils_Tuple2(
					_Utils_Tuple2('__Inventory__', 'pt'),
					'Inventário'),
					_Utils_Tuple2(
					_Utils_Tuple2('__Inventory__', 'en'),
					'Inventory'),
					_Utils_Tuple2(
					_Utils_Tuple2('___Language___', 'pt'),
					'Linguagem'),
					_Utils_Tuple2(
					_Utils_Tuple2('___Language___', 'en'),
					'Language'),
					_Utils_Tuple2(
					_Utils_Tuple2('___Settings___', 'pt'),
					'Settings'),
					_Utils_Tuple2(
					_Utils_Tuple2('___Settings___', 'en'),
					'Settings'),
					_Utils_Tuple2(
					_Utils_Tuple2('___AUDIO___', 'pt'),
					'Audio'),
					_Utils_Tuple2(
					_Utils_Tuple2('___AUDIO___', 'en'),
					'Audio'),
					_Utils_Tuple2(
					_Utils_Tuple2('___SAVE_LOAD___', 'pt'),
					'Save/Load'),
					_Utils_Tuple2(
					_Utils_Tuple2('___SAVE_LOAD___', 'en'),
					'Save/Load'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_TO_CHECK_GPS___', 'pt'),
					'click para verificar coords'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_TO_CHECK_GPS___', 'en'),
					'click to check gps coords'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_TO_NOT_CHECK_GPS___', 'pt'),
					'click para não verificar coords'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_TO_NOT_CHECK_GPS___', 'en'),
					'click to not check gps coords position'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_NO_AUTOPLAY___', 'pt'),
					'click para desactivar autoplay'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_NO_AUTOPLAY___', 'en'),
					'click to deactivate autoplay'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_AUTOPLAY___', 'pt'),
					'click para activar autoplay'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_AUTOPLAY___', 'en'),
					'click to activate autoplay'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CHECK_GPS_COORDS___', 'pt'),
					'verificar coords'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CHECK_GPS_COORDS___', 'en'),
					'check gps coords'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_NO_SIDEBAR___', 'pt'),
					'click para desactivar a sidebar'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_NO_SIDEBAR___', 'en'),
					'click to deactivate sidebar'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_SIDEBAR___', 'pt'),
					'click para activar a sidebar'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_SIDEBAR___', 'en'),
					'click to activate sidebar'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_RADIO_BUTTONS___', 'pt'),
					'click para utilizar radio buttons'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_RADIO_BUTTONS___', 'en'),
					'click to use radio buttons'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_BUTTONS___', 'pt'),
					'click para utilizar regular buttons'),
					_Utils_Tuple2(
					_Utils_Tuple2('___CLICK_FOR_BUTTONS___', 'en'),
					'click to use regular buttons'),
					_Utils_Tuple2(
					_Utils_Tuple2('___LAYOUT_OPTIONS___', 'pt'),
					'Layout'),
					_Utils_Tuple2(
					_Utils_Tuple2('___LAYOUT_OPTIONS___', 'en'),
					'Layout'),
					_Utils_Tuple2(
					_Utils_Tuple2('___BUTTON_OPTIONS___', 'pt'),
					'Opções Comandos'),
					_Utils_Tuple2(
					_Utils_Tuple2('___BUTTON_OPTIONS___', 'en'),
					'Comand Options'),
					_Utils_Tuple2(
					_Utils_Tuple2('___NR_TRIES_LEFT___', 'pt'),
					'numero de tentativas disponíveis : '),
					_Utils_Tuple2(
					_Utils_Tuple2('___NR_TRIES_LEFT___', 'en'),
					'number of tries left :'),
					_Utils_Tuple2(
					_Utils_Tuple2('___more___', 'pt'),
					'mais'),
					_Utils_Tuple2(
					_Utils_Tuple2('___more___', 'en'),
					'more'),
					_Utils_Tuple2(
					_Utils_Tuple2('___Checking_Answer___', 'pt'),
					'A verificar a resposta.  \nse o dinossauro :) estiver a dormir  \npode demorar até 10 seg. Por favor aguarde ... )'),
					_Utils_Tuple2(
					_Utils_Tuple2('___Checking_Answer___', 'en'),
					'Checking Answer.  \nIf dynosaur :) is sleeping  \nit can take up to 10 sec. Please be patient ... ) '),
					_Utils_Tuple2(
					_Utils_Tuple2('___Couldnt_check_Answer___', 'pt'),
					'Não foi possivel verificar a resposta. Por favor tente novamente ! '),
					_Utils_Tuple2(
					_Utils_Tuple2('___Couldnt_check_Answer___', 'en'),
					'Couldnt check Answer , Please try Again ! '),
					_Utils_Tuple2(
					_Utils_Tuple2('___MAX_TRIES_ON_BACKEND___', 'pt'),
					'Não foi possivel verificar a resposta.  \nDemasiadas tentativas a partir deste IP .  \nPor favor tente dentro de algumas horas ! '),
					_Utils_Tuple2(
					_Utils_Tuple2('___MAX_TRIES_ON_BACKEND___', 'en'),
					'Couldnt check Answer.  \nToo Many Tries coming from this IP .  \n Please try Again in a few hours ! '),
					_Utils_Tuple2(
					_Utils_Tuple2('___REACH_MAX_NR_TRIES___', 'pt'),
					'O numero máximo de tentativas foi atingido !'),
					_Utils_Tuple2(
					_Utils_Tuple2('___REACH_MAX_NR_TRIES___', 'en'),
					'You reached the maximum number of tries !'),
					_Utils_Tuple2(
					_Utils_Tuple2('___type_answer___', 'pt'),
					'digite a resposta'),
					_Utils_Tuple2(
					_Utils_Tuple2('___type_answer___', 'en'),
					'type answer'),
					_Utils_Tuple2(
					_Utils_Tuple2('___SUGGESTED_INTERACTION___', 'pt'),
					'interacção sugerida :'),
					_Utils_Tuple2(
					_Utils_Tuple2('___SUGGESTED_INTERACTION___', 'en'),
					'suggested interaction'),
					_Utils_Tuple2(
					_Utils_Tuple2('___center_coords_of_current_location___', 'pt'),
					'coordenadas centrais do presente local :'),
					_Utils_Tuple2(
					_Utils_Tuple2('___center_coords_of_current_location___', 'en'),
					'center coords of current location : '),
					_Utils_Tuple2(
					_Utils_Tuple2('___DISTANCE_TO___', 'pt'),
					'Distância a '),
					_Utils_Tuple2(
					_Utils_Tuple2('___DISTANCE_TO___', 'en'),
					'Distance to '),
					_Utils_Tuple2(
					_Utils_Tuple2('___IS___', 'pt'),
					' é :'),
					_Utils_Tuple2(
					_Utils_Tuple2('___IS___', 'en'),
					' is : '),
					_Utils_Tuple2(
					_Utils_Tuple2('___METERS___', 'pt'),
					'metros'),
					_Utils_Tuple2(
					_Utils_Tuple2('___METERS___', 'en'),
					'meters'),
					_Utils_Tuple2(
					_Utils_Tuple2('___EXIT___', 'pt'),
					'Exit'),
					_Utils_Tuple2(
					_Utils_Tuple2('___EXIT___', 'en'),
					'Exit')
				]));
		var lgId_ = ((lgId === 'vi') || (lgId === 'vw')) ? 'en' : lgId;
		var _n0 = A2(
			elm$core$Dict$get,
			_Utils_Tuple2(theStr, lgId_),
			translationDict);
		if (_n0.$ === 1) {
			return theStr;
		} else {
			var str = _n0.a;
			return str;
		}
	});
var author$project$Main$saveHistoryToStorageHelper = function (model) {
	var storyHistory = author$project$Engine$getHistory(model.c);
	var lToSave = A2(
		elm$core$List$map,
		function (x) {
			return {
				b3: author$project$Engine$getCurrentLocation(model.c),
				ci: x.b.ci,
				cr: A2(elm$core$Maybe$withDefault, '', x.b.O),
				cs: A2(elm$core$Maybe$withDefault, '', x.b.bg),
				bc: x.a,
				cN: A2(elm$core$Maybe$withDefault, '', x.b.cN)
			};
		},
		storyHistory);
	var infoToSave = {
		ar: lToSave,
		as: model.M,
		x: A2(author$project$TranslationHelper$getInLanguage, model.b.b4, model.x)
	};
	return _Utils_Tuple2(
		model,
		author$project$Main$saveHistoryToStorage(infoToSave));
};
var author$project$Main$sendRequestForGeolocation = _Platform_outgoingPort('sendRequestForGeolocation', elm$json$Json$Encode$string);
var author$project$Main$sendRequestForStoredHistory = _Platform_outgoingPort('sendRequestForStoredHistory', elm$json$Json$Encode$string);
var elm$core$Platform$Cmd$batch = _Platform_batch;
var author$project$Main$updateExtraAndThen = F3(
	function (updatefunc, msg, _n0) {
		var model = _n0.a;
		var cmd = _n0.b;
		var _n1 = A2(updatefunc, msg, model);
		var model_ = _n1.a;
		var cmd_ = _n1.b;
		return _Utils_Tuple2(
			model_,
			elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, cmd_])));
	});
var author$project$Main$updateInterExtraInfoWithGeoInfo = F2(
	function (extraInforecord, model) {
		var currLocNameAndCoords = A2(
			author$project$Components$getDictLgNamesAndCoords,
			author$project$OurStory$Narrative$desiredLanguages,
			A2(
				author$project$Main$findEntity,
				model,
				author$project$Engine$getCurrentLocation(model.c)));
		return _Utils_update(
			extraInforecord,
			{
				ci: A4(author$project$GpsUtils$getCurrentGeoReportAsText, currLocNameAndCoords, model.C, model.I, 3)
			});
	});
var author$project$Components$addLgDisplayInfo = F4(
	function (lgId, name, description, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		var newDict = function () {
			var _n1 = A2(elm$core$Dict$get, 'displayInfo', components);
			if ((!_n1.$) && (!_n1.a.$)) {
				var dict = _n1.a.a;
				return A3(
					elm$core$Dict$insert,
					lgId,
					{Z: description, E: name},
					dict);
			} else {
				return A3(
					elm$core$Dict$insert,
					lgId,
					{Z: description, E: name},
					elm$core$Dict$empty);
			}
		}();
		return A3(
			author$project$Components$addComponent,
			'displayInfo',
			author$project$Components$DisplayInformation(newDict),
			_Utils_Tuple2(id, components));
	});
var author$project$Components$addDisplayInfo = F3(
	function (name, description, _n0) {
		var id = _n0.a;
		var components = _n0.b;
		return A4(
			author$project$Components$addLgDisplayInfo,
			'en',
			name,
			description,
			_Utils_Tuple2(id, components));
	});
var author$project$OurStory$Manifest$characters = _List_fromArray(
	[
		A4(
		author$project$Components$addLgDisplayInfo,
		'pt',
		'investigador',
		'Tu ...',
		A3(
			author$project$Components$addDisplayInfo,
			'investigator',
			'You ...',
			author$project$Components$entity('playerOne')))
	]);
var author$project$OurStory$NarrativeDSFuncs$getMultiOptionBody = F2(
	function (nr, lgId) {
		var moptionDict = author$project$OurStory$NarrativeDataStructures$theMultiOptionsDict;
		var optionRec = A2(
			elm$core$Dict$get,
			_Utils_Tuple2(nr, lgId),
			moptionDict);
		return function (x) {
			if (x.$ === 1) {
				return _List_Nil;
			} else {
				var obody = x.a;
				return _List_fromArray(
					[obody]);
			}
		}(
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.c1;
				},
				optionRec));
	});
var author$project$OurStory$NarrativeDSFuncs$getMultiOptionBodyAsString = F2(
	function (nr, lgId) {
		return A2(
			elm$core$String$join,
			' , ',
			A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionBody, nr, lgId));
	});
var author$project$OurStory$NarrativeDSFuncs$getMultiOptionName = F2(
	function (nr, lgId) {
		var optionRec = A2(
			elm$core$Dict$get,
			_Utils_Tuple2(nr, lgId),
			author$project$OurStory$NarrativeDataStructures$theMultiOptionsDict);
		return function (x) {
			if (x.$ === 1) {
				return (lgId === 'pt') ? ('opção ' + elm$core$String$fromInt(nr)) : ('option ' + elm$core$String$fromInt(nr));
			} else {
				var oname = x.a;
				return oname;
			}
		}(
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.c2;
				},
				optionRec));
	});
var author$project$OurStory$NarrativeDSFuncs$getQuestionBody = F2(
	function (nr, lgId) {
		var questionsDict = author$project$OurStory$NarrativeDataStructures$theQuestionsDict;
		var question = A2(
			elm$core$Dict$get,
			_Utils_Tuple2(nr, lgId),
			questionsDict);
		return function (x) {
			if (x.$ === 1) {
				return _List_Nil;
			} else {
				var qbody = x.a;
				return _List_fromArray(
					[qbody]);
			}
		}(
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.c9;
				},
				question));
	});
var author$project$OurStory$NarrativeDSFuncs$getQuestionBodyAsString = F2(
	function (nr, lgId) {
		return A2(
			elm$core$String$join,
			' , ',
			A2(author$project$OurStory$NarrativeDSFuncs$getQuestionBody, nr, lgId));
	});
var author$project$OurStory$NarrativeDSFuncs$getQuestionName = F2(
	function (nr, lgId) {
		var questionsDict = author$project$OurStory$NarrativeDataStructures$theQuestionsDict;
		var question = A2(
			elm$core$Dict$get,
			_Utils_Tuple2(nr, lgId),
			questionsDict);
		return function (x) {
			if (x.$ === 1) {
				return (lgId === 'pt') ? ('questão ' + elm$core$String$fromInt(nr)) : ('question ' + elm$core$String$fromInt(nr));
			} else {
				var qname = x.a;
				return qname;
			}
		}(
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.da;
				},
				question));
	});
var author$project$OurStory$Manifest$getListOfItems = F3(
	function (initItems, lQuestionNrs, lMultiOptionNrs) {
		var createResetMultiOptionEntity = F2(
			function (index, nr) {
				return A3(
					author$project$Components$addDisplayInfo,
					'reset_' + A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionName, nr, 'pt'),
					'reset_' + A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionBodyAsString, nr, 'pt'),
					A3(
						author$project$Components$addDisplayInfo,
						'reset_' + A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionName, nr, 'en'),
						'reset_' + A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionBodyAsString, nr, 'en'),
						author$project$Components$entity(
							'reset_' + author$project$OurStory$NarrativeDSFuncs$getOptionId(nr))));
			});
		var multiOptionResets = A2(
			elm$core$List$indexedMap,
			F2(
				function (index, nr) {
					return A2(createResetMultiOptionEntity, index, nr);
				}),
			lMultiOptionNrs);
		var createQuestionEntity = function (nr) {
			return A4(
				author$project$Components$addLgDisplayInfo,
				'pt',
				A2(author$project$OurStory$NarrativeDSFuncs$getQuestionName, nr, 'pt'),
				A2(author$project$OurStory$NarrativeDSFuncs$getQuestionBodyAsString, nr, 'pt'),
				A3(
					author$project$Components$addDisplayInfo,
					A2(author$project$OurStory$NarrativeDSFuncs$getQuestionName, nr, 'en'),
					A2(author$project$OurStory$NarrativeDSFuncs$getQuestionBodyAsString, nr, 'en'),
					author$project$Components$entity(
						author$project$OurStory$NarrativeDSFuncs$getQuestionId(nr))));
		};
		var moreQuestionItems = A2(elm$core$List$map, createQuestionEntity, lQuestionNrs);
		var createMultiOptionEntity = function (nr) {
			return A4(
				author$project$Components$addLgDisplayInfo,
				'pt',
				A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionName, nr, 'pt'),
				A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionBodyAsString, nr, 'pt'),
				A3(
					author$project$Components$addDisplayInfo,
					A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionName, nr, 'en'),
					A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionBodyAsString, nr, 'en'),
					author$project$Components$entity(
						author$project$OurStory$NarrativeDSFuncs$getOptionId(nr))));
		};
		var moreMultiOptionItems = A2(elm$core$List$map, createMultiOptionEntity, lMultiOptionNrs);
		return A2(
			elm$core$List$append,
			multiOptionResets,
			A2(
				elm$core$List$append,
				moreMultiOptionItems,
				A2(elm$core$List$append, initItems, moreQuestionItems)));
	});
var author$project$Components$NeedsGpsCoords = function (a) {
	return {$: 7, a: a};
};
var author$project$Components$addNeedsGpsInfo = function (bval) {
	return A2(
		author$project$Components$addComponent,
		'needsGpsCoords',
		author$project$Components$NeedsGpsCoords(bval));
};
var author$project$OurStory$Manifest$initialItems = _List_fromArray(
	[
		author$project$Components$entity('gameStateItem'),
		A2(
		author$project$Components$addNeedsGpsInfo,
		true,
		A4(
			author$project$Components$addLgDisplayInfo,
			'pt',
			'GPSr',
			'Instrumento mágico que te ajuda a navegar no terreno.',
			A3(
				author$project$Components$addDisplayInfo,
				'GPSr',
				'Magical Instrument that helps you navigate',
				author$project$Components$entity('gps')))),
		A4(
		author$project$Components$addLgDisplayInfo,
		'pt',
		'goals report',
		'goals report',
		A3(
			author$project$Components$addDisplayInfo,
			'goals report',
			'goals report',
			author$project$Components$entity('goalsStatusPaper'))),
		A4(
		author$project$Components$addLgDisplayInfo,
		'pt',
		'questão',
		'descrição da questão',
		A3(
			author$project$Components$addDisplayInfo,
			'question',
			'question Description',
			author$project$Components$entity('standardQuestion'))),
		A4(
		author$project$Components$addLgDisplayInfo,
		'pt',
		'credits',
		'credits Info',
		A3(
			author$project$Components$addDisplayInfo,
			'credits',
			'credits Info',
			author$project$Components$entity('creditsInfo'))),
		A4(
		author$project$Components$addLgDisplayInfo,
		'pt',
		'papiro',
		'papiro com alguma informação escrita',
		A3(
			author$project$Components$addDisplayInfo,
			'old paper',
			'old paper with some info written in it',
			author$project$Components$entity('finalPaper')))
	]);
var author$project$OurStory$NarrativeDSFuncs$getFilteredStageMultiOptionNrs = elm$core$List$concat(
	A2(
		elm$core$List$map,
		author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr,
		A2(
			elm$core$List$filter,
			function (x) {
				return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
			},
			author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)));
var author$project$OurStory$Manifest$items = A3(author$project$OurStory$Manifest$getListOfItems, author$project$OurStory$Manifest$initialItems, author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionNrs, author$project$OurStory$NarrativeDSFuncs$getFilteredStageMultiOptionNrs);
var author$project$Components$ConnectingLocations = function (a) {
	return {$: 2, a: a};
};
var author$project$Components$addConnectingLocations = function (exits) {
	return A2(
		author$project$Components$addComponent,
		'connectedLocations',
		author$project$Components$ConnectingLocations(exits));
};
var author$project$Components$NeedsToBeInGpsZone = F4(
	function (a, b, c, d) {
		return {$: 8, a: a, b: b, c: c, d: d};
	});
var author$project$Components$addNeedsToBeInGpsZone = F4(
	function (bval, dlat, dlon, mbRadius) {
		return A2(
			author$project$Components$addComponent,
			'needsToBeInGpsZone',
			A4(author$project$Components$NeedsToBeInGpsZone, bval, dlat, dlon, mbRadius));
	});
var author$project$GpsUtils$East = 6;
var author$project$GpsUtils$West = 7;
var author$project$GpsUtils$North = 0;
var author$project$GpsUtils$NorthEast = 1;
var author$project$GpsUtils$NorthWest = 2;
var author$project$GpsUtils$South = 3;
var author$project$GpsUtils$SouthEast = 4;
var author$project$GpsUtils$SouthWest = 5;
var author$project$GpsUtils$bearingToDirection = function (angle) {
	return ((angle >= 22.5) && (angle < 67.5)) ? 1 : (((angle >= 67.5) && (angle < 112.5)) ? 6 : (((angle >= 112.5) && (angle < 157.5)) ? 4 : (((angle >= 157.5) && (angle < 202.5)) ? 3 : (((angle >= 202.5) && (angle < 247.5)) ? 5 : (((angle >= 247.5) && (angle < 292.5)) ? 7 : (((angle >= 292.5) && (angle < 337.5)) ? 2 : 0))))));
};
var elm$core$Basics$atan2 = _Basics_atan2;
var author$project$GpsUtils$calculateBearing = F2(
	function (_n0, _n1) {
		var lat1 = _n0.a;
		var lon1 = _n0.b;
		var lat2 = _n1.a;
		var lon2 = _n1.b;
		var toDegrees = function (rad) {
			return (rad * 180) / elm$core$Basics$pi;
		};
		var longitude2 = lon2;
		var longitude1 = lon1;
		var longDiff = elm$core$Basics$degrees(longitude2 - longitude1);
		var latitude2 = elm$core$Basics$degrees(lat2);
		var y = elm$core$Basics$sin(longDiff) * elm$core$Basics$cos(latitude2);
		var latitude1 = elm$core$Basics$degrees(lat1);
		var x = (elm$core$Basics$cos(latitude1) * elm$core$Basics$sin(latitude2)) - ((elm$core$Basics$sin(latitude1) * elm$core$Basics$cos(latitude2)) * elm$core$Basics$cos(longDiff));
		return function (v) {
			return v % 360;
		}(
			elm$core$Basics$round(
				360 + toDegrees(
					A2(elm$core$Basics$atan2, y, x))));
	});
var author$project$OurStory$Manifest$getStageCoordInfo = function (stageNr) {
	var dictCoordInfo = elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				1,
				{n: false, at: 38.7952, av: -9.391733, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				2,
				{n: true, at: 38.795033, av: -9.391517, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				3,
				{n: true, at: 38.79475, av: -9.3914, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				4,
				{n: true, at: 38.7943, av: -9.391567, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				5,
				{n: true, at: 38.79395, av: -9.391267, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				6,
				{n: true, at: 38.793717, av: -9.391167, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				7,
				{n: true, at: 38.793733, av: -9.39095, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				8,
				{n: true, at: 38.793367, av: -9.391167, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				9,
				{n: true, at: 38.792367, av: -9.391267, cQ: elm$core$Maybe$Nothing}),
				_Utils_Tuple2(
				10,
				{n: true, at: 38.7922, av: -9.3913, cQ: elm$core$Maybe$Nothing})
			]));
	return A2(elm$core$Dict$get, stageNr, dictCoordInfo);
};
var author$project$OurStory$NarrativeDataStructures$theStagesDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			_Utils_Tuple2(1, 'pt'),
			{
				$7: 'Stage 1 - Inicio ',
				dp: _List_fromArray(
					['\n![pic500](img/entradaVilaSassetti.png)\n\nEstás na bonita Vila de Sintra próximo da entrada do percurso pedestre\nda Vila Sassetti ( Quinta da Amizade ) ...\n\n"Este percurso pedestre permite o acesso ao Palácio Nacional da Pena e ao Castelo dos Mouros, desde o Centro Histórico de Sintra.\n\nA Vila Sassetti está integrada na Paisagem Cultural de Sintra, classificada como Património da Humanidade pela UNESCO.\n\nO jardim, concebido pelo arquiteto Luigi Manini, procura obedecer a uma estética naturalista, sendo estruturado por um caminho sinuoso que é atravessado por uma linha de água artificial. O jardim expressa a relação de harmonia entre a arquitetura e a paisagem, que assim parecem fundir-se naturalmente."\n\n![pic500](img/entradaVilaSassetti2.png)\n\n![pic500](img/entradaVilaSassetti3.png)\n            '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(1, 'en'),
			{
				$7: 'Stage 1 - Start',
				dp: _List_fromArray(
					['\n![pic500](img/entradaVilaSassetti.png)\n\nYou are in the beautiful village of Sintra near the start of Vila Sassetti Pedestrian Footpath ...\n\n"The Footpath  provides access to the National Palace of Pena and the Moorish Castle from the Historical Centre of Sintra.\n\nVilla Sassetti is integrated into the Cultural Landscape of Sintra, classified as UNESCO World Heritage.\n\nThe garden, designed by the architect Luigi Manini, strives to obey a naturalist aesthetic structured around a twisting pathway criss-crossed by an artificial watercourse. The garden expresses the harmonious relationship between architecture and the landscape that seem able to naturally merge into each other. "\n\n![pic500](img/entradaVilaSassetti2.png)\n\n![pic500](img/entradaVilaSassetti3.png)\n    '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(2, 'pt'),
			{
				$7: 'Stage 2 - o largo ',
				dp: _List_fromArray(
					['\n![pic500](img/largo.png)\n\nEstás agora num pequeno largo ... À esquerda ( de quem sobe ) é possível observar um extenso banco com vários pequenos azulejos\ne à direita ( de quem sobe ) é possível observar uma espécie de trono\n\n![pic500](img/largo2.png)\n\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(2, 'en'),
			{
				$7: 'Stage 2',
				dp: _List_fromArray(
					['\n![pic500](img/largo.png)\n\nyou are now on a small round space ... To the left ( when going up ) one can observe a large bank with several small tiles\nand to the right ( when going up ) one can observe a sort of throne chair ...\n\n![pic500](img/largo2.png)\n\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(3, 'pt'),
			{
				$7: 'Stage 3 - arcade',
				dp: _List_fromArray(
					['\n![pic500](img/arcadas.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(3, 'en'),
			{
				$7: 'Stage 3 - arcade ',
				dp: _List_fromArray(
					['\n![pic500](img/arcadas.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(4, 'pt'),
			{
				$7: 'Stage 4 - Edificio Principal',
				dp: _List_fromArray(
					['Estás agora junto ao Edifício Principal ...\n\n![pic500](img/casaPrincipal.png)\n\n" O edifício principal distingue-se pela torre circular central de três pisos ,\na partir da qual se estendem outros corpos de geometria variável\n, empregando o granito de Sintra como revestimento exterior principal\n, as faixas de terracota características do estilo Românico Lombardo e diversas\npeças da coleção de antiquária do comitente "\n\n![pic500](img/casaPrincipalRelogio.png)\n            '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(4, 'en'),
			{
				$7: 'Stage 4 - Main Building',
				dp: _List_fromArray(
					['You are now next to the Main Building ...\n\n![pic500](img/casaPrincipal.png)\n\n"The main building stands out for its central circular tower spanning three storeys\n, out of which extend other constructions with variable geometries\n, applying Sintra granite as the main exterior finishing material with rows of terracotta\ncharacteristic of the Lombard Romanesque\n, alongside diverse pieces from the antiques collection of the owner"\n\n![pic500](img/casaPrincipalRelogio.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(5, 'pt'),
			{
				$7: 'Stage 5 - a Planta',
				dp: _List_fromArray(
					[' ... À tua esquerda vês um belo exemplar de \'Camellia Japonica\' ...\n\n![pic500](img/camelliaJaponica.png)\n            '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(5, 'en'),
			{
				$7: 'Stage 5 - the Plant',
				dp: _List_fromArray(
					[' ... on your left you can see a beautiful  \'Camellia Japonica\' ...\n\n![pic500](img/camelliaJaponica.png)\n            '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(6, 'pt'),
			{
				$7: 'Stage 6 - a cadeira',
				dp: _List_fromArray(
					['reparas que estás junto a uma enigmática cadeira ...\n\n![pic500](img/cadeira.png)\n            '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(6, 'en'),
			{
				$7: 'Stage 6 - the Chair',
				dp: _List_fromArray(
					['You notice an enigmatic chair right next to you\n![pic500](img/cadeira.png)\n            '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(7, 'pt'),
			{
				$7: 'Stage 7 - o Rochedo',
				dp: _List_fromArray(
					['\n![pic500](img/rochedo1.png)\n\n![pic500](img/rochedo2.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(7, 'en'),
			{
				$7: 'Stage 7 - the Rock',
				dp: _List_fromArray(
					['\n![pic500](img/rochedo1.png)\n\n![pic500](img/rochedo2.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(8, 'pt'),
			{
				$7: 'Stage 8 - placard informativo',
				dp: _List_fromArray(
					['\n![pic500](img/portaSaida_.png)\n\n![pic500](img/placardProximoSaida1.png)\n             '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(8, 'en'),
			{
				$7: 'Stage 8 - info',
				dp: _List_fromArray(
					['\n![pic500](img/portaSaida_.png)\n\n![pic500](img/placardProximoSaida1.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(9, 'pt'),
			{
				$7: 'Stage 9 - Topoguia',
				dp: _List_fromArray(
					['Estás agora junto a um topoguia sobre as vias de escalada do Penedo da Amizade\n\n![pic500](img/viasPenedoDaAmizade.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(9, 'en'),
			{
				$7: 'Stage 9 - Rock climbing guide',
				dp: _List_fromArray(
					['You are now next to a rock climbing guide that presents some info about Penedo da Amizade climbing routes\n\n![pic500](img/viasPenedoDaAmizade.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(10, 'pt'),
			{
				$7: 'Stage 10 - Penedo da Amizade',
				dp: _List_fromArray(
					['Passaste pela  última porta e encontras-te agora no Penedo da Amizade ...\n\n![pic500](img/portaSaida.png)\n\nÀ tua esquerda encontra-se um placard informativo com distâncias relativamente a alguns pontos de interesse\n\n![pic500](img/placardProximoSaidaDistancias.png)\n          '])
			}),
			_Utils_Tuple2(
			_Utils_Tuple2(10, 'en'),
			{
				$7: 'Stage 10 - Penedo da Amizade',
				dp: _List_fromArray(
					['You\'ve gone through the last door and are now in Penedo da Amizade ...\n\n![pic500](img/portaSaida.png)\n\nTo your left there\'s info on distances to some Points of Interest\n\n![pic500](img/placardProximoSaidaDistancias.png)\n          '])
			})
		]));
var author$project$OurStory$NarrativeDSFuncs$getTheStageInfo = F2(
	function (stageNr, languageId) {
		return A2(
			elm$core$Dict$get,
			_Utils_Tuple2(stageNr, languageId),
			author$project$OurStory$NarrativeDataStructures$theStagesDict);
	});
var author$project$OurStory$NarrativeDSFuncs$getStageName = F2(
	function (stageNr, languageId) {
		return A2(
			elm$core$Maybe$withDefault,
			'Stage ' + elm$core$String$fromInt(stageNr),
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.$7;
				},
				A2(author$project$OurStory$NarrativeDSFuncs$getTheStageInfo, stageNr, languageId)));
	});
var author$project$OurStory$NarrativeDSFuncs$getStageRecord = F2(
	function (stageNr, lgId) {
		var theStageDescription = A2(
			elm$core$Maybe$map,
			function ($) {
				return $.dp;
			},
			A2(author$project$OurStory$NarrativeDSFuncs$getTheStageInfo, stageNr, lgId));
		var getWithoutPreviousAnswered = (lgId === 'pt') ? _List_fromArray(
			[
				'Deves responder a todas as perguntas e opções da etapa ' + (elm$core$String$fromInt(stageNr - 1) + (' antes de entrar na etapa ' + elm$core$String$fromInt(stageNr)))
			]) : _List_fromArray(
			[
				'You have to answer all stage ' + (elm$core$String$fromInt(stageNr - 1) + (' questions and options ' + (' before being allowed in stage ' + elm$core$String$fromInt(stageNr))))
			]);
		var getEnteringFromHigherStage = (lgId === 'pt') ? 'Para terminar o percurso deves seguir na direcção oposta' : 'To finish the course you should move in the opposite direction';
		var mbStandardQuestionRecord = function () {
			if (!theStageDescription.$) {
				var stageDescription = theStageDescription.a;
				return elm$core$Maybe$Just(
					{
						aC: stageDescription,
						aF: A2(
							elm$core$List$map,
							function (x) {
								return getEnteringFromHigherStage + ('  \n' + x);
							},
							stageDescription),
						aN: stageDescription,
						aX: getWithoutPreviousAnswered
					});
			} else {
				return elm$core$Maybe$Nothing;
			}
		}();
		return mbStandardQuestionRecord;
	});
var author$project$OurStory$NarrativeDSFuncs$interactingWithStageN = F3(
	function (stageNr, lgId, fieldStr) {
		var theRec = A2(
			elm$core$Maybe$withDefault,
			{
				aC: _List_fromArray(
					['']),
				aF: _List_fromArray(
					['']),
				aN: _List_fromArray(
					['']),
				aX: _List_fromArray(
					[''])
			},
			A2(author$project$OurStory$NarrativeDSFuncs$getStageRecord, stageNr, lgId));
		var theListString = (fieldStr === 'withoutPreviousAnswered') ? theRec.aX : ((fieldStr === 'defaultStageDescription') ? theRec.aC : ((fieldStr === 'enteringFromHigherStage') ? theRec.aF : theRec.aN));
		return theListString;
	});
var author$project$OurStory$Manifest$getListOfLocations = F2(
	function (initLocations, nrLocations) {
		var mbAddCoordInfo = F2(
			function (stageNr, entity) {
				var _n1 = author$project$OurStory$Manifest$getStageCoordInfo(stageNr);
				if (_n1.$ === 1) {
					return entity;
				} else {
					var coordsRec = _n1.a;
					return A5(author$project$Components$addNeedsToBeInGpsZone, coordsRec.n, coordsRec.at, coordsRec.av, coordsRec.cQ, entity);
				}
			});
		var getDirection = F2(
			function (s1, s2) {
				var _n0 = _Utils_Tuple2(
					author$project$OurStory$Manifest$getStageCoordInfo(s1),
					author$project$OurStory$Manifest$getStageCoordInfo(s2));
				if ((!_n0.a.$) && (!_n0.b.$)) {
					var coordsRec1 = _n0.a.a;
					var coordsRec2 = _n0.b.a;
					return author$project$GpsUtils$bearingToDirection(
						A2(
							author$project$GpsUtils$calculateBearing,
							_Utils_Tuple2(coordsRec1.at, coordsRec1.av),
							_Utils_Tuple2(coordsRec2.at, coordsRec2.av)));
				} else {
					return (_Utils_cmp(s2, s1) > -1) ? 7 : 6;
				}
			});
		var getConnectingLocations = function (stageNr) {
			return (stageNr === 1) ? _List_fromArray(
				[
					_Utils_Tuple2(
					A2(getDirection, 1, 2),
					'stage2')
				]) : (_Utils_eq(stageNr, nrLocations) ? _List_fromArray(
				[
					_Utils_Tuple2(
					A2(getDirection, nrLocations, nrLocations - 1),
					author$project$OurStory$NarrativeDSFuncs$getStageId(nrLocations - 1))
				]) : _List_fromArray(
				[
					_Utils_Tuple2(
					A2(getDirection, stageNr, stageNr + 1),
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1)),
					_Utils_Tuple2(
					A2(getDirection, stageNr, stageNr - 1),
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr - 1))
				]));
		};
		var createEntity = function (nr) {
			return A2(
				mbAddCoordInfo,
				nr,
				A2(
					author$project$Components$addConnectingLocations,
					getConnectingLocations(nr),
					A4(
						author$project$Components$addLgDisplayInfo,
						'pt',
						A2(author$project$OurStory$NarrativeDSFuncs$getStageName, nr, 'pt'),
						A2(
							elm$core$String$join,
							' , ',
							A3(author$project$OurStory$NarrativeDSFuncs$interactingWithStageN, nr, 'pt', 'defaultStageDescription')),
						A3(
							author$project$Components$addDisplayInfo,
							A2(author$project$OurStory$NarrativeDSFuncs$getStageName, nr, 'en'),
							A2(
								elm$core$String$join,
								' , ',
								A3(author$project$OurStory$NarrativeDSFuncs$interactingWithStageN, nr, 'en', 'defaultStageDescription')),
							author$project$Components$entity(
								author$project$OurStory$NarrativeDSFuncs$getStageId(nr))))));
		};
		var moreLocations = A2(
			elm$core$List$map,
			createEntity,
			A2(elm$core$List$range, 1, nrLocations));
		return A2(elm$core$List$append, initLocations, moreLocations);
	});
var author$project$OurStory$Manifest$initialLocations = _List_fromArray(
	[
		A2(
		author$project$Components$addConnectingLocations,
		_List_fromArray(
			[
				_Utils_Tuple2(7, 'stage1')
			]),
		A4(
			author$project$Components$addLgDisplayInfo,
			'pt',
			'Era Uma Vez ...',
			'Era Uma Vez ...',
			A3(
				author$project$Components$addDisplayInfo,
				'Once Upon a Time',
				'Once Upon a Time',
				author$project$Components$entity('onceUponAtime'))))
	]);
var author$project$OurStory$Manifest$locations = A2(author$project$OurStory$Manifest$getListOfLocations, author$project$OurStory$Manifest$initialLocations, author$project$OurStory$NarrativeDSFuncs$getNumberOfDesiredStages);
var author$project$OurStory$Manifest$playerId = 'playerOne';
var author$project$OurStory$Narrative$endScreenInfo = {b_: 'Congratulations ! You reached the End ! ...', b$: 'You are now a hiking trail Master  :)', cb: '....\n                        ', bf: 'finalImage.png'};
var author$project$OurStory$Narrative$startScreenInfo = {bQ: 'An Interactive Story by Sintra Ubuntuer', bf: 'introImage.png', dm: ' a guided tour through Vila Sassetti ( Quinta da Amizade ) - Sintra  \n                     ', dx: 'investigator', dA: 'A Guided Tour Through Vila Sassetti - Sintra', dB: '', dG: ' \n\n__warning__ : You can play this on your computer ( before actually going to the spot  \n  \n  to gather the required info ) by going to settings and selecting \'not check gps position\'  \n  \n  If playing on a smartphone you should probably  choose \'buttons\' ( last \'settings\' option ) \n\n  smartphone gps accuracy is not allways very good ,  consider taking a GPSr device with you if you have one ... \n  '};
var author$project$OurStory$Narrative$startingNarrative = {bb: 'opening', bc: 'onceUponAtime', bd: 'Percurso Pedestre Vila Sassetti...', cw: true, cx: false, cL: elm$core$Maybe$Nothing, cR: elm$core$Maybe$Nothing, cS: elm$core$Maybe$Nothing, cV: 'Num  dia luminoso de Setembro encontras-te na\n            bela Vila de Sintra prestes a iniciar o percurso pedestre de Vila Sassetti\n            ( Quinta da Amizade )\n         ', dv: 'interacção sugerida : '};
var author$project$OurStory$Narrative$startingNarrativeEn = {bb: 'opening', bc: 'onceUponAtime', bd: 'Pedestrian Footpath...', cw: true, cx: false, cL: elm$core$Maybe$Nothing, cR: elm$core$Maybe$Nothing, cS: elm$core$Maybe$Nothing, cV: 'On a shiny September day you find yourself in the magnificent Vila de Sintra\n             about to start Vila Sassetti ( Quinta da Amizade ) pedestrian footpath ...\n       ', dv: 'suggested interaction : '};
var author$project$OurStory$Narrative$startingNarratives = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'pt',
			_List_fromArray(
				[author$project$OurStory$Narrative$startingNarrative])),
			_Utils_Tuple2(
			'en',
			_List_fromArray(
				[author$project$OurStory$Narrative$startingNarrativeEn]))
		]));
var author$project$OurStory$Rules$correctAnswerNotRequiredToMove = _List_fromArray(
	[1, 2, 3, 4, 5, 6, 7, 8, 9]);
var author$project$Engine$aDictStringListString = author$project$Types$ADictStringListString;
var author$project$Engine$astring = author$project$Types$Astring;
var author$project$Types$CheckAndActIfChosenOptionIs = F3(
	function (a, b, c) {
		return {$: 33, a: a, b: b, c: c};
	});
var author$project$Engine$createCmdCheckAndActIfChosenOptionIs = F3(
	function (lcOptionData, itemid, extrainfo) {
		var playerChoice = A2(elm$core$Maybe$withDefault, '', extrainfo.O);
		return A3(author$project$Types$CheckAndActIfChosenOptionIs, playerChoice, lcOptionData, itemid);
	});
var author$project$Types$CurriedCmd = function (a) {
	return {$: 0, a: a};
};
var author$project$Engine$checkAndAct_IfChosenOptionIs = F2(
	function (lcOptionData, itemid) {
		var oneArgToCmdCheckAndActIfChosenOptionIs = A2(author$project$Engine$createCmdCheckAndActIfChosenOptionIs, lcOptionData, itemid);
		return author$project$Types$CurriedCmd(oneArgToCmdCheckAndActIfChosenOptionIs);
	});
var author$project$Types$CheckOptionData = F5(
	function (choiceMatches, choiceFeedbackText, lnewAttrs, lotherInterAttrs, lnewCWcmds) {
		return {bW: choiceFeedbackText, bX: choiceMatches, aJ: lnewAttrs, cD: lnewCWcmds, cG: lotherInterAttrs};
	});
var author$project$Engine$checkOptionData = author$project$Types$CheckOptionData;
var author$project$Types$ChoiceHasAlreadyBeenMade = function (a) {
	return {$: 22, a: a};
};
var author$project$Engine$choiceHasAlreadyBeenMade = author$project$Types$ChoiceHasAlreadyBeenMade;
var author$project$Types$ItemIsCorrectlyAnswered = function (a) {
	return {$: 11, a: a};
};
var author$project$Engine$itemIsCorrectlyAnswered = author$project$Types$ItemIsCorrectlyAnswered;
var author$project$Types$ItemIsOffScreen = function (a) {
	return {$: 8, a: a};
};
var author$project$Engine$itemIsOffScreen = author$project$Types$ItemIsOffScreen;
var author$project$Types$MatchAnyNonEmptyString = {$: 1};
var author$project$Engine$matchAnyNonEmptyString = author$project$Types$MatchAnyNonEmptyString;
var author$project$Types$MatchStringValue = function (a) {
	return {$: 0, a: a};
};
var author$project$Engine$matchStringValue = author$project$Types$MatchStringValue;
var author$project$OurStory$Narrative$additionalStageInfoAfterAllQuestionsAnsweredDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			'pt',
			_List_fromArray(
				['Todas as questões foram respondidas. Dirige-te para o ultimo nivel ... '])),
			_Utils_Tuple2(
			'en',
			_List_fromArray(
				['All questions have been answered. Now move to the last stage ... ']))
		]));
var author$project$OurStory$Narrative$goodNewsMessageAfterAllQuestionsAnsweredEn = _List_fromArray(
	['\nAll questions have been answered . Look for an old paper in last stage ...\n       ']);
var author$project$OurStory$Narrative$goodNewsMessageAfterAllQuestionsAnsweredPt = _List_fromArray(
	['\nRespondeste a todas as perguntas ... Procura o papiro no ultimo nivel\n       ']);
var author$project$OurStory$Narrative$goodNewsMessageAfterAllQuestionsAnsweredDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', author$project$OurStory$Narrative$goodNewsMessageAfterAllQuestionsAnsweredPt),
			_Utils_Tuple2('en', author$project$OurStory$Narrative$goodNewsMessageAfterAllQuestionsAnsweredEn)
		]));
var author$project$OurStory$NarrativeDSFuncs$getFilteredStageMultiOptionIds = elm$core$List$concat(
	A2(
		elm$core$List$map,
		author$project$OurStory$NarrativeDSFuncs$getOptionIdsByStageNr,
		A2(
			elm$core$List$filter,
			function (x) {
				return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
			},
			author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)));
var author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionIds = elm$core$List$concat(
	A2(
		elm$core$List$map,
		author$project$OurStory$NarrativeDSFuncs$getQuestionIdsByStageNr,
		A2(
			elm$core$List$filter,
			function (x) {
				return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
			},
			author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)));
var author$project$OurStory$NarrativeDSFuncs$getLastStageNr = author$project$OurStory$NarrativeDataStructures$numberOfDesiredStages;
var elm$core$Set$Set_elm_builtin = elm$core$Basics$identity;
var elm$core$Set$empty = elm$core$Dict$empty;
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0;
		return A3(elm$core$Dict$insert, key, 0, dict);
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var author$project$OurStory$NarrativeDSFuncs$getMultiOptionAvailableChoicesValList = function (nr) {
	var optionDict = author$project$OurStory$NarrativeDataStructures$theMultiOptionsDict;
	var getLgOptions = F3(
		function (theNr, lgId, optDict) {
			return function (x) {
				if (x.$ === 1) {
					return _List_Nil;
				} else {
					var lopt = x.a;
					return A2(
						elm$core$List$map,
						function (_n1) {
							var k = _n1.a;
							var v = _n1.b;
							var stext = _n1.c;
							return k;
						},
						lopt);
				}
			}(
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.am;
					},
					A2(
						elm$core$Dict$get,
						_Utils_Tuple2(theNr, lgId),
						optDict)));
		});
	var availableChoicesValList = elm$core$Set$toList(
		elm$core$Set$fromList(
			elm$core$List$concat(
				A2(
					elm$core$List$map,
					function (lgId) {
						return A3(getLgOptions, nr, lgId, optionDict);
					},
					author$project$OurStory$Narrative$desiredLanguages))));
	return availableChoicesValList;
};
var author$project$OurStory$NarrativeDSFuncs$getMultiOptionTextIfChosenDict = F2(
	function (optionNr, optKey) {
		var optionDict = author$project$OurStory$NarrativeDataStructures$theMultiOptionsDict;
		var getLgText = F3(
			function (theNr, lgId, optDict) {
				return function (x) {
					if (x.$ === 1) {
						return author$project$Types$NoFeedbackText;
					} else {
						var lopt = x.a;
						return A2(
							elm$core$Maybe$withDefault,
							author$project$Types$NoFeedbackText,
							elm$core$List$head(
								A2(
									elm$core$List$map,
									function (_n2) {
										var k = _n2.a;
										var v = _n2.b;
										var cfeedback = _n2.c;
										return cfeedback;
									},
									A2(
										elm$core$List$filter,
										function (_n1) {
											var k = _n1.a;
											var v = _n1.b;
											var cfeedback = _n1.c;
											return _Utils_eq(k, optKey) || (k === '{__ANY__}');
										},
										lopt))));
					}
				}(
					A2(
						elm$core$Maybe$map,
						function ($) {
							return $.am;
						},
						A2(
							elm$core$Dict$get,
							_Utils_Tuple2(theNr, lgId),
							optDict)));
			});
		var textOrFnDict = A3(
			elm$core$List$foldl,
			F2(
				function (lgId, d) {
					return A3(
						elm$core$Dict$insert,
						lgId,
						A3(getLgText, optionNr, lgId, optionDict),
						d);
				}),
			elm$core$Dict$empty,
			author$project$OurStory$Narrative$desiredLanguages);
		return textOrFnDict;
	});
var author$project$OurStory$NarrativeDSFuncs$interactingWithMultiOption = F2(
	function (nr, lgId) {
		return A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionBody, nr, lgId);
	});
var author$project$OurStory$NarrativeDSFuncs$interactingWithMultiOptionDict = function (nr) {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'pt',
				A2(author$project$OurStory$NarrativeDSFuncs$interactingWithMultiOption, nr, 'pt')),
				_Utils_Tuple2(
				'en',
				A2(author$project$OurStory$NarrativeDSFuncs$interactingWithMultiOption, nr, 'en'))
			]));
};
var author$project$Components$LanguageNarratives = function (a) {
	return {$: 4, a: a};
};
var wernerdegroot$listzipper$List$Zipper$Zipper = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var wernerdegroot$listzipper$List$Zipper$fromList = function (xs) {
	if (!xs.b) {
		return elm$core$Maybe$Nothing;
	} else {
		var y = xs.a;
		var ys = xs.b;
		return elm$core$Maybe$Just(
			A3(wernerdegroot$listzipper$List$Zipper$Zipper, _List_Nil, y, ys));
	}
};
var wernerdegroot$listzipper$List$Zipper$singleton = function (x) {
	return A3(wernerdegroot$listzipper$List$Zipper$Zipper, _List_Nil, x, _List_Nil);
};
var wernerdegroot$listzipper$List$Zipper$withDefault = function (x) {
	return elm$core$Maybe$withDefault(
		wernerdegroot$listzipper$List$Zipper$singleton(x));
};
var author$project$Components$zipTheStringList = function (narrative) {
	return A2(
		wernerdegroot$listzipper$List$Zipper$withDefault,
		'',
		wernerdegroot$listzipper$List$Zipper$fromList(narrative));
};
var author$project$Components$makeZipNarrativesDict = function (narrativeDict) {
	return A2(
		elm$core$Dict$map,
		F2(
			function (comparable, lstrs) {
				return author$project$Components$zipTheStringList(lstrs);
			}),
		narrativeDict);
};
var author$project$Components$addLanguageNarratives = function (narrativeDict) {
	return A2(
		author$project$Components$addComponent,
		'languageNarratives',
		author$project$Components$LanguageNarratives(
			author$project$Components$makeZipNarrativesDict(narrativeDict)));
};
var author$project$Components$RuleData = function (a) {
	return {$: 6, a: a};
};
var author$project$Components$addRuleData = function (ruleData) {
	return A2(
		author$project$Components$addComponent,
		'ruleData',
		author$project$Components$RuleData(ruleData));
};
var author$project$OurStory$Rules$ruleWithQuasiChange = F3(
	function (id, ruleData, narratives) {
		return A2(
			author$project$Components$addLanguageNarratives,
			narratives,
			A2(
				author$project$Components$addRuleData,
				ruleData,
				author$project$Components$entity(id)));
	});
var author$project$OurStory$Rules$interactionWithOptionNrAllQuestionsAndOptionsAnsweredButThisOne = function (_n0) {
	var optionNr = _n0.a;
	var stageNr = _n0.b;
	var optionId = author$project$OurStory$NarrativeDSFuncs$getOptionId(optionNr);
	var matchStringValOrAny = function (xstr) {
		return (xstr === '{__ANY__}') ? author$project$Engine$matchAnyNonEmptyString : author$project$Engine$matchStringValue(xstr);
	};
	var lsuggestedInteractionIfLastStage = _Utils_eq(stageNr, author$project$OurStory$NarrativeDSFuncs$getLastStageNr) ? _List_fromArray(
		[
			_Utils_Tuple2(
			'suggestedInteraction',
			author$project$Engine$astring('finalPaper'))
		]) : _List_Nil;
	var lpossibleChoices = author$project$OurStory$NarrativeDSFuncs$getMultiOptionAvailableChoicesValList(optionNr);
	var additionalTextForStages = A2(
		elm$core$List$map,
		function (x) {
			return _Utils_Tuple3(
				x,
				'additionalTextDict',
				author$project$Engine$aDictStringListString(author$project$OurStory$Narrative$additionalStageInfoAfterAllQuestionsAnsweredDict));
		},
		A2(
			elm$core$List$map,
			author$project$OurStory$NarrativeDSFuncs$getStageId,
			A2(elm$core$List$range, 1, author$project$OurStory$NarrativeDSFuncs$getNumberOfDesiredStages - 1)));
	var allCheckAndActs = A2(
		author$project$Engine$checkAndAct_IfChosenOptionIs,
		A2(
			elm$core$List$map,
			function (x) {
				return A5(
					author$project$Engine$checkOptionData,
					matchStringValOrAny(x),
					A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionTextIfChosenDict, optionNr, x),
					_Utils_ap(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'warningMessage',
								author$project$Engine$aDictStringListString(author$project$OurStory$Narrative$goodNewsMessageAfterAllQuestionsAnsweredDict))
							]),
						lsuggestedInteractionIfLastStage),
					additionalTextForStages,
					_List_Nil);
			},
			lpossibleChoices),
		optionId);
	return A3(
		author$project$OurStory$Rules$ruleWithQuasiChange,
		'view option' + (elm$core$String$fromInt(optionNr) + ' all options chosen but this one '),
		{
			bT: _List_Nil,
			bZ: A2(
				elm$core$List$append,
				A2(elm$core$List$map, author$project$Engine$itemIsCorrectlyAnswered, author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionIds),
				A2(
					elm$core$List$append,
					_List_fromArray(
						[
							author$project$Engine$itemIsOffScreen('finalPaper')
						]),
					A2(
						elm$core$List$map,
						author$project$Engine$choiceHasAlreadyBeenMade,
						A2(
							elm$core$List$filter,
							function (x) {
								return !_Utils_eq(x, optionId);
							},
							author$project$OurStory$NarrativeDSFuncs$getFilteredStageMultiOptionIds)))),
			cu: author$project$Engine$with(optionId),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: _List_fromArray(
				[allCheckAndActs])
		},
		author$project$OurStory$NarrativeDSFuncs$interactingWithMultiOptionDict(optionNr));
};
var author$project$Engine$answerSpacesDontMatter = 1;
var author$project$Engine$caseInsensitiveAnswer = 1;
var author$project$Engine$checkAnswerData = author$project$Types$CheckAnswerData;
var author$project$Engine$createCmdCheckIfAnswerCorrect = F4(
	function (questionAns, cAnswerData, interactableId, extraInfo) {
		if ((!_Utils_eq(extraInfo.O, elm$core$Maybe$Nothing)) && (!_Utils_eq(
			extraInfo.O,
			elm$core$Maybe$Just('')))) {
			var playerAnswer = A2(elm$core$Maybe$withDefault, '', extraInfo.O);
			return A4(author$project$Types$CheckIfAnswerCorrect, questionAns, playerAnswer, cAnswerData, interactableId);
		} else {
			return author$project$Types$NoChange;
		}
	});
var author$project$Engine$check_IfAnswerCorrect = F3(
	function (questAnswers, cAnswerData, interactableId) {
		var oneArgToCmdCheckIfAnswerCorrect = A3(author$project$Engine$createCmdCheckIfAnswerCorrect, questAnswers, cAnswerData, interactableId);
		return author$project$Types$CurriedCmd(oneArgToCmdCheckIfAnswerCorrect);
	});
var author$project$Engine$headerAnswerAndCorrectIncorrect = 4;
var author$project$Engine$listOfAnswersAndFunctions = author$project$Types$ListOfAnswersAndFunctions;
var author$project$OurStory$NarrativeDSFuncs$getLgTextHelper = function (mbftext) {
	if (mbftext.$ === 1) {
		return author$project$Types$NoFeedbackText;
	} else {
		var s = mbftext.a;
		return s;
	}
};
var author$project$OurStory$NarrativeDSFuncs$additionalTextIfAnswerCorrectDict = function (questionNr) {
	var getLgText = F2(
		function (theNr, lgId) {
			return author$project$OurStory$NarrativeDSFuncs$getLgTextHelper(
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.bB;
					},
					A2(
						elm$core$Dict$get,
						_Utils_Tuple2(theNr, lgId),
						author$project$OurStory$NarrativeDataStructures$theQuestionsDict)));
		});
	var textOrFnDict = A3(
		elm$core$List$foldl,
		F2(
			function (lgId, d) {
				return A3(
					elm$core$Dict$insert,
					lgId,
					A2(getLgText, questionNr, lgId),
					d);
			}),
		elm$core$Dict$empty,
		author$project$OurStory$Narrative$desiredLanguages);
	return textOrFnDict;
};
var author$project$OurStory$NarrativeDSFuncs$additionalTextIfAnswerIncorrectDict = function (questionNr) {
	var getLgText = F2(
		function (theNr, lgId) {
			return author$project$OurStory$NarrativeDSFuncs$getLgTextHelper(
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.bC;
					},
					A2(
						elm$core$Dict$get,
						_Utils_Tuple2(theNr, lgId),
						author$project$OurStory$NarrativeDataStructures$theQuestionsDict)));
		});
	var textOrFnDict = A3(
		elm$core$List$foldl,
		F2(
			function (lgId, d) {
				return A3(
					elm$core$Dict$insert,
					lgId,
					A2(getLgText, questionNr, lgId),
					d);
			}),
		elm$core$Dict$empty,
		author$project$OurStory$Narrative$desiredLanguages);
	return textOrFnDict;
};
var author$project$OurStory$NarrativeDSFuncs$getQuestionAnswers = function (questionNr) {
	var questionsDict = author$project$OurStory$NarrativeDataStructures$theQuestionsDict;
	var getLgAnswers = F2(
		function (theQuestionNr, lgId) {
			return function (x) {
				if (x.$ === 1) {
					return _List_Nil;
				} else {
					var lans = x.a;
					return lans;
				}
			}(
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.c8;
					},
					A2(
						elm$core$Dict$get,
						_Utils_Tuple2(theQuestionNr, lgId),
						questionsDict)));
		});
	var validAnswers = elm$core$Set$toList(
		elm$core$Set$fromList(
			elm$core$List$concat(
				A2(
					elm$core$List$map,
					function (lgId) {
						return A2(getLgAnswers, questionNr, lgId);
					},
					author$project$OurStory$Narrative$desiredLanguages))));
	return validAnswers;
};
var author$project$OurStory$NarrativeDataStructures$questionsMaxNrTries = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			101,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(201, elm$core$Maybe$Nothing),
			_Utils_Tuple2(
			301,
			elm$core$Maybe$Just(3)),
			_Utils_Tuple2(
			401,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			402,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			501,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			601,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			701,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			801,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			901,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			902,
			elm$core$Maybe$Just(5)),
			_Utils_Tuple2(
			1001,
			elm$core$Maybe$Just(5))
		]));
var author$project$OurStory$NarrativeDSFuncs$getQuestionsMaxNrTries = function (questionNr) {
	var dictMaxTries = author$project$OurStory$NarrativeDataStructures$questionsMaxNrTries;
	return A2(
		elm$core$Maybe$withDefault,
		elm$core$Maybe$Nothing,
		A2(elm$core$Dict$get, questionNr, dictMaxTries));
};
var author$project$OurStory$NarrativeDSFuncs$interactingWithQuestion = F2(
	function (questionNr, lgId) {
		return A2(author$project$OurStory$NarrativeDSFuncs$getQuestionBody, questionNr, lgId);
	});
var author$project$OurStory$NarrativeDSFuncs$interactingWithQuestionDict = function (nr) {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'pt',
				A2(author$project$OurStory$NarrativeDSFuncs$interactingWithQuestion, nr, 'pt')),
				_Utils_Tuple2(
				'en',
				A2(author$project$OurStory$NarrativeDSFuncs$interactingWithQuestion, nr, 'en'))
			]));
};
var author$project$OurStory$Rules$interactionWithQuestionNrAllQuestionsAndOptionsAnsweredButThisOne = function (_n0) {
	var questionNr = _n0.a;
	var stageNr = _n0.b;
	var lsuggestedInteractionIfLastStage = _Utils_eq(stageNr, author$project$OurStory$NarrativeDSFuncs$getLastStageNr) ? _List_fromArray(
		[
			_Utils_Tuple2(
			'suggestedInteraction',
			author$project$Engine$astring('finalPaper'))
		]) : _List_Nil;
	var correctAnswers = function (ls) {
		return A2(author$project$Engine$listOfAnswersAndFunctions, ls, _List_Nil);
	}(
		author$project$OurStory$NarrativeDSFuncs$getQuestionAnswers(questionNr));
	var additionalTextForStages = A2(
		elm$core$List$map,
		function (x) {
			return _Utils_Tuple3(
				x,
				'additionalTextDict',
				author$project$Engine$aDictStringListString(author$project$OurStory$Narrative$additionalStageInfoAfterAllQuestionsAnsweredDict));
		},
		A2(
			elm$core$List$map,
			author$project$OurStory$NarrativeDSFuncs$getStageId,
			A2(elm$core$List$range, 1, author$project$OurStory$NarrativeDSFuncs$getNumberOfDesiredStages - 1)));
	return A3(
		author$project$OurStory$Rules$ruleWithQuasiChange,
		'view question' + (elm$core$String$fromInt(questionNr) + ' all questions answered but this one '),
		{
			bT: _List_Nil,
			bZ: A2(
				elm$core$List$append,
				A2(elm$core$List$map, author$project$Engine$choiceHasAlreadyBeenMade, author$project$OurStory$NarrativeDSFuncs$getFilteredStageMultiOptionIds),
				A2(
					elm$core$List$append,
					_List_fromArray(
						[
							author$project$Engine$itemIsOffScreen('finalPaper')
						]),
					A2(
						elm$core$List$map,
						author$project$Engine$itemIsCorrectlyAnswered,
						A2(
							elm$core$List$filter,
							function (x) {
								return !_Utils_eq(
									x,
									author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr));
							},
							author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionIds)))),
			cu: author$project$Engine$with(
				author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr)),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: _List_fromArray(
				[
					A3(
					author$project$Engine$check_IfAnswerCorrect,
					correctAnswers,
					A8(
						author$project$Engine$checkAnswerData,
						author$project$OurStory$NarrativeDSFuncs$getQuestionsMaxNrTries(questionNr),
						author$project$Engine$caseInsensitiveAnswer,
						author$project$Engine$answerSpacesDontMatter,
						author$project$Engine$headerAnswerAndCorrectIncorrect,
						author$project$OurStory$NarrativeDSFuncs$additionalTextIfAnswerCorrectDict(questionNr),
						author$project$OurStory$NarrativeDSFuncs$additionalTextIfAnswerIncorrectDict(questionNr),
						_Utils_ap(
							_List_fromArray(
								[
									_Utils_Tuple2(
									'warningMessage',
									author$project$Engine$aDictStringListString(author$project$OurStory$Narrative$goodNewsMessageAfterAllQuestionsAnsweredDict))
								]),
							lsuggestedInteractionIfLastStage),
						additionalTextForStages),
					author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr))
				])
		},
		author$project$OurStory$NarrativeDSFuncs$interactingWithQuestionDict(questionNr));
};
var author$project$Types$AttrValueIsEqualTo = F3(
	function (a, b, c) {
		return {$: 19, a: a, b: b, c: c};
	});
var author$project$Engine$attrValueIsEqualTo = author$project$Types$AttrValueIsEqualTo;
var author$project$Types$EndStory = F2(
	function (a, b) {
		return {$: 32, a: a, b: b};
	});
var author$project$Types$FreezingEnd = 0;
var author$project$Types$NotFreezingEnd = 1;
var author$project$Engine$endStory = F2(
	function (endingtypeStr, ending) {
		return (endingtypeStr === 'notFreezingEnd') ? A2(author$project$Types$EndStory, 1, ending) : A2(author$project$Types$EndStory, 0, ending);
	});
var author$project$Types$WithAnyLocationAnyCharacterAfterGameEnded = {$: 4};
var author$project$Engine$withAnyLocationAnyCharacterAfterGameEnded = author$project$Types$WithAnyLocationAnyCharacterAfterGameEnded;
var author$project$OurStory$Narrative$gameHasEnded = _List_fromArray(
	['\nEste jogo acabou ! Podes consultar todos os items no teu inventário ,\nmas o jogo chegou ao fim ! Diverte-te !\n      ']);
var author$project$OurStory$Narrative$gameHasEndedEn = _List_fromArray(
	['\nGame has Ended ! You can take a look at your inventory items ( but game has ended ) ! Have Fun !\n      ']);
var author$project$OurStory$Narrative$gameHasEndedDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', author$project$OurStory$Narrative$gameHasEnded),
			_Utils_Tuple2('en', author$project$OurStory$Narrative$gameHasEndedEn)
		]));
var author$project$Types$Rule = F5(
	function (interaction, conditions, changes, quasiChanges, quasiChangeWithBkend) {
		return {bT: changes, bZ: conditions, cu: interaction, c6: quasiChangeWithBkend, c7: quasiChanges};
	});
var author$project$Engine$completeTheRule = function (ruleData) {
	return A5(author$project$Types$Rule, ruleData.cu, ruleData.bZ, ruleData.bT, _List_Nil, author$project$Types$NoQuasiChangeWithBackend);
};
var author$project$OurStory$Rules$rule = F3(
	function (id, ruleData, narratives) {
		return A2(
			author$project$Components$addLanguageNarratives,
			narratives,
			A2(
				author$project$Components$addRuleData,
				author$project$Engine$completeTheRule(ruleData),
				author$project$Components$entity(id)));
	});
var author$project$OurStory$Rules$lRuleGameHasEnded = _List_fromArray(
	[
		A3(
		author$project$OurStory$Rules$rule,
		'game has ended',
		{
			bT: _List_fromArray(
				[
					A2(author$project$Engine$endStory, 'notFreezingEnd', 'The End')
				]),
			bZ: _List_fromArray(
				[
					A3(
					author$project$Engine$attrValueIsEqualTo,
					author$project$Engine$abool(true),
					'gameHasEnded',
					'gameStateItem')
				]),
			cu: author$project$Engine$withAnyLocationAnyCharacterAfterGameEnded
		},
		author$project$OurStory$Narrative$gameHasEndedDict)
	]);
var author$project$Engine$setAttributeValue = F3(
	function (val, attrId, interactableId) {
		return A3(author$project$Types$CreateAttributeIfNotExistsAndOrSetValue, val, attrId, interactableId);
	});
var author$project$GeoCipher$GeoCipher$BadGeoCipherInputs = function (a) {
	return {$: 0, a: a};
};
var author$project$GeoCipher$GeoCipher$Decrypt = 1;
var author$project$GeoCipher$GeoCipher$GeoCipherOutputString = function (a) {
	return {$: 1, a: a};
};
var author$project$GeoCipher$GeoCipher$initialListAlphabet = elm$core$String$toList('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789');
var author$project$GeoCipher$GeoCipher$initialDictAlphabet = function () {
	var dictAlphabet = elm$core$Dict$fromList(
		A2(
			elm$core$List$indexedMap,
			F2(
				function (n, c) {
					return _Utils_Tuple2(n, c);
				}),
			author$project$GeoCipher$GeoCipher$initialListAlphabet));
	return dictAlphabet;
}();
var author$project$GeoCipher$GeoCipher$sanitizeShift = F2(
	function (shift, alphabetNrChars) {
		sanitizeShift:
		while (true) {
			if (shift < 0) {
				var multNr = function (x) {
					return elm$core$Basics$abs(x) + 1;
				}((shift / alphabetNrChars) | 0);
				var newShift = shift + (multNr * alphabetNrChars);
				var $temp$shift = newShift,
					$temp$alphabetNrChars = alphabetNrChars;
				shift = $temp$shift;
				alphabetNrChars = $temp$alphabetNrChars;
				continue sanitizeShift;
			} else {
				return shift % alphabetNrChars;
			}
		}
	});
var elm$core$Char$toUpper = _Char_toUpper;
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === -2) {
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
var elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === -2) {
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
var author$project$GeoCipher$GeoCipher$augmentedCaesarDecryptChar = F2(
	function (shift, c) {
		var _char = elm$core$Char$toUpper(c);
		var alphabetNrChars = elm$core$Dict$size(author$project$GeoCipher$GeoCipher$initialDictAlphabet);
		var shift_ = A2(author$project$GeoCipher$GeoCipher$sanitizeShift, shift, alphabetNrChars);
		var mbNewChar = function (mbnr) {
			if (mbnr.$ === 1) {
				return elm$core$Maybe$Just(_char);
			} else {
				var nr = mbnr.a;
				return A2(elm$core$Dict$get, nr, author$project$GeoCipher$GeoCipher$initialDictAlphabet);
			}
		}(
			A2(
				elm$core$Maybe$map,
				function (nx) {
					return A2(author$project$GeoCipher$GeoCipher$sanitizeShift, nx, alphabetNrChars);
				},
				A2(
					elm$core$Maybe$map,
					function (x) {
						return x - shift_;
					},
					elm$core$List$head(
						elm$core$Dict$keys(
							A2(
								elm$core$Dict$filter,
								F2(
									function (k, v) {
										return _Utils_eq(v, _char);
									}),
								author$project$GeoCipher$GeoCipher$initialDictAlphabet))))));
		return A2(elm$core$Maybe$withDefault, _char, mbNewChar);
	});
var author$project$GeoCipher$GeoCipher$augmentedKeyedCaesarDecryptChar = F3(
	function (shift, dictAlphabet, _char) {
		var decChar = A2(elm$core$Dict$get, _char, dictAlphabet);
		var decChar_ = function () {
			if (decChar.$ === 1) {
				return elm$core$Char$toUpper(_char);
			} else {
				var c = decChar.a;
				return elm$core$Char$toUpper(c);
			}
		}();
		var decShiftedChar = A2(author$project$GeoCipher$GeoCipher$augmentedCaesarDecryptChar, shift, decChar_);
		return decShiftedChar;
	});
var author$project$GeoCipher$GeoCipher$keepNotEqualTo = F2(
	function (x, y) {
		return (!_Utils_eq(y, x)) ? elm$core$Maybe$Just(y) : elm$core$Maybe$Nothing;
	});
var author$project$GeoCipher$GeoCipher$elimDupElementsFromList = function (list) {
	if (!list.b) {
		return _List_Nil;
	} else {
		var head = list.a;
		var rest = list.b;
		return A2(
			elm$core$List$cons,
			head,
			author$project$GeoCipher$GeoCipher$elimDupElementsFromList(
				A2(
					elm$core$List$filterMap,
					author$project$GeoCipher$GeoCipher$keepNotEqualTo(head),
					rest)));
	}
};
var author$project$GeoCipher$GeoCipher$eliminateSpaces = function (c) {
	return !(c === ' ');
};
var author$project$GeoCipher$GeoCipher$isAdmissibleCharToConvert = function (ch) {
	return A2(
		elm$core$List$member,
		elm$core$Char$toUpper(ch),
		author$project$GeoCipher$GeoCipher$initialListAlphabet);
};
var elm$core$String$filter = _String_filter;
var elm$core$String$toUpper = _String_toUpper;
var author$project$GeoCipher$GeoCipher$buildAlphabetDict = F2(
	function (strAlphabetKey, mode) {
		var strKey_ = elm$core$String$toUpper(
			A2(
				elm$core$String$filter,
				author$project$GeoCipher$GeoCipher$isAdmissibleCharToConvert,
				A2(elm$core$String$filter, author$project$GeoCipher$GeoCipher$eliminateSpaces, strAlphabetKey)));
		var lAlphabetaux = author$project$GeoCipher$GeoCipher$elimDupElementsFromList(
			function (lc) {
				return _Utils_ap(lc, author$project$GeoCipher$GeoCipher$initialListAlphabet);
			}(
				elm$core$String$toList(strKey_)));
		var lAlphabet2 = lAlphabetaux;
		var lAlphabet1 = author$project$GeoCipher$GeoCipher$initialListAlphabet;
		var ltups = function () {
			if (!mode) {
				return A3(
					elm$core$List$map2,
					F2(
						function (x, y) {
							return _Utils_Tuple2(x, y);
						}),
					lAlphabet1,
					lAlphabet2);
			} else {
				return A3(
					elm$core$List$map2,
					F2(
						function (x, y) {
							return _Utils_Tuple2(x, y);
						}),
					lAlphabet2,
					lAlphabet1);
			}
		}();
		return elm$core$Dict$fromList(ltups);
	});
var author$project$GeoCipher$GeoCipher$checkIfValidAlphabetKey = function (alphabetKey) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (b, bacc) {
				return b && bacc;
			}),
		true,
		A2(
			elm$core$List$map,
			author$project$GeoCipher$GeoCipher$isAdmissibleCharToConvert,
			elm$core$String$toList(alphabetKey)));
};
var elm$core$String$map = _String_map;
var author$project$GeoCipher$GeoCipher$augmentedKeyedCaesarDecrypt = F3(
	function (shift, alphabetKey, strToDec) {
		if (author$project$GeoCipher$GeoCipher$checkIfValidAlphabetKey(alphabetKey)) {
			var dictAlphabet = A2(author$project$GeoCipher$GeoCipher$buildAlphabetDict, alphabetKey, 1);
			var outStr = A2(
				elm$core$String$map,
				A2(author$project$GeoCipher$GeoCipher$augmentedKeyedCaesarDecryptChar, shift, dictAlphabet),
				strToDec);
			return author$project$GeoCipher$GeoCipher$GeoCipherOutputString(outStr);
		} else {
			return author$project$GeoCipher$GeoCipher$BadGeoCipherInputs('Bad Augmented Caesar Alphabet Key');
		}
	});
var author$project$OurStory$Narrative$hintEn = '( XP XFB MBCX PC XFB XUVGM ... KMGNL 6 NBXBU ... ZOYBU XFB UPKJW ) ';
var author$project$OurStory$Narrative$hintPT = '( YP MVYP BWRZBUYP YP XUGMFP ... WPLB 6 NBXUP ... YBLVG2P YVW QBYUVW )';
var author$project$OurStory$Narrative$encriptedMsg = function (lgId) {
	var encCoords = 'KPPUYGOVXBW : O8T 9E.98E 155I 78.SS6 ';
	return (lgId === 'pt') ? _Utils_ap(encCoords, author$project$OurStory$Narrative$hintPT) : _Utils_ap(encCoords, author$project$OurStory$Narrative$hintEn);
};
var author$project$OurStory$Narrative$finalMessage = function (lgId) {
	var _n0 = A3(
		author$project$GeoCipher$GeoCipher$augmentedKeyedCaesarDecrypt,
		5,
		'sassettiVillaKey',
		author$project$OurStory$Narrative$encriptedMsg(lgId));
	if (_n0.$ === 1) {
		var fstr = _n0.a;
		return fstr;
	} else {
		var estr = _n0.a;
		return 'Sorry , couldn\'t translate message';
	}
};
var author$project$OurStory$Narrative$interactingWithFinalPaperEn = _List_fromArray(
	[
		'\nCongratulations ! You overcome all challenges.  \n\nGame has ended !  \n\nAdditionally , you can search for the game logbook and leave a message and your name/username \n\n( it\'s not a geocaching logbook although it might look similar )  \n\n...  ' + author$project$OurStory$Narrative$finalMessage('en')
	]);
var author$project$OurStory$Narrative$interactingWithFinalPaperPt = _List_fromArray(
	[
		'\nParabéns ! Superaste todos os desafios propostos.  \n\n\nO jogo chegou ao fim !  \n\nAdicionalmente , podes procurar o logbook deste jogo e deixar uma mensagem e o teu nome/username  \n\n(nota que não se trata de um logbook de geocaching embora seja semelhante )  \n\n...  ' + author$project$OurStory$Narrative$finalMessage('pt')
	]);
var author$project$OurStory$Narrative$interactingWithFinalPaperDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', author$project$OurStory$Narrative$interactingWithFinalPaperPt),
			_Utils_Tuple2('en', author$project$OurStory$Narrative$interactingWithFinalPaperEn)
		]));
var author$project$OurStory$Rules$lRuleInteractingWithFinalPaper = _List_fromArray(
	[
		A3(
		author$project$OurStory$Rules$rule,
		'interaction With Final Paper',
		{
			bT: _List_fromArray(
				[
					A3(
					author$project$Engine$setAttributeValue,
					author$project$Engine$abool(true),
					'gameHasEnded',
					'gameStateItem'),
					A2(author$project$Engine$moveItemToCharacterInventory, 'playerOne', 'finalPaper')
				]),
			bZ: A2(elm$core$List$map, author$project$Engine$itemIsCorrectlyAnswered, author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionIds),
			cu: author$project$Engine$with('finalPaper')
		},
		author$project$OurStory$Narrative$interactingWithFinalPaperDict)
	]);
var author$project$OurStory$Narrative$creditsInformation = _List_fromArray(
	['\n### Location Info : ###\nhttp://www.parquesdesintra.pt/\n\n\n### Elm Language and package ecosystem ###\n\nEvan Czaplicki ,  Richard Feldman , Werner de Groot , Dave Keen ...\n\n### Elm Narrative Engine : ###\n\nJeff Schomay\n\n( the persons above in no way endorse this particular extension or narrative)\n\n### extensions to the Narrative Engine : ###\n\nNuno Torres\n\n### Game-Narrative ###\n\nNuno Torres\n\n    ']);
var author$project$OurStory$Narrative$theCreditsInformationDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', author$project$OurStory$Narrative$creditsInformation),
			_Utils_Tuple2('en', author$project$OurStory$Narrative$creditsInformation)
		]));
var author$project$OurStory$Rules$lRulesInteractingWithCreditsInfo = _List_fromArray(
	[
		A3(
		author$project$OurStory$Rules$rule,
		'view creditsInfo',
		{
			bT: _List_Nil,
			bZ: _List_Nil,
			cu: author$project$Engine$with('creditsInfo')
		},
		author$project$OurStory$Narrative$theCreditsInformationDict)
	]);
var author$project$Types$CharacterIsInLocation = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Engine$characterIsInLocation = author$project$Types$CharacterIsInLocation;
var author$project$Types$ExecuteCustomFunc = F3(
	function (a, b, c) {
		return {$: 34, a: a, b: b, c: c};
	});
var author$project$Engine$createCmdExecuteCustumFunc = F3(
	function (func, interactableId, extraInfo) {
		return A3(author$project$Types$ExecuteCustomFunc, func, extraInfo, interactableId);
	});
var author$project$Engine$execute_CustomFunc = F2(
	function (customFunc, interactableId) {
		var oneArgToCmdExecuteCustumFunc = A2(author$project$Engine$createCmdExecuteCustumFunc, customFunc, interactableId);
		return author$project$Types$CurriedCmd(oneArgToCmdExecuteCustumFunc);
	});
var author$project$Types$ItemIsInLocation = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$Engine$itemIsInLocation = author$project$Types$ItemIsInLocation;
var author$project$TypeConverterHelper$addConversionFailureMessage = F3(
	function (doDebug, valStr, returnVal) {
		if (doDebug) {
			return _Utils_Tuple2(returnVal, valStr);
		} else {
			return _Utils_Tuple2(returnVal, '');
		}
	});
var author$project$TypeConverterHelper$mbAttributeToMbDictStringString = F2(
	function (doDebug, mbAttrVal) {
		if (mbAttrVal.$ === 1) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, '');
		} else {
			if (mbAttrVal.a.$ === 3) {
				var dstrstr = mbAttrVal.a.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(dstrstr),
					'');
			} else {
				return A3(author$project$TypeConverterHelper$addConversionFailureMessage, doDebug, 'Trying to convert an attribute which is not of type ADictStringString to a Dict String String', elm$core$Maybe$Nothing);
			}
		}
	});
var author$project$TypeConverterHelper$mbAttributeToDictStringString = F2(
	function (doDebug, mbAttrVal) {
		return function (_n0) {
			var x = _n0.a;
			var y = _n0.b;
			return _Utils_Tuple2(
				A2(elm$core$Maybe$withDefault, elm$core$Dict$empty, x),
				y);
		}(
			A2(author$project$TypeConverterHelper$mbAttributeToMbDictStringString, doDebug, mbAttrVal));
	});
var author$project$TypeConverterHelper$mbAttributeToMbBool = F2(
	function (doDebug, mbAttrVal) {
		if (mbAttrVal.$ === 1) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, '');
		} else {
			if (mbAttrVal.a.$ === 7) {
				var b = mbAttrVal.a.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(b),
					'');
			} else {
				return A3(author$project$TypeConverterHelper$addConversionFailureMessage, doDebug, 'Trying to convert an attribute which is not of type Astring to a string', elm$core$Maybe$Nothing);
			}
		}
	});
var author$project$OurStoryPlugins$GoalsReports$generateGoalsStatusReport = F5(
	function (questionIds, optionIds, llgIds, extraInfo, manifest) {
		var questionStatusById = function (qId) {
			return function (_n0) {
				var x = _n0.a;
				var y = _n0.b;
				return _Utils_Tuple2(
					A2(elm$core$Maybe$withDefault, false, x),
					y);
			}(
				A2(
					author$project$TypeConverterHelper$mbAttributeToMbBool,
					true,
					A3(author$project$Engine$Manifest$getAttributeByIdAndInteractableId, 'isCorrectlyAnswered', qId, manifest))).a;
		};
		var optionStatusById = function (oId) {
			return A2(author$project$Engine$Manifest$choiceHasAlreadyBeenMade, oId, manifest);
		};
		var getQuestionNamesDict = function (qId) {
			return A2(
				author$project$TypeConverterHelper$mbAttributeToDictStringString,
				true,
				A3(author$project$Engine$Manifest$getAttributeByIdAndInteractableId, 'name', qId, manifest)).a;
		};
		var outputForQuestion = F2(
			function (qId, lgId) {
				return A2(
					elm$core$Maybe$withDefault,
					'question_' + qId,
					A2(
						elm$core$Dict$get,
						lgId,
						getQuestionNamesDict(qId))) + ('  :  ' + (questionStatusById(qId) ? 'Done' : 'To Do'));
			});
		var outputForAllDoneQuestions = function (lgId) {
			return A2(
				elm$core$List$map,
				function (qId) {
					return A2(outputForQuestion, qId, lgId);
				},
				A2(
					elm$core$List$filter,
					function (qId) {
						return questionStatusById(qId);
					},
					questionIds));
		};
		var outputForAllQuestions = function (lgId) {
			return A2(
				elm$core$List$map,
				function (qId) {
					return A2(outputForQuestion, qId, lgId);
				},
				questionIds);
		};
		var outputForAllToDoQuestions = function (lgId) {
			return A2(
				elm$core$List$map,
				function (qId) {
					return A2(outputForQuestion, qId, lgId);
				},
				A2(
					elm$core$List$filter,
					function (qId) {
						return !questionStatusById(qId);
					},
					questionIds));
		};
		var getOptionNamesDict = function (oId) {
			return A2(
				author$project$TypeConverterHelper$mbAttributeToDictStringString,
				true,
				A3(author$project$Engine$Manifest$getAttributeByIdAndInteractableId, 'name', oId, manifest)).a;
		};
		var outputForOption = F2(
			function (oId, lgId) {
				return A2(
					elm$core$Maybe$withDefault,
					'option_' + oId,
					A2(
						elm$core$Dict$get,
						lgId,
						getOptionNamesDict(oId))) + ('  :  ' + (optionStatusById(oId) ? 'Done' : 'To Do'));
			});
		var outputForAllDoneOptions = function (lgId) {
			return A2(
				elm$core$List$map,
				function (oId) {
					return A2(outputForOption, oId, lgId);
				},
				A2(
					elm$core$List$filter,
					function (oid) {
						return optionStatusById(oid);
					},
					optionIds));
		};
		var outputForAllOptions = function (lgId) {
			return A2(
				elm$core$List$map,
				function (oId) {
					return A2(outputForOption, oId, lgId);
				},
				optionIds);
		};
		var outputForAllQuestionsAndOptions = function (lgId) {
			return A2(
				elm$core$List$append,
				outputForAllQuestions(lgId),
				outputForAllOptions(lgId));
		};
		var outputForAllToDoOptions = function (lgId) {
			return A2(
				elm$core$List$map,
				function (oId) {
					return A2(outputForOption, oId, lgId);
				},
				A2(
					elm$core$List$filter,
					function (oid) {
						return !optionStatusById(oid);
					},
					optionIds));
		};
		var outputForAllQuestionsAndOptionsSplitDoneAndToDo = function (lgId) {
			return A2(
				elm$core$List$append,
				outputForAllToDoQuestions(lgId),
				A2(
					elm$core$List$append,
					outputForAllToDoOptions(lgId),
					A2(
						elm$core$List$append,
						outputForAllDoneQuestions(lgId),
						outputForAllDoneOptions(lgId))));
		};
		var reportLgDict = elm$core$Dict$fromList(
			A2(
				elm$core$List$map,
				function (lgId) {
					return _Utils_Tuple2(
						lgId,
						outputForAllQuestionsAndOptionsSplitDoneAndToDo(lgId));
				},
				llgIds));
		return _List_fromArray(
			[
				A3(
				author$project$Engine$setAttributeValue,
				author$project$Engine$aDictStringListString(reportLgDict),
				'additionalTextDict',
				'goalsStatusPaper')
			]);
	});
var author$project$OurStory$Rules$lRulesInteractingWithGoalsStatusPaper = function () {
	var questionIds = author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionIds;
	var optionIds = author$project$OurStory$NarrativeDSFuncs$getFilteredStageMultiOptionIds;
	var llgIds = _List_fromArray(
		['pt', 'en']);
	return _List_fromArray(
		[
			A3(
			author$project$OurStory$Rules$rule,
			'taking goals status paper',
			{
				bT: _List_fromArray(
					[
						A2(author$project$Engine$moveItemToCharacterInventory, 'playerOne', 'goalsStatusPaper')
					]),
				bZ: _List_fromArray(
					[
						A2(author$project$Engine$characterIsInLocation, 'playerOne', 'stage1'),
						A2(author$project$Engine$itemIsInLocation, 'goalsStatusPaper', 'stage1')
					]),
				cu: author$project$Engine$with('goalsStatusPaper')
			},
			elm$core$Dict$empty),
			A3(
			author$project$OurStory$Rules$ruleWithQuasiChange,
			'looking at goals status paper',
			{
				bT: _List_Nil,
				bZ: _List_Nil,
				cu: author$project$Engine$with('goalsStatusPaper'),
				c6: author$project$Engine$noQuasiChangeWithBackend,
				c7: _List_fromArray(
					[
						A2(
						author$project$Engine$execute_CustomFunc,
						A3(author$project$OurStoryPlugins$GoalsReports$generateGoalsStatusReport, questionIds, optionIds, llgIds),
						'goalsStatusPaper')
					])
			},
			elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'pt',
						_List_fromArray(
							[''])),
						_Utils_Tuple2(
						'en',
						_List_fromArray(
							['']))
					])))
		]);
}();
var author$project$Types$WriteGpsLocInfoToItem = F3(
	function (a, b, c) {
		return {$: 13, a: a, b: b, c: c};
	});
var author$project$Engine$createCmdWriteGpsInfoToItem = F2(
	function (interactableId, extraInfo) {
		return A3(author$project$Types$WriteGpsLocInfoToItem, extraInfo.ci, extraInfo, interactableId);
	});
var author$project$Engine$write_GpsInfoToItem = function (interactableId) {
	var oneArgToCmdWriteGpsInfoToItem = author$project$Engine$createCmdWriteGpsInfoToItem(interactableId);
	return author$project$Types$CurriedCmd(oneArgToCmdWriteGpsInfoToItem);
};
var author$project$OurStory$Narrative$lookAtGps = _List_fromArray(
	['\nConsultas o aparelho receptor de gps :\n    ']);
var author$project$OurStory$Narrative$lookAtGpsEn = _List_fromArray(
	['\nYou look at your gps receiver device :\n    ']);
var author$project$OurStory$Narrative$lookAtGpsDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', author$project$OurStory$Narrative$lookAtGps),
			_Utils_Tuple2('en', author$project$OurStory$Narrative$lookAtGpsEn)
		]));
var author$project$OurStory$Narrative$takeGps = _List_fromArray(
	['Guardas cuidadosamente o Gps ']);
var author$project$OurStory$Narrative$takeGpsEn = _List_fromArray(
	['\nYou carefully pick up and store the gps receiver !\n     ']);
var author$project$OurStory$Narrative$takeGpsDict = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2('pt', author$project$OurStory$Narrative$takeGps),
			_Utils_Tuple2('en', author$project$OurStory$Narrative$takeGpsEn)
		]));
var author$project$OurStory$Rules$lRulesInteractingWithGps = _List_fromArray(
	[
		A3(
		author$project$OurStory$Rules$rule,
		'taking gps',
		{
			bT: _List_fromArray(
				[
					A2(author$project$Engine$moveItemToCharacterInventory, 'playerOne', 'gps')
				]),
			bZ: _List_fromArray(
				[
					A2(author$project$Engine$characterIsInLocation, 'playerOne', 'stage1'),
					A2(author$project$Engine$itemIsInLocation, 'gps', 'stage1')
				]),
			cu: author$project$Engine$with('gps')
		},
		author$project$OurStory$Narrative$takeGpsDict),
		A3(
		author$project$OurStory$Rules$ruleWithQuasiChange,
		'looking at gps',
		{
			bT: _List_Nil,
			bZ: _List_Nil,
			cu: author$project$Engine$with('gps'),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: _List_fromArray(
				[
					author$project$Engine$write_GpsInfoToItem('gps')
				])
		},
		author$project$OurStory$Narrative$lookAtGpsDict)
	]);
var author$project$Types$CurrentLocationIs = function (a) {
	return {$: 3, a: a};
};
var author$project$Engine$currentLocationIs = author$project$Types$CurrentLocationIs;
var author$project$Types$MoveItemToLocation = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var author$project$Engine$moveItemToLocation = author$project$Types$MoveItemToLocation;
var author$project$OurStory$NarrativeDSFuncs$getLastStageId = 'stage' + elm$core$String$fromInt(author$project$OurStory$NarrativeDataStructures$numberOfDesiredStages);
var author$project$OurStory$NarrativeDSFuncs$getPenultimateStageId = 'stage' + elm$core$String$fromInt(author$project$OurStory$NarrativeDataStructures$numberOfDesiredStages - 1);
var author$project$OurStory$NarrativeDSFuncs$interactingWithStageNDict = F2(
	function (n, fieldStr) {
		return elm$core$Dict$fromList(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'pt',
					A3(author$project$OurStory$NarrativeDSFuncs$interactingWithStageN, n, 'pt', fieldStr)),
					_Utils_Tuple2(
					'en',
					A3(author$project$OurStory$NarrativeDSFuncs$interactingWithStageN, n, 'en', fieldStr))
				]));
	});
var author$project$OurStory$Rules$lRulesMakeFinalPaperAppearAfterAllQuestionsAnswered = _List_fromArray(
	[
		A3(
		author$project$OurStory$Rules$rule,
		'final paper appears player moving from penultimate stage to last stage',
		{
			bT: _List_fromArray(
				[
					author$project$Engine$moveTo(author$project$OurStory$NarrativeDSFuncs$getLastStageId),
					A2(author$project$Engine$moveCharacterToLocation, 'playerOne', author$project$OurStory$NarrativeDSFuncs$getLastStageId),
					A2(author$project$Engine$moveItemToLocation, 'finalPaper', author$project$OurStory$NarrativeDSFuncs$getLastStageId)
				]),
			bZ: A2(
				elm$core$List$append,
				_List_fromArray(
					[
						A2(author$project$Engine$characterIsInLocation, 'playerOne', author$project$OurStory$NarrativeDSFuncs$getPenultimateStageId)
					]),
				A2(
					elm$core$List$append,
					_List_fromArray(
						[
							author$project$Engine$currentLocationIs(author$project$OurStory$NarrativeDSFuncs$getPenultimateStageId)
						]),
					A2(
						elm$core$List$append,
						_List_fromArray(
							[
								author$project$Engine$itemIsOffScreen('finalPaper')
							]),
						A2(
							elm$core$List$append,
							A2(elm$core$List$map, author$project$Engine$choiceHasAlreadyBeenMade, author$project$OurStory$NarrativeDSFuncs$getFilteredStageMultiOptionIds),
							A2(elm$core$List$map, author$project$Engine$itemIsCorrectlyAnswered, author$project$OurStory$NarrativeDSFuncs$getFilteredStageQuestionIds))))),
			cu: author$project$Engine$with(author$project$OurStory$NarrativeDSFuncs$getLastStageId)
		},
		A2(author$project$OurStory$NarrativeDSFuncs$interactingWithStageNDict, author$project$OurStory$NarrativeDSFuncs$getLastStageNr, 'defaultStageDescription'))
	]);
var author$project$OurStory$Rules$standardInteractionWithMultiOptionNr = function (optionNr) {
	var optionId = author$project$OurStory$NarrativeDSFuncs$getOptionId(optionNr);
	var matchStringValOrAny = function (xstr) {
		return (xstr === '{__ANY__}') ? author$project$Engine$matchAnyNonEmptyString : author$project$Engine$matchStringValue(xstr);
	};
	var lpossibleChoices = author$project$OurStory$NarrativeDSFuncs$getMultiOptionAvailableChoicesValList(optionNr);
	var allCheckAndActs = A2(
		author$project$Engine$checkAndAct_IfChosenOptionIs,
		A2(
			elm$core$List$map,
			function (x) {
				return A5(
					author$project$Engine$checkOptionData,
					matchStringValOrAny(x),
					A2(author$project$OurStory$NarrativeDSFuncs$getMultiOptionTextIfChosenDict, optionNr, x),
					_List_Nil,
					_List_Nil,
					_List_Nil);
			},
			lpossibleChoices),
		optionId);
	return A3(
		author$project$OurStory$Rules$ruleWithQuasiChange,
		'view multi option' + elm$core$String$fromInt(optionNr),
		{
			bT: _List_Nil,
			bZ: _List_Nil,
			cu: author$project$Engine$with(optionId),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: _List_fromArray(
				[allCheckAndActs])
		},
		author$project$OurStory$NarrativeDSFuncs$interactingWithMultiOptionDict(optionNr));
};
var author$project$Types$ResetOption = function (a) {
	return {$: 23, a: a};
};
var author$project$Engine$resetOption = author$project$Types$ResetOption;
var author$project$OurStory$Narrative$interactingWithOptionResetEn = function (optionNr) {
	return _List_fromArray(
		['The previous choice was deleted. You can now make a new choice ']);
};
var author$project$OurStory$Narrative$interactingWithOptionResetPt = function (optionNr) {
	return _List_fromArray(
		['A opcao seleccionada foi eliminada. Pode agora fazer nova escolha']);
};
var author$project$OurStory$Narrative$interactingWithOptionResetDict = function (optionNr) {
	return elm$core$Dict$fromList(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'pt',
				author$project$OurStory$Narrative$interactingWithOptionResetPt(optionNr)),
				_Utils_Tuple2(
				'en',
				author$project$OurStory$Narrative$interactingWithOptionResetEn(optionNr))
			]));
};
var author$project$OurStory$Rules$standardInteractionWithMultiOptionNrReset = function (optionNr) {
	var optionId = author$project$OurStory$NarrativeDSFuncs$getOptionId(optionNr);
	var resetOptionId = 'reset_' + optionId;
	return A3(
		author$project$OurStory$Rules$ruleWithQuasiChange,
		'view multi option reset ' + elm$core$String$fromInt(optionNr),
		{
			bT: _List_fromArray(
				[
					author$project$Engine$resetOption(optionId),
					A3(
					author$project$Engine$createAttributeIfNotExistsAndOrSetValue,
					author$project$Engine$astring(optionId),
					'suggestedInteraction',
					resetOptionId)
				]),
			bZ: _List_Nil,
			cu: author$project$Engine$with(resetOptionId),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: _List_Nil
		},
		author$project$OurStory$Narrative$interactingWithOptionResetDict(optionNr));
};
var author$project$OurStory$Rules$standardInteractionWithQuestionNr = function (questionNr) {
	var correctAnswers = function (ls) {
		return A2(author$project$Engine$listOfAnswersAndFunctions, ls, _List_Nil);
	}(
		author$project$OurStory$NarrativeDSFuncs$getQuestionAnswers(questionNr));
	return A3(
		author$project$OurStory$Rules$ruleWithQuasiChange,
		'view question' + elm$core$String$fromInt(questionNr),
		{
			bT: _List_Nil,
			bZ: _List_Nil,
			cu: author$project$Engine$with(
				author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr)),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: _List_fromArray(
				[
					A3(
					author$project$Engine$check_IfAnswerCorrect,
					correctAnswers,
					A8(
						author$project$Engine$checkAnswerData,
						author$project$OurStory$NarrativeDSFuncs$getQuestionsMaxNrTries(questionNr),
						author$project$Engine$caseInsensitiveAnswer,
						author$project$Engine$answerSpacesDontMatter,
						author$project$Engine$headerAnswerAndCorrectIncorrect,
						author$project$OurStory$NarrativeDSFuncs$additionalTextIfAnswerCorrectDict(questionNr),
						author$project$OurStory$NarrativeDSFuncs$additionalTextIfAnswerIncorrectDict(questionNr),
						_List_Nil,
						_List_Nil),
					author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr))
				])
		},
		author$project$OurStory$NarrativeDSFuncs$interactingWithQuestionDict(questionNr));
};
var author$project$OurStory$Rules$standardRuleMoveToNminusOne = function (stageNr) {
	var ntype = 'enteringFromHigherStage';
	return A3(
		author$project$OurStory$Rules$rule,
		'interacting with Stage ' + (elm$core$String$fromInt(stageNr - 1) + ' from higher'),
		{
			bT: _List_fromArray(
				[
					author$project$Engine$moveTo(
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr - 1)),
					A2(
					author$project$Engine$moveCharacterToLocation,
					'playerOne',
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr - 1))
				]),
			bZ: _List_fromArray(
				[
					author$project$Engine$currentLocationIs(
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr))
				]),
			cu: author$project$Engine$with(
				author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr - 1))
		},
		A2(author$project$OurStory$NarrativeDSFuncs$interactingWithStageNDict, stageNr - 1, ntype));
};
var author$project$OurStory$Rules$startingStateQuasiChanges = _List_Nil;
var author$project$OurStory$Rules$standardRuleMoveToNplusOneNotRestricted = function (stageNr) {
	var currLocationId = (!stageNr) ? 'onceUponAtime' : author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr);
	return A3(
		author$project$OurStory$Rules$ruleWithQuasiChange,
		'interacting with Stage ' + (elm$core$String$fromInt(stageNr + 1) + ' from lower'),
		{
			bT: _List_fromArray(
				[
					author$project$Engine$moveTo(
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1)),
					A2(
					author$project$Engine$moveCharacterToLocation,
					'playerOne',
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1))
				]),
			bZ: _List_fromArray(
				[
					author$project$Engine$currentLocationIs(currLocationId),
					A2(author$project$Engine$characterIsInLocation, 'playerOne', currLocationId)
				]),
			cu: author$project$Engine$with(
				author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1)),
			c6: author$project$Engine$noQuasiChangeWithBackend,
			c7: (!stageNr) ? author$project$OurStory$Rules$startingStateQuasiChanges : _List_Nil
		},
		A2(author$project$OurStory$NarrativeDSFuncs$interactingWithStageNDict, stageNr + 1, 'defaultStageDescription'));
};
var author$project$OurStory$Rules$standardRuleMoveToNplusOneRestricted = function (stageNr) {
	return A3(
		author$project$OurStory$Rules$rule,
		'interacting with Stage ' + (elm$core$String$fromInt(stageNr + 1) + ' from lower correct answer required'),
		{
			bT: _List_fromArray(
				[
					author$project$Engine$moveTo(
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1)),
					A2(
					author$project$Engine$moveCharacterToLocation,
					'playerOne',
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1))
				]),
			bZ: A2(
				elm$core$List$append,
				A2(
					elm$core$List$map,
					author$project$Engine$choiceHasAlreadyBeenMade,
					author$project$OurStory$NarrativeDSFuncs$getOptionIdsByStageNr(stageNr)),
				A2(
					elm$core$List$append,
					_List_fromArray(
						[
							A2(
							author$project$Engine$characterIsInLocation,
							'playerOne',
							author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr))
						]),
					A2(
						elm$core$List$append,
						_List_fromArray(
							[
								author$project$Engine$currentLocationIs(
								author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr))
							]),
						A2(
							elm$core$List$map,
							author$project$Engine$itemIsCorrectlyAnswered,
							author$project$OurStory$NarrativeDSFuncs$getQuestionIdsByStageNr(stageNr))))),
			cu: author$project$Engine$with(
				author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1))
		},
		A2(author$project$OurStory$NarrativeDSFuncs$interactingWithStageNDict, stageNr + 1, 'defaultStageDescription'));
};
var author$project$Types$ItemIsNotCorrectlyAnswered = function (a) {
	return {$: 12, a: a};
};
var author$project$Engine$itemIsNotCorrectlyAnswered = author$project$Types$ItemIsNotCorrectlyAnswered;
var author$project$Types$NoChosenOptionYet = function (a) {
	return {$: 21, a: a};
};
var author$project$Engine$noChosenOptionYet = author$project$Types$NoChosenOptionYet;
var author$project$OurStory$Rules$standardRulesTryMoveToNplusOneAndFail = function (stageNr) {
	var stageQuestionNrs = author$project$OurStory$NarrativeDSFuncs$getQuestionNrsByStageNr(stageNr);
	var stageOptionNrs = author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr(stageNr);
	var ruleForFailOnQuestionNr = function (questionNr) {
		return A3(
			author$project$OurStory$Rules$rule,
			'interacting with higher Stage ' + (elm$core$String$fromInt(stageNr + 1) + ('  and failing because wrong answer on question ' + elm$core$String$fromInt(questionNr))),
			{
				bT: _List_Nil,
				bZ: _List_fromArray(
					[
						author$project$Engine$currentLocationIs(
						author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr)),
						A2(
						author$project$Engine$characterIsInLocation,
						'playerOne',
						author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr)),
						author$project$Engine$itemIsNotCorrectlyAnswered(
						author$project$OurStory$NarrativeDSFuncs$getQuestionId(questionNr))
					]),
				cu: author$project$Engine$with(
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1))
			},
			A2(author$project$OurStory$NarrativeDSFuncs$interactingWithStageNDict, stageNr + 1, 'withoutPreviousAnswered'));
	};
	var ruleForFailOnOptionNr = function (optionNr) {
		return A3(
			author$project$OurStory$Rules$rule,
			'interacting with higher Stage ' + (elm$core$String$fromInt(stageNr + 1) + ('  and failing because no choice made so far on option ' + elm$core$String$fromInt(optionNr))),
			{
				bT: _List_Nil,
				bZ: _List_fromArray(
					[
						author$project$Engine$currentLocationIs(
						author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr)),
						A2(
						author$project$Engine$characterIsInLocation,
						'playerOne',
						author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr)),
						author$project$Engine$noChosenOptionYet(
						author$project$OurStory$NarrativeDSFuncs$getOptionId(optionNr))
					]),
				cu: author$project$Engine$with(
					author$project$OurStory$NarrativeDSFuncs$getStageId(stageNr + 1))
			},
			A2(author$project$OurStory$NarrativeDSFuncs$interactingWithStageNDict, stageNr + 1, 'withoutPreviousAnswered'));
	};
	return A2(
		elm$core$List$append,
		A2(elm$core$List$map, ruleForFailOnOptionNr, stageOptionNrs),
		A2(elm$core$List$map, ruleForFailOnQuestionNr, stageQuestionNrs));
};
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$OurStory$Rules$rules = function () {
	var listOfStageNrs = author$project$OurStory$NarrativeDSFuncs$getAllStageNrs;
	var lRulesToTryMoveToNextStageAndFail = elm$core$List$concat(
		A2(
			elm$core$List$map,
			author$project$OurStory$Rules$standardRulesTryMoveToNplusOneAndFail,
			A2(
				elm$core$List$filter,
				function (x) {
					return !A2(elm$core$List$member, x, author$project$OurStory$Rules$correctAnswerNotRequiredToMove);
				},
				A2(
					elm$core$List$filter,
					function (x) {
						return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
					},
					A2(
						elm$core$List$take,
						elm$core$List$length(listOfStageNrs) - 1,
						listOfStageNrs)))));
	var lRulesToMoveToPreviousStage = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$standardRuleMoveToNminusOne,
		A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			elm$core$List$tail(listOfStageNrs)));
	var lRulesToMoveToNextStageRestricted = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$standardRuleMoveToNplusOneRestricted,
		A2(
			elm$core$List$filter,
			function (x) {
				return !A2(elm$core$List$member, x, author$project$OurStory$Rules$correctAnswerNotRequiredToMove);
			},
			A2(
				elm$core$List$filter,
				function (x) {
					return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
				},
				A2(
					elm$core$List$take,
					elm$core$List$length(listOfStageNrs) - 1,
					listOfStageNrs))));
	var lRulesToMoveToNextStageNotRestricted = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$standardRuleMoveToNplusOneNotRestricted,
		A2(
			elm$core$List$append,
			_List_fromArray(
				[0]),
			A2(
				elm$core$List$filter,
				function (x) {
					return A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept) || A2(elm$core$List$member, x, author$project$OurStory$Rules$correctAnswerNotRequiredToMove);
				},
				A2(
					elm$core$List$take,
					elm$core$List$length(listOfStageNrs) - 1,
					listOfStageNrs))));
	var lRulesAboutResettingMultiOptions = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$standardInteractionWithMultiOptionNrReset,
		elm$core$List$concat(
			A2(
				elm$core$List$map,
				author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr,
				A2(
					elm$core$List$filter,
					function (x) {
						return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
					},
					author$project$OurStory$NarrativeDSFuncs$getAllStageNrs))));
	var lRulesAboutQuestionsAllQuestionsAndOptionsAnsweredButOne = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$interactionWithQuestionNrAllQuestionsAndOptionsAnsweredButThisOne,
		elm$core$List$concat(
			A2(
				elm$core$List$map,
				function (_n1) {
					var x = _n1.a;
					var ly = _n1.b;
					return A2(
						elm$core$List$map,
						function (yelem) {
							return _Utils_Tuple2(yelem, x);
						},
						ly);
				},
				A2(
					elm$core$List$map,
					function (x) {
						return _Utils_Tuple2(
							x,
							author$project$OurStory$NarrativeDSFuncs$getQuestionNrsByStageNr(x));
					},
					A2(
						elm$core$List$filter,
						function (x) {
							return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
						},
						author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)))));
	var lRulesAboutQuestions = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$standardInteractionWithQuestionNr,
		elm$core$List$concat(
			A2(
				elm$core$List$map,
				author$project$OurStory$NarrativeDSFuncs$getQuestionNrsByStageNr,
				A2(
					elm$core$List$filter,
					function (x) {
						return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
					},
					author$project$OurStory$NarrativeDSFuncs$getAllStageNrs))));
	var lRulesAboutOptionsAllQuestionsAndOptionsAnsweredButOne = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$interactionWithOptionNrAllQuestionsAndOptionsAnsweredButThisOne,
		elm$core$List$concat(
			A2(
				elm$core$List$map,
				function (_n0) {
					var x = _n0.a;
					var ly = _n0.b;
					return A2(
						elm$core$List$map,
						function (yelem) {
							return _Utils_Tuple2(yelem, x);
						},
						ly);
				},
				A2(
					elm$core$List$map,
					function (x) {
						return _Utils_Tuple2(
							x,
							author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr(x));
					},
					A2(
						elm$core$List$filter,
						function (x) {
							return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
						},
						author$project$OurStory$NarrativeDSFuncs$getAllStageNrs)))));
	var lRulesAboutMultiOptions = A2(
		elm$core$List$map,
		author$project$OurStory$Rules$standardInteractionWithMultiOptionNr,
		elm$core$List$concat(
			A2(
				elm$core$List$map,
				author$project$OurStory$NarrativeDSFuncs$getOptionNrsByStageNr,
				A2(
					elm$core$List$filter,
					function (x) {
						return !A2(elm$core$List$member, x, author$project$OurStory$NarrativeDSFuncs$getQuestionsAndOrOptionsOnEveryStageExcept);
					},
					author$project$OurStory$NarrativeDSFuncs$getAllStageNrs))));
	var lRules = A2(
		elm$core$List$append,
		author$project$OurStory$Rules$lRuleGameHasEnded,
		A2(
			elm$core$List$append,
			author$project$OurStory$Rules$lRulesInteractingWithGoalsStatusPaper,
			A2(
				elm$core$List$append,
				author$project$OurStory$Rules$lRuleInteractingWithFinalPaper,
				A2(
					elm$core$List$append,
					lRulesAboutOptionsAllQuestionsAndOptionsAnsweredButOne,
					A2(
						elm$core$List$append,
						lRulesAboutQuestionsAllQuestionsAndOptionsAnsweredButOne,
						A2(
							elm$core$List$append,
							author$project$OurStory$Rules$lRulesMakeFinalPaperAppearAfterAllQuestionsAnswered,
							A2(
								elm$core$List$append,
								author$project$OurStory$Rules$lRulesInteractingWithCreditsInfo,
								A2(
									elm$core$List$append,
									author$project$OurStory$Rules$lRulesInteractingWithGps,
									A2(
										elm$core$List$append,
										lRulesAboutResettingMultiOptions,
										A2(
											elm$core$List$append,
											lRulesAboutMultiOptions,
											A2(
												elm$core$List$append,
												lRulesAboutQuestions,
												A2(
													elm$core$List$append,
													lRulesToMoveToNextStageNotRestricted,
													A2(
														elm$core$List$append,
														lRulesToTryMoveToNextStageAndFail,
														A2(elm$core$List$append, lRulesToMoveToNextStageRestricted, lRulesToMoveToPreviousStage))))))))))))));
	return elm$core$Dict$fromList(lRules);
}();
var author$project$Theme$AnswerBox$init = {bE: elm$core$Maybe$Nothing};
var author$project$Theme$Settings$init = function (theLanguages) {
	return {bK: false, bL: true, bM: theLanguages, b4: 'pt', b7: false, cj: true, cC: true, dg: true, di: false, dj: false, dk: false, dl: false, dE: false};
};
var author$project$Theme$Settings$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var bval = msg.a;
				return _Utils_update(
					model,
					{b7: bval});
			case 1:
				var lgId = msg.a;
				return _Utils_update(
					model,
					{b4: lgId});
			case 2:
				var dlanguages = msg.a;
				return _Utils_update(
					model,
					{bM: dlanguages});
			case 3:
				return _Utils_update(
					model,
					{dk: !model.dk});
			case 4:
				var bautoplay = msg.a;
				return _Utils_update(
					model,
					{bK: bautoplay});
			case 5:
				return _Utils_update(
					model,
					{dl: !model.dl});
			case 6:
				var bWithSidebar = msg.a;
				return _Utils_update(
					model,
					{cC: bWithSidebar});
			case 7:
				var bUseButtons = msg.a;
				return _Utils_update(
					model,
					{dE: bUseButtons});
			case 8:
				return _Utils_update(
					model,
					{dj: true});
			default:
				return _Utils_update(
					model,
					{dj: false});
		}
	});
var author$project$TypeConverterHelper$mbAttributeToBool = F2(
	function (doDebug, mbAttrVal) {
		return function (_n0) {
			var x = _n0.a;
			var y = _n0.b;
			return _Utils_Tuple2(
				A2(elm$core$Maybe$withDefault, false, x),
				y);
		}(
			A2(author$project$TypeConverterHelper$mbAttributeToMbBool, doDebug, mbAttrVal));
	});
var author$project$TypeConverterHelper$mbAttributeToMbDictStringListString = F2(
	function (doDebug, mbAttrVal) {
		if (mbAttrVal.$ === 1) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, '');
		} else {
			if (mbAttrVal.a.$ === 4) {
				var dstrlstr = mbAttrVal.a.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(dstrlstr),
					'');
			} else {
				return A3(author$project$TypeConverterHelper$addConversionFailureMessage, doDebug, 'Trying to convert an attribute which is not of type ADictStringListString to a Dict String (List String)', elm$core$Maybe$Nothing);
			}
		}
	});
var author$project$TypeConverterHelper$mbAttributeToDictStringListString = F2(
	function (doDebug, mbAttrVal) {
		return function (_n0) {
			var x = _n0.a;
			var y = _n0.b;
			return _Utils_Tuple2(
				A2(elm$core$Maybe$withDefault, elm$core$Dict$empty, x),
				y);
		}(
			A2(author$project$TypeConverterHelper$mbAttributeToMbDictStringListString, doDebug, mbAttrVal));
	});
var author$project$TypeConverterHelper$mbAttributeToMbString = F2(
	function (doDebug, mbAttrVal) {
		if (mbAttrVal.$ === 1) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, '');
		} else {
			if (!mbAttrVal.a.$) {
				var theStr = mbAttrVal.a.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(theStr),
					'');
			} else {
				return A3(author$project$TypeConverterHelper$addConversionFailureMessage, doDebug, 'Trying to convert an attribute which is not of type Astring to a string', elm$core$Maybe$Nothing);
			}
		}
	});
var author$project$TypeConverterHelper$mbAttributeToString = F2(
	function (doDebug, mbAttrVal) {
		return function (_n0) {
			var x = _n0.a;
			var y = _n0.b;
			return _Utils_Tuple2(
				A2(elm$core$Maybe$withDefault, '', x),
				y);
		}(
			A2(author$project$TypeConverterHelper$mbAttributeToMbString, doDebug, mbAttrVal));
	});
var author$project$Types$Ans = function (a) {
	return {$: 2, a: a};
};
var author$project$TypesUpdateHelper$updateNestedBkAnsStatus = F2(
	function (extraInfoWithPendingChanges, bkAnsStatus) {
		var interactionExtraInfo_ = extraInfoWithPendingChanges.cv;
		var newInteractionExtraInfo = _Utils_update(
			interactionExtraInfo_,
			{aA: bkAnsStatus});
		var newExtraInfoWithPendingChanges = _Utils_update(
			extraInfoWithPendingChanges,
			{cv: newInteractionExtraInfo});
		return newExtraInfoWithPendingChanges;
	});
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$core$String$trim = _String_trim;
var wernerdegroot$listzipper$List$Zipper$current = function (_n0) {
	var x = _n0.b;
	return x;
};
var wernerdegroot$listzipper$List$Zipper$next = function (_n0) {
	var ls = _n0.a;
	var x = _n0.b;
	var rs = _n0.c;
	if (!rs.b) {
		return elm$core$Maybe$Nothing;
	} else {
		var y = rs.a;
		var ys = rs.b;
		return elm$core$Maybe$Just(
			A3(
				wernerdegroot$listzipper$List$Zipper$Zipper,
				A2(elm$core$List$cons, x, ls),
				y,
				ys));
	}
};
var author$project$Main$initWithMbPlayerNameAndMbHistoryList = F5(
	function (flags, displayStartScreen_, lPrandomFloats, mbPlayerName, historyList) {
		var settingsmodel = author$project$Theme$Settings$init(author$project$OurStory$Narrative$initialChoiceLanguages);
		var displaylanguage = settingsmodel.b4;
		var dictEntities = author$project$OurStory$Rules$rules;
		var engineModel = A5(
			author$project$Engine$init,
			{
				bU: A2(
					elm$core$List$map,
					function (_n38) {
						var id = _n38.a;
						var comp = _n38.b;
						return _Utils_Tuple2(
							id,
							author$project$Main$getInteractableInfo(
								_Utils_Tuple2(id, comp)));
					},
					author$project$OurStory$Manifest$characters),
				cy: A2(
					elm$core$List$map,
					function (_n39) {
						var id = _n39.a;
						var comp = _n39.b;
						return _Utils_Tuple2(
							id,
							author$project$Main$getInteractableInfo(
								_Utils_Tuple2(id, comp)));
					},
					author$project$OurStory$Manifest$items),
				cE: A2(
					elm$core$List$map,
					function (_n40) {
						var id = _n40.a;
						var comp = _n40.b;
						return _Utils_Tuple2(
							id,
							author$project$Main$getInteractableInfo(
								_Utils_Tuple2(id, comp)));
					},
					author$project$OurStory$Manifest$locations)
			},
			author$project$OurStory$Manifest$playerId,
			author$project$OurStory$Narrative$initialChoiceLanguages,
			A2(
				elm$core$Dict$map,
				F2(
					function (a, b) {
						return author$project$Components$getRuleData(
							_Utils_Tuple2(a, b));
					}),
				dictEntities),
			_List_Nil);
		var debugMode_ = false;
		var answerboxmodel = author$project$Theme$AnswerBox$init;
		var newModel = A2(
			author$project$Main$mbSetPlayerName,
			mbPlayerName,
			{
				d: _List_Nil,
				j: answerboxmodel,
				X: false,
				r: flags.r,
				z: flags.z,
				i: elm$core$Dict$fromList(
					A2(
						elm$core$List$map,
						function (interactableId) {
							return _Utils_Tuple2(interactableId, author$project$Types$NoInfoYet);
						},
						A2(
							elm$core$List$map,
							elm$core$Tuple$first,
							_Utils_ap(
								author$project$OurStory$Manifest$items,
								_Utils_ap(author$project$OurStory$Manifest$locations, author$project$OurStory$Manifest$characters))))),
				k: debugMode_,
				aD: 50.0,
				an: false,
				ao: displayStartScreen_,
				aE: author$project$OurStory$Narrative$endScreenInfo,
				c: engineModel,
				I: _List_Nil,
				_: _Utils_ap(
					author$project$OurStory$Manifest$items,
					_Utils_ap(author$project$OurStory$Manifest$locations, author$project$OurStory$Manifest$characters)),
				M: _List_Nil,
				aH: A2(
					elm$core$Dict$map,
					F2(
						function (a, b) {
							return author$project$Components$getLanguagesAudioDict(
								_Utils_Tuple2(a, b));
						}),
					dictEntities),
				N: A2(
					elm$core$Dict$map,
					F2(
						function (a, b) {
							return author$project$Components$getLanguagesNarrativeDict(
								_Utils_Tuple2(a, b));
						}),
					dictEntities),
				aa: author$project$OurStory$Narrative$startingNarratives,
				au: true,
				aK: 21,
				aL: author$project$Leaflet$Types$defaultZoomPanOptions,
				C: elm$core$Maybe$Nothing,
				P: elm$core$Maybe$Nothing,
				x: A2(elm$core$Maybe$withDefault, '___investigator___', mbPlayerName),
				ae: 100,
				b: settingsmodel,
				aU: author$project$OurStory$Narrative$startScreenInfo
			});
		return (!elm$core$List$length(historyList)) ? _Utils_Tuple2(
			newModel,
			author$project$Main$cmdForGeneratingListOfRandomFloats(newModel.ae)) : A2(
			author$project$Main$update,
			A2(author$project$ClientTypes$ProcessLoadHistory, historyList, newModel.b),
			A2(author$project$Main$getNewModelAfterGameStartRandomElems, lPrandomFloats, newModel));
	});
var author$project$Main$update = F2(
	function (msg, model) {
		update:
		while (true) {
			var _n0 = author$project$Engine$hasFreezingEnd(model.c);
			if (_n0) {
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			} else {
				switch (msg.$) {
					case 0:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{ao: false}),
							elm$core$Platform$Cmd$none);
					case 1:
						var playerNameStr = msg.a;
						if (playerNameStr !== '') {
							var newModel = A2(author$project$Main$setPlayerName, playerNameStr, model);
							var $temp$msg = author$project$ClientTypes$StartMainGame,
								$temp$model = newModel;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							var $temp$msg = author$project$ClientTypes$StartMainGame,
								$temp$model = model;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						}
					case 2:
						var interactableId = msg.a;
						var theText = msg.b;
						var newAnswerBoxModel = A2(author$project$Theme$AnswerBox$update, '', model.j);
						var newModel = _Utils_update(
							model,
							{
								j: newAnswerBoxModel,
								P: elm$core$Maybe$Just(
									elm$core$String$trim(theText))
							});
						var $temp$msg = author$project$ClientTypes$Interact(interactableId),
							$temp$model = newModel;
						msg = $temp$msg;
						model = $temp$model;
						continue update;
					case 3:
						var interactableId = msg.a;
						var needCoords = author$project$Components$getNeedsGpsCoords(
							A2(author$project$Main$findEntity, model, interactableId));
						var nModel = _Utils_update(
							model,
							{d: _List_Nil, P: elm$core$Maybe$Nothing});
						var mbGpsZone = author$project$Components$getNeedsToBeInGpsZone(
							A2(author$project$Main$findEntity, model, interactableId));
						var needsToBeInZone = A2(
							elm$core$Maybe$withDefault,
							false,
							A2(
								elm$core$Maybe$map,
								function ($) {
									return $.cX;
								},
								mbGpsZone)) && (!model.b.b7);
						var interactionExtraInfo = A2(author$project$Main$getExtraInfoFromModel, model, interactableId);
						var _n2 = (needCoords && (!needsToBeInZone)) ? _Utils_Tuple2(
							nModel,
							author$project$Main$sendRequestForGeolocation(interactableId)) : (needsToBeInZone ? _Utils_Tuple2(
							nModel,
							author$project$Main$sendRequestForGeolocation(interactableId)) : A2(
							author$project$Main$update,
							A2(author$project$ClientTypes$InteractStepTwo, interactableId, interactionExtraInfo),
							nModel));
						var newModel = _n2.a;
						var cmds = _n2.b;
						return _Utils_Tuple2(newModel, cmds);
					case 10:
						var locationAndInteractableIdRecord = msg.a;
						if (_Utils_eq(locationAndInteractableIdRecord.at, -999) && _Utils_eq(locationAndInteractableIdRecord.av, -999)) {
							var $temp$msg = author$project$ClientTypes$NewCoordsForInterIdFailed(locationAndInteractableIdRecord.bc),
								$temp$model = model;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							var _n3 = _Utils_Tuple3(locationAndInteractableIdRecord.bc, locationAndInteractableIdRecord.at, locationAndInteractableIdRecord.av);
							var interactableId = _n3.a;
							var latitude = _n3.b;
							var longitude = _n3.c;
							var interactionExtraInfo = A2(author$project$Main$getExtraInfoFromModel, model, interactableId);
							var mbGpsZone = author$project$Components$getNeedsToBeInGpsZone(
								A2(author$project$Main$findEntity, model, interactableId));
							var needsToBeInZone = A2(
								elm$core$Maybe$withDefault,
								false,
								A2(
									elm$core$Maybe$map,
									function ($) {
										return $.cX;
									},
									mbGpsZone)) && (!model.b.b7);
							var location = A2(author$project$GpsUtils$GeolocationInfo, latitude, longitude);
							var distanceToClosestLocations = A3(
								author$project$GpsUtils$getDistancesTo,
								1000,
								location,
								A2(
									elm$core$List$map,
									elm$core$Dict$get(model.b.b4),
									A2(
										elm$core$List$map,
										author$project$Components$getDictLgNamesAndCoords(
											_List_fromArray(
												[model.b.b4])),
										author$project$OurStory$Manifest$locations)));
							var newModel = _Utils_update(
								model,
								{
									I: distanceToClosestLocations,
									C: elm$core$Maybe$Just(location)
								});
							var updatedInteractionExtraInfo = A2(author$project$Main$updateInterExtraInfoWithGeoInfo, interactionExtraInfo, newModel);
							var theDistance = A2(author$project$GpsUtils$getDistance, location, mbGpsZone);
							var inDistance = A3(author$project$GpsUtils$checkIfInDistance, mbGpsZone, theDistance, model.aD);
							if ((!needsToBeInZone) || (needsToBeInZone && inDistance)) {
								var $temp$msg = A2(author$project$ClientTypes$InteractStepTwo, interactableId, updatedInteractionExtraInfo),
									$temp$model = newModel;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							} else {
								var $temp$msg = A4(author$project$ClientTypes$NotInTheZone, interactableId, mbGpsZone, location, theDistance),
									$temp$model = newModel;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							}
						}
					case 11:
						var interactableId = msg.a;
						var newModel = _Utils_update(
							model,
							{
								d: _List_fromArray(
									['Failed to get gps coordinates']),
								I: _List_Nil,
								C: elm$core$Maybe$Nothing
							});
						var mbGpsZone = author$project$Components$getNeedsToBeInGpsZone(
							A2(author$project$Main$findEntity, model, interactableId));
						var needsToBeInZone = A2(
							elm$core$Maybe$withDefault,
							false,
							A2(
								elm$core$Maybe$map,
								function ($) {
									return $.cX;
								},
								mbGpsZone)) && (!model.b.b7);
						var interactionExtraInfo = A2(author$project$Main$getExtraInfoFromModel, model, interactableId);
						var updatedInteractionExtraInfo = A2(author$project$Main$updateInterExtraInfoWithGeoInfo, interactionExtraInfo, model);
						if (!needsToBeInZone) {
							var $temp$msg = A2(author$project$ClientTypes$InteractStepTwo, interactableId, updatedInteractionExtraInfo),
								$temp$model = newModel;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
						}
					case 12:
						var interactableId = msg.a;
						var mbGpsZone = msg.b;
						var location = msg.c;
						var theDistance = msg.d;
						var zoneCoordsStr = A2(
							elm$core$Maybe$withDefault,
							'',
							A2(
								elm$core$Maybe$map,
								author$project$GpsUtils$convertDecimalTupleToGps,
								author$project$GpsUtils$getMbGpsZoneLatLon(mbGpsZone)));
						var theName = A2(
							author$project$Components$getSingleLgDisplayInfo,
							model.b.b4,
							A2(author$project$Main$findEntity, model, interactableId)).E;
						var linfoStr = _List_fromArray(
							[
								' Trying to move to  ' + (theName + ' failed . '),
								'you\'re not close enough.',
								'You are at : ' + author$project$GpsUtils$convertDecimalTupleToGps(
								_Utils_Tuple2(location.at, location.av)),
								'Please move closer to ' + zoneCoordsStr,
								'Your distance to where you should be is : ' + (elm$core$String$fromInt(
								elm$core$Basics$round(theDistance)) + ' meters')
							]);
						var newModel = _Utils_update(
							model,
							{d: linfoStr});
						return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
					case 4:
						var interactableId = msg.a;
						var interactionExtraInfo = msg.b;
						if (_Utils_eq(
							A2(elm$core$Dict$get, interactableId, model.i),
							elm$core$Maybe$Just(author$project$Types$WaitingForInfoRequested))) {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										d: A2(elm$core$List$cons, 'Please Wait ... \n', model.d)
									}),
								elm$core$Platform$Cmd$none);
						} else {
							var engResp1 = A2(
								author$project$Engine$update,
								A2(author$project$Engine$PreUpdate, interactableId, interactionExtraInfo),
								model.c);
							var _n4 = function () {
								if (!engResp1.$) {
									var _n6 = engResp1.a;
									var newEngineModel_ = _n6.a;
									var extraInfoWithPendingChanges_ = _n6.b;
									var infoNeeded_ = _n6.c;
									return _Utils_Tuple3(newEngineModel_, extraInfoWithPendingChanges_, infoNeeded_);
								} else {
									return _Utils_Tuple3(
										model.c,
										A3(author$project$Types$ExtraInfoWithPendingChanges, interactionExtraInfo, _List_Nil, elm$core$Maybe$Nothing),
										author$project$Types$NoInfoNeeded);
								}
							}();
							var newEngineModel = _n4.a;
							var extraInfoWithPendingChanges = _n4.b;
							var infoNeeded = _n4.c;
							var newInteractionExtraInfo = extraInfoWithPendingChanges.cv;
							var newModel = _Utils_update(
								model,
								{c: newEngineModel});
							if (!infoNeeded.$) {
								var _n8 = function () {
									var _n9 = A2(
										author$project$Engine$update,
										A2(author$project$Engine$CompleteTheUpdate, interactableId, extraInfoWithPendingChanges),
										newEngineModel);
									if (_n9.$ === 1) {
										var _n10 = _n9.a;
										var newEngineModel2_ = _n10.a;
										var lInteractionIncidents_ = _n10.b;
										return _Utils_Tuple2(newEngineModel2_, lInteractionIncidents_);
									} else {
										return _Utils_Tuple2(newEngineModel, _List_Nil);
									}
								}();
								var newEngineModel2 = _n8.a;
								var lInteractionIncidents = _n8.b;
								var interactionIncidents = model.k ? lInteractionIncidents : _List_Nil;
								var $temp$msg = A2(author$project$ClientTypes$InteractStepThree, interactableId, newInteractionExtraInfo),
									$temp$model = _Utils_update(
									newModel,
									{
										d: interactionIncidents,
										i: A3(
											elm$core$Dict$update,
											interactableId,
											function (x) {
												return elm$core$Maybe$Just(author$project$Types$NoInfoYet);
											},
											model.i),
										c: newEngineModel2
									});
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							} else {
								var strUrl = infoNeeded.a;
								if (_Utils_eq(interactionExtraInfo.aA, author$project$Types$NoInfoYet)) {
									var newInteractionExtraInfoTwo = _Utils_update(
										newInteractionExtraInfo,
										{aA: author$project$Types$WaitingForInfoRequested});
									var newExtraInfoWithPendingChanges = {cv: newInteractionExtraInfoTwo, cP: extraInfoWithPendingChanges.cP, bl: extraInfoWithPendingChanges.bl};
									var newAnswerBoxModel = A2(author$project$Theme$AnswerBox$update, '', model.j);
									var getTheUrl = function (strUrl_) {
										return strUrl_;
									};
									return _Utils_Tuple2(
										_Utils_update(
											newModel,
											{
												d: _List_fromArray(
													['___Checking_Answer___']),
												j: newAnswerBoxModel,
												i: A3(
													elm$core$Dict$update,
													interactableId,
													function (x) {
														return elm$core$Maybe$Just(author$project$Types$WaitingForInfoRequested);
													},
													model.i)
											}),
										A3(
											author$project$Main$getBackendAnswerInfo,
											interactableId,
											newExtraInfoWithPendingChanges,
											getTheUrl(strUrl)));
								} else {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								}
							}
						}
					case 6:
						if (!msg.c.$) {
							var interactableId = msg.a;
							var extraInfoWithPendingChanges = msg.b;
							var bresp = msg.c.a;
							var newExtraInfoWithPendingChanges = A2(
								author$project$TypesUpdateHelper$updateNestedBkAnsStatus,
								extraInfoWithPendingChanges,
								author$project$Types$Ans(bresp));
							var nModel = _Utils_update(
								model,
								{
									d: _List_Nil,
									i: A3(
										elm$core$Dict$update,
										interactableId,
										function (val) {
											return elm$core$Maybe$Just(
												author$project$Types$Ans(bresp));
										},
										model.i)
								});
							var _n11 = A3(author$project$Main$getNewModelAndInteractionExtraInfoByEngineUpdate, interactableId, newExtraInfoWithPendingChanges, nModel);
							var newInteractionExtraInfo_ = _n11.a;
							var newModel = _n11.b;
							var $temp$msg = A2(author$project$ClientTypes$InteractStepThree, interactableId, newInteractionExtraInfo_),
								$temp$model = newModel;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						} else {
							var interactableId = msg.a;
							var extraInfoWithPendingChanges = msg.b;
							var error = msg.c.a;
							var newExtraInfoWithPendingChanges = A2(author$project$TypesUpdateHelper$updateNestedBkAnsStatus, extraInfoWithPendingChanges, author$project$Types$CommunicationFailure);
							var nModel = _Utils_update(
								model,
								{
									d: _List_fromArray(
										['___Couldnt_check_Answer___']),
									i: A3(
										elm$core$Dict$update,
										interactableId,
										function (val) {
											return elm$core$Maybe$Just(author$project$Types$CommunicationFailure);
										},
										model.i)
								});
							var _n12 = A3(author$project$Main$getNewModelAndInteractionExtraInfoByEngineUpdate, interactableId, newExtraInfoWithPendingChanges, nModel);
							var newInteractionExtraInfo_ = _n12.a;
							var newModel = _n12.b;
							var $temp$msg = A2(author$project$ClientTypes$InteractStepThree, interactableId, newInteractionExtraInfo_),
								$temp$model = newModel;
							msg = $temp$msg;
							model = $temp$model;
							continue update;
						}
					case 5:
						var interactableId = msg.a;
						var interactionExtraInfo = msg.b;
						var updateNarrativeContent = elm$core$Maybe$map(
							function (narrative) {
								return A2(
									elm$core$Maybe$withDefault,
									narrative,
									wernerdegroot$listzipper$List$Zipper$next(narrative));
							});
						var updateNarrativeLgsDict = function (mbDict) {
							if (!mbDict.$) {
								var dict = mbDict.a;
								return elm$core$Maybe$Just(
									A2(
										elm$core$Dict$map,
										F2(
											function (lgid, val) {
												return A2(
													elm$core$Maybe$withDefault,
													val,
													updateNarrativeContent(
														elm$core$Maybe$Just(val)));
											}),
										dict));
							} else {
								return elm$core$Maybe$Nothing;
							}
						};
						var temporaryHackToSubstitueImgUrl = F2(
							function (baseImgUrl, theStr) {
								return (baseImgUrl !== '') ? A3(
									author$project$Main$regexUserReplace,
									'\\(img\\/',
									function (_n33) {
										return '(' + baseImgUrl;
									},
									theStr) : theStr;
							});
						var newEngineModel = model.c;
						var newSettingsModel = A2(
							author$project$Theme$Settings$update,
							author$project$ClientTypes$SetAvailableLanguages(
								author$project$Engine$getChoiceLanguages(newEngineModel)),
							model.b);
						var suggestInteractionCaption = function (lgId) {
							return A2(
								elm$core$Maybe$withDefault,
								A2(author$project$TranslationHelper$getInLanguage, lgId, '___SUGGESTED_INTERACTION___'),
								function (_n32) {
									var x = _n32.a;
									var y = _n32.b;
									return A2(elm$core$Dict$get, lgId, x);
								}(
									A2(
										author$project$TypeConverterHelper$mbAttributeToDictStringString,
										model.k,
										A3(author$project$Engine$getInteractableAttribute, 'suggestedInteractionCaption', interactableId, newEngineModel))));
						};
						var newAnswerBoxModel = A2(author$project$Theme$AnswerBox$update, '', model.j);
						var mergeToDictStoryLine = F2(
							function (tup, storyLinesDict) {
								var newStorySnippet = tup.b;
								var languageId = tup.a;
								var mbExistingStorySnippets = A2(elm$core$Dict$get, languageId, storyLinesDict);
								var mbNewval = elm$core$Maybe$Just(
									A2(
										elm$core$List$cons,
										newStorySnippet,
										A2(elm$core$Maybe$withDefault, _List_Nil, mbExistingStorySnippets)));
								return A3(
									elm$core$Dict$update,
									languageId,
									function (mbval) {
										return mbNewval;
									},
									storyLinesDict);
							});
						var mbCurrentStageNameAndCoords = function (dict) {
							return A2(
								elm$core$Maybe$map,
								function (_n31) {
									var name = _n31.a;
									var lat = _n31.b;
									var lng = _n31.c;
									return {
										b0: _Utils_Tuple2(lat, lng),
										cH: 'current',
										$7: name
									};
								},
								A2(elm$core$Dict$get, model.b.b4, dict));
						}(
							function (entity) {
								return A2(author$project$Components$getDictLgNamesAndCoords, author$project$OurStory$Narrative$desiredLanguages, entity);
							}(
								A2(
									author$project$Main$findEntity,
									model,
									author$project$Engine$getCurrentLocation(model.c))));
						var maybeMatchedRuleId = interactionExtraInfo.cN;
						var updatedContent = A2(
							elm$core$Maybe$withDefault,
							model.N,
							A2(
								elm$core$Maybe$map,
								function (id) {
									return A3(elm$core$Dict$update, id, updateNarrativeLgsDict, model.N);
								},
								maybeMatchedRuleId));
						var isLastZip = function (val) {
							return _Utils_eq(
								wernerdegroot$listzipper$List$Zipper$next(val),
								elm$core$Maybe$Nothing) ? true : false;
						};
						var getTheWrittenContent = function (languageId) {
							return A2(
								elm$core$String$join,
								' ',
								A2(
									elm$core$List$map,
									function (x) {
										return A2(author$project$TranslationHelper$getInLanguage, languageId, x);
									},
									A2(
										elm$core$String$split,
										' ',
										A2(
											elm$core$Maybe$withDefault,
											'',
											A2(author$project$Engine$getItemWrittenContent, interactableId, newEngineModel)))));
						};
						var getTheNarrativeHeaderAndIncident = function (languageId) {
							return function (_n30) {
								var ls = _n30.a;
								var y = _n30.b;
								return _Utils_Tuple2(
									A2(elm$core$String$join, ' ', ls),
									y);
							}(
								function (_n29) {
									var ls = _n29.a;
									var y = _n29.b;
									return _Utils_Tuple2(
										A2(
											elm$core$List$map,
											function (x) {
												return A2(author$project$TranslationHelper$getInLanguage, languageId, x);
											},
											ls),
										y);
								}(
									function (_n28) {
										var x = _n28.a;
										var y = _n28.b;
										return _Utils_Tuple2(
											A2(elm$core$String$split, ' ', x),
											y);
									}(
										A2(
											author$project$TypeConverterHelper$mbAttributeToString,
											model.k,
											A3(author$project$Engine$getInteractableAttribute, 'narrativeHeader', interactableId, newEngineModel)))));
						};
						var getMbsuggestInteractionId = A2(
							author$project$TypeConverterHelper$mbAttributeToMbString,
							model.k,
							A3(author$project$Engine$getInteractableAttribute, 'suggestedInteraction', interactableId, model.c));
						var exitsNamesAndCoords = A2(
							elm$core$List$filterMap,
							function (x) {
								return x;
							},
							A2(
								elm$core$List$map,
								function (dict) {
									return A2(
										elm$core$Maybe$map,
										function (_n27) {
											var name = _n27.a;
											var lat = _n27.b;
											var lng = _n27.c;
											return {
												b0: _Utils_Tuple2(lat, lng),
												cH: 'connecting',
												$7: name
											};
										},
										A2(elm$core$Dict$get, model.b.b4, dict));
								},
								A2(
									elm$core$List$map,
									author$project$Components$getDictLgNamesAndCoords(author$project$OurStory$Narrative$desiredLanguages),
									A2(
										elm$core$List$map,
										function (id) {
											return A2(author$project$Main$findEntity, model, id);
										},
										A2(
											elm$core$List$map,
											function (_n26) {
												var direction = _n26.a;
												var id = _n26.b;
												return id;
											},
											author$project$Components$getExits(
												A2(
													author$project$Main$findEntity,
													model,
													author$project$Engine$getCurrentLocation(model.c))))))));
						var displayLanguage = model.b.b4;
						var currentStageNameAndCoordsList = A2(
							elm$core$Maybe$withDefault,
							_List_Nil,
							A2(
								elm$core$Maybe$map,
								function (x) {
									return _List_fromArray(
										[x]);
								},
								mbCurrentStageNameAndCoords));
						var lPortCmds = _List_fromArray(
							[
								author$project$Leaflet$Ports$filterMarkersCmdPort(
								{
									c5: A2(
										elm$core$Maybe$withDefault,
										_Utils_Tuple2(0, 0),
										A2(
											elm$core$Maybe$map,
											function (rec) {
												return _Utils_Tuple2(rec.at, rec.av);
											},
											model.C)),
									dn: _Utils_ap(exitsNamesAndCoords, currentStageNameAndCoordsList)
								}),
								function () {
								if (!mbCurrentStageNameAndCoords.$) {
									var currInfo = mbCurrentStageNameAndCoords.a;
									return author$project$Leaflet$Ports$setView(
										_Utils_Tuple3(currInfo.b0, model.aK, model.aL));
								} else {
									return elm$core$Platform$Cmd$none;
								}
							}()
							]);
						var _n13 = A2(
							author$project$TypeConverterHelper$mbAttributeToBool,
							model.k,
							A3(author$project$Engine$getInteractableAttribute, 'gameHasEnded', 'gameStateItem', model.c));
						var hasEnded = _n13.a;
						var incidentOnHasEndedConversion = _n13.b;
						var newSettingsModel2 = (hasEnded && (!model.b.dj)) ? A2(author$project$Theme$Settings$update, author$project$ClientTypes$SettingsShowExitToFinalScreenButton, newSettingsModel) : newSettingsModel;
						var _n14 = getMbsuggestInteractionId;
						var mbsuggestInteractionId = _n14.a;
						var incidentOnGetsuggestedInteraction = _n14.b;
						var _n15 = function () {
							var _n16 = A2(
								author$project$TypeConverterHelper$mbAttributeToDictStringListString,
								model.k,
								A3(author$project$Engine$getInteractableAttribute, 'warningMessage', interactableId, model.c));
							var thedict = _n16.a;
							var incidentOnGetDict = _n16.b;
							return _Utils_Tuple2(
								A2(
									elm$core$Maybe$withDefault,
									_List_fromArray(
										['']),
									A2(elm$core$Dict$get, displayLanguage, thedict)),
								incidentOnGetDict);
						}();
						var getAlertMessage2 = _n15.a;
						var incidentOnGetAlertMessage2 = _n15.b;
						var _n17 = A2(
							author$project$TypeConverterHelper$mbAttributeToDictStringListString,
							model.k,
							A3(author$project$Engine$getInteractableAttribute, 'additionalTextDict', interactableId, model.c));
						var additionalTextDict = _n17.a;
						var incidentOnGetAdditionalTextDict = _n17.b;
						var wrapWithHeaderWrittenContentAndAdditionalText = F2(
							function (lgId, mainContent) {
								var _n24 = getTheNarrativeHeaderAndIncident(lgId);
								var header = _n24.a;
								var incident = _n24.b;
								return _Utils_Tuple2(
									header + (('\n' + mainContent) + (('\n' + getTheWrittenContent(lgId)) + ('  \n' + A2(
										elm$core$String$join,
										' ,  \n  ',
										A2(
											elm$core$Maybe$withDefault,
											_List_fromArray(
												['']),
											A2(elm$core$Dict$get, lgId, additionalTextDict)))))),
									incident);
							});
						var _n18 = function () {
							var getIncidentsOnDict = function (thedict) {
								return A3(
									elm$core$Dict$foldl,
									F3(
										function (key, val, acc) {
											var _n22 = val;
											var x = _n22.a;
											var y = _n22.b;
											var incidentmsg = _n22.c;
											return A2(elm$core$List$cons, incidentmsg, acc);
										}),
									_List_Nil,
									thedict);
							};
							var dictFromTemp = function (thedict) {
								return A2(
									elm$core$Dict$map,
									F2(
										function (lgId, val) {
											var _n21 = val;
											var x = _n21.a;
											var y = _n21.b;
											var z = _n21.c;
											return _Utils_Tuple2(x, y);
										}),
									thedict);
							};
							var dict2Temp = A2(
								elm$core$Dict$map,
								F2(
									function (lgId, val) {
										return function (_n20) {
											var x = _n20.a;
											var y = _n20.b;
											return _Utils_Tuple3(x, true, y);
										}(
											A2(wrapWithHeaderWrittenContentAndAdditionalText, lgId, val));
									}),
								A2(
									author$project$Components$getDictLgDescriptions,
									author$project$OurStory$Narrative$desiredLanguages,
									A2(author$project$Main$findEntity, model, interactableId)));
							var incidentsOnDict2 = getIncidentsOnDict(dict2Temp);
							var dict2 = dictFromTemp(dict2Temp);
							var dict1Temp = A2(
								elm$core$Dict$map,
								F2(
									function (lgId, val) {
										return function (_n19) {
											var x = _n19.a;
											var y = _n19.b;
											return _Utils_Tuple3(
												x,
												isLastZip(val),
												y);
										}(
											A2(
												wrapWithHeaderWrittenContentAndAdditionalText,
												lgId,
												A2(
													temporaryHackToSubstitueImgUrl,
													model.r,
													wernerdegroot$listzipper$List$Zipper$current(val))));
									}),
								A2(
									elm$core$Maybe$withDefault,
									elm$core$Dict$empty,
									A2(
										elm$core$Maybe$andThen,
										function (ruleId) {
											return A2(elm$core$Dict$get, ruleId, model.N);
										},
										maybeMatchedRuleId)));
							var incidentsOnDict1 = getIncidentsOnDict(dict1Temp);
							var dict1 = dictFromTemp(dict1Temp);
							return _Utils_Tuple2(
								A2(author$project$Components$mergeDicts, dict2, dict1),
								_Utils_ap(incidentsOnDict1, incidentsOnDict2));
						}();
						var theNarratives = _n18.a;
						var lincidentsOnNarratives = _n18.b;
						var narrativesForThisInteraction = {
							a_: A2(
								elm$core$Dict$map,
								F2(
									function (lgId, val) {
										return _Utils_update(
											val,
											{
												cg: _Utils_ap(model.z, val.cg)
											});
									}),
								A2(
									elm$core$Maybe$withDefault,
									elm$core$Dict$empty,
									A2(
										elm$core$Maybe$andThen,
										function (ruleId) {
											return A2(elm$core$Dict$get, ruleId, model.aH);
										},
										maybeMatchedRuleId))),
							bb: author$project$Components$getClassName(
								A2(author$project$Main$findEntity, model, interactableId)),
							aG: A2(
								author$project$Components$getDictLgNames,
								author$project$OurStory$Narrative$desiredLanguages,
								A2(author$project$Main$findEntity, model, interactableId)),
							cR: mbsuggestInteractionId,
							ac: theNarratives,
							dv: function (lgId) {
								return suggestInteractionCaption(lgId);
							},
							bx: (!_Utils_eq(mbsuggestInteractionId, elm$core$Maybe$Nothing)) ? A2(
								author$project$Components$getDictLgNames,
								author$project$OurStory$Narrative$desiredLanguages,
								A2(
									author$project$Main$findEntity,
									model,
									A2(elm$core$Maybe$withDefault, '', mbsuggestInteractionId))) : elm$core$Dict$empty
						};
						var getAlertMessage1 = function () {
							var _n23 = A2(elm$core$Dict$get, displayLanguage, narrativesForThisInteraction.ac);
							if (_n23.$ === 1) {
								return _List_fromArray(
									['No narrative content for this interaction in the current language. Maybe you want to try channging language !']);
							} else {
								return _List_Nil;
							}
						}();
						var newLanguageStoryLines = function () {
							var nfti = narrativesForThisInteraction;
							var llgssnippets = A2(
								elm$core$List$map,
								function (lgId) {
									return _Utils_Tuple2(
										lgId,
										{
											bb: nfti.bb,
											bc: interactableId,
											bd: A2(
												elm$core$Maybe$withDefault,
												A2(
													elm$core$Maybe$withDefault,
													'noName',
													A2(elm$core$Dict$get, 'en', nfti.aG)),
												A2(elm$core$Dict$get, lgId, nfti.aG)),
											cw: A2(
												elm$core$Maybe$withDefault,
												true,
												A2(
													elm$core$Maybe$map,
													elm$core$Tuple$second,
													A2(elm$core$Dict$get, lgId, nfti.ac))),
											cx: A2(author$project$Engine$isWritable, interactableId, model.c) && _Utils_eq(
												interactionExtraInfo.b3,
												author$project$Engine$getCurrentLocation(model.c)),
											cL: A2(elm$core$Dict$get, lgId, nfti.a_),
											cR: nfti.cR,
											cS: A2(elm$core$Dict$get, lgId, nfti.bx),
											cV: A2(
												elm$core$Maybe$withDefault,
												'',
												A2(
													elm$core$Maybe$map,
													elm$core$Tuple$first,
													A2(elm$core$Dict$get, lgId, nfti.ac))),
											dv: nfti.dv(lgId)
										});
								},
								elm$core$Dict$keys(narrativesForThisInteraction.ac));
							return A3(
								elm$core$List$foldl,
								F2(
									function (x, y) {
										return A2(mergeToDictStoryLine, x, y);
									}),
								model.aa,
								llgssnippets);
						}();
						var getAlertMessages3 = _List_fromArray(
							[incidentOnHasEndedConversion, incidentOnGetsuggestedInteraction, incidentOnGetAdditionalTextDict, incidentOnGetAlertMessage2]);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									d: _Utils_ap(
										getAlertMessage1,
										_Utils_ap(
											getAlertMessage2,
											_Utils_ap(getAlertMessages3, lincidentsOnNarratives))),
									j: newAnswerBoxModel,
									c: newEngineModel,
									N: updatedContent,
									aa: newLanguageStoryLines,
									b: newSettingsModel2
								}),
							((!model.X) && (_Utils_cmp(
								author$project$Engine$getRandomElemsListSize(newEngineModel),
								model.ae) < 0)) ? elm$core$Platform$Cmd$batch(
								_Utils_ap(
									_List_fromArray(
										[
											A2(
											elm$random$Random$generate,
											author$project$ClientTypes$FillRandomElemsList,
											A2(
												elm$random$Random$list,
												model.ae - author$project$Engine$getRandomElemsListSize(newEngineModel),
												A2(elm$random$Random$float, 0, 1)))
										]),
									lPortCmds)) : elm$core$Platform$Cmd$batch(lPortCmds));
					case 26:
						var lfloats = msg.a;
						var newEngineModel = A2(author$project$Engine$addToRandomElemsList, lfloats, model.c);
						var newModel = _Utils_update(
							model,
							{
								c: newEngineModel,
								M: _Utils_ap(model.M, lfloats)
							});
						return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
					case 25:
						var lfloats = msg.a;
						var newModel = A2(author$project$Main$getNewModelAfterGameStartRandomElems, lfloats, model);
						return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
					case 7:
						var theText = msg.a;
						var newAnswerBoxModel = A2(author$project$Theme$AnswerBox$update, theText, model.j);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{j: newAnswerBoxModel}),
							elm$core$Platform$Cmd$none);
					case 8:
						var theLanguage = msg.a;
						var newSettingsModel = A2(
							author$project$Theme$Settings$update,
							author$project$ClientTypes$SetDisplayLanguage(theLanguage),
							model.b);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{b: newSettingsModel}),
							elm$core$Platform$Cmd$none);
					case 9:
						var bdontcheck = msg.a;
						var newSettingsModel = A2(
							author$project$Theme$Settings$update,
							author$project$ClientTypes$SetDontNeedToBeInZone(bdontcheck),
							model.b);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{b: newSettingsModel}),
							elm$core$Platform$Cmd$none);
					case 13:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{d: _List_Nil}),
							elm$core$Platform$Cmd$none);
					case 15:
						var bautoplay = msg.a;
						var newSettingsModel = A2(
							author$project$Theme$Settings$update,
							author$project$ClientTypes$SettingsChangeOptionAutoplay(bautoplay),
							model.b);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{b: newSettingsModel}),
							elm$core$Platform$Cmd$none);
					case 16:
						var bWithSidebar = msg.a;
						var newSettingsModel = A2(
							author$project$Theme$Settings$update,
							author$project$ClientTypes$SettingsLayoutWithSidebar(bWithSidebar),
							model.b);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{b: newSettingsModel}),
							elm$core$Platform$Cmd$none);
					case 17:
						var bUseOnlyButtons = msg.a;
						var newSettingsModel = A2(
							author$project$Theme$Settings$update,
							author$project$ClientTypes$SettingsButtonsOption(bUseOnlyButtons),
							model.b);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{b: newSettingsModel}),
							elm$core$Platform$Cmd$none);
					case 14:
						var newSettingsModel = A2(author$project$Theme$Settings$update, author$project$ClientTypes$SettingsToggleShowExpanded, model.b);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{b: newSettingsModel}),
							elm$core$Platform$Cmd$none);
					case 18:
						var newSettingsModel = A2(author$project$Theme$Settings$update, author$project$ClientTypes$SettingsToggleShowHideSaveLoadBtns, model.b);
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{b: newSettingsModel}),
							elm$core$Platform$Cmd$none);
					case 19:
						return author$project$Main$saveHistoryToStorageHelper(model);
					case 20:
						return _Utils_Tuple2(
							model,
							author$project$Main$sendRequestForStoredHistory(''));
					case 21:
						var obj = msg.a;
						var savedSettings = A2(author$project$Theme$Settings$update, author$project$ClientTypes$SettingsHideExitToFinalScreenButton, model.b);
						var playerName = obj.x;
						var newlist = author$project$Main$convertToListIdExtraInfo(obj.ar);
						var lPrandomFloats = obj.as;
						var _n35 = A5(
							author$project$Main$initWithMbPlayerNameAndMbHistoryList,
							A2(author$project$Main$Flags, model.r, model.z),
							false,
							lPrandomFloats,
							elm$core$Maybe$Just(playerName),
							newlist);
						var newModel = _n35.a;
						var cmds = _n35.b;
						var newModel_ = (!elm$core$List$length(newlist)) ? _Utils_update(
							newModel,
							{
								d: A2(elm$core$List$cons, 'Nothing To Load !', newModel.d)
							}) : _Utils_update(
							newModel,
							{d: _List_Nil});
						return _Utils_Tuple2(newModel_, cmds);
					case 22:
						var ltups = msg.a;
						var savedSettings = msg.b;
						var _n36 = function () {
							if (!ltups.b) {
								return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
							} else {
								var head = ltups.a;
								var rest = ltups.b;
								return A3(
									author$project$Main$updateExtraAndThen,
									author$project$Main$update,
									A2(author$project$ClientTypes$ProcessLoadHistory, rest, savedSettings),
									A3(
										author$project$Main$updateExtraAndThen,
										author$project$Main$update,
										A2(author$project$ClientTypes$InteractStepTwo, head.a, head.b),
										_Utils_Tuple2(
											_Utils_update(
												model,
												{X: true}),
											elm$core$Platform$Cmd$none)));
							}
						}();
						var newModel = _n36.a;
						var cmds = _n36.b;
						return _Utils_Tuple2(
							_Utils_update(
								newModel,
								{X: false, b: savedSettings}),
							cmds);
					case 23:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{an: true}),
							elm$core$Platform$Cmd$none);
					default:
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{au: true}),
							elm$core$Platform$Cmd$none);
				}
			}
		}
	});
var author$project$Main$init = function (flags) {
	return A5(author$project$Main$initWithMbPlayerNameAndMbHistoryList, flags, true, _List_Nil, elm$core$Maybe$Nothing, _List_Nil);
};
var author$project$ClientTypes$LoadHistory = function (a) {
	return {$: 21, a: a};
};
var author$project$ClientTypes$NewCoordsForInterId = function (a) {
	return {$: 10, a: a};
};
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$float = _Json_decodeFloat;
var author$project$Main$getGeolocationFromBrowser = _Platform_incomingPort(
	'getGeolocationFromBrowser',
	A2(
		elm$json$Json$Decode$andThen,
		function (longitude) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (latitude) {
					return A2(
						elm$json$Json$Decode$andThen,
						function (interactableId) {
							return elm$json$Json$Decode$succeed(
								{bc: interactableId, at: latitude, av: longitude});
						},
						A2(elm$json$Json$Decode$field, 'interactableId', elm$json$Json$Decode$string));
				},
				A2(elm$json$Json$Decode$field, 'latitude', elm$json$Json$Decode$float));
		},
		A2(elm$json$Json$Decode$field, 'longitude', elm$json$Json$Decode$float)));
var author$project$Main$getHistoryFromStorage = _Platform_incomingPort(
	'getHistoryFromStorage',
	A2(
		elm$json$Json$Decode$andThen,
		function (playerName) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (lPrandomFloats) {
					return A2(
						elm$json$Json$Decode$andThen,
						function (lInteractions) {
							return elm$json$Json$Decode$succeed(
								{ar: lInteractions, as: lPrandomFloats, x: playerName});
						},
						A2(
							elm$json$Json$Decode$field,
							'lInteractions',
							elm$json$Json$Decode$list(
								A2(
									elm$json$Json$Decode$andThen,
									function (mbMatchedRuleId) {
										return A2(
											elm$json$Json$Decode$andThen,
											function (interactableId) {
												return A2(
													elm$json$Json$Decode$andThen,
													function (inputTextForBackend) {
														return A2(
															elm$json$Json$Decode$andThen,
															function (inputText) {
																return A2(
																	elm$json$Json$Decode$andThen,
																	function (geolocationInfoText) {
																		return A2(
																			elm$json$Json$Decode$andThen,
																			function (currentLocation) {
																				return elm$json$Json$Decode$succeed(
																					{b3: currentLocation, ci: geolocationInfoText, cr: inputText, cs: inputTextForBackend, bc: interactableId, cN: mbMatchedRuleId});
																			},
																			A2(elm$json$Json$Decode$field, 'currentLocation', elm$json$Json$Decode$string));
																	},
																	A2(elm$json$Json$Decode$field, 'geolocationInfoText', elm$json$Json$Decode$string));
															},
															A2(elm$json$Json$Decode$field, 'inputText', elm$json$Json$Decode$string));
													},
													A2(elm$json$Json$Decode$field, 'inputTextForBackend', elm$json$Json$Decode$string));
											},
											A2(elm$json$Json$Decode$field, 'interactableId', elm$json$Json$Decode$string));
									},
									A2(elm$json$Json$Decode$field, 'mbMatchedRuleId', elm$json$Json$Decode$string)))));
				},
				A2(
					elm$json$Json$Decode$field,
					'lPrandomFloats',
					elm$json$Json$Decode$list(elm$json$Json$Decode$float)));
		},
		A2(elm$json$Json$Decode$field, 'playerName', elm$json$Json$Decode$string)));
var elm$core$Platform$Sub$batch = _Platform_batch;
var author$project$Main$subscriptions = function (a) {
	return elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				author$project$Main$getHistoryFromStorage(author$project$ClientTypes$LoadHistory),
				author$project$Main$getGeolocationFromBrowser(author$project$ClientTypes$NewCoordsForInterId)
			]));
};
var author$project$Engine$getCharactersInCurrentLocation = function (_n0) {
	var story = _n0;
	return A2(author$project$Engine$Manifest$getCharactersInLocation, story.b3, story.l);
};
var author$project$Engine$getEndingText = function (_n0) {
	var story = _n0;
	var _n1 = story.aw;
	if (_n1.$ === 1) {
		return elm$core$Maybe$Nothing;
	} else {
		var anEnd = _n1.a;
		var t = anEnd.a;
		var mbs = anEnd.b;
		return elm$core$Maybe$Just(mbs);
	}
};
var author$project$Engine$getItemsInCurrentLocation = function (_n0) {
	var story = _n0;
	return A2(author$project$Engine$Manifest$getItemsInLocation, story.b3, story.l);
};
var author$project$Engine$getItemsInInventory = function (_n0) {
	var story = _n0;
	return A2(author$project$Engine$Manifest$getItemsInCharacterInventory, story.aP, story.l);
};
var author$project$ClientTypes$CloseAlert = {$: 13};
var elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						elm$core$List$cons,
						sep,
						A2(elm$core$List$cons, x, rest));
				});
			var spersed = A3(elm$core$List$foldr, step, _List_Nil, tl);
			return A2(elm$core$List$cons, hd, spersed);
		}
	});
var elm$json$Json$Decode$map = _Json_map1;
var elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$div = _VirtualDom_node('div');
var elm$html$Html$span = _VirtualDom_node('span');
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$class = elm$html$Html$Attributes$stringProperty('className');
var elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
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
var author$project$Theme$AlertMessages$viewAlertMessages = F2(
	function (lAlertMessages, lgId) {
		return elm$core$List$length(lAlertMessages) ? A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('alert')
				]),
			_Utils_ap(
				A2(
					elm$core$List$intersperse,
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
						elm$core$List$map,
						function (x) {
							return elm$html$Html$text(
								A2(author$project$TranslationHelper$getInLanguage, lgId, x));
						},
						lAlertMessages)),
				_List_fromArray(
					[
						A2(
						elm$html$Html$span,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('close'),
								elm$html$Html$Events$onClick(author$project$ClientTypes$CloseAlert)
							]),
						_List_fromArray(
							[
								elm$html$Html$text('X')
							]))
					]))) : elm$html$Html$text('');
	});
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
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$h1 = _VirtualDom_node('h1');
var elm$html$Html$p = _VirtualDom_node('p');
var author$project$Theme$CurrentSummary$view = F6(
	function (currentLocation, props, characters, lAlertMessages, useButtons, lgId) {
		var isEmpty = elm$core$List$isEmpty(characters) && elm$core$List$isEmpty(props);
		var interactableView = F3(
			function (msg, useButtons_, entity) {
				var theText = elm$html$Html$text(
					A2(author$project$Components$getSingleLgDisplayInfo, lgId, entity).E);
				var _do = elm$html$Html$Events$onClick(
					msg(entity.a));
				return useButtons ? A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('CurrentSummary__StoryElement u-selectable')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$button,
							_List_fromArray(
								[_do]),
							_List_fromArray(
								[theText]))
						])) : A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('CurrentSummary__StoryElement u-selectable'),
							_do
						]),
					_List_fromArray(
						[theText]));
			});
		var format = function (list) {
			var interactables = (elm$core$List$length(list) > 2) ? _Utils_ap(
				A2(
					elm$core$List$intersperse,
					elm$html$Html$text(', '),
					A2(
						elm$core$List$take,
						elm$core$List$length(list) - 1,
						list)),
				A2(
					elm$core$List$cons,
					elm$html$Html$text(
						A2(author$project$TranslationHelper$getInLanguage, lgId, '__and__')),
					A2(
						elm$core$List$drop,
						elm$core$List$length(list) - 1,
						list))) : A2(
				elm$core$List$intersperse,
				elm$html$Html$text(
					A2(author$project$TranslationHelper$getInLanguage, lgId, '__and__')),
				list);
			return _Utils_ap(
				interactables,
				_List_fromArray(
					[
						elm$html$Html$text('.')
					]));
		};
		var propsList = (!elm$core$List$isEmpty(props)) ? A2(
			elm$html$Html$p,
			_List_Nil,
			A2(
				elm$core$List$cons,
				elm$html$Html$text(
					A2(author$project$TranslationHelper$getInLanguage, lgId, '__Items_here__')),
				format(
					A2(
						elm$core$List$map,
						A2(interactableView, author$project$ClientTypes$Interact, useButtons),
						props)))) : A2(elm$html$Html$span, _List_Nil, _List_Nil);
		var charactersList = (!elm$core$List$isEmpty(characters)) ? A2(
			elm$html$Html$p,
			_List_Nil,
			A2(
				elm$core$List$cons,
				elm$html$Html$text(
					A2(author$project$TranslationHelper$getInLanguage, lgId, '__Characters_here__')),
				format(
					A2(
						elm$core$List$map,
						A2(interactableView, author$project$ClientTypes$Interact, useButtons),
						characters)))) : A2(elm$html$Html$span, _List_Nil, _List_Nil);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('CurrentSummary')
				]),
			_Utils_ap(
				_List_fromArray(
					[
						A2(
						elm$html$Html$h1,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('Current-location')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								A2(author$project$Components$getSingleLgDisplayInfo, lgId, currentLocation).E)
							]))
					]),
				isEmpty ? _List_fromArray(
					[
						elm$html$Html$text(
						A2(author$project$TranslationHelper$getInLanguage, lgId, '__Nothing_here__'))
					]) : _List_fromArray(
					[charactersList, propsList])));
	});
var elm$html$Html$h3 = _VirtualDom_node('h3');
var elm$html$Html$li = _VirtualDom_node('li');
var elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var elm$html$Html$Keyed$node = elm$virtual_dom$VirtualDom$keyedNode;
var elm$html$Html$Keyed$ol = elm$html$Html$Keyed$node('ol');
var author$project$Theme$Inventory$view = F4(
	function (items, lgId, bWithSidebar, useButtons_) {
		var numItems = elm$core$List$length(items);
		var inventoryItemClasses = bWithSidebar ? 'Inventory__Item u-selectable' : 'Inventory__Item__NoSidebar u-selectable';
		var inventoryClass = bWithSidebar ? 'Inventory' : 'Inventory__NoSidebar';
		var elem = bWithSidebar ? elm$html$Html$li : elm$html$Html$span;
		var inventoryItem = F3(
			function (useButtons, i, entity) {
				var theText = elm$html$Html$text(
					A2(author$project$Components$getSingleLgDisplayInfo, lgId, entity).E);
				var key = _Utils_ap(
					entity.a,
					elm$core$String$fromInt(numItems - i));
				var _do = elm$html$Html$Events$onClick(
					author$project$ClientTypes$Interact(entity.a));
				return useButtons ? _Utils_Tuple2(
					key,
					A2(
						elem,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class(inventoryItemClasses)
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[_do]),
								_List_fromArray(
									[theText]))
							]))) : _Utils_Tuple2(
					key,
					A2(
						elem,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class(inventoryItemClasses),
								_do
							]),
						_List_fromArray(
							[theText])));
			});
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(inventoryClass)
				]),
			_List_fromArray(
				[
					bWithSidebar ? A2(
					elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text(
							A2(author$project$TranslationHelper$getInLanguage, lgId, '__Inventory__'))
						])) : elm$html$Html$text(''),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('Inventory__list')
						]),
					_List_fromArray(
						[
							bWithSidebar ? A2(
							elm$html$Html$Keyed$ol,
							_List_Nil,
							A2(
								elm$core$List$indexedMap,
								inventoryItem(useButtons_),
								items)) : A2(
							elm$html$Html$p,
							_List_Nil,
							A2(
								elm$core$List$cons,
								elm$html$Html$text(
									A2(author$project$TranslationHelper$getInLanguage, lgId, '__Inventory__') + ' : '),
								A2(
									elm$core$List$intersperse,
									elm$html$Html$text(' , '),
									A2(
										elm$core$List$map,
										elm$core$Tuple$second,
										A2(
											elm$core$List$indexedMap,
											inventoryItem(useButtons_),
											items)))))
						]))
				]));
	});
var author$project$GpsUtils$directionToString = function (direction) {
	switch (direction) {
		case 0:
			return 'North';
		case 1:
			return 'NorthEast';
		case 2:
			return 'NorthWest';
		case 3:
			return 'South';
		case 4:
			return 'SouthEast';
		case 5:
			return 'SouthWest';
		case 6:
			return 'East';
		default:
			return 'West';
	}
};
var author$project$Theme$Locations$view = F5(
	function (exits, currentLocation, lgId, bWithSidebar, bUseButtons) {
		var locationsClass = bWithSidebar ? 'Locations' : 'Locations__NoSidebar';
		var interactableView = F4(
			function (msg, entity, direction, bUseButtons_) {
				var elem = bUseButtons_ ? elm$html$Html$button : elm$html$Html$span;
				return A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elem,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('CurrentSummary__StoryElement u-selectable'),
									elm$html$Html$Events$onClick(
									msg(entity.a))
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									A2(author$project$Components$getSingleLgDisplayInfo, lgId, entity).E)
								])),
							elm$html$Html$text(
							' is to the ' + author$project$GpsUtils$directionToString(direction))
						]));
			});
		var formatIt = F2(
			function (bWithSidebarArg, list) {
				var interactables = bWithSidebarArg ? A2(
					elm$core$List$intersperse,
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					list) : A2(
					elm$core$List$intersperse,
					elm$html$Html$text(', '),
					list);
				return bWithSidebarArg ? A2(elm$html$Html$p, _List_Nil, interactables) : A2(
					elm$html$Html$p,
					_List_Nil,
					A2(
						elm$core$List$cons,
						elm$html$Html$text(
							A2(author$project$TranslationHelper$getInLanguage, lgId, 'Connecting locations : ')),
						_Utils_ap(
							interactables,
							_List_fromArray(
								[
									elm$html$Html$text('.')
								]))));
			});
		var theExitsList = (!elm$core$List$isEmpty(exits)) ? A2(
			formatIt,
			bWithSidebar,
			A2(
				elm$core$List$map,
				function (_n0) {
					var direction = _n0.a;
					var entity = _n0.b;
					return A4(interactableView, author$project$ClientTypes$Interact, entity, direction, bUseButtons);
				},
				exits)) : A2(elm$html$Html$span, _List_Nil, _List_Nil);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(locationsClass)
				]),
			_List_fromArray(
				[
					bWithSidebar ? A2(
					elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('Connecting locations')
						])) : elm$html$Html$text(''),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('Locations__list')
						]),
					_List_fromArray(
						[theExitsList]))
				]));
	});
var author$project$ClientTypes$ExitToFinalScreen = {$: 23};
var author$project$Theme$Settings$viewExitToFinalScreenButton = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('title')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						A2(author$project$TranslationHelper$getInLanguage, model.b4, '___EXIT___'))
					])),
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('showHideBtn'),
						elm$html$Html$Events$onClick(author$project$ClientTypes$ExitToFinalScreen)
					]),
				_List_fromArray(
					[
						elm$html$Html$text('Exit')
					]))
			]));
};
var author$project$ClientTypes$ChangeOptionAudioAutoplay = function (a) {
	return {$: 15, a: a};
};
var elm$html$Html$input = _VirtualDom_node('input');
var elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$bool(bool));
	});
var elm$html$Html$Attributes$checked = elm$html$Html$Attributes$boolProperty('checked');
var elm$html$Html$Attributes$type_ = elm$html$Html$Attributes$stringProperty('type');
var elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3(elm$core$List$foldr, elm$json$Json$Decode$field, decoder, fields);
	});
var elm$html$Html$Events$targetChecked = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'checked']),
	elm$json$Json$Decode$bool);
var elm$html$Html$Events$onCheck = function (tagger) {
	return A2(
		elm$html$Html$Events$on,
		'change',
		A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetChecked));
};
var author$project$Theme$Settings$radio = F4(
	function (frommodel, opt, name, msg) {
		return _List_fromArray(
			[
				A2(
				elm$html$Html$input,
				_List_fromArray(
					[
						elm$html$Html$Attributes$type_('radio'),
						elm$html$Html$Attributes$checked(
						_Utils_eq(frommodel, opt)),
						elm$html$Html$Events$onCheck(
						function (_n0) {
							return msg;
						})
					]),
				_List_Nil),
				elm$html$Html$text(name)
			]);
	});
var elm$html$Html$label = _VirtualDom_node('label');
var author$project$Theme$Settings$optionAudioAutoplay = F3(
	function (bautoplay, useOnlyButtons, displayLanguageId) {
		if (useOnlyButtons) {
			var buttonTxt = bautoplay ? elm$html$Html$text(
				A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___CLICK_FOR_NO_AUTOPLAY___')) : elm$html$Html$text(
				A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___CLICK_FOR_AUTOPLAY___'));
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('form-group')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('col-form-label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___AUDIO___'))
							])),
						A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Events$onClick(
										author$project$ClientTypes$ChangeOptionAudioAutoplay(!bautoplay))
									]),
								_List_fromArray(
									[buttonTxt]))
							]))
					]));
		} else {
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('form-group')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('col-form-label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___AUDIO___'))
							])),
						A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('theradios')
									]),
								A4(
									author$project$Theme$Settings$radio,
									bautoplay,
									true,
									'autoplay',
									author$project$ClientTypes$ChangeOptionAudioAutoplay(true))),
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('theradios')
									]),
								A4(
									author$project$Theme$Settings$radio,
									bautoplay,
									false,
									'dont autoplay',
									author$project$ClientTypes$ChangeOptionAudioAutoplay(false)))
							]))
					]));
		}
	});
var author$project$ClientTypes$ChangeOptionDontCheckGps = function (a) {
	return {$: 9, a: a};
};
var author$project$Theme$Settings$optionGpsCheckZone = function (model) {
	if (model.dE) {
		var buttonTxt = model.b7 ? elm$html$Html$text(
			A2(author$project$TranslationHelper$getInLanguage, model.b4, '___CLICK_TO_CHECK_GPS___')) : elm$html$Html$text(
			A2(author$project$TranslationHelper$getInLanguage, model.b4, '___CLICK_TO_NOT_CHECK_GPS___'));
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							A2(author$project$TranslationHelper$getInLanguage, model.b4, '___CHECK_GPS_COORDS___'))
						])),
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$button,
							_List_fromArray(
								[
									elm$html$Html$Events$onClick(
									author$project$ClientTypes$ChangeOptionDontCheckGps(!model.b7))
								]),
							_List_fromArray(
								[buttonTxt]))
						]))
				]));
	} else {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							A2(author$project$TranslationHelper$getInLanguage, model.b4, '___CHECK_GPS_COORDS___'))
						])),
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('theradios')
								]),
							A4(
								author$project$Theme$Settings$radio,
								model.b7,
								true,
								'dont check gps',
								author$project$ClientTypes$ChangeOptionDontCheckGps(true))),
							A2(
							elm$html$Html$div,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('theradios')
								]),
							A4(
								author$project$Theme$Settings$radio,
								model.b7,
								false,
								'check',
								author$project$ClientTypes$ChangeOptionDontCheckGps(false)))
						]))
				]));
	}
};
var author$project$ClientTypes$ChangeOptionDisplayLanguage = function (a) {
	return {$: 8, a: a};
};
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
var elm$html$Html$option = _VirtualDom_node('option');
var elm$html$Html$select = _VirtualDom_node('select');
var elm$html$Html$Attributes$selected = elm$html$Html$Attributes$boolProperty('selected');
var elm$html$Html$Attributes$value = elm$html$Html$Attributes$stringProperty('value');
var elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			elm$virtual_dom$VirtualDom$on,
			event,
			elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var elm$html$Html$Events$targetValue = A2(
	elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	elm$json$Json$Decode$string);
var elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			elm$json$Json$Decode$map,
			elm$html$Html$Events$alwaysStop,
			A2(elm$json$Json$Decode$map, tagger, elm$html$Html$Events$targetValue)));
};
var author$project$Theme$Settings$optionLanguagesView = F3(
	function (availableLanguages, useOnlyButtons, displayLanguageId) {
		return useOnlyButtons ? A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___Language___'))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$select,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('form-control'),
									elm$html$Html$Events$onInput(author$project$ClientTypes$ChangeOptionDisplayLanguage)
								]),
							A2(
								elm$core$List$map,
								function (item) {
									return A2(
										elm$html$Html$option,
										_List_fromArray(
											[
												elm$html$Html$Attributes$selected(
												_Utils_eq(item.ba, displayLanguageId)),
												elm$html$Html$Attributes$value(item.ba)
											]),
										_List_fromArray(
											[
												elm$html$Html$text(item.E)
											]));
								},
								elm$core$Dict$values(
									A2(
										elm$core$Dict$map,
										F2(
											function (k, v) {
												return {ba: k, E: v};
											}),
										availableLanguages))))
						]))
				])) : A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___Language___'))
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('')
						]),
					elm$core$Dict$values(
						A2(
							elm$core$Dict$map,
							F2(
								function (lgId, lg) {
									return A2(
										elm$html$Html$div,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('theradios')
											]),
										A4(
											author$project$Theme$Settings$radio,
											displayLanguageId,
											lgId,
											lg,
											author$project$ClientTypes$ChangeOptionDisplayLanguage(lgId)));
								}),
							availableLanguages)))
				]));
	});
var author$project$ClientTypes$LayoutWithSideBar = function (a) {
	return {$: 16, a: a};
};
var author$project$Theme$Settings$optionLayout = F3(
	function (bWithSidebar, useOnlyButtons, displayLanguageId) {
		if (useOnlyButtons) {
			var buttonTxt = bWithSidebar ? elm$html$Html$text(
				A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___CLICK_FOR_NO_SIDEBAR___')) : elm$html$Html$text(
				A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___CLICK_FOR_SIDEBAR___'));
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('form-group')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('col-form-label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___LAYOUT_OPTIONS___'))
							])),
						A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Events$onClick(
										author$project$ClientTypes$LayoutWithSideBar(!bWithSidebar))
									]),
								_List_fromArray(
									[buttonTxt]))
							]))
					]));
		} else {
			return A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('form-group')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$label,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('col-form-label')
							]),
						_List_fromArray(
							[
								elm$html$Html$text(
								A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___LAYOUT_OPTIONS___'))
							])),
						A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('theradios')
									]),
								A4(
									author$project$Theme$Settings$radio,
									bWithSidebar,
									true,
									'with Sidebar',
									author$project$ClientTypes$LayoutWithSideBar(true))),
								A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('theradios')
									]),
								A4(
									author$project$Theme$Settings$radio,
									bWithSidebar,
									false,
									'no Sidebar',
									author$project$ClientTypes$LayoutWithSideBar(false)))
							]))
					]));
		}
	});
var author$project$ClientTypes$AlterButtonsOption = function (a) {
	return {$: 17, a: a};
};
var author$project$Theme$Settings$optionOnlyButtons = F2(
	function (useOnlyButtons, displayLanguageId) {
		var buttonTxt = useOnlyButtons ? elm$html$Html$text(
			A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___CLICK_FOR_RADIO_BUTTONS___')) : elm$html$Html$text(
			A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___CLICK_FOR_BUTTONS___'));
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('form-group')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$label,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('col-form-label')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(
							A2(author$project$TranslationHelper$getInLanguage, displayLanguageId, '___BUTTON_OPTIONS___'))
						])),
					A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							elm$html$Html$button,
							_List_fromArray(
								[
									elm$html$Html$Events$onClick(
									author$project$ClientTypes$AlterButtonsOption(!useOnlyButtons))
								]),
							_List_fromArray(
								[buttonTxt]))
						]))
				]));
	});
var author$project$Theme$Settings$viewLanguageGpsAudioAndLayoutOptions = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A3(author$project$Theme$Settings$optionLanguagesView, model.bM, model.dE, model.b4),
				model.cj ? author$project$Theme$Settings$optionGpsCheckZone(model) : elm$html$Html$text(''),
				model.bL ? A3(author$project$Theme$Settings$optionAudioAutoplay, model.bK, model.dE, model.b4) : elm$html$Html$text(''),
				A3(author$project$Theme$Settings$optionLayout, model.cC, model.dE, model.b4),
				A2(author$project$Theme$Settings$optionOnlyButtons, model.dE, model.b4)
			]));
};
var author$project$ClientTypes$RequestForStoredHistory = {$: 20};
var author$project$ClientTypes$SaveHistory = {$: 19};
var author$project$ClientTypes$ToggleShowHideSaveLoadBtns = {$: 18};
var author$project$Theme$Settings$viewShowHideSaveLoad = function (model) {
	var theText = model.dl ? 'Hide' : 'Show';
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				elm$html$Html$button,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('showHideBtn'),
						elm$html$Html$Events$onClick(author$project$ClientTypes$ToggleShowHideSaveLoadBtns)
					]),
				_List_fromArray(
					[
						elm$html$Html$text(theText)
					]))
			]));
};
var author$project$Theme$Settings$viewSaveLoadButtons = function (model) {
	return A2(
		elm$html$Html$div,
		_List_Nil,
		_List_fromArray(
			[
				model.cC ? A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text(
						A2(author$project$TranslationHelper$getInLanguage, model.b4, '___SAVE_LOAD___'))
					])) : A2(
				elm$html$Html$label,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('col-form-label')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						A2(author$project$TranslationHelper$getInLanguage, model.b4, '___SAVE_LOAD___'))
					])),
				author$project$Theme$Settings$viewShowHideSaveLoad(model),
				model.dl ? A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('saveBtn'),
										elm$html$Html$Events$onClick(author$project$ClientTypes$SaveHistory)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Save')
									]))
							])),
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class('')
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('loadBtn'),
										elm$html$Html$Events$onClick(author$project$ClientTypes$RequestForStoredHistory)
									]),
								_List_fromArray(
									[
										elm$html$Html$text('Load')
									]))
							])),
						A2(elm$html$Html$br, _List_Nil, _List_Nil)
					])) : elm$html$Html$text('')
			]));
};
var author$project$ClientTypes$ToggleShowExpandedSettings = {$: 14};
var elm$html$Html$a = _VirtualDom_node('a');
var author$project$Theme$Settings$viewShowHideSettingsOptions = function (model) {
	var theText = model.dk ? '(Hide)' : '(Show)';
	return A2(
		elm$html$Html$a,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('u-selectable'),
				elm$html$Html$Events$onClick(author$project$ClientTypes$ToggleShowExpandedSettings)
			]),
		_List_fromArray(
			[
				elm$html$Html$text(theText)
			]));
};
var author$project$Theme$Settings$view = function (model) {
	var settingsClassStr = model.cC ? 'Settings' : 'Settings__NoSidebar';
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(settingsClassStr)
			]),
		_List_fromArray(
			[
				model.dj ? author$project$Theme$Settings$viewExitToFinalScreenButton(model) : elm$html$Html$text(''),
				A2(
				elm$html$Html$h3,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class('title')
					]),
				_List_fromArray(
					[
						elm$html$Html$text(
						A2(author$project$TranslationHelper$getInLanguage, model.b4, '___Settings___')),
						elm$html$Html$text('  '),
						author$project$Theme$Settings$viewShowHideSettingsOptions(model)
					])),
				model.dk ? A2(
				elm$html$Html$div,
				_List_Nil,
				_List_fromArray(
					[
						author$project$Theme$Settings$viewLanguageGpsAudioAndLayoutOptions(model),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						model.dg ? author$project$Theme$Settings$viewSaveLoadButtons(model) : elm$html$Html$text('')
					])) : elm$html$Html$text('')
			]));
};
var author$project$Theme$Layout$viewExtraInfo = F2(
	function (displayState, layoutClassStr) {
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(layoutClassStr)
				]),
			_List_fromArray(
				[
					A5(author$project$Theme$Locations$view, displayState.cd, displayState.b3, displayState.b.b4, displayState.b.cC, displayState.b.dE),
					A4(author$project$Theme$Inventory$view, displayState.cA, displayState.b.b4, displayState.b.cC, displayState.b.dE),
					displayState.b.cC ? author$project$Theme$Settings$view(displayState.b) : elm$html$Html$text('')
				]));
	});
var elm$html$Html$audio = _VirtualDom_node('audio');
var elm$html$Html$Attributes$autoplay = elm$html$Html$Attributes$boolProperty('autoplay');
var elm$html$Html$Attributes$controls = elm$html$Html$Attributes$boolProperty('controls');
var elm$html$Html$Attributes$src = function (url) {
	return A2(
		elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var author$project$Theme$Layout$viewMbAudioFile = F2(
	function (mbAudioFileInfo, audioAutoplay) {
		var audioHtml = A2(
			elm$core$Maybe$withDefault,
			A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						elm$html$Html$text('')
					])),
			A2(
				elm$core$Maybe$map,
				function (fileinfo) {
					return A2(
						elm$html$Html$div,
						_List_Nil,
						_List_fromArray(
							[
								A2(
								elm$html$Html$audio,
								_List_fromArray(
									[
										elm$html$Html$Attributes$src(fileinfo.cg),
										elm$html$Html$Attributes$controls(true),
										elm$html$Html$Attributes$autoplay(audioAutoplay)
									]),
								_List_Nil)
							]));
				},
				mbAudioFileInfo));
		var out = A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							(!_Utils_eq(mbAudioFileInfo, elm$core$Maybe$Nothing)) ? elm$html$Html$text('Audio : ') : elm$html$Html$text('')
						])),
					audioHtml
				]));
		return out;
	});
var author$project$ClientTypes$InteractSendingText = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$ClientTypes$NewUserSubmitedText = function (a) {
	return {$: 7, a: a};
};
var elm$html$Html$Attributes$autofocus = elm$html$Html$Attributes$boolProperty('autofocus');
var elm$html$Html$Attributes$placeholder = elm$html$Html$Attributes$stringProperty('placeholder');
var author$project$Theme$AnswerBox$view = F6(
	function (answerboxtext, lgId, showHeaders, mbInteractableId, mbPlaceHolderText, className) {
		var placeHolderText = function () {
			if (mbPlaceHolderText.$ === 1) {
				return '___type_answer___';
			} else {
				var txt = mbPlaceHolderText.a;
				return txt;
			}
		}();
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class(className)
				]),
			_List_fromArray(
				[
					showHeaders ? A2(
					elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('Text Box')
						])) : elm$html$Html$text(''),
					A2(
					elm$html$Html$input,
					_List_fromArray(
						[
							elm$html$Html$Attributes$type_('text'),
							elm$html$Html$Attributes$placeholder(
							A2(author$project$TranslationHelper$getInLanguage, lgId, placeHolderText)),
							elm$html$Html$Attributes$autofocus(true),
							elm$html$Html$Attributes$value(
							A2(elm$core$Maybe$withDefault, '', answerboxtext)),
							elm$html$Html$Events$onInput(author$project$ClientTypes$NewUserSubmitedText)
						]),
					_List_Nil),
					function () {
					if (!mbInteractableId.$) {
						var theId = mbInteractableId.a;
						return A2(
							elm$html$Html$button,
							_List_fromArray(
								[
									elm$html$Html$Events$onClick(
									A2(
										author$project$ClientTypes$InteractSendingText,
										theId,
										A2(elm$core$Maybe$withDefault, '', answerboxtext)))
								]),
							_List_fromArray(
								[
									elm$html$Html$text('OK')
								]));
					} else {
						return elm$html$Html$text('');
					}
				}()
				]));
	});
var elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === -2) {
		return true;
	} else {
		return false;
	}
};
var elm$html$Html$h4 = _VirtualDom_node('h4');
var elm$html$Html$h5 = _VirtualDom_node('h5');
var elm$html$Html$Attributes$classList = function (classes) {
	return elm$html$Html$Attributes$class(
		A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(elm$core$List$filter, elm$core$Tuple$second, classes))));
};
var elm_explorations$markdown$Markdown$defaultOptions = {
	a4: elm$core$Maybe$Nothing,
	a8: elm$core$Maybe$Just(
		{bP: false, dw: false}),
	df: true,
	bv: false
};
var elm_explorations$markdown$Markdown$toHtmlWith = _Markdown_toHtml;
var author$project$Theme$Storyline$view = F7(
	function (storyLine, lgId, showTextBoxInStoryline, mbplaceholdertext, mbanswerboxtext, answerOptionsDict, ending) {
		var storyLi = F2(
			function (i, _n2) {
				var interactableName = _n2.bd;
				var interactableId = _n2.bc;
				var isWritable = _n2.cx;
				var interactableCssSelector = _n2.bb;
				var narrative = _n2.cV;
				var mbAudio = _n2.cL;
				var mbSuggestedInteractionId = _n2.cR;
				var suggestedInteractionCaption = _n2.dv;
				var mbSuggestedInteractionName = _n2.cS;
				var isLastInZipper = _n2.cw;
				var viewMbSuggestedInteraction = function () {
					if (!i) {
						if (!mbSuggestedInteractionId.$) {
							var suggestedInteractableId = mbSuggestedInteractionId.a;
							return A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('textRight')
									]),
								_List_fromArray(
									[
										A2(
										elm$html$Html$p,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('suggestInteraction')
											]),
										_List_fromArray(
											[
												elm$html$Html$text(suggestedInteractionCaption)
											])),
										A2(
										elm$html$Html$a,
										_List_fromArray(
											[
												elm$html$Html$Attributes$class('suggestedInteractionLink'),
												elm$html$Html$Events$onClick(
												author$project$ClientTypes$Interact(suggestedInteractableId))
											]),
										_List_fromArray(
											[
												elm$html$Html$text(
												A2(elm$core$Maybe$withDefault, suggestedInteractableId, mbSuggestedInteractionName))
											]))
									]));
						} else {
							return elm$html$Html$text('');
						}
					} else {
						return elm$html$Html$text('');
					}
				}();
				var viewMbMoreLink = ((!i) && (!isLastInZipper)) ? A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('textCenter')
						]),
					_List_fromArray(
						[
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Attributes$class('moreLink'),
									elm$html$Html$Events$onClick(
									author$project$ClientTypes$Interact(interactableId))
								]),
							_List_fromArray(
								[
									elm$html$Html$text(
									A2(author$project$TranslationHelper$getInLanguage, lgId, '___more___'))
								]))
						])) : elm$html$Html$text('');
				var viewMbAnswerButtons = ((!i) && (!elm$core$Dict$isEmpty(answerOptionsDict))) ? A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('OptionButton')
						]),
					A2(
						elm$core$List$map,
						function (_n0) {
							var txtval = _n0.a;
							var txtDisp = _n0.b;
							return A2(
								elm$html$Html$button,
								_List_fromArray(
									[
										elm$html$Html$Events$onClick(
										A2(author$project$ClientTypes$InteractSendingText, interactableId, txtval))
									]),
								_List_fromArray(
									[
										elm$html$Html$text(txtDisp)
									]));
						},
						A2(
							elm$core$Maybe$withDefault,
							_List_Nil,
							A2(elm$core$Dict$get, lgId, answerOptionsDict)))) : A2(
					elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('')
						]));
				var viewMbAnswerBox = ((!i) && (isWritable && showTextBoxInStoryline)) ? A6(
					author$project$Theme$AnswerBox$view,
					mbanswerboxtext,
					lgId,
					false,
					elm$core$Maybe$Just(interactableId),
					mbplaceholdertext,
					'AnswerBoxInStoryLine2') : elm$html$Html$text('');
				var options = function () {
					var dOptions = elm_explorations$markdown$Markdown$defaultOptions;
					return _Utils_update(
						dOptions,
						{df: true});
				}();
				var numLines = elm$core$List$length(storyLine);
				var markdownToSanitizedHtml = F2(
					function (lattrs, userInput) {
						return A3(elm_explorations$markdown$Markdown$toHtmlWith, options, lattrs, userInput);
					});
				var key = _Utils_ap(
					interactableName,
					elm$core$String$fromInt(numLines - i));
				var classes = _List_fromArray(
					[
						_Utils_Tuple2('Storyline__Item', true),
						_Utils_Tuple2('Storyline__Item--' + interactableCssSelector, true),
						_Utils_Tuple2('u-fade-in', !i)
					]);
				return _Utils_Tuple2(
					key,
					A2(
						elm$html$Html$li,
						_List_fromArray(
							[
								elm$html$Html$Attributes$classList(classes)
							]),
						_Utils_ap(
							_List_fromArray(
								[
									A2(
									elm$html$Html$h4,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('Storyline__Item__Action')
										]),
									_List_fromArray(
										[
											elm$html$Html$text(interactableName)
										])),
									A2(
									markdownToSanitizedHtml,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('Storyline__Item__Narrative markdown-body')
										]),
									narrative),
									viewMbAnswerBox,
									viewMbAnswerButtons,
									viewMbMoreLink,
									viewMbSuggestedInteraction
								]),
							((!i) && (!_Utils_eq(ending, elm$core$Maybe$Nothing))) ? _List_fromArray(
								[
									A2(
									elm$html$Html$h5,
									_List_fromArray(
										[
											elm$html$Html$Attributes$class('Storyline__Item__Ending')
										]),
									_List_fromArray(
										[
											elm$html$Html$text(
											A2(elm$core$Maybe$withDefault, 'The End', ending))
										]))
								]) : _List_Nil)));
			});
		return A2(
			elm$html$Html$Keyed$ol,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('Storyline')
				]),
			A2(elm$core$List$indexedMap, storyLi, storyLine));
	});
var author$project$Theme$Layout$view = function (displayState) {
	var _n0 = displayState.cC ? _Utils_Tuple2('Layout', 'Layout__Main') : _Utils_Tuple2('Layout__NoSidebar', 'Layout__Main__NoSidebar');
	var layoutClass = _n0.a;
	var layoutMainClass = _n0.b;
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class(
				'GamePage GamePage--' + author$project$Components$getClassName(displayState.b3))
			]),
		_List_fromArray(
			[
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class(
						'GamePage__background GamePage__background--' + author$project$Components$getClassName(displayState.b3))
					]),
				_List_Nil),
				A2(
				elm$html$Html$div,
				_List_fromArray(
					[
						elm$html$Html$Attributes$class(layoutClass)
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_fromArray(
							[
								elm$html$Html$Attributes$class(layoutMainClass)
							]),
						_List_fromArray(
							[
								(!displayState.b.cC) ? A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$class('')
									]),
								_List_fromArray(
									[
										author$project$Theme$Settings$view(displayState.b)
									])) : elm$html$Html$text(''),
								A6(author$project$Theme$CurrentSummary$view, displayState.b3, displayState.cz, displayState.bV, displayState.d, displayState.b.dE, displayState.b.b4),
								(!displayState.cC) ? A2(author$project$Theme$Layout$viewExtraInfo, displayState, 'Layout__NoSidebar__ExtraInfo') : elm$html$Html$text(''),
								A2(author$project$Theme$Layout$viewMbAudioFile, displayState.cM, displayState.bK),
								A2(author$project$Theme$AlertMessages$viewAlertMessages, displayState.d, displayState.b.b4),
								A7(author$project$Theme$Storyline$view, displayState.dr, displayState.b.b4, displayState.bO, displayState.cT, displayState.bD, displayState.bH, displayState.cc)
							])),
						displayState.cC ? A2(author$project$Theme$Layout$viewExtraInfo, displayState, 'Layout__Sidebar') : elm$html$Html$text('')
					]))
			]));
};
var author$project$TypeConverterHelper$mbAttributeToMbDictStringListStringString = F2(
	function (doDebug, mbAttrVal) {
		if (mbAttrVal.$ === 1) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, '');
		} else {
			if (mbAttrVal.a.$ === 5) {
				var ds = mbAttrVal.a.a;
				return _Utils_Tuple2(
					elm$core$Maybe$Just(ds),
					'');
			} else {
				return A3(author$project$TypeConverterHelper$addConversionFailureMessage, doDebug, 'Trying to convert an attribute which is not of type ADictStringLSS to a Dict String (List (String , String )) ', elm$core$Maybe$Nothing);
			}
		}
	});
var author$project$TypeConverterHelper$mbAttributeToDictStringListStringString = F2(
	function (doDebug, mbAttrVal) {
		return function (_n0) {
			var x = _n0.a;
			var y = _n0.b;
			return _Utils_Tuple2(
				A2(elm$core$Maybe$withDefault, elm$core$Dict$empty, x),
				y);
		}(
			A2(author$project$TypeConverterHelper$mbAttributeToMbDictStringListStringString, doDebug, mbAttrVal));
	});
var author$project$Main$viewMainGame = function (model) {
	var theStoryLine = A2(
		elm$core$Maybe$withDefault,
		_List_Nil,
		A2(elm$core$Dict$get, model.b.b4, model.aa));
	var mbInteactableIdAtTop = A2(
		elm$core$Maybe$map,
		function ($) {
			return $.bc;
		},
		elm$core$List$head(theStoryLine));
	var currentLocation = A2(
		author$project$Main$findEntity,
		model,
		author$project$Engine$getCurrentLocation(model.c));
	var _n0 = function () {
		if (mbInteactableIdAtTop.$ === 1) {
			return _Utils_Tuple2(elm$core$Maybe$Nothing, '');
		} else {
			var interactableId = mbInteactableIdAtTop.a;
			return A2(
				author$project$TypeConverterHelper$mbAttributeToMbString,
				model.k,
				A3(author$project$Engine$getInteractableAttribute, 'placeholderText', interactableId, model.c));
		}
	}();
	var mbTextBoxPlaceholderText_ = _n0.a;
	var incidentOnPlaceholderTextConversion = _n0.b;
	var _n2 = A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(elm$core$Dict$empty, ''),
		A2(
			elm$core$Maybe$map,
			author$project$TypeConverterHelper$mbAttributeToDictStringListStringString(model.k),
			A2(
				elm$core$Maybe$map,
				function (x) {
					return A3(author$project$Engine$getInteractableAttribute, 'answerOptionsList', x, model.c);
				},
				mbInteactableIdAtTop)));
	var answerOptionsDict_ = _n2.a;
	var incidentOnGetAnswerOptionsDict = _n2.b;
	var displayState = {
		d: A2(
			elm$core$List$filter,
			function (x) {
				return x !== '';
			},
			_Utils_ap(
				model.d,
				_List_fromArray(
					[incidentOnPlaceholderTextConversion, incidentOnGetAnswerOptionsDict]))),
		bD: model.j.bE,
		bH: answerOptionsDict_,
		bK: model.b.bK,
		bO: function () {
			if (mbInteactableIdAtTop.$ === 1) {
				return false;
			} else {
				var interactableId = mbInteactableIdAtTop.a;
				return A2(author$project$Engine$isWritable, interactableId, model.c) && (!_Utils_eq(
					A2(elm$core$Dict$get, interactableId, model.i),
					elm$core$Maybe$Just(author$project$Types$WaitingForInfoRequested)));
			}
		}(),
		bV: A2(
			elm$core$List$map,
			author$project$Main$findEntity(model),
			author$project$Engine$getCharactersInCurrentLocation(model.c)),
		b3: currentLocation,
		cc: author$project$Engine$getEndingText(model.c),
		cd: A2(
			elm$core$List$map,
			function (_n4) {
				var direction = _n4.a;
				var id = _n4.b;
				return _Utils_Tuple2(
					direction,
					A2(author$project$Main$findEntity, model, id));
			},
			author$project$Components$getExits(currentLocation)),
		cz: A2(
			elm$core$List$map,
			author$project$Main$findEntity(model),
			author$project$Engine$getItemsInCurrentLocation(model.c)),
		cA: A2(
			elm$core$List$map,
			author$project$Main$findEntity(model),
			author$project$Engine$getItemsInInventory(model.c)),
		cC: model.b.cC,
		cM: A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			A2(
				elm$core$Maybe$map,
				function ($) {
					return $.cL;
				},
				elm$core$List$head(theStoryLine))),
		cT: mbTextBoxPlaceholderText_,
		b: model.b,
		dr: theStoryLine
	};
	return (!model.au) ? A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$class('Loading')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Loading...')
			])) : author$project$Theme$Layout$view(displayState);
};
var author$project$ClientTypes$StartMainGameNewPlayerName = function (a) {
	return {$: 1, a: a};
};
var author$project$Theme$StartScreen$options = function () {
	var dOptions = elm_explorations$markdown$Markdown$defaultOptions;
	return _Utils_update(
		dOptions,
		{df: true});
}();
var elm$html$Html$img = _VirtualDom_node('img');
var author$project$Theme$StartScreen$view = F3(
	function (baseImgUrl, startScreenInfo, answerBoxModel) {
		var imgUrl = (baseImgUrl === '') ? ('img/' + startScreenInfo.bf) : _Utils_ap(baseImgUrl, startScreenInfo.bf);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('TitlePage')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$h1,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('TitlePage__Title')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(startScreenInfo.dA),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							elm$html$Html$text(startScreenInfo.dB)
						])),
					A2(
					elm$html$Html$h3,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('TitlePage__Byline')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(startScreenInfo.bQ)
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('TitlePage__Prologue markdown-body')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text(startScreenInfo.dm)
								])),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(
							elm$html$Html$img,
							_List_fromArray(
								[
									elm$html$Html$Attributes$src(imgUrl),
									elm$html$Html$Attributes$class('StartScreenImage')
								]),
							_List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A3(elm_explorations$markdown$Markdown$toHtmlWith, author$project$Theme$StartScreen$options, _List_Nil, startScreenInfo.dG)
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('textCenter')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$h3,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text('Please type your name to start game : ')
								])),
							A6(
							author$project$Theme$AnswerBox$view,
							answerBoxModel.bE,
							'pt',
							false,
							elm$core$Maybe$Nothing,
							elm$core$Maybe$Just(startScreenInfo.dx),
							'AnswerBoxStartScreen')
						])),
					A2(
					elm$html$Html$span,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('TitlePage__StartGame'),
							elm$html$Html$Events$onClick(
							author$project$ClientTypes$StartMainGameNewPlayerName(
								A2(
									elm$core$Maybe$withDefault,
									'',
									function (mbx) {
										return _Utils_eq(
											mbx,
											elm$core$Maybe$Just('')) ? elm$core$Maybe$Nothing : mbx;
									}(
										A2(elm$core$Maybe$map, elm$core$String$trim, answerBoxModel.bE)))))
						]),
					_List_fromArray(
						[
							elm$html$Html$text('Play ')
						]))
				]));
	});
var author$project$Main$viewStartScreen = F2(
	function (baseImgUrl, model) {
		return A3(author$project$Theme$StartScreen$view, baseImgUrl, model.aU, model.j);
	});
var author$project$Theme$EndScreen$view = F2(
	function (baseImgUrl, endScreenInfo) {
		var imgUrl = (baseImgUrl === '') ? ('img/' + endScreenInfo.bf) : _Utils_ap(baseImgUrl, endScreenInfo.bf);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$class('TitlePage')
				]),
			_List_fromArray(
				[
					A2(
					elm$html$Html$h1,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('TitlePage__Title')
						]),
					_List_fromArray(
						[
							elm$html$Html$text(endScreenInfo.b_),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							elm$html$Html$text(endScreenInfo.b$)
						])),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$class('TitlePage__Prologue markdown-body')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$p,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text(endScreenInfo.cb)
								])),
							A2(
							elm$html$Html$img,
							_List_fromArray(
								[
									elm$html$Html$Attributes$src(imgUrl),
									elm$html$Html$Attributes$class('StartScreenImage')
								]),
							_List_Nil)
						]))
				]));
	});
var author$project$Main$view = function (model) {
	return model.ao ? A2(author$project$Main$viewStartScreen, model.r, model) : (model.an ? A2(author$project$Theme$EndScreen$view, model.r, model.aE) : author$project$Main$viewMainGame(model));
};
var elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var elm$browser$Browser$Dom$NotFound = elm$core$Basics$identity;
var elm$core$Basics$never = function (_n0) {
	never:
	while (true) {
		var nvr = _n0;
		var $temp$_n0 = nvr;
		_n0 = $temp$_n0;
		continue never;
	}
};
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
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
var elm$core$String$startsWith = _String_startsWith;
var elm$url$Url$Http = 0;
var elm$url$Url$Https = 1;
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
		return {a7: fragment, a9: host, bk: path, bn: port_, bq: protocol, br: query};
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
					if (_n1.$ === 1) {
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
		0,
		A2(elm$core$String$dropLeft, 7, str)) : (A2(elm$core$String$startsWith, 'https://', str) ? A2(
		elm$url$Url$chompAfterProtocol,
		1,
		A2(elm$core$String$dropLeft, 8, str)) : elm$core$Maybe$Nothing);
};
var elm$browser$Browser$element = _Browser_element;
var author$project$Main$main = elm$browser$Browser$element(
	{cq: author$project$Main$init, dt: author$project$Main$subscriptions, dC: author$project$Main$update, dF: author$project$Main$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (baseSoundUrl) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (baseImgUrl) {
					return elm$json$Json$Decode$succeed(
						{r: baseImgUrl, z: baseSoundUrl});
				},
				A2(elm$json$Json$Decode$field, 'baseImgUrl', elm$json$Json$Decode$string));
		},
		A2(elm$json$Json$Decode$field, 'baseSoundUrl', elm$json$Json$Decode$string)))(0)}});}(this));