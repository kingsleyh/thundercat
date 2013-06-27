/*! jQuery v1.10.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.1.min.map
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.1",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=lt(),k=lt(),E=lt(),S=!1,A=function(){return 0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=bt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+xt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return At(e.replace(z,"$1"),t,n,i)}function st(e){return K.test(e+"")}function lt(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[b]=!0,e}function ct(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function pt(e,t,n){e=e.split("|");var r,i=e.length,a=n?null:t;while(i--)(r=o.attrHandle[e[i]])&&r!==t||(o.attrHandle[e[i]]=a)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function dt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function gt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function yt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function vt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.parentWindow;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.frameElement&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ct(function(e){return e.innerHTML="<a href='#'></a>",pt("type|href|height|width",dt,"#"===e.firstChild.getAttribute("href")),pt(B,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),r.input=ct(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),pt("value",ht,r.attributes&&r.input),r.getElementsByTagName=ct(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ct(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ct(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=st(n.querySelectorAll))&&(ct(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ct(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=st(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ct(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=st(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},r.sortDetached=ct(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return gt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?gt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:ut,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=bt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?ut(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return at(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:vt(function(){return[0]}),last:vt(function(e,t){return[t-1]}),eq:vt(function(e,t,n){return[0>n?n+t:n]}),even:vt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:vt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:vt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:vt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=mt(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=yt(n);function bt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function wt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function Tt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Ct(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function Nt(e,t,n,r,i,o){return r&&!r[b]&&(r=Nt(r)),i&&!i[b]&&(i=Nt(i,o)),ut(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||St(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:Ct(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=Ct(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=Ct(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function kt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=wt(function(e){return e===t},s,!0),p=wt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[wt(Tt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return Nt(l>1&&Tt(f),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),i>r&&kt(e=e.slice(r)),i>r&&xt(e))}f.push(n)}return Tt(f)}function Et(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=Ct(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?ut(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=bt(e)),n=t.length;while(n--)o=kt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Et(i,r))}return o};function St(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function At(e,t,n,i){var a,s,u,c,p,f=bt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&xt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}o.pseudos.nth=o.pseudos.eq;function jt(){}jt.prototype=o.filters=o.pseudos,o.setFilters=new jt,r.sortStable=b.split("").sort(A).join("")===b,p(),[0,0].sort(A),r.detectDuplicates=S,x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!l||i&&!u||(n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)
}),n=s=l=u=r=o=null,t}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=x(this),l=t,u=e.match(T)||[];while(o=u[a++])l=r?l:!s.hasClass(o),s[l?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/*! jQuery UI - v1.10.1 - 2013-02-15
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.slider.js, jquery.ui.sortable.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */


(function(e,t){function i(t,n){var r,i,o,u=t.nodeName.toLowerCase();return"area"===u?(r=t.parentNode,i=r.name,!t.href||!i||r.nodeName.toLowerCase()!=="map"?!1:(o=e("img[usemap=#"+i+"]")[0],!!o&&s(o))):(/input|select|textarea|button|object/.test(u)?!t.disabled:"a"===u?t.href||n:n)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return e.css(this,"visibility")==="hidden"}).length}var n=0,r=/^ui-id-\d+$/;e.ui=e.ui||{};if(e.ui.version)return;e.extend(e.ui,{version:"1.10.1",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,n){return typeof t=="number"?this.each(function(){var r=this;setTimeout(function(){e(r).focus(),n&&n.call(r)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?t=this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):t=this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(n){if(n!==t)return this.css("zIndex",n);if(this.length){var r=e(this[0]),i,s;while(r.length&&r[0]!==document){i=r.css("position");if(i==="absolute"||i==="relative"||i==="fixed"){s=parseInt(r.css("zIndex"),10);if(!isNaN(s)&&s!==0)return s}r=r.parent()}}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){r.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(n){return!!e.data(n,t)}}):function(t,n,r){return!!e.data(t,r[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),r=isNaN(n);return(r||n>=0)&&i(t,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(n,r){function u(t,n,r,s){return e.each(i,function(){n-=parseFloat(e.css(t,"padding"+this))||0,r&&(n-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(n-=parseFloat(e.css(t,"margin"+this))||0)}),n}var i=r==="Width"?["Left","Right"]:["Top","Bottom"],s=r.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+r]=function(n){return n===t?o["inner"+r].call(this):this.each(function(){e(this).css(s,u(this,n)+"px")})},e.fn["outer"+r]=function(t,n){return typeof t!="number"?o["outer"+r].call(this,t):this.each(function(){e(this).css(s,u(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(n){return arguments.length?t.call(this,e.camelCase(n)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,n,r){var i,s=e.ui[t].prototype;for(i in r)s.plugins[i]=s.plugins[i]||[],s.plugins[i].push([n,r[i]])},call:function(e,t,n){var r,i=e.plugins[t];if(!i||!e.element[0].parentNode||e.element[0].parentNode.nodeType===11)return;for(r=0;r<i.length;r++)e.options[i[r][0]]&&i[r][1].apply(e.element,n)}},hasScroll:function(t,n){if(e(t).css("overflow")==="hidden")return!1;var r=n&&n==="left"?"scrollLeft":"scrollTop",i=!1;return t[r]>0?!0:(t[r]=1,i=t[r]>0,t[r]=0,i)}})})(jQuery);(function(e,t){var n=0,r=Array.prototype.slice,i=e.cleanData;e.cleanData=function(t){for(var n=0,r;(r=t[n])!=null;n++)try{e(r).triggerHandler("remove")}catch(s){}i(t)},e.widget=function(t,n,r){var i,s,o,u,a={},f=t.split(".")[0];t=t.split(".")[1],i=f+"-"+t,r||(r=n,n=e.Widget),e.expr[":"][i.toLowerCase()]=function(t){return!!e.data(t,i)},e[f]=e[f]||{},s=e[f][t],o=e[f][t]=function(e,t){if(!this._createWidget)return new o(e,t);arguments.length&&this._createWidget(e,t)},e.extend(o,s,{version:r.version,_proto:e.extend({},r),_childConstructors:[]}),u=new n,u.options=e.widget.extend({},u.options),e.each(r,function(t,r){if(!e.isFunction(r)){a[t]=r;return}a[t]=function(){var e=function(){return n.prototype[t].apply(this,arguments)},i=function(e){return n.prototype[t].apply(this,e)};return function(){var t=this._super,n=this._superApply,s;return this._super=e,this._superApply=i,s=r.apply(this,arguments),this._super=t,this._superApply=n,s}}()}),o.prototype=e.widget.extend(u,{widgetEventPrefix:s?u.widgetEventPrefix:t},a,{constructor:o,namespace:f,widgetName:t,widgetFullName:i}),s?(e.each(s._childConstructors,function(t,n){var r=n.prototype;e.widget(r.namespace+"."+r.widgetName,o,n._proto)}),delete s._childConstructors):n._childConstructors.push(o),e.widget.bridge(t,o)},e.widget.extend=function(n){var i=r.call(arguments,1),s=0,o=i.length,u,a;for(;s<o;s++)for(u in i[s])a=i[s][u],i[s].hasOwnProperty(u)&&a!==t&&(e.isPlainObject(a)?n[u]=e.isPlainObject(n[u])?e.widget.extend({},n[u],a):e.widget.extend({},a):n[u]=a);return n},e.widget.bridge=function(n,i){var s=i.prototype.widgetFullName||n;e.fn[n]=function(o){var u=typeof o=="string",a=r.call(arguments,1),f=this;return o=!u&&a.length?e.widget.extend.apply(null,[o].concat(a)):o,u?this.each(function(){var r,i=e.data(this,s);if(!i)return e.error("cannot call methods on "+n+" prior to initialization; "+"attempted to call method '"+o+"'");if(!e.isFunction(i[o])||o.charAt(0)==="_")return e.error("no such method '"+o+"' for "+n+" widget instance");r=i[o].apply(i,a);if(r!==i&&r!==t)return f=r&&r.jquery?f.pushStack(r.get()):r,!1}):this.each(function(){var t=e.data(this,s);t?t.option(o||{})._init():e.data(this,s,new i(o,this))}),f}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,r){r=e(r||this.defaultElement||this)[0],this.element=e(r),this.uuid=n++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),r!==this&&(e.data(r,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===r&&this.destroy()}}),this.document=e(r.style?r.ownerDocument:r.document||r),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(n,r){var i=n,s,o,u;if(arguments.length===0)return e.widget.extend({},this.options);if(typeof n=="string"){i={},s=n.split("."),n=s.shift();if(s.length){o=i[n]=e.widget.extend({},this.options[n]);for(u=0;u<s.length-1;u++)o[s[u]]=o[s[u]]||{},o=o[s[u]];n=s.pop();if(r===t)return o[n]===t?null:o[n];o[n]=r}else{if(r===t)return this.options[n]===t?null:this.options[n];i[n]=r}}return this._setOptions(i),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,e==="disabled"&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(t,n,r){var i,s=this;typeof t!="boolean"&&(r=n,n=t,t=!1),r?(n=i=e(n),this.bindings=this.bindings.add(n)):(r=n,n=this.element,i=this.widget()),e.each(r,function(r,o){function u(){if(!t&&(s.options.disabled===!0||e(this).hasClass("ui-state-disabled")))return;return(typeof o=="string"?s[o]:o).apply(s,arguments)}typeof o!="string"&&(u.guid=o.guid=o.guid||u.guid||e.guid++);var a=r.match(/^(\w+)\s*(.*)$/),f=a[1]+s.eventNamespace,l=a[2];l?i.delegate(l,f,u):n.bind(f,u)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function n(){return(typeof e=="string"?r[e]:e).apply(r,arguments)}var r=this;return setTimeout(n,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,n,r){var i,s,o=this.options[t];r=r||{},n=e.Event(n),n.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),n.target=this.element[0],s=n.originalEvent;if(s)for(i in s)i in n||(n[i]=s[i]);return this.element.trigger(n,r),!(e.isFunction(o)&&o.apply(this.element[0],[n].concat(r))===!1||n.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,n){e.Widget.prototype["_"+t]=function(r,i,s){typeof i=="string"&&(i={effect:i});var o,u=i?i===!0||typeof i=="number"?n:i.effect||n:t;i=i||{},typeof i=="number"&&(i={duration:i}),o=!e.isEmptyObject(i),i.complete=s,i.delay&&r.delay(i.delay),o&&e.effects&&e.effects.effect[u]?r[t](i):u!==t&&r[u]?r[u](i.duration,i.easing,s):r.queue(function(n){e(this)[t](),s&&s.call(r[0]),n()})}})})(jQuery);(function(e,t){var n=!1;e(document).mouseup(function(){n=!1}),e.widget("ui.mouse",{version:"1.10.1",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(n){if(!0===e.data(n.target,t.widgetName+".preventClickEvent"))return e.removeData(n.target,t.widgetName+".preventClickEvent"),n.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(n)return;this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var r=this,i=t.which===1,s=typeof this.options.cancel=="string"&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;if(!i||s||!this._mouseCapture(t))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){r.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)){this._mouseStarted=this._mouseStart(t)!==!1;if(!this._mouseStarted)return t.preventDefault(),!0}return!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return r._mouseMove(e)},this._mouseUpDelegate=function(e){return r._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0,!0},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function h(e,t,n){return[parseFloat(e[0])*(l.test(e[0])?t/100:1),parseFloat(e[1])*(l.test(e[1])?n/100:1)]}function p(t,n){return parseInt(e.css(t,n),10)||0}function d(t){var n=t[0];return n.nodeType===9?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(n)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:n.preventDefault?{width:0,height:0,offset:{top:n.pageY,left:n.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,i=Math.abs,s=Math.round,o=/left|center|right/,u=/top|center|bottom/,a=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,l=/%$/,c=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var r,i,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=s.children()[0];return e("body").append(s),r=o.offsetWidth,s.css("overflow","scroll"),i=o.offsetWidth,r===i&&(i=s[0].clientWidth),s.remove(),n=r-i},getScrollInfo:function(t){var n=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),i=n==="scroll"||n==="auto"&&t.width<t.element[0].scrollWidth,s=r==="scroll"||r==="auto"&&t.height<t.element[0].scrollHeight;return{width:i?e.position.scrollbarWidth():0,height:s?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var n=e(t||window),r=e.isWindow(n[0]);return{element:n,isWindow:r,offset:n.offset()||{left:0,top:0},scrollLeft:n.scrollLeft(),scrollTop:n.scrollTop(),width:r?n.width():n.outerWidth(),height:r?n.height():n.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return c.apply(this,arguments);t=e.extend({},t);var n,l,v,m,g,y,b=e(t.of),w=e.position.getWithinInfo(t.within),E=e.position.getScrollInfo(w),S=(t.collision||"flip").split(" "),x={};return y=d(b),b[0].preventDefault&&(t.at="left top"),l=y.width,v=y.height,m=y.offset,g=e.extend({},m),e.each(["my","at"],function(){var e=(t[this]||"").split(" "),n,r;e.length===1&&(e=o.test(e[0])?e.concat(["center"]):u.test(e[0])?["center"].concat(e):["center","center"]),e[0]=o.test(e[0])?e[0]:"center",e[1]=u.test(e[1])?e[1]:"center",n=a.exec(e[0]),r=a.exec(e[1]),x[this]=[n?n[0]:0,r?r[0]:0],t[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),S.length===1&&(S[1]=S[0]),t.at[0]==="right"?g.left+=l:t.at[0]==="center"&&(g.left+=l/2),t.at[1]==="bottom"?g.top+=v:t.at[1]==="center"&&(g.top+=v/2),n=h(x.at,l,v),g.left+=n[0],g.top+=n[1],this.each(function(){var o,u,a=e(this),f=a.outerWidth(),c=a.outerHeight(),d=p(this,"marginLeft"),y=p(this,"marginTop"),T=f+d+p(this,"marginRight")+E.width,N=c+y+p(this,"marginBottom")+E.height,C=e.extend({},g),k=h(x.my,a.outerWidth(),a.outerHeight());t.my[0]==="right"?C.left-=f:t.my[0]==="center"&&(C.left-=f/2),t.my[1]==="bottom"?C.top-=c:t.my[1]==="center"&&(C.top-=c/2),C.left+=k[0],C.top+=k[1],e.support.offsetFractions||(C.left=s(C.left),C.top=s(C.top)),o={marginLeft:d,marginTop:y},e.each(["left","top"],function(r,i){e.ui.position[S[r]]&&e.ui.position[S[r]][i](C,{targetWidth:l,targetHeight:v,elemWidth:f,elemHeight:c,collisionPosition:o,collisionWidth:T,collisionHeight:N,offset:[n[0]+k[0],n[1]+k[1]],my:t.my,at:t.at,within:w,elem:a})}),t.using&&(u=function(e){var n=m.left-C.left,s=n+l-f,o=m.top-C.top,u=o+v-c,h={target:{element:b,left:m.left,top:m.top,width:l,height:v},element:{element:a,left:C.left,top:C.top,width:f,height:c},horizontal:s<0?"left":n>0?"right":"center",vertical:u<0?"top":o>0?"bottom":"middle"};l<f&&i(n+s)<l&&(h.horizontal="center"),v<c&&i(o+u)<v&&(h.vertical="middle"),r(i(n),i(s))>r(i(o),i(u))?h.important="horizontal":h.important="vertical",t.using.call(this,e,h)}),a.offset(e.extend(C,{using:u}))})},e.ui.position={fit:{left:function(e,t){var n=t.within,i=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,o=e.left-t.collisionPosition.marginLeft,u=i-o,a=o+t.collisionWidth-s-i,f;t.collisionWidth>s?u>0&&a<=0?(f=e.left+u+t.collisionWidth-s-i,e.left+=u-f):a>0&&u<=0?e.left=i:u>a?e.left=i+s-t.collisionWidth:e.left=i:u>0?e.left+=u:a>0?e.left-=a:e.left=r(e.left-o,e.left)},top:function(e,t){var n=t.within,i=n.isWindow?n.scrollTop:n.offset.top,s=t.within.height,o=e.top-t.collisionPosition.marginTop,u=i-o,a=o+t.collisionHeight-s-i,f;t.collisionHeight>s?u>0&&a<=0?(f=e.top+u+t.collisionHeight-s-i,e.top+=u-f):a>0&&u<=0?e.top=i:u>a?e.top=i+s-t.collisionHeight:e.top=i:u>0?e.top+=u:a>0?e.top-=a:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var n=t.within,r=n.offset.left+n.scrollLeft,s=n.width,o=n.isWindow?n.scrollLeft:n.offset.left,u=e.left-t.collisionPosition.marginLeft,a=u-o,f=u+t.collisionWidth-s-o,l=t.my[0]==="left"?-t.elemWidth:t.my[0]==="right"?t.elemWidth:0,c=t.at[0]==="left"?t.targetWidth:t.at[0]==="right"?-t.targetWidth:0,h=-2*t.offset[0],p,d;if(a<0){p=e.left+l+c+h+t.collisionWidth-s-r;if(p<0||p<i(a))e.left+=l+c+h}else if(f>0){d=e.left-t.collisionPosition.marginLeft+l+c+h-o;if(d>0||i(d)<f)e.left+=l+c+h}},top:function(e,t){var n=t.within,r=n.offset.top+n.scrollTop,s=n.height,o=n.isWindow?n.scrollTop:n.offset.top,u=e.top-t.collisionPosition.marginTop,a=u-o,f=u+t.collisionHeight-s-o,l=t.my[1]==="top",c=l?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,h=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,p=-2*t.offset[1],d,v;a<0?(v=e.top+c+h+p+t.collisionHeight-s-r,e.top+c+h+p>a&&(v<0||v<i(a))&&(e.top+=c+h+p)):f>0&&(d=e.top-t.collisionPosition.marginTop+c+h+p-o,e.top+c+h+p>f&&(d>0||i(d)<f)&&(e.top+=c+h+p))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,n,r,i,s,o=document.getElementsByTagName("body")[0],u=document.createElement("div");t=document.createElement(o?"div":"body"),r={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(r,{position:"absolute",left:"-1000px",top:"-1000px"});for(s in r)t.style[s]=r[s];t.appendChild(u),n=o||document.documentElement,n.insertBefore(t,n.firstChild),u.style.cssText="position: absolute; left: 10.7432222px;",i=e(u).offset().left,e.support.offsetFractions=i>10&&i<11,t.innerHTML="",n.removeChild(t)}()})(jQuery);(function(e,t){var n=0,r={},i={};r.height=r.paddingTop=r.paddingBottom=r.borderTopWidth=r.borderBottomWidth="hide",i.height=i.paddingTop=i.paddingBottom=i.borderTopWidth=i.borderBottomWidth="show",e.widget("ui.accordion",{version:"1.10.1",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),!t.collapsible&&(t.active===!1||t.active==null)&&(t.active=0),this._processPanels(),t.active<0&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e(),content:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this._destroyIcons(),e=this.headers.next().css("display","").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function(){/^ui-accordion/.test(this.id)&&this.removeAttribute("id")}),this.options.heightStyle!=="content"&&e.css("height","")},_setOption:function(e,t){if(e==="active"){this._activate(t);return}e==="event"&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),e==="collapsible"&&!t&&this.options.active===!1&&this._activate(0),e==="icons"&&(this._destroyIcons(),t&&this._createIcons()),e==="disabled"&&this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)},_keydown:function(t){if(t.altKey||t.ctrlKey)return;var n=e.ui.keyCode,r=this.headers.length,i=this.headers.index(t.target),s=!1;switch(t.keyCode){case n.RIGHT:case n.DOWN:s=this.headers[(i+1)%r];break;case n.LEFT:case n.UP:s=this.headers[(i-1+r)%r];break;case n.SPACE:case n.ENTER:this._eventHandler(t);break;case n.HOME:s=this.headers[0];break;case n.END:s=this.headers[r-1]}s&&(e(t.target).attr("tabIndex",-1),e(s).attr("tabIndex",0),s.focus(),t.preventDefault())},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels();if(t.active===!1&&t.collapsible===!0||!this.headers.length)t.active=!1,this.active=e();t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"),this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()},_refresh:function(){var t,r=this.options,i=r.heightStyle,s=this.element.parent(),o=this.accordionId="ui-accordion-"+(this.element.attr("id")||++n);this.active=this._findActive(r.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(t){var n=e(this),r=n.attr("id"),i=n.next(),s=i.attr("id");r||(r=o+"-header-"+t,n.attr("id",r)),s||(s=o+"-panel-"+t,i.attr("id",s)),n.attr("aria-controls",s),i.attr("aria-labelledby",r)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false",tabIndex:-1}).next().attr({"aria-expanded":"false","aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true",tabIndex:0}).next().attr({"aria-expanded":"true","aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(r.event),i==="fill"?(t=s.height(),this.element.siblings(":visible").each(function(){var n=e(this),r=n.css("position");if(r==="absolute"||r==="fixed")return;t-=n.outerHeight(!0)}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):i==="auto"&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var n=this._findActive(t)[0];if(n===this.active[0])return;n=n||this.active[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return typeof t=="number"?this.headers.eq(t):e()},_setupEvents:function(t){var n={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,n),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i[0]===r[0],o=s&&n.collapsible,u=o?e():i.next(),a=r.next(),f={oldHeader:r,oldPanel:a,newHeader:o?e():i,newPanel:u};t.preventDefault();if(s&&!n.collapsible||this._trigger("beforeActivate",t,f)===!1)return;n.active=o?!1:this.headers.index(i),this.active=s?e():i,this._toggle(f),r.removeClass("ui-accordion-header-active ui-state-active"),n.icons&&r.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header),s||(i.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),n.icons&&i.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),i.next().addClass("ui-accordion-content-active"))},_toggle:function(t){var n=t.newPanel,r=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=n,this.prevHide=r,this.options.animate?this._animate(n,r,t):(r.hide(),n.show(),this._toggleComplete(t)),r.attr({"aria-expanded":"false","aria-hidden":"true"}),r.prev().attr("aria-selected","false"),n.length&&r.length?r.prev().attr("tabIndex",-1):n.length&&this.headers.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),n.attr({"aria-expanded":"true","aria-hidden":"false"}).prev().attr({"aria-selected":"true",tabIndex:0})},_animate:function(e,t,n){var s,o,u,a=this,f=0,l=e.length&&(!t.length||e.index()<t.index()),c=this.options.animate||{},h=l&&c.down||c,p=function(){a._toggleComplete(n)};typeof h=="number"&&(u=h),typeof h=="string"&&(o=h),o=o||h.easing||c.easing,u=u||h.duration||c.duration;if(!t.length)return e.animate(i,u,o,p);if(!e.length)return t.animate(r,u,o,p);s=e.show().outerHeight(),t.animate(r,{duration:u,easing:o,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(i,{duration:u,easing:o,complete:p,step:function(e,n){n.now=Math.round(e),n.prop!=="height"?f+=n.now:a.options.heightStyle!=="content"&&(n.now=Math.round(s-t.outerHeight()-f),f=0)}})},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}})})(jQuery);(function(e,t){var n=0;e.widget("ui.autocomplete",{version:"1.10.1",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var t,n,r,i=this.element[0].nodeName.toLowerCase(),s=i==="textarea",o=i==="input";this.isMultiLine=s?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[s||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){t=!0,r=!0,n=!0;return}t=!1,r=!1,n=!1;var s=e.ui.keyCode;switch(i.keyCode){case s.PAGE_UP:t=!0,this._move("previousPage",i);break;case s.PAGE_DOWN:t=!0,this._move("nextPage",i);break;case s.UP:t=!0,this._keyEvent("previous",i);break;case s.DOWN:t=!0,this._keyEvent("next",i);break;case s.ENTER:case s.NUMPAD_ENTER:this.menu.active&&(t=!0,i.preventDefault(),this.menu.select(i));break;case s.TAB:this.menu.active&&this.menu.select(i);break;case s.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(i),i.preventDefault());break;default:n=!0,this._searchTimeout(i)}},keypress:function(r){if(t){t=!1,r.preventDefault();return}if(n)return;var i=e.ui.keyCode;switch(r.keyCode){case i.PAGE_UP:this._move("previousPage",r);break;case i.PAGE_DOWN:this._move("nextPage",r);break;case i.UP:this._keyEvent("previous",r);break;case i.DOWN:this._keyEvent("next",r)}},input:function(e){if(r){r=!1,e.preventDefault();return}this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({input:e(),role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var n=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(r){r.target!==t.element[0]&&r.target!==n&&!e.contains(n,r.target)&&t.close()})})},menufocus:function(t,n){if(this.isNewMenu){this.isNewMenu=!1;if(t.originalEvent&&/^mouse/.test(t.originalEvent.type)){this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)});return}}var r=n.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:r})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(r.value):this.liveRegion.text(r.value)},menuselect:function(e,t){var n=t.item.data("ui-autocomplete-item"),r=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=r,this._delay(function(){this.previous=r,this.selectedItem=n})),!1!==this._trigger("select",e,{item:n})&&this._value(n.value),this.term=this._value(),this.close(e),this.selectedItem=n}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),e==="source"&&this._initSource(),e==="appendTo"&&this.menu.element.appendTo(this._appendTo()),e==="disabled"&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,n,r=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(n,r){r(e.ui.autocomplete.filter(t,n.term))}):typeof this.options.source=="string"?(n=this.options.source,this.source=function(t,i){r.xhr&&r.xhr.abort(),r.xhr=e.ajax({url:n,data:t,dataType:"json",success:function(e){i(e)},error:function(){i([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){e=e!=null?e:this._value(),this.term=this._value();if(e.length<this.options.minLength)return this.close(t);if(this._trigger("search",t)===!1)return;return this._search(e)},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var e=this,t=++n;return function(r){t===n&&e.__response(r),e.pending--,e.pending||e.element.removeClass("ui-autocomplete-loading")}},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return typeof t=="string"?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var n=this.menu.element.empty();this._renderMenu(n,t),this.menu.refresh(),n.show(),this._resizeMenu(),n.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,n){var r=this;e.each(n,function(e,n){r._renderItemData(t,n)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,n){return e("<li>").append(e("<a>").text(n.label)).appendTo(t)},_move:function(e,t){if(!this.menu.element.is(":visible")){this.search(null,t);return}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term),this.menu.blur();return}this.menu[e](t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){if(!this.isMultiLine||this.menu.element.is(":visible"))this._move(e,t),t.preventDefault()}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,n){var r=new RegExp(e.ui.autocomplete.escapeRegex(n),"i");return e.grep(t,function(e){return r.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments);if(this.options.disabled||this.cancelSearch)return;e&&e.length?t=this.options.messages.results(e.length):t=this.options.messages.noResults,this.liveRegion.text(t)}})})(jQuery);(function(e,t){var n,r,i,s,o="ui-button ui-widget ui-state-default ui-corner-all",u="ui-state-hover ui-state-active ",a="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",f=function(){var t=e(this).find(":ui-button");setTimeout(function(){t.button("refresh")},1)},l=function(t){var n=t.name,r=t.form,i=e([]);return n&&(n=n.replace(/'/g,"\\'"),r?i=e(r).find("[name='"+n+"']"):i=e("[name='"+n+"']",t.ownerDocument).filter(function(){return!this.form})),i};e.widget("ui.button",{version:"1.10.1",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,f),typeof this.options.disabled!="boolean"?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,u=this.options,a=this.type==="checkbox"||this.type==="radio",c=a?"":"ui-state-active",h="ui-state-focus";u.label===null&&(u.label=this.type==="input"?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(o).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(u.disabled)return;this===n&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){if(u.disabled)return;e(this).removeClass(c)}).bind("click"+this.eventNamespace,function(e){u.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this.element.bind("focus"+this.eventNamespace,function(){t.buttonElement.addClass(h)}).bind("blur"+this.eventNamespace,function(){t.buttonElement.removeClass(h)}),a&&(this.element.bind("change"+this.eventNamespace,function(){if(s)return;t.refresh()}),this.buttonElement.bind("mousedown"+this.eventNamespace,function(e){if(u.disabled)return;s=!1,r=e.pageX,i=e.pageY}).bind("mouseup"+this.eventNamespace,function(e){if(u.disabled)return;if(r!==e.pageX||i!==e.pageY)s=!0})),this.type==="checkbox"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1}):this.type==="radio"?this.buttonElement.bind("click"+this.eventNamespace,function(){if(u.disabled||s)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var n=t.element[0];l(n).not(n).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).addClass("ui-state-active"),n=this,t.document.one("mouseup",function(){n=null})}).bind("mouseup"+this.eventNamespace,function(){if(u.disabled)return!1;e(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(t){if(u.disabled)return!1;(t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active")}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",u.disabled),this._resetButton()},_determineButtonType:function(){var e,t,n;this.element.is("[type=checkbox]")?this.type="checkbox":this.element.is("[type=radio]")?this.type="radio":this.element.is("input")?this.type="input":this.type="button",this.type==="checkbox"||this.type==="radio"?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),n=this.element.is(":checked"),n&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",n)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(o+" "+u+" "+a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){this._super(e,t);if(e==="disabled"){t?this.element.prop("disabled",!0):this.element.prop("disabled",!1);return}this._resetButton()},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),this.type==="radio"?l(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):this.type==="checkbox"&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if(this.type==="input"){this.options.label&&this.element.val(this.options.label);return}var t=this.buttonElement.removeClass(a),n=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),r=this.options.icons,i=r.primary&&r.secondary,s=[];r.primary||r.secondary?(this.options.text&&s.push("ui-button-text-icon"+(i?"s":r.primary?"-primary":"-secondary")),r.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+r.primary+"'></span>"),r.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+r.secondary+"'></span>"),this.options.text||(s.push(i?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(n)))):s.push("ui-button-text-only"),t.addClass(s.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.1",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){e==="disabled"&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t=this.element.css("direction")==="rtl";this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e,t){function s(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.dpDiv=o(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function o(t){var n="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(n,"mouseout",function(){e(this).removeClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).removeClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(n,"mouseover",function(){e.datepicker._isDisabledDatepicker(i.inline?t.parent()[0]:i.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),this.className.indexOf("ui-datepicker-prev")!==-1&&e(this).addClass("ui-datepicker-prev-hover"),this.className.indexOf("ui-datepicker-next")!==-1&&e(this).addClass("ui-datepicker-next-hover"))})}function u(t,n){e.extend(t,n);for(var r in n)n[r]==null&&(t[r]=n[r]);return t}e.extend(e.ui,{datepicker:{version:"1.10.1"}});var n="datepicker",r=(new Date).getTime(),i;e.extend(s.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return u(this._defaults,e||{}),this},_attachDatepicker:function(t,n){var r,i,s;r=t.nodeName.toLowerCase(),i=r==="div"||r==="span",t.id||(this.uuid+=1,t.id="dp"+this.uuid),s=this._newInst(e(t),i),s.settings=e.extend({},n||{}),r==="input"?this._connectDatepicker(t,s):i&&this._inlineDatepicker(t,s)},_newInst:function(t,n){var r=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:r,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:n,dpDiv:n?o(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,r){var i=e(t);r.append=e([]),r.trigger=e([]);if(i.hasClass(this.markerClassName))return;this._attachments(i,r),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(r),e.data(t,n,r),r.settings.disabled&&this._disableDatepicker(t)},_attachments:function(t,n){var r,i,s,o=this._get(n,"appendText"),u=this._get(n,"isRTL");n.append&&n.append.remove(),o&&(n.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[u?"before":"after"](n.append)),t.unbind("focus",this._showDatepicker),n.trigger&&n.trigger.remove(),r=this._get(n,"showOn"),(r==="focus"||r==="both")&&t.focus(this._showDatepicker);if(r==="button"||r==="both")i=this._get(n,"buttonText"),s=this._get(n,"buttonImage"),n.trigger=e(this._get(n,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:s,alt:i,title:i}):e("<button type='button'></button>").addClass(this._triggerClass).html(s?e("<img/>").attr({src:s,alt:i,title:i}):i)),t[u?"before":"after"](n.trigger),n.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1})},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,n,r,i,s=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){n=0,r=0;for(i=0;i<e.length;i++)e[i].length>n&&(n=e[i].length,r=i);return r},s.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),s.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-s.getDay())),e.input.attr("size",this._formatDate(e,s).length)}},_inlineDatepicker:function(t,r){var i=e(t);if(i.hasClass(this.markerClassName))return;i.addClass(this.markerClassName).append(r.dpDiv),e.data(t,n,r),this._setDate(r,this._getDefaultDate(r),!0),this._updateDatepicker(r),this._updateAlternate(r),r.settings.disabled&&this._disableDatepicker(t),r.dpDiv.css("display","block")},_dialogDatepicker:function(t,r,i,s,o){var a,f,l,c,h,p=this._dialogInst;return p||(this.uuid+=1,a="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+a+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),p=this._dialogInst=this._newInst(this._dialogInput,!1),p.settings={},e.data(this._dialogInput[0],n,p)),u(p.settings,s||{}),r=r&&r.constructor===Date?this._formatDate(p,r):r,this._dialogInput.val(r),this._pos=o?o.length?o:[o.pageX,o.pageY]:null,this._pos||(f=document.documentElement.clientWidth,l=document.documentElement.clientHeight,c=document.documentElement.scrollLeft||document.body.scrollLeft,h=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[f/2-100+c,l/2-150+h]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),p.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],n,p),this},_destroyDatepicker:function(t){var r,i=e(t),s=e.data(t,n);if(!i.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase(),e.removeData(t,n),r==="input"?(s.append.remove(),s.trigger.remove(),i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):(r==="div"||r==="span")&&i.removeClass(this.markerClassName).empty()},_enableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!1,o.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().removeClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e})},_disableDatepicker:function(t){var r,i,s=e(t),o=e.data(t,n);if(!s.hasClass(this.markerClassName))return;r=t.nodeName.toLowerCase();if(r==="input")t.disabled=!0,o.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if(r==="div"||r==="span")i=s.children("."+this._inlineClass),i.children().addClass("ui-state-disabled"),i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0);this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;t<this._disabledInputs.length;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,n)}catch(r){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(n,r,i){var s,o,a,f,l=this._getInst(n);if(arguments.length===2&&typeof r=="string")return r==="defaults"?e.extend({},e.datepicker._defaults):l?r==="all"?e.extend({},l.settings):this._get(l,r):null;s=r||{},typeof r=="string"&&(s={},s[r]=i),l&&(this._curInst===l&&this._hideDatepicker(),o=this._getDateDatepicker(n,!0),a=this._getMinMaxDate(l,"min"),f=this._getMinMaxDate(l,"max"),u(l.settings,s),a!==null&&s.dateFormat!==t&&s.minDate===t&&(l.settings.minDate=this._formatDate(l,a)),f!==null&&s.dateFormat!==t&&s.maxDate===t&&(l.settings.maxDate=this._formatDate(l,f)),"disabled"in s&&(s.disabled?this._disableDatepicker(n):this._enableDatepicker(n)),this._attachments(e(n),l),this._autoSize(l),this._setDate(l,o),this._updateAlternate(l),this._updateDatepicker(l))},_changeDatepicker:function(e,t,n){this._optionDatepicker(e,t,n)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var n=this._getInst(e);n&&(this._setDate(n,t),this._updateDatepicker(n),this._updateAlternate(n))},_getDateDatepicker:function(e,t){var n=this._getInst(e);return n&&!n.inline&&this._setDateFromField(n,t),n?this._getDate(n):null},_doKeyDown:function(t){var n,r,i,s=e.datepicker._getInst(t.target),o=!0,u=s.dpDiv.is(".ui-datepicker-rtl");s._keyEvent=!0;if(e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return i=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",s.dpDiv),i[0]&&e.datepicker._selectDay(t.target,s.selectedMonth,s.selectedYear,i[0]),n=e.datepicker._get(s,"onSelect"),n?(r=e.datepicker._formatDate(s),n.apply(s.input?s.input[0]:null,[r,s])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(s,"stepBigMonths"):-e.datepicker._get(s,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,u?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(s,"stepBigMonths"):+e.datepicker._get(s,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else t.keyCode===36&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var n,r,i=e.datepicker._getInst(t.target);if(e.datepicker._get(i,"constrainInput"))return n=e.datepicker._possibleChars(e.datepicker._get(i,"dateFormat")),r=String.fromCharCode(t.charCode==null?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||r<" "||!n||n.indexOf(r)>-1},_doKeyUp:function(t){var n,r=e.datepicker._getInst(t.target);if(r.input.val()!==r.lastVal)try{n=e.datepicker.parseDate(e.datepicker._get(r,"dateFormat"),r.input?r.input.val():null,e.datepicker._getFormatConfig(r)),n&&(e.datepicker._setDateFromField(r),e.datepicker._updateAlternate(r),e.datepicker._updateDatepicker(r))}catch(i){}return!0},_showDatepicker:function(t){t=t.target||t,t.nodeName.toLowerCase()!=="input"&&(t=e("input",t.parentNode)[0]);if(e.datepicker._isDisabledDatepicker(t)||e.datepicker._lastInput===t)return;var n,r,i,s,o,a,f;n=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==n&&(e.datepicker._curInst.dpDiv.stop(!0,!0),n&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),r=e.datepicker._get(n,"beforeShow"),i=r?r.apply(t,[t,n]):{};if(i===!1)return;u(n.settings,i),n.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(n),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),s=!1,e(t).parents().each(function(){return s|=e(this).css("position")==="fixed",!s}),o={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,n.dpDiv.empty(),n.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(n),o=e.datepicker._checkOffset(n,o,s),n.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":s?"fixed":"absolute",display:"none",left:o.left+"px",top:o.top+"px"}),n.inline||(a=e.datepicker._get(n,"showAnim"),f=e.datepicker._get(n,"duration"),n.dpDiv.zIndex(e(t).zIndex()+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[a]?n.dpDiv.show(a,e.datepicker._get(n,"showOptions"),f):n.dpDiv[a||"show"](a?f:null),n.input.is(":visible")&&!n.input.is(":disabled")&&n.input.focus(),e.datepicker._curInst=n)},_updateDatepicker:function(t){this.maxRows=4,i=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t),t.dpDiv.find("."+this._dayOverClass+" a").mouseover();var n,r=this._getNumberOfMonths(t),s=r[1],o=17;t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&t.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",o*s+"em"),t.dpDiv[(r[0]!==1||r[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&t.input&&t.input.is(":visible")&&!t.input.is(":disabled")&&t.input[0]!==document.activeElement&&t.input.focus(),t.yearshtml&&(n=t.yearshtml,setTimeout(function(){n===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),n=t.yearshtml=null},0))},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(t,n,r){var i=t.dpDiv.outerWidth(),s=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,u=t.input?t.input.outerHeight():0,a=document.documentElement.clientWidth+(r?0:e(document).scrollLeft()),f=document.documentElement.clientHeight+(r?0:e(document).scrollTop());return n.left-=this._get(t,"isRTL")?i-o:0,n.left-=r&&n.left===t.input.offset().left?e(document).scrollLeft():0,n.top-=r&&n.top===t.input.offset().top+u?e(document).scrollTop():0,n.left-=Math.min(n.left,n.left+i>a&&a>i?Math.abs(n.left+i-a):0),n.top-=Math.min(n.top,n.top+s>f&&f>s?Math.abs(s+u):0),n},_findPos:function(t){var n,r=this._getInst(t),i=this._get(r,"isRTL");while(t&&(t.type==="hidden"||t.nodeType!==1||e.expr.filters.hidden(t)))t=t[i?"previousSibling":"nextSibling"];return n=e(t).offset(),[n.left,n.top]},_hideDatepicker:function(t){var r,i,s,o,u=this._curInst;if(!u||t&&u!==e.data(t,n))return;this._datepickerShowing&&(r=this._get(u,"showAnim"),i=this._get(u,"duration"),s=function(){e.datepicker._tidyDialog(u)},e.effects&&(e.effects.effect[r]||e.effects[r])?u.dpDiv.hide(r,e.datepicker._get(u,"showOptions"),i,s):u.dpDiv[r==="slideDown"?"slideUp":r==="fadeIn"?"fadeOut":"hide"](r?i:null,s),r||s(),this._datepickerShowing=!1,o=this._get(u,"onClose"),o&&o.apply(u.input?u.input[0]:null,[u.input?u.input.val():"",u]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(!e.datepicker._curInst)return;var n=e(t.target),r=e.datepicker._getInst(n[0]);(n[0].id!==e.datepicker._mainDivId&&n.parents("#"+e.datepicker._mainDivId).length===0&&!n.hasClass(e.datepicker.markerClassName)&&!n.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||n.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==r)&&e.datepicker._hideDatepicker()},_adjustDate:function(t,n,r){var i=e(t),s=this._getInst(i[0]);if(this._isDisabledDatepicker(i[0]))return;this._adjustInstDate(s,n+(r==="M"?this._get(s,"showCurrentAtPos"):0),r),this._updateDatepicker(s)},_gotoToday:function(t){var n,r=e(t),i=this._getInst(r[0]);this._get(i,"gotoCurrent")&&i.currentDay?(i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear):(n=new Date,i.selectedDay=n.getDate(),i.drawMonth=i.selectedMonth=n.getMonth(),i.drawYear=i.selectedYear=n.getFullYear()),this._notifyChange(i),this._adjustDate(r)},_selectMonthYear:function(t,n,r){var i=e(t),s=this._getInst(i[0]);s["selected"+(r==="M"?"Month":"Year")]=s["draw"+(r==="M"?"Month":"Year")]=parseInt(n.options[n.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(i)},_selectDay:function(t,n,r,i){var s,o=e(t);if(e(i).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0]))return;s=this._getInst(o[0]),s.selectedDay=s.currentDay=e("a",i).html(),s.selectedMonth=s.currentMonth=n,s.selectedYear=s.currentYear=r,this._selectDate(t,this._formatDate(s,s.currentDay,s.currentMonth,s.currentYear))},_clearDate:function(t){var n=e(t);this._selectDate(n,"")},_selectDate:function(t,n){var r,i=e(t),s=this._getInst(i[0]);n=n!=null?n:this._formatDate(s),s.input&&s.input.val(n),this._updateAlternate(s),r=this._get(s,"onSelect"),r?r.apply(s.input?s.input[0]:null,[n,s]):s.input&&s.input.trigger("change"),s.inline?this._updateDatepicker(s):(this._hideDatepicker(),this._lastInput=s.input[0],typeof s.input[0]!="object"&&s.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var n,r,i,s=this._get(t,"altField");s&&(n=this._get(t,"altFormat")||this._get(t,"dateFormat"),r=this._getDate(t),i=this.formatDate(n,r,this._getFormatConfig(t)),e(s).each(function(){e(this).val(i)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&t<6,""]},iso8601Week:function(e){var t,n=new Date(e.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),t=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((t-n)/864e5)/7)+1},parseDate:function(t,n,r){if(t==null||n==null)throw"Invalid arguments";n=typeof n=="object"?n.toString():n+"";if(n==="")return null;var i,s,o,u=0,a=(r?r.shortYearCutoff:null)||this._defaults.shortYearCutoff,f=typeof a!="string"?a:(new Date).getFullYear()%100+parseInt(a,10),l=(r?r.dayNamesShort:null)||this._defaults.dayNamesShort,c=(r?r.dayNames:null)||this._defaults.dayNames,h=(r?r.monthNamesShort:null)||this._defaults.monthNamesShort,p=(r?r.monthNames:null)||this._defaults.monthNames,d=-1,v=-1,m=-1,g=-1,y=!1,b,w=function(e){var n=i+1<t.length&&t.charAt(i+1)===e;return n&&i++,n},E=function(e){var t=w(e),r=e==="@"?14:e==="!"?20:e==="y"&&t?4:e==="o"?3:2,i=new RegExp("^\\d{1,"+r+"}"),s=n.substring(u).match(i);if(!s)throw"Missing number at position "+u;return u+=s[0].length,parseInt(s[0],10)},S=function(t,r,i){var s=-1,o=e.map(w(t)?i:r,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});e.each(o,function(e,t){var r=t[1];if(n.substr(u,r.length).toLowerCase()===r.toLowerCase())return s=t[0],u+=r.length,!1});if(s!==-1)return s+1;throw"Unknown name at position "+u},x=function(){if(n.charAt(u)!==t.charAt(i))throw"Unexpected literal at position "+u;u++};for(i=0;i<t.length;i++)if(y)t.charAt(i)==="'"&&!w("'")?y=!1:x();else switch(t.charAt(i)){case"d":m=E("d");break;case"D":S("D",l,c);break;case"o":g=E("o");break;case"m":v=E("m");break;case"M":v=S("M",h,p);break;case"y":d=E("y");break;case"@":b=new Date(E("@")),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"!":b=new Date((E("!")-this._ticksTo1970)/1e4),d=b.getFullYear(),v=b.getMonth()+1,m=b.getDate();break;case"'":w("'")?x():y=!0;break;default:x()}if(u<n.length){o=n.substr(u);if(!/^\s+/.test(o))throw"Extra/unparsed characters found in date: "+o}d===-1?d=(new Date).getFullYear():d<100&&(d+=(new Date).getFullYear()-(new Date).getFullYear()%100+(d<=f?0:-100));if(g>-1){v=1,m=g;do{s=this._getDaysInMonth(d,v-1);if(m<=s)break;v++,m-=s}while(!0)}b=this._daylightSavingAdjust(new Date(d,v-1,m));if(b.getFullYear()!==d||b.getMonth()+1!==v||b.getDate()!==m)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1e7,formatDate:function(e,t,n){if(!t)return"";var r,i=(n?n.dayNamesShort:null)||this._defaults.dayNamesShort,s=(n?n.dayNames:null)||this._defaults.dayNames,o=(n?n.monthNamesShort:null)||this._defaults.monthNamesShort,u=(n?n.monthNames:null)||this._defaults.monthNames,a=function(t){var n=r+1<e.length&&e.charAt(r+1)===t;return n&&r++,n},f=function(e,t,n){var r=""+t;if(a(e))while(r.length<n)r="0"+r;return r},l=function(e,t,n,r){return a(e)?r[t]:n[t]},c="",h=!1;if(t)for(r=0;r<e.length;r++)if(h)e.charAt(r)==="'"&&!a("'")?h=!1:c+=e.charAt(r);else switch(e.charAt(r)){case"d":c+=f("d",t.getDate(),2);break;case"D":c+=l("D",t.getDay(),i,s);break;case"o":c+=f("o",Math.round(((new Date(t.getFullYear(),t.getMonth(),t.getDate())).getTime()-(new Date(t.getFullYear(),0,0)).getTime())/864e5),3);break;case"m":c+=f("m",t.getMonth()+1,2);break;case"M":c+=l("M",t.getMonth(),o,u);break;case"y":c+=a("y")?t.getFullYear():(t.getYear()%100<10?"0":"")+t.getYear()%100;break;case"@":c+=t.getTime();break;case"!":c+=t.getTime()*1e4+this._ticksTo1970;break;case"'":a("'")?c+="'":h=!0;break;default:c+=e.charAt(r)}return c},_possibleChars:function(e){var t,n="",r=!1,i=function(n){var r=t+1<e.length&&e.charAt(t+1)===n;return r&&t++,r};for(t=0;t<e.length;t++)if(r)e.charAt(t)==="'"&&!i("'")?r=!1:n+=e.charAt(t);else switch(e.charAt(t)){case"d":case"m":case"y":case"@":n+="0123456789";break;case"D":case"M":return null;case"'":i("'")?n+="'":r=!0;break;default:n+=e.charAt(t)}return n},_get:function(e,n){return e.settings[n]!==t?e.settings[n]:this._defaults[n]},_setDateFromField:function(e,t){if(e.input.val()===e.lastVal)return;var n=this._get(e,"dateFormat"),r=e.lastVal=e.input?e.input.val():null,i=this._getDefaultDate(e),s=i,o=this._getFormatConfig(e);try{s=this.parseDate(n,r,o)||i}catch(u){r=t?"":r}e.selectedDay=s.getDate(),e.drawMonth=e.selectedMonth=s.getMonth(),e.drawYear=e.selectedYear=s.getFullYear(),e.currentDay=r?s.getDate():0,e.currentMonth=r?s.getMonth():0,e.currentYear=r?s.getFullYear():0,this._adjustInstDate(e)},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,n,r){var i=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},s=function(n){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),n,e.datepicker._getFormatConfig(t))}catch(r){}var i=(n.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,s=i.getFullYear(),o=i.getMonth(),u=i.getDate(),a=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,f=a.exec(n);while(f){switch(f[2]||"d"){case"d":case"D":u+=parseInt(f[1],10);break;case"w":case"W":u+=parseInt(f[1],10)*7;break;case"m":case"M":o+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o));break;case"y":case"Y":s+=parseInt(f[1],10),u=Math.min(u,e.datepicker._getDaysInMonth(s,o))}f=a.exec(n)}return new Date(s,o,u)},o=n==null||n===""?r:typeof n=="string"?s(n):typeof n=="number"?isNaN(n)?r:i(n):new Date(n.getTime());return o=o&&o.toString()==="Invalid Date"?r:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,n){var r=!t,i=e.selectedMonth,s=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),(i!==e.selectedMonth||s!==e.selectedYear)&&!n&&this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(r?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&e.input.val()===""?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var n=this._get(t,"stepMonths"),i="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,-n,"M")},next:function(){window["DP_jQuery_"+r].datepicker._adjustDate(i,+n,"M")},hide:function(){window["DP_jQuery_"+r].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+r].datepicker._gotoToday(i)},selectDay:function(){return window["DP_jQuery_"+r].datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+r].datepicker._selectMonthYear(i,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q=new Date,R=this._daylightSavingAdjust(new Date(q.getFullYear(),q.getMonth(),q.getDate())),U=this._get(e,"isRTL"),z=this._get(e,"showButtonPanel"),W=this._get(e,"hideIfNoPrevNext"),X=this._get(e,"navigationAsDateFormat"),V=this._getNumberOfMonths(e),$=this._get(e,"showCurrentAtPos"),J=this._get(e,"stepMonths"),K=V[0]!==1||V[1]!==1,Q=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),G=this._getMinMaxDate(e,"min"),Y=this._getMinMaxDate(e,"max"),Z=e.drawMonth-$,et=e.drawYear;Z<0&&(Z+=12,et--);if(Y){t=this._daylightSavingAdjust(new Date(Y.getFullYear(),Y.getMonth()-V[0]*V[1]+1,Y.getDate())),t=G&&t<G?G:t;while(this._daylightSavingAdjust(new Date(et,Z,1))>t)Z--,Z<0&&(Z=11,et--)}e.drawMonth=Z,e.drawYear=et,n=this._get(e,"prevText"),n=X?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z-J,1)),this._getFormatConfig(e)):n,r=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>":W?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"e":"w")+"'>"+n+"</span></a>",i=this._get(e,"nextText"),i=X?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z+J,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>":W?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(U?"w":"e")+"'>"+i+"</span></a>",o=this._get(e,"currentText"),u=this._get(e,"gotoCurrent")&&e.currentDay?Q:R,o=X?this.formatDate(o,u,this._getFormatConfig(e)):o,a=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",f=z?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(U?a:"")+(this._isInRange(e,u)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(U?"":a)+"</div>":"",l=parseInt(this._get(e,"firstDay"),10),l=isNaN(l)?0:l,c=this._get(e,"showWeek"),h=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),d=this._get(e,"monthNames"),v=this._get(e,"monthNamesShort"),m=this._get(e,"beforeShowDay"),g=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),w="",E;for(S=0;S<V[0];S++){x="",this.maxRows=4;for(T=0;T<V[1];T++){N=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),C=" ui-corner-all",k="";if(K){k+="<div class='ui-datepicker-group";if(V[1]>1)switch(T){case 0:k+=" ui-datepicker-group-first",C=" ui-corner-"+(U?"right":"left");break;case V[1]-1:k+=" ui-datepicker-group-last",C=" ui-corner-"+(U?"left":"right");break;default:k+=" ui-datepicker-group-middle",C=""}k+="'>"}k+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+C+"'>"+(/all|left/.test(C)&&S===0?U?s:r:"")+(/all|right/.test(C)&&S===0?U?r:s:"")+this._generateMonthYearHeader(e,Z,et,G,Y,S>0||T>0,d,v)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",L=c?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"";for(E=0;E<7;E++)A=(E+l)%7,L+="<th"+((E+l+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+h[A]+"'>"+p[A]+"</span></th>";k+=L+"</tr></thead><tbody>",O=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,O)),M=(this._getFirstDayOfMonth(et,Z)-l+7)%7,_=Math.ceil((M+O)/7),D=K?this.maxRows>_?this.maxRows:_:_,this.maxRows=D,P=this._daylightSavingAdjust(new Date(et,Z,1-M));for(H=0;H<D;H++){k+="<tr>",B=c?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(P)+"</td>":"";for(E=0;E<7;E++)j=m?m.apply(e.input?e.input[0]:null,[P]):[!0,""],F=P.getMonth()!==Z,I=F&&!y||!j[0]||G&&P<G||Y&&P>Y,B+="<td class='"+((E+l+6)%7>=5?" ui-datepicker-week-end":"")+(F?" ui-datepicker-other-month":"")+(P.getTime()===N.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===P.getTime()&&b.getTime()===N.getTime()?" "+this._dayOverClass:"")+(I?" "+this._unselectableClass+" ui-state-disabled":"")+(F&&!g?"":" "+j[1]+(P.getTime()===Q.getTime()?" "+this._currentClass:"")+(P.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+((!F||g)&&j[2]?" title='"+j[2].replace(/'/g,"&#39;")+"'":"")+(I?"":" data-handler='selectDay' data-event='click' data-month='"+P.getMonth()+"' data-year='"+P.getFullYear()+"'")+">"+(F&&!g?"&#xa0;":I?"<span class='ui-state-default'>"+P.getDate()+"</span>":"<a class='ui-state-default"+(P.getTime()===R.getTime()?" ui-state-highlight":"")+(P.getTime()===Q.getTime()?" ui-state-active":"")+(F?" ui-priority-secondary":"")+"' href='#'>"+P.getDate()+"</a>")+"</td>",P.setDate(P.getDate()+1),P=this._daylightSavingAdjust(P);k+=B+"</tr>"}Z++,Z>11&&(Z=0,et++),k+="</tbody></table>"+(K?"</div>"+(V[0]>0&&T===V[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),x+=k}w+=x}return w+=f,e._keyEvent=!1,w},_generateMonthYearHeader:function(e,t,n,r,i,s,o,u){var a,f,l,c,h,p,d,v,m=this._get(e,"changeMonth"),g=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",w="";if(s||!m)w+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{a=r&&r.getFullYear()===n,f=i&&i.getFullYear()===n,w+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(l=0;l<12;l++)(!a||l>=r.getMonth())&&(!f||l<=i.getMonth())&&(w+="<option value='"+l+"'"+(l===t?" selected='selected'":"")+">"+u[l]+"</option>");w+="</select>"}y||(b+=w+(s||!m||!g?"&#xa0;":""));if(!e.yearshtml){e.yearshtml="";if(s||!g)b+="<span class='ui-datepicker-year'>"+n+"</span>";else{c=this._get(e,"yearRange").split(":"),h=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?n+parseInt(e.substring(1),10):e.match(/[+\-].*/)?h+parseInt(e,10):parseInt(e,10);return isNaN(t)?h:t},d=p(c[0]),v=Math.max(d,p(c[1]||"")),d=r?Math.max(d,r.getFullYear()):d,v=i?Math.min(v,i.getFullYear()):v,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;d<=v;d++)e.yearshtml+="<option value='"+d+"'"+(d===n?" selected='selected'":"")+">"+d+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}}return b+=this._get(e,"yearSuffix"),y&&(b+=(s||!m||!g?"&#xa0;":"")+w),b+="</div>",b},_adjustInstDate:function(e,t,n){var r=e.drawYear+(n==="Y"?t:0),i=e.drawMonth+(n==="M"?t:0),s=Math.min(e.selectedDay,this._getDaysInMonth(r,i))+(n==="D"?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(r,i,s)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),(n==="M"||n==="Y")&&this._notifyChange(e)},_restrictMinMax:function(e,t){var n=this._getMinMaxDate(e,"min"),r=this._getMinMaxDate(e,"max"),i=n&&t<n?n:t;return r&&i>r?r:i},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return t==null?[1,1]:typeof t=="number"?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return(new Date(e,t,1)).getDay()},_canAdjustMonth:function(e,t,n,r){var i=this._getNumberOfMonths(e),s=this._daylightSavingAdjust(new Date(n,r+(t<0?t:i[0]*i[1]),1));return t<0&&s.setDate(this._getDaysInMonth(s.getFullYear(),s.getMonth())),this._isInRange(e,s)},_isInRange:function(e,t){var n,r,i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),o=null,u=null,a=this._get(e,"yearRange");return a&&(n=a.split(":"),r=(new Date).getFullYear(),o=parseInt(n[0],10),u=parseInt(n[1],10),n[0].match(/[+\-].*/)&&(o+=r),n[1].match(/[+\-].*/)&&(u+=r)),(!i||t.getTime()>=i.getTime())&&(!s||t.getTime()<=s.getTime())&&(!o||t.getFullYear()>=o)&&(!u||t.getFullYear()<=u)},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t=typeof t!="string"?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,n,r){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var i=t?typeof t=="object"?t:this._daylightSavingAdjust(new Date(r,n,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),i,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),e("#"+e.datepicker._mainDivId).length===0&&e("body").append(e.datepicker.dpDiv);var n=Array.prototype.slice.call(arguments,1);return typeof t!="string"||t!=="isDisabled"&&t!=="getDate"&&t!=="widget"?t==="option"&&arguments.length===2&&typeof arguments[1]=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n)):this.each(function(){typeof t=="string"?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(n)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(n))},e.datepicker=new s,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.10.1",window["DP_jQuery_"+r]=e})(jQuery);(function(e,t){var n={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},r={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.1",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var n=e(this).css(t).offset().top;n<0&&e(this).css("top",t.top-n)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var n=this;if(!this._isOpen||this._trigger("beforeClose",t)===!1)return;this._isOpen=!1,this._destroyOverlay(),this.opener.filter(":focusable").focus().length||e(this.document[0].activeElement).blur(),this._hide(this.uiDialog,this.options.hide,function(){n._trigger("close",t)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var n=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return n&&!t&&this._trigger("focus",e),n},open:function(){var t=this;if(this._isOpen){this._moveToTop()&&this._focusTabbable();return}this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open")},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function n(){var t=this.document[0].activeElement,n=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);n||this._focusTabbable()}t.preventDefault(),n.call(this),this._delay(n)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE){t.preventDefault(),this.close(t);return}if(t.keyCode!==e.ui.keyCode.TAB)return;var n=this.uiDialog.find(":tabbable"),r=n.filter(":first"),i=n.filter(":last");t.target!==i[0]&&t.target!==this.uiDialog[0]||!!t.shiftKey?(t.target===r[0]||t.target===this.uiDialog[0])&&t.shiftKey&&(i.focus(1),t.preventDefault()):(r.focus(1),t.preventDefault())},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,n=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty();if(e.isEmptyObject(n)||e.isArray(n)&&!n.length){this.uiDialog.removeClass("ui-dialog-buttons");return}e.each(n,function(n,r){var i,s;r=e.isFunction(r)?{click:r,text:n}:r,r=e.extend({type:"button"},r),i=r.click,r.click=function(){i.apply(t.element[0],arguments)},s={icons:r.icons,text:r.showText},delete r.icons,delete r.showText,e("<button></button>",r).button(s).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){function r(e){return{position:e.position,offset:e.offset}}var t=this,n=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(n,i){e(this).addClass("ui-dialog-dragging"),t._blockFrames(),t._trigger("dragStart",n,r(i))},drag:function(e,n){t._trigger("drag",e,r(n))},stop:function(i,s){n.position=[s.position.left-t.document.scrollLeft(),s.position.top-t.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),t._unblockFrames(),t._trigger("dragStop",i,r(s))}})},_makeResizable:function(){function o(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var t=this,n=this.options,r=n.resizable,i=this.uiDialog.css("position"),s=typeof r=="string"?r:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:n.maxWidth,maxHeight:n.maxHeight,minWidth:n.minWidth,minHeight:this._minHeight(),handles:s,start:function(n,r){e(this).addClass("ui-dialog-resizing"),t._blockFrames(),t._trigger("resizeStart",n,o(r))},resize:function(e,n){t._trigger("resize",e,o(n))},stop:function(r,i){n.height=e(this).height(),n.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),t._unblockFrames(),t._trigger("resizeStop",r,o(i))}}).css("position",i)},_minHeight:function(){var e=this.options;return e.height==="auto"?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,o={};e.each(t,function(e,t){i._setOption(e,t),e in n&&(s=!0),e in r&&(o[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(e,t){var n,r,i=this.uiDialog;e==="dialogClass"&&i.removeClass(this.options.dialogClass).addClass(t);if(e==="disabled")return;this._super(e,t),e==="appendTo"&&this.uiDialog.appendTo(this._appendTo()),e==="buttons"&&this._createButtons(),e==="closeText"&&this.uiDialogTitlebarClose.button({label:""+t}),e==="draggable"&&(n=i.is(":data(ui-draggable)"),n&&!t&&i.draggable("destroy"),!n&&t&&this._makeDraggable()),e==="position"&&this._position(),e==="resizable"&&(r=i.is(":data(ui-resizable)"),r&&!t&&i.resizable("destroy"),r&&typeof t=="string"&&i.resizable("option","handles",t),!r&&t!==!1&&this._makeResizable()),e==="title"&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))},_size:function(){var e,t,n,r=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),r.minWidth>r.width&&(r.width=r.minWidth),e=this.uiDialog.css({height:"auto",width:r.width}).outerHeight(),t=Math.max(0,r.minHeight-e),n=typeof r.maxHeight=="number"?Math.max(0,r.maxHeight-e):"none",r.height==="auto"?this.element.css({minHeight:t,maxHeight:n,height:"auto"}):this.element.height(Math.max(0,r.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_createOverlay:function(){if(!this.options.modal)return;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(t){!e(t.target).closest(".ui-dialog").length&&!e(t.target).closest(".ui-datepicker").length&&(t.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data("ui-dialog")._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++},_destroyOverlay:function(){if(!this.options.modal)return;this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t=this.options.position,n=[],r=[0,0],i;if(t){if(typeof t=="string"||typeof t=="object"&&"0"in t)n=t.split?t.split(" "):[t[0],t[1]],n.length===1&&(n[1]=n[0]),e.each(["left","top"],function(e,t){+n[e]===n[e]&&(r[e]=n[e],n[e]=t)}),t={my:n[0]+(r[0]<0?r[0]:"+"+r[0])+" "+n[1]+(r[1]<0?r[1]:"+"+r[1]),at:n.join(" ")};t=e.extend({},e.ui.dialog.prototype.options.position,t)}else t=e.ui.dialog.prototype.options.position;i=this.uiDialog.is(":visible"),i||this.uiDialog.show(),this.uiDialog.position(t),i||this.uiDialog.hide()}})})(jQuery);(function(e,t){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){this.options.helper==="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var n=this.options;return this.helper||n.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(n.iframeFix===!0?"iframe":n.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var n=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,n.cursorAt&&this._adjustOffsetFromHelper(n.cursorAt),n.containment&&this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,n){this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute");if(!n){var r=this._uiHash();if(this._trigger("drag",t,r)===!1)return this._mouseUp({}),!1;this.position=r.position}if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";return e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var n,r=this,i=!1,s=!1;e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),n=this.element[0];while(n&&(n=n.parentNode))n===document&&(i=!0);return!i&&this.options.helper==="original"?!1:(this.options.revert==="invalid"&&!s||this.options.revert==="valid"&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){r._trigger("stop",t)!==!1&&r._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1)},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){var n=!this.options.handle||!e(this.options.handle,this.element).length?!0:!1;return e(this.options.handle,this.element).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t])):n.helper==="clone"?this.element.clone().removeAttr("id"):this.element;return r.parents("body").length||r.appendTo(n.appendTo==="parent"?this.element[0].parentNode:n.appendTo),r[0]!==this.element[0]&&!/(fixed|absolute)/.test(r.css("position"))&&r.css("position","absolute"),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[i.containment==="document"?0:e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,i.containment==="document"?0:e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(i.containment==="document"?0:e(window).scrollLeft())+e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(i.containment==="document"?0:e(window).scrollTop())+(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(i.containment)&&i.containment.constructor!==Array){n=e(i.containment),r=n[0];if(!r)return;t=e(r).css("overflow")!=="hidden",this.containment=[(parseInt(e(r).css("borderLeftWidth"),10)||0)+(parseInt(e(r).css("paddingLeft"),10)||0),(parseInt(e(r).css("borderTopWidth"),10)||0)+(parseInt(e(r).css("paddingTop"),10)||0),(t?Math.max(r.scrollWidth,r.offsetWidth):r.offsetWidth)-(parseInt(e(r).css("borderLeftWidth"),10)||0)-(parseInt(e(r).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(r.scrollHeight,r.offsetHeight):r.offsetHeight)-(parseInt(e(r).css("borderTopWidth"),10)||0)-(parseInt(e(r).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=n}else i.containment.constructor===Array&&(this.containment=i.containment)},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i,s,o=this.options,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName),f=t.pageX,l=t.pageY;return this.originalPosition&&(this.containment&&(this.relative_container?(r=this.relative_container.offset(),n=[this.containment[0]+r.left,this.containment[1]+r.top,this.containment[2]+r.left,this.containment[3]+r.top]):n=this.containment,t.pageX-this.offset.click.left<n[0]&&(f=n[0]+this.offset.click.left),t.pageY-this.offset.click.top<n[1]&&(l=n[1]+this.offset.click.top),t.pageX-this.offset.click.left>n[2]&&(f=n[2]+this.offset.click.left),t.pageY-this.offset.click.top>n[3]&&(l=n[3]+this.offset.click.top)),o.grid&&(i=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=n?i-this.offset.click.top>=n[1]||i-this.offset.click.top>n[3]?i:i-this.offset.click.top>=n[1]?i-o.grid[1]:i+o.grid[1]:i,s=o.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,f=n?s-this.offset.click.left>=n[0]||s-this.offset.click.left>n[2]?s:s-this.offset.click.left>=n[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,n,r){return r=r||this._uiHash(),e.ui.plugin.call(this,t,[n,r]),t==="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,n,r)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,n){var r=e(this).data("ui-draggable"),i=r.options,s=e.extend({},n,{item:r.element});r.sortables=[],e(i.connectToSortable).each(function(){var n=e.data(this,"ui-sortable");n&&!n.options.disabled&&(r.sortables.push({instance:n,shouldRevert:n.options.revert}),n.refreshPositions(),n._trigger("activate",t,s))})},stop:function(t,n){var r=e(this).data("ui-draggable"),i=e.extend({},n,{item:r.element});e.each(r.sortables,function(){this.instance.isOver?(this.instance.isOver=0,r.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,r.options.helper==="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,i))})},drag:function(t,n){var r=e(this).data("ui-draggable"),i=this;e.each(r.sortables,function(){var s=!1,o=this;this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(s=!0,e.each(r.sortables,function(){return this.instance.positionAbs=r.positionAbs,this.instance.helperProportions=r.helperProportions,this.instance.offset.click=r.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(s=!1),s})),s?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(i).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return n.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=r.offset.click.top,this.instance.offset.click.left=r.offset.click.left,this.instance.offset.parent.left-=r.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=r.offset.parent.top-this.instance.offset.parent.top,r._trigger("toSortable",t),r.dropped=this.instance.element,r.currentItem=r.element,this.instance.fromOutside=r),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),r._trigger("fromSortable",t),r.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),n=e(this).data("ui-draggable").options;t.css("cursor")&&(n._cursor=t.css("cursor")),t.css("cursor",n.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("opacity")&&(i._opacity=r.css("opacity")),r.css("opacity",i.opacity)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._opacity&&e(n.helper).css("opacity",r._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&t.scrollParent[0].tagName!=="HTML"&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var n=e(this).data("ui-draggable"),r=n.options,i=!1;if(n.scrollParent[0]!==document&&n.scrollParent[0].tagName!=="HTML"){if(!r.axis||r.axis!=="x")n.overflowOffset.top+n.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-n.overflowOffset.top<r.scrollSensitivity&&(n.scrollParent[0].scrollTop=i=n.scrollParent[0].scrollTop-r.scrollSpeed);if(!r.axis||r.axis!=="y")n.overflowOffset.left+n.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-n.overflowOffset.left<r.scrollSensitivity&&(n.scrollParent[0].scrollLeft=i=n.scrollParent[0].scrollLeft-r.scrollSpeed)}else{if(!r.axis||r.axis!=="x")t.pageY-e(document).scrollTop()<r.scrollSensitivity?i=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(i=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed));if(!r.axis||r.axis!=="y")t.pageX-e(document).scrollLeft()<r.scrollSensitivity?i=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(i=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))}i!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(n,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),n=t.options;t.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var n=e(this),r=n.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:n.outerWidth(),height:n.outerHeight(),top:r.top,left:r.left})})},drag:function(t,n){var r,i,s,o,u,a,f,l,c,h,p=e(this).data("ui-draggable"),d=p.options,v=d.snapTolerance,m=n.offset.left,g=m+p.helperProportions.width,y=n.offset.top,b=y+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--){u=p.snapElements[c].left,a=u+p.snapElements[c].width,f=p.snapElements[c].top,l=f+p.snapElements[c].height;if(!(u-v<m&&m<a+v&&f-v<y&&y<l+v||u-v<m&&m<a+v&&f-v<b&&b<l+v||u-v<g&&g<a+v&&f-v<y&&y<l+v||u-v<g&&g<a+v&&f-v<b&&b<l+v)){p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1;continue}d.snapMode!=="inner"&&(r=Math.abs(f-b)<=v,i=Math.abs(l-y)<=v,s=Math.abs(u-g)<=v,o=Math.abs(a-m)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f-p.helperProportions.height,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u-p.helperProportions.width}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a}).left-p.margins.left)),h=r||i||s||o,d.snapMode!=="outer"&&(r=Math.abs(f-y)<=v,i=Math.abs(l-b)<=v,s=Math.abs(u-m)<=v,o=Math.abs(a-g)<=v,r&&(n.position.top=p._convertPositionTo("relative",{top:f,left:0}).top-p.margins.top),i&&(n.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),s&&(n.position.left=p._convertPositionTo("relative",{top:0,left:u}).left-p.margins.left),o&&(n.position.left=p._convertPositionTo("relative",{top:0,left:a-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(r||i||s||o||h)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=r||i||s||o||h}}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,n=this.data("ui-draggable").options,r=e.makeArray(e(n.stack)).sort(function(t,n){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(n).css("zIndex"),10)||0)});if(!r.length)return;t=parseInt(e(r[0]).css("zIndex"),10)||0,e(r).each(function(n){e(this).css("zIndex",t+n)}),this.css("zIndex",t+r.length)}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,n){var r=e(n.helper),i=e(this).data("ui-draggable").options;r.css("zIndex")&&(i._zIndex=r.css("zIndex")),r.css("zIndex",i.zIndex)},stop:function(t,n){var r=e(this).data("ui-draggable").options;r._zIndex&&e(n.helper).css("zIndex",r._zIndex)}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.droppable",{version:"1.10.1",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t=this.options,n=t.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(n)?n:function(e){return e.is(n)},this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight},e.ui.ddmanager.droppables[t.scope]=e.ui.ddmanager.droppables[t.scope]||[],e.ui.ddmanager.droppables[t.scope].push(this),t.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){var t=0,n=e.ui.ddmanager.droppables[this.options.scope];for(;t<n.length;t++)n[t]===this&&n.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,n){t==="accept"&&(this.accept=e.isFunction(n)?n:function(e){return e.is(n)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),n&&this._trigger("activate",t,this.ui(n))},_deactivate:function(t){var n=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),n&&this._trigger("deactivate",t,this.ui(n))},_over:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(n)))},_out:function(t){var n=e.ui.ddmanager.current;if(!n||(n.currentItem||n.element)[0]===this.element[0])return;this.accept.call(this.element[0],n.currentItem||n.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(n)))},_drop:function(t,n){var r=n||e.ui.ddmanager.current,i=!1;return!r||(r.currentItem||r.element)[0]===this.element[0]?!1:(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");if(t.options.greedy&&!t.options.disabled&&t.options.scope===r.options.scope&&t.accept.call(t.element[0],r.currentItem||r.element)&&e.ui.intersect(r,e.extend(t,{offset:t.element.offset()}),t.options.tolerance))return i=!0,!1}),i?!1:this.accept.call(this.element[0],r.currentItem||r.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(r)),this.element):!1)},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,t,r){if(!t.offset)return!1;var i,s,o=(e.positionAbs||e.position.absolute).left,u=o+e.helperProportions.width,a=(e.positionAbs||e.position.absolute).top,f=a+e.helperProportions.height,l=t.offset.left,c=l+t.proportions.width,h=t.offset.top,p=h+t.proportions.height;switch(r){case"fit":return l<=o&&u<=c&&h<=a&&f<=p;case"intersect":return l<o+e.helperProportions.width/2&&u-e.helperProportions.width/2<c&&h<a+e.helperProportions.height/2&&f-e.helperProportions.height/2<p;case"pointer":return i=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,s=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,n(s,h,t.proportions.height)&&n(i,l,t.proportions.width);case"touch":return(a>=h&&a<=p||f>=h&&f<=p||a<h&&f>p)&&(o>=l&&o<=c||u>=l&&u<=c||o<l&&u>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,n){var r,i,s=e.ui.ddmanager.droppables[t.options.scope]||[],o=n?n.type:null,u=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(r=0;r<s.length;r++){if(s[r].options.disabled||t&&!s[r].accept.call(s[r].element[0],t.currentItem||t.element))continue;for(i=0;i<u.length;i++)if(u[i]===s[r].element[0]){s[r].proportions.height=0;continue e}s[r].visible=s[r].element.css("display")!=="none";if(!s[r].visible)continue;o==="mousedown"&&s[r]._activate.call(s[r],n),s[r].offset=s[r].element.offset(),s[r].proportions={width:s[r].element[0].offsetWidth,height:s[r].element[0].offsetHeight}}},drop:function(t,n){var r=!1;return e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options)return;!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(r=this._drop.call(this,n)||r),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,n))}),r},dragStart:function(t,n){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)})},drag:function(t,n){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,n),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible)return;var r,i,s,o=e.ui.intersect(t,this,this.options.tolerance),u=!o&&this.isover?"isout":o&&!this.isover?"isover":null;if(!u)return;this.options.greedy&&(i=this.options.scope,s=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===i}),s.length&&(r=e.data(s[0],"ui-droppable"),r.greedyChild=u==="isover")),r&&u==="isover"&&(r.isover=!1,r.isout=!0,r._out.call(r,n)),this[u]=!0,this[u==="isout"?"isover":"isout"]=!1,this[u==="isover"?"_over":"_out"].call(this,n),r&&u==="isout"&&(r.isout=!1,r.isover=!0,r._over.call(r,n))})},dragStop:function(t,n){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,n)}}})(jQuery);jQuery.effects||function(e,t){var n="ui-effects-";e.effects={effect:{}},function(e,t){function h(e,t,n){var r=u[t.type]||{};return e==null?n||!t.def?null:t.def:(e=r.floor?~~e:parseFloat(e),isNaN(e)?t.def:r.mod?(e+r.mod)%r.mod:0>e?0:r.max<e?r.max:e)}function p(t){var n=s(),r=n._rgba=[];return t=t.toLowerCase(),c(i,function(e,i){var s,u=i.re.exec(t),a=u&&i.parse(u),f=i.space||"rgba";if(a)return s=n[f](a),n[o[f].cache]=s[o[f].cache],r=n._rgba=s._rgba,!1}),r.length?(r.join()==="0,0,0,0"&&e.extend(r,l.transparent),n):l[t]}function d(e,t,n){return n=(n+1)%1,n*6<1?e+(t-e)*n*6:n*2<1?t:n*3<2?e+(t-e)*(2/3-n)*6:e}var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1]*2.55,e[2]*2.55,e[3]*2.55,e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],s=e.Color=function(t,n,r,i){return new e.Color.fn.parse(t,n,r,i)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},a=s.support={},f=e("<p>")[0],l,c=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",a.rgba=f.style.backgroundColor.indexOf("rgba")>-1,c(o,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=e.extend(s.prototype,{parse:function(n,r,i,u){if(n===t)return this._rgba=[null,null,null,null],this;if(n.jquery||n.nodeType)n=e(n).css(r),r=t;var a=this,f=e.type(n),d=this._rgba=[];r!==t&&(n=[n,r,i,u],f="array");if(f==="string")return this.parse(p(n)||l._default);if(f==="array")return c(o.rgba.props,function(e,t){d[t.idx]=h(n[t.idx],t)}),this;if(f==="object")return n instanceof s?c(o,function(e,t){n[t.cache]&&(a[t.cache]=n[t.cache].slice())}):c(o,function(t,r){var i=r.cache;c(r.props,function(e,t){if(!a[i]&&r.to){if(e==="alpha"||n[e]==null)return;a[i]=r.to(a._rgba)}a[i][t.idx]=h(n[e],t,!0)}),a[i]&&e.inArray(null,a[i].slice(0,3))<0&&(a[i][3]=1,r.from&&(a._rgba=r.from(a[i])))}),this},is:function(e){var t=s(e),n=!0,r=this;return c(o,function(e,i){var s,o=t[i.cache];return o&&(s=r[i.cache]||i.to&&i.to(r._rgba)||[],c(i.props,function(e,t){if(o[t.idx]!=null)return n=o[t.idx]===s[t.idx],n})),n}),n},_space:function(){var e=[],t=this;return c(o,function(n,r){t[r.cache]&&e.push(n)}),e.pop()},transition:function(e,t){var n=s(e),r=n._space(),i=o[r],a=this.alpha()===0?s("transparent"):this,f=a[i.cache]||i.to(a._rgba),l=f.slice();return n=n[i.cache],c(i.props,function(e,r){var i=r.idx,s=f[i],o=n[i],a=u[r.type]||{};if(o===null)return;s===null?l[i]=o:(a.mod&&(o-s>a.mod/2?s+=a.mod:s-o>a.mod/2&&(s-=a.mod)),l[i]=h((o-s)*t+s,r))}),this[r](l)},blend:function(t){if(this._rgba[3]===1)return this;var n=this._rgba.slice(),r=n.pop(),i=s(t)._rgba;return s(e.map(n,function(e,t){return(1-r)*i[t]+r*e}))},toRgbaString:function(){var t="rgba(",n=e.map(this._rgba,function(e,t){return e==null?t>2?1:0:e});return n[3]===1&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=e.map(this.hsla(),function(e,t){return e==null&&(e=t>2?1:0),t&&t<3&&(e=Math.round(e*100)+"%"),e});return n[3]===1&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),r=n.pop();return t&&n.push(~~(r*255)),"#"+e.map(n,function(e){return e=(e||0).toString(16),e.length===1?"0"+e:e}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,o.hsla.to=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/255,n=e[1]/255,r=e[2]/255,i=e[3],s=Math.max(t,n,r),o=Math.min(t,n,r),u=s-o,a=s+o,f=a*.5,l,c;return o===s?l=0:t===s?l=60*(n-r)/u+360:n===s?l=60*(r-t)/u+120:l=60*(t-n)/u+240,u===0?c=0:f<=.5?c=u/a:c=u/(2-a),[Math.round(l)%360,c,f,i==null?1:i]},o.hsla.from=function(e){if(e[0]==null||e[1]==null||e[2]==null)return[null,null,null,e[3]];var t=e[0]/360,n=e[1],r=e[2],i=e[3],s=r<=.5?r*(1+n):r+n-r*n,o=2*r-s;return[Math.round(d(o,s,t+1/3)*255),Math.round(d(o,s,t)*255),Math.round(d(o,s,t-1/3)*255),i]},c(o,function(n,i){var o=i.props,u=i.cache,a=i.to,f=i.from;s.fn[n]=function(n){a&&!this[u]&&(this[u]=a(this._rgba));if(n===t)return this[u].slice();var r,i=e.type(n),l=i==="array"||i==="object"?n:arguments,p=this[u].slice();return c(o,function(e,t){var n=l[i==="object"?e:t.idx];n==null&&(n=p[t.idx]),p[t.idx]=h(n,t)}),f?(r=s(f(p)),r[u]=p,r):s(p)},c(o,function(t,i){if(s.fn[t])return;s.fn[t]=function(s){var o=e.type(s),u=t==="alpha"?this._hsla?"hsla":"rgba":n,a=this[u](),f=a[i.idx],l;return o==="undefined"?f:(o==="function"&&(s=s.call(this,f),o=e.type(s)),s==null&&i.empty?this:(o==="string"&&(l=r.exec(s),l&&(s=f+parseFloat(l[2])*(l[1]==="+"?1:-1))),a[i.idx]=s,this[u](a)))}})}),s.hook=function(t){var n=t.split(" ");c(n,function(t,n){e.cssHooks[n]={set:function(t,r){var i,o,u="";if(r!=="transparent"&&(e.type(r)!=="string"||(i=p(r)))){r=s(i||r);if(!a.rgba&&r._rgba[3]!==1){o=n==="backgroundColor"?t.parentNode:t;while((u===""||u==="transparent")&&o&&o.style)try{u=e.css(o,"backgroundColor"),o=o.parentNode}catch(f){}r=r.blend(u&&u!=="transparent"?u:"_default")}r=r.toRgbaString()}try{t.style[n]=r}catch(f){}}},e.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),e.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook(n),e.cssHooks.borderColor={expand:function(e){var t={};return c(["Top","Right","Bottom","Left"],function(n,r){t["border"+r+"Color"]=e}),t}},l=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var n,r,i=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,s={};if(i&&i.length&&i[0]&&i[i[0]]){r=i.length;while(r--)n=i[r],typeof i[n]=="string"&&(s[e.camelCase(n)]=i[n])}else for(n in i)typeof i[n]=="string"&&(s[n]=i[n]);return s}function s(t,n){var i={},s,o;for(s in n)o=n[s],t[s]!==o&&!r[s]&&(e.fx.step[s]||!isNaN(parseFloat(o)))&&(i[s]=o);return i}var n=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){if(e.end!=="none"&&!e.setAttr||e.pos===1&&!e.setAttr)jQuery.style(e.elem,n,e.end),e.setAttr=!0}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,r,o,u){var a=e.speed(r,o,u);return this.queue(function(){var r=e(this),o=r.attr("class")||"",u,f=a.children?r.find("*").addBack():r;f=f.map(function(){var t=e(this);return{el:t,start:i(this)}}),u=function(){e.each(n,function(e,n){t[n]&&r[n+"Class"](t[n])})},u(),f=f.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),f=f.map(function(){var t=this,n=e.Deferred(),r=e.extend({},a,{queue:!1,complete:function(){n.resolve(t)}});return this.el.animate(this.diff,r),n.promise()}),e.when.apply(e,f.get()).done(function(){u(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),a.complete.call(r[0])})})},e.fn.extend({_addClass:e.fn.addClass,addClass:function(t,n,r,i){return n?e.effects.animateClass.call(this,{add:t},n,r,i):this._addClass(t)},_removeClass:e.fn.removeClass,removeClass:function(t,n,r,i){return arguments.length>1?e.effects.animateClass.call(this,{remove:t},n,r,i):this._removeClass.apply(this,arguments)},_toggleClass:e.fn.toggleClass,toggleClass:function(n,r,i,s,o){return typeof r=="boolean"||r===t?i?e.effects.animateClass.call(this,r?{add:n}:{remove:n},i,s,o):this._toggleClass(n,r):e.effects.animateClass.call(this,{toggle:n},r,i,s)},switchClass:function(t,n,r,i,s){return e.effects.animateClass.call(this,{add:n,remove:t},r,i,s)}})}(),function(){function r(t,n,r,i){e.isPlainObject(t)&&(n=t,t=t.effect),t={effect:t},n==null&&(n={}),e.isFunction(n)&&(i=n,r=null,n={});if(typeof n=="number"||e.fx.speeds[n])i=r,r=n,n={};return e.isFunction(r)&&(i=r,r=null),n&&e.extend(t,n),r=r||n.duration,t.duration=e.fx.off?0:typeof r=="number"?r:r in e.fx.speeds?e.fx.speeds[r]:e.fx.speeds._default,t.complete=i||n.complete,t}function i(t){return!t||typeof t=="number"||e.fx.speeds[t]?!0:typeof t=="string"&&!e.effects.effect[t]}e.extend(e.effects,{version:"1.10.1",save:function(e,t){for(var r=0;r<t.length;r++)t[r]!==null&&e.data(n+t[r],e[0].style[t[r]])},restore:function(e,r){var i,s;for(s=0;s<r.length;s++)r[s]!==null&&(i=e.data(n+r[s]),i===t&&(i=""),e.css(r[s],i))},setMode:function(e,t){return t==="toggle"&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var n,r;switch(e[0]){case"top":n=0;break;case"middle":n=.5;break;case"bottom":n=1;break;default:n=e[0]/t.height}switch(e[1]){case"left":r=0;break;case"center":r=.5;break;case"right":r=1;break;default:r=e[1]/t.width}return{x:r,y:n}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var n={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},r=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),i={width:t.width(),height:t.height()},s=document.activeElement;try{s.id}catch(o){s=document.body}return t.wrap(r),(t[0]===s||e.contains(t[0],s))&&e(s).focus(),r=t.parent(),t.css("position")==="static"?(r.css({position:"relative"}),t.css({position:"relative"})):(e.extend(n,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,r){n[r]=t.css(r),isNaN(parseInt(n[r],10))&&(n[r]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(i),r.css(n).show()},removeWrapper:function(t){var n=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===n||e.contains(t[0],n))&&e(n).focus()),t},setTransition:function(t,n,r,i){return i=i||{},e.each(n,function(e,n){var s=t.cssUnit(n);s[0]>0&&(i[n]=s[0]*r+s[1])}),i}}),e.fn.extend({effect:function(){function o(n){function u(){e.isFunction(i)&&i.call(r[0]),e.isFunction(n)&&n()}var r=e(this),i=t.complete,o=t.mode;(r.is(":hidden")?o==="hide":o==="show")?u():s.call(r[0],t,u)}var t=r.apply(this,arguments),n=t.mode,i=t.queue,s=e.effects.effect[t.effect];return e.fx.off||!s?n?this[n](t.duration,t.complete):this.each(function(){t.complete&&t.complete.call(this)}):i===!1?this.each(o):this.queue(i||"fx",o)},_show:e.fn.show,show:function(e){if(i(e))return this._show.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="show",this.effect.call(this,t)},_hide:e.fn.hide,hide:function(e){if(i(e))return this._hide.apply(this,arguments);var t=r.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)},__toggle:e.fn.toggle,toggle:function(t){if(i(t)||typeof t=="boolean"||e.isFunction(t))return this.__toggle.apply(this,arguments);var n=r.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)},cssUnit:function(t){var n=this.css(t),r=[];return e.each(["em","px","%","pt"],function(e,t){n.indexOf(t)>0&&(r=[parseFloat(n),t])}),r}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,n){t[n]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((t*3-2)/22-e,2)}}),e.each(t,function(t,n){e.easing["easeIn"+t]=n,e.easing["easeOut"+t]=function(e){return 1-n(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?n(e*2)/2:1-n(e*-2+2)/2}})}()}(jQuery);(function(e,t){var n=/up|down|vertical/,r=/up|left|vertical|horizontal/;e.effects.effect.blind=function(t,i){var s=e(this),o=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),a=t.direction||"up",f=n.test(a),l=f?"height":"width",c=f?"top":"left",h=r.test(a),p={},d=u==="show",v,m,g;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),o):e.effects.save(s,o),s.show(),v=e.effects.createWrapper(s).css({overflow:"hidden"}),m=v[l](),g=parseFloat(v.css(c))||0,p[l]=d?m:0,h||(s.css(f?"bottom":"right",0).css(f?"top":"left","auto").css({position:"absolute"}),p[c]=d?g:m+g),d&&(v.css(l,0),h||v.css(c,g+m)),v.animate(p,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){u==="hide"&&s.hide(),e.effects.restore(s,o),e.effects.removeWrapper(s),i()}})}})(jQuery);(function(e,t){e.effects.effect.bounce=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=s==="hide",u=s==="show",a=t.direction||"up",f=t.distance,l=t.times||5,c=l*2+(u||o?1:0),h=t.duration/c,p=t.easing,d=a==="up"||a==="down"?"top":"left",v=a==="up"||a==="left",m,g,y,b=r.queue(),w=b.length;(u||o)&&i.push("opacity"),e.effects.save(r,i),r.show(),e.effects.createWrapper(r),f||(f=r[d==="top"?"outerHeight":"outerWidth"]()/3),u&&(y={opacity:1},y[d]=0,r.css("opacity",0).css(d,v?-f*2:f*2).animate(y,h,p)),o&&(f/=Math.pow(2,l-1)),y={},y[d]=0;for(m=0;m<l;m++)g={},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p).animate(y,h,p),f=o?f*2:f/2;o&&(g={opacity:0},g[d]=(v?"-=":"+=")+f,r.animate(g,h,p)),r.queue(function(){o&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),w>1&&b.splice.apply(b,[1,0].concat(b.splice(w,c+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.clip=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"vertical",a=u==="vertical",f=a?"height":"width",l=a?"top":"left",c={},h,p,d;e.effects.save(r,i),r.show(),h=e.effects.createWrapper(r).css({overflow:"hidden"}),p=r[0].tagName==="IMG"?h:r,d=p[f](),o&&(p.css(f,0),p.css(l,d/2)),c[f]=o?d:0,c[l]=o?0:d/2,p.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o||r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.drop=function(t,n){var r=e(this),i=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left"?"pos":"neg",l={opacity:o?1:0},c;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),c=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0)/2,o&&r.css("opacity",0).css(a,f==="pos"?-c:c),l[a]=(o?f==="pos"?"+=":"-=":f==="pos"?"-=":"+=")+c,r.animate(l,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.explode=function(t,n){function y(){c.push(this),c.length===r*i&&b()}function b(){s.css({visibility:"visible"}),e(c).remove(),u||s.hide(),n()}var r=t.pieces?Math.round(Math.sqrt(t.pieces)):3,i=r,s=e(this),o=e.effects.setMode(s,t.mode||"hide"),u=o==="show",a=s.show().css("visibility","hidden").offset(),f=Math.ceil(s.outerWidth()/i),l=Math.ceil(s.outerHeight()/r),c=[],h,p,d,v,m,g;for(h=0;h<r;h++){v=a.top+h*l,g=h-(r-1)/2;for(p=0;p<i;p++)d=a.left+p*f,m=p-(i-1)/2,s.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-p*f,top:-h*l}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:f,height:l,left:d+(u?m*f:0),top:v+(u?g*l:0),opacity:u?0:1}).animate({left:d+(u?0:m*f),top:v+(u?0:g*l),opacity:u?1:0},t.duration||500,t.easing,y)}}})(jQuery);(function(e,t){e.effects.effect.fade=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"toggle");r.animate({opacity:i},{queue:!1,duration:t.duration,easing:t.easing,complete:n})}})(jQuery);(function(e,t){e.effects.effect.fold=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"hide"),o=s==="show",u=s==="hide",a=t.size||15,f=/([0-9]+)%/.exec(a),l=!!t.horizFirst,c=o!==l,h=c?["width","height"]:["height","width"],p=t.duration/2,d,v,m={},g={};e.effects.save(r,i),r.show(),d=e.effects.createWrapper(r).css({overflow:"hidden"}),v=c?[d.width(),d.height()]:[d.height(),d.width()],f&&(a=parseInt(f[1],10)/100*v[u?0:1]),o&&d.css(l?{height:0,width:a}:{height:a,width:0}),m[h[0]]=o?v[0]:a,g[h[1]]=o?v[1]:0,d.animate(m,p,t.easing).animate(g,p,t.easing,function(){u&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()})}})(jQuery);(function(e,t){e.effects.effect.highlight=function(t,n){var r=e(this),i=["backgroundImage","backgroundColor","opacity"],s=e.effects.setMode(r,t.mode||"show"),o={backgroundColor:r.css("backgroundColor")};s==="hide"&&(o.opacity=0),e.effects.save(r,i),r.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),n()}})}})(jQuery);(function(e,t){e.effects.effect.pulsate=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"show"),s=i==="show",o=i==="hide",u=s||i==="hide",a=(t.times||5)*2+(u?1:0),f=t.duration/a,l=0,c=r.queue(),h=c.length,p;if(s||!r.is(":visible"))r.css("opacity",0).show(),l=1;for(p=1;p<a;p++)r.animate({opacity:l},f,t.easing),l=1-l;r.animate({opacity:l},f,t.easing),r.queue(function(){o&&r.hide(),n()}),h>1&&c.splice.apply(c,[1,0].concat(c.splice(h,a+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.puff=function(t,n){var r=e(this),i=e.effects.setMode(r,t.mode||"hide"),s=i==="hide",o=parseInt(t.percent,10)||150,u=o/100,a={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:i,complete:n,percent:s?o:100,from:s?a:{height:a.height*u,width:a.width*u,outerHeight:a.outerHeight*u,outerWidth:a.outerWidth*u}}),r.effect(t)},e.effects.effect.scale=function(t,n){var r=e(this),i=e.extend(!0,{},t),s=e.effects.setMode(r,t.mode||"effect"),o=parseInt(t.percent,10)||(parseInt(t.percent,10)===0?0:s==="hide"?0:100),u=t.direction||"both",a=t.origin,f={height:r.height(),width:r.width(),outerHeight:r.outerHeight(),outerWidth:r.outerWidth()},l={y:u!=="horizontal"?o/100:1,x:u!=="vertical"?o/100:1};i.effect="size",i.queue=!1,i.complete=n,s!=="effect"&&(i.origin=a||["middle","center"],i.restore=!0),i.from=t.from||(s==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:f),i.to={height:f.height*l.y,width:f.width*l.x,outerHeight:f.outerHeight*l.y,outerWidth:f.outerWidth*l.x},i.fade&&(s==="show"&&(i.from.opacity=0,i.to.opacity=1),s==="hide"&&(i.from.opacity=1,i.to.opacity=0)),r.effect(i)},e.effects.effect.size=function(t,n){var r,i,s,o=e(this),u=["position","top","bottom","left","right","width","height","overflow","opacity"],a=["position","top","bottom","left","right","overflow","opacity"],f=["width","height","overflow"],l=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),d=t.restore||p!=="effect",v=t.scale||"both",m=t.origin||["middle","center"],g=o.css("position"),y=d?u:a,b={height:0,width:0,outerHeight:0,outerWidth:0};p==="show"&&o.show(),r={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},t.mode==="toggle"&&p==="show"?(o.from=t.to||b,o.to=t.from||r):(o.from=t.from||(p==="show"?b:r),o.to=t.to||(p==="hide"?b:r)),s={from:{y:o.from.height/r.height,x:o.from.width/r.width},to:{y:o.to.height/r.height,x:o.to.width/r.width}};if(v==="box"||v==="both")s.from.y!==s.to.y&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,s.from.y,o.from),o.to=e.effects.setTransition(o,c,s.to.y,o.to)),s.from.x!==s.to.x&&(y=y.concat(h),o.from=e.effects.setTransition(o,h,s.from.x,o.from),o.to=e.effects.setTransition(o,h,s.to.x,o.to));(v==="content"||v==="both")&&s.from.y!==s.to.y&&(y=y.concat(l).concat(f),o.from=e.effects.setTransition(o,l,s.from.y,o.from),o.to=e.effects.setTransition(o,l,s.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),m&&(i=e.effects.getBaseline(m,r),o.from.top=(r.outerHeight-o.outerHeight())*i.y,o.from.left=(r.outerWidth-o.outerWidth())*i.x,o.to.top=(r.outerHeight-o.to.outerHeight)*i.y,o.to.left=(r.outerWidth-o.to.outerWidth)*i.x),o.css(o.from);if(v==="content"||v==="both")c=c.concat(["marginTop","marginBottom"]).concat(l),h=h.concat(["marginLeft","marginRight"]),f=u.concat(c).concat(h),o.find("*[width]").each(function(){var n=e(this),r={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};d&&e.effects.save(n,f),n.from={height:r.height*s.from.y,width:r.width*s.from.x,outerHeight:r.outerHeight*s.from.y,outerWidth:r.outerWidth*s.from.x},n.to={height:r.height*s.to.y,width:r.width*s.to.x,outerHeight:r.height*s.to.y,outerWidth:r.width*s.to.x},s.from.y!==s.to.y&&(n.from=e.effects.setTransition(n,c,s.from.y,n.from),n.to=e.effects.setTransition(n,c,s.to.y,n.to)),s.from.x!==s.to.x&&(n.from=e.effects.setTransition(n,h,s.from.x,n.from),n.to=e.effects.setTransition(n,h,s.to.x,n.to)),n.css(n.from),n.animate(n.to,t.duration,t.easing,function(){d&&e.effects.restore(n,f)})});o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),p==="hide"&&o.hide(),e.effects.restore(o,y),d||(g==="static"?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,n){var r=parseInt(n,10),i=e?o.to.left:o.to.top;return n==="auto"?i+"px":r+i+"px"})})),e.effects.removeWrapper(o),n()}})}})(jQuery);(function(e,t){e.effects.effect.shake=function(t,n){var r=e(this),i=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(r,t.mode||"effect"),o=t.direction||"left",u=t.distance||20,a=t.times||3,f=a*2+1,l=Math.round(t.duration/f),c=o==="up"||o==="down"?"top":"left",h=o==="up"||o==="left",p={},d={},v={},m,g=r.queue(),y=g.length;e.effects.save(r,i),r.show(),e.effects.createWrapper(r),p[c]=(h?"-=":"+=")+u,d[c]=(h?"+=":"-=")+u*2,v[c]=(h?"-=":"+=")+u*2,r.animate(p,l,t.easing);for(m=1;m<a;m++)r.animate(d,l,t.easing).animate(v,l,t.easing);r.animate(d,l,t.easing).animate(p,l/2,t.easing).queue(function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}),y>1&&g.splice.apply(g,[1,0].concat(g.splice(y,f+1))),r.dequeue()}})(jQuery);(function(e,t){e.effects.effect.slide=function(t,n){var r=e(this),i=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(r,t.mode||"show"),o=s==="show",u=t.direction||"left",a=u==="up"||u==="down"?"top":"left",f=u==="up"||u==="left",l,c={};e.effects.save(r,i),r.show(),l=t.distance||r[a==="top"?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(r).css({overflow:"hidden"}),o&&r.css(a,f?isNaN(l)?"-"+l:-l:l),c[a]=(o?f?"+=":"-=":f?"-=":"+=")+l,r.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){s==="hide"&&r.hide(),e.effects.restore(r,i),e.effects.removeWrapper(r),n()}})}})(jQuery);(function(e,t){e.effects.effect.transfer=function(t,n){var r=e(this),i=e(t.to),s=i.css("position")==="fixed",o=e("body"),u=s?o.scrollTop():0,a=s?o.scrollLeft():0,f=i.offset(),l={top:f.top-u,left:f.left-a,height:i.innerHeight(),width:i.innerWidth()},c=r.offset(),h=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:c.top-u,left:c.left-a,height:r.innerHeight(),width:r.innerWidth(),position:s?"fixed":"absolute"}).animate(l,t.duration,t.easing,function(){h.remove(),n()})}})(jQuery);(function(e,t){e.widget("ui.menu",{version:"1.10.1",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var n=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&n.not(".ui-state-disabled").length&&(this.mouseHandled=!0,this.select(t),n.has(".ui-menu").length?this.expand(t):this.element.is(":focus")||(this.element.trigger("focus",[!0]),this.active&&this.active.parents(".ui-menu").length===1&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var n=e(t.currentTarget);n.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,n)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var n=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,n)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function a(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var n,r,i,s,o,u=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:u=!1,r=this.previousFilter||"",i=String.fromCharCode(t.keyCode),s=!1,clearTimeout(this.filterTimer),i===r?s=!0:i=r+i,o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),n=s&&n.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):n,n.length||(i=String.fromCharCode(t.keyCode),o=new RegExp("^"+a(i),"i"),n=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),n.length?(this.focus(t,n),n.length>1?(this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}u&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,n=this.options.icons.submenu,r=this.element.find(this.options.menus);r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),r=t.prev("a"),i=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);r.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",r.attr("id"))}),t=r.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-\u2014\u2013\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){e==="icons"&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var n,r;this.blur(e,e&&e.type==="focus"),this._scrollIntoView(t),this.active=t.first(),r=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",r.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&e.type==="keydown"?this._close():this.timer=this._delay(function(){this._close()},this.delay),n=t.children(".ui-menu"),n.length&&/^mouse/.test(e.type)&&this._startOpening(n),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var n,r,i,s,o,u;this._hasScroll()&&(n=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,r=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,i=t.offset().top-this.activeMenu.offset().top-n-r,s=this.activeMenu.scrollTop(),o=this.activeMenu.height(),u=t.height(),i<0?this.activeMenu.scrollTop(s+i):i+u>o&&this.activeMenu.scrollTop(s+i-o+u))},blur:function(e,t){t||clearTimeout(this.timer);if(!this.active)return;this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active})},_startOpening:function(e){clearTimeout(this.timer);if(e.attr("aria-hidden")!=="true")return;this.timer=this._delay(function(){this._close(),this._open(e)},this.delay)},_open:function(t){var n=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(n)},collapseAll:function(t,n){clearTimeout(this.timer),this.timer=this._delay(function(){var r=n?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));r.length||(r=this.element),this._close(r),this.blur(t),this.activeMenu=r},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,n){var r;this.active&&(e==="first"||e==="last"?r=this.active[e==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1):r=this.active[e+"All"](".ui-menu-item").eq(0));if(!r||!r.length||!this.active)r=this.activeMenu.children(".ui-menu-item")[t]();this.focus(n,r)},nextPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isLastItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r-i<0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())},previousPage:function(t){var n,r,i;if(!this.active){this.next(t);return}if(this.isFirstItem())return;this._hasScroll()?(r=this.active.offset().top,i=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return n=e(this),n.offset().top-r+i>0}),this.focus(t,n)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var n={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,n)}})})(jQuery);(function(e,t){e.widget("ui.progressbar",{version:"1.10.1",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){if(e===t)return this.options.value;this.options.value=this._constrainedValue(e),this._refreshValue()},_constrainedValue:function(e){return e===t&&(e=this.options.value),this.indeterminate=e===!1,typeof e!="number"&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){e==="max"&&(t=Math.max(this.min,t)),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,n=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(n.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}})})(jQuery);(function(e,t){function n(e){return parseInt(e,10)||0}function r(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,n,r,i,s,o=this,u=this.options;this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!u.aspectRatio,aspectRatio:u.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:u.helper||u.ghost||u.animate?u.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=u.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se");if(this.handles.constructor===String){this.handles==="all"&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={};for(n=0;n<t.length;n++)r=e.trim(t[n]),s="ui-resizable-"+r,i=e("<div class='ui-resizable-handle "+s+"'></div>"),i.css({zIndex:u.zIndex}),"se"===r&&i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[r]=".ui-resizable-"+r,this.element.append(i)}this._renderAxis=function(t){var n,r,i,s;t=t||this.element;for(n in this.handles){this.handles[n].constructor===String&&(this.handles[n]=e(this.handles[n],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(r=e(this.handles[n],this.element),s=/sw|ne|nw|se|n|s/.test(n)?r.outerHeight():r.outerWidth(),i=["padding",/ne|nw|n/.test(n)?"Top":/se|sw|s/.test(n)?"Bottom":/^e$/.test(n)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize());if(!e(this.handles[n]).length)continue}},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(i=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=i&&i[1]?i[1]:"se")}),u.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(u.disabled)return;e(this).removeClass("ui-resizable-autohide"),o._handles.show()}).mouseleave(function(){if(u.disabled)return;o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,n=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(n(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),n(this.originalElement),this},_mouseCapture:function(t){var n,r,i=!1;for(n in this.handles){r=e(this.handles[n])[0];if(r===t.target||e.contains(r,t.target))i=!0}return!this.options.disabled&&i},_mouseStart:function(t){var r,i,s,o=this.options,u=this.element.position(),a=this.element;return this.resizing=!0,/absolute/.test(a.css("position"))?a.css({position:"absolute",top:a.css("top"),left:a.css("left")}):a.is(".ui-draggable")&&a.css({position:"absolute",top:u.top,left:u.left}),this._renderProxy(),r=n(this.helper.css("left")),i=n(this.helper.css("top")),o.containment&&(r+=e(o.containment).scrollLeft()||0,i+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:r,top:i},this.size=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalSize=this._helper?{width:a.outerWidth(),height:a.outerHeight()}:{width:a.width(),height:a.height()},this.originalPosition={left:r,top:i},this.sizeDiff={width:a.outerWidth()-a.width(),height:a.outerHeight()-a.height()},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio=typeof o.aspectRatio=="number"?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor",s==="auto"?this.axis+"-resize":s),a.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var n,r=this.helper,i={},s=this.originalMousePosition,o=this.axis,u=this.position.top,a=this.position.left,f=this.size.width,l=this.size.height,c=t.pageX-s.left||0,h=t.pageY-s.top||0,p=this._change[o];if(!p)return!1;n=p.apply(this,[t,c,h]),this._updateVirtualBoundaries(t.shiftKey);if(this._aspectRatio||t.shiftKey)n=this._updateRatio(n,t);return n=this._respectSize(n,t),this._updateCache(n),this._propagate("resize",t),this.position.top!==u&&(i.top=this.position.top+"px"),this.position.left!==a&&(i.left=this.position.left+"px"),this.size.width!==f&&(i.width=this.size.width+"px"),this.size.height!==l&&(i.height=this.size.height+"px"),r.css(i),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(i)||this._trigger("resize",t,this.ui()),!1},_mouseStop:function(t){this.resizing=!1;var n,r,i,s,o,u,a,f=this.options,l=this;return this._helper&&(n=this._proportionallyResizeElements,r=n.length&&/textarea/i.test(n[0].nodeName),i=r&&e.ui.hasScroll(n[0],"left")?0:l.sizeDiff.height,s=r?0:l.sizeDiff.width,o={width:l.helper.width()-s,height:l.helper.height()-i},u=parseInt(l.element.css("left"),10)+(l.position.left-l.originalPosition.left)||null,a=parseInt(l.element.css("top"),10)+(l.position.top-l.originalPosition.top)||null,f.animate||this.element.css(e.extend(o,{top:a,left:u})),l.helper.height(l.size.height),l.helper.width(l.size.width),this._helper&&!f.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,n,i,s,o,u=this.options;o={minWidth:r(u.minWidth)?u.minWidth:0,maxWidth:r(u.maxWidth)?u.maxWidth:Infinity,minHeight:r(u.minHeight)?u.minHeight:0,maxHeight:r(u.maxHeight)?u.maxHeight:Infinity};if(this._aspectRatio||e)t=o.minHeight*this.aspectRatio,i=o.minWidth/this.aspectRatio,n=o.maxHeight*this.aspectRatio,s=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),i>o.minHeight&&(o.minHeight=i),n<o.maxWidth&&(o.maxWidth=n),s<o.maxHeight&&(o.maxHeight=s);this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),r(e.left)&&(this.position.left=e.left),r(e.top)&&(this.position.top=e.top),r(e.height)&&(this.size.height=e.height),r(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,n=this.size,i=this.axis;return r(e.height)?e.width=e.height*this.aspectRatio:r(e.width)&&(e.height=e.width/this.aspectRatio),i==="sw"&&(e.left=t.left+(n.width-e.width),e.top=null),i==="nw"&&(e.top=t.top+(n.height-e.height),e.left=t.left+(n.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,n=this.axis,i=r(e.width)&&t.maxWidth&&t.maxWidth<e.width,s=r(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=r(e.width)&&t.minWidth&&t.minWidth>e.width,u=r(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,f=this.position.top+this.size.height,l=/sw|nw|w/.test(n),c=/nw|ne|n/.test(n);return o&&(e.width=t.minWidth),u&&(e.height=t.minHeight),i&&(e.width=t.maxWidth),s&&(e.height=t.maxHeight),o&&l&&(e.left=a-t.minWidth),i&&l&&(e.left=a-t.maxWidth),u&&c&&(e.top=f-t.minHeight),s&&c&&(e.top=f-t.maxHeight),!e.width&&!e.height&&!e.left&&e.top?e.top=null:!e.width&&!e.height&&!e.top&&e.left&&(e.left=null),e},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length)return;var e,t,n,r,i,s=this.helper||this.element;for(e=0;e<this._proportionallyResizeElements.length;e++){i=this._proportionallyResizeElements[e];if(!this.borderDif){this.borderDif=[],n=[i.css("borderTopWidth"),i.css("borderRightWidth"),i.css("borderBottomWidth"),i.css("borderLeftWidth")],r=[i.css("paddingTop"),i.css("paddingRight"),i.css("paddingBottom"),i.css("paddingLeft")];for(t=0;t<n.length;t++)this.borderDif[t]=(parseInt(n[t],10)||0)+(parseInt(r[t],10)||0)}i.css({height:s.height()-this.borderDif[0]-this.borderDif[2]||0,width:s.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var t=this.element,n=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++n.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var n=this.originalSize,r=this.originalPosition;return{left:r.left+t,width:n.width-t}},n:function(e,t,n){var r=this.originalSize,i=this.originalPosition;return{top:i.top+n,height:r.height-n}},s:function(e,t,n){return{height:this.originalSize.height+n}},se:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},sw:function(t,n,r){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,n,r]))},ne:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,n,r]))},nw:function(t,n,r){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,n,r]))}},_propagate:function(t,n){e.ui.plugin.call(this,t,[n,this.ui()]),t!=="resize"&&this._trigger(t,n,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var n=e(this).data("ui-resizable"),r=n.options,i=n._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&e.ui.hasScroll(i[0],"left")?0:n.sizeDiff.height,u=s?0:n.sizeDiff.width,a={width:n.size.width-u,height:n.size.height-o},f=parseInt(n.element.css("left"),10)+(n.position.left-n.originalPosition.left)||null,l=parseInt(n.element.css("top"),10)+(n.position.top-n.originalPosition.top)||null;n.element.animate(e.extend(a,l&&f?{top:l,left:f}:{}),{duration:r.animateDuration,easing:r.animateEasing,step:function(){var r={width:parseInt(n.element.css("width"),10),height:parseInt(n.element.css("height"),10),top:parseInt(n.element.css("top"),10),left:parseInt(n.element.css("left"),10)};i&&i.length&&e(i[0]).css({width:r.width,height:r.height}),n._updateCache(r),n._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,r,i,s,o,u,a,f=e(this).data("ui-resizable"),l=f.options,c=f.element,h=l.containment,p=h instanceof e?h.get(0):/parent/.test(h)?c.parent().get(0):h;if(!p)return;f.containerElement=e(p),/document/.test(h)||h===document?(f.containerOffset={left:0,top:0},f.containerPosition={left:0,top:0},f.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(p),r=[],e(["Top","Right","Left","Bottom"]).each(function(e,i){r[e]=n(t.css("padding"+i))}),f.containerOffset=t.offset(),f.containerPosition=t.position(),f.containerSize={height:t.innerHeight()-r[3],width:t.innerWidth()-r[1]},i=f.containerOffset,s=f.containerSize.height,o=f.containerSize.width,u=e.ui.hasScroll(p,"left")?p.scrollWidth:o,a=e.ui.hasScroll(p)?p.scrollHeight:s,f.parentData={element:p,left:i.left,top:i.top,width:u,height:a})},resize:function(t){var n,r,i,s,o=e(this).data("ui-resizable"),u=o.options,a=o.containerOffset,f=o.position,l=o._aspectRatio||t.shiftKey,c={top:0,left:0},h=o.containerElement;h[0]!==document&&/static/.test(h.css("position"))&&(c=a),f.left<(o._helper?a.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-a.left:o.position.left-c.left),l&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=u.helper?a.left:0),f.top<(o._helper?a.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-a.top:o.position.top),l&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?a.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,n=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),r=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-a.top)+o.sizeDiff.height),i=o.containerElement.get(0)===o.element.parent().get(0),s=/relative|absolute/.test(o.containerElement.css("position")),i&&s&&(n-=o.parentData.left),n+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-n,l&&(o.size.height=o.size.width/o.aspectRatio)),r+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-r,l&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.containerOffset,i=t.containerPosition,s=t.containerElement,o=e(t.helper),u=o.offset(),a=o.outerWidth()-t.sizeDiff.width,f=o.outerHeight()-t.sizeDiff.height;t._helper&&!n.animate&&/relative/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f}),t._helper&&!n.animate&&/static/.test(s.css("position"))&&e(this).css({left:u.left-i.left-r.left,width:a,height:f})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};typeof n.alsoResize=="object"&&!n.alsoResize.parentNode?n.alsoResize.length?(n.alsoResize=n.alsoResize[0],r(n.alsoResize)):e.each(n.alsoResize,function(e){r(e)}):r(n.alsoResize)},resize:function(t,n){var r=e(this).data("ui-resizable"),i=r.options,s=r.originalSize,o=r.originalPosition,u={height:r.size.height-s.height||0,width:r.size.width-s.width||0,top:r.position.top-o.top||0,left:r.position.left-o.left||0},a=function(t,r){e(t).each(function(){var t=e(this),i=e(this).data("ui-resizable-alsoresize"),s={},o=r&&r.length?r:t.parents(n.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var n=(i[t]||0)+(u[t]||0);n&&n>=0&&(s[t]=n||null)}),t.css(s)})};typeof i.alsoResize=="object"&&!i.alsoResize.nodeType?e.each(i.alsoResize,function(e,t){a(e,t)}):a(i.alsoResize)},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:r.height,width:r.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof n.ghost=="string"?n.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),n=t.options,r=t.size,i=t.originalSize,s=t.originalPosition,o=t.axis,u=typeof n.grid=="number"?[n.grid,n.grid]:n.grid,a=u[0]||1,f=u[1]||1,l=Math.round((r.width-i.width)/a)*a,c=Math.round((r.height-i.height)/f)*f,h=i.width+l,p=i.height+c,d=n.maxWidth&&n.maxWidth<h,v=n.maxHeight&&n.maxHeight<p,m=n.minWidth&&n.minWidth>h,g=n.minHeight&&n.minHeight>p;n.grid=u,m&&(h+=a),g&&(p+=f),d&&(h-=a),v&&(p-=f),/^(se|s|e)$/.test(o)?(t.size.width=h,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.top=s.top-c):/^(sw)$/.test(o)?(t.size.width=h,t.size.height=p,t.position.left=s.left-l):(t.size.width=h,t.size.height=p,t.position.top=s.top-c,t.position.left=s.left-l)}})})(jQuery);(function(e,t){e.widget("ui.selectable",e.ui.mouse,{version:"1.10.1",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,n=this;this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(n.options.filter,n.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),n=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:n.left,top:n.top,right:n.left+t.outerWidth(),bottom:n.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var n=this,r=this.options;this.opos=[t.pageX,t.pageY];if(this.options.disabled)return;this.selectees=e(r.filter,this.element[0]),this._trigger("start",t),e(r.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),r.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var r=e.data(this,"selectable-item");r.startselected=!0,!t.metaKey&&!t.ctrlKey&&(r.$element.removeClass("ui-selected"),r.selected=!1,r.$element.addClass("ui-unselecting"),r.unselecting=!0,n._trigger("unselecting",t,{unselecting:r.element}))}),e(t.target).parents().addBack().each(function(){var r,i=e.data(this,"selectable-item");if(i)return r=!t.metaKey&&!t.ctrlKey||!i.$element.hasClass("ui-selected"),i.$element.removeClass(r?"ui-unselecting":"ui-selected").addClass(r?"ui-selecting":"ui-unselecting"),i.unselecting=!r,i.selecting=r,i.selected=r,r?n._trigger("selecting",t,{selecting:i.element}):n._trigger("unselecting",t,{unselecting:i.element}),!1})},_mouseDrag:function(t){this.dragged=!0;if(this.options.disabled)return;var n,r=this,i=this.options,s=this.opos[0],o=this.opos[1],u=t.pageX,a=t.pageY;return s>u&&(n=u,u=s,s=n),o>a&&(n=a,a=o,o=n),this.helper.css({left:s,top:o,width:u-s,height:a-o}),this.selectees.each(function(){var n=e.data(this,"selectable-item"),f=!1;if(!n||n.element===r.element[0])return;i.tolerance==="touch"?f=!(n.left>u||n.right<s||n.top>a||n.bottom<o):i.tolerance==="fit"&&(f=n.left>s&&n.right<u&&n.top>o&&n.bottom<a),f?(n.selected&&(n.$element.removeClass("ui-selected"),n.selected=!1),n.unselecting&&(n.$element.removeClass("ui-unselecting"),n.unselecting=!1),n.selecting||(n.$element.addClass("ui-selecting"),n.selecting=!0,r._trigger("selecting",t,{selecting:n.element}))):(n.selecting&&((t.metaKey||t.ctrlKey)&&n.startselected?(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.$element.addClass("ui-selected"),n.selected=!0):(n.$element.removeClass("ui-selecting"),n.selecting=!1,n.startselected&&(n.$element.addClass("ui-unselecting"),n.unselecting=!0),r._trigger("unselecting",t,{unselecting:n.element}))),n.selected&&!t.metaKey&&!t.ctrlKey&&!n.startselected&&(n.$element.removeClass("ui-selected"),n.selected=!1,n.$element.addClass("ui-unselecting"),n.unselecting=!0,r._trigger("unselecting",t,{unselecting:n.element})))}),!1},_mouseStop:function(t){var n=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-unselecting"),r.unselecting=!1,r.startselected=!1,n._trigger("unselected",t,{unselected:r.element})}),e(".ui-selecting",this.element[0]).each(function(){var r=e.data(this,"selectable-item");r.$element.removeClass("ui-selecting").addClass("ui-selected"),r.selecting=!1,r.selected=!0,r.startselected=!0,n._trigger("selected",t,{selected:r.element})}),this._trigger("stop",t),this.helper.remove(),!1}})})(jQuery);(function(e,t){var n=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,n,r=this.options,i=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),s="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];n=r.values&&r.values.length||1,i.length>n&&(i.slice(n).remove(),i=i.slice(0,n));for(t=i.length;t<n;t++)o.push(s);this.handles=i.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,n="";t.range?(t.range===!0&&(t.values?t.values.length&&t.values.length!==2?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),!this.range||!this.range.length?(this.range=e("<div></div>").appendTo(this.element),n="ui-slider-range ui-widget-header ui-corner-all"):this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}),this.range.addClass(n+(t.range==="min"||t.range==="max"?" ui-slider-range-"+t.range:""))):this.range=e([])},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var n,r,i,s,o,u,a,f,l=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),n={x:t.pageX,y:t.pageY},r=this._normValueFromMouse(n),i=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var n=Math.abs(r-l.values(t));if(i>n||i===n&&(t===l._lastChangedValue||l.values(t)===c.min))i=n,s=e(this),o=t}),u=this._start(t,o),u===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,s.addClass("ui-state-active").focus(),a=s.offset(),f=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:t.pageX-a.left-s.width()/2,top:t.pageY-a.top-s.height()/2-(parseInt(s.css("borderTopWidth"),10)||0)-(parseInt(s.css("borderBottomWidth"),10)||0)+(parseInt(s.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,r),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},n=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,n),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,n,r,i,s;return this.orientation==="horizontal"?(t=this.elementSize.width,n=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,n=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),r=n/t,r>1&&(r=1),r<0&&(r=0),this.orientation==="vertical"&&(r=1-r),i=this._valueMax()-this._valueMin(),s=this._valueMin()+r*i,this._trimAlignValue(s)},_start:function(e,t){var n={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("start",e,n)},_slide:function(e,t,n){var r,i,s;this.options.values&&this.options.values.length?(r=this.values(t?0:1),this.options.values.length===2&&this.options.range===!0&&(t===0&&n>r||t===1&&n<r)&&(n=r),n!==this.values(t)&&(i=this.values(),i[t]=n,s=this._trigger("slide",e,{handle:this.handles[t],value:n,values:i}),r=this.values(t?0:1),s!==!1&&this.values(t,n,!0))):n!==this.value()&&(s=this._trigger("slide",e,{handle:this.handles[t],value:n}),s!==!1&&this.value(n))},_stop:function(e,t){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._trigger("stop",e,n)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var n={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(n.value=this.values(t),n.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,n)}},value:function(e){if(arguments.length){this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(t,n){var r,i,s;if(arguments.length>1){this.options.values[t]=this._trimAlignValue(n),this._refreshValue(),this._change(null,t);return}if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();r=this.options.values,i=arguments[0];for(s=0;s<r.length;s+=1)r[s]=this._trimAlignValue(i[s]),this._change(null,s);this._refreshValue()},_setOption:function(t,n){var r,i=0;t==="range"&&this.options.range===!0&&(n==="min"?(this.options.value=this._values(0),this.options.values=null):n==="max"&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(i=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments);switch(t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(r=0;r<i;r+=1)this._change(null,r);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e),e},_values:function(e){var t,n,r;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t),t;if(this.options.values&&this.options.values.length){n=this.options.values.slice();for(r=0;r<n.length;r+=1)n[r]=this._trimAlignValue(n[r]);return n}return[]},_trimAlignValue:function(e){if(e<=this._valueMin())return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,n=(e-this._valueMin())%t,r=e-n;return Math.abs(n)*2>=t&&(r+=n>0?t:-t),parseFloat(r.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,n,r,i,s,o=this.options.range,u=this.options,a=this,f=this._animateOff?!1:u.animate,l={};this.options.values&&this.options.values.length?this.handles.each(function(r){n=(a.values(r)-a._valueMin())/(a._valueMax()-a._valueMin())*100,l[a.orientation==="horizontal"?"left":"bottom"]=n+"%",e(this).stop(1,1)[f?"animate":"css"](l,u.animate),a.options.range===!0&&(a.orientation==="horizontal"?(r===0&&a.range.stop(1,1)[f?"animate":"css"]({left:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({width:n-t+"%"},{queue:!1,duration:u.animate})):(r===0&&a.range.stop(1,1)[f?"animate":"css"]({bottom:n+"%"},u.animate),r===1&&a.range[f?"animate":"css"]({height:n-t+"%"},{queue:!1,duration:u.animate}))),t=n}):(r=this.value(),i=this._valueMin(),s=this._valueMax(),n=s!==i?(r-i)/(s-i)*100:0,l[this.orientation==="horizontal"?"left":"bottom"]=n+"%",this.handle.stop(1,1)[f?"animate":"css"](l,u.animate),o==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[f?"animate":"css"]({width:n+"%"},u.animate),o==="max"&&this.orientation==="horizontal"&&this.range[f?"animate":"css"]({width:100-n+"%"},{queue:!1,duration:u.animate}),o==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[f?"animate":"css"]({height:n+"%"},u.animate),o==="max"&&this.orientation==="vertical"&&this.range[f?"animate":"css"]({height:100-n+"%"},{queue:!1,duration:u.animate}))},_handleEvents:{keydown:function(t){var r,i,s,o,u=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:t.preventDefault();if(!this._keySliding){this._keySliding=!0,e(t.target).addClass("ui-state-active"),r=this._start(t,u);if(r===!1)return}}o=this.options.step,this.options.values&&this.options.values.length?i=s=this.values(u):i=s=this.value();switch(t.keyCode){case e.ui.keyCode.HOME:s=this._valueMin();break;case e.ui.keyCode.END:s=this._valueMax();break;case e.ui.keyCode.PAGE_UP:s=this._trimAlignValue(i+(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.PAGE_DOWN:s=this._trimAlignValue(i-(this._valueMax()-this._valueMin())/n);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(i===this._valueMax())return;s=this._trimAlignValue(i+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i===this._valueMin())return;s=this._trimAlignValue(i-o)}this._slide(t,u,s)},click:function(e){e.preventDefault()},keyup:function(t){var n=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,n),this._change(t,n),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e,t){function n(e,t,n){return e>t&&e<t+n}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.1",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?e.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,n){t==="disabled"?(this.options[t]=n,this.widget().toggleClass("ui-sortable-disabled",!!n)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,n){var r=null,i=!1,s=this;if(this.reverting)return!1;if(this.options.disabled||this.options.type==="static")return!1;this._refreshItems(t),e(t.target).parents().each(function(){if(e.data(this,s.widgetName+"-item")===s)return r=e(this),!1}),e.data(t.target,s.widgetName+"-item")===s&&(r=e(t.target));if(!r)return!1;if(this.options.handle&&!n){e(this.options.handle,r).find("*").addBack().each(function(){this===t.target&&(i=!0)});if(!i)return!1}return this.currentItem=r,this._removeCurrentsFromItems(),!0},_mouseStart:function(t,n,r){var i,s=this.options;this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,s.cursorAt&&this._adjustOffsetFromHelper(s.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),s.containment&&this._setContainment(),s.cursor&&(e("body").css("cursor")&&(this._storedCursor=e("body").css("cursor")),e("body").css("cursor",s.cursor)),s.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",s.opacity)),s.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",s.zIndex)),this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions();if(!r)for(i=this.containers.length-1;i>=0;i--)this.containers[i]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var n,r,i,s,o=this.options,u=!1;this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=u=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=u=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?u=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(u=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?u=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(u=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),u!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!=="x")this.helper[0].style.top=this.position.top+"px";for(n=this.items.length-1;n>=0;n--){r=this.items[n],i=r.item[0],s=this._intersectsWithPointer(r);if(!s)continue;if(r.instance!==this.currentContainer)continue;if(i!==this.currentItem[0]&&this.placeholder[s===1?"next":"prev"]()[0]!==i&&!e.contains(this.placeholder[0],i)&&(this.options.type==="semi-dynamic"?!e.contains(this.element[0],i):!0)){this.direction=s===1?"down":"up";if(this.options.tolerance!=="pointer"&&!this._intersectsWithSides(r))break;this._rearrange(t,r),this._trigger("change",t,this._uiHash());break}}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,n){if(!t)return;e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t);if(this.options.revert){var r=this,i=this.placeholder.offset();this.reverting=!0,e(this.helper).animate({left:i.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:i.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){r._clear(t)})}else this._clear(t,n);return!1},cancel:function(){if(this.dragging){this._mouseUp({target:null}),this.options.helper==="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},e(n).each(function(){var n=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);n&&r.push((t.key||n[1]+"[]")+"="+(t.key&&t.expression?n[1]:n[2]))}),!r.length&&t.key&&r.push(t.key+"="),r.join("&")},toArray:function(t){var n=this._getItemsAsjQuery(t&&t.connected),r=[];return t=t||{},n.each(function(){r.push(e(t.item||this).attr(t.attribute||"id")||"")}),r},_intersectsWith:function(e){var t=this.positionAbs.left,n=t+this.helperProportions.width,r=this.positionAbs.top,i=r+this.helperProportions.height,s=e.left,o=s+e.width,u=e.top,a=u+e.height,f=this.offset.click.top,l=this.offset.click.left,c=r+f>u&&r+f<a&&t+l>s&&t+l<o;return this.options.tolerance==="pointer"||this.options.forcePointerForContainers||this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?c:s<t+this.helperProportions.width/2&&n-this.helperProportions.width/2<o&&u<r+this.helperProportions.height/2&&i-this.helperProportions.height/2<a},_intersectsWithPointer:function(e){var t=this.options.axis==="x"||n(this.positionAbs.top+this.offset.click.top,e.top,e.height),r=this.options.axis==="y"||n(this.positionAbs.left+this.offset.click.left,e.left,e.width),i=t&&r,s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return i?this.floating?o&&o==="right"||s==="down"?2:1:s&&(s==="down"?2:1):!1},_intersectsWithSides:function(e){var t=n(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),r=n(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),i=this._getDragVerticalDirection(),s=this._getDragHorizontalDirection();return this.floating&&s?s==="right"&&r||s==="left"&&!r:i&&(i==="down"&&t||i==="up"&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return e!==0&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return e!==0&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){var n,r,i,s,o=[],u=[],a=this._connectWith();if(a&&t)for(n=a.length-1;n>=0;n--){i=e(a[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&u.push([e.isFunction(s.options.items)?s.options.items.call(s.element):e(s.options.items,s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),s])}u.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(n=u.length-1;n>=0;n--)u[n][0].each(function(){o.push(this)});return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var n=0;n<t.length;n++)if(t[n]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var n,r,i,s,o,u,a,f,l=this.items,c=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],h=this._connectWith();if(h&&this.ready)for(n=h.length-1;n>=0;n--){i=e(h[n]);for(r=i.length-1;r>=0;r--)s=e.data(i[r],this.widgetFullName),s&&s!==this&&!s.options.disabled&&(c.push([e.isFunction(s.options.items)?s.options.items.call(s.element[0],t,{item:this.currentItem}):e(s.options.items,s.element),s]),this.containers.push(s))}for(n=c.length-1;n>=0;n--){o=c[n][1],u=c[n][0];for(r=0,f=u.length;r<f;r++)a=e(u[r]),a.data(this.widgetName+"-item",o),l.push({item:a,instance:o,width:0,height:0,left:0,top:0})}},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var n,r,i,s;for(n=this.items.length-1;n>=0;n--){r=this.items[n];if(r.instance!==this.currentContainer&&this.currentContainer&&r.item[0]!==this.currentItem[0])continue;i=this.options.toleranceElement?e(this.options.toleranceElement,r.item):r.item,t||(r.width=i.outerWidth(),r.height=i.outerHeight()),s=i.offset(),r.left=s.left,r.top=s.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(n=this.containers.length-1;n>=0;n--)s=this.containers[n].element.offset(),this.containers[n].containerCache.left=s.left,this.containers[n].containerCache.top=s.top,this.containers[n].containerCache.width=this.containers[n].element.outerWidth(),this.containers[n].containerCache.height=this.containers[n].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var n,r=t.options;if(!r.placeholder||r.placeholder.constructor===String)n=r.placeholder,r.placeholder={element:function(){var r=e(document.createElement(t.currentItem[0].nodeName)).addClass(n||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];return n||(r.style.visibility="hidden"),r},update:function(e,i){if(n&&!r.forcePlaceholderSize)return;i.height()||i.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),i.width()||i.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}};t.placeholder=e(r.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),r.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var n,r,i,s,o,u,a,f,l,c=null,h=null;for(n=this.containers.length-1;n>=0;n--){if(e.contains(this.currentItem[0],this.containers[n].element[0]))continue;if(this._intersectsWith(this.containers[n].containerCache)){if(c&&e.contains(this.containers[n].element[0],c.element[0]))continue;c=this.containers[n],h=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",t,this._uiHash(this)),this.containers[n].containerCache.over=0)}if(!c)return;if(this.containers.length===1)this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1;else{i=1e4,s=null,o=this.containers[h].floating?"left":"top",u=this.containers[h].floating?"width":"height",a=this.positionAbs[o]+this.offset.click[o];for(r=this.items.length-1;r>=0;r--){if(!e.contains(this.containers[h].element[0],this.items[r].item[0]))continue;if(this.items[r].item[0]===this.currentItem[0])continue;f=this.items[r].item.offset()[o],l=!1,Math.abs(f-a)>Math.abs(f+this.items[r][u]-a)&&(l=!0,f+=this.items[r][u]),Math.abs(f-a)<i&&(i=Math.abs(f-a),s=this.items[r],this.direction=l?"up":"down")}if(!s&&!this.options.dropOnEmpty)return;this.currentContainer=this.containers[h],s?this._rearrange(t,s,null,!0):this._rearrange(t,null,this.containers[h].element,!0),this._trigger("change",t,this._uiHash()),this.containers[h]._trigger("change",t,this._uiHash(this)),this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[h]._trigger("over",t,this._uiHash(this)),this.containers[h].containerCache.over=1}},_createHelper:function(t){var n=this.options,r=e.isFunction(n.helper)?e(n.helper.apply(this.element[0],[t,this.currentItem])):n.helper==="clone"?this.currentItem.clone():this.currentItem;return r.parents("body").length||e(n.appendTo!=="parent"?n.appendTo:this.currentItem[0].parentNode)[0].appendChild(r[0]),r[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!r[0].style.width||n.forceHelperSize)&&r.width(this.currentItem.width()),(!r[0].style.height||n.forceHelperSize)&&r.height(this.currentItem.height()),r},_adjustOffsetFromHelper:function(t){typeof t=="string"&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&e.ui.ie)t={top:0,left:0};return{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,n,r,i=this.options;i.containment==="parent"&&(i.containment=this.helper[0].parentNode);if(i.containment==="document"||i.containment==="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e(i.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(e(i.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];/^(document|window|parent)$/.test(i.containment)||(t=e(i.containment)[0],n=e(i.containment).offset(),r=e(t).css("overflow")!=="hidden",this.containment=[n.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,n.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,n.left+(r?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,n.top+(r?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,n){n||(n=this.position);var r=t==="absolute"?1:-1,i=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,s=/(html|body)/i.test(i[0].tagName);return{top:n.top+this.offset.relative.top*r+this.offset.parent.top*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():s?0:i.scrollTop())*r,left:n.left+this.offset.relative.left*r+this.offset.parent.left*r-(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():s?0:i.scrollLeft())*r}},_generatePosition:function(t){var n,r,i=this.options,s=t.pageX,o=t.pageY,u=this.cssPosition!=="absolute"||this.scrollParent[0]!==document&&!!e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(u[0].tagName);return this.cssPosition==="relative"&&(this.scrollParent[0]===document||this.scrollParent[0]===this.offsetParent[0])&&(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(s=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(s=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),i.grid&&(n=this.originalPageY+Math.round((o-this.originalPageY)/i.grid[1])*i.grid[1],o=this.containment?n-this.offset.click.top>=this.containment[1]&&n-this.offset.click.top<=this.containment[3]?n:n-this.offset.click.top>=this.containment[1]?n-i.grid[1]:n+i.grid[1]:n,r=this.originalPageX+Math.round((s-this.originalPageX)/i.grid[0])*i.grid[0],s=this.containment?r-this.offset.click.left>=this.containment[0]&&r-this.offset.click.left<=this.containment[2]?r:r-this.offset.click.left>=this.containment[0]?r-i.grid[0]:r+i.grid[0]:r)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.scrollParent.scrollTop():a?0:u.scrollTop()),left:s-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():a?0:u.scrollLeft())}},_rearrange:function(e,t,n,r){n?n[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],this.direction==="down"?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var i=this.counter;this._delay(function(){i===this.counter&&this.refreshPositions(!r)})},_clear:function(t,n){this.reverting=!1;var r,i=[];!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(r in this._storedCSS)if(this._storedCSS[r]==="auto"||this._storedCSS[r]==="static")this._storedCSS[r]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!n&&i.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),(this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!n&&i.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(n||(i.push(function(e){this._trigger("remove",e,this._uiHash())}),i.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),i.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer))));for(r=this.containers.length-1;r>=0;r--)n||i.push(function(e){return function(t){e._trigger("deactivate",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over&&(i.push(function(e){return function(t){e._trigger("out",t,this._uiHash(this))}}.call(this,this.containers[r])),this.containers[r].containerCache.over=0);this._storedCursor&&e("body").css("cursor",this._storedCursor),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex),this.dragging=!1;if(this.cancelHelperRemoval){if(!n){this._trigger("beforeStop",t,this._uiHash());for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!1}n||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null;if(!n){for(r=0;r<i.length;r++)i[r].call(this,t);this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var n=t||this;return{helper:n.helper,placeholder:n.placeholder||e([]),position:n.position,originalPosition:n.originalPosition,offset:n.positionAbs,item:n.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e){function t(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.widget("ui.spinner",{version:"1.10.1",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},n=this.element;return e.each(["min","max","step"],function(e,r){var i=n.attr(r);i!==undefined&&i.length&&(t[r]=i)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){if(this.cancelBlur){delete this.cancelBlur;return}this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e)},mousewheel:function(e,t){if(!t)return;if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()},"mousedown .ui-spinner-button":function(t){function r(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=n,this._delay(function(){this.previous=n}))}var n;n=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),r.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,r.call(this)});if(this._start(t)===!1)return;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(!e(t.currentTarget).hasClass("ui-state-active"))return;if(this._start(t)===!1)return!1;this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(e.height()*.5)&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var n=this.options,r=e.ui.keyCode;switch(t.keyCode){case r.UP:return this._repeat(null,1,t),!0;case r.DOWN:return this._repeat(null,-1,t),!0;case r.PAGE_UP:return this._repeat(null,n.page,t),!0;case r.PAGE_DOWN:return this._repeat(null,-n.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return!this.spinning&&this._trigger("start",e)===!1?!1:(this.counter||(this.counter=1),this.spinning=!0,!0)},_repeat:function(e,t,n){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,n)},e),this._spin(t*this.options.step,n)},_spin:function(e,t){var n=this.value()||0;this.counter||(this.counter=1),n=this._adjustValue(n+e*this._increment(this.counter));if(!this.spinning||this._trigger("spin",t,{value:n})!==!1)this._value(n),this.counter++},_increment:function(t){var n=this.options.incremental;return n?e.isFunction(n)?n(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return this.options.min!==null&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=e.toString(),n=t.indexOf(".");return n===-1?0:t.length-n-1},_adjustValue:function(e){var t,n,r=this.options;return t=r.min!==null?r.min:0,n=e-t,n=Math.round(n/r.step)*r.step,e=t+n,e=parseFloat(e.toFixed(this._precision())),r.max!==null&&e>r.max?r.max:r.min!==null&&e<r.min?r.min:e},_stop:function(e){if(!this.spinning)return;clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e)},_setOption:function(e,t){if(e==="culture"||e==="numberFormat"){var n=this._parse(this.element.val());this.options[e]=t,this.element.val(this._format(n));return}(e==="max"||e==="min"||e==="step")&&typeof t=="string"&&(t=this._parse(t)),e==="icons"&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),e==="disabled"&&(t?(this.element.prop("disabled",!0),this.buttons.button("disable")):(this.element.prop("disabled",!1),this.buttons.button("enable")))},_setOptions:t(function(e){this._super(e),this._value(this.element.val())}),_parse:function(e){return typeof e=="string"&&e!==""&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),e===""||isNaN(e)?null:e},_format:function(e){return e===""?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},_value:function(e,t){var n;e!==""&&(n=this._parse(e),n!==null&&(t||(n=this._adjustValue(n)),e=this._format(n))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:t(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:t(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:t(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:t(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){if(!arguments.length)return this._parse(this.element.val());t(this._value).call(this,e)},widget:function(){return this.uiSpinner}})})(jQuery);(function(e,t){function i(){return++n}function s(e){return e.hash.length>1&&decodeURIComponent(e.href.replace(r,""))===decodeURIComponent(location.href.replace(r,""))}var n=0,r=/#.*$/;e.widget("ui.tabs",{version:"1.10.1",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,n=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",n.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),n.active=this._initialActive(),e.isArray(n.disabled)&&(n.disabled=e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.options.active!==!1&&this.anchors.length?this.active=this._findActive(n.active):this.active=e(),this._refresh(),this.active.length&&this.load(n.active)},_initialActive:function(){var t=this.options.active,n=this.options.collapsible,r=location.hash.substring(1);if(t===null){r&&this.tabs.each(function(n,i){if(e(i).attr("aria-controls")===r)return t=n,!1}),t===null&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active")));if(t===null||t===-1)t=this.tabs.length?0:!1}return t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),t===-1&&(t=n?!1:0)),!n&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var n=e(this.document[0].activeElement).closest("li"),r=this.tabs.index(n),i=!0;if(this._handlePageNav(t))return;switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:r++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:i=!1,r--;break;case e.ui.keyCode.END:r=this.anchors.length-1;break;case e.ui.keyCode.HOME:r=0;break;case e.ui.keyCode.SPACE:t.preventDefault(),clearTimeout(this.activating),this._activate(r);return;case e.ui.keyCode.ENTER:t.preventDefault(),clearTimeout(this.activating),this._activate(r===this.options.active?!1:r);return;default:return}t.preventDefault(),clearTimeout(this.activating),r=this._focusNextTab(r,i),t.ctrlKey||(n.attr("aria-selected","false"),this.tabs.eq(r).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",r)},this.delay))},_panelKeydown:function(t){if(this._handlePageNav(t))return;t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP)return this._activate(this._focusNextTab(this.options.active-1,!1)),!0;if(t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN)return this._activate(this._focusNextTab(this.options.active+1,!0)),!0},_findNextTab:function(t,n){function i(){return t>r&&(t=0),t<0&&(t=r),t}var r=this.tabs.length-1;while(e.inArray(i(),this.options.disabled)!==-1)t=n?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){if(e==="active"){this._activate(t);return}if(e==="disabled"){this._setupDisabled(t);return}this._super(e,t),e==="collapsible"&&(this.element.toggleClass("ui-tabs-collapsible",t),!t&&this.options.active===!1&&this._activate(0)),e==="event"&&this._setupEvents(t),e==="heightStyle"&&this._setupHeightStyle(t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,n=this.tablist.children(":has(a[href])");t.disabled=e.map(n.filter(".ui-state-disabled"),function(e){return n.index(e)}),this._processTabs(),t.active===!1||!this.anchors.length?(t.active=!1,this.active=e()):this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(n,r){var i,o,u,a=e(r).uniqueId().attr("id"),f=e(r).closest("li"),l=f.attr("aria-controls");s(r)?(i=r.hash,o=t.element.find(t._sanitizeSelector(i))):(u=t._tabId(f),i="#"+u,o=t.element.find(i),o.length||(o=t._createPanel(u),o.insertAfter(t.panels[n-1]||t.tablist)),o.attr("aria-live","polite")),o.length&&(t.panels=t.panels.add(o)),l&&f.data("ui-tabs-aria-controls",l),f.attr({"aria-controls":i.substring(1),"aria-labelledby":a}),o.attr("aria-labelledby",a)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var n=0,r;r=this.tabs[n];n++)t===!0||e.inArray(n,t)!==-1?e(r).addClass("ui-state-disabled").attr("aria-disabled","true"):e(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var n={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){n[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,n),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var n,r=this.element.parent();t==="fill"?(n=r.height(),n-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),r=t.css("position");if(r==="absolute"||r==="fixed")return;n-=t.outerHeight(!0)}),this.element.children().not(this.panels).each(function(){n-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,n-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):t==="auto"&&(n=0,this.panels.each(function(){n=Math.max(n,e(this).height("").height())}).height(n))},_eventHandler:function(t){var n=this.options,r=this.active,i=e(t.currentTarget),s=i.closest("li"),o=s[0]===r[0],u=o&&n.collapsible,a=u?e():this._getPanelForTab(s),f=r.length?this._getPanelForTab(r):e(),l={oldTab:r,oldPanel:f,newTab:u?e():s,newPanel:a};t.preventDefault();if(s.hasClass("ui-state-disabled")||s.hasClass("ui-tabs-loading")||this.running||o&&!n.collapsible||this._trigger("beforeActivate",t,l)===!1)return;n.active=u?!1:this.tabs.index(s),this.active=o?e():s,this.xhr&&this.xhr.abort(),!f.length&&!a.length&&e.error("jQuery UI Tabs: Mismatching fragment identifier."),a.length&&this.load(this.tabs.index(s),t),this._toggle(t,l)},_toggle:function(t,n){function o(){r.running=!1,r._trigger("activate",t,n)}function u(){n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),i.length&&r.options.show?r._show(i,r.options.show,o):(i.show(),o())}var r=this,i=n.newPanel,s=n.oldPanel;this.running=!0,s.length&&this.options.hide?this._hide(s,this.options.hide,function(){n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),u()}):(n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),s.hide(),u()),s.attr({"aria-expanded":"false","aria-hidden":"true"}),n.oldTab.attr("aria-selected","false"),i.length&&s.length?n.oldTab.attr("tabIndex",-1):i.length&&this.tabs.filter(function(){return e(this).attr("tabIndex")===0}).attr("tabIndex",-1),i.attr({"aria-expanded":"true","aria-hidden":"false"}),n.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var n,r=this._findActive(t);if(r[0]===this.active[0])return;r.length||(r=this.active),n=r.find(".ui-tabs-anchor")[0],this._eventHandler({target:n,currentTarget:n,preventDefault:e.noop})},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return typeof e=="string"&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),n=t.data("ui-tabs-aria-controls");n?t.attr("aria-controls",n).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),this.options.heightStyle!=="content"&&this.panels.css("height","")},enable:function(n){var r=this.options.disabled;if(r===!1)return;n===t?r=!1:(n=this._getIndex(n),e.isArray(r)?r=e.map(r,function(e){return e!==n?e:null}):r=e.map(this.tabs,function(e,t){return t!==n?t:null})),this._setupDisabled(r)},disable:function(n){var r=this.options.disabled;if(r===!0)return;if(n===t)r=!0;else{n=this._getIndex(n);if(e.inArray(n,r)!==-1)return;e.isArray(r)?r=e.merge([n],r).sort():r=[n]}this._setupDisabled(r)},load:function(t,n){t=this._getIndex(t);var r=this,i=this.tabs.eq(t),o=i.find(".ui-tabs-anchor"),u=this._getPanelForTab(i),a={tab:i,panel:u};if(s(o[0]))return;this.xhr=e.ajax(this._ajaxSettings(o,n,a)),this.xhr&&this.xhr.statusText!=="canceled"&&(i.addClass("ui-tabs-loading"),u.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){u.html(e),r._trigger("load",n,a)},1)}).complete(function(e,t){setTimeout(function(){t==="abort"&&r.panels.stop(!1,!0),i.removeClass("ui-tabs-loading"),u.removeAttr("aria-busy"),e===r.xhr&&delete r.xhr},1)}))},_ajaxSettings:function(t,n,r){var i=this;return{url:t.attr("href"),beforeSend:function(t,s){return i._trigger("beforeLoad",n,e.extend({jqXHR:t,ajaxSettings:s},r))}}},_getPanelForTab:function(t){var n=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+n))}})})(jQuery);(function(e){function n(t,n){var r=(t.attr("aria-describedby")||"").split(/\s+/);r.push(n),t.data("ui-tooltip-id",n).attr("aria-describedby",e.trim(r.join(" ")))}function r(t){var n=t.data("ui-tooltip-id"),r=(t.attr("aria-describedby")||"").split(/\s+/),i=e.inArray(n,r);i!==-1&&r.splice(i,1),t.removeData("ui-tooltip-id"),r=e.trim(r.join(" ")),r?t.attr("aria-describedby",r):t.removeAttr("aria-describedby")}var t=0;e.widget("ui.tooltip",{version:"1.10.1",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable()},_setOption:function(t,n){var r=this;if(t==="disabled"){this[n?"_disable":"_enable"](),this.options[t]=n;return}this._super(t,n),t==="content"&&e.each(this.tooltips,function(e,t){r._updateContent(t)})},_disable:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).attr("title","")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var n=this,r=e(t?t.target:this.element).closest(this.options.items);if(!r.length||r.data("ui-tooltip-id"))return;r.attr("title")&&r.data("ui-tooltip-title",r.attr("title")),r.data("ui-tooltip-open",!0),t&&t.type==="mouseover"&&r.parents().each(function(){var t=e(this),r;t.data("ui-tooltip-open")&&(r=e.Event("blur"),r.target=r.currentTarget=this,n.close(r,!0)),t.attr("title")&&(t.uniqueId(),n.parents[this.id]={element:this,title:t.attr("title")},t.attr("title",""))}),this._updateContent(r,t)},_updateContent:function(e,t){var n,r=this.options.content,i=this,s=t?t.type:null;if(typeof r=="string")return this._open(t,e,r);n=r.call(e[0],function(n){if(!e.data("ui-tooltip-open"))return;i._delay(function(){t&&(t.type=s),this._open(t,e,n)})}),n&&this._open(t,e,n)},_open:function(t,r,i){function f(e){a.of=e;if(s.is(":hidden"))return;s.position(a)}var s,o,u,a=e.extend({},this.options.position);if(!i)return;s=this._find(r);if(s.length){s.find(".ui-tooltip-content").html(i);return}r.is("[title]")&&(t&&t.type==="mouseover"?r.attr("title",""):r.removeAttr("title")),s=this._tooltip(r),n(r,s.attr("id")),s.find(".ui-tooltip-content").html(i),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:f}),f(t)):s.position(e.extend({of:r},this.options.position)),s.hide(),this._show(s,this.options.show),this.options.show&&this.options.show.delay&&(u=this.delayedShow=setInterval(function(){s.is(":visible")&&(f(a.of),clearInterval(u))},e.fx.interval)),this._trigger("open",t,{tooltip:s}),o={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var n=e.Event(t);n.currentTarget=r[0],this.close(n,!0)}},remove:function(){this._removeTooltip(s)}};if(!t||t.type==="mouseover")o.mouseleave="close";if(!t||t.type==="focusin")o.focusout="close";this._on(!0,r,o)},close:function(t){var n=this,i=e(t?t.currentTarget:this.element),s=this._find(i);if(this.closing)return;clearInterval(this.delayedShow),i.data("ui-tooltip-title")&&i.attr("title",i.data("ui-tooltip-title")),r(i),s.stop(!0),this._hide(s,this.options.hide,function(){n._removeTooltip(e(this))}),i.removeData("ui-tooltip-open"),this._off(i,"mouseleave focusout keyup"),i[0]!==this.element[0]&&this._off(i,"remove"),this._off(this.document,"mousemove"),t&&t.type==="mouseleave"&&e.each(this.parents,function(t,r){e(r.element).attr("title",r.title),delete n.parents[t]}),this.closing=!0,this._trigger("close",t,{tooltip:s}),this.closing=!1},_tooltip:function(n){var r="ui-tooltip-"+t++,i=e("<div>").attr({id:r,role:"tooltip"}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||""));return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[r]=n,i},_find:function(t){var n=t.data("ui-tooltip-id");return n?e("#"+n):e()},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(n,r){var i=e.Event("blur");i.target=i.currentTarget=r[0],t.close(i,!0),e("#"+n).remove(),r.data("ui-tooltip-title")&&(r.attr("title",r.data("ui-tooltip-title")),r.removeData("ui-tooltip-title"))})}})})(jQuery);
(function() {

// This code is only for iOS
if (!window.navigator.userAgent.match(/(iPhone|iPad|iPod)/))
    return;

var CONFIG = { TOUCH_MOVE_THRESHHOLD: 10, PRESSED_CLASS: "pressed", GHOST_CLICK_TIMEOUT: 500, GHOST_CLICK_THRESHOLD: 10 }
var clicks = [];

function withinDistance(x1, y1, x2, y2, distance) {
    return Math.abs(x1 - x2) < distance && Math.abs(y1 - y2) < distance;
}

// Use a native event listener so we can set useCapture
document.addEventListener('click', function(e) {
    for (var i = 0; i < clicks.length; i++) {
        // For some reason, the ghost click events don't always appear where the touchend event was
        if (withinDistance(clicks[i][0], clicks[i][1], e.clientX, e.clientY,
            CONFIG.GHOST_CLICK_THRESHOLD)) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
    }
}, true);

$(document).on('touchstart', '.fastbutton', function(e) {
    var elem = $(this);

    // Disable the webkit tap highlight, since it is no longer accurate
    elem.css('webkitTapHighlightColor', 'rgba(0,0,0,0)');

    elem.addClass(CONFIG.PRESSED_CLASS);

    var touch = e.originalEvent.touches[0];
    var location = [touch.clientX, touch.clientY];
    this.__eventLocation = location;

    this.__onTouchMove = function(e) {
        var touch = e.originalEvent.touches[0];
        if (withinDistance(touch.clientX, touch.clientY, location[0], location[1],
            CONFIG.TOUCH_MOVE_THRESHHOLD)) {
            elem.addClass(CONFIG.PRESSED_CLASS);
        } else {
            elem.removeClass(CONFIG.PRESSED_CLASS);
        }
    };

    $(document.body).on('touchmove', this.__onTouchMove);
});

$(document).on('touchcancel', '.fastbutton', function(e) {
    var elem = $(this);
    elem.removeClass(CONFIG.PRESSED_CLASS);
    $(document.body).off('touchmove', this.__onTouchMove);
});

$(document).on('touchend', '.fastbutton', function(e) {
    var elem = $(this);
    if (elem.hasClass(CONFIG.PRESSED_CLASS)) {
        elem.removeClass(CONFIG.PRESSED_CLASS);
        var location = this.__eventLocation;
        if (location) {
            var touch = e.originalEvent.changedTouches[0];
            if (!withinDistance(touch.clientX, touch.clientY, location[0], location[1],
                CONFIG.TOUCH_MOVE_THRESHHOLD))
                return;

            // Dispatch a fake click event within a setTimeout. If we don't do this, there's a strange bug where
            // the next view can't correctly bring the keyboard up
            setTimeout(function() {
                var evt = document.createEvent("MouseEvents");
                evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
                elem.get(0).dispatchEvent(evt);
            }, 1);

            // Don't process the default action for this event to avoid WebKit stealing focus from a
            // view we might be loading, and from dispatching a click event
            e.preventDefault();

            // Eat further "ghost" click events at this location that appear if the user holds the link down
            // longer than the double-tap cancel threshold (these are not cancelled when preventing default)
            var clickLocation = [touch.clientX, touch.clientY];
            clicks.push(clickLocation);
            window.setTimeout(function() {
                var i = clicks.indexOf(clickLocation);
                if (i >= 0)
                    clicks.splice(i, 1);
            }, CONFIG.GHOST_CLICK_TIMEOUT);
        }
    }

    $(document.body).off('touchmove', this.__onTouchMove);
});

})()
;
/*!
 * FooTable - Awesome Responsive Tables
 * http://themergency.com/footable
 *
 * Requires jQuery - http://jquery.com/
 *
 * Copyright 2012 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 18 Nov 2012
 */

(function ($, w, undefined) {
  w.footable = {
    options: {
      delay: 100, // The number of millseconds to wait before triggering the react event
      breakpoints: { // The different screen resolution breakpoints
        phone: 480,
        tablet: 1024
      },
      parsers: {  // The default parser to parse the value out of a cell (values are used in building up row detail)
        alpha: function (cell) {
          return $(cell).data('value') || $.trim($(cell).text());
        }
      },
      toggleSelector: ' > tbody > tr:not(.footable-row-detail)', //the selector to show/hide the detail row
      createDetail: function (element, data) {  //creates the contents of the detail row
        for (var i = 0; i < data.length; i++) {
          element.append('<div><strong>' + data[i].name + '</strong> : ' + data[i].display + '</div>');
        }
      },
      classes: {
        loading : 'footable-loading',
        loaded : 'footable-loaded',
        sorted : 'footable-sorted',
        descending : 'footable-sorted-desc',
        indicator : 'footable-sort-indicator'
      },
      debug: false // Whether or not to log information to the console.
    },

    version: {
      major: 0, minor: 1,
      toString: function () {
        return w.footable.version.major + '.' + w.footable.version.minor;
      },
      parse: function (str) {
        version = /(\d+)\.?(\d+)?\.?(\d+)?/.exec(str);
        return {
          major: parseInt(version[1]) || 0,
          minor: parseInt(version[2]) || 0,
          patch: parseInt(version[3]) || 0
        };
      }
    },

    plugins: {
      _validate: function (plugin) {
        ///<summary>Simple validation of the <paramref name="plugin"/> to make sure any members called by Foobox actually exist.</summary>
        ///<param name="plugin">The object defining the plugin, this should implement a string property called "name" and a function called "init".</param>

        if (typeof plugin['name'] !== 'string') {
          if (w.footable.options.debug == true) console.error('Validation failed, plugin does not implement a string property called "name".', plugin);
          return false;
        }
        if (!$.isFunction(plugin['init'])) {
          if (w.footable.options.debug == true) console.error('Validation failed, plugin "' + plugin['name'] + '" does not implement a function called "init".', plugin);
          return false;
        }
        if (w.footable.options.debug == true) console.log('Validation succeeded for plugin "' + plugin['name'] + '".', plugin);
        return true;
      },
      registered: [], // An array containing all registered plugins.
      register: function (plugin, options) {
        ///<summary>Registers a <paramref name="plugin"/> and its default <paramref name="options"/> with Foobox.</summary>
        ///<param name="plugin">The plugin that should implement a string property called "name" and a function called "init".</param>
        ///<param name="options">The default options to merge with the Foobox's base options.</param>

        if (w.footable.plugins._validate(plugin)) {
          w.footable.plugins.registered.push(plugin);
          if (options != undefined && typeof options === 'object') $.extend(true, w.footable.options, options);
          if (w.footable.options.debug == true) console.log('Plugin "' + plugin['name'] + '" has been registered with the Foobox.', plugin);
        }
      },
      init: function (instance) {
        ///<summary>Loops through all registered plugins and calls the "init" method supplying the current <paramref name="instance"/> of the Foobox as the first parameter.</summary>
        ///<param name="instance">The current instance of the Foobox that the plugin is being initialized for.</param>

        for(var i = 0; i < w.footable.plugins.registered.length; i++){
          try {
            w.footable.plugins.registered[i]['init'](instance);
          } catch(err) {
            if (w.footable.options.debug == true) console.error(err);
          }
        }
      }
    }
  };

  var instanceCount = 0;

  $.fn.footable = function(options) {
    ///<summary>The main constructor call to initialize the plugin using the supplied <paramref name="options"/>.</summary>
    ///<param name="options">
    ///<para>A JSON object containing user defined options for the plugin to use. Any options not supplied will have a default value assigned.</para>
    ///<para>Check the documentation or the default options object above for more information on available options.</para>
    ///</param>

    options=options||{};
    var o=$.extend(true,{},w.footable.options,options); //merge user and default options
    return this.each(function () {
      instanceCount++;
      this.footable = new Footable(this, o, instanceCount);
    });
  };

  //helper for using timeouts
  function Timer() {
    ///<summary>Simple timer object created around a timeout.</summary>
    var t=this;
    t.id=null;
    t.busy=false;
    t.start=function (code,milliseconds) {
      ///<summary>Starts the timer and waits the specified amount of <paramref name="milliseconds"/> before executing the supplied <paramref name="code"/>.</summary>
      ///<param name="code">The code to execute once the timer runs out.</param>
      ///<param name="milliseconds">The time in milliseconds to wait before executing the supplied <paramref name="code"/>.</param>

      if (t.busy) {return;}
      t.stop();
      t.id=setTimeout(function () {
        code();
        t.id=null;
        t.busy=false;
      },milliseconds);
      t.busy=true;
    };
    t.stop=function () {
      ///<summary>Stops the timer if its runnning and resets it back to its starting state.</summary>

      if(t.id!=null) {
        clearTimeout(t.id);
        t.id=null;
        t.busy=false;
      }
    };
  };

  function Footable(t, o, id) {
    ///<summary>Inits a new instance of the plugin.</summary>
    ///<param name="t">The main table element to apply this plugin to.</param>
    ///<param name="o">The options supplied to the plugin. Check the defaults object to see all available options.</param>
    ///<param name="id">The id to assign to this instance of the plugin.</param>

    var ft = this;
    ft.id = id;
    ft.table = t;
    ft.options = o;
    ft.breakpoints = [];
    ft.breakpointNames = '';
    ft.columns = { };

    var opt = ft.options;
    var cls = opt.classes;

    // This object simply houses all the timers used in the footable.
    ft.timers = {
      resize: new Timer(),
      register: function (name) {
        ft.timers[name] = new Timer();
        return ft.timers[name];
      }
    };

    w.footable.plugins.init(ft);

    ft.init = function() {
      var $window = $(w), $table = $(ft.table);

      if ($table.hasClass(cls.loaded)) {
        //already loaded FooTable for the table, so don't init again
        ft.raise('footable_already_initialized');
        return;
      }

      $table.addClass(cls.loading);

      // Get the column data once for the life time of the plugin
      $table.find('> thead > tr > th, > thead > tr > td').each(function() {
        var data = ft.getColumnData(this);
        ft.columns[data.index] = data;

        var count = data.index + 1;
        //get all the cells in the column
        var $column = $table.find('> tbody > tr > td:nth-child(' + count + ')');
        //add the className to the cells specified by data-class="blah"
        if (data.className != null) $column.not('.footable-cell-detail').addClass(data.className);
      });

      // Create a nice friendly array to work with out of the breakpoints object.
      for(var name in opt.breakpoints) {
        ft.breakpoints.push({ 'name': name, 'width': opt.breakpoints[name] });
        ft.breakpointNames += (name + ' ');
      }

      // Sort the breakpoints so the smallest is checked first
      ft.breakpoints.sort(function(a, b) { return a['width'] - b['width']; });

      //bind the toggle selector click events
      ft.bindToggleSelectors();

      ft.raise('footable_initializing');

      $table.bind('footable_initialized', function (e) {
        //resize the footable onload
        ft.resize();

        //remove the loading class
        $table.removeClass(cls.loading);

        //hides all elements within the table that have the attribute data-hide="init"
        $table.find('[data-init="hide"]').hide();
        $table.find('[data-init="show"]').show();

        //add the loaded class
        $table.addClass(cls.loaded);
      });

      $window
        .bind('resize.footable', function () {
          ft.timers.resize.stop();
          ft.timers.resize.start(function() {
            ft.raise('footable_resizing');
            ft.resize();
            ft.raise('footable_resized');
          }, opt.delay);
        });

      ft.raise('footable_initialized');
    };

    //moved this out into it's own function so that it can be called from other add-ons
    ft.bindToggleSelectors = function() {
      var $table = $(ft.table);
      $table.find(opt.toggleSelector).unbind('click.footable').bind('click.footable', function (e) {
        if ($table.is('.breakpoint') && $(e.target).is('td')) {
          var $row = $(this).is('tr') ? $(this) : $(this).parents('tr:first');
          ft.toggleDetail($row.get(0));
        }
      });
    };

    ft.parse = function(cell, column) {
      var parser = opt.parsers[column.type] || opt.parsers.alpha;
      return parser(cell);
    };

    ft.getColumnData = function(th) {
      var $th = $(th), hide = $th.data('hide');
      hide = hide || '';
      hide = hide.split(',');
      var data = {
        'index': $th.index(),
        'hide': { },
        'type': $th.data('type') || 'alpha',
        'name': $th.data('name') || $.trim($th.text()),
        'ignore': $th.data('ignore') || false,
        'className': $th.data('class') || null
      };
      data.hide['default'] = ($th.data('hide')==="all") || ($.inArray('default', hide) >= 0);

      for(var name in opt.breakpoints) {
        data.hide[name] = ($th.data('hide')==="all") || ($.inArray(name, hide) >= 0);
      }
      var e = ft.raise('footable_column_data', { 'column': { 'data': data, 'th': th } });
      return e.column.data;
    };

    ft.getViewportWidth = function() {
      return window.innerWidth || (document.body ? document.body.offsetWidth : 0);
    };

    ft.getViewportHeight = function() {
      return window.innerHeight || (document.body ? document.body.offsetHeight : 0);
    };

    ft.hasBreakpointColumn = function(breakpoint) {
      for(var c in ft.columns) {
        if (ft.columns[c].hide[breakpoint]) {
          return true;
        }
      }
      return false;
    };

    ft.resize = function() {
      var $table = $(ft.table);
      var info = {
        'width': $table.width(),                  //the table width
        'height': $table.height(),                //the table height
        'viewportWidth': ft.getViewportWidth(),   //the width of the viewport
        'viewportHeight': ft.getViewportHeight(), //the width of the viewport
        'orientation': null
      };
      info.orientation = info.viewportWidth > info.viewportHeight ? 'landscape' : 'portrait';

      if (info.viewportWidth < info.width) info.width = info.viewportWidth;
      if (info.viewportHeight < info.height) info.height = info.viewportHeight;

      var pinfo = $table.data('footable_info');
      $table.data('footable_info', info);

      // This (if) statement is here purely to make sure events aren't raised twice as mobile safari seems to do
      if (!pinfo || ((pinfo && pinfo.width && pinfo.width != info.width) || (pinfo && pinfo.height && pinfo.height != info.height))) {
        var current = null, breakpoint;
        for (var i = 0; i < ft.breakpoints.length; i++) {
          breakpoint = ft.breakpoints[i];
          if (breakpoint && breakpoint.width && info.width <= breakpoint.width) {
            current = breakpoint;
            break;
          }
        }

        var breakpointName = (current == null ? 'default' : current['name']);

        var hasBreakpointFired = ft.hasBreakpointColumn(breakpointName);

        $table
          .removeClass('default breakpoint').removeClass(ft.breakpointNames)
          .addClass(breakpointName + (hasBreakpointFired ? ' breakpoint' : ''))
          .find('> thead > tr > th').each(function() {
            var data = ft.columns[$(this).index()];
            var count = data.index + 1;
            //get all the cells in the column
            var $column = $table.find('> tbody > tr > td:nth-child(' + count + '), > tfoot > tr > td:nth-child(' + count + '), > colgroup > col:nth-child(' + count + ')').add(this);

            if (data.hide[breakpointName] == false) $column.show();
            else $column.hide();
          })
          .end()
          .find('> tbody > tr.footable-detail-show').each(function() {
            ft.createOrUpdateDetailRow(this);
          });

        $table.find('> tbody > tr.footable-detail-show:visible').each(function() {
          var $next = $(this).next();
          if ($next.hasClass('footable-row-detail')) {
            if (breakpointName == 'default' && !hasBreakpointFired) $next.hide();
            else $next.show();
          }
        });

        // adding .footable-last-column to the last th and td in order to allow for styling if the last column is hidden (which won't work using :last-child)
       $table.find('> thead > tr > th.footable-last-column,> tbody > tr > td.footable-last-column').removeClass('footable-last-column');
       $table.find('> thead > tr > th:visible:last,> tbody > tr > td:visible:last').addClass('footable-last-column');

        ft.raise('footable_breakpoint_' + breakpointName, { 'info': info });
      }
    };

    ft.toggleDetail = function(actualRow) {
      var $row = $(actualRow),
          created = ft.createOrUpdateDetailRow($row.get(0)),
          $next = $row.next();

      if (!created && $next.is(':visible')) {
        $row.removeClass('footable-detail-show');
        //only hide the next row if it's a detail row
        if($next.hasClass('footable-row-detail'))
          $next.hide();
      } else {
        $row.addClass('footable-detail-show');
        $next.show();
      }
    };

    ft.createOrUpdateDetailRow = function (actualRow) {
      var $row = $(actualRow), $next = $row.next(), $detail, values = [];
      if ($row.is(':hidden')) return; //if the row is hidden for some readon (perhaps filtered) then get out of here
      $row.find('> td:hidden').each(function () {
        var column = ft.columns[$(this).index()];
        if (column.ignore == true) return true;
        values.push({ 'name': column.name, 'value': ft.parse(this, column), 'display': $.trim($(this).html()) });
      });
      if(values.length == 0) //return if we don't have any data to show
        return;
      var colspan = $row.find('> td:visible').length;
      var exists = $next.hasClass('footable-row-detail');
      if (!exists) { // Create
        $next = $('<tr class="footable-row-detail"><td class="footable-cell-detail"><div class="footable-row-detail-inner"></div></td></tr>');
        $row.after($next);
      }
      $next.find('> td:first').attr('colspan', colspan);
      $detail = $next.find('.footable-row-detail-inner').empty();
      opt.createDetail($detail, values);
      return !exists;
    };

    ft.raise = function(eventName, args) {
      args = args || { };
      var def = { 'ft': ft };
      $.extend(true, def, args);
      var e = $.Event(eventName, def);
      if (!e.ft) { $.extend(true, e, def); } //pre jQuery 1.6 which did not allow data to be passed to event object constructor
      $(ft.table).trigger(e);
      return e;
    };

    ft.init();
    return ft;
  };
})(jQuery, window);
/*jquery.select_skin.js */
/*
 * jQuery select element skinning
 * version: 1.0.7 (11/07/2012)
 * @requires: jQuery v1.2 or later
 * adapted from Derek Harvey code
 *   http://www.lotsofcode.com/javascript-and-ajax/jquery-select-box-skin.htm
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Copyright 2010 Colin Verot
 */



(function ($) {

    // skin the select
    $.fn.select_skin = function (w) {
        return $(this).each(function(i) {
            s = $(this);
            if (!s.attr('multiple')) {
                // create the container
                s.wrap('<div class="cmf-skinned-select"></div>');
                c = s.parent();
                c.children().before('<div class="cmf-skinned-text">&nbsp;</div>').each(function() {
                    if (this.selectedIndex >= 0) $(this).prev().text(this.options[this.selectedIndex].innerHTML)
                });
                c.width(s.outerWidth()-2);
                c.height(s.outerHeight()-2);

                // skin the container
                c.css('background-color', s.css('background-color'));
                c.css('color', s.css('color'));
                c.css('font-size', s.css('font-size'));
                c.css('font-family', s.css('font-family'));
                c.css('font-style', s.css('font-style'));
                c.css('position', 'relative');

                // hide the original select
                s.css( { 'opacity': 0,  'position': 'relative', 'z-index': 100 } );

                // get and skin the text label
                var t = c.children().prev();
                t.height(c.outerHeight()-s.css('padding-top').replace(/px,*\)*/g,"")-s.css('padding-bottom').replace(/px,*\)*/g,"")-t.css('padding-top').replace(/px,*\)*/g,"")-t.css('padding-bottom').replace(/px,*\)*/g,"")-2);
                t.width(20 + c.innerWidth()-s.css('padding-right').replace(/px,*\)*/g,"")-s.css('padding-left').replace(/px,*\)*/g,"")-t.css('padding-right').replace(/px,*\)*/g,"")-t.css('padding-left').replace(/px,*\)*/g,"")-c.innerHeight());
                t.css( { 'opacity': 100, 'overflow': 'hidden', 'position': 'absolute', 'text-indent': '0px', 'z-index': 1, 'top': 0, 'left': 0 } );

                // add events
                c.children().click(function() {
                    t.html( (this.options.length > 0 && this.selectedIndex >= 0 ? this.options[this.selectedIndex].innerHTML : '') );
                });
                c.children().change(function() {
                    t.html( (this.options.length > 0 && this.selectedIndex >= 0 ? this.options[this.selectedIndex].innerHTML : '') );
                });
             }
        });
    }

    // un-skin the select
    $.fn.select_unskin = function (w) {
        return $(this).each(function(i) {
            s = $(this);
            if (!s.attr('multiple') && s.parent().hasClass('cmf-skinned-select')) {
                s.siblings('.cmf-skinned-text').remove();
                s.css( { 'opacity': 100, 'z-index': 0 } ).unwrap();
             }
        });
    }
}(jQuery));
/* ------------------------------------------------------------------------
	prettyCheckboxes
	
	Developped By: Stephane Caron (http://www.no-margin-for-errors.com)
	Inspired By: All the non user friendly custom checkboxes solutions ;)
	Version: 1.1
	
	Copyright: Feel free to redistribute the script/modify it, as
			   long as you leave my infos at the top.
------------------------------------------------------------------------- */

	
jQuery.fn.prettyCheckboxes=function(a){a=jQuery.extend({checkboxWidth:18,checkboxHeight:19,className:"prettyCheckbox",display:"list"},a);$(this).each(function(){$label=$('label[for="'+$(this).attr("id")+'"]');$label.prepend("<span class='holderWrap'><span class='holder'></span></span>");if($(this).is(":checked")){$label.addClass("checked")}$label.addClass(a.className).addClass($(this).attr("type")).addClass(a.display);$label.find("span.holderWrap").width(a.checkboxWidth).height(a.checkboxHeight);$label.find("span.holder").width(a.checkboxWidth);$(this).addClass("hiddenCheckbox");$label.bind("click",function(){$("input#"+$(this).attr("for")).triggerHandler("click");if($("input#"+$(this).attr("for")).is(":checkbox")){$(this).toggleClass("checked");$("input#"+$(this).attr("for")).checked=true;$(this).find("span.holder").css("top",0)}else{$toCheck=$("input#"+$(this).attr("for"));$('input[name="'+$toCheck.attr("name")+'"]').each(function(){$('label[for="'+$(this).attr("id")+'"]').removeClass("checked")});$(this).addClass("checked");$toCheck.checked=true}});$("input#"+$label.attr("for")).bind("keypress",function(b){if(b.keyCode==32){if($.browser.msie){$('label[for="'+$(this).attr("id")+'"]').toggleClass("checked")}else{$(this).trigger("click")}return false}})})};checkAllPrettyCheckboxes=function(b,a){if($(b).is(":checked")){$(a).find("input[type=checkbox]:not(:checked)").each(function(){$('label[for="'+$(this).attr("id")+'"]').trigger("click");if($.browser.msie){$(this).attr("checked","checked")}else{$(this).trigger("click")}})}else{$(a).find("input[type=checkbox]:checked").each(function(){$('label[for="'+$(this).attr("id")+'"]').trigger("click");if($.browser.msie){$(this).attr("checked","")}else{$(this).trigger("click")}})}};
/**
 * --------------------------------------------------------------------
 * jQuery customfileinput plugin
 * Author: Scott Jehl, scott@filamentgroup.com
 * Copyright (c) 2009 Filament Group
 * licensed under MIT (filamentgroup.com/examples/mit-license.txt)
 * --------------------------------------------------------------------
 */

$.fn.customFileInput = function(){
  var sizeClass = $(this).data('size')
  var icon = $(this).data('icon') || '.'
  var placeholder = $(this).data('placeholder') || 'No file selected'
  //apply events and styles for file input element
  var fileInput = $(this)
    .addClass('customfile-input') //add class for CSS
    .mouseover(function(){ upload.addClass('customfile-hover'); })
    .mouseout(function(){ upload.removeClass('customfile-hover'); })
    .focus(function(){
      upload.addClass('customfile-focus');
      fileInput.data('val', fileInput.val());
    })
    .blur(function(){
      upload.removeClass('customfile-focus');
      $(this).trigger('checkChange');
     })
     .bind('disable',function(){
      fileInput.attr('disabled',true);
      upload.addClass('customfile-disabled');
    })
    .bind('enable',function(){
      fileInput.removeAttr('disabled');
      upload.removeClass('customfile-disabled');
    })
    .bind('checkChange', function(){
      if(fileInput.val() && fileInput.val() != fileInput.data('val')){
        fileInput.trigger('change');
      }
    })
    .bind('change',function(){
      //get file name
      var fileName = $(this).val().split(/\\/).pop();
      //get file extension
      var fileExt = 'customfile-ext-' + fileName.split('.').pop().toLowerCase();
      //update the feedback
      uploadFeedback
        .text(fileName) //set feedback text to filename
        .removeClass(uploadFeedback.data('fileExt') || '') //remove any existing file extension class
        .addClass(fileExt) //add file extension class
        .data('fileExt', fileExt) //store file extension for class removal on next change
        .addClass('customfile-feedback-populated'); //add class to show populated state
    })
    .click(function(){ //for IE and Opera, make sure change fires after choosing a file, using an async callback
      fileInput.data('val', fileInput.val());
      setTimeout(function(){
        fileInput.trigger('checkChange');
      },100);
    });

  //create custom control container
  var upload = $('<div class="customfile"></div>');
  upload.addClass(sizeClass);

  //create custom control button
  var uploadButton = $('<span class="button icon-only large-icon" data-icon="' + icon + '" aria-hidden="true"></span>').appendTo(upload);
  //create custom control feedback
  var uploadFeedback = $('<span class="customfile-feedback" aria-hidden="true">' + placeholder + '</span>').appendTo(upload);

  //match disabled state
  if(fileInput.is('[disabled]')){
    fileInput.trigger('disable');
  }


  //on mousemove, keep file input under the cursor to steal click
  upload
    .mousemove(function(e){
      fileInput.css({
        'left': e.pageX - upload.offset().left - fileInput.outerWidth() + 20, //position right side 20px right of cursor X)
        'top': e.pageY - upload.offset().top - $(window).scrollTop() - 3
      });
    })
    .insertAfter(fileInput); //insert after the input

  fileInput.appendTo(upload);

  //return jQuery
  return $(this);
};
/*
 * jQuery UI Nested Sortable
 * v 1.3.5 / 21 jun 2012
 * http://mjsarfatti.com/code/nestedSortable
 *
 * Depends on:
 *   jquery.ui.sortable.js 1.8+
 *
 * Copyright (c) 2010-2012 Manuele J Sarfatti
 * Licensed under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 */


(function($) {

  $.widget("mjs.nestedSortable", $.extend({}, $.ui.sortable.prototype, {

    options: {
      tabSize: 20,
      disableNesting: 'mjs-nestedSortable-no-nesting',
      errorClass: 'mjs-nestedSortable-error',
      doNotClear: false,
      listType: 'ol',
      maxLevels: 0,
      protectRoot: false,
      rootID: null,
      rtl: false,
      isAllowed: function(item, parent) { return true; }
    },

    _create: function() {
      this.element.data('sortable', this.element.data('nestedSortable'));

      if (!this.element.is(this.options.listType))
        throw new Error('nestedSortable: Please check the listType option is set to your actual list type');

      return $.ui.sortable.prototype._create.apply(this, arguments);
    },

    destroy: function() {
      this.element
        .removeData("nestedSortable")
        .unbind(".nestedSortable");
      return $.ui.sortable.prototype.destroy.apply(this, arguments);
    },

    _mouseDrag: function(event) {

      //Compute the helpers position
      this.position = this._generatePosition(event);
      this.positionAbs = this._convertPositionTo("absolute");

      if (!this.lastPositionAbs) {
        this.lastPositionAbs = this.positionAbs;
      }

      var o = this.options;

      //Do scrolling
      if(this.options.scroll) {
        var scrolled = false;
        if(this.scrollParent[0] != document && this.scrollParent[0].tagName != 'HTML') {

          if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity)
            this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
          else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity)
            this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;

          if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity)
            this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
          else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity)
            this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;

        } else {

          if(event.pageY - $(document).scrollTop() < o.scrollSensitivity)
            scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
          else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity)
            scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);

          if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity)
            scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
          else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity)
            scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);

        }

        if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour)
          $.ui.ddmanager.prepareOffsets(this, event);
      }

      //Regenerate the absolute position used for position checks
      this.positionAbs = this._convertPositionTo("absolute");

      // Find the top offset before rearrangement,
      var previousTopOffset = this.placeholder.offset().top;

      //Set the helper position
      if(!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left+'px';
      if(!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top+'px';

      //Rearrange
      for (var i = this.items.length - 1; i >= 0; i--) {

        //Cache variables and intersection, continue if no intersection
        var item = this.items[i], itemElement = item.item[0], intersection = this._intersectsWithPointer(item);
        if (!intersection) continue;

        if(itemElement != this.currentItem[0] //cannot intersect with itself
          &&  this.placeholder[intersection == 1 ? "next" : "prev"]()[0] != itemElement //no useless actions that have been done before
          &&  !$.contains(this.placeholder[0], itemElement) //no action if the item moved is the parent of the item checked
          && (this.options.type == 'semi-dynamic' ? !$.contains(this.element[0], itemElement) : true)
          //&& itemElement.parentNode == this.placeholder[0].parentNode // only rearrange items within the same container
        ) {

          $(itemElement).mouseenter();

          this.direction = intersection == 1 ? "down" : "up";

          if (this.options.tolerance == "pointer" || this._intersectsWithSides(item)) {
            $(itemElement).mouseleave();
            this._rearrange(event, item);
          } else {
            break;
          }

          // Clear emtpy ul's/ol's
          this._clearEmpty(itemElement);

          this._trigger("change", event, this._uiHash());
          break;
        }
      }

      var parentItem = (this.placeholder[0].parentNode.parentNode &&
               $(this.placeholder[0].parentNode.parentNode).closest('.ui-sortable').length)
                    ? $(this.placeholder[0].parentNode.parentNode)
                    : null,
          level = this._getLevel(this.placeholder),
          childLevels = this._getChildLevels(this.helper);

      // To find the previous sibling in the list, keep backtracking until we hit a valid list item.
      var previousItem = this.placeholder[0].previousSibling ? $(this.placeholder[0].previousSibling) : null;
      if (previousItem != null) {
        while (previousItem[0].nodeName.toLowerCase() != 'li' || previousItem[0] == this.currentItem[0] || previousItem[0] == this.helper[0]) {
          if (previousItem[0].previousSibling) {
            previousItem = $(previousItem[0].previousSibling);
          } else {
            previousItem = null;
            break;
          }
        }
      }

      // To find the next sibling in the list, keep stepping forward until we hit a valid list item.
      var nextItem = this.placeholder[0].nextSibling ? $(this.placeholder[0].nextSibling) : null;
      if (nextItem != null) {
        while (nextItem[0].nodeName.toLowerCase() != 'li' || nextItem[0] == this.currentItem[0] || nextItem[0] == this.helper[0]) {
          if (nextItem[0].nextSibling) {
            nextItem = $(nextItem[0].nextSibling);
          } else {
            nextItem = null;
            break;
          }
        }
      }

      var newList = document.createElement(o.listType);

      this.beyondMaxLevels = 0;
      
      // If the item is moved to the left, send it to its parent's level unless there are siblings below it.
      if (parentItem != null && nextItem == null &&
          (o.rtl && (this.positionAbs.left + this.helper.outerWidth() > parentItem.offset().left + parentItem.outerWidth()) ||
          !o.rtl && (this.positionAbs.left < parentItem.offset().left))) {
        parentItem.after(this.placeholder[0]);
        this._clearEmpty(parentItem[0]);
        this._trigger("change", event, this._uiHash());
      }
      // If the item is below a sibling and is moved to the right, make it a child of that sibling.
      else if (previousItem != null &&
            (o.rtl && (this.positionAbs.left + this.helper.outerWidth() < previousItem.offset().left + previousItem.outerWidth() - o.tabSize) ||
            !o.rtl && (this.positionAbs.left > previousItem.offset().left + o.tabSize))) {
        this._isAllowed(previousItem, level, level+childLevels+1);
        if (!previousItem.children(o.listType).length) {
          previousItem[0].appendChild(newList);
        }
        // If this item is being moved from the top, add it to the top of the list.
        if (previousTopOffset && (previousTopOffset <= previousItem.offset().top)) {
          previousItem.children(o.listType).prepend(this.placeholder);
        }
        // Otherwise, add it to the bottom of the list.
        else {
          previousItem.children(o.listType)[0].appendChild(this.placeholder[0]);
        }
        this._trigger("change", event, this._uiHash());
      }
      else {
        this._isAllowed(parentItem, level, level+childLevels);
      }

      //Post events to containers
      this._contactContainers(event);

      //Interconnect with droppables
      if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);

      //Call callbacks
      this._trigger('sort', event, this._uiHash());

      this.lastPositionAbs = this.positionAbs;
      return false;

    },

    _mouseStop: function(event, noPropagation) {

      // If the item is in a position not allowed, send it back
      if (this.beyondMaxLevels) {

        this.placeholder.removeClass(this.options.errorClass);

        if (this.domPosition.prev) {
          $(this.domPosition.prev).after(this.placeholder);
        } else {
          $(this.domPosition.parent).prepend(this.placeholder);
        }

        this._trigger("revert", event, this._uiHash());

      }

      // Clean last empty ul/ol
      for (var i = this.items.length - 1; i >= 0; i--) {
        var item = this.items[i].item[0];
        this._clearEmpty(item);
      }

      $.ui.sortable.prototype._mouseStop.apply(this, arguments);

    },

    serialize: function(options) {

      var o = $.extend({}, this.options, options),
        items = this._getItemsAsjQuery(o && o.connected),
          str = [];

      $(items).each(function() {
        var res = ($(o.item || this).attr(o.attribute || 'id') || '')
            .match(o.expression || (/(.+)[-=_](.+)/)),
            pid = ($(o.item || this).parent(o.listType)
            .parent(o.items)
            .attr(o.attribute || 'id') || '')
            .match(o.expression || (/(.+)[-=_](.+)/));

        if (res) {
          str.push(((o.key || res[1]) + '[' + (o.key && o.expression ? res[1] : res[2]) + ']')
            + '='
            + (pid ? (o.key && o.expression ? pid[1] : pid[2]) : o.rootID));
        }
      });

      if(!str.length && o.key) {
        str.push(o.key + '=');
      }

      return str.join('&');

    },

    toHierarchy: function(options) {

      var o = $.extend({}, this.options, options),
        sDepth = o.startDepthCount || 0,
          ret = [];

      $(this.element).children(o.items).each(function () {
        var level = _recursiveItems(this);
        ret.push(level);
      });

      return ret;

      function _recursiveItems(item) {
        var id = ($(item).attr(o.attribute || 'id') || '').match(o.expression || (/(.+)[-=_](.+)/));
        if (id) {
          var currentItem = {"id" : id[2]};
          if ($(item).children(o.listType).children(o.items).length > 0) {
            currentItem.children = [];
            $(item).children(o.listType).children(o.items).each(function() {
              var level = _recursiveItems(this);
              currentItem.children.push(level);
            });
          }
          return currentItem;
        }
      }
    },

    toArray: function(options) {

      var o = $.extend({}, this.options, options),
        sDepth = o.startDepthCount || 0,
          ret = [],
          left = 2;

      ret.push({
        "item_id": o.rootID,
        "parent_id": 'none',
        "depth": sDepth,
        "left": '1',
        "right": ($(o.items, this.element).length + 1) * 2
      });

      $(this.element).children(o.items).each(function () {
        left = _recursiveArray(this, sDepth + 1, left);
      });

      ret = ret.sort(function(a,b){ return (a.left - b.left); });

      return ret;

      function _recursiveArray(item, depth, left) {

        var right = left + 1,
            id,
            pid;

        if ($(item).children(o.listType).children(o.items).length > 0) {
          depth ++;
          $(item).children(o.listType).children(o.items).each(function () {
            right = _recursiveArray($(this), depth, right);
          });
          depth --;
        }

        id = ($(item).attr(o.attribute || 'id')).match(o.expression || (/(.+)[-=_](.+)/));

        if (depth === sDepth + 1) {
          pid = o.rootID;
        } else {
          var parentItem = ($(item).parent(o.listType)
                       .parent(o.items)
                       .attr(o.attribute || 'id'))
                       .match(o.expression || (/(.+)[-=_](.+)/));
          pid = parentItem[2];
        }

        if (id) {
            ret.push({"item_id": id[2], "parent_id": pid, "depth": depth, "left": left, "right": right});
        }

        left = right + 1;
        return left;
      }

    },

    _clearEmpty: function(item) {

      var emptyList = $(item).children(this.options.listType);
      if (emptyList.length && !emptyList.children().length && !this.options.doNotClear) {
        emptyList.remove();
      }

    },

    _getLevel: function(item) {

      var level = 1;

      if (this.options.listType) {
        var list = item.closest(this.options.listType);
        while (list && list.length > 0 && 
                      !list.is('.ui-sortable')) {
          level++;
          list = list.parent().closest(this.options.listType);
        }
      }

      return level;
    },

    _getChildLevels: function(parent, depth) {
      var self = this,
          o = this.options,
          result = 0;
      depth = depth || 0;

      $(parent).children(o.listType).children(o.items).each(function (index, child) {
          result = Math.max(self._getChildLevels(child, depth + 1), result);
      });

      return depth ? result + 1 : result;
    },

    _isAllowed: function(parentItem, level, levels) {
      var o = this.options,
        isRoot = $(this.domPosition.parent).hasClass('ui-sortable') ? true : false,
        maxLevels = this.placeholder.closest('.ui-sortable').nestedSortable('option', 'maxLevels'); // this takes into account the maxLevels set to the recipient list

      // Is the root protected?
      // Are we trying to nest under a no-nest?
      // Are we nesting too deep?
      if (!o.isAllowed(this.currentItem, parentItem) ||
        parentItem && parentItem.hasClass(o.disableNesting) ||
        o.protectRoot && (parentItem == null && !isRoot || isRoot && level > 1)) {
          this.placeholder.addClass(o.errorClass);
          if (maxLevels < levels && maxLevels != 0) {
            this.beyondMaxLevels = levels - maxLevels;
          } else {
            this.beyondMaxLevels = 1;
          }
      } else {
        if (maxLevels < levels && maxLevels != 0) {
          this.placeholder.addClass(o.errorClass);
          this.beyondMaxLevels = levels - maxLevels;
        } else {
          this.placeholder.removeClass(o.errorClass);
          this.beyondMaxLevels = 0;
        }
      }
    }

  }));

  $.mjs.nestedSortable.prototype.options = $.extend({}, $.ui.sortable.prototype.options, $.mjs.nestedSortable.prototype.options);
})(jQuery);
(function(window,$,undefined){Array.max=function(array){return Math.max.apply(Math,array)};Array.min=function(array){return Math.min.apply(Math,array)};var $event=$.event,resizeTimeout;$event.special.smartresize={setup:function(){$(this).bind("resize",$event.special.smartresize.handler)},teardown:function(){$(this).unbind("resize",$event.special.smartresize.handler)},handler:function(event,execAsap){var context=this,args=arguments;event.type="smartresize";if(resizeTimeout){clearTimeout(resizeTimeout)}resizeTimeout=setTimeout(function(){jQuery.event.handle.apply(context,args)},execAsap==="execAsap"?0:50)}};$.fn.smartresize=function(fn){return fn?this.bind("smartresize",fn):this.trigger("smartresize",["execAsap"])};$.fn.imagesLoaded=function(callback){var $images=this.find('img'),len=$images.length,_this=this,blank='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';function triggerCallback(){callback.call(_this,$images)}function imgLoaded(){if(--len<=0&&this.src!==blank){setTimeout(triggerCallback);$images.unbind('load error',imgLoaded)}}if(!len){triggerCallback()}$images.bind('load error',imgLoaded).each(function(){if(this.complete||this.complete===undefined){var src=this.src;this.src=blank;this.src=src}});return this};$.Montage=function(options,element){this.element=$(element).show();this.cache={};this.heights=new Array();this._create(options)};$.Montage.defaults={liquid:true,margin:1,minw:70,minh:20,maxh:250,alternateHeight:false,alternateHeightRange:{min:100,max:300},fixedHeight:null,minsize:false,fillLastRow:false};$.Montage.prototype={_getImageWidth:function($img,h){var i_w=$img.width(),i_h=$img.height(),r_i=i_h/i_w;return Math.ceil(h/r_i)},_getImageHeight:function($img,w){var i_w=$img.width(),i_h=$img.height(),r_i=i_h/i_w;return Math.ceil(r_i*w)},_chooseHeight:function(){if(this.options.minsize){return Array.min(this.heights)}var result={},max=0,res,val,min;for(var i=0,total=this.heights.length;i<total;++i){var val=this.heights[i],inc=(result[val]||0)+1;if(val<this.options.minh||val>this.options.maxh)continue;result[val]=inc;if(inc>=max){max=inc;res=val}}for(var i in result){if(result[i]===max){val=i;min=min||val;if(min<this.options.minh)min=null;else if(min>val)min=val;if(min===null)min=val}}if(min===undefined)min=this.heights[0];res=min;return res},_stretchImage:function($img){var prevWrapper_w=$img.parent().width(),new_w=prevWrapper_w+this.cache.space_w_left,crop={x:new_w,y:this.theHeight};var new_image_w=$img.width()+this.cache.space_w_left,new_image_h=this._getImageHeight($img,new_image_w);this._cropImage($img,new_image_w,new_image_h,crop);this.cache.space_w_left=this.cache.container_w;if(this.options.alternateHeight)this.theHeight=Math.floor(Math.random()*(this.options.alternateHeightRange.max-this.options.alternateHeightRange.min+1)+this.options.alternateHeightRange.min)},_updatePrevImage:function($nextimg){var $prevImage=this.element.find('img.montage:last');this._stretchImage($prevImage);this._insertImage($nextimg)},_insertImage:function($img){var new_w=this._getImageWidth($img,this.theHeight);if(this.options.minsize&&!this.options.alternateHeight){if(this.cache.space_w_left<=this.options.margin*2){this._updatePrevImage($img)}else{if(new_w>this.cache.space_w_left){var crop={x:this.cache.space_w_left,y:this.theHeight};this._cropImage($img,new_w,this.theHeight,crop);this.cache.space_w_left=this.cache.container_w;$img.addClass('montage')}else{var crop={x:new_w,y:this.theHeight};this._cropImage($img,new_w,this.theHeight,crop);this.cache.space_w_left-=new_w;$img.addClass('montage')}}}else{if(new_w<this.options.minw){if(this.options.minw>this.cache.space_w_left){this._updatePrevImage($img)}else{var new_w=this.options.minw,new_h=this._getImageHeight($img,new_w),crop={x:new_w,y:this.theHeight};this._cropImage($img,new_w,new_h,crop);this.cache.space_w_left-=new_w;$img.addClass('montage')}}else{if(new_w>this.cache.space_w_left&&this.cache.space_w_left<this.options.minw){this._updatePrevImage($img)}else if(new_w>this.cache.space_w_left&&this.cache.space_w_left>=this.options.minw){var crop={x:this.cache.space_w_left,y:this.theHeight};this._cropImage($img,new_w,this.theHeight,crop);this.cache.space_w_left=this.cache.container_w;if(this.options.alternateHeight)this.theHeight=Math.floor(Math.random()*(this.options.alternateHeightRange.max-this.options.alternateHeightRange.min+1)+this.options.alternateHeightRange.min);$img.addClass('montage')}else{var crop={x:new_w,y:this.theHeight};this._cropImage($img,new_w,this.theHeight,crop);this.cache.space_w_left-=new_w;$img.addClass('montage')}}}},_cropImage:function($img,w,h,cropParam){var dec=this.options.margin*2;var $wrapper=$img.parent('a');this._resizeImage($img,w,h);$img.css({left:-(w-cropParam.x)/2+'px',top:-(h-cropParam.y)/2+'px'});$wrapper.addClass('am-wrapper').css({width:cropParam.x-dec+'px',height:cropParam.y+'px',margin:this.options.margin})},_resizeImage:function($img,w,h){$img.css({width:w+'px',height:h+'px'})},_reload:function(){var new_el_w=this.element.width();if(new_el_w!==this.cache.container_w){this.element.hide();this.cache.container_w=new_el_w;this.cache.space_w_left=new_el_w;var instance=this;instance.$imgs.removeClass('montage').each(function(i){instance._insertImage($(this))});if(instance.options.fillLastRow&&instance.cache.space_w_left!==instance.cache.container_w){instance._stretchImage(instance.$imgs.eq(instance.totalImages-1))}instance.element.show()}},_create:function(options){this.options=$.extend(true,{},$.Montage.defaults,options);var instance=this,el_w=instance.element.width();instance.$imgs=instance.element.find('img');instance.totalImages=instance.$imgs.length;if(instance.options.liquid)$('html').css('overflow-y','scroll');if(!instance.options.fixedHeight){instance.$imgs.each(function(i){var $img=$(this),img_w=$img.width();if(img_w<instance.options.minw&&!instance.options.minsize){var new_h=instance._getImageHeight($img,instance.options.minw);instance.heights.push(new_h)}else{instance.heights.push($img.height())}})}instance.theHeight=(!instance.options.fixedHeight&&!instance.options.alternateHeight)?instance._chooseHeight():instance.options.fixedHeight;if(instance.options.alternateHeight)instance.theHeight=Math.floor(Math.random()*(instance.options.alternateHeightRange.max-instance.options.alternateHeightRange.min+1)+instance.options.alternateHeightRange.min);instance.cache.container_w=el_w;instance.cache.space_w_left=el_w;instance.$imgs.each(function(i){instance._insertImage($(this))});if(instance.options.fillLastRow&&instance.cache.space_w_left!==instance.cache.container_w){instance._stretchImage(instance.$imgs.eq(instance.totalImages-1))}$(window).bind('smartresize.montage',function(){instance._reload()})},add:function($images,callback){var $images_stripped=$images.find('img');this.$imgs=this.$imgs.add($images_stripped);this.totalImages=this.$imgs.length;this._add($images,callback)},_add:function($images,callback){var instance=this;$images.find('img').each(function(i){instance._insertImage($(this))});if(instance.options.fillLastRow&&instance.cache.space_w_left!==instance.cache.container_w)instance._stretchImage(instance.$imgs.eq(instance.totalImages-1));if(callback)callback.call($images)},destroy:function(callback){this._destroy(callback)},_destroy:function(callback){this.$imgs.removeClass('montage').css({position:'',width:'',height:'',left:'',top:''}).unwrap();if(this.options.liquid)$('html').css('overflow','');this.element.unbind('.montage').removeData('montage');$(window).unbind('.montage');if(callback)callback.call()},option:function(key,value){if($.isPlainObject(key)){this.options=$.extend(true,this.options,key)}}};var logError=function(message){if(this.console){console.error(message)}};$.fn.montage=function(options){if(typeof options==='string'){var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=$.data(this,'montage');if(!instance){logError("cannot call methods on montage prior to initialization; "+"attempted to call method '"+options+"'");return}if(!$.isFunction(instance[options])||options.charAt(0)==="_"){logError("no such method '"+options+"' for montage instance");return}instance[options].apply(instance,args)})}else{this.each(function(){var instance=$.data(this,'montage');if(instance){instance.option(options||{});instance._reload()}else{$.data(this,'montage',new $.Montage(options,this))}})}return this}})(window,jQuery);
/*! jRespond.js v 0.9 | Author: Jeremy Fields [jeremy.fields@viget.com], 2013 | License: MIT */

(function(b,a,c){b.jRespond=function(l){var e=[];var g=[];var o=l;var s="";var n;var d=0;var m=100;var p=500;var j=p;var i=function(){var t=0;if(!window.innerWidth){if(!(document.documentElement.clientWidth===0)){t=document.documentElement.clientWidth}else{t=document.body.clientWidth}}else{t=window.innerWidth}return t};var h=function(v){var u=v.breakpoint;var t=v.enter||c;e.push(v);g.push(false);if(k(u)){if(t!==c){t.call()}g[(e.length-1)]=true}};var q=function(){var A=[];var z=[];for(var y=0;y<e.length;y++){var v=e[y]["breakpoint"];var t=e[y]["enter"]||c;var x=e[y]["exit"]||c;if(v==="*"){if(t!==c){A.push(t)}if(x!==c){z.push(x)}}else{if(k(v)){if(t!==c&&!g[y]){A.push(t)}g[y]=true}else{if(x!==c&&g[y]){z.push(x)}g[y]=false}}}for(var w=0;w<z.length;w++){z[w].call()}for(var u=0;u<A.length;u++){A[u].call()}};var r=function(u){var v=false;for(var t=0;t<o.length;t++){if(u>=o[t]["enter"]&&u<=o[t]["exit"]){v=true;break}}if(v&&s!==o[t]["label"]){s=o[t]["label"];q()}else{if(!v&&s!==""){s="";q()}}};var k=function(t){if(typeof t==="object"){if(t.join().indexOf(s)>=0){return true}}else{if(t==="*"){return true}else{if(typeof t==="string"){if(s===t){return true}}}}};var f=function(){var t=i();if(t!==d){j=m;r(t)}else{j=p}d=t;setTimeout(f,j)};f();return{addFunc:function(t){h(t)},getBreakpoint:function(){return s}}}}(this,this.document));
/**
 * Farbtastic Color Picker 1.2
 * © 2008 Steven Wittens
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */


jQuery.fn.farbtastic = function (callback) {
  $.farbtastic(this, callback);
  return this;
};

jQuery.farbtastic = function (container, callback) {
  var container = $(container).get(0);
  return container.farbtastic || (container.farbtastic = new jQuery._farbtastic(container, callback));
}

jQuery._farbtastic = function (container, callback) {
  // Store farbtastic object
  var fb = this;

  // Insert markup
  $(container).html('<div class="farbtastic"><div class="color"></div><div class="wheel"></div><div class="overlay"></div><div class="h-marker marker"></div><div class="sl-marker marker"></div></div>');
  var e = $('.farbtastic', container);
  fb.wheel = $('.wheel', container).get(0);
  // Dimensions
  fb.radius = 84;
  fb.square = 100;
  fb.width = 194;

  // Fix background PNGs in IE6
  if (navigator.appVersion.match(/MSIE [0-6]\./)) {
    $('*', e).each(function () {
      if (this.currentStyle.backgroundImage != 'none') {
        var image = this.currentStyle.backgroundImage;
        image = this.currentStyle.backgroundImage.substring(5, image.length - 2);
        $(this).css({
          'backgroundImage': 'none',
          'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')"
        });
      }
    });
  }

  /**
   * Link to the given element(s) or callback.
   */
  fb.linkTo = function (callback) {
    // Unbind previous nodes
    if (typeof fb.callback == 'object') {
      $(fb.callback).unbind('keyup', fb.updateValue);
    }

    // Reset color
    fb.color = null;

    // Bind callback or elements
    if (typeof callback == 'function') {
      fb.callback = callback;
    }
    else if (typeof callback == 'object' || typeof callback == 'string') {
      fb.callback = $(callback);
      fb.callback.bind('keyup', fb.updateValue);
      if (fb.callback.get(0).value) {
        fb.setColor(fb.callback.get(0).value);
      }
    }
    return this;
  }
  fb.updateValue = function (event) {
    if (this.value && this.value != fb.color) {
      fb.setColor(this.value);
    }
  }

  /**
   * Change color with HTML syntax #123456
   */
  fb.setColor = function (color) {
    var unpack = fb.unpack(color);
    if (fb.color != color && unpack) {
      fb.color = color;
      fb.rgb = unpack;
      fb.hsl = fb.RGBToHSL(fb.rgb);
      fb.updateDisplay();
    }
    return this;
  }

  /**
   * Change color with HSL triplet [0..1, 0..1, 0..1]
   */
  fb.setHSL = function (hsl) {
    fb.hsl = hsl;
    fb.rgb = fb.HSLToRGB(hsl);
    fb.color = fb.pack(fb.rgb);
    fb.updateDisplay();
    return this;
  }

  /////////////////////////////////////////////////////

  /**
   * Retrieve the coordinates of the given event relative to the center
   * of the widget.
   */
  fb.widgetCoords = function (event) {
    var x, y;
    var el = event.target || event.srcElement;
    var reference = fb.wheel;

    if (typeof event.offsetX != 'undefined') {
      // Use offset coordinates and find common offsetParent
      var pos = { x: event.offsetX, y: event.offsetY };

      // Send the coordinates upwards through the offsetParent chain.
      var e = el;
      while (e) {
        e.mouseX = pos.x;
        e.mouseY = pos.y;
        pos.x += e.offsetLeft;
        pos.y += e.offsetTop;
        e = e.offsetParent;
      }

      // Look for the coordinates starting from the wheel widget.
      var e = reference;
      var offset = { x: 0, y: 0 }
      while (e) {
        if (typeof e.mouseX != 'undefined') {
          x = e.mouseX - offset.x;
          y = e.mouseY - offset.y;
          break;
        }
        offset.x += e.offsetLeft;
        offset.y += e.offsetTop;
        e = e.offsetParent;
      }

      // Reset stored coordinates
      e = el;
      while (e) {
        e.mouseX = undefined;
        e.mouseY = undefined;
        e = e.offsetParent;
      }
    }
    else {
      // Use absolute coordinates
      var pos = fb.absolutePosition(reference);
      x = (event.pageX || 0*(event.clientX + $('html').get(0).scrollLeft)) - pos.x;
      y = (event.pageY || 0*(event.clientY + $('html').get(0).scrollTop)) - pos.y;
    }
    // Subtract distance to middle
    return { x: x - fb.width / 2, y: y - fb.width / 2 };
  }

  /**
   * Mousedown handler
   */
  fb.mousedown = function (event) {
    // Capture mouse
    if (!document.dragging) {
      $(document).bind('mousemove', fb.mousemove).bind('mouseup', fb.mouseup);
      document.dragging = true;
    }

    // Check which area is being dragged
    var pos = fb.widgetCoords(event);
    fb.circleDrag = Math.max(Math.abs(pos.x), Math.abs(pos.y)) * 2 > fb.square;

    // Process
    fb.mousemove(event);
    return false;
  }

  /**
   * Mousemove handler
   */
  fb.mousemove = function (event) {
    // Get coordinates relative to color picker center
    var pos = fb.widgetCoords(event);

    // Set new HSL parameters
    if (fb.circleDrag) {
      var hue = Math.atan2(pos.x, -pos.y) / 6.28;
      if (hue < 0) hue += 1;
      fb.setHSL([hue, fb.hsl[1], fb.hsl[2]]);
    }
    else {
      var sat = Math.max(0, Math.min(1, -(pos.x / fb.square) + .5));
      var lum = Math.max(0, Math.min(1, -(pos.y / fb.square) + .5));
      fb.setHSL([fb.hsl[0], sat, lum]);
    }
    return false;
  }

  /**
   * Mouseup handler
   */
  fb.mouseup = function () {
    // Uncapture mouse
    $(document).unbind('mousemove', fb.mousemove);
    $(document).unbind('mouseup', fb.mouseup);
    document.dragging = false;
  }

  /**
   * Update the markers and styles
   */
  fb.updateDisplay = function () {
    // Markers
    var angle = fb.hsl[0] * 6.28;
    $('.h-marker', e).css({
      left: Math.round(Math.sin(angle) * fb.radius + fb.width / 2) + 'px',
      top: Math.round(-Math.cos(angle) * fb.radius + fb.width / 2) + 'px'
    });

    $('.sl-marker', e).css({
      left: Math.round(fb.square * (.5 - fb.hsl[1]) + fb.width / 2) + 'px',
      top: Math.round(fb.square * (.5 - fb.hsl[2]) + fb.width / 2) + 'px'
    });

    // Saturation/Luminance gradient
    $('.color', e).css('backgroundColor', fb.pack(fb.HSLToRGB([fb.hsl[0], 1, 0.5])));

    // Linked elements or callback
    if (typeof fb.callback == 'object') {
      // Set background/foreground color
      $(fb.callback).css({
        backgroundColor: fb.color,
        color: fb.hsl[2] > 0.5 ? '#000' : '#fff'
      });

      // Change linked value
      $(fb.callback).each(function() {
        if (this.value && this.value != fb.color) {
          this.value = fb.color;
        }
      });
    }
    else if (typeof fb.callback == 'function') {
      fb.callback.call(fb, fb.color);
    }
  }

  /**
   * Get absolute position of element
   */
  fb.absolutePosition = function (el) {
    var r = { x: el.offsetLeft, y: el.offsetTop };
    // Resolve relative to offsetParent
    if (el.offsetParent) {
      var tmp = fb.absolutePosition(el.offsetParent);
      r.x += tmp.x;
      r.y += tmp.y;
    }
    return r;
  };

  /* Various color utility functions */
  fb.pack = function (rgb) {
    var r = Math.round(rgb[0] * 255);
    var g = Math.round(rgb[1] * 255);
    var b = Math.round(rgb[2] * 255);
    return '#' + (r < 16 ? '0' : '') + r.toString(16) +
           (g < 16 ? '0' : '') + g.toString(16) +
           (b < 16 ? '0' : '') + b.toString(16);
  }

  fb.unpack = function (color) {
    if (color.length == 7) {
      return [parseInt('0x' + color.substring(1, 3)) / 255,
        parseInt('0x' + color.substring(3, 5)) / 255,
        parseInt('0x' + color.substring(5, 7)) / 255];
    }
    else if (color.length == 4) {
      return [parseInt('0x' + color.substring(1, 2)) / 15,
        parseInt('0x' + color.substring(2, 3)) / 15,
        parseInt('0x' + color.substring(3, 4)) / 15];
    }
  }

  fb.HSLToRGB = function (hsl) {
    var m1, m2, r, g, b;
    var h = hsl[0], s = hsl[1], l = hsl[2];
    m2 = (l <= 0.5) ? l * (s + 1) : l + s - l*s;
    m1 = l * 2 - m2;
    return [this.hueToRGB(m1, m2, h+0.33333),
        this.hueToRGB(m1, m2, h),
        this.hueToRGB(m1, m2, h-0.33333)];
  }

  fb.hueToRGB = function (m1, m2, h) {
    h = (h < 0) ? h + 1 : ((h > 1) ? h - 1 : h);
    if (h * 6 < 1) return m1 + (m2 - m1) * h * 6;
    if (h * 2 < 1) return m2;
    if (h * 3 < 2) return m1 + (m2 - m1) * (0.66666 - h) * 6;
    return m1;
  }

  fb.RGBToHSL = function (rgb) {
    var min, max, delta, h, s, l;
    var r = rgb[0], g = rgb[1], b = rgb[2];
    min = Math.min(r, Math.min(g, b));
    max = Math.max(r, Math.max(g, b));
    delta = max - min;
    l = (min + max) / 2;
    s = 0;
    if (l > 0 && l < 1) {
      s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));
    }
    h = 0;
    if (delta > 0) {
      if (max == r && max != g) h += (g - b) / delta;
      if (max == g && max != b) h += (2 + (b - r) / delta);
      if (max == b && max != r) h += (4 + (r - g) / delta);
      h /= 6;
    }
    return [h, s, l];
  }

  // Install mousedown handler (the others are set on the document on-demand)
  $('*', e).mousedown(fb.mousedown);

    // Init color
  fb.setColor('#000000');

  // Set linked elements/callback
  if (callback) {
    fb.linkTo(callback);
  }
}
;
/*
 wysihtml5 v0.4.0pre
 https://github.com/xing/wysihtml5

 Author: Christopher Blum (https://github.com/tiff)

 Copyright (C) 2012 XING AG
 Licensed under the MIT license (MIT)

 Rangy, a cross-browser JavaScript range and selection library
 http://code.google.com/p/rangy/

 Copyright 2011, Tim Down
 Licensed under the MIT license.
 Version: 1.2.2
 Build date: 13 November 2011
*/

var wysihtml5={version:"0.4.0pre",commands:{},dom:{},quirks:{},toolbar:{},lang:{},selection:{},views:{},INVISIBLE_SPACE:"\ufeff",EMPTY_FUNCTION:function(){},ELEMENT_NODE:1,TEXT_NODE:3,BACKSPACE_KEY:8,ENTER_KEY:13,ESCAPE_KEY:27,SPACE_KEY:32,DELETE_KEY:46};
window.rangy=function(){function b(a,b){var c=typeof a[b];return c==j||!!(c==g&&a[b])||"unknown"==c}function c(a,b){return!!(typeof a[b]==g&&a[b])}function a(a,b){return typeof a[b]!=k}function d(a){return function(b,c){for(var d=c.length;d--;)if(!a(b,c[d]))return!1;return!0}}function e(a){return a&&p(a,u)&&t(a,v)}function f(a){window.alert("Rangy not supported in your browser. Reason: "+a);q.initialized=!0;q.supported=!1}function h(){if(!q.initialized){var a,d=!1,g=!1;b(document,"createRange")&&
(a=document.createRange(),p(a,n)&&t(a,m)&&(d=!0),a.detach());if((a=c(document,"body")?document.body:document.getElementsByTagName("body")[0])&&b(a,"createTextRange"))a=a.createTextRange(),e(a)&&(g=!0);!d&&!g&&f("Neither Range nor TextRange are implemented");q.initialized=!0;q.features={implementsDomRange:d,implementsTextRange:g};d=A.concat(y);g=0;for(a=d.length;g<a;++g)try{d[g](q)}catch(j){c(window,"console")&&b(window.console,"log")&&window.console.log("Init listener threw an exception. Continuing.",
j)}}}function i(a){this.name=a;this.supported=this.initialized=!1}var g="object",j="function",k="undefined",m="startContainer startOffset endContainer endOffset collapsed commonAncestorContainer START_TO_START START_TO_END END_TO_START END_TO_END".split(" "),n="setStart setStartBefore setStartAfter setEnd setEndBefore setEndAfter collapse selectNode selectNodeContents compareBoundaryPoints deleteContents extractContents cloneContents insertNode surroundContents cloneRange toString detach".split(" "),
v="boundingHeight boundingLeft boundingTop boundingWidth htmlText text".split(" "),u="collapse compareEndPoints duplicate getBookmark moveToBookmark moveToElementText parentElement pasteHTML select setEndPoint getBoundingClientRect".split(" "),p=d(b),r=d(c),t=d(a),q={version:"1.2.2",initialized:!1,supported:!0,util:{isHostMethod:b,isHostObject:c,isHostProperty:a,areHostMethods:p,areHostObjects:r,areHostProperties:t,isTextRange:e},features:{},modules:{},config:{alertOnWarn:!1,preferTextRange:!1}};
q.fail=f;q.warn=function(a){a="Rangy warning: "+a;q.config.alertOnWarn?window.alert(a):typeof window.console!=k&&typeof window.console.log!=k&&window.console.log(a)};({}).hasOwnProperty?q.util.extend=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}:f("hasOwnProperty not supported");var y=[],A=[];q.init=h;q.addInitListener=function(a){q.initialized?a(q):y.push(a)};var B=[];q.addCreateMissingNativeApiListener=function(a){B.push(a)};q.createMissingNativeApi=function(a){a=a||window;h();
for(var b=0,c=B.length;b<c;++b)B[b](a)};i.prototype.fail=function(a){this.initialized=!0;this.supported=!1;throw Error("Module '"+this.name+"' failed to load: "+a);};i.prototype.warn=function(a){q.warn("Module "+this.name+": "+a)};i.prototype.createError=function(a){return Error("Error in Rangy "+this.name+" module: "+a)};q.createModule=function(a,b){var c=new i(a);q.modules[a]=c;A.push(function(a){b(a,c);c.initialized=!0;c.supported=!0})};q.requireModules=function(a){for(var b=0,c=a.length,d,e;b<
c;++b){e=a[b];d=q.modules[e];if(!d||!(d instanceof i))throw Error("Module '"+e+"' not found");if(!d.supported)throw Error("Module '"+e+"' not supported");}};var D=!1,r=function(){D||(D=!0,q.initialized||h())};if(typeof window==k)f("No window found");else if(typeof document==k)f("No document found");else return b(document,"addEventListener")&&document.addEventListener("DOMContentLoaded",r,!1),b(window,"addEventListener")?window.addEventListener("load",r,!1):b(window,"attachEvent")?window.attachEvent("onload",
r):f("Window does not have required addEventListener or attachEvent method"),q}();
rangy.createModule("DomUtil",function(b,c){function a(a){for(var b=0;a=a.previousSibling;)b++;return b}function d(a,b){var c=[],d;for(d=a;d;d=d.parentNode)c.push(d);for(d=b;d;d=d.parentNode)if(p(c,d))return d;return null}function e(a,b,c){for(c=c?a:a.parentNode;c;){a=c.parentNode;if(a===b)return c;c=a}return null}function f(a){a=a.nodeType;return 3==a||4==a||8==a}function h(a,b){var c=b.nextSibling,d=b.parentNode;c?d.insertBefore(a,c):d.appendChild(a);return a}function i(a){if(9==a.nodeType)return a;
if(typeof a.ownerDocument!=n)return a.ownerDocument;if(typeof a.document!=n)return a.document;if(a.parentNode)return i(a.parentNode);throw Error("getDocument: no document found for node");}function g(a){return!a?"[No node]":f(a)?'"'+a.data+'"':1==a.nodeType?"<"+a.nodeName+(a.id?' id="'+a.id+'"':"")+">["+a.childNodes.length+"]":a.nodeName}function j(a){this._next=this.root=a}function k(a,b){this.node=a;this.offset=b}function m(a){this.code=this[a];this.codeName=a;this.message="DOMException: "+this.codeName}
var n="undefined",v=b.util;v.areHostMethods(document,["createDocumentFragment","createElement","createTextNode"])||c.fail("document missing a Node creation method");v.isHostMethod(document,"getElementsByTagName")||c.fail("document missing getElementsByTagName method");var u=document.createElement("div");v.areHostMethods(u,["insertBefore","appendChild","cloneNode"])||c.fail("Incomplete Element implementation");v.isHostProperty(u,"innerHTML")||c.fail("Element is missing innerHTML property");u=document.createTextNode("test");
v.areHostMethods(u,["splitText","deleteData","insertData","appendData","cloneNode"])||c.fail("Incomplete Text Node implementation");var p=function(a,b){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1};j.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next,b;if(this._current){b=a.firstChild;if(!b)for(b=null;a!==this.root&&!(b=a.nextSibling);)a=a.parentNode;this._next=b}return this._current},detach:function(){this._current=this._next=this.root=
null}};k.prototype={equals:function(a){return this.node===a.node&this.offset==a.offset},inspect:function(){return"[DomPosition("+g(this.node)+":"+this.offset+")]"}};m.prototype={INDEX_SIZE_ERR:1,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INVALID_STATE_ERR:11};m.prototype.toString=function(){return this.message};b.dom={arrayContains:p,isHtmlNamespace:function(a){var b;return typeof a.namespaceURI==n||null===(b=a.namespaceURI)||"http://www.w3.org/1999/xhtml"==
b},parentElement:function(a){a=a.parentNode;return 1==a.nodeType?a:null},getNodeIndex:a,getNodeLength:function(a){var b;return f(a)?a.length:(b=a.childNodes)?b.length:0},getCommonAncestor:d,isAncestorOf:function(a,b,c){for(b=c?b:b.parentNode;b;){if(b===a)return!0;b=b.parentNode}return!1},getClosestAncestorIn:e,isCharacterDataNode:f,insertAfter:h,splitDataNode:function(a,b){var c=a.cloneNode(!1);c.deleteData(0,b);a.deleteData(b,a.length-b);h(c,a);return c},getDocument:i,getWindow:function(a){a=i(a);
if(typeof a.defaultView!=n)return a.defaultView;if(typeof a.parentWindow!=n)return a.parentWindow;throw Error("Cannot get a window object for node");},getIframeWindow:function(a){if(typeof a.contentWindow!=n)return a.contentWindow;if(typeof a.contentDocument!=n)return a.contentDocument.defaultView;throw Error("getIframeWindow: No Window object found for iframe element");},getIframeDocument:function(a){if(typeof a.contentDocument!=n)return a.contentDocument;if(typeof a.contentWindow!=n)return a.contentWindow.document;
throw Error("getIframeWindow: No Document object found for iframe element");},getBody:function(a){return v.isHostObject(a,"body")?a.body:a.getElementsByTagName("body")[0]},getRootContainer:function(a){for(var b;b=a.parentNode;)a=b;return a},comparePoints:function(b,c,g,j){var f;if(b==g)return c===j?0:c<j?-1:1;if(f=e(g,b,!0))return c<=a(f)?-1:1;if(f=e(b,g,!0))return a(f)<j?-1:1;c=d(b,g);b=b===c?c:e(b,c,!0);g=g===c?c:e(g,c,!0);if(b===g)throw Error("comparePoints got to case 4 and childA and childB are the same!");
for(c=c.firstChild;c;){if(c===b)return-1;if(c===g)return 1;c=c.nextSibling}throw Error("Should not be here!");},inspectNode:g,fragmentFromNodeChildren:function(a){for(var b=i(a).createDocumentFragment(),c;c=a.firstChild;)b.appendChild(c);return b},createIterator:function(a){return new j(a)},DomPosition:k};b.DOMException=m});
rangy.createModule("DomRange",function(b){function c(a,b){return 3!=a.nodeType&&(l.isAncestorOf(a,b.startContainer,!0)||l.isAncestorOf(a,b.endContainer,!0))}function a(a){return l.getDocument(a.startContainer)}function d(a,b,c){if(b=a._listeners[b])for(var d=0,e=b.length;d<e;++d)b[d].call(a,{target:a,args:c})}function e(a){return new H(a.parentNode,l.getNodeIndex(a))}function f(a){return new H(a.parentNode,l.getNodeIndex(a)+1)}function h(a,b,c){var d=11==a.nodeType?a.firstChild:a;l.isCharacterDataNode(b)?
c==b.length?l.insertAfter(a,b):b.parentNode.insertBefore(a,0==c?b:l.splitDataNode(b,c)):c>=b.childNodes.length?b.appendChild(a):b.insertBefore(a,b.childNodes[c]);return d}function i(b){for(var c,d,e=a(b.range).createDocumentFragment();d=b.next();){c=b.isPartiallySelectedSubtree();d=d.cloneNode(!c);c&&(c=b.getSubtreeIterator(),d.appendChild(i(c)),c.detach(!0));if(10==d.nodeType)throw new C("HIERARCHY_REQUEST_ERR");e.appendChild(d)}return e}function g(a,b,c){for(var d,e,c=c||{stop:!1};d=a.next();)if(a.isPartiallySelectedSubtree())if(!1===
b(d)){c.stop=!0;break}else{if(d=a.getSubtreeIterator(),g(d,b,c),d.detach(!0),c.stop)break}else for(d=l.createIterator(d);e=d.next();)if(!1===b(e)){c.stop=!0;return}}function j(a){for(var b;a.next();)a.isPartiallySelectedSubtree()?(b=a.getSubtreeIterator(),j(b),b.detach(!0)):a.remove()}function k(b){for(var c,d=a(b.range).createDocumentFragment(),e;c=b.next();){b.isPartiallySelectedSubtree()?(c=c.cloneNode(!1),e=b.getSubtreeIterator(),c.appendChild(k(e)),e.detach(!0)):b.remove();if(10==c.nodeType)throw new C("HIERARCHY_REQUEST_ERR");
d.appendChild(c)}return d}function m(a,b,c){var d=!(!b||!b.length),e,j=!!c;d&&(e=RegExp("^("+b.join("|")+")$"));var f=[];g(new v(a,!1),function(a){(!d||e.test(a.nodeType))&&(!j||c(a))&&f.push(a)});return f}function n(a){return"["+("undefined"==typeof a.getName?"Range":a.getName())+"("+l.inspectNode(a.startContainer)+":"+a.startOffset+", "+l.inspectNode(a.endContainer)+":"+a.endOffset+")]"}function v(a,b){this.range=a;this.clonePartiallySelectedTextNodes=b;if(!a.collapsed){this.sc=a.startContainer;
this.so=a.startOffset;this.ec=a.endContainer;this.eo=a.endOffset;var c=a.commonAncestorContainer;this.sc===this.ec&&l.isCharacterDataNode(this.sc)?(this.isSingleCharacterDataNode=!0,this._first=this._last=this._next=this.sc):(this._first=this._next=this.sc===c&&!l.isCharacterDataNode(this.sc)?this.sc.childNodes[this.so]:l.getClosestAncestorIn(this.sc,c,!0),this._last=this.ec===c&&!l.isCharacterDataNode(this.ec)?this.ec.childNodes[this.eo-1]:l.getClosestAncestorIn(this.ec,c,!0))}}function u(a){this.code=
this[a];this.codeName=a;this.message="RangeException: "+this.codeName}function p(a,b,c){this.nodes=m(a,b,c);this._next=this.nodes[0];this._position=0}function r(a){return function(b,c){for(var d,e=c?b:b.parentNode;e;){d=e.nodeType;if(l.arrayContains(a,d))return e;e=e.parentNode}return null}}function t(a,b){if(L(a,b))throw new u("INVALID_NODE_TYPE_ERR");}function q(a){if(!a.startContainer)throw new C("INVALID_STATE_ERR");}function y(a,b){if(!l.arrayContains(b,a.nodeType))throw new u("INVALID_NODE_TYPE_ERR");
}function A(a,b){if(0>b||b>(l.isCharacterDataNode(a)?a.length:a.childNodes.length))throw new C("INDEX_SIZE_ERR");}function B(a,b){if(I(a,!0)!==I(b,!0))throw new C("WRONG_DOCUMENT_ERR");}function D(a){if(T(a,!0))throw new C("NO_MODIFICATION_ALLOWED_ERR");}function z(a,b){if(!a)throw new C(b);}function x(a){q(a);if(!l.arrayContains(M,a.startContainer.nodeType)&&!I(a.startContainer,!0)||!l.arrayContains(M,a.endContainer.nodeType)&&!I(a.endContainer,!0)||!(a.startOffset<=(l.isCharacterDataNode(a.startContainer)?
a.startContainer.length:a.startContainer.childNodes.length))||!(a.endOffset<=(l.isCharacterDataNode(a.endContainer)?a.endContainer.length:a.endContainer.childNodes.length)))throw Error("Range error: Range is no longer valid after DOM mutation ("+a.inspect()+")");}function G(){}function Q(a){a.START_TO_START=U;a.START_TO_END=Y;a.END_TO_END=ca;a.END_TO_START=Z;a.NODE_BEFORE=$;a.NODE_AFTER=aa;a.NODE_BEFORE_AND_AFTER=ba;a.NODE_INSIDE=V}function s(a){Q(a);Q(a.prototype)}function J(a,b){return function(){x(this);
var c=this.startContainer,d=this.startOffset,e=this.commonAncestorContainer,j=new v(this,!0);c!==e&&(c=l.getClosestAncestorIn(c,e,!0),d=f(c),c=d.node,d=d.offset);g(j,D);j.reset();e=a(j);j.detach();b(this,c,d,c,d);return e}}function N(a,d,g){function h(a,b){return function(c){q(this);y(c,E);y(K(c),M);c=(a?e:f)(c);(b?S:i)(this,c.node,c.offset)}}function S(a,b,c){var e=a.endContainer,g=a.endOffset;if(b!==a.startContainer||c!==a.startOffset){if(K(b)!=K(e)||1==l.comparePoints(b,c,e,g))e=b,g=c;d(a,b,c,
e,g)}}function i(a,b,c){var e=a.startContainer,g=a.startOffset;if(b!==a.endContainer||c!==a.endOffset){if(K(b)!=K(e)||-1==l.comparePoints(b,c,e,g))e=b,g=c;d(a,e,g,b,c)}}a.prototype=new G;b.util.extend(a.prototype,{setStart:function(a,b){q(this);t(a,!0);A(a,b);S(this,a,b)},setEnd:function(a,b){q(this);t(a,!0);A(a,b);i(this,a,b)},setStartBefore:h(!0,!0),setStartAfter:h(!1,!0),setEndBefore:h(!0,!1),setEndAfter:h(!1,!1),collapse:function(a){x(this);a?d(this,this.startContainer,this.startOffset,this.startContainer,
this.startOffset):d(this,this.endContainer,this.endOffset,this.endContainer,this.endOffset)},selectNodeContents:function(a){q(this);t(a,!0);d(this,a,0,a,l.getNodeLength(a))},selectNode:function(a){q(this);t(a,!1);y(a,E);var b=e(a),a=f(a);d(this,b.node,b.offset,a.node,a.offset)},extractContents:J(k,d),deleteContents:J(j,d),canSurroundContents:function(){x(this);D(this.startContainer);D(this.endContainer);var a=new v(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);a.detach();return!b},
detach:function(){g(this)},splitBoundaries:function(){x(this);var a=this.startContainer,b=this.startOffset,c=this.endContainer,e=this.endOffset,g=a===c;l.isCharacterDataNode(c)&&(0<e&&e<c.length)&&l.splitDataNode(c,e);l.isCharacterDataNode(a)&&(0<b&&b<a.length)&&(a=l.splitDataNode(a,b),g?(e-=b,c=a):c==a.parentNode&&e>=l.getNodeIndex(a)&&e++,b=0);d(this,a,b,c,e)},normalizeBoundaries:function(){x(this);var a=this.startContainer,b=this.startOffset,c=this.endContainer,e=this.endOffset,g=function(a){var b=
a.nextSibling;b&&b.nodeType==a.nodeType&&(c=a,e=a.length,a.appendData(b.data),b.parentNode.removeChild(b))},j=function(d){var g=d.previousSibling;if(g&&g.nodeType==d.nodeType){a=d;var j=d.length;b=g.length;d.insertData(0,g.data);g.parentNode.removeChild(g);a==c?(e+=b,c=a):c==d.parentNode&&(g=l.getNodeIndex(d),e==g?(c=d,e=j):e>g&&e--)}},f=!0;l.isCharacterDataNode(c)?c.length==e&&g(c):(0<e&&(f=c.childNodes[e-1])&&l.isCharacterDataNode(f)&&g(f),f=!this.collapsed);f?l.isCharacterDataNode(a)?0==b&&j(a):
b<a.childNodes.length&&(g=a.childNodes[b])&&l.isCharacterDataNode(g)&&j(g):(a=c,b=e);d(this,a,b,c,e)},collapseToPoint:function(a,b){q(this);t(a,!0);A(a,b);(a!==this.startContainer||b!==this.startOffset||a!==this.endContainer||b!==this.endOffset)&&d(this,a,b,a,b)}});s(a)}function R(a){a.collapsed=a.startContainer===a.endContainer&&a.startOffset===a.endOffset;a.commonAncestorContainer=a.collapsed?a.startContainer:l.getCommonAncestor(a.startContainer,a.endContainer)}function O(a,b,c,e,g){var j=a.startContainer!==
b||a.startOffset!==c,f=a.endContainer!==e||a.endOffset!==g;a.startContainer=b;a.startOffset=c;a.endContainer=e;a.endOffset=g;R(a);d(a,"boundarychange",{startMoved:j,endMoved:f})}function w(a){this.startContainer=a;this.startOffset=0;this.endContainer=a;this.endOffset=0;this._listeners={boundarychange:[],detach:[]};R(this)}b.requireModules(["DomUtil"]);var l=b.dom,H=l.DomPosition,C=b.DOMException;v.prototype={_current:null,_next:null,_first:null,_last:null,isSingleCharacterDataNode:!1,reset:function(){this._current=
null;this._next=this._first},hasNext:function(){return!!this._next},next:function(){var a=this._current=this._next;a&&(this._next=a!==this._last?a.nextSibling:null,l.isCharacterDataNode(a)&&this.clonePartiallySelectedTextNodes&&(a===this.ec&&(a=a.cloneNode(!0)).deleteData(this.eo,a.length-this.eo),this._current===this.sc&&(a=a.cloneNode(!0)).deleteData(0,this.so)));return a},remove:function(){var a=this._current,b,c;l.isCharacterDataNode(a)&&(a===this.sc||a===this.ec)?(b=a===this.sc?this.so:0,c=a===
this.ec?this.eo:a.length,b!=c&&a.deleteData(b,c-b)):a.parentNode&&a.parentNode.removeChild(a)},isPartiallySelectedSubtree:function(){return c(this._current,this.range)},getSubtreeIterator:function(){var b;if(this.isSingleCharacterDataNode)b=this.range.cloneRange(),b.collapse();else{b=new w(a(this.range));var c=this._current,d=c,e=0,g=c,j=l.getNodeLength(c);l.isAncestorOf(c,this.sc,!0)&&(d=this.sc,e=this.so);l.isAncestorOf(c,this.ec,!0)&&(g=this.ec,j=this.eo);O(b,d,e,g,j)}return new v(b,this.clonePartiallySelectedTextNodes)},
detach:function(a){a&&this.range.detach();this.range=this._current=this._next=this._first=this._last=this.sc=this.so=this.ec=this.eo=null}};u.prototype={BAD_BOUNDARYPOINTS_ERR:1,INVALID_NODE_TYPE_ERR:2};u.prototype.toString=function(){return this.message};p.prototype={_current:null,hasNext:function(){return!!this._next},next:function(){this._current=this._next;this._next=this.nodes[++this._position];return this._current},detach:function(){this._current=this._next=this.nodes=null}};var E=[1,3,4,5,
7,8,10],M=[2,9,11],F=[1,3,4,5,7,8,10,11],P=[1,3,4,5,7,8],K=l.getRootContainer,I=r([9,11]),T=r([5,6,10,12]),L=r([6,10,12]),S=document.createElement("style"),W=!1;try{S.innerHTML="<b>x</b>",W=3==S.firstChild.nodeType}catch(da){}b.features.htmlParsingConforms=W;var X="startContainer startOffset endContainer endOffset collapsed commonAncestorContainer".split(" "),U=0,Y=1,ca=2,Z=3,$=0,aa=1,ba=2,V=3;G.prototype={attachListener:function(a,b){this._listeners[a].push(b)},compareBoundaryPoints:function(a,b){x(this);
B(this.startContainer,b.startContainer);var c=a==Z||a==U?"start":"end",d=a==Y||a==U?"start":"end";return l.comparePoints(this[c+"Container"],this[c+"Offset"],b[d+"Container"],b[d+"Offset"])},insertNode:function(a){x(this);y(a,F);D(this.startContainer);if(l.isAncestorOf(a,this.startContainer,!0))throw new C("HIERARCHY_REQUEST_ERR");a=h(a,this.startContainer,this.startOffset);this.setStartBefore(a)},cloneContents:function(){x(this);var b,c;if(this.collapsed)return a(this).createDocumentFragment();if(this.startContainer===
this.endContainer&&l.isCharacterDataNode(this.startContainer))return b=this.startContainer.cloneNode(!0),b.data=b.data.slice(this.startOffset,this.endOffset),c=a(this).createDocumentFragment(),c.appendChild(b),c;c=new v(this,!0);b=i(c);c.detach();return b},canSurroundContents:function(){x(this);D(this.startContainer);D(this.endContainer);var a=new v(this,!0),b=a._first&&c(a._first,this)||a._last&&c(a._last,this);a.detach();return!b},surroundContents:function(a){y(a,P);if(!this.canSurroundContents())throw new u("BAD_BOUNDARYPOINTS_ERR");
var b=this.extractContents();if(a.hasChildNodes())for(;a.lastChild;)a.removeChild(a.lastChild);h(a,this.startContainer,this.startOffset);a.appendChild(b);this.selectNode(a)},cloneRange:function(){x(this);for(var b=new w(a(this)),c=X.length,d;c--;)d=X[c],b[d]=this[d];return b},toString:function(){x(this);var a=this.startContainer;if(a===this.endContainer&&l.isCharacterDataNode(a))return 3==a.nodeType||4==a.nodeType?a.data.slice(this.startOffset,this.endOffset):"";var b=[],a=new v(this,!0);g(a,function(a){(3==
a.nodeType||4==a.nodeType)&&b.push(a.data)});a.detach();return b.join("")},compareNode:function(a){x(this);var b=a.parentNode,c=l.getNodeIndex(a);if(!b)throw new C("NOT_FOUND_ERR");a=this.comparePoint(b,c);b=this.comparePoint(b,c+1);return 0>a?0<b?ba:$:0<b?aa:V},comparePoint:function(a,b){x(this);z(a,"HIERARCHY_REQUEST_ERR");B(a,this.startContainer);return 0>l.comparePoints(a,b,this.startContainer,this.startOffset)?-1:0<l.comparePoints(a,b,this.endContainer,this.endOffset)?1:0},createContextualFragment:W?
function(a){var b=this.startContainer,c=l.getDocument(b);if(!b)throw new C("INVALID_STATE_ERR");var d=null;1==b.nodeType?d=b:l.isCharacterDataNode(b)&&(d=l.parentElement(b));d=null===d||"HTML"==d.nodeName&&l.isHtmlNamespace(l.getDocument(d).documentElement)&&l.isHtmlNamespace(d)?c.createElement("body"):d.cloneNode(!1);d.innerHTML=a;return l.fragmentFromNodeChildren(d)}:function(b){q(this);var c=a(this).createElement("body");c.innerHTML=b;return l.fragmentFromNodeChildren(c)},toHtml:function(){x(this);
var b=a(this).createElement("div");b.appendChild(this.cloneContents());return b.innerHTML},intersectsNode:function(b,c){x(this);z(b,"NOT_FOUND_ERR");if(l.getDocument(b)!==a(this))return!1;var d=b.parentNode,e=l.getNodeIndex(b);z(d,"NOT_FOUND_ERR");var g=l.comparePoints(d,e,this.endContainer,this.endOffset),d=l.comparePoints(d,e+1,this.startContainer,this.startOffset);return c?0>=g&&0<=d:0>g&&0<d},isPointInRange:function(a,b){x(this);z(a,"HIERARCHY_REQUEST_ERR");B(a,this.startContainer);return 0<=
l.comparePoints(a,b,this.startContainer,this.startOffset)&&0>=l.comparePoints(a,b,this.endContainer,this.endOffset)},intersectsRange:function(b,c){x(this);if(a(b)!=a(this))throw new C("WRONG_DOCUMENT_ERR");var d=l.comparePoints(this.startContainer,this.startOffset,b.endContainer,b.endOffset),e=l.comparePoints(this.endContainer,this.endOffset,b.startContainer,b.startOffset);return c?0>=d&&0<=e:0>d&&0<e},intersection:function(a){if(this.intersectsRange(a)){var b=l.comparePoints(this.startContainer,
this.startOffset,a.startContainer,a.startOffset),c=l.comparePoints(this.endContainer,this.endOffset,a.endContainer,a.endOffset),d=this.cloneRange();-1==b&&d.setStart(a.startContainer,a.startOffset);1==c&&d.setEnd(a.endContainer,a.endOffset);return d}return null},union:function(a){if(this.intersectsRange(a,!0)){var b=this.cloneRange();-1==l.comparePoints(a.startContainer,a.startOffset,this.startContainer,this.startOffset)&&b.setStart(a.startContainer,a.startOffset);1==l.comparePoints(a.endContainer,
a.endOffset,this.endContainer,this.endOffset)&&b.setEnd(a.endContainer,a.endOffset);return b}throw new u("Ranges do not intersect");},containsNode:function(a,b){return b?this.intersectsNode(a,!1):this.compareNode(a)==V},containsNodeContents:function(a){return 0<=this.comparePoint(a,0)&&0>=this.comparePoint(a,l.getNodeLength(a))},containsRange:function(a){return this.intersection(a).equals(a)},containsNodeText:function(a){var b=this.cloneRange();b.selectNode(a);var c=b.getNodes([3]);return 0<c.length?
(b.setStart(c[0],0),a=c.pop(),b.setEnd(a,a.length),a=this.containsRange(b),b.detach(),a):this.containsNodeContents(a)},createNodeIterator:function(a,b){x(this);return new p(this,a,b)},getNodes:function(a,b){x(this);return m(this,a,b)},getDocument:function(){return a(this)},collapseBefore:function(a){q(this);this.setEndBefore(a);this.collapse(!1)},collapseAfter:function(a){q(this);this.setStartAfter(a);this.collapse(!0)},getName:function(){return"DomRange"},equals:function(a){return w.rangesEqual(this,
a)},inspect:function(){return n(this)}};N(w,O,function(a){q(a);a.startContainer=a.startOffset=a.endContainer=a.endOffset=null;a.collapsed=a.commonAncestorContainer=null;d(a,"detach",null);a._listeners=null});b.rangePrototype=G.prototype;w.rangeProperties=X;w.RangeIterator=v;w.copyComparisonConstants=s;w.createPrototypeRange=N;w.inspect=n;w.getRangeDocument=a;w.rangesEqual=function(a,b){return a.startContainer===b.startContainer&&a.startOffset===b.startOffset&&a.endContainer===b.endContainer&&a.endOffset===
b.endOffset};b.DomRange=w;b.RangeException=u});
rangy.createModule("WrappedRange",function(b){function c(a,b,c,d){var g=a.duplicate();g.collapse(c);var j=g.parentElement();e.isAncestorOf(b,j,!0)||(j=b);if(!j.canHaveHTML)return new f(j.parentNode,e.getNodeIndex(j));var b=e.getDocument(j).createElement("span"),h,k=c?"StartToStart":"StartToEnd";do j.insertBefore(b,b.previousSibling),g.moveToElementText(b);while(0<(h=g.compareEndPoints(k,a))&&b.previousSibling);k=b.nextSibling;if(-1==h&&k&&e.isCharacterDataNode(k)){g.setEndPoint(c?"EndToStart":"EndToEnd",
a);if(/[\r\n]/.test(k.data)){j=g.duplicate();c=j.text.replace(/\r\n/g,"\r").length;for(c=j.moveStart("character",c);-1==j.compareEndPoints("StartToEnd",j);)c++,j.moveStart("character",1)}else c=g.text.length;j=new f(k,c)}else k=(d||!c)&&b.previousSibling,j=(c=(d||c)&&b.nextSibling)&&e.isCharacterDataNode(c)?new f(c,0):k&&e.isCharacterDataNode(k)?new f(k,k.length):new f(j,e.getNodeIndex(b));b.parentNode.removeChild(b);return j}function a(a,b){var c,d,g=a.offset,j=e.getDocument(a.node),f=j.body.createTextRange(),
h=e.isCharacterDataNode(a.node);h?(c=a.node,d=c.parentNode):(c=a.node.childNodes,c=g<c.length?c[g]:null,d=a.node);j=j.createElement("span");j.innerHTML="&#feff;";c?d.insertBefore(j,c):d.appendChild(j);f.moveToElementText(j);f.collapse(!b);d.removeChild(j);if(h)f[b?"moveStart":"moveEnd"]("character",g);return f}b.requireModules(["DomUtil","DomRange"]);var d,e=b.dom,f=e.DomPosition,h=b.DomRange;if(b.features.implementsDomRange&&(!b.features.implementsTextRange||!b.config.preferTextRange)){var i=function(a){for(var b=
j.length,c;b--;)c=j[b],a[c]=a.nativeRange[c]},g,j=h.rangeProperties,k;d=function(a){if(!a)throw Error("Range must be specified");this.nativeRange=a;i(this)};h.createPrototypeRange(d,function(a,b,c,d,e){var g=a.endContainer!==d||a.endOffset!=e;if(a.startContainer!==b||a.startOffset!=c||g)a.setEnd(d,e),a.setStart(b,c)},function(a){a.nativeRange.detach();a.detached=!0;for(var b=j.length,c;b--;)c=j[b],a[c]=null});g=d.prototype;g.selectNode=function(a){this.nativeRange.selectNode(a);i(this)};g.deleteContents=
function(){this.nativeRange.deleteContents();i(this)};g.extractContents=function(){var a=this.nativeRange.extractContents();i(this);return a};g.cloneContents=function(){return this.nativeRange.cloneContents()};g.surroundContents=function(a){this.nativeRange.surroundContents(a);i(this)};g.collapse=function(a){this.nativeRange.collapse(a);i(this)};g.cloneRange=function(){return new d(this.nativeRange.cloneRange())};g.refresh=function(){i(this)};g.toString=function(){return this.nativeRange.toString()};
var m=document.createTextNode("test");e.getBody(document).appendChild(m);var n=document.createRange();n.setStart(m,0);n.setEnd(m,0);try{n.setStart(m,1),g.setStart=function(a,b){this.nativeRange.setStart(a,b);i(this)},g.setEnd=function(a,b){this.nativeRange.setEnd(a,b);i(this)},k=function(a){return function(b){this.nativeRange[a](b);i(this)}}}catch(v){g.setStart=function(a,b){try{this.nativeRange.setStart(a,b)}catch(c){this.nativeRange.setEnd(a,b),this.nativeRange.setStart(a,b)}i(this)},g.setEnd=function(a,
b){try{this.nativeRange.setEnd(a,b)}catch(c){this.nativeRange.setStart(a,b),this.nativeRange.setEnd(a,b)}i(this)},k=function(a,b){return function(c){try{this.nativeRange[a](c)}catch(d){this.nativeRange[b](c),this.nativeRange[a](c)}i(this)}}}g.setStartBefore=k("setStartBefore","setEndBefore");g.setStartAfter=k("setStartAfter","setEndAfter");g.setEndBefore=k("setEndBefore","setStartBefore");g.setEndAfter=k("setEndAfter","setStartAfter");n.selectNodeContents(m);g.selectNodeContents=n.startContainer==
m&&n.endContainer==m&&0==n.startOffset&&n.endOffset==m.length?function(a){this.nativeRange.selectNodeContents(a);i(this)}:function(a){this.setStart(a,0);this.setEnd(a,h.getEndOffset(a))};n.selectNodeContents(m);n.setEnd(m,3);k=document.createRange();k.selectNodeContents(m);k.setEnd(m,4);k.setStart(m,2);g.compareBoundaryPoints=-1==n.compareBoundaryPoints(n.START_TO_END,k)&1==n.compareBoundaryPoints(n.END_TO_START,k)?function(a,b){b=b.nativeRange||b;a==b.START_TO_END?a=b.END_TO_START:a==b.END_TO_START&&
(a=b.START_TO_END);return this.nativeRange.compareBoundaryPoints(a,b)}:function(a,b){return this.nativeRange.compareBoundaryPoints(a,b.nativeRange||b)};b.util.isHostMethod(n,"createContextualFragment")&&(g.createContextualFragment=function(a){return this.nativeRange.createContextualFragment(a)});e.getBody(document).removeChild(m);n.detach();k.detach();b.createNativeRange=function(a){a=a||document;return a.createRange()}}else b.features.implementsTextRange&&(d=function(a){this.textRange=a;this.refresh()},
d.prototype=new h(document),d.prototype.refresh=function(){var a,b,d=this.textRange;a=d.parentElement();var g=d.duplicate();g.collapse(!0);b=g.parentElement();g=d.duplicate();g.collapse(!1);d=g.parentElement();b=b==d?b:e.getCommonAncestor(b,d);b=b==a?b:e.getCommonAncestor(a,b);0==this.textRange.compareEndPoints("StartToEnd",this.textRange)?b=a=c(this.textRange,b,!0,!0):(a=c(this.textRange,b,!0,!1),b=c(this.textRange,b,!1,!1));this.setStart(a.node,a.offset);this.setEnd(b.node,b.offset)},h.copyComparisonConstants(d),
g=function(){return this}(),"undefined"==typeof g.Range&&(g.Range=d),b.createNativeRange=function(a){a=a||document;return a.body.createTextRange()});b.features.implementsTextRange&&(d.rangeToTextRange=function(b){if(b.collapsed)return a(new f(b.startContainer,b.startOffset),!0);var c=a(new f(b.startContainer,b.startOffset),!0),d=a(new f(b.endContainer,b.endOffset),!1),b=e.getDocument(b.startContainer).body.createTextRange();b.setEndPoint("StartToStart",c);b.setEndPoint("EndToEnd",d);return b});d.prototype.getName=
function(){return"WrappedRange"};b.WrappedRange=d;b.createRange=function(a){a=a||document;return new d(b.createNativeRange(a))};b.createRangyRange=function(a){a=a||document;return new h(a)};b.createIframeRange=function(a){return b.createRange(e.getIframeDocument(a))};b.createIframeRangyRange=function(a){return b.createRangyRange(e.getIframeDocument(a))};b.addCreateMissingNativeApiListener(function(a){a=a.document;"undefined"==typeof a.createRange&&(a.createRange=function(){return b.createRange(this)});
a=a=null})});
rangy.createModule("WrappedSelection",function(b,c){function a(a){return(a||window).getSelection()}function d(a){return(a||window).document.selection}function e(a,b,c){var d=c?"end":"start",c=c?"start":"end";a.anchorNode=b[d+"Container"];a.anchorOffset=b[d+"Offset"];a.focusNode=b[c+"Container"];a.focusOffset=b[c+"Offset"]}function f(a){a.anchorNode=a.focusNode=null;a.anchorOffset=a.focusOffset=0;a.rangeCount=0;a.isCollapsed=!0;a._ranges.length=0}function h(a){var c;a instanceof t?(c=a._selectionNativeRange,
c||(c=b.createNativeRange(p.getDocument(a.startContainer)),c.setEnd(a.endContainer,a.endOffset),c.setStart(a.startContainer,a.startOffset),a._selectionNativeRange=c,a.attachListener("detach",function(){this._selectionNativeRange=null}))):a instanceof q?c=a.nativeRange:b.features.implementsDomRange&&a instanceof p.getWindow(a.startContainer).Range&&(c=a);return c}function i(a){var b=a.getNodes(),c;a:if(!b.length||1!=b[0].nodeType)c=!1;else{c=1;for(var d=b.length;c<d;++c)if(!p.isAncestorOf(b[0],b[c])){c=
!1;break a}c=!0}if(!c)throw Error("getSingleElementFromRange: range "+a.inspect()+" did not consist of a single element");return b[0]}function g(a,b){var c=new q(b);a._ranges=[c];e(a,c,!1);a.rangeCount=1;a.isCollapsed=c.collapsed}function j(a){a._ranges.length=0;if("None"==a.docSelection.type)f(a);else{var c=a.docSelection.createRange();if(c&&"undefined"!=typeof c.text)g(a,c);else{a.rangeCount=c.length;for(var d,j=p.getDocument(c.item(0)),h=0;h<a.rangeCount;++h)d=b.createRange(j),d.selectNode(c.item(h)),
a._ranges.push(d);a.isCollapsed=1==a.rangeCount&&a._ranges[0].collapsed;e(a,a._ranges[a.rangeCount-1],!1)}}}function k(a,b){for(var c=a.docSelection.createRange(),d=i(b),e=p.getDocument(c.item(0)),e=p.getBody(e).createControlRange(),g=0,f=c.length;g<f;++g)e.add(c.item(g));try{e.add(d)}catch(h){throw Error("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");}e.select();j(a)}function m(a,b,c){this.nativeSelection=a;this.docSelection=b;this._ranges=
[];this.win=c;this.refresh()}function n(a,b){for(var c=p.getDocument(b[0].startContainer),c=p.getBody(c).createControlRange(),d=0,e;d<rangeCount;++d){e=i(b[d]);try{c.add(e)}catch(g){throw Error("setRanges(): Element within the one of the specified Ranges could not be added to control selection (does it have layout?)");}}c.select();j(a)}function v(a,b){if(a.anchorNode&&p.getDocument(a.anchorNode)!==p.getDocument(b))throw new y("WRONG_DOCUMENT_ERR");}function u(a){var b=[],c=new A(a.anchorNode,a.anchorOffset),
d=new A(a.focusNode,a.focusOffset),e="function"==typeof a.getName?a.getName():"Selection";if("undefined"!=typeof a.rangeCount)for(var g=0,j=a.rangeCount;g<j;++g)b[g]=t.inspect(a.getRangeAt(g));return"["+e+"(Ranges: "+b.join(", ")+")(anchor: "+c.inspect()+", focus: "+d.inspect()+"]"}b.requireModules(["DomUtil","DomRange","WrappedRange"]);b.config.checkSelectionRanges=!0;var p=b.dom,r=b.util,t=b.DomRange,q=b.WrappedRange,y=b.DOMException,A=p.DomPosition,B,D,z=b.util.isHostMethod(window,"getSelection"),
x=b.util.isHostObject(document,"selection"),G=x&&(!z||b.config.preferTextRange);G?(B=d,b.isSelectionValid=function(a){var a=(a||window).document,b=a.selection;return"None"!=b.type||p.getDocument(b.createRange().parentElement())==a}):z?(B=a,b.isSelectionValid=function(){return!0}):c.fail("Neither document.selection or window.getSelection() detected.");b.getNativeSelection=B;var z=B(),Q=b.createNativeRange(document),s=p.getBody(document),J=r.areHostObjects(z,r.areHostProperties(z,["anchorOffset","focusOffset"]));
b.features.selectionHasAnchorAndFocus=J;var N=r.isHostMethod(z,"extend");b.features.selectionHasExtend=N;var R="number"==typeof z.rangeCount;b.features.selectionHasRangeCount=R;var O=!1,w=!0;if(r.areHostMethods(z,["addRange","getRangeAt","removeAllRanges"])&&"number"==typeof z.rangeCount&&b.features.implementsDomRange){var l=document.createElement("iframe");s.appendChild(l);w=p.getIframeDocument(l);w.open();w.write("<html><head></head><body>12</body></html>");w.close();var H=p.getIframeWindow(l).getSelection(),
C=w.documentElement.lastChild.firstChild,E=w.createRange();E.setStart(C,1);E.collapse(!0);H.addRange(E);w=1==H.rangeCount;H.removeAllRanges();var M=E.cloneRange();E.setStart(C,0);M.setEnd(C,2);H.addRange(E);H.addRange(M);O=2==H.rangeCount;E.detach();M.detach();s.removeChild(l)}b.features.selectionSupportsMultipleRanges=O;b.features.collapsedNonEditableSelectionsSupported=w;var F=!1;s&&r.isHostMethod(s,"createControlRange")&&(s=s.createControlRange(),r.areHostProperties(s,["item","add"])&&(F=!0));
b.features.implementsControlRange=F;D=J?function(a){return a.anchorNode===a.focusNode&&a.anchorOffset===a.focusOffset}:function(a){return a.rangeCount?a.getRangeAt(a.rangeCount-1).collapsed:!1};var P;r.isHostMethod(z,"getRangeAt")?P=function(a,b){try{return a.getRangeAt(b)}catch(c){return null}}:J&&(P=function(a){var c=p.getDocument(a.anchorNode),c=b.createRange(c);c.setStart(a.anchorNode,a.anchorOffset);c.setEnd(a.focusNode,a.focusOffset);c.collapsed!==this.isCollapsed&&(c.setStart(a.focusNode,a.focusOffset),
c.setEnd(a.anchorNode,a.anchorOffset));return c});b.getSelection=function(a){var a=a||window,b=a._rangySelection,c=B(a),e=x?d(a):null;b?(b.nativeSelection=c,b.docSelection=e,b.refresh(a)):(b=new m(c,e,a),a._rangySelection=b);return b};b.getIframeSelection=function(a){return b.getSelection(p.getIframeWindow(a))};s=m.prototype;if(!G&&J&&r.areHostMethods(z,["removeAllRanges","addRange"])){s.removeAllRanges=function(){this.nativeSelection.removeAllRanges();f(this)};var K=function(a,c){var d=t.getRangeDocument(c),
d=b.createRange(d);d.collapseToPoint(c.endContainer,c.endOffset);a.nativeSelection.addRange(h(d));a.nativeSelection.extend(c.startContainer,c.startOffset);a.refresh()};s.addRange=R?function(a,c){if(F&&x&&"Control"==this.docSelection.type)k(this,a);else if(c&&N)K(this,a);else{var d;O?d=this.rangeCount:(this.removeAllRanges(),d=0);this.nativeSelection.addRange(h(a));this.rangeCount=this.nativeSelection.rangeCount;this.rangeCount==d+1?(b.config.checkSelectionRanges&&(d=P(this.nativeSelection,this.rangeCount-
1))&&!t.rangesEqual(d,a)&&(a=new q(d)),this._ranges[this.rangeCount-1]=a,e(this,a,L(this.nativeSelection)),this.isCollapsed=D(this)):this.refresh()}}:function(a,b){b&&N?K(this,a):(this.nativeSelection.addRange(h(a)),this.refresh())};s.setRanges=function(a){if(F&&1<a.length)n(this,a);else{this.removeAllRanges();for(var b=0,c=a.length;b<c;++b)this.addRange(a[b])}}}else if(r.isHostMethod(z,"empty")&&r.isHostMethod(Q,"select")&&F&&G)s.removeAllRanges=function(){try{if(this.docSelection.empty(),"None"!=
this.docSelection.type){var a;if(this.anchorNode)a=p.getDocument(this.anchorNode);else if("Control"==this.docSelection.type){var b=this.docSelection.createRange();b.length&&(a=p.getDocument(b.item(0)).body.createTextRange())}a&&(a.body.createTextRange().select(),this.docSelection.empty())}}catch(c){}f(this)},s.addRange=function(a){"Control"==this.docSelection.type?k(this,a):(q.rangeToTextRange(a).select(),this._ranges[0]=a,this.rangeCount=1,this.isCollapsed=this._ranges[0].collapsed,e(this,a,!1))},
s.setRanges=function(a){this.removeAllRanges();var b=a.length;1<b?n(this,a):b&&this.addRange(a[0])};else return c.fail("No means of selecting a Range or TextRange was found"),!1;s.getRangeAt=function(a){if(0>a||a>=this.rangeCount)throw new y("INDEX_SIZE_ERR");return this._ranges[a]};var I;if(G)I=function(a){var c;b.isSelectionValid(a.win)?c=a.docSelection.createRange():(c=p.getBody(a.win.document).createTextRange(),c.collapse(!0));"Control"==a.docSelection.type?j(a):c&&"undefined"!=typeof c.text?
g(a,c):f(a)};else if(r.isHostMethod(z,"getRangeAt")&&"number"==typeof z.rangeCount)I=function(a){if(F&&x&&"Control"==a.docSelection.type)j(a);else if(a._ranges.length=a.rangeCount=a.nativeSelection.rangeCount,a.rangeCount){for(var c=0,d=a.rangeCount;c<d;++c)a._ranges[c]=new b.WrappedRange(a.nativeSelection.getRangeAt(c));e(a,a._ranges[a.rangeCount-1],L(a.nativeSelection));a.isCollapsed=D(a)}else f(a)};else if(J&&"boolean"==typeof z.isCollapsed&&"boolean"==typeof Q.collapsed&&b.features.implementsDomRange)I=
function(a){var b;b=a.nativeSelection;b.anchorNode?(b=P(b,0),a._ranges=[b],a.rangeCount=1,b=a.nativeSelection,a.anchorNode=b.anchorNode,a.anchorOffset=b.anchorOffset,a.focusNode=b.focusNode,a.focusOffset=b.focusOffset,a.isCollapsed=D(a)):f(a)};else return c.fail("No means of obtaining a Range or TextRange from the user's selection was found"),!1;s.refresh=function(a){var b=a?this._ranges.slice(0):null;I(this);if(a){a=b.length;if(a!=this._ranges.length)return!1;for(;a--;)if(!t.rangesEqual(b[a],this._ranges[a]))return!1;
return!0}};var T=function(a,b){var c=a.getAllRanges(),d=!1;a.removeAllRanges();for(var e=0,g=c.length;e<g;++e)d||b!==c[e]?a.addRange(c[e]):d=!0;a.rangeCount||f(a)};s.removeRange=F?function(a){if("Control"==this.docSelection.type){for(var b=this.docSelection.createRange(),a=i(a),c=p.getDocument(b.item(0)),c=p.getBody(c).createControlRange(),d,e=!1,g=0,f=b.length;g<f;++g)d=b.item(g),d!==a||e?c.add(b.item(g)):e=!0;c.select();j(this)}else T(this,a)}:function(a){T(this,a)};var L;!G&&J&&b.features.implementsDomRange?
(L=function(a){var b=!1;a.anchorNode&&(b=1==p.comparePoints(a.anchorNode,a.anchorOffset,a.focusNode,a.focusOffset));return b},s.isBackwards=function(){return L(this)}):L=s.isBackwards=function(){return!1};s.toString=function(){for(var a=[],b=0,c=this.rangeCount;b<c;++b)a[b]=""+this._ranges[b];return a.join("")};s.collapse=function(a,c){v(this,a);var d=b.createRange(p.getDocument(a));d.collapseToPoint(a,c);this.removeAllRanges();this.addRange(d);this.isCollapsed=!0};s.collapseToStart=function(){if(this.rangeCount){var a=
this._ranges[0];this.collapse(a.startContainer,a.startOffset)}else throw new y("INVALID_STATE_ERR");};s.collapseToEnd=function(){if(this.rangeCount){var a=this._ranges[this.rangeCount-1];this.collapse(a.endContainer,a.endOffset)}else throw new y("INVALID_STATE_ERR");};s.selectAllChildren=function(a){v(this,a);var c=b.createRange(p.getDocument(a));c.selectNodeContents(a);this.removeAllRanges();this.addRange(c)};s.deleteFromDocument=function(){if(F&&x&&"Control"==this.docSelection.type){for(var a=this.docSelection.createRange(),
b;a.length;)b=a.item(0),a.remove(b),b.parentNode.removeChild(b);this.refresh()}else if(this.rangeCount){a=this.getAllRanges();this.removeAllRanges();b=0;for(var c=a.length;b<c;++b)a[b].deleteContents();this.addRange(a[c-1])}};s.getAllRanges=function(){return this._ranges.slice(0)};s.setSingleRange=function(a){this.setRanges([a])};s.containsNode=function(a,b){for(var c=0,d=this._ranges.length;c<d;++c)if(this._ranges[c].containsNode(a,b))return!0;return!1};s.toHtml=function(){var a="";if(this.rangeCount){for(var a=
t.getRangeDocument(this._ranges[0]).createElement("div"),b=0,c=this._ranges.length;b<c;++b)a.appendChild(this._ranges[b].cloneContents());a=a.innerHTML}return a};s.getName=function(){return"WrappedSelection"};s.inspect=function(){return u(this)};s.detach=function(){this.win=this.anchorNode=this.focusNode=this.win._rangySelection=null};m.inspect=u;b.Selection=m;b.selectionPrototype=s;b.addCreateMissingNativeApiListener(function(a){"undefined"==typeof a.getSelection&&(a.getSelection=function(){return b.getSelection(this)});
a=null})});var Base=function(){};
Base.extend=function(b,c){var a=Base.prototype.extend;Base._prototyping=!0;var d=new this;a.call(d,b);d.base=function(){};delete Base._prototyping;var e=d.constructor,f=d.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==f)this._constructing=!0,e.apply(this,arguments),delete this._constructing;else if(null!=arguments[0])return(arguments[0].extend||a).call(arguments[0],d)};f.ancestor=this;f.extend=this.extend;f.forEach=this.forEach;f.implement=this.implement;f.prototype=
d;f.toString=this.toString;f.valueOf=function(a){return"object"==a?f:e.valueOf()};a.call(f,c);"function"==typeof f.init&&f.init();return f};
Base.prototype={extend:function(b,c){if(1<arguments.length){var a=this[b];if(a&&"function"==typeof c&&(!a.valueOf||a.valueOf()!=c.valueOf())&&/\bbase\b/.test(c)){var d=c.valueOf(),c=function(){var b=this.base||Base.prototype.base;this.base=a;var c=d.apply(this,arguments);this.base=b;return c};c.valueOf=function(a){return"object"==a?c:d};c.toString=Base.toString}this[b]=c}else if(b){var e=Base.prototype.extend;!Base._prototyping&&"function"!=typeof this&&(e=this.extend||e);for(var f={toSource:null},
h=["constructor","toString","valueOf"],i=Base._prototyping?0:1;g=h[i++];)b[g]!=f[g]&&e.call(this,g,b[g]);for(var g in b)f[g]||e.call(this,g,b[g])}return this}};
Base=Base.extend({constructor:function(b){this.extend(b)}},{ancestor:Object,version:"1.1",forEach:function(b,c,a){for(var d in b)void 0===this.prototype[d]&&c.call(a,b[d],d,b)},implement:function(){for(var b=0;b<arguments.length;b++)if("function"==typeof arguments[b])arguments[b](this.prototype);else this.prototype.extend(arguments[b]);return this},toString:function(){return String(this.valueOf())}});
wysihtml5.browser=function(){var b=navigator.userAgent,c=document.createElement("div"),a=-1!==b.indexOf("MSIE")&&-1===b.indexOf("Opera"),d=-1!==b.indexOf("Gecko")&&-1===b.indexOf("KHTML"),e=-1!==b.indexOf("AppleWebKit/"),f=-1!==b.indexOf("Chrome/"),h=-1!==b.indexOf("Opera/"),i={formatBlock:a,insertUnorderedList:a||e,insertOrderedList:a||e},g={insertHTML:d};return{USER_AGENT:b,supported:function(){var a=this.USER_AGENT.toLowerCase(),b="contentEditable"in c,d=document.execCommand&&document.queryCommandSupported&&
document.queryCommandState,e=document.querySelector&&document.querySelectorAll,a=this.isIos()&&5>+(/ipad|iphone|ipod/.test(a)&&a.match(/ os (\d+).+? like mac os x/)||[,0])[1]||this.isAndroid()&&4>+(a.match(/android (\d+)/)||[,0])[1]||-1!==a.indexOf("opera mobi")||-1!==a.indexOf("hpwos/");return b&&d&&e&&!a},isTouchDevice:function(){return this.supportsEvent("touchmove")},isIos:function(){return/ipad|iphone|ipod/i.test(this.USER_AGENT)},isAndroid:function(){return-1!==this.USER_AGENT.indexOf("Android")},
supportsSandboxedIframes:function(){return a},throwsMixedContentWarningWhenIframeSrcIsEmpty:function(){return!("querySelector"in document)},displaysCaretInEmptyContentEditableCorrectly:function(){return a},hasCurrentStyleProperty:function(){return"currentStyle"in c},hasHistoryIssue:function(){return d},insertsLineBreaksOnReturn:function(){return d},supportsPlaceholderAttributeOn:function(a){return"placeholder"in a},supportsEvent:function(a){var b;if(!(b="on"+a in c))c.setAttribute("on"+a,"return;"),
b="function"===typeof c["on"+a];return b},supportsEventsInIframeCorrectly:function(){return!h},supportsHTML5Tags:function(a){a=a.createElement("div");a.innerHTML="<article>foo</article>";return"<article>foo</article>"===a.innerHTML.toLowerCase()},supportsCommand:function(a,b){if(!i[b]){try{return a.queryCommandSupported(b)}catch(c){}try{return a.queryCommandEnabled(b)}catch(d){return!!g[b]}}return!1},doesAutoLinkingInContentEditable:function(){return a},canDisableAutoLinking:function(){return this.supportsCommand(document,
"AutoUrlDetect")},clearsContentEditableCorrectly:function(){return d||h||e},supportsGetAttributeCorrectly:function(){return"1"!=document.createElement("td").getAttribute("rowspan")},canSelectImagesInContentEditable:function(){return d||a||h},autoScrollsToCaret:function(){return!e},autoClosesUnclosedTags:function(){var a=c.cloneNode(!1),b;a.innerHTML="<p><div></div>";a=a.innerHTML.toLowerCase();b="<p></p><div></div>"===a||"<p><div></div></p>"===a;this.autoClosesUnclosedTags=function(){return b};return b},
supportsNativeGetElementsByClassName:function(){return-1!==String(document.getElementsByClassName).indexOf("[native code]")},supportsSelectionModify:function(){return"getSelection"in window&&"modify"in window.getSelection()},needsSpaceAfterLineBreak:function(){return h},supportsSpeechApiOn:function(a){return 11<=(b.match(/Chrome\/(\d+)/)||[,0])[1]&&("onwebkitspeechchange"in a||"speech"in a)},crashesWhenDefineProperty:function(b){return a&&("XMLHttpRequest"===b||"XDomainRequest"===b)},doesAsyncFocus:function(){return a},
hasProblemsSettingCaretAfterImg:function(){return a},hasUndoInContextMenu:function(){return d||f||h},hasInsertNodeIssue:function(){return h},hasIframeFocusIssue:function(){return a}}}();
wysihtml5.lang.array=function(b){return{contains:function(c){if(b.indexOf)return-1!==b.indexOf(c);for(var a=0,d=b.length;a<d;a++)if(b[a]===c)return!0;return!1},without:function(c){for(var c=wysihtml5.lang.array(c),a=[],d=0,e=b.length;d<e;d++)c.contains(b[d])||a.push(b[d]);return a},get:function(){for(var c=0,a=b.length,d=[];c<a;c++)d.push(b[c]);return d}}};
wysihtml5.lang.Dispatcher=Base.extend({on:function(b,c){this.events=this.events||{};this.events[b]=this.events[b]||[];this.events[b].push(c);return this},off:function(b,c){this.events=this.events||{};var a=0,d,e;if(b){d=this.events[b]||[];for(e=[];a<d.length;a++)d[a]!==c&&c&&e.push(d[a]);this.events[b]=e}else this.events={};return this},fire:function(b,c){this.events=this.events||{};for(var a=this.events[b]||[],d=0;d<a.length;d++)a[d].call(this,c);return this},observe:function(){return this.on.apply(this,
arguments)},stopObserving:function(){return this.off.apply(this,arguments)}});wysihtml5.lang.object=function(b){return{merge:function(c){for(var a in c)b[a]=c[a];return this},get:function(){return b},clone:function(){var c={},a;for(a in b)c[a]=b[a];return c},isArray:function(){return"[object Array]"===Object.prototype.toString.call(b)}}};
(function(){var b=/^\s+/,c=/\s+$/;wysihtml5.lang.string=function(a){a=String(a);return{trim:function(){return a.replace(b,"").replace(c,"")},interpolate:function(b){for(var c in b)a=this.replace("#{"+c+"}").by(b[c]);return a},replace:function(b){return{by:function(c){return a.split(b).join(c)}}}}}})();
(function(b){function c(i){if(!a.contains(i.nodeName))if(i.nodeType===b.TEXT_NODE&&i.data.match(d)){var g=i.parentNode,j;j=g.ownerDocument;var k=j._wysihtml5_tempElement;k||(k=j._wysihtml5_tempElement=j.createElement("div"));j=k;j.innerHTML="<span></span>"+i.data.replace(d,function(a,b){var c=(b.match(e)||[])[1]||"",d=h[c],b=b.replace(e,"");b.split(d).length>b.split(c).length&&(b+=c,c="");var g=d=b;b.length>f&&(g=g.substr(0,f)+"...");"www."===d.substr(0,4)&&(d="http://"+d);return'<a href="'+d+'">'+
g+"</a>"+c});for(j.removeChild(j.firstChild);j.firstChild;)g.insertBefore(j.firstChild,i);g.removeChild(i)}else{g=b.lang.array(i.childNodes).get();j=g.length;for(k=0;k<j;k++)c(g[k]);return i}}var a=b.lang.array("CODE PRE A SCRIPT HEAD TITLE STYLE".split(" ")),d=/((https?:\/\/|www\.)[^\s<]{3,})/gi,e=/([^\w\/\-](,?))$/i,f=100,h={")":"(","]":"[","}":"{"};b.dom.autoLink=function(b){var d;a:{d=b;for(var e;d.parentNode;){d=d.parentNode;e=d.nodeName;if(a.contains(e)){d=!0;break a}if("body"===e)break}d=!1}if(d)return b;
b===b.ownerDocument.documentElement&&(b=b.ownerDocument.body);return c(b)};b.dom.autoLink.URL_REG_EXP=d})(wysihtml5);
(function(b){var c=b.dom;c.addClass=function(a,b){var e=a.classList;if(e)return e.add(b);c.hasClass(a,b)||(a.className+=" "+b)};c.removeClass=function(a,b){var c=a.classList;if(c)return c.remove(b);a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)")," ")};c.hasClass=function(a,b){var c=a.classList;if(c)return c.contains(b);c=a.className;return 0<c.length&&(c==b||RegExp("(^|\\s)"+b+"(\\s|$)").test(c))}})(wysihtml5);
wysihtml5.dom.contains=function(){var b=document.documentElement;if(b.contains)return function(b,a){a.nodeType!==wysihtml5.ELEMENT_NODE&&(a=a.parentNode);return b!==a&&b.contains(a)};if(b.compareDocumentPosition)return function(b,a){return!!(b.compareDocumentPosition(a)&16)}}();
wysihtml5.dom.convertToList=function(){function b(b,a){var d=b.createElement("li");a.appendChild(d);return d}return function(c,a){if("UL"===c.nodeName||"OL"===c.nodeName||"MENU"===c.nodeName)return c;var d=c.ownerDocument,e=d.createElement(a),f=c.querySelectorAll("br"),h=f.length,i,g,j,k,m;for(m=0;m<h;m++)for(i=f[m];(g=i.parentNode)&&g!==c&&g.lastChild===i;){if("block"===wysihtml5.dom.getStyle("display").from(g)){g.removeChild(i);break}wysihtml5.dom.insert(i).after(i.parentNode)}f=wysihtml5.lang.array(c.childNodes).get();
h=f.length;for(m=0;m<h;m++)k=k||b(d,e),i=f[m],g="block"===wysihtml5.dom.getStyle("display").from(i),j="BR"===i.nodeName,g?(k=k.firstChild?b(d,e):k,k.appendChild(i),k=null):j?k=k.firstChild?null:k:k.appendChild(i);0===f.length&&b(d,e);c.parentNode.replaceChild(e,c);return e}}();wysihtml5.dom.copyAttributes=function(b){return{from:function(c){return{to:function(a){for(var d,e=0,f=b.length;e<f;e++)d=b[e],"undefined"!==typeof c[d]&&""!==c[d]&&(a[d]=c[d]);return{andTo:arguments.callee}}}}}};
(function(b){var c=["-webkit-box-sizing","-moz-box-sizing","-ms-box-sizing","box-sizing"];b.copyStyles=function(a){return{from:function(d){var e;b:{e=0;for(var f=c.length;e<f;e++)if("border-box"===b.getStyle(c[e]).from(d)){e=c[e];break b}e=void 0}e=e?parseInt(b.getStyle("width").from(d),10)<d.offsetWidth:!1;e&&(a=wysihtml5.lang.array(a).without(c));var h="";e=a.length;for(var f=0,i;f<e;f++)i=a[f],h+=i+":"+b.getStyle(i).from(d)+";";return{to:function(a){b.setStyles(h).on(a);return{andTo:arguments.callee}}}}}}})(wysihtml5.dom);
(function(b){b.dom.delegate=function(c,a,d,e){return b.dom.observe(c,d,function(d){for(var h=d.target,i=b.lang.array(c.querySelectorAll(a));h&&h!==c;){if(i.contains(h)){e.call(h,d);break}h=h.parentNode}})}})(wysihtml5);
wysihtml5.dom.getAsDom=function(){var b="abbr article aside audio bdi canvas command datalist details figcaption figure footer header hgroup keygen mark meter nav output progress rp rt ruby svg section source summary time track video wbr".split(" ");return function(c,a){var a=a||document,d;if("object"===typeof c&&c.nodeType)d=a.createElement("div"),d.appendChild(c);else if(wysihtml5.browser.supportsHTML5Tags(a))d=a.createElement("div"),d.innerHTML=c;else{d=a;if(!d._wysihtml5_supportsHTML5Tags){for(var e=
0,f=b.length;e<f;e++)d.createElement(b[e]);d._wysihtml5_supportsHTML5Tags=!0}d=a;e=d.createElement("div");e.style.display="none";d.body.appendChild(e);try{e.innerHTML=c}catch(h){}d.body.removeChild(e);d=e}return d}}();
wysihtml5.dom.getParentElement=function(){function b(b,a){return!a||!a.length?!0:"string"===typeof a?b===a:wysihtml5.lang.array(a).contains(b)}return function(c,a,d){d=d||50;if(a.className||a.classRegExp){a:{for(var e=a.nodeName,f=a.className,a=a.classRegExp;d--&&c&&"BODY"!==c.nodeName;){var h;if(h=c.nodeType===wysihtml5.ELEMENT_NODE)if(h=b(c.nodeName,e)){h=f;var i=(c.className||"").match(a)||[];h=!h?!!i.length:i[i.length-1]===h}if(h)break a;c=c.parentNode}c=null}return c}a:{e=a.nodeName;for(f=d;f--&&
c&&"BODY"!==c.nodeName;){if(b(c.nodeName,e))break a;c=c.parentNode}c=null}return c}}();
wysihtml5.dom.getStyle=function(){var b={"float":"styleFloat"in document.createElement("div").style?"styleFloat":"cssFloat"},c=/\-[a-z]/g;return function(a){return{from:function(d){if(d.nodeType===wysihtml5.ELEMENT_NODE){var e=d.ownerDocument,f=b[a]||a.replace(c,function(a){return a.charAt(1).toUpperCase()}),h=d.style,i=d.currentStyle,g=h[f];if(g)return g;if(i)try{return i[f]}catch(j){}var f=e.defaultView||e.parentWindow,e=("height"===a||"width"===a)&&"TEXTAREA"===d.nodeName,k;if(f.getComputedStyle)return e&&
(k=h.overflow,h.overflow="hidden"),d=f.getComputedStyle(d,null).getPropertyValue(a),e&&(h.overflow=k||""),d}}}}}();wysihtml5.dom.hasElementWithTagName=function(){var b={},c=1;return function(a,d){var e=(a._wysihtml5_identifier||(a._wysihtml5_identifier=c++))+":"+d,f=b[e];f||(f=b[e]=a.getElementsByTagName(d));return 0<f.length}}();
(function(b){var c={},a=1;b.dom.hasElementWithClassName=function(d,e){if(!b.browser.supportsNativeGetElementsByClassName())return!!d.querySelector("."+e);var f=(d._wysihtml5_identifier||(d._wysihtml5_identifier=a++))+":"+e,h=c[f];h||(h=c[f]=d.getElementsByClassName(e));return 0<h.length}})(wysihtml5);wysihtml5.dom.insert=function(b){return{after:function(c){c.parentNode.insertBefore(b,c.nextSibling)},before:function(c){c.parentNode.insertBefore(b,c)},into:function(c){c.appendChild(b)}}};
wysihtml5.dom.insertCSS=function(b){b=b.join("\n");return{into:function(c){var a=c.createElement("style");a.type="text/css";a.styleSheet?a.styleSheet.cssText=b:a.appendChild(c.createTextNode(b));var d=c.querySelector("head link");d?d.parentNode.insertBefore(a,d):(c=c.querySelector("head"))&&c.appendChild(a)}}};
wysihtml5.dom.observe=function(b,c,a){for(var c="string"===typeof c?[c]:c,d,e,f=0,h=c.length;f<h;f++)e=c[f],b.addEventListener?b.addEventListener(e,a,!1):(d=function(c){"target"in c||(c.target=c.srcElement);c.preventDefault=c.preventDefault||function(){this.returnValue=!1};c.stopPropagation=c.stopPropagation||function(){this.cancelBubble=!0};a.call(b,c)},b.attachEvent("on"+e,d));return{stop:function(){for(var e,g=0,f=c.length;g<f;g++)e=c[g],b.removeEventListener?b.removeEventListener(e,a,!1):b.detachEvent("on"+
e,d)}}};
wysihtml5.dom.parse=function(){function b(c,e){var g=c.childNodes,f=g.length,j=a[c.nodeType],h=0,k,j=j&&j(c);if(!j)return null;for(h=0;h<f;h++)(k=b(g[h],e))&&j.appendChild(k);return e&&1>=j.childNodes.length&&j.nodeName.toLowerCase()===d&&!j.attributes.length?j.firstChild:j}function c(a,b){var b=b.toLowerCase(),c;if(c="IMG"==a.nodeName)if(c="src"==b){var d;a:{try{d=a.complete&&!a.mozMatchesSelector(":-moz-broken");break a}catch(e){if(a.complete&&"complete"===a.readyState){d=!0;break a}}d=void 0}c=
!0===d}return c?a.src:i&&"outerHTML"in a?-1!=a.outerHTML.toLowerCase().indexOf(" "+b+"=")?a.getAttribute(b):null:a.getAttribute(b)}var a={1:function(a){var b,g,j=h.tags;g=a.nodeName.toLowerCase();b=a.scopeName;if(a._wysihtml5)return null;a._wysihtml5=1;if("wysihtml5-temp"===a.className)return null;b&&"HTML"!=b&&(g=b+":"+g);"outerHTML"in a&&!wysihtml5.browser.autoClosesUnclosedTags()&&("P"===a.nodeName&&"</p>"!==a.outerHTML.slice(-4).toLowerCase())&&(g="div");if(g in j){b=j[g];if(!b||b.remove)return null;
b="string"===typeof b?{rename_tag:b}:b}else if(a.firstChild)b={rename_tag:d};else return null;g=a.ownerDocument.createElement(b.rename_tag||g);var j={},f=b.set_class,k=b.add_class,i=b.set_attributes,m=b.check_attributes,n=h.classes,p=0,t=[];b=[];var u=[],r=[],w;i&&(j=wysihtml5.lang.object(i).clone());if(m)for(w in m)if(i=v[m[w]])i=i(c(a,w)),"string"===typeof i&&(j[w]=i);f&&t.push(f);if(k)for(w in k)if(i=q[k[w]])f=i(c(a,w)),"string"===typeof f&&t.push(f);n["_wysihtml5-temp-placeholder"]=1;(r=a.getAttribute("class"))&&
(t=t.concat(r.split(e)));for(k=t.length;p<k;p++)a=t[p],n[a]&&b.push(a);for(n=b.length;n--;)a=b[n],wysihtml5.lang.array(u).contains(a)||u.unshift(a);u.length&&(j["class"]=u.join(" "));for(w in j)try{g.setAttribute(w,j[w])}catch(l){}j.src&&("undefined"!==typeof j.width&&g.setAttribute("width",j.width),"undefined"!==typeof j.height&&g.setAttribute("height",j.height));return g},3:function(a){return a.ownerDocument.createTextNode(a.data)}},d="span",e=/\s+/,f={tags:{},classes:{}},h={},i=!wysihtml5.browser.supportsGetAttributeCorrectly(),
g=/^https?:\/\//i,j=/^(\/|https?:\/\/)/i,k=/^(\/|https?:\/\/|mailto:)/i,m=/[^ a-z0-9_\-]/gi,n=/\D/g,v={url:function(a){return!a||!a.match(g)?null:a.replace(g,function(a){return a.toLowerCase()})},src:function(a){return!a||!a.match(j)?null:a.replace(j,function(a){return a.toLowerCase()})},href:function(a){return!a||!a.match(k)?null:a.replace(k,function(a){return a.toLowerCase()})},alt:function(a){return!a?"":a.replace(m,"")},numbers:function(a){return(a=(a||"").replace(n,""))||null}},u={left:"wysiwyg-float-left",
right:"wysiwyg-float-right"},p={left:"wysiwyg-text-align-left",right:"wysiwyg-text-align-right",center:"wysiwyg-text-align-center",justify:"wysiwyg-text-align-justify"},r={left:"wysiwyg-clear-left",right:"wysiwyg-clear-right",both:"wysiwyg-clear-both",all:"wysiwyg-clear-both"},t={1:"wysiwyg-font-size-xx-small",2:"wysiwyg-font-size-small",3:"wysiwyg-font-size-medium",4:"wysiwyg-font-size-large",5:"wysiwyg-font-size-x-large",6:"wysiwyg-font-size-xx-large",7:"wysiwyg-font-size-xx-large","-":"wysiwyg-font-size-smaller",
"+":"wysiwyg-font-size-larger"},q={align_img:function(a){return u[String(a).toLowerCase()]},align_text:function(a){return p[String(a).toLowerCase()]},clear_br:function(a){return r[String(a).toLowerCase()]},size_font:function(a){return t[String(a).charAt(0)]}};return function(a,c,d,e){wysihtml5.lang.object(h).merge(f).merge(c).get();for(var d=d||a.ownerDocument||document,c=d.createDocumentFragment(),g="string"===typeof a,a=g?wysihtml5.dom.getAsDom(a,d):a;a.firstChild;)d=a.firstChild,a.removeChild(d),
(d=b(d,e))&&c.appendChild(d);a.innerHTML="";a.appendChild(c);return g?wysihtml5.quirks.getCorrectInnerHTML(a):a}}();wysihtml5.dom.removeEmptyTextNodes=function(b){for(var c=wysihtml5.lang.array(b.childNodes).get(),a=c.length,d=0;d<a;d++)b=c[d],b.nodeType===wysihtml5.TEXT_NODE&&""===b.data&&b.parentNode.removeChild(b)};
wysihtml5.dom.renameElement=function(b,c){for(var a=b.ownerDocument.createElement(c),d;d=b.firstChild;)a.appendChild(d);wysihtml5.dom.copyAttributes(["align","className"]).from(b).to(a);b.parentNode.replaceChild(a,b);return a};wysihtml5.dom.replaceWithChildNodes=function(b){if(b.parentNode)if(b.firstChild){for(var c=b.ownerDocument.createDocumentFragment();b.firstChild;)c.appendChild(b.firstChild);b.parentNode.replaceChild(c,b)}else b.parentNode.removeChild(b)};
(function(b){function c(a){var b=a.ownerDocument.createElement("br");a.appendChild(b)}b.resolveList=function(a,d){if(a.nodeName.match(/^(MENU|UL|OL)$/)){var e=a.ownerDocument,f=e.createDocumentFragment(),h=a.previousElementSibling||a.previousSibling,i,g;if(d)for(h&&"block"!==b.getStyle("display").from(h)&&c(f);g=a.firstElementChild||a.firstChild;){for(e=g.lastChild;h=g.firstChild;)i=(i=h===e)&&"block"!==b.getStyle("display").from(h)&&"BR"!==h.nodeName,f.appendChild(h),i&&c(f);g.parentNode.removeChild(g)}else for(;g=
a.firstElementChild||a.firstChild;){if(g.querySelector&&g.querySelector("div, p, ul, ol, menu, blockquote, h1, h2, h3, h4, h5, h6"))for(;h=g.firstChild;)f.appendChild(h);else{for(i=e.createElement("p");h=g.firstChild;)i.appendChild(h);f.appendChild(i)}g.parentNode.removeChild(g)}a.parentNode.replaceChild(f,a)}}})(wysihtml5.dom);
(function(b){var c=document,a="parent top opener frameElement frames localStorage globalStorage sessionStorage indexedDB".split(" "),d="open close openDialog showModalDialog alert confirm prompt openDatabase postMessage XMLHttpRequest XDomainRequest".split(" "),e=["referrer","write","open","close"];b.dom.Sandbox=Base.extend({constructor:function(a,c){this.callback=a||b.EMPTY_FUNCTION;this.config=b.lang.object({}).merge(c).get();this.iframe=this._createIframe()},insertInto:function(a){"string"===typeof a&&
(a=c.getElementById(a));a.appendChild(this.iframe)},getIframe:function(){return this.iframe},getWindow:function(){this._readyError()},getDocument:function(){this._readyError()},destroy:function(){var a=this.getIframe();a.parentNode.removeChild(a)},_readyError:function(){throw Error("wysihtml5.Sandbox: Sandbox iframe isn't loaded yet");},_createIframe:function(){var a=this,d=c.createElement("iframe");d.className="wysihtml5-sandbox";b.dom.setAttributes({security:"restricted",allowtransparency:"true",
frameborder:0,width:0,height:0,marginwidth:0,marginheight:0}).on(d);b.browser.throwsMixedContentWarningWhenIframeSrcIsEmpty()&&(d.src="javascript:'<html></html>'");d.onload=function(){d.onreadystatechange=d.onload=null;a._onLoadIframe(d)};d.onreadystatechange=function(){/loaded|complete/.test(d.readyState)&&(d.onreadystatechange=d.onload=null,a._onLoadIframe(d))};return d},_onLoadIframe:function(f){if(b.dom.contains(c.documentElement,f)){var h=this,i=f.contentWindow,g=f.contentWindow.document,j=this._getHtml({charset:c.characterSet||
c.charset||"utf-8",stylesheets:this.config.stylesheets});g.open("text/html","replace");g.write(j);g.close();this.getWindow=function(){return f.contentWindow};this.getDocument=function(){return f.contentWindow.document};i.onerror=function(a,b,c){throw Error("wysihtml5.Sandbox: "+a,b,c);};if(!b.browser.supportsSandboxedIframes()){var k,j=0;for(k=a.length;j<k;j++)this._unset(i,a[j]);j=0;for(k=d.length;j<k;j++)this._unset(i,d[j],b.EMPTY_FUNCTION);j=0;for(k=e.length;j<k;j++)this._unset(g,e[j]);this._unset(g,
"cookie","",!0)}this.loaded=!0;setTimeout(function(){h.callback(h)},0)}},_getHtml:function(a){var c=a.stylesheets,d="",e=0,j;if(c="string"===typeof c?[c]:c)for(j=c.length;e<j;e++)d+='<link rel="stylesheet" href="'+c[e]+'">';a.stylesheets=d;return b.lang.string('<!DOCTYPE html><html><head><meta charset="#{charset}">#{stylesheets}</head><body></body></html>').interpolate(a)},_unset:function(a,c,d,e){try{a[c]=d}catch(j){}try{a.__defineGetter__(c,function(){return d})}catch(k){}if(e)try{a.__defineSetter__(c,
function(){})}catch(m){}if(!b.browser.crashesWhenDefineProperty(c))try{var n={get:function(){return d}};e&&(n.set=function(){});Object.defineProperty(a,c,n)}catch(v){}}})})(wysihtml5);(function(){var b={className:"class"};wysihtml5.dom.setAttributes=function(c){return{on:function(a){for(var d in c)a.setAttribute(b[d]||d,c[d])}}}})();
wysihtml5.dom.setStyles=function(b){return{on:function(c){c=c.style;if("string"===typeof b)c.cssText+=";"+b;else for(var a in b)"float"===a?(c.cssFloat=b[a],c.styleFloat=b[a]):c[a]=b[a]}}};
(function(b){b.simulatePlaceholder=function(c,a,d){var e=function(){a.hasPlaceholderSet()&&a.clear();a.placeholderSet=!1;b.removeClass(a.element,"placeholder")},f=function(){a.isEmpty()&&(a.placeholderSet=!0,a.setValue(d),b.addClass(a.element,"placeholder"))};c.on("set_placeholder",f).on("unset_placeholder",e).on("focus:composer",e).on("paste:composer",e).on("blur:composer",f);f()}})(wysihtml5.dom);
(function(b){var c=document.documentElement;"textContent"in c?(b.setTextContent=function(a,b){a.textContent=b},b.getTextContent=function(a){return a.textContent}):"innerText"in c?(b.setTextContent=function(a,b){a.innerText=b},b.getTextContent=function(a){return a.innerText}):(b.setTextContent=function(a,b){a.nodeValue=b},b.getTextContent=function(a){return a.nodeValue})})(wysihtml5.dom);
wysihtml5.quirks.cleanPastedHTML=function(){var b={"a u":wysihtml5.dom.replaceWithChildNodes};return function(c,a,d){var a=a||b,d=d||c.ownerDocument||document,e="string"===typeof c,f,h,i,g=0,c=e?wysihtml5.dom.getAsDom(c,d):c;for(i in a){f=c.querySelectorAll(i);d=a[i];for(h=f.length;g<h;g++)d(f[g])}return e?c.innerHTML:c}}();
wysihtml5.quirks.ensureProperClearing=function(){var b=function(){var b=this;setTimeout(function(){var a=b.innerHTML.toLowerCase();if("<p>&nbsp;</p>"==a||"<p>&nbsp;</p><p>&nbsp;</p>"==a)b.innerHTML=""},0)};return function(c){wysihtml5.dom.observe(c.element,["cut","keydown"],b)}}();
(function(b){b.quirks.getCorrectInnerHTML=function(c){var a=c.innerHTML;if(-1===a.indexOf("%7E"))return a;var c=c.querySelectorAll("[href*='~'], [src*='~']"),d,e,f,h;h=0;for(f=c.length;h<f;h++)d=c[h].href||c[h].src,e=b.lang.string(d).replace("~").by("%7E"),a=b.lang.string(a).replace(e).by(d);return a}})(wysihtml5);
(function(b){b.quirks.redraw=function(c){b.dom.addClass(c,"wysihtml5-quirks-redraw");b.dom.removeClass(c,"wysihtml5-quirks-redraw");try{var a=c.ownerDocument;a.execCommand("italic",!1,null);a.execCommand("italic",!1,null)}catch(d){}}})(wysihtml5);
(function(b){var c=b.dom;b.Selection=Base.extend({constructor:function(a){window.rangy.init();this.editor=a;this.composer=a.composer;this.doc=this.composer.doc},getBookmark:function(){var a=this.getRange();return a&&a.cloneRange()},setBookmark:function(a){a&&this.setSelection(a)},setBefore:function(a){var b=rangy.createRange(this.doc);b.setStartBefore(a);b.setEndBefore(a);return this.setSelection(b)},setAfter:function(a){var b=rangy.createRange(this.doc);b.setStartAfter(a);b.setEndAfter(a);return this.setSelection(b)},
selectNode:function(a,d){var e=rangy.createRange(this.doc),f=a.nodeType===b.ELEMENT_NODE,h="canHaveHTML"in a?a.canHaveHTML:"IMG"!==a.nodeName,i=f?a.innerHTML:a.data,i=""===i||i===b.INVISIBLE_SPACE,g=c.getStyle("display").from(a),g="block"===g||"list-item"===g;if(i&&f&&h&&!d)try{a.innerHTML=b.INVISIBLE_SPACE}catch(j){}h?e.selectNodeContents(a):e.selectNode(a);h&&i&&f?e.collapse(g):h&&i&&(e.setStartAfter(a),e.setEndAfter(a));this.setSelection(e)},getSelectedNode:function(a){if(a&&this.doc.selection&&
"Control"===this.doc.selection.type&&(a=this.doc.selection.createRange())&&a.length)return a.item(0);a=this.getSelection(this.doc);return a.focusNode===a.anchorNode?a.focusNode:(a=this.getRange(this.doc))?a.commonAncestorContainer:this.doc.body},executeAndRestore:function(a,d){var e=this.doc.body,f=d&&e.scrollTop,h=d&&e.scrollLeft,i='<span class="_wysihtml5-temp-placeholder">'+b.INVISIBLE_SPACE+"</span>",g=this.getRange(this.doc),j;if(g){b.browser.hasInsertNodeIssue()?this.doc.execCommand("insertHTML",
!1,i):(i=g.createContextualFragment(i),g.insertNode(i));try{a(g.startContainer,g.endContainer)}catch(k){setTimeout(function(){throw k;},0)}(g=this.doc.querySelector("._wysihtml5-temp-placeholder"))?(i=rangy.createRange(this.doc),j=g.nextSibling,b.browser.hasInsertNodeIssue()&&j&&"BR"===j.nodeName?(j=this.doc.createTextNode(b.INVISIBLE_SPACE),c.insert(j).after(g),i.setStartBefore(j),i.setEndBefore(j)):(i.selectNode(g),i.deleteContents()),this.setSelection(i)):e.focus();d&&(e.scrollTop=f,e.scrollLeft=
h);try{g.parentNode.removeChild(g)}catch(m){}}else a(e,e)},executeAndRestoreSimple:function(a){var b,c,f=this.getRange(),h=this.doc.body,i;if(f){b=f.getNodes([3]);h=b[0]||f.startContainer;i=b[b.length-1]||f.endContainer;b=h===f.startContainer?f.startOffset:0;c=i===f.endContainer?f.endOffset:i.length;try{a(f.startContainer,f.endContainer)}catch(g){setTimeout(function(){throw g;},0)}a=rangy.createRange(this.doc);try{a.setStart(h,b)}catch(j){}try{a.setEnd(i,c)}catch(k){}try{this.setSelection(a)}catch(m){}}else a(h,
h)},set:function(a,b){var c=rangy.createRange(this.doc);c.setStart(a,b||0);this.setSelection(c)},insertHTML:function(a){var a=rangy.createRange(this.doc).createContextualFragment(a),b=a.lastChild;this.insertNode(a);b&&this.setAfter(b)},insertNode:function(a){var b=this.getRange();b&&b.insertNode(a)},surround:function(a){var b=this.getRange();if(b)try{b.surroundContents(a),this.selectNode(a)}catch(c){a.appendChild(b.extractContents()),b.insertNode(a)}},scrollIntoView:function(){var a=this.doc,c=a.documentElement.scrollHeight>
a.documentElement.offsetHeight,e;if(!(e=a._wysihtml5ScrollIntoViewElement))e=a.createElement("span"),e.innerHTML=b.INVISIBLE_SPACE;e=a._wysihtml5ScrollIntoViewElement=e;if(c){this.insertNode(e);var c=e,f=0;if(c.parentNode){do f+=c.offsetTop||0,c=c.offsetParent;while(c)}c=f;e.parentNode.removeChild(e);c>=a.body.scrollTop+a.documentElement.offsetHeight-5&&(a.body.scrollTop=c)}},selectLine:function(){b.browser.supportsSelectionModify()?this._selectLine_W3C():this.doc.selection&&this._selectLine_MSIE()},
_selectLine_W3C:function(){var a=this.doc.defaultView.getSelection();a.modify("extend","left","lineboundary");a.modify("extend","right","lineboundary")},_selectLine_MSIE:function(){var a=this.doc.selection.createRange(),b=a.boundingTop,c=this.doc.body.scrollWidth,f;if(a.moveToPoint){0===b&&(f=this.doc.createElement("span"),this.insertNode(f),b=f.offsetTop,f.parentNode.removeChild(f));b+=1;for(f=-10;f<c;f+=2)try{a.moveToPoint(f,b);break}catch(h){}for(f=this.doc.selection.createRange();0<=c;c--)try{f.moveToPoint(c,
b);break}catch(i){}a.setEndPoint("EndToEnd",f);a.select()}},getText:function(){var a=this.getSelection();return a?a.toString():""},getNodes:function(a,b){var c=this.getRange();return c?c.getNodes([a],b):[]},getRange:function(){var a=this.getSelection();return a&&a.rangeCount&&a.getRangeAt(0)},getSelection:function(){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow)},setSelection:function(a){return rangy.getSelection(this.doc.defaultView||this.doc.parentWindow).setSingleRange(a)}})})(wysihtml5);
(function(b,c){function a(a,b){return c.dom.isCharacterDataNode(a)?0==b?!!a.previousSibling:b==a.length?!!a.nextSibling:!0:0<b&&b<a.childNodes.length}function d(a,b,e){var f;c.dom.isCharacterDataNode(b)&&(0==e?(e=c.dom.getNodeIndex(b),b=b.parentNode):e==b.length?(e=c.dom.getNodeIndex(b)+1,b=b.parentNode):f=c.dom.splitDataNode(b,e));if(!f){f=b.cloneNode(!1);f.id&&f.removeAttribute("id");for(var h;h=b.childNodes[e];)f.appendChild(h);c.dom.insertAfter(f,b)}return b==a?f:d(a,f.parentNode,c.dom.getNodeIndex(f))}
function e(a){this.firstTextNode=(this.isElementMerge=a.nodeType==b.ELEMENT_NODE)?a.lastChild:a;this.textNodes=[this.firstTextNode]}function f(a,b,c,d){this.tagNames=a||[h];this.cssClass=b||"";this.similarClassRegExp=c;this.normalize=d;this.applyToAnyTagName=!1}var h="span",i=/\s+/g;e.prototype={doMerge:function(){for(var a=[],b,c,d=0,e=this.textNodes.length;d<e;++d)b=this.textNodes[d],c=b.parentNode,a[d]=b.data,d&&(c.removeChild(b),c.hasChildNodes()||c.parentNode.removeChild(c));return this.firstTextNode.data=
a=a.join("")},getLength:function(){for(var a=this.textNodes.length,b=0;a--;)b+=this.textNodes[a].length;return b},toString:function(){for(var a=[],b=0,c=this.textNodes.length;b<c;++b)a[b]="'"+this.textNodes[b].data+"'";return"[Merge("+a.join(",")+")]"}};f.prototype={getAncestorWithClass:function(a){for(var d;a;){if(this.cssClass)if(d=this.cssClass,a.className){var e=a.className.match(this.similarClassRegExp)||[];d=e[e.length-1]===d}else d=!1;else d=!0;if(a.nodeType==b.ELEMENT_NODE&&c.dom.arrayContains(this.tagNames,
a.tagName.toLowerCase())&&d)return a;a=a.parentNode}return!1},postApply:function(a,b){for(var c=a[0],d=a[a.length-1],f=[],h,i=c,p=d,r=0,t=d.length,q,y,A=0,B=a.length;A<B;++A)q=a[A],(y=this.getAdjacentMergeableTextNode(q.parentNode,!1))?(h||(h=new e(y),f.push(h)),h.textNodes.push(q),q===c&&(i=h.firstTextNode,r=i.length),q===d&&(p=h.firstTextNode,t=h.getLength())):h=null;if(c=this.getAdjacentMergeableTextNode(d.parentNode,!0))h||(h=new e(d),f.push(h)),h.textNodes.push(c);if(f.length){A=0;for(B=f.length;A<
B;++A)f[A].doMerge();b.setStart(i,r);b.setEnd(p,t)}},getAdjacentMergeableTextNode:function(a,c){var d=a.nodeType==b.TEXT_NODE,e=d?a.parentNode:a,f=c?"nextSibling":"previousSibling";if(d){if((d=a[f])&&d.nodeType==b.TEXT_NODE)return d}else if((d=e[f])&&this.areElementsMergeable(a,d))return d[c?"firstChild":"lastChild"];return null},areElementsMergeable:function(a,b){var d;if(d=c.dom.arrayContains(this.tagNames,(a.tagName||"").toLowerCase()))if(d=c.dom.arrayContains(this.tagNames,(b.tagName||"").toLowerCase()))if(d=
a.className.replace(i," ")==b.className.replace(i," "))a:if(a.attributes.length!=b.attributes.length)d=!1;else{d=0;for(var e=a.attributes.length,f,h;d<e;++d)if(f=a.attributes[d],h=f.name,"class"!=h&&(h=b.attributes.getNamedItem(h),f.specified!=h.specified||f.specified&&f.nodeValue!==h.nodeValue)){d=!1;break a}d=!0}return d},createContainer:function(a){a=a.createElement(this.tagNames[0]);this.cssClass&&(a.className=this.cssClass);return a},applyToTextNode:function(a){var b=a.parentNode;1==b.childNodes.length&&
c.dom.arrayContains(this.tagNames,b.tagName.toLowerCase())?this.cssClass&&(a=this.cssClass,b.className?(b.className&&(b.className=b.className.replace(this.similarClassRegExp,"")),b.className+=" "+a):b.className=a):(b=this.createContainer(c.dom.getDocument(a)),a.parentNode.insertBefore(b,a),b.appendChild(a))},isRemovable:function(a){return c.dom.arrayContains(this.tagNames,a.tagName.toLowerCase())&&b.lang.string(a.className).trim()==this.cssClass},undoToTextNode:function(b,c,e){c.containsNode(e)||
(b=c.cloneRange(),b.selectNode(e),b.isPointInRange(c.endContainer,c.endOffset)&&a(c.endContainer,c.endOffset)&&(d(e,c.endContainer,c.endOffset),c.setEndAfter(e)),b.isPointInRange(c.startContainer,c.startOffset)&&a(c.startContainer,c.startOffset)&&(e=d(e,c.startContainer,c.startOffset)));this.similarClassRegExp&&e.className&&(e.className=e.className.replace(this.similarClassRegExp,""));if(this.isRemovable(e)){c=e;for(e=c.parentNode;c.firstChild;)e.insertBefore(c.firstChild,c);e.removeChild(c)}},applyToRange:function(a){var c=
a.getNodes([b.TEXT_NODE]);if(!c.length)try{var d=this.createContainer(a.endContainer.ownerDocument);a.surroundContents(d);this.selectNode(a,d);return}catch(e){}a.splitBoundaries();c=a.getNodes([b.TEXT_NODE]);if(c.length){for(var f=0,h=c.length;f<h;++f)d=c[f],this.getAncestorWithClass(d)||this.applyToTextNode(d);a.setStart(c[0],0);d=c[c.length-1];a.setEnd(d,d.length);this.normalize&&this.postApply(c,a)}},undoToRange:function(a){var c=a.getNodes([b.TEXT_NODE]),d,e;c.length?(a.splitBoundaries(),c=a.getNodes([b.TEXT_NODE])):
(c=a.endContainer.ownerDocument.createTextNode(b.INVISIBLE_SPACE),a.insertNode(c),a.selectNode(c),c=[c]);for(var f=0,h=c.length;f<h;++f)d=c[f],(e=this.getAncestorWithClass(d))&&this.undoToTextNode(d,a,e);1==h?this.selectNode(a,c[0]):(a.setStart(c[0],0),d=c[c.length-1],a.setEnd(d,d.length),this.normalize&&this.postApply(c,a))},selectNode:function(a,c){var d=c.nodeType===b.ELEMENT_NODE,e="canHaveHTML"in c?c.canHaveHTML:!0,f=d?c.innerHTML:c.data;if((f=""===f||f===b.INVISIBLE_SPACE)&&d&&e)try{c.innerHTML=
b.INVISIBLE_SPACE}catch(h){}a.selectNodeContents(c);f&&d?a.collapse(!1):f&&(a.setStartAfter(c),a.setEndAfter(c))},getTextSelectedByRange:function(a,b){var c=b.cloneRange();c.selectNodeContents(a);var d=c.intersection(b),d=d?d.toString():"";c.detach();return d},isAppliedToRange:function(a){var c=[],d,e=a.getNodes([b.TEXT_NODE]);if(!e.length)return(d=this.getAncestorWithClass(a.startContainer))?[d]:!1;for(var f=0,h=e.length,i;f<h;++f){i=this.getTextSelectedByRange(e[f],a);d=this.getAncestorWithClass(e[f]);
if(""!=i&&!d)return!1;c.push(d)}return c},toggleRange:function(a){this.isAppliedToRange(a)?this.undoToRange(a):this.applyToRange(a)}};b.selection.HTMLApplier=f})(wysihtml5,rangy);
wysihtml5.Commands=Base.extend({constructor:function(b){this.editor=b;this.composer=b.composer;this.doc=this.composer.doc},support:function(b){return wysihtml5.browser.supportsCommand(this.doc,b)},exec:function(b,c){var a=wysihtml5.commands[b],d=wysihtml5.lang.array(arguments).get(),e=a&&a.exec,f=null;this.editor.fire("beforecommand:composer");if(e)d.unshift(this.composer),f=e.apply(a,d);else try{f=this.doc.execCommand(b,!1,c)}catch(h){}this.editor.fire("aftercommand:composer");return f},state:function(b,
c){var a=wysihtml5.commands[b],d=wysihtml5.lang.array(arguments).get(),e=a&&a.state;if(e)return d.unshift(this.composer),e.apply(a,d);try{return this.doc.queryCommandState(b)}catch(f){return!1}}});wysihtml5.commands.bold={exec:function(b,c){return wysihtml5.commands.formatInline.exec(b,c,"b")},state:function(b,c){return wysihtml5.commands.formatInline.state(b,c,"b")}};
(function(b){var c=b.dom;b.commands.createLink={exec:function(a,d,e){var f=this.state(a,d);if(f)a.selection.executeAndRestore(function(){for(var a=f.length,b=0,d,e,g;b<a;b++)d=f[b],e=c.getParentElement(d,{nodeName:"code"}),g=c.getTextContent(d),g.match(c.autoLink.URL_REG_EXP)&&!e?c.renameElement(d,"code"):c.replaceWithChildNodes(d)});else{var d=e="object"===typeof e?e:{href:e},e=a.doc,h="_wysihtml5-temp-"+ +new Date,i=0,g,j,k;b.commands.formatInline.exec(a,void 0,"A",h,/non-matching-class/g);g=e.querySelectorAll("A."+
h);for(h=g.length;i<h;i++)for(k in j=g[i],j.removeAttribute("class"),d)j.setAttribute(k,d[k]);k=j;1===h&&(h=c.getTextContent(j),i=!!j.querySelector("*"),h=""===h||h===b.INVISIBLE_SPACE,!i&&h&&(c.setTextContent(j,d.text||j.href),d=e.createTextNode(" "),a.selection.setAfter(j),c.insert(d).after(j),k=d));a.selection.setAfter(k)}},state:function(a,c){return b.commands.formatInline.state(a,c,"A")}}})(wysihtml5);
(function(b){var c=/wysiwyg-font-size-[0-9a-z\-]+/g;b.commands.fontSize={exec:function(a,d,e){return b.commands.formatInline.exec(a,d,"span","wysiwyg-font-size-"+e,c)},state:function(a,d,e){return b.commands.formatInline.state(a,d,"span","wysiwyg-font-size-"+e,c)},value:function(){}}})(wysihtml5);
(function(b){var c=/wysiwyg-color-[0-9a-z]+/g;b.commands.foreColor={exec:function(a,d,e){return b.commands.formatInline.exec(a,d,"span","wysiwyg-color-"+e,c)},state:function(a,d,e){return b.commands.formatInline.state(a,d,"span","wysiwyg-color-"+e,c)}}})(wysihtml5);
(function(b){function c(a){for(a=a.previousSibling;a&&a.nodeType===b.TEXT_NODE&&!b.lang.string(a.data).trim();)a=a.previousSibling;return a}function a(a){for(a=a.nextSibling;a&&a.nodeType===b.TEXT_NODE&&!b.lang.string(a.data).trim();)a=a.nextSibling;return a}function d(a){return"BR"===a.nodeName||"block"===e.getStyle("display").from(a)?!0:!1}var e=b.dom,f="H1 H2 H3 H4 H5 H6 P BLOCKQUOTE DIV".split(" ");b.commands.formatBlock={exec:function(h,i,g,j,k){var m=h.doc,n=this.state(h,i,g,j,k),v=h.config.useLineBreaks,
u=v?"DIV":"P",p,g="string"===typeof g?g.toUpperCase():g;if(n)h.selection.executeAndRestoreSimple(function(){k&&(n.className=n.className.replace(k,""));if(!b.lang.string(n.className).trim()&&(v||"P"===g)){var f=n,h=f.ownerDocument,j=a(f),i=c(f);j&&!d(j)&&f.parentNode.insertBefore(h.createElement("br"),j);i&&!d(i)&&f.parentNode.insertBefore(h.createElement("br"),f);e.replaceWithChildNodes(n)}else e.renameElement(n,"P"===g?"DIV":u)});else{if(null===g||b.lang.array(f).contains(g))if(p=h.selection.getSelectedNode(),
n=e.getParentElement(p,{nodeName:f})){h.selection.executeAndRestore(function(){g&&(n=e.renameElement(n,g));if(j){var a=n;a.className?(a.className=a.className.replace(k,""),a.className+=" "+j):a.className=j}});return}if(h.commands.support(i)){h=g||u;if(j)var r=e.observe(m,"DOMNodeInserted",function(a){var a=a.target,c;a.nodeType===b.ELEMENT_NODE&&(c=e.getStyle("display").from(a),"inline"!==c.substr(0,6)&&(a.className+=" "+j))});m.execCommand(i,!1,h);r&&r.stop()}else n=m.createElement(g||u),j&&(n.className=
j),i=n,h.selection.selectLine(),h.selection.surround(i),m=a(i),r=c(i),m&&"BR"===m.nodeName&&m.parentNode.removeChild(m),r&&"BR"===r.nodeName&&r.parentNode.removeChild(r),(m=i.lastChild)&&"BR"===m.nodeName&&m.parentNode.removeChild(m),h.selection.selectNode(i,b.browser.displaysCaretInEmptyContentEditableCorrectly())}},state:function(a,b,c,d,f){c="string"===typeof c?c.toUpperCase():c;a=a.selection.getSelectedNode();return e.getParentElement(a,{nodeName:c,className:d,classRegExp:f})}}})(wysihtml5);
(function(b){function c(c,f,h){var i=c+":"+f;if(!d[i]){var g=d,j=b.selection.HTMLApplier,k=a[c],c=k?[c.toLowerCase(),k.toLowerCase()]:[c.toLowerCase()];g[i]=new j(c,f,h,!0)}return d[i]}var a={strong:"b",em:"i",b:"strong",i:"em"},d={};b.commands.formatInline={exec:function(a,b,d,i,g){b=a.selection.getRange();if(!b)return!1;c(d,i,g).toggleRange(b);a.selection.setSelection(b)},state:function(d,f,h,i,g){var f=d.doc,j=a[h]||h;if(!b.dom.hasElementWithTagName(f,h)&&!b.dom.hasElementWithTagName(f,j)||i&&
!b.dom.hasElementWithClassName(f,i))return!1;d=d.selection.getRange();return!d?!1:c(h,i,g).isAppliedToRange(d)}}})(wysihtml5);wysihtml5.commands.insertHTML={exec:function(b,c,a){b.commands.support(c)?b.doc.execCommand(c,!1,a):b.selection.insertHTML(a)},state:function(){return!1}};
(function(b){b.commands.insertImage={exec:function(c,a,d){var d="object"===typeof d?d:{src:d},e=c.doc,a=this.state(c),f;if(a)c.selection.setBefore(a),d=a.parentNode,d.removeChild(a),b.dom.removeEmptyTextNodes(d),"A"===d.nodeName&&!d.firstChild&&(c.selection.setAfter(d),d.parentNode.removeChild(d)),b.quirks.redraw(c.element);else{a=e.createElement("IMG");for(f in d)"className"===f&&(f="class"),a.setAttribute(f,d[f]);c.selection.insertNode(a);b.browser.hasProblemsSettingCaretAfterImg()?(d=e.createTextNode(b.INVISIBLE_SPACE),
c.selection.insertNode(d),c.selection.setAfter(d)):c.selection.setAfter(a)}},state:function(c){var a;if(!b.dom.hasElementWithTagName(c.doc,"IMG"))return!1;a=c.selection.getSelectedNode();if(!a)return!1;if("IMG"===a.nodeName)return a;if(a.nodeType!==b.ELEMENT_NODE)return!1;a=c.selection.getText();if(a=b.lang.string(a).trim())return!1;c=c.selection.getNodes(b.ELEMENT_NODE,function(a){return"IMG"===a.nodeName});return 1!==c.length?!1:c[0]}}})(wysihtml5);
(function(b){var c="<br>"+(b.browser.needsSpaceAfterLineBreak()?" ":"");b.commands.insertLineBreak={exec:function(a,d){a.commands.support(d)?(a.doc.execCommand(d,!1,null),b.browser.autoScrollsToCaret()||a.selection.scrollIntoView()):a.commands.exec("insertHTML",c)},state:function(){return!1}}})(wysihtml5);
wysihtml5.commands.insertOrderedList={exec:function(b,c){var a=b.doc,d=b.selection.getSelectedNode(),e=wysihtml5.dom.getParentElement(d,{nodeName:"OL"}),f=wysihtml5.dom.getParentElement(d,{nodeName:"UL"}),d="_wysihtml5-temp-"+(new Date).getTime(),h;!e&&!f&&b.commands.support(c)?a.execCommand(c,!1,null):e?b.selection.executeAndRestore(function(){wysihtml5.dom.resolveList(e,b.config.useLineBreaks)}):f?b.selection.executeAndRestore(function(){wysihtml5.dom.renameElement(f,"ol")}):(b.commands.exec("formatBlock",
"div",d),h=a.querySelector("."+d),a=""===h.innerHTML||h.innerHTML===wysihtml5.INVISIBLE_SPACE||"<br>"===h.innerHTML,b.selection.executeAndRestore(function(){e=wysihtml5.dom.convertToList(h,"ol")}),a&&b.selection.selectNode(e.querySelector("li"),!0))},state:function(b){b=b.selection.getSelectedNode();return wysihtml5.dom.getParentElement(b,{nodeName:"OL"})}};
wysihtml5.commands.insertUnorderedList={exec:function(b,c){var a=b.doc,d=b.selection.getSelectedNode(),e=wysihtml5.dom.getParentElement(d,{nodeName:"UL"}),f=wysihtml5.dom.getParentElement(d,{nodeName:"OL"}),d="_wysihtml5-temp-"+(new Date).getTime(),h;!e&&!f&&b.commands.support(c)?a.execCommand(c,!1,null):e?b.selection.executeAndRestore(function(){wysihtml5.dom.resolveList(e,b.config.useLineBreaks)}):f?b.selection.executeAndRestore(function(){wysihtml5.dom.renameElement(f,"ul")}):(b.commands.exec("formatBlock",
"div",d),h=a.querySelector("."+d),a=""===h.innerHTML||h.innerHTML===wysihtml5.INVISIBLE_SPACE||"<br>"===h.innerHTML,b.selection.executeAndRestore(function(){e=wysihtml5.dom.convertToList(h,"ul")}),a&&b.selection.selectNode(e.querySelector("li"),!0))},state:function(b){b=b.selection.getSelectedNode();return wysihtml5.dom.getParentElement(b,{nodeName:"UL"})}};
wysihtml5.commands.italic={exec:function(b,c){return wysihtml5.commands.formatInline.exec(b,c,"i")},state:function(b,c){return wysihtml5.commands.formatInline.state(b,c,"i")}};(function(b){var c=/wysiwyg-text-align-[0-9a-z]+/g;b.commands.justifyCenter={exec:function(a){return b.commands.formatBlock.exec(a,"formatBlock",null,"wysiwyg-text-align-center",c)},state:function(a){return b.commands.formatBlock.state(a,"formatBlock",null,"wysiwyg-text-align-center",c)}}})(wysihtml5);
(function(b){var c=/wysiwyg-text-align-[0-9a-z]+/g;b.commands.justifyLeft={exec:function(a){return b.commands.formatBlock.exec(a,"formatBlock",null,"wysiwyg-text-align-left",c)},state:function(a){return b.commands.formatBlock.state(a,"formatBlock",null,"wysiwyg-text-align-left",c)}}})(wysihtml5);
(function(b){var c=/wysiwyg-text-align-[0-9a-z]+/g;b.commands.justifyRight={exec:function(a){return b.commands.formatBlock.exec(a,"formatBlock",null,"wysiwyg-text-align-right",c)},state:function(a){return b.commands.formatBlock.state(a,"formatBlock",null,"wysiwyg-text-align-right",c)}}})(wysihtml5);
(function(b){var c=/wysiwyg-text-align-[0-9a-z]+/g;b.commands.justifyFull={exec:function(a){return b.commands.formatBlock.exec(a,"formatBlock",null,"wysiwyg-text-align-justify",c)},state:function(a){return b.commands.formatBlock.state(a,"formatBlock",null,"wysiwyg-text-align-justify",c)}}})(wysihtml5);wysihtml5.commands.redo={exec:function(b){return b.undoManager.redo()},state:function(){return!1}};
wysihtml5.commands.underline={exec:function(b,c){return wysihtml5.commands.formatInline.exec(b,c,"u")},state:function(b,c){return wysihtml5.commands.formatInline.state(b,c,"u")}};wysihtml5.commands.undo={exec:function(b){return b.undoManager.undo()},state:function(){return!1}};
(function(b){var c='<span id="_wysihtml5-undo" class="_wysihtml5-temp">'+b.INVISIBLE_SPACE+"</span>",a='<span id="_wysihtml5-redo" class="_wysihtml5-temp">'+b.INVISIBLE_SPACE+"</span>",d=b.dom;b.UndoManager=b.lang.Dispatcher.extend({constructor:function(a){this.editor=a;this.composer=a.composer;this.element=this.composer.element;this.position=0;this.historyStr=[];this.historyDom=[];this.transact();this._observe()},_observe:function(){var e=this,f=this.composer.sandbox.getDocument(),h;d.observe(this.element,
"keydown",function(a){if(!(a.altKey||!a.ctrlKey&&!a.metaKey)){var b=a.keyCode,c=90===b&&a.shiftKey||89===b;90===b&&!a.shiftKey?(e.undo(),a.preventDefault()):c&&(e.redo(),a.preventDefault())}});d.observe(this.element,"keydown",function(a){a=a.keyCode;a!==h&&(h=a,(8===a||46===a)&&e.transact())});if(b.browser.hasUndoInContextMenu()){var i,g,j=function(){for(var a;a=f.querySelector("._wysihtml5-temp");)a.parentNode.removeChild(a);clearInterval(i)};d.observe(this.element,"contextmenu",function(){j();e.composer.selection.executeAndRestoreSimple(function(){e.element.lastChild&&
e.composer.selection.setAfter(e.element.lastChild);f.execCommand("insertHTML",!1,c);f.execCommand("insertHTML",!1,a);f.execCommand("undo",!1,null)});i=setInterval(function(){f.getElementById("_wysihtml5-redo")?(j(),e.redo()):f.getElementById("_wysihtml5-undo")||(j(),e.undo())},400);g||(g=!0,d.observe(document,"mousedown",j),d.observe(f,["mousedown","paste","cut","copy"],j))})}this.editor.on("newword:composer",function(){e.transact()}).on("beforecommand:composer",function(){e.transact()})},transact:function(){var a=
this.historyStr[this.position-1],c=this.composer.getValue();if(c!==a){if(25<(this.historyStr.length=this.historyDom.length=this.position))this.historyStr.shift(),this.historyDom.shift(),this.position--;this.position++;var d=this.composer.selection.getRange(),a=d.startContainer||this.element,i=d.startOffset||0,g;a.nodeType===b.ELEMENT_NODE?d=a:(d=a.parentNode,g=this.getChildNodeIndex(d,a));d.setAttribute("data-wysihtml5-selection-offset",i);"undefined"!==typeof g&&d.setAttribute("data-wysihtml5-selection-node",
g);g=this.element.cloneNode(!!c);this.historyDom.push(g);this.historyStr.push(c);d.removeAttribute("data-wysihtml5-selection-offset");d.removeAttribute("data-wysihtml5-selection-node")}},undo:function(){this.transact();this.undoPossible()&&(this.set(this.historyDom[--this.position-1]),this.editor.fire("undo:composer"))},redo:function(){this.redoPossible()&&(this.set(this.historyDom[++this.position-1]),this.editor.fire("redo:composer"))},undoPossible:function(){return 1<this.position},redoPossible:function(){return this.position<
this.historyStr.length},set:function(a){this.element.innerHTML="";for(var b=0,c=a.childNodes,d=a.childNodes.length;b<d;b++)this.element.appendChild(c[b].cloneNode(!0));a.hasAttribute("data-wysihtml5-selection-offset")?(b=a.getAttribute("data-wysihtml5-selection-offset"),c=a.getAttribute("data-wysihtml5-selection-node"),a=this.element):(a=this.element.querySelector("[data-wysihtml5-selection-offset]")||this.element,b=a.getAttribute("data-wysihtml5-selection-offset"),c=a.getAttribute("data-wysihtml5-selection-node"),
a.removeAttribute("data-wysihtml5-selection-offset"),a.removeAttribute("data-wysihtml5-selection-node"));null!==c&&(a=this.getChildNodeByIndex(a,+c));this.composer.selection.set(a,b)},getChildNodeIndex:function(a,b){for(var c=0,d=a.childNodes,g=d.length;c<g;c++)if(d[c]===b)return c},getChildNodeByIndex:function(a,b){return a.childNodes[b]}})})(wysihtml5);
wysihtml5.views.View=Base.extend({constructor:function(b,c,a){this.parent=b;this.element=c;this.config=a;this._observeViewChange()},_observeViewChange:function(){var b=this;this.parent.on("beforeload",function(){b.parent.on("change_view",function(c){c===b.name?(b.parent.currentView=b,b.show(),setTimeout(function(){b.focus()},0)):b.hide()})})},focus:function(){if(this.element.ownerDocument.querySelector(":focus")!==this.element)try{this.element.focus()}catch(b){}},hide:function(){this.element.style.display=
"none"},show:function(){this.element.style.display=""},disable:function(){this.element.setAttribute("disabled","disabled")},enable:function(){this.element.removeAttribute("disabled")}});
(function(b){var c=b.dom,a=b.browser;b.views.Composer=b.views.View.extend({name:"composer",CARET_HACK:"<br>",constructor:function(a,b,c){this.base(a,b,c);this.textarea=this.parent.textarea;this._initSandbox()},clear:function(){this.element.innerHTML=a.displaysCaretInEmptyContentEditableCorrectly()?"":this.CARET_HACK},getValue:function(a){var c=this.isEmpty()?"":b.quirks.getCorrectInnerHTML(this.element);a&&(c=this.parent.parse(c));return c=b.lang.string(c).replace(b.INVISIBLE_SPACE).by("")},setValue:function(a,
b){b&&(a=this.parent.parse(a));try{this.element.innerHTML=a}catch(c){this.element.innerText=a}},show:function(){this.iframe.style.display=this._displayStyle||"";this.textarea.element.disabled||(this.disable(),this.enable())},hide:function(){this._displayStyle=c.getStyle("display").from(this.iframe);"none"===this._displayStyle&&(this._displayStyle=null);this.iframe.style.display="none"},disable:function(){this.parent.fire("disable:composer");this.element.removeAttribute("contentEditable")},enable:function(){this.parent.fire("enable:composer");
this.element.setAttribute("contentEditable","true")},focus:function(a){b.browser.doesAsyncFocus()&&this.hasPlaceholderSet()&&this.clear();this.base();var c=this.element.lastChild;a&&c&&("BR"===c.nodeName?this.selection.setBefore(this.element.lastChild):this.selection.setAfter(this.element.lastChild))},getTextContent:function(){return c.getTextContent(this.element)},hasPlaceholderSet:function(){return this.getTextContent()==this.textarea.element.getAttribute("placeholder")&&this.placeholderSet},isEmpty:function(){var a=
this.element.innerHTML.toLowerCase();return""===a||"<br>"===a||"<p></p>"===a||"<p><br></p>"===a||this.hasPlaceholderSet()},_initSandbox:function(){var a=this;this.sandbox=new c.Sandbox(function(){a._create()},{stylesheets:this.config.stylesheets});this.iframe=this.sandbox.getIframe();var b=this.textarea.element;c.insert(this.iframe).after(b);if(b.form){var f=document.createElement("input");f.type="hidden";f.name="_wysihtml5_mode";f.value=1;c.insert(f).after(b)}},_create:function(){var d=this;this.doc=
this.sandbox.getDocument();this.element=this.doc.body;this.textarea=this.parent.textarea;this.element.innerHTML=this.textarea.getValue(!0);this.selection=new b.Selection(this.parent);this.commands=new b.Commands(this.parent);c.copyAttributes("className spellcheck title lang dir accessKey".split(" ")).from(this.textarea.element).to(this.element);c.addClass(this.element,this.config.composerClassName);this.config.style&&this.style();this.observe();var e=this.config.name;e&&(c.addClass(this.element,e),
c.addClass(this.iframe,e));this.enable();this.textarea.element.disabled&&this.disable();(e="string"===typeof this.config.placeholder?this.config.placeholder:this.textarea.element.getAttribute("placeholder"))&&c.simulatePlaceholder(this.parent,this,e);this.commands.exec("styleWithCSS",!1);this._initAutoLinking();this._initObjectResizing();this._initUndoManager();this._initLineBreaking();(this.textarea.element.hasAttribute("autofocus")||document.querySelector(":focus")==this.textarea.element)&&!a.isIos()&&
setTimeout(function(){d.focus(!0)},100);a.clearsContentEditableCorrectly()||b.quirks.ensureProperClearing(this);this.initSync&&this.config.sync&&this.initSync();this.textarea.hide();this.parent.fire("beforeload").fire("load")},_initAutoLinking:function(){var d=this,e=a.canDisableAutoLinking(),f=a.doesAutoLinkingInContentEditable();e&&this.commands.exec("autoUrlDetect",!1);if(this.config.autoLink){if(!f||f&&e)this.parent.on("newword:composer",function(){c.getTextContent(d.element).match(c.autoLink.URL_REG_EXP)&&
d.selection.executeAndRestore(function(a,b){c.autoLink(b.parentNode)})}),c.observe(this.element,"blur",function(){c.autoLink(d.element)});var h=this.sandbox.getDocument().getElementsByTagName("a"),i=c.autoLink.URL_REG_EXP,g=function(a){a=b.lang.string(c.getTextContent(a)).trim();"www."===a.substr(0,4)&&(a="http://"+a);return a};c.observe(this.element,"keydown",function(a){if(h.length){var a=d.selection.getSelectedNode(a.target.ownerDocument),b=c.getParentElement(a,{nodeName:"A"},4),e;b&&(e=g(b),setTimeout(function(){var a=
g(b);a!==e&&a.match(i)&&b.setAttribute("href",a)},0))}})}},_initObjectResizing:function(){this.commands.exec("enableObjectResizing",!0);if(a.supportsEvent("resizeend")){var d=["width","height"],e=d.length,f=this.element;c.observe(f,"resizeend",function(a){var a=a.target||a.srcElement,c=a.style,g=0,j;if("IMG"===a.nodeName){for(;g<e;g++)j=d[g],c[j]&&(a.setAttribute(j,parseInt(c[j],10)),c[j]="");b.quirks.redraw(f)}})}},_initUndoManager:function(){this.undoManager=new b.UndoManager(this.parent)},_initLineBreaking:function(){function d(a){var b=
c.getParentElement(a,{nodeName:["P","DIV"]},2);b&&e.selection.executeAndRestore(function(){e.config.useLineBreaks?c.replaceWithChildNodes(b):"P"!==b.nodeName&&c.renameElement(b,"p")})}var e=this,f="LI P H1 H2 H3 H4 H5 H6".split(" "),h=["UL","OL","MENU"];this.config.useLineBreaks||c.observe(this.element,["focus","keydown"],function(){if(e.isEmpty()){var b=e.doc.createElement("P");e.element.innerHTML="";e.element.appendChild(b);a.displaysCaretInEmptyContentEditableCorrectly()?e.selection.selectNode(b,
!0):(b.innerHTML="<br>",e.selection.setBefore(b.firstChild))}});c.observe(this.doc,"keydown",function(a){var g=a.keyCode;if(!a.shiftKey&&!(g!==b.ENTER_KEY&&g!==b.BACKSPACE_KEY)){var j=c.getParentElement(e.selection.getSelectedNode(),{nodeName:f},4);j?setTimeout(function(){var a=e.selection.getSelectedNode(),f;if("LI"===j.nodeName){if(!a)return;(f=c.getParentElement(a,{nodeName:h},2))||d(a)}g===b.ENTER_KEY&&j.nodeName.match(/^H[1-6]$/)&&d(a)},0):e.config.useLineBreaks&&(g===b.ENTER_KEY&&!b.browser.insertsLineBreaksOnReturn())&&
(e.commands.exec("insertLineBreak"),a.preventDefault())}})}})})(wysihtml5);
(function(b){var c=b.dom,a=document,d=window,e=a.createElement("div"),f="background-color color cursor font-family font-size font-style font-variant font-weight line-height letter-spacing text-align text-decoration text-indent text-rendering word-break word-wrap word-spacing".split(" "),h="background-color border-collapse border-bottom-color border-bottom-style border-bottom-width border-left-color border-left-style border-left-width border-right-color border-right-style border-right-width border-top-color border-top-style border-top-width clear display float margin-bottom margin-left margin-right margin-top outline-color outline-offset outline-width outline-style padding-left padding-right padding-top padding-bottom position top left right bottom z-index vertical-align text-align -webkit-box-sizing -moz-box-sizing -ms-box-sizing box-sizing -webkit-box-shadow -moz-box-shadow -ms-box-shadow box-shadow -webkit-border-top-right-radius -moz-border-radius-topright border-top-right-radius -webkit-border-bottom-right-radius -moz-border-radius-bottomright border-bottom-right-radius -webkit-border-bottom-left-radius -moz-border-radius-bottomleft border-bottom-left-radius -webkit-border-top-left-radius -moz-border-radius-topleft border-top-left-radius width height".split(" "),i=
["html                 { height: 100%; }","body                 { height: 100%; padding: 1px 0 0 0; margin: -1px 0 0 0; }","body > p:first-child { margin-top: 0; }","._wysihtml5-temp     { display: none; }",b.browser.isGecko?"body.placeholder { color: graytext !important; }":"body.placeholder { color: #a9a9a9 !important; }","img:-moz-broken      { -moz-force-broken-image-icon: 1; height: 24px; width: 24px; }"];b.views.Composer.prototype.style=function(){var g=this,j=a.querySelector(":focus"),k=this.textarea.element,
m=k.hasAttribute("placeholder"),n=m&&k.getAttribute("placeholder"),v=k.style.display,u=k.disabled,p;this.focusStylesHost=e.cloneNode(!1);this.blurStylesHost=e.cloneNode(!1);this.disabledStylesHost=e.cloneNode(!1);m&&k.removeAttribute("placeholder");k===j&&k.blur();k.disabled=!1;k.style.display=p="none";if(k.getAttribute("rows")&&"auto"===c.getStyle("height").from(k)||k.getAttribute("cols")&&"auto"===c.getStyle("width").from(k))k.style.display=p=v;c.copyStyles(h).from(k).to(this.iframe).andTo(this.blurStylesHost);
c.copyStyles(f).from(k).to(this.element).andTo(this.blurStylesHost);c.insertCSS(i).into(this.element.ownerDocument);k.disabled=!0;c.copyStyles(h).from(k).to(this.disabledStylesHost);c.copyStyles(f).from(k).to(this.disabledStylesHost);k.disabled=u;k.style.display=v;if(k.setActive)try{k.setActive()}catch(r){}else{var t=k.style,u=a.documentElement.scrollTop||a.body.scrollTop,q=a.documentElement.scrollLeft||a.body.scrollLeft,t={position:t.position,top:t.top,left:t.left,WebkitUserSelect:t.WebkitUserSelect};
c.setStyles({position:"absolute",top:"-99999px",left:"-99999px",WebkitUserSelect:"none"}).on(k);k.focus();c.setStyles(t).on(k);d.scrollTo&&d.scrollTo(q,u)}k.style.display=p;c.copyStyles(h).from(k).to(this.focusStylesHost);c.copyStyles(f).from(k).to(this.focusStylesHost);k.style.display=v;c.copyStyles(["display"]).from(k).to(this.iframe);var y=b.lang.array(h).without(["display"]);j?j.focus():k.blur();m&&k.setAttribute("placeholder",n);this.parent.on("focus:composer",function(){c.copyStyles(y).from(g.focusStylesHost).to(g.iframe);
c.copyStyles(f).from(g.focusStylesHost).to(g.element)});this.parent.on("blur:composer",function(){c.copyStyles(y).from(g.blurStylesHost).to(g.iframe);c.copyStyles(f).from(g.blurStylesHost).to(g.element)});this.parent.observe("disable:composer",function(){c.copyStyles(y).from(g.disabledStylesHost).to(g.iframe);c.copyStyles(f).from(g.disabledStylesHost).to(g.element)});this.parent.observe("enable:composer",function(){c.copyStyles(y).from(g.blurStylesHost).to(g.iframe);c.copyStyles(f).from(g.blurStylesHost).to(g.element)});
return this}})(wysihtml5);
(function(b){var c=b.dom,a=b.browser,d={66:"bold",73:"italic",85:"underline"};b.views.Composer.prototype.observe=function(){var e=this,f=this.getValue(),h=this.sandbox.getIframe(),i=this.element,g=a.supportsEventsInIframeCorrectly()?i:this.sandbox.getWindow();c.observe(h,"DOMNodeRemoved",function(){clearInterval(j);e.parent.fire("destroy:composer")});var j=setInterval(function(){c.contains(document.documentElement,h)||(clearInterval(j),e.parent.fire("destroy:composer"))},250);c.observe(g,"focus",
function(){e.parent.fire("focus").fire("focus:composer");setTimeout(function(){f=e.getValue()},0)});c.observe(g,"blur",function(){f!==e.getValue()&&e.parent.fire("change").fire("change:composer");e.parent.fire("blur").fire("blur:composer")});c.observe(i,"dragenter",function(){e.parent.fire("unset_placeholder")});c.observe(i,["drop","paste"],function(){setTimeout(function(){e.parent.fire("paste").fire("paste:composer")},0)});c.observe(i,"keyup",function(a){a=a.keyCode;(a===b.SPACE_KEY||a===b.ENTER_KEY)&&
e.parent.fire("newword:composer")});this.parent.on("paste:composer",function(){setTimeout(function(){e.parent.fire("newword:composer")},0)});a.canSelectImagesInContentEditable()||c.observe(i,"mousedown",function(a){var b=a.target;"IMG"===b.nodeName&&(e.selection.selectNode(b),a.preventDefault())});a.hasHistoryIssue()&&a.supportsSelectionModify()&&c.observe(i,"keydown",function(a){if(a.metaKey||a.ctrlKey){var b=a.keyCode,c=i.ownerDocument.defaultView.getSelection();if(37===b||39===b)37===b&&(c.modify("extend",
"left","lineboundary"),a.shiftKey||c.collapseToStart()),39===b&&(c.modify("extend","right","lineboundary"),a.shiftKey||c.collapseToEnd()),a.preventDefault()}});c.observe(i,"keydown",function(a){var b=d[a.keyCode];if((a.ctrlKey||a.metaKey)&&!a.altKey&&b)e.commands.exec(b),a.preventDefault()});c.observe(i,"keydown",function(a){var c=e.selection.getSelectedNode(!0),d=a.keyCode;if(c&&"IMG"===c.nodeName&&(d===b.BACKSPACE_KEY||d===b.DELETE_KEY))d=c.parentNode,d.removeChild(c),"A"===d.nodeName&&!d.firstChild&&
d.parentNode.removeChild(d),setTimeout(function(){b.quirks.redraw(i)},0),a.preventDefault()});a.hasIframeFocusIssue()&&(c.observe(this.iframe,"focus",function(){setTimeout(function(){e.doc.querySelector(":focus")!==e.element&&e.focus()},0)}),c.observe(this.element,"blur",function(){setTimeout(function(){e.selection.getSelection().removeAllRanges()},0)}));var k={IMG:"Image: ",A:"Link: "};c.observe(i,"mouseover",function(a){var a=a.target,b=a.nodeName;!("A"!==b&&"IMG"!==b)&&!a.hasAttribute("title")&&
(b=k[b]+(a.getAttribute("href")||a.getAttribute("src")),a.setAttribute("title",b))})}})(wysihtml5);
(function(b){b.views.Synchronizer=Base.extend({constructor:function(b,a,d){this.editor=b;this.textarea=a;this.composer=d;this._observe()},fromComposerToTextarea:function(c){this.textarea.setValue(b.lang.string(this.composer.getValue()).trim(),c)},fromTextareaToComposer:function(b){var a=this.textarea.getValue();a?this.composer.setValue(a,b):(this.composer.clear(),this.editor.fire("set_placeholder"))},sync:function(b){"textarea"===this.editor.currentView.name?this.fromTextareaToComposer(b):this.fromComposerToTextarea(b)},
_observe:function(){var c,a=this,d=this.textarea.element.form,e=function(){c=setInterval(function(){a.fromComposerToTextarea()},400)},f=function(){clearInterval(c);c=null};e();d&&(b.dom.observe(d,"submit",function(){a.sync(!0)}),b.dom.observe(d,"reset",function(){setTimeout(function(){a.fromTextareaToComposer()},0)}));this.editor.on("change_view",function(b){"composer"===b&&!c?(a.fromTextareaToComposer(!0),e()):"textarea"===b&&(a.fromComposerToTextarea(!0),f())});this.editor.on("destroy:composer",
f)}})})(wysihtml5);
wysihtml5.views.Textarea=wysihtml5.views.View.extend({name:"textarea",constructor:function(b,c,a){this.base(b,c,a);this._observe()},clear:function(){this.element.value=""},getValue:function(b){var c=this.isEmpty()?"":this.element.value;b&&(c=this.parent.parse(c));return c},setValue:function(b,c){c&&(b=this.parent.parse(b));this.element.value=b},hasPlaceholderSet:function(){var b=wysihtml5.browser.supportsPlaceholderAttributeOn(this.element),c=this.element.getAttribute("placeholder")||null,a=this.element.value;
return b&&!a||a===c},isEmpty:function(){return!wysihtml5.lang.string(this.element.value).trim()||this.hasPlaceholderSet()},_observe:function(){var b=this.element,c=this.parent,a={focusin:"focus",focusout:"blur"},d=wysihtml5.browser.supportsEvent("focusin")?["focusin","focusout","change"]:["focus","blur","change"];c.on("beforeload",function(){wysihtml5.dom.observe(b,d,function(b){b=a[b.type]||b.type;c.fire(b).fire(b+":textarea")});wysihtml5.dom.observe(b,["paste","drop"],function(){setTimeout(function(){c.fire("paste").fire("paste:textarea")},
0)})})}});
(function(b){var c=b.dom;b.toolbar.Dialog=b.lang.Dispatcher.extend({constructor:function(a,b){this.link=a;this.container=b},_observe:function(){if(!this._observed){var a=this,d=function(b){var c=a._serialize();c==a.elementToChange?a.fire("edit",c):a.fire("save",c);a.hide();b.preventDefault();b.stopPropagation()};c.observe(a.link,"click",function(){c.hasClass(a.link,"wysihtml5-command-dialog-opened")&&setTimeout(function(){a.hide()},0)});c.observe(this.container,"keydown",function(c){var e=c.keyCode;
e===b.ENTER_KEY&&d(c);e===b.ESCAPE_KEY&&a.hide()});c.delegate(this.container,"[data-wysihtml5-dialog-action=save]","click",d);c.delegate(this.container,"[data-wysihtml5-dialog-action=cancel]","click",function(b){a.fire("cancel");a.hide();b.preventDefault();b.stopPropagation()});for(var e=this.container.querySelectorAll("input, select, textarea"),f=0,h=e.length,i=function(){clearInterval(a.interval)};f<h;f++)c.observe(e[f],"change",i);this._observed=!0}},_serialize:function(){for(var a=this.elementToChange||
{},b=this.container.querySelectorAll("[data-wysihtml5-dialog-field]"),c=b.length,f=0;f<c;f++)a[b[f].getAttribute("data-wysihtml5-dialog-field")]=b[f].value;return a},_interpolate:function(a){for(var b,c,f=document.querySelector(":focus"),h=this.container.querySelectorAll("[data-wysihtml5-dialog-field]"),i=h.length,g=0;g<i;g++)b=h[g],b!==f&&!(a&&"hidden"===b.type)&&(c=b.getAttribute("data-wysihtml5-dialog-field"),c=this.elementToChange?this.elementToChange[c]||"":b.defaultValue,b.value=c)},show:function(a){if(!c.hasClass(this.link,
"wysihtml5-command-dialog-opened")){var b=this,e=this.container.querySelector("input, select, textarea");this.elementToChange=a;this._observe();this._interpolate();a&&(this.interval=setInterval(function(){b._interpolate(!0)},500));c.addClass(this.link,"wysihtml5-command-dialog-opened");this.container.style.display="";this.fire("show");if(e&&!a)try{e.focus()}catch(f){}}},hide:function(){clearInterval(this.interval);this.elementToChange=null;c.removeClass(this.link,"wysihtml5-command-dialog-opened");
this.container.style.display="none";this.fire("hide")}})})(wysihtml5);
(function(b){var c=b.dom,a={position:"relative"},d={left:0,margin:0,opacity:0,overflow:"hidden",padding:0,position:"absolute",top:0,zIndex:1},e={cursor:"inherit",fontSize:"50px",height:"50px",marginTop:"-25px",outline:0,padding:0,position:"absolute",right:"-4px",top:"50%"},f={"x-webkit-speech":"",speech:""};b.toolbar.Speech=function(h,i){var g=document.createElement("input");if(b.browser.supportsSpeechApiOn(g)){var j=h.editor.textarea.element.getAttribute("lang");j&&(f.lang=j);j=document.createElement("div");
b.lang.object(d).merge({width:i.offsetWidth+"px",height:i.offsetHeight+"px"});c.insert(g).into(j);c.insert(j).into(i);c.setStyles(e).on(g);c.setAttributes(f).on(g);c.setStyles(d).on(j);c.setStyles(a).on(i);c.observe(g,"onwebkitspeechchange"in g?"webkitspeechchange":"speechchange",function(){h.execCommand("insertText",g.value);g.value=""});c.observe(g,"click",function(a){c.hasClass(i,"wysihtml5-command-disabled")&&a.preventDefault();a.stopPropagation()})}else i.style.display="none"}})(wysihtml5);
(function(b){var c=b.dom;b.toolbar.Toolbar=Base.extend({constructor:function(a,c){this.editor=a;this.container="string"===typeof c?document.getElementById(c):c;this.composer=a.composer;this._getLinks("command");this._getLinks("action");this._observe();this.show();for(var e=this.container.querySelectorAll("[data-wysihtml5-command=insertSpeech]"),f=e.length,h=0;h<f;h++)new b.toolbar.Speech(this,e[h])},_getLinks:function(a){for(var c=this[a+"Links"]=b.lang.array(this.container.querySelectorAll("[data-wysihtml5-"+
a+"]")).get(),e=c.length,f=0,h=this[a+"Mapping"]={},i,g,j,k,m;f<e;f++)i=c[f],j=i.getAttribute("data-wysihtml5-"+a),k=i.getAttribute("data-wysihtml5-"+a+"-value"),g=this.container.querySelector("[data-wysihtml5-"+a+"-group='"+j+"']"),m=this._getDialog(i,j),h[j+":"+k]={link:i,group:g,name:j,value:k,dialog:m,state:!1}},_getDialog:function(a,c){var e=this,f=this.container.querySelector("[data-wysihtml5-dialog='"+c+"']"),h,i;f&&(h=new b.toolbar.Dialog(a,f),h.on("show",function(){i=e.composer.selection.getBookmark();
e.editor.fire("show:dialog",{command:c,dialogContainer:f,commandLink:a})}),h.on("save",function(b){i&&e.composer.selection.setBookmark(i);e._execCommand(c,b);e.editor.fire("save:dialog",{command:c,dialogContainer:f,commandLink:a})}),h.on("cancel",function(){e.editor.focus(!1);e.editor.fire("cancel:dialog",{command:c,dialogContainer:f,commandLink:a})}));return h},execCommand:function(a,b){if(!this.commandsDisabled){var c=this.commandMapping[a+":"+b];c&&c.dialog&&!c.state?c.dialog.show():this._execCommand(a,
b)}},_execCommand:function(a,b){this.editor.focus(!1);this.composer.commands.exec(a,b);this._updateLinkStates()},execAction:function(a){var b=this.editor;"change_view"===a&&(b.currentView===b.textarea?b.fire("change_view","composer"):b.fire("change_view","textarea"))},_observe:function(){for(var a=this,b=this.editor,e=this.container,f=this.commandLinks.concat(this.actionLinks),h=f.length,i=0;i<h;i++)c.setAttributes({href:"javascript:;",unselectable:"on"}).on(f[i]);c.delegate(e,"[data-wysihtml5-command], [data-wysihtml5-action]",
"mousedown",function(a){a.preventDefault()});c.delegate(e,"[data-wysihtml5-command]","click",function(b){var c=this.getAttribute("data-wysihtml5-command"),d=this.getAttribute("data-wysihtml5-command-value");a.execCommand(c,d);b.preventDefault()});c.delegate(e,"[data-wysihtml5-action]","click",function(b){var c=this.getAttribute("data-wysihtml5-action");a.execAction(c);b.preventDefault()});b.on("focus:composer",function(){a.bookmark=null;clearInterval(a.interval);a.interval=setInterval(function(){a._updateLinkStates()},
500)});b.on("blur:composer",function(){clearInterval(a.interval)});b.on("destroy:composer",function(){clearInterval(a.interval)});b.on("change_view",function(b){setTimeout(function(){a.commandsDisabled="composer"!==b;a._updateLinkStates();a.commandsDisabled?c.addClass(e,"wysihtml5-commands-disabled"):c.removeClass(e,"wysihtml5-commands-disabled")},0)})},_updateLinkStates:function(){var a=this.commandMapping,d=this.actionMapping,e,f,h;for(e in a)h=a[e],this.commandsDisabled?(f=!1,c.removeClass(h.link,
"wysihtml5-command-active"),h.group&&c.removeClass(h.group,"wysihtml5-command-active"),h.dialog&&h.dialog.hide()):(f=this.composer.commands.state(h.name,h.value),b.lang.object(f).isArray()&&(f=1===f.length?f[0]:!0),c.removeClass(h.link,"wysihtml5-command-disabled"),h.group&&c.removeClass(h.group,"wysihtml5-command-disabled")),h.state!==f&&((h.state=f)?(c.addClass(h.link,"wysihtml5-command-active"),h.group&&c.addClass(h.group,"wysihtml5-command-active"),h.dialog&&("object"===typeof f?h.dialog.show(f):
h.dialog.hide())):(c.removeClass(h.link,"wysihtml5-command-active"),h.group&&c.removeClass(h.group,"wysihtml5-command-active"),h.dialog&&h.dialog.hide()));for(e in d)a=d[e],"change_view"===a.name&&(a.state=this.editor.currentView===this.editor.textarea,a.state?c.addClass(a.link,"wysihtml5-action-active"):c.removeClass(a.link,"wysihtml5-action-active"))},show:function(){this.container.style.display=""},hide:function(){this.container.style.display="none"}})})(wysihtml5);
(function(b){var c={name:void 0,style:!0,toolbar:void 0,autoLink:!0,parserRules:{tags:{br:{},span:{},div:{},p:{}},classes:{}},parser:b.dom.parse,composerClassName:"wysihtml5-editor",bodyClassName:"wysihtml5-supported",useLineBreaks:!0,stylesheets:[],placeholderText:void 0,supportTouchDevices:!0};b.Editor=b.lang.Dispatcher.extend({constructor:function(a,d){this.textareaElement="string"===typeof a?document.getElementById(a):a;this.config=b.lang.object({}).merge(c).merge(d).get();this.currentView=this.textarea=
new b.views.Textarea(this,this.textareaElement,this.config);this._isCompatible=b.browser.supported();if(!this._isCompatible||!this.config.supportTouchDevices&&b.browser.isTouchDevice()){var e=this;setTimeout(function(){e.fire("beforeload").fire("load")},0)}else{b.dom.addClass(document.body,this.config.bodyClassName);this.currentView=this.composer=new b.views.Composer(this,this.textareaElement,this.config);"function"===typeof this.config.parser&&this._initParser();this.on("beforeload",function(){this.synchronizer=
new b.views.Synchronizer(this,this.textarea,this.composer);this.config.toolbar&&(this.toolbar=new b.toolbar.Toolbar(this,this.config.toolbar))});try{console.log("Heya! This page is using wysihtml5 for rich text editing. Check out https://github.com/xing/wysihtml5")}catch(f){}}},isCompatible:function(){return this._isCompatible},clear:function(){this.currentView.clear();return this},getValue:function(a){return this.currentView.getValue(a)},setValue:function(a,b){this.fire("unset_placeholder");if(!a)return this.clear();
this.currentView.setValue(a,b);return this},focus:function(a){this.currentView.focus(a);return this},disable:function(){this.currentView.disable();return this},enable:function(){this.currentView.enable();return this},isEmpty:function(){return this.currentView.isEmpty()},hasPlaceholderSet:function(){return this.currentView.hasPlaceholderSet()},parse:function(a){var c=this.config.parser(a,this.config.parserRules,this.composer.sandbox.getDocument(),!0);"object"===typeof a&&b.quirks.redraw(a);return c},
_initParser:function(){this.on("paste:composer",function(){var a=this;a.composer.selection.executeAndRestore(function(){b.quirks.cleanPastedHTML(a.composer.element);a.parse(a.composer.element)},!0)})}})})(wysihtml5);
/**
 * Full HTML5 compatibility rule set
 * These rules define which tags and css classes are supported and which tags should be specially treated.
 *
 * Examples based on this rule set:
 *
 *    <a href="http://foobar.com">foo</a>
 *    ... becomes ...
 *    <a href="http://foobar.com" target="_blank" rel="nofollow">foo</a>
 *
 *    <img align="left" src="http://foobar.com/image.png">
 *    ... becomes ...
 *    <img class="wysiwyg-float-left" src="http://foobar.com/image.png" alt="">
 *
 *    <div>foo<script>alert(document.cookie)</script></div>
 *    ... becomes ...
 *    <div>foo</div>
 *
 *    <marquee>foo</marquee>
 *    ... becomes ...
 *    <span>foo</marquee>
 *
 *    foo <br clear="both"> bar
 *    ... becomes ...
 *    foo <br class="wysiwyg-clear-both"> bar
 *
 *    <div>hello <iframe src="http://google.com"></iframe></div>
 *    ... becomes ...
 *    <div>hello </div>
 *
 *    <center>hello</center>
 *    ... becomes ...
 *    <div class="wysiwyg-text-align-center">hello</div>
 */

var wysihtml5ParserRules = {
    /**
     * CSS Class white-list
     * Following css classes won't be removed when parsed by the wysihtml5 html parser
     */
    "classes": {
        "wysiwyg-clear-both": 1,
        "wysiwyg-clear-left": 1,
        "wysiwyg-clear-right": 1,
        "wysiwyg-color-aqua": 1,
        "wysiwyg-color-black": 1,
        "wysiwyg-color-blue": 1,
        "wysiwyg-color-fuchsia": 1,
        "wysiwyg-color-gray": 1,
        "wysiwyg-color-green": 1,
        "wysiwyg-color-lime": 1,
        "wysiwyg-color-maroon": 1,
        "wysiwyg-color-navy": 1,
        "wysiwyg-color-olive": 1,
        "wysiwyg-color-purple": 1,
        "wysiwyg-color-red": 1,
        "wysiwyg-color-silver": 1,
        "wysiwyg-color-teal": 1,
        "wysiwyg-color-white": 1,
        "wysiwyg-color-yellow": 1,
        "wysiwyg-float-left": 1,
        "wysiwyg-float-right": 1,
        "wysiwyg-font-size-large": 1,
        "wysiwyg-font-size-larger": 1,
        "wysiwyg-font-size-medium": 1,
        "wysiwyg-font-size-small": 1,
        "wysiwyg-font-size-smaller": 1,
        "wysiwyg-font-size-x-large": 1,
        "wysiwyg-font-size-x-small": 1,
        "wysiwyg-font-size-xx-large": 1,
        "wysiwyg-font-size-xx-small": 1,
        "wysiwyg-text-align-center": 1,
        "wysiwyg-text-align-justify": 1,
        "wysiwyg-text-align-left": 1,
        "wysiwyg-text-align-right": 1
    },
    /**
     * Tag list
     *
     * Following options are available:
     *
     *    - add_class:        converts and deletes the given HTML4 attribute (align, clear, ...) via the given method to a css class
     *                        The following methods are implemented in wysihtml5.dom.parse:
     *                          - align_text:  converts align attribute values (right/left/center/justify) to their corresponding css class "wysiwyg-text-align-*")
                                  <p align="center">foo</p> ... becomes ... <p> class="wysiwyg-text-align-center">foo</p>
     *                          - clear_br:    converts clear attribute values left/right/all/both to their corresponding css class "wysiwyg-clear-*"
     *                            <br clear="all"> ... becomes ... <br class="wysiwyg-clear-both">
     *                          - align_img:    converts align attribute values (right/left) on <img> to their corresponding css class "wysiwyg-float-*"
     *                          
     *    - remove:             removes the element and it's content
     *
     *    - rename_tag:         renames the element to the given tag
     *
     *    - set_class:          adds the given class to the element (note: make sure that the class is in the "classes" white list above)
     *
     *    - set_attributes:     sets/overrides the given attributes
     *
     *    - check_attributes:   checks the given HTML attribute via the given method
     *                            - url:      checks whether the given string is an url, deletes the attribute if not
     *                            - alt:      strips unwanted characters. if the attribute is not set, then it gets set (to ensure valid and compatible HTML)
     *                            - numbers:  ensures that the attribute only contains numeric characters
     */
    "tags": {
        "tr": {
            "add_class": {
                "align": "align_text"
            }
        },
        "strike": {
            "remove": 1
        },
        "form": {
            "rename_tag": "div"
        },
        "rt": {
            "rename_tag": "span"
        },
        "code": {},
        "acronym": {
            "rename_tag": "span"
        },
        "br": {
            "add_class": {
                "clear": "clear_br"
            }
        },
        "details": {
            "rename_tag": "div"
        },
        "h4": {
            "add_class": {
                "align": "align_text"
            }
        },
        "em": {},
        "title": {
            "remove": 1
        },
        "multicol": {
            "rename_tag": "div"
        },
        "figure": {
            "rename_tag": "div"
        },
        "xmp": {
            "rename_tag": "span"
        },
        "small": {
            "rename_tag": "span",
            "set_class": "wysiwyg-font-size-smaller"
        },
        "area": {
            "remove": 1
        },
        "time": {
            "rename_tag": "span"
        },
        "dir": {
            "rename_tag": "ul"
        },
        "bdi": {
            "rename_tag": "span"
        },
        "command": {
            "remove": 1
        },
        "ul": {},
        "progress": {
            "rename_tag": "span"
        },
        "dfn": {
            "rename_tag": "span"
        },
        "iframe": {
            "remove": 1
        },
        "figcaption": {
            "rename_tag": "div"
        },
        "a": {
            "check_attributes": {
                "href": "url"
            },
            "set_attributes": {
                "rel": "nofollow",
                "target": "_blank"
            }
        },
        "img": {
            "check_attributes": {
                "width": "numbers",
                "alt": "alt",
                "src": "url",
                "height": "numbers"
            },
            "add_class": {
                "align": "align_img"
            }
        },
        "rb": {
            "rename_tag": "span"
        },
        "footer": {
            "rename_tag": "div"
        },
        "noframes": {
            "remove": 1
        },
        "abbr": {
            "rename_tag": "span"
        },
        "u": {},
        "bgsound": {
            "remove": 1
        },
        "sup": {
            "rename_tag": "span"
        },
        "address": {
            "rename_tag": "div"
        },
        "basefont": {
            "remove": 1
        },
        "nav": {
            "rename_tag": "div"
        },
        "h1": {
            "add_class": {
                "align": "align_text"
            }
        },
        "head": {
            "remove": 1
        },
        "tbody": {
            "add_class": {
                "align": "align_text"
            }
        },
        "dd": {
            "rename_tag": "div"
        },
        "s": {
            "rename_tag": "span"
        },
        "li": {},
        "td": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers"
            },
            "add_class": {
                "align": "align_text"
            }
        },
        "object": {
            "remove": 1
        },
        "div": {
            "add_class": {
                "align": "align_text"
            }
        },
        "option": {
            "rename_tag": "span"
        },
        "select": {
            "rename_tag": "span"
        },
        "i": {},
        "track": {
            "remove": 1
        },
        "wbr": {
            "remove": 1
        },
        "fieldset": {
            "rename_tag": "div"
        },
        "big": {
            "rename_tag": "span",
            "set_class": "wysiwyg-font-size-larger"
        },
        "button": {
            "rename_tag": "span"
        },
        "noscript": {
            "remove": 1
        },
        "svg": {
            "remove": 1
        },
        "input": {
            "remove": 1
        },
        "table": {},
        "keygen": {
            "remove": 1
        },
        "h5": {
            "add_class": {
                "align": "align_text"
            }
        },
        "meta": {
            "remove": 1
        },
        "map": {
            "rename_tag": "div"
        },
        "isindex": {
            "remove": 1
        },
        "mark": {
            "rename_tag": "span"
        },
        "caption": {
            "add_class": {
                "align": "align_text"
            }
        },
        "tfoot": {
            "add_class": {
                "align": "align_text"
            }
        },
        "base": {
            "remove": 1
        },
        "video": {
            "remove": 1
        },
        "strong": {},
        "canvas": {
            "remove": 1
        },
        "output": {
            "rename_tag": "span"
        },
        "marquee": {
            "rename_tag": "span"
        },
        "b": {},
        "q": {
            "check_attributes": {
                "cite": "url"
            }
        },
        "applet": {
            "remove": 1
        },
        "span": {},
        "rp": {
            "rename_tag": "span"
        },
        "spacer": {
            "remove": 1
        },
        "source": {
            "remove": 1
        },
        "aside": {
            "rename_tag": "div"
        },
        "frame": {
            "remove": 1
        },
        "section": {
            "rename_tag": "div"
        },
        "body": {
            "rename_tag": "div"
        },
        "ol": {},
        "nobr": {
            "rename_tag": "span"
        },
        "html": {
            "rename_tag": "div"
        },
        "summary": {
            "rename_tag": "span"
        },
        "var": {
            "rename_tag": "span"
        },
        "del": {
            "remove": 1
        },
        "blockquote": {
            "check_attributes": {
                "cite": "url"
            }
        },
        "style": {
            "remove": 1
        },
        "device": {
            "remove": 1
        },
        "meter": {
            "rename_tag": "span"
        },
        "h3": {
            "add_class": {
                "align": "align_text"
            }
        },
        "textarea": {
            "rename_tag": "span"
        },
        "embed": {
            "remove": 1
        },
        "hgroup": {
            "rename_tag": "div"
        },
        "font": {
            "rename_tag": "span",
            "add_class": {
                "size": "size_font"
            }
        },
        "tt": {
            "rename_tag": "span"
        },
        "noembed": {
            "remove": 1
        },
        "thead": {
            "add_class": {
                "align": "align_text"
            }
        },
        "blink": {
            "rename_tag": "span"
        },
        "plaintext": {
            "rename_tag": "span"
        },
        "xml": {
            "remove": 1
        },
        "h6": {
            "add_class": {
                "align": "align_text"
            }
        },
        "param": {
            "remove": 1
        },
        "th": {
            "check_attributes": {
                "rowspan": "numbers",
                "colspan": "numbers"
            },
            "add_class": {
                "align": "align_text"
            }
        },
        "legend": {
            "rename_tag": "span"
        },
        "hr": {},
        "label": {
            "rename_tag": "span"
        },
        "dl": {
            "rename_tag": "div"
        },
        "kbd": {
            "rename_tag": "span"
        },
        "listing": {
            "rename_tag": "div"
        },
        "dt": {
            "rename_tag": "span"
        },
        "nextid": {
            "remove": 1
        },
        "pre": {},
        "center": {
            "rename_tag": "div",
            "set_class": "wysiwyg-text-align-center"
        },
        "audio": {
            "remove": 1
        },
        "datalist": {
            "rename_tag": "span"
        },
        "samp": {
            "rename_tag": "span"
        },
        "col": {
            "remove": 1
        },
        "article": {
            "rename_tag": "div"
        },
        "cite": {},
        "link": {
            "remove": 1
        },
        "script": {
            "remove": 1
        },
        "bdo": {
            "rename_tag": "span"
        },
        "menu": {
            "rename_tag": "ul"
        },
        "colgroup": {
            "remove": 1
        },
        "ruby": {
            "rename_tag": "span"
        },
        "h2": {
            "add_class": {
                "align": "align_text"
            }
        },
        "ins": {
            "rename_tag": "span"
        },
        "p": {
            "add_class": {
                "align": "align_text"
            }
        },
        "sub": {
            "rename_tag": "span"
        },
        "comment": {
            "remove": 1
        },
        "frameset": {
            "remove": 1
        },
        "optgroup": {
            "rename_tag": "span"
        },
        "header": {
            "rename_tag": "div"
        }
    }
};
/**
 * EpicEditor - An Embeddable JavaScript Markdown Editor (https://github.com/OscarGodson/EpicEditor)
 * Copyright (c) 2011-2012, Oscar Godson. (MIT Licensed)
 */


(function (window, undefined) {
  /**
   * Applies attributes to a DOM object
   * @param  {object} context The DOM obj you want to apply the attributes to
   * @param  {object} attrs A key/value pair of attributes you want to apply
   * @returns {undefined}
   */
  function _applyAttrs(context, attrs) {
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        context[attr] = attrs[attr];
      }
    }
  }

  /**
   * Applies styles to a DOM object
   * @param  {object} context The DOM obj you want to apply the attributes to
   * @param  {object} attrs A key/value pair of attributes you want to apply
   * @returns {undefined}
   */
  function _applyStyles(context, attrs) {
    for (var attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        context.style[attr] = attrs[attr];
      }
    }
  }

  /**
   * Returns a DOM objects computed style
   * @param  {object} el The element you want to get the style from
   * @param  {string} styleProp The property you want to get from the element
   * @returns {string} Returns a string of the value. If property is not set it will return a blank string
   */
  function _getStyle(el, styleProp) {
    var x = el
      , y = null;
    if (window.getComputedStyle) {
      y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
    }
    else if (x.currentStyle) {
      y = x.currentStyle[styleProp];
    }
    return y;
  }

  /**
   * Saves the current style state for the styles requested, then applies styles
   * to overwrite the existing one. The old styles are returned as an object so
   * you can pass it back in when you want to revert back to the old style
   * @param   {object} el     The element to get the styles of
   * @param   {string} type   Can be "save" or "apply". apply will just apply styles you give it. Save will write styles
   * @param   {object} styles Key/value style/property pairs
   * @returns {object}
   */
  function _saveStyleState(el, type, styles) {
    var returnState = {}
      , style;
    if (type === 'save') {
      for (style in styles) {
        if (styles.hasOwnProperty(style)) {
          returnState[style] = _getStyle(el, style);
        }
      }
      // After it's all done saving all the previous states, change the styles
      _applyStyles(el, styles);
    }
    else if (type === 'apply') {
      _applyStyles(el, styles);
    }
    return returnState;
  }

  /**
   * Gets an elements total width including it's borders and padding
   * @param  {object} el The element to get the total width of
   * @returns {int}
   */
  function _outerWidth(el) {
    var b = parseInt(_getStyle(el, 'border-left-width'), 10) + parseInt(_getStyle(el, 'border-right-width'), 10)
      , p = parseInt(_getStyle(el, 'padding-left'), 10) + parseInt(_getStyle(el, 'padding-right'), 10)
      , w = el.offsetWidth
      , t;
    // For IE in case no border is set and it defaults to "medium"
    if (isNaN(b)) { b = 0; }
    t = b + p + w;
    return t;
  }

  /**
   * Gets an elements total height including it's borders and padding
   * @param  {object} el The element to get the total width of
   * @returns {int}
   */
  function _outerHeight(el) {
    var b = parseInt(_getStyle(el, 'border-top-width'), 10) + parseInt(_getStyle(el, 'border-bottom-width'), 10)
      , p = parseInt(_getStyle(el, 'padding-top'), 10) + parseInt(_getStyle(el, 'padding-bottom'), 10)
      , w = el.offsetHeight
      , t;
    // For IE in case no border is set and it defaults to "medium"
    if (isNaN(b)) { b = 0; }
    t = b + p + w;
    return t;
  }

  /**
   * Inserts a <link> tag specifically for CSS
   * @param  {string} path The path to the CSS file
   * @param  {object} context In what context you want to apply this to (document, iframe, etc)
   * @param  {string} id An id for you to reference later for changing properties of the <link>
   * @returns {undefined}
   */
  function _insertCSSLink(path, context, id) {
    id = id || '';
    var headID = context.getElementsByTagName("head")[0]
      , cssNode = context.createElement('link');
    
    _applyAttrs(cssNode, {
      type: 'text/css'
    , id: id
    , rel: 'stylesheet'
    , href: path
    , name: path
    , media: 'screen'
    });

    headID.appendChild(cssNode);
  }

  // Simply replaces a class (o), to a new class (n) on an element provided (e)
  function _replaceClass(e, o, n) {
    e.className = e.className.replace(o, n);
  }

  // Feature detects an iframe to get the inner document for writing to
  function _getIframeInnards(el) {
    return el.contentDocument || el.contentWindow.document;
  }

  // Grabs the text from an element and preserves whitespace
  function _getText(el) {
    var theText;
    // Make sure to check for type of string because if the body of the page
    // doesn't have any text it'll be "" which is falsey and will go into
    // the else which is meant for Firefox and shit will break
    if (typeof document.body.innerText == 'string') {
      theText = el.innerText;
    }
    else {
      // First replace <br>s before replacing the rest of the HTML
      theText = el.innerHTML.replace(/<br>/gi, "\n");
      // Now we can clean the HTML
      theText = theText.replace(/<(?:.|\n)*?>/gm, '');
      // Now fix HTML entities
      theText = theText.replace(/&lt;/gi, '<');
      theText = theText.replace(/&gt;/gi, '>');
    }
    return theText;
  }

  function _setText(el, content) {
    // If you want to know why we check for typeof string, see comment
    // in the _getText function
    if (typeof document.body.innerText == 'string') {
      content = content.replace(/ /g, '\u00a0');
      el.innerText = content;
    }
    else {
      // Don't convert lt/gt characters as HTML when viewing the editor window
      // TODO: Write a test to catch regressions for this
      content = content.replace(/</g, '&lt;');
      content = content.replace(/>/g, '&gt;');
      content = content.replace(/\n/g, '<br>');
      // Make sure to look for TWO spaces and replace with a space and &nbsp;
      // If you find and replace every space with a &nbsp; text will not wrap.
      // Hence the name (Non-Breaking-SPace).
      content = content.replace(/\s\s/g, ' &nbsp;')
      el.innerHTML = content;
    }
    return true;
  }

  /**
   * Will return the version number if the browser is IE. If not will return -1
   * TRY NEVER TO USE THIS AND USE FEATURE DETECTION IF POSSIBLE
   * @returns {Number} -1 if false or the version number if true
   */
  function _isIE() {
    var rv = -1 // Return value assumes failure.
      , ua = navigator.userAgent
      , re;
    if (navigator.appName == 'Microsoft Internet Explorer') {
      re = /MSIE ([0-9]{1,}[\.0-9]{0,})/;
      if (re.exec(ua) != null) {
        rv = parseFloat(RegExp.$1, 10);
      }
    }
    return rv;
  }

  /**
   * Same as the isIE(), but simply returns a boolean
   * THIS IS TERRIBLE AND IS ONLY USED BECAUSE FULLSCREEN IN SAFARI IS BORKED
   * If some other engine uses WebKit and has support for fullscreen they
   * probably wont get native fullscreen until Safari's fullscreen is fixed
   * @returns {Boolean} true if Safari
   */
  function _isSafari() {
    var n = window.navigator;
    return n.userAgent.indexOf('Safari') > -1 && n.userAgent.indexOf('Chrome') == -1;
  }

  /**
   * Same as the isIE(), but simply returns a boolean
   * THIS IS TERRIBLE ONLY USE IF ABSOLUTELY NEEDED
   * @returns {Boolean} true if Safari
   */
  function _isFirefox() {
    var n = window.navigator;
    return n.userAgent.indexOf('Firefox') > -1 && n.userAgent.indexOf('Seamonkey') == -1;
  }

  /**
   * Determines if supplied value is a function
   * @param {object} object to determine type
   */
  function _isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

  /**
   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
   * @param {boolean} [deepMerge=false] If true, will deep merge meaning it will merge sub-objects like {obj:obj2{foo:'bar'}}
   * @param {object} first object
   * @param {object} second object
   * @returnss {object} a new object based on obj1 and obj2
   */
  function _mergeObjs() {
    // copy reference to target object
    var target = arguments[0] || {}
      , i = 1
      , length = arguments.length
      , deep = false
      , options
      , name
      , src
      , copy

    // Handle a deep copy situation
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1] || {};
      // skip the boolean and the target
      i = 2;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !_isFunction(target)) {
      target = {};
    }
    // extend jQuery itself if only one argument is passed
    if (length === i) {
      target = this;
      --i;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          // @NOTE: added hasOwnProperty check
          if (options.hasOwnProperty(name)) {
            src = target[name];
            copy = options[name];
            // Prevent never-ending loop
            if (target === copy) {
              continue;
            }
            // Recurse if we're merging object values
            if (deep && copy && typeof copy === "object" && !copy.nodeType) {
              target[name] = _mergeObjs(deep,
                // Never move original objects, clone them
                src || (copy.length != null ? [] : {})
                , copy);
            } else if (copy !== undefined) { // Don't bring in undefined values
              target[name] = copy;
            }
          }
        }
      }
    }

    // Return the modified object
    return target;
  }

  /**
   * Initiates the EpicEditor object and sets up offline storage as well
   * @class Represents an EpicEditor instance
   * @param {object} options An optional customization object
   * @returns {object} EpicEditor will be returned
   */
  function EpicEditor(options) {
    // Default settings will be overwritten/extended by options arg
    var self = this
      , opts = options || {}
      , _defaultFileSchema
      , _defaultFile
      , defaults = { container: 'epiceditor'
        , basePath: 'epiceditor'
        , textarea: undefined
        , clientSideStorage: true
        , localStorageName: 'epiceditor'
        , useNativeFullscreen: true
        , file: { name: null
        , defaultContent: ''
          , autoSave: 100 // Set to false for no auto saving
          }
        , theme: { base: '/themes/base/epiceditor.css'
          , preview: '/themes/preview/github.css'
          , editor: '/themes/editor/epic-dark.css'
          }
        , focusOnLoad: false
        , shortcut: { modifier: 18 // alt keycode
          , fullscreen: 70 // f keycode
          , preview: 80 // p keycode
          }
        , string: { togglePreview: 'Toggle Preview Mode'
          , toggleEdit: 'Toggle Edit Mode'
          , toggleFullscreen: 'Enter Fullscreen'
          }
        , parser: typeof marked == 'function' ? marked : null
        , button: { fullscreen: true, preview: true }
        }
      , defaultStorage;

    self.settings = _mergeObjs(true, defaults, opts);
    
    var buttons = self.settings.button;
    self._fullscreenEnabled = typeof(buttons) === 'object' ? typeof buttons.fullscreen === 'undefined' || buttons.fullscreen : buttons === true;
    self._editEnabled = typeof(buttons) === 'object' ? typeof buttons.edit === 'undefined' || buttons.edit : buttons === true;
    self._previewEnabled = typeof(buttons) === 'object' ? typeof buttons.preview === 'undefined' || buttons.preview : buttons === true;

    if (!(typeof self.settings.parser == 'function' && typeof self.settings.parser('TEST') == 'string')) {
      self.settings.parser = function (str) {
        return str;
      }
    }

    // If you put an absolute link as the path of any of the themes ignore the basePath
    // preview theme
    if (!self.settings.theme.preview.match(/^https?:\/\//)) {
      self.settings.theme.preview = self.settings.basePath + self.settings.theme.preview;
    }
    // editor theme
    if (!self.settings.theme.editor.match(/^https?:\/\//)) {
      self.settings.theme.editor = self.settings.basePath + self.settings.theme.editor;
    }
    // base theme
    if (!self.settings.theme.base.match(/^https?:\/\//)) {
      self.settings.theme.base = self.settings.basePath + self.settings.theme.base;
    }

    // Grab the container element and save it to self.element
    // if it's a string assume it's an ID and if it's an object
    // assume it's a DOM element
    if (typeof self.settings.container == 'string') {
      self.element = document.getElementById(self.settings.container);
    }
    else if (typeof self.settings.container == 'object') {
      self.element = self.settings.container;
    }
    
    // Figure out the file name. If no file name is given we'll use the ID.
    // If there's no ID either we'll use a namespaced file name that's incremented
    // based on the calling order. As long as it doesn't change, drafts will be saved.
    if (!self.settings.file.name) {
      if (typeof self.settings.container == 'string') {
        self.settings.file.name = self.settings.container;
      }
      else if (typeof self.settings.container == 'object') {
        if (self.element.id) {
          self.settings.file.name = self.element.id;
        }
        else {
          if (!EpicEditor._data.unnamedEditors) {
            EpicEditor._data.unnamedEditors = [];
          }
          EpicEditor._data.unnamedEditors.push(self);
          self.settings.file.name = '__epiceditor-untitled-' + EpicEditor._data.unnamedEditors.length;
        }
      }
    }

    // Protect the id and overwrite if passed in as an option
    // TODO: Put underscrore to denote that this is private
    self._instanceId = 'epiceditor-' + Math.round(Math.random() * 100000);
    self._storage = {};
    self._canSave = true;

    // Setup local storage of files
    self._defaultFileSchema = function () {
      return {
        content: self.settings.file.defaultContent
      , created: new Date()
      , modified: new Date()
      }
    }

    if (localStorage && self.settings.clientSideStorage) {
      this._storage = localStorage;
      if (this._storage[self.settings.localStorageName] && self.getFiles(self.settings.file.name) === undefined) {
        _defaultFile = self.getFiles(self.settings.file.name);
        _defaultFile = self._defaultFileSchema();
        _defaultFile.content = self.settings.file.defaultContent;
      }
    }

    if (!this._storage[self.settings.localStorageName]) {
      defaultStorage = {};
      defaultStorage[self.settings.file.name] = self._defaultFileSchema();
      defaultStorage = JSON.stringify(defaultStorage);
      this._storage[self.settings.localStorageName] = defaultStorage;
    }

    // A string to prepend files with to save draft versions of files
    // and reset all preview drafts on each load!
    self._previewDraftLocation = '__draft-';
    self._storage[self._previewDraftLocation + self.settings.localStorageName] = self._storage[self.settings.localStorageName];

    // This needs to replace the use of classes to check the state of EE
    self._eeState = {
      fullscreen: false
    , preview: false
    , edit: false
    , loaded: false
    , unloaded: false
    }

    // Now that it exists, allow binding of events if it doesn't exist yet
    if (!self.events) {
      self.events = {};
    }

    return this;
  }

  /**
   * Inserts the EpicEditor into the DOM via an iframe and gets it ready for editing and previewing
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.load = function (callback) {

    // Get out early if it's already loaded
    if (this.is('loaded')) { return this; }

    // TODO: Gotta get the privates with underscores!
    // TODO: Gotta document what these are for...
    var self = this
      , _HtmlTemplates
      , iframeElement
      , baseTag
      , utilBtns
      , utilBar
      , utilBarTimer
      , keypressTimer
      , mousePos = { y: -1, x: -1 }
      , _elementStates
      , _isInEdit
      , nativeFs = false
      , nativeFsWebkit = false
      , nativeFsMoz = false
      , nativeFsW3C = false
      , fsElement
      , isMod = false
      , isCtrl = false
      , eventableIframes
      , i; // i is reused for loops

    // Startup is a way to check if this EpicEditor is starting up. Useful for
    // checking and doing certain things before EpicEditor emits a load event.
    self._eeState.startup = true;

    if (self.settings.useNativeFullscreen) {
      nativeFsWebkit = document.body.webkitRequestFullScreen ? true : false;
      nativeFsMoz = document.body.mozRequestFullScreen ? true : false;
      nativeFsW3C = document.body.requestFullscreen ? true : false;
      nativeFs = nativeFsWebkit || nativeFsMoz || nativeFsW3C;
    }

    // Fucking Safari's native fullscreen works terribly
    // REMOVE THIS IF SAFARI 7 WORKS BETTER
    if (_isSafari()) {
      nativeFs = false;
      nativeFsWebkit = false;
    }

    // It opens edit mode by default (for now);
    if (!self.is('edit') && !self.is('preview')) {
      self._eeState.edit = true;
    }

    callback = callback || function () {};

    // The editor HTML
    // TODO: edit-mode class should be dynamically added
    _HtmlTemplates = {
      // This is wrapping iframe element. It contains the other two iframes and the utilbar
      chrome:   '<div id="epiceditor-wrapper" class="epiceditor-edit-mode">' +
                  '<iframe frameborder="0" id="epiceditor-editor-frame"></iframe>' +
                  '<iframe frameborder="0" id="epiceditor-previewer-frame"></iframe>' +
                  '<div id="epiceditor-utilbar">' +
                    (self._previewEnabled ? '<img width="30" src="' + this.settings.basePath + '/images/preview.png" title="' + this.settings.string.togglePreview + '" class="epiceditor-toggle-btn epiceditor-toggle-preview-btn"> ' : '') +
                    (self._editEnabled ? '<img width="30" src="' + this.settings.basePath + '/images/edit.png" title="' + this.settings.string.toggleEdit + '" class="epiceditor-toggle-btn epiceditor-toggle-edit-btn"> ' : '') +
                    (self._fullscreenEnabled ? '<img width="30" src="' + this.settings.basePath + '/images/fullscreen.png" title="' + this.settings.string.toggleFullscreen + '" class="epiceditor-fullscreen-btn">' : '') +
                  '</div>' +
                '</div>'
    
    // The previewer is just an empty box for the generated HTML to go into
    , previewer: '<div id="epiceditor-preview"></div>'
    };

    // Write an iframe and then select it for the editor
    self.element.innerHTML = '<iframe scrolling="no" frameborder="0" id= "' + self._instanceId + '"></iframe>';

    // Because browsers add things like invisible padding and margins and stuff
    // to iframes, we need to set manually set the height so that the height
    // doesn't keep increasing (by 2px?) every time reflow() is called.
    // FIXME: Figure out how to fix this without setting this
    self.element.style.height = self.element.offsetHeight + 'px';

    iframeElement = document.getElementById(self._instanceId);
    
    // Store a reference to the iframeElement itself
    self.iframeElement = iframeElement;

    // Grab the innards of the iframe (returns the document.body)
    // TODO: Change self.iframe to self.iframeDocument
    self.iframe = _getIframeInnards(iframeElement);
    self.iframe.open();
    self.iframe.write(_HtmlTemplates.chrome);

    // Now that we got the innards of the iframe, we can grab the other iframes
    self.editorIframe = self.iframe.getElementById('epiceditor-editor-frame')
    self.previewerIframe = self.iframe.getElementById('epiceditor-previewer-frame');

    // Setup the editor iframe
    self.editorIframeDocument = _getIframeInnards(self.editorIframe);
    self.editorIframeDocument.open();
    // Need something for... you guessed it, Firefox
    self.editorIframeDocument.write('');
    self.editorIframeDocument.close();
    
    // Setup the previewer iframe
    self.previewerIframeDocument = _getIframeInnards(self.previewerIframe);
    self.previewerIframeDocument.open();
    self.previewerIframeDocument.write(_HtmlTemplates.previewer);

    // Base tag is added so that links will open a new tab and not inside of the iframes
    baseTag = self.previewerIframeDocument.createElement('base');
    baseTag.target = '_blank';
    self.previewerIframeDocument.getElementsByTagName('head')[0].appendChild(baseTag);

    self.previewerIframeDocument.close();

    self.reflow();

    // Insert Base Stylesheet
    _insertCSSLink(self.settings.theme.base, self.iframe, 'theme');
    
    // Insert Editor Stylesheet
    _insertCSSLink(self.settings.theme.editor, self.editorIframeDocument, 'theme');
    
    // Insert Previewer Stylesheet
    _insertCSSLink(self.settings.theme.preview, self.previewerIframeDocument, 'theme');

    // Add a relative style to the overall wrapper to keep CSS relative to the editor
    self.iframe.getElementById('epiceditor-wrapper').style.position = 'relative';

    // Set the position to relative so we hide them with left: -999999px
    self.editorIframe.style.position = 'absolute';
    self.previewerIframe.style.position = 'absolute';

    // Now grab the editor and previewer for later use
    self.editor = self.editorIframeDocument.body;
    self.previewer = self.previewerIframeDocument.getElementById('epiceditor-preview');
   
    self.editor.contentEditable = true;
 
    // Firefox's <body> gets all fucked up so, to be sure, we need to hardcode it
    self.iframe.body.style.height = this.element.offsetHeight + 'px';

    // Should actually check what mode it's in!
    self.previewerIframe.style.left = '-999999px';

    // Keep long lines from being longer than the editor
    this.editorIframeDocument.body.style.wordWrap = 'break-word';

    // FIXME figure out why it needs +2 px
    if (_isIE() > -1) {
      this.previewer.style.height = parseInt(_getStyle(this.previewer, 'height'), 10) + 2;
    }

    // If there is a file to be opened with that filename and it has content...
    this.open(self.settings.file.name);

    if (self.settings.focusOnLoad) {
      // We need to wait until all three iframes are done loading by waiting until the parent
      // iframe's ready state == complete, then we can focus on the contenteditable
      self.iframe.addEventListener('readystatechange', function () {
        if (self.iframe.readyState == 'complete') {
          self.focus();
        }
      });
    }

    utilBtns = self.iframe.getElementById('epiceditor-utilbar');

    // TODO: Move into fullscreen setup function (_setupFullscreen)
    _elementStates = {}
    self._goFullscreen = function (el) {

      if (self.is('fullscreen')) {
        self._exitFullscreen(el);
        return;
      }

      if (nativeFs) {
        if (nativeFsWebkit) {
          el.webkitRequestFullScreen();
        }
        else if (nativeFsMoz) {
          el.mozRequestFullScreen();
        }
        else if (nativeFsW3C) {
          el.requestFullscreen();
        }
      }

      _isInEdit = self.is('edit');

      // Set the state of EE in fullscreen
      // We set edit and preview to true also because they're visible
      // we might want to allow fullscreen edit mode without preview (like a "zen" mode)
      self._eeState.fullscreen = true;
      self._eeState.edit = true;
      self._eeState.preview = true;

      // Cache calculations
      var windowInnerWidth = window.innerWidth
        , windowInnerHeight = window.innerHeight
        , windowOuterWidth = window.outerWidth
        , windowOuterHeight = window.outerHeight;

      // Without this the scrollbars will get hidden when scrolled to the bottom in faux fullscreen (see #66)
      if (!nativeFs) {
        windowOuterHeight = window.innerHeight;
      }

      // This MUST come first because the editor is 100% width so if we change the width of the iframe or wrapper
      // the editor's width wont be the same as before
      _elementStates.editorIframe = _saveStyleState(self.editorIframe, 'save', {
        'width': windowOuterWidth / 2 + 'px'
      , 'height': windowOuterHeight + 'px'
      , 'float': 'left' // Most browsers
      , 'cssFloat': 'left' // FF
      , 'styleFloat': 'left' // Older IEs
      , 'display': 'block'
      , 'position': 'static'
      , 'left': ''
      });

      // the previewer
      _elementStates.previewerIframe = _saveStyleState(self.previewerIframe, 'save', {
        'width': windowOuterWidth / 2 + 'px'
      , 'height': windowOuterHeight + 'px'
      , 'float': 'right' // Most browsers
      , 'cssFloat': 'right' // FF
      , 'styleFloat': 'right' // Older IEs
      , 'display': 'block'
      , 'position': 'static'
      , 'left': ''
      });

      // Setup the containing element CSS for fullscreen
      _elementStates.element = _saveStyleState(self.element, 'save', {
        'position': 'fixed'
      , 'top': '0'
      , 'left': '0'
      , 'width': '100%'
      , 'z-index': '9999' // Most browsers
      , 'zIndex': '9999' // Firefox
      , 'border': 'none'
      , 'margin': '0'
      // Should use the base styles background!
      , 'background': _getStyle(self.editor, 'background-color') // Try to hide the site below
      , 'height': windowInnerHeight + 'px'
      });

      // The iframe element
      _elementStates.iframeElement = _saveStyleState(self.iframeElement, 'save', {
        'width': windowOuterWidth + 'px'
      , 'height': windowInnerHeight + 'px'
      });

      // ...Oh, and hide the buttons and prevent scrolling
      utilBtns.style.visibility = 'hidden';

      if (!nativeFs) {
        document.body.style.overflow = 'hidden';
      }

      self.preview();

      self.focus();

      self.emit('fullscreenenter');
    };

    self._exitFullscreen = function (el) {
      _saveStyleState(self.element, 'apply', _elementStates.element);
      _saveStyleState(self.iframeElement, 'apply', _elementStates.iframeElement);
      _saveStyleState(self.editorIframe, 'apply', _elementStates.editorIframe);
      _saveStyleState(self.previewerIframe, 'apply', _elementStates.previewerIframe);

      // We want to always revert back to the original styles in the CSS so,
      // if it's a fluid width container it will expand on resize and not get
      // stuck at a specific width after closing fullscreen.
      self.element.style.width = self._eeState.reflowWidth ? self._eeState.reflowWidth : '';
      self.element.style.height = self._eeState.reflowHeight ? self._eeState.reflowHeight : '';

      utilBtns.style.visibility = 'visible';

      // Put the editor back in the right state
      // TODO: This is ugly... how do we make this nicer?
      // setting fullscreen to false here prevents the
      // native fs callback from calling this function again
      self._eeState.fullscreen = false;

      if (!nativeFs) {
        document.body.style.overflow = 'auto';
      }
      else {
        if (nativeFsWebkit) {
          document.webkitCancelFullScreen();
        }
        else if (nativeFsMoz) {
          document.mozCancelFullScreen();
        }
        else if (nativeFsW3C) {
          document.exitFullscreen();
        }
      }

      if (_isInEdit) {
        self.edit();
      }
      else {
        self.preview();
      }

      self.reflow();

      self.emit('fullscreenexit');
    };

    // This setups up live previews by triggering preview() IF in fullscreen on keyup
    self.editor.addEventListener('keyup', function () {
      if (keypressTimer) {
        window.clearTimeout(keypressTimer);
      }
      keypressTimer = window.setTimeout(function () {
        if (self.is('fullscreen')) {
          self.preview();
        }
      }, 250);
    });
    
    fsElement = self.iframeElement;

    // Sets up the onclick event on utility buttons
    utilBtns.addEventListener('click', function (e) {
      var targetClass = e.target.className;
      if (targetClass.indexOf('epiceditor-toggle-preview-btn') > -1) {
        self.preview();
      }
      else if (targetClass.indexOf('epiceditor-toggle-edit-btn') > -1) {
        self.edit();
      }
      else if (targetClass.indexOf('epiceditor-fullscreen-btn') > -1) {
        self._goFullscreen(fsElement);
      }
    });

    // Sets up the NATIVE fullscreen editor/previewer for WebKit
    if (nativeFsWebkit) {
      document.addEventListener('webkitfullscreenchange', function () {
        if (!document.webkitIsFullScreen && self._eeState.fullscreen) {
          self._exitFullscreen(fsElement);
        }
      }, false);
    }
    else if (nativeFsMoz) {
      document.addEventListener('mozfullscreenchange', function () {
        if (!document.mozFullScreen && self._eeState.fullscreen) {
          self._exitFullscreen(fsElement);
        }
      }, false);
    }
    else if (nativeFsW3C) {
      document.addEventListener('fullscreenchange', function () {
        if (document.fullscreenElement == null && self._eeState.fullscreen) {
          self._exitFullscreen(fsElement);
        }
      }, false);
    }

    // TODO: Move utilBar stuff into a utilBar setup function (_setupUtilBar)
    utilBar = self.iframe.getElementById('epiceditor-utilbar');

    // Hide it at first until they move their mouse
    utilBar.style.display = 'none';

    utilBar.addEventListener('mouseover', function () {
      if (utilBarTimer) {
        clearTimeout(utilBarTimer);
      }
    });

    function utilBarHandler(e) {
      // Here we check if the mouse has moves more than 5px in any direction before triggering the mousemove code
      // we do this for 2 reasons:
      // 1. On Mac OS X lion when you scroll and it does the iOS like "jump" when it hits the top/bottom of the page itll fire off
      //    a mousemove of a few pixels depending on how hard you scroll
      // 2. We give a slight buffer to the user in case he barely touches his touchpad or mouse and not trigger the UI
      if (Math.abs(mousePos.y - e.pageY) >= 5 || Math.abs(mousePos.x - e.pageX) >= 5) {
        utilBar.style.display = 'block';
        // if we have a timer already running, kill it out
        if (utilBarTimer) {
          clearTimeout(utilBarTimer);
        }

        // begin a new timer that hides our object after 1000 ms
        utilBarTimer = window.setTimeout(function () {
          utilBar.style.display = 'none';
        }, 1000);
      }
      mousePos = { y: e.pageY, x: e.pageX };
    }
 
    // Add keyboard shortcuts for convenience.
    function shortcutHandler(e) {
      if (e.keyCode == self.settings.shortcut.modifier) { isMod = true } // check for modifier press(default is alt key), save to var
      if (e.keyCode == 17) { isCtrl = true } // check for ctrl/cmnd press, in order to catch ctrl/cmnd + s

      // Check for alt+p and make sure were not in fullscreen - default shortcut to switch to preview
      if (isMod === true && e.keyCode == self.settings.shortcut.preview && !self.is('fullscreen')) {
        e.preventDefault();
        if (self.is('edit') && self._previewEnabled) {
          self.preview();
        }
        else if (self._editEnabled) {
          self.edit();
        }
      }
      // Check for alt+f - default shortcut to make editor fullscreen
      if (isMod === true && e.keyCode == self.settings.shortcut.fullscreen && self._fullscreenEnabled) {
        e.preventDefault();
        self._goFullscreen(fsElement);
      }

      // Set the modifier key to false once *any* key combo is completed
      // or else, on Windows, hitting the alt key will lock the isMod state to true (ticket #133)
      if (isMod === true && e.keyCode !== self.settings.shortcut.modifier) {
        isMod = false;
      }

      // When a user presses "esc", revert everything!
      if (e.keyCode == 27 && self.is('fullscreen')) {
        self._exitFullscreen(fsElement);
      }

      // Check for ctrl + s (since a lot of people do it out of habit) and make it do nothing
      if (isCtrl === true && e.keyCode == 83) {
        self.save();
        e.preventDefault();
        isCtrl = false;
      }

      // Do the same for Mac now (metaKey == cmd).
      if (e.metaKey && e.keyCode == 83) {
        self.save();
        e.preventDefault();
      }

    }
    
    function shortcutUpHandler(e) {
      if (e.keyCode == self.settings.shortcut.modifier) { isMod = false }
      if (e.keyCode == 17) { isCtrl = false }
    }

    // Hide and show the util bar based on mouse movements
    eventableIframes = [self.previewerIframeDocument, self.editorIframeDocument];
    
    for (i = 0; i < eventableIframes.length; i++) {
      eventableIframes[i].addEventListener('mousemove', function (e) {
        utilBarHandler(e);
      });
      eventableIframes[i].addEventListener('scroll', function (e) {
        utilBarHandler(e);
      });
      eventableIframes[i].addEventListener('keyup', function (e) {
        shortcutUpHandler(e);
      });
      eventableIframes[i].addEventListener('keydown', function (e) {
        shortcutHandler(e);
      });
    }

    // Save the document every 100ms by default
    // TODO: Move into autosave setup function (_setupAutoSave)
    if (self.settings.file.autoSave) {
      self._saveIntervalTimer = window.setInterval(function () {
        if (!self._canSave) {
          return;
        }
        self.save();
      }, self.settings.file.autoSave);
    }

    // Update a textarea automatically if a textarea is given so you don't need
    // AJAX to submit a form and instead fall back to normal form behavior
    if (self.settings.textarea) {
      self._setupTextareaSync();
    }

    window.addEventListener('resize', function () {
      // If NOT webkit, and in fullscreen, we need to account for browser resizing
      // we don't care about webkit because you can't resize in webkit's fullscreen
      if (self.is('fullscreen')) {
        _applyStyles(self.iframeElement, {
          'width': window.outerWidth + 'px'
        , 'height': window.innerHeight + 'px'
        });

        _applyStyles(self.element, {
          'height': window.innerHeight + 'px'
        });

        _applyStyles(self.previewerIframe, {
          'width': window.outerWidth / 2 + 'px'
        , 'height': window.innerHeight + 'px'
        });

        _applyStyles(self.editorIframe, {
          'width': window.outerWidth / 2 + 'px'
        , 'height': window.innerHeight + 'px'
        });
      }
      // Makes the editor support fluid width when not in fullscreen mode
      else if (!self.is('fullscreen')) {
        self.reflow();
      }
    });

    // Set states before flipping edit and preview modes
    self._eeState.loaded = true;
    self._eeState.unloaded = false;

    if (self.is('preview')) {
      self.preview();
    }
    else {
      self.edit();
    }

    self.iframe.close();
    self._eeState.startup = false;
    // The callback and call are the same thing, but different ways to access them
    callback.call(this);
    this.emit('load');
    return this;
  }

  EpicEditor.prototype._setupTextareaSync = function () {
    var self = this
      , textareaFileName = self.settings.file.name
      , _syncTextarea;

    // Even if autoSave is false, we want to make sure to keep the textarea synced
    // with the editor's content. One bad thing about this tho is that we're
    // creating two timers now in some configurations. We keep the textarea synced
    // by saving and opening the textarea content from the draft file storage.
    self._textareaSaveTimer = window.setInterval(function () {
      if (!self._canSave) {
        return;
      }
      self.save(true);
    }, 100);

    _syncTextarea = function () {
      self._textareaElement.value = self.exportFile(textareaFileName, 'text', true);
    }

    if (typeof self.settings.textarea == 'string') {
      self._textareaElement = document.getElementById(self.settings.textarea);
    }
    else if (typeof self.settings.textarea == 'object') {
      self._textareaElement = self.settings.textarea;
    }

    // On page load, if there's content in the textarea that means one of two
    // different things:
    //
    // 1. The editor didn't load and the user was writing in the textarea and
    // now he refreshed the page or the JS loaded and the textarea now has
    // content. If this is the case the user probably expects his content is
    // moved into the editor and not lose what he typed.
    //
    // 2. The developer put content in the textarea from some server side
    // code. In this case, the textarea will take precedence.
    //
    // If the developer wants drafts to be recoverable they should check if
    // the local file in localStorage's modified date is newer than the server.
    if (self._textareaElement.value !== '') {
      self.importFile(textareaFileName, self._textareaElement.value);

      // manually save draft after import so there is no delay between the
      // import and exporting in _syncTextarea. Without this, _syncTextarea
      // will pull the saved data from localStorage which will be <=100ms old.
      self.save(true);
    }

    // Update the textarea on load and pull from drafts
    _syncTextarea();

    // Make sure to keep it updated
    self.on('__update', _syncTextarea);
  }

  /**
   * Will NOT focus the editor if the editor is still starting up AND
   * focusOnLoad is set to false. This allows you to place this in code that
   * gets fired during .load() without worrying about it overriding the user's
   * option. For example use cases see preview() and edit().
   * @returns {undefined}
   */

  // Prevent focus when the user sets focusOnLoad to false by checking if the
  // editor is starting up AND if focusOnLoad is true
  EpicEditor.prototype._focusExceptOnLoad = function () {
    var self = this;
    if ((self._eeState.startup && self.settings.focusOnLoad) || !self._eeState.startup) {
      self.focus();
    }
  }

  /**
   * Will remove the editor, but not offline files
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.unload = function (callback) {

    // Make sure the editor isn't already unloaded.
    if (this.is('unloaded')) {
      throw new Error('Editor isn\'t loaded');
    }

    var self = this
      , editor = window.parent.document.getElementById(self._instanceId);

    editor.parentNode.removeChild(editor);
    self._eeState.loaded = false;
    self._eeState.unloaded = true;
    callback = callback || function () {};

    if (self.settings.textarea) {
      self._textareaElement.value = "";
      self.removeListener('__update');
    }

    if (self._saveIntervalTimer) {
      window.clearInterval(self._saveIntervalTimer);
    }
    if (self._textareaSaveTimer) {
      window.clearInterval(self._textareaSaveTimer);
    }

    callback.call(this);
    self.emit('unload');
    return self;
  }

  /**
   * reflow allows you to dynamically re-fit the editor in the parent without
   * having to unload and then reload the editor again.
   *
   * reflow will also emit a `reflow` event and will return the new dimensions.
   * If it's called without params it'll return the new width and height and if
   * it's called with just width or just height it'll just return the width or
   * height. It's returned as an object like: { width: '100px', height: '1px' }
   *
   * @param {string|null} kind Can either be 'width' or 'height' or null
   * if null, both the height and width will be resized
   * @param {function} callback A function to fire after the reflow is finished.
   * Will return the width / height in an obj as the first param of the callback.
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.reflow = function (kind, callback) {
    var self = this
      , widthDiff = _outerWidth(self.element) - self.element.offsetWidth
      , heightDiff = _outerHeight(self.element) - self.element.offsetHeight
      , elements = [self.iframeElement, self.editorIframe, self.previewerIframe]
      , eventData = {}
      , newWidth
      , newHeight;

    if (typeof kind == 'function') {
      callback = kind;
      kind = null;
    }

    if (!callback) {
      callback = function () {};
    }

    for (var x = 0; x < elements.length; x++) {
      if (!kind || kind == 'width') {
        newWidth = self.element.offsetWidth - widthDiff + 'px';
        elements[x].style.width = newWidth;
        self._eeState.reflowWidth = newWidth;
        eventData.width = newWidth;
      }
      if (!kind || kind == 'height') {
        newHeight = self.element.offsetHeight - heightDiff + 'px';
        elements[x].style.height = newHeight;
        self._eeState.reflowHeight = newHeight
        eventData.height = newHeight;
      }
    }

    self.emit('reflow', eventData);
    callback.call(this, eventData);
    return self;
  }

  /**
   * Will take the markdown and generate a preview view based on the theme
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.preview = function () {
    var self = this
      , x
      , theme = self.settings.theme.preview
      , anchors;

    _replaceClass(self.getElement('wrapper'), 'epiceditor-edit-mode', 'epiceditor-preview-mode');

    // Check if no CSS theme link exists
    if (!self.previewerIframeDocument.getElementById('theme')) {
      _insertCSSLink(theme, self.previewerIframeDocument, 'theme');
    }
    else if (self.previewerIframeDocument.getElementById('theme').name !== theme) {
      self.previewerIframeDocument.getElementById('theme').href = theme;
    }

    // Save a preview draft since it might not be saved to the real file yet
    self.save(true);

    // Add the generated draft HTML into the previewer
    self.previewer.innerHTML = self.exportFile(null, 'html', true);

    // Because we have a <base> tag so all links open in a new window we
    // need to prevent hash links from opening in a new window
    anchors = self.previewer.getElementsByTagName('a');
    for (x in anchors) {
      // If the link is a hash AND the links hostname is the same as the
      // current window's hostname (same page) then set the target to self
      if (anchors[x].hash && anchors[x].hostname == window.location.hostname) {
        anchors[x].target = '_self';
      }
    }

    // Hide the editor and display the previewer
    if (!self.is('fullscreen')) {
      self.editorIframe.style.left = '-999999px';
      self.previewerIframe.style.left = '';
      self._eeState.preview = true;
      self._eeState.edit = false;
      self._focusExceptOnLoad();
    }

    self.emit('preview');
    return self;
  }

  /**
   * Helper to focus on the editor iframe. Will figure out which iframe to
   * focus on based on which one is active and will handle the cross browser
   * issues with focusing on the iframe vs the document body.
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.focus = function (pageload) {
    var self = this
      , isPreview = self.is('preview')
      , focusElement = isPreview ? self.previewerIframeDocument.body
        : self.editorIframeDocument.body;

    if (_isFirefox() && isPreview) {
      focusElement = self.previewerIframe;
    }

    focusElement.focus();
    return this;
  }

  /**
   * Puts the editor into fullscreen mode
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.enterFullscreen = function () {
    if (this.is('fullscreen')) { return this; }
    this._goFullscreen(this.iframeElement);
    return this;
  }

  /**
   * Closes fullscreen mode if opened
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.exitFullscreen = function () {
    if (!this.is('fullscreen')) { return this; }
    this._exitFullscreen(this.iframeElement);
    return this;
  }

  /**
   * Hides the preview and shows the editor again
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.edit = function () {
    var self = this;
    _replaceClass(self.getElement('wrapper'), 'epiceditor-preview-mode', 'epiceditor-edit-mode');
    self._eeState.preview = false;
    self._eeState.edit = true;
    self.editorIframe.style.left = '';
    self.previewerIframe.style.left = '-999999px';
    self._focusExceptOnLoad();
    self.emit('edit');
    return this;
  }

  /**
   * Grabs a specificed HTML node. Use it as a shortcut to getting the iframe contents
   * @param   {String} name The name of the node (can be document, body, editor, previewer, or wrapper)
   * @returns {Object|Null}
   */
  EpicEditor.prototype.getElement = function (name) {
    var available = {
      "container": this.element
    , "wrapper": this.iframe.getElementById('epiceditor-wrapper')
    , "wrapperIframe": this.iframeElement
    , "editor": this.editorIframeDocument
    , "editorIframe": this.editorIframe
    , "previewer": this.previewerIframeDocument
    , "previewerIframe": this.previewerIframe
    }

    // Check that the given string is a possible option and verify the editor isn't unloaded
    // without this, you'd be given a reference to an object that no longer exists in the DOM
    if (!available[name] || this.is('unloaded')) {
      return null;
    }
    else {
      return available[name];
    }
  }

  /**
   * Returns a boolean of each "state" of the editor. For example "editor.is('loaded')" // returns true/false
   * @param {String} what the state you want to check for
   * @returns {Boolean}
   */
  EpicEditor.prototype.is = function (what) {
    var self = this;
    switch (what) {
    case 'loaded':
      return self._eeState.loaded;
    case 'unloaded':
      return self._eeState.unloaded
    case 'preview':
      return self._eeState.preview
    case 'edit':
      return self._eeState.edit;
    case 'fullscreen':
      return self._eeState.fullscreen;
   // TODO: This "works", but the tests are saying otherwise. Come back to this
   // and figure out how to fix it.
   // case 'focused':
   //   return document.activeElement == self.iframeElement;
    default:
      return false;
    }
  }

  /**
   * Opens a file
   * @param   {string} name The name of the file you want to open
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.open = function (name) {
    var self = this
      , defaultContent = self.settings.file.defaultContent
      , fileObj;
    name = name || self.settings.file.name;
    self.settings.file.name = name;
    if (this._storage[self.settings.localStorageName]) {
      fileObj = self.getFiles();
      if (fileObj[name] !== undefined) {
        _setText(self.editor, fileObj[name].content);
        self.emit('read');
      }
      else {
        _setText(self.editor, defaultContent);
        self.save(); // ensure a save
        self.emit('create');
      }
      self.previewer.innerHTML = self.exportFile(null, 'html');
      self.emit('open');
    }
    return this;
  }

  /**
   * Saves content for offline use
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.save = function (_isPreviewDraft) {
    var self = this
      , storage
      , isUpdate = false
      , file = self.settings.file.name
      , previewDraftName = ''
      , data = this._storage[previewDraftName + self.settings.localStorageName]
      , content = _getText(this.editor);

    if (_isPreviewDraft) {
      previewDraftName = self._previewDraftLocation;
    }

    // This could have been false but since we're manually saving
    // we know it's save to start autoSaving again
    this._canSave = true;

    // Guard against storage being wiped out without EpicEditor knowing
    // TODO: Emit saving error - storage seems to have been wiped
    if (data) {
      storage = JSON.parse(this._storage[previewDraftName + self.settings.localStorageName]);

      // If the file doesn't exist we need to create it
      if (storage[file] === undefined) {
        storage[file] = self._defaultFileSchema();
      }

      // If it does, we need to check if the content is different and
      // if it is, send the update event and update the timestamp
      else if (content !== storage[file].content) {
        storage[file].modified = new Date();
        isUpdate = true;
      }

      storage[file].content = content;
      this._storage[previewDraftName + self.settings.localStorageName] = JSON.stringify(storage);

      // After the content is actually changed, emit update so it emits the updated content
      if (isUpdate) {
        self.emit('update');
        // Emit a private update event so it can't get accidentally removed
        self.emit('__update');
      }

      this.emit('save');
    }

    return this;
  }

  /**
   * Removes a page
   * @param   {string} name The name of the file you want to remove from localStorage
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.remove = function (name) {
    var self = this
      , s;
    name = name || self.settings.file.name;

    // If you're trying to delete a page you have open, block saving
    if (name == self.settings.file.name) {
      self._canSave = false;
    }

    s = JSON.parse(this._storage[self.settings.localStorageName]);
    delete s[name];
    this._storage[self.settings.localStorageName] = JSON.stringify(s);
    this.emit('remove');
    return this;
  };

  /**
   * Renames a file
   * @param   {string} oldName The old file name
   * @param   {string} newName The new file name
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.rename = function (oldName, newName) {
    var self = this
      , s = JSON.parse(this._storage[self.settings.localStorageName]);
    s[newName] = s[oldName];
    delete s[oldName];
    this._storage[self.settings.localStorageName] = JSON.stringify(s);
    self.open(newName);
    return this;
  };

  /**
   * Imports a file and it's contents and opens it
   * @param   {string} name The name of the file you want to import (will overwrite existing files!)
   * @param   {string} content Content of the file you want to import
   * @param   {string} kind The kind of file you want to import (TBI)
   * @param   {object} meta Meta data you want to save with your file.
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.importFile = function (name, content, kind, meta) {
    var self = this
      , isNew = false;

    name = name || self.settings.file.name;
    content = content || '';
    kind = kind || 'md';
    meta = meta || {};
  
    if (JSON.parse(this._storage[self.settings.localStorageName])[name] === undefined) {
      isNew = true;
    }

    // Set our current file to the new file and update the content
    self.settings.file.name = name;
    _setText(self.editor, content);

    if (isNew) {
      self.emit('create');
    }

    self.save();

    if (self.is('fullscreen')) {
      self.preview();
    }

    return this;
  };

  /**
   * Exports a file as a string in a supported format
   * @param   {string} name Name of the file you want to export (case sensitive)
   * @param   {string} kind Kind of file you want the content in (currently supports html and text)
   * @returns {string|undefined}  The content of the file in the content given or undefined if it doesn't exist
   */
  EpicEditor.prototype.exportFile = function (name, kind, _isPreviewDraft) {
    var self = this
      , file
      , content;

    name = name || self.settings.file.name;
    kind = kind || 'text';
   
    file = self.getFiles(name, _isPreviewDraft);

    // If the file doesn't exist just return early with undefined
    if (file === undefined) {
      return;
    }

    content = file.content;
   
    switch (kind) {
    case 'html':
      // Get this, 2 spaces in a content editable actually converts to:
      // 0020 00a0, meaning, "space no-break space". So, manually convert
      // no-break spaces to spaces again before handing to marked.
      // Also, WebKit converts no-break to unicode equivalent and FF HTML.
      content = content.replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ');
      return self.settings.parser(content);
    case 'text':
      content = content.replace(/\u00a0/g, ' ').replace(/&nbsp;/g, ' ');
      return content;
    default:
      return content;
    }
  }

  EpicEditor.prototype.getFiles = function (name, _isPreviewDraft) {
    var previewDraftName = '';
    if (_isPreviewDraft) {
      previewDraftName = this._previewDraftLocation;
    }
    var files = JSON.parse(this._storage[previewDraftName + this.settings.localStorageName]);
    if (name) {
      return files[name];
    }
    else {
      return files;
    }
  }

  // EVENTS
  // TODO: Support for namespacing events like "preview.foo"
  /**
   * Sets up an event handler for a specified event
   * @param  {string} ev The event name
   * @param  {function} handler The callback to run when the event fires
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.on = function (ev, handler) {
    var self = this;
    if (!this.events[ev]) {
      this.events[ev] = [];
    }
    this.events[ev].push(handler);
    return self;
  };

  /**
   * This will emit or "trigger" an event specified
   * @param  {string} ev The event name
   * @param  {any} data Any data you want to pass into the callback
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.emit = function (ev, data) {
    var self = this
      , x;

    data = data || self.getFiles(self.settings.file.name);

    if (!this.events[ev]) {
      return;
    }

    function invokeHandler(handler) {
      handler.call(self, data);
    }

    for (x = 0; x < self.events[ev].length; x++) {
      invokeHandler(self.events[ev][x]);
    }

    return self;
  };

  /**
   * Will remove any listeners added from EpicEditor.on()
   * @param  {string} ev The event name
   * @param  {function} handler Handler to remove
   * @returns {object} EpicEditor will be returned
   */
  EpicEditor.prototype.removeListener = function (ev, handler) {
    var self = this;
    if (!handler) {
      this.events[ev] = [];
      return self;
    }
    if (!this.events[ev]) {
      return self;
    }
    // Otherwise a handler and event exist, so take care of it
    this.events[ev].splice(this.events[ev].indexOf(handler), 1);
    return self;
  }

  EpicEditor.version = '0.2.0';

  // Used to store information to be shared across editors
  EpicEditor._data = {};

  window.EpicEditor = EpicEditor;
})(window);

/**
 * marked - a markdown parser
 * Copyright (c) 2011-2013, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){3,} *\n*/,
  blockquote: /^( *>[^\n]+(\n[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment|closed|closing) *(?:\n{2,}|\s*$)/,
  def: /^ *\[([^\]]+)\]: *([^\s]+)(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^([^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', /\n+(?=(?: *[-*_]){3,} *(?:\n+|$))/)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,}) *(\w+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3]
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'list_start',
        ordered: isFinite(cap[2])
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item[item.length-1] === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: cap[1] === 'pre',
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[0]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>|])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)([\s\S]*?[^`])\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([^\s]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~])')(),
  url: /^(https?:\/\/[^\s]+[^.,:;"')\]\s])/,
  del: /^~{2,}([\s\S]+?)~{2,}/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, opt) {
  var inline = new InlineLexer(links, opt);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1][6] === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // url (gfm)
    if (cap = this.rules.url.exec(src)) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += '<a href="'
        + href
        + '">'
        + text
        + '</a>';
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0][0];
        src = cap[0].substring(1) + src;
        continue;
      }
      out += this.outputLink(cap, link);
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<strong>'
        + this.output(cap[2] || cap[1])
        + '</strong>';
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<em>'
        + this.output(cap[2] || cap[1])
        + '</em>';
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<code>'
        + escape(cap[2], true)
        + '</code>';
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<br>';
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += '<del>'
        + this.output(cap[1])
        + '</del>';
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[0]);
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  if (cap[0][0] !== '!') {
    return '<a href="'
      + escape(link.href)
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>'
      + this.output(cap[1])
      + '</a>';
  } else {
    return '<img src="'
      + escape(link.href)
      + '" alt="'
      + escape(cap[1])
      + '"'
      + (link.title
      ? ' title="'
      + escape(link.title)
      + '"'
      : '')
      + '>';
  }
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length-1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return '<hr>\n';
    }
    case 'heading': {
      return '<h'
        + this.token.depth
        + '>'
        + this.inline.output(this.token.text)
        + '</h'
        + this.token.depth
        + '>\n';
    }
    case 'code': {
      if (this.options.highlight) {
        var code = this.options.highlight(this.token.text, this.token.lang);
        if (code != null && code !== this.token.text) {
          this.token.escaped = true;
          this.token.text = code;
        }
      }

      if (!this.token.escaped) {
        this.token.text = escape(this.token.text, true);
      }

      return '<pre><code'
        + (this.token.lang
        ? ' class="lang-'
        + this.token.lang
        + '"'
        : '')
        + '>'
        + this.token.text
        + '</code></pre>\n';
    }
    case 'table': {
      var body = ''
        , heading
        , i
        , row
        , cell
        , j;

      // header
      body += '<thead>\n<tr>\n';
      for (i = 0; i < this.token.header.length; i++) {
        heading = this.inline.output(this.token.header[i]);
        body += this.token.align[i]
          ? '<th align="' + this.token.align[i] + '">' + heading + '</th>\n'
          : '<th>' + heading + '</th>\n';
      }
      body += '</tr>\n</thead>\n';

      // body
      body += '<tbody>\n'
      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];
        body += '<tr>\n';
        for (j = 0; j < row.length; j++) {
          cell = this.inline.output(row[j]);
          body += this.token.align[j]
            ? '<td align="' + this.token.align[j] + '">' + cell + '</td>\n'
            : '<td>' + cell + '</td>\n';
        }
        body += '</tr>\n';
      }
      body += '</tbody>\n';

      return '<table>\n'
        + body
        + '</table>\n';
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return '<blockquote>\n'
        + body
        + '</blockquote>\n';
    }
    case 'list_start': {
      var type = this.token.ordered ? 'ol' : 'ul'
        , body = '';

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return '<'
        + type
        + '>\n'
        + body
        + '</'
        + type
        + '>\n';
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return '<li>'
        + body
        + '</li>\n';
    }
    case 'html': {
      return !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
    }
    case 'paragraph': {
      return '<p>'
        + this.inline.output(this.token.text)
        + '</p>\n';
    }
    case 'text': {
      return '<p>'
        + this.parseText()
        + '</p>\n';
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

/**
 * Marked
 */

function marked(src, opt) {
  try {
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return 'An error occured:\n' + e.message;
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  marked.defaults = opt;
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  silent: false,
  highlight: null
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (typeof module !== 'undefined') {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());
(function() {
  var ready;

  ready = function() {
    return $('ol.sortable').nestedSortable({
      forcePlaceholderSize: true,
      placeholder: 'placeholder',
      handle: 'div',
      items: 'li',
      tolerance: 'pointer',
      toleranceElement: '> div',
      maxLevels: 2,
      update: function() {
        return $.post($(this).data('update-url'), $(this).nestedSortable('serialize'));
      }
    });
  };

  $(document).ready(ready);

  $(document).on('page:load', ready);

}).call(this);
(function() {
  var fixHelper, ready;

  ready = function() {
    return $('table.sortable tbody').sortable({
      helper: fixHelper,
      update: function() {
        return $.post($(this).data('update-url'), $(this).sortable('serialize'));
      }
    }).disableSelection();
  };

  fixHelper = function(e, ui) {
    $('.ui-sortable-placeholder').height($(this).height());
    ui.children().each(function() {
      return $(this).width($(this).width());
    });
    return ui;
  };

  $(document).ready(ready);

  $(document).on('page:load', ready);

}).call(this);
(function() {

  jQuery(function() {
    return $(document).on('click', '[data-collapse]', function() {
      var target;
      target = $(this).data('collapse');
      $(target).slideToggle();
      return false;
    });
  });

}).call(this);
(function() {
  var closeDropdown;

  jQuery(function() {
    $(document).on('click', 'body.dropdown', function() {
      return closeDropdown();
    });
    $(document).on('click', '[data-trigger="dropdown"]', function() {
      var body, dropdown, trigger;
      trigger = $(this);
      dropdown = trigger.siblings('ul');
      body = $('body');
      if (body.hasClass('dropdown')) {
        trigger.removeClass('button-active');
        body.removeClass('dropdown');
        dropdown.hide();
      } else {
        trigger.addClass('button-active');
        body.addClass('dropdown');
        dropdown.show();
      }
      return false;
    });
    return $(document).on('click', '[data-dropdown] ul', function(e) {
      return e.stopPropagation();
    });
  });

  closeDropdown = function() {
    $('body').removeClass('dropdown');
    $('[data-dropdown] ul').hide();
    $('[data-trigger="dropdown"]').removeClass('button-active');
    return false;
  };

}).call(this);
(function() {

  $.fn.galleryselect = function() {
    return this.each(function() {
      var gallery;
      gallery = $(this);
      if (gallery.data('multiselect') !== void 0) {
        return gallery.find('.item').click(function() {
          var checkbox;
          $(this).toggleClass('selected');
          checkbox = $(this).find('input:checkbox');
          return checkbox.prop("checked", !checkbox.prop("checked"));
        });
      } else {
        return gallery.find('.item').click(function() {
          gallery.find('.item').removeClass('selected');
          gallery.find('.item input').attr('checked', false);
          $(this).toggleClass('selected');
          return $(this).find('input').attr('checked', true);
        });
      }
    });
  };

}).call(this);
(function() {
  var hideModal, showModal;

  $.fn.modal = function() {
    return showModal($(this));
  };

  $(document).on('click', 'a[data-toggle="modal"]', function() {
    var link, modal;
    link = $(this);
    modal = $(link.attr('href'));
    return showModal(modal);
  });

  $(document).on('click', 'body.overlay', function() {
    return hideModal();
  });

  $(document).on('click', 'a[data-dismiss="modal"]', function() {
    return hideModal();
  });

  $(document).on('click', '.modal', function(e) {
    return e.stopPropagation();
  });

  hideModal = function() {
    $('body').removeClass('overlay');
    $('#overlay .modal').addClass('bounceOut');
    $('#overlay').fadeOut(300, function() {
      return $(this).remove();
    });
    return false;
  };

  showModal = function(element) {
    var modal;
    modal = element.clone();
    modal.addClass('animated flipInX');
    if ($('#overlay').length < 1) {
      $('body').append('<div id="overlay"></div>');
    }
    modal.css({
      "margin-top": -element.height()
    });
    modal.appendTo('#overlay');
    $('#overlay').fadeIn(200, function() {
      modal.show();
      return modal.animate({
        "margin-top": window.innerHeight / 8
      }, 200);
    });
    $('body').addClass('overlay');
    return false;
  };

}).call(this);
(function() {
  var closeNavigation, openNavigation, ready;

  ready = function() {
    if ($('nav#primary').length > 0) {
      $('body').prepend('<div id="navigation_panel" />');
    }
    $('#navigation_panel').append($('nav#primary').find('ul').first().clone());
    if ($('nav#secondary').length > 0) {
      $('nav#secondary ul').clone().addClass('secondary').appendTo('#navigation_panel');
      $('#navigation_panel ul.secondary').prepend('<li class="divider" />');
    }
    return $('#navigation_panel a').on('click', function() {
      closeNavigation();
      return Turbolinks.visit($(this).attr('href'));
    });
  };

  $(document).ready(ready);

  $(document).on('page:load', ready);

  $(document).on('click', 'a[data-toggle=navigation]', function() {
    $('html').toggleClass('navigation-open');
    return false;
  });

  $(document).on('click', '.navigation-open #wrapper', function() {
    return closeNavigation();
  });

  $(document).on('touchend', '.navigation-open #wrapper', function() {
    return closeNavigation();
  });

  openNavigation = function() {
    $('html').addClass('navigation-open');
    return false;
  };

  closeNavigation = function() {
    $('html').removeClass('navigation-open');
    return false;
  };

}).call(this);
(function() {

  $(document).on('click', 'a[data-dismiss="notification"]', function() {
    return $(this).parent('.notification').fadeOut(200, function() {
      return $(this).remove();
    });
  });

}).call(this);
(function() {
  var __slice = [].slice,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function($, window) {
    var SimpleSlider;
    SimpleSlider = (function() {

      function SimpleSlider(input, options) {
        var ratio,
          _this = this;
        this.input = input;
        this.defaultOptions = {
          animate: true,
          snapMid: false,
          classPrefix: null,
          classSuffix: null,
          theme: null
        };
        this.settings = $.extend({}, this.defaultOptions, options);
        if (this.settings.theme) {
          this.settings.classSuffix = "-" + this.settings.theme;
        }
        this.input.hide();
        this.slider = $("<div>").addClass("slider" + (this.settings.classSuffix || "")).css({
          position: "relative",
          userSelect: "none",
          boxSizing: "border-box"
        }).insertBefore(this.input);
        if (this.input.attr("id")) {
          this.slider.attr("id", this.input.attr("id") + "-slider");
        }
        this.track = $("<div>").addClass("track").css({
          position: "absolute",
          top: "50%",
          width: "100%",
          userSelect: "none",
          cursor: "pointer"
        }).appendTo(this.slider);
        this.dragger = $("<div>").addClass("dragger").css({
          position: "absolute",
          top: "50%",
          userSelect: "none",
          cursor: "pointer"
        }).appendTo(this.slider);
        this.slider.css({
          minHeight: this.dragger.outerHeight()
        });
        this.track.css({
          marginTop: this.track.outerHeight() / -2
        });
        this.dragger.css({
          marginTop: this.dragger.outerWidth() / -2,
          marginLeft: this.dragger.outerWidth() / -2
        });
        this.track.mousedown(function(e) {
          if (e.which !== 1) {
            return;
          }
          _this.domDrag(e.pageX, e.pageY, true);
          _this.dragging = true;
          return false;
        });
        this.dragger.mousedown(function(e) {
          if (e.which !== 1) {
            return;
          }
          _this.dragging = true;
          _this.dragger.addClass("dragging");
          _this.domDrag(e.pageX, e.pageY);
          return false;
        });
        $("body").mousemove(function(e) {
          if (_this.dragging) {
            _this.domDrag(e.pageX, e.pageY);
            return $("body").css({
              cursor: "pointer"
            });
          }
        }).mouseup(function(e) {
          if (_this.dragging) {
            _this.dragging = false;
            _this.dragger.removeClass("dragging");
            return $("body").css({
              cursor: "auto"
            });
          }
        });
        this.pagePos = 0;
        if (this.input.val() === "") {
          this.value = this.getRange().min;
          this.input.val(this.value);
        } else {
          this.value = this.nearestValidValue(this.input.val());
        }
        this.setSliderPositionFromValue(this.value);
        ratio = this.valueToRatio(this.value);
        this.input.trigger("slider:ready", {
          value: this.value,
          ratio: ratio,
          position: ratio * this.slider.outerWidth(),
          el: this.slider
        });
      }

      SimpleSlider.prototype.setRatio = function(ratio) {
        var value;
        ratio = Math.min(1, ratio);
        ratio = Math.max(0, ratio);
        value = this.ratioToValue(ratio);
        this.setSliderPositionFromValue(value);
        return this.valueChanged(value, ratio, "setRatio");
      };

      SimpleSlider.prototype.setValue = function(value) {
        var ratio;
        value = this.nearestValidValue(value);
        ratio = this.valueToRatio(value);
        this.setSliderPositionFromValue(value);
        return this.valueChanged(value, ratio, "setValue");
      };

      SimpleSlider.prototype.domDrag = function(pageX, pageY, animate) {
        var pagePos, ratio, value;
        if (animate == null) {
          animate = false;
        }
        pagePos = pageX - this.slider.offset().left;
        pagePos = Math.min(this.slider.outerWidth(), pagePos);
        pagePos = Math.max(0, pagePos);
        if (this.pagePos !== pagePos) {
          this.pagePos = pagePos;
          ratio = pagePos / this.slider.outerWidth();
          value = this.ratioToValue(ratio);
          this.valueChanged(value, ratio, "domDrag");
          if (this.settings.snap) {
            return this.setSliderPositionFromValue(value, animate);
          } else {
            return this.setSliderPosition(pagePos, animate);
          }
        }
      };

      SimpleSlider.prototype.setSliderPosition = function(position, animate) {
        if (animate == null) {
          animate = false;
        }
        if (animate && this.settings.animate) {
          return this.dragger.animate({
            left: position
          }, 200);
        } else {
          return this.dragger.css({
            left: position
          });
        }
      };

      SimpleSlider.prototype.setSliderPositionFromValue = function(value, animate) {
        var ratio;
        if (animate == null) {
          animate = false;
        }
        ratio = this.valueToRatio(value);
        return this.setSliderPosition(ratio * this.slider.outerWidth(), animate);
      };

      SimpleSlider.prototype.getRange = function() {
        if (this.settings.allowedValues) {
          return {
            min: Math.min.apply(Math, this.settings.allowedValues),
            max: Math.max.apply(Math, this.settings.allowedValues)
          };
        } else if (this.settings.range) {
          return {
            min: parseFloat(this.settings.range[0]),
            max: parseFloat(this.settings.range[1])
          };
        } else {
          return {
            min: 0,
            max: 1
          };
        }
      };

      SimpleSlider.prototype.nearestValidValue = function(rawValue) {
        var closest, maxSteps, range, steps;
        range = this.getRange();
        rawValue = Math.min(range.max, rawValue);
        rawValue = Math.max(range.min, rawValue);
        if (this.settings.allowedValues) {
          closest = null;
          $.each(this.settings.allowedValues, function() {
            if (closest === null || Math.abs(this - rawValue) < Math.abs(closest - rawValue)) {
              return closest = this;
            }
          });
          return closest;
        } else if (this.settings.step) {
          maxSteps = (range.max - range.min) / this.settings.step;
          steps = Math.floor((rawValue - range.min) / this.settings.step);
          if ((rawValue - range.min) % this.settings.step > this.settings.step / 2 && steps < maxSteps) {
            steps += 1;
          }
          return steps * this.settings.step + range.min;
        } else {
          return rawValue;
        }
      };

      SimpleSlider.prototype.valueToRatio = function(value) {
        var allowedVal, closest, closestIdx, idx, range, _i, _len, _ref;
        if (this.settings.equalSteps) {
          _ref = this.settings.allowedValues;
          for (idx = _i = 0, _len = _ref.length; _i < _len; idx = ++_i) {
            allowedVal = _ref[idx];
            if (!(typeof closest !== "undefined" && closest !== null) || Math.abs(allowedVal - value) < Math.abs(closest - value)) {
              closest = allowedVal;
              closestIdx = idx;
            }
          }
          if (this.settings.snapMid) {
            return (closestIdx + 0.5) / this.settings.allowedValues.length;
          } else {
            return closestIdx / (this.settings.allowedValues.length - 1);
          }
        } else {
          range = this.getRange();
          return (value - range.min) / (range.max - range.min);
        }
      };

      SimpleSlider.prototype.ratioToValue = function(ratio) {
        var idx, range, rawValue, step, steps;
        if (this.settings.equalSteps) {
          steps = this.settings.allowedValues.length;
          step = Math.round(ratio * steps - 0.5);
          idx = Math.min(step, this.settings.allowedValues.length - 1);
          return this.settings.allowedValues[idx];
        } else {
          range = this.getRange();
          rawValue = ratio * (range.max - range.min) + range.min;
          return this.nearestValidValue(rawValue);
        }
      };

      SimpleSlider.prototype.valueChanged = function(value, ratio, trigger) {
        var eventData;
        if (value.toString() === this.value.toString()) {
          return;
        }
        this.value = value;
        eventData = {
          value: value,
          ratio: ratio,
          position: ratio * this.slider.outerWidth(),
          trigger: trigger,
          el: this.slider
        };
        return this.input.val(value).trigger($.Event("change", eventData)).trigger("slider:changed", eventData);
      };

      return SimpleSlider;

    })();
    $.extend($.fn, {
      simpleSlider: function() {
        var params, publicMethods, settingsOrMethod;
        settingsOrMethod = arguments[0], params = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
        publicMethods = ["setRatio", "setValue"];
        return $(this).each(function() {
          var obj, settings;
          if (settingsOrMethod && __indexOf.call(publicMethods, settingsOrMethod) >= 0) {
            obj = $(this).data("slider-object");
            return obj[settingsOrMethod].apply(obj, params);
          } else {
            settings = settingsOrMethod;
            return $(this).data("slider-object", new SimpleSlider($(this), settings));
          }
        });
      }
    });
    return $(function() {
      return $("[data-slider]").each(function() {
        var $el, allowedValues, settings, x;
        $el = $(this);
        settings = {};
        allowedValues = $el.data("slider-values");
        if (allowedValues) {
          settings.allowedValues = (function() {
            var _i, _len, _ref, _results;
            _ref = allowedValues.split(",");
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              x = _ref[_i];
              _results.push(parseFloat(x));
            }
            return _results;
          })();
        }
        if ($el.data("slider-range")) {
          settings.range = $el.data("slider-range").split(",");
        }
        if ($el.data("slider-step")) {
          settings.step = $el.data("slider-step");
        }
        settings.snap = $el.data("slider-snap");
        settings.equalSteps = $el.data("slider-equal-steps");
        if ($el.data("slider-theme")) {
          settings.theme = $el.data("slider-theme");
        }
        return $el.simpleSlider(settings);
      });
    });
  })(this.jQuery || this.Zepto, this);

}).call(this);
(function() {
  var toggleSwitch;

  $.fn.spinaSwitch = function() {
    return this.each(function() {
      var input, klass, offIcon, onIcon;
      input = $(this);
      input.hide();
      if (input.is(':checked')) {
        klass = "checkbox activated";
      } else {
        klass = "checkbox";
      }
      onIcon = input.data('on') || "v";
      offIcon = input.data('off') || "x";
      return input.after('<a href="#' + input.attr("id") + '" class="' + klass + '">\
                  <span class="knob"></span>\
                  <i data-icon="' + onIcon + '"></i>\
                  <i data-icon="' + offIcon + '"></i>\
                </a>');
    });
  };

  $(document).on('click', 'a.checkbox', function(e) {
    return toggleSwitch(e);
  });

  $(document).on('touchend', 'a.checkbox', function(e) {
    return toggleSwitch(e);
  });

  toggleSwitch = function(e) {
    var checkbox, input;
    checkbox = $(e.currentTarget);
    input = $(checkbox.attr("href"));
    if (checkbox.hasClass('activated')) {
      checkbox.removeClass('activated');
      input.attr("checked", false);
    } else {
      checkbox.addClass('activated');
      input.attr("checked", true);
    }
    return false;
  };

}).call(this);
(function() {

  $(document).on('click', '.tabs li a', function() {
    var link, tabs;
    link = $(this);
    tabs = link.parents('.tabs');
    $('.tab-content').removeClass('active');
    tabs.find('li').removeClass('active');
    link.parent('li').addClass('active');
    $(link.attr('href')).addClass('active');
    return false;
  });

}).call(this);
(function() {

  jQuery(function() {
    setTimeout(function() {
      return window.scrollTo(0);
    }, 50);
    $('select').select_skin();
    $('.gallery-select').galleryselect();
    $('input[data-datepicker]').datepicker({
      dateFormat: 'dd MM yy',
      onClose: function(dateText, inst) {
        return $(inst.input).change().focusout();
      }
    });
    $('a.button:not(#nav-trigger)').addClass('fastbutton');
    $('input[data-customfile]').each(function() {
      return $(this).customFileInput();
    });
    $('.footable').footable();
    $('input[data-switch]').spinaSwitch();
    $('#login_wrapper').css('margin-top', ($(document).innerHeight() / 2) - ($('#login_wrapper').innerHeight() / 2) + 'px');
    $('.wysihtml5-container').each(function() {
      var editor, textarea, toolbar;
      textarea = $(this).find('textarea');
      toolbar = $(this).find('.toolbar');
      return editor = new wysihtml5.Editor(textarea.attr('id'), {
        toolbar: toolbar.attr('id'),
        useLineBreaks: false,
        parserRules: wysihtml5ParserRules
      });
    });
    $('.epiceditor').each(function() {
      var editor, id, textarea;
      textarea = $(this);
      textarea.hide();
      id = 'editor_' + $(this).attr('id');
      textarea.parent().prepend('<div id="' + id + '" style="height: 250px" />');
      editor = new EpicEditor({
        container: id,
        basePath: 'stylesheets/epiceditor/',
        clientSideStorage: false,
        theme: {
          base: 'base.css',
          preview: 'preview.css',
          editor: 'editor.css'
        }
      }).load();
      editor.importFile('file', textarea.val());
      return editor.on('save', function() {
        return textarea.val(editor.exportFile());
      });
    });
    $('input[data-colorpicker]').each(function() {
      $(this).wrap('<div class="colorpicker" />');
      return $(this).parent().append('<div class="colorpicker-container" />');
    });
    $('.colorpicker').each(function() {
      var colorpicker, field;
      colorpicker = $(this).find('.colorpicker-container');
      field = $(this).find('input');
      return $.farbtastic(colorpicker, function(color) {
        field.val(color);
        return field.css('color', color);
      });
    });
    $('.colorpicker input').focus(function() {
      var colorpicker, container;
      container = $(this).parent();
      colorpicker = container.find('.colorpicker-container');
      $.farbtastic(colorpicker).setColor($(this).val());
      return container.find('.farbtastic').show();
    });
    return $('.colorpicker input').blur(function() {
      var container;
      container = $(this).parent();
      return container.find('.farbtastic').hide();
    });
  });

}).call(this);
