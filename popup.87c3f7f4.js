(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequirea886;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequirea886=o),o.register("CmvE4",(function(t,n){e(t.exports,"SkeletonLoader",(function(){return a}));var r=o("hHMPk");const i=r.keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`,a=r.default.div`
  display: flex;
  flex-direction: ${({flexDirection:e})=>e};
  align-items: ${({align:e})=>e};
  justify-content: ${({justify:e})=>e};
  width: ${({width:e})=>e};
  height: ${({height:e})=>e};
  margin: ${({margin:e})=>e};
  padding: ${({padding:e})=>e};
  border-radius: ${({borderRadius:e})=>e};
  background-color: ${({backgroundColor:e})=>e};
  animation: ${i} 2s ease-in-out infinite;
`})),o.register("cqRHn",(function(n,r){e(n.exports,"shouldRenderWhatsNewOverlay",(function(){return h}),(function(e){return h=e})),e(n.exports,"acknowledgeWhatsNewOverlay",(function(){return w}),(function(e){return w=e})),e(n.exports,"WhatsNewOverlay",(function(){return x}),(function(e){return x=e}));var i=o("aZikt"),a=o("hHMPk"),l=o("7Qmuu"),u=o("1XmKR"),c=o("czDD7"),s=o("aADTv"),d=o("g7X40"),f=o("gDkTC"),g=o("lwple"),p=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(e){o(e)}}function l(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}u((r=r.apply(e,t||[])).next())}))};const h=()=>p(void 0,void 0,void 0,(function*(){return 35>((yield c.getStorageValue(u.StorageKeys.LastSeenWhatsNewId))||0)})),w=()=>{c.setStorageValue(u.StorageKeys.LastSeenWhatsNewId,35)},x=({onClose:e})=>{const{t:n}=l.useTranslation(),r=f.useHistory();return t(i).createElement(v,null,t(i).createElement(m,null,t(i).createElement(d.Text,{color:"#8A81F8",size:16,weight:600},n("whatsNewOverlayNew"))),t(i).createElement(b,null,n("whatsNewOverlayv2ActionListOnME")),t(i).createElement(E,null,n("whatsNewOverlayv2SecondaryText")),t(i).createElement(N,{color:"#8A81F8",size:16,weight:500,onClick:()=>p(void 0,void 0,void 0,(function*(){e(),r.push(g.Path.Collectibles)}))},n("whatsNewOverlayv2ActionTryItNow")),t(i).createElement(y,null),t(i).createElement(O,null,t(i).createElement(T,{onClick:e})))},v=a.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 20px;
`,y=a.default.div`
  flex: 1;
`,m=a.default.div`
  margin-top: 40px;
  align-self: center;
  width: 76px;
  height: 35px;
  background-color: rgba(138, 129, 248, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`,b=a.default(d.Text).attrs({size:28,weight:500})`
  align-self: center;
  margin-top: 22px;
  line-height: 34px;
  max-width: 275px;
  text-align: center;
`,E=a.default(d.Text).attrs({size:16,color:"#777"})`
  align-self: center;
  margin-top: 22px;
  max-width: 275px;
  text-align: center;
  span {
    color: white;
  }
`,N=a.default(d.Text).attrs({color:"#8A81F8",size:16,weight:500})`
  cursor: pointer;
  margin-top: 22px;
`,O=a.default.div``,T=e=>{const{t:n}=l.useTranslation();return t(i).createElement(s.Button,Object.assign({type:"button",theme:"default"},e),n("whatsNewOverlayActionButtonClose"))}}));define=__define;})(window.define);