(function(e){function t(t){for(var c,i,l=t[0],r=t[1],o=t[2],u=0,d=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);b&&b(t);while(d.length)d.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,l=1;l<a.length;l++){var r=a[l];0!==s[r]&&(c=!1)}c&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var c={},s={app:0},n=[];function i(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=c,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(a,c,function(t){return e[t]}.bind(null,c));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=t,l=l.slice();for(var o=0;o<l.length;o++)t(l[o]);var b=r;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"2fbc":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var c=a("7a23");a("5ed1"),a("6597");function s(e,t){var a=Object(c["v"])("router-view");return Object(c["r"])(),Object(c["c"])(a)}var n=a("6b0d"),i=a.n(n);const l={},r=i()(l,[["render",s]]);var o=r,b=a("6c02"),u={class:"container"},d={class:"columns"},v={class:"column"};function O(e,t,a,s,n,i){var l=Object(c["v"])("Header");return Object(c["r"])(),Object(c["d"])("div",u,[Object(c["e"])("div",d,[Object(c["e"])("div",v,[Object(c["h"])(l)])])])}var j={class:"navbar",role:"navigation","aria-label":"main navigation"},p={id:"navbarBasicExample",class:"navbar-menu"},m={class:"navbar-start"},h=Object(c["g"])(" Moment "),f=Object(c["g"])(" Exercise Log "),g={key:0},y={class:"navbar-end"},w={class:"navbar-item"},x={class:"navbar-item has-dropdown is-hoverable"},S=Object(c["g"])("Sign in"),P=Object(c["g"])("Sign up"),A={key:1,class:"navbar-end"},_={class:"navbar-item"},k={class:"navbar-item has-dropdown is-hoverable"},H=Object(c["e"])("figure",{class:"image is-36x36"},[Object(c["e"])("img",{class:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})],-1),E={class:"navbar-dropdown is-right"},M=Object(c["g"])(" Profile "),T=Object(c["e"])("a",{class:"navbar-item"}," Change password ",-1),z=Object(c["e"])("a",{class:"navbar-item"}," Sign out ",-1);function B(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",j,[Object(c["e"])("div",p,[Object(c["e"])("div",m,[Object(c["h"])(l,{class:"navbar-item",to:"/main"},{default:Object(c["A"])((function(){return[h]})),_:1}),Object(c["h"])(l,{class:"navbar-item",to:"/log"},{default:Object(c["A"])((function(){return[f]})),_:1})]),n.Session.user?(Object(c["r"])(),Object(c["d"])("div",A,[Object(c["e"])("div",_,[Object(c["e"])("div",k,[H,Object(c["e"])("div",E,[Object(c["h"])(l,{class:"navbar-item",to:"/profile"},{default:Object(c["A"])((function(){return[M]})),_:1}),T,z])])])])):(Object(c["r"])(),Object(c["d"])("div",g,[Object(c["e"])("div",y,[Object(c["e"])("div",w,[Object(c["e"])("div",x,[Object(c["h"])(l,{class:"button is-primary",to:"/signin"},{default:Object(c["A"])((function(){return[S]})),_:1}),Object(c["h"])(l,{class:"button is-light",to:"/signup"},{default:Object(c["A"])((function(){return[P]})),_:1})])])])]))])])}var U={user:null,toRoute:"/main",Signin:function(e,t){if("zhangh8@1"!==e)throw{code:400,msg:"Sorry, there is no match email(zhangh8@1)"};if("zhangh8@1"===e&&"123"!==t)throw{code:400,msg:"Password is not correct(123)"};"zhangh8@1"===e&&"123"===t&&(this.user="Huaqi",Vt.push(this.toRoute))}},R=U,J={data:function(){return{Session:R}}};const C=i()(J,[["render",B]]);var I=C,L={components:{Header:I}};const W=i()(L,[["render",O]]);var Y=W,V={class:"section"},q={class:"container"},D={class:"columns is-centered"},F={class:"column is-two-fifths"},N=Object(c["e"])("div",{class:"content has-text-centered"},[Object(c["e"])("h1",null,"Sign In")],-1),Q={class:"field"},Z=Object(c["e"])("label",{class:"label"},"Email",-1),G={class:"control"},K={class:"field"},X=Object(c["e"])("label",{class:"label"},"Password",-1),$={class:"control"},ee=Object(c["e"])("button",{class:"button is-primary"},"Sign In",-1),te=Object(c["g"])("Don't have an account? "),ae=Object(c["g"])("Sign up");function ce(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("section",V,[Object(c["e"])("div",q,[Object(c["e"])("div",D,[Object(c["e"])("div",F,[N,Object(c["e"])("form",{class:"box",onSubmit:t[2]||(t[2]=Object(c["C"])((function(e){return i.Signin()}),["prevent"]))},[Object(c["e"])("div",Q,[Z,Object(c["e"])("div",G,[Object(c["B"])(Object(c["e"])("input",{class:"input is-success",type:"email",placeholder:"e.g. alex@example.com","onUpdate:modelValue":t[0]||(t[0]=function(t){return e.email=t})},null,512),[[c["y"],e.email]])])]),Object(c["e"])("div",K,[X,Object(c["e"])("div",$,[Object(c["B"])(Object(c["e"])("input",{class:"input is-success",type:"password",placeholder:"********","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t})},null,512),[[c["y"],e.password]])])]),ee],32),Object(c["e"])("div",null,[te,Object(c["h"])(l,{to:"/signup"},{default:Object(c["A"])((function(){return[ae]})),_:1})])])])])])}var se={data:function(){return{email:null,password:null,Session:R}},methods:{Signin:function(){this.Session.Signin(this.email,this.password)}}};const ne=i()(se,[["render",ce]]);var ie=ne,le={class:"section"},re={class:"container"},oe={class:"columns is-centered"},be={class:"column is-two-fifths"},ue=Object(c["e"])("div",{class:"content has-text-centered"},[Object(c["e"])("h1",null,"Sign Up")],-1),de={class:"box"},ve=Object(c["f"])('<div class="field"><label class="label">Username</label><div class="control"><input class="input is-success" type="text"></div></div><div class="field"><label class="label">Email</label><div class="control"><input class="input is-success" type="email" placeholder="e.g. alex@example.com"></div></div><div class="field"><label class="label">Password</label><div class="control"><input class="input is-success" type="password" pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" placeholder="********"></div></div><button class="button is-primary">Sign Up</button><div>By signing up, you agree to blablablabla</div><br>',6),Oe=Object(c["f"])('<h3>Password must contain the following:</h3><p id="letter" class="invalid">A <b>lowercase</b> letter</p><p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p><p id="number" class="invalid">A <b>number</b></p><p id="length" class="invalid">Minimum <b>8 characters</b></p>',5),je=[Oe],pe=Object(c["g"])("Already have an account? "),me=Object(c["g"])("Sign in");function he(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("section",le,[Object(c["e"])("div",re,[Object(c["e"])("div",oe,[Object(c["e"])("div",be,[ue,Object(c["e"])("form",de,[ve,Object(c["e"])("div",{id:"message",style:Object(c["n"])("".concat(e.visible?"":"display:none"))},je,4)]),Object(c["e"])("div",null,[pe,Object(c["h"])(l,{to:"/signin"},{default:Object(c["A"])((function(){return[me]})),_:1})])])])])])}var fe={};const ge=i()(fe,[["render",he]]);var ye=ge,we={class:"container"},xe={class:"columns"},Se={class:"column"};function Pe(e,t,a,s,n,i){var l=Object(c["v"])("Header"),r=Object(c["v"])("Posts");return Object(c["r"])(),Object(c["d"])("div",we,[Object(c["e"])("div",xe,[Object(c["e"])("div",Se,[Object(c["h"])(l),Object(c["h"])(r)])])])}var Ae={class:"card is-medium"},_e=Object(c["f"])('<div class="card-image"><figure class="image is-4by3"><img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div><div class="content"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time></div></div>',2),ke=[_e];function He(e,t,a,s,n,i){return Object(c["r"])(),Object(c["d"])("div",Ae,ke)}var Ee={};const Me=i()(Ee,[["render",He]]);var Te=Me,ze={components:{Header:I,Posts:Te}};const Be=i()(ze,[["render",Pe]]);var Ue=Be,Re={class:"container"},Je={class:"columns"},Ce={class:"column"},Ie=Object(c["e"])("br",null,null,-1),Le=Object(c["e"])("button",{class:"button"},"Record Your Weight",-1),We=Object(c["e"])("button",{class:"button"},"Record Your Height",-1),Ye=Object(c["e"])("button",{class:"button"},"Record Your Exercise Time",-1),Ve=Object(c["e"])("br",null,null,-1),qe=Object(c["e"])("br",null,null,-1);function De(e,t,a,s,n,i){var l=Object(c["v"])("Header"),r=Object(c["v"])("Table");return Object(c["r"])(),Object(c["d"])("div",Re,[Object(c["e"])("div",Je,[Object(c["e"])("div",Ce,[Object(c["h"])(l),Ie,Le,We,Ye,Ve,qe,Object(c["h"])(r)])])])}var Fe={class:"graph"},Ne=Object(c["e"])("strong",null,"Total Exercise Time",-1),Qe=Object(c["e"])("thead",null,[Object(c["e"])("tr",null,[Object(c["e"])("th",{scope:"col"},"Item"),Object(c["e"])("th",{scope:"col"},"Percent")])],-1),Ze=Object(c["e"])("tbody",null,[Object(c["e"])("tr",{style:{height:"85%"}},[Object(c["e"])("th",{scope:"row"},"Monday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"85min")])]),Object(c["e"])("tr",{style:{height:"23%"}},[Object(c["e"])("th",{scope:"row"},"Tuesday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"23min")])]),Object(c["e"])("tr",{style:{height:"15%"}},[Object(c["e"])("th",{scope:"row"},"Wednesday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"15min")])]),Object(c["e"])("tr",{style:{height:"38%"}},[Object(c["e"])("th",{scope:"row"},"Thursday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"38min")])]),Object(c["e"])("tr",{style:{height:"35%"}},[Object(c["e"])("th",{scope:"row"},"Friday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"35min")])]),Object(c["e"])("tr",{style:{height:"30%"}},[Object(c["e"])("th",{scope:"row"},"Saturday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"30min")])]),Object(c["e"])("tr",{style:{height:"15%"}},[Object(c["e"])("th",{scope:"row"},"Sunday"),Object(c["e"])("td",null,[Object(c["e"])("span",null,"15min")])])],-1),Ge=[Ne,Qe,Ze];function Ke(e,t,a,s,n,i){return Object(c["r"])(),Object(c["d"])("table",Fe,Ge)}var Xe={};a("79db");const $e=i()(Xe,[["render",Ke]]);var et=$e,tt={components:{Header:I,Table:et}};const at=i()(tt,[["render",De]]);var ct=at,st={class:"container"},nt={class:"columns"},it={class:"column"},lt=Object(c["e"])("br",null,null,-1),rt=Object(c["e"])("br",null,null,-1),ot=Object(c["e"])("br",null,null,-1),bt=Object(c["e"])("br",null,null,-1),ut=Object(c["e"])("br",null,null,-1);function dt(e,t,a,s,n,i){var l=Object(c["v"])("Header"),r=Object(c["v"])("Section");return Object(c["r"])(),Object(c["d"])("div",st,[Object(c["e"])("div",nt,[Object(c["e"])("div",it,[Object(c["h"])(l),lt,rt,ot,bt,ut,Object(c["h"])(r)])])])}var vt={class:"navbar is-fixed-top has-background-link-light",role:"navigation","aria-label":"main navigation"},Ot=Object(c["e"])("div",{class:"navbar-brand is-mobile"},[Object(c["e"])("figure",{class:"image is-128x128"},[Object(c["e"])("img",{class:"is-rounded",src:"https://bulma.io/images/placeholders/128x128.png"})]),Object(c["e"])("a",{role:"button",class:"navbar-burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample"},[Object(c["e"])("span",{"aria-hidden":"true"}),Object(c["e"])("span",{"aria-hidden":"true"}),Object(c["e"])("span",{"aria-hidden":"true"})])],-1),jt={id:"navbarBasicExample",class:"navbar-menu"},pt={class:"navbar-end"},mt={class:"navbar-item"},ht={class:"buttons"},ft=Object(c["g"])(" Main Page "),gt=Object(c["e"])("strong",null,"Profile Management",-1);function yt(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("nav",vt,[Ot,Object(c["e"])("div",jt,[Object(c["e"])("div",pt,[Object(c["e"])("div",mt,[Object(c["e"])("div",ht,[Object(c["h"])(l,{class:"button is-primary",to:"/main"},{default:Object(c["A"])((function(){return[ft]})),_:1}),Object(c["h"])(l,{class:"button is-primary",to:"/profileinfor"},{default:Object(c["A"])((function(){return[gt]})),_:1})])])])])])}var wt={};const xt=i()(wt,[["render",yt]]);var St=xt,Pt={class:"section"},At=Object(c["f"])('<div class="container"><div class="tabs is-centered is-boxed"><ul><li class="is-active"><a><span class="icon is-two-fifths"><i class="fas fa-image" aria-hidden="true"></i></span><span>Post</span></a></li><li><a><span class="icon is-two-fifths"><i class="fas fa-calendar-check" aria-hidden="true"></i></span><span>Exercise Log</span></a></li></ul></div></div>',1),_t=[At];function kt(e,t,a,s,n,i){return Object(c["r"])(),Object(c["d"])("section",Pt,_t)}var Ht={};const Et=i()(Ht,[["render",kt]]);var Mt=Et,Tt={components:{Header:St,Section:Mt}};const zt=i()(Tt,[["render",dt]]);var Bt=zt,Ut=Object(c["e"])("strong",null," <-- ",-1),Rt=Object(c["f"])('<section class="section"><div class="container"><div class="columns is-centered"><div class="column is-full"><form class="box"><div class="field"><figure class="image is-128x128"><img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png"></figure><br><button class="button">Change Avatar</button></div><div class="field"><label class="label">Username</label><div class="control"><input class="input is-success" type="text" value="HQ"></div></div><div class="field"><label class="label">Email</label><div class="control"><input class="input is-success" type="email" value="zhangh8@newpaltz.edu"></div></div><div class="field"><label class="label">Phone Number</label><div class="control"><input class="input is-success" value="123456789"></div></div><div class="field"><label class="label">Bio</label><div class="control"><textarea class="textarea"></textarea></div></div><div class="field"><label class="label">Height</label><div class="control"><input class="input is-success" value="167cm" disabled></div></div><div class="field"><label class="label">Weight</label><div class="control"><input class="input is-success" value="44lbs" disabled></div></div></form></div></div></div></section>',1);function Jt(e,t,a,s,n,i){var l=Object(c["v"])("router-link");return Object(c["r"])(),Object(c["d"])("div",null,[Object(c["h"])(l,{class:"button is-white",to:"/profile"},{default:Object(c["A"])((function(){return[Ut]})),_:1}),Rt])}var Ct={};const It=i()(Ct,[["render",Jt]]);var Lt=It,Wt=[{path:"/",name:"Home",component:Y},{path:"/signin",name:"Signin",component:ie},{path:"/signup",name:"Signup",component:ye},{path:"/main",name:"Main",component:Ue},{path:"/log",name:"Exercise",component:ct},{path:"/profile",name:"Profile",component:Bt},{path:"/profileinfor",name:"Profileinfor",component:Lt}],Yt=Object(b["a"])({history:Object(b["b"])(""),routes:Wt}),Vt=Yt;Object(c["b"])(o).use(Vt).mount("#app")},"79db":function(e,t,a){"use strict";a("2fbc")}});
//# sourceMappingURL=app.62cbb5a3.js.map