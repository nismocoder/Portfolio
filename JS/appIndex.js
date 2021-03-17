let tl = gsap.timeline()
tl.fromTo('.nav-container nav', {
    x: -1300,
    opactity: 0,
},{
    x: 0,
    opactiy: 1,
    delay: .3,
    duration: 0.7
}
)
.fromTo('.intro', {
    opacity: 0,
},{
    opacity: 1,
    ease: "power2.inOut",
    duration: 1.7, x: 1, ease: "steps(5)",
}

);