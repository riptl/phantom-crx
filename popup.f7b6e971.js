(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},l={},o=n.parcelRequirea886;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in l){var t=l[e];delete l[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},n.parcelRequirea886=o);var i=o("aZikt"),r=o("gDkTC"),s=o("ihAua");o("6CHoY");var c=o("lwple"),u=o("czDD7"),d=o("ci2Mj"),m=o("5cKs6"),p=o("iyOkC"),g=o("4yWCU"),h=o("i2Zy4"),f=o("6mzlH"),E=(i=o("aZikt"),r=o("gDkTC"),o("lxqKj")),y=(c=o("lwple"),g=o("4yWCU"),o("82Ilk")),b=o("g9lcT"),x=o("fRhfQ"),v=(i=o("aZikt"),o("7Qmuu")),k=(c=o("lwple"),o("2zUeX")),w=o("fMhDQ"),T=(y=o("82Ilk"),b=o("g9lcT"),o("6rMcH")),S=o("8C6BZ"),C=o("cE7Ma"),A=o("delKv"),M=o("k95B3"),F=o("dczY0"),P={};t(P,"AssetDetail",(function(){return st}),(function(e){return st=e}));i=o("aZikt"),r=o("gDkTC");var B=o("h6IZU"),R=o("hHMPk"),L=(v=o("7Qmuu"),o("6oEu9")),D=(c=o("lwple"),o("7Lj33")),I=(k=o("2zUeX"),o("cFuyE")),H=(S=o("8C6BZ"),w=o("fMhDQ"),b=o("g9lcT"),{});t(H,"RichTransactionHistoryProvider",(function(){return j}),(function(e){return j=e})),t(H,"useRichTransactionHistory",(function(){return W}),(function(e){return W=e}));i=o("aZikt");var z=o("ehJ6P"),O=o("dlVlr"),U=(L=o("6oEu9"),y=o("82Ilk"),o("h5G75")),K=o("9ZliH"),$=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const N=i.createContext({transactionHistory:{},refreshTransactionHistory:L.NOOP}),j=({children:t})=>{const[n,a]=i.useState({}),{accountClient:l}=y.useSelectedSolanaAccount(),[o,r]=i.useState(l.publicKey),[s]=e(i).useState(L.TX_HISTORY_REFRESH_INTERVAL_MS),c=o&&o!==l.publicKey?l.publicKey:void 0,{data:u,error:d}=U.useQuery({enabled:!0,queryKey:["rich-transaction-history-api",o,c],refetchInterval:s,queryFn:()=>$(void 0,void 0,void 0,(function*(){const{results:e}=yield O.getRichTransactionHistory({publicKey:o.toString(),observer:null==c?void 0:c.toString()});return e}))});return i.useEffect((()=>{const e=z.default(n,(e=>{e[o.toString()]=d?[]:u}));a(e)}),[u,d]),i.useEffect((()=>{r(l.publicKey)}),[l.publicKey.toString()]),e(i).createElement(N.Provider,{value:{transactionHistory:n,refreshTransactionHistory:e=>r(e)}},t)},W=e=>{var t;const n=i.useContext(N);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=y.useSelectedSolanaAccount(),l=K.usePendingTransactions(a.publicKey),o=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return{confirmed:o,pending:[]};const t=[],n=o.map((e=>e.signature));for(const e of l)n.includes(e.signature)||t.push(e);return{pending:t,confirmed:o}}),[o,a,l]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};var Q={};t(Q,"TransactionHistoryProvider",(function(){return G}),(function(e){return G=e})),t(Q,"useTransactionHistory",(function(){return X}),(function(e){return X=e}));z=o("ehJ6P"),i=o("aZikt"),L=o("6oEu9"),K=o("9ZliH");var Z=o("4o0lv"),V=(y=o("82Ilk"),function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))});const _=i.createContext({transactionHistory:{},refreshTransactionHistory:L.NOOP}),G=({children:t})=>{const[n]=Z.useIncrementingNonce(L.TX_HISTORY_REFRESH_INTERVAL_MS),[a,l]=i.useState({}),{accountClient:o}=y.useSelectedSolanaAccount(),[r,s]=i.useState(o.publicKey),c=e=>V(void 0,void 0,void 0,(function*(){a[e.toString()]?(e=>{V(void 0,void 0,void 0,(function*(){var t;const n=null!==(t=a[e.toString()])&&void 0!==t?t:[];let i;if(n.length>0){const{signature:e}=n[0];i=e}const r=yield o.getTransactionHistoryAsync(e,{until:i,limit:L.TX_HISTORY_PAGINATION_COUNT}),s=z.default(a,(t=>{t[e.toString()]=[...r,...t[e.toString()]]}));l(s)}))})(e):(e=>{V(void 0,void 0,void 0,(function*(){const t=yield o.getTransactionHistoryAsync(e,{limit:L.TX_HISTORY_PAGINATION_COUNT}),n=z.default(a,(n=>{n[e.toString()]=t}));l(n)}))})(e),s(e)}));return i.useEffect((()=>{0!==n&&c(r)}),[n]),i.useEffect((()=>{s(o.publicKey),c(o.publicKey)}),[o.publicKey.toString()]),e(i).createElement(_.Provider,{value:{transactionHistory:a,refreshTransactionHistory:c}},t)},X=e=>{var t;const n=i.useContext(_);if(!n)throw new Error("Missing transaction history context");const{accountClient:a}=y.useSelectedSolanaAccount(),l=K.usePendingTransactions(a.publicKey),o=null!==(t=n.transactionHistory[e.toString()])&&void 0!==t?t:[];return{transactionInfos:i.useMemo((()=>{if(e.toString()!==a.publicKey.toString())return o;const t=[],n=o.map((e=>e.signature));for(const e of l)n.includes(e.signature)||t.push(e);return[...t,...o]}),[o,a,l]),isLoadingInitial:void 0===n.transactionHistory[e.toString()],refreshTransactionHistory:n.refreshTransactionHistory}};y=o("82Ilk");var Y=o("j2x34"),q=(x=o("fRhfQ"),C=o("cE7Ma"),A=o("delKv"),o("g7X40")),J=o("3rE52"),ee=(i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),o("99Anx")),te=(T=o("6rMcH"),b=o("g9lcT"),o("u1MBs")),ne=o("8FNEt"),ae=o("hJDxl"),le=o("2MtnF"),oe=o("lPkGw"),ie=(i=o("aZikt"),v=o("7Qmuu"),b=o("g9lcT"),te=o("u1MBs"),J=o("3rE52"),ae=o("hJDxl"),o("eopQk")),re=(i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),I=o("cFuyE"),c=o("lwple"),b=o("g9lcT"),te=o("u1MBs"),q=o("g7X40"),o("76Idz")),se=o("gkUV0"),ce=o("aADTv");le=o("2MtnF"),ie=o("eopQk"),S=o("8C6BZ");const ue=()=>{var t;i.useEffect((()=>(S.analytics.capture("showStakeAccountList"),()=>S.analytics.capture("hideStakeAccountList"))),[]);const n=te.useFetchStakeAccounts({refetchOnMount:"always"}),a=null!==(t=n.data)&&void 0!==t?t:[];return e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!n.isFetched},n.isError?e(i).createElement(de,{message:n.error.message,onRefetch:()=>{n.isFetching||n.refetch()}}):e(i).createElement(me,{data:a}),e(i).createElement("br",null))},de=t=>{const{t:n}=v.useTranslation();return e(i).createElement(e(i).Fragment,null,e(i).createElement(q.Text,{size:16,color:"red"},n("stakeAccountListErrorFetching"),": ",t.message),e(i).createElement(ce.Button,{onClick:t.onRefetch},n("stakeAccountListReload")))},me=t=>{const{t:n}=v.useTranslation(),a=ve(),l=t.data.slice().sort(((e,t)=>e.lamports>t.lamports?-1:1)),o=l.filter((e=>e.type===c.StakeAccountType.Delegated)),r=l.filter((e=>e.type===c.StakeAccountType.Initialized));return o.length||r.length?e(i).createElement(e(i).Fragment,null,o.length>0&&e(i).createElement(e(i).Fragment,null,o.map((t=>{var n,l;const{stake:o,voter:r}=t.info.stake.delegation,s=a.get(r),c=null===(n=null==s?void 0:s.info)||void 0===n?void 0:n.name,u=null===(l=null==s?void 0:s.info)||void 0===l?void 0:l.keybaseUsername;return e(i).createElement(be,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,delegatedStake:Number(o),inflationReward:t.inflationReward,voteAccountPubkey:r,name:c,keybaseUsername:u})}))),r.length>0&&e(i).createElement(e(i).Fragment,null,r.map((t=>e(i).createElement(xe,{key:t.pubkey,pubkey:t.pubkey,balance:t.lamports,inflationReward:t.inflationReward}))))):e(i).createElement(pe,null,e(i).createElement(q.Text,{size:16,color:"#666666"},n("stakeAccountListNoStakingAccounts")))},pe=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 42px);
`,ge=R.default(re.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,he=R.default(se.TokenImage).attrs({width:44})``,fe=R.default.div`
  overflow: hidden;
`,Ee=R.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,ye=R.default(q.Text)`
  color: ${e=>"active"===e.activationState?"#21E56F":"inactive"===e.activationState?"#EB3742":"activating"===e.activationState||"deactivating"===e.activationState?"#FFE920":"#777777"};
`,be=t=>{var n,a;const{t:l}=v.useTranslation(),{showStakeAccountModal:o}=b.useModals(),{data:r}=te.useFetchKeybaseUserAvatar(t.keybaseUsername),s=null!==(a=null!==(n=t.name)&&void 0!==n?n:t.keybaseUsername)&&void 0!==a?a:I.formatHashMedium(t.voteAccountPubkey),c=te.useFetchStakeActivationData(t.pubkey).data,u=t.inflationReward&&t.inflationReward>0;return e(i).createElement(ge,{onClick:()=>{o({stakeAccountPubkey:t.pubkey})}},e(i).createElement(he,{iconUrl:r}),e(i).createElement(fe,null,e(i).createElement(Ee,null,e(i).createElement(q.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},s),e(i).createElement(q.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.delegatedStake))),e(i).createElement(Ee,null,e(i).createElement(ye,{size:14,activationState:null==c?void 0:c.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==c?void 0:c.state)?l("stakeAccountListActivationActivating"):"","active"===(null==c?void 0:c.state)?l("stakeAccountListActivationActive"):"","inactive"===(null==c?void 0:c.state)?l("stakeAccountListActivationInactive"):"","deactivating"===(null==c?void 0:c.state)?l("stakeAccountListActivationDeactivating"):""),e(i).createElement(q.Text,{size:14,color:""+(u?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},u?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,t.inflationReward)):"-"))))},xe=t=>{const{t:n}=v.useTranslation(),{showStakeAccountModal:a}=b.useModals(),l=te.useFetchStakeActivationData(t.pubkey).data,o=t.inflationReward&&t.inflationReward>0;return e(i).createElement(ge,{onClick:()=>a({stakeAccountPubkey:t.pubkey})},e(i).createElement(he,null),e(i).createElement(fe,null,e(i).createElement(Ee,null,e(i).createElement(q.Text,{size:16,weight:600,lineHeight:19,textAlign:"left",noWrap:!0},t.pubkey),e(i).createElement(q.Text,{size:14,weight:400,lineHeight:19,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,t.balance))),e(i).createElement(Ee,null,e(i).createElement(ye,{size:14,activationState:null==l?void 0:l.state,lineHeight:19,textAlign:"left",textTransform:"capitalize",noWrap:!0},"activating"===(null==l?void 0:l.state)?n("stakeAccountListActivationActivating"):"","active"===(null==l?void 0:l.state)?n("stakeAccountListActivationActive"):"","inactive"===(null==l?void 0:l.state)?n("stakeAccountListActivationInactive"):"","deactivating"===(null==l?void 0:l.state)?n("stakeAccountListActivationDeactivating"):""),e(i).createElement(q.Text,{size:14,color:""+(o?"#21E56F":"#777777"),lineHeight:19,textAlign:"right",noWrap:!0},o&&"+",e(i).createElement(le.SolBalance,null,t.inflationReward)))))},ve=()=>{var e;const t=te.useFetchValidators(),n=null!==(e=t.data)&&void 0!==e?e:[],a=i.useRef(n);a.current=n;return i.useMemo((()=>new Map(a.current.map((e=>[e.voteAccountPubkey,e])))),[t.dataUpdatedAt,a])},ke=()=>{const{t:t}=v.useTranslation(),{showValidatorListModal:n,hideValidatorListModal:a}=b.useModals(),l=!te.useFetchStakeAccounts().isFetched;return e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,{items:[{label:t("stakeAccountListViewStakeSOL"),onClick:()=>{n({onClose:a})}}],icon:e(i).createElement(ae.PlusIcon,null)},t("stakeAccountListViewPrimaryText")),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:l},e(i).createElement(ue,null)))};re=o("76Idz"),q=o("g7X40");const we=R.default(re.TokenRowBody)`
  display: grid;
  grid-template-columns: 44px auto;
  column-gap: 10px;
`,Te=R.default.div`
  overflow: hidden;
`,Se=R.default.div`
  display: grid;
  grid-template-columns: 1fr;
