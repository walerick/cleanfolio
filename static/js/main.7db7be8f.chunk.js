(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{25:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var s=c(7),a=c(1),i=c(0);const n=Object(a.createContext)(),l=e=>{let{children:t}=e;const[c,s]=Object(a.useState)("light");Object(a.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");s(e.matches?"dark":"light"),e.addEventListener("change",(e=>{s(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(n.Provider,{value:[{themeName:c,toggleTheme:()=>{const e="dark"===c?"light":"dark";localStorage.setItem("themeName",e),s(e)}}],children:t})},r={homepage:"https://walerick.github.io/cleanfolio/",title:"Home"},o={name:"Bakare Adewale",role:"Front End Engineer",description:"Hy there!!\nI'm Adewale Bakare, a FrontEnd Engineer. I am passionate about my work because I believe that competence builds confidence. This motivates me always to strive for excellence in all. \n I play video games in my free time, funny enough this helps me shape the way I tackle problems in real life. \n Life is like a video-game, you need to learn how to play so you can win.",resume:"https://drive.google.com/open?id=1DgTylioeeCeA7YCknKYcRc55jjdY_TSQ&usp=drive_fs",social:{linkedin:"https://www.linkedin.com/in/adewaletegar/",github:"https://github.com/walerick"}},j=[{name:"Cowrywise",description:"Cowrywise web clone.\n - Mobile resposive.\n -Deployed in netlify.",stack:["JavaScript","React","SQL"],sourceCode:"https://github.com/Cowrywise",livePreview:"https://cowrywlse.netlify.app"},{name:"Movie-Box",description:"A movie web application that allows users to search for movies, view details about them and save their favorites.",stack:["JavaScript","React","Api"],sourceCode:"https://github.com/walerick/hng_movie_task",livePreview:"https://moviesbocks.vercel.app/"},{name:"Simplify",description:"A web application that simplifies complex sentences for users using ReactJS and OpenAI API. ",stack:["OpenAI","JavaScript","React"],sourceCode:"https://github.com/walerick/simplify",livePreview:"https://simplify-eta.vercel.app/"},{name:"National Population Commission",description:"NPC web app that allows authorised user to register and print National Certificates.\n-Added user authentication.",stack:["JavaScript","Java","SQL"],sourceCode:"https://github.com/walerick/npc-frontend",livePreview:"https://github.com"},{name:"Advice-generator",description:"An advice generator app using the Advice Slip API -Generate a new piece of advice by clicking the dice icon",stack:["html","CSS","JavaScript"],sourceCode:"https://github.com",livePreview:"https://github.com"}],h=["HTML","CSS","JavaScript","React","Java","Python","Go","Git","SQL"],d="bakareadewale24@mail.com";var b=c(13),m=c.n(b),p=c(11),u=c.n(p),v=c(15),O=c.n(v),x=c(14),k=c.n(x);c(25);var f=()=>{const[{themeName:e,toggleTheme:t}]=Object(a.useContext)(n),[c,s]=Object(a.useState)(!1),l=()=>s(!c);return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:c?"flex":null},className:"nav__list",children:[j.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:l,className:"link link--nav",children:"Projects"})}):null,h.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:l,className:"link link--nav",children:"Skills"})}):null,d?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:l,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(i.jsx)(u.a,{}):Object(i.jsx)(m.a,{})}),Object(i.jsx)("button",{type:"button",onClick:l,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:c?Object(i.jsx)(k.a,{}):Object(i.jsx)(O.a,{})})]})};c(29);var g=()=>{const{homepage:e,title:t}=r;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(f,{})]})},w=c(8),N=c.n(w),_=c(16),y=c.n(_);c(30);var C=()=>{const{name:e,role:t,description:c,resume:s,social:a}=o;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:c&&c}),Object(i.jsxs)("div",{className:"about__contact center",children:[s&&Object(i.jsx)("a",{href:s,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),a&&Object(i.jsxs)(i.Fragment,{children:[a.github&&Object(i.jsx)("a",{href:a.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(N.a,{})}),a.linkedin&&Object(i.jsx)("a",{href:a.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(y.a,{})})]})]})]})},S=c(6),A=c.n(S),P=c(17),I=c.n(P);c(32);var E=e=>{let{project:t}=e;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsx)("h3",{children:t.name}),Object(i.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(i.jsx)("li",{className:"project__stack-item",children:e},A()())))}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(N.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(I.a,{})})]})};c(33);var J=()=>j.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(i.jsx)(E,{project:e},A()())))})]}):null;c(34);var L=()=>h.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:h.map((e=>Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},A()())))})]}):null,R=c(18),B=c.n(R);c(35);var T=()=>{const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(B.a,{fontSize:"large"})})}):null};c(36);var H=()=>d?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(d),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;c(37);var M=()=>Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"https://github.com/walerick/cleanfolio",className:"link footer__link",children:"Created By Bakare Adewale"})});c(38);var Q=()=>{const[{themeName:e}]=Object(a.useContext)(n);return Object(i.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(i.jsx)(g,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(C,{}),Object(i.jsx)(J,{}),Object(i.jsx)(L,{}),Object(i.jsx)(H,{})]}),Object(i.jsx)(T,{}),Object(i.jsx)(M,{})]})};c(39);Object(s.render)(Object(i.jsx)(l,{children:Object(i.jsx)(Q,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.7db7be8f.chunk.js.map