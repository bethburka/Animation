

TweenLite.defaultEase = Power3.easeInOut;

  //responsive timeline animation.
  //values recorded once, nothing changes on resize
var tl = new TimelineMax({repeat:-1, yoyo:true, repeatDelay:1})
tl.from(".banner", 4, {xPercent:-100, force3D:true})
  .to(".banner", 4, {xPercent:100}, "+=3");
tl.play(10);


// Logo Animation
TweenMax.from(".logo", 8, {
  x:600,
  width:200,
  height:200,
  padding:10,
  backgroundColor:"#9a9a9a",
  borderRadius:24});
