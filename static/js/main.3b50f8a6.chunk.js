(this.webpackJsonpnew=this.webpackJsonpnew||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/github.1420ade8.svg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.078c4268.svg"},function(e,t,a){e.exports=a.p+"static/media/mail.459eda33.svg"},function(e,t,a){e.exports=a.p+"static/media/deer-dark.65d2f4fe.svg"},function(e,t,a){e.exports=a.p+"static/media/deer-light.fcce71fc.svg"},,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var l=a(0),r=a.n(l),o=a(9),n=a.n(o),c=(a(21),a(22),a(2)),i=a(3),s=a(5),m=a(4),d=a(1),h=a(6),u=(a(23),a(10)),p=a.n(u),v=a(11),b=a.n(v),g=a(12),f=a.n(g),E=a(13),C=a.n(E),_=a(14),w=a.n(_),F=a(7),P=(a(24),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).drawHills=a.drawHills.bind(Object(d.a)(a)),a.clearHills=a.clearHills.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"drawHills",value:function(){var e=this.refs.canvas,t=e.getContext("2d");t.beginPath(),t.moveTo(0,300),Object(F.seed)(Math.random());for(var a=0;a<e.width;a++){var l=Math.abs(Object(F.perlin2)(a/60,e.height/90));t.lineTo(a,e.height-80*l-150)}t.lineTo(e.width,300),t.closePath();var r=t.createLinearGradient(0,0,0,300);r.addColorStop(0,this.props.topColor),r.addColorStop(1,this.props.bottomColor),t.fillStyle=r,t.fill()}},{key:"clearHills",value:function(){var e=this.refs.canvas;e.getContext("2d").clearRect(0,0,e.width,e.height)}},{key:"componentDidMount",value:function(){this.drawHills()}},{key:"componentDidUpdate",value:function(){this.clearHills(),this.drawHills()}},{key:"render",value:function(){return r.a.createElement("canvas",{className:"canvas",ref:"canvas",width:"1600px",height:"300px"})}}]),t}(l.Component)),y=a(15),x=a.n(y),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).generatePalette=a.generatePalette.bind(Object(d.a)(a)),a.getNewPalette=a.getNewPalette.bind(Object(d.a)(a)),a.state={colorPalette:a.generatePalette()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"getNewPalette",value:function(){var e=this.generatePalette();this.setState({colorPalette:e})}},{key:"generatePalette",value:function(){var e=["tol-sq","cb-Blues","cb-BuGn","cb-BuPu","cb-Greens","cb-Greys","cb-OrRd","cb-PuBu","cb-PuBuGn","cb-PuRd","cb-Purples","cb-RdPu","cb-Reds","cb-YlGn","cb-YlGnBu","cb-YlOrBr","cb-YlOrRd"],t=Math.floor(Math.random()*e.length);console.log(t);var a=x()(e[t],7);return a=a.map((function(e){return"#"+e}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"parallax",style:{background:"linear-gradient(180deg, ".concat(this.state.colorPalette[0]," 0%, #FEFEFE 60.42%)")}},r.a.createElement("div",{className:"top-bar"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("a",{className:"logo",onClick:this.getNewPalette},r.a.createElement("svg",{width:"62",height:"62",viewBox:"0 0 62 62",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"31",cy:"31",r:"31",fill:"#1C2741"}),r.a.createElement("path",{d:"M25.7203 11.7775L19.0617 48.7491C18.9681 49.2689 19.3639 49.7481 19.8919 49.7544L25.1539 49.8175C25.5495 49.8222 25.8966 49.5546 25.9926 49.1707L29.696 34.3638C29.8865 33.6023 30.9172 33.4796 31.2812 34.1751L39.22 49.3468C39.3673 49.6283 39.6587 49.8048 39.9765 49.8049L45.3892 49.8059C46.0238 49.806 46.4368 49.1384 46.1535 48.5706L37.0203 30.264C36.8687 29.9601 36.9115 29.5953 37.1294 29.3348L51.2284 12.4811C51.6934 11.9253 51.2983 11.0793 50.5735 11.0792L44.3638 11.0781C44.1104 11.078 43.87 11.1905 43.7077 11.3851L33.1453 24.0511C32.5747 24.7354 31.469 24.1983 31.6541 23.3268L34.0373 12.1054C34.1502 11.5741 33.745 11.0739 33.2019 11.074L26.5607 11.0748C26.1475 11.0749 25.7936 11.3708 25.7203 11.7775Z",fill:this.state.colorPalette[5]}),r.a.createElement("path",{d:"M19.7423 11.7775L13.0836 48.7491C12.99 49.2689 13.3858 49.7481 13.9139 49.7544L19.1759 49.8175C19.5715 49.8222 19.9186 49.5546 20.0146 49.1707L23.718 34.3638C23.9085 33.6023 24.9392 33.4796 25.3031 34.1751L33.2419 49.3468C33.3892 49.6283 33.6807 49.8048 33.9984 49.8049L39.4112 49.8059C40.0458 49.806 40.4588 49.1384 40.1755 48.5706L31.0422 30.264C30.8906 29.9601 30.9335 29.5953 31.1514 29.3348L45.2504 12.4811C45.7154 11.9253 45.3202 11.0793 44.5955 11.0792L38.3857 11.0781C38.1323 11.078 37.892 11.1905 37.7297 11.3851L27.1673 24.0511C26.5967 24.7354 25.491 24.1983 25.6761 23.3268L28.0593 12.1054C28.1721 11.5741 27.7669 11.0739 27.2238 11.074L20.5827 11.0748C20.1695 11.0749 19.8156 11.3708 19.7423 11.7775Z",fill:"white"}))),r.a.createElement("div",{className:"logo-prompt",style:{color:this.state.colorPalette[6]}},"click me ^")),r.a.createElement("a",{href:"#about",className:"about-nav",style:{color:this.state.colorPalette[6]}},"About")),r.a.createElement("div",{className:"parallax__layer parallax__layer__1"},r.a.createElement(P,{topColor:this.state.colorPalette[1],bottomColor:"#FFFFFF"})),r.a.createElement("div",{className:"parallax__layer parallax__layer__2"},r.a.createElement(P,{topColor:this.state.colorPalette[2],bottomColor:"#FFFFFF"})),r.a.createElement("div",{className:"parallax__layer parallax__layer__3"},r.a.createElement(P,{topColor:this.state.colorPalette[3],bottomColor:"#FFFFFF"})),r.a.createElement("div",{className:"parallax__layer parallax__layer__4"},r.a.createElement(P,{topColor:this.state.colorPalette[4],bottomColor:"#FFFFFF"})),r.a.createElement("div",{className:"parallax__layer parallax__layer__5"},r.a.createElement(P,{topColor:this.state.colorPalette[5],bottomColor:"#FFFFFF"})),r.a.createElement("div",{className:"parallax__layer parallax__layer__6"},r.a.createElement(P,{topColor:this.state.colorPalette[6],bottomColor:this.state.colorPalette[6]})),r.a.createElement("div",{className:"parallax__cover",style:{background:this.state.colorPalette[6]}},r.a.createElement("div",{className:"scroll"},"Scroll \u2193"),r.a.createElement("div",{className:"about-container",id:"about"},r.a.createElement("div",{className:"about-info"},r.a.createElement("div",{className:"introduction"},r.a.createElement("div",null,"I\u2019m Kate Miller, a software developer living in California."),r.a.createElement("div",null,"I\u2019m interested in design and using technology for social good.")),r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://github.com/katekaho"},r.a.createElement("img",{src:p.a,alt:"github-icon"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/katekaho/"},r.a.createElement("img",{src:b.a,alt:"linkedin-icon"})),r.a.createElement("a",{href:"mailto:kat3miller@gmail.com"},r.a.createElement("img",{src:f.a,alt:"mail-icon"})))),r.a.createElement("div",{className:"deer-icon"},r.a.createElement("img",{src:w.a,alt:"deer-icon"}),r.a.createElement("img",{src:C.a,alt:"deer-icon"})))))}}]),t}(l.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"}),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[16,1,2]]]);
//# sourceMappingURL=main.3b50f8a6.chunk.js.map