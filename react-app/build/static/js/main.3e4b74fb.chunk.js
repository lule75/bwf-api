(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/bwf.0a7f26d5.png"},26:function(e,t,n){e.exports=n(47)},31:function(e,t,n){},32:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),o=n.n(c),l=(n(31),n(3)),s=n(4),i=n(6),u=n(5),m=n(23),p=n(2),f=n(14),h=n.n(f),d=n(58),E=(n(32),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={notRan:!0,json:null},a}return Object(s.a)(n,[{key:"getRanking",value:function(){var e=this,t=this.props.match.params,n=t.event,a=t.year,r=t.week,c=t.rows;return console.log(this.props.match.params),"undefined"==typeof a&&"undefined"==typeof r&&"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(n)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof a&&"undefined"==typeof r?fetch("https://bwf-api.herokuapp.com/api/".concat(n,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(n,"/").concat(a,"/").concat(r)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):fetch("https://bwf-api.herokuapp.com/api/".concat(n,"/").concat(a,"/").concat(r,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})}))}},{key:"render",value:function(){return this.state.notRan?(this.getRanking(),r.a.createElement("div",{className:"loading"},r.a.createElement(d.a,null))):r.a.createElement(h.a,{src:this.state.json})}}]),n}(a.Component)),b=(n(36),n(37),n(21)),v=n.n(b),j=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"navbar"},r.a.createElement("h1",{id:"title"},r.a.createElement("span",null,r.a.createElement("img",{id:"logo",src:v.a})," API")))}}]),n}(a.Component),y=(n(38),n(39),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={notRan:!0,json:null},a}return Object(s.a)(n,[{key:"getRanking",value:function(){var e=this,t=this.props,n=t.event,a=t.year,r=t.week,c=t.rows;return"undefined"==typeof a&&"undefined"==typeof r&&"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(n)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof a&&"undefined"==typeof r?fetch("https://bwf-api.herokuapp.com/api/".concat(n,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(n,"/").concat(a,"/").concat(r)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):fetch("https://bwf-api.herokuapp.com/api/".concat(n,"/").concat(a,"/").concat(r,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})}))}},{key:"render",value:function(){return this.state.notRan?(this.getRanking(),r.a.createElement("div",{className:"loading-circle"},r.a.createElement(d.a,null))):r.a.createElement(h.a,{src:this.state.json})}}]),n}(a.Component)),w=(n(40),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"button"},r.a.createElement("h1",{className:"get-text"},"GET"))}}]),n}(a.Component)),g=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"Choose between events...")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 10 men's singles players in the world right now"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://raymondmengji.github.io/bwf-api/men-singles")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"men-singles"}))),r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"Get historical data...")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 10 women's doubles pairs during week #3 of 2013"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://raymondmengji.github.io/bwf-api/women-doubles/2013/3")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"women-doubles",year:"2013",week:"3"}))),r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"Get a custom number of top players...")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 18 mixed doubles pairs in the world right now"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://raymondmengji.github.io/bwf-api/mixed-doubles/18")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"mixed-doubles",rows:"18"}))),r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"And the ability to do all options")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 5 women's singles players during week #38 of 2017"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://raymondmengji.github.io/bwf-api/women-singles/2017/38/5")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"women-singles",year:"2017",week:"38",rows:"5"}))))}}]),n}(a.Component),k=n(22),N=n.n(k),O=(n(42),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-features1"},r.a.createElement("p",{className:"footer-features-title"},"Work In Progress"),r.a.createElement("p",{className:"info"},"Documentation",r.a.createElement("br",null),"Convert to TypeScript",r.a.createElement("br",null),"GET requests for player bio",r.a.createElement("br",null),"GET requests for specific tournaments",r.a.createElement("br",null),"User accounts with unique API keys")),r.a.createElement("div",{className:"footer-features2"},r.a.createElement("p",{className:"footer-features-title"},"Support"),r.a.createElement("p",{className:"info"},r.a.createElement("a",{href:"mailto:raymondji@berkeley.edu",className:"url"},"Contact"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/raymondmengji/bwf-api",className:"url"},"Github"))))}}]),n}(a.Component)),x=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement("div",{id:"outer"},r.a.createElement(j,null),r.a.createElement("div",{id:"inner"},r.a.createElement("div",{className:"intro"},r.a.createElement("p",{className:"title"},"Up-to-date BWF World Rankings on demand"),r.a.createElement("p",{className:"description"},"Get current and historical badminton world rankings alongside player statistics with BWF API")),r.a.createElement(g,null)),r.a.createElement("div",{className:"summary"},r.a.createElement("p",{className:"blurb"},r.a.createElement("b",null,"BWF API")," is a simple and easy-to-use API that returns JSON metadata for current and historical ",r.a.createElement("br",null),"badminton world rankings alongside detailed player information."),r.a.createElement("div",{className:"features"},r.a.createElement("p",{className:"features-title"},"Fast"),r.a.createElement("p",null,"Asynchronously cached for a fast response.")),r.a.createElement("div",{className:"features"},r.a.createElement("p",{className:"features-title"},"Easy Integration"),r.a.createElement("p",null,"Get JSON results with simple HTTP GET requests."))),r.a.createElement(O,null)))}}]),n}(a.Component),R=(n(43),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("h1",null,"Error 404")}}]),n}(a.Component)),S=(n(44),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return console.log("/bwf-api"),r.a.createElement(m.a,{basename:"/bwf-api"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{exact:!0,path:"/:event",component:E}),r.a.createElement(p.a,{exact:!0,path:"/:event/:year/:week/:rows",component:E}),r.a.createElement(p.a,{exact:!0,path:"/:event/:rows",component:E}),r.a.createElement(p.a,{exact:!0,path:"/:event/:year/:week",component:E}),r.a.createElement(p.a,{component:R,status:404})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.3e4b74fb.chunk.js.map