"use strict";

// --- imports ---
import {forEach} from 'lodash';
import {store} from './store';
// --- imports ---

// --- add actions to buttons in fields -----
const fields = document.getElementsByClassName("field");
forEach(fields, (object: HTMLElement) => {
    const actionkey = object.dataset.action;

    store[actionkey].field = object;
    const animateObject = object.children[0];
    const button = object.children[1];

    button.addEventListener("click", () => {
        store[actionkey].function(animateObject, actionkey)
    })
});
