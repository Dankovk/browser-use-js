"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5720],{1755:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"guides/installation","title":"Installation Guide","description":"This guide will walk you through the process of installing and setting up browser-use-node in your project.","source":"@site/docs/guides/installation.md","sourceDirName":"guides","slug":"/guides/installation","permalink":"/browser-use-node/guides/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/dankovk/browser-use-node/tree/main/docs/docs/guides/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","previous":{"title":"Guides","permalink":"/browser-use-node/guides/"},"next":{"title":"Basic Browser Control","permalink":"/browser-use-node/guides/basic-browser-control"}}');var r=s(4848),l=s(8453);const t={sidebar_position:1},o="Installation Guide",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"Verifying Installation",id:"verifying-installation",level:2},{value:"Next Steps",id:"next-steps",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"installation-guide",children:"Installation Guide"})}),"\n",(0,r.jsx)(n.p,{children:"This guide will walk you through the process of installing and setting up browser-use-node in your project."}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"Before you begin, ensure you have the following installed:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://bun.sh",children:"Bun"})," (Required for development)"]}),"\n",(0,r.jsx)(n.li,{children:"A modern browser (Chrome/Firefox/Edge)"}),"\n",(0,r.jsx)(n.li,{children:"OpenAI API key"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Clone the repository:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/browser-use/browser-use-node.git\ncd browser-use-node\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Install dependencies:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bun install\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Set up environment variables:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"4",children:["\n",(0,r.jsxs)(n.li,{children:["Edit ",(0,r.jsx)(n.code,{children:".env"})," and add your OpenAI API key:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-env",children:"OPENAI_API_KEY=your_api_key_here\n"})}),"\n",(0,r.jsx)(n.h2,{id:"verifying-installation",children:"Verifying Installation"}),"\n",(0,r.jsx)(n.p,{children:"To verify your installation:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Run the tests:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bun test\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Try a simple example:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { BrowserUse } from 'browser-use-node';\n\nasync function main() {\n  const browser = new BrowserUse();\n  await browser.goto('https://example.com');\n  await browser.close();\n}\n\nmain().catch(console.error);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"next-steps",children:"Next Steps"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Learn about ",(0,r.jsx)(n.a,{href:"/browser-use-node/guides/basic-browser-control",children:"Basic Browser Control"})]}),"\n",(0,r.jsxs)(n.li,{children:["Check out our ",(0,r.jsx)(n.a,{href:"/browser-use-node/examples/",children:"Examples"})]}),"\n",(0,r.jsxs)(n.li,{children:["Read the ",(0,r.jsx)(n.a,{href:"../api/index.md",children:"API Reference"})]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var i=s(6540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);