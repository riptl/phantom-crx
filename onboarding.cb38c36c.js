(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},n.parcelRequirea886=a);var i=a("aZikt"),l=a("ihAua"),c=a("gDkTC");a("6CHoY");var s=a("ci2Mj"),u=a("5cKs6"),d=a("h5G75"),p={};t(p,"AccountImporterProvider",(function(){return w}),(function(e){return w=e})),t(p,"useAccountImporter",(function(){return v}),(function(e){return v=e}));i=a("aZikt");var m=a("lwple"),h=a("czDD7"),f=(m=a("lwple"),a("8C6BZ")),g=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const b=i.createContext({accountMetas:[],setAccountMetas(){},importAccountMetas(){return g(this,void 0,void 0,(function*(){}))}}),w=({children:t})=>{const[n,o]=i.useState([]),r=i.useCallback((e=>g(void 0,void 0,void 0,(function*(){yield h.setStorageValue(m.StorageKeys.AccountMetas,e);for(const t of e)t.type===m.AccountType.Seed&&f.analytics.capture("addSeedAccount",{data:{walletIndex:t.walletIndex}});yield h.setStorageValue(m.StorageKeys.SelectedAccountIndex,0)}))),[]);return e(i).createElement(b.Provider,{value:{accountMetas:n,setAccountMetas:o,importAccountMetas:r}},t)},v=()=>i.useContext(b);var y={};t(y,"OnboardingType",(function(){return Ft}),(function(e){return Ft=e})),t(y,"OnboardingProvider",(function(){return Wt}),(function(e){return Wt=e})),t(y,"useOnboarding",(function(){return jt}),(function(e){return jt=e}));i=a("aZikt"),c=a("gDkTC");var x=a("lxqKj"),E=a("ehJ6P");a("6CHoY");var C={};t(C,"SecureBytes",(function(){return A}),(function(e){return A=e}));var S,k,P=a("4RIUn"),T=function(e,t,n,o,r){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===o?r.call(e,n):r?r.value=n:t.set(e,n),n},O=function(e,t,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(e):o?o.value:t.get(e)};const R=e=>(null===window||void 0===window?void 0:window.crypto)?window.crypto.getRandomValues(new Uint8Array(e)):P.randomBytes(e),M=(e,t)=>{const n=e.length,o=new Uint8Array(n);for(let r=0;r<n;r++)o[r]=e[r]^t[r];return o};class A{static from(e){return new A(e)}constructor(e){S.set(this,void 0),k.set(this,void 0),this.read=e=>{const t=((e,t)=>{const n=e.length,o=new Uint8Array(n);for(let r=0;r<n;r++)o[r]=e[r]^t[r];return o})(O(this,S,"f"),O(this,k,"f"));let n=null;try{e(t)}catch(e){n=e}finally{const e=R(t.length),o=M(t,e);if(t.fill(0),T(this,k,e,"f"),T(this,S,o,"f"),n)throw n}};const t=e.length,n=R(t),o=M(e,n);T(this,k,n,"f"),T(this,S,o,"f")}}S=new WeakMap,k=new WeakMap;var I=a("7eQt4"),D=(f=a("8C6BZ"),{});t(D,"OnboardingImportWallet",(function(){return Ot}),(function(e){return Ot=e}));i=a("aZikt");var H=a("hHMPk"),F=a("7Qmuu"),_=(f=a("8C6BZ"),a("cweFb")),B=a("g7X40"),W=(i=a("aZikt"),H=a("hHMPk"),a("aADTv")),j=a("dczY0");B=a("g7X40"),i=a("aZikt"),H=a("hHMPk"),j=a("dczY0");const N=H.default(j.Column).attrs({justify:"center"})`
  height: 100%;
  margin-bottom: 20px; // to offset <OnboardingContent /> 20px padding. See (onboarding_flow.tsx)
  flex: 1;
`,L=H.default.div`
  width: 100%;
  height: fit-content;
`,U=({children:t})=>e(i).createElement(N,null,e(i).createElement(L,null,t)),K=H.default.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,Z=H.default(j.Column).attrs({align:"center"})`
  margin-bottom: 20px;
`,z=H.default(B.Text).attrs({color:"FFFFFF",weight:500,size:28,lineHeight:34,textAlign:"center",margin:"0 0 10px 0"})``,G=H.default(B.Text).attrs((e=>{var t;return{size:16,color:null!==(t=e.color)&&void 0!==t?t:"#999"}}))``,$=({onSubmit:t,title:n,subtitle:o,subtitleColor:r,buttonTheme:a="default",buttonText:l,buttonDisabled:c,children:s})=>e(i).createElement(K,{onSubmit:e=>{e.preventDefault(),t()},"data-testid":"onboarding-form"},e(i).createElement(U,null,e(i).createElement(Z,null,e(i).createElement(z,null,n),e(i).createElement(G,{color:r},o)),s),e(i).createElement(W.Button,{"data-testid":"onboarding-form-submit-button",type:"submit",theme:a,disabled:c},l));i=a("aZikt"),H=a("hHMPk"),F=a("7Qmuu");var V=a("7rvxc"),X=(_=a("cweFb"),j=a("dczY0"),a("lPkGw")),Y=(i=a("aZikt"),H=a("hHMPk"),a("cFuyE")),J={};t(J,"CheckboxGroup",(function(){return Oe}),(function(e){return Oe=e})),t(J,"Checkbox",(function(){return Re}),(function(e){return Re=e}));i=a("aZikt"),H=a("hHMPk"),i=a("aZikt");var Q=a("f9f8D"),q=a("52Tb2"),ee=a("itADJ"),te=a("d8po8"),ne=a("fIGG7"),oe=a("kHzXS"),re=a("abL1A");function ae(){return ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ae.apply(this,arguments)}function ie(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}var le,ce,se;function ue(e){return!(!e||e.isControlled||e.disabled)}function de(e){return function(t,n){return t&&t.isControlled&&n.state===e}}!function(e){e.Checked="checked",e.Mixed="mixed",e.Unchecked="unchecked"}(ce||(ce={})),function(e){e.GetDerivedData="GET_DERIVED_DATA",e.Mount="MOUNT",e.Set="SET",e.Toggle="TOGGLE",e.Unmount="UNMOUNT"}(se||(se={}));var pe=re.assign((function(e,t){return ae({},e,{refs:t.refs})})),me=((le={})[se.Mount]={actions:pe},le[se.GetDerivedData]={actions:[pe,re.assign((function(e,t){return ae({},e,t.data)}))]},le[se.Set]=[{target:ce.Checked,cond:de(ce.Checked)},{target:ce.Unchecked,cond:de(ce.Unchecked)},{target:ce.Mixed,cond:de(ce.Mixed)}],le);function he(e,t,n){void 0===n&&(n="useMixedCheckbox");var o,r=t||{},a=r.checked,l=r.defaultChecked,c=r.disabled,s=r.onChange,u=r.onClick,d=null!=a,p=re.useCreateMachine(function(e,t){var n,o,r,a;return{id:"mixed-checkbox",initial:e,context:{disabled:t.disabled,isControlled:t.isControlled,refs:{input:null}},states:(a={},a[ce.Unchecked]={entry:pe,on:ae((n={},n[se.Toggle]={target:ce.Checked,cond:ue},n),me)},a[ce.Checked]={entry:pe,on:ae((o={},o[se.Toggle]={target:ce.Unchecked,cond:ue},o),me)},a[ce.Mixed]={entry:pe,on:ae((r={},r[se.Toggle]={target:ce.Checked,cond:ue},r),me)},a)}}(fe(d?a:l),{disabled:!!c,isControlled:d})),m=re.useMachine(p,{input:e},false),h=m[0],f=m[1],g={"aria-checked":ge(h.value),checked:(o=h.value,o===ce.Checked),disabled:!!c,onChange:ne.composeEventHandlers(s,(function(){d||f(se.Toggle)})),onClick:ne.composeEventHandlers(u,(function(){w()})),type:"checkbox"},b={checked:ge(h.value)};function w(){e.current&&(e.current.indeterminate=h.value===ce.Mixed)}return i.useEffect((function(){d&&f({type:se.Set,state:fe(a)})}),[d,a,f]),oe.useIsomorphicLayoutEffect(w),i.useEffect((function(){f({type:se.GetDerivedData,data:{disabled:c,isControlled:d}})}),[c,d,f]),[g,b]}function fe(e){return!0===e?ce.Checked:"mixed"===e?ce.Mixed:ce.Unchecked}function ge(e){return e===ce.Checked||e===ce.Mixed&&"mixed"}function be(e,t,n){var o=null!=e,r=i.useRef(o).current;i.useEffect((function(){}),[n,t,o,r])}var we=["as","checked","children","defaultChecked","disabled","onClick","onChange","__componentName"],ve=["as","onBlur","onFocus"],ye=Q.createNamedContext("CustomCheckboxContext",{});var xe=i.forwardRef((function(e,t){var n=e.as,o=void 0===n?"span":n,r=e.checked,a=e.children,l=e.defaultChecked,c=e.disabled,s=e.onClick,u=e.onChange,d=e.__componentName,p=void 0===d?"CustomCheckboxContainer":d,m=ie(e,we),h=i.useRef(null),f=he(h,{defaultChecked:l,checked:r,disabled:c,onChange:u},p),g=f[0],b=f[1],w=i.useState(!1),v=w[0],y=w[1];var x={defaultChecked:l,disabled:c,focused:v,inputProps:g,inputRef:h,setFocused:y};return be(r,"checked",p),ee.useCheckStyles("checkbox"),i.createElement(ye.Provider,{value:x},i.createElement(o,ae({},m,{ref:t,"data-reach-custom-checkbox-container":"","data-focused":v?"":void 0,"data-state":fe(b.checked),onClick:ne.composeEventHandlers(s,(function(){window.requestAnimationFrame((function(){h.current&&h.current.focus()}))}))}),q.isFunction(a)?a({checked:g["aria-checked"],inputRef:h,focused:v}):a))})),Ee=i.forwardRef((function(e,t){var n=e.as,o=void 0===n?"input":n,r=e.onBlur,a=e.onFocus,l=ie(e,ve),c=i.useContext(ye),s=c.focused,u=c.inputProps,d=c.inputRef,p=c.setFocused,m=te.useComposedRefs(t,d),h=i.useRef(!0);return i.useEffect((function(){return function(){h.current=!1}}),[]),i.createElement(o,ae({},l,u,{ref:m,type:"checkbox","data-reach-custom-checkbox-input":"","data-focused":s?"":void 0,onBlur:ne.composeEventHandlers(r,(function(){window.requestAnimationFrame((function(){h.current&&p(!1)}))})),onFocus:ne.composeEventHandlers(a,(function(){window.requestAnimationFrame((function(){h.current&&p(!0)}))}))}))})),Ce=a("99Anx"),Se=a("hJDxl"),ke=(_=a("cweFb"),a("CmvE4")),Pe=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};function Te(e){return{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",width:"100%",height:"100%",userSelect:"none",pointerEvents:"none",borderRadius:"6px",opacity:""+(e?1:0),transition:"transform 150ms ease-out, background 150ms ease-out",zIndex:1,background:!0===e?"#4E44CE":"transparent"}}const Oe=H.default(_.Row)`
  margin: ${e=>{var t;return null!==(t=e.margin)&&void 0!==t?t:0}};
  > * {
    margin-right: 10px;
  }
  label {
    color: #8a81f8;
    cursor: pointer;
    &:hover {
      color: ${Ce.hexToRGB("#8A81F8",.5)};
    }
  }
`,Re=t=>{const{onChange:n}=t,o=Pe(t,["onChange"]),r=t.checked;return e(i).createElement(xe,{checked:null!=t.checked?t.checked:r,onChange:n,style:{background:"#181818",border:"1px solid #2F2F2F",borderRadius:"6px",height:"22px",minHeight:"22px",width:"22px",minWidth:"22px",cursor:"pointer",userSelect:"none",position:"relative",outlineColor:"transparent",outlineStyle:"none",boxShadow:"none"}},e(i).createElement(Ee,Object.assign({},o)),e(i).createElement("span",{"aria-hidden":!0,style:Te(r)},e(i).createElement(Se.CheckmarkIcon,{width:13})))};H.default(ke.SkeletonLoader)`
  border: 1.5px solid #484848;
  border-radius: ${6}px;
  width: ${22}px;
  height: ${22}px;
`;var Me=a("2MtnF");B=a("g7X40");const Ae=t=>{var n,o,r;const a=!!t.selected,[l,c]=i.useState(null!==(o=null!==(n=t.selected)&&void 0!==n?n:t.defaultSelected)&&void 0!==o?o:[]),s=null!==(r=t.selected)&&void 0!==r?r:l,u=new Set(s);return e(i).createElement(Ie,{"data-testid":"account-multiselect"},t.accounts.map((({meta:n,lamports:o})=>{const r=u.has(n.publicKey);return e(i).createElement(De,{"data-testid":`account-multiselect-address-row-${n.publicKey}`,key:n.publicKey,onClick:()=>{r?(e=>{var n,o;const r=new Set(s);r.delete(e);const i=[...r];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(o=t.onDeselect)||void 0===o||o.call(t,e)})(n.publicKey):(e=>{var n,o;const r=new Set(s);r.add(e);const i=[...r];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(o=t.onSelect)||void 0===o||o.call(t,e)})(n.publicKey)}},e(i).createElement(J.CheckboxGroup,{width:"auto"},e(i).createElement(J.Checkbox,{"data-testid":"account-multiselect-address-row-checkbox",checked:r}),e(i).createElement("span",null,Y.formatHashMedium(n.publicKey,4))),e(i).createElement(B.Text,{color:"#777",size:14},e(i).createElement(Me.SolBalance,{format:"0,0.[000]"},o)))})))},Ie=H.default.ul`
  display: grid;
  grid-template-rows: repeat(auto-fill, 20px);
  gap: 16px;
  flex: 1;
  margin: 12px 0 27px 0;
  padding: 16px;
  overflow: auto;
  background: #181818;
  border: 1px solid #2f2f2f;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
`,De=H.default.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  label {
    color: #999;
  }
`;var He={};t(He,"OnboardingCreatePassword",(function(){return vt}),(function(e){return vt=e}));i=a("aZikt"),H=a("hHMPk"),F=a("7Qmuu");var Fe=a("6oEu9"),_e=(m=a("lwple"),a("hUfgV")),Be=(f=a("8C6BZ"),a("ebwnM")),We=a("cqRHn"),je=a("02ZG7"),Ne=a("a80wK"),Le=(B=a("g7X40"),j=a("dczY0"),{});t(Le,"OnboardingCreateRecoveryPhrase",(function(){return pt}),(function(e){return pt=e}));i=a("aZikt"),H=a("hHMPk");var Ue=a("e5x4G"),Ke=a("fCuks"),Ze=(F=a("7Qmuu"),a("6oEu9"),m=a("lwple"),_e=a("hUfgV"),a("4yWCU"));je=a("02ZG7"),f=a("8C6BZ"),Se=a("hJDxl"),B=a("g7X40"),_=a("cweFb"),j=a("dczY0"),W=a("aADTv"),i=a("aZikt"),H=a("hHMPk"),Ke=a("fCuks"),F=a("7Qmuu"),m=a("lwple"),Ze=a("4yWCU"),je=a("02ZG7"),i=a("aZikt");const ze=e=>{const[t,n]=i.useState(!1),o=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!0)},r=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!1)},a=()=>{n(!1)};return i.useEffect((()=>(window.addEventListener("keydown",o),window.addEventListener("keyup",r),window.addEventListener("blur",a),()=>{window.removeEventListener("keydown",o),window.removeEventListener("keyup",r),window.removeEventListener("blur",a)})),[]),t};Se=a("hJDxl"),B=a("g7X40"),_=a("cweFb"),i=a("aZikt"),H=a("hHMPk");var Ge=a("d3pmY");F=a("7Qmuu"),Fe=a("6oEu9"),f=a("8C6BZ"),Se=a("hJDxl"),j=a("dczY0"),_=a("cweFb"),W=a("aADTv"),B=a("g7X40"),i=a("aZikt"),H=a("hHMPk"),j=a("dczY0"),Se=a("hJDxl"),_=a("cweFb"),B=a("g7X40");const $e=H.default(_.Row).attrs({width:"350px"})`
  background-color: #4e44ce;
  height: 74px;
  border: 1px solid #665ddc;
  border-radius: 8px;
  padding: 15px;
`,Ve=H.default(j.Column).attrs({justify:"center"})`
  margin-left: 15px;
`,Xe=H.default.span`
  display: inline;
  position: relative;
  top: ${e=>e.top};
  margin-left: 2px;
  margin-right: 2px;
`,Ye=()=>e(i).createElement($e,null,e(i).createElement(Se.LogoNoBackground,null),e(i).createElement(Ve,null,e(i).createElement(B.Text,{size:16,weight:600},"Pin the Phantom extension"),e(i).createElement(B.Text,{size:16,weight:400},"Click"," ",e(i).createElement(Xe,{top:"1px"},e(i).createElement(Se.ChromeExtensionIcon,{width:16,height:16}))," ","and then"," ",e(i).createElement(Xe,{top:"3px"},e(i).createElement(Se.PinChromeExtensionIcon,{width:9.49,height:16}))," ","and voilà!"))),Je=H.default(j.Column)`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Qe=H.default(W.Button).attrs({borderRadius:"6px"})`
  &:hover {
    path {
      fill: white;
    }
  }
