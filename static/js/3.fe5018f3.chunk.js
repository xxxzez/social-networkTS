(this["webpackJsonpmatvei-bohush-social-network"]=this["webpackJsonpmatvei-bohush-social-network"]||[]).push([[3],{409:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(73),o=a(54),r=a(88),l=a(56),u=a(55),c=a(0),i=a.n(c),s=a(23),p=a(18),m=function(e){return{isAuth:e.auth.isAuth}};function f(e){var t=function(t){Object(l.a)(c,t);var a=Object(u.a)(c);function c(){return Object(o.a)(this,c),a.apply(this,arguments)}return Object(r.a)(c,[{key:"render",value:function(){var t=this.props,a=t.isAuth,o=Object(n.a)(t,["isAuth"]);return a?i.a.createElement(e,o):i.a.createElement(p.a,{to:"/login"})}}]),c}(i.a.Component);return Object(s.b)(m)(t)}},410:function(e,t,a){e.exports={item:"Post_item__ihtu9"}},411:function(e,t,a){},412:function(e,t,a){e.exports={profile:"Profile_profile__3dzvr",profilePicture:"Profile_profilePicture__2kcbj"}},413:function(e,t,a){e.exports={profile:"ProfileInfo_profile__2LHtf",profilePicture:"ProfileInfo_profilePicture__3fsPe"}},417:function(e,t,a){"use strict";a.r(t);var n=a(54),o=a(88),r=a(56),l=a(55),u=a(0),c=a.n(u),i=a(23),s=a(134),p=a(410),m=a.n(p),f=a(161),d=a.n(f),h=c.a.memo((function(e){return c.a.createElement("div",{className:m.a.item},c.a.createElement("img",{src:d.a,alt:""}),e.message,c.a.createElement("div",null,c.a.createElement("span",null,"Like! "),e.likesCount,c.a.createElement("button",{onClick:function(){e.deletePost(e.id)}},"Delete post")))})),b=a(411),E=a.n(b),v=a(124),g=a(172),k=a(121),j=a(52),P=c.a.memo((function(e){var t=function(t){e.deletePost(t)},a=e.posts.map((function(e){return c.a.createElement(h,{key:e.id,id:e.id,message:e.message,likesCount:e.likesCount,deletePost:t})}));return c.a.createElement("div",null,c.a.createElement("h3",null,"My posts"),c.a.createElement(y,{onSubmit:function(t){e.addPost(t.newPostBody)}}),c.a.createElement("div",{className:E.a.posts},a))})),O=Object(k.a)(20),y=Object(g.a)({form:"profileAddPostForm"})((function(e){return c.a.createElement("form",{onSubmit:e.handleSubmit},c.a.createElement(v.a,{name:"newPostBody",placeholder:"Send",component:j.b,validate:[k.b,O]}),c.a.createElement("button",null,"Send"))})),S=Object(i.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(s.a)(t))},deletePost:function(t){e(Object(s.b)(t))}}}))(P),_=a(412),A=a.n(_),w=a(413),C=a.n(w),I=a(61),N=a(160),x=a.n(N),F=a(77),J=function(e){var t=Object(u.useState)(!1),a=Object(F.a)(t,2),n=a[0],o=a[1],r=Object(u.useState)(e.status),l=Object(F.a)(r,2),i=l[0],s=l[1];Object(u.useEffect)((function(){s(e.status)}),[e.status]);return c.a.createElement("div",null,!n&&c.a.createElement("div",null,c.a.createElement("span",{onClick:function(){o(!0)}},i||"-----")),n&&c.a.createElement("div",null,c.a.createElement("input",{onBlur:function(){o(!1),e.updateStatus(i)},type:"text",value:i,autoFocus:!0,onChange:function(e){s(e.currentTarget.value)}})))},L=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?c.a.createElement("div",{className:C.a.profile},c.a.createElement("div",{className:C.a.profilePicture},t.photos.large?c.a.createElement("img",{src:t.photos.large,alt:""}):c.a.createElement("img",{src:x.a,alt:"",width:"300px"})),c.a.createElement(J,{status:a,updateStatus:n}),c.a.createElement("h3",null,"About me: ",t.aboutMe),c.a.createElement("h3",null,"Looking for a job?"," ",t.lookingForAJob?"Yes":"Currently no!"),c.a.createElement("h3",null,"What kind of job are u looking for?"," ",t.lookingForAJobDescription),c.a.createElement("h3",null,"Name: ",t.fullName),c.a.createElement("h3",null,"UserId: ",t.userId),c.a.createElement("h3",null,"Facebook link: ",t.contacts.facebook),c.a.createElement("h3",null,"Your website link: ",t.contacts.website),c.a.createElement("h3",null,"VK link: ",t.contacts.vk),c.a.createElement("h3",null,"Youtube: ",t.contacts.youtube),c.a.createElement("h3",null,"Github: ",t.contacts.github),c.a.createElement("h3",null,"Email: ",t.contacts.mainLink),c.a.createElement("div",null,c.a.createElement("h3",null,"Welcome to my page guys! Happy to see you here!"))):c.a.createElement(I.a,null)},z=function(e){return c.a.createElement("div",{className:A.a.profile},c.a.createElement(L,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),c.a.createElement(S,null))},B=a(18),D=a(409),M=a(14),U=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){var t=e.props.match.params.userId;t||(t=e.props.authorizedUserId)||e.props.history.push("/login"),e.props.getProfile(t),e.props.getStatus(t)},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement(z,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}]),a}(c.a.Component),Y=Object(i.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getProfile:s.c,getStatus:s.d,updateStatus:s.f}),H=Object(M.compose)(Y,B.f,D.a)(U);t.default=H}}]);
//# sourceMappingURL=3.fe5018f3.chunk.js.map