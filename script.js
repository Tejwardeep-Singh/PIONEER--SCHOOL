var tl = gsap.timeline();
tl.to("#page1 video",{
    opacity:0,
    duration:1,
    delay:2,
    zIndex:0
})
tl.to(".video",{
    opacity:0,
    duration:0.2,
    delay:1
})
tl.to(".scroll",{
    overflow:"scroll"
})
tl.from(".carousel",{
    opacity:0,
    duration:1,
    delay:0.3
})
tl.from("#menu",{
    x:100,
    opacity:0,
    duration:1,
    stagger:0.5
}) 
tl.from(".nl img , .nr",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5
})
tl.to("nav",{
    backgroundColor:"#11111195"
})
tl.from("#ab-l",{
    x:-100,
    opacity:0,
    duration:1,
    delay:0.8,
    stagger:0.5
}) 
tl.from("#ab-r",{
    x:100,
    opacity:0,
    duration:1,
    delay:0.1,
    stagger:0.5
}) 

gsap.from(".ab-l,.ab-r",{
    opacity:0,
    duration:1,
    delay:0.8,
    stagger:0.5
}) 
var box = document.querySelector("#contact-pg2 h1")
box.addEventListener("click",function(){
    gsap.to("#contact-pg2 h1",{
        backgroundColor:"orange"
    })
})
box.addEventListener("mouseleave",function(){
    gsap.to("#contact-pg2 h1",{
        backgroundColor:"yellow"
    })
})