`,qe=H.default(_.Row).attrs({justify:"space-between"})`
  padding: 0 20px;
`,et=H.default(Ge.motion.div)`
  position: fixed;
  top: 16px;
  right: 16px;
`,tt=()=>{const{t:t}=F.useTranslation(),n=[{id:0,testid:"onboarding-twitter-button",icon:e(i).createElement(Se.TwitterIcon,null),text:t("onboardingSocialsFollowOnTwitter"),onClick:()=>{f.analytics.capture("onboardingTwitterClick"),window.open(Fe.PHANTOM_TWITTER_URL,"_blank")}},{id:1,testid:"onboarding-support-button",icon:e(i).createElement(Se.HelpIcon,{fill:"#fff",width:20}),text:t("onboardingSocialsVisitHelpCenter"),onClick:()=>{f.analytics.capture("onboardingHelpCenterClick"),window.open(Fe.PHANTOM_SUPPORT_URL,"_blank")}}];return e(i).createElement(e(i).Fragment,null,e(i).createElement($,{onSubmit:()=>{f.analytics.capture("onboardingFinishClick"),window.close()},title:t("onboardingSocialsFinished"),subtitle:t("onboardingSocialsFinishedDescription"),buttonTheme:"primary",buttonText:t("onboardingSocialsFinishAction")},e(i).createElement(Je,null,n.map((({id:t,testid:n,icon:o,text:r,onClick:a})=>e(i).createElement(Qe,{key:t,"data-testid":n,onClick:a},e(i).createElement(qe,null,e(i).createElement(_.Row,null,o,e(i).createElement(B.Text,{size:16,weight:600,lineHeight:19,margin:"0 0 0 20px"},r)),e(i).createElement(Se.RightChevronIcon,null))))))),e(i).createElement(et,{animate:{opacity:1},initial:{opacity:0},transition:{delay:.4}},e(i).createElement(Ye,null)))},nt=H.default(_.Row).attrs({justify:"center"})`
  height: 80px;
  width: ${e=>e.width}px;
  border-radius: 10px;
  background-color: #333333;
  transition: transform 200ms ease;
  &:not(:last-child) {
    margin-right: 20px;
  }
  ${e=>!e.isHighlighted&&H.css`
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      transform: translate(0, -5px);
    `}
  svg {
    fill: ${e=>e.isHighlighted?"white":"#999999"};
    transition: fill 200ms ease;
  }
