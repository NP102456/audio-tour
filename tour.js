function setLang(lang){

localStorage.setItem("lang",lang)

changeLang(lang)

}

function changeLang(lang){

document.querySelector("select").value = lang

if(lang==="en"){

document.getElementById("title").innerText="Choose Tourist Locations"

document.getElementById("p1").innerText="Skywalk Landmark"
document.getElementById("p2").innerText="Hueang River"
document.getElementById("p3").innerText="Phra Phuttha Nawamin Mongkhon Lila Twin Nakorn Apirak"
document.getElementById("p4").innerText="Wat Chom Manee"
document.getElementById("p5").innerText="Tha Dee Mee Community Products"
document.getElementById("p6").innerText="Chiang Khan White Elephant Camp"

}
else{

document.getElementById("title").innerText="เลือกสถานที่ท่องเที่ยว"

document.getElementById("p1").innerText="จุดแลนด์มาร์คสกายวอล์ค"
document.getElementById("p2").innerText="แม่น้ำเหือง"
document.getElementById("p3").innerText="พระพุทธนวมินทรมงคลลีลาทวินคราภิรักษ์"
document.getElementById("p4").innerText="วัดจอมมณี"
document.getElementById("p5").innerText="ผลิตภัณฑ์ชุมชนบ้านท่าดีหมี"
document.getElementById("p6").innerText="ปางช้างเผือกเชียงคาน"

}

}

window.onload = function(){

let lang = localStorage.getItem("lang") || "th"

changeLang(lang)

}