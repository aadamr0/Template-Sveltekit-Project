import { c as create_ssr_component, v as validate_component, o as onDestroy } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const css$4 = {
  code: "@media only screen and (max-width: 6.9in){#navbar-div.svelte-edv3gm{display:none}}",
  map: '{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<!-- DESKTOP NAVBAR -->\\n<div id=\\"navbar-div\\">\\n\\t<a href=\\"/\\" class=\\"logo-a\\">Home</a>\\n\\t<a href=\\"/page-1\\" class=\\"page-1-a\\">page 1</a>\\n\\t<a href=\\"/\\" class=\\"page-2-a\\">page 2</a>\\n\\t<a href=\\"/\\" class=\\"page-3-a\\">page 3</a>\\n</div>\\n\\n<style>\\n\\t/* MOBILE  */\\n\\t@media only screen and (max-width: 6.9in) {\\n\\t\\t#navbar-div {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAUC,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,yBAAY,CACX,OAAO,CAAE,IACV,CACD"}'
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return ` <div id="navbar-div" class="svelte-edv3gm" data-svelte-h="svelte-alpu2k"><a href="/" class="logo-a">Home</a> <a href="/page-1" class="page-1-a">page 1</a> <a href="/" class="page-2-a">page 2</a> <a href="/" class="page-3-a">page 3</a> </div>`;
});
const css$3 = {
  code: "nav.svelte-103szul{visibility:hidden;position:fixed;top:0;left:0;height:100%;width:100%;background-color:grey;z-index:1000;transition-duration:250ms;opacity:0}.open.svelte-103szul{visibility:visible;opacity:1}@media only screen and (min-width: 6.9in){nav.svelte-103szul{display:none}}",
  map: '{"version":3,"file":"NavScreen.svelte","sources":["NavScreen.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let isOpen;\\nexport let toggleNavScreen;\\n<\/script>\\n\\n<!-- Fullscreen mobile NAVSCREEN -->\\n<nav class:open={isOpen}>\\n\\t<button id=\\"close-button\\" on:click={toggleNavScreen}>Close menu</button>\\n\\t<a on:click={toggleNavScreen} href=\\"/\\">Home</a>\\n\\t<a on:click={toggleNavScreen} href=\\"/page-1\\">Page 1</a>\\n</nav>\\n\\n<style>\\n\\tnav {\\n\\t\\tvisibility: hidden;\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-color: grey;\\n\\t\\tz-index: 1000;\\n\\t\\ttransition-duration: 250ms;\\n\\t\\topacity: 0;\\n\\t}\\n\\t.open {\\n\\t\\tvisibility: visible;\\n\\t\\topacity: 1;\\n\\t}\\n\\n\\t@media only screen and (min-width: 6.9in) {\\n\\t\\tnav {\\n\\t\\t\\tdisplay: none;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAYC,kBAAI,CACH,UAAU,CAAE,MAAM,CAClB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,IAAI,CACtB,OAAO,CAAE,IAAI,CACb,mBAAmB,CAAE,KAAK,CAC1B,OAAO,CAAE,CACV,CACA,oBAAM,CACL,UAAU,CAAE,OAAO,CACnB,OAAO,CAAE,CACV,CAEA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,kBAAI,CACH,OAAO,CAAE,IACV,CACD"}'
};
const NavScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen } = $$props;
  let { toggleNavScreen } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.toggleNavScreen === void 0 && $$bindings.toggleNavScreen && toggleNavScreen !== void 0)
    $$bindings.toggleNavScreen(toggleNavScreen);
  $$result.css.add(css$3);
  return ` <nav class="${["svelte-103szul", isOpen ? "open" : ""].join(" ").trim()}"><button id="close-button" data-svelte-h="svelte-11bwbur">Close menu</button> <a href="/" data-svelte-h="svelte-34qlnv">Home</a> <a href="/page-1" data-svelte-h="svelte-2x0cjh">Page 1</a> </nav>`;
});
const css$2 = {
  code: "@media only screen and (min-width: 6.9in){#mobile-menu-div.svelte-1uv1am6{display:none;border:1px solid grey}}@media only screen and (max-width: 6.9in){#mobile-menu-div.svelte-1uv1am6{display:flex;justify-content:space-between}}",
  map: '{"version":3,"file":"MobileMenu.svelte","sources":["MobileMenu.svelte"],"sourcesContent":["<script lang=\\"ts\\">import NavScreen from \\"./NavScreen.svelte\\";\\nlet navScreenIsOpen = false;\\nconst toggleNavScreen = () => navScreenIsOpen = !navScreenIsOpen;\\n<\/script>\\n\\n<!-- MOBILE header -->\\n<div id=\\"mobile-menu-div\\">\\n\\t<a href=\\"/\\" class=\\"logo-a\\">Home</a>\\n\\t<button on:click={toggleNavScreen} id=\\"open-button\\">Menu</button>\\n</div>\\n\\n<!-- NAVSCREEN (full screen, fixed position, toggled with open/close button) -->\\n<NavScreen isOpen={navScreenIsOpen} toggleNavScreen={toggleNavScreen} />\\n\\n<style>\\n\\t/* DESKTOP */\\n\\t@media only screen and (min-width: 6.9in) {\\n\\t\\t#mobile-menu-div {\\n\\t\\t\\tdisplay: none;\\n\\t\\t\\tborder: 1px solid grey;\\n\\t\\t}\\n\\t}\\n\\n\\t/* MOBILE */\\n\\t@media only screen and (max-width: 6.9in) {\\n\\t\\t#mobile-menu-div {\\n\\t\\t\\tdisplay: flex;\\n\\t\\t\\tjustify-content: space-between;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAgBC,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,+BAAiB,CAChB,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IACnB,CACD,CAGA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,+BAAiB,CAChB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAClB,CACD"}'
};
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navScreenIsOpen = false;
  const toggleNavScreen = () => navScreenIsOpen = !navScreenIsOpen;
  $$result.css.add(css$2);
  return ` <div id="mobile-menu-div" class="svelte-1uv1am6"><a href="/" class="logo-a" data-svelte-h="svelte-f8n8yg">Home</a> <button id="open-button" data-svelte-h="svelte-12ybo5">Menu</button></div>  ${validate_component(NavScreen, "NavScreen").$$render($$result, { isOpen: navScreenIsOpen, toggleNavScreen }, {}, {})}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer id="footer" data-svelte-h="svelte-qsxuez"><p>Copyright © 2022.</p> <p>All rights reserved.</p></footer>`;
});
const transitionDuration = writable(125);
const css$1 = {
  code: "@media only screen and (max-width: 6.9in){#content-div.svelte-1l8ma9i{overflow:scroll;display:grid;grid-template-rows:1fr auto}}@media only screen and (min-width: 6.9in){#content-div.svelte-1l8ma9i{overflow:scroll;height:100%;display:grid;grid-template-rows:1fr auto}}",
  map: '{"version":3,"file":"Content.svelte","sources":["Content.svelte"],"sourcesContent":["<script lang=\\"ts\\">import Footer from \\"./Footer.svelte\\";\\nimport { fade } from \\"svelte/transition\\";\\nimport { transitionDuration } from \\"../stores/transition\\";\\nimport { onDestroy } from \\"svelte\\";\\nlet transitionSpeed;\\nconst unsubscribeTransitionDuration = transitionDuration.subscribe((value) => {\\n  transitionSpeed = value;\\n});\\nonDestroy(unsubscribeTransitionDuration);\\nexport let currentUrl;\\n<\/script>\\n\\n<!-- CONTENT -->\\n<div id=\\"content-div\\">\\n\\t<!-- MAIN content, based off pages & routing, with a fading transition animation between pages -->\\n\\t{#key currentUrl}\\n\\t\\t<main\\n\\t\\t\\tin:fade={{ duration: transitionSpeed, delay: 2 * transitionSpeed }}\\n\\t\\t\\tout:fade={{ duration: transitionSpeed }}\\n\\t\\t>\\n\\t\\t\\t<slot />\\n\\t\\t</main>\\n\\t{/key}\\n\\n\\t<!-- FOOTER -->\\n\\t<Footer />\\n</div>\\n\\n<style>\\n\\t/* MOBILE  */\\n\\t@media only screen and (max-width: 6.9in) {\\n\\t\\t#content-div {\\n\\t\\t\\toverflow: scroll;\\n\\t\\t\\tdisplay: grid;\\n\\t\\t\\tgrid-template-rows: 1fr auto;\\n\\t\\t}\\n\\t}\\n\\n\\t/* DESKTOP */\\n\\t@media only screen and (min-width: 6.9in) {\\n\\t\\t#content-div {\\n\\t\\t\\toverflow: scroll;\\n\\t\\t\\theight: 100%;\\n\\t\\t\\tdisplay: grid;\\n\\t\\t\\tgrid-template-rows: 1fr auto;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA8BC,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,2BAAa,CACZ,QAAQ,CAAE,MAAM,CAChB,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,GAAG,CAAC,IACzB,CACD,CAGA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,2BAAa,CACZ,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,GAAG,CAAC,IACzB,CACD"}'
};
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const unsubscribeTransitionDuration = transitionDuration.subscribe((value) => {
  });
  onDestroy(unsubscribeTransitionDuration);
  let { currentUrl } = $$props;
  if ($$props.currentUrl === void 0 && $$bindings.currentUrl && currentUrl !== void 0)
    $$bindings.currentUrl(currentUrl);
  $$result.css.add(css$1);
  return ` <div id="content-div" class="svelte-1l8ma9i"> <main>${slots.default ? slots.default({}) : ``}</main>  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
const css = {
  code: "@media only screen and (max-width: 6.9in){#app.svelte-1a7yinz{display:grid;grid-template-rows:10% auto}}@media only screen and (min-width: 6.9in){#app.svelte-1a7yinz{display:grid;grid-template-rows:10% auto}}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import \\"../styles/globals.css\\";\\nimport Navbar from \\"../components/Navbar.svelte\\";\\nimport MobileMenu from \\"../components/MobileMenu.svelte\\";\\nimport Content from \\"../components/Content.svelte\\";\\nexport let data;\\n<\/script>\\n\\n<!-- APP LAYOUT -->\\n<div id=\\"app\\">\\n\\t<!-- NAVBAR OR MOBILE MENU (navigation) -->\\n\\t<Navbar />\\n\\t<MobileMenu />\\n\\n\\t<!-- REST OF CONTENT -->\\n\\t<Content currentUrl={data.url}>\\n\\t\\t<slot />\\n\\t</Content>\\n</div>\\n\\n<style>\\n\\t/* MOBILE */\\n\\t@media only screen and (max-width: 6.9in) {\\n\\t\\t#app {\\n\\t\\t\\tdisplay: grid;\\n\\t\\t\\tgrid-template-rows: 10% auto;\\n\\t\\t}\\n\\t}\\n\\n\\t/* DESKTOP */\\n\\t@media only screen and (min-width: 6.9in) {\\n\\t\\t#app {\\n\\t\\t\\tdisplay: grid;\\n\\t\\t\\tgrid-template-rows: 10% auto;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqBC,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,mBAAK,CACJ,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,GAAG,CAAC,IACzB,CACD,CAGA,OAAO,IAAI,CAAC,MAAM,CAAC,GAAG,CAAC,YAAY,KAAK,CAAE,CACzC,mBAAK,CACJ,OAAO,CAAE,IAAI,CACb,kBAAkB,CAAE,GAAG,CAAC,IACzB,CACD"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return ` <div id="app" class="svelte-1a7yinz"> ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}  ${validate_component(Content, "Content").$$render($$result, { currentUrl: data.url }, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })} </div>`;
});
export {
  Layout as default
};
