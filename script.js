/* ======================================================
   A JOURNEY THROUGH TIME ❤️
   script.js
   Part 3A
======================================================*/

/* ======================================================
   DOM ELEMENTS
======================================================*/

const loadingScreen = document.getElementById("loading-screen");

const pages = document.querySelectorAll(".page");

const passwordPage = document.getElementById("password-page");
const portalPage = document.getElementById("portal-page");
const memoryPage = document.getElementById("memory-page");
const finalPage = document.getElementById("final-page");

const passwordInput = document.getElementById("password");
const unlockBtn = document.getElementById("unlockBtn");
const passwordMessage = document.getElementById("passwordMessage");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const portalMessage = document.getElementById("portalMessage");

const bgMusic = document.getElementById("bgMusic");

/* ======================================================
   SETTINGS
======================================================*/

const PASSWORD = "odissi";

let currentMemory = 0;

/* ======================================================
   LOADING SCREEN
======================================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        loadingScreen.style.transition = "1s";

        setTimeout(() => {

            loadingScreen.style.display = "none";

        }, 1000);

    }, 2500);

});

/* ======================================================
   PAGE SWITCHER
======================================================*/

function showPage(page) {

    pages.forEach(p => {

        p.classList.remove("active");

    });

    page.classList.add("active");

}

/* ======================================================
   PASSWORD CHECK
======================================================*/

function unlockJourney() {

    const entered = passwordInput.value.trim().toLowerCase();

    if (entered === PASSWORD) {

        passwordMessage.style.color = "#8cff8c";
        passwordMessage.innerText = "Access Granted ❤️";

        unlockBtn.disabled = true;

        setTimeout(() => {

            showPage(portalPage);

        }, 1200);

    } else {

        passwordMessage.style.color = "#ff9a9a";
        passwordMessage.innerText = "Wrong Password ❤️ Try Again";

        passwordInput.classList.remove("shake");

        void passwordInput.offsetWidth;

        passwordInput.classList.add("shake");

    }

}

unlockBtn.addEventListener("click", unlockJourney);

passwordInput.addEventListener("keydown", e => {

    if (e.key === "Enter") {

        unlockJourney();

    }

});

/* ======================================================
   PORTAL
======================================================*/

const funnyReplies = [

    "Too late 😂",

    "The portal is waiting...",

    "Come on... don't be scared 😄",

    "The memories won't wait forever ❤️",

    "Press YES 😊"

];

let replyIndex = 0;

noBtn.addEventListener("click", () => {

    portalMessage.innerText = funnyReplies[replyIndex];

    replyIndex++;

    if (replyIndex >= funnyReplies.length) {

        replyIndex = 0;

    }

});

yesBtn.addEventListener("click", () => {

    portalMessage.innerText = "Opening Portal...";

    try {

        bgMusic.volume = 0.5;
        bgMusic.play();

    } catch (e) {}

    const portal = document.getElementById("portal");

    portal.style.transition = "2s";

    portal.style.transform = "scale(7) rotate(720deg)";

    portal.style.filter = "blur(8px)";

    document.body.style.transition = "1.8s";

    document.body.style.background = "white";

    setTimeout(() => {

        document.body.style.background = "#050816";

        showPage(memoryPage);

        if (typeof loadMemory === "function") {

            loadMemory();

        }

    }, 2200);

});
/* ======================================================
   MEMORY DATA
======================================================*/

const memories = [

{
    image:"assets/image1.jpg",
    title:"The Beginning",
    text:"To the little girl who once smiled without a reason—she's still in there. Don't let the world make you forget her. ❤️"
},

{
    image:"assets/image2.jpg",
    title:"Your Roots",
    text:"When life gets heavy, remember the people who have loved you from the very beginning.."
},

{
    image:"assets/image3.jpg",
    title:"Your People",
    text:"Remember—you've built a life filled with people who are grateful that you're part of theirs."
},

{
    image:"assets/image4.jpg",
    title:"The Spark",
    text:"Don't forget the dreams she trusted you to chase"
},

{
    image:"assets/image5.jpg",
    title:"Always Smiling",
    text:"Never let life steal the laugh that made everyone else smile."
},

{
    image:"assets/image6.jpg",
    title:"Almost There",
    text:"Keep going. The life you've dreamed of is still waiting for you."
},

{
    image:"assets/image7.jpg",
    title:"The Best Chapter",
    text:"Thank you for being part of my life ❤️"
}

];

/* ======================================================
   MEMORY ELEMENTS
======================================================*/

const memoryImage = document.getElementById("memoryImage");
const memoryTitle = document.getElementById("memoryTitle");
const memoryText = document.getElementById("memoryText");

const memoryCounter = document.getElementById("memoryCounter");

const progressFill = document.getElementById("progressFill");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

/* ======================================================
   LOAD MEMORY
======================================================*/

function loadMemory(){

    const memory = memories[currentMemory];

    memoryImage.classList.remove("zoomIn");
    memoryTitle.classList.remove("fadeIn");
    memoryText.classList.remove("fadeIn");

    void memoryImage.offsetWidth;

    memoryImage.src = memory.image;
    memoryTitle.innerText = memory.title;
    memoryText.innerText = memory.text;

    memoryImage.classList.add("zoomIn");
    memoryTitle.classList.add("fadeIn");
    memoryText.classList.add("fadeIn");

    memoryCounter.innerText =
        `Memory ${currentMemory+1} / ${memories.length}`;

    progressFill.style.width =
        `${((currentMemory+1)/memories.length)*100}%`;

    prevBtn.style.display =
        currentMemory===0 ? "none":"inline-block";

}

