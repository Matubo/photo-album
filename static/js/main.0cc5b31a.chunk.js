(this["webpackJsonpphoto-album"]=this["webpackJsonpphoto-album"]||[]).push([[0],{25:function(e,t,A){},26:function(e,t,A){},34:function(e,t,A){},35:function(e,t,A){},37:function(e,t,A){},38:function(e,t,A){},39:function(e,t,A){},40:function(e,t,A){},41:function(e,t,A){},42:function(e,t,A){"use strict";A.r(t);var r=A(2),n=A.n(r),c=A(12),a=A.n(c),s=(A(25),A(26),A(8)),u=A(10),o=A(20),i=A(6),l=A.n(i),h=A(5);var j=function(){return fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return e.length<1&&new Error("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),{error:!1,result:e}})).catch((function(e){return console.log(e),{error:!0,result:null}}))},b=l.a.mark(d);function d(e){var t,A;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.b)({type:"STARTFETCHING"});case 2:return e.next=4,Object(h.a)((function(){return j()}));case 4:if(t=e.sent,A=[],t.error){e.next=11;break}t.result.forEach((function(e){A.push({username:e.username,id:e.id})})),e.next=14;break;case 11:return e.next=13,Object(h.b)({type:"SETFETCHINGERROR"});case 13:A.push({username:"fetch error",id:"fetch error"});case 14:return e.next=16,Object(h.b)({type:"SETNEWAUTHORS",newAuthors:A});case 16:return e.next=18,Object(h.b)({type:"FINISHFETCHING"});case 18:case"end":return e.stop()}}),b)}var f=d;var g=function(e){var t;if(Array.isArray(e)){var A=e.map((function(e){return fetch("https://jsonplaceholder.typicode.com/photos?albumId=".concat(e))}));t=Promise.all(A).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){return e.length<1&&new Error("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),{error:!1,result:e}}))}else t=fetch("https://jsonplaceholder.typicode.com/photos?albumId=".concat(e)).then((function(e){return e.json()})).then((function(e){return e.length<1&&new Error("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),{error:!1,result:e}}));return t.catch((function(e){return console.log(e),{error:!0,result:null}})),t},O=l.a.mark(E);function E(e){var t,A,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(h.b)({type:"STARTFETCHING"});case 2:return n.next=4,Object(h.a)((function(){return g(e.id)}));case 4:if(t=n.sent,A=[],!t.error){n.next=12;break}return n.next=9,Object(h.b)({type:"SETFETCHINGERROR"});case 9:A.push({url:"fetch error",id:"fetch error",title:"fetch error"}),n.next=15;break;case 12:(r=t.result).forEach((function(e){A.push({url:e.url,id:e.id,title:e.title})})),console.log(r);case 15:return console.log(A),n.next=18,Object(h.b)({type:"SETNEWPHOTOS",newPhotos:A});case 18:return n.next=20,Object(h.b)({type:"SETSTAGE",newStage:3});case 20:return n.next=22,Object(h.b)({type:"FINISHFETCHING"});case 22:case"end":return n.stop()}}),O)}var p=E;var x=function(e){return fetch("https://jsonplaceholder.typicode.com/albums?userId=".concat(e)).then((function(e){return e.json()})).then((function(e){return e.length<1&&new Error("\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"),{error:!1,result:e}})).catch((function(e){return console.log(e),{error:!0,result:null}}))},m=l.a.mark(v),S=l.a.mark(N);function v(e){var t,A,r,n,c,a;return l.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=[],!e.error){s.next=7;break}return s.next=4,Object(h.b)({type:"SETFETCHINGERROR"});case 4:t.push({userId:"fetch error",id:"fetch error",url:"fetch error",title:"fetch error"}),s.next=13;break;case 7:return A=e.result,r=A.map((function(e){return e.id})),s.next=11,Object(h.a)((function(){return g(r)}));case 11:if((n=s.sent).error)t.push({userId:"fetch error",id:"fetch error",url:"fetch error",title:"fetch error"});else for(c=n.result,console.log(n),a=0;a<A.length;a++)t.push({userId:A[a].userId,id:A[a].id,title:A[a].title,url:c[a][0].thumbnailUrl,length:c[a].length});case 13:return s.abrupt("return",t);case 14:case"end":return s.stop()}}),m)}function N(e){var t,A,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.next=3,Object(h.b)({type:"STARTFETCHING"});case 3:return n.next=5,Object(h.a)((function(){return x(t)}));case 5:return A=n.sent,n.next=8,Object(h.a)((function(){return v(A)}));case 8:return r=n.sent,n.next=11,Object(h.b)({type:"SETNEWALBUMS",newAlbums:r});case 11:return n.next=13,Object(h.b)({type:"SETSTAGE",newStage:2});case 13:return n.next=15,Object(h.b)({type:"FINISHFETCHING"});case 15:case"end":return n.stop()}}),S)}var I=N,C=l.a.mark(w),T=function(e){return e.stage};function w(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.c)(T);case 2:if(!((e=t.sent)>1)){t.next=6;break}return t.next=6,Object(h.b)({type:"SETSTAGE",newStage:e-1});case 6:case"end":return t.stop()}}),C)}var B=w,F=l.a.mark(G);function G(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)("GETNEWAUTHORS",f);case 2:return e.next=4,Object(h.d)("GETNEWALBUMS",I);case 4:return e.next=6,Object(h.d)("GETNEWPHOTOS",p);case 6:return e.next=8,Object(h.d)("SETPREVIOUSSTAGE",B);case 8:case"end":return e.stop()}}),F)}var y=G;var H=Object(o.a)(),R=Object(u.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{stage:1,albums:null,authors:null,photos:null,fetching:!0,fetchingError:!1},t=arguments.length>1?arguments[1]:void 0;return"STARTFETCHING"==t.type?Object(s.a)(Object(s.a)({},e),{},{fetching:!0,fetchingError:!1}):"SETFETCHINGERROR"==t.type?Object(s.a)(Object(s.a)({},e),{},{fetchingError:!0}):"FINISHFETCHING"==t.type?Object(s.a)(Object(s.a)({},e),{},{fetching:!1}):"SETNEWALBUMS"==t.type?Object(s.a)(Object(s.a)({},e),{},{albums:t.newAlbums}):"GETNEWALBUMS"==t.type?e:"SETNEWAUTHORS"==t.type?Object(s.a)(Object(s.a)({},e),{},{authors:t.newAuthors}):"GETNEWAUTHORS"==t.type?e:"SETNEWPHOTOS"==t.type?Object(s.a)(Object(s.a)({},e),{},{photos:t.newPhotos}):"GETNEWPHOTOS"==t.type?e:"SETSTAGE"==t.type?Object(s.a)(Object(s.a)({},e),{},{stage:t.newStage}):e}),Object(u.a)(H));H.run(y);var k=R,P=A(19),U=(A(34),A(35),A(1));var W=function(e){var t=e.name,A=e.setPreviousStage;return Object(U.jsxs)("div",{className:"content_heading",children:[Object(U.jsx)("div",{className:"content_heading_name",children:t}),Object(U.jsx)("img",{className:"content_heading_button back_button",src:"data:image/png;base64,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",onClick:function(){A()},alt:"Houston, we have a problem"})]})};A(37);var Y=function(e){var t=e.callback,A=e.authorId,r=e.author;return Object(U.jsx)("div",{className:"card",onClick:function(){t(A)},children:Object(U.jsx)("p",{className:"card__author-name",children:r})})};var D=function(e){var t=e.fetching,A=e.authors,r=e.setNextStage;return t?Object(U.jsx)("div",{className:"preloader",children:"\u041e\u0436\u0438\u0434\u0430\u0439\u0442\u0435"}):function(e,t){for(var A=[],r=0;r<e.length;r++)A.push(Object(U.jsx)(Y,{author:e[r].username,authorId:e[r].id,callback:t}));return A}(A,r)};A(38);var M=function(e){var t=e.length,A=e.callback,r=e.url,n=e.id,c=e.title;return Object(U.jsxs)("div",{className:"card photo_card",children:[t?Object(U.jsx)("div",{className:"card__length",children:t}):Object(U.jsx)(U.Fragment,{}),Object(U.jsx)("div",{className:t?"card__img card__img-active":"card__img",style:{backgroundImage:"url(".concat(r,")")},onClick:function(){A(n)}}),Object(U.jsx)("p",{className:"card__title",title:c,children:c})]})};var L=function(e){return function(e,t){for(var A=[],r=0;r<e.length;r++)A.push(Object(U.jsx)(M,{id:e[r].id,url:e[r].url,title:e[r].title,callback:t,length:e[r].length}));return A}(e.albums,e.setNextStage)},V=A(11),Q=(A(39),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAOaAAADmgHumOXVAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAP9QTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfOnhEQAAAFR0Uk5TAAUGCAkMDQ4PFBYXGSAiKC4yMzQ1Njg8PT4/QEFCSkxNU1VWZWx1fYCBhouMkpWWn6Kmp6iyt7m6vL3ExcfI0tPV2t/g5+nq7u/w8fLz9PX6/P3+u6bzrAAAAT5JREFUeNrtztk6QgEAxPHhnCIiUvYla9n3PYWyhzDv/ywu+rijq5rzfWfmAeb3B9puZLvcuNlfhmg9pSZJksdpiR9e8Gd3GYV/TioLgjNSWRCcktKCQ1JasEhKC4J7agvGSW3BKsUFRYoLFiguGPxSF+xQXJCoqwvyzy5wgQtc4ILoFORc4AIAuScXuCAKBWMucIELXBCZgqwLkH10gQtc4ILWRl3ggjYFt6G6YAvigs+0uqAAcUGpOwETr38FFMU+58V+c0Drc70L/uQ//nWv1q8P2bffYf/NvtKfsm/ffmz9afv27dsX+TPv9u3bj6s/a9++ffsx9VMPWh8HYn9Y7GNJ7GND7GNN7GNO7KP/ResDK2IfOBH7SFxqfSBZ1vpA8krrA32VX7+m8IFw86PlH6UgWn630qjuFTr0/g3DHj7d53+cVAAAAABJRU5ErkJggg==");A(40);function q(e){var t=e.callback,A=Object(r.useState)({right:"0px"}),n=Object(V.a)(A,2),c=n[0],a=n[1];function s(){var e=window.innerWidth-document.body.clientWidth+"px";a({right:e})}return Object(r.useEffect)((function(){s()}),[]),window.onresize=function(){s()},Object(U.jsx)("div",{className:"next_button",style:c,onClick:t,children:Object(U.jsx)("img",{src:Q,alt:"->"})})}function X(e){return Object(U.jsx)("div",{className:"previous_button",onClick:e.callback,children:Object(U.jsx)("img",{src:Q,alt:"<-"})})}var z=function(e){var t=e.id,A=e.photos,n=e.changePopUPStatus,c=Object(r.useState)(t),a=Object(V.a)(c,2),s=a[0],u=a[1];function o(){s<A.length-1?u(s+1):u(0)}return Object(U.jsxs)("div",{className:"carousel_body",onClick:function(e){"carousel_body"==e.target.className&&n()},children:[Object(U.jsx)("img",{src:A[s].url,className:"carousel_element",onClick:o,alt:"error"}),Object(U.jsx)(q,{callback:o}),Object(U.jsx)(X,{callback:function(){u(s>0?s-1:A.length-1)}}),Object(U.jsx)("p",{className:"carousel_title",children:A[s].title})]})};function J(e,t){for(var A=[],r=0;r<e.length;r++)A.push(Object(U.jsx)(M,{url:e[r].url,id:r,title:e[r].title,callback:t}));return A}var Z=function(e){var t=e.photos,A=Object(r.useState)({displayed:!1,id:0}),n=Object(V.a)(A,2),c=n[0],a=n[1];function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;0==c.displayed?a({displayed:!0,id:e}):a({displayed:!1,id:0})}return Object(U.jsxs)(U.Fragment,{children:[J(t,s),c.displayed?Object(U.jsx)(z,{changePopUPStatus:s,photos:t,id:c.id}):Object(U.jsx)(U.Fragment,{})]})},K=A.p+"static/media/preloader.44d44c61.png";var _=Object(P.a)((function(e){return{stage:e.stage,authors:e.authors,albums:e.albums,photos:e.photos,fetching:e.fetching}}),(function(e){return{setPhotoStage:function(t){return e({type:"GETNEWPHOTOS",id:t})},setAlbumsStage:function(t){return e({type:"GETNEWALBUMS",id:t})},setAuthorsStage:function(){return e({type:"GETNEWAUTHORS"})},setPreviousStage:function(){return e({type:"SETPREVIOUSSTAGE"})}}}))((function(e){var t=e.stage,A=e.fetching,n=e.authors,c=e.albums,a=e.photos,s=e.setAuthorsStage,u=e.setPhotoStage,o=e.setAlbumsStage,i=e.setPreviousStage;return Object(r.useEffect)((function(){s()}),[]),A?Object(U.jsx)("div",{className:"preloader",children:Object(U.jsx)("img",{src:K,className:"preloader_img",alt:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):1==t?Object(U.jsx)("div",{className:"card_container",children:Object(U.jsx)(D,{authors:n,setNextStage:o})}):2==t?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W,{setPreviousStage:i,name:"Albums"}),Object(U.jsx)("div",{className:"card_container",children:Object(U.jsx)(L,{albums:c,setNextStage:u})})]}):3==t?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(W,{setPreviousStage:i,name:"Photos"}),Object(U.jsx)("div",{className:"card_container",children:Object(U.jsx)(Z,{photos:a})})]}):void 0}));A(41);var $=function(){return Object(U.jsxs)("div",{className:"main",children:[Object(U.jsx)("div",{className:"main_heading",children:Object(U.jsx)("p",{className:"main_heading_name",children:"Gallery"})}),Object(U.jsx)(_,{store:k})]})};var ee=function(){return Object(U.jsx)($,{})},te=function(e){e&&e instanceof Function&&A.e(3).then(A.bind(null,43)).then((function(t){var A=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,a=t.getTTFB;A(e),r(e),n(e),c(e),a(e)}))};a.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(ee,{})}),document.getElementById("root")),te()}},[[42,1,2]]]);
//# sourceMappingURL=main.0cc5b31a.chunk.js.map