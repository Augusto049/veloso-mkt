/* =====================================================
   ✏️  EDITE AQUI  — conteúdo do site
   img: "img/foto.jpg"  |  video: "video/clip.mp4" (toca no hover)
   ===================================================== */
const WHATS = "554988267867";   // WhatsApp com DDI+DDD (+55 49 8826-7867). Vazio = usa o direct do Instagram
const WORKS = [
 {t:"Drone — Polo industrial",c:"drone",l:"Imagens aéreas",d:"Voo ao pôr do sol mostrando a estrutura e a localização da empresa.",img:"img/drone-1-poster.jpg",video:"video/drone-1.mp4",g:"150deg,#ffb347,#4a1c00"},
 {t:"Ensaio Campeiro",c:"momentos",l:"Ensaio",d:"Ensaio ao pôr do sol com contraluz, cavalo e muita personalidade.",img:"img/ensaio-cavalo.jpg",g:"150deg,#ffb347,#4a1c00"},
 {t:"Indústria em ação",c:"marketing",l:"Marketing industrial",d:"Faíscas, ferramentas e gente trabalhando: conteúdo que mostra a força da sua empresa.",img:"img/making-of-esmerilhadeira.jpg",g:"150deg,#ff7a2e,#3a1a05"},
 {t:"Casamento — Daminhas",c:"momentos",l:"Casamento",d:"Os momentos espontâneos que fazem a festa: família, risadas e emoção.",img:"img/casamento-daminhas.jpg",g:"150deg,#ffb347,#4a1c00"},
 {t:"Drone — Ponto comercial",c:"drone",l:"Imagens aéreas",d:"Vista aérea vertical, pronta para Reels e Stories, valorizando o imóvel e o entorno.",img:"img/drone-2-poster.jpg",video:"video/drone-2.mp4",g:"150deg,#ffb347,#4a1c00"},
 {t:"Cresol — Evento",c:"eventos",l:"Cobertura de evento",d:"Cobertura completa do evento: palco, público e a energia de cada momento.",img:"img/evento-cresol-palestra.jpg",g:"150deg,#ff7a2e,#3a1a05"},
 {t:"Óticonomia",c:"estudio",l:"Estúdio",d:"Retratos e produto em estúdio com cor forte e identidade de marca.",img:"img/oticonomia-retrato-1.jpg",g:"150deg,#7c8cff,#1a1a40"},
 {t:"Hocks",c:"estudio",l:"Estúdio",d:"Campanha de moda em estúdio para a Hocks, com luz e atitude.",img:"img/hocks-2.jpg",g:"150deg,#f4f1ea,#2a2a2a"},
 {t:"Retrato corporativo",c:"marketing",l:"Marketing",d:"Retratos que posicionam profissionais e passam autoridade.",img:"img/mkt-corporativo.jpg",g:"150deg,#00e0c6,#00302b"},
 {t:"Fashion Wall",c:"estudio",l:"Estúdio",d:"Ensaio de moda urbana: styling, luz e movimento.",img:"img/fashion-retrato.jpg",g:"150deg,#4d7cff,#0b1440"},
 {t:"Casamento",c:"momentos",l:"Momentos",d:"A cerimônia contada com sensibilidade, do primeiro olhar à saída.",img:"img/momentos-casamento-2.jpg",g:"150deg,#ffb347,#4a1c00"},
 {t:"Cresol — Bastidores",c:"eventos",l:"Cobertura de evento",d:"Gente real, sorrisos reais: o lado humano do evento.",img:"img/evento-cresol-sorriso.jpg",g:"150deg,#ff7a2e,#3a1a05"},
 {t:"Óticonomia — Produto",c:"estudio",l:"Estúdio",d:"Fotografia de produto com fundo, cor e luz pensados para vender.",img:"img/oticonomia-grau.jpg",g:"150deg,#ff7a2e,#3a1a05"},
 {t:"Campanha Pet",c:"marketing",l:"Marketing",d:"Conteúdo cheio de afeto para pet shop: close, luz e emoção.",img:"img/pet-cachorro.jpg",g:"150deg,#ffb347,#4a1c00"},
 {t:"TV Record — Bastidores",c:"eventos",l:"Bastidores",d:"Bastidores de reportagem em parceria com a TV Record.",img:"img/tvrecord-bastidores-2.jpg",g:"150deg,#f4f1ea,#2a2a2a"},
 {t:"Gastronomia",c:"marketing",l:"Marketing",d:"Pessoas e pratos que dão vontade: conteúdo humano para restaurantes.",img:"img/mkt-gastronomia.jpg",g:"150deg,#ff4d2e,#3a0d05"},
 {t:"Hocks — Editorial",c:"estudio",l:"Estúdio",d:"Editorial com assinatura visual e muito estilo.",img:"img/hocks-1.jpg",g:"150deg,#f4f1ea,#2a2a2a"},
 {t:"Ensaio",c:"momentos",l:"Momentos",d:"Ensaios externos com luz natural e personalidade.",img:"img/momentos-ensaio-2.jpg",g:"150deg,#b84dff,#1a0a33"},
 {t:"Fashion Wall — Sneakers",c:"estudio",l:"Estúdio",d:"Produto e lifestyle: o detalhe que faz o desejo.",img:"img/fashion-tenis.jpg",g:"150deg,#4d7cff,#0b1440"},
 {t:"Audio Quali — Produto",c:"estudio",l:"Estúdio",d:"Fotografia de produto de saúde auditiva com luz e atmosfera.",img:"img/audioquali-aparelho.jpg",g:"150deg,#ffb347,#4a1c00"},
 {t:"Contratado",c:"momentos",l:"Momentos",d:"Arte de anúncio esportivo com retrato de impacto.",img:"img/momentos-esporte.jpg",g:"150deg,#ff4d2e,#3a0d05"}
];
const BA = {
 cantina:{b:"img/antes-cantina.jpg",a:"img/depois-cantina.jpg"},
 audio:{b:"img/antes-audioquali.jpg",a:"img/depois-audioquali.jpg"}
};
const IMPACT = ["Caminhões vitrine","Insta-bike","Ativações urbanas","Campanhas externas","Experiências presenciais","Ações surpresa","Marketing de rua","Movimentos estratégicos"];
const SERVICES = [
 {t:"Branding",p:"Identidade, percepção e posicionamento: transformamos empresas comuns em marcas fortes e memoráveis.",img:"img/hocks-2.jpg"},
 {t:"Impact Marketing",p:"Ações de alto impacto, físicas e emocionais, que marcam a memória e viram assunto.",img:"img/evento-cresol-equipe.jpg"},
 {t:"Pain & Solution Marketing",p:"Mostramos a dor e apresentamos a solução, para gerar identificação imediata e mais vendas.",img:"img/pet-produto.jpg"},
 {t:"Storytelling Humano",p:"Por trás de todo CNPJ existe um CPF. Contamos a história e os bastidores do seu negócio.",img:"img/tvrecord-bastidores-1.jpg"},
 {t:"Marketing de Autoridade",p:"Posicionamos sua marca como especialista, com conteúdo que ensina e resolve.",img:"img/mkt-corporativo.jpg"},
 {t:"Prova Social",p:"Depoimentos, casos de sucesso e parcerias que eliminam a dúvida de quem vai comprar.",img:"img/mkt-gastronomia.jpg"},
 {t:"Marketing de Experiência",p:"Uma jornada de compra memorável, com campanhas e ofertas que tiram o cliente da hesitação.",img:"img/oticonomia-grau.jpg"},
 {t:"Foto & Vídeo",p:"Estúdio, eventos, ensaios e vídeos cinematográficos com a assinatura Veloso.",img:"img/fashion-alce.jpg"},
 {t:"Imagens Aéreas",p:"Voos de drone que mostram o tamanho, a estrutura e a localização do seu negócio.",img:"img/drone-1-poster.jpg"}
];
const CLIENTS = ["Cresol","Óticonomia","Audio Quali","Cantina D'Italia","Hocks","Fashion Wall","TV Record"];
const ABOUT = "Por trás de todo CNPJ existe um *CPF*. A gente transforma empresas comuns em marcas *fortes*, *memoráveis* e *escolhidas*.";

