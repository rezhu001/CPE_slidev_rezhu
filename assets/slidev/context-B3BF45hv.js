import{a2 as n,ab as r,t as u,y as j,aw as $,az as v}from"../modules/vue-C4LBvMXL.js";import{ax as p,a5 as x,a3 as C,a4 as S,ay as l,a2 as R,V as T,a6 as k,az as E,aA as F}from"../index-DoGJaGWG.js";function b(){const t=n(p),a=r(t,"nav"),s=n(x).value,e=r(s,"current"),i=n(C),c=n(S),o=n(l,{}),d=n(R,void 0),m=n(T,u(1)),f=n(k,j(()=>1));return{$slidev:t,$nav:a,$clicksContext:s,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function A(t){var i,c;$(l,t);const{$slidev:a,$page:s}=b(),e=a.nav.slides.find(o=>o.no===s.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function L(t,a){return{...v(t,a===0?E:F),frontmatter:t}}export{L as f,A as p,b as u};
