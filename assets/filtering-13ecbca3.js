import{t as e,r as t}from"./theme-0e464920.js";const a=a=>{const r=e("[data-filter-form]",a);let n,i;function o(e){e=e||r[0],n=new FormData(e),i=new URLSearchParams(n).toString()}return o(),{getState:()=>({url:i}),filtersUpdated(a,r){return function(t){if(!t)return;e("[data-filter-item]",t).forEach((t=>{"checkbox"===t.type||"radio"===t.type?e(`input[name='${t.name}'][value='${t.value}']`).forEach((e=>{e.checked=t.checked})):e(`input[name='${t.name}']`).forEach((e=>{e.value=t.value}))}))}(a),o(a),t("filters:updated"),r(this.getState())},removeFilters(r,n){return function(t){if(!t)return;let r;t.forEach((e=>{r=r?`, ${r}`:"";const{name:t,value:a}=e.dataset;r=`input[name='${t}'][value='${a}']${r}`})),e(r,a).forEach((e=>{e.checked=!1}))}(r),o(),t("filters:filter-removed"),n(this.getState())},removeRange(r){return e("[data-range-input]",a).forEach((e=>{e.value=""})),o(),t("filters:range-removed"),r(this.getState())},clearAll(e){return i="",r.forEach((e=>{e.reset()})),e(this.getState())}}};export{a as default};
//# sourceMappingURL=filtering-13ecbca3.js.map
