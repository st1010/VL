/*
 VIRTUAL LIBRARY — an offline, dependency-free WebGL reading experience.
 Original prototype and reading excerpts. 2026.
 HTML5 WebGL 1 / CSS / Vanilla JavaScript; no CDN, no sign-in, no tracking.
*/
(()=>{'use strict';
const $=id=>document.getElementById(id);
const CATEGORIES=[
 {id:'fiction',name:'Fiction',num:'01',color:'#6b3a35',accent:'#e1aa79',position:[-3.5,7.0],yaw:-Math.PI/2,shelfX:-8.7,shelfZ:6.4,side:-1},
 {id:'design',name:'Design',num:'02',color:'#334d47',accent:'#cfb37c',position:[-3.5,-6.4],yaw:-Math.PI/2,shelfX:-8.7,shelfZ:-6.6,side:-1},
 {id:'science',name:'Science',num:'03',color:'#264762',accent:'#98c8d0',position:[3.5,7.0],yaw:Math.PI/2,shelfX:8.7,shelfZ:6.4,side:1},
 {id:'history',name:'History',num:'04',color:'#745332',accent:'#dfc28e',position:[3.5,-6.4],yaw:Math.PI/2,shelfX:8.7,shelfZ:-6.6,side:1}
];
// Every title and every reading excerpt below was created for this demo.
const BOOKS=[
['fiction','The House of Borrowed Light','Elena Marsh','An old seaside house collects the memories of everyone who has ever lived there. When a stranger arrives with an empty suitcase, the house begins to remember a story that never happened.',
 'On the morning the tide refused to turn, Nora found a ribbon of blue light beneath the front door. It was not the sun; the sun had been hidden for three days. She knelt in the hallway and touched it with one finger. The light felt like a name she had forgotten. Somewhere upstairs, the house released a long and patient sigh.',
 'There were twelve rooms in the house and thirteen doors. The thirteenth opened only when rain fell on the western windows. Behind it, Nora found a nursery without a cradle, a clock without hands, and a stack of letters addressed to the people she might have been. Each envelope carried the same instruction: Begin again.',
 'That evening the sea returned. Nora took the empty suitcase into the garden and filled it with all the things she could not keep: her grandfather’s laugh, a summer afternoon, the smell of bread before dawn. At the gate she turned and saw the windows shining. She understood at last that remembering and leaving could be the same act.'],
['fiction','The Cartographer of Rain','Mira Solen','In a city where weather can be mapped but never predicted, a young cartographer discovers a storm that follows one person and nowhere else.',
 'Iris drew the first rainfall map when she was seven. By nine she knew the secret channels water followed beneath the city. By twenty-one she could predict which streets would flood from the way the pigeons tilted their heads. But she had never seen a cloud move against the wind until the afternoon it followed her home.',
 'The cloud was small enough to fit above a doorway. Wherever Iris walked, its shadow found her. She left it outside a bakery, crossed two bridges, and disappeared into a market full of umbrellas. Still it waited. At dusk the cloud spoke with a voice like water striking glass: There are places you have not drawn.',
 'She opened her atlas to the blank pages at the back. All night she drew a coastline that no ship had reached, a city made of windows, and a road that led beyond every ordinary map. By morning the cloud had broken into gentle rain. For the first time, Iris did not reach for her ruler.'],
['fiction','Letters from the Blue Hour','Rowan Vale','A quiet story of a post office that delivers letters to impossible places, and the apprentice determined to discover who sends them.',
 'The post office on Bell Street opened at six in the evening, just as the sky turned the colour of ink. Its letters carried no stamps. Some were addressed to vanished houses; others named days that had not arrived. Theo sorted each one by the sound it made when shaken, because there was no other reliable system.',
 'One Wednesday he found an envelope addressed to himself, fifty years from now. Inside lay a blank page and a dried orange flower. He read the absence like a message: it asked him to write something worth remembering. He sharpened a pencil, closed the shop door, and sat beside the window.',
 'Theo wrote about the woman who sang while sweeping the street, the cafe that made terrible coffee, and the neighbour who fed six sparrows every morning. He wrote until dawn filled the room. When he looked again, the envelope had vanished. In its place stood a new letter with a familiar hand.'],
['fiction','The Last Garden on Earth','Ada Wren','Beyond the last railway station, an unusual garden preserves seeds from worlds that have not yet existed.',
 'Every plant in the garden had a label, though none of the names appeared in botanical books. The moonmint opened only in silence. The paper tree grew pale envelopes instead of leaves. And at the far end of the path, a single glass flower reflected a different sky every time someone looked into it.',
 'Mara had been hired to water the seedlings. The gardener gave her one rule: do not ask a plant where it came from. On her third day, a silver vine wound itself around her wrist and whispered the name of the town where she was born. She had not spoken that name in ten years.',
 'Mara stayed long after the lights in the station went out. She planted one small seed in an empty pot and wrote a new label: Tomorrow. By dawn it had grown two leaves, ordinary and green. The gardener smiled. Sometimes, he told her, the rarest things are the ones we still have time to save.'],
['fiction','A Thousand Quiet Suns','Noor Elian','Across a landscape of sleeping cities, a traveller follows the sound of a distant bell and learns what it means to find a home.',
 'At midday the city fell completely silent. No traffic, no birds, no voices rose through the open windows. Safa was the only person who seemed to notice. She had been collecting sounds in small glass jars since childhood, and now even the air felt empty in her hands.',
 'Beyond the city she heard a bell. It rang once for each hill she crossed, and the landscape changed with every note. A field became an orchard; a dry river filled with light. She walked toward the sound without knowing whether it promised an answer or another question.',
 'At sunset she reached a village where every house had an open door. The bell hung in the square, unmoving. A child asked Safa why she had come. She thought of her silent city and her jars of invisible music. Then she said, I wanted to hear what comes next.'],
['design','The Shape of Everyday Things','Amara Sen','A beginner-friendly exploration of why ordinary objects look and work the way they do—and how thoughtful design makes small moments better.',
 'Design begins long before a sketch appears on paper. It begins when someone notices the hand searching for a light switch in darkness, or the person who cannot open a door while carrying groceries. Attention is the first tool. It transforms a small inconvenience into an invitation to make something kinder.',
 'Look closely at a chair. Its curves are not merely decorative; they hold an argument about posture, materials, time and cost. A chair can tell you whom its maker imagined sitting there. The quiet question of inclusive design is whether that imagined person was the only person who mattered.',
 'Try this exercise. Choose one familiar object and observe how three different people use it. Do not explain the intended method. Watch where their fingers hesitate. Sketch those moments. In the gaps between intention and behaviour, you may find your most valuable design insights.'],
['design','Seeing Between the Lines','Devika Rao','An illustrated-style field guide to composition, hierarchy, whitespace, and the subtle decisions that shape visual communication.',
 'A page speaks before its words are read. Weight, scale, distance and rhythm create the first impression. The large shape calls from across the room; the small note rewards a second look. To build a good composition is to conduct that conversation deliberately, with a place for the eye to begin and somewhere meaningful to go.',
 'White space is not empty space. It is the silence that lets the next sentence matter. In a crowded layout, every element competes for attention, and the viewer must work out the order alone. Remove one unnecessary ornament and notice how another element becomes more confident.',
 'Hierarchy is the art of making a promise. When a headline feels important, the supporting text must earn the attention it receives. Balance consistency with surprise, and remember that the strongest grid is often the one that gives its content room to breathe.'],
['design','Designing for Everyone','Rhea Kapoor','A practical introduction to accessible interfaces, inclusive research, and the principles that make technology welcoming.',
 'Imagine an app that works perfectly in a quiet office but fails on a crowded train. Imagine a button easy to press with one hand but impossible with gloves. Accessibility is not a checklist pasted onto a finished screen. It begins with a more generous understanding of the situations in which people live.',
 'Good contrast benefits someone with low vision, and also someone reading outdoors at noon. Captions support deaf viewers, and also commuters travelling without headphones. Clear language helps readers with different literacy levels, and anyone who is tired, hurried or distracted.',
 'The most useful question is not Can the average user complete this task? It is Who might be excluded by the assumptions we have made? When we invite different people into the design process, we make room for solutions that a single point of view could never imagine.'],
['design','Objects & Affection','Jun Park','An intimate look at the emotional lives of familiar products and the memories, rituals, and habits that grow around them.',
 'A chipped coffee mug is not always a failed object. Sometimes the chip is evidence of a life spent together. We assign affection to materials through repetition: the weight of a pen, the sound of a drawer, the handle of a bag softened by years. These details form a private vocabulary between people and things.',
 'Designers often speak of novelty and innovation. Yet there is equal beauty in making something that becomes more meaningful over time. A repairable object can tell a longer story than a disposable one. A familiar interface can invite trust without demanding attention.',
 'Choose an object you have kept longer than expected. Ask what made it worth keeping. Was it comfort, utility, a memory, or simply the way it aged? Those answers describe forms of value that no product specification can fully measure.'],
['design','The Architecture of Calm','Leah Monroe','How thoughtful spaces and interfaces use light, proportion, sound, and pace to help people feel oriented and at ease.',
 'A calm room does not have to be empty. It needs to make sense. You should know where to enter, where to pause and where to look next. The same is true of a digital interface. When every element shouts, the person using it must spend precious energy deciding what to hear.',
 'Consider a library. Tall shelves create rhythm; lamps mark places to rest; windows give orientation. These signals form a gentle grammar of movement. An interface can offer the same hospitality with generous spacing, clear labels and feedback that arrives at the right moment.',
 'The goal of calm design is not to remove choice. It is to let choices appear when they matter. Create a visible path, provide a reliable way back, and leave enough quiet for curiosity to do its work.'],
['science','A Field Guide to Small Universes','Dr. Ira Moss','A curious introduction to the microscopic systems around us, from living soil and raindrops to tiny ecosystems on a city wall.',
 'A teaspoon of healthy soil can contain an astonishing variety of microscopic life. Fungi, bacteria, and small animals interact beneath our feet, helping to recycle nutrients and support plants. We often describe soil as if it were an inert surface, but it is closer to a busy community whose residents rarely appear in view.',
 'Look at a raindrop resting on a leaf. Surface tension helps it hold a rounded shape, while the structure of the leaf determines whether it spreads or rolls away. What looks like a simple bead of water is an encounter between chemistry, physics and biology.',
 'Science begins with questions small enough to hold. Why does a puddle dry faster in sunlight? Where does the smell after rain come from? How do roots find water? Careful observation cannot answer everything, but it gives curiosity somewhere honest to begin.'],
['science','The Night We Counted Stars','Arun Mehta','An accessible journey through the night sky and the remarkable tools humans have invented to understand distant light.',
 'The night sky looks still because our lives are so brief compared with the distances above us. Stars move, change and age, but their stories unfold on a scale difficult to imagine. When you look toward a distant galaxy, you see light that may have travelled for millions of years before reaching your eyes.',
 'Astronomers use telescopes to collect light. A telescope does not bring a star closer; it gathers more of the faint signal that star has sent. Different instruments study different parts of the electromagnetic spectrum, revealing phenomena invisible to ordinary sight.',
 'Try to recognise one constellation tonight. Notice how your perspective turns separate stars into a familiar shape. Then remember that the stars may be separated by enormous distances in space. Our patterns help us navigate, but nature often holds a more complicated picture.'],
['science','Patterns in Motion','Dr. Esme Clarke','A short exploration of waves, rhythms, and the hidden mathematical patterns found in music, oceans, and everyday movement.',
 'The motion of a swing, the rise and fall of a musical note, and ripples spreading across a pond can all be described with repeating patterns. These patterns do not make the world less mysterious. Instead, they give us a language for noticing relationships between events that first appear unrelated.',
 'A sound wave moves through air as a pattern of changing pressure. Its frequency helps determine pitch, while its amplitude influences how loud we perceive it. Music takes these physical properties and arranges them into a human experience rich with memory and emotion.',
 'The next time you hear an echo, consider the journey of the sound. It left a source, travelled through air, bounced from a surface and returned to your ears. A familiar experience becomes extraordinary when you follow each step.'],
['science','The Curious Life of Water','Sanya Das','From cloud droplets to ocean currents, a poetic and factual introduction to the substance that quietly shapes our planet.',
 'Water is everywhere, yet its familiar presence can hide its unusual behaviour. Solid water is less dense than liquid water, which is why ice commonly floats. This matters far beyond a glass of lemonade: floating ice can help insulate the water below in cold environments.',
 'The water cycle connects oceans, land and atmosphere. Sunlight supports evaporation, moving water into the air as vapour. Cooling can lead to condensation and cloud formation; rain and snow return water to the surface. The journey is continuous, but no two droplets follow exactly the same route.',
 'A useful way to think about the water you drink is as a traveller. It has crossed changing landscapes and moved through living systems long before it reached a tap or a cup. Understanding those connections makes conservation feel less abstract and more personal.'],
['science','The Language of Trees','Dr. Felix Rowan','An approachable account of how forests grow, share resources, and respond to changes in their environment.',
 'Trees seem motionless because we are used to measuring activity in footsteps and seconds. Yet each day they respond to light, temperature, moisture and the seasons. Their leaves exchange gases with the atmosphere, while roots take up water and nutrients from the soil.',
 'Many trees form relationships with soil fungi. These partnerships can help roots gain access to nutrients in exchange for compounds made by photosynthesis. Such relationships are complex and vary across species and environments; scientists continue to explore how they affect forest communities.',
 'A forest is not a single organism. It is a network of interactions and sometimes competition. To understand it, begin by looking at one tree, then look at its neighbours, and finally the wider landscape. Each scale tells a different part of the story.'],
['history','A History of Small Wonders','Clara Whitfield','Stories of everyday inventions that changed how people lived, worked, travelled, and stayed connected.',
 'History is often introduced through kings, borders and dramatic turning points. Yet a quiet invention can alter daily life just as deeply. The arrival of affordable artificial lighting extended the hours people could work and read. Improvements in printing allowed ideas to travel farther and reach more readers.',
 'Consider the humble pencil. Its materials and manufacture have changed over time, but the principle remains beautifully simple: a mark can be made, erased and revised. That small possibility supports sketching, planning, writing and learning. Some technologies matter precisely because they become easy to overlook.',
 'To study everyday history, choose an ordinary object and trace the labour behind it. Who gathered its materials? Who improved its design? Who could afford it at first? Questions like these reveal that even familiar objects have rich, uneven histories.'],
['history','The Cities We Carried','Omar Farouk','A journey through the marketplaces, roads and meeting places that connected communities across centuries.',
 'Long before instant messages, cities exchanged news through travellers, merchants and letters. Markets were more than places of trade: they could be spaces where languages met, techniques spread, and stories changed on their journeys. A road connected places, but it also carried ideas.',
 'Think of a port at dawn. Ships arrive with goods from distant coasts; workers unload crates; officials record cargo; families wait for news. Every exchange depends on a network of knowledge about weather, navigation, materials and people.',
 'A city is never built by one person or in one moment. It grows through countless decisions, some celebrated and many forgotten. Learning its history means noticing not only monuments but also streets, homes and the ordinary routines that gave them life.'],
['history','An Atlas of Lost Places','Maeve Bennett','A reflective tour of vanished settlements, changing landscapes, and the clues people leave behind.',
 'A place can disappear without being entirely lost. Old maps may preserve its streets. Archaeological evidence may reveal everyday tools, foundations and food remains. Local traditions can keep a name alive after buildings have changed or vanished. Each source offers a partial view of the past.',
 'The landscape itself is a record. Rivers shift course, coastlines retreat, and routes once important become quiet paths. Humans reshape these places through building and farming, while natural processes continue around them.',
 'Historians and archaeologists compare evidence rather than trust one perfect story. A map may be incomplete; an account may reflect one person’s perspective. By holding different clues together, they produce careful interpretations while remaining open to new discoveries.'],
['history','The Makers of Tomorrow','Sofia Malik','Remarkable chapters from the history of education, public knowledge, and people who made learning more available.',
 'The ability to learn has not always been shared equally. Access to schools, books and public institutions has varied widely across periods and places. When new libraries opened or teaching materials became more affordable, those changes sometimes created opportunities that earlier generations lacked.',
 'Public libraries are built on a generous idea: knowledge can be shared beyond a single household or private collection. Their roles have changed over time. Many now provide digital resources, quiet workspaces and access to technology alongside books.',
 'The history of education is also the history of the questions people asked about fairness. Who is invited to learn? In what language? At what cost? Asking these questions today connects our choices to the long work of expanding access.'],
['history','The Long Road Home','Anika Roy','Human journeys across changing routes and borders, told through diaries, maps and the objects travellers carried.',
 'A journey is measured in more than miles. It is measured in the objects a person carries, the names they learn for unfamiliar things, and the places they remember after leaving them behind. For historians, travel accounts offer rich evidence—but they also show the limits of one observer’s perspective.',
 'Routes changed with seasons, politics and technology. Rivers and mountains influenced travel long before modern roads; ships connected coastal communities and enabled exchange over great distances. Improvements in transport changed what journeys were possible and who could afford to make them.',
 'When reading a historical travel account, ask whose voice is missing. What would the same road have looked like to a local resident, a worker or a child? Imagining those questions does not replace evidence. It helps us seek a fuller and more responsible picture of the past.']
].map((d,i)=>({id:'book-'+String(i+1).padStart(2,'0'),category:d[0],title:d[1],author:d[2],description:d[3],pages:[d[4],d[5],d[6]],index:i}));
const BOOK_MAP=new Map(BOOKS.map(b=>[b.id,b]));
function safeGet(key,fallback){try{let v=JSON.parse(localStorage.getItem(key));return v??fallback}catch{return fallback}}
function safeSet(key,val){try{localStorage.setItem(key,JSON.stringify(val))}catch{}}
let saved=safeGet('virtual_library_saved_v1',[]);if(!Array.isArray(saved))saved=[];saved=saved.filter(x=>BOOK_MAP.has(x));
let options={sound:true,reduceMotion:false,sensitivity:1,readerSize:19,readerTheme:'paper',...safeGet('virtual_library_config_v1',{})};
let pageProgress=safeGet('virtual_library_progress_v1',{});if(!pageProgress||typeof pageProgress!=='object')pageProgress={};
const TAU=Math.PI*2,PI=Math.PI,clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
const matI=()=>new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);
function mul(a,b){let o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)for(let k=0;k<4;k++)o[c*4+r]+=a[k*4+r]*b[c*4+k];return o}
function tr(x=0,y=0,z=0){let m=matI();m[12]=x;m[13]=y;m[14]=z;return m}
function sc(x=1,y=1,z=1){let m=matI();m[0]=x;m[5]=y;m[10]=z;return m}
function ry(t){let c=Math.cos(t),s=Math.sin(t),m=matI();m[0]=c;m[2]=-s;m[8]=s;m[10]=c;return m}
function rx(t){let c=Math.cos(t),s=Math.sin(t),m=matI();m[5]=c;m[6]=s;m[9]=-s;m[10]=c;return m}
function sub(a,b){return [a[0]-b[0],a[1]-b[1],a[2]-b[2]]}function cross(a,b){return[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]]}function dot(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}function unit(a){let l=Math.hypot(...a)||1;return a.map(x=>x/l)}
function lookAt(eye,target){let z=unit(sub(eye,target)),x=unit(cross([0,1,0],z)),y=cross(z,x),m=matI();m[0]=x[0];m[4]=x[1];m[8]=x[2];m[1]=y[0];m[5]=y[1];m[9]=y[2];m[2]=z[0];m[6]=z[1];m[10]=z[2];m[12]=-dot(x,eye);m[13]=-dot(y,eye);m[14]=-dot(z,eye);return m}
function projection(fovy,aspect,near,far){let f=1/Math.tan(fovy/2),m=new Float32Array(16);m[0]=f/aspect;m[5]=f;m[10]=(far+near)/(near-far);m[11]=-1;m[14]=(2*far*near)/(near-far);return m}
function project(m,p){const[x,y,z]=p,w=m[3]*x+m[7]*y+m[11]*z+m[15];if(w<=.01)return null;let a=(m[0]*x+m[4]*y+m[8]*z+m[12])/w,b=(m[1]*x+m[5]*y+m[9]*z+m[13])/w;return [a,b,w]}
const nativeGL=$('world').getContext('webgl',{alpha:false,antialias:true,depth:true,preserveDrawingBuffer:false});
// Canvas fallback for browsers that disable GPU acceleration. 3D world coordinates,
// collisions and picking continue to work; software-painted faces replace GPU draws.
const canvas2d=!nativeGL?$('world').getContext('2d'):null;
function fakeGL(){let next=0;return new Proxy({}, {get:(obj,key)=>{
 if(key==='getShaderParameter'||key==='getProgramParameter')return ()=>true;
 if(key==='getAttribLocation')return ()=>next++;
 if(key==='getUniformLocation')return ()=>({});
 if(key==='getShaderInfoLog'||key==='getProgramInfoLog')return ()=>'';
 if(key==='isContextLost')return ()=>false;
 if(key.startsWith('create'))return ()=>({});
 if(key==='getParameter')return ()=>0;
 if(key in obj)return obj[key];
 if(key===key.toUpperCase())return 1;
 return ()=>{};
 }});}
