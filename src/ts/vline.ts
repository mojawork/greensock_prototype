"use strict";

// --- imports ---
import {times} from 'lodash';
// --- imports ---

export function addVLines(parent: HTMLElement, count: number) {
    const position: number = 100 / (count - 1);
    times(count + 1, (timesCounter) => {
            const vLine: HTMLElement = document.createElement('div');
            vLine.classList.add("vLine");
            vLine.setAttribute("style", `left:${position * timesCounter}%`);
            parent.appendChild(vLine);
        }
    );
}