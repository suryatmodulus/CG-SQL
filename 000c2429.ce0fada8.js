(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),c=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,p=d["".concat(l,".").concat(m)]||d[m]||h[m]||a;return t?o.a.createElement(p,s(s({ref:n},u),{},{components:t})):o.a.createElement(p,s({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var u=2;u<a;u++)l[u]=t[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return d}));var r=t(2),o=t(6),a=(t(0),t(138)),l=["components"],s={id:"x6",title:"Appendix 6: CQL In 20 Minutes",sidebar_label:"Appendix 6: CQL In 20 Minutes"},i={unversionedId:"x6",id:"x6",isDocsHomePage:!1,title:"Appendix 6: CQL In 20 Minutes",description:"\x3c!---",source:"@site/../CQL_Guide/x6.md",slug:"/x6",permalink:"/cql-guide/x6",version:"current",lastUpdatedBy:"Raoul Foaleng",lastUpdatedAt:1624924949,sidebar_label:"Appendix 6: CQL In 20 Minutes",sidebar:"someSidebar",previous:{title:"Appendix 5: JSON Schema Grammar",permalink:"/cql-guide/x5"},next:{title:"Appendix 7: CQL Anti-patterns",permalink:"/cql-guide/x7"}},u=[],c={rightToc:u};function d(e){var n=e.components,t=Object(o.a)(e,l);return Object(a.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"What follows is a series of examples intended to illustrate the most important features of\nthe CQL language. This appendix was significantly influenced by a similar article on Python\nat ",Object(a.b)("a",{parentName:"p",href:"https://learnxinyminutes.com/docs/python/"},"https://learnxinyminutes.com/docs/python/")),Object(a.b)("p",null,"Also of interest:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://sqlite.org"},"http://sqlite.org")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://learnxinyminutes.com/docs/sql"},"https://learnxinyminutes.com/docs/sql"))),Object(a.b)("p",null,"And with no further delay, CQL in 20 minutes..."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'-- Single line comments start with two dashes\n\n/* C style comments also work\n *\n * C pre-processor features like #include and #define are generally available\n * CQL is typically run through the C pre-processor before it is compile.\n */\n\n/**********************************************************\n * 1. Primitive Datatypes and Operators\n *********************************************************/\n\n-- You have numbers\n3     -- an integer\n3L    -- a long integer\n3.5   -- a real literal\n0x10  -- 16 in hex\n\n-- Math is what you would expect\n1 + 1     --\x3e 2\n8 - 1     --\x3e 7\n10 * 2    --\x3e 20\n35.0 / 5  --\x3e 7.0\n\n-- Modulo operation, same as C and SQLite\n7 % 3    --\x3e 1\n-7 % 3   --\x3e -1\n7 % -3   --\x3e 1\n-7 % 3   --\x3e -1\n\n-- Bitwise operators bind left to right like in SQLite\n1 | 4 & 3  --\x3e  1  (not 0)\n\n-- Enforce precedence with parentheses\n1 + 3 * 2    --\x3e 7\n(1 + 3) * 2  --\x3e 8\n\n-- use 0 and 1 for bools\n0    --\x3e how to true\n1    --\x3e how to false\nnull --\x3e null means "unknown" in CQL like SQLite\n\n-- negate with not\nnot 0    --\x3e 1\nnot 1    --\x3e 0\nnot null --\x3e null (not unknown is unknown)\n\n-- Logical Operators\n1 and 0 --\x3e 0\n0 or 1  --\x3e 1\n0 and x --\x3e 0 and x not evaluated\n1 or x  --\x3e 1 and x not evaluated\n\n-- remember null is "unknown"\nnull or 0  --\x3e null\nnull or 1  --\x3e 1\nnull and 0 --\x3e 0\nnull and 1 --\x3e null\n\n-- Non-zero values are true\n0        --\x3e false\n4        --\x3e true\n-6       --\x3e true\n0 and 2  --\x3e 0 (false)\n-5 or 0  --\x3e 1 (true)\n\n-- Equality is ==, but note unknown is not == to anything\n1 == 1       --\x3e true\n1 = 1        --\x3e true  (= and == are the same thing)\n2 == 1       --\x3e false\nnull == 1    --\x3e null (hence not true)\nnull == null --\x3e null (hence not true)\n"x" == "x"   --\x3e true\n\n-- IS lets you compare against null\n1 IS 1       --\x3e true\n2 IS 1       --\x3e false\nnull IS 1    --\x3e false\nnull IS null --\x3e true  (Unknown is Unknown?  Yes it is!)\n"x" IS "x"   --\x3e true\n\n-- x IS NOT y is the same as NOT (x IS y)\n1 IS NOT 1       --\x3e false\n2 IS NOT 1       --\x3e true\nnull IS NOT 1    --\x3e true\nnull IS NOT null --\x3e false\n"x" IS NOT "x"   --\x3e false\n\n-- Inequality is != or <>\n1 != 1       --\x3e false\n2 <> 1       --\x3e true\nnull != 1    --\x3e null\nnull <> null --\x3e null\n\n-- More comparisons\n1 < 10    --\x3e true\n1 > 10    --\x3e false\n2 <= 2    --\x3e true\n2 >= 2    --\x3e true\n10 < null --\x3e null\n\n-- Seeing whether a value is in a range\n1 < 2 and 2 < 3  --\x3e true\n2 < 3 and 3 < 2  --\x3e false\n\n-- BETWEEN makes this look nicer\n2 BETWEEN 1 AND 3 --\x3e true\n3 BETWEEN 2 AND 2 --\x3e false\n\n-- Strings are created with "x" or \'x\'\n"This is a string.\\n"           -- can have C style escapes (no embedded nulls)\n"Th\\x69s is a string.\\n"        -- even hex literals\n\'This isn\'\'t a C style string\'  -- use \'\' to escape single quote ONLY\n\n/**********************************************************\n * 2. Simple Variables\n *********************************************************/\n\n-- CQL can call simple libc methods with no declaration\n-- we\'ll need this for later examples so we can do something\n-- with our expressions (i.e. print them)\ncall printf("I\'m CQL. Nice to meet you!\\n");\n\n-- variables are declared with DECLARE\n-- keywords and identifiers are not case sensitive\ndeclare x integer not null;\n\n-- you can call it X, it is the same thing.\nset X := 0;\n\n-- all variables begin with a null value if allowed, else a zero value.\ndeclare y integer not null;\nif y == 0 then\n  call printf("Yes, this will run.\\n");\nend if;\n\n-- a nullable variable (i.e. not marked with not null) initialized to null\ndeclare z real;\nif z is null then\n  call printf("Yes, this will run.\\n");\nend if;\n\n-- the various types\ndeclare a_blob blob;\ndeclare a_string text;\ndeclare a_real real;\ndeclare an_int integer;\ndeclare a_long long;\ndeclare an_object object;\n\n-- there are some typical SQL synonyms\ndeclare an_int int;\ndeclare a_long long integer;\ndeclare a_long long int;\ndeclare a_long long_int;\n\n-- the basic types can be tagged to make them less miscible\ndeclare m real<meters>;\ndeclare kg real<kilos>;\n\nset m := kg;  -- error!\n\n-- object variables can be tagged so that they are not mixed-up easily\ndeclare dict object<dict> not null;\ndeclare list object<list> not null;\nset dict := create_dict();  -- an external function that creates a dict\nset dict := create_list();  -- error\nset list := create_list();  -- ok\nset list := dict;           -- error\n\n-- implied type initialization\nLET i := 1;  -- integer not null\nLET l := 1L;  -- long not null\nLET t := "x";  -- text not null\nLET b := x IS y; -- bool not null\nLET b := x = y;  -- bool (maybe not null depending on x/y)\n\n-- the psuedo function "nullable" converts the type of its arg to the nullable\n-- version of the same thing.\n\nLET n_i := nullable(1);  -- nullable integer variable initialized to 1\nLET l_i := nullable(1L);  -- nullable long variable initialized to 1\n\n/**********************************************************\n * 3. Control Flow\n *********************************************************/\n\n-- Just make a variable\ndeclare some_var integer not null;\nset some_var := 5\n\n-- Here is an if statement\nif some_var > 10 then\n    call printf("some_var is totally bigger than 10.\\n")\nelse if some_var < 10 then  -- else if is optional\n    call printf("some_var is smaller than 10.\\n")\nelse -- else is optional\n    call printf("some_var is indeed 10.\\n")\nend if;\n\n\n-- while loops iterate as usual\ndeclare i integer not null;\nset i := 0;\nwhile i < 5\nbegin\n   call printf("%d\\n", i);\n   set i := i + 1;\nend;\n\n-- use "leave" to end a loop early\ndeclare i integer not null;\nset i := 0;\nwhile i < 500\nbegin\n   if i >= 5 then\n     -- we are not going to get anywhere near 500\n     leave;\n   end if;\n\n   call printf("%d\\n", i);\n   set i := i + 1;\nend;\n\n-- use "continue" to go back to the loop test\ndeclare i integer not null;\nset i := 0;\nwhile i < 500\nbegin\n   set i := i + 1;\n   if i % 2 then\n     continue; -- note we had to do this after "i" was incremented!\n   end if;\n\n   -- odd numbers will not be printed because of continue above\n   call printf("%d\\n", i);\nend;\n\n /**********************************************************\n * 4. Complex Expression Forms\n *********************************************************/\n\n -- case is an expression, so it is more like the C ?: operator\n -- than a switch statement.  It is ?: on steroids.\n\n case i              -- a switch expression is optional\n   when 1 then "one" -- one or more cases\n   when 2 then "two"\n   else "other"      -- else is optional\n end;\n\n-- case with no common expression, is a series of booleans\ncase\n   when i == 1 then "i = one"   -- booleans could be completely unrelated\n   when j == 2 then "j = two"   -- first match wins\n   else "other"\nend;\n\n-- if nothing matches the result is null\ncase 7\n  when 1 then "one"\nend;\n\n--\x3e result null\n\n-- case is just an expression so it can nest\ncase X\n  when 1\n    case y when 1 "x:1 y:1"\n           else "x:1 y:other"\n    end\n  else\n    case when z == 1 "x:other z:1"\n         else "x:other z:other"\nend;\n\n-- IN is used to test for membership\n5 IN (1, 2, 3, 4, 5)  --\x3e true\n7 IN (1, 2)           --\x3e false\nnull in (1, 2, 3)     --\x3e null\nnull in (1, null, 3)  --\x3e null  (null == null is not true)\n7 NOT IN (1, 2)       --\x3e true\nnull not in (null, 3) --\x3e null\n\n/**********************************************************\n * 4. Working and "getting rid of" null\n *********************************************************/\n\n-- null can be annoying, you might need a not null value\n-- in most operations null is radioactive\nnull + x     --\x3e null\nnull * x     --\x3e null\nnull == null --\x3e null\n\n-- IS and IS NOT always return 0 or 1\nnull is 1     -> 0\n1 is not null -> 1\n\n-- COALESCE returns the first non null arg, or the last arg if all were null\n-- if the last arg is not null, you get a non null result for sure\nCOALESCE(x==y, 0) --\x3e if x or y is null, you get 0 not null, not quite "is"\n\n-- IFNULL is coalesce with 2 args only (COALESCE is more general)\nIFNULL(x, -1) --\x3e use -1 if x is null\n\n-- the reverse, convert a sentinel value to unknown, more exotic\nNULLIF(x, -1) --\x3e if x is -1 then use null\n\n-- the else part of a case can get rid of nulls\nCASE when x == y then 1 else 0 end;  --\x3e true iff x = y and neither is null\n\n-- case can be used to give you a default value after various tests\n-- this expression is never null, "other" is returned if x is null\nCASE when x > 0 then "pos" when x < 0 then "neg" else "other" end;\n\n-- you can "throw" out of the current procedure (see exceptions below)\ndeclare x integer not null;\nset x := ifnull_throw(nullable_int_expr); -- returns non null, throws if null\n\n-- if you have already tested the expression you can use assert-like form\nif nullable_int_expr is not null then\n  -- I am very sure nullable_int_expression is not null\n  set x := ifnull_crash(nullable_int_expr);\nend if;\n\n/**********************************************************\n * 5. Tables, Views, Indices, Triggers\n *********************************************************/\n\n-- most forms of data definition language DDL are supported\n-- "loose" DDL (outside of any procedure) simply declares\n-- schema, it does not actually create it, it is assumed to\n-- exist as you specified.\n\ncreate table T1(\n  id integer primary key,\n  t text,\n  r real\n);\n\ncreate table T2(\n  id integer primary key references T1(id),\n  l long,\n  b blob\n);\n\n-- CQL can take a series of declarations and automatically\n-- create a procedure that will materialize the declarations\n-- you made.  This will not be discussed here.  But you will get\n-- procedures that have things like.\n\ncreate proc make_tables()\nbegin\n  create table T1 if not exists (\n    id integer primary key,\n    t text,\n    r real\n  );\nend;\n\n-- views are supported\ncreate view V1 as (select * from T1);\n\n-- triggers are supported\ncreate trigger if not exists trigger1\n  before delete on T1\nbegin\n  delete from T2 where id = old.id;\nend;\n\n-- indices are supported\ncreate index I1 on T1(t);\ncreate index I2 on T1(r);\n\n-- the various drop forms are supported\ndrop index I1;\ndrop index I2;\ndrop view V1;\ndrop table T2;\ndrop table T1;\n\n-- a complete discussion of DDL is out of scope, refer to sqlite.org\n\n/**********************************************************\n * 6. Selecting Data\n *********************************************************/\n\n-- we will use this scratch variable in examples\ndeclare rr real;\n\n-- first observe CQL is a two-headed language\nset rr := 1+1;           -- this is evaluated in generated C code\nset rr := (select 1+1);  -- this select statement is sent to SQLite, it does the add\n\n-- CQL tries to do most things the same as SQLite in the C context\n-- but some things are exceedingly hard to emulate correctly.\n-- Even simple looking things:\nset rr := (select cast("1.23" as real));   --\x3e  rr := 1.23\nset rr := cast("1.23" as real);   --\x3e  error\n\n-- In general, numeric/text conversions have to happen in SQLite context\n-- because the specific library that does the conversion could be and usually\n-- is different.  It would not do to give different answers in one context or\n-- another so those conversions are simply not supported.\n\n-- Loose concatenation is not supported because of the implied conversions\n-- Loose means "not in the context of a SQL statement"\nset r := 1.23;\nset r := (select cast("100"||r as real));  --\x3e 1001.23 (a number)\nset r := cast("100"||r as real);  --\x3e error, concat not supported in loose expr\n\n-- illustrate a simple insertion\ninsert into T1 values (1, "foo", 3.14);\n\n-- finally, reading from the database\nset r := (select r from T1 where id = 1);  --\x3e r = 3.14\n\n-- the (select ...) form requires the result to have at least one row\n-- you can use "if nothing" forms to handle other cases\nset r := (select r from T1\n          where id = 2\n          if nothing -1);  --\x3e r = -1\n\n-- if the select statement might return a null result you can handle that as well\nset r := (select r from T1\n          where id = 2\n          if nothing or null -1);  --\x3e r = -1\n\n-- with no if nothing clause, lack of a row will cause the select expression to throw\n-- an exception.  "If nothing throw" merely makes this explicit.\nset r := (select r from T1 where id = 2 if nothing throw);  --\x3e will throw\n\n/**********************************************************\n * 6. Procedures, Results, Exceptions\n *********************************************************/\n\n-- procedures are a list of statements that can be executed with arguments\ncreate proc hello()\nbegin\n  call printf("Hello, world\\n");\nend;\n\n-- in, out, and in/out parameters are possible\ncreate proc swizzle(x integer, inout y integer, out z real not null)\nbegin\n  set y := x + y;  -- any computation you like\n\n  -- bizarre way to compute an id but this is just an illustration\n  set z := (select r from T1 where id = x if nothing or null -1);\nend;\n\n-- procedures like "hello" have a void signature, they return nothing\n-- as nothing can go wrong but those that use the database like "swizzle"\n-- can return an error code if there is a problem.\n-- will_fail will always return SQLITE_CONSTRAINT, the second insert\n-- is said to "throw"\ncreate proc will_fail()\nbegin\n   insert into T1 values (1, "x", 1);\n   insert into T1 values (1, "x", 1);  --\x3e duplicate key\nend;\n\n-- exceptions can be caught, here is an examples\ncreate proc upsert_t1(\n  id_ integer primary key,\n  t_ text,\n  r_ real\n)\nbegin\n  begin try\n    insert into T1(id, t, r) values (id_, t_, r_);\n  end try;\n  begin catch\n    update T1 set t = t_, r = r_ where id = id_;\n  end catch;\nend;\n\n-- shapes can be very useful in avoiding boilerplate code\n-- the following is equivalent, more on shapes later\ncreate proc upsert_t1(LIKE t1) -- my args are the same as the columns of T1\nbegin\n  begin try\n    insert into T1 from arguments\n  end try;\n  begin catch\n    update T1 set t = t_, r = r_ where id = id_;\n  end catch;\nend;\n\n-- you can (re)throw an error explicitly\n-- if there is no current error you get SQLITE_ERROR\ncreate proc upsert_wrapper(LIKE t1) -- my args are the same as the columns of T1\nbegin\n  if r_ > 10 then throw end if;\n  call upsert_t1(from arguments);\nend;\n\n-- procedures can also produce a result set\n-- the compiler generates the code to create this result set\n-- and helper functions to read rows out of it\ncreate proc get_low_r(r_ real)\nbegin\n   -- optionally insert some rows or do other things\n   select * from T1 where T1.r <= r_;\nend;\n\n-- a procedure can choose between various results, they must be compatible\n-- the last "select" to run controls the ultimate result\ncreate proc get_hi_or_low(r_ real, hi_not_low bool not null)\nbegin\n  if hi_not_ low then\n    select * from T1 where T1.r >= r_; -- economical easy query\n  else\n    select * from T1 where T1.r <= r_; -- economical easy query\n  end if;\nend;\n\n-- using IF to create to nice selects above is a powerful thing.\n-- SQLite has no IF, if we tried to create a shared query we get\n-- something that does not use indices at all.  As in the below.\n-- The two-headed beast has its advantages.\nselect * from T1 where case hi_not_low then T1.r >= r_ else T1.r <= r_ end;\n\n-- you can get the current return code to help you manage your catch things\n-- this upsert is a bit better than the first\ncreate proc upsert_t1(LIKE t1) -- my args are the same as the columns of T1\nbegin\n  begin try\n    insert into T1 from arguments\n  end try;\n  begin catch;\n    if @rc == 19 /* SQLITE_CONSTRAINT */ then\n      update T1 set t = t_, r = r_ where id = id_;\n    else\n      throw;  -- rethrow, something bad happened.\n    end if;\n  end catch;\nend;\n\n-- By convention you can call a proc with an out parameter as its last arg\n-- using function notation.  The out variable is the return value\n-- If the proc uses the database it could throw which causes the caller to throw\ncreate proc fib(n integer not null, out result integer not null)\nbegin\n   result := case n <= 2 then 1 else fib(n-1) + fib(n-2) end;\nend;\n\n/**********************************************************\n * 7. Statement Cursors\n *********************************************************/\n\n-- statement cursors let you iterate over a select result\n-- here we introduce cursors loop and fetch\ncreate proc count_t1(r_ real, out rows_ integer not null)\nbegin\n  declare rows integer not null;  -- starts at zero guaranteed\n  declare C cursor for select * from T1 where r < r_;\n  loop fetch C -- iterate until fetch returns no row\n  begin\n    if C.r < 5 then\n      rows := rows + 1;\n    end if;\n  end;\n  set rows_ := rows;\nend;\n\n-- more elementary forms are possible\ncreate proc peek_t1(r_ real, out rows_ integer not null)\nbegin\n   /* rows_ is set to zero for sure! */\n   declare C cursor for select * from T1 where r < r_ limit 2;\n   open C;  -- this is no-op, present because other systems have it\n   fetch C;  -- fetch might find a row or not\n   if C then  -- cursor name as bool indicates presence of a row\n     set rows_ = rows_ + (C.r < 5);\n     fetch C;\n     set rows_ = rows_ + (C and C.r < 5);\n   end if;\n   close C;  -- cursors auto-closed at end of method but early close possible\nend;\n\n-- the fetch form can also fetch directly into variables\nfetch C into id_, t_, r_;  --\x3e loads named locals instead of C.id, C.t, C.r\n\n-- a procedure can be the source of a cursor\ndeclare C cursor for call get_low_r(3.2);  -- valid cursor source\n\n-- "out" can be used to create a result set that is just one row\ncreate proc one_t1(r_ real)\nbegin\n   declare C cursor for select * from T1 where r < r_ limit 1;\n   fetch C;\n   out C;  -- emits a row if we have one, no row is ok too, empty result set.\nend;\n\n/**********************************************************\n * 8. Value Cursors, Out, and Out Union\n *********************************************************/\n\n-- to consume a procedure that uses "out" you can declare a value cursor\n-- by itself this does not imply use of the database, but often the source\n-- of the cursor uses the database.\ncreate proc consume_one_t1()\nbegin\n  -- a cursor whose shape matches the one_t1 "out" statement\n  declare C cursor like one_t1;\n\n  -- load it from the call\n  fetch C from call one_t1(7);\n  if C.r > 10 then\n    -- use values as you see fit\n    call printf("woohoo");\n  end if;\nend;\n\n-- you can do the above in one go with the compound form\ndeclare C cursor fetch from call one_t1(7); -- same net code\n\n-- value cursors can come from anywhere and can be a result\ncreate proc use_t1_a_lot()\nbegin\n  -- T1 is the same shape as one_t1, this will work, too\n  declare C cursor like T1;\n  fetch C from call one_t1(7);  -- load it from the call\n\n  -- do something, then maybe load it again with different args\n  fetch C from call one_t1(12);   -- load it again\n\n  -- do something, then maybe load it again with explicit args\n  fetch C using\n     1 id,\n     "foo" t,\n     8.2 r;\n\n  -- now return it\n  out C;\nend;\n\n-- make a complex result set one row at a time\ncreate proc out_union_example()\nbegin\n  -- T1 is the same shape as one_t1, this will work, too\n  declare C cursor like T1;\n\n  -- load it from the call\n  fetch C from call one_t1(7);\n\n  -- note out UNION rather than just out, indicating potentially many rows\n  out union C;\n\n  -- load it again with different args\n  fetch C from call one_t1(12);\n  out union C;\n\n  -- do something, then maybe load it again with explicit args\n  fetch C using\n     1 id,\n     "foo" t,\n     8.2 r;\n  out union C;\n\n  -- we have generated a 3 row result set\nend;\n\n-- consume the above\ncreate proc consume_result()\nbegin\n  declare C cursor for call out_union_example();\n  loop fetch C\n  begin\n    -- use builtin cql_cursor_format to make the cursor into a string\n    call printf("%s\\n", cql_cursor_format(C)); --\x3e prints every column and value\n  end;\nend;\n\n/**********************************************************\n * 9. Named Types and Enumerations\n *********************************************************/\n\n-- create a simple named types\ndeclare my_type type integer not null;   -- make an alias for integer not null\ndeclare i my_type;  -- use it, "i" is an integer\n\n-- mixing in type kinds is helpful\ndeclare distance type real<meters>;  -- e.g., distances to be measured in meters\ndeclare time type real<seconds>;     -- e.g., time to be measured in seconds\ndeclare job_id type long<job_id>;\ndeclare person_id type long<person_id>;\n\n-- with the above done\n--  * vars/cols of type "distance" are incompatible with those of type "time"\n--  * vars/cols of types job_id are incompatible with person_id\n-- this is true even though the underlying type is the same for both!\n\n-- enums can have any numeric type as their base type\ndeclare enum implement integer (\n   pencil,       -- values start at 1 unless you use = to choose something\n   pen,          -- the next enum gets previous + 1 as its value (2)\n   brush = 7     -- with = expression you get the indicated value\n);\n\n-- the above also implicitly does this\ndeclare implement type integer<implement> not null;\n\n-- using the enum, simply use dot notation\ndeclare impl implement;\nset impl := implement.pen;  -- value "2"\n\n-- if you want this enum to be owned by the current compiland you can\n-- emit it into the .h file we are going to generate.\n-- do not put this in an include file, you want it to go to one place\n@emit_enums implement;\n\n/**********************************************************\n * 10. Shapes and Their Uses\n *********************************************************/\n\n-- shapes first appeared to help define value cursors like so:\n\n-- a table or view name defines a shape\ndeclare C cursor like T1;\n\n-- the result of a proc defines a shape\ndeclare D cursor like one_t1;\n\n-- a dummy select statement defines a shape (the select does not run)\n-- this one is the same as (x integer not null, y text not null)\ndeclare E cursor like select 1 x, "2" y;\n\n-- another cursor defines a shape\ndeclare F cursor like C;\n\n-- the arguments of a procedure define a shape\n-- create proc count_t1(r_ real, out rows_ integer not null) ...\n-- the shape will be:\n--  (r_ real, rows_ integer not null)\ndeclare G cursor like count_t1 arguments;\n\n-- a loaded cursor can be used to make a call\ncall count_t1(from G);  -- the args become G.r_, G.rows_\n\n-- a shape can be used to define a functions args, or some of the args\n-- p will have args id_, t_, and r_ with types matching table T1\n-- note that an _ was added\ncreate proc p(like T1)\nbegin\n  -- do something\nend;\n\n-- the arguments of the current procedure are a synthetic shape\n-- called "arguments" and can used where other shapes can appeared\n-- for instance you can have q shim to p using this form:\ncreate proc q(like T1, print bool not null)\nbegin\n  -- maybe pre-process, silly example\n  set id_ := id_ + 1;\n  call p(from arguments);\n  -- maybe post-process, silly example\n  set r_ := r_ - 1;\n  if print then\n    -- convert args to cursor\n    declare C like q arguments;\n    fetch C from arguments;\n    call printf("%s\\n", cql_cursor_format(C)); --\x3e prints every column and value\n  end if;\n  -- insert a row based on the args\n  insert into T1 from arguments;\nend;\n\n-- you an use a given shape more than once if you name them\n-- more exciting if T1 was like a "person" or something\ncreate proc r(a like T1, b like T1)\nbegin\n  call p(from a);\n  call p(from b);\n  -- you can refer to a.id, b.id etc.\n  declare C like a;\n  fetch C from a;\n  call printf("%s\\n", cql_cursor_format(C));\n  fetch C from b;\n  call printf("%s\\n", cql_cursor_format(C));\nend;\n\n-- shapes can be subsetted for instance\n-- here not just the arguments that match C are copied, there could be more\nfetch C from arguments(like C);\n\n-- use the D shape to load C, defaults for other arguments\nfetch C(like D) from D;\n\n-- use the D shape to load C, dummy values for the others\n-- dummy seed here means use "11" for any numerics\n-- and use  "col_name_11" for any strings/blobs\nfetch C(like D) from D @dummy_seed(11);\n\n-- use the Z shape to control which fields are copied\n-- use the dummy value even if the field is nullable and null woud have be ok\nfetch C(like Z) from D(like Z) @dummy_seed(11) @dummy_nullables;\n\n-- same works for insert statements\ninsert into T1(like Z) from D(like Z) @dummy_seed(11) @dummy_nullables;\n\n-- you can make a helper to create test args that are mostly constant\n-- or computable\ncreate get_foo_args(X like some_shape, seed_ integer not null)\nbegin\n  declare C cursor like foo arguments;\n  -- any way of loading C could work this is one\n  fetch C(like X) from X @dummy_seed(seed_);\n  out C;\nend;\n\n-- then get the full arg set and call it\n-- some_shape is the part of the args that needs to manually vary in each\n-- test iteration, the rest will be dummy values.  There could be zillions.\n-- some_shape is going to get the values 1, 2, 3 and 100 will be the seed\ndeclare foo_args cursor fetch from call get_foo_args(1,2,3, 100);\ncall foo(from foo_args);\n\n/**********************************************************\n * 11. INSERT USING and FETCH USING\n *********************************************************/\n\n -- this kind of thing is a pain\n insert into foo(a, b, c, d, e, f, g)\n    values(1, 2, 3, null, null, 5, null);\n\n-- instead write this form:\ninsert into foo USING\n    1 a, 2 b, 3 c, null d, null e, 5 f, null g;\n\n-- the FETCH statement can also be "fetch using"\ndeclare C cursor like foo;\nfetch C USING\n    1 a, 2 b, 3 c, null d, null e, 5 f, null g;\n')),Object(a.b)("p",null,"If you've read this far you know more than most now.  :)"))}d.isMDXComponent=!0}}]);