const gl=nativeGL||fakeGL();
const vert=`attribute vec3 aPos;attribute vec3 aNor;uniform mat4 uView,uProjection,uModel;varying vec3 vNor;varying vec3 vWorld;void main(){vec4 p=uModel*vec4(aPos,1.0);vWorld=p.xyz;vNor=mat3(uModel)*aNor;gl_Position=uProjection*uView*p;}`;
const frag=`precision mediump float;uniform vec3 uColor;uniform vec3 uCamera;uniform float uGlow;varying vec3 vNor;varying vec3 vWorld;void main(){vec3 n=normalize(vNor);vec3 sunlight=normalize(vec3(-0.35,0.95,0.40));float d=max(dot(n,sunlight),0.0);float lamp=0.20+0.12*max(dot(n,normalize(vec3(0.3,0.7,-0.8))),0.0);float rim=pow(1.0-max(dot(n,normalize(uCamera-vWorld)),0.0),2.0);vec3 color=uColor*(0.44+d*0.55+lamp+uGlow*1.9)+vec3(0.10,0.06,0.02)*rim;float distanceToEye=length(vWorld-uCamera);float fog=clamp((distanceToEye-19.0)/30.0,0.0,0.57);color=mix(color,vec3(0.105,0.125,0.098),fog);gl_FragColor=vec4(color,1.0);}`;
function buildShader(type,src){let s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s}
let program;try{program=gl.createProgram();gl.attachShader(program,buildShader(gl.VERTEX_SHADER,vert));gl.attachShader(program,buildShader(gl.FRAGMENT_SHADER,frag));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));}catch(e){$('webgl-error').hidden=false;$('webgl-error').querySelector('p').textContent=e.message;return}
gl.useProgram(program);const L={p:gl.getAttribLocation(program,'aPos'),n:gl.getAttribLocation(program,'aNor'),view:gl.getUniformLocation(program,'uView'),proj:gl.getUniformLocation(program,'uProjection'),model:gl.getUniformLocation(program,'uModel'),color:gl.getUniformLocation(program,'uColor'),camera:gl.getUniformLocation(program,'uCamera'),glow:gl.getUniformLocation(program,'uGlow')};
function boxMesh(){let p=[],n=[],i=[];const faces=[[[1,0,0],[[.5,-.5,-.5],[.5,-.5,.5],[.5,.5,.5],[.5,.5,-.5]]],[[-1,0,0],[[-.5,-.5,.5],[-.5,-.5,-.5],[-.5,.5,-.5],[-.5,.5,.5]]],[[0,1,0],[[-.5,.5,-.5],[.5,.5,-.5],[.5,.5,.5],[-.5,.5,.5]]],[[0,-1,0],[[-.5,-.5,.5],[.5,-.5,.5],[.5,-.5,-.5],[-.5,-.5,-.5]]],[[0,0,1],[[.5,-.5,.5],[-.5,-.5,.5],[-.5,.5,.5],[.5,.5,.5]]],[[0,0,-1],[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]]]];for(let f of faces){let q=p.length/3;for(let a of f[1]){p.push(...a);n.push(...f[0])}i.push(q,q+2,q+1,q,q+3,q+2)}return{p,n,i}}
function cylinderMesh(segments=12){let p=[],n=[],i=[];for(let a=0;a<=segments;a++){let t=a*TAU/segments,x=Math.cos(t),z=Math.sin(t);p.push(x,-.5,z,x,.5,z);n.push(x,0,z,x,0,z)}for(let a=0;a<segments;a++){let j=2*a;i.push(j,j+1,j+2,j+1,j+3,j+2)}for(let side of [-1,1]){let j=p.length/3;p.push(0,side*.5,0);n.push(0,side,0);for(let a=0;a<=segments;a++){let t=a*TAU/segments;p.push(Math.cos(t),side*.5,Math.sin(t));n.push(0,side,0)}for(let a=0;a<segments;a++){if(side>0)i.push(j,j+a+2,j+a+1);else i.push(j,j+a+1,j+a+2)}}return{p,n,i}}
function sphereMesh(s=12,r=9){let p=[],n=[],i=[];for(let y=0;y<=r;y++){let phi=PI*y/r;for(let x=0;x<=s;x++){let t=TAU*x/s,px=Math.cos(t)*Math.sin(phi),py=Math.cos(phi),pz=Math.sin(t)*Math.sin(phi);p.push(px,py,pz);n.push(px,py,pz)}}for(let y=0;y<r;y++)for(let x=0;x<s;x++){let a=y*(s+1)+x,b=a+s+1;i.push(a,a+1,b,b,a+1,b+1)}return{p,n,i}}
function torusMesh(s=24,r=8){let p=[],n=[],i=[];for(let a=0;a<=s;a++){let u=a*TAU/s;for(let b=0;b<=r;b++){let v=b*TAU/r;let cv=Math.cos(v),sv=Math.sin(v);p.push((1+.11*cv)*Math.cos(u),.11*sv,(1+.11*cv)*Math.sin(u));n.push(cv*Math.cos(u),sv,cv*Math.sin(u))}}for(let a=0;a<s;a++)for(let b=0;b<r;b++){let t=a*(r+1)+b,k=t+r+1;i.push(t,t+1,k,k,t+1,k+1)}return{p,n,i}}
function upload(d){let o={};o.p=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,o.p);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(d.p),gl.STATIC_DRAW);o.n=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,o.n);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(d.n),gl.STATIC_DRAW);o.i=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,o.i);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(d.i),gl.STATIC_DRAW);o.count=d.i.length;return o}
const mesh={box:upload(boxMesh()),cylinder:upload(cylinderMesh()),sphere:upload(sphereMesh()),torus:upload(torusMesh())};gl.enable(gl.DEPTH_TEST);gl.enable(gl.CULL_FACE);gl.clearColor(.11,.13,.09,1);
const rgbCache={};function rgb(h){if(rgbCache[h])return rgbCache[h];let s=h.replace('#','');return rgbCache[h]=[parseInt(s.slice(0,2),16)/255,parseInt(s.slice(2,4),16)/255,parseInt(s.slice(4,6),16)/255]}
let draws=0;function draw(type,model,color,glow=0){let d=mesh[type];gl.bindBuffer(gl.ARRAY_BUFFER,d.p);gl.enableVertexAttribArray(L.p);gl.vertexAttribPointer(L.p,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,d.n);gl.enableVertexAttribArray(L.n);gl.vertexAttribPointer(L.n,3,gl.FLOAT,false,0,0);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,d.i);gl.uniformMatrix4fv(L.model,false,model);let c=rgb(color);gl.uniform3f(L.color,...c);gl.uniform1f(L.glow,glow);gl.drawElements(gl.TRIANGLES,d.count,gl.UNSIGNED_SHORT,0);draws++}
function part(type,xyz,size,color,glow=0,angle=0){let m=tr(...xyz);if(angle)m=mul(m,ry(angle));draw(type,mul(m,sc(...size)),color,glow)}
const STATIC=[];function add(type,xyz,size,color,glow=0,angle=0){let m=tr(...xyz);if(angle)m=mul(m,ry(angle));STATIC.push({type,m:mul(m,sc(...size)),color,glow})}
function block(x,y,z,w,h,d,c,g=0,a=0){add('box',[x,y,z],[w,h,d],c,g,a)}
function column(x,z,y=3.5,h=7){add('cylinder',[x,y,z],[.38,h,.38],'#c0a781');add('cylinder',[x,.35,z],[.6,.35,.6],'#cdb795');add('cylinder',[x,h+.1,z],[.6,.3,.6],'#dcc19a')}
function seeded(i){let x=Math.sin(i*324.27+75.07)*43758.5453;return x-Math.floor(x)}
// The architecture is assembled as actual 3D geometry rather than a background image.
function buildHall(){
 block(0,-.32,0,25,.6,39,'#766956');block(0,-.018,0,23.0,.018,37.5,'#b9a78b');
 block(0,-.002,0,7,.02,37.3,'#8c806e');block(0,.012,0,.09,.02,35.5,'#e6cfa2');
 for(let z=-18;z<=18;z+=2.25)block(0,.026,z,23,.018,.033,'#7c6f5c');
 for(let x=-11;x<=11;x+=2.25)block(x,.026,0,.033,.018,37,'#86745d');
 for(let z=-18;z<=18;z+=2.25)for(let x=-11;x<=11;x+=4.5)block(x,.018,z,.065,.018,.065,'#e0cba0');
 block(0,7.7,0,25,.45,39,'#574b3c');block(0,7.42,0,23,.15,37.5,'#a18b69');
 // rear wall and a tall glass-pane entrance, reminiscent of cathedral library interiors
 block(0,3.6,-19.4,24,7.2,.4,'#5f5945');block(0,3.55,19.2,24,7.1,.4,'#3e4338');
 for(let x of [-9,-4.5,0,4.5,9]){
  column(x,-18.2,3.5,6.9);column(x,17.5,3.5,6.9);
  add('cylinder',[x,7.13,-18.2],[.55,.4,.55],'#d8bc93');
 }
 // tall blue-glass rear windows and gold mullions
 for(let x of [-6.75,-2.25,2.25,6.75]){
  block(x,4.2,-19.17,3.2,4.8,.12,'#5e8680');block(x,4.2,-19.10,.06,4.8,.14,'#d6bf92');
  for(let y of [3.0,4.3,5.6])block(x,y,-19.08,3.0,.045,.08,'#cab58e');
  for(let col of [-1,1])block(x+col*1.54,4.25,-19.05,.12,5.1,.22,'#c2ad88');
 }
 for(let x of [-12.4,12.4]){
  block(x,3.6,0,.4,7.3,39,'#686047');block(x,4.75,0,.6,.18,38,'#ddc59a');
  block(x,6.9,0,.5,.18,38,'#ccae7f');
  for(let z of [-16,-11,-2,3,11,16]){
   block(x-Math.sign(x)*.14,4,z,.1,5,1.75,'#405b51');
   block(x-Math.sign(x)*.08,4,z,.15,4.7,.055,'#a38f70');
  }
 }
 // decorative arches and freestanding classical columns
 for(let z of [-16,-7.5,2.0,11.6])for(let x of [-4.8,4.8]){
  column(x,z,3.47,6.85);
  block(x,6.96,z,.85,.18,1.2,'#d2b58c');
 }
 for(let z of [-16,-7.5,2,11.6]){
  block(0,7.0,z,9,.18,.75,'#a58a68');
  for(let k=0;k<=14;k++){let t=Math.PI*k/14;let x=4.6*Math.cos(t),y=3.73+3.2*Math.sin(t);block(x,y,z,.42,.34,.8,'#bfa783',0.0)}
 }
 // upper railings and gallery, giving a two-story silhouette
 for(let s of [-1,1]){
  block(s*10.8,4.87,0,2.6,.24,38,'#856b4b');block(s*9.85,5.78,0,.12,.13,38,'#e1bd7f');
  for(let z=-17;z<=17;z+=.8)block(s*9.85,5.28,z,.12,1,.07,'#c8a978');
  block(s*10.8,4.75,0,2.6,.14,38,'#bd9f70');
 }
 // chandeliers (tiers of torus lamps) and hanging glass globes
 for(let z of [-12,-1,10]){
  add('cylinder',[0,6.85,z],[.04,.95,.04],'#ab8652');
  add('torus',[0,6.15,z],[1.25,.85,1.25],'#e6bd75',.09);
  add('torus',[0,6.45,z],[.65,.7,.65],'#c59b60',.06);
  for(let i=0;i<10;i++){let a=TAU*i/10;add('sphere',[1.2*Math.cos(a),6.12,z+1.2*Math.sin(a)],[.11,.18,.11],'#f7dfaa',.34)}
 }
 // architectural entrance platform and book return desk
 block(0,.13,17.1,8.8,.32,1.3,'#574836');block(0,.35,17.1,8.8,.17,1.2,'#ae8c58');
 for(let side of [-1,1]){
  block(side*5.6,.5,16.5,1.7,1.05,1.1,'#513b28');block(side*5.6,1.05,16.5,1.9,.13,1.2,'#b8925e');
  add('sphere',[side*5.6,1.7,16.5],[.27,.28,.27],'#c9ab6f',.08);
 }
 // reading lounge at the far end
 for(let x of [-3.7,3.7])for(let z of [-14.4,-10.9]){
  block(x,.78,z,1.7,.15,1.05,'#b08855');for(let ox of [-.65,.65])for(let oz of [-.36,.36])block(x+ox,.39,z+oz,.11,.76,.11,'#5d4330');
  add('cylinder',[x,.96,z],[.27,.12,.27],'#e2c18b');add('sphere',[x,1.33,z],[.23,.23,.23],'#f9d6a1',.22);
  block(x+1.15,.52,z,.75,.76,.72,'#464d40');block(x+1.15,.92,z-.27,.78,.55,.18,'#61715d');
 }
 block(0,.02,-14.3,3.4,.035,3.6,'#927c60');
 for(let x of [-1.5,1.5])for(let z of [-15.9,-12.7])block(x,.025,z,.4,.02,.1,'#c9ab7a');
 // plants, columns and foliage in the corners
 for(let x of [-10,10])for(let z of [-17,16.5]){
  add('cylinder',[x,.46,z],[.55,.9,.55],'#6b4b32');
  add('cylinder',[x,.92,z],[.64,.17,.64],'#c59b6a');
  for(let k=0;k<6;k++){let a=k*TAU/6;add('sphere',[x+Math.cos(a)*.43,1.35+seeded(k+z)*.6,z+Math.sin(a)*.42],[.38,.78,.31],k%2?'#486044':'#587b54')}
 }
 // an ornamental gold globe at the reading room entrance
 add('sphere',[0,2.05,-9.1],[.65,.65,.65],'#b18a50',.1);add('torus',[0,2.05,-9.1],[.9,1.8,.9],'#d1aa71',.08);add('cylinder',[0,1.06,-9.1],[.08,1.13,.08],'#c4a578');add('cylinder',[0,.51,-9.1],[.56,.2,.56],'#816039');
}
function buildShelves(){
 const wood='#493728',trim='#9a754b',gold='#d2b27c',bookPalette=['#784a3d','#304a4a','#876947','#3d4a59','#67785f','#57485f','#a56d48','#5d4232','#3d5b56','#875d52'];
 CATEGORIES.forEach((cat,sidx)=>{
  const x=cat.shelfX,z0=cat.shelfZ;
  // each section is a large wall of wooden shelves with five tiers
  block(x,2.85,z0,1.0,5.5,9.5,wood);block(x+cat.side*(-.4),2.85,z0,.12,5.5,9.55,trim);
  for(let row=0;row<5;row++){
   let y=.55+row*1.1;block(x-cat.side*.54,y,z0,.86,.15,9.45,gold);
   block(x-cat.side*.7,y+.12,z0,.05,.05,9.3,'#d8b883',.04);
  }
  for(let z of [z0-4.7,z0+4.7]){
   block(x-cat.side*.64,2.82,z,.9,5.65,.2,'#765235');
   block(x-cat.side*.7,5.65,z,.95,.23,.26,'#d1a96e');
  }
  block(x-cat.side*.44,5.8,z0,.74,.38,9.6,'#694b31');
  block(x-cat.side*.86,5.77,z0,.12,.08,8.7,'#dbb982',.17);
  // 32-36 decorative 3D book spines per shelf tier
  for(let row=0;row<4;row++)for(let j=0;j<27;j++){
   let y=.71+row*1.1,zz=z0-4.35+j*.326;let n=sidx*1000+row*87+j,h=.63+.2*seeded(n),w=.25+.065*seeded(n+2);
   let bc=bookPalette[Math.floor(seeded(n+51)*bookPalette.length)];
   block(x-cat.side*.89,y+h*.5,zz,w*.66,h,w,bc,0,.025*(seeded(n+9)-.5));
   if(j%3===0){block(x-cat.side*1.01,y+h*.7,zz,.025,.018,w,'#c3a778')}
   if(j%6===0){block(x-cat.side*1.015,y+.15,zz,.026,.02,w,'#d4b58a')}
  }
  // main featured titles are generously spaced at the eye-level shelf row
  const categoryBooks=BOOKS.filter(b=>b.category===cat.id);
  for(let j=0;j<categoryBooks.length;j++){
   let book=categoryBooks[j],zz=z0-3.5+j*1.72;let bx=x-cat.side*1.04,by=2.52;
   book.world=[bx-cat.side*.23,by,zz];book.cat=cat;
   block(bx,by,zz,.48,1.16,.88,cat.color,.04);
   block(bx-cat.side*.27,by,zz,.028,1.02,.79,cat.accent,.13);
   block(bx-cat.side*.31,by,zz-.27,.031,.035,.45,'#f2dfba',.19);
   block(bx-cat.side*.31,by+.32,zz,.034,.02,.45,'#f2dfba',.2);
  }
  // metal sconces light the spines
  for(let j of [-3.9,0,3.9]){
   add('sphere',[x-cat.side*1.13,4.72,z0+j],[.21,.27,.21],'#f4d28a',.38);
   add('cylinder',[x-cat.side*.97,4.47,z0+j],[.1,.35,.1],'#ba8e5a');
  }
 });
}
buildHall();buildShelves();
// ─── Interactive user journey ────────────────────────────────────────
let entered=false,modal=null,selectedBook=null,readingBook=null,readingPage=0,currentFilter='all',catalogQuery='',navMode='catalog';
const view={x:0,y:1.72,z:12.3,yaw:0,pitch:0,bob:0};
let tween=null,pointer={x:-1e5,y:-1e5,down:false,drag:false,startX:0,startY:0};
const keys=new Set();let last=performance.now(),frame=0,activeBook=null,vp=matI(),ctx=$('lens').getContext('2d'),canvas=$('world'),lens=$('lens');
let viewport={width:window.innerWidth,height:window.innerHeight,dpr:1};
let audio;function chime(type='select'){
 if(!options.sound)return;
 try{audio??=new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();
 let frequencies=type==='save'?[523,659,784]:type==='page'?[468]:type==='enter'?[330,440,554]:[520,680];
 frequencies.forEach((f,i)=>{let t=audio.currentTime+i*.075,o=audio.createOscillator(),g=audio.createGain();o.type='sine';o.frequency.setValueAtTime(f,t);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.042,t+.035);g.gain.exponentialRampToValueAtTime(.0001,t+.34);o.connect(g);g.connect(audio.destination);o.start(t);o.stop(t+.35)})
 }catch(e){}
}
function say(str){const el=$('toast');el.textContent=str;el.classList.add('show');clearTimeout(say.timer);say.timer=setTimeout(()=>el.classList.remove('show'),2900)}
function saveOptions(){safeSet('virtual_library_config_v1',options)}
function setNavCount(){$('nav-count').textContent=String(saved.length);$('reader-saved').classList.toggle('saved',!!readingBook&&saved.includes(readingBook.id))}
function updateNav(which='explore'){document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.action===which));}
function enterLibrary(){if(entered)return;entered=true;document.body.classList.remove('welcome');$('intro-overlay').hidden=true;chime('enter');say('Welcome to the library. Select a collection to start exploring.');}
function teleport(cat){enterLibrary();closeAll();tween={from:{x:view.x,z:view.z,yaw:view.yaw,pitch:view.pitch},to:{x:cat.position[0],z:cat.position[1],yaw:cat.yaw,pitch:0},duration:options.reduceMotion?0.001:1.07,time:0};chime('select');$('current-location').textContent=cat.name.toUpperCase()+' COLLECTION';document.querySelectorAll('.section-button').forEach(b=>b.classList.toggle('active',b.dataset.section===cat.id));}
function toEntrance(){enterLibrary();closeAll();tween={from:{x:view.x,z:view.z,yaw:view.yaw,pitch:view.pitch},to:{x:0,z:12.3,yaw:0,pitch:0},duration:options.reduceMotion?.001:1.15,time:0};say('Returned to the grand hall.');}
function nearestSection(){let best=null,dist=1e5;for(let cat of CATEGORIES){let d=Math.hypot(view.x-cat.position[0],view.z-cat.position[1]);if(d<dist){best=cat;dist=d}}return{cat:best,distance:dist}}
function nearestBook(){let best=null,dist=1e5;for(let b of BOOKS){let d=Math.hypot(view.x-b.world[0],view.z-b.world[2]);if(d<dist){best=b;dist=d}}return {book:best,distance:dist}}
function shade(open){$('modal-shade').hidden=!open;document.body.classList.toggle('modal-open',open)}
function closeAll(){modal=null;selectedBook=null;readingBook=null;$('preview-panel').hidden=true;$('reader').hidden=true;$('drawer').hidden=true;$('reader-options').hidden=true;shade(false);updateNav('explore');}
function preview(id){let b=BOOK_MAP.get(id);if(!b)return;enterLibrary();closeAll();modal='preview';selectedBook=b;$('preview-panel').hidden=false;shade(true);
 const cat=CATEGORIES.find(c=>c.id===b.category);$('preview-kicker').textContent=`FROM THE ${cat.name.toUpperCase()} COLLECTION · VOLUME ${String(b.index%5+1).padStart(2,'0')}`;
 $('preview-title').textContent=b.title;$('preview-author').textContent=b.author.toUpperCase();$('preview-description').textContent=b.description;$('cover-category').textContent=cat.name.toUpperCase();$('cover-title').textContent=b.title;$('cover-author').textContent=b.author.toUpperCase();$('preview-length').textContent=`${b.pages.length} READING PAGES`;
 $('preview-cover').style.background=`linear-gradient(140deg,${cat.color},#1e241f)`;$('preview-cover').querySelector('.cover-frame').style.background=`linear-gradient(142deg,${cat.color},#1e2827)`;syncPreviewSave();chime('select');$('preview-read').focus();
}
function syncPreviewSave(){if(!selectedBook)return;$('preview-save').textContent=saved.includes(selectedBook.id)?'♥ SAVED — REMOVE':'♡ SAVE TO MY LIBRARY';}
function toggleSave(id){if(!BOOK_MAP.has(id))return;let wasSaved=saved.includes(id);if(wasSaved){saved=saved.filter(x=>x!==id);say('Removed from My Library.');}else{saved.push(id);say('Added to My Library.');chime('save');}safeSet('virtual_library_saved_v1',saved);setNavCount();syncPreviewSave();if(modal==='drawer'&&navMode==='saved')renderSaved();}
function readBook(id){let b=BOOK_MAP.get(id);if(!b)return;enterLibrary();closeAll();readingBook=b;readingPage=clamp(parseInt(pageProgress[b.id]||0,10),0,b.pages.length-1);modal='reader';shade(true);$('reader').hidden=false;document.body.classList.add('modal-open');$('reader-title').textContent=b.title;$('reader-author').textContent='by '+b.author;$('reader-category').textContent=CATEGORIES.find(c=>c.id===b.category).name.toUpperCase()+' · AN ORIGINAL READING SAMPLE';
 $('reader').classList.toggle('night',options.readerTheme==='night');$('reader-size').value=options.readerSize;$('reader-theme').value=options.readerTheme;document.documentElement.style.setProperty('--reader-font',options.readerSize+'px');renderReader();chime('page');$('reader-back').focus();}
