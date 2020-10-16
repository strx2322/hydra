(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{141:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(2),o=t(7),i=(t(0),t(236)),a={id:"working_directory",title:"Output/Working directory",sidebar_label:"Output/Working directory"},c={unversionedId:"tutorials/basic/running_your_app/working_directory",id:"version-1.0/tutorials/basic/running_your_app/working_directory",isDocsHomePage:!1,title:"Output/Working directory",description:"Example",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/3_working_directory.md",slug:"/tutorials/basic/running_your_app/working_directory",permalink:"/docs/tutorials/basic/running_your_app/working_directory",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/3_working_directory.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1602865297,sidebar_label:"Output/Working directory",sidebar:"version-1.0/docs",previous:{title:"Multi-run",permalink:"/docs/tutorials/basic/running_your_app/multi-run"},next:{title:"Logging",permalink:"/docs/tutorials/basic/running_your_app/logging"}},u=[{value:"Disabling output subdir",id:"disabling-output-subdir",children:[]},{value:"Original working directory",id:"original-working-directory",children:[]}],p={rightToc:u};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/tutorials/basic/running_your_hydra_app/3_working_directory"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/-Example-informational",alt:"Example"})))),Object(i.b)("p",null,"Hydra solves the problem of your needing to specify a new output directory for each run, by\ncreating a directory for each run and executing your code within that working directory."),Object(i.b)("p",null,"The working directory is used to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Store the output for the application (For example, a database dump file)"),Object(i.b)("li",{parentName:"ul"},"Store the Hydra output for the run (Configuration, Logs etc)")),Object(i.b)("p",null,"Every time you run the app, a new working directory is created:"),Object(i.b)("p",null,"Python file: ",Object(i.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'import os\nfrom omegaconf import DictConfig\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print("Working directory : {}".format(os.getcwd()))\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-17\n\n$ python my_app.py\nWorking directory : /home/omry/dev/hydra/outputs/2019-09-25/15-16-19\n')),Object(i.b)("p",null,"Let's take a look at one of the working directories:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"$ tree outputs/2019-09-25/15-16-17\noutputs/2019-09-25/15-16-17\n\u251c\u2500\u2500 .hydra\n\u2502   \u251c\u2500\u2500 config.yaml\n\u2502   \u251c\u2500\u2500 hydra.yaml\n\u2502   \u2514\u2500\u2500 overrides.yaml\n\u2514\u2500\u2500 my_app.log\n")),Object(i.b)("p",null,"We have the Hydra output directory (",Object(i.b)("inlineCode",{parentName:"p"},".hydra")," by default) and the application log file.\nInside the configuration output directory we have:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"config.yaml"),": A dump of the user specified configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hydra.yaml"),": A dump of the Hydra configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"overrides.yaml"),": The command line overrides used")),Object(i.b)("p",null,"And in the main output directory:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"my_app.log"),": A log file created for this run")),Object(i.b)("h3",{id:"disabling-output-subdir"},"Disabling output subdir"),Object(i.b)("p",null,"You can change the ",Object(i.b)("inlineCode",{parentName:"p"},".hydra")," subdirectory name by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.output_subdir"),".\nYou can disable its creation by overriding ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.output_subdir")," to ",Object(i.b)("inlineCode",{parentName:"p"},"null"),". "),Object(i.b)("h3",{id:"original-working-directory"},"Original working directory"),Object(i.b)("p",null,"You can still access the original working directory if you need to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"import os\nfrom omegaconf import DictConfig\nimport hydra\n\n@hydra.main()\ndef my_app(_cfg: DictConfig) -> None:\n    print(f\"Current working directory : {os.getcwd()}\")\n    print(f\"Orig working directory    : {hydra.utils.get_original_cwd()}\")\n    print(f\"to_absolute_path('foo')   : {hydra.utils.to_absolute_path('foo')}\")\n    print(f\"to_absolute_path('/foo')  : {hydra.utils.to_absolute_path('/foo')}\")\n\nif __name__ == \"__main__\":\n    my_app()\n\n\n$ python examples/tutorial/8_working_directory/original_cwd.py\nCurrent working directory  : /Users/omry/dev/hydra/outputs/2019-10-23/10-53-03\nOriginal working directory : /Users/omry/dev/hydra\nto_absolute_path('foo')    : /Users/omry/dev/hydra/foo\nto_absolute_path('/foo')   : /foo\n")),Object(i.b)("p",null,"Working directory can be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configure_hydra/workdir"}),"customized"),"."))}l.isMDXComponent=!0},236:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),s=n,y=d["".concat(a,".").concat(s)]||d[s]||b[s]||i;return t?o.a.createElement(y,c(c({ref:r},p),{},{components:t})):o.a.createElement(y,c({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);