`;nt.defaultProps={width:"80px"};const ot=()=>{var t;const{t:n}=F.useTranslation(),{pushStep:o}=y.useOnboarding(),r=je.useFetchStorageValue(m.StorageKeys.PopupHasBeenSeen),a=je.useStoreStorageValue(m.StorageKeys.PopupHasBeenSeen),l=null!==(t=r.data)&&void 0!==t&&t,c=ze("p"),s=ze("Shift"),u=ze("Alt"),d=Ze.BROWSER_ENV.os.name===Ke.OS_MAP.MacOS,p=d?"107px":"80px",h=n(d?"onboardingKeyboardShortcutMac":"onboardingKeyboardShortcutNotMac"),f=[{id:"altOption",isHighlighted:u,width:p,icon:d?e(i).createElement(Se.OptionIcon,null):e(i).createElement(Se.AltIcon,null)},{id:"shift",isHighlighted:s,icon:e(i).createElement(Se.ShiftIcon,null)},{id:"p",isHighlighted:c,icon:e(i).createElement(Se.PKeyIcon,null)}];return e(i).createElement($,{onSubmit:()=>{l||a.mutate(!0),o(e(i).createElement(tt,null))},title:n("onboardingKeyboardShortcut"),subtitle:n("onboardingKeyboardShortcutDescription"),buttonTheme:"primary",buttonText:n("onboardingKeyboardShortcutContinue")},e(i).createElement(_.Row,{justify:"center",margin:"0 0 30px 0"},f.map((({id:t,isHighlighted:n,width:o,icon:r})=>e(i).createElement(nt,{key:t,isHighlighted:n,width:o},r)))),e(i).createElement(_.Row,{justify:"center"},e(i).createElement(B.Text,{"data-testid":"onboarding-keyboard-shortcut-text",size:17,weight:500,color:"#999"},n("onboardingKeyboardShortcutTry")," ",h)))};var rt=a("5TDIN"),at=a("UhLns"),it=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const lt=H.default(j.Column).attrs({justify:"space-between"})`
  position: relative;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
  padding: 10px 0;
