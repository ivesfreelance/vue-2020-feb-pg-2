(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit-account"],{"0d5b":function(e,t,a){},"0ec8":function(e,t,a){"use strict";var n=a("0d5b"),r=a.n(n);r.a},"0f69":function(e,t,a){"use strict";var n=a("b35b"),r=a.n(n);r.a},1167:function(e,t,a){"use strict";var n=a("f2f7"),r=a.n(n);r.a},"17ca":function(e,t,a){},2015:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="fas",r="trash",s=448,c=512,o=[],i="f1f8",d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z";t.definition={prefix:n,iconName:r,icon:[s,c,o,i,d]},t.faTrash=t.definition,t.prefix=n,t.iconName=r,t.width=s,t.height=c,t.ligatures=o,t.unicode=i,t.svgPathData=d},2202:function(e,t,a){"use strict";var n=a("bbd4"),r=a.n(n);r.a},"287d":function(e,t,a){"use strict";var n=a("58b8"),r=a.n(n);r.a},3722:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"AccountForms"},[a("div",{staticClass:"panels"},[e._l(e.account.addresses,(function(t,n){return a("AddressPanel",{key:n,staticClass:"address-panel",attrs:{address:t,editable:e.isPanelEditable(n),title:"Adres "+(n+1)},on:{edit:function(t){return e.$emit("editAddress",n)},save:function(t){return e.$emit("saveChanges")}}})})),a("PasswordPanel",{attrs:{editable:e.passwordEditable},on:{edit:function(t){return e.$emit("editPassword")},save:function(t){return e.$emit("savePassword",t)}}}),e.isAllowedToDelete?a("DeleteAccountPanel",{attrs:{account:e.account},on:{delete:function(t){return e.$emit("delete")}}}):e._e()],2)])},r=[],s=(a("96cf"),a("1da1")),c=a("2015"),o=a("ecee"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("EditablePanel",{staticClass:"AddressPanel",attrs:{title:e.title,editable:e.editable},on:{edit:function(t){return e.$emit("edit")},save:function(t){return e.$emit("save")}}},[a("div",{staticClass:"fields"},[a("HybridInput",{staticClass:"field name",attrs:{editable:e.editable,placeholder:"imię"},model:{value:e.address.name,callback:function(t){e.$set(e.address,"name",t)},expression:"address.name"}}),a("HybridInput",{staticClass:"field surname",attrs:{editable:e.editable,placeholder:"nazwisko"},model:{value:e.address.surname,callback:function(t){e.$set(e.address,"surname",t)},expression:"address.surname"}}),a("HybridInput",{staticClass:"field street",attrs:{editable:e.editable,placeholder:"ulica"},model:{value:e.address.street,callback:function(t){e.$set(e.address,"street",t)},expression:"address.street"}}),a("HybridInput",{staticClass:"field post",attrs:{editable:e.editable,placeholder:"kod pocztowy"},model:{value:e.address.postCode,callback:function(t){e.$set(e.address,"postCode",t)},expression:"address.postCode"}}),a("HybridInput",{staticClass:"field city",attrs:{editable:e.editable,placeholder:"miasto"},model:{value:e.address.city,callback:function(t){e.$set(e.address,"city",t)},expression:"address.city"}})],1)])},d=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ActionPanel",{staticClass:"EditablePanel",attrs:{title:e.title},scopedSlots:e._u([{key:"actions",fn:function(){return[a("EditButton",{attrs:{editable:e.editable,editLabel:e.editLabel,cancelLabel:e.cancelLabel},on:{click:function(t){return e.$emit("edit")}}})]},proxy:!0}])},[a("form",{on:{submit:function(t){return t.preventDefault(),e.$emit("save")}}},[a("div",{staticClass:"content"},[e._t("default")],2),e.editable?a("SmallButton",{staticClass:"save-button",attrs:{type:"submit","border-color":"primary"}},[e._v(" Zapisz ")]):e._e()],1)])},l=[],p=a("c074"),f=a("e5f7"),b=a("f118"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ActionPanel"},[a("header",[a("h1",{staticClass:"title"},[e._v(e._s(e.title))]),e._t("actions")],2),a("div",{staticClass:"fields"},[e._t("default")],2)])},v=[],h={name:"ActionPanel",props:{title:{type:String,required:!0}}},w=h,g=(a("f496"),a("2877")),P=Object(g["a"])(w,m,v,!1,null,"38a7bc30",null),E=P.exports;o["c"].add(p["d"],p["h"]);var y={name:"EditablePanel",components:{ActionPanel:E,SmallButton:f["a"],EditButton:b["a"]},props:{title:{type:String,required:!0},editLabel:{type:String,default:"Edytuj"},cancelLabel:{type:String,default:"Anuluj"},editable:{type:Boolean,required:!0}}},x=y,_=(a("0f69"),Object(g["a"])(x,u,l,!1,null,"45401ab0",null)),O=_.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"HybridInput",class:e.computedClass},[a("DefaultInputField",{staticClass:"input-field",attrs:{placeholder:e.placeholder,type:e.type,value:e.value},on:{input:function(t){return e.$emit("input",t)}}}),a("div",{staticClass:"readonly-value"},[e._v(e._s(e.value||e.placeholder))])],1)},C=[],A=a("0cce");o["c"].add(p["d"],p["h"]);var k={name:"HybridInput",components:{DefaultInputField:A["a"]},props:{placeholder:{type:String,required:!0},type:{type:String,default:"text"},value:{required:!0},editable:{type:Boolean,required:!0}},computed:{computedClass:function(){return{editable:this.editable,empty:!this.value}}}},$=k,R=(a("83de"),Object(g["a"])($,j,C,!1,null,"70bb86f5",null)),M=R.exports,S={name:"AddressPanel",components:{EditablePanel:O,HybridInput:M},props:{editable:{type:Boolean,required:!0},address:{required:!0},title:{required:!0}}},D=S,I=(a("2202"),Object(g["a"])(D,i,d,!1,null,"1e495919",null)),H=I.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.invalid;return[a("EditablePanel",{staticClass:"PasswordPanel",attrs:{title:"Zmiana hasła",editLabel:"Zmień",editable:e.editable},on:{edit:e.toggleEditing,save:function(t){return e.saveChanges(n)}}},[a("div",{key:e.fieldsKey,staticClass:"fields",class:{editable:e.editable}},[e.needsToKnowOldPassword?a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("DefaultInputField",{attrs:{invalid:!!n[0],placeholder:"Obecne hasło",type:"password"},model:{value:e.currentPassword,callback:function(t){e.currentPassword=t},expression:"currentPassword"}}),n.length?a("InputError",{attrs:{message:n[0]}}):e._e()]}}],null,!0)}):e._e(),a("ValidationProvider",{attrs:{name:"confirm",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("DefaultInputField",{attrs:{invalid:!!n[0],placeholder:"Nowe hasło",type:"password"},model:{value:e.newPassword,callback:function(t){e.newPassword=t},expression:"newPassword"}}),n.length?a("InputError",{attrs:{message:n[0]}}):e._e()]}}],null,!0)}),a("ValidationProvider",{attrs:{rules:"required|password:@confirm"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("DefaultInputField",{staticClass:"repeated-password",attrs:{invalid:!!n[0],placeholder:"Powtórz nowe hasło",type:"password"},model:{value:e.repeatedPassword,callback:function(t){e.repeatedPassword=t},expression:"repeatedPassword"}}),n.length?a("InputError",{attrs:{message:n[0]}}):e._e()]}}],null,!0)})],1)])]}}])})},q=[],F=a("5530"),B=a("7bb1"),K=a("4c93"),z=a("9d30"),N=a("3ca2"),T=a("8a2c");Object(B["c"])("password",{params:["target"],validate:function(e,t){var a=t.target;return e===a},message:"Hasła muszą być takie same."}),Object(B["c"])("required",Object(F["a"])({},K["a"],{message:"Pole jest wymagane"}));var V={name:"PasswordPanel",components:{EditablePanel:O,DefaultInputField:A["a"],ValidationProvider:B["b"],ValidationObserver:B["a"],InputError:z["a"]},props:{editable:{type:Boolean}},computed:{needsToKnowOldPassword:function(){return this.role!==T["a"]}},data:function(){return{role:null,currentPassword:"",newPassword:"",repeatedPassword:"",fieldsKey:0}},methods:{toggleEditing:function(){this.$emit("edit")},saveChanges:function(e){e||this.$emit("save",{currentPassword:this.currentPassword,newPassword:this.newPassword})}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$watch("editable",(function(){e.editable&&(e.currentPassword="",e.newPassword="",e.repeatedPassword="",e.fieldsKey+=1)})),t.next=3,Object(N["a"])().getRole();case 3:e.role=t.sent;case 4:case"end":return t.stop()}}),t)})))()}},U=V,W=(a("addc"),Object(g["a"])(U,L,q,!1,null,"98749ff0",null)),Z=W.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"DeleteAccountPanel"},[a("ActionPanel",{staticClass:"delete-panel",attrs:{title:"Usuń konto"},scopedSlots:e._u([{key:"actions",fn:function(){return[a("SmallButton",{attrs:{"border-color":"danger",icon:"trash"},on:{click:function(t){e.confirmDeletePopup=!0}}},[e._v(" Usuń ")])]},proxy:!0}])}),a("ConfirmDeleteAccountPopup",{attrs:{enabled:e.confirmDeletePopup,accountEmail:e.account.email},on:{close:function(t){e.confirmDeletePopup=!1},confirm:function(t){return e.$emit("delete")}}})],1)},G=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Popup",{staticClass:"ConfirmDeleteAccountPopup",attrs:{enabled:e.enabled,width:"500px",minHeight:"200px"}},[a("h1",[e._v("Czy na pewno chcesz usunąć konto "),a("strong",[e._v('"'+e._s(e.accountEmail)+'"')]),e._v("?")]),a("div",{staticClass:"actions"},[a("SmallButton",{attrs:{"border-color":"primary"},nativeOn:{click:function(t){return e.$emit("confirm")}}},[e._v("Usuń")]),a("SmallButton",{nativeOn:{click:function(t){return e.$emit("close")}}},[e._v("Cofnij")])],1)])},X=[],Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Popup",class:e.containerClass},[a("div",{staticClass:"popup",style:e.containerStyle},[e._t("default")],2)])},ee=[],te={name:"Popup",props:{enabled:{type:Boolean,default:!0},width:{type:String,default:"800px"},height:{type:String,default:"unset"},minWidth:{type:String,default:"unset"},minHeight:{type:String,default:"unset"}},computed:{containerClass:function(){return{enabled:this.enabled}},containerStyle:function(){return{width:this.width,height:this.height,minWidth:this.minWidth,minHeight:this.minHeight}}}},ae=te,ne=(a("f87b"),Object(g["a"])(ae,Y,ee,!1,null,"cb41be2c",null)),re=ne.exports,se={name:"ConfirmDeleteAccountPopup",components:{Popup:re,SmallButton:f["a"]},props:{enabled:{type:Boolean,default:!0},accountEmail:{required:!0}}},ce=se,oe=(a("0ec8"),Object(g["a"])(ce,Q,X,!1,null,"ac38d43c",null)),ie=oe.exports,de={name:"DeleteAccountPanel",components:{ActionPanel:E,ConfirmDeleteAccountPopup:ie,SmallButton:f["a"]},props:{account:{required:!0}},data:function(){return{confirmDeletePopup:!1}},methods:{toggleEditing:function(){this.editable=!this.editable},saveChanges:function(e){e||(this.$emit("save",{currentPassword:this.currentPassword,newPassword:this.newPassword}),this.editable=!1)}}},ue=de,le=(a("f5fb"),Object(g["a"])(ue,J,G,!1,null,"1b4738b4",null)),pe=le.exports;o["c"].add(c["faTrash"]);var fe={name:"AccountForms",components:{AddressPanel:H,PasswordPanel:Z,DeleteAccountPanel:pe},props:{account:{required:!0},addressesEditModes:{required:!0},passwordEditable:{type:Boolean,required:!0}},data:function(){return{confirmDeletePopup:!1,userRole:null}},computed:{isAllowedToDelete:function(){return this.userRole===T["a"]}},methods:{isPanelEditable:function(e){return!!this.addressesEditModes[e]}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(N["a"])().getRole();case 2:e.userRole=t.sent;case 3:case"end":return t.stop()}}),t)})))()}},be=fe,me=(a("287d"),Object(g["a"])(be,n,r,!1,null,"54416a1e",null));t["a"]=me.exports},"3a7d":function(e,t,a){},"42ec":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Page Not Found")]),a("p",[e._v(e._s(e.message))])])},r=[],s={name:"PageNotFound",props:{message:{type:String,default:""}}},c=s,o=(a("dce6"),a("2877")),i=Object(o["a"])(c,n,r,!1,null,"a15c3be4",null);t["a"]=i.exports},"522b":function(e,t,a){},"58b8":function(e,t,a){},"5a91":function(e,t,a){},"5b17":function(e,t,a){"use strict";var n=a("522b"),r=a.n(n);r.a},"62ed":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("45fc"),a("b64b"),a("96cf");var n=a("1da1"),r=a("c6d8");a("6610");function s(e,t){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark((function e(t,a){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=Object.keys(a).some((function(e){return a[e]})),!n){e.next=6;break}return e.next=4,Object(r["a"])().getAccount(t);case 4:return s=e.sent,e.abrupt("return",{addresses:s.addresses});case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}},"69c3":function(e,t,a){},"83de":function(e,t,a){"use strict";var n=a("5a91"),r=a.n(n);r.a},9016:function(e,t,a){"use strict";var n=a("d3f7"),r=a.n(n);r.a},"9a85":function(e,t,a){},addc:function(e,t,a){"use strict";var n=a("3a7d"),r=a.n(n);r.a},b35b:function(e,t,a){},bbd4:function(e,t,a){},bd2d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("MainPageHeader"),a("PageContent",[e.account?a("AccountForms",{attrs:{account:e.account,addressesEditModes:e.addressesEditModes,passwordEditable:e.passwordEditable},on:{editAddress:e.editAddress,saveChanges:e.saveChanges,editPassword:e.editPassword,savePassword:e.savePassword,delete:e.deleteAccount}}):e._e()],1),e.loadError?a("PageNotFound",{attrs:{message:e.loadError}}):e._e(),e.account||e.loadError?e._e():a("ContentLoader")],1)},r=[],s=a("ade3"),c=a("5530"),o=(a("96cf"),a("1da1")),i=a("18e6"),d=a("dfc4"),u=a("3722"),l=a("42ec"),p=a("d2ab"),f=a("62ed"),b=a("c6d8"),m=a("3ca2"),v=a("8a2c"),h=a("d1cf"),w=(a("6610"),{name:"EditMyAccount",components:{MainPageHeader:i["a"],PageContent:d["a"],AccountForms:u["a"],PageNotFound:l["a"],ContentLoader:p["a"]},data:function(){return{account:null,loadError:null,addressesEditModes:{},passwordEditable:!1}},methods:{editAddress:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(m["a"])().getLoggedInKey();case 2:return n=a.sent,a.next=5,Object(f["a"])(n,t.addressesEditModes);case 5:r=a.sent,r&&(t.account=Object(c["a"])({},t.account,{},r)),t.addressesEditModes=Object(s["a"])({},e,!t.addressesEditModes[e]),t.passwordEditable=!1;case 9:case"end":return a.stop()}}),a)})))()},saveChanges:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["a"])().updateAccount(e.account);case 2:a=t.sent,a&&(e.addressesEditModes={});case 4:case"end":return t.stop()}}),t)})))()},editPassword:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.passwordEditable=!e.passwordEditable,t.next=3,Object(m["a"])().getLoggedInKey();case 3:return a=t.sent,t.next=6,Object(f["a"])(a,e.addressesEditModes);case 6:n=t.sent,n&&(e.account=Object(c["a"])({},e.account,{},n)),e.addressesEditModes={};case 9:case"end":return t.stop()}}),t)})))()},savePassword:function(e){var t=this,a=e.currentPassword,n=e.newPassword;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=Object(b["a"])(),e.next=3,Object(m["a"])().getLoggedInKey();case 3:return e.t1=e.sent,e.t2=a,e.t3=n,e.next=8,e.t0.updatePassword.call(e.t0,e.t1,e.t2,e.t3);case 8:t.passwordEditable=!1;case 9:case"end":return e.stop()}}),e)})))()},deleteAccount:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=Object(b["a"])(),t.next=3,Object(m["a"])().getLoggedInKey();case 3:return t.t1=t.sent,t.next=6,t.t0.deleteAccount.call(t.t0,t.t1);case 6:a=t.sent,a&&e.$router.push({name:"account-list"});case 8:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["b"])(e.$router,[v["c"],v["b"]]);case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.t0=Object(b["a"])(),t.next=7,Object(m["a"])().getLoggedInKey();case 7:return t.t1=t.sent,t.next=10,t.t0.getAccount.call(t.t0,t.t1);case 10:e.account=t.sent,null===e.account&&(e.loadError="The account with the specified id doesn't exist");case 12:case"end":return t.stop()}}),t)})))()}}),g=w,P=(a("1167"),a("2877")),E=Object(P["a"])(g,n,r,!1,null,"f7d33092",null);t["default"]=E.exports},d2ab:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ContentLoader"},[a("span",{staticClass:"ring"}),a("span",{staticClass:"ring s1",staticStyle:{"animation-delay":"-0.3s"}}),a("span",{staticClass:"ring s2",staticStyle:{"animation-delay":"-0.6s"}})])}],s={name:"ContentLoader"},c=s,o=(a("5b17"),a("2877")),i=Object(o["a"])(c,n,r,!1,null,"7db61772",null);t["a"]=i.exports},d3f7:function(e,t,a){},d6bf:function(e,t,a){},dce6:function(e,t,a){"use strict";var n=a("d6bf"),r=a.n(n);r.a},ed9d:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("MainPageHeader"),a("PageContent",[e.account?a("AccountForms",{attrs:{account:e.account,addressesEditModes:e.addressesEditModes,passwordEditable:e.passwordEditable},on:{editAddress:e.editAddress,saveChanges:e.saveChanges,editPassword:e.editPassword,savePassword:e.savePassword,delete:e.deleteAccount}}):e._e()],1),e.loadError?a("PageNotFound",{attrs:{message:e.loadError}}):e._e(),e.account||e.loadError?e._e():a("ContentLoader")],1)},r=[],s=a("ade3"),c=a("5530"),o=(a("96cf"),a("1da1")),i=a("18e6"),d=a("dfc4"),u=a("3722"),l=a("42ec"),p=a("d2ab"),f=a("62ed"),b=a("c6d8"),m=a("8a2c"),v=a("d1cf"),h=(a("6610"),{name:"EditAccount",components:{MainPageHeader:i["a"],PageContent:d["a"],AccountForms:u["a"],PageNotFound:l["a"],ContentLoader:p["a"]},data:function(){return{account:null,loadError:null,addressesEditModes:{},passwordEditable:!1}},methods:{editAddress:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(f["a"])(t.$route.params.account,t.addressesEditModes);case 2:n=a.sent,n&&(t.account=Object(c["a"])({},t.account,{},n)),t.addressesEditModes=Object(s["a"])({},e,!t.addressesEditModes[e]),t.passwordEditable=!1;case 6:case"end":return a.stop()}}),a)})))()},saveChanges:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["a"])().updateAccount(e.account);case 2:a=t.sent,a&&(e.addressesEditModes={});case 4:case"end":return t.stop()}}),t)})))()},editPassword:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.passwordEditable=!e.passwordEditable,t.next=3,Object(f["a"])(e.$route.params.account,e.addressesEditModes);case 3:a=t.sent,a&&(e.account=Object(c["a"])({},e.account,{},a)),e.addressesEditModes={};case 6:case"end":return t.stop()}}),t)})))()},savePassword:function(e){var t=this,a=e.currentPassword,n=e.newPassword;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(b["a"])().updatePassword(t.account.key,a,n);case 2:t.passwordEditable=!1;case 3:case"end":return e.stop()}}),e)})))()},deleteAccount:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["a"])().deleteAccount(e.account.key);case 2:a=t.sent,a&&e.$router.push({name:"account-list"});case 4:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(v["b"])(e.$router,[m["a"]]);case 2:if(!t.sent){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,Object(b["a"])().getAccount(e.$route.params.account);case 6:e.account=t.sent,null===e.account&&(e.loadError="The account with the specified id doesn't exist");case 8:case"end":return t.stop()}}),t)})))()}}),w=h,g=(a("9016"),a("2877")),P=Object(g["a"])(w,n,r,!1,null,"0aaca42a",null);t["default"]=P.exports},f2f7:function(e,t,a){},f496:function(e,t,a){"use strict";var n=a("69c3"),r=a.n(n);r.a},f5fb:function(e,t,a){"use strict";var n=a("17ca"),r=a.n(n);r.a},f87b:function(e,t,a){"use strict";var n=a("9a85"),r=a.n(n);r.a}}]);
//# sourceMappingURL=edit-account.51af2998.js.map