(function(e){function t(t){for(var o,s,l=t[0],i=t[1],u=t[2],p=0,f=[];p<l.length;p++)s=l[p],a[s]&&f.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,l=1;l<n.length;l++){var i=n[l];0!==a[i]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},a={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("64a9"),a=n.n(o);a.a},"06f1":function(e,t,n){"use strict";var o=n("dd1b"),a=n.n(o);a.a},"0eb7":function(e,t,n){},"109a":function(e,t,n){"use strict";var o=n("c7b2"),a=n.n(o);a.a},1713:function(e,t,n){"use strict";var o=n("aae3"),a=n.n(o);a.a},"1c8d":function(e,t,n){"use strict";var o=n("9c24"),a=n.n(o);a.a},"1fb2":function(e,t,n){},"218d":function(e,t,n){},2192:function(e,t,n){},"24af":function(e,t,n){},2743:function(e,t,n){"use strict";var o=n("defe"),a=n.n(o);a.a},"2a5a":function(e,t,n){},"2c28":function(e,t,n){"use strict";var o=n("1fb2"),a=n.n(o);a.a},"2c75":function(e,t,n){"use strict";var o=n("44b1"),a=n.n(o);a.a},"3c35":function(e,t,n){},"3eb8":function(e,t,n){},"44b1":function(e,t,n){},"47d5":function(e,t,n){"use strict";var o=n("0eb7"),a=n.n(o);a.a},"48c0":function(e,t,n){"use strict";var o=n("2192"),a=n.n(o);a.a},"4b40":function(e,t,n){"use strict";var o=n("bb4a"),a=n.n(o);a.a},"4e01":function(e,t,n){"use strict";var o=n("c78b"),a=n.n(o);a.a},5056:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=n("8c4f"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("Flexbox Utility Playground")])},s=[],l={data:function(){return{}},components:{}},i=l,u=(n("cccb"),n("2877")),c=Object(u["a"])(i,r,s,!1,null,null,null);c.options.__file="Home.vue";var p=c.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h3",[e._v("get started at github.com/Sharpie360/flexbox-util-v1")])},d=[],x={},m=x,v=(n("9f86"),Object(u["a"])(m,f,d,!1,null,null,null));v.options.__file="GettingStarted.vue";var _=v.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"playground flexbox flexdir-col"},[n("pg--display"),n("pg--control-panel")],1)},b=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"display--wrapper"},[n("div",{staticClass:"display--content flexbox",class:[e.flexGroupDirection,e.currentFlexgap.class]},e._l(e.flexItemGroup,function(e,t){return n("disp--flex-item--basic",{key:t,attrs:{flexItem:e,parentIndex:t}})}),1)])},F=[],I=n("2f62"),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.flexItem.isCustomWidth?n("custom-width-item",{attrs:{parentIndex:e.parentIndex}}):n("div",{staticClass:"flex-item--basic",style:{flex:e.flexItem.flex},attrs:{tabindex:"-1"},on:{click:e.activate_ColorPicker}},[n("div",{staticClass:"flex-item--basic--inner",class:{"flexbox-space-center":!e.flexItem.nested.hasNestedFlexbox},style:{"background-color":e.flexItem.customColor}},[e.flexItem.nested.hasNestedFlexbox?n("flex-item--nested",{attrs:{parentIndex:e.parentIndex}}):n("div",[n("h3",[e._v("Flex: "+e._s(e.flexItem.flex))])]),n("input",{staticClass:"click-color-picker--parent",class:{active:this.colorPickerActive},attrs:{type:"color"},on:{input:function(t){e.setFlexParentColor(t)}}})],1)])},O=[],G=n("be94"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-item--basic",style:{width:e.customWidthFull}},[n("div",{staticClass:"flex-item--basic--inner flexbox-space-center"},[e.customWidthValue>100&&"px"===e.customWidthUnits?n("h3",[e._v("\n      Width: "+e._s(e.customWidthFull)+"\n    ")]):e.customWidthValue>5&&"rem"===e.customWidthUnits?n("h3",[e._v("\n      Width: "+e._s(e.customWidthFull)+"\n    ")]):e._e()])])},S=[],T={props:["parentIndex"],computed:{customWidthValue:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex).customWidth},customWidthUnits:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits},customWidthFull:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex).customWidth+this.$store.getters.getFlexGroupItem(this.parentIndex).measurementUnits}}},y=T,E=(n("2743"),Object(u["a"])(y,A,S,!1,null,"b683c578",null));E.options.__file="Display__Flextem_CustomWidth.vue";var N=E.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-item--nested--outer flexbox"},[n("div",{staticClass:"\n      flex-item--nested--inner \n      flex-1 flexbox border\n    ",class:e.nestedFlexDirection,attrs:{tabindex:"-1"},on:{click:e.activate_ColorPicker}},e._l(e.nestedFlexGroup,function(t,o){return n("div",{key:o,staticClass:"nested--flex-item flexbox-space-center",style:[{flex:t.flex,"background-color":t.customColor}]},[n("input",{staticClass:"click-color-picker--nested",class:{active:e.colorPickerActive},attrs:{type:"color"},on:{change:function(t){e.setNestedFlexColor(t,o)}}}),n("span",{staticClass:"nested--flex-item--text"},[e._v("Flex "+e._s(t.flex))])])}),0)])},w=[],R={data:function(){return{colorPickerActive:!1}},props:["parentIndex"],computed:{nestedFlexGroup:function(){return this.$store.getters.getNestedFlexGroup(this.parentIndex).nestedFlexGroup},nestedFlexDirection:function(){return this.$store.getters.getNestedFlexDirection(this.parentIndex)}},methods:Object(G["a"])({},Object(I["b"])(["setNestedFlexColor_STORE"]),{activate_ColorPicker:function(){var e=this;this.colorPickerActive=!0,setTimeout(function(){e.colorPickerActive=!1},3e3)},deactivate_ColorPicker:function(){this.colorPickerActive=!1},setNestedFlexColor:function(e,t){var n={parentIndex:this.parentIndex,nestedIndex:t,newValue:e.target.value};this.setNestedFlexColor_STORE(n)}})},D=R,P=(n("48c0"),Object(u["a"])(D,j,w,!1,null,"1e9041a2",null));P.options.__file="Display__FlexItem_Nested.vue";var U=P.exports,W={data:function(){return{colorPickerActive:!1}},props:["parentIndex"],components:{"custom-width-item":N,"flex-item--nested":U},computed:{flexItem:function(){return this.$store.getters.getFlexGroupItem(this.parentIndex)}},methods:Object(G["a"])({},Object(I["b"])(["setFlexParentColor_STORE"]),{activate_ColorPicker:function(){var e=this;this.colorPickerActive=!0,setTimeout(function(){e.colorPickerActive=!1},3e3)},setFlexParentColor:function(e){var t={parentIndex:this.parentIndex,newValue:e.target.value};this.setFlexParentColor_STORE(t)}})},$=W,k=(n("def6"),Object(u["a"])($,C,O,!1,null,"60dc2298",null));k.options.__file="Display__FlexItem_Basic.vue";var M=k.exports,V={components:{"disp--flex-item--basic":M},computed:{flexItemGroup:function(){return this.$store.getters.getFlexGroup},flexGroupDirection:function(){return this.$store.getters.getFlexDirection},currentFlexgap:function(){return this.$store.getters.getFlexgap}}},L=V,H=(n("4b40"),Object(u["a"])(L,g,F,!1,null,"07ac2210",null));H.options.__file="Display.vue";var B=H.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"control-panel--outer flexbox"},[n("cp--action-panel"),n("cp--flex-input-panel")],1)},q=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"action-buttons flex-1 flexbox"},[n("div",{staticClass:"flex-1"}),n("div",{staticClass:"flex-3-i flexbox-space-evenly flexdir-col"},[n("ap--direction-selection"),n("ap--add-remove-group"),n("ap--flexgap")],1),n("div",{staticClass:"flex-1"})])},K=[],Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-remove-btns--outer"},[n("div",{staticClass:"\n      add-remove-btns--label--group flexbox-space-between\n    "},[n("span",{staticClass:"add-remove-btns--label--label"},[e._v("Flex Items: \n    ")]),n("span",{staticClass:"add-remove-btns--label--value"},[e._v(e._s(e.flexItemGroupLength)+" of 5\n    ")])]),n("div",{staticClass:"add-remove-btns-inner flexbox"},[n("arg--remove"),n("arg--add")],1)])},X=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"add-remove-btns--add flex-1",on:{click:e.addItemToGroup_STORE}},[e._v("Add\n")])},Z=[],ee={methods:Object(G["a"])({},Object(I["b"])(["addItemToGroup_STORE"]))},te=ee,ne=(n("1713"),Object(u["a"])(te,Y,Z,!1,null,"fad53bf2",null));ne.options.__file="ARG__Add.vue";var oe=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"add-remove-btns--remove flex-1",on:{click:e.removeItemFromGroup_STORE}},[e._v("Remove\n")])},re=[],se={methods:Object(G["a"])({},Object(I["b"])(["removeItemFromGroup_STORE"]))},le=se,ie=(n("1c8d"),Object(u["a"])(le,ae,re,!1,null,"5e044676",null));ie.options.__file="ARG__Remove.vue";var ue=ie.exports,ce={components:{"arg--add":oe,"arg--remove":ue},computed:{flexItemGroupLength:function(){return this.$store.getters.getFlexGroup.length}}},pe=ce,fe=(n("6fc5"),Object(u["a"])(pe,Q,X,!1,null,"34a3d954",null));fe.options.__file="AP__AddRemoveGroup.vue";var de=fe.exports,xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"direction-selection--outer"},[n("span",{staticClass:"direction-selection--label"},[e._v("\n    Flex Direction:\n  ")]),n("select",{staticClass:"flex-direction-selection",attrs:{placeholder:e.currentDirection,name:"flexdir-select"},on:{change:function(t){e.setFlexDirection_STORE(t.target.value)}}},[n("option",{attrs:{value:"flexdir-row",selected:""}},[e._v("Row (Default)")]),n("option",{attrs:{value:"flexdir-col"}},[e._v("Column")]),n("option",{attrs:{value:"flexdir-rowrev"}},[e._v("Row Reverse")]),n("option",{attrs:{value:"flexdir-colrev"}},[e._v("Column Reverse")])])])},me=[],ve={data:function(){return{newFlexDirection:this.currentDirection}},computed:{currentDirection:function(){return this.$store.getters.getFlexDirection}},methods:Object(G["a"])({},Object(I["b"])(["setFlexDirection_STORE"]))},_e=ve,he=(n("ae62"),Object(u["a"])(_e,xe,me,!1,null,"598b731b",null));he.options.__file="AP__DirectionSelection.vue";var be=he.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexgap--outer"},[n("div",{staticClass:"flexgap--label--group flexbox"},[n("span",{staticClass:"flexgap--label--label"},[e._v("Flexgap:\n      ")]),n("transition",{attrs:{name:e.transitionDirection,type:"transition",mode:"out-in"}},[0===e.flexgapAmount?n("span",{key:"0",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("None\n        ")]):1===e.flexgapAmount?n("span",{key:"1",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-1\n        ")]):2===e.flexgapAmount?n("span",{key:"2",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-2\n        ")]):3===e.flexgapAmount?n("span",{key:"3",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-3\n        ")]):4===e.flexgapAmount?n("span",{key:"4",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-4\n        ")]):5===e.flexgapAmount?n("span",{key:"5",staticClass:"flexgap--label--value flex-1 text-right"},[e._v("Flexgap-5\n        ")]):e._e()])],1),n("div",{staticClass:"flexgap--inner flexbox"},[n("button",{staticClass:"flexgap--decrease flex-1",on:{click:e.decreaseFlexgap}},[e._v("Decrease\n    ")]),n("button",{staticClass:"flexgap--increase flex-1",on:{click:e.increaseFlexgap}},[e._v("Increase\n    ")])])])},Fe=[],Ie={data:function(){return{transitionDirection:"fade-left",flexgapAmount:0,flexgapClasses:[{name:"None",class:"flexgap-0"},{name:"Flexgap 1",class:"flexgap-1"},{name:"Flexgap 2",class:"flexgap-2"},{name:"Flexgap 3",class:"flexgap-3"},{name:"Flexgap 4",class:"flexgap-4"},{name:"Flexgap 5",class:"flexgap-5"}]}},computed:{currentFlexgap:function(){return this.$store.getters.getFlexgap}},methods:Object(G["a"])({},Object(I["b"])(["setFlexgap_STORE"]),{increaseFlexgap:function(){this.transitionDirection="fade-left",5!==this.flexgapAmount&&(this.flexgapAmount++,this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]))},decreaseFlexgap:function(){this.transitionDirection="fade-right",0!==this.flexgapAmount&&(this.flexgapAmount--,this.setFlexgap_STORE(this.flexgapClasses[this.flexgapAmount]))}})},Ce=Ie,Oe=(n("8eba"),Object(u["a"])(Ce,ge,Fe,!1,null,"7014e8f8",null));Oe.options.__file="AP__Flexgap.vue";var Ge=Oe.exports,Ae={components:{"ap--add-remove-group":de,"ap--direction-selection":be,"ap--flexgap":Ge}},Se=Ae,Te=(n("81d6"),Object(u["a"])(Se,z,K,!1,null,"4567cd9e",null));Te.options.__file="CP__ActionPanel.vue";var ye=Te.exports,Ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-input-panel flex-6 flexbox flex-wrap",class:{"flexgap-2":e.flexItemGroup.length>1}},e._l(e.flexItemGroup,function(t,o){return n("div",{key:o,staticClass:"flex-item-group flexbox"},[n("div",{staticClass:"fig--main-panel flex-2"},[n("fp--flex-amount-input",{attrs:{index:o}}),n("fp--custom-width-input",{attrs:{parentIndex:o}}),n("fp--nested-flex-panel",{attrs:{parentIndex:o}})],1),t.nested.hasNestedFlexbox?n("nfp--flex-amount-panel",{staticClass:"fig--nested-panel flex-1",attrs:{nestedFlexGroup:t.nested.nestedFlexGroup,parentIndex:o}}):e._e()],1)}),0)},Ne=[],je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex-amount-input-group"},[n("label",{attrs:{for:"flex-amount"}},[e._v("Flex Item "+e._s(e.index+1))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.newFlexAmount,expression:"newFlexAmount"}],attrs:{type:"number",name:"flex-amount",min:"1",max:"20"},domProps:{value:e.newFlexAmount},on:{input:[function(t){t.target.composing||(e.newFlexAmount=t.target.value)},function(t){e.setFlexAmount(e.index,t)}]}})])},we=[],Re={data:function(){return{newFlexAmount:1}},props:["index"],computed:{flexItem_FlexAmount:function(){return this.$store.getters.getFlexGroupItem(this.index).flex}},methods:Object(G["a"])({},Object(I["b"])(["setFlexAmount_STORE"]),{setFlexAmount:function(e,t){var n={index:e,value:t.target.value,isCustomWidth:!1};this.setFlexAmount_STORE(n)}})},De=Re,Pe=(n("affe"),Object(u["a"])(De,je,we,!1,null,null,null));Pe.options.__file="FP__FlexAmountInput.vue";var Ue=Pe.exports,We=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-width-input-group"},[n("label",{attrs:{for:"custom-width-input"}},[e._v("Custom Width")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.customWidth,expression:"customWidth"}],staticClass:"custom-width-amount",attrs:{type:"number",name:"custom-width-amount",placeholder:"400"},domProps:{value:e.customWidth},on:{input:function(t){t.target.composing||(e.customWidth=t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.measurementUnits,expression:"measurementUnits"}],staticClass:"custom-width-unit-select",attrs:{name:"custom-width-unit-select"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.measurementUnits=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"px"}},[e._v("px")]),n("option",{attrs:{value:"rem"}},[e._v("rem")])])])},$e=[],ke={props:["parentIndex"],computed:{customWidth:{get:function(){return this.$store.state.flexItemGroup[this.parentIndex].customWidth},set:function(e){var t={value:e,parentIndex:this.parentIndex,isCustomWidth:!0,measurementUnits:this.measurementUnits};this.$store.dispatch("setCustomWidth_STORE",t)}},measurementUnits:{get:function(){return this.$store.state.flexItemGroup[this.parentIndex].measurementUnits},set:function(e){var t={measurementUnits:e,parentIndex:this.parentIndex};this.$store.dispatch("setCustomWidthUnits_STORE",t)}}}},Me=ke,Ve=(n("ee18"),Object(u["a"])(Me,We,$e,!1,null,"3c929594",null));Ve.options.__file="FP__CustomWidthInput.vue";var Le=Ve.exports,He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nested-flex-panel--outer"},[n("nfp--add-remove-group",{attrs:{parentIndex:e.parentIndex}}),n("nfp--flexdir-select",{attrs:{parentIndex:e.parentIndex}})],1)},Be=[],Je=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nfp--add-remove-group--outer flexbox flexdir-col"},[n("span",{staticClass:"nfp--add-remove-group--label"},[e._v("Nested Flex\n  ")]),n("div",{staticClass:"nfp--add-remove-group--inner flexbox"},[n("nfp--remove",{attrs:{parentIndex:e.parentIndex}}),n("nfp--add",{attrs:{parentIndex:e.parentIndex}})],1)])},qe=[],ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"nfp--add-remove-group--add flex-1",on:{click:function(t){e.addNestedItemtoFlexItem_STORE(e.parentIndex)}}},[e._v("Add\n")])},Ke=[],Qe={props:["parentIndex"],methods:Object(G["a"])({},Object(I["b"])(["addNestedItemtoFlexItem_STORE"]))},Xe=Qe,Ye=(n("47d5"),Object(u["a"])(Xe,ze,Ke,!1,null,"d4a1a630",null));Ye.options.__file="NFP__Add.vue";var Ze=Ye.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"nfp--add-remove-group--remove",on:{click:function(t){e.removeNestedItemfromFlexItem_STORE(e.parentIndex)}}},[e._v("Remove\n")])},tt=[],nt={props:["parentIndex"],methods:Object(G["a"])({},Object(I["b"])(["removeNestedItemfromFlexItem_STORE"]))},ot=nt,at=(n("2c28"),Object(u["a"])(ot,et,tt,!1,null,"1ad8f7b1",null));at.options.__file="NFP__Remove.vue";var rt=at.exports,st={props:["parentIndex"],components:{"nfp--add":Ze,"nfp--remove":rt}},lt=st,it=(n("f971"),Object(u["a"])(lt,Je,qe,!1,null,"723959b7",null));it.options.__file="NFP__AddRemoveGroup.vue";var ut=it.exports,ct=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nfp--flexdir-select--outer"},[n("div",{staticClass:"nfp--flexdir-select--label"},[e._v("Flex Direction")]),n("div",{staticClass:"nfp--flexdir-select--inner flexbox"},[n("select",{staticClass:"nfp--flexdir-select--input flex-1",on:{input:function(t){e.setNestedFlexDirection(t)}}},[n("option",{attrs:{value:"flexdir-row"}},[e._v("Row (Default)\n        ")]),n("option",{attrs:{value:"flexdir-col"}},[e._v("Column\n        ")]),n("option",{attrs:{value:"flexdir-rowrev"}},[e._v("Row Reverse\n        ")]),n("option",{attrs:{value:"flexdir-colrev"}},[e._v("Column Reverse\n        ")])])])])},pt=[],ft={props:["parentIndex"],methods:Object(G["a"])({},Object(I["b"])(["setNestedFlexDirection_STORE"]),{setNestedFlexDirection:function(e){var t={parentIndex:this.parentIndex,newDirection:e.target.value};this.setNestedFlexDirection_STORE(t)}})},dt=ft,xt=(n("d2c7"),Object(u["a"])(dt,ct,pt,!1,null,"69d8bf87",null));xt.options.__file="NFP__FlexdirSelect.vue";var mt=xt.exports,vt={props:["parentIndex"],components:{"nfp--add-remove-group":ut,"nfp--flexdir-select":mt}},_t=vt,ht=(n("b96d"),Object(u["a"])(_t,He,Be,!1,null,null,null));ht.options.__file="FP__NestedFlexPanel.vue";var bt=ht.exports,gt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nfp--flex-amount-panel--outer flexdir-col"},e._l(e.nestedFlexGroup,function(t,o){return n("div",{key:o,staticClass:"nfp--flex-amount-panel--input-wrapper"},[n("label",[e._v("Nested "+e._s(o+1))]),n("input",{attrs:{type:"number",value:"1",min:"1",max:"20"},on:{input:function(t){e.setNestedFlexAmount(o,t)}}})])}),0)},Ft=[],It={props:["nestedFlexGroup","parentIndex"],methods:Object(G["a"])({},Object(I["b"])(["setNestedFlexAmount_STORE"]),{setNestedFlexAmount:function(e,t){var n={parentIndex:this.parentIndex,nestedIndex:e,newFlexAmount:t.target.value};this.setNestedFlexAmount_STORE(n)}})},Ct=It,Ot=(n("109a"),Object(u["a"])(Ct,gt,Ft,!1,null,"40015351",null));Ot.options.__file="NFP__FlexAmountPanel.vue";var Gt=Ot.exports,At={components:{"fp--flex-amount-input":Ue,"fp--custom-width-input":Le,"fp--nested-flex-panel":bt,"nfp--flex-amount-panel":Gt},computed:{flexItemGroup:function(){return this.$store.getters.getFlexGroup}}},St=At,Tt=(n("2c75"),Object(u["a"])(St,Ee,Ne,!1,null,"da8e8648",null));Tt.options.__file="CP__FlexInputPanel.vue";var yt=Tt.exports,Et={components:{"cp--action-panel":ye,"cp--flex-input-panel":yt}},Nt=Et,jt=(n("06f1"),Object(u["a"])(Nt,J,q,!1,null,"3f3358a2",null));jt.options.__file="ControlPanel.vue";var wt=jt.exports,Rt={components:{"pg--display":B,"pg--control-panel":wt}},Dt=Rt,Pt=(n("cd63"),Object(u["a"])(Dt,h,b,!1,null,"a281d1f8",null));Pt.options.__file="Playground.vue";var Ut=Pt.exports,Wt=[{path:"/",name:"Home",component:p},{path:"/getting-started",name:"Getting Started",component:_},{path:"/playground",name:"Playground",component:Ut}],$t=Wt,kt={getFlexGroup:function(e,t,n){return n.flexItemGroup},getFlexGroupItem:function(e,t,n){return function(e){return n.flexItemGroup[e]}},getFlexDirection:function(e,t,n){return n.flexGroupDirection},getFlexgap:function(e,t,n){return n.flexgap}},Mt={addItemToGroup_MUTA:function(e,t){console.log(t),t.flexItemGroup.length>4||t.flexItemGroup.push({flex:1,customColor:"",isCustomWidth:!1,customWidth:0,measurementUnits:"px",nested:{hasNestedFlexbox:!1,nestedFlexGroup:[],nestedFlexDirection:"flexdir-row"}})},removeItemFromGroup_MUTA:function(e,t){0!==t.flexItemGroup.length?t.flexItemGroup.pop():console.log("no flex items in the group")},setFlexDirection_MUTA:function(e,t){var n=t.rootState,o=t.newDirection;n.flexGroupDirection=o},setFlexAmount_MUTA:function(e,t){var n=t.rootState,o=t.flexItemData;n.flexItemGroup[o.index].isCustomWidth=o.isCustomWidth,n.flexItemGroup[o.index].flex=o.value},setFlexgap_MUTA:function(e,t){var n=t.rootState,o=t.payload;n.flexgap=o}},Vt={addItemToGroup_STORE:function(e){var t=e.commit,n=e.rootState;t("addItemToGroup_MUTA",n)},removeItemFromGroup_STORE:function(e){var t=e.commit,n=e.rootState;t("removeItemFromGroup_MUTA",n)},setFlexDirection_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexDirection_MUTA",{rootState:o,newDirection:t})},setFlexAmount_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexAmount_MUTA",{rootState:o,flexItemData:t})},setFlexgap_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexgap_MUTA",{rootState:o,payload:t})}},Lt={getters:kt,mutations:Mt,actions:Vt},Ht={setFlexItemToCustomWidth_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.isCustomWidth;n.flexItemGroup[a].isCustomWidth=r},setCustomWidthValue_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.value;n.flexItemGroup[a].customWidth=r},setCustomWidthUnits_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.measurementUnits;n.flexItemGroup[a].measurementUnits=r}},Bt={setCustomWidth_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setFlexItemToCustomWidth_MUTA",{rootState:o,payload:t}),n("setCustomWidthValue_MUTA",{rootState:o,payload:t}),n("setCustomWidthUnits_MUTA",{rootState:o,payload:t})},setCustomWidthUnits_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setCustomWidthUnits_MUTA",{rootState:o,payload:t})}},Jt={mutations:Ht,actions:Bt},qt={getNestedFlexGroup:function(e,t,n){return function(e){return n.flexItemGroup[e].nested}},getNestedFlexDirection:function(e,t,n){return function(e){return n.flexItemGroup[e].nested.nestedFlexDirection}}},zt={addNestedItemtoFlexItem_MUTA:function(e,t){var n=t.rootState,o=t.parentIndex;n.flexItemGroup[o].isCustomWidth=!1,n.flexItemGroup[o].nested.nestedFlexGroup.length||(n.flexItemGroup[o].nested.hasNestedFlexbox=!0),n.flexItemGroup[o].nested.nestedFlexGroup.length>3?console.log("max nested flex items reached"):n.flexItemGroup[o].nested.nestedFlexGroup.push({flex:1,customColor:""})},removeNestedItemfromFlexItem_MUTA:function(e,t){var n=t.rootState,o=t.parentIndex;n.flexItemGroup[o].isCustomWidth=!1,n.flexItemGroup[o].nested.nestedFlexGroup.length&&(n.flexItemGroup[o].nested.nestedFlexGroup.pop(),n.flexItemGroup[o].nested.nestedFlexGroup.length||(n.flexItemGroup[o].nested.hasNestedFlexbox=!1))},setNestedFlexDirection_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.newDirection;n.flexItemGroup[a].nested.nestedFlexDirection=r},setNestedFlexAmount_MUTA:function(e,t){var n=t.rootState,o=t.payload,a=o.parentIndex,r=o.nestedIndex,s=o.newFlexAmount;n.flexItemGroup[a].nested.nestedFlexGroup[r].flex=s}},Kt={addNestedItemtoFlexItem_STORE:function(e,t){var n=e.commit,o=e.rootState,a=t;n("addNestedItemtoFlexItem_MUTA",{rootState:o,parentIndex:a})},removeNestedItemfromFlexItem_STORE:function(e,t){var n=e.commit,o=e.rootState,a=t;n("removeNestedItemfromFlexItem_MUTA",{rootState:o,parentIndex:a})},setNestedFlexDirection_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setNestedFlexDirection_MUTA",{rootState:o,payload:t})},setNestedFlexAmount_STORE:function(e,t){var n=e.commit,o=e.rootState;n("setNestedFlexAmount_MUTA",{rootState:o,payload:t})}},Qt={getters:qt,mutations:zt,actions:Kt};o["a"].use(I["a"]);var Xt=new I["a"].Store({state:{flexItemGroup:[{flex:1,customColor:"",isCustomWidth:!1,customWidth:0,measurementUnits:"px",nested:{hasNestedFlexbox:!1,nestedFlexGroup:[],nestedFlexDirection:"flexdir-row"}}],flexGroupDirection:"flexdir-row",flexgap:{name:"Flexgap 0",class:"flexgap-0"}},getters:{},mutations:{setNestedFlexColor_MUTA:function(e,t){var n=t.parentIndex,o=t.nestedIndex,a=t.newValue;e.flexItemGroup[n].nested.nestedFlexGroup[o].customColor=a},setFlexParentColor_MUTA:function(e,t){var n=t.parentIndex,o=t.newValue;e.flexItemGroup[n].customColor=o}},actions:{setNestedFlexColor_STORE:function(e,t){var n=e.commit;n("setNestedFlexColor_MUTA",t)},setFlexParentColor_STORE:function(e,t){var n=e.commit;n("setFlexParentColor_MUTA",t)}},modules:{parentFlexGroupModule:Lt,nestedFlexGroupModule:Qt,customWidthModule:Jt}}),Yt=Xt,Zt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexbox flexdir-col",attrs:{id:"app"}},[n("app--navbar"),n("app--container")],1)},en=[],tn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar flexbox"},[n("navbar--nav-brand",{attrs:{text:"Flexbox Playground"}}),n("navbar--nav-item",{attrs:{"router-link-to":"/",text:"Home"}}),n("navbar--nav-item",{attrs:{"router-link-to":"/getting-started",text:"Getting Started"}}),n("navbar--nav-item",{attrs:{"router-link-to":"/playground",text:"Playground"}})],1)},nn=[],on=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-item--brand flex-1 flex-align-center align-self"},[n("span",{staticClass:"nav-item--brand-text"},[e._v(e._s(e.text))])])},an=[],rn={props:["text"]},sn=rn,ln=(n("5f23"),Object(u["a"])(sn,on,an,!1,null,"6cc69dfe",null));ln.options.__file="NavBrand.vue";var un=ln.exports,cn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"nav-item flexbox flex-center",attrs:{to:e.routerLinkTo}},[n("span",{staticClass:"nav-item--text"},[e._v(e._s(e.text))])])},pn=[],fn={props:["routerLinkTo","text"]},dn=fn,xn=(n("be95"),Object(u["a"])(dn,cn,pn,!1,null,"2facdac4",null));xn.options.__file="NavItem.vue";var mn=xn.exports,vn={components:{"navbar--nav-brand":un,"navbar--nav-item":mn}},_n=vn,hn=(n("832b"),Object(u["a"])(_n,tn,nn,!1,null,"e35fb76c",null));hn.options.__file="Navbar.vue";var bn=hn.exports,gn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container flex-1"},[n("router-view")],1)},Fn=[],In={},Cn=In,On=(n("4e01"),Object(u["a"])(Cn,gn,Fn,!1,null,null,null));On.options.__file="Container.vue";var Gn=On.exports,An={name:"app",components:{"app--navbar":bn,"app--container":Gn}},Sn=An,Tn=(n("034f"),Object(u["a"])(Sn,Zt,en,!1,null,null,null));Tn.options.__file="App.vue";var yn=Tn.exports;o["a"].use(a["a"]);var En=new a["a"]({routes:$t});o["a"].config.productionTip=!1,new o["a"]({router:En,store:Yt,render:function(e){return e(yn)}}).$mount("#app")},"5f23":function(e,t,n){"use strict";var o=n("c282"),a=n.n(o);a.a},"63a9":function(e,t,n){},"64a9":function(e,t,n){},"64e7":function(e,t,n){},"6fc5":function(e,t,n){"use strict";var o=n("63a9"),a=n.n(o);a.a},"81d6":function(e,t,n){"use strict";var o=n("e347"),a=n.n(o);a.a},"832b":function(e,t,n){"use strict";var o=n("f58c"),a=n.n(o);a.a},"8eba":function(e,t,n){"use strict";var o=n("5056"),a=n.n(o);a.a},"93a8":function(e,t,n){},"9c24":function(e,t,n){},"9f86":function(e,t,n){"use strict";var o=n("64e7"),a=n.n(o);a.a},aae3:function(e,t,n){},ae62:function(e,t,n){"use strict";var o=n("3c35"),a=n.n(o);a.a},affe:function(e,t,n){"use strict";var o=n("c9ef"),a=n.n(o);a.a},b96d:function(e,t,n){"use strict";var o=n("93a8"),a=n.n(o);a.a},bb4a:function(e,t,n){},be95:function(e,t,n){"use strict";var o=n("24af"),a=n.n(o);a.a},c282:function(e,t,n){},c78b:function(e,t,n){},c7b2:function(e,t,n){},c9ef:function(e,t,n){},cccb:function(e,t,n){"use strict";var o=n("d563"),a=n.n(o);a.a},cd63:function(e,t,n){"use strict";var o=n("218d"),a=n.n(o);a.a},d2c7:function(e,t,n){"use strict";var o=n("2a5a"),a=n.n(o);a.a},d563:function(e,t,n){},d67c:function(e,t,n){},dd1b:function(e,t,n){},def6:function(e,t,n){"use strict";var o=n("fde1"),a=n.n(o);a.a},defe:function(e,t,n){},e347:function(e,t,n){},ee18:function(e,t,n){"use strict";var o=n("3eb8"),a=n.n(o);a.a},f58c:function(e,t,n){},f971:function(e,t,n){"use strict";var o=n("d67c"),a=n.n(o);a.a},fde1:function(e,t,n){}});
//# sourceMappingURL=app.aa431445.js.map