`,ct=H.default(j.Column)`
  align-items: center;
  display: flex;
  position: relative;
`,st=H.default(_.Row).attrs({justify:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,ut=H.default(W.Button)`
  padding: 10px 0;
`,dt=H.default(_.Row)`
  svg {
    margin-right: 10px;
  }
`,pt=({password:t})=>{var n;const{t:o}=F.useTranslation(),{pushStep:r,mnemonic:a,secureMnemonic:l}=y.useOnboarding(),[{indexes:c,wordlist:s},u]=i.useState({indexes:[],wordlist:[]});i.useEffect((()=>{a&&rt.getBip39().then((e=>it(void 0,void 0,void 0,(function*(){const{wordlist:t}=e,n=Array.from(yield a.getIndexes());u({indexes:n,wordlist:t})})))).catch(console.error)}),[a]);const[d,p]=i.useState(!1),[h,g]=i.useState(!1),[b,w]=i.useState(!0),[v,x]=i.useState(!1),E=i.useRef(null).current,C=null!==(n=je.useFetchStorageValue(m.StorageKeys.PopupHasBeenSeen).data)&&void 0!==n&&n,S=()=>{b&&(w(!1),null==E||E.focus(),null==E||E.setSelectionRange(0,0))},k=e=>{if(!e)return;const t=Object.values(e)[0],n="boolean"==typeof t;if("number"==typeof t)"buildNumber"in e.data&&p(!1);else if(n){t&&(h||g(!0),v||x(!0))}},P=e=>{const t=JSON.stringify(e),[n,o,r]=(()=>{switch(Ze.BROWSER_ENV.browser.name){case Ke.BROWSER_MAP.chrome:return[Fe.ONE_PASSWORD_CHROME_STABLE,Fe.ONE_PASSWORD_CHROME_BETA,null];case Ke.BROWSER_MAP.firefox:return[Fe.ONE_PASSWORD_FIREFOX_STABLE,Fe.ONE_PASSWORD_FIREFOX_BETA,null];case Ke.BROWSER_MAP.edge:return[Fe.ONE_PASSWORD_EDGE_STABLE,Fe.ONE_PASSWORD_CHROME_STABLE,Fe.ONE_PASSWORD_CHROME_BETA];default:return[Fe.ONE_PASSWORD_CHROME_STABLE,Fe.ONE_PASSWORD_CHROME_BETA,null]}})();Ue.browser.runtime.sendMessage(n,t).then(k).catch((()=>{Ue.browser.runtime.sendMessage(o,t).then(k).catch((()=>{r&&Ue.browser.runtime.sendMessage(r,t).then(k).catch()}))}))};return i.useEffect((()=>{P({name:"hello"})}),[]),i.useEffect((()=>{let e;return h&&(e=setTimeout((()=>{g(!1)}),5e3)),()=>{e&&clearTimeout(e)}}),[h]),e(i).createElement($,{onSubmit:()=>it(void 0,void 0,void 0,(function*(){l&&(f.analytics.capture("onboardingCreateNewWallet"),r(e(i).createElement(ot,null)),C&&r(e(i).createElement(tt,null)))})),title:o("onboardingCreateRecoveryPhraseSecretRecoveryPhrase"),subtitle:o("onboardingCreateRecoveryPhraseSecretRecoveryPhraseReminder"),subtitleColor:"#FFDC62",buttonTheme:v?"primary":"default",buttonText:o("onboardingCreateRecoveryPhraseContinue"),buttonDisabled:!v},e(i).createElement(lt,{onMouseEnter:S,onMouseLeave:()=>{w(!0),null==E||E.setSelectionRange(0,0),null==E||E.blur()}},e(i).createElement(ct,{onClick:S},b&&e(i).createElement(st,null,e(i).createElement(Se.PrivacyEyeIcon,null)),e(i).createElement(at.MnemonicDisplay,{blur:b,readOnly:!0,indexes:c,wordlist:s})),d&&e(i).createElement(ut,{onClick:()=>it(void 0,void 0,void 0,(function*(){if(!l||!a)return;const e=yield a.deriveSeed();l.read((n=>{const{publicKey:o}=_e.createSeedAccount(e,"Wallet 1",0,m.DerivationPathType.Bip44ChangeSolana);e.fill(0);const r={name:"create-item",data:{type:"115",saveRequest:{title:"Phantom Wallet",fields:[{autocomplete:"crypto-address",value:o},{autocomplete:"crypto-recovery-seed",value:Array.from(n)},{autocomplete:"current-password",value:t}]}}};P(r)}))}))},e(i).createElement(dt,{justify:"center"},e(i).createElement(Se.OnePasswordIcon,null),o(h?"onboardingCreateRecoveryPhraseSaved":"onboardingCreateRecoveryPhraseSaveIn1Password")))),e(i).createElement(J.CheckboxGroup,null,e(i).createElement(J.Checkbox,{"data-testid":"onboarding-form-saved-secret-recovery-phrase-checkbox",checked:v,onChange:()=>{x(!v)}}),e(i).createElement(B.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(F.Trans,{i18nKey:"onboardingCreateRecoveryPhraseSavedSecretRecoveryPhrase"}))))};var mt=a("aF4zF"),ht=(rt=a("5TDIN"),function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))});const ft={password:"",confirmPassword:""},gt=H.default(j.Column)`
  margin-bottom: ${e=>e.needsExtraMargin?37:17}px;
  input[name="password"] {
    margin-bottom: 10px;
  }