/* ============ helpers ============ */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const bg=w=>w.img?`url(${w.img})`:`linear-gradient(${w.g})`;
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ============ preloader ============ */
(function(){
  const pn=$('#pn'),pb=$('#pb');let v=0;
  const iv=setInterval(()=>{v+=Math.random()*9+3;if(v>=100){v=100;clearInterval(iv);setTimeout(()=>{$('#pre').classList.add('out');document.body.classList.remove('lock');document.body.classList.add('go')},350)}
    pn.textContent=Math.floor(v);pb.style.width=v+'%'},70);
})();

/* ============ split hero text ============ */
(function(){let i=0;$$('#h1 .ln').forEach(l=>{const t=l.textContent;l.innerHTML='';[...t].forEach(ch=>{const s=document.createElement('span');s.className='ch';s.style.setProperty('--i',i++);s.textContent=ch===' '?' ':ch;l.appendChild(s)})})})();

/* ============ build content ============ */
$('#svc').innerHTML=SERVICES.map((s,i)=>`<a href="#orcamento" data-img="${s.img}"><em>0${i+1}</em><h3>${s.t}</h3><p>${s.p}</p><span>↗</span></a>`).join('');
$('#ig').innerHTML=IMPACT.map((t,i)=>`<div><small>0${i+1}</small>${t}</div>`).join('');
SERVICES.forEach(s=>{const i=new Image();i.src=s.img});
$('#clients').innerHTML=CLIENTS.map(c=>`<div>${c}</div>`).join('');
const mk=(id,a)=>$(id).innerHTML=a.map(x=>`<span>${x} ✦</span>`).join('').repeat(4);
mk('#m1',['Vídeo','Foto','Drone','Marketing','Social Media','Branding','Reels','Tráfego']);
mk('#m2',[...CLIENTS,'Caos Studio']);
$('#about').innerHTML=ABOUT.split(' ').map(w=>{const hl=w.startsWith('*');return `<span class="w${hl?' hl':''}">${w.replace(/\*/g,'')}</span>`}).join(' ');
$('#track').innerHTML=WORKS.map((w,i)=>`<div class="card" data-i="${i}" data-c="${w.c}" data-cur="ABRIR"><div class="ph" style="background-image:${bg(w)}"></div>${w.video?`<video src="${w.video}" muted loop playsinline preload="none"></video>`:''}<span class="idx">${String(i+1).padStart(2,'0')}</span>${w.c==='video'?'<div class="play">▶</div>':''}<div class="meta"><small>${w.l}</small><h4>${w.t}</h4></div></div>`).join('');
$('#chips').innerHTML=['Branding','Impact Marketing','Foto & Vídeo','Imagens com drone','Social Media','Gestão de Tráfego','Planejamento de 12 meses'].map(c=>`<button class="chip" type="button">${c}</button>`).join('');

