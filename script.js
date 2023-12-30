var tl = gsap.timeline();


tl.from("#loadtext h1",{
    

    y: 100,
  ease: "power4.out",
  delay: 1,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
})



tl.to("#loaderpage",{
top : "-100vh",
dealy : 1,
duration : 1.5
});
tl.to("#loadtext h1",{
    

    y: 100,
  ease: "power4.out",
  delay: 1,
  skewY: 7,
  stagger: {
    amount: 0.3
  }
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
  Shery.makeMagnet("#home " /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
 