`,bt=H.default.div`
  position: relative;
  width: 100%;
`,wt=H.default(B.Text).attrs({size:14,lineHeight:19,margin:"0",weight:600})`
  position: absolute;
  top: 15px;
  right: 14px;
`,vt=()=>{var t;const{t:n}=F.useTranslation(),{accountMetas:o,importAccountMetas:r}=p.useAccountImporter(),{mnemonic:a,setMnemonic:l,onboardingType:c,pushStep:s}=y.useOnboarding(),u=c===y.OnboardingType.Create,d=c===y.OnboardingType.Import,h=c===y.OnboardingType.Restore,g=je.useFetchStorageValue(m.StorageKeys.TermsHaveBeenAcknowledgedV2),b=je.useStoreStorageValue(m.StorageKeys.TermsHaveBeenAcknowledgedV2),w=i.useMemo((()=>{var e;return null!==(e=g.data)&&void 0!==e&&e}),[g.data]),v=null!==(t=je.useFetchStorageValue(m.StorageKeys.PopupHasBeenSeen).data)&&void 0!==t&&t,[x,E]=i.useState(ft),{password:C,confirmPassword:S}=x,[k,P]=i.useState(void 0),T=i.useMemo((()=>{const e=C.length;switch(!0){case e>0&&e<8:return n("onboardingCreatePasswordPasswordStrengthWeak");case e>=8&&e<21:return n("onboardingCreatePasswordPasswordStrengthMedium");case e>=21:return n("onboardingCreatePasswordPasswordStrengthStrong");default:return}}),[C]),O=i.useMemo((()=>{switch(T){case n("onboardingCreatePasswordPasswordStrengthWeak"):return"#EB3742";case n("onboardingCreatePasswordPasswordStrengthMedium"):return"#FFDC62";case n("onboardingCreatePasswordPasswordStrengthStrong"):return"#21E56F";default:return"#777777"}}),[T]),R=!h&&!w||!C||!S,M=e=>{const{name:t,value:n}=e.currentTarget;k&&P(void 0),E(Object.assign(Object.assign({},x),{[t]:n}))},A=e=>ht(void 0,void 0,void 0,(function*(){try{if(!(yield mt.setMnemonic(C,{type:"bip39",value:e})))throw new Error("Failed to set seed phrase");if(o.length)yield r(o);else{const t=yield e.deriveSeed(),n=_e.createSeedAccount(t,"Wallet 1",0,m.DerivationPathType.Bip44ChangeSolana);yield r([n])}}catch(e){(null==e?void 0:e.message.includes("Invalid seed"))?P(n("onboardingCreatePasswordErrorInvalidSecretRecoveryPhrase")):console.error(e)}}));return e(i).createElement($,{onSubmit:()=>ht(void 0,void 0,void 0,(function*(){const t=Be.validatePassword(C),n=Be.validateConfirmPassword(C,S);if(t||n)P(null!=t?t:n);else if(u){const t=(yield rt.getBip39()).fromSentenceLength(12);yield l(t),A(t),f.analytics.capture("onboardingCreatePassword"),We.acknowledgeWhatsNewOverlay(),s(e(i).createElement(Le.OnboardingCreateRecoveryPhrase,{password:C}))}else{if(!a)throw new Error("Invalid mnemonic");A(a),f.analytics.capture(d?"importWalletCreatePassword":"restoreWalletCreatePassword"),We.acknowledgeWhatsNewOverlay(),s(e(i).createElement(ot,null)),v&&s(e(i).createElement(tt,null))}})),title:n("onboardingCreatePassword"),subtitle:n("onboardingCreatePasswordDescription"),buttonTheme:R?"default":"primary",buttonText:n("onboardingCreatePasswordContinue"),buttonDisabled:R},e(i).createElement(gt,{needsExtraMargin:!!k},e(i).createElement(Ne.Input,{"data-testid":"onboarding-form-password-input",type:"password",name:"password",placeholder:n("onboardingCreatePasswordPasswordPlaceholder"),onChange:M}),e(i).createElement(bt,null,e(i).createElement(Ne.Input.WithWarning,{"data-testid":"onboarding-form-confirm-password-input",type:"password",name:"confirmPassword",placeholder:n("onboardingCreatePasswordConfirmPasswordPlaceholder"),onChange:M,warningMessage:k}),!!T&&e(i).createElement(wt,{color:O},T))),!h&&e(i).createElement(J.CheckboxGroup,null,e(i).createElement(J.Checkbox,{"data-testid":"onboarding-form-terms-of-service-checkbox",checked:w,onChange:()=>{const e=w;b.mutate(!e)}}),e(i).createElement(B.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(F.Trans,{i18nKey:"onboardingCreatePasswordAgreeToTermsOfServiceInterpolated"},"I agree to the ",e(i).createElement("label",{onClick:()=>{f.analytics.capture("onboardingTermsClick"),window.open(Fe.PHANTOM_TERMS_URL,"_blank")}},"Terms of Service")))))},yt=H.default(j.Column).attrs({align:"center",justify:"center"})`
  height: 210px;
