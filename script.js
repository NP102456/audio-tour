function setLang(lang){

localStorage.setItem("lang",lang)

changeLang(lang)

}

function changeLang(lang){

let voice=document.getElementById("voice")

if(lang==="en"){

document.getElementById("title").innerText="Tha Di Mi – A New Way of Life"

document.getElementById("listenBtn").innerText="🎧 Listen"

document.getElementById("nextBtn").innerText="⏭"

voice.src="en1.mp3"

}

else{

document.getElementById("title").innerText="ท่าดีหมีวิถีใหม่"

document.getElementById("listenBtn").innerText="🎧 ฟังคำบรรยาย"

document.getElementById("nextBtn").innerText="⏭ "

voice.src="th1.mp3"

}

}

function playAudio(){

let voice=document.getElementById("voice")

voice.play()

}

function nextPage(){

window.location.href="tour.html"

}

window.onload=function(){

let lang=localStorage.getItem("lang") || "th"

changeLang(lang)

}