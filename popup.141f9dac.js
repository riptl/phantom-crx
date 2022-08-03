(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},o=n.parcelRequirea886;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},n.parcelRequirea886=o);var i=o("aZikt"),r=o("gDkTC"),s=o("ihAua");o("5dL5p");var c=o("lwple"),u=o("czDD7"),d=o("6SQSC"),m=o("2WP7v"),p=o("1DdzG"),g=o("7OhhO"),h=o("5y3N4"),f=o("dgKOx"),y=(i=o("aZikt"),r=o("gDkTC"),o("lxqKj")),E=(c=o("lwple"),g=o("7OhhO"),o("HyeVU")),b=o("16KRF"),x=o("j1GR2"),v=(i=o("aZikt"),o("ltHDB")),k=(c=o("lwple"),o("2zUeX")),w=o("bBAGA"),S=(E=o("HyeVU"),b=o("16KRF"),o("cNv5c")),T=o("41J1p"),A=o("9jgL5"),C=o("keALh"),M=o("d9LKp"),F=o("fwZPo"),P={};t(P,"AssetDetail",(function(){return st}),(function(e){return st=e}));i=o("aZikt"),r=o("gDkTC");var R=o("h6IZU"),B=o("hHMPk"),L=(v=o("ltHDB"),o("6oEu9")),H=(c=o("lwple"),o("7Lj33")),D=(k=o("2zUeX"),o("cFuyE")),I=(T=o("41J1p"),w=o("bBAGA"),b=o("16KRF"),{});t(I,"RichTransactionHistoryProvider",(function(){return W}),(function(e){return W=e})),t(I,"useRichTransactionHistory",(function(){return $}),(function(e){return $=e}));i=o("aZikt");var O=o("ehJ6P"),z=o("dlVlr"),U=(L=o("6oEu9"),E=o("HyeVU"),o("jhy6c")),K=o("9R0of"),j=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const N=i.createContext({transactionHistory:{},refreshTransactionHistory:L.NOOP}),W=({children:t})=>{const[n,a]=i.useState({}),{accountClient:l}=E.useSelectedSolanaAccount(),[o,r]=i.useState(l.publicKey),[s]=e(i).useState(L.TX_HISTORY_REFRESH_INTERVAL_MS),c=o&&o!==l.publicKey?l.publicKey:void 0,{data:u,error:d}=U.useQuery({enabled:!0,queryKey:["rich-transaction-history-api",o,c],refetchInterval:s,queryFn:()=>j(void 0,void 0,void 0,(function*(){const{results:e}=yield z.getRichTransactionHistory({publicKey:o.toString(),observer:null==c?void 0:c.toString()});return e}))});return i.useEffect((()=>{const e=O.default(n,(e=>{e[o.toString()]=d?[]:u}));a(e)}),[u,d]),i.useEffect((()=>{r(l.publicKey)}),[l.publicKey.toString()]),e(i).createElement(N.Provider,{value:{transactionHistory:n,refreshTransactionHistory:e=>r(e)}},t)},$=e=>{var t;const n=i.useContext(N);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=E.useSelectedSolanaAccount(),l=K.usePendingTransactions(a.publicKey),o=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return{confirmed:o,pending:[]};const t=[],n=o.map((e=>e.signature));for(const e of l)n.includes(e.signature)||t.push(e);return{pending:t,confirmed:o}}),[o,a,l]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};var V={};t(V,"TransactionHistoryProvider",(function(){return _}),(function(e){return _=e})),t(V,"useTransactionHistory",(function(){return Q}),(function(e){return Q=e}));O=o("ehJ6P"),i=o("aZikt"),L=o("6oEu9"),K=o("9R0of");var Z=o("4o0lv"),G=(E=o("HyeVU"),function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))});const Y=i.createContext({transactionHistory:{},refreshTransactionHistory:L.NOOP}),_=({children:t})=>{const[n]=Z.useIncrementingNonce(L.TX_HISTORY_REFRESH_INTERVAL_MS),[a,l]=i.useState({}),{accountClient:o}=E.useSelectedSolanaAccount(),[r,s]=i.useState(o.publicKey),c=e=>G(void 0,void 0,void 0,(function*(){a[e.toString()]?(e=>{G(void 0,void 0,void 0,(function*(){var t;const n=null!==(t=a[e.toString()])&&void 0!==t?t:[];let i;if(n.length>0){const{signature:e}=n[0];i=e}const r=yield o.getTransactionHistoryAsync(e,{until:i,limit:L.TX_HISTORY_PAGINATION_COUNT}),s=O.default(a,(t=>{t[e.toString()]=[...r,...t[e.toString()]]}));l(s)}))})(e):(e=>{G(void 0,void 0,void 0,(function*(){const t=yield o.getTransactionHistoryAsync(e,{limit:L.TX_HISTORY_PAGINATION_COUNT}),n=O.default(a,(n=>{n[e.toString()]=t}));l(n)}))})(e),s(e)}));return i.useEffect((()=>{0!==n&&c(r)}),[n]),i.useEffect((()=>{s(o.publicKey),c(o.publicKey)}),[o.publicKey.toString()]),e(i).createElement(Y.Provider,{value:{transactionHistory:a,refreshTransactionHistory:c}},t)},Q=e=>{var t;const n=i.useContext(Y);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=E.useSelectedSolanaAccount(),l=K.usePendingTransactions(a.publicKey),o=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return o;const t=[],n=o.map((e=>e.signature));for(const e of l)n.includes(e.signature)||t.push(e);return[...t,...o]}),[o,a,l]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};E=o("HyeVU");var J=o("eW1cp"),X=(x=o("j1GR2"),A=o("9jgL5"),C=o("keALh"),o("kaQO6")),q=o("hHJQk"),ee=(i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),o("99Anx")),te=(S=o("cNv5c"),b=o("16KRF"),o("d503d")),ne=o("elS0S"),ae=o("awYjP"),le=o("hDM6n"),oe=o("45nY7"),ie=(i=o("aZikt"),v=o("ltHDB"),b=o("16KRF"),te=o("d503d"),q=o("hHJQk"),ae=o("awYjP"),o("7KDpr")),re=(i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),D=o("cFuyE"),c=o("lwple"),b=o("16KRF"),te=o("d503d"),X=o("kaQO6"),o("8hi3c")),se=o("rkI0w"),ce=o("8xzWM");le=o("hDM6n"),ie=o("7KDpr"),T=o("41J1p");const ue=()=>{var t;i.useEffect((()=>(T.analytics.capture("showStakeAccountList"),()=>T.analytics.capture("hideStakeAccountList"))),[]);const n=te.useFetchStakeAccounts({refetchOnMount:"always"}),a=null!==(t=n.data)&&void 0!==t?t:[];return e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!n.isFetched},n.isError?e(i).createElement(de,{message:n.error.message,onRefetch:()=>{n.isFetching||n.refetch()}}):e(i).createElement(me,{data:a}),e(i).createElement("br",null))},de=t=>{const{t:n}=v.useTranslation();return e(i).createElement(e(i).Fragment,null,e(i).createElement(X.Text,{size:16,color:"red"},n("stakeAccountListErrorFetching"),": ",t.message),e(i).createElement(ce.Button,{onClick:t.onRefetch},n("stakeAccountListReload")))},me=t=>{const{t:n}=v.useTranslation(),a=ve(),l=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),o=l.filter((e=>e.type===c.StakeAccountType.Delegated)),r=l.filter((e=>e.type===c.StakeAccountType.Initialized));return o.length||r.length?e(i).createElement(e(i).Fragment,null,o.length>0&&e(i).createElement(e(i).Fragment,null,o.map((t=>{var n,l;const{stake:o,voter:r}=t.info.stake.delegation,s=a.get(r),c=null===(n=null==s?void 0:s.info)||void 0===n?void 0:n.name,u=null===(l=null==s?void 0:s.info)||void 0===l?void 0:l.keybaseUsername;return e(i).createElement(be,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,delegatedStake:Number(o),inflationReward:t.inflationReward,voteAccountPubkey:r,name:c,keybaseUsername:u})}))),r.length>0&&e(i).createElement(e(i).Fragment,null,r.map((t=>e(i).createElement(xe,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,inflationReward:t.inflationReward}))))):e(i).createElement(pe,null,e(i).createElement(X.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},pe=B.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,ge=B.default(re.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,he=B.default(se.TokenImage).attrs({width:44})``,fe=B.default.div`
  overflow: hidden;
`,ye=B.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Ee=B.default(X.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,be=t=>{var n,a;const{t:l}=v.useTranslation(),{showStakeAccountModal:o}=b.useModals(),{data:r}=te.useFetchKeybaseUserAvatar(t.keybaseUsername),s=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:D.formatHashMedium(t.voteAccountPubkey),c=te.useFetchStakeActivationData(t.pubkey).data,u=t.inflationReward&&t.inflationReward>0;return e(i).createElement(ge,{onClick:()=>{o({stakeAccountPubkey:t.pubkey})}},e(i).createElement(he,{iconUrl:r}),e(i).createElement(fe,null,e(i).createElement(ye,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},s),e(i).createElement(X.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.delegatedStake))),e(i).createElement(ye,null,e(i).createElement(Ee,{size:14,activationState:null==c?void 0:c.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==c?void 0:c.state)?l("stakeAccountListActivationActivating"):"","active"===(null==c?void 0:c.state)?l("stakeAccountListActivationActive"):"","inactive"===(null==c?void 0:c.state)?l("stakeAccountListActivationInactive"):"","deactivating"===(null==c?void 0:c.state)?l("stakeAccountListActivationDeactivating"):""),e(i).createElement(X.Text,{size:14,color:""+(u?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},u?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,t.inflationReward)):"-"))))},xe=t=>{const{t:n}=v.useTranslation(),{showStakeAccountModal:a}=b.useModals(),l=te.useFetchStakeActivationData(t.pubkey).data,o=t.inflationReward&&t.inflationReward>0;return e(i).createElement(ge,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(i).createElement(he,null),e(i).createElement(fe,null,e(i).createElement(ye,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(i).createElement(X.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.balance))),e(i).createElement(ye,null,e(i).createElement(Ee,{size:14,activationState:null==l?void 0:l.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==l?void 0:l.state)?n("stakeAccountListActivationActivating"):"","active"===(null==l?void 0:l.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==l?void 0:l.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==l?void 0:l.state)?n("stakeAccountListActivationDeactivating"):""),e(i).createElement(X.Text,{size:14,color:""+(o?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},o&&"+",e(i).createElement(le.SolBalance,null,t.inflationReward)))))},ve=()=>{var e;const t=te.useFetchValidators(),n=null!==(e=t.data)&&void 0!==e?e:[],a=i.useRef(n);a.current=n;return i.useMemo((()=>new Map(a.current.map((e=>[e.voteAccountPubkey,e])))),[t.dataUpdatedAt,a])},ke=()=>{const{t:t}=v.useTranslation(),{showValidatorListModal:n,hideValidatorListModal:a}=b.useModals(),l=!te.useFetchStakeAccounts().isFetched;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,{items:[{label:t("stakeAccountListViewStakeSOL"),onClick:()=>{n({onClose:a})}}],icon:e(i).createElement(ae.PlusIcon,null)},t("stakeAccountListViewPrimaryText")),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:l},e(i).createElement(ue,null)))};re=o("8hi3c"),X=o("kaQO6");const we=B.default(re.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,Se=B.default.div`
  overflow: hidden;
`,Te=B.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,Ae=B.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Ce=()=>{var t;const{t:n}=v.useTranslation(),{pushDetailView:a}=S.useDetailViews(),{showValidatorListModal:l,hideValidatorListModal:o}=b.useModals(),r=te.useFetchStakeAccounts(),{isFetching:s,isError:c}=r,u=null!==(t=r.data)&&void 0!==t?t:[],d=u.reduce(((e,t)=>e+t.lamports),0),m=u.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),p=u.length;return e(i).createElement(we,{isDisabled:s,onClick:()=>{c?r.refetch():s||(p>0?a(e(i).createElement(ke,null),{shouldShowBackButton:!0}):l({onClose:o}))}},s?e(i).createElement(ne.Circle,{diameter:44,color:ee.hexToRGB("#8A81F8",.2)},e(i).createElement(oe.Spinner,{diameter:28})):c?e(i).createElement(ne.Circle,{diameter:44,color:ee.hexToRGB("#EB3742",.1)},e(i).createElement(ae.FailureIcon,null)):e(i).createElement(ne.Circle,{diameter:44,color:"#3F3D29"},e(i).createElement(ae.StarIcon,null)),e(i).createElement(Se,null,s?e(i).createElement(Te,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):c?e(i).createElement(Te,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ae,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(i).createElement(X.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,d))),e(i).createElement(Ae,null,e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},p," ",1===p?"account":"accounts"),e(i).createElement(X.Text,{size:14,color:""+(m>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},m>0?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,m)):"–"))):e(i).createElement(Te,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(i).createElement(X.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))};i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB");var Me=o("d3pmY"),Fe=(ee=o("99Anx"),D=o("cFuyE"),o("HEK4k")),Pe=(H=o("7Lj33"),J=o("eW1cp"),E=o("HyeVU"),o("j89eZ")),Re=o("b32BY"),Be=(w=o("bBAGA"),ae=o("awYjP"),ne=o("elS0S"),ie=o("7KDpr"),X=o("kaQO6"),oe=o("45nY7"),o("2yhRe"));const Le=B.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,He=B.default(X.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin: 25px 0;
`,De=B.default(ie.LoadingContent)`
  flex: 1;
`,Ie=({className:t,publicKey:n})=>{var a;const{t:l}=v.useTranslation(),{transactionInfos:o,isLoadingInitial:r}=V.useTransactionHistory(n),s=null===(a=w.useFetchConnection())||void 0===a?void 0:a.data,c=null==s?void 0:s.cluster;return e(i).createElement(De,{isLoading:r},e(i).createElement(Le,{className:t},0!==o.length?o.map((t=>e(i).createElement(Ne,{key:t.signature,cluster:c,transactionInfo:t}))):e(i).createElement(He,null,l("transactionsNoActivity"))))},Oe=B.default.div`
  display: flex;
  justify-content: space-between;
