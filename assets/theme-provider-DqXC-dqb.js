import{n,r as m}from"./components-D5giP5-8.js";import{c as k,m as i}from"./heading-DSrixRtZ.js";import{t as l,a as r}from"./config-F5UYI80h.js";const w="/zakariafatih/assets/gotham-bold-italic-C_msAlmW.woff2",p="/zakariafatih/assets/gotham-bold-D1kvQ7KV.woff2",g="/zakariafatih/assets/gotham-book-italic-Bm2IEtSK.woff2",$="/zakariafatih/assets/gotham-book-Bnaws0Ef.woff2",G="/zakariafatih/assets/gotham-medium-italic-Dok430ou.woff2",b="/zakariafatih/assets/gotham-medium-0VT3RO8I.woff2",T="/zakariafatih/assets/ipa-gothic-DimHCOud.woff2",c=m.createContext({}),S=({theme:t="dark",children:a,className:h,as:u="div",toggleTheme:d,...y})=>{const s=x(),f=!s.theme;return n.jsxs(c.Provider,{value:{theme:t,toggleTheme:d||s.toggleTheme},children:[f&&a,!f&&n.jsx(u,{className:k(h),"data-theme":t,...y,children:a})]})};function x(){return m.useContext(c)}function o(t){return t.replace(/\s\s+/g," ")}function e(t){return o(Object.keys(t).map(a=>`--${a}: ${t[a]};`).join(`

`))}function j(){return o(Object.keys(i).map(t=>`
        @media (max-width: ${i[t]}px) {
          :root {
            ${e(l[t])}
          }
        }
      `).join(`
`))}const z=o(`
  @layer theme, base, components, layout;
`),I=o(`
  :root {
    ${e(l.base)}
  }

  ${j()}

  [data-theme='dark'] {
    ${e(r.dark)}
  }

  [data-theme='light'] {
    ${e(r.light)}
  }
`),P=o(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${$}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${g}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${b}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${G}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${p}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${w}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${T}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),E=o(`
  ${z}

  @layer theme {
    ${I}
    ${P}
  }
`);export{b as G,S as T,$ as a,E as t,x as u};
