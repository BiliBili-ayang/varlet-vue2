import{R as v}from"./index.ae3982d6.js";import{L as u}from"./index.78efd919.js";import{d}from"./create.11eee831.js";import{t as m}from"./elements.9c883ade.js";import{n as c}from"./index.072f227e.js";import{A as _}from"./AppType.bd938cab.js";import{R as h}from"./index.a511959c.js";import{w as g,a as f}from"./utils.3b864b4e.js";import{d as y}from"./index.9b1139e6.js";import{u as x,a as n,_ as z,b as C,c as w}from"./en-US.36f69c14.js";import"./index.bab5582f.js";import"./vendor.7d1cc22d.js";import"./shared.f8da68a0.js";import"./relation.9e421618.js";function k(e){return["fill","contain","cover","none","scale-down"].includes(e)}const S={src:{type:String},fit:{type:String,validator:k,default:"fill"},alt:{type:String},width:{type:[String,Number]},height:{type:[String,Number]},radius:{type:[String,Number],default:0},loading:{type:String},error:{type:String},lazy:{type:Boolean,default:!1},ripple:{type:Boolean,default:!1},block:{type:Boolean,default:!0}};var b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{disabled:!e.ripple},expression:"{ disabled: !ripple }"}],staticClass:"var-image var--box",class:[e.block?null:"var--inline-block"],style:{width:e.toSizeUnit(e.width),height:e.toSizeUnit(e.height),"border-radius":e.toSizeUnit(e.radius)}},[e.lazy?t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.src,expression:"src"}],staticClass:"var-image__image",style:{objectFit:e.fit},attrs:{alt:e.alt,"lazy-error":e.error,"lazy-loading":e.loading},on:{load:e.handleLoad,error:e.handleError,click:e.handleClick}}):t("img",{staticClass:"var-image__image",style:{objectFit:e.fit},attrs:{alt:e.alt,src:e.src},on:{load:e.handleLoad,error:e.handleError,click:e.handleClick}})])},F=[];const L=d({name:"VarImage",directives:{Lazy:u,Ripple:v},props:S,methods:{toSizeUnit:m,handleLoad(e){const a=e.currentTarget,{lazy:t}=this,{onLoad:r,onError:s}=this.getListeners();t?(a._lazy.state==="success"&&(r==null||r(e)),a._lazy.state==="error"&&(s==null||s(e))):r==null||r(e)},handleClick(e){var a,t;(t=(a=this.getListeners()).onClick)==null||t.call(a,e)},handleError(e){const{lazy:a}=this,{onError:t}=this.getListeners();!a&&(t==null||t(e))}}}),p={};var R=c(L,b,F,!1,j,null,null,null);function j(e){for(let a in p)this[a]=p[a]}var i=function(){return R.exports}();i.install=function(e){e.component(i.name,i)};var U={basicUsage:"\u57FA\u672C\u4F7F\u7528",fitMode:"\u586B\u5145\u6A21\u5F0F",setRadius:"\u8BBE\u7F6E\u5706\u89D2",useRipple:"\u5F00\u542F\u6C34\u6CE2",useLazyLoad:"\u5F00\u542F\u61D2\u52A0\u8F7D"},N={basicUsage:"Basic Usage",fitMode:"Fit Mode",setRadius:"Set Radius",useRipple:"Use Ripple",useLazyLoad:"Use LazyLoad"};const{add:o,use:$,pack:B,packs:te,merge:ae}=x(),E=e=>{w(e),$(e)};n("zh-CN",z);n("en-US",C);o("zh-CN",U);o("en-US",N);var M=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"var-image-example"},[t("app-type",[e._v(e._s(e.pack.basicUsage))]),t("var-image",{attrs:{src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("app-type",[e._v(e._s(e.pack.fitMode))]),t("var-row",[t("div",{staticClass:"fit-item"},[t("var-image",{attrs:{width:"85px",height:"85px",src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("div",[e._v("fill")])],1),t("div",{staticClass:"fit-item"},[t("var-image",{attrs:{width:"85px",height:"85px",fit:"cover",src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("div",[e._v("cover")])],1),t("div",{staticClass:"fit-item"},[t("var-image",{attrs:{width:"85px",height:"85px",fit:"contain",src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("div",[e._v("contain")])],1),t("div",{staticClass:"fit-item"},[t("var-image",{attrs:{width:"85px",height:"85px",fit:"none",src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("div",[e._v("none")])],1),t("div",{staticClass:"fit-item"},[t("var-image",{attrs:{width:"85px",height:"85px",fit:"scale-down",src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("div",[e._v("scale-down")])],1)]),t("app-type",[e._v(e._s(e.pack.setRadius))]),t("var-row",[t("var-image",{staticStyle:{"margin-right":"10px"},attrs:{width:"85px",height:"85px",fit:"cover",radius:10,src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("var-image",{attrs:{width:"85px",height:"85px",fit:"cover",radius:"50%",src:"https://varlet-vue2.vercel.app/cat.jpg"}})],1),t("app-type",[e._v(e._s(e.pack.useRipple))]),t("var-image",{attrs:{ripple:"",src:"https://varlet-vue2.vercel.app/cat.jpg"}}),t("app-type",[e._v(e._s(e.pack.useLazyLoad))]),t("var-image",{attrs:{lazy:"",src:"https://varlet-vue2.vercel.app/cat.jpg"}})],1)},A=[];const I={name:"ImageExample",components:{VarImage:i,VarRow:h,AppType:_},computed:{pack(){return B.value}},created(){g(this,E),f(this,y)}},l={};var D=c(I,M,A,!1,V,"80ad4db8",null,null);function V(e){for(let a in l)this[a]=l[a]}var re=function(){return D.exports}();export{re as default};
