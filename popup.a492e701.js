(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},l={},o=n.parcelRequirea886;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},n.parcelRequirea886=o),o.register("kQXty",(function(n,r){t(n.exports,"shouldRenderWhatsNewOverlay",(function(){return g}),(function(e){return g=e})),t(n.exports,"acknowledgeWhatsNewOverlay",(function(){return w}),(function(e){return w=e})),t(n.exports,"WhatsNewOverlay",(function(){return x}),(function(e){return x=e}));var l=o("aZikt"),i=o("hHMPk"),a=o("ltHDB"),u=o("1XmKR"),c=o("czDD7"),s=o("8xzWM"),d=o("kaQO6"),f=o("gDkTC"),p=o("lwple"),h=function(e,t,n,r){return new(n||(n=Promise))((function(l,o){function i(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}u((r=r.apply(e,t||[])).next())}))};const g=()=>h(void 0,void 0,void 0,(function*(){return 35>((yield c.getStorageValue(u.StorageKeys.LastSeenWhatsNewId))||0)})),w=()=>{c.setStorageValue(u.StorageKeys.LastSeenWhatsNewId,35)},x=({onClose:t})=>{const{t:n}=a.useTranslation(),r=f.useHistory();return e(l).createElement(v,null,e(l).createElement(m,null,e(l).createElement(d.Text,{color:"#8A81F8",size:16,weight:600},n("whatsNewOverlayNew"))),e(l).createElement(O,null,n("whatsNewOverlayv2ActionListOnME")),e(l).createElement(N,null,n("whatsNewOverlayv2SecondaryText")),e(l).createElement(b,{color:"#8A81F8",size:16,weight:500,onClick:()=>h(void 0,void 0,void 0,(function*(){t(),r.push(p.Path.Collectibles)}))},n("whatsNewOverlayv2ActionTryItNow")),e(l).createElement(y,null),e(l).createElement(E,null,e(l).createElement(T,{onClick:t})))},v=i.default.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
  width: 100%;
  padding: 20px;
`,y=i.default.div`
  flex: 1;
`,m=i.default.div`
  margin-top: 40px;
  align-self: center;
  width: 76px;
  height: 35px;
  background-color: rgba(138, 129, 248, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`,O=i.default(d.Text).attrs({size:28,weight:500})`
  align-self: center;
  margin-top: 22px;
  line-height: 34px;
  max-width: 275px;
  text-align: center;
`,N=i.default(d.Text).attrs({size:16,color:"#777"})`
  align-self: center;
  margin-top: 22px;
  max-width: 275px;
  text-align: center;
  span {
    color: white;
  }
`,b=i.default(d.Text).attrs({color:"#8A81F8",size:16,weight:500})`
  cursor: pointer;
  margin-top: 22px;
`,E=i.default.div``,T=t=>{const{t:n}=a.useTranslation();return e(l).createElement(s.Button,Object.assign({type:"button",theme:"default"},t),n("whatsNewOverlayActionButtonClose"))}}));define=__define;})(window.define);