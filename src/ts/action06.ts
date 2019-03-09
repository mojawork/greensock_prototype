"use strict";

// --- imports ---
import {TimelineMax, Bounce, Linear} from "gsap";
import {store} from '../store';

export interface iData {
    'field': HTMLElement;
    'tween': any;
    'actiontype': string;
    'function': void;
}

// --- imports ---

export function action06(animateObject: HTMLElement, actionkey: string) {

    const data: iData = store[actionkey];
    const endX = store[actionkey].field.offsetWidth - animateObject.offsetWidth;

    const buttons = store[actionkey].field.children[1];
    const buttonPlay = buttons.children[0];
    const buttonPause = buttons.children[1];
    const GoToAndPlay1 = buttons.children[2];
    const GoToAndPlay2 = buttons.children[3];
    const GoToAndPlay3 = buttons.children[4];
    const GoToAndPlay4 = buttons.children[5];

    store[actionkey].tween = new TimelineMax({
        repeat: 0,
    });

    data.tween
        .to(animateObject, 4.1, {x: endX, ease: Linear.easeNone})
        .pause();

    GoToAndPlay1.addEventListener("click", () => {
        data.actiontype = '';
        data.tween.play(0);
    });
    GoToAndPlay2.addEventListener("click", () => {
        data.actiontype = '';
        data.tween.play(2);
    });
    GoToAndPlay3.addEventListener("click", () => {
        data.actiontype = '';
        data.tween.resume(2);
        data.tween.reversed(1);
    });
    GoToAndPlay4.addEventListener("click", () => {
        data.actiontype = '';
        data.tween.resume(4);
        data.tween.reversed(1);
    });

    buttonPlay.addEventListener("click", () => {
        data.actiontype = 'paly';
        data.tween.play();
    });

    buttonPause.addEventListener("click", () => {
        data.actiontype = 'pause';
        data.tween.pause();
    });


}