import{f as L,D as V,E as z,F as U,G as j,H as K,J as N,K as O,L as R,M as F,N as G,O as q}from"../modules/unplugin-icons-CHcuaOzf.js";import{d as I,t as B,S as A,ay as H,o as b,b as P,f as J,h as S,c as h,k as r,l as a,i as l,e as t,x as T,ad as f,ae as Y,F as Q,a8 as W,am as p,g as X}from"../modules/vue-C4LBvMXL.js";import{L as Z}from"../modules/shiki-loChyybc.js";import{b as $}from"./DrawingPreview-BmEBxG4i.js";import{V as nn}from"./ContextMenu-D1GfubhV.js";import{_ as E}from"../index-DoGJaGWG.js";import{I as en}from"./IconButton-BhayVbkg.js";import"./title-renderer-BTCW5u1O.js";import"./context-B3BF45hv.js";const on=I({__name:"Draggable",props:{storageKey:{type:String,required:!1},initial:{type:Object,required:!1}},setup(g,{expose:e}){e();const i=g,n=B(null),d=i.initial??{x:0,y:0},c=i.storageKey?A(i.storageKey,d):B(d),{style:u}=H(n,{initialValue:c}),s={props:i,el:n,initial:d,point:c,style:u};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}});function an(g,e,i,n,d,c){return b(),P("div",{ref:"el",class:"fixed",style:S(n.style)},[J(g.$slots,"default")],4)}const rn=E(on,[["render",an],["__file","G:/总结/2024/Slidev_cpe/slidev/node_modules/@slidev/client/internals/Draggable.vue"]]),ln=I({__name:"DrawingControls",setup(g,{expose:e}){e();const{brush:i,canClear:n,canRedo:d,canUndo:c,clear:u,drauu:s,drawingEnabled:w,drawingMode:m,drawingPinned:D,brushColors:y}=$();function k(){s.undo()}function C(){s.redo()}let _="stylus";function x(o){m.value=o,w.value=!0,o!=="eraseLine"&&(_=o)}function M(o){i.color=o,w.value=!0,m.value=_}const v={brush:i,canClear:n,canRedo:d,canUndo:c,clear:u,drauu:s,drawingEnabled:w,drawingMode:m,drawingPinned:D,brushColors:y,undo:k,redo:C,get lastDrawingMode(){return _},set lastDrawingMode(o){_=o},setDrawingMode:x,setBrushColor:M,get Menu(){return Z},VerticalDivider:nn,Draggable:rn,IconButton:en};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),tn=t("svg",{width:"1em",height:"1em",class:"-mt-0.5",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},[t("path",{d:"M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",fill:"currentColor"})],-1),sn=t("svg",{viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},[t("line",{x1:"2",y1:"15",x2:"22",y2:"4",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round"}),t("line",{x1:"2",y1:"24",x2:"28",y2:"10",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round"}),t("line",{x1:"7",y1:"31",x2:"29",y2:"19",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round"})],-1),dn={class:"flex bg-main p-2"},cn={class:"inline-block w-7 text-center"},_n={class:"pt-.5"};function gn(g,e,i,n,d,c){const u=L,s=V,w=z,m=U,D=j,y=K,k=N,C=O,_=R,x=F,M=G,v=q;return b(),h(n.Draggable,{class:l(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-20 border border-main",n.drawingEnabled?"":n.drawingPinned?"opacity-40 hover:opacity-90":"opacity-0 pointer-events-none"]),"storage-key":"slidev-drawing-pos","initial-x":10,"initial-y":10},{default:r(()=>[a(n.IconButton,{title:"Draw with stylus",class:l({shallow:n.drawingMode!=="stylus"}),onClick:e[0]||(e[0]=o=>n.setDrawingMode("stylus"))},{default:r(()=>[a(u)]),_:1},8,["class"]),a(n.IconButton,{title:"Draw a line",class:l({shallow:n.drawingMode!=="line"}),onClick:e[1]||(e[1]=o=>n.setDrawingMode("line"))},{default:r(()=>[tn]),_:1},8,["class"]),a(n.IconButton,{title:"Draw an arrow",class:l({shallow:n.drawingMode!=="arrow"}),onClick:e[2]||(e[2]=o=>n.setDrawingMode("arrow"))},{default:r(()=>[a(s)]),_:1},8,["class"]),a(n.IconButton,{title:"Draw an ellipse",class:l({shallow:n.drawingMode!=="ellipse"}),onClick:e[3]||(e[3]=o=>n.setDrawingMode("ellipse"))},{default:r(()=>[a(w)]),_:1},8,["class"]),a(n.IconButton,{title:"Draw a rectangle",class:l({shallow:n.drawingMode!=="rectangle"}),onClick:e[4]||(e[4]=o=>n.setDrawingMode("rectangle"))},{default:r(()=>[a(m)]),_:1},8,["class"]),a(n.IconButton,{title:"Erase",class:l({shallow:n.drawingMode!=="eraseLine"}),onClick:e[5]||(e[5]=o=>n.setDrawingMode("eraseLine"))},{default:r(()=>[a(D)]),_:1},8,["class"]),a(n.VerticalDivider),a(n.Menu,null,{popper:r(()=>[t("div",dn,[t("div",cn,T(n.brush.size),1),t("div",_n,[f(t("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>n.brush.size=o),type:"range",min:"1",max:"15",onChange:e[7]||(e[7]=o=>n.drawingMode=n.lastDrawingMode)},null,544),[[Y,n.brush.size]])])])]),default:r(()=>[a(n.IconButton,{title:"Adjust stroke width",class:l({shallow:n.drawingMode==="eraseLine"})},{default:r(()=>[sn]),_:1},8,["class"])]),_:1}),(b(!0),P(Q,null,W(n.brushColors,o=>(b(),h(n.IconButton,{key:o,title:"Set brush color",class:l(n.brush.color===o&&n.drawingMode!=="eraseLine"?"active":"shallow"),onClick:un=>n.setBrushColor(o)},{default:r(()=>[t("div",{class:l(["w-6 h-6 transition-all transform border",n.brush.color!==o?"rounded-1/2 scale-85 border-white":"rounded-md border-gray-300/50"]),style:S(n.drawingEnabled?{background:o}:{borderColor:o})},null,6)]),_:2},1032,["class","onClick"]))),128)),a(n.VerticalDivider),a(n.IconButton,{title:"Undo",class:l({disabled:!n.canUndo}),onClick:e[8]||(e[8]=o=>n.undo())},{default:r(()=>[a(y)]),_:1},8,["class"]),a(n.IconButton,{title:"Redo",class:l({disabled:!n.canRedo}),onClick:e[9]||(e[9]=o=>n.redo())},{default:r(()=>[a(k)]),_:1},8,["class"]),a(n.IconButton,{title:"Delete",class:l({disabled:!n.canClear}),onClick:e[10]||(e[10]=o=>n.clear())},{default:r(()=>[a(C)]),_:1},8,["class"]),a(n.VerticalDivider),a(n.IconButton,{title:n.drawingPinned?"Unpin drawing":"Pin drawing",class:l({shallow:!n.drawingPinned}),onClick:e[11]||(e[11]=o=>n.drawingPinned=!n.drawingPinned)},{default:r(()=>[f(a(_,{class:"transform -rotate-45"},null,512),[[p,n.drawingPinned]]),f(a(x,null,null,512),[[p,!n.drawingPinned]])]),_:1},8,["title","class"]),n.drawingEnabled?(b(),h(n.IconButton,{key:0,title:n.drawingPinned?"Drawing pinned":"Drawing unpinned",class:l({shallow:!n.drawingEnabled}),onClick:e[12]||(e[12]=o=>n.drawingEnabled=!n.drawingEnabled)},{default:r(()=>[f(a(M,null,null,512),[[p,n.drawingPinned]]),f(a(v,null,null,512),[[p,!n.drawingPinned]])]),_:1},8,["title","class"])):X("v-if",!0)]),_:1},8,["class"])}const Cn=E(ln,[["render",gn],["__file","G:/总结/2024/Slidev_cpe/slidev/node_modules/@slidev/client/internals/DrawingControls.vue"]]);export{Cn as default};
