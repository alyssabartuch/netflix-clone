(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{25:function(e,t,n){e.exports=n(67)},30:function(e,t,n){},31:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(18),r=n.n(c),i=(n(30),n(3));n(31);var l=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?c(!0):c(!1)})),function(){window.removeEventListener("scroll")}}),[]),o.a.createElement("div",{className:"nav ".concat(n&&"nav__black")},o.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png",alt:"Netflix Logo"}),o.a.createElement("img",{className:"nav__avatar",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRmX1IYrleu5pZkTWvD6cBrp4E0knysir8f-A&usqp=CAU",alt:"Avatar Logo"}))},s=n(4),u=n.n(s),m=n(24),v=n(7),d=n(19),f=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),h="1c76fc1f888b473ffbc87e630784a7b8",p={fetchTrending:"/trending/all/week?api_key=".concat(h,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(h,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(h,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(h,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(h,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(h,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(h,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(h,"&with_genres=99")};n(49);var g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){return(e=Object(v.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(p.fetchNetflixOriginals);case 2:return t=e.sent,n=Object(m.a)(t.data.results),c(n[Math.floor(Math.random()*n.length-1)]),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("'.concat(k).concat(null===n||void 0===n?void 0:n.backdrop_path,'")'),backgroundPosition:"center center"}},o.a.createElement("div",{className:"banner__contents"},o.a.createElement("h1",{className:"banner__title"},(null===n||void 0===n?void 0:n.title)||(null===n||void 0===n?void 0:n.name)||(null===n||void 0===n?void 0:n.original_name)),o.a.createElement("div",{className:"banner__buttons"},o.a.createElement("button",{className:"banner__button"},"Play"),o.a.createElement("button",{className:"banner__button"},"My List")),o.a.createElement("h1",{className:"banner__description"},y(null===n||void 0===n?void 0:n.overview,150))),o.a.createElement("div",{className:"banner--fadeBottom"}))},_=(n(50),n(20)),b=n(23),w=n.n(b);var E=function(e){var t=e.title,n=e.fetchUrl,c=e.isLargeRow,r=Object(a.useState)([]),l=Object(i.a)(r,2),s=l[0],m=l[1],d=Object(a.useState)(""),h=Object(i.a)(d,2),p=h[0],g=h[1];return Object(a.useEffect)((function(){function e(){return(e=Object(v.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(n);case 2:return t=e.sent,m(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,t),o.a.createElement("div",{className:"row__posters"},s.map((function(e){return o.a.createElement("img",{className:"row__poster ".concat(c&&"row__posterLarge"),key:e.id,onClick:function(){return function(e){console.log((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)),p?g(""):w()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.original_name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);console.log(t),console.log(t.get("v")),g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},src:"".concat(k).concat(c?e.poster_path:e.backdrop_path),alt:e.name})}))),p&&o.a.createElement(_.a,{videoId:p,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))},k=(n(66),"https://image.tmdb.org/t/p/original/"),y=function(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.slice(0,t)+"...":e};var N=function(){return o.a.createElement("div",{className:"app"},o.a.createElement(l,null),o.a.createElement(g,null),o.a.createElement(E,{title:"NETFLIX ORIGINALS",fetchUrl:p.fetchNetflixOriginals,isLargeRow:!0}),o.a.createElement(E,{title:"Trending Now",fetchUrl:p.fetchTrending}),o.a.createElement(E,{title:"Top Rated",fetchUrl:p.fetchTopRated}),o.a.createElement(E,{title:"Action Movies",fetchUrl:p.fetchActionMovies}),o.a.createElement(E,{title:"Comedy Movies",fetchUrl:p.fetchComedyMovies}),o.a.createElement(E,{title:"Horror Movies",fetchUrl:p.fetchHorrorMovies}),o.a.createElement(E,{title:"Romance Movies",fetchUrl:p.fetchRomanceMovies}),o.a.createElement(E,{title:"Documentaries",fetchUrl:p.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.b0fc239e.chunk.js.map