`,xt=H.default(_.Row).attrs({justify:"center"})`
  flex-flow: column;
  max-height: 210px;
  overflow-y: scroll;
  ul {
    margin: 0;
    width: 100%;
  }
`,Et=()=>{const{t:t}=F.useTranslation(),{setAccountMetas:n}=p.useAccountImporter(),{mnemonic:o,pushStep:r}=y.useOnboarding(),[a,l]=i.useState(void 0);i.useEffect((()=>{o&&o.deriveSeed().then(l).catch(console.error)}),[o]);const c=V.useFetchAccountsBySeed(a),s=i.useMemo((()=>{var e;return null!==(e=c.data)&&void 0!==e?e:[]}),[c.data]),u=c.isFetched,[d,m]=i.useState([]),h=d.length,f=i.useMemo((()=>{const e=s.filter((e=>e.sigs>0||e.lamports>0));return(e.length?e:s.slice(0,1)).map((e=>e.meta.publicKey))}),[s]);return i.useEffect((()=>{m((e=>h?e:f))}),[f]),e(i).createElement($,{onSubmit:()=>{const t=new Set(d),o=s.filter((e=>t.has(e.meta.publicKey))).map((({meta:e},t)=>Object.assign(Object.assign({},e),{name:`Wallet ${t+1}`})));n(o),r(e(i).createElement(He.OnboardingCreatePassword,null))},title:t("onboardingSelectAccountsImportAccounts"),subtitle:t("onboardingSelectAccountsImportAccountsDescription"),subtitleColor:"#999",buttonTheme:h?"primary":"default",buttonText:t("onboardingSelectAccountsImportSelectedAccounts"),buttonDisabled:!h},u?e(i).createElement(xt,null,e(i).createElement(Ae,{accounts:s,defaultSelected:f,onChange:m})):e(i).createElement(yt,null,e(i).createElement(X.Spinner,null)))};rt=a("5TDIN"),at=a("UhLns");var Ct=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const St=H.default.div`
  padding: 12px 12px 0 12px;
  margin: 10px 0 0 0;
