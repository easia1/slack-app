(this["webpackJsonpslack-app"]=this["webpackJsonpslack-app"]||[]).push([[0],{13:function(e,t,s){},29:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(30),i=s.n(c),r=(s(37),s(38),s(13),s(3)),o=s(8),l=s.n(o);l.a.defaults.baseURL="https://slackapi.avionschool.com/api/v1/";var d=function(e){return l()({method:"post",url:e.url,data:{email:e.email,password:e.password,password_confirmation:e.password_confirmation}})},j=function(e){return l()({method:"GET",url:e.url,headers:{"access-token":e["access-token"],client:e.client,expiry:e.expiry,uid:e.uid}}).then((function(e){return e})).catch((function(e){return e}))},u=function(e){return l()({method:"GET",url:"messages?receiver_id=".concat(e.user_id,"&receiver_class=").concat(e.receiver_class),params:{receiver_id:e.user_id,receiver_class:e.receiver_class},headers:{"access-token":e["access-token"],client:e.client,expiry:e.expiry,uid:e.uid}}).then((function(e){return e})).catch((function(e){return e}))},h=s(2),b=s(0),m=Object(n.createContext)(),O=function(e){var t=e.children,s=Object(n.useState)(null),a=Object(h.a)(s,2),c=a[0],i=a[1],o=Object(n.useState)(null),l=Object(h.a)(o,2),d=l[0],j=l[1],u=Object(n.useState)(!1),O=Object(h.a)(u,2),x=O[0],g=O[1],p=Object(n.useState)(""),f=Object(h.a)(p,2),v=f[0],N=f[1],w=Object(n.useState)("dm"),C=Object(h.a)(w,2),k=C[0],S=C[1],y=Object(n.useState)(""),L=Object(h.a)(y,2),M=L[0],I=L[1],U=Object(n.useState)(""),_=Object(h.a)(U,2),T=_[0],D=_[1],F=Object(n.useState)(""),H=Object(h.a)(F,2),E=H[0],P=H[1],A=Object(n.useState)([]),R=Object(h.a)(A,2),z=R[0],B=R[1],W=Object(n.useState)([]),J=Object(h.a)(W,2),q=J[0],G=J[1],V=Object(n.useState)(),K=Object(h.a)(V,2),$=K[0],Q=K[1],X=Object(n.useState)([]),Y=Object(h.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(!1),se=Object(h.a)(te,2),ne=se[0],ae=se[1],ce=Object(n.useState)(!1),ie=Object(h.a)(ce,2),re=ie[0],oe=ie[1],le=Object(n.useState)(!1),de=Object(h.a)(le,2),je=de[0],ue=de[1],he=Object(n.useState)(!1),be=Object(h.a)(he,2),me=be[0],Oe=be[1],xe=Object(n.useState)({}),ge=Object(h.a)(xe,2),pe=ge[0],fe=ge[1],ve=Object(n.useState)(),Ne=Object(h.a)(ve,2),we=Ne[0],Ce=Ne[1];return Object(b.jsx)(m.Provider,{value:{currentUser:c,setUser:i,currentHeaders:d,setHeaders:j,isLoggedIn:x,setIsLoggedIn:g,loginMessage:v,setLoginMessage:N,sidebarMode:k,setSidebarMode:S,channelList:M,setChannelList:I,allUsers:T,setAllUsers:D,contactList:E,setContactList:P,allChannelMessages:Z,setAllChannelMessages:ee,loadData:ne,setLoadData:ae,handleSetLoadData:function(){ae(!ne)},logoutFunction:function(){return localStorage.setItem("User",null),sessionStorage.setItem("User",null),sessionStorage.setItem("Headers",null),i(null),j(null),g(!1),N(""),S("dm"),ue(!1),Object(b.jsx)(r.a,{to:"/login"})},localStorageLogin:function(e){localStorage.setItem("User",JSON.stringify(e))},tokenSessionStorage:function(e,t){sessionStorage.setItem("User",JSON.stringify(e)),sessionStorage.setItem("Headers",JSON.stringify(t))},showModal:re,setShowModal:oe,removeEmail:function(e){return e.split("@")[0]},showContent:je,setShowContent:ue,showChatInfo:me,setShowChatInfo:Oe,messages:$,setMessages:Q,handleSetShowChatInfo:function(){Oe((function(e){return!e}))},userIds:q,setUserIds:G,addUsers:z,setAddUsers:B,chatInfo:pe,setChatInfo:fe,chatName:we,setChatName:Ce},children:t})},x=(s(67),function(e){var t=e.className;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("h1",{className:t,children:[Object(b.jsx)("span",{children:"t"}),Object(b.jsx)("span",{children:":"}),Object(b.jsx)("span",{children:"l"}),Object(b.jsx)("span",{children:"k"})]})})}),g=(s(68),function(e){var t,s=e.id,n=e.name,a=e.isChannel,c=e.isChip,i=["#d43d2a","#ed8937","#d5b758","#9cb27a","#62ae9d","#2aa9be"];return 0===s?t=0:s>=i.length?t=Math.floor(s%i.length):s<i.length&&(t=Math.floor(i.length%s)),Object(b.jsxs)("div",{className:"pic-container",children:[Object(b.jsx)("div",{className:c?"chip-pic":"profile-pic",style:{backgroundColor:i[t]},children:n.charAt(0).toUpperCase()}),a?Object(b.jsx)("div",{className:"channel-pic-icon",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}):""]})}),p=(s(69),function(){var e=Object(n.useContext)(m),t=e.setSidebarMode,s=e.sidebarMode,a=e.currentUser;return Object(b.jsxs)("nav",{children:[Object(b.jsx)(x,{className:"navbar-logo"}),Object(b.jsxs)("div",{className:"navlink-container",children:[Object(b.jsx)("button",{className:"dm"===s?"nav-link nav-link-active":"nav-link",onClick:function(){return t("dm")},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"})})}),Object(b.jsx)("button",{className:"channel"===s?"nav-link nav-link-active":"nav-link",onClick:function(){return t("channel")},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"})})}),Object(b.jsx)("button",{className:"search"===s?"nav-link nav-link-active":"nav-link",onClick:function(){return t("search")},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]}),Object(b.jsx)("button",{className:"user"===s?"nav-link nav-link-active":"nav-link",onClick:function(){return t("user")},children:Object(b.jsx)(g,{id:a.id,name:a.email})})]})}),f=(s(70),s(71),function(e){var t=e.className,s=e.text,n=e.type,a=e.onClick;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{className:t,type:n,onClick:a,children:s})})}),v=s(9),N=(s(72),s.p+"static/media/startchannel.d76733b3.svg"),w=s(4),C=function(){var e=Object(n.useContext)(m),t=e.channelList,s=e.handleSetLoadData,a=e.currentHeaders,c=e.loadData,i=e.removeEmail,r=e.allChannelMessages,o=e.setAllChannelMessages,l=e.setShowContent,d=e.setShowChatInfo,j=(e.setMessages,function(e){for(var t=0;t<r.length;t++)if(e.id===r[t].id)return Object(b.jsxs)("div",{className:"recent-message-container",children:[r[t].sender?Object(b.jsxs)("span",{className:"recent-message-sender",children:[i(r[t].sender),":"]}):"",Object(b.jsx)("span",{className:"recent-message",children:r[t].message})]})});return Object(n.useEffect)((function(){!function(){if(t)for(var e=function(e){var s={"access-token":a["access-token"],client:a.client,expiry:a.expiry,uid:a.uid,user_id:parseInt(t.data.data[e].id),receiver_class:"Channel"};u(s).then((function(s){var n;(null===(n=s.data)||void 0===n?void 0:n.data.length)>0?(console.log("res",s),console.log(s.data.data.at(-1).body),o((function(n){return[].concat(Object(v.a)(n),[{id:parseInt(t.data.data[e].id),message:s.data.data.at(-1).body,sender:s.data.data.at(-1).sender.email}])}))):(console.log("res",s),o((function(s){return[].concat(Object(v.a)(s),[{id:parseInt(t.data.data[e].id),message:"No messages",sender:null}])})))}))},s=0;s<(null===(n=t.data)||void 0===n?void 0:n.data.length);s++){var n;e(s)}}()}),[c,a]),t.data.errors?Object(b.jsxs)("div",{className:"contact-container-empty",children:[Object(b.jsx)("img",{src:N}),Object(b.jsx)("span",{className:"empty-title",children:"The more the merrier!"}),Object(b.jsx)("p",{children:"Create a new channel."})]}):Object(b.jsx)("div",{className:"channel-container",children:t.data.data.map((function(e,t){return Object(b.jsxs)(w.b,{to:"/channel/".concat(e.id),className:"channel-item",activeClassName:"selected-message",onClick:function(){s(),l(!0),d(!1)},children:[Object(b.jsx)(g,{id:e.id,name:e.name,isChannel:!0}),Object(b.jsxs)("div",{className:"inbox-info",children:[Object(b.jsx)("span",{className:"inbox-name",children:e.name}),j(e)]})]},t)}))})},k=(s(73),s.p+"static/media/beginchat.fee9cb19.svg"),S=function(){var e=Object(n.useContext)(m),t=e.contactList,s=e.handleSetLoadData,a=(e.removeEmail,e.setShowContent),c=(e.setMessages,e.setShowChatInfo);return 0===t.data.data.length?Object(b.jsxs)("div",{className:"contact-container-empty",children:[Object(b.jsx)("img",{src:k}),Object(b.jsx)("span",{className:"empty-title",children:"Whew, there's nothing here."}),Object(b.jsx)("p",{children:"Start a new conversation!"})]}):Object(b.jsx)("div",{className:"contact-container",children:t.data.data.map((function(e,t){return Object(b.jsxs)(w.b,{to:"/user/".concat(e.id),className:"contact-item",activeClassName:"selected-message",onClick:function(){s(),a(!0),c(!1)},children:[Object(b.jsx)(g,{id:e.id,name:e.email}),Object(b.jsx)("span",{children:e.email})]},t)}))})},y=(s(29),function(e){var t=e.placeholder,s=e.type,a=Object(n.useContext)(m),c=a.channelList,i=a.allUsers,r=a.handleSetLoadData,o=a.setShowContent,l=Object(n.useState)([]),d=Object(h.a)(l,2),j=d[0],u=d[1];return Object(b.jsxs)("div",{className:"search-container",children:[Object(b.jsx)("div",{className:"search-input-container",children:Object(b.jsx)("input",{type:"text",placeholder:t,onChange:function(e){var t=e.target.value;if("channel"===s){var n=c.data.data.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));u(""===t?[]:n)}else if("user"===s){var a=i.data.data.filter((function(e){return e.email.toLowerCase().includes(t.toLowerCase())}));u(""===t?[]:a)}}})}),0!=j.length&&Object(b.jsx)("div",{className:"search-results",children:"channel"===s?Object(b.jsx)(b.Fragment,{children:j.map((function(e,t){return Object(b.jsxs)(w.b,{className:"search-item",to:"/channel/".concat(e.id),onClick:function(){r(),o(!0)},children:[Object(b.jsx)(g,{id:e.id,name:e.name,isChannel:!0}),Object(b.jsxs)("span",{children:[" ",e.name]})]},t)}))}):Object(b.jsx)(b.Fragment,{children:j.slice(0,15).map((function(e,t){return Object(b.jsxs)(w.b,{className:"search-item",to:"/user/".concat(e.id),onClick:function(){r(),o(!0)},children:[Object(b.jsx)(g,{id:e.id,name:e.email,isChannel:!1}),Object(b.jsxs)("span",{children:[" ",e.email," "]})]},t)}))})})]})}),L=function(){var e=Object(n.useContext)(m),t=e.sidebarMode,s=e.logoutFunction,a=e.currentUser,c=e.setShowModal,i=e.setShowContent,r=e.setShowChatInfo;return"dm"===t?Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("h1",{className:"sidebar-title",children:"Direct messages"}),Object(b.jsx)(w.b,{to:"/new-message",className:"button",onClick:function(){i(!0),r(!1)},children:"New message"}),Object(b.jsx)(S,{})]}):"channel"===t?Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("h1",{className:"sidebar-title",children:"Channels"}),Object(b.jsx)(f,{className:"button",text:"Add channel",onClick:function(){c(!0),r(!1)}}),Object(b.jsx)(C,{})]}):"search"===t?Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("h1",{className:"sidebar-title",children:"Search"}),Object(b.jsx)(y,{placeholder:"Search for a user",type:"user"})]}):"user"===t?Object(b.jsxs)("div",{className:"sidebar",children:[Object(b.jsx)("h1",{className:"sidebar-title",children:"User"}),Object(b.jsxs)("div",{className:"user-container",children:[Object(b.jsx)(g,{id:a.id,name:a.email}),Object(b.jsx)("span",{className:"user-email",children:a.email})]}),Object(b.jsx)(f,{onClick:s,text:"Logout",className:"button"})]}):void 0},M=(s(74),function(){return Object(b.jsx)("div",{className:"loading-container",children:Object(b.jsx)(x,{className:"loading-logo"})})}),I=(s(75),function(e){var t=e.keyNum,s=e.className,a=e.id,c=e.name,i=e.message,r=e.time,o=e.type,l=new Date(r),d=l.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!0}),j=l.toLocaleDateString("en-US"),u=Object(n.useState)(!1),m=Object(h.a)(u,2),O=m[0],x=m[1];return Object(b.jsxs)("div",{className:s,onClick:function(){return[x(!O)]},children:[Object(b.jsxs)("div",{className:"pic-message-container",children:[Object(b.jsx)(g,{id:a,name:c}),Object(b.jsx)("span",{className:"message-bubble-".concat(o),children:i})]}),Object(b.jsx)("span",{className:"message-".concat(o,"-name"),children:c}),Object(b.jsx)("span",{className:"message-time",children:O?Object(b.jsxs)(b.Fragment,{children:[j," ",d]}):""})]},t)}),U=function(e){e.id,e.channelMembers;var t=Object(n.useContext)(m),s=t.showChatInfo,a=(t.setShowChatInfo,t.handleSetShowChatInfo);return Object(b.jsx)("div",{className:"message-sidebar-toggle",onClick:function(){a(),console.log(s)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"})})})},_=function(e){var t=e.type,s=e.id,a=(e.messages,e.channelMembers),c=Object(n.useContext)(m),i=c.channelList,r=c.allUsers,o=c.loadData,l=c.setShowContent,d=Object(n.useState)(),j=Object(h.a)(d,2),u=j[0],O=j[1];return Object(n.useEffect)((function(){"channel"===t?i.data.data.map((function(e){e.id===parseInt(s)&&O({id:e.id,name:e.name,isChannel:!0})})):"user"===t&&r.data.data.map((function(e){e.id===parseInt(s)&&O({id:e.id,name:e.email,isChannel:!1})}))}),[o]),Object(b.jsx)(b.Fragment,{children:u?Object(b.jsxs)("div",{className:"chat-header",children:[Object(b.jsx)("button",{className:"back-button",onClick:function(){return l(!1)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),Object(b.jsxs)("div",{className:"header-name",children:[u.isChannel?"":Object(b.jsx)(g,{id:u.id,name:u.name,isChannel:u.isChannel}),Object(b.jsx)("h1",{className:u.isChannel?"chat-name ":"chat-name chat-name-user",children:u.name})]}),Object(b.jsx)(U,{id:u.id,channelMembers:a})]}):""})},T=(s.p,function(e){var t=e.type,s=e.id,a=e.newMsg,c=e.setNewMessageUser,i=Object(n.useContext)(m),o=i.currentHeaders,d=i.handleSetLoadData,j=Object(n.useRef)(null),u=Object(r.g)(),h=function(){if((null!==j.current.value||""!==j.current.value)&&null!==s){var e={url:"messages","access-token":o["access-token"],client:o.client,expiry:o.expiry,uid:o.uid,receiver_id:parseInt(s),receiver_class:t.charAt(0).toUpperCase()+t.slice(1),message:j.current.value};(n=e,l()({method:"POST",url:n.url,data:{receiver_id:n.receiver_id,receiver_class:n.receiver_class,body:n.message},headers:{"access-token":n["access-token"],client:n.client,expiry:n.expiry,uid:n.uid}})).then((function(e){console.log("send message ",e),d(),j.current.value=""})).catch((function(e){return console.log(e)})),null===j.current.value&&""===j.current.value||!a||null===s||(u.push("/user/".concat(s)),c())}var n};return Object(b.jsxs)("form",{className:"message-input-container",onSubmit:function(e){e.preventDefault(),h()},children:[Object(b.jsx)("label",{className:"message-input",children:Object(b.jsx)("input",{type:"text",name:"message-input",id:"message-input",placeholder:"Type your message here...",ref:j})}),Object(b.jsx)("button",{type:"submit",className:"send-button",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M12 19l9 2-9-18-9 18 9-2zm0 0v-8"})})})]})}),D=function(e){var t=e.setNewMessageUser,s=Object(n.useContext)(m),a=s.allUsers,c=s.handleSetLoadData,i=Object(n.useState)([]),r=Object(h.a)(i,2),o=r[0],l=r[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"newmsg-search-container",children:[Object(b.jsx)("span",{children:"To: "}),Object(b.jsx)("div",{className:"newmsg-search-input-container",children:Object(b.jsx)("input",{type:"text",placeholder:"someone@example.com",onChange:function(e){var t=e.target.value,s=a.data.data.filter((function(e){return e.email.toLowerCase().includes(t.toLowerCase())}));l(""===t?[]:s)}})})]}),0!=o.length&&Object(b.jsx)("div",{className:"newmsg-search-results",children:o.slice(0,15).map((function(e,s){return Object(b.jsxs)("div",{className:"newmsg-search-item",onClick:function(){c(),t(e)},children:[Object(b.jsx)(g,{id:e.id,name:e.email,isChannel:!1}),Object(b.jsx)("span",{children:e.email})]},s)}))})]})},F=(s(76),function(){var e=Object(n.useContext)(m),t=(e.currentHeaders,e.currentUser,e.channelList,e.allUsers,e.loadData,e.showContent),s=e.setShowContent,a=Object(n.useState)(null),c=Object(h.a)(a,2),i=c[0],r=c[1];return Object(b.jsx)("div",{className:t?"main-content":"main-content main-content-closed",children:Object(b.jsxs)("div",{className:"new-messages-section",children:[Object(b.jsxs)("div",{className:"new-messages-header",children:[Object(b.jsxs)("div",{className:"chat-header",children:[Object(b.jsx)("button",{className:"back-button",onClick:function(){return s(!1)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),Object(b.jsx)("h1",{className:"chat-name",children:"New message"})]}),i?Object(b.jsxs)("div",{className:"newmsg-search-container",children:[Object(b.jsx)("span",{children:"To: "}),Object(b.jsxs)("div",{className:"chip-container",children:[Object(b.jsx)(g,{id:i.id,name:i.email,isChip:!0}),Object(b.jsx)("span",{children:i.email}),Object(b.jsx)("div",{className:"delete-chip-button",onClick:function(){return r()},children:"\u2715"})]})]}):Object(b.jsx)(D,{setNewMessageUser:r})]}),Object(b.jsx)(T,{type:"User",id:i?i.id:null,newMsg:!0,setNewMessageUser:r})]})})}),H=s.p+"static/media/nocontent.ebe2c5bc.svg",E=function(){var e=Object(n.useRef)();return Object(n.useEffect)((function(){e.current.scrollIntoView()})),Object(b.jsx)("div",{ref:e})},P=(s(77),function(e){var t=e.className,s=e.text;return Object(b.jsx)("div",{className:t,children:s})}),A=function(){var e=Object(n.useContext)(m),t=e.allUsers,s=(e.currentUser,e.currentHeaders),a=e.handleSetShowChatInfo,c=e.showChatInfo,i=(e.chatInfo,e.loadData),r=(e.channelList,e.chatName),o=e.addUsers,d=(e.userIds,Object(n.useState)([])),u=Object(h.a)(d,2),O=u[0],x=u[1],p=Object(n.useState)(""),v=Object(h.a)(p,2),N=(v[0],v[1]),w=Object(n.useState)(),C=Object(h.a)(w,2),k=C[0],S=C[1],y=Object(n.useState)(""),L=Object(h.a)(y,2),M=L[0],I=L[1],U=Object(n.useState)(!1),_=Object(h.a)(U,2),T=_[0],D=_[1],F=Object(n.useState)(),H=Object(h.a)(F,2),E=H[0],A=H[1];Object(n.useEffect)((function(){if(r&&r.isChannel){var e={url:"channels/".concat(r.id),"access-token":s["access-token"],client:s.client,expiry:s.expiry,uid:s.uid};j(e).then((function(e){var t,s;console.log("channel info response",e),S(null===(t=e.data)||void 0===t||null===(s=t.data)||void 0===s?void 0:s.channel_members)}))}return function(){console.log("cleanup")}}),[i,r,c]);return Object(b.jsxs)("div",{className:c?"message-sidebar":"message-sidebar message-sidebar-closed",children:[Object(b.jsxs)("div",{className:"modal-title",children:[Object(b.jsx)("span",{className:"close-button",onClick:function(){return a()},children:"\u2715"}),r&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{id:r.id,name:(null===r||void 0===r?void 0:r.name)||"none",isChannel:r.isChannel}),Object(b.jsx)("h1",{children:r.name})]})]}),Object(b.jsx)(f,{text:"Invite user",className:"button"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",onChange:function(e){var s,n=e.target.value;N(n);var a=null===(s=t.data)||void 0===s?void 0:s.data.filter((function(e){return e.email.toLowerCase().includes(n.toLowerCase())}));x(""===n?[]:a)}}),0!==O.length&&Object(b.jsx)("div",{className:"newchannel-search-results",children:O.slice(0,5).map((function(e,t){return Object(b.jsxs)("div",{className:"newmsg-search-item",onClick:function(){!function(e){o.includes(e)?(D(!0),I("Please add another user"),setTimeout((function(){D(!1)}),1e3)):(A(e.id),console.log(e.id))}(e),x([]),N("")},children:[Object(b.jsx)(g,{id:e.id,name:e.email,isChip:!0}),Object(b.jsx)("span",{children:e.uid})]},t)}))})]}),Object(b.jsx)(f,{text:"+",className:"button",onClick:function(){var e,t={channel_id:r.id,member_id:E,"access-token":s["access-token"],client:s.client,expiry:s.expiry,uid:s.uid};(e=t,l()({method:"POST",url:"channel/add_member",data:{id:e.channel_id,member_id:e.member_id},headers:{"access-token":e["access-token"],client:e.client,expiry:e.expiry,uid:e.uid}})).then((function(e){e.data.errors?(I(e.data.errors[0]),D(!0),setTimeout((function(){D(!1)}),3e3)):(D(!0),I("User added"),setTimeout((function(){D(!1)}),1500),console.log(e))}))}}),r&&k&&r.isChannel?Object(b.jsxs)("div",{className:"search-results",children:[Object(b.jsx)("span",{children:"Channel Members:"}),k.map((function(e,t){return Object(b.jsxs)("div",{className:"newmsg-search-item",children:[Object(b.jsx)(g,{id:e.id,name:"member",isChip:!0}),Object(b.jsx)("span",{children:e.user_id})]},t)}))]}):"",T?Object(b.jsx)(P,{className:"toast-message",text:M}):Object(b.jsx)(b.Fragment,{})]})},R=function(){var e,t=Object(n.useContext)(m),s=t.currentHeaders,a=t.currentUser,c=t.channelList,i=t.allUsers,o=t.loadData,l=t.showContent,d=t.messages,j=t.setMessages,h=(t.showChatInfo,t.setChatInfo,t.setChatName),O=Object(r.h)(),x=O.type,g=O.id;Object(n.useRef)(),Object(n.useRef)(null),Object(n.useRef)();return Object(n.useEffect)((function(){!function(){var e={"access-token":s["access-token"],client:s.client,expiry:s.expiry,uid:s.uid,user_id:parseInt(g),receiver_class:x.charAt(0).toUpperCase()+x.slice(1)};console.log("message request",e),u(e).then((function(e){console.log("message request response",e),j(e)})).catch((function(e){return console.log(e)}))}(),"channel"===x?c.data.data.map((function(e){e.id===parseInt(g)&&h({id:e.id,name:e.name,isChannel:!0})})):"user"===x&&i.data.data.map((function(e){e.id===parseInt(g)&&h({id:e.id,name:e.email,isChannel:!1})}))}),[o]),d?Object(b.jsx)("div",{className:l?"main-content":"main-content main-content-closed",children:Object(b.jsx)("div",{className:"messages-section",children:d?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(_,{type:x,id:g,messages:d}),Object(b.jsx)("div",{className:"messages-content",children:(null===(e=d.data)||void 0===e?void 0:e.data.length)>0?Object(b.jsx)("div",{className:"message-flex",children:Object(b.jsxs)("div",{className:"messages-container",children:[d.data.data.map((function(e,t){return e.sender.id!==a.id?Object(b.jsx)(I,{keyNum:t,id:e.sender.id,name:e.sender.email,message:e.body,time:e.created_at,className:"incoming-messages",type:"sender"},t):Object(b.jsx)(I,{keyNum:t,id:e.sender.id,name:e.sender.email,message:e.body,time:e.created_at,className:"outgoing-messages",type:"user"},t)})),Object(b.jsx)(E,{})]})}):Object(b.jsxs)("div",{className:"message-container-empty",children:[Object(b.jsx)("img",{src:H}),Object(b.jsx)("span",{className:"empty-title",children:"Be the first one to say hi!"}),Object(b.jsx)("p",{children:"Send a message!"})]})}),Object(b.jsx)(T,{type:x,id:g})]}):""})}):Object(b.jsx)(M,{})},z=(s(78),s(79),function(e){e.type;var t=e.placeholder,s=Object(n.useContext)(m),a=(s.currentHeaders,s.allUsers),c=(s.currentUser,s.addUsers),i=s.setAddUsers,r=s.userIds,o=s.setUserIds,l=Object(n.useState)([]),d=Object(h.a)(l,2),j=d[0],u=d[1],O=Object(n.useState)(""),x=Object(h.a)(O,2),p=x[0],f=x[1],N=Object(n.useState)(""),w=Object(h.a)(N,2),C=w[0],k=w[1],S=Object(n.useState)(!1),y=Object(h.a)(S,2),L=y[0],M=y[1];return Object(b.jsxs)(b.Fragment,{children:[L?Object(b.jsx)(P,{className:"toast-message",text:C}):Object(b.jsx)(b.Fragment,{}),Object(b.jsxs)("div",{className:"input-container",children:[Object(b.jsx)("span",{children:"Add users"}),Object(b.jsx)("input",{type:"text",placeholder:t,onChange:function(e){var t,s=e.target.value;f(s);var n=null===(t=a.data)||void 0===t?void 0:t.data.filter((function(e){return e.email.toLowerCase().includes(s.toLowerCase())}));u(""===s?[]:n)},value:p})]}),0!==j.length&&Object(b.jsx)("div",{className:"newchannel-search-results",children:j.slice(0,5).map((function(e,t){return Object(b.jsxs)("div",{className:"newmsg-search-item",onClick:function(){!function(e){c.includes(e)?(M(!0),k("Please add another user"),setTimeout((function(){M(!1)}),1e3)):(i([].concat(Object(v.a)(c),[e])),o([].concat(Object(v.a)(r),[e.id]))),console.log(c),console.log(r)}(e),u([]),f("")},children:[Object(b.jsx)(g,{id:e.id,name:e.email,isChip:!0}),Object(b.jsx)("span",{children:e.uid})]},t)}))})]})}),B=function(){var e=Object(n.useContext)(m),t=e.currentHeaders,s=e.setShowModal,a=e.userIds,c=e.addUsers,i=e.setAddUsers,r=e.setUserIds,o=Object(n.useRef)(),d=Object(n.useState)(),j=Object(h.a)(d,2),u=j[0],O=j[1],x=Object(n.useState)(!1),p=Object(h.a)(x,2),N=p[0],w=p[1],C=Object(n.useState)(!1),k=Object(h.a)(C,2),S=k[0],y=(k[1],function(){(function(e){return l()({method:"POST",url:"channels",data:{name:e.name,user_ids:e.user_ids},headers:{"access-token":e["access-token"],client:e.client,expiry:e.expiry,uid:e.uid}}).then((function(e){return e})).catch((function(e){return e}))})({name:o.current.value,user_ids:a,"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid}).then((function(e){e.data.errors?(O(e.data.errors[0]),w(!0),setTimeout((function(){w(!1)}),3e3)):(O("Channel Created"),w(!0),setTimeout((function(){w(!1),s(!1)}),1500),a.splice(0,a.length),c.splice(0,c.length),console.log(e))})).catch((function(e){console.log("error",e)}))}),L=function(e){var t=Object(v.a)(c);t.splice(e.target.dataset.index,1);var s,n=Object(v.a)(a);n.splice(e.target.dataset.index,1),s=n,i(t),r(s),console.log(t),console.log(n)};return Object(b.jsxs)("div",{className:"channel-modal-container",children:[Object(b.jsxs)("form",{className:"channel-modal",children:[Object(b.jsxs)("div",{className:"modal-upperhalf",children:[Object(b.jsxs)("div",{className:"modal-title",children:[Object(b.jsx)("span",{className:"close-button",onClick:function(){return i([]),r([]),void s(!1)},children:"\u2715"}),Object(b.jsx)("h1",{className:"sidebar-title",children:"Create a channel"})]}),Object(b.jsxs)("div",{className:"newchannel-inputs-container",children:[Object(b.jsxs)("label",{className:"input-container",children:[Object(b.jsx)("span",{children:"Channel Name"}),Object(b.jsx)("input",{type:"text",min:"3",max:"15",ref:o})]}),Object(b.jsx)(z,{})]})]}),Object(b.jsx)("span",{className:"newchannel-chips-container-label",children:"Users to be added to the channel"}),Object(b.jsx)("div",{className:"newchannel-chips-container",children:c.map((function(e,t){return Object(b.jsxs)("div",{className:"select-chip-container",children:[Object(b.jsx)(g,{id:e.id,name:e.email,isChip:!0}),Object(b.jsx)("span",{children:e.email}),Object(b.jsx)("div",{className:"delete-chip-button","data-index":t,onClick:function(e){return L(e)},children:"\u2715"})]},t)}))}),Object(b.jsx)(f,{className:"button",type:"submit",text:"Create Channel",onClick:function(e){e.preventDefault(),y()}})]}),N||S?Object(b.jsx)(P,{className:"toast-message",text:u}):Object(b.jsx)(b.Fragment,{})]})},W=s.p+"static/media/selectmessage.d806d655.svg",J=function(){var e=Object(n.useContext)(m),t=e.currentHeaders,s=e.currentUser,a=e.setChannelList,c=e.setAllUsers,i=e.setContactList,o=e.allUsers,l=e.channelList,d=e.contactList,u=e.showModal,h=e.setShowModal,O=e.loadData,x=e.removeEmail,g=e.showContent,f=e.showChatInfo;return Object(n.useEffect)((function(){!function(){var e={"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid,url:"channels"},s={"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid,url:"users"},n={"access-token":t["access-token"],client:t.client,expiry:t.expiry,uid:t.uid,url:"users/recent"};j(e).then((function(e){console.log("channels r",e),console.log("channels",l),a(e)})).catch((function(e){return console.log(e)})),j(s).then((function(e){console.log("users r",e),console.log("users",o),c(e)})).catch((function(e){return console.log(e)})),j(n).then((function(e){console.log("contact r",e),console.log("contact",d),i(e)})).catch((function(e){return console.log(e)}))}()}),[O]),l.data&&o&&d?Object(b.jsxs)("div",{className:"app-container",children:[u?Object(b.jsx)(B,{showModal:u,setShowModal:h}):null,Object(b.jsxs)("div",{className:g?"navigation-bars-container navigation-bars-container-closed":"navigation-bars-container ",children:[Object(b.jsx)(p,{}),Object(b.jsx)(L,{})]}),Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{path:"/",exact:!0,children:Object(b.jsx)("div",{className:g?f?"main-content main-content-closed":"main-content":"main-content main-content-closed",children:Object(b.jsxs)("div",{className:"message-container-empty",children:[Object(b.jsx)("img",{src:W,alt:"Welcome back"}),Object(b.jsxs)("span",{className:"empty-title",children:["Welcome back,"," ",x(s.email),"!"]}),Object(b.jsx)("p",{children:"Send a message or choose a contact to get started."})]})})}),Object(b.jsx)(r.b,{path:"/:type/:id",component:R}),Object(b.jsx)(r.b,{exact:!0,path:"/new-message",component:F})]}),Object(b.jsx)(A,{})]}):Object(b.jsx)(M,{})},q=s(10),G=s(15),V=["component"],K=function(e){var t=e.component,s=Object(G.a)(e,V),a=Object(n.useContext)(m).isLoggedIn;return Object(b.jsx)(r.b,Object(q.a)(Object(q.a)({},s),{},{render:function(e){return a?Object(b.jsx)(t,Object(q.a)({},e)):Object(b.jsx)(r.a,{to:"/login"})}}))},$=["component","restricted"],Q=function(e){var t=e.component,s=e.restricted,a=Object(G.a)(e,$),c=Object(n.useContext)(m).isLoggedIn;return Object(b.jsx)(r.b,Object(q.a)(Object(q.a)({},a),{},{render:function(e){return c&&s?Object(b.jsx)(r.a,{to:"/",exact:!0}):Object(b.jsx)(t,Object(q.a)({},e))}}))},X=function(){var e=Object(n.useContext)(m),t=e.setUser,s=e.setHeaders,a=e.setIsLoggedIn,c=e.loginMessage,i=e.localStorageLogin,r=e.setLoginMessage,o=e.tokenSessionStorage,l=Object(n.useRef)(null),j=Object(n.useRef)(null),u=Object(n.useState)(null),O=Object(h.a)(u,2),g=O[0],p=O[1],v=Object(n.useState)(),N=Object(h.a)(v,2),C=N[0],k=N[1],S=Object(n.useState)(!1),y=Object(h.a)(S,2),L=y[0],M=y[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("User")),n=JSON.parse(sessionStorage.getItem("User")),c=JSON.parse(sessionStorage.getItem("Headers"));n?(a(!0),s(c),t(n)):e&&(r("Logging you in..."),d(e).then((function(e){s(e.headers),t(e.data.data),r("Logged in!"),a(!0),o(e.data.data,e.headers)})).catch((function(e){e.response?(console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers),s(""),t(""),r(e.response.data.errors[0]),setTimeout((function(){r("")}),3e3),setTimeout((function(){r("")}),3e3)):e.request?(console.log(e.request),r("Server error, please try again."),setTimeout((function(){r("")}),3e3)):console.log("Error",e.message)})))}),[]),Object(b.jsxs)("div",{className:"login-page",children:[L||C||c?Object(b.jsx)(P,{className:"toast-message",text:C||c}):Object(b.jsx)(b.Fragment,{}),Object(b.jsx)(x,{className:"hero-logo"}),Object(b.jsx)("h2",{className:"login-title",children:"Let's go!"}),Object(b.jsx)("p",{className:"login-subtitle",children:"Log in to your account and start connecting. Check check check."}),Object(b.jsxs)("form",{className:"login-container",onSubmit:function(e){e.preventDefault(),console.log(l.current.value),console.log(j.current.value),function(){if(""!==l.current.value&&""!==j.current.value){var e={url:"auth/sign_in",email:l.current.value,password:j.current.value};k("Logging you in..."),d(e).then((function(n){s(n.headers),t(n.data.data),k("Logged in!"),a(!0),console.log(n),g&&(i(e),o(n.data.data,n.headers))})).catch((function(e){e.response?(s(""),t(""),k(null===e||void 0===e?void 0:e.response.data.errors[0]),setTimeout((function(){k(!1)}),3e3)):e.request?(console.log(e.request),k("Server error, please try again."),setTimeout((function(){k(!1)}),3e3)):console.log("Error",e.message)}))}else k("Please fill out the required fields"),M(!0)}()},children:[Object(b.jsxs)("label",{className:"input-container",children:[Object(b.jsx)("span",{children:"Email"}),Object(b.jsx)("input",{type:"email",name:"login-email",id:"login-email",ref:l})]}),Object(b.jsxs)("label",{className:"input-container",children:[Object(b.jsx)("span",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"login-password",id:"login-password",ref:j})]}),Object(b.jsxs)("label",{className:"checkbox-container",children:[Object(b.jsx)("input",{type:"checkbox",name:"remember-user",id:"remember-user",onClick:function(e){!function(e){var t=e.target.checked;p(!!t)}(e)}}),Object(b.jsx)("span",{children:"Keep me logged in"})]}),Object(b.jsx)(f,{type:"submit",text:"Login",className:"button"})]}),Object(b.jsxs)("div",{children:["Don't have an account yet?"," ",Object(b.jsx)(w.b,{className:"hyperlink",to:"/signup",children:"Sign up here."})]})]})},Y=function(){return Object(b.jsx)("div",{className:"login-hero"})},Z=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),s=Object(n.useRef)(null),a=Object(n.useState)(),c=Object(h.a)(a,2),i=c[0],r=c[1],o=Object(n.useState)(!1),l=Object(h.a)(o,2),j=l[0],u=l[1],m=Object(n.useState)(!1),O=Object(h.a)(m,2),x=O[0],g=O[1];return Object(b.jsxs)("div",{className:"login-page",children:[Object(b.jsx)("h2",{className:"login-title",children:"Let's get started!"}),Object(b.jsx)("p",{className:"login-subtitle",children:"Sign up for an account to connect with other people"}),Object(b.jsxs)("form",{className:"login-container",onSubmit:function(n){n.preventDefault(),function(){if(t.current.value!==s.current.value)r("Password did not match"),g(!0),t.current.focus(),setTimeout((function(){g(!1)}),3e3);else if(t.current.value.length<6)r("Password is too short"),g(!0),setTimeout((function(){g(!1)}),3e3);else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.current.value)){var n={url:"auth",email:e.current.value,password:t.current.value,password_confirmation:s.current.value};d(n).then((function(e){r("Registration Success"),u(!0),console.log("res",e)})).catch((function(e){r("Something went wrong. Please try again"),u(!0),console.log("err",e)}))}else r("Please enter valid email"),g(!0),e.current.focus(),setTimeout((function(){g(!1)}),3e3)}()},children:[Object(b.jsx)("br",{}),Object(b.jsxs)("label",{className:"input-container",children:[Object(b.jsx)("span",{children:"Email"}),Object(b.jsx)("input",{type:"email",name:"register-email",id:"register-email",ref:e})]}),Object(b.jsxs)("label",{className:"input-container",children:[Object(b.jsx)("span",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"register-name",min:"6",id:"register-password",ref:t})]}),Object(b.jsxs)("label",{className:"input-container",children:[Object(b.jsx)("span",{children:"Confirm Password"}),Object(b.jsx)("input",{type:"password",name:"register-name",min:"6",id:"register-passconfirm",ref:s})]}),Object(b.jsx)(f,{text:"Register",type:"submit",className:"button"})]}),Object(b.jsxs)("div",{children:["Already have an account?"," ",Object(b.jsx)(w.b,{className:"hyperlink",to:"/login",children:"Log in."})]}),j||x?Object(b.jsx)(P,{className:"toast-message",text:i}):Object(b.jsx)(b.Fragment,{})]})},ee=function(){return Object(b.jsxs)("div",{className:"login-main-container",children:[Object(b.jsx)(Y,{}),Object(b.jsxs)(r.d,{children:[Object(b.jsx)(Q,{component:X,restricted:!0,path:"/login",exact:!0}),Object(b.jsx)(Q,{component:Z,restricted:!0,path:"/signup",exact:!0}),Object(b.jsx)(r.b,{render:function(){return Object(b.jsx)(r.a,{to:"/login"})}})]})]})};var te=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(r.d,{children:[Object(b.jsx)(K,{component:J,path:["/","/:type/:id","/new-message"],exact:!0}),Object(b.jsx)(r.b,{component:ee})]})})},se=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,81)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(w.a,{basename:"/slack-app",children:Object(b.jsx)(O,{children:Object(b.jsx)(te,{})})})}),document.getElementById("root")),se()}},[[80,1,2]]]);
//# sourceMappingURL=main.0b4b666e.chunk.js.map