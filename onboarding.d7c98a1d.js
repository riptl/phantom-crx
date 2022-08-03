(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequirea886;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequirea886=a);var i=a("aZikt"),l=a("ihAua"),c=a("gDkTC");a("5dL5p");var s=a("6SQSC"),u=a("2WP7v"),d=a("jhy6c"),p={};t(p,"AccountImporterProvider",(function(){return w}),(function(e){return w=e})),t(p,"useAccountImporter",(function(){return y}),(function(e){return y=e}));i=a("aZikt");var m=a("lwple"),h=a("czDD7"),g=(m=a("lwple"),a("41J1p")),f=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const b=i.createContext({accountMetas:[],setAccountMetas(){},importAccountMetas(){return f(this,void 0,void 0,(function*(){}))}}),w=({children:t})=>{const[n,r]=i.useState([]),o=i.useCallback((e=>f(void 0,void 0,void 0,(function*(){yield h.setStorageValue(m.StorageKeys.AccountMetas,e);for(const t of e)t.type===m.AccountType.Seed&&g.analytics.capture("addSeedAccount",{data:{walletIndex:t.walletIndex}});yield h.setStorageValue(m.StorageKeys.SelectedAccountIndex,0)}))),[]);return e(i).createElement(b.Provider,{value:{accountMetas:n,setAccountMetas:r,importAccountMetas:o}},t)},y=()=>i.useContext(b);var v={};t(v,"OnboardingType",(function(){return ot}),(function(e){return ot=e})),t(v,"OnboardingProvider",(function(){return lt}),(function(e){return lt=e})),t(v,"useOnboarding",(function(){return ct}),(function(e){return ct=e}));i=a("aZikt"),c=a("gDkTC");var E=a("lxqKj"),x=a("ehJ6P");a("5dL5p");var S={};t(S,"SecureBytes",(function(){return A}),(function(e){return A=e}));var P,C,k=a("4RIUn"),O=function(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n},T=function(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)};const R=e=>(null===window||void 0===window?void 0:window.crypto)?window.crypto.getRandomValues(new Uint8Array(e)):k.randomBytes(e),M=(e,t)=>{const n=e.length,r=new Uint8Array(n);for(let o=0;o<n;o++)r[o]=e[o]^t[o];return r};class A{static from(e){return new A(e)}constructor(e){P.set(this,void 0),C.set(this,void 0),this.read=e=>{const t=((e,t)=>{const n=e.length,r=new Uint8Array(n);for(let o=0;o<n;o++)r[o]=e[o]^t[o];return r})(T(this,P,"f"),T(this,C,"f"));let n=null;try{e(t)}catch(e){n=e}finally{const e=R(t.length),r=M(t,e);if(t.fill(0),O(this,C,e,"f"),O(this,P,r,"f"),n)throw n}};const t=e.length,n=R(t),r=M(e,n);O(this,C,n,"f"),O(this,P,r,"f")}}P=new WeakMap,C=new WeakMap;var I=a("f8jMK"),H=(g=a("41J1p"),{});t(H,"OnboardingImportWallet",(function(){return Ye}),(function(e){return Ye=e}));i=a("aZikt");var W=a("hHMPk"),B=a("ltHDB"),_=(g=a("41J1p"),a("691SI")),D=a("kaQO6"),j=(i=a("aZikt"),W=a("hHMPk"),a("8xzWM")),K=a("fwZPo");D=a("kaQO6"),i=a("aZikt"),W=a("hHMPk"),K=a("fwZPo");const F=W.default(K.Column).attrs({justify:"center"})`
  height: 100%;
  margin-bottom: 20px; // to offset <OnboardingContent /> 20px padding. See (onboarding_flow.tsx)
  flex: 1;
`,L=W.default.div`
  width: 100%;
  height: fit-content;
`,Z=({children:t})=>e(i).createElement(F,null,e(i).createElement(L,null,t)),N=W.default.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`,z=W.default(K.Column).attrs({align:"center"})`
  margin-bottom: 20px;