`,kt=H.default(_.Row).attrs({align:"center",justify:"center"})``,Pt=H.default.a`
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  color: #777;
  size: 14px;
  &:hover {
    color: #8a81f8;
    p {
      color: #8a81f8;
    }
  }
`,Tt=H.default(B.Text).attrs({color:"#eb3742",size:16,textAlign:"left"})``,Ot=()=>{const{t:t}=F.useTranslation(),[n,o]=i.useState(null),[r,a]=i.useState([]);i.useEffect((()=>{rt.getBip39().then((e=>{const{wordlist:t}=e;a(t),o((()=>e))})).catch(console.error)}),[]);const{onboardingType:l,pushStep:c,setMnemonic:s}=y.useOnboarding(),u=l===y.OnboardingType.Restore,[d,p]=i.useState((()=>new Array(12).fill(-1))),[m,h]=i.useState(null),g=d.every((e=>-1!==e)),b=d.length;return e(i).createElement($,{onSubmit:()=>Ct(void 0,void 0,void 0,(function*(){try{if(!n)throw new Error("Bip39 class is not configured");const t=Uint32Array.from(d),o=yield n.fromIndexes(t);yield s(o),f.analytics.capture(u?"restoreWalletRestore":"onboardingImportWallet"),c(e(i).createElement(Et,null))}catch(e){h(t("onboardingImportWalletErrorInvalidSecretRecoveryPhrase")),console.error(e)}})),title:t("onboardingImportWalletSecretRecoveryPhrase"),subtitle:t("onboardingImportWalletImportExistingWallet"),buttonTheme:g?"primary":"default",buttonText:t(u?"onboardingImportWalletRestoreWallet":"onboardingImportWallet"),buttonDisabled:!g},e(i).createElement(at.MnemonicDisplay,{indexes:d,wordlist:r,onChange:(e,t)=>{var o;m&&h(null);const r=e.replaceAll(/\s+/g," ").toLowerCase().trim(),a=(null!==(o=null==n?void 0:n.wordlist)&&void 0!==o?o:[]).indexOf(r),i=d.slice().fill(-1);for(let e=0;e<d.length;e++)i[e]=d[e];i[t]=a,p(i)}}),e(i).createElement(St,null,m&&e(i).createElement(Tt,{"data-testid":"onboarding-import-secret-recovery-phrase-error-message"},m),!m&&e(i).createElement(kt,null,e(i).createElement(Pt,{"data-testid":"onboarding-import-secret-recovery-phrase-num-words-toggle",onClick:()=>p((e=>12===e.length?e.concat(new Array(12).fill(-1)):e.slice(0,12)))},t("onboardingImportWalletIHaveWords",{numWords:12===b?24:12})))))};var Rt={};t(Rt,"OnboardingPathSelection",(function(){return Ht}),(function(e){return Ht=e}));i=a("aZikt"),H=a("hHMPk"),F=a("7Qmuu"),W=a("aADTv"),j=a("dczY0"),Se=a("hJDxl"),B=a("g7X40");var Mt=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};const At=H.default(j.Column).attrs({justify:"center"})`
  height: 100%;
  flex: 1;
`,It=H.default(j.Column).attrs({align:"center",justify:"center"})`
  svg:nth-child(2) {
    margin: 20px 0;
  }
