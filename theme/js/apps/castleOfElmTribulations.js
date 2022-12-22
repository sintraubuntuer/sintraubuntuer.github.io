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
	if (region.bN.aI === region.cb.aI)
	{
		return 'on line ' + region.bN.aI;
	}
	return 'on lines ' + region.bN.aI + ' through ' + region.cb.aI;
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
	if (typeof x.$ === 'undefined')
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




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.dr,
		impl.ei,
		impl.d$,
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
		K: func(record.K),
		bO: record.bO,
		bE: record.bE
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
		var message = !tag ? value : tag < 3 ? value.a : value.K;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.bO;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.bE) && event.preventDefault(),
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
		impl.dr,
		impl.ei,
		impl.d$,
		function(sendToApp, initialModel) {
			var view = impl.el;
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
		impl.dr,
		impl.ei,
		impl.d$,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.aL && impl.aL(sendToApp)
			var view = impl.el;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.c2);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.ea) && (_VirtualDom_doc.title = title = doc.ea);
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
	var onUrlChange = impl.dK;
	var onUrlRequest = impl.dL;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		aL: function(sendToApp)
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
							&& curr.cG === next.cG
							&& curr.cj === next.cj
							&& curr.cC.a === next.cC.a
						)
							? elm$browser$Browser$Internal(next)
							: elm$browser$Browser$External(href)
					));
				}
			});
		},
		dr: function(flags)
		{
			return A3(impl.dr, flags, _Browser_getUrl(), key);
		},
		el: impl.el,
		ei: impl.ei,
		d$: impl.d$
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
		? { dk: 'hidden', c4: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { dk: 'mozHidden', c4: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { dk: 'msHidden', c4: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { dk: 'webkitHidden', c4: 'webkitvisibilitychange' }
		: { dk: 'hidden', c4: 'visibilitychange' };
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
		cP: _Browser_getScene(),
		cY: {
			bk: _Browser_window.pageXOffset,
			bl: _Browser_window.pageYOffset,
			cZ: _Browser_doc.documentElement.clientWidth,
			ch: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		cZ: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		ch: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
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
			cP: {
				cZ: node.scrollWidth,
				ch: node.scrollHeight
			},
			cY: {
				bk: node.scrollLeft,
				bl: node.scrollTop,
				cZ: node.clientWidth,
				ch: node.clientHeight
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
			cP: _Browser_getScene(),
			cY: {
				bk: x,
				bl: y,
				cZ: _Browser_doc.documentElement.clientWidth,
				ch: _Browser_doc.documentElement.clientHeight
			},
			db: {
				bk: x + rect.left,
				bl: y + rect.top,
				cZ: rect.width,
				ch: rect.height
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
var andrewMacmurray$elm_delay$Delay$Millisecond = 0;
var andrewMacmurray$elm_delay$Delay$Duration = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
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
var elm$core$Process$sleep = _Process_sleep;
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Task$Perform = elm$core$Basics$identity;
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(0);
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
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
var elm$core$Task$andThen = _Scheduler_andThen;
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
var elm$core$Basics$False = 1;
var elm$core$Basics$True = 0;
var elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
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
var elm$core$Basics$eq = _Utils_equal;
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
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.b) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.e),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.e);
		} else {
			var treeLen = builder.b * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.g) : builder.g;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.b);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.e) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.e);
		}
	});
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{g: nodeList, b: (len / elm$core$Array$branchFactor) | 0, e: tail});
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
var elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var elm$core$Maybe$Nothing = {$: 1};
var elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
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
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$append = _Utils_append;
var elm$core$Basics$or = _Basics_or;
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
var elm$core$String$fromInt = _String_fromNumber;
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
var elm$core$Platform$sendToApp = _Platform_sendToApp;
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
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			A2(elm$core$Task$map, toMessage, task));
	});
var andrewMacmurray$elm_delay$Delay$after_ = F2(
	function (time, msg) {
		return A2(
			elm$core$Task$perform,
			elm$core$Basics$always(msg),
			elm$core$Process$sleep(time));
	});
var andrewMacmurray$elm_delay$Delay$Minute = 2;
var andrewMacmurray$elm_delay$Delay$Second = 1;
var andrewMacmurray$elm_delay$Delay$toMillis = function (_n0) {
	var t = _n0.a;
	var u = _n0.b;
	switch (u) {
		case 0:
			return t;
		case 1:
			return 1000 * t;
		case 2:
			return andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, 60 * t, 1));
		default:
			return andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, 60 * t, 2));
	}
};
var andrewMacmurray$elm_delay$Delay$after = F3(
	function (time, unit, msg) {
		return A2(
			andrewMacmurray$elm_delay$Delay$after_,
			andrewMacmurray$elm_delay$Delay$toMillis(
				A2(andrewMacmurray$elm_delay$Delay$Duration, time, unit)),
			msg);
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var author$project$Algorithms$CustomIndexMinPriorityQueue$createEmptyCustomIndexMinPriorityQueue = function (maxsize) {
	return {f: elm$core$Dict$empty, aJ: maxsize, c: elm$core$Dict$empty, n: elm$core$Dict$empty, bc: 0};
};
var elm$core$Basics$compare = _Utils_compare;
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
var elm$core$Dict$Black = 1;
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
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
var author$project$Algorithms$CustomIndexMinPriorityQueue$exchange = F3(
	function (i, j, thepqueue) {
		var newPqj = A2(elm$core$Dict$get, i, thepqueue.c);
		var newPqi = A2(elm$core$Dict$get, j, thepqueue.c);
		var newQp = function () {
			var _n1 = _Utils_Tuple2(newPqi, newPqj);
			if ((!_n1.a.$) && (!_n1.b.$)) {
				var npqi = _n1.a.a;
				var npqj = _n1.b.a;
				return A3(
					elm$core$Dict$update,
					npqj,
					function (_n3) {
						return elm$core$Maybe$Just(j);
					},
					A3(
						elm$core$Dict$update,
						npqi,
						function (_n2) {
							return elm$core$Maybe$Just(i);
						},
						thepqueue.n));
			} else {
				return thepqueue.n;
			}
		}();
		var newPq = function () {
			var _n0 = _Utils_Tuple2(newPqi, newPqj);
			if ((!_n0.a.$) && (!_n0.b.$)) {
				var npqi = _n0.a.a;
				var npqj = _n0.b.a;
				return A3(
					elm$core$Dict$insert,
					j,
					npqj,
					A3(elm$core$Dict$insert, i, npqi, thepqueue.c));
			} else {
				return thepqueue.c;
			}
		}();
		var newpqueue = _Utils_update(
			thepqueue,
			{c: newPq, n: newQp});
		return newpqueue;
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluate = {$: 4};
var author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluateBothIndexOutOfTheQueue = {$: 3};
var author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluateFirstIndexOutOfTheQueue = {$: 1};
var author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluateSecondIndexOutOfTheQueue = {$: 2};
var author$project$Algorithms$CustomIndexMinPriorityQueue$EvaluateTo = function (a) {
	return {$: 0, a: a};
};
var author$project$Algorithms$CustomIndexMinPriorityQueue$greater = F4(
	function (i, j, compareFunc, thepqueue) {
		var _n0 = _Utils_Tuple2(
			A2(elm$core$Dict$get, i, thepqueue.c),
			A2(elm$core$Dict$get, j, thepqueue.c));
		if (!_n0.a.$) {
			if (!_n0.b.$) {
				var pqi = _n0.a.a;
				var pqj = _n0.b.a;
				var _n1 = _Utils_Tuple2(
					A2(elm$core$Dict$get, pqi, thepqueue.f),
					A2(elm$core$Dict$get, pqj, thepqueue.f));
				if (!_n1.a.$) {
					if (!_n1.b.$) {
						var aval1 = _n1.a.a;
						var aval2 = _n1.b.a;
						return author$project$Algorithms$CustomIndexMinPriorityQueue$EvaluateTo(
							A2(compareFunc, aval1, aval2) === 2);
					} else {
						var aval1 = _n1.a.a;
						var _n2 = _n1.b;
						return author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluate;
					}
				} else {
					if (!_n1.b.$) {
						var _n3 = _n1.a;
						var aval2 = _n1.b.a;
						return author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluate;
					} else {
						var _n4 = _n1.a;
						var _n5 = _n1.b;
						return author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluate;
					}
				}
			} else {
				var pqi = _n0.a.a;
				var _n6 = _n0.b;
				return author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluateSecondIndexOutOfTheQueue;
			}
		} else {
			if (!_n0.b.$) {
				var _n7 = _n0.a;
				var pqj = _n0.b.a;
				return author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluateFirstIndexOutOfTheQueue;
			} else {
				var _n8 = _n0.a;
				var _n9 = _n0.b;
				return author$project$Algorithms$CustomIndexMinPriorityQueue$CantEvaluateBothIndexOutOfTheQueue;
			}
		}
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$bgreater = F4(
	function (i, j, compareFunc, thepqueue) {
		var _n0 = A4(author$project$Algorithms$CustomIndexMinPriorityQueue$greater, i, j, compareFunc, thepqueue);
		if ((!_n0.$) && _n0.a) {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Basics$not = _Basics_not;
var author$project$Algorithms$CustomIndexMinPriorityQueue$sink = F3(
	function (k, compareFunc, thepqueue) {
		if ((_Utils_cmp(2 * k, thepqueue.bc) > 0) || (k <= 0)) {
			return thepqueue;
		} else {
			var j = 2 * k;
			var newj = ((_Utils_cmp(j, thepqueue.bc) < 0) && A4(author$project$Algorithms$CustomIndexMinPriorityQueue$bgreater, j, j + 1, compareFunc, thepqueue)) ? (j + 1) : j;
			return (!A4(author$project$Algorithms$CustomIndexMinPriorityQueue$bgreater, k, newj, compareFunc, thepqueue)) ? thepqueue : A3(
				author$project$Algorithms$CustomIndexMinPriorityQueue$sink,
				newj,
				compareFunc,
				A3(author$project$Algorithms$CustomIndexMinPriorityQueue$exchange, k, newj, thepqueue));
		}
	});
var elm$core$Basics$ge = _Utils_ge;
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
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$customDeleteMin = F2(
	function (compareFunc, theiMinPqueue) {
		var previousSize = theiMinPqueue.bc;
		var pqAtOldSize = function (thequeue) {
			return A2(elm$core$Dict$get, previousSize, thequeue.c);
		};
		var newpq = function (thequeue) {
			var _n2 = pqAtOldSize(thequeue);
			if (!_n2.$) {
				var i = _n2.a;
				return A2(elm$core$Dict$remove, previousSize, thequeue.c);
			} else {
				return thequeue.c;
			}
		};
		var mbMin = A2(elm$core$Dict$get, 1, theiMinPqueue.c);
		var newKeys = function (thequeue) {
			if (!mbMin.$) {
				var amin = mbMin.a;
				return A2(elm$core$Dict$remove, amin, thequeue.f);
			} else {
				return thequeue.f;
			}
		};
		var newqp = function (thequeue) {
			if (!mbMin.$) {
				var amin = mbMin.a;
				return A2(elm$core$Dict$remove, amin, thequeue.n);
			} else {
				return thequeue.n;
			}
		};
		var newiMinPqueue = (previousSize >= 1) ? A3(
			author$project$Algorithms$CustomIndexMinPriorityQueue$sink,
			1,
			compareFunc,
			function (pqrec) {
				return _Utils_update(
					pqrec,
					{
						f: newKeys(pqrec),
						c: newpq(pqrec),
						n: newqp(pqrec)
					});
			}(
				function (pqrec) {
					return _Utils_update(
						pqrec,
						{bc: previousSize - 1});
				}(
					A3(author$project$Algorithms$CustomIndexMinPriorityQueue$exchange, 1, previousSize, theiMinPqueue)))) : theiMinPqueue;
		var mbKeyDeleted = A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			A2(
				elm$core$Maybe$map,
				function (m) {
					return A2(elm$core$Dict$get, m, theiMinPqueue.f);
				},
				mbMin));
		return {dn: mbMin, dq: newiMinPqueue, dt: mbKeyDeleted};
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$deleteMinAux = F2(
	function (compareFunc, _n0) {
		deleteMinAux:
		while (true) {
			var lmins = _n0.a;
			var lkeymins = _n0.b;
			var theiMinPqueue = _n0.c;
			var delMinRec = A2(author$project$Algorithms$CustomIndexMinPriorityQueue$customDeleteMin, compareFunc, theiMinPqueue);
			var _n1 = _Utils_Tuple3(delMinRec.dn, delMinRec.dt, delMinRec.dq);
			var theMin = _n1.a;
			var keyMin = _n1.b;
			var newqueue = _n1.c;
			var newkmins = _Utils_ap(
				lkeymins,
				_List_fromArray(
					[keyMin]));
			var newlmins = _Utils_ap(
				lmins,
				_List_fromArray(
					[theMin]));
			if (theMin.$ === 1) {
				return _Utils_Tuple3(newlmins, newkmins, newqueue);
			} else {
				var amin = theMin.a;
				var $temp$compareFunc = compareFunc,
					$temp$_n0 = _Utils_Tuple3(newlmins, newkmins, newqueue);
				compareFunc = $temp$compareFunc;
				_n0 = $temp$_n0;
				continue deleteMinAux;
			}
		}
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$MultipleInsertOk = function (a) {
	return {$: 0, a: a};
};
var author$project$Algorithms$CustomIndexMinPriorityQueue$NoInsert = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$SomeInsertOk = F3(
	function (a, b, c) {
		return {$: 2, a: a, b: b, c: c};
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$IndexAlreadyExists = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$IndexForInsertOutOfBounds = function (a) {
	return {$: 0, a: a};
};
var author$project$Algorithms$CustomIndexMinPriorityQueue$InsertOk = function (a) {
	return {$: 2, a: a};
};
var author$project$Algorithms$CustomIndexMinPriorityQueue$swim = F3(
	function (k, compareFunc, thepqueue) {
		swim:
		while (true) {
			if ((k <= 1) || (_Utils_cmp(k, thepqueue.bc) > 0)) {
				return thepqueue;
			} else {
				if (!A4(author$project$Algorithms$CustomIndexMinPriorityQueue$bgreater, (k / 2) | 0, k, compareFunc, thepqueue)) {
					return thepqueue;
				} else {
					var newpqueue = A3(author$project$Algorithms$CustomIndexMinPriorityQueue$exchange, k, (k / 2) | 0, thepqueue);
					var newk = (k / 2) | 0;
					var $temp$k = newk,
						$temp$compareFunc = compareFunc,
						$temp$thepqueue = newpqueue;
					k = $temp$k;
					compareFunc = $temp$compareFunc;
					thepqueue = $temp$thepqueue;
					continue swim;
				}
			}
		}
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$insert = F4(
	function (index, val, compareFunc, theiMinPqueue) {
		var newSize = theiMinPqueue.bc + 1;
		var newiminpqueue = function () {
			var _n1 = A2(elm$core$Dict$get, index, theiMinPqueue.f);
			if (!_n1.$) {
				var akey = _n1.a;
				return theiMinPqueue;
			} else {
				return ((_Utils_cmp(newSize, theiMinPqueue.aJ) > 0) || ((_Utils_cmp(index, theiMinPqueue.aJ) > -1) || (index < 0))) ? theiMinPqueue : A3(
					author$project$Algorithms$CustomIndexMinPriorityQueue$swim,
					newSize,
					compareFunc,
					_Utils_update(
						theiMinPqueue,
						{
							f: A3(elm$core$Dict$insert, index, val, theiMinPqueue.f),
							c: A3(elm$core$Dict$insert, newSize, index, theiMinPqueue.c),
							n: A3(elm$core$Dict$insert, index, newSize, theiMinPqueue.n),
							bc: newSize
						}));
			}
		}();
		var _n0 = A2(elm$core$Dict$get, index, theiMinPqueue.f);
		if (!_n0.$) {
			var akey = _n0.a;
			return A2(author$project$Algorithms$CustomIndexMinPriorityQueue$IndexAlreadyExists, index, akey);
		} else {
			return ((index < 0) || (_Utils_cmp(index, theiMinPqueue.aJ) > -1)) ? author$project$Algorithms$CustomIndexMinPriorityQueue$IndexForInsertOutOfBounds(index) : author$project$Algorithms$CustomIndexMinPriorityQueue$InsertOk(newiminpqueue);
		}
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$multipleInsert = F3(
	function (ltoinsert, compareFunc, theiMinPqueue) {
		var startQueueRec = {q: _List_Nil, r: _List_Nil, B: theiMinPqueue};
		var insertOne = F3(
			function (idx, val, queueRecAcc) {
				var _n1 = A4(author$project$Algorithms$CustomIndexMinPriorityQueue$insert, idx, val, compareFunc, queueRecAcc.B);
				switch (_n1.$) {
					case 2:
						var pQueue = _n1.a;
						return {q: queueRecAcc.q, r: queueRecAcc.r, B: pQueue};
					case 0:
						var iOut = _n1.a;
						return {
							q: queueRecAcc.q,
							r: A2(elm$core$List$cons, iOut, queueRecAcc.r),
							B: queueRecAcc.B
						};
					default:
						var iOut = _n1.a;
						var akey = _n1.b;
						return {
							q: A2(
								elm$core$List$cons,
								_Utils_Tuple2(idx, akey),
								queueRecAcc.q),
							r: queueRecAcc.r,
							B: queueRecAcc.B
						};
				}
			});
		var queueRecOut = A3(
			elm$core$List$foldl,
			F2(
				function (_n0, thequeueRecAcc) {
					var idx = _n0.a;
					var val = _n0.b;
					return A3(insertOne, idx, val, thequeueRecAcc);
				}),
			startQueueRec,
			ltoinsert);
		return (_Utils_eq(queueRecOut.r, _List_Nil) && _Utils_eq(queueRecOut.q, _List_Nil)) ? author$project$Algorithms$CustomIndexMinPriorityQueue$MultipleInsertOk(queueRecOut.B) : (_Utils_eq(
			elm$core$List$length(ltoinsert),
			elm$core$List$length(queueRecOut.r) + elm$core$List$length(queueRecOut.q)) ? A2(author$project$Algorithms$CustomIndexMinPriorityQueue$NoInsert, queueRecOut.r, queueRecOut.q) : A3(author$project$Algorithms$CustomIndexMinPriorityQueue$SomeInsertOk, queueRecOut.B, queueRecOut.r, queueRecOut.q));
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$simpleTest = function (bval) {
	if (!bval) {
		return author$project$Algorithms$CustomIndexMinPriorityQueue$createEmptyCustomIndexMinPriorityQueue(2);
	} else {
		var ltoinsert = _List_fromArray(
			[
				_Utils_Tuple2(0, 10),
				_Utils_Tuple2(1, 5),
				_Utils_Tuple2(2, 35),
				_Utils_Tuple2(3, 1),
				_Utils_Tuple2(4, 27),
				_Utils_Tuple2(5, 15),
				_Utils_Tuple2(6, 10),
				_Utils_Tuple2(7, 11),
				_Utils_Tuple2(8, 16),
				_Utils_Tuple2(9, 4),
				_Utils_Tuple2(10, 9)
			]);
		var iminpqueue = author$project$Algorithms$CustomIndexMinPriorityQueue$createEmptyCustomIndexMinPriorityQueue(20);
		var compareFuncForInts = F2(
			function (a, b) {
				return (_Utils_cmp(a, b) > 0) ? 2 : ((_Utils_cmp(a, b) < 0) ? 0 : 1);
			});
		var newIminpqueue = function () {
			var _n2 = A3(author$project$Algorithms$CustomIndexMinPriorityQueue$multipleInsert, ltoinsert, compareFuncForInts, iminpqueue);
			switch (_n2.$) {
				case 0:
					var newPqueue = _n2.a;
					return newPqueue;
				case 1:
					var lidx = _n2.a;
					var lidxAndks = _n2.b;
					return iminpqueue;
				default:
					var newPqueue = _n2.a;
					var lidx = _n2.b;
					var lidxAndks = _n2.c;
					return newPqueue;
			}
		}();
		var compareFunc = F2(
			function (a, b) {
				return (_Utils_cmp(
					elm$core$Char$toCode(a),
					elm$core$Char$toCode(b)) > 0) ? 2 : ((_Utils_cmp(
					elm$core$Char$toCode(a),
					elm$core$Char$toCode(b)) < 0) ? 0 : 1);
			});
		var _n0 = function (_n1) {
			var l1 = _n1.a;
			var l2 = _n1.b;
			var q = _n1.c;
			return l2;
		}(
			A2(
				author$project$Algorithms$CustomIndexMinPriorityQueue$deleteMinAux,
				compareFuncForInts,
				_Utils_Tuple3(_List_Nil, _List_Nil, newIminpqueue)));
		return newIminpqueue;
	}
};
var author$project$Item$Ash = {$: 7};
var author$project$Item$Book = function (a) {
	return {$: 6, a: a};
};
var author$project$Item$Box = function (a) {
	return {$: 5, a: a};
};
var author$project$Item$Chest = function (a) {
	return {$: 0, a: a};
};
var author$project$Item$Food = function (a) {
	return {$: 9, a: a};
};
var author$project$Item$Key = function (a) {
	return {$: 2, a: a};
};
var author$project$Item$MainKeyPart = function (a) {
	return {$: 3, a: a};
};
var author$project$Item$Money = {$: 4};
var author$project$Item$Paper = function (a) {
	return {$: 8, a: a};
};
var author$project$Item$Skull = {$: 1};
var author$project$Item$itemToString = function (item) {
	switch (item.$) {
		case 0:
			var s = item.a;
			return 'chest_' + elm$core$String$fromInt(s);
		case 1:
			return 'skull';
		case 2:
			var kinfo = item.a;
			return 'the ' + (kinfo.aj + ' key');
		case 3:
			var nr = item.a;
			return 'part ' + (elm$core$String$fromInt(nr) + ' of the main key');
		case 4:
			return 'money';
		case 5:
			var binfo = item.a;
			return 'box';
		case 6:
			var binfo = item.a;
			return 'book';
		case 7:
			return 'ash';
		case 8:
			var paperinfo = item.a;
			return 'a piece of paper';
		default:
			var fdescription = item.a;
			return 'a piece of food : ' + fdescription;
	}
};
var author$project$Item$getFirstInventoryDictKey = function (item) {
	switch (item.$) {
		case 8:
			var paperinfo = item.a;
			return elm$core$Maybe$Just(
				'paper_' + elm$core$String$fromInt(paperinfo.a0));
		case 6:
			var bookinfo = item.a;
			return elm$core$Maybe$Just(
				'book_' + elm$core$String$fromInt(bookinfo.a0));
		case 3:
			var nr = item.a;
			return elm$core$Maybe$Just(
				'mainKeyPart_' + elm$core$String$fromInt(nr));
		case 2:
			var kinfo = item.a;
			return elm$core$Maybe$Just('key_' + kinfo.aj);
		case 9:
			var fdesc = item.a;
			return elm$core$Maybe$Nothing;
		default:
			return elm$core$Maybe$Just(
				author$project$Item$itemToString(item));
	}
};
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
var elm$core$String$contains = _String_contains;
var author$project$Item$isItemInInventory = F2(
	function (item, inventory) {
		var _n0 = author$project$Item$getFirstInventoryDictKey(item);
		if (!_n0.$) {
			var dkey = _n0.a;
			return A2(
				elm$core$List$member,
				item,
				elm$core$Dict$values(
					A2(
						elm$core$Dict$filter,
						F2(
							function (k, v) {
								return A2(elm$core$String$contains, dkey, k);
							}),
						inventory)));
		} else {
			return false;
		}
	});
var author$project$Item$similarPaperInList = F2(
	function (pinfo, lit) {
		similarPaperInList:
		while (true) {
			if (!lit.b) {
				return false;
			} else {
				var a = lit.a;
				var rl = lit.b;
				if (a.$ === 8) {
					var ppinfo = a.a;
					return _Utils_eq(ppinfo.a0, pinfo.a0) || A2(author$project$Item$similarPaperInList, pinfo, rl);
				} else {
					var $temp$pinfo = pinfo,
						$temp$lit = rl;
					pinfo = $temp$pinfo;
					lit = $temp$lit;
					continue similarPaperInList;
				}
			}
		}
	});
var author$project$Item$similarItemInInventory = F2(
	function (it, lit) {
		switch (it.$) {
			case 0:
				var sz = it.a;
				return A2(
					author$project$Item$isItemInInventory,
					author$project$Item$Chest(sz),
					lit);
			case 1:
				return A2(author$project$Item$isItemInInventory, author$project$Item$Skull, lit);
			case 2:
				var kinfo = it.a;
				return A2(
					author$project$Item$isItemInInventory,
					author$project$Item$Key(kinfo),
					lit);
			case 3:
				var nr = it.a;
				return A2(
					author$project$Item$isItemInInventory,
					author$project$Item$MainKeyPart(nr),
					lit);
			case 4:
				return A2(author$project$Item$isItemInInventory, author$project$Item$Money, lit);
			case 5:
				var binfo = it.a;
				return A2(
					author$project$Item$isItemInInventory,
					author$project$Item$Box(binfo),
					lit);
			case 6:
				var binfo = it.a;
				return A2(
					author$project$Item$isItemInInventory,
					author$project$Item$Book(binfo),
					lit);
			case 7:
				return A2(author$project$Item$isItemInInventory, author$project$Item$Ash, lit);
			case 8:
				var pinfo = it.a;
				var litems = function () {
					var _n1 = author$project$Item$getFirstInventoryDictKey(
						author$project$Item$Paper(pinfo));
					if (!_n1.$) {
						var dkey = _n1.a;
						return elm$core$Dict$values(
							A2(
								elm$core$Dict$filter,
								F2(
									function (k, v) {
										return A2(elm$core$String$contains, dkey, k);
									}),
								lit));
					} else {
						return _List_Nil;
					}
				}();
				return A2(author$project$Item$similarPaperInList, pinfo, litems);
			default:
				var fd = it.a;
				return A2(
					author$project$Item$isItemInInventory,
					author$project$Item$Food(fd),
					lit);
		}
	});
var author$project$Beings$BeingsInTileGrid$isTileWalkable = F2(
	function (being, tile) {
		switch (tile.$) {
			case 0:
				var floorinfo = tile.a;
				var _n1 = floorinfo.cu;
				if (!_n1.$) {
					var teleporter = _n1.a;
					return being.y;
				} else {
					return floorinfo.cn;
				}
			case 11:
				var treeInfo = tile.a;
				return false;
			case 1:
				var sinfo = tile.a;
				return being.x;
			case 5:
				var binfo = tile.a;
				return false;
			case 2:
				var hinfo = tile.a;
				return being.w;
			case 3:
				var wInfo = tile.a;
				var _n2 = wInfo.cu;
				if (!_n2.$) {
					var tel = _n2.a;
					return being.y;
				} else {
					return false;
				}
			case 4:
				var wOverInfo = tile.a;
				return false;
			case 6:
				var doorinfo = tile.a;
				return doorinfo.cl || (A3(
					elm$core$List$foldl,
					F2(
						function (it, bacc) {
							return A2(
								elm$core$List$member,
								it,
								elm$core$Dict$values(being.ai)) && bacc;
						}),
					true,
					doorinfo.cL) || A3(
					elm$core$List$foldl,
					F2(
						function (it, bacc) {
							return A2(author$project$Item$similarItemInInventory, it, being.ai) && bacc;
						}),
					true,
					doorinfo.cL));
			case 7:
				var leverInfo = tile.a;
				return false;
			case 8:
				var flagInfo = tile.a;
				return false;
			case 9:
				var columnInfo = tile.a;
				return false;
			case 10:
				var waterInfo = tile.a;
				return waterInfo.cn;
			case 12:
				var it = tile.a;
				var ct = tile.b;
				return false;
			default:
				return false;
		}
	});
var elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var elm$core$Array$bitMask = 4294967295 >>> (32 - elm$core$Array$shiftStep);
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = elm$core$Array$bitMask & (index >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_n0.$) {
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
var elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
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
		var x = _n0.bk;
		var y = _n0.bl;
		var _n1 = A2(elm$core$Array$get, y, grid.aH);
		if (_n1.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			var row = _n1.a;
			return A2(elm$core$Array$get, x, row);
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
		return {aH: grid, bc: size};
	});
var author$project$Grid$Size = F2(
	function (width, height) {
		return {ch: height, cZ: width};
	});
var author$project$Grid$getTheLength = function (mbla) {
	if (!mbla.$) {
		var l = mbla.a;
		return elm$core$List$length(l);
	} else {
		return 0;
	}
};
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
					{g: nodeList, b: nodeListSize, e: jsArray});
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
		return $.aH;
	});
var author$project$Tile$Unexplored = 2;
var author$project$GameDefinitions$Common$setAllAsUnexplored = function (level) {
	var grid = author$project$Grid$toList(level);
	return author$project$Grid$fromList(
		A2(
			elm$core$List$map,
			function (row) {
				return A2(
					elm$core$List$map,
					function (_n0) {
						return 2;
					},
					row);
			},
			grid));
};
var author$project$GameDefinitions$Game1$Game1Definitions$dimensions = _Utils_Tuple2(80, 60);
var author$project$Beings$Beings$CustomMoveTowardsPlayer = F3(
	function (a, b, c) {
		return {$: 1, a: a, b: b, c: c};
	});
var author$project$Beings$Beings$DecreaseHealth = 0;
var author$project$Beings$Beings$Down = 1;
var author$project$Grid$Coordinate = F2(
	function (x, y) {
		return {bk: x, bl: y};
	});
var author$project$Beings$Beings$fightingCharacterCreationFunc = F7(
	function (elem, fcharId, ename, species_, x_coord, y_coord, floor_id) {
		return {
			aU: 1,
			b_: true,
			w: false,
			x: false,
			y: false,
			aW: 100,
			ab: 1,
			aX: false,
			aY: false,
			ad: 0,
			S: floor_id,
			cg: false,
			ae: 12,
			a0: fcharId,
			af: 1,
			ag: 11,
			ah: 1,
			ai: elm$core$Dict$empty,
			s: A2(author$project$Grid$Coordinate, x_coord, y_coord),
			al: 3,
			am: 100,
			a4: 2,
			a5: 200,
			V: _List_fromArray(
				[
					A3(author$project$Beings$Beings$CustomMoveTowardsPlayer, 0.85, 0.4, 0.4)
				]),
			ao: ename,
			a6: 0,
			a8: _List_Nil,
			ap: false,
			cB: true,
			a9: 2,
			ba: 5,
			bh: species_,
			bi: 20,
			av: elem
		};
	});
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
var author$project$Beings$Beings$IncreaseIndexOfLight = 1;
var author$project$Beings$Beings$playerCreationFunc = F5(
	function (elem, pname, x_coord, y_coord, floor_nr) {
		return {
			aU: 1,
			w: true,
			x: true,
			y: true,
			aW: 100,
			ab: 1,
			cc: 10,
			ad: 1,
			ae: 30,
			ck: 10,
			af: 10,
			ag: 20,
			ah: 2,
			ai: elm$core$Dict$empty,
			s: A2(author$project$Grid$Coordinate, x_coord, y_coord),
			al: 3,
			am: 200,
			V: _List_Nil,
			ao: pname,
			ap: false,
			a9: 2,
			ba: 5,
			bi: 20,
			av: elem
		};
	});
var author$project$GameDefinitions$Game1$Game1Definitions$initialPlayer = F3(
	function (x, y, z) {
		var elem = '@';
		return A5(author$project$Beings$Beings$playerCreationFunc, elem, 'You', x, y, z);
	});
var author$project$GameModel$DisplayRegularGame = {$: 0};
var author$project$GameModel$RoomsInfo = F4(
	function (roomRectangles, maxNrOfRooms, maxRoomSize, minRoomSize) {
		return {dE: maxNrOfRooms, dF: maxRoomSize, dI: minRoomSize, dW: roomRectangles};
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
		var width = size.cZ;
		var height = size.ch;
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
	return {$: 0, a: a};
};
var author$project$Thorns$Types$initialModel = F3(
	function (player, mbFightCharacter, imgBaseDir_) {
		return {
			b6: _List_Nil,
			cf: A2(
				author$project$Grid$initialize,
				A2(author$project$Grid$Size, 6, 6),
				elm$core$Maybe$Nothing),
			ci: elm$core$Maybe$Nothing,
			$7: imgBaseDir_,
			by: false,
			dO: A2(
				elm$core$Maybe$map,
				function (x) {
					return author$project$Thorns$Types$FightingCharacter(x);
				},
				mbFightCharacter),
			v: player,
			dQ: _List_Nil
		};
	});
var author$project$Tile$NoTileYet = {$: 13};
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
		{ch: h, cZ: w},
		author$project$Tile$NoTileYet);
	var firstExplored = author$project$GameDefinitions$Common$setAllAsUnexplored(firstMap);
	var fightingCharacter2 = A5(author$project$GameDefinitions$Game1$Game1Definitions$initialFightingCharacter, 2, 'small_worm', 3, 3, theFloorId);
	var fightingCharacter = A5(author$project$GameDefinitions$Game1$Game1Definitions$initialFightingCharacter, 1, 'slime', 5, 5, theFloorId);
	var createRandomMap = true;
	return _Utils_Tuple3(
		{
			c6: author$project$GameModel$DisplayRegularGame,
			c7: theFloorId,
			c9: false,
			da: false,
			h: elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(1, fightingCharacter),
						_Utils_Tuple2(2, fightingCharacter2)
					])),
			bu: elm$core$Dict$empty,
			dg: F2(
				function (fid, coords) {
					return false;
				}),
			dh: elm$core$Maybe$Nothing,
			di: A3(author$project$Thorns$Types$initialModel, player_, elm$core$Maybe$Nothing, imgBaseDir_),
			$7: imgBaseDir_,
			dv: elm$core$Dict$empty,
			cq: firstMap,
			dw: elm$core$Dict$empty,
			dy: true,
			dz: elm$core$Maybe$Just('/game/randomDungeonGame.png'),
			dA: _List_fromArray(
				['you enter the dungeon']),
			dD: elm$core$Maybe$Nothing,
			dG: elm$core$Maybe$Nothing,
			dH: _List_Nil,
			m: elm$core$Dict$empty,
			v: player_,
			dQ: _List_Nil,
			dS: 5,
			dX: roomsInfo,
			dZ: elm$core$Dict$empty,
			d_: true,
			d2: elm$core$Dict$empty,
			d7: 64,
			d9: 64,
			eb: author$project$GameDefinitions$Game1$Game1Definitions$dimensions.b,
			ec: author$project$GameDefinitions$Game1$Game1Definitions$dimensions.a,
			ek: true,
			em: 12,
			en: 3,
			eo: 3,
			ep: 15,
			er: elm$core$Maybe$Nothing
		},
		createRandomMap,
		randomlyPositionPlayer);
};
var author$project$Beings$Beings$DontMoveListenAndActToOpenDoorMsg = {$: 6};
var author$project$Beings$Beings$MoveRandomly = {$: 5};
var author$project$Beings$Beings$MoveRandomlyListenAndActToOpenDoorMsg = {$: 4};
var author$project$Beings$Beings$MoveTowardsFixedCoordinates = F7(
	function (a, b, c, d, e, f, g) {
		return {$: 3, a: a, b: b, c: c, d: d, e: e, f: f, g: g};
	});
var author$project$Beings$Beings$otherCharacterCreationFunc = F7(
	function (id_, ename, species_, x_coord, y_coord, floor_id_, lMovingStrategy) {
		return {
			b1: false,
			w: true,
			x: true,
			y: true,
			ab: 1,
			aX: false,
			aY: false,
			ad: 1,
			S: floor_id_,
			ae: 30,
			a0: id_,
			af: 8,
			ag: 30,
			ah: 100,
			ai: elm$core$Dict$empty,
			s: A2(author$project$Grid$Coordinate, x_coord, y_coord),
			al: 3,
			am: 100,
			a4: 1,
			a5: 200,
			V: lMovingStrategy,
			ao: ename,
			a6: 0,
			a8: _List_Nil,
			ap: true,
			bh: species_,
			av: ''
		};
	});
var author$project$Beings$Beings$setCharacterMovingStrategies = F2(
	function (themovingStrategies, character) {
		return _Utils_update(
			character,
			{V: themovingStrategies});
	});
var author$project$GameDefinitions$Common$get_room_height = F2(
	function (roomType, config_params) {
		switch (roomType.$) {
			case 0:
				return config_params.a;
			case 1:
				return config_params.bd;
			case 2:
				return config_params.bf;
			default:
				var w = roomType.a;
				var h = roomType.b;
				return h;
		}
	});
var author$project$GameDefinitions$Common$custom_room_top_left_x = F5(
	function (config_params, row_nr, col_nr, rwidth, rheight) {
		return (config_params.aA + ((col_nr * config_params.H) + ((col_nr - 1) * ((config_params.a + config_params.H) + config_params.at)))) - (((rwidth - config_params.a) / 2) | 0);
	});
var author$project$GameDefinitions$Common$square_room_top_left_x = F3(
	function (config_params, row_nr, col_nr) {
		return config_params.aA + ((col_nr * config_params.H) + ((col_nr - 1) * ((config_params.a + config_params.H) + config_params.at)));
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
			case 0:
				return A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr);
			case 1:
				return A3(author$project$GameDefinitions$Common$small_height_room_top_left_x, config_params, row_nr, col_nr);
			case 2:
				return A3(author$project$GameDefinitions$Common$small_width_room_top_left_x, config_params, row_nr, col_nr);
			default:
				var rwidth = roomType.a;
				var rheight = roomType.b;
				return A5(author$project$GameDefinitions$Common$custom_room_top_left_x, config_params, row_nr, col_nr, rwidth, rheight);
		}
	});
var author$project$GameDefinitions$Common$custom_room_top_left_y = F5(
	function (config_params, row_nr, col_nr, rwidth, rheight) {
		return (config_params.aB + ((row_nr * config_params.z) + ((row_nr - 1) * ((config_params.a + config_params.z) + config_params.au)))) - (((rheight - config_params.a) / 2) | 0);
	});
var author$project$GameDefinitions$Common$square_room_top_left_y = F3(
	function (config_params, row_nr, col_nr) {
		return config_params.aB + ((row_nr * config_params.z) + ((row_nr - 1) * ((config_params.a + config_params.z) + config_params.au)));
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
			case 0:
				return A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr);
			case 1:
				return A3(author$project$GameDefinitions$Common$small_height_room_top_left_y, config_params, row_nr, col_nr);
			case 2:
				return A3(author$project$GameDefinitions$Common$small_width_room_top_left_y, config_params, row_nr, col_nr);
			default:
				var rwidth = roomType.a;
				var rheight = roomType.b;
				return A5(author$project$GameDefinitions$Common$custom_room_top_left_y, config_params, row_nr, col_nr, rwidth, rheight);
		}
	});
var author$project$GameDefinitions$Common$get_room_width = F2(
	function (roomType, config_params) {
		switch (roomType.$) {
			case 0:
				return config_params.a;
			case 1:
				return config_params.be;
			case 2:
				return config_params.bg;
			default:
				var w = roomType.a;
				var h = roomType.b;
				return w;
		}
	});
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$abs = function (n) {
	return (n < 0) ? (-n) : n;
};
var author$project$GameDefinitions$Common$get_position_in_room = F7(
	function (row_nr, col_nr, mbLocationShift, roomType, pos_nr_x_, pos_nr_y_, config_params) {
		var top_left_y_ = A4(author$project$GameDefinitions$Common$get_room_top_left_y, row_nr, col_nr, roomType, config_params) + A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			mbLocationShift).b;
		var top_left_x_ = A4(author$project$GameDefinitions$Common$get_room_top_left_x, row_nr, col_nr, roomType, config_params) + A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			mbLocationShift).a;
		var pos_nr_y = function (y) {
			return y - elm$core$Basics$floor(y);
		}(
			elm$core$Basics$abs(pos_nr_y_));
		var pos_nr_x = function (x) {
			return x - elm$core$Basics$floor(x);
		}(
			elm$core$Basics$abs(pos_nr_x_));
		var new_y = elm$core$Basics$floor(
			top_left_y_ + (pos_nr_y * A2(author$project$GameDefinitions$Common$get_room_height, roomType, config_params)));
		var new_x = elm$core$Basics$floor(
			top_left_x_ + (pos_nr_x * A2(author$project$GameDefinitions$Common$get_room_width, roomType, config_params)));
		return _Utils_Tuple2(new_x, new_y);
	});
var author$project$GameDefinitions$Common$getLandingTargetIdAndCoords = F2(
	function (configParams, landingtargetInfo) {
		var _n0 = function () {
			var _n1 = landingtargetInfo.aa;
			if (_n1.$ === 1) {
				var x = _n1.a;
				var y = _n1.b;
				return _Utils_Tuple2(x, y);
			} else {
				var roomRowNr = _n1.a;
				var roomColNr = _n1.b;
				var mbLocationShift = _n1.c;
				var roomType = _n1.d;
				var xFactor = _n1.e;
				var yFactor = _n1.f;
				return A7(author$project$GameDefinitions$Common$get_position_in_room, roomRowNr, roomColNr, mbLocationShift, roomType, xFactor, yFactor, configParams);
			}
		}();
		var xCoord = _n0.a;
		var yCoord = _n0.b;
		return {
			Q: A2(author$project$Grid$Coordinate, xCoord, yCoord),
			S: landingtargetInfo.S,
			bP: landingtargetInfo.bP
		};
	});
var author$project$GameDefinitions$Common$get_total_height = F2(
	function (config_params, nr_rooms_per_column) {
		return ((config_params.aB + config_params.bn) + (nr_rooms_per_column * (config_params.a + (2 * config_params.z)))) + ((nr_rooms_per_column - 1) * config_params.au);
	});
var author$project$GameDefinitions$Common$get_total_width = F2(
	function (config_params, nr_rooms_per_row) {
		return ((config_params.aA + config_params.bo) + (nr_rooms_per_row * (config_params.a + (2 * config_params.H)))) + ((nr_rooms_per_row - 1) * config_params.at);
	});
var author$project$GameDefinitions$Common$StairsDown = 3;
var author$project$GameDefinitions$Common$StairsRoomCoords = F5(
	function (a, b, c, d, e) {
		return {$: 0, a: a, b: b, c: c, d: d, e: e};
	});
var author$project$GameDefinitions$Common$StairsToTheRight = 1;
var author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal = function (mbRoomType) {
	if ((!mbRoomType.$) && (mbRoomType.a.$ === 1)) {
		var _n1 = mbRoomType.a;
		return 1;
	} else {
		return 0;
	}
};
var author$project$GameDefinitions$Common$addOneIfRoomTypeVertical = function (mbRoomType) {
	if ((!mbRoomType.$) && (mbRoomType.a.$ === 2)) {
		var _n1 = mbRoomType.a;
		return 1;
	} else {
		return 0;
	}
};
var author$project$Tile$StairsInfo = F4(
	function (stairsId, toStairsId, shift, visibility) {
		return {bL: shift, bM: stairsId, bS: toStairsId, eq: visibility};
	});
var author$project$TileGrid$LocalizedStairsInfo = F3(
	function (stairsInfo, floorId, coords) {
		return {Q: coords, S: floorId, cR: stairsInfo};
	});
var author$project$GameDefinitions$Common$createStairsInfo = F6(
	function (stairsId, floorId, shiftAppliedComingOut, toStairsId, sCoordsCalcInfo, config_params) {
		var tunnel_width = config_params.H + 1;
		var tunnel_height = config_params.z + 1;
		var stairsInfo = A4(author$project$Tile$StairsInfo, stairsId, toStairsId, shiftAppliedComingOut, 2);
		var _n0 = function () {
			if (sCoordsCalcInfo.$ === 1) {
				var x = sCoordsCalcInfo.a;
				var y = sCoordsCalcInfo.b;
				return _Utils_Tuple2(x, y);
			} else {
				var row_nr = sCoordsCalcInfo.a;
				var col_nr = sCoordsCalcInfo.b;
				var mbShiftLocationTuple = sCoordsCalcInfo.c;
				var orientation = sCoordsCalcInfo.d;
				var mbFromRoomType = sCoordsCalcInfo.e;
				var _n2 = A2(
					elm$core$Maybe$withDefault,
					_Utils_Tuple2(0, 0),
					mbShiftLocationTuple);
				var loc_x_shift = _n2.a;
				var loc_y_shift = _n2.b;
				switch (orientation) {
					case 0:
						return _Utils_Tuple2(
							((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) - tunnel_width) + loc_x_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
							(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + ((config_params.a / 2) | 0)) + loc_y_shift);
					case 1:
						return _Utils_Tuple2(
							((((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + config_params.a) + tunnel_width) - 1) + loc_x_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
							(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + ((config_params.a / 2) | 0)) + loc_y_shift);
					case 2:
						return _Utils_Tuple2(
							(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + ((config_params.a / 2) | 0)) + loc_x_shift,
							((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) - tunnel_height) + loc_y_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
					default:
						return _Utils_Tuple2(
							(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + ((config_params.a / 2) | 0)) + loc_x_shift,
							((((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + config_params.a) + tunnel_height) - 1) + loc_y_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
				}
			}
		}();
		var top_left_x = _n0.a;
		var top_left_y = _n0.b;
		return A3(
			author$project$TileGrid$LocalizedStairsInfo,
			stairsInfo,
			floorId,
			A2(author$project$Grid$Coordinate, top_left_x, top_left_y));
	});
var author$project$GameDefinitions$Common$getFormattedStairsId = F2(
	function (anId, floorId) {
		return (floorId * 1000) + anId;
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id = 1;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id = 0;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_ = 7;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params = {bn: 4, aA: 3, bo: 4, aB: 3, z: 1, bd: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_ - 2, be: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_, bf: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_, bg: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_ - 2, at: 1, au: 1, a: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$square_room_side_, H: 1};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id = 2;
var author$project$GameModel$SquareRoom = {$: 0};
var author$project$GameDefinitions$Game2$Basement$determineBasementStairsInfo = function () {
	var srcoords = author$project$GameDefinitions$Common$StairsRoomCoords;
	var lstairs = _List_fromArray(
		[
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
			ab: 1,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			bG: 6,
			bI: 6,
			bL: _Utils_Tuple2(-1, 0),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)
		},
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
			ab: 3,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			bG: 6,
			bI: 6,
			bL: _Utils_Tuple2(0, -1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)
		}
		]);
	return A2(
		elm$core$List$map,
		function (rec) {
			return A6(
				author$project$GameDefinitions$Common$createStairsInfo,
				rec.bM,
				rec.bp,
				rec.bL,
				rec.bS,
				A5(srcoords, rec.bI, rec.bG, rec.bB, rec.ab, rec.bF),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		},
		lstairs);
}();
var author$project$GameDefinitions$Common$StairsToTheLeft = 0;
var author$project$GameDefinitions$Game2$Caverns$determineCavernsStairsInfo = function () {
	var srcoords = author$project$GameDefinitions$Common$StairsRoomCoords;
	var lstairs = _List_fromArray(
		[
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
			ab: 0,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Nothing,
			bG: 8,
			bI: 4,
			bL: _Utils_Tuple2(1, 0),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)
		},
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
			ab: 3,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Nothing,
			bG: 2,
			bI: 7,
			bL: _Utils_Tuple2(0, -1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 3, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)
		}
		]);
	return A2(
		elm$core$List$map,
		function (rec) {
			return A6(
				author$project$GameDefinitions$Common$createStairsInfo,
				rec.bM,
				rec.bp,
				rec.bL,
				rec.bS,
				A5(srcoords, rec.bI, rec.bG, rec.bB, rec.ab, rec.bF),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		},
		lstairs);
}();
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id = 3;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol = 1;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow = 4;
var author$project$GameModel$CustomRoom = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType = A2(author$project$GameModel$CustomRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a * 2);
var author$project$GameDefinitions$Common$LandingTargetCreationInfo = F3(
	function (targetId, floorId, coordsCalcInfo) {
		return {aa: coordsCalcInfo, S: floorId, bP: targetId};
	});
var author$project$GameDefinitions$Common$RoomCoords = F6(
	function (a, b, c, d, e, f) {
		return {$: 0, a: a, b: b, c: c, d: d, e: e, f: f};
	});
var elm$core$Basics$round = _Basics_round;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$intXshiftAdjustmentForBasementCustomRoom = elm$core$Basics$round(((author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a / 2) + (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.at / 2)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H);
var author$project$GameModel$VerticalRoom = {$: 2};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsList = _List_fromArray(
	[
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		1,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 2, 1, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		2,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
		A6(
			author$project$GameDefinitions$Common$RoomCoords,
			4,
			3,
			elm$core$Maybe$Just(
				_Utils_Tuple2(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$intXshiftAdjustmentForBasementCustomRoom, 0)),
			author$project$GameModel$SquareRoom,
			0.5,
			0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		3,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 6, 5, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		4,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 3, 5, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		5,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 3, 5, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.75, 0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		6,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 3, 4, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		7,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 5, 4, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.4)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		8,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 5, 3, elm$core$Maybe$Nothing, author$project$GameModel$VerticalRoom, 0.5, 0.75)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		9,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 7, 6, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		10,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 6, 2, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
		A3(
		author$project$GameDefinitions$Common$LandingTargetCreationInfo,
		11,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
		A6(author$project$GameDefinitions$Common$RoomCoords, 6, 4, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.6, 0.5))
	]);
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id = 5;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords = function () {
	var telRow = function (x) {
		return (x < 1) ? 1 : x;
	}(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow - 1);
	var telAbsoluteX = 1;
	return A2(
		author$project$Grid$Coordinate,
		telAbsoluteX,
		A4(author$project$GameDefinitions$Common$get_room_top_left_y, telRow, 1, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params) + 5);
}();
var author$project$Tile$TeleporterInfo = F8(
	function (teleporterId, teleporterName, teleporterType, target_ids, shift, requirementsToTeleportFrom, requirementsToTeleportTo, visibility) {
		return {dT: requirementsToTeleportFrom, dU: requirementsToTeleportTo, bL: shift, d1: target_ids, d3: teleporterId, d5: teleporterName, bQ: teleporterType, eq: visibility};
	});
var author$project$GameDefinitions$Common$createTeleporterInfo = F7(
	function (teleporterId, telName, teleportertype, ltargetIds, shift, reqTelFrom, reqTelTo) {
		return A8(author$project$Tile$TeleporterInfo, teleporterId, telName, teleportertype, ltargetIds, shift, reqTelFrom, reqTelTo, 2);
	});
var author$project$TileGrid$LocalizedTeleporterInfo = F3(
	function (teleporterInfo, floorId, coords) {
		return {Q: coords, S: floorId, d4: teleporterInfo};
	});
var author$project$GameDefinitions$Common$createLocalizedTeleporterInfo = F9(
	function (teleporterId, telName, floorId, coords, teleportertype, ltargetIds, shift, reqTelFrom, reqTelTo) {
		var teleporterInfo = A7(author$project$GameDefinitions$Common$createTeleporterInfo, teleporterId, telName, teleportertype, ltargetIds, shift, reqTelFrom, reqTelTo);
		return A3(author$project$TileGrid$LocalizedTeleporterInfo, teleporterInfo, floorId, coords);
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
var author$project$GameDefinitions$Common$getTeleportersCoords = F6(
	function (config_params, teleporterType, room_row_nr, room_col_nr, room_type, position_in_room) {
		var _n0 = A5(author$project$GameDefinitions$Common$get_xy_coords_from_room_row_col, room_row_nr, room_col_nr, room_type, position_in_room, config_params);
		var x_coord = _n0.a;
		var y_coord = _n0.b;
		var _n1 = function () {
			if (teleporterType === 2) {
				return ((elm$core$String$toLower(position_in_room) === 'up') || (elm$core$String$toLower(position_in_room) === 'down')) ? _Utils_Tuple2(x_coord - 2, y_coord) : _Utils_Tuple2(x_coord, y_coord);
			} else {
				return _Utils_Tuple2(x_coord, y_coord);
			}
		}();
		var x_c = _n1.a;
		var y_c = _n1.b;
		return _Utils_Tuple2(x_c, y_c);
	});
var author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords = function (teleporterId) {
	return function (teleporterName) {
		return function (floorId) {
			return function (teleportertype) {
				return function (row_nr) {
					return function (col_nr) {
						return function (room_type) {
							return function (wall) {
								return function (ltargetIds) {
									return function (shift) {
										return function (reqTelFrom) {
											return function (reqTelTo) {
												return function (config_params) {
													var teleporterInfo = A8(author$project$Tile$TeleporterInfo, teleporterId, teleporterName, teleportertype, ltargetIds, shift, reqTelFrom, reqTelTo, 2);
													var _n0 = A6(author$project$GameDefinitions$Common$getTeleportersCoords, config_params, teleportertype, row_nr, col_nr, room_type, wall);
													var x_coord = _n0.a;
													var y_coord = _n0.b;
													var locTeleporterInfo = A3(
														author$project$TileGrid$LocalizedTeleporterInfo,
														teleporterInfo,
														floorId,
														A2(author$project$Grid$Coordinate, x_coord, y_coord));
													return locTeleporterInfo;
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
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a + 2;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType = A2(author$project$GameModel$CustomRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight);
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside1TeleporterCoords = function () {
	var telRow = function (x) {
		return (x > 9) ? 9 : x;
	}(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow + 4);
	var telAbsoluteX = 1;
	return A2(
		author$project$Grid$Coordinate,
		telAbsoluteX,
		A4(author$project$GameDefinitions$Common$get_room_top_left_y, telRow, 1, author$project$GameModel$SquareRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
}();
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id = 4;
var author$project$GameModel$HorizontalRoom = {$: 1};
var author$project$Tile$CantTeleport = {$: 2};
var author$project$Tile$NoReqs = {$: 0};
var author$project$Tile$ReqItems = function (a) {
	return {$: 1, a: a};
};
var author$project$Tile$TBarrel = 0;
var author$project$Tile$TBookCase = 1;
var author$project$Tile$TClock = 2;
var author$project$Tile$TTree = 3;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoList = _Utils_ap(
	A2(
		elm$core$List$map,
		function (func_y) {
			return func_y(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		},
		_List_fromArray(
			[
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(1)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(0)(2)(5)(author$project$GameModel$SquareRoom)('right')(
				_List_fromArray(
					[2]))(
				_Utils_Tuple2(-1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(2)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(0)(1)(7)(author$project$GameModel$SquareRoom)('left')(
				_List_fromArray(
					[1]))(
				_Utils_Tuple2(1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(3)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(0)(3)(5)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[4]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(4)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(0)(5)(5)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[3]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(5)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(0)(1)(11)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[6]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(6)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(0)(4)(11)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[5]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(7)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(1)(4)(7)(author$project$GameModel$VerticalRoom)('down')(
				_List_fromArray(
					[8]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(8)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(1)(6)(7)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[7]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(9)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(1)(7)(7)(author$project$GameModel$SquareRoom)('right')(
				_List_fromArray(
					[10]))(
				_Utils_Tuple2(-1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(10)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(1)(6)(10)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[9]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(11)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(2)(7)(2)(author$project$GameModel$SquareRoom)('right')(
				_List_fromArray(
					[12]))(
				_Utils_Tuple2(-1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(12)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)(2)(7)(9)(author$project$GameModel$SquareRoom)('left')(
				_List_fromArray(
					[11]))(
				_Utils_Tuple2(1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(13)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)(1)(2)(1)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[33]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(14)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)(1)(6)(1)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[34]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(15)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)(2)(1)(2)(author$project$GameModel$SquareRoom)('right')(
				_List_fromArray(
					[16]))(
				_Utils_Tuple2(-1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(16)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)(2)(1)(5)(author$project$GameModel$SquareRoom)('left')(
				_List_fromArray(
					[15]))(
				_Utils_Tuple2(1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(17)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(0)(3)(3)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[18]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(18)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(0)(5)(3)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[17]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(19)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(0)(6)(6)(author$project$GameModel$VerticalRoom)('left')(
				_List_fromArray(
					[20]))(
				_Utils_Tuple2(1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(20)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id)(0)(6)(4)(author$project$GameModel$SquareRoom)('right')(
				_List_fromArray(
					[19]))(
				_Utils_Tuple2(-1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(21)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(1)(1)(5)(author$project$GameModel$HorizontalRoom)('down')(
				_List_fromArray(
					[22]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(22)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(1)(7)(5)(author$project$GameModel$HorizontalRoom)('up')(
				_List_fromArray(
					[21]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(23)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(1)(3)(4)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[24]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(24)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(1)(5)(4)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[23]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(25)('travel clock')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(2)(1)(2)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[26, 35]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(26)('bottom clock')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(2)(7)(2)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[25, 36]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(27)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(2)(1)(6)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[28]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(28)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)(2)(7)(6)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[27]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(29)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id)(2)(5)(3)(author$project$GameModel$VerticalRoom)('right')(
				_List_fromArray(
					[30]))(
				_Utils_Tuple2(-1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(30)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id)(2)(4)(4)(author$project$GameModel$VerticalRoom)('left')(
				_List_fromArray(
					[29]))(
				_Utils_Tuple2(1, 0))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(31)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id)(2)(1)(1)(author$project$GameModel$SquareRoom)('down')(
				_List_fromArray(
					[32]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(32)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id)(2)(2)(1)(author$project$GameModel$SquareRoom)('up')(
				_List_fromArray(
					[31]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(33)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)(1)(4)(1)(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType)('up')(
				_List_fromArray(
					[13]))(
				_Utils_Tuple2(0, 1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs),
				author$project$GameDefinitions$Common$createTeleporterInfoFromRoomCoords(34)('')(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)(1)(4)(1)(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType)('down')(
				_List_fromArray(
					[14]))(
				_Utils_Tuple2(0, -1))(author$project$Tile$NoReqs)(author$project$Tile$NoReqs)
			])),
	_List_fromArray(
		[
			A9(
			author$project$GameDefinitions$Common$createLocalizedTeleporterInfo,
			35,
			'outside 2',
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords,
			3,
			_List_fromArray(
				[25]),
			_Utils_Tuple2(0, 1),
			author$project$Tile$NoReqs,
			author$project$Tile$CantTeleport),
			A9(
			author$project$GameDefinitions$Common$createLocalizedTeleporterInfo,
			36,
			'The Travel Tree ',
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside1TeleporterCoords,
			3,
			_List_fromArray(
				[26]),
			_Utils_Tuple2(0, -1),
			author$project$Tile$NoReqs,
			author$project$Tile$ReqItems(
				_List_fromArray(
					[
						author$project$Item$Key(
						{aj: 'gray'})
					])))
		]));
var author$project$GameDefinitions$Common$StairsUp = 2;
var author$project$GameDefinitions$Game2$FirstFloor$determineFirstFloorStairsInfo = function () {
	var srcoords = author$project$GameDefinitions$Common$StairsRoomCoords;
	var lstairs = _List_fromArray(
		[
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
			ab: 2,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			bG: 5,
			bI: 5,
			bL: _Utils_Tuple2(0, 1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 8, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id)
		},
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
			ab: 3,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			bG: 5,
			bI: 3,
			bL: _Utils_Tuple2(0, -1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 9, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id)
		}
		]);
	return A2(
		elm$core$List$map,
		function (rec) {
			return A6(
				author$project$GameDefinitions$Common$createStairsInfo,
				rec.bM,
				rec.bp,
				rec.bL,
				rec.bS,
				A5(srcoords, rec.bI, rec.bG, rec.bB, rec.ab, rec.bF),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		},
		lstairs);
}();
var author$project$GameDefinitions$Game2$Game2Definitions$common_window_height = 12;
var author$project$GameDefinitions$Game2$Game2Definitions$common_window_width = 12;
var author$project$GameDefinitions$Game2$Game2Definitions$customGameCompletionFunc = F2(
	function (floorid, coords) {
		return _Utils_eq(floorid, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id) && ((coords.bk < 12) && (coords.bl >= 5));
	});
var author$project$GameDefinitions$Common$gridInitializer = F3(
	function (nr_rows, nr_cols, config_params) {
		return A2(
			author$project$Grid$initialize,
			{
				ch: A2(author$project$GameDefinitions$Common$get_total_height, config_params, nr_rows),
				cZ: A2(author$project$GameDefinitions$Common$get_total_width, config_params, nr_cols)
			},
			author$project$Tile$NoTileYet);
	});
var author$project$GameDefinitions$Common$getBookcaseCoords = F2(
	function (config_params, bInfo) {
		var top_left_y = A4(author$project$GameDefinitions$Common$get_room_top_left_y, bInfo.bJ, bInfo.bH, bInfo.bK, config_params);
		var top_left_x = A4(author$project$GameDefinitions$Common$get_room_top_left_x, bInfo.bJ, bInfo.bH, bInfo.bK, config_params);
		var _n0 = _Utils_Tuple2(top_left_x + bInfo.b4, top_left_y + bInfo.cN);
		var x_coord = _n0.a;
		var y_coord = _n0.b;
		return A2(author$project$Grid$Coordinate, x_coord, y_coord);
	});
var elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var elm$core$Array$setHelp = F4(
	function (shift, index, value, tree) {
		var pos = elm$core$Array$bitMask & (index >>> shift);
		var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
		if (!_n0.$) {
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
		var x = _n0.bk;
		var y = _n0.bl;
		if (x < 0) {
			return grid;
		} else {
			if (y < 0) {
				return grid;
			} else {
				if (_Utils_cmp(x, grid.bc.cZ) > -1) {
					return grid;
				} else {
					if (_Utils_cmp(y, grid.bc.ch) > -1) {
						return grid;
					} else {
						var row = function () {
							var _n1 = A2(elm$core$Array$get, y, grid.aH);
							if (!_n1.$) {
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
								aH: A3(elm$core$Array$set, y, row_, grid.aH)
							});
					}
				}
			}
		}
	});
var author$project$Tile$Bookcase = function (a) {
	return {$: 5, a: a};
};
var author$project$GameDefinitions$Common$setBookcasesInGrid = F3(
	function (config_params, dbookcaseToCreate, grid) {
		var setTileBookcase = F3(
			function (coords, binfo, grid_) {
				return A3(
					author$project$Grid$set,
					coords,
					author$project$Tile$Bookcase(binfo),
					grid_);
			});
		var lcoordsAndbookcaseInfo = A2(
			elm$core$List$map,
			function (bkcinfo) {
				return _Utils_Tuple2(
					A2(author$project$GameDefinitions$Common$getBookcaseCoords, config_params, bkcinfo),
					bkcinfo.b0);
			},
			elm$core$Dict$values(dbookcaseToCreate));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var coords = _n0.a;
					var binfo = _n0.b;
					return A3(setTileBookcase, coords, binfo, gridacc);
				}),
			grid,
			lcoordsAndbookcaseInfo);
	});
var author$project$GameDefinitions$Common$getHoleCoordsAndHoleInfo = function (holeInfLoc) {
	return _Utils_Tuple2(
		_Utils_Tuple2(holeInfLoc.a$.bk, holeInfLoc.a$.bl),
		holeInfLoc.a_);
};
var author$project$Tile$Hole = function (a) {
	return {$: 2, a: a};
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
var author$project$Tile$Floor = function (a) {
	return {$: 0, a: a};
};
var author$project$Tile$FloorInfo = F8(
	function (item, floorDrawing, mbTeleporterObject, floorType, isTransparent, isWalkable, visibility, color) {
		return {c5: color, de: floorDrawing, df: floorType, cm: isTransparent, cn: isWalkable, bA: item, cu: mbTeleporterObject, eq: visibility};
	});
var author$project$Tile$StoneFloor = 0;
var author$project$GameDefinitions$Common$alterItemFloorInfo = F2(
	function (previousTile, item_) {
		if ((!previousTile.$) && (!previousTile.a.$)) {
			var finfo = previousTile.a.a;
			var newFloorInfo = _Utils_update(
				finfo,
				{
					bA: elm$core$Maybe$Just(item_)
				});
			return author$project$Tile$Floor(newFloorInfo);
		} else {
			return author$project$Tile$Floor(
				A8(
					author$project$Tile$FloorInfo,
					elm$core$Maybe$Just(item_),
					elm$core$Maybe$Nothing,
					elm$core$Maybe$Nothing,
					0,
					true,
					true,
					2,
					''));
		}
	});
var author$project$GameDefinitions$Common$getItemAndItemCoords = F2(
	function (configParams, itemInfo) {
		var _n0 = function () {
			var _n1 = itemInfo.aa;
			if (_n1.$ === 1) {
				var x = _n1.a;
				var y = _n1.b;
				return _Utils_Tuple2(x, y);
			} else {
				var roomRowNr = _n1.a;
				var roomColNr = _n1.b;
				var mbLocationShift = _n1.c;
				var roomType = _n1.d;
				var xFactor = _n1.e;
				var yFactor = _n1.f;
				return A7(author$project$GameDefinitions$Common$get_position_in_room, roomRowNr, roomColNr, mbLocationShift, roomType, xFactor, yFactor, configParams);
			}
		}();
		var xCoord = _n0.a;
		var yCoord = _n0.b;
		return _Utils_Tuple3(xCoord, yCoord, itemInfo.bA);
	});
var author$project$GameDefinitions$Common$setItemsInGrid = F3(
	function (config_params, dItemsToCreate, grid) {
		var tileItem = F2(
			function (mbpreviousFloorTile_, it_) {
				return A2(author$project$GameDefinitions$Common$alterItemFloorInfo, mbpreviousFloorTile_, it_);
			});
		var setTileFloorItem = F4(
			function (xcoord, ycoord, it_, grid_) {
				var mbPreviousFloorTile = A2(
					author$project$Grid$get,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					grid_);
				return A3(
					author$project$Grid$set,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					A2(tileItem, mbPreviousFloorTile, it_),
					grid_);
			});
		var lcoordsAndItem = A2(
			elm$core$List$map,
			author$project$GameDefinitions$Common$getItemAndItemCoords(config_params),
			elm$core$Dict$values(dItemsToCreate));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var x_coord = _n0.a;
					var y_coord = _n0.b;
					var it = _n0.c;
					return A4(setTileFloorItem, x_coord, y_coord, it, gridacc);
				}),
			grid,
			lcoordsAndItem);
	});
var author$project$GameDefinitions$Common$getSpecialTileAndCoords = F2(
	function (configParams, specialTileInfo) {
		var _n0 = function () {
			var _n1 = specialTileInfo.aa;
			if (_n1.$ === 1) {
				var x = _n1.a;
				var y = _n1.b;
				return _Utils_Tuple2(x, y);
			} else {
				var roomRowNr = _n1.a;
				var roomColNr = _n1.b;
				var mbLocationShift = _n1.c;
				var roomType = _n1.d;
				var xFactor = _n1.e;
				var yFactor = _n1.f;
				return A7(author$project$GameDefinitions$Common$get_position_in_room, roomRowNr, roomColNr, mbLocationShift, roomType, xFactor, yFactor, configParams);
			}
		}();
		var xCoord = _n0.a;
		var yCoord = _n0.b;
		return _Utils_Tuple3(xCoord, yCoord, specialTileInfo.cU);
	});
var author$project$GameDefinitions$Common$setSpecialTilesInGrid = F3(
	function (config_params, dspecialTilesToCreate, grid) {
		var setSpecialTile = F4(
			function (xcoord, ycoord, tile_, grid_) {
				return A3(
					author$project$Grid$set,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					tile_,
					grid_);
			});
		var lcoordsAndTile = A2(
			elm$core$List$map,
			author$project$GameDefinitions$Common$getSpecialTileAndCoords(config_params),
			elm$core$Dict$values(dspecialTilesToCreate));
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var x_coord = _n0.a;
					var y_coord = _n0.b;
					var tile = _n0.c;
					return A4(setSpecialTile, x_coord, y_coord, tile, gridacc);
				}),
			grid,
			lcoordsAndTile);
	});
var author$project$GameDefinitions$Common$getBookcasesByFloorId = F2(
	function (floorId_, dBcase) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.S, floorId_);
				}),
			dBcase);
	});
var author$project$GameDefinitions$Common$BookcaseCreationInfo = F8(
	function (bookcaseId, floorId, room_row_nr, room_col_nr, row_inside_room, col_inside_room, room_type, bookcaseInfo) {
		return {c3: bookcaseId, b0: bookcaseInfo, b4: col_inside_room, S: floorId, bH: room_col_nr, bJ: room_row_nr, bK: room_type, cN: row_inside_room};
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$addToBookcaseCreationDict = F2(
	function (bkcinfo, bkcDict) {
		return A3(elm$core$Dict$insert, bkcinfo.c3, bkcinfo, bkcDict);
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getBookcaseCreationDict = function (infoList) {
	var insertOneBookCase = function (it) {
		return A2(elm$core$Dict$insert, it.c3, it);
	};
	return A3(
		elm$core$List$foldl,
		F2(
			function (it, dAcc) {
				return A2(insertOneBookCase, it, dAcc);
			}),
		elm$core$Dict$empty,
		infoList);
};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol = 1;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow = 4;
var author$project$Tile$AlwaysInvisible = 3;
var author$project$Tile$alwaysInvisibleBookcaseInfo = {cm: false, eq: 3};
var author$project$Tile$defaultBookcaseInfo = {cm: false, eq: 2};
var elm$core$Basics$neq = _Utils_notEqual;
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
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$bookcaseCreationDict = function () {
	var includeBookcaseInCorners = true;
	var inc = includeBookcaseInCorners ? 1 : 0;
	var bdict = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getBookcaseCreationDict(
		_Utils_ap(
			A2(
				elm$core$List$map,
				function (col) {
					return A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, col, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, -1, col, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$defaultBookcaseInfo);
				},
				A2(
					elm$core$List$filter,
					function (col) {
						return !_Utils_eq(col, (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth / 2) | 0);
					},
					A2(elm$core$List$range, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth - 1))),
			_Utils_ap(
				A2(
					elm$core$List$map,
					function (col) {
						return A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, col + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight, col, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$defaultBookcaseInfo);
					},
					A2(
						elm$core$List$filter,
						function (col) {
							return !_Utils_eq(col, (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth / 2) | 0);
						},
						A2(elm$core$List$range, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth - 1))),
				_Utils_ap(
					A2(
						elm$core$List$map,
						function (row) {
							return A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, (row + inc) + (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth * 2), author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, row, -1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$defaultBookcaseInfo);
						},
						A2(elm$core$List$range, -inc, (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight - 1) + inc)),
					A2(
						elm$core$List$map,
						function (row) {
							return A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, (((row + inc) + (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth * 2)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight) + (2 * inc), author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, row, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$defaultBookcaseInfo);
						},
						A2(elm$core$List$range, -inc, (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight - 1) + inc))))));
	var bdictWithAlteredCorners = includeBookcaseInCorners ? A2(
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$addToBookcaseCreationDict,
		A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, ((((author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight - 1) + (2 * inc)) + (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth * 2)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight) + (2 * inc), author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$alwaysInvisibleBookcaseInfo),
		A2(
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$addToBookcaseCreationDict,
			A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, ((author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth * 2) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight) + (2 * inc), author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, -1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$alwaysInvisibleBookcaseInfo),
			A2(
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$addToBookcaseCreationDict,
				A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, ((author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight - 1) + (2 * inc)) + (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth * 2), author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomHeight, -1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$alwaysInvisibleBookcaseInfo),
				A2(
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$addToBookcaseCreationDict,
					A8(author$project$GameDefinitions$Common$BookcaseCreationInfo, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomWidth * 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomCol, -1, -1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$Tile$alwaysInvisibleBookcaseInfo),
					bdict)))) : bdict;
	return bdictWithAlteredCorners;
}();
var author$project$GameDefinitions$Game2$Basement$basementBookcases = A2(author$project$GameDefinitions$Common$getBookcasesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$bookcaseCreationDict);
var author$project$TileGrid$RoomRectangle = F4(
	function (top_left_x, top_left_y, width, height) {
		return {ch: height, bT: top_left_x, bU: top_left_y, cZ: width};
	});
var author$project$GameDefinitions$Common$getRoom = F4(
	function (row_nr, col_nr, room_type, config_params) {
		var _n0 = function () {
			switch (room_type.$) {
				case 0:
					return _Utils_Tuple2(
						A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr),
						A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr));
				case 1:
					return _Utils_Tuple2(
						A3(author$project$GameDefinitions$Common$small_height_room_top_left_x, config_params, row_nr, col_nr),
						A3(author$project$GameDefinitions$Common$small_height_room_top_left_y, config_params, row_nr, col_nr));
				case 2:
					return _Utils_Tuple2(
						A3(author$project$GameDefinitions$Common$small_width_room_top_left_x, config_params, row_nr, col_nr),
						A3(author$project$GameDefinitions$Common$small_width_room_top_left_y, config_params, row_nr, col_nr));
				default:
					var rwidth = room_type.a;
					var rheight = room_type.b;
					return _Utils_Tuple2(
						A5(author$project$GameDefinitions$Common$custom_room_top_left_x, config_params, row_nr, col_nr, rwidth, rheight),
						A5(author$project$GameDefinitions$Common$custom_room_top_left_y, config_params, row_nr, col_nr, rwidth, rheight));
			}
		}();
		var top_left_x = _n0.a;
		var top_left_y = _n0.b;
		var _n2 = function () {
			switch (room_type.$) {
				case 0:
					return _Utils_Tuple2(config_params.a, config_params.a);
				case 1:
					return _Utils_Tuple2(config_params.be, config_params.bd);
				case 2:
					return _Utils_Tuple2(config_params.bg, config_params.bf);
				default:
					var rwidth = room_type.a;
					var rheight = room_type.b;
					return _Utils_Tuple2(rwidth, rheight);
			}
		}();
		var room_width = _n2.a;
		var room_height = _n2.b;
		return A4(author$project$TileGrid$RoomRectangle, top_left_x, top_left_y, room_width, room_height);
	});
var author$project$GameDefinitions$Common$getCustomRoom = F7(
	function (row_nr, col_nr, shift_x, shift_y, rwidth, rheight, config_params) {
		var room = A4(author$project$GameDefinitions$Common$getRoom, row_nr, col_nr, author$project$GameModel$SquareRoom, config_params);
		var newRoom = A4(author$project$TileGrid$RoomRectangle, room.bT + shift_x, room.bU + shift_y, rwidth, rheight);
		return newRoom;
	});
var author$project$GameDefinitions$Game2$Basement$basementCustomRoomRectangles = _List_fromArray(
	[
		A7(author$project$GameDefinitions$Common$getCustomRoom, 4, 3, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$intXshiftAdjustmentForBasementCustomRoom, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Common$TunnelDown = 1;
var author$project$GameDefinitions$Common$TunnelUp = 0;
var author$project$Tile$DoorToDown = 3;
var author$project$Tile$DoorToUp = 2;
var author$project$Tile$NoDoorNoWall = {$: 2};
var author$project$Tile$UseDoor = function (a) {
	return {$: 0, a: a};
};
var author$project$Tile$defaultBlueDoorInfo = function (dorientation) {
	return {
		c5: elm$core$Maybe$Just('blue'),
		cl: false,
		dP: dorientation,
		cL: _List_fromArray(
			[
				author$project$Item$Key(
				{aj: 'blue'})
			]),
		eq: 2
	};
};
var author$project$GameDefinitions$Common$defaultVerticalBlueDoorOptions = {
	j: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(2)),
	l: author$project$Tile$NoDoorNoWall,
	o: author$project$Tile$NoDoorNoWall,
	p: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(3))
};
var author$project$Tile$defaultGreenDoorInfo = function (dorientation) {
	return {
		c5: elm$core$Maybe$Just('green'),
		cl: false,
		dP: dorientation,
		cL: _List_fromArray(
			[
				author$project$Item$Key(
				{aj: 'green'})
			]),
		eq: 2
	};
};
var author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions = {
	j: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(2)),
	l: author$project$Tile$NoDoorNoWall,
	o: author$project$Tile$NoDoorNoWall,
	p: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(3))
};
var author$project$Tile$defaultOpenDoorInfo = function (dorientation) {
	return {c5: elm$core$Maybe$Nothing, cl: true, dP: dorientation, cL: _List_Nil, eq: 2};
};
var author$project$GameDefinitions$Common$defaultVerticalOpenDoorOptions = {
	j: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(2)),
	l: author$project$Tile$NoDoorNoWall,
	o: author$project$Tile$NoDoorNoWall,
	p: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(3))
};
var author$project$Tile$defaultRedDoorInfo = function (dorientation) {
	return {
		c5: elm$core$Maybe$Just('red'),
		cl: false,
		dP: dorientation,
		cL: _List_fromArray(
			[
				author$project$Item$Key(
				{aj: 'red'})
			]),
		eq: 2
	};
};
var author$project$GameDefinitions$Common$defaultVerticalRedDoorOptions = {
	j: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(2)),
	l: author$project$Tile$NoDoorNoWall,
	o: author$project$Tile$NoDoorNoWall,
	p: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(3))
};
var author$project$Tile$defaultYellowDoorInfo = function (dorientation) {
	return {
		c5: elm$core$Maybe$Just('yellow'),
		cl: false,
		dP: dorientation,
		cL: _List_fromArray(
			[
				author$project$Item$Key(
				{aj: 'yellow'})
			]),
		eq: 2
	};
};
var author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions = {
	j: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(2)),
	l: author$project$Tile$NoDoorNoWall,
	o: author$project$Tile$NoDoorNoWall,
	p: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(3))
};
var author$project$TileGrid$TunnelRectangle = F4(
	function (top_left_x, top_left_y, width, height) {
		return {ch: height, bT: top_left_x, bU: top_left_y, cZ: width};
	});
var author$project$GameDefinitions$Common$getVerticalTunnel = F9(
	function (row_nr, col_nr, orientation, mbWidth, mbHeight, mbFromRoomType, mbToRoomType, mbShift, config_params) {
		var tunnel_width = A2(elm$core$Maybe$withDefault, 1, mbWidth);
		var tunnel_height = function () {
			if (!mbHeight.$) {
				var aheight = mbHeight.a;
				return aheight;
			} else {
				return (((2 * config_params.z) + config_params.au) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType)) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbToRoomType);
			}
		}();
		var _n0 = A2(
			elm$core$Maybe$withDefault,
			_Utils_Tuple2(0, 0),
			mbShift);
		var x_shift = _n0.a;
		var y_shift = _n0.b;
		var _n1 = function () {
			if (!orientation) {
				return _Utils_Tuple2(
					(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + (((config_params.a - tunnel_width) / 2) | 0)) + x_shift,
					((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) - tunnel_height) + y_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
			} else {
				return _Utils_Tuple2(
					(A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + (((config_params.a - tunnel_width) / 2) | 0)) + x_shift,
					((A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + config_params.a) + y_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeHorizontal(mbFromRoomType));
			}
		}();
		var top_left_x = _n1.a;
		var top_left_y = _n1.b;
		return A4(author$project$TileGrid$TunnelRectangle, top_left_x, top_left_y, tunnel_width, tunnel_height);
	});
var author$project$GameDefinitions$Game2$Basement$ctunShift = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H + 1;
var author$project$GameDefinitions$Game2$Basement$ctunShift2 = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H + 1;
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
				1,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a),
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
				1,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a),
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
				1,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(-author$project$GameDefinitions$Game2$Basement$ctunShift, 0))),
			author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				4,
				1,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(((4 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + (2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au)) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(author$project$GameDefinitions$Game2$Basement$ctunShift, 0))),
			author$project$GameDefinitions$Common$defaultVerticalRedDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				3,
				1,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(author$project$GameDefinitions$Game2$Basement$ctunShift2, 0))),
			author$project$GameDefinitions$Common$defaultVerticalGreenDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				4,
				1,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(-author$project$GameDefinitions$Game2$Basement$ctunShift, 0))),
			author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				5,
				3,
				0,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(author$project$GameDefinitions$Game2$Basement$ctunShift2, 0))),
			author$project$GameDefinitions$Common$defaultVerticalYellowDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				5,
				4,
				0,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just((2 * author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z) + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.au),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(-author$project$GameDefinitions$Game2$Basement$ctunShift, 0))),
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
var author$project$GameDefinitions$Game2$Basement$basementHiddenRoomRectangles = _List_fromArray(
	[
		A4(author$project$GameDefinitions$Common$getRoom, 4, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Common$getHolesByFloorId = F2(
	function (floorId, dHoles) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.a_.S, floorId);
				}),
			dHoles);
	});
var author$project$Tile$HoleInfo = F4(
	function (holeId, floorId, target_id, visibility) {
		return {S: floorId, dl: holeId, d0: target_id, eq: visibility};
	});
var author$project$GameDefinitions$Common$createHoleInfoWithLocation = F5(
	function (holeId, targetId, floorId, coordsCalcInfo, configParams) {
		var _n0 = function () {
			if (coordsCalcInfo.$ === 1) {
				var x = coordsCalcInfo.a;
				var y = coordsCalcInfo.b;
				return _Utils_Tuple2(x, y);
			} else {
				var roomRowNr = coordsCalcInfo.a;
				var roomColNr = coordsCalcInfo.b;
				var mbLocationShift = coordsCalcInfo.c;
				var roomType = coordsCalcInfo.d;
				var xFactor = coordsCalcInfo.e;
				var yFactor = coordsCalcInfo.f;
				return A7(author$project$GameDefinitions$Common$get_position_in_room, roomRowNr, roomColNr, mbLocationShift, roomType, xFactor, yFactor, configParams);
			}
		}();
		var xCoord = _n0.a;
		var yCoord = _n0.b;
		return {
			a_: A4(author$project$Tile$HoleInfo, holeId, floorId, targetId, 2),
			a$: A2(author$project$Grid$Coordinate, xCoord, yCoord)
		};
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getHolesDict = function (infoList) {
	var insertOneHole = function (it) {
		return A2(elm$core$Dict$insert, it.a_.dl, it);
	};
	return A3(
		elm$core$List$foldl,
		F2(
			function (it, dAcc) {
				return A2(insertOneHole, it, dAcc);
			}),
		elm$core$Dict$empty,
		infoList);
};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$holesDict = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getHolesDict(
	A2(
		elm$core$List$map,
		function (func_y) {
			return func_y(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		},
		_List_fromArray(
			[
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				1,
				1,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 1, 1, elm$core$Maybe$Nothing, author$project$GameModel$HorizontalRoom, 0.5, 0.5)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				2,
				2,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 1, 4, elm$core$Maybe$Nothing, author$project$GameModel$HorizontalRoom, 0.5, 0.75)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				3,
				3,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 3, 5, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.25, 0.5)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				4,
				4,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 5, 5, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				5,
				5,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 3, 4, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.75, 0.5)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				6,
				6,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 3, 3, elm$core$Maybe$Nothing, author$project$GameModel$VerticalRoom, 0.5, 0.5)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				7,
				7,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 5, 3, elm$core$Maybe$Nothing, author$project$GameModel$VerticalRoom, 0.5, 0.25)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				8,
				8,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 1, 2, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.75)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				9,
				9,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 3, 4, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				10,
				10,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 2, 1, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
				A4(
				author$project$GameDefinitions$Common$createHoleInfoWithLocation,
				11,
				11,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 2, 3, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.75, 0.5))
			])));
var author$project$GameDefinitions$Game2$Basement$basementHoles = A2(author$project$GameDefinitions$Common$getHolesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$holesDict);
var author$project$Tile$DoorToTheLeft = 1;
var author$project$Tile$DoorToTheRight = 0;
var author$project$GameDefinitions$Common$defaultHorizontalGreenDoorOptions = {
	j: author$project$Tile$NoDoorNoWall,
	l: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(0)),
	o: author$project$Tile$UseDoor(
		author$project$Tile$defaultGreenDoorInfo(1)),
	p: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$defaultHorizontalOpenDoorOptions = {
	j: author$project$Tile$NoDoorNoWall,
	l: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(0)),
	o: author$project$Tile$UseDoor(
		author$project$Tile$defaultOpenDoorInfo(1)),
	p: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$defaultHorizontalRedDoorOptions = {
	j: author$project$Tile$NoDoorNoWall,
	l: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(0)),
	o: author$project$Tile$UseDoor(
		author$project$Tile$defaultRedDoorInfo(1)),
	p: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$defaultHorizontalYellowDoorOptions = {
	j: author$project$Tile$NoDoorNoWall,
	l: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(0)),
	o: author$project$Tile$UseDoor(
		author$project$Tile$defaultYellowDoorInfo(1)),
	p: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Common$TunnelToTheRight = 0;
var author$project$GameDefinitions$Common$getHorizontalTunnel = F9(
	function (row_nr, col_nr, orientation, mbWidth, mbHeight, mbFromRoomType, mbToRoomType, mbShift, config_params) {
		var tunnel_width = function () {
			if (!mbWidth.$) {
				var awidth = mbWidth.a;
				return awidth;
			} else {
				return (((2 * config_params.H) + config_params.at) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType)) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbToRoomType);
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
			if (orientation === 1) {
				return _Utils_Tuple2(
					((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) - tunnel_width) + x_shift) + author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
					(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + (((config_params.a - tunnel_height) / 2) | 0)) + y_shift);
			} else {
				return _Utils_Tuple2(
					((A3(author$project$GameDefinitions$Common$square_room_top_left_x, config_params, row_nr, col_nr) + config_params.a) + x_shift) - author$project$GameDefinitions$Common$addOneIfRoomTypeVertical(mbFromRoomType),
					(A3(author$project$GameDefinitions$Common$square_room_top_left_y, config_params, row_nr, col_nr) + (((config_params.a - tunnel_height) / 2) | 0)) + y_shift);
			}
		}();
		var top_left_x = _n1.a;
		var top_left_y = _n1.b;
		return A4(author$project$TileGrid$TunnelRectangle, top_left_x, top_left_y, tunnel_width, tunnel_height);
	});
var author$project$GameDefinitions$Common$getCommonHorizontalTunnel = F3(
	function (row_nr, col_nr, config_params) {
		return A9(author$project$GameDefinitions$Common$getHorizontalTunnel, row_nr, col_nr, 0, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, config_params);
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
		return A9(author$project$GameDefinitions$Common$getVerticalTunnel, row_nr, col_nr, 1, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing, config_params);
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
	function (floorId_, dItems) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.S, floorId_);
				}),
			dItems);
	});
var author$project$GameDefinitions$Common$ItemCreationInfo = F4(
	function (itemId, item, floorId, coordsCalcInfo) {
		return {aa: coordsCalcInfo, S: floorId, bA: item, ds: itemId};
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getItemDict = function (infoList) {
	var insertOneItem = function (it) {
		return A2(elm$core$Dict$insert, it.ds, it);
	};
	return A3(
		elm$core$List$foldl,
		F2(
			function (it, dAcc) {
				return A2(insertOneItem, it, dAcc);
			}),
		elm$core$Dict$empty,
		infoList);
};
var author$project$Item$InvisibleInMap = 1;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict = function () {
	var the_book_3 = author$project$Item$Book(
		{
			bm: '...',
			br: 'do not let yourself get caught carrying this book. It is a proscribed one in our day and age ... ',
			a0: 3,
			a1: elm$core$Maybe$Just('book__transparent_bg_'),
			bx: elm$core$Maybe$Just('open_book__transparent_bg_'),
			a3: 1,
			bW: _List_Nil
		});
	var the_book_2 = author$project$Item$Book(
		{
			bm: '...',
			br: '',
			a0: 2,
			a1: elm$core$Maybe$Just('blue_book__small'),
			bx: elm$core$Maybe$Just('blue_book__open_small_'),
			a3: 1,
			bW: _List_fromArray(
				['a hidden plantation and some slave workers you will find ...', '... at the south west corner of the plantation a tree you will find where an important item concealed remains ...'])
		});
	var the_book = author$project$Item$Book(
		{
			bm: 'Lama\'s Wisdom',
			br: '',
			a0: 1,
			a1: elm$core$Maybe$Just('red_book__small_'),
			bx: elm$core$Maybe$Just('red_book__open__small'),
			a3: 1,
			bW: _List_fromArray(
				['By not harming others , we are creating the cause for peace in the future ...', '... If we follow the path of not harming, not fighting, this is the way to create peace in the future ...'])
		});
	return author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getItemDict(
		_List_fromArray(
			[
				A4(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				1,
				author$project$Item$Key(
					{aj: 'blue'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 4, 3, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5)),
				A4(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				2,
				author$project$Item$Key(
					{aj: 'yellow'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				A6(
					author$project$GameDefinitions$Common$RoomCoords,
					4,
					3,
					elm$core$Maybe$Just(
						_Utils_Tuple2(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$intXshiftAdjustmentForBasementCustomRoom, 0)),
					author$project$GameModel$SquareRoom,
					0.25,
					0.75)),
				A4(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				3,
				author$project$Item$Key(
					{aj: 'red'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 1, 2, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.75, 0.25)),
				A4(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				4,
				author$project$Item$Key(
					{aj: 'green'}),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 5, 6, elm$core$Maybe$Nothing, author$project$GameModel$HorizontalRoom, 0.5, 0.5)),
				A4(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				6,
				the_book,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 4, 1, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, 0.75, 0.25)),
				A4(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				7,
				the_book_2,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 4, 1, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, 0.25, 0.25)),
				A4(
				author$project$GameDefinitions$Common$ItemCreationInfo,
				8,
				the_book_3,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 4, 1, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, 0.75, 0.7))
			]));
}();
var author$project$GameDefinitions$Game2$Basement$basementItems = A2(author$project$GameDefinitions$Common$getItemsByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$itemCreationDict);
var author$project$GameDefinitions$Common$getSpecialTilesByFloorId = F2(
	function (floorId_, dSpecialTile) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, v) {
					return _Utils_eq(v.S, floorId_);
				}),
			dSpecialTile);
	});
var author$project$GameDefinitions$Common$SpecialTileCreationInfo = F4(
	function (tileId, tile, floorId, coordsCalcInfo) {
		return {aa: coordsCalcInfo, S: floorId, cU: tile, d8: tileId};
	});
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getspecialItemDict = function (infoList) {
	var insertOneSpecialTile = function (it) {
		return A2(elm$core$Dict$insert, it.d8, it);
	};
	return A3(
		elm$core$List$foldl,
		F2(
			function (it, dAcc) {
				return A2(insertOneSpecialTile, it, dAcc);
			}),
		elm$core$Dict$empty,
		infoList);
};
var author$project$Item$PaperInfo = F5(
	function (id, description, text, mapVisibility, imgSrc) {
		return {br: description, a0: id, a1: imgSrc, a3: mapVisibility, d6: text};
	});
var author$project$Item$VisibleInMap = 0;
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theThreePiecesOfPaper = function () {
	var newPaper = function (pidx) {
		return author$project$Item$Paper(
			A5(
				author$project$Item$PaperInfo,
				pidx,
				'a kind of document ... ',
				'',
				0,
				elm$core$Maybe$Just(
					elm$core$String$fromInt(pidx))));
	};
	return A2(
		elm$core$List$map,
		newPaper,
		A2(elm$core$List$range, 1, 3));
}();
var author$project$Tile$ConverterTile = F2(
	function (a, b) {
		return {$: 12, a: a, b: b};
	});
var author$project$Tile$Tree = function (a) {
	return {$: 11, a: a};
};
var author$project$Tile$defaultFloorInfo = {c5: 'default', de: elm$core$Maybe$Nothing, df: 0, cm: false, cn: true, bA: elm$core$Maybe$Nothing, cu: elm$core$Maybe$Nothing, eq: 2};
var author$project$Tile$GrassFloor = 1;
var author$project$Tile$defaultGrassFloorInfo = _Utils_update(
	author$project$Tile$defaultFloorInfo,
	{df: 1});
var author$project$Tile$defaultPineTreeInfo = {ed: 'pinetree', eq: 2};
var author$project$Tile$defaultRoundTreeInfo = {ed: 'roundtree', eq: 2};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$specialTileCreationDict = function () {
	var roomRowNr = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow;
	var roomColNr = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol;
	var grassFloorInfo = author$project$Tile$defaultGrassFloorInfo;
	var grassFloorWithItem = author$project$Tile$Floor(
		_Utils_update(
			grassFloorInfo,
			{
				bA: elm$core$List$head(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theThreePiecesOfPaper)
			}));
	var floorInfo = author$project$Tile$defaultFloorInfo;
	var stoneFloorWithBox = author$project$Tile$Floor(
		_Utils_update(
			floorInfo,
			{
				bA: elm$core$Maybe$Just(
					author$project$Item$Box(
						{a1: elm$core$Maybe$Nothing, a3: 1}))
			}));
	var stoneFloorWithGrayKey = author$project$Tile$Floor(
		_Utils_update(
			floorInfo,
			{
				bA: elm$core$Maybe$Just(
					author$project$Item$Key(
						{aj: 'gray'}))
			}));
	var convTile2 = A2(author$project$Tile$ConverterTile, stoneFloorWithBox, stoneFloorWithGrayKey);
	var convTile1 = A2(
		author$project$Tile$ConverterTile,
		author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
		grassFloorWithItem);
	return author$project$GameDefinitions$Game2$ConfigParamsAndInfo$getspecialItemDict(
		_List_fromArray(
			[
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				1,
				author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.25, 0.17)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				2,
				author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.5, 0.17)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				3,
				author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.75, 0.17)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				4,
				author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.25, 0.4)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				5,
				author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.5, 0.4)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				6,
				author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.75, 0.4)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				7,
				author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.25, 0.65)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				8,
				author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.5, 0.65)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				9,
				author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.75, 0.65)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				10,
				convTile1,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.25, 0.9)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				11,
				author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.5, 0.9)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				12,
				author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, roomRowNr, roomColNr, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.75, 0.9)),
				A4(
				author$project$GameDefinitions$Common$SpecialTileCreationInfo,
				13,
				convTile2,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
				A6(author$project$GameDefinitions$Common$RoomCoords, 4, 1, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenLibraryRoomType, 0.25, 0.7))
			]));
}();
var author$project$GameDefinitions$Game2$Basement$basementSpecialTiles = A2(author$project$GameDefinitions$Common$getSpecialTilesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$specialTileCreationDict);
var author$project$GameDefinitions$Game2$Basement$basementStairsTunnel = _List_fromArray(
	[
		A9(
		author$project$GameDefinitions$Common$getHorizontalTunnel,
		6,
		6,
		0,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		A9(
		author$project$GameDefinitions$Common$getVerticalTunnel,
		6,
		6,
		1,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
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
var author$project$Grid$toCoordinates = function (gridder) {
	var s = gridder.bc;
	var xs = function (y) {
		return A2(
			elm$core$List$map,
			function (x) {
				return _Utils_Tuple2(x, y);
			},
			A2(elm$core$List$range, 0, s.cZ - 1));
	};
	var pairs = A2(
		elm$core$List$concatMap,
		xs,
		A2(elm$core$List$range, 0, s.ch - 1));
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
	if ((!mbtile.$) && (mbtile.a.$ === 3)) {
		return true;
	} else {
		return false;
	}
};
var author$project$Tile$Wall = function (a) {
	return {$: 3, a: a};
};
var author$project$Tile$setWallTileOrientation = F2(
	function (orientationStr, tile) {
		if (tile.$ === 3) {
			var winfo = tile.a;
			return author$project$Tile$Wall(
				_Utils_update(
					winfo,
					{dP: orientationStr}));
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
					{bk: coords.bk - 1, bl: coords.bl},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_));
		});
	var isTopLeftCorner = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_));
		});
	var isThreeWayAtTop = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk - 1, bl: coords.bl},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_)));
		});
	var isThreeWayAtRight = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk - 1, bl: coords.bl},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_)));
		});
	var isThreeWayAtLeft = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_)));
		});
	var isThreeWayAtBottom = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk - 1, bl: coords.bl},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_)));
		});
	var isInVerticalWall = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_));
		});
	var isInHorizontalWall = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk - 1, bl: coords.bl},
					grid_));
		});
	var isFourWay = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk - 1, bl: coords.bl},
					grid_)) && (author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_))));
		});
	var isCulDeSacAtTop = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl + 1},
					grid_));
		});
	var isCulDeSacAtRight = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk - 1, bl: coords.bl},
					grid_));
		});
	var isCulDeSacAtLeft = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_));
		});
	var isCulDeSacAtBottom = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_));
		});
	var isBottomRightCorner = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk - 1, bl: coords.bl},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_));
		});
	var isBottomLeftCorner = F3(
		function (tile, coords, grid_) {
			return author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk + 1, bl: coords.bl},
					grid_)) && author$project$Tile$isMbTileWall(
				A2(
					author$project$Grid$get,
					{bk: coords.bk, bl: coords.bl - 1},
					grid_));
		});
	var checkAndUpdateGriCoord = F2(
		function (coord, grid_) {
			var _n0 = A2(author$project$Grid$get, coord, grid_);
			if (_n0.$ === 1) {
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
				return A2(author$project$Grid$Coordinate, x, rrect.bU);
			},
			A2(elm$core$List$range, rrect.bT, (rrect.bT + rrect.cZ) - 1)) : ((topBotLeftRightStr === 'top-1') ? A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Grid$Coordinate, x, rrect.bU - 1);
			},
			A2(elm$core$List$range, rrect.bT, (rrect.bT + rrect.cZ) - 1)) : ((topBotLeftRightStr === 'top-1andCorners') ? function (lc) {
			return A2(
				elm$core$List$append,
				lc,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.bT + rrect.cZ, rrect.bU - 1)
					]));
		}(
			A2(
				elm$core$List$append,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.bT - 1, rrect.bU - 1)
					]),
				A2(
					elm$core$List$map,
					function (x) {
						return A2(author$project$Grid$Coordinate, x, rrect.bU - 1);
					},
					A2(elm$core$List$range, rrect.bT, (rrect.bT + rrect.cZ) - 1)))) : ((topBotLeftRightStr === 'bottom') ? A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Grid$Coordinate, x, (rrect.bU + rrect.ch) - 1);
			},
			A2(elm$core$List$range, rrect.bT, (rrect.bT + rrect.cZ) - 1)) : ((topBotLeftRightStr === 'bottom+1') ? A2(
			elm$core$List$map,
			function (x) {
				return A2(author$project$Grid$Coordinate, x, ((rrect.bU + rrect.ch) - 1) + 1);
			},
			A2(elm$core$List$range, rrect.bT, (rrect.bT + rrect.cZ) - 1)) : ((topBotLeftRightStr === 'bottom+1andCorners') ? function (lc) {
			return A2(
				elm$core$List$append,
				lc,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.bT + rrect.cZ, ((rrect.bU + rrect.ch) - 1) + 1)
					]));
		}(
			A2(
				elm$core$List$append,
				_List_fromArray(
					[
						A2(author$project$Grid$Coordinate, rrect.bT - 1, ((rrect.bU + rrect.ch) - 1) + 1)
					]),
				A2(
					elm$core$List$map,
					function (x) {
						return A2(author$project$Grid$Coordinate, x, ((rrect.bU + rrect.ch) - 1) + 1);
					},
					A2(elm$core$List$range, rrect.bT, (rrect.bT + rrect.cZ) - 1)))) : ((topBotLeftRightStr === 'left') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, rrect.bT, y);
			},
			A2(elm$core$List$range, rrect.bU, (rrect.bU + rrect.ch) - 1)) : ((topBotLeftRightStr === 'left-1') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, rrect.bT - 1, y);
			},
			A2(elm$core$List$range, rrect.bU, (rrect.bU + rrect.ch) - 1)) : ((topBotLeftRightStr === 'right') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, (rrect.bT + rrect.cZ) - 1, y);
			},
			A2(elm$core$List$range, rrect.bU, (rrect.bU + rrect.ch) - 1)) : ((topBotLeftRightStr === 'right+1') ? A2(
			elm$core$List$map,
			function (y) {
				return A2(author$project$Grid$Coordinate, ((rrect.bT + rrect.cZ) - 1) + 1, y);
			},
			A2(elm$core$List$range, rrect.bU, (rrect.bU + rrect.ch) - 1)) : _List_Nil)))))))));
	});
var author$project$Tile$defaultWallInfo = {cu: elm$core$Maybe$Nothing, dP: 'horizontal', eq: 2};
var author$project$Tile$defaultWallUpInfo = {cu: elm$core$Maybe$Nothing, dP: 'up', eq: 2};
var author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallDependingOnPreviousTile = F6(
	function (rrect, topBotLeftRightStr, verticalWallWidth, horizontalWallHeight, mbLtiles, grid) {
		var ltiles = A2(
			elm$core$List$map,
			function (x) {
				return elm$core$Maybe$Just(x);
			},
			A2(elm$core$Maybe$withDefault, _List_Nil, mbLtiles));
		var lcoords = A2(author$project$MapGen$determineRectangularRegionBoundaries, rrect, topBotLeftRightStr);
		var gridMultipleSetOnTop = F3(
			function (gcoords, tile, grid_) {
				return A3(
					elm$core$List$foldl,
					F2(
						function (c, gacc) {
							return A3(author$project$Grid$set, c, tile, gacc);
						}),
					grid_,
					A2(
						elm$core$List$map,
						function (inc) {
							return A2(author$project$Grid$Coordinate, gcoords.bk, gcoords.bl - inc);
						},
						A2(elm$core$List$range, 0, horizontalWallHeight - 1)));
			});
		var gridMultipleSetOnRight = F3(
			function (gcoords, tile, grid_) {
				return A3(
					elm$core$List$foldl,
					F2(
						function (c, gacc) {
							return A3(author$project$Grid$set, c, tile, gacc);
						}),
					grid_,
					A2(
						elm$core$List$map,
						function (inc) {
							return A2(author$project$Grid$Coordinate, gcoords.bk + inc, gcoords.bl);
						},
						A2(elm$core$List$range, 0, verticalWallWidth - 1)));
			});
		var gridMultipleSetOnLeft = F3(
			function (gcoords, tile, grid_) {
				return A3(
					elm$core$List$foldl,
					F2(
						function (c, gacc) {
							return A3(author$project$Grid$set, c, tile, gacc);
						}),
					grid_,
					A2(
						elm$core$List$map,
						function (inc) {
							return A2(author$project$Grid$Coordinate, gcoords.bk - inc, gcoords.bl);
						},
						A2(elm$core$List$range, 0, verticalWallWidth - 1)));
			});
		var gridMultipleSetOnBottom = F3(
			function (gcoords, tile, grid_) {
				return A3(
					elm$core$List$foldl,
					F2(
						function (c, gacc) {
							return A3(author$project$Grid$set, c, tile, gacc);
						}),
					grid_,
					A2(
						elm$core$List$map,
						function (inc) {
							return A2(author$project$Grid$Coordinate, gcoords.bk, gcoords.bl + inc);
						},
						A2(elm$core$List$range, 0, horizontalWallHeight - 1)));
			});
		return A3(
			elm$core$List$foldl,
			F2(
				function (cellcoords, gridacc) {
					return (A2(
						elm$core$List$member,
						A2(author$project$Grid$get, cellcoords, gridacc),
						ltiles) || _Utils_eq(mbLtiles, elm$core$Maybe$Nothing)) ? (((topBotLeftRightStr === 'left-1') || (topBotLeftRightStr === 'left')) ? A3(
						gridMultipleSetOnLeft,
						cellcoords,
						author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
						gridacc) : (((topBotLeftRightStr === 'right') || (topBotLeftRightStr === 'right+1')) ? A3(
						gridMultipleSetOnRight,
						cellcoords,
						author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
						gridacc) : (((topBotLeftRightStr === 'top') || ((topBotLeftRightStr === 'top-1') || (topBotLeftRightStr === 'top-1andCorners'))) ? A3(
						gridMultipleSetOnTop,
						cellcoords,
						author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
						gridacc) : (((topBotLeftRightStr === 'bottom') || ((topBotLeftRightStr === 'bottom+1') || (topBotLeftRightStr === 'bottom+1andCorners'))) ? A3(
						gridMultipleSetOnBottom,
						cellcoords,
						author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
						gridacc) : A3(
						author$project$Grid$set,
						cellcoords,
						author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
						gridacc))))) : gridacc;
				}),
			grid,
			lcoords);
	});
var author$project$MapGen$createWallBoundariesDependingOnPreviousTile = F5(
	function (lrrect, verticalWallWidth, horizontalWallHeight, mbLtiles, grid) {
		var fillBoundariesIfNecessary = F2(
			function (rrect, grid_) {
				return A6(
					author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallDependingOnPreviousTile,
					rrect,
					'right+1',
					verticalWallWidth,
					horizontalWallHeight,
					mbLtiles,
					A6(
						author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallDependingOnPreviousTile,
						rrect,
						'left-1',
						verticalWallWidth,
						horizontalWallHeight,
						mbLtiles,
						A6(
							author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallDependingOnPreviousTile,
							rrect,
							'bottom+1andCorners',
							verticalWallWidth,
							horizontalWallHeight,
							mbLtiles,
							A6(author$project$MapGen$determineRectangularRegionBoundariesAndFillWithWallDependingOnPreviousTile, rrect, 'top-1andCorners', verticalWallWidth, horizontalWallHeight, mbLtiles, grid_))));
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
var author$project$MapGen$createWallBoundaries = F4(
	function (lrrect, verticalWallWidth, horizontalWallHeight, grid) {
		return A5(
			author$project$MapGen$createWallBoundariesDependingOnPreviousTile,
			lrrect,
			verticalWallWidth,
			horizontalWallHeight,
			elm$core$Maybe$Just(
				_List_fromArray(
					[author$project$Tile$NoTileYet])),
			grid);
	});
var author$project$Tile$Door = function (a) {
	return {$: 6, a: a};
};
var author$project$Tile$isNoTileYet = function (tile) {
	if (tile.$ === 13) {
		return true;
	} else {
		return false;
	}
};
var author$project$Tile$isWall = function (tile) {
	if (tile.$ === 3) {
		return true;
	} else {
		return false;
	}
};
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
var author$project$MapGen$dungeonRectangleToGridFunc = F5(
	function (roomrect, doorWallOptions, mbSpecialFloorOption, mbFloorColor, grid) {
		var useWalls = false;
		var top_y = roomrect.bU;
		var right_x = (roomrect.bT + roomrect.cZ) - 1;
		var left_x = roomrect.bT;
		var lx = A2(elm$core$List$range, left_x, right_x);
		var isBorderTileFunc = function (thetile) {
			return author$project$Tile$isWall(thetile) || author$project$Tile$isNoTileYet(thetile);
		};
		var tryToInferIfHorizontalOrVerticalGivenGridNeighborhood_ = function () {
			var tunnelTopRowCoords = A2(
				elm$core$List$map,
				function (inc) {
					return A2(author$project$Grid$Coordinate, roomrect.bT + inc, roomrect.bU);
				},
				A2(elm$core$List$range, 0, roomrect.cZ - 1));
			var tunnelRightColumnCoords = A2(
				elm$core$List$map,
				function (inc) {
					return A2(author$project$Grid$Coordinate, (roomrect.bT + roomrect.cZ) - 1, roomrect.bU + inc);
				},
				A2(elm$core$List$range, 0, roomrect.ch - 1));
			var tunnelLeftColumnCoords = A2(
				elm$core$List$map,
				function (inc) {
					return A2(author$project$Grid$Coordinate, roomrect.bT, roomrect.bU + inc);
				},
				A2(elm$core$List$range, 0, roomrect.ch - 1));
			var tunnelBottomRowCoords = A2(
				elm$core$List$map,
				function (inc) {
					return A2(author$project$Grid$Coordinate, roomrect.bT + inc, (roomrect.bU + roomrect.ch) - 1);
				},
				A2(elm$core$List$range, 0, roomrect.cZ - 1));
			var toTheRighttOfTunnelCells = A2(
				elm$core$List$map,
				function (coords) {
					return A2(author$project$Grid$get, coords, grid);
				},
				A2(
					elm$core$List$map,
					function (coords) {
						return A2(author$project$Grid$Coordinate, coords.bk + 1, coords.bl);
					},
					tunnelRightColumnCoords));
			var toTheLeftOfTunnelCells = A2(
				elm$core$List$map,
				function (coords) {
					return A2(author$project$Grid$get, coords, grid);
				},
				A2(
					elm$core$List$map,
					function (coords) {
						return A2(author$project$Grid$Coordinate, coords.bk - 1, coords.bl);
					},
					tunnelLeftColumnCoords));
			var isBorderTile = function (mbTile) {
				return A2(elm$core$Maybe$map, isBorderTileFunc, mbTile);
			};
			var nrBorderTiles = function (lmbtiles) {
				return elm$core$List$length(
					A2(
						elm$core$List$filter,
						elm$core$Basics$identity,
						A2(elm$core$List$filterMap, isBorderTile, lmbtiles)));
			};
			var belowTheTunnelCells = A2(
				elm$core$List$map,
				function (coords) {
					return A2(author$project$Grid$get, coords, grid);
				},
				A2(
					elm$core$List$map,
					function (coords) {
						return A2(author$project$Grid$Coordinate, coords.bk, coords.bl + 1);
					},
					tunnelBottomRowCoords));
			var aboveTheTunnelCells = A2(
				elm$core$List$map,
				function (coords) {
					return A2(author$project$Grid$get, coords, grid);
				},
				A2(
					elm$core$List$map,
					function (coords) {
						return A2(author$project$Grid$Coordinate, coords.bk, coords.bl - 1);
					},
					tunnelTopRowCoords));
			return _Utils_cmp(
				nrBorderTiles(
					_Utils_ap(aboveTheTunnelCells, belowTheTunnelCells)),
				nrBorderTiles(
					_Utils_ap(toTheLeftOfTunnelCells, toTheRighttOfTunnelCells))) > 0;
		}();
		var isHorizontalTunnelifATunnel = tryToInferIfHorizontalOrVerticalGivenGridNeighborhood_;
		var floorColor = A2(elm$core$Maybe$withDefault, 'default', mbFloorColor);
		var defaultFloorInfoWithColor = function (x) {
			return _Utils_update(
				x,
				{c5: floorColor});
		}(author$project$Tile$defaultFloorInfo);
		var getDoorWallOrFloor = function (doorWallOption) {
			switch (doorWallOption.$) {
				case 1:
					return author$project$Tile$Wall(author$project$Tile$defaultWallInfo);
				case 0:
					var dinfo = doorWallOption.a;
					return author$project$Tile$Door(dinfo);
				default:
					if (mbSpecialFloorOption.$ === 1) {
						return author$project$Tile$Floor(defaultFloorInfoWithColor);
					} else {
						var atile = mbSpecialFloorOption.a;
						return atile;
					}
			}
		};
		var bottom_y = (roomrect.bU + roomrect.ch) - 1;
		var generateTile = F2(
			function (xval, yval) {
				if (_Utils_eq(xval, left_x) && ((!_Utils_eq(left_x, right_x)) && isHorizontalTunnelifATunnel)) {
					return getDoorWallOrFloor(doorWallOptions.l);
				} else {
					if (_Utils_eq(xval, right_x) && ((!_Utils_eq(left_x, right_x)) && isHorizontalTunnelifATunnel)) {
						return getDoorWallOrFloor(doorWallOptions.o);
					} else {
						if (_Utils_eq(xval, left_x) && (_Utils_eq(left_x, right_x) && isHorizontalTunnelifATunnel)) {
							return getDoorWallOrFloor(doorWallOptions.l);
						} else {
							if (_Utils_eq(yval, bottom_y)) {
								return getDoorWallOrFloor(doorWallOptions.j);
							} else {
								if (_Utils_eq(yval, top_y)) {
									return getDoorWallOrFloor(doorWallOptions.p);
								} else {
									if (_Utils_eq(yval, top_y) && (_Utils_eq(top_y, bottom_y) && (!isHorizontalTunnelifATunnel))) {
										return getDoorWallOrFloor(doorWallOptions.p);
									} else {
										if (mbSpecialFloorOption.$ === 1) {
											return author$project$Tile$Floor(defaultFloorInfoWithColor);
										} else {
											var atile = mbSpecialFloorOption.a;
											return atile;
										}
									}
								}
							}
						}
					}
				}
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
var author$project$MapGen$listDungeonRectangleToGridFunc = F4(
	function (lroomrectsWithOptions, mbSpecialFloor, mbFloorColor, grid) {
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n0, gridacc) {
					var roomrect = _n0.a;
					var doorWallOptions = _n0.b;
					return A5(author$project$MapGen$dungeonRectangleToGridFunc, roomrect, doorWallOptions, mbSpecialFloor, mbFloorColor, gridacc);
				}),
			grid,
			lroomrectsWithOptions);
	});
var author$project$Tile$DoorWallOptions = F4(
	function (left, top, right, bottom) {
		return {j: bottom, l: left, o: right, p: top};
	});
var author$project$MapGen$noDoornoWallOption = A4(author$project$Tile$DoorWallOptions, author$project$Tile$NoDoorNoWall, author$project$Tile$NoDoorNoWall, author$project$Tile$NoDoorNoWall, author$project$Tile$NoDoorNoWall);
var author$project$MapGen$listRoomRectangleToGridFunc = F3(
	function (lroomrects, mbSpecialFloor, grid) {
		return A4(
			author$project$MapGen$listDungeonRectangleToGridFunc,
			A2(
				elm$core$List$map,
				function (rrect) {
					return _Utils_Tuple2(rrect, author$project$MapGen$noDoornoWallOption);
				},
				lroomrects),
			mbSpecialFloor,
			elm$core$Maybe$Nothing,
			grid);
	});
var author$project$MapGen$listTunnelRectangleToGridFunc = F3(
	function (ltunnels, mbSpecialFloor, grid) {
		return A4(
			author$project$MapGen$listDungeonRectangleToGridFunc,
			A2(
				elm$core$List$map,
				function (tun) {
					return _Utils_Tuple2(tun, author$project$MapGen$noDoornoWallOption);
				},
				ltunnels),
			mbSpecialFloor,
			elm$core$Maybe$Just('orange'),
			grid);
	});
var author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc = F3(
	function (ltunnelsWithOptions, mbSpecialFloor, grid) {
		return A4(
			author$project$MapGen$listDungeonRectangleToGridFunc,
			ltunnelsWithOptions,
			mbSpecialFloor,
			elm$core$Maybe$Just('orange'),
			grid);
	});
var author$project$MapGen$transformFloorToWallOnDisplayBoundaries = function (grid) {
	var w = grid.bc.cZ;
	var lcoordsTop = A2(
		elm$core$List$map,
		function (x_) {
			return {bk: x_, bl: 0};
		},
		A2(elm$core$List$range, 0, w - 1));
	var h = grid.bc.ch;
	var lcoordsBottom = A2(
		elm$core$List$map,
		function (x_) {
			return {bk: x_, bl: h - 1};
		},
		A2(elm$core$List$range, 0, w - 1));
	var lcoordsLeft = A2(
		elm$core$List$map,
		function (y_) {
			return {bk: 0, bl: y_};
		},
		A2(elm$core$List$range, 0, h - 1));
	var lcoordsRight = A2(
		elm$core$List$map,
		function (y_) {
			return {bk: w - 1, bl: y_};
		},
		A2(elm$core$List$range, 0, h - 1));
	var getNewGrid = F3(
		function (coord, lrtd, grid_) {
			var _n0 = A2(author$project$Grid$get, coord, grid_);
			if ((!_n0.$) && (!_n0.a.$)) {
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
				author$project$GameDefinitions$Common$setSpecialTilesInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$Basement$basementSpecialTiles,
				A3(
					author$project$GameDefinitions$Common$setBookcasesInGrid,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
					author$project$GameDefinitions$Game2$Basement$basementBookcases,
					A3(
						author$project$GameDefinitions$Common$setItemsInGrid,
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
						author$project$GameDefinitions$Game2$Basement$basementItems,
						A2(
							author$project$GameDefinitions$Common$setHolesInGrid,
							author$project$GameDefinitions$Game2$Basement$basementHoles,
							A4(
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
								author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H,
								author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z,
								A3(
									author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
									_Utils_ap(author$project$GameDefinitions$Game2$Basement$basementInitialVerticalTunnelRectanglesWithOptions, author$project$GameDefinitions$Game2$Basement$basementCustomVerticalTunnelRectanglesWithOptions),
									elm$core$Maybe$Nothing,
									A3(
										author$project$MapGen$listTunnelRectangleToGridFunc,
										author$project$GameDefinitions$Game2$Basement$basementStairsTunnel,
										elm$core$Maybe$Nothing,
										A3(
											author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
											author$project$GameDefinitions$Game2$Basement$basementInitialHorizontalTunnelRectanglesWithOptions,
											elm$core$Maybe$Nothing,
											A3(
												author$project$MapGen$listRoomRectangleToGridFunc,
												_Utils_ap(
													author$project$GameDefinitions$Game2$Basement$basementInitialRoomRectangles,
													_Utils_ap(author$project$GameDefinitions$Game2$Basement$basementCustomRoomRectangles, author$project$GameDefinitions$Game2$Basement$basementHiddenRoomRectangles)),
												elm$core$Maybe$Nothing,
												grid)))))))))));
};
var author$project$GameDefinitions$Game2$Basement$gridBasement = author$project$GameDefinitions$Game2$Basement$addBasementCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 7, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Common$defaultHorizontalBlueDoorOptions = {
	j: author$project$Tile$NoDoorNoWall,
	l: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(0)),
	o: author$project$Tile$UseDoor(
		author$project$Tile$defaultBlueDoorInfo(1)),
	p: author$project$Tile$NoDoorNoWall
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
var author$project$GameDefinitions$Common$TunnelToTheLeft = 1;
var author$project$GameDefinitions$Game2$Caverns$cavernsStairsTunnel = _List_fromArray(
	[
		A9(
		author$project$GameDefinitions$Common$getHorizontalTunnel,
		4,
		8,
		1,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		A9(
		author$project$GameDefinitions$Common$getVerticalTunnel,
		7,
		2,
		1,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Game2$Caverns$addCavernsCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$Caverns$cavernsItems,
				A4(
					author$project$MapGen$createWallBoundaries,
					_Utils_ap(
						author$project$GameDefinitions$Game2$Caverns$cavernsInitialHorizontalTunnelRectangles,
						_Utils_ap(
							author$project$GameDefinitions$Game2$Caverns$cavernsStairsTunnel,
							_Utils_ap(author$project$GameDefinitions$Game2$Caverns$cavernsInitialRoomRectangles, author$project$GameDefinitions$Game2$Caverns$cavernsInitialVerticalTunnelRectangles))),
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z,
					A3(
						author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
						author$project$GameDefinitions$Game2$Caverns$cavernsInitialVerticalTunnelRectanglesWithOptions,
						elm$core$Maybe$Nothing,
						A3(
							author$project$MapGen$listTunnelRectangleToGridFunc,
							author$project$GameDefinitions$Game2$Caverns$cavernsStairsTunnel,
							elm$core$Maybe$Nothing,
							A3(
								author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
								author$project$GameDefinitions$Game2$Caverns$cavernsInitialHorizontalTunnelRectanglesWithOptions,
								elm$core$Maybe$Nothing,
								A3(author$project$MapGen$listRoomRectangleToGridFunc, author$project$GameDefinitions$Game2$Caverns$cavernsInitialRoomRectangles, elm$core$Maybe$Nothing, grid))))))));
};
var author$project$GameDefinitions$Game2$Caverns$gridCaverns = author$project$GameDefinitions$Game2$Caverns$addCavernsCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 7, 11, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
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
var author$project$GameDefinitions$Common$defaultNoDoorOptions = {j: author$project$Tile$NoDoorNoWall, l: author$project$Tile$NoDoorNoWall, o: author$project$Tile$NoDoorNoWall, p: author$project$Tile$NoDoorNoWall};
var author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnelWithOptions = _List_fromArray(
	[
		_Utils_Tuple2(
		A9(
			author$project$GameDefinitions$Common$getVerticalTunnel,
			5,
			5,
			0,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
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
			1,
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
			elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			elm$core$Maybe$Nothing,
			elm$core$Maybe$Nothing,
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
		{
			j: author$project$Tile$NoDoorNoWall,
			l: author$project$Tile$NoDoorNoWall,
			o: author$project$Tile$NoDoorNoWall,
			p: author$project$Tile$UseDoor(
				author$project$Tile$defaultYellowDoorInfo(3))
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
var author$project$GameDefinitions$Game2$FirstFloor$addFirstFloorCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$FirstFloor$firstFloorItems,
				A2(
					author$project$GameDefinitions$Common$setHolesInGrid,
					author$project$GameDefinitions$Game2$FirstFloor$firstFloorHoles,
					A4(
						author$project$MapGen$createWallBoundaries,
						_Utils_ap(
							author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialRoomRectangles,
							_Utils_ap(
								author$project$GameDefinitions$Game2$FirstFloor$firstFloorCustomRoomRectangles,
								_Utils_ap(
									author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialHorizontalTunnelRectangles,
									_Utils_ap(author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnel, author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialVerticalTunnelRectangles)))),
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H,
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z,
						A3(
							author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
							author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialVerticalTunnelRectanglesWithOptions,
							elm$core$Maybe$Nothing,
							A3(
								author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
								author$project$GameDefinitions$Game2$FirstFloor$firstFloorStairsTunnelWithOptions,
								elm$core$Maybe$Nothing,
								A3(
									author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
									author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialHorizontalTunnelRectanglesWithOptions,
									elm$core$Maybe$Nothing,
									A3(
										author$project$MapGen$listRoomRectangleToGridFunc,
										_Utils_ap(author$project$GameDefinitions$Game2$FirstFloor$firstFloorInitialRoomRectangles, author$project$GameDefinitions$Game2$FirstFloor$firstFloorCustomRoomRectangles),
										elm$core$Maybe$Nothing,
										grid)))))))));
};
var author$project$GameDefinitions$Game2$FirstFloor$gridFirstFloor = author$project$GameDefinitions$Game2$FirstFloor$addFirstFloorCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 7, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$floorSizeInfo = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id,
			_Utils_Tuple2(
				A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 11))),
			_Utils_Tuple2(
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id,
			_Utils_Tuple2(
				A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 6))),
			_Utils_Tuple2(
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			_Utils_Tuple2(
				A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 9),
				A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7))),
			_Utils_Tuple2(
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id,
			_Utils_Tuple2(
				A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
				A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 6))),
			_Utils_Tuple2(
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
			_Utils_Tuple2(
				A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 4),
				A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 4))),
			_Utils_Tuple2(
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
			_Utils_Tuple2(17, 23))
		]));
var author$project$GameDefinitions$Game2$Game2Definitions$get_height = function (floorId) {
	return A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(0, 0),
		A2(elm$core$Dict$get, floorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$floorSizeInfo)).a;
};
var author$project$GameDefinitions$Game2$Game2Definitions$get_width = function (floorId) {
	return A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(0, 0),
		A2(elm$core$Dict$get, floorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$floorSizeInfo)).b;
};
var author$project$Tile$defaultGrayDoorInfo = function (dorientation) {
	return {
		c5: elm$core$Maybe$Just('gray'),
		cl: false,
		dP: dorientation,
		cL: _List_fromArray(
			[
				author$project$Item$Key(
				{aj: 'gray'})
			]),
		eq: 2
	};
};
var author$project$GameDefinitions$Common$defaultHorizontalGrayDoorOptions = {
	j: author$project$Tile$NoDoorNoWall,
	l: author$project$Tile$UseDoor(
		author$project$Tile$defaultGrayDoorInfo(0)),
	o: author$project$Tile$UseDoor(
		author$project$Tile$defaultGrayDoorInfo(1)),
	p: author$project$Tile$NoDoorNoWall
};
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomHorizontalTunnelRectanglesWithOptions = function () {
	var tunnelWidth = (author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H >= 1) ? author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H : 1;
	return A2(
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
					author$project$GameDefinitions$Common$getHorizontalTunnel,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol,
					1,
					elm$core$Maybe$Just(tunnelWidth),
					elm$core$Maybe$Just(2),
					elm$core$Maybe$Nothing,
					elm$core$Maybe$Nothing,
					elm$core$Maybe$Nothing),
				author$project$GameDefinitions$Common$defaultHorizontalGrayDoorOptions)
			]));
}();
var author$project$GameDefinitions$Game2$GroundFloor$intXShiftForGroundFloorCustomRoom = -(2 + author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomRoomRectangles = _List_fromArray(
	[
		A7(author$project$GameDefinitions$Common$getCustomRoom, 9, 2, author$project$GameDefinitions$Game2$GroundFloor$intXShiftForGroundFloorCustomRoom, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a + 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorHiddenRoomRectangles = _List_fromArray(
	[
		A4(author$project$GameDefinitions$Common$getRoom, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
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
				0,
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
				0,
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
				0,
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
			1,
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
			1,
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
var author$project$GameDefinitions$Game2$GroundFloor$groundFloorSpecialTiles = A2(author$project$GameDefinitions$Common$getSpecialTilesByFloorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$specialTileCreationDict);
var author$project$GameDefinitions$Game2$GroundFloor$customStripedDoorInfo = function (dorientation) {
	return {
		c5: elm$core$Maybe$Just('striped'),
		cl: false,
		dP: dorientation,
		cL: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theThreePiecesOfPaper,
		eq: 2
	};
};
var author$project$GameDefinitions$Game2$GroundFloor$stairsOnGroundFloorBottomLeftRoomShift = author$project$GameDefinitions$Game2$GroundFloor$intXShiftForGroundFloorCustomRoom - ((author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.a / 2) | 0);
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
				0,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(
					_Utils_Tuple2(author$project$GameDefinitions$Game2$GroundFloor$stairsOnGroundFloorBottomLeftRoomShift, 0))),
			author$project$GameDefinitions$Common$defaultNoDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				5,
				6,
				0,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
				elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
				elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
				elm$core$Maybe$Nothing),
			author$project$GameDefinitions$Common$defaultNoDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getVerticalTunnel,
				3,
				6,
				1,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
				elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing),
			author$project$GameDefinitions$Common$defaultNoDoorOptions),
			_Utils_Tuple2(
			A8(
				author$project$GameDefinitions$Common$getHorizontalTunnel,
				4,
				7,
				0,
				elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H + 1),
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Nothing),
			{
				j: author$project$Tile$NoDoorNoWall,
				l: author$project$Tile$UseDoor(
					author$project$GameDefinitions$Game2$GroundFloor$customStripedDoorInfo(0)),
				o: author$project$Tile$NoDoorNoWall,
				p: author$project$Tile$NoDoorNoWall
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
var author$project$Tile$Water = function (a) {
	return {$: 10, a: a};
};
var author$project$Tile$defaultBlackDoorInfo = function (dorientation) {
	return {
		c5: elm$core$Maybe$Just('black'),
		cl: false,
		dP: dorientation,
		cL: _List_fromArray(
			[
				author$project$Item$Key(
				{aj: 'black'})
			]),
		eq: 2
	};
};
var author$project$Tile$defaultWaterInfo = {br: 'just_water', cm: false, cn: false, eq: 2};
var author$project$GameDefinitions$Game2$GroundFloor$setGridLeftGrassPath = F2(
	function (tile, grid) {
		var yBottomForGrass = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside1TeleporterCoords.bl + 5;
		var setTile = F4(
			function (xcoord, ycoord, thetile, grid_) {
				return A3(
					author$project$Grid$set,
					A2(author$project$Grid$Coordinate, xcoord, ycoord),
					thetile,
					grid_);
			});
		var bwater = _List_fromArray(
			[
				_Utils_Tuple2(
				_Utils_Tuple2(1, yBottomForGrass + 1),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(2, yBottomForGrass + 1),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(1, yBottomForGrass + 2),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(2, yBottomForGrass + 2),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(1, yBottomForGrass + 3),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(2, yBottomForGrass + 3),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo))
			]);
		var _n0 = _Utils_Tuple2(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bk, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bl - 1);
		var xMin = _n0.a;
		var yTopForGrass = _n0.b;
		var lcoordsAndTile = A2(
			elm$core$List$concatMap,
			function (y) {
				return _List_fromArray(
					[
						_Utils_Tuple2(
						_Utils_Tuple2(xMin, y),
						tile),
						_Utils_Tuple2(
						_Utils_Tuple2(xMin + 1, y),
						tile)
					]);
			},
			A2(elm$core$List$range, yTopForGrass, yBottomForGrass));
		var lwater = _List_fromArray(
			[
				_Utils_Tuple2(
				_Utils_Tuple2(1, yTopForGrass - 4),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(2, yTopForGrass - 4),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(1, yTopForGrass - 3),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(2, yTopForGrass - 3),
				author$project$Tile$Water(author$project$Tile$defaultWaterInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(1, yTopForGrass - 2),
				author$project$Tile$Floor(author$project$Tile$defaultGrassFloorInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(2, yTopForGrass - 2),
				author$project$Tile$Floor(author$project$Tile$defaultGrassFloorInfo)),
				_Utils_Tuple2(
				_Utils_Tuple2(1, yTopForGrass - 1),
				author$project$Tile$Door(
					author$project$Tile$defaultBlackDoorInfo(2))),
				_Utils_Tuple2(
				_Utils_Tuple2(2, yTopForGrass - 1),
				author$project$Tile$Door(
					author$project$Tile$defaultBlackDoorInfo(2)))
			]);
		return A3(
			elm$core$List$foldl,
			F2(
				function (_n1, gridacc) {
					var _n2 = _n1.a;
					var x_coord = _n2.a;
					var y_coord = _n2.b;
					var tile_ = _n1.b;
					return A4(setTile, x_coord, y_coord, tile_, gridacc);
				}),
			grid,
			_Utils_ap(
				lcoordsAndTile,
				_Utils_ap(bwater, lwater)));
	});
var author$project$MapGen$createWallBoundariesAlways = F4(
	function (lrrect, verticalWallWidth, horizontalWallHeight, grid) {
		return A5(author$project$MapGen$createWallBoundariesDependingOnPreviousTile, lrrect, verticalWallWidth, horizontalWallHeight, elm$core$Maybe$Nothing, grid);
	});
var author$project$GameDefinitions$Game2$GroundFloor$addGroundFloorCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setSpecialTilesInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$GroundFloor$groundFloorSpecialTiles,
				A3(
					author$project$GameDefinitions$Common$setItemsInGrid,
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
					author$project$GameDefinitions$Game2$GroundFloor$groundFloorItems,
					A2(
						author$project$GameDefinitions$Common$setHolesInGrid,
						author$project$GameDefinitions$Game2$GroundFloor$groundFloorHoles,
						A3(
							author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
							author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomHorizontalTunnelRectanglesWithOptions,
							elm$core$Maybe$Nothing,
							A4(
								author$project$MapGen$createWallBoundariesAlways,
								author$project$GameDefinitions$Game2$GroundFloor$groundFloorHiddenRoomRectangles,
								1,
								1,
								A2(
									author$project$GameDefinitions$Game2$GroundFloor$setGridLeftGrassPath,
									author$project$Tile$Floor(author$project$Tile$defaultGrassFloorInfo),
									A4(
										author$project$MapGen$createWallBoundaries,
										_Utils_ap(
											author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialRoomRectangles,
											_Utils_ap(
												author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomRoomRectangles,
												_Utils_ap(
													author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialHorizontalTunnelRectangles,
													_Utils_ap(author$project$GameDefinitions$Game2$GroundFloor$groundFloorStairsTunnel, author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialVerticalTunnelRectangles)))),
										author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H,
										author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z,
										A3(
											author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
											author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialVerticalTunnelRectanglesWithOptions,
											elm$core$Maybe$Nothing,
											A3(
												author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
												author$project$GameDefinitions$Game2$GroundFloor$groundFloorStairsTunnelWithOptions,
												elm$core$Maybe$Nothing,
												A3(
													author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
													author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialHorizontalTunnelRectanglesWithOptions,
													elm$core$Maybe$Nothing,
													A3(
														author$project$MapGen$listRoomRectangleToGridFunc,
														author$project$GameDefinitions$Game2$GroundFloor$groundFloorHiddenRoomRectangles,
														elm$core$Maybe$Just(
															author$project$Tile$Floor(author$project$Tile$defaultGrassFloorInfo)),
														A3(
															author$project$MapGen$listRoomRectangleToGridFunc,
															_Utils_ap(author$project$GameDefinitions$Game2$GroundFloor$groundFloorInitialRoomRectangles, author$project$GameDefinitions$Game2$GroundFloor$groundFloorCustomRoomRectangles),
															elm$core$Maybe$Nothing,
															grid))))))))))))));
};
var author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor = author$project$GameDefinitions$Game2$GroundFloor$addGroundFloorCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 9, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$Tile$ClearlyVisible = 0;
var author$project$Tile$LeverDownToUp = 0;
var author$project$GameDefinitions$Game2$LastFloor$customLeverInfo = {b$: 'grass', cm: false, bz: false, cr: 1, cD: 0, eq: 0};
var author$project$GameDefinitions$Game2$LastFloor$defaultGrass = author$project$Tile$Floor(author$project$Tile$defaultGrassFloorInfo);
var author$project$Tile$Lever = function (a) {
	return {$: 7, a: a};
};
var author$project$Tile$WallInfo = F3(
	function (visibility, orientation, mbTeleporterObject) {
		return {cu: mbTeleporterObject, dP: orientation, eq: visibility};
	});
var author$project$Tile$defaultBrickWallInfo = {cu: elm$core$Maybe$Nothing, dP: 'just_bricks', eq: 2};
var author$project$Tile$defaultWaterWallLeftInfo = {br: 'water_wall_left', cm: false, cn: false, eq: 2};
var author$project$Tile$defaultWaterWallUpInfo = {br: 'water_wall_up', cm: false, cn: false, eq: 2};
var author$project$GameDefinitions$Game2$LastFloor$lastFloorGridTiles = _List_fromArray(
	[
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'corner_top_left', elm$core$Maybe$Nothing)),
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
			A3(author$project$Tile$WallInfo, 2, 'corner_top_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			A2(
			author$project$Tile$ConverterTile,
			author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
			author$project$Tile$Lever(author$project$GameDefinitions$Game2$LastFloor$customLeverInfo)),
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			A3(author$project$Tile$WallInfo, 2, 'cul_de_sac_at_top', elm$core$Maybe$Nothing)),
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'three_way_at_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'three_way_at_top', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'corner_bottom_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'cul_de_sac_at_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'three_way_at_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$Tile$Tree(author$project$Tile$defaultPineTreeInfo),
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(author$project$Tile$defaultWallUpInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'corner_bottom_left', elm$core$Maybe$Nothing)),
			author$project$Tile$Wall(author$project$Tile$defaultWallInfo),
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'cul_de_sac_at_right', elm$core$Maybe$Nothing)),
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$Tile$Tree(author$project$Tile$defaultRoundTreeInfo),
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$Tile$NoTileYet
		]),
		_List_fromArray(
		[
			author$project$Tile$NoTileYet,
			author$project$Tile$Wall(
			A3(author$project$Tile$WallInfo, 2, 'corner_bottom_left', elm$core$Maybe$Nothing)),
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
			A3(author$project$Tile$WallInfo, 2, 'corner_bottom_right', elm$core$Maybe$Nothing)),
			author$project$Tile$Water(author$project$Tile$defaultWaterWallLeftInfo),
			author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
			author$project$GameDefinitions$Game2$LastFloor$defaultGrass,
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
			A2(elm$core$List$drop, coords.bl, author$project$GameDefinitions$Game2$LastFloor$lastFloorGridTiles)));
	return A2(
		elm$core$Maybe$withDefault,
		author$project$Tile$NoTileYet,
		elm$core$List$head(
			A2(elm$core$List$drop, coords.bk, mb_relevant_row)));
};
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$get_width = function (floorId) {
	return A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(0, 0),
		A2(elm$core$Dict$get, floorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$floorSizeInfo)).b;
};
var author$project$GameDefinitions$Game2$LastFloor$nr_cols = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$get_width(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id);
var author$project$GameDefinitions$Game2$ConfigParamsAndInfo$get_height = function (floorId) {
	return A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(0, 0),
		A2(elm$core$Dict$get, floorId, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$floorSizeInfo)).a;
};
var author$project$GameDefinitions$Game2$LastFloor$nr_rows = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$get_height(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id);
var author$project$GameDefinitions$Game2$LastFloor$gridLastFloor = function () {
	var grid = A2(
		author$project$Grid$initialize,
		{ch: author$project$GameDefinitions$Game2$LastFloor$nr_rows, cZ: author$project$GameDefinitions$Game2$LastFloor$nr_cols},
		author$project$Tile$NoTileYet);
	var lcoords = author$project$Grid$toCoordinates(grid);
	return A3(
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
		lcoords);
}();
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
var author$project$GameDefinitions$Game2$TheAttic$theAtticStairsTunnel = _List_fromArray(
	[
		A9(
		author$project$GameDefinitions$Common$getVerticalTunnel,
		1,
		4,
		0,
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Just(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z + 1),
		elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
		elm$core$Maybe$Nothing,
		elm$core$Maybe$Nothing,
		author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
	]);
var author$project$GameDefinitions$Game2$TheAttic$addTheAtticCustomRoomsAndTunnels = function (grid) {
	return author$project$MapGen$correctSomeWallCorners(
		author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
			A3(
				author$project$GameDefinitions$Common$setItemsInGrid,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params,
				author$project$GameDefinitions$Game2$TheAttic$theAtticItems,
				A2(
					author$project$GameDefinitions$Common$setHolesInGrid,
					author$project$GameDefinitions$Game2$TheAttic$theAtticHoles,
					A4(
						author$project$MapGen$createWallBoundaries,
						_Utils_ap(
							author$project$GameDefinitions$Game2$TheAttic$theAtticInitialRoomRectangles,
							_Utils_ap(
								author$project$GameDefinitions$Game2$TheAttic$theAtticCustomRoomRectangles,
								_Utils_ap(
									author$project$GameDefinitions$Game2$TheAttic$theAtticInitialHorizontalTunnelRectangles,
									_Utils_ap(author$project$GameDefinitions$Game2$TheAttic$theAtticStairsTunnel, author$project$GameDefinitions$Game2$TheAttic$theAtticInitialVerticalTunnelRectangles)))),
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.H,
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params.z,
						A3(
							author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
							author$project$GameDefinitions$Game2$TheAttic$theAtticInitialVerticalTunnelRectanglesWithOptions,
							elm$core$Maybe$Nothing,
							A3(
								author$project$MapGen$listTunnelRectangleToGridFunc,
								author$project$GameDefinitions$Game2$TheAttic$theAtticStairsTunnel,
								elm$core$Maybe$Nothing,
								A3(
									author$project$MapGen$listTunnelRectangleWithOptionsToGridFunc,
									author$project$GameDefinitions$Game2$TheAttic$theAtticInitialHorizontalTunnelRectanglesWithOptions,
									elm$core$Maybe$Nothing,
									A3(
										author$project$MapGen$listRoomRectangleToGridFunc,
										_Utils_ap(author$project$GameDefinitions$Game2$TheAttic$theAtticInitialRoomRectangles, author$project$GameDefinitions$Game2$TheAttic$theAtticCustomRoomRectangles),
										elm$core$Maybe$Nothing,
										grid)))))))));
};
var author$project$GameDefinitions$Game2$TheAttic$gridTheAttic = author$project$GameDefinitions$Game2$TheAttic$addTheAtticCustomRoomsAndTunnels(
	A3(author$project$GameDefinitions$Common$gridInitializer, 4, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params));
var author$project$GameDefinitions$Game2$Game2Definitions$dStore = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			0,
			{
				cq: author$project$GameDefinitions$Game2$Caverns$gridCaverns,
				dD: elm$core$Maybe$Just('/maps/cavernsBlackBgmap.png'),
				dG: elm$core$Maybe$Just('The Caverns'),
				eb: author$project$GameDefinitions$Game2$Game2Definitions$get_height(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id),
				ec: author$project$GameDefinitions$Game2$Game2Definitions$get_width(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id),
				em: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				ep: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			1,
			{
				cq: author$project$GameDefinitions$Game2$Basement$gridBasement,
				dD: elm$core$Maybe$Just('/maps/basementBlackBgmap.png'),
				dG: elm$core$Maybe$Just('\'Hidden Library\''),
				eb: author$project$GameDefinitions$Game2$Game2Definitions$get_height(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id),
				ec: author$project$GameDefinitions$Game2$Game2Definitions$get_width(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id),
				em: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				ep: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			2,
			{
				cq: author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor,
				dD: elm$core$Maybe$Just('/maps/groundFloorBlackBgmap.png'),
				dG: elm$core$Maybe$Just('Groundfloor'),
				eb: author$project$GameDefinitions$Game2$Game2Definitions$get_height(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id),
				ec: author$project$GameDefinitions$Game2$Game2Definitions$get_width(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id),
				em: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				ep: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			3,
			{
				cq: author$project$GameDefinitions$Game2$FirstFloor$gridFirstFloor,
				dD: elm$core$Maybe$Just('/maps/firstFloorBlackBgmap.png'),
				dG: elm$core$Maybe$Just('The FirstFloor'),
				eb: author$project$GameDefinitions$Game2$Game2Definitions$get_height(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id),
				ec: author$project$GameDefinitions$Game2$Game2Definitions$get_width(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id),
				em: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				ep: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			4,
			{
				cq: author$project$GameDefinitions$Game2$TheAttic$gridTheAttic,
				dD: elm$core$Maybe$Just('/maps/theAtticBlackBgmap.png'),
				dG: elm$core$Maybe$Just('The Attic'),
				eb: author$project$GameDefinitions$Game2$Game2Definitions$get_height(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id),
				ec: author$project$GameDefinitions$Game2$Game2Definitions$get_width(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id),
				em: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				ep: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
			}),
			_Utils_Tuple2(
			5,
			{
				cq: author$project$GameDefinitions$Game2$LastFloor$gridLastFloor,
				dD: elm$core$Maybe$Just('/maps/lastFloorBlackBgmap.png'),
				dG: elm$core$Maybe$Just('Palace Garden'),
				eb: author$project$GameDefinitions$Game2$Game2Definitions$get_height(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id),
				ec: author$project$GameDefinitions$Game2$Game2Definitions$get_width(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id),
				em: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
				ep: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width
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
var author$project$GameDefinitions$Game2$Game2Definitions$generate_some_random_nrs_between_zero_and_four = F2(
	function (nr_desired_rands, lrandints) {
		var linit = A2(elm$core$List$repeat, nr_desired_rands, 4);
		var getRand = F3(
			function (maxnr, try_nr, _n0) {
				getRand:
				while (true) {
					var lexisting = _n0.a;
					var lrand_ints = _n0.b;
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
								$temp$try_nr = try_nr + 1,
								$temp$_n0 = _Utils_Tuple2(
								lexisting,
								A2(elm$core$List$drop, 1, lrand_ints));
							maxnr = $temp$maxnr;
							try_nr = $temp$try_nr;
							_n0 = $temp$_n0;
							continue getRand;
						}
					}
				}
			});
		var _n1 = A3(
			elm$core$List$foldl,
			F2(
				function (li, accTuple) {
					return A3(getRand, li, 1, accTuple);
				}),
			_Utils_Tuple2(_List_Nil, lrandints),
			linit);
		var l3 = _n1.a;
		var lrands3 = _n1.b;
		return _Utils_Tuple2(l3, lrands3);
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
						var thelevel = floorRec.cq;
						var lcoords = author$project$Grid$toCoordinates(floorRec.cq);
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
							if (mbcoords.$ === 1) {
								return elm$core$Maybe$Nothing;
							} else {
								var coords = mbcoords.a;
								return function (mbtile) {
									if (mbtile.$ === 1) {
										return elm$core$Maybe$Nothing;
									} else {
										var atile = mbtile.a;
										if (!atile.$) {
											var finfo = atile.a;
											var tileWithItem = author$project$Tile$Floor(
												_Utils_update(
													finfo,
													{
														bA: elm$core$Maybe$Just(newItem)
													}));
											var _n9 = finfo.bA;
											if (_n9.$ === 1) {
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
							if (mbNewLevel.$ === 1) {
								return elm$core$Maybe$Nothing;
							} else {
								var newLevel = mbNewLevel.a;
								return elm$core$Maybe$Just(
									_Utils_update(
										floorRec,
										{cq: newLevel}));
							}
						}();
						if (mbNewFloor.$ === 1) {
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
			if (!floorInfo.$) {
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
var author$project$GameDefinitions$Game2$Game2Definitions$placeLastTwoPiecesOfPaper = function (_n0) {
	var storedict = _n0.a;
	var lrands = _n0.b;
	var lastTwoPiecesOfPaper = A2(elm$core$List$drop, 1, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theThreePiecesOfPaper);
	var _n1 = function (_n2) {
		var lfloorNrs = _n2.a;
		var lremRands = _n2.b;
		return _Utils_Tuple2(
			A3(
				elm$core$List$map2,
				F2(
					function (fnr, ppr) {
						return _Utils_Tuple2(fnr, ppr);
					}),
				lfloorNrs,
				lastTwoPiecesOfPaper),
			lremRands);
	}(
		A2(author$project$GameDefinitions$Game2$Game2Definitions$generate_some_random_nrs_between_zero_and_four, 2, lrands));
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
var author$project$GameDefinitions$Game2$Game2Definitions$testAddToPlayerInventory = function (pl) {
	var curr_inventory = pl.ai;
	var new_inventory = curr_inventory;
	return _Utils_update(
		pl,
		{ai: new_inventory});
};
var author$project$GameDefinitions$Game2$GroundFloor$determineGroundFloorStairsInfo = function () {
	var srcoords = author$project$GameDefinitions$Common$StairsRoomCoords;
	var lstairs = _List_fromArray(
		[
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			ab: 2,
			bB: elm$core$Maybe$Just(
				_Utils_Tuple2(author$project$GameDefinitions$Game2$GroundFloor$stairsOnGroundFloorBottomLeftRoomShift, 0)),
			bF: elm$core$Maybe$Nothing,
			bG: 2,
			bI: 9,
			bL: _Utils_Tuple2(0, 1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 4, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 3, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id)
		},
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			ab: 2,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			bG: 6,
			bI: 5,
			bL: _Utils_Tuple2(0, 1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 6, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id)
		},
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			ab: 3,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Just(author$project$GameModel$HorizontalRoom),
			bG: 6,
			bI: 3,
			bL: _Utils_Tuple2(0, -1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 7, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 8, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id)
		},
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
			ab: 1,
			bB: elm$core$Maybe$Just(
				_Utils_Tuple2(0, 0)),
			bF: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			bG: 7,
			bI: 4,
			bL: _Utils_Tuple2(-1, 0),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 11, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 12, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id)
		}
		]);
	return A2(
		elm$core$List$map,
		function (rec) {
			return A6(
				author$project$GameDefinitions$Common$createStairsInfo,
				rec.bM,
				rec.bp,
				rec.bL,
				rec.bS,
				A5(srcoords, rec.bI, rec.bG, rec.bB, rec.ab, rec.bF),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		},
		lstairs);
}();
var author$project$GameDefinitions$Common$StairsAbsCoords = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var author$project$GameDefinitions$Game2$LastFloor$determineLastFloorStairsInfo = function () {
	var stairsRec = {
		c7: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
		bL: _Utils_Tuple2(0, -1),
		bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 12, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id),
		bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 11, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id),
		c_: 20,
		c$: 13
	};
	var abscoords = author$project$GameDefinitions$Common$StairsAbsCoords;
	return _List_fromArray(
		[
			A6(
			author$project$GameDefinitions$Common$createStairsInfo,
			stairsRec.bM,
			stairsRec.c7,
			stairsRec.bL,
			stairsRec.bS,
			A2(abscoords, stairsRec.c_, stairsRec.c$),
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params)
		]);
}();
var author$project$GameModel$getCurrentFloorInfoToStore = function (model) {
	return {cq: model.cq, dD: model.dD, dG: model.dG, eb: model.eb, ec: model.ec, em: model.em, ep: model.ep};
};
var author$project$GameModel$updateModelFloorDictWithLevel = function (model) {
	var currentFloorInfo = author$project$GameModel$getCurrentFloorInfoToStore(model);
	var newStore = A3(
		elm$core$Dict$update,
		model.c7,
		function (_n0) {
			return elm$core$Maybe$Just(currentFloorInfo);
		},
		model.bu);
	return _Utils_update(
		model,
		{bu: newStore});
};
var author$project$GameModel$updateModelFloorDictWithFloorGrid = F3(
	function (floorId, fgrid, model) {
		var newRecFunc = function (mbRec) {
			if (!mbRec.$) {
				var fstor = mbRec.a;
				return elm$core$Maybe$Just(
					_Utils_update(
						fstor,
						{cq: fgrid}));
			} else {
				return elm$core$Maybe$Nothing;
			}
		};
		var newStore = A3(
			elm$core$Dict$update,
			floorId,
			function (mbRec) {
				return newRecFunc(mbRec);
			},
			model.bu);
		return _Utils_eq(model.c7, floorId) ? author$project$GameModel$updateModelFloorDictWithLevel(
			_Utils_update(
				model,
				{cq: fgrid})) : _Utils_update(
			model,
			{bu: newStore});
	});
var author$project$GameModel$removeFromModelGrid = F3(
	function (coords, floorId, model) {
		var mbRelevantGrid = F2(
			function (thefloorId, themodel) {
				return _Utils_eq(thefloorId, themodel.c7) ? elm$core$Maybe$Just(themodel.cq) : A2(
					elm$core$Maybe$map,
					function ($) {
						return $.cq;
					},
					A2(elm$core$Dict$get, floorId, themodel.bu));
			});
		var _n0 = A2(mbRelevantGrid, floorId, model);
		if (_n0.$ === 1) {
			return model;
		} else {
			var thegrid = _n0.a;
			return function (ngrid) {
				return A3(author$project$GameModel$updateModelFloorDictWithFloorGrid, floorId, ngrid, model);
			}(
				A3(author$project$Grid$set, coords, author$project$Tile$NoTileYet, thegrid));
		}
	});
var author$project$GameModel$setInModelGrid = F4(
	function (tile, coords, floorId, model) {
		var mbRelevantGrid = F2(
			function (thefloorId, themodel) {
				return _Utils_eq(thefloorId, themodel.c7) ? elm$core$Maybe$Just(themodel.cq) : A2(
					elm$core$Maybe$map,
					function ($) {
						return $.cq;
					},
					A2(elm$core$Dict$get, floorId, themodel.bu));
			});
		var _n0 = A2(mbRelevantGrid, floorId, model);
		if (_n0.$ === 1) {
			return model;
		} else {
			var thegrid = _n0.a;
			return function (ngrid) {
				return A3(author$project$GameModel$updateModelFloorDictWithFloorGrid, floorId, ngrid, model);
			}(
				A3(author$project$Grid$set, coords, tile, thegrid));
		}
	});
var author$project$GameModel$removeFromStairsDictAndSubstituteGridTile = F3(
	function (stairsId, substituteTile, model) {
		var theStairsLocInfo = A2(elm$core$Dict$get, stairsId, model.dZ);
		var removeFromStairsDictAux = function (themodel) {
			return _Utils_update(
				themodel,
				{
					dZ: A2(elm$core$Dict$remove, stairsId, themodel.dZ)
				});
		};
		var newModel = function () {
			if (!theStairsLocInfo.$) {
				var stairsLocInfoRec = theStairsLocInfo.a;
				return removeFromStairsDictAux(
					A4(
						author$project$GameModel$setInModelGrid,
						substituteTile,
						stairsLocInfoRec.Q,
						stairsLocInfoRec.S,
						A3(author$project$GameModel$removeFromModelGrid, stairsLocInfoRec.Q, stairsLocInfoRec.S, model)));
			} else {
				return model;
			}
		}();
		return newModel;
	});
var author$project$Tile$defaultVisibleGrassFloorInfo = _Utils_update(
	author$project$Tile$defaultGrassFloorInfo,
	{eq: 0});
var author$project$Tile$walkableWaterInfo = {br: 'just_water', cm: false, cn: true, eq: 2};
var author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForLever1 = function () {
	var nrInjuredOpponents = function (model) {
		return elm$core$List$length(
			A2(
				elm$core$List$filter,
				function (en) {
					return _Utils_cmp(en.ae, en.al) < 1;
				},
				elm$core$Dict$values(model.h)));
	};
	var nrEnlightenedOpponents = function (model) {
		return elm$core$List$length(
			A2(
				elm$core$List$filter,
				function (en) {
					return _Utils_cmp(en.af, en.ag) > -1;
				},
				elm$core$Dict$values(model.h)));
	};
	var reqsCompleted = function (model) {
		return (nrEnlightenedOpponents(model) >= 0) && (!nrInjuredOpponents(model));
	};
	return _List_fromArray(
		[
			F2(
			function (coords, model) {
				return reqsCompleted(model) ? author$project$GameModel$updateModelFloorDictWithLevel(
					A4(
						author$project$GameModel$setInModelGrid,
						author$project$Tile$Water(author$project$Tile$walkableWaterInfo),
						A2(author$project$Grid$Coordinate, 17, 2),
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
						A4(
							author$project$GameModel$setInModelGrid,
							author$project$Tile$Water(author$project$Tile$walkableWaterInfo),
							A2(author$project$Grid$Coordinate, 16, 2),
							author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
							A4(
								author$project$GameModel$setInModelGrid,
								author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
								A2(author$project$Grid$Coordinate, 15, 2),
								author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
								A3(
									author$project$GameModel$removeFromStairsDictAndSubstituteGridTile,
									A2(author$project$GameDefinitions$Common$getFormattedStairsId, 12, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id),
									author$project$Tile$Floor(author$project$Tile$defaultVisibleGrassFloorInfo),
									model))))) : author$project$GameModel$updateModelFloorDictWithLevel(
					A4(
						author$project$GameModel$setInModelGrid,
						author$project$Tile$Lever(author$project$GameDefinitions$Game2$LastFloor$customLeverInfo),
						coords,
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
						A4(
							author$project$GameModel$setInModelGrid,
							author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
							A2(author$project$Grid$Coordinate, 15, 2),
							author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
							model)));
			})
		]);
}();
var author$project$GameModel$applyFuncToOtherCharacter = F3(
	function (ocharid, func, model) {
		var newCharsDict = function () {
			var _n0 = A2(elm$core$Dict$get, ocharid, model.m);
			if (_n0.$ === 1) {
				return model.m;
			} else {
				var otherChar = _n0.a;
				return A3(
					elm$core$Dict$insert,
					ocharid,
					func(otherChar),
					model.m);
			}
		}();
		return _Utils_update(
			model,
			{m: newCharsDict});
	});
var author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForToDownLever2 = _List_fromArray(
	[
		F2(
		function (coords, model) {
			return author$project$GameModel$updateModelFloorDictWithLevel(
				A3(
					author$project$GameModel$applyFuncToOtherCharacter,
					9,
					function (oc) {
						return _Utils_update(
							oc,
							{
								V: _List_fromArray(
									[
										A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, 18, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id, _List_Nil, 1.0, true, true),
										author$project$Beings$Beings$MoveRandomly
									])
							});
					},
					A4(
						author$project$GameModel$setInModelGrid,
						author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
						A2(author$project$Grid$Coordinate, 17, 2),
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
						A4(
							author$project$GameModel$setInModelGrid,
							author$project$Tile$Floor(author$project$Tile$defaultFloorInfo),
							A2(author$project$Grid$Coordinate, 16, 2),
							author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
							model))));
		})
	]);
var author$project$Tile$LeverAlwaysToggle = 1;
var author$project$GameDefinitions$Game2$LastFloor$customLever2Info = {b$: 'stone', cm: false, bz: true, cr: 2, cD: 1, eq: 0};
var author$project$Grid$Coordinate3D = F3(
	function (x, y, floorId) {
		return {S: floorId, bk: x, bl: y};
	});
var author$project$GameModel$getFightingCharacterLocations = function (model) {
	return A2(
		elm$core$List$map,
		function (fc) {
			return A3(author$project$Grid$Coordinate3D, fc.s.bk, fc.s.bl, fc.S);
		},
		elm$core$Dict$values(model.h));
};
var author$project$GameModel$getOtherCharacterLocations = function (model) {
	return A2(
		elm$core$List$map,
		function (oc) {
			return A3(author$project$Grid$Coordinate3D, oc.s.bk, oc.s.bl, oc.S);
		},
		elm$core$Dict$values(model.m));
};
var author$project$GameModel$getAllCharactersAndPlayerLocations = function (model) {
	return _Utils_ap(
		author$project$GameModel$getFightingCharacterLocations(model),
		_Utils_ap(
			author$project$GameModel$getOtherCharacterLocations(model),
			_List_fromArray(
				[
					A3(author$project$Grid$Coordinate3D, model.v.s.bk, model.v.s.bl, model.c7)
				])));
};
var author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForToUpLever2 = _List_fromArray(
	[
		F2(
		function (coords, model) {
			var theUnchangedLever = author$project$Tile$Lever(
				_Utils_update(
					author$project$GameDefinitions$Game2$LastFloor$customLever2Info,
					{bz: false}));
			var occupiedLocations = author$project$GameModel$getAllCharactersAndPlayerLocations(model);
			return ((!A2(
				elm$core$List$member,
				A3(author$project$Grid$Coordinate3D, 16, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id),
				occupiedLocations)) && (!A2(
				elm$core$List$member,
				A3(author$project$Grid$Coordinate3D, 17, 2, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id),
				occupiedLocations))) ? author$project$GameModel$updateModelFloorDictWithLevel(
				A4(
					author$project$GameModel$setInModelGrid,
					author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
					A2(author$project$Grid$Coordinate, 17, 2),
					author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
					A4(
						author$project$GameModel$setInModelGrid,
						author$project$Tile$Water(author$project$Tile$defaultWaterInfo),
						A2(author$project$Grid$Coordinate, 16, 2),
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
						model))) : A4(author$project$GameModel$setInModelGrid, theUnchangedLever, coords, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id, model);
		})
	]);
var author$project$GameModel$NoModelChanger = {$: 1};
var author$project$GameModel$SimpleModelChanger = function (a) {
	return {$: 0, a: a};
};
var author$project$GameDefinitions$Game2$LastFloor$leverModelChangerFuncs = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			1,
			{
				cW: author$project$GameModel$NoModelChanger,
				cX: author$project$GameModel$SimpleModelChanger(author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForLever1)
			}),
			_Utils_Tuple2(
			2,
			{
				cW: author$project$GameModel$SimpleModelChanger(author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForToDownLever2),
				cX: author$project$GameModel$SimpleModelChanger(author$project$GameDefinitions$Game2$LastFloor$modelChangerFuncsForToUpLever2)
			})
		]));
var author$project$GameDefinitions$Game2$TheAttic$determineTheAtticFloorStairsInfo = function () {
	var srcoords = author$project$GameDefinitions$Common$StairsRoomCoords;
	var lstairs = _List_fromArray(
		[
			{
			bp: author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id,
			ab: 2,
			bB: elm$core$Maybe$Nothing,
			bF: elm$core$Maybe$Just(author$project$GameModel$SquareRoom),
			bG: 4,
			bI: 1,
			bL: _Utils_Tuple2(0, 1),
			bM: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id),
			bS: A2(author$project$GameDefinitions$Common$getFormattedStairsId, 9, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id)
		}
		]);
	return A2(
		elm$core$List$map,
		function (rec) {
			return A6(
				author$project$GameDefinitions$Common$createStairsInfo,
				rec.bM,
				rec.bp,
				rec.bL,
				rec.bS,
				A5(srcoords, rec.bI, rec.bG, rec.bB, rec.ab, rec.bF),
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		},
		lstairs);
}();
var author$project$GameModel$substituteTileInModelGrid = F4(
	function (gridToTileFunc, coords, floorId, model) {
		var mbRelevantGrid = F2(
			function (thefloorId, themodel) {
				return _Utils_eq(thefloorId, themodel.c7) ? elm$core$Maybe$Just(themodel.cq) : A2(
					elm$core$Maybe$map,
					function ($) {
						return $.cq;
					},
					A2(elm$core$Dict$get, floorId, themodel.bu));
			});
		var _n0 = A2(mbRelevantGrid, floorId, model);
		if (_n0.$ === 1) {
			return model;
		} else {
			var thegrid = _n0.a;
			var _n1 = gridToTileFunc(thegrid);
			if (!_n1.$) {
				var atile = _n1.a;
				return function (ngrid) {
					return A3(author$project$GameModel$updateModelFloorDictWithFloorGrid, floorId, ngrid, model);
				}(
					A3(author$project$Grid$set, coords, atile, thegrid));
			} else {
				return model;
			}
		}
	});
var author$project$TileGrid$removeMergedLandingTargetFromTile = F2(
	function (coords, thegrid) {
		var currTile = A2(
			author$project$Grid$get,
			A2(author$project$Grid$Coordinate, coords.bk, coords.bl),
			thegrid);
		if (currTile.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!currTile.a.$) {
				var finfo = currTile.a.a;
				return elm$core$Maybe$Just(
					author$project$Tile$Floor(
						_Utils_update(
							finfo,
							{de: elm$core$Maybe$Nothing})));
			} else {
				return elm$core$Maybe$Nothing;
			}
		}
	});
var author$project$GameModel$removeFromLandingTargetDictAndGrid = F2(
	function (tid, model) {
		var theltLocInfo = A2(elm$core$Dict$get, tid, model.dv);
		var removeFromLandingTargetDictAux = function (themodel) {
			return _Utils_update(
				themodel,
				{
					dv: A2(elm$core$Dict$remove, tid, themodel.dv)
				});
		};
		var newModel = function () {
			if (!theltLocInfo.$) {
				var infoRec = theltLocInfo.a;
				return removeFromLandingTargetDictAux(
					A4(
						author$project$GameModel$substituteTileInModelGrid,
						author$project$TileGrid$removeMergedLandingTargetFromTile(infoRec.Q),
						infoRec.Q,
						infoRec.S,
						model));
			} else {
				return model;
			}
		}();
		return newModel;
	});
var author$project$GameModel$setMergedElementInModelGrid = F4(
	function (gridToTileFunc, coords, floorId, model) {
		var mbRelevantGrid = F2(
			function (thefloorId, themodel) {
				return _Utils_eq(thefloorId, themodel.c7) ? elm$core$Maybe$Just(themodel.cq) : A2(
					elm$core$Maybe$map,
					function ($) {
						return $.cq;
					},
					A2(elm$core$Dict$get, floorId, themodel.bu));
			});
		var _n0 = A2(mbRelevantGrid, floorId, model);
		if (_n0.$ === 1) {
			return model;
		} else {
			var thegrid = _n0.a;
			var _n1 = gridToTileFunc(thegrid);
			if (!_n1.$) {
				var atile = _n1.a;
				return function (ngrid) {
					return A3(author$project$GameModel$updateModelFloorDictWithFloorGrid, floorId, ngrid, model);
				}(
					A3(author$project$Grid$set, coords, atile, thegrid));
			} else {
				return model;
			}
		}
	});
var author$project$Tile$LandingTargetDrawing = elm$core$Basics$identity;
var author$project$TileGrid$getMergedLandingTargetTile = F2(
	function (locInfo, thegrid) {
		var currTile = A2(
			author$project$Grid$get,
			A2(author$project$Grid$Coordinate, locInfo.Q.bk, locInfo.Q.bl),
			thegrid);
		if ((!currTile.$) && (!currTile.a.$)) {
			var finfo = currTile.a.a;
			return elm$core$Maybe$Just(
				author$project$Tile$Floor(
					_Utils_update(
						finfo,
						{
							de: elm$core$Maybe$Just(locInfo.bP)
						})));
		} else {
			return elm$core$Maybe$Just(
				author$project$Tile$Floor(
					A8(
						author$project$Tile$FloorInfo,
						elm$core$Maybe$Nothing,
						elm$core$Maybe$Just(locInfo.bP),
						elm$core$Maybe$Nothing,
						0,
						true,
						true,
						2,
						'')));
		}
	});
var author$project$GameModel$addToLandingTargetDictAndGrid = F2(
	function (ltRec, model) {
		var tid = ltRec.bP;
		var theltLocInfo = A2(elm$core$Dict$get, tid, model.dv);
		var dRec = {Q: ltRec.Q, S: ltRec.S};
		var newLandingTargetDict = function (theModel) {
			return A3(elm$core$Dict$insert, tid, dRec, theModel.dv);
		};
		var newModel = function () {
			if (!theltLocInfo.$) {
				var infoRec = theltLocInfo.a;
				return A4(
					author$project$GameModel$setMergedElementInModelGrid,
					author$project$TileGrid$getMergedLandingTargetTile(ltRec),
					ltRec.Q,
					ltRec.S,
					function (nModel) {
						return _Utils_update(
							nModel,
							{
								dv: newLandingTargetDict(nModel)
							});
					}(
						A2(author$project$GameModel$removeFromLandingTargetDictAndGrid, tid, model)));
			} else {
				return A4(
					author$project$GameModel$setMergedElementInModelGrid,
					author$project$TileGrid$getMergedLandingTargetTile(ltRec),
					ltRec.Q,
					ltRec.S,
					_Utils_update(
						model,
						{
							dv: newLandingTargetDict(model)
						}));
			}
		}();
		return newModel;
	});
var author$project$GameModel$addSeveralToLandingTargetDictAndGrid = F2(
	function (lltLocRecs, model) {
		return A3(
			elm$core$List$foldl,
			F2(
				function (ltloc, macc) {
					return A2(author$project$GameModel$addToLandingTargetDictAndGrid, ltloc, macc);
				}),
			model,
			lltLocRecs);
	});
var author$project$GameModel$removeFromStairsDictAndGrid = F2(
	function (stairsId, model) {
		return A3(author$project$GameModel$removeFromStairsDictAndSubstituteGridTile, stairsId, author$project$Tile$NoTileYet, model);
	});
var author$project$Tile$Stairs = function (a) {
	return {$: 1, a: a};
};
var author$project$GameModel$addToStairsDictAndGrid = F2(
	function (stairsRec, model) {
		var theStairsTile = function (locStairsInfo) {
			return author$project$Tile$Stairs(locStairsInfo.cR);
		};
		var stairsId = stairsRec.cR.bM;
		var previousStairsLocInfo = A2(elm$core$Dict$get, stairsId, model.dZ);
		var newStairsDict = function (theModel) {
			return A3(elm$core$Dict$insert, stairsId, stairsRec, theModel.dZ);
		};
		var newModel = function () {
			if (!previousStairsLocInfo.$) {
				var infoRec = previousStairsLocInfo.a;
				return function (nModel) {
					return A4(
						author$project$GameModel$setInModelGrid,
						theStairsTile(stairsRec),
						stairsRec.Q,
						stairsRec.S,
						_Utils_update(
							nModel,
							{
								dZ: newStairsDict(nModel)
							}));
				}(
					A2(author$project$GameModel$removeFromStairsDictAndGrid, stairsId, model));
			} else {
				return A4(
					author$project$GameModel$setInModelGrid,
					theStairsTile(stairsRec),
					stairsRec.Q,
					stairsRec.S,
					_Utils_update(
						model,
						{
							dZ: newStairsDict(model)
						}));
			}
		}();
		return newModel;
	});
var author$project$GameModel$addSeveralToStairsDictAndGrid = F2(
	function (lstairsRec, model) {
		return A3(
			elm$core$List$foldl,
			F2(
				function (oneStairsRec, macc) {
					return A2(author$project$GameModel$addToStairsDictAndGrid, oneStairsRec, macc);
				}),
			model,
			lstairsRec);
	});
var author$project$TileGrid$removeMergedTeleporterFromTile = F2(
	function (coords, thegrid) {
		var currTile = A2(
			author$project$Grid$get,
			A2(author$project$Grid$Coordinate, coords.bk, coords.bl),
			thegrid);
		if (currTile.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			switch (currTile.a.$) {
				case 3:
					var winfo = currTile.a.a;
					return elm$core$Maybe$Just(
						author$project$Tile$Wall(
							_Utils_update(
								winfo,
								{cu: elm$core$Maybe$Nothing})));
				case 0:
					var finfo = currTile.a.a;
					return elm$core$Maybe$Just(
						author$project$Tile$Floor(
							_Utils_update(
								finfo,
								{cu: elm$core$Maybe$Nothing})));
				default:
					return elm$core$Maybe$Nothing;
			}
		}
	});
var author$project$GameModel$removeFromTeleporterDictAndGrid = F2(
	function (telId, model) {
		var theTeleporterLocInfo = A2(elm$core$Dict$get, telId, model.d2);
		var removeFromTeleporterDictAux = function (themodel) {
			return _Utils_update(
				themodel,
				{
					d2: A2(elm$core$Dict$remove, telId, themodel.d2)
				});
		};
		var newModel = function () {
			if (!theTeleporterLocInfo.$) {
				var infoRec = theTeleporterLocInfo.a;
				return removeFromTeleporterDictAux(
					A4(
						author$project$GameModel$substituteTileInModelGrid,
						author$project$TileGrid$removeMergedTeleporterFromTile(infoRec.Q),
						infoRec.Q,
						infoRec.S,
						model));
			} else {
				return model;
			}
		}();
		return newModel;
	});
var author$project$Tile$TransparentFloor = 2;
var author$project$TileGrid$createTeleporterWallInfo = F2(
	function (winfo, tel_info) {
		return _Utils_update(
			winfo,
			{
				cu: elm$core$Maybe$Just(tel_info)
			});
	});
var author$project$TileGrid$getMergedTeleporteTile = F2(
	function (locTelInfo, thegrid) {
		var currTile = A2(
			author$project$Grid$get,
			A2(author$project$Grid$Coordinate, locTelInfo.Q.bk, locTelInfo.Q.bl),
			thegrid);
		if (currTile.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			switch (currTile.a.$) {
				case 3:
					var winfo = currTile.a.a;
					return elm$core$Maybe$Just(
						author$project$Tile$Wall(
							A2(author$project$TileGrid$createTeleporterWallInfo, winfo, locTelInfo.d4)));
				case 0:
					var finfo = currTile.a.a;
					return elm$core$Maybe$Just(
						author$project$Tile$Floor(
							_Utils_update(
								finfo,
								{
									cu: elm$core$Maybe$Just(locTelInfo.d4)
								})));
				case 13:
					var _n1 = currTile.a;
					return elm$core$Maybe$Just(
						author$project$Tile$Floor(
							A8(
								author$project$Tile$FloorInfo,
								elm$core$Maybe$Nothing,
								elm$core$Maybe$Nothing,
								elm$core$Maybe$Just(locTelInfo.d4),
								0,
								true,
								true,
								2,
								'black')));
				default:
					return elm$core$Maybe$Just(
						author$project$Tile$Floor(
							A8(
								author$project$Tile$FloorInfo,
								elm$core$Maybe$Nothing,
								elm$core$Maybe$Nothing,
								elm$core$Maybe$Just(locTelInfo.d4),
								2,
								true,
								true,
								2,
								'')));
			}
		}
	});
var author$project$GameModel$addToTeleporterDictAndGrid = F2(
	function (telRec, model) {
		var telId = telRec.d4.d3;
		var theTeleporterLocInfo = A2(elm$core$Dict$get, telId, model.d2);
		var newTeleporterDict = function (theModel) {
			return A3(elm$core$Dict$insert, telId, telRec, theModel.d2);
		};
		var newModel = function () {
			if (!theTeleporterLocInfo.$) {
				var infoRec = theTeleporterLocInfo.a;
				return A4(
					author$project$GameModel$setMergedElementInModelGrid,
					author$project$TileGrid$getMergedTeleporteTile(telRec),
					telRec.Q,
					telRec.S,
					function (nModel) {
						return _Utils_update(
							nModel,
							{
								d2: newTeleporterDict(nModel)
							});
					}(
						A2(author$project$GameModel$removeFromTeleporterDictAndGrid, telId, model)));
			} else {
				return A4(
					author$project$GameModel$setMergedElementInModelGrid,
					author$project$TileGrid$getMergedTeleporteTile(telRec),
					telRec.Q,
					telRec.S,
					_Utils_update(
						model,
						{
							d2: newTeleporterDict(model)
						}));
			}
		}();
		return newModel;
	});
var author$project$GameModel$addSeveralToTeleporterDictAndGrid = F2(
	function (ltelRec, model) {
		return A3(
			elm$core$List$foldl,
			F2(
				function (telRec, macc) {
					return A2(author$project$GameModel$addToTeleporterDictAndGrid, telRec, macc);
				}),
			model,
			ltelRec);
	});
var author$project$Grid$coordsFor = F2(
	function (index, grid) {
		var y = (index / grid.bc.cZ) | 0;
		var x = index % grid.bc.cZ;
		return A2(author$project$Grid$Coordinate, x, y);
	});
var elm$core$List$sortBy = _List_sortBy;
var author$project$GameDefinitions$Game2$Game2Definitions$initialModelFunc = F2(
	function (lrandints, imgBaseDir_) {
		var theStairsList = _Utils_ap(
			author$project$GameDefinitions$Game2$Basement$determineBasementStairsInfo,
			_Utils_ap(
				author$project$GameDefinitions$Game2$Caverns$determineCavernsStairsInfo,
				_Utils_ap(
					author$project$GameDefinitions$Game2$FirstFloor$determineFirstFloorStairsInfo,
					_Utils_ap(
						author$project$GameDefinitions$Game2$GroundFloor$determineGroundFloorStairsInfo,
						_Utils_ap(author$project$GameDefinitions$Game2$LastFloor$determineLastFloorStairsInfo, author$project$GameDefinitions$Game2$TheAttic$determineTheAtticFloorStairsInfo)))));
		var theLandingTargetsList = A2(
			elm$core$List$map,
			author$project$GameDefinitions$Common$getLandingTargetIdAndCoords(author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params),
			author$project$GameDefinitions$Game2$ConfigParamsAndInfo$landingTargetsList);
		var randomlyPositionPlayer = false;
		var otherTestCharacter8 = function () {
			var lClosedSetCoords = function (dClosedSet) {
				return A2(
					elm$core$List$map,
					function (_n13) {
						var idx = _n13.a;
						var loopNr = _n13.b;
						return A2(author$project$Grid$coordsFor, idx, author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor);
					},
					A2(
						elm$core$List$sortBy,
						elm$core$Tuple$second,
						elm$core$Dict$toList(dClosedSet)));
			};
			var _n11 = _Utils_Tuple2(65, 36);
			var xcoord = _n11.a;
			var ycoord = _n11.b;
			var _n12 = A7(author$project$GameDefinitions$Common$get_position_in_room, 1, 1, elm$core$Maybe$Nothing, author$project$GameModel$HorizontalRoom, 0, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var destPointX = _n12.a;
			var destPointY = _n12.b;
			return function (_char) {
				return A2(author$project$Beings$Beings$setCharacterMovingStrategies, _List_Nil, _char);
			}(
				A7(author$project$Beings$Beings$otherCharacterCreationFunc, 8, 'a_being5', 'small_worm', xcoord, ycoord, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, _List_Nil));
		}();
		var otherCharacter9 = function () {
			var _n10 = _Utils_Tuple2(20, 14);
			var xcoord = _n10.a;
			var ycoord = _n10.b;
			return function (oc) {
				return _Utils_update(
					oc,
					{x: false});
			}(
				function (oc) {
					return _Utils_update(
						oc,
						{b1: true});
				}(
					A7(
						author$project$Beings$Beings$otherCharacterCreationFunc,
						9,
						'a_being9',
						'horse',
						xcoord,
						ycoord,
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id,
						_List_fromArray(
							[author$project$Beings$Beings$MoveRandomly]))));
		}();
		var otherCharacter7 = function () {
			var _n9 = A7(author$project$GameDefinitions$Common$get_position_in_room, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.35, 0.75, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var xcoord = _n9.a;
			var ycoord = _n9.b;
			return A7(
				author$project$Beings$Beings$otherCharacterCreationFunc,
				7,
				'a_being7',
				'small_worm',
				xcoord,
				ycoord,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				_List_fromArray(
					[
						author$project$Beings$Beings$DontMoveListenAndActToOpenDoorMsg,
						A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bk, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bl, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, _List_Nil, 1, true, true),
						author$project$Beings$Beings$MoveRandomly
					]));
		}();
		var otherCharacter6 = function () {
			var _n8 = A7(author$project$GameDefinitions$Common$get_position_in_room, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.25, 0.5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var xcoord = _n8.a;
			var ycoord = _n8.b;
			return A7(
				author$project$Beings$Beings$otherCharacterCreationFunc,
				6,
				'a_being6',
				'small_worm',
				xcoord,
				ycoord,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				_List_fromArray(
					[
						author$project$Beings$Beings$MoveRandomlyListenAndActToOpenDoorMsg,
						A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bk, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bl, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, _List_Nil, 1, true, true),
						author$project$Beings$Beings$MoveRandomly
					]));
		}();
		var otherCharacter5 = function () {
			var _n6 = A7(author$project$GameDefinitions$Common$get_position_in_room, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.35, 0.5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var xcoord = _n6.a;
			var ycoord = _n6.b;
			var _n7 = A7(author$project$GameDefinitions$Common$get_position_in_room, 3, 7, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.25, 0, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var destPointX = _n7.a;
			var destPointY = _n7.b;
			return A7(
				author$project$Beings$Beings$otherCharacterCreationFunc,
				5,
				'a_being5',
				'small_worm',
				xcoord,
				ycoord,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				_List_fromArray(
					[
						author$project$Beings$Beings$MoveRandomlyListenAndActToOpenDoorMsg,
						A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bk, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bl, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, _List_Nil, 1, true, true),
						author$project$Beings$Beings$MoveRandomly
					]));
		}();
		var otherCharacter4 = function () {
			var _n5 = A7(author$project$GameDefinitions$Common$get_position_in_room, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.35, 0.25, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var xcoord = _n5.a;
			var ycoord = _n5.b;
			return A7(
				author$project$Beings$Beings$otherCharacterCreationFunc,
				4,
				'a_being4',
				'small_worm',
				xcoord,
				ycoord,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				_List_fromArray(
					[
						author$project$Beings$Beings$DontMoveListenAndActToOpenDoorMsg,
						A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bk, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bl, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, _List_Nil, 1, true, true),
						author$project$Beings$Beings$MoveRandomly
					]));
		}();
		var otherCharacter3 = function () {
			var _n4 = A7(author$project$GameDefinitions$Common$get_position_in_room, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.5, 0.5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var xcoord = _n4.a;
			var ycoord = _n4.b;
			return A7(
				author$project$Beings$Beings$otherCharacterCreationFunc,
				3,
				'a_being3',
				'small_worm',
				xcoord,
				ycoord,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				_List_fromArray(
					[
						author$project$Beings$Beings$MoveRandomlyListenAndActToOpenDoorMsg,
						A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bk, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bl, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, _List_Nil, 1, true, true),
						author$project$Beings$Beings$MoveRandomly
					]));
		}();
		var otherCharacter2 = function () {
			var _n3 = A7(author$project$GameDefinitions$Common$get_position_in_room, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomRow, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomCol, elm$core$Maybe$Nothing, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$hiddenPlantationRoomType, 0.25, 0.5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
			var xcoord = _n3.a;
			var ycoord = _n3.b;
			return A7(
				author$project$Beings$Beings$otherCharacterCreationFunc,
				2,
				'a_being',
				'small_worm',
				xcoord,
				ycoord,
				author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id,
				_List_fromArray(
					[
						author$project$Beings$Beings$MoveRandomlyListenAndActToOpenDoorMsg,
						A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bk, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$outside2TeleporterCoords.bl, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id, _List_Nil, 0.9, true, true),
						author$project$Beings$Beings$MoveRandomly
					]));
		}();
		var otherCharacter1 = A7(author$project$Beings$Beings$otherCharacterCreationFunc, 1, 'otherYou', '', 14, 11, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$lastFloor_id, _List_Nil);
		var levers = elm$core$Dict$empty;
		var initialFloorId = author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id;
		var fightingCharacter9 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 9, 'ghost', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id);
		var fightingCharacter8 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 8, 'pumpking', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id);
		var fightingCharacter7 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 7, 'ghost', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$firstFloor_id);
		var fightingCharacter6 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 6, 'pumpking', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id);
		var fightingCharacter5 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 5, 'snake', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$groundFloor_id);
		var fightingCharacter4 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 4, 'slime', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id);
		var fightingCharacter3 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 3, 'bat', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$basement_floor_id);
		var fightingCharacter2 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 2, 'snake', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id);
		var fightingCharacter10 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 10, 'bat', 10, 10, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$theAttic_id);
		var fightingCharacter1 = A5(author$project$GameDefinitions$Game2$Game2Definitions$initialFightingCharacter, 1, 'ghost', 5, 5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$caverns_floor_id);
		var createRandomMap = false;
		var _n0 = A7(author$project$GameDefinitions$Common$get_position_in_room, 4, 7, elm$core$Maybe$Nothing, author$project$GameModel$SquareRoom, 0.5, 0.5, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params);
		var pxcoord = _n0.a;
		var pycoord = _n0.b;
		var player_ = author$project$GameDefinitions$Game2$Game2Definitions$testAddToPlayerInventory(
			A3(author$project$GameDefinitions$Game2$Game2Definitions$initialPlayer, pxcoord, pycoord, initialFloorId));
		var _n1 = function (x) {
			return _Utils_Tuple2(
				x,
				A2(
					elm$core$Maybe$withDefault,
					elm$core$Maybe$Nothing,
					A2(
						elm$core$Maybe$map,
						function ($) {
							return $.dG;
						},
						A2(elm$core$Dict$get, x, author$project$GameDefinitions$Game2$Game2Definitions$dStore))));
		}(initialFloorId);
		var floor_id = _n1.a;
		var mbfloorname = _n1.b;
		var _n2 = A2(
			author$project$GameDefinitions$Game2$Game2Definitions$place_all_health_food_items,
			5,
			author$project$GameDefinitions$Game2$Game2Definitions$placeLastTwoPiecesOfPaper(
				_Utils_Tuple2(author$project$GameDefinitions$Game2$Game2Definitions$dStore, lrandints)));
		var storeDictWithPlacedPapersAndFoodItems = _n2.a;
		var lrands = _n2.b;
		return _Utils_Tuple3(
			A2(
				author$project$GameModel$addSeveralToLandingTargetDictAndGrid,
				theLandingTargetsList,
				A2(
					author$project$GameModel$addSeveralToStairsDictAndGrid,
					theStairsList,
					A2(
						author$project$GameModel$addSeveralToTeleporterDictAndGrid,
						author$project$GameDefinitions$Game2$ConfigParamsAndInfo$teleporterInfoList,
						{
							c6: author$project$GameModel$DisplayRegularGame,
							c7: floor_id,
							c9: false,
							da: false,
							h: elm$core$Dict$fromList(
								_List_fromArray(
									[
										_Utils_Tuple2(fightingCharacter1.a0, fightingCharacter1),
										_Utils_Tuple2(fightingCharacter2.a0, fightingCharacter2),
										_Utils_Tuple2(fightingCharacter3.a0, fightingCharacter3),
										_Utils_Tuple2(fightingCharacter4.a0, fightingCharacter4),
										_Utils_Tuple2(fightingCharacter5.a0, fightingCharacter5),
										_Utils_Tuple2(fightingCharacter6.a0, fightingCharacter6),
										_Utils_Tuple2(fightingCharacter7.a0, fightingCharacter7),
										_Utils_Tuple2(fightingCharacter8.a0, fightingCharacter8),
										_Utils_Tuple2(fightingCharacter9.a0, fightingCharacter9),
										_Utils_Tuple2(fightingCharacter10.a0, fightingCharacter10)
									])),
							bu: storeDictWithPlacedPapersAndFoodItems,
							dg: author$project$GameDefinitions$Game2$Game2Definitions$customGameCompletionFunc,
							dh: elm$core$Maybe$Just('Castle of Elm Tribulations'),
							di: A3(author$project$Thorns$Types$initialModel, player_, elm$core$Maybe$Nothing, imgBaseDir_),
							$7: imgBaseDir_,
							dv: elm$core$Dict$empty,
							cq: A2(
								elm$core$Maybe$withDefault,
								author$project$GameDefinitions$Game2$GroundFloor$gridGroundFloor,
								A2(
									elm$core$Maybe$map,
									function ($) {
										return $.cq;
									},
									A2(elm$core$Dict$get, initialFloorId, storeDictWithPlacedPapersAndFoodItems))),
							dw: author$project$GameDefinitions$Game2$LastFloor$leverModelChangerFuncs,
							dy: true,
							dz: elm$core$Maybe$Just('/game/casteleOfElmTribulations_.png'),
							dA: _List_fromArray(
								['you enter the dungeons Ground Floor ']),
							dD: A2(
								elm$core$Maybe$withDefault,
								elm$core$Maybe$Nothing,
								A2(
									elm$core$Maybe$map,
									function ($) {
										return $.dD;
									},
									A2(elm$core$Dict$get, initialFloorId, storeDictWithPlacedPapersAndFoodItems))),
							dG: mbfloorname,
							dH: _List_Nil,
							m: elm$core$Dict$fromList(
								_List_fromArray(
									[
										_Utils_Tuple2(otherCharacter1.a0, otherCharacter1),
										_Utils_Tuple2(otherCharacter2.a0, otherCharacter2),
										_Utils_Tuple2(otherCharacter3.a0, otherCharacter3),
										_Utils_Tuple2(otherCharacter4.a0, otherCharacter4),
										_Utils_Tuple2(otherCharacter5.a0, otherCharacter5),
										_Utils_Tuple2(otherCharacter6.a0, otherCharacter6),
										_Utils_Tuple2(otherCharacter7.a0, otherCharacter7),
										_Utils_Tuple2(otherCharacter9.a0, otherCharacter9)
									])),
							v: player_,
							dQ: _List_Nil,
							dS: 5,
							dX: elm$core$Maybe$Nothing,
							dZ: elm$core$Dict$empty,
							d_: true,
							d2: elm$core$Dict$empty,
							d7: 64,
							d9: 64,
							eb: A2(author$project$GameDefinitions$Common$get_total_height, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 9),
							ec: A2(author$project$GameDefinitions$Common$get_total_width, author$project$GameDefinitions$Game2$ConfigParamsAndInfo$config_params, 7),
							ek: true,
							em: author$project$GameDefinitions$Game2$Game2Definitions$common_window_height,
							en: 3,
							eo: 3,
							ep: author$project$GameDefinitions$Game2$Game2Definitions$common_window_width,
							er: elm$core$Maybe$Nothing
						}))),
			createRandomMap,
			randomlyPositionPlayer);
	});
var author$project$Algorithms$AStarShortestPath$BadSourcePointToStartSearch = {$: 3};
var author$project$Algorithms$AStarShortestPath$OnePathNode = elm$core$Basics$identity;
var elm$core$Basics$min = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) < 0) ? x : y;
	});
var author$project$Algorithms$AStarShortestPath$calculateDistance = F3(
	function (source, destination, mbDiagonalCost) {
		var dy = elm$core$Basics$abs(destination.bl - source.bl);
		var dx = elm$core$Basics$abs(destination.bk - source.bk);
		if (mbDiagonalCost.$ === 1) {
			return dx + dy;
		} else {
			var diagonalCost = mbDiagonalCost.a;
			var dMin = A2(elm$core$Basics$min, dx, dy);
			var dMax = A2(elm$core$Basics$max, dx, dy);
			return (dMin * diagonalCost) + (dMax - dMin);
		}
	});
var author$project$Algorithms$AStarShortestPath$CouldntFindPath = {$: 1};
var author$project$Algorithms$AStarShortestPath$CouldntFindPathGivenMaxLoopsLimit = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var author$project$Algorithms$AStarShortestPath$FoundPath = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var author$project$Algorithms$AStarShortestPath$cost = function (_n0) {
	var pathNode = _n0;
	return pathNode.J + pathNode.aZ;
};
var author$project$Algorithms$AStarShortestPath$pathNodesCompareFunc = F2(
	function (pnode1, pnode2) {
		return (_Utils_cmp(
			author$project$Algorithms$AStarShortestPath$cost(pnode1),
			author$project$Algorithms$AStarShortestPath$cost(pnode2)) > 0) ? 2 : ((_Utils_cmp(
			author$project$Algorithms$AStarShortestPath$cost(pnode1),
			author$project$Algorithms$AStarShortestPath$cost(pnode2)) < 0) ? 0 : 1);
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$ChangeOk = function (a) {
	return {$: 2, a: a};
};
var author$project$Algorithms$CustomIndexMinPriorityQueue$IndexForChangeDoesntExist = {$: 1};
var author$project$Algorithms$CustomIndexMinPriorityQueue$IndexForChangeOutOfBounds = function (a) {
	return {$: 0, a: a};
};
var author$project$Algorithms$CustomIndexMinPriorityQueue$changeKey = F4(
	function (idx, newKey, compareFunc, theiMinPqueue) {
		var _n0 = _Utils_Tuple2(
			A2(elm$core$Dict$get, idx, theiMinPqueue.f),
			A2(elm$core$Dict$get, idx, theiMinPqueue.n));
		if ((!_n0.a.$) && (!_n0.b.$)) {
			var oldKey = _n0.a.a;
			var qpidx = _n0.b.a;
			var newKeys = A3(elm$core$Dict$insert, idx, newKey, theiMinPqueue.f);
			var newiminPqueue = _Utils_update(
				theiMinPqueue,
				{f: newKeys});
			return ((idx >= 0) && (_Utils_cmp(idx, theiMinPqueue.bc) < 0)) ? author$project$Algorithms$CustomIndexMinPriorityQueue$ChangeOk(
				A3(
					author$project$Algorithms$CustomIndexMinPriorityQueue$sink,
					qpidx,
					compareFunc,
					A3(author$project$Algorithms$CustomIndexMinPriorityQueue$swim, qpidx, compareFunc, newiminPqueue))) : author$project$Algorithms$CustomIndexMinPriorityQueue$IndexForChangeOutOfBounds(idx);
		} else {
			return ((idx < 0) || (_Utils_cmp(idx, theiMinPqueue.bc) > -1)) ? author$project$Algorithms$CustomIndexMinPriorityQueue$IndexForChangeOutOfBounds(idx) : author$project$Algorithms$CustomIndexMinPriorityQueue$IndexForChangeDoesntExist;
		}
	});
var author$project$Grid$indexFor = F2(
	function (coords, grid) {
		return (coords.bl * grid.bc.cZ) + coords.bk;
	});
var author$project$Algorithms$AStarShortestPath$includeOneNeighborCellInOpenNodesFunc = F9(
	function (nCellCoords, _n0, mbDiagonalCost, destination, theIsWalkableFunc, shouldBeAvoidedFunc, isNodeClosedDict, grid, impriorqueue) {
		var currNode = _n0;
		var neighborIndex = A2(author$project$Grid$indexFor, nCellCoords, grid);
		var updatePathNodeDistanceAndParent = F2(
			function (pnode, thepriorityqueue) {
				var newDistance = currNode.J + 1;
				if (_Utils_cmp(newDistance, pnode.J) < 0) {
					var changeKeyOut = function (updatedNeighborNode) {
						return A4(author$project$Algorithms$CustomIndexMinPriorityQueue$changeKey, neighborIndex, updatedNeighborNode, author$project$Algorithms$AStarShortestPath$pathNodesCompareFunc, thepriorityqueue);
					}(
						_Utils_update(
							pnode,
							{
								J: newDistance,
								a7: elm$core$Maybe$Just(currNode)
							}));
					if (changeKeyOut.$ === 2) {
						var newiminPriorityqueue = changeKeyOut.a;
						return newiminPriorityqueue;
					} else {
						return thepriorityqueue;
					}
				} else {
					return thepriorityqueue;
				}
			});
		var isNeighborInClosedSet = !_Utils_eq(
			A2(elm$core$Dict$get, neighborIndex, isNodeClosedDict),
			elm$core$Maybe$Nothing);
		var insertNewPathNode = function (thepriorityqueue) {
			var newPathNode = {
				Q: nCellCoords,
				J: currNode.J + 1,
				aZ: A3(author$project$Algorithms$AStarShortestPath$calculateDistance, nCellCoords, destination, mbDiagonalCost),
				a7: elm$core$Maybe$Just(currNode)
			};
			return A4(author$project$Algorithms$CustomIndexMinPriorityQueue$insert, neighborIndex, newPathNode, author$project$Algorithms$AStarShortestPath$pathNodesCompareFunc, thepriorityqueue);
		};
		var insertPathNodeorupdatePathNodeDistanceAndParent = function (thepriorityqueue) {
			var _n1 = insertNewPathNode(thepriorityqueue);
			switch (_n1.$) {
				case 2:
					var pqueue = _n1.a;
					return pqueue;
				case 1:
					var idx = _n1.a;
					var pnode = _n1.b;
					return A2(updatePathNodeDistanceAndParent, pnode, thepriorityqueue);
				default:
					var idx = _n1.a;
					return thepriorityqueue;
			}
		};
		return ((!A2(theIsWalkableFunc, nCellCoords, grid)) || (A2(shouldBeAvoidedFunc, nCellCoords, grid) || isNeighborInClosedSet)) ? impriorqueue : insertPathNodeorupdatePathNodeDistanceAndParent(impriorqueue);
	});
var author$project$Algorithms$AStarShortestPath$reconstructPath = F2(
	function (currentPathList, _n0) {
		reconstructPath:
		while (true) {
			var currentNodeInfo = _n0;
			var newPathList = _Utils_ap(
				_List_fromArray(
					[currentNodeInfo.Q]),
				currentPathList);
			var mbNewCurrentNode = currentNodeInfo.a7;
			if (!mbNewCurrentNode.$) {
				var parentNode = mbNewCurrentNode.a;
				var $temp$currentPathList = newPathList,
					$temp$_n0 = parentNode;
				currentPathList = $temp$currentPathList;
				_n0 = $temp$_n0;
				continue reconstructPath;
			} else {
				return newPathList;
			}
		}
	});
var author$project$Algorithms$CustomIndexMinPriorityQueue$getSize = function (theiMinPqueue) {
	return theiMinPqueue.bc;
};
var author$project$Grid$validGridCoords = F2(
	function (coords, grid) {
		return ((coords.bk < 0) || ((_Utils_cmp(coords.bk, grid.bc.cZ) > -1) || ((coords.bl < 0) || (_Utils_cmp(coords.bl, grid.bc.ch) > -1)))) ? false : true;
	});
var author$project$Grid$getAdjacentCellCoords = F3(
	function (centerCoords, bIncludeDiagonals, grid) {
		var _n0 = _Utils_Tuple2(centerCoords.bk, centerCoords.bl);
		var xCenter = _n0.a;
		var yCenter = _n0.b;
		var bottomAdjacentCoords = A2(author$project$Grid$Coordinate, xCenter, yCenter + 1);
		var bottomLeftDiag = A2(author$project$Grid$Coordinate, xCenter - 1, yCenter + 1);
		var bottomRightDiag = A2(author$project$Grid$Coordinate, xCenter + 1, yCenter + 1);
		var leftAdjacentCoords = A2(author$project$Grid$Coordinate, xCenter - 1, yCenter);
		var rightAdjacentCoords = A2(author$project$Grid$Coordinate, xCenter + 1, yCenter);
		var topAdjacentCoords = A2(author$project$Grid$Coordinate, xCenter, yCenter - 1);
		var topLeftDiag = A2(author$project$Grid$Coordinate, xCenter - 1, yCenter - 1);
		var topRightDiag = A2(author$project$Grid$Coordinate, xCenter + 1, yCenter - 1);
		return bIncludeDiagonals ? A2(
			elm$core$List$filter,
			function (coords) {
				return A2(author$project$Grid$validGridCoords, coords, grid);
			},
			_List_fromArray(
				[topAdjacentCoords, bottomAdjacentCoords, leftAdjacentCoords, rightAdjacentCoords, topLeftDiag, topRightDiag, bottomLeftDiag, bottomRightDiag])) : A2(
			elm$core$List$filter,
			function (coords) {
				return A2(author$project$Grid$validGridCoords, coords, grid);
			},
			_List_fromArray(
				[bottomAdjacentCoords, topAdjacentCoords, leftAdjacentCoords, rightAdjacentCoords]));
	});
var author$project$Algorithms$AStarShortestPath$evolveThroughOpenNodesToDestinationRecFunc = F9(
	function (nodePqueue, previousNodeClosedDict, mbDiagonalCost, destination, isWalkableFunc, shouldBeAvoidedFunc, grid, maxNrOfLoops, loopNr) {
		evolveThroughOpenNodesToDestinationRecFunc:
		while (true) {
			var currentNodeCoordsFromCurrNode = function (currNode) {
				var currNodeInfo = currNode;
				return A2(author$project$Grid$Coordinate, currNodeInfo.Q.bk, currNodeInfo.Q.bl);
			};
			var mbCurrCoordsFromMbCurrNode = function (mbCurrNode) {
				return A2(
					elm$core$Maybe$map,
					function (cnode) {
						return currentNodeCoordsFromCurrNode(cnode);
					},
					mbCurrNode);
			};
			var bIncludeDiagonals = A2(
				elm$core$Maybe$withDefault,
				false,
				A2(
					elm$core$Maybe$map,
					function (_n4) {
						return true;
					},
					mbDiagonalCost));
			var _n0 = function (rec) {
				return _Utils_Tuple3(rec.dn, rec.dt, rec.dq);
			}(
				A2(author$project$Algorithms$CustomIndexMinPriorityQueue$customDeleteMin, author$project$Algorithms$AStarShortestPath$pathNodesCompareFunc, nodePqueue));
			var mbCurrentIndex = _n0.a;
			var mbCurrentNode = _n0.b;
			var intermediateOpenNodes = _n0.c;
			var newIsNodeClosed = function () {
				if (!mbCurrentIndex.$) {
					var currentIndex = mbCurrentIndex.a;
					return A3(elm$core$Dict$insert, currentIndex, loopNr, previousNodeClosedDict);
				} else {
					return previousNodeClosedDict;
				}
			}();
			var includeNeighborsInOpenNodesFunc = F2(
				function (ladjacentNeighborCells, impriorqueue) {
					if (!mbCurrentNode.$) {
						var currNode = mbCurrentNode.a;
						return A3(
							elm$core$List$foldl,
							F2(
								function (nCellCoords, queueAcc) {
									return A9(author$project$Algorithms$AStarShortestPath$includeOneNeighborCellInOpenNodesFunc, nCellCoords, currNode, mbDiagonalCost, destination, isWalkableFunc, shouldBeAvoidedFunc, newIsNodeClosed, grid, queueAcc);
								}),
							impriorqueue,
							ladjacentNeighborCells);
					} else {
						return impriorqueue;
					}
				});
			var theAdjacentCellCoords = A2(
				elm$core$Maybe$withDefault,
				_List_Nil,
				A2(
					elm$core$Maybe$map,
					function (cellCoords) {
						return A3(author$project$Grid$getAdjacentCellCoords, cellCoords, bIncludeDiagonals, grid);
					},
					mbCurrCoordsFromMbCurrNode(mbCurrentNode)));
			var newOpenNodes = A2(includeNeighborsInOpenNodesFunc, theAdjacentCellCoords, intermediateOpenNodes);
			if (mbCurrentNode.$ === 1) {
				return author$project$Algorithms$AStarShortestPath$CouldntFindPath;
			} else {
				var currentNode = mbCurrentNode.a;
				if (_Utils_eq(
					currentNodeCoordsFromCurrNode(currentNode),
					destination)) {
					return A2(
						author$project$Algorithms$AStarShortestPath$FoundPath,
						A2(author$project$Algorithms$AStarShortestPath$reconstructPath, _List_Nil, currentNode),
						newIsNodeClosed);
				} else {
					if (_Utils_cmp(loopNr, maxNrOfLoops) > 0) {
						return A2(author$project$Algorithms$AStarShortestPath$CouldntFindPathGivenMaxLoopsLimit, newOpenNodes, newIsNodeClosed);
					} else {
						if (author$project$Algorithms$CustomIndexMinPriorityQueue$getSize(nodePqueue) < 1) {
							return author$project$Algorithms$AStarShortestPath$CouldntFindPath;
						} else {
							var $temp$nodePqueue = newOpenNodes,
								$temp$previousNodeClosedDict = newIsNodeClosed,
								$temp$mbDiagonalCost = mbDiagonalCost,
								$temp$destination = destination,
								$temp$isWalkableFunc = isWalkableFunc,
								$temp$shouldBeAvoidedFunc = shouldBeAvoidedFunc,
								$temp$grid = grid,
								$temp$maxNrOfLoops = maxNrOfLoops,
								$temp$loopNr = loopNr + 1;
							nodePqueue = $temp$nodePqueue;
							previousNodeClosedDict = $temp$previousNodeClosedDict;
							mbDiagonalCost = $temp$mbDiagonalCost;
							destination = $temp$destination;
							isWalkableFunc = $temp$isWalkableFunc;
							shouldBeAvoidedFunc = $temp$shouldBeAvoidedFunc;
							grid = $temp$grid;
							maxNrOfLoops = $temp$maxNrOfLoops;
							loopNr = $temp$loopNr;
							continue evolveThroughOpenNodesToDestinationRecFunc;
						}
					}
				}
			}
		}
	});
var author$project$Algorithms$AStarShortestPath$findPath = F6(
	function (source, destination, mbDiagonalCost, isWalkableFunc, shouldBeAvoidedFunc, grid) {
		var pathNodeStart = {
			Q: source,
			J: 0,
			aZ: A3(author$project$Algorithms$AStarShortestPath$calculateDistance, source, destination, mbDiagonalCost),
			a7: elm$core$Maybe$Nothing
		};
		var tryOpenNodes = A4(
			author$project$Algorithms$CustomIndexMinPriorityQueue$insert,
			A2(author$project$Grid$indexFor, source, grid),
			pathNodeStart,
			author$project$Algorithms$AStarShortestPath$pathNodesCompareFunc,
			author$project$Algorithms$CustomIndexMinPriorityQueue$createEmptyCustomIndexMinPriorityQueue(grid.bc.cZ * grid.bc.ch));
		var maxNrOfLoops = 1000;
		var isNodeClosed = elm$core$Dict$empty;
		if (tryOpenNodes.$ === 2) {
			var openNodes = tryOpenNodes.a;
			return A9(author$project$Algorithms$AStarShortestPath$evolveThroughOpenNodesToDestinationRecFunc, openNodes, isNodeClosed, mbDiagonalCost, destination, isWalkableFunc, shouldBeAvoidedFunc, grid, maxNrOfLoops, 1);
		} else {
			return author$project$Algorithms$AStarShortestPath$BadSourcePointToStartSearch;
		}
	});
var author$project$Tile$isHole = function (tile) {
	if (tile.$ === 2) {
		return true;
	} else {
		return false;
	}
};
var author$project$Tile$isStairs = function (tile) {
	if (tile.$ === 1) {
		return true;
	} else {
		return false;
	}
};
var author$project$Tile$isStairsOrHole = function (tile) {
	return author$project$Tile$isStairs(tile) || author$project$Tile$isHole(tile);
};
var author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable = F2(
	function (location_, grid) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(
				elm$core$Maybe$map,
				author$project$Tile$isStairsOrHole,
				A2(author$project$Grid$get, location_, grid)));
	});
var author$project$GameDefinitions$Game3$Game3Definitions$common_window_height = 12;
var author$project$GameDefinitions$Game3$Game3Definitions$common_window_width = 12;
var author$project$GameDefinitions$Game3$Game3Definitions$digitToTileFunc = function (elem) {
	return (!elem) ? author$project$Tile$Floor(author$project$Tile$defaultGrassFloorInfo) : ((elem === 1) ? author$project$Tile$Wall(author$project$Tile$defaultWallInfo) : author$project$Tile$NoTileYet);
};
var author$project$GameDefinitions$Game3$Game3Definitions$testListMaze = A2(
	elm$core$List$map,
	function (lrow) {
		return _Utils_ap(lrow, lrow);
	},
	_List_fromArray(
		[
			_List_fromArray(
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1]),
			_List_fromArray(
			[0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0]),
			_List_fromArray(
			[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0])
		]));
var author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid = author$project$MapGen$correctSomeWallCorners(
	author$project$Grid$fromList(
		A2(
			elm$core$List$map,
			function (lrow) {
				return A2(
					elm$core$List$map,
					function (elem) {
						return author$project$GameDefinitions$Game3$Game3Definitions$digitToTileFunc(elem);
					},
					lrow);
			},
			author$project$GameDefinitions$Game3$Game3Definitions$testListMaze)));
var author$project$GameDefinitions$Game3$Game3Definitions$customGameCompletionFunc = F2(
	function (floorid, coords) {
		return (!floorid) && (_Utils_eq(coords.bk, author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.cZ - 1) && _Utils_eq(coords.bl, author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.ch - 1));
	});
var author$project$GameDefinitions$Game3$Game3Definitions$dStore = elm$core$Dict$fromList(
	_List_fromArray(
		[
			_Utils_Tuple2(
			0,
			{
				cq: author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid,
				dD: elm$core$Maybe$Just('/maps/mazeBlackBgmap.png'),
				dG: elm$core$Maybe$Just('The Maze Grid'),
				eb: author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.ch,
				ec: author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.cZ,
				em: author$project$GameDefinitions$Game3$Game3Definitions$common_window_height,
				ep: author$project$GameDefinitions$Game3$Game3Definitions$common_window_width
			})
		]));
var author$project$GameDefinitions$Game3$Game3Definitions$initialPlayer = F3(
	function (x, y, z) {
		var elem = '@';
		return A5(author$project$Beings$Beings$playerCreationFunc, elem, 'You', x, y, z);
	});
var author$project$GameDefinitions$Game3$Game3Definitions$initialModelFunc = F2(
	function (lrandints, imgBaseDir_) {
		var randomlyPositionPlayer = false;
		var otherTestCharacter8 = function () {
			var lClosedSetCoords = function (dClosedSet) {
				return A2(
					elm$core$List$map,
					function (_n5) {
						var idx = _n5.a;
						var loopNr = _n5.b;
						return A2(author$project$Grid$coordsFor, idx, author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid);
					},
					A2(
						elm$core$List$sortBy,
						elm$core$Tuple$second,
						elm$core$Dict$toList(dClosedSet)));
			};
			var _n2 = _Utils_Tuple2(2, 2);
			var xcoord = _n2.a;
			var ycoord = _n2.b;
			var _n3 = _Utils_Tuple2(author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.cZ - 1, author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.ch - 1);
			var destPointX = _n3.a;
			var destPointY = _n3.b;
			var findpath = function (thecharacter) {
				return A6(
					author$project$Algorithms$AStarShortestPath$findPath,
					thecharacter.s,
					A2(author$project$Grid$Coordinate, destPointX, destPointY),
					elm$core$Maybe$Nothing,
					F2(
						function (loc, grid) {
							return A3(author$project$Beings$BeingsInTileGrid$isGridTileWalkable, loc, thecharacter, author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid);
						}),
					author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable,
					author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid);
			};
			var movingStrategies = function (thecharacter) {
				var _n4 = findpath(thecharacter);
				if (!_n4.$) {
					var lcoords = _n4.a;
					var dClosedSet = _n4.b;
					return function (l) {
						return _Utils_ap(
							l,
							_List_fromArray(
								[
									A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.cZ - 1, 3, 0, _List_Nil, 1, true, true),
									author$project$Beings$Beings$MoveRandomly
								]));
					}(
						A2(
							elm$core$List$map,
							function (coords) {
								return A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, coords.bk, coords.bl, 0, _List_Nil, 1, false, true);
							},
							lcoords));
				} else {
					return _List_fromArray(
						[
							A7(author$project$Beings$Beings$MoveTowardsFixedCoordinates, destPointX, destPointY, 0, _List_Nil, 1, true, true),
							author$project$Beings$Beings$MoveRandomly
						]);
				}
			};
			return function (_char) {
				return A2(
					author$project$Beings$Beings$setCharacterMovingStrategies,
					movingStrategies(_char),
					_char);
			}(
				A7(author$project$Beings$Beings$otherCharacterCreationFunc, 8, 'a_being5', 'small_worm', xcoord, ycoord, 0, _List_Nil));
		}();
		var initialFloorId = 0;
		var createRandomMap = false;
		var _n0 = _Utils_Tuple2(1, 1);
		var pxcoord = _n0.a;
		var pycoord = _n0.b;
		var player_ = A3(author$project$GameDefinitions$Game3$Game3Definitions$initialPlayer, pxcoord, pycoord, initialFloorId);
		var _n1 = function (x) {
			return _Utils_Tuple2(
				x,
				A2(
					elm$core$Maybe$withDefault,
					elm$core$Maybe$Nothing,
					A2(
						elm$core$Maybe$map,
						function ($) {
							return $.dG;
						},
						A2(elm$core$Dict$get, x, author$project$GameDefinitions$Game3$Game3Definitions$dStore))));
		}(initialFloorId);
		var floor_id = _n1.a;
		var mbfloorname = _n1.b;
		return _Utils_Tuple3(
			{
				c6: author$project$GameModel$DisplayRegularGame,
				c7: 0,
				c9: false,
				da: false,
				h: elm$core$Dict$empty,
				bu: author$project$GameDefinitions$Game3$Game3Definitions$dStore,
				dg: author$project$GameDefinitions$Game3$Game3Definitions$customGameCompletionFunc,
				dh: elm$core$Maybe$Just('Example Maze for Path finding'),
				di: A3(author$project$Thorns$Types$initialModel, player_, elm$core$Maybe$Nothing, imgBaseDir_),
				$7: imgBaseDir_,
				dv: elm$core$Dict$empty,
				cq: author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid,
				dw: elm$core$Dict$empty,
				dy: true,
				dz: elm$core$Maybe$Nothing,
				dA: _List_fromArray(
					['you enter theMaze ... ']),
				dD: elm$core$Maybe$Just('/maps/mazeBlackBgmap.png'),
				dG: mbfloorname,
				dH: _List_Nil,
				m: elm$core$Dict$fromList(
					_List_fromArray(
						[
							_Utils_Tuple2(otherTestCharacter8.a0, otherTestCharacter8)
						])),
				v: player_,
				dQ: _List_Nil,
				dS: 5,
				dX: elm$core$Maybe$Nothing,
				dZ: elm$core$Dict$empty,
				d_: true,
				d2: elm$core$Dict$empty,
				d7: 64,
				d9: 64,
				eb: author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.ch,
				ec: author$project$GameDefinitions$Game3$Game3Definitions$theMazeGrid.bc.cZ,
				ek: true,
				em: author$project$GameDefinitions$Game3$Game3Definitions$common_window_height,
				en: 3,
				eo: 3,
				ep: author$project$GameDefinitions$Game3$Game3Definitions$common_window_width,
				er: elm$core$Maybe$Nothing
			},
			createRandomMap,
			randomlyPositionPlayer);
	});
var author$project$GameModel$AboutToDisplayMap = {$: 10};
var author$project$GameModel$DisplayAboutToStartGame = F3(
	function (a, b, c) {
		return {$: 11, a: a, b: b, c: c};
	});
var author$project$GameModel$DisplayGameCompleted = {$: 2};
var author$project$GameModel$DisplayGameOfThorns = {$: 3};
var author$project$GameModel$DisplayGameOver = {$: 1};
var author$project$GameModel$DisplayHelpScreen = {$: 5};
var author$project$GameModel$DisplayInventory = function (a) {
	return {$: 6, a: a};
};
var author$project$GameModel$DisplayMap = {$: 12};
var author$project$GameModel$DisplayOpponentReport = {$: 4};
var author$project$GameModel$getOtherCharacterInCoordsWithJumpCapabilities = F2(
	function (coords3D, model) {
		return elm$core$List$head(
			A2(
				elm$core$List$map,
				elm$core$Tuple$first,
				A2(
					elm$core$List$filter,
					function (_n1) {
						var oc = _n1.a;
						var loc = _n1.b;
						return oc.b1;
					},
					A2(
						elm$core$List$filter,
						function (_n0) {
							var oc = _n0.a;
							var loc = _n0.b;
							return _Utils_eq(loc, coords3D);
						},
						A2(
							elm$core$List$map,
							function (oc) {
								return _Utils_Tuple2(
									oc,
									A3(author$project$Grid$Coordinate3D, oc.s.bk, oc.s.bl, oc.S));
							},
							elm$core$Dict$values(model.m))))));
	});
var author$project$GameModel$handleConverterTileInteraction = F4(
	function (x, y, newTile, model) {
		var newModel = A4(
			author$project$GameModel$setInModelGrid,
			newTile,
			A2(author$project$Grid$Coordinate, x, y),
			model.c7,
			model);
		return newModel;
	});
var author$project$GameModel$leverFunctioning = F3(
	function (leverinfo, coords, model) {
		var getModelChangerFuncs = F2(
			function (leverId, toStr) {
				return function (x) {
					if (x.$ === 1) {
						return _List_Nil;
					} else {
						var recFuncs = x.a;
						if (toStr === 'toUp') {
							var _n2 = recFuncs.cX;
							if (!_n2.$) {
								var lufuncs = _n2.a;
								return lufuncs;
							} else {
								return _List_Nil;
							}
						} else {
							var _n3 = recFuncs.cW;
							if (!_n3.$) {
								var ldfuncs = _n3.a;
								return ldfuncs;
							} else {
								return _List_Nil;
							}
						}
					}
				}(
					A2(elm$core$Dict$get, leverId, model.dw));
			});
		var _n0 = leverinfo.cD;
		switch (_n0) {
			case 0:
				return leverinfo.bz ? model : author$project$GameModel$updateModelFloorDictWithLevel(
					function (xmodel) {
						return A3(
							elm$core$List$foldl,
							F2(
								function (cfunc, modacc) {
									return A2(cfunc, coords, modacc);
								}),
							xmodel,
							A2(getModelChangerFuncs, leverinfo.cr, 'toUp'));
					}(
						_Utils_update(
							model,
							{
								cq: A3(
									author$project$Grid$set,
									coords,
									author$project$Tile$Lever(
										_Utils_update(
											leverinfo,
											{bz: true})),
									model.cq)
							})));
			case 1:
				return leverinfo.bz ? author$project$GameModel$updateModelFloorDictWithLevel(
					function (xmodel) {
						return A3(
							elm$core$List$foldl,
							F2(
								function (cfunc, modacc) {
									return A2(cfunc, coords, modacc);
								}),
							xmodel,
							A2(getModelChangerFuncs, leverinfo.cr, 'toDown'));
					}(
						_Utils_update(
							model,
							{
								cq: A3(
									author$project$Grid$set,
									coords,
									author$project$Tile$Lever(
										_Utils_update(
											leverinfo,
											{bz: false})),
									model.cq)
							}))) : author$project$GameModel$updateModelFloorDictWithLevel(
					function (xmodel) {
						return A3(
							elm$core$List$foldl,
							F2(
								function (cfunc, modacc) {
									return A2(cfunc, coords, modacc);
								}),
							xmodel,
							A2(getModelChangerFuncs, leverinfo.cr, 'toUp'));
					}(
						_Utils_update(
							model,
							{
								cq: A3(
									author$project$Grid$set,
									coords,
									author$project$Tile$Lever(
										_Utils_update(
											leverinfo,
											{bz: true})),
									model.cq)
							})));
			default:
				return leverinfo.bz ? author$project$GameModel$updateModelFloorDictWithLevel(
					function (xmodel) {
						return A3(
							elm$core$List$foldl,
							F2(
								function (cfunc, modacc) {
									return A2(cfunc, coords, modacc);
								}),
							xmodel,
							A2(getModelChangerFuncs, leverinfo.cr, 'toDown'));
					}(
						_Utils_update(
							model,
							{
								cq: A3(
									author$project$Grid$set,
									coords,
									author$project$Tile$Lever(
										_Utils_update(
											leverinfo,
											{bz: false})),
									model.cq)
							}))) : model;
		}
	});
var author$project$GameModel$location = author$project$Grid$Coordinate;
var author$project$GameModel$mbUpdateFightingCharacterInitiativeByMbFCharId = F3(
	function (intval, mbFightCharid, model) {
		if (mbFightCharid.$ === 1) {
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
								{ah: intval});
						},
						mbFightChar);
				},
				model.h);
			return _Utils_update(
				model,
				{h: updatedFightingCharacters});
		}
	});
var author$project$GameModel$mbUpdateFightingCharacterLocation = F2(
	function (loc, mbFightChar) {
		if (mbFightChar.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			var fchar = mbFightChar.a;
			return elm$core$Maybe$Just(
				_Utils_update(
					fchar,
					{s: loc, ap: true}));
		}
	});
var author$project$GameModel$placeExistingFightingCharacter = F3(
	function (fcharid, loc, dictacc) {
		var _n0 = A2(elm$core$Dict$get, fcharid, dictacc);
		if (_n0.$ === 1) {
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
var author$project$GameModel$mbUpdateOtherCharacterLocationAndFloorId = F3(
	function (loc, floorId_, mbOtherChar) {
		if (mbOtherChar.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			var ochar = mbOtherChar.a;
			return elm$core$Maybe$Just(
				_Utils_update(
					ochar,
					{S: floorId_, s: loc, ap: true}));
		}
	});
var author$project$GameModel$placeExistingOtherCharacterInLocAndFloorId = F4(
	function (ocharid, loc, floorId_, model) {
		var newCharsDict = A3(
			elm$core$Dict$update,
			ocharid,
			function (mbOtherChar) {
				return A3(author$project$GameModel$mbUpdateOtherCharacterLocationAndFloorId, loc, floorId_, mbOtherChar);
			},
			model.m);
		return _Utils_update(
			model,
			{m: newCharsDict});
	});
var author$project$GameUpdate$CleanUpAndFightingCharacterLogic = {$: 6};
var author$project$GameUpdate$NewRandomPointToPlaceFightingCharacter = F2(
	function (a, b) {
		return {$: 16, a: a, b: b};
	});
var author$project$GameUpdate$ShowMap = {$: 9};
var author$project$GameUpdate$ShowRegularGame = {$: 10};
var author$project$GameUpdate$SmallJumpLeft = function (a) {
	return {$: 5, a: a};
};
var author$project$GameUpdate$StartGameNr = function (a) {
	return {$: 1, a: a};
};
var author$project$GameUpdate$StartOpponentInteraction = function (a) {
	return {$: 7, a: a};
};
var author$project$GameUpdate$ThornsMsg = function (a) {
	return {$: 21, a: a};
};
var author$project$GameUpdate$ToggleShowInventory = {$: 11};
var author$project$GameUpdate$ToggleShowInventoryDetails = {$: 12};
var author$project$GameUpdate$TryAddToPlayerInventory = {$: 3};
var author$project$GameUpdate$TryShiftPlayerPosition = function (a) {
	return {$: 4, a: a};
};
var author$project$Beings$BeingsInTileGrid$NoFightingCharacterMoveInCurrentTurn = {$: 2};
var author$project$Beings$BeingsInTileGrid$NoOtherCharacterMoveInCurrentTurn = {$: 1};
var author$project$GameUpdate$addMessageToCharactersIfGameOfThornsGoingOn = function (model) {
	return _Utils_eq(model.c6, author$project$GameModel$DisplayGameOfThorns) ? _Utils_update(
		model,
		{
			dH: _Utils_ap(
				_List_fromArray(
					[author$project$Beings$BeingsInTileGrid$NoOtherCharacterMoveInCurrentTurn, author$project$Beings$BeingsInTileGrid$NoFightingCharacterMoveInCurrentTurn]),
				model.dH)
		}) : model;
};
var author$project$GameUpdate$checkAndAlterViewportAnchorIfNecessary = function (model) {
	var p_y_dist = 5;
	var p_x_dist = 5;
	var newYanchor = (_Utils_cmp(model.v.s.bl, model.eo) < 1) ? A2(elm$core$Basics$max, 0, model.eo - (model.em - p_y_dist)) : ((_Utils_cmp(model.v.s.bl, model.eo + (model.em - 1)) > -1) ? A2(elm$core$Basics$min, model.eo + (model.em - p_y_dist), model.eb - (model.em - p_y_dist)) : model.eo);
	var newXanchor = (_Utils_cmp(model.v.s.bk, model.en) < 1) ? A2(elm$core$Basics$max, 0, model.en - (model.ep - p_x_dist)) : ((_Utils_cmp(model.v.s.bk, model.en + (model.ep - 1)) > -1) ? A2(elm$core$Basics$min, model.en + (model.ep - p_x_dist), model.ec - (model.ep - p_x_dist)) : model.en);
	return _Utils_update(
		model,
		{en: newXanchor, eo: newYanchor});
};
var author$project$GameUpdate$checkGameCompletion = function (model) {
	return A2(model.dg, model.c7, model.v.s);
};
var author$project$Beings$Beings$APlayer = function (a) {
	return {$: 0, a: a};
};
var author$project$Beings$Beings$canMoveThroughHoles = function (movableBeing) {
	switch (movableBeing.$) {
		case 0:
			var pl = movableBeing.a;
			return pl.w;
		case 1:
			var fc = movableBeing.a;
			return fc.w;
		default:
			var oc = movableBeing.a;
			return oc.w;
	}
};
var author$project$Beings$Beings$canUseStairs = function (movableBeing) {
	switch (movableBeing.$) {
		case 0:
			var pl = movableBeing.a;
			return pl.x;
		case 1:
			var fc = movableBeing.a;
			return fc.x;
		default:
			var oc = movableBeing.a;
			return oc.x;
	}
};
var author$project$Beings$Beings$canUseTeleporters = function (movableBeing) {
	switch (movableBeing.$) {
		case 0:
			var pl = movableBeing.a;
			return pl.y;
		case 1:
			var fc = movableBeing.a;
			return fc.y;
		default:
			var oc = movableBeing.a;
			return oc.y;
	}
};
var author$project$Beings$Beings$getMovableBeingFloorId = F2(
	function (movableBeing, currentFloorId) {
		switch (movableBeing.$) {
			case 0:
				var pl = movableBeing.a;
				return currentFloorId;
			case 1:
				var fc = movableBeing.a;
				return fc.S;
			default:
				var oc = movableBeing.a;
				return oc.S;
		}
	});
var author$project$Beings$Beings$getMovableBeingLocation = function (movableBeing) {
	switch (movableBeing.$) {
		case 0:
			var pl = movableBeing.a;
			return pl.s;
		case 1:
			var fc = movableBeing.a;
			return fc.s;
		default:
			var oc = movableBeing.a;
			return oc.s;
	}
};
var author$project$GameModel$DisplayChooseTeleporterDestination = function (a) {
	return {$: 9, a: a};
};
var author$project$GameModel$applyFuncToFightingCharacter = F3(
	function (fcharid, func, model) {
		var newCharsDict = function () {
			var _n0 = A2(elm$core$Dict$get, fcharid, model.h);
			if (_n0.$ === 1) {
				return model.h;
			} else {
				var fChar = _n0.a;
				return A3(
					elm$core$Dict$insert,
					fcharid,
					func(fChar),
					model.h);
			}
		}();
		return _Utils_update(
			model,
			{h: newCharsDict});
	});
var author$project$GameModel$mbUpdateFightingCharacterLocationAndFloorId = F3(
	function (loc, floorId_, mbFightChar) {
		if (mbFightChar.$ === 1) {
			return elm$core$Maybe$Nothing;
		} else {
			var fchar = mbFightChar.a;
			return elm$core$Maybe$Just(
				_Utils_update(
					fchar,
					{S: floorId_, s: loc, ap: true}));
		}
	});
var author$project$GameModel$placeExistingFightingCharacterInLocAndFloorId = F4(
	function (fcharid, loc, floorId_, model) {
		var newfCharsDict = A3(
			elm$core$Dict$update,
			fcharid,
			function (mbFightChar) {
				return A3(author$project$GameModel$mbUpdateFightingCharacterLocationAndFloorId, loc, floorId_, mbFightChar);
			},
			model.h);
		return _Utils_update(
			model,
			{h: newfCharsDict});
	});
var author$project$Beings$Beings$Left = 2;
var author$project$Beings$Beings$Right = 3;
var author$project$Beings$Beings$Up = 0;
var author$project$Beings$BeingsInTileGrid$move = F5(
	function (_n0, grid, isWalkableFunc, shouldBeAvoidedFunc, a) {
		var x_shift = _n0.a;
		var y_shift = _n0.b;
		var location = A2(author$project$Grid$Coordinate, a.s.bk + x_shift, a.s.bl + y_shift);
		var initiative = a.ah + 100;
		var _n1 = A3(isWalkableFunc, location, a, grid) && (!A2(shouldBeAvoidedFunc, location, grid));
		if (!_n1) {
			return (x_shift && y_shift) ? A5(
				author$project$Beings$BeingsInTileGrid$move,
				_Utils_Tuple2(0, y_shift),
				grid,
				isWalkableFunc,
				shouldBeAvoidedFunc,
				A5(
					author$project$Beings$BeingsInTileGrid$move,
					_Utils_Tuple2(x_shift, 0),
					grid,
					isWalkableFunc,
					shouldBeAvoidedFunc,
					a)) : a;
		} else {
			return _Utils_update(
				a,
				{
					ab: (x_shift > 0) ? 3 : ((x_shift < 0) ? 2 : ((y_shift > 0) ? 1 : 0)),
					ah: initiative,
					s: location
				});
		}
	});
var author$project$Beings$BeingsInTileGrid$noTilesToAvoid = F2(
	function (loc, grid) {
		return false;
	});
var author$project$GameUpdate$move = F4(
	function (_n0, grid, isWalkableFunc, a) {
		var x_shift = _n0.a;
		var y_shift = _n0.b;
		var shouldBeAvoidedFunc = author$project$Beings$BeingsInTileGrid$noTilesToAvoid;
		return A5(
			author$project$Beings$BeingsInTileGrid$move,
			_Utils_Tuple2(x_shift, y_shift),
			grid,
			isWalkableFunc,
			shouldBeAvoidedFunc,
			a);
	});
var author$project$GameUpdate$discreteFightingCharacterJumpTo = F5(
	function (fcharid, model, floorId, locTuple, shiftTuple) {
		var destY = locTuple.b;
		var destX = locTuple.a;
		var _n0 = A2(elm$core$Dict$get, floorId, model.bu);
		if (!_n0.$) {
			var floorGrid = _n0.a;
			return A3(
				author$project$GameModel$applyFuncToFightingCharacter,
				fcharid,
				A3(author$project$GameUpdate$move, shiftTuple, floorGrid.cq, author$project$Beings$BeingsInTileGrid$isGridTileWalkable),
				A4(
					author$project$GameModel$placeExistingFightingCharacterInLocAndFloorId,
					fcharid,
					A2(author$project$Grid$Coordinate, locTuple.a, locTuple.b),
					floorId,
					model));
		} else {
			return model;
		}
	});
var author$project$GameUpdate$discreteOtherCharacterJumpTo = F5(
	function (ocharid, model, floorId, locTuple, shiftTuple) {
		var destY = locTuple.b;
		var destX = locTuple.a;
		var _n0 = A2(elm$core$Dict$get, floorId, model.bu);
		if (!_n0.$) {
			var floorGrid = _n0.a;
			return A3(
				author$project$GameModel$applyFuncToOtherCharacter,
				ocharid,
				A3(author$project$GameUpdate$move, shiftTuple, floorGrid.cq, author$project$Beings$BeingsInTileGrid$isGridTileWalkable),
				A4(
					author$project$GameModel$placeExistingOtherCharacterInLocAndFloorId,
					ocharid,
					A2(author$project$Grid$Coordinate, destX, destY),
					floorId,
					model));
		} else {
			return model;
		}
	});
var author$project$GameModel$DisplayTeleportToSameFloor = function (a) {
	return {$: 8, a: a};
};
var author$project$GameModel$DisplayChangingFloor = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var author$project$Grid$neighborhoodCalc = F2(
	function (d, _n0) {
		var x = _n0.bk;
		var y = _n0.bl;
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
var author$project$GameModel$determineNearAndClearlyVisible = function (model) {
	return A2(author$project$Grid$neighborhoodCalc, model.dS, model.v.s);
};
var elm$core$Elm$JsArray$map = _JsArray_map;
var elm$core$Array$map = F2(
	function (func, _n0) {
		var len = _n0.a;
		var startShift = _n0.b;
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = function (node) {
			if (!node.$) {
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
			grid.aH);
		return A2(author$project$Grid$Grid, grid_, grid.bc);
	});
var author$project$Grid$updateCellsOnCoords = F3(
	function (f, lcoords, grid) {
		var setAfterGetAndFunc = F2(
			function (coords, gacc) {
				var _n0 = A2(author$project$Grid$get, coords, gacc);
				if (!_n0.$) {
					var acell = _n0.a;
					return A3(
						author$project$Grid$set,
						coords,
						A2(f, coords, acell),
						gacc);
				} else {
					return gacc;
				}
			});
		var newGrid = A3(
			elm$core$List$foldl,
			F2(
				function (coords, gacc) {
					return A2(setAfterGetAndFunc, coords, gacc);
				}),
			grid,
			lcoords);
		return newGrid;
	});
var author$project$Tile$ExploredVisible = 1;
var author$project$Tile$getTileVisibility = function (tile) {
	getTileVisibility:
	while (true) {
		switch (tile.$) {
			case 0:
				var floorinfo = tile.a;
				return floorinfo.eq;
			case 11:
				var treeinfo = tile.a;
				return treeinfo.eq;
			case 1:
				var sinfo = tile.a;
				return sinfo.eq;
			case 2:
				var hinfo = tile.a;
				return hinfo.eq;
			case 3:
				var wInfo = tile.a;
				return wInfo.eq;
			case 4:
				var wOverInfo = tile.a;
				return wOverInfo.eq;
			case 6:
				var doorinfo = tile.a;
				return doorinfo.eq;
			case 7:
				var leverInfo = tile.a;
				return leverInfo.eq;
			case 8:
				var flagInfo = tile.a;
				return flagInfo.eq;
			case 9:
				var columnInfo = tile.a;
				return columnInfo.eq;
			case 10:
				var waterInfo = tile.a;
				return waterInfo.eq;
			case 12:
				var it = tile.a;
				var ct = tile.b;
				var $temp$tile = it;
				tile = $temp$tile;
				continue getTileVisibility;
			case 5:
				var binfo = tile.a;
				return binfo.eq;
			default:
				return 2;
		}
	}
};
var author$project$Tile$Column = function (a) {
	return {$: 9, a: a};
};
var author$project$Tile$Flag = function (a) {
	return {$: 8, a: a};
};
var author$project$Tile$WallOver = function (a) {
	return {$: 4, a: a};
};
var author$project$Tile$setTileVisibility = F2(
	function (visibility_, tile) {
		switch (tile.$) {
			case 0:
				var floorinfo = tile.a;
				return author$project$Tile$Floor(
					_Utils_update(
						floorinfo,
						{eq: visibility_}));
			case 11:
				var treeInfo = tile.a;
				return author$project$Tile$Tree(
					_Utils_update(
						treeInfo,
						{eq: visibility_}));
			case 1:
				var sinfo = tile.a;
				return author$project$Tile$Stairs(
					_Utils_update(
						sinfo,
						{eq: visibility_}));
			case 2:
				var hinfo = tile.a;
				return author$project$Tile$Hole(
					_Utils_update(
						hinfo,
						{eq: visibility_}));
			case 3:
				var wInfo = tile.a;
				return author$project$Tile$Wall(
					_Utils_update(
						wInfo,
						{eq: visibility_}));
			case 4:
				var wOverInfo = tile.a;
				return author$project$Tile$WallOver(
					_Utils_update(
						wOverInfo,
						{eq: visibility_}));
			case 6:
				var doorinfo = tile.a;
				return author$project$Tile$Door(
					_Utils_update(
						doorinfo,
						{eq: visibility_}));
			case 7:
				var leverInfo = tile.a;
				return author$project$Tile$Lever(
					_Utils_update(
						leverInfo,
						{eq: visibility_}));
			case 8:
				var flagInfo = tile.a;
				return author$project$Tile$Flag(
					_Utils_update(
						flagInfo,
						{eq: visibility_}));
			case 9:
				var columnInfo = tile.a;
				return author$project$Tile$Column(
					_Utils_update(
						columnInfo,
						{eq: visibility_}));
			case 10:
				var waterInfo = tile.a;
				return author$project$Tile$Water(
					_Utils_update(
						waterInfo,
						{eq: visibility_}));
			case 12:
				var it = tile.a;
				var ct = tile.b;
				var newInitialTile = A2(author$project$Tile$setTileVisibility, visibility_, it);
				return A2(author$project$Tile$ConverterTile, newInitialTile, ct);
			case 5:
				var binfo = tile.a;
				return author$project$Tile$Bookcase(
					_Utils_update(
						binfo,
						{eq: visibility_}));
			default:
				return author$project$Tile$NoTileYet;
		}
	});
var author$project$GameUpdate$reveal = function (model) {
	var visibleToExploredFunc = function (thegrid) {
		return A2(
			author$project$Grid$map,
			function (t) {
				return (!author$project$Tile$getTileVisibility(t)) ? A2(author$project$Tile$setTileVisibility, 1, t) : t;
			},
			thegrid);
	};
	var setVisibleFunc = F2(
		function (coords, tile) {
			return (author$project$Tile$getTileVisibility(tile) !== 3) ? A2(author$project$Tile$setTileVisibility, 0, tile) : tile;
		});
	var ltileCoordsToSetToVisible = author$project$GameModel$determineNearAndClearlyVisible(model);
	var newGrid = A3(
		author$project$Grid$updateCellsOnCoords,
		setVisibleFunc,
		ltileCoordsToSetToVisible,
		visibleToExploredFunc(model.cq));
	return _Utils_update(
		model,
		{cq: newGrid});
};
var author$project$GameUpdate$changeFloorTo = F4(
	function (model, floorId, locTuple, shiftTuple) {
		var newModel = function () {
			if (_Utils_eq(model.c7, floorId)) {
				return _Utils_update(
					model,
					{
						c6: author$project$GameModel$DisplayTeleportToSameFloor(model.c7)
					});
			} else {
				var newCurrentFloor = A2(elm$core$Dict$get, floorId, model.bu);
				var currentFloorInfo = author$project$GameModel$getCurrentFloorInfoToStore(model);
				var newStore = A3(
					elm$core$Dict$update,
					model.c7,
					function (_n1) {
						return elm$core$Maybe$Just(currentFloorInfo);
					},
					model.bu);
				if (!newCurrentFloor.$) {
					var cFloor = newCurrentFloor.a;
					return _Utils_update(
						model,
						{
							c6: A2(author$project$GameModel$DisplayChangingFloor, model.c7, floorId),
							c7: floorId,
							bu: newStore,
							cq: cFloor.cq,
							dD: cFloor.dD,
							dG: cFloor.dG,
							eb: cFloor.eb,
							ec: cFloor.ec,
							em: cFloor.em,
							ep: cFloor.ep
						});
				} else {
					return _Utils_update(
						model,
						{bu: newStore});
				}
			}
		}();
		var delta_y = shiftTuple.b;
		var delta_x = shiftTuple.a;
		var player_ = A4(
			author$project$GameUpdate$move,
			_Utils_Tuple2(delta_x, delta_y),
			newModel.cq,
			author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
			function (playerRec) {
				return _Utils_update(
					playerRec,
					{
						s: A2(author$project$Grid$Coordinate, locTuple.a, locTuple.b)
					});
			}(newModel.v));
		return author$project$GameUpdate$reveal(
			_Utils_update(
				newModel,
				{
					v: player_,
					en: A2(
						elm$core$Basics$max,
						0,
						(locTuple.a + delta_x) - elm$core$Basics$round(newModel.ep / 2.0)),
					eo: A2(
						elm$core$Basics$max,
						0,
						(locTuple.b + delta_y) - elm$core$Basics$round(newModel.em / 2))
				}));
	});
var author$project$GameUpdate$discretePlayerJumpTo = F4(
	function (model, floorId, locTuple, shiftTuple) {
		if (!_Utils_eq(model.c7, floorId)) {
			return A4(author$project$GameUpdate$changeFloorTo, model, floorId, locTuple, shiftTuple);
		} else {
			var newModel = _Utils_update(
				model,
				{
					c6: author$project$GameModel$DisplayTeleportToSameFloor(model.c7)
				});
			var delta_y = shiftTuple.b;
			var delta_x = shiftTuple.a;
			var player_ = A4(
				author$project$GameUpdate$move,
				_Utils_Tuple2(delta_x, delta_y),
				newModel.cq,
				author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
				function (playerRec) {
					return _Utils_update(
						playerRec,
						{
							s: A2(author$project$Grid$Coordinate, locTuple.a, locTuple.b)
						});
				}(newModel.v));
			return author$project$GameUpdate$reveal(
				_Utils_update(
					newModel,
					{
						v: player_,
						en: A2(
							elm$core$Basics$max,
							0,
							(locTuple.a + delta_x) - elm$core$Basics$round(newModel.ep / 2.0)),
						eo: A2(
							elm$core$Basics$max,
							0,
							(locTuple.b + delta_y) - elm$core$Basics$round(newModel.em / 2))
					}));
		}
	});
var author$project$GameModel$getFromLandingTargetDict = F2(
	function (target_id_, model) {
		return A2(elm$core$Dict$get, target_id_, model.dv);
	});
var author$project$GameUpdate$getDestinationLandingTargetLocation = F2(
	function (tid, model) {
		var _n0 = A2(author$project$GameModel$getFromLandingTargetDict, tid, model);
		if (!_n0.$) {
			var ltRec = _n0.a;
			return elm$core$Maybe$Just(
				_Utils_Tuple3(ltRec.S, ltRec.Q.bk, ltRec.Q.bl));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$GameModel$getFromStairsDict = F2(
	function (stairsId, model) {
		return A2(elm$core$Dict$get, stairsId, model.dZ);
	});
var author$project$GameUpdate$getDestinationStairsLocalizedInfo = F2(
	function (stairsId, model) {
		return A2(author$project$GameModel$getFromStairsDict, stairsId, model);
	});
var author$project$GameModel$getFromTeleporterDict = F2(
	function (teleporterId, model) {
		return A2(elm$core$Dict$get, teleporterId, model.d2);
	});
var author$project$GameUpdate$requirementsToTeleportToAreFulfilled = F3(
	function (telObject, movableBeing, model) {
		var _n0 = telObject.dU;
		switch (_n0.$) {
			case 0:
				return true;
			case 1:
				var litems = _n0.a;
				switch (movableBeing.$) {
					case 0:
						var player = movableBeing.a;
						return A3(
							elm$core$List$foldl,
							F2(
								function (it, bvalAcc) {
									return A2(author$project$Item$isItemInInventory, it, model.v.ai) && bvalAcc;
								}),
							true,
							litems);
					case 1:
						var fc = movableBeing.a;
						return false;
					default:
						var oc = movableBeing.a;
						return false;
				}
			default:
				return false;
		}
	});
var author$project$GameUpdate$getDestinationTeleporter = F3(
	function (destinationId, movableBeing, model) {
		var _n0 = A2(author$project$GameModel$getFromTeleporterDict, destinationId, model);
		if (!_n0.$) {
			var telRec = _n0.a;
			return A3(author$project$GameUpdate$requirementsToTeleportToAreFulfilled, telRec.d4, movableBeing, model) ? elm$core$Maybe$Just(telRec) : elm$core$Maybe$Nothing;
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$GameUpdate$getDestinationTeleporters = F3(
	function (destinationIds, movableBeing, model) {
		return A2(
			elm$core$List$filterMap,
			function (dId) {
				return A3(author$project$GameUpdate$getDestinationTeleporter, dId, movableBeing, model);
			},
			destinationIds);
	});
var author$project$GameUpdate$requirementsToTeleportFromAreFulfilled = F3(
	function (telObject, movableBeing, model) {
		var _n0 = telObject.dT;
		switch (_n0.$) {
			case 0:
				return true;
			case 1:
				var litems = _n0.a;
				switch (movableBeing.$) {
					case 0:
						var player = movableBeing.a;
						return A3(
							elm$core$List$foldl,
							F2(
								function (it, bvalAcc) {
									return A2(author$project$Item$isItemInInventory, it, player.ai) && bvalAcc;
								}),
							true,
							litems);
					case 1:
						var fc = movableBeing.a;
						return false;
					default:
						var oc = movableBeing.a;
						return false;
				}
			default:
				return false;
		}
	});
var author$project$GameUpdate$checkIfStandingOnStairsHoleOrTeleporterAndMoveToNewFloor = F2(
	function (movableBeing, model) {
		var mbTile = _Utils_eq(
			A2(author$project$Beings$Beings$getMovableBeingFloorId, movableBeing, model.c7),
			model.c7) ? A2(
			author$project$Grid$get,
			author$project$Beings$Beings$getMovableBeingLocation(movableBeing),
			model.cq) : A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			A2(
				elm$core$Maybe$map,
				author$project$Grid$get(
					author$project$Beings$Beings$getMovableBeingLocation(movableBeing)),
				A2(
					elm$core$Maybe$map,
					function ($) {
						return $.cq;
					},
					A2(
						elm$core$Dict$get,
						A2(author$project$Beings$Beings$getMovableBeingFloorId, movableBeing, model.c7),
						model.bu))));
		var changeLocationFunc = function () {
			switch (movableBeing.$) {
				case 0:
					var pl = movableBeing.a;
					return author$project$GameUpdate$discretePlayerJumpTo;
				case 1:
					var fc = movableBeing.a;
					return author$project$GameUpdate$discreteFightingCharacterJumpTo(fc.a0);
				default:
					var oc = movableBeing.a;
					return author$project$GameUpdate$discreteOtherCharacterJumpTo(oc.a0);
			}
		}();
		var determineNewModelIfTeleporter = function (teleporter) {
			if ((!author$project$Beings$Beings$canUseTeleporters(movableBeing)) || (!A3(author$project$GameUpdate$requirementsToTeleportFromAreFulfilled, teleporter, movableBeing, model))) {
				return model;
			} else {
				var lDestinationTeleporters = A3(author$project$GameUpdate$getDestinationTeleporters, teleporter.d1, movableBeing, model);
				if (lDestinationTeleporters.b) {
					var hdTeleporter = lDestinationTeleporters.a;
					var rst = lDestinationTeleporters.b;
					if (_Utils_eq(rst, _List_Nil)) {
						return A4(
							changeLocationFunc,
							model,
							hdTeleporter.S,
							_Utils_Tuple2(hdTeleporter.Q.bk, hdTeleporter.Q.bl),
							hdTeleporter.d4.bL);
					} else {
						switch (movableBeing.$) {
							case 0:
								var pl = movableBeing.a;
								return _Utils_update(
									model,
									{
										c6: author$project$GameModel$DisplayChooseTeleporterDestination(lDestinationTeleporters)
									});
							case 1:
								var fc = movableBeing.a;
								return A4(
									changeLocationFunc,
									model,
									hdTeleporter.S,
									_Utils_Tuple2(hdTeleporter.Q.bk, hdTeleporter.Q.bl),
									hdTeleporter.d4.bL);
							default:
								var oc = movableBeing.a;
								return A4(
									changeLocationFunc,
									model,
									hdTeleporter.S,
									_Utils_Tuple2(hdTeleporter.Q.bk, hdTeleporter.Q.bl),
									hdTeleporter.d4.bL);
						}
					}
				} else {
					return model;
				}
			}
		};
		_n0$4:
		while (true) {
			if (!mbTile.$) {
				switch (mbTile.a.$) {
					case 1:
						var sinfo = mbTile.a.a;
						if (author$project$Beings$Beings$canUseStairs(movableBeing)) {
							var mbDestinationStairsRec = A2(author$project$GameUpdate$getDestinationStairsLocalizedInfo, sinfo.bS, model);
							if (!mbDestinationStairsRec.$) {
								var toStairsRec = mbDestinationStairsRec.a;
								return A4(
									changeLocationFunc,
									model,
									toStairsRec.S,
									_Utils_Tuple2(toStairsRec.Q.bk, toStairsRec.Q.bl),
									toStairsRec.cR.bL);
							} else {
								return model;
							}
						} else {
							return model;
						}
					case 2:
						var hinfo = mbTile.a.a;
						if (author$project$Beings$Beings$canMoveThroughHoles(movableBeing)) {
							var mbDestinationFloorAndCoordsTuple = A2(author$project$GameUpdate$getDestinationLandingTargetLocation, hinfo.d0, model);
							if (!mbDestinationFloorAndCoordsTuple.$) {
								var _n3 = mbDestinationFloorAndCoordsTuple.a;
								var floorId_ = _n3.a;
								var newX = _n3.b;
								var newY = _n3.c;
								return A4(
									changeLocationFunc,
									model,
									floorId_,
									_Utils_Tuple2(newX, newY),
									_Utils_Tuple2(0, 0));
							} else {
								return model;
							}
						} else {
							return model;
						}
					case 3:
						var wallinfo = mbTile.a.a;
						var _n4 = wallinfo.cu;
						if (_n4.$ === 1) {
							return model;
						} else {
							var teleporter_ = _n4.a;
							return determineNewModelIfTeleporter(teleporter_);
						}
					case 0:
						var finfo = mbTile.a.a;
						var _n5 = finfo.cu;
						if (_n5.$ === 1) {
							return model;
						} else {
							var teleporter_ = _n5.a;
							return determineNewModelIfTeleporter(teleporter_);
						}
					default:
						break _n0$4;
				}
			} else {
				break _n0$4;
			}
		}
		return model;
	});
var author$project$GameUpdate$checkIfPlayerStandingOnStairsHoleOrTeleporterAndMoveToNewFloor = function (model) {
	return A2(
		author$project$GameUpdate$checkIfStandingOnStairsHoleOrTeleporterAndMoveToNewFloor,
		author$project$Beings$Beings$APlayer(model.v),
		model);
};
var author$project$GameUpdate$log = F2(
	function (s, model) {
		return _Utils_update(
			model,
			{
				dA: A2(elm$core$List$cons, s, model.dA)
			});
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
var author$project$GameUpdate$cleanup = function (model) {
	var low_health_and_doesnt_disappear = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (_Utils_cmp(fightingCharacter.ae, fightingCharacter.al) < 1) && (!fightingCharacter.aX);
			}),
		model.h);
	var low_health_and_disappears = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (_Utils_cmp(fightingCharacter.ae, fightingCharacter.al) < 1) && fightingCharacter.aX;
			}),
		model.h);
	var msg = (!elm$core$Dict$size(low_health_and_disappears)) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(
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
						return fightingCharacter.ao + ' died. ';
					}),
				low_health_and_disappears)));
	var good_health_no_enlightenment = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (_Utils_cmp(fightingCharacter.ae, fightingCharacter.al) > 0) && (_Utils_cmp(fightingCharacter.af, fightingCharacter.ag) < 0);
			}),
		model.h);
	var good_health_enlightened_disappears = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (_Utils_cmp(fightingCharacter.ae, fightingCharacter.al) > 0) && ((_Utils_cmp(fightingCharacter.af, fightingCharacter.ag) > -1) && fightingCharacter.aY);
			}),
		model.h);
	var dict_keys_to_remove = _Utils_ap(
		elm$core$Dict$keys(low_health_and_disappears),
		elm$core$Dict$keys(good_health_enlightened_disappears));
	var newModel = _Utils_update(
		model,
		{
			h: A2(
				elm$core$Dict$filter,
				F2(
					function (k, v) {
						return !A2(elm$core$List$member, k, dict_keys_to_remove);
					}),
				model.h)
		});
	var alive_enlightened_doesnt_disappear = A2(
		elm$core$Dict$filter,
		F2(
			function (fcharId, fightingCharacter) {
				return (_Utils_cmp(fightingCharacter.ae, fightingCharacter.al) > 0) && ((_Utils_cmp(fightingCharacter.af, fightingCharacter.ag) > -1) && (!fightingCharacter.aY));
			}),
		model.h);
	if (msg.$ === 1) {
		return newModel;
	} else {
		var m = msg.a;
		return A2(author$project$GameUpdate$log, m, newModel);
	}
};
var author$project$GameUpdate$clearMessagesToCharacters = function (model) {
	return _Utils_update(
		model,
		{dH: _List_Nil});
};
var author$project$GameUpdate$NewRandomIntsAddToPool = function (a) {
	return {$: 19, a: a};
};
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm$random$Random$Generate = elm$core$Basics$identity;
var elm$random$Random$Seed = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
var elm$random$Random$Generator = elm$core$Basics$identity;
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
var elm$core$Bitwise$xor = _Bitwise_xor;
var elm$random$Random$peel = function (_n0) {
	var state = _n0.a;
	var word = (state ^ (state >>> ((state >>> 28) + 4))) * 277803737;
	return ((word >>> 22) ^ word) >>> 0;
};
var elm$random$Random$int = F2(
	function (a, b) {
		return function (seed0) {
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
		};
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
var author$project$GameUpdate$cmdFillRandomIntsPool = function (model) {
	var nrToAdd = 500 - elm$core$List$length(model.dQ);
	return (nrToAdd > 0) ? A2(
		elm$random$Random$generate,
		author$project$GameUpdate$NewRandomIntsAddToPool,
		A2(
			elm$random$Random$list,
			nrToAdd,
			A2(elm$random$Random$int, 1, 100))) : elm$core$Platform$Cmd$none;
};
var author$project$GameUpdate$NewRandomIntsAddToPoolAndGenerateRandomMap = function (a) {
	return {$: 20, a: a};
};
var author$project$GameUpdate$cmdFillRandomIntsPoolAndGenerateRandomMap = function (model) {
	var nrToAdd = 500 - elm$core$List$length(model.dQ);
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
		return {$: 18, a: a, b: b, c: c};
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
		return {$: 15, a: a, b: b};
	});
var author$project$GameUpdate$getRandInt = F2(
	function (minX, maxX) {
		return A2(elm$random$Random$int, minX, maxX);
	});
var author$project$GameUpdate$cmdGetRandomPositionedFightingCharacter = F3(
	function (actualFightChar, fcharId, maxX) {
		return actualFightChar.ap ? elm$core$Platform$Cmd$none : A2(
			elm$random$Random$generate,
			author$project$GameUpdate$NewGridCoordinatesIndexToPlaceFightingCharacter(fcharId),
			A2(author$project$GameUpdate$getRandInt, 0, maxX - 1));
	});
var author$project$GameUpdate$NewRandomPointToPlacePlayer = function (a) {
	return {$: 14, a: a};
};
var elm$random$Random$map2 = F3(
	function (func, _n0, _n1) {
		var genA = _n0;
		var genB = _n1;
		return function (seed0) {
			var _n2 = genA(seed0);
			var a = _n2.a;
			var seed1 = _n2.b;
			var _n3 = genB(seed1);
			var b = _n3.a;
			var seed2 = _n3.b;
			return _Utils_Tuple2(
				A2(func, a, b),
				seed2);
		};
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
		return player.ap ? elm$core$Platform$Cmd$none : A2(
			elm$random$Random$generate,
			author$project$GameUpdate$NewRandomPointToPlacePlayer,
			A4(author$project$GameUpdate$getRandIntPair, minX, maxX, minY, maxY));
	});
var author$project$Beings$Beings$AFightingCharacter = function (a) {
	return {$: 1, a: a};
};
var author$project$Beings$FightingCharacterInTileGrid$OpponentsAndPlayerRec = F7(
	function (fightingCharacters, player, grid, floorDict, characterOccupiedLocations, lFightingCharactersForGameOfThorns, lrandInts) {
		return {P: characterOccupiedLocations, h: fightingCharacters, bu: floorDict, aH: grid, ak: lFightingCharactersForGameOfThorns, t: lrandInts, v: player};
	});
var author$project$Beings$Beings$MoveToDoor = F5(
	function (a, b, c, d, e) {
		return {$: 2, a: a, b: b, c: c, d: d, e: e};
	});
var author$project$Tile$isDoor = function (tile) {
	if (tile.$ === 6) {
		return true;
	} else {
		return false;
	}
};
var author$project$TileGrid$checkIfDoorAndCharacterAreOnTheSameRoom = F5(
	function (grid, characterCoords, characterFloorId, doorCoords, doorFloorId) {
		if (!_Utils_eq(characterFloorId, doorFloorId)) {
			return false;
		} else {
			var yplus1Tile = A2(
				author$project$Grid$get,
				A2(author$project$Grid$Coordinate, doorCoords.bk, doorCoords.bl + 1),
				grid);
			var yminus1Tile = A2(
				author$project$Grid$get,
				A2(author$project$Grid$Coordinate, doorCoords.bk, doorCoords.bl - 1),
				grid);
			var xplus1Tile = A2(
				author$project$Grid$get,
				A2(author$project$Grid$Coordinate, doorCoords.bk + 1, doorCoords.bl),
				grid);
			var xminus1Tile = A2(
				author$project$Grid$get,
				A2(author$project$Grid$Coordinate, doorCoords.bk - 1, doorCoords.bl),
				grid);
			var verticalPathFromDoor = (_Utils_cmp(doorCoords.bl, characterCoords.bl + 1) > 0) ? A2(
				elm$core$List$map,
				function (y) {
					return A2(author$project$Grid$Coordinate, doorCoords.bk, y);
				},
				A2(elm$core$List$range, characterCoords.bl, doorCoords.bl - 1)) : ((_Utils_cmp(doorCoords.bl, characterCoords.bl) < 0) ? A2(
				elm$core$List$map,
				function (y) {
					return A2(author$project$Grid$Coordinate, doorCoords.bk, y);
				},
				A2(elm$core$List$range, doorCoords.bl + 1, characterCoords.bl)) : _List_Nil);
			var verticalPathFromCharacter = (_Utils_cmp(doorCoords.bl, characterCoords.bl + 1) > 0) ? A2(
				elm$core$List$map,
				function (y) {
					return A2(author$project$Grid$Coordinate, characterCoords.bk, y);
				},
				A2(elm$core$List$range, characterCoords.bl + 1, doorCoords.bl)) : ((_Utils_cmp(doorCoords.bl, characterCoords.bl) < 0) ? A2(
				elm$core$List$map,
				function (y) {
					return A2(author$project$Grid$Coordinate, characterCoords.bk, y);
				},
				A2(elm$core$List$range, doorCoords.bl, characterCoords.bl - 1)) : _List_Nil);
			var tileAtCoords = function (coords) {
				return A2(author$project$Grid$get, coords, grid);
			};
			var isWall = function (mbTile) {
				return A2(
					elm$core$Maybe$withDefault,
					false,
					A2(elm$core$Maybe$map, author$project$Tile$isWall, mbTile));
			};
			var isNoTileYet = function (mbTile) {
				return A2(
					elm$core$Maybe$withDefault,
					false,
					A2(elm$core$Maybe$map, author$project$Tile$isNoTileYet, mbTile));
			};
			var isDoor = function (mbTile) {
				return A2(
					elm$core$Maybe$withDefault,
					false,
					A2(elm$core$Maybe$map, author$project$Tile$isDoor, mbTile));
			};
			var isNotWallDoorOrNoTile = function (mbtile) {
				return (!isWall(mbtile)) && ((!isDoor(mbtile)) && (!isNoTileYet(mbtile)));
			};
			var horizontalPathFromDoor = (_Utils_cmp(doorCoords.bk, characterCoords.bk + 1) > 0) ? A2(
				elm$core$List$map,
				function (x) {
					return A2(author$project$Grid$Coordinate, x, doorCoords.bl);
				},
				A2(elm$core$List$range, characterCoords.bk, doorCoords.bk - 1)) : ((_Utils_cmp(doorCoords.bk, characterCoords.bk) < 0) ? A2(
				elm$core$List$map,
				function (x) {
					return A2(author$project$Grid$Coordinate, x, doorCoords.bl);
				},
				A2(elm$core$List$range, doorCoords.bk + 1, characterCoords.bk)) : _List_Nil);
			var lCoordsToCheck1 = _Utils_ap(horizontalPathFromDoor, verticalPathFromCharacter);
			var horizontalPathFromCharacter = (_Utils_cmp(doorCoords.bk, characterCoords.bk + 1) > 0) ? A2(
				elm$core$List$map,
				function (x) {
					return A2(author$project$Grid$Coordinate, x, characterCoords.bl);
				},
				A2(elm$core$List$range, characterCoords.bk + 1, doorCoords.bk)) : ((_Utils_cmp(doorCoords.bk, characterCoords.bk) < 0) ? A2(
				elm$core$List$map,
				function (x) {
					return A2(author$project$Grid$Coordinate, x, characterCoords.bl);
				},
				A2(elm$core$List$range, doorCoords.bk, characterCoords.bk - 1)) : _List_Nil);
			var lcoordsToCheck2 = _Utils_ap(horizontalPathFromCharacter, verticalPathFromDoor);
			var coordTile = A2(author$project$Grid$get, doorCoords, grid);
			return _Utils_eq(characterCoords, doorCoords) || (A3(
				elm$core$List$foldl,
				F2(
					function (coords, bacc) {
						return isNotWallDoorOrNoTile(
							tileAtCoords(coords)) && bacc;
					}),
				true,
				lCoordsToCheck1) || A3(
				elm$core$List$foldl,
				F2(
					function (coords, bacc) {
						return isNotWallDoorOrNoTile(
							tileAtCoords(coords)) && bacc;
					}),
				true,
				lcoordsToCheck2));
		}
	});
var elm$core$Basics$sqrt = _Basics_sqrt;
var author$project$Beings$FightingCharacterInTileGrid$processMessagesToCharacter = F3(
	function (messagesToCharacters, grid, fchar) {
		var closeEnoughGivenRadius = F5(
			function (radius_, charLoc, charFloorId, destCoords, destFloorId) {
				var theDistanceIfOnTheSameFloor = elm$core$Basics$sqrt(((destCoords.bk - charLoc.bk) * (destCoords.bk - charLoc.bk)) + ((destCoords.bl - charLoc.bl) * (destCoords.bl - charLoc.bl)));
				return _Utils_eq(charFloorId, destFloorId) ? (_Utils_cmp(theDistanceIfOnTheSameFloor, radius_) < 1) : false;
			});
		var canHearMessage = closeEnoughGivenRadius;
		var processOneMessage = F2(
			function (themsg, thechar) {
				switch (themsg.$) {
					case 1:
						return thechar;
					case 2:
						return thechar;
					default:
						var radius = themsg.a;
						var doorFloorId = themsg.b;
						var doorCoords = themsg.c;
						var _n1 = elm$core$List$head(thechar.V);
						if (!_n1.$) {
							switch (_n1.a.$) {
								case 0:
									var _n2 = _n1.a;
									return thechar;
								case 1:
									var _n3 = _n1.a;
									var prob_good_health = _n3.a;
									var prob_low_health = _n3.b;
									var prob_after_enl = _n3.c;
									return thechar;
								case 2:
									var _n4 = _n1.a;
									var coords = _n4.a;
									var floorId_ = _n4.b;
									var prob = _n4.c;
									var oscilateAllowed = _n4.d;
									var bnextMovStrat = _n4.e;
									return thechar;
								case 3:
									var _n5 = _n1.a;
									var xcoord = _n5.a;
									var ycoord = _n5.b;
									var floorId = _n5.c;
									var ltriedDoorCoords = _n5.d;
									var prob = _n5.e;
									var oscilateAllowed = _n5.f;
									var bnextMovStrat = _n5.g;
									return thechar;
								case 4:
									var _n6 = _n1.a;
									if (A5(canHearMessage, radius, thechar.s, thechar.S, doorCoords, doorFloorId)) {
										var updatedMovingStrategy = A5(author$project$TileGrid$checkIfDoorAndCharacterAreOnTheSameRoom, grid, thechar.s, thechar.S, doorCoords, doorFloorId) ? _Utils_ap(
											_List_fromArray(
												[
													A5(
													author$project$Beings$Beings$MoveToDoor,
													A2(author$project$Grid$Coordinate, doorCoords.bk, doorCoords.bl),
													fchar.S,
													1,
													true,
													true)
												]),
											A2(elm$core$List$drop, 1, thechar.V)) : thechar.V;
										return _Utils_update(
											thechar,
											{V: updatedMovingStrategy});
									} else {
										return thechar;
									}
								case 5:
									var _n7 = _n1.a;
									return thechar;
								case 6:
									var _n8 = _n1.a;
									if (A5(canHearMessage, radius, thechar.s, thechar.S, doorCoords, doorFloorId)) {
										var updatedMovingStrategy = A5(author$project$TileGrid$checkIfDoorAndCharacterAreOnTheSameRoom, grid, thechar.s, thechar.S, doorCoords, doorFloorId) ? _Utils_ap(
											_List_fromArray(
												[
													A5(
													author$project$Beings$Beings$MoveToDoor,
													A2(author$project$Grid$Coordinate, doorCoords.bk, doorCoords.bl),
													fchar.S,
													1,
													true,
													true)
												]),
											A2(elm$core$List$drop, 1, thechar.V)) : thechar.V;
										return _Utils_update(
											thechar,
											{V: updatedMovingStrategy});
									} else {
										return thechar;
									}
								default:
									var _n9 = _n1.a;
									return thechar;
							}
						} else {
							return thechar;
						}
				}
			});
		return A3(
			elm$core$List$foldr,
			F2(
				function (amsg, achar) {
					return A2(processOneMessage, amsg, achar);
				}),
			fchar,
			messagesToCharacters);
	});
var author$project$Beings$FightingCharacterInTileGrid$updateFightingCharactersRecWithFightingCharacter = F2(
	function (opponents_and_player_rec, fchar) {
		var newFightingCharacterDict = A3(elm$core$Dict$insert, fchar.a0, fchar, opponents_and_player_rec.h);
		return _Utils_update(
			opponents_and_player_rec,
			{h: newFightingCharacterDict});
	});
var author$project$Beings$FightingCharacterInTileGrid$ai_helper_processMessages = F4(
	function (currentFloorId, fcharId, messagesToCharacters, opponents_and_player_rec) {
		var mbfCharacter = A2(elm$core$Dict$get, fcharId, opponents_and_player_rec.h);
		var opponents_and_player_rec2 = function () {
			if (mbfCharacter.$ === 1) {
				return opponents_and_player_rec;
			} else {
				var fCharacter = mbfCharacter.a;
				return (fCharacter.ae > 0) ? A2(
					author$project$Beings$FightingCharacterInTileGrid$updateFightingCharactersRecWithFightingCharacter,
					opponents_and_player_rec,
					A3(author$project$Beings$FightingCharacterInTileGrid$processMessagesToCharacter, messagesToCharacters, opponents_and_player_rec.aH, fCharacter)) : opponents_and_player_rec;
			}
		}();
		return opponents_and_player_rec2;
	});
var author$project$Beings$FightingCharacterInTileGrid$attack = F3(
	function (dude1, dude2, lprandInts) {
		var guard = ((dude1.aW - dude2.bi) > 100) ? (dude2.ba - (dude1.aW - (dude2.bi % 100))) : dude2.ba;
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
		var hit = (_Utils_cmp(roll1, dude1.aW - dude2.bi) > 0) ? false : true;
		var block = (hit && (_Utils_cmp(roll2, guard) < 0)) ? true : false;
		var dmg = (hit && (!block)) ? dude1.a9 : ((hit && block) ? A2(elm$core$Basics$max, 0, dude1.a9 - dude2.aU) : ((!hit) ? 0 : 0));
		var result = dude2.ae - dmg;
		var msg = (!hit) ? (dude1.ao + ' miss') : (dude1.ao + (' hit ' + (dude2.ao + (' for ' + (elm$core$String$fromInt(dmg) + ' dmg')))));
		return {
			b9: _Utils_update(
				dude1,
				{ah: dude1.ah + 100}),
			ca: _Utils_update(
				dude2,
				{ae: result}),
			cI: newprandInts2,
			aw: msg
		};
	});
var author$project$Beings$BeingsInTileGrid$ifLocationOccupiedGoBackToInitialPosition = F3(
	function (initialChar, occupiedLocations, charAfterMove) {
		return A2(elm$core$List$member, charAfterMove.s, occupiedLocations) ? initialChar : charAfterMove;
	});
var author$project$Beings$BeingsInTileGrid$setCharacterNextMovingStrategy = function (character) {
	var updatedMovingStrategy = A2(elm$core$List$drop, 1, character.V);
	return _Utils_update(
		character,
		{V: updatedMovingStrategy});
};
var author$project$Beings$BeingsInTileGrid$characterMoveTowardsGivenCoordinates = function (character) {
	return function (destinationCoords) {
		return function (shouldBeAvoidedFunc) {
			return function (player) {
				return function (currentFloorId) {
					return function (characterOccupiedLocations) {
						return function (probability) {
							return function (oscilateAllowed) {
								return function (bNextMovingStrategyIfReachDest) {
									return function (grid) {
										return function (floorDict) {
											return function (lRandomInts) {
												var y_delta_toDestination = destinationCoords.bl - character.s.bl;
												var x_delta_toDestination = destinationCoords.bk - character.s.bk;
												var player_location = player.s;
												var mbRelevantGrid = _Utils_eq(character.S, currentFloorId) ? elm$core$Maybe$Just(grid) : A2(
													elm$core$Maybe$map,
													function ($) {
														return $.cq;
													},
													A2(elm$core$Dict$get, character.S, floorDict));
												var intProb = ((probability <= 1) && (probability >= 0)) ? elm$core$Basics$round(probability * 100.0) : 1;
												var checkIfReachedDestinationAndMbSetNextMovingStrategy = function (achar) {
													return (_Utils_eq(achar.s.bk, destinationCoords.bk) && (_Utils_eq(achar.s.bl, destinationCoords.bl) && bNextMovingStrategyIfReachDest)) ? author$project$Beings$BeingsInTileGrid$setCharacterNextMovingStrategy(achar) : achar;
												};
												var charOccupiedLocationsExceptCurrentChar = A2(
													elm$core$List$filter,
													function (coords) {
														return !_Utils_eq(coords, character.s);
													},
													characterOccupiedLocations);
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
												var xscaled = (x_delta_toDestination > 0) ? ((_Utils_cmp(xrand, intProb) < 1) ? 1 : (-1)) : ((x_delta_toDestination < 0) ? ((_Utils_cmp(xrand, intProb) < 1) ? (-1) : 1) : (((!x_delta_toDestination) && oscilateAllowed) ? ((xrand <= 33) ? (-1) : (((xrand > 33) && (xrand <= 66)) ? 0 : 1)) : 0));
												var yscaled = (y_delta_toDestination > 0) ? ((_Utils_cmp(yrand, intProb) < 1) ? 1 : (-1)) : ((y_delta_toDestination < 0) ? ((_Utils_cmp(yrand, intProb) < 1) ? (-1) : 1) : (((!y_delta_toDestination) && oscilateAllowed) ? ((yrand <= 33) ? (-1) : (((yrand > 33) && (yrand <= 66)) ? 0 : 1)) : 0));
												var updatedCharacter = function () {
													if (!mbRelevantGrid.$) {
														var thegrid = mbRelevantGrid.a;
														return checkIfReachedDestinationAndMbSetNextMovingStrategy(
															A3(
																author$project$Beings$BeingsInTileGrid$ifLocationOccupiedGoBackToInitialPosition,
																character,
																charOccupiedLocationsExceptCurrentChar,
																A5(
																	author$project$Beings$BeingsInTileGrid$move,
																	_Utils_Tuple2(xscaled, yscaled),
																	thegrid,
																	author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
																	shouldBeAvoidedFunc,
																	character)));
													} else {
														return character;
													}
												}();
												return _Utils_Tuple2(updatedCharacter, updatedRandInts);
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
var author$project$Beings$BeingsInTileGrid$characterMove_RandomMove = F7(
	function (character, player, currentFloorId, grid, floorDict, characterOccupiedLocations, lRandomInts) {
		var shouldBeAvoidedFunc = author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable;
		var mbRelevantGrid = _Utils_eq(character.S, currentFloorId) ? elm$core$Maybe$Just(grid) : A2(
			elm$core$Maybe$map,
			function ($) {
				return $.cq;
			},
			A2(elm$core$Dict$get, character.S, floorDict));
		var charOccupiedLocationsExceptCurrentChar = A2(
			elm$core$List$filter,
			function (coords) {
				return !_Utils_eq(coords, character.s);
			},
			characterOccupiedLocations);
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
			if (mbRelevantGrid.$ === 1) {
				return character;
			} else {
				var thegrid = mbRelevantGrid.a;
				return A3(
					author$project$Beings$BeingsInTileGrid$ifLocationOccupiedGoBackToInitialPosition,
					character,
					charOccupiedLocationsExceptCurrentChar,
					A5(
						author$project$Beings$BeingsInTileGrid$move,
						_Utils_Tuple2(xscaled, yscaled),
						thegrid,
						author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
						shouldBeAvoidedFunc,
						character));
			}
		}();
		return _Utils_Tuple2(updatedCharacter, updatedRandInts);
	});
var author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer = F8(
	function (character, player, currentFloorId, characterOccupiedLocations, probability, grid, floorDict, lRandomInts) {
		var shouldBeAvoidedFunc = author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable;
		var player_location = player.s;
		return author$project$Beings$BeingsInTileGrid$characterMoveTowardsGivenCoordinates(character)(player_location)(shouldBeAvoidedFunc)(player)(currentFloorId)(characterOccupiedLocations)(probability)(true)(false)(grid)(floorDict)(lRandomInts);
	});
var author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove = F7(
	function (fightingCharacter, player, currentFloorId, grid, floorDict, characterOccupiedLocations, lRandomInts) {
		var charOccupiedLocations = A2(
			elm$core$List$map,
			function (coord3d) {
				return A2(author$project$Grid$Coordinate, coord3d.bk, coord3d.bl);
			},
			A2(
				elm$core$List$filter,
				function (coord3d) {
					return _Utils_eq(coord3d.S, fightingCharacter.S);
				},
				characterOccupiedLocations));
		var _n0 = elm$core$List$head(fightingCharacter.V);
		if (!_n0.$) {
			switch (_n0.a.$) {
				case 0:
					var _n1 = _n0.a;
					return _Utils_eq(fightingCharacter.S, currentFloorId) ? A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, fightingCharacter, player, currentFloorId, charOccupiedLocations, 0.85, grid, floorDict, lRandomInts) : A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, fightingCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 1:
					var _n2 = _n0.a;
					var prob_good_health = _n2.a;
					var prob_low_health = _n2.b;
					var prob_after_enl = _n2.c;
					return _Utils_eq(fightingCharacter.S, currentFloorId) ? ((_Utils_cmp(fightingCharacter.af, fightingCharacter.ag) > -1) ? A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, fightingCharacter, player, currentFloorId, charOccupiedLocations, prob_after_enl, grid, floorDict, lRandomInts) : ((_Utils_cmp(fightingCharacter.ae, fightingCharacter.al) > 0) ? A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, fightingCharacter, player, currentFloorId, charOccupiedLocations, prob_good_health, grid, floorDict, lRandomInts) : A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, fightingCharacter, player, currentFloorId, charOccupiedLocations, prob_low_health, grid, floorDict, lRandomInts))) : A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, fightingCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 2:
					var _n3 = _n0.a;
					var doorcoords = _n3.a;
					var floorId_ = _n3.b;
					var prob = _n3.c;
					var oscilateAllowed = _n3.d;
					var bnextMovStrat = _n3.e;
					return author$project$Beings$BeingsInTileGrid$characterMoveTowardsGivenCoordinates(fightingCharacter)(doorcoords)(author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable)(player)(currentFloorId)(charOccupiedLocations)(prob)(oscilateAllowed)(bnextMovStrat)(grid)(floorDict)(lRandomInts);
				case 3:
					var _n4 = _n0.a;
					var xcoord = _n4.a;
					var ycoord = _n4.b;
					var floorId = _n4.c;
					var ltriedDoorCoords = _n4.d;
					var prob = _n4.e;
					var oscilateAllowed = _n4.f;
					var bnextMovStrat = _n4.g;
					return _Utils_eq(fightingCharacter.S, floorId) ? author$project$Beings$BeingsInTileGrid$characterMoveTowardsGivenCoordinates(fightingCharacter)(
						A2(author$project$Grid$Coordinate, xcoord, ycoord))(author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable)(player)(currentFloorId)(charOccupiedLocations)(prob)(oscilateAllowed)(bnextMovStrat)(grid)(floorDict)(lRandomInts) : _Utils_Tuple2(fightingCharacter, lRandomInts);
				case 4:
					var _n5 = _n0.a;
					return A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, fightingCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 5:
					var _n6 = _n0.a;
					return A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, fightingCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 6:
					var _n7 = _n0.a;
					return _Utils_Tuple2(fightingCharacter, lRandomInts);
				default:
					var _n8 = _n0.a;
					return _Utils_Tuple2(fightingCharacter, lRandomInts);
			}
		} else {
			return _Utils_Tuple2(fightingCharacter, lRandomInts);
		}
	});
var author$project$Beings$FightingCharacterInTileGrid$attackIfClose_OtherwiseMove = F7(
	function (fightingCharacter, player, currentFloorId, grid, floorDict, characterOccupiedLocations, pseudoRandomIntsPool) {
		if ((!_Utils_eq(fightingCharacter.S, currentFloorId)) && (fightingCharacter.ae > 0)) {
			var _n0 = A7(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove, fightingCharacter, player, currentFloorId, grid, floorDict, characterOccupiedLocations, pseudoRandomIntsPool);
			var updatedFightingCharacter = _n0.a;
			var updatedRandInts = _n0.b;
			return {R: updatedFightingCharacter, t: updatedRandInts, an: elm$core$Maybe$Nothing, v: player, aw: ''};
		} else {
			var _n1 = A2(
				elm$core$List$filter,
				function (location) {
					return _Utils_eq(location, player.s);
				},
				A2(author$project$Grid$neighborhoodCalc, 1, fightingCharacter.s));
			if (_n1.b) {
				var location = _n1.a;
				var locs = _n1.b;
				if (fightingCharacter.b_) {
					return {
						R: fightingCharacter,
						t: pseudoRandomIntsPool,
						an: elm$core$Maybe$Just(fightingCharacter),
						v: player,
						aw: ''
					};
				} else {
					var attackOutput = A3(author$project$Beings$FightingCharacterInTileGrid$attack, fightingCharacter, player, pseudoRandomIntsPool);
					return {R: attackOutput.b9, t: attackOutput.cI, an: elm$core$Maybe$Nothing, v: attackOutput.ca, aw: attackOutput.aw};
				}
			} else {
				var _n2 = A7(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove, fightingCharacter, player, currentFloorId, grid, floorDict, characterOccupiedLocations, pseudoRandomIntsPool);
				var updatedFightingCharacter = _n2.a;
				var updatedRandInts = _n2.b;
				return {R: updatedFightingCharacter, t: updatedRandInts, an: elm$core$Maybe$Nothing, v: player, aw: ''};
			}
		}
	});
var author$project$Beings$FightingCharacterInTileGrid$characterIsAlreadySetForGameOfThorns = F2(
	function (fcharId, opponents_and_player_rec) {
		return A2(
			elm$core$List$member,
			fcharId,
			A2(
				elm$core$List$map,
				function ($) {
					return $.a0;
				},
				opponents_and_player_rec.ak));
	});
var author$project$Beings$FightingCharacterInTileGrid$fightingCharacterExceedsNrMovesInCurrentTurn = F2(
	function (fcharId, opponentAndPlayerRec) {
		var mbFightingCharacter = A2(elm$core$Dict$get, fcharId, opponentAndPlayerRec.h);
		if (mbFightingCharacter.$ === 1) {
			return true;
		} else {
			var fightingCharacter = mbFightingCharacter.a;
			return _Utils_cmp(fightingCharacter.a6, fightingCharacter.a4) > -1;
		}
	});
var author$project$Tile$isTeleporter = function (tile) {
	switch (tile.$) {
		case 3:
			var wallinfo = tile.a;
			var _n1 = wallinfo.cu;
			if (!_n1.$) {
				var teleporter = _n1.a;
				return true;
			} else {
				return false;
			}
		case 0:
			var finfo = tile.a;
			var _n2 = finfo.cu;
			if (!_n2.$) {
				var teleporter = _n2.a;
				return true;
			} else {
				return false;
			}
		default:
			return false;
	}
};
var author$project$Tile$isStairsHoleOrTeleporter = function (tile) {
	return author$project$Tile$isStairs(tile) || (author$project$Tile$isHole(tile) || author$project$Tile$isTeleporter(tile));
};
var author$project$Beings$FightingCharacterInTileGrid$fightingCharacterStandingOnStairsHoleOrTeleporter = F2(
	function (fcharId, opponents_and_player_rec) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(
				elm$core$Maybe$map,
				author$project$Tile$isStairsHoleOrTeleporter,
				A2(
					elm$core$Maybe$withDefault,
					elm$core$Maybe$Nothing,
					A2(
						elm$core$Maybe$map,
						function (loc) {
							return A2(author$project$Grid$get, loc, opponents_and_player_rec.aH);
						},
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.s;
							},
							A2(elm$core$Dict$get, fcharId, opponents_and_player_rec.h))))));
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
							{a6: fchar.a6 + 1});
					},
					mbFightCharacter);
			},
			opponentAndPlayerRec.h);
		return _Utils_update(
			opponentAndPlayerRec,
			{h: updatedFightingCharacters});
	});
var author$project$Beings$FightingCharacterInTileGrid$updateCharacterOccupiedLocations = F5(
	function (currentLocation, currentFloorId, previousLocation, previousFloorId, lcharLocations) {
		return A2(
			elm$core$List$append,
			_List_fromArray(
				[
					A3(author$project$Grid$Coordinate3D, currentLocation.bk, currentLocation.bl, currentFloorId)
				]),
			A2(
				elm$core$List$filter,
				function (coord3D) {
					return !_Utils_eq(
						coord3D,
						A3(author$project$Grid$Coordinate3D, previousLocation.bk, previousLocation.bl, previousFloorId));
				},
				lcharLocations));
	});
var author$project$Beings$FightingCharacterInTileGrid$ai_helper_to_move = F4(
	function (currentFloorId, fcharId, messagesToCharacters, opponents_and_player_rec) {
		ai_helper_to_move:
		while (true) {
			if (A2(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterExceedsNrMovesInCurrentTurn, fcharId, opponents_and_player_rec) || (A2(elm$core$List$member, author$project$Beings$BeingsInTileGrid$NoFightingCharacterMoveInCurrentTurn, messagesToCharacters) || (A2(author$project$Beings$FightingCharacterInTileGrid$characterIsAlreadySetForGameOfThorns, fcharId, opponents_and_player_rec) || A2(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterStandingOnStairsHoleOrTeleporter, fcharId, opponents_and_player_rec)))) {
				return opponents_and_player_rec;
			} else {
				var mbFightCharacter = A2(elm$core$Dict$get, fcharId, opponents_and_player_rec.h);
				var _n0 = function () {
					if (mbFightCharacter.$ === 1) {
						return _Utils_Tuple2(opponents_and_player_rec, elm$core$Maybe$Nothing);
					} else {
						var fightingCharacter = mbFightCharacter.a;
						if (_Utils_eq(fightingCharacter.S, currentFloorId) && ((_Utils_cmp(fightingCharacter.af, fightingCharacter.ag) < 0) && ((opponents_and_player_rec.v.ae > 0) && (!A2(elm$core$List$member, author$project$Beings$BeingsInTileGrid$NoFightingCharacterMoveInCurrentTurn, messagesToCharacters))))) {
							var outRec = A7(author$project$Beings$FightingCharacterInTileGrid$attackIfClose_OtherwiseMove, fightingCharacter, opponents_and_player_rec.v, currentFloorId, opponents_and_player_rec.aH, opponents_and_player_rec.bu, opponents_and_player_rec.P, opponents_and_player_rec.t);
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
											P: A5(author$project$Beings$FightingCharacterInTileGrid$updateCharacterOccupiedLocations, outRec.R.s, outRec.R.S, fightingCharacter.s, fightingCharacter.S, opponents_and_player_rec.P),
											h: A3(
												elm$core$Dict$update,
												fcharId,
												function (_n2) {
													return elm$core$Maybe$Just(outRec.R);
												},
												opponents_and_player_rec.h),
											ak: _Utils_ap(
												opponents_and_player_rec.ak,
												A2(
													elm$core$Maybe$withDefault,
													_List_Nil,
													A2(
														elm$core$Maybe$map,
														function (x) {
															return _List_fromArray(
																[x]);
														},
														outRec.an))),
											t: outRec.t,
											v: outRec.v
										}),
									outRec.an));
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
												P: A5(author$project$Beings$FightingCharacterInTileGrid$updateCharacterOccupiedLocations, fchar.s, fchar.S, fightingCharacter.s, fightingCharacter.S, opponents_and_player_rec.P),
												h: A3(
													elm$core$Dict$update,
													fcharId,
													function (_n5) {
														return elm$core$Maybe$Just(fchar);
													},
													opponents_and_player_rec.h),
												t: lrand
											});
									}(
										A7(author$project$Beings$FightingCharacterInTileGrid$fightingCharacterMove, fightingCharacter, opponents_and_player_rec.v, currentFloorId, opponents_and_player_rec.aH, opponents_and_player_rec.bu, opponents_and_player_rec.P, opponents_and_player_rec.t))),
								elm$core$Maybe$Nothing);
						}
					}
				}();
				var opponents_and_player_rec2 = _n0.a;
				var mbFightCharacterForGameOfThorns = _n0.b;
				if (!mbFightCharacterForGameOfThorns.$) {
					var fchar = mbFightCharacterForGameOfThorns.a;
					return _Utils_update(
						opponents_and_player_rec2,
						{
							ak: _Utils_ap(
								opponents_and_player_rec.ak,
								_List_fromArray(
									[fchar]))
						});
				} else {
					var $temp$currentFloorId = currentFloorId,
						$temp$fcharId = fcharId,
						$temp$messagesToCharacters = messagesToCharacters,
						$temp$opponents_and_player_rec = opponents_and_player_rec2;
					currentFloorId = $temp$currentFloorId;
					fcharId = $temp$fcharId;
					messagesToCharacters = $temp$messagesToCharacters;
					opponents_and_player_rec = $temp$opponents_and_player_rec;
					continue ai_helper_to_move;
				}
			}
		}
	});
var author$project$Beings$FightingCharacterInTileGrid$ai_helper_func = F4(
	function (currentFloorId, fcharId, messagesToCharacters, opponents_and_player_rec) {
		return A4(
			author$project$Beings$FightingCharacterInTileGrid$ai_helper_to_move,
			currentFloorId,
			fcharId,
			messagesToCharacters,
			A4(author$project$Beings$FightingCharacterInTileGrid$ai_helper_processMessages, currentFloorId, fcharId, messagesToCharacters, opponents_and_player_rec));
	});
var author$project$Beings$FightingCharacterInTileGrid$fightingCharacter_AI = F3(
	function (currentFloorId, messagesToCharacters, opponentAndPlayerRec) {
		var fcIdList = elm$core$Dict$keys(
			A2(
				elm$core$Dict$filter,
				F2(
					function (fcharId, fightingCharacter) {
						return (fightingCharacter.ae > 0) && (_Utils_cmp(fightingCharacter.a6, fightingCharacter.a4) < 0);
					}),
				opponentAndPlayerRec.h));
		return A3(
			elm$core$List$foldl,
			F2(
				function (fcId, modelacc) {
					return A4(author$project$Beings$FightingCharacterInTileGrid$ai_helper_func, currentFloorId, fcId, messagesToCharacters, modelacc);
				}),
			opponentAndPlayerRec,
			fcIdList);
	});
var author$project$GameUpdate$fightingCharacter_AI = function (model) {
	var occupiedLocations = author$project$GameModel$getAllCharactersAndPlayerLocations(model);
	var fightingCharactersPlayerRec = A3(
		author$project$Beings$FightingCharacterInTileGrid$fightingCharacter_AI,
		model.c7,
		model.dH,
		A7(author$project$Beings$FightingCharacterInTileGrid$OpponentsAndPlayerRec, model.h, model.v, model.cq, model.bu, occupiedLocations, _List_Nil, model.dQ));
	var intermediateModel = _Utils_update(
		model,
		{h: fightingCharactersPlayerRec.h, bu: fightingCharactersPlayerRec.bu, cq: fightingCharactersPlayerRec.aH, v: fightingCharactersPlayerRec.v, dQ: fightingCharactersPlayerRec.t});
	var lfightingCharactersForGoT = fightingCharactersPlayerRec.ak;
	var newModel = A3(
		elm$core$List$foldl,
		F2(
			function (fc, accmodel) {
				return A2(
					author$project$GameUpdate$checkIfStandingOnStairsHoleOrTeleporterAndMoveToNewFloor,
					author$project$Beings$Beings$AFightingCharacter(fc),
					accmodel);
			}),
		intermediateModel,
		A2(
			elm$core$List$filter,
			function (fc) {
				return !A2(elm$core$List$member, fc, lfightingCharactersForGoT);
			},
			elm$core$Dict$values(intermediateModel.h)));
	return _Utils_Tuple2(newModel, lfightingCharactersForGoT);
};
var author$project$GameUpdate$getWallPercentage = function (gridAsList) {
	var getCountTuple = F2(
		function (elem, _n2) {
			var acc1 = _n2.a;
			var acc2 = _n2.b;
			switch (elem.$) {
				case 3:
					return _Utils_Tuple2(acc1 + 1, acc2);
				case 0:
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
var author$project$Beings$BeingsInTileGrid$DoorHasBeenOpen = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var author$project$GameUpdate$openDoorIfPlayerStandingOnDoorAndClosed = function (model) {
	var _n0 = function () {
		var _n1 = A2(author$project$Grid$get, model.v.s, model.cq);
		if ((!_n1.$) && (_n1.a.$ === 6)) {
			var doorinfo = _n1.a.a;
			if (!doorinfo.cl) {
				var newDoorInfo = _Utils_update(
					doorinfo,
					{cl: true});
				return _Utils_Tuple2(
					A3(
						author$project$Grid$set,
						model.v.s,
						author$project$Tile$Door(newDoorInfo),
						model.cq),
					_Utils_ap(
						_List_fromArray(
							[
								A3(author$project$Beings$BeingsInTileGrid$DoorHasBeenOpen, 40, model.c7, model.v.s)
							]),
						model.dH));
			} else {
				return _Utils_Tuple2(model.cq, model.dH);
			}
		} else {
			return _Utils_Tuple2(model.cq, model.dH);
		}
	}();
	var newGrid = _n0.a;
	var newMessages = _n0.b;
	return _Utils_update(
		model,
		{cq: newGrid, dH: newMessages});
};
var author$project$Beings$Beings$AnOtherCharacter = function (a) {
	return {$: 2, a: a};
};
var author$project$Beings$OtherCharacterInTileGrid$OthersAndPlayerRec = F6(
	function (otherCharacters, player, grid, floorDict, characterOccupiedLocations, lrandInts) {
		return {P: characterOccupiedLocations, bu: floorDict, aH: grid, t: lrandInts, m: otherCharacters, v: player};
	});
var author$project$Beings$OtherCharacterInTileGrid$processMessagesToCharacter = F3(
	function (messagesToCharacters, grid, ochar) {
		var closeEnoughGivenRadius = F5(
			function (radius_, charLoc, charFloorId, destCoords, destFloorId) {
				var theDistanceIfOnTheSameFloor = elm$core$Basics$sqrt(((destCoords.bk - charLoc.bk) * (destCoords.bk - charLoc.bk)) + ((destCoords.bl - charLoc.bl) * (destCoords.bl - charLoc.bl)));
				return _Utils_eq(charFloorId, destFloorId) ? (_Utils_cmp(theDistanceIfOnTheSameFloor, radius_) < 1) : false;
			});
		var canHearMessage = closeEnoughGivenRadius;
		var processOneMessage = F2(
			function (themsg, thechar) {
				switch (themsg.$) {
					case 1:
						return thechar;
					case 2:
						return thechar;
					default:
						var radius = themsg.a;
						var doorFloorId = themsg.b;
						var doorCoords = themsg.c;
						var _n1 = elm$core$List$head(thechar.V);
						if (!_n1.$) {
							switch (_n1.a.$) {
								case 0:
									var _n2 = _n1.a;
									return thechar;
								case 1:
									var _n3 = _n1.a;
									var prob_good_health = _n3.a;
									var prob_low_health = _n3.b;
									var prob_after_enl = _n3.c;
									return thechar;
								case 2:
									var _n4 = _n1.a;
									var coords_ = _n4.a;
									var floorId_ = _n4.b;
									var prob = _n4.c;
									var oscilateAllowed = _n4.d;
									var bnextMovStrat = _n4.e;
									return thechar;
								case 3:
									var _n5 = _n1.a;
									var xcoord = _n5.a;
									var ycoord = _n5.b;
									var floorId = _n5.c;
									var ltriedDoorCoords = _n5.d;
									var prob = _n5.e;
									var oscilateAllowed = _n5.f;
									var bnextMovStrat = _n5.g;
									return thechar;
								case 4:
									var _n6 = _n1.a;
									if (A5(canHearMessage, radius, thechar.s, thechar.S, doorCoords, doorFloorId)) {
										var updatedMovingStrategies = A5(author$project$TileGrid$checkIfDoorAndCharacterAreOnTheSameRoom, grid, thechar.s, thechar.S, doorCoords, doorFloorId) ? _Utils_ap(
											_List_fromArray(
												[
													A5(
													author$project$Beings$Beings$MoveToDoor,
													A2(author$project$Grid$Coordinate, doorCoords.bk, doorCoords.bl),
													ochar.S,
													1,
													true,
													true)
												]),
											A2(elm$core$List$drop, 1, thechar.V)) : thechar.V;
										return _Utils_update(
											thechar,
											{V: updatedMovingStrategies});
									} else {
										return thechar;
									}
								case 5:
									var _n7 = _n1.a;
									return thechar;
								case 6:
									var _n8 = _n1.a;
									if (A5(canHearMessage, radius, thechar.s, thechar.S, doorCoords, doorFloorId)) {
										var updatedMovingStrategies = A5(author$project$TileGrid$checkIfDoorAndCharacterAreOnTheSameRoom, grid, thechar.s, thechar.S, doorCoords, doorFloorId) ? _Utils_ap(
											_List_fromArray(
												[
													A5(
													author$project$Beings$Beings$MoveToDoor,
													A2(author$project$Grid$Coordinate, doorCoords.bk, doorCoords.bl),
													ochar.S,
													1,
													true,
													true)
												]),
											A2(elm$core$List$drop, 1, thechar.V)) : thechar.V;
										return _Utils_update(
											thechar,
											{V: updatedMovingStrategies});
									} else {
										return thechar;
									}
								default:
									var _n9 = _n1.a;
									return thechar;
							}
						} else {
							return thechar;
						}
				}
			});
		return A3(
			elm$core$List$foldr,
			F2(
				function (amsg, achar) {
					return A2(processOneMessage, amsg, achar);
				}),
			ochar,
			messagesToCharacters);
	});
var author$project$Beings$OtherCharacterInTileGrid$updateOtherCharactersRecWithOtherCharacter = F2(
	function (othersAndPlayerRec, ochar) {
		var newOtherCharacterDict = A3(
			elm$core$Dict$update,
			ochar.a0,
			function (mbOtherCharacter) {
				return A2(
					elm$core$Maybe$map,
					function (oldchar) {
						return ochar;
					},
					mbOtherCharacter);
			},
			othersAndPlayerRec.m);
		return _Utils_update(
			othersAndPlayerRec,
			{m: newOtherCharacterDict});
	});
var author$project$Beings$OtherCharacterInTileGrid$ai_helper_processMessages = F4(
	function (currentFloorId, ocharId, messagesToCharacters, others_and_player_rec) {
		var mbOtherCharacter = A2(elm$core$Dict$get, ocharId, others_and_player_rec.m);
		var others_and_player_rec2 = function () {
			if (mbOtherCharacter.$ === 1) {
				return others_and_player_rec;
			} else {
				var otherCharacter = mbOtherCharacter.a;
				return (otherCharacter.ae > 0) ? A2(
					author$project$Beings$OtherCharacterInTileGrid$updateOtherCharactersRecWithOtherCharacter,
					others_and_player_rec,
					A3(author$project$Beings$OtherCharacterInTileGrid$processMessagesToCharacter, messagesToCharacters, others_and_player_rec.aH, otherCharacter)) : others_and_player_rec;
			}
		}();
		return others_and_player_rec2;
	});
var author$project$Beings$BeingsInTileGrid$addToPastLocations = F4(
	function (location_, floorId_, mbmovStrategy, locChar) {
		var afterAddLoc = _Utils_update(
			locChar,
			{
				a8: A2(
					elm$core$List$append,
					locChar.a8,
					_List_fromArray(
						[
							{S: floorId_, s: location_, dJ: mbmovStrategy}
						]))
			});
		return (_Utils_cmp(
			elm$core$List$length(afterAddLoc.a8),
			locChar.a5) > 0) ? function (pl) {
			return _Utils_update(
				afterAddLoc,
				{a8: pl});
		}(
			A2(
				elm$core$List$drop,
				elm$core$List$length(afterAddLoc.a8) - locChar.a5,
				afterAddLoc.a8)) : afterAddLoc;
	});
var author$project$Beings$BeingsInTileGrid$addCurrentLocationToPastLocations = function (locChar) {
	return A4(
		author$project$Beings$BeingsInTileGrid$addToPastLocations,
		locChar.s,
		locChar.S,
		elm$core$List$head(locChar.V),
		locChar);
};
var author$project$Beings$OtherCharacterInTileGrid$increseNrOfOtherCharacterMovesInCurrentTurn = function (ochar) {
	return _Utils_update(
		ochar,
		{a6: ochar.a6 + 1});
};
var author$project$Beings$OtherCharacterInTileGrid$otherCharacterExceedsNrMovesInCurrentTurn = F2(
	function (ocharId, othersAndPlayerRec) {
		var mbOtherCharacter = A2(elm$core$Dict$get, ocharId, othersAndPlayerRec.m);
		if (mbOtherCharacter.$ === 1) {
			return true;
		} else {
			var otherCharacter = mbOtherCharacter.a;
			return _Utils_cmp(otherCharacter.a6, otherCharacter.a4) > -1;
		}
	});
var author$project$Beings$BeingsInTileGrid$addAsFirstMovingStrategy = F2(
	function (movStrategy, character) {
		var updatedMovingStrategies = _Utils_ap(
			_List_fromArray(
				[movStrategy]),
			character.V);
		return _Utils_update(
			character,
			{V: updatedMovingStrategies});
	});
var author$project$TileGrid$distanceBetweenCoords = F2(
	function (destLoc, iniLoc) {
		return elm$core$Basics$sqrt(((destLoc.bk - iniLoc.bk) * (destLoc.bk - iniLoc.bk)) + ((destLoc.bl - iniLoc.bl) * (destLoc.bl - iniLoc.bl)));
	});
var author$project$Beings$BeingsInTileGrid$distanceToLocation = F4(
	function (destLoc, destFloorId, iniLoc, iniFloorId) {
		return _Utils_eq(destFloorId, iniFloorId) ? elm$core$Maybe$Just(
			A2(author$project$TileGrid$distanceBetweenCoords, iniLoc, destLoc)) : elm$core$Maybe$Nothing;
	});
var author$project$Beings$BeingsInTileGrid$coordsToRecIfCanCalcDistance = F4(
	function (inicoords, inifloorId, mbDestCoords, destFloorId) {
		if (!mbDestCoords.$) {
			var destCoords = mbDestCoords.a;
			var _n1 = A4(author$project$Beings$BeingsInTileGrid$distanceToLocation, inicoords, inifloorId, destCoords, destFloorId);
			if (!_n1.$) {
				var adist = _n1.a;
				return elm$core$Maybe$Just(
					{Q: inicoords, bs: adist});
			} else {
				return elm$core$Maybe$Nothing;
			}
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var author$project$Beings$BeingsInTileGrid$chooseOpenDoor = F4(
	function (ltriedDoorCoords, mbNextCoords, currentFloorId, lDoorCoords) {
		return function (rec) {
			if (!rec.$) {
				var coords = rec.a.Q;
				var dist = rec.a.bs;
				return elm$core$Maybe$Just(coords);
			} else {
				return elm$core$Maybe$Nothing;
			}
		}(
			elm$core$List$head(
				A2(
					elm$core$List$sortBy,
					function ($) {
						return $.bs;
					},
					A2(
						elm$core$List$filterMap,
						function (doorcoords) {
							return A4(author$project$Beings$BeingsInTileGrid$coordsToRecIfCanCalcDistance, doorcoords, currentFloorId, mbNextCoords, currentFloorId);
						},
						lDoorCoords))));
	});
var author$project$Beings$BeingsInTileGrid$filterOpenDoorCoordinates = F2(
	function (grid, lcoords) {
		var isOpenDoor = function (coord) {
			var _n0 = A2(author$project$Grid$get, coord, grid);
			if ((!_n0.$) && (_n0.a.$ === 6)) {
				var doorinfo = _n0.a.a;
				return doorinfo.cl;
			} else {
				return false;
			}
		};
		return A2(
			elm$core$List$filter,
			function (coords) {
				return isOpenDoor(coords);
			},
			lcoords);
	});
var author$project$Beings$BeingsInTileGrid$determineOpenDoors = F4(
	function (neighborhoodRange, loc, characterfloorId, grid) {
		return A2(
			elm$core$List$filter,
			function (dcoords) {
				return A5(author$project$TileGrid$checkIfDoorAndCharacterAreOnTheSameRoom, grid, loc, characterfloorId, dcoords, characterfloorId);
			},
			A2(
				author$project$Beings$BeingsInTileGrid$filterOpenDoorCoordinates,
				grid,
				A2(author$project$Grid$neighborhoodCalc, neighborhoodRange, loc)));
	});
var author$project$Beings$BeingsInTileGrid$getLastLocations = F2(
	function (nrLocs, locChar) {
		var totalNrLocations = elm$core$List$length(locChar.a8);
		return (_Utils_cmp(nrLocs, totalNrLocations) > -1) ? locChar.a8 : A2(elm$core$List$drop, totalNrLocations - nrLocs, locChar.a8);
	});
var author$project$Beings$BeingsInTileGrid$distancesToLocationInLastMovesIfSameMovingStrategy = F4(
	function (destLoc, destFloorId, nrLocs, locChar) {
		var lastMovingStrategy = elm$core$List$head(locChar.V);
		var lastLocations = A2(author$project$Beings$BeingsInTileGrid$getLastLocations, nrLocs, locChar);
		return A2(
			elm$core$List$map,
			function (_n1) {
				var d = _n1.a;
				var ms = _n1.b;
				return d;
			},
			A2(
				elm$core$List$filter,
				function (_n0) {
					var d = _n0.a;
					var ms = _n0.b;
					return _Utils_eq(ms, lastMovingStrategy);
				},
				A2(
					elm$core$List$map,
					function (locRec) {
						return _Utils_Tuple2(
							A4(author$project$Beings$BeingsInTileGrid$distanceToLocation, destLoc, destFloorId, locRec.s, locRec.S),
							locRec.dJ);
					},
					lastLocations)));
	});
var author$project$Beings$BeingsInTileGrid$distanceToLocationImprovedInLastMovesIfSameMovingStrategy = F4(
	function (destLoc, destFloorId, nrLocs, locChar) {
		var theDistances = A4(author$project$Beings$BeingsInTileGrid$distancesToLocationInLastMovesIfSameMovingStrategy, destLoc, destFloorId, nrLocs, locChar);
		var oldestDistance = A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			elm$core$List$head(theDistances));
		var currentDistance = A2(
			elm$core$Maybe$withDefault,
			elm$core$Maybe$Nothing,
			elm$core$List$head(
				A2(
					elm$core$List$drop,
					elm$core$List$length(theDistances) - 1,
					theDistances)));
		var improved = function () {
			var _n0 = _Utils_Tuple2(oldestDistance, currentDistance);
			if ((!_n0.a.$) && (!_n0.b.$)) {
				var oDist = _n0.a.a;
				var cDist = _n0.b.a;
				return _Utils_cmp(cDist, oDist) < 0;
			} else {
				return false;
			}
		}();
		return ((_Utils_cmp(
			elm$core$List$length(theDistances),
			nrLocs) > -1) && improved) || (_Utils_cmp(
			elm$core$List$length(theDistances),
			nrLocs) < 0);
	});
var author$project$Beings$OtherCharacterInTileGrid$otherCharacterMove = F7(
	function (player, currentFloorId, grid, floorDict, characterOccupiedLocations, lRandomInts, otherCharacter) {
		var charOccupiedLocations = A2(
			elm$core$List$map,
			function (coord3d) {
				return A2(author$project$Grid$Coordinate, coord3d.bk, coord3d.bl);
			},
			A2(
				elm$core$List$filter,
				function (coord3d) {
					return _Utils_eq(coord3d.S, otherCharacter.S);
				},
				characterOccupiedLocations));
		var _n0 = elm$core$List$head(otherCharacter.V);
		if (!_n0.$) {
			switch (_n0.a.$) {
				case 0:
					var _n1 = _n0.a;
					return _Utils_eq(otherCharacter.S, currentFloorId) ? A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, otherCharacter, player, currentFloorId, charOccupiedLocations, 0.85, grid, floorDict, lRandomInts) : A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, otherCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 1:
					var _n2 = _n0.a;
					var prob_good_health = _n2.a;
					var prob_low_health = _n2.b;
					var prob_after_enl = _n2.c;
					return _Utils_eq(otherCharacter.S, currentFloorId) ? ((_Utils_cmp(otherCharacter.af, otherCharacter.ag) > -1) ? A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, otherCharacter, player, currentFloorId, charOccupiedLocations, prob_after_enl, grid, floorDict, lRandomInts) : ((_Utils_cmp(otherCharacter.ae, otherCharacter.al) > 0) ? A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, otherCharacter, player, currentFloorId, charOccupiedLocations, prob_good_health, grid, floorDict, lRandomInts) : A8(author$project$Beings$BeingsInTileGrid$characterMove_sameFloorAsPlayer_moveTowardsPlayer, otherCharacter, player, currentFloorId, charOccupiedLocations, prob_low_health, grid, floorDict, lRandomInts))) : A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, otherCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 2:
					var _n3 = _n0.a;
					var coords_ = _n3.a;
					var floorId_ = _n3.b;
					var prob = _n3.c;
					var oscilateAllowed = _n3.d;
					var bnextMovStrat = _n3.e;
					return author$project$Beings$BeingsInTileGrid$characterMoveTowardsGivenCoordinates(otherCharacter)(coords_)(author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable)(player)(currentFloorId)(charOccupiedLocations)(prob)(oscilateAllowed)(bnextMovStrat)(grid)(floorDict)(lRandomInts);
				case 3:
					var _n4 = _n0.a;
					var xcoord = _n4.a;
					var ycoord = _n4.b;
					var floorId = _n4.c;
					var ltriedDoorCoords = _n4.d;
					var prob = _n4.e;
					var oscilateAllowed = _n4.f;
					var bnextMovStrat = _n4.g;
					var distanceToCoordsImprovedInLast10Moves = A4(
						author$project$Beings$BeingsInTileGrid$distanceToLocationImprovedInLastMovesIfSameMovingStrategy,
						A2(author$project$Grid$Coordinate, xcoord, ycoord),
						floorId,
						10,
						otherCharacter);
					if (_Utils_eq(otherCharacter.S, floorId) && distanceToCoordsImprovedInLast10Moves) {
						return author$project$Beings$BeingsInTileGrid$characterMoveTowardsGivenCoordinates(otherCharacter)(
							A2(author$project$Grid$Coordinate, xcoord, ycoord))(author$project$Beings$BeingsInTileGrid$shouldBeAvoidedIfMoveToOtherFloorUndesirable)(player)(currentFloorId)(charOccupiedLocations)(prob)(oscilateAllowed)(bnextMovStrat)(grid)(floorDict)(lRandomInts);
					} else {
						var mbOpenDoorCoordsChoice = A4(
							author$project$Beings$BeingsInTileGrid$chooseOpenDoor,
							ltriedDoorCoords,
							elm$core$Maybe$Just(
								A2(author$project$Grid$Coordinate, xcoord, ycoord)),
							floorId,
							A4(author$project$Beings$BeingsInTileGrid$determineOpenDoors, 10, otherCharacter.s, otherCharacter.S, grid));
						if (!mbOpenDoorCoordsChoice.$) {
							var doorcoords = mbOpenDoorCoordsChoice.a;
							return _Utils_Tuple2(
								A2(
									author$project$Beings$BeingsInTileGrid$addAsFirstMovingStrategy,
									A5(author$project$Beings$Beings$MoveToDoor, doorcoords, floorId, 1, oscilateAllowed, true),
									otherCharacter),
								lRandomInts);
						} else {
							return A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, otherCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
						}
					}
				case 4:
					var _n6 = _n0.a;
					return A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, otherCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 5:
					var _n7 = _n0.a;
					return A7(author$project$Beings$BeingsInTileGrid$characterMove_RandomMove, otherCharacter, player, currentFloorId, grid, floorDict, charOccupiedLocations, lRandomInts);
				case 6:
					var _n8 = _n0.a;
					return _Utils_Tuple2(otherCharacter, lRandomInts);
				default:
					var _n9 = _n0.a;
					return _Utils_Tuple2(otherCharacter, lRandomInts);
			}
		} else {
			return _Utils_Tuple2(otherCharacter, lRandomInts);
		}
	});
var author$project$Beings$OtherCharacterInTileGrid$otherCharacterStandingOnStairsHoleOrTeleporter = F2(
	function (ocharId, others_and_player_rec) {
		return A2(
			elm$core$Maybe$withDefault,
			false,
			A2(
				elm$core$Maybe$map,
				author$project$Tile$isStairsHoleOrTeleporter,
				A2(
					elm$core$Maybe$withDefault,
					elm$core$Maybe$Nothing,
					A2(
						elm$core$Maybe$map,
						function (loc) {
							return A2(author$project$Grid$get, loc, others_and_player_rec.aH);
						},
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.s;
							},
							A2(elm$core$Dict$get, ocharId, others_and_player_rec.m))))));
	});
var author$project$Beings$OtherCharacterInTileGrid$updateCharacterOccupiedLocations = F5(
	function (currentLocation, currentFloorId, previousLocation, previousFloorId, lcharLocations) {
		return A2(
			elm$core$List$append,
			_List_fromArray(
				[
					A3(author$project$Grid$Coordinate3D, currentLocation.bk, currentLocation.bl, currentFloorId)
				]),
			A2(
				elm$core$List$filter,
				function (coord3D) {
					return !_Utils_eq(
						coord3D,
						A3(author$project$Grid$Coordinate3D, previousLocation.bk, previousLocation.bl, previousFloorId));
				},
				lcharLocations));
	});
var author$project$Beings$OtherCharacterInTileGrid$ai_helper_to_move = F4(
	function (currentFloorId, ocharId, messagesToCharacters, others_and_player_rec) {
		ai_helper_to_move:
		while (true) {
			if (A2(author$project$Beings$OtherCharacterInTileGrid$otherCharacterExceedsNrMovesInCurrentTurn, ocharId, others_and_player_rec) || (A2(elm$core$List$member, author$project$Beings$BeingsInTileGrid$NoOtherCharacterMoveInCurrentTurn, messagesToCharacters) || A2(author$project$Beings$OtherCharacterInTileGrid$otherCharacterStandingOnStairsHoleOrTeleporter, ocharId, others_and_player_rec))) {
				return others_and_player_rec;
			} else {
				var mbOtherCharacter = A2(elm$core$Dict$get, ocharId, others_and_player_rec.m);
				var others_and_player_rec2 = function () {
					if (mbOtherCharacter.$ === 1) {
						return others_and_player_rec;
					} else {
						var otherCharacter = mbOtherCharacter.a;
						return (otherCharacter.ae > 0) ? function (_n3) {
							var ochar = _n3.a;
							var lrand = _n3.b;
							return _Utils_update(
								others_and_player_rec,
								{
									P: A5(author$project$Beings$OtherCharacterInTileGrid$updateCharacterOccupiedLocations, ochar.s, ochar.S, otherCharacter.s, otherCharacter.S, others_and_player_rec.P),
									t: lrand,
									m: A3(
										elm$core$Dict$update,
										ocharId,
										function (_n4) {
											return elm$core$Maybe$Just(ochar);
										},
										others_and_player_rec.m)
								});
						}(
							function (_n2) {
								var ochar = _n2.a;
								var lrand = _n2.b;
								return _Utils_Tuple2(
									author$project$Beings$BeingsInTileGrid$addCurrentLocationToPastLocations(ochar),
									lrand);
							}(
								function (_n1) {
									var ochar = _n1.a;
									var lrand = _n1.b;
									return _Utils_Tuple2(
										author$project$Beings$OtherCharacterInTileGrid$increseNrOfOtherCharacterMovesInCurrentTurn(ochar),
										lrand);
								}(
									A7(author$project$Beings$OtherCharacterInTileGrid$otherCharacterMove, others_and_player_rec.v, currentFloorId, others_and_player_rec.aH, others_and_player_rec.bu, others_and_player_rec.P, others_and_player_rec.t, otherCharacter)))) : others_and_player_rec;
					}
				}();
				var $temp$currentFloorId = currentFloorId,
					$temp$ocharId = ocharId,
					$temp$messagesToCharacters = messagesToCharacters,
					$temp$others_and_player_rec = others_and_player_rec2;
				currentFloorId = $temp$currentFloorId;
				ocharId = $temp$ocharId;
				messagesToCharacters = $temp$messagesToCharacters;
				others_and_player_rec = $temp$others_and_player_rec;
				continue ai_helper_to_move;
			}
		}
	});
var author$project$Beings$OtherCharacterInTileGrid$ai_helper_func = F4(
	function (currentFloorId, ocharId, messagesToCharacters, others_and_player_rec) {
		return A4(
			author$project$Beings$OtherCharacterInTileGrid$ai_helper_to_move,
			currentFloorId,
			ocharId,
			messagesToCharacters,
			A4(author$project$Beings$OtherCharacterInTileGrid$ai_helper_processMessages, currentFloorId, ocharId, messagesToCharacters, others_and_player_rec));
	});
var author$project$Beings$OtherCharacterInTileGrid$otherCharacter_AI = F3(
	function (currentFloorId, messagesToCharacters, othersAndPlayerRec) {
		var ocharIdList = elm$core$Dict$keys(
			A2(
				elm$core$Dict$filter,
				F2(
					function (ocharId, otherCharacter) {
						return (otherCharacter.ae > 0) && (_Utils_cmp(otherCharacter.a6, otherCharacter.a4) < 0);
					}),
				othersAndPlayerRec.m));
		return A3(
			elm$core$List$foldl,
			F2(
				function (ocharid, modelacc) {
					return A4(author$project$Beings$OtherCharacterInTileGrid$ai_helper_func, currentFloorId, ocharid, messagesToCharacters, modelacc);
				}),
			othersAndPlayerRec,
			ocharIdList);
	});
var author$project$GameUpdate$otherCharacters_AI = function (model) {
	var occupiedLocations = author$project$GameModel$getAllCharactersAndPlayerLocations(model);
	var otherCharactersPlayerRec = A3(
		author$project$Beings$OtherCharacterInTileGrid$otherCharacter_AI,
		model.c7,
		model.dH,
		A6(author$project$Beings$OtherCharacterInTileGrid$OthersAndPlayerRec, model.m, model.v, model.cq, model.bu, occupiedLocations, model.dQ));
	var intermediateModel = _Utils_update(
		model,
		{bu: otherCharactersPlayerRec.bu, cq: otherCharactersPlayerRec.aH, m: otherCharactersPlayerRec.m, v: otherCharactersPlayerRec.v, dQ: otherCharactersPlayerRec.t});
	var newModel = A3(
		elm$core$List$foldl,
		F2(
			function (oc, accmodel) {
				return A2(
					author$project$GameUpdate$checkIfStandingOnStairsHoleOrTeleporterAndMoveToNewFloor,
					author$project$Beings$Beings$AnOtherCharacter(oc),
					accmodel);
			}),
		intermediateModel,
		elm$core$Dict$values(intermediateModel.m));
	return newModel;
};
var author$project$GameUpdate$position_viewport_in_order_to_center_player = function (model) {
	return author$project$GameUpdate$reveal(
		_Utils_update(
			model,
			{
				en: A2(
					elm$core$Basics$max,
					0,
					model.v.s.bk - elm$core$Basics$round(model.ep / 2.0)),
				eo: A2(
					elm$core$Basics$max,
					0,
					model.v.s.bl - elm$core$Basics$round(model.em / 2))
			}));
};
var author$project$GameUpdate$resetFightingCharacterMovesCurrentTurn = function (model) {
	var updatedFightCharacters = A2(
		elm$core$Dict$map,
		F2(
			function (fcharId, fightingCharacter) {
				return _Utils_update(
					fightingCharacter,
					{a6: 0});
			}),
		model.h);
	return _Utils_update(
		model,
		{h: updatedFightCharacters});
};
var author$project$GameUpdate$resetOtherCharacterMovesCurrentTurn = function (model) {
	var updatedOtherCharacters = A2(
		elm$core$Dict$map,
		F2(
			function (ocharId, otherCharacter) {
				return _Utils_update(
					otherCharacter,
					{a6: 0});
			}),
		model.m);
	return _Utils_update(
		model,
		{m: updatedOtherCharacters});
};
var author$project$Grid$getGridBoundsToPlacePlayer = function (grid) {
	return {cs: grid.bc.cZ - 1, ct: grid.bc.ch - 1, cv: 1, cw: 1};
};
var author$project$Item$addToPlayerInventory = F2(
	function (item, inventory) {
		var getDictKey = F3(
			function (tryKey, nr, inv) {
				getDictKey:
				while (true) {
					var theTryKey = function (nr_) {
						return (!nr_) ? tryKey : (tryKey + ('_' + elm$core$String$fromInt(nr_)));
					};
					var _n0 = A2(
						elm$core$Dict$get,
						theTryKey(nr),
						inv);
					if (!_n0.$) {
						var av = _n0.a;
						var $temp$tryKey = tryKey,
							$temp$nr = nr + 1,
							$temp$inv = inv;
						tryKey = $temp$tryKey;
						nr = $temp$nr;
						inv = $temp$inv;
						continue getDictKey;
					} else {
						return theTryKey(nr);
					}
				}
			});
		var fdictKey = author$project$Item$getFirstInventoryDictKey(item);
		if (!fdictKey.$) {
			var dkey = fdictKey.a;
			return A3(
				elm$core$Dict$insert,
				A3(getDictKey, dkey, 0, inventory),
				item,
				inventory);
		} else {
			return inventory;
		}
	});
var author$project$Grid$getWithDefault = F3(
	function (_default, coordinate, grid) {
		var _n0 = A2(author$project$Grid$get, coordinate, grid);
		if (_n0.$ === 1) {
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
					if (t.$ === 3) {
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
					if (t.$ === 3) {
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
			{ch: h, cZ: w},
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
		if (mba.$ === 1) {
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
				return ((_Utils_cmp(coord_.bk, rrect.bT) > -1) && ((_Utils_cmp(coord_.bk, (rrect.bT + rrect.cZ) - 1) < 1) && ((_Utils_cmp(coord_.bl, rrect.bU) > -1) && (_Utils_cmp(coord_.bl, (rrect.bU + rrect.ch) - 1) < 1)))) ? true : false;
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
	var top_y = rectregion.bU;
	var right_x = (rectregion.bT + rectregion.cZ) - 1;
	var left_x = rectregion.bT;
	var lx = A2(elm$core$List$range, left_x, right_x);
	var bottom_y = (rectregion.bU + rectregion.ch) - 1;
	var ly = A2(elm$core$List$range, top_y, bottom_y);
	return A2(
		elm$core$List$concatMap,
		function (yval) {
			return A2(
				elm$core$List$map,
				function (xval) {
					return A2(author$project$Grid$Coordinate, xval, yval);
				},
				lx);
		},
		ly);
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
				return coords.bl;
			},
			lcells));
	var mbMinXval = elm$core$List$minimum(
		A2(
			elm$core$List$map,
			function (coords) {
				return coords.bk;
			},
			lcells));
	var mbMaxYval = elm$core$List$maximum(
		A2(
			elm$core$List$map,
			function (coords) {
				return coords.bl;
			},
			lcells));
	var mbMaxXval = elm$core$List$maximum(
		A2(
			elm$core$List$map,
			function (coords) {
				return coords.bk;
			},
			lcells));
	var _n0 = _Utils_Tuple2(mbMinXval, mbMaxXval);
	if ((!_n0.a.$) && (!_n0.b.$)) {
		var minXval = _n0.a.a;
		var maxXval = _n0.b.a;
		var _n1 = _Utils_Tuple2(mbMinYval, mbMaxYval);
		if ((!_n1.a.$) && (!_n1.b.$)) {
			var minYval = _n1.a.a;
			var maxYval = _n1.b.a;
			return elm$core$Maybe$Just(
				A4(author$project$TileGrid$TunnelRectangle, minXval, minYval, (maxXval - minXval) + 1, (maxYval - minYval) + 1));
		} else {
			return elm$core$Maybe$Nothing;
		}
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var author$project$GameModel$getRoomCenterX = function (roomrectangle) {
	return roomrectangle.bT + elm$core$Basics$round(roomrectangle.cZ / 2.0);
};
var author$project$GameModel$getRoomCenterY = function (roomrectangle) {
	return roomrectangle.bU + elm$core$Basics$round(roomrectangle.ch / 2.0);
};
var author$project$GameModel$getRoomRightX = function (roomrectangle) {
	return (roomrectangle.bT + roomrectangle.cZ) - 1;
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
			roomrect1.bT,
			author$project$GameModel$getRoomCenterX(roomrect2)) > 0) ? _Utils_Tuple2(
			author$project$GameModel$getRoomCenterX(roomrect2),
			roomrect1.bT - author$project$GameModel$getRoomCenterX(roomrect2)) : _Utils_Tuple2(
			author$project$GameModel$getRoomCenterX(roomrect1),
			0));
		var start_x = _n0.a;
		var tunnel_length = _n0.b;
		return (tunnel_length > 0) ? elm$core$Maybe$Just(
			A4(
				author$project$TileGrid$TunnelRectangle,
				start_x,
				author$project$GameModel$getRoomCenterY(roomrect1),
				tunnel_length,
				horizontal_tunnel_height)) : elm$core$Maybe$Nothing;
	});
var author$project$GameModel$getRoomBottomY = function (roomrectangle) {
	return (roomrectangle.bU + roomrectangle.ch) - 1;
};
var author$project$GameModel$getRoomTopY = function (roomrectangle) {
	return roomrectangle.bU;
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
				author$project$TileGrid$TunnelRectangle,
				author$project$GameModel$getRoomCenterX(roomrect1),
				start_y,
				vertical_tunnel_width,
				tunnel_height)) : elm$core$Maybe$Nothing;
	});
var author$project$MapGen$createHorizontalAndVerticalTunnels = F4(
	function (lrandomints, lroomrectangles, mbSpecialFloor, grid) {
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
		var newGrid = A3(author$project$MapGen$listTunnelRectangleToGridFunc, ltunnels_, mbSpecialFloor, grid);
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
				var rect2_TopY = room2rectangle.bU;
				var rect2_RightX = room2rectangle.bT + room2rectangle.cZ;
				var rect2_LeftX = room2rectangle.bT;
				var rect2_BottomY = room2rectangle.bU + room2rectangle.ch;
				var rect1_TopY = room1rectangle.bU;
				var rect1_RightX = room1rectangle.bT + room1rectangle.cZ;
				var rect1_LeftX = room1rectangle.bT;
				var rect1_BottomY = room1rectangle.bU + room1rectangle.ch;
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
		var newRoom = A4(author$project$TileGrid$RoomRectangle, room_topLeft_X, room_topLeft_Y, roomWidth, roomHeight);
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
var author$project$MapGen$randomMapGeneratorWithRooms = F8(
	function (totalwidth, totalheight, maxRooms, roomMaxSize, roomMinSize, mbSpecialFloor, lrandomInts, grid) {
		var randomMapVerticalWallWidth = 1;
		var randomMapHorizontalWallHeight = 1;
		var _n0 = A6(author$project$MapGen$randomMapRoomRectanglesGenerator, totalwidth, totalheight, maxRooms, roomMaxSize, roomMinSize, lrandomInts);
		var lroomrectangles = _n0.a;
		var unused_lrandomints = _n0.b;
		var _n1 = A4(
			author$project$MapGen$createHorizontalAndVerticalTunnels,
			unused_lrandomints,
			lroomrectangles,
			mbSpecialFloor,
			A3(author$project$MapGen$listRoomRectangleToGridFunc, lroomrectangles, mbSpecialFloor, grid));
		var newGrid = _n1.a;
		var ltunnelrectangles = _n1.b;
		var lunusedrandints = _n1.c;
		var newnewgrid = author$project$MapGen$correctSomeWallCorners(
			author$project$MapGen$transformFloorToWallOnDisplayBoundaries(
				A4(
					author$project$MapGen$createWallBoundaries,
					_Utils_ap(ltunnelrectangles, lroomrectangles),
					randomMapVerticalWallWidth,
					randomMapHorizontalWallHeight,
					newGrid)));
		return {dB: lroomrectangles, dC: ltunnelrectangles, cV: newnewgrid, eh: lunusedrandints};
	});
var author$project$Thorns$Types$SetOpponentAndPlayerAndInitializeGrid = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var author$project$Thorns$Types$NewRandomIntsAddToPool = function (a) {
	return {$: 1, a: a};
};
var author$project$Thorns$Types$NewRandomIntsAddToPoolAndInitializeGrid = function (a) {
	return {$: 2, a: a};
};
var author$project$Thorns$Update$cmdFillRandomIntsPool = F2(
	function (doInitializeGrid, model) {
		var nrToAdd = 500 - elm$core$List$length(model.dQ);
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
			if (mbSegment.$ === 1) {
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
var author$project$Beings$Beings$COMMON_ATTACK = 0;
var author$project$Beings$Beings$ENLIGHTENMENT_SPELL = 2;
var author$project$Beings$Beings$OPPONENT_COMMON_ATTACK = 1;
var author$project$Beings$Beings$OPPONENT_ENLIGHTENMENT_SPELL = 3;
var author$project$Thorns$OpponentInteraction$get_attack_value = F2(
	function (attacker, opt) {
		var modifier = 0;
		return attacker.a9 + modifier;
	});
var author$project$Thorns$OpponentInteraction$get_defense_value = F2(
	function (defender, opt) {
		var modifier = 0;
		return (defender.ba + defender.aU) + modifier;
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
					if ((opp_interaction_chosen_option_ === 2) || (opp_interaction_chosen_option_ === 3)) {
						var _n7 = attacker_.ad;
						switch (_n7) {
							case 0:
								return _Utils_Tuple2(
									A2(elm$core$Basics$max, 0, defender_.ae - variation),
									defender_.af);
							case 1:
								return _Utils_Tuple2(
									defender_.ae,
									A2(elm$core$Basics$min, defender_.af + variation, defender_.ag));
							default:
								return _Utils_Tuple2(
									defender_.ae,
									A2(elm$core$Basics$max, 0, defender_.af - variation));
						}
					} else {
						return _Utils_Tuple2(
							A2(elm$core$Basics$max, 0, defender_.ae - variation),
							defender_.af);
					}
				}();
				var defender_hp_after_attack = _n6.a;
				var defender_index_of_light_after_attack = _n6.b;
				var new_defender = _Utils_update(
					defender_,
					{ae: defender_hp_after_attack, af: defender_index_of_light_after_attack});
				return _Utils_Tuple2(new_defender, txt_msg);
			});
		var _n0 = function () {
			switch (opp_interaction_chosen_option) {
				case 0:
					var _n2 = A4(get_defender_after_attack, intervenient1, intervenient2, power, 0);
					var def = _n2.a;
					var txtm = _n2.b;
					return _Utils_Tuple3(
						intervenient1,
						def,
						'you initiate an attack . power of the attack is : ' + (elm$core$String$fromInt(power) + (' , ' + txtm)));
				case 2:
					if (_Utils_cmp(intervenient1.am, power) > 0) {
						var _n3 = A4(get_defender_after_attack, intervenient1, intervenient2, power, 2);
						var def = _n3.a;
						var txtm = _n3.b;
						return _Utils_Tuple3(
							_Utils_update(
								intervenient1,
								{am: intervenient1.am - power}),
							def,
							'you enlighten your opponent with a light power of  : ' + (elm$core$String$fromInt(power) + (' , ' + txtm)));
					} else {
						return _Utils_Tuple3(intervenient1, intervenient2, '');
					}
				case 1:
					var _n4 = A4(get_defender_after_attack, intervenient2, intervenient1, power, 1);
					var def = _n4.a;
					var txtm = _n4.b;
					return _Utils_Tuple3(
						def,
						intervenient2,
						'your opponent initiates a fight with you . power of the attack is : ' + (elm$core$String$fromInt(power) + (' , ' + txtm)));
				default:
					if (_Utils_cmp(intervenient2.am, power) < 0) {
						return _Utils_Tuple3(intervenient1, intervenient2, '');
					} else {
						var _n5 = A4(get_defender_after_attack, intervenient2, intervenient1, power, 3);
						var def = _n5.a;
						var txtm = _n5.b;
						return _Utils_Tuple3(
							def,
							_Utils_update(
								intervenient2,
								{am: intervenient2.am - power}),
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
			if (mb_attack_power.$ === 1) {
				return _Utils_Tuple3(player, opponent, '');
			} else {
				var val = mb_attack_power.a;
				if (!mb_opt.$) {
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
		var newOpponent_ = _Utils_update(
			newOpponent,
			{cg: true});
		return {aH: finalGrid, dO: newOpponent_, v: newPlayer, ee: txtmsg};
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
				if ((coords.bk < 0) || ((coords.bl < 0) || ((_Utils_cmp(coords.bk, grid.bc.cZ) > -1) || ((_Utils_cmp(coords.bl, grid.bc.ch) > -1) || A2(elm$core$List$member, coords, lextracted))))) {
					return _Utils_Tuple2(lextracted, grid);
				} else {
					var _n1 = A2(author$project$Grid$get, coords, grid);
					if (_n1.$ === 1) {
						return _Utils_Tuple2(lextracted, grid);
					} else {
						var mbval = _n1.a;
						return (_Utils_eq(mbval, elm$core$Maybe$Nothing) || (!_Utils_eq(mbval, mbValAtCoords))) ? _Utils_Tuple2(lextracted, grid) : A2(
							auxFuncExtract,
							A2(author$project$Grid$Coordinate, coords.bk, coords.bl - 1),
							A2(
								auxFuncExtract,
								A2(author$project$Grid$Coordinate, coords.bk, coords.bl + 1),
								A2(
									auxFuncExtract,
									A2(author$project$Grid$Coordinate, coords.bk - 1, coords.bl),
									A2(
										auxFuncExtract,
										A2(author$project$Grid$Coordinate, coords.bk + 1, coords.bl),
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
			elm$core$List$length(l2)) > 0) ? 0 : ((_Utils_cmp(
			elm$core$List$length(l1),
			elm$core$List$length(l2)) < 0) ? 2 : 1);
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
	return 2;
};
var author$project$Thorns$OpponentInteraction$get_interaction_options = F2(
	function (lrandints, player) {
		var lopt = _List_fromArray(
			[0, 1, 0, 1, 0, 1, 2, 3, 2, 3]);
		var litems = elm$core$Dict$values(player.ai);
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
		return (n < 0) ? _List_Nil : ((_Utils_cmp(n, grid.bc.cZ) > -1) ? _List_Nil : A2(
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
				A2(elm$core$List$range, 0, grid.bc.ch - 1))));
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
			grid.bc.ch)) ? grid : A3(
			elm$core$List$foldl,
			F2(
				function (coords, gridacc) {
					return A3(
						author$project$Grid$set,
						coords,
						A3(author$project$Grid$getElemWithDefault, coords.bl, adef, lelems),
						gridacc);
				}),
			grid,
			A2(
				elm$core$List$filter,
				function (coords) {
					return _Utils_eq(coords.bk, n);
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
					var addValue_ = A2(elm$core$Maybe$withDefault, 2, addValue);
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
		var l_column_numbers = A2(elm$core$List$range, 0, grid.bc.cZ - 1);
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
var author$project$Thorns$Types$InitializeGrid = {$: 8};
var author$project$Thorns$Update$thornToHelpStr = F2(
	function (mbthorn, segmentLength) {
		if (segmentLength < 2) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!mbthorn.$) {
				switch (mbthorn.a) {
					case 0:
						var _n1 = mbthorn.a;
						return elm$core$Maybe$Just(
							'click for a common attack (power of ' + (elm$core$String$fromInt(segmentLength) + ')'));
					case 2:
						var _n2 = mbthorn.a;
						return elm$core$Maybe$Just(
							'click to throw an enlightenment spell (power of ' + (elm$core$String$fromInt(segmentLength) + ')'));
					case 1:
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
			case 0:
				return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
			case 1:
				var lints = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							dQ: _Utils_ap(model.dQ, lints)
						}),
					elm$core$Platform$Cmd$none);
			case 2:
				var lints = msg.a;
				return A2(
					author$project$Thorns$Update$update,
					author$project$Thorns$Types$InitializeGrid,
					_Utils_update(
						model,
						{
							dQ: _Utils_ap(model.dQ, lints)
						}));
			case 3:
				var opponent = msg.a;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							by: false,
							dO: elm$core$Maybe$Just(
								author$project$Thorns$Types$FightingCharacter(opponent))
						}),
					elm$core$Platform$Cmd$none);
			case 4:
				var opponent = msg.a;
				var player = msg.b;
				return A2(
					author$project$Thorns$Update$update,
					author$project$Thorns$Types$InitializeGrid,
					_Utils_update(
						model,
						{
							by: false,
							dO: elm$core$Maybe$Just(
								author$project$Thorns$Types$FightingCharacter(opponent)),
							v: player
						}));
			case 6:
				var rownr = msg.a;
				var colnr = msg.b;
				var thorn = A2(
					elm$core$Maybe$withDefault,
					elm$core$Maybe$Nothing,
					A2(
						author$project$Grid$get,
						A2(author$project$Grid$Coordinate, colnr, rownr),
						model.cf));
				var rowColStr = elm$core$String$fromInt(rownr) + (' , ' + elm$core$String$fromInt(colnr));
				var currentSegment = A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					A2(
						author$project$Thorns$ThornGrid$findSegment,
						A2(author$project$Grid$Coordinate, colnr, rownr),
						model.cf));
				var segmentLength = elm$core$List$length(currentSegment);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{
							b6: currentSegment,
							ci: A2(author$project$Thorns$Update$thornToHelpStr, thorn, segmentLength)
						}),
					elm$core$Platform$Cmd$none);
			case 7:
				var rownr = msg.a;
				var colnr = msg.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{b6: _List_Nil, ci: elm$core$Maybe$Nothing}),
					elm$core$Platform$Cmd$none);
			case 5:
				var rownr = msg.a;
				var colnr = msg.b;
				var _n1 = model.dO;
				if (_n1.$ === 1) {
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				} else {
					if (_n1.a.$ === 1) {
						var opp = _n1.a.a;
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						var opponent = _n1.a.a;
						var previous_grid = model.cf;
						var coords = A2(author$project$Grid$Coordinate, colnr, rownr);
						var mbSegment = A2(author$project$Thorns$ThornGrid$findSegment, coords, model.cf);
						var info_rec = A5(author$project$Thorns$OpponentInteraction$do_activate_and_calc_opponents, coords, mbSegment, model.cf, model.v, opponent);
						var interactionHasFinished_ = (_Utils_cmp(info_rec.v.ae, info_rec.v.al) < 1) || ((_Utils_cmp(info_rec.dO.ae, opponent.al) < 1) || (_Utils_cmp(info_rec.dO.af, info_rec.dO.ag) > -1));
						var _n2 = A2(
							author$project$Thorns$ThornGrid$checkSegments,
							info_rec.v,
							A2(
								author$project$Thorns$ThornGrid$fall,
								_Utils_Tuple2(info_rec.aH, model.dQ),
								info_rec.v));
						var newGrid = _n2.a;
						var newlrands = _n2.b;
						var newModel = _Utils_update(
							model,
							{
								b6: _List_Nil,
								cf: newGrid,
								ci: elm$core$Maybe$Nothing,
								by: interactionHasFinished_,
								dO: elm$core$Maybe$Just(
									author$project$Thorns$Types$FightingCharacter(info_rec.dO)),
								v: info_rec.v,
								dQ: newlrands
							});
						return _Utils_Tuple2(
							newModel,
							A2(author$project$Thorns$Update$cmdFillRandomIntsPool, false, newModel));
					}
				}
			default:
				var lrandints = model.dQ;
				var gridInteractionOptions = model.cf;
				var _n3 = A3(author$project$Thorns$ThornGrid$randomizeGrid, gridInteractionOptions, lrandints, model.v);
				var newGrid = _n3.a;
				var newlrandints = _n3.b;
				var newModel = _Utils_update(
					model,
					{cf: newGrid, ci: elm$core$Maybe$Nothing, dQ: newlrandints});
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
				case 0:
					return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 21:
					var tmsg = msg.a;
					var _n1 = A2(author$project$Thorns$Update$update, tmsg, model.di);
					var newThornsModel = _n1.a;
					var thorns_cmds = _n1.b;
					var newModel = function () {
						if (newThornsModel.by) {
							var _n2 = function () {
								var _n3 = newThornsModel.dO;
								if (!_n3.$) {
									if (!_n3.a.$) {
										var erec = _n3.a.a;
										return _Utils_Tuple3(
											A3(
												elm$core$Dict$update,
												erec.a0,
												function (_n4) {
													return elm$core$Maybe$Just(erec);
												},
												model.h),
											model.m,
											newThornsModel.v);
									} else {
										var orec = _n3.a.a;
										return _Utils_Tuple3(
											model.h,
											A3(
												elm$core$Dict$update,
												orec.a0,
												function (_n5) {
													return elm$core$Maybe$Just(orec);
												},
												model.m),
											newThornsModel.v);
									}
								} else {
									return _Utils_Tuple3(model.h, model.m, model.v);
								}
							}();
							var updatedFightCharacters = _n2.a;
							var newOtherCharacters = _n2.b;
							var newPlayer = _n2.c;
							var newDisplay = (_Utils_eq(model.c6, author$project$GameModel$DisplayGameOfThorns) && (!newThornsModel.by)) ? author$project$GameModel$DisplayGameOfThorns : ((_Utils_eq(model.c6, author$project$GameModel$DisplayGameOfThorns) && newThornsModel.by) ? ((_Utils_cmp(newPlayer.ae, model.v.al) < 1) ? author$project$GameModel$DisplayGameOver : author$project$GameModel$DisplayRegularGame) : model.c6);
							return author$project$GameUpdate$cleanup(
								_Utils_update(
									model,
									{c6: newDisplay, h: updatedFightCharacters, di: newThornsModel, dy: true, m: newOtherCharacters, v: newPlayer}));
						} else {
							return _Utils_update(
								model,
								{di: newThornsModel});
						}
					}();
					return _Utils_Tuple2(
						newModel,
						A2(elm$core$Platform$Cmd$map, author$project$GameUpdate$ThornsMsg, thorns_cmds));
				case 13:
					var nr = msg.a;
					var gname = msg.b;
					var imgStr = msg.c;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								c6: A3(author$project$GameModel$DisplayAboutToStartGame, nr, gname, imgStr),
								d_: true
							}),
						elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A3(
									andrewMacmurray$elm_delay$Delay$after,
									200.0,
									0,
									author$project$GameUpdate$StartGameNr(nr))
								])));
				case 1:
					var nr = msg.a;
					var _n6 = function () {
						switch (nr) {
							case 1:
								return author$project$GameDefinitions$Game1$Game1Definitions$initialModelFunc(model.$7);
							case 2:
								return A2(author$project$GameDefinitions$Game2$Game2Definitions$initialModelFunc, model.dQ, model.$7);
							case 3:
								return A2(author$project$GameDefinitions$Game3$Game3Definitions$initialModelFunc, model.dQ, model.$7);
							default:
								return _Utils_Tuple3(model, false, false);
						}
					}();
					var initModel = _n6.a;
					var createRandomMap = _n6.b;
					var randomlyPositionPlayer = _n6.c;
					var floorGridCoordinates = function (floorId) {
						return _Utils_eq(floorId, initModel.c7) ? author$project$Grid$toCoordinates(initModel.cq) : A2(
							elm$core$Maybe$withDefault,
							_List_Nil,
							A2(
								elm$core$Maybe$map,
								function (g) {
									return author$project$Grid$toCoordinates(g.cq);
								},
								A2(elm$core$Dict$get, floorId, initModel.bu)));
					};
					var gBounds = author$project$Grid$getGridBoundsToPlacePlayer(initModel.cq);
					return _Utils_Tuple2(
						author$project$GameUpdate$position_viewport_in_order_to_center_player(initModel),
						elm$core$Platform$Cmd$batch(
							_Utils_ap(
								_List_fromArray(
									[
										createRandomMap ? author$project$GameUpdate$cmdFillRandomIntsPoolAndGenerateRandomMap(initModel) : author$project$GameUpdate$cmdFillRandomIntsPool(initModel),
										A4(author$project$GameUpdate$cmdGenerateRandomInitiativeValue, 'player', elm$core$Maybe$Nothing, 1, 100),
										randomlyPositionPlayer ? A5(author$project$GameUpdate$cmdGetRandomPositionedPlayer, initModel.v, gBounds.cv, gBounds.cs, gBounds.cw, gBounds.ct) : elm$core$Platform$Cmd$none,
										A2(
										elm$core$Platform$Cmd$map,
										author$project$GameUpdate$ThornsMsg,
										A2(author$project$Thorns$Update$cmdFillRandomIntsPool, true, initModel.di))
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
															floorGridCoordinates(fightingCharacter.S)));
												}),
											initModel.h)),
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
											initModel.h))))));
				case 10:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{c6: author$project$GameModel$DisplayRegularGame}),
						elm$core$Platform$Cmd$none);
				case 11:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								c6: function () {
									var _n8 = model.c6;
									switch (_n8.$) {
										case 6:
											var bval = _n8.a;
											return author$project$GameModel$DisplayRegularGame;
										case 0:
											return author$project$GameModel$DisplayInventory(false);
										default:
											return model.c6;
									}
								}()
							}),
						elm$core$Platform$Cmd$none);
				case 12:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								c6: _Utils_eq(
									model.c6,
									author$project$GameModel$DisplayInventory(false)) ? author$project$GameModel$DisplayInventory(true) : (_Utils_eq(
									model.c6,
									author$project$GameModel$DisplayInventory(true)) ? author$project$GameModel$DisplayInventory(false) : model.c6)
							}),
						elm$core$Platform$Cmd$none);
				case 2:
					var input = msg.a;
					if (!model.dy) {
						return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
					} else {
						switch (input) {
							case 0:
								if (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) || _Utils_eq(model.c6, author$project$GameModel$DisplayGameCompleted)) {
									var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
										_Utils_Tuple2(0, 0 - 1)),
										$temp$model = model;
									msg = $temp$msg;
									model = $temp$model;
									continue update;
								} else {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								}
							case 1:
								if (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) || _Utils_eq(model.c6, author$project$GameModel$DisplayGameCompleted)) {
									var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
										_Utils_Tuple2(0, 0 + 1)),
										$temp$model = model;
									msg = $temp$msg;
									model = $temp$model;
									continue update;
								} else {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								}
							case 2:
								if (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) || _Utils_eq(model.c6, author$project$GameModel$DisplayGameCompleted)) {
									var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
										_Utils_Tuple2(0 - 1, 0)),
										$temp$model = model;
									msg = $temp$msg;
									model = $temp$model;
									continue update;
								} else {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								}
							case 3:
								if (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) || _Utils_eq(model.c6, author$project$GameModel$DisplayGameCompleted)) {
									var $temp$msg = author$project$GameUpdate$TryShiftPlayerPosition(
										_Utils_Tuple2(0 + 1, 0)),
										$temp$model = model;
									msg = $temp$msg;
									model = $temp$model;
									continue update;
								} else {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								}
							case 4:
								if (!model.c9) {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								} else {
									if ((_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) || _Utils_eq(model.c6, author$project$GameModel$DisplayGameCompleted)) && (!A3(
										author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
										A2(author$project$Grid$Coordinate, model.v.s.bk - 1, model.v.s.bl),
										model.v,
										model.cq))) {
										var _n10 = A2(
											author$project$GameModel$getOtherCharacterInCoordsWithJumpCapabilities,
											A3(author$project$Grid$Coordinate3D, model.v.s.bk, model.v.s.bl, model.c7),
											model);
										if (!_n10.$) {
											var oc = _n10.a;
											var $temp$msg = author$project$GameUpdate$SmallJumpLeft(oc),
												$temp$model = model;
											msg = $temp$msg;
											model = $temp$model;
											continue update;
										} else {
											return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
										}
									} else {
										return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
									}
								}
							case 6:
								if (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame)) {
									var $temp$msg = author$project$GameUpdate$TryAddToPlayerInventory,
										$temp$model = model;
									msg = $temp$msg;
									model = $temp$model;
									continue update;
								} else {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								}
							case 9:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{da: !model.da}),
									elm$core$Platform$Cmd$none);
							case 11:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											c6: _Utils_eq(model.c6, author$project$GameModel$DisplayHelpScreen) ? author$project$GameModel$DisplayRegularGame : (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) ? author$project$GameModel$DisplayHelpScreen : model.c6)
										}),
									elm$core$Platform$Cmd$none);
							case 10:
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{
											c6: _Utils_eq(model.c6, author$project$GameModel$DisplayOpponentReport) ? author$project$GameModel$DisplayRegularGame : (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) ? author$project$GameModel$DisplayOpponentReport : model.c6)
										}),
									elm$core$Platform$Cmd$none);
							case 5:
								if (!model.c9) {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								} else {
									var iminpq = author$project$Algorithms$CustomIndexMinPriorityQueue$createEmptyCustomIndexMinPriorityQueue(100);
									var _n11 = elm$core$Maybe$Nothing;
									var _n12 = author$project$Algorithms$CustomIndexMinPriorityQueue$simpleTest(true);
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								}
							case 7:
								var $temp$msg = author$project$GameUpdate$ToggleShowInventory,
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 8:
								var $temp$msg = author$project$GameUpdate$ToggleShowInventoryDetails,
									$temp$model = model;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							case 12:
								var newModel = _Utils_eq(model.c6, author$project$GameModel$DisplayMap) ? _Utils_update(
									model,
									{c6: author$project$GameModel$DisplayRegularGame, d7: model.d7 * 8, d9: model.d9 * 8, em: (model.em / 8) | 0, ep: (model.ep / 8) | 0}) : (_Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) ? _Utils_update(
									model,
									{c6: author$project$GameModel$AboutToDisplayMap, d7: (model.d7 / 8) | 0, d9: (model.d9 / 8) | 0, em: model.em * 8, ep: model.ep * 8}) : model);
								return _Utils_Tuple2(
									newModel,
									elm$core$Platform$Cmd$batch(
										_List_fromArray(
											[
												A3(andrewMacmurray$elm_delay$Delay$after, 200.0, 0, author$project$GameUpdate$ShowMap)
											])));
							case 13:
								var newModel = _Utils_eq(model.c6, author$project$GameModel$DisplayRegularGame) ? _Utils_update(
									model,
									{ek: !model.ek}) : model;
								return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
							default:
								return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
						}
					}
				case 5:
					var oc = msg.a;
					var maxJumpSize = 4;
					var jumpsize = function (nr) {
						jumpsize:
						while (true) {
							if (_Utils_cmp(nr, maxJumpSize) > 0) {
								return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
							} else {
								if (author$project$Tile$isWall(
									A2(
										elm$core$Maybe$withDefault,
										author$project$Tile$NoTileYet,
										A2(
											author$project$Grid$get,
											A2(author$project$Grid$Coordinate, model.v.s.bk - nr, model.v.s.bl),
											model.cq)))) {
									return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
								} else {
									if (A3(
										author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
										A2(author$project$Grid$Coordinate, model.v.s.bk - nr, model.v.s.bl),
										model.v,
										model.cq)) {
										return A2(
											author$project$GameUpdate$update,
											author$project$GameUpdate$TryShiftPlayerPosition(
												_Utils_Tuple2(0 - nr, 0)),
											A4(
												author$project$GameModel$placeExistingOtherCharacterInLocAndFloorId,
												oc.a0,
												A2(author$project$Grid$Coordinate, model.v.s.bk - nr, model.v.s.bl),
												model.c7,
												model));
									} else {
										var $temp$nr = nr + 1;
										nr = $temp$nr;
										continue jumpsize;
									}
								}
							}
						}
					};
					return jumpsize(2);
				case 9:
					return _Utils_eq(model.c6, author$project$GameModel$AboutToDisplayMap) ? _Utils_Tuple2(
						_Utils_update(
							model,
							{c6: author$project$GameModel$DisplayMap}),
						elm$core$Platform$Cmd$none) : _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
				case 3:
					var player_ = model.v;
					var pcoords = model.v.s;
					var _n13 = function () {
						var _n14 = A2(author$project$Grid$get, pcoords, model.cq);
						if ((!_n14.$) && (!_n14.a.$)) {
							var floorinfo = _n14.a.a;
							var _n15 = floorinfo.bA;
							if (!_n15.$) {
								var item = _n15.a;
								if (item.$ === 9) {
									var fdescription = item.a;
									return _Utils_Tuple3(
										A2(author$project$Item$addToPlayerInventory, item, model.v.ai),
										A3(
											author$project$Grid$set,
											pcoords,
											author$project$Tile$Floor(
												_Utils_update(
													floorinfo,
													{bA: elm$core$Maybe$Nothing})),
											model.cq),
										model.v.ae + 4);
								} else {
									return _Utils_Tuple3(
										A2(author$project$Item$addToPlayerInventory, item, model.v.ai),
										A3(
											author$project$Grid$set,
											pcoords,
											author$project$Tile$Floor(
												_Utils_update(
													floorinfo,
													{bA: elm$core$Maybe$Nothing})),
											model.cq),
										model.v.ae);
								}
							} else {
								return _Utils_Tuple3(model.v.ai, model.cq, model.v.ae);
							}
						} else {
							return _Utils_Tuple3(model.v.ai, model.cq, model.v.ae);
						}
					}();
					var updatedInventory = _n13.a;
					var newGrid = _n13.b;
					var newHealth = _n13.c;
					var newPlayer = _Utils_update(
						player_,
						{ae: newHealth, ai: updatedInventory});
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{cq: newGrid, v: newPlayer}),
						elm$core$Platform$Cmd$none);
				case 4:
					var shiftTuple = msg.a;
					var y_ = shiftTuple.b;
					var x_ = shiftTuple.a;
					var player = model.v;
					var _n17 = player.s;
					var x = _n17.bk;
					var y = _n17.bl;
					var _n18 = _Utils_Tuple2(x + x_, y + y_);
					var x2 = _n18.a;
					var y2 = _n18.b;
					var mbFightChar = function () {
						var _n23 = elm$core$Dict$values(
							A2(
								elm$core$Dict$filter,
								F2(
									function (fcharId, fightingCharacter) {
										return _Utils_eq(fightingCharacter.S, model.c7) && _Utils_eq(
											fightingCharacter.s,
											A2(author$project$GameModel$location, x2, y2));
									}),
								model.h));
						if (!_n23.b) {
							return elm$core$Maybe$Nothing;
						} else {
							var fightingCharacter = _n23.a;
							var es = _n23.b;
							return elm$core$Maybe$Just(fightingCharacter);
						}
					}();
					var newModel = function () {
						var _n21 = A2(
							author$project$Grid$get,
							A2(author$project$GameModel$location, x2, y2),
							model.cq);
						_n21$2:
						while (true) {
							if (!_n21.$) {
								switch (_n21.a.$) {
									case 7:
										var leverinfo = _n21.a.a;
										return A3(
											author$project$GameModel$leverFunctioning,
											leverinfo,
											A2(author$project$GameModel$location, x2, y2),
											model);
									case 12:
										var _n22 = _n21.a;
										var initialTile = _n22.a;
										var newTile = _n22.b;
										return A4(author$project$GameModel$handleConverterTileInteraction, x2, y2, newTile, model);
									default:
										break _n21$2;
								}
							} else {
								break _n21$2;
							}
						}
						return model;
					}();
					var _n19 = function () {
						if (!mbFightChar.$) {
							var fightingCharacter = mbFightChar.a;
							return ((_Utils_cmp(fightingCharacter.ae, fightingCharacter.al) > 0) && ((_Utils_cmp(fightingCharacter.af, fightingCharacter.ag) < 0) && (_Utils_cmp(newModel.v.ae, newModel.v.al) > 0))) ? _Utils_Tuple2(
								newModel,
								author$project$GameUpdate$StartOpponentInteraction(fightingCharacter)) : (((fightingCharacter.ae <= 0) && (fightingCharacter.cB && (x_ || y_))) ? _Utils_Tuple2(
								author$project$GameUpdate$checkAndAlterViewportAnchorIfNecessary(
									author$project$GameUpdate$openDoorIfPlayerStandingOnDoorAndClosed(
										author$project$GameUpdate$checkIfPlayerStandingOnStairsHoleOrTeleporterAndMoveToNewFloor(
											_Utils_update(
												newModel,
												{
													v: A4(
														author$project$GameUpdate$move,
														_Utils_Tuple2(x_, y_),
														newModel.cq,
														author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
														newModel.v)
												})))),
								author$project$GameUpdate$CleanUpAndFightingCharacterLogic) : _Utils_Tuple2(newModel, author$project$GameUpdate$CleanUpAndFightingCharacterLogic));
						} else {
							return (x_ || y_) ? _Utils_Tuple2(
								author$project$GameUpdate$checkAndAlterViewportAnchorIfNecessary(
									author$project$GameUpdate$openDoorIfPlayerStandingOnDoorAndClosed(
										author$project$GameUpdate$checkIfPlayerStandingOnStairsHoleOrTeleporterAndMoveToNewFloor(
											_Utils_update(
												newModel,
												{
													v: A4(
														author$project$GameUpdate$move,
														_Utils_Tuple2(x_, y_),
														newModel.cq,
														author$project$Beings$BeingsInTileGrid$isGridTileWalkable,
														newModel.v)
												})))),
								author$project$GameUpdate$CleanUpAndFightingCharacterLogic) : _Utils_Tuple2(newModel, author$project$GameUpdate$CleanUpAndFightingCharacterLogic);
						}
					}();
					var newModel2 = _n19.a;
					var themsg = _n19.b;
					var $temp$msg = themsg,
						$temp$model = newModel2;
					msg = $temp$msg;
					model = $temp$model;
					continue update;
				case 6:
					var isGameCompleted = author$project$GameUpdate$checkGameCompletion(model);
					var _n24 = function (_n26) {
						var modl = _n26.a;
						var le = _n26.b;
						return _Utils_eq(modl.c6, author$project$GameModel$DisplayGameOver) ? _Utils_Tuple2(
							_Utils_update(
								modl,
								{dy: false}),
							le) : _Utils_Tuple2(modl, le);
					}(
						function (_n25) {
							var modl_ = _n25.a;
							var le = _n25.b;
							return _Utils_Tuple2(
								author$project$GameUpdate$clearMessagesToCharacters(modl_),
								le);
						}(
							author$project$GameUpdate$fightingCharacter_AI(
								author$project$GameUpdate$otherCharacters_AI(
									author$project$GameModel$updateModelFloorDictWithLevel(
										author$project$GameUpdate$addMessageToCharactersIfGameOfThornsGoingOn(
											author$project$GameUpdate$resetOtherCharacterMovesCurrentTurn(
												author$project$GameUpdate$resetFightingCharacterMovesCurrentTurn(
													author$project$GameUpdate$cleanup(model)))))))));
					var newModel = _n24.a;
					var lfightingCharacters = _n24.b;
					var newCmds = function () {
						var _n28 = newModel.c6;
						switch (_n28.$) {
							case 7:
								var x = _n28.a;
								var y = _n28.b;
								return elm$core$Platform$Cmd$batch(
									_List_fromArray(
										[
											A3(andrewMacmurray$elm_delay$Delay$after, 300.0, 0, author$project$GameUpdate$ShowRegularGame),
											author$project$GameUpdate$cmdFillRandomIntsPool(newModel)
										]));
							case 8:
								var x = _n28.a;
								return elm$core$Platform$Cmd$batch(
									_List_fromArray(
										[
											A3(andrewMacmurray$elm_delay$Delay$after, 100.0, 0, author$project$GameUpdate$ShowRegularGame),
											author$project$GameUpdate$cmdFillRandomIntsPool(newModel)
										]));
							default:
								return author$project$GameUpdate$cmdFillRandomIntsPool(newModel);
						}
					}();
					if (isGameCompleted) {
						return _Utils_Tuple2(
							author$project$GameUpdate$reveal(
								_Utils_update(
									newModel,
									{
										c6: author$project$GameModel$DisplayGameCompleted,
										h: elm$core$Dict$empty,
										m: A2(
											elm$core$Dict$filter,
											F2(
												function (k, v) {
													return v.ao !== 'otherYou';
												}),
											newModel.m)
									})),
							elm$core$Platform$Cmd$none);
					} else {
						var _n27 = elm$core$List$head(lfightingCharacters);
						if (!_n27.$) {
							var fightingCharacter_ = _n27.a;
							if (_Utils_cmp(fightingCharacter_.ae, fightingCharacter_.al) > 0) {
								var $temp$msg = author$project$GameUpdate$StartOpponentInteraction(fightingCharacter_),
									$temp$model = newModel;
								msg = $temp$msg;
								model = $temp$model;
								continue update;
							} else {
								return _Utils_Tuple2(
									author$project$GameUpdate$reveal(newModel),
									newCmds);
							}
						} else {
							return _Utils_Tuple2(
								author$project$GameUpdate$reveal(newModel),
								newCmds);
						}
					}
				case 7:
					var fightingCharacter = msg.a;
					var _n29 = A2(
						author$project$Thorns$Update$update,
						A2(author$project$Thorns$Types$SetOpponentAndPlayerAndInitializeGrid, fightingCharacter, model.v),
						model.di);
					var newThornsModel = _n29.a;
					var thornsCmd = _n29.b;
					var newModel = _Utils_update(
						model,
						{c6: author$project$GameModel$DisplayGameOfThorns, di: newThornsModel, dy: false});
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
				case 8:
					var telInfo = msg.a;
					var newModel = A4(
						author$project$GameUpdate$discretePlayerJumpTo,
						model,
						telInfo.S,
						_Utils_Tuple2(telInfo.Q.bk, telInfo.Q.bl),
						_Utils_Tuple2(telInfo.d4.bL.a, telInfo.d4.bL.b));
					var newLocTuple = _Utils_Tuple2(telInfo.Q.bk + telInfo.d4.bL.a, telInfo.Q.bl + telInfo.d4.bL.b);
					return _Utils_Tuple2(
						newModel,
						elm$core$Platform$Cmd$batch(
							_List_fromArray(
								[
									A3(andrewMacmurray$elm_delay$Delay$after, 1.0, 0, author$project$GameUpdate$CleanUpAndFightingCharacterLogic)
								])));
				case 14:
					var tupPosition = msg.a;
					var oldPlayer = model.v;
					var newLocation = A2(author$project$GameModel$location, tupPosition.a, tupPosition.b);
					var newPlayer = _Utils_update(
						oldPlayer,
						{s: newLocation, ap: true});
					var gridBounds = author$project$Grid$getGridBoundsToPlacePlayer(model.cq);
					var _n30 = A3(author$project$Beings$BeingsInTileGrid$isGridTileWalkable, newLocation, newPlayer, model.cq);
					if (_n30) {
						return _Utils_Tuple2(
							author$project$GameUpdate$reveal(
								_Utils_update(
									model,
									{
										v: newPlayer,
										en: A2(
											elm$core$Basics$max,
											0,
											newLocation.bk - elm$core$Basics$round(model.ep / 2.0)),
										eo: A2(
											elm$core$Basics$max,
											0,
											newLocation.bl - elm$core$Basics$round(model.em / 2))
									})),
							elm$core$Platform$Cmd$none);
					} else {
						return _Utils_Tuple2(
							model,
							A5(
								author$project$GameUpdate$cmdGetRandomPositionedPlayer,
								_Utils_update(
									oldPlayer,
									{ap: false}),
								gridBounds.cv,
								gridBounds.cs,
								gridBounds.cw,
								gridBounds.ct));
					}
				case 15:
					var fcharId = msg.a;
					var idxPosition = msg.b;
					var mbActualFightChar = A2(elm$core$Dict$get, fcharId, model.h);
					var mbFloorGrid = function () {
						if (mbActualFightChar.$ === 1) {
							return elm$core$Maybe$Nothing;
						} else {
							var fchar = mbActualFightChar.a;
							return _Utils_eq(fchar.S, model.c7) ? elm$core$Maybe$Just(model.cq) : A2(
								elm$core$Maybe$map,
								function ($) {
									return $.cq;
								},
								A2(elm$core$Dict$get, fchar.S, model.bu));
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
								_Utils_Tuple2(coords.bk, coords.bl)),
							model);
					}(
						A2(
							elm$core$Maybe$withDefault,
							A2(author$project$Grid$Coordinate, 1, 1),
							elm$core$List$head(
								A2(elm$core$List$drop, idxPosition, gridCoordinates))));
				case 16:
					var fcharId = msg.a;
					var tupPosition = msg.b;
					var newLocation = A2(author$project$GameModel$location, tupPosition.a, tupPosition.b);
					var mbActualFightChar = A2(elm$core$Dict$get, fcharId, model.h);
					var mbFloorGrid = function () {
						if (mbActualFightChar.$ === 1) {
							return elm$core$Maybe$Nothing;
						} else {
							var fchar = mbActualFightChar.a;
							return _Utils_eq(fchar.S, model.c7) ? elm$core$Maybe$Just(model.cq) : A2(
								elm$core$Maybe$map,
								function ($) {
									return $.cq;
								},
								A2(elm$core$Dict$get, fchar.S, model.bu));
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
					var _n32 = _Utils_Tuple2(mbActualFightChar, mbFloorGrid);
					if ((!_n32.a.$) && (!_n32.b.$)) {
						var actualFightChar = _n32.a.a;
						var actualFloorGrid = _n32.b.a;
						var _n33 = A3(author$project$Beings$BeingsInTileGrid$isGridTileWalkable, newLocation, actualFightChar, actualFloorGrid);
						if (_n33) {
							return _Utils_Tuple2(
								_Utils_update(
									model,
									{
										h: A3(author$project$GameModel$placeExistingFightingCharacter, fcharId, newLocation, model.h)
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
				case 17:
					var lfloats = msg.a;
					var theSize = model.cq.bc;
					var newGrid = A2(
						author$project$MapGen$randomCave,
						_Utils_Tuple2(theSize.cZ, theSize.ch),
						lfloats);
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{cq: newGrid}),
						elm$core$Platform$Cmd$none);
				case 18:
					var strCharacter = msg.a;
					var mbCharacterId = msg.b;
					var intval = msg.c;
					if (strCharacter === 'player') {
						var oldPlayer = model.v;
						var newPlayer = _Utils_update(
							oldPlayer,
							{ah: intval});
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{v: newPlayer}),
							elm$core$Platform$Cmd$none);
					} else {
						if (strCharacter === 'fightingCharacter') {
							var newModel = A3(author$project$GameModel$mbUpdateFightingCharacterInitiativeByMbFCharId, intval, mbCharacterId, model);
							return _Utils_Tuple2(newModel, elm$core$Platform$Cmd$none);
						} else {
							return _Utils_Tuple2(model, elm$core$Platform$Cmd$none);
						}
					}
				case 19:
					var lints = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								dQ: _Utils_ap(lints, model.dQ)
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
								return $.dI;
							},
							model.dX));
					var maxRoomSize = A2(
						elm$core$Maybe$withDefault,
						0,
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.dF;
							},
							model.dX));
					var maxNrOfRooms = A2(
						elm$core$Maybe$withDefault,
						0,
						A2(
							elm$core$Maybe$map,
							function ($) {
								return $.dE;
							},
							model.dX));
					var genOutputRecord = A8(author$project$MapGen$randomMapGeneratorWithRooms, model.ec, model.eb, maxNrOfRooms, maxRoomSize, minRoomSize, elm$core$Maybe$Nothing, lints, model.cq);
					var gridAsList = A2(
						elm$core$List$concatMap,
						elm$core$Basics$identity,
						author$project$Grid$toList(genOutputRecord.cV));
					var wallPercentage = author$project$GameUpdate$getWallPercentage(gridAsList);
					var newmodel = _Utils_update(
						model,
						{
							cq: genOutputRecord.cV,
							dQ: genOutputRecord.eh,
							er: elm$core$Maybe$Just(wallPercentage)
						});
					return _Utils_Tuple2(
						newmodel,
						author$project$GameUpdate$cmdFillRandomIntsPool(newmodel));
			}
		}
	});
var author$project$GameModel$getGridTileVisibility = F2(
	function (location_, gridtiles) {
		return A2(
			elm$core$Maybe$withDefault,
			2,
			A2(
				elm$core$Maybe$map,
				author$project$Tile$getTileVisibility,
				A2(author$project$Grid$get, location_, gridtiles)));
	});
var timjs$elm_collage$Collage$Core$Image = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var timjs$elm_collage$Collage$Core$collage = function (basic) {
	return {
		_: basic,
		dj: _List_Nil,
		ao: elm$core$Maybe$Nothing,
		dM: 1,
		cM: 0,
		cO: _Utils_Tuple2(1, 1),
		bL: _Utils_Tuple2(0, 0)
	};
};
var timjs$elm_collage$Collage$image = function (dims) {
	return A2(
		elm$core$Basics$composeL,
		timjs$elm_collage$Collage$Core$collage,
		timjs$elm_collage$Collage$Core$Image(dims));
};
var author$project$GameView$fightingCharacterView = F5(
	function (fightChar, visibility, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = (_Utils_cmp(fightChar.af, fightChar.ag) > -1) ? (imgBaseDir + ('/characters/' + (elm$core$String$toLower(fightChar.bh) + '_enlightened.png'))) : ((_Utils_cmp(fightChar.ae, fightChar.al) > 0) ? (imgBaseDir + ('/characters/' + (elm$core$String$toLower(fightChar.bh) + '.png'))) : (imgBaseDir + ('/characters/' + (elm$core$String$toLower(fightChar.bh) + '_lowHealth.png'))));
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var the_sett$elm_color$Color$Color = F4(
	function (red, green, blue, alpha) {
		return {Z: alpha, az: blue, aG: green, aK: red};
	});
var the_sett$elm_color$Color$rgba = the_sett$elm_color$Color$Color;
var the_sett$elm_color$Color$black = A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1);
var timjs$elm_collage$Collage$Flat = 0;
var timjs$elm_collage$Collage$Sharp = 1;
var timjs$elm_collage$Collage$thin = 2.0;
var timjs$elm_collage$Collage$Core$Uniform = function (a) {
	return {$: 1, a: a};
};
var timjs$elm_collage$Collage$uniform = timjs$elm_collage$Collage$Core$Uniform;
var timjs$elm_collage$Collage$defaultLineStyle = {
	b2: 0,
	bq: _List_Nil,
	b7: 0,
	bt: timjs$elm_collage$Collage$uniform(the_sett$elm_color$Color$black),
	co: 1,
	bR: timjs$elm_collage$Collage$thin
};
var timjs$elm_collage$Collage$broken = F3(
	function (dashes, thickness, fill) {
		return _Utils_update(
			timjs$elm_collage$Collage$defaultLineStyle,
			{bq: dashes, bt: fill, bR: thickness});
	});
var timjs$elm_collage$Collage$solid = timjs$elm_collage$Collage$broken(_List_Nil);
var timjs$elm_collage$Collage$Core$Transparent = {$: 0};
var timjs$elm_collage$Collage$transparent = timjs$elm_collage$Collage$Core$Transparent;
var timjs$elm_collage$Collage$invisible = A2(timjs$elm_collage$Collage$solid, 0, timjs$elm_collage$Collage$transparent);
var timjs$elm_collage$Collage$Core$Shape = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
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
		return {$: 1, a: a, b: b, c: c};
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
	return {$: 3, a: a};
};
var timjs$elm_collage$Collage$circle = timjs$elm_collage$Collage$Core$Circle;
var author$project$GameView$noForm = A2(
	timjs$elm_collage$Collage$filled,
	timjs$elm_collage$Collage$uniform(the_sett$elm_color$Color$red),
	timjs$elm_collage$Collage$circle(0));
var author$project$GameView$fogT = F4(
	function (tileWidth, tileHeight, displayMode, visibility) {
		switch (visibility) {
			case 0:
				return author$project$GameView$noForm;
			case 1:
				if (displayMode.$ === 12) {
					return author$project$GameView$noForm;
				} else {
					return A2(author$project$GameView$halfFog, tileWidth, tileHeight);
				}
			case 2:
				return A2(author$project$GameView$fog, tileWidth, tileHeight);
			default:
				return A2(author$project$GameView$fog, tileWidth, tileHeight);
		}
	});
var author$project$GameView$getImgBaseDir = function (model) {
	return A2(elm$core$Maybe$withDefault, './img', model.$7);
};
var author$project$GameView$invisibilityBlanket = F4(
	function (tileWidth, tileHeight, displayMode, visibility) {
		switch (visibility) {
			case 3:
				return A2(
					timjs$elm_collage$Collage$filled,
					timjs$elm_collage$Collage$uniform(
						A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1)),
					A2(timjs$elm_collage$Collage$rectangle, tileWidth, tileHeight));
			case 0:
				return author$project$GameView$noForm;
			case 1:
				return author$project$GameView$noForm;
			default:
				return author$project$GameView$noForm;
		}
	});
var author$project$GameView$otherCharacterView = F5(
	function (character, visibility, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = function () {
			if (character.ao === 'otherYou') {
				return imgBaseDir + '/pc/right.png';
			} else {
				if (_Utils_cmp(character.af, character.ag) > -1) {
					return imgBaseDir + ('/characters/' + (elm$core$String$toLower(character.bh) + '_enlightened.png'));
				} else {
					if (_Utils_cmp(character.ae, character.al) > 0) {
						var _n0 = character.ab;
						switch (_n0) {
							case 2:
								return imgBaseDir + ('/characters/' + (elm$core$String$toLower(character.bh) + '.png'));
							case 3:
								return imgBaseDir + ('/characters/' + (elm$core$String$toLower(character.bh) + '_right.png'));
							case 0:
								return imgBaseDir + ('/characters/' + (elm$core$String$toLower(character.bh) + '.png'));
							default:
								return imgBaseDir + ('/characters/' + (elm$core$String$toLower(character.bh) + '_right.png'));
						}
					} else {
						return imgBaseDir + ('/characters/' + (elm$core$String$toLower(character.bh) + '_lowHealth.png'));
					}
				}
			}
		}();
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$playerImg = F5(
	function (player_, visibility, tileWidth, tileHeight, imgBaseDir) {
		if (!visibility) {
			var fileStr = function () {
				var _n1 = player_.ab;
				switch (_n1) {
					case 2:
						return imgBaseDir + '/pc/left.png';
					case 3:
						return imgBaseDir + '/pc/right.png';
					case 0:
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
var author$project$GameView$bookcase = F4(
	function (tileWidth, tileHeight, binfo, imgBaseDir) {
		var fileStr = binfo.cm ? (imgBaseDir + '/bookcase/bookcaseTransparent.png') : (imgBaseDir + '/bookcase/bookcase.png');
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$door = F4(
	function (doorinfo, tileWidth, tileHeight, imgBaseDir) {
		var mbFileStr = (doorinfo.cl && ((doorinfo.dP === 2) || (doorinfo.dP === 3))) ? elm$core$Maybe$Just(imgBaseDir + '/doors/doorUp_open_floorBg.png') : ((doorinfo.cl && (doorinfo.dP === 1)) ? elm$core$Maybe$Just(imgBaseDir + '/doors/doorLeft_open_floorBg.png') : ((doorinfo.cl && (!doorinfo.dP)) ? elm$core$Maybe$Just(imgBaseDir + '/doors/doorRight_open_floorBg.png') : (doorinfo.cl ? elm$core$Maybe$Just(imgBaseDir + '/floor/floor_01.png') : (_Utils_eq(
			doorinfo.c5,
			elm$core$Maybe$Just('blue')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/blueDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.c5,
			elm$core$Maybe$Just('green')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/greenDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.c5,
			elm$core$Maybe$Just('gray')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/grayDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.c5,
			elm$core$Maybe$Just('red')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/redDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.c5,
			elm$core$Maybe$Just('yellow')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/yellowDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.c5,
			elm$core$Maybe$Just('black')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/blackDoorClosed_floorBg.png') : (_Utils_eq(
			doorinfo.c5,
			elm$core$Maybe$Just('striped')) ? elm$core$Maybe$Just(imgBaseDir + '/doors/stripedDoorClosed_floorBg.png') : elm$core$Maybe$Just(imgBaseDir + '/doors/doorClosed_floorBg.png')))))))))));
		if (!mbFileStr.$) {
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
		var fileStr = function () {
			var _n0 = floorinfo.df;
			switch (_n0) {
				case 0:
					return (floorinfo.c5 === 'orange') ? (imgBaseDir + '/floor/floor_01.png') : ((floorinfo.c5 === 'black') ? (imgBaseDir + '/floor/blackfloor.png') : (imgBaseDir + '/floor/floor_01.png'));
				case 1:
					return imgBaseDir + '/grass/grass.png';
				default:
					return imgBaseDir + '/floor/transparentFloor.png';
			}
		}();
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
var author$project$GameView$lever = F5(
	function (onOffStr, bg, tileWidth, tileHeight, imgBaseDir) {
		var fileStr = ((onOffStr === 'on') || ((onOffStr === 'On') || (onOffStr === 'ON'))) ? (imgBaseDir + ('/levers/lever_' + ('on__' + (bg + '.png')))) : (imgBaseDir + ('/levers/lever_' + ('off__' + (bg + '.png'))));
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
		var fileStr = (treeinfo.ed === 'pinetree') ? (imgBaseDir + '/trees/treetopPineTree_bg.png') : (imgBaseDir + '/trees/treetopRoundTree_bg.png');
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
		var fileStr = (waterinfo.br === 'water_wall_up') ? (imgBaseDir + '/water/water_wall_up.png') : ((waterinfo.br === 'water_wall_left') ? (imgBaseDir + '/water/water_wall_left.png') : (imgBaseDir + '/water/just_water.png'));
		return A2(
			timjs$elm_collage$Collage$image,
			_Utils_Tuple2(tileWidth, tileHeight),
			fileStr);
	});
var author$project$GameView$tile = F6(
	function (currentDisplay, currentFloorId, tileWidth, tileHeight, imgBaseDir, t) {
		tile:
		while (true) {
			switch (t.$) {
				case 0:
					var floorinfo = t.a;
					return A4(author$project$GameView$floor_, floorinfo, tileWidth, tileHeight, imgBaseDir);
				case 1:
					var sinfo = t.a;
					return (_Utils_cmp(sinfo.bS, sinfo.bM) > 0) ? A4(author$project$GameView$stairs, 'up', tileWidth, tileHeight, imgBaseDir) : A4(author$project$GameView$stairs, 'down', tileWidth, tileHeight, imgBaseDir);
				case 11:
					var treeinfo = t.a;
					return A4(author$project$GameView$tree, treeinfo, tileWidth, tileHeight, imgBaseDir);
				case 2:
					var hinfo = t.a;
					return A3(author$project$GameView$hole, tileWidth, tileHeight, imgBaseDir);
				case 5:
					var binfo = t.a;
					return A4(author$project$GameView$bookcase, tileWidth, tileHeight, binfo, imgBaseDir);
				case 3:
					var wallinfo = t.a;
					return (wallinfo.dP === 'four_way') ? A4(author$project$GameView$wall, 'four_way', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'three_way_at_bottom') ? A4(author$project$GameView$wall, 'three_way_at_bottom', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'three_way_at_right') ? A4(author$project$GameView$wall, 'three_way_at_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'three_way_at_top') ? A4(author$project$GameView$wall, 'three_way_at_top', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'three_way_at_left') ? A4(author$project$GameView$wall, 'three_way_at_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'corner_top_right') ? A4(author$project$GameView$wall, 'corner_top_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'corner_top_left') ? A4(author$project$GameView$wall, 'corner_top_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'corner_bottom_right') ? A4(author$project$GameView$wall, 'corner_bottom_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'corner_bottom_left') ? A4(author$project$GameView$wall, 'corner_bottom_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'up') ? A4(author$project$GameView$wall, 'up', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'horizontal') ? A4(author$project$GameView$wall, 'horizontal', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'cul_de_sac_at_bottom') ? A4(author$project$GameView$wall, 'cul_de_sac_at_bottom', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'cul_de_sac_at_top') ? A4(author$project$GameView$wall, 'cul_de_sac_at_top', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'cul_de_sac_at_left') ? A4(author$project$GameView$wall, 'cul_de_sac_at_left', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'cul_de_sac_at_right') ? A4(author$project$GameView$wall, 'cul_de_sac_at_right', tileWidth, tileHeight, imgBaseDir) : ((wallinfo.dP === 'just_bricks') ? A4(author$project$GameView$wall, 'just_bricks', tileWidth, tileHeight, imgBaseDir) : A4(author$project$GameView$wall, 'horizontal', tileWidth, tileHeight, imgBaseDir))))))))))))))));
				case 6:
					var doorinfo = t.a;
					return A4(author$project$GameView$door, doorinfo, tileWidth, tileHeight, imgBaseDir);
				case 13:
					return A2(author$project$GameView$notileyet, tileWidth, tileHeight);
				case 7:
					var leverinfo = t.a;
					return leverinfo.bz ? A5(author$project$GameView$lever, 'on', leverinfo.b$, tileWidth, tileHeight, imgBaseDir) : A5(author$project$GameView$lever, 'off', leverinfo.b$, tileWidth, tileHeight, imgBaseDir);
				case 10:
					var waterinfo = t.a;
					return A4(author$project$GameView$water, waterinfo, tileWidth, tileHeight, imgBaseDir);
				case 12:
					var it = t.a;
					var ct = t.b;
					var $temp$currentDisplay = currentDisplay,
						$temp$currentFloorId = currentFloorId,
						$temp$tileWidth = tileWidth,
						$temp$tileHeight = tileHeight,
						$temp$imgBaseDir = imgBaseDir,
						$temp$t = it;
					currentDisplay = $temp$currentDisplay;
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
var author$project$GameView$floorTeleporterOverlay = F4(
	function (tileWidth, tileHeight, imgBaseDir, t) {
		if (!t.$) {
			var floorinfo = t.a;
			var _n1 = floorinfo.cu;
			if (!_n1.$) {
				var teleporter = _n1.a;
				var _n2 = teleporter.bQ;
				switch (_n2) {
					case 0:
						return A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_barrel_up.png');
					case 1:
						return A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/bookcase/bookcase.png');
					case 2:
						return A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_clock_up.png');
					default:
						return A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/trees/treetopPineTree.png');
				}
			} else {
				return author$project$GameView$noForm;
			}
		} else {
			return author$project$GameView$noForm;
		}
	});
var author$project$Item$getItemMapVisibility = function (item) {
	switch (item.$) {
		case 0:
			var sz = item.a;
			return 0;
		case 1:
			return 0;
		case 2:
			var kinfo = item.a;
			return 0;
		case 3:
			var i = item.a;
			return 0;
		case 4:
			return 0;
		case 5:
			var binfo = item.a;
			return binfo.a3;
		case 6:
			var binfo = item.a;
			return binfo.a3;
		case 7:
			return 0;
		case 8:
			var pinfo = item.a;
			return pinfo.a3;
		default:
			var fdescription = item.a;
			return 0;
	}
};
var author$project$GameView$viewItem = F5(
	function (item, tileWidth, tileHeight, displayMode, imgBaseDir) {
		var scaledOverlay = F3(
			function (wfactor, hfactor, thestr) {
				return A2(
					timjs$elm_collage$Collage$image,
					_Utils_Tuple2(tileWidth * wfactor, tileHeight * hfactor),
					_Utils_ap(imgBaseDir, thestr));
			});
		if (_Utils_eq(displayMode, author$project$GameModel$DisplayMap) && (author$project$Item$getItemMapVisibility(item) === 1)) {
			return author$project$GameView$noForm;
		} else {
			switch (item.$) {
				case 7:
					return A3(scaledOverlay, 0.5, 0.5, '/floor/floor_ash.png');
				case 2:
					var keyinfo = item.a;
					return A3(scaledOverlay, 0.5, 0.5, '/items/key_' + (keyinfo.aj + '.png'));
				case 3:
					var nr = item.a;
					return A3(
						scaledOverlay,
						1,
						1,
						'/items/the_key__part_' + (elm$core$String$fromInt(nr) + '__inventory.png'));
				case 5:
					var binfo = item.a;
					var _n1 = binfo.a1;
					if (_n1.$ === 1) {
						return A3(scaledOverlay, 0.6, 0.6, '/items/box_square_64.png');
					} else {
						var iSrc = _n1.a;
						return A3(scaledOverlay, 1, 1, iSrc);
					}
				case 6:
					var binfo = item.a;
					var isrc = function () {
						var _n2 = binfo.a1;
						if (!_n2.$) {
							var imgSrc = _n2.a;
							return imgSrc;
						} else {
							return 'book__transparent_bg_';
						}
					}();
					return A3(scaledOverlay, 1, 1, '/items/' + (isrc + '.png'));
				case 8:
					var paperinfo = item.a;
					var _n3 = _Utils_eq(displayMode, author$project$GameModel$DisplayMap) ? _Utils_Tuple2(1, 1) : _Utils_Tuple2(0.75, 0.75);
					var wfactor = _n3.a;
					var hfactor = _n3.b;
					return (paperinfo.a0 === 1) ? A3(scaledOverlay, wfactor, hfactor, '/items/paper_part1.png') : ((paperinfo.a0 === 2) ? A3(scaledOverlay, wfactor, hfactor, '/items/paper_part2.png') : A3(scaledOverlay, wfactor, hfactor, '/items/paper_part3.png'));
				case 9:
					var fdescription = item.a;
					return (elm$core$String$toLower(fdescription) === 'bread') ? A3(scaledOverlay, 1, 1, '/items/food_item.png') : A3(scaledOverlay, 1, 1, '/items/box.png');
				case 0:
					var ci = item.a;
					return author$project$GameView$noForm;
				case 1:
					return author$project$GameView$noForm;
				default:
					return author$project$GameView$noForm;
			}
		}
	});
var author$project$GameView$wallTeleporterOverlay = F4(
	function (wallinfo, tileWidth, tileHeight, imgBaseDir) {
		var woverlay = function () {
			var _n0 = wallinfo.cu;
			if (!_n0.$) {
				var tinfo = _n0.a;
				var _n1 = tinfo.bQ;
				switch (_n1) {
					case 0:
						return ((elm$core$String$toLower(wallinfo.dP) === 'up') || (elm$core$String$toLower(wallinfo.dP) === 'down')) ? A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_barrel_side.png') : A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_barrel_up.png');
					case 1:
						return ((elm$core$String$toLower(wallinfo.dP) === 'up') || (elm$core$String$toLower(wallinfo.dP) === 'down')) ? A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_bookcase_side.png') : A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_bookcase_up.png');
					case 2:
						return A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/walls/wall_overlay_teleporter_clock_up.png');
					default:
						return A2(
							timjs$elm_collage$Collage$image,
							_Utils_Tuple2(tileWidth, tileHeight),
							imgBaseDir + '/trees/treetopPineTree.png');
				}
			} else {
				return author$project$GameView$noForm;
			}
		}();
		return woverlay;
	});
var author$project$GameView$tileOverlay = F5(
	function (tileWidth, tileHeight, displayMode, imgBaseDir, t) {
		var teleporterOverlay = function () {
			switch (t.$) {
				case 3:
					var wallinfo = t.a;
					return A4(author$project$GameView$wallTeleporterOverlay, wallinfo, tileWidth, tileHeight, imgBaseDir);
				case 0:
					var floorinfo = t.a;
					return A4(author$project$GameView$floorTeleporterOverlay, tileWidth, tileHeight, imgBaseDir, t);
				default:
					return author$project$GameView$noForm;
			}
		}();
		var scaledOverlay = F3(
			function (wfactor, hfactor, thestr) {
				return A2(
					timjs$elm_collage$Collage$image,
					_Utils_Tuple2(tileWidth * wfactor, tileHeight * hfactor),
					_Utils_ap(imgBaseDir, thestr));
			});
		var itemOverlay = function () {
			if (!t.$) {
				var floorinfo = t.a;
				var _n4 = floorinfo.bA;
				if (!_n4.$) {
					var anitem = _n4.a;
					return A5(author$project$GameView$viewItem, anitem, tileWidth, tileHeight, displayMode, imgBaseDir);
				} else {
					return author$project$GameView$noForm;
				}
			} else {
				return author$project$GameView$noForm;
			}
		}();
		var drawingOverlay = function () {
			if (!t.$) {
				var floorinfo = t.a;
				var _n2 = floorinfo.de;
				if (!_n2.$) {
					var nr = _n2.a;
					return A3(scaledOverlay, 0.5, 0.5, '/floor/floor_landing_target.png');
				} else {
					return author$project$GameView$noForm;
				}
			} else {
				return author$project$GameView$noForm;
			}
		}();
		var converterTileOverlay = function () {
			if (t.$ === 12) {
				var it = t.a;
				var ct = t.b;
				return A5(author$project$GameView$tileOverlay, tileWidth, tileHeight, displayMode, imgBaseDir, it);
			} else {
				return _List_fromArray(
					[author$project$GameView$noForm]);
			}
		}();
		return A2(
			elm$core$List$filter,
			function (clg) {
				return !_Utils_eq(clg, author$project$GameView$noForm);
			},
			_Utils_ap(
				_List_fromArray(
					[itemOverlay, teleporterOverlay, drawingOverlay]),
				converterTileOverlay));
	});
var author$project$GameView$yScale = 64;
var elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var elm$core$Elm$JsArray$slice = _JsArray_slice;
var elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = elm$core$Elm$JsArray$length(tail);
		var notAppended = (elm$core$Array$branchFactor - elm$core$Elm$JsArray$length(builder.e)) - tailLen;
		var appended = A3(elm$core$Elm$JsArray$appendN, elm$core$Array$branchFactor, builder.e, tail);
		return (notAppended < 0) ? {
			g: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.g),
			b: builder.b + 1,
			e: A3(elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			g: A2(
				elm$core$List$cons,
				elm$core$Array$Leaf(appended),
				builder.g),
			b: builder.b + 1,
			e: elm$core$Elm$JsArray$empty
		} : {g: builder.g, b: builder.b, e: appended});
	});
var elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					elm$core$Array$Array_elm_builtin,
					len - from,
					elm$core$Array$shiftStep,
					elm$core$Elm$JsArray$empty,
					A3(
						elm$core$Elm$JsArray$slice,
						from - elm$core$Array$tailIndex(len),
						elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (!node.$) {
							var subTree = node.a;
							return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2(elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2(elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * elm$core$Array$branchFactor);
					var initialBuilder = {
						g: _List_Nil,
						b: 0,
						e: A3(
							elm$core$Elm$JsArray$slice,
							firstSlice,
							elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						elm$core$Array$builderToArray,
						true,
						A3(elm$core$List$foldl, elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = elm$core$Array$bitMask & (treeEnd >>> shift);
			var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (!_n0.$) {
				var sub = _n0.a;
				var $temp$shift = shift - elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _n0.a;
				return A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, values);
			}
		}
	});
var elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (!_n0.$) {
					var sub = _n0.a;
					var $temp$oldShift = oldShift - elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = elm$core$Array$bitMask & (endIdx >>> shift);
		var _n0 = A2(elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (!_n0.$) {
			var sub = _n0.a;
			var newSub = A3(elm$core$Array$sliceTree, shift - elm$core$Array$shiftStep, endIdx, sub);
			return (!elm$core$Elm$JsArray$length(newSub)) ? A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				elm$core$Array$SubTree(newSub),
				A3(elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3(elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3(elm$core$Elm$JsArray$slice, 0, elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = elm$core$Array$tailIndex(end);
				var depth = elm$core$Basics$floor(
					A2(
						elm$core$Basics$logBase,
						elm$core$Array$branchFactor,
						A2(elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep);
				return A4(
					elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3(elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4(elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var elm$core$Array$translateIndex = F2(
	function (index, _n0) {
		var len = _n0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2(elm$core$Array$translateIndex, to, array);
		var correctFrom = A2(elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? elm$core$Array$empty : A2(
			elm$core$Array$sliceLeft,
			correctFrom,
			A2(elm$core$Array$sliceRight, correctTo, array));
	});
var author$project$Grid$getSubGrid = F5(
	function (minCol, maxCol, minRow, maxRow, grid) {
		var txtmsg = '';
		var minRow_ = A2(elm$core$Basics$max, 0, minRow);
		var minCol_ = A2(elm$core$Basics$max, 0, minCol);
		var maxRow_ = A2(
			elm$core$Basics$max,
			minRow_,
			A2(elm$core$Basics$min, maxRow, grid.bc.ch - 1));
		var y_range = A2(elm$core$List$range, minRow_, maxRow_);
		var maxCol_ = A2(
			elm$core$Basics$max,
			minCol_,
			A2(elm$core$Basics$min, maxCol, grid.bc.cZ - 1));
		var x_range = A2(elm$core$List$range, minCol_, maxCol_);
		var subGridSize = A2(
			author$project$Grid$Size,
			elm$core$List$length(x_range),
			elm$core$List$length(y_range));
		var grid_nr_rows = elm$core$List$length(
			author$project$Grid$toList(grid));
		var getOneRow = function (rownr) {
			return A2(
				elm$core$Maybe$withDefault,
				elm$core$Array$fromList(_List_Nil),
				A2(elm$core$Array$get, rownr, grid.aH));
		};
		var therows = A2(
			elm$core$Array$map,
			function (v) {
				return getOneRow(v);
			},
			elm$core$Array$fromList(y_range));
		var theSubGrid = A2(
			elm$core$Array$map,
			function (lrow) {
				return A3(elm$core$Array$slice, minCol_, maxCol_ + 1, lrow);
			},
			therows);
		return _Utils_Tuple2(
			A2(author$project$Grid$Grid, theSubGrid, subGridSize),
			txtmsg);
	});
var timjs$elm_collage$Collage$Core$Group = function (a) {
	return {$: 5, a: a};
};
var timjs$elm_collage$Collage$group = A2(elm$core$Basics$composeL, timjs$elm_collage$Collage$Core$collage, timjs$elm_collage$Collage$Core$Group);
var timjs$elm_collage$Collage$shift = F2(
	function (_n0, collage) {
		var dx = _n0.a;
		var dy = _n0.b;
		var _n1 = collage.bL;
		var x = _n1.a;
		var y = _n1.b;
		return _Utils_update(
			collage,
			{
				bL: _Utils_Tuple2(x + dx, y + dy)
			});
	});
var elm$core$Basics$cos = _Basics_cos;
var elm$core$Basics$sin = _Basics_sin;
var timjs$elm_collage$Collage$Core$apply = function (_n0) {
	var shift = _n0.bL;
	var scale = _n0.cO;
	var rotation = _n0.cM;
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
		if (ma.$ === 1) {
			return fmb(0);
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
					col.ao));
			var firstOf = A2(
				timjs$elm_collage$Helpers$foldrLazy,
				A2(elm$core$Basics$composeL, timjs$elm_collage$Helpers$orLazy, recurse),
				elm$core$Maybe$Nothing);
			return match ? elm$core$Maybe$Just(
				anchor(col)) : A2(
				elm$core$Maybe$map,
				timjs$elm_collage$Collage$Core$apply(col),
				function () {
					var _n0 = col._;
					switch (_n0.$) {
						case 5:
							var cols = _n0.a;
							return firstOf(cols);
						case 6:
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
				ao: elm$core$Maybe$Just(string)
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
		return {$: 1, a: a, b: b};
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
	var toTop = _n0.F;
	var toBottom = _n0.C;
	var toRight = _n0.E;
	var toLeft = _n0.D;
	return _List_fromArray(
		[
			_Utils_Tuple2(-toLeft, -toBottom),
			_Utils_Tuple2(toRight, -toBottom),
			_Utils_Tuple2(toRight, toTop),
			_Utils_Tuple2(-toLeft, toTop)
		]);
};
var timjs$elm_collage$Collage$Layout$distances = function (col) {
	var points = timjs$elm_collage$Collage$Layout$handleBasic(col._);
	var _n8 = elm$core$List$unzip(
		A2(
			elm$core$List$map,
			timjs$elm_collage$Collage$Core$apply(col),
			points));
	var xs = _n8.a;
	var ys = _n8.b;
	return {
		C: -A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$minimum(ys)),
		D: -A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$minimum(xs)),
		E: A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$maximum(xs)),
		F: A2(
			elm$core$Maybe$withDefault,
			0,
			elm$core$List$maximum(ys))
	};
};
var timjs$elm_collage$Collage$Layout$handleBasic = function (basic) {
	handleBasic:
	while (true) {
		switch (basic.$) {
			case 0:
				switch (basic.b.$) {
					case 3:
						var _n1 = basic.a;
						var thickness = _n1.b.bR;
						var r = basic.b.a;
						var d = 2 * r;
						return A2(
							timjs$elm_collage$Collage$Layout$handleBox,
							thickness,
							_Utils_Tuple2(d, d));
					case 2:
						var _n2 = basic.a;
						var thickness = _n2.b.bR;
						var _n3 = basic.b;
						var rx = _n3.a;
						var ry = _n3.b;
						return A2(
							timjs$elm_collage$Collage$Layout$handleBox,
							thickness,
							_Utils_Tuple2(2 * rx, 2 * ry));
					case 1:
						var _n4 = basic.a;
						var thickness = _n4.b.bR;
						var _n5 = basic.b;
						var w = _n5.a;
						var h = _n5.b;
						return A2(
							timjs$elm_collage$Collage$Layout$handleBox,
							thickness,
							_Utils_Tuple2(w, h));
					case 0:
						var _n6 = basic.a;
						var thickness = _n6.b.bR;
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
			case 1:
				var thickness = basic.a.bR;
				var cap = basic.a.b2;
				var ps = basic.b;
				return A2(
					timjs$elm_collage$Collage$Layout$handlePoints,
					(!cap) ? 0 : thickness,
					ps);
			case 2:
				var dims = basic.a;
				return A2(timjs$elm_collage$Collage$Layout$handleBox, 0, dims);
			case 3:
				var dims = basic.a;
				return A2(timjs$elm_collage$Collage$Layout$handleBox, 0, dims);
			case 4:
				var dims = basic.a;
				return A2(timjs$elm_collage$Collage$Layout$handleBox, 0, dims);
			case 5:
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
	var toLeft = _n0.D;
	var toTop = _n0.F;
	return _Utils_Tuple2(-toLeft, toTop);
};
var author$project$GameView$mainScreen = function (model) {
	var toListMsg = function (func) {
		return function (a) {
			return _List_fromArray(
				[
					func(a)
				]);
		};
	};
	var shiftMultiple = F2(
		function (tup, lcollages) {
			return A2(
				elm$core$List$map,
				timjs$elm_collage$Collage$shift(tup),
				lcollages);
		});
	var emptyg = timjs$elm_collage$Collage$group(_List_Nil);
	var _n0 = (!_Utils_eq(model.c6, author$project$GameModel$DisplayMap)) ? _Utils_Tuple2(model.en, model.eo) : _Utils_Tuple2(0, 0);
	var viewport_topleft_x = _n0.a;
	var viewport_topleft_y = _n0.b;
	var _n1 = (!_Utils_eq(model.c6, author$project$GameModel$DisplayMap)) ? function (_n2) {
		var grid = _n2.a;
		var txt = _n2.b;
		return _Utils_Tuple2(
			A2(
				author$project$Grid$map,
				function (t) {
					return (author$project$Tile$getTileVisibility(t) === 3) ? elm$core$Maybe$Just(author$project$Tile$NoTileYet) : elm$core$Maybe$Just(t);
				},
				grid),
			txt);
	}(
		A5(author$project$Grid$getSubGrid, model.en, (model.en + model.ep) - 1, model.eo, (model.eo + model.em) - 1, model.cq)) : _Utils_Tuple2(
		A2(
			author$project$Grid$map,
			function (t) {
				return ((author$project$Tile$getTileVisibility(t) === 2) || (author$project$Tile$getTileVisibility(t) === 3)) ? elm$core$Maybe$Nothing : elm$core$Maybe$Just(t);
			},
			model.cq),
		'');
	var subgrid = _n1.a;
	var txtmsg = _n1.b;
	var _n3 = _Utils_Tuple2(subgrid.bc.cZ, subgrid.bc.ch);
	var wwidth = _n3.a;
	var wheight = _n3.b;
	var mkLayer = F2(
		function (agrid, mapRow) {
			var rows = A3(
				elm$core$List$map2,
				F2(
					function (v1, v2) {
						return _Utils_Tuple2(v1, v2);
					}),
				A2(elm$core$List$range, 0, wheight - 1),
				agrid);
			var forms = A2(elm$core$List$concatMap, mapRow, rows);
			return timjs$elm_collage$Collage$group(forms);
		});
	var yOffset = function (n) {
		return ((n - viewport_topleft_y) - (wheight / 2)) * model.d7;
	};
	var yOffset_for_subgrid = function (n) {
		return ((wheight / 2) - (n + 1)) * author$project$GameView$yScale;
	};
	var xOffset = function (n) {
		return ((n - viewport_topleft_x) - (wwidth / 2)) * model.d9;
	};
	var location = function (r) {
		return _Utils_Tuple2(
			xOffset(r.s.bk),
			0 - yOffset(r.s.bl + 1));
	};
	var fightingCharacter_ = function () {
		var relevantFightingCharactersDict = A2(
			elm$core$Dict$filter,
			F2(
				function (fcharId, fightChar) {
					return _Utils_eq(fightChar.S, model.c7) && (((_Utils_cmp(fightChar.s.bk, viewport_topleft_x) > -1) && (_Utils_cmp(fightChar.s.bk - viewport_topleft_x, model.ep) < 0)) && ((_Utils_cmp(fightChar.s.bl, viewport_topleft_y) > -1) && (_Utils_cmp(fightChar.s.bl - viewport_topleft_y, model.em) < 0)));
				}),
			model.h);
		var mkfightingCharacter = F2(
			function (fcharId, anfightingCharacter) {
				return A2(
					timjs$elm_collage$Collage$shift,
					location(anfightingCharacter),
					A5(
						author$project$GameView$fightingCharacterView,
						anfightingCharacter,
						A2(author$project$GameModel$getGridTileVisibility, anfightingCharacter.s, model.cq),
						model.d9,
						model.d7,
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
					return _Utils_eq(_char.S, model.c7) && (((_Utils_cmp(_char.s.bk, viewport_topleft_x) > -1) && (_Utils_cmp(_char.s.bk - viewport_topleft_x, model.ep) < 0)) && ((_Utils_cmp(_char.s.bl, viewport_topleft_y) > -1) && (_Utils_cmp(_char.s.bl - viewport_topleft_y, model.em) < 0)));
				}),
			model.m);
		var mkOtherChar = F2(
			function (ch_id, achar) {
				return A2(
					timjs$elm_collage$Collage$shift,
					location(achar),
					A5(
						author$project$GameView$otherCharacterView,
						achar,
						A2(author$project$GameModel$getGridTileVisibility, achar.s, model.cq),
						model.d9,
						model.d7,
						author$project$GameView$getImgBaseDir(model)));
			});
		return timjs$elm_collage$Collage$group(
			elm$core$Dict$values(
				A2(elm$core$Dict$map, mkOtherChar, relevantOtherCharsDict)));
	}();
	var ocg = (!_Utils_eq(model.c6, author$project$GameModel$DisplayMap)) ? timjs$elm_collage$Collage$group(
		_List_fromArray(
			[otherCharacters_])) : author$project$GameView$noForm;
	var player_ = A2(
		timjs$elm_collage$Collage$shift,
		location(model.v),
		A5(
			author$project$GameView$playerImg,
			model.v,
			0,
			model.d9,
			model.d7,
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
		return (n - (wwidth / 2)) * model.d9;
	};
	var row = F2(
		function (mkTile, _n7) {
			var n = _n7.a;
			var tiles = _n7.b;
			var makeTiles = function (_n6) {
				var n_ = _n6.a;
				var mbt = _n6.b;
				if (!mbt.$) {
					var t = mbt.a;
					return A2(
						shiftMultiple,
						_Utils_Tuple2(
							xOffset_for_subgrid(n_),
							yOffset_for_subgrid(n)),
						mkTile(t));
				} else {
					return _List_fromArray(
						[author$project$GameView$noForm]);
				}
			};
			var indexedTilesTuple = A3(
				elm$core$List$map2,
				F2(
					function (v1, v2) {
						return _Utils_Tuple2(v1, v2);
					}),
				A2(elm$core$List$range, 0, wwidth - 1),
				tiles);
			return A2(elm$core$List$concatMap, makeTiles, indexedTilesTuple);
		});
	var bg = function () {
		var tileAndTileOverlayFunc = function (a) {
			return _Utils_ap(
				A5(
					author$project$GameView$tileOverlay,
					model.d9,
					model.d7,
					model.c6,
					author$project$GameView$getImgBaseDir(model),
					a),
				_List_fromArray(
					[
						A6(
						author$project$GameView$tile,
						model.c6,
						model.c7,
						model.d9,
						model.d7,
						author$project$GameView$getImgBaseDir(model),
						a)
					]));
		};
		return (!_Utils_eq(model.c6, author$project$GameModel$DisplayMap)) ? A2(
			timjs$elm_collage$Collage$Layout$name,
			'background',
			timjs$elm_collage$Collage$group(
				_List_fromArray(
					[
						A2(
						mkLayer,
						author$project$Grid$toList(subgrid),
						row(
							A4(
								author$project$GameView$tileOverlay,
								model.d9,
								model.d7,
								model.c6,
								author$project$GameView$getImgBaseDir(model)))),
						A2(
						mkLayer,
						author$project$Grid$toList(subgrid),
						row(
							toListMsg(
								A5(
									author$project$GameView$tile,
									model.c6,
									model.c7,
									model.d9,
									model.d7,
									author$project$GameView$getImgBaseDir(model)))))
					]))) : A2(
			timjs$elm_collage$Collage$Layout$name,
			'background',
			timjs$elm_collage$Collage$group(
				_List_fromArray(
					[
						A2(
						mkLayer,
						author$project$Grid$toList(subgrid),
						row(
							toListMsg(
								A5(
									author$project$GameView$tile,
									model.c6,
									model.c7,
									model.d9,
									model.d7,
									author$project$GameView$getImgBaseDir(model)))))
					])));
	}();
	var pos = A2(
		elm$core$Maybe$withDefault,
		_Utils_Tuple2(-100000, -100000),
		A3(timjs$elm_collage$Collage$Layout$locate, 'background', timjs$elm_collage$Collage$Layout$topLeft, bg));
	var visibilitySubGrid = function (currentDisplay) {
		return _Utils_eq(currentDisplay, author$project$GameModel$DisplayMap) ? author$project$Grid$fromList(
			_List_fromArray(
				[_List_Nil])) : A2(
			author$project$Grid$map,
			function (t) {
				return A2(elm$core$Maybe$map, author$project$Tile$getTileVisibility, t);
			},
			subgrid);
	};
	var fogger = A2(
		mkLayer,
		author$project$Grid$toList(
			visibilitySubGrid(model.c6)),
		row(
			toListMsg(
				A3(author$project$GameView$fogT, model.d9, model.d7, model.c6))));
	var justCoverInvisibles = function (bval) {
		return bval ? A2(
			mkLayer,
			author$project$Grid$toList(
				visibilitySubGrid(model.c6)),
			row(
				toListMsg(
					A3(author$project$GameView$invisibilityBlanket, model.d9, model.d7, model.c6)))) : author$project$GameView$noForm;
	};
	var _n4 = _Utils_Tuple2(wwidth * model.d9, wheight * model.d7);
	var w = _n4.a;
	var h = _n4.b;
	return A2(
		timjs$elm_collage$Collage$Layout$name,
		'mainScreen',
		timjs$elm_collage$Collage$group(
			_List_fromArray(
				[
					_Utils_eq(model.c6, author$project$GameModel$DisplayMap) ? author$project$GameView$noForm : (model.ek ? fogger : author$project$GameView$noForm),
					A2(
					timjs$elm_collage$Collage$shift,
					_Utils_Tuple2(0, 0),
					pg),
					eg,
					ocg,
					(!_Utils_eq(model.c6, author$project$GameModel$DisplayMap)) ? bg : bg
				])));
};
var elm$core$String$fromFloat = _String_fromNumber;
var the_sett$elm_color$Color$white = A4(the_sett$elm_color$Color$rgba, 255, 255, 255, 1);
var timjs$elm_collage$Collage$Core$Text = F2(
	function (a, b) {
		return {$: 2, a: a, b: b};
	});
var timjs$elm_collage$Collage$Text$height = function (_n0) {
	var sty = _n0.a;
	return sty.bc;
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
		return {$: 0, a: a, b: b};
	});
var timjs$elm_collage$Collage$Text$color = F2(
	function (newcolor, _n0) {
		var sty = _n0.a;
		var str = _n0.b;
		return A2(
			timjs$elm_collage$Collage$Core$Chunk,
			_Utils_update(
				sty,
				{c5: newcolor}),
			str);
	});
var timjs$elm_collage$Collage$Text$None = 0;
var timjs$elm_collage$Collage$Text$Regular = 2;
var timjs$elm_collage$Collage$Text$Sansserif = {$: 1};
var timjs$elm_collage$Collage$Text$Upright = 0;
var timjs$elm_collage$Collage$Text$normal = 16;
var timjs$elm_collage$Collage$Text$defaultStyle = {c5: the_sett$elm_color$Color$black, aI: 0, cQ: 0, bc: timjs$elm_collage$Collage$Text$normal, ef: timjs$elm_collage$Collage$Text$Sansserif, es: 2};
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
							timjs$elm_collage$Collage$Text$fromString(model.v.av + (' : ' + model.v.ao)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Health: ' + elm$core$String$fromInt(model.v.ae)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Energy: ' + elm$core$String$fromInt(model.v.cc)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'mana: ' + elm$core$String$fromInt(model.v.am)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Hunger: ' + elm$core$String$fromInt(model.v.ck)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Stealth: ' + (elm$core$String$fromInt(model.v.bi) + '%')))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Armor: ' + elm$core$String$fromInt(model.v.aU)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Protection: ' + (elm$core$String$fromInt(model.v.ba) + '%')))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Coordination: ' + (elm$core$String$fromInt(model.v.aW) + '%')))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Power: ' + elm$core$String$fromInt(model.v.a9)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Initiative: ' + elm$core$String$fromInt(model.v.ah)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'viewport_topleft_x: ' + elm$core$String$fromInt(model.en)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'viewport_topleft_y: ' + elm$core$String$fromInt(model.eo)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'current_player_x : ' + elm$core$String$fromInt(model.v.s.bk)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'current_player_y : ' + elm$core$String$fromInt(model.v.s.bl)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'wall percentage : ' + elm$core$String$fromFloat(
									A2(elm$core$Maybe$withDefault, 0, model.er)))))
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
							timjs$elm_collage$Collage$Text$fromString(model.v.av + (' : ' + model.v.ao)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'Health: ' + elm$core$String$fromInt(model.v.ae)))),
						timjs$elm_collage$Collage$rendered(
						theColor(
							timjs$elm_collage$Collage$Text$fromString(
								'mana: ' + elm$core$String$fromInt(model.v.am))))
					])));
		return model.c9 ? barDebugMode : bar;
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
				model.da ? A2(author$project$GameView$sidebar, model, pos) : author$project$GameView$noForm,
				_Utils_eq(model.c6, author$project$GameModel$DisplayGameOver) ? author$project$GameView$viewGameOverOverlay(false) : (_Utils_eq(model.c6, author$project$GameModel$DisplayGameCompleted) ? author$project$GameView$viewGameOverOverlay(true) : author$project$GameView$noForm),
				author$project$GameView$mainScreen(model)
			]));
};
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$map2 = _Json_map2;
var elm$json$Json$Decode$succeed = _Json_succeed;
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
var elm$html$Html$div = _VirtualDom_node('div');
var elm$json$Json$Encode$string = _Json_wrap;
var elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			elm$json$Json$Encode$string(string));
	});
var elm$html$Html$Attributes$align = elm$html$Html$Attributes$stringProperty('align');
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
	var toTop = _n0.F;
	var toBottom = _n0.C;
	return toTop + toBottom;
};
var timjs$elm_collage$Collage$Layout$width = function (col) {
	var _n0 = timjs$elm_collage$Collage$Layout$distances(col);
	var toLeft = _n0.D;
	var toRight = _n0.E;
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
var elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
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
	switch (cap) {
		case 1:
			return 'round';
		case 2:
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
	var red = _n0.aK;
	var green = _n0.aG;
	var blue = _n0.az;
	var b = elm$core$String$fromInt(blue);
	var g = elm$core$String$fromInt(green);
	var r = elm$core$String$fromInt(red);
	return elm$core$String$concat(
		_List_fromArray(
			['rgb(', r, ',', g, ',', b, ')']));
};
var timjs$elm_collage$Collage$Render$decodeFill = function (fs) {
	if (fs.$ === 1) {
		var c = fs.a;
		return timjs$elm_collage$Collage$Render$decodeColor(c);
	} else {
		return 'none';
	}
};
var timjs$elm_collage$Collage$Render$decodeOpacity = function (c) {
	var _n0 = the_sett$elm_color$Color$toRgb(c);
	var alpha = _n0.Z;
	return elm$core$String$fromFloat(alpha);
};
var timjs$elm_collage$Collage$Render$decodeFillOpacity = function (fs) {
	if (fs.$ === 1) {
		var c = fs.a;
		return timjs$elm_collage$Collage$Render$decodeOpacity(c);
	} else {
		return '0';
	}
};
var timjs$elm_collage$Collage$Render$decodeJoin = function (join) {
	switch (join) {
		case 0:
			return 'round';
		case 1:
			return 'miter';
		default:
			return 'bevel';
	}
};
var elm$core$Basics$pi = _Basics_pi;
var timjs$elm_collage$Collage$Render$decodeTransform = function (collage) {
	var sy = elm$core$String$fromFloat(collage.cO.b);
	var sx = elm$core$String$fromFloat(collage.cO.a);
	var r = elm$core$String$fromFloat((((-collage.cM) / 2) / elm$core$Basics$pi) * 360);
	var dy = elm$core$String$fromFloat(-collage.bL.b);
	var dx = elm$core$String$fromFloat(collage.bL.a);
	return elm$core$String$concat(
		_List_fromArray(
			['translate(', dx, ',', dy, ') scale(', sx, ',', sy, ') rotate(', r, ')']));
};
var timjs$elm_collage$Collage$Render$attrs = function (collage) {
	var _n0 = collage._;
	switch (_n0.$) {
		case 1:
			var line = _n0.a;
			return _List_fromArray(
				[
					elm$svg$Svg$Attributes$stroke(
					timjs$elm_collage$Collage$Render$decodeFill(line.bt)),
					elm$svg$Svg$Attributes$strokeOpacity(
					timjs$elm_collage$Collage$Render$decodeFillOpacity(line.bt)),
					elm$svg$Svg$Attributes$strokeWidth(
					elm$core$String$fromFloat(line.bR)),
					elm$svg$Svg$Attributes$strokeLinecap(
					timjs$elm_collage$Collage$Render$decodeCap(line.b2)),
					elm$svg$Svg$Attributes$strokeLinejoin(
					timjs$elm_collage$Collage$Render$decodeJoin(line.co)),
					elm$svg$Svg$Attributes$fill('none'),
					elm$svg$Svg$Attributes$opacity(
					elm$core$String$fromFloat(collage.dM)),
					elm$svg$Svg$Attributes$transform(
					timjs$elm_collage$Collage$Render$decodeTransform(collage)),
					elm$svg$Svg$Attributes$strokeDashoffset(
					elm$core$String$fromInt(line.b7)),
					elm$svg$Svg$Attributes$strokeDasharray(
					timjs$elm_collage$Collage$Render$decodeDashing(line.bq))
				]);
		case 0:
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
					timjs$elm_collage$Collage$Render$decodeFill(line.bt)),
					elm$svg$Svg$Attributes$strokeOpacity(
					timjs$elm_collage$Collage$Render$decodeFillOpacity(line.bt)),
					elm$svg$Svg$Attributes$strokeWidth(
					elm$core$String$fromFloat(line.bR)),
					elm$svg$Svg$Attributes$strokeLinecap(
					timjs$elm_collage$Collage$Render$decodeCap(line.b2)),
					elm$svg$Svg$Attributes$strokeLinejoin(
					timjs$elm_collage$Collage$Render$decodeJoin(line.co)),
					elm$svg$Svg$Attributes$opacity(
					elm$core$String$fromFloat(collage.dM)),
					elm$svg$Svg$Attributes$transform(
					timjs$elm_collage$Collage$Render$decodeTransform(collage)),
					elm$svg$Svg$Attributes$strokeDashoffset(
					elm$core$String$fromInt(line.b7)),
					elm$svg$Svg$Attributes$strokeDasharray(
					timjs$elm_collage$Collage$Render$decodeDashing(line.bq))
				]);
		case 2:
			var _n2 = _n0.b;
			var style = _n2.a;
			var str = _n2.b;
			return _List_fromArray(
				[
					elm$svg$Svg$Attributes$fill(
					timjs$elm_collage$Collage$Render$decodeFill(
						timjs$elm_collage$Collage$Core$Uniform(style.c5))),
					elm$svg$Svg$Attributes$fontFamily(
					function () {
						var _n3 = style.ef;
						switch (_n3.$) {
							case 0:
								return 'serif';
							case 1:
								return 'sans-serif';
							case 2:
								return 'monospace';
							default:
								var name = _n3.a;
								return name;
						}
					}()),
					elm$svg$Svg$Attributes$fontSize(
					elm$core$String$fromInt(style.bc)),
					elm$svg$Svg$Attributes$fontWeight(
					function () {
						var _n4 = style.es;
						switch (_n4) {
							case 0:
								return '200';
							case 1:
								return '300';
							case 2:
								return 'normal';
							case 3:
								return '500';
							case 4:
								return '600';
							case 5:
								return 'bold';
							default:
								return '800';
						}
					}()),
					elm$svg$Svg$Attributes$fontStyle(
					function () {
						var _n5 = style.cQ;
						switch (_n5) {
							case 0:
								return 'normal';
							case 1:
								return 'normal';
							case 2:
								return 'oblique';
							default:
								return 'italic';
						}
					}()),
					elm$svg$Svg$Attributes$fontVariant(
					function () {
						var _n6 = style.cQ;
						if (_n6 === 1) {
							return 'small-caps';
						} else {
							return 'normal';
						}
					}()),
					elm$svg$Svg$Attributes$textDecoration(
					function () {
						var _n7 = style.aI;
						switch (_n7) {
							case 0:
								return 'none';
							case 1:
								return 'underline';
							case 2:
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
		var name = A2(elm$core$Maybe$withDefault, '_unnamed_', collage.ao);
		var _n0 = collage._;
		switch (_n0.$) {
			case 1:
				var style = _n0.a;
				var path = _n0.b;
				var ps = path;
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
							timjs$elm_collage$Collage$Render$events(collage.dj))),
					_List_Nil);
			case 0:
				var _n2 = _n0.a;
				var fill = _n2.a;
				var line = _n2.b;
				var shape = _n0.b;
				switch (shape.$) {
					case 0:
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
									timjs$elm_collage$Collage$Render$events(collage.dj))),
							_List_Nil);
					case 3:
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
									timjs$elm_collage$Collage$Render$events(collage.dj))),
							_List_Nil);
					case 2:
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
									timjs$elm_collage$Collage$Render$events(collage.dj))),
							_List_Nil);
					case 1:
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
										timjs$elm_collage$Collage$Render$events(collage.dj)))),
							_List_Nil);
					default:
						var path = shape.a;
						var $temp$collage = _Utils_update(
							collage,
							{
								_: A2(timjs$elm_collage$Collage$Core$Path, line, path)
							});
						collage = $temp$collage;
						continue render;
				}
			case 2:
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
							timjs$elm_collage$Collage$Render$events(collage.dj))),
					_List_fromArray(
						[
							elm$svg$Svg$text(str)
						]));
			case 3:
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
								timjs$elm_collage$Collage$Render$events(collage.dj)))),
					_List_Nil);
			case 4:
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
								timjs$elm_collage$Collage$Render$events(collage.dj)))),
					_List_fromArray(
						[html]));
			case 5:
				var collages = _n0.a;
				return A2(
					elm$svg$Svg$g,
					A2(
						elm$core$List$cons,
						elm$svg$Svg$Attributes$id(name),
						_Utils_ap(
							timjs$elm_collage$Collage$Render$attrs(collage),
							timjs$elm_collage$Collage$Render$events(collage.dj))),
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
						_: timjs$elm_collage$Collage$Core$Group(
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
var author$project$GameView$viewChangingFloors = F3(
	function (fromFloorId, toFloorId, model) {
		var upOrDown = (_Utils_cmp(toFloorId, fromFloorId) > 0) ? 'up' : 'down';
		var rendermsg = function (ltxt) {
			return A2(
				elm$core$List$indexedMap,
				F2(
					function (i, elem) {
						return A2(
							timjs$elm_collage$Collage$shift,
							_Utils_Tuple2(0, 150 - (i * 30)),
							elem);
					}),
				A2(
					elm$core$List$map,
					function (x) {
						return timjs$elm_collage$Collage$rendered(
							A2(
								timjs$elm_collage$Collage$Text$color,
								the_sett$elm_color$Color$white,
								timjs$elm_collage$Collage$Text$fromString(x)));
					},
					ltxt));
		};
		var floorName = A2(
			elm$core$Maybe$withDefault,
			'Floor ' + elm$core$String$fromInt(toFloorId),
			model.dG);
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					timjs$elm_collage$Collage$Render$svg(
					timjs$elm_collage$Collage$group(
						A2(
							elm$core$List$concatMap,
							elm$core$Basics$identity,
							_List_fromArray(
								[
									_Utils_ap(
									rendermsg(
										_List_fromArray(
											[upOrDown + ' to ', floorName])),
									_List_fromArray(
										[
											A2(
											timjs$elm_collage$Collage$shift,
											_Utils_Tuple2(0, 100),
											A2(
												timjs$elm_collage$Collage$filled,
												timjs$elm_collage$Collage$uniform(
													A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1)),
												A2(timjs$elm_collage$Collage$rectangle, model.ep * model.d9, model.em * model.d7)))
										]))
								]))))
				]));
	});
var author$project$GameUpdate$TeleportPlayerTo = function (a) {
	return {$: 8, a: a};
};
var elm$html$Html$br = _VirtualDom_node('br');
var elm$html$Html$button = _VirtualDom_node('button');
var elm$html$Html$img = _VirtualDom_node('img');
var elm$html$Html$table = _VirtualDom_node('table');
var elm$html$Html$tbody = _VirtualDom_node('tbody');
var elm$html$Html$td = _VirtualDom_node('td');
var elm$html$Html$text = elm$virtual_dom$VirtualDom$text;
var elm$html$Html$thead = _VirtualDom_node('thead');
var elm$html$Html$tr = _VirtualDom_node('tr');
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
var elm$html$Html$Events$onClick = function (msg) {
	return A2(
		elm$html$Html$Events$on,
		'click',
		elm$json$Json$Decode$succeed(msg));
};
var author$project$GameView$viewChooseTeleporterDestination = F2(
	function (lLocTelInfo, model) {
		var sortedTeleporterInfos = A2(
			elm$core$List$sortBy,
			function (rec) {
				return rec.Q.bk;
			},
			lLocTelInfo);
		var imgBaseDir = author$project$GameView$getImgBaseDir(model);
		var theImg = function (locTelinfo) {
			var _n0 = locTelinfo.d4.bQ;
			switch (_n0) {
				case 2:
					return imgBaseDir + '/walls/wall_overlay_teleporter_clock_up.png';
				case 0:
					return imgBaseDir + '/walls/wall_overlay_teleporter_barrel_up.png';
				case 1:
					return imgBaseDir + '/walls/wall_overlay_teleporter_bookcase_up.png';
				default:
					return imgBaseDir + '/trees/treetopPineTree.png';
			}
		};
		return A2(
			elm$html$Html$div,
			_List_Nil,
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
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							elm$html$Html$text(
							'Which of the following ' + (elm$core$String$fromInt(
								elm$core$List$length(sortedTeleporterInfos)) + ' secret passages do you want to take : '))
						])),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(
					elm$html$Html$div,
					_List_fromArray(
						[
							elm$html$Html$Attributes$align('center')
						]),
					_List_fromArray(
						[
							A2(
							elm$html$Html$table,
							_List_Nil,
							_List_fromArray(
								[
									A2(elm$html$Html$thead, _List_Nil, _List_Nil),
									A2(
									elm$html$Html$tbody,
									_List_Nil,
									_List_fromArray(
										[
											A2(
											elm$html$Html$tr,
											_List_Nil,
											A2(
												elm$core$List$concatMap,
												function (locTelInfo) {
													return _List_fromArray(
														[
															A2(
															elm$html$Html$td,
															_List_Nil,
															_List_fromArray(
																[
																	A2(
																	elm$html$Html$button,
																	_List_fromArray(
																		[
																			A2(elm$html$Html$Attributes$style, 'width', '400'),
																			elm$html$Html$Events$onClick(
																			author$project$GameUpdate$TeleportPlayerTo(locTelInfo))
																		]),
																	_List_fromArray(
																		[
																			A2(elm$html$Html$br, _List_Nil, _List_Nil),
																			A2(
																			elm$html$Html$img,
																			_List_fromArray(
																				[
																					elm$html$Html$Attributes$width(50),
																					elm$html$Html$Attributes$height(50),
																					elm$html$Html$Attributes$src(
																					theImg(locTelInfo))
																				]),
																			_List_Nil),
																			A2(elm$html$Html$br, _List_Nil, _List_Nil),
																			elm$html$Html$text('     ' + (locTelInfo.d4.d5 + '     ')),
																			A2(elm$html$Html$br, _List_Nil, _List_Nil)
																		])),
																	A2(elm$html$Html$br, _List_Nil, _List_Nil)
																]))
														]);
												},
												sortedTeleporterInfos))
										]))
								]))
						]))
				]));
	});
var author$project$Grid$getRowOrEmptyList = F2(
	function (n, grid) {
		var _n0 = A2(elm$core$Array$get, n, grid.aH);
		if (!_n0.$) {
			var r = _n0.a;
			return elm$core$Array$toList(r);
		} else {
			return _List_Nil;
		}
	});
var author$project$Grid$getRow = F2(
	function (n, grid) {
		return (n < 0) ? _List_Nil : ((_Utils_cmp(n, grid.bc.ch) > -1) ? _List_Nil : A2(author$project$Grid$getRowOrEmptyList, n, grid));
	});
var author$project$Thorns$Types$DoActivate = F2(
	function (a, b) {
		return {$: 5, a: a, b: b};
	});
var author$project$Thorns$Types$MouseOut = F2(
	function (a, b) {
		return {$: 7, a: a, b: b};
	});
var author$project$Thorns$Types$MouseOver = F2(
	function (a, b) {
		return {$: 6, a: a, b: b};
	});
var author$project$Thorns$View$getImgBaseDir = function (model) {
	return A2(elm$core$Maybe$withDefault, './img', model.$7);
};
var author$project$Thorns$ThornGrid$thornToString = function (thorn) {
	switch (thorn) {
		case 0:
			return '+ ';
		case 1:
			return '- ';
		case 2:
			return '* ';
		default:
			return '/ ';
	}
};
var author$project$Thorns$View$mbthornToString = function (mbthorn) {
	if (mbthorn.$ === 1) {
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
var author$project$Beings$Beings$DecreaseIndexOfLight = 2;
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
						'Your Health : ' + elm$core$String$fromInt(model.v.ae)),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						elm$html$Html$text(
						'Your Mana : ' + elm$core$String$fromInt(model.v.am))
					])),
				function () {
				var _n0 = model.dO;
				if (!_n0.$) {
					if (!_n0.a.$) {
						var opponent = _n0.a.a;
						return A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									A2(elm$html$Html$br, _List_Nil, _List_Nil),
									elm$html$Html$text(
									'Your Opponent\'s health : ' + elm$core$String$fromInt(opponent.ae)),
									A2(elm$html$Html$br, _List_Nil, _List_Nil),
									((model.v.ad === 1) || (model.v.ad === 2)) ? elm$html$Html$text(
									'Your Opponent\'s Index of Light : ' + elm$core$String$fromInt(opponent.af)) : elm$html$Html$text('')
								]));
					} else {
						var opponent = _n0.a.a;
						return A2(
							elm$html$Html$div,
							_List_Nil,
							_List_fromArray(
								[
									elm$html$Html$text(
									'Your Opponent\'s health : ' + elm$core$String$fromInt(opponent.ae)),
									((model.v.ad === 1) || (model.v.ad === 2)) ? elm$html$Html$text(
									'Your Opponent\'s Index of Light : ' + elm$core$String$fromInt(opponent.af)) : elm$html$Html$text('')
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
				A2(elm$core$Maybe$withDefault, '', model.ci))
			]));
};
var elm$html$Html$a = _VirtualDom_node('a');
var elm$html$Html$h3 = _VirtualDom_node('h3');
var elm$html$Html$span = _VirtualDom_node('span');
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
		if (!oppo.$) {
			var fchar = oppo.a;
			return fchar.bh;
		} else {
			var ochar = oppo.a;
			return ochar.bh;
		}
	};
	var lrownrs = A2(
		elm$core$List$range,
		0,
		function (g) {
			return g.bc.ch;
		}(model.cf));
	var lrows = A2(
		elm$core$List$map,
		function (nr) {
			return A2(author$project$Grid$getRow, nr, model.cf);
		},
		lrownrs);
	var lcoords = author$project$Grid$toCoordinates(model.cf);
	var imgBaseDir = author$project$Thorns$View$getImgBaseDir(model);
	var getAttr = F2(
		function (rownr, colnr) {
			return A2(
				elm$core$List$member,
				A2(author$project$Grid$Coordinate, colnr, rownr),
				model.b6) ? _Utils_Tuple2(
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
								var _n0 = model.dO;
								if (!_n0.$) {
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
				author$project$Thorns$View$view(model.di))
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
				elm$html$Html$text('Use Q (up) , A (down) , O (left) , P (right ) ,  or Arrow keys , to move '),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('U to pick up items'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('I for inventory'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('S for Stats'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('E for Opponent Report '),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('F to turn fog on and off'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('M for map ( use with caution - algo is still being optimized - right now it takes about 3 secs to render the map ) '),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('and H for Help'),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				A2(elm$html$Html$br, _List_Nil, _List_Nil),
				elm$html$Html$text('Press H to leave Help Screen')
			]));
};
var author$project$Item$getItemDescription = function (item) {
	switch (item.$) {
		case 0:
			var s = item.a;
			return elm$core$Maybe$Nothing;
		case 1:
			return elm$core$Maybe$Nothing;
		case 2:
			var kinfo = item.a;
			return elm$core$Maybe$Nothing;
		case 3:
			var nr = item.a;
			return elm$core$Maybe$Just('');
		case 4:
			return elm$core$Maybe$Nothing;
		case 5:
			var binfo = item.a;
			return elm$core$Maybe$Nothing;
		case 6:
			var binfo = item.a;
			return elm$core$Maybe$Just(binfo.br);
		case 7:
			return elm$core$Maybe$Nothing;
		case 8:
			var paperinfo = item.a;
			return elm$core$Maybe$Just(paperinfo.br);
		default:
			var fdescription = item.a;
			return elm$core$Maybe$Just(fdescription);
	}
};
var author$project$Item$getItemWrittenContent = function (item) {
	switch (item.$) {
		case 0:
			var s = item.a;
			return _List_Nil;
		case 1:
			return _List_Nil;
		case 2:
			var kinfo = item.a;
			return _List_Nil;
		case 3:
			var nr = item.a;
			return _List_Nil;
		case 4:
			return _List_Nil;
		case 5:
			var binfo = item.a;
			return _List_Nil;
		case 6:
			var binfo = item.a;
			return (elm$core$List$length(binfo.bW) > 0) ? _Utils_ap(
				_List_fromArray(
					['some passages have been underlined by a previous reader : ']),
				binfo.bW) : _List_Nil;
		case 7:
			return _List_Nil;
		case 8:
			var paperinfo = item.a;
			return _List_Nil;
		default:
			var fdescription = item.a;
			return _List_Nil;
	}
};
var author$project$Item$itemToImgSrc = F2(
	function (item, bvalDetails) {
		switch (item.$) {
			case 2:
				var keyInfo = item.a;
				return '/items/key_' + (keyInfo.aj + '_inventory.png');
			case 3:
				var nr = item.a;
				return '/items/the_key__part_' + (elm$core$String$fromInt(nr) + '__inventory.png');
			case 8:
				var paperInfo = item.a;
				var _n1 = paperInfo.a1;
				if (!_n1.$) {
					var imgSrc = _n1.a;
					return '/items/paper_part' + (imgSrc + '.png');
				} else {
					return '/items/paper_part' + (elm$core$String$fromInt(paperInfo.a0) + '.png');
				}
			case 6:
				var binfo = item.a;
				if (bvalDetails) {
					var _n2 = binfo.bx;
					if (!_n2.$) {
						var isrcD = _n2.a;
						return '/items/' + (isrcD + '.png');
					} else {
						return '/items/open_book__transparent_bg_.png';
					}
				} else {
					var _n3 = binfo.a1;
					if (!_n3.$) {
						var isrc = _n3.a;
						return '/items/' + (isrc + '.png');
					} else {
						return '/items/book__transparent_bg_.png';
					}
				}
			default:
				return '';
		}
	});
var elm$html$Html$Attributes$size = function (n) {
	return A2(
		_VirtualDom_attribute,
		'size',
		elm$core$String$fromInt(n));
};
var author$project$GameView$viewInventory = F2(
	function (bvalDetails, model) {
		var top = A2(
			elm$html$Html$h3,
			_List_Nil,
			_List_fromArray(
				[
					elm$html$Html$text('Inventory : ')
				]));
		var theColor = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$white);
		var detailsTextList = function (it) {
			return bvalDetails ? _Utils_ap(
				_List_fromArray(
					[
						elm$html$Html$text(
						author$project$Item$itemToString(it)),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						elm$html$Html$text(
						A2(
							elm$core$Maybe$withDefault,
							'',
							author$project$Item$getItemDescription(it))),
						A2(elm$html$Html$br, _List_Nil, _List_Nil)
					]),
				A2(
					elm$core$List$concatMap,
					function (x) {
						return _List_fromArray(
							[
								elm$html$Html$text(x),
								A2(elm$html$Html$br, _List_Nil, _List_Nil)
							]);
					},
					author$project$Item$getItemWrittenContent(it))) : _List_Nil;
		};
		var thelist = A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			A2(
				elm$core$List$concatMap,
				function (it) {
					return _List_fromArray(
						[
							A2(
							elm$html$Html$a,
							_List_fromArray(
								[
									elm$html$Html$Events$onClick(author$project$GameUpdate$ToggleShowInventoryDetails)
								]),
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
												A2(author$project$Item$itemToImgSrc, it, bvalDetails)))
										]),
									_List_Nil)
								])),
							A2(
							elm$html$Html$div,
							_List_Nil,
							detailsTextList(it)),
							A2(elm$html$Html$br, _List_Nil, _List_Nil)
						]);
				},
				elm$core$Dict$values(model.v.ai)));
		var detailsOrNoDetails = (!bvalDetails) ? A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Press D for Inventory details'),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(elm$html$Html$br, _List_Nil, _List_Nil)
				])) : A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					elm$html$Html$text('Press D for simple Inventory'),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(elm$html$Html$br, _List_Nil, _List_Nil)
				]));
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					top,
					detailsOrNoDetails,
					thelist,
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					A2(elm$html$Html$br, _List_Nil, _List_Nil),
					elm$html$Html$text('Press I to leave Inventory')
				]));
	});
var author$project$GameView$viewLoadingGame = F5(
	function (model, gameNr, gname, imgStr, imgBaseDir) {
		var theColor = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$white);
		var fileStr = _Utils_ap(imgBaseDir, imgStr);
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
							elm$html$Html$text('Loading ' + (gname + ' ! '))
						])),
					timjs$elm_collage$Collage$Render$svg(
					timjs$elm_collage$Collage$group(
						_List_fromArray(
							[
								A2(
								timjs$elm_collage$Collage$shift,
								_Utils_Tuple2(0, 0),
								timjs$elm_collage$Collage$rendered(
									theColor(
										timjs$elm_collage$Collage$Text$fromString('Loading ' + (gname + ' ! Please Wait ... '))))),
								A2(
								timjs$elm_collage$Collage$image,
								_Utils_Tuple2((model.ep * model.d9) * 1.03, (model.em * model.d7) * 1.03),
								fileStr)
							])))
				]));
	});
var author$project$Tile$hasMapVisibleItem = function (tile) {
	if (!tile.$) {
		var finfo = tile.a;
		var _n1 = finfo.bA;
		if (!_n1.$) {
			var anitem = _n1.a;
			return author$project$Item$getItemMapVisibility(anitem) !== 1;
		} else {
			return false;
		}
	} else {
		return false;
	}
};
var author$project$GameView$viewMap = function (model) {
	var yOffset = function (n) {
		return ((n - 0) - (model.eb / 2)) * model.d7;
	};
	var xOffset = function (n) {
		return ((n - 0) - (model.ec / 2)) * model.d9;
	};
	var shiftMultiple = F2(
		function (tup, lcollages) {
			return A2(
				elm$core$List$map,
				timjs$elm_collage$Collage$shift(tup),
				lcollages);
		});
	var tileAndTileOverlayFunc = function (_n3) {
		var coords = _n3.a;
		var thetile = _n3.b;
		return A2(
			shiftMultiple,
			_Utils_Tuple2(
				xOffset(coords.bk),
				function (y) {
					return y * (-1);
				}(
					yOffset(coords.bl + 1))),
			_Utils_ap(
				A5(
					author$project$GameView$tileOverlay,
					model.d9,
					model.d7,
					author$project$GameModel$DisplayMap,
					author$project$GameView$getImgBaseDir(model),
					thetile),
				_List_fromArray(
					[
						A6(
						author$project$GameView$tile,
						model.c6,
						model.c7,
						model.d9,
						model.d7,
						author$project$GameView$getImgBaseDir(model),
						thetile)
					])));
	};
	var playerMapImgWidth = model.d9 * 6;
	var playerMapImgHeight = model.d7 * 6;
	var mapBg = _List_fromArray(
		[
			A2(
			timjs$elm_collage$Collage$filled,
			timjs$elm_collage$Collage$uniform(
				A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1)),
			A2(timjs$elm_collage$Collage$rectangle, model.ec * model.d9, model.eb * model.d7))
		]);
	var location = function (r) {
		return _Utils_Tuple2(
			xOffset(r.s.bk),
			0 - yOffset(r.s.bl));
	};
	var player_ = A2(
		timjs$elm_collage$Collage$shift,
		location(model.v),
		A5(
			author$project$GameView$playerImg,
			model.v,
			0,
			playerMapImgWidth,
			playerMapImgHeight,
			author$project$GameView$getImgBaseDir(model)));
	var convertIndexToGridCoords = function (idx) {
		return A2(author$project$Grid$coordsFor, idx, model.cq);
	};
	var itemTilesRegardlessOfTileVisibility = function (bval) {
		return bval ? A2(
			elm$core$List$filter,
			function (_n2) {
				var coords = _n2.a;
				var t = _n2.b;
				return author$project$Tile$hasMapVisibleItem(t);
			},
			A2(
				elm$core$List$indexedMap,
				F2(
					function (i, t) {
						return _Utils_Tuple2(
							convertIndexToGridCoords(i),
							t);
					}),
				A2(
					elm$core$List$concatMap,
					elm$core$Basics$identity,
					author$project$Grid$toList(model.cq)))) : _List_Nil;
	};
	var clearlyVisibleOrExploredVisibleTiles = function (t) {
		return (author$project$Tile$getTileVisibility(t) === 1) || (!author$project$Tile$getTileVisibility(t));
	};
	var allTilesExceptNoTileYet = function (bval) {
		return bval ? A2(
			elm$core$List$filter,
			function (_n1) {
				var coords = _n1.a;
				var t = _n1.b;
				return !author$project$Tile$isNoTileYet(t);
			},
			A2(
				elm$core$List$filter,
				function (_n0) {
					var coords = _n0.a;
					var t = _n0.b;
					return clearlyVisibleOrExploredVisibleTiles(t);
				},
				A2(
					elm$core$List$indexedMap,
					F2(
						function (i, t) {
							return _Utils_Tuple2(
								convertIndexToGridCoords(i),
								t);
						}),
					A2(
						elm$core$List$concatMap,
						elm$core$Basics$identity,
						author$project$Grid$toList(model.cq))))) : _List_Nil;
	};
	var itemsAndAlmostAllTilesImgs = F2(
		function (bvalItems, bvalAlmostAll) {
			return timjs$elm_collage$Collage$group(
				A2(
					elm$core$List$concatMap,
					function (di) {
						return tileAndTileOverlayFunc(di);
					},
					_Utils_ap(
						itemTilesRegardlessOfTileVisibility(bvalItems),
						allTilesExceptNoTileYet(bvalAlmostAll))));
		});
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$align('center')
			]),
		_List_fromArray(
			[
				elm$html$Html$text('Press M to leave Map '),
				timjs$elm_collage$Collage$Render$svg(
				timjs$elm_collage$Collage$group(
					_Utils_ap(
						_List_fromArray(
							[
								player_,
								A2(itemsAndAlmostAllTilesImgs, true, true)
							]),
						mapBg)))
			]));
};
var author$project$GameView$viewMovingThroughFloor = F2(
	function (floorId, model) {
		var rendermsg = function (ltxt) {
			return A2(
				elm$core$List$indexedMap,
				F2(
					function (i, elem) {
						return A2(
							timjs$elm_collage$Collage$shift,
							_Utils_Tuple2(0, 150 - (i * 30)),
							elem);
					}),
				A2(
					elm$core$List$map,
					function (x) {
						return timjs$elm_collage$Collage$rendered(
							A2(
								timjs$elm_collage$Collage$Text$color,
								the_sett$elm_color$Color$white,
								timjs$elm_collage$Collage$Text$fromString(x)));
					},
					ltxt));
		};
		return A2(
			elm$html$Html$div,
			_List_fromArray(
				[
					elm$html$Html$Attributes$align('center')
				]),
			_List_fromArray(
				[
					timjs$elm_collage$Collage$Render$svg(
					timjs$elm_collage$Collage$group(
						A2(
							elm$core$List$concatMap,
							elm$core$Basics$identity,
							_List_fromArray(
								[
									_Utils_ap(
									rendermsg(
										_List_fromArray(
											['secret passage ... '])),
									_List_fromArray(
										[
											A2(
											timjs$elm_collage$Collage$shift,
											_Utils_Tuple2(0, 100),
											A2(
												timjs$elm_collage$Collage$filled,
												timjs$elm_collage$Collage$uniform(
													A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1)),
												A2(timjs$elm_collage$Collage$rectangle, model.ep * model.d9, model.em * model.d7)))
										]))
								]))))
				]));
	});
var author$project$GameView$getCommentRegardingOpponentHealth = function (fightChar) {
	return (_Utils_cmp(fightChar.ae, fightChar.al) < 1) ? _List_fromArray(
		[
			elm$html$Html$text('his/her health is not that good. you should really pay attention to that'),
			A2(elm$html$Html$br, _List_Nil, _List_Nil)
		]) : _List_fromArray(
		[
			elm$html$Html$text('')
		]);
};
var author$project$GameView$getCommentRegardingOpponentIndexOfLight = function (fightChar) {
	return (_Utils_cmp(fightChar.af, fightChar.ag) > -1) ? _List_fromArray(
		[
			elm$html$Html$text('he/she has become non-violent !')
		]) : _List_fromArray(
		[
			elm$html$Html$text('')
		]);
};
var author$project$GameView$viewOpponentReport = function (model) {
	var nrOfNonHealthyOpponents = elm$core$List$length(
		A2(
			elm$core$List$filter,
			function (x) {
				return x;
			},
			A2(
				elm$core$List$map,
				function (fightChar_) {
					return _Utils_cmp(fightChar_.ae, fightChar_.al) < 1;
				},
				elm$core$Dict$values(model.h))));
	var fileStr = function (fightChar) {
		return (_Utils_cmp(fightChar.af, fightChar.ag) > -1) ? (author$project$GameView$getImgBaseDir(model) + ('/characters/' + (elm$core$String$toLower(fightChar.bh) + '_enlightened.png'))) : ((_Utils_cmp(fightChar.ae, fightChar.al) > 0) ? (author$project$GameView$getImgBaseDir(model) + ('/characters/' + (elm$core$String$toLower(fightChar.bh) + '.png'))) : (author$project$GameView$getImgBaseDir(model) + ('/characters/' + (elm$core$String$toLower(fightChar.bh) + '_lowHealth.png'))));
	};
	var fcharLine = function (fightChar) {
		return _Utils_ap(
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
							'    ,    health : ' + (elm$core$String$fromInt(fightChar.ae) + ('  ,     Index Of non-violence : ' + elm$core$String$fromInt(fightChar.af)))),
							A2(elm$html$Html$br, _List_Nil, _List_Nil)
						]))
				]),
			fightChar.cg ? _List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_Nil,
					_Utils_ap(
						_List_fromArray(
							[
								elm$html$Html$text('you have faced him in a Game of Thorns Challenge previously. '),
								A2(elm$html$Html$br, _List_Nil, _List_Nil)
							]),
						_Utils_ap(
							author$project$GameView$getCommentRegardingOpponentHealth(fightChar),
							_Utils_ap(
								author$project$GameView$getCommentRegardingOpponentIndexOfLight(fightChar),
								_List_fromArray(
									[
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(elm$html$Html$br, _List_Nil, _List_Nil),
										A2(elm$html$Html$br, _List_Nil, _List_Nil)
									])))))
				]) : _List_fromArray(
				[
					A2(
					elm$html$Html$span,
					_List_Nil,
					_List_fromArray(
						[
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil),
							A2(elm$html$Html$br, _List_Nil, _List_Nil)
						]))
				]));
	};
	return A2(
		elm$html$Html$div,
		_List_fromArray(
			[
				elm$html$Html$Attributes$align('center')
			]),
		_Utils_ap(
			_List_fromArray(
				[
					A2(
					elm$html$Html$h3,
					_List_Nil,
					_List_fromArray(
						[
							elm$html$Html$text('Opponent Report :')
						])),
					A2(elm$html$Html$br, _List_Nil, _List_Nil)
				]),
			_Utils_ap(
				(nrOfNonHealthyOpponents > 0) ? _List_fromArray(
					[
						elm$html$Html$text('You will probably not be able to walk on water at this point ... '),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil)
					]) : _List_fromArray(
					[
						elm$html$Html$text('')
					]),
				_List_fromArray(
					[
						A2(
						elm$html$Html$div,
						_List_Nil,
						A2(
							elm$core$List$concatMap,
							function (fightChar_) {
								return fcharLine(fightChar_);
							},
							elm$core$Dict$values(model.h))),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						elm$html$Html$text('Press E to leave Opponent Report')
					]))));
};
var author$project$GameUpdate$AboutToStartGameNr = F3(
	function (a, b, c) {
		return {$: 13, a: a, b: b, c: c};
	});
var author$project$GameView$viewStartMenuChoices = F2(
	function (model, imgBaseDir) {
		var showRandomGame = false;
		var showMazeGame = false;
		var randomGame = (!showRandomGame) ? _List_Nil : _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(
						elm$html$Html$a,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								A3(author$project$GameUpdate$AboutToStartGameNr, 1, 'Random Dungeon Game', '/game/randomDungeonGame.png'))
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Start - Random Dungeon Game')
							])),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(
						elm$html$Html$a,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								A3(author$project$GameUpdate$AboutToStartGameNr, 1, 'Random Dungeon Game', '/game/randomDungeonGame.png'))
							]),
						_List_fromArray(
							[
								A2(
								elm$html$Html$img,
								_List_fromArray(
									[
										elm$html$Html$Attributes$src(imgBaseDir + '/game/randomDungeonGame.png')
									]),
								_List_Nil)
							]))
					]))
			]);
		var mazeGame = (!showMazeGame) ? _List_Nil : _List_fromArray(
			[
				A2(
				elm$html$Html$h3,
				_List_Nil,
				_List_fromArray(
					[
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(elm$html$Html$br, _List_Nil, _List_Nil),
						A2(
						elm$html$Html$a,
						_List_fromArray(
							[
								elm$html$Html$Events$onClick(
								A3(author$project$GameUpdate$AboutToStartGameNr, 3, 'Maze Path Finding', ''))
							]),
						_List_fromArray(
							[
								elm$html$Html$text('Start - Example Maze Game')
							]))
					]))
			]);
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
					_Utils_ap(
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
												A3(author$project$GameUpdate$AboutToStartGameNr, 2, 'Castle of Elm Tribulations', '/game/casteleOfElmTribulations_.png'))
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
												A3(author$project$GameUpdate$AboutToStartGameNr, 2, 'Castle of Elm Tribulations', '/game/casteleOfElmTribulations_.png'))
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
							]),
						_Utils_ap(mazeGame, randomGame)))
				]));
	});
var author$project$GameView$view = function (model) {
	var _n0 = model.d_;
	if (!_n0) {
		return A2(
			author$project$GameView$viewStartMenuChoices,
			model,
			author$project$GameView$getImgBaseDir(model));
	} else {
		return A2(
			elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					function () {
					var _n1 = model.c6;
					switch (_n1.$) {
						case 3:
							return author$project$GameView$viewGameOfThorns(model);
						case 4:
							return author$project$GameView$viewOpponentReport(model);
						case 6:
							var bvalDetails = _n1.a;
							return A2(author$project$GameView$viewInventory, bvalDetails, model);
						case 5:
							return author$project$GameView$viewHelpMode(model);
						case 11:
							var nr = _n1.a;
							var gname = _n1.b;
							var imgStr = _n1.c;
							return A5(
								author$project$GameView$viewLoadingGame,
								model,
								nr,
								gname,
								imgStr,
								author$project$GameView$getImgBaseDir(model));
						case 7:
							var fromFloorId = _n1.a;
							var toFloorId = _n1.b;
							return A3(author$project$GameView$viewChangingFloors, fromFloorId, toFloorId, model);
						case 8:
							var floorId = _n1.a;
							return A2(author$project$GameView$viewMovingThroughFloor, floorId, model);
						case 9:
							var lloctelInfo = _n1.a;
							return A2(author$project$GameView$viewChooseTeleporterDestination, lloctelInfo, model);
						case 10:
							var theColor = timjs$elm_collage$Collage$Text$color(the_sett$elm_color$Color$white);
							return A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$align('center')
									]),
								_List_fromArray(
									[
										timjs$elm_collage$Collage$Render$svg(
										timjs$elm_collage$Collage$group(
											A2(
												elm$core$List$concatMap,
												elm$core$Basics$identity,
												_List_fromArray(
													[
														_Utils_ap(
														A2(
															elm$core$List$indexedMap,
															F2(
																function (i, elem) {
																	return A2(
																		timjs$elm_collage$Collage$shift,
																		_Utils_Tuple2(0, 150 - (i * 25)),
																		elem);
																}),
															_List_fromArray(
																[
																	timjs$elm_collage$Collage$rendered(
																	theColor(
																		timjs$elm_collage$Collage$Text$fromString('rendering map ... (be patient , it might take a few seconds ... ): ')))
																])),
														_List_fromArray(
															[
																A2(
																timjs$elm_collage$Collage$shift,
																_Utils_Tuple2(0, 100),
																A2(
																	timjs$elm_collage$Collage$filled,
																	timjs$elm_collage$Collage$uniform(
																		A4(the_sett$elm_color$Color$rgba, 0, 0, 0, 1)),
																	A2(timjs$elm_collage$Collage$rectangle, model.ep * model.d9, model.em * model.d7)))
															]))
													]))))
									]));
						case 12:
							return author$project$GameView$viewMap(model);
						default:
							return A2(
								elm$html$Html$div,
								_List_fromArray(
									[
										elm$html$Html$Attributes$align('center')
									]),
								_List_fromArray(
									[
										timjs$elm_collage$Collage$Render$svg(
										author$project$GameView$display(model))
									]));
					}
				}()
				]));
	}
};
var author$project$GameDefinitions$Common$square_room_side_ = 7;
var author$project$GameDefinitions$Common$cParams = {bn: 4, aA: 1, bo: 4, aB: 1, z: 1, bd: author$project$GameDefinitions$Common$square_room_side_ - 2, be: author$project$GameDefinitions$Common$square_room_side_, bf: author$project$GameDefinitions$Common$square_room_side_, bg: author$project$GameDefinitions$Common$square_room_side_ - 2, at: 1, au: 1, a: author$project$GameDefinitions$Common$square_room_side_, H: 1};
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
			c6: author$project$GameModel$DisplayRegularGame,
			c7: theFloorId,
			c9: false,
			da: false,
			h: elm$core$Dict$fromList(
				_List_fromArray(
					[
						_Utils_Tuple2(1, fightingCharacter),
						_Utils_Tuple2(2, fightingCharacter2)
					])),
			bu: elm$core$Dict$empty,
			dg: F2(
				function (fid, coords) {
					return false;
				}),
			dh: elm$core$Maybe$Nothing,
			di: A3(
				author$project$Thorns$Types$initialModel,
				player_,
				elm$core$Maybe$Nothing,
				elm$core$Maybe$Just(imgBaseDir_)),
			$7: elm$core$Maybe$Just(imgBaseDir_),
			dv: elm$core$Dict$empty,
			cq: firstMap,
			dw: elm$core$Dict$empty,
			dy: true,
			dz: elm$core$Maybe$Nothing,
			dA: _List_fromArray(
				['you enter the dungeon']),
			dD: elm$core$Maybe$Nothing,
			dG: elm$core$Maybe$Nothing,
			dH: _List_Nil,
			m: elm$core$Dict$empty,
			v: player_,
			dQ: _List_Nil,
			dS: 5,
			dX: elm$core$Maybe$Nothing,
			dZ: elm$core$Dict$empty,
			d_: false,
			d2: elm$core$Dict$empty,
			d7: 64,
			d9: 64,
			eb: author$project$GameDefinitions$Common$dimensions.b,
			ec: author$project$GameDefinitions$Common$dimensions.a,
			ek: true,
			em: 10,
			en: 3,
			eo: 3,
			ep: 10,
			er: elm$core$Maybe$Nothing
		},
		createRandomMap);
};
var author$project$Main$init = function (flags) {
	var _n0 = author$project$GameDefinitions$Common$initialModelFunc(flags.$7);
	var initModel = _n0.a;
	var createRandomMap = _n0.b;
	var gBounds = author$project$Grid$getGridBoundsToPlacePlayer(initModel.cq);
	return _Utils_Tuple2(
		initModel,
		author$project$GameUpdate$cmdFillRandomIntsPool(initModel));
};
var author$project$GameUpdate$KeyDown = function (a) {
	return {$: 2, a: a};
};
var author$project$GameModel$DebugKeyPressed = 5;
var author$project$GameModel$Down = 1;
var author$project$GameModel$JumpLeft = 4;
var author$project$GameModel$Left = 2;
var author$project$GameModel$Nop = 14;
var author$project$GameModel$PickUpItem = 6;
var author$project$GameModel$Right = 3;
var author$project$GameModel$Up = 0;
var author$project$GameModel$ViewHelpMode = 11;
var author$project$GameModel$ViewHideFog = 13;
var author$project$GameModel$ViewInventory = 7;
var author$project$GameModel$ViewInventoryDetails = 8;
var author$project$GameModel$ViewMap = 12;
var author$project$GameModel$ViewOpponentReport = 10;
var author$project$GameModel$ViewStatsOverlay = 9;
var author$project$Main$fromCode = function (keyCode) {
	switch (keyCode) {
		case 79:
			return 2;
		case 37:
			return 2;
		case 80:
			return 3;
		case 39:
			return 3;
		case 81:
			return 0;
		case 38:
			return 0;
		case 40:
			return 1;
		case 65:
			return 1;
		case 74:
			return 4;
		case 85:
			return 6;
		case 73:
			return 7;
		case 68:
			return 8;
		case 83:
			return 9;
		case 84:
			return 5;
		case 69:
			return 10;
		case 72:
			return 11;
		case 77:
			return 12;
		case 70:
			return 13;
		default:
			return 14;
	}
};
var elm$browser$Browser$Events$Document = 0;
var elm$browser$Browser$Events$MySub = F3(
	function (a, b, c) {
		return {$: 0, a: a, b: b, c: c};
	});
var elm$browser$Browser$Events$State = F2(
	function (subs, pids) {
		return {cA: pids, cS: subs};
	});
var elm$browser$Browser$Events$init = elm$core$Task$succeed(
	A2(elm$browser$Browser$Events$State, _List_Nil, elm$core$Dict$empty));
var elm$browser$Browser$Events$nodeToKey = function (node) {
	if (!node) {
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
		return {cd: event, cp: key};
	});
var elm$core$Platform$sendToSelf = _Platform_sendToSelf;
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
var elm$core$String$toInt = _String_toInt;
var elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {ce: fragment, cj: host, cz: path, cC: port_, cG: protocol, cH: query};
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
var elm$browser$Browser$Events$spawn = F3(
	function (router, key, _n0) {
		var node = _n0.a;
		var name = _n0.b;
		var actualNode = function () {
			if (!node) {
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
			state.cA,
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
		var key = _n0.cp;
		var event = _n0.cd;
		var toMessage = function (_n2) {
			var subKey = _n2.a;
			var _n3 = _n2.b;
			var node = _n3.a;
			var name = _n3.b;
			var decoder = _n3.c;
			return _Utils_eq(subKey, key) ? A2(_Browser_decodeEvent, decoder, event) : elm$core$Maybe$Nothing;
		};
		var messages = A2(elm$core$List$filterMap, toMessage, state.cS);
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
var elm$browser$Browser$Events$onKeyDown = A2(elm$browser$Browser$Events$on, 0, 'keydown');
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
	{dr: author$project$Main$init, d$: author$project$Main$subscriptions, ei: author$project$GameUpdate$update, el: author$project$GameView$view});
_Platform_export({'Main':{'init':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (imgBaseDir) {
			return elm$json$Json$Decode$succeed(
				{$7: imgBaseDir});
		},
		A2(elm$json$Json$Decode$field, 'imgBaseDir', elm$json$Json$Decode$string)))(0)}});}(this));