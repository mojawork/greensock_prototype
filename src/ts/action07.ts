"use strict";

// --- imports ---
import {TimelineMax, Bounce, Linear} from "gsap";
import {store} from '../store';
import {forEach, drop} from 'lodash';
// --- imports ---

export interface iAction07 {
    'field': HTMLElement;
    'function': void;
    'speed' : number;
    'tween': any;
}

export function action07(animateObject: HTMLElement, actionkey: string) {

    const data: iAction07 = store[actionkey];
    const endX = store[actionkey].field.offsetWidth - animateObject.offsetWidth +10;
    let antimationTime: number = store[actionkey].speed;

    const buttons = store[actionkey].field.children[1];
    const buttonPlay = buttons.children[0];
    const buttonPause = buttons.children[1];
    const buttonsGTT = drop(buttons.children,2);

    const gotoTime = (count: number) => {
        const progressTime =  antimationTime * data.tween.progress();
        const time = antimationTime / (buttonsGTT.length -1) * count;
        data.tween.resume(progressTime);
        data.tween.removePause();
        data.tween.addPause(time);
        progressTime > time ? data.tween.reversed(1) : data.tween.play(progressTime);
    };

    store[actionkey].tween = new TimelineMax({
        repeat: 0,
    });

    data.tween
        .to(animateObject, antimationTime, {x: endX, ease: Linear.easeNone})
        .pause();

    //--- addEventListener  ---
    buttonPlay.addEventListener("click", () => {
        data.tween.removePause();
        data.tween.play();
    });

    buttonPause.addEventListener("click", () => {
        data.tween.removePause();
        data.tween.pause();
    });

    forEach(buttonsGTT,(button: HTMLElement , count) =>{
        button.addEventListener("click", () => {
            gotoTime(count);
        });
    });
    //--- addEventListener  ---

}