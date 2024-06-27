var box2 = document.querySelector("#menu")
box2.addEventListener("click",function(){
    gsap.to("#nr",{
        display:"flex"
    })
})
box2.addEventListener("mouseleave",function(){
    gsap.to("#nr",{
        display:"none",
        delay:3
    })
})
