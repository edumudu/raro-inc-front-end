(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35805e71"],{"057f":function(t,e,r){var n=r("fc6a"),o=r("241c").f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return o(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?c(t):o(n(t))}},"0728":function(t,e,r){},"159b":function(t,e,r){var n=r("da84"),o=r("fdbc"),i=r("17c2"),a=r("9112");for(var c in o){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==i)try{a(u,"forEach",i)}catch(l){u.forEach=i}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,o=r("a640"),i=o("forEach");t.exports=i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,e,r){var n=r("d039"),o=r("b622"),i=r("2d00"),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2be4":function(t,e,r){"use strict";r("fd31")},"33f2":function(t,e,r){},"3b3b":function(t,e,r){"use strict";r("8df3")},"4ba9":function(t,e,r){"use strict";r("93cd")},"4de4":function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").filter,i=r("1dde"),a=i("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("0366"),o=r("7b0b"),i=r("9bdd"),a=r("e95a"),c=r("50c4"),s=r("8418"),u=r("35a1");t.exports=function(t){var e,r,l,f,p,d,h=o(t),v="function"==typeof this?this:Array,y=arguments.length,b=y>1?arguments[1]:void 0,m=void 0!==b,g=u(h),w=0;if(m&&(b=n(b,y>2?arguments[2]:void 0,2)),void 0==g||v==Array&&a(g))for(e=c(h.length),r=new v(e);e>w;w++)d=m?b(h[w],w):h[w],s(r,w,d);else for(f=g.call(h),p=f.next,r=new v;!(l=p.call(f)).done;w++)d=m?i(f,b,[l.value,w],!0):l.value,s(r,w,d);return r.length=w,r}},5580:function(t,e,r){},"65f0":function(t,e,r){var n=r("861d"),o=r("e8b5"),i=r("b622"),a=i("species");t.exports=function(t,e){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?n(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"68df":function(t,e,r){"use strict";r("0728")},"746f":function(t,e,r){var n=r("428f"),o=r("5135"),i=r("e538"),a=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},8418:function(t,e,r){"use strict";var n=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},"8df3":function(t,e,r){},"93cd":function(t,e,r){},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,l=e.regeneratorRuntime;if(l)u&&(t.exports=l);else{l=e.regeneratorRuntime=u?t.exports:{},l.wrap=w;var f="suspendedStart",p="suspendedYield",d="executing",h="completed",v={},y={};y[a]=function(){return this};var b=Object.getPrototypeOf,m=b&&b(b(V([])));m&&m!==n&&o.call(m,a)&&(y=m);var g=S.prototype=O.prototype=Object.create(y);_.prototype=g.constructor=S,S.constructor=_,S[s]=_.displayName="GeneratorFunction",l.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},l.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,S):(t.__proto__=S,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(g),t},l.awrap=function(t){return{__await:t}},P(j.prototype),j.prototype[c]=function(){return this},l.AsyncIterator=j,l.async=function(t,e,r,n){var o=new j(w(t,e,r,n));return l.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},P(g),g[s]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},l.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},l.values=V,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:V(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}}}function w(t,e,r,n){var o=e&&e.prototype instanceof O?e:O,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=E(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function O(){}function _(){}function S(){}function P(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),a)}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function E(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw i;return $()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=C(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?h:p,s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=h,r.method="throw",r.arg=s.arg)}}}function C(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,C(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function V(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:$}}function $(){return{value:r,done:!0}}}(function(){return this}()||Function("return this")())},"99af":function(t,e,r){"use strict";var n=r("23e7"),o=r("d039"),i=r("e8b5"),a=r("861d"),c=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),f=r("1dde"),p=r("b622"),d=r("2d00"),h=p("isConcatSpreadable"),v=9007199254740991,y="Maximum allowed index exceeded",b=d>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=f("concat"),g=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},w=!b||!m;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,r,n,o,i,a=c(this),f=l(a,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?a:arguments[e],g(i)){if(o=s(i.length),p+o>v)throw TypeError(y);for(r=0;r<o;r++,p++)r in i&&u(f,p,i[r])}else{if(p>=v)throw TypeError(y);u(f,p++,i)}return f.length=p,f}})},"9bdd":function(t,e,r){var n=r("825a"),o=r("2a62");t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(a){throw o(t),a}}},a4d3:function(t,e,r){"use strict";var n=r("23e7"),o=r("da84"),i=r("d066"),a=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),l=r("d039"),f=r("5135"),p=r("e8b5"),d=r("861d"),h=r("825a"),v=r("7b0b"),y=r("fc6a"),b=r("c04e"),m=r("5c6c"),g=r("7c73"),w=r("df75"),x=r("241c"),O=r("057f"),_=r("7418"),S=r("06cf"),P=r("9bf2"),j=r("d1e7"),E=r("9112"),C=r("6eeb"),L=r("5692"),A=r("f772"),k=r("d012"),V=r("90e3"),$=r("b622"),N=r("e538"),T=r("746f"),F=r("d44e"),I=r("69f3"),D=r("b727").forEach,q=A("hidden"),G="Symbol",B="prototype",M=$("toPrimitive"),R=I.set,z=I.getterFor(G),J=Object[B],H=o.Symbol,Y=i("JSON","stringify"),Q=S.f,W=P.f,U=O.f,K=j.f,X=L("symbols"),Z=L("op-symbols"),tt=L("string-to-symbol-registry"),et=L("symbol-to-string-registry"),rt=L("wks"),nt=o.QObject,ot=!nt||!nt[B]||!nt[B].findChild,it=c&&l((function(){return 7!=g(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Q(J,e);n&&delete J[e],W(t,e,r),n&&t!==J&&W(J,e,n)}:W,at=function(t,e){var r=X[t]=g(H[B]);return R(r,{type:G,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},st=function(t,e,r){t===J&&st(Z,e,r),h(t);var n=b(e,!0);return h(r),f(X,n)?(r.enumerable?(f(t,q)&&t[q][n]&&(t[q][n]=!1),r=g(r,{enumerable:m(0,!1)})):(f(t,q)||W(t,q,m(1,{})),t[q][n]=!0),it(t,n,r)):W(t,n,r)},ut=function(t,e){h(t);var r=y(e),n=w(r).concat(ht(r));return D(n,(function(e){c&&!ft.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?g(t):ut(g(t),e)},ft=function(t){var e=b(t,!0),r=K.call(this,e);return!(this===J&&f(X,e)&&!f(Z,e))&&(!(r||!f(this,e)||!f(X,e)||f(this,q)&&this[q][e])||r)},pt=function(t,e){var r=y(t),n=b(e,!0);if(r!==J||!f(X,n)||f(Z,n)){var o=Q(r,n);return!o||!f(X,n)||f(r,q)&&r[q][n]||(o.enumerable=!0),o}},dt=function(t){var e=U(y(t)),r=[];return D(e,(function(t){f(X,t)||f(k,t)||r.push(t)})),r},ht=function(t){var e=t===J,r=U(e?Z:y(t)),n=[];return D(r,(function(t){!f(X,t)||e&&!f(J,t)||n.push(X[t])})),n};if(s||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=V(t),r=function(t){this===J&&r.call(Z,t),f(this,q)&&f(this[q],e)&&(this[q][e]=!1),it(this,e,m(1,t))};return c&&ot&&it(J,e,{configurable:!0,set:r}),at(e,t)},C(H[B],"toString",(function(){return z(this).tag})),C(H,"withoutSetter",(function(t){return at(V(t),t)})),j.f=ft,P.f=st,S.f=pt,x.f=O.f=dt,_.f=ht,N.f=function(t){return at($(t),t)},c&&(W(H[B],"description",{configurable:!0,get:function(){return z(this).description}}),a||C(J,"propertyIsEnumerable",ft,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:H}),D(w(rt),(function(t){T(t)})),n({target:G,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var r=H(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:pt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:dt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),Y){var vt=!s||l((function(){var t=H();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!ct(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),o[1]=e,Y.apply(null,o)}})}H[B][M]||E(H[B],M,H[B].valueOf),F(H,G),k[q]=!0},a526:function(t,e,r){"use strict";r("33f2")},a630:function(t,e,r){var n=r("23e7"),o=r("4df4"),i=r("1c7e"),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b0c0:function(t,e,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(t){return""}}})},b64b:function(t,e,r){var n=r("23e7"),o=r("7b0b"),i=r("df75"),a=r("d039"),c=a((function(){i(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return i(o(t))}})},b727:function(t,e,r){var n=r("0366"),o=r("44ad"),i=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,l=4==t,f=6==t,p=7==t,d=5==t||f;return function(h,v,y,b){for(var m,g,w=i(h),x=o(w),O=n(v,y,3),_=a(x.length),S=0,P=b||c,j=e?P(h,_):r||p?P(h,0):void 0;_>S;S++)if((d||S in x)&&(m=x[S],g=O(m,S,w),t))if(e)j[S]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return S;case 2:s.call(j,m)}else switch(t){case 4:return!1;case 7:s.call(j,m)}return f?-1:u||l?l:j}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterOut:u(7)}},b951:function(t,e,r){},bb51:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("section",{staticClass:"section-page-header"},[t._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"page-header"},[r("div",[r("div",{staticClass:"banner"},[r("h4",{staticClass:"banner-uppertitle"},[t._v(" Vida Toda ")]),r("h1",{staticClass:"banner-title"},[t._v(" Bem Estar ")]),r("p",{staticClass:"banner-slogan"},[t._v(" Soluções completas para vivier mais e melhor ")]),r("v-button",{attrs:{tag:"a",href:"//example.com",size:"large"}},[t._v(" Quero uma consultoria ")])],1),r("catchphrase-card",{attrs:{title:"Pense nisso..",description:"O quanto o diagnóstico de uma doença grave, internação ou cirurgia\n            inesperada pode afeter, hoje, sua vida pessoal e financeira?"}})],1),r("div",[r("form-schedule",{staticClass:"form-schedule"})],1)])])]),r("section",[r("div",{staticClass:"container"},[r("section-title",[t._v(" Blog ")]),r("div",{staticClass:"cards-wrapper"},t._l(t.posts,(function(t){return r("post-card",{key:t.id,attrs:{cover:t.cover,title:t.title,description:t.body}})})),1)],1)])])},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",[r("source",{attrs:{media:"(min-width: 992px)",srcset:"https://picsum.photos/id/778/1280/768"}}),r("img",{staticClass:"page-header-packground",attrs:{src:"https://picsum.photos/id/778/650",alt:"page header background"}})])}];r("b64b"),r("a4d3"),r("4de4"),r("e439"),r("159b"),r("dbb4");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t){if(Array.isArray(t))return s(t)}r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function l(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}r("fb6a"),r("b0c0");function f(t,e){if(t){if("string"===typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t){return u(t)||l(t)||f(t)||p()}function h(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)}))}}r("96cf"),r("99af"),r("d81d");var y=r("2b0e"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("h2",{staticClass:"title"},[t._v(" Pronto para planejar seu sossego? ")]),r("p",{staticClass:"desciption"},[t._v(" Agende uma consultoria sem compromisso pelo formulario abaixo! ")]),r("div",{staticClass:"body"},[r("v-input",{attrs:{name:"name",label:"Nome"}}),r("v-input",{attrs:{name:"email",type:"email",label:"E-mail"}}),r("v-input",{attrs:{name:"maritial-status",label:"Estado Civil"}}),r("v-input",{attrs:{name:"profission",label:"Profissão"}}),r("v-input",{attrs:{name:"monthly-income",label:"Telefone/Whatsapp"}}),r("v-input",{attrs:{name:"name",label:"Renda Mensal"}}),r("div",{staticClass:"bottom"},[r("v-button",{attrs:{type:"submit",rounded:""}},[t._v(" Enviar ")])],1)],1)])},m=[],g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("label",[r("h3",{staticClass:"label"},[t._v(" "+t._s(t.label)+": ")]),"checkbox"===t.type?r("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"input",staticClass:"field",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{change:function(e){var r=t.inputValue,n=e.target,o=!!n.checked;if(Array.isArray(r)){var i=null,a=t._i(r,i);n.checked?a<0&&(t.inputValue=r.concat([i])):a>-1&&(t.inputValue=r.slice(0,a).concat(r.slice(a+1)))}else t.inputValue=o}}},"input",t.$attrs,!1),t.listeners)):"radio"===t.type?r("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"input",staticClass:"field",attrs:{type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{change:function(e){t.inputValue=null}}},"input",t.$attrs,!1),t.listeners)):r("input",t._g(t._b({directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"input",staticClass:"field",attrs:{type:t.type},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}},"input",t.$attrs,!1),t.listeners))])},w=[];function x(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function O(t,e){if(null==t)return{};var r,n,o=x(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var _=y["a"].extend({inheritAttrs:!1,props:{label:{type:String,required:!0},value:{type:String,default:""},type:{type:String,default:"text"}},computed:{inputValue:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},listeners:function(){var t=this.$listeners,e=(t.input,O(t,["input"]));return e}}}),S=_,P=(r("ee28"),r("2877")),j=Object(P["a"])(S,g,w,!1,null,"21db1c08",null),E=j.exports,C=function(){var t,e=this,r=e.$createElement,n=e._self._c||r;return n(e.tag,e._g({tag:"component",staticClass:"btn",class:(t={rounded:e.rounded},t[e.size]=!0,t[e.variant]=!0,t)},e.$listeners),[e._t("default")],2)},L=[],A=y["a"].extend({props:{tag:{type:String,default:"button"},variant:{type:String,default:"primary"},size:{type:String,default:"small"},rounded:{type:Boolean,default:!1}}}),k=A,V=(r("68df"),Object(P["a"])(k,C,L,!1,null,"72445a89",null)),$=V.exports,N=y["a"].extend({components:{VInput:E,VButton:$},methods:{handleSubmit:function(){}}}),T=N,F=(r("bb55"),Object(P["a"])(T,b,m,!1,null,"7e57af6c",null)),I=F.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"card"},[r("div",{staticClass:"head"},[r("img",{staticClass:"cover",attrs:{src:t.cover,alt:t.title}})]),r("div",{staticClass:"body"},[r("h2",{staticClass:"title"},[t._v(" "+t._s(t.title)+" ")]),r("p",{staticClass:"description"},[t._v(" "+t._s(t.description)+" ")])]),r("div",{staticClass:"footer"},[r("v-button",{attrs:{tag:"a",href:"//example.com",size:"small",rounded:""}},[t._v(" Continuar ")])],1)])},q=[],G=y["a"].extend({components:{VButton:$},props:{cover:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,required:!0}}}),B=G,M=(r("3b3b"),Object(P["a"])(B,D,q,!1,null,"46836932",null)),R=M.exports,z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"section-title"},[t._t("default")],2)},J=[],H=(r("a526"),{}),Y=Object(P["a"])(H,z,J,!1,null,"5234a6cb",null),Q=Y.exports,W=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"catchphrase"},[r("h3",{staticClass:"catchphrase-title"},[t._v(" "+t._s(t.title)+" ")]),r("p",{staticClass:"catchphrase-phrase"},[t._v(" "+t._s(t.description)+" ")])])},U=[],K=y["a"].extend({props:{title:{type:String,required:!0},description:{type:String,required:!0}}}),X=K,Z=(r("4ba9"),Object(P["a"])(X,W,U,!1,null,"1c27e7ec",null)),tt=Z.exports,et=y["a"].extend({name:"Home",components:{VButton:$,PostCard:R,FormSchedule:I,SectionTitle:Q,CatchphraseCard:tt},data:function(){return{perPage:10,totalPosts:0,posts:[],isLoading:!1}},created:function(){this.fetchPosts(this.currentPage,this.perPage),document.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){this.removeScrollListener()},computed:{currentPage:function(){return Math.max(Math.ceil(this.posts.length/this.perPage),1)},maxPages:function(){return Math.ceil(this.totalPosts/this.perPage)}},methods:{fetchPosts:function(t,e){var r=this;return v(regeneratorRuntime.mark((function n(){var o,i,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r.isLoading=!0,n.prev=1,n.next=4,r.$axios.get("/posts",{params:{_page:t,_limit:e}});case 4:o=n.sent,i=o.data,a=o.headers,r.totalPosts=a["x-total-count"],r.posts=[].concat(d(r.posts),d(i.map((function(t){return c(c({},t),{},{cover:"https://picsum.photos/450"})})))),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](1),alert("An error has occured when fetching new posts, try again later");case 14:return n.prev=14,r.isLoading=!1,n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})))()},handleScroll:function(){var t=260,e=window,r=e.pageYOffset,n=e.innerHeight,o=document.body.offsetHeight-(r+n);o<=t&&!this.isLoading&&(this.currentPage+1>=this.maxPages&&this.removeScrollListener(),this.fetchPosts(this.currentPage+1,this.perPage))},removeScrollListener:function(){document.removeEventListener("scroll",this.handleScroll)}}}),rt=et,nt=(r("2be4"),Object(P["a"])(rt,n,o,!1,null,"8fd0387c",null));e["default"]=nt.exports},bb55:function(t,e,r){"use strict";r("b951")},d28b:function(t,e,r){var n=r("746f");n("iterator")},d81d:function(t,e,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),a=i("map");n({target:"Array",proto:!0,forced:!a},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dbb4:function(t,e,r){var n=r("23e7"),o=r("83ab"),i=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),o=c.f,u=i(n),l={},f=0;while(u.length>f)r=o(n,e=u[f++]),void 0!==r&&s(l,e,r);return l}})},e01a:function(t,e,r){"use strict";var n=r("23e7"),o=r("83ab"),i=r("da84"),a=r("5135"),c=r("861d"),s=r("9bf2").f,u=r("e893"),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(p,l);var d=p.prototype=l.prototype;d.constructor=p;var h=d.toString,v="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=h.call(t);if(a(f,t))return"";var r=v?e.slice(7,-1):e.replace(y,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},e439:function(t,e,r){var n=r("23e7"),o=r("d039"),i=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=o((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},ee28:function(t,e,r){"use strict";r("5580")},fb6a:function(t,e,r){"use strict";var n=r("23e7"),o=r("861d"),i=r("e8b5"),a=r("23cb"),c=r("50c4"),s=r("fc6a"),u=r("8418"),l=r("b622"),f=r("1dde"),p=f("slice"),d=l("species"),h=[].slice,v=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,n,l,f=s(this),p=c(f.length),y=a(t,p),b=a(void 0===e?p:e,p);if(i(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[d],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return h.call(f,y,b);for(n=new(void 0===r?Array:r)(v(b-y,0)),l=0;y<b;y++,l++)y in f&&u(n,l,f[y]);return n.length=l,n}})},fd31:function(t,e,r){}}]);
//# sourceMappingURL=chunk-35805e71-legacy.c89eb957.js.map