/* ============ cursor ============ */
const dot=$('#dot'),ring=$('#ring');let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+'px';dot.style.top=my+'px'});
document.addEventListener('mouseover',e=>{const t=e.target.closest('[data-cur],a,button,summary,.card');
  if(!t){ring.classList.remove('big');ring.textContent='';return}
  const l=t.dataset.cur;if(l){ring.classList.add('big');ring.textContent=l}else{ring.classList.remove('big');ring.textContent='';ring.style.width='70px';ring.style.height='70px';setTimeout(()=>{ring.style.width='';ring.style.height=''},0)}});
document.addEventListener('mouseleave',()=>ring.classList.add('hide'));document.addEventListener('mouseenter',()=>ring.classList.remove('hide'));

/* ============ magnetic ============ */
$$('[data-mag]').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.3}px,${(e.clientY-r.top-r.height/2)*.4}px)`;b.style.transition='transform .1s'});
  b.addEventListener('mouseleave',()=>{b.style.transform='';b.style.transition='transform .5s cubic-bezier(.2,.8,.2,1),background .3s'})});

/* ============ services floating preview ============ */
const pv=$('#pv');let px=0,py=0,tx=0,ty=0;
$$('#svc a').forEach(a=>{a.addEventListener('mouseenter',()=>{pv.style.background=`url(${a.dataset.img}) center/cover`;pv.classList.add('on')});a.addEventListener('mouseleave',()=>pv.classList.remove('on'))});
addEventListener('mousemove',e=>{tx=e.clientX+160;ty=e.clientY});

/* ============ reveal + counters ============ */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('on');
  e.target.querySelectorAll('[data-n]').forEach(el=>{const n=+el.dataset.n,s=el.dataset.s;let t0;const f=t=>{t0??=t;const p=Math.min((t-t0)/1700,1);el.textContent=Math.floor(n*(1-Math.pow(1-p,3)))+s;p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)});
  io.unobserve(e.target)}),{threshold:.15});
$$('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%3)*.08+'s';io.observe(el)});

/* ============ filter + horizontal pin ============ */
const hs=$('#trabalhos'),track=$('#track');let maxX=0;
function sizeHS(){const vis=$$('.card:not(.hide)').length;maxX=Math.max(track.scrollWidth-innerWidth,0);hs.style.height=(innerHeight+maxX)+'px';$('#pt').textContent=String(vis).padStart(2,'0')}
$$('.filters button').forEach(b=>b.onclick=()=>{$$('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
  $$('.card').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.c!==b.dataset.f));sizeHS();onScroll()});
addEventListener('resize',sizeHS);addEventListener('load',sizeHS);sizeHS();
$$('.card').forEach(c=>{
  c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateY(${x*9}deg) rotateX(${-y*9}deg) scale(1.02)`;const v=c.querySelector('video');v&&v.play().catch(()=>{})});
  c.addEventListener('mouseleave',()=>{c.style.transform='';const v=c.querySelector('video');v&&v.pause()});
  c.addEventListener('click',()=>openLB(+c.dataset.i))});

