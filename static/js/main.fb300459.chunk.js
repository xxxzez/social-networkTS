(this["webpackJsonpmatvei-bohush-social-network"]=this["webpackJsonpmatvei-bohush-social-network"]||[]).push([[0],{106:function(e,t,n){e.exports={paginator:"Paginator_paginator__1bMch",pageNumber:"Paginator_pageNumber__qoH2T",selectedPage:"Paginator_selectedPage__xmQj0"}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return O})),n.d(t,"d",(function(){return P}));var a=n(67),r=n(8),c=n(12),o=n.n(c),u=n(23),i=n(50),s=n(41),l=n(19),f=function(e){return l.c.get("profile/".concat(e)).then((function(e){return e.data}))},p=function(e){return l.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},m=function(e){return l.c.put("profile/status",{status:e}).then((function(e){return e.data}))},d=function(e){var t=new FormData;return t.append("image",e),l.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},g=function(e){return l.c.put("profile",e).then((function(e){return e.data}))},h={addPost:function(e){return{type:"ADD-POST",newPostBody:e}},deletePost:function(e){return{type:"DELETE-POST",postId:e}},setStatus:function(e){return{type:"SET-STATUS",status:e}},setUserProfile:function(e){return{type:"SET-USER-PROFILE",profile:e}},savePhotoSuccess:function(e){return{type:"SAVE-PHOTO-SUCCESS",photos:e}}},E=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:a=t.sent,n(h.setUserProfile(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:a=t.sent,n(h.setStatus(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:0===t.sent.resultCode&&n(h.setStatus(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Cant update your status");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:0===(a=t.sent).resultCode&&n(h.savePhotoSuccess(a.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.id,t.next=3,g(e);case 3:if(0!==(c=t.sent).resultCode){t.next=12;break}if(null===r){t.next=9;break}n(E(r)),t.next=10;break;case 9:throw new Error("userId cant be null");case 10:t.next=14;break;case 12:return n(Object(i.a)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},w={posts:[],status:"",profile:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return""===t.newPostBody.trim()?e:Object(r.a)(Object(r.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[{id:Object(s.a)(),message:t.newPostBody,likesCount:0}])});case"DELETE-POST":return Object(r.a)(Object(r.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET-USER-PROFILE":return Object(r.a)(Object(r.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(r.a)(Object(r.a)({},e),{},{status:t.status});case"SAVE-PHOTO-SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{profile:Object(r.a)(Object(r.a)({},e.profile),{},{photos:t.photos})});default:return e}}},149:function(e,t,n){e.exports=n.p+"static/media/profilePicture.aa14e9c2.png"},150:function(e,t){e.exports="data:image/jpeg;base64,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"},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var a=n(67),r=n(8),c=n(41),o={addNewMessage:function(e){return{type:"SEND-MESSAGE",newMessageBody:e}}},u={dialogs:[{id:Object(c.a)(),name:"Dashiki"},{id:Object(c.a)(),name:"Tommy"},{id:Object(c.a)(),name:"Vlad"},{id:Object(c.a)(),name:"Igor"}],messages:[{id:Object(c.a)(),message:"Whats going on"},{id:Object(c.a)(),message:"Hello amigo"},{id:Object(c.a)(),message:"My last message"},{id:Object(c.a)(),message:"Miss me?"},{id:Object(c.a)(),message:"See u tomorrow"}]},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:Object(c.a)(),message:n}])});default:return e}}},174:function(e,t,n){},183:function(e,t,n){e.exports={settings:"Settings_settings__3U6ep"}},184:function(e,t,n){e.exports={news:"News_news__2L27l"}},185:function(e,t,n){e.exports={login:"Header_login__3V3Qa"}},19:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a,r,c=n(189),o=n.n(c).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"09428775-ee37-4314-b1ba-564d5848e89a"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(a||(a={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(r||(r={}))},226:function(e,t,n){e.exports=n(353)},231:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(231);var u=n(55),i=n(88),s=n(58),l=n(57),f=n(402),p=n(355),m=n(389),d=n(390),g=n(391),h=n(392),E=n(393),b=n(394),v=n(34),j=n(174),O=n.n(j),w=n(175),P=n.n(w),S=n(179),A=n.n(S),C=n(181),y=n.n(C),k=n(180),U=n.n(k),T=n(182),x=n.n(T),L=r.a.memo((function(e){return r.a.createElement("div",{className:O.a.item},r.a.createElement(p.a,{button:!0,key:e.title},r.a.createElement(m.a,null,function(e){switch(e){case"Profile":return r.a.createElement(P.a,null);case"Messages":return r.a.createElement(A.a,null);case"News feed":return r.a.createElement(U.a,null);case"Settings":return r.a.createElement(y.a,null);case"Users":return r.a.createElement(x.a,null)}}(e.title)),r.a.createElement(d.a,{component:v.b,to:e.link},r.a.createElement(g.a,{primary:e.title}))))})),z=r.a.memo((function(){return r.a.createElement(h.a,{item:!0,xs:2},r.a.createElement(E.a,null,r.a.createElement(L,{link:"/profile",title:"Profile"}),r.a.createElement(b.a,null),r.a.createElement(L,{link:"/messages",title:"Messages"}),r.a.createElement(b.a,null),r.a.createElement(L,{link:"/news",title:"News feed"}),r.a.createElement(b.a,null),r.a.createElement(L,{link:"/users",title:"Users"}),r.a.createElement(b.a,null),r.a.createElement(L,{link:"/settings",title:"Settings"})))})),I=n(183),N=n.n(I),D=function(){return r.a.createElement("div",{className:N.a.settings},r.a.createElement("h1",null,"Settings"))},M=n(17),X=n(184),R=n.n(X),F=function(){return r.a.createElement("div",{className:R.a.news},r.a.createElement("h1",null,"News"))},_=n(73),H=n(40),W=n(395),G=n(405),q=n(20),J=n(399),Z=n(400),Y=n(397),V=n(87),B=n(404),Q=n(398),K=n(396),$=n(403),ee=n(186),te=n.n(ee),ne=n(187),ae=n.n(ne),re=n(129),ce=n.n(re),oe=n(127),ue=n.n(oe),ie=n(128),se=n.n(ie),le=n(188),fe=n.n(le),pe=n(185),me=n.n(pe),de=n(401),ge=Object(W.a)((function(e){return Object(G.a)({grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(H.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(H.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(H.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(H.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(H.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})})})),he=function(e){var t=ge(),n=r.a.useState(null),a=Object(_.a)(n,2),c=a[0],o=a[1],u=r.a.useState(null),i=Object(_.a)(u,2),s=i[0],l=i[1],f=Boolean(c),p=Boolean(s),m=function(e){o(e.currentTarget)},d=function(){l(null)},g=function(){o(null),d()},h="primary-search-account-menu",E=r.a.createElement($.a,{anchorEl:c,anchorOrigin:{vertical:"top",horizontal:"right"},id:h,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:g},r.a.createElement(K.a,{onClick:g},"Profile"),r.a.createElement(K.a,{onClick:g},"My account")),b=r.a.createElement($.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:d},r.a.createElement(K.a,null,r.a.createElement(Y.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(Q.a,{badgeContent:4,color:"secondary"},r.a.createElement(ue.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(K.a,null,r.a.createElement(Y.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(Q.a,{badgeContent:11,color:"secondary"},r.a.createElement(se.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(K.a,{onClick:m},r.a.createElement(Y.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(ce.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:t.grow},r.a.createElement(J.a,{position:"static"},r.a.createElement(Z.a,null,r.a.createElement(Y.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(te.a,null)),r.a.createElement(V.a,{className:t.title,variant:"h6",noWrap:!0},"Gucci squad"),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(ae.a,null)),r.a.createElement(B.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:me.a.login},e.isAuth?r.a.createElement("span",null,"".concat(e.login," ").concat(e.email),r.a.createElement(de.a,{variant:"contained",color:"primary",onClick:e.logout},"Log out")):r.a.createElement(v.b,{to:"/login"},"Login")),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},r.a.createElement(Y.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(Q.a,{badgeContent:4,color:"secondary"},r.a.createElement(ue.a,null))),r.a.createElement(Y.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(Q.a,{badgeContent:17,color:"secondary"},r.a.createElement(se.a,null))),r.a.createElement(Y.a,{edge:"end","aria-label":"account of current user","aria-controls":h,"aria-haspopup":"true",onClick:m,color:"inherit"},r.a.createElement(ce.a,null))),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(Y.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(fe.a,null))))),b,E)},Ee=n(12),be=n.n(Ee),ve=n(23),je=n(8),Oe=n(19),we=n(50),Pe=function(){return Oe.c.get("auth/me").then((function(e){return e.data}))},Se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Oe.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a}).then((function(e){return e.data}))},Ae=function(){return Oe.c.delete("auth/login")},Ce=function(){return Oe.c.get("security/get-captcha-url").then((function(e){return e.data}))},ye={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},ke=function(e,t,n,a){return{type:"SET-USER-DATA",payload:{id:e,email:t,login:n,isAuth:a}}},Ue=function(e){return{type:"GET-CAPTCHA-URL-SUCCESS",payload:{captchaUrl:e}}},Te=function(){return function(){var e=Object(ve.a)(be.a.mark((function e(t){var n,a,r,c,o;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pe();case 2:(n=e.sent).resultCode===Oe.b.Success&&(a=n.data,r=a.id,c=a.login,o=a.email,t(ke(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},xe=function(){return function(){var e=Object(ve.a)(be.a.mark((function e(t){var n,a;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ce();case 2:n=e.sent,a=n.url,t(Ue(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Le=n(25),ze=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(he,this.props)}}]),n}(r.a.Component),Ie=Object(Le.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,email:e.auth.email}}),{logout:function(){return function(){var e=Object(ve.a)(be.a.mark((function e(t){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae();case 2:0===e.sent.data.resultCode&&t(ke(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ze),Ne=n(15),De=n(67),Me=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(je.a)(Object(je.a)({},e),a):e}))},Xe={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Oe.c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return Oe.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return Oe.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},Re={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Fe=function(e){return{type:"FOLLOW",userId:e}},_e=function(e){return{type:"UNFOLLOW",userId:e}},He=function(e){return{type:"SET-USERS",users:e}},We=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},Ge=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalUsersCount:e}},qe=function(e){return{type:"SET-TOGGLE-IS-FETCHING",isFetching:e}},Je=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},Ze=function(){var e=Object(ve.a)(be.a.mark((function e(t,n,a,r){return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Je(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(Je(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),Ye=n(191),Ve=function(e){return e.usersPage.totalUsersCount},Be=function(e){return e.usersPage.pageSize},Qe=function(e){return e.usersPage.currentPage},Ke=Object(Ye.a)((function(e){return e.usersPage.users}),(function(e){return e})),$e=function(e){return e.usersPage.isFetching},et=function(e){return e.usersPage.followingInProgress},tt=n(62),nt=n(74),at=n(82),rt=n.n(at),ct=n(192),ot=n.n(ct),ut=n(106),it=n.n(ut),st=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,u=e.portionSize,i=void 0===u?10:u,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),m=Object(a.useState)(1),d=Object(_.a)(m,2),g=d[0],h=d[1],E=(g-1)*i+1,b=g*i;return r.a.createElement("div",{className:it.a.paginator},g>1&&r.a.createElement(de.a,{onClick:function(){h(g-1)}},"Prev"),l.filter((function(e){return e>=E&&e<=b})).map((function(e){return r.a.createElement(de.a,{variant:"outlined",className:ot()(Object(H.a)({},it.a.selectedPage,c===e),it.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),p>g&&r.a.createElement(de.a,{onClick:function(){h(g+1)}},"Next"))},lt=n(149),ft=n.n(lt),pt=n(150),mt=n.n(pt),dt=function(e){var t=e.user,n=e.followingInProgress,a=e.follow,c=e.unfollow;return r.a.createElement("div",{className:rt.a.card,key:t.id},r.a.createElement(v.b,{to:"/profile/"+t.id},r.a.createElement("div",{className:rt.a.userPhoto},r.a.createElement("img",{src:null!==t.photos.small?t.photos.small:ft.a,alt:"ProfileImage",width:"100px"}))),r.a.createElement("h3",null,t.name),r.a.createElement("h4",null,t.status),r.a.createElement("h5",null,"Vancouver, Canada ",r.a.createElement("img",{src:mt.a,alt:"",width:"30px"})),r.a.createElement("p",null,t.followed?r.a.createElement(de.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Unfollow"):r.a.createElement(de.a,{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow")))},gt=function(e){for(var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,o=e.users,u=Object(nt.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]),i=Math.ceil(n/a),s=[],l=1;l<=i;l++)s.push(l);return r.a.createElement(h.a,{item:!0,xs:2},r.a.createElement("div",null,r.a.createElement(st,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a})),r.a.createElement("div",{className:rt.a.userCards},o.map((function(e){return r.a.createElement(dt,{key:e.id,user:e,follow:u.follow,unfollow:u.unfollow,followingInProgress:u.followingInProgress})}))))},ht=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){var t=e.props,n=t.currentPage,a=t.pageSize;e.props.requestUsers(n,a)},e.onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e.render=function(){return r.a.createElement(r.a.Fragment,null,e.props.isFetching?r.a.createElement(tt.a,null):r.a.createElement(gt,{totalUsersCount:e.props.totalUsersCount,pageSize:e.props.pageSize,currentPage:e.props.currentPage,users:e.props.users,onPageChanged:e.onPageChanged,follow:e.props.follow,unfollow:e.props.unfollow,followingInProgress:e.props.followingInProgress}))},e}return n}(r.a.Component),Et=We,bt=Je,vt=Object(Ne.compose)(Object(Le.b)((function(e){return{users:Ke(e),pageSize:Be(e),totalUsersCount:Ve(e),currentPage:Qe(e),isFetching:$e(e),followingInProgress:et(e)}}),{follow:function(e){return function(){var t=Object(ve.a)(be.a.mark((function t(n){return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ze(n,e,Xe.follow.bind(Xe),Fe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(ve.a)(be.a.mark((function t(n){return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Ze(n,e,Xe.unfollow.bind(Xe),_e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Et,toggleFollowingProgress:bt,requestUsers:function(e,t){return function(){var n=Object(ve.a)(be.a.mark((function n(a){var r;return be.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(qe(!0)),a(We(e)),n.next=4,Xe.getUsers(e,t);case 4:r=n.sent,a(qe(!1)),a(He(r.items)),a(Ge(r.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ht),jt=n(172),Ot=n(99),wt=n(44),Pt=n(83),St=n.n(Pt),At=Object(jt.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(wt.c)("Email","email",[Ot.b],wt.a),Object(wt.c)("Password","password",[Ot.b],wt.a,{type:"password"}),Object(wt.c)(void 0,"rememberMe",[],wt.a,{type:"checkbox"},"Remember"),a&&r.a.createElement("img",{src:a,alt:""}),a&&Object(wt.c)("Symbols from image","captcha",[Ot.b],wt.a,{}),n&&r.a.createElement("div",{className:St.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Ct=Object(Le.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n,a){return function(){var r=Object(ve.a)(be.a.mark((function r(c){var o,u;return be.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Se(e,t,n,a);case 2:(o=r.sent).resultCode===Oe.b.Success?c(Te()):(o.resultCode===Oe.a.CaptchaIsRequired&&c(xe()),u=o.messages.length>0?o.messages[0]:"Some error",c(Object(we.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(M.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(At,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),yt={initialized:!1},kt=function(){return{type:"INITIALIZED-SUCCESS"}},Ut=function(e){return function(t){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(tt.a,null)},r.a.createElement(e,t))}},Tt=r.a.lazy((function(){return n.e(3).then(n.bind(null,416))})),xt=r.a.lazy((function(){return n.e(4).then(n.bind(null,417))})),Lt=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){console.error(e)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",null,r.a.createElement(f.a,null),r.a.createElement(Ie,null),r.a.createElement(h.a,{container:!0},r.a.createElement(z,null),r.a.createElement(h.a,{item:!0,xs:10},r.a.createElement(M.d,null,r.a.createElement(M.b,{exact:!0,path:"/",render:function(){return r.a.createElement(M.a,{to:"/profile"})}}),r.a.createElement(M.b,{path:"/profile/:userId?",render:Ut(Tt)}),r.a.createElement(M.b,{path:"/messages",render:Ut(xt)}),r.a.createElement(M.b,{path:"/users",render:function(){return r.a.createElement(vt,null)}}),r.a.createElement(M.b,{path:"/news",render:function(){return r.a.createElement(F,null)}}),r.a.createElement(M.b,{path:"/settings",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(M.b,{path:"/login",render:function(){return r.a.createElement(Ct,null)}}),r.a.createElement(M.b,{path:"*",render:function(){return r.a.createElement("h2",null,"404 NOT FOUND")}}))))):r.a.createElement(tt.a,null)}}]),n}(r.a.Component),zt=Object(Ne.compose)(M.g,Object(Le.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Te());Promise.all([t]).then((function(){e(kt())}))}}}))(Lt),It=n(135),Nt=n(171),Dt=n(194),Mt=n(173),Xt=n(195),Rt=Object(Ne.combineReducers)({profilePage:It.d,dialogsPage:Nt.b,usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(je.a)(Object(je.a)({},e),{},{users:Me(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(je.a)(Object(je.a)({},e),{},{users:Me(e.users,t.userId,"id",{followed:!1})});case"SET-USERS":return Object(je.a)(Object(je.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(je.a)(Object(je.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(je.a)(Object(je.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"SET-TOGGLE-IS-FETCHING":return Object(je.a)(Object(je.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(je.a)(Object(je.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(De.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":case"GET-CAPTCHA-URL-SUCCESS":return Object(je.a)(Object(je.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED-SUCCESS":return Object(je.a)(Object(je.a)({},e),{},{initialized:!0});default:return e}},form:Mt.a}),Ft=Object(Ne.createStore)(Rt,Object(Dt.composeWithDevTools)(Object(Ne.applyMiddleware)(Xt.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,null,r.a.createElement(Le.a,{store:Ft},r.a.createElement(zt,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n(74),r=n(0),c=n.n(r),o=n(124),u=n(83),i=n.n(u),s=function(e){var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:i.a.formControl+" "+(o?i.a.error:"")},r,o&&c.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,Object(a.a)(e,["input","meta"]));return c.a.createElement(s,e,c.a.createElement("input",Object.assign({},t,n)))};function p(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(o.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)),u)}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),c=n(86),o=n.n(c),u=function(){return r.a.createElement("div",{className:o.a.showbox},r.a.createElement("div",{className:o.a.loader}," ",r.a.createElement("svg",{className:o.a.circular,viewBox:"25 25 50 50"},r.a.createElement("circle",{className:o.a.path,cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:"2",strokeMiterlimit:"10"}))," "))}},82:function(e,t,n){e.exports={selectedPage:"Users_selectedPage__J63sh",userCards:"Users_userCards__12fJO",card:"Users_card__1fTSP",userPhoto:"Users_userPhoto__17MJB"}},83:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},86:function(e,t,n){e.exports={showbox:"Preloader_showbox__-MAW1",loader:"Preloader_loader__wv7rF",circular:"Preloader_circular__1nzff",rotate:"Preloader_rotate__2zjaZ",path:"Preloader_path__2sBfS",dash:"Preloader_dash__3DLWR",color:"Preloader_color__3wFOk"}},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}}},[[226,1,2]]]);
//# sourceMappingURL=main.fb300459.chunk.js.map