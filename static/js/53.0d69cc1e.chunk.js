"use strict";(self.webpackChunkKotini=self.webpackChunkKotini||[]).push([[53],{5053:function(e,t,a){a.r(t);var n=a(885),r=a(2791),l=a(2981),o=a(8358),s=a(785),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},i=(0,r.memo)((function(e){var t=e.kcContext,a=e.i18n,i=e.doFetchDefaultThemeResources,m=void 0===i||i,u=e.Template,p=void 0===u?l.Z:u,d=c(e,["kcContext","i18n","doFetchDefaultThemeResources","Template"]),f=a.msg,b=a.msgStr,k=t.url,v=t.isAppInitiatedAction,C=(0,r.useState)(!1),g=(0,n.Z)(C,2),y=g[0],E=g[1];return r.createElement(p,Object.assign({},Object.assign({kcContext:t,i18n:a,doFetchDefaultThemeResources:m},d),{headerNode:f("loginProfileTitle"),formNode:r.createElement("form",{id:"kc-update-profile-form",className:(0,o.W)(d.kcFormClass),action:k.loginAction,method:"post"},r.createElement(s.M,Object.assign({kcContext:t,onIsFormSubmittableValueChange:E,i18n:a},d)),r.createElement("div",{className:(0,o.W)(d.kcFormGroupClass)},r.createElement("div",{id:"kc-form-options",className:(0,o.W)(d.kcFormOptionsClass)},r.createElement("div",{className:(0,o.W)(d.kcFormOptionsWrapperClass)})),r.createElement("div",{id:"kc-form-buttons",className:(0,o.W)(d.kcFormButtonsClass)},v?r.createElement(r.Fragment,null,r.createElement("input",{className:(0,o.W)(d.kcButtonClass,d.kcButtonPrimaryClass,d.kcButtonLargeClass),type:"submit",value:b("doSubmit")}),r.createElement("button",{className:(0,o.W)(d.kcButtonClass,d.kcButtonDefaultClass,d.kcButtonLargeClass),type:"submit",name:"cancel-aia",value:"true",formNoValidate:!0},f("doCancel"))):r.createElement("input",{className:(0,o.W)(d.kcButtonClass,d.kcButtonPrimaryClass,d.kcButtonBlockClass,d.kcButtonLargeClass),type:"submit",defaultValue:b("doSubmit"),disabled:!y}))))}))}));t.default=i},785:function(e,t,a){a.d(t,{M:function(){return i}});var n=a(885),r=a(2791),l=a(8358),o=a(8737),s=a(5006),c=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},i=(0,r.memo)((function(e){var t=e.kcContext,a=e.onIsFormSubmittableValueChange,i=e.i18n,m=e.BeforeField,u=e.AfterField,p=c(e,["kcContext","onIsFormSubmittableValueChange","i18n","BeforeField","AfterField"]),d=i.advancedMsg,f=(0,s.H)({kcContext:t,i18n:i}),b=f.formValidationState,k=b.fieldStateByAttributeName,v=b.isFormSubmittable,C=f.formValidationReducer,g=f.attributesWithPassword;(0,r.useEffect)((function(){a(v)}),[v]);var y=(0,o.useCallbackFactory)((function(e,t){var a=(0,n.Z)(e,1)[0],r=(0,n.Z)(t,1)[0].target.value;return C({action:"update value",name:a,newValue:r})})),E=(0,o.useCallbackFactory)((function(e){var t=(0,n.Z)(e,1)[0];return C({action:"focus lost",name:t})})),h="";return r.createElement(r.Fragment,null,g.map((function(e,t){var a,n=e.group,o=void 0===n?"":n,s=e.groupDisplayHeader,c=void 0===s?"":s,i=e.groupDisplayDescription,f=void 0===i?"":i,b=k[e.name],v=b.value,C=b.displayableErrors,g=(0,l.W)(p.kcFormGroupClass,0!==C.length&&p.kcFormGroupErrorClass);return r.createElement(r.Fragment,{key:t},o!==h&&""!==(h=o)&&r.createElement("div",{className:g},r.createElement("div",{className:(0,l.W)(p.kcContentWrapperClass)},r.createElement("label",{id:"header-".concat(o),className:(0,l.W)(p.kcFormGroupHeader)},d(c)||h)),""!==f&&r.createElement("div",{className:(0,l.W)(p.kcLabelWrapperClass)},r.createElement("label",{id:"description-".concat(o),className:"".concat((0,l.W)(p.kcLabelClass))},d(f)))),m&&r.createElement(m,{attribute:e}),r.createElement("div",{className:g},r.createElement("div",{className:(0,l.W)(p.kcLabelWrapperClass)},r.createElement("label",{htmlFor:e.name,className:(0,l.W)(p.kcLabelClass)},d(null!==(a=e.displayName)&&void 0!==a?a:"")),e.required&&r.createElement(r.Fragment,null,"*")),r.createElement("div",{className:(0,l.W)(p.kcInputWrapperClass)},function(){var t=e.validators.options;return void 0!==t?r.createElement("select",{id:e.name,name:e.name,onChange:y(e.name),onBlur:E(e.name),value:v},t.options.map((function(e){return r.createElement("option",{key:e,value:e},e)}))):r.createElement("input",{type:function(){switch(e.name){case"password-confirm":case"password":return"password";default:return"text"}}(),id:e.name,name:e.name,value:v,onChange:y(e.name),className:(0,l.W)(p.kcInputClass),"aria-invalid":0!==C.length,disabled:e.readOnly,autoComplete:e.autocomplete,onBlur:E(e.name)})}(),0!==C.length&&function(){var t="input-error-".concat(e.name);return r.createElement(r.Fragment,null,r.createElement("style",null,"#".concat(t," > span: { display: block; }")),r.createElement("span",{id:t,className:(0,l.W)(p.kcInputErrorMessageClass),style:{position:1===C.length?"absolute":void 0},"aria-live":"polite"},C.map((function(e){return e.errorMessage}))))}())),u&&r.createElement(u,{attribute:e}))})))}))}}]);
//# sourceMappingURL=53.0d69cc1e.chunk.js.map