`,Ce=R.default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,Ae=()=>{var t;const{t:n}=v.useTranslation(),{pushDetailView:a}=T.useDetailViews(),{showValidatorListModal:l,hideValidatorListModal:o}=b.useModals(),r=te.useFetchStakeAccounts(),{isFetching:s,isError:c}=r,u=null!==(t=r.data)&&void 0!==t?t:[],d=u.reduce(((e,t)=>e+t.lamports),0),m=u.reduce(((e,t)=>{var n;return e+(null!==(n=t.inflationReward)&&void 0!==n?n:0)}),0),p=u.length;return e(i).createElement(we,{isDisabled:s,onClick:()=>{c?r.refetch():s||(p>0?a(e(i).createElement(ke,null),{shouldShowBackButton:!0}):l({onClose:o}))}},s?e(i).createElement(ne.Circle,{diameter:44,color:ee.hexToRGB("#8A81F8",.2)},e(i).createElement(oe.Spinner,{diameter:28})):c?e(i).createElement(ne.Circle,{diameter:44,color:ee.hexToRGB("#EB3742",.1)},e(i).createElement(ae.FailureIcon,null)):e(i).createElement(ne.Circle,{diameter:44,color:"#3F3D29"},e(i).createElement(ae.StarIcon,null)),e(i).createElement(Te,null,s?e(i).createElement(Se,null,e(i).createElement(q.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolLoading")),e(i).createElement(q.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolSearching"))):c?e(i).createElement(Se,null,e(i).createElement(q.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolErrorTroubleLoading")),e(i).createElement(q.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolErrorClosePhantom"))):p?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ce,null,e(i).createElement(q.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolYourStake")),e(i).createElement(q.Text,{size:14,weight:400,lineHeight:17,textAlign:"right",noWrap:!0},e(i).createElement(le.SolBalance,null,d))),e(i).createElement(Ce,null,e(i).createElement(q.Text,{color:"#777777",size:14,lineHeight:19,textAlign:"left",noWrap:!0},p," ",1===p?"account":"accounts"),e(i).createElement(q.Text,{size:14,color:""+(m>0?"#21E56F":"#777777"),lineHeight:17,textAlign:"right",noWrap:!0},m>0?e(i).createElement(e(i).Fragment,null,"+",e(i).createElement(le.SolBalance,null,m)):"–"))):e(i).createElement(Se,null,e(i).createElement(q.Text,{size:16,weight:600,lineHeight:19,textAlign:"left"},n("startEarningSolPrimaryText")),e(i).createElement(q.Text,{color:"#777777",size:14,lineHeight:17,textAlign:"left",noWrap:!0},n("startEarningSolStakeTokens")))))};i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu");var Me=o("d3pmY"),Fe=(ee=o("99Anx"),I=o("cFuyE"),o("HEK4k")),Pe=(D=o("7Lj33"),Y=o("j2x34"),y=o("82Ilk"),o("aZo5h")),Be=o("lzptm"),Re=(w=o("fMhDQ"),ae=o("hJDxl"),ne=o("8FNEt"),ie=o("eopQk"),q=o("g7X40"),oe=o("lPkGw"),o("9BE2q"));const Le=R.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,De=R.default(q.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin: 25px 0;
`,Ie=R.default(ie.LoadingContent)`
  flex: 1;
`,He=({className:t,publicKey:n})=>{var a;const{t:l}=v.useTranslation(),{transactionInfos:o,isLoadingInitial:r}=Q.useTransactionHistory(n),s=null===(a=w.useFetchConnection())||void 0===a?void 0:a.data,c=null==s?void 0:s.cluster;return e(i).createElement(Ie,{isLoading:r},e(i).createElement(Le,{className:t},0!==o.length?o.map((t=>e(i).createElement(Ne,{key:t.signature,cluster:c,transactionInfo:t}))):e(i).createElement(De,null,l("transactionsNoActivity"))))},ze=R.default.div`
  display: flex;
  justify-content: space-between;
`,Oe=R.default.div`
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
`,Ue=R.default(Me.motion.div)`
  display: flex;
  align-items: center;
`,Ke=R.default.div`
  width: 100%;
  margin-left: 10px;
  > * {
    margin-top: 2px;
  }
`,$e=R.default.div`
  padding-top: 3px;
  padding-left: 3px;
`,Ne=({cluster:t,transactionInfo:n})=>{var a,l,o,r,s;const{t:c}=v.useTranslation(),{latestBlockTimestamp:u}=Y.useBlockchainState(),{accountClient:d}=y.useSelectedSolanaAccount(),{getExistingAccountMeta:m}=y.useSolanaAccounts(),{getSavedAddressLabel:p}=Pe.useAddressBook(),{preferredExplorer:g}=Re.usePreferredExplorer(),h=Be.useFetchAssetsWithAccount().data,f=i.useMemo(Date.now,[]),E=f-(null!=u?u:f),b=n.blockTime?Math.min(f,1e3*n.blockTime+E):void 0,{err:x,isLoading:k,isOptimistic:w,transaction:T,signature:S}=n;let C=ee.hexToRGB("#3CC852",.1),A=e(i).createElement(ae.CheckmarkIcon,{fill:"#27D843"}),M=I.formatHashMedium(S),F=c("transactionsSuccess");if(k||w)C=ee.hexToRGB("#8A81F8",.2),M=c("transactionsSending"),F=c("transactionsWaitingForConfirmation"),A=e(i).createElement(oe.Spinner,{diameter:28});else if(x)C=ee.hexToRGB("#E72C2C",.1),A=e(i).createElement(ae.FailureIcon,null),F=c("transactionsError");else if(T){const t=Fe.classifyParsedTransaction(T,d.publicKey,h);if(t===Fe.ParsedTransactionType.ReceivedSol){const t=Fe.getSolTransferInstructions(T)[0],n=t.parsed.info.source,a=I.lamportsToSolana(t.parsed.info.lamports);M=c("transactionsReceivedInterpolated",{amount:I.formatTokenAmount(a)}),C=ee.hexToRGB("#4E44CE",.2),A=e(i).createElement(ae.ReceiveIcon,{fill:"#968DFF"}),F=`${c("transactionsFrom")}: ${I.formatAddress(n,m(n),p(n))}`}else if(t===Fe.ParsedTransactionType.SentSol){const t=Fe.getSolTransferInstructions(T)[0],n=t.parsed.info.destination,a=I.lamportsToSolana(t.parsed.info.lamports);M=c("transactionsSentInterpolated",{amount:I.formatTokenAmount(a)}),C=ee.hexToRGB("#37AAEB",.1),A=e(i).createElement($e,null,e(i).createElement(ae.SendIcon,{width:24,fill:"#6BCEFF"})),F=`${c("transactionsTo")}: ${I.formatAddress(n,m(n),p(n))}`}else if(h&&[Fe.ParsedTransactionType.SentSplFungible,Fe.ParsedTransactionType.SentSplCollectible,Fe.ParsedTransactionType.ReceivedSplFungible,Fe.ParsedTransactionType.ReceivedSplCollectible].includes(t)){const n=Fe.getSplTransferInstructions(T)[0],{source:u,destination:d}=n.parsed.info,m=h.find((e=>u===e.account.toString())),p=h.find((e=>d===e.account.toString()));let g=null===(o=null===(l=null===(a=n.parsed)||void 0===a?void 0:a.info)||void 0===l?void 0:l.tokenAmount)||void 0===o?void 0:o.uiAmount;(null==m?void 0:m.symbol)||(null==m?void 0:m.name)?(g=null!=g?g:I.amountToUiAmount(n.parsed.info.amount,m.decimals),A=e(i).createElement($e,null,e(i).createElement(ae.SendIcon,{width:24,fill:"#6BCEFF"})),C=ee.hexToRGB("#37AAEB",.1),F="",t===Fe.ParsedTransactionType.SentSplFungible?M=`${c("transactionsSent")} ${I.formatTokenAmount(g)} ${m.symbol}`:t===Fe.ParsedTransactionType.SentSplCollectible&&(M=`${c("transactionsSent")} ${null!==(r=m.name)&&void 0!==r?r:m.symbol}`)):((null==p?void 0:p.symbol)||(null==p?void 0:p.name))&&(g=null!=g?g:I.amountToUiAmount(n.parsed.info.amount,p.decimals),C=ee.hexToRGB("#4E44CE",.2),A=e(i).createElement(ae.ReceiveIcon,{fill:"#968DFF"}),F="",t===Fe.ParsedTransactionType.ReceivedSplFungible?M=`${c("transactionsReceived")} ${I.formatTokenAmount(g)} ${p.symbol}`:t===Fe.ParsedTransactionType.ReceivedSplCollectible&&(M=`${c("transactionsReceived")} ${null!==(s=p.name)&&void 0!==s?s:p.symbol}`))}}return e(i).createElement(Oe,{onClick:()=>{t&&window.open(D.generateTxExplorerUrl(S,t,g.type))}},e(i).createElement(Me.AnimatePresence,{exitBeforeEnter:!0,initial:!1},e(i).createElement(Ue,{key:M+S,initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},transition:{duration:.4,bounce:.4,type:"spring"}},e(i).createElement(ne.Circle,{diameter:44,color:C},A),e(i).createElement(Ke,null,e(i).createElement(ze,null,e(i).createElement(q.Text,{size:16,weight:600,lineHeight:19,noWrap:!0},M),e(i).createElement(q.Text,{size:14,color:"#777777",lineHeight:17},b?I.formatTimestampFromNow(b):"")),e(i).createElement(ze,null,e(i).createElement(q.Text,{size:14,color:"#777777",lineHeight:17,textAlign:"left",noWrap:!0,maxWidth:"200px"},F))))))};i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),D=o("7Lj33");var je=o("iqlzl"),We=(i=o("aZikt"),R=o("hHMPk"),o("iSBgX")),Qe=(I=o("cFuyE"),q=o("g7X40"),v=o("7Qmuu"),o("cweFb"));F=o("dczY0"),g=o("4yWCU"),Pe=o("aZo5h"),y=o("82Ilk");const Ze=R.default(Qe.Row)`
  border-radius: 6px;
  background-color: #2a2a2a;
  cursor: pointer;
  &:hover {
    background: #333333;
  }
`,Ve=R.default(Qe.Row)`
  margin-left: 10px;
  margin-right: 16px;
  margin-top: 15px;
  margin-bottom: 15px;
`,_e=e=>{const{topLeft:t,topRight:n,bottomLeft:a,bottomRight:l,image:o,onClick:r}=e;return i.createElement(Ze,{onClick:r},i.createElement(Ve,null,o,i.createElement(F.Column,{width:.69*g.PHANTOM_WIDTH+"px",margin:"0 0 0 10px"},i.createElement(Qe.Row,{justify:"space-between"},i.createElement(q.Text,{size:16,weight:600,color:null==t?void 0:t.color,margin:"0",noWrap:!0,maxWidth:"80%",lineHeight:21},(null==t?void 0:t.label)||""),i.createElement(q.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==n?void 0:n.color)||"#777777",lineHeight:21},(null==n?void 0:n.label)||"")),i.createElement(Qe.Row,{justify:"space-between"},i.createElement(q.Text,{weight:500,margin:"0",size:14,noWrap:!0,color:(null==a?void 0:a.color)||"#777777",lineHeight:21},(null==a?void 0:a.label)||""),i.createElement(q.Text,{weight:500,size:14,color:null==l?void 0:l.color,margin:"0",noWrap:!0,lineHeight:21},(null==l?void 0:l.label)||"")))))},Ge=({transaction:e,onClick:t})=>{const{t:n}=v.useTranslation(),{getSavedAddressLabel:a}=Pe.useAddressBook(),{getExistingAccountMeta:l}=y.useSolanaAccounts(),o=((e,t,n,a)=>{const{err:l,detail:o,dapp:i}=e,{data:r,feePayer:s}=o,{imageUrl:c,name:u}=null!=i?i:{};if(l)return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:t("transactionsFailed")},bottomLeft:{label:u},image:We.createIcon({transactionType:r.type,transactionState:"error"})};const d=I.lamportsToSolana(s.amountLamports);switch(r.type){case"swap":{const{sendAsset:e,receiveAsset:n}=r,a=I.formatAddressShort(e.mint||""),l=I.formatAddressShort(n.mint||"");return{topLeft:{label:(null==i?void 0:i.name)?t("transactionsSwapOn",{dappName:i.name}):t("transactionsTokenSwap")},topRight:{label:`+${I.formatTokenAmount(r.receiveUiAmount)} ${n.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${e.symbol||a} → ${n.symbol||l}`},bottomRight:{label:`-${I.formatTokenAmount(r.sendUiAmount)} ${e.symbol||a}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl,secondaryImage:n.imageUrl})}}case"send":{const{asset:e}=r,l=I.formatAddressShort(e.mint||""),o=I.formatAddress(r.to,a(r.to),n(r.to));return{topLeft:{label:`${t("transactionsSent")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`-${I.formatTokenAmount(r.uiAmount)} ${e.symbol||l}`,color:"#FFFFFF"},bottomLeft:{label:`${t("transactionsTo")}: ${o}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"receive":{const{asset:e}=r,l=I.formatAddressShort(e.mint||""),o=I.formatAddress(r.from,a(r.from),n(r.from));return{topLeft:{label:`${t("transactionsReceived")} ${"collectible"===e.type?e.name||t("richTransactionDetailUnknownNFT"):""}`},topRight:{label:"collectible"===e.type?"":`+${I.formatTokenAmount(r.uiAmount)} ${e.symbol||l}`,color:"#21E56F"},bottomLeft:{label:`${t("transactionsFrom")}: ${o}`},image:We.createIcon({transactionType:r.type,mintType:e.type,primaryImage:e.imageUrl})}}case"stake":{const{uiAmount:e,stakeAccount:n,validatorName:a}=r;return{topLeft:{label:t("transactionsStaked")},topRight:{label:`-${I.formatTokenAmount(e)} SOL`},bottomLeft:{label:a||I.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"withdrawStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsWithdrawStake")},topRight:{label:`+${I.formatTokenAmount(e)} SOL`,color:"#21E56F"},bottomLeft:{label:I.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"deactivateStake":{const{uiAmount:e,stakeAccount:n}=r;return{topLeft:{label:t("transactionsUnstaked")},topRight:{label:`${I.formatTokenAmount(e)} SOL`},bottomLeft:{label:I.formatHashMedium(n,4)},image:We.createIcon({transactionType:r.type})}}case"listItem":case"cancelListing":case"bidItem":case"cancelBid":case"buyItem":case"sellItem":{const e=`${I.formatTokenAmount(r.forUiAmount)} ${r.forAsset.symbol||""}`,n=r.item.name||t("richTransactionDetailUnknownNFT"),a={listItem:{topLeft:{label:t("transactionsListedInterpolated",{name:n})},topRight:{label:""}},bidItem:{topLeft:{label:t("transactionsBidOnInterpolated",{name:n})},topRight:{label:`-${e}`,color:"#777"}},cancelBid:{topLeft:{label:t("transactionsCancelBidOnInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#777"}},cancelListing:{topLeft:{label:t("transactionsUnlistedInterpolated",{name:n})},topRight:{label:""}},sellItem:{topLeft:{label:t("transactionsSoldInterpolated",{name:n})},topRight:{label:`+${e}`,color:"#21E56F"}},buyItem:{topLeft:{label:t("transactionsBoughtInterpolated",{name:n})},topRight:{label:`-${e}`}}};return{topLeft:a[r.type].topLeft,topRight:a[r.type].topRight,bottomLeft:{label:u||""},image:We.createIcon({transactionType:r.type,primaryImage:r.item.imageUrl,secondaryImage:c})}}case"unknown":return{topLeft:{label:t("transactionsAppInteraction")},bottomLeft:{label:u},topRight:{label:`-${d} SOL`},image:We.createIcon({transactionType:r.type,primaryImage:c})};default:return{topLeft:{label:t("transactionsAppInteraction")},topRight:{label:`-${d} SOL`},image:We.createIcon({transactionType:"unknown"})}}})(e,n,a,l);return i.createElement(_e,Object.assign({},o,{onClick:t}))};w=o("fMhDQ"),q=o("g7X40"),ie=o("eopQk"),b=o("g9lcT"),F=o("dczY0"),oe=o("lPkGw"),ne=o("8FNEt"),Re=o("9BE2q");const Xe=R.default(F.Column)`
  align-items: stretch;
  margin-top: -15px;
`,Ye=R.default.div`
  margin-top: 5px;
  margin-bottom: 5px;
`,qe=R.default(q.Text).attrs({size:18,weight:500,color:"#777777"})`
  margin: 25px 0;
`,Je=R.default(ie.LoadingContent)`
  flex: 1;
`,et=(e,t)=>{const n=(e=>e.reduce(((e,t)=>{var n;const a=je.date(1e3*(null!==(n=null==t?void 0:t.blockTime)&&void 0!==n?n:0)).format("YYYY-MM-DD");return(e[a]=e[a]||[]).push(t),e}),{}))(e);return Object.keys(n).sort(((e,t)=>t.localeCompare(e))).map((e=>{const a=je.date(e),l=je.date().diff(a,t("richTransactionsDays"));return{title:l>1?a.format("MMM D, YYYY"):t(l>0?"richTransactionsYesterday":"richTransactionsToday"),data:n[e].sort(((e,t)=>t.blockTime-e.blockTime))}}))},tt=({publicKey:t})=>{const{t:n}=v.useTranslation(),{showTransactionItemModal:a}=b.useModals(),{transactionInfos:l,isLoadingInitial:o}=H.useRichTransactionHistory(t),{pending:r,confirmed:s}=l,c=i.useMemo((()=>{const e=r.map((e=>Object.assign(Object.assign({},e),{blockTime:e.blockTime||je.date().unix()})));return et([...e,...s],n)}),[s,n]);return e(i).createElement(Je,{isLoading:o},e(i).createElement(Xe,null,r.length+s.length!==0&&c?c.map((({title:t,data:n},l)=>((t,n,l)=>e(i).createElement(e(i).Fragment,{key:`${t}-${l}`},e(i).createElement(q.Text,{size:16,textAlign:"left",weight:500,margin:"15px 0 5px 0",color:"#777777"},t),n.map((t=>e(i).createElement(Ye,{key:t.signature},"detail"in t?e(i).createElement(Ge,{transaction:t,onClick:()=>a(t)}):e(i).createElement(nt,{transaction:t}))))))(t,n,l))):e(i).createElement(qe,null,n("transactionsNoActivity"))))},nt=({transaction:t})=>{var n;const{t:a}=v.useTranslation(),l=null===(n=w.useFetchConnection())||void 0===n?void 0:n.data,o=null==l?void 0:l.cluster,{preferredExplorer:r}=Re.usePreferredExplorer();return e(i).createElement(_e,{image:e(i).createElement(ne.Circle,{diameter:44},e(i).createElement(oe.Spinner,{diameter:28})),topLeft:{label:a("transactionsSending")},bottomLeft:{label:a("transactionsWaitingForConfirmation")},onClick:()=>o?window.open(D.generateTxExplorerUrl(t.signature,o,r.type)):null})};ce=o("aADTv"),Qe=o("cweFb"),F=o("dczY0"),i=o("aZikt"),R=o("hHMPk"),i=o("aZikt");q=o("g7X40");const at=R.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${e=>`${e.fontSize}px`};
  width: 100%;
`,lt=R.default(q.Text)`
  font-size: ${e=>e.fontSize};
  line-height: 120%;
  font-weight: 500;
`;var ot=o("CmvE4"),it=(Re=o("9BE2q"),function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))});const rt=["Fungible"],st=e(i).memo((t=>{const{mint:n,name:a,symbol:l}=t,o=(()=>{var e,t;const[n]=x.useFeatureFlags(["kill-rich-transactions-extension"]),{preferredExplorer:a}=Re.usePreferredExplorer(),{t:l}=v.useTranslation(),o=l("assetDetailViewOnExplorer",{explorer:a.name}),i=l("assetDetailStakeSOL"),r=l("assetDetailEditTokenMetadata"),s=l("assetDetailUnwrapAll"),c=l("assetDetailRecentActivity"),u=l("assetDetailActionButtonSend"),d=l("assetDetailActionButtonDeposit"),{feeCalculator:m}=Y.useBlockchainState(),p=m.lamportsPerSignature,g=w.useFetchConnection(),h=g.data,f=null!==(e=null==h?void 0:h.cluster)&&void 0!==e?e:"mainnet-beta",{customMetaMap:E,customMetaMapQuery:b}=A.useCustomTokenMetaMap(),{accountClient:T}=y.useSelectedSolanaAccount(),S=T.publicKey,M=S.toString(),F=T.closeTokenAccountAsync,{data:P,loading:B}=C.useCachedSPLAssetData(M,f),R=k.useSPLTokenAccountsByStandard(M,f),L=R.data,D=null!==(t=null==L?void 0:L.infos)&&void 0!==t?t:new Map,{data:I,isFetching:H}=k.useSPLAssets(Object.assign(Object.assign({},P),{publicKey:M,standards:rt,cluster:f}));return{owner:S,cluster:f,assets:I,tokenInfos:D,isFetching:!g.isFetched||!b.isFetched||!R.isFetched||B||H,lamportsPerSignature:p,closeTokenAccountAsync:F,areRichTransactionsDisabled:n,customMetaMap:E,viewOnSolScanText:o,stakeSolText:i,editTokenMetaText:r,unwrapAllText:s,recentActivityText:c,sendButtonText:u,depositButtonText:d,preferredExplorer:a}})(),{isFetching:s,owner:u,cluster:d,customMetaMap:m,tokenInfos:p,lamportsPerSignature:g,areRichTransactionsDisabled:h,closeTokenAccountAsync:f,assets:E,viewOnSolScanText:T,stakeSolText:M,unwrapAllText:F,editTokenMetaText:P,recentActivityText:R,sendButtonText:z,depositButtonText:O,preferredExplorer:U}=o,K=r.useHistory(),{showValidatorListModal:$,hideValidatorListModal:N,showEditTokenModal:j,showSendModal:W,showDepositAssetModal:Z}=b.useModals(),V=void 0===n,_=i.useMemo((()=>E.find((e=>{switch(e.type){case"solana":return V?e:void 0;case"spl-token":return e.data.mintPubKey===n?e:void 0}}))),[n,E,V]),G=i.useMemo((()=>{var e,t;switch(null==_?void 0:_.type){case"solana":return;case"spl-token":return{name:null===(e=m.get(_.data.mintPubKey))||void 0===e?void 0:e.name,symbol:null===(t=m.get(_.data.mintPubKey))||void 0===t?void 0:t.symbol}}}),[_,m]),X=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==_?void 0:_.data.name)&&void 0!==e?e:null==G?void 0:G.name)&&void 0!==t?t:a}),[_,G]),q=i.useMemo((()=>{var e,t;return null!==(t=null!==(e=null==_?void 0:_.data.symbol)&&void 0!==e?e:null==G?void 0:G.symbol)&&void 0!==t?t:l}),[_,G]),J=i.useMemo((()=>{if(!_)return u;switch(null==_?void 0:_.type){case"solana":return u;case"spl-token":return new B.PublicKey(null==_?void 0:_.data.pubkey)}}),[u,_]),ee=!h&&"mainnet-beta"===d,{refreshTransactionHistory:te}=ee?H.useRichTransactionHistory(J):Q.useTransactionHistory(J),ne=i.useMemo((()=>_?ee?e(i).createElement(tt,{publicKey:J}):e(i).createElement(He,{publicKey:J}):null),[_,ee,J]),ae=i.useMemo((()=>{const e=[{label:T,onClick:()=>window.open(D.generateAddressExplorerUrl(J.toString(),d,U.type),"_blank")}];if(V&&e.push({label:M,onClick:()=>$({onClose:N})}),"spl-token"===(null==_?void 0:_.type)&&_.data.mintPubKey===L.WRAPPED_SOLANA.address){const t=E.find((e=>"solana"===e.type));t&&+t.data.amount>g&&e.unshift({label:F,onClick:()=>{it(void 0,void 0,void 0,(function*(){yield f(new B.PublicKey(_.data.pubkey)),K.push(c.Path.Notifications)}))}})}return"spl-token"!==(null==_?void 0:_.type)||p.has(_.data.mintPubKey)||e.push({label:P,onClick:()=>{S.analytics.capture("selectEditCustomToken"),j({mint:_.data.mintPubKey,name:X,symbol:q})}}),e}),[d,T,V,M,E,g,F,f,K,_,p,a,l,P]);return i.useEffect((()=>{te(J)}),[J]),e(i).createElement(ct,{isFetching:s,cluster:d,mint:"spl-token"===(null==_?void 0:_.type)?_.data.mintPubKey:null!=n?n:void 0,name:X,symbol:q,balance:_?I.amountToUiAmount(_.data.amount,_.data.decimals):0,dollarValue:null==_?void 0:_.data.usd,isSolana:V,txPublicKey:J,TransactionsComponent:ne,actionItems:ae,recentActivityText:R,sendButtonText:z,depositButtonText:O,shouldUseRichTxs:ee,preferredExplorer:U,showSendModal:i.useCallback((()=>{_&&W(_)}),[_,W]),showDepositAssetModal:i.useCallback((()=>{Z({mint:"spl-token"===(null==_?void 0:_.type)?_.data.mintPubKey:void 0,symbol:l})}),[Z])})})),ct=e(i).memo((t=>{const{isFetching:n,cluster:a,mint:l,name:o,symbol:r,balance:s,dollarValue:c,isSolana:u,TransactionsComponent:d,actionItems:m,recentActivityText:p,sendButtonText:g,depositButtonText:h,shouldUseRichTxs:f,showSendModal:E,showDepositAssetModal:y}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,{items:m},n?e(i).createElement(e(i).Fragment,null," "):o),e(i).createElement(Et,{balance:s,symbol:r,mint:l,dollarValue:c,isFetching:n,isMainnet:"mainnet-beta"===a,sendButtonText:g,depositButtonText:h,showSendModal:E,showDepositAssetModal:y}),u&&!n&&e(i).createElement(Ae,null),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(ot.SkeletonLoader,{height:"10px",backgroundColor:"#2D2D2D",borderRadius:"8px",width:"100px",margin:"0 0 15px 0"}),[1,2].map((t=>e(i).createElement(dt,{key:t})))):e(i).createElement(e(i).Fragment,null,!f&&e(i).createElement(q.Text,{size:16,color:"#777777",textAlign:"left",margin:"0 auto 12px 0",noWrap:!0},null===d?null:p),d))})),ut=R.default(ot.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,dt=()=>e(i).createElement(ot.SkeletonLoader,{align:"center",width:"100%",height:"64px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(ot.SkeletonLoader,{width:"54px",height:"100%",backgroundColor:"#434343",borderRadius:"50%",margin:"0 15px 0 0"}),e(i).createElement(F.Column,null,e(i).createElement(Qe.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(ut,{width:"120px"}),e(i).createElement(ut,{width:"60px"})),e(i).createElement(Qe.Row,{justify:"space-between"},e(i).createElement(ut,{width:"75px"})))),mt=R.default(F.Column).attrs({align:"center"})`
  background: #2a2a2a;
  padding: 16px 14px;
  border-radius: 6px;
  margin-bottom: 24px;
`,pt=R.default((({children:t,className:n,maxFontSize:a})=>{const[l,o]=(()=>{const e=i.useRef(null),[t,n]=i.useState({fontSize:100,fontSizePrev:20,fontSizeMax:100,fontSizeMin:20}),{fontSize:a,fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}=t;return i.useEffect((()=>{const t=Math.abs(a-r)<=5,i=null!==e.current&&(e.current.scrollHeight>e.current.offsetHeight||e.current.scrollWidth>e.current.offsetWidth),s=a>r;if(t)return void(i&&n({fontSize:r<a?r:a-(r-a),fontSizeMax:l,fontSizeMin:o,fontSizePrev:r}));let c,u=l,d=o;i?(c=s?r-a:o-a,u=Math.min(l,a)):(c=s?l-a:r-a,d=Math.max(o,a)),n({fontSize:a+c/2,fontSizeMax:u,fontSizeMin:d,fontSizePrev:a})}),[a,l,o,r,e]),[`${a}%`,e]})();return e(i).createElement(at,{className:n,ref:o,fontSize:a},e(i).createElement(lt,{fontSize:l,noWrap:!0},t))}))`
  margin-bottom: 7px;
`,gt=R.default(q.Text).attrs({size:16,color:"#777777"})`
  margin-bottom: 20px;
`,ht=R.default(ce.ButtonPair)`
  width: 296px;
`,ft=R.default(ot.SkeletonLoader).attrs({backgroundColor:"#484848",borderRadius:"8px"})``,Et=e(i).memo((t=>{const{mint:n,symbol:a,balance:l,dollarValue:o,isFetching:r,isMainnet:s,sendButtonText:c,depositButtonText:u,showSendModal:d,showDepositAssetModal:m}=t,p=n?I.formatAddressShort(n):void 0,g=`${I.formatTokenAmount(l)} ${null!=a?a:p}`;return e(i).createElement(e(i).Fragment,null,e(i).createElement(mt,null,r?e(i).createElement(yt,null):e(i).createElement(e(i).Fragment,null,e(i).createElement(pt,{maxFontSize:38},g),s&&e(i).createElement(gt,null,o?I.formatDollarAmount(o):"–")),e(i).createElement(ht,{primaryTheme:r?"default":"primary",primaryText:c,primaryDisabled:r,onPrimaryClicked:d,secondaryTheme:r?"default":"primary",secondaryText:u,secondaryDisabled:r,onSecondaryClicked:m,buttonPairStyle:ce.ButtonPairStyle.Small})))})),yt=()=>e(i).createElement(ot.SkeletonLoader,{width:"100%",height:"70px",padding:"15px 0 30px 0"},e(i).createElement(F.Column,null,e(i).createElement(Qe.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"120px",height:"10px",margin:"0 0 7px 0"})),e(i).createElement(Qe.Row,{justify:"center",margin:"0 auto"},e(i).createElement(ft,{width:"60px",height:"8px"}))));i=o("aZikt"),R=o("hHMPk"),ae=o("hJDxl");var bt=o("jiwMC");Qe=o("cweFb"),q=o("g7X40");const xt=R.default(Qe.Row).attrs({justify:"center"})`
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
`,vt=e(i).memo((t=>e(i).createElement(xt,{onClick:t.onClick},e(i).createElement(bt.IconWrapper,null,e(i).createElement(ae.TokenListSettingsIcon,null)),e(i).createElement(q.Text,{size:16,color:"#777777",weight:500,margin:"0 0 0 10px",lineHeight:19,noWrap:!0},t.buttonText))));i=o("aZikt"),v=o("7Qmuu"),i=o("aZikt"),R=o("hHMPk"),F=o("dczY0"),ae=o("hJDxl"),q=o("g7X40"),Qe=o("cweFb");const kt=({title:t,description:n})=>e(i).createElement(wt,null,e(i).createElement(Tt,null,e(i).createElement(St,null,e(i).createElement(ae.FailureIcon,{width:32}))),e(i).createElement(Ct,null,t),e(i).createElement(At,null,n)),wt=R.default(F.Column).attrs({align:"center",justify:"center"})`
  height: 100%;
`,Tt=R.default.div`
  width: 94px;
  height: 94px;
  position: relative;
  border-radius: 100%;
  background: rgba(235, 55, 66, 0.1);
`,St=R.default(Qe.Row).attrs({align:"center",justify:"center"})`
  height: 100%;
`,Ct=R.default(q.Text).attrs({size:28,weight:500,margin:"30px 0 10px 0"})``,At=R.default(q.Text).attrs({size:16,weight:400,margin:"0 30px",color:"#777777"})``,Mt=()=>{const{t:t}=v.useTranslation();return e(i).createElement(kt,{title:t("homeErrorTitle"),description:t("homeErrorDescription")})};i=o("aZikt"),R=o("hHMPk"),F=o("dczY0"),Qe=o("cweFb"),ot=o("CmvE4");const Ft=R.default.div`
  width: 44px;
  height: 44px;
  margin-right: 15px;
`,Pt=R.default(ot.SkeletonLoader).attrs({height:"8px",backgroundColor:"#484848",borderRadius:"8px"})``,Bt=()=>e(i).createElement(ot.SkeletonLoader,{align:"center",width:"100%",height:"74px",backgroundColor:"#2D2D2D",borderRadius:"8px",margin:"0 0 10px 0",padding:"10px"},e(i).createElement(Ft,null,e(i).createElement(ot.SkeletonLoader,{width:"44px",height:"44px",backgroundColor:"#434343",borderRadius:"50%"})),e(i).createElement(F.Column,null,e(i).createElement(Qe.Row,{margin:"0 0 10px",justify:"space-between"},e(i).createElement(Pt,{width:"120px"}),e(i).createElement(Pt,{width:"60px"})),e(i).createElement(Qe.Row,{justify:"space-between"},e(i).createElement(Pt,{width:"75px"}),e(i).createElement(Pt,{width:"35px"}))));i=o("aZikt"),R=o("hHMPk"),ee=o("99Anx"),I=o("cFuyE");var Rt=o("1yeHx");g=o("4yWCU"),ce=o("aADTv"),F=o("dczY0"),Qe=o("cweFb"),ot=o("CmvE4"),q=o("g7X40");const Lt=R.default(F.Column).attrs({align:"center"})`
  position: relative;
  width: ${g.PHANTOM_WIDTH}px;
  margin-top: -16px;
  background: ${e=>e.background};
`,Dt=R.default(q.Text).attrs({weight:600,size:38})`
  margin-top: 33px;
  margin-bottom: 18px;
`,It=R.default(Qe.Row).attrs({justify:"center"})`
  margin-bottom: 22px;
  min-height: 25px;
`,Ht=R.default(q.Text).attrs({weight:500,size:18})`
  margin-right: 6px;
`,zt=R.default(q.Text).attrs({weight:500,size:18})`
  border-radius: 6px;
  padding: 2px 5px;
`,Ot=R.default(ce.ButtonPair)`
  width: 296px;
  margin-bottom: 22px;
  > * {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);
  }
`,Ut=R.default(F.Column).attrs({align:"center",padding:"49px 0"})``,Kt=e(i).memo((t=>{const{balance:n,balanceChange:a,isFetching:l,isMainnet:o,sendButtonText:r,depositButtonText:s,showSendSelectionModal:c,showDepositSelectionModal:u}=t,d=!o||l?"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)":a>0?"linear-gradient(180deg, rgba(33, 229, 111, 0.05) 0%, rgba(33, 229, 111, 0) 100%)":a<0?"linear-gradient(180deg, rgba(235, 55, 66, 0.05) 0%, rgba(235, 55, 66, 0) 100%)":"linear-gradient(180deg, rgba(136, 136, 136, 0.05) 0%, rgba(136, 136, 136, 0) 100%)",m=0===n?"$0.00":I.formatDollarAmount(n),p=0===a?"+$0.00":I.formatDollarAmount(a,!0),g=a>0?"#21E56F":a<0?"#EB3742":"#777777",h=I.formatPercentage(Rt.calculateDollarChangePercentage(n,a),"0.00%",!0);return e(i).createElement(Lt,{background:d},l?e(i).createElement(Ut,null,e(i).createElement(ot.SkeletonLoader,{width:"150px",height:"10px",borderRadius:"6px",backgroundColor:"#4D4D4D",margin:"0 0 10px 0"}),e(i).createElement(ot.SkeletonLoader,{width:"75px",height:"10px",borderRadius:"6px",backgroundColor:"#484848"})):o?e(i).createElement(e(i).Fragment,null,e(i).createElement(Dt,null,m),e(i).createElement(It,null,e(i).createElement(Ht,{color:g},p),e(i).createElement(zt,{color:g,backgroundColor:ee.hexToRGB(g,.1)},h))):e(i).createElement(Ut,null,e(i).createElement(q.Text,{size:36,weight:"bold",color:"#777"},"–")),e(i).createElement(Ot,{primaryTheme:"default",primaryText:r,primaryDisabled:l,onPrimaryClicked:c,secondaryText:s,secondaryDisabled:l,onSecondaryClicked:u,buttonPairStyle:ce.ButtonPairStyle.Small}))}));i=o("aZikt"),R=o("hHMPk"),k=o("2zUeX"),I=o("cFuyE");var $t=o("gtUQU");const Nt=R.default.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`,jt=e(i).memo((t=>{const n=i.useCallback((e=>null!=e?e:t.unknownTokenText),[t.unknownTokenText]);return e(i).createElement(e(i).Fragment,null,t.data.map(((a,l)=>{var o,r,s;const c=k.assetKeyExtractor(a,l),u=I.amountToUiAmount(a.data.amount,a.data.decimals);switch(a.type){case"solana":return e(i).createElement(Nt,{key:c},e(i).createElement($t.AssetRow,{balance:u,name:a.data.name,symbol:a.data.symbol,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>t.onClick({name:a.data.name,symbol:a.data.symbol})}));case"spl-token":{const l=t.customMetaMap.get(a.data.mintPubKey),d=null!==(r=null!==(o=a.data.symbol)&&void 0!==o?o:null==l?void 0:l.symbol)&&void 0!==r?r:null;return e(i).createElement(Nt,{key:c},e(i).createElement($t.AssetRow,{balance:u,mint:a.data.mintPubKey,name:n(null!==(s=a.data.name)&&void 0!==s?s:null==l?void 0:l.name),symbol:d,logoURI:a.data.logoURI,dollarValue:a.data.usd,dollarChange:a.data.usd24hChange,showDollarValues:t.isMainnet,onClick:()=>{var e;return t.onClick({mint:a.data.mintPubKey,name:n(null!==(e=a.data.name)&&void 0!==e?e:null==l?void 0:l.name),symbol:d})}}))}}})))})),Wt=["Fungible"],Qt=()=>{const t=(()=>{var t;const{t:n}=v.useTranslation(),a=n("homeManageTokenList"),l=n("homeSend"),o=n("homeDeposit"),r=n("assetDetailUnknownToken"),{showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d}=b.useModals(),{pushDetailView:m}=T.useDetailViews(),p=w.useFetchConnection(),g=null==p?void 0:p.data,h=null!==(t=null==g?void 0:g.cluster)&&void 0!==t?t:"mainnet-beta",{accountClient:f}=y.useSelectedSolanaAccount(),E=f.publicKey.toString(),{hiddenMints:x,hiddenMintsMapQuery:F}=M.useHiddenMints(E),{customMetaMap:B,customMetaMapQuery:R}=A.useCustomTokenMetaMap(),{data:L,loading:D,error:I}=C.useCachedSPLAssetData(E,h),{data:H,isFetching:z,error:O}=k.useSPLAssets(Object.assign(Object.assign({},L),{publicKey:E,standards:Wt,cluster:h,hiddenMints:x,sortByPrice:!0})),{totalBalance:U,totalBalanceChange:K}=i.useMemo((()=>k.getTotalAssetsBalance(H)),[H]),$=!p.isFetched||!F.isFetched||!R.isFetched||D||z,N=p.isError||F.isError||R.isError||!!I||!!O&&H.length<=0,j=i.useCallback((t=>{const{mint:n,name:a,symbol:l}=t;S.analytics.capture("assetDetailClick",{asset:{type:"fungible",chain:c.Chain.Solana,isNativeOfType:n?void 0:"sol",address:n,symbol:l,name:a}}),m(e(i).createElement(P.AssetDetail,{mint:n,name:a,symbol:l}),{shouldShowBackButton:!0})}),[m]);return{data:H,isFetching:$,isError:N,isMainnet:"mainnet-beta"===h,totalBalance:U,totalBalanceChange:K,customMetaMap:B,manageTokenListButtonText:a,sendButtonText:l,depositButtonText:o,unknownTokenText:r,showAssetVisibilityModal:s,showSendSelectionModal:u,showDepositSelectionModal:d,onAssetRowClick:j}})();return t.isError?e(i).createElement(Mt,null):e(i).createElement(Zt,Object.assign({},t))},Zt=e(i).memo((t=>e(i).createElement(F.Column,{align:"center"},e(i).createElement(Kt,{balance:t.totalBalance,balanceChange:t.totalBalanceChange,isFetching:t.isFetching,isMainnet:t.isMainnet,sendButtonText:t.sendButtonText,depositButtonText:t.depositButtonText,showSendSelectionModal:t.showSendSelectionModal,showDepositSelectionModal:t.showDepositSelectionModal}),t.isFetching?[1,2,3].map((t=>e(i).createElement(Bt,{key:t}))):e(i).createElement(e(i).Fragment,null,e(i).createElement(jt,{data:t.data,customMetaMap:t.customMetaMap,isMainnet:t.isMainnet,unknownTokenText:t.unknownTokenText,onClick:t.onAssetRowClick}),e(i).createElement(vt,{buttonText:t.manageTokenListButtonText,onClick:t.showAssetVisibilityModal})))));var Vt=o("9AO5f");ae=o("hJDxl"),i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),y=o("82Ilk"),x=o("fRhfQ"),J=o("3rE52"),w=o("fMhDQ");const _t=R.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`,Gt=()=>{const{t:t}=v.useTranslation(),{accountClient:n}=y.useSelectedSolanaAccount(),{data:a}=w.useFetchConnection(),l="mainnet-beta"===(null==a?void 0:a.cluster),[o]=x.useFeatureFlags(["kill-rich-transactions-extension"]);return e(i).createElement(_t,null,e(i).createElement(J.PageHeader,null,t("recentActivityPrimaryText")),!o&&l?e(i).createElement(tt,{publicKey:n.publicKey}):e(i).createElement(He,{publicKey:n.publicKey}))};i=o("aZikt"),v=o("7Qmuu");var Xt=o("69REY"),Yt=o("9OxTN"),qt=o("kOmUt"),Jt=(b=o("g9lcT"),o("6oQjh"));y=o("82Ilk"),x=o("fRhfQ"),w=o("fMhDQ"),i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu");const en=(R=o("hHMPk")).default.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 15px;
  > * {
    margin: 5px;
  }
`;i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),k=o("2zUeX"),i=o("aZikt"),T=o("6rMcH"),i=o("aZikt"),R=o("hHMPk"),qt=o("kOmUt"),k=o("2zUeX");var tn=o("jEn2x"),nn=(v=o("7Qmuu"),y=o("82Ilk"),w=o("fMhDQ"),oe=o("lPkGw"),i=o("aZikt"),T=o("6rMcH"),i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),k=o("2zUeX"),ee=o("99Anx"),o("7eQt4")),an=(qt=o("kOmUt"),o("2aCEZ")),ln=(D=o("7Lj33"),I=o("cFuyE"),b=o("g9lcT"),w=o("fMhDQ"),o("4CRqq")),on=o("ioKPb");J=o("3rE52"),q=o("g7X40"),ce=o("aADTv"),x=o("fRhfQ"),tn=o("jEn2x"),y=o("82Ilk"),i=o("aZikt"),R=o("hHMPk"),ae=o("hJDxl"),q=o("g7X40");const rn=R.default.div`
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
`,sn=R.default.div`
  padding-left: 6px;
  padding-right: 4px;
`,cn=R.default(q.StyledText).attrs({textAlign:"left",weight:600,noWrap:!0})``,un=e(i).memo((t=>{const{title:n,amount:a,symbol:l}=t;return e(i).createElement(rn,null,e(i).createElement(ae.MagicEdenCirleIcon,null),e(i).createElement(sn,null,e(i).createElement(cn,{opacity:.5,size:12,lineHeight:16,textTransform:"capitalize"},n),e(i).createElement(cn,{noWrap:!0,lineHeight:20,textTransform:"capitalize"},`${a} ${l}`)))}));F=o("dczY0"),Re=o("9BE2q");const dn=R.default.div`
  display: flex;
  flex-direction: column;
`,mn=R.default.div`
  position: relative;
`,pn=R.default.div`
  > * {
    margin: 10px 0px;
  }
  margin-bottom: 20px;
`,gn=R.default.div`
  padding: 16px 0px;
  display: flex;
  gap: 10px;
`,hn=R.default.div`
  display: flex;
  flex-wrap: wrap;
`,fn=R.default.div`
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
`,En=R.default(ce.Button)`
  margin-bottom: 10px;
`,yn=e(i).memo((t=>{var n,a,l,o,r,s,c,u,d,m;const{collectible:p,collectionKey:g}=t,{uri:h,mintPubKey:f,amount:E,decimals:T,name:S,pubkey:C}=p,A=I.amountToUiAmount(E,T),{t:M}=v.useTranslation(),[P]=x.useFeatureFlags(["list-on-marketplace-browser-ext"]),B=ln.useListCollectibleStore((e=>e.setListCollectible)),R=ln.useListCollectibleStore((e=>e.setListPrice)),L=null!==(n=k.useFetchSPLTokenJSONMetadata(h).data)&&void 0!==n?n:null;let H,z,O,U;L&&(H=null==L?void 0:L.external_url,z=null==L?void 0:L.description,O=null==L?void 0:L.attributes,U=null==L?void 0:L.image);const K=i.useMemo((()=>S&&S.length>0?S:(null==L?void 0:L.name)?null==L?void 0:L.name:p.mintPubKey?p.mintPubKey:void e(i).Fragment),[S,L]),$=k.useSelectBestMedia(L),N=A>1,{showSendModal:j,showCollectibleListingModal:W,showEditCollectibleListingModal:Q}=b.useModals(),Z=null===(a=w.useFetchConnection())||void 0===a?void 0:a.data,V=null!==(l=null==Z?void 0:Z.cluster)&&void 0!==l?l:"mainnet-beta",{accountClient:_}=y.useSelectedSolanaAccount(),G=_.publicKey.toString(),X=nn.parseURL(H),Y=qt.useSubscribeListedSPLCollectible(tn.getAPIEnvironment(),V,G,C),te="SemiFungible"!==p.standard&&"unknownTokens"!==g,ne=null===(r=null===(o=null==Y?void 0:Y.listings)||void 0===o?void 0:o.magic_eden)||void 0===r?void 0:r.url,ae=i.useCallback((()=>{ne&&window.open(ne)}),[ne]),{preferredExplorer:le}=Re.usePreferredExplorer();return e(i).createElement(dn,null,e(i).createElement(J.PageHeader,{items:[{label:M("collectibleDetailViewOnExplorer",{explorer:le.name}),onClick:()=>V&&window.open(D.generateAddressExplorerUrl(f,V,le.type),"_blank")}]},K,N?e(i).createElement("label",{style:{opacity:.5}}," (",Math.floor(A),")"):null),e(i).createElement(mn,null,e(i).createElement(on.CollectibleDisplay,{width:328,height:328,media:$,image:U,enableCameraControls:!0,enableMedia:!0}),(null===(c=null===(s=null==Y?void 0:Y.listings)||void 0===s?void 0:s.magic_eden)||void 0===c?void 0:c.listingPriceUiAmount)?e(i).createElement(un,{title:M("collectiblesListed"),amount:null===(d=null===(u=Y.listings)||void 0===u?void 0:u.magic_eden)||void 0===d?void 0:d.listingPriceUiAmount,symbol:"SOL"}):null),e(i).createElement(gn,null,Y?null:e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{const e={type:"spl-token",data:Object.assign(Object.assign({},p),{usd:0,usd24hChange:0})};j(e),(()=>{const e=document.querySelector("audio"),t=document.querySelector("video"),n=null!=e?e:t;(null==n?void 0:n.paused)||null==n||n.pause()})()}},M("collectibleDetailSend")),P&&te&&!Y?e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{B({asset:p,listings:null}),W(p)}},M("collectibleDetailList")):null,P&&(null===(m=null==Y?void 0:Y.listings)||void 0===m?void 0:m.magic_eden)?e(i).createElement(F.Column,null,e(i).createElement(En,{theme:"primary",disabled:!ne,onClick:ae},M("listStatusViewOnMagicEden")),e(i).createElement(ce.Button,{theme:"primary",onClick:()=>{var e,t,n;B(Y),R(an.lamportsToSolana(null!==(n=null===(t=null===(e=Y.listings)||void 0===e?void 0:e.magic_eden)||void 0===t?void 0:t.listingPrice)&&void 0!==n?n:0)),Q(p)}},M("collectiblesEditListing"))):null),e(i).createElement(pn,null,(z||H)&&e(i).createElement(q.Text,{weight:500,size:16,color:"#777",textAlign:"left"},M("collectibleDetailDescription")),z&&e(i).createElement(q.Text,{size:14,textAlign:"left",lineHeight:20},z),X&&e(i).createElement(q.Text,{href:X.href,color:"#8A81F8",hoverColor:ee.hexToRGB("#8A81F8",.5),size:14,weight:500,rel:"noopener noreferrer",target:"_blank"},X.host)),e(i).createElement(pn,null,O&&O.length&&e(i).createElement(e(i).Fragment,null,e(i).createElement(q.Text,{weight:500,size:16,color:"#777",textAlign:"left"},M("collectibleDetailProperties")),e(i).createElement(hn,null,O.map((t=>e(i).createElement(fn,{key:t.trait_type},e(i).createElement(q.Text,{lineHeight:15,weight:500,size:12,color:"#777",textTransform:"uppercase",textAlign:"left"},t.trait_type),e(i).createElement(q.Text,{lineHeight:17,color:"white",size:14,weight:500,textAlign:"left"},t.value))))))))}));on=o("ioKPb");const bn=e(i).memo((t=>{const{collectible:n,media:a,image:l,collectionKey:o}=t,{pushDetailView:r}=T.useDetailViews(),s=i.useCallback((()=>{r(e(i).createElement(yn,{collectible:n,collectionKey:o}),{shouldShowBackButton:!0})}),[n]);return e(i).createElement(on.CollectibleDisplay,{onClick:s,media:a,image:l,enableCameraControls:!1})}));J=o("3rE52"),q=o("g7X40"),i=o("aZikt"),R=o("hHMPk"),q=o("g7X40");const xn=R.default.div`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
  left: 4px;
  ${({position:e})=>{switch(e){case"bottom-left":return"\n          bottom: 4px;\n          padding: 6px 11px;\n        ";case"top-left":return"\n          top: 4px;\n          padding: 2px 6px;\n        "}}}
  background: rgba(24, 24, 24, 0.85);
  backdrop-filter: blur(15px);
  border-radius: 6px;
`,vn=R.default(q.StyledText).attrs({lineHeight:17,weight:600,noWrap:!0})``,kn=e(i).memo((t=>{const{name:n,count:a,position:l,textSize:o}=t;return e(i).createElement(xn,{position:l},e(i).createElement(vn,{maxWidth:"104px",size:"small"===o?12:14,noWrap:!0,textTransform:"capitalize"},n),a?e(i).createElement(vn,{opacity:.5,size:14,paddingLeft:4},a):null)})),wn=R.default(q.StyledText).attrs({as:"span",weight:500})``,Tn=R.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Sn=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Cn=e(i).memo((t=>{var n;const{collectible:a,collectionKey:l}=t,{accountClient:o}=y.useSelectedSolanaAccount(),r=o.publicKey.toString(),{t:s}=v.useTranslation(),c=w.useFetchConnection().data,u=null!==(n=null==c?void 0:c.cluster)&&void 0!==n?n:"mainnet-beta",d=qt.useSubscribeListedSPLCollectible(tn.getAPIEnvironment(),u,r,a.pubkey),m=k.useFetchSPLTokenJSONMetadata(a.uri),{isFetched:p}=m,g=m.data||null;let h,f;return g&&(h=null==g?void 0:g.image,f=k.parseMediaFromImage(g)),e(i).createElement(Tn,null,p?e(i).createElement(e(i).Fragment,null,e(i).createElement(bn,{key:a.mintPubKey,collectionKey:l,collectible:a,media:f,image:h}),d?e(i).createElement(kn,{name:s("collectiblesListed"),textSize:"small",position:"top-left"}):null):e(i).createElement(Sn,null,e(i).createElement(oe.Spinner,null)))})),An=e(i).memo((t=>{const{name:n,collection:a}=t;return e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,null,e(i).createElement(wn,{textTransform:"capitalize"},n)," ",e(i).createElement(wn,{opacity:.5},a.items.length)),e(i).createElement(en,null,a.items.map((t=>e(i).createElement(Cn,{collectible:t,collectionKey:a.key})))))}));on=o("ioKPb");const Mn=e(i).memo((t=>{const{name:n,collection:a,media:l,image:o}=t,{pushDetailView:r}=T.useDetailViews(),s=i.useCallback((()=>r(e(i).createElement(An,{name:n,collection:a}),{shouldShowBackButton:!0})),[n,a,r]);return e(i).createElement(on.CollectibleDisplay,{onClick:s,media:l,image:o,enableCameraControls:!1})}));oe=o("lPkGw");const Fn=R.default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Pn=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,Bn=e(i).memo((t=>{var n,a;const{collectionKey:l,collection:o,nrOfListed:r}=t,{t:s}=v.useTranslation(),c=o.items[0],u=k.useFetchSPLTokenJSONMetadata(o.uri),{isFetched:d}=u,m=u.data||null;let p;const g=null!==(n=k.useBestCollectionName(m))&&void 0!==n?n:l,h=null!==(a=o.name)&&void 0!==a?a:g;m&&(p=m.image);const f=k.useSelectCollectionMedia(m),E=o.items.length;let y=E.toString();if(1==E){const[e]=o.items;"SemiFungible"===e.standard&&(y=e.amount)}return e(i).createElement(Fn,null,d?e(i).createElement(e(i).Fragment,null,1===E?e(i).createElement(bn,{key:c.pubkey,collectionKey:l,collectible:c,media:f,image:p}):e(i).createElement(Mn,{key:o.key,name:h,collection:o,media:f,image:p}),r>0?e(i).createElement(kn,{name:1===E&&1===r?s("collectiblesListed"):s("collectiblesNrOfListed",{nrOfListed:r}),textSize:"small",position:"top-left"}):null,e(i).createElement(kn,{name:h,count:y,position:"bottom-left"})):e(i).createElement(Pn,null,e(i).createElement(oe.Spinner,null)))}));i=o("aZikt");const Rn=(R=o("hHMPk")).default.div`
  position: relative;
  width: 154px;
  height: 154px;
  background-color: #2a2a2a;
  border-radius: 6px;
`,Ln=e(i).memo((t=>{var n;const{collectionKey:a,collection:l}=t,o=l.items[0],r=null!==(n=l.name)&&void 0!==n?n:a,s=l.items.length;let c=s.toString();if(1==s){const[e]=l.items;"SemiFungible"===e.standard&&(c=e.amount)}return e(i).createElement(Rn,null,1===s?e(i).createElement(bn,{key:o.pubkey,collectionKey:a,collectible:o,media:null,image:void 0}):e(i).createElement(Mn,{key:l.key,name:r,collection:l,media:null,image:void 0}),e(i).createElement(kn,{name:r,count:c,position:"bottom-left"}))}));q=o("g7X40"),ee=o("99Anx"),ae=o("hJDxl"),b=o("g9lcT");const Dn=R.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`,In=R.default.div`
  background-color: ${ee.hexToRGB("#e5a221",.7)};
  align-items: center;
  border-radius: 6px;
  margin: 5px;
  padding: 8px 10px;
  display: flex;
  cursor: pointer;
