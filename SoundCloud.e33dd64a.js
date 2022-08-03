(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirea886;e.register("iO7WO",(function(t,n){var r=e("cuInp");function o(e){return(o="function"==typeof Symbol&&"symbol"===r.typeOf(Symbol.iterator)?function(e){return void 0===e?"undefined":r.typeOf(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":r.typeOf(e)})(e)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=void 0;var u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=a();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(e("yrqZm")),i=e("jY370"),c=e("hRh3p");function a(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return a=function(){return e},e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=arguments,n=function(n){var r=null!=t[n]?t[n]:{};n%2?l(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))},r=1;r<arguments.length;r++)n(r);return e}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,r,o=d(c);function c(){var e;p(this,c);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(h(e=o.call.apply(o,[this].concat(n))),"callPlayer",i.callPlayer),O(h(e),"duration",null),O(h(e),"currentTime",null),O(h(e),"fractionLoaded",null),O(h(e),"mute",(function(){e.setVolume(0)})),O(h(e),"unmute",(function(){null!==e.props.volume&&e.setVolume(e.props.volume)})),O(h(e),"ref",(function(t){e.iframe=t})),e}return t=c,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this;(0,i.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((function(r){if(n.iframe){var o=r.Widget.Events,u=o.PLAY,i=o.PLAY_PROGRESS,c=o.PAUSE,a=o.FINISH,l=o.ERROR;t||(n.player=r.Widget(n.iframe),n.player.bind(u,n.props.onPlay),n.player.bind(c,(function(){n.duration-n.currentTime<.05||n.props.onPause()})),n.player.bind(i,(function(e){n.currentTime=e.currentPosition/1e3,n.fractionLoaded=e.loadedProgress})),n.player.bind(a,(function(){return n.props.onEnded()})),n.player.bind(l,(function(e){return n.props.onError(e)}))),n.player.load(e,f(f({},n.props.config.options),{},{callback:function(){n.player.getDuration((function(e){n.duration=e/1e3,n.props.onReady()}))}}))}}))}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seekTo",1e3*e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return u.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:e,frameBorder:0,allow:"autoplay"})}}])&&s(t.prototype,n),r&&s(t,r),c}(u.Component);t.exports.default=m,O(m,"displayName","SoundCloud"),O(m,"canPlay",c.canPlay.soundcloud),O(m,"loopOnEnded",!0)}))}();define=__define;})(window.define);