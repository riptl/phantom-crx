(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequirea886;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequirea886=r);var o=r("aZikt"),l=r("ihAua"),i=r("hHMPk"),c=r("ehJ6P"),d=r("d3pmY"),s=r("lxqKj"),u=r("gDkTC"),p=r("lwple"),m=r("czDD7");r("6CHoY");var g=r("7Qmuu"),h=r("6oEu9"),y=(p=r("lwple"),r("6oQjh")),f=r("ci2Mj"),v=r("8C6BZ"),S=r("5cKs6"),x=r("7eQt4"),E=r("cFuyE"),w=r("jKFz7"),T=r("iXlMH"),P=r("5DQqc"),b=r("fMhDQ"),H=r("h5G75"),A=r("aADTv"),C=r("i2Zy4"),k=r("hJDxl"),I=r("9P0Mo"),F=r("2cgmz"),D=r("lSpdH"),L=(o=r("aZikt"),i=r("hHMPk"),x=r("7eQt4"),r("hoJun")),B=r("8FNEt"),O=(k=r("hJDxl"),r("cweFb"));const M=i.default(O.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
  opacity: ${e=>{var t;return null!==(t=e.opacity)&&void 0!==t?t:"1"}};
  position: absolute;
`,_=i.default.div`
  display: flex;
  margin-left: 10px;
  > * {
    margin-right: 10px;
  }
`,j=i.default.div`
  width: 24px;
  height: 24px;
`,N=({onBackClick:t,totalSteps:n,currentStepIndex:a,isHidden:r,showBackButtonOnFirstStep:l})=>{const i=l||0!==a;return e(o).createElement(M,{opacity:r?0:1},i?e(o).createElement(L.ChevronCircle,{right:1,onClick:t},e(o).createElement(k.LeftChevronIcon,null)):e(o).createElement(j,null),e(o).createElement(_,null,x.range(n).map((t=>{const n=t<=a?"#4E44CE":"#333";return e(o).createElement(B.Circle,{key:t,diameter:12,color:n})}))),e(o).createElement(j,null))};var R=r("lPkGw"),W=(o=r("aZikt"),i=r("hHMPk"),r("i5Y99")),K=(k=r("hJDxl"),r("bPgZb"));const Q=i.default(W.ListboxInput)`
  position: relative;
  width: 100%;
`,V=i.default.div`
  width: 11px;
  margin-top: 1px;
  margin-right: 8px;
  svg {
    fill: #aaa;
  }
`,Z=({value:t,placeholderText:n,options:a,onChange:r})=>{var l;const i=a.map((e=>e.value)),c=0===a.length,d=null===(l=a.find((e=>e.value===t)))||void 0===l?void 0:l.displayValue;return e(o).createElement(Q,{value:null!=t?t:"__none",onChange:e=>r(e,i.indexOf(e)),tabIndex:0,disabled:c},(()=>e(o).createElement(e(o).Fragment,null,e(o).createElement(K.SelectButton,{arrow:e(o).createElement(V,null,e(o).createElement(k.DownChevronIcon,null))},void 0===t?n:d),!c&&e(o).createElement(K.SelectPopover,null,e(o).createElement(K.SelectList,null,a.map((t=>{var n;return e(o).createElement(K.SelectItem,{key:t.value,value:t.value},null!==(n=t.displayValue)&&void 0!==n?n:t.value)})))))))};var J=function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function i(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((a=a.apply(e,t||[])).next())}))};f.initSentry();const q=i.default.main`
  width: 400px;
  height: 450px;
  background-color: #222222;
  border: 1px solid #323232;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`,z=i.default.section`
  > * {
    margin-bottom: 10px;
  }
  margin-top: 27px;
`,U=i.default(D.IconHeader)`
  margin-top: 46px;
  padding-left: 10px;
  padding-right: 10px;
`,Y=i.default.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  label {
    color: #999;
  }
`,$=()=>{const t=new URLSearchParams(u.useLocation().search).get("permission");return e(o).createElement(e(o).Fragment,null,e(o).createElement(S.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(o).createElement(I.FullPageHeader,null),e(o).createElement(P.HardwareWalletProvider,null,e(o).createElement(C.OnboardingAndConnectHardwareErrorBoundary,null,t?e(o).createElement(q,null,e(o).createElement(ee,{onFinish:()=>window.close(),pushStep:h.NOOP,popStep:h.NOOP})):e(o).createElement(G,null))))},G=()=>{const[t,n]=o.useState([]),a=s.usePreviousDistinct(t,((e,t)=>(null==e?void 0:e.length)===t.length)),r=x.getLast(t),l=e=>{n((t=>c.default(t,(t=>{t.push(e)}))))},i=()=>{n((e=>c.default(e,(e=>{e.pop()}))))};o.useEffect((()=>{n([e(o).createElement(ee,{pushStep:l,popStep:i})])}),[]);const u=t.length,p=t.length>(null!=a?a:[]).length,m=0===(null==a?void 0:a.length),g={initial:{x:m?0:p?150:-150,opacity:m?1:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(o).createElement(q,null,e(o).createElement(N,{totalSteps:3,onBackClick:i,currentStepIndex:u-1}),e(o).createElement(d.AnimatePresence,{exitBeforeEnter:!0},e(o).createElement(d.motion.div,Object.assign({style:{height:"100%"},key:`${t.length}_${null==a?void 0:a.length}`},g),r)))},X=i.default.div`
  padding: 20px;
  padding-top: 46px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`,ee=t=>{const{t:n}=g.useTranslation(),{ledgerTransportState:a,transport:r,getPermission:l}=P.useLedgerTransport();let i,c,d=F.ConfirmationIconType.Default,s=e(o).createElement(R.SpinnerIcon,null),u=n("connectHardwareContinueActionButtonText"),p=!1,m=h.NOOP;switch(a){case P.LedgerTransportState.Searching:i=n("connectHardwareSearchingPrimaryText"),c=n("connectHardwareSearchingSecondaryText"),p=!0;break;case P.LedgerTransportState.NeedsPermission:s=e(o).createElement(k.AddIcon,null),i=n("connectHardwareNeedsPermissionPrimaryText"),c=n("connectHardwareNeedsPermissionSecondaryText"),m=l;break;case P.LedgerTransportState.WaitingForPermission:i=n("connectHardwareWaitingForPermissionPrimaryText"),c=n("connectHardwareWaitingForPermissionSecondaryText"),p=!0;break;case P.LedgerTransportState.WaitingForApplication:s=e(o).createElement(k.SolanaIcon,null),i=n("connectHardwareWaitingForApplicationPrimaryText"),c=n("connectHardwareWaitingForApplicationSecondaryText"),p=!0;break;case P.LedgerTransportState.Connected:d=F.ConfirmationIconType.Success,i=n("connectHardwareConnectedPrimaryText"),c=n("connectHardwareConnectedSecondaryText"),m=()=>{if(!r)throw new Error("Transport is missing");t.onFinish?t.onFinish():t.pushStep(e(o).createElement(ne,Object.assign({transport:r},t)))};break;case P.LedgerTransportState.Failed:d=F.ConfirmationIconType.Failure,i=n("connectHardwareFailedPrimaryText"),c=n("connectHardwareFailedSecondaryText"),u=n("connectHardwareFailedRetryActionButtonText"),m=l}return e(o).createElement(X,null,e(o).createElement(U,{icon:e(o).createElement(F.ConfirmationIcon,{defaultIcon:s,type:d}),primaryText:i,secondaryText:c,headerStyle:D.IconHeaderStyle.Large}),e(o).createElement(A.Button,{onClick:m,theme:"primary",disabled:p},u))},te=[p.DerivationPathType.Bip44RootSolana,p.DerivationPathType.Bip44Solana,p.DerivationPathType.Bip44ChangeSolana],ne=t=>{var n;const{t:a}=g.useTranslation(),[r,l]=o.useState(0),[i,d]=o.useState(void 0),[s,u]=o.useState([]),[f,S]=o.useState({}),[P,H]=o.useState(!1),C=null===(n=b.useFetchConnection())||void 0===n?void 0:n.data,I=null==C?void 0:C.connection,[F,L,B]=y.useStorage(p.StorageKeys.AccountMetas,[]),O=o.useMemo((()=>{const e=F.filter((e=>e.type===p.AccountType.Ledger)).map((e=>e.publicKey.toString()));return s.filter((t=>!e.includes(t.toString())))}),[s,F]),M=void 0!==r?te[r]:void 0,_=o.useMemo((()=>M?M===p.DerivationPathType.Bip44RootSolana?[w.solanaDerivationPath(0,0,p.DerivationPathType.Bip44RootSolana)]:x.range(10).map((e=>w.solanaDerivationPath(e,0,M))):[]),[r]),j=te.map((e=>({value:e,displayValue:h.DERIVATION_PATH_TYPE_TO_VALUE[e]})));o.useEffect((()=>{J(void 0,void 0,void 0,(function*(){if(!L&&I){H(!0);try{const e=[];for(const n of _){const a=yield w.getPublicKeyAsync(t.transport,n);e.push(a)}u(e);const n=yield T.getMultipleAccountsAsync(I,e,"finalized");S(n)}catch(e){console.error(e)}finally{H(!1)}}}))}),[t.transport,L,_,I]),o.useEffect((()=>{u([])}),[_]),o.useEffect((()=>{1===O.length&&d(0)}),[O]);const N=O.map((t=>{var n;const a=t.toString(),r=null===(n=f[t.toString()])||void 0===n?void 0:n.lamports,l=void 0!==r?E.formatTokenAmount(E.lamportsToSolana(r)):"0";return{displayValue:e(o).createElement(Y,null,e(o).createElement("span",null,E.formatHashMedium(a,7)),e(o).createElement("label",null,l," SOL")),value:a}})),R=void 0===r||void 0===i,W=void 0!==i?O[i]:void 0;return e(o).createElement(X,null,e(o).createElement(U,{icon:e(o).createElement(k.AddIcon,null),primaryText:a("connectHardwareSelectAddressSelectWalletAddress"),headerStyle:D.IconHeaderStyle.Large}),e(o).createElement(z,null,e(o).createElement(Z,{placeholderText:a("connectHardwareSelectAddressDerivationPath"),options:j,value:M,onChange:(e,t)=>{l(t)}}),e(o).createElement(Z,{placeholderText:P?a("connectHardwareSelectAddressSearching"):0===O.length?a("connectHardwareSelectAddressAllAddressesImported"):a("connectHardwareSelectAddressWalletAddress"),options:N,value:null==W?void 0:W.toString(),onChange:(e,t)=>{d(t)}})),e(o).createElement(A.Button,{onClick:()=>{if(void 0===i)return;const n=O[i],a=s.map((e=>e.toString())).indexOf(n.toString());var r,l;r=n.toString(),l=a,J(void 0,void 0,void 0,(function*(){if(L)return;const e=c.default(F,(e=>{const t=e.filter((e=>e.type===p.AccountType.Ledger)).length+1,n=_[l].toString("hex");e.push({type:p.AccountType.Ledger,name:`Ledger ${t}`,publicKey:r,derivationPath:n})})),t=e.length-1;v.analytics.capture("connectHardwareAddAccount"),B(e),m.setStorageValue(p.StorageKeys.SelectedAccountIndex,t)})),t.pushStep(e(o).createElement(ae,Object.assign({},t)))},theme:"primary",disabled:R},"Add Account"))},ae=()=>{const{t:t}=g.useTranslation();return e(o).createElement(X,null,e(o).createElement(U,{icon:e(o).createElement(F.ConfirmationIcon,{defaultIcon:e(o).createElement("div",null),type:F.ConfirmationIconType.Success}),primaryText:t("connectHardwareFinishPrimaryText"),secondaryText:t("connectHardwareFinishSecondaryText"),headerStyle:D.IconHeaderStyle.Large}),e(o).createElement(A.Button,{onClick:()=>{v.analytics.capture("connectHardwareFinishClick"),window.close()},theme:"primary"},"Done"))};l.render(e(o).createElement(u.BrowserRouter,null,e(o).createElement(H.QueryProvider,null,e(o).createElement($,null))),document.getElementById("root")),v.analytics.capture("connectHardwareOpen");define=__define;})(window.define);