`,Hn=R.default(q.StyledText).attrs({textAlign:"left",weight:500,size:14,noWrap:!0})`
  margin-left: 7px;
`,zn=e(i).memo((t=>{const{collections:n,listedCollectibles:a,isError:l,listingsError:o,hasUnknownTokens:r}=t,{t:s}=v.useTranslation(),{showListingsErrorModal:c}=b.useModals();return l?e(i).createElement(Dn,null,s("homeErrorDescription")):n&&n.length?e(i).createElement(e(i).Fragment,null,o?e(i).createElement(In,{onClick:c},e(i).createElement(ae.InfoIcon,{fill:"#fff"}),e(i).createElement(Hn,null,s("collectiblesUnableToLoadListingsFrom",{marketplace:"Magic Eden"}))):null,e(i).createElement(en,null,n.map(((t,l)=>{const o=(null!=a?a:[]).reduce(((e,n)=>e+ +(n.asset.collectionPubKey===t.key)),0);let s=e(i).createElement(Bn,{key:`${t.name}-${l}`,collectionKey:t.key,collection:t,nrOfListed:o});return l===n.length-1&&r&&0!==t.items.length&&(s=e(i).createElement(Ln,{collectionKey:t.key,collection:t})),s})))):e(i).createElement(Dn,null,s("collectiblesNoCollectibles"))}));ie=o("eopQk"),J=o("3rE52"),c=o("lwple"),tn=o("jEn2x");const On=()=>{var t,n;const{t:a}=v.useTranslation(),{showDepositAssetModal:l}=b.useModals(),[o]=x.useFeatureFlags(["list-on-marketplace-browser-ext"]),{accountClient:r}=y.useSelectedSolanaAccount(),s=r.publicKey.toString(),u=w.useFetchConnection().data,d=null!==(t=null==u?void 0:u.cluster)&&void 0!==t?t:"mainnet-beta",m=e(Xt)(Yt.getNFTBlocklist),[p]=Jt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0),g=m.loading?null:null!==(n=null==m?void 0:m.value)&&void 0!==n?n:[],{data:h,isError:f}=qt.useSPLTokenAccountsByCollectibleStandard(tn.getAPIEnvironment(),d,s,p,g,o),E=!!(null==h?void 0:h.error),{collections:k,collectionsLoaded:T}=qt.useSubscribeSPLTokenCollections(tn.getAPIEnvironment(),d,s,p,g,o),S=qt.useSubscribeListedSPLCollectibles(tn.getAPIEnvironment(),d,s),C=i.useMemo((()=>k.filter((e=>e.uri))),[k]),A=i.useMemo((()=>k.filter((e=>!e.uri)).map((e=>{const{items:t}=e;return t})).flat(2)),[k]),M={key:"unknownTokens",name:"Unknown Tokens",uri:"",items:A};return 0===A.length||C.find((e=>"Unknown Tokens"===e.name))||C.push(M),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!f&&!T},e(i).createElement(J.PageHeader,{items:[{label:a("collectiblesReceiveCollectible"),onClick:()=>l({symbol:null,mint:void 0})}]},a("collectiblesPrimaryText")),e(i).createElement(zn,{isError:f,collections:C,listedCollectibles:S,listingsError:!!E,hasUnknownTokens:0!==A.length}))};var Un={};t(Un,"Settings",(function(){return Jn}),(function(e){return Jn=e}));B=o("h6IZU"),i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),c=o("lwple"),I=o("cFuyE"),L=o("6oEu9");var Kn=o("7h7pw"),$n=(nn=o("7eQt4"),S=o("8C6BZ"),y=o("82Ilk"),T=o("6rMcH"),w=o("fMhDQ"),o("02ZG7")),Nn=(b=o("g9lcT"),Pe=o("aZo5h"),Re=o("9BE2q"),Jt=o("6oQjh"),o("d3kzB"));q=o("g7X40"),ae=o("hJDxl"),i=o("aZikt"),R=o("hHMPk"),L=o("6oEu9"),S=o("8C6BZ"),y=o("82Ilk"),ae=o("hJDxl");const jn=R.default.input`
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
`,Wn=R.default.form`
  border: 1px solid #323232;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 8px 15px;
  width: 230px;
  position: relative;
