!function(i){function e(e){for(var t,n,a=e[0],r=e[1],o=e[2],u=0,c=[];u<a.length;u++)n=a[u],l[n]&&c.push(l[n][0]),l[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(i[t]=r[t]);for(m&&m(e);c.length;)c.shift()();return f.push.apply(f,o||[]),s()}function s(){for(var e,t=0;t<f.length;t++){for(var n=f[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==l[o]&&(a=!1)}a&&(f.splice(t--,1),e=u(u.s=n[0]))}return e}var n={},l={0:0},f=[];function u(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=i,u.c=n,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var t=window.webpackJsonp=window.webpackJsonp||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var m=a;f.push([56,1]),s()}({21:function(e,t){e.exports="data:image/svg+xml;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJsb2FkaW5nLnN2ZyI7"},27:function(e,t,n){},30:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),u=n.n(o),c=(n(27),n(3)),i=n.n(c),s=n(8),l=n.n(s),f=n(9),m=n.n(f),d=n(10),g=n.n(d),p=n(11),h=n.n(p),v=(n(30),n(2)),b=n.n(v),y=n(6),w=n.n(y),x=n(7),E=n.n(x),q=n(4),I=n.n(q),S=n(5),k=n.n(S),N=(n(34),n(21)),j=n.n(N);function M(e){var t=e.classNames;return r.a.createElement("div",{className:["loading-container",t].join(" ")},r.a.createElement("img",{src:j.a,alt:"Loading"}))}M.propTypes={classNames:k.a.string};var O=M;function L(e){var t=e.loading,n=e.quote,a=e.author;return r.a.createElement("div",null,r.a.createElement("div",{className:"quote-text-container"},r.a.createElement(O,{classNames:"loading-container ".concat(t?"show":"hidden")}),r.a.createElement("p",{className:"quote-text ".concat(t?"hidden":"show")},n)),r.a.createElement("p",{className:"quote-author"},a))}n(35),L.propTypes={loading:k.a.bool,quote:k.a.string,author:k.a.string};var P=L,_=n(14).get,R=function e(){i()(this,e),I()(this,"getQuote",w()(b.a.mark(function ga(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("https://quota.glitch.me/random").then(function(e){return{quote:e.data.quoteText,author:e.data.quoteAuthor,loading:!1}})["catch"](function(e){return{isError:!0,quote:null,author:null,loading:!1}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},ga)})))},T=(n(54),function(e){function t(e){var n;return i()(this,t),n=m()(this,g()(t).call(this,e)),I()(E()(n),"getRandomQuote",w()(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({loading:!0}),e.next=3,n.quoteService.getQuote();case 3:t=e.sent,n.setState({quote:t.quote,author:t.author,loading:!1});case 5:case"end":return e.stop()}},e)}))),I()(E()(n),"componentDidMount",function(){n.getRandomQuote()}),n.state={quote:"",author:"",loading:!1},n.quoteService=new R,n}return h()(t,e),l()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flex"},r.a.createElement("div",{className:"quote-container"},r.a.createElement(P,{author:this.state.author,quote:this.state.quote,loading:this.state.loading})))}}]),t}(a.Component)),B=n(14).get,C=function e(){i()(this,e),I()(this,"getImage",w()(b.a.mark(function ga(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B("".concat("https://api.unsplash.com/photos/?random","&client_id=").concat("c282bd4e5d5c9761c7af1f3a5e76e17e16613384df73f02789ec2876e5e53472")).then(function(e){return{isError:!1,url:e.data[Math.floor(10*Math.random())].urls.thumb}})["catch"](function(e){return{isError:!0,url:null}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},ga)})))};function Q(e){var t=e.image,n=e.imageRef;return r.a.createElement("div",{ref:n,style:t?{backgroundImage:"url(".concat(t,")")}:null,className:"random-image lazyload"})}n(55),Q.propTypes={image:k.a.string,imageRef:k.a.object};var z=Q,A=function(e){function t(e){var n;return i()(this,t),n=m()(this,g()(t).call(this,e)),I()(E()(n),"componentDidMount",function(){n.getImage(),n.setState({isLoaded:!0})}),I()(E()(n),"getImage",w()(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.imageService.getImage();case 2:t=e.sent,n.setState({image:t},function(){n.bgImage.current.style&&n.bgImage.current.style.backgroundImage&&n.bgImage.current.classList.contains("lazyload")&&n.bgImage.current.classList.remove("lazyload")});case 4:case"end":return e.stop()}},e)}))),n.state={image:null,isLoaded:!1},n.imageService=new C,n.bgImage=r.a.createRef(),n}return h()(t,e),l()(t,[{key:"render",value:function(){return r.a.createElement(z,{imageRef:this.bgImage,image:this.state.image&&this.state.image.url?this.state.image.url:null})}}]),t}(a.Component),G=function(e){function t(){return i()(this,t),m()(this,g()(t).apply(this,arguments))}return h()(t,e),l()(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(A,null))}}]),t}(a.Component);u.a.render(r.a.createElement(G,null),document.getElementById("root"))}});