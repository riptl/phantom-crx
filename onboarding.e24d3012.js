(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=r.parcelRequirea886;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},r.parcelRequirea886=l),l.register("9P0Mo",(function(r,n){t(r.exports,"FullPageHeader",(function(){return h}));var o=l("aZikt"),i=l("hHMPk"),a=l("7Qmuu"),u=l("6oEu9"),s=l("hJDxl"),f=l("g7X40"),p=l("cweFb");const d=i.default.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`,c=i.default(p.Row).attrs({width:"auto",padding:"10px 20px"})`
  background: #252525;
  border-radius: 100px;
`,g=i.default.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  svg {
    fill: #aaa;
  }
  &:hover {
    color: #fff;
    svg {
      fill: #fff;
    }
    p {
      color: #fff;
    }
  }
`,h=()=>{const{t:t}=a.useTranslation();return e(o).createElement(d,null,e(o).createElement(c,null,e(o).createElement("img",{src:"/grey_logo.png",alt:"Phantom",width:"22px"}),e(o).createElement(f.LogoText,{size:16,lineHeight:18,margin:"0 0 0 10px"},"Phantom")),e(o).createElement(g,{"data-testid":"full-page-header-support-link",href:u.PHANTOM_SUPPORT_URL,rel:"noopener",target:"_blank"},e(o).createElement(s.HelpIcon,null),e(o).createElement(f.Text,{color:"#AAA",size:16,weight:500,hoverColor:"#FFF",margin:"0 0 0 8px"},t("fullPageHeaderHelp"))))}})),l.register("hoJun",(function(e,r){t(e.exports,"ChevronCircle",(function(){return i}));var n=l("hHMPk"),o=l("8FNEt");const i=n.default(o.Circle)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: background-color 200ms ease;
  background-color: ${e=>e.$isExpanded?"#000":"#333"} !important;
  :hover {
    background-color: #444444;
    svg {
      fill: white;
    }
  }
  svg {
    fill: ${e=>e.$isExpanded?"white":"#666666"};
    transition: fill 200ms ease;
    position: relative;
    ${e=>e.top?`top: ${e.top}px;`:""}
    ${e=>e.right?`right: ${e.right}px;`:""}
  }
`}));define=__define;})(window.define);