(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1:function(e,n,t){"use strict";t.r(n);var o=t(23),i=t(57),r=t(58),a=t(59),l=t(60),d=t(62),c=t(63);t(64),t(67),t(69);o.Terminal.applyAddon(r),o.Terminal.applyAddon(i),o.Terminal.applyAddon(a),o.Terminal.applyAddon(l),o.Terminal.applyAddon(d),o.Terminal.applyAddon(c);const s=document.createElement("div");let p,m,h,w,u;s.innerHTML='<a id="reload" href="#">back</a><div id="terminal-container"></div>',document.body.appendChild(s),document.getElementById("reload").onclick=(()=>(location.reload(),!1));let f=document.getElementById("terminal-container");function y(){m.attach(u),m._initialized=!0}function g(){if(m._initialized)return;m._initialized=!0;m.prompt=function(){m.write("\r\n$ ")},m.writeln("Welcome to xterm.js"),m.writeln("This is a local terminal emulation, without a real terminal in the back-end."),m.writeln("Type some keys and commands to play around."),m.writeln(""),m.prompt(),m._core.register(m.addDisposableListener("key",function(e,n){let t=!(n.altKey||n.altGraphKey||n.ctrlKey||n.metaKey);13===n.keyCode?m.prompt():8===n.keyCode?m.x>2&&m.write("\b \b"):t&&m.write(e)})),m._core.register(m.addDisposableListener("paste",function(e){m.write(e)}))}fetch("/create-terminal/"+window.agentId).then(e=>e.text()).then(e=>{p=e,function(){for(;f.children.length;)f.removeChild(f.children[0]);m=new o.Terminal({}),window.term=m,h="https:"===location.protocol?"wss://":"ws://",w=(()=>h+location.hostname+(location.port?":"+location.port:"")+"/terminal/"+p),m.open(f),m.winptyCompatInit(),m.webLinksInit(),m.fit(),m.focus(),setTimeout(function(){!function(){let e=parseInt(m.cols,10),n=parseInt(m.rows,10),t=(e*m._core.renderer.dimensions.actualCellWidth+m._core.viewport.scrollBarWidth).toString()+"px",o=(n*m._core.renderer.dimensions.actualCellHeight).toString()+"px";f.style.width=t,f.style.height=o,m.fit()}(),fetch("/terminal-config?cols="+m.cols+"&rows="+m.rows+"&id="+p,{method:"POST"}).then(e=>e.text()).then(()=>{(u=new WebSocket(w())).onopen=y,u.onclose=g,u.onerror=g,m.on("resize",function(e){let n=e.cols,t=e.rows,o="/terminal-config?cols="+n+"&rows="+t+"&id="+p;fetch(o,{method:"POST"}).then(e=>e.text()).then(e=>{p=e})})})},0)}()})},67:function(e,n,t){var o=t(68);"string"==typeof o&&(o=[[e.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(16)(o,i);o.locals&&(e.exports=o.locals)},68:function(e,n,t){(e.exports=t(15)(!1)).push([e.i,"#terminal-container {\n    width: 900px;\n    height: 450px;\n    margin: auto;\n}\n\n#dispose {\n    margin: 20px auto 0 auto;\n    display: block;\n}\n\n#reload {\n    margin-bottom: 20px;\n}",""])}}]);