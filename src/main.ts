import {TweenMax, Bounce} from "gsap";


TweenMax.to(".logo", 2, {
    x: '600',
    ease: Bounce.easeOut,
});

