import React from 'react';
import _01_s from './01-s.png';
import _02_s from './02-s.png';
import _03_s from './03-s.png';
import _04_s from './04-s.png';
import _05_s from './05-s.png';
import _06_s from './06-s.png';
import _07_s from './07-s.png';
import _08_s from './08-s.png';
import _11_s from './11-s.png';
import _12_s from './12-s.png';
import _13_s from './13-s.png';
import _14_s from './14-s.png';
import _15_s from './15-s.png';
import _16_s from './16-s.png';
import _17_s from './17-s.png';
import _18_s from './18-s.png';
import _19_s from './19-s.png';
import _20_s from './20-s.png';
import _21_s from './21-s.png';
import _22_s from './22-s.png';
import _23_s from './23-s.png';
import _24_s from './24-s.png';
import _25_s from './25-s.png';
import _26_s from './26-s.png';
import _30_s from './30-s.png';
import _31_s from './31-s.png';
import _32_s from './32-s.png';
import _33_s from './33-s.png';
import _34_s from './34-s.png';
import _35_s from './35-s.png';
import _36_s from './36-s.png';
import _37_s from './37-s.png';
import _38_s from './38-s.png';
import _39_s from './39-s.png';
import _40_s from './40-s.png';
import _41_s from './41-s.png';
import _42_s from './42-s.png';
import _43_s from './43-s.png';
import _44_s from './44-s.png';

const iconMap = {
    1: _01_s,
    2: _02_s,
    3: _03_s,
    4: _04_s,
    5: _05_s,
    6: _06_s,
    7: _07_s,
    8: _08_s,
    11: _11_s,
    12: _12_s,
    13: _13_s,
    14: _14_s,
    15: _15_s,
    16: _16_s,
    17: _17_s,
    18: _18_s,
    19: _19_s,
    20: _20_s,
    21: _21_s,
    22: _22_s,
    23: _23_s,
    24: _24_s,
    25: _25_s,
    26: _26_s,
    30: _30_s,
    31: _31_s,
    32: _32_s,
    33: _33_s,
    34: _34_s,
    35: _35_s,
    36: _36_s,
    37: _37_s,
    38: _38_s,
    39: _39_s,
    40: _40_s,
    41: _41_s,
    42: _42_s,
    43: _43_s,
    44: _44_s
};

export default function WeatherIcon(props) {
    const icon = props.icon.toString() || '1';

    return (
        <img alt='' src={iconMap[icon] || iconMap['1']}></img>
    );
}
