"use strict";

import {action01} from './ts/action01';
import {action02} from './ts/action02';
import {action03} from './ts/action03';
import {action04} from './ts/action04';
import {action05} from './ts/action05';
import {action06} from './ts/action06';

// --- store object ---
export const store: any = {
    'action06': {
        'field': false,
        'tween': false,
        'actiontype': 'pause',
        'function': action06
    },
    'action05': {
        'field': false,
        'tween': false,
        'function': action05
    },
    'action04': {
        'field': false,
        'tween': false,
        'function': action04
    },
    'action03': {
        'field': false,
        'complete': false,
        'active': false,
        'function': action03
    },
    'action02': {
        'field': false,
        'tween': false,
        'function': action02
    },
    'action01': {
        'field': false,
        'tween': false,
        'function': action01
    }
};

