(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/bwf.0a7f26d5.png"},26:function(e,t,a){e.exports=a(47)},31:function(e,t,a){},32:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),o=a.n(c),l=(a(31),a(3)),s=a(4),i=a(6),u=a(5),m=a(23),p=a(2),f=a(14),h=a.n(f),d=a(58),E=(a(32),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={notRan:!0,json:null},n}return Object(s.a)(a,[{key:"getRanking",value:function(){var e=this,t=this.props.match.params,a=t.event,n=t.year,r=t.week,c=t.rows;return console.log(this.props.match.params),"undefined"==typeof n&&"undefined"==typeof r&&"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(a)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof n&&"undefined"==typeof r?fetch("https://bwf-api.herokuapp.com/api/".concat(a,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(a,"/").concat(n,"/").concat(r)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):fetch("https://bwf-api.herokuapp.com/api/".concat(a,"/").concat(n,"/").concat(r,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})}))}},{key:"render",value:function(){return this.state.notRan?(this.getRanking(),r.a.createElement("div",{className:"loading"},r.a.createElement(d.a,null))):r.a.createElement(h.a,{src:this.state.json})}}]),a}(n.Component)),b=(a(36),a(37),a(21)),v=a.n(b),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"navbar"},r.a.createElement("h1",{id:"title"},r.a.createElement("span",null,r.a.createElement("img",{id:"logo",src:v.a})," API")))}}]),a}(n.Component),y=(a(38),a(39),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={notRan:!0,json:null},n}return Object(s.a)(a,[{key:"getRanking",value:function(){var e=this,t=this.props,a=t.event,n=t.year,r=t.week,c=t.rows;return"undefined"==typeof n&&"undefined"==typeof r&&"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(a)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof n&&"undefined"==typeof r?fetch("https://bwf-api.herokuapp.com/api/".concat(a,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):"undefined"==typeof c?fetch("https://bwf-api.herokuapp.com/api/".concat(a,"/").concat(n,"/").concat(r)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})})):fetch("https://bwf-api.herokuapp.com/api/".concat(a,"/").concat(n,"/").concat(r,"/").concat(c)).then((function(e){return e.json()})).then((function(t){e.setState({notRan:!1,json:t})}))}},{key:"render",value:function(){return this.state.notRan?(this.getRanking(),r.a.createElement("div",{className:"loading-circle"},r.a.createElement(d.a,null))):r.a.createElement(h.a,{src:this.state.json})}}]),a}(n.Component)),w=(a(40),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"button"},r.a.createElement("h1",{className:"get-text"},"GET"))}}]),a}(n.Component)),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"Choose between events...")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 10 men's singles players in the world right now"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://bwfapi.herokuapp.com/men-singles")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"men-singles"}))),r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"Get historical data...")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 10 women's doubles pairs during week #3 of 2013"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://bwfapi.herokuapp.com/women-doubles/2013/3")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"women-doubles",year:"2013",week:"3"}))),r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"Get a custom number of top players...")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 18 mixed doubles pairs in the world right now"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://bwfapi.herokuapp.com/mixed-doubles/18")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"mixed-doubles",rows:"18"}))),r.a.createElement("p",null,r.a.createElement("span",{className:"feature-text"},"And the ability to do all options")),r.a.createElement("div",{className:"examples"},r.a.createElement("p",null,"Top 5 women's singles players during week #38 of 2017"),r.a.createElement("div",{className:"link"},r.a.createElement(w,null),r.a.createElement("p",{className:"get-request"},"https://bwfapi.herokuapp.com/women-singles/2017/38/5")),r.a.createElement("div",{className:"json"},r.a.createElement(y,{event:"women-singles",year:"2017",week:"38",rows:"5"}))))}}]),a}(n.Component),g=a(22),N=a.n(g),O=(a(42),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-features1"},r.a.createElement("p",{className:"footer-features-title"},"Work In Progress"),r.a.createElement("p",{className:"info"},"Documentation",r.a.createElement("br",null),"Convert to TypeScript",r.a.createElement("br",null),"GET requests for player bio",r.a.createElement("br",null),"GET requests for specific tournaments",r.a.createElement("br",null),"User accounts with unique API keys")),r.a.createElement("div",{className:"footer-features2"},r.a.createElement("p",{className:"footer-features-title"},"Support"),r.a.createElement("p",{className:"info"},r.a.createElement("a",{href:"mailto:raymondji@berkeley.edu",className:"url"},"Contact"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://github.com/raymondmengji/bwf-api",className:"url"},"Github"))))}}]),a}(n.Component)),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N.a,null,r.a.createElement("div",{id:"outer"},r.a.createElement(j,null),r.a.createElement("div",{id:"inner"},r.a.createElement("div",{className:"intro"},r.a.createElement("p",{className:"title"},"Up-to-date BWF World Rankings on demand"),r.a.createElement("p",{className:"description"},"Get current and historical badminton world rankings alongside player statistics with BWF API")),r.a.createElement(k,null)),r.a.createElement("div",{className:"summary"},r.a.createElement("p",{className:"blurb"},r.a.createElement("b",null,"BWF API")," is a simple and easy-to-use API that returns JSON metadata for current and historical ",r.a.createElement("br",null),"badminton world rankings alongside detailed player information."),r.a.createElement("div",{className:"features"},r.a.createElement("p",{className:"features-title"},"Fast"),r.a.createElement("p",null,"Asynchronously cached for a fast response.")),r.a.createElement("div",{className:"features"},r.a.createElement("p",{className:"features-title"},"Easy Integration"),r.a.createElement("p",null,"Get JSON results with simple HTTP GET requests."))),r.a.createElement(O,null)))}}]),a}(n.Component),R=(a(43),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("h1",null,"Error 404")}}]),a}(n.Component)),S=(a(44),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return console.log(""),r.a.createElement(m.a,{basename:""},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:x}),r.a.createElement(p.a,{exact:!0,path:"/:event",component:E}),r.a.createElement(p.a,{exact:!0,path:"/:event/:year/:week/:rows",component:E}),r.a.createElement(p.a,{exact:!0,path:"/:event/:rows",component:E}),r.a.createElement(p.a,{exact:!0,path:"/:event/:year/:week",component:E}),r.a.createElement(p.a,{component:R,status:404})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.806132d8.chunk.js.map