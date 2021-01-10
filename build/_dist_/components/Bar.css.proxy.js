// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".base-timer.svelte-wkxlqh.svelte-wkxlqh{position:relative;width:100%;height:100%;z-index:9999}.base-timer__svg.svelte-wkxlqh.svelte-wkxlqh{transform:scaleX(-1)}.base-timer__circle.svelte-wkxlqh.svelte-wkxlqh{fill:none;stroke:none}.base-timer__path-elapsed.svelte-wkxlqh.svelte-wkxlqh{stroke-width:7px;stroke:rgba(65,184,131,.1)}.base-timer__path-remaining.svelte-wkxlqh.svelte-wkxlqh{stroke-width:7px;stroke-linecap:round;transform:rotate(90deg);transform-origin:center;transition:all 1s linear;fill-rule:nonzero;stroke:currentColor;color:rgba(65,184,131,.5);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.base-timer__path-remaining.green.svelte-wkxlqh.svelte-wkxlqh{color:#41b883}.base-timer__path-remaining.orange.svelte-wkxlqh.svelte-wkxlqh{color:orange}.base-timer__path-remaining.red.svelte-wkxlqh.svelte-wkxlqh{color:red}.base-timer__label.svelte-wkxlqh.svelte-wkxlqh{position:absolute;width:100%;height:100%;top:0;display:flex;align-items:center;justify-content:center;font-size:48px}.times-up.svelte-wkxlqh .base-timer__label.svelte-wkxlqh{opacity:0}.times-up.svelte-wkxlqh .base-timer__path-remaining.svelte-wkxlqh{color:rgba(65,184,131,.1)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}