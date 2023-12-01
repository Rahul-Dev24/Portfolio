function loader(){
    window.addEventListener("load",()=>{
        document.querySelector(".loder").style.display = "none";
    })
}
loader();


function menuBar() {
    var count = 0;
    document.querySelector("#menu").addEventListener("click", function () {
        if (count === 0) {
            document.querySelector(".navlinks").style.display = "flex";
            document.querySelector("#close").style.display = "block";
            document.querySelector("#menu").style.display = "none";

            count = 1;
        }

        document.querySelector("#close").addEventListener("click", function () {
            document.querySelector(".navlinks").style.display = "none";
            document.querySelector("#close").style.display = "none";
            document.querySelector("#menu").style.display = "block";
            count = 0;
        });

    });
}
menuBar();

// -------------------------------------gsap------------------------------------

// how lets add some animation

function section1(){
    let t1 = gsap.timeline();

    t1.from(".header,.header .logo,.header .navlinks h4,.header .lan",{
        opacity:0,
        y: -50,
        stagger:0.1,
    });

    t1.from(".mainheader .left h1,.mainheader .left p,.mainheader .left button",{
        opacity:0,
        x: -50,
        stagger:0.1,
    });
    t1.from(".mainheader .right img",{
        x:50,
        opacity:0,
        stagger:0.1,
    });
}

section1();

// // ---------------------------------Section_2--------------------------------

function section2(){
    gsap.to(".section2 .two .center",{
        scale:1.1,
        scrollTrigger:{
            trigger:".section2 .two h1",
            scroller:"body",
            start:"top 60%",
            end:"top 20%",
            scrub: 1,
        },
    });

    gsap.from(".section2 .two .one",{
        x:-1200,
        scrollTrigger:{
            trigger:".section2 .two h1",
            scroller:"body",
            start:"top 60%",
            end:"top 20%",
            scrub: 1,
        },
    });

    gsap.from(".section2 .two .three",{
        x:1200,
        scrollTrigger:{
            trigger:".section2 .two h1",
            scroller:"body",
            start:"top 60%",
            end:"top 20%",
            scrub: 1,
        },
    });

    
}

section2();

// // ---------------------------------------Section_3-------------------------------

function section3(){

    gsap.from(".section3 .three .left .card",{
        opacity:0,
        x:-500,
        scrollTrigger:{
            trigger:".card",
            start:"top 60%",
            end:"top 30%",
            scrub:1,
        }
    });
}

section3();

// // -------------------------------------------Section_4-------------------------------------

function section4(){
    gsap.from(".section4 .four .card .firstcard",{
        opacity:0,
        y:100,
        stagger:1,
        scrollTrigger:{
            trigger:".card",
            scroller:"body",
            start:"top 80%",
            end:"top 30%",
            scrub:2,

        },
    });
}

section4();

// // ----------------------------------------------Section_5------------------------------------------

function section5(){

    gsap.to(".section5 .five .tophead h1",{
        color:"white",
        webkitTextStroke:"2px black",
        duration:2,
        scale:1.1,
        scrollTrigger:{
            trigger:".section5 .five .tophead h1",
            scroller:"body",
            start:"top 60%",
            end:"top 30%",
            scrub:1,
        }
    })
}
section5();

// // ----------------------------------------------Section_6------------------------------------------



// document.querySelector(".custom-btn").addEventListener("click",()=>{
//     document.querySelector(".smallContainer").style.display = "none"
//     document.querySelector("#section_2").innerHTML = `    <div class="container_show">
//     <div class="inner_container">

//         <div class="top_view">
//             <img src="images/close.png" alt="">
//         </div>
//         <div class="bottom_view">

//             <iframe class="google-map" style="border:2px solid gray;"
//                 src="D:\web_project_temp\Rahul_info\index.html" width="100%" height="100%" style="border:0;"
//                 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
//         </div>

//     </div>
// </div>`
// })