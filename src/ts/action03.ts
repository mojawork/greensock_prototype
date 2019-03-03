"use strict";

// --- imports ---
import {TweenMax, Bounce} from "gsap";
import {store} from '../store';
// --- imports ---

export function action03(animateObject: HTMLElement, actionkey: string) {
    const data = store[actionkey];
    const endX = data.field.offsetWidth - animateObject.offsetWidth;

    if (!data.complete && !data.active) {
        data.active = true;
        TweenMax.to(
            animateObject,
            2,
            {
                x: endX,
                ease: Bounce.easeOut,
                onComplete: () => {
                    data.active = false;
                    data.complete = true;
                },
            })
    }

    if (data.complete && !data.active) {
        data.active = true;
        TweenMax.to(
            animateObject,
            2,
            {
                x: 0,
                ease: Bounce.easeOut,
                onComplete: () => {
                    data.active = false;
                    data.complete = false;
                },
            })
    }

}