/* ============ lightbox ============ */
let cur=0;const lb=$('#lb');
function visIdx(){return $$('.card:not(.hide)').map(c=>+c.dataset.i)}
function openLB(i){cur=i;const w=WORKS[i],m=$('#lm');
  m.style.backgroundImage=bg(w);m.innerHTML=w.video?`<video src="${w.video}" autoplay loop muted playsinline controls></video>`:(w.c==='video'?'<div class="sim"><div class="rec"><i></i>REC</div><div class="pbar"><b></b></div></div>':'');
  $('#ll').textContent=w.l;$('#lt').textContent=w.t;$('#ld').textContent=w.d;lb.classList.add('on');document.body.classList.add('lock')}
function closeLB(){lb.classList.remove('on');document.body.classList.remove('lock');$('#lm').innerHTML=''}
function step(d){const v=visIdx();const k=(v.indexOf(cur)+d+v.length)%v.length;openLB(v[k])}
$('#lx').onclick=closeLB;$('#lp').onclick=()=>step(-1);$('#ln').onclick=()=>step(1);$('#lc').addEventListener('click',closeLB);
lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key==='Escape')closeLB();if(e.key==='ArrowRight')step(1);if(e.key==='ArrowLeft')step(-1)});

/* ============ antes / depois ============ */
const bax=$('.bax'),baB=$('#baB'),baA=$('#baA');
function setBA(k){bax.classList.add('sw');setTimeout(()=>{baB.src=BA[k].b;baA.src=BA[k].a;bax.classList.remove('sw')},350)}
$$('#batabs button').forEach(b=>b.onclick=()=>{$$('#batabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');setBA(b.dataset.k)});
baB.src=BA.cantina.b;baA.src=BA.cantina.a;
const band=$('#band'),bandbg=$('#bandbg');

/* ============ contato (WhatsApp, ou direct do Instagram se não houver número) ============ */
const IG="https://ig.me/m/velosostudio_";
const contact=msg=>WHATS?`https://wa.me/${WHATS}${msg?`?text=${encodeURIComponent(msg)}`:''}`:IG;
function toast(t){const d=document.createElement('div');d.textContent=t;d.style.cssText='position:fixed;left:50%;bottom:40px;transform:translateX(-50%);background:var(--ac);color:#000;padding:16px 28px;border-radius:100px;font:800 13px Inter;z-index:3000;letter-spacing:.06em';document.body.appendChild(d);setTimeout(()=>d.remove(),4200)}
$$('.chip').forEach(c=>c.onclick=()=>c.classList.toggle('on'));
$('#qs').onclick=()=>{const s=$$('.chip.on').map(c=>c.textContent).join(', ')||'ainda não defini';
  const msg=`Olá! Vim pelo site da Veloso Studio.\n\n*Nome:* ${$('#qn').value||'-'}\n*Marca:* ${$('#qb').value||'-'}\n*Interesse:* ${s}\n*Detalhes:* ${$('#qm').value||'-'}`;
  if(!WHATS){navigator.clipboard&&navigator.clipboard.writeText(msg).catch(()=>{});toast('Mensagem copiada! Cole no direct do Instagram.')}
  open(contact(msg),'_blank')};
$$('a[href^="https://wa.me"]').forEach(a=>{const t=new URL(a.href).searchParams.get('text');a.href=contact(t)});

