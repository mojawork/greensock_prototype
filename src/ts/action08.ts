"use strict";

// --- imports ---
import {TimelineMax, TweenMax, Linear, Bounce} from "gsap";
import {store} from '../store';
import {forEach, drop} from 'lodash';
// --- imports ---

export interface iAction08 {
    'field': HTMLElement;
    'function': void;
    'speed' : number;
    'tween': any;
    'tweenInner': any;
    'tweenInnerShadow': any;
}

export function action08(animateObject: HTMLElement, actionkey: string) {

    const data: iAction08 = store[actionkey];
    const endX = store[actionkey].field.offsetWidth - animateObject.offsetWidth +20;
    let antimationTime: number = store[actionkey].speed;
    const animateObjectInner = animateObject.children[0];

    const buttons = store[actionkey].field.children[1];
    const buttonPlay = buttons.children[0];
    const buttonPause = buttons.children[1];
    const buttonsGTT = drop(buttons.children,2);

    const animateObjectInnerTime =  antimationTime / (buttonsGTT.length - 1);

    const gotoTime = (count: number) => {
        const progressTime =  antimationTime * data.tween.progress();
        const time = antimationTime / (buttonsGTT.length -1) * count;
        data.tween.resume(progressTime);
        data.tween.removePause();
        data.tween.addPause(time);
        data.tweenInner.play(0);
        progressTime > time ? data.tween.reversed(1) : data.tween.play(progressTime);
    };

    store[actionkey].tween = new TimelineMax({
        repeat: 0,
    });

    store[actionkey].tweenInner = new TimelineMax({
        repeat: 0,
    });

    data.tween
        .to(animateObject, antimationTime, {x: endX, ease: Linear.easeNone})
        .pause();

    data.tweenInner
        .to(animateObjectInner, animateObjectInnerTime * 0.25, {scale: 4, ease: Linear.easeOut})
        .to(animateObjectInner, animateObjectInnerTime * 0.75, {scale: 1, ease: Bounce.easeOut})
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