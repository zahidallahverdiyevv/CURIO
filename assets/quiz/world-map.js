(() => {
  'use strict';
  const $=id=>document.getElementById(id),NS='http://www.w3.org/2000/svg';
  const data=window.CURIO_WORLD_DATA;
  if(!data?.countries?.length){$('map-error').hidden=false;$('country-prompt').textContent='Map unavailable';return;}
  const svg=$('world-map'),countries=$('countries'),paths=new Map(),byId=new Map(data.countries.map(c=>[c.id,c]));
  const names={USA:'United States',CHN:'China',CZE:'Czechia',TUR:'Turkey'};
  const countryName=c=>names[c.id]||c.name;
  const pools=[
    ['USA','CAN','BRA','ARG','AUS','RUS','CHN','IND','JPN','EGY','ZAF','ITA','GBR','ESP','MEX','SAU','MDG','FRA'],
    ['DEU','NOR','SWE','FIN','POL','UKR','TUR','IRN','PAK','IDN','NZL','CHL','PER','COL','KEN','NGA','DZA','MAR','KAZ','MNG'],
    ['AZE','GEO','ARM','UZB','TKM','KGZ','TJK','NPL','BGD','VNM','THA','LAO','KHM','ROU','BGR','HUN','GRC','PRT','URY','PRY','BOL','NAM','BWA','ZMB','MOZ']
  ];
  const WORLD={x:0,y:5,w:360,h:145};let view={...WORLD};
  let questions=[],index=0,score=0,attempted=new Set(),resolved=false,hinted=false,finished=false,records=[];
  const shuffle=values=>{const a=[...values];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  function shape(tag,attrs){const el=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))el.setAttribute(k,v);return el;}
  for(let lon=-180;lon<=180;lon+=30)$('graticule').append(shape('path',{d:`M${lon+180},5V150`}));
  for(let lat=-60;lat<=60;lat+=30)$('graticule').append(shape('path',{d:`M0,${90-lat}H360`}));
  data.countries.forEach((c,i)=>{
    const p=shape('path',{d:c.path,'data-country':c.id,role:'button',tabindex:'0','aria-label':`Select country outline ${i+1}`,'fill-rule':'evenodd'});
    p.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();event.stopPropagation();guess(c.id);}});
    paths.set(c.id,p);countries.append(p);
  });
  function applyView(){
    view.w=Math.max(24,Math.min(360,view.w));view.h=view.w*WORLD.h/WORLD.w;
    view.x=Math.max(0,Math.min(360-view.w,view.x));view.y=Math.max(5,Math.min(150-view.h,view.y));
    svg.setAttribute('viewBox',`${view.x} ${view.y} ${view.w} ${view.h}`);
    $('zoom-in').disabled=view.w<=24;$('zoom-out').disabled=view.w>=360;
  }
  function resetView(){view={...WORLD};applyView();}
  function focusCountry(country){const [left,top,right,bottom]=country.bounds;const w=Math.max(24,Math.min(360,Math.max(right-left+8,(bottom-top+8)*WORLD.w/WORLD.h)));view={x:(left+right-w)/2,y:(top+bottom-w*WORLD.h/WORLD.w)/2,w,h:w*WORLD.h/WORLD.w};applyView();}
  function zoom(factor,anchor={x:view.x+view.w/2,y:view.y+view.h/2}){
    const next=Math.max(24,Math.min(360,view.w*factor)),scale=next/view.w;
    view.x=anchor.x-(anchor.x-view.x)*scale;view.y=anchor.y-(anchor.y-view.y)*scale;view.w=next;applyView();
  }
  function mapPoint(x,y){const matrix=svg.getScreenCTM();if(!matrix)return{x:view.x+view.w/2,y:view.y+view.h/2};const point=svg.createSVGPoint();point.x=x;point.y=y;return point.matrixTransform(matrix.inverse());}
  $('zoom-in').addEventListener('click',()=>zoom(.65));$('zoom-out').addEventListener('click',()=>zoom(1/.65));$('reset-map').addEventListener('click',resetView);
  svg.addEventListener('wheel',event=>{event.preventDefault();zoom(event.deltaY<0?.85:1/.85,mapPoint(event.clientX,event.clientY));},{passive:false});
  svg.addEventListener('keydown',event=>{if(event.target!==svg)return;const step=view.w*.08;if(event.key==='ArrowLeft')view.x-=step;else if(event.key==='ArrowRight')view.x+=step;else if(event.key==='ArrowUp')view.y-=step;else if(event.key==='ArrowDown')view.y+=step;else if(event.key==='+'||event.key==='='){event.preventDefault();zoom(.65);return;}else if(event.key==='-'){event.preventDefault();zoom(1/.65);return;}else if(event.key==='Home'){event.preventDefault();resetView();return;}else return;event.preventDefault();applyView();});
  const pointers=new Map();let drag=null,moved=false,pinchDistance=0;
  const distance=()=>{const p=[...pointers.values()];return Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y);};
  svg.addEventListener('pointerdown',event=>{if(event.button!==0)return;pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});if(pointers.size===1){moved=false;drag={x:event.clientX,y:event.clientY,view:{...view}};}else if(pointers.size===2){moved=true;pinchDistance=distance();}});
  svg.addEventListener('pointermove',event=>{
    if(!pointers.has(event.pointerId))return;pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
    if(pointers.size===2){const next=distance(),p=[...pointers.values()];if(pinchDistance>0)zoom(pinchDistance/next,mapPoint((p[0].x+p[1].x)/2,(p[0].y+p[1].y)/2));pinchDistance=next;return;}
    if(!drag)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.hypot(dx,dy)>5){moved=true;svg.setPointerCapture?.(event.pointerId);svg.classList.add('panning');}
    if(moved){const matrix=svg.getScreenCTM(),scale=matrix?.a||1;view.x=drag.view.x-dx/scale;view.y=drag.view.y-dy/scale;applyView();}
  });
  function endPointer(event){pointers.delete(event.pointerId);if(svg.hasPointerCapture?.(event.pointerId))svg.releasePointerCapture(event.pointerId);svg.classList.remove('panning');drag=null;if(pointers.size===1){const p=[...pointers.values()][0];drag={x:p.x,y:p.y,view:{...view}};}pinchDistance=0;}
  svg.addEventListener('pointerup',endPointer);svg.addEventListener('pointercancel',endPointer);
  svg.addEventListener('click',event=>{if(moved)return;const p=event.target.closest?.('[data-country]');if(p)guess(p.getAttribute('data-country'));});
  function message(title,detail,state='neutral'){$('feedback').dataset.state=state;const strong=document.createElement('strong'),p=document.createElement('p');strong.textContent=title;p.textContent=detail;$('feedback').replaceChildren(strong,p);}
  function renderProgress(){const fragment=document.createDocumentFragment();questions.forEach((_,i)=>{const segment=document.createElement('span');segment.className=records[i]?(records[i].found?'correct':'missed'):i===index&&!finished?'current':'';segment.setAttribute('aria-label',`Country ${i+1}: ${records[i]?(records[i].found?'found':'revealed'):i===index?'current':'upcoming'}`);fragment.append(segment);});$('progress').replaceChildren(fragment);$('progress').setAttribute('aria-label',`${records.length} of 15 countries completed`);}
  function clearShapes(){for(const p of paths.values())p.classList.remove('wrong','correct');}
  function showQuestion(){
    attempted=new Set();resolved=false;hinted=false;clearShapes();resetView();const q=questions[index];
    $('level').textContent=q.level;$('level').dataset.level=q.level;$('counter').textContent=`COUNTRY ${index+1} OF 15`;
    const name=document.createElement('span');name.textContent=countryName(q.country);$('country-prompt').replaceChildren(document.createTextNode('Find '),name);
    $('attempts').textContent='Three guesses. Make the first one count.';$('next').disabled=true;$('next').replaceChildren(document.createTextNode(index===14?'See results':'Next country'),Object.assign(document.createElement('span'),{textContent:'→'}));
    $('hint').disabled=false;$('skip').disabled=false;message('Where in the world?','Select a country outline to make your guess.');renderProgress();
  }
  function complete(found){const q=questions[index],points=found?Math.max(0,[100,70,40][attempted.size-1]-(hinted?20:0)):0;resolved=true;score+=points;records.push({name:countryName(q.country),found,attempts:attempted.size,hinted,points});paths.get(q.country.id).classList.add('correct');if(!found)focusCountry(q.country);$('score').textContent=String(score);$('next').disabled=false;$('hint').disabled=true;$('skip').disabled=true;renderProgress();return points;}
  function guess(id){
    if(resolved||finished||!byId.has(id))return;const q=questions[index];if(attempted.has(id)){message('You tried that one.','Choose a different outline or use the region hint.','wrong');return;}
    attempted.add(id);
    if(id===q.country.id){const points=complete(true);message(`That's ${countryName(q.country)}!`,`+${points} points · ${attempted.size===1?'Found on your first guess.':'Found in '+attempted.size+' guesses.'}`,'correct');$('attempts').textContent='Country found. Ready for the next one?';}
    else {paths.get(id).classList.add('wrong');if(attempted.size>=3){complete(false);message(`That was ${countryName(byId.get(id))}.`,`${countryName(q.country)} is highlighted in green. Take a look before moving on.`,'wrong');$('attempts').textContent='Three guesses used · Answer revealed';}else{message(`That's ${countryName(byId.get(id))}.`,`Keep looking for ${countryName(q.country)}. ${3-attempted.size} ${attempted.size===2?'guess':'guesses'} left.`,'wrong');$('attempts').textContent=`${attempted.size} of 3 guesses used`;}}
  }
  $('hint').addEventListener('click',()=>{if(resolved||finished||hinted)return;hinted=true;$('hint').disabled=true;message('A little direction.',`Look in ${questions[index].country.region}. This hint deducts 20 points if you find the country.`);});
  $('skip').addEventListener('click',()=>{if(resolved||finished)return;complete(false);message(`Here is ${countryName(questions[index].country)}.`,`The country is highlighted in green. No points for this one.`);$('attempts').textContent='Answer revealed · No points';});
  function showResults(){
    finished=true;$('round-view').hidden=true;$('results').hidden=false;$('results-score').textContent=`${score.toLocaleString()} / 1,500 points`;
    const found=records.filter(r=>r.found).length,first=records.filter(r=>r.found&&r.attempts===1).length;
    $('results-detail').textContent=`You found ${found} of 15 countries · ${first} on the first guess.`;
    $('results-list').replaceChildren(...records.map(r=>{const li=document.createElement('li'),name=document.createElement('strong'),points=document.createElement('span');li.dataset.correct=String(r.found);name.textContent=r.name;points.textContent=r.found?`+${r.points} pts`:'Revealed';li.append(name,points);return li;}));$('results-title').focus({preventScroll:true});
  }
  $('next').addEventListener('click',()=>{if(!resolved||finished)return;if(index===14){showResults();return;}index++;showQuestion();$('country-prompt').focus({preventScroll:true});});
  function start(){questions=pools.flatMap((pool,i)=>shuffle(pool.filter(id=>byId.has(id))).slice(0,5).map(id=>({country:byId.get(id),level:['Easy','Medium','Hard'][i]})));if(questions.length!==15){$('map-error').hidden=false;return;}index=0;score=0;records=[];finished=false;$('round-view').hidden=false;$('results').hidden=true;$('score').textContent='0';showQuestion();}
  $('new-round').addEventListener('click',()=>{start();$('country-prompt').focus({preventScroll:true});});start();
})();
