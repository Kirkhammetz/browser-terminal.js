!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(t){function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(5),c=n(4),l=function(e){function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.filesystem,n=void 0===t?void 0:t,i=e.commands,s=void 0===i?void 0:i,l=e.user,f=void 0===l?"root":l,h=e.hostname,d=void 0===h?"my.host.me":h;r(this,u);var p=o(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return p.polyfills(),p.fs=new c(n,p),p.user=f,p.hostname=d,p.ShellCommands=p.registerCommands(p),p.ShellCommands=a({},p.ShellCommands,p.registerCommands(p,s)),p}return i(u,e),s(u,[{key:"polyfills",value:function(){return t.Promise||(t.Promise=n(10).Promise),t.fetch||(t.fetch=n(13)),!0}},{key:"run",value:function(e){return this.exec(e)}}]),u}(u);Object.defineProperty(l.prototype,"fs",{writable:!0,enumerable:!1}),Object.defineProperty(l.prototype,"ShellCommands",{writable:!0,enumerable:!1}),e.exports=l}).call(t,n(0))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=t.fn,i=t.type,a=void 0===i?"usr":i,s=t.shell,u=void 0===s?void 0:s,c=t.man,l=void 0===c?"":c;if(r(this,e),"string"!=typeof n)throw Error("Command name must be a string");if("function"!=typeof o)throw Error("Command function must be... a function");this.fn=o.bind(this),this.name=n,this.type=a,this.man=l,u&&(this.shell=u)}return i(e,[{key:"exec",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("object"!==("undefined"==typeof e?"undefined":o(e))||Array.isArray(e))throw Error("Command exec ARGV Must be an [Object]");return Object.keys(e).length?this.fn(e):this.fn()}}]),e}();e.exports=a},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,o=void 0===n?"":n,i=t.type,a=void 0===i?"file":i,s=t.content,u=void 0===s?"":s;r(this,e),this.uid=this.genUid(),this.name=o,this.type=a,this.content=u,this.user="root",this.group="root","file"===this.type?this.permission="rwxr--r--":this.permission="drwxr-xr-x"}return o(e,[{key:"genUid",value:function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}}]),e}();e.exports=i},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(7),s=n(3),u=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(r(this,e),this.shell=n,"object"!==("undefined"==typeof t?"undefined":o(t))||Array.isArray(t))throw new Error("Virtual Filesystem provided not valid, initialization failed.");t=JSON.parse(JSON.stringify(t)),this.FileSystem=this.initFs(t),this.cwd=["/"]}return i(e,[{key:"initFs",value:function(e){return this.buildVirtualFs(e),e}},{key:"buildVirtualFs",value:function(e){for(var t in e)e.hasOwnProperty(t)&&("object"!==o(e[t])||Array.isArray(e[t])?e[t]=new s({name:t,content:e[t]}):(e[t]=new s({name:t,content:e[t],type:"dir"}),this.buildVirtualFs(e[t].content)))}},{key:"pathStringToArray",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!e.length)throw new Error("Path cannot be empty");if(e.match(/\/{2,}/g))throw new Error("-invalid path: "+e);var t=e.split("/");return""===t[0]&&(t[0]="/"),"."===t[0]&&t.shift(),""===t[t.length-1]&&t.pop(),"/"!==t[0]&&(t=this.cwd.concat(t)),t}},{key:"pathArrayToString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(e))throw new Error("-fatal filesystem: path must be an array");if(!e.length)throw new Error("-invalid filesystem: path not provided");var t=e.join("/");return t.replace(/\/{2,}/g,"/")}},{key:"fileWalker",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["/"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.FileSystem;if(!Array.isArray(e))throw new Error("Path must be an array of nodes, use Filesystem.pathStringToArray({string})");if(e=e.slice(0),!e.length)return t;var n=e.shift();if("/"!==n){if(!t[n])throw new Error("File doesn't exist");t="dir"===t[n].type?t[n].content:t[n]}return this.fileWalker(e,t)}},{key:"traverseFiles",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.FileSystem;this.traverseFiles;for(var n in t)t.hasOwnProperty(n)&&("dir"===t[n].type?this.traverseFiles(e,t[n].content):e(t[n]))}},{key:"traverseDirs",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.FileSystem;for(var n in t)t.hasOwnProperty(n)&&"dir"===t[n].type&&(e(t[n]),this.traverseDirs(e,t[n].content))}},{key:"getNode",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1];if("string"!=typeof e)throw new Error("Invalid input.");var n=void 0,r=void 0;try{n=this.pathStringToArray(e),r=this.fileWalker(n)}catch(e){throw e}if("dir"===t&&"file"===r.type)throw new Error("Its a file not a directory");if("file"===t&&"dir"===r.type)throw new Error("Its a directory not a file");if("file"===t&&!r.type)throw new Error("Invalid file path");if(!r)throw new Error("Invalid path, file/folder doesn't exist");return{path:e,pathArray:n,node:r}}},{key:"changeDir",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=void 0;try{t=this.getNode(e,"dir")}catch(e){throw e}return this.cwd=t.pathArray,"changed directory."}},{key:"listDir",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=void 0;try{t=this.getNode(e,"dir")}catch(e){throw e}return t.node}},{key:"readFile",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=void 0;try{t=this.getNode(e,"file")}catch(e){throw e}return t.node}},{key:"getCurrentDirectory",value:function(){var e=void 0;try{e=this.pathArrayToString(this.cwd)}catch(e){return"-invalid filesystem: An error occured while parsing current working directory to string."}return e}}]),e}();e.exports=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),s=n(12),u=function(){function e(){r(this,e)}return i(e,[{key:"parse",value:function(e){return new s(e)}},{key:"exec",value:function(e){var t=void 0;try{t=this.parse(e)}catch(e){return"-fatal command: "+(e.message||"Some Error Occured while parsing the command string.")}var n=this.ShellCommands[t.command];if(!n)return"-invalid shell: Command <"+t.command+"> doesn't exist.\n";var r=void 0;try{r=n.exec(t)}catch(e){return"-fatal command: "+e.message}return this.format(r)}},{key:"format",value:function(e){return"function"==typeof e?"-invalid command: Command returned invalid data type.":void 0===e||"undefined"==typeof e?"-invalid command: Command returned no data.":e}},{key:"registerCommands",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,r=n(6);if(t){if("object"!==("undefined"==typeof t?"undefined":o(t))||Array.isArray(t))throw new Error("Custom command provided are not in a valid format.");r=t}var i={};return Object.keys(r).map(function(t){var n=r[t];"string"==typeof n.name&&"function"==typeof n.fn&&(n.shell=e,i[t]=new a(n))}),i}}]),e}();e.exports=u},function(e,t,n){"use strict";var r=n(14),o=r.name,i=r.version,a=r.description,s=r.repository,u=r.author,c=r.license;e.exports={help:{name:"help",type:"builtin",man:"List of available commands",fn:function(){return"Commands available: "+Object.keys(this.shell.ShellCommands).join(", ")}},whoami:{name:"whoami",type:"builtin",man:"Current user",fn:function(){return this.shell.user}},about:{name:"about",type:"builtin",man:"About this project",fn:function(){var e="";return e+="name: "+o+"\n",e+="version: "+i+"\n",e+="description: "+a+"\n",e+="repository: "+s+"\n",e+="author: "+u+"\n",e+="license: "+c+"\n"}},arguments:{name:"arguments",type:"builtin",man:"Return argument passed, used for testing purpose",fn:function(e){return e}},cd:{name:"cd",type:"builtin",man:"Change directory, pass absolute or relative path: eg. cd /etc, cd / cd/my/nested/dir",fn:function(e){if(!e._.length)throw new Error("-invalid No path provided.");var t=e._.join();try{return this.shell.fs.changeDir(t)}catch(e){throw e}}},ls:{name:"ls",type:"builtin",man:"list directory files, pass absolute/relative path, if empty list current directory",fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{_:["./"]};e._.length||e._.push(".");var t=e._.join(),n=void 0,r="";try{n=this.shell.fs.listDir(t)}catch(e){throw e}for(var o in n)n.hasOwnProperty(o)&&(r+=n[o].permission+"\t"+n[o].user+" "+n[o].group+"\t"+n[o].name+"\n");return r}},cat:{name:"cat",type:"builtin",man:"Return file content, take one argument: file path (relative/absolute)",fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{_:["./"]},t=e._.join(),n=void 0;try{n=this.shell.fs.readFile(t)}catch(e){throw e}return n.content}},man:{name:"man",type:"builtin",man:"Command manual, takes one argument, command name",fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e._[0])throw new Error("man: no command provided.");var t=e._[0];if(!this.shell.ShellCommands[t])throw new Error("command doesn't exist.");if(!this.shell.ShellCommands[t].man)throw new Error("no manual entry for this command.");return this.shell.ShellCommands[t].man}},http:{name:"http",type:"builtin",man:"Send HTTP requests.\n syntax: http [OPTIONS FLAGS] URL.\neg: http -m GET http://jsonplaceholder.typicode.com/\n    options:\n    \t-m --method POST,GET,PUT,DELETE\n     \t--body must be an object, and MUST use single quoets inside eg: --body=\"{ 'data': '1' }\"\n     ",fn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e._.length)throw new Error("http: no URL provided, provide URL and/or method \n help: "+this.shell.ShellCommands.http.man);var t=e.method||e.m||"GET",n=e._[0],r=void 0;if(e.body)try{r=JSON.stringify(JSON.parse(e.body.replace(/\'/g,'"')))}catch(e){throw console.log(e),new Error("Body provided is not a valid JSON")}var o={method:t,headers:{"Content-Type":"application/json"}};return"GET"!==t&&(o.body=r),fetch(n,o).then(function(e){if(e.ok)return e.json();throw new Error("Request Failed ("+(e.status||500)+"): "+(e.statusText||"Some Error Occured."))}).catch(function(e){throw new Error("-fetch error response returned but it was not a valid JSON. Cannot Parse.")})}}}},function(e,t,n){"use strict";e.exports={"file.h":"#include <nope.h>",etc:{apache2:{"apache2.conf":"Not What you were looking for :)"}},home:{guest:{docs:{"mydoc.md":"TestFile","mydoc2.md":"TestFile2","mydoc3.md":"TestFile3"}}},root:{".zshrc":"not even close :)",".oh-my-zsh":{themes:{}}}}},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var o=Function.prototype.apply;t.setTimeout=function(){return new r(o.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(11),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function i(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function a(){y&&d&&(y=!1,d.length?p=d.concat(p):m=-1,p.length&&s())}function s(){if(!y){var e=o(a);y=!0;for(var t=p.length;t;){for(d=p,p=[];++m<t;)d&&d[m].run();m=-1,t=p.length}d=null,y=!1,i(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var l,f,h=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var d,p=[],y=!1,m=-1;h.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new u(e,t)),1!==p.length||y||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=c,h.addListener=c,h.once=c,h.off=c,h.removeListener=c,h.removeAllListeners=c,h.emit=c,h.binding=function(e){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(e){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},function(e,t,n){(function(t){!function(n){function r(){}function o(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function a(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void i._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:u)(t.promise,e._value);var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}s(t.promise,r)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void f(o(n,t),e)}e._state=1,e._value=t,c(e)}catch(t){u(e,t)}}function u(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}var h=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r);return a(this,new l(e,t,n)),n},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,n){function r(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(i,e)},n)}t[i]=a,0===--o&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var o=t.length,i=0;i<t.length;i++)r(i,t[i])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,n){n(e)})},i.race=function(e){return new i(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){h(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},"undefined"!=typeof e&&e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(t,n(8).setImmediate)},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return y[p]=r,d(p),p++}function o(e){delete y[e]}function i(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(m)setTimeout(a,0,e);else{var t=y[e];if(t){m=!0;try{i(t)}finally{o(e),m=!1}}}}function s(){d=function(e){t.nextTick(function(){a(e)})}}function u(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function c(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),d=function(n){e.postMessage(t+n,"*")}}function l(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;a(t)},d=function(t){e.port2.postMessage(t)}}function f(){var e=v.documentElement;d=function(t){var n=v.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function h(){d=function(e){setTimeout(a,0,e)}}if(!e.setImmediate){var d,p=1,y={},m=!1,v=e.document,b=Object.getPrototypeOf&&Object.getPrototypeOf(e);b=b&&b.setTimeout?b:e,"[object process]"==={}.toString.call(e.process)?s():u()?c():e.MessageChannel?l():v&&"onreadystatechange"in v.createElement("script")?f():h(),b.setImmediate=r,b.clearImmediate=o}}("undefined"==typeof self?"undefined"==typeof e?this:e:self)}).call(t,n(0),n(9))},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t){if(r(this,e),!t||!t.length)throw new Error("Parser: command provided is empty.");if("string"!=typeof t)throw new Error("Parser: command must be a string!");this.raw=t;var n=this.stringToArray(t.replace(/\s{2,}/g,"").replace(/\t|\n/g," "));if(this.command=n[0],this._=[],n.length){var o=this.parse(n.slice(1));if(!Object.assign){for(var i in o)o.hasOwnProperty(i)&&(this[i]=o[i]);return!0}return Object.assign(this,o)}}return o(e,[{key:"stringToArray",value:function(e){return e.match(/[^\s"']+|"([^"]*)"|'([^']*)'/g)}},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e.length)return t;if(e[0].match(/^\-[^\-].*/)){var n=e[0].replace("-","");return e[1]&&e[1].match(/^\-.*/)?(t[n]=!0,this.parse(e.splice(1),t)):e[1]?(t[n]=e[1],this.parse(e.splice(2),t)):(t[n]=!0,this.parse(e.splice(1),t))}if(e[0].match(/^\-{2}.*\=$/)){var r=e[0].match(/--(.*)=/)[1];return t[r]=e[1].replace(/"/g,""),this.parse(e.splice(2),t)}if(e[0].match(/^\-{2}.*\={1}.*$/)){var o=e[0].match(/\-{2}(.*)=/)[1];return t[o]=e[0].match(/\={1}(.*)/)[1],this.parse(e.splice(1),t)}if(e[0].match(/^\-{2}.*$/)){var i=e[0].replace("--","");if(!e[1]||e[1]&&e[1].match(/^\-{1,}/))return t[i]=!0,this.parse(e.slice(1),t);if(e[1]&&!e[1].match(/^\-{1,}/))return t[i]=e[1],this.parse(e.slice(2),t)}return this._.push(e.shift()),this.parse(e,t)}}]),e}();try{e.exports=i}catch(e){}},function(e,t){!function(e){"use strict";function t(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function n(e){return"string"!=typeof e&&(e=String(e)),e}function r(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return v.iterable&&(t[Symbol.iterator]=function(){return t}),t}function o(e){this.map={},e instanceof o?e.forEach(function(e,t){this.append(t,e)},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function i(e){return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function a(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function s(e){var t=new FileReader,n=a(t);return t.readAsArrayBuffer(e),n}function u(e){var t=new FileReader,n=a(t);return t.readAsText(e),n}function c(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function l(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(v.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(v.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(v.arrayBuffer&&v.blob&&w(e))this._bodyArrayBuffer=l(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!g(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var e=i(this);if(e)return e;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(p)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(e){var t=e.toUpperCase();return _.indexOf(t)>-1?t:e}function d(e,t){t=t||{};var n=t.body;if(e instanceof d){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new o(e.headers)),this.method=e.method,this.mode=e.mode,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new o(t.headers)),this.method=h(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function p(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}}),t}function y(e){var t=new o;return e.split(/\r?\n/).forEach(function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}}),t}function m(e,t){t||(t={}),this.type="default",this.status="status"in t?t.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new o(t.headers),this.url=t.url||"",this._initBody(e)}if(!e.fetch){var v={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(v.arrayBuffer)var b=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],w=function(e){return e&&DataView.prototype.isPrototypeOf(e)},g=ArrayBuffer.isView||function(e){return e&&b.indexOf(Object.prototype.toString.call(e))>-1};o.prototype.append=function(e,r){e=t(e),r=n(r);var o=this.map[e];this.map[e]=o?o+","+r:r},o.prototype.delete=function(e){delete this.map[t(e)]},o.prototype.get=function(e){return e=t(e),this.has(e)?this.map[e]:null},o.prototype.has=function(e){return this.map.hasOwnProperty(t(e))},o.prototype.set=function(e,r){this.map[t(e)]=n(r)},o.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},o.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),r(e)},o.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),r(e)},o.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),r(e)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];d.prototype.clone=function(){return new d(this,{body:this._bodyInit})},f.call(d.prototype),f.call(m.prototype),m.prototype.clone=function(){return new m(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},m.error=function(){var e=new m(null,{status:0,statusText:""});return e.type="error",e};var T=[301,302,303,307,308];m.redirect=function(e,t){if(T.indexOf(t)===-1)throw new RangeError("Invalid status code");return new m(null,{status:t,headers:{location:e}})},e.Headers=o,e.Request=d,e.Response=m,e.fetch=function(e,t){return new Promise(function(n,r){var o=new d(e,t),i=new XMLHttpRequest;i.onload=function(){var e={status:i.status,statusText:i.statusText,headers:y(i.getAllResponseHeaders()||"")};e.url="responseURL"in i?i.responseURL:e.headers.get("X-Request-URL");var t="response"in i?i.response:i.responseText;n(new m(t,e))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(e,t){i.setRequestHeader(t,e)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},e.fetch.polyfill=!0}}("undefined"!=typeof self?self:this)},function(e,t){e.exports={name:"termly.js",version:"2.2.0",description:"Simple, Extensible, Lightweight Javascript Browser Terminal Simulator!",main:"dist/termly.min.js",scripts:{test:"mocha --compilers babel-core/register tests/",start:"bundle exec jekyll serve --config _config.dev.yml",build:"NODE_ENV=production webpack -p","build:dev":"webpack -w"},keywords:["terminal","javascript","simulator","browser","presentation","mockup","demo","cli","prompt","commands","no depency","lightweight","js","vanilla"],repository:"https://github.com/Kirkhammetz/termly.js",author:"Simone Corsi",license:"ISC",devDependencies:{babel:"^6.5.2","babel-core":"^6.21.0","babel-loader":"^6.2.10","babel-plugin-transform-object-rest-spread":"^6.22.0","babel-polyfill":"^6.22.0","babel-preset-es2015":"^6.18.0","babel-preset-stage-0":"^6.22.0","babel-preset-stage-1":"^6.22.0","babel-preset-stage-2":"^6.22.0","babel-preset-stage-3":"^6.22.0",babelify:"^7.3.0",browserify:"^13.3.0",chai:"^3.5.0",chalk:"^1.1.3",gulp:"^3.9.1","gulp-rename":"^1.2.2","gulp-sourcemaps":"^2.4.0","gulp-uglify":"^2.0.0","gulp-util":"^3.0.8",mocha:"^3.2.0","promise-polyfill":"^6.0.2","string-to-argv.js":"^1.1.1","uglify-js":"^2.6.4","utils-merge":"^1.0.0","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0",watchify:"^3.8.0",webpack:"beta","whatwg-fetch":"^2.0.2"},dependencies:{"string-to-argv.js":"1.1.2"}}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{
constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=function(e){function t(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,i));if(!n)throw new Error("No wrapper element selector provided");try{if(a.container=document.querySelector(n),!a.container)throw new Error("new Terminal(): DOM element not found")}catch(e){throw new Error("new Terminal(): Not valid DOM selector.")}return e=a.init(),o(a,e)}return i(t,e),s(t,[{key:"init",value:function(){var e=this;this.generateRow(),this.container.addEventListener("click",function(t){t.stopPropagation();var n=e.container.querySelector(".current .terminal-input");n&&n.focus()})}},{key:"generateRow",value:function(){var e=this,t=document.querySelector(".current.terminal-row");t&&(t.classList.remove("current"),t.querySelector("input").disabled=!0);var n=document.querySelector(".terminal-input");n&&n.removeEventListener("input",this.resizeHandler);var r=document.createElement("div");r.classList.add("current","terminal-row"),r.innerHTML="",r.innerHTML+='<span class="terminal-info">'+this.user+"@"+this.hostname+" - "+this.fs.getCurrentDirectory()+" ➜ </span>",r.innerHTML+='<input type="text" class="terminal-input" size="2" style="cursor:none;">',this.container.appendChild(r);var o=this.container.querySelector(".current .terminal-input"),i=this.container.querySelector(".current.terminal-row"),a=i.querySelector(".terminal-info"),s=i.offsetWidth-a.offsetWidth-20;return o.style.width=s+"px",o.addEventListener("keyup",function(t){return e.submitHandler(t)}),o.focus(),o}},{key:"generateOutput",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Array.isArray(e)&&(e=e.join("\n"));var n=document.createElement("pre");if(n.textContent=e,this.container.appendChild(n),t)return this.generateRow()}},{key:"clear",value:function(){return this.container.innerHTML="",this.generateRow()}},{key:"submitHandler",value:function(e){var t=this;if(13==event.which||13==event.keyCode){e.preventDefault();var n=e.target.value.trim();if("clear"===n)return this.clear();var r=this.run(n);return r.then?(this.generateOutput("Pending request...",!1),r.then(function(e){if("object"===("undefined"==typeof e?"undefined":a(e)))try{e=JSON.stringify(e,null,2)}catch(e){return t.generateOutput("-fatal http: Response received but had a problem parsing it.")}return t.generateOutput(e)}).catch(function(e){return t.generateOutput(e.message)})):this.generateOutput(r)}}}]),t}(u);e.exports=c},function(e,t,n){"use strict";(function(e){e.TermlyPrompt=n(15)}).call(t,n(0))}]);