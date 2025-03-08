var d  = document.getElementById("menuss")
var cross  = document.getElementById("cross")
var menu_bar = document.getElementById("menu-links")


d.addEventListener("click",function(){


gsap.to("#menu-links",{

   left:"40%",
   duration:0.6,
   delay:0.6

})

gsap.from(" #menu-links li",{

    y:-100,
    duration:0.8,
    delay:0.3,
    stagger:0.5,
    opacity:0
 
 })


 })

cross.addEventListener("click",function(){

    gsap.to("#menu-links",{

        left:"100%",
        duration:0.6,
        delay:0.6
     
     })
   

})



gsap.from("#main",{
    y:1300,
    delay: 1,
    duration:1
    
})


gsap.from("#motion",{

    y:-20,
    delay:2,
    duration:2,
    opacity:0,
    stagger: 0.3 

})

gsap.from("#text-contain",{

    x:-200,
    duration:2,
    delay:2,
    opacity:0
})

gsap.from("#cover-img",{

    y:500,
    delay:1.9,
    duration:1.9

})