`,Qn=R.default.div`
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
`,Zn=()=>{const t=i.useRef(null),{accountMeta:n,setSelectedAccountName:a}=y.useSelectedSolanaAccount(),l=n.name,[o,r]=i.useState(l),s=i.useCallback((()=>{var e;r(""),null===(e=t.current)||void 0===e||e.focus()}),[r,t.current]),c=i.useCallback((e=>r(e.currentTarget.value)),[r]),u=i.useCallback((()=>{o.length>0&&o!==l&&(S.analytics.capture("changeAccountName",{data:{name:o}}),a(o))}),[l,o,a]),d=i.useCallback((e=>{e.preventDefault(),u()}),[u]);return e(i).createElement(Wn,{onSubmit:d},e(i).createElement(jn,{ref:t,maxLength:L.MAX_WALLET_NAME_LENGTH,value:o,onChange:c,onBlur:u}),e(i).createElement(Qn,{onClick:s},e(i).createElement(ae.PencilIcon,{width:18})))};ce=o("aADTv"),J=o("3rE52");var Vn=o("3xCjQ"),_n=o("iccRv"),Gn=function(e,t,n,a){return new(n||(n=Promise))((function(l,o){function i(e){try{s(a.next(e))}catch(e){o(e)}}function r(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?l(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,r)}s((a=a.apply(e,t||[])).next())}))};const Xn=R.default.div`
  margin-top: 30px;
  margin-bottom: 33px;
  p {
    margin-top: 10px;
  }
