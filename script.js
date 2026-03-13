/* texto tipo maquina de escribir */

const text = "Tengo algo importante que decirte...";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);
i++;

setTimeout(typing,70);

}

}

typing();


/* corazones flotando */

function crearCorazon(){

const heart = document.createElement("div");

heart.className = "heart";
heart.innerHTML = "❤";

heart.style.left = Math.random()*100 + "%";
heart.style.fontSize = (10 + Math.random()*20) + "px";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

setInterval(crearCorazon,400);


/* mensaje secreto */

function mensajeSecreto(){

alert("Me podrias dar el privilegio de ser tu novio? <3 :)");

}


/* fuegos artificiales */

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

const boom = document.getElementById("boom");
const musica = document.getElementById("musica");


function firework(x,y,color){

if(!x){
x = Math.random()*canvas.width;
y = Math.random()*canvas.height/2;
}

for(let i=0;i<50;i++){

particles.push({
x:x,
y:y,
vx:(Math.random()-0.5)*6,
vy:(Math.random()-0.5)*6,
life:100,
color:color
});

}

}


function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{

p.x += p.vx;
p.y += p.vy;
p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,2,0,Math.PI*2);

if(p.color){

ctx.fillStyle = p.color;

}else{

const colores = [
"#ff4da6",
"#ff66cc",
"#cc66ff",
"#9933ff",
"#ff3366"
];

ctx.fillStyle = colores[Math.floor(Math.random()*colores.length)];

}

ctx.shadowBlur = 10;
ctx.shadowColor = ctx.fillStyle;
ctx.fill();

if(p.life <= 0){
particles.splice(index,1);
}

});

requestAnimationFrame(animate);

}


/* fuegos automáticos */

setInterval(()=>{
firework();
},900);

animate();


/* clic para fuegos dorados + sonido + música */

document.addEventListener("click", function(e){

const x = e.clientX;
const y = e.clientY;

if(boom){
boom.currentTime = 0;
boom.play().catch(()=>{});
}

if(musica && musica.paused){
musica.play().catch(()=>{});
}

firework(x,y,"gold");

});


/* soporte para celular */

document.addEventListener("touchstart", function(e){

const touch = e.touches[0];

const x = touch.clientX;
const y = touch.clientY;

if(boom){
boom.currentTime = 0;
boom.play().catch(()=>{});
}

if(musica && musica.paused){
musica.play().catch(()=>{});
}

firework(x,y,"gold");

});