data();
const jumbotron=document.getElementById("jumbotron")
async function data(){
    
    const det= await fetch("./jumbo.json");
    const respdata= await det.json();
    const sec2=document.createElement('div');
    sec2.classList.add("sec2");
    sec2.classList.add("row");
    sec2.innerHTML=`<section id="border"></section><img src=${respdata["ontv"]["img"]}>`;
    const secw=document.createElement("div");
    secw.classList.add("secw");
    secw.classList.add("column")
    secw.innerHTML=`<h2>${respdata["ontv"]["title"]}</h2>
    <h3>${respdata["ontv"]["content"]}</h3>`;
    sec2.appendChild(secw);
    jumbotron.appendChild(sec2);
    const sec21=document.createElement('div');
    sec21.classList.add("sec2");
    sec21.classList.add("row11");
    const secw1=document.createElement("div");
    secw1.classList.add("secw");
    secw1.classList.add("column")
    secw1.innerHTML=`<h2>${respdata["download"]["title"]}</h2>
    <h3>${respdata["download"]["content"]}</h3>`;
    sec21.innerHTML=`<section id="border"></section><img src=${respdata["download"]["img"]}>`;
    sec21.appendChild(secw1);
    jumbotron.appendChild(sec21);
    const sec211=document.createElement('div');
    sec211.classList.add("sec2");
    sec211.classList.add("row");
    const secw11=document.createElement("div");
    secw11.classList.add("secw");
    secw11.classList.add("column")
    secw11.innerHTML=`<h2>${respdata["everwhere"]["title"]}</h2>
    <h3>${respdata["everwhere"]["content"]}</h3>`;
    sec211.innerHTML=`<section id="border"></section><img src=${respdata["everwhere"]["img"]}>`;
    sec211.appendChild(secw11);
    jumbotron.appendChild(sec211);
    console.log(respdata)
}
const q=document.getElementById("questions");
sec22();

async function sec22(){
    const det= await fetch("./clif.json");
    const respdata= await det.json();
    const ques=document.createElement("div");
    ques.classList.add("ques");
    ques.innerHTML=`<div class="questop">

    <h3>What is Netflix</h3>
    <button class="btnadd"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg></button>
</div>
<hr>
<h3 class="ans ans1 hide">${respdata["What is Netflix"]}</h3>`;
ques.addEventListener("click",()=>{
    document.querySelector(".ans1").classList.toggle("hide");
})

q.appendChild(ques);
    const ques1=document.createElement("div");
    ques1.classList.add("ques");
    ques1.innerHTML=`<div class="questop">

    <h3>How much does netflix cost?</h3>
    <button class="btnadd"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg></button>
</div>
<hr>
<h3 class="ans ans2  hide">${respdata["How much does netflix cost?"]}</h3>`;
ques1.addEventListener("click",()=>{
    document.querySelector(".ans2").classList.toggle("hide");
})

q.appendChild(ques1);
    const ques2=document.createElement("div");
    ques2.classList.add("ques");
    ques2.innerHTML=`<div class="questop">

    <h3>Where I can Watch?</h3>
    <button class="btnadd"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg></button>
</div>
<hr>
<h3 class="ans ans3 hide">${respdata["Where I can Watch?"]}</h3>`;
ques2.addEventListener("click",()=>{
    document.querySelector(".ans3").classList.toggle("hide");
})

q.appendChild(ques2);
    const ques3=document.createElement("div");
    ques3.classList.add("ques");
    ques3.innerHTML=`<div class="questop">

    <h3>How do I cancel</h3>
    <button class="btnadd"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg></button>
</div>
<hr>
<h3 class="ans ans4 hide">${respdata["How do I cancel"]}</h3>`;
ques3.addEventListener("click",()=>{
    document.querySelector(".ans4").classList.toggle("hide");
})

q.appendChild(ques3);
    const ques4=document.createElement("div");
    ques4.classList.add("ques");
    ques4.innerHTML=`<div class="questop">

    <h3>What can I watch on Netflix?</h3>
    <button class="btnadd"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg></button>
</div>
<hr>
<h3 class="ans ans5 hide">${respdata["What can I watch on Netflix?"]}</h3>`;
ques4.addEventListener("click",()=>{
    document.querySelector(".ans5").classList.toggle("hide");
})

q.appendChild(ques4);
    const ques5=document.createElement("div");
    ques5.classList.add("ques");
    ques5.innerHTML=`<div class="questop">

    <h3>Is Netflix good for you</h3>
    <button class="btnadd"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
        <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"/>
      </svg></button>
</div>
<hr>
<h3 class="ans ans6 hide">${respdata["Is Netflix good for you"]}</h3>`;
ques5.addEventListener("click",()=>{
    document.querySelector(".ans6").classList.toggle("hide");
})

q.appendChild(ques5);
}
