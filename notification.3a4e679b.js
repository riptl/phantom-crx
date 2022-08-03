(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},r=n.parcelRequirea886;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},n.parcelRequirea886=r),r.register("3SLht",(function(n,o){t(n.exports,"BlocklistConnectRequest",(function(){return w}),(function(e){return w=e})),t(n.exports,"BlocklistOrigin",(function(){return S}),(function(e){return S=e}));var i=r("aZikt"),l=r("hHMPk"),a=r("ltHDB"),c=r("cFuyE"),s=r("8sCMi"),d=r("lFcxH"),u=r("8xzWM"),f=r("kaQO6"),p=r("awYjP"),m=r("6oEu9"),g=r("9OxTN"),x=r("lwple"),b=r("czDD7"),h=r("h7pEd"),E=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function l(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,a)}c((o=o.apply(e,t||[])).next())}))};const y="#eb3742",v=l.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,T=l.default.div`
  border: 1px solid ${y};
  border-radius: 8px;
  padding: 10px 10px;
  margin-bottom: 10px;
`,w=({tabId:t,origin:n,confirmApproval:o,denyApproval:r})=>{const{t:l}=a.useTranslation();return e(i).createElement(h.Container,null,e(i).createElement(s.AccountHeader,{lastChild:e(i).createElement("div",null),walletMenuShowOnlyAccounts:!0}),e(i).createElement(h.Body,null,e(i).createElement(h.TopGroup,null,e(i).createElement(d.TabIconHeader,{tabId:t,secondaryText:c.removeWebPrefixes(n),showWarning:!0})),e(i).createElement(v,null,e(i).createElement(T,null,e(i).createElement(f.Text,{size:14,color:y},l("blocklistConnectionDisabled"))),e(i).createElement(f.Text,{size:14,color:"#777777",hoverColor:y,onClick:()=>o(n)},l("blocklistConnectionIgnoreWarning")))),e(i).createElement(h.Footer,{plain:!0},e(i).createElement(u.Button,{onClick:()=>r(n)},l("blocklistConnectionActionButtonClose"))))},k=l.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fae5e6;
`,O=l.default.div`
  position: absolute;
  width: 760px;
  height: 603px;
  left: calc(50% - 760px / 2 + 0.5px);
  top: calc(50% - 603px / 2);
  border: 2px solid ${y};
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
`,C=l.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`,I=l.default.a`
  text-decoration: underline;
  color: ${y};
`,S=({origin:t})=>{const{t:n}=a.useTranslation(),o=t?g.removeSubdomainFromDomain(t):"";return e(i).createElement(k,null,e(i).createElement(O,null,e(i).createElement(C,null,e(i).createElement(p.LogoPhishingDetected,null)),e(i).createElement(f.Text,{size:30,color:y,weight:"600"},n("blocklistOriginDomainIsBlocked",{domainName:o||n("blocklistOriginThisDomain")})),e(i).createElement(f.Text,{color:y},n("blocklistOriginSiteIsMalicious")),e(i).createElement(f.Text,{color:y},e(i).createElement(a.Trans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(i).createElement(I,{href:m.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(i).createElement(I,{href:m.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),o?e(i).createElement(f.Text,{color:y,onClick:()=>E(void 0,void 0,void 0,(function*(){const e=yield b.getStorageValue(x.StorageKeys.UserWhitelistedOrigins);let n=JSON.parse(`${e}`);n?n.push(o):n=[o],n=[...new Set(n)],b.setStorageValue(x.StorageKeys.UserWhitelistedOrigins,JSON.stringify(n)),window.location.href=t})),hoverUnderline:!0},n("blocklistOriginIgnoreWarning",{domainName:o})):e(i).createElement(e(i).Fragment,null)))}}));define=__define;})(window.define);