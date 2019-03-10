"use strict";

// --- imports ---
import {TweenMax, Bounce} from "gsap";
import {store} from '../store';
// --- imports ---

export function action09(clock: HTMLElement, actionkey: string) {
    const endX = store[actionkey].field.offsetWidth - clock.offsetWidth;
    const button = store[actionkey].field.children[1];

    const secPointer = clock.querySelector(".sec-pointer");
    const minPointer = clock.querySelector(".min-pointer");
    const hPointer = clock.querySelector(".h-pointer");

    const startClock = function ()  {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        secPointer.setAttribute("style", `transform:rotate(${180 + s * 6}deg)`);
        minPointer.setAttribute("style", `transform:rotate(${180 + m * 6}deg)`);
        hPointer.setAttribute("style", `transform:rotate(${180 + h  * 30}deg)`);
        setTimeout(startClock, 500);
    };
    startClock();

    if (!store[actionkey].tween) {
        store[actionkey].tween = TweenMax.from(
            clock,
            1,
            {
                repeat: -1,
                scale: 1.2,
                ease: Bounce.easeOut
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