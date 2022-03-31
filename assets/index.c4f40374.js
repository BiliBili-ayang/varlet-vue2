import{I as n}from"./index.72af7dd1.js";import{B as c}from"./index.49f460d9.js";import{A as l}from"./AppType.743d5c90.js";import{S as p}from"./index.6fd21718.js";import{d as v}from"./create.11eee831.js";import{u as m,a as r,_ as w,b as h,c as f}from"./en-US.36f69c14.js";import{w as _}from"./utils.3b864b4e.js";import{A as C}from"./index.54434e98.js";import{I as g}from"./index.4154a919.js";import{n as d}from"./index.1724f573.js";import"./index.94b15ca1.js";import"./elements.9c883ade.js";import"./shared.f8da68a0.js";import"./relation.9e421618.js";import"./index.6776a459.js";import"./index.10e88429.js";import"./lock.ac20a0f2.js";import"./vendor.7d1cc22d.js";import"./index.bab5582f.js";import"./index.aa82ed18.js";import"./Teleport.74ff85c7.js";import"./components.a1090420.js";import"./zIndex.3167d10e.js";import"./teleport.cb83deae.js";import"./index.ae3982d6.js";import"./index.5f70cfd5.js";var S={functionCall:"\u51FD\u6570\u8C03\u7528",componentCall:"\u7EC4\u4EF6\u8C03\u7528",preview:"\u57FA\u672C\u4F7F\u7528",callBack:"\u5904\u7406\u56DE\u8C03\u51FD\u6570",basicUse:"\u57FA\u672C\u4F7F\u7528",specifyInitialPosition:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",displayCloseButton:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",listenCloseEvents:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",shutdownEvent:"\u89E6\u53D1\u4E86\u5173\u95ED\u4E8B\u4EF6\u3002",showExtraSlots:"\u5C55\u793A\u989D\u5916\u63D2\u69FD",operate:"\u64CD\u4F5C"},k={functionCall:"Function Call",componentCall:"Component Call",preview:"Basic use",callBack:"Handle callback function",basicUse:"Basic use",specifyInitialPosition:"Specify initial position",displayCloseButton:"Display the close button",listenCloseEvents:"Listen for close event",shutdownEvent:"The shutdown event was triggered.",showExtraSlots:"Show extra slots",operate:"\u64CD\u4F5C"};const{add:u,use:E,pack:s,packs:oe,merge:ae}=m(),b=e=>{f(e),E(e)};r("zh-CN",w);r("en-US",h);u("zh-CN",S);u("en-US",k);var y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"var-imagePreview-example"},[t("div",{staticClass:"image-preview-demo"},[t("app-type",[e._v(e._s(e.pack.functionCall)+" ")]),t("var-button",{attrs:{type:"primary",block:""},on:{click:e.preview}},[e._v(" "+e._s(e.pack.preview)+" ")]),t("var-button",{attrs:{type:"primary",block:""},on:{click:e.previewCallback}},[e._v(" "+e._s(e.pack.callBack)+" ")])],1),t("div",{staticClass:"image-preview-demo"},[t("app-type",[e._v(e._s(e.pack.componentCall)+" ")]),t("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){e.show=!0}}},[e._v(e._s(e.pack.basicUse)+" ")]),t("var-image-preview",{attrs:{images:e.image,show:e.show},on:{"update:show":function(o){e.show=o}}}),t("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){e.currentShow=!0}}},[e._v(e._s(e.pack.specifyInitialPosition)+" ")]),t("var-image-preview",{attrs:{images:e.images,show:e.currentShow,current:"https://varlet.gitee.io/varlet-ui-vue2/cat2.jpg"},on:{"update:show":function(o){e.currentShow=o}}}),t("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){e.closeShow=!0}}},[e._v(e._s(e.pack.displayCloseButton)+" ")]),t("var-image-preview",{attrs:{images:e.images,show:e.closeShow,closeable:!0},on:{"update:show":function(o){e.closeShow=o}}}),t("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){e.closeEventShow=!0}}},[e._v(e._s(e.pack.listenCloseEvents)+" ")]),t("var-image-preview",{attrs:{images:e.images,show:e.closeEventShow},on:{"update:show":function(o){e.closeEventShow=o},close:e.handleCloseEvent}}),t("var-button",{attrs:{type:"warning",block:""},on:{click:function(o){e.extraSlotsShow=!0}}},[e._v(e._s(e.pack.showExtraSlots))]),t("var-image-preview",{attrs:{images:e.images,show:e.extraSlotsShow},on:{"update:show":function(o){e.extraSlotsShow=o}},scopedSlots:e._u([{key:"extra",fn:function(){return[t("var-icon",{attrs:{name:"menu",size:22,color:"#fff"},on:{click:function(o){e.menuShow=!0}}}),t("var-action-sheet",{attrs:{actions:e.actions,show:e.menuShow},on:{"update:show":function(o){e.menuShow=o}}})]},proxy:!0}])})],1)])},x=[];const F=v({name:"ImagePreviewExample",components:{VarImagePreview:n.Component,VarButton:c,AppType:l,VarIcon:g,VarActionSheet:C.Component},data:()=>({images:["https://varlet.gitee.io/varlet-ui-vue2/cat.jpg","https://varlet.gitee.io/varlet-ui-vue2/cat2.jpg"],image:["https://varlet.gitee.io/varlet-ui-vue2/cat.jpg"],show:!1,menuShow:!1,currentShow:!1,closeShow:!1,closeEventShow:!1,extraSlotsShow:!1}),computed:{pack(){return s.value},actions(){return[{name:s.value.operate,icon:"wrench"},{name:s.value.operate,icon:"wrench"}]}},created(){_(this,b)},methods:{handleCloseEvent(){p({content:this.pack.shutdownEvent,duration:1e3})},previewCallback(){n({images:this.images,onChange:e=>{console.log("index",e)}})},preview(){n(this.image)}}}),i={};var D=d(F,y,x,!1,B,"db730b9a",null,null);function B(e){for(let a in i)this[a]=i[a]}var ne=function(){return D.exports}();export{ne as default};