`,U=W.default(D.Text).attrs({color:"FFFFFF",weight:500,size:28,lineHeight:34,textAlign:"center",margin:"0 0 10px 0"})``,V=W.default(D.Text).attrs((e=>{var t;return{size:16,color:null!==(t=e.color)&&void 0!==t?t:"#999"}}))``,Q=({onSubmit:t,title:n,subtitle:r,subtitleColor:o,buttonTheme:a="default",buttonText:l,buttonDisabled:c,children:s})=>e(i).createElement(N,{onSubmit:e=>{e.preventDefault(),t()},"data-testid":"onboarding-form"},e(i).createElement(Z,null,e(i).createElement(z,null,e(i).createElement(U,null,n),e(i).createElement(V,{color:o},r)),s),e(i).createElement(j.Button,{"data-testid":"onboarding-form-submit-button",type:"submit",theme:a,disabled:c},l));i=a("aZikt"),W=a("hHMPk"),B=a("ltHDB");var G=a("8kvXj"),$=(_=a("691SI"),K=a("fwZPo"),a("45nY7")),J=(i=a("aZikt"),W=a("hHMPk"),a("cFuyE")),Y=a("h52pb"),X=a("hDM6n");D=a("kaQO6");const q=t=>{var n,r,o;const a=!!t.selected,[l,c]=i.useState(null!==(r=null!==(n=t.selected)&&void 0!==n?n:t.defaultSelected)&&void 0!==r?r:[]),s=null!==(o=t.selected)&&void 0!==o?o:l,u=new Set(s);return e(i).createElement(ee,{"data-testid":"account-multiselect"},t.accounts.map((({meta:n,lamports:r})=>{const o=u.has(n.publicKey);return e(i).createElement(te,{"data-testid":`account-multiselect-address-row-${n.publicKey}`,key:n.publicKey,onClick:()=>{o?(e=>{var n,r;const o=new Set(s);o.delete(e);const i=[...o];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(r=t.onDeselect)||void 0===r||r.call(t,e)})(n.publicKey):(e=>{var n,r;const o=new Set(s);o.add(e);const i=[...o];a||c(i),null===(n=t.onChange)||void 0===n||n.call(t,i),null===(r=t.onSelect)||void 0===r||r.call(t,e)})(n.publicKey)}},e(i).createElement(Y.CheckboxGroup,{width:"auto"},e(i).createElement(Y.Checkbox,{"data-testid":"account-multiselect-address-row-checkbox",checked:o}),e(i).createElement("span",null,J.formatHashMedium(n.publicKey,4))),e(i).createElement(D.Text,{color:"#777",size:14},e(i).createElement(X.SolBalance,{format:"0,0.[000]"},r)))})))},ee=W.default.ul`
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
`,te=W.default.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  label {
    color: #999;
  }
`;var ne={};t(ne,"OnboardingCreatePassword",(function(){return Ze}),(function(e){return Ze=e}));i=a("aZikt"),W=a("hHMPk"),B=a("ltHDB");var re=a("6oEu9"),oe=(m=a("lwple"),a("hUfgV")),ae=(g=a("41J1p"),a("6ez6s")),ie=a("kQXty"),le=a("eGDJt"),ce=a("cGG4P"),se=(D=a("kaQO6"),K=a("fwZPo"),Y=a("h52pb"),{});t(se,"OnboardingCreateRecoveryPhrase",(function(){return Be}),(function(e){return Be=e}));i=a("aZikt"),W=a("hHMPk");var ue=a("e5x4G"),de=a("fCuks"),pe=(B=a("ltHDB"),a("6oEu9"),m=a("lwple"),oe=a("hUfgV"),a("7OhhO")),me=(le=a("eGDJt"),g=a("41J1p"),a("awYjP"));D=a("kaQO6"),Y=a("h52pb"),_=a("691SI"),K=a("fwZPo"),j=a("8xzWM"),i=a("aZikt"),W=a("hHMPk"),de=a("fCuks"),B=a("ltHDB"),m=a("lwple"),pe=a("7OhhO"),le=a("eGDJt"),i=a("aZikt");const he=e=>{const[t,n]=i.useState(!1),r=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!0)},o=t=>{t.key!==e&&t.key!==e.toUpperCase()||n(!1)},a=()=>{n(!1)};return i.useEffect((()=>(window.addEventListener("keydown",r),window.addEventListener("keyup",o),window.addEventListener("blur",a),()=>{window.removeEventListener("keydown",r),window.removeEventListener("keyup",o),window.removeEventListener("blur",a)})),[]),t};me=a("awYjP"),D=a("kaQO6"),_=a("691SI"),i=a("aZikt"),W=a("hHMPk");var ge=a("d3pmY");B=a("ltHDB"),re=a("6oEu9"),g=a("41J1p"),me=a("awYjP"),K=a("fwZPo"),_=a("691SI"),j=a("8xzWM"),D=a("kaQO6"),i=a("aZikt"),W=a("hHMPk"),K=a("fwZPo"),me=a("awYjP"),_=a("691SI"),D=a("kaQO6");const fe=W.default(_.Row).attrs({width:"350px"})`
  background-color: #4e44ce;
  height: 74px;
  border: 1px solid #665ddc;
  border-radius: 8px;
  padding: 15px;
`,be=W.default(K.Column).attrs({justify:"center"})`
  margin-left: 15px;
`,we=W.default.span`
  display: inline;
  position: relative;
  top: ${e=>e.top};
  margin-left: 2px;
  margin-right: 2px;
`,ye=()=>e(i).createElement(fe,null,e(i).createElement(me.LogoNoBackground,null),e(i).createElement(be,null,e(i).createElement(D.Text,{size:16,weight:600},"Pin the Phantom extension"),e(i).createElement(D.Text,{size:16,weight:400},"Click"," ",e(i).createElement(we,{top:"1px"},e(i).createElement(me.ChromeExtensionIcon,{width:16,height:16}))," ","and then"," ",e(i).createElement(we,{top:"3px"},e(i).createElement(me.PinChromeExtensionIcon,{width:9.49,height:16}))," ","and voilà!"))),ve=W.default(K.Column)`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,Ee=W.default(j.Button).attrs({borderRadius:"6px"})`
  &:hover {
    path {
      fill: white;
    }
  }
