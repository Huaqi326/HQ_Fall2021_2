(function(e){function t(t){for(var c,i,l=t[0],r=t[1],o=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(c=!1)}c&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},s={app:0},n=[];function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var b=r;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2fbc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");a("5ed1"),a("6597");function s(e,t,a,s,n,i){var l=Object(c["v"])("Header"),r=Object(c["v"])("router-view");return Object(c["r"])(),Object(c["d"])(c["a"],null,[Object(c["h"])(l),Object(c["h"])(r)],64)}var n={class:"navbar",role:"navigation","aria-label":"main navigation"},i={id:"navbarBasicExample",class:"navbar-menu"},l={class:"navbar-start"},r=Object(c["g"])(" Moment "),o=Object(c["g"])(" Exercise Log "),b={key:0},u={class:"navbar-end"},d={class:"navbar-item"},v={class:"navbar-item has-dropdown is-hoverable"},O=Object(c["g"])("Sign in"),j=Object(c["g"])("Sign up"),p={key:1,class:"navbar-end"},m={class:"navbar-item"},h={class:"navbar-item has-dropdown is-hoverable"},f=Object(c["e"])("figure",{class:"image is-36x36"},[Object(c["e"])("img",{class:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})],-1),g={class:"navbar-dropdown is-right"},y=Object(c["g"])(" Profile "),w=Object(c["e"])("a",{class:"navbar-item"}," Change password ",-1),x=Object(c["e"])("a",{class:"navbar-item"}," Sign out ",-1);function S(e,t,a,s,S,P){var A=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",n,[Object(c["e"])("div",i,[Object(c["e"])("div",l,[Object(c["h"])(A,{class:"navbar-item",to:"/main"},{default:Object(c["A"])((function(){return[r]})),_:1}),Object(c["h"])(A,{class:"navbar-item",to:"/log"},{default:Object(c["A"])((function(){return[o]})),_:1})]),S.Session.user?(Object(c["r"])(),Object(c["d"])("div",p,[Object(c["e"])("div",m,[Object(c["e"])("div",h,[f,Object(c["e"])("div",g,[Object(c["h"])(A,{class:"navbar-item",to:"/profile"},{default:Object(c["A"])((function(){return[y]})),_:1}),w,x])])])])):(Object(c["r"])(),Object(c["d"])("div",b,[Object(c["e"])("div",u,[Object(c["e"])("div",d,[Object(c["e"])("div",v,[Object(c["h"])(A,{class:"button is-primary",to:"/signin"},{default:Object(c["A"])((function(){return[O]})),_:1}),Object(c["h"])(A,{class:"button is-light",to:"/signup"},{default:Object(c["A"])((function(){return[j]})),_:1})])])])]))])])}var P=a("6c02"),A={class:"container"},_={class:"columns"},H={class:"column"};function k(e,t,a,s,n,i){var l=Object(c["v"])("Header");return Object(c["r"])(),Object(c["d"])("div",A,[Object(c["e"])("div",_,[Object(c["e"])("div",H,[Object(c["h"])(l)])])])}var E={components:{Header:Lt}},M=a("6b0d"),T=a.n(M);const z=T()(E,[["render",k]]);var B=z,U={class:"section"},R={class:"container"},J={class:"columns is-centered"},C={class:"column is-two-fifths"},I=Object(c["e"])("div",{class:"content has-text-centered"},[Object(c["e"])("h1",null,"Sign In")],-1),L={class:"field"},W=Object(c["e"])("label",{class:"label"},"Email",-1),Y={class:"control"},V={class:"field"},q=Object(c["e"])("label",{class:"label"},"Password",-1),D={class:"control"},F=Object(c["e"])("button",{class:"button is-primary"},"Sign In",-1),N=Object(c["g"])("Don't have an account? "),Q=Object(c["g"])("Sign up");function Z(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("section",U,[Object(c["e"])("div",R,[Object(c["e"])("div",J,[Object(c["e"])("div",C,[I,Object(c["e"])("form",{class:"box",onSubmit:t[2]||(t[2]=Object(c["C"])((function(e){return i.Signin()}),["prevent"]))},[Object(c["e"])("div",L,[W,Object(c["e"])("div",Y,[Object(c["B"])(Object(c["e"])("input",{class:"input is-success",type:"email",placeholder:"e.g. alex@example.com","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t})},null,512),[[c["y"],e.email]])])]),Object(c["e"])("div",V,[q,Object(c["e"])("div",D,[Object(c["B"])(Object(c["e"])("input",{class:"input is-success",type:"password",placeholder:"********","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[c["y"],e.password]])])]),F],32),Object(c["e"])("div",null,[N,Object(c["h"])(l,{to:"/signup"},{default:Object(c["A"])((function(){return[Q]})),_:1})])])])])])}var G={data:function(){return{email:null,password:null,Session:Jt}},methods:{Signin:function(){this.Session.Signin(this.email,this.password)}}};const K=T()(G,[["render",Z]]);var X=K,$={class:"section"},ee={class:"container"},te={class:"columns is-centered"},ae={class:"column is-two-fifths"},ce=Object(c["e"])("div",{class:"content has-text-centered"},[Object(c["e"])("h1",null,"Sign Up")],-1),se={class:"box"},ne=Object(c["f"])('<div class="field"><label class="label">Username</label><div class="control"><input class="input is-success" type="text"></div></div><div class="field"><label class="label">Email</label><div class="control"><input class="input is-success" type="email" placeholder="e.g. alex@example.com"></div></div><div class="field"><label class="label">Password</label><div class="control"><input class="input is-success" type="password" pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="********"></div></div><button class="button is-primary">Sign Up</button><div>By signing up, you agree to blablablabla</div><br>',6),ie=Object(c["f"])('<h3>Password must contain the following:</h3><p id="letter" class="invalid">A <b>lowercase</b> letter</p><p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p><p id="number" class="invalid">A <b>number</b></p><p id="length" class="invalid">Minimum <b>8 characters</b></p>',5),le=[ie],re=Object(c["g"])("Already have an account? "),oe=Object(c["g"])("Sign in");function be(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("section",$,[Object(c["e"])("div",ee,[Object(c["e"])("div",te,[Object(c["e"])("div",ae,[ce,Object(c["e"])("form",se,[ne,Object(c["e"])("div",{id:"message",style:Object(c["n"])("".concat(e.visible?"":"display:none"))},le,4)]),Object(c["e"])("div",null,[re,Object(c["h"])(l,{to:"/signin"},{default:Object(c["A"])((function(){return[oe]})),_:1})])])])])])}var ue={};const de=T()(ue,[["render",be]]);var ve=de,Oe={class:"container"},je={class:"columns"},pe={class:"column"};function me(e,t,a,s,n,i){var l=Object(c["v"])("Header"),r=Object(c["v"])("Posts");return Object(c["r"])(),Object(c["d"])("div",Oe,[Object(c["e"])("div",je,[Object(c["e"])("div",pe,[Object(c["h"])(l),Object(c["h"])(r)])])])}var he={class:"card is-medium"},fe=Object(c["f"])('<div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div>',2),ge=[fe];function ye(e,t,a,s,n,i){return Object(c["r"])(),Object(c["d"])("div",he,ge)}var we={};const xe=T()(we,[["render",ye]]);var Se=xe,Pe={components:{Header:Lt,Posts:Se}};const Ae=T()(Pe,[["render",me]]);var _e=Ae,He={class:"container"},ke={class:"columns"},Ee={class:"column"},Me=Object(c["e"])("br",null,null,-1),Te=Object(c["e"])("button",{class:"button"},"Record Your Weight",-1),ze=Object(c["e"])("button",{class:"button"},"Record Your Height",-1),Be=Object(c["e"])("button",{class:"button"},"Record Your Exercise Time",-1),Ue=Object(c["e"])("br",null,null,-1),Re=Object(c["e"])("br",null,null,-1);function Je(e,t,a,s,n,i){var l=Object(c["v"])("Header"),r=Object(c["v"])("Table");return Object(c["r"])(),Object(c["d"])("div",He,[Object(c["e"])("div",ke,[Object(c["e"])("div",Ee,[Object(c["h"])(l),Me,Te,ze,Be,Ue,Re,Object(c["h"])(r)])])])}var Ce={class:"graph"},Ie=Object(c["e"])("strong",null,"Total Exercise Time",-1),Le=Object(c["e"])("thead",null,[Object(c["e"])("tr",null,[Object(c["e"])("th",{scope:"col"},"Item"),Object(c["e"])("th",{scope:"col"},"Percent")])],-1),We=Object(c["e"])("tbody",null,[Object(c["e"])("tr",{style:{height:"85%"}},[Object(c["e"])("th",{scope:"row"},"Monday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"85min")])]),Object(c["e"])("tr",{style:{height:"23%"}},[Object(c["e"])("th",{scope:"row"},"Tuesday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"23min")])]),Object(c["e"])("tr",{style:{height:"15%"}},[Object(c["e"])("th",{scope:"row"},"Wednesday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"15min")])]),Object(c["e"])("tr",{style:{height:"38%"}},[Object(c["e"])("th",{scope:"row"},"Thursday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"38min")])]),Object(c["e"])("tr",{style:{height:"35%"}},[Object(c["e"])("th",{scope:"row"},"Friday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"35min")])]),Object(c["e"])("tr",{style:{height:"30%"}},[Object(c["e"])("th",{scope:"row"},"Saturday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"30min")])]),Object(c["e"])("tr",{style:{height:"15%"}},[Object(c["e"])("th",{scope:"row"},"Sunday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"15min")])])],-1),Ye=[Ie,Le,We];function Ve(e,t,a,s,n,i){return Object(c["r"])(),Object(c["d"])("table",Ce,Ye)}var qe={};a("79db");const De=T()(qe,[["render",Ve]]);var Fe=De,Ne={components:{Header:Lt,Table:Fe}};const Qe=T()(Ne,[["render",Je]]);var Ze=Qe,Ge={class:"container"},Ke={class:"columns"},Xe={class:"column"},$e=Object(c["e"])("br",null,null,-1),et=Object(c["e"])("br",null,null,-1),tt=Object(c["e"])("br",null,null,-1),at=Object(c["e"])("br",null,null,-1),ct=Object(c["e"])("br",null,null,-1);function st(e,t,a,s,n,i){var l=Object(c["v"])("Header"),r=Object(c["v"])("Section");return Object(c["r"])(),Object(c["d"])("div",Ge,[Object(c["e"])("div",Ke,[Object(c["e"])("div",Xe,[Object(c["h"])(l),$e,et,tt,at,ct,Object(c["h"])(r)])])])}var nt={class:"navbar is-fixed-top has-background-link-light",role:"navigation","aria-label":"main navigation"},it=Object(c["e"])("div",{class:"navbar-brand is-mobile"},[Object(c["e"])("figure",{class:"image is-128x128"},[Object(c["e"])("img",{class:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})]),Object(c["e"])("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[Object(c["e"])("span",{"aria-hidden":"true"}),Object(c["e"])("span",{"aria-hidden":"true"}),Object(c["e"])("span",{"aria-hidden":"true"})])],-1),lt={id:"navbarBasicExample",class:"navbar-menu"},rt={class:"navbar-end"},ot={class:"navbar-item"},bt={class:"buttons"},ut=Object(c["g"])(" Main Page "),dt=Object(c["e"])("strong",null,"Profile Management",-1);function vt(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",nt,[it,Object(c["e"])("div",lt,[Object(c["e"])("div",rt,[Object(c["e"])("div",ot,[Object(c["e"])("div",bt,[Object(c["h"])(l,{class:"button is-primary",to:"/main"},{default:Object(c["A"])((function(){return[ut]})),_:1}),Object(c["h"])(l,{class:"button is-primary",to:"/profileinfor"},{default:Object(c["A"])((function(){return[dt]})),_:1})])])])])])}var Ot={};const jt=T()(Ot,[["render",vt]]);var pt=jt,mt={class:"section"},ht=Object(c["f"])('<div class="container"><div class="tabs is-centered is-boxed"><ul><li class="is-active"><a><span class="icon is-two-fifths"><i class="fas fa-image" aria-hidden="true"></i></span><span>Post</span></a></li><li><a><span class="icon is-two-fifths"><i class="fas fa-calendar-check" aria-hidden="true"></i></span><span>Exercise Log</span></a></li></ul></div></div>',1),ft=[ht];function gt(e,t,a,s,n,i){return Object(c["r"])(),Object(c["d"])("section",mt,ft)}var yt={};const wt=T()(yt,[["render",gt]]);var xt=wt,St={components:{Header:pt,Section:xt}};const Pt=T()(St,[["render",st]]);var At=Pt,_t=Object(c["e"])("strong",null," <-- ",-1),Ht=Object(c["f"])('<section class="section"><div class="container"><div class="columns is-centered"><div class="column is-full"><form class="box"><div class="field"><figure class="image is-128x128"><img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></figure><br><button class="button">Change Avatar</button></div><div class="field"><label class="label">Username</label><div class="control"><input class="input is-success" type="text" value="HQ"></div></div><div class="field"><label class="label">Email</label><div class="control"><input class="input is-success" type="email" value="zhangh8@newpaltz.edu"></div></div><div class="field"><label class="label">Phone Number</label><div class="control"><input class="input is-success" value="123456789"></div></div><div class="field"><label class="label">Bio</label><div class="control"><textarea class="textarea"></textarea></div></div><div class="field"><label class="label">Height</label><div class="control"><input class="input is-success" value="167cm" disabled></div></div><div class="field"><label class="label">Weight</label><div class="control"><input class="input is-success" value="44lbs" disabled></div></div></form></div></div></div></section>',1);function kt(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("div",null,[Object(c["h"])(l,{class:"button is-white",to:"/profile"},{default:Object(c["A"])((function(){return[_t]})),_:1}),Ht])}var Et={};const Mt=T()(Et,[["render",kt]]);var Tt=Mt,zt=[{path:"/",name:"Home",component:B},{path:"/signin",name:"Signin",component:X},{path:"/signup",name:"Signup",component:ve},{path:"/main",name:"Main",component:_e},{path:"/log",name:"Exercise",component:Ze},{path:"/profile",name:"Profile",component:At},{path:"/profileinfor",name:"Profileinfor",component:Tt}],Bt=Object(P["a"])({history:Object(P["b"])(""),routes:zt}),Ut=Bt,Rt={user:null,toRoute:"/main",Signin:function(e,t){if("zhangh8@1"!==e)throw{code:400,msg:"Sorry, there is no match email(zhangh8@1)"};if("zhangh8@1"===e&&"123"!==t)throw{code:400,msg:"Password is not correct(123)"};"zhangh8@1"===e&&"123"===t&&(this.user="Huaqi",Ut.push(this.toRoute))}},Jt=Rt,Ct={data:function(){return{Session:Jt}}};const It=T()(Ct,[["render",S]]);var Lt=It,Wt={components:{Header:Lt}};const Yt=T()(Wt,[["render",s]]);var Vt=Yt;Object(c["c"])(Vt).use(Ut).mount("#app")},"79db":function(e,t,a){"use strict";a("2fbc")}});
//# sourceMappingURL=app.e4ef646d.js.map