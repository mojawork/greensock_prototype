"use strict";

// --- imports ---
import {TweenMax, Linear} from "gsap";
import {store} from '../store';
// --- imports ---

export function action02(animateObject: HTMLElement, actionkey: string) {
    const endX = store[actionkey].field.offsetWidth - animateObject.offsetWidth;
    if (store[actionkey].tween === false) {
        store[actionkey].tween = TweenMax.to(
            animateObject,
            1,
            {
                x: endX,
                ease: Linear.easeNone
            })
            .reverse();
    }
    if (!store[actionkey].tween.isActive()) {
        //only reverse the direction if the tween is not active
        store[actionkey].tween.reversed(!store[actionkey].tween.reversed())
    }
}