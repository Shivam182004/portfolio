
var tl = gsap.timeline();






tl.from("#loadtext h1",{
    
  
    y: 100,
   // ease: "power3.out",
  ease:'bounce',
  delay: 1.3,
  skewY: 7,
  stagger: {
    amount: 0.3
  },
  fontFamily: 'Dancing Script',
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    scrub:2
  }
})



tl.to("#loaderpage",{

top : "-100vh",
dealy : 1,
duration : 1.5
});

tl.from("#miantext h2",{
  x:100,
  duration:1,
  delay:1,
  stagger:1
})


tl.from("#contact h2", {
  y: '100%',
  opacity: 0,
  duration: 0.5,
  ease: 'power3.out',
  stagger: 0.1,
  
 
})



Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.imageMasker("#about " /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "It's Me",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#maintext " /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    
  });
  Shery.makeMagnet("#contact h3 " /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    
  });

 