/* ======================================================
   NEXT MEMORY
======================================================*/

function nextMemory(){

    if(currentMemory < memories.length-1){

        currentMemory++;

        loadMemory();

        return;

    }

    finishJourney();

}

/* ======================================================
   PREVIOUS MEMORY
======================================================*/

function previousMemory(){

    if(currentMemory>0){

        currentMemory--;

        loadMemory();

    }

}

/* ======================================================
   BUTTON EVENTS
======================================================*/

nextBtn.addEventListener("click",nextMemory);

prevBtn.addEventListener("click",previousMemory);

/* ======================================================
   KEYBOARD SUPPORT
======================================================*/

document.addEventListener("keydown",(e)=>{

    if(!memoryPage.classList.contains("active"))
        return;

    if(e.key==="ArrowRight"){

        nextMemory();

    }

    if(e.key==="ArrowLeft"){

        previousMemory();

    }

});

/* ======================================================
   AUTO NEXT (Optional)
======================================================*/

// Uncomment if you want automatic slide changes

/*
let autoSlide;

function startAutoSlide(){

    clearInterval(autoSlide);

    autoSlide=setInterval(()=>{

        nextMemory();

    },10000);

}

memoryPage.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

memoryPage.addEventListener("mouseleave",()=>{

    startAutoSlide();

});
*/

/* ======================================================
   FINISH JOURNEY
======================================================*/

function finishJourney(){

    showPage(finalPage);

    if(typeof startCelebration==="function"){

        startCelebration();

    }

}
/* ======================================================
   PART 3C
   EXTRA INTERACTIONS
======================================================*/

const musicBtn = document.getElementById("musicBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const replayBtn = document.getElementById("replayBtn");

/* ======================================================
   MUSIC BUTTON
======================================================*/

let musicPlaying = true;

musicBtn.addEventListener("click",()=>{

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.innerHTML="🎵";

        musicPlaying=true;

    }else{

        bgMusic.pause();

        musicBtn.innerHTML="🔇";

        musicPlaying=false;

    }

});


/* ======================================================
   FULLSCREEN
======================================================*/

fullscreenBtn.addEventListener("click",()=>{

    if(!document.fullscreenElement){

        document.documentElement.requestFullscreen();

    }else{

        document.exitFullscreen();

    }

});


/* ======================================================
   REPLAY
======================================================*/

replayBtn.addEventListener("click",()=>{

    currentMemory=0;

    showPage(passwordPage);

    passwordInput.value="";

    passwordMessage.innerHTML="";

    progressFill.style.width="14%";

});


/* ======================================================
   FLOATING HEARTS
======================================================*/

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*22)+"px";

    heart.style.animationDuration=
        (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,700);


/* ======================================================
   FLOATING STARS
======================================================*/

function createStar(){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=
        (1+Math.random()*3)+"s";

    document.body.appendChild(star);

}

for(let i=0;i<120;i++){

    createStar();

}


/* ======================================================
   BALLOONS
======================================================*/

const balloonColors=[
"#ff4d6d",
"#ffd166",
"#06d6a0",
"#4cc9f0",
"#c77dff",
"#ffffff"
];

function createBalloon(){

    const balloon=document.createElement("div");

    balloon.className="balloon";

    balloon.style.left=Math.random()*100+"vw";

    balloon.style.background=
        balloonColors[
            Math.floor(
                Math.random()*balloonColors.length
            )
        ];

    balloon.style.animationDuration=
        (8+Math.random()*6)+"s";

    document.body.appendChild(balloon);

    setTimeout(()=>{

        balloon.remove();

    },15000);

}


/* ======================================================
   ONLY SHOW BALLOONS ON FINAL PAGE
======================================================*/

setInterval(()=>{

    if(finalPage.classList.contains("active")){

        createBalloon();

    }

},1200);


/* ======================================================
   HIDDEN EASTER EGG
======================================================*/

document.addEventListener("keydown",(e)=>{

    if(e.key.toLowerCase()==="h"){

        const msg=document.createElement("div");

        msg.innerHTML="Made with ❤️ just for you.";

        msg.style.position="fixed";

        msg.style.left="50%";

        msg.style.top="50%";

        msg.style.transform="translate(-50%,-50%)";

        msg.style.padding="18px 35px";

        msg.style.borderRadius="20px";

        msg.style.backdropFilter="blur(15px)";

        msg.style.background="rgba(255,255,255,.15)";

        msg.style.color="white";

        msg.style.fontSize="22px";

        msg.style.zIndex="999999";

        msg.style.opacity="0";

        msg.style.transition=".5s";

        document.body.appendChild(msg);

        setTimeout(()=>{

            msg.style.opacity="1";

        },20);

        setTimeout(()=>{

            msg.style.opacity="0";

            setTimeout(()=>{

                msg.remove();

            },500);

        },2500);

    }

});
