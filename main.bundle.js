!function(i){function e(e){for(var t,n,a=e[0],r=e[1],o=e[2],u=0,c=[];u<a.length;u++)n=a[u],Object.prototype.hasOwnProperty.call(l,n)&&l[n]&&c.push(l[n][0]),l[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t]);for(m&&m(e);c.length;)c.shift()();return f.push.apply(f,o||[]),s()}function s(){for(var e,t=0;t<f.length;t++){for(var n=f[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==l[o]&&(a=!1)}a&&(f.splice(t--,1),e=u(u.s=n[0]))}return e}var n={},l={0:0},f=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=i,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var m=a;f.push([54,1]),s()}({25:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),u=n.n(o),c=(n(25),n(3)),i=n.n(c),s=n(8),l=n.n(s),f=n(9),m=n.n(f),d=n(10),g=n.n(d),p=n(11),h=n.n(p),v=n(2),b=n.n(v),y=n(6),w=n.n(y),E=n(7),q=n.n(E),x=n(4),I=n.n(x),S=n(5),N=n.n(S);function j(e){var t=e.classNames;return r.a.createElement("div",{className:["loading-container",t].join(" ")},r.a.createElement("div",{className:"loader"}))}n(31),j.propTypes={classNames:N.a.string};var k=j;function O(e){var t=e.loading,n=e.quote,a=e.author;return r.a.createElement("div",null,r.a.createElement("div",{className:"quote-text-container"},r.a.createElement(k,{classNames:"loading-container ".concat(t?"show":"hidden")}),r.a.createElement("p",{className:"quote-text ".concat(t?"hidden":"show")},n)),r.a.createElement("p",{className:"quote-author"},a))}n(32),O.propTypes={loading:N.a.bool,quote:N.a.string,author:N.a.string};var M,P=O,R=n(14).get,_=function e(){i()(this,e),I()(this,"getQuote",w()(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R("https://quota.glitch.me/random").then(function(e){return{quote:e.data.quoteText,author:e.data.quoteAuthor,loading:!1}})["catch"](function(e){return{isError:!0,quote:null,author:null,loading:!1}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})))},T=(n(51),M=a.Component,h()(z,M),l()(z,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"quote-container"},r.a.createElement(P,{author:this.state.author,quote:this.state.quote,loading:this.state.loading})))}}]),z),Q=n(14).get,L=function e(){i()(this,e),I()(this,"getImage",w()(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q("".concat("https://api.unsplash.com/photos/?random","&client_id=").concat("c282bd4e5d5c9761c7af1f3a5e76e17e16613384df73f02789ec2876e5e53472")).then(function(e){return{isError:!1,url:e.data[Math.floor(10*Math.random())].urls.thumb}})["catch"](function(e){return{isError:!0,url:null}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})))};function z(e){var n;return i()(this,z),n=m()(this,g()(z).call(this,e)),I()(q()(n),"getRandomQuote",w()(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.next=3,n.quoteService.getQuote();case 3:120<(t=e.sent).quote.length&&n.getRandomQuote(),n.setState({quote:t.quote,author:t.author,loading:!1});case 6:case"end":return e.stop()}},e)}))),I()(q()(n),"componentDidMount",function(){n.getRandomQuote()}),n.state={quote:"",author:"",loading:!1},n.quoteService=new _,n}function C(e){var t=e.image,n=e.imageRef;return r.a.createElement("div",{ref:n,style:t?{backgroundImage:"url(".concat(t,")")}:null,className:"random-image lazyload"})}n(52),C.propTypes={image:N.a.string,imageRef:N.a.object};var A,D,J=C,B=(D=a.Component,h()(H,D),l()(H,[{key:"render",value:function(){return r.a.createElement(J,{imageRef:this.bgImage,image:this.state.image&&this.state.image.url?this.state.image.url:null})}}]),H),F=(n(53),A=a.Component,h()(G,A),l()(G,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(B,null))}}]),G);function G(){return i()(this,G),m()(this,g()(G).apply(this,arguments))}function H(e){var n;return i()(this,H),n=m()(this,g()(H).call(this,e)),I()(q()(n),"componentDidMount",function(){n.getImage(),n.setState({isLoaded:!0})}),I()(q()(n),"getImage",w()(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.imageService.getImage();case 2:t=e.sent,n.setState({image:t},function(){n.bgImage.current.style&&n.bgImage.current.style.backgroundImage&&n.bgImage.current.classList.contains("lazyload")&&n.bgImage.current.classList.remove("lazyload")});case 4:case"end":return e.stop()}},e)}))),n.state={image:null,isLoaded:!1},n.imageService=new L,n.bgImage=r.a.createRef(),n}u.a.render(r.a.createElement(F,null),document.getElementById("root"))}});