`,xe=W.default(_.Row).attrs({justify:"space-between"})`
  padding: 0 20px;
`,Se=W.default(ge.motion.div)`
  position: fixed;
  top: 16px;
  right: 16px;
`,Pe=()=>{const{t:t}=B.useTranslation(),n=[{id:0,testid:"onboarding-twitter-button",icon:e(i).createElement(me.TwitterIcon,null),text:t("onboardingSocialsFollowOnTwitter"),onClick:()=>{g.analytics.capture("onboardingTwitterClick"),window.open(re.PHANTOM_TWITTER_URL,"_blank")}},{id:1,testid:"onboarding-support-button",icon:e(i).createElement(me.HelpIcon,{fill:"#fff",width:20}),text:t("onboardingSocialsVisitHelpCenter"),onClick:()=>{g.analytics.capture("onboardingHelpCenterClick"),window.open(re.PHANTOM_SUPPORT_URL,"_blank")}}];return e(i).createElement(e(i).Fragment,null,e(i).createElement(Q,{onSubmit:()=>{g.analytics.capture("onboardingFinishClick"),window.close()},title:t("onboardingSocialsFinished"),subtitle:t("onboardingSocialsFinishedDescription"),buttonTheme:"primary",buttonText:t("onboardingSocialsFinishAction")},e(i).createElement(ve,null,n.map((({id:t,testid:n,icon:r,text:o,onClick:a})=>e(i).createElement(Ee,{key:t,"data-testid":n,onClick:a},e(i).createElement(xe,null,e(i).createElement(_.Row,null,r,e(i).createElement(D.Text,{size:16,weight:600,lineHeight:19,margin:"0 0 0 20px"},o)),e(i).createElement(me.RightChevronIcon,null))))))),e(i).createElement(Se,{animate:{opacity:1},initial:{opacity:0},transition:{delay:.4}},e(i).createElement(ye,null)))},Ce=W.default(_.Row).attrs({justify:"center"})`
  height: 80px;
  width: ${e=>e.width}px;
  border-radius: 10px;
  background-color: #333333;
  transition: transform 200ms ease;
  &:not(:last-child) {
    margin-right: 20px;
  }
  ${e=>!e.isHighlighted&&W.css`
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      transform: translate(0, -5px);
    `}
  svg {
    fill: ${e=>e.isHighlighted?"white":"#999999"};
    transition: fill 200ms ease;
  }
`;Ce.defaultProps={width:"80px"};const ke=()=>{var t;const{t:n}=B.useTranslation(),{pushStep:r}=v.useOnboarding(),o=le.useFetchStorageValue(m.StorageKeys.PopupHasBeenSeen),a=le.useStoreStorageValue(m.StorageKeys.PopupHasBeenSeen),l=null!==(t=o.data)&&void 0!==t&&t,c=he("p"),s=he("Shift"),u=he("Alt"),d=pe.BROWSER_ENV.os.name===de.OS_MAP.MacOS,p=d?"107px":"80px",h=n(d?"onboardingKeyboardShortcutMac":"onboardingKeyboardShortcutNotMac"),g=[{id:"altOption",isHighlighted:u,width:p,icon:d?e(i).createElement(me.OptionIcon,null):e(i).createElement(me.AltIcon,null)},{id:"shift",isHighlighted:s,icon:e(i).createElement(me.ShiftIcon,null)},{id:"p",isHighlighted:c,icon:e(i).createElement(me.PKeyIcon,null)}];return e(i).createElement(Q,{onSubmit:()=>{l||a.mutate(!0),r(e(i).createElement(Pe,null))},title:n("onboardingKeyboardShortcut"),subtitle:n("onboardingKeyboardShortcutDescription"),buttonTheme:"primary",buttonText:n("onboardingKeyboardShortcutContinue")},e(i).createElement(_.Row,{justify:"center",margin:"0 0 30px 0"},g.map((({id:t,isHighlighted:n,width:r,icon:o})=>e(i).createElement(Ce,{key:t,isHighlighted:n,width:r},o)))),e(i).createElement(_.Row,{justify:"center"},e(i).createElement(D.Text,{"data-testid":"onboarding-keyboard-shortcut-text",size:17,weight:500,color:"#999"},n("onboardingKeyboardShortcutTry")," ",h)))};var Oe=a("EK1bC"),Te=a("bBnQK"),Re=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const Me=W.default(K.Column).attrs({justify:"space-between"})`
  position: relative;
  text-align: center;
  margin-top: -10px;
  margin-bottom: 10px;
  padding: 10px 0;
