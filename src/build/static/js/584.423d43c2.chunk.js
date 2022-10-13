"use strict";(self.webpackChunkarcaden_tool_client=self.webpackChunkarcaden_tool_client||[]).push([[584],{8452:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(3967),o=r(68),i=r(3701),a=r(533),c=r(3044),l=r(184);var s=e=>{let{color:n,outline:r,size:o,sx:i,...a}=e;const s=(0,t.Z)(),p=n&&!r&&{color:s.palette.background.paper,bgcolor:"".concat(n,".main")},u=r&&{color:n?"".concat(n,".main"):"primary.main",bgcolor:s.palette.background.paper,border:"2px solid",borderColor:n?"".concat(n,".main"):"primary.main"};let d={};switch(o){case"badge":d={width:s.spacing(3.5),height:s.spacing(3.5)};break;case"xs":d={width:s.spacing(4.25),height:s.spacing(4.25)};break;case"sm":d={width:s.spacing(5),height:s.spacing(5)};break;case"lg":d={width:s.spacing(9),height:s.spacing(9)};break;case"xl":d={width:s.spacing(10.25),height:s.spacing(10.25)};break;case"md":d={width:s.spacing(7.5),height:s.spacing(7.5)};break;default:d={}}return(0,l.jsx)(c.Z,{sx:{...p,...u,...d,...i},...a})};var p=e=>{let{title:n,link:r,icon:c}=e;const p=(0,t.Z)();return(0,l.jsx)(o.Z,{title:n||"Reference",placement:"left",children:(0,l.jsxs)(i.Z,{disableRipple:!0,children:[!c&&(0,l.jsx)(s,{component:a.Z,href:r,target:"_blank",alt:"MUI Logo",size:"badge",color:"primary",outline:!0,children:(0,l.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsxs)("g",{clipPath:"url(#clip0)",children:[(0,l.jsx)("path",{d:"M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",fill:p.palette.primary[800]}),(0,l.jsx)("path",{d:"M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",fill:p.palette.primary.main}),(0,l.jsx)("path",{d:"M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",fill:p.palette.primary[800]}),(0,l.jsx)("path",{d:"M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",fill:p.palette.primary.main})]}),(0,l.jsx)("defs",{children:(0,l.jsx)("clipPath",{id:"clip0",children:(0,l.jsx)("rect",{width:"300",height:"238.3",fill:"white",transform:"translate(100 131)"})})})]})}),c&&(0,l.jsx)(s,{component:a.Z,href:r,target:"_blank",size:"badge",color:"primary",outline:!0,children:c})]})})}},4584:function(e,n,r){r.r(n);var t=r(6934),o=r(7621),i=r(3735),a=r(8452),c=r(1164),l=r(184);const s=(0,t.ZP)("iframe")((e=>{let{theme:n}=e;return{height:"calc(100vh - 210px)",border:"1px solid",borderColor:n.palette.primary.light}}));n.default=()=>(0,l.jsx)(i.Z,{title:"Tabler Icons",secondary:(0,l.jsx)(a.Z,{icon:(0,l.jsx)(c.Z,{fontSize:"small"}),link:"https://tablericons.com/"}),children:(0,l.jsx)(o.Z,{sx:{overflow:"hidden"},children:(0,l.jsx)(s,{title:"Tabler Icons",width:"100%",src:"https://tablericons.com/"})})})},1164:function(e,n,r){var t=r(4836);n.Z=void 0;var o=t(r(5649)),i=r(184),a=(0,o.default)((0,i.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");n.Z=a},533:function(e,n,r){r.d(n,{Z:function(){return j}});var t=r(3366),o=r(7462),i=r(2791),a=r(8182),c=r(4419),l=r(4036),s=r(6934),p=r(3736),u=r(8221),d=r(2071),h=r(890),m=r(1217);function b(e){return(0,m.Z)("MuiLink",e)}var g=(0,r(5878).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),x=r(8529),f=r(2065);const Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var v=e=>{let{theme:n,ownerState:r}=e;const t=(e=>Z[e]||e)(r.color),o=(0,x.D)(n,"palette.".concat(t),!1)||r.color,i=(0,x.D)(n,"palette.".concat(t,"Channel"));return"vars"in n&&i?"rgba(".concat(i," / 0.4)"):(0,f.Fq)(o,.4)},y=r(184);const w=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant","sx"],k=(0,s.ZP)(h.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n["underline".concat((0,l.Z)(r.underline))],"button"===r.component&&n.button]}})((e=>{let{theme:n,ownerState:r}=e;return(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&(0,o.Z)({textDecoration:"underline"},"inherit"!==r.color&&{textDecorationColor:v({theme:n,ownerState:r})},{"&:hover":{textDecorationColor:"inherit"}}),"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},["&.".concat(g.focusVisible)]:{outline:"auto"}})}));var j=i.forwardRef((function(e,n){const r=(0,p.Z)({props:e,name:"MuiLink"}),{className:s,color:h="primary",component:m="a",onBlur:g,onFocus:x,TypographyClasses:f,underline:v="always",variant:j="inherit",sx:L}=r,V=(0,t.Z)(r,w),{isFocusVisibleRef:M,onBlur:C,onFocus:S,ref:z}=(0,u.Z)(),[D,R]=i.useState(!1),A=(0,d.Z)(n,z),F=(0,o.Z)({},r,{color:h,component:m,focusVisible:D,underline:v,variant:j}),_=(e=>{const{classes:n,component:r,focusVisible:t,underline:o}=e,i={root:["root","underline".concat((0,l.Z)(o)),"button"===r&&"button",t&&"focusVisible"]};return(0,c.Z)(i,b,n)})(F);return(0,y.jsx)(k,(0,o.Z)({color:h,className:(0,a.Z)(_.root,s),classes:f,component:m,onBlur:e=>{C(e),!1===M.current&&R(!1),g&&g(e)},onFocus:e=>{S(e),!0===M.current&&R(!0),x&&x(e)},ref:A,ownerState:F,variant:j,sx:[...Object.keys(Z).includes(h)?[]:[{color:h}],...Array.isArray(L)?L:[L]]},V))}))}}]);
//# sourceMappingURL=584.423d43c2.chunk.js.map