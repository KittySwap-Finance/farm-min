(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{781:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return le}));var c,a,r,i,s,o,j,u,b,l,O,d,p=n(56),f=n(0),x=n(3),h=n(40),m=n(187),g=n(191),v=n(4),w=n.n(v),k=n(15),y=n(22),S=n(74),z=n(12),T=n.n(z),B=n(756),K=n(17),E=n(34),N=n(42),R=n(80),C=n(755),I=n(134),Y=function(){var e=Object(f.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(S.m)().account,r=Object(I.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(k.a)(w.a.mark((function e(){var t,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.a.map((function(e){return{address:Object(N.d)(),name:"pendingKitty",params:[e.pid,a]}})),e.next=3,Object(E.a)(R,t);case 3:n=e.sent,r=C.a.map((function(e,t){return Object(K.a)(Object(K.a)({},e),{},{balance:new T.a(n[t])})})),c(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},F=n(757),H=n(766),L=n(11),$=function(e){var t=e.value,n=e.decimals,c=e.fontSize,a=void 0===c?"40px":c,r=e.prefix,i=Object(H.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),s=i.countUp,o=i.update,j=Object(f.useRef)(o);return Object(f.useEffect)((function(){j.current(t)}),[t,j]),Object(L.jsxs)(h.B,{bold:!0,fontSize:a,children:[r,s]})},A=function(e){var t=e.earningsSum,n=Object(m.a)();return Object(S.m)().account?Object(L.jsx)($,{value:t}):Object(L.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},D=function(e){var t=e.cakeBalance,n=Object(m.a)();return Object(S.m)().account?Object(L.jsx)($,{value:t,fontSize:"24px"}):Object(L.jsx)(h.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},M=n(113),P=n(297),Q=n(91),W=n(758),J=function(e){var t=Object(f.useState)(new T.a(0)),n=Object(y.a)(t,2),c=n[0],a=n[1],r=Object(S.m)(),i=r.account,s=r.ethereum,o=Object(I.a)().fastRefresh;return Object(f.useEffect)((function(){i&&s&&function(){var t=Object(k.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(W.b)(s,e,i);case 2:n=t.sent,a(new T.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[i,s,e,o]),c},U=function(){var e=Object(f.useState)([]),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(S.m)().account,r=Object(I.a)().fastRefresh;return Object(f.useEffect)((function(){a&&function(){var e=Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=C.a.map((function(e){return{address:Object(N.d)(),name:"pendingKitty",params:[e.pid,a]}})),e.next=3,Object(E.a)(R,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a,r]),n},V=n(746),q=Object(x.e)(h.h)(c||(c=Object(p.a)(["\n  background-image: url('/images/kitty/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]))),G=x.e.div(a||(a=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),X=x.e.img(r||(r=Object(p.a)(["\n  margin-bottom: 16px;\n"]))),Z=x.e.div(i||(i=Object(p.a)(["\n  color: ",";\n  font-size: 14px;\n"])),(function(e){return e.theme.colors.textSubtle})),_=x.e.div(s||(s=Object(p.a)(["\n  margin-top: 24px;\n"]))),ee=function(){var e=Object(f.useState)(!1),t=Object(y.a)(e,2),n=t[0],c=t[1],a=Object(S.m)().account,r=Object(m.a)(),i=Y(),s=Object(V.a)(J(Object(N.a)())),o=Object(M.f)().toNumber(),j=U().reduce((function(e,t){return e+new T.a(t).div(new T.a(10).pow(18)).toNumber()}),0),u=i.filter((function(e){return e.balance.toNumber()>0})),b=Object(B.a)(u.map((function(e){return e.pid}))).onReward,l=Object(f.useCallback)(Object(k.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.prev=1,e.next=4,b();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,c(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[b]);return Object(L.jsx)(q,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"xl",mb:"24px",children:r(542,"Farms & Staking")}),Object(L.jsx)(X,{src:"/images/kitty/2.png",alt:"cake logo",width:64,height:64}),Object(L.jsxs)(G,{children:[Object(L.jsx)(Z,{children:r(544,"KITTY to Harvest")}),Object(L.jsx)(A,{earningsSum:j}),Object(L.jsxs)(Z,{children:["~$",(o*j).toFixed(2)]})]}),Object(L.jsxs)(G,{children:[Object(L.jsx)(Z,{children:r(546,"KITTY in Wallet")}),Object(L.jsx)(D,{cakeBalance:s}),Object(L.jsxs)(Z,{children:["~$",(o*s).toFixed(2)]})]}),Object(L.jsx)(_,{children:a?Object(L.jsx)(h.d,{id:"harvest-all",disabled:u.length<=0||n,onClick:l,fullWidth:!0,children:n?r(548,"Collecting KITTY"):r(999,"Harvest all (".concat(u.length,")"))}):Object(L.jsx)(F.a,{fullWidth:!0})})]})})},te=n(753),ne=Object(x.e)(h.h)(o||(o=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),ce=x.e.div(j||(j=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),ae=function(){var e=Object(m.a)(),t=function(){var e=Object(I.a)().slowRefresh,t=Object(f.useState)(),n=Object(y.a)(t,2),c=n[0],a=n[1];return Object(f.useEffect)((function(){function e(){return(e=Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(Q.a)(P,Object(N.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,a(new T.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(f.useState)(new T.a(0)),n=Object(y.a)(t,2),c=n[0],a=n[1],r=Object(I.a)().slowRefresh;return Object(f.useEffect)((function(){!function(){var e=Object(k.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(Q.a)(P,Object(N.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,a(new T.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,r]),c}(Object(N.a)()),c=Object(M.c)(),a=Object(M.f)(),r=t?t.minus(n):new te.a(0),i=Object(V.a)(r),s=a.times(r),o=0;return c&&c[0]&&c[0].kittyPerBlock&&(o=new te.a(c[0].kittyPerBlock).div(new te.a(10).pow(18)).toNumber()),Object(L.jsx)(ne,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"xl",mb:"24px",children:e(534,"Kitty Stats")}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.B,{fontSize:"14px",children:e(536,"Total KITTY Supply")}),i&&Object(L.jsx)($,{fontSize:"14px",value:i,decimals:0})]}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.B,{fontSize:"14px",children:e(999,"Market Cap")}),Object(L.jsx)($,{fontSize:"14px",value:Object(V.a)(s),decimals:0,prefix:"$"})]}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.B,{fontSize:"14px",children:e(538,"Total KITTY Burned")}),Object(L.jsx)($,{fontSize:"14px",value:Object(V.a)(n),decimals:0})]}),Object(L.jsxs)(ce,{children:[Object(L.jsx)(h.B,{fontSize:"14px",children:e(540,"New KITTY/block")}),Object(L.jsx)(h.B,{bold:!0,fontSize:"14px",children:o})]})]})})},re=Object(x.e)(h.h)(u||(u=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]))),ie=function(){var e=Object(m.a)(),t=Object(M.g)();return Object(L.jsx)(re,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)($,{value:t.toNumber(),prefix:"$",decimals:2}),Object(L.jsx)(h.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},se=n(778),oe=Object(x.e)(h.h)(b||(b=Object(p.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),je=(x.e.div(l||(l=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),function(){var e=Object(m.a)();return Object(L.jsx)(oe,{children:Object(L.jsxs)(h.i,{children:[Object(L.jsx)(h.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(L.jsx)(se.a,{dataSource:{sourceType:"profile",screenName:"SwapKitty"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),ue=x.e.div(O||(O=Object(p.a)(["\n  align-items: center;\n  background-image: url('/images/kitty/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/kitty/3.png'), url('/images/kitty/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.lg})),be=Object(x.e)(h.b)(d||(d=Object(p.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),le=function(){var e=Object(m.a)();return Object(L.jsxs)(g.a,{children:[Object(L.jsxs)(ue,{children:[Object(L.jsx)(h.n,{as:"h1",size:"xl",mb:"24px",color:"secondary",children:e(576,"Kitty Swap")}),Object(L.jsx)(h.B,{children:e(578,"The Cutest AMM Exchange on Binance Smart chain")})]}),Object(L.jsx)("div",{children:Object(L.jsxs)(be,{children:[Object(L.jsx)(ee,{}),Object(L.jsx)(je,{}),Object(L.jsx)(ae,{}),Object(L.jsx)(ie,{})]})})]})}}}]);
//# sourceMappingURL=13.e54df9ba.chunk.js.map