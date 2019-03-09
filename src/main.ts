"use strict";

// --- imports ---
import {forEach, times} from 'lodash';
import {store} from './store';
import {addVLines} from './ts/vline';
// --- imports ---

// --- add actions to buttons in fields -----
const fields = document.getElementsByClassName("field");
forEach(fields, (object: HTMLElement) => {
    const actionkey = object.dataset.action;
    const eventkey = object.dataset.event;
    const vlineCount = parseInt(object.dataset.vlinecount);

    store[actionkey].field = object;
    const animateObject = object.children[0];
    const button = object.children[1];

    if (eventkey === 'click') {
        button.addEventListener("click", () => {
            store[actionkey].function(animateObject, actionkey)
        })
    }

    if (eventkey === 'generate') {
        store[actionkey].function(animateObject, actionkey);
    }

    if (vlineCount) {
        addVLines(object, vlineCount);
    }


});