`,Yn=R.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Nn.ContentRowContainer} {
    margin-bottom: 10px;
  }
`,qn=R.default.div`
  margin-top: 10px;
  margin-bottom: 30px;
  width: 100%;
  > * {
    margin-top: 10px;
  }
`,Jn=()=>{const{t:t}=v.useTranslation(),{accountClient:n,accountMeta:a}=y.useSelectedSolanaAccount(),{accountMetas:l}=y.useSolanaAccounts(),{pushDetailView:o}=T.useDetailViews(),{showRemoveAccountModal:r,showResetSeedModal:s,showExportMnemonicModal:u,showExportPrivateKeyModal:d}=b.useModals(),m=1===l.length,p=a.type===c.AccountType.Ledger,g=a.type===c.AccountType.PrivateKey,h=n.publicKey.toString();return e(i).createElement(Yn,null,e(i).createElement(Xn,null,e(i).createElement(Zn,null),e(i).createElement(q.Text,{size:16,color:"#777777"},"(",I.formatHashMedium(h),")")),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsDisplayLanguage"),secondaryContent:Kn.languageDisplayValue(v.i18next.language),onClick:()=>{o(e(i).createElement(ca,null),{shouldShowBackButton:!0})}}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsAddressBookPrimary"),secondaryContent:t("settingsAddressBookSecondary"),onClick:()=>{o(e(i).createElement(ua,null),{shouldShowBackButton:!0})}}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsTrustedAppsPrimary"),secondaryContent:t("settingsTrustedAppsSecondary"),onClick:()=>{o(e(i).createElement(aa,null),{shouldShowBackButton:!0})}}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsChangeNetworkPrimary"),secondaryContent:t("settingsChangeNetworkSecondary"),onClick:()=>{o(e(i).createElement(ta,null),{shouldShowBackButton:!0})}}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsSecurityPrimary"),secondaryContent:t("settingsSecuritySecondary"),onClick:()=>{o(e(i).createElement(ma,null),{shouldShowBackButton:!0})}}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsPreferredExplorers"),secondaryContent:t("settingsPreferredExplorersSecondary"),onClick:()=>{o(e(i).createElement(da,null),{shouldShowBackButton:!0})}}),e(i).createElement(qn,null,!p&&e(i).createElement(e(i).Fragment,null,e(i).createElement(ce.Button,{"data-testid":"settings-button-export-private-key",disabled:p,onClick:d,title:p?t("settingsErrorCannotExportLedgerPrivateKey"):""},t("settingsExportPrivateKey")),!g&&e(i).createElement(ce.Button,{"data-testid":"settings-button-show-secret-recovery-phrase",onClick:u},t("settingsShowSecretRecoveryPhrase"))),e(i).createElement(ce.Button,{disabled:m,theme:"warning",onClick:r,title:m?t("settingsErrorCannotRemoveAllWallets"):""},t("settingsRemoveWallet")),e(i).createElement(ce.Button,{theme:"warning",onClick:s},t("settingsResetSecretRecoveryPhrase"))))},ea=R.default.div`
  > * {
    margin-top: 10px;
  }
  *:first-child {
    margin-top: 0px;
  }
`,ta=()=>{var t;const{t:n}=v.useTranslation(),a=null===(t=w.useFetchConnection())||void 0===t?void 0:t.data,l=null==a?void 0:a.mainnetRpcUrl,o=null==a?void 0:a.cluster,{mutateAsync:r}=$n.useStoreStorageValue(c.StorageKeys.Cluster),s=i.useMemo((()=>[{cluster:"mainnet-beta",primaryContent:n("settingsNetworkMainnetBeta"),secondaryContent:l},{cluster:"testnet",primaryContent:n("settingsNetworkTestnet"),secondaryContent:B.clusterApiUrl("testnet")},{cluster:"devnet",primaryContent:n("settingsNetworkDevnet"),secondaryContent:B.clusterApiUrl("devnet")},{cluster:"localhost",primaryContent:n("settingsNetworkLocalhost"),secondaryContent:L.DEFAULT_LOCALHOST_RPC_URL}]),[l]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,null,n("settingsChangeNetworkPrimary")),e(i).createElement(ea,null,s.map((t=>e(i).createElement(Nn.ContentRow,{key:t.cluster,primaryContent:t.primaryContent,secondaryContent:t.secondaryContent,rightContent:o===t.cluster&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>{var e;(e=t.cluster)!==o&&r(e)}})))))},na=R.default.div`
  height: 75%;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
`,aa=()=>{var t,n;const{t:a}=v.useTranslation(),{accountClient:l}=y.useSelectedSolanaAccount(),[o,r,s]=Jt.useStorage(c.StorageKeys.TrustedApplicationsByOwnerBrowser,{});if(r)return null;const u=l.publicKey.toString(),d=null!==(t=o[u])&&void 0!==t?t:{},m=null!==(n=Object.keys(d))&&void 0!==n?n:[],p=m.length>0;return e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,null,a("settingsTrustedAppsPrimary")),p?e(i).createElement(e(i).Fragment,null,e(i).createElement(ea,null,m.map((t=>{var n;return e(i).createElement(Nn.ContentRow,{key:t,primaryContent:null===(n=nn.parseURL(t))||void 0===n?void 0:n.host,secondaryContent:null,rightContent:e(i).createElement(ce.Button,{fontSize:12,width:"70px",theme:"warning",paddingY:5,onClick:()=>(e=>{const t=Object.assign({},d);delete t[e],s(Object.assign(Object.assign({},o),{[u]:t}))})(t)},a("settingsTrustedAppsRevoke"))})})))):e(i).createElement(na,null,a("settingsNoTrustedApps")))},la=R.default(q.Text).attrs({size:16,weight:500,color:"white",textAlign:"left"})`
  margin-top: 30px;
  margin-bottom: 14px;
`,oa=R.default(ea)`
  padding-bottom: 20px;
`,ia=R.default(ea)`
  padding-left: 0px;
  padding-right: 0px;
`,ra=R.default(q.Text).attrs({size:16,weight:500,color:"#666666"})`
  font-style: italic;
`,sa=R.default(q.Text).attrs({size:14,lineHeight:20,weight:400,color:"#777",textAlign:"left"})`
  padding-bottom: 16px;
`,ca=()=>{const{t:t}=v.useTranslation(),[n,a]=i.useState(v.i18next.language);return e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,null,t("settingsDisplayLanguage")),e(i).createElement(oa,null,L.SUPPORTED_LANGUAGES.map((t=>e(i).createElement(Nn.ContentRow,{key:t.value,primaryContent:t.displayValue,secondaryContent:null,rightContent:Kn.languageMatches(n,t.value)&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>{S.analytics.capture("displayLanguageChanged",{data:{targetLanguage:t.value}}),v.i18next.changeLanguage(t.value),a(t.value)}})))))},ua=()=>{const{t:t}=v.useTranslation(),{savedAddresses:n,recentAddresses:a}=Pe.useAddressBook(),{showAddAddressModal:l,showEditAddressModal:o}=b.useModals();return i.useEffect((()=>{S.analytics.capture("addressBookOpen")}),[]),e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,{icon:e(i).createElement(ae.PlusIcon,null),onIconClick:()=>l(void 0)},t("settingsAddressBookPrimary")),e(i).createElement(ia,null,n.length>0&&n.map((t=>e(i).createElement(Nn.ContentRow,{key:t.address,primaryContent:t.label,secondaryContent:null,rightContent:e(i).createElement(q.Text,{size:16,color:"#666666"},I.formatHashMedium(t.address,4)),onClick:()=>{o(t)}}))),a.length>0&&e(i).createElement(e(i).Fragment,null,e(i).createElement(la,null,t("settingsAddressBookRecentlyUsed")),a.map((n=>e(i).createElement(Nn.ContentRow,{key:n,primaryContent:e(i).createElement(ra,null,t("settingsAddressBookNoLabel")),secondaryContent:null,rightContent:e(i).createElement(q.Text,{size:16,color:"#666666"},I.formatHashMedium(n,4)),onClick:()=>{l(n)}}))))),0===n.length&&0===a.length&&e(i).createElement(na,null,e(i).createElement(q.Text,{size:18,weight:500,color:"#666666"},t("settingsNoAddresses"))))},da=()=>{const{t:t}=v.useTranslation(),{preferredExplorer:n,setPreferredExplorer:a}=Re.usePreferredExplorer(),l=Object.entries(_n.SUPPORTED_EXPLORERS).map((([e,t])=>({key:e,name:t.name}))),o=i.useCallback((e=>Gn(void 0,void 0,void 0,(function*(){a(e)}))),[a]);return e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,null,t("settingsPreferredExplorers")),e(i).createElement(ea,null,l.map((t=>e(i).createElement(Nn.ContentRow,{key:t.key,primaryContent:t.name,secondaryContent:null,rightContent:t.key===n.type&&e(i).createElement(ae.CheckmarkIcon,null),onClick:()=>o(t.key)})))))},ma=()=>{const{t:t}=v.useTranslation(),{showChangePasswordModal:n,showChangeLockTimerModal:a}=b.useModals(),[l,o,r]=Jt.useStorage(c.StorageKeys.HideSuspiciousCollectibles,!0),[s,u,d]=Jt.useStorage(c.StorageKeys.IsAnalyticsOptedOut,!1);return o||u?null:e(i).createElement(e(i).Fragment,null,e(i).createElement(J.PageHeader,null,t("settingsSecurityPrimary")),e(i).createElement(ea,null,e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsChangePasswordPrimary"),secondaryContent:t("settingsChangePasswordSecondary"),onClick:n}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsAutoLockTimerPrimary"),secondaryContent:t("settingsAutoLockTimerSecondary"),onClick:a}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsSuspiciousCollectiblesPrimary"),secondaryContent:t("settingsSuspiciousCollectiblesSecondary"),rightContent:e(i).createElement(Vn.ToggleSwitch,{id:"toggleSuspiciousCollectibles",checked:l,onChange:()=>r(!l)})}),e(i).createElement(Nn.ContentRow,{primaryContent:t("settingsSecurityAnalyticsPrimary"),secondaryContent:t("settingsSecurityAnalyticsSecondary"),rightContent:e(i).createElement(Vn.ToggleSwitch,{id:"toggleAnalytics",checked:!s,onChange:()=>d(!s)})}),e(i).createElement(sa,null,t("settingsSecurityAnalyticsHelper"))))};i=o("aZikt"),R=o("hHMPk"),Me=o("d3pmY"),nn=o("7eQt4"),v=o("7Qmuu");var pa,ga=o("bXcFZ"),ha=(ee=o("99Anx"),Z=o("4o0lv"),i=o("aZikt"),new Uint8Array(16));function fa(){if(!pa&&!(pa="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return pa(ha)}var Ea=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var ya=function(e){return"string"==typeof e&&Ea.test(e)},ba=[],xa=0;xa<256;++xa)ba.push((xa+256).toString(16).substr(1));var va=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(ba[e[t+0]]+ba[e[t+1]]+ba[e[t+2]]+ba[e[t+3]]+"-"+ba[e[t+4]]+ba[e[t+5]]+"-"+ba[e[t+6]]+ba[e[t+7]]+"-"+ba[e[t+8]]+ba[e[t+9]]+"-"+ba[e[t+10]]+ba[e[t+11]]+ba[e[t+12]]+ba[e[t+13]]+ba[e[t+14]]+ba[e[t+15]]).toLowerCase();if(!ya(n))throw TypeError("Stringified UUID is invalid");return n};var ka,wa=function(e,t,n){var a=(e=e||{}).random||(e.rng||fa)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var l=0;l<16;++l)t[n+l]=a[l];return t}return va(a)};!function(e){e.NetworkHealth="network-health",e.Cluster="cluster"}(ka||(ka={}));const Ta=i.createContext(null),Sa=({children:t})=>{const n=[],[a,l]=i.useReducer(((e,t)=>{switch(t.type){case"create":return e.concat(t.payload);case"delete":return e.filter((({id:e})=>e!==t.payload.id));case"reset":return n;default:throw new Error("There was an error dispatching a banner action.")}}),n),o=e=>l({type:"delete",payload:{id:e.id}});return e(i).createElement(Ta.Provider,{value:{banners:a,createBanner:e=>{const{type:t,variant:n,message:a,dismissable:i=!0,icon:r,autohide:s=!0,delay:c=5e3,onClick:u}=e;t&&n&&a||console.error("You must supply a type, variant and message when creating a Banner.");const d=wa();return l({type:"create",payload:{id:d,type:t,variant:n,message:a,dismissable:i,icon:r,autohide:s,delay:c,onClick:u}}),s&&setTimeout((()=>{o({id:d})}),c),d},deleteBanner:o,resetBanners:()=>l({type:"reset"})}},t)};b=o("g9lcT"),w=o("fMhDQ"),ae=o("hJDxl");const Ca=R.default.button`
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
`,Aa=R.default(Me.motion.div)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${e=>{switch(e.variant){case ga.CTAVariant.Primary:return ee.hexToRGB("#4E44CE",.7);case ga.CTAVariant.Success:return ee.hexToRGB("#21E56F",.7);case ga.CTAVariant.Warning:return ee.hexToRGB("#E5A221",.7);case ga.CTAVariant.Danger:return ee.hexToRGB("#EB3742",.7);default:return ee.hexToRGB("#E5A221",.7)}}};
  ${Ca} {
    &:focus-visible {
      border-color: ${e=>{switch(e.variant){case ga.CTAVariant.Primary:return ee.hexToRGB("#4E44CE",.7);case ga.CTAVariant.Success:return ee.hexToRGB("#21E56F",.7);case ga.CTAVariant.Warning:return ee.hexToRGB("#E5A221",.7);case ga.CTAVariant.Danger:return ee.hexToRGB("#EB3742",.7);default:return ee.hexToRGB("#E5A221",.7)}}};
    }
  }
