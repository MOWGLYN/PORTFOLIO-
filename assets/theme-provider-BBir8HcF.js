import{n,r as i}from"./components-D5giP5-8.js";import{c as O,m}from"./heading-CPgvCoWE.js";import{t as l,a as r}from"./config-Def3Agom.js";const w="/PORTFOLIO-/assets/gotham-bold-italic-C_msAlmW.woff2",p="/PORTFOLIO-/assets/gotham-bold-D1kvQ7KV.woff2",g="/PORTFOLIO-/assets/gotham-book-italic-Bm2IEtSK.woff2",T="/PORTFOLIO-/assets/gotham-book-Bnaws0Ef.woff2",k="/PORTFOLIO-/assets/gotham-medium-italic-Dok430ou.woff2",$="/PORTFOLIO-/assets/gotham-medium-0VT3RO8I.woff2",G="/PORTFOLIO-/assets/ipa-gothic-DimHCOud.woff2",c=i.createContext({}),v=({theme:t="dark",children:e,className:h,as:u="div",toggleTheme:d,...y})=>{const s=b(),f=!s.theme;return n.jsxs(c.Provider,{value:{theme:t,toggleTheme:d||s.toggleTheme},children:[f&&e,!f&&n.jsx(u,{className:O(h),"data-theme":t,...y,children:e})]})};function b(){return i.useContext(c)}function o(t){return t.replace(/\s\s+/g," ")}function a(t){return o(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function I(){return o(Object.keys(m).map(t=>`
        @media (max-width: ${m[t]}px) {
          :root {
            ${a(l[t])}
          }
        }
      `).join(`
`))}const P=o(`
  @layer theme, base, components, layout;
`),x=o(`
  :root {
    ${a(l.base)}
  }

  ${I()}

  [data-theme='dark'] {
    ${a(r.dark)}
  }

  [data-theme='light'] {
    ${a(r.light)}
  }
`),R=o(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${T}) format('woff2');
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
    src: url(${$}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${k}) format('woff2');
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
    src: url(${G}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),B=o(`
  ${P}

  @layer theme {
    ${x}
    ${R}
  }
`);export{$ as G,v as T,T as a,B as t,b as u};
