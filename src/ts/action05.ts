"use strict";

// --- imports ---
import {TimelineMax, Bounce, Linear} from "gsap";
import {store} from '../store';

// --- imports ---

export function action05(animateObject: HTMLElement, actionkey: string) {
    const endX = store[actionkey].field.offsetWidth - animateObject.offsetWidth;
    const button = store[actionkey].field.children[1];
    if (!store[actionkey].tween) {
        store[actionkey].tween = new TimelineMax({
            repeat: -1,
        });

        store[actionkey].tween
            .to(animateObject, 1.5, {x: endX * 0.5, ease: Linear.easeNone})
            .to(animateObject, 0.5, {scale: 3.5, ease: Bounce.easeIn})
            .to(animateObject, 1.0, {rotation: 360 * 5, ease: Linear.easeOut})
            .to(animateObject, 1.0, {x: endX * 0.5, ease: Linear.easeNone})
            .to(animateObject, 0.5, {scale: 1, ease: Bounce.easeOut})
            .to(animateObject, 1.5, {x: endX, ease: Linear.easeNone})
            .pause() // spucky must set to pause
    }

    if (store[actionkey].tween && !store[actionkey].tween.isActive()) {
        store[actionkey].tween.play();
        button.innerHTML = 'Play';
    }
    else {
        store[actionkey].tween.pause();
        button.innerHTML = 'Pause';
    }
}