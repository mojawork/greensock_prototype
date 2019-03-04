"use strict";

// --- imports ---
import {TweenMax, Linear} from "gsap";
import {store} from '../store';

// --- imports ---

export function action04(animateObject: HTMLElement, actionkey: string) {
    const endX = store[actionkey].field.offsetWidth - animateObject.offsetWidth;
    const button = store[actionkey].field.children[1];
    if (!store[actionkey].tween) {
        store[actionkey].tween = TweenMax.from(
            animateObject,
            4,
            {
                repeat: -1,
                x: endX,
                ease: Linear.easeNone
            })
            .pause();
    }
    if (store[actionkey].tween && store[actionkey].tween.isActive()) {
        store[actionkey].tween.pause();
        button.innerHTML = 'Pause';
    }
    else {
        store[actionkey].tween.play();
        button.innerHTML = 'Play';
    }
}