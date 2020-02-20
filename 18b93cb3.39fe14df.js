/*! For license information please see 18b93cb3.39fe14df.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(191),c=a(197),o=a(188),i=a(190),s=a(232);function u(){var e=Object(o.a)().siteConfig,t=void 0===e?{}:e,a=s[0];return r.a.createElement(c.a,{permalink:"/versions"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("h1",null,t.title," Versions"),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"latest"},"Current version (Stable)"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,a)," ",r.a.createElement(l.a,{to:Object(i.a)("/docs/intro")},"Documentation"))),r.a.createElement("h3",{id:"rc"},"Latest Version"),r.a.createElement("p",null,"Here you can find the latest documentation and unreleased code."),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Next Release")," ",r.a.createElement(l.a,{to:Object(i.a)("/docs/next/intro")},"Documentation"))),r.a.createElement("h3",{id:"archive"},"Past Versions"),r.a.createElement("p",null,"Here you can find documentation for previous versions of Hydra."),r.a.createElement("ul",null,s.map((function(e){return e!==a&&r.a.createElement("li",null,e," ",r.a.createElement(l.a,{to:Object(i.a)("/docs/"+e+"/intro")},"Documentation"))}))))))}u.title="Versions",t.default=u},189:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},194:function(e,t,a){"use strict";var n=a(34);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},197:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(202),c=a(188),o=a(190),i=a(1),s=a(9),u=a(191),d=(a(48),a(23),a(18),a(19),a(67),a(189)),h=a.n(d),m=a(194),f=!1,v=function(e){var t=Object(n.useRef)(!1),l=Object(n.useRef)(null),o=Object(c.a)().siteConfig,i=(void 0===o?{}:o).themeConfig.algolia,s=Object(m.b)(),u=function(){t.current||(window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;s.push(r)}}),t.current=!0)},d=function(){f?u():Promise.all([a.e(62).then(a.t.bind(null,283,7)),a.e(33).then(a.t.bind(null,284,7))]).then((function(e){var t=e[0].default;f=!0,window.docsearch=t,u()}))},v=Object(n.useCallback)((function(t){l.current.contains(t.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:h()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:h()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:v,onBlur:v,ref:l}))},p=a(198),b=a.n(p),g=a(119),E=a.n(g),k=function(){return r.a.createElement("span",{className:h()(E.a.toggle,E.a.moon)})},y=function(){return r.a.createElement("span",{className:h()(E.a.toggle,E.a.sun)})},_=function(e){var t=Object(c.a)().isClient;return r.a.createElement(b.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(k,null),unchecked:r.a.createElement(y,null)}},e))},O=function(){var e=n.useState("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):""),t=e[0],a=e[1];n.useEffect((function(){document.documentElement.setAttribute("data-theme",t)}),[t]),n.useEffect((function(){try{var e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}}),[a]);var r=n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a]);return[t,r]},N=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],l=Object(n.useState)(0),c=l[0],o=l[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useCallback)((function(e){null!==e&&u(e.getBoundingClientRect().height)}),[]),h=function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-s,a=window.innerHeight;e<s||(c&&e>c?r(!1):e+a<t&&r(!0),o(e))};return Object(n.useEffect)((function(){if(e)return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),[c,s]),{navbarRef:d,isNavbarVisible:a}},w=a(120),j=a.n(w);function C(e){var t=e.to,a=e.href,n=e.label,l=(e.position,Object(s.a)(e,["to","href","label","position"])),c=Object(o.a)(t);return r.a.createElement(u.a,Object(i.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:c},l),n)}var x=function(){var e,t=Object(c.a)().siteConfig,a=void 0===t?{}:t,l=a.baseUrl,s=a.themeConfig,d=void 0===s?{}:s,m=d.navbar,f=void 0===m?{}:m,p=d.disableDarkMode,b=void 0!==p&&p,g=f.title,E=f.logo,k=void 0===E?{}:E,y=f.links,w=void 0===y?[]:y,x=f.hideOnScroll,S=void 0!==x&&x,T=Object(n.useState)(!1),M=T[0],B=T[1],P=Object(n.useState)(!1),F=P[0],L=P[1],X=O(),I=X[0],D=X[1],R=N(S),H=R.navbarRef,V=R.isNavbarVisible,A=Object(n.useCallback)((function(){document.body.style.overflow="hidden",B(!0)}),[B]),K=Object(n.useCallback)((function(){document.body.style.overflow="visible",B(!1)}),[B]),J=Object(n.useCallback)((function(e){return D(e.target.checked?"dark":"")}),[D]),Y=Object(o.a)(k.src);return r.a.createElement("nav",{ref:H,className:h()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":M},e[j.a.navbarHideable]=S,e[j.a.navbarHidden]=!V,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:l},null!=k&&r.a.createElement("img",{className:"navbar__logo",src:Y,alt:k.alt}),null!=g&&r.a.createElement("strong",{className:F?j.a.hideLogoText:""},g)),w.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(C,Object(i.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},w.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(C,Object(i.a)({},e,{key:t}))})),!b&&r.a.createElement(_,{className:j.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===I,onChange:J}),r.a.createElement(v,{handleSearchBarToggle:L,isSearchBarExpanded:F}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:K}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:K,to:l},null!=k&&r.a.createElement("img",{className:"navbar__logo",src:Y,alt:k.alt}),null!=g&&r.a.createElement("strong",null,g)),!b&&M&&r.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===I,onChange:J})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},w.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(C,Object(i.a)({className:"menu__link"},e,{onClick:K})))})))))))},S=a(121),T=a.n(S);function M(e){var t=e.to,a=e.href,n=e.label,l=Object(s.a)(e,["to","href","label"]),c=Object(o.a)(t);return r.a.createElement(u.a,Object(i.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:c},l),n)}var B=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var P=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},l=n.copyright,i=n.links,s=void 0===i?[]:i,u=n.logo,d=void 0===u?{}:u,m=Object(o.a)(d.src);return a?r.a.createElement("footer",{className:h()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(M,e))}))):null)}))),(d||l)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:T.a.footerLogoLink},r.a.createElement(B,{alt:d.alt,url:m})):r.a.createElement(B,{alt:d.alt,url:m})),l))):null};a(122);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,m=e.title,f=e.noFooter,v=e.description,p=e.image,b=e.keywords,g=e.permalink,E=e.version,k=m||s+" \xb7 "+i,y=p||u,_=d+Object(o.a)(y),O=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:O}),v&&r.a.createElement("meta",{name:"description",content:v}),v&&r.a.createElement("meta",{property:"og:description",content:v}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:_}),y&&r.a.createElement("meta",{property:"twitter:image",content:_}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),g&&r.a.createElement("meta",{property:"og:url",content:d+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(x,null),r.a.createElement("div",{className:"main-wrapper"},h),!f&&r.a.createElement(P,null))}},198:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),c=h(l),o=h(a(189)),i=h(a(11)),s=h(a(199)),u=h(a(200)),d=a(201);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return c.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(s.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},199:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},200:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},201:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},232:function(e){e.exports=JSON.parse('["0.11"]')}}]);