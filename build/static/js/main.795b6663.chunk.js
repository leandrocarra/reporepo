(this["webpackJsonpgobarber-front"]=this["webpackJsonpgobarber-front"]||[]).push([[0],{27:function(n,e,t){n.exports=t.p+"static/media/fight.2532bbce.gif"},31:function(n,e,t){n.exports=t(54)},54:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(19),o=t.n(i),c=t(1),l=t(2);function s(){var n=Object(c.a)(["\n @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n    min-height: 100%;\n  }\n\n  body {\n    background: #6B85F4;\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button {\n    color: #222;\n    font-size: 14px;\n    font-family: Roboto, Helvetica, sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return s=function(){return n},n}var u=Object(l.a)(s()),p=t(7),d=t.n(p),f=t(28),m=t(23),g=t(24),b=t(25),h=t(30),x=t(29),v=t(4),w=t(26),_=t.n(w).a.create({baseURL:"http://localhost:3333"});function k(){var n=Object(c.a)(["\n  max-width: 90%;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);\n  padding: 0px 30px 30px 30px;\n  margin: 80px auto;\n  overflow: hidden;\n\n  h1 {\n    font-size: 2.3vw;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    color: #F36F2C;\n    width: 30%;\n    border: 1px solid red;\n    background-color: #2D383E;\n    height: 80px;\n    border-radius: 5px;\n    position: relative;\n    top: -3px;\n    justify-content: center;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);\n\n    strong {\n      color: #fff;\n    }\n    svg {\n      margin-right: 10px;\n    }\n  }\n"]);return k=function(){return n},n}var y=l.c.div(k()),E=function(n){var e=n.progressStatus,t=n.specialClass,r=n.tittle,i=n.position,o=n.number,c=e,l=114*Math.PI,s=l-c/100*l;return a.a.createElement("div",{className:"circle-rating cirle-rating__featured"},a.a.createElement("p",{className:"circle-rating__description"},r),a.a.createElement("div",{className:"circle-rating__container"},a.a.createElement("div",{className:"circle-rating__background ".concat(i)}),a.a.createElement("div",{className:"".concat(i)},a.a.createElement("span",{className:"circle-rating__magical-number"},o),a.a.createElement("svg",{height:120,width:120},a.a.createElement("circle",{className:"".concat(t),fill:"transparent",strokeWidth:4,strokeDasharray:l+" "+l,style:{strokeDashoffset:s},"stroke-width":4,r:57,cx:60,cy:60})))))};function O(){var n=Object(c.a)(["\n  max-width: 100%;\n  margin-top: 40px;\n  min-height: 50vh;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  font-size: 4vw;\n  flex-direction: column;\n  "]);return O=function(){return n},n}var j=l.c.div(O()),z=t(27),S=t.n(z),N=function(){return a.a.createElement(j,null,"Search something",a.a.createElement("div",null,a.a.createElement("img",{src:S.a,alt:"gif"})))};function F(){var n=Object(c.a)(["\n      li {\n        animation-name: "," !important;\n      }\n    "]);return F=function(){return n},n}function C(){var n=Object(c.a)(["\n  list-style: none;\n  overflow: hidden;\n  ","\n  ","\n  li {\n    padding: 15px 12px 50px 12px;\n    width: 23%;\n    float: left;\n    min-height: 174px;\n    box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.1);\n    border: 1px solid #e8e8e8;\n    margin: 30px 1%;\n    border-radius: 5px;\n    text-align: center;\n    position: relative;\n    transition: 0.233s;\n    &:hover {\n      box-shadow: 1px 10px 20px rgba(0, 0, 0, 0.6);\n    }\n\n    .checked {\n      display: none;\n    }\n    .contentTitle {\n      height: 80px;\n    }\n    .title {\n      font-size: 1.5vw;\n      line-height: normal;\n      margin-bottom: 15px;\n      color: #404040;\n      display: inline-block;\n      font-weight: 400;\n      display: -webkit-box;\n      -webkit-line-clamp: 3;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n\n    div {\n      text-align: center;\n      margin-bottom: 10px;\n    }\n    .contentImage {\n      height: 21vh;\n    }\n    img {\n      width: 80%;\n      max-width: 160px;\n      min-width: 100px;\n    }\n    a {\n      text-decoration: none;\n    }\n\n    &:first-child {\n      border: 1px solid #f36f2c;\n      box-shadow: 1px 10px 20px rgba(252, 154, 40, 0.3);\n      .checked {\n        position: absolute;\n        right: -10px;\n        top: -20px;\n        display: block;\n        background-color: #222;\n        padding: 5px;\n        border-radius: 50%;\n      }\n    }\n\n    @media (max-width: 980px) {\n      width: 31%;\n    }\n    @media (max-width: 700px) {\n      width: 47%;\n      .title,\n      .price,\n      .brand {\n        font-size: 2.5vw;\n      }\n\n      img {\n        min-width: 74px;\n      }\n    }\n    @media (max-width: 400px) {\n      width: 47%;\n      .contentImage {\n        height: 10vh;\n      }\n      .contentTitle {\n        height: 60px;\n      }\n      .title,\n      .price,\n      .brand {\n        font-size: 4.5vw;\n      }\n    }\n  }\n"]);return C=function(){return n},n}function I(){var n=Object(c.a)(["\n  font-size: 2.4vw;\n  margin-top: 30px;\n  padding-left: 12px;\n  margin-bottom: -5px;\n  @media (max-width: 700px) {\n    font-size: 3.4vw;\n  }\n  @media (max-width: 400px) {\n    font-size: 4.4vw;\n  }\n"]);return I=function(){return n},n}function D(){var n=Object(c.a)(["\n  svg {\n    animation: "," 2s linear infinite;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: 500px;\n"]);return D=function(){return n},n}function R(){var n=Object(c.a)(["\n    ","\n  "]);return R=function(){return n},n}function J(){var n=Object(c.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return J=function(){return n},n}function T(){var n=Object(c.a)(["\n  background: #f36f2c;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &[disabled] {\n    cursor: not-not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return T=function(){return n},n}function U(){var n=Object(c.a)(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n     opacity: 1\n  }\n"]);return U=function(){return n},n}function A(){var n=Object(c.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n\n  to {\n     transform: rotate(360deg)\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(c.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid #f36f2c;\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return B=function(){return n},n}var M=l.c.form(B()),q=Object(l.d)(A()),K=Object(l.d)(U()),P=l.c.button.attrs((function(n){return{type:"submit",disabled:n.loading}}))(T(),(function(n){return n.loading&&Object(l.b)(J(),q)}));var H=l.c.div(D(),q),L=l.c.div(I()),W=l.c.ul(C(),function(){for(var n="",e=0;e<20;e+=1)n+="\n    .effect".concat(e," {\n      animation: .233s ease-in-out ").concat(e/13,"s 1 backwards;\n      opacity: 1;\n    }");return Object(l.b)(R(),n)}(),(function(n){return Object(l.b)(F(),K)}));function G(){var n=Object(c.a)(["\n      .cirle-rating__featured {\n        svg {\n          circle {\n            animation-name: "," !important;\n          }\n        }\n      }\n    "]);return G=function(){return n},n}function Q(){var n=Object(c.a)(["\n  ","\n  ","\n  &:hover {\n    .circle__three .circle-rating__magical-number {\n      color: #f36f2c;\n    }\n    svg {\n      circle {\n        stroke-dashoffset: 0 !important;\n        stroke: #f36f2c !important;\n      }\n    }\n  }\n  transition: 0.5s;\n  .circle-rating {\n    float: left;\n    width: 120px;\n    position: relative;\n    left: 50%;\n    margin-left: -60px;\n    margin-bottom: 30px;\n  }\n\n  .circle-rating__container {\n    position: relative;\n    top: 40px;\n  }\n\n  .circle-rating__magical-number {\n    font-size: 3.8vw;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin-top: 37px;\n    color: rgba(0, 0, 0, 0.38);\n    font-weight: 300;\n  }\n\n  .circle-rating__tittle {\n    font-weight: 900;\n    font-size: 12px;\n    display: block;\n    margin-bottom: 30px;\n  }\n\n  .circle__one,\n  .circle__two,\n  .circle__three {\n    position: absolute;\n    top: 0;\n  }\n\n  .circle-rating__description {\n    text-transform: uppercase;\n    font-size: 1.5vw;\n    width: 120px;\n    letter-spacing: 0.3px;\n    font-weight: 700;\n    text-align: center;\n    margin-bottom: 10px;\n    float: left;\n  }\n\n  .cirle-rating__simple {\n    .circle-rating__description {\n      color: rgba(0, 0, 0, 0.38);\n    }\n    svg {\n      transform: rotate(270deg);\n      circle {\n        stroke: #000;\n        opacity: 0.38;\n        stroke-dashoffset: 358.142;\n      }\n    }\n  }\n\n  .cirle-rating__featured {\n    transition: 0.233s;\n    .circle-rating__description {\n      color: #404040;\n      opacity: 0.6;\n    }\n    svg {\n      transform: rotate(270deg);\n      circle {\n        stroke: #1e88e5;\n      }\n    }\n  }\n\n  .circle-rating__background {\n    background-color: #fff;\n    opacity: 0.5;\n    width: 120px;\n    height: 120px;\n    border-radius: 50%;\n    position: relative;\n  }\n\n  .circle-rating__background.circle__one,\n  .circle-rating__background.circle__two {\n    border: 5px solid rgba(0, 0, 0, 0.38);\n  }\n\n  .circle-rating__background.circle__three {\n    border: 5px solid rgba(30, 136, 229, 0.38);\n  }\n\n  .circle__three {\n    .circle-rating__magical-number {\n      color: #1e88e5;\n    }\n  }\n\n  @media (min-width: 980px) {\n    .circle-rating__magical-number {\n      font-size: 2.5vw;\n    }\n  }\n\n  @media (max-width: 700px) {\n    .circle-rating {\n      float: left;\n      width: 120px;\n      position: relative;\n      left: 25%;\n      margin-left: 0px;\n      margin-bottom: 30px;\n    }\n    .circle-rating__description {\n      width: 73px;\n      font-size: 2.5vw;\n    }\n\n    .circle-rating__background {\n      width: 72px;\n      height: 72px;\n    }\n    .circle-rating__magical-number {\n      font-size: 3.6vw;\n      margin-top: 22px;\n      margin-left: -48px;\n    }\n    .circle__container {\n      height: 100px;\n      width: 100%;\n      svg {\n        circle {\n          r: 33;\n          cx: 84;\n          cy: 36;\n        }\n      }\n    }\n  }\n  @media (max-width: 400px) {\n    .circle-rating__magical-number {\n      font-size: 6.5vw;\n      margin-top: 22px;\n      margin-left: -48px;\n    }\n    .circle-rating__description {\n      font-size: 3.5vw;\n    }\n    .circle-rating {\n      left: 7%;\n    }\n  }\n"]);return Q=function(){return n},n}function V(){var n=Object(c.a)(["\n    ","\n  "]);return V=function(){return n},n}function X(){var n=Object(c.a)(["\n  from {\n    stroke-dashoffset: 358.142;\n  }\n\n  to {\n    stroke-dashoffset: frames;\n  }\n"]);return X=function(){return n},n}var Y=l.c.section.attrs((function(n){return{fullCircle:n.fullCircle}}))(Q(),function(){for(var n="",e=0;e<20;e+=1)n+="\n    .effectRating".concat(e," {\n      animation: .233s ease-in-out ").concat(1*e/13,"s 1 slidein;\n      stroke-dashoffset: 358.142;\n    }");return Object(l.b)(V(),n)}(),(function(n){return Object(l.b)(G(),(n.fullCircle,Object(l.d)(X())))})),Z=function(n){Object(h.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(g.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=e.call.apply(e,[this].concat(a))).state={newSearch:"",products:[],loading:!1},n.handleInputChange=function(e){n.setState({newSearch:e.target.value})},n.handleSubmit=function(){var e=Object(m.a)(d.a.mark((function e(t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n.setState({loading:!0}),e.next=4,_.get("/results");case 4:r=e.sent,n.setState({products:Object(f.a)(r.data),newSearch:"",loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),n}return Object(b.a)(t,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("products");n&&this.setState({products:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.products;e.products!==t&&localStorage.setItem("products",JSON.stringify(t))}},{key:"render",value:function(){var n=this.state,e=n.newSearch,t=n.products,r=n.loading;return a.a.createElement(y,null,a.a.createElement("h1",null,"KUANTO",a.a.createElement("strong",null,"BUSKA")),a.a.createElement(M,{onSubmit:this.handleSubmit},a.a.createElement("input",{type:"text",placeholder:"Pesquisa um produto, marca, referencia...",value:e,onChange:this.handleInputChange}),a.a.createElement(P,{loading:r},r?a.a.createElement(v.c,{color:"#FFF",size:14}):a.a.createElement(v.b,{color:"#FFF",size:14}))),0!==t.length||r?"":a.a.createElement(N,null),r?a.a.createElement(H,null,a.a.createElement(v.c,{color:"#F36F2C",size:80})):a.a.createElement(a.a.Fragment,null,a.a.createElement(L,null,0===t.length?"":"O resultado da sua ultima pesquisa foi essa"),a.a.createElement(W,null,t.map((function(n,e){return a.a.createElement("li",{key:e,className:"effect".concat(e)},a.a.createElement(v.a,{color:"#F36F2C",size:30,className:"checked"}),a.a.createElement("a",{href:"eee",alt:n.score,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("div",{className:"contentImage"},a.a.createElement("img",{src:n.image,alt:n.score})),a.a.createElement("div",{className:"contentTitle"},a.a.createElement("p",{className:"title"},n.title)),a.a.createElement(Y,{fullCircle:n.score},a.a.createElement("div",{className:"circle__container"},a.a.createElement(E,{tittle:"SCORE",progressStatus:n.score,specialClass:"cirle-rating__featured effectRating".concat(e),position:"circle__three",number:n.score})))))})))))}}]),t}(r.Component);var $=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,null),a.a.createElement(u,null))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.795b6663.chunk.js.map