`,Dt=H.default(j.Column).attrs({justify:"flex-end"})`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Ht=()=>{const{t:t}=F.useTranslation(),{setOnboardingType:n,mnemonic:o,pushStep:r}=y.useOnboarding(),a=i.useCallback((()=>Mt(void 0,void 0,void 0,(function*(){n(y.OnboardingType.Create),r(e(i).createElement(He.OnboardingCreatePassword,null))}))),[o]),l=i.useCallback((()=>{n(y.OnboardingType.Import),r(e(i).createElement(D.OnboardingImportWallet,null))}),[]);return e(i).createElement(At,null,e(i).createElement(U,null,e(i).createElement(It,null,e(i).createElement(Se.Logo,null),e(i).createElement(Se.LogoBrand,null),e(i).createElement(B.Text,{color:"#999",size:17},t("onboardingPathSelectionTagline")))),e(i).createElement(Dt,null,e(i).createElement(W.Button,{"data-testid":"create-wallet-button",theme:"primary",onClick:a},t("onboardingPathSelectionCreateWallet")),e(i).createElement(W.Button,{"data-testid":"import-recovery-phrase-button",onClick:l},t("onboardingPathSelectionIHaveAWallet"))))};var Ft,_t=function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{c(o.next(e))}catch(e){a(e)}}function l(e){try{c(o.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((o=o.apply(e,t||[])).next())}))};!function(e){e.Initial="initial",e.Create="create",e.Import="import",e.Restore="restore"}(Ft||(Ft={}));const Bt=i.createContext(null),Wt=({children:t})=>{var n;const{search:o}=c.useLocation(),r=new URLSearchParams(o).get("restore"),[a,l]=i.useState(null),[s,u]=i.useState(null),d=i.useCallback((e=>_t(void 0,void 0,void 0,(function*(){if(e){let t=null;try{t=yield e.getMnemonic();const n=C.SecureBytes.from(t);l(n),u(e)}finally{null==t||t.fill(0)}}else l(null),u(null)}))),[]),[p,m]=i.useState(r?Ft.Restore:Ft.Initial),[h,g]=i.useState([]),b=null!==(n=x.usePreviousDistinct(h,((e,t)=>(null==e?void 0:e.length)===t.length)))&&void 0!==n?n:[],w=I.getLast(h);return i.useEffect((()=>{f.analytics.assignGroup("rootGroup",""),r?(f.analytics.capture("restoreWalletOpen"),g([e(i).createElement(D.OnboardingImportWallet,null)])):(f.analytics.capture("onboardingOpen"),g([e(i).createElement(Rt.OnboardingPathSelection,null)]))}),[]),e(i).createElement(Bt.Provider,{value:{secureMnemonic:a,mnemonic:s,setMnemonic:d,onboardingType:p,setOnboardingType:m,onboardingStack:h,prevOnboardingStack:b,currentStep:w,pushStep:e=>{g((t=>E.default(t,(t=>{t.push(e)}))))},popStep:()=>{g((e=>E.default(e,(e=>{e.pop()}))))}}},t)},jt=()=>{const e=i.useContext(Bt);if(!e)throw new Error("Missing onboarding context");return e};var Nt=a("9P0Mo"),Lt=a("i2Zy4"),Ut=(i=a("aZikt"),H=a("hHMPk"),Ge=a("d3pmY"),_=a("cweFb"),i=a("aZikt"),H=a("hHMPk"),I=a("7eQt4"),a("hoJun")),Kt=a("8FNEt");Se=a("hJDxl"),_=a("cweFb");const Zt=H.default(_.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
`,zt=H.default(_.Row).attrs({justify:"center"})`
  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`,Gt=H.default.div`
  width: 24px;
  height: 24px;
`,$t=()=>{const{onboardingType:t,onboardingStack:n,popStep:o}=y.useOnboarding(),r=t===y.OnboardingType.Create,a=(y.OnboardingType.Import,t===y.OnboardingType.Restore),l=n.length,c=a?l-1:l-2,s=!a||0!==c,u=r?4:5;return e(i).createElement(Zt,null,e(i).createElement(Gt,null,s&&e(i).createElement(Ut.ChevronCircle,{right:1,onClick:o},e(i).createElement(Se.LeftChevronIcon,null))),e(i).createElement(zt,null,I.range(u).map((t=>e(i).createElement(Kt.Circle,{key:t,diameter:12,color:t<=c?"#4E44CE":"#333"})))))},Vt=H.default.main`
  width: ${420}px;
  min-height: ${504}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`,Xt=H.default(_.Row)`
  height: ${46}px;
`,Yt=H.default(Ge.motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(${458}px);
  padding: 20px;
`,Jt=()=>{const{onboardingType:t,onboardingStack:n,prevOnboardingStack:o,currentStep:r}=y.useOnboarding(),a=t===y.OnboardingType.Restore,l=n.length,c=l>o.length,s=l>1||a,u=0===o.length,d=u?1:0,p=`${l}_${o.length}`,m={initial:{opacity:d},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2,duration:.2}},h={initial:{x:u?0:c?150:-150,opacity:d},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(i).createElement(Vt,null,s?e(i).createElement(Ge.motion.div,Object.assign({},m),e(i).createElement($t,null)):e(i).createElement(Xt,null),e(i).createElement(Ge.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(Yt,Object.assign({key:p},h),r)))};s.initSentry(),l.render(e(i).createElement(c.BrowserRouter,null,e(i).createElement(u.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(i).createElement(d.QueryProvider,null,e(i).createElement(p.AccountImporterProvider,null,e(i).createElement(Nt.FullPageHeader,null),e(i).createElement(Lt.OnboardingAndConnectHardwareErrorBoundary,null,e(i).createElement(y.OnboardingProvider,null,e(i).createElement(Jt,null)))))),document.getElementById("root"));define=__define;})(window.define);