function renderReader(){if(!readingBook)return;$('reader-page').innerHTML='<p>'+escapeHtml(readingBook.pages[readingPage])+'</p>';$('reader-paginate').innerHTML=String(readingPage+1).padStart(2,'0')+' <i>/</i> '+String(readingBook.pages.length).padStart(2,'0');$('reader-previous').disabled=readingPage===0;$('reader-next').disabled=readingPage===readingBook.pages.length-1;
 $('reader-saved').textContent=saved.includes(readingBook.id)?'♥':'♡';$('reader-saved').classList.toggle('saved',saved.includes(readingBook.id));pageProgress[readingBook.id]=readingPage;safeSet('virtual_library_progress_v1',pageProgress)}
function changePage(n){if(!readingBook)return;let newPage=clamp(readingPage+n,0,readingBook.pages.length-1);if(newPage!==readingPage){readingPage=newPage;renderReader();chime('page');$('reader').scrollTop=0}}
function returnFromReader(){if(!readingBook)return;let b=readingBook;closeAll();say(`You closed “${b.title}”. Your page is remembered.`)}
function showDrawer(mode,filter='all'){
 enterLibrary();closeAll();navMode=mode;modal='drawer';$('drawer').hidden=false;shade(true);currentFilter=filter;catalogQuery='';
 $('drawer-eyebrow').textContent=mode==='saved'?'YOUR PERSONAL COLLECTION':mode==='catalog'?'DISCOVER SOMETHING NEW':mode==='settings'?'MAKE IT YOURS':'GETTING STARTED';
 $('drawer-heading').textContent=mode==='saved'?'My Library':mode==='catalog'?(filter==='all'?'The Catalog':CATEGORIES.find(c=>c.id===filter)?.name+' Collection'):(mode==='settings'?'Preferences':'How to Explore');
 if(mode==='catalog')renderCatalog();if(mode==='saved')renderSaved();if(mode==='settings')renderSettings();if(mode==='help')renderHelp();
 updateNav(mode==='saved'?'saved':mode==='catalog'?'catalog':'explore');$('drawer-close').focus();chime('select');
}
function escapeHtml(str){return String(str).replace(/[&<>"']/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]))}
function card(b,removable=false){const cat=CATEGORIES.find(c=>c.id===b.category);return `<div class="book-card" role="group" aria-label="${escapeHtml(b.title)}"><button class="book-thumb" data-book="${b.id}" style="background:linear-gradient(145deg,${cat.color},#202b28)" aria-label="View ${escapeHtml(b.title)}"><small>${cat.name.toUpperCase()}</small><strong>${escapeHtml(b.title)}</strong><small>✥</small></button><div class="book-card-body"><span class="category-line">${cat.name.toUpperCase()} · READING SAMPLE</span><button data-book="${b.id}" style="background:none;border:0;text-align:left;color:inherit;padding:0"><strong>${escapeHtml(b.title)}</strong></button><small>By ${escapeHtml(b.author)}</small><p>${escapeHtml(b.description.slice(0,108))}${b.description.length>108?'…':''}</p>${saved.includes(b.id)?'<span class="saved-marker">♥ SAVED IN YOUR LIBRARY</span>':''}${removable?`<button class="saved-remove" data-remove="${b.id}">REMOVE FROM COLLECTION</button>`:''}</div></div>`}
function catalogBase(){return `<p class="drawer-intro">Discover ${BOOKS.length} original short reading experiences across four thoughtfully curated collections.</p><input class="catalog-search" type="search" id="catalog-search" placeholder="Search books, topics or authors…" aria-label="Search catalog" value="${escapeHtml(catalogQuery)}"/><div class="filter-row" id="catalog-filters">${[{id:'all',name:'All books'},...CATEGORIES].map(c=>`<button class="filter-chip ${currentFilter===c.id?'selected':''}" data-filter="${c.id}">${c.name}</button>`).join('')}</div><div id="catalog-results"></div>`}
function renderCatalog(){ $('drawer-body').innerHTML=catalogBase();renderCatalogResults();$('catalog-search').addEventListener('input',e=>{catalogQuery=e.target.value;renderCatalogResults()});}
function renderCatalogResults(){let q=catalogQuery.toLowerCase().trim(),books=BOOKS.filter(b=>(currentFilter==='all'||b.category===currentFilter)&&(!q||[b.title,b.author,b.description,b.category].some(s=>s.toLowerCase().includes(q))));$('catalog-results').innerHTML=books.length?books.map(b=>card(b)).join(''):'<div class="empty-state"><div class="empty-symbol">⌕</div>No books matched your search.<br/>Try another topic or collection.</div>';}
function renderSaved(){let books=saved.map(id=>BOOK_MAP.get(id)).filter(Boolean);$('drawer-body').innerHTML=`<p class="drawer-intro">${books.length?`${books.length} saved ${books.length===1?'book':'books'} to return to whenever you like. This collection stays on your device.`:'Your personal reading shelf is waiting to be filled.'}</p>${books.length?books.map(b=>card(b,true)).join(''):'<div class="empty-state"><div class="empty-symbol">♡</div>No books saved yet.<br/>Explore a shelf and add something that catches your eye.<br/><button data-action="catalog">BROWSE THE CATALOG ↗</button></div>'}`}
function renderSettings(){$('drawer-body').innerHTML=`<p class="drawer-intro">Make your visit comfortable. These settings are saved privately in this browser.</p><div class="settings-group"><h3>Environment</h3><label class="setting-line"><span>Ambient sound<small>Soft confirmation chimes for books and pages</small></span><input id="setting-sound" type="checkbox" ${options.sound?'checked':''}/></label><label class="setting-line"><span>Reduce motion<small>Shorten camera travel animations and visual movement</small></span><input id="setting-motion" type="checkbox" ${options.reduceMotion?'checked':''}/></label><label class="setting-line"><span>Mouse sensitivity<small>Adjust how quickly your view turns</small></span><input id="setting-sens" type="range" min="0.4" max="2" step="0.1" value="${options.sensitivity}"/></label></div><div class="settings-group"><h3>Reading preferences</h3><label class="setting-line"><span>Text size</span><input id="setting-reader-size" type="range" min="16" max="25" step="1" value="${options.readerSize}"/></label><label class="setting-line"><span>Page colour</span><select id="setting-reader-theme"><option value="paper" ${options.readerTheme==='paper'?'selected':''}>Warm paper</option><option value="night" ${options.readerTheme==='night'?'selected':''}>Night mode</option></select></label></div><div class="settings-group"><h3>Navigation</h3><p class="drawer-intro">If exploring a 3D space is uncomfortable, use the category buttons on the left or choose a section below. The catalog is fully mouse and keyboard accessible.</p><button class="guide-button" data-action="catalog">USE SIMPLIFIED BOOK CATALOG →</button></div><p class="drawer-intro" style="font-size:12px">Privacy: saved books and reading positions are stored locally in your browser. No account, analytics, or network requests are needed.</p>`;
 $('setting-sound').onchange=e=>{options.sound=e.target.checked;saveOptions();updateSoundStatus()};$('setting-motion').onchange=e=>{options.reduceMotion=e.target.checked;saveOptions()};$('setting-sens').oninput=e=>{options.sensitivity=+e.target.value;saveOptions()};$('setting-reader-size').oninput=e=>{options.readerSize=+e.target.value;saveOptions()};$('setting-reader-theme').onchange=e=>{options.readerTheme=e.target.value;saveOptions()};}
function renderHelp(){$('drawer-body').innerHTML=`<p class="drawer-intro">A warm world of books, created for exploration. Everything runs right here on your computer, with no account required.</p><div class="settings-group"><h3>Explore the 3D world</h3>${[['W / A / S / D','Walk forward, left, backward, right'],['↑ / ↓ / ← / →','Move through the hall (outside the reader)'],['CLICK + DRAG','Look around the library'],['CLICK A BOOK','Open its preview'],['E','Browse the nearest collection'],['ESC','Close panels or book reader']].map(x=>`<div class="help-key"><b>${x[0]}</b><span>${x[1]}</span></div>`).join('')}</div><div class="settings-group"><h3>Enjoy reading</h3><p class="drawer-intro">Choose a book to see its author and description. Select <b>Open & Read</b> to enter a focused reading interface. Turn pages with the arrow buttons or keyboard, change the text size using Aa, and save titles to My Library.</p></div><div class="settings-group"><h3>Accessible alternatives</h3><p class="drawer-intro">Choose the catalog to select books without moving through the 3D environment. Reader settings let you increase text size, choose night mode, and reduce motion.</p></div><button class="guide-button" data-action="catalog">EXPLORE THE BOOK CATALOG →</button>`}
function updateSoundStatus(){$('sound-status').innerHTML=`<span class="status-dot"></span> CHIMES ${options.sound?'ON':'OFF'}`}
function updateLocation(){let n=nearestSection();let loc=n.distance<3.8?n.cat.name.toUpperCase()+' COLLECTION':view.z< -10?'THE READING LOUNGE':'THE GRAND HALL';if($('current-location').textContent!==loc)$('current-location').textContent=loc;}
function updateMap(){const map=$('map-dot');map.style.left=(clamp((view.x+12)/24,0,1)*100)+'%';map.style.bottom=(clamp((19-view.z)/38,0,1)*100)+'%';}
// Interactive books can be selected directly in the 3D world after projecting their positions.
function bookScreen(b){let p=project(vp,b.world);if(!p||Math.abs(p[0])>1.3||Math.abs(p[1])>1.3)return null;return{x:(p[0]+1)*viewport.width/2,y:(1-p[1])*viewport.height/2,dist:Math.hypot(view.x-b.world[0],view.z-b.world[2]),depth:p[2]}}
function pickAt(x,y){let nearest=null,score=1e10;for(let b of BOOKS){let p=bookScreen(b);if(!p||p.dist>11)continue;let s=Math.hypot(x-p.x,y-p.y);let limit=clamp(330/(p.dist+3),24,78);if(s<limit&&s<score){nearest=b;score=s}}return nearest}
// ─── UI event binding ───────────────────────────────────────────────
$('section-buttons').innerHTML=CATEGORIES.map(c=>`<button class="section-button" data-section="${c.id}" title="Jump to ${c.name}"><span class="section-num">${c.num}</span><strong>${c.name}</strong><span class="arrow">↗</span></button>`).join('');
document.querySelectorAll('.section-button').forEach(b=>b.onclick=()=>teleport(CATEGORIES.find(c=>c.id===b.dataset.section)));
$('enter-button').onclick=enterLibrary;$('intro-collection').onclick=()=>showDrawer('catalog');$('brand-home').onclick=toEntrance;
document.querySelectorAll('.nav-link').forEach(b=>b.onclick=()=>b.dataset.action==='explore'?toEntrance():showDrawer(b.dataset.action));
$('settings-button').onclick=()=>showDrawer('settings');$('help-button').onclick=()=>showDrawer('help');
$('preview-close').onclick=closeAll;$('preview-read').onclick=()=>readBook(selectedBook.id);$('preview-save').onclick=()=>toggleSave(selectedBook.id);
$('reader-back').onclick=returnFromReader;$('reader-exit').onclick=returnFromReader;$('reader-previous').onclick=()=>changePage(-1);$('reader-next').onclick=()=>changePage(1);
$('reader-saved').onclick=()=>{if(readingBook){toggleSave(readingBook.id);renderReader()}};
$('reader-preferences').onclick=()=>{$('reader-options').hidden=!$('reader-options').hidden};
$('reader-size').oninput=e=>{options.readerSize=+e.target.value;document.documentElement.style.setProperty('--reader-font',options.readerSize+'px');saveOptions()};
$('reader-theme').onchange=e=>{options.readerTheme=e.target.value;$('reader').classList.toggle('night',options.readerTheme==='night');saveOptions()};
$('drawer-close').onclick=closeAll;$('modal-shade').onclick=closeAll;
$('drawer-body').addEventListener('click',e=>{let book=e.target.closest('[data-book]'),filter=e.target.closest('[data-filter]'),remove=e.target.closest('[data-remove]'),action=e.target.closest('[data-action]');if(book)preview(book.dataset.book);else if(filter){currentFilter=filter.dataset.filter;renderCatalog()}else if(remove){toggleSave(remove.dataset.remove)}else if(action)showDrawer(action.dataset.action)});
$('browse-nearby').onclick=()=>{let{cat,distance}=nearestSection();showDrawer('catalog',distance<8?cat.id:'all')};
$('map-toggle').onclick=()=>{$('map-box').hidden=!$('map-box').hidden};$('map-close').onclick=()=>{$('map-box').hidden=true};
$('map-box').addEventListener('click',e=>{let target=e.target.closest('.map-area');if(!target)return;let i=[...document.querySelectorAll('.map-area')].indexOf(target);if(i>=0&&i<4)teleport(CATEGORIES[i]);else if(i===4){teleport({position:[0,-12.5],yaw:0,id:'lounge',name:'Reading Lounge'})}$('map-box').hidden=true});
window.addEventListener('keydown',e=>{
 if(e.key==='Escape'){$('map-box').hidden=true;if(modal==='reader'){returnFromReader();e.preventDefault()}else if(modal){closeAll();e.preventDefault()}return;}
 if(modal==='reader'){if(e.key==='ArrowLeft'||e.key==='ArrowRight'){changePage(e.key==='ArrowRight'?1:-1);e.preventDefault()}return}
 if(modal||!entered)return;if(document.activeElement&&/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName))return;
 let k=e.key.toLowerCase();if('wasd'.includes(k)&&k.length===1||['arrowup','arrowdown','arrowleft','arrowright'].includes(k)){keys.add(k);e.preventDefault()}
 if(k==='e'){let{cat,distance}=nearestSection();showDrawer('catalog',distance<8?cat.id:'all');e.preventDefault()}
 if(k==='m'){$('map-box').hidden=!$('map-box').hidden}
});window.addEventListener('keyup',e=>keys.delete(e.key.toLowerCase()));window.addEventListener('blur',()=>keys.clear());
canvas.addEventListener('pointerdown',e=>{if(!entered||modal)return;pointer.down=true;pointer.drag=false;pointer.startX=e.clientX;pointer.startY=e.clientY;pointer.x=e.clientX;pointer.y=e.clientY;canvas.setPointerCapture(e.pointerId)});
canvas.addEventListener('pointermove',e=>{pointer.x=e.clientX;pointer.y=e.clientY;if(pointer.down){let dx=e.movementX,dy=e.movementY;if(Math.abs(e.clientX-pointer.startX)+Math.abs(e.clientY-pointer.startY)>4)pointer.drag=true;if(pointer.drag){tween=null;view.yaw+=dx*.0031*options.sensitivity;view.pitch=clamp(view.pitch-dy*.0025*options.sensitivity,-.28,.35)}}});
canvas.addEventListener('pointerup',e=>{if(!entered||modal)return;if(pointer.down&&!pointer.drag){const b=pickAt(e.clientX,e.clientY);if(b)preview(b.id)}pointer.down=false;pointer.drag=false});
canvas.addEventListener('pointerleave',()=>{$('hover-badge').hidden=true;pointer.x=-1000;pointer.y=-1000;});
canvas.addEventListener('wheel',e=>{if(!entered||modal)return;if(e.ctrlKey)return;view.pitch=clamp(view.pitch-e.deltaY*.0002,-.28,.35);e.preventDefault()},{passive:false});
// ─── Software 3D renderer (when the browser blocks WebGL) ──────────────
// Draws the identical real 3D scene geometry by projecting visible polygon faces.
const cubeCorners=[[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5],[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5]];
const cubeFaces=[[0,1,2,3],[7,6,5,4],[4,5,1,0],[3,2,6,7],[0,3,7,4],[5,6,2,1]];
const faceShade=[.82,.95,.57,1.12,.66,1];
function hexShade(h,m){let col=rgb(h),c=col.map(x=>Math.round(clamp(Math.pow(x,.88)*255*m,0,255)));return`rgb(${c[0]},${c[1]},${c[2]})`}
const softwareItems=STATIC.map(item=>{let m=item.m;
 let convert=p=>[m[0]*p[0]+m[4]*p[1]+m[8]*p[2]+m[12],m[1]*p[0]+m[5]*p[1]+m[9]*p[2]+m[13],m[2]*p[0]+m[6]*p[1]+m[10]*p[2]+m[14]];
 return {...item,center:[m[12],m[13],m[14]],corners:cubeCorners.map(convert)}});
let lastSoftwareFrame=-200;
function renderSoftware(t){if(!canvas2d||t-lastSoftwareFrame<110)return;lastSoftwareFrame=t;
 const g=canvas2d,w=viewport.width,h=viewport.height,gSize=viewport.dpr;
 g.setTransform(gSize,0,0,gSize,0,0);g.clearRect(0,0,w,h);
 const bg=g.createLinearGradient(0,0,0,h);bg.addColorStop(0,'#17221e');bg.addColorStop(.47,'#334038');bg.addColorStop(1,'#554a38');g.fillStyle=bg;g.fillRect(0,0,w,h);
 let ordered=softwareItems.map(a=>({...a,dist:Math.hypot(a.center[0]-view.x,a.center[1]-view.y,a.center[2]-view.z)})).sort((a,b)=>b.dist-a.dist);
 for(let item of ordered){if(item.dist>65)continue;
 let screen=item.corners.map(p=>project(vp,p));
 if(!screen.some(q=>q&&Math.abs(q[0])<1.7&&Math.abs(q[1])<1.7))continue;
 let centroid=item.center,camdist=item.dist,far=clamp((camdist-24)/45,0,.60);
 for(let face=0;face<6;face++){
 let indices=cubeFaces[face],pts=indices.map(i=>screen[i]);if(pts.some(p=>!p))continue;
 let coords=pts.map(p=>[(p[0]+1)*w/2,(1-p[1])*h/2]);
 let a=coords[0],b=coords[1],c=coords[2];let cross2=(b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0]);
 if(cross2<=0)continue;
 if(coords.every(([px,py])=>px<0)||coords.every(([px,py])=>px>w)||coords.every(([px,py])=>py<0)||coords.every(([px,py])=>py>h))continue;
 g.beginPath();g.moveTo(...coords[0]);for(let k=1;k<4;k++)g.lineTo(...coords[k]);g.closePath();g.fillStyle=hexShade(item.color,faceShade[face]*(1+item.glow*.4));g.fill();
 if(item.glow>.15){g.strokeStyle='rgba(242,203,135,.22)';g.lineWidth=1;g.stroke()}
 }
 }
 const atmosphere=g.createRadialGradient(w*.55,h*.4,w*.05,w*.52,h*.51,w*.78);atmosphere.addColorStop(0,'rgba(244,197,110,0.02)');atmosphere.addColorStop(1,'rgba(13,25,19,0.24)');g.fillStyle=atmosphere;g.fillRect(0,0,w,h);
}
// ─── Scene rendering and motion ──────────────────────────────────────
function resize(){viewport.width=window.innerWidth;viewport.height=window.innerHeight;viewport.dpr=Math.min(window.devicePixelRatio||1,1.7);for(let c of [canvas,lens]){c.width=Math.floor(viewport.width*viewport.dpr);c.height=Math.floor(viewport.height*viewport.dpr);c.style.width=viewport.width+'px';c.style.height=viewport.height+'px';}gl.viewport(0,0,canvas.width,canvas.height);ctx.setTransform(viewport.dpr,0,0,viewport.dpr,0,0)}window.addEventListener('resize',resize);resize();
function move(dt){if(!entered||modal)return;
 if(tween){tween.time+=dt;let t=clamp(tween.time/tween.duration,0,1),s=options.reduceMotion?t:t*t*(3-2*t);view.x=tween.from.x+(tween.to.x-tween.from.x)*s;view.z=tween.from.z+(tween.to.z-tween.from.z)*s;
 let diff=((tween.to.yaw-tween.from.yaw+Math.PI)%TAU+TAU)%TAU-Math.PI;view.yaw=tween.from.yaw+diff*s;view.pitch=tween.from.pitch+(tween.to.pitch-tween.from.pitch)*s;if(t>=1)tween=null;return;}
 let forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0),right=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0);
 if(forward||right){let d=Math.hypot(forward,right);forward/=d;right/=d;let speed=4.5*dt;view.x+=(Math.sin(view.yaw)*forward+Math.cos(view.yaw)*right)*speed;view.z+=(-Math.cos(view.yaw)*forward+Math.sin(view.yaw)*right)*speed;view.x=clamp(view.x,-10.6,10.6);view.z=clamp(view.z,-17.7,17.7);if(!options.reduceMotion)view.bob+=dt*8;}
}
function resizeCanvasText(){ctx.setTransform(viewport.dpr,0,0,viewport.dpr,0,0);ctx.clearRect(0,0,viewport.width,viewport.height)}
function renderLabels(t){resizeCanvasText();if(!entered||modal)return;
 // Category signs are projected from actual 3D world positions.
 for(let cat of CATEGORIES){let p=project(vp,[cat.shelfX-cat.side*1.22,5.86,cat.shelfZ]);if(!p||Math.abs(p[0])>1.18||Math.abs(p[1])>1.17)continue;let x=(p[0]+1)*viewport.width/2,y=(1-p[1])*viewport.height/2,d=Math.hypot(view.x-cat.shelfX,view.z-cat.shelfZ);
 if(d>21)continue;let scale=clamp(14/(d+4),.50,1.16);ctx.save();ctx.translate(x,y);ctx.scale(scale,scale);ctx.fillStyle='rgba(25,29,23,.89)';ctx.strokeStyle='#b8925c';ctx.lineWidth=1;ctx.fillRect(-73,-20,146,39);ctx.strokeRect(-73,-20,146,39);ctx.fillStyle='#f8e4c3';ctx.font='18px Georgia';ctx.textAlign='center';ctx.fillText(cat.name.toUpperCase(),0,6);ctx.restore()}
 // Glowing selection outlines around a few on-screen interactive titles.
 for(let b of BOOKS){let p=bookScreen(b);if(!p||p.dist>10||p.x<0||p.x>viewport.width||p.y<0||p.y>viewport.height)continue;let s=clamp(360/(p.dist+3),11,50),hover=activeBook===b;ctx.save();ctx.strokeStyle=hover?'#ffe7ad':'#edca877a';ctx.fillStyle=hover?'rgba(240,192,117,.14)':'rgba(228,193,130,.055)';ctx.lineWidth=hover?2:1;let half=s*.38;ctx.fillRect(p.x-half,p.y-s*.7,half*2,s*1.42);ctx.strokeRect(p.x-half,p.y-s*.7,half*2,s*1.42);
 let words=b.title.split(' '),lines=[],line='';for(let word of words){if((line+' '+word).trim().length>15&&line){lines.push(line);line=word}else line=(line+' '+word).trim()}if(line)lines.push(line);
 ctx.textAlign='center';ctx.font='bold '+clamp(90/(p.dist+3),8,11)+'px Georgia';ctx.fillStyle='#fbdfaa';ctx.shadowColor='#211b14';ctx.shadowBlur=4;
 for(let j=0;j<Math.min(4,lines.length);j++)ctx.fillText(lines[j].toUpperCase(),p.x,p.y-(Math.min(4,lines.length)-1)*6+j*12,s*2.65);
 ctx.shadowBlur=0;if(hover){ctx.fillStyle='#f1d2a0';ctx.font='10px Arial';ctx.fillText('✦',p.x,p.y-s*.94)}ctx.restore()}
}
function tick(ts){let dt=Math.min((ts-last)/1000,.04);last=ts;frame++;move(dt);updateLocation();if(frame%8===0)updateMap();
 const eye=[view.x,view.y+(entered&&!options.reduceMotion&&keys.size>0&&!modal?Math.sin(view.bob)*.025:0),view.z];
 const look=[Math.sin(view.yaw)*Math.cos(view.pitch),Math.sin(view.pitch),-Math.cos(view.yaw)*Math.cos(view.pitch)];
 const P=projection(Math.PI/3.2,viewport.width/viewport.height,.09,100),V=lookAt(eye,[eye[0]+look[0],eye[1]+look[1],eye[2]+look[2]]);vp=mul(P,V);
 if(nativeGL){gl.viewport(0,0,canvas.width,canvas.height);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.useProgram(program);gl.uniformMatrix4fv(L.view,false,V);gl.uniformMatrix4fv(L.proj,false,P);gl.uniform3f(L.camera,...eye);STATIC.forEach(item=>draw(item.type,item.m,item.color,item.glow))}else{renderSoftware(ts)}
 if(entered&&!modal&&!pointer.down){activeBook=pickAt(pointer.x,pointer.y);if(activeBook){let p=bookScreen(activeBook);$('hover-badge').hidden=false;$('hover-badge').style.left=clamp(pointer.x,0,viewport.width-245)+'px';$('hover-badge').style.top=clamp(pointer.y,0,viewport.height-90)+'px';$('hover-name').textContent=activeBook.title;canvas.style.cursor='pointer'}else{$('hover-badge').hidden=true;canvas.style.cursor='grab'}}else{$('hover-badge').hidden=true;canvas.style.cursor='grab';activeBook=null}
 renderLabels(ts);requestAnimationFrame(tick)}
setNavCount();updateSoundStatus();document.body.classList.add('welcome');requestAnimationFrame(tick);
// Expose a small, documented diagnostic object for automated smoke tests.
window.VirtualLibraryDebug={getState:()=>({entered,modal,bookCount:BOOKS.length,saved:[...saved],readerPage:readingPage,activeTitle:readingBook?.title||selectedBook?.title||null,gl:!!nativeGL&&!gl.isContextLost(),renderedObjects:STATIC.length}),openBook:id=>preview(id),goToCategory:id=>{let c=CATEGORIES.find(x=>x.id===id);if(c)teleport(c)},enter:enterLibrary,openSaved:()=>showDrawer('saved'),openCatalog:()=>showDrawer('catalog'),getBookScreens:()=>BOOKS.map(b=>({id:b.id,title:b.title,category:b.category,...(bookScreen(b)||{})}))};
})();
