
TweenLite.defaultEase = Power3.easeInOut;

//responsive timeline animation.
var strt = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
//.from(".banner", 4, {opacity: 0.5, force3D:false})
  strt.to(".banner", 1, {xPercent:100}, "+=3");


// Logo Animation
TweenMax.from(".logo", 2.5, {
  ease:Expo.easeout,
  x:320});
