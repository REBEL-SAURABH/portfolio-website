const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem("theme","dark");
        toggleBtn.innerHTML="☀️";
    }else{
        localStorage.setItem("theme","light");
        toggleBtn.innerHTML="🌙";
    }
});

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark-mode");
    toggleBtn.innerHTML="☀️";
}

const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});

document.querySelectorAll(".question").forEach(item=>{
    item.addEventListener("click",()=>{
        let answer=item.nextElementSibling;

        answer.style.display=
        answer.style.display==="block" ? "none" : "block";
    });
});

const modal=document.getElementById("modal");

document.getElementById("openModal").onclick=()=>{
    modal.style.display="block";
};

document.getElementById("closeModal").onclick=()=>{
    modal.style.display="none";
};
let slides=document.querySelectorAll(".slide");
let current=0;

setInterval(()=>{

slides[current].style.display="none";

current=(current+1)%slides.length;

slides[current].style.display="block";

},3000);

const form=document.querySelector("form");

form.addEventListener("submit",(e)=>{

const email=document.querySelector(
'input[type="email"]'
).value;

if(!email.includes("@")){
    alert("Enter valid email");
    e.preventDefault();
}

});

let count=0;

let interval=setInterval(()=>{

count++;

document.getElementById("counter")
.innerText=count;

if(count===100){
clearInterval(interval);
}

},30);

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let progress=
(scrollTop/scrollHeight)*100;

document.getElementById("progressBar")
.style.width=progress+"%";

});