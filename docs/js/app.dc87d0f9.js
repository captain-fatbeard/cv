(function(e){function t(t){for(var s,l,i=t[0],o=t[1],c=t[2],d=0,b=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},n={app:0},r=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/cv/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0e78":function(e,t,a){"use strict";var s=a("1693"),n=a.n(s);n.a},"13e3":function(e,t,a){"use strict";var s=a("6d85"),n=a.n(s);n.a},1693:function(e,t,a){},"1cbb":function(e,t,a){"use strict";var s=a("3d23"),n=a.n(s);n.a},"21bb":function(e,t,a){"use strict";var s=a("2dad"),n=a.n(s);n.a},"2dad":function(e,t,a){},"3d23":function(e,t,a){},"3d90":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},4714:function(e,t,a){"use strict";var s=a("3d90"),n=a.n(s);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view"),a("Footer")],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[a("div",{staticClass:"nav"},[a("scrollactive",[a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#bio",expression:"'#bio'"}],staticClass:"scrollactive-item",attrs:{href:"#bio"}},[e._v("about")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],staticClass:"scrollactive-item",attrs:{href:"#skills"}},[e._v("skills")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#work",expression:"'#work'"}],staticClass:"scrollactive-item",attrs:{href:"#work"}},[e._v("work")]),a("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],staticClass:"scrollactive-item",attrs:{href:"#contact"}},[e._v("contact")])])],1)])},i=[],o={name:"Header"},c=o,u=(a("1cbb"),a("2877")),d=Object(u["a"])(c,l,i,!1,null,"5c6af4a0",null),b=d.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("footer",{attrs:{id:"contact"}},[s("h2",[e._v("THANKS!")]),s("h4",[e._v("Want to chat about something?")]),s("a",[s("img",{staticClass:"icon facebook",attrs:{src:a("9c81")}})]),s("a",{attrs:{href:"https://www.linkedin.com/in/larsenjacob/",target:"_blank"}},[s("img",{staticClass:"icon linkedin",attrs:{src:a("cbff")}})]),s("a",{attrs:{href:"mailto:jacoblarsen86@live.com",target:"_blank"}},[s("img",{staticClass:"icon email",attrs:{src:a("f70f")}})]),s("p",[e._v("© Jacob Juul Larsen")])])}],v={name:"Footer"},p=v,j=(a("4714"),Object(u["a"])(p,f,m,!1,null,"704c8420",null)),h=j.exports,g={components:{Header:b,Footer:h}},k=g,_=Object(u["a"])(k,n,r,!1,null,null,null),y=_.exports,w=a("8c4f"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("section",{staticClass:"flex-center position-rel full-height",attrs:{id:"start-view"}},[a("start-view")],1),a("section",{staticClass:"position-rel full-height",attrs:{id:"bio"}},[a("div",[a("underlined-title",{attrs:{title:"About me"}}),a("bio")],1)]),a("section",{staticClass:"flex-center position-rel full-height",attrs:{id:"skills"}},[a("div",[a("underlined-title",{attrs:{title:"Skills"}}),a("graph")],1)]),a("section",{attrs:{id:"work"}},[a("div",[a("underlined-title",{attrs:{title:"Work"}}),a("timeline")],1)])])},x=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("logo")},z=[],q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("h1",[e._v("Jacob Juul Larsen")]),a("h2",[e._v("Web Developer")])])}],S={name:"logo"},E=S,D=(a("e7e6"),Object(u["a"])(E,q,P,!1,null,"6b9eed45",null)),N=D.exports,$={name:"start-view",components:{Logo:N}},G=$,L=Object(u["a"])(G,O,z,!1,null,null,null),T=L.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"timeline"},e._l(e.timeline,(function(t,s){return a("div",{key:s,staticClass:"item"},[a("div",{staticClass:"heading"},[a("span",{staticClass:"circle",class:{present:t.present}},[e._v("•")]),e._v(" "+e._s(t.year)+" ")]),a("div",{staticClass:"body"},[a("h2",[e._v(e._s(t.title))]),a("p",[e._v(e._s(t.text))])])])})),0)},M=[],J={name:"timeline",data:function(){return{timeline:[{present:!0,year:"2020",title:"Ambition",text:"Laravel, vuejs"},{year:"2015 - 2019",title:"Netbooster / Artefact",text:"Team lead"},{year:"2013 - 2015",title:"Designheroes",text:"PHP Frameworks Opencart"},{year:"2012",title:"Rete-Moto / Heroes & Generals",text:"Web-programming & forum maintenance. Started as 2 month internship."},{year:"2011",title:"AmPd",text:"Freelance Web development, design and programmingin in HTML5/CSS3."}]}}},A=J,F=(a("0e78"),Object(u["a"])(A,H,M,!1,null,"6134d643",null)),W=F.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",e._l(e.skills,(function(t){return a("button",{key:t.id,class:{"is-inactive":!t.active},on:{click:function(a){return e.updateGraphData(t)}}},[e._v(" "+e._s(t.label)+" "),a("span",{style:{"background-color":t.borderColor}})])})),0),a("canvas",{attrs:{id:"skills-graph",width:"400",height:"400"}})])},B=[],U=(a("cb29"),a("4de4"),a("d81d"),a("30ef")),R=a.n(U),V={name:"graph",data:function(){return{graph:"tester",skills:[{id:1,label:"languages",active:!0,backgroundColor:"rgba(255, 99, 132, 0.1)",borderColor:"rgb(255, 99, 132)",data:[{label:"html",value:99},{label:"PHP",value:90},{label:"mysql",value:70},{label:"javascript",value:80},{label:"css",value:99}]},{id:2,label:"frontend",active:!0,backgroundColor:"rgba(132, 99, 255, 0.1)",borderColor:"rgb(132, 99, 255)",data:[{label:"ReactJS",value:50},{label:"Bootstrap",value:95},{label:"VueJS",value:75},{label:"jquery",value:95}]},{id:3,label:"backend",active:!0,backgroundColor:"rgba(99, 255, 190, 0.1)",borderColor:"rgb(99, 255, 190)",data:[{label:"NodeJS",value:60},{label:"Laravel",value:60},{label:"Wordpress",value:75}]},{id:4,label:"Other services",active:!1,backgroundColor:"rgba(255, 193, 99, 0.1)",borderColor:"rgb(255, 193, 99)",data:[{label:"Git",value:85},{label:"new relic",value:65},{label:"aws",value:45}]},{id:5,label:"Developer Tools",active:!1,backgroundColor:"rgba(99, 161, 255, 0.1)",borderColor:"rgb(99, 161, 255)",data:[{label:"sass",value:95},{label:"webpack",value:65},{label:"grunt & gulp",value:90},{label:"phpunit",value:70}]},{id:6,label:"Package Managers",active:!1,backgroundColor:"rgba(141, 164, 173, 0.1)",borderColor:"rgb(141, 164, 173)",data:[{label:"NPM",value:90},{label:"Composer",value:90},{label:"Homebrew",value:90},{label:"Chocolatey",value:90}]}]}},computed:{makeGraphData:function(){var e=[],t=[],a=0,s=0;return this.skills.filter((function(e){return e.active})).map((function(e){s+=e.data.length})),this.skills.filter((function(e){return e.active})).map((function(n){var r=new Array(s).fill(0);n.data.map((function(e){r[a]=e.value,a++,t.push(e.label)})),e.push({label:n.label,fill:!0,backgroundColor:n.backgroundColor,borderColor:n.borderColor,data:r})})),{datasets:e,labels:t}}},methods:{updateGraphData:function(e){e.active=!e.active,this.graph.data.labels=this.makeGraphData.labels,this.graph.data.datasets=this.makeGraphData.datasets,this.graph.update()}},mounted:function(){var e={elements:{line:{tension:0,borderWidth:2,color:"red"}},legend:{display:!1},scale:{pointLabels:{fontColor:"#000"},gridLines:{color:"#636363"},ticks:{display:!1,beginAtZero:!0}}};this.graph=new R.a(document.getElementById("skills-graph"),{type:"radar",data:{labels:this.makeGraphData.labels,datasets:this.makeGraphData.datasets},options:e})}},K=V,Y=(a("9926"),Object(u["a"])(K,I,B,!1,null,"021c9254",null)),Z=Y.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v(" PHP javascript Laravel vuejs Test Driving development ")]),a("p",[e._v(" You can find this project on "),a("a",{attrs:{href:"https://github.com/captain-fatbeard/cv",target:"_blank"}},[e._v("Github")])]),a("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in eleifend magna. Nullam lacinia mollis massa non finibus. Suspendisse consequat lacus erat, a finibus felis convallis at. Proin et lacus et turpis sodales suscipit. In volutpat quis elit in vestibulum. Aenean convallis, neque ut elementum rutrum, magna enim pellentesque leo, sit amet commodo sem urna sit amet eros. Donec odio mauris, dictum sit amet ipsum id, tempus mattis felis. Etiam felis nisi, vulputate eget bibendum in, ullamcorper malesuada ligula. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla aliquam, turpis eget vulputate elementum, urna sem lobortis nisl, sit amet interdum dolor ex id mauris.")]),a("p",[e._v("Donec elementum placerat ipsum, quis elementum nisl tincidunt quis. Cras vel vulputate nunc, in vehicula nibh. Nulla ante arcu, suscipit vel lectus sed, facilisis euismod sapien. Nam tempor in elit scelerisque ullamcorper. Sed sed suscipit risus. Maecenas blandit iaculis pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc pharetra porta diam.")]),a("p",[e._v("Duis iaculis in arcu quis auctor. Etiam nisi libero, mattis quis felis non, maximus fermentum tortor. Fusce sollicitudin arcu eros, vel porttitor nunc iaculis aliquet. Nam ullamcorper interdum elit, et bibendum urna. Pellentesque sit amet suscipit enim. Integer sed ex quis odio malesuada elementum nec ac nisi. Sed iaculis dui dictum, rhoncus eros sit amet, vestibulum libero.")])])}],ee={name:"bio"},te=ee,ae=Object(u["a"])(te,Q,X,!1,null,"622ef4ee",null),se=ae.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",[e._v(e._s(e.title))])},re=[],le={name:"underlined-title",props:{title:String}},ie=le,oe=(a("13e3"),Object(u["a"])(ie,ne,re,!1,null,"44c0afbb",null)),ce=oe.exports,ue={name:"home",components:{StartView:T,Timeline:W,Graph:Z,Bio:se,UnderlinedTitle:ce}},de=ue,be=(a("21bb"),Object(u["a"])(de,C,x,!1,null,null,null)),fe=be.exports,me=a("e057"),ve=a.n(me),pe=a("f13c"),je=a.n(pe);s["a"].use(ve.a),s["a"].use(je.a,{container:"body",duration:500,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),s["a"].use(w["a"]);var he=new w["a"]({base:"/cv",mode:"history",routes:[{path:"/",name:"home",component:fe}]});s["a"].config.productionTip=!0,new s["a"]({router:he,render:function(e){return e(y)}}).$mount("#app")},"6d85":function(e,t,a){},9926:function(e,t,a){"use strict";var s=a("abe2"),n=a.n(s);n.a},"9c81":function(e,t,a){e.exports=a.p+"img/icon-facebook.1112d3e7.svg"},a9cf:function(e,t,a){},abe2:function(e,t,a){},cbff:function(e,t,a){e.exports=a.p+"img/icon-linkedin.d5c96152.svg"},e7e6:function(e,t,a){"use strict";var s=a("a9cf"),n=a.n(s);n.a},f70f:function(e,t,a){e.exports=a.p+"img/icon-envelope.adc7c163.svg"}});
//# sourceMappingURL=app.dc87d0f9.js.map