`,Ma=R.default.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  svg {
    margin-right: 10px;
  }
`,Fa=R.default.button`
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
`,Pa=()=>{const{banners:t,createBanner:n,deleteBanner:a}=(()=>{const e=i.useContext(Ta);if(!e)throw new Error("Missing banner context. Make sure you're wrapping your component in a <BannerProvider />");return e})(),l=t[t.length-1],{showNetworkHealthModal:o}=b.useModals(),{t:r,i18n:s}=v.useTranslation(),c=w.useFetchConnection(),u=null==c?void 0:c.data,d=null==u?void 0:u.cluster,m=Z.useNetworkHealth(s.language).data;i.useEffect((()=>{if(!d)return;const e=t.find((e=>e.type===ka.Cluster));e&&a({id:e.id}),"mainnet-beta"!==d&&n({type:ka.Cluster,variant:ga.CTAVariant.Warning,message:r("connectionClusterInterpolated",{cluster:nn.capitalizeFirstLetter(d)}),dismissable:!1,autohide:!1})}),[d,r]),i.useEffect((()=>{if(!d)return;const l=t.find((e=>e.type===ka.NetworkHealth));if("mainnet-beta"===d){if(m){const{bannerVariant:t,bannerMessage:r,notificationMessageTitle:s,notificationMessage:c}=m;!!t&&!!r?r!==(null==l?void 0:l.message)&&n({type:ka.NetworkHealth,variant:t,message:r,dismissable:!1,icon:e(i).createElement(ae.ExclamationMarkCircleIcon,{width:14,height:14,circleFill:"#FFFFFF",exclamationFill:"transparent"}),autohide:!1,onClick:c&&s?()=>o({variant:t,title:s,message:c}):void 0}):l&&a({id:l.id})}}else l&&a({id:l.id})}),[d,m]);const p=i.useCallback((()=>a({id:l.id})),[l]);return{banner:l,dismissBanner:p}},Ba=e(i).memo((t=>{const{banner:n,dismissBanner:a}=t;return e(i).createElement(Me.AnimatePresence,null,n&&e(i).createElement(Aa,{key:"banner",role:"banner","aria-live":(null==n?void 0:n.autohide)?"assertive":"polite","aria-atomic":"true",variant:n.variant,initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{ease:"easeOut",duration:.2}},e(i).createElement(Ca,{tabIndex:n.onClick?1:-1,onClick:n.onClick},n.icon&&n.icon,e(i).createElement(Ma,null,n.message)),n.dismissable&&e(i).createElement(Fa,{onClick:a},e(i).createElement(ae.CloseIcon,{width:14,fill:"#FFFFFF"}))))})),Ra=()=>{const t=Pa();return e(i).createElement(Ba,Object.assign({},t))};i=o("aZikt"),R=o("hHMPk"),Me=o("d3pmY"),r=o("gDkTC"),T=o("6rMcH");var La,Da=o("eatHE"),Ia=(i=o("aZikt"),R=o("hHMPk"),Me=o("d3pmY"),/^\s+|\s+$/g),Ha=/^[-+]0x[0-9a-f]+$/i,za=/^0b[01]+$/i,Oa=/^0o[0-7]+$/i,Ua=parseInt,Ka="object"==typeof n&&n&&n.Object===Object&&n,$a="object"==typeof self&&self&&self.Object===Object&&self,Na=Ka||$a||Function("return this")(),ja=Object.prototype.toString,Wa=Math.max,Qa=Math.min,Za=function(){return Na.Date.now()};function Va(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function _a(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==ja.call(e)}(e))return NaN;if(Va(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Va(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Ia,"");var n=za.test(e);return n||Oa.test(e)?Ua(e.slice(2),n?2:8):Ha.test(e)?NaN:+e}La=function(e,t,n){var a,l,o,i,r,s,c=0,u=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=a,o=l;return a=l=void 0,c=t,i=e.apply(o,n)}function g(e){return c=e,r=setTimeout(f,t),u?p(e):i}function h(e){var n=e-s;return void 0===s||n>=t||n<0||d&&e-c>=o}function f(){var e=Za();if(h(e))return E(e);r=setTimeout(f,function(e){var n=t-(e-s);return d?Qa(n,o-(e-c)):n}(e))}function E(e){return r=void 0,m&&a?p(e):(a=l=void 0,i)}function y(){var e=Za(),n=h(e);if(a=arguments,l=this,s=e,n){if(void 0===r)return g(s);if(d)return r=setTimeout(f,t),p(s)}return void 0===r&&(r=setTimeout(f,t)),i}return t=_a(t)||0,Va(n)&&(u=!!n.leading,o=(d="maxWait"in n)?Wa(_a(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),y.cancel=function(){void 0!==r&&clearTimeout(r),c=0,a=s=l=r=void 0},y.flush=function(){return void 0===r?i:E(Za())},y};const Ga=R.default(Me.motion.div)`
  position: absolute;
  top: 0px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #8a81f8;
`,Xa=({refs:t,activeRoute:n,onFinishedAnimating:a,isAnimating:l})=>{const[{x:o,width:r},s]=i.useState({x:0,width:0}),c=i.useCallback((()=>{t&&t[n]&&t[n].current&&s({x:t[n].current.offsetLeft,width:t[n].current.getBoundingClientRect().width})}),[n,t]);return i.useEffect((()=>{c()}),[n,t,c]),i.useEffect((()=>{const t=e(La)((()=>{c()}),500);return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}})),e(i).createElement(Ga,{animate:{x:o,width:r},style:{opacity:l?1:0},onAnimationComplete:a,transition:{duration:.4,type:"spring"}})},Ya=R.default.div`
  position: relative;
  height: 60px;
  display: flex;
`,qa=R.default(Me.motion.div)`
  flex: 1;
  overflow: auto;
  padding: 15px;
`,Ja=R.default(Da.Footer)`
  flex: 1;
  display: flex;
  justify-content: space-around;
  padding: 0px 10px;
`,el=({items:t})=>{const n=r.useLocation(),[a,l]=i.useState(!1),o=t.find((e=>r.matchPath(n.pathname,{path:`/${e.route}`,exact:!0}))),s=t.reduce(((e,t)=>(e[t.route]=i.createRef(),e)),{}),c=o&&o.route;return e(i).createElement(e(i).Fragment,null,e(i).createElement(Me.AnimatePresence,{exitBeforeEnter:!0},e(i).createElement(r.Switch,{location:n,key:n.pathname},t.map((n=>e(i).createElement(r.Route,{key:n.route,path:`/${n.route}`,render:({history:a})=>{const l=a.entries;let o=0;if(l.length>1){const e=l[l.length-1].pathname,n=l[l.length-2].pathname;o=tl(t,e,n)?10:-10}return e(i).createElement(qa,{initial:{x:o,opacity:0},animate:{x:0,opacity:1},exit:{opacity:0},transition:{duration:.15}},e(i).createElement(T.DetailViewsProvider,null,n.renderContent()))}}))),e(i).createElement(r.Route,{key:"redirection",render:()=>e(i).createElement(Me.motion.div,{exit:{opacity:0},transition:{duration:.15}},e(i).createElement(r.Redirect,{to:t[0]?t[0].route:"/"}))}))),e(i).createElement(Ya,null,e(i).createElement(Xa,{refs:s,activeRoute:c,onFinishedAnimating:()=>l(!1),isAnimating:a}),e(i).createElement(Ja,{role:"tablist","aria-orientation":"horizontal"},t.map((t=>e(i).createElement(ll,{isActive:c===t.route,key:t.route,item:t,ref:s[t.route],isAnimating:a,startAnimating:()=>l(!0)}))))))},tl=(e,t,n)=>e.findIndex((e=>e.route===nl(t)))>e.findIndex((e=>e.route===nl(n))),nl=e=>"/"===e?e:e.replace(/^\/+/g,""),al=R.default(r.Link)`
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
`,ll=i.forwardRef((({isActive:t,item:n,isAnimating:a,startAnimating:l},o)=>e(i).createElement(al,{"data-testid":`bottom-tab-nav-button-${n.route}`,$isActive:t,$isAnimating:a,to:n.route,ref:o,onClick:l},n.renderButton())));i=o("aZikt");var ol=o("cdcq0"),il=(y=o("82Ilk"),i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),ol=o("cdcq0"),S=o("8C6BZ"),b=o("g9lcT"),o("gBP3o")),rl=(ae=o("hJDxl"),ne=o("8FNEt"),i=o("aZikt"),R=o("hHMPk"),ae=o("hJDxl"),se=o("gkUV0"),q=o("g7X40"),oe=o("lPkGw"),o("a80wK"));const sl=R.default.div`
  display: flex;
  align-items: center;
  input {
    font-size: 34px;
    line-height: 41px;
    font-weight: 400;
    padding: 0;
    background: none;
  }
`,cl=R.default.div`
  width: 100%;
`,ul=({assetButtonTitle:t,decimals:n,disabled:a,hasWarning:l,iconUrl:o,isLoading:r,value:s,onClick:c,onUserInput:u})=>e(i).createElement(sl,{hasWarning:l},r?e(i).createElement(cl,null,e(i).createElement(oe.Spinner,{diameter:28,color:"#8A81F8"})):e(i).createElement(rl.NumericalInput,{name:"amount",border:"0",placeholder:"0",warning:l,value:s,decimalLimit:n,disabled:a,onUserInput:u}),e(i).createElement(ml,{assetButtonTitle:t,iconUrl:o,onClick:c})),dl=R.default.div`
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
  ${e=>e.isClickable?R.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,ml=({assetButtonTitle:t,iconUrl:n,onClick:a})=>e(i).createElement(dl,{isClickable:void 0!==a,onClick:a},e(i).createElement(se.TokenImage,{width:30,iconUrl:n,alt:t}),e(i).createElement(q.Text,{weight:600,size:16,color:"white"},t),void 0!==a&&e(i).createElement(ae.DownChevronIcon,{width:9}));q=o("g7X40");const pl=()=>{const t=(()=>{const{t:e}=v.useTranslation(),t=il.useSwapperArgs(),n=ol.useSwapSellAssetProps(t),{showSwapSellAssetSelectModal:a}=b.useModals();return Object.assign(Object.assign({},n),{onSellAssetClicked:a,t:e})})();return e(i).createElement(gl,Object.assign({},t))},gl=e(i).memo((({assetButtonTitle:t,decimals:n,formattedMaxSellAmount:a,iconUrl:l,notEnoughAssets:o,uiSellAmount:r,onSellAssetClicked:s,setMaxSellAmount:c,updateSellAmount:u,t:d})=>e(i).createElement(El,null,e(i).createElement(yl,null,e(i).createElement(bl,null,d("swapFlowYouPay")),e(i).createElement(Tl,{onClick:c},e(i).createElement(xl,null,d("swapperMax")," ",a))),e(i).createElement(ul,{assetButtonTitle:t,decimals:n,disabled:!1,hasWarning:o,iconUrl:l,isLoading:!1,onClick:s,onUserInput:u,value:r})))),hl=e(i).memo((({assetButtonTitle:t,buyAmount:n,decimals:a,iconUrl:l,isFetchingQuote:o,onBuyAssetClicked:r,onSwitchTokens:s,t:c})=>e(i).createElement(e(i).Fragment,null,e(i).createElement(vl,null,e(i).createElement(wl,null),e(i).createElement(kl,{onClick:s},e(i).createElement(ae.VerticalDoubleArrowsIcon,{fill:"#FFFFFF",width:20}))),e(i).createElement(El,null,e(i).createElement(yl,null,e(i).createElement(bl,null,c("swapFlowYouReceive"))),e(i).createElement(ul,{assetButtonTitle:t,decimals:a,disabled:!0,hasWarning:!1,iconUrl:l,isLoading:o,onClick:r,onUserInput:()=>{},value:n}))))),fl=()=>{const t=(()=>{const{t:e}=v.useTranslation(),{showSwapBuyAssetSelectModal:t}=b.useModals(),n=i.useCallback((()=>{t()}),[]),a=ol.useSwapBuyAssetProps(S.analytics),l=il.useSwapperArgs();return ol.useInitialAssets(l),Object.assign(Object.assign({},a),{onBuyAssetClicked:n,t:e})})();return e(i).createElement(hl,Object.assign({},t))},El=R.default.div`
  margin-bottom: 5px;
