(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{192:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(233)),i={id:"minimal_example",title:"Minimal example"},c={id:"tutorials/structured_config/minimal_example",title:"Minimal example",description:"There are three key elements in this example:",source:"@site/docs/tutorials/structured_config/1_minimal_example.md",permalink:"/docs/next/tutorials/structured_config/minimal_example",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/structured_config/1_minimal_example.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1589788783,sidebar:"Docs",previous:{title:"Introduction to Structured Configs",permalink:"/docs/next/tutorials/structured_config/intro"},next:{title:"Nesting configs",permalink:"/docs/next/tutorials/structured_config/nesting"}},p=[{value:"Duck typing",id:"duck-typing",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are three key elements in this example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A ",Object(o.b)("inlineCode",{parentName:"li"},"@dataclass")," describes the application's configuration"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ConfigStore")," manages the Structured Config. The config name ",Object(o.b)("inlineCode",{parentName:"li"},"config")," corresponds to the config filename ",Object(o.b)("inlineCode",{parentName:"li"},"config.yaml")," from the config-file based examples. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cfg")," is ",Object(o.b)("inlineCode",{parentName:"li"},"duck typed")," as a ",Object(o.b)("inlineCode",{parentName:"li"},"MySQLConfig")," instead of a ",Object(o.b)("inlineCode",{parentName:"li"},"DictConfig")," ")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\n@dataclassg\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\ncs = ConfigStore.instance()\n# Registering the Config class with the name \'config\'. \ncs.store(name="config", node=MySQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: MySQLConfig) -> None:\n    print(f"Host: {cfg.host}, port: {cfg.port}")\n\nif __name__ == "__main__":\n    my_app()\n')),Object(o.b)("p",null,"If you have a typo in your code, such as pork in the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'@hydra.main(config_name="config")\ndef my_app(cfg: MySQLConfig) -> None:\n    # pork should be port!\n    if cfg.pork == 80:\n        print("Is this a webserver?!")\n')),Object(o.b)("p",null,"Static type checkers like ",Object(o.b)("inlineCode",{parentName:"p"},"mypy")," can catch it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'$ mypy my_app_type_error.py\nmy_app_type_error.py:21: error: "MySQLConfig" has no attribute "pork"\nFound 1 error in 1 file (checked 1 source file)\n')),Object(o.b)("p",null,"With structured configs, Hydra will catch these and runtime errors that mypy cannot, such as:"),Object(o.b)("p",null,"A type error in the code:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app_type_error.py\nTraceback (most recent call last):\n...\nomegaconf.errors.ConfigAttributeError: Key 'pork' not in 'MySQLConfig'\n        full_key: pork\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),Object(o.b)("p",null,"A type error in the command line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"$ python my_app_type_error.py port=fail\n... \nomegaconf.errors.ValidationError: Value 'fail' could not be converted to Integer\n        full_key: port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),Object(o.b)("h2",{id:"duck-typing"},"Duck typing"),Object(o.b)("p",null,"In the example above ",Object(o.b)("inlineCode",{parentName:"p"},"cfg")," is duck typed as ",Object(o.b)("inlineCode",{parentName:"p"},"MySQLConfig"),".\nIt is actually an instance of ",Object(o.b)("inlineCode",{parentName:"p"},"DictConfig"),". The duck typing enables static type checking by tools like Mypy or PyCharm.\nThis reduces development time by catching coding errors before you run your application."),Object(o.b)("p",null,"The name ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Duck_typing"}),"Duck typing"),' comes from the phrase "If it walks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck".\nIt can be useful when you care about the methods or attributes of an object, not the actual type of the object.'))}s.isMDXComponent=!0},233:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=r,m=u["".concat(i,".").concat(f)]||u[f]||b[f]||o;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);