`,ze=B.default.div`
  background: #2a2a2a;
  border-radius: 6px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 15px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Ue=B.default(Me.motion.div)`
  display: flex;
  align-items: center;
`,Ke=B.default.div`
  width: 100%;
  margin-left: 10px;
  > * {
    margin-top: 2px;
  }
`,je=B.default.div`
  padding-top: 3px;
  padding-left: 3px;
`,Ne=({cluster:t,transactionInfo:n})=>{var a,l,o,r,s;const{t:c}=v.useTranslation(),{latestBlockTimestamp:u}=J.useBlockchainState(),{accountClient:d}=E.useSelectedSolanaAccount(),{getExistingAccountMeta:m}=E.useSolanaAccounts(),{getSavedAddressLabel:p}=Pe.useAddressBook(),{preferredExplorer:g}=Be.usePreferredExplorer(),h=Re.useFetchAssetsWithAccount().data,f=i.useMemo(Date.now,[]),y=f-(null!=u?u:f),b=n.blockTime?Math.min(f,1e3*n.blockTime+y):void 0,{err:x,isLoading:k,isOptimistic:w,transaction:S,signature:T}=n;let A=ee.hexToRGB("#3CC852",.1),C=e(i).createElement(ae.CheckmarkIcon,{fill:"#27D843"}),M=D.formatHashMedium(T),F=c("transactionsSuccess");if(k||w)A=ee.hexToRGB("#8A81F8",.2),M=c("transactionsSending"),F=c("transactionsWaitingForConfirmation"),C=e(i).createElement(oe.Spinner,{diameter:28});else if(x)A=ee.hexToRGB("#E72C2C",.1),C=e(i).createElement(ae.FailureIcon,null),F=c("transactionsError");else if(S){const t=Fe.classifyParsedTransaction(S,d.publicKey,h);if(t===Fe.ParsedTransactionType.ReceivedSol){const t=Fe.getSolTransferInstructions(S)[0],n=t.parsed.info.source,a=D.lamportsToSolana(t.parsed.info.lamports);M=c("transactionsReceivedInterpolated",{amount:D.formatTokenAmount(a)}),A=ee.hexToRGB("#4E44CE",.2),C=e(i).createElement(ae.ReceiveIcon,{fill:"#968DFF"}),F=`${c("transactionsFrom")}: ${D.formatAddress(n,m(n),p(n))}`}else if(t===Fe.ParsedTransactionType.SentSol){const t=Fe.getSolTransferInstructions(S)[0],n=t.parsed.info.destination,a=D.lamportsToSolana(t.parsed.info.lamports);M=c("transactionsSentInterpolated",{amount:D.formatTokenAmount(a)}),A=ee.hexToRGB("#37AAEB",.1),C=e(i).createElement(je,null,e(i).createElement(ae.SendIcon,{width:24,fill:"#6BCEFF"})),F=`${c("transactionsTo")}: ${D.formatAddress(n,m(n),p(n))}`}else if(h&&[Fe.ParsedTransactionType.SentSplFungible,Fe.ParsedTransactionType.SentSplCollectible,Fe.ParsedTransactionType.ReceivedSplFungible,Fe.ParsedTransactionType.ReceivedSplCollectible].includes(t)){const n=Fe.getSplTransferInstructions(S)[0],{source:u,destination:d}=n.parsed.info,m=h.find((e=>u===e.account.toString())),p=h.find((e=>d===e.account.toString()));let g=null===(o=null===(l=null===(a=n.parsed)||void 0===a?void 0:a.info)||void 0===l?void 0:l.tokenAmount)||void 0===o?void 0:o.uiAmount;(null==m?void 0:m.symbol)||(null==m?void 0:m.name)?(g=null!=g?g:D.amountToUiAmount(n.parsed.info.amount,m.decimals),C=e(i).createElement(je,null,e(i).createElement(ae.SendIcon,{width:24,fill:"#6BCEFF"})),A=ee.hexToRGB("#37AAEB",.1),F="",t===Fe.ParsedTransactionType.SentSplFungible?M=`${c("transactionsSent")} ${D.formatTokenAmount(g)} ${m.symbol}`:t===Fe.ParsedTransactionType.SentSplCollectible&&(M=`${c("transactionsSent")} ${null!==(r=m.name)&&void 0!==r?r:m.symbol}`)):((null==p?void 0:p.symbol)||(null==p?void 0:p.name))&&(g=null!=g?g:D.amountToUiAmount(n.parsed.info.amount,p.decimals),A=ee.hexToRGB("#4E44CE",.2),C=e(i).createElement(ae.ReceiveIcon,{fill:"#968DFF"}),F="",t===Fe.ParsedTransactionType.ReceivedSplFungible?M=`${c("transactionsReceived")} ${D.formatTokenAmount(g)} ${p.symbol}`:t===Fe.ParsedTransactionType.ReceivedSplCollectible&&(M=`${c("transactionsReceived")} ${null!==(s=p.name)&&void 0!==s?s:p.symbol}`))}}return e(i).createElement(ze,{onClick:()=>{t&&window.open(H.generateTxExplorerUrl(T,t,g.type))}},e(i).createElement(Me.AnimatePresence,{exitBeforeEnter:!0,initial:!1},e(i).createElement(Ue,{key:M+T,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},e(i).createElement(ne.Circle,{diameter:44,color:A},C),e(i).createElement(Ke,null,e(i).createElement(Oe,null,e(i).createElement(X.Text,{size:16,weight:600,lineHeight:19,noWrap:!0},M),e(i).createElement(X.Text,{size:14,color:"#777777",lineHeight:17},b?D.formatTimestampFromNow(b):"")),e(i).createElement(Oe,null,e(i).createElement(X.Text,{size:14,color:"#777777",lineHeight:17,textAlign:"left",noWrap:!0,maxWidth:"200px"},F))))))};i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),H=o("7Lj33");var We=o("iqlzl"),$e=(i=o("aZikt"),B=o("hHMPk"),o("7AUIG")),Ve=(D=o("cFuyE"),X=o("kaQO6"),v=o("ltHDB"),o("691SI"));F=o("fwZPo"),g=o("7OhhO"),Pe=o("j89eZ"),E=o("HyeVU");const Ze=B.default(Ve.Row)`
  border-radius: 6px;
  background-color: #2a2a2a;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Ge=B.default(Ve.Row)`
  margin-left: 10px;
  margin-right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`,Ye=e=>{const{topLeft:t,topRight:n,bottomLeft:a,bottomRight:l,image:o,onClick:r}=e;return i.createElement(Ze,{onClick:r},i.createElement(Ge,null,o,i.createElement(F.Column,{width:.69*g.PHANTOM_WIDTH+"px",margin:"0 0 0 10px"},i.createElement(Ve.Row,{justify:"space-between"},i.createElement(X.Text,{size:16,weight:600,color:null==t?void 0:t.color,margin:"0",noWrap:!0,maxWidth:"80%",lineHeight:21},(null==t?void 0:t.label)||""),i.createElement(X.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==n?void 0:n.color)||"#777777",lineHeight:21},(null==n?void 0:n.label)||"")),i.createElement(Ve.Row,{justify:"space-between"},i.createElement(X.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==a?void 0:a.color)||"#777777",lineHeight:21},(null==a?void 0:a.label)||""),i.createElement(X.Text,{weight:500,size:14,color:null==l?void 0:l.color,margin:"0",noWrap:!0,lineHeight:21},(null==l?void 0:l.label)||"")))))},_e=({transaction:e,onClick:t})=>{const{t:n}=v.useTranslation(),{getSavedAddressLabel:a}=Pe.useAddressBook(),{getExistingAccountMeta:l}=E.useSolanaAccounts(),o=((e,t,n,a)=>{const{err:l,detail:o,dapp:i}=e,{data:r,feePayer:s}=o,{imageUrl:c,name:u}=null!=i?i:{};if(l)return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:t("transactionsFailed")},bottomLeft:{label:u},image:$e.createIcon({transactionType:r.type,transactionState:"error"})};const d=D.lamportsToSolana(s.amountLamports);switch(r.type){case"swap":{const{sendAsset:e,receiveAsset:n}=r,a=D.formatAddressShort(e.mint||""),l=D.formatAddressShort(n.mint||"");return{topLeft:{label:(null==i?void 0:i.name)?t("transactionsSwapOn",{dappName:i.name}):t("transactionsTokenSwap")},topRight:{label:`+${D.formatTokenAmount(r.receiveUiAmount)} ${n.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${e.symbol||a} → ${n.symbol||l}`},bottomRight:{label:`-${D.formatTokenAmount(r.sendUiAmount)} ${e.symbol||a}`},image:$e.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl,secondaryImage:n.imageUrl})}}case"send":{const{asset:e}=r,l=D.formatAddressShort(e.mint||""),o=D.formatAddress(r.to,a(r.to),n(r.to));return{topLeft:{label:`${t("transactionsSent")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`-${D.formatTokenAmount(r.uiAmount)} ${e.symbol||l}`,color:"#FFFFFF"},bottomLeft:{label:`${t("transactionsTo")}: ${o}`},image:$e.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"receive":{const{asset:e}=r,l=D.formatAddressShort(e.mint||""),o=D.formatAddress(r.from,a(r.from),n(r.from));return{topLeft:{label:`${t("transactionsReceived")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`+${D.formatTokenAmount(r.uiAmount)} ${e.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${t("transactionsFrom")}: ${o}`},image:$e.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"stake":{const{uiAmount:e,stakeAccount:n,validatorName:a}=r;return{topLeft:{label:t("transactionsStaked")},topRight:{label:`-${D.formatTokenAmount(e)} SOL`},bottomLeft:{label:a||D.formatHashMedium(n,4)},image:$e.createIcon({transactionType:r.type})}}case"withdrawStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsWithdrawStake")},topRight:{label:`+${D.formatTokenAmount(e)} SOL`,color:"#21E56F"},bottomLeft:{label:D.formatHashMedium(n,4)},image:$e.createIcon({transactionType:r.type})}}case"deactivateStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsUnstaked")},topRight:{label:`${D.formatTokenAmount(e)} SOL`},bottomLeft:{label:D.formatHashMedium(n,4)},image:$e.createIcon({transactionType:r.type})}}case"listItem":case"cancelListing":case"bidItem":case"cancelBid":case"buyItem":case"sellItem":{const e=`${D.formatTokenAmount(r.forUiAmount)} ${r.forAsset.symbol||""}`,n=r.item.name||t("richTransactionDetailUnknownNFT"),a={listItem:{topLeft:{label:t("transactionsListedInterpolated",{name:n})},topRight:{label:""}},bidItem:{topLeft:{label:t("transactionsBidOnInterpolated",{name:n})},topRight:{label:`-${e}`,color:"#777"}},cancelBid:{topLeft:{label:t("transactionsCancelBidOnInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#777"}},cancelListing:{topLeft:{label:t("transactionsUnlistedInterpolated",{name:n})},topRight:{label:""}},sellItem:{topLeft:{label:t("transactionsSoldInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#21E56F"}},buyItem:{topLeft:{label:t("transactionsBoughtInterpolated",{name:n})},topRight:{label:`-${e}`}}};return{topLeft:a[r.type].topLeft,topRight:a[r.type].topRight,bottomLeft:{label:u||""},image:$e.createIcon({transactionType:r.type,primaryImage:r.item.imageUrl,secondaryImage:c})}}case"unknown":return{topLeft:{label:t("transactionsAppInteraction")},bottomLeft:{label:u},topRight:{label:`-${d} SOL`},image:$e.createIcon({transactionType:r.type,primaryImage:c})};default:return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:`-${d} SOL`},image:$e.createIcon({transactionType:"unknown"})}}})(e,n,a,l);return i.createElement(Ye,Object.assign({},o,{onClick:t}))};w=o("bBAGA"),X=o("kaQO6"),ie=o("7KDpr"),b=o("16KRF"),F=o("fwZPo"),oe=o("45nY7"),ne=o("elS0S"),Be=o("2yhRe");const Qe=B.default(F.Column)`
  align-items: stretch;
  margin-top: -15px;
`,Je=B.default.div`
  margin-top: 5px;
  margin-bottom: 5px;
`,Xe=B.default(X.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin: 25px 0;
`,qe=B.default(ie.LoadingContent)`
  flex: 1;
`,et=(e,t)=>{const n=(e=>e.reduce(((e,t)=>{var n;const a=We.date(1e3*(null!==(n=null==t?void 0:t.blockTime)&&void 0!==n?n:0)).format("YYYY-MM-DD");return(e[a]=e[a]||[]).push(t),e}),{}))(e);return Object.keys(n).sort(((e,t)=>t.localeCompare(e))).map((e=>{const a=We.date(e),l=We.date().diff(a,t("richTransactionsDays"));return{title:l>1?a.format("MMM D, YYYY"):t(l>0?"richTransactionsYesterday":"richTransactionsToday"),data:n[e].sort(((e,t)=>t.blockTime-e.blockTime))}}))},tt=({publicKey:t})=>{const{t:n}=v.useTranslation(),{showTransactionItemModal:a}=b.useModals(),{transactionInfos:l,isLoadingInitial:o}=I.useRichTransactionHistory(t),{pending:r,confirmed:s}=l,c=i.useMemo((()=>{const e=r.map((e=>Object.assign(Object.assign({},e),{blockTime:e.blockTime||We.date().unix()})));return et([...e,...s],n)}),[s,n]);return e(i).createElement(qe,{isLoading:o},e(i).createElement(Qe,null,r.length+s.length!==0&&c?c.map((({title:t,data:n},l)=>((t,n,l)=>e(i).createElement(e(i).Fragment,{key:`${t}-${l}`},e(i).createElement(X.Text,{size:16,textAlign:"left",weight:500,margin:"15px 0 5px 0",color:"#777777"},t),n.map((t=>e(i).createElement(Je,{key:t.signature},"detail"in t?e(i).createElement(_e,{transaction:t,onClick:()=>a(t)}):e(i).createElement(nt,{transaction:t}))))))(t,n,l))):e(i).createElement(Xe,null,n("transactionsNoActivity"))))},nt=({transaction:t})=>{var n;const{t:a}=v.useTranslation(),l=null===(n=w.useFetchConnection())||void 0===n?void 0:n.data,o=null==l?void 0:l.cluster,{preferredExplorer:r}=Be.usePreferredExplorer();return e(i).createElement(Ye,{image:e(i).createElement(ne.Circle,{diameter:44},e(i).createElement(oe.Spinner,{diameter:28})),topLeft:{label:a("transactionsSending")},bottomLeft:{label:a("transactionsWaitingForConfirmation")},onClick:()=>o?window.open(H.generateTxExplorerUrl(t.signature,o,r.type)):null})};ce=o("8xzWM"),Ve=o("691SI"),F=o("fwZPo"),i=o("aZikt"),B=o("hHMPk"),i=o("aZikt");X=o("kaQO6");const at=B.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,lt=B.default(X.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: 500;
`;var ot=o("jzCyU"),it=(Be=o("2yhRe"),function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))});const rt=["Fungible"],st=e(i).memo((t=>{const{mint:n,name:a,symbol:l}=t,o=(()=>{var e,t;const[n]=x.useFeatureFlags(["kill-rich-transactions-extension"]),{preferredExplorer:a}=Be.usePreferredExplorer(),{t:l}=v.useTranslation(),o=l("assetDetailViewOnExplorer",{explorer:a.name}),i=l("assetDetailStakeSOL"),r=l("assetDetailEditTokenMetadata"),s=l("assetDetailUnwrapAll"),c=l("assetDetailRecentActivity"),u=l("assetDetailActionButtonSend"),d=l("assetDetailActionButtonDeposit"),{feeCalculator:m}=J.useBlockchainState(),p=m.lamportsPerSignature,g=w.useFetchConnection(),h=g.data,f=null!==(e=null==h?void 0:h.cluster)&&void 0!==e?e:"mainnet-beta",{customMetaMap:y,customMetaMapQuery:b}=C.useCustomTokenMetaMap(),{accountClient:S}=E.useSelectedSolanaAccount(),T=S.publicKey,M=T.toString(),F=S.closeTokenAccountAsync,{data:P,loading:R}=A.useCachedSPLAssetData(M,f),B=k.useSPLTokenAccountsByStandard(M,f),L=B.data,H=null!==(t=null==L?void 0:L.infos)&&void 0!==t?t:new Map,{data:D,isFetching:I}=k.useSPLAssets(Object.assign(Object.assign({},P),{publicKey:M,standards:rt,cluster:f}));return{owner:T,cluster:f,assets:D,tokenInfos:H,isFetching:!g.isFetched||!b.isFetched||!B.isFetched||R||I,lamportsPerSignature:p,closeTokenAccountAsync:F,areRichTransactionsDisabled:n,customMetaMap:y,viewOnSolScanText:o,stakeSolText:i,editTokenMetaText:r,unwrapAllText:s,recentActivityText:c,sendButtonText:u,depositButtonText:d,preferredExplorer:a}})(),{isFetching:s,owner:u,cluster:d,customMetaMap:m,tokenInfos:p,lamportsPerSignature:g,areRichTransactionsDisabled:h,closeTokenAccountAsync:f,assets:y,viewOnSolScanText:S,stakeSolText:M,unwrapAllText:F,editTokenMetaText:P,recentActivityText:B,sendButtonText:O,depositButtonText:z,preferredExplorer:U}=o,K=r.useHistory(),{showValidatorListModal:j,hideValidatorListModal:N,showEditTokenModal:W,showSendModal:$,showDepositAssetModal:Z}=b.useModals(),G=void 0===n,Y=i.useMemo((()=>y.find((e=>{switch(e.type){case"solana":return G?e:void 0;case"spl-token":return e.data.mintPubKey===n?e:void 0}}))),[n,y,G]),_=i.useMemo((()=>{var e,t;switch(null==Y?void 0:Y.type){case"solana":return;case"spl-token":return{name:null===(e=m.get(Y.data.mintPubKey))||void 0===e?void 0:e.name,symbol:null===(t=m.get(Y.data.mintPubKey))||void 0===t?void 0:t.symbol}}}),[Y,m]),Q=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Y?void 0:Y.data.name)&&void 0!==e?e:null==_?void 0:_.name)&&void 0!==t?t:a}),[Y,_]),X=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==Y?void 0:Y.data.symbol)&&void 0!==e?e:null==_?void 0:_.symbol)&&void 0!==t?t:l}),[Y,_]),q=i.useMemo((()=>{if(!Y)return u;switch(null==Y?void 0:Y.type){case"solana":return u;case"spl-token":return new R.PublicKey(null==Y?void 0:Y.data.pubkey)}}),[u,Y]),ee=!h&&"mainnet-beta"===d,{refreshTransactionHistory:te}=ee?I.useRichTransactionHistory(q):V.useTransactionHistory(q),ne=i.useMemo((()=>Y?ee?e(i).createElement(tt,{publicKey:q}):e(i).createElement(Ie,{publicKey:q}):null),[Y,ee,q]),ae=i.useMemo((()=>{const e=[{label:S,onClick:()=>window.open(H.generateAddressExplorerUrl(q.toString(),d,U.type),"_blank")}];if(G&&e.push({label:M,onClick:()=>j({onClose:N})}),"spl-token"===(null==Y?void 0:Y.type)&&Y.data.mintPubKey===L.WRAPPED_SOLANA.address){const t=y.find((e=>"solana"===e.type));t&&+t.data.amount>g&&e.unshift({label:F,onClick:()=>{it(void 0,void 0,void 0,(function*(){yield f(new R.PublicKey(Y.data.pubkey)),K.push(c.Path.Notifications)}))}})}return"spl-token"!==(null==Y?void 0:Y.type)||p.has(Y.data.mintPubKey)||e.push({label:P,onClick:()=>{T.analytics.capture("selectEditCustomToken"),W({mint:Y.data.mintPubKey,name:Q,symbol:X})}}),e}),[d,S,G,M,y,g,F,f,K,Y,p,a,l,P]);return i.useEffect((()=>{te(q)}),[q]),e(i).createElement(ct,{isFetching:s,cluster:d,mint:"spl-token"===(null==Y?void 0:Y.type)?Y.data.mintPubKey:null!=n?n:void 0,name:Q,symbol:X,balance:Y?D.amountToUiAmount(Y.data.amount,Y.data.decimals):0,dollarValue:null==Y?void 0:Y.data.usd,isSolana:G,txPublicKey:q,TransactionsComponent:ne,actionItems:ae,recentActivityText:B,sendButtonText:O,depositButtonText:z,shouldUseRichTxs:ee,preferredExplorer:U,showSendModal:i.useCallback((()=>{Y&&$(Y)}),[Y,$]),showDepositAssetModal:i.useCallback((()=>{Z({mint:"spl-token"===(null==Y?void 0:Y.type)?Y.data.mintPubKey:void 0,symbol:l})}),[Z])})})),ct=e(i).memo((t=>{const{isFetching:n,cluster:a,mint:l,name:o,symbol:r,balance:s,dollarValue:c,isSolana:u,TransactionsComponent:d,actionItems:m,recentActivityText:p,sendButtonText:g,depositButtonText:h,shouldUseRichTxs:f,showSendModal:y,showDepositAssetModal:E}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,{items:m},n?e(i).createElement(e(i).Fragment,null," "):o),e(i).createElement(yt,{balance:s,symbol:r,mint:l,dollarValue:c,isFetching:n,isMainnet:"mainnet-beta"===a,sendButtonText:g,depositButtonText:h,showSendModal:y,showDepositAssetModal:E}),u&&!n&&e(i).createElement(Ce,null),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(ot.SkeletonLoader,{height:"10px",backgroundColor:"#2D2D2D",borderRadius:"8px",width:"100px",margin:"0 0 15px 0"}),[1,2].map((t=>e(i).createElement(dt,{key:t})))):e(i).createElement(e(i).Fragment,null,!f&&e(i).createElement(X.Text,{size:16,color:"#777777",textAlign:"left",margin:"0 auto 12px 0",noWrap:!0},null===d?null:p),d))})),ut=B.default(ot.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,dt=()=>e(i).createElement(ot.SkeletonLoader,{align:"center",width:"100%",height:"64px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(ot.SkeletonLoader,{width:"54px",height:"100%",backgroundColor:"#434343",borderRadius:"50%",margin:"0 15px 0 0"}),e(i).createElement(F.Column,null,e(i).createElement(Ve.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(ut,{width:"120px"}),e(i).createElement(ut,{width:"60px"})),e(i).createElement(Ve.Row,{justify:"space-between"},e(i).createElement(ut,{width:"75px"})))),mt=B.default(F.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,pt=B.default((({children:t,className:n,maxFontSize:a})=>{const[l,o]=(()=>{const e=i.useRef(null),[t,n]=i.useState({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}=t;return i.useEffect((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t)return void(i&&n({fontSize:r<a?r:a-(r-a),fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}));let c,u=l,d=o;i?(c=s?r-a:o-a,u=Math.min(l,a)):(c=s?l-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,l,o,r,e]),[`${a}%`,e]})();return e(i).createElement(at,{className:n,ref:o,fontSize:a},e(i).createElement(lt,{fontSize:l,noWrap:!0},t))}))`
  margin-bottom: 7px;
`,gt=B.default(X.Text).attrs({size:16,color:"#777777"})`
  margin-bottom: 20px;
`,ht=B.default(ce.ButtonPair)`
  width: 296px;
`,ft=B.default(ot.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,yt=e(i).memo((t=>{const{mint:n,symbol:a,balance:l,dollarValue:o,isFetching:r,isMainnet:s,sendButtonText:c,depositButtonText:u,showSendModal:d,showDepositAssetModal:m}=t,p=n?D.formatAddressShort(n):void 0,g=`${D.formatTokenAmount(l)} ${null!=a?a:p}`;return e(i).createElement(e(i).Fragment,null,e(i).createElement(mt,null,r?e(i).createElement(Et,null):e(i).createElement(e(i).Fragment,null,e(i).createElement(pt,{maxFontSize:38},g),s&&e(i).createElement(gt,null,o?D.formatDollarAmount(o):"–")),e(i).createElement(ht,{primaryTheme:r?"default":"primary",primaryText:c,primaryDisabled:r,onPrimaryClicked:d,secondaryTheme:r?"default":"primary",secondaryText:u,secondaryDisabled:r,onSecondaryClicked:m,buttonPairStyle:ce.ButtonPairStyle.Small})))})),Et=()=>e(i).createElement(ot.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(i).createElement(F.Column,null,e(i).createElement(Ve.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(i).createElement(Ve.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"60px",height:"8px"}))));i=o("aZikt"),B=o("hHMPk"),ae=o("awYjP");var bt=o("6pkBl");Ve=o("691SI"),X=o("kaQO6");const xt=B.default(Ve.Row).attrs({justify:"center"})`
  cursor: pointer;
  margin: 0 auto;
  width: auto;
  height: 48px;
  margin-bottom: 18px;
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      color: #8a81f8 !important;
    }
    svg {
      fill: #8a81f8;
      path {
        stroke: #8a81f8;
      }
      circle {
        stroke: #8a81f8;
      }
    }
  }
`,vt=e(i).memo((t=>e(i).createElement(xt,{onClick:t.onClick},e(i).createElement(bt.IconWrapper,null,e(i).createElement(ae.TokenListSettingsIcon,null)),e(i).createElement(X.Text,{size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0},t.buttonText))));i=o("aZikt"),v=o("ltHDB"),i=o("aZikt"),B=o("hHMPk"),F=o("fwZPo"),ae=o("awYjP"),X=o("kaQO6"),Ve=o("691SI");const kt=({title:t,description:n})=>e(i).createElement(wt,null,e(i).createElement(St,null,e(i).createElement(Tt,null,e(i).createElement(ae.FailureIcon,{width:32}))),e(i).createElement(At,null,t),e(i).createElement(Ct,null,n)),wt=B.default(F.Column).attrs({align:"center",justify:"center"})`
  height: 100%;
`,St=B.default.div`
  width: 94px;
  height: 94px;
  position: relative;
  border-radius: 100%;
  background: rgba(235, 55, 66, 0.1);
`,Tt=B.default(Ve.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,At=B.default(X.Text).attrs({size:28,weight:500,margin:"30px 0 10px 0"})``,Ct=B.default(X.Text).attrs({size:16,weight:400,margin:"0 30px",color:"#777777"})``,Mt=()=>{const{t:t}=v.useTranslation();return e(i).createElement(kt,{title:t("homeErrorTitle"),description:t("homeErrorDescription")})};i=o("aZikt"),B=o("hHMPk"),F=o("fwZPo"),Ve=o("691SI"),ot=o("jzCyU");const Ft=B.default.div`
  width: 44px;
  height: 44px;
  margin-right: 15px;
`,Pt=B.default(ot.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,Rt=()=>e(i).createElement(ot.SkeletonLoader,{align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(Ft,null,e(i).createElement(ot.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(i).createElement(F.Column,null,e(i).createElement(Ve.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(Pt,{width:"120px"}),e(i).createElement(Pt,{width:"60px"})),e(i).createElement(Ve.Row,{justify:"space-between"},e(i).createElement(Pt,{width:"75px"}),e(i).createElement(Pt,{width:"35px"}))));i=o("aZikt"),B=o("hHMPk"),ee=o("99Anx"),D=o("cFuyE");var Bt=o("1yeHx");g=o("7OhhO"),ce=o("8xzWM"),F=o("fwZPo"),Ve=o("691SI"),ot=o("jzCyU"),X=o("kaQO6");const Lt=B.default(F.Column).attrs({align:"center"})`
  position: relative;
  width: ${g.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,Ht=B.default(X.Text).attrs({weight:600,size:38})`
  margin-top: 33px;
  margin-bottom: 18px;
`,Dt=B.default(Ve.Row).attrs({justify:"center"})`
  margin-bottom: 22px;
  min-height: 25px;
`,It=B.default(X.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,Ot=B.default(X.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,zt=B.default(ce.ButtonPair)`
  width: 296px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,Ut=B.default(F.Column).attrs({align:"center",padding:"49px 0"})``,Kt=e(i).memo((t=>{const{balance:n,balanceChange:a,isFetching:l,isMainnet:o,sendButtonText:r,depositButtonText:s,showSendSelectionModal:c,showDepositSelectionModal:u}=t,d=!o||l?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":a>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":a<0?"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)":"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)",m=0===n?"$0.00":D.formatDollarAmount(n),p=0===a?"+$0.00":D.formatDollarAmount(a,!0),g=a>0?"#21E56F":a<0?"#EB3742":"#777777",h=D.formatPercentage(Bt.calculateDollarChangePercentage(n,a),"0.00%",!0);return e(i).createElement(Lt,{background:d},l?e(i).createElement(Ut,null,e(i).createElement(ot.SkeletonLoader,{width:"150px",height:"10px",borderRadius:"6px",backgroundColor:"#4D4D4D",margin:"0 0 10px 0"}),e(i).createElement(ot.SkeletonLoader,{width:"75px",height:"10px",borderRadius:"6px",backgroundColor:"#484848"})):o?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ht,null,m),e(i).createElement(Dt,null,e(i).createElement(It,{color:g},p),e(i).createElement(Ot,{color:g,backgroundColor:ee.hexToRGB(g,.1)},h))):e(i).createElement(Ut,null,e(i).createElement(X.Text,{size:36,weight:"bold",color:"#777"},"–")),e(i).createElement(zt,{primaryTheme:"default",primaryText:r,primaryDisabled:l,onPrimaryClicked:c,secondaryText:s,secondaryDisabled:l,onSecondaryClicked:u,buttonPairStyle:ce.ButtonPairStyle.Small}))}));i=o("aZikt"),B=o("hHMPk"),k=o("2zUeX"),D=o("cFuyE");var jt=o("7TimZ");const Nt=B.default.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,Wt=e(i).memo((t=>{const n=i.useCallback((e=>null!=e?e:t.unknownTokenText),[t.unknownTokenText]);return e(i).createElement(e(i).Fragment,null,t.data.map(((a,l)=>{var o,r,s;const c=k.assetKeyExtractor(a,l),u=D.amountToUiAmount(a.data.amount,a.data.decimals);switch(a.type){case"solana":return e(i).createElement(Nt,{key:c},e(i).createElement(jt.AssetRow,{balance:u,name:a.data.name,symbol:a.data.symbol,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>t.onClick({name:a.data.name,symbol:a.data.symbol})}));case"spl-token":{const l=t.customMetaMap.get(a.data.mintPubKey),d=null!==(r=null!==(o=a.data.symbol)&&void 0!==o?o:null==l?void 0:l.symbol)&&void 0!==r?r:null;return e(i).createElement(Nt,{key:c},e(i).createElement(jt.AssetRow,{balance:u,mint:a.data.mintPubKey,name:n(null!==(s=a.data.name)&&void 0!==s?s:null==l?void 0:l.name),symbol:d,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>{var e;return t.onClick({mint:a.data.mintPubKey,name:n(null!==(e=a.data.name)&&void 0!==e?e:null==l?void 0:l.name),symbol:d})}}))}}})))})),$t=["Fungible"],Vt=()=>{const t=(()=>{var t;const{t:n}=v.useTranslation(),a=n("homeManageTokenList"),l=n("homeSend"),o=n("homeDeposit"),r=n("assetDetailUnknownToken"),{showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d}=b.useModals(),{pushDetailView:m}=S.useDetailViews(),p=w.useFetchConnection(),g=null==p?void 0:p.data,h=null!==(t=null==g?void 0:g.cluster)&&void 0!==t?t:"mainnet-beta",{accountClient:f}=E.useSelectedSolanaAccount(),y=f.publicKey.toString(),{hiddenMints:x,hiddenMintsMapQuery:F}=M.useHiddenMints(y),{customMetaMap:R,customMetaMapQuery:B}=C.useCustomTokenMetaMap(),{data:{cachedLamportBalance:L,cachedPrices:H},loading:D,error:I}=A.useCachedSPLAssetData(y,h),{data:O,isFetching:z,error:U}=k.useSPLAssets({cachedLamportBalance:L,cachedPrices:H,publicKey:y,standards:$t,cluster:h,hiddenMints:x,sortByPrice:!0}),{totalBalance:K,totalBalanceChange:j}=i.useMemo((()=>k.getTotalAssetsBalance(O)),[O]),N=!p.isFetched||!F.isFetched||!B.isFetched||D||z,W=p.isError||F.isError||B.isError||!!I&&O.length<=0||!!U,$=i.useCallback((t=>{const{mint:n,name:a,symbol:l}=t;T.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:c.Chain.Solana,isNativeOfType:n?void 0:"sol",address:n,symbol:l,name:a}}),m(e(i).createElement(P.AssetDetail,{mint:n,name:a,symbol:l}),{shouldShowBackButton:!0})}),[m]);return{data:O,isFetching:N,isError:W,isMainnet:"mainnet-beta"===h,totalBalance:K,totalBalanceChange:j,customMetaMap:R,manageTokenListButtonText:a,sendButtonText:l,depositButtonText:o,unknownTokenText:r,showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d,onAssetRowClick:$}})();return t.isError?e(i).createElement(Mt,null):e(i).createElement(Zt,Object.assign({},t))},Zt=e(i).memo((t=>e(i).createElement(F.Column,{align:"center"},e(i).createElement(Kt,{balance:t.totalBalance,balanceChange:t.totalBalanceChange,isFetching:t.isFetching,isMainnet:t.isMainnet,sendButtonText:t.sendButtonText,depositButtonText:t.depositButtonText,showSendSelectionModal:t.showSendSelectionModal,showDepositSelectionModal:t.showDepositSelectionModal}),t.isFetching?[1,2,3].map((t=>e(i).createElement(Rt,{key:t}))):e(i).createElement(e(i).Fragment,null,e(i).createElement(Wt,{data:t.data,customMetaMap:t.customMetaMap,isMainnet:t.isMainnet,unknownTokenText:t.unknownTokenText,onClick:t.onAssetRowClick}),e(i).createElement(vt,{buttonText:t.manageTokenListButtonText,onClick:t.showAssetVisibilityModal})))));var Gt=o("8sCMi");ae=o("awYjP"),i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),E=o("HyeVU"),x=o("j1GR2"),q=o("hHJQk"),w=o("bBAGA");const Yt=B.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,_t=()=>{const{t:t}=v.useTranslation(),{accountClient:n}=E.useSelectedSolanaAccount(),{data:a}=w.useFetchConnection(),l="mainnet-beta"===(null==a?void 0:a.cluster),[o]=x.useFeatureFlags(["kill-rich-transactions-extension"]);return e(i).createElement(Yt,null,e(i).createElement(q.PageHeader,null,t("recentActivityPrimaryText")),!o&&l?e(i).createElement(tt,{publicKey:n.publicKey}):e(i).createElement(Ie,{publicKey:n.publicKey}))};i=o("aZikt"),v=o("ltHDB");var Qt=o("69REY"),Jt=o("9OxTN"),Xt=o("7yWWO"),qt=(b=o("16KRF"),o("g9tZv"));E=o("HyeVU"),x=o("j1GR2"),w=o("bBAGA"),i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB");const en=(B=o("hHMPk")).default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 15px;
  > * {
    margin: 5px;
  }
`;i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),k=o("2zUeX"),i=o("aZikt"),S=o("cNv5c"),i=o("aZikt"),B=o("hHMPk"),Xt=o("7yWWO"),k=o("2zUeX");var tn=o("jEn2x"),nn=(v=o("ltHDB"),E=o("HyeVU"),w=o("bBAGA"),oe=o("45nY7"),i=o("aZikt"),S=o("cNv5c"),v=o("ltHDB"),i=o("aZikt"),B=o("hHMPk"),Xt=o("7yWWO"),o("2aCEZ")),an=o("f8jMK"),ln=(k=o("2zUeX"),ee=o("99Anx"),D=o("cFuyE"),o("4CRqq"));b=o("16KRF"),w=o("bBAGA"),tn=o("jEn2x"),E=o("HyeVU"),x=o("j1GR2"),Be=o("2yhRe"),ce=o("8xzWM"),F=o("fwZPo"),q=o("hHJQk"),X=o("kaQO6"),i=o("aZikt"),B=o("hHMPk"),ae=o("awYjP"),X=o("kaQO6");const on=B.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  top: 4px;
  padding: 4px 6px;
  margin: 8px;
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
`,rn=B.default.div`
  padding-left: 6px;
  padding-right: 4px;
`,sn=B.default(X.StyledText).attrs({textAlign:"left",weight:600,noWrap:!0})``,cn=e(i).memo((t=>{const{title:n,amount:a,symbol:l}=t;return e(i).createElement(on,null,e(i).createElement(ae.MagicEdenCirleIcon,null),e(i).createElement(rn,null,e(i).createElement(sn,{opacity:.5,size:12,lineHeight:16,textTransform:"capitalize"},n),e(i).createElement(sn,{noWrap:!0,lineHeight:20,textTransform:"capitalize"},`${a} ${l}`)))}));var un=o("eDkRT"),dn=o("bXcFZ");u=o("czDD7"),H=o("7Lj33");const mn=B.default.div`
  display: flex;
  flex-direction: column;
`,pn=B.default.div`
  position: relative;
`,gn=B.default.div`
  > * {
    margin: 10px 0px;
  }
  margin-bottom: 20px;
`,hn=B.default.div`
  padding: 16px 0px;
  display: flex;
  gap: 10px;
`,fn=B.default.div`
  display: flex;
  flex-wrap: wrap;
`,yn=B.default.div`
  border-radius: 6px;
  border: 1px solid #333333;
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
  max-width: fit-content;
  word-break: break-word;
  align-items: flex-start;
`,En=B.default(ce.Button)`
  margin-bottom: 10px;
`,bn=e(i).memo((t=>{var n,a,l,o,r,s,c,d,m,p;const{collectible:g,collectionKey:h}=t,{uri:f,mintPubKey:y,amount:S,decimals:T,name:A,pubkey:C}=g,M=D.amountToUiAmount(S,T),{t:P}=v.useTranslation(),[R,B]=x.useFeatureFlags(["list-on-marketplace-browser-ext","enable-burn-token"]),L=ln.useListCollectibleStore((e=>e.setListCollectible)),I=ln.useListCollectibleStore((e=>e.setListPrice)),O=null!==(n=k.useFetchSPLTokenJSONMetadata(f,u.getSPLTokenJSONMetadata,u.setSPLTokenJSONMetadata,u.removeSPLTokenJSONMetadata).data)&&void 0!==n?n:null;let z,U,K,j;O&&(z=null==O?void 0:O.external_url,U=null==O?void 0:O.description,K=null==O?void 0:O.attributes,j=null==O?void 0:O.image);const N=i.useMemo((()=>A&&A.length>0?A:(null==O?void 0:O.name)?null==O?void 0:O.name:g.mintPubKey?g.mintPubKey:void e(i).Fragment),[A,O]),W=k.useSelectBestMedia(O),$=M>1,{showSendModal:V,showCollectibleListingModal:Z,showEditCollectibleListingModal:G}=b.useModals(),Y=null===(a=w.useFetchConnection())||void 0===a?void 0:a.data,_=null!==(l=null==Y?void 0:Y.cluster)&&void 0!==l?l:"mainnet-beta",{accountClient:Q}=E.useSelectedSolanaAccount(),J=Q.publicKey.toString(),te=an.parseURL(z),ne=Xt.useSubscribeListedSPLCollectible(tn.getAPIEnvironment(),_,J,C),ae="SemiFungible"!==g.standard&&"unknownTokens"!==h,le=null===(r=null===(o=null==ne?void 0:ne.listings)||void 0===o?void 0:o.magic_eden)||void 0===r?void 0:r.url,oe=i.useCallback((()=>{le&&window.open(le)}),[le]),{preferredExplorer:ie}=Be.usePreferredExplorer(),{showBurnCollectibleModal:re}=b.useModals();return e(i).createElement(mn,null,e(i).createElement(q.PageHeader,{items:[{label:P("collectibleDetailViewOnExplorer",{explorer:ie.name}),onClick:()=>_&&window.open(H.generateAddressExplorerUrl(y,_,ie.type),"_blank")},...B?[{label:P("collectibleDetailBurnToken"),onClick:()=>re(g),variant:dn.CTAVariant.Warning}]:[]]},N,$?e(i).createElement("label",{style:{opacity:.5}}," (",Math.floor(M),")"):null),e(i).createElement(pn,null,e(i).createElement(un.CollectibleDisplay,{width:328,height:328,media:W,image:j,enableCameraControls:!0,enableMedia:!0}),(null===(c=null===(s=null==ne?void 0:ne.listings)||void 0===s?void 0:s.magic_eden)||void 0===c?void 0:c.listingPriceUiAmount)?e(i).createElement(cn,{title:P("collectiblesListed"),amount:null===(m=null===(d=ne.listings)||void 0===d?void 0:d.magic_eden)||void 0===m?void 0:m.listingPriceUiAmount,symbol:"SOL"}):null),e(i).createElement(hn,null,ne?null:e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{const e={type:"spl-token",data:Object.assign(Object.assign({},g),{usd:0,usd24hChange:0})};V(e),(()=>{const e=document.querySelector("audio"),t=document.querySelector("video"),n=null!=e?e:t;(null==n?void 0:n.paused)||null==n||n.pause()})()}},P("collectibleDetailSend")),R&&ae&&!ne?e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{L({asset:g,listings:null}),Z(g)}},P("collectibleDetailList")):null,R&&(null===(p=null==ne?void 0:ne.listings)||void 0===p?void 0:p.magic_eden)?e(i).createElement(F.Column,null,e(i).createElement(En,{theme:"primary",disabled:!le,onClick:oe},P("listStatusViewOnMagicEden")),e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{var e,t,n;L(ne),I(nn.lamportsToSolana(null!==(n=null===(t=null===(e=ne.listings)||void 0===e?void 0:e.magic_eden)||void 0===t?void 0:t.listingPrice)&&void 0!==n?n:0)),G(g)}},P("collectiblesEditListing"))):null),e(i).createElement(gn,null,(U||z)&&e(i).createElement(X.Text,{weight:500,size:16,color:"#777",textAlign:"left"},P("collectibleDetailDescription")),U&&e(i).createElement(X.Text,{size:14,textAlign:"left",lineHeight:20},U),te&&e(i).createElement(X.Text,{href:te.href,color:"#8A81F8",hoverColor:ee.hexToRGB("#8A81F8",.5),size:14,weight:500,rel:"noopener noreferrer",target:"_blank"},te.host)),e(i).createElement(gn,null,K&&K.length&&e(i).createElement(e(i).Fragment,null,e(i).createElement(X.Text,{weight:500,size:16,color:"#777",textAlign:"left"},P("collectibleDetailProperties")),e(i).createElement(fn,null,K.map((t=>e(i).createElement(yn,{key:t.trait_type},e(i).createElement(X.Text,{lineHeight:15,weight:500,size:12,color:"#777",textTransform:"uppercase",textAlign:"left"},t.trait_type),e(i).createElement(X.Text,{lineHeight:17,color:"white",size:14,weight:500,textAlign:"left"},t.value))))))))}));un=o("eDkRT");const xn=e(i).memo((t=>{const{collectible:n,media:a,image:l,collectionKey:o}=t,{pushDetailView:r}=S.useDetailViews(),s=i.useCallback((()=>{r(e(i).createElement(bn,{collectible:n,collectionKey:o}),{shouldShowBackButton:!0})}),[n]);return e(i).createElement(un.CollectibleDisplay,{onClick:s,media:a,image:l,enableCameraControls:!1})}));q=o("hHJQk"),X=o("kaQO6"),i=o("aZikt"),B=o("hHMPk"),X=o("kaQO6");const vn=B.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  ${({position:e})=>{switch(e){case"bottom-left":return"\n          bottom: 4px;\n          padding: 6px 11px;\n        ";case"top-left":return"\n          top: 4px;\n          padding: 2px 6px;\n        "}}}
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
`,kn=B.default(X.StyledText).attrs({lineHeight:17,weight:600,noWrap:!0})``,wn=e(i).memo((t=>{const{name:n,count:a,position:l,textSize:o}=t;return e(i).createElement(vn,{position:l},e(i).createElement(kn,{maxWidth:"104px",size:"small"===o?12:14,noWrap:!0,textTransform:"capitalize"},n),a?e(i).createElement(kn,{opacity:.5,size:14,paddingLeft:4},a):null)}));u=o("czDD7");const Sn=B.default(X.StyledText).attrs({as:"span",weight:500})``,Tn=B.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,An=B.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Cn=e(i).memo((t=>{var n;const{collectible:a,collectionKey:l}=t,{accountClient:o}=E.useSelectedSolanaAccount(),r=o.publicKey.toString(),{t:s}=v.useTranslation(),c=w.useFetchConnection().data,d=null!==(n=null==c?void 0:c.cluster)&&void 0!==n?n:"mainnet-beta",m=Xt.useSubscribeListedSPLCollectible(tn.getAPIEnvironment(),d,r,a.pubkey),p=k.useFetchSPLTokenJSONMetadata(a.uri,u.getSPLTokenJSONMetadata,u.setSPLTokenJSONMetadata,u.removeSPLTokenJSONMetadata),{isFetched:g}=p,h=p.data||null;let f,y;return h&&(f=null==h?void 0:h.image,y=k.parseMediaFromImage(h)),e(i).createElement(Tn,null,g?e(i).createElement(e(i).Fragment,null,e(i).createElement(xn,{key:a.mintPubKey,collectionKey:l,collectible:a,media:y,image:f}),m?e(i).createElement(wn,{name:s("collectiblesListed"),textSize:"small",position:"top-left"}):null):e(i).createElement(An,null,e(i).createElement(oe.Spinner,null)))})),Mn=e(i).memo((t=>{const{name:n,collection:a}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,e(i).createElement(Sn,{textTransform:"capitalize"},n)," ",e(i).createElement(Sn,{opacity:.5},a.items.length)),e(i).createElement(en,null,a.items.map((t=>e(i).createElement(Cn,{collectible:t,collectionKey:a.key})))))}));un=o("eDkRT");const Fn=e(i).memo((t=>{const{name:n,collection:a,media:l,image:o}=t,{pushDetailView:r}=S.useDetailViews(),s=i.useCallback((()=>r(e(i).createElement(Mn,{name:n,collection:a}),{shouldShowBackButton:!0})),[n,a,r]);return e(i).createElement(un.CollectibleDisplay,{onClick:s,media:l,image:o,enableCameraControls:!1})}));oe=o("45nY7"),u=o("czDD7");const Pn=B.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Rn=B.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Bn=e(i).memo((t=>{var n,a;const{collectionKey:l,collection:o,nrOfListed:r}=t,{t:s}=v.useTranslation(),c=o.items[0],d=k.useFetchSPLTokenJSONMetadata(o.uri,u.getSPLTokenJSONMetadata,u.setSPLTokenJSONMetadata,u.removeSPLTokenJSONMetadata),{isFetched:m}=d,p=d.data||null;let g;const h=null!==(n=k.useBestCollectionName(p))&&void 0!==n?n:l,f=null!==(a=o.name)&&void 0!==a?a:h;p&&(g=p.image);const y=k.useSelectCollectionMedia(p),E=o.items.length;let b=E.toString();if(1==E){const[e]=o.items;"SemiFungible"===e.standard&&(b=e.amount)}return e(i).createElement(Pn,null,m?e(i).createElement(e(i).Fragment,null,1===E?e(i).createElement(xn,{key:c.pubkey,collectionKey:l,collectible:c,media:y,image:g}):e(i).createElement(Fn,{key:o.key,name:f,collection:o,media:y,image:g}),r>0?e(i).createElement(wn,{name:1===E&&1===r?s("collectiblesListed"):s("collectiblesNrOfListed",{nrOfListed:r}),textSize:"small",position:"top-left"}):null,e(i).createElement(wn,{name:f,count:b,position:"bottom-left"})):e(i).createElement(Rn,null,e(i).createElement(oe.Spinner,null)))}));i=o("aZikt");const Ln=(B=o("hHMPk")).default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Hn=e(i).memo((t=>{var n;const{collectionKey:a,collection:l}=t,o=l.items[0],r=null!==(n=l.name)&&void 0!==n?n:a,s=l.items.length;let c=s.toString();if(1==s){const[e]=l.items;"SemiFungible"===e.standard&&(c=e.amount)}return e(i).createElement(Ln,null,1===s?e(i).createElement(xn,{key:o.pubkey,collectionKey:a,collectible:o,media:null,image:void 0}):e(i).createElement(Fn,{key:l.key,name:r,collection:l,media:null,image:void 0}),e(i).createElement(wn,{name:r,count:c,position:"bottom-left"}))}));X=o("kaQO6"),ee=o("99Anx"),ae=o("awYjP"),b=o("16KRF");const Dn=B.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`,In=B.default.div`
  background-color: ${ee.hexToRGB("#e5a221",.7)};
  align-items: center;
  border-radius: 6px;
  margin: 5px;
  padding: 8px 10px;
  display: flex;
  cursor: pointer;
`,On=B.default(X.StyledText).attrs({textAlign:"left",weight:500,size:14,noWrap:!0})`
  margin-left: 7px;
`,zn=e(i).memo((t=>{const{collections:n,listedCollectibles:a,isError:l,listingsError:o,hasUnknownTokens:r}=t,{t:s}=v.useTranslation(),{showListingsErrorModal:c}=b.useModals();return l?e(i).createElement(Dn,null,s("homeErrorDescription")):n&&n.length?e(i).createElement(e(i).Fragment,null,o?e(i).createElement(In,{onClick:c},e(i).createElement(ae.InfoIcon,{fill:"#fff"}),e(i).createElement(On,null,s("collectiblesUnableToLoadListingsFrom",{marketplace:"Magic Eden"}))):null,e(i).createElement(en,null,n.map(((t,l)=>{const o=(null!=a?a:[]).reduce(((e,n)=>e+ +(n.asset.collectionPubKey===t.key)),0);let s=e(i).createElement(Bn,{key:`${t.name}-${l}`,collectionKey:t.key,collection:t,nrOfListed:o});return l===n.length-1&&r&&0!==t.items.length&&(s=e(i).createElement(Hn,{collectionKey:t.key,collection:t})),s})))):e(i).createElement(Dn,null,s("collectiblesNoCollectibles"))}));ie=o("7KDpr"),q=o("hHJQk"),c=o("lwple"),tn=o("jEn2x");const Un=()=>{var t,n;const{t:a}=v.useTranslation(),{showDepositAssetModal:l}=b.useModals(),[o]=x.useFeatureFlags(["list-on-marketplace-browser-ext"]),{accountClient:r}=E.useSelectedSolanaAccount(),s=r.publicKey.toString(),u=w.useFetchConnection().data,d=null!==(t=null==u?void 0:u.cluster)&&void 0!==t?t:"mainnet-beta",m=e(Qt)(Jt.getNFTBlocklist),[p]=qt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0),g=m.loading?null:null!==(n=null==m?void 0:m.value)&&void 0!==n?n:[],{data:h,isError:f}=Xt.useSPLTokenAccountsByCollectibleStandard(tn.getAPIEnvironment(),d,s,p,g,o),y=!!(null==h?void 0:h.error),{collections:k,collectionsLoaded:S}=Xt.useSubscribeSPLTokenCollections(tn.getAPIEnvironment(),d,s,p,g,o),T=Xt.useSubscribeListedSPLCollectibles(tn.getAPIEnvironment(),d,s),A=i.useMemo((()=>k.filter((e=>e.uri))),[k]),C=i.useMemo((()=>k.filter((e=>!e.uri)).map((e=>{const{items:t}=e;return t})).flat(2)),[k]),M={key:"unknownTokens",name:"Unknown Tokens",uri:"",items:C};return 0===C.length||A.find((e=>"Unknown Tokens"===e.name))||A.push(M),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!f&&!S},e(i).createElement(q.PageHeader,{items:[{label:a("collectiblesReceiveCollectible"),onClick:()=>l({symbol:null,mint:void 0})}]},a("collectiblesPrimaryText")),e(i).createElement(zn,{isError:f,collections:A,listedCollectibles:T,listingsError:!!y,hasUnknownTokens:0!==C.length}))};var Kn={};t(Kn,"Settings",(function(){return na}),(function(e){return na=e}));R=o("h6IZU"),i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),c=o("lwple"),D=o("cFuyE"),L=o("6oEu9");var jn=o("7h7pw"),Nn=(an=o("f8jMK"),T=o("41J1p"),E=o("HyeVU"),S=o("cNv5c"),w=o("bBAGA"),o("eGDJt")),Wn=(b=o("16KRF"),Pe=o("j89eZ"),Be=o("2yhRe"),qt=o("g9tZv"),o("5X25N"));X=o("kaQO6"),ae=o("awYjP"),i=o("aZikt"),B=o("hHMPk"),L=o("6oEu9"),T=o("41J1p"),E=o("HyeVU"),ae=o("awYjP");const $n=B.default.input`
  color: #fff;
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  background: none;
  border: none;
  width: 166px;
  &:focus {
    outline: 0;
  }
`,Vn=B.default.form`
  border: 1px solid #323232;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 15px;
  width: 230px;
  position: relative;
`,Zn=B.default.div`
  position: absolute;
  right: 18px;
  top: 18px;
  svg {
    fill: #666;
  }
  &:hover {
    cursor: pointer;
    svg {
      fill: white;
    }
  }
`,Gn=()=>{const t=i.useRef(null),{accountMeta:n,setSelectedAccountName:a}=E.useSelectedSolanaAccount(),l=n.name,[o,r]=i.useState(l),s=i.useCallback((()=>{var e;r(""),null===(e=t.current)||void 0===e||e.focus()}),[r,t.current]),c=i.useCallback((e=>r(e.currentTarget.value)),[r]),u=i.useCallback((()=>{o.length>0&&o!==l&&(T.analytics.capture("changeAccountName",{data:{name:o}}),a(o))}),[l,o,a]),d=i.useCallback((e=>{e.preventDefault(),u()}),[u]);return e(i).createElement(Vn,{onSubmit:d},e(i).createElement($n,{ref:t,maxLength:L.MAX_WALLET_NAME_LENGTH,value:o,onChange:c,onBlur:u}),e(i).createElement(Zn,{onClick:s},e(i).createElement(ae.PencilIcon,{width:18})))};ce=o("8xzWM"),q=o("hHJQk");var Yn=o("eXQFq"),_n=o("iccRv"),Qn=o("5eccS"),Jn=o("kaz4F"),Xn=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const qn=B.default.div`
  margin-top: 30px;
  margin-bottom: 33px;
  p {
    margin-top: 10px;
  }
`,ea=B.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Wn.ContentRowContainer} {
    margin-bottom: 10px;
  }
`,ta=B.default.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  > * {
    margin-top: 10px;
  }
`,na=()=>{const{t:t}=v.useTranslation(),{accountClient:n,accountMeta:a}=E.useSelectedSolanaAccount(),{accountMetas:l}=E.useSolanaAccounts(),{pushDetailView:o}=S.useDetailViews(),{showRemoveAccountModal:r,showResetSeedModal:s,showExportMnemonicModal:u,showExportPrivateKeyModal:d}=b.useModals(),m=1===l.length,p=a.type===c.AccountType.Ledger,g=a.type===c.AccountType.PrivateKey,h=n.publicKey.toString();return e(i).createElement(ea,null,e(i).createElement(qn,null,e(i).createElement(Gn,null),e(i).createElement(Jn.DelayedRenderComponent,{delayedChildren:e(i).createElement(Qn.CopyTooltip,{copyString:h},e(i).createElement(X.Text,{size:16,color:"#777777"},"(",D.formatHashMedium(h),")"))},e(i).createElement(X.Text,{size:16,color:"#777777"},"(",D.formatHashMedium(h),")"))),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsDisplayLanguage"),secondaryContent:jn.languageDisplayValue(v.i18next.language),onClick:()=>{o(e(i).createElement(ma,null),{shouldShowBackButton:!0})}}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsAddressBookPrimary"),secondaryContent:t("settingsAddressBookSecondary"),onClick:()=>{o(e(i).createElement(pa,null),{shouldShowBackButton:!0})}}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsTrustedAppsPrimary"),secondaryContent:t("settingsTrustedAppsSecondary"),onClick:()=>{o(e(i).createElement(ia,null),{shouldShowBackButton:!0})}}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsChangeNetworkPrimary"),secondaryContent:t("settingsChangeNetworkSecondary"),onClick:()=>{o(e(i).createElement(la,null),{shouldShowBackButton:!0})}}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsSecurityPrimary"),secondaryContent:t("settingsSecuritySecondary"),onClick:()=>{o(e(i).createElement(ha,null),{shouldShowBackButton:!0})}}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsPreferredExplorers"),secondaryContent:t("settingsPreferredExplorersSecondary"),onClick:()=>{o(e(i).createElement(ga,null),{shouldShowBackButton:!0})}}),e(i).createElement(ta,null,!p&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ce.Button,{"data-testid":"settings-button-export-private-key",disabled:p,onClick:d,title:p?t("settingsErrorCannotExportLedgerPrivateKey"):""},t("settingsExportPrivateKey")),!g&&e(i).createElement(ce.Button,{"data-testid":"settings-button-show-secret-recovery-phrase",onClick:u},t("settingsShowSecretRecoveryPhrase"))),e(i).createElement(ce.Button,{disabled:m,theme:"warning",onClick:r,title:m?t("settingsErrorCannotRemoveAllWallets"):""},t("settingsRemoveWallet")),e(i).createElement(ce.Button,{theme:"warning",onClick:s},t("settingsResetSecretRecoveryPhrase"))))},aa=B.default.div`
  > * {
    margin-top: 10px;
  }
  *:first-child {
    margin-top: 0px;
  }
`,la=()=>{var t;const{t:n}=v.useTranslation(),a=null===(t=w.useFetchConnection())||void 0===t?void 0:t.data,l=null==a?void 0:a.mainnetRpcUrl,o=null==a?void 0:a.cluster,{mutateAsync:r}=Nn.useStoreStorageValue(c.StorageKeys.Cluster),s=i.useMemo((()=>[{cluster:"mainnet-beta",primaryContent:n("settingsNetworkMainnetBeta"),secondaryContent:l},{cluster:"testnet",primaryContent:n("settingsNetworkTestnet"),secondaryContent:R.clusterApiUrl("testnet")},{cluster:"devnet",primaryContent:n("settingsNetworkDevnet"),secondaryContent:R.clusterApiUrl("devnet")},{cluster:"localhost",primaryContent:n("settingsNetworkLocalhost"),secondaryContent:L.DEFAULT_LOCALHOST_RPC_URL}]),[l]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,n("settingsChangeNetworkPrimary")),e(i).createElement(aa,null,s.map((t=>e(i).createElement(Wn.ContentRow,{key:t.cluster,primaryContent:t.primaryContent,secondaryContent:t.secondaryContent,rightContent:o===t.cluster&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>{var e;(e=t.cluster)!==o&&r(e)}})))))},oa=B.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,ia=()=>{var t,n;const{t:a}=v.useTranslation(),{accountClient:l}=E.useSelectedSolanaAccount(),[o,r,s]=qt.useStorage(c.StorageKeys.TrustedApplicationsByOwnerBrowser,{});if(r)return null;const u=l.publicKey.toString(),d=null!==(t=o[u])&&void 0!==t?t:{},m=null!==(n=Object.keys(d))&&void 0!==n?n:[],p=m.length>0;return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,a("settingsTrustedAppsPrimary")),p?e(i).createElement(e(i).Fragment,null,e(i).createElement(aa,null,m.map((t=>{var n;return e(i).createElement(Wn.ContentRow,{key:t,primaryContent:null===(n=an.parseURL(t))||void 0===n?void 0:n.host,secondaryContent:null,rightContent:e(i).createElement(ce.Button,{fontSize:12,width:"70px",theme:"warning",paddingY:5,onClick:()=>(e=>{const t=Object.assign({},d);delete t[e],s(Object.assign(Object.assign({},o),{[u]:t}))})(t)},a("settingsTrustedAppsRevoke"))})})))):e(i).createElement(oa,null,a("settingsNoTrustedApps")))},ra=B.default(X.Text).attrs({size:16,weight:500,color:"white",textAlign:"left"})`
  margin-top: 30px;
  margin-bottom: 14px;
`,sa=B.default(aa)`
  padding-bottom: 20px;
`,ca=B.default(aa)`
  padding-left: 0px;
  padding-right: 0px;
`,ua=B.default(X.Text).attrs({size:16,weight:500,color:"#666666"})`
  font-style: italic;
`,da=B.default(X.Text).attrs({size:14,lineHeight:20,weight:400,color:"#777",textAlign:"left"})`
  padding-bottom: 16px;
`,ma=()=>{const{t:t}=v.useTranslation(),[n,a]=i.useState(v.i18next.language);return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,t("settingsDisplayLanguage")),e(i).createElement(sa,null,L.SUPPORTED_LANGUAGES.map((t=>e(i).createElement(Wn.ContentRow,{key:t.value,primaryContent:t.displayValue,secondaryContent:null,rightContent:jn.languageMatches(n,t.value)&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>{T.analytics.capture("displayLanguageChanged",{data:{targetLanguage:t.value}}),v.i18next.changeLanguage(t.value),a(t.value)}})))))},pa=()=>{const{t:t}=v.useTranslation(),{savedAddresses:n,recentAddresses:a}=Pe.useAddressBook(),{showAddAddressModal:l,showEditAddressModal:o}=b.useModals();return i.useEffect((()=>{T.analytics.capture("addressBookOpen")}),[]),e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,{icon:e(i).createElement(ae.PlusIcon,null),onIconClick:()=>l(void 0)},t("settingsAddressBookPrimary")),e(i).createElement(ca,null,n.length>0&&n.map((t=>e(i).createElement(Wn.ContentRow,{key:t.address,primaryContent:t.label,secondaryContent:null,rightContent:e(i).createElement(X.Text,{size:16,color:"#666666"},D.formatHashMedium(t.address,4)),onClick:()=>{o(t)}}))),a.length>0&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ra,null,t("settingsAddressBookRecentlyUsed")),a.map((n=>e(i).createElement(Wn.ContentRow,{key:n,primaryContent:e(i).createElement(ua,null,t("settingsAddressBookNoLabel")),secondaryContent:null,rightContent:e(i).createElement(X.Text,{size:16,color:"#666666"},D.formatHashMedium(n,4)),onClick:()=>{l(n)}}))))),0===n.length&&0===a.length&&e(i).createElement(oa,null,e(i).createElement(X.Text,{size:18,weight:500,color:"#666666"},t("settingsNoAddresses"))))},ga=()=>{const{t:t}=v.useTranslation(),{preferredExplorer:n,setPreferredExplorer:a}=Be.usePreferredExplorer(),l=Object.entries(_n.SUPPORTED_EXPLORERS).map((([e,t])=>({key:e,name:t.name}))),o=i.useCallback((e=>Xn(void 0,void 0,void 0,(function*(){a(e)}))),[a]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,t("settingsPreferredExplorers")),e(i).createElement(aa,null,l.map((t=>e(i).createElement(Wn.ContentRow,{key:t.key,primaryContent:t.name,secondaryContent:null,rightContent:t.key===n.type&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>o(t.key)})))))},ha=()=>{const{t:t}=v.useTranslation(),{showChangePasswordModal:n,showChangeLockTimerModal:a}=b.useModals(),[l,o,r]=qt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0),[s,u,d]=qt.useStorage(c.StorageKeys.IsAnalyticsOptedOut,!1);return o||u?null:e(i).createElement(e(i).Fragment,null,e(i).createElement(q.PageHeader,null,t("settingsSecurityPrimary")),e(i).createElement(aa,null,e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsChangePasswordPrimary"),secondaryContent:t("settingsChangePasswordSecondary"),onClick:n}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsAutoLockTimerPrimary"),secondaryContent:t("settingsAutoLockTimerSecondary"),onClick:a}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsSuspiciousCollectiblesPrimary"),secondaryContent:t("settingsSuspiciousCollectiblesSecondary"),rightContent:e(i).createElement(Yn.ToggleSwitch,{id:"toggleSuspiciousCollectibles",checked:l,onChange:()=>r(!l)})}),e(i).createElement(Wn.ContentRow,{primaryContent:t("settingsSecurityAnalyticsPrimary"),secondaryContent:t("settingsSecurityAnalyticsSecondary"),rightContent:e(i).createElement(Yn.ToggleSwitch,{id:"toggleAnalytics",checked:!s,onChange:()=>d(!s)})}),e(i).createElement(da,null,t("settingsSecurityAnalyticsHelper"))))};i=o("aZikt"),B=o("hHMPk"),Me=o("d3pmY"),an=o("f8jMK"),v=o("ltHDB"),dn=o("bXcFZ"),ee=o("99Anx"),Z=o("4o0lv"),i=o("aZikt");var fa,ya=new Uint8Array(16);function Ea(){if(!fa&&!(fa="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return fa(ya)}var ba=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var xa=function(e){return"string"==typeof e&&ba.test(e)},va=[],ka=0;ka<256;++ka)va.push((ka+256).toString(16).substr(1));var wa=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(va[e[t+0]]+va[e[t+1]]+va[e[t+2]]+va[e[t+3]]+"-"+va[e[t+4]]+va[e[t+5]]+"-"+va[e[t+6]]+va[e[t+7]]+"-"+va[e[t+8]]+va[e[t+9]]+"-"+va[e[t+10]]+va[e[t+11]]+va[e[t+12]]+va[e[t+13]]+va[e[t+14]]+va[e[t+15]]).toLowerCase();if(!xa(n))throw TypeError("Stringified UUID is invalid");return n};var Sa,Ta=function(e,t,n){var a=(e=e||{}).random||(e.rng||Ea)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var l=0;l<16;++l)t[n+l]=a[l];return t}return wa(a)};!function(e){e.NetworkHealth="network-health",e.Cluster="cluster"}(Sa||(Sa={}));const Aa=i.createContext(null),Ca=({children:t})=>{const n=[],[a,l]=i.useReducer(((e,t)=>{switch(t.type){case"create":return e.concat(t.payload);case"delete":return e.filter((({id:e})=>e!==t.payload.id));case"reset":return n;default:throw new Error("There was an error dispatching a banner action.")}}),n),o=e=>l({type:"delete",payload:{id:e.id}});return e(i).createElement(Aa.Provider,{value:{banners:a,createBanner:e=>{const{type:t,variant:n,message:a,dismissable:i=!0,icon:r,autohide:s=!0,delay:c=5e3,onClick:u}=e;t&&n&&a||console.error("You must supply a type, variant and message when creating a Banner.");const d=Ta();return l({type:"create",payload:{id:d,type:t,variant:n,message:a,dismissable:i,icon:r,autohide:s,delay:c,onClick:u}}),s&&setTimeout((()=>{o({id:d})}),c),d},deleteBanner:o,resetBanners:()=>l({type:"reset"})}},t)};b=o("16KRF"),w=o("bBAGA"),ae=o("awYjP");const Ma=B.default.button`
  cursor: ${e=>e.onClick?"pointer":"default"};
  display: flex;
  align-items: center;
  vertical-align: middle;
  overflow: visible;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  width: 100%;
  padding: 10px 16px;
  svg {
    fill: #fff;
    margin-right: 8px;
  }
`,Fa=B.default(Me.motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case dn.CTAVariant.Primary:return ee.hexToRGB("#4E44CE",.7);case dn.CTAVariant.Success:return ee.hexToRGB("#21E56F",.7);case dn.CTAVariant.Warning:return ee.hexToRGB("#E5A221",.7);case dn.CTAVariant.Danger:return ee.hexToRGB("#EB3742",.7);default:return ee.hexToRGB("#E5A221",.7)}}};
  ${Ma} {
    &:focus-visible {
      border-color: ${e=>{switch(e.variant){case dn.CTAVariant.Primary:return ee.hexToRGB("#4E44CE",.7);case dn.CTAVariant.Success:return ee.hexToRGB("#21E56F",.7);case dn.CTAVariant.Warning:return ee.hexToRGB("#E5A221",.7);case dn.CTAVariant.Danger:return ee.hexToRGB("#EB3742",.7);default:return ee.hexToRGB("#E5A221",.7)}}};
    }
  }
`,Pa=B.default.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  svg {
    margin-right: 10px;
  }
`,Ra=B.default.button`
  cursor: pointer;
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  overflow: visible;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  &:focus,
  &:focus-visible {
    border-color: ${ee.hexToRGB("#FFFFFF",.3)};
  }
  svg {
    fill: #ffffff;
    margin: 0;
  }
`,Ba=()=>{const{banners:t,createBanner:n,deleteBanner:a}=(()=>{const e=i.useContext(Aa);if(!e)throw new Error("Missing banner context. Make sure you're wrapping your component in a <BannerProvider />");return e})(),l=t[t.length-1],{showNetworkHealthModal:o}=b.useModals(),{t:r,i18n:s}=v.useTranslation(),c=w.useFetchConnection(),u=null==c?void 0:c.data,d=null==u?void 0:u.cluster,m=Z.useNetworkHealth(s.language).data;i.useEffect((()=>{if(!d)return;const e=t.find((e=>e.type===Sa.Cluster));e&&a({id:e.id}),"mainnet-beta"!==d&&n({type:Sa.Cluster,variant:dn.CTAVariant.Warning,message:r("connectionClusterInterpolated",{cluster:an.capitalizeFirstLetter(d)}),dismissable:!1,autohide:!1})}),[d,r]),i.useEffect((()=>{if(!d)return;const l=t.find((e=>e.type===Sa.NetworkHealth));if("mainnet-beta"===d){if(m){const{bannerVariant:t,bannerMessage:r,notificationMessageTitle:s,notificationMessage:c}=m;!!t&&!!r?r!==(null==l?void 0:l.message)&&n({type:Sa.NetworkHealth,variant:t,message:r,dismissable:!1,icon:e(i).createElement(ae.ExclamationMarkCircleIcon,{width:14,height:14,circleFill:"#FFFFFF",exclamationFill:"transparent"}),autohide:!1,onClick:c&&s?()=>o({variant:t,title:s,message:c}):void 0}):l&&a({id:l.id})}}else l&&a({id:l.id})}),[d,m]);const p=i.useCallback((()=>a({id:l.id})),[l]);return{banner:l,dismissBanner:p}},La=e(i).memo((t=>{const{banner:n,dismissBanner:a}=t;return e(i).createElement(Me.AnimatePresence,null,n&&e(i).createElement(Fa,{key:"banner",role:"banner","aria-live":(null==n?void 0:n.autohide)?"assertive":"polite","aria-atomic":"true",variant:n.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2}},e(i).createElement(Ma,{tabIndex:n.onClick?1:-1,onClick:n.onClick},n.icon&&n.icon,e(i).createElement(Pa,null,n.message)),n.dismissable&&e(i).createElement(Ra,{onClick:a},e(i).createElement(ae.CloseIcon,{width:14,fill:"#FFFFFF"}))))})),Ha=()=>{const t=Ba();return e(i).createElement(La,Object.assign({},t))};i=o("aZikt"),B=o("hHMPk"),Me=o("d3pmY"),r=o("gDkTC"),S=o("cNv5c");var Da,Ia=o("86k8E"),Oa=(i=o("aZikt"),B=o("hHMPk"),Me=o("d3pmY"),/^\s+|\s+$/g),za=/^[-+]0x[0-9a-f]+$/i,Ua=/^0b[01]+$/i,Ka=/^0o[0-7]+$/i,ja=parseInt,Na="object"==typeof n&&n&&n.Object===Object&&n,Wa="object"==typeof self&&self&&self.Object===Object&&self,$a=Na||Wa||Function("return this")(),Va=Object.prototype.toString,Za=Math.max,Ga=Math.min,Ya=function(){return $a.Date.now()};function _a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Qa(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==Va.call(e)}(e))return NaN;if(_a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=_a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Oa,"");var n=Ua.test(e);return n||Ka.test(e)?ja(e.slice(2),n?2:8):za.test(e)?NaN:+e}Da=function(e,t,n){var a,l,o,i,r,s,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=a,o=l;return a=l=void 0,c=t,i=e.apply(o,n)}function g(e){return c=e,r=setTimeout(f,t),u?p(e):i}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=o}function f(){var e=Ya();if(h(e))return y(e);r=setTimeout(f,function(e){var n=t-(e-s);return d?Ga(n,o-(e-c)):n}(e))}function y(e){return r=void 0,m&&a?p(e):(a=l=void 0,i)}function E(){var e=Ya(),n=h(e);if(a=arguments,l=this,s=e,n){if(void 0===r)return g(s);if(d)return r=setTimeout(f,t),p(s)}return void 0===r&&(r=setTimeout(f,t)),i}return t=Qa(t)||0,_a(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Za(Qa(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==r&&clearTimeout(r),c=0,a=s=l=r=void 0},E.flush=function(){return void 0===r?i:y(Ya())},E};const Ja=B.default(Me.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8a81f8;
`,Xa=({refs:t,activeRoute:n,onFinishedAnimating:a,isAnimating:l})=>{const[{x:o,width:r},s]=i.useState({x:0,width:0}),c=i.useCallback((()=>{t&&t[n]&&t[n].current&&s({x:t[n].current.offsetLeft,width:t[n].current.getBoundingClientRect().width})}),[n,t]);return i.useEffect((()=>{c()}),[n,t,c]),i.useEffect((()=>{const t=e(Da)((()=>{c()}),500);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}})),e(i).createElement(Ja,{animate:{x:o,width:r},style:{opacity:l?1:0},onAnimationComplete:a,transition:{duration:.4,type:"spring"}})},qa=B.default.div`
  position: relative;
  height: 60px;
  display: flex;
`,el=B.default(Me.motion.div)`
  flex: 1;
  overflow: auto;
  padding: 15px;
`,tl=B.default(Ia.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,nl=({items:t})=>{const n=r.useLocation(),[a,l]=i.useState(!1),o=t.find((e=>r.matchPath(n.pathname,{path:`/${e.route}`,exact:!0}))),s=t.reduce(((e,t)=>(e[t.route]=i.createRef(),e)),{}),c=o&&o.route;return e(i).createElement(e(i).Fragment,null,e(i).createElement(Me.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(r.Switch,{location:n,key:n.pathname},t.map((n=>e(i).createElement(r.Route,{key:n.route,path:`/${n.route}`,render:({history:a})=>{const l=a.entries;let o=0;if(l.length>1){const e=l[l.length-1].pathname,n=l[l.length-2].pathname;o=al(t,e,n)?10:-10}return e(i).createElement(el,{initial:{x:o,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.15}},e(i).createElement(S.DetailViewsProvider,null,n.renderContent()))}}))),e(i).createElement(r.Route,{key:"redirection",render:()=>e(i).createElement(Me.motion.div,{exit:{opacity:0},transition:{duration:.15}},e(i).createElement(r.Redirect,{to:t[0]?t[0].route:"/"}))}))),e(i).createElement(qa,null,e(i).createElement(Xa,{refs:s,activeRoute:c,onFinishedAnimating:()=>l(!1),isAnimating:a}),e(i).createElement(tl,{role:"tablist","aria-orientation":"horizontal"},t.map((t=>e(i).createElement(il,{isActive:c===t.route,key:t.route,item:t,ref:s[t.route],isAnimating:a,startAnimating:()=>l(!0)}))))))},al=(e,t,n)=>e.findIndex((e=>e.route===ll(t)))>e.findIndex((e=>e.route===ll(n))),ll=e=>"/"===e?e:e.replace(/^\/+/g,""),ol=B.default(r.Link)`
  display: block;
  padding: 15px 0px;
  margin: 0px 12px;
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: white;
    svg {
      fill: white;
    }
  }
  :after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    height: 2px;
    width: 100%;
    ${e=>e.$isActive&&!e.$isAnimating&&"background-color: #8A81F8;"}
    ${e=>e.$isAnimating&&"background-color: transparent;"}
  }
  svg {
    fill: #666;
    transition: fill 200ms ease;
    ${e=>e.$isActive&&"fill: white;"}
  }
`,il=i.forwardRef((({isActive:t,item:n,isAnimating:a,startAnimating:l},o)=>e(i).createElement(ol,{"data-testid":`bottom-tab-nav-button-${n.route}`,$isActive:t,$isAnimating:a,to:n.route,ref:o,onClick:l},n.renderButton())));i=o("aZikt");var rl=o("ldtl8"),sl=(E=o("HyeVU"),i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),rl=o("ldtl8"),T=o("41J1p"),b=o("16KRF"),o("ExhNP")),cl=(ae=o("awYjP"),ne=o("elS0S"),i=o("aZikt"),B=o("hHMPk"),ae=o("awYjP"),se=o("rkI0w"),X=o("kaQO6"),oe=o("45nY7"),o("cGG4P"));const ul=B.default.div`
  display: flex;
  align-items: center;
  input {
    font-size: 34px;
    line-height: 41px;
    font-weight: 400;
    padding: 0;
    background: none;
  }
`,dl=B.default.div`
  width: 100%;
`,ml=({assetButtonTitle:t,decimals:n,disabled:a,hasWarning:l,iconUrl:o,isLoading:r,value:s,onClick:c,onUserInput:u})=>e(i).createElement(ul,{hasWarning:l},r?e(i).createElement(dl,null,e(i).createElement(oe.Spinner,{diameter:28,color:"#8A81F8"})):e(i).createElement(cl.NumericalInput,{name:"amount",border:"0",placeholder:"0",warning:l,value:s,decimalLimit:n,disabled:a,onUserInput:u}),e(i).createElement(gl,{assetButtonTitle:t,iconUrl:o,onClick:c})),pl=B.default.div`
  border-radius: 40px;
  background-color: #181818;
  height: 42px;
  display: flex;
  align-items: center;
  padding: 6px;
  div {
    margin-right: 4px;
  }
  p {
    margin-right: 9px;
  }
  & > svg {
    fill: #ffffff;
    margin-right: 11px;
  }
  ${e=>e.isClickable?B.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,gl=({assetButtonTitle:t,iconUrl:n,onClick:a})=>e(i).createElement(pl,{isClickable:void 0!==a,onClick:a},e(i).createElement(se.TokenImage,{width:30,iconUrl:n,alt:t}),e(i).createElement(X.Text,{weight:600,size:16,color:"white"},t),void 0!==a&&e(i).createElement(ae.DownChevronIcon,{width:9}));X=o("kaQO6");const hl=()=>{const t=(()=>{const{t:e}=v.useTranslation(),t=sl.useSwapperArgs(),n=rl.useSwapSellAssetProps(t),{showSwapSellAssetSelectModal:a}=b.useModals();return Object.assign(Object.assign({},n),{onSellAssetClicked:a,t:e})})();return e(i).createElement(fl,Object.assign({},t))},fl=e(i).memo((({assetButtonTitle:t,decimals:n,formattedMaxSellAmount:a,iconUrl:l,notEnoughAssets:o,uiSellAmount:r,onSellAssetClicked:s,setMaxSellAmount:c,updateSellAmount:u,t:d})=>e(i).createElement(bl,null,e(i).createElement(xl,null,e(i).createElement(vl,null,d("swapFlowYouPay")),e(i).createElement(Al,{onClick:c},e(i).createElement(kl,null,d("swapperMax")," ",a))),e(i).createElement(ml,{assetButtonTitle:t,decimals:n,disabled:!1,hasWarning:o,iconUrl:l,isLoading:!1,onClick:s,onUserInput:u,value:r})))),yl=e(i).memo((({assetButtonTitle:t,buyAmount:n,decimals:a,iconUrl:l,isFetchingQuote:o,onBuyAssetClicked:r,onSwitchTokens:s,t:c})=>e(i).createElement(e(i).Fragment,null,e(i).createElement(wl,null,e(i).createElement(Tl,null),e(i).createElement(Sl,{onClick:s},e(i).createElement(ae.VerticalDoubleArrowsIcon,{fill:"#FFFFFF",width:20}))),e(i).createElement(bl,null,e(i).createElement(xl,null,e(i).createElement(vl,null,c("swapFlowYouReceive"))),e(i).createElement(ml,{assetButtonTitle:t,decimals:a,disabled:!0,hasWarning:!1,iconUrl:l,isLoading:o,onClick:r,onUserInput:()=>{},value:n}))))),El=()=>{const t=(()=>{const{t:e}=v.useTranslation(),{showSwapBuyAssetSelectModal:t}=b.useModals(),n=i.useCallback((()=>{t()}),[]),a=rl.useSwapBuyAssetProps(T.analytics),l=sl.useSwapperArgs();return rl.useInitialAssets(l),Object.assign(Object.assign({},a),{onBuyAssetClicked:n,t:e})})();return e(i).createElement(yl,Object.assign({},t))},bl=B.default.div`
  margin-bottom: 5px;
`,xl=B.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 14px;
`,vl=B.default(X.Text).attrs({size:16,color:"#777",weight:500,lineHeight:19,textAlign:"left"})``,kl=B.default(X.Text).attrs({size:14,color:"#777",lineHeight:17,hoverColor:"#8A81F8",weight:500,textAlign:"left"})``,wl=B.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,Sl=B.default(ne.Circle).attrs({color:"#333333",diameter:40})`
  z-index: 0;
  cursor: pointer;
  &:hover:enabled {
    background: #444444;
  }
`,Tl=B.default.div`
  position: absolute;
  height: 1px;
  width: calc(100% + 2 * 16px); // TODO: create a constant for screen (tab) padding
  top: 20px;
  left: -16px; // TODO: use tab /screen padding
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Al=B.default.div`
  cursor: pointer;
`;var Cl=o("2tMrv");i=o("aZikt"),v=o("ltHDB"),k=o("2zUeX"),sl=o("ExhNP"),ie=o("7KDpr");const Ml=["Fungible"],Fl=({errorBody:t,errorTitle:n,status:a})=>"loading"===a?e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!0}):"failure"===a?e(i).createElement(kt,{title:n,description:t}):null;i=o("aZikt"),v=o("ltHDB"),rl=o("ldtl8"),b=o("16KRF"),ce=o("8xzWM");const Pl=()=>{const{showSwapReviewModal:t}=b.useModals(),{disabled:n,theme:a,title:l}=Rl();return e(i).createElement(ce.Button,{type:"submit",theme:a,disabled:n,onClick:t},l)},Rl=()=>{const{t:e}=v.useTranslation(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:a}=rl.useSwapReviewButtonProps();return a?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText")}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound")}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText")}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance")}};i=o("aZikt"),B=o("hHMPk"),i=o("aZikt"),v=o("ltHDB"),B=o("hHMPk"),ee=o("99Anx"),rl=o("ldtl8"),X=o("kaQO6");const Bl=B.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${ee.hexToRGB("#222222",.75)};
`,Ll=B.default.div`
  background-color: ${ee.hexToRGB("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,Hl=B.default(X.Text).attrs({size:16,lineHeight:19,weight:500,color:"#fff",textAlign:"center"})``,Dl=()=>{const{t:t}=v.useTranslation();return rl.useResetSwapperOnMount(),e(i).createElement(Bl,null,e(i).createElement(Ll,null,e(i).createElement(Hl,null,t("swapAvailableOnMainnet"))))};w=o("bBAGA");const Il=B.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,Ol=({children:t})=>{const{data:n}=w.useFetchConnection();return"mainnet-beta"!==(null==n?void 0:n.cluster)?e(i).createElement(e(i).Fragment,null,e(i).createElement(Dl,null),e(i).createElement(Il,null,t)):e(i).createElement(e(i).Fragment,null,t)},zl=()=>{const t=(()=>{const{t:e}=v.useTranslation(),{owner:t,cluster:n,hiddenMints:a}=sl.useSwapperArgs(),{error:l,isFetching:o}=k.useSPLAssets({publicKey:t,standards:Ml,cluster:n,hiddenMints:a}),r=o,s=!!l;return i.useMemo((()=>({status:r?"loading":s?"failure":"success",errorTitle:e("errorAndOfflineSomethingWentWrong"),errorBody:e("errorAndOfflineUnableToFetchSwap")})),[s,r,e])})();return"success"!==t.status?e(i).createElement(Fl,Object.assign({},t)):e(i).createElement(Ul,null)},Ul=()=>{const t=Kl();return rl.useSubscribeSwapQuoteToQueries(t),e(i).createElement(Ol,null,e(i).createElement(hl,null),e(i).createElement(El,null),e(i).createElement(Cl.SwapCard,null),e(i).createElement(Pl,null))},Kl=()=>{const{accountClient:e}=E.useSelectedSolanaAccount();return e.publicKey.toString()};var jl=o("kQXty"),Nl=(i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),o("iusJS")),Wl=(b=o("16KRF"),ie=o("7KDpr"),i=o("aZikt"),B=o("hHMPk"),v=o("ltHDB"),L=o("6oEu9"),D=o("cFuyE"),b=o("16KRF"),ae=o("awYjP"),ce=o("8xzWM"),se=o("rkI0w"),X=o("kaQO6"),oe=o("45nY7"),bt=o("6pkBl"),cl=o("cGG4P"),o("RdEZE"));const $l=B.default.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,Vl=B.default.div`
  margin-top: 11px;
  margin-bottom: 19px;
`,Zl=B.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`,Gl=B.default(bt.IconWrapper)`
  margin-right: 32px;
  margin-bottom: 5px;
`,Yl=B.default.div`
  label {
    color: #777;
    font-weight: 400;
  }
  cursor: pointer;
`;var _l;!function(e){e.Down="down",e.Double="double"}(_l||(_l={}));const Ql=({onCancelClick:t,onArrowClick:n,buttonTheme:a,fromAsset:l,totalFees:o,toAsset:r,fromAssetsList:s,toAssetsList:c,initialFromAssetAmount:u,price:d,slippage:m,feeDisclaimer:p,priceImpact:g,errorMessage:h,onConvertClick:f=L.NOOP,onFromAssetSelect:y=L.NOOP,onToAssetSelect:E=L.NOOP,onFromAssetAmountChange:x=L.NOOP,onSlippageUpdate:k=L.NOOP,arrowStyle:w=_l.Down,isBottomInputDisabled:S=!1,topInputLabel:T="From",bottomInputLabel:A="To",convertButtonLabel:C="Convert",feeBreakdown:M=[]})=>{const{t:F}=v.useTranslation(),{showAssetSelectionModal:P,hideAssetSelectionModal:R}=b.useModals(),{symbol:B,balance:H}=l,I=l.decimals,O=r.decimals,[z,U]=i.useState(null==u?void 0:u.toString()),K=parseFloat(null!=z?z:"0"),[j,N]=i.useState(z&&d?(K*d).toString():void 0);i.useEffect((()=>{x(z?parseFloat(z):void 0)}),[z]);const W=e=>{var t;if(!e)return U(void 0),void N(void 0);const n=d&&!isNaN(parseFloat(e))?parseFloat(e)*d:void 0;U(e),N(null===(t=null==n?void 0:n.toFixed(O))||void 0===t?void 0:t.toString())};i.useEffect((()=>{W(z)}),[d]);const $=e=>{R(),y(e)},V=e=>{R(),E(e)},Z=n?()=>{U(j||void 0),N(void 0),n()}:void 0,G=null!=H?H:0,Y=l.isNativeOfType&&G>L.ESTIMATED_SOL_TRADE_FEE?G-L.ESTIMATED_SOL_TRADE_FEE:G,_=K>G,Q=_||!z||!j;return e(i).createElement($l,{onSubmit:e=>{e.preventDefault(),z&&f(K)}},e(i).createElement("div",null,e(i).createElement(Vl,null,e(i).createElement(Zl,null,e(i).createElement(X.Text,{size:16,color:"#777",weight:500,textAlign:"left"},T),e(i).createElement(Yl,{onClick:()=>W(Y.toString())},e(i).createElement(X.Text,{size:14,color:"#777",hoverColor:"#8A81F8",weight:500,textAlign:"left"},e(i).createElement("label",null,F("swapperMax"))," ",D.formatTokenAmount(Y)," ",B))),e(i).createElement(ql,{size:16,selectedAsset:l,hasWarning:_,onClick:s?()=>{P({assets:null!=s?s:[],onSelect:$})}:void 0,onUserInput:W,assetValue:z})),e(i).createElement(Vl,null,e(i).createElement(Zl,null,e(i).createElement(X.Text,{size:16,color:"#777",weight:500,textAlign:"left"},A),e(i).createElement(Gl,{onClick:Z},w===_l.Double?e(i).createElement(ae.VerticalDoubleArrowsIcon,null):e(i).createElement(ae.DownArrowIcon,null))),e(i).createElement(ql,{disabled:S,selectedAsset:r,isLoading:void 0!==z&&void 0===j&&void 0===h,onClick:c?()=>{P({assets:null!=c?c:[],onSelect:V})}:void 0,onUserInput:e=>{var t;if(!e)return N(void 0),void U(void 0);const n=d?parseFloat(e)/d:void 0;N(parseFloat(e).toFixed(O).toString()),U(null===(t=null==n?void 0:n.toFixed(I))||void 0===t?void 0:t.toString())},assetValue:j,errorMessage:h}))),e(i).createElement("div",null,e(i).createElement(Wl.SwapFees,{price:d,fromAssetSymbol:l.symbol,toAssetSymbol:r.symbol,totalFees:o,feeBreakdown:M,feeDisclaimer:p,slippage:m,onSlippageUpdate:k,priceImpact:g}),t?e(i).createElement(ce.ButtonPair,{primaryText:C,secondaryText:"Cancel",primaryDisabled:Q,primaryTheme:a,onSecondaryClicked:t}):e(i).createElement(ce.Button,{type:"submit",theme:Q?"default":a,disabled:Q,onClick:t},C)))},Jl=B.default.div`
  box-sizing: border-box;
  background: #181818;
  border: ${e=>e.hasWarning?"1px solid #EB3742":"1px solid #2F2F2F"};
  border-radius: 6px;
  width: 100%;
  position: relative;
  display: flex;
`,Xl=B.default.div`
  position: absolute;
  top: 12px;
  left: 12px;
`,ql=({selectedAsset:t,assetValue:n,isLoading:a=!1,hasWarning:l,errorMessage:o,disabled:r,onClick:s,onUserInput:c})=>{let u=a?void 0:"0";return o&&(u=o),e(i).createElement(Jl,{hasWarning:l},a&&e(i).createElement(Xl,null,e(i).createElement(oe.Spinner,{diameter:25,color:"#8A81F8"})),e(i).createElement(cl.NumericalInput,{name:"amount",placeholder:u,warning:l,value:null!=n?n:"",decimalLimit:null==t?void 0:t.decimals,disabled:r,onUserInput:c,border:"1px"}),e(i).createElement(no,{selectedAsset:t,onClick:s}))},eo=B.default.div`
  border-radius: 40px 10px 10px 40px;
  background-color: #2a2a2a;
  display: flex;
  margin: 6px;
  align-items: center;
  > * {
    margin-right: 6px;
  }
  svg {
    margin-right: 10px;
    fill: #777777;
  }
  ${e=>e.isClickable?B.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,to=B.default(se.TokenImage)`
  margin: 0px 6px 0px 5px;
`,no=({selectedAsset:t,onClick:n})=>e(i).createElement(eo,{isClickable:void 0!==n,onClick:n},e(i).createElement(to,{width:30,iconUrl:t.iconUrl,alt:t.symbol}),e(i).createElement(X.Text,{weight:600,size:16,color:"white"},t.symbol),void 0!==n&&e(i).createElement(ae.DownChevronIcon,{width:9})),ao=B.default.div`
  height: 100%;
  padding-bottom: 12px;
`,lo=()=>{const{isLoadingAssets:t,fromAsset:n,toAsset:a,fromAssetsList:l,toAssetsList:o,fromAmount:r,price:s,slippage:c,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,setFromAsset:g,setToAsset:h,setFromAmount:f,setSlippage:y,setIsRefreshing:E,error:x}=Nl.useSwapQuote(),{t:k}=v.useTranslation(),{showSwapReviewModal:w}=b.useModals(),S=i.useMemo((()=>e(Da)(f,500)),[f]);i.useEffect((()=>(E(!0),()=>{E(!1)})),[]);return i.useEffect((()=>()=>{f(void 0)}),[]),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:t},e(i).createElement(ao,null,e(i).createElement(Ql,{initialFromAssetAmount:r,price:s,slippage:c,fromAsset:n,toAsset:a,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,onFromAssetSelect:g,onToAssetSelect:h,onFromAssetAmountChange:e=>{e?S(e):(S.cancel(),f(e))},onConvertClick:e=>{f(e),w()},onArrowClick:()=>{g(a),h(n)},onSlippageUpdate:y,fromAssetsList:l,toAssetsList:o,topInputLabel:k("swapFlowYouPay"),bottomInputLabel:k("swapFlowYouReceive"),convertButtonLabel:k("swapFlowActionButtonText"),buttonTheme:"primary",isBottomInputDisabled:!0,arrowStyle:_l.Double,errorMessage:null==x?void 0:x.message})))};var oo=o("iZDso");const io=()=>{const{value:t}=y.useAsync((()=>jl.shouldRenderWhatsNewOverlay())),[n,a]=i.useState(!1);return i.useEffect((()=>{t&&a(!0)}),[t]),oo.useRootGroupEffect(),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(Gt.AccountHeader,null),e(i).createElement(jl.WhatsNewOverlay,{onClose:()=>{jl.acknowledgeWhatsNewOverlay(),a(!1)}})):e(i).createElement(e(i).Fragment,null,e(i).createElement(Gt.AccountHeader,null),e(i).createElement(Ha,null),e(i).createElement(ro,{shouldRenderWhatsNew:t}),e(i).createElement("div",{id:g.MODAL_ID}))},ro=({shouldRenderWhatsNew:t})=>{const{accountClient:n}=E.useSelectedSolanaAccount(),[a,l,o]=x.useFeatureFlags(["kill-swapper","enable-swapper-2-browser-ext","kill-collectibles"]),s=r.useHistory(),{closeAllModals:u}=b.useModals();i.useEffect((()=>{t||(u(),s.push(c.Path.Wallet))}),[n.publicKey.toString(),t]);const d=[{route:c.Path.Wallet,renderButton:()=>e(i).createElement(ae.WalletIcon,null),renderContent:()=>e(i).createElement(Vt,null)},o?null:{route:c.Path.Collectibles,renderButton:()=>e(i).createElement(ae.CollectiblesIcon,{width:22}),renderContent:()=>e(i).createElement(Un,null)},a?null:{route:c.Path.Swap,renderButton:()=>e(i).createElement(ae.DoubleArrowsIcon,{width:24,height:24}),renderContent:()=>l?e(i).createElement(zl,null):e(i).createElement(lo,null)},{route:c.Path.Notifications,renderButton:()=>e(i).createElement(ae.NotificationsIcon,null),renderContent:()=>e(i).createElement(_t,null)},{route:c.Path.Settings,renderButton:()=>e(i).createElement(ae.SettingsIcon,null),renderContent:()=>e(i).createElement(Kn.Settings,null)}].filter((e=>null!==e));return e(i).createElement(nl,{items:d})};var so=o("kHEYY");i=o("aZikt"),x=o("j1GR2"),w=o("bBAGA");const co=({children:t})=>{const[n]=x.useFeatureFlags(["kill-rich-transactions-extension"]),{data:a}=w.useFetchConnection(),l="mainnet-beta"===(null==a?void 0:a.cluster),o=!n&&l?I.RichTransactionHistoryProvider:V.TransactionHistoryProvider;return e(i).createElement(o,null,t)};E=o("HyeVU");var uo=o("eg8ck"),mo=(b=o("16KRF"),J=o("eW1cp"),o("fGPQl")),po=(Pe=o("j89eZ"),o("2R5r6")),go=(K=o("9R0of"),U=o("jhy6c"),o("3jzCT"));oo=o("iZDso");d.initSentry();const ho=()=>{i.useEffect((()=>{u.setStorageValue(c.StorageKeys.PopupHasBeenSeen,!0)}),[]);const t=i.useCallback((t=>e(i).createElement(b.ModalsProvider,null,e(i).createElement(po.WalletMenuProvider,null,e(i).createElement(so.Unlock,{onUnlock:t})))),[]),n=i.useCallback((()=>{p.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return oo.useCaptureOpen("popupOpen"),e(i).createElement(e(i).Fragment,null,e(i).createElement(m.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(i).createElement(h.PopupAndNotificationErrorBoundary,null,e(i).createElement(f.Main,{withBorder:!0},e(i).createElement(r.MemoryRouter,null,e(i).createElement(Ca,null,e(i).createElement(U.QueryProvider,null,e(i).createElement(uo.BrowserProvider,null,e(i).createElement(go.ExtensionLockWrapper,{renderLocked:t,openOnboarding:n},e(i).createElement(K.TransactionsProvider,null,e(i).createElement(mo.HardwareWalletProvider,null,e(i).createElement(E.SolanaAccountsProvider,null,e(i).createElement(Pe.AddressBookProvider,null,e(i).createElement(J.BlockchainProvider,null,e(i).createElement(co,null,e(i).createElement(b.ModalsProvider,null,e(i).createElement(po.WalletMenuProvider,null,e(i).createElement(io,null))))))))))))),e(i).createElement("div",{id:g.MODAL_ID})))))};s.render(e(i).createElement(ho,null),document.getElementById("root"));define=__define;})(window.define);