`,yl=R.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 14px;
`,bl=R.default(q.Text).attrs({size:16,color:"#777",weight:500,lineHeight:19,textAlign:"left"})``,xl=R.default(q.Text).attrs({size:14,color:"#777",lineHeight:17,hoverColor:"#8A81F8",weight:500,textAlign:"left"})``,vl=R.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`,kl=R.default(ne.Circle).attrs({color:"#333333",diameter:40})`
  z-index: 0;
  cursor: pointer;
  &:hover:enabled {
    background: #444444;
  }
`,wl=R.default.div`
  position: absolute;
  height: 1px;
  width: calc(100% + 2 * 16px); // TODO: create a constant for screen (tab) padding
  top: 20px;
  left: -16px; // TODO: use tab /screen padding
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,Tl=R.default.div`
  cursor: pointer;
`;var Sl=o("76KFn");i=o("aZikt"),v=o("7Qmuu"),k=o("2zUeX"),il=o("gBP3o"),ie=o("eopQk");const Cl=["Fungible"],Al=({errorBody:t,errorTitle:n,status:a})=>"loading"===a?e(i).createElement(ie.FullHeightLoadingContent,{isLoading:!0}):"failure"===a?e(i).createElement(kt,{title:n,description:t}):null;i=o("aZikt"),v=o("7Qmuu"),ol=o("cdcq0"),b=o("g9lcT"),ce=o("aADTv");const Ml=()=>{const{showSwapReviewModal:t}=b.useModals(),{disabled:n,theme:a,title:l}=Fl();return e(i).createElement(ce.Button,{type:"submit",theme:a,disabled:n,onClick:t},l)},Fl=()=>{const{t:e}=v.useTranslation(),{hasEnoughAssets:t,hasNoRoutes:n,canSwap:a}=ol.useSwapReviewButtonProps();return a?{disabled:!1,theme:"primary",title:e("swapFlowActionButtonText")}:t?n?{disabled:!0,theme:"default",title:e("swapNoQuotesFound")}:{disabled:!0,theme:"default",title:e("swapFlowActionButtonText")}:{disabled:!0,theme:"warning",title:e("sendFormErrorInsufficientBalance")}};i=o("aZikt"),R=o("hHMPk"),i=o("aZikt"),v=o("7Qmuu"),R=o("hHMPk"),ee=o("99Anx"),ol=o("cdcq0"),q=o("g7X40");const Pl=R.default.div`
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: ${ee.hexToRGB("#222222",.75)};
`,Bl=R.default.div`
  background-color: ${ee.hexToRGB("#E5A221",.7)};
  padding: 12px 15px;
  position: absolute;
  /* TODO: change 15px to 16px and create a screen padding constant like on mobile */
  top: -15px;
  left: -15px;
  right: 15px;
  width: calc(100% + 2 * 15px);
`,Rl=R.default(q.Text).attrs({size:16,lineHeight:19,weight:500,color:"#fff",textAlign:"center"})``,Ll=()=>{const{t:t}=v.useTranslation();return ol.useResetSwapperOnMount(),e(i).createElement(Pl,null,e(i).createElement(Bl,null,e(i).createElement(Rl,null,t("swapAvailableOnMainnet"))))};w=o("fMhDQ");const Dl=R.default.fieldset.attrs({disabled:!0})`
  pointer-events: none;
  user-select: none;
`,Il=({children:t})=>{const{data:n}=w.useFetchConnection();return"mainnet-beta"!==(null==n?void 0:n.cluster)?e(i).createElement(e(i).Fragment,null,e(i).createElement(Ll,null),e(i).createElement(Dl,null,t)):e(i).createElement(e(i).Fragment,null,t)},Hl=()=>{const t=(()=>{const{t:e}=v.useTranslation(),{owner:t,cluster:n,hiddenMints:a}=il.useSwapperArgs(),{error:l,isFetching:o}=k.useSPLAssets({publicKey:t,standards:Cl,cluster:n,hiddenMints:a}),r=o,s=!!l;return i.useMemo((()=>({status:r?"loading":s?"failure":"success",errorTitle:e("errorAndOfflineSomethingWentWrong"),errorBody:e("errorAndOfflineUnableToFetchSwap")})),[s,r,e])})();return"success"!==t.status?e(i).createElement(Al,Object.assign({},t)):e(i).createElement(zl,null)},zl=()=>{const t=Ol();return ol.useSubscribeSwapQuoteToQueries(t),e(i).createElement(Il,null,e(i).createElement(pl,null),e(i).createElement(fl,null),e(i).createElement(Sl.SwapCard,null),e(i).createElement(Ml,null))},Ol=()=>{const{accountClient:e}=y.useSelectedSolanaAccount();return e.publicKey.toString()};var Ul=o("cqRHn"),Kl=(i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),o("2hEfq")),$l=(b=o("g9lcT"),ie=o("eopQk"),i=o("aZikt"),R=o("hHMPk"),v=o("7Qmuu"),L=o("6oEu9"),I=o("cFuyE"),b=o("g9lcT"),ae=o("hJDxl"),ce=o("aADTv"),se=o("gkUV0"),q=o("g7X40"),oe=o("lPkGw"),bt=o("jiwMC"),rl=o("a80wK"),o("7mL05"));const Nl=R.default.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`,jl=R.default.div`
  margin-top: 11px;
  margin-bottom: 19px;
