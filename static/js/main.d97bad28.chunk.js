(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(n,t,e){n.exports=e.p+"static/media/logo-chuck.1dd8e68b.png"},26:function(n,t,e){n.exports=e(36)},36:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),a=e(6),i=e.n(a),c=e(15),u=e(16),s=e(22),l=e(17),f=e(23),p=e(8),d=e(19),h=e.n(d),m=e(2),b=e(1);function g(){var n=Object(m.a)(["\n    width: 100px;\n    float: right;\n    color: #f00;\n    text-align: center;\n    border: 1px solid #f00;\n    padding: 7px;\n    text-transform: uppercase;\n    transition: 0.2s;\n    cursor: pointer;\n    &:hover{\n        color: #fff;\n        background-color:#f00;\n    }\n"]);return g=function(){return n},n}function v(){var n=Object(m.a)(["\n    width: 500px;\n    max-width: 95%;\n    color: #fff;\n    text-align: center;\n    border: 1px solid #fff;\n    padding: 7px 0;\n    text-transform: uppercase;\n    transition: 0.2s;\n    cursor: pointer;\n    margin: 45px auto;\n"]);return v=function(){return n},n}function x(){var n=Object(m.a)(["\n    color:#fff;\n    padding:30px;\n    text-align:center;\n    font-size:25px;\n    font-weight:400;\n    border:2px solid #f00;\n"]);return x=function(){return n},n}function k(){var n=Object(m.a)(["\n    font-family: 'Roboto',sans-serif;\n    max-width: 95%;\n    margin: 50px auto;\n    width: 500px;\n"]);return k=function(){return n},n}function j(){var n=Object(m.a)(['\n    font-family: \'Roboto\', sans-serif;\n    font-size:20px;\n    color: #fff;\n    background-color: #323c5c;\n    padding: 5px 10px;\n    text-transform:uppercase;\n    font-weight:bold;\n    cursor: pointer;\n    transition: 0.5s;\n    position:relative;\n    &:hover{\n        color: #ffe000;\n    }\n    &:before {\n        content: "";\n        background: #ffe000;\n        width: 0;\n        height: 1px;\n        position: absolute;\n        bottom: 0;\n        left:0;\n        rigth:0;\n        transition: 0.5s;\n    }\n    &:hover:before {\n        content: "";\n        width: 100%;\n    }\n    &.active{\n        color: #ffe000;\n        :before {\n            content: "";\n            width: 100%;\n        }\n    }\n']);return j=function(){return n},n}function w(){var n=Object(m.a)(["\n    list-style:none;\n    display:flex;\n    flex-wrap:wrap;\n    max-width:100%;\n    justify-content:center;\n    aling-itens:center;\n    padding:0;\n"]);return w=function(){return n},n}function y(){var n=Object(m.a)(["\n    display: block;\n    color: #ff0000;\n    font-size: 30px;\n    padding-left: 9%;\n    @media screen and (min-width: 992px) {\n        font-size: 60px;\n    }\n"]);return y=function(){return n},n}function O(){var n=Object(m.a)(["\n    font-family: 'Kalam', cursive;\n    color: #ffe000;\n    font-size: 25px;\n    margin: 0 auto;\n    text-align: center;\n    @media screen and (min-width: 992px) {\n        font-size: 35px;\n    }\n"]);return O=function(){return n},n}function E(){var n=Object(m.a)(["\n    display:block;\n    margin:0 auto;\n"]);return E=function(){return n},n}function C(){var n=Object(m.a)(["\n    max-width:900px;\n    margin: 0 auto;\n"]);return C=function(){return n},n}function z(){var n=Object(m.a)(["\n    background-color: #323c5c;\n    padding: 17px 0;\n    min-height:98vh;\n"]);return z=function(){return n},n}function S(){var n=Object(m.a)(["\n  body {\n    margin:0 auto;\n    @import url('https://fonts.googleapis.com/css?family=Kalam|Roboto:400,500i,700&display=swap');\n  }\n"]);return S=function(){return n},n}var A=Object(b.a)(S()),D=b.b.section(z()),T=b.b.div(C()),N=b.b.img(E()),R=b.b.h1(O()),W=b.b.span(y()),B=b.b.ul(w()),J=b.b.li(j()),K=b.b.div(k()),P=b.b.div(x()),G=b.b.p(v()),I=b.b.p(g()),M=function(n){function t(){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this))).state={categories:[],joke:"",key:""},n}return Object(f.a)(t,n),Object(u.a)(t,[{key:"componentWillMount",value:function(){var n=this;fetch("https://api.chucknorris.io/jokes/categories").then(function(n){return n.json()}).then(function(t){return n.setState({categories:t})})}},{key:"metodoClick",value:function(n){var t=this;(function(n){return fetch("https://api.chucknorris.io/jokes/random?category=".concat(n)).then(function(n){return n.json()})})(n).then(function(n){return t.setState({joke:n})}),this.props.dispatch({lastCategory:n,type:"ADDSTATE"})}},{key:"render",value:function(){var n=this;return o.a.createElement(D,null,o.a.createElement(A,null),o.a.createElement(T,null,o.a.createElement(N,{src:h.a,alt:"logo"}),o.a.createElement(R,null,"Gerador de Piadas ",o.a.createElement(W,null,"Chuck Norris")),o.a.createElement(B,null,this.state.categories.map(function(t,e){return o.a.createElement(J,{className:n.state.key===e?"active":"",key:e,onClick:function(){return n.metodoClick(t,e),n.setState({key:e})}},t)})),o.a.createElement(G,null,"Voc\xea Esta na Categoria : ".concat(this.props.category)),o.a.createElement(K,null,o.a.createElement(P,null,this.state.joke.value?this.state.joke.value:"Selecione uma Categoria"),o.a.createElement(I,{onClick:function(){return n.metodoClick(n.state.joke.categories[0])}},"Proxima"))))}}]),t}(r.Component),V=Object(p.b)(function(n){return{category:n}})(M);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=e(7),q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Nenhuma",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDSTATE":return t.lastCategory}return n},F=Object($.b)(q);i.a.render(o.a.createElement(p.a,{store:F},o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.d97bad28.chunk.js.map