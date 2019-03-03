"use strict";

// --- imports ---
import {TweenMax, Bounce, Linear} from "gsap";
import {forEach} from 'lodash';


const actionTween01: any = false;

function action01(animateObject: HTMLElement, actionkey: string) {

    const endX = store[actionkey].field.offsetWidth - animateObject.offsetWidth;

    if (store[actionkey].tween === false) {
        store[actionkey].tween = TweenMax.to(
            animateObject,
            2,
            {
                x: endX,
                ease: Bounce.easeOut
            })
            .reverse();
    }

    if (!store[actionkey].tween.isActive()) {
        //only reverse the direction if the tween is not active
        store[actionkey].tween.reversed(!store[actionkey].tween.reversed())
    }
}

// --- action object ---
const store: any = {
    'action01': {
        'field': false,
        'tween': false,
        'function': action01
    }
};

// --- add actions to buttons in fields -----
const fields = document.getElementsByClassName("field");
forEach(fields, (object: HTMLElement) => {
    const actionkey = object.dataset.action;

    store[actionkey].field = object;
    const animateObject = object.children[0];
    const button = object.children[1];

    button.addEventListener("click", () => {
        store[actionkey].function(animateObject, actionkey)
    })
});


/*
TweenMax.to(".logo", 2, {
    x: '600',
    ease: Bounce.easeOut,
});
*/


/*
const endX = 700;
const box = document.getElementById('logo');

*/


/*
document.getElementById('test').addEventListener("click",

    function () {
        if (!tween.isActive()) {
            //only reverse the direction if the tween is not active
            tween.reversed(!tween.reversed())
        }

    }
);
*/

/*
if (!tween.isActive()) {
    //only reverse the direction if the tween is not active
    tween.reversed(!tween.reversed())
}
*/


/* from the API documentation

isActive() indicates whether or not the animation is currently active (meaning the virtual playhead is actively moving across this instance's time span and it is not paused, nor are any of its ancestor timelines). So for example, if a tween is in the middle of tweening, it's active, but after it is finished (or before it begins), it is not active. If it is paused or if it is placed inside of a timeline that's paused (or if any of its ancestor timelines are paused), isActive() will return false. If the playhead is directly on top of the animation's start time (even if it hasn't rendered quite yet), that counts as "active".

https://greensock.com/docs/#/HTML5/GSAP/TweenLite/isActive/

*/

