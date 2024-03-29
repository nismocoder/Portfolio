let tl = gsap.timeline()
tl.fromTo('.nav-grid ul', {
    x: -1300,
    opactity: 0,
},{
    x: 0,
    opactiy: 1,
    delay: .3,
    duration: 0.6
}
)
.fromTo('h2', {
    x: -900,
    opactity: 0,
},{
    x: 0,
    opactiy: 1,
    delay: 0,
    duration: .5,
}
)
.fromTo('h1', {
    x: -900,
    opactity: 0,
},{
    x: 0,
    opactiy: 1,
    delay: 0,
    duration: .5,
}
)

.fromTo('.h3', {
    opacity: 0,
},{
    opacity: 1,
    ease: "power2.inOut",
    duration: 1, x: 1, ease: "steps(5)",
}
)

.fromTo('.windowSeat', {
    opacity: 0,
},{
    opacity: 1,
    ease: "power2.inOut",
    duration: 0.7, x: 1, ease: "steps(5)",
}
)

.fromTo('.aboutMe p', {
    opacity: 0,
},{
    opacity: 1,
    ease: "power2.inOut",
    duration: 0.5, x: 1, ease: "steps(5)",
}
);