const fs = require("fs");
const path = require("path");
const root = path.resolve(__dirname, "..");

const BLOCK = `
<!-- ====== Prototype variant switcher (review tool — not part of the design) ====== -->
<div id="proto-switch" role="navigation" aria-label="Prototype variants">
  <span class="ps-label">Mountain&nbsp;Glow&nbsp;·&nbsp;Prototypes</span>
  <nav class="ps-links"></nav>
</div>
<style>
  #proto-switch{position:fixed;left:0;right:0;top:0;height:36px;z-index:2147483600;
    display:flex;align-items:center;gap:14px;padding:0 12px;
    background:#1B1D17;color:#EDE7D9;
    font-family:'Hanken Grotesk',ui-sans-serif,system-ui,-apple-system,sans-serif;
    font-size:12px;line-height:1;box-shadow:0 1px 0 rgba(0,0,0,.25);
    overflow-x:auto;overflow-y:hidden;scrollbar-width:none;}
  #proto-switch::-webkit-scrollbar{display:none;}
  #proto-switch .ps-label{font-size:9px;letter-spacing:.22em;text-transform:uppercase;
    color:#8F8B79;white-space:nowrap;flex:none;}
  #proto-switch .ps-links{display:flex;align-items:center;gap:5px;flex:none;}
  #proto-switch a{color:#CBC5B4;text-decoration:none;white-space:nowrap;
    padding:0 11px;height:26px;border-radius:20px;border:1px solid transparent;
    display:inline-flex;align-items:center;font-size:12px;letter-spacing:.01em;
    transition:background .18s,color .18s,border-color .18s;}
  #proto-switch a:hover{color:#FBF8F2;border-color:#39392f;}
  #proto-switch a:focus-visible{outline:2px solid #C99A4B;outline-offset:2px;}
  #proto-switch a.active{background:#C99A4B;color:#1B1D17;font-weight:600;}
  #proto-switch a .n{opacity:.5;margin-right:6px;font-variant-numeric:tabular-nums;}
  #proto-switch a.active .n{opacity:.65;}
  @media (max-width:640px){
    #proto-switch{gap:8px;padding:0 8px;}
    #proto-switch .ps-label{display:none;}
  }
  @media print{#proto-switch{display:none;}}
</style>
<script>
(function(){
  var H=36;
  var items=[
    ['index.html','Overview',''],
    ['concept-1-progressive-reveal.html','Progressive Reveal','1'],
    ['concept-2-skin-consult.html','Skin Consult','2'],
    ['concept-3-layered-routine.html','Layered Routine','3'],
    ['concept-4-tiered-ritual.html','Tiered Ritual','4'],
    ['concept-5-founder-editorial.html','Founder Editorial','5'],
    ['reels-lab.html','Reels Lab','6'],
    ['benefits-parallax.html','Benefits','7']
  ];
  var here=(location.pathname.split('/').pop()||'index.html');
  if(here==='') here='index.html';
  var nav=document.querySelector('#proto-switch .ps-links');
  items.forEach(function(it){
    var a=document.createElement('a');
    a.href=it[0];
    a.innerHTML=(it[2]?'<span class="n">'+it[2]+'</span>':'')+it[1];
    if(it[0]===here) a.setAttribute('aria-current','page'), a.className='active';
    nav.appendChild(a);
  });
  // push the page below the fixed bar without breaking the page's own sticky chrome
  document.body.style.paddingTop=H+'px';
  document.documentElement.style.scrollPaddingTop=H+'px';
  function bump(){
    var els=document.body.getElementsByTagName('*');
    for(var i=0;i<els.length;i++){
      var el=els[i];
      if(el.id==='proto-switch'||(el.closest&&el.closest('#proto-switch'))) continue;
      if(el.dataset.psBumped) continue;
      var cs=getComputedStyle(el), pos=cs.position;
      if(pos!=='sticky'&&pos!=='fixed') continue;
      var top=parseFloat(cs.top);
      if(isNaN(top)||top<0) continue;
      // sticky headers (top:0) + sticky sidebars (positive top): shift down by H
      if(pos==='sticky'&&top<140){ el.style.top=(top+H)+'px'; el.dataset.psBumped='1'; }
      // small fixed top bars only — never full-screen drawers/overlays or bottom bars
      else if(pos==='fixed'&&top<=H&&el.getBoundingClientRect().height<160){ el.style.top=(top+H)+'px'; el.dataset.psBumped='1'; }
    }
  }
  function run(){ bump(); }
  if(document.readyState!=='loading') run(); else document.addEventListener('DOMContentLoaded',run);
  var rt; addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(bump,150);});
})();
</script>
<!-- ====== end prototype switcher ====== -->
`;

const files = ["benefits-parallax.html","reels-lab.html","index.html","concept-1-progressive-reveal.html","concept-2-skin-consult.html","concept-3-layered-routine.html","concept-4-tiered-ritual.html","concept-5-founder-editorial.html"];
files.forEach(function(f){
  const fp = path.join(root, f);
  let html = fs.readFileSync(fp, "utf8");
  if (html.indexOf("proto-switch") !== -1) { console.log("skip (already has switcher): " + f); return; }
  const idx = html.lastIndexOf("</body>");
  if (idx === -1) { console.log("NO </body>: " + f); return; }
  html = html.slice(0, idx) + BLOCK + "\n" + html.slice(idx);
  fs.writeFileSync(fp, html);
  console.log("injected: " + f);
});
