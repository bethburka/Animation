
TweenLite.defaultEase = Power3.easeInOut;

//responsive timeline animation.
var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
tl.from(".banner", 4, {opacity: 0.3, force3D:true})
//  .to(".banner", 1, {xPercent:100}, "+=3");
tl.play(5);

// Logo Animation
TweenMax.from(".logo", 4, {
  x:200,
  width:200,
  borderRadius:14});
