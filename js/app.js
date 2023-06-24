
gsap.registerPlugin(ScrollTrigger)

gsap.to(".logo",{
    y:60,
    skewX:"-25deg",
    duration:2
})
gsap.to(".nav",{
    x:-120,
    
    duration:2
})
gsap.from(".date",{
    opacity:0,
    y:120,
    duration:2
})
gsap.from(".release",{

    x:120,
    opacity:0,
    duration:2
})
//the first game role-------------------------------
gsap.to(".first",{
    rotateX:"45deg",
    transformOrigin:"bottom",
    skewX:"-25deg",
    duration:2,
    scrollTrigger:{
        trigger:".first",
        start:"top 25%",//第一个参数的意思是 .first的顶端 第二个参数的意思是页面的25%，也就是当.first的顶端到达页面的25%的时候出发动画
        end:"top top",
        markers:false,
        scrub:true
    }
})
gsap.to(".one img",{
    x:-30,
    scale:1.2,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".first",
        start:"top 25%",
        end:"top top",
        markers:false,
        scrub:true
    }
})
gsap.from(".one .time",{
    x:-50,
    opacity:0,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".first",
        start:"top 25%",
        end:"top top",
        markers:false,
        scrub:true
    }
})
gsap.from(".one .des",{
    x:-100,
    y:-100,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".first",
        start:"top 25%",
        end:"top top",
        markers:false,
        scrub:true
    }
})
gsap.to(".one .btn",{
    opacity:0,
    y:-50,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".first",
        start:"top 25%",
        end:"top top",
        markers:false,
        scrub:true
    }
})

//the second game role-------------------------------

gsap.to(".sec",{
    rotateX:"45deg",
    transformOrigin:"bottom",
    skewX:"-25deg",
    duration:2,
    scrollTrigger:{
        trigger:".sec",
        start:"top 40%",//第一个参数的意思是 .first的顶端 第二个参数的意思是页面的25%，也就是当.first的顶端到达页面的25%的时候出发动画
        end:"top 15%",
        markers:false,
        scrub:true
    }
})
gsap.to(".two img",{
    x:-30,
    scale:1.2,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".sec",
        start:"top 40%",
        end:"top 15%",
        markers:false,
        scrub:true
    }
})
gsap.from(".two .time",{
    x:-50,
    opacity:0,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".sec",
        start:"top 40%",
        end:"top 15%",
        markers:false,
        scrub:true
    }
})
gsap.from(".two .des",{
    x:-100,
    y:-100,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".sec",
        start:"top 40%",
        end:"top 15%",
        markers:false,
        scrub:true
    }
})
gsap.to(".two .btn",{
    opacity:0,
    y:-50,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".sec",
        start:"top 40%",
        end:"top 15%",
        markers:false,
        scrub:true
    }
})

//the third game role-------------------------------

gsap.to(".third",{
    rotateX:"45deg",
    transformOrigin:"bottom",
    skewX:"-25deg",
    duration:2,
    scrollTrigger:{
        trigger:".third",
        start:"top 50%",//第一个参数的意思是 .first的顶端 第二个参数的意思是页面的25%，也就是当.first的顶端到达页面的25%的时候出发动画
        end:"top 25%",
        markers:false,
        scrub:true
    }
})
gsap.to(".three img",{
    x:-30,
    scale:1.2,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".third",
        start:"top 50%",
        end:"top 25%",
        markers:false,
        scrub:true
    }
})
gsap.from(".three .time",{
    x:-50,
    opacity:0,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".third",
        start:"top 50%",
        end:"top 25%",
        markers:false,
        scrub:true
    }
})
gsap.from(".three .des",{
    x:-100,
    y:-100,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".third",
        start:"top 50%",
        end:"top 25%",
        markers:false,
        scrub:true
    }
})
gsap.to(".three .btn",{
    opacity:0,
    y:-50,
    transformOrigin:"bottom",
    duration:2,
    scrollTrigger:{
        trigger:".third",
        start:"top 50%",
        end:"top 25%",
        markers:false,
        scrub:true
    }
})