`,Ae=W.default(K.Column)`
  align-items: center;
  display: flex;
  position: relative;
`,Ie=W.default(_.Row).attrs({justify:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`,He=W.default(j.Button)`
  padding: 10px 0;
`,We=W.default(_.Row)`
  svg {
    margin-right: 10px;
  }
`,Be=({password:t})=>{var n;const{t:r}=B.useTranslation(),{pushStep:o,mnemonic:a,secureMnemonic:l}=v.useOnboarding(),[{indexes:c,wordlist:s},u]=i.useState({indexes:[],wordlist:[]});i.useEffect((()=>{a&&Oe.getBip39().then((e=>Re(void 0,void 0,void 0,(function*(){const{wordlist:t}=e,n=Array.from(yield a.getIndexes());u({indexes:n,wordlist:t})})))).catch(console.error)}),[a]);const[d,p]=i.useState(!1),[h,f]=i.useState(!1),[b,w]=i.useState(!0),[y,E]=i.useState(!1),x=i.useRef(null).current,S=null!==(n=le.useFetchStorageValue(m.StorageKeys.PopupHasBeenSeen).data)&&void 0!==n&&n,P=()=>{b&&(w(!1),null==x||x.focus(),null==x||x.setSelectionRange(0,0))},C=e=>{if(!e)return;const t=Object.values(e)[0],n="boolean"==typeof t;if("number"==typeof t)"buildNumber"in e.data&&p(!1);else if(n){t&&(h||f(!0),y||E(!0))}},k=e=>{const t=JSON.stringify(e),[n,r,o]=(()=>{switch(pe.BROWSER_ENV.browser.name){case de.BROWSER_MAP.chrome:return[re.ONE_PASSWORD_CHROME_STABLE,re.ONE_PASSWORD_CHROME_BETA,null];case de.BROWSER_MAP.firefox:return[re.ONE_PASSWORD_FIREFOX_STABLE,re.ONE_PASSWORD_FIREFOX_BETA,null];case de.BROWSER_MAP.edge:return[re.ONE_PASSWORD_EDGE_STABLE,re.ONE_PASSWORD_CHROME_STABLE,re.ONE_PASSWORD_CHROME_BETA];default:return[re.ONE_PASSWORD_CHROME_STABLE,re.ONE_PASSWORD_CHROME_BETA,null]}})();ue.browser.runtime.sendMessage(n,t).then(C).catch((()=>{ue.browser.runtime.sendMessage(r,t).then(C).catch((()=>{o&&ue.browser.runtime.sendMessage(o,t).then(C).catch()}))}))};return i.useEffect((()=>{k({name:"hello"})}),[]),i.useEffect((()=>{let e;return h&&(e=setTimeout((()=>{f(!1)}),5e3)),()=>{e&&clearTimeout(e)}}),[h]),e(i).createElement(Q,{onSubmit:()=>Re(void 0,void 0,void 0,(function*(){l&&(g.analytics.capture("onboardingCreateNewWallet"),o(e(i).createElement(ke,null)),S&&o(e(i).createElement(Pe,null)))})),title:r("onboardingCreateRecoveryPhraseSecretRecoveryPhrase"),subtitle:r("onboardingCreateRecoveryPhraseSecretRecoveryPhraseReminder"),subtitleColor:"#FFDC62",buttonTheme:y?"primary":"default",buttonText:r("onboardingCreateRecoveryPhraseContinue"),buttonDisabled:!y},e(i).createElement(Me,{onMouseEnter:P,onMouseLeave:()=>{w(!0),null==x||x.setSelectionRange(0,0),null==x||x.blur()}},e(i).createElement(Ae,{onClick:P},b&&e(i).createElement(Ie,null,e(i).createElement(me.PrivacyEyeIcon,null)),e(i).createElement(Te.MnemonicDisplay,{blur:b,readOnly:!0,indexes:c,wordlist:s})),d&&e(i).createElement(He,{onClick:()=>Re(void 0,void 0,void 0,(function*(){if(!l||!a)return;const e=yield a.deriveSeed();l.read((n=>{const{publicKey:r}=oe.createSeedAccount(e,"Wallet 1",0,m.DerivationPathType.Bip44ChangeSolana);e.fill(0);const o={name:"create-item",data:{type:"115",saveRequest:{title:"Phantom Wallet",fields:[{autocomplete:"crypto-address",value:r},{autocomplete:"crypto-recovery-seed",value:Array.from(n)},{autocomplete:"current-password",value:t}]}}};k(o)}))}))},e(i).createElement(We,{justify:"center"},e(i).createElement(me.OnePasswordIcon,null),r(h?"onboardingCreateRecoveryPhraseSaved":"onboardingCreateRecoveryPhraseSaveIn1Password")))),e(i).createElement(Y.CheckboxGroup,null,e(i).createElement(Y.Checkbox,{"data-testid":"onboarding-form-saved-secret-recovery-phrase-checkbox",checked:y,onChange:()=>{E(!y)}}),e(i).createElement(D.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(B.Trans,{i18nKey:"onboardingCreateRecoveryPhraseSavedSecretRecoveryPhrase"}))))};var _e=a("2wuJD"),De=(Oe=a("EK1bC"),function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))});const je={password:"",confirmPassword:""},Ke=W.default(K.Column)`
  margin-bottom: ${e=>e.needsExtraMargin?37:17}px;
  input[name="password"] {
    margin-bottom: 10px;
  }
`,Fe=W.default.div`
  position: relative;
  width: 100%;
`,Le=W.default(D.Text).attrs({size:14,lineHeight:19,margin:"0",weight:600})`
  position: absolute;
  top: 15px;
  right: 14px;
`,Ze=()=>{var t;const{t:n}=B.useTranslation(),{accountMetas:r,importAccountMetas:o}=p.useAccountImporter(),{mnemonic:a,setMnemonic:l,onboardingType:c,pushStep:s}=v.useOnboarding(),u=c===v.OnboardingType.Create,d=c===v.OnboardingType.Import,h=c===v.OnboardingType.Restore,f=le.useFetchStorageValue(m.StorageKeys.TermsHaveBeenAcknowledgedV2),b=le.useStoreStorageValue(m.StorageKeys.TermsHaveBeenAcknowledgedV2),w=i.useMemo((()=>{var e;return null!==(e=f.data)&&void 0!==e&&e}),[f.data]),y=null!==(t=le.useFetchStorageValue(m.StorageKeys.PopupHasBeenSeen).data)&&void 0!==t&&t,[E,x]=i.useState(je),{password:S,confirmPassword:P}=E,[C,k]=i.useState(void 0),O=i.useMemo((()=>{const e=S.length;switch(!0){case e>0&&e<8:return n("onboardingCreatePasswordPasswordStrengthWeak");case e>=8&&e<21:return n("onboardingCreatePasswordPasswordStrengthMedium");case e>=21:return n("onboardingCreatePasswordPasswordStrengthStrong");default:return}}),[S]),T=i.useMemo((()=>{switch(O){case n("onboardingCreatePasswordPasswordStrengthWeak"):return"#EB3742";case n("onboardingCreatePasswordPasswordStrengthMedium"):return"#FFDC62";case n("onboardingCreatePasswordPasswordStrengthStrong"):return"#21E56F";default:return"#777777"}}),[O]),R=!h&&!w||!S||!P,M=e=>{const{name:t,value:n}=e.currentTarget;C&&k(void 0),x(Object.assign(Object.assign({},E),{[t]:n}))},A=e=>De(void 0,void 0,void 0,(function*(){try{if(!(yield _e.setMnemonic(S,{type:"bip39",value:e})))throw new Error("Failed to set seed phrase");if(r.length)yield o(r);else{const t=yield e.deriveSeed(),n=oe.createSeedAccount(t,"Wallet 1",0,m.DerivationPathType.Bip44ChangeSolana);yield o([n])}}catch(e){(null==e?void 0:e.message.includes("Invalid seed"))?k(n("onboardingCreatePasswordErrorInvalidSecretRecoveryPhrase")):console.error(e)}}));return e(i).createElement(Q,{onSubmit:()=>De(void 0,void 0,void 0,(function*(){const t=ae.validatePassword(S),n=ae.validateConfirmPassword(S,P);if(t||n)k(null!=t?t:n);else if(u){const t=(yield Oe.getBip39()).fromSentenceLength(12);yield l(t),A(t),g.analytics.capture("onboardingCreatePassword"),ie.acknowledgeWhatsNewOverlay(),s(e(i).createElement(se.OnboardingCreateRecoveryPhrase,{password:S}))}else{if(!a)throw new Error("Invalid mnemonic");A(a),g.analytics.capture(d?"importWalletCreatePassword":"restoreWalletCreatePassword"),ie.acknowledgeWhatsNewOverlay(),s(e(i).createElement(ke,null)),y&&s(e(i).createElement(Pe,null))}})),title:n("onboardingCreatePassword"),subtitle:n("onboardingCreatePasswordDescription"),buttonTheme:R?"default":"primary",buttonText:n("onboardingCreatePasswordContinue"),buttonDisabled:R},e(i).createElement(Ke,{needsExtraMargin:!!C},e(i).createElement(ce.Input,{"data-testid":"onboarding-form-password-input",type:"password",name:"password",placeholder:n("onboardingCreatePasswordPasswordPlaceholder"),onChange:M}),e(i).createElement(Fe,null,e(i).createElement(ce.Input.WithWarning,{"data-testid":"onboarding-form-confirm-password-input",type:"password",name:"confirmPassword",placeholder:n("onboardingCreatePasswordConfirmPasswordPlaceholder"),onChange:M,warningMessage:C}),!!O&&e(i).createElement(Le,{color:T},O))),!h&&e(i).createElement(Y.CheckboxGroup,null,e(i).createElement(Y.Checkbox,{"data-testid":"onboarding-form-terms-of-service-checkbox",checked:w,onChange:()=>{const e=w;b.mutate(!e)}}),e(i).createElement(D.Text,{size:16,lineHeight:19,color:"#999"},e(i).createElement(B.Trans,{i18nKey:"onboardingCreatePasswordAgreeToTermsOfServiceInterpolated"},"I agree to the ",e(i).createElement("label",{onClick:()=>{g.analytics.capture("onboardingTermsClick"),window.open(re.PHANTOM_TERMS_URL,"_blank")}},"Terms of Service")))))},Ne=W.default(K.Column).attrs({align:"center",justify:"center"})`
  height: 210px;
`,ze=W.default(_.Row).attrs({justify:"center"})`
  flex-flow: column;
  max-height: 210px;
  overflow-y: scroll;
  ul {
    margin: 0;
    width: 100%;
  }
`,Ue=()=>{const{t:t}=B.useTranslation(),{setAccountMetas:n}=p.useAccountImporter(),{mnemonic:r,pushStep:o}=v.useOnboarding(),[a,l]=i.useState(void 0);i.useEffect((()=>{r&&r.deriveSeed().then(l).catch(console.error)}),[r]);const c=G.useFetchAccountsBySeed(a),s=i.useMemo((()=>{var e;return null!==(e=c.data)&&void 0!==e?e:[]}),[c.data]),u=c.isFetched,[d,m]=i.useState([]),h=d.length,g=i.useMemo((()=>{const e=s.filter((e=>e.sigs>0||e.lamports>0));return(e.length?e:s.slice(0,1)).map((e=>e.meta.publicKey))}),[s]);return i.useEffect((()=>{m((e=>h?e:g))}),[g]),e(i).createElement(Q,{onSubmit:()=>{const t=new Set(d),r=s.filter((e=>t.has(e.meta.publicKey))).map((({meta:e},t)=>Object.assign(Object.assign({},e),{name:`Wallet ${t+1}`})));n(r),o(e(i).createElement(ne.OnboardingCreatePassword,null))},title:t("onboardingSelectAccountsImportAccounts"),subtitle:t("onboardingSelectAccountsImportAccountsDescription"),subtitleColor:"#999",buttonTheme:h?"primary":"default",buttonText:t("onboardingSelectAccountsImportSelectedAccounts"),buttonDisabled:!h},u?e(i).createElement(ze,null,e(i).createElement(q,{accounts:s,defaultSelected:g,onChange:m})):e(i).createElement(Ne,null,e(i).createElement($.Spinner,null)))};Oe=a("EK1bC"),Te=a("bBnQK");var Ve=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const Qe=W.default.div`
  padding: 12px 12px 0 12px;
  margin: 10px 0 0 0;
`,Ge=W.default(_.Row).attrs({align:"center",justify:"center"})``,$e=W.default.a`
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
`,Je=W.default(D.Text).attrs({color:"#eb3742",size:16,textAlign:"left"})``,Ye=()=>{const{t:t}=B.useTranslation(),[n,r]=i.useState(null),[o,a]=i.useState([]);i.useEffect((()=>{Oe.getBip39().then((e=>{const{wordlist:t}=e;a(t),r((()=>e))})).catch(console.error)}),[]);const{onboardingType:l,pushStep:c,setMnemonic:s}=v.useOnboarding(),u=l===v.OnboardingType.Restore,[d,p]=i.useState((()=>new Array(12).fill(-1))),[m,h]=i.useState(null),f=d.every((e=>-1!==e)),b=d.length;return e(i).createElement(Q,{onSubmit:()=>Ve(void 0,void 0,void 0,(function*(){try{if(!n)throw new Error("Bip39 class is not configured");const t=Uint32Array.from(d),r=yield n.fromIndexes(t);yield s(r),g.analytics.capture(u?"restoreWalletRestore":"onboardingImportWallet"),c(e(i).createElement(Ue,null))}catch(e){h(t("onboardingImportWalletErrorInvalidSecretRecoveryPhrase")),console.error(e)}})),title:t("onboardingImportWalletSecretRecoveryPhrase"),subtitle:t("onboardingImportWalletImportExistingWallet"),buttonTheme:f?"primary":"default",buttonText:t(u?"onboardingImportWalletRestoreWallet":"onboardingImportWallet"),buttonDisabled:!f},e(i).createElement(Te.MnemonicDisplay,{indexes:d,wordlist:o,onChange:(e,t)=>{var r;m&&h(null);const o=e.replaceAll(/\s+/g," ").toLowerCase().trim(),a=(null!==(r=null==n?void 0:n.wordlist)&&void 0!==r?r:[]).indexOf(o),i=d.slice().fill(-1);for(let e=0;e<d.length;e++)i[e]=d[e];i[t]=a,p(i)}}),e(i).createElement(Qe,null,m&&e(i).createElement(Je,{"data-testid":"onboarding-import-secret-recovery-phrase-error-message"},m),!m&&e(i).createElement(Ge,null,e(i).createElement($e,{"data-testid":"onboarding-import-secret-recovery-phrase-num-words-toggle",onClick:()=>p((e=>12===e.length?e.concat(new Array(12).fill(-1)):e.slice(0,12)))},t("onboardingImportWalletIHaveWords",{numWords:12===b?24:12})))))};var Xe={};t(Xe,"OnboardingPathSelection",(function(){return rt}),(function(e){return rt=e}));i=a("aZikt"),W=a("hHMPk"),B=a("ltHDB"),j=a("8xzWM"),K=a("fwZPo"),me=a("awYjP"),D=a("kaQO6");var qe=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};const et=W.default(K.Column).attrs({justify:"center"})`
  height: 100%;
  flex: 1;
`,tt=W.default(K.Column).attrs({align:"center",justify:"center"})`
  svg:nth-child(2) {
    margin: 20px 0;
  }
`,nt=W.default(K.Column).attrs({justify:"flex-end"})`
  button:not(:last-child) {
    margin-bottom: 10px;
  }
`,rt=()=>{const{t:t}=B.useTranslation(),{setOnboardingType:n,mnemonic:r,pushStep:o}=v.useOnboarding(),a=i.useCallback((()=>qe(void 0,void 0,void 0,(function*(){n(v.OnboardingType.Create),o(e(i).createElement(ne.OnboardingCreatePassword,null))}))),[r]),l=i.useCallback((()=>{n(v.OnboardingType.Import),o(e(i).createElement(H.OnboardingImportWallet,null))}),[]);return e(i).createElement(et,null,e(i).createElement(Z,null,e(i).createElement(tt,null,e(i).createElement(me.Logo,null),e(i).createElement(me.LogoBrand,null),e(i).createElement(D.Text,{color:"#999",size:17},t("onboardingPathSelectionTagline")))),e(i).createElement(nt,null,e(i).createElement(j.Button,{"data-testid":"create-wallet-button",theme:"primary",onClick:a},t("onboardingPathSelectionCreateWallet")),e(i).createElement(j.Button,{"data-testid":"import-recovery-phrase-button",onClick:l},t("onboardingPathSelectionIHaveAWallet"))))};var ot,at=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function l(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))};!function(e){e.Initial="initial",e.Create="create",e.Import="import",e.Restore="restore"}(ot||(ot={}));const it=i.createContext(null),lt=({children:t})=>{var n;const{search:r}=c.useLocation(),o=new URLSearchParams(r).get("restore"),[a,l]=i.useState(null),[s,u]=i.useState(null),d=i.useCallback((e=>at(void 0,void 0,void 0,(function*(){if(e){let t=null;try{t=yield e.getMnemonic();const n=S.SecureBytes.from(t);l(n),u(e)}finally{null==t||t.fill(0)}}else l(null),u(null)}))),[]),[p,m]=i.useState(o?ot.Restore:ot.Initial),[h,f]=i.useState([]),b=null!==(n=E.usePreviousDistinct(h,((e,t)=>(null==e?void 0:e.length)===t.length)))&&void 0!==n?n:[],w=I.getLast(h);return i.useEffect((()=>{g.analytics.assignGroup("rootGroup",""),o?(g.analytics.capture("restoreWalletOpen"),f([e(i).createElement(H.OnboardingImportWallet,null)])):(g.analytics.capture("onboardingOpen"),f([e(i).createElement(Xe.OnboardingPathSelection,null)]))}),[]),e(i).createElement(it.Provider,{value:{secureMnemonic:a,mnemonic:s,setMnemonic:d,onboardingType:p,setOnboardingType:m,onboardingStack:h,prevOnboardingStack:b,currentStep:w,pushStep:e=>{f((t=>x.default(t,(t=>{t.push(e)}))))},popStep:()=>{f((e=>x.default(e,(e=>{e.pop()}))))}}},t)},ct=()=>{const e=i.useContext(it);if(!e)throw new Error("Missing onboarding context");return e};var st=a("1zKMS"),ut=a("5y3N4"),dt=(i=a("aZikt"),W=a("hHMPk"),ge=a("d3pmY"),_=a("691SI"),i=a("aZikt"),W=a("hHMPk"),I=a("f8jMK"),a("vXFMF")),pt=a("elS0S");me=a("awYjP"),_=a("691SI");const mt=W.default(_.Row).attrs({justify:"space-between"})`
  background-color: #222222;
  padding: 10px 16px;
  border-bottom: 1px solid #323232;
  height: 46px;
`,ht=W.default(_.Row).attrs({justify:"center"})`
  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`,gt=W.default.div`
  width: 24px;
  height: 24px;
`,ft=()=>{const{onboardingType:t,onboardingStack:n,popStep:r}=v.useOnboarding(),o=t===v.OnboardingType.Create,a=(v.OnboardingType.Import,t===v.OnboardingType.Restore),l=n.length,c=a?l-1:l-2,s=!a||0!==c,u=o?4:5;return e(i).createElement(mt,null,e(i).createElement(gt,null,s&&e(i).createElement(dt.ChevronCircle,{right:1,onClick:r},e(i).createElement(me.LeftChevronIcon,null))),e(i).createElement(ht,null,I.range(u).map((t=>e(i).createElement(pt.Circle,{key:t,diameter:12,color:t<=c?"#4E44CE":"#333"})))))},bt=W.default.main`
  width: ${420}px;
  min-height: ${504}px;
  position: relative;
  overflow: hidden;
  background-color: #222222;
  border: 1px solid #323232;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`,wt=W.default(_.Row)`
  height: ${46}px;
`,yt=W.default(ge.motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: calc(${458}px);
  padding: 20px;
`,vt=()=>{const{onboardingType:t,onboardingStack:n,prevOnboardingStack:r,currentStep:o}=v.useOnboarding(),a=t===v.OnboardingType.Restore,l=n.length,c=l>r.length,s=l>1||a,u=0===r.length,d=u?1:0,p=`${l}_${r.length}`,m={initial:{opacity:d},animate:{opacity:1},exit:{opacity:0},transition:{delay:.2,duration:.2}},h={initial:{x:u?0:c?150:-150,opacity:d},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.2}};return e(i).createElement(bt,null,s?e(i).createElement(ge.motion.div,Object.assign({},m),e(i).createElement(ft,null)):e(i).createElement(wt,null),e(i).createElement(ge.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(yt,Object.assign({key:p},h),o)))};s.initSentry(),l.render(e(i).createElement(c.BrowserRouter,null,e(i).createElement(u.ThemedGlobalStyle,{backgroundColor:"#2C2D30"}),e(i).createElement(d.QueryProvider,null,e(i).createElement(p.AccountImporterProvider,null,e(i).createElement(st.FullPageHeader,null),e(i).createElement(ut.OnboardingAndConnectHardwareErrorBoundary,null,e(i).createElement(v.OnboardingProvider,null,e(i).createElement(vt,null)))))),document.getElementById("root"));define=__define;})(window.define);