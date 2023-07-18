var crsr = document.querySelector("#cursor");
var crsrbl = document.querySelector("#cursorblur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30+"px";
    crsr.style.top = dets.y+"px";
    crsrbl.style.left = dets.x-200+"px";
    crsrbl.style.top = dets.y-150+"px";
})

var aAll = document.querySelectorAll("#nav a");
aAll.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 3,
        crsr.style.border = "1px solid #fff",
        crsr.style.backgroundColor = "transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1,
        crsr.style.border = "0px solid #95C11E",
        crsr.style.backgroundColor = "#95C11E"
    })
})



gsap.to("#nav",{
    backgroundColor : "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -80%",
        scrub:1
    }
})

gsap.from("#aboutus img,#about-us-mid",{
    y:50,
    opacity : 0,
    duration : 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.from(".card",{
    scale:0.8,
    opacity : 0,
    duration : 1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page3 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page3 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})
