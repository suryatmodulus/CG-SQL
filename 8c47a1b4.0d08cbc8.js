(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(h,o(o({ref:t},s),{},{components:n})):r.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(133)),l={id:"ch01",title:"Chapter 1: Introduction",sidebar_label:"Chapter 1: Introduction"},o={unversionedId:"ch01",id:"ch01",isDocsHomePage:!1,title:"Chapter 1: Introduction",description:"\x3c!---",source:"@site/../CQL_Guide/ch01.md",slug:"/ch01",permalink:"/cql-guide/ch01",version:"current",lastUpdatedBy:"Raoul Foaleng",lastUpdatedAt:1613610552,sidebar_label:"Chapter 1: Introduction",sidebar:"someSidebar",next:{title:"Chapter 2: Using Data",permalink:"/cql-guide/ch02"}},c=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Why did this work?",id:"why-did-this-work",children:[]},{value:"Variables and Arithmetic",id:"variables-and-arithmetic",children:[]},{value:"Basic Conversion Rules",id:"basic-conversion-rules",children:[]},{value:"Preprocessing Features",id:"preprocessing-features",children:[]}],s={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"CQL was designed as a precompiled addition to the the SQLite runtime system.  SQLite lacks\nstored procedures, but has a rich C runtime interface that allows you to create any kind\nof control flow mixed with any SQL operations that you might need.  However, SQLite's programming\ninterface is both verbose and error-prone in that small changes in SQL statements can require\nsignificant swizzling of the C code that calls them. Additionally, many of the SQLite runtime functions have error codes\nwhich must be strictly checked to ensure correct behavior.  In practice, it's easy to get some or all of this wrong."),Object(i.b)("p",null,'CQL simplifies this situation by providing a high level SQL language not unlike the stored procedure\nforms that are available in client/server SQL solutions and lowering that language to "The C you could\nhave written to do that job using the normal SQLite interfaces."'),Object(i.b)("p",null,"As a result, the C generated is generally very approachable but now the source language does not suffer from\nbrittleness due to query or table changes and CQL always generates correct column indices, nullability\nchecks, error checks, and the other miscellany needed to use SQLite correctly."),Object(i.b)("p",null,"CQL is also strongly typed, whereas SQLite is very forgiving with regard to what operations\nare allowed on which data.  Strict type checking is much more reasonable given CQL's compiled programming model."),Object(i.b)("p",null,"NOTE: CQL was created to help solve problems in the building of Facebook's Messenger application, but this content is free from references to Messenger. The CQL code generation here is done in the simplest\nmode with the fewest runtime dependencies allowed for illustration."),Object(i.b)("h3",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,'The "Hello World" program rendered in CQL looks like this:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'create proc hello()\nbegin\n  call printf("Hello, world\\n");\nend;\n')),Object(i.b)("p",null,"This very nearly works exactly as written but we'll need a little bit of glue to wire it all up.\nLet's talk about that glue."),Object(i.b)("p",null,"First, to build this example we'll use cql in its simplest mode.  You may need to build the ",Object(i.b)("inlineCode",{parentName:"p"},"cql")," executable first.\nFrom a source distribution you can run ",Object(i.b)("inlineCode",{parentName:"p"},"make")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"cql")," directory to do the job.  You can get the binary from the ",Object(i.b)("inlineCode",{parentName:"p"},"out")," directory after the build.  Arrange for ",Object(i.b)("inlineCode",{parentName:"p"},"cql")," to be on your PATH."),Object(i.b)("p",null,"With that done you should have the power to do this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"cql --in hello.sql --cg hello.h hello.c\n")),Object(i.b)("p",null,"This will produce the C output files ",Object(i.b)("inlineCode",{parentName:"p"},"hello.c")," and ",Object(i.b)("inlineCode",{parentName:"p"},"hello.h")," which can be readily compiled."),Object(i.b)("p",null,"However, hello.c will not have a ",Object(i.b)("inlineCode",{parentName:"p"},"main")," -- rather it will have a function like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-C"},"void hello(void);\n")),Object(i.b)("p",null,"The declaration of this function can be found in ",Object(i.b)("inlineCode",{parentName:"p"},"hello.h"),".  "),Object(i.b)("p",null,"That ",Object(i.b)("inlineCode",{parentName:"p"},"hello")," function is not quite adequate to do get a running program, which brings us to the next step in\ngetting things running.  Typically you have some kind of client program that will execute the procedures you\ncreate in CQL.  Let's create a simple one in a file we'll creatively name ",Object(i.b)("inlineCode",{parentName:"p"},"main.c"),"."),Object(i.b)("p",null,"A very simple CQL main might look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-C"},'#include <stdlib.h>\n#include "hello.h"\nint main(int argc, char **argv)\n{\n   hello();\n   return 0;\n}\n')),Object(i.b)("p",null,"Now we should be able to get do the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"$ cc -o hello main.c hello.c\n$ ./hello\nHello, world\n")),Object(i.b)("p",null,"NOTE: hello.c will attempt to ",Object(i.b)("inlineCode",{parentName:"p"},'#include "cqlrt.h"')," the declarations for CQL runtime functions.\nYou must make arrangements for the compiler to be able to find ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt.h")," either by adding it to an\n",Object(i.b)("inlineCode",{parentName:"p"},"INCLUDE")," path or by adding some -I options to help the compiler find the source.  For now you could\nkeep ",Object(i.b)("inlineCode",{parentName:"p"},"cqlrt.h")," in the same directory as the examples and avoid that complication."),Object(i.b)("h3",{id:"why-did-this-work"},"Why did this work?"),Object(i.b)("p",null,"A number of things are going on even in this simple program that are worth discussing:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the procedure ",Object(i.b)("inlineCode",{parentName:"li"},"hello")," had no arguments, and did not use the database",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"therefore its type signature when compiled will be simply ",Object(i.b)("inlineCode",{parentName:"li"},"void hello(void);")," so we know how to call it"),Object(i.b)("li",{parentName:"ul"},"you can see the declaration for yourself by examining the ",Object(i.b)("inlineCode",{parentName:"li"},"hello.c")," or ",Object(i.b)("inlineCode",{parentName:"li"},"hello.h")))),Object(i.b)("li",{parentName:"ul"},"since nobody used a database we didn't need to initialize one."),Object(i.b)("li",{parentName:"ul"},"since there are no actual uses of SQLite we didn't need to provide that library"),Object(i.b)("li",{parentName:"ul"},"for the same reason we didn't need to include a reference to the CQL runtime"),Object(i.b)("li",{parentName:"ul"},"the function ",Object(i.b)("inlineCode",{parentName:"li"},"printf")," was not declared, so attempting to ",Object(i.b)("inlineCode",{parentName:"li"},"call")," it creates a regular C call using whatever arguments are provided, in this case a string"),Object(i.b)("li",{parentName:"ul"},"the ",Object(i.b)("inlineCode",{parentName:"li"},"printf")," function is declared in ",Object(i.b)("inlineCode",{parentName:"li"},"stdio.h")," which is pulled in by ",Object(i.b)("inlineCode",{parentName:"li"},"cqlrt.h"),", which appears in ",Object(i.b)("inlineCode",{parentName:"li"},"hello.c"),", so it will be available to call"),Object(i.b)("li",{parentName:"ul"},'CQL allows string literal with double quotes, those literals may have most C escape sequences in them, so the "\\n" bit works',Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Normal SQL string literals (also supported) use single quotes and do not allow, or need escape characters other than ",Object(i.b)("inlineCode",{parentName:"li"},"''")," to mean one single quote")))),Object(i.b)("p",null,'All of these facts put together mean that the normal simple linkage rules result in an executable that prints\nthe string "Hello, world" and then a newline.'),Object(i.b)("h3",{id:"variables-and-arithmetic"},"Variables and Arithmetic"),Object(i.b)("p",null,'Borrowing once again from examples in "The C Programming Language", it\'s possible to do significant control flow in CQL without reference to databases.  The following program illustrates a variety of concepts:'),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'-- print a conversion table  for temperatures from 0 to 300\ncreate proc conversions()\nbegin\n  declare fahr, celsius integer not null;\n  declare lower, upper, step integer not null;\n\n  set lower := 0;   /* lower limit of range */\n  set upper := 300; /* upper limit of range */\n  set step := 20;   /* step size */\n\n  set fahr := lower;\n  while fahr <= upper\n  begin\n    set celsius := 5 * (fahr - 32) / 9;\n    call printf("%d\\t%d\\n", fahr, celsius);\n    set fahr := fahr + step;\n  end;\nend;\n')),Object(i.b)("p",null,"You may notice that both the SQL style ",Object(i.b)("inlineCode",{parentName:"p"},"--")," line prefix comments and the C style ",Object(i.b)("inlineCode",{parentName:"p"},"/* */")," forms\nare acceptable comment forms. Indeed, it's actually quite normal to pass CQL source through the C pre-processor before giving\nit to the CQL compiler, thereby gaining ",Object(i.b)("inlineCode",{parentName:"p"},"#define")," and ",Object(i.b)("inlineCode",{parentName:"p"},"#include")," as well as other pre-processing options\nlike token pasting in addition to the other comment forms.  More on this later."),Object(i.b)("p",null,"Like C, in CQL all variables must be declared before they are used.  They remain in scope until the end of the\nprocedure in which they are declared, or they are global scoped if they are declared outside of any procedure.  The\ndeclarations announce the names and types of the local variables.   Importantly, variables stay in scope for the whole\nprocedure even if they are declared within a nested ",Object(i.b)("inlineCode",{parentName:"p"},"begin")," and ",Object(i.b)("inlineCode",{parentName:"p"},"end")," block."),Object(i.b)("p",null,'The most basic types are the scalar or "unitary" types (as they are referred to in the compiler)'),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"type"),Object(i.b)("th",{parentName:"tr",align:null},"aliases"),Object(i.b)("th",{parentName:"tr",align:null},"notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"integer")),Object(i.b)("td",{parentName:"tr",align:null},"int"),Object(i.b)("td",{parentName:"tr",align:null},"a 32 bit integer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"long")," *"),Object(i.b)("td",{parentName:"tr",align:null},"long integer"),Object(i.b)("td",{parentName:"tr",align:null},"a 64 bit integer")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"bool")),Object(i.b)("td",{parentName:"tr",align:null},"boolean"),Object(i.b)("td",{parentName:"tr",align:null},"an 8 bit integer, normalized to 0/1")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"real")),Object(i.b)("td",{parentName:"tr",align:null},"n/a"),Object(i.b)("td",{parentName:"tr",align:null},"a C double")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"text")),Object(i.b)("td",{parentName:"tr",align:null},"n/a"),Object(i.b)("td",{parentName:"tr",align:null},"an immutable string reference")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"blob")),Object(i.b)("td",{parentName:"tr",align:null},"n/a"),Object(i.b)("td",{parentName:"tr",align:null},"an immutable blob reference")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",{parentName:"tr",align:null},"n/a"),Object(i.b)("td",{parentName:"tr",align:null},"an object reference")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"object<T>")),Object(i.b)("td",{parentName:"tr",align:null},"n/a"),Object(i.b)("td",{parentName:"tr",align:null},"an object reference of type T")))),Object(i.b)("p",null,"*"," SQLite makes no distinction between integer storage and long integer storage, but the declaration\ntells CQL whether it should use the SQLite methods for binding and reading 64 bit or 32 bit quantities\nfrom the column."),Object(i.b)("p",null,"There will be more notes on these types later, but importantly, all keywords and names in CQL\nare case insensitive just like in the underlying SQL language.   Additionally all of the\nabove may be combined with ",Object(i.b)("inlineCode",{parentName:"p"},"not null")," to indicate that a ",Object(i.b)("inlineCode",{parentName:"p"},"null")," value may not be stored\nin that variable (as in the example).  When generating the C code, the case used in the declaration\nbecomes the canonical case of the variable and all other cases are converted to that in the emitted\ncode.  As a result the C remains case sensitively correct."),Object(i.b)("p",null,"The size of the reference types is machine dependent, whatever the local pointer size is.  The\nnon-reference types use machine independent declarations like ",Object(i.b)("inlineCode",{parentName:"p"},"int32_t")," to get exactly the desired\nsizes in a portable fashion."),Object(i.b)("p",null,"All reference types are initialized to ",Object(i.b)("inlineCode",{parentName:"p"},"NULL")," when they are declared."),Object(i.b)("p",null,"The programs execution begins with three assignments:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"  set lower := 0; \n  set upper := 300;\n  set step := 20;\n")),Object(i.b)("p",null,"This initializes the variables just like in the isomorphic C code.  Statements are seperated by semicolons,\njust like in C."),Object(i.b)("p",null,"The table is then printed using a ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loop"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},"  while fahr <= upper\n  begin\n    ...\n  end;\n")),Object(i.b)("p",null,"This has the usual meaning, with the statements in the ",Object(i.b)("inlineCode",{parentName:"p"},"begin/end")," block being executed repeatedly\nuntil the condition becomes false."),Object(i.b)("p",null,"The body of a ",Object(i.b)("inlineCode",{parentName:"p"},"begin/end")," block such as the one in the ",Object(i.b)("inlineCode",{parentName:"p"},"while")," statement can contain one or more statements."),Object(i.b)("p",null,"The typical computation of Celsius temperature ensues with this code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sql"},'  set celsius := 5 * (fahr - 32) / 9;\n  call printf("%d\\t%d\\n", fahr, celsius);\n  set fahr := fahr + step;\n')),Object(i.b)("p",null,"This computes the celsuis and then prints it out, moving on to the next entry in the table."),Object(i.b)("p",null,"Importantly, the CQL compiler uses the normal SQLite order of operations, which is NOT the C order of operatations.\nAs a result, the compiler may need to add parentheses in the C output to get the correct order; or it may remove\nsome parentheses because they are not needed in the C order even though they were in the SQL order."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"printf")," call operates as before, with the ",Object(i.b)("inlineCode",{parentName:"p"},"fahr")," and ",Object(i.b)("inlineCode",{parentName:"p"},"celsius")," variables being passed on to the C runtime library\nfor formatting, unchanged."),Object(i.b)("p",null,"NOTE: when calling unknown foreign functions like ",Object(i.b)("inlineCode",{parentName:"p"},"printf")," string literals are simply passed right through unchanged\nas C string literals. No CQL string object is created."),Object(i.b)("h3",{id:"basic-conversion-rules"},"Basic Conversion Rules"),Object(i.b)("p",null,"As a rule, CQL does not perform its own conversions, leaving that instead to the C compiler.  An exception\nto this is that boolean expressions are normalized to a 0 or 1 result before they are stored."),Object(i.b)("p",null,"However, even with no explicit conversions, there are compatibility checks to ensure that letting the C compiler\ndo the conversions will result in something sensible.  The following list summarizes the essential facts/rules as\nthey might be applied when performing a ",Object(i.b)("inlineCode",{parentName:"p"},"+")," operation."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"the numeric types are bool, int, long, real"),Object(i.b)("li",{parentName:"ul"},"non-numeric types cannot be combined with numerics, e.g. 1 + 'x' always yields an error"),Object(i.b)("li",{parentName:"ul"},"any numeric type combined with itself yields the same type"),Object(i.b)("li",{parentName:"ul"},"bool combined with int yields int"),Object(i.b)("li",{parentName:"ul"},"bool or int combined with long yields long"),Object(i.b)("li",{parentName:"ul"},"bool, int, or long combined with real yields real")),Object(i.b)("h3",{id:"preprocessing-features"},"Preprocessing Features"),Object(i.b)("p",null,"CQL does not include its own pre-processor but it is designed to consume the output the C pre-processor.  To do this, you can either write the output of the pre-processor to a temporary file and read it into CQL as usual or you can set up a pipeline something like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"cc -x c -E your_program.sql | cql --cg your_program.h your_program.c\n")),Object(i.b)("p",null,"The above causes the C compiler to invoke only the pre-processor ",Object(i.b)("inlineCode",{parentName:"p"},"-E")," and to treat the input as though it were C code ",Object(i.b)("inlineCode",{parentName:"p"},"-x c")," even though it is in a ",Object(i.b)("inlineCode",{parentName:"p"},".sql")," file. Later examples will assume that you have configured CQL to be used with the C pre-processor as above."))}b.isMDXComponent=!0}}]);