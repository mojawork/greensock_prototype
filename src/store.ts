"use strict";

import {action01} from './ts/action01';
import {action02} from './ts/action02';
import {action03} from './ts/action03';

// --- store object ---
export const store: any = {
    'action01': {
        'field': false,
        'tween': false,
        'function': action01
    },
    'action02': {
        'field': false,
        'tween': false,
        'function': action02
    },
    'action03': {
        'field': false,
        'complete':false,
        'active':false,
        'function': action03
    }
};