`,Wl=R.default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 8px;
`,Ql=R.default(bt.IconWrapper)`
  margin-right: 32px;
  margin-bottom: 5px;
`,Zl=R.default.div`
  label {
    color: #777;
    font-weight: 400;
  }
  cursor: pointer;
`;var Vl;!function(e){e.Down="down",e.Double="double"}(Vl||(Vl={}));const _l=({onCancelClick:t,onArrowClick:n,buttonTheme:a,fromAsset:l,totalFees:o,toAsset:r,fromAssetsList:s,toAssetsList:c,initialFromAssetAmount:u,price:d,slippage:m,feeDisclaimer:p,priceImpact:g,errorMessage:h,onConvertClick:f=L.NOOP,onFromAssetSelect:E=L.NOOP,onToAssetSelect:y=L.NOOP,onFromAssetAmountChange:x=L.NOOP,onSlippageUpdate:k=L.NOOP,arrowStyle:w=Vl.Down,isBottomInputDisabled:T=!1,topInputLabel:S="From",bottomInputLabel:C="To",convertButtonLabel:A="Convert",feeBreakdown:M=[]})=>{const{t:F}=v.useTranslation(),{showAssetSelectionModal:P,hideAssetSelectionModal:B}=b.useModals(),{symbol:R,balance:D}=l,H=l.decimals,z=r.decimals,[O,U]=i.useState(null==u?void 0:u.toString()),K=parseFloat(null!=O?O:"0"),[$,N]=i.useState(O&&d?(K*d).toString():void 0);i.useEffect((()=>{x(O?parseFloat(O):void 0)}),[O]);const j=e=>{var t;if(!e)return U(void 0),void N(void 0);const n=d&&!isNaN(parseFloat(e))?parseFloat(e)*d:void 0;U(e),N(null===(t=null==n?void 0:n.toFixed(z))||void 0===t?void 0:t.toString())};i.useEffect((()=>{j(O)}),[d]);const W=e=>{B(),E(e)},Q=e=>{B(),y(e)},Z=n?()=>{U($||void 0),N(void 0),n()}:void 0,V=null!=D?D:0,_=l.isNativeOfType&&V>L.ESTIMATED_SOL_TRADE_FEE?V-L.ESTIMATED_SOL_TRADE_FEE:V,G=K>V,X=G||!O||!$;return e(i).createElement(Nl,{onSubmit:e=>{e.preventDefault(),O&&f(K)}},e(i).createElement("div",null,e(i).createElement(jl,null,e(i).createElement(Wl,null,e(i).createElement(q.Text,{size:16,color:"#777",weight:500,textAlign:"left"},S),e(i).createElement(Zl,{onClick:()=>j(_.toString())},e(i).createElement(q.Text,{size:14,color:"#777",hoverColor:"#8A81F8",weight:500,textAlign:"left"},e(i).createElement("label",null,F("swapperMax"))," ",I.formatTokenAmount(_)," ",R))),e(i).createElement(Yl,{size:16,selectedAsset:l,hasWarning:G,onClick:s?()=>{P({assets:null!=s?s:[],onSelect:W})}:void 0,onUserInput:j,assetValue:O})),e(i).createElement(jl,null,e(i).createElement(Wl,null,e(i).createElement(q.Text,{size:16,color:"#777",weight:500,textAlign:"left"},C),e(i).createElement(Ql,{onClick:Z},w===Vl.Double?e(i).createElement(ae.VerticalDoubleArrowsIcon,null):e(i).createElement(ae.DownArrowIcon,null))),e(i).createElement(Yl,{disabled:T,selectedAsset:r,isLoading:void 0!==O&&void 0===$&&void 0===h,onClick:c?()=>{P({assets:null!=c?c:[],onSelect:Q})}:void 0,onUserInput:e=>{var t;if(!e)return N(void 0),void U(void 0);const n=d?parseFloat(e)/d:void 0;N(parseFloat(e).toFixed(z).toString()),U(null===(t=null==n?void 0:n.toFixed(H))||void 0===t?void 0:t.toString())},assetValue:$,errorMessage:h}))),e(i).createElement("div",null,e(i).createElement($l.SwapFees,{price:d,fromAssetSymbol:l.symbol,toAssetSymbol:r.symbol,totalFees:o,feeBreakdown:M,feeDisclaimer:p,slippage:m,onSlippageUpdate:k,priceImpact:g}),t?e(i).createElement(ce.ButtonPair,{primaryText:A,secondaryText:"Cancel",primaryDisabled:X,primaryTheme:a,onSecondaryClicked:t}):e(i).createElement(ce.Button,{type:"submit",theme:X?"default":a,disabled:X,onClick:t},A)))},Gl=R.default.div`
  box-sizing: border-box;
  background: #181818;
  border: ${e=>e.hasWarning?"1px solid #EB3742":"1px solid #2F2F2F"};
  border-radius: 6px;
  width: 100%;
  position: relative;
  display: flex;
`,Xl=R.default.div`
  position: absolute;
  top: 12px;
  left: 12px;
`,Yl=({selectedAsset:t,assetValue:n,isLoading:a=!1,hasWarning:l,errorMessage:o,disabled:r,onClick:s,onUserInput:c})=>{let u=a?void 0:"0";return o&&(u=o),e(i).createElement(Gl,{hasWarning:l},a&&e(i).createElement(Xl,null,e(i).createElement(oe.Spinner,{diameter:25,color:"#8A81F8"})),e(i).createElement(rl.NumericalInput,{name:"amount",placeholder:u,warning:l,value:null!=n?n:"",decimalLimit:null==t?void 0:t.decimals,disabled:r,onUserInput:c,border:"1px"}),e(i).createElement(eo,{selectedAsset:t,onClick:s}))},ql=R.default.div`
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
  ${e=>e.isClickable?R.css`
          :hover {
            background-color: #404040;
            svg {
              fill: white;
            }
          }
          cursor: pointer;
        `:""}
`,Jl=R.default(se.TokenImage)`
  margin: 0px 6px 0px 5px;
`,eo=({selectedAsset:t,onClick:n})=>e(i).createElement(ql,{isClickable:void 0!==n,onClick:n},e(i).createElement(Jl,{width:30,iconUrl:t.iconUrl,alt:t.symbol}),e(i).createElement(q.Text,{weight:600,size:16,color:"white"},t.symbol),void 0!==n&&e(i).createElement(ae.DownChevronIcon,{width:9})),to=R.default.div`
  height: 100%;
  padding-bottom: 12px;
`,no=()=>{const{isLoadingAssets:t,fromAsset:n,toAsset:a,fromAssetsList:l,toAssetsList:o,fromAmount:r,price:s,slippage:c,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,setFromAsset:g,setToAsset:h,setFromAmount:f,setSlippage:E,setIsRefreshing:y,error:x}=Kl.useSwapQuote(),{t:k}=v.useTranslation(),{showSwapReviewModal:w}=b.useModals(),T=i.useMemo((()=>e(La)(f,500)),[f]);i.useEffect((()=>(y(!0),()=>{y(!1)})),[]);return i.useEffect((()=>()=>{f(void 0)}),[]),e(i).createElement(ie.FullHeightLoadingContent,{isLoading:t},e(i).createElement(to,null,e(i).createElement(_l,{initialFromAssetAmount:r,price:s,slippage:c,fromAsset:n,toAsset:a,totalFees:u,feeBreakdown:d,feeDisclaimer:m,priceImpact:p,onFromAssetSelect:g,onToAssetSelect:h,onFromAssetAmountChange:e=>{e?T(e):(T.cancel(),f(e))},onConvertClick:e=>{f(e),w()},onArrowClick:()=>{g(a),h(n)},onSlippageUpdate:E,fromAssetsList:l,toAssetsList:o,topInputLabel:k("swapFlowYouPay"),bottomInputLabel:k("swapFlowYouReceive"),convertButtonLabel:k("swapFlowActionButtonText"),buttonTheme:"primary",isBottomInputDisabled:!0,arrowStyle:Vl.Double,errorMessage:null==x?void 0:x.message})))};var ao=o("3JoTt");const lo=()=>{const{value:t}=E.useAsync((()=>Ul.shouldRenderWhatsNewOverlay())),[n,a]=i.useState(!1);return i.useEffect((()=>{t&&a(!0)}),[t]),ao.useRootGroupEffect(),n?e(i).createElement(e(i).Fragment,null,e(i).createElement(Vt.AccountHeader,null),e(i).createElement(Ul.WhatsNewOverlay,{onClose:()=>{Ul.acknowledgeWhatsNewOverlay(),a(!1)}})):e(i).createElement(e(i).Fragment,null,e(i).createElement(Vt.AccountHeader,null),e(i).createElement(Ra,null),e(i).createElement(oo,{shouldRenderWhatsNew:t}),e(i).createElement("div",{id:g.MODAL_ID}))},oo=({shouldRenderWhatsNew:t})=>{const{accountClient:n}=y.useSelectedSolanaAccount(),[a,l,o]=x.useFeatureFlags(["kill-swapper","enable-swapper-2-browser-ext","kill-collectibles"]),s=r.useHistory(),{closeAllModals:u}=b.useModals();i.useEffect((()=>{t||(u(),s.push(c.Path.Wallet))}),[n.publicKey.toString(),t]);const d=[{route:c.Path.Wallet,renderButton:()=>e(i).createElement(ae.WalletIcon,null),renderContent:()=>e(i).createElement(Qt,null)},o?null:{route:c.Path.Collectibles,renderButton:()=>e(i).createElement(ae.CollectiblesIcon,{width:22}),renderContent:()=>e(i).createElement(On,null)},a?null:{route:c.Path.Swap,renderButton:()=>e(i).createElement(ae.DoubleArrowsIcon,{width:24,height:24}),renderContent:()=>l?e(i).createElement(Hl,null):e(i).createElement(no,null)},{route:c.Path.Notifications,renderButton:()=>e(i).createElement(ae.NotificationsIcon,null),renderContent:()=>e(i).createElement(Gt,null)},{route:c.Path.Settings,renderButton:()=>e(i).createElement(ae.SettingsIcon,null),renderContent:()=>e(i).createElement(Un.Settings,null)}].filter((e=>null!==e));return e(i).createElement(el,{items:d})};var io=o("jSC0s");i=o("aZikt"),x=o("fRhfQ"),w=o("fMhDQ");const ro=({children:t})=>{const[n]=x.useFeatureFlags(["kill-rich-transactions-extension"]),{data:a}=w.useFetchConnection(),l="mainnet-beta"===(null==a?void 0:a.cluster),o=!n&&l?H.RichTransactionHistoryProvider:Q.TransactionHistoryProvider;return e(i).createElement(o,null,t)};y=o("82Ilk");var so=o("49Dkb"),co=(b=o("g9lcT"),Y=o("j2x34"),o("5DQqc")),uo=(Pe=o("aZo5h"),o("eeuNW")),mo=(K=o("9ZliH"),U=o("h5G75"),o("jd2rl"));Kl=o("2hEfq"),ao=o("3JoTt");d.initSentry();const po=()=>{i.useEffect((()=>{u.setStorageValue(c.StorageKeys.PopupHasBeenSeen,!0)}),[]);const t=i.useCallback((t=>e(i).createElement(b.ModalsProvider,null,e(i).createElement(uo.WalletMenuProvider,null,e(i).createElement(io.Unlock,{onUnlock:t})))),[]),n=i.useCallback((()=>{p.openTabAsync({url:"onboarding.html"}),window.close()}),[]);return ao.useCaptureOpen("popupOpen"),e(i).createElement(e(i).Fragment,null,e(i).createElement(m.ThemedGlobalStyle,{backgroundColor:"#222222"}),e(i).createElement(h.PopupAndNotificationErrorBoundary,null,e(i).createElement(f.Main,{withBorder:!0},e(i).createElement(r.MemoryRouter,null,e(i).createElement(Sa,null,e(i).createElement(U.QueryProvider,null,e(i).createElement(so.BrowserProvider,null,e(i).createElement(mo.ExtensionLockWrapper,{renderLocked:t,openOnboarding:n},e(i).createElement(K.TransactionsProvider,null,e(i).createElement(co.HardwareWalletProvider,null,e(i).createElement(y.SolanaAccountsProvider,null,e(i).createElement(Pe.AddressBookProvider,null,e(i).createElement(Y.BlockchainProvider,null,e(i).createElement(Kl.SwapQuoteProvider,null,e(i).createElement(ro,null,e(i).createElement(b.ModalsProvider,null,e(i).createElement(uo.WalletMenuProvider,null,e(i).createElement(lo,null)))))))))))))),e(i).createElement("div",{id:g.MODAL_ID})))))};s.render(e(i).createElement(po,null),document.getElementById("root"));define=__define;})(window.define);