/* ============ scroll engine ============ */
const nav=$('#nav'),h1=$('#h1'),hero=$('.hero'),words=$$('#about .w'),about=$('.about'),steps=$$('.step'),stepsEl=$('#steps'),fill=$('#fill');
let lastY=0,vel=0,mOff=[0,0];
function onScroll(){
  const y=scrollY,H=document.documentElement.scrollHeight-innerHeight;
  $('#bar').style.width=(y/H*100)+'%';
  const br=band.getBoundingClientRect();bandbg.style.transform=`translateY(${br.top*-.18}px)`;
  nav.classList.toggle('hide',y>lastY&&y>200);vel=y-lastY;lastY=y;
  if(y<innerHeight*1.2){h1.style.transform=`translateY(${y*.22}px)`;hero.querySelector('.lead').style.opacity=Math.max(1-y/500,0)}
  // about words
  const ar=about.getBoundingClientRect(),p=Math.min(Math.max((innerHeight*.8-ar.top)/(ar.height*.7),0),1);
  words.forEach((w,i)=>w.classList.toggle('on',i/words.length<p));
  // horizontal
  const hr=hs.getBoundingClientRect(),hp=Math.min(Math.max(-hr.top/(hs.offsetHeight-innerHeight||1),0),1);
  track.style.transform=`translateX(${-hp*maxX}px)`;
  const vis=$$('.card:not(.hide)').length;$('#pf').style.width=(hp*100)+'%';$('#pc').textContent=String(Math.min(Math.round(hp*(vis-1))+1,vis||1)).padStart(2,'0');
  // process
  const sr=stepsEl.getBoundingClientRect(),sp=Math.min(Math.max((innerHeight*.6-sr.top)/sr.height,0),1);
  fill.style.height=(sp*100)+'%';
  steps.forEach(s=>{const r=s.getBoundingClientRect();s.classList.toggle('act',r.top<innerHeight*.6)});
}
addEventListener('scroll',onScroll,{passive:true});onScroll();

/* ============ marquees (velocidade ligada ao scroll) ============ */
const mq=[[$('#m1'),-1],[$('#m2'),1]];mq.forEach(m=>m.push(0));
/* ============ main loop ============ */
const clock=$('#clock');
function tick(){
  // cursor ring lerp
  rx+=(mx-rx)*.16;ry+=(my-ry)*.16;ring.style.left=rx+'px';ring.style.top=ry+'px';
  // preview lerp
  px+=(tx-px)*.12;py+=(ty-py)*.12;pv.style.left=px+'px';pv.style.top=py+'px';
  // marquees
  vel*=.92;
  mq.forEach(m=>{const el=m[0];m[2]+=m[1]*(.8+Math.abs(vel)*.35);const half=el.scrollWidth/2;if(m[2]<=-half)m[2]+=half;if(m[2]>0)m[2]-=half;el.style.transform=`translateX(${m[2]}px)`});
  requestAnimationFrame(tick)}
tick();
setInterval(()=>{clock.textContent=new Date().toLocaleTimeString('pt-BR',{timeZone:'America/Sao_Paulo'})},1000);

/* ============ drone: decolagem + transição em íris ============ */
(function(){
  const dr=$('#drone');if(!dr)return;
  const v1=$('#dv1'),v2=$('#dv2'),vid1=v1.querySelector('video'),vid2=v2.querySelector('video.v'),tt=$('#dtop'),tb=$('#dbot'),hud=$('#dhud'),
        c1=$('#dcap1'),c2=$('#dcap2'),alt=$('#dalt'),cnt=$('#dcnt'),pr=$('#dpr'),hint=$('#dhint');
  const cl=x=>Math.min(Math.max(x,0),1),ez=x=>x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;
  function upd(){
    const r=dr.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;
    const p=cl(-r.top/(dr.offsetHeight-innerHeight||1)),a=ez(cl(p/.3)),b=ez(cl((p-.52)/.26));
    const side=innerWidth>innerHeight?34:12;
    v1.style.clipPath=`inset(${(1-a)*27}% ${(1-a)*side}% round ${(1-a)*28}px)`;
    vid1.style.transform=`scale(${1.3-a*.3+b*.18})`;vid1.style.filter=`blur(${b*10}px) brightness(${1-b*.4})`;
    tt.style.transform=`translateY(${-a*45}vh)`;tb.style.transform=`translateY(${a*45}vh)`;tt.style.opacity=tb.style.opacity=hint.style.opacity=1-a;
    v2.style.clipPath=`circle(${b*80}% at 50% 50%)`;vid2.style.transform=`scale(${1.25-b*.25}) rotate(${(1-b)*-6}deg)`;
    hud.classList.toggle('on',a>.92);
    c1.classList.toggle('on',a>.95&&p<.55);c2.classList.toggle('on',p>.74);
    alt.textContent=String(Math.round(30+p*120)).padStart(3,'0');cnt.textContent=b>.5?'02':'01';pr.style.width=(p*100)+'%';
  }
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
  new IntersectionObserver(es=>{const on=es[0].isIntersecting;$$('#drone video').forEach(v=>on?v.play().catch(()=>{}):v.pause())},{rootMargin:'200px'}).observe(dr);
})();

/* ============ confete no logo ============ */
$('#logo').onclick=()=>{for(let i=0;i<70;i++){const d=document.createElement('i');const s=6+Math.random()*10;
  d.style.cssText=`position:fixed;left:60px;top:30px;width:${s}px;height:${s}px;background:${['#c6ff3d','#ff4d2e','#f4f1ea'][i%3]};z-index:3000;border-radius:${i%2?'50%':'2px'};pointer-events:none`;document.body.appendChild(d);
  d.animate([{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${(Math.random()-.2)*700}px,${Math.random()*600}px) rotate(${Math.random()*720}deg)`,opacity:0}],{duration:1400+Math.random()*900,easing:'cubic-bezier(.2,.8,.4,1)'}).onfinish=()=>d.remove()}};

/* ============ WebGL: fluido neon no hero ============ */
(function(){
  const cv=$('#gl'),gl=cv.getContext('webgl');if(!gl){cv.remove();return}
  const vs='attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}';
  const fs=`precision mediump float;uniform vec2 r;uniform float t;uniform vec2 m;
  float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
  float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p*=2.;a*=.5;}return v;}
  void main(){vec2 uv=gl_FragCoord.xy/r;vec2 p=uv*vec2(r.x/r.y,1.)*2.2;
    vec2 mm=m*vec2(r.x/r.y,1.)*2.2;float d=distance(p,mm);p+=normalize(p-mm+.001)*.35*exp(-d*1.6);
    float q=fbm(p+t*.08);float w=fbm(p+q*2.+vec2(t*.12,-t*.07));
    float l=smoothstep(.45,.75,w);float edge=smoothstep(.0,.07,abs(w-.55))*-1.+1.;
    vec3 c=vec3(.776,1.,.239);vec3 col=vec3(.03)+c*(l*.22+edge*.35)+vec3(1.,.3,.18)*smoothstep(.7,.9,q)*.12;
    col+=c*exp(-d*2.2)*.18;gl_FragColor=vec4(col,1.);}`;
  const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);return o};
  const pg=gl.createProgram();gl.attachShader(pg,sh(gl.VERTEX_SHADER,vs));gl.attachShader(pg,sh(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pg);
  if(!gl.getProgramParameter(pg,gl.LINK_STATUS)){cv.remove();return}
  gl.useProgram(pg);const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  const lp=gl.getAttribLocation(pg,'p');gl.enableVertexAttribArray(lp);gl.vertexAttribPointer(lp,2,gl.FLOAT,false,0,0);
  const ur=gl.getUniformLocation(pg,'r'),ut=gl.getUniformLocation(pg,'t'),um=gl.getUniformLocation(pg,'m');
  let sx=.5,sy=.5,tx=.5,ty=.5,on=true;
  const rs=()=>{const s=Math.min(devicePixelRatio,1.5)*.6;cv.width=cv.clientWidth*s;cv.height=cv.clientHeight*s;gl.viewport(0,0,cv.width,cv.height)};rs();addEventListener('resize',rs);
  hero.addEventListener('mousemove',e=>{$$('.fl').forEach((f,i)=>{const k=(i+1)*14;f.style.setProperty('--mx',((e.clientX/innerWidth-.5)*-k)+'px');f.style.setProperty('--my',((e.clientY/innerHeight-.5)*-k)+'px')});const r=cv.getBoundingClientRect();tx=(e.clientX-r.left)/r.width;ty=1-(e.clientY-r.top)/r.height});
  new IntersectionObserver(es=>on=es[0].isIntersecting).observe(hero);
  const t0=performance.now();
  (function f(){if(on){sx+=(tx-sx)*.06;sy+=(ty-sy)*.06;gl.uniform2f(ur,cv.width,cv.height);gl.uniform1f(ut,(performance.now()-t0)/1000);gl.uniform2f(um,sx,sy);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}requestAnimationFrame(f)})();
})();
