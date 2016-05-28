
TweenLite.defaultEase = Power3.easeInOut;

//responsive timeline animation.
var strt = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
strt.from(".banner", 4, {opacity: 0.3, force3D:true})
//  .to(".banner", 1, {xPercent:100}, "+=3");
strt.play(5);

// Logo Animation
TweenMax.from(".logo", 3, {
  x:300});
