(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about~edit-account~user-list"],{"0838":function(e,t,n){"use strict";var r=n("b6cf"),c=n.n(r);c.a},"0cce":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"input-field-wrapper",class:e.computedClass},[n("div",{staticClass:"input-field-group"},[n("div",{staticClass:"text-input"},[n("input",{attrs:{id:e.id,type:e.type,placeholder:e.placeholder,autocomplete:"off",required:""},domProps:{value:e.value},on:{keyup:e.inputChanged}}),n("label",{attrs:{for:e.id}},[e._v(e._s(e.placeholder))])])])])},c=[],a=n("2ef0"),u={name:"DefaultInputField",props:{placeholder:{type:String,default:""},type:{type:String,default:"text"},value:{type:String,required:!0},invalid:{type:Boolean,default:!1}},data:function(){return{id:null}},computed:{computedClass:function(){return{invalid:this.invalid}}},mounted:function(){this.id=Object(a["uniqueId"])("input-field-group-")},methods:{inputChanged:function(e){this.$emit("input",e.target.value)}}},i=u,o=(n("0838"),n("2877")),s=Object(o["a"])(i,r,c,!1,null,"1bf17283",null);t["a"]=s.exports},2532:function(e,t,n){"use strict";var r=n("23e7"),c=n("5a34"),a=n("1d80"),u=n("ab13");r({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~String(a(this)).indexOf(c(e),arguments.length>1?arguments[1]:void 0)}})},"29f5":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d81d");var r=n("5530");function c(e){return e.map((function(e){return Object(r["a"])({},e,{addresses:e.addresses.map((function(e){return Object(r["a"])({},e)}))})}))}},"2bdb":function(e,t,n){"use strict";var r=n("2db8"),c=n.n(r);c.a},"2db8":function(e,t,n){},"44e7":function(e,t,n){var r=n("861d"),c=n("c6b6"),a=n("b622"),u=a("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[u])?!!t:"RegExp"==c(e))}},"45fc":function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").some,a=n("a640"),u=n("ae40"),i=a("some"),o=u("some");r({target:"Array",proto:!0,forced:!i||!o},{some:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(e,t,n){var r=n("44e7");e.exports=function(e){if(r(e))throw TypeError("The method doesn't accept regular expressions");return e}},"5dd1":function(e,t,n){},6610:function(e,t){},ab13:function(e,t,n){var r=n("b622"),c=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[c]=!1,"/./"[e](t)}catch(r){}}return!1}},b6cf:function(e,t,n){},c074:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return s})),n.d(t,"h",(function(){return f}));var r={prefix:"fas",iconName:"angle-down",icon:[320,512,[],"f107","M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"]},c={prefix:"fas",iconName:"angle-up",icon:[320,512,[],"f106","M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"]},a={prefix:"fas",iconName:"check",icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]},u={prefix:"fas",iconName:"pen",icon:[512,512,[],"f304","M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"]},i={prefix:"fas",iconName:"plus",icon:[448,512,[],"f067","M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"]},o={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},s={prefix:"fas",iconName:"sign-in-alt",icon:[512,512,[],"f2f6","M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"]},f={prefix:"fas",iconName:"times",icon:[352,512,[],"f00d","M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"]}},c6d8:function(e,t,n){"use strict";n("4de4"),n("7db0"),n("caad"),n("d81d"),n("45fc"),n("b64b"),n("2532");var r=n("5530"),c=(n("96cf"),n("1da1")),a=n("2ef0"),u=n("0fac"),i=n("6b87"),o=n("29f5"),s=n("d2f8"),f=n("8a2c"),d=(n("6610"),{getAccounts:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["b"])(.1+.1*Math.random());case 2:return n=Object.keys(i["a"]).map((function(e){return Object(r["a"])({},i["a"][e],{key:e})})),e&&(n=n.filter((function(t){return t.email.toLowerCase().includes(e.toLowerCase())}))),t.abrupt("return",Object(o["a"])(n));case 5:case"end":return t.stop()}}),t)})))()},getAccount:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["b"])(.1+.2*Math.random());case 2:if(n=i["a"][e],!n){t.next=5;break}return t.abrupt("return",Object(r["a"])({},n,{addresses:n.addresses.map((function(e){return Object(r["a"])({},e)})),key:e}));case 5:return t.abrupt("return",null);case 6:case"end":return t.stop()}}),t)})))()},getAccountByEmail:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=Object.keys(i["a"]).map((function(e){return Object(r["a"])({},i["a"][e],{key:e})})).find((function(t){return t.email===e})),t.abrupt("return",n||null);case 2:case"end":return t.stop()}}),t)})))()},getSubAccounts:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["b"])(.1+.1*Math.random());case 2:return n=Object.keys(i["a"]).map((function(e){return Object(r["a"])({},i["a"][e],{key:e})})).filter((function(t){return t.parentUserKey===e})),t.abrupt("return",Object(o["a"])(n));case 4:case"end":return t.stop()}}),t)})))()},updateAccount:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i["a"][e.key]){t.next=2;break}return t.abrupt("return",!1);case 2:if(n=i["a"][e.key].email,c=e.email,void 0===c||n===c){t.next=9;break}if(!Object.keys(i["a"]).some((function(e){return i["a"][e].email===c}))){t.next=7;break}return t.abrupt("return",!1);case 7:s["a"][c]=Object(r["a"])({},s["a"][n]),delete s["a"][n];case 9:return i["a"][e.key]=Object(r["a"])({},i["a"][e.key],{},e),t.abrupt("return",!0);case 11:case"end":return t.stop()}}),t)})))()},addSubAccount:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!Object.keys(i["a"]).some((function(t){return i["a"][t].email===e.email}))){n.next=2;break}return n.abrupt("return",!1);case 2:return c=Object(a["uniqueId"])("account-"),i["a"][c]=Object(r["a"])({},i["b"],{},e,{key:c}),s["a"][e.email]={role:f["b"],password:t},n.abrupt("return",!0);case 6:case"end":return n.stop()}}),n)})))()},updatePassword:function(e,t,n){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()},deleteAccount:function(e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:delete i["a"][e];case 1:case"end":return t.stop()}}),t)})))()}});function l(){return d}n.d(t,"a",(function(){return l}))},caad:function(e,t,n){"use strict";var r=n("23e7"),c=n("4d64").includes,a=n("44d2"),u=n("ae40"),i=u("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!i},{includes:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d1cf:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return i}));n("caad"),n("2532"),n("96cf");var r=n("1da1"),c=n("3ca2"),a=n("8a2c");function u(e){switch(e){case a["a"]:return{name:"account-list"};case a["c"]:case a["b"]:return{name:"tab2"};default:return{name:"mainPage"}}}function i(e,t){return o.apply(this,arguments)}function o(){return o=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(c["a"])().getRole();case 2:if(r=e.sent,n.includes(r)){e.next=6;break}return t.push(u(r)),e.abrupt("return",!0);case 6:return e.abrupt("return",!1);case 7:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),c=n("b727").map,a=n("1dde"),u=n("ae40"),i=a("map"),o=u("map");r({target:"Array",proto:!0,forced:!i||!o},{map:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}})},dfc4:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageContent",class:e.containerClass},[e._t("default")],2)},c=[],a={name:"PageContent",props:{width:{type:String,default:"800px"},minWidth:{type:String,default:"unset"}},computed:{containerClass:function(){return{}},containerStyle:function(){return{width:this.width,minWidth:this.minWidth}}}},u=a,i=(n("2bdb"),n("2877")),o=Object(i["a"])(u,r,c,!1,null,"5612a700",null);t["a"]=o.exports},e356:function(e,t,n){"use strict";var r=n("5dd1"),c=n.n(r);c.a},e5f7:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"SmallButton",class:e.computedClass,attrs:{type:e.type},on:{click:e.click}},[n("p",{staticClass:"label"},[e._t("default")],2),e.icon?n("font-awesome-icon",{attrs:{icon:e.icon}}):e._e()],1)},c=[],a=n("ade3"),u={name:"SmallButton",props:{borderColor:{type:String,default:"white"},icon:{default:null},type:{type:String,default:"button"}},computed:{computedClass:function(){var e;return e={},Object(a["a"])(e,"border-".concat(this.borderColor),!0),Object(a["a"])(e,"hasIcon",null!=this.icon),e}},methods:{click:function(){this.$emit("click")}}},i=u,o=(n("e356"),n("2877")),s=Object(o["a"])(i,r,c,!1,null,"71ad1c4b",null);t["a"]=s.exports}}]);
//# sourceMappingURL=about~edit-account~user-list.68097e14.js.map