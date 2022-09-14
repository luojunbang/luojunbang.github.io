"use strict";
(self["webpackChunk_lo_vue3_web"] = self["webpackChunk_lo_vue3_web"] || []).push([[998],{

/***/ 5122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ TinyColor)
});

// UNUSED EXPORTS: tinycolor

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/util.js
/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Force a number between 0 and 1
 * @hidden
 */
function clamp01(val) {
    return Math.min(1, Math.max(0, val));
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function util_pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/conversion.js

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
/**
 * Converts an RGB color value to HSL.
 * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
 * *Returns:* { h, s, l } in [0,1]
 */
function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var s = 0;
    var l = (max + min) / 2;
    if (max === min) {
        s = 0;
        h = 0; // achromatic
    }
    else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, l: l };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
            default:
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        util_pad2(Math.round(r).toString(16)),
        util_pad2(Math.round(g).toString(16)),
        util_pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color plus alpha transparency to hex
 *
 * Assumes r, g, b are contained in the set [0, 255] and
 * a in [0, 1]. Returns a 4 or 8 character rgba hex
 */
// eslint-disable-next-line max-params
function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [
        util_pad2(Math.round(r).toString(16)),
        util_pad2(Math.round(g).toString(16)),
        util_pad2(Math.round(b).toString(16)),
        util_pad2(convertDecimalToHex(a)),
    ];
    // Return a 4 character hex if possible
    if (allow4Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1)) &&
        hex[3].startsWith(hex[3].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join('');
}
/**
 * Converts an RGBA color to an ARGB Hex8 string
 * Rarely used, but required for "toFilter()"
 */
function rgbaToArgbHex(r, g, b, a) {
    var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    return hex.join('');
}
/** Converts a decimal to a hex value */
function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}
function numberInputToObject(color) {
    return {
        r: color >> 16,
        g: (color & 0xff00) >> 8,
        b: color & 0xff,
    };
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/format-input.js



/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/index.js




var TinyColor = /** @class */ (function () {
    function TinyColor(color, opts) {
        if (color === void 0) { color = ''; }
        if (opts === void 0) { opts = {}; }
        var _a;
        // If input is already a tinycolor, return itself
        if (color instanceof TinyColor) {
            // eslint-disable-next-line no-constructor-return
            return color;
        }
        if (typeof color === 'number') {
            color = numberInputToObject(color);
        }
        this.originalInput = color;
        var rgb = inputToRGB(color);
        this.originalInput = color;
        this.r = rgb.r;
        this.g = rgb.g;
        this.b = rgb.b;
        this.a = rgb.a;
        this.roundA = Math.round(100 * this.a) / 100;
        this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
        this.gradientType = opts.gradientType;
        // Don't let the range of [0,255] come back in [0,1].
        // Potentially lose a little bit of precision here, but will fix issues where
        // .5 gets interpreted as half of the total, instead of half of 1
        // If it was supposed to be 128, this was already taken care of by `inputToRgb`
        if (this.r < 1) {
            this.r = Math.round(this.r);
        }
        if (this.g < 1) {
            this.g = Math.round(this.g);
        }
        if (this.b < 1) {
            this.b = Math.round(this.b);
        }
        this.isValid = rgb.ok;
    }
    TinyColor.prototype.isDark = function () {
        return this.getBrightness() < 128;
    };
    TinyColor.prototype.isLight = function () {
        return !this.isDark();
    };
    /**
     * Returns the perceived brightness of the color, from 0-255.
     */
    TinyColor.prototype.getBrightness = function () {
        // http://www.w3.org/TR/AERT#color-contrast
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };
    /**
     * Returns the perceived luminance of a color, from 0-1.
     */
    TinyColor.prototype.getLuminance = function () {
        // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        var rgb = this.toRgb();
        var R;
        var G;
        var B;
        var RsRGB = rgb.r / 255;
        var GsRGB = rgb.g / 255;
        var BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
            R = RsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
            G = GsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
            B = BsRGB / 12.92;
        }
        else {
            // eslint-disable-next-line prefer-exponentiation-operator
            B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    };
    /**
     * Returns the alpha value of a color, from 0-1.
     */
    TinyColor.prototype.getAlpha = function () {
        return this.a;
    };
    /**
     * Sets the alpha value on the current color.
     *
     * @param alpha - The new alpha value. The accepted range is 0-1.
     */
    TinyColor.prototype.setAlpha = function (alpha) {
        this.a = boundAlpha(alpha);
        this.roundA = Math.round(100 * this.a) / 100;
        return this;
    };
    /**
     * Returns the object as a HSVA object.
     */
    TinyColor.prototype.toHsv = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this.a };
    };
    /**
     * Returns the hsva values interpolated into a string with the following format:
     * "hsva(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHsvString = function () {
        var hsv = rgbToHsv(this.r, this.g, this.b);
        var h = Math.round(hsv.h * 360);
        var s = Math.round(hsv.s * 100);
        var v = Math.round(hsv.v * 100);
        return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a HSLA object.
     */
    TinyColor.prototype.toHsl = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this.a };
    };
    /**
     * Returns the hsla values interpolated into a string with the following format:
     * "hsla(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toHslString = function () {
        var hsl = rgbToHsl(this.r, this.g, this.b);
        var h = Math.round(hsl.h * 360);
        var s = Math.round(hsl.s * 100);
        var l = Math.round(hsl.l * 100);
        return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
    };
    /**
     * Returns the hex value of the color.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHex = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return rgbToHex(this.r, this.g, this.b, allow3Char);
    };
    /**
     * Returns the hex value of the color -with a # appened.
     * @param allow3Char will shorten hex value to 3 char if possible
     */
    TinyColor.prototype.toHexString = function (allow3Char) {
        if (allow3Char === void 0) { allow3Char = false; }
        return '#' + this.toHex(allow3Char);
    };
    /**
     * Returns the hex 8 value of the color.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8 = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
    };
    /**
     * Returns the hex 8 value of the color -with a # appened.
     * @param allow4Char will shorten hex value to 4 char if possible
     */
    TinyColor.prototype.toHex8String = function (allow4Char) {
        if (allow4Char === void 0) { allow4Char = false; }
        return '#' + this.toHex8(allow4Char);
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toRgb = function () {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA values interpolated into a string with the following format:
     * "RGBA(xxx, xxx, xxx, xx)".
     */
    TinyColor.prototype.toRgbString = function () {
        var r = Math.round(this.r);
        var g = Math.round(this.g);
        var b = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
    };
    /**
     * Returns the object as a RGBA object.
     */
    TinyColor.prototype.toPercentageRgb = function () {
        var fmt = function (x) { return "".concat(Math.round(bound01(x, 255) * 100), "%"); };
        return {
            r: fmt(this.r),
            g: fmt(this.g),
            b: fmt(this.b),
            a: this.a,
        };
    };
    /**
     * Returns the RGBA relative values interpolated into a string
     */
    TinyColor.prototype.toPercentageRgbString = function () {
        var rnd = function (x) { return Math.round(bound01(x, 255) * 100); };
        return this.a === 1
            ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)")
            : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
    };
    /**
     * The 'real' name of the color -if there is one.
     */
    TinyColor.prototype.toName = function () {
        if (this.a === 0) {
            return 'transparent';
        }
        if (this.a < 1) {
            return false;
        }
        var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
        for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (hex === value) {
                return key;
            }
        }
        return false;
    };
    TinyColor.prototype.toString = function (format) {
        var formatSet = Boolean(format);
        format = format !== null && format !== void 0 ? format : this.format;
        var formattedString = false;
        var hasAlpha = this.a < 1 && this.a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
        if (needsAlphaFormat) {
            // Special case for "transparent", all other non-alpha formats
            // will return rgba when there is transparency.
            if (format === 'name' && this.a === 0) {
                return this.toName();
            }
            return this.toRgbString();
        }
        if (format === 'rgb') {
            formattedString = this.toRgbString();
        }
        if (format === 'prgb') {
            formattedString = this.toPercentageRgbString();
        }
        if (format === 'hex' || format === 'hex6') {
            formattedString = this.toHexString();
        }
        if (format === 'hex3') {
            formattedString = this.toHexString(true);
        }
        if (format === 'hex4') {
            formattedString = this.toHex8String(true);
        }
        if (format === 'hex8') {
            formattedString = this.toHex8String();
        }
        if (format === 'name') {
            formattedString = this.toName();
        }
        if (format === 'hsl') {
            formattedString = this.toHslString();
        }
        if (format === 'hsv') {
            formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
    };
    TinyColor.prototype.toNumber = function () {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    };
    TinyColor.prototype.clone = function () {
        return new TinyColor(this.toString());
    };
    /**
     * Lighten the color a given amount. Providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.lighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l += amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Brighten the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.brighten = function (amount) {
        if (amount === void 0) { amount = 10; }
        var rgb = this.toRgb();
        rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
        rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
        rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
        return new TinyColor(rgb);
    };
    /**
     * Darken the color a given amount, from 0 to 100.
     * Providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.darken = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.l -= amount / 100;
        hsl.l = clamp01(hsl.l);
        return new TinyColor(hsl);
    };
    /**
     * Mix the color with pure white, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return white.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.tint = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('white', amount);
    };
    /**
     * Mix the color with pure black, from 0 to 100.
     * Providing 0 will do nothing, providing 100 will always return black.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.shade = function (amount) {
        if (amount === void 0) { amount = 10; }
        return this.mix('black', amount);
    };
    /**
     * Desaturate the color a given amount, from 0 to 100.
     * Providing 100 will is the same as calling greyscale
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.desaturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s -= amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Saturate the color a given amount, from 0 to 100.
     * @param amount - valid between 1-100
     */
    TinyColor.prototype.saturate = function (amount) {
        if (amount === void 0) { amount = 10; }
        var hsl = this.toHsl();
        hsl.s += amount / 100;
        hsl.s = clamp01(hsl.s);
        return new TinyColor(hsl);
    };
    /**
     * Completely desaturates a color into greyscale.
     * Same as calling `desaturate(100)`
     */
    TinyColor.prototype.greyscale = function () {
        return this.desaturate(100);
    };
    /**
     * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
     * Values outside of this range will be wrapped into this range.
     */
    TinyColor.prototype.spin = function (amount) {
        var hsl = this.toHsl();
        var hue = (hsl.h + amount) % 360;
        hsl.h = hue < 0 ? 360 + hue : hue;
        return new TinyColor(hsl);
    };
    /**
     * Mix the current color a given amount with another color, from 0 to 100.
     * 0 means no mixing (return current color).
     */
    TinyColor.prototype.mix = function (color, amount) {
        if (amount === void 0) { amount = 50; }
        var rgb1 = this.toRgb();
        var rgb2 = new TinyColor(color).toRgb();
        var p = amount / 100;
        var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a,
        };
        return new TinyColor(rgba);
    };
    TinyColor.prototype.analogous = function (results, slices) {
        if (results === void 0) { results = 6; }
        if (slices === void 0) { slices = 30; }
        var hsl = this.toHsl();
        var part = 360 / slices;
        var ret = [this];
        for (hsl.h = (hsl.h - ((part * results) >> 1) + 720) % 360; --results;) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(new TinyColor(hsl));
        }
        return ret;
    };
    /**
     * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
     */
    TinyColor.prototype.complement = function () {
        var hsl = this.toHsl();
        hsl.h = (hsl.h + 180) % 360;
        return new TinyColor(hsl);
    };
    TinyColor.prototype.monochromatic = function (results) {
        if (results === void 0) { results = 6; }
        var hsv = this.toHsv();
        var h = hsv.h;
        var s = hsv.s;
        var v = hsv.v;
        var res = [];
        var modification = 1 / results;
        while (results--) {
            res.push(new TinyColor({ h: h, s: s, v: v }));
            v = (v + modification) % 1;
        }
        return res;
    };
    TinyColor.prototype.splitcomplement = function () {
        var hsl = this.toHsl();
        var h = hsl.h;
        return [
            this,
            new TinyColor({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
            new TinyColor({ h: (h + 216) % 360, s: hsl.s, l: hsl.l }),
        ];
    };
    /**
     * Compute how the color would appear on a background
     */
    TinyColor.prototype.onBackground = function (background) {
        var fg = this.toRgb();
        var bg = new TinyColor(background).toRgb();
        return new TinyColor({
            r: bg.r + (fg.r - bg.r) * fg.a,
            g: bg.g + (fg.g - bg.g) * fg.a,
            b: bg.b + (fg.b - bg.b) * fg.a,
        });
    };
    /**
     * Alias for `polyad(3)`
     */
    TinyColor.prototype.triad = function () {
        return this.polyad(3);
    };
    /**
     * Alias for `polyad(4)`
     */
    TinyColor.prototype.tetrad = function () {
        return this.polyad(4);
    };
    /**
     * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
     * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
     */
    TinyColor.prototype.polyad = function (n) {
        var hsl = this.toHsl();
        var h = hsl.h;
        var result = [this];
        var increment = 360 / n;
        for (var i = 1; i < n; i++) {
            result.push(new TinyColor({ h: (h + i * increment) % 360, s: hsl.s, l: hsl.l }));
        }
        return result;
    };
    /**
     * compare color vs current color
     */
    TinyColor.prototype.equals = function (color) {
        return this.toRgbString() === new TinyColor(color).toRgbString();
    };
    return TinyColor;
}());

// kept for backwards compatability with v1
function tinycolor(color, opts) {
    if (color === void 0) { color = ''; }
    if (opts === void 0) { opts = {}; }
    return new TinyColor(color, opts);
}


/***/ }),

/***/ 7084:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BF": () => (/* binding */ toTypeString),
/* harmony export */   "HD": () => (/* binding */ isString),
/* harmony export */   "J_": () => (/* binding */ isDate),
/* harmony export */   "Kn": () => (/* binding */ isObject),
/* harmony export */   "RI": () => (/* binding */ hasOwn),
/* harmony export */   "W7": () => (/* binding */ toRawType),
/* harmony export */   "_A": () => (/* binding */ camelize),
/* harmony export */   "dG": () => (/* binding */ NOOP),
/* harmony export */   "kJ": () => (/* binding */ isArray),
/* harmony export */   "mf": () => (/* binding */ isFunction),
/* harmony export */   "tI": () => (/* binding */ isPromise)
/* harmony export */ });
/* unused harmony exports EMPTY_ARR, EMPTY_OBJ, NO, PatchFlagNames, capitalize, def, escapeHtml, escapeHtmlComment, extend, genPropsAccessExp, generateCodeFrame, getGlobalThis, hasChanged, hyphenate, includeBooleanAttr, invokeArrayFns, isBooleanAttr, isBuiltInDirective, isGloballyWhitelisted, isHTMLTag, isIntegerKey, isKnownHtmlAttr, isKnownSvgAttr, isMap, isModelListener, isNoUnitNumericStyleProp, isOn, isPlainObject, isReservedProp, isSSRSafeAttrName, isSVGTag, isSet, isSpecialBooleanAttr, isSymbol, isVoidTag, looseEqual, looseIndexOf, makeMap, normalizeClass, normalizeProps, normalizeStyle, objectToString, parseStringStyle, propsToAttrMap, remove, slotFlagsText, stringifyStyle, toDisplayString, toHandlerKey, toNumber */
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 * IMPORTANT: all calls of this function must be prefixed with
 * \/\*#\_\_PURE\_\_\*\/
 * So that rollup can tree-shake them if necessary.
 */
function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i++) {
        map[list[i]] = true;
    }
    return expectsLowerCase ? val => !!map[val.toLowerCase()] : val => !!map[val];
}

/**
 * dev only flag -> name mapping
 */
const PatchFlagNames = {
    [1 /* TEXT */]: `TEXT`,
    [2 /* CLASS */]: `CLASS`,
    [4 /* STYLE */]: `STYLE`,
    [8 /* PROPS */]: `PROPS`,
    [16 /* FULL_PROPS */]: `FULL_PROPS`,
    [32 /* HYDRATE_EVENTS */]: `HYDRATE_EVENTS`,
    [64 /* STABLE_FRAGMENT */]: `STABLE_FRAGMENT`,
    [128 /* KEYED_FRAGMENT */]: `KEYED_FRAGMENT`,
    [256 /* UNKEYED_FRAGMENT */]: `UNKEYED_FRAGMENT`,
    [512 /* NEED_PATCH */]: `NEED_PATCH`,
    [1024 /* DYNAMIC_SLOTS */]: `DYNAMIC_SLOTS`,
    [2048 /* DEV_ROOT_FRAGMENT */]: `DEV_ROOT_FRAGMENT`,
    [-1 /* HOISTED */]: `HOISTED`,
    [-2 /* BAIL */]: `BAIL`
};

/**
 * Dev only
 */
const slotFlagsText = {
    [1 /* STABLE */]: 'STABLE',
    [2 /* DYNAMIC */]: 'DYNAMIC',
    [3 /* FORWARDED */]: 'FORWARDED'
};

const GLOBALS_WHITE_LISTED = (/* unused pure expression or super */ null && ('Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
    'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
    'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt'));
const isGloballyWhitelisted = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(GLOBALS_WHITE_LISTED)));

const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    // Split the content into individual lines but capture the newline sequence
    // that separated each line. This is important because the actual sequence is
    // needed to properly take into account the full line length for offset
    // comparison
    let lines = source.split(/(\r?\n)/);
    // Separate the lines and newline sequences into separate arrays for easier referencing
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
        count +=
            lines[i].length +
                ((newlineSequences[i] && newlineSequences[i].length) || 0);
        if (count >= start) {
            for (let j = i - range; j <= i + range || end > count; j++) {
                if (j < 0 || j >= lines.length)
                    continue;
                const line = j + 1;
                res.push(`${line}${' '.repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = (newlineSequences[j] && newlineSequences[j].length) || 0;
                if (j === i) {
                    // push underline
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + ' '.repeat(pad) + '^'.repeat(length));
                }
                else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + '^'.repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join('\n');
}

/**
 * On the client we only need to offer special cases for boolean attributes that
 * have different names from their corresponding dom properties:
 * - itemscope -> N/A
 * - allowfullscreen -> allowFullscreen
 * - formnovalidate -> formNoValidate
 * - ismap -> isMap
 * - nomodule -> noModule
 * - novalidate -> noValidate
 * - readonly -> readOnly
 */
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(specialBooleanAttrs)));
/**
 * The full list is needed during SSR to produce the correct initial markup.
 */
const isBooleanAttr = /*#__PURE__*/ makeMap(specialBooleanAttrs +
    `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,` +
    `loop,open,required,reversed,scoped,seamless,` +
    `checked,muted,multiple,selected`);
/**
 * Boolean attributes should be included if the value is truthy or ''.
 * e.g. `<select multiple>` compiles to `{ multiple: '' }`
 */
function includeBooleanAttr(value) {
    return !!value || value === '';
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return (attrValidationCache[name] = !isUnsafe);
}
const propsToAttrMap = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
};
/**
 * CSS properties that accept plain numbers
 */
const isNoUnitNumericStyleProp = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(`animation-iteration-count,border-image-outset,border-image-slice,` +
    `border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,` +
    `columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,` +
    `grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,` +
    `grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,` +
    `line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,` +
    // SVG
    `fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,` +
    `stroke-miterlimit,stroke-opacity,stroke-width`)));
/**
 * Known attributes, this is used for stringification of runtime static nodes
 * so that we don't stringify bindings that cannot be set from HTML.
 * Don't also forget to allow `data-*` and `aria-*`!
 * Generated from https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes
 */
const isKnownHtmlAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,` +
    `autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,` +
    `border,buffered,capture,challenge,charset,checked,cite,class,code,` +
    `codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,` +
    `coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,` +
    `disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,` +
    `formaction,formenctype,formmethod,formnovalidate,formtarget,headers,` +
    `height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,` +
    `ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,` +
    `manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,` +
    `open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,` +
    `referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,` +
    `selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,` +
    `start,step,style,summary,tabindex,target,title,translate,type,usemap,` +
    `value,width,wrap`)));
/**
 * Generated from https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 */
const isKnownSvgAttr = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,` +
    `arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,` +
    `baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,` +
    `clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,` +
    `color-interpolation-filters,color-profile,color-rendering,` +
    `contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,` +
    `descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,` +
    `dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,` +
    `fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,` +
    `font-family,font-size,font-size-adjust,font-stretch,font-style,` +
    `font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,` +
    `glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,` +
    `gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,` +
    `horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,` +
    `k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,` +
    `lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,` +
    `marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,` +
    `mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,` +
    `name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,` +
    `overflow,overline-position,overline-thickness,panose-1,paint-order,path,` +
    `pathLength,patternContentUnits,patternTransform,patternUnits,ping,` +
    `pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,` +
    `preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,` +
    `rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,` +
    `restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,` +
    `specularConstant,specularExponent,speed,spreadMethod,startOffset,` +
    `stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,` +
    `strikethrough-position,strikethrough-thickness,string,stroke,` +
    `stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,` +
    `stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,` +
    `systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,` +
    `text-decoration,text-rendering,textLength,to,transform,transform-origin,` +
    `type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,` +
    `unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,` +
    `v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,` +
    `vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,` +
    `writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,` +
    `xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,` +
    `xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`)));

function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for (let i = 0; i < value.length; i++) {
            const item = value[i];
            const normalized = isString(item)
                ? parseStringStyle(item)
                : normalizeStyle(item);
            if (normalized) {
                for (const key in normalized) {
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    }
    else if (isString(value)) {
        return value;
    }
    else if (isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.split(listDelimiterRE).forEach(item => {
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    let ret = '';
    if (!styles || isString(styles)) {
        return ret;
    }
    for (const key in styles) {
        const value = styles[key];
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        if (isString(value) ||
            (typeof value === 'number' && isNoUnitNumericStyleProp(normalizedKey))) {
            // only render valid values
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = '';
    if (isString(value)) {
        res = value;
    }
    else if (isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + ' ';
            }
        }
    }
    else if (isObject(value)) {
        for (const name in value) {
            if (value[name]) {
                res += name + ' ';
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props)
        return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}

// These tag configs are shared between compiler-dom and runtime-dom, so they
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const HTML_TAGS = (/* unused pure expression or super */ null && ('html,body,base,head,link,meta,style,title,address,article,aside,footer,' +
    'header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,' +
    'figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,' +
    'data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,' +
    'time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,' +
    'canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,' +
    'th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,' +
    'option,output,progress,select,textarea,details,dialog,menu,' +
    'summary,template,blockquote,iframe,tfoot'));
// https://developer.mozilla.org/en-US/docs/Web/SVG/Element
const SVG_TAGS = (/* unused pure expression or super */ null && ('svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,' +
    'defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,' +
    'feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,' +
    'feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,' +
    'feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,' +
    'fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,' +
    'foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,' +
    'mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,' +
    'polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,' +
    'text,textPath,title,tspan,unknown,use,view'));
const VOID_TAGS = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isHTMLTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(HTML_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isSVGTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(SVG_TAGS)));
/**
 * Compiler only.
 * Do NOT use in runtime code paths unless behind `(process.env.NODE_ENV !== 'production')` flag.
 */
const isVoidTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(VOID_TAGS)));

const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = '' + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = '';
    let escaped;
    let index;
    let lastIndex = 0;
    for (index = match.index; index < str.length; index++) {
        switch (str.charCodeAt(index)) {
            case 34: // "
                escaped = '&quot;';
                break;
            case 38: // &
                escaped = '&amp;';
                break;
            case 39: // '
                escaped = '&#39;';
                break;
            case 60: // <
                escaped = '&lt;';
                break;
            case 62: // >
                escaped = '&gt;';
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
// https://www.w3.org/TR/html52/syntax.html#comments
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, '');
}

function looseCompareArrays(a, b) {
    if (a.length !== b.length)
        return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b)
        return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
        return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        /* istanbul ignore if: this if will probably never be called */
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for (const key in a) {
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if ((aHasKey && !bHasKey) ||
                (!aHasKey && bHasKey) ||
                !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex(item => looseEqual(item, val));
}

/**
 * For converting {{ interpolation }} values to displayed strings.
 * @private
 */
const toDisplayString = (val) => {
    return isString(val)
        ? val
        : val == null
            ? ''
            : isArray(val) ||
                (isObject(val) &&
                    (val.toString === objectToString || !isFunction(val.toString)))
                ? JSON.stringify(val, replacer, 2)
                : String(val);
};
const replacer = (_key, val) => {
    // can't use isRef here since @vue/shared has no deps
    if (val && val.__v_isRef) {
        return replacer(_key, val.value);
    }
    else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val]) => {
                entries[`${key} =>`] = val;
                return entries;
            }, {})
        };
    }
    else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [...val.values()]
        };
    }
    else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};

const EMPTY_OBJ = ( false)
    ? 0
    : {};
const EMPTY_ARR = ( false) ? 0 : [];
const NOOP = () => { };
/**
 * Always return false.
 */
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith('onUpdate:');
const extend = Object.assign;
const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === '[object Map]';
const isSet = (val) => toTypeString(val) === '[object Set]';
const isDate = (val) => toTypeString(val) === '[object Date]';
const isFunction = (val) => typeof val === 'function';
const isString = (val) => typeof val === 'string';
const isSymbol = (val) => typeof val === 'symbol';
const isObject = (val) => val !== null && typeof val === 'object';
const isPromise = (val) => {
    return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
    // extract "RawType" from strings like "[object RawType]"
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === '[object Object]';
const isIntegerKey = (key) => isString(key) &&
    key !== 'NaN' &&
    key[0] !== '-' &&
    '' + parseInt(key, 10) === key;
const isReservedProp = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap(
// the leading comma is intentional so empty string "" is also included
',key,ref,ref_for,ref_key,' +
    'onVnodeBeforeMount,onVnodeMounted,' +
    'onVnodeBeforeUpdate,onVnodeUpdated,' +
    'onVnodeBeforeUnmount,onVnodeUnmounted')));
const isBuiltInDirective = /*#__PURE__*/ (/* unused pure expression or super */ null && (makeMap('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo')));
const cacheStringFunction = (fn) => {
    const cache = Object.create(null);
    return ((str) => {
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    });
};
const camelizeRE = /-(\w)/g;
/**
 * @private
 */
const camelize = cacheStringFunction((str) => {
    return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''));
});
const hyphenateRE = /\B([A-Z])/g;
/**
 * @private
 */
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, '-$1').toLowerCase());
/**
 * @private
 */
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
/**
 * @private
 */
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
// compare whether a value has changed, accounting for NaN.
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
        fns[i](arg);
    }
};
const def = (obj, key, value) => {
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        value
    });
};
const toNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = () => {
    return (_globalThis ||
        (_globalThis =
            typeof globalThis !== 'undefined'
                ? globalThis
                : typeof self !== 'undefined'
                    ? self
                    : typeof window !== 'undefined'
                        ? window
                        : typeof __webpack_require__.g !== 'undefined'
                            ? __webpack_require__.g
                            : {}));
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name)
        ? `__props.${name}`
        : `__props[${JSON.stringify(name)}]`;
}




/***/ }),

/***/ 2672:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P2": () => (/* binding */ throttle),
/* harmony export */   "br": () => (/* binding */ isJSType),
/* harmony export */   "d3": () => (/* binding */ fmtTime),
/* harmony export */   "jP": () => (/* binding */ generatorDate),
/* harmony export */   "r": () => (/* binding */ r),
/* harmony export */   "rz": () => (/* binding */ parseParams),
/* harmony export */   "t": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports checkIsFirstEntry, copyText, debounce, deepFisrt, deepPriority, filePathToNest, fmtContentLength, fmtDate, fmtDateTime, fmtEmptyVal, fmtNum, fmtStorageSize, fmtUndefined, generatorFile, generatorFileAxios, getFileSilent, getLabelWidth, getParams, getScrollbarWidth, isEmpty, isInContainer, isIndex, isInt, isIpv4, isMacAddress, isNotEmptyText, isPercent, isPort, isPositiveFloat, isSecondTimeBigger, isUndef, parseFileName, parseToPx, routeAutoLink, wildFirst */
// 日期格式化工具
/**
 * @description 格式化日期时间星期(y:年 m:月 d:日 h:小时 i:分钟 s:秒 a:星期 w:第几周)
 * @param {String} date
 * @param {String} formatter y-m-d h:i:s a
 * @example
 * ```js
 *    generatorDate('2020-01-01') == '2020-01-01 00:00:00 五'
 *    generatorDate('2020-01-01','ymdhis 星期a 第w周') == '20200101000000 星期五 第w周'
 * ```
 */
function generatorDate(date, formatter = 'y-m-d h:i:s') {
    let res = 'Invalid Date';
    if (!date)
        return res;
    if (Object.prototype.toString.call(date) === '[object Date]') ;
    else if (/^[0-9]{0,13}$/.test(date.toString())) {
        if (/^[0-9]{10}$/.test(date.toString())) {
            // 对于秒数做一个处理
            date += '000';
        }
        date = new Date(Math.floor(+date));
    }
    else if (typeof date === 'string') {
        date = date.replace(new RegExp(/-/gm), '/'); //IOS
    }
    const d = new Date(date);
    if (d.toString() === 'Invalid Date')
        return res;
    const getWeek = (d) => {
        const day1 = new Date(d.getFullYear(), 0, 1);
        const day1week = day1.getDay();
        const dis = d.getTime() - day1.getTime() - (day1week == 0 ? 0 : 86400000 * (7 - day1week));
        if (dis < 0) {
            return getWeek(new Date(d.getFullYear() - 1, 11, 31));
        }
        return Math.floor(dis / 86400000 / 7) + 1;
    };
    const formatObj = {
        y: d.getFullYear(),
        m: d.getMonth() + 1,
        d: d.getDate(),
        h: d.getHours(),
        i: d.getMinutes(),
        s: d.getSeconds(),
        a: ['日', '一', '二', '三', '四', '五', '六'][d.getDay()],
        w: getWeek(d),
    };
    res = formatter;
    Object.keys(formatObj).forEach(key => {
        const reg = new RegExp(`${key}{1}`, 'g');
        res = res.replace(reg, key === 'a' || key === 'w' ? formatObj[key] : formatObj[key].toString().padStart(2, '0') // 星期不填充0
        );
    });
    return res;
}
/**
 * @description 格式化日期
 * @param {String} Date
 * @param {String} splitter  '-'
 * @example
 * ```js
 *    fmtDate('2020-01-01') == '2020-01-01'
 *    fmtDate('2020-01-01','') == '20200101'
 *    fmtDate('2020-01-01',' ') == '2020 01 01'
 * ```
 */
function fmtDate(date, splitter = '-') {
    return generatorDate(date, `y${splitter}m${splitter}d`);
}
/**
 * @description 格式化时间
 * @param {String} Date
 * @param {String} splitter  ':'
 * @example
 * ```js
 *    fmtTime('2020-01-01') == '00:00:00'
 *    fmtTime('2020-01-01','') == '000000'
 *    fmtTime('2020-01-01',' ') == '00 00 00'
 * ```
 */
function fmtTime(date, splitter = ':') {
    return generatorDate(date, `h${splitter}i${splitter}s`);
}
/**
 * @description 跟generatorData一样
 */
function fmtDateTime(date, formatter) {
    return generatorDate(date, formatter);
}
/**
 * @description 比较时间,第二参数时间戳比第一参数时间戳大
 * @param {String} first
 * @param {String} last
 * @returns {Boolean}
 * @example
 * ```js
 *    isSecondTimeBigger('2020-01-01','2020-01-02') == true
 * ```
 */
function isSecondTimeBigger(first, last) {
    return generatorDate(last) > generatorDate(first);
}

/**
 * @description
 * 静默iframe导出文件
 * @param url 请求地址
 */
function getFileSilent(url) {
    if (!window)
        throw new Error('This function need window env');
    //向后台发送请求
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    iframe.setAttribute('src', url);
}
function generatorFile(fileName, blob, fileType = '') {
    var _a;
    const FILE_TYPE = {
        zip: 'application/zip;charset=utf-8',
        xls: 'application/vnd.ms-excel;charset=UTF-8',
        pdf: 'application/pdf;charset=utf-8',
    };
    console.log('fileType:', (_a = FILE_TYPE[fileType]) !== null && _a !== void 0 ? _a : fileType);
    const url = window.URL.createObjectURL(new Blob([blob], { type: fileType }));
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', fileName);
    a.style.display = 'none';
    document.body.append(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
function parseFileName(contentDispotion) {
    if (contentDispotion === undefined)
        return Math.random().toString(16).slice(2);
    if (/UTF-8/.test(contentDispotion))
        return contentDispotion.replace(/[\s\S]+UTF-8''([\S\s]+\.[\S]+)/, '$1');
    return contentDispotion.replace(/\s*attachment;\s*filename="([\S\s]+\.[\S]+)"[\s\S]*/, '$1');
}
function generatorFileAxios(res, fileName, type) {
    const { headers, data } = res;
    generatorFile(fileName !== null && fileName !== void 0 ? fileName : parseFileName(headers['content-disposition']), data, type);
}

// 工具
/**
 * @description
 * @param {String} val
 * @returns {Boolean}
 */
function isIpv4(val) {
    const ary = val.split('.');
    return ary.length === 4 && ary.every(i => i !== '' && /^([1-9]?\d|1\d{2}|2[0-4]\d|25[0-5])$/.test(i));
}
/**
 * @description
 * @param {String} val
 * @returns {Boolean}
 */
function isMacAddress(val) {
    const ary = val.split(':');
    return ary.length === 6 && ary.every(i => /^[\dabcdefABCDEF]{2}$/.test(i));
}
/**
 * @description 金额 等
 * @param {String|Number} val
 * @returns {Boolean}
 */
function isPositiveFloat(text) {
    return /^[1-9][0-9]*(.[0-9]{1,2})?$/.test(text.toString()) || /^[0]{1}(.[0]{1,2})?$/.test(text.toString());
}
/**
 * @description
 * @param {String|Number} val
 * @returns {Boolean}
 */
function isInt(text) {
    if (isUndef(text))
        return false;
    return /^(0|[1-9][0-9]*)$/.test(text.toString());
}
//
/**
 * @description 百分率 0-100
 * @param {String|Number} val
 * @returns {Boolean}
 */
function isPercent(text) {
    return (/^[1-9][0-9]*(.[0-9]{1,2})?$/.test(text.toString()) && parseFloat(text.toString()) <= 100) || /^[0]{1}(.[0-9]{1,2})?$/.test(text.toString());
}
/**
 * @description 端口 0-65535
 * @param {String|Number} val
 * @returns {Boolean}
 */
function isPort(text) {
    return (/^[1-9][0-9]*$/.test(text.toString()) && Math.floor(+text) <= 65535) || /^0$/.test(text.toString());
}
/**
 * @description
 * @param {*} val
 * @param {String} target
 * @returns {Boolean}
 */
function isJSType(val, target) {
    return (Object.prototype.toString
        .call(val)
        .replace(/^\[object ([a-zA-Z]*)\]$/, '$1')
        .toLowerCase() === target.toLowerCase());
}
/**
 * @description
 * @param {*} val
 * @returns {Boolean}
 */
function isEmpty(val) {
    return val === null || val === '';
}
/**
 * @description
 * @param {*} val
 * @returns {Boolean}
 */
function isNotEmptyText(val) {
    return val !== null && val !== '' && val !== undefined;
}
function isUndef(val) {
    return val === null || val === undefined;
}

// 格式化
/**
 *
 * @param {*} val
 * @returns
 */
function fmtNum(val, fixed = 0) {
    // toDo...
    return val.toString();
}
/**
 *
 * @param {*} val
 * @returns
 */
function fmtUndefined(val) {
    if (val === undefined || val === null)
        return '-';
    return val;
}
/**
 *
 * @param {*} val
 * @returns
 */
function fmtEmptyVal(val, target = '-') {
    if (isEmpty(val))
        return target;
    return val;
}
/**
 * @description formatter size display
 * @param {String｜Number } val The val to transform ,default unit is b,Only accept 2b 2k 2m 2g 2t 2p
 * @param {String} unit accept targetUnit ex.'k','K','Kb'
 * @returns {String} The val after transform
 * @example
 * ```js
 * ('2048K','m') -> '2m'
 * ```
 */
function fmtStorageSize(val, unit) {
    const UNIT = 'bkmgtp'.split('');
    val = val.toString().toLowerCase();
    const size = parseFloat(val);
    let originUnit = 'b';
    if (isNaN(size))
        throw new Error('Require a right input');
    if (/[bkmgtp]/.test(val))
        originUnit = val.replace(/^[0-9.]+([bkmgtp]{1})$/g, '$1');
    let res = size * Math.pow(1024, UNIT.indexOf(originUnit)), //transform size with unit b
    unitIdx = 0;
    if (unit) {
        if (isJSType(unit, 'string') && UNIT.indexOf(unit[0].toLowerCase()) != -1) {
            const targetUnitIdx = UNIT.indexOf(unit[0].toLowerCase());
            res = res * Math.pow(1024, 0 - targetUnitIdx);
        }
        else
            throw new Error('Require the correct transform unit');
    }
    else {
        while (res.toFixed(0).length > 3) {
            res = res / 1024;
            unitIdx++;
        }
    }
    return (isInt(res) ? res : res.toFixed(1)) + (unit ? unit : UNIT[unitIdx]);
}
/**
 *
 * @param {*} val
 * @returns
 */
function fmtContentLength(val) {
    const UNIT = 'BKMGTP';
    let res = +val;
    let unitIdx = 0;
    while (res.toFixed(0).length > 3) {
        res = res / 1000;
        unitIdx++;
    }
    return (isInt(res) ? res : res.toFixed(1)) + UNIT[unitIdx];
}

// 工具
/**
 * @description
 * 检查是否首次访问
 * @example
 * ```js
 * checkIsFirstEntry(KEY?).then(val=>{}).catch(_=>{})
 * ```
 */
function checkIsFirstEntry(flagKey = 'IS_FIRST_ENTRY') {
    if (!window || !window.localStorage)
        throw new Error('This method need to run in browser');
    return new Promise((rs, rj) => {
        const ret = window.localStorage.getItem(flagKey);
        if (ret) {
            rj(ret);
        }
        else {
            window.localStorage.setItem(flagKey, '1');
            rs('1');
        }
    });
}

// 树遍历
function deepFisrt(arr, { children = 'children', name = 'name' } = {}) {
    if (!Array.isArray(arr))
        return [];
    const parseNode = (node) => {
        const res = [{ [name]: node[name] }];
        if (Array.isArray(node[children])) {
            node[children].forEach((n) => res.push(...parseNode(n)));
        }
        return res;
    };
    const res = [];
    arr.forEach(n => res.push(...parseNode(n)));
    return res;
}
/**
 * @description
 * 广度遍历
 * @param {Array} arr
 * @returns {Array}
 */
function wildFirst(arr, { children = 'children', name = 'name' } = {}) {
    let waitParseList = [];
    const res = arr.map((node) => {
        Array.isArray(node.children) && waitParseList.push(...node.children);
        return { [name]: node[name] };
    });
    while (waitParseList.length != 0) {
        const cacheList = [];
        waitParseList.forEach(node => {
            res.push({ [name]: node[name] });
            Array.isArray(node.children) && cacheList.push(...node.children);
        });
        waitParseList = cacheList;
    }
    return res;
}
function deepPriority(root, fn, { children = 'children' } = {}) {
    if (Array.isArray(root[children]) && root[children].length > 0) {
        root[children].forEach((node, idx) => {
            fn(node, idx);
            deepPriority(node, fn);
        });
    }
}

// 工具
/**
 * @description
 * 拼接url与参数
 * @example
 * ```js
 * parseParams({a:1},'github.com') == github.com?a=1
 * ```
 */
function parseParams(params, url = '') {
    const res = url ? url + '?' : '';
    return (res +
        Object.keys(params)
            .map(key => `${key}=${encodeURIComponent(params[key] ? params[key] : '')}`)
            .join('&'));
}
/**
 * @description
 * 从url获取参数
 * @example
 * ```js
 * getParams('github.com?a=1') == {a:1}
 * ```
 */
function getParams(url) {
    const url_ary = url.slice(url.indexOf('?') + 1).split('&');
    return url_ary.reduce((rs, item) => {
        const [key, value] = item.split('=');
        rs[key] = decodeURIComponent(value);
        return rs;
    }, {});
}

// 工具
/**
 * @description 计算label的长度 三个数组字母==两个文字
 * @param {*} label
 * @param {*} fontSize
 * @returns
 */
function getLabelWidth(label, fontSize = 14) {
    const minWidth = 2 * fontSize;
    let res = minWidth;
    if (!label)
        return minWidth;
    if (label.length) {
        const az09AryLength = label.split('').filter(i => /[0-9A-Za-z()%]/.test(i)).length;
        res = Math.ceil((az09AryLength * fontSize * 2) / 3) + (label.length - az09AryLength) * fontSize;
    }
    return Math.max(minWidth, res);
}
/**
 *
 * @param {*} val
 * @returns
 */
function copyText(val) {
    if (!isJSType(val, 'string') || !document)
        return false;
    const oInput = document.createElement('input');
    oInput.value = val;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    document.execCommand('Copy'); // 执行浏览器复制命令
    oInput.style.display = 'none';
    document.body.removeChild(oInput);
    return true;
}
/**
 * @description 获取滚动条宽度
 * @returns Number
 *
 */
function getScrollbarWidth() {
    if (!window || !document)
        throw new Error('Need window env');
    const outerDiv = document.createElement('div');
    outerDiv.style.width = '100px';
    outerDiv.style.position = 'absolute';
    outerDiv.style.visibility = 'hidden';
    outerDiv.style.top = '-9999px';
    document.body.appendChild(outerDiv);
    const outerboxWidth = outerDiv.offsetWidth;
    outerDiv.style.overflow = 'scroll';
    const innerDiv = document.createElement('div');
    innerDiv.style.width = '100%';
    outerDiv.appendChild(innerDiv);
    const innerboxWidth = innerDiv.offsetWidth;
    document.body.removeChild(outerDiv);
    return outerboxWidth - innerboxWidth;
}
function isInContainer() {
    console.log('heloo');
}
function r(x = 10) {
    return Math.random()
        .toString(16)
        .slice(2, 2 + x);
}
function t(wait, ...args) {
    return new Promise(rs => setTimeout(rs, wait * 1000, ...args));
}

/**
 *
 * @param {Function} func
 * @param {Number} wait
 * @returns {*}
 */
function throttle(func, wait = 500) {
    let ctx, args, res, lastTime;
    const handle = () => {
        lastTime = Date.now();
        res = func.apply(ctx, args);
    };
    return function (...argument) {
        !lastTime && handle();
        args = argument;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        ctx = this;
        if (Date.now() - lastTime > wait)
            handle();
        return res;
    };
}
/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
function debounce(func, wait = 300, immediate = false) {
    let timeout, args, context, timestamp, result;
    const later = function () {
        // 据上一次触发时间间隔
        const last = +new Date() - timestamp;
        // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
        if (last < wait && last > 0) {
            timeout = setTimeout(later, wait - last);
        }
        else {
            timeout = null;
            // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
            if (!immediate) {
                result = func.apply(context, args);
                if (!timeout)
                    context = args = null;
            }
        }
    };
    return function (...argument) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        context = this;
        args = argument;
        timestamp = +new Date();
        const callNow = immediate && !timeout;
        // 如果延时不存在，重新设定延时
        if (!timeout)
            timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    };
}

function parseToPx(val) {
    if (/^[1-9][0-9]+(.[0-9]+)?$/g.test(val.toString()))
        return val + 'px';
    else
        return val.toString();
}

// 判断是否是index.vue或者 */DIR/DIR.vue 不区分大小写
const isIndex = (path) => {
    if (!path)
        return false;
    const _path = path.replace(/^\.\//, '').split('/');
    if (_path.length == 1)
        return /\.vue$/.test(path);
    else if (_path.length == 2) {
        const [dir, name] = _path.slice(-2);
        return dir.toLowerCase() + '.vue' === name.toLowerCase() || name.toLowerCase() === 'index.vue';
    }
    else
        return false;
};
function routeAutoLink(routePath, layoutComponentLists, routeConfig) {
    if (!Array.isArray(layoutComponentLists))
        throw Error('Should be Array fo LayoutComponents.');
    const routerNest = filePathToNest(routePath, routeConfig).map(route => {
        if (!route.children) {
            return {
                path: route.path,
                title: route.title,
                href: route.href,
                children: [
                    {
                        path: '',
                        href: route.href,
                        fullPath: route.fullPath,
                        title: route.title,
                        meta: route.meta,
                    },
                ],
            };
        }
        return route;
    });
    const routes = (function parseRouterRaw(routeAry, deep) {
        if (!Array.isArray(routeAry))
            return [];
        return routeAry.map(i => {
            var _a, _b;
            if (!i.fullPath && !layoutComponentLists[deep])
                throw Error(`LayoutComponents ${deep} is undefined`);
            const routerRaw = {
                path: i.path,
                component: (_a = i.fullPath) !== null && _a !== void 0 ? _a : layoutComponentLists[deep],
                name: (_b = i.fullPath) === null || _b === void 0 ? void 0 : _b.replace(/(\/|\.)/g, '_'),
                meta: i.meta,
            };
            if (i.children)
                routerRaw.children = parseRouterRaw(i.children, deep + 1);
            return routerRaw;
        });
    })(routerNest, 0);
    return function toCompoennt(importFn, routeLists) {
        if (!routeLists)
            routeLists = routes;
        return routeLists.map(i => {
            let children = [];
            if (i.children && i.children.length > 0)
                children = toCompoennt(importFn, i.children);
            return Object.assign(Object.assign({}, i), { children, component: typeof i.component === 'string' ? importFn(i.component) : i.component });
        });
    };
}
function filePathToNest(routePath, config, prefix = '') {
    const pathList = routePath.filter(i => isIndex(i.split('/').slice(-2).join('/'))).map(i => i.replace(/^\.\//, '').split('/'));
    const ans = {};
    let idx = 0;
    while (pathList.some(i => i[idx] !== void 0)) {
        pathList.forEach(path => {
            var _a, _b, _c;
            if (!path[idx] || isIndex(path.slice(idx - 1, idx + 1).join('/')))
                return; // 筛选重复导入 xx/index.vue
            const key = path.slice(0, idx + 1).join('/');
            if (!ans[key]) {
                const obj = {
                    path: path[idx],
                    title: path[idx],
                    href: prefix + key,
                };
                if (isIndex(path.slice(idx).join('/'))) {
                    obj.fullPath = prefix + path.join('/');
                    obj.meta = (_a = config[obj.fullPath]) === null || _a === void 0 ? void 0 : _a.meta;
                }
                obj.title = (_c = (_b = obj.meta) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : path[idx];
                ans[key] = obj;
            }
        });
        idx++;
    }
    const list = [];
    Object.keys(ans).forEach(item => {
        const pathList = item.split('/');
        if (pathList.length == 1)
            list.push(ans[item]);
        else {
            const prePath = pathList.slice(0, pathList.length - 1).join('/');
            if (ans[prePath]) {
                if (Array.isArray(ans[prePath].children))
                    ans[prePath].children.push(ans[item]);
                else
                    ans[prePath].children = [ans[item]];
            }
        }
    });
    return list;
}




/***/ }),

/***/ 1322:
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ 9956:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 1179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "MT": () => (/* binding */ createStore)
});

// UNUSED EXPORTS: Store, createLogger, createNamespacedHelpers, default, mapActions, mapGetters, mapMutations, mapState, storeKey, useStore

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/env.js
function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function getTarget() {
    // @ts-ignore
    return (typeof navigator !== 'undefined' && typeof window !== 'undefined')
        ? window
        : typeof __webpack_require__.g !== 'undefined'
            ? __webpack_require__.g
            : {};
}
const isProxyAvailable = typeof Proxy === 'function';

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/const.js
const HOOK_SETUP = 'devtools-plugin:setup';
const HOOK_PLUGIN_SETTINGS_SET = 'plugin:settings:set';

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/time.js
let supported;
let perf;
function isPerformanceSupported() {
    var _a;
    if (supported !== undefined) {
        return supported;
    }
    if (typeof window !== 'undefined' && window.performance) {
        supported = true;
        perf = window.performance;
    }
    else if (typeof __webpack_require__.g !== 'undefined' && ((_a = __webpack_require__.g.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
        supported = true;
        perf = __webpack_require__.g.perf_hooks.performance;
    }
    else {
        supported = false;
    }
    return supported;
}
function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/proxy.js


class ApiProxy {
    constructor(plugin, hook) {
        this.target = null;
        this.targetQueue = [];
        this.onQueue = [];
        this.plugin = plugin;
        this.hook = hook;
        const defaultSettings = {};
        if (plugin.settings) {
            for (const id in plugin.settings) {
                const item = plugin.settings[id];
                defaultSettings[id] = item.defaultValue;
            }
        }
        const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
        let currentSettings = Object.assign({}, defaultSettings);
        try {
            const raw = localStorage.getItem(localSettingsSaveId);
            const data = JSON.parse(raw);
            Object.assign(currentSettings, data);
        }
        catch (e) {
            // noop
        }
        this.fallbacks = {
            getSettings() {
                return currentSettings;
            },
            setSettings(value) {
                try {
                    localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
                }
                catch (e) {
                    // noop
                }
                currentSettings = value;
            },
            now() {
                return now();
            },
        };
        if (hook) {
            hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
                if (pluginId === this.plugin.id) {
                    this.fallbacks.setSettings(value);
                }
            });
        }
        this.proxiedOn = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target.on[prop];
                }
                else {
                    return (...args) => {
                        this.onQueue.push({
                            method: prop,
                            args,
                        });
                    };
                }
            },
        });
        this.proxiedTarget = new Proxy({}, {
            get: (_target, prop) => {
                if (this.target) {
                    return this.target[prop];
                }
                else if (prop === 'on') {
                    return this.proxiedOn;
                }
                else if (Object.keys(this.fallbacks).includes(prop)) {
                    return (...args) => {
                        this.targetQueue.push({
                            method: prop,
                            args,
                            resolve: () => { },
                        });
                        return this.fallbacks[prop](...args);
                    };
                }
                else {
                    return (...args) => {
                        return new Promise(resolve => {
                            this.targetQueue.push({
                                method: prop,
                                args,
                                resolve,
                            });
                        });
                    };
                }
            },
        });
    }
    async setRealTarget(target) {
        this.target = target;
        for (const item of this.onQueue) {
            this.target.on[item.method](...item.args);
        }
        for (const item of this.targetQueue) {
            item.resolve(await this.target[item.method](...item.args));
        }
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@vue+devtools-api@6.2.1/node_modules/@vue/devtools-api/lib/esm/index.js






function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
        hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    }
    else {
        const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
        const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
        list.push({
            pluginDescriptor: descriptor,
            setupFn,
            proxy,
        });
        if (proxy)
            setupFn(proxy.proxiedTarget);
    }
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/vuex@4.0.2_vue@3.2.37/node_modules/vuex/dist/vuex.esm-bundler.js
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */



var storeKey = 'store';

function useStore (key) {
  if ( key === void 0 ) key = null;

  return (0,external_Vue_.inject)(key !== null ? key : storeKey)
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset state
  resetStoreState(store, state, hot);
}

function resetStoreState (store, state, hot) {
  var oldState = store._state;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computedObj = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldState.
    // using partial to return function with only arguments preserved in closure environment.
    computedObj[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      // TODO: use `computed` when it's possible. at the moment we can't due to
      // https://github.com/vuejs/vuex/pull/1883
      get: function () { return computedObj[key](); },
      enumerable: true // for local getters
    });
  });

  store._state = (0,external_Vue_.reactive)({
    data: state
  });

  // enable strict mode for new state
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldState) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldState.data = null;
      });
    }
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("production" !== 'production')) {}
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((false)) {}
      parentState[moduleName] = module.state;
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by state update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((false)) {}
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  (0,external_Vue_.watch)(function () { return store._state.data; }, function () {
    if ((false)) {}
  }, { deep: true, flush: 'sync' });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((false)) {}

  return { type: type, payload: payload, options: options }
}

var LABEL_VUEX_BINDINGS = 'vuex bindings';
var MUTATIONS_LAYER_ID = 'vuex:mutations';
var ACTIONS_LAYER_ID = 'vuex:actions';
var INSPECTOR_ID = 'vuex';

var actionId = 0;

function addDevtools (app, store) {
  setupDevtoolsPlugin(
    {
      id: 'org.vuejs.vuex',
      app: app,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [LABEL_VUEX_BINDINGS]
    },
    function (api) {
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: 'Vuex Mutations',
        color: COLOR_LIME_500
      });

      api.addTimelineLayer({
        id: ACTIONS_LAYER_ID,
        label: 'Vuex Actions',
        color: COLOR_LIME_500
      });

      api.addInspector({
        id: INSPECTOR_ID,
        label: 'Vuex',
        icon: 'storage',
        treeFilterPlaceholder: 'Filter stores...'
      });

      api.on.getInspectorTree(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          if (payload.filter) {
            var nodes = [];
            flattenStoreForInspectorTree(nodes, store._modules.root, payload.filter, '');
            payload.rootNodes = nodes;
          } else {
            payload.rootNodes = [
              formatStoreForInspectorTree(store._modules.root, '')
            ];
          }
        }
      });

      api.on.getInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          makeLocalGetters(store, modulePath);
          payload.state = formatStoreForInspectorState(
            getStoreModule(store._modules, modulePath),
            modulePath === 'root' ? store.getters : store._makeLocalGettersCache,
            modulePath
          );
        }
      });

      api.on.editInspectorState(function (payload) {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          var modulePath = payload.nodeId;
          var path = payload.path;
          if (modulePath !== 'root') {
            path = modulePath.split('/').filter(Boolean).concat( path);
          }
          store._withCommit(function () {
            payload.set(store._state.data, path, payload.state.value);
          });
        }
      });

      store.subscribe(function (mutation, state) {
        var data = {};

        if (mutation.payload) {
          data.payload = mutation.payload;
        }

        data.state = state;

        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);

        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: Date.now(),
            title: mutation.type,
            data: data
          }
        });
      });

      store.subscribeAction({
        before: function (action, state) {
          var data = {};
          if (action.payload) {
            data.payload = action.payload;
          }
          action._id = actionId++;
          action._time = Date.now();
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: action._time,
              title: action.type,
              groupId: action._id,
              subtitle: 'start',
              data: data
            }
          });
        },
        after: function (action, state) {
          var data = {};
          var duration = Date.now() - action._time;
          data.duration = {
            _custom: {
              type: 'duration',
              display: (duration + "ms"),
              tooltip: 'Action duration',
              value: duration
            }
          };
          if (action.payload) {
            data.payload = action.payload;
          }
          data.state = state;

          api.addTimelineEvent({
            layerId: ACTIONS_LAYER_ID,
            event: {
              time: Date.now(),
              title: action.type,
              groupId: action._id,
              subtitle: 'end',
              data: data
            }
          });
        }
      });
    }
  );
}

// extracted from tailwind palette
var COLOR_LIME_500 = 0x84cc16;
var COLOR_DARK = 0x666666;
var COLOR_WHITE = 0xffffff;

var TAG_NAMESPACED = {
  label: 'namespaced',
  textColor: COLOR_WHITE,
  backgroundColor: COLOR_DARK
};

/**
 * @param {string} path
 */
function extractNameFromPath (path) {
  return path && path !== 'root' ? path.split('/').slice(-2, -1)[0] : 'Root'
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorNode}
 */
function formatStoreForInspectorTree (module, path) {
  return {
    id: path || 'root',
    // all modules end with a `/`, we want the last segment only
    // cart/ -> cart
    // nested/cart/ -> cart
    label: extractNameFromPath(path),
    tags: module.namespaced ? [TAG_NAMESPACED] : [],
    children: Object.keys(module._children).map(function (moduleName) { return formatStoreForInspectorTree(
        module._children[moduleName],
        path + moduleName + '/'
      ); }
    )
  }
}

/**
 * @param {import('@vue/devtools-api').CustomInspectorNode[]} result
 * @param {*} module
 * @param {string} filter
 * @param {string} path
 */
function flattenStoreForInspectorTree (result, module, filter, path) {
  if (path.includes(filter)) {
    result.push({
      id: path || 'root',
      label: path.endsWith('/') ? path.slice(0, path.length - 1) : path || 'Root',
      tags: module.namespaced ? [TAG_NAMESPACED] : []
    });
  }
  Object.keys(module._children).forEach(function (moduleName) {
    flattenStoreForInspectorTree(result, module._children[moduleName], filter, path + moduleName + '/');
  });
}

/**
 * @param {*} module
 * @return {import('@vue/devtools-api').CustomInspectorState}
 */
function formatStoreForInspectorState (module, getters, path) {
  getters = path === 'root' ? getters : getters[path];
  var gettersKeys = Object.keys(getters);
  var storeState = {
    state: Object.keys(module.state).map(function (key) { return ({
      key: key,
      editable: true,
      value: module.state[key]
    }); })
  };

  if (gettersKeys.length) {
    var tree = transformPathsToObjectTree(getters);
    storeState.getters = Object.keys(tree).map(function (key) { return ({
      key: key.endsWith('/') ? extractNameFromPath(key) : key,
      editable: false,
      value: canThrow(function () { return tree[key]; })
    }); });
  }

  return storeState
}

function transformPathsToObjectTree (getters) {
  var result = {};
  Object.keys(getters).forEach(function (key) {
    var path = key.split('/');
    if (path.length > 1) {
      var target = result;
      var leafKey = path.pop();
      path.forEach(function (p) {
        if (!target[p]) {
          target[p] = {
            _custom: {
              value: {},
              display: p,
              tooltip: 'Module',
              abstract: true
            }
          };
        }
        target = target[p]._custom.value;
      });
      target[leafKey] = canThrow(function () { return getters[key]; });
    } else {
      result[key] = canThrow(function () { return getters[key]; });
    }
  });
  return result
}

function getStoreModule (moduleMap, path) {
  var names = path.split('/').filter(function (n) { return n; });
  return names.reduce(
    function (module, moduleName, i) {
      var child = module[moduleName];
      if (!child) {
        throw new Error(("Missing module \"" + moduleName + "\" for path \"" + path + "\"."))
      }
      return i === names.length - 1 ? child : child._children
    },
    path === 'root' ? moduleMap : moduleMap.root._children
  )
}

function canThrow (cb) {
  try {
    return cb()
  } catch (e) {
    return e
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((false)) {}

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((false)) {}
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((false)) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((false)) {}
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

function createStore (options) {
  return new Store(options)
}

var Store = function Store (options) {
  var this$1$1 = this;
  if ( options === void 0 ) options = {};

  if ((false)) {}

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;
  var devtools = options.devtools;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._makeLocalGettersCache = Object.create(null);
  this._devtools = devtools;

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store state, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreState(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1$1); });
};

var prototypeAccessors = { state: { configurable: true } };

Store.prototype.install = function install (app, injectKey) {
  app.provide(injectKey || storeKey, this);
  app.config.globalProperties.$store = this;

  var useDevtools = this._devtools !== undefined
    ? this._devtools
    : ( false) || false;

  if (useDevtools) {
    addDevtools(app, this);
  }
};

prototypeAccessors.state.get = function () {
  return this._state.data
};

prototypeAccessors.state.set = function (v) {
  if ((false)) {}
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((false)) {}
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1$1.state); });

  if (
    false
  ) {}
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((false)) {}
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1$1.state); });
  } catch (e) {
    if ((false)) {}
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1$1.state); });
      } catch (e) {
        if ((false)) {}
      }
      resolve(res);
    }, function (error) {
      try {
        this$1$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1$1.state, error); });
      } catch (e) {
        if ((false)) {}
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch$1 (getter, cb, options) {
    var this$1$1 = this;

  if ((false)) {}
  return (0,external_Vue_.watch)(function () { return getter(this$1$1.state, this$1$1.getters); }, cb, Object.assign({}, options))
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1$1 = this;

  this._withCommit(function () {
    this$1$1._state.data = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreState(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1$1.state, path.slice(0, -1));
    delete parentState[path[path.length - 1]];
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (false) {}
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (false) {}
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (false) {}
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {}
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (false) {}
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  version: '4.0.2',
  Store: Store,
  storeKey: storeKey,
  createStore: createStore,
  useStore: useStore,
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* harmony default export */ const vuex_esm_bundler = ((/* unused pure expression or super */ null && (index)));



/***/ }),

/***/ 5823:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BAP": () => (/* binding */ d_arrow_left_default),
/* harmony export */   "G7x": () => (/* binding */ view_default),
/* harmony export */   "K41": () => (/* binding */ circle_close_default),
/* harmony export */   "K5e": () => (/* binding */ arrow_down_default),
/* harmony export */   "Rrw": () => (/* binding */ warning_filled_default),
/* harmony export */   "SUY": () => (/* binding */ clock_default),
/* harmony export */   "Tkc": () => (/* binding */ more_default),
/* harmony export */   "Tw$": () => (/* binding */ circle_close_filled_default),
/* harmony export */   "WF_": () => (/* binding */ minus_default),
/* harmony export */   "XdH": () => (/* binding */ arrow_left_default),
/* harmony export */   "a2Z": () => (/* binding */ arrow_up_default),
/* harmony export */   "c5o": () => (/* binding */ success_filled_default),
/* harmony export */   "cEj": () => (/* binding */ info_filled_default),
/* harmony export */   "caK": () => (/* binding */ hide_default),
/* harmony export */   "faS": () => (/* binding */ calendar_default),
/* harmony export */   "gbz": () => (/* binding */ loading_default),
/* harmony export */   "olP": () => (/* binding */ arrow_right_default),
/* harmony export */   "tsQ": () => (/* binding */ d_arrow_right_default),
/* harmony export */   "v37": () => (/* binding */ plus_default),
/* harmony export */   "x8P": () => (/* binding */ close_default),
/* harmony export */   "yGk": () => (/* binding */ circle_check_default)
/* harmony export */ });
/* unused harmony exports AddLocation, Aim, AlarmClock, Apple, ArrowDownBold, ArrowLeftBold, ArrowRightBold, ArrowUpBold, Avatar, Back, Baseball, Basketball, Bell, BellFilled, Bicycle, Bottom, BottomLeft, BottomRight, Bowl, Box, Briefcase, Brush, BrushFilled, Burger, Camera, CameraFilled, CaretBottom, CaretLeft, CaretRight, CaretTop, Cellphone, ChatDotRound, ChatDotSquare, ChatLineRound, ChatLineSquare, ChatRound, ChatSquare, Check, Checked, Cherry, Chicken, CircleCheckFilled, CirclePlus, CirclePlusFilled, CloseBold, Cloudy, Coffee, CoffeeCup, Coin, ColdDrink, Collection, CollectionTag, Comment, Compass, Connection, Coordinate, CopyDocument, Cpu, CreditCard, Crop, DCaret, DataAnalysis, DataBoard, DataLine, Delete, DeleteFilled, DeleteLocation, Dessert, Discount, Dish, DishDot, Document, DocumentAdd, DocumentChecked, DocumentCopy, DocumentDelete, DocumentRemove, Download, Drizzling, Edit, EditPen, Eleme, ElemeFilled, ElementPlus, Expand, Failed, Female, Files, Film, Filter, Finished, FirstAidKit, Flag, Fold, Folder, FolderAdd, FolderChecked, FolderDelete, FolderOpened, FolderRemove, Food, Football, ForkSpoon, Fries, FullScreen, Goblet, GobletFull, GobletSquare, GobletSquareFull, Goods, GoodsFilled, Grape, Grid, Guide, Headset, Help, HelpFilled, Histogram, HomeFilled, HotWater, House, IceCream, IceCreamRound, IceCreamSquare, IceDrink, IceTea, Iphone, Key, KnifeFork, Lightning, Link, List, Location, LocationFilled, LocationInformation, Lock, Lollipop, MagicStick, Magnet, Male, Management, MapLocation, Medal, Menu, Message, MessageBox, Mic, Microphone, MilkTea, Money, Monitor, Moon, MoonNight, MoreFilled, MostlyCloudy, Mouse, Mug, Mute, MuteNotification, NoSmoking, Notebook, Notification, Odometer, OfficeBuilding, Open, Operation, Opportunity, Orange, Paperclip, PartlyCloudy, Pear, Phone, PhoneFilled, Picture, PictureFilled, PictureRounded, PieChart, Place, Platform, Pointer, Position, Postcard, Pouring, Present, PriceTag, Printer, Promotion, QuestionFilled, Rank, Reading, ReadingLamp, Refresh, RefreshLeft, RefreshRight, Refrigerator, Remove, RemoveFilled, Right, ScaleToOriginal, School, Scissor, Search, Select, Sell, SemiSelect, Service, SetUp, Setting, Share, Ship, Shop, ShoppingBag, ShoppingCart, ShoppingCartFull, Smoking, Soccer, SoldOut, Sort, SortDown, SortUp, Stamp, Star, StarFilled, Stopwatch, Sugar, Suitcase, Sunny, Sunrise, Sunset, Switch, SwitchButton, TakeawayBox, Ticket, Tickets, Timer, ToiletPaper, Tools, Top, TopLeft, TopRight, TrendCharts, Trophy, TurnOff, Umbrella, Unlock, Upload, UploadFilled, User, UserFilled, Van, VideoCamera, VideoCameraFilled, VideoPause, VideoPlay, Wallet, WalletFilled, Warning, Watch, Watermelon, WindPower, ZoomIn, ZoomOut */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/*! Element Plus Icons Vue v2.0.6 */

// src/components/add-location.vue


// unplugin-vue:/plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};

// src/components/add-location.vue
var _sfc_main = {
  name: "AddLocation"
}, _hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), _hoisted_3 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), _hoisted_4 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
}, null, -1), _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_5);
}
var add_location_default = /* @__PURE__ */ export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "add-location.vue"]]);

// src/components/aim.vue

var _sfc_main2 = {
  name: "Aim"
}, _hoisted_12 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_22 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_32 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32zm0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32zM96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32zm576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32z"
}, null, -1), _hoisted_42 = [
  _hoisted_22,
  _hoisted_32
];
function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_12, _hoisted_42);
}
var aim_default = /* @__PURE__ */ export_helper_default(_sfc_main2, [["render", _sfc_render2], ["__file", "aim.vue"]]);

// src/components/alarm-clock.vue

var _sfc_main3 = {
  name: "AlarmClock"
}, _hoisted_13 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_23 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 832a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), _hoisted_33 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m292.288 824.576 55.424 32-48 83.136a32 32 0 1 1-55.424-32l48-83.136zm439.424 0-55.424 32 48 83.136a32 32 0 1 0 55.424-32l-48-83.136zM512 512h160a32 32 0 1 1 0 64H480a32 32 0 0 1-32-32V320a32 32 0 0 1 64 0v192zM90.496 312.256A160 160 0 0 1 312.32 90.496l-46.848 46.848a96 96 0 0 0-128 128L90.56 312.256zm835.264 0A160 160 0 0 0 704 90.496l46.848 46.848a96 96 0 0 1 128 128l46.912 46.912z"
}, null, -1), _hoisted_43 = [
  _hoisted_23,
  _hoisted_33
];
function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_13, _hoisted_43);
}
var alarm_clock_default = /* @__PURE__ */ export_helper_default(_sfc_main3, [["render", _sfc_render3], ["__file", "alarm-clock.vue"]]);

// src/components/apple.vue

var _sfc_main4 = {
  name: "Apple"
}, _hoisted_14 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_24 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M599.872 203.776a189.44 189.44 0 0 1 64.384-4.672l2.624.128c31.168 1.024 51.2 4.096 79.488 16.32 37.632 16.128 74.496 45.056 111.488 89.344 96.384 115.264 82.752 372.8-34.752 521.728-7.68 9.728-32 41.6-30.72 39.936a426.624 426.624 0 0 1-30.08 35.776c-31.232 32.576-65.28 49.216-110.08 50.048-31.36.64-53.568-5.312-84.288-18.752l-6.528-2.88c-20.992-9.216-30.592-11.904-47.296-11.904-18.112 0-28.608 2.88-51.136 12.672l-6.464 2.816c-28.416 12.224-48.32 18.048-76.16 19.2-74.112 2.752-116.928-38.08-180.672-132.16-96.64-142.08-132.608-349.312-55.04-486.4 46.272-81.92 129.92-133.632 220.672-135.04 32.832-.576 60.288 6.848 99.648 22.72 27.136 10.88 34.752 13.76 37.376 14.272 16.256-20.16 27.776-36.992 34.56-50.24 13.568-26.304 27.2-59.968 40.704-100.8a32 32 0 1 1 60.8 20.224c-12.608 37.888-25.408 70.4-38.528 97.664zm-51.52 78.08c-14.528 17.792-31.808 37.376-51.904 58.816a32 32 0 1 1-46.72-43.776l12.288-13.248c-28.032-11.2-61.248-26.688-95.68-26.112-70.4 1.088-135.296 41.6-171.648 105.792C121.6 492.608 176 684.16 247.296 788.992c34.816 51.328 76.352 108.992 130.944 106.944 52.48-2.112 72.32-34.688 135.872-34.688 63.552 0 81.28 34.688 136.96 33.536 56.448-1.088 75.776-39.04 126.848-103.872 107.904-136.768 107.904-362.752 35.776-449.088-72.192-86.272-124.672-84.096-151.68-85.12-41.472-4.288-81.6 12.544-113.664 25.152z"
}, null, -1), _hoisted_34 = [
  _hoisted_24
];
function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_14, _hoisted_34);
}
var apple_default = /* @__PURE__ */ export_helper_default(_sfc_main4, [["render", _sfc_render4], ["__file", "apple.vue"]]);

// src/components/arrow-down-bold.vue

var _sfc_main5 = {
  name: "ArrowDownBold"
}, _hoisted_15 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_25 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M104.704 338.752a64 64 0 0 1 90.496 0l316.8 316.8 316.8-316.8a64 64 0 0 1 90.496 90.496L557.248 791.296a64 64 0 0 1-90.496 0L104.704 429.248a64 64 0 0 1 0-90.496z"
}, null, -1), _hoisted_35 = [
  _hoisted_25
];
function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_15, _hoisted_35);
}
var arrow_down_bold_default = /* @__PURE__ */ export_helper_default(_sfc_main5, [["render", _sfc_render5], ["__file", "arrow-down-bold.vue"]]);

// src/components/arrow-down.vue

var _sfc_main6 = {
  name: "ArrowDown"
}, _hoisted_16 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_26 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), _hoisted_36 = [
  _hoisted_26
];
function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_16, _hoisted_36);
}
var arrow_down_default = /* @__PURE__ */ export_helper_default(_sfc_main6, [["render", _sfc_render6], ["__file", "arrow-down.vue"]]);

// src/components/arrow-left-bold.vue

var _sfc_main7 = {
  name: "ArrowLeftBold"
}, _hoisted_17 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_27 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
}, null, -1), _hoisted_37 = [
  _hoisted_27
];
function _sfc_render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_17, _hoisted_37);
}
var arrow_left_bold_default = /* @__PURE__ */ export_helper_default(_sfc_main7, [["render", _sfc_render7], ["__file", "arrow-left-bold.vue"]]);

// src/components/arrow-left.vue

var _sfc_main8 = {
  name: "ArrowLeft"
}, _hoisted_18 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_28 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), _hoisted_38 = [
  _hoisted_28
];
function _sfc_render8(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_18, _hoisted_38);
}
var arrow_left_default = /* @__PURE__ */ export_helper_default(_sfc_main8, [["render", _sfc_render8], ["__file", "arrow-left.vue"]]);

// src/components/arrow-right-bold.vue

var _sfc_main9 = {
  name: "ArrowRightBold"
}, _hoisted_19 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_29 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"
}, null, -1), _hoisted_39 = [
  _hoisted_29
];
function _sfc_render9(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_19, _hoisted_39);
}
var arrow_right_bold_default = /* @__PURE__ */ export_helper_default(_sfc_main9, [["render", _sfc_render9], ["__file", "arrow-right-bold.vue"]]);

// src/components/arrow-right.vue

var _sfc_main10 = {
  name: "ArrowRight"
}, _hoisted_110 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_210 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), _hoisted_310 = [
  _hoisted_210
];
function _sfc_render10(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_110, _hoisted_310);
}
var arrow_right_default = /* @__PURE__ */ export_helper_default(_sfc_main10, [["render", _sfc_render10], ["__file", "arrow-right.vue"]]);

// src/components/arrow-up-bold.vue

var _sfc_main11 = {
  name: "ArrowUpBold"
}, _hoisted_111 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_211 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M104.704 685.248a64 64 0 0 0 90.496 0l316.8-316.8 316.8 316.8a64 64 0 0 0 90.496-90.496L557.248 232.704a64 64 0 0 0-90.496 0L104.704 594.752a64 64 0 0 0 0 90.496z"
}, null, -1), _hoisted_311 = [
  _hoisted_211
];
function _sfc_render11(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_111, _hoisted_311);
}
var arrow_up_bold_default = /* @__PURE__ */ export_helper_default(_sfc_main11, [["render", _sfc_render11], ["__file", "arrow-up-bold.vue"]]);

// src/components/arrow-up.vue

var _sfc_main12 = {
  name: "ArrowUp"
}, _hoisted_112 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_212 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), _hoisted_312 = [
  _hoisted_212
];
function _sfc_render12(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_112, _hoisted_312);
}
var arrow_up_default = /* @__PURE__ */ export_helper_default(_sfc_main12, [["render", _sfc_render12], ["__file", "arrow-up.vue"]]);

// src/components/avatar.vue

var _sfc_main13 = {
  name: "Avatar"
}, _hoisted_113 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_213 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
}, null, -1), _hoisted_313 = [
  _hoisted_213
];
function _sfc_render13(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_113, _hoisted_313);
}
var avatar_default = /* @__PURE__ */ export_helper_default(_sfc_main13, [["render", _sfc_render13], ["__file", "avatar.vue"]]);

// src/components/back.vue

var _sfc_main14 = {
  name: "Back"
}, _hoisted_114 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_214 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
}, null, -1), _hoisted_314 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
}, null, -1), _hoisted_44 = [
  _hoisted_214,
  _hoisted_314
];
function _sfc_render14(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_114, _hoisted_44);
}
var back_default = /* @__PURE__ */ export_helper_default(_sfc_main14, [["render", _sfc_render14], ["__file", "back.vue"]]);

// src/components/baseball.vue

var _sfc_main15 = {
  name: "Baseball"
}, _hoisted_115 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_215 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M195.2 828.8a448 448 0 1 1 633.6-633.6 448 448 0 0 1-633.6 633.6zm45.248-45.248a384 384 0 1 0 543.104-543.104 384 384 0 0 0-543.104 543.104z"
}, null, -1), _hoisted_315 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M497.472 96.896c22.784 4.672 44.416 9.472 64.896 14.528a256.128 256.128 0 0 0 350.208 350.208c5.056 20.48 9.856 42.112 14.528 64.896A320.128 320.128 0 0 1 497.472 96.896zM108.48 491.904a320.128 320.128 0 0 1 423.616 423.68c-23.04-3.648-44.992-7.424-65.728-11.52a256.128 256.128 0 0 0-346.496-346.432 1736.64 1736.64 0 0 1-11.392-65.728z"
}, null, -1), _hoisted_45 = [
  _hoisted_215,
  _hoisted_315
];
function _sfc_render15(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_115, _hoisted_45);
}
var baseball_default = /* @__PURE__ */ export_helper_default(_sfc_main15, [["render", _sfc_render15], ["__file", "baseball.vue"]]);

// src/components/basketball.vue

var _sfc_main16 = {
  name: "Basketball"
}, _hoisted_116 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_216 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M778.752 788.224a382.464 382.464 0 0 0 116.032-245.632 256.512 256.512 0 0 0-241.728-13.952 762.88 762.88 0 0 1 125.696 259.584zm-55.04 44.224a699.648 699.648 0 0 0-125.056-269.632 256.128 256.128 0 0 0-56.064 331.968 382.72 382.72 0 0 0 181.12-62.336zm-254.08 61.248A320.128 320.128 0 0 1 557.76 513.6a715.84 715.84 0 0 0-48.192-48.128 320.128 320.128 0 0 1-379.264 88.384 382.4 382.4 0 0 0 110.144 229.696 382.4 382.4 0 0 0 229.184 110.08zM129.28 481.088a256.128 256.128 0 0 0 331.072-56.448 699.648 699.648 0 0 0-268.8-124.352 382.656 382.656 0 0 0-62.272 180.8zm106.56-235.84a762.88 762.88 0 0 1 258.688 125.056 256.512 256.512 0 0 0-13.44-241.088A382.464 382.464 0 0 0 235.84 245.248zm318.08-114.944c40.576 89.536 37.76 193.92-8.448 281.344a779.84 779.84 0 0 1 66.176 66.112 320.832 320.832 0 0 1 282.112-8.128 382.4 382.4 0 0 0-110.144-229.12 382.4 382.4 0 0 0-229.632-110.208zM828.8 828.8a448 448 0 1 1-633.6-633.6 448 448 0 0 1 633.6 633.6z"
}, null, -1), _hoisted_316 = [
  _hoisted_216
];
function _sfc_render16(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_116, _hoisted_316);
}
var basketball_default = /* @__PURE__ */ export_helper_default(_sfc_main16, [["render", _sfc_render16], ["__file", "basketball.vue"]]);

// src/components/bell-filled.vue

var _sfc_main17 = {
  name: "BellFilled"
}, _hoisted_117 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_217 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 832a128 128 0 0 1-256 0h256zm192-64H134.4a38.4 38.4 0 0 1 0-76.8H192V448c0-154.88 110.08-284.16 256.32-313.6a64 64 0 1 1 127.36 0A320.128 320.128 0 0 1 832 448v243.2h57.6a38.4 38.4 0 0 1 0 76.8H832z"
}, null, -1), _hoisted_317 = [
  _hoisted_217
];
function _sfc_render17(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_117, _hoisted_317);
}
var bell_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main17, [["render", _sfc_render17], ["__file", "bell-filled.vue"]]);

// src/components/bell.vue

var _sfc_main18 = {
  name: "Bell"
}, _hoisted_118 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_218 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), _hoisted_318 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), _hoisted_46 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1), _hoisted_52 = [
  _hoisted_218,
  _hoisted_318,
  _hoisted_46
];
function _sfc_render18(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_118, _hoisted_52);
}
var bell_default = /* @__PURE__ */ export_helper_default(_sfc_main18, [["render", _sfc_render18], ["__file", "bell.vue"]]);

// src/components/bicycle.vue

var _sfc_main19 = {
  name: "Bicycle"
}, _hoisted_119 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_219 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)('<path fill="currentColor" d="M256 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M288 672h320q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"></path><path fill="currentColor" d="M768 832a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"></path><path fill="currentColor" d="M480 192a32 32 0 0 1 0-64h160a32 32 0 0 1 31.04 24.256l96 384a32 32 0 0 1-62.08 15.488L615.04 192H480zM96 384a32 32 0 0 1 0-64h128a32 32 0 0 1 30.336 21.888l64 192a32 32 0 1 1-60.672 20.224L200.96 384H96z"></path><path fill="currentColor" d="m373.376 599.808-42.752-47.616 320-288 42.752 47.616z"></path>', 5), _hoisted_7 = [
  _hoisted_219
];
function _sfc_render19(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_119, _hoisted_7);
}
var bicycle_default = /* @__PURE__ */ export_helper_default(_sfc_main19, [["render", _sfc_render19], ["__file", "bicycle.vue"]]);

// src/components/bottom-left.vue

var _sfc_main20 = {
  name: "BottomLeft"
}, _hoisted_120 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_220 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 768h416a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V352a32 32 0 0 1 64 0v416z"
}, null, -1), _hoisted_319 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M246.656 822.656a32 32 0 0 1-45.312-45.312l544-544a32 32 0 0 1 45.312 45.312l-544 544z"
}, null, -1), _hoisted_47 = [
  _hoisted_220,
  _hoisted_319
];
function _sfc_render20(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_120, _hoisted_47);
}
var bottom_left_default = /* @__PURE__ */ export_helper_default(_sfc_main20, [["render", _sfc_render20], ["__file", "bottom-left.vue"]]);

// src/components/bottom-right.vue

var _sfc_main21 = {
  name: "BottomRight"
}, _hoisted_121 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_221 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 768a32 32 0 1 0 0 64h448a32 32 0 0 0 32-32V352a32 32 0 0 0-64 0v416H352z"
}, null, -1), _hoisted_320 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M777.344 822.656a32 32 0 0 0 45.312-45.312l-544-544a32 32 0 0 0-45.312 45.312l544 544z"
}, null, -1), _hoisted_48 = [
  _hoisted_221,
  _hoisted_320
];
function _sfc_render21(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_121, _hoisted_48);
}
var bottom_right_default = /* @__PURE__ */ export_helper_default(_sfc_main21, [["render", _sfc_render21], ["__file", "bottom-right.vue"]]);

// src/components/bottom.vue

var _sfc_main22 = {
  name: "Bottom"
}, _hoisted_122 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_222 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 805.888V168a32 32 0 1 0-64 0v637.888L246.656 557.952a30.72 30.72 0 0 0-45.312 0 35.52 35.52 0 0 0 0 48.064l288 306.048a30.72 30.72 0 0 0 45.312 0l288-306.048a35.52 35.52 0 0 0 0-48 30.72 30.72 0 0 0-45.312 0L544 805.824z"
}, null, -1), _hoisted_321 = [
  _hoisted_222
];
function _sfc_render22(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_122, _hoisted_321);
}
var bottom_default = /* @__PURE__ */ export_helper_default(_sfc_main22, [["render", _sfc_render22], ["__file", "bottom.vue"]]);

// src/components/bowl.vue

var _sfc_main23 = {
  name: "Bowl"
}, _hoisted_123 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_223 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M714.432 704a351.744 351.744 0 0 0 148.16-256H161.408a351.744 351.744 0 0 0 148.16 256h404.864zM288 766.592A415.68 415.68 0 0 1 96 416a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32 415.68 415.68 0 0 1-192 350.592V832a64 64 0 0 1-64 64H352a64 64 0 0 1-64-64v-65.408zM493.248 320h-90.496l254.4-254.4a32 32 0 1 1 45.248 45.248L493.248 320zm187.328 0h-128l269.696-155.712a32 32 0 0 1 32 55.424L680.576 320zM352 768v64h320v-64H352z"
}, null, -1), _hoisted_322 = [
  _hoisted_223
];
function _sfc_render23(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_123, _hoisted_322);
}
var bowl_default = /* @__PURE__ */ export_helper_default(_sfc_main23, [["render", _sfc_render23], ["__file", "bowl.vue"]]);

// src/components/box.vue

var _sfc_main24 = {
  name: "Box"
}, _hoisted_124 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_224 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"
}, null, -1), _hoisted_323 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64z"
}, null, -1), _hoisted_49 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"
}, null, -1), _hoisted_53 = [
  _hoisted_224,
  _hoisted_323,
  _hoisted_49
];
function _sfc_render24(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_124, _hoisted_53);
}
var box_default = /* @__PURE__ */ export_helper_default(_sfc_main24, [["render", _sfc_render24], ["__file", "box.vue"]]);

// src/components/briefcase.vue

var _sfc_main25 = {
  name: "Briefcase"
}, _hoisted_125 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_225 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M320 320V128h384v192h192v192H128V320h192zM128 576h768v320H128V576zm256-256h256.064V192H384v128z"
}, null, -1), _hoisted_324 = [
  _hoisted_225
];
function _sfc_render25(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_125, _hoisted_324);
}
var briefcase_default = /* @__PURE__ */ export_helper_default(_sfc_main25, [["render", _sfc_render25], ["__file", "briefcase.vue"]]);

// src/components/brush-filled.vue

var _sfc_main26 = {
  name: "BrushFilled"
}, _hoisted_126 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_226 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M608 704v160a96 96 0 0 1-192 0V704h-96a128 128 0 0 1-128-128h640a128 128 0 0 1-128 128h-96zM192 512V128.064h640V512H192z"
}, null, -1), _hoisted_325 = [
  _hoisted_226
];
function _sfc_render26(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_126, _hoisted_325);
}
var brush_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main26, [["render", _sfc_render26], ["__file", "brush-filled.vue"]]);

// src/components/brush.vue

var _sfc_main27 = {
  name: "Brush"
}, _hoisted_127 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_227 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M896 448H128v192a64 64 0 0 0 64 64h192v192h256V704h192a64 64 0 0 0 64-64V448zm-770.752-64c0-47.552 5.248-90.24 15.552-128 14.72-54.016 42.496-107.392 83.2-160h417.28l-15.36 70.336L736 96h211.2c-24.832 42.88-41.92 96.256-51.2 160a663.872 663.872 0 0 0-6.144 128H960v256a128 128 0 0 1-128 128H704v160a32 32 0 0 1-32 32H352a32 32 0 0 1-32-32V768H192A128 128 0 0 1 64 640V384h61.248zm64 0h636.544c-2.048-45.824.256-91.584 6.848-137.216 4.48-30.848 10.688-59.776 18.688-86.784h-96.64l-221.12 141.248L561.92 160H256.512c-25.856 37.888-43.776 75.456-53.952 112.832-8.768 32.064-13.248 69.12-13.312 111.168z"
}, null, -1), _hoisted_326 = [
  _hoisted_227
];
function _sfc_render27(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_127, _hoisted_326);
}
var brush_default = /* @__PURE__ */ export_helper_default(_sfc_main27, [["render", _sfc_render27], ["__file", "brush.vue"]]);

// src/components/burger.vue

var _sfc_main28 = {
  name: "Burger"
}, _hoisted_128 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_228 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 512a32 32 0 0 0-32 32v64a32 32 0 0 0 30.08 32H864a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H160zm736-58.56A96 96 0 0 1 960 544v64a96 96 0 0 1-51.968 85.312L855.36 833.6a96 96 0 0 1-89.856 62.272H258.496A96 96 0 0 1 168.64 833.6l-52.608-140.224A96 96 0 0 1 64 608v-64a96 96 0 0 1 64-90.56V448a384 384 0 1 1 768 5.44zM832 448a320 320 0 0 0-640 0h640zM512 704H188.352l40.192 107.136a32 32 0 0 0 29.952 20.736h507.008a32 32 0 0 0 29.952-20.736L835.648 704H512z"
}, null, -1), _hoisted_327 = [
  _hoisted_228
];
function _sfc_render28(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_128, _hoisted_327);
}
var burger_default = /* @__PURE__ */ export_helper_default(_sfc_main28, [["render", _sfc_render28], ["__file", "burger.vue"]]);

// src/components/calendar.vue

var _sfc_main29 = {
  name: "Calendar"
}, _hoisted_129 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_229 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), _hoisted_328 = [
  _hoisted_229
];
function _sfc_render29(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_129, _hoisted_328);
}
var calendar_default = /* @__PURE__ */ export_helper_default(_sfc_main29, [["render", _sfc_render29], ["__file", "calendar.vue"]]);

// src/components/camera-filled.vue

var _sfc_main30 = {
  name: "CameraFilled"
}, _hoisted_130 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_230 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 224a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V288a64 64 0 0 0-64-64H748.416l-46.464-92.672A64 64 0 0 0 644.736 96H379.328a64 64 0 0 0-57.216 35.392L275.776 224H160zm352 435.2a115.2 115.2 0 1 0 0-230.4 115.2 115.2 0 0 0 0 230.4zm0 140.8a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), _hoisted_329 = [
  _hoisted_230
];
function _sfc_render30(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_130, _hoisted_329);
}
var camera_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main30, [["render", _sfc_render30], ["__file", "camera-filled.vue"]]);

// src/components/camera.vue

var _sfc_main31 = {
  name: "Camera"
}, _hoisted_131 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_231 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M896 256H128v576h768V256zm-199.424-64-32.064-64h-304.96l-32 64h369.024zM96 192h160l46.336-92.608A64 64 0 0 1 359.552 64h304.96a64 64 0 0 1 57.216 35.328L768.192 192H928a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32zm416 512a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm0 64a224 224 0 1 1 0-448 224 224 0 0 1 0 448z"
}, null, -1), _hoisted_330 = [
  _hoisted_231
];
function _sfc_render31(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_131, _hoisted_330);
}
var camera_default = /* @__PURE__ */ export_helper_default(_sfc_main31, [["render", _sfc_render31], ["__file", "camera.vue"]]);

// src/components/caret-bottom.vue

var _sfc_main32 = {
  name: "CaretBottom"
}, _hoisted_132 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_232 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m192 384 320 384 320-384z"
}, null, -1), _hoisted_331 = [
  _hoisted_232
];
function _sfc_render32(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_132, _hoisted_331);
}
var caret_bottom_default = /* @__PURE__ */ export_helper_default(_sfc_main32, [["render", _sfc_render32], ["__file", "caret-bottom.vue"]]);

// src/components/caret-left.vue

var _sfc_main33 = {
  name: "CaretLeft"
}, _hoisted_133 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_233 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M672 192 288 511.936 672 832z"
}, null, -1), _hoisted_332 = [
  _hoisted_233
];
function _sfc_render33(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_133, _hoisted_332);
}
var caret_left_default = /* @__PURE__ */ export_helper_default(_sfc_main33, [["render", _sfc_render33], ["__file", "caret-left.vue"]]);

// src/components/caret-right.vue

var _sfc_main34 = {
  name: "CaretRight"
}, _hoisted_134 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_234 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 192v640l384-320.064z"
}, null, -1), _hoisted_333 = [
  _hoisted_234
];
function _sfc_render34(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_134, _hoisted_333);
}
var caret_right_default = /* @__PURE__ */ export_helper_default(_sfc_main34, [["render", _sfc_render34], ["__file", "caret-right.vue"]]);

// src/components/caret-top.vue

var _sfc_main35 = {
  name: "CaretTop"
}, _hoisted_135 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_235 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 320 192 704h639.936z"
}, null, -1), _hoisted_334 = [
  _hoisted_235
];
function _sfc_render35(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_135, _hoisted_334);
}
var caret_top_default = /* @__PURE__ */ export_helper_default(_sfc_main35, [["render", _sfc_render35], ["__file", "caret-top.vue"]]);

// src/components/cellphone.vue

var _sfc_main36 = {
  name: "Cellphone"
}, _hoisted_136 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_236 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H256zm0-64h512a128 128 0 0 1 128 128v640a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V192A128 128 0 0 1 256 64zm128 128h256a32 32 0 1 1 0 64H384a32 32 0 0 1 0-64zm128 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), _hoisted_335 = [
  _hoisted_236
];
function _sfc_render36(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_136, _hoisted_335);
}
var cellphone_default = /* @__PURE__ */ export_helper_default(_sfc_main36, [["render", _sfc_render36], ["__file", "cellphone.vue"]]);

// src/components/chat-dot-round.vue

var _sfc_main37 = {
  name: "ChatDotRound"
}, _hoisted_137 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_237 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), _hoisted_336 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 563.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), _hoisted_410 = [
  _hoisted_237,
  _hoisted_336
];
function _sfc_render37(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_137, _hoisted_410);
}
var chat_dot_round_default = /* @__PURE__ */ export_helper_default(_sfc_main37, [["render", _sfc_render37], ["__file", "chat-dot-round.vue"]]);

// src/components/chat-dot-square.vue

var _sfc_main38 = {
  name: "ChatDotSquare"
}, _hoisted_138 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_238 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), _hoisted_337 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
}, null, -1), _hoisted_411 = [
  _hoisted_238,
  _hoisted_337
];
function _sfc_render38(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_138, _hoisted_411);
}
var chat_dot_square_default = /* @__PURE__ */ export_helper_default(_sfc_main38, [["render", _sfc_render38], ["__file", "chat-dot-square.vue"]]);

// src/components/chat-line-round.vue

var _sfc_main39 = {
  name: "ChatLineRound"
}, _hoisted_139 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_239 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"
}, null, -1), _hoisted_338 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), _hoisted_412 = [
  _hoisted_239,
  _hoisted_338
];
function _sfc_render39(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_139, _hoisted_412);
}
var chat_line_round_default = /* @__PURE__ */ export_helper_default(_sfc_main39, [["render", _sfc_render39], ["__file", "chat-line-round.vue"]]);

// src/components/chat-line-square.vue

var _sfc_main40 = {
  name: "ChatLineSquare"
}, _hoisted_140 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_240 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 826.88 273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), _hoisted_339 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 512h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm0-192h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), _hoisted_413 = [
  _hoisted_240,
  _hoisted_339
];
function _sfc_render40(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_140, _hoisted_413);
}
var chat_line_square_default = /* @__PURE__ */ export_helper_default(_sfc_main40, [["render", _sfc_render40], ["__file", "chat-line-square.vue"]]);

// src/components/chat-round.vue

var _sfc_main41 = {
  name: "ChatRound"
}, _hoisted_141 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_241 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m174.72 855.68 130.048-43.392 23.424 11.392C382.4 849.984 444.352 864 512 864c223.744 0 384-159.872 384-352 0-192.832-159.104-352-384-352S128 319.168 128 512a341.12 341.12 0 0 0 69.248 204.288l21.632 28.8-44.16 110.528zm-45.248 82.56A32 32 0 0 1 89.6 896l56.512-141.248A405.12 405.12 0 0 1 64 512C64 299.904 235.648 96 512 96s448 203.904 448 416-173.44 416-448 416c-79.68 0-150.848-17.152-211.712-46.72l-170.88 56.96z"
}, null, -1), _hoisted_340 = [
  _hoisted_241
];
function _sfc_render41(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_141, _hoisted_340);
}
var chat_round_default = /* @__PURE__ */ export_helper_default(_sfc_main41, [["render", _sfc_render41], ["__file", "chat-round.vue"]]);

// src/components/chat-square.vue

var _sfc_main42 = {
  name: "ChatSquare"
}, _hoisted_142 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_242 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88L273.536 736zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128H296z"
}, null, -1), _hoisted_341 = [
  _hoisted_242
];
function _sfc_render42(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_142, _hoisted_341);
}
var chat_square_default = /* @__PURE__ */ export_helper_default(_sfc_main42, [["render", _sfc_render42], ["__file", "chat-square.vue"]]);

// src/components/check.vue

var _sfc_main43 = {
  name: "Check"
}, _hoisted_143 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_243 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
}, null, -1), _hoisted_342 = [
  _hoisted_243
];
function _sfc_render43(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_143, _hoisted_342);
}
var check_default = /* @__PURE__ */ export_helper_default(_sfc_main43, [["render", _sfc_render43], ["__file", "check.vue"]]);

// src/components/checked.vue

var _sfc_main44 = {
  name: "Checked"
}, _hoisted_144 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_244 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160.064v64H704v-64zM311.616 537.28l-45.312 45.248L447.36 763.52l316.8-316.8-45.312-45.184L447.36 673.024 311.616 537.28zM384 192V96h256v96H384z"
}, null, -1), _hoisted_343 = [
  _hoisted_244
];
function _sfc_render44(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_144, _hoisted_343);
}
var checked_default = /* @__PURE__ */ export_helper_default(_sfc_main44, [["render", _sfc_render44], ["__file", "checked.vue"]]);

// src/components/cherry.vue

var _sfc_main45 = {
  name: "Cherry"
}, _hoisted_145 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_245 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M261.056 449.6c13.824-69.696 34.88-128.96 63.36-177.728 23.744-40.832 61.12-88.64 112.256-143.872H320a32 32 0 0 1 0-64h384a32 32 0 1 1 0 64H554.752c14.912 39.168 41.344 86.592 79.552 141.76 47.36 68.48 84.8 106.752 106.304 114.304a224 224 0 1 1-84.992 14.784c-22.656-22.912-47.04-53.76-73.92-92.608-38.848-56.128-67.008-105.792-84.352-149.312-55.296 58.24-94.528 107.52-117.76 147.2-23.168 39.744-41.088 88.768-53.568 147.072a224.064 224.064 0 1 1-64.96-1.6zM288 832a160 160 0 1 0 0-320 160 160 0 0 0 0 320zm448-64a160 160 0 1 0 0-320 160 160 0 0 0 0 320z"
}, null, -1), _hoisted_344 = [
  _hoisted_245
];
function _sfc_render45(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_145, _hoisted_344);
}
var cherry_default = /* @__PURE__ */ export_helper_default(_sfc_main45, [["render", _sfc_render45], ["__file", "cherry.vue"]]);

// src/components/chicken.vue

var _sfc_main46 = {
  name: "Chicken"
}, _hoisted_146 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_246 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M349.952 716.992 478.72 588.16a106.688 106.688 0 0 1-26.176-19.072 106.688 106.688 0 0 1-19.072-26.176L304.704 671.744c.768 3.072 1.472 6.144 2.048 9.216l2.048 31.936 31.872 1.984c3.136.64 6.208 1.28 9.28 2.112zm57.344 33.152a128 128 0 1 1-216.32 114.432l-1.92-32-32-1.92a128 128 0 1 1 114.432-216.32L416.64 469.248c-2.432-101.44 58.112-239.104 149.056-330.048 107.328-107.328 231.296-85.504 316.8 0 85.44 85.44 107.328 209.408 0 316.8-91.008 90.88-228.672 151.424-330.112 149.056L407.296 750.08zm90.496-226.304c49.536 49.536 233.344-7.04 339.392-113.088 78.208-78.208 63.232-163.072 0-226.304-63.168-63.232-148.032-78.208-226.24 0C504.896 290.496 448.32 474.368 497.792 523.84zM244.864 708.928a64 64 0 1 0-59.84 59.84l56.32-3.52 3.52-56.32zm8.064 127.68a64 64 0 1 0 59.84-59.84l-56.32 3.52-3.52 56.32z"
}, null, -1), _hoisted_345 = [
  _hoisted_246
];
function _sfc_render46(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_146, _hoisted_345);
}
var chicken_default = /* @__PURE__ */ export_helper_default(_sfc_main46, [["render", _sfc_render46], ["__file", "chicken.vue"]]);

// src/components/circle-check-filled.vue

var _sfc_main47 = {
  name: "CircleCheckFilled"
}, _hoisted_147 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_247 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), _hoisted_346 = [
  _hoisted_247
];
function _sfc_render47(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_147, _hoisted_346);
}
var circle_check_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main47, [["render", _sfc_render47], ["__file", "circle-check-filled.vue"]]);

// src/components/circle-check.vue

var _sfc_main48 = {
  name: "CircleCheck"
}, _hoisted_148 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_248 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_347 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), _hoisted_414 = [
  _hoisted_248,
  _hoisted_347
];
function _sfc_render48(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_148, _hoisted_414);
}
var circle_check_default = /* @__PURE__ */ export_helper_default(_sfc_main48, [["render", _sfc_render48], ["__file", "circle-check.vue"]]);

// src/components/circle-close-filled.vue

var _sfc_main49 = {
  name: "CircleCloseFilled"
}, _hoisted_149 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_249 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
}, null, -1), _hoisted_348 = [
  _hoisted_249
];
function _sfc_render49(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_149, _hoisted_348);
}
var circle_close_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main49, [["render", _sfc_render49], ["__file", "circle-close-filled.vue"]]);

// src/components/circle-close.vue

var _sfc_main50 = {
  name: "CircleClose"
}, _hoisted_150 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_250 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), _hoisted_349 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_415 = [
  _hoisted_250,
  _hoisted_349
];
function _sfc_render50(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_150, _hoisted_415);
}
var circle_close_default = /* @__PURE__ */ export_helper_default(_sfc_main50, [["render", _sfc_render50], ["__file", "circle-close.vue"]]);

// src/components/circle-plus-filled.vue

var _sfc_main51 = {
  name: "CirclePlusFilled"
}, _hoisted_151 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_251 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-38.4 409.6H326.4a38.4 38.4 0 1 0 0 76.8h147.2v147.2a38.4 38.4 0 0 0 76.8 0V550.4h147.2a38.4 38.4 0 0 0 0-76.8H550.4V326.4a38.4 38.4 0 1 0-76.8 0v147.2z"
}, null, -1), _hoisted_350 = [
  _hoisted_251
];
function _sfc_render51(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_151, _hoisted_350);
}
var circle_plus_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main51, [["render", _sfc_render51], ["__file", "circle-plus-filled.vue"]]);

// src/components/circle-plus.vue

var _sfc_main52 = {
  name: "CirclePlus"
}, _hoisted_152 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_252 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), _hoisted_351 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
}, null, -1), _hoisted_416 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_54 = [
  _hoisted_252,
  _hoisted_351,
  _hoisted_416
];
function _sfc_render52(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_152, _hoisted_54);
}
var circle_plus_default = /* @__PURE__ */ export_helper_default(_sfc_main52, [["render", _sfc_render52], ["__file", "circle-plus.vue"]]);

// src/components/clock.vue

var _sfc_main53 = {
  name: "Clock"
}, _hoisted_153 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_253 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_352 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_417 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1), _hoisted_55 = [
  _hoisted_253,
  _hoisted_352,
  _hoisted_417
];
function _sfc_render53(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_153, _hoisted_55);
}
var clock_default = /* @__PURE__ */ export_helper_default(_sfc_main53, [["render", _sfc_render53], ["__file", "clock.vue"]]);

// src/components/close-bold.vue

var _sfc_main54 = {
  name: "CloseBold"
}, _hoisted_154 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_254 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
}, null, -1), _hoisted_353 = [
  _hoisted_254
];
function _sfc_render54(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_154, _hoisted_353);
}
var close_bold_default = /* @__PURE__ */ export_helper_default(_sfc_main54, [["render", _sfc_render54], ["__file", "close-bold.vue"]]);

// src/components/close.vue

var _sfc_main55 = {
  name: "Close"
}, _hoisted_155 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_255 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
}, null, -1), _hoisted_354 = [
  _hoisted_255
];
function _sfc_render55(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_155, _hoisted_354);
}
var close_default = /* @__PURE__ */ export_helper_default(_sfc_main55, [["render", _sfc_render55], ["__file", "close.vue"]]);

// src/components/cloudy.vue

var _sfc_main56 = {
  name: "Cloudy"
}, _hoisted_156 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_256 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M598.4 831.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 831.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 381.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), _hoisted_355 = [
  _hoisted_256
];
function _sfc_render56(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_156, _hoisted_355);
}
var cloudy_default = /* @__PURE__ */ export_helper_default(_sfc_main56, [["render", _sfc_render56], ["__file", "cloudy.vue"]]);

// src/components/coffee-cup.vue

var _sfc_main57 = {
  name: "CoffeeCup"
}, _hoisted_157 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_257 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M768 192a192 192 0 1 1-8 383.808A256.128 256.128 0 0 1 512 768H320A256 256 0 0 1 64 512V160a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v32zm0 64v256a128 128 0 1 0 0-256zM96 832h640a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-640v320a192 192 0 0 0 192 192h192a192 192 0 0 0 192-192V192H128z"
}, null, -1), _hoisted_356 = [
  _hoisted_257
];
function _sfc_render57(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_157, _hoisted_356);
}
var coffee_cup_default = /* @__PURE__ */ export_helper_default(_sfc_main57, [["render", _sfc_render57], ["__file", "coffee-cup.vue"]]);

// src/components/coffee.vue

var _sfc_main58 = {
  name: "Coffee"
}, _hoisted_158 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_258 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M822.592 192h14.272a32 32 0 0 1 31.616 26.752l21.312 128A32 32 0 0 1 858.24 384h-49.344l-39.04 546.304A32 32 0 0 1 737.92 960H285.824a32 32 0 0 1-32-29.696L214.912 384H165.76a32 32 0 0 1-31.552-37.248l21.312-128A32 32 0 0 1 187.136 192h14.016l-6.72-93.696A32 32 0 0 1 226.368 64h571.008a32 32 0 0 1 31.936 34.304L822.592 192zm-64.128 0 4.544-64H260.736l4.544 64h493.184zm-548.16 128H820.48l-10.688-64H214.208l-10.688 64h6.784zm68.736 64 36.544 512H708.16l36.544-512H279.04z"
}, null, -1), _hoisted_357 = [
  _hoisted_258
];
function _sfc_render58(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_158, _hoisted_357);
}
var coffee_default = /* @__PURE__ */ export_helper_default(_sfc_main58, [["render", _sfc_render58], ["__file", "coffee.vue"]]);

// src/components/coin.vue

var _sfc_main59 = {
  name: "Coin"
}, _hoisted_159 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_259 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m161.92 580.736 29.888 58.88C171.328 659.776 160 681.728 160 704c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 615.808 928 657.664 928 704c0 129.728-188.544 224-416 224S96 833.728 96 704c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), _hoisted_358 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m161.92 388.736 29.888 58.88C171.328 467.84 160 489.792 160 512c0 82.304 155.328 160 352 160s352-77.696 352-160c0-22.272-11.392-44.16-31.808-64.32l30.464-58.432C903.936 423.808 928 465.664 928 512c0 129.728-188.544 224-416 224S96 641.728 96 512c0-46.592 24.32-88.576 65.92-123.264z"
}, null, -1), _hoisted_418 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 544c-227.456 0-416-94.272-416-224S284.544 96 512 96s416 94.272 416 224-188.544 224-416 224zm0-64c196.672 0 352-77.696 352-160S708.672 160 512 160s-352 77.696-352 160 155.328 160 352 160z"
}, null, -1), _hoisted_56 = [
  _hoisted_259,
  _hoisted_358,
  _hoisted_418
];
function _sfc_render59(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_159, _hoisted_56);
}
var coin_default = /* @__PURE__ */ export_helper_default(_sfc_main59, [["render", _sfc_render59], ["__file", "coin.vue"]]);

// src/components/cold-drink.vue

var _sfc_main60 = {
  name: "ColdDrink"
}, _hoisted_160 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_260 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
}, null, -1), _hoisted_359 = [
  _hoisted_260
];
function _sfc_render60(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_160, _hoisted_359);
}
var cold_drink_default = /* @__PURE__ */ export_helper_default(_sfc_main60, [["render", _sfc_render60], ["__file", "cold-drink.vue"]]);

// src/components/collection-tag.vue

var _sfc_main61 = {
  name: "CollectionTag"
}, _hoisted_161 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_261 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128H256zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_360 = [
  _hoisted_261
];
function _sfc_render61(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_161, _hoisted_360);
}
var collection_tag_default = /* @__PURE__ */ export_helper_default(_sfc_main61, [["render", _sfc_render61], ["__file", "collection-tag.vue"]]);

// src/components/collection.vue

var _sfc_main62 = {
  name: "Collection"
}, _hoisted_162 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_262 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 736h640V128H256a64 64 0 0 0-64 64v544zm64-672h608a32 32 0 0 1 32 32v672a32 32 0 0 1-32 32H160l-32 57.536V192A128 128 0 0 1 256 64z"
}, null, -1), _hoisted_361 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M240 800a48 48 0 1 0 0 96h592v-96H240zm0-64h656v160a64 64 0 0 1-64 64H240a112 112 0 0 1 0-224zm144-608v250.88l96-76.8 96 76.8V128H384zm-64-64h320v381.44a32 32 0 0 1-51.968 24.96L480 384l-108.032 86.4A32 32 0 0 1 320 445.44V64z"
}, null, -1), _hoisted_419 = [
  _hoisted_262,
  _hoisted_361
];
function _sfc_render62(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_162, _hoisted_419);
}
var collection_default = /* @__PURE__ */ export_helper_default(_sfc_main62, [["render", _sfc_render62], ["__file", "collection.vue"]]);

// src/components/comment.vue

var _sfc_main63 = {
  name: "Comment"
}, _hoisted_163 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_263 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M736 504a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zm-224 0a56 56 0 1 1 0-112 56 56 0 0 1 0 112zM128 128v640h192v160l224-160h352V128H128z"
}, null, -1), _hoisted_362 = [
  _hoisted_263
];
function _sfc_render63(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_163, _hoisted_362);
}
var comment_default = /* @__PURE__ */ export_helper_default(_sfc_main63, [["render", _sfc_render63], ["__file", "comment.vue"]]);

// src/components/compass.vue

var _sfc_main64 = {
  name: "Compass"
}, _hoisted_164 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_264 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_363 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M725.888 315.008C676.48 428.672 624 513.28 568.576 568.64c-55.424 55.424-139.968 107.904-253.568 157.312a12.8 12.8 0 0 1-16.896-16.832c49.536-113.728 102.016-198.272 157.312-253.632 55.36-55.296 139.904-107.776 253.632-157.312a12.8 12.8 0 0 1 16.832 16.832z"
}, null, -1), _hoisted_420 = [
  _hoisted_264,
  _hoisted_363
];
function _sfc_render64(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_164, _hoisted_420);
}
var compass_default = /* @__PURE__ */ export_helper_default(_sfc_main64, [["render", _sfc_render64], ["__file", "compass.vue"]]);

// src/components/connection.vue

var _sfc_main65 = {
  name: "Connection"
}, _hoisted_165 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_265 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 384v64H448a128 128 0 0 0-128 128v128a128 128 0 0 0 128 128h320a128 128 0 0 0 128-128V576a128 128 0 0 0-64-110.848V394.88c74.56 26.368 128 97.472 128 181.056v128a192 192 0 0 1-192 192H448a192 192 0 0 1-192-192V576a192 192 0 0 1 192-192h192z"
}, null, -1), _hoisted_364 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 640v-64h192a128 128 0 0 0 128-128V320a128 128 0 0 0-128-128H256a128 128 0 0 0-128 128v128a128 128 0 0 0 64 110.848v70.272A192.064 192.064 0 0 1 64 448V320a192 192 0 0 1 192-192h320a192 192 0 0 1 192 192v128a192 192 0 0 1-192 192H384z"
}, null, -1), _hoisted_421 = [
  _hoisted_265,
  _hoisted_364
];
function _sfc_render65(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_165, _hoisted_421);
}
var connection_default = /* @__PURE__ */ export_helper_default(_sfc_main65, [["render", _sfc_render65], ["__file", "connection.vue"]]);

// src/components/coordinate.vue

var _sfc_main66 = {
  name: "Coordinate"
}, _hoisted_166 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_266 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 512h64v320h-64z"
}, null, -1), _hoisted_365 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64zm64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128zm256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), _hoisted_422 = [
  _hoisted_266,
  _hoisted_365
];
function _sfc_render66(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_166, _hoisted_422);
}
var coordinate_default = /* @__PURE__ */ export_helper_default(_sfc_main66, [["render", _sfc_render66], ["__file", "coordinate.vue"]]);

// src/components/copy-document.vue

var _sfc_main67 = {
  name: "CopyDocument"
}, _hoisted_167 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_267 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M768 832a128 128 0 0 1-128 128H192A128 128 0 0 1 64 832V384a128 128 0 0 1 128-128v64a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64h64z"
}, null, -1), _hoisted_366 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 128a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H384zm0-64h448a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64z"
}, null, -1), _hoisted_423 = [
  _hoisted_267,
  _hoisted_366
];
function _sfc_render67(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_167, _hoisted_423);
}
var copy_document_default = /* @__PURE__ */ export_helper_default(_sfc_main67, [["render", _sfc_render67], ["__file", "copy-document.vue"]]);

// src/components/cpu.vue

var _sfc_main68 = {
  name: "Cpu"
}, _hoisted_168 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_268 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M320 256a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H320zm0-64h384a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H320a128 128 0 0 1-128-128V320a128 128 0 0 1 128-128z"
}, null, -1), _hoisted_367 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm-320 0a32 32 0 0 1 32 32v128h-64V96a32 32 0 0 1 32-32zm160 896a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm160 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zm-320 0a32 32 0 0 1-32-32V800h64v128a32 32 0 0 1-32 32zM64 512a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0-160a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm0 320a32 32 0 0 1 32-32h128v64H96a32 32 0 0 1-32-32zm896-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0-160a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32zm0 320a32 32 0 0 1-32 32H800v-64h128a32 32 0 0 1 32 32z"
}, null, -1), _hoisted_424 = [
  _hoisted_268,
  _hoisted_367
];
function _sfc_render68(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_168, _hoisted_424);
}
var cpu_default = /* @__PURE__ */ export_helper_default(_sfc_main68, [["render", _sfc_render68], ["__file", "cpu.vue"]]);

// src/components/credit-card.vue

var _sfc_main69 = {
  name: "CreditCard"
}, _hoisted_169 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_269 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M896 324.096c0-42.368-2.496-55.296-9.536-68.48a52.352 52.352 0 0 0-22.144-22.08c-13.12-7.04-26.048-9.536-68.416-9.536H228.096c-42.368 0-55.296 2.496-68.48 9.536a52.352 52.352 0 0 0-22.08 22.144c-7.04 13.12-9.536 26.048-9.536 68.416v375.808c0 42.368 2.496 55.296 9.536 68.48a52.352 52.352 0 0 0 22.144 22.08c13.12 7.04 26.048 9.536 68.416 9.536h567.808c42.368 0 55.296-2.496 68.48-9.536a52.352 52.352 0 0 0 22.08-22.144c7.04-13.12 9.536-26.048 9.536-68.416V324.096zm64 0v375.808c0 57.088-5.952 77.76-17.088 98.56-11.136 20.928-27.52 37.312-48.384 48.448-20.864 11.136-41.6 17.088-98.56 17.088H228.032c-57.088 0-77.76-5.952-98.56-17.088a116.288 116.288 0 0 1-48.448-48.384c-11.136-20.864-17.088-41.6-17.088-98.56V324.032c0-57.088 5.952-77.76 17.088-98.56 11.136-20.928 27.52-37.312 48.384-48.448 20.864-11.136 41.6-17.088 98.56-17.088H795.84c57.088 0 77.76 5.952 98.56 17.088 20.928 11.136 37.312 27.52 48.448 48.384 11.136 20.864 17.088 41.6 17.088 98.56z"
}, null, -1), _hoisted_368 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M64 320h896v64H64v-64zm0 128h896v64H64v-64zm128 192h256v64H192z"
}, null, -1), _hoisted_425 = [
  _hoisted_269,
  _hoisted_368
];
function _sfc_render69(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_169, _hoisted_425);
}
var credit_card_default = /* @__PURE__ */ export_helper_default(_sfc_main69, [["render", _sfc_render69], ["__file", "credit-card.vue"]]);

// src/components/crop.vue

var _sfc_main70 = {
  name: "Crop"
}, _hoisted_170 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_270 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 768h672a32 32 0 1 1 0 64H224a32 32 0 0 1-32-32V96a32 32 0 0 1 64 0v672z"
}, null, -1), _hoisted_369 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M832 224v704a32 32 0 1 1-64 0V256H96a32 32 0 0 1 0-64h704a32 32 0 0 1 32 32z"
}, null, -1), _hoisted_426 = [
  _hoisted_270,
  _hoisted_369
];
function _sfc_render70(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_170, _hoisted_426);
}
var crop_default = /* @__PURE__ */ export_helper_default(_sfc_main70, [["render", _sfc_render70], ["__file", "crop.vue"]]);

// src/components/d-arrow-left.vue

var _sfc_main71 = {
  name: "DArrowLeft"
}, _hoisted_171 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_271 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), _hoisted_370 = [
  _hoisted_271
];
function _sfc_render71(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_171, _hoisted_370);
}
var d_arrow_left_default = /* @__PURE__ */ export_helper_default(_sfc_main71, [["render", _sfc_render71], ["__file", "d-arrow-left.vue"]]);

// src/components/d-arrow-right.vue

var _sfc_main72 = {
  name: "DArrowRight"
}, _hoisted_172 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_272 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), _hoisted_371 = [
  _hoisted_272
];
function _sfc_render72(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_172, _hoisted_371);
}
var d_arrow_right_default = /* @__PURE__ */ export_helper_default(_sfc_main72, [["render", _sfc_render72], ["__file", "d-arrow-right.vue"]]);

// src/components/d-caret.vue

var _sfc_main73 = {
  name: "DCaret"
}, _hoisted_173 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_273 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m512 128 288 320H224l288-320zM224 576h576L512 896 224 576z"
}, null, -1), _hoisted_372 = [
  _hoisted_273
];
function _sfc_render73(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_173, _hoisted_372);
}
var d_caret_default = /* @__PURE__ */ export_helper_default(_sfc_main73, [["render", _sfc_render73], ["__file", "d-caret.vue"]]);

// src/components/data-analysis.vue

var _sfc_main74 = {
  name: "DataAnalysis"
}, _hoisted_174 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_274 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m665.216 768 110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216zM832 192H192v512h640V192zM352 448a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0v-64a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v128a32 32 0 0 1-64 0V416a32 32 0 0 1 32-32zm160-64a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V352a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_373 = [
  _hoisted_274
];
function _sfc_render74(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_174, _hoisted_373);
}
var data_analysis_default = /* @__PURE__ */ export_helper_default(_sfc_main74, [["render", _sfc_render74], ["__file", "data-analysis.vue"]]);

// src/components/data-board.vue

var _sfc_main75 = {
  name: "DataBoard"
}, _hoisted_175 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_275 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M32 128h960v64H32z"
}, null, -1), _hoisted_374 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 192v512h640V192H192zm-64-64h768v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V128z"
}, null, -1), _hoisted_427 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M322.176 960H248.32l144.64-250.56 55.424 32L322.176 960zm453.888 0h-73.856L576 741.44l55.424-32L776.064 960z"
}, null, -1), _hoisted_57 = [
  _hoisted_275,
  _hoisted_374,
  _hoisted_427
];
function _sfc_render75(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_175, _hoisted_57);
}
var data_board_default = /* @__PURE__ */ export_helper_default(_sfc_main75, [["render", _sfc_render75], ["__file", "data-board.vue"]]);

// src/components/data-line.vue

var _sfc_main76 = {
  name: "DataLine"
}, _hoisted_176 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_276 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M359.168 768H160a32 32 0 0 1-32-32V192H64a32 32 0 0 1 0-64h896a32 32 0 1 1 0 64h-64v544a32 32 0 0 1-32 32H665.216l110.848 192h-73.856L591.36 768H433.024L322.176 960H248.32l110.848-192zM832 192H192v512h640V192zM342.656 534.656a32 32 0 1 1-45.312-45.312L444.992 341.76l125.44 94.08L679.04 300.032a32 32 0 1 1 49.92 39.936L581.632 524.224 451.008 426.24 342.656 534.592z"
}, null, -1), _hoisted_375 = [
  _hoisted_276
];
function _sfc_render76(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_176, _hoisted_375);
}
var data_line_default = /* @__PURE__ */ export_helper_default(_sfc_main76, [["render", _sfc_render76], ["__file", "data-line.vue"]]);

// src/components/delete-filled.vue

var _sfc_main77 = {
  name: "DeleteFilled"
}, _hoisted_177 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_277 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
}, null, -1), _hoisted_376 = [
  _hoisted_277
];
function _sfc_render77(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_177, _hoisted_376);
}
var delete_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main77, [["render", _sfc_render77], ["__file", "delete-filled.vue"]]);

// src/components/delete-location.vue

var _sfc_main78 = {
  name: "DeleteLocation"
}, _hoisted_178 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_278 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), _hoisted_377 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), _hoisted_428 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 384h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32z"
}, null, -1), _hoisted_58 = [
  _hoisted_278,
  _hoisted_377,
  _hoisted_428
];
function _sfc_render78(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_178, _hoisted_58);
}
var delete_location_default = /* @__PURE__ */ export_helper_default(_sfc_main78, [["render", _sfc_render78], ["__file", "delete-location.vue"]]);

// src/components/delete.vue

var _sfc_main79 = {
  name: "Delete"
}, _hoisted_179 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_279 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1), _hoisted_378 = [
  _hoisted_279
];
function _sfc_render79(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_179, _hoisted_378);
}
var delete_default = /* @__PURE__ */ export_helper_default(_sfc_main79, [["render", _sfc_render79], ["__file", "delete.vue"]]);

// src/components/dessert.vue

var _sfc_main80 = {
  name: "Dessert"
}, _hoisted_180 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_280 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 416v-48a144 144 0 0 1 168.64-141.888 224.128 224.128 0 0 1 430.72 0A144 144 0 0 1 896 368v48a384 384 0 0 1-352 382.72V896h-64v-97.28A384 384 0 0 1 128 416zm287.104-32.064h193.792a143.808 143.808 0 0 1 58.88-132.736 160.064 160.064 0 0 0-311.552 0 143.808 143.808 0 0 1 58.88 132.8zm-72.896 0a72 72 0 1 0-140.48 0h140.48zm339.584 0h140.416a72 72 0 1 0-140.48 0zM512 736a320 320 0 0 0 318.4-288.064H193.6A320 320 0 0 0 512 736zM384 896.064h256a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64z"
}, null, -1), _hoisted_379 = [
  _hoisted_280
];
function _sfc_render80(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_180, _hoisted_379);
}
var dessert_default = /* @__PURE__ */ export_helper_default(_sfc_main80, [["render", _sfc_render80], ["__file", "dessert.vue"]]);

// src/components/discount.vue

var _sfc_main81 = {
  name: "Discount"
}, _hoisted_181 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_281 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 704h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336V704zm0 64v128h576V768H224zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), _hoisted_380 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_429 = [
  _hoisted_281,
  _hoisted_380
];
function _sfc_render81(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_181, _hoisted_429);
}
var discount_default = /* @__PURE__ */ export_helper_default(_sfc_main81, [["render", _sfc_render81], ["__file", "discount.vue"]]);

// src/components/dish-dot.vue

var _sfc_main82 = {
  name: "DishDot"
}, _hoisted_182 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_282 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m384.064 274.56.064-50.688A128 128 0 0 1 512.128 96c70.528 0 127.68 57.152 127.68 127.68v50.752A448.192 448.192 0 0 1 955.392 768H68.544A448.192 448.192 0 0 1 384 274.56zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64zm32-128h768a384 384 0 1 0-768 0zm447.808-448v-32.32a63.68 63.68 0 0 0-63.68-63.68 64 64 0 0 0-64 63.936V256h127.68z"
}, null, -1), _hoisted_381 = [
  _hoisted_282
];
function _sfc_render82(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_182, _hoisted_381);
}
var dish_dot_default = /* @__PURE__ */ export_helper_default(_sfc_main82, [["render", _sfc_render82], ["__file", "dish-dot.vue"]]);

// src/components/dish.vue

var _sfc_main83 = {
  name: "Dish"
}, _hoisted_183 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_283 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 257.152V192h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96v65.152A448 448 0 0 1 955.52 768H68.48A448 448 0 0 1 480 257.152zM128 704h768a384 384 0 1 0-768 0zM96 832h832a32 32 0 1 1 0 64H96a32 32 0 1 1 0-64z"
}, null, -1), _hoisted_382 = [
  _hoisted_283
];
function _sfc_render83(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_183, _hoisted_382);
}
var dish_default = /* @__PURE__ */ export_helper_default(_sfc_main83, [["render", _sfc_render83], ["__file", "dish.vue"]]);

// src/components/document-add.vue

var _sfc_main84 = {
  name: "DocumentAdd"
}, _hoisted_184 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_284 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm320 512V448h64v128h128v64H544v128h-64V640H352v-64h128z"
}, null, -1), _hoisted_383 = [
  _hoisted_284
];
function _sfc_render84(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_184, _hoisted_383);
}
var document_add_default = /* @__PURE__ */ export_helper_default(_sfc_main84, [["render", _sfc_render84], ["__file", "document-add.vue"]]);

// src/components/document-checked.vue

var _sfc_main85 = {
  name: "DocumentChecked"
}, _hoisted_185 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_285 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm318.4 582.144 180.992-180.992L704.64 510.4 478.4 736.64 320 578.304l45.248-45.312L478.4 646.144z"
}, null, -1), _hoisted_384 = [
  _hoisted_285
];
function _sfc_render85(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_185, _hoisted_384);
}
var document_checked_default = /* @__PURE__ */ export_helper_default(_sfc_main85, [["render", _sfc_render85], ["__file", "document-checked.vue"]]);

// src/components/document-copy.vue

var _sfc_main86 = {
  name: "DocumentCopy"
}, _hoisted_186 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_286 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 320v576h576V320H128zm-32-64h640a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32zM960 96v704a32 32 0 0 1-32 32h-96v-64h64V128H384v64h-64V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32zM256 672h320v64H256v-64zm0-192h320v64H256v-64z"
}, null, -1), _hoisted_385 = [
  _hoisted_286
];
function _sfc_render86(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_186, _hoisted_385);
}
var document_copy_default = /* @__PURE__ */ export_helper_default(_sfc_main86, [["render", _sfc_render86], ["__file", "document-copy.vue"]]);

// src/components/document-delete.vue

var _sfc_main87 = {
  name: "DocumentDelete"
}, _hoisted_187 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_287 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm308.992 546.304-90.496-90.624 45.248-45.248 90.56 90.496 90.496-90.432 45.248 45.248-90.496 90.56 90.496 90.496-45.248 45.248-90.496-90.496-90.56 90.496-45.248-45.248 90.496-90.496z"
}, null, -1), _hoisted_386 = [
  _hoisted_287
];
function _sfc_render87(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_187, _hoisted_386);
}
var document_delete_default = /* @__PURE__ */ export_helper_default(_sfc_main87, [["render", _sfc_render87], ["__file", "document-delete.vue"]]);

// src/components/document-remove.vue

var _sfc_main88 = {
  name: "DocumentRemove"
}, _hoisted_188 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_288 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M805.504 320 640 154.496V320h165.504zM832 384H576V128H192v768h640V384zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm192 512h320v64H352v-64z"
}, null, -1), _hoisted_387 = [
  _hoisted_288
];
function _sfc_render88(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_188, _hoisted_387);
}
var document_remove_default = /* @__PURE__ */ export_helper_default(_sfc_main88, [["render", _sfc_render88], ["__file", "document-remove.vue"]]);

// src/components/document.vue

var _sfc_main89 = {
  name: "Document"
}, _hoisted_189 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_289 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M832 384H576V128H192v768h640V384zm-26.496-64L640 154.496V320h165.504zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h160v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), _hoisted_388 = [
  _hoisted_289
];
function _sfc_render89(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_189, _hoisted_388);
}
var document_default = /* @__PURE__ */ export_helper_default(_sfc_main89, [["render", _sfc_render89], ["__file", "document.vue"]]);

// src/components/download.vue

var _sfc_main90 = {
  name: "Download"
}, _hoisted_190 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_290 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64v450.304z"
}, null, -1), _hoisted_389 = [
  _hoisted_290
];
function _sfc_render90(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_190, _hoisted_389);
}
var download_default = /* @__PURE__ */ export_helper_default(_sfc_main90, [["render", _sfc_render90], ["__file", "download.vue"]]);

// src/components/drizzling.vue

var _sfc_main91 = {
  name: "Drizzling"
}, _hoisted_191 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_291 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM288 800h64v64h-64v-64zm192 0h64v64h-64v-64zm-96 96h64v64h-64v-64zm192 0h64v64h-64v-64zm96-96h64v64h-64v-64z"
}, null, -1), _hoisted_390 = [
  _hoisted_291
];
function _sfc_render91(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_191, _hoisted_390);
}
var drizzling_default = /* @__PURE__ */ export_helper_default(_sfc_main91, [["render", _sfc_render91], ["__file", "drizzling.vue"]]);

// src/components/edit-pen.vue

var _sfc_main92 = {
  name: "EditPen"
}, _hoisted_192 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_292 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696L175.168 732.8zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336L104.32 708.8zm384 254.272v-64h448v64h-448z",
  fill: "currentColor"
}, null, -1), _hoisted_391 = [
  _hoisted_292
];
function _sfc_render92(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_192, _hoisted_391);
}
var edit_pen_default = /* @__PURE__ */ export_helper_default(_sfc_main92, [["render", _sfc_render92], ["__file", "edit-pen.vue"]]);

// src/components/edit.vue

var _sfc_main93 = {
  name: "Edit"
}, _hoisted_193 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_293 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), _hoisted_392 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1), _hoisted_430 = [
  _hoisted_293,
  _hoisted_392
];
function _sfc_render93(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_193, _hoisted_430);
}
var edit_default = /* @__PURE__ */ export_helper_default(_sfc_main93, [["render", _sfc_render93], ["__file", "edit.vue"]]);

// src/components/eleme-filled.vue

var _sfc_main94 = {
  name: "ElemeFilled"
}, _hoisted_194 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_294 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M176 64h672c61.824 0 112 50.176 112 112v672a112 112 0 0 1-112 112H176A112 112 0 0 1 64 848V176c0-61.824 50.176-112 112-112zm150.528 173.568c-152.896 99.968-196.544 304.064-97.408 456.96a330.688 330.688 0 0 0 456.96 96.64c9.216-5.888 17.6-11.776 25.152-18.56a18.24 18.24 0 0 0 4.224-24.32L700.352 724.8a47.552 47.552 0 0 0-65.536-14.272A234.56 234.56 0 0 1 310.592 641.6C240 533.248 271.104 387.968 379.456 316.48a234.304 234.304 0 0 1 276.352 15.168c1.664.832 2.56 2.56 3.392 4.224 5.888 8.384 3.328 19.328-5.12 25.216L456.832 489.6a47.552 47.552 0 0 0-14.336 65.472l16 24.384c5.888 8.384 16.768 10.88 25.216 5.056l308.224-199.936a19.584 19.584 0 0 0 6.72-23.488v-.896c-4.992-9.216-10.048-17.6-15.104-26.88-99.968-151.168-304.064-194.88-456.96-95.744zM786.88 504.704l-62.208 40.32c-8.32 5.888-10.88 16.768-4.992 25.216L760 632.32c5.888 8.448 16.768 11.008 25.152 5.12l31.104-20.16a55.36 55.36 0 0 0 16-76.48l-20.224-31.04a19.52 19.52 0 0 0-25.152-5.12z"
}, null, -1), _hoisted_393 = [
  _hoisted_294
];
function _sfc_render94(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_194, _hoisted_393);
}
var eleme_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main94, [["render", _sfc_render94], ["__file", "eleme-filled.vue"]]);

// src/components/eleme.vue

var _sfc_main95 = {
  name: "Eleme"
}, _hoisted_195 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_295 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M300.032 188.8c174.72-113.28 408-63.36 522.24 109.44 5.76 10.56 11.52 20.16 17.28 30.72v.96a22.4 22.4 0 0 1-7.68 26.88l-352.32 228.48c-9.6 6.72-22.08 3.84-28.8-5.76l-18.24-27.84a54.336 54.336 0 0 1 16.32-74.88l225.6-146.88c9.6-6.72 12.48-19.2 5.76-28.8-.96-1.92-1.92-3.84-3.84-4.8a267.84 267.84 0 0 0-315.84-17.28c-123.84 81.6-159.36 247.68-78.72 371.52a268.096 268.096 0 0 0 370.56 78.72 54.336 54.336 0 0 1 74.88 16.32l17.28 26.88c5.76 9.6 3.84 21.12-4.8 27.84-8.64 7.68-18.24 14.4-28.8 21.12a377.92 377.92 0 0 1-522.24-110.4c-113.28-174.72-63.36-408 111.36-522.24zm526.08 305.28a22.336 22.336 0 0 1 28.8 5.76l23.04 35.52a63.232 63.232 0 0 1-18.24 87.36l-35.52 23.04c-9.6 6.72-22.08 3.84-28.8-5.76l-46.08-71.04c-6.72-9.6-3.84-22.08 5.76-28.8l71.04-46.08z"
}, null, -1), _hoisted_394 = [
  _hoisted_295
];
function _sfc_render95(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_195, _hoisted_394);
}
var eleme_default = /* @__PURE__ */ export_helper_default(_sfc_main95, [["render", _sfc_render95], ["__file", "eleme.vue"]]);

// src/components/element-plus.vue

var _sfc_main96 = {
  name: "ElementPlus"
}, _hoisted_196 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_296 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M839.7 734.7c0 33.3-17.9 41-17.9 41S519.7 949.8 499.2 960c-10.2 5.1-20.5 5.1-30.7 0 0 0-314.9-184.3-325.1-192-5.1-5.1-10.2-12.8-12.8-20.5V368.6c0-17.9 20.5-28.2 20.5-28.2L466 158.6c12.8-5.1 25.6-5.1 38.4 0 0 0 279 161.3 309.8 179.2 17.9 7.7 28.2 25.6 25.6 46.1-.1-5-.1 317.5-.1 350.8zM714.2 371.2c-64-35.8-217.6-125.4-217.6-125.4-7.7-5.1-20.5-5.1-30.7 0L217.6 389.1s-17.9 10.2-17.9 23v297c0 5.1 5.1 12.8 7.7 17.9 7.7 5.1 256 148.5 256 148.5 7.7 5.1 17.9 5.1 25.6 0 15.4-7.7 250.9-145.9 250.9-145.9s12.8-5.1 12.8-30.7v-74.2l-276.5 169v-64c0-17.9 7.7-30.7 20.5-46.1L745 535c5.1-7.7 10.2-20.5 10.2-30.7v-66.6l-279 169v-69.1c0-15.4 5.1-30.7 17.9-38.4l220.1-128zM919 135.7c0-5.1-5.1-7.7-7.7-7.7h-58.9V66.6c0-5.1-5.1-5.1-10.2-5.1l-30.7 5.1c-5.1 0-5.1 2.6-5.1 5.1V128h-56.3c-5.1 0-5.1 5.1-7.7 5.1v38.4h69.1v64c0 5.1 5.1 5.1 10.2 5.1l30.7-5.1c5.1 0 5.1-2.6 5.1-5.1v-56.3h64l-2.5-38.4z",
  fill: "currentColor"
}, null, -1), _hoisted_395 = [
  _hoisted_296
];
function _sfc_render96(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_196, _hoisted_395);
}
var element_plus_default = /* @__PURE__ */ export_helper_default(_sfc_main96, [["render", _sfc_render96], ["__file", "element-plus.vue"]]);

// src/components/expand.vue

var _sfc_main97 = {
  name: "Expand"
}, _hoisted_197 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_297 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 192h768v128H128V192zm0 256h512v128H128V448zm0 256h768v128H128V704zm576-352 192 160-192 128V352z"
}, null, -1), _hoisted_396 = [
  _hoisted_297
];
function _sfc_render97(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_197, _hoisted_396);
}
var expand_default = /* @__PURE__ */ export_helper_default(_sfc_main97, [["render", _sfc_render97], ["__file", "expand.vue"]]);

// src/components/failed.vue

var _sfc_main98 = {
  name: "Failed"
}, _hoisted_198 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_298 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m557.248 608 135.744-135.744-45.248-45.248-135.68 135.744-135.808-135.68-45.248 45.184L466.752 608l-135.68 135.68 45.184 45.312L512 653.248l135.744 135.744 45.248-45.248L557.312 608zM704 192h160v736H160V192h160v64h384v-64zm-320 0V96h256v96H384z"
}, null, -1), _hoisted_397 = [
  _hoisted_298
];
function _sfc_render98(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_198, _hoisted_397);
}
var failed_default = /* @__PURE__ */ export_helper_default(_sfc_main98, [["render", _sfc_render98], ["__file", "failed.vue"]]);

// src/components/female.vue

var _sfc_main99 = {
  name: "Female"
}, _hoisted_199 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_299 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 640a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), _hoisted_398 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 640q32 0 32 32v256q0 32-32 32t-32-32V672q0-32 32-32z"
}, null, -1), _hoisted_431 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 800h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32z"
}, null, -1), _hoisted_59 = [
  _hoisted_299,
  _hoisted_398,
  _hoisted_431
];
function _sfc_render99(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_199, _hoisted_59);
}
var female_default = /* @__PURE__ */ export_helper_default(_sfc_main99, [["render", _sfc_render99], ["__file", "female.vue"]]);

// src/components/files.vue

var _sfc_main100 = {
  name: "Files"
}, _hoisted_1100 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2100 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 384v448h768V384H128zm-32-64h832a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32zm64-128h704v64H160zm96-128h512v64H256z"
}, null, -1), _hoisted_399 = [
  _hoisted_2100
];
function _sfc_render100(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1100, _hoisted_399);
}
var files_default = /* @__PURE__ */ export_helper_default(_sfc_main100, [["render", _sfc_render100], ["__file", "files.vue"]]);

// src/components/film.vue

var _sfc_main101 = {
  name: "Film"
}, _hoisted_1101 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2101 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3100 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M320 288V128h64v352h256V128h64v160h160v64H704v128h160v64H704v128h160v64H704v160h-64V544H384v352h-64V736H128v-64h192V544H128v-64h192V352H128v-64h192z"
}, null, -1), _hoisted_432 = [
  _hoisted_2101,
  _hoisted_3100
];
function _sfc_render101(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1101, _hoisted_432);
}
var film_default = /* @__PURE__ */ export_helper_default(_sfc_main101, [["render", _sfc_render101], ["__file", "film.vue"]]);

// src/components/filter.vue

var _sfc_main102 = {
  name: "Filter"
}, _hoisted_1102 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2102 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288L384 523.392z"
}, null, -1), _hoisted_3101 = [
  _hoisted_2102
];
function _sfc_render102(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1102, _hoisted_3101);
}
var filter_default = /* @__PURE__ */ export_helper_default(_sfc_main102, [["render", _sfc_render102], ["__file", "filter.vue"]]);

// src/components/finished.vue

var _sfc_main103 = {
  name: "Finished"
}, _hoisted_1103 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2103 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M280.768 753.728 691.456 167.04a32 32 0 1 1 52.416 36.672L314.24 817.472a32 32 0 0 1-45.44 7.296l-230.4-172.8a32 32 0 0 1 38.4-51.2l203.968 152.96zM736 448a32 32 0 1 1 0-64h192a32 32 0 1 1 0 64H736zM608 640a32 32 0 0 1 0-64h319.936a32 32 0 1 1 0 64H608zM480 832a32 32 0 1 1 0-64h447.936a32 32 0 1 1 0 64H480z"
}, null, -1), _hoisted_3102 = [
  _hoisted_2103
];
function _sfc_render103(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1103, _hoisted_3102);
}
var finished_default = /* @__PURE__ */ export_helper_default(_sfc_main103, [["render", _sfc_render103], ["__file", "finished.vue"]]);

// src/components/first-aid-kit.vue

var _sfc_main104 = {
  name: "FirstAidKit"
}, _hoisted_1104 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2104 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 256a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192zm0-64h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), _hoisted_3103 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 512h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96zM352 128v64h320v-64H352zm-32-64h384a32 32 0 0 1 32 32v128a32 32 0 0 1-32 32H320a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_433 = [
  _hoisted_2104,
  _hoisted_3103
];
function _sfc_render104(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1104, _hoisted_433);
}
var first_aid_kit_default = /* @__PURE__ */ export_helper_default(_sfc_main104, [["render", _sfc_render104], ["__file", "first-aid-kit.vue"]]);

// src/components/flag.vue

var _sfc_main105 = {
  name: "Flag"
}, _hoisted_1105 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2105 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 128h608L736 384l160 256H288v320h-96V64h96v64z"
}, null, -1), _hoisted_3104 = [
  _hoisted_2105
];
function _sfc_render105(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1105, _hoisted_3104);
}
var flag_default = /* @__PURE__ */ export_helper_default(_sfc_main105, [["render", _sfc_render105], ["__file", "flag.vue"]]);

// src/components/fold.vue

var _sfc_main106 = {
  name: "Fold"
}, _hoisted_1106 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2106 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M896 192H128v128h768V192zm0 256H384v128h512V448zm0 256H128v128h768V704zM320 384 128 512l192 128V384z"
}, null, -1), _hoisted_3105 = [
  _hoisted_2106
];
function _sfc_render106(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1106, _hoisted_3105);
}
var fold_default = /* @__PURE__ */ export_helper_default(_sfc_main106, [["render", _sfc_render106], ["__file", "fold.vue"]]);

// src/components/folder-add.vue

var _sfc_main107 = {
  name: "FolderAdd"
}, _hoisted_1107 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2107 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm384 416V416h64v128h128v64H544v128h-64V608H352v-64h128z"
}, null, -1), _hoisted_3106 = [
  _hoisted_2107
];
function _sfc_render107(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1107, _hoisted_3106);
}
var folder_add_default = /* @__PURE__ */ export_helper_default(_sfc_main107, [["render", _sfc_render107], ["__file", "folder-add.vue"]]);

// src/components/folder-checked.vue

var _sfc_main108 = {
  name: "FolderChecked"
}, _hoisted_1108 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2108 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm414.08 502.144 180.992-180.992L736.32 494.4 510.08 720.64l-158.4-158.336 45.248-45.312L510.08 630.144z"
}, null, -1), _hoisted_3107 = [
  _hoisted_2108
];
function _sfc_render108(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1108, _hoisted_3107);
}
var folder_checked_default = /* @__PURE__ */ export_helper_default(_sfc_main108, [["render", _sfc_render108], ["__file", "folder-checked.vue"]]);

// src/components/folder-delete.vue

var _sfc_main109 = {
  name: "FolderDelete"
}, _hoisted_1109 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2109 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm370.752 448-90.496-90.496 45.248-45.248L512 530.752l90.496-90.496 45.248 45.248L557.248 576l90.496 90.496-45.248 45.248L512 621.248l-90.496 90.496-45.248-45.248L466.752 576z"
}, null, -1), _hoisted_3108 = [
  _hoisted_2109
];
function _sfc_render109(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1109, _hoisted_3108);
}
var folder_delete_default = /* @__PURE__ */ export_helper_default(_sfc_main109, [["render", _sfc_render109], ["__file", "folder-delete.vue"]]);

// src/components/folder-opened.vue

var _sfc_main110 = {
  name: "FolderOpened"
}, _hoisted_1110 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2110 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384H832zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896z"
}, null, -1), _hoisted_3109 = [
  _hoisted_2110
];
function _sfc_render110(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1110, _hoisted_3109);
}
var folder_opened_default = /* @__PURE__ */ export_helper_default(_sfc_main110, [["render", _sfc_render110], ["__file", "folder-opened.vue"]]);

// src/components/folder-remove.vue

var _sfc_main111 = {
  name: "FolderRemove"
}, _hoisted_1111 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2111 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32zm256 416h320v64H352v-64z"
}, null, -1), _hoisted_3110 = [
  _hoisted_2111
];
function _sfc_render111(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1111, _hoisted_3110);
}
var folder_remove_default = /* @__PURE__ */ export_helper_default(_sfc_main111, [["render", _sfc_render111], ["__file", "folder-remove.vue"]]);

// src/components/folder.vue

var _sfc_main112 = {
  name: "Folder"
}, _hoisted_1112 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2112 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 192v640h768V320H485.76L357.504 192H128zm-32-64h287.872l128.384 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3111 = [
  _hoisted_2112
];
function _sfc_render112(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1112, _hoisted_3111);
}
var folder_default = /* @__PURE__ */ export_helper_default(_sfc_main112, [["render", _sfc_render112], ["__file", "folder.vue"]]);

// src/components/food.vue

var _sfc_main113 = {
  name: "Food"
}, _hoisted_1113 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2113 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 352.576V352a288 288 0 0 1 491.072-204.224 192 192 0 0 1 274.24 204.48 64 64 0 0 1 57.216 74.24C921.6 600.512 850.048 710.656 736 756.992V800a96 96 0 0 1-96 96H384a96 96 0 0 1-96-96v-43.008c-114.048-46.336-185.6-156.48-214.528-330.496A64 64 0 0 1 128 352.64zm64-.576h64a160 160 0 0 1 320 0h64a224 224 0 0 0-448 0zm128 0h192a96 96 0 0 0-192 0zm439.424 0h68.544A128.256 128.256 0 0 0 704 192c-15.36 0-29.952 2.688-43.52 7.616 11.328 18.176 20.672 37.76 27.84 58.304A64.128 64.128 0 0 1 759.424 352zM672 768H352v32a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-32zm-342.528-64h365.056c101.504-32.64 165.76-124.928 192.896-288H136.576c27.136 163.072 91.392 255.36 192.896 288z"
}, null, -1), _hoisted_3112 = [
  _hoisted_2113
];
function _sfc_render113(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1113, _hoisted_3112);
}
var food_default = /* @__PURE__ */ export_helper_default(_sfc_main113, [["render", _sfc_render113], ["__file", "food.vue"]]);

// src/components/football.vue

var _sfc_main114 = {
  name: "Football"
}, _hoisted_1114 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2114 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-64a384 384 0 1 0 0-768 384 384 0 0 0 0 768z"
}, null, -1), _hoisted_3113 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M186.816 268.288c16-16.384 31.616-31.744 46.976-46.08 17.472 30.656 39.808 58.112 65.984 81.28l-32.512 56.448a385.984 385.984 0 0 1-80.448-91.648zm653.696-5.312a385.92 385.92 0 0 1-83.776 96.96l-32.512-56.384a322.923 322.923 0 0 0 68.48-85.76c15.552 14.08 31.488 29.12 47.808 45.184zM465.984 445.248l11.136-63.104a323.584 323.584 0 0 0 69.76 0l11.136 63.104a387.968 387.968 0 0 1-92.032 0zm-62.72-12.8A381.824 381.824 0 0 1 320 396.544l32-55.424a319.885 319.885 0 0 0 62.464 27.712l-11.2 63.488zm300.8-35.84a381.824 381.824 0 0 1-83.328 35.84l-11.2-63.552A319.885 319.885 0 0 0 672 341.184l32 55.424zm-520.768 364.8a385.92 385.92 0 0 1 83.968-97.28l32.512 56.32c-26.88 23.936-49.856 52.352-67.52 84.032-16-13.44-32.32-27.712-48.96-43.072zm657.536.128a1442.759 1442.759 0 0 1-49.024 43.072 321.408 321.408 0 0 0-67.584-84.16l32.512-56.32c33.216 27.456 61.696 60.352 84.096 97.408zM465.92 578.752a387.968 387.968 0 0 1 92.032 0l-11.136 63.104a323.584 323.584 0 0 0-69.76 0l-11.136-63.104zm-62.72 12.8 11.2 63.552a319.885 319.885 0 0 0-62.464 27.712L320 627.392a381.824 381.824 0 0 1 83.264-35.84zm300.8 35.84-32 55.424a318.272 318.272 0 0 0-62.528-27.712l11.2-63.488c29.44 8.64 57.28 20.736 83.264 35.776z"
}, null, -1), _hoisted_434 = [
  _hoisted_2114,
  _hoisted_3113
];
function _sfc_render114(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1114, _hoisted_434);
}
var football_default = /* @__PURE__ */ export_helper_default(_sfc_main114, [["render", _sfc_render114], ["__file", "football.vue"]]);

// src/components/fork-spoon.vue

var _sfc_main115 = {
  name: "ForkSpoon"
}, _hoisted_1115 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2115 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 410.304V96a32 32 0 0 1 64 0v314.304a96 96 0 0 0 64-90.56V96a32 32 0 0 1 64 0v223.744a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.544a160 160 0 0 1-128-156.8V96a32 32 0 0 1 64 0v223.744a96 96 0 0 0 64 90.56zM672 572.48C581.184 552.128 512 446.848 512 320c0-141.44 85.952-256 192-256s192 114.56 192 256c0 126.848-69.184 232.128-160 252.48V928a32 32 0 1 1-64 0V572.48zM704 512c66.048 0 128-82.56 128-192s-61.952-192-128-192-128 82.56-128 192 61.952 192 128 192z"
}, null, -1), _hoisted_3114 = [
  _hoisted_2115
];
function _sfc_render115(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1115, _hoisted_3114);
}
var fork_spoon_default = /* @__PURE__ */ export_helper_default(_sfc_main115, [["render", _sfc_render115], ["__file", "fork-spoon.vue"]]);

// src/components/fries.vue

var _sfc_main116 = {
  name: "Fries"
}, _hoisted_1116 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2116 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M608 224v-64a32 32 0 0 0-64 0v336h26.88A64 64 0 0 0 608 484.096V224zm101.12 160A64 64 0 0 0 672 395.904V384h64V224a32 32 0 1 0-64 0v160h37.12zm74.88 0a92.928 92.928 0 0 1 91.328 110.08l-60.672 323.584A96 96 0 0 1 720.32 896H303.68a96 96 0 0 1-94.336-78.336L148.672 494.08A92.928 92.928 0 0 1 240 384h-16V224a96 96 0 0 1 188.608-25.28A95.744 95.744 0 0 1 480 197.44V160a96 96 0 0 1 188.608-25.28A96 96 0 0 1 800 224v160h-16zM670.784 512a128 128 0 0 1-99.904 48H453.12a128 128 0 0 1-99.84-48H352v-1.536a128.128 128.128 0 0 1-9.984-14.976L314.88 448H240a28.928 28.928 0 0 0-28.48 34.304L241.088 640h541.824l29.568-157.696A28.928 28.928 0 0 0 784 448h-74.88l-27.136 47.488A132.405 132.405 0 0 1 672 510.464V512h-1.216zM480 288a32 32 0 0 0-64 0v196.096A64 64 0 0 0 453.12 496H480V288zm-128 96V224a32 32 0 0 0-64 0v160h64-37.12A64 64 0 0 1 352 395.904zm-98.88 320 19.072 101.888A32 32 0 0 0 303.68 832h416.64a32 32 0 0 0 31.488-26.112L770.88 704H253.12z"
}, null, -1), _hoisted_3115 = [
  _hoisted_2116
];
function _sfc_render116(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1116, _hoisted_3115);
}
var fries_default = /* @__PURE__ */ export_helper_default(_sfc_main116, [["render", _sfc_render116], ["__file", "fries.vue"]]);

// src/components/full-screen.vue

var _sfc_main117 = {
  name: "FullScreen"
}, _hoisted_1117 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2117 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64v.064zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64l-192 .192zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64v-.064z"
}, null, -1), _hoisted_3116 = [
  _hoisted_2117
];
function _sfc_render117(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1117, _hoisted_3116);
}
var full_screen_default = /* @__PURE__ */ export_helper_default(_sfc_main117, [["render", _sfc_render117], ["__file", "full-screen.vue"]]);

// src/components/goblet-full.vue

var _sfc_main118 = {
  name: "GobletFull"
}, _hoisted_1118 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2118 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 320h512c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320zm503.936 64H264.064a256.128 256.128 0 0 0 495.872 0zM544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4z"
}, null, -1), _hoisted_3117 = [
  _hoisted_2118
];
function _sfc_render118(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1118, _hoisted_3117);
}
var goblet_full_default = /* @__PURE__ */ export_helper_default(_sfc_main118, [["render", _sfc_render118], ["__file", "goblet-full.vue"]]);

// src/components/goblet-square-full.vue

var _sfc_main119 = {
  name: "GobletSquareFull"
}, _hoisted_1119 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2119 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 270.912c10.048 6.72 22.464 14.912 28.992 18.624a220.16 220.16 0 0 0 114.752 30.72c30.592 0 49.408-9.472 91.072-41.152l.64-.448c52.928-40.32 82.368-55.04 132.288-54.656 55.552.448 99.584 20.8 142.72 57.408l1.536 1.28V128H256v142.912zm.96 76.288C266.368 482.176 346.88 575.872 512 576c157.44.064 237.952-85.056 253.248-209.984a952.32 952.32 0 0 1-40.192-35.712c-32.704-27.776-63.36-41.92-101.888-42.24-31.552-.256-50.624 9.28-93.12 41.6l-.576.448c-52.096 39.616-81.024 54.208-129.792 54.208-54.784 0-100.48-13.376-142.784-37.056zM480 638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848z"
}, null, -1), _hoisted_3118 = [
  _hoisted_2119
];
function _sfc_render119(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1119, _hoisted_3118);
}
var goblet_square_full_default = /* @__PURE__ */ export_helper_default(_sfc_main119, [["render", _sfc_render119], ["__file", "goblet-square-full.vue"]]);

// src/components/goblet-square.vue

var _sfc_main120 = {
  name: "GobletSquare"
}, _hoisted_1120 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2120 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 638.912V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.848C250.624 623.424 192 442.496 192 319.68V96a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v224c0 122.816-58.624 303.68-288 318.912zM256 319.68c0 149.568 80 256.192 256 256.256C688.128 576 768 469.568 768 320V128H256v191.68z"
}, null, -1), _hoisted_3119 = [
  _hoisted_2120
];
function _sfc_render120(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1120, _hoisted_3119);
}
var goblet_square_default = /* @__PURE__ */ export_helper_default(_sfc_main120, [["render", _sfc_render120], ["__file", "goblet-square.vue"]]);

// src/components/goblet.vue

var _sfc_main121 = {
  name: "Goblet"
}, _hoisted_1121 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2121 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 638.4V896h96a32 32 0 1 1 0 64H384a32 32 0 1 1 0-64h96V638.4A320 320 0 0 1 192 320c0-85.632 21.312-170.944 64-256h512c42.688 64.32 64 149.632 64 256a320 320 0 0 1-288 318.4zM256 320a256 256 0 1 0 512 0c0-78.592-12.608-142.4-36.928-192h-434.24C269.504 192.384 256 256.256 256 320z"
}, null, -1), _hoisted_3120 = [
  _hoisted_2121
];
function _sfc_render121(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1121, _hoisted_3120);
}
var goblet_default = /* @__PURE__ */ export_helper_default(_sfc_main121, [["render", _sfc_render121], ["__file", "goblet.vue"]]);

// src/components/goods-filled.vue

var _sfc_main122 = {
  name: "GoodsFilled"
}, _hoisted_1122 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2122 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 352h640l64 544H128l64-544zm128 224h64V448h-64v128zm320 0h64V448h-64v128zM384 288h-64a192 192 0 1 1 384 0h-64a128 128 0 1 0-256 0z"
}, null, -1), _hoisted_3121 = [
  _hoisted_2122
];
function _sfc_render122(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1122, _hoisted_3121);
}
var goods_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main122, [["render", _sfc_render122], ["__file", "goods-filled.vue"]]);

// src/components/goods.vue

var _sfc_main123 = {
  name: "Goods"
}, _hoisted_1123 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2123 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M320 288v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4h131.072a32 32 0 0 1 31.808 28.8l57.6 576a32 32 0 0 1-31.808 35.2H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320zm64 0h256v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4zm-64 64H217.92l-51.2 512h690.56l-51.264-512H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96z"
}, null, -1), _hoisted_3122 = [
  _hoisted_2123
];
function _sfc_render123(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1123, _hoisted_3122);
}
var goods_default = /* @__PURE__ */ export_helper_default(_sfc_main123, [["render", _sfc_render123], ["__file", "goods.vue"]]);

// src/components/grape.vue

var _sfc_main124 = {
  name: "Grape"
}, _hoisted_1124 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2124 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 195.2a160 160 0 0 1 96 60.8 160 160 0 1 1 146.24 254.976 160 160 0 0 1-128 224 160 160 0 1 1-292.48 0 160 160 0 0 1-128-224A160 160 0 1 1 384 256a160 160 0 0 1 96-60.8V128h-64a32 32 0 0 1 0-64h192a32 32 0 0 1 0 64h-64v67.2zM512 448a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm-256 0a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128 224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm128-224a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), _hoisted_3123 = [
  _hoisted_2124
];
function _sfc_render124(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1124, _hoisted_3123);
}
var grape_default = /* @__PURE__ */ export_helper_default(_sfc_main124, [["render", _sfc_render124], ["__file", "grape.vue"]]);

// src/components/grid.vue

var _sfc_main125 = {
  name: "Grid"
}, _hoisted_1125 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2125 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 384v256H384V384h256zm64 0h192v256H704V384zm-64 512H384V704h256v192zm64 0V704h192v192H704zm-64-768v192H384V128h256zm64 0h192v192H704V128zM320 384v256H128V384h192zm0 512H128V704h192v192zm0-768v192H128V128h192z"
}, null, -1), _hoisted_3124 = [
  _hoisted_2125
];
function _sfc_render125(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1125, _hoisted_3124);
}
var grid_default = /* @__PURE__ */ export_helper_default(_sfc_main125, [["render", _sfc_render125], ["__file", "grid.vue"]]);

// src/components/guide.vue

var _sfc_main126 = {
  name: "Guide"
}, _hoisted_1126 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2126 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 608h-64V416h64v192zm0 160v160a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V768h64v128h128V768h64zM384 608V416h64v192h-64zm256-352h-64V128H448v128h-64V96a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v160z"
}, null, -1), _hoisted_3125 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m220.8 256-71.232 80 71.168 80H768V256H220.8zm-14.4-64H800a32 32 0 0 1 32 32v224a32 32 0 0 1-32 32H206.4a32 32 0 0 1-23.936-10.752l-99.584-112a32 32 0 0 1 0-42.496l99.584-112A32 32 0 0 1 206.4 192zm678.784 496-71.104 80H266.816V608h547.2l71.168 80zm-56.768-144H234.88a32 32 0 0 0-32 32v224a32 32 0 0 0 32 32h593.6a32 32 0 0 0 23.936-10.752l99.584-112a32 32 0 0 0 0-42.496l-99.584-112A32 32 0 0 0 828.48 544z"
}, null, -1), _hoisted_435 = [
  _hoisted_2126,
  _hoisted_3125
];
function _sfc_render126(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1126, _hoisted_435);
}
var guide_default = /* @__PURE__ */ export_helper_default(_sfc_main126, [["render", _sfc_render126], ["__file", "guide.vue"]]);

// src/components/headset.vue

var _sfc_main127 = {
  name: "Headset"
}, _hoisted_1127 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2127 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M896 529.152V512a384 384 0 1 0-768 0v17.152A128 128 0 0 1 320 640v128a128 128 0 1 1-256 0V512a448 448 0 1 1 896 0v256a128 128 0 1 1-256 0V640a128 128 0 0 1 192-110.848zM896 640a64 64 0 0 0-128 0v128a64 64 0 0 0 128 0V640zm-768 0v128a64 64 0 0 0 128 0V640a64 64 0 1 0-128 0z"
}, null, -1), _hoisted_3126 = [
  _hoisted_2127
];
function _sfc_render127(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1127, _hoisted_3126);
}
var headset_default = /* @__PURE__ */ export_helper_default(_sfc_main127, [["render", _sfc_render127], ["__file", "headset.vue"]]);

// src/components/help-filled.vue

var _sfc_main128 = {
  name: "HelpFilled"
}, _hoisted_1128 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2128 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M926.784 480H701.312A192.512 192.512 0 0 0 544 322.688V97.216A416.064 416.064 0 0 1 926.784 480zm0 64A416.064 416.064 0 0 1 544 926.784V701.312A192.512 192.512 0 0 0 701.312 544h225.472zM97.28 544h225.472A192.512 192.512 0 0 0 480 701.312v225.472A416.064 416.064 0 0 1 97.216 544zm0-64A416.064 416.064 0 0 1 480 97.216v225.472A192.512 192.512 0 0 0 322.688 480H97.216z"
}, null, -1), _hoisted_3127 = [
  _hoisted_2128
];
function _sfc_render128(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1128, _hoisted_3127);
}
var help_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main128, [["render", _sfc_render128], ["__file", "help-filled.vue"]]);

// src/components/help.vue

var _sfc_main129 = {
  name: "Help"
}, _hoisted_1129 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2129 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m759.936 805.248-90.944-91.008A254.912 254.912 0 0 1 512 768a254.912 254.912 0 0 1-156.992-53.76l-90.944 91.008A382.464 382.464 0 0 0 512 896c94.528 0 181.12-34.176 247.936-90.752zm45.312-45.312A382.464 382.464 0 0 0 896 512c0-94.528-34.176-181.12-90.752-247.936l-91.008 90.944C747.904 398.4 768 452.864 768 512c0 59.136-20.096 113.6-53.76 156.992l91.008 90.944zm-45.312-541.184A382.464 382.464 0 0 0 512 128c-94.528 0-181.12 34.176-247.936 90.752l90.944 91.008A254.912 254.912 0 0 1 512 256c59.136 0 113.6 20.096 156.992 53.76l90.944-91.008zm-541.184 45.312A382.464 382.464 0 0 0 128 512c0 94.528 34.176 181.12 90.752 247.936l91.008-90.944A254.912 254.912 0 0 1 256 512c0-59.136 20.096-113.6 53.76-156.992l-91.008-90.944zm417.28 394.496a194.56 194.56 0 0 0 22.528-22.528C686.912 602.56 704 559.232 704 512a191.232 191.232 0 0 0-67.968-146.56A191.296 191.296 0 0 0 512 320a191.232 191.232 0 0 0-146.56 67.968C337.088 421.44 320 464.768 320 512a191.232 191.232 0 0 0 67.968 146.56C421.44 686.912 464.768 704 512 704c47.296 0 90.56-17.088 124.032-45.44zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_3128 = [
  _hoisted_2129
];
function _sfc_render129(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1129, _hoisted_3128);
}
var help_default = /* @__PURE__ */ export_helper_default(_sfc_main129, [["render", _sfc_render129], ["__file", "help.vue"]]);

// src/components/hide.vue

var _sfc_main130 = {
  name: "Hide"
}, _hoisted_1130 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2130 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), _hoisted_3129 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), _hoisted_436 = [
  _hoisted_2130,
  _hoisted_3129
];
function _sfc_render130(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1130, _hoisted_436);
}
var hide_default = /* @__PURE__ */ export_helper_default(_sfc_main130, [["render", _sfc_render130], ["__file", "hide.vue"]]);

// src/components/histogram.vue

var _sfc_main131 = {
  name: "Histogram"
}, _hoisted_1131 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2131 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M416 896V128h192v768H416zm-288 0V448h192v448H128zm576 0V320h192v576H704z"
}, null, -1), _hoisted_3130 = [
  _hoisted_2131
];
function _sfc_render131(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1131, _hoisted_3130);
}
var histogram_default = /* @__PURE__ */ export_helper_default(_sfc_main131, [["render", _sfc_render131], ["__file", "histogram.vue"]]);

// src/components/home-filled.vue

var _sfc_main132 = {
  name: "HomeFilled"
}, _hoisted_1132 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2132 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 128 128 447.936V896h255.936V640H640v256h255.936V447.936z"
}, null, -1), _hoisted_3131 = [
  _hoisted_2132
];
function _sfc_render132(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1132, _hoisted_3131);
}
var home_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main132, [["render", _sfc_render132], ["__file", "home-filled.vue"]]);

// src/components/hot-water.vue

var _sfc_main133 = {
  name: "HotWater"
}, _hoisted_1133 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2133 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M273.067 477.867h477.866V409.6H273.067v68.267zm0 68.266v51.2A187.733 187.733 0 0 0 460.8 785.067h102.4a187.733 187.733 0 0 0 187.733-187.734v-51.2H273.067zm-34.134-204.8h546.134a34.133 34.133 0 0 1 34.133 34.134v221.866a256 256 0 0 1-256 256H460.8a256 256 0 0 1-256-256V375.467a34.133 34.133 0 0 1 34.133-34.134zM512 34.133a34.133 34.133 0 0 1 34.133 34.134v170.666a34.133 34.133 0 0 1-68.266 0V68.267A34.133 34.133 0 0 1 512 34.133zM375.467 102.4a34.133 34.133 0 0 1 34.133 34.133v102.4a34.133 34.133 0 0 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.134-34.133zm273.066 0a34.133 34.133 0 0 1 34.134 34.133v102.4a34.133 34.133 0 1 1-68.267 0v-102.4a34.133 34.133 0 0 1 34.133-34.133zM170.667 921.668h682.666a34.133 34.133 0 1 1 0 68.267H170.667a34.133 34.133 0 1 1 0-68.267z"
}, null, -1), _hoisted_3132 = [
  _hoisted_2133
];
function _sfc_render133(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1133, _hoisted_3132);
}
var hot_water_default = /* @__PURE__ */ export_helper_default(_sfc_main133, [["render", _sfc_render133], ["__file", "hot-water.vue"]]);

// src/components/house.vue

var _sfc_main134 = {
  name: "House"
}, _hoisted_1134 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2134 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 413.952V896h640V413.952L512 147.328 192 413.952zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576z"
}, null, -1), _hoisted_3133 = [
  _hoisted_2134
];
function _sfc_render134(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1134, _hoisted_3133);
}
var house_default = /* @__PURE__ */ export_helper_default(_sfc_main134, [["render", _sfc_render134], ["__file", "house.vue"]]);

// src/components/ice-cream-round.vue

var _sfc_main135 = {
  name: "IceCreamRound"
}, _hoisted_1135 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2135 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m308.352 489.344 226.304 226.304a32 32 0 0 0 45.248 0L783.552 512A192 192 0 1 0 512 240.448L308.352 444.16a32 32 0 0 0 0 45.248zm135.744 226.304L308.352 851.392a96 96 0 0 1-135.744-135.744l135.744-135.744-45.248-45.248a96 96 0 0 1 0-135.808L466.752 195.2A256 256 0 0 1 828.8 557.248L625.152 760.96a96 96 0 0 1-135.808 0l-45.248-45.248zM398.848 670.4 353.6 625.152 217.856 760.896a32 32 0 0 0 45.248 45.248L398.848 670.4zm248.96-384.64a32 32 0 0 1 0 45.248L466.624 512a32 32 0 1 1-45.184-45.248l180.992-181.056a32 32 0 0 1 45.248 0zm90.496 90.496a32 32 0 0 1 0 45.248L557.248 602.496A32 32 0 1 1 512 557.248l180.992-180.992a32 32 0 0 1 45.312 0z"
}, null, -1), _hoisted_3134 = [
  _hoisted_2135
];
function _sfc_render135(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1135, _hoisted_3134);
}
var ice_cream_round_default = /* @__PURE__ */ export_helper_default(_sfc_main135, [["render", _sfc_render135], ["__file", "ice-cream-round.vue"]]);

// src/components/ice-cream-square.vue

var _sfc_main136 = {
  name: "IceCreamSquare"
}, _hoisted_1136 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2136 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M416 640h256a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32H352a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h64zm192 64v160a96 96 0 0 1-192 0V704h-64a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h320a96 96 0 0 1 96 96v448a96 96 0 0 1-96 96h-64zm-64 0h-64v160a32 32 0 1 0 64 0V704z"
}, null, -1), _hoisted_3135 = [
  _hoisted_2136
];
function _sfc_render136(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1136, _hoisted_3135);
}
var ice_cream_square_default = /* @__PURE__ */ export_helper_default(_sfc_main136, [["render", _sfc_render136], ["__file", "ice-cream-square.vue"]]);

// src/components/ice-cream.vue

var _sfc_main137 = {
  name: "IceCream"
}, _hoisted_1137 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2137 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128.64 448a208 208 0 0 1 193.536-191.552 224 224 0 0 1 445.248 15.488A208.128 208.128 0 0 1 894.784 448H896L548.8 983.68a32 32 0 0 1-53.248.704L128 448h.64zm64.256 0h286.208a144 144 0 0 0-286.208 0zm351.36 0h286.272a144 144 0 0 0-286.272 0zm-294.848 64 271.808 396.608L778.24 512H249.408zM511.68 352.64a207.872 207.872 0 0 1 189.184-96.192 160 160 0 0 0-314.752 5.632c52.608 12.992 97.28 46.08 125.568 90.56z"
}, null, -1), _hoisted_3136 = [
  _hoisted_2137
];
function _sfc_render137(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1137, _hoisted_3136);
}
var ice_cream_default = /* @__PURE__ */ export_helper_default(_sfc_main137, [["render", _sfc_render137], ["__file", "ice-cream.vue"]]);

// src/components/ice-drink.vue

var _sfc_main138 = {
  name: "IceDrink"
}, _hoisted_1138 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2138 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 448v128h239.68l16.064-128H512zm-64 0H256.256l16.064 128H448V448zm64-255.36V384h247.744A256.128 256.128 0 0 0 512 192.64zm-64 8.064A256.448 256.448 0 0 0 264.256 384H448V200.704zm64-72.064A320.128 320.128 0 0 1 825.472 384H896a32 32 0 1 1 0 64h-64v1.92l-56.96 454.016A64 64 0 0 1 711.552 960H312.448a64 64 0 0 1-63.488-56.064L192 449.92V448h-64a32 32 0 0 1 0-64h70.528A320.384 320.384 0 0 1 448 135.04V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H544a32 32 0 0 0-32 32v32.64zM743.68 640H280.32l32.128 256h399.104l32.128-256z"
}, null, -1), _hoisted_3137 = [
  _hoisted_2138
];
function _sfc_render138(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1138, _hoisted_3137);
}
var ice_drink_default = /* @__PURE__ */ export_helper_default(_sfc_main138, [["render", _sfc_render138], ["__file", "ice-drink.vue"]]);

// src/components/ice-tea.vue

var _sfc_main139 = {
  name: "IceTea"
}, _hoisted_1139 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2139 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M197.696 259.648a320.128 320.128 0 0 1 628.608 0A96 96 0 0 1 896 352v64a96 96 0 0 1-71.616 92.864l-49.408 395.072A64 64 0 0 1 711.488 960H312.512a64 64 0 0 1-63.488-56.064l-49.408-395.072A96 96 0 0 1 128 416v-64a96 96 0 0 1 69.696-92.352zM264.064 256h495.872a256.128 256.128 0 0 0-495.872 0zm495.424 256H264.512l48 384h398.976l48-384zM224 448h576a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32H224a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32zm160 192h64v64h-64v-64zm192 64h64v64h-64v-64zm-128 64h64v64h-64v-64zm64-192h64v64h-64v-64z"
}, null, -1), _hoisted_3138 = [
  _hoisted_2139
];
function _sfc_render139(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1139, _hoisted_3138);
}
var ice_tea_default = /* @__PURE__ */ export_helper_default(_sfc_main139, [["render", _sfc_render139], ["__file", "ice-tea.vue"]]);

// src/components/info-filled.vue

var _sfc_main140 = {
  name: "InfoFilled"
}, _hoisted_1140 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2140 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
}, null, -1), _hoisted_3139 = [
  _hoisted_2140
];
function _sfc_render140(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1140, _hoisted_3139);
}
var info_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main140, [["render", _sfc_render140], ["__file", "info-filled.vue"]]);

// src/components/iphone.vue

var _sfc_main141 = {
  name: "Iphone"
}, _hoisted_1141 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2141 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z"
}, null, -1), _hoisted_3140 = [
  _hoisted_2141
];
function _sfc_render141(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1141, _hoisted_3140);
}
var iphone_default = /* @__PURE__ */ export_helper_default(_sfc_main141, [["render", _sfc_render141], ["__file", "iphone.vue"]]);

// src/components/key.vue

var _sfc_main142 = {
  name: "Key"
}, _hoisted_1142 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2142 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M448 456.064V96a32 32 0 0 1 32-32.064L672 64a32 32 0 0 1 0 64H512v128h160a32 32 0 0 1 0 64H512v128a256 256 0 1 1-64 8.064zM512 896a192 192 0 1 0 0-384 192 192 0 0 0 0 384z"
}, null, -1), _hoisted_3141 = [
  _hoisted_2142
];
function _sfc_render142(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1142, _hoisted_3141);
}
var key_default = /* @__PURE__ */ export_helper_default(_sfc_main142, [["render", _sfc_render142], ["__file", "key.vue"]]);

// src/components/knife-fork.vue

var _sfc_main143 = {
  name: "KnifeFork"
}, _hoisted_1143 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2143 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 410.56V96a32 32 0 0 1 64 0v314.56A96 96 0 0 0 384 320V96a32 32 0 0 1 64 0v224a160 160 0 0 1-128 156.8V928a32 32 0 1 1-64 0V476.8A160 160 0 0 1 128 320V96a32 32 0 0 1 64 0v224a96 96 0 0 0 64 90.56zm384-250.24V544h126.72c-3.328-78.72-12.928-147.968-28.608-207.744-14.336-54.528-46.848-113.344-98.112-175.872zM640 608v320a32 32 0 1 1-64 0V64h64c85.312 89.472 138.688 174.848 160 256 21.312 81.152 32 177.152 32 288H640z"
}, null, -1), _hoisted_3142 = [
  _hoisted_2143
];
function _sfc_render143(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1143, _hoisted_3142);
}
var knife_fork_default = /* @__PURE__ */ export_helper_default(_sfc_main143, [["render", _sfc_render143], ["__file", "knife-fork.vue"]]);

// src/components/lightning.vue

var _sfc_main144 = {
  name: "Lightning"
}, _hoisted_1144 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2144 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 671.36v64.128A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 736 734.016v-64.768a192 192 0 0 0 3.328-377.92l-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 91.968 70.464 167.36 160.256 175.232z"
}, null, -1), _hoisted_3143 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M416 736a32 32 0 0 1-27.776-47.872l128-224a32 32 0 1 1 55.552 31.744L471.168 672H608a32 32 0 0 1 27.776 47.872l-128 224a32 32 0 1 1-55.68-31.744L552.96 736H416z"
}, null, -1), _hoisted_437 = [
  _hoisted_2144,
  _hoisted_3143
];
function _sfc_render144(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1144, _hoisted_437);
}
var lightning_default = /* @__PURE__ */ export_helper_default(_sfc_main144, [["render", _sfc_render144], ["__file", "lightning.vue"]]);

// src/components/link.vue

var _sfc_main145 = {
  name: "Link"
}, _hoisted_1145 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2145 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M715.648 625.152 670.4 579.904l90.496-90.56c75.008-74.944 85.12-186.368 22.656-248.896-62.528-62.464-173.952-52.352-248.96 22.656L444.16 353.6l-45.248-45.248 90.496-90.496c100.032-99.968 251.968-110.08 339.456-22.656 87.488 87.488 77.312 239.424-22.656 339.456l-90.496 90.496zm-90.496 90.496-90.496 90.496C434.624 906.112 282.688 916.224 195.2 828.8c-87.488-87.488-77.312-239.424 22.656-339.456l90.496-90.496 45.248 45.248-90.496 90.56c-75.008 74.944-85.12 186.368-22.656 248.896 62.528 62.464 173.952 52.352 248.96-22.656l90.496-90.496 45.248 45.248zm0-362.048 45.248 45.248L398.848 670.4 353.6 625.152 625.152 353.6z"
}, null, -1), _hoisted_3144 = [
  _hoisted_2145
];
function _sfc_render145(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1145, _hoisted_3144);
}
var link_default = /* @__PURE__ */ export_helper_default(_sfc_main145, [["render", _sfc_render145], ["__file", "link.vue"]]);

// src/components/list.vue

var _sfc_main146 = {
  name: "List"
}, _hoisted_1146 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2146 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 192h160v736H160V192h160v64h384v-64zM288 512h448v-64H288v64zm0 256h448v-64H288v64zm96-576V96h256v96H384z"
}, null, -1), _hoisted_3145 = [
  _hoisted_2146
];
function _sfc_render146(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1146, _hoisted_3145);
}
var list_default = /* @__PURE__ */ export_helper_default(_sfc_main146, [["render", _sfc_render146], ["__file", "list.vue"]]);

// src/components/loading.vue

var _sfc_main147 = {
  name: "Loading"
}, _hoisted_1147 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2147 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), _hoisted_3146 = [
  _hoisted_2147
];
function _sfc_render147(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1147, _hoisted_3146);
}
var loading_default = /* @__PURE__ */ export_helper_default(_sfc_main147, [["render", _sfc_render147], ["__file", "loading.vue"]]);

// src/components/location-filled.vue

var _sfc_main148 = {
  name: "LocationFilled"
}, _hoisted_1148 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2148 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 928c23.936 0 117.504-68.352 192.064-153.152C803.456 661.888 864 535.808 864 416c0-189.632-155.84-320-352-320S160 226.368 160 416c0 120.32 60.544 246.4 159.936 359.232C394.432 859.84 488 928 512 928zm0-435.2a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 140.8a204.8 204.8 0 1 1 0-409.6 204.8 204.8 0 0 1 0 409.6z"
}, null, -1), _hoisted_3147 = [
  _hoisted_2148
];
function _sfc_render148(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1148, _hoisted_3147);
}
var location_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main148, [["render", _sfc_render148], ["__file", "location-filled.vue"]]);

// src/components/location-information.vue

var _sfc_main149 = {
  name: "LocationInformation"
}, _hoisted_1149 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2149 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), _hoisted_3148 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), _hoisted_438 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), _hoisted_510 = [
  _hoisted_2149,
  _hoisted_3148,
  _hoisted_438
];
function _sfc_render149(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1149, _hoisted_510);
}
var location_information_default = /* @__PURE__ */ export_helper_default(_sfc_main149, [["render", _sfc_render149], ["__file", "location-information.vue"]]);

// src/components/location.vue

var _sfc_main150 = {
  name: "Location"
}, _hoisted_1150 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2150 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), _hoisted_3149 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 512a96 96 0 1 0 0-192 96 96 0 0 0 0 192zm0 64a160 160 0 1 1 0-320 160 160 0 0 1 0 320z"
}, null, -1), _hoisted_439 = [
  _hoisted_2150,
  _hoisted_3149
];
function _sfc_render150(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1150, _hoisted_439);
}
var location_default = /* @__PURE__ */ export_helper_default(_sfc_main150, [["render", _sfc_render150], ["__file", "location.vue"]]);

// src/components/lock.vue

var _sfc_main151 = {
  name: "Lock"
}, _hoisted_1151 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2151 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), _hoisted_3150 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
}, null, -1), _hoisted_440 = [
  _hoisted_2151,
  _hoisted_3150
];
function _sfc_render151(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1151, _hoisted_440);
}
var lock_default = /* @__PURE__ */ export_helper_default(_sfc_main151, [["render", _sfc_render151], ["__file", "lock.vue"]]);

// src/components/lollipop.vue

var _sfc_main152 = {
  name: "Lollipop"
}, _hoisted_1152 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2152 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M513.28 448a64 64 0 1 1 76.544 49.728A96 96 0 0 0 768 448h64a160 160 0 0 1-320 0h1.28zm-126.976-29.696a256 256 0 1 0 43.52-180.48A256 256 0 0 1 832 448h-64a192 192 0 0 0-381.696-29.696zm105.664 249.472L285.696 874.048a96 96 0 0 1-135.68-135.744l206.208-206.272a320 320 0 1 1 135.744 135.744zm-54.464-36.032a321.92 321.92 0 0 1-45.248-45.248L195.2 783.552a32 32 0 1 0 45.248 45.248l197.056-197.12z"
}, null, -1), _hoisted_3151 = [
  _hoisted_2152
];
function _sfc_render152(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1152, _hoisted_3151);
}
var lollipop_default = /* @__PURE__ */ export_helper_default(_sfc_main152, [["render", _sfc_render152], ["__file", "lollipop.vue"]]);

// src/components/magic-stick.vue

var _sfc_main153 = {
  name: "MagicStick"
}, _hoisted_1153 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2153 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64h64v192h-64V64zm0 576h64v192h-64V640zM160 480v-64h192v64H160zm576 0v-64h192v64H736zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248L657.152 606.4zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248-316.8 316.8zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248L702.4 334.848z"
}, null, -1), _hoisted_3152 = [
  _hoisted_2153
];
function _sfc_render153(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1153, _hoisted_3152);
}
var magic_stick_default = /* @__PURE__ */ export_helper_default(_sfc_main153, [["render", _sfc_render153], ["__file", "magic-stick.vue"]]);

// src/components/magnet.vue

var _sfc_main154 = {
  name: "Magnet"
}, _hoisted_1154 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2154 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M832 320V192H704v320a192 192 0 1 1-384 0V192H192v128h128v64H192v128a320 320 0 0 0 640 0V384H704v-64h128zM640 512V128h256v384a384 384 0 1 1-768 0V128h256v384a128 128 0 1 0 256 0z"
}, null, -1), _hoisted_3153 = [
  _hoisted_2154
];
function _sfc_render154(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1154, _hoisted_3153);
}
var magnet_default = /* @__PURE__ */ export_helper_default(_sfc_main154, [["render", _sfc_render154], ["__file", "magnet.vue"]]);

// src/components/male.vue

var _sfc_main155 = {
  name: "Male"
}, _hoisted_1155 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2155 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
}, null, -1), _hoisted_3154 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
}, null, -1), _hoisted_441 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
}, null, -1), _hoisted_511 = [
  _hoisted_2155,
  _hoisted_3154,
  _hoisted_441
];
function _sfc_render155(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1155, _hoisted_511);
}
var male_default = /* @__PURE__ */ export_helper_default(_sfc_main155, [["render", _sfc_render155], ["__file", "male.vue"]]);

// src/components/management.vue

var _sfc_main156 = {
  name: "Management"
}, _hoisted_1156 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2156 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M576 128v288l96-96 96 96V128h128v768H320V128h256zm-448 0h128v768H128V128z"
}, null, -1), _hoisted_3155 = [
  _hoisted_2156
];
function _sfc_render156(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1156, _hoisted_3155);
}
var management_default = /* @__PURE__ */ export_helper_default(_sfc_main156, [["render", _sfc_render156], ["__file", "management.vue"]]);

// src/components/map-location.vue

var _sfc_main157 = {
  name: "MapLocation"
}, _hoisted_1157 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2157 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
}, null, -1), _hoisted_3156 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256zm345.6 192L960 960H672v-64H352v64H64l102.4-256h691.2zm-68.928 0H235.328l-76.8 192h706.944l-76.8-192z"
}, null, -1), _hoisted_442 = [
  _hoisted_2157,
  _hoisted_3156
];
function _sfc_render157(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1157, _hoisted_442);
}
var map_location_default = /* @__PURE__ */ export_helper_default(_sfc_main157, [["render", _sfc_render157], ["__file", "map-location.vue"]]);

// src/components/medal.vue

var _sfc_main158 = {
  name: "Medal"
}, _hoisted_1158 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2158 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), _hoisted_3157 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M576 128H448v200a286.72 286.72 0 0 1 64-8c19.52 0 40.832 2.688 64 8V128zm64 0v219.648c24.448 9.088 50.56 20.416 78.4 33.92L757.44 128H640zm-256 0H266.624l39.04 253.568c27.84-13.504 53.888-24.832 78.336-33.92V128zM229.312 64h565.376a32 32 0 0 1 31.616 36.864L768 480c-113.792-64-199.104-96-256-96-56.896 0-142.208 32-256 96l-58.304-379.136A32 32 0 0 1 229.312 64z"
}, null, -1), _hoisted_443 = [
  _hoisted_2158,
  _hoisted_3157
];
function _sfc_render158(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1158, _hoisted_443);
}
var medal_default = /* @__PURE__ */ export_helper_default(_sfc_main158, [["render", _sfc_render158], ["__file", "medal.vue"]]);

// src/components/menu.vue

var _sfc_main159 = {
  name: "Menu"
}, _hoisted_1159 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2159 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
}, null, -1), _hoisted_3158 = [
  _hoisted_2159
];
function _sfc_render159(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1159, _hoisted_3158);
}
var menu_default = /* @__PURE__ */ export_helper_default(_sfc_main159, [["render", _sfc_render159], ["__file", "menu.vue"]]);

// src/components/message-box.vue

var _sfc_main160 = {
  name: "MessageBox"
}, _hoisted_1160 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2160 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 384h448v64H288v-64zm96-128h256v64H384v-64zM131.456 512H384v128h256V512h252.544L721.856 192H302.144L131.456 512zM896 576H704v128H320V576H128v256h768V576zM275.776 128h472.448a32 32 0 0 1 28.608 17.664l179.84 359.552A32 32 0 0 1 960 519.552V864a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V519.552a32 32 0 0 1 3.392-14.336l179.776-359.552A32 32 0 0 1 275.776 128z"
}, null, -1), _hoisted_3159 = [
  _hoisted_2160
];
function _sfc_render160(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1160, _hoisted_3159);
}
var message_box_default = /* @__PURE__ */ export_helper_default(_sfc_main160, [["render", _sfc_render160], ["__file", "message-box.vue"]]);

// src/components/message.vue

var _sfc_main161 = {
  name: "Message"
}, _hoisted_1161 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2161 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224H128zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64z"
}, null, -1), _hoisted_3160 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224h784zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224H205.056z"
}, null, -1), _hoisted_444 = [
  _hoisted_2161,
  _hoisted_3160
];
function _sfc_render161(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1161, _hoisted_444);
}
var message_default = /* @__PURE__ */ export_helper_default(_sfc_main161, [["render", _sfc_render161], ["__file", "message.vue"]]);

// src/components/mic.vue

var _sfc_main162 = {
  name: "Mic"
}, _hoisted_1162 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2162 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 704h160a64 64 0 0 0 64-64v-32h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-96h-96a32 32 0 0 1 0-64h96v-32a64 64 0 0 0-64-64H384a64 64 0 0 0-64 64v32h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v96h96a32 32 0 0 1 0 64h-96v32a64 64 0 0 0 64 64h96zm64 64v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768h-96a128 128 0 0 1-128-128V192A128 128 0 0 1 384 64h256a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128h-96z"
}, null, -1), _hoisted_3161 = [
  _hoisted_2162
];
function _sfc_render162(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1162, _hoisted_3161);
}
var mic_default = /* @__PURE__ */ export_helper_default(_sfc_main162, [["render", _sfc_render162], ["__file", "mic.vue"]]);

// src/components/microphone.vue

var _sfc_main163 = {
  name: "Microphone"
}, _hoisted_1163 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2163 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 128a128 128 0 0 0-128 128v256a128 128 0 1 0 256 0V256a128 128 0 0 0-128-128zm0-64a192 192 0 0 1 192 192v256a192 192 0 1 1-384 0V256A192 192 0 0 1 512 64zm-32 832v-64a288 288 0 0 1-288-288v-32a32 32 0 0 1 64 0v32a224 224 0 0 0 224 224h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64z"
}, null, -1), _hoisted_3162 = [
  _hoisted_2163
];
function _sfc_render163(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1163, _hoisted_3162);
}
var microphone_default = /* @__PURE__ */ export_helper_default(_sfc_main163, [["render", _sfc_render163], ["__file", "microphone.vue"]]);

// src/components/milk-tea.vue

var _sfc_main164 = {
  name: "MilkTea"
}, _hoisted_1164 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2164 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M416 128V96a96 96 0 0 1 96-96h128a32 32 0 1 1 0 64H512a32 32 0 0 0-32 32v32h320a96 96 0 0 1 11.712 191.296l-39.68 581.056A64 64 0 0 1 708.224 960H315.776a64 64 0 0 1-63.872-59.648l-39.616-581.056A96 96 0 0 1 224 128h192zM276.48 320l39.296 576h392.448l4.8-70.784a224.064 224.064 0 0 1 30.016-439.808L747.52 320H276.48zM224 256h576a32 32 0 1 0 0-64H224a32 32 0 0 0 0 64zm493.44 503.872 21.12-309.12a160 160 0 0 0-21.12 309.12z"
}, null, -1), _hoisted_3163 = [
  _hoisted_2164
];
function _sfc_render164(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1164, _hoisted_3163);
}
var milk_tea_default = /* @__PURE__ */ export_helper_default(_sfc_main164, [["render", _sfc_render164], ["__file", "milk-tea.vue"]]);

// src/components/minus.vue

var _sfc_main165 = {
  name: "Minus"
}, _hoisted_1165 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2165 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"
}, null, -1), _hoisted_3164 = [
  _hoisted_2165
];
function _sfc_render165(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1165, _hoisted_3164);
}
var minus_default = /* @__PURE__ */ export_helper_default(_sfc_main165, [["render", _sfc_render165], ["__file", "minus.vue"]]);

// src/components/money.vue

var _sfc_main166 = {
  name: "Money"
}, _hoisted_1166 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2166 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 640v192h640V384H768v-64h150.976c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H233.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096c-2.688-5.184-4.224-10.368-4.224-24.576V640h64z"
}, null, -1), _hoisted_3165 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M768 192H128v448h640V192zm64-22.976v493.952c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 682.432 64 677.248 64 663.04V169.024c0-14.272 1.472-19.456 4.288-24.64a29.056 29.056 0 0 1 12.096-12.16C85.568 129.536 90.752 128 104.96 128h685.952c14.272 0 19.456 1.472 24.64 4.288a29.056 29.056 0 0 1 12.16 12.096c2.752 5.184 4.224 10.368 4.224 24.64z"
}, null, -1), _hoisted_445 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M448 576a160 160 0 1 1 0-320 160 160 0 0 1 0 320zm0-64a96 96 0 1 0 0-192 96 96 0 0 0 0 192z"
}, null, -1), _hoisted_512 = [
  _hoisted_2166,
  _hoisted_3165,
  _hoisted_445
];
function _sfc_render166(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1166, _hoisted_512);
}
var money_default = /* @__PURE__ */ export_helper_default(_sfc_main166, [["render", _sfc_render166], ["__file", "money.vue"]]);

// src/components/monitor.vue

var _sfc_main167 = {
  name: "Monitor"
}, _hoisted_1167 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2167 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 768v128h192a32 32 0 1 1 0 64H288a32 32 0 1 1 0-64h192V768H192A128 128 0 0 1 64 640V256a128 128 0 0 1 128-128h640a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H544zM192 192a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H192z"
}, null, -1), _hoisted_3166 = [
  _hoisted_2167
];
function _sfc_render167(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1167, _hoisted_3166);
}
var monitor_default = /* @__PURE__ */ export_helper_default(_sfc_main167, [["render", _sfc_render167], ["__file", "monitor.vue"]]);

// src/components/moon-night.vue

var _sfc_main168 = {
  name: "MoonNight"
}, _hoisted_1168 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2168 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 512a448 448 0 0 1 215.872-383.296A384 384 0 0 0 213.76 640h188.8A448.256 448.256 0 0 1 384 512zM171.136 704a448 448 0 0 1 636.992-575.296A384 384 0 0 0 499.328 704h-328.32z"
}, null, -1), _hoisted_3167 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M32 640h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm128 128h384a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm160 127.68 224 .256a32 32 0 0 1 32 32V928a32 32 0 0 1-32 32l-224-.384a32 32 0 0 1-32-32v-.064a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_446 = [
  _hoisted_2168,
  _hoisted_3167
];
function _sfc_render168(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1168, _hoisted_446);
}
var moon_night_default = /* @__PURE__ */ export_helper_default(_sfc_main168, [["render", _sfc_render168], ["__file", "moon-night.vue"]]);

// src/components/moon.vue

var _sfc_main169 = {
  name: "Moon"
}, _hoisted_1169 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2169 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M240.448 240.448a384 384 0 1 0 559.424 525.696 448 448 0 0 1-542.016-542.08 390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z"
}, null, -1), _hoisted_3168 = [
  _hoisted_2169
];
function _sfc_render169(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1169, _hoisted_3168);
}
var moon_default = /* @__PURE__ */ export_helper_default(_sfc_main169, [["render", _sfc_render169], ["__file", "moon.vue"]]);

// src/components/more-filled.vue

var _sfc_main170 = {
  name: "MoreFilled"
}, _hoisted_1170 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2170 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224z"
}, null, -1), _hoisted_3169 = [
  _hoisted_2170
];
function _sfc_render170(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1170, _hoisted_3169);
}
var more_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main170, [["render", _sfc_render170], ["__file", "more-filled.vue"]]);

// src/components/more.vue

var _sfc_main171 = {
  name: "More"
}, _hoisted_1171 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2171 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M176 416a112 112 0 1 0 0 224 112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96 48 48 0 0 1 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm336-64a112 112 0 1 1 0 224 112 112 0 0 1 0-224zm0 64a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"
}, null, -1), _hoisted_3170 = [
  _hoisted_2171
];
function _sfc_render171(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1171, _hoisted_3170);
}
var more_default = /* @__PURE__ */ export_helper_default(_sfc_main171, [["render", _sfc_render171], ["__file", "more.vue"]]);

// src/components/mostly-cloudy.vue

var _sfc_main172 = {
  name: "MostlyCloudy"
}, _hoisted_1172 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2172 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M737.216 357.952 704 349.824l-11.776-32a192.064 192.064 0 0 0-367.424 23.04l-8.96 39.04-39.04 8.96A192.064 192.064 0 0 0 320 768h368a207.808 207.808 0 0 0 207.808-208 208.32 208.32 0 0 0-158.592-202.048zm15.168-62.208A272.32 272.32 0 0 1 959.744 560a271.808 271.808 0 0 1-271.552 272H320a256 256 0 0 1-57.536-505.536 256.128 256.128 0 0 1 489.92-30.72z"
}, null, -1), _hoisted_3171 = [
  _hoisted_2172
];
function _sfc_render172(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1172, _hoisted_3171);
}
var mostly_cloudy_default = /* @__PURE__ */ export_helper_default(_sfc_main172, [["render", _sfc_render172], ["__file", "mostly-cloudy.vue"]]);

// src/components/mouse.vue

var _sfc_main173 = {
  name: "Mouse"
}, _hoisted_1173 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2173 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M438.144 256c-68.352 0-92.736 4.672-117.76 18.112-20.096 10.752-35.52 26.176-46.272 46.272C260.672 345.408 256 369.792 256 438.144v275.712c0 68.352 4.672 92.736 18.112 117.76 10.752 20.096 26.176 35.52 46.272 46.272C345.408 891.328 369.792 896 438.144 896h147.712c68.352 0 92.736-4.672 117.76-18.112 20.096-10.752 35.52-26.176 46.272-46.272C763.328 806.592 768 782.208 768 713.856V438.144c0-68.352-4.672-92.736-18.112-117.76a110.464 110.464 0 0 0-46.272-46.272C678.592 260.672 654.208 256 585.856 256H438.144zm0-64h147.712c85.568 0 116.608 8.96 147.904 25.6 31.36 16.768 55.872 41.344 72.576 72.64C823.104 321.536 832 352.576 832 438.08v275.84c0 85.504-8.96 116.544-25.6 147.84a174.464 174.464 0 0 1-72.64 72.576C702.464 951.104 671.424 960 585.92 960H438.08c-85.504 0-116.544-8.96-147.84-25.6a174.464 174.464 0 0 1-72.64-72.704c-16.768-31.296-25.664-62.336-25.664-147.84v-275.84c0-85.504 8.96-116.544 25.6-147.84a174.464 174.464 0 0 1 72.768-72.576c31.232-16.704 62.272-25.6 147.776-25.6z"
}, null, -1), _hoisted_3172 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 320q32 0 32 32v128q0 32-32 32t-32-32V352q0-32 32-32zm32-96a32 32 0 0 1-64 0v-64a32 32 0 0 0-32-32h-96a32 32 0 0 1 0-64h96a96 96 0 0 1 96 96v64z"
}, null, -1), _hoisted_447 = [
  _hoisted_2173,
  _hoisted_3172
];
function _sfc_render173(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1173, _hoisted_447);
}
var mouse_default = /* @__PURE__ */ export_helper_default(_sfc_main173, [["render", _sfc_render173], ["__file", "mouse.vue"]]);

// src/components/mug.vue

var _sfc_main174 = {
  name: "Mug"
}, _hoisted_1174 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2174 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M736 800V160H160v640a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64zm64-544h63.552a96 96 0 0 1 96 96v224a96 96 0 0 1-96 96H800v128a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V128a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 64v288h63.552a32 32 0 0 0 32-32V352a32 32 0 0 0-32-32H800z"
}, null, -1), _hoisted_3173 = [
  _hoisted_2174
];
function _sfc_render174(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1174, _hoisted_3173);
}
var mug_default = /* @__PURE__ */ export_helper_default(_sfc_main174, [["render", _sfc_render174], ["__file", "mug.vue"]]);

// src/components/mute-notification.vue

var _sfc_main175 = {
  name: "MuteNotification"
}, _hoisted_1175 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2175 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m241.216 832 63.616-64H768V448c0-42.368-10.24-82.304-28.48-117.504l46.912-47.232C815.36 331.392 832 387.84 832 448v320h96a32 32 0 1 1 0 64H241.216zm-90.24 0H96a32 32 0 1 1 0-64h96V448a320.128 320.128 0 0 1 256-313.6V128a64 64 0 1 1 128 0v6.4a319.552 319.552 0 0 1 171.648 97.088l-45.184 45.44A256 256 0 0 0 256 448v278.336L151.04 832zM448 896h128a64 64 0 0 1-128 0z"
}, null, -1), _hoisted_3174 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), _hoisted_448 = [
  _hoisted_2175,
  _hoisted_3174
];
function _sfc_render175(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1175, _hoisted_448);
}
var mute_notification_default = /* @__PURE__ */ export_helper_default(_sfc_main175, [["render", _sfc_render175], ["__file", "mute-notification.vue"]]);

// src/components/mute.vue

var _sfc_main176 = {
  name: "Mute"
}, _hoisted_1176 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2176 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m412.16 592.128-45.44 45.44A191.232 191.232 0 0 1 320 512V256a192 192 0 1 1 384 0v44.352l-64 64V256a128 128 0 1 0-256 0v256c0 30.336 10.56 58.24 28.16 80.128zm51.968 38.592A128 128 0 0 0 640 512v-57.152l64-64V512a192 192 0 0 1-287.68 166.528l47.808-47.808zM314.88 779.968l46.144-46.08A222.976 222.976 0 0 0 480 768h64a224 224 0 0 0 224-224v-32a32 32 0 1 1 64 0v32a288 288 0 0 1-288 288v64h64a32 32 0 1 1 0 64H416a32 32 0 1 1 0-64h64v-64c-61.44 0-118.4-19.2-165.12-52.032zM266.752 737.6A286.976 286.976 0 0 1 192 544v-32a32 32 0 0 1 64 0v32c0 56.832 21.184 108.8 56.064 148.288L266.752 737.6z"
}, null, -1), _hoisted_3175 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M150.72 859.072a32 32 0 0 1-45.44-45.056l704-708.544a32 32 0 0 1 45.44 45.056l-704 708.544z"
}, null, -1), _hoisted_449 = [
  _hoisted_2176,
  _hoisted_3175
];
function _sfc_render176(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1176, _hoisted_449);
}
var mute_default = /* @__PURE__ */ export_helper_default(_sfc_main176, [["render", _sfc_render176], ["__file", "mute.vue"]]);

// src/components/no-smoking.vue

var _sfc_main177 = {
  name: "NoSmoking"
}, _hoisted_1177 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2177 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M440.256 576H256v128h56.256l-64 64H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32h280.256l-64 64zm143.488 128H704V583.744L775.744 512H928a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H519.744l64-64zM768 576v128h128V576H768zm-29.696-207.552 45.248 45.248-497.856 497.856-45.248-45.248zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), _hoisted_3176 = [
  _hoisted_2177
];
function _sfc_render177(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1177, _hoisted_3176);
}
var no_smoking_default = /* @__PURE__ */ export_helper_default(_sfc_main177, [["render", _sfc_render177], ["__file", "no-smoking.vue"]]);

// src/components/notebook.vue

var _sfc_main178 = {
  name: "Notebook"
}, _hoisted_1178 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2178 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3177 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M672 128h64v768h-64zM96 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm0 192h128q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), _hoisted_450 = [
  _hoisted_2178,
  _hoisted_3177
];
function _sfc_render178(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1178, _hoisted_450);
}
var notebook_default = /* @__PURE__ */ export_helper_default(_sfc_main178, [["render", _sfc_render178], ["__file", "notebook.vue"]]);

// src/components/notification.vue

var _sfc_main179 = {
  name: "Notification"
}, _hoisted_1179 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2179 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 128v64H256a64 64 0 0 0-64 64v512a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V512h64v256a128 128 0 0 1-128 128H256a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h256z"
}, null, -1), _hoisted_3178 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M768 384a128 128 0 1 0 0-256 128 128 0 0 0 0 256zm0 64a192 192 0 1 1 0-384 192 192 0 0 1 0 384z"
}, null, -1), _hoisted_451 = [
  _hoisted_2179,
  _hoisted_3178
];
function _sfc_render179(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1179, _hoisted_451);
}
var notification_default = /* @__PURE__ */ export_helper_default(_sfc_main179, [["render", _sfc_render179], ["__file", "notification.vue"]]);

// src/components/odometer.vue

var _sfc_main180 = {
  name: "Odometer"
}, _hoisted_1180 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2180 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_3179 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 512a320 320 0 1 1 640 0 32 32 0 1 1-64 0 256 256 0 1 0-512 0 32 32 0 0 1-64 0z"
}, null, -1), _hoisted_452 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M570.432 627.84A96 96 0 1 1 509.568 608l60.992-187.776A32 32 0 1 1 631.424 440l-60.992 187.776zM502.08 734.464a32 32 0 1 0 19.84-60.928 32 32 0 0 0-19.84 60.928z"
}, null, -1), _hoisted_513 = [
  _hoisted_2180,
  _hoisted_3179,
  _hoisted_452
];
function _sfc_render180(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1180, _hoisted_513);
}
var odometer_default = /* @__PURE__ */ export_helper_default(_sfc_main180, [["render", _sfc_render180], ["__file", "odometer.vue"]]);

// src/components/office-building.vue

var _sfc_main181 = {
  name: "OfficeBuilding"
}, _hoisted_1181 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2181 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 128v704h384V128H192zm-32-64h448a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3180 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 256h256v64H256v-64zm0 192h256v64H256v-64zm0 192h256v64H256v-64zm384-128h128v64H640v-64zm0 128h128v64H640v-64zM64 832h896v64H64v-64z"
}, null, -1), _hoisted_453 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 384v448h192V384H640zm-32-64h256a32 32 0 0 1 32 32v512a32 32 0 0 1-32 32H608a32 32 0 0 1-32-32V352a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_514 = [
  _hoisted_2181,
  _hoisted_3180,
  _hoisted_453
];
function _sfc_render181(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1181, _hoisted_514);
}
var office_building_default = /* @__PURE__ */ export_helper_default(_sfc_main181, [["render", _sfc_render181], ["__file", "office-building.vue"]]);

// src/components/open.vue

var _sfc_main182 = {
  name: "Open"
}, _hoisted_1182 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2182 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), _hoisted_3181 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), _hoisted_454 = [
  _hoisted_2182,
  _hoisted_3181
];
function _sfc_render182(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1182, _hoisted_454);
}
var open_default = /* @__PURE__ */ export_helper_default(_sfc_main182, [["render", _sfc_render182], ["__file", "open.vue"]]);

// src/components/operation.vue

var _sfc_main183 = {
  name: "Operation"
}, _hoisted_1183 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2183 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64h261.44zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64h453.44zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64h133.44z"
}, null, -1), _hoisted_3182 = [
  _hoisted_2183
];
function _sfc_render183(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1183, _hoisted_3182);
}
var operation_default = /* @__PURE__ */ export_helper_default(_sfc_main183, [["render", _sfc_render183], ["__file", "operation.vue"]]);

// src/components/opportunity.vue

var _sfc_main184 = {
  name: "Opportunity"
}, _hoisted_1184 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2184 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 960v-64h192.064v64H384zm448-544a350.656 350.656 0 0 1-128.32 271.424C665.344 719.04 640 763.776 640 813.504V832H320v-14.336c0-48-19.392-95.36-57.216-124.992a351.552 351.552 0 0 1-128.448-344.256c25.344-136.448 133.888-248.128 269.76-276.48A352.384 352.384 0 0 1 832 416zm-544 32c0-132.288 75.904-224 192-224v-64c-154.432 0-256 122.752-256 288h64z"
}, null, -1), _hoisted_3183 = [
  _hoisted_2184
];
function _sfc_render184(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1184, _hoisted_3183);
}
var opportunity_default = /* @__PURE__ */ export_helper_default(_sfc_main184, [["render", _sfc_render184], ["__file", "opportunity.vue"]]);

// src/components/orange.vue

var _sfc_main185 = {
  name: "Orange"
}, _hoisted_1185 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2185 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 894.72a382.336 382.336 0 0 0 215.936-89.472L577.024 622.272c-10.24 6.016-21.248 10.688-33.024 13.696v258.688zm261.248-134.784A382.336 382.336 0 0 0 894.656 544H635.968c-3.008 11.776-7.68 22.848-13.696 33.024l182.976 182.912zM894.656 480a382.336 382.336 0 0 0-89.408-215.936L622.272 446.976c6.016 10.24 10.688 21.248 13.696 33.024h258.688zm-134.72-261.248A382.336 382.336 0 0 0 544 129.344v258.688c11.776 3.008 22.848 7.68 33.024 13.696l182.912-182.976zM480 129.344a382.336 382.336 0 0 0-215.936 89.408l182.912 182.976c10.24-6.016 21.248-10.688 33.024-13.696V129.344zm-261.248 134.72A382.336 382.336 0 0 0 129.344 480h258.688c3.008-11.776 7.68-22.848 13.696-33.024L218.752 264.064zM129.344 544a382.336 382.336 0 0 0 89.408 215.936l182.976-182.912A127.232 127.232 0 0 1 388.032 544H129.344zm134.72 261.248A382.336 382.336 0 0 0 480 894.656V635.968a127.232 127.232 0 0 1-33.024-13.696L264.064 805.248zM512 960a448 448 0 1 1 0-896 448 448 0 0 1 0 896zm0-384a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
}, null, -1), _hoisted_3184 = [
  _hoisted_2185
];
function _sfc_render185(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1185, _hoisted_3184);
}
var orange_default = /* @__PURE__ */ export_helper_default(_sfc_main185, [["render", _sfc_render185], ["__file", "orange.vue"]]);

// src/components/paperclip.vue

var _sfc_main186 = {
  name: "Paperclip"
}, _hoisted_1186 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2186 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M602.496 240.448A192 192 0 1 1 874.048 512l-316.8 316.8A256 256 0 0 1 195.2 466.752L602.496 59.456l45.248 45.248L240.448 512A192 192 0 0 0 512 783.552l316.8-316.8a128 128 0 1 0-181.056-181.056L353.6 579.904a32 32 0 1 0 45.248 45.248l294.144-294.144 45.312 45.248L444.096 670.4a96 96 0 1 1-135.744-135.744l294.144-294.208z"
}, null, -1), _hoisted_3185 = [
  _hoisted_2186
];
function _sfc_render186(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1186, _hoisted_3185);
}
var paperclip_default = /* @__PURE__ */ export_helper_default(_sfc_main186, [["render", _sfc_render186], ["__file", "paperclip.vue"]]);

// src/components/partly-cloudy.vue

var _sfc_main187 = {
  name: "PartlyCloudy"
}, _hoisted_1187 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2187 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M598.4 895.872H328.192a256 256 0 0 1-34.496-510.528A352 352 0 1 1 598.4 895.872zm-271.36-64h272.256a288 288 0 1 0-248.512-417.664L335.04 445.44l-34.816 3.584a192 192 0 0 0 26.88 382.848z"
}, null, -1), _hoisted_3186 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M139.84 501.888a256 256 0 1 1 417.856-277.12c-17.728 2.176-38.208 8.448-61.504 18.816A192 192 0 1 0 189.12 460.48a6003.84 6003.84 0 0 0-49.28 41.408z"
}, null, -1), _hoisted_455 = [
  _hoisted_2187,
  _hoisted_3186
];
function _sfc_render187(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1187, _hoisted_455);
}
var partly_cloudy_default = /* @__PURE__ */ export_helper_default(_sfc_main187, [["render", _sfc_render187], ["__file", "partly-cloudy.vue"]]);

// src/components/pear.vue

var _sfc_main188 = {
  name: "Pear"
}, _hoisted_1188 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2188 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M542.336 258.816a443.255 443.255 0 0 0-9.024 25.088 32 32 0 1 1-60.8-20.032l1.088-3.328a162.688 162.688 0 0 0-122.048 131.392l-17.088 102.72-20.736 15.36C256.192 552.704 224 610.88 224 672c0 120.576 126.4 224 288 224s288-103.424 288-224c0-61.12-32.192-119.296-89.728-161.92l-20.736-15.424-17.088-102.72a162.688 162.688 0 0 0-130.112-133.12zm-40.128-66.56c7.936-15.552 16.576-30.08 25.92-43.776 23.296-33.92 49.408-59.776 78.528-77.12a32 32 0 1 1 32.704 55.04c-20.544 12.224-40.064 31.552-58.432 58.304a316.608 316.608 0 0 0-9.792 15.104 226.688 226.688 0 0 1 164.48 181.568l12.8 77.248C819.456 511.36 864 587.392 864 672c0 159.04-157.568 288-352 288S160 831.04 160 672c0-84.608 44.608-160.64 115.584-213.376l12.8-77.248a226.624 226.624 0 0 1 213.76-189.184z"
}, null, -1), _hoisted_3187 = [
  _hoisted_2188
];
function _sfc_render188(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1188, _hoisted_3187);
}
var pear_default = /* @__PURE__ */ export_helper_default(_sfc_main188, [["render", _sfc_render188], ["__file", "pear.vue"]]);

// src/components/phone-filled.vue

var _sfc_main189 = {
  name: "PhoneFilled"
}, _hoisted_1189 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2189 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M199.232 125.568 90.624 379.008a32 32 0 0 0 6.784 35.2l512.384 512.384a32 32 0 0 0 35.2 6.784l253.44-108.608a32 32 0 0 0 10.048-52.032L769.6 633.92a32 32 0 0 0-36.928-5.952l-130.176 65.088-271.488-271.552 65.024-130.176a32 32 0 0 0-5.952-36.928L251.2 115.52a32 32 0 0 0-51.968 10.048z"
}, null, -1), _hoisted_3188 = [
  _hoisted_2189
];
function _sfc_render189(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1189, _hoisted_3188);
}
var phone_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main189, [["render", _sfc_render189], ["__file", "phone-filled.vue"]]);

// src/components/phone.vue

var _sfc_main190 = {
  name: "Phone"
}, _hoisted_1190 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2190 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M79.36 432.256 591.744 944.64a32 32 0 0 0 35.2 6.784l253.44-108.544a32 32 0 0 0 9.984-52.032l-153.856-153.92a32 32 0 0 0-36.928-6.016l-69.888 34.944L358.08 394.24l35.008-69.888a32 32 0 0 0-5.952-36.928L233.152 133.568a32 32 0 0 0-52.032 10.048L72.512 397.056a32 32 0 0 0 6.784 35.2zm60.48-29.952 81.536-190.08L325.568 316.48l-24.64 49.216-20.608 41.216 32.576 32.64 271.552 271.552 32.64 32.64 41.216-20.672 49.28-24.576 104.192 104.128-190.08 81.472L139.84 402.304zM512 320v-64a256 256 0 0 1 256 256h-64a192 192 0 0 0-192-192zm0-192V64a448 448 0 0 1 448 448h-64a384 384 0 0 0-384-384z"
}, null, -1), _hoisted_3189 = [
  _hoisted_2190
];
function _sfc_render190(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1190, _hoisted_3189);
}
var phone_default = /* @__PURE__ */ export_helper_default(_sfc_main190, [["render", _sfc_render190], ["__file", "phone.vue"]]);

// src/components/picture-filled.vue

var _sfc_main191 = {
  name: "PictureFilled"
}, _hoisted_1191 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2191 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32H96zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112zM256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384z"
}, null, -1), _hoisted_3190 = [
  _hoisted_2191
];
function _sfc_render191(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1191, _hoisted_3190);
}
var picture_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main191, [["render", _sfc_render191], ["__file", "picture-filled.vue"]]);

// src/components/picture-rounded.vue

var _sfc_main192 = {
  name: "PictureRounded"
}, _hoisted_1192 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2192 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 128a384 384 0 1 0 0 768 384 384 0 0 0 0-768zm0-64a448 448 0 1 1 0 896 448 448 0 0 1 0-896z"
}, null, -1), _hoisted_3191 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM214.656 790.656l-45.312-45.312 185.664-185.6a96 96 0 0 1 123.712-10.24l138.24 98.688a32 32 0 0 0 39.872-2.176L906.688 422.4l42.624 47.744L699.52 693.696a96 96 0 0 1-119.808 6.592l-138.24-98.752a32 32 0 0 0-41.152 3.456l-185.664 185.6z"
}, null, -1), _hoisted_456 = [
  _hoisted_2192,
  _hoisted_3191
];
function _sfc_render192(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1192, _hoisted_456);
}
var picture_rounded_default = /* @__PURE__ */ export_helper_default(_sfc_main192, [["render", _sfc_render192], ["__file", "picture-rounded.vue"]]);

// src/components/picture.vue

var _sfc_main193 = {
  name: "Picture"
}, _hoisted_1193 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2193 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 160v704h704V160H160zm-32-64h768a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H128a32 32 0 0 1-32-32V128a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3192 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 288q64 0 64 64t-64 64q-64 0-64-64t64-64zM185.408 876.992l-50.816-38.912L350.72 556.032a96 96 0 0 1 134.592-17.856l1.856 1.472 122.88 99.136a32 32 0 0 0 44.992-4.864l216-269.888 49.92 39.936-215.808 269.824-.256.32a96 96 0 0 1-135.04 14.464l-122.88-99.072-.64-.512a32 32 0 0 0-44.8 5.952L185.408 876.992z"
}, null, -1), _hoisted_457 = [
  _hoisted_2193,
  _hoisted_3192
];
function _sfc_render193(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1193, _hoisted_457);
}
var picture_default = /* @__PURE__ */ export_helper_default(_sfc_main193, [["render", _sfc_render193], ["__file", "picture.vue"]]);

// src/components/pie-chart.vue

var _sfc_main194 = {
  name: "PieChart"
}, _hoisted_1194 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2194 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M448 68.48v64.832A384.128 384.128 0 0 0 512 896a384.128 384.128 0 0 0 378.688-320h64.768A448.128 448.128 0 0 1 64 512 448.128 448.128 0 0 1 448 68.48z"
}, null, -1), _hoisted_3193 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M576 97.28V448h350.72A384.064 384.064 0 0 0 576 97.28zM512 64V33.152A448 448 0 0 1 990.848 512H512V64z"
}, null, -1), _hoisted_458 = [
  _hoisted_2194,
  _hoisted_3193
];
function _sfc_render194(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1194, _hoisted_458);
}
var pie_chart_default = /* @__PURE__ */ export_helper_default(_sfc_main194, [["render", _sfc_render194], ["__file", "pie-chart.vue"]]);

// src/components/place.vue

var _sfc_main195 = {
  name: "Place"
}, _hoisted_1195 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2195 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512z"
}, null, -1), _hoisted_3194 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 512a32 32 0 0 1 32 32v256a32 32 0 1 1-64 0V544a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_459 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 649.088v64.96C269.76 732.352 192 771.904 192 800c0 37.696 139.904 96 320 96s320-58.304 320-96c0-28.16-77.76-67.648-192-85.952v-64.96C789.12 671.04 896 730.368 896 800c0 88.32-171.904 160-384 160s-384-71.68-384-160c0-69.696 106.88-128.96 256-150.912z"
}, null, -1), _hoisted_515 = [
  _hoisted_2195,
  _hoisted_3194,
  _hoisted_459
];
function _sfc_render195(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1195, _hoisted_515);
}
var place_default = /* @__PURE__ */ export_helper_default(_sfc_main195, [["render", _sfc_render195], ["__file", "place.vue"]]);

// src/components/platform.vue

var _sfc_main196 = {
  name: "Platform"
}, _hoisted_1196 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2196 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M448 832v-64h128v64h192v64H256v-64h192zM128 704V128h768v576H128z"
}, null, -1), _hoisted_3195 = [
  _hoisted_2196
];
function _sfc_render196(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1196, _hoisted_3195);
}
var platform_default = /* @__PURE__ */ export_helper_default(_sfc_main196, [["render", _sfc_render196], ["__file", "platform.vue"]]);

// src/components/plus.vue

var _sfc_main197 = {
  name: "Plus"
}, _hoisted_1197 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2197 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"
}, null, -1), _hoisted_3196 = [
  _hoisted_2197
];
function _sfc_render197(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1197, _hoisted_3196);
}
var plus_default = /* @__PURE__ */ export_helper_default(_sfc_main197, [["render", _sfc_render197], ["__file", "plus.vue"]]);

// src/components/pointer.vue

var _sfc_main198 = {
  name: "Pointer"
}, _hoisted_1198 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2198 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M511.552 128c-35.584 0-64.384 28.8-64.384 64.448v516.48L274.048 570.88a94.272 94.272 0 0 0-112.896-3.456 44.416 44.416 0 0 0-8.96 62.208L332.8 870.4A64 64 0 0 0 384 896h512V575.232a64 64 0 0 0-45.632-61.312l-205.952-61.76A96 96 0 0 1 576 360.192V192.448C576 156.8 547.2 128 511.552 128zM359.04 556.8l24.128 19.2V192.448a128.448 128.448 0 1 1 256.832 0v167.744a32 32 0 0 0 22.784 30.656l206.016 61.76A128 128 0 0 1 960 575.232V896a64 64 0 0 1-64 64H384a128 128 0 0 1-102.4-51.2L101.056 668.032A108.416 108.416 0 0 1 128 512.512a158.272 158.272 0 0 1 185.984 8.32L359.04 556.8z"
}, null, -1), _hoisted_3197 = [
  _hoisted_2198
];
function _sfc_render198(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1198, _hoisted_3197);
}
var pointer_default = /* @__PURE__ */ export_helper_default(_sfc_main198, [["render", _sfc_render198], ["__file", "pointer.vue"]]);

// src/components/position.vue

var _sfc_main199 = {
  name: "Position"
}, _hoisted_1199 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2199 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m249.6 417.088 319.744 43.072 39.168 310.272L845.12 178.88 249.6 417.088zm-129.024 47.168a32 32 0 0 1-7.68-61.44l777.792-311.04a32 32 0 0 1 41.6 41.6l-310.336 775.68a32 32 0 0 1-61.44-7.808L512 516.992l-391.424-52.736z"
}, null, -1), _hoisted_3198 = [
  _hoisted_2199
];
function _sfc_render199(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1199, _hoisted_3198);
}
var position_default = /* @__PURE__ */ export_helper_default(_sfc_main199, [["render", _sfc_render199], ["__file", "position.vue"]]);

// src/components/postcard.vue

var _sfc_main200 = {
  name: "Postcard"
}, _hoisted_1200 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2200 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 224a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32V256a32 32 0 0 0-32-32H160zm0-64h704a96 96 0 0 1 96 96v512a96 96 0 0 1-96 96H160a96 96 0 0 1-96-96V256a96 96 0 0 1 96-96z"
}, null, -1), _hoisted_3199 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 320a64 64 0 1 1 0 128 64 64 0 0 1 0-128zM288 448h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32zm0 128h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), _hoisted_460 = [
  _hoisted_2200,
  _hoisted_3199
];
function _sfc_render200(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1200, _hoisted_460);
}
var postcard_default = /* @__PURE__ */ export_helper_default(_sfc_main200, [["render", _sfc_render200], ["__file", "postcard.vue"]]);

// src/components/pouring.vue

var _sfc_main201 = {
  name: "Pouring"
}, _hoisted_1201 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2201 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m739.328 291.328-35.2-6.592-12.8-33.408a192.064 192.064 0 0 0-365.952 23.232l-9.92 40.896-41.472 7.04a176.32 176.32 0 0 0-146.24 173.568c0 97.28 78.72 175.936 175.808 175.936h400a192 192 0 0 0 35.776-380.672zM959.552 480a256 256 0 0 1-256 256h-400A239.808 239.808 0 0 1 63.744 496.192a240.32 240.32 0 0 1 199.488-236.8 256.128 256.128 0 0 1 487.872-30.976A256.064 256.064 0 0 1 959.552 480zM224 800a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32zm192 0a32 32 0 0 1 32 32v96a32 32 0 1 1-64 0v-96a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3200 = [
  _hoisted_2201
];
function _sfc_render201(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1201, _hoisted_3200);
}
var pouring_default = /* @__PURE__ */ export_helper_default(_sfc_main201, [["render", _sfc_render201], ["__file", "pouring.vue"]]);

// src/components/present.vue

var _sfc_main202 = {
  name: "Present"
}, _hoisted_1202 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2202 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 896V640H192v-64h288V320H192v576h288zm64 0h288V320H544v256h288v64H544v256zM128 256h768v672a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V256z"
}, null, -1), _hoisted_3201 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M96 256h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32z"
}, null, -1), _hoisted_461 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M416 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_516 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M608 256a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_6 = [
  _hoisted_2202,
  _hoisted_3201,
  _hoisted_461,
  _hoisted_516
];
function _sfc_render202(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1202, _hoisted_6);
}
var present_default = /* @__PURE__ */ export_helper_default(_sfc_main202, [["render", _sfc_render202], ["__file", "present.vue"]]);

// src/components/price-tag.vue

var _sfc_main203 = {
  name: "PriceTag"
}, _hoisted_1203 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2203 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 318.336V896h576V318.336L552.512 115.84a64 64 0 0 0-81.024 0L224 318.336zM593.024 66.304l259.2 212.096A32 32 0 0 1 864 303.168V928a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V303.168a32 32 0 0 1 11.712-24.768l259.2-212.096a128 128 0 0 1 162.112 0z"
}, null, -1), _hoisted_3202 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 448a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_462 = [
  _hoisted_2203,
  _hoisted_3202
];
function _sfc_render203(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1203, _hoisted_462);
}
var price_tag_default = /* @__PURE__ */ export_helper_default(_sfc_main203, [["render", _sfc_render203], ["__file", "price-tag.vue"]]);

// src/components/printer.vue

var _sfc_main204 = {
  name: "Printer"
}, _hoisted_1204 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2204 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 768H105.024c-14.272 0-19.456-1.472-24.64-4.288a29.056 29.056 0 0 1-12.16-12.096C65.536 746.432 64 741.248 64 727.04V379.072c0-42.816 4.48-58.304 12.8-73.984 8.384-15.616 20.672-27.904 36.288-36.288 15.68-8.32 31.168-12.8 73.984-12.8H256V64h512v192h68.928c42.816 0 58.304 4.48 73.984 12.8 15.616 8.384 27.904 20.672 36.288 36.288 8.32 15.68 12.8 31.168 12.8 73.984v347.904c0 14.272-1.472 19.456-4.288 24.64a29.056 29.056 0 0 1-12.096 12.16c-5.184 2.752-10.368 4.224-24.64 4.224H768v192H256V768zm64-192v320h384V576H320zm-64 128V512h512v192h128V379.072c0-29.376-1.408-36.48-5.248-43.776a23.296 23.296 0 0 0-10.048-10.048c-7.232-3.84-14.4-5.248-43.776-5.248H187.072c-29.376 0-36.48 1.408-43.776 5.248a23.296 23.296 0 0 0-10.048 10.048c-3.84 7.232-5.248 14.4-5.248 43.776V704h128zm64-448h384V128H320v128zm-64 128h64v64h-64v-64zm128 0h64v64h-64v-64z"
}, null, -1), _hoisted_3203 = [
  _hoisted_2204
];
function _sfc_render204(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1204, _hoisted_3203);
}
var printer_default = /* @__PURE__ */ export_helper_default(_sfc_main204, [["render", _sfc_render204], ["__file", "printer.vue"]]);

// src/components/promotion.vue

var _sfc_main205 = {
  name: "Promotion"
}, _hoisted_1205 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2205 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m64 448 832-320-128 704-446.08-243.328L832 192 242.816 545.472 64 448zm256 512V657.024L512 768 320 960z"
}, null, -1), _hoisted_3204 = [
  _hoisted_2205
];
function _sfc_render205(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1205, _hoisted_3204);
}
var promotion_default = /* @__PURE__ */ export_helper_default(_sfc_main205, [["render", _sfc_render205], ["__file", "promotion.vue"]]);

// src/components/question-filled.vue

var _sfc_main206 = {
  name: "QuestionFilled"
}, _hoisted_1206 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2206 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
}, null, -1), _hoisted_3205 = [
  _hoisted_2206
];
function _sfc_render206(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1206, _hoisted_3205);
}
var question_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main206, [["render", _sfc_render206], ["__file", "question-filled.vue"]]);

// src/components/rank.vue

var _sfc_main207 = {
  name: "Rank"
}, _hoisted_1207 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2207 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m186.496 544 41.408 41.344a32 32 0 1 1-45.248 45.312l-96-96a32 32 0 0 1 0-45.312l96-96a32 32 0 1 1 45.248 45.312L186.496 480h290.816V186.432l-41.472 41.472a32 32 0 1 1-45.248-45.184l96-96.128a32 32 0 0 1 45.312 0l96 96.064a32 32 0 0 1-45.248 45.184l-41.344-41.28V480H832l-41.344-41.344a32 32 0 0 1 45.248-45.312l96 96a32 32 0 0 1 0 45.312l-96 96a32 32 0 0 1-45.248-45.312L832 544H541.312v293.44l41.344-41.28a32 32 0 1 1 45.248 45.248l-96 96a32 32 0 0 1-45.312 0l-96-96a32 32 0 1 1 45.312-45.248l41.408 41.408V544H186.496z"
}, null, -1), _hoisted_3206 = [
  _hoisted_2207
];
function _sfc_render207(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1207, _hoisted_3206);
}
var rank_default = /* @__PURE__ */ export_helper_default(_sfc_main207, [["render", _sfc_render207], ["__file", "rank.vue"]]);

// src/components/reading-lamp.vue

var _sfc_main208 = {
  name: "ReadingLamp"
}, _hoisted_1208 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2208 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 896h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32zm-44.672-768-99.52 448h608.384l-99.52-448H307.328zm-25.6-64h460.608a32 32 0 0 1 31.232 25.088l113.792 512A32 32 0 0 1 856.128 640H167.872a32 32 0 0 1-31.232-38.912l113.792-512A32 32 0 0 1 281.664 64z"
}, null, -1), _hoisted_3207 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M672 576q32 0 32 32v128q0 32-32 32t-32-32V608q0-32 32-32zm-192-.064h64V960h-64z"
}, null, -1), _hoisted_463 = [
  _hoisted_2208,
  _hoisted_3207
];
function _sfc_render208(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1208, _hoisted_463);
}
var reading_lamp_default = /* @__PURE__ */ export_helper_default(_sfc_main208, [["render", _sfc_render208], ["__file", "reading-lamp.vue"]]);

// src/components/reading.vue

var _sfc_main209 = {
  name: "Reading"
}, _hoisted_1209 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2209 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72l384 54.848zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
}, null, -1), _hoisted_3208 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 192h64v704h-64z"
}, null, -1), _hoisted_464 = [
  _hoisted_2209,
  _hoisted_3208
];
function _sfc_render209(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1209, _hoisted_464);
}
var reading_default = /* @__PURE__ */ export_helper_default(_sfc_main209, [["render", _sfc_render209], ["__file", "reading.vue"]]);

// src/components/refresh-left.vue

var _sfc_main210 = {
  name: "RefreshLeft"
}, _hoisted_1210 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2210 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
}, null, -1), _hoisted_3209 = [
  _hoisted_2210
];
function _sfc_render210(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1210, _hoisted_3209);
}
var refresh_left_default = /* @__PURE__ */ export_helper_default(_sfc_main210, [["render", _sfc_render210], ["__file", "refresh-left.vue"]]);

// src/components/refresh-right.vue

var _sfc_main211 = {
  name: "RefreshRight"
}, _hoisted_1211 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2211 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
}, null, -1), _hoisted_3210 = [
  _hoisted_2211
];
function _sfc_render211(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1211, _hoisted_3210);
}
var refresh_right_default = /* @__PURE__ */ export_helper_default(_sfc_main211, [["render", _sfc_render211], ["__file", "refresh-right.vue"]]);

// src/components/refresh.vue

var _sfc_main212 = {
  name: "Refresh"
}, _hoisted_1212 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2212 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
}, null, -1), _hoisted_3211 = [
  _hoisted_2212
];
function _sfc_render212(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1212, _hoisted_3211);
}
var refresh_default = /* @__PURE__ */ export_helper_default(_sfc_main212, [["render", _sfc_render212], ["__file", "refresh.vue"]]);

// src/components/refrigerator.vue

var _sfc_main213 = {
  name: "Refrigerator"
}, _hoisted_1213 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2213 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 448h512V160a32 32 0 0 0-32-32H288a32 32 0 0 0-32 32v288zm0 64v352a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V512H256zm32-448h448a96 96 0 0 1 96 96v704a96 96 0 0 1-96 96H288a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96zm32 224h64v96h-64v-96zm0 288h64v96h-64v-96z"
}, null, -1), _hoisted_3212 = [
  _hoisted_2213
];
function _sfc_render213(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1213, _hoisted_3212);
}
var refrigerator_default = /* @__PURE__ */ export_helper_default(_sfc_main213, [["render", _sfc_render213], ["__file", "refrigerator.vue"]]);

// src/components/remove-filled.vue

var _sfc_main214 = {
  name: "RemoveFilled"
}, _hoisted_1214 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2214 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zM288 512a38.4 38.4 0 0 0 38.4 38.4h371.2a38.4 38.4 0 0 0 0-76.8H326.4A38.4 38.4 0 0 0 288 512z"
}, null, -1), _hoisted_3213 = [
  _hoisted_2214
];
function _sfc_render214(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1214, _hoisted_3213);
}
var remove_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main214, [["render", _sfc_render214], ["__file", "remove-filled.vue"]]);

// src/components/remove.vue

var _sfc_main215 = {
  name: "Remove"
}, _hoisted_1215 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2215 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), _hoisted_3214 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_465 = [
  _hoisted_2215,
  _hoisted_3214
];
function _sfc_render215(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1215, _hoisted_465);
}
var remove_default = /* @__PURE__ */ export_helper_default(_sfc_main215, [["render", _sfc_render215], ["__file", "remove.vue"]]);

// src/components/right.vue

var _sfc_main216 = {
  name: "Right"
}, _hoisted_1216 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2216 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
}, null, -1), _hoisted_3215 = [
  _hoisted_2216
];
function _sfc_render216(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1216, _hoisted_3215);
}
var right_default = /* @__PURE__ */ export_helper_default(_sfc_main216, [["render", _sfc_render216], ["__file", "right.vue"]]);

// src/components/scale-to-original.vue

var _sfc_main217 = {
  name: "ScaleToOriginal"
}, _hoisted_1217 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2217 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zM512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412zM512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512z"
}, null, -1), _hoisted_3216 = [
  _hoisted_2217
];
function _sfc_render217(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1217, _hoisted_3216);
}
var scale_to_original_default = /* @__PURE__ */ export_helper_default(_sfc_main217, [["render", _sfc_render217], ["__file", "scale-to-original.vue"]]);

// src/components/school.vue

var _sfc_main218 = {
  name: "School"
}, _hoisted_1218 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2218 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 128v704h576V128H224zm-32-64h640a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3217 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M64 832h896v64H64zm256-640h128v96H320z"
}, null, -1), _hoisted_466 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 832h256v-64a128 128 0 1 0-256 0v64zm128-256a192 192 0 0 1 192 192v128H320V768a192 192 0 0 1 192-192zM320 384h128v96H320zm256-192h128v96H576zm0 192h128v96H576z"
}, null, -1), _hoisted_517 = [
  _hoisted_2218,
  _hoisted_3217,
  _hoisted_466
];
function _sfc_render218(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1218, _hoisted_517);
}
var school_default = /* @__PURE__ */ export_helper_default(_sfc_main218, [["render", _sfc_render218], ["__file", "school.vue"]]);

// src/components/scissor.vue

var _sfc_main219 = {
  name: "Scissor"
}, _hoisted_1219 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2219 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m512.064 578.368-106.88 152.768a160 160 0 1 1-23.36-78.208L472.96 522.56 196.864 128.256a32 32 0 1 1 52.48-36.736l393.024 561.344a160 160 0 1 1-23.36 78.208l-106.88-152.704zm54.4-189.248 208.384-297.6a32 32 0 0 1 52.48 36.736l-221.76 316.672-39.04-55.808zm-376.32 425.856a96 96 0 1 0 110.144-157.248 96 96 0 0 0-110.08 157.248zm643.84 0a96 96 0 1 0-110.08-157.248 96 96 0 0 0 110.08 157.248z"
}, null, -1), _hoisted_3218 = [
  _hoisted_2219
];
function _sfc_render219(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1219, _hoisted_3218);
}
var scissor_default = /* @__PURE__ */ export_helper_default(_sfc_main219, [["render", _sfc_render219], ["__file", "scissor.vue"]]);

// src/components/search.vue

var _sfc_main220 = {
  name: "Search"
}, _hoisted_1220 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2220 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"
}, null, -1), _hoisted_3219 = [
  _hoisted_2220
];
function _sfc_render220(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1220, _hoisted_3219);
}
var search_default = /* @__PURE__ */ export_helper_default(_sfc_main220, [["render", _sfc_render220], ["__file", "search.vue"]]);

// src/components/select.vue

var _sfc_main221 = {
  name: "Select"
}, _hoisted_1221 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2221 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M77.248 415.04a64 64 0 0 1 90.496 0l226.304 226.304L846.528 188.8a64 64 0 1 1 90.56 90.496l-543.04 543.04-316.8-316.8a64 64 0 0 1 0-90.496z"
}, null, -1), _hoisted_3220 = [
  _hoisted_2221
];
function _sfc_render221(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1221, _hoisted_3220);
}
var select_default = /* @__PURE__ */ export_helper_default(_sfc_main221, [["render", _sfc_render221], ["__file", "select.vue"]]);

// src/components/sell.vue

var _sfc_main222 = {
  name: "Sell"
}, _hoisted_1222 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2222 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 483.84L768 698.496V928a32 32 0 1 1-64 0V698.496l-73.344 73.344a32 32 0 1 1-45.248-45.248l128-128a32 32 0 0 1 45.248 0l128 128a32 32 0 1 1-45.248 45.248z"
}, null, -1), _hoisted_3221 = [
  _hoisted_2222
];
function _sfc_render222(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1222, _hoisted_3221);
}
var sell_default = /* @__PURE__ */ export_helper_default(_sfc_main222, [["render", _sfc_render222], ["__file", "sell.vue"]]);

// src/components/semi-select.vue

var _sfc_main223 = {
  name: "SemiSelect"
}, _hoisted_1223 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2223 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 448h768q64 0 64 64t-64 64H128q-64 0-64-64t64-64z"
}, null, -1), _hoisted_3222 = [
  _hoisted_2223
];
function _sfc_render223(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1223, _hoisted_3222);
}
var semi_select_default = /* @__PURE__ */ export_helper_default(_sfc_main223, [["render", _sfc_render223], ["__file", "semi-select.vue"]]);

// src/components/service.vue

var _sfc_main224 = {
  name: "Service"
}, _hoisted_1224 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2224 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"
}, null, -1), _hoisted_3223 = [
  _hoisted_2224
];
function _sfc_render224(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1224, _hoisted_3223);
}
var service_default = /* @__PURE__ */ export_helper_default(_sfc_main224, [["render", _sfc_render224], ["__file", "service.vue"]]);

// src/components/set-up.vue

var _sfc_main225 = {
  name: "SetUp"
}, _hoisted_1225 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2225 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 160a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h576a64 64 0 0 0 64-64V224a64 64 0 0 0-64-64H224zm0-64h576a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128H224A128 128 0 0 1 96 800V224A128 128 0 0 1 224 96z"
}, null, -1), _hoisted_3224 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_467 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 320h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm160 416a64 64 0 1 0 0-128 64 64 0 0 0 0 128zm0 64a128 128 0 1 1 0-256 128 128 0 0 1 0 256z"
}, null, -1), _hoisted_518 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 640h256q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), _hoisted_62 = [
  _hoisted_2225,
  _hoisted_3224,
  _hoisted_467,
  _hoisted_518
];
function _sfc_render225(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1225, _hoisted_62);
}
var set_up_default = /* @__PURE__ */ export_helper_default(_sfc_main225, [["render", _sfc_render225], ["__file", "set-up.vue"]]);

// src/components/setting.vue

var _sfc_main226 = {
  name: "Setting"
}, _hoisted_1226 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2226 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M600.704 64a32 32 0 0 1 30.464 22.208l35.2 109.376c14.784 7.232 28.928 15.36 42.432 24.512l112.384-24.192a32 32 0 0 1 34.432 15.36L944.32 364.8a32 32 0 0 1-4.032 37.504l-77.12 85.12a357.12 357.12 0 0 1 0 49.024l77.12 85.248a32 32 0 0 1 4.032 37.504l-88.704 153.6a32 32 0 0 1-34.432 15.296L708.8 803.904c-13.44 9.088-27.648 17.28-42.368 24.512l-35.264 109.376A32 32 0 0 1 600.704 960H423.296a32 32 0 0 1-30.464-22.208L357.696 828.48a351.616 351.616 0 0 1-42.56-24.64l-112.32 24.256a32 32 0 0 1-34.432-15.36L79.68 659.2a32 32 0 0 1 4.032-37.504l77.12-85.248a357.12 357.12 0 0 1 0-48.896l-77.12-85.248A32 32 0 0 1 79.68 364.8l88.704-153.6a32 32 0 0 1 34.432-15.296l112.32 24.256c13.568-9.152 27.776-17.408 42.56-24.64l35.2-109.312A32 32 0 0 1 423.232 64H600.64zm-23.424 64H446.72l-36.352 113.088-24.512 11.968a294.113 294.113 0 0 0-34.816 20.096l-22.656 15.36-116.224-25.088-65.28 113.152 79.68 88.192-1.92 27.136a293.12 293.12 0 0 0 0 40.192l1.92 27.136-79.808 88.192 65.344 113.152 116.224-25.024 22.656 15.296a294.113 294.113 0 0 0 34.816 20.096l24.512 11.968L446.72 896h130.688l36.48-113.152 24.448-11.904a288.282 288.282 0 0 0 34.752-20.096l22.592-15.296 116.288 25.024 65.28-113.152-79.744-88.192 1.92-27.136a293.12 293.12 0 0 0 0-40.256l-1.92-27.136 79.808-88.128-65.344-113.152-116.288 24.96-22.592-15.232a287.616 287.616 0 0 0-34.752-20.096l-24.448-11.904L577.344 128zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384zm0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
}, null, -1), _hoisted_3225 = [
  _hoisted_2226
];
function _sfc_render226(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1226, _hoisted_3225);
}
var setting_default = /* @__PURE__ */ export_helper_default(_sfc_main226, [["render", _sfc_render226], ["__file", "setting.vue"]]);

// src/components/share.vue

var _sfc_main227 = {
  name: "Share"
}, _hoisted_1227 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2227 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m679.872 348.8-301.76 188.608a127.808 127.808 0 0 1 5.12 52.16l279.936 104.96a128 128 0 1 1-22.464 59.904l-279.872-104.96a128 128 0 1 1-16.64-166.272l301.696-188.608a128 128 0 1 1 33.92 54.272z"
}, null, -1), _hoisted_3226 = [
  _hoisted_2227
];
function _sfc_render227(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1227, _hoisted_3226);
}
var share_default = /* @__PURE__ */ export_helper_default(_sfc_main227, [["render", _sfc_render227], ["__file", "share.vue"]]);

// src/components/ship.vue

var _sfc_main228 = {
  name: "Ship"
}, _hoisted_1228 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2228 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 386.88V448h405.568a32 32 0 0 1 30.72 40.768l-76.48 267.968A192 192 0 0 1 687.168 896H336.832a192 192 0 0 1-184.64-139.264L75.648 488.768A32 32 0 0 1 106.368 448H448V117.888a32 32 0 0 1 47.36-28.096l13.888 7.616L512 96v2.88l231.68 126.4a32 32 0 0 1-2.048 57.216L512 386.88zm0-70.272 144.768-65.792L512 171.84v144.768zM512 512H148.864l18.24 64H856.96l18.24-64H512zM185.408 640l28.352 99.2A128 128 0 0 0 336.832 832h350.336a128 128 0 0 0 123.072-92.8l28.352-99.2H185.408z"
}, null, -1), _hoisted_3227 = [
  _hoisted_2228
];
function _sfc_render228(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1228, _hoisted_3227);
}
var ship_default = /* @__PURE__ */ export_helper_default(_sfc_main228, [["render", _sfc_render228], ["__file", "ship.vue"]]);

// src/components/shop.vue

var _sfc_main229 = {
  name: "Shop"
}, _hoisted_1229 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2229 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 704h64v192H256V704h64v64h384v-64zm188.544-152.192C894.528 559.616 896 567.616 896 576a96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0 96 96 0 1 1-192 0c0-8.384 1.408-16.384 3.392-24.192L192 128h640l60.544 423.808z"
}, null, -1), _hoisted_3228 = [
  _hoisted_2229
];
function _sfc_render229(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1229, _hoisted_3228);
}
var shop_default = /* @__PURE__ */ export_helper_default(_sfc_main229, [["render", _sfc_render229], ["__file", "shop.vue"]]);

// src/components/shopping-bag.vue

var _sfc_main230 = {
  name: "ShoppingBag"
}, _hoisted_1230 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2230 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 320v96a32 32 0 0 1-32 32h-32V320H384v128h-32a32 32 0 0 1-32-32v-96H192v576h640V320H704zm-384-64a192 192 0 1 1 384 0h160a32 32 0 0 1 32 32v640a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32h160zm64 0h256a128 128 0 1 0-256 0z"
}, null, -1), _hoisted_3229 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 704h640v64H192z"
}, null, -1), _hoisted_468 = [
  _hoisted_2230,
  _hoisted_3229
];
function _sfc_render230(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1230, _hoisted_468);
}
var shopping_bag_default = /* @__PURE__ */ export_helper_default(_sfc_main230, [["render", _sfc_render230], ["__file", "shopping-bag.vue"]]);

// src/components/shopping-cart-full.vue

var _sfc_main231 = {
  name: "ShoppingCartFull"
}, _hoisted_1231 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2231 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), _hoisted_3230 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M699.648 256 608 145.984 516.352 256h183.296zm-140.8-151.04a64 64 0 0 1 98.304 0L836.352 320H379.648l179.2-215.04z"
}, null, -1), _hoisted_469 = [
  _hoisted_2231,
  _hoisted_3230
];
function _sfc_render231(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1231, _hoisted_469);
}
var shopping_cart_full_default = /* @__PURE__ */ export_helper_default(_sfc_main231, [["render", _sfc_render231], ["__file", "shopping-cart-full.vue"]]);

// src/components/shopping-cart.vue

var _sfc_main232 = {
  name: "ShoppingCart"
}, _hoisted_1232 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2232 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M432 928a48 48 0 1 1 0-96 48 48 0 0 1 0 96zm320 0a48 48 0 1 1 0-96 48 48 0 0 1 0 96zM96 128a32 32 0 0 1 0-64h160a32 32 0 0 1 31.36 25.728L320.64 256H928a32 32 0 0 1 31.296 38.72l-96 448A32 32 0 0 1 832 768H384a32 32 0 0 1-31.36-25.728L229.76 128H96zm314.24 576h395.904l82.304-384H333.44l76.8 384z"
}, null, -1), _hoisted_3231 = [
  _hoisted_2232
];
function _sfc_render232(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1232, _hoisted_3231);
}
var shopping_cart_default = /* @__PURE__ */ export_helper_default(_sfc_main232, [["render", _sfc_render232], ["__file", "shopping-cart.vue"]]);

// src/components/smoking.vue

var _sfc_main233 = {
  name: "Smoking"
}, _hoisted_1233 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2233 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 576v128h640V576H256zm-32-64h704a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32H224a32 32 0 0 1-32-32V544a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3232 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 576h64v128h-64zM256 64h64v320h-64zM128 192h64v192h-64zM64 512h64v256H64z"
}, null, -1), _hoisted_470 = [
  _hoisted_2233,
  _hoisted_3232
];
function _sfc_render233(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1233, _hoisted_470);
}
var smoking_default = /* @__PURE__ */ export_helper_default(_sfc_main233, [["render", _sfc_render233], ["__file", "smoking.vue"]]);

// src/components/soccer.vue

var _sfc_main234 = {
  name: "Soccer"
}, _hoisted_1234 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2234 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M418.496 871.04 152.256 604.8c-16.512 94.016-2.368 178.624 42.944 224 44.928 44.928 129.344 58.752 223.296 42.24zm72.32-18.176a573.056 573.056 0 0 0 224.832-137.216 573.12 573.12 0 0 0 137.216-224.832L533.888 171.84a578.56 578.56 0 0 0-227.52 138.496A567.68 567.68 0 0 0 170.432 532.48l320.384 320.384zM871.04 418.496c16.512-93.952 2.688-178.368-42.24-223.296-44.544-44.544-128.704-58.048-222.592-41.536L871.04 418.496zM149.952 874.048c-112.96-112.96-88.832-408.96 111.168-608.96C461.056 65.152 760.96 36.928 874.048 149.952c113.024 113.024 86.784 411.008-113.152 610.944-199.936 199.936-497.92 226.112-610.944 113.152zm452.544-497.792 22.656-22.656a32 32 0 0 1 45.248 45.248l-22.656 22.656 45.248 45.248A32 32 0 1 1 647.744 512l-45.248-45.248L557.248 512l45.248 45.248a32 32 0 1 1-45.248 45.248L512 557.248l-45.248 45.248L512 647.744a32 32 0 1 1-45.248 45.248l-45.248-45.248-22.656 22.656a32 32 0 1 1-45.248-45.248l22.656-22.656-45.248-45.248A32 32 0 1 1 376.256 512l45.248 45.248L466.752 512l-45.248-45.248a32 32 0 1 1 45.248-45.248L512 466.752l45.248-45.248L512 376.256a32 32 0 0 1 45.248-45.248l45.248 45.248z"
}, null, -1), _hoisted_3233 = [
  _hoisted_2234
];
function _sfc_render234(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1234, _hoisted_3233);
}
var soccer_default = /* @__PURE__ */ export_helper_default(_sfc_main234, [["render", _sfc_render234], ["__file", "soccer.vue"]]);

// src/components/sold-out.vue

var _sfc_main235 = {
  name: "SoldOut"
}, _hoisted_1235 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2235 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"
}, null, -1), _hoisted_3234 = [
  _hoisted_2235
];
function _sfc_render235(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1235, _hoisted_3234);
}
var sold_out_default = /* @__PURE__ */ export_helper_default(_sfc_main235, [["render", _sfc_render235], ["__file", "sold-out.vue"]]);

// src/components/sort-down.vue

var _sfc_main236 = {
  name: "SortDown"
}, _hoisted_1236 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2236 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M576 96v709.568L333.312 562.816A32 32 0 1 0 288 608l297.408 297.344A32 32 0 0 0 640 882.688V96a32 32 0 0 0-64 0z"
}, null, -1), _hoisted_3235 = [
  _hoisted_2236
];
function _sfc_render236(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1236, _hoisted_3235);
}
var sort_down_default = /* @__PURE__ */ export_helper_default(_sfc_main236, [["render", _sfc_render236], ["__file", "sort-down.vue"]]);

// src/components/sort-up.vue

var _sfc_main237 = {
  name: "SortUp"
}, _hoisted_1237 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2237 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 141.248V928a32 32 0 1 0 64 0V218.56l242.688 242.688A32 32 0 1 0 736 416L438.592 118.656A32 32 0 0 0 384 141.248z"
}, null, -1), _hoisted_3236 = [
  _hoisted_2237
];
function _sfc_render237(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1237, _hoisted_3236);
}
var sort_up_default = /* @__PURE__ */ export_helper_default(_sfc_main237, [["render", _sfc_render237], ["__file", "sort-up.vue"]]);

// src/components/sort.vue

var _sfc_main238 = {
  name: "Sort"
}, _hoisted_1238 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2238 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 96a32 32 0 0 1 64 0v786.752a32 32 0 0 1-54.592 22.656L95.936 608a32 32 0 0 1 0-45.312h.128a32 32 0 0 1 45.184 0L384 805.632V96zm192 45.248a32 32 0 0 1 54.592-22.592L928.064 416a32 32 0 0 1 0 45.312h-.128a32 32 0 0 1-45.184 0L640 218.496V928a32 32 0 1 1-64 0V141.248z"
}, null, -1), _hoisted_3237 = [
  _hoisted_2238
];
function _sfc_render238(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1238, _hoisted_3237);
}
var sort_default = /* @__PURE__ */ export_helper_default(_sfc_main238, [["render", _sfc_render238], ["__file", "sort.vue"]]);

// src/components/stamp.vue

var _sfc_main239 = {
  name: "Stamp"
}, _hoisted_1239 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2239 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M624 475.968V640h144a128 128 0 0 1 128 128H128a128 128 0 0 1 128-128h144V475.968a192 192 0 1 1 224 0zM128 896v-64h768v64H128z"
}, null, -1), _hoisted_3238 = [
  _hoisted_2239
];
function _sfc_render239(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1239, _hoisted_3238);
}
var stamp_default = /* @__PURE__ */ export_helper_default(_sfc_main239, [["render", _sfc_render239], ["__file", "stamp.vue"]]);

// src/components/star-filled.vue

var _sfc_main240 = {
  name: "StarFilled"
}, _hoisted_1240 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2240 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
}, null, -1), _hoisted_3239 = [
  _hoisted_2240
];
function _sfc_render240(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1240, _hoisted_3239);
}
var star_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main240, [["render", _sfc_render240], ["__file", "star-filled.vue"]]);

// src/components/star.vue

var _sfc_main241 = {
  name: "Star"
}, _hoisted_1241 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2241 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
}, null, -1), _hoisted_3240 = [
  _hoisted_2241
];
function _sfc_render241(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1241, _hoisted_3240);
}
var star_default = /* @__PURE__ */ export_helper_default(_sfc_main241, [["render", _sfc_render241], ["__file", "star.vue"]]);

// src/components/stopwatch.vue

var _sfc_main242 = {
  name: "Stopwatch"
}, _hoisted_1242 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2242 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _hoisted_3241 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M672 234.88c-39.168 174.464-80 298.624-122.688 372.48-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"
}, null, -1), _hoisted_471 = [
  _hoisted_2242,
  _hoisted_3241
];
function _sfc_render242(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1242, _hoisted_471);
}
var stopwatch_default = /* @__PURE__ */ export_helper_default(_sfc_main242, [["render", _sfc_render242], ["__file", "stopwatch.vue"]]);

// src/components/success-filled.vue

var _sfc_main243 = {
  name: "SuccessFilled"
}, _hoisted_1243 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2243 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
}, null, -1), _hoisted_3242 = [
  _hoisted_2243
];
function _sfc_render243(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1243, _hoisted_3242);
}
var success_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main243, [["render", _sfc_render243], ["__file", "success-filled.vue"]]);

// src/components/sugar.vue

var _sfc_main244 = {
  name: "Sugar"
}, _hoisted_1244 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2244 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m801.728 349.184 4.48 4.48a128 128 0 0 1 0 180.992L534.656 806.144a128 128 0 0 1-181.056 0l-4.48-4.48-19.392 109.696a64 64 0 0 1-108.288 34.176L78.464 802.56a64 64 0 0 1 34.176-108.288l109.76-19.328-4.544-4.544a128 128 0 0 1 0-181.056l271.488-271.488a128 128 0 0 1 181.056 0l4.48 4.48 19.392-109.504a64 64 0 0 1 108.352-34.048l142.592 143.04a64 64 0 0 1-34.24 108.16l-109.248 19.2zm-548.8 198.72h447.168v2.24l60.8-60.8a63.808 63.808 0 0 0 18.752-44.416h-426.88l-89.664 89.728a64.064 64.064 0 0 0-10.24 13.248zm0 64c2.752 4.736 6.144 9.152 10.176 13.248l135.744 135.744a64 64 0 0 0 90.496 0L638.4 611.904H252.928zm490.048-230.976L625.152 263.104a64 64 0 0 0-90.496 0L416.768 380.928h326.208zM123.712 757.312l142.976 142.976 24.32-137.6a25.6 25.6 0 0 0-29.696-29.632l-137.6 24.256zm633.6-633.344-24.32 137.472a25.6 25.6 0 0 0 29.632 29.632l137.28-24.064-142.656-143.04z"
}, null, -1), _hoisted_3243 = [
  _hoisted_2244
];
function _sfc_render244(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1244, _hoisted_3243);
}
var sugar_default = /* @__PURE__ */ export_helper_default(_sfc_main244, [["render", _sfc_render244], ["__file", "sugar.vue"]]);

// src/components/suitcase.vue

var _sfc_main245 = {
  name: "Suitcase"
}, _hoisted_1245 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2245 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 384h768v-64a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v64zm0 64v320a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V448H128zm64-256h640a128 128 0 0 1 128 128v448a128 128 0 0 1-128 128H192A128 128 0 0 1 64 768V320a128 128 0 0 1 128-128z"
}, null, -1), _hoisted_3244 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M384 128v64h256v-64H384zm0-64h256a64 64 0 0 1 64 64v64a64 64 0 0 1-64 64H384a64 64 0 0 1-64-64v-64a64 64 0 0 1 64-64z"
}, null, -1), _hoisted_472 = [
  _hoisted_2245,
  _hoisted_3244
];
function _sfc_render245(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1245, _hoisted_472);
}
var suitcase_default = /* @__PURE__ */ export_helper_default(_sfc_main245, [["render", _sfc_render245], ["__file", "suitcase.vue"]]);

// src/components/sunny.vue

var _sfc_main246 = {
  name: "Sunny"
}, _hoisted_1246 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2246 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 704a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm0-704a32 32 0 0 1 32 32v64a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 768a32 32 0 0 1 32 32v64a32 32 0 1 1-64 0v-64a32 32 0 0 1 32-32zM195.2 195.2a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 1 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm543.104 543.104a32 32 0 0 1 45.248 0l45.248 45.248a32 32 0 0 1-45.248 45.248l-45.248-45.248a32 32 0 0 1 0-45.248zM64 512a32 32 0 0 1 32-32h64a32 32 0 0 1 0 64H96a32 32 0 0 1-32-32zm768 0a32 32 0 0 1 32-32h64a32 32 0 1 1 0 64h-64a32 32 0 0 1-32-32zM195.2 828.8a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248L240.448 828.8a32 32 0 0 1-45.248 0zm543.104-543.104a32 32 0 0 1 0-45.248l45.248-45.248a32 32 0 0 1 45.248 45.248l-45.248 45.248a32 32 0 0 1-45.248 0z"
}, null, -1), _hoisted_3245 = [
  _hoisted_2246
];
function _sfc_render246(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1246, _hoisted_3245);
}
var sunny_default = /* @__PURE__ */ export_helper_default(_sfc_main246, [["render", _sfc_render246], ["__file", "sunny.vue"]]);

// src/components/sunrise.vue

var _sfc_main247 = {
  name: "Sunrise"
}, _hoisted_1247 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2247 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M32 768h960a32 32 0 1 1 0 64H32a32 32 0 1 1 0-64zm129.408-96a352 352 0 0 1 701.184 0h-64.32a288 288 0 0 0-572.544 0h-64.32zM512 128a32 32 0 0 1 32 32v96a32 32 0 0 1-64 0v-96a32 32 0 0 1 32-32zm407.296 168.704a32 32 0 0 1 0 45.248l-67.84 67.84a32 32 0 1 1-45.248-45.248l67.84-67.84a32 32 0 0 1 45.248 0zm-814.592 0a32 32 0 0 1 45.248 0l67.84 67.84a32 32 0 1 1-45.248 45.248l-67.84-67.84a32 32 0 0 1 0-45.248z"
}, null, -1), _hoisted_3246 = [
  _hoisted_2247
];
function _sfc_render247(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1247, _hoisted_3246);
}
var sunrise_default = /* @__PURE__ */ export_helper_default(_sfc_main247, [["render", _sfc_render247], ["__file", "sunrise.vue"]]);

// src/components/sunset.vue

var _sfc_main248 = {
  name: "Sunset"
}, _hoisted_1248 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2248 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M82.56 640a448 448 0 1 1 858.88 0h-67.2a384 384 0 1 0-724.288 0H82.56zM32 704h960q32 0 32 32t-32 32H32q-32 0-32-32t32-32zm256 128h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
}, null, -1), _hoisted_3247 = [
  _hoisted_2248
];
function _sfc_render248(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1248, _hoisted_3247);
}
var sunset_default = /* @__PURE__ */ export_helper_default(_sfc_main248, [["render", _sfc_render248], ["__file", "sunset.vue"]]);

// src/components/switch-button.vue

var _sfc_main249 = {
  name: "SwitchButton"
}, _hoisted_1249 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2249 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"
}, null, -1), _hoisted_3248 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"
}, null, -1), _hoisted_473 = [
  _hoisted_2249,
  _hoisted_3248
];
function _sfc_render249(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1249, _hoisted_473);
}
var switch_button_default = /* @__PURE__ */ export_helper_default(_sfc_main249, [["render", _sfc_render249], ["__file", "switch-button.vue"]]);

// src/components/switch.vue

var _sfc_main250 = {
  name: "Switch"
}, _hoisted_1250 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2250 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M118.656 438.656a32 32 0 0 1 0-45.248L416 96l4.48-3.776A32 32 0 0 1 461.248 96l3.712 4.48a32.064 32.064 0 0 1-3.712 40.832L218.56 384H928a32 32 0 1 1 0 64H141.248a32 32 0 0 1-22.592-9.344zM64 608a32 32 0 0 1 32-32h786.752a32 32 0 0 1 22.656 54.592L608 928l-4.48 3.776a32.064 32.064 0 0 1-40.832-49.024L805.632 640H96a32 32 0 0 1-32-32z"
}, null, -1), _hoisted_3249 = [
  _hoisted_2250
];
function _sfc_render250(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1250, _hoisted_3249);
}
var switch_default = /* @__PURE__ */ export_helper_default(_sfc_main250, [["render", _sfc_render250], ["__file", "switch.vue"]]);

// src/components/takeaway-box.vue

var _sfc_main251 = {
  name: "TakeawayBox"
}, _hoisted_1251 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2251 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M832 384H192v448h640V384zM96 320h832V128H96v192zm800 64v480a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V384H64a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h896a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32h-64zM416 512h192a32 32 0 0 1 0 64H416a32 32 0 0 1 0-64z"
}, null, -1), _hoisted_3250 = [
  _hoisted_2251
];
function _sfc_render251(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1251, _hoisted_3250);
}
var takeaway_box_default = /* @__PURE__ */ export_helper_default(_sfc_main251, [["render", _sfc_render251], ["__file", "takeaway-box.vue"]]);

// src/components/ticket.vue

var _sfc_main252 = {
  name: "Ticket"
}, _hoisted_1252 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2252 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 832H64V640a128 128 0 1 0 0-256V192h576v160h64V192h256v192a128 128 0 1 0 0 256v192H704V672h-64v160zm0-416v192h64V416h-64z"
}, null, -1), _hoisted_3251 = [
  _hoisted_2252
];
function _sfc_render252(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1252, _hoisted_3251);
}
var ticket_default = /* @__PURE__ */ export_helper_default(_sfc_main252, [["render", _sfc_render252], ["__file", "ticket.vue"]]);

// src/components/tickets.vue

var _sfc_main253 = {
  name: "Tickets"
}, _hoisted_1253 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2253 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M192 128v768h640V128H192zm-32-64h704a32 32 0 0 1 32 32v832a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32zm160 448h384v64H320v-64zm0-192h192v64H320v-64zm0 384h384v64H320v-64z"
}, null, -1), _hoisted_3252 = [
  _hoisted_2253
];
function _sfc_render253(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1253, _hoisted_3252);
}
var tickets_default = /* @__PURE__ */ export_helper_default(_sfc_main253, [["render", _sfc_render253], ["__file", "tickets.vue"]]);

// src/components/timer.vue

var _sfc_main254 = {
  name: "Timer"
}, _hoisted_1254 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2254 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 896a320 320 0 1 0 0-640 320 320 0 0 0 0 640zm0 64a384 384 0 1 1 0-768 384 384 0 0 1 0 768z"
}, null, -1), _hoisted_3253 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 320a32 32 0 0 1 32 32l-.512 224a32 32 0 1 1-64 0L480 352a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_474 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M448 576a64 64 0 1 0 128 0 64 64 0 1 0-128 0zm96-448v128h-64V128h-96a32 32 0 0 1 0-64h256a32 32 0 1 1 0 64h-96z"
}, null, -1), _hoisted_519 = [
  _hoisted_2254,
  _hoisted_3253,
  _hoisted_474
];
function _sfc_render254(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1254, _hoisted_519);
}
var timer_default = /* @__PURE__ */ export_helper_default(_sfc_main254, [["render", _sfc_render254], ["__file", "timer.vue"]]);

// src/components/toilet-paper.vue

var _sfc_main255 = {
  name: "ToiletPaper"
}, _hoisted_1255 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2255 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M595.2 128H320a192 192 0 0 0-192 192v576h384V352c0-90.496 32.448-171.2 83.2-224zM736 64c123.712 0 224 128.96 224 288S859.712 640 736 640H576v320H64V320A256 256 0 0 1 320 64h416zM576 352v224h160c84.352 0 160-97.28 160-224s-75.648-224-160-224-160 97.28-160 224z"
}, null, -1), _hoisted_3254 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M736 448c-35.328 0-64-43.008-64-96s28.672-96 64-96 64 43.008 64 96-28.672 96-64 96z"
}, null, -1), _hoisted_475 = [
  _hoisted_2255,
  _hoisted_3254
];
function _sfc_render255(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1255, _hoisted_475);
}
var toilet_paper_default = /* @__PURE__ */ export_helper_default(_sfc_main255, [["render", _sfc_render255], ["__file", "toilet-paper.vue"]]);

// src/components/tools.vue

var _sfc_main256 = {
  name: "Tools"
}, _hoisted_1256 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2256 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
}, null, -1), _hoisted_3255 = [
  _hoisted_2256
];
function _sfc_render256(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1256, _hoisted_3255);
}
var tools_default = /* @__PURE__ */ export_helper_default(_sfc_main256, [["render", _sfc_render256], ["__file", "tools.vue"]]);

// src/components/top-left.vue

var _sfc_main257 = {
  name: "TopLeft"
}, _hoisted_1257 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2257 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M256 256h416a32 32 0 1 0 0-64H224a32 32 0 0 0-32 32v448a32 32 0 0 0 64 0V256z"
}, null, -1), _hoisted_3256 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M246.656 201.344a32 32 0 0 0-45.312 45.312l544 544a32 32 0 0 0 45.312-45.312l-544-544z"
}, null, -1), _hoisted_476 = [
  _hoisted_2257,
  _hoisted_3256
];
function _sfc_render257(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1257, _hoisted_476);
}
var top_left_default = /* @__PURE__ */ export_helper_default(_sfc_main257, [["render", _sfc_render257], ["__file", "top-left.vue"]]);

// src/components/top-right.vue

var _sfc_main258 = {
  name: "TopRight"
}, _hoisted_1258 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2258 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0V256z"
}, null, -1), _hoisted_3257 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M777.344 201.344a32 32 0 0 1 45.312 45.312l-544 544a32 32 0 0 1-45.312-45.312l544-544z"
}, null, -1), _hoisted_477 = [
  _hoisted_2258,
  _hoisted_3257
];
function _sfc_render258(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1258, _hoisted_477);
}
var top_right_default = /* @__PURE__ */ export_helper_default(_sfc_main258, [["render", _sfc_render258], ["__file", "top-right.vue"]]);

// src/components/top.vue

var _sfc_main259 = {
  name: "Top"
}, _hoisted_1259 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2259 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
}, null, -1), _hoisted_3258 = [
  _hoisted_2259
];
function _sfc_render259(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1259, _hoisted_3258);
}
var top_default = /* @__PURE__ */ export_helper_default(_sfc_main259, [["render", _sfc_render259], ["__file", "top.vue"]]);

// src/components/trend-charts.vue

var _sfc_main260 = {
  name: "TrendCharts"
}, _hoisted_1260 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2260 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 896V128h768v768H128zm291.712-327.296 128 102.4 180.16-201.792-47.744-42.624-139.84 156.608-128-102.4-180.16 201.792 47.744 42.624 139.84-156.608zM816 352a48 48 0 1 0-96 0 48 48 0 0 0 96 0z"
}, null, -1), _hoisted_3259 = [
  _hoisted_2260
];
function _sfc_render260(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1260, _hoisted_3259);
}
var trend_charts_default = /* @__PURE__ */ export_helper_default(_sfc_main260, [["render", _sfc_render260], ["__file", "trend-charts.vue"]]);

// src/components/trophy.vue

var _sfc_main261 = {
  name: "Trophy"
}, _hoisted_1261 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2261 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 896V702.08A256.256 256.256 0 0 1 264.064 512h-32.64a96 96 0 0 1-91.968-68.416L93.632 290.88a76.8 76.8 0 0 1 73.6-98.88H256V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32v96h88.768a76.8 76.8 0 0 1 73.6 98.88L884.48 443.52A96 96 0 0 1 792.576 512h-32.64A256.256 256.256 0 0 1 544 702.08V896h128a32 32 0 1 1 0 64H352a32 32 0 1 1 0-64h128zm224-448V128H320v320a192 192 0 1 0 384 0zm64 0h24.576a32 32 0 0 0 30.656-22.784l45.824-152.768A12.8 12.8 0 0 0 856.768 256H768v192zm-512 0V256h-88.768a12.8 12.8 0 0 0-12.288 16.448l45.824 152.768A32 32 0 0 0 231.424 448H256z"
}, null, -1), _hoisted_3260 = [
  _hoisted_2261
];
function _sfc_render261(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1261, _hoisted_3260);
}
var trophy_default = /* @__PURE__ */ export_helper_default(_sfc_main261, [["render", _sfc_render261], ["__file", "trophy.vue"]]);

// src/components/turn-off.vue

var _sfc_main262 = {
  name: "TurnOff"
}, _hoisted_1262 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2262 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724H329.956zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
}, null, -1), _hoisted_3261 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M329.956 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454zm0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088z"
}, null, -1), _hoisted_478 = [
  _hoisted_2262,
  _hoisted_3261
];
function _sfc_render262(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1262, _hoisted_478);
}
var turn_off_default = /* @__PURE__ */ export_helper_default(_sfc_main262, [["render", _sfc_render262], ["__file", "turn-off.vue"]]);

// src/components/umbrella.vue

var _sfc_main263 = {
  name: "Umbrella"
}, _hoisted_1263 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2263 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M320 768a32 32 0 1 1 64 0 64 64 0 0 0 128 0V512H64a448 448 0 1 1 896 0H576v256a128 128 0 1 1-256 0zm570.688-320a384.128 384.128 0 0 0-757.376 0h757.376z"
}, null, -1), _hoisted_3262 = [
  _hoisted_2263
];
function _sfc_render263(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1263, _hoisted_3262);
}
var umbrella_default = /* @__PURE__ */ export_helper_default(_sfc_main263, [["render", _sfc_render263], ["__file", "umbrella.vue"]]);

// src/components/unlock.vue

var _sfc_main264 = {
  name: "Unlock"
}, _hoisted_1264 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2264 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
}, null, -1), _hoisted_3263 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm178.304-295.296A192.064 192.064 0 0 0 320 320v64h352l96 38.4V448H256V320a256 256 0 0 1 493.76-95.104l-59.456 23.808z"
}, null, -1), _hoisted_479 = [
  _hoisted_2264,
  _hoisted_3263
];
function _sfc_render264(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1264, _hoisted_479);
}
var unlock_default = /* @__PURE__ */ export_helper_default(_sfc_main264, [["render", _sfc_render264], ["__file", "unlock.vue"]]);

// src/components/upload-filled.vue

var _sfc_main265 = {
  name: "UploadFilled"
}, _hoisted_1265 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2265 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M544 864V672h128L512 480 352 672h128v192H320v-1.6c-5.376.32-10.496 1.6-16 1.6A240 240 0 0 1 64 624c0-123.136 93.12-223.488 212.608-237.248A239.808 239.808 0 0 1 512 192a239.872 239.872 0 0 1 235.456 194.752c119.488 13.76 212.48 114.112 212.48 237.248a240 240 0 0 1-240 240c-5.376 0-10.56-1.28-16-1.6v1.6H544z"
}, null, -1), _hoisted_3264 = [
  _hoisted_2265
];
function _sfc_render265(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1265, _hoisted_3264);
}
var upload_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main265, [["render", _sfc_render265], ["__file", "upload-filled.vue"]]);

// src/components/upload.vue

var _sfc_main266 = {
  name: "Upload"
}, _hoisted_1266 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2266 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
}, null, -1), _hoisted_3265 = [
  _hoisted_2266
];
function _sfc_render266(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1266, _hoisted_3265);
}
var upload_default = /* @__PURE__ */ export_helper_default(_sfc_main266, [["render", _sfc_render266], ["__file", "upload.vue"]]);

// src/components/user-filled.vue

var _sfc_main267 = {
  name: "UserFilled"
}, _hoisted_1267 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2267 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0zm544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"
}, null, -1), _hoisted_3266 = [
  _hoisted_2267
];
function _sfc_render267(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1267, _hoisted_3266);
}
var user_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main267, [["render", _sfc_render267], ["__file", "user-filled.vue"]]);

// src/components/user.vue

var _sfc_main268 = {
  name: "User"
}, _hoisted_1268 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2268 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z"
}, null, -1), _hoisted_3267 = [
  _hoisted_2268
];
function _sfc_render268(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1268, _hoisted_3267);
}
var user_default = /* @__PURE__ */ export_helper_default(_sfc_main268, [["render", _sfc_render268], ["__file", "user.vue"]]);

// src/components/van.vue

var _sfc_main269 = {
  name: "Van"
}, _hoisted_1269 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2269 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128.896 736H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h576a32 32 0 0 1 32 32v96h164.544a32 32 0 0 1 31.616 27.136l54.144 352A32 32 0 0 1 922.688 736h-91.52a144 144 0 1 1-286.272 0H415.104a144 144 0 1 1-286.272 0zm23.36-64a143.872 143.872 0 0 1 239.488 0H568.32c17.088-25.6 42.24-45.376 71.744-55.808V256H128v416h24.256zm655.488 0h77.632l-19.648-128H704v64.896A144 144 0 0 1 807.744 672zm48.128-192-14.72-96H704v96h151.872zM688 832a80 80 0 1 0 0-160 80 80 0 0 0 0 160zm-416 0a80 80 0 1 0 0-160 80 80 0 0 0 0 160z"
}, null, -1), _hoisted_3268 = [
  _hoisted_2269
];
function _sfc_render269(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1269, _hoisted_3268);
}
var van_default = /* @__PURE__ */ export_helper_default(_sfc_main269, [["render", _sfc_render269], ["__file", "van.vue"]]);

// src/components/video-camera-filled.vue

var _sfc_main270 = {
  name: "VideoCameraFilled"
}, _hoisted_1270 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2270 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m768 576 192-64v320l-192-64v96a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V480a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v96zM192 768v64h384v-64H192zm192-480a160 160 0 0 1 320 0 160 160 0 0 1-320 0zm64 0a96 96 0 1 0 192.064-.064A96 96 0 0 0 448 288zm-320 32a128 128 0 1 1 256.064.064A128 128 0 0 1 128 320zm64 0a64 64 0 1 0 128 0 64 64 0 0 0-128 0z"
}, null, -1), _hoisted_3269 = [
  _hoisted_2270
];
function _sfc_render270(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1270, _hoisted_3269);
}
var video_camera_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main270, [["render", _sfc_render270], ["__file", "video-camera-filled.vue"]]);

// src/components/video-camera.vue

var _sfc_main271 = {
  name: "VideoCamera"
}, _hoisted_1271 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2271 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 768V256H128v512h576zm64-416 192-96v512l-192-96v128a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V224a32 32 0 0 1 32-32h640a32 32 0 0 1 32 32v128zm0 71.552v176.896l128 64V359.552l-128 64zM192 320h192v64H192v-64z"
}, null, -1), _hoisted_3270 = [
  _hoisted_2271
];
function _sfc_render271(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1271, _hoisted_3270);
}
var video_camera_default = /* @__PURE__ */ export_helper_default(_sfc_main271, [["render", _sfc_render271], ["__file", "video-camera.vue"]]);

// src/components/video-pause.vue

var _sfc_main272 = {
  name: "VideoPause"
}, _hoisted_1272 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2272 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-96-544q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32zm192 0q32 0 32 32v256q0 32-32 32t-32-32V384q0-32 32-32z"
}, null, -1), _hoisted_3271 = [
  _hoisted_2272
];
function _sfc_render272(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1272, _hoisted_3271);
}
var video_pause_default = /* @__PURE__ */ export_helper_default(_sfc_main272, [["render", _sfc_render272], ["__file", "video-pause.vue"]]);

// src/components/video-play.vue

var _sfc_main273 = {
  name: "VideoPlay"
}, _hoisted_1273 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2273 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm-48-247.616L668.608 512 464 375.616v272.768zm10.624-342.656 249.472 166.336a48 48 0 0 1 0 79.872L474.624 718.272A48 48 0 0 1 400 678.336V345.6a48 48 0 0 1 74.624-39.936z"
}, null, -1), _hoisted_3272 = [
  _hoisted_2273
];
function _sfc_render273(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1273, _hoisted_3272);
}
var video_play_default = /* @__PURE__ */ export_helper_default(_sfc_main273, [["render", _sfc_render273], ["__file", "video-play.vue"]]);

// src/components/view.vue

var _sfc_main274 = {
  name: "View"
}, _hoisted_1274 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2274 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), _hoisted_3273 = [
  _hoisted_2274
];
function _sfc_render274(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1274, _hoisted_3273);
}
var view_default = /* @__PURE__ */ export_helper_default(_sfc_main274, [["render", _sfc_render274], ["__file", "view.vue"]]);

// src/components/wallet-filled.vue

var _sfc_main275 = {
  name: "WalletFilled"
}, _hoisted_1275 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2275 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M688 512a112 112 0 1 0 0 224h208v160H128V352h768v160H688zm32 160h-32a48 48 0 0 1 0-96h32a48 48 0 0 1 0 96zm-80-544 128 160H384l256-160z"
}, null, -1), _hoisted_3274 = [
  _hoisted_2275
];
function _sfc_render275(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1275, _hoisted_3274);
}
var wallet_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main275, [["render", _sfc_render275], ["__file", "wallet-filled.vue"]]);

// src/components/wallet.vue

var _sfc_main276 = {
  name: "Wallet"
}, _hoisted_1276 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2276 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M640 288h-64V128H128v704h384v32a32 32 0 0 0 32 32H96a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32h512a32 32 0 0 1 32 32v192z"
}, null, -1), _hoisted_3275 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M128 320v512h768V320H128zm-32-64h832a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V288a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_480 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M704 640a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
}, null, -1), _hoisted_520 = [
  _hoisted_2276,
  _hoisted_3275,
  _hoisted_480
];
function _sfc_render276(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1276, _hoisted_520);
}
var wallet_default = /* @__PURE__ */ export_helper_default(_sfc_main276, [["render", _sfc_render276], ["__file", "wallet.vue"]]);

// src/components/warning-filled.vue

var _sfc_main277 = {
  name: "WarningFilled"
}, _hoisted_1277 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2277 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
}, null, -1), _hoisted_3276 = [
  _hoisted_2277
];
function _sfc_render277(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1277, _hoisted_3276);
}
var warning_filled_default = /* @__PURE__ */ export_helper_default(_sfc_main277, [["render", _sfc_render277], ["__file", "warning-filled.vue"]]);

// src/components/warning.vue

var _sfc_main278 = {
  name: "Warning"
}, _hoisted_1278 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2278 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768zm48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_3277 = [
  _hoisted_2278
];
function _sfc_render278(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1278, _hoisted_3277);
}
var warning_default = /* @__PURE__ */ export_helper_default(_sfc_main278, [["render", _sfc_render278], ["__file", "warning.vue"]]);

// src/components/watch.vue

var _sfc_main279 = {
  name: "Watch"
}, _hoisted_1279 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2279 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M512 768a256 256 0 1 0 0-512 256 256 0 0 0 0 512zm0 64a320 320 0 1 1 0-640 320 320 0 0 1 0 640z"
}, null, -1), _hoisted_3278 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 352a32 32 0 0 1 32 32v160a32 32 0 0 1-64 0V384a32 32 0 0 1 32-32z"
}, null, -1), _hoisted_481 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M480 512h128q32 0 32 32t-32 32H480q-32 0-32-32t32-32zm128-256V128H416v128h-64V64h320v192h-64zM416 768v128h192V768h64v192H352V768h64z"
}, null, -1), _hoisted_521 = [
  _hoisted_2279,
  _hoisted_3278,
  _hoisted_481
];
function _sfc_render279(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1279, _hoisted_521);
}
var watch_default = /* @__PURE__ */ export_helper_default(_sfc_main279, [["render", _sfc_render279], ["__file", "watch.vue"]]);

// src/components/watermelon.vue

var _sfc_main280 = {
  name: "Watermelon"
}, _hoisted_1280 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2280 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m683.072 600.32-43.648 162.816-61.824-16.512 53.248-198.528L576 493.248l-158.4 158.4-45.248-45.248 158.4-158.4-55.616-55.616-198.528 53.248-16.512-61.824 162.816-43.648L282.752 200A384 384 0 0 0 824 741.248L683.072 600.32zm231.552 141.056a448 448 0 1 1-632-632l632 632z"
}, null, -1), _hoisted_3279 = [
  _hoisted_2280
];
function _sfc_render280(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1280, _hoisted_3279);
}
var watermelon_default = /* @__PURE__ */ export_helper_default(_sfc_main280, [["render", _sfc_render280], ["__file", "watermelon.vue"]]);

// src/components/wind-power.vue

var _sfc_main281 = {
  name: "WindPower"
}, _hoisted_1281 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2281 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "M160 64q32 0 32 32v832q0 32-32 32t-32-32V96q0-32 32-32zm416 354.624 128-11.584V168.96l-128-11.52v261.12zm-64 5.824V151.552L320 134.08V160h-64V64l616.704 56.064A96 96 0 0 1 960 215.68v144.64a96 96 0 0 1-87.296 95.616L256 512V224h64v217.92l192-17.472zm256-23.232 98.88-8.96A32 32 0 0 0 896 360.32V215.68a32 32 0 0 0-29.12-31.872l-98.88-8.96v226.368z"
}, null, -1), _hoisted_3280 = [
  _hoisted_2281
];
function _sfc_render281(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1281, _hoisted_3280);
}
var wind_power_default = /* @__PURE__ */ export_helper_default(_sfc_main281, [["render", _sfc_render281], ["__file", "wind-power.vue"]]);

// src/components/zoom-in.vue

var _sfc_main282 = {
  name: "ZoomIn"
}, _hoisted_1282 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2282 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zm-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96z"
}, null, -1), _hoisted_3281 = [
  _hoisted_2282
];
function _sfc_render282(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1282, _hoisted_3281);
}
var zoom_in_default = /* @__PURE__ */ export_helper_default(_sfc_main282, [["render", _sfc_render282], ["__file", "zoom-in.vue"]]);

// src/components/zoom-out.vue

var _sfc_main283 = {
  name: "ZoomOut"
}, _hoisted_1283 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_2283 = /* @__PURE__ */ (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  fill: "currentColor",
  d: "m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704zM352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64z"
}, null, -1), _hoisted_3282 = [
  _hoisted_2283
];
function _sfc_render283(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1283, _hoisted_3282);
}
var zoom_out_default = /* @__PURE__ */ export_helper_default(_sfc_main283, [["render", _sfc_render283], ["__file", "zoom-out.vue"]]);



/***/ }),

/***/ 163:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ct": () => (/* binding */ Ee),
/* harmony export */   "fi": () => (/* binding */ yn)
/* harmony export */ });
/* unused harmony exports afterMain, afterRead, afterWrite, applyStyles, arrow, auto, basePlacements, beforeMain, beforeRead, beforeWrite, bottom, clippingParents, computeStyles, createPopperBase, createPopperLite, detectOverflow, end, eventListeners, flip, hide, left, main, modifierPhases, offset, popper, popperGenerator, popperOffsets, preventOverflow, read, reference, right, start, top, variationPlacements, viewport, write */
var E="top",R="bottom",W="right",P="left",me="auto",G=[E,R,W,P],U="start",J="end",Xe="clippingParents",je="viewport",K="popper",Ye="reference",De=G.reduce(function(t,e){return t.concat([e+"-"+U,e+"-"+J])},[]),Ee=[].concat(G,[me]).reduce(function(t,e){return t.concat([e,e+"-"+U,e+"-"+J])},[]),Ge="beforeRead",Je="read",Ke="afterRead",Qe="beforeMain",Ze="main",et="afterMain",tt="beforeWrite",nt="write",rt="afterWrite",ot=[Ge,Je,Ke,Qe,Ze,et,tt,nt,rt];function C(t){return t?(t.nodeName||"").toLowerCase():null}function H(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function Q(t){var e=H(t).Element;return t instanceof e||t instanceof Element}function B(t){var e=H(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Pe(t){if(typeof ShadowRoot=="undefined")return!1;var e=H(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Mt(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var r=e.styles[n]||{},o=e.attributes[n]||{},i=e.elements[n];!B(i)||!C(i)||(Object.assign(i.style,r),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function Rt(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(r){var o=e.elements[r],i=e.attributes[r]||{},a=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:n[r]),s=a.reduce(function(f,c){return f[c]="",f},{});!B(o)||!C(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(f){o.removeAttribute(f)}))})}}var Ae={name:"applyStyles",enabled:!0,phase:"write",fn:Mt,effect:Rt,requires:["computeStyles"]};function q(t){return t.split("-")[0]}var X=Math.max,ve=Math.min,Z=Math.round;function ee(t,e){e===void 0&&(e=!1);var n=t.getBoundingClientRect(),r=1,o=1;if(B(t)&&e){var i=t.offsetHeight,a=t.offsetWidth;a>0&&(r=Z(n.width)/a||1),i>0&&(o=Z(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function ke(t){var e=ee(t),n=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:r}}function it(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Pe(n)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function N(t){return H(t).getComputedStyle(t)}function Wt(t){return["table","td","th"].indexOf(C(t))>=0}function I(t){return((Q(t)?t.ownerDocument:t.document)||window.document).documentElement}function ge(t){return C(t)==="html"?t:t.assignedSlot||t.parentNode||(Pe(t)?t.host:null)||I(t)}function at(t){return!B(t)||N(t).position==="fixed"?null:t.offsetParent}function Bt(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&B(t)){var r=N(t);if(r.position==="fixed")return null}var o=ge(t);for(Pe(o)&&(o=o.host);B(o)&&["html","body"].indexOf(C(o))<0;){var i=N(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function se(t){for(var e=H(t),n=at(t);n&&Wt(n)&&N(n).position==="static";)n=at(n);return n&&(C(n)==="html"||C(n)==="body"&&N(n).position==="static")?e:n||Bt(t)||e}function Le(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function fe(t,e,n){return X(t,ve(e,n))}function St(t,e,n){var r=fe(t,e,n);return r>n?n:r}function st(){return{top:0,right:0,bottom:0,left:0}}function ft(t){return Object.assign({},st(),t)}function ct(t,e){return e.reduce(function(n,r){return n[r]=t,n},{})}var Tt=function(t,e){return t=typeof t=="function"?t(Object.assign({},e.rects,{placement:e.placement})):t,ft(typeof t!="number"?t:ct(t,G))};function Ht(t){var e,n=t.state,r=t.name,o=t.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=q(n.placement),f=Le(s),c=[P,W].indexOf(s)>=0,u=c?"height":"width";if(!(!i||!a)){var m=Tt(o.padding,n),v=ke(i),l=f==="y"?E:P,h=f==="y"?R:W,p=n.rects.reference[u]+n.rects.reference[f]-a[f]-n.rects.popper[u],g=a[f]-n.rects.reference[f],x=se(i),y=x?f==="y"?x.clientHeight||0:x.clientWidth||0:0,$=p/2-g/2,d=m[l],b=y-v[u]-m[h],w=y/2-v[u]/2+$,O=fe(d,w,b),j=f;n.modifiersData[r]=(e={},e[j]=O,e.centerOffset=O-w,e)}}function Ct(t){var e=t.state,n=t.options,r=n.element,o=r===void 0?"[data-popper-arrow]":r;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||!it(e.elements.popper,o)||(e.elements.arrow=o))}var pt={name:"arrow",enabled:!0,phase:"main",fn:Ht,effect:Ct,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function te(t){return t.split("-")[1]}var qt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Vt(t){var e=t.x,n=t.y,r=window,o=r.devicePixelRatio||1;return{x:Z(e*o)/o||0,y:Z(n*o)/o||0}}function ut(t){var e,n=t.popper,r=t.popperRect,o=t.placement,i=t.variation,a=t.offsets,s=t.position,f=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,m=t.isFixed,v=a.x,l=v===void 0?0:v,h=a.y,p=h===void 0?0:h,g=typeof u=="function"?u({x:l,y:p}):{x:l,y:p};l=g.x,p=g.y;var x=a.hasOwnProperty("x"),y=a.hasOwnProperty("y"),$=P,d=E,b=window;if(c){var w=se(n),O="clientHeight",j="clientWidth";if(w===H(n)&&(w=I(n),N(w).position!=="static"&&s==="absolute"&&(O="scrollHeight",j="scrollWidth")),w=w,o===E||(o===P||o===W)&&i===J){d=R;var A=m&&w===b&&b.visualViewport?b.visualViewport.height:w[O];p-=A-r.height,p*=f?1:-1}if(o===P||(o===E||o===R)&&i===J){$=W;var k=m&&w===b&&b.visualViewport?b.visualViewport.width:w[j];l-=k-r.width,l*=f?1:-1}}var D=Object.assign({position:s},c&&qt),S=u===!0?Vt({x:l,y:p}):{x:l,y:p};if(l=S.x,p=S.y,f){var L;return Object.assign({},D,(L={},L[d]=y?"0":"",L[$]=x?"0":"",L.transform=(b.devicePixelRatio||1)<=1?"translate("+l+"px, "+p+"px)":"translate3d("+l+"px, "+p+"px, 0)",L))}return Object.assign({},D,(e={},e[d]=y?p+"px":"",e[$]=x?l+"px":"",e.transform="",e))}function Nt(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=r===void 0?!0:r,i=n.adaptive,a=i===void 0?!0:i,s=n.roundOffsets,f=s===void 0?!0:s,c={placement:q(e.placement),variation:te(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ut(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ut(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Me={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Nt,data:{}},ye={passive:!0};function It(t){var e=t.state,n=t.instance,r=t.options,o=r.scroll,i=o===void 0?!0:o,a=r.resize,s=a===void 0?!0:a,f=H(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",n.update,ye)}),s&&f.addEventListener("resize",n.update,ye),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",n.update,ye)}),s&&f.removeEventListener("resize",n.update,ye)}}var Re={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:It,data:{}},_t={left:"right",right:"left",bottom:"top",top:"bottom"};function be(t){return t.replace(/left|right|bottom|top/g,function(e){return _t[e]})}var zt={start:"end",end:"start"};function lt(t){return t.replace(/start|end/g,function(e){return zt[e]})}function We(t){var e=H(t),n=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:n,scrollTop:r}}function Be(t){return ee(I(t)).left+We(t).scrollLeft}function Ft(t){var e=H(t),n=I(t),r=e.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+Be(t),y:s}}function Ut(t){var e,n=I(t),r=We(t),o=(e=t.ownerDocument)==null?void 0:e.body,i=X(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=X(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+Be(t),f=-r.scrollTop;return N(o||n).direction==="rtl"&&(s+=X(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:f}}function Se(t){var e=N(t),n=e.overflow,r=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function dt(t){return["html","body","#document"].indexOf(C(t))>=0?t.ownerDocument.body:B(t)&&Se(t)?t:dt(ge(t))}function ce(t,e){var n;e===void 0&&(e=[]);var r=dt(t),o=r===((n=t.ownerDocument)==null?void 0:n.body),i=H(r),a=o?[i].concat(i.visualViewport||[],Se(r)?r:[]):r,s=e.concat(a);return o?s:s.concat(ce(ge(a)))}function Te(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Xt(t){var e=ee(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function ht(t,e){return e===je?Te(Ft(t)):Q(e)?Xt(e):Te(Ut(I(t)))}function Yt(t){var e=ce(ge(t)),n=["absolute","fixed"].indexOf(N(t).position)>=0,r=n&&B(t)?se(t):t;return Q(r)?e.filter(function(o){return Q(o)&&it(o,r)&&C(o)!=="body"}):[]}function Gt(t,e,n){var r=e==="clippingParents"?Yt(t):[].concat(e),o=[].concat(r,[n]),i=o[0],a=o.reduce(function(s,f){var c=ht(t,f);return s.top=X(c.top,s.top),s.right=ve(c.right,s.right),s.bottom=ve(c.bottom,s.bottom),s.left=X(c.left,s.left),s},ht(t,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function mt(t){var e=t.reference,n=t.element,r=t.placement,o=r?q(r):null,i=r?te(r):null,a=e.x+e.width/2-n.width/2,s=e.y+e.height/2-n.height/2,f;switch(o){case E:f={x:a,y:e.y-n.height};break;case R:f={x:a,y:e.y+e.height};break;case W:f={x:e.x+e.width,y:s};break;case P:f={x:e.x-n.width,y:s};break;default:f={x:e.x,y:e.y}}var c=o?Le(o):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case U:f[c]=f[c]-(e[u]/2-n[u]/2);break;case J:f[c]=f[c]+(e[u]/2-n[u]/2);break}}return f}function ne(t,e){e===void 0&&(e={});var n=e,r=n.placement,o=r===void 0?t.placement:r,i=n.boundary,a=i===void 0?Xe:i,s=n.rootBoundary,f=s===void 0?je:s,c=n.elementContext,u=c===void 0?K:c,m=n.altBoundary,v=m===void 0?!1:m,l=n.padding,h=l===void 0?0:l,p=ft(typeof h!="number"?h:ct(h,G)),g=u===K?Ye:K,x=t.rects.popper,y=t.elements[v?g:u],$=Gt(Q(y)?y:y.contextElement||I(t.elements.popper),a,f),d=ee(t.elements.reference),b=mt({reference:d,element:x,strategy:"absolute",placement:o}),w=Te(Object.assign({},x,b)),O=u===K?w:d,j={top:$.top-O.top+p.top,bottom:O.bottom-$.bottom+p.bottom,left:$.left-O.left+p.left,right:O.right-$.right+p.right},A=t.modifiersData.offset;if(u===K&&A){var k=A[o];Object.keys(j).forEach(function(D){var S=[W,R].indexOf(D)>=0?1:-1,L=[E,R].indexOf(D)>=0?"y":"x";j[D]+=k[L]*S})}return j}function Jt(t,e){e===void 0&&(e={});var n=e,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,f=n.allowedAutoPlacements,c=f===void 0?Ee:f,u=te(r),m=u?s?De:De.filter(function(h){return te(h)===u}):G,v=m.filter(function(h){return c.indexOf(h)>=0});v.length===0&&(v=m);var l=v.reduce(function(h,p){return h[p]=ne(t,{placement:p,boundary:o,rootBoundary:i,padding:a})[q(p)],h},{});return Object.keys(l).sort(function(h,p){return l[h]-l[p]})}function Kt(t){if(q(t)===me)return[];var e=be(t);return[lt(t),e,lt(e)]}function Qt(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!0:a,f=n.fallbackPlacements,c=n.padding,u=n.boundary,m=n.rootBoundary,v=n.altBoundary,l=n.flipVariations,h=l===void 0?!0:l,p=n.allowedAutoPlacements,g=e.options.placement,x=q(g),y=x===g,$=f||(y||!h?[be(g)]:Kt(g)),d=[g].concat($).reduce(function(z,V){return z.concat(q(V)===me?Jt(e,{placement:V,boundary:u,rootBoundary:m,padding:c,flipVariations:h,allowedAutoPlacements:p}):V)},[]),b=e.rects.reference,w=e.rects.popper,O=new Map,j=!0,A=d[0],k=0;k<d.length;k++){var D=d[k],S=q(D),L=te(D)===U,re=[E,R].indexOf(S)>=0,oe=re?"width":"height",M=ne(e,{placement:D,boundary:u,rootBoundary:m,altBoundary:v,padding:c}),T=re?L?W:P:L?R:E;b[oe]>w[oe]&&(T=be(T));var pe=be(T),_=[];if(i&&_.push(M[S]<=0),s&&_.push(M[T]<=0,M[pe]<=0),_.every(function(z){return z})){A=D,j=!1;break}O.set(D,_)}if(j)for(var ue=h?3:1,xe=function(z){var V=d.find(function(de){var ae=O.get(de);if(ae)return ae.slice(0,z).every(function(Y){return Y})});if(V)return A=V,"break"},ie=ue;ie>0;ie--){var le=xe(ie);if(le==="break")break}e.placement!==A&&(e.modifiersData[r]._skip=!0,e.placement=A,e.reset=!0)}}var vt={name:"flip",enabled:!0,phase:"main",fn:Qt,requiresIfExists:["offset"],data:{_skip:!1}};function gt(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function yt(t){return[E,W,R,P].some(function(e){return t[e]>=0})}function Zt(t){var e=t.state,n=t.name,r=e.rects.reference,o=e.rects.popper,i=e.modifiersData.preventOverflow,a=ne(e,{elementContext:"reference"}),s=ne(e,{altBoundary:!0}),f=gt(a,r),c=gt(s,o,i),u=yt(f),m=yt(c);e.modifiersData[n]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:m},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":m})}var bt={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Zt};function en(t,e,n){var r=q(t),o=[P,E].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[P,W].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}function tn(t){var e=t.state,n=t.options,r=t.name,o=n.offset,i=o===void 0?[0,0]:o,a=Ee.reduce(function(u,m){return u[m]=en(m,e.rects,i),u},{}),s=a[e.placement],f=s.x,c=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=a}var wt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:tn};function nn(t){var e=t.state,n=t.name;e.modifiersData[n]=mt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var He={name:"popperOffsets",enabled:!0,phase:"read",fn:nn,data:{}};function rn(t){return t==="x"?"y":"x"}function on(t){var e=t.state,n=t.options,r=t.name,o=n.mainAxis,i=o===void 0?!0:o,a=n.altAxis,s=a===void 0?!1:a,f=n.boundary,c=n.rootBoundary,u=n.altBoundary,m=n.padding,v=n.tether,l=v===void 0?!0:v,h=n.tetherOffset,p=h===void 0?0:h,g=ne(e,{boundary:f,rootBoundary:c,padding:m,altBoundary:u}),x=q(e.placement),y=te(e.placement),$=!y,d=Le(x),b=rn(d),w=e.modifiersData.popperOffsets,O=e.rects.reference,j=e.rects.popper,A=typeof p=="function"?p(Object.assign({},e.rects,{placement:e.placement})):p,k=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),D=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,S={x:0,y:0};if(w){if(i){var L,re=d==="y"?E:P,oe=d==="y"?R:W,M=d==="y"?"height":"width",T=w[d],pe=T+g[re],_=T-g[oe],ue=l?-j[M]/2:0,xe=y===U?O[M]:j[M],ie=y===U?-j[M]:-O[M],le=e.elements.arrow,z=l&&le?ke(le):{width:0,height:0},V=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:st(),de=V[re],ae=V[oe],Y=fe(0,O[M],z[M]),jt=$?O[M]/2-ue-Y-de-k.mainAxis:xe-Y-de-k.mainAxis,Dt=$?-O[M]/2+ue+Y+ae+k.mainAxis:ie+Y+ae+k.mainAxis,Oe=e.elements.arrow&&se(e.elements.arrow),Et=Oe?d==="y"?Oe.clientTop||0:Oe.clientLeft||0:0,Ce=(L=D==null?void 0:D[d])!=null?L:0,Pt=T+jt-Ce-Et,At=T+Dt-Ce,qe=fe(l?ve(pe,Pt):pe,T,l?X(_,At):_);w[d]=qe,S[d]=qe-T}if(s){var Ve,kt=d==="x"?E:P,Lt=d==="x"?R:W,F=w[b],he=b==="y"?"height":"width",Ne=F+g[kt],Ie=F-g[Lt],$e=[E,P].indexOf(x)!==-1,_e=(Ve=D==null?void 0:D[b])!=null?Ve:0,ze=$e?Ne:F-O[he]-j[he]-_e+k.altAxis,Fe=$e?F+O[he]+j[he]-_e-k.altAxis:Ie,Ue=l&&$e?St(ze,F,Fe):fe(l?ze:Ne,F,l?Fe:Ie);w[b]=Ue,S[b]=Ue-F}e.modifiersData[r]=S}}var xt={name:"preventOverflow",enabled:!0,phase:"main",fn:on,requiresIfExists:["offset"]};function an(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function sn(t){return t===H(t)||!B(t)?We(t):an(t)}function fn(t){var e=t.getBoundingClientRect(),n=Z(e.width)/t.offsetWidth||1,r=Z(e.height)/t.offsetHeight||1;return n!==1||r!==1}function cn(t,e,n){n===void 0&&(n=!1);var r=B(e),o=B(e)&&fn(e),i=I(e),a=ee(t,o),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(r||!r&&!n)&&((C(e)!=="body"||Se(i))&&(s=sn(e)),B(e)?(f=ee(e,!0),f.x+=e.clientLeft,f.y+=e.clientTop):i&&(f.x=Be(i))),{x:a.left+s.scrollLeft-f.x,y:a.top+s.scrollTop-f.y,width:a.width,height:a.height}}function pn(t){var e=new Map,n=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function o(i){n.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!n.has(s)){var f=e.get(s);f&&o(f)}}),r.push(i)}return t.forEach(function(i){n.has(i.name)||o(i)}),r}function un(t){var e=pn(t);return ot.reduce(function(n,r){return n.concat(e.filter(function(o){return o.phase===r}))},[])}function ln(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function dn(t){var e=t.reduce(function(n,r){var o=n[r.name];return n[r.name]=o?Object.assign({},o,r,{options:Object.assign({},o.options,r.options),data:Object.assign({},o.data,r.data)}):r,n},{});return Object.keys(e).map(function(n){return e[n]})}var Ot={placement:"bottom",modifiers:[],strategy:"absolute"};function $t(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function we(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,r=n===void 0?[]:n,o=e.defaultOptions,i=o===void 0?Ot:o;return function(a,s,f){f===void 0&&(f=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},Ot,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},u=[],m=!1,v={state:c,setOptions:function(p){var g=typeof p=="function"?p(c.options):p;h(),c.options=Object.assign({},i,c.options,g),c.scrollParents={reference:Q(a)?ce(a):a.contextElement?ce(a.contextElement):[],popper:ce(s)};var x=un(dn([].concat(r,c.options.modifiers)));return c.orderedModifiers=x.filter(function(y){return y.enabled}),l(),v.update()},forceUpdate:function(){if(!m){var p=c.elements,g=p.reference,x=p.popper;if($t(g,x)){c.rects={reference:cn(g,se(x),c.options.strategy==="fixed"),popper:ke(x)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(j){return c.modifiersData[j.name]=Object.assign({},j.data)});for(var y=0;y<c.orderedModifiers.length;y++){if(c.reset===!0){c.reset=!1,y=-1;continue}var $=c.orderedModifiers[y],d=$.fn,b=$.options,w=b===void 0?{}:b,O=$.name;typeof d=="function"&&(c=d({state:c,options:w,name:O,instance:v})||c)}}}},update:ln(function(){return new Promise(function(p){v.forceUpdate(),p(c)})}),destroy:function(){h(),m=!0}};if(!$t(a,s))return v;v.setOptions(f).then(function(p){!m&&f.onFirstUpdate&&f.onFirstUpdate(p)});function l(){c.orderedModifiers.forEach(function(p){var g=p.name,x=p.options,y=x===void 0?{}:x,$=p.effect;if(typeof $=="function"){var d=$({state:c,name:g,instance:v,options:y}),b=function(){};u.push(d||b)}})}function h(){u.forEach(function(p){return p()}),u=[]}return v}}var hn=we(),mn=[Re,He,Me,Ae],vn=we({defaultModifiers:mn}),gn=[Re,He,Me,Ae,wt,vt,xt,pt,bt],yn=we({defaultModifiers:gn});


/***/ }),

/***/ 5503:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NXq": () => (/* binding */ unrefElement),
/* harmony export */   "ORN": () => (/* binding */ useEventListener),
/* harmony export */   "i9H": () => (/* binding */ onClickOutside),
/* harmony export */   "yU7": () => (/* binding */ useResizeObserver)
/* harmony export */ });
/* unused harmony exports DefaultMagicKeysAliasMap, StorageSerializers, SwipeDirection, TransitionPresets, asyncComputed, breakpointsAntDesign, breakpointsBootstrapV5, breakpointsQuasar, breakpointsSematic, breakpointsTailwind, breakpointsVuetify, computedAsync, computedInject, createFetch, createUnrefFn, defaultDocument, defaultLocation, defaultNavigator, defaultWindow, getSSRHandler, mapGamepadToXbox360Controller, onKeyDown, onKeyPressed, onKeyStroke, onKeyUp, onLongPress, onStartTyping, setSSRHandler, templateRef, useActiveElement, useAsyncQueue, useAsyncState, useBase64, useBattery, useBluetooth, useBreakpoints, useBroadcastChannel, useBrowserLocation, useCached, useClipboard, useColorMode, useConfirmDialog, useCssVar, useCurrentElement, useCycleList, useDark, useDebouncedRefHistory, useDeviceMotion, useDeviceOrientation, useDevicePixelRatio, useDevicesList, useDisplayMedia, useDocumentVisibility, useDraggable, useDropZone, useElementBounding, useElementByPoint, useElementHover, useElementSize, useElementVisibility, useEventBus, useEventSource, useEyeDropper, useFavicon, useFetch, useFileDialog, useFileSystemAccess, useFocus, useFocusWithin, useFps, useFullscreen, useGamepad, useGeolocation, useIdle, useImage, useInfiniteScroll, useIntersectionObserver, useKeyModifier, useLocalStorage, useMagicKeys, useManualRefHistory, useMediaControls, useMediaQuery, useMemoize, useMemory, useMounted, useMouse, useMouseInElement, useMousePressed, useMutationObserver, useNavigatorLanguage, useNetwork, useNow, useObjectUrl, useOffsetPagination, useOnline, usePageLeave, useParallax, usePermission, usePointer, usePointerSwipe, usePreferredColorScheme, usePreferredContrast, usePreferredDark, usePreferredLanguages, usePreferredReducedMotion, useRafFn, useRefHistory, useScreenOrientation, useScreenSafeArea, useScriptTag, useScroll, useScrollLock, useSessionStorage, useShare, useSpeechRecognition, useSpeechSynthesis, useStepper, useStorage, useStorageAsync, useStyleTag, useSupported, useSwipe, useTemplateRefsList, useTextDirection, useTextSelection, useTextareaAutosize, useThrottledRefHistory, useTimeAgo, useTimeoutPoll, useTimestamp, useTitle, useTransition, useUrlSearchParams, useUserMedia, useVModel, useVModels, useVibrate, useVirtualList, useWakeLock, useWebNotification, useWebSocket, useWebWorker, useWebWorkerFn, useWindowFocus, useWindowScroll, useWindowSize */
/* harmony import */ var _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5055);
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5957);




function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  let options;
  if (isRef(optionsOrRef)) {
    options = {
      evaluating: optionsOrRef
    };
  } else {
    options = optionsOrRef || {};
  }
  const {
    lazy = false,
    evaluating = void 0,
    onError = noop
  } = options;
  const started = ref(!lazy);
  const current = ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value)
      return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) {
      Promise.resolve().then(() => {
        evaluating.value = true;
      });
    }
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating)
            evaluating.value = false;
          if (!hasFinished)
            cancelCallback();
        });
      });
      if (counterAtBeginning === counter)
        current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter)
        evaluating.value = false;
      hasFinished = true;
    }
  });
  if (lazy) {
    return computed(() => {
      started.value = true;
      return current.value;
    });
  } else {
    return current;
  }
}

function computedInject(key, options, defaultSource, treatDefaultAsFactory) {
  let source = inject(key);
  if (defaultSource)
    source = inject(key, defaultSource);
  if (treatDefaultAsFactory)
    source = inject(key, defaultSource, treatDefaultAsFactory);
  if (typeof options === "function") {
    return computed((ctx) => options(source, ctx));
  } else {
    return computed({
      get: (ctx) => options.get(source, ctx),
      set: options.set
    });
  }
}

const createUnrefFn = (fn) => {
  return function(...args) {
    return fn.apply(this, args.map((i) => unref(i)));
  };
};

function unrefElement(elRef) {
  var _a;
  const plain = (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .resolveUnref */ .Ly)(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}

const defaultWindow = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .isClient */ .C5 ? window : void 0;
const defaultDocument = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .isClient */ .C5 ? window.document : void 0;
const defaultNavigator = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .isClient */ .C5 ? window.navigator : void 0;
const defaultLocation = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .isClient */ .C5 ? window.location : void 0;

function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if ((0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT;
  let cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT;
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .noop */ .ZT;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .tryOnScopeDispose */ .IY)(stop);
  return stop;
}

function onClickOutside(target, handler, options = {}) {
  const { window = defaultWindow, ignore, capture = true, detectIframe = false } = options;
  if (!window)
    return;
  const shouldListen = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(true);
  let fallback;
  const listener = (event) => {
    window.clearTimeout(fallback);
    const el = unrefElement(target);
    const composedPath = event.composedPath();
    if (!el || el === event.target || composedPath.includes(el) || !shouldListen.value)
      return;
    if (ignore && ignore.length > 0) {
      if (ignore.some((target2) => {
        const el2 = unrefElement(target2);
        return el2 && (event.target === el2 || composedPath.includes(el2));
      }))
        return;
    }
    handler(event);
  };
  const cleanup = [
    useEventListener(window, "click", listener, { passive: true, capture }),
    useEventListener(window, "pointerdown", (e) => {
      const el = unrefElement(target);
      shouldListen.value = !!el && !e.composedPath().includes(el);
    }, { passive: true }),
    useEventListener(window, "pointerup", (e) => {
      if (e.button === 0) {
        const path = e.composedPath();
        e.composedPath = () => path;
        fallback = window.setTimeout(() => listener(e), 50);
      }
    }, { passive: true }),
    detectIframe && useEventListener(window, "blur", (event) => {
      var _a;
      const el = unrefElement(target);
      if (((_a = document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(document.activeElement)))
        handler(event);
    })
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  return stop;
}

var __defProp$l = Object.defineProperty;
var __defProps$8 = Object.defineProperties;
var __getOwnPropDescs$8 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$n = Object.getOwnPropertySymbols;
var __hasOwnProp$n = Object.prototype.hasOwnProperty;
var __propIsEnum$n = Object.prototype.propertyIsEnumerable;
var __defNormalProp$l = (obj, key, value) => key in obj ? __defProp$l(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$l = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$n.call(b, prop))
      __defNormalProp$l(a, prop, b[prop]);
  if (__getOwnPropSymbols$n)
    for (var prop of __getOwnPropSymbols$n(b)) {
      if (__propIsEnum$n.call(b, prop))
        __defNormalProp$l(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$8 = (a, b) => __defProps$8(a, __getOwnPropDescs$8(b));
const createKeyPredicate = (keyFilter) => {
  if (typeof keyFilter === "function")
    return keyFilter;
  else if (typeof keyFilter === "string")
    return (event) => event.key === keyFilter;
  else if (Array.isArray(keyFilter))
    return (event) => keyFilter.includes(event.key);
  else if (keyFilter)
    return () => true;
  else
    return () => false;
};
function onKeyStroke(key, handler, options = {}) {
  const { target = defaultWindow, eventName = "keydown", passive = false } = options;
  const predicate = createKeyPredicate(key);
  const listener = (e) => {
    if (predicate(e))
      handler(e);
  };
  return useEventListener(target, eventName, listener, passive);
}
function onKeyDown(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$l({}, options), { eventName: "keydown" }));
}
function onKeyPressed(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$l({}, options), { eventName: "keypress" }));
}
function onKeyUp(key, handler, options = {}) {
  return onKeyStroke(key, handler, __spreadProps$8(__spreadValues$l({}, options), { eventName: "keyup" }));
}

const DEFAULT_DELAY = 500;
function onLongPress(target, handler, options) {
  var _a, _b;
  const elementRef = computed(() => unrefElement(target));
  let timeout = null;
  function clear() {
    if (timeout != null) {
      clearTimeout(timeout);
      timeout = null;
    }
  }
  function onDown(ev) {
    var _a2, _b2, _c, _d;
    if (((_a2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _a2.self) && ev.target !== elementRef.value)
      return;
    clear();
    if ((_b2 = options == null ? void 0 : options.modifiers) == null ? void 0 : _b2.prevent)
      ev.preventDefault();
    if ((_c = options == null ? void 0 : options.modifiers) == null ? void 0 : _c.stop)
      ev.stopPropagation();
    timeout = setTimeout(() => handler(ev), (_d = options == null ? void 0 : options.delay) != null ? _d : DEFAULT_DELAY);
  }
  const listenerOptions = {
    capture: (_a = options == null ? void 0 : options.modifiers) == null ? void 0 : _a.capture,
    once: (_b = options == null ? void 0 : options.modifiers) == null ? void 0 : _b.once
  };
  useEventListener(elementRef, "pointerdown", onDown, listenerOptions);
  useEventListener(elementRef, "pointerup", clear, listenerOptions);
  useEventListener(elementRef, "pointerleave", clear, listenerOptions);
}

const isFocusedElementEditable = () => {
  const { activeElement, body } = document;
  if (!activeElement)
    return false;
  if (activeElement === body)
    return false;
  switch (activeElement.tagName) {
    case "INPUT":
    case "TEXTAREA":
      return true;
  }
  return activeElement.hasAttribute("contenteditable");
};
const isTypedCharValid = ({
  keyCode,
  metaKey,
  ctrlKey,
  altKey
}) => {
  if (metaKey || ctrlKey || altKey)
    return false;
  if (keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105)
    return true;
  if (keyCode >= 65 && keyCode <= 90)
    return true;
  return false;
};
function onStartTyping(callback, options = {}) {
  const { document: document2 = defaultDocument } = options;
  const keydown = (event) => {
    !isFocusedElementEditable() && isTypedCharValid(event) && callback(event);
  };
  if (document2)
    useEventListener(document2, "keydown", keydown, { passive: true });
}

function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance();
  let _trigger = () => {
  };
  const element = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a, _b;
        track();
        return (_b = (_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$refs[key]) != null ? _b : initialValue;
      },
      set() {
      }
    };
  });
  tryOnMounted(_trigger);
  onUpdated(_trigger);
  return element;
}

function useActiveElement(options = {}) {
  const { window = defaultWindow } = options;
  const activeElement = computedWithControl(() => null, () => window == null ? void 0 : window.document.activeElement);
  if (window) {
    useEventListener(window, "blur", activeElement.trigger, true);
    useEventListener(window, "focus", activeElement.trigger, true);
  }
  return activeElement;
}

function useAsyncQueue(tasks, options = {}) {
  const {
    interrupt = true,
    onError = noop,
    onFinished = noop
  } = options;
  const promiseState = {
    pending: "pending",
    rejected: "rejected",
    fulfilled: "fulfilled"
  };
  const initialResult = Array.from(new Array(tasks.length), () => ({ state: promiseState.pending, data: null }));
  const result = reactive(initialResult);
  const activeIndex = ref(-1);
  if (!tasks || tasks.length === 0) {
    onFinished();
    return {
      activeIndex,
      result
    };
  }
  function updateResult(state, res) {
    activeIndex.value++;
    result[activeIndex.value].data = res;
    result[activeIndex.value].state = state;
  }
  tasks.reduce((prev, curr) => {
    return prev.then((prevRes) => {
      var _a;
      if (((_a = result[activeIndex.value]) == null ? void 0 : _a.state) === promiseState.rejected && interrupt) {
        onFinished();
        return;
      }
      return curr(prevRes).then((currentRes) => {
        updateResult(promiseState.fulfilled, currentRes);
        activeIndex.value === tasks.length - 1 && onFinished();
        return currentRes;
      });
    }).catch((e) => {
      updateResult(promiseState.rejected, e);
      onError();
      return e;
    });
  }, Promise.resolve());
  return {
    activeIndex,
    result
  };
}

function useAsyncState(promise, initialState, options) {
  const {
    immediate = true,
    delay = 0,
    onError = noop,
    resetOnExecute = true,
    shallow = true,
    throwError
  } = options != null ? options : {};
  const state = shallow ? shallowRef(initialState) : ref(initialState);
  const isReady = ref(false);
  const isLoading = ref(false);
  const error = ref(void 0);
  async function execute(delay2 = 0, ...args) {
    if (resetOnExecute)
      state.value = initialState;
    error.value = void 0;
    isReady.value = false;
    isLoading.value = true;
    if (delay2 > 0)
      await promiseTimeout(delay2);
    const _promise = typeof promise === "function" ? promise(...args) : promise;
    try {
      const data = await _promise;
      state.value = data;
      isReady.value = true;
    } catch (e) {
      error.value = e;
      onError(e);
      if (throwError)
        throw error;
    } finally {
      isLoading.value = false;
    }
    return state.value;
  }
  if (immediate)
    execute(delay);
  return {
    state,
    isReady,
    isLoading,
    error,
    execute
  };
}

const defaults = {
  array: (v) => JSON.stringify(v),
  object: (v) => JSON.stringify(v),
  set: (v) => JSON.stringify(Array.from(v)),
  map: (v) => JSON.stringify(Object.fromEntries(v)),
  null: () => ""
};
function getDefaultSerialization(target) {
  if (!target)
    return defaults.null;
  if (target instanceof Map)
    return defaults.map;
  else if (target instanceof Set)
    return defaults.set;
  else if (Array.isArray(target))
    return defaults.array;
  else
    return defaults.object;
}

function useBase64(target, options) {
  const base64 = ref("");
  const promise = ref();
  function execute() {
    if (!isClient)
      return;
    promise.value = new Promise((resolve, reject) => {
      try {
        const _target = resolveUnref(target);
        if (_target == null) {
          resolve("");
        } else if (typeof _target === "string") {
          resolve(blobToBase64(new Blob([_target], { type: "text/plain" })));
        } else if (_target instanceof Blob) {
          resolve(blobToBase64(_target));
        } else if (_target instanceof ArrayBuffer) {
          resolve(window.btoa(String.fromCharCode(...new Uint8Array(_target))));
        } else if (_target instanceof HTMLCanvasElement) {
          resolve(_target.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
        } else if (_target instanceof HTMLImageElement) {
          const img = _target.cloneNode(false);
          img.crossOrigin = "Anonymous";
          imgLoaded(img).then(() => {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            resolve(canvas.toDataURL(options == null ? void 0 : options.type, options == null ? void 0 : options.quality));
          }).catch(reject);
        } else if (typeof _target === "object") {
          const _serializeFn = (options == null ? void 0 : options.serializer) || getDefaultSerialization(_target);
          const serialized = _serializeFn(_target);
          return resolve(blobToBase64(new Blob([serialized], { type: "application/json" })));
        } else {
          reject(new Error("target is unsupported types"));
        }
      } catch (error) {
        reject(error);
      }
    });
    promise.value.then((res) => base64.value = res);
    return promise.value;
  }
  if (isRef(target) || isFunction(target))
    watch(target, execute, { immediate: true });
  else
    execute();
  return {
    base64,
    promise,
    execute
  };
}
function imgLoaded(img) {
  return new Promise((resolve, reject) => {
    if (!img.complete) {
      img.onload = () => {
        resolve();
      };
      img.onerror = reject;
    } else {
      resolve();
    }
  });
}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = (e) => {
      resolve(e.target.result);
    };
    fr.onerror = reject;
    fr.readAsDataURL(blob);
  });
}

function useSupported(callback, sync = false) {
  const isSupported = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)();
  const update = () => isSupported.value = Boolean(callback());
  update();
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .tryOnMounted */ .u7)(update, sync);
  return isSupported;
}

function useBattery({ navigator = defaultNavigator } = {}) {
  const events = ["chargingchange", "chargingtimechange", "dischargingtimechange", "levelchange"];
  const isSupported = useSupported(() => navigator && "getBattery" in navigator);
  const charging = ref(false);
  const chargingTime = ref(0);
  const dischargingTime = ref(0);
  const level = ref(1);
  let battery;
  function updateBatteryInfo() {
    charging.value = this.charging;
    chargingTime.value = this.chargingTime || 0;
    dischargingTime.value = this.dischargingTime || 0;
    level.value = this.level;
  }
  if (isSupported.value) {
    navigator.getBattery().then((_battery) => {
      battery = _battery;
      updateBatteryInfo.call(battery);
      for (const event of events)
        useEventListener(battery, event, updateBatteryInfo, { passive: true });
    });
  }
  return {
    isSupported,
    charging,
    chargingTime,
    dischargingTime,
    level
  };
}

function useBluetooth(options) {
  let {
    acceptAllDevices = false
  } = options || {};
  const {
    filters = void 0,
    optionalServices = void 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = useSupported(() => navigator && "bluetooth" in navigator);
  const device = ref(void 0);
  const error = ref(null);
  watch(device, () => {
    connectToBluetoothGATTServer();
  });
  async function requestDevice() {
    if (!isSupported.value)
      return;
    error.value = null;
    if (filters && filters.length > 0)
      acceptAllDevices = false;
    try {
      device.value = await (navigator == null ? void 0 : navigator.bluetooth.requestDevice({
        acceptAllDevices,
        filters,
        optionalServices
      }));
    } catch (err) {
      error.value = err;
    }
  }
  const server = ref();
  const isConnected = computed(() => {
    var _a;
    return ((_a = server.value) == null ? void 0 : _a.connected) || false;
  });
  async function connectToBluetoothGATTServer() {
    error.value = null;
    if (device.value && device.value.gatt) {
      device.value.addEventListener("gattserverdisconnected", () => {
      });
      try {
        server.value = await device.value.gatt.connect();
      } catch (err) {
        error.value = err;
      }
    }
  }
  tryOnMounted(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.connect();
  });
  tryOnScopeDispose(() => {
    var _a;
    if (device.value)
      (_a = device.value.gatt) == null ? void 0 : _a.disconnect();
  });
  return {
    isSupported,
    isConnected,
    device,
    requestDevice,
    server,
    error
  };
}

function useMediaQuery(query, options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "matchMedia" in window && typeof window.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const update = () => {
    if (!isSupported.value)
      return;
    if (!mediaQuery)
      mediaQuery = window.matchMedia(query);
    matches.value = mediaQuery.matches;
  };
  tryOnBeforeMount(() => {
    update();
    if (!mediaQuery)
      return;
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", update);
    else
      mediaQuery.addListener(update);
    tryOnScopeDispose(() => {
      if ("removeEventListener" in mediaQuery)
        mediaQuery.removeEventListener("change", update);
      else
        mediaQuery.removeListener(update);
    });
  });
  return matches;
}

const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
const breakpointsBootstrapV5 = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
const breakpointsVuetify = {
  xs: 600,
  sm: 960,
  md: 1264,
  lg: 1904
};
const breakpointsAntDesign = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
const breakpointsQuasar = {
  xs: 600,
  sm: 1024,
  md: 1440,
  lg: 1920
};
const breakpointsSematic = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop4K: 2560
};

var __defProp$k = Object.defineProperty;
var __getOwnPropSymbols$m = Object.getOwnPropertySymbols;
var __hasOwnProp$m = Object.prototype.hasOwnProperty;
var __propIsEnum$m = Object.prototype.propertyIsEnumerable;
var __defNormalProp$k = (obj, key, value) => key in obj ? __defProp$k(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$k = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$m.call(b, prop))
      __defNormalProp$k(a, prop, b[prop]);
  if (__getOwnPropSymbols$m)
    for (var prop of __getOwnPropSymbols$m(b)) {
      if (__propIsEnum$m.call(b, prop))
        __defNormalProp$k(a, prop, b[prop]);
    }
  return a;
};
function useBreakpoints(breakpoints, options = {}) {
  function getValue(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window = defaultWindow } = options;
  function match(query) {
    if (!window)
      return false;
    return window.matchMedia(query).matches;
  }
  const greater = (k) => {
    return useMediaQuery(`(min-width: ${getValue(k)})`, options);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greater(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return __spreadValues$k({
    greater,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue(k, -0.1)})`, options);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`, options);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue(k, -0.1)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue(a)}) and (max-width: ${getValue(b, -0.1)})`);
    }
  }, shortcutMethods);
}

const useBroadcastChannel = (options) => {
  const {
    name,
    window = defaultWindow
  } = options;
  const isSupported = useSupported(() => window && "BroadcastChannel" in window);
  const isClosed = ref(false);
  const channel = ref();
  const data = ref();
  const error = ref(null);
  const post = (data2) => {
    if (channel.value)
      channel.value.postMessage(data2);
  };
  const close = () => {
    if (channel.value)
      channel.value.close();
    isClosed.value = true;
  };
  if (isSupported.value) {
    tryOnMounted(() => {
      error.value = null;
      channel.value = new BroadcastChannel(name);
      channel.value.addEventListener("message", (e) => {
        data.value = e.data;
      }, { passive: true });
      channel.value.addEventListener("messageerror", (e) => {
        error.value = e;
      }, { passive: true });
      channel.value.addEventListener("close", () => {
        isClosed.value = true;
      });
    });
  }
  tryOnScopeDispose(() => {
    close();
  });
  return {
    isSupported,
    channel,
    data,
    post,
    close,
    error,
    isClosed
  };
};

function useBrowserLocation({ window = defaultWindow } = {}) {
  const buildState = (trigger) => {
    const { state: state2, length } = (window == null ? void 0 : window.history) || {};
    const { hash, host, hostname, href, origin, pathname, port, protocol, search } = (window == null ? void 0 : window.location) || {};
    return {
      trigger,
      state: state2,
      length,
      hash,
      host,
      hostname,
      href,
      origin,
      pathname,
      port,
      protocol,
      search
    };
  };
  const state = ref(buildState("load"));
  if (window) {
    useEventListener(window, "popstate", () => state.value = buildState("popstate"), { passive: true });
    useEventListener(window, "hashchange", () => state.value = buildState("hashchange"), { passive: true });
  }
  return state;
}

function useCached(refValue, comparator = (a, b) => a === b, watchOptions) {
  const cachedValue = ref(refValue.value);
  watch(() => refValue.value, (value) => {
    if (!comparator(value, cachedValue.value))
      cachedValue.value = value;
  }, watchOptions);
  return cachedValue;
}

function useClipboard(options = {}) {
  const {
    navigator = defaultNavigator,
    read = false,
    source,
    copiedDuring = 1500
  } = options;
  const events = ["copy", "cut"];
  const isSupported = useSupported(() => navigator && "clipboard" in navigator);
  const text = ref("");
  const copied = ref(false);
  const timeout = useTimeoutFn(() => copied.value = false, copiedDuring);
  function updateText() {
    navigator.clipboard.readText().then((value) => {
      text.value = value;
    });
  }
  if (isSupported.value && read) {
    for (const event of events)
      useEventListener(event, updateText);
  }
  async function copy(value = resolveUnref(source)) {
    if (isSupported.value && value != null) {
      await navigator.clipboard.writeText(value);
      text.value = value;
      copied.value = true;
      timeout.start();
    }
  }
  return {
    isSupported,
    text,
    copied,
    copy
  };
}

const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey = "__vueuse_ssr_handlers__";
_global[globalKey] = _global[globalKey] || {};
const handlers = _global[globalKey];
function getSSRHandler(key, fallback) {
  return handlers[key] || fallback;
}
function setSSRHandler(key, fn) {
  handlers[key] = fn;
}

function guessSerializerType(rawInit) {
  return rawInit == null ? "any" : rawInit instanceof Set ? "set" : rawInit instanceof Map ? "map" : rawInit instanceof Date ? "date" : typeof rawInit === "boolean" ? "boolean" : typeof rawInit === "string" ? "string" : typeof rawInit === "object" ? "object" : Array.isArray(rawInit) ? "object" : !Number.isNaN(rawInit) ? "number" : "any";
}

var __defProp$j = Object.defineProperty;
var __getOwnPropSymbols$l = Object.getOwnPropertySymbols;
var __hasOwnProp$l = Object.prototype.hasOwnProperty;
var __propIsEnum$l = Object.prototype.propertyIsEnumerable;
var __defNormalProp$j = (obj, key, value) => key in obj ? __defProp$j(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$j = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$l.call(b, prop))
      __defNormalProp$j(a, prop, b[prop]);
  if (__getOwnPropSymbols$l)
    for (var prop of __getOwnPropSymbols$l(b)) {
      if (__propIsEnum$l.call(b, prop))
        __defNormalProp$j(a, prop, b[prop]);
    }
  return a;
};
const StorageSerializers = {
  boolean: {
    read: (v) => v === "true",
    write: (v) => String(v)
  },
  object: {
    read: (v) => JSON.parse(v),
    write: (v) => JSON.stringify(v)
  },
  number: {
    read: (v) => Number.parseFloat(v),
    write: (v) => String(v)
  },
  any: {
    read: (v) => v,
    write: (v) => String(v)
  },
  string: {
    read: (v) => v,
    write: (v) => String(v)
  },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: {
    read: (v) => new Set(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v))
  },
  date: {
    read: (v) => new Date(v),
    write: (v) => v.toISOString()
  }
};
function useStorage(key, defaults, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    mergeDefaults = false,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const data = (shallow ? shallowRef : ref)(defaults);
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  if (!storage)
    return data;
  const rawInit = resolveUnref(defaults);
  const type = guessSerializerType(rawInit);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  const { pause: pauseWatch, resume: resumeWatch } = pausableWatch(data, () => write(data.value), { flush, deep, eventFilter });
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", update);
  update();
  return data;
  function write(v) {
    try {
      if (v == null)
        storage.removeItem(key);
      else
        storage.setItem(key, serializer.write(v));
    } catch (e) {
      onError(e);
    }
  }
  function read(event) {
    if (event && event.key !== key)
      return;
    pauseWatch();
    try {
      const rawValue = event ? event.newValue : storage.getItem(key);
      if (rawValue == null) {
        if (writeDefaults && rawInit !== null)
          storage.setItem(key, serializer.write(rawInit));
        return rawInit;
      } else if (!event && mergeDefaults) {
        const value = serializer.read(rawValue);
        if (isFunction(mergeDefaults))
          return mergeDefaults(value, rawInit);
        else if (type === "object" && !Array.isArray(value))
          return __spreadValues$j(__spreadValues$j({}, rawInit), value);
        return value;
      } else if (typeof rawValue !== "string") {
        return rawValue;
      } else {
        return serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    } finally {
      resumeWatch();
    }
  }
  function update(event) {
    if (event && event.key !== key)
      return;
    data.value = read(event);
  }
}

function usePreferredDark(options) {
  return useMediaQuery("(prefers-color-scheme: dark)", options);
}

var __defProp$i = Object.defineProperty;
var __getOwnPropSymbols$k = Object.getOwnPropertySymbols;
var __hasOwnProp$k = Object.prototype.hasOwnProperty;
var __propIsEnum$k = Object.prototype.propertyIsEnumerable;
var __defNormalProp$i = (obj, key, value) => key in obj ? __defProp$i(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$i = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$k.call(b, prop))
      __defNormalProp$i(a, prop, b[prop]);
  if (__getOwnPropSymbols$k)
    for (var prop of __getOwnPropSymbols$k(b)) {
      if (__propIsEnum$k.call(b, prop))
        __defNormalProp$i(a, prop, b[prop]);
    }
  return a;
};
function useColorMode(options = {}) {
  const {
    selector = "html",
    attribute = "class",
    initialValue = "auto",
    window = defaultWindow,
    storage,
    storageKey = "vueuse-color-scheme",
    listenToStorageChanges = true,
    storageRef,
    emitAuto
  } = options;
  const modes = __spreadValues$i({
    auto: "",
    light: "light",
    dark: "dark"
  }, options.modes || {});
  const preferredDark = usePreferredDark({ window });
  const preferredMode = computed(() => preferredDark.value ? "dark" : "light");
  const store = storageRef || (storageKey == null ? ref(initialValue) : useStorage(storageKey, initialValue, storage, { window, listenToStorageChanges }));
  const state = computed({
    get() {
      return store.value === "auto" && !emitAuto ? preferredMode.value : store.value;
    },
    set(v) {
      store.value = v;
    }
  });
  const updateHTMLAttrs = getSSRHandler("updateHTMLAttrs", (selector2, attribute2, value) => {
    const el = window == null ? void 0 : window.document.querySelector(selector2);
    if (!el)
      return;
    if (attribute2 === "class") {
      const current = value.split(/\s/g);
      Object.values(modes).flatMap((i) => (i || "").split(/\s/g)).filter(Boolean).forEach((v) => {
        if (current.includes(v))
          el.classList.add(v);
        else
          el.classList.remove(v);
      });
    } else {
      el.setAttribute(attribute2, value);
    }
  });
  function defaultOnChanged(mode) {
    var _a;
    const resolvedMode = mode === "auto" ? preferredMode.value : mode;
    updateHTMLAttrs(selector, attribute, (_a = modes[resolvedMode]) != null ? _a : resolvedMode);
  }
  function onChanged(mode) {
    if (options.onChanged)
      options.onChanged(mode, defaultOnChanged);
    else
      defaultOnChanged(mode);
  }
  watch(state, onChanged, { flush: "post", immediate: true });
  if (emitAuto)
    watch(preferredMode, () => onChanged(state.value), { flush: "post" });
  tryOnMounted(() => onChanged(state.value));
  return state;
}

function useConfirmDialog(revealed = ref(false)) {
  const confirmHook = createEventHook();
  const cancelHook = createEventHook();
  const revealHook = createEventHook();
  let _resolve = noop;
  const reveal = (data) => {
    revealHook.trigger(data);
    revealed.value = true;
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  };
  const confirm = (data) => {
    revealed.value = false;
    confirmHook.trigger(data);
    _resolve({ data, isCanceled: false });
  };
  const cancel = (data) => {
    revealed.value = false;
    cancelHook.trigger(data);
    _resolve({ data, isCanceled: true });
  };
  return {
    isRevealed: computed(() => revealed.value),
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on
  };
}

function useCssVar(prop, target, { window = defaultWindow, initialValue = "" } = {}) {
  const variable = ref(initialValue);
  const elRef = computed(() => {
    var _a;
    return unrefElement(target) || ((_a = window == null ? void 0 : window.document) == null ? void 0 : _a.documentElement);
  });
  watch([elRef, () => resolveUnref(prop)], ([el, prop2]) => {
    var _a;
    if (el && window) {
      const value = (_a = window.getComputedStyle(el).getPropertyValue(prop2)) == null ? void 0 : _a.trim();
      variable.value = value || initialValue;
    }
  }, { immediate: true });
  watch(variable, (val) => {
    var _a;
    if ((_a = elRef.value) == null ? void 0 : _a.style)
      elRef.value.style.setProperty(resolveUnref(prop), val);
  });
  return variable;
}

function useCurrentElement() {
  const vm = getCurrentInstance();
  const currentElement = computedWithControl(() => null, () => vm.proxy.$el);
  onUpdated(currentElement.trigger);
  onMounted(currentElement.trigger);
  return currentElement;
}

function useCycleList(list, options) {
  var _a;
  const state = shallowRef((_a = options == null ? void 0 : options.initialValue) != null ? _a : list[0]);
  const index = computed({
    get() {
      var _a2;
      let index2 = (options == null ? void 0 : options.getIndexOf) ? options.getIndexOf(state.value, list) : list.indexOf(state.value);
      if (index2 < 0)
        index2 = (_a2 = options == null ? void 0 : options.fallbackIndex) != null ? _a2 : 0;
      return index2;
    },
    set(v) {
      set(v);
    }
  });
  function set(i) {
    const length = list.length;
    const index2 = (i % length + length) % length;
    const value = list[index2];
    state.value = value;
    return value;
  }
  function shift(delta = 1) {
    return set(index.value + delta);
  }
  function next(n = 1) {
    return shift(n);
  }
  function prev(n = 1) {
    return shift(-n);
  }
  return {
    state,
    index,
    next,
    prev
  };
}

var __defProp$h = Object.defineProperty;
var __defProps$7 = Object.defineProperties;
var __getOwnPropDescs$7 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$j = Object.getOwnPropertySymbols;
var __hasOwnProp$j = Object.prototype.hasOwnProperty;
var __propIsEnum$j = Object.prototype.propertyIsEnumerable;
var __defNormalProp$h = (obj, key, value) => key in obj ? __defProp$h(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$h = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$j.call(b, prop))
      __defNormalProp$h(a, prop, b[prop]);
  if (__getOwnPropSymbols$j)
    for (var prop of __getOwnPropSymbols$j(b)) {
      if (__propIsEnum$j.call(b, prop))
        __defNormalProp$h(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$7 = (a, b) => __defProps$7(a, __getOwnPropDescs$7(b));
function useDark(options = {}) {
  const {
    valueDark = "dark",
    valueLight = "",
    window = defaultWindow
  } = options;
  const mode = useColorMode(__spreadProps$7(__spreadValues$h({}, options), {
    onChanged: (mode2, defaultHandler) => {
      var _a;
      if (options.onChanged)
        (_a = options.onChanged) == null ? void 0 : _a.call(options, mode2 === "dark");
      else
        defaultHandler(mode2);
    },
    modes: {
      dark: valueDark,
      light: valueLight
    }
  }));
  const preferredDark = usePreferredDark({ window });
  const isDark = computed({
    get() {
      return mode.value === "dark";
    },
    set(v) {
      if (v === preferredDark.value)
        mode.value = "auto";
      else
        mode.value = v ? "dark" : "light";
    }
  });
  return isDark;
}

const fnClone = (v) => JSON.parse(JSON.stringify(v));
const fnBypass = (v) => v;
const fnSetSource = (source, value) => source.value = value;
function defaultDump(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function defaultParse(clone) {
  return clone ? isFunction(clone) ? clone : fnClone : fnBypass;
}
function useManualRefHistory(source, options = {}) {
  const {
    clone = false,
    dump = defaultDump(clone),
    parse = defaultParse(clone),
    setSource = fnSetSource
  } = options;
  function _createHistoryRecord() {
    return markRaw({
      snapshot: dump(source.value),
      timestamp: timestamp()
    });
  }
  const last = ref(_createHistoryRecord());
  const undoStack = ref([]);
  const redoStack = ref([]);
  const _setSource = (record) => {
    setSource(source, parse(record.snapshot));
    last.value = record;
  };
  const commit = () => {
    undoStack.value.unshift(last.value);
    last.value = _createHistoryRecord();
    if (options.capacity && undoStack.value.length > options.capacity)
      undoStack.value.splice(options.capacity, Infinity);
    if (redoStack.value.length)
      redoStack.value.splice(0, redoStack.value.length);
  };
  const clear = () => {
    undoStack.value.splice(0, undoStack.value.length);
    redoStack.value.splice(0, redoStack.value.length);
  };
  const undo = () => {
    const state = undoStack.value.shift();
    if (state) {
      redoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const redo = () => {
    const state = redoStack.value.shift();
    if (state) {
      undoStack.value.unshift(last.value);
      _setSource(state);
    }
  };
  const reset = () => {
    _setSource(last.value);
  };
  const history = computed(() => [last.value, ...undoStack.value]);
  const canUndo = computed(() => undoStack.value.length > 0);
  const canRedo = computed(() => redoStack.value.length > 0);
  return {
    source,
    undoStack,
    redoStack,
    last,
    history,
    canUndo,
    canRedo,
    clear,
    commit,
    reset,
    undo,
    redo
  };
}

var __defProp$g = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$i = Object.getOwnPropertySymbols;
var __hasOwnProp$i = Object.prototype.hasOwnProperty;
var __propIsEnum$i = Object.prototype.propertyIsEnumerable;
var __defNormalProp$g = (obj, key, value) => key in obj ? __defProp$g(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$g = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$i.call(b, prop))
      __defNormalProp$g(a, prop, b[prop]);
  if (__getOwnPropSymbols$i)
    for (var prop of __getOwnPropSymbols$i(b)) {
      if (__propIsEnum$i.call(b, prop))
        __defNormalProp$g(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function useRefHistory(source, options = {}) {
  const {
    deep = false,
    flush = "pre",
    eventFilter
  } = options;
  const {
    eventFilter: composedFilter,
    pause,
    resume: resumeTracking,
    isActive: isTracking
  } = pausableFilter(eventFilter);
  const {
    ignoreUpdates,
    ignorePrevAsyncUpdates,
    stop
  } = watchIgnorable(source, commit, { deep, flush, eventFilter: composedFilter });
  function setSource(source2, value) {
    ignorePrevAsyncUpdates();
    ignoreUpdates(() => {
      source2.value = value;
    });
  }
  const manualHistory = useManualRefHistory(source, __spreadProps$6(__spreadValues$g({}, options), { clone: options.clone || deep, setSource }));
  const { clear, commit: manualCommit } = manualHistory;
  function commit() {
    ignorePrevAsyncUpdates();
    manualCommit();
  }
  function resume(commitNow) {
    resumeTracking();
    if (commitNow)
      commit();
  }
  function batch(fn) {
    let canceled = false;
    const cancel = () => canceled = true;
    ignoreUpdates(() => {
      fn(cancel);
    });
    if (!canceled)
      commit();
  }
  function dispose() {
    stop();
    clear();
  }
  return __spreadProps$6(__spreadValues$g({}, manualHistory), {
    isTracking,
    pause,
    resume,
    commit,
    batch,
    dispose
  });
}

var __defProp$f = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$h = Object.getOwnPropertySymbols;
var __hasOwnProp$h = Object.prototype.hasOwnProperty;
var __propIsEnum$h = Object.prototype.propertyIsEnumerable;
var __defNormalProp$f = (obj, key, value) => key in obj ? __defProp$f(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$f = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$h.call(b, prop))
      __defNormalProp$f(a, prop, b[prop]);
  if (__getOwnPropSymbols$h)
    for (var prop of __getOwnPropSymbols$h(b)) {
      if (__propIsEnum$h.call(b, prop))
        __defNormalProp$f(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function useDebouncedRefHistory(source, options = {}) {
  const filter = options.debounce ? debounceFilter(options.debounce) : void 0;
  const history = useRefHistory(source, __spreadProps$5(__spreadValues$f({}, options), { eventFilter: filter }));
  return __spreadValues$f({}, history);
}

function useDeviceMotion(options = {}) {
  const {
    window = defaultWindow,
    eventFilter = bypassFilter
  } = options;
  const acceleration = ref({ x: null, y: null, z: null });
  const rotationRate = ref({ alpha: null, beta: null, gamma: null });
  const interval = ref(0);
  const accelerationIncludingGravity = ref({
    x: null,
    y: null,
    z: null
  });
  if (window) {
    const onDeviceMotion = createFilterWrapper(eventFilter, (event) => {
      acceleration.value = event.acceleration;
      accelerationIncludingGravity.value = event.accelerationIncludingGravity;
      rotationRate.value = event.rotationRate;
      interval.value = event.interval;
    });
    useEventListener(window, "devicemotion", onDeviceMotion);
  }
  return {
    acceleration,
    accelerationIncludingGravity,
    rotationRate,
    interval
  };
}

function useDeviceOrientation(options = {}) {
  const { window = defaultWindow } = options;
  const isSupported = useSupported(() => window && "DeviceOrientationEvent" in window);
  const isAbsolute = ref(false);
  const alpha = ref(null);
  const beta = ref(null);
  const gamma = ref(null);
  if (window && isSupported.value) {
    useEventListener(window, "deviceorientation", (event) => {
      isAbsolute.value = event.absolute;
      alpha.value = event.alpha;
      beta.value = event.beta;
      gamma.value = event.gamma;
    });
  }
  return {
    isSupported,
    isAbsolute,
    alpha,
    beta,
    gamma
  };
}

const DEVICE_PIXEL_RATIO_SCALES = (/* unused pure expression or super */ null && ([
  1,
  1.325,
  1.4,
  1.5,
  1.8,
  2,
  2.4,
  2.5,
  2.75,
  3,
  3.5,
  4
]));
function useDevicePixelRatio({
  window = defaultWindow
} = {}) {
  if (!window) {
    return {
      pixelRatio: ref(1)
    };
  }
  const pixelRatio = ref(window.devicePixelRatio);
  const handleDevicePixelRatio = () => {
    pixelRatio.value = window.devicePixelRatio;
  };
  useEventListener(window, "resize", handleDevicePixelRatio, { passive: true });
  DEVICE_PIXEL_RATIO_SCALES.forEach((dppx) => {
    const mqlMin = useMediaQuery(`screen and (min-resolution: ${dppx}dppx)`);
    const mqlMax = useMediaQuery(`screen and (max-resolution: ${dppx}dppx)`);
    watch([mqlMin, mqlMax], handleDevicePixelRatio);
  });
  return { pixelRatio };
}

function usePermission(permissionDesc, options = {}) {
  const {
    controls = false,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "permissions" in navigator);
  let permissionStatus;
  const desc = typeof permissionDesc === "string" ? { name: permissionDesc } : permissionDesc;
  const state = ref();
  const onChange = () => {
    if (permissionStatus)
      state.value = permissionStatus.state;
  };
  const query = createSingletonPromise(async () => {
    if (!isSupported.value)
      return;
    if (!permissionStatus) {
      try {
        permissionStatus = await navigator.permissions.query(desc);
        useEventListener(permissionStatus, "change", onChange);
        onChange();
      } catch (e) {
        state.value = "prompt";
      }
    }
    return permissionStatus;
  });
  query();
  if (controls) {
    return {
      state,
      isSupported,
      query
    };
  } else {
    return state;
  }
}

function useDevicesList(options = {}) {
  const {
    navigator = defaultNavigator,
    requestPermissions = false,
    constraints = { audio: true, video: true },
    onUpdated
  } = options;
  const devices = ref([]);
  const videoInputs = computed(() => devices.value.filter((i) => i.kind === "videoinput"));
  const audioInputs = computed(() => devices.value.filter((i) => i.kind === "audioinput"));
  const audioOutputs = computed(() => devices.value.filter((i) => i.kind === "audiooutput"));
  const isSupported = useSupported(() => navigator && navigator.mediaDevices && navigator.mediaDevices.enumerateDevices);
  const permissionGranted = ref(false);
  async function update() {
    if (!isSupported.value)
      return;
    devices.value = await navigator.mediaDevices.enumerateDevices();
    onUpdated == null ? void 0 : onUpdated(devices.value);
  }
  async function ensurePermissions() {
    if (!isSupported.value)
      return false;
    if (permissionGranted.value)
      return true;
    const { state, query } = usePermission("camera", { controls: true });
    await query();
    if (state.value !== "granted") {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      stream.getTracks().forEach((t) => t.stop());
      update();
      permissionGranted.value = true;
    } else {
      permissionGranted.value = true;
    }
    return permissionGranted.value;
  }
  if (isSupported.value) {
    if (requestPermissions)
      ensurePermissions();
    useEventListener(navigator.mediaDevices, "devicechange", update);
    update();
  }
  return {
    devices,
    ensurePermissions,
    permissionGranted,
    videoInputs,
    audioInputs,
    audioOutputs,
    isSupported
  };
}

function useDisplayMedia(options = {}) {
  var _a;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const video = options.video;
  const audio = options.audio;
  const { navigator = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _a2;
    return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getDisplayMedia;
  });
  const constraint = { audio, video };
  const stream = shallowRef();
  async function _start() {
    if (!isSupported.value || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getDisplayMedia(constraint);
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    enabled
  };
}

function useDocumentVisibility({ document = defaultDocument } = {}) {
  if (!document)
    return ref("visible");
  const visibility = ref(document.visibilityState);
  useEventListener(document, "visibilitychange", () => {
    visibility.value = document.visibilityState;
  });
  return visibility;
}

var __defProp$e = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$g = Object.getOwnPropertySymbols;
var __hasOwnProp$g = Object.prototype.hasOwnProperty;
var __propIsEnum$g = Object.prototype.propertyIsEnumerable;
var __defNormalProp$e = (obj, key, value) => key in obj ? __defProp$e(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$e = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$g.call(b, prop))
      __defNormalProp$e(a, prop, b[prop]);
  if (__getOwnPropSymbols$g)
    for (var prop of __getOwnPropSymbols$g(b)) {
      if (__propIsEnum$g.call(b, prop))
        __defNormalProp$e(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
function useDraggable(target, options = {}) {
  var _a, _b;
  const draggingElement = (_a = options.draggingElement) != null ? _a : defaultWindow;
  const position = ref((_b = resolveUnref(options.initialValue)) != null ? _b : { x: 0, y: 0 });
  const pressedDelta = ref();
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const handleEvent = (e) => {
    if (resolveUnref(options.preventDefault))
      e.preventDefault();
    if (resolveUnref(options.stopPropagation))
      e.stopPropagation();
  };
  const start = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (resolveUnref(options.exact) && e.target !== resolveUnref(target))
      return;
    const rect = resolveUnref(target).getBoundingClientRect();
    const pos = {
      x: e.pageX - rect.left,
      y: e.pageY - rect.top
    };
    if (((_a2 = options.onStart) == null ? void 0 : _a2.call(options, pos, e)) === false)
      return;
    pressedDelta.value = pos;
    handleEvent(e);
  };
  const move = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    position.value = {
      x: e.pageX - pressedDelta.value.x,
      y: e.pageY - pressedDelta.value.y
    };
    (_a2 = options.onMove) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  const end = (e) => {
    var _a2;
    if (!filterEvent(e))
      return;
    if (!pressedDelta.value)
      return;
    pressedDelta.value = void 0;
    (_a2 = options.onEnd) == null ? void 0 : _a2.call(options, position.value, e);
    handleEvent(e);
  };
  if (isClient) {
    useEventListener(target, "pointerdown", start, true);
    useEventListener(draggingElement, "pointermove", move, true);
    useEventListener(draggingElement, "pointerup", end, true);
  }
  return __spreadProps$4(__spreadValues$e({}, toRefs(position)), {
    position,
    isDragging: computed(() => !!pressedDelta.value),
    style: computed(() => `left:${position.value.x}px;top:${position.value.y}px;`)
  });
}

function useDropZone(target, onDrop) {
  const isOverDropZone = ref(false);
  let counter = 0;
  if (isClient) {
    useEventListener(target, "dragenter", (event) => {
      event.preventDefault();
      counter += 1;
      isOverDropZone.value = true;
    });
    useEventListener(target, "dragover", (event) => {
      event.preventDefault();
    });
    useEventListener(target, "dragleave", (event) => {
      event.preventDefault();
      counter -= 1;
      if (counter === 0)
        isOverDropZone.value = false;
    });
    useEventListener(target, "drop", (event) => {
      var _a, _b;
      event.preventDefault();
      counter = 0;
      isOverDropZone.value = false;
      const files = Array.from((_b = (_a = event.dataTransfer) == null ? void 0 : _a.files) != null ? _b : []);
      onDrop == null ? void 0 : onDrop(files.length === 0 ? null : files);
    });
  }
  return {
    isOverDropZone
  };
}

var __getOwnPropSymbols$f = Object.getOwnPropertySymbols;
var __hasOwnProp$f = Object.prototype.hasOwnProperty;
var __propIsEnum$f = Object.prototype.propertyIsEnumerable;
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$f.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$f)
    for (var prop of __getOwnPropSymbols$f(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$f.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useResizeObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, observerOptions = __objRest$2(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window && "ResizeObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.watch)(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window && el) {
      observer = new ResizeObserver(callback);
      observer.observe(el, observerOptions);
    }
  }, { immediate: true, flush: "post" });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  (0,_vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .tryOnScopeDispose */ .IY)(stop);
  return {
    isSupported,
    stop
  };
}

function useElementBounding(target, options = {}) {
  const {
    reset = true,
    windowResize = true,
    windowScroll = true,
    immediate = true
  } = options;
  const height = ref(0);
  const bottom = ref(0);
  const left = ref(0);
  const right = ref(0);
  const top = ref(0);
  const width = ref(0);
  const x = ref(0);
  const y = ref(0);
  function update() {
    const el = unrefElement(target);
    if (!el) {
      if (reset) {
        height.value = 0;
        bottom.value = 0;
        left.value = 0;
        right.value = 0;
        top.value = 0;
        width.value = 0;
        x.value = 0;
        y.value = 0;
      }
      return;
    }
    const rect = el.getBoundingClientRect();
    height.value = rect.height;
    bottom.value = rect.bottom;
    left.value = rect.left;
    right.value = rect.right;
    top.value = rect.top;
    width.value = rect.width;
    x.value = rect.x;
    y.value = rect.y;
  }
  useResizeObserver(target, update);
  watch(() => unrefElement(target), (ele) => !ele && update());
  if (windowScroll)
    useEventListener("scroll", update, { passive: true });
  if (windowResize)
    useEventListener("resize", update, { passive: true });
  tryOnMounted(() => {
    if (immediate)
      update();
  });
  return {
    height,
    bottom,
    left,
    right,
    top,
    width,
    x,
    y,
    update
  };
}

function useRafFn(fn, options = {}) {
  const {
    immediate = true,
    window = defaultWindow
  } = options;
  const isActive = ref(false);
  let rafId = null;
  function loop() {
    if (!isActive.value || !window)
      return;
    fn();
    rafId = window.requestAnimationFrame(loop);
  }
  function resume() {
    if (!isActive.value && window) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
    if (rafId != null && window) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  if (immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$d = Object.defineProperty;
var __getOwnPropSymbols$e = Object.getOwnPropertySymbols;
var __hasOwnProp$e = Object.prototype.hasOwnProperty;
var __propIsEnum$e = Object.prototype.propertyIsEnumerable;
var __defNormalProp$d = (obj, key, value) => key in obj ? __defProp$d(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$d = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$e.call(b, prop))
      __defNormalProp$d(a, prop, b[prop]);
  if (__getOwnPropSymbols$e)
    for (var prop of __getOwnPropSymbols$e(b)) {
      if (__propIsEnum$e.call(b, prop))
        __defNormalProp$d(a, prop, b[prop]);
    }
  return a;
};
function useElementByPoint(options) {
  const element = ref(null);
  const { x, y } = options;
  const controls = useRafFn(() => {
    element.value = document.elementFromPoint(resolveUnref(x), resolveUnref(y));
  });
  return __spreadValues$d({
    element
  }, controls);
}

function useElementHover(el) {
  const isHovered = ref(false);
  useEventListener(el, "mouseenter", () => isHovered.value = true);
  useEventListener(el, "mouseleave", () => isHovered.value = false);
  return isHovered;
}

function useElementSize(target, initialSize = { width: 0, height: 0 }, options = {}) {
  const width = ref(initialSize.width);
  const height = ref(initialSize.height);
  useResizeObserver(target, ([entry]) => {
    width.value = entry.contentRect.width;
    height.value = entry.contentRect.height;
  }, options);
  watch(() => unrefElement(target), (ele) => {
    width.value = ele ? initialSize.width : 0;
    height.value = ele ? initialSize.height : 0;
  });
  return {
    width,
    height
  };
}

function useElementVisibility(element, { window = defaultWindow, scrollTarget } = {}) {
  const elementIsVisible = ref(false);
  const testBounding = () => {
    if (!window)
      return;
    const document = window.document;
    const el = resolveUnref(element);
    if (!el) {
      elementIsVisible.value = false;
    } else {
      const rect = el.getBoundingClientRect();
      elementIsVisible.value = rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth) && rect.bottom >= 0 && rect.right >= 0;
    }
  };
  tryOnMounted(testBounding);
  if (window) {
    tryOnMounted(() => useEventListener(() => resolveUnref(scrollTarget) || window, "scroll", testBounding, { capture: false, passive: true }));
  }
  return elementIsVisible;
}

const events = new Map();

function useEventBus(key) {
  const scope = getCurrentScope();
  function on(listener) {
    var _a;
    const listeners = events.get(key) || [];
    listeners.push(listener);
    events.set(key, listeners);
    const _off = () => off(listener);
    (_a = scope == null ? void 0 : scope.cleanups) == null ? void 0 : _a.push(_off);
    return _off;
  }
  function once(listener) {
    function _listener(...args) {
      off(_listener);
      listener(...args);
    }
    return on(_listener);
  }
  function off(listener) {
    const listeners = events.get(key);
    if (!listeners)
      return;
    const index = listeners.indexOf(listener);
    if (index > -1)
      listeners.splice(index, 1);
    if (!listeners.length)
      events.delete(key);
  }
  function reset() {
    events.delete(key);
  }
  function emit(event, payload) {
    var _a;
    (_a = events.get(key)) == null ? void 0 : _a.forEach((v) => v(event, payload));
  }
  return { on, once, off, emit, reset };
}

function useEventSource(url, events = [], options = {}) {
  const event = ref(null);
  const data = ref(null);
  const status = ref("CONNECTING");
  const eventSource = ref(null);
  const error = ref(null);
  const {
    withCredentials = false
  } = options;
  const close = () => {
    if (eventSource.value) {
      eventSource.value.close();
      eventSource.value = null;
      status.value = "CLOSED";
    }
  };
  const es = new EventSource(url, { withCredentials });
  eventSource.value = es;
  es.onopen = () => {
    status.value = "OPEN";
    error.value = null;
  };
  es.onerror = (e) => {
    status.value = "CLOSED";
    error.value = e;
  };
  es.onmessage = (e) => {
    event.value = null;
    data.value = e.data;
  };
  for (const event_name of events) {
    useEventListener(es, event_name, (e) => {
      event.value = event_name;
      data.value = e.data || null;
    });
  }
  tryOnScopeDispose(() => {
    close();
  });
  return {
    eventSource,
    event,
    data,
    status,
    error,
    close
  };
}

function useEyeDropper(options = {}) {
  const { initialValue = "" } = options;
  const isSupported = useSupported(() => typeof window !== "undefined" && "EyeDropper" in window);
  const sRGBHex = ref(initialValue);
  async function open(openOptions) {
    if (!isSupported.value)
      return;
    const eyeDropper = new window.EyeDropper();
    const result = await eyeDropper.open(openOptions);
    sRGBHex.value = result.sRGBHex;
    return result;
  }
  return { isSupported, sRGBHex, open };
}

function useFavicon(newIcon = null, options = {}) {
  const {
    baseUrl = "",
    rel = "icon",
    document = defaultDocument
  } = options;
  const favicon = resolveRef(newIcon);
  const applyIcon = (icon) => {
    document == null ? void 0 : document.head.querySelectorAll(`link[rel*="${rel}"]`).forEach((el) => el.href = `${baseUrl}${icon}`);
  };
  watch(favicon, (i, o) => {
    if (isString(i) && i !== o)
      applyIcon(i);
  }, { immediate: true });
  return favicon;
}

var __defProp$c = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$d = Object.getOwnPropertySymbols;
var __hasOwnProp$d = Object.prototype.hasOwnProperty;
var __propIsEnum$d = Object.prototype.propertyIsEnumerable;
var __defNormalProp$c = (obj, key, value) => key in obj ? __defProp$c(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$c = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$d.call(b, prop))
      __defNormalProp$c(a, prop, b[prop]);
  if (__getOwnPropSymbols$d)
    for (var prop of __getOwnPropSymbols$d(b)) {
      if (__propIsEnum$d.call(b, prop))
        __defNormalProp$c(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
const payloadMapping = {
  json: "application/json",
  text: "text/plain",
  formData: "multipart/form-data"
};
function isFetchOptions(obj) {
  return containsProp(obj, "immediate", "refetch", "initialData", "timeout", "beforeFetch", "afterFetch", "onFetchError", "fetch");
}
function headersToObject(headers) {
  if (typeof Headers !== "undefined" && headers instanceof Headers)
    return Object.fromEntries([...headers.entries()]);
  return headers;
}
function chainCallbacks(...callbacks) {
  return (ctx) => {
    callbacks.forEach(async (callback) => {
      if (callback)
        ctx = __spreadValues$c(__spreadValues$c({}, ctx), await callback(ctx));
    });
    return ctx;
  };
}
function createFetch(config = {}) {
  const _options = config.options || {};
  const _fetchOptions = config.fetchOptions || {};
  function useFactoryFetch(url, ...args) {
    const computedUrl = computed(() => config.baseUrl ? joinPaths(resolveUnref(config.baseUrl), resolveUnref(url)) : resolveUnref(url));
    let options = _options;
    let fetchOptions = _fetchOptions;
    if (args.length > 0) {
      if (isFetchOptions(args[0])) {
        options = __spreadProps$3(__spreadValues$c(__spreadValues$c({}, options), args[0]), {
          beforeFetch: chainCallbacks(_options.beforeFetch, args[0].beforeFetch),
          afterFetch: chainCallbacks(_options.afterFetch, args[0].afterFetch),
          onFetchError: chainCallbacks(_options.onFetchError, args[0].onFetchError)
        });
      } else {
        fetchOptions = __spreadProps$3(__spreadValues$c(__spreadValues$c({}, fetchOptions), args[0]), {
          headers: __spreadValues$c(__spreadValues$c({}, headersToObject(fetchOptions.headers) || {}), headersToObject(args[0].headers) || {})
        });
      }
    }
    if (args.length > 1 && isFetchOptions(args[1])) {
      options = __spreadProps$3(__spreadValues$c(__spreadValues$c({}, options), args[1]), {
        beforeFetch: chainCallbacks(_options.beforeFetch, args[1].beforeFetch),
        afterFetch: chainCallbacks(_options.afterFetch, args[1].afterFetch),
        onFetchError: chainCallbacks(_options.onFetchError, args[1].onFetchError)
      });
    }
    return useFetch(computedUrl, fetchOptions, options);
  }
  return useFactoryFetch;
}
function useFetch(url, ...args) {
  var _a;
  const supportsAbort = typeof AbortController === "function";
  let fetchOptions = {};
  let options = { immediate: true, refetch: false, timeout: 0 };
  const config = {
    method: "GET",
    type: "text",
    payload: void 0
  };
  if (args.length > 0) {
    if (isFetchOptions(args[0]))
      options = __spreadValues$c(__spreadValues$c({}, options), args[0]);
    else
      fetchOptions = args[0];
  }
  if (args.length > 1) {
    if (isFetchOptions(args[1]))
      options = __spreadValues$c(__spreadValues$c({}, options), args[1]);
  }
  const {
    fetch = (_a = defaultWindow) == null ? void 0 : _a.fetch,
    initialData,
    timeout
  } = options;
  const responseEvent = createEventHook();
  const errorEvent = createEventHook();
  const finallyEvent = createEventHook();
  const isFinished = ref(false);
  const isFetching = ref(false);
  const aborted = ref(false);
  const statusCode = ref(null);
  const response = shallowRef(null);
  const error = shallowRef(null);
  const data = shallowRef(initialData);
  const canAbort = computed(() => supportsAbort && isFetching.value);
  let controller;
  let timer;
  const abort = () => {
    if (supportsAbort && controller)
      controller.abort();
  };
  const loading = (isLoading) => {
    isFetching.value = isLoading;
    isFinished.value = !isLoading;
  };
  if (timeout)
    timer = useTimeoutFn(abort, timeout, { immediate: false });
  const execute = async (throwOnFailed = false) => {
    var _a2;
    loading(true);
    error.value = null;
    statusCode.value = null;
    aborted.value = false;
    controller = void 0;
    if (supportsAbort) {
      controller = new AbortController();
      controller.signal.onabort = () => aborted.value = true;
      fetchOptions = __spreadProps$3(__spreadValues$c({}, fetchOptions), {
        signal: controller.signal
      });
    }
    const defaultFetchOptions = {
      method: config.method,
      headers: {}
    };
    if (config.payload) {
      const headers = headersToObject(defaultFetchOptions.headers);
      if (config.payloadType)
        headers["Content-Type"] = (_a2 = payloadMapping[config.payloadType]) != null ? _a2 : config.payloadType;
      const payload = resolveUnref(config.payload);
      defaultFetchOptions.body = config.payloadType === "json" ? JSON.stringify(payload) : payload;
    }
    let isCanceled = false;
    const context = { url: resolveUnref(url), options: __spreadValues$c(__spreadValues$c({}, defaultFetchOptions), fetchOptions), cancel: () => {
      isCanceled = true;
    } };
    if (options.beforeFetch)
      Object.assign(context, await options.beforeFetch(context));
    if (isCanceled || !fetch) {
      loading(false);
      return Promise.resolve(null);
    }
    let responseData = null;
    if (timer)
      timer.start();
    return new Promise((resolve, reject) => {
      var _a3;
      fetch(context.url, __spreadProps$3(__spreadValues$c(__spreadValues$c({}, defaultFetchOptions), context.options), {
        headers: __spreadValues$c(__spreadValues$c({}, headersToObject(defaultFetchOptions.headers)), headersToObject((_a3 = context.options) == null ? void 0 : _a3.headers))
      })).then(async (fetchResponse) => {
        response.value = fetchResponse;
        statusCode.value = fetchResponse.status;
        responseData = await fetchResponse[config.type]();
        if (options.afterFetch && statusCode.value >= 200 && statusCode.value < 300)
          ({ data: responseData } = await options.afterFetch({ data: responseData, response: fetchResponse }));
        data.value = responseData;
        if (!fetchResponse.ok)
          throw new Error(fetchResponse.statusText);
        responseEvent.trigger(fetchResponse);
        return resolve(fetchResponse);
      }).catch(async (fetchError) => {
        let errorData = fetchError.message || fetchError.name;
        if (options.onFetchError)
          ({ data: responseData, error: errorData } = await options.onFetchError({ data: responseData, error: fetchError, response: response.value }));
        data.value = responseData;
        error.value = errorData;
        errorEvent.trigger(fetchError);
        if (throwOnFailed)
          return reject(fetchError);
        return resolve(null);
      }).finally(() => {
        loading(false);
        if (timer)
          timer.stop();
        finallyEvent.trigger(null);
      });
    });
  };
  const refetch = resolveRef(options.refetch);
  watch([
    refetch,
    resolveRef(url)
  ], ([refetch2]) => refetch2 && execute(), { deep: true });
  const shell = {
    isFinished,
    statusCode,
    response,
    error,
    data,
    isFetching,
    canAbort,
    aborted,
    abort,
    execute,
    onFetchResponse: responseEvent.on,
    onFetchError: errorEvent.on,
    onFetchFinally: finallyEvent.on,
    get: setMethod("GET"),
    put: setMethod("PUT"),
    post: setMethod("POST"),
    delete: setMethod("DELETE"),
    patch: setMethod("PATCH"),
    head: setMethod("HEAD"),
    options: setMethod("OPTIONS"),
    json: setType("json"),
    text: setType("text"),
    blob: setType("blob"),
    arrayBuffer: setType("arrayBuffer"),
    formData: setType("formData")
  };
  function setMethod(method) {
    return (payload, payloadType) => {
      if (!isFetching.value) {
        config.method = method;
        config.payload = payload;
        config.payloadType = payloadType;
        if (isRef(config.payload)) {
          watch([
            refetch,
            resolveRef(config.payload)
          ], ([refetch2]) => refetch2 && execute(), { deep: true });
        }
        const rawPayload = resolveUnref(config.payload);
        if (!payloadType && rawPayload && Object.getPrototypeOf(rawPayload) === Object.prototype)
          config.payloadType = "json";
        return __spreadProps$3(__spreadValues$c({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  function waitUntilFinished() {
    return new Promise((resolve, reject) => {
      until(isFinished).toBe(true).then(() => resolve(shell)).catch((error2) => reject(error2));
    });
  }
  function setType(type) {
    return () => {
      if (!isFetching.value) {
        config.type = type;
        return __spreadProps$3(__spreadValues$c({}, shell), {
          then(onFulfilled, onRejected) {
            return waitUntilFinished().then(onFulfilled, onRejected);
          }
        });
      }
      return void 0;
    };
  }
  if (options.immediate)
    setTimeout(execute, 0);
  return __spreadProps$3(__spreadValues$c({}, shell), {
    then(onFulfilled, onRejected) {
      return waitUntilFinished().then(onFulfilled, onRejected);
    }
  });
}
function joinPaths(start, end) {
  if (!start.endsWith("/") && !end.startsWith("/"))
    return `${start}/${end}`;
  return `${start}${end}`;
}

var __defProp$b = Object.defineProperty;
var __getOwnPropSymbols$c = Object.getOwnPropertySymbols;
var __hasOwnProp$c = Object.prototype.hasOwnProperty;
var __propIsEnum$c = Object.prototype.propertyIsEnumerable;
var __defNormalProp$b = (obj, key, value) => key in obj ? __defProp$b(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$b = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$c.call(b, prop))
      __defNormalProp$b(a, prop, b[prop]);
  if (__getOwnPropSymbols$c)
    for (var prop of __getOwnPropSymbols$c(b)) {
      if (__propIsEnum$c.call(b, prop))
        __defNormalProp$b(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_OPTIONS = {
  multiple: true,
  accept: "*"
};
function useFileDialog(options = {}) {
  const {
    document = defaultDocument
  } = options;
  const files = ref(null);
  let input;
  if (document) {
    input = document.createElement("input");
    input.type = "file";
    input.onchange = (event) => {
      const result = event.target;
      files.value = result.files;
    };
  }
  const open = (localOptions) => {
    if (!input)
      return;
    const _options = __spreadValues$b(__spreadValues$b(__spreadValues$b({}, DEFAULT_OPTIONS), options), localOptions);
    input.multiple = _options.multiple;
    input.accept = _options.accept;
    input.capture = _options.capture;
    input.click();
  };
  const reset = () => {
    files.value = null;
    if (input)
      input.value = "";
  };
  return {
    files: readonly(files),
    open,
    reset
  };
}

var __defProp$a = Object.defineProperty;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$a = (obj, key, value) => key in obj ? __defProp$a(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$a = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$a(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$a(a, prop, b[prop]);
    }
  return a;
};
function useFileSystemAccess(options = {}) {
  const {
    window: _window = defaultWindow,
    dataType = "Text"
  } = unref(options);
  const window = _window;
  const isSupported = useSupported(() => window && "showSaveFilePicker" in window && "showOpenFilePicker" in window);
  const fileHandle = ref();
  const data = ref();
  const file = ref();
  const fileName = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.name) != null ? _b : "";
  });
  const fileMIME = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.type) != null ? _b : "";
  });
  const fileSize = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.size) != null ? _b : 0;
  });
  const fileLastModified = computed(() => {
    var _a, _b;
    return (_b = (_a = file.value) == null ? void 0 : _a.lastModified) != null ? _b : 0;
  });
  async function open(_options = {}) {
    if (!isSupported.value)
      return;
    const [handle] = await window.showOpenFilePicker(__spreadValues$a(__spreadValues$a({}, unref(options)), _options));
    fileHandle.value = handle;
    await updateFile();
    await updateData();
  }
  async function create(_options = {}) {
    if (!isSupported.value)
      return;
    fileHandle.value = await window.showSaveFilePicker(__spreadValues$a(__spreadValues$a({}, unref(options)), _options));
    data.value = void 0;
    await updateFile();
    await updateData();
  }
  async function save(_options = {}) {
    if (!isSupported.value)
      return;
    if (!fileHandle.value)
      return saveAs(_options);
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function saveAs(_options = {}) {
    if (!isSupported.value)
      return;
    fileHandle.value = await window.showSaveFilePicker(__spreadValues$a(__spreadValues$a({}, unref(options)), _options));
    if (data.value) {
      const writableStream = await fileHandle.value.createWritable();
      await writableStream.write(data.value);
      await writableStream.close();
    }
    await updateFile();
  }
  async function updateFile() {
    var _a;
    file.value = await ((_a = fileHandle.value) == null ? void 0 : _a.getFile());
  }
  async function updateData() {
    var _a, _b;
    if (unref(dataType) === "Text")
      data.value = await ((_a = file.value) == null ? void 0 : _a.text());
    if (unref(dataType) === "ArrayBuffer")
      data.value = await ((_b = file.value) == null ? void 0 : _b.arrayBuffer());
    if (unref(dataType) === "Blob")
      data.value = file.value;
  }
  watch(() => unref(dataType), updateData);
  return {
    isSupported,
    data,
    file,
    fileName,
    fileMIME,
    fileSize,
    fileLastModified,
    open,
    create,
    save,
    saveAs,
    updateData
  };
}

function useFocus(target, options = {}) {
  const { initialValue = false } = options;
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed({
    get() {
      return isDef(activeElement.value) && isDef(targetElement.value) && activeElement.value === targetElement.value;
    },
    set(value) {
      var _a, _b;
      if (!value && focused.value)
        (_a = targetElement.value) == null ? void 0 : _a.blur();
      if (value && !focused.value)
        (_b = targetElement.value) == null ? void 0 : _b.focus();
    }
  });
  watch(targetElement, () => {
    focused.value = initialValue;
  }, { immediate: true, flush: "post" });
  return { focused };
}

function useFocusWithin(target, options = {}) {
  const activeElement = useActiveElement(options);
  const targetElement = computed(() => unrefElement(target));
  const focused = computed(() => targetElement.value && activeElement.value ? targetElement.value.contains(activeElement.value) : false);
  return { focused };
}

function useFps(options) {
  var _a;
  const fps = ref(0);
  if (typeof performance === "undefined")
    return fps;
  const every = (_a = options == null ? void 0 : options.every) != null ? _a : 10;
  let last = performance.now();
  let ticks = 0;
  useRafFn(() => {
    ticks += 1;
    if (ticks >= every) {
      const now = performance.now();
      const diff = now - last;
      fps.value = Math.round(1e3 / (diff / ticks));
      last = now;
      ticks = 0;
    }
  });
  return fps;
}

const functionsMap = (/* unused pure expression or super */ null && ([
  [
    "requestFullscreen",
    "exitFullscreen",
    "fullscreenElement",
    "fullscreenEnabled",
    "fullscreenchange",
    "fullscreenerror"
  ],
  [
    "webkitRequestFullscreen",
    "webkitExitFullscreen",
    "webkitFullscreenElement",
    "webkitFullscreenEnabled",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "webkitRequestFullScreen",
    "webkitCancelFullScreen",
    "webkitCurrentFullScreenElement",
    "webkitCancelFullScreen",
    "webkitfullscreenchange",
    "webkitfullscreenerror"
  ],
  [
    "mozRequestFullScreen",
    "mozCancelFullScreen",
    "mozFullScreenElement",
    "mozFullScreenEnabled",
    "mozfullscreenchange",
    "mozfullscreenerror"
  ],
  [
    "msRequestFullscreen",
    "msExitFullscreen",
    "msFullscreenElement",
    "msFullscreenEnabled",
    "MSFullscreenChange",
    "MSFullscreenError"
  ]
]));
function useFullscreen(target, options = {}) {
  const { document = defaultDocument, autoExit = false } = options;
  const targetRef = target || (document == null ? void 0 : document.querySelector("html"));
  const isFullscreen = ref(false);
  let map = functionsMap[0];
  const isSupported = useSupported(() => {
    if (!document) {
      return false;
    } else {
      for (const m of functionsMap) {
        if (m[1] in document) {
          map = m;
          return true;
        }
      }
    }
    return false;
  });
  const [REQUEST, EXIT, ELEMENT, , EVENT] = map;
  async function exit() {
    if (!isSupported.value)
      return;
    if (document == null ? void 0 : document[ELEMENT])
      await document[EXIT]();
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value)
      return;
    await exit();
    const target2 = unrefElement(targetRef);
    if (target2) {
      await target2[REQUEST]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    if (isFullscreen.value)
      await exit();
    else
      await enter();
  }
  if (document) {
    useEventListener(document, EVENT, () => {
      isFullscreen.value = !!(document == null ? void 0 : document[ELEMENT]);
    }, false);
  }
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}

function mapGamepadToXbox360Controller(gamepad) {
  return computed(() => {
    if (gamepad.value) {
      return {
        buttons: {
          a: gamepad.value.buttons[0],
          b: gamepad.value.buttons[1],
          x: gamepad.value.buttons[2],
          y: gamepad.value.buttons[3]
        },
        bumper: {
          left: gamepad.value.buttons[4],
          right: gamepad.value.buttons[5]
        },
        triggers: {
          left: gamepad.value.buttons[6],
          right: gamepad.value.buttons[7]
        },
        stick: {
          left: {
            horizontal: gamepad.value.axes[0],
            vertical: gamepad.value.axes[1],
            button: gamepad.value.buttons[10]
          },
          right: {
            horizontal: gamepad.value.axes[2],
            vertical: gamepad.value.axes[3],
            button: gamepad.value.buttons[11]
          }
        },
        dpad: {
          up: gamepad.value.buttons[12],
          down: gamepad.value.buttons[13],
          left: gamepad.value.buttons[14],
          right: gamepad.value.buttons[15]
        },
        back: gamepad.value.buttons[8],
        start: gamepad.value.buttons[9]
      };
    }
    return null;
  });
}
function useGamepad(options = {}) {
  const {
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "getGamepads" in navigator);
  const gamepads = ref([]);
  const onConnectedHook = createEventHook();
  const onDisconnectedHook = createEventHook();
  const stateFromGamepad = (gamepad) => {
    const hapticActuators = [];
    const vibrationActuator = "vibrationActuator" in gamepad ? gamepad.vibrationActuator : null;
    if (vibrationActuator)
      hapticActuators.push(vibrationActuator);
    if (gamepad.hapticActuators)
      hapticActuators.push(...gamepad.hapticActuators);
    return {
      id: gamepad.id,
      hapticActuators,
      index: gamepad.index,
      mapping: gamepad.mapping,
      connected: gamepad.connected,
      timestamp: gamepad.timestamp,
      axes: gamepad.axes.map((axes) => axes),
      buttons: gamepad.buttons.map((button) => ({ pressed: button.pressed, touched: button.touched, value: button.value }))
    };
  };
  const updateGamepadState = () => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    for (let i = 0; i < _gamepads.length; ++i) {
      const gamepad = _gamepads[i];
      if (gamepad) {
        const index = gamepads.value.findIndex(({ index: index2 }) => index2 === gamepad.index);
        if (index > -1)
          gamepads.value[index] = stateFromGamepad(gamepad);
      }
    }
  };
  const { isActive, pause, resume } = useRafFn(updateGamepadState);
  const onGamepadConnected = (gamepad) => {
    if (!gamepads.value.some(({ index }) => index === gamepad.index)) {
      gamepads.value.push(stateFromGamepad(gamepad));
      onConnectedHook.trigger(gamepad.index);
    }
    resume();
  };
  const onGamepadDisconnected = (gamepad) => {
    gamepads.value = gamepads.value.filter((x) => x.index !== gamepad.index);
    onDisconnectedHook.trigger(gamepad.index);
  };
  useEventListener("gamepadconnected", (e) => onGamepadConnected(e.gamepad));
  useEventListener("gamepaddisconnected", (e) => onGamepadDisconnected(e.gamepad));
  tryOnMounted(() => {
    const _gamepads = (navigator == null ? void 0 : navigator.getGamepads()) || [];
    if (_gamepads) {
      for (let i = 0; i < _gamepads.length; ++i) {
        const gamepad = _gamepads[i];
        if (gamepad)
          onGamepadConnected(gamepad);
      }
    }
  });
  pause();
  return {
    isSupported,
    onConnected: onConnectedHook.on,
    onDisconnected: onDisconnectedHook.on,
    gamepads,
    pause,
    resume,
    isActive
  };
}

function useGeolocation(options = {}) {
  const {
    enableHighAccuracy = true,
    maximumAge = 3e4,
    timeout = 27e3,
    navigator = defaultNavigator
  } = options;
  const isSupported = useSupported(() => navigator && "geolocation" in navigator);
  const locatedAt = ref(null);
  const error = ref(null);
  const coords = ref({
    accuracy: 0,
    latitude: Infinity,
    longitude: Infinity,
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null
  });
  function updatePosition(position) {
    locatedAt.value = position.timestamp;
    coords.value = position.coords;
    error.value = null;
  }
  let watcher;
  if (isSupported.value) {
    watcher = navigator.geolocation.watchPosition(updatePosition, (err) => error.value = err, {
      enableHighAccuracy,
      maximumAge,
      timeout
    });
  }
  tryOnScopeDispose(() => {
    if (watcher && navigator)
      navigator.geolocation.clearWatch(watcher);
  });
  return {
    isSupported,
    coords,
    locatedAt,
    error
  };
}

const defaultEvents$1 = (/* unused pure expression or super */ null && (["mousemove", "mousedown", "resize", "keydown", "touchstart", "wheel"]));
const oneMinute = 6e4;
function useIdle(timeout = oneMinute, options = {}) {
  const {
    initialState = false,
    listenForVisibilityChange = true,
    events = defaultEvents$1,
    window = defaultWindow,
    eventFilter = throttleFilter(50)
  } = options;
  const idle = ref(initialState);
  const lastActive = ref(timestamp());
  let timer;
  const onEvent = createFilterWrapper(eventFilter, () => {
    idle.value = false;
    lastActive.value = timestamp();
    clearTimeout(timer);
    timer = setTimeout(() => idle.value = true, timeout);
  });
  if (window) {
    const document = window.document;
    for (const event of events)
      useEventListener(window, event, onEvent, { passive: true });
    if (listenForVisibilityChange) {
      useEventListener(document, "visibilitychange", () => {
        if (!document.hidden)
          onEvent();
      });
    }
  }
  timer = setTimeout(() => idle.value = true, timeout);
  return { idle, lastActive };
}

var __defProp$9 = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
async function loadImage(options) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const { src, srcset, sizes } = options;
    img.src = src;
    if (srcset)
      img.srcset = srcset;
    if (sizes)
      img.sizes = sizes;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
const useImage = (options, asyncStateOptions = {}) => {
  const state = useAsyncState(() => loadImage(resolveUnref(options)), void 0, __spreadValues$9({
    resetOnExecute: true
  }, asyncStateOptions));
  watch(() => resolveUnref(options), () => state.execute(asyncStateOptions.delay), { deep: true });
  return state;
};

const ARRIVED_STATE_THRESHOLD_PIXELS = 1;
function useScroll(element, options = {}) {
  const {
    throttle = 0,
    idle = 200,
    onStop = noop,
    onScroll = noop,
    offset = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    },
    eventListenerOptions = {
      capture: false,
      passive: true
    }
  } = options;
  const x = ref(0);
  const y = ref(0);
  const isScrolling = ref(false);
  const arrivedState = reactive({
    left: true,
    right: false,
    top: true,
    bottom: false
  });
  const directions = reactive({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const onScrollEnd = useDebounceFn((e) => {
    isScrolling.value = false;
    directions.left = false;
    directions.right = false;
    directions.top = false;
    directions.bottom = false;
    onStop(e);
  }, throttle + idle);
  const onScrollHandler = (e) => {
    const eventTarget = e.target === document ? e.target.documentElement : e.target;
    const scrollLeft = eventTarget.scrollLeft;
    directions.left = scrollLeft < x.value;
    directions.right = scrollLeft > x.value;
    arrivedState.left = scrollLeft <= 0 + (offset.left || 0);
    arrivedState.right = scrollLeft + eventTarget.clientWidth >= eventTarget.scrollWidth - (offset.right || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    x.value = scrollLeft;
    let scrollTop = eventTarget.scrollTop;
    if (e.target === document && !scrollTop)
      scrollTop = document.body.scrollTop;
    directions.top = scrollTop < y.value;
    directions.bottom = scrollTop > y.value;
    arrivedState.top = scrollTop <= 0 + (offset.top || 0);
    arrivedState.bottom = scrollTop + eventTarget.clientHeight >= eventTarget.scrollHeight - (offset.bottom || 0) - ARRIVED_STATE_THRESHOLD_PIXELS;
    y.value = scrollTop;
    isScrolling.value = true;
    onScrollEnd(e);
    onScroll(e);
  };
  useEventListener(element, "scroll", throttle ? useThrottleFn(onScrollHandler, throttle) : onScrollHandler, eventListenerOptions);
  return {
    x,
    y,
    isScrolling,
    arrivedState,
    directions
  };
}

var __defProp$8 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
function useInfiniteScroll(element, onLoadMore, options = {}) {
  var _a, _b;
  const direction = (_a = options.direction) != null ? _a : "bottom";
  const state = reactive(useScroll(element, __spreadProps$2(__spreadValues$8({}, options), {
    offset: __spreadValues$8({
      [direction]: (_b = options.distance) != null ? _b : 0
    }, options.offset)
  })));
  watch(() => state.arrivedState[direction], async (v) => {
    var _a2, _b2;
    if (v) {
      const elem = resolveUnref(element);
      const previous = {
        height: (_a2 = elem == null ? void 0 : elem.scrollHeight) != null ? _a2 : 0,
        width: (_b2 = elem == null ? void 0 : elem.scrollWidth) != null ? _b2 : 0
      };
      await onLoadMore(state);
      if (options.preserveScrollPosition && elem) {
        nextTick(() => {
          elem.scrollTo({
            top: elem.scrollHeight - previous.height,
            left: elem.scrollWidth - previous.width
          });
        });
      }
    }
  });
}

function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0.1,
    window = defaultWindow
  } = options;
  const isSupported = useSupported(() => window && "IntersectionObserver" in window);
  let cleanup = noop;
  const stopWatch = isSupported.value ? watch(() => ({
    el: unrefElement(target),
    root: unrefElement(root)
  }), ({ el, root: root2 }) => {
    cleanup();
    if (!el)
      return;
    const observer = new IntersectionObserver(callback, {
      root: root2,
      rootMargin,
      threshold
    });
    observer.observe(el);
    cleanup = () => {
      observer.disconnect();
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" }) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const defaultEvents = (/* unused pure expression or super */ null && (["mousedown", "mouseup", "keydown", "keyup"]));
function useKeyModifier(modifier, options = {}) {
  const {
    events = defaultEvents,
    document = defaultDocument,
    initial = null
  } = options;
  const state = ref(initial);
  if (document) {
    events.forEach((listenerEvent) => {
      useEventListener(document, listenerEvent, (evt) => {
        if (typeof evt.getModifierState === "function")
          state.value = evt.getModifierState(modifier);
      });
    });
  }
  return state;
}

function useLocalStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.localStorage, options);
}

const DefaultMagicKeysAliasMap = {
  ctrl: "control",
  command: "meta",
  cmd: "meta",
  option: "alt",
  up: "arrowup",
  down: "arrowdown",
  left: "arrowleft",
  right: "arrowright"
};

function useMagicKeys(options = {}) {
  const {
    reactive: useReactive = false,
    target = defaultWindow,
    aliasMap = DefaultMagicKeysAliasMap,
    passive = true,
    onEventFired = noop
  } = options;
  const current = reactive(new Set());
  const obj = { toJSON() {
    return {};
  }, current };
  const refs = useReactive ? reactive(obj) : obj;
  const metaDeps = new Set();
  const usedKeys = new Set();
  function setRefs(key, value) {
    if (key in refs) {
      if (useReactive)
        refs[key] = value;
      else
        refs[key].value = value;
    }
  }
  function reset() {
    for (const key of usedKeys)
      setRefs(key, false);
  }
  function updateRefs(e, value) {
    var _a, _b;
    const key = (_a = e.key) == null ? void 0 : _a.toLowerCase();
    const code = (_b = e.code) == null ? void 0 : _b.toLowerCase();
    const values = [code, key].filter(Boolean);
    if (key) {
      if (value)
        current.add(key);
      else
        current.delete(key);
    }
    for (const key2 of values) {
      usedKeys.add(key2);
      setRefs(key2, value);
    }
    if (key === "meta" && !value) {
      metaDeps.forEach((key2) => {
        current.delete(key2);
        setRefs(key2, false);
      });
      metaDeps.clear();
    } else if (typeof e.getModifierState === "function" && e.getModifierState("Meta") && value) {
      [...current, ...values].forEach((key2) => metaDeps.add(key2));
    }
  }
  useEventListener(target, "keydown", (e) => {
    updateRefs(e, true);
    return onEventFired(e);
  }, { passive });
  useEventListener(target, "keyup", (e) => {
    updateRefs(e, false);
    return onEventFired(e);
  }, { passive });
  useEventListener("blur", reset, { passive: true });
  useEventListener("focus", reset, { passive: true });
  const proxy = new Proxy(refs, {
    get(target2, prop, rec) {
      if (typeof prop !== "string")
        return Reflect.get(target2, prop, rec);
      prop = prop.toLowerCase();
      if (prop in aliasMap)
        prop = aliasMap[prop];
      if (!(prop in refs)) {
        if (/[+_-]/.test(prop)) {
          const keys = prop.split(/[+_-]/g).map((i) => i.trim());
          refs[prop] = computed(() => keys.every((key) => unref(proxy[key])));
        } else {
          refs[prop] = ref(false);
        }
      }
      const r = Reflect.get(target2, prop, rec);
      return useReactive ? unref(r) : r;
    }
  });
  return proxy;
}

var __defProp$7 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
function usingElRef(source, cb) {
  if (resolveUnref(source))
    cb(resolveUnref(source));
}
function timeRangeToArray(timeRanges) {
  let ranges = [];
  for (let i = 0; i < timeRanges.length; ++i)
    ranges = [...ranges, [timeRanges.start(i), timeRanges.end(i)]];
  return ranges;
}
function tracksToArray(tracks) {
  return Array.from(tracks).map(({ label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }, id) => ({ id, label, kind, language, mode, activeCues, cues, inBandMetadataTrackDispatchType }));
}
const defaultOptions = {
  src: "",
  tracks: []
};
function useMediaControls(target, options = {}) {
  options = __spreadValues$7(__spreadValues$7({}, defaultOptions), options);
  const {
    document = defaultDocument
  } = options;
  const currentTime = ref(0);
  const duration = ref(0);
  const seeking = ref(false);
  const volume = ref(1);
  const waiting = ref(false);
  const ended = ref(false);
  const playing = ref(false);
  const rate = ref(1);
  const stalled = ref(false);
  const buffered = ref([]);
  const tracks = ref([]);
  const selectedTrack = ref(-1);
  const isPictureInPicture = ref(false);
  const muted = ref(false);
  const supportsPictureInPicture = document && "pictureInPictureEnabled" in document;
  const sourceErrorEvent = createEventHook();
  const disableTrack = (track) => {
    usingElRef(target, (el) => {
      if (track) {
        const id = isNumber(track) ? track : track.id;
        el.textTracks[id].mode = "disabled";
      } else {
        for (let i = 0; i < el.textTracks.length; ++i)
          el.textTracks[i].mode = "disabled";
      }
      selectedTrack.value = -1;
    });
  };
  const enableTrack = (track, disableTracks = true) => {
    usingElRef(target, (el) => {
      const id = isNumber(track) ? track : track.id;
      if (disableTracks)
        disableTrack();
      el.textTracks[id].mode = "showing";
      selectedTrack.value = id;
    });
  };
  const togglePictureInPicture = () => {
    return new Promise((resolve, reject) => {
      usingElRef(target, async (el) => {
        if (supportsPictureInPicture) {
          if (!isPictureInPicture.value) {
            el.requestPictureInPicture().then(resolve).catch(reject);
          } else {
            document.exitPictureInPicture().then(resolve).catch(reject);
          }
        }
      });
    });
  };
  watchEffect(() => {
    if (!document)
      return;
    const el = resolveUnref(target);
    if (!el)
      return;
    const src = resolveUnref(options.src);
    let sources = [];
    if (!src)
      return;
    if (isString(src))
      sources = [{ src }];
    else if (Array.isArray(src))
      sources = src;
    else if (isObject(src))
      sources = [src];
    el.querySelectorAll("source").forEach((e) => {
      e.removeEventListener("error", sourceErrorEvent.trigger);
      e.remove();
    });
    sources.forEach(({ src: src2, type }) => {
      const source = document.createElement("source");
      source.setAttribute("src", src2);
      source.setAttribute("type", type || "");
      source.addEventListener("error", sourceErrorEvent.trigger);
      el.appendChild(source);
    });
    el.load();
  });
  tryOnScopeDispose(() => {
    const el = resolveUnref(target);
    if (!el)
      return;
    el.querySelectorAll("source").forEach((e) => e.removeEventListener("error", sourceErrorEvent.trigger));
  });
  watch(volume, (vol) => {
    const el = resolveUnref(target);
    if (!el)
      return;
    el.volume = vol;
  });
  watch(muted, (mute) => {
    const el = resolveUnref(target);
    if (!el)
      return;
    el.muted = mute;
  });
  watch(rate, (rate2) => {
    const el = resolveUnref(target);
    if (!el)
      return;
    el.playbackRate = rate2;
  });
  watchEffect(() => {
    if (!document)
      return;
    const textTracks = resolveUnref(options.tracks);
    const el = resolveUnref(target);
    if (!textTracks || !textTracks.length || !el)
      return;
    el.querySelectorAll("track").forEach((e) => e.remove());
    textTracks.forEach(({ default: isDefault, kind, label, src, srcLang }, i) => {
      const track = document.createElement("track");
      track.default = isDefault || false;
      track.kind = kind;
      track.label = label;
      track.src = src;
      track.srclang = srcLang;
      if (track.default)
        selectedTrack.value = i;
      el.appendChild(track);
    });
  });
  const { ignoreUpdates: ignoreCurrentTimeUpdates } = watchIgnorable(currentTime, (time) => {
    const el = resolveUnref(target);
    if (!el)
      return;
    el.currentTime = time;
  });
  const { ignoreUpdates: ignorePlayingUpdates } = watchIgnorable(playing, (isPlaying) => {
    const el = resolveUnref(target);
    if (!el)
      return;
    isPlaying ? el.play() : el.pause();
  });
  useEventListener(target, "timeupdate", () => ignoreCurrentTimeUpdates(() => currentTime.value = resolveUnref(target).currentTime));
  useEventListener(target, "durationchange", () => duration.value = resolveUnref(target).duration);
  useEventListener(target, "progress", () => buffered.value = timeRangeToArray(resolveUnref(target).buffered));
  useEventListener(target, "seeking", () => seeking.value = true);
  useEventListener(target, "seeked", () => seeking.value = false);
  useEventListener(target, "waiting", () => waiting.value = true);
  useEventListener(target, "playing", () => waiting.value = false);
  useEventListener(target, "ratechange", () => rate.value = resolveUnref(target).playbackRate);
  useEventListener(target, "stalled", () => stalled.value = true);
  useEventListener(target, "ended", () => ended.value = true);
  useEventListener(target, "pause", () => ignorePlayingUpdates(() => playing.value = false));
  useEventListener(target, "play", () => ignorePlayingUpdates(() => playing.value = true));
  useEventListener(target, "enterpictureinpicture", () => isPictureInPicture.value = true);
  useEventListener(target, "leavepictureinpicture", () => isPictureInPicture.value = false);
  useEventListener(target, "volumechange", () => {
    const el = resolveUnref(target);
    if (!el)
      return;
    volume.value = el.volume;
    muted.value = el.muted;
  });
  const listeners = [];
  const stop = watch([target], () => {
    const el = resolveUnref(target);
    if (!el)
      return;
    stop();
    listeners[0] = useEventListener(el.textTracks, "addtrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[1] = useEventListener(el.textTracks, "removetrack", () => tracks.value = tracksToArray(el.textTracks));
    listeners[2] = useEventListener(el.textTracks, "change", () => tracks.value = tracksToArray(el.textTracks));
  });
  tryOnScopeDispose(() => listeners.forEach((listener) => listener()));
  return {
    currentTime,
    duration,
    waiting,
    seeking,
    ended,
    stalled,
    buffered,
    playing,
    rate,
    volume,
    muted,
    tracks,
    selectedTrack,
    enableTrack,
    disableTrack,
    supportsPictureInPicture,
    togglePictureInPicture,
    isPictureInPicture,
    onSourceError: sourceErrorEvent.on
  };
}

const getMapVue2Compat = () => {
  const data = reactive({});
  return {
    get: (key) => data[key],
    set: (key, value) => set(data, key, value),
    has: (key) => Object.prototype.hasOwnProperty.call(data, key),
    delete: (key) => del(data, key),
    clear: () => {
      Object.keys(data).forEach((key) => {
        del(data, key);
      });
    }
  };
};
function useMemoize(resolver, options) {
  const initCache = () => {
    if (options == null ? void 0 : options.cache)
      return reactive(options.cache);
    if (isVue2)
      return getMapVue2Compat();
    return reactive(new Map());
  };
  const cache = initCache();
  const generateKey = (...args) => (options == null ? void 0 : options.getKey) ? options.getKey(...args) : JSON.stringify(args);
  const _loadData = (key, ...args) => {
    cache.set(key, resolver(...args));
    return cache.get(key);
  };
  const loadData = (...args) => _loadData(generateKey(...args), ...args);
  const deleteData = (...args) => {
    cache.delete(generateKey(...args));
  };
  const clearData = () => {
    cache.clear();
  };
  const memoized = (...args) => {
    const key = generateKey(...args);
    if (cache.has(key))
      return cache.get(key);
    return _loadData(key, ...args);
  };
  memoized.load = loadData;
  memoized.delete = deleteData;
  memoized.clear = clearData;
  memoized.generateKey = generateKey;
  memoized.cache = cache;
  return memoized;
}

function useMemory(options = {}) {
  const memory = ref();
  const isSupported = useSupported(() => typeof performance !== "undefined" && "memory" in performance);
  if (isSupported.value) {
    const { interval = 1e3 } = options;
    useIntervalFn(() => {
      memory.value = performance.memory;
    }, interval, { immediate: options.immediate, immediateCallback: options.immediateCallback });
  }
  return { isSupported, memory };
}

function useMounted() {
  const isMounted = ref(false);
  onMounted(() => {
    isMounted.value = true;
  });
  return isMounted;
}

function useMouse(options = {}) {
  const {
    type = "page",
    touch = true,
    resetOnTouchEnds = false,
    initialValue = { x: 0, y: 0 },
    window = defaultWindow,
    eventFilter
  } = options;
  const x = ref(initialValue.x);
  const y = ref(initialValue.y);
  const sourceType = ref(null);
  const mouseHandler = (event) => {
    if (type === "page") {
      x.value = event.pageX;
      y.value = event.pageY;
    } else if (type === "client") {
      x.value = event.clientX;
      y.value = event.clientY;
    }
    sourceType.value = "mouse";
  };
  const reset = () => {
    x.value = initialValue.x;
    y.value = initialValue.y;
  };
  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const touch2 = event.touches[0];
      if (type === "page") {
        x.value = touch2.pageX;
        y.value = touch2.pageY;
      } else if (type === "client") {
        x.value = touch2.clientX;
        y.value = touch2.clientY;
      }
      sourceType.value = "touch";
    }
  };
  const mouseHandlerWrapper = (event) => {
    return eventFilter === void 0 ? mouseHandler(event) : eventFilter(() => mouseHandler(event), {});
  };
  const touchHandlerWrapper = (event) => {
    return eventFilter === void 0 ? touchHandler(event) : eventFilter(() => touchHandler(event), {});
  };
  if (window) {
    useEventListener(window, "mousemove", mouseHandlerWrapper, { passive: true });
    useEventListener(window, "dragover", mouseHandlerWrapper, { passive: true });
    if (touch) {
      useEventListener(window, "touchstart", touchHandlerWrapper, { passive: true });
      useEventListener(window, "touchmove", touchHandlerWrapper, { passive: true });
      if (resetOnTouchEnds)
        useEventListener(window, "touchend", reset, { passive: true });
    }
  }
  return {
    x,
    y,
    sourceType
  };
}

function useMouseInElement(target, options = {}) {
  const {
    handleOutside = true,
    window = defaultWindow
  } = options;
  const { x, y, sourceType } = useMouse(options);
  const targetRef = ref(target != null ? target : window == null ? void 0 : window.document.body);
  const elementX = ref(0);
  const elementY = ref(0);
  const elementPositionX = ref(0);
  const elementPositionY = ref(0);
  const elementHeight = ref(0);
  const elementWidth = ref(0);
  const isOutside = ref(true);
  let stop = () => {
  };
  if (window) {
    stop = watch([targetRef, x, y], () => {
      const el = unrefElement(targetRef);
      if (!el)
        return;
      const {
        left,
        top,
        width,
        height
      } = el.getBoundingClientRect();
      elementPositionX.value = left + window.pageXOffset;
      elementPositionY.value = top + window.pageYOffset;
      elementHeight.value = height;
      elementWidth.value = width;
      const elX = x.value - elementPositionX.value;
      const elY = y.value - elementPositionY.value;
      isOutside.value = width === 0 || height === 0 || elX < 0 || elY < 0 || elX > width || elY > height;
      if (handleOutside || !isOutside.value) {
        elementX.value = elX;
        elementY.value = elY;
      }
    }, { immediate: true });
  }
  return {
    x,
    y,
    sourceType,
    elementX,
    elementY,
    elementPositionX,
    elementPositionY,
    elementHeight,
    elementWidth,
    isOutside,
    stop
  };
}

function useMousePressed(options = {}) {
  const {
    touch = true,
    drag = true,
    initialValue = false,
    window = defaultWindow
  } = options;
  const pressed = ref(initialValue);
  const sourceType = ref(null);
  if (!window) {
    return {
      pressed,
      sourceType
    };
  }
  const onPressed = (srcType) => () => {
    pressed.value = true;
    sourceType.value = srcType;
  };
  const onReleased = () => {
    pressed.value = false;
    sourceType.value = null;
  };
  const target = computed(() => unrefElement(options.target) || window);
  useEventListener(target, "mousedown", onPressed("mouse"), { passive: true });
  useEventListener(window, "mouseleave", onReleased, { passive: true });
  useEventListener(window, "mouseup", onReleased, { passive: true });
  if (drag) {
    useEventListener(target, "dragstart", onPressed("mouse"), { passive: true });
    useEventListener(window, "drop", onReleased, { passive: true });
    useEventListener(window, "dragend", onReleased, { passive: true });
  }
  if (touch) {
    useEventListener(target, "touchstart", onPressed("touch"), { passive: true });
    useEventListener(window, "touchend", onReleased, { passive: true });
    useEventListener(window, "touchcancel", onReleased, { passive: true });
  }
  return {
    pressed,
    sourceType
  };
}

var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$7.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$7.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function useMutationObserver(target, callback, options = {}) {
  const _a = options, { window = defaultWindow } = _a, mutationOptions = __objRest$1(_a, ["window"]);
  let observer;
  const isSupported = useSupported(() => window && "MutationObserver" in window);
  const cleanup = () => {
    if (observer) {
      observer.disconnect();
      observer = void 0;
    }
  };
  const stopWatch = watch(() => unrefElement(target), (el) => {
    cleanup();
    if (isSupported.value && window && el) {
      observer = new MutationObserver(callback);
      observer.observe(el, mutationOptions);
    }
  }, { immediate: true });
  const stop = () => {
    cleanup();
    stopWatch();
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    stop
  };
}

const useNavigatorLanguage = (options = {}) => {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = useSupported(() => navigator && "language" in navigator);
  const language = ref(navigator == null ? void 0 : navigator.language);
  useEventListener(window, "languagechange", () => {
    if (navigator)
      language.value = navigator.language;
  });
  return {
    isSupported,
    language
  };
};

function useNetwork(options = {}) {
  const { window = defaultWindow } = options;
  const navigator = window == null ? void 0 : window.navigator;
  const isSupported = useSupported(() => navigator && "connection" in navigator);
  const isOnline = ref(true);
  const saveData = ref(false);
  const offlineAt = ref(void 0);
  const onlineAt = ref(void 0);
  const downlink = ref(void 0);
  const downlinkMax = ref(void 0);
  const rtt = ref(void 0);
  const effectiveType = ref(void 0);
  const type = ref("unknown");
  const connection = isSupported.value && navigator.connection;
  function updateNetworkInformation() {
    if (!navigator)
      return;
    isOnline.value = navigator.onLine;
    offlineAt.value = isOnline.value ? void 0 : Date.now();
    onlineAt.value = isOnline.value ? Date.now() : void 0;
    if (connection) {
      downlink.value = connection.downlink;
      downlinkMax.value = connection.downlinkMax;
      effectiveType.value = connection.effectiveType;
      rtt.value = connection.rtt;
      saveData.value = connection.saveData;
      type.value = connection.type;
    }
  }
  if (window) {
    useEventListener(window, "offline", () => {
      isOnline.value = false;
      offlineAt.value = Date.now();
    });
    useEventListener(window, "online", () => {
      isOnline.value = true;
      onlineAt.value = Date.now();
    });
  }
  if (connection)
    useEventListener(connection, "change", updateNetworkInformation, false);
  updateNetworkInformation();
  return {
    isSupported,
    isOnline,
    saveData,
    offlineAt,
    onlineAt,
    downlink,
    downlinkMax,
    effectiveType,
    rtt,
    type
  };
}

var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function useNow(options = {}) {
  const {
    controls: exposeControls = false,
    interval = "requestAnimationFrame"
  } = options;
  const now = ref(new Date());
  const update = () => now.value = new Date();
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate: true }) : useIntervalFn(update, interval, { immediate: true });
  if (exposeControls) {
    return __spreadValues$6({
      now
    }, controls);
  } else {
    return now;
  }
}

function useObjectUrl(object) {
  const url = ref();
  const release = () => {
    if (url.value)
      URL.revokeObjectURL(url.value);
    url.value = void 0;
  };
  watch(() => unref(object), (newObject) => {
    release();
    if (newObject)
      url.value = URL.createObjectURL(newObject);
  }, { immediate: true });
  tryOnScopeDispose(release);
  return readonly(url);
}

function useClamp(value, min, max) {
  const _value = ref(value);
  return computed({
    get() {
      return _value.value = clamp(_value.value, resolveUnref(min), resolveUnref(max));
    },
    set(value2) {
      _value.value = clamp(value2, resolveUnref(min), resolveUnref(max));
    }
  });
}

function useOffsetPagination(options) {
  const {
    total = Infinity,
    pageSize = 10,
    page = 1,
    onPageChange = noop,
    onPageSizeChange = noop,
    onPageCountChange = noop
  } = options;
  const currentPageSize = useClamp(pageSize, 1, Infinity);
  const pageCount = computed(() => Math.max(1, Math.ceil(unref(total) / unref(currentPageSize))));
  const currentPage = useClamp(page, 1, pageCount);
  const isFirstPage = computed(() => currentPage.value === 1);
  const isLastPage = computed(() => currentPage.value === pageCount.value);
  if (isRef(page))
    syncRef(page, currentPage);
  if (isRef(pageSize))
    syncRef(pageSize, currentPageSize);
  function prev() {
    currentPage.value--;
  }
  function next() {
    currentPage.value++;
  }
  const returnValue = {
    currentPage,
    currentPageSize,
    pageCount,
    isFirstPage,
    isLastPage,
    prev,
    next
  };
  watch(currentPage, () => {
    onPageChange(reactive(returnValue));
  });
  watch(currentPageSize, () => {
    onPageSizeChange(reactive(returnValue));
  });
  watch(pageCount, () => {
    onPageCountChange(reactive(returnValue));
  });
  return returnValue;
}

function useOnline(options = {}) {
  const { isOnline } = useNetwork(options);
  return isOnline;
}

function usePageLeave(options = {}) {
  const { window = defaultWindow } = options;
  const isLeft = ref(false);
  const handler = (event) => {
    if (!window)
      return;
    event = event || window.event;
    const from = event.relatedTarget || event.toElement;
    isLeft.value = !from;
  };
  if (window) {
    useEventListener(window, "mouseout", handler, { passive: true });
    useEventListener(window.document, "mouseleave", handler, { passive: true });
    useEventListener(window.document, "mouseenter", handler, { passive: true });
  }
  return isLeft;
}

function useParallax(target, options = {}) {
  const {
    deviceOrientationTiltAdjust = (i) => i,
    deviceOrientationRollAdjust = (i) => i,
    mouseTiltAdjust = (i) => i,
    mouseRollAdjust = (i) => i,
    window = defaultWindow
  } = options;
  const orientation = reactive(useDeviceOrientation({ window }));
  const {
    elementX: x,
    elementY: y,
    elementWidth: width,
    elementHeight: height
  } = useMouseInElement(target, { handleOutside: false, window });
  const source = computed(() => {
    if (orientation.isSupported && (orientation.alpha != null && orientation.alpha !== 0 || orientation.gamma != null && orientation.gamma !== 0))
      return "deviceOrientation";
    return "mouse";
  });
  const roll = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = -orientation.beta / 90;
      return deviceOrientationRollAdjust(value);
    } else {
      const value = -(y.value - height.value / 2) / height.value;
      return mouseRollAdjust(value);
    }
  });
  const tilt = computed(() => {
    if (source.value === "deviceOrientation") {
      const value = orientation.gamma / 90;
      return deviceOrientationTiltAdjust(value);
    } else {
      const value = (x.value - width.value / 2) / width.value;
      return mouseTiltAdjust(value);
    }
  });
  return { roll, tilt, source };
}

var __defProp$5 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const defaultState = {
  x: 0,
  y: 0,
  pointerId: 0,
  pressure: 0,
  tiltX: 0,
  tiltY: 0,
  width: 0,
  height: 0,
  twist: 0,
  pointerType: null
};
const keys = /* @__PURE__ */ (/* unused pure expression or super */ null && (Object.keys(defaultState)));
function usePointer(options = {}) {
  const {
    target = defaultWindow
  } = options;
  const isInside = ref(false);
  const state = ref(options.initialValue || {});
  Object.assign(state.value, defaultState, state.value);
  const handler = (event) => {
    isInside.value = true;
    if (options.pointerTypes && !options.pointerTypes.includes(event.pointerType))
      return;
    state.value = objectPick(event, keys, false);
  };
  if (target) {
    useEventListener(target, "pointerdown", handler, { passive: true });
    useEventListener(target, "pointermove", handler, { passive: true });
    useEventListener(target, "pointerleave", () => isInside.value = false, { passive: true });
  }
  return __spreadProps$1(__spreadValues$5({}, toRefs(state)), {
    isInside
  });
}

var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
function useSwipe(target, options = {}) {
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart,
    passive = true,
    window = defaultWindow
  } = options;
  const coordsStart = reactive({ x: 0, y: 0 });
  const coordsEnd = reactive({ x: 0, y: 0 });
  const diffX = computed(() => coordsStart.x - coordsEnd.x);
  const diffY = computed(() => coordsStart.y - coordsEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(diffX.value), abs(diffY.value)) >= threshold);
  const isSwiping = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(diffX.value) > abs(diffY.value)) {
      return diffX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return diffY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const getTouchEventCoords = (e) => [e.touches[0].clientX, e.touches[0].clientY];
  const updateCoordsStart = (x, y) => {
    coordsStart.x = x;
    coordsStart.y = y;
  };
  const updateCoordsEnd = (x, y) => {
    coordsEnd.x = x;
    coordsEnd.y = y;
  };
  let listenerOptions;
  const isPassiveEventSupported = checkPassiveEventSupport(window == null ? void 0 : window.document);
  if (!passive)
    listenerOptions = isPassiveEventSupported ? { passive: false, capture: true } : { capture: true };
  else
    listenerOptions = isPassiveEventSupported ? { passive: true } : { capture: false };
  const onTouchEnd = (e) => {
    if (isSwiping.value)
      onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
    isSwiping.value = false;
  };
  const stops = [
    useEventListener(target, "touchstart", (e) => {
      if (listenerOptions.capture && !listenerOptions.passive)
        e.preventDefault();
      const [x, y] = getTouchEventCoords(e);
      updateCoordsStart(x, y);
      updateCoordsEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }, listenerOptions),
    useEventListener(target, "touchmove", (e) => {
      const [x, y] = getTouchEventCoords(e);
      updateCoordsEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }, listenerOptions),
    useEventListener(target, "touchend", onTouchEnd, listenerOptions),
    useEventListener(target, "touchcancel", onTouchEnd, listenerOptions)
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isPassiveEventSupported,
    isSwiping,
    direction,
    coordsStart,
    coordsEnd,
    lengthX: diffX,
    lengthY: diffY,
    stop
  };
}
function checkPassiveEventSupport(document) {
  if (!document)
    return false;
  let supportsPassive = false;
  const optionsBlock = {
    get passive() {
      supportsPassive = true;
      return false;
    }
  };
  document.addEventListener("x", noop, optionsBlock);
  document.removeEventListener("x", noop);
  return supportsPassive;
}

function usePointerSwipe(target, options = {}) {
  const targetRef = resolveRef(target);
  const {
    threshold = 50,
    onSwipe,
    onSwipeEnd,
    onSwipeStart
  } = options;
  const posStart = reactive({ x: 0, y: 0 });
  const updatePosStart = (x, y) => {
    posStart.x = x;
    posStart.y = y;
  };
  const posEnd = reactive({ x: 0, y: 0 });
  const updatePosEnd = (x, y) => {
    posEnd.x = x;
    posEnd.y = y;
  };
  const distanceX = computed(() => posStart.x - posEnd.x);
  const distanceY = computed(() => posStart.y - posEnd.y);
  const { max, abs } = Math;
  const isThresholdExceeded = computed(() => max(abs(distanceX.value), abs(distanceY.value)) >= threshold);
  const isSwiping = ref(false);
  const isPointerDown = ref(false);
  const direction = computed(() => {
    if (!isThresholdExceeded.value)
      return SwipeDirection.NONE;
    if (abs(distanceX.value) > abs(distanceY.value)) {
      return distanceX.value > 0 ? SwipeDirection.LEFT : SwipeDirection.RIGHT;
    } else {
      return distanceY.value > 0 ? SwipeDirection.UP : SwipeDirection.DOWN;
    }
  });
  const filterEvent = (e) => {
    if (options.pointerTypes)
      return options.pointerTypes.includes(e.pointerType);
    return true;
  };
  const stops = [
    useEventListener(target, "pointerdown", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      isPointerDown.value = true;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "none");
      const eventTarget = e.target;
      eventTarget == null ? void 0 : eventTarget.setPointerCapture(e.pointerId);
      const { clientX: x, clientY: y } = e;
      updatePosStart(x, y);
      updatePosEnd(x, y);
      onSwipeStart == null ? void 0 : onSwipeStart(e);
    }),
    useEventListener(target, "pointermove", (e) => {
      if (!filterEvent(e))
        return;
      if (!isPointerDown.value)
        return;
      const { clientX: x, clientY: y } = e;
      updatePosEnd(x, y);
      if (!isSwiping.value && isThresholdExceeded.value)
        isSwiping.value = true;
      if (isSwiping.value)
        onSwipe == null ? void 0 : onSwipe(e);
    }),
    useEventListener(target, "pointerup", (e) => {
      var _a, _b;
      if (!filterEvent(e))
        return;
      if (isSwiping.value)
        onSwipeEnd == null ? void 0 : onSwipeEnd(e, direction.value);
      isPointerDown.value = false;
      isSwiping.value = false;
      (_b = (_a = targetRef.value) == null ? void 0 : _a.style) == null ? void 0 : _b.setProperty("touch-action", "initial");
    })
  ];
  const stop = () => stops.forEach((s) => s());
  return {
    isSwiping: readonly(isSwiping),
    direction: readonly(direction),
    posStart: readonly(posStart),
    posEnd: readonly(posEnd),
    distanceX,
    distanceY,
    stop
  };
}

function usePreferredColorScheme(options) {
  const isLight = useMediaQuery("(prefers-color-scheme: light)", options);
  const isDark = useMediaQuery("(prefers-color-scheme: dark)", options);
  return computed(() => {
    if (isDark.value)
      return "dark";
    if (isLight.value)
      return "light";
    return "no-preference";
  });
}

function usePreferredContrast(options) {
  const isMore = useMediaQuery("(prefers-contrast: more)", options);
  const isLess = useMediaQuery("(prefers-contrast: less)", options);
  const isCustom = useMediaQuery("(prefers-contrast: custom)", options);
  return computed(() => {
    if (isMore.value)
      return "more";
    if (isLess.value)
      return "less";
    if (isCustom.value)
      return "custom";
    return "no-preference";
  });
}

function usePreferredLanguages(options = {}) {
  const { window = defaultWindow } = options;
  if (!window)
    return ref(["en"]);
  const navigator = window.navigator;
  const value = ref(navigator.languages);
  useEventListener(window, "languagechange", () => {
    value.value = navigator.languages;
  });
  return value;
}

function usePreferredReducedMotion(options) {
  const isReduced = useMediaQuery("(prefers-reduced-motion: reduce)", options);
  return computed(() => {
    if (isReduced.value)
      return "reduce";
    return "no-preference";
  });
}

const useScreenOrientation = (options = {}) => {
  const {
    window = defaultWindow
  } = options;
  const isSupported = useSupported(() => window && "screen" in window && "orientation" in window.screen);
  const screenOrientation = isSupported.value ? window.screen.orientation : {};
  const orientation = ref(screenOrientation.type);
  const angle = ref(screenOrientation.angle || 0);
  if (isSupported.value) {
    useEventListener(window, "orientationchange", () => {
      orientation.value = screenOrientation.type;
      angle.value = screenOrientation.angle;
    });
  }
  const lockOrientation = (type) => {
    if (!isSupported.value)
      return Promise.reject(new Error("Not supported"));
    return screenOrientation.lock(type);
  };
  const unlockOrientation = () => {
    if (isSupported.value)
      screenOrientation.unlock();
  };
  return {
    isSupported,
    orientation,
    angle,
    lockOrientation,
    unlockOrientation
  };
};

const topVarName = "--vueuse-safe-area-top";
const rightVarName = "--vueuse-safe-area-right";
const bottomVarName = "--vueuse-safe-area-bottom";
const leftVarName = "--vueuse-safe-area-left";
function useScreenSafeArea() {
  const top = ref("");
  const right = ref("");
  const bottom = ref("");
  const left = ref("");
  if (isClient) {
    const topCssVar = useCssVar(topVarName);
    const rightCssVar = useCssVar(rightVarName);
    const bottomCssVar = useCssVar(bottomVarName);
    const leftCssVar = useCssVar(leftVarName);
    topCssVar.value = "env(safe-area-inset-top, 0px)";
    rightCssVar.value = "env(safe-area-inset-right, 0px)";
    bottomCssVar.value = "env(safe-area-inset-bottom, 0px)";
    leftCssVar.value = "env(safe-area-inset-left, 0px)";
    update();
    useEventListener("resize", useDebounceFn(update));
  }
  function update() {
    top.value = getValue(topVarName);
    right.value = getValue(rightVarName);
    bottom.value = getValue(bottomVarName);
    left.value = getValue(leftVarName);
  }
  return {
    top,
    right,
    bottom,
    left,
    update
  };
}
function getValue(position) {
  return getComputedStyle(document.documentElement).getPropertyValue(position);
}

function useScriptTag(src, onLoaded = noop, options = {}) {
  const {
    immediate = true,
    manual = false,
    type = "text/javascript",
    async = true,
    crossOrigin,
    referrerPolicy,
    noModule,
    defer,
    document = defaultDocument,
    attrs = {}
  } = options;
  const scriptTag = ref(null);
  let _promise = null;
  const loadScript = (waitForScriptLoad) => new Promise((resolve, reject) => {
    const resolveWithElement = (el2) => {
      scriptTag.value = el2;
      resolve(el2);
      return el2;
    };
    if (!document) {
      resolve(false);
      return;
    }
    let shouldAppend = false;
    let el = document.querySelector(`script[src="${resolveUnref(src)}"]`);
    if (!el) {
      el = document.createElement("script");
      el.type = type;
      el.async = async;
      el.src = resolveUnref(src);
      if (defer)
        el.defer = defer;
      if (crossOrigin)
        el.crossOrigin = crossOrigin;
      if (noModule)
        el.noModule = noModule;
      if (referrerPolicy)
        el.referrerPolicy = referrerPolicy;
      Object.entries(attrs).forEach(([name, value]) => el == null ? void 0 : el.setAttribute(name, value));
      shouldAppend = true;
    } else if (el.hasAttribute("data-loaded")) {
      resolveWithElement(el);
    }
    el.addEventListener("error", (event) => reject(event));
    el.addEventListener("abort", (event) => reject(event));
    el.addEventListener("load", () => {
      el.setAttribute("data-loaded", "true");
      onLoaded(el);
      resolveWithElement(el);
    });
    if (shouldAppend)
      el = document.head.appendChild(el);
    if (!waitForScriptLoad)
      resolveWithElement(el);
  });
  const load = (waitForScriptLoad = true) => {
    if (!_promise)
      _promise = loadScript(waitForScriptLoad);
    return _promise;
  };
  const unload = () => {
    if (!document)
      return;
    _promise = null;
    if (scriptTag.value)
      scriptTag.value = null;
    const el = document.querySelector(`script[src="${resolveUnref(src)}"]`);
    if (el)
      document.head.removeChild(el);
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnUnmounted(unload);
  return { scriptTag, load, unload };
}

function preventDefault(rawEvent) {
  const e = rawEvent || window.event;
  if (e.touches.length > 1)
    return true;
  if (e.preventDefault)
    e.preventDefault();
  return false;
}
function useScrollLock(element, initialState = false) {
  const isLocked = ref(initialState);
  let stopTouchMoveListener = null;
  let initialOverflow;
  watch(resolveRef(element), (el) => {
    if (el) {
      const ele = el;
      initialOverflow = ele.style.overflow;
      if (isLocked.value)
        ele.style.overflow = "hidden";
    }
  }, {
    immediate: true
  });
  const lock = () => {
    const ele = resolveUnref(element);
    if (!ele || isLocked.value)
      return;
    if (isIOS) {
      stopTouchMoveListener = useEventListener(ele, "touchmove", preventDefault, { passive: false });
    }
    ele.style.overflow = "hidden";
    isLocked.value = true;
  };
  const unlock = () => {
    const ele = resolveUnref(element);
    if (!ele || !isLocked.value)
      return;
    isIOS && (stopTouchMoveListener == null ? void 0 : stopTouchMoveListener());
    ele.style.overflow = initialOverflow;
    isLocked.value = false;
  };
  tryOnScopeDispose(unlock);
  return computed({
    get() {
      return isLocked.value;
    },
    set(v) {
      if (v)
        lock();
      else
        unlock();
    }
  });
}

function useSessionStorage(key, initialValue, options = {}) {
  const { window = defaultWindow } = options;
  return useStorage(key, initialValue, window == null ? void 0 : window.sessionStorage, options);
}

var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
function useShare(shareOptions = {}, options = {}) {
  const { navigator = defaultNavigator } = options;
  const _navigator = navigator;
  const isSupported = useSupported(() => _navigator && "canShare" in _navigator);
  const share = async (overrideOptions = {}) => {
    if (isSupported.value) {
      const data = __spreadValues$4(__spreadValues$4({}, resolveUnref(shareOptions)), resolveUnref(overrideOptions));
      let granted = true;
      if (data.files && _navigator.canShare)
        granted = _navigator.canShare({ files: data.files });
      if (granted)
        return _navigator.share(data);
    }
  };
  return {
    isSupported,
    share
  };
}

function useSpeechRecognition(options = {}) {
  const {
    interimResults = true,
    continuous = true,
    window = defaultWindow
  } = options;
  const lang = resolveRef(options.lang || "en-US");
  const isListening = ref(false);
  const isFinal = ref(false);
  const result = ref("");
  const error = shallowRef(void 0);
  const toggle = (value = !isListening.value) => {
    isListening.value = value;
  };
  const start = () => {
    isListening.value = true;
  };
  const stop = () => {
    isListening.value = false;
  };
  const SpeechRecognition = window && (window.SpeechRecognition || window.webkitSpeechRecognition);
  const isSupported = useSupported(() => SpeechRecognition);
  let recognition;
  if (isSupported.value) {
    recognition = new SpeechRecognition();
    recognition.continuous = continuous;
    recognition.interimResults = interimResults;
    recognition.lang = unref(lang);
    recognition.onstart = () => {
      isFinal.value = false;
    };
    watch(lang, (lang2) => {
      if (recognition && !isListening.value)
        recognition.lang = lang2;
    });
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results).map((result2) => {
        isFinal.value = result2.isFinal;
        return result2[0];
      }).map((result2) => result2.transcript).join("");
      result.value = transcript;
      error.value = void 0;
    };
    recognition.onerror = (event) => {
      error.value = event;
    };
    recognition.onend = () => {
      isListening.value = false;
      recognition.lang = unref(lang);
    };
    watch(isListening, () => {
      if (isListening.value)
        recognition.start();
      else
        recognition.stop();
    });
  }
  tryOnScopeDispose(() => {
    isListening.value = false;
  });
  return {
    isSupported,
    isListening,
    isFinal,
    recognition,
    result,
    error,
    toggle,
    start,
    stop
  };
}

function useSpeechSynthesis(text, options = {}) {
  const {
    pitch = 1,
    rate = 1,
    volume = 1,
    window = defaultWindow
  } = options;
  const synth = window && window.speechSynthesis;
  const isSupported = useSupported(() => synth);
  const isPlaying = ref(false);
  const status = ref("init");
  const spokenText = resolveRef(text || "");
  const lang = resolveRef(options.lang || "en-US");
  const error = shallowRef(void 0);
  const toggle = (value = !isPlaying.value) => {
    isPlaying.value = value;
  };
  const bindEventsForUtterance = (utterance2) => {
    utterance2.lang = unref(lang);
    utterance2.voice = unref(options.voice) || null;
    utterance2.pitch = pitch;
    utterance2.rate = rate;
    utterance2.volume = volume;
    utterance2.onstart = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onpause = () => {
      isPlaying.value = false;
      status.value = "pause";
    };
    utterance2.onresume = () => {
      isPlaying.value = true;
      status.value = "play";
    };
    utterance2.onend = () => {
      isPlaying.value = false;
      status.value = "end";
    };
    utterance2.onerror = (event) => {
      error.value = event;
    };
  };
  const utterance = computed(() => {
    isPlaying.value = false;
    status.value = "init";
    const newUtterance = new SpeechSynthesisUtterance(spokenText.value);
    bindEventsForUtterance(newUtterance);
    return newUtterance;
  });
  const speak = () => {
    synth.cancel();
    utterance && synth.speak(utterance.value);
  };
  if (isSupported.value) {
    bindEventsForUtterance(utterance.value);
    watch(lang, (lang2) => {
      if (utterance.value && !isPlaying.value)
        utterance.value.lang = lang2;
    });
    if (options.voice) {
      watch(options.voice, () => {
        synth.cancel();
      });
    }
    watch(isPlaying, () => {
      if (isPlaying.value)
        synth.resume();
      else
        synth.pause();
    });
  }
  tryOnScopeDispose(() => {
    isPlaying.value = false;
  });
  return {
    isSupported,
    isPlaying,
    status,
    utterance,
    error,
    toggle,
    speak
  };
}

function useStepper(steps, initialStep) {
  const stepsRef = ref(steps);
  const stepNames = computed(() => Array.isArray(stepsRef.value) ? stepsRef.value : Object.keys(stepsRef.value));
  const index = ref(stepNames.value.indexOf(initialStep != null ? initialStep : stepNames.value[0]));
  const current = computed(() => at(index.value));
  const isFirst = computed(() => index.value === 0);
  const isLast = computed(() => index.value === stepNames.value.length - 1);
  const next = computed(() => stepNames.value[index.value + 1]);
  const previous = computed(() => stepNames.value[index.value - 1]);
  function at(index2) {
    if (Array.isArray(stepsRef.value))
      return stepsRef.value[index2];
    return stepsRef.value[stepNames.value[index2]];
  }
  function get(step) {
    if (!stepNames.value.includes(step))
      return;
    return at(stepNames.value.indexOf(step));
  }
  function goTo(step) {
    if (stepNames.value.includes(step))
      index.value = stepNames.value.indexOf(step);
  }
  function goToNext() {
    if (isLast.value)
      return;
    index.value++;
  }
  function goToPrevious() {
    if (isFirst.value)
      return;
    index.value--;
  }
  function goBackTo(step) {
    if (isAfter(step))
      goTo(step);
  }
  function isNext(step) {
    return stepNames.value.indexOf(step) === index.value + 1;
  }
  function isPrevious(step) {
    return stepNames.value.indexOf(step) === index.value - 1;
  }
  function isCurrent(step) {
    return stepNames.value.indexOf(step) === index.value;
  }
  function isBefore(step) {
    return index.value < stepNames.value.indexOf(step);
  }
  function isAfter(step) {
    return index.value > stepNames.value.indexOf(step);
  }
  return {
    steps: stepsRef,
    stepNames,
    index,
    current,
    next,
    previous,
    isFirst,
    isLast,
    at,
    get,
    goTo,
    goToNext,
    goToPrevious,
    goBackTo,
    isNext,
    isPrevious,
    isCurrent,
    isBefore,
    isAfter
  };
}

function useStorageAsync(key, initialValue, storage, options = {}) {
  var _a;
  const {
    flush = "pre",
    deep = true,
    listenToStorageChanges = true,
    writeDefaults = true,
    shallow,
    window = defaultWindow,
    eventFilter,
    onError = (e) => {
      console.error(e);
    }
  } = options;
  const rawInit = resolveUnref(initialValue);
  const type = guessSerializerType(rawInit);
  const data = (shallow ? shallowRef : ref)(initialValue);
  const serializer = (_a = options.serializer) != null ? _a : StorageSerializers[type];
  if (!storage) {
    try {
      storage = getSSRHandler("getDefaultStorage", () => {
        var _a2;
        return (_a2 = defaultWindow) == null ? void 0 : _a2.localStorage;
      })();
    } catch (e) {
      onError(e);
    }
  }
  async function read(event) {
    if (!storage || event && event.key !== key)
      return;
    try {
      const rawValue = event ? event.newValue : await storage.getItem(key);
      if (rawValue == null) {
        data.value = rawInit;
        if (writeDefaults && rawInit !== null)
          await storage.setItem(key, await serializer.write(rawInit));
      } else {
        data.value = await serializer.read(rawValue);
      }
    } catch (e) {
      onError(e);
    }
  }
  read();
  if (window && listenToStorageChanges)
    useEventListener(window, "storage", (e) => setTimeout(() => read(e), 0));
  if (storage) {
    watchWithFilter(data, async () => {
      try {
        if (data.value == null)
          await storage.removeItem(key);
        else
          await storage.setItem(key, await serializer.write(data.value));
      } catch (e) {
        onError(e);
      }
    }, {
      flush,
      deep,
      eventFilter
    });
  }
  return data;
}

let _id = 0;
function useStyleTag(css, options = {}) {
  const isLoaded = ref(false);
  const {
    document = defaultDocument,
    immediate = true,
    manual = false,
    id = `vueuse_styletag_${++_id}`
  } = options;
  const cssRef = ref(css);
  let stop = () => {
  };
  const load = () => {
    if (!document)
      return;
    const el = document.getElementById(id) || document.createElement("style");
    el.type = "text/css";
    el.id = id;
    if (options.media)
      el.media = options.media;
    document.head.appendChild(el);
    if (isLoaded.value)
      return;
    stop = watch(cssRef, (value) => {
      el.innerText = value;
    }, { immediate: true });
    isLoaded.value = true;
  };
  const unload = () => {
    if (!document || !isLoaded.value)
      return;
    stop();
    document.head.removeChild(document.getElementById(id));
    isLoaded.value = false;
  };
  if (immediate && !manual)
    tryOnMounted(load);
  if (!manual)
    tryOnScopeDispose(unload);
  return {
    id,
    css: cssRef,
    unload,
    load,
    isLoaded: readonly(isLoaded)
  };
}

function useTemplateRefsList() {
  const refs = ref([]);
  refs.value.set = (el) => {
    if (el)
      refs.value.push(el);
  };
  onBeforeUpdate(() => {
    refs.value.length = 0;
  });
  return refs;
}

function useTextDirection(options = {}) {
  const {
    document = defaultDocument,
    selector = "html",
    observe = false,
    initialValue = "ltr"
  } = options;
  function getValue() {
    var _a, _b;
    return (_b = (_a = document == null ? void 0 : document.querySelector(selector)) == null ? void 0 : _a.getAttribute("dir")) != null ? _b : initialValue;
  }
  const dir = ref(getValue());
  tryOnMounted(() => dir.value = getValue());
  if (observe && document) {
    useMutationObserver(document.querySelector(selector), () => dir.value = getValue(), { attributes: true });
  }
  return computed({
    get() {
      return dir.value;
    },
    set(v) {
      var _a, _b;
      dir.value = v;
      if (!document)
        return;
      if (dir.value)
        (_a = document.querySelector(selector)) == null ? void 0 : _a.setAttribute("dir", dir.value);
      else
        (_b = document.querySelector(selector)) == null ? void 0 : _b.removeAttribute("dir");
    }
  });
}

function getRangesFromSelection(selection) {
  var _a;
  const rangeCount = (_a = selection.rangeCount) != null ? _a : 0;
  const ranges = new Array(rangeCount);
  for (let i = 0; i < rangeCount; i++) {
    const range = selection.getRangeAt(i);
    ranges[i] = range;
  }
  return ranges;
}
function useTextSelection(options = {}) {
  const {
    window = defaultWindow
  } = options;
  const selection = ref(null);
  const text = computed(() => {
    var _a, _b;
    return (_b = (_a = selection.value) == null ? void 0 : _a.toString()) != null ? _b : "";
  });
  const ranges = computed(() => selection.value ? getRangesFromSelection(selection.value) : []);
  const rects = computed(() => ranges.value.map((range) => range.getBoundingClientRect()));
  function onSelectionChange() {
    selection.value = null;
    if (window)
      selection.value = window.getSelection();
  }
  if (window)
    useEventListener(window.document, "selectionchange", onSelectionChange);
  return {
    text,
    rects,
    ranges,
    selection
  };
}

function useTextareaAutosize(options) {
  const textarea = ref(options == null ? void 0 : options.element);
  const input = ref(options == null ? void 0 : options.input);
  function triggerResize() {
    var _a, _b;
    if (!textarea.value)
      return;
    textarea.value.style.height = "1px";
    textarea.value.style.height = `${(_a = textarea.value) == null ? void 0 : _a.scrollHeight}px`;
    (_b = options == null ? void 0 : options.onResize) == null ? void 0 : _b.call(options);
  }
  watch([input, textarea], triggerResize, { immediate: true });
  if (options == null ? void 0 : options.watch)
    watch(options.watch, triggerResize, { immediate: true, deep: true });
  return {
    textarea,
    input,
    triggerResize
  };
}

var __defProp$3 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useThrottledRefHistory(source, options = {}) {
  const { throttle = 200, trailing = true } = options;
  const filter = throttleFilter(throttle, trailing);
  const history = useRefHistory(source, __spreadProps(__spreadValues$3({}, options), { eventFilter: filter }));
  return __spreadValues$3({}, history);
}

var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const UNITS = [
  { max: 6e4, value: 1e3, name: "second" },
  { max: 276e4, value: 6e4, name: "minute" },
  { max: 72e6, value: 36e5, name: "hour" },
  { max: 5184e5, value: 864e5, name: "day" },
  { max: 24192e5, value: 6048e5, name: "week" },
  { max: 28512e6, value: 2592e6, name: "month" },
  { max: Infinity, value: 31536e6, name: "year" }
];
const DEFAULT_MESSAGES = {
  justNow: "just now",
  past: (n) => n.match(/\d/) ? `${n} ago` : n,
  future: (n) => n.match(/\d/) ? `in ${n}` : n,
  month: (n, past) => n === 1 ? past ? "last month" : "next month" : `${n} month${n > 1 ? "s" : ""}`,
  year: (n, past) => n === 1 ? past ? "last year" : "next year" : `${n} year${n > 1 ? "s" : ""}`,
  day: (n, past) => n === 1 ? past ? "yesterday" : "tomorrow" : `${n} day${n > 1 ? "s" : ""}`,
  week: (n, past) => n === 1 ? past ? "last week" : "next week" : `${n} week${n > 1 ? "s" : ""}`,
  hour: (n) => `${n} hour${n > 1 ? "s" : ""}`,
  minute: (n) => `${n} minute${n > 1 ? "s" : ""}`,
  second: (n) => `${n} second${n > 1 ? "s" : ""}`
};
const DEFAULT_FORMATTER = (date) => date.toISOString().slice(0, 10);
function useTimeAgo(time, options = {}) {
  const {
    controls: exposeControls = false,
    max,
    updateInterval = 3e4,
    messages = DEFAULT_MESSAGES,
    fullDateFormatter = DEFAULT_FORMATTER
  } = options;
  const { abs, round } = Math;
  const _a = useNow({ interval: updateInterval, controls: true }), { now } = _a, controls = __objRest(_a, ["now"]);
  function getTimeago(from, now2) {
    var _a2;
    const diff = +now2 - +from;
    const absDiff = abs(diff);
    if (absDiff < 6e4)
      return messages.justNow;
    if (typeof max === "number" && absDiff > max)
      return fullDateFormatter(new Date(from));
    if (typeof max === "string") {
      const unitMax = (_a2 = UNITS.find((i) => i.name === max)) == null ? void 0 : _a2.max;
      if (unitMax && absDiff > unitMax)
        return fullDateFormatter(new Date(from));
    }
    for (const unit of UNITS) {
      if (absDiff < unit.max)
        return format(diff, unit);
    }
  }
  function applyFormat(name, val, isPast) {
    const formatter = messages[name];
    if (typeof formatter === "function")
      return formatter(val, isPast);
    return formatter.replace("{0}", val.toString());
  }
  function format(diff, unit) {
    const val = round(abs(diff) / unit.value);
    const past = diff > 0;
    const str = applyFormat(unit.name, val, past);
    return applyFormat(past ? "past" : "future", str, past);
  }
  const timeAgo = computed(() => getTimeago(new Date(resolveUnref(time)), unref(now.value)));
  if (exposeControls) {
    return __spreadValues$2({
      timeAgo
    }, controls);
  } else {
    return timeAgo;
  }
}

function useTimeoutPoll(fn, interval, timeoutPollOptions) {
  const { start } = useTimeoutFn(loop, interval);
  const isActive = ref(false);
  async function loop() {
    if (!isActive.value)
      return;
    await fn();
    start();
  }
  function resume() {
    if (!isActive.value) {
      isActive.value = true;
      loop();
    }
  }
  function pause() {
    isActive.value = false;
  }
  if (timeoutPollOptions == null ? void 0 : timeoutPollOptions.immediate)
    resume();
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function useTimestamp(options = {}) {
  const {
    controls: exposeControls = false,
    offset = 0,
    immediate = true,
    interval = "requestAnimationFrame"
  } = options;
  const ts = ref(timestamp() + offset);
  const update = () => ts.value = timestamp() + offset;
  const controls = interval === "requestAnimationFrame" ? useRafFn(update, { immediate }) : useIntervalFn(update, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$1({
      timestamp: ts
    }, controls);
  } else {
    return ts;
  }
}

function useTitle(newTitle = null, options = {}) {
  var _a, _b;
  const {
    document = defaultDocument,
    observe = false,
    titleTemplate = "%s"
  } = options;
  const title = resolveRef((_a = newTitle != null ? newTitle : document == null ? void 0 : document.title) != null ? _a : null);
  const isReadonly = newTitle && isFunction(newTitle);
  function format(t) {
    return isFunction(titleTemplate) ? titleTemplate(t) : unref(titleTemplate).replace("%s", t);
  }
  watch(title, (t, o) => {
    if (isString(t) && t !== o && document)
      document.title = format(t);
  }, { immediate: true });
  if (observe && document && !isReadonly) {
    useMutationObserver((_b = document.head) == null ? void 0 : _b.querySelector("title"), () => {
      if (document && document.title !== title.value)
        title.value = format(document.title);
    }, { childList: true });
  }
  return title;
}

var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
const _TransitionPresets = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
const TransitionPresets = __spreadValues({
  linear: _vueuse_shared__WEBPACK_IMPORTED_MODULE_1__/* .identity */ .yR
}, _TransitionPresets);
function createEasingFunction([p0, p1, p2, p3]) {
  const a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
  const b = (a1, a2) => 3 * a2 - 6 * a1;
  const c = (a1) => 3 * a1;
  const calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
  const getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
  const getTforX = (x) => {
    let aGuessT = x;
    for (let i = 0; i < 4; ++i) {
      const currentSlope = getSlope(aGuessT, p0, p2);
      if (currentSlope === 0)
        return aGuessT;
      const currentX = calcBezier(aGuessT, p0, p2) - x;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  };
  return (x) => p0 === p1 && p2 === p3 ? x : calcBezier(getTforX(x), p1, p3);
}
function useTransition(source, options = {}) {
  const {
    delay = 0,
    disabled = false,
    duration = 1e3,
    onFinished = noop,
    onStarted = noop,
    transition = identity
  } = options;
  const currentTransition = computed(() => {
    const t = unref(transition);
    return isFunction(t) ? t : createEasingFunction(t);
  });
  const sourceValue = computed(() => {
    const s = unref(source);
    return isNumber(s) ? s : s.map(unref);
  });
  const sourceVector = computed(() => isNumber(sourceValue.value) ? [sourceValue.value] : sourceValue.value);
  const outputVector = ref(sourceVector.value.slice(0));
  let currentDuration;
  let diffVector;
  let endAt;
  let startAt;
  let startVector;
  const { resume, pause } = useRafFn(() => {
    const now = Date.now();
    const progress = clamp(1 - (endAt - now) / currentDuration, 0, 1);
    outputVector.value = startVector.map((val, i) => {
      var _a;
      return val + ((_a = diffVector[i]) != null ? _a : 0) * currentTransition.value(progress);
    });
    if (progress >= 1) {
      pause();
      onFinished();
    }
  }, { immediate: false });
  const start = () => {
    pause();
    currentDuration = unref(duration);
    diffVector = outputVector.value.map((n, i) => {
      var _a, _b;
      return ((_a = sourceVector.value[i]) != null ? _a : 0) - ((_b = outputVector.value[i]) != null ? _b : 0);
    });
    startVector = outputVector.value.slice(0);
    startAt = Date.now();
    endAt = startAt + currentDuration;
    resume();
    onStarted();
  };
  const timeout = useTimeoutFn(start, delay, { immediate: false });
  watch(sourceVector, () => {
    if (unref(disabled)) {
      outputVector.value = sourceVector.value.slice(0);
    } else {
      if (unref(delay) <= 0)
        start();
      else
        timeout.start();
    }
  }, { deep: true });
  return computed(() => {
    const targetVector = unref(disabled) ? sourceVector : outputVector;
    return isNumber(sourceValue.value) ? targetVector.value[0] : targetVector.value;
  });
}

function useUrlSearchParams(mode = "history", options = {}) {
  const {
    initialValue = {},
    removeNullishValues = true,
    removeFalsyValues = false,
    window = defaultWindow
  } = options;
  if (!window)
    return reactive(initialValue);
  const state = reactive({});
  function getRawParams() {
    if (mode === "history") {
      return window.location.search || "";
    } else if (mode === "hash") {
      const hash = window.location.hash || "";
      const index = hash.indexOf("?");
      return index > 0 ? hash.slice(index) : "";
    } else {
      return (window.location.hash || "").replace(/^#/, "");
    }
  }
  function constructQuery(params) {
    const stringified = params.toString();
    if (mode === "history")
      return `${stringified ? `?${stringified}` : ""}${window.location.hash || ""}`;
    if (mode === "hash-params")
      return `${window.location.search || ""}${stringified ? `#${stringified}` : ""}`;
    const hash = window.location.hash || "#";
    const index = hash.indexOf("?");
    if (index > 0)
      return `${hash.slice(0, index)}${stringified ? `?${stringified}` : ""}`;
    return `${hash}${stringified ? `?${stringified}` : ""}`;
  }
  function read() {
    return new URLSearchParams(getRawParams());
  }
  function updateState(params) {
    const unusedKeys = new Set(Object.keys(state));
    for (const key of params.keys()) {
      const paramsForKey = params.getAll(key);
      state[key] = paramsForKey.length > 1 ? paramsForKey : params.get(key) || "";
      unusedKeys.delete(key);
    }
    Array.from(unusedKeys).forEach((key) => delete state[key]);
  }
  const { pause, resume } = pausableWatch(state, () => {
    const params = new URLSearchParams("");
    Object.keys(state).forEach((key) => {
      const mapEntry = state[key];
      if (Array.isArray(mapEntry))
        mapEntry.forEach((value) => params.append(key, value));
      else if (removeNullishValues && mapEntry == null)
        params.delete(key);
      else if (removeFalsyValues && !mapEntry)
        params.delete(key);
      else
        params.set(key, mapEntry);
    });
    write(params);
  }, { deep: true });
  function write(params, shouldUpdate) {
    pause();
    if (shouldUpdate)
      updateState(params);
    window.history.replaceState(window.history.state, window.document.title, window.location.pathname + constructQuery(params));
    resume();
  }
  function onChanged() {
    write(read(), true);
  }
  useEventListener(window, "popstate", onChanged, false);
  if (mode !== "history")
    useEventListener(window, "hashchange", onChanged, false);
  const initial = read();
  if (initial.keys().next().value)
    updateState(initial);
  else
    Object.assign(state, initialValue);
  return state;
}

function useUserMedia(options = {}) {
  var _a, _b;
  const enabled = ref((_a = options.enabled) != null ? _a : false);
  const autoSwitch = ref((_b = options.autoSwitch) != null ? _b : true);
  const videoDeviceId = ref(options.videoDeviceId);
  const audioDeviceId = ref(options.audioDeviceId);
  const { navigator = defaultNavigator } = options;
  const isSupported = useSupported(() => {
    var _a2;
    return (_a2 = navigator == null ? void 0 : navigator.mediaDevices) == null ? void 0 : _a2.getUserMedia;
  });
  const stream = shallowRef();
  function getDeviceOptions(device) {
    if (device.value === "none" || device.value === false)
      return false;
    if (device.value == null)
      return true;
    return {
      deviceId: device.value
    };
  }
  async function _start() {
    if (!isSupported.value || stream.value)
      return;
    stream.value = await navigator.mediaDevices.getUserMedia({
      video: getDeviceOptions(videoDeviceId),
      audio: getDeviceOptions(audioDeviceId)
    });
    return stream.value;
  }
  async function _stop() {
    var _a2;
    (_a2 = stream.value) == null ? void 0 : _a2.getTracks().forEach((t) => t.stop());
    stream.value = void 0;
  }
  function stop() {
    _stop();
    enabled.value = false;
  }
  async function start() {
    await _start();
    if (stream.value)
      enabled.value = true;
    return stream.value;
  }
  async function restart() {
    _stop();
    return await start();
  }
  watch(enabled, (v) => {
    if (v)
      _start();
    else
      _stop();
  }, { immediate: true });
  watch([videoDeviceId, audioDeviceId], () => {
    if (autoSwitch.value && stream.value)
      restart();
  }, { immediate: true });
  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    videoDeviceId,
    audioDeviceId,
    enabled,
    autoSwitch
  };
}

function useVModel(props, key, emit, options = {}) {
  var _a, _b, _c, _d, _e;
  const {
    passive = false,
    eventName,
    deep = false,
    defaultValue
  } = options;
  const vm = getCurrentInstance();
  const _emit = emit || (vm == null ? void 0 : vm.emit) || ((_a = vm == null ? void 0 : vm.$emit) == null ? void 0 : _a.bind(vm)) || ((_c = (_b = vm == null ? void 0 : vm.proxy) == null ? void 0 : _b.$emit) == null ? void 0 : _c.bind(vm == null ? void 0 : vm.proxy));
  let event = eventName;
  if (!key) {
    if (isVue2) {
      const modelOptions = (_e = (_d = vm == null ? void 0 : vm.proxy) == null ? void 0 : _d.$options) == null ? void 0 : _e.model;
      key = (modelOptions == null ? void 0 : modelOptions.value) || "value";
      if (!eventName)
        event = (modelOptions == null ? void 0 : modelOptions.event) || "input";
    } else {
      key = "modelValue";
    }
  }
  event = eventName || event || `update:${key.toString()}`;
  const getValue = () => isDef(props[key]) ? props[key] : defaultValue;
  if (passive) {
    const proxy = ref(getValue());
    watch(() => props[key], (v) => proxy.value = v);
    watch(proxy, (v) => {
      if (v !== props[key] || deep)
        _emit(event, v);
    }, {
      deep
    });
    return proxy;
  } else {
    return computed({
      get() {
        return getValue();
      },
      set(value) {
        _emit(event, value);
      }
    });
  }
}

function useVModels(props, emit, options = {}) {
  const ret = {};
  for (const key in props)
    ret[key] = useVModel(props, key, emit, options);
  return ret;
}

function useVibrate(options) {
  const {
    pattern = [],
    interval = 0,
    navigator = defaultNavigator
  } = options || {};
  const isSupported = useSupported(() => typeof navigator !== "undefined" && "vibrate" in navigator);
  const patternRef = resolveRef(pattern);
  let intervalControls;
  const vibrate = (pattern2 = patternRef.value) => {
    if (isSupported.value)
      navigator.vibrate(pattern2);
  };
  const stop = () => {
    if (isSupported.value)
      navigator.vibrate(0);
    intervalControls == null ? void 0 : intervalControls.pause();
  };
  if (interval > 0) {
    intervalControls = useIntervalFn(vibrate, interval, {
      immediate: false,
      immediateCallback: false
    });
  }
  return {
    isSupported,
    pattern,
    intervalControls,
    vibrate,
    stop
  };
}

function useVirtualList(list, options) {
  const containerRef = ref();
  const size = useElementSize(containerRef);
  const currentList = ref([]);
  const source = shallowRef(list);
  const state = ref({ start: 0, end: 10 });
  const { itemHeight, overscan = 5 } = options;
  const getViewCapacity = (containerHeight) => {
    if (typeof itemHeight === "number")
      return Math.ceil(containerHeight / itemHeight);
    const { start = 0 } = state.value;
    let sum = 0;
    let capacity = 0;
    for (let i = start; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= containerHeight) {
        capacity = i;
        break;
      }
    }
    return capacity - start;
  };
  const getOffset = (scrollTop) => {
    if (typeof itemHeight === "number")
      return Math.floor(scrollTop / itemHeight) + 1;
    let sum = 0;
    let offset = 0;
    for (let i = 0; i < source.value.length; i++) {
      const height = itemHeight(i);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  const calculateRange = () => {
    const element = containerRef.value;
    if (element) {
      const offset = getOffset(element.scrollTop);
      const viewCapacity = getViewCapacity(element.clientHeight);
      const from = offset - overscan;
      const to = offset + viewCapacity + overscan;
      state.value = {
        start: from < 0 ? 0 : from,
        end: to > source.value.length ? source.value.length : to
      };
      currentList.value = source.value.slice(state.value.start, state.value.end).map((ele, index) => ({
        data: ele,
        index: index + state.value.start
      }));
    }
  };
  watch([size.width, size.height, list], () => {
    calculateRange();
  });
  const totalHeight = computed(() => {
    if (typeof itemHeight === "number")
      return source.value.length * itemHeight;
    return source.value.reduce((sum, _, index) => sum + itemHeight(index), 0);
  });
  const getDistanceTop = (index) => {
    if (typeof itemHeight === "number") {
      const height2 = index * itemHeight;
      return height2;
    }
    const height = source.value.slice(0, index).reduce((sum, _, i) => sum + itemHeight(i), 0);
    return height;
  };
  const scrollTo = (index) => {
    if (containerRef.value) {
      containerRef.value.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  const offsetTop = computed(() => getDistanceTop(state.value.start));
  const wrapperProps = computed(() => {
    return {
      style: {
        width: "100%",
        height: `${totalHeight.value - offsetTop.value}px`,
        marginTop: `${offsetTop.value}px`
      }
    };
  });
  const containerStyle = { overflowY: "auto" };
  return {
    list: currentList,
    scrollTo,
    containerProps: {
      ref: containerRef,
      onScroll: () => {
        calculateRange();
      },
      style: containerStyle
    },
    wrapperProps
  };
}

const useWakeLock = (options = {}) => {
  const {
    navigator = defaultNavigator,
    document = defaultDocument
  } = options;
  let wakeLock;
  const isSupported = useSupported(() => navigator && "wakeLock" in navigator);
  const isActive = ref(false);
  async function onVisibilityChange() {
    if (!isSupported.value || !wakeLock)
      return;
    if (document && document.visibilityState === "visible")
      wakeLock = await navigator.wakeLock.request("screen");
    isActive.value = !wakeLock.released;
  }
  if (document)
    useEventListener(document, "visibilitychange", onVisibilityChange, { passive: true });
  async function request(type) {
    if (!isSupported.value)
      return;
    wakeLock = await navigator.wakeLock.request(type);
    isActive.value = !wakeLock.released;
  }
  async function release() {
    if (!isSupported.value || !wakeLock)
      return;
    await wakeLock.release();
    isActive.value = !wakeLock.released;
    wakeLock = null;
  }
  return {
    isSupported,
    isActive,
    request,
    release
  };
};

const useWebNotification = (defaultOptions = {}) => {
  const {
    window = defaultWindow
  } = defaultOptions;
  const isSupported = useSupported(() => !!window && "Notification" in window);
  const notification = ref(null);
  const requestPermission = async () => {
    if (!isSupported.value)
      return;
    if ("permission" in Notification && Notification.permission !== "denied")
      await Notification.requestPermission();
  };
  const onClick = createEventHook();
  const onShow = createEventHook();
  const onError = createEventHook();
  const onClose = createEventHook();
  const show = async (overrides) => {
    if (!isSupported.value)
      return;
    await requestPermission();
    const options = Object.assign({}, defaultOptions, overrides);
    notification.value = new Notification(options.title || "", options);
    notification.value.onclick = (event) => onClick.trigger(event);
    notification.value.onshow = (event) => onShow.trigger(event);
    notification.value.onerror = (event) => onError.trigger(event);
    notification.value.onclose = (event) => onClose.trigger(event);
    return notification.value;
  };
  const close = () => {
    if (notification.value)
      notification.value.close();
    notification.value = null;
  };
  tryOnMounted(async () => {
    if (isSupported.value)
      await requestPermission();
  });
  tryOnScopeDispose(close);
  if (isSupported.value && window) {
    const document = window.document;
    useEventListener(document, "visibilitychange", (e) => {
      e.preventDefault();
      if (document.visibilityState === "visible") {
        close();
      }
    });
  }
  return {
    isSupported,
    notification,
    show,
    close,
    onClick,
    onShow,
    onError,
    onClose
  };
};

function resolveNestedOptions(options) {
  if (options === true)
    return {};
  return options;
}
function useWebSocket(url, options = {}) {
  const {
    onConnected,
    onDisconnected,
    onError,
    onMessage,
    immediate = true,
    autoClose = true,
    protocols = []
  } = options;
  const data = ref(null);
  const status = ref("CLOSED");
  const wsRef = ref();
  let heartbeatPause;
  let heartbeatResume;
  let explicitlyClosed = false;
  let retried = 0;
  let bufferedData = [];
  const close = (code = 1e3, reason) => {
    if (!wsRef.value)
      return;
    explicitlyClosed = true;
    heartbeatPause == null ? void 0 : heartbeatPause();
    wsRef.value.close(code, reason);
  };
  const _sendBuffer = () => {
    if (bufferedData.length && wsRef.value && status.value === "OPEN") {
      for (const buffer of bufferedData)
        wsRef.value.send(buffer);
      bufferedData = [];
    }
  };
  const send = (data2, useBuffer = true) => {
    if (!wsRef.value || status.value !== "OPEN") {
      if (useBuffer)
        bufferedData.push(data2);
      return false;
    }
    _sendBuffer();
    wsRef.value.send(data2);
    return true;
  };
  const _init = () => {
    const ws = new WebSocket(url, protocols);
    wsRef.value = ws;
    status.value = "CONNECTING";
    explicitlyClosed = false;
    ws.onopen = () => {
      status.value = "OPEN";
      onConnected == null ? void 0 : onConnected(ws);
      heartbeatResume == null ? void 0 : heartbeatResume();
      _sendBuffer();
    };
    ws.onclose = (ev) => {
      status.value = "CLOSED";
      wsRef.value = void 0;
      onDisconnected == null ? void 0 : onDisconnected(ws, ev);
      if (!explicitlyClosed && options.autoReconnect) {
        const {
          retries = -1,
          delay = 1e3,
          onFailed
        } = resolveNestedOptions(options.autoReconnect);
        retried += 1;
        if (typeof retries === "number" && (retries < 0 || retried < retries))
          setTimeout(_init, delay);
        else if (typeof retries === "function" && retries())
          setTimeout(_init, delay);
        else
          onFailed == null ? void 0 : onFailed();
      }
    };
    ws.onerror = (e) => {
      onError == null ? void 0 : onError(ws, e);
    };
    ws.onmessage = (e) => {
      data.value = e.data;
      onMessage == null ? void 0 : onMessage(ws, e);
    };
  };
  if (options.heartbeat) {
    const {
      message = "ping",
      interval = 1e3
    } = resolveNestedOptions(options.heartbeat);
    const { pause, resume } = useIntervalFn(() => send(message, false), interval, { immediate: false });
    heartbeatPause = pause;
    heartbeatResume = resume;
  }
  if (immediate)
    _init();
  if (autoClose) {
    useEventListener(window, "beforeunload", () => close());
    tryOnScopeDispose(close);
  }
  const open = () => {
    close();
    retried = 0;
    _init();
  };
  return {
    data,
    status,
    close,
    send,
    open,
    ws: wsRef
  };
}

function useWebWorker(url, workerOptions, options = {}) {
  const {
    window = defaultWindow
  } = options;
  const data = ref(null);
  const worker = shallowRef();
  const post = function post2(val) {
    if (!worker.value)
      return;
    worker.value.postMessage(val);
  };
  const terminate = function terminate2() {
    if (!worker.value)
      return;
    worker.value.terminate();
  };
  if (window) {
    worker.value = new Worker(url, workerOptions);
    worker.value.onmessage = (e) => {
      data.value = e.data;
    };
    tryOnScopeDispose(() => {
      if (worker.value)
        worker.value.terminate();
    });
  }
  return {
    data,
    post,
    terminate,
    worker
  };
}

const jobRunner = (userFunc) => (e) => {
  const userFuncArgs = e.data[0];
  return Promise.resolve(userFunc.apply(void 0, userFuncArgs)).then((result) => {
    postMessage(["SUCCESS", result]);
  }).catch((error) => {
    postMessage(["ERROR", error]);
  });
};

const depsParser = (deps) => {
  if (deps.length === 0)
    return "";
  const depsString = deps.map((dep) => `'${dep}'`).toString();
  return `importScripts(${depsString})`;
};

const createWorkerBlobUrl = (fn, deps) => {
  const blobCode = `${depsParser(deps)}; onmessage=(${jobRunner})(${fn})`;
  const blob = new Blob([blobCode], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  return url;
};

const useWebWorkerFn = (fn, options = {}) => {
  const {
    dependencies = [],
    timeout,
    window = defaultWindow
  } = options;
  const worker = ref();
  const workerStatus = ref("PENDING");
  const promise = ref({});
  const timeoutId = ref();
  const workerTerminate = (status = "PENDING") => {
    if (worker.value && worker.value._url && window) {
      worker.value.terminate();
      URL.revokeObjectURL(worker.value._url);
      promise.value = {};
      worker.value = void 0;
      window.clearTimeout(timeoutId.value);
      workerStatus.value = status;
    }
  };
  workerTerminate();
  tryOnScopeDispose(workerTerminate);
  const generateWorker = () => {
    const blobUrl = createWorkerBlobUrl(fn, dependencies);
    const newWorker = new Worker(blobUrl);
    newWorker._url = blobUrl;
    newWorker.onmessage = (e) => {
      const { resolve = () => {
      }, reject = () => {
      } } = promise.value;
      const [status, result] = e.data;
      switch (status) {
        case "SUCCESS":
          resolve(result);
          workerTerminate(status);
          break;
        default:
          reject(result);
          workerTerminate("ERROR");
          break;
      }
    };
    newWorker.onerror = (e) => {
      const { reject = () => {
      } } = promise.value;
      reject(e);
      workerTerminate("ERROR");
    };
    if (timeout) {
      timeoutId.value = setTimeout(() => workerTerminate("TIMEOUT_EXPIRED"), timeout);
    }
    return newWorker;
  };
  const callWorker = (...fnArgs) => new Promise((resolve, reject) => {
    promise.value = {
      resolve,
      reject
    };
    worker.value && worker.value.postMessage([[...fnArgs]]);
    workerStatus.value = "RUNNING";
  });
  const workerFn = (...fnArgs) => {
    if (workerStatus.value === "RUNNING") {
      console.error("[useWebWorkerFn] You can only run one instance of the worker at a time.");
      return Promise.reject();
    }
    worker.value = generateWorker();
    return callWorker(...fnArgs);
  };
  return {
    workerFn,
    workerStatus,
    workerTerminate
  };
};

function useWindowFocus({ window = defaultWindow } = {}) {
  if (!window)
    return ref(false);
  const focused = ref(window.document.hasFocus());
  useEventListener(window, "blur", () => {
    focused.value = false;
  });
  useEventListener(window, "focus", () => {
    focused.value = true;
  });
  return focused;
}

function useWindowScroll({ window = defaultWindow } = {}) {
  if (!window) {
    return {
      x: ref(0),
      y: ref(0)
    };
  }
  const x = ref(window.pageXOffset);
  const y = ref(window.pageYOffset);
  useEventListener("scroll", () => {
    x.value = window.pageXOffset;
    y.value = window.pageYOffset;
  }, {
    capture: false,
    passive: true
  });
  return { x, y };
}

function useWindowSize(options = {}) {
  const {
    window = defaultWindow,
    initialWidth = Infinity,
    initialHeight = Infinity,
    listenOrientation = true
  } = options;
  const width = ref(initialWidth);
  const height = ref(initialHeight);
  const update = () => {
    if (window) {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    }
  };
  update();
  tryOnMounted(update);
  useEventListener("resize", update, { passive: true });
  if (listenOrientation)
    useEventListener("orientationchange", update, { passive: true });
  return { width, height };
}




/***/ }),

/***/ 5055:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C5": () => (/* binding */ isClient),
/* harmony export */   "HD": () => (/* binding */ isString),
/* harmony export */   "IY": () => (/* binding */ tryOnScopeDispose),
/* harmony export */   "Ly": () => (/* binding */ resolveUnref),
/* harmony export */   "ZT": () => (/* binding */ noop),
/* harmony export */   "eM": () => (/* binding */ useTimeoutFn),
/* harmony export */   "hj": () => (/* binding */ isNumber),
/* harmony export */   "jn": () => (/* binding */ isBoolean),
/* harmony export */   "u7": () => (/* binding */ tryOnMounted),
/* harmony export */   "yR": () => (/* binding */ identity)
/* harmony export */ });
/* unused harmony exports __onlyVue3, assert, autoResetRef, bypassFilter, clamp, computedEager, computedWithControl, containsProp, controlledComputed, controlledRef, createEventHook, createFilterWrapper, createGlobalState, createInjectionState, createReactiveFn, createSharedComposable, createSingletonPromise, debounceFilter, debouncedRef, debouncedWatch, directiveHooks, eagerComputed, extendRef, formatDate, get, ignorableWatch, increaseWithUnit, invoke, isDef, isDefined, isFunction, isIOS, isObject, isWindow, makeDestructurable, normalizeDate, now, objectPick, pausableFilter, pausableWatch, promiseTimeout, rand, reactify, reactifyObject, reactiveComputed, reactiveOmit, reactivePick, refAutoReset, refDebounced, refDefault, refThrottled, refWithControl, resolveRef, set, syncRef, syncRefs, throttleFilter, throttledRef, throttledWatch, timestamp, toReactive, toRefs, tryOnBeforeMount, tryOnBeforeUnmount, tryOnUnmounted, until, useArrayEvery, useArrayFilter, useArrayFind, useArrayFindIndex, useArrayJoin, useArrayMap, useArrayReduce, useArraySome, useCounter, useDateFormat, useDebounce, useDebounceFn, useInterval, useIntervalFn, useLastChanged, useThrottle, useThrottleFn, useTimeout, useToNumber, useToString, useToggle, watchArray, watchAtMost, watchDebounced, watchIgnorable, watchOnce, watchPausable, watchThrottled, watchTriggerable, watchWithFilter, whenever */
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5957);


var __defProp$9 = Object.defineProperty;
var __defProps$6 = Object.defineProperties;
var __getOwnPropDescs$6 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$b = Object.getOwnPropertySymbols;
var __hasOwnProp$b = Object.prototype.hasOwnProperty;
var __propIsEnum$b = Object.prototype.propertyIsEnumerable;
var __defNormalProp$9 = (obj, key, value) => key in obj ? __defProp$9(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$9 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$b.call(b, prop))
      __defNormalProp$9(a, prop, b[prop]);
  if (__getOwnPropSymbols$b)
    for (var prop of __getOwnPropSymbols$b(b)) {
      if (__propIsEnum$b.call(b, prop))
        __defNormalProp$9(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$6 = (a, b) => __defProps$6(a, __getOwnPropDescs$6(b));
function computedEager(fn, options) {
  var _a;
  const result = shallowRef();
  watchEffect(() => {
    result.value = fn();
  }, __spreadProps$6(__spreadValues$9({}, options), {
    flush: (_a = options == null ? void 0 : options.flush) != null ? _a : "sync"
  }));
  return readonly(result);
}

var _a;
const isClient = typeof window !== "undefined";
const isDef = (val) => typeof val !== "undefined";
const assert = (condition, ...infos) => {
  if (!condition)
    console.warn(...infos);
};
const toString = Object.prototype.toString;
const isBoolean = (val) => typeof val === "boolean";
const isFunction = (val) => typeof val === "function";
const isNumber = (val) => typeof val === "number";
const isString = (val) => typeof val === "string";
const isObject = (val) => toString.call(val) === "[object Object]";
const isWindow = (val) => typeof window !== "undefined" && toString.call(val) === "[object Window]";
const now = () => Date.now();
const timestamp = () => +Date.now();
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const noop = () => {
};
const rand = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const isIOS = isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

function resolveUnref(r) {
  return typeof r === "function" ? r() : (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.unref)(r);
}

function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    filter(() => fn.apply(this, args), { fn, thisArg: this, args });
  }
  return wrapper;
}
const bypassFilter = (invoke) => {
  return invoke();
};
function debounceFilter(ms, options = {}) {
  let timer;
  let maxTimer;
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const maxDuration = resolveUnref(options.maxWait);
    if (timer)
      clearTimeout(timer);
    if (duration <= 0 || maxDuration !== void 0 && maxDuration <= 0) {
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }
    if (maxDuration && !maxTimer) {
      maxTimer = setTimeout(() => {
        if (timer)
          clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }
    timer = setTimeout(() => {
      if (maxTimer)
        clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
  };
  return filter;
}
function throttleFilter(ms, trailing = true, leading = true) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
    }
  };
  const filter = (invoke) => {
    const duration = resolveUnref(ms);
    const elapsed = Date.now() - lastExec;
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      timer = setTimeout(() => {
        lastExec = Date.now();
        isLeading = true;
        clear();
        invoke();
      }, duration);
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
  };
  return filter;
}
function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true);
  function pause() {
    isActive.value = false;
  }
  function resume() {
    isActive.value = true;
  }
  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args);
  };
  return { isActive, pause, resume, eventFilter };
}

function __onlyVue3(name = "this function") {
  if (isVue3)
    return;
  throw new Error(`[VueUse] ${name} is only works on Vue 3.`);
}
const directiveHooks = {
  mounted: vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? "mounted" : "inserted",
  updated: vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? "updated" : "componentUpdated",
  unmounted: vue_demi__WEBPACK_IMPORTED_MODULE_0__.isVue3 ? "unmounted" : "unbind"
};

function promiseTimeout(ms, throwOnTimeout = false, reason = "Timeout") {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms);
    else
      setTimeout(resolve, ms);
  });
}
function identity(arg) {
  return arg;
}
function createSingletonPromise(fn) {
  let _promise;
  function wrapper() {
    if (!_promise)
      _promise = fn();
    return _promise;
  }
  wrapper.reset = async () => {
    const _prev = _promise;
    _promise = void 0;
    if (_prev)
      await _prev;
  };
  return wrapper;
}
function invoke(fn) {
  return fn();
}
function containsProp(obj, ...props) {
  return props.some((k) => k in obj);
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function objectPick(obj, keys, omitUndefined = false) {
  return keys.reduce((n, k) => {
    if (k in obj) {
      if (!omitUndefined || obj[k] !== void 0)
        n[k] = obj[k];
    }
    return n;
  }, {});
}

function computedWithControl(source, fn) {
  let v = void 0;
  let track;
  let trigger;
  const dirty = ref(true);
  const update = () => {
    dirty.value = true;
    trigger();
  };
  watch(source, update, { flush: "sync" });
  const get = isFunction(fn) ? fn : fn.get;
  const set = isFunction(fn) ? void 0 : fn.set;
  const result = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        if (dirty.value) {
          v = get();
          dirty.value = false;
        }
        track();
        return v;
      },
      set(v2) {
        set == null ? void 0 : set(v2);
      }
    };
  });
  if (Object.isExtensible(result))
    result.trigger = update;
  return result;
}

function createEventHook() {
  const fns = [];
  const off = (fn) => {
    const index = fns.indexOf(fn);
    if (index !== -1)
      fns.splice(index, 1);
  };
  const on = (fn) => {
    fns.push(fn);
    return {
      off: () => off(fn)
    };
  };
  const trigger = (param) => {
    fns.forEach((fn) => fn(param));
  };
  return {
    on,
    off,
    trigger
  };
}

function createGlobalState(stateFactory) {
  let initialized = false;
  let state;
  const scope = effectScope(true);
  return () => {
    if (!initialized) {
      state = scope.run(stateFactory);
      initialized = true;
    }
    return state;
  };
}

function createInjectionState(composable) {
  const key = Symbol("InjectionState");
  const useProvidingState = (...args) => {
    provide(key, composable(...args));
  };
  const useInjectedState = () => inject(key);
  return [useProvidingState, useInjectedState];
}

function tryOnScopeDispose(fn) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope)()) {
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose)(fn);
    return true;
  }
  return false;
}

function createSharedComposable(composable) {
  let subscribers = 0;
  let state;
  let scope;
  const dispose = () => {
    subscribers -= 1;
    if (scope && subscribers <= 0) {
      scope.stop();
      state = void 0;
      scope = void 0;
    }
  };
  return (...args) => {
    subscribers += 1;
    if (!state) {
      scope = effectScope(true);
      state = scope.run(() => composable(...args));
    }
    tryOnScopeDispose(dispose);
    return state;
  };
}

function extendRef(ref, extend, { enumerable = false, unwrap = true } = {}) {
  __onlyVue3();
  for (const [key, value] of Object.entries(extend)) {
    if (key === "value")
      continue;
    if (isRef(value) && unwrap) {
      Object.defineProperty(ref, key, {
        get() {
          return value.value;
        },
        set(v) {
          value.value = v;
        },
        enumerable
      });
    } else {
      Object.defineProperty(ref, key, { value, enumerable });
    }
  }
  return ref;
}

function get(obj, key) {
  if (key == null)
    return unref(obj);
  return unref(obj)[key];
}

function isDefined(v) {
  return unref(v) != null;
}

var __defProp$8 = Object.defineProperty;
var __getOwnPropSymbols$a = Object.getOwnPropertySymbols;
var __hasOwnProp$a = Object.prototype.hasOwnProperty;
var __propIsEnum$a = Object.prototype.propertyIsEnumerable;
var __defNormalProp$8 = (obj, key, value) => key in obj ? __defProp$8(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$8 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$a.call(b, prop))
      __defNormalProp$8(a, prop, b[prop]);
  if (__getOwnPropSymbols$a)
    for (var prop of __getOwnPropSymbols$a(b)) {
      if (__propIsEnum$a.call(b, prop))
        __defNormalProp$8(a, prop, b[prop]);
    }
  return a;
};
function makeDestructurable(obj, arr) {
  if (typeof Symbol !== "undefined") {
    const clone = __spreadValues$8({}, obj);
    Object.defineProperty(clone, Symbol.iterator, {
      enumerable: false,
      value() {
        let index = 0;
        return {
          next: () => ({
            value: arr[index++],
            done: index > arr.length
          })
        };
      }
    });
    return clone;
  } else {
    return Object.assign([...arr], obj);
  }
}

function reactify(fn, options) {
  const unrefFn = (options == null ? void 0 : options.computedGetter) === false ? unref : resolveUnref;
  return function(...args) {
    return computed(() => fn.apply(this, args.map((i) => unrefFn(i))));
  };
}

function reactifyObject(obj, optionsOrKeys = {}) {
  let keys = [];
  let options;
  if (Array.isArray(optionsOrKeys)) {
    keys = optionsOrKeys;
  } else {
    options = optionsOrKeys;
    const { includeOwnProperties = true } = optionsOrKeys;
    keys.push(...Object.keys(obj));
    if (includeOwnProperties)
      keys.push(...Object.getOwnPropertyNames(obj));
  }
  return Object.fromEntries(keys.map((key) => {
    const value = obj[key];
    return [
      key,
      typeof value === "function" ? reactify(value.bind(obj), options) : value
    ];
  }));
}

function toReactive(objectRef) {
  if (!isRef(objectRef))
    return reactive(objectRef);
  const proxy = new Proxy({}, {
    get(_, p, receiver) {
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(_, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value))
        objectRef.value[p].value = value;
      else
        objectRef.value[p] = value;
      return true;
    },
    deleteProperty(_, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(_, p) {
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
}

function reactiveComputed(fn) {
  return toReactive(computed(fn));
}

function reactiveOmit(obj, ...keys) {
  const flatKeys = keys.flat();
  return reactiveComputed(() => Object.fromEntries(Object.entries(toRefs$1(obj)).filter((e) => !flatKeys.includes(e[0]))));
}

function reactivePick(obj, ...keys) {
  const flatKeys = keys.flat();
  return reactive(Object.fromEntries(flatKeys.map((k) => [k, toRef(obj, k)])));
}

function refAutoReset(defaultValue, afterMs = 1e4) {
  return customRef((track, trigger) => {
    let value = defaultValue;
    let timer;
    const resetAfter = () => setTimeout(() => {
      value = defaultValue;
      trigger();
    }, resolveUnref(afterMs));
    tryOnScopeDispose(() => {
      clearTimeout(timer);
    });
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        value = newValue;
        trigger();
        clearTimeout(timer);
        timer = resetAfter();
      }
    };
  });
}

function useDebounceFn(fn, ms = 200, options = {}) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}

function refDebounced(value, ms = 200, options = {}) {
  if (ms <= 0)
    return value;
  const debounced = ref(value.value);
  const updater = useDebounceFn(() => {
    debounced.value = value.value;
  }, ms, options);
  watch(value, () => updater());
  return debounced;
}

function refDefault(source, defaultValue) {
  return computed({
    get() {
      var _a;
      return (_a = source.value) != null ? _a : defaultValue;
    },
    set(value) {
      source.value = value;
    }
  });
}

function useThrottleFn(fn, ms = 200, trailing = false, leading = true) {
  return createFilterWrapper(throttleFilter(ms, trailing, leading), fn);
}

function refThrottled(value, delay = 200, trailing = true, leading = true) {
  if (delay <= 0)
    return value;
  const throttled = ref(value.value);
  const updater = useThrottleFn(() => {
    throttled.value = value.value;
  }, delay, trailing, leading);
  watch(value, () => updater());
  return throttled;
}

function refWithControl(initial, options = {}) {
  let source = initial;
  let track;
  let trigger;
  const ref = customRef((_track, _trigger) => {
    track = _track;
    trigger = _trigger;
    return {
      get() {
        return get();
      },
      set(v) {
        set(v);
      }
    };
  });
  function get(tracking = true) {
    if (tracking)
      track();
    return source;
  }
  function set(value, triggering = true) {
    var _a, _b;
    if (value === source)
      return;
    const old = source;
    if (((_a = options.onBeforeChange) == null ? void 0 : _a.call(options, value, old)) === false)
      return;
    source = value;
    (_b = options.onChanged) == null ? void 0 : _b.call(options, value, old);
    if (triggering)
      trigger();
  }
  const untrackedGet = () => get(false);
  const silentSet = (v) => set(v, false);
  const peek = () => get(false);
  const lay = (v) => set(v, false);
  return extendRef(ref, {
    get,
    set,
    untrackedGet,
    silentSet,
    peek,
    lay
  }, { enumerable: true });
}
const controlledRef = (/* unused pure expression or super */ null && (refWithControl));

function resolveRef(r) {
  return typeof r === "function" ? computed(r) : ref(r);
}

function set(...args) {
  if (args.length === 2) {
    const [ref, value] = args;
    ref.value = value;
  }
  if (args.length === 3) {
    if (isVue2) {
      set$1(...args);
    } else {
      const [target, key, value] = args;
      target[key] = value;
    }
  }
}

function syncRef(left, right, options = {}) {
  var _a, _b;
  const {
    flush = "sync",
    deep = false,
    immediate = true,
    direction = "both",
    transform = {}
  } = options;
  let watchLeft;
  let watchRight;
  const transformLTR = (_a = transform.ltr) != null ? _a : (v) => v;
  const transformRTL = (_b = transform.rtl) != null ? _b : (v) => v;
  if (direction === "both" || direction === "ltr") {
    watchLeft = watch(left, (newValue) => right.value = transformLTR(newValue), { flush, deep, immediate });
  }
  if (direction === "both" || direction === "rtl") {
    watchRight = watch(right, (newValue) => left.value = transformRTL(newValue), { flush, deep, immediate });
  }
  return () => {
    watchLeft == null ? void 0 : watchLeft();
    watchRight == null ? void 0 : watchRight();
  };
}

function syncRefs(source, targets, options = {}) {
  const {
    flush = "sync",
    deep = false,
    immediate = true
  } = options;
  if (!Array.isArray(targets))
    targets = [targets];
  return watch(source, (newValue) => targets.forEach((target) => target.value = newValue), { flush, deep, immediate });
}

var __defProp$7 = Object.defineProperty;
var __defProps$5 = Object.defineProperties;
var __getOwnPropDescs$5 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$9 = Object.getOwnPropertySymbols;
var __hasOwnProp$9 = Object.prototype.hasOwnProperty;
var __propIsEnum$9 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$7 = (obj, key, value) => key in obj ? __defProp$7(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$7 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$9.call(b, prop))
      __defNormalProp$7(a, prop, b[prop]);
  if (__getOwnPropSymbols$9)
    for (var prop of __getOwnPropSymbols$9(b)) {
      if (__propIsEnum$9.call(b, prop))
        __defNormalProp$7(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$5 = (a, b) => __defProps$5(a, __getOwnPropDescs$5(b));
function toRefs(objectRef) {
  if (!isRef(objectRef))
    return toRefs$1(objectRef);
  const result = Array.isArray(objectRef.value) ? new Array(objectRef.value.length) : {};
  for (const key in objectRef.value) {
    result[key] = customRef(() => ({
      get() {
        return objectRef.value[key];
      },
      set(v) {
        if (Array.isArray(objectRef.value)) {
          const copy = [...objectRef.value];
          copy[key] = v;
          objectRef.value = copy;
        } else {
          const newObject = __spreadProps$5(__spreadValues$7({}, objectRef.value), { [key]: v });
          Object.setPrototypeOf(newObject, objectRef.value);
          objectRef.value = newObject;
        }
      }
    }));
  }
  return result;
}

function tryOnBeforeMount(fn, sync = true) {
  if (getCurrentInstance())
    onBeforeMount(fn);
  else if (sync)
    fn();
  else
    nextTick(fn);
}

function tryOnBeforeUnmount(fn) {
  if (getCurrentInstance())
    onBeforeUnmount(fn);
}

function tryOnMounted(fn, sync = true) {
  if ((0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)())
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.onMounted)(fn);
  else if (sync)
    fn();
  else
    (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.nextTick)(fn);
}

function tryOnUnmounted(fn) {
  if (getCurrentInstance())
    onUnmounted(fn);
}

function until(r) {
  let isNot = false;
  function toMatch(condition, { flush = "sync", deep = false, timeout, throwOnTimeout } = {}) {
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch(r, (v) => {
        if (condition(v) !== isNot) {
          stop == null ? void 0 : stop();
          resolve(v);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => resolveUnref(r)).finally(() => stop == null ? void 0 : stop()));
    }
    return Promise.race(promises);
  }
  function toBe(value, options) {
    if (!isRef(value))
      return toMatch((v) => v === value, options);
    const { flush = "sync", deep = false, timeout, throwOnTimeout } = options != null ? options : {};
    let stop = null;
    const watcher = new Promise((resolve) => {
      stop = watch([r, value], ([v1, v2]) => {
        if (isNot !== (v1 === v2)) {
          stop == null ? void 0 : stop();
          resolve(v1);
        }
      }, {
        flush,
        deep,
        immediate: true
      });
    });
    const promises = [watcher];
    if (timeout != null) {
      promises.push(promiseTimeout(timeout, throwOnTimeout).then(() => resolveUnref(r)).finally(() => {
        stop == null ? void 0 : stop();
        return resolveUnref(r);
      }));
    }
    return Promise.race(promises);
  }
  function toBeTruthy(options) {
    return toMatch((v) => Boolean(v), options);
  }
  function toBeNull(options) {
    return toBe(null, options);
  }
  function toBeUndefined(options) {
    return toBe(void 0, options);
  }
  function toBeNaN(options) {
    return toMatch(Number.isNaN, options);
  }
  function toContains(value, options) {
    return toMatch((v) => {
      const array = Array.from(v);
      return array.includes(value) || array.includes(resolveUnref(value));
    }, options);
  }
  function changed(options) {
    return changedTimes(1, options);
  }
  function changedTimes(n = 1, options) {
    let count = -1;
    return toMatch(() => {
      count += 1;
      return count >= n;
    }, options);
  }
  if (Array.isArray(resolveUnref(r))) {
    const instance = {
      toMatch,
      toContains,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  } else {
    const instance = {
      toMatch,
      toBe,
      toBeTruthy,
      toBeNull,
      toBeNaN,
      toBeUndefined,
      changed,
      changedTimes,
      get not() {
        isNot = !isNot;
        return this;
      }
    };
    return instance;
  }
}

function useArrayEvery(list, fn) {
  return computed(() => resolveUnref(list).every((element, index, array) => fn(resolveUnref(element), index, array)));
}

function useArrayFilter(list, fn) {
  return computed(() => resolveUnref(list).map((i) => resolveUnref(i)).filter(fn));
}

function useArrayFind(list, fn) {
  return computed(() => resolveUnref(resolveUnref(list).find((element, index, array) => fn(resolveUnref(element), index, array))));
}

function useArrayFindIndex(list, fn) {
  return computed(() => resolveUnref(list).findIndex((element, index, array) => fn(resolveUnref(element), index, array)));
}

function useArrayJoin(list, separator) {
  return computed(() => resolveUnref(list).map((i) => resolveUnref(i)).join(resolveUnref(separator)));
}

function useArrayMap(list, fn) {
  return computed(() => resolveUnref(list).map((i) => resolveUnref(i)).map(fn));
}

function useArrayReduce(list, reducer, ...args) {
  const reduceCallback = (sum, value, index) => reducer(resolveUnref(sum), resolveUnref(value), index);
  return computed(() => {
    const resolved = resolveUnref(list);
    return args.length ? resolved.reduce(reduceCallback, resolveUnref(args[0])) : resolved.reduce(reduceCallback);
  });
}

function useArraySome(list, fn) {
  return computed(() => resolveUnref(list).some((element, index, array) => fn(resolveUnref(element), index, array)));
}

function useCounter(initialValue = 0, options = {}) {
  const count = ref(initialValue);
  const {
    max = Infinity,
    min = -Infinity
  } = options;
  const inc = (delta = 1) => count.value = Math.min(max, count.value + delta);
  const dec = (delta = 1) => count.value = Math.max(min, count.value - delta);
  const get = () => count.value;
  const set = (val) => count.value = val;
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };
  return { count, inc, dec, get, set, reset };
}

const REGEX_PARSE = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/;
const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;
const formatDate = (date, formatStr, locales) => {
  const years = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();
  const day = date.getDay();
  const matches = {
    YY: () => String(years).slice(-2),
    YYYY: () => years,
    M: () => month + 1,
    MM: () => `${month + 1}`.padStart(2, "0"),
    D: () => String(days),
    DD: () => `${days}`.padStart(2, "0"),
    H: () => String(hours),
    HH: () => `${hours}`.padStart(2, "0"),
    h: () => `${hours % 12 || 12}`.padStart(1, "0"),
    hh: () => `${hours % 12 || 12}`.padStart(2, "0"),
    m: () => String(minutes),
    mm: () => `${minutes}`.padStart(2, "0"),
    s: () => String(seconds),
    ss: () => `${seconds}`.padStart(2, "0"),
    SSS: () => `${milliseconds}`.padStart(3, "0"),
    d: () => day,
    dd: () => date.toLocaleDateString(locales, { weekday: "narrow" }),
    ddd: () => date.toLocaleDateString(locales, { weekday: "short" }),
    dddd: () => date.toLocaleDateString(locales, { weekday: "long" })
  };
  return formatStr.replace(REGEX_FORMAT, (match, $1) => $1 || matches[match]());
};
const normalizeDate = (date) => {
  if (date === null)
    return new Date(NaN);
  if (date === void 0)
    return new Date();
  if (date instanceof Date)
    return new Date(date);
  if (typeof date === "string" && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE);
    if (d) {
      const m = d[2] - 1 || 0;
      const ms = (d[7] || "0").substring(0, 3);
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms);
    }
  }
  return new Date(date);
};
function useDateFormat(date, formatStr = "HH:mm:ss", options = {}) {
  return computed(() => formatDate(normalizeDate(resolveUnref(date)), resolveUnref(formatStr), options == null ? void 0 : options.locales));
}

function useIntervalFn(cb, interval = 1e3, options = {}) {
  const {
    immediate = true,
    immediateCallback = false
  } = options;
  let timer = null;
  const isActive = ref(false);
  function clean() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }
  function pause() {
    isActive.value = false;
    clean();
  }
  function resume() {
    if (unref(interval) <= 0)
      return;
    isActive.value = true;
    if (immediateCallback)
      cb();
    clean();
    timer = setInterval(cb, resolveUnref(interval));
  }
  if (immediate && isClient)
    resume();
  if (isRef(interval)) {
    const stopWatch = watch(interval, () => {
      if (isActive.value && isClient)
        resume();
    });
    tryOnScopeDispose(stopWatch);
  }
  tryOnScopeDispose(pause);
  return {
    isActive,
    pause,
    resume
  };
}

var __defProp$6 = Object.defineProperty;
var __getOwnPropSymbols$8 = Object.getOwnPropertySymbols;
var __hasOwnProp$8 = Object.prototype.hasOwnProperty;
var __propIsEnum$8 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$8.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$8)
    for (var prop of __getOwnPropSymbols$8(b)) {
      if (__propIsEnum$8.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
function useInterval(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false,
    immediate = true
  } = options;
  const counter = ref(0);
  const controls = useIntervalFn(() => counter.value += 1, interval, { immediate });
  if (exposeControls) {
    return __spreadValues$6({
      counter
    }, controls);
  } else {
    return counter;
  }
}

function useLastChanged(source, options = {}) {
  var _a;
  const ms = ref((_a = options.initialValue) != null ? _a : null);
  watch(source, () => ms.value = timestamp(), options);
  return ms;
}

function useTimeoutFn(cb, interval, options = {}) {
  const {
    immediate = true
  } = options;
  const isPending = (0,vue_demi__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  let timer = null;
  function clear() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function stop() {
    isPending.value = false;
    clear();
  }
  function start(...args) {
    clear();
    isPending.value = true;
    timer = setTimeout(() => {
      isPending.value = false;
      timer = null;
      cb(...args);
    }, resolveUnref(interval));
  }
  if (immediate) {
    isPending.value = true;
    if (isClient)
      start();
  }
  tryOnScopeDispose(stop);
  return {
    isPending,
    start,
    stop
  };
}

var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$7 = Object.getOwnPropertySymbols;
var __hasOwnProp$7 = Object.prototype.hasOwnProperty;
var __propIsEnum$7 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$7.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$7)
    for (var prop of __getOwnPropSymbols$7(b)) {
      if (__propIsEnum$7.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
function useTimeout(interval = 1e3, options = {}) {
  const {
    controls: exposeControls = false
  } = options;
  const controls = useTimeoutFn(noop, interval, options);
  const ready = computed(() => !controls.isPending.value);
  if (exposeControls) {
    return __spreadValues$5({
      ready
    }, controls);
  } else {
    return ready;
  }
}

function useToNumber(value, options = {}) {
  const {
    method = "parseFloat",
    radix,
    nanToZero
  } = options;
  return computed(() => {
    let resolved = resolveUnref(value);
    if (typeof resolved === "string")
      resolved = Number[method](resolved, radix);
    if (nanToZero && isNaN(resolved))
      resolved = 0;
    return resolved;
  });
}

function useToString(value) {
  return computed(() => `${resolveUnref(value)}`);
}

function useToggle(initialValue = false, options = {}) {
  const {
    truthyValue = true,
    falsyValue = false
  } = options;
  const valueIsRef = isRef(initialValue);
  const _value = ref(initialValue);
  function toggle(value) {
    if (arguments.length) {
      _value.value = value;
      return _value.value;
    } else {
      const truthy = resolveUnref(truthyValue);
      _value.value = _value.value === truthy ? resolveUnref(falsyValue) : truthy;
      return _value.value;
    }
  }
  if (valueIsRef)
    return toggle;
  else
    return [_value, toggle];
}

function watchArray(source, cb, options) {
  let oldList = (options == null ? void 0 : options.immediate) ? [] : [
    ...source instanceof Function ? source() : Array.isArray(source) ? source : unref(source)
  ];
  return watch(source, (newList, _, onCleanup) => {
    const oldListRemains = new Array(oldList.length);
    const added = [];
    for (const obj of newList) {
      let found = false;
      for (let i = 0; i < oldList.length; i++) {
        if (!oldListRemains[i] && obj === oldList[i]) {
          oldListRemains[i] = true;
          found = true;
          break;
        }
      }
      if (!found)
        added.push(obj);
    }
    const removed = oldList.filter((_2, i) => !oldListRemains[i]);
    cb(newList, oldList, added, removed, onCleanup);
    oldList = [...newList];
  }, options);
}

var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __objRest$5 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$6.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$6.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchWithFilter(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$5(_a, [
    "eventFilter"
  ]);
  return watch(source, createFilterWrapper(eventFilter, cb), watchOptions);
}

var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __objRest$4 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$5.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$5.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchAtMost(source, cb, options) {
  const _a = options, {
    count
  } = _a, watchOptions = __objRest$4(_a, [
    "count"
  ]);
  const current = ref(0);
  const stop = watchWithFilter(source, (...args) => {
    current.value += 1;
    if (current.value >= resolveUnref(count))
      nextTick(() => stop());
    cb(...args);
  }, watchOptions);
  return { count: current, stop };
}

var __defProp$4 = Object.defineProperty;
var __defProps$4 = Object.defineProperties;
var __getOwnPropDescs$4 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$4 = (a, b) => __defProps$4(a, __getOwnPropDescs$4(b));
var __objRest$3 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$4.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$4.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchDebounced(source, cb, options = {}) {
  const _a = options, {
    debounce = 0,
    maxWait = void 0
  } = _a, watchOptions = __objRest$3(_a, [
    "debounce",
    "maxWait"
  ]);
  return watchWithFilter(source, cb, __spreadProps$4(__spreadValues$4({}, watchOptions), {
    eventFilter: debounceFilter(debounce, { maxWait })
  }));
}

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchIgnorable(source, cb, options = {}) {
  const _a = options, {
    eventFilter = bypassFilter
  } = _a, watchOptions = __objRest$2(_a, [
    "eventFilter"
  ]);
  const filteredCb = createFilterWrapper(eventFilter, cb);
  let ignoreUpdates;
  let ignorePrevAsyncUpdates;
  let stop;
  if (watchOptions.flush === "sync") {
    const ignore = ref(false);
    ignorePrevAsyncUpdates = () => {
    };
    ignoreUpdates = (updater) => {
      ignore.value = true;
      updater();
      ignore.value = false;
    };
    stop = watch(source, (...args) => {
      if (!ignore.value)
        filteredCb(...args);
    }, watchOptions);
  } else {
    const disposables = [];
    const ignoreCounter = ref(0);
    const syncCounter = ref(0);
    ignorePrevAsyncUpdates = () => {
      ignoreCounter.value = syncCounter.value;
    };
    disposables.push(watch(source, () => {
      syncCounter.value++;
    }, __spreadProps$3(__spreadValues$3({}, watchOptions), { flush: "sync" })));
    ignoreUpdates = (updater) => {
      const syncCounterPrev = syncCounter.value;
      updater();
      ignoreCounter.value += syncCounter.value - syncCounterPrev;
    };
    disposables.push(watch(source, (...args) => {
      const ignore = ignoreCounter.value > 0 && ignoreCounter.value === syncCounter.value;
      ignoreCounter.value = 0;
      syncCounter.value = 0;
      if (ignore)
        return;
      filteredCb(...args);
    }, watchOptions));
    stop = () => {
      disposables.forEach((fn) => fn());
    };
  }
  return { stop, ignoreUpdates, ignorePrevAsyncUpdates };
}

function watchOnce(source, cb, options) {
  const stop = watch(source, (...args) => {
    nextTick(() => stop());
    return cb(...args);
  }, options);
}

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchPausable(source, cb, options = {}) {
  const _a = options, {
    eventFilter: filter
  } = _a, watchOptions = __objRest$1(_a, [
    "eventFilter"
  ]);
  const { eventFilter, pause, resume, isActive } = pausableFilter(filter);
  const stop = watchWithFilter(source, cb, __spreadProps$2(__spreadValues$2({}, watchOptions), {
    eventFilter
  }));
  return { stop, pause, resume, isActive };
}

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
function watchThrottled(source, cb, options = {}) {
  const _a = options, {
    throttle = 0,
    trailing = true,
    leading = true
  } = _a, watchOptions = __objRest(_a, [
    "throttle",
    "trailing",
    "leading"
  ]);
  return watchWithFilter(source, cb, __spreadProps$1(__spreadValues$1({}, watchOptions), {
    eventFilter: throttleFilter(throttle, trailing, leading)
  }));
}

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function watchTriggerable(source, cb, options = {}) {
  let cleanupFn;
  function onEffect() {
    if (!cleanupFn)
      return;
    const fn = cleanupFn;
    cleanupFn = void 0;
    fn();
  }
  function onCleanup(callback) {
    cleanupFn = callback;
  }
  const _cb = (value, oldValue) => {
    onEffect();
    return cb(value, oldValue, onCleanup);
  };
  const res = watchIgnorable(source, _cb, options);
  const { ignoreUpdates } = res;
  const trigger = () => {
    let res2;
    ignoreUpdates(() => {
      res2 = _cb(getWatchSources(source), getOldValue(source));
    });
    return res2;
  };
  return __spreadProps(__spreadValues({}, res), {
    trigger
  });
}
function getWatchSources(sources) {
  if (isReactive(sources))
    return sources;
  if (Array.isArray(sources))
    return sources.map((item) => getOneWatchSource(item));
  return getOneWatchSource(sources);
}
function getOneWatchSource(source) {
  return typeof source === "function" ? source() : unref(source);
}
function getOldValue(source) {
  return Array.isArray(source) ? source.map(() => void 0) : void 0;
}

function whenever(source, cb, options) {
  return watch(source, (v, ov, onInvalidate) => {
    if (v)
      cb(v, ov, onInvalidate);
  }, options);
}




/***/ }),

/***/ 7700:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ _export_sfc)
/* harmony export */ });
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};


//# sourceMappingURL=plugin-vue_export-helper.mjs.map


/***/ }),

/***/ 1735:
/***/ (() => {


;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/theme-chalk/base.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/base/style/css.mjs

//# sourceMappingURL=css.mjs.map


/***/ }),

/***/ 8016:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gn": () => (/* binding */ ElIcon)
});

// UNUSED EXPORTS: default, iconProps

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/props/runtime.mjs
var runtime = __webpack_require__(2242);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/icon/src/icon.mjs



const iconProps = (0,runtime/* buildProps */.o8)({
  size: {
    type: (0,runtime/* definePropType */.Cq)([Number, String])
  },
  color: {
    type: String
  }
});


//# sourceMappingURL=icon.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/_virtual/plugin-vue_export-helper.mjs
var plugin_vue_export_helper = __webpack_require__(7700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-namespace/index.mjs
var use_namespace = __webpack_require__(1201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/types.mjs
var types = __webpack_require__(1679);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/dom/style.mjs
var dom_style = __webpack_require__(7137);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/icon/src/icon2.mjs









const __default__ = {
  name: "ElIcon",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...__default__,
  props: iconProps,
  setup(__props) {
    const props = __props;
    const ns = (0,use_namespace/* useNamespace */.s)("icon");
    const style = (0,external_Vue_.computed)(() => {
      if (!props.size && !props.color)
        return {};
      return {
        fontSize: (0,types/* isUndefined */.o8)(props.size) ? void 0 : (0,dom_style/* addUnit */.Nn)(props.size),
        "--color": props.color
      };
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("i", (0,external_Vue_.mergeProps)({
        class: (0,external_Vue_.unref)(ns).b(),
        style: (0,external_Vue_.unref)(style)
      }, _ctx.$attrs), [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
      ], 16);
    };
  }
});
var Icon = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);


//# sourceMappingURL=icon2.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/install.mjs
var install = __webpack_require__(5576);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/icon/index.mjs





const ElIcon = (0,install/* withInstall */.nz)(Icon);


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 9706:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/base/style/css.mjs + 1 modules
var css = __webpack_require__(1735);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/theme-chalk/el-menu-item.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu-item/style/css.mjs


//# sourceMappingURL=css.mjs.map


/***/ }),

/***/ 9175:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q8": () => (/* binding */ ElMenu),
  "E_": () => (/* binding */ ElMenuItem),
  "F8": () => (/* binding */ ElSubMenu)
});

// UNUSED EXPORTS: ElMenuItemGroup, default, menuEmits, menuItemEmits, menuItemGroupProps, menuItemProps, menuProps, subMenuProps

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vueuse+core@9.1.1_vue@3.2.37/node_modules/@vueuse/core/index.mjs
var core = __webpack_require__(5503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/icon/index.mjs + 2 modules
var icon = __webpack_require__(8016);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@element-plus+icons-vue@2.0.6_vue@3.2.37/node_modules/@element-plus/icons-vue/dist/index.js
var dist = __webpack_require__(5823);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/constants/aria.mjs
var aria = __webpack_require__(8669);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/dom/aria.mjs
const FOCUSABLE_ELEMENT_SELECTORS = (/* unused pure expression or super */ null && (`a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])`));
const isVisible = (element) => {
  if (false)
    {}
  const computed = getComputedStyle(element);
  return computed.position === "fixed" ? false : element.offsetParent !== null;
};
const obtainAllFocusableElements = (element) => {
  return Array.from(element.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS)).filter((item) => isFocusable(item) && isVisible(item));
};
const isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.disabled) {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
const attemptFocus = (element) => {
  var _a;
  if (!isFocusable(element)) {
    return false;
  }
  (_a = element.focus) == null ? void 0 : _a.call(element);
  return document.activeElement === element;
};
const triggerEvent = function(elm, name, ...opts) {
  let eventName;
  if (name.includes("mouse") || name.includes("click")) {
    eventName = "MouseEvents";
  } else if (name.includes("key")) {
    eventName = "KeyboardEvent";
  } else {
    eventName = "HTMLEvents";
  }
  const evt = document.createEvent(eventName);
  evt.initEvent(name, ...opts);
  elm.dispatchEvent(evt);
  return elm;
};
const isLeaf = (el) => !el.getAttribute("aria-owns");
const getSibling = (el, distance, elClass) => {
  const { parentNode } = el;
  if (!parentNode)
    return null;
  const siblings = parentNode.querySelectorAll(elClass);
  const index = Array.prototype.indexOf.call(siblings, el);
  return siblings[index + distance] || null;
};
const focusNode = (el) => {
  if (!el)
    return;
  el.focus();
  !isLeaf(el) && el.click();
};


//# sourceMappingURL=aria.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/utils/submenu.mjs





class SubMenu {
  constructor(parent, domNode) {
    this.parent = parent;
    this.domNode = domNode;
    this.subIndex = 0;
    this.subIndex = 0;
    this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li");
    this.addListeners();
  }
  gotoSubIndex(idx) {
    if (idx === this.subMenuItems.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = this.subMenuItems.length - 1;
    }
    ;
    this.subMenuItems[idx].focus();
    this.subIndex = idx;
  }
  addListeners() {
    const parentNode = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (el) => {
      el.addEventListener("keydown", (event) => {
        let prevDef = false;
        switch (event.code) {
          case aria/* EVENT_CODE.down */.n.down: {
            this.gotoSubIndex(this.subIndex + 1);
            prevDef = true;
            break;
          }
          case aria/* EVENT_CODE.up */.n.up: {
            this.gotoSubIndex(this.subIndex - 1);
            prevDef = true;
            break;
          }
          case aria/* EVENT_CODE.tab */.n.tab: {
            triggerEvent(parentNode, "mouseleave");
            break;
          }
          case aria/* EVENT_CODE.enter */.n.enter:
          case aria/* EVENT_CODE.space */.n.space: {
            prevDef = true;
            event.currentTarget.click();
            break;
          }
        }
        if (prevDef) {
          event.preventDefault();
          event.stopPropagation();
        }
        return false;
      });
    });
  }
}


//# sourceMappingURL=submenu.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/utils/menu-item.mjs






class MenuItem {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.submenu = null;
    this.submenu = null;
    this.init(namespace);
  }
  init(namespace) {
    this.domNode.setAttribute("tabindex", "0");
    const menuChild = this.domNode.querySelector(`.${namespace}-menu`);
    if (menuChild) {
      this.submenu = new SubMenu(this, menuChild);
    }
    this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (event) => {
      let prevDef = false;
      switch (event.code) {
        case aria/* EVENT_CODE.down */.n.down: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(0);
          prevDef = true;
          break;
        }
        case aria/* EVENT_CODE.up */.n.up: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
          prevDef = true;
          break;
        }
        case aria/* EVENT_CODE.tab */.n.tab: {
          triggerEvent(event.currentTarget, "mouseleave");
          break;
        }
        case aria/* EVENT_CODE.enter */.n.enter:
        case aria/* EVENT_CODE.space */.n.space: {
          prevDef = true;
          event.currentTarget.click();
          break;
        }
      }
      if (prevDef) {
        event.preventDefault();
      }
    });
  }
}


//# sourceMappingURL=menu-item.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/utils/menu-bar.mjs


class Menu {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.init(namespace);
  }
  init(namespace) {
    const menuChildren = this.domNode.childNodes;
    Array.from(menuChildren).forEach((child) => {
      if (child.nodeType === 1) {
        new MenuItem(child, namespace);
      }
    });
  }
}


//# sourceMappingURL=menu-bar.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/_virtual/plugin-vue_export-helper.mjs
var plugin_vue_export_helper = __webpack_require__(7700);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-namespace/index.mjs
var use_namespace = __webpack_require__(1201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/dom/style.mjs
var style = __webpack_require__(7137);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/menu-collapse-transition.mjs







const _sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElMenuCollapseTransition",
  setup() {
    const ns = (0,use_namespace/* useNamespace */.s)("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        (0,style/* addClass */.cn)(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        (0,style/* removeClass */.IV)(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset) {
          ;
          el.dataset = {};
        }
        if ((0,style/* hasClass */.pv)(el, ns.m("collapse"))) {
          (0,style/* removeClass */.IV)(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          (0,style/* addClass */.cn)(el, ns.m("collapse"));
        } else {
          (0,style/* addClass */.cn)(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          (0,style/* removeClass */.IV)(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        (0,style/* addClass */.cn)(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return {
      listeners
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Transition, (0,external_Vue_.mergeProps)({ mode: "out-in" }, _ctx.listeners), {
    default: (0,external_Vue_.withCtx)(() => [
      (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}
var ElMenuCollapseTransition = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);


//# sourceMappingURL=menu-collapse-transition.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vueuse+shared@9.1.1_vue@3.2.37/node_modules/@vueuse/shared/index.mjs
var shared = __webpack_require__(5055);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/collapse-transition/src/collapse-transition.mjs





const __default__ = {
  name: "ElCollapseTransition"
};
const collapse_transition_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...__default__,
  setup(__props) {
    const ns = (0,use_namespace/* useNamespace */.s)("collapse-transition");
    const on = {
      beforeEnter(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = `${el.scrollHeight}px`;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
          el.style.maxHeight = 0;
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
        el.style.overflow = "hidden";
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      beforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
    };
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Transition, (0,external_Vue_.mergeProps)({
        name: (0,external_Vue_.unref)(ns).b()
      }, (0,external_Vue_.toHandlers)(on)), {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["name"]);
    };
  }
});
var CollapseTransition = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(collapse_transition_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);


//# sourceMappingURL=collapse-transition.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/collapse-transition/index.mjs


CollapseTransition.install = (app) => {
  app.component(CollapseTransition.name, CollapseTransition);
};
const _CollapseTransition = CollapseTransition;
const ElCollapseTransition = (/* unused pure expression or super */ null && (_CollapseTransition));


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/index.mjs + 28 modules
var tooltip = __webpack_require__(8336);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/use-menu.mjs


function useMenu(instance, currentIndex) {
  const indexPath = (0,external_Vue_.computed)(() => {
    let parent = instance.parent;
    const path = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path;
  });
  const parentMenu = (0,external_Vue_.computed)(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}


//# sourceMappingURL=use-menu.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@ctrl+tinycolor@3.4.1/node_modules/@ctrl/tinycolor/dist/module/index.js + 4 modules
var dist_module = __webpack_require__(5122);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/use-menu-color.mjs



function useMenuColor(props) {
  const menuBarColor = (0,external_Vue_.computed)(() => {
    const color = props.backgroundColor;
    if (!color) {
      return "";
    } else {
      return new dist_module/* TinyColor */.C(color).shade(20).toString();
    }
  });
  return menuBarColor;
}


//# sourceMappingURL=use-menu-color.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/use-menu-css-var.mjs





const useMenuCssVar = (props, level) => {
  const ns = (0,use_namespace/* useNamespace */.s)("menu");
  return (0,external_Vue_.computed)(() => {
    return ns.cssVarBlock({
      "text-color": props.textColor || "",
      "hover-text-color": props.textColor || "",
      "bg-color": props.backgroundColor || "",
      "hover-bg-color": useMenuColor(props).value || "",
      "active-color": props.activeTextColor || "",
      level: `${level}`
    });
  });
};


//# sourceMappingURL=use-menu-css-var.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/props/runtime.mjs
var runtime = __webpack_require__(2242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/error.mjs
var error = __webpack_require__(9361);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/sub-menu.mjs














const subMenuProps = (0,runtime/* buildProps */.o8)({
  index: {
    type: String,
    required: true
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  popperClass: String,
  disabled: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: void 0
  },
  popperOffset: {
    type: Number,
    default: 6
  }
});
const COMPONENT_NAME = "ElSubMenu";
var sub_menu_SubMenu = (0,external_Vue_.defineComponent)({
  name: COMPONENT_NAME,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = (0,external_Vue_.getCurrentInstance)();
    const { indexPath, parentMenu } = useMenu(instance, (0,external_Vue_.computed)(() => props.index));
    const nsMenu = (0,use_namespace/* useNamespace */.s)("menu");
    const nsSubMenu = (0,use_namespace/* useNamespace */.s)("sub-menu");
    const rootMenu = (0,external_Vue_.inject)("rootMenu");
    if (!rootMenu)
      (0,error/* throwError */._)(COMPONENT_NAME, "can not inject root menu");
    const subMenu = (0,external_Vue_.inject)(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      (0,error/* throwError */._)(COMPONENT_NAME, "can not inject sub menu");
    const items = (0,external_Vue_.ref)({});
    const subMenus = (0,external_Vue_.ref)({});
    let timeout;
    const mouseInChild = (0,external_Vue_.ref)(false);
    const verticalTitleRef = (0,external_Vue_.ref)();
    const vPopper = (0,external_Vue_.ref)(null);
    const currentPlacement = (0,external_Vue_.computed)(() => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start");
    const subMenuTitleIcon = (0,external_Vue_.computed)(() => {
      return mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse ? dist/* ArrowDown */.K5e : dist/* ArrowRight */.olP;
    });
    const isFirstLevel = (0,external_Vue_.computed)(() => {
      return subMenu.level === 0;
    });
    const appendToBody = (0,external_Vue_.computed)(() => {
      return props.popperAppendToBody === void 0 ? isFirstLevel.value : Boolean(props.popperAppendToBody);
    });
    const menuTransitionName = (0,external_Vue_.computed)(() => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`);
    const fallbackPlacements = (0,external_Vue_.computed)(() => mode.value === "horizontal" && isFirstLevel.value ? [
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end",
      "right-start",
      "left-start"
    ] : [
      "right-start",
      "left-start",
      "bottom-start",
      "bottom-end",
      "top-start",
      "top-end"
    ]);
    const opened = (0,external_Vue_.computed)(() => rootMenu.openedMenus.includes(props.index));
    const active = (0,external_Vue_.computed)(() => {
      let isActive = false;
      Object.values(items.value).forEach((item2) => {
        if (item2.active) {
          isActive = true;
        }
      });
      Object.values(subMenus.value).forEach((subItem) => {
        if (subItem.active) {
          isActive = true;
        }
      });
      return isActive;
    });
    const backgroundColor = (0,external_Vue_.computed)(() => rootMenu.props.backgroundColor || "");
    const activeTextColor = (0,external_Vue_.computed)(() => rootMenu.props.activeTextColor || "");
    const textColor = (0,external_Vue_.computed)(() => rootMenu.props.textColor || "");
    const mode = (0,external_Vue_.computed)(() => rootMenu.props.mode);
    const item = (0,external_Vue_.reactive)({
      index: props.index,
      indexPath,
      active
    });
    const titleStyle = (0,external_Vue_.computed)(() => {
      if (mode.value !== "horizontal") {
        return {
          color: textColor.value
        };
      }
      return {
        borderBottomColor: active.value ? rootMenu.props.activeTextColor ? activeTextColor.value : "" : "transparent",
        color: active.value ? activeTextColor.value : textColor.value
      };
    });
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = props.showTimeout) => {
      var _a;
      if (event.type === "focus") {
        return;
      }
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = (0,shared/* useTimeoutFn */.eM)(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a, _b;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = (0,shared/* useTimeoutFn */.eM)(() => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value), props.hideTimeout));
      if (appendToBody.value && deepDispatch) {
        if (((_a = instance.parent) == null ? void 0 : _a.type.name) === "ElSubMenu") {
          (_b = subMenu.handleMouseleave) == null ? void 0 : _b.call(subMenu, true);
        }
      }
    };
    (0,external_Vue_.watch)(() => rootMenu.props.collapse, (value) => handleCollapseToggle(Boolean(value)));
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      (0,external_Vue_.provide)(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    (0,external_Vue_.onMounted)(() => {
      rootMenu.addSubMenu(item);
      subMenu.addSubMenu(item);
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeSubMenu(item);
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        (0,external_Vue_.h)(icon/* ElIcon */.gn, {
          class: nsSubMenu.e("icon-arrow")
        }, { default: () => (0,external_Vue_.h)(subMenuTitleIcon.value) })
      ];
      const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
      const child = rootMenu.isMenuPopup ? (0,external_Vue_.h)(tooltip/* ElTooltip */.Q0, {
        ref: vPopper,
        visible: opened.value,
        effect: "light",
        pure: true,
        offset: props.popperOffset,
        showArrow: false,
        persistent: true,
        popperClass: props.popperClass,
        placement: currentPlacement.value,
        teleported: appendToBody.value,
        fallbackPlacements: fallbackPlacements.value,
        transition: menuTransitionName.value,
        gpuAcceleration: false
      }, {
        content: () => {
          var _a2;
          return (0,external_Vue_.h)("div", {
            class: [
              nsMenu.m(mode.value),
              nsMenu.m("popup-container"),
              props.popperClass
            ],
            onMouseenter: (evt) => handleMouseenter(evt, 100),
            onMouseleave: () => handleMouseleave(true),
            onFocus: (evt) => handleMouseenter(evt, 100)
          }, [
            (0,external_Vue_.h)("ul", {
              class: [
                nsMenu.b(),
                nsMenu.m("popup"),
                nsMenu.m(`popup-${currentPlacement.value}`)
              ],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)])
          ]);
        },
        default: () => (0,external_Vue_.h)("div", {
          class: nsSubMenu.e("title"),
          style: [
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          onClick: handleClick
        }, titleTag)
      }) : (0,external_Vue_.h)(external_Vue_.Fragment, {}, [
        (0,external_Vue_.h)("div", {
          class: nsSubMenu.e("title"),
          style: [
            titleStyle.value,
            { backgroundColor: backgroundColor.value }
          ],
          ref: verticalTitleRef,
          onClick: handleClick
        }, titleTag),
        (0,external_Vue_.h)(_CollapseTransition, {}, {
          default: () => {
            var _a2;
            return (0,external_Vue_.withDirectives)((0,external_Vue_.h)("ul", {
              role: "menu",
              class: [nsMenu.b(), nsMenu.m("inline")],
              style: ulStyle.value
            }, [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]), [[external_Vue_.vShow, opened.value]]);
          }
        })
      ]);
      return (0,external_Vue_.h)("li", {
        class: [
          nsSubMenu.b(),
          nsSubMenu.is("active", active.value),
          nsSubMenu.is("opened", opened.value),
          nsSubMenu.is("disabled", props.disabled)
        ],
        role: "menuitem",
        ariaHaspopup: true,
        ariaExpanded: opened.value,
        onMouseenter: handleMouseenter,
        onMouseleave: () => handleMouseleave(true),
        onFocus: handleMouseenter
      }, [child]);
    };
  }
});


//# sourceMappingURL=sub-menu.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/typescript.mjs
const mutable = (val) => val;


//# sourceMappingURL=typescript.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(7084);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/menu.mjs















const menuProps = (0,runtime/* buildProps */.o8)({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: (0,runtime/* definePropType */.Cq)(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => Array.isArray(indexPath) && indexPath.every((path) => (0,shared_esm_bundler/* isString */.HD)(path));
const menuEmits = {
  close: (index, indexPath) => (0,shared_esm_bundler/* isString */.HD)(index) && checkIndexPath(indexPath),
  open: (index, indexPath) => (0,shared_esm_bundler/* isString */.HD)(index) && checkIndexPath(indexPath),
  select: (index, indexPath, item, routerResult) => (0,shared_esm_bundler/* isString */.HD)(index) && checkIndexPath(indexPath) && (0,shared_esm_bundler/* isObject */.Kn)(item) && (routerResult === void 0 || routerResult instanceof Promise)
};
var menu_Menu = (0,external_Vue_.defineComponent)({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = (0,external_Vue_.getCurrentInstance)();
    const router = instance.appContext.config.globalProperties.$router;
    const menu = (0,external_Vue_.ref)();
    const nsMenu = (0,use_namespace/* useNamespace */.s)("menu");
    const nsSubMenu = (0,use_namespace/* useNamespace */.s)("sub-menu");
    const sliceIndex = (0,external_Vue_.ref)(-1);
    const openedMenus = (0,external_Vue_.ref)(props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []);
    const activeIndex = (0,external_Vue_.ref)(props.defaultActive);
    const items = (0,external_Vue_.ref)({});
    const subMenus = (0,external_Vue_.ref)({});
    const isMenuPopup = (0,external_Vue_.computed)(() => {
      return props.mode === "horizontal" || props.mode === "vertical" && props.collapse;
    });
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index) => {
        const subMenu = subMenus.value[index];
        subMenu && openMenu(index, subMenu.indexPath);
      });
    };
    const openMenu = (index, indexPath) => {
      if (openedMenus.value.includes(index))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter((index2) => indexPath.includes(index2));
      }
      openedMenus.value.push(index);
      emit("open", index, indexPath);
    };
    const closeMenu = (index, indexPath) => {
      const i = openedMenus.value.indexOf(index);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
      emit("close", index, indexPath);
    };
    const handleSubMenuClick = ({
      index,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index);
      if (isOpened) {
        closeMenu(index, indexPath);
      } else {
        openMenu(index, indexPath);
      }
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index, indexPath } = menuItem;
      if (index === void 0 || indexPath === void 0)
        return;
      if (props.router && router) {
        const route = menuItem.route || index;
        const routerResult = router.push(route).then((res) => {
          if (!res)
            activeIndex.value = index;
          return res;
        });
        emit("select", index, indexPath, { index, indexPath, route }, routerResult);
      } else {
        activeIndex.value = index;
        emit("select", index, indexPath, { index, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      if (item) {
        activeIndex.value = item.index;
      } else {
        activeIndex.value = val;
      }
    };
    const calcSliceIndex = () => {
      var _a;
      const items2 = Array.from((_a = menu.value.childNodes) != null ? _a : []).filter((item) => item.nodeName !== "#text" || item.nodeValue);
      const moreItemWidth = 64;
      const paddingLeft = Number.parseInt(getComputedStyle(menu.value).paddingLeft, 10);
      const paddingRight = Number.parseInt(getComputedStyle(menu.value).paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index) => {
        calcWidth += item.offsetWidth || 0;
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const debounce = (fn, wait = 33.34) => {
      let timmer;
      return () => {
        timmer && clearTimeout(timmer);
        timmer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      const callback = () => {
        sliceIndex.value = -1;
        (0,external_Vue_.nextTick)(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce(callback)();
      isFirstTimeRender = false;
    };
    (0,external_Vue_.watch)(() => props.defaultActive, (currentActive) => {
      if (!items.value[currentActive]) {
        activeIndex.value = "";
      }
      updateActiveIndex(currentActive);
    });
    (0,external_Vue_.watch)(() => props.collapse, (value) => {
      if (value)
        openedMenus.value = [];
    });
    (0,external_Vue_.watch)(items.value, initMenu);
    let resizeStopper;
    (0,external_Vue_.watchEffect)(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = (0,core/* useResizeObserver */.yU7)(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      (0,external_Vue_.provide)("rootMenu", (0,external_Vue_.reactive)({
        props,
        openedMenus,
        items,
        subMenus,
        activeIndex,
        isMenuPopup,
        addMenuItem,
        removeMenuItem,
        addSubMenu,
        removeSubMenu,
        openMenu,
        closeMenu,
        handleMenuItemClick,
        handleSubMenuClick
      }));
      (0,external_Vue_.provide)(`subMenu:${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild: (0,external_Vue_.ref)(false),
        level: 0
      });
    }
    (0,external_Vue_.onMounted)(() => {
      if (props.mode === "horizontal") {
        new Menu(instance.vnode.el, nsMenu.namespace.value);
      }
    });
    {
      const open = (index) => {
        const { indexPath } = subMenus.value[index];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close: closeMenu,
        handleResize
      });
    }
    const flattedChildren = (children) => {
      const vnodes = Array.isArray(children) ? children : [children];
      const result = [];
      vnodes.forEach((child) => {
        if (Array.isArray(child.children)) {
          result.push(...flattedChildren(child.children));
        } else {
          result.push(child);
        }
      });
      return result;
    };
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot);
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push((0,external_Vue_.h)(sub_menu_SubMenu, {
            index: "sub-menu-more",
            class: nsSubMenu.e("hide-arrow")
          }, {
            title: () => (0,external_Vue_.h)(icon/* ElIcon */.gn, {
              class: nsSubMenu.e("icon-more")
            }, { default: () => (0,external_Vue_.h)(dist/* More */.Tkc) }),
            default: () => slotMore
          }));
        }
      }
      const ulStyle = useMenuCssVar(props, 0);
      const vMenu = (0,external_Vue_.h)("ul", {
        key: String(props.collapse),
        role: "menubar",
        ref: menu,
        style: ulStyle.value,
        class: {
          [nsMenu.b()]: true,
          [nsMenu.m(props.mode)]: true,
          [nsMenu.m("collapse")]: props.collapse
        }
      }, [...slot, ...vShowMore]);
      if (props.collapseTransition && props.mode === "vertical") {
        return (0,external_Vue_.h)(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});


//# sourceMappingURL=menu.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/menu-item.mjs




const menuItemProps = (0,runtime/* buildProps */.o8)({
  index: {
    type: (0,runtime/* definePropType */.Cq)([String, null]),
    default: null
  },
  route: {
    type: (0,runtime/* definePropType */.Cq)([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => (0,shared_esm_bundler/* isString */.HD)(item.index) && Array.isArray(item.indexPath)
};


//# sourceMappingURL=menu-item.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/popper.mjs
var popper = __webpack_require__(9184);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/menu-item2.mjs












const menu_item2_COMPONENT_NAME = "ElMenuItem";
const menu_item2_sfc_main = (0,external_Vue_.defineComponent)({
  name: menu_item2_COMPONENT_NAME,
  components: {
    ElTooltip: tooltip/* ElTooltip */.Q0
  },
  props: menuItemProps,
  emits: menuItemEmits,
  setup(props, { emit }) {
    const instance = (0,external_Vue_.getCurrentInstance)();
    const rootMenu = (0,external_Vue_.inject)("rootMenu");
    const nsMenu = (0,use_namespace/* useNamespace */.s)("menu");
    const nsMenuItem = (0,use_namespace/* useNamespace */.s)("menu-item");
    if (!rootMenu)
      (0,error/* throwError */._)(menu_item2_COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, (0,external_Vue_.toRef)(props, "index"));
    const subMenu = (0,external_Vue_.inject)(`subMenu:${parentMenu.value.uid}`);
    if (!subMenu)
      (0,error/* throwError */._)(menu_item2_COMPONENT_NAME, "can not inject sub menu");
    const active = (0,external_Vue_.computed)(() => props.index === rootMenu.activeIndex);
    const item = (0,external_Vue_.reactive)({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    (0,external_Vue_.onMounted)(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    return {
      Effect: popper/* Effect */.Q,
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    };
  }
});
function menu_item2_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip = (0,external_Vue_.resolveComponent)("el-tooltip");
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("li", {
    class: (0,external_Vue_.normalizeClass)([
      _ctx.nsMenuItem.b(),
      _ctx.nsMenuItem.is("active", _ctx.active),
      _ctx.nsMenuItem.is("disabled", _ctx.disabled)
    ]),
    role: "menuitem",
    tabindex: "-1",
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.parentMenu.type.name === "ElMenu" && _ctx.rootMenu.props.collapse && _ctx.$slots.title ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_tooltip, {
      key: 0,
      effect: _ctx.Effect.DARK,
      placement: "right",
      "fallback-placements": ["left"],
      persistent: ""
    }, {
      content: (0,external_Vue_.withCtx)(() => [
        (0,external_Vue_.renderSlot)(_ctx.$slots, "title")
      ]),
      default: (0,external_Vue_.withCtx)(() => [
        (0,external_Vue_.createElementVNode)("div", {
          class: (0,external_Vue_.normalizeClass)(_ctx.nsMenu.be("tooltip", "trigger"))
        }, [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["effect"])) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 1 }, [
      (0,external_Vue_.renderSlot)(_ctx.$slots, "default"),
      (0,external_Vue_.renderSlot)(_ctx.$slots, "title")
    ], 64))
  ], 2);
}
var menu_item2_MenuItem = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(menu_item2_sfc_main, [["render", menu_item2_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);


//# sourceMappingURL=menu-item2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/menu-item-group.mjs
const menuItemGroupProps = {
  title: String
};


//# sourceMappingURL=menu-item-group.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/src/menu-item-group2.mjs






const menu_item_group2_COMPONENT_NAME = "ElMenuItemGroup";
const menu_item_group2_sfc_main = (0,external_Vue_.defineComponent)({
  name: menu_item_group2_COMPONENT_NAME,
  props: menuItemGroupProps,
  setup() {
    const ns = (0,use_namespace/* useNamespace */.s)("menu-item-group");
    return {
      ns
    };
  }
});
function menu_item_group2_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("li", {
    class: (0,external_Vue_.normalizeClass)(_ctx.ns.b())
  }, [
    (0,external_Vue_.createElementVNode)("div", {
      class: (0,external_Vue_.normalizeClass)(_ctx.ns.e("title"))
    }, [
      !_ctx.$slots.title ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)(external_Vue_.Fragment, { key: 0 }, [
        (0,external_Vue_.createTextVNode)((0,external_Vue_.toDisplayString)(_ctx.title), 1)
      ], 64)) : (0,external_Vue_.renderSlot)(_ctx.$slots, "title", { key: 1 })
    ], 2),
    (0,external_Vue_.createElementVNode)("ul", null, [
      (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
    ])
  ], 2);
}
var MenuItemGroup = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(menu_item_group2_sfc_main, [["render", menu_item_group2_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);


//# sourceMappingURL=menu-item-group2.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/install.mjs
var install = __webpack_require__(5576);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/menu/index.mjs












const ElMenu = (0,install/* withInstall */.nz)(menu_Menu, {
  MenuItem: menu_item2_MenuItem,
  MenuItemGroup: MenuItemGroup,
  SubMenu: sub_menu_SubMenu
});
const ElMenuItem = (0,install/* withNoopInstall */.dp)(menu_item2_MenuItem);
const ElMenuItemGroup = (0,install/* withNoopInstall */.dp)(MenuItemGroup);
const ElSubMenu = (0,install/* withNoopInstall */.dp)(sub_menu_SubMenu);


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 9184:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ Effect),
/* harmony export */   "V": () => (/* binding */ usePopperProps)
/* harmony export */ });
/* harmony import */ var _utils_vue_props_runtime_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2242);



const effects = (/* unused pure expression or super */ null && (["light", "dark"]));
const triggers = (/* unused pure expression or super */ null && (["click", "contextmenu", "hover", "focus"]));
const Effect = {
  LIGHT: "light",
  DARK: "dark"
};
const usePopperProps = (0,_utils_vue_props_runtime_mjs__WEBPACK_IMPORTED_MODULE_0__/* .buildProps */ .o8)({
  role: {
    type: String,
    default: "tooltip"
  }
});


//# sourceMappingURL=popper.mjs.map


/***/ }),

/***/ 1639:
/***/ ((__unused_webpack___webpack_module__, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/base/style/css.mjs + 1 modules
var css = __webpack_require__(1735);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/theme-chalk/el-sub-menu.css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/sub-menu/style/css.mjs


//# sourceMappingURL=css.mjs.map


/***/ }),

/***/ 8336:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Q0": () => (/* binding */ ElTooltip)
});

// UNUSED EXPORTS: TOOLTIP_INJECTION_KEY, default, useTooltipContentProps, useTooltipProps, useTooltipTriggerProps

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/popper.mjs
var popper = __webpack_require__(9184);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/_virtual/plugin-vue_export-helper.mjs
var plugin_vue_export_helper = __webpack_require__(7700);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/tokens/popper.mjs
const POPPER_INJECTION_KEY = Symbol("popper");
const POPPER_CONTENT_INJECTION_KEY = Symbol("popperContent");


//# sourceMappingURL=popper.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/popper2.mjs






const __default__ = {
  name: "ElPopperRoot",
  inheritAttrs: false
};
const _sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...__default__,
  props: popper/* usePopperProps */.V,
  setup(__props, { expose }) {
    const props = __props;
    const triggerRef = (0,external_Vue_.ref)();
    const popperInstanceRef = (0,external_Vue_.ref)();
    const contentRef = (0,external_Vue_.ref)();
    const referenceRef = (0,external_Vue_.ref)();
    const role = (0,external_Vue_.computed)(() => props.role);
    const popperProvides = {
      triggerRef,
      popperInstanceRef,
      contentRef,
      referenceRef,
      role
    };
    expose(popperProvides);
    (0,external_Vue_.provide)(POPPER_INJECTION_KEY, popperProvides);
    return (_ctx, _cache) => {
      return (0,external_Vue_.renderSlot)(_ctx.$slots, "default");
    };
  }
});
var Popper = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);


//# sourceMappingURL=popper2.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/install.mjs
var install = __webpack_require__(5576);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/index.mjs











const ElPopper = (0,install/* withInstall */.nz)(Popper);


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vueuse+core@9.1.1_vue@3.2.37/node_modules/@vueuse/core/index.mjs
var core = __webpack_require__(5503);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-namespace/index.mjs
var use_namespace = __webpack_require__(1201);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/vue/props/runtime.mjs
var runtime = __webpack_require__(2242);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@vueuse+shared@9.1.1_vue@3.2.37/node_modules/@vueuse/shared/index.mjs
var shared = __webpack_require__(5055);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-timeout/index.mjs


function useTimeout() {
  let timeoutHandle;
  const registerTimeout = (fn, delay) => {
    cancelTimeout();
    timeoutHandle = window.setTimeout(fn, delay);
  };
  const cancelTimeout = () => window.clearTimeout(timeoutHandle);
  (0,shared/* tryOnScopeDispose */.IY)(() => cancelTimeout());
  return {
    registerTimeout,
    cancelTimeout
  };
}


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-delayed-toggle/index.mjs





const useDelayedToggleProps = (0,runtime/* buildProps */.o8)({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
});
const useDelayedToggle = ({
  showAfter,
  hideAfter,
  open,
  close
}) => {
  const { registerTimeout } = useTimeout();
  const onOpen = (event) => {
    registerTimeout(() => {
      open(event);
    }, (0,external_Vue_.unref)(showAfter));
  };
  const onClose = (event) => {
    registerTimeout(() => {
      close(event);
    }, (0,external_Vue_.unref)(hideAfter));
  };
  return {
    onOpen,
    onClose
  };
};


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@sxzz+popperjs-es@2.11.7/node_modules/@sxzz/popperjs-es/dist/index.mjs
var dist = __webpack_require__(163);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/content.mjs




const POSITIONING_STRATEGIES = ["fixed", "absolute"];
const usePopperCoreConfigProps = (0,runtime/* buildProps */.o8)({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: (0,runtime/* definePropType */.Cq)(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: dist/* placements */.Ct,
    default: "bottom"
  },
  popperOptions: {
    type: (0,runtime/* definePropType */.Cq)(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: "absolute"
  }
});
const usePopperContentProps = (0,runtime/* buildProps */.o8)({
  ...usePopperCoreConfigProps,
  id: String,
  style: { type: (0,runtime/* definePropType */.Cq)([String, Array, Object]) },
  className: { type: (0,runtime/* definePropType */.Cq)([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false
  },
  trapping: {
    type: Boolean,
    default: false
  },
  popperClass: {
    type: (0,runtime/* definePropType */.Cq)([String, Array, Object])
  },
  popperStyle: {
    type: (0,runtime/* definePropType */.Cq)([String, Array, Object])
  },
  referenceEl: {
    type: (0,runtime/* definePropType */.Cq)(Object)
  },
  triggerTargetEl: {
    type: (0,runtime/* definePropType */.Cq)(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
});
const usePopperContentEmits = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
];


//# sourceMappingURL=content.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/rand.mjs
const generateId = () => Math.floor(Math.random() * 1e4);
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));


//# sourceMappingURL=rand.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-popper-container/index.mjs





let cachedContainer;
const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`;
const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`;
const createContainer = () => {
  const container = document.createElement("div");
  container.id = POPPER_CONTAINER_ID;
  document.body.appendChild(container);
  return container;
};
const usePopperContainer = () => {
  (0,external_Vue_.onBeforeMount)(() => {
    if (!shared/* isClient */.C5)
      return;
    if ( false || !cachedContainer || !document.body.querySelector(POPPER_CONTAINER_SELECTOR)) {
      cachedContainer = createContainer();
    }
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/trigger.mjs



const usePopperTriggerProps = (0,runtime/* buildProps */.o8)({
  virtualRef: {
    type: (0,runtime/* definePropType */.Cq)(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
});


//# sourceMappingURL=trigger.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/constants/aria.mjs
var aria = __webpack_require__(8669);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/tooltip.mjs












const triggers = (/* unused pure expression or super */ null && (["hover", "focus", "click", "contextmenu"]));
const ns = (0,use_namespace/* useNamespace */.s)("tooltip");
const useTooltipContentProps = (0,runtime/* buildProps */.o8)({
  ...useDelayedToggleProps,
  ...usePopperContentProps,
  appendTo: {
    type: (0,runtime/* definePropType */.Cq)([String, Object]),
    default: POPPER_CONTAINER_SELECTOR
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: false
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: (0,runtime/* definePropType */.Cq)(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${ns.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean
  }
});
const useTooltipTriggerProps = (0,runtime/* buildProps */.o8)({
  ...usePopperTriggerProps,
  disabled: Boolean,
  trigger: {
    type: (0,runtime/* definePropType */.Cq)([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: (0,runtime/* definePropType */.Cq)(Array),
    default: () => [aria/* EVENT_CODE.enter */.n.enter, aria/* EVENT_CODE.space */.n.space]
  }
});
const useTooltipProps = (0,runtime/* buildProps */.o8)({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: true
  }
});


//# sourceMappingURL=tooltip.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/tokens.mjs
const TOOLTIP_INJECTION_KEY = Symbol("elTooltip");


//# sourceMappingURL=tokens.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(7084);
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash-es@4.17.21/node_modules/lodash-es/isNil.js
var isNil = __webpack_require__(9330);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/utils.mjs


const buildPopperOptions = (props, arrowProps) => {
  const { placement, strategy, popperOptions } = props;
  const options = {
    placement,
    strategy,
    ...popperOptions,
    modifiers: genModifiers(props)
  };
  attachArrow(options, arrowProps);
  deriveExtraModifiers(options, popperOptions == null ? void 0 : popperOptions.modifiers);
  return options;
};
const unwrapMeasurableEl = ($el) => {
  if (!shared/* isClient */.C5)
    return;
  return (0,core/* unrefElement */.NXq)($el);
};
function genModifiers(options) {
  const { offset, gpuAcceleration, fallbackPlacements } = options;
  return [
    {
      name: "offset",
      options: {
        offset: [0, offset != null ? offset : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: fallbackPlacements != null ? fallbackPlacements : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration,
        adaptive: gpuAcceleration
      }
    }
  ];
}
function attachArrow(options, { arrowEl, arrowOffset }) {
  options.modifiers.push({
    name: "arrow",
    options: {
      element: arrowEl,
      padding: arrowOffset != null ? arrowOffset : 5
    }
  });
}
function deriveExtraModifiers(options, modifiers) {
  if (modifiers) {
    options.modifiers = [...options.modifiers, ...modifiers != null ? modifiers : []];
  }
}


//# sourceMappingURL=utils.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/tokens/form.mjs
var tokens_form = __webpack_require__(1100);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-z-index/index.mjs
var use_z_index = __webpack_require__(1029);
// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/types.mjs
var types = __webpack_require__(1679);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/focus-trap/src/utils.mjs
const obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput)
        return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode())
    nodes.push(walker.currentNode);
  return nodes;
};
const getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container))
      return element;
  }
};
const isHidden = (element, container) => {
  if (false)
    {}
  if (getComputedStyle(element).visibility === "hidden")
    return true;
  while (element) {
    if (container && element === container)
      return false;
    if (getComputedStyle(element).display === "none")
      return true;
    element = element.parentElement;
  }
  return false;
};
const getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
const isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
const tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    element.focus({ preventScroll: true });
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
const createFocusableStack = () => {
  let stack = [];
  const push = (layer) => {
    const currentLayer = stack[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack = removeFromStack(stack, layer);
    stack.unshift(layer);
  };
  const remove = (layer) => {
    var _a, _b;
    stack = removeFromStack(stack, layer);
    (_b = (_a = stack[0]) == null ? void 0 : _a.resume) == null ? void 0 : _b.call(_a);
  };
  return {
    push,
    remove
  };
};
const focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement)
      return;
  }
};
const focusableStack = createFocusableStack();


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/focus-trap/src/tokens.mjs
const FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
const FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
const FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
const ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
const ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
const FOCUS_TRAP_INJECTION_KEY = Symbol("elFocusTrap");


//# sourceMappingURL=tokens.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-escape-keydown/index.mjs





let registeredEscapeHandlers = [];
const cachedHandler = (e) => {
  const event = e;
  if (event.key === aria/* EVENT_CODE.esc */.n.esc) {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
const useEscapeKeydown = (handler) => {
  (0,external_Vue_.onMounted)(() => {
    if (registeredEscapeHandlers.length === 0) {
      document.addEventListener("keydown", cachedHandler);
    }
    if (shared/* isClient */.C5)
      registeredEscapeHandlers.push(handler);
  });
  (0,external_Vue_.onBeforeUnmount)(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (shared/* isClient */.C5)
        document.removeEventListener("keydown", cachedHandler);
    }
  });
};


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/focus-trap/src/focus-trap.mjs












const focus_trap_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElFocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    ON_TRAP_FOCUS_EVT,
    ON_RELEASE_FOCUS_EVT,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(props, { emit }) {
    const forwardRef = (0,external_Vue_.ref)();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) {
        emit("release-requested", event);
      }
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped)
        return;
      if (focusLayer.paused)
        return;
      const { key, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = key === aria/* EVENT_CODE.tab */.n.tab && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            e.preventDefault();
            emit("focusout-prevented");
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            e.preventDefault();
            if (loop)
              tryFocus(first, true);
            emit("focusout-prevented");
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            e.preventDefault();
            if (loop)
              tryFocus(last, true);
            emit("focusout-prevented");
          }
        }
      }
    };
    (0,external_Vue_.provide)(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    (0,external_Vue_.watch)(() => props.focusTrapEl, (focusTrapEl) => {
      if (focusTrapEl) {
        forwardRef.value = focusTrapEl;
      }
    }, { immediate: true });
    (0,external_Vue_.watch)([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e) => {
      emit(ON_TRAP_FOCUS_EVT, e);
    };
    const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (!trapContainer)
        return;
      const target = e.target;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (isFocusedInTrap)
        emit("focusin", e);
      if (focusLayer.paused)
        return;
      if (props.trapped) {
        if (isFocusedInTrap) {
          lastFocusAfterTrapped = target;
        } else {
          tryFocus(lastFocusAfterTrapped, true);
        }
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (focusLayer.paused || !trapContainer)
        return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!(0,isNil/* default */.Z)(relatedTarget) && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              tryFocus(lastFocusAfterTrapped, true);
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap)
          emit("focusout", e);
      }
    };
    async function startTrap() {
      await (0,external_Vue_.nextTick)();
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            (0,external_Vue_.nextTick)(() => {
              let focusStartEl = props.focusStartEl;
              if (!(0,shared_esm_bundler/* isString */.HD)(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) {
                  focusStartEl = "first";
                }
              }
              if (focusStartEl === "first") {
                focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              }
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = (0,external_Vue_.unref)(forwardRef);
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new Event(FOCUS_AFTER_RELEASED, FOCUS_AFTER_TRAPPED_OPTS);
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented) {
          tryFocus(lastFocusBeforeTrapped != null ? lastFocusBeforeTrapped : document.body, true);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, trapOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    (0,external_Vue_.onMounted)(() => {
      if (props.trapped) {
        startTrap();
      }
      (0,external_Vue_.watch)(() => props.trapped, (trapped) => {
        if (trapped) {
          startTrap();
        } else {
          stopTrap();
        }
      });
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      if (props.trapped) {
        stopTrap();
      }
    });
    return {
      onKeydown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_Vue_.renderSlot)(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var ElFocusTrap = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(focus_trap_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);


//# sourceMappingURL=focus-trap.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/content2.mjs


















const content2_default_ = {
  name: "ElPopperContent"
};
const content2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...content2_default_,
  props: usePopperContentProps,
  emits: usePopperContentEmits,
  setup(__props, { expose, emit }) {
    const props = __props;
    const { popperInstanceRef, contentRef, triggerRef, role } = (0,external_Vue_.inject)(POPPER_INJECTION_KEY, void 0);
    const formItemContext = (0,external_Vue_.inject)(tokens_form/* formItemContextKey */.K, void 0);
    const { nextZIndex } = (0,use_z_index/* useZIndex */.C)();
    const ns = (0,use_namespace/* useNamespace */.s)("popper");
    const popperContentRef = (0,external_Vue_.ref)();
    const focusStartRef = (0,external_Vue_.ref)("first");
    const arrowRef = (0,external_Vue_.ref)();
    const arrowOffset = (0,external_Vue_.ref)();
    (0,external_Vue_.provide)(POPPER_CONTENT_INJECTION_KEY, {
      arrowRef,
      arrowOffset
    });
    if (formItemContext && (formItemContext.addInputId || formItemContext.removeInputId)) {
      (0,external_Vue_.provide)(tokens_form/* formItemContextKey */.K, {
        ...formItemContext,
        addInputId: shared_esm_bundler/* NOOP */.dG,
        removeInputId: shared_esm_bundler/* NOOP */.dG
      });
    }
    const contentZIndex = (0,external_Vue_.ref)(props.zIndex || nextZIndex());
    const trapped = (0,external_Vue_.ref)(false);
    let triggerTargetAriaStopWatch = void 0;
    const computedReference = (0,external_Vue_.computed)(() => unwrapMeasurableEl(props.referenceEl) || (0,external_Vue_.unref)(triggerRef));
    const contentStyle = (0,external_Vue_.computed)(() => [{ zIndex: (0,external_Vue_.unref)(contentZIndex) }, props.popperStyle]);
    const contentClass = (0,external_Vue_.computed)(() => [
      ns.b(),
      ns.is("pure", props.pure),
      ns.is(props.effect),
      props.popperClass
    ]);
    const ariaModal = (0,external_Vue_.computed)(() => {
      return role && role.value === "dialog" ? "false" : void 0;
    });
    const createPopperInstance = ({ referenceEl, popperContentEl, arrowEl }) => {
      const options = buildPopperOptions(props, {
        arrowEl,
        arrowOffset: (0,external_Vue_.unref)(arrowOffset)
      });
      return (0,dist/* createPopper */.fi)(referenceEl, popperContentEl, options);
    };
    const updatePopper = (shouldUpdateZIndex = true) => {
      var _a;
      (_a = (0,external_Vue_.unref)(popperInstanceRef)) == null ? void 0 : _a.update();
      shouldUpdateZIndex && (contentZIndex.value = props.zIndex || nextZIndex());
    };
    const togglePopperAlive = () => {
      var _a, _b;
      const monitorable = { name: "eventListeners", enabled: props.visible };
      (_b = (_a = (0,external_Vue_.unref)(popperInstanceRef)) == null ? void 0 : _a.setOptions) == null ? void 0 : _b.call(_a, (options) => ({
        ...options,
        modifiers: [...options.modifiers || [], monitorable]
      }));
      updatePopper(false);
      if (props.visible && props.focusOnShow) {
        trapped.value = true;
      } else if (props.visible === false) {
        trapped.value = false;
      }
    };
    const onFocusAfterTrapped = () => {
      emit("focus");
    };
    const onFocusAfterReleased = () => {
      focusStartRef.value = "first";
      emit("blur");
    };
    const onFocusInTrap = (event) => {
      var _a;
      if (props.visible && !trapped.value) {
        if (event.target) {
          focusStartRef.value = event.target;
        }
        trapped.value = true;
        if (event.relatedTarget) {
          ;
          (_a = event.relatedTarget) == null ? void 0 : _a.focus();
        }
      }
    };
    const onFocusoutPrevented = () => {
      if (!props.trapping) {
        trapped.value = false;
      }
    };
    const onReleaseRequested = () => {
      trapped.value = false;
      emit("close");
    };
    (0,external_Vue_.onMounted)(() => {
      let updateHandle;
      (0,external_Vue_.watch)(computedReference, (referenceEl) => {
        var _a;
        updateHandle == null ? void 0 : updateHandle();
        const popperInstance = (0,external_Vue_.unref)(popperInstanceRef);
        (_a = popperInstance == null ? void 0 : popperInstance.destroy) == null ? void 0 : _a.call(popperInstance);
        if (referenceEl) {
          const popperContentEl = (0,external_Vue_.unref)(popperContentRef);
          contentRef.value = popperContentEl;
          popperInstanceRef.value = createPopperInstance({
            referenceEl,
            popperContentEl,
            arrowEl: (0,external_Vue_.unref)(arrowRef)
          });
          updateHandle = (0,external_Vue_.watch)(() => referenceEl.getBoundingClientRect(), () => updatePopper(), {
            immediate: true
          });
        } else {
          popperInstanceRef.value = void 0;
        }
      }, {
        immediate: true
      });
      (0,external_Vue_.watch)(() => props.triggerTargetEl, (triggerTargetEl, prevTriggerTargetEl) => {
        triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
        triggerTargetAriaStopWatch = void 0;
        const el = (0,external_Vue_.unref)(triggerTargetEl || popperContentRef.value);
        const prevEl = (0,external_Vue_.unref)(prevTriggerTargetEl || popperContentRef.value);
        if ((0,types/* isElement */.kK)(el)) {
          const { ariaLabel, id } = (0,external_Vue_.toRefs)(props);
          triggerTargetAriaStopWatch = (0,external_Vue_.watch)([role, ariaLabel, ariaModal, id], (watches) => {
            ;
            ["role", "aria-label", "aria-modal", "id"].forEach((key, idx) => {
              (0,isNil/* default */.Z)(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if ((0,types/* isElement */.kK)(prevEl)) {
          ;
          ["role", "aria-label", "aria-modal", "id"].forEach((key) => {
            prevEl.removeAttribute(key);
          });
        }
      }, { immediate: true });
      (0,external_Vue_.watch)(() => props.visible, togglePopperAlive, { immediate: true });
      (0,external_Vue_.watch)(() => buildPopperOptions(props, {
        arrowEl: (0,external_Vue_.unref)(arrowRef),
        arrowOffset: (0,external_Vue_.unref)(arrowOffset)
      }), (option) => {
        var _a;
        return (_a = popperInstanceRef.value) == null ? void 0 : _a.setOptions(option);
      });
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      triggerTargetAriaStopWatch == null ? void 0 : triggerTargetAriaStopWatch();
      triggerTargetAriaStopWatch = void 0;
    });
    expose({
      popperContentRef,
      popperInstanceRef,
      updatePopper,
      contentStyle
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("div", {
        ref_key: "popperContentRef",
        ref: popperContentRef,
        style: (0,external_Vue_.normalizeStyle)((0,external_Vue_.unref)(contentStyle)),
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(contentClass)),
        tabindex: "-1",
        onMouseenter: _cache[0] || (_cache[0] = (e) => _ctx.$emit("mouseenter", e)),
        onMouseleave: _cache[1] || (_cache[1] = (e) => _ctx.$emit("mouseleave", e))
      }, [
        (0,external_Vue_.createVNode)((0,external_Vue_.unref)(ElFocusTrap), {
          trapped: trapped.value,
          "trap-on-focus-in": true,
          "focus-trap-el": popperContentRef.value,
          "focus-start-el": focusStartRef.value,
          onFocusAfterTrapped,
          onFocusAfterReleased,
          onFocusin: onFocusInTrap,
          onFocusoutPrevented,
          onReleaseRequested
        }, {
          default: (0,external_Vue_.withCtx)(() => [
            (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
          ]),
          _: 3
        }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
      ], 38);
    };
  }
});
var ElPopperContent = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(content2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);


//# sourceMappingURL=content2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/dom/event.mjs
const composeEventHandlers = (theirsHandler, oursHandler, { checkForDefaultPrevented = true } = {}) => {
  const handleEvent = (event) => {
    const shouldPrevent = theirsHandler == null ? void 0 : theirsHandler(event);
    if (checkForDefaultPrevented === false || !shouldPrevent) {
      return oursHandler == null ? void 0 : oursHandler(event);
    }
  };
  return handleEvent;
};
const whenMouse = (handler) => {
  return (e) => e.pointerType === "mouse" ? handler(e) : void 0;
};


//# sourceMappingURL=event.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/content.mjs










const content_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: ElPopperContent
  },
  inheritAttrs: false,
  props: useTooltipContentProps,
  setup(props) {
    const contentRef = (0,external_Vue_.ref)(null);
    const intermediateOpen = (0,external_Vue_.ref)(false);
    const entering = (0,external_Vue_.ref)(false);
    const leaving = (0,external_Vue_.ref)(false);
    const destroyed = (0,external_Vue_.ref)(false);
    const {
      controlled,
      id,
      open,
      trigger,
      onClose,
      onOpen,
      onShow,
      onHide,
      onBeforeShow,
      onBeforeHide
    } = (0,external_Vue_.inject)(TOOLTIP_INJECTION_KEY, void 0);
    const persistentRef = (0,external_Vue_.computed)(() => {
      if (false) {}
      return props.persistent;
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      destroyed.value = true;
    });
    const shouldRender = (0,external_Vue_.computed)(() => {
      return (0,external_Vue_.unref)(persistentRef) ? true : (0,external_Vue_.unref)(open);
    });
    const shouldShow = (0,external_Vue_.computed)(() => {
      return props.disabled ? false : (0,external_Vue_.unref)(open);
    });
    const contentStyle = (0,external_Vue_.computed)(() => {
      var _a;
      return (_a = props.style) != null ? _a : {};
    });
    const ariaHidden = (0,external_Vue_.computed)(() => !(0,external_Vue_.unref)(open));
    const onTransitionLeave = () => {
      onHide();
    };
    const stopWhenControlled = () => {
      if ((0,external_Vue_.unref)(controlled))
        return true;
    };
    const onContentEnter = composeEventHandlers(stopWhenControlled, () => {
      if (props.enterable && (0,external_Vue_.unref)(trigger) === "hover") {
        onOpen();
      }
    });
    const onContentLeave = composeEventHandlers(stopWhenControlled, () => {
      if ((0,external_Vue_.unref)(trigger) === "hover") {
        onClose();
      }
    });
    const onBeforeEnter = () => {
      var _a, _b;
      (_b = (_a = contentRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
      onBeforeShow == null ? void 0 : onBeforeShow();
    };
    const onBeforeLeave = () => {
      onBeforeHide == null ? void 0 : onBeforeHide();
    };
    const onAfterShow = () => {
      onShow();
      stopHandle = (0,core/* onClickOutside */.i9H)((0,external_Vue_.computed)(() => {
        var _a;
        return (_a = contentRef.value) == null ? void 0 : _a.popperContentRef;
      }), () => {
        if ((0,external_Vue_.unref)(controlled))
          return;
        const $trigger = (0,external_Vue_.unref)(trigger);
        if ($trigger !== "hover") {
          onClose();
        }
      });
    };
    const onBlur = () => {
      if (!props.virtualTriggering) {
        onClose();
      }
    };
    let stopHandle;
    (0,external_Vue_.watch)(() => (0,external_Vue_.unref)(open), (val) => {
      if (!val) {
        stopHandle == null ? void 0 : stopHandle();
      }
    }, {
      flush: "post"
    });
    return {
      ariaHidden,
      entering,
      leaving,
      id,
      intermediateOpen,
      contentStyle,
      contentRef,
      destroyed,
      shouldRender,
      shouldShow,
      onClose,
      open,
      onAfterShow,
      onBeforeEnter,
      onBeforeLeave,
      onContentEnter,
      onContentLeave,
      onTransitionLeave,
      onBlur
    };
  }
});
function content_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_content = (0,external_Vue_.resolveComponent)("el-popper-content");
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(external_Vue_.Teleport, {
    disabled: !_ctx.teleported,
    to: _ctx.appendTo
  }, [
    (0,external_Vue_.createVNode)(external_Vue_.Transition, {
      name: _ctx.transition,
      onAfterLeave: _ctx.onTransitionLeave,
      onBeforeEnter: _ctx.onBeforeEnter,
      onAfterEnter: _ctx.onAfterShow,
      onBeforeLeave: _ctx.onBeforeLeave
    }, {
      default: (0,external_Vue_.withCtx)(() => [
        _ctx.shouldRender ? (0,external_Vue_.withDirectives)(((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper_content, (0,external_Vue_.mergeProps)({
          key: 0,
          id: _ctx.id,
          ref: "contentRef"
        }, _ctx.$attrs, {
          "aria-label": _ctx.ariaLabel,
          "aria-hidden": _ctx.ariaHidden,
          "boundaries-padding": _ctx.boundariesPadding,
          "fallback-placements": _ctx.fallbackPlacements,
          "gpu-acceleration": _ctx.gpuAcceleration,
          offset: _ctx.offset,
          placement: _ctx.placement,
          "popper-options": _ctx.popperOptions,
          strategy: _ctx.strategy,
          effect: _ctx.effect,
          enterable: _ctx.enterable,
          pure: _ctx.pure,
          "popper-class": _ctx.popperClass,
          "popper-style": [_ctx.popperStyle, _ctx.contentStyle],
          "reference-el": _ctx.referenceEl,
          "trigger-target-el": _ctx.triggerTargetEl,
          visible: _ctx.shouldShow,
          "z-index": _ctx.zIndex,
          onMouseenter: _ctx.onContentEnter,
          onMouseleave: _ctx.onContentLeave,
          onBlur: _ctx.onBlur,
          onClose: _ctx.onClose
        }), {
          default: (0,external_Vue_.withCtx)(() => [
            (0,external_Vue_.createCommentVNode)(" Workaround bug #6378 "),
            !_ctx.destroyed ? (0,external_Vue_.renderSlot)(_ctx.$slots, "default", { key: 0 }) : (0,external_Vue_.createCommentVNode)("v-if", true)
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [external_Vue_.vShow, _ctx.shouldShow]
        ]) : (0,external_Vue_.createCommentVNode)("v-if", true)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ElTooltipContent = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(content_sfc_main, [["render", content_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);


//# sourceMappingURL=content.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/utils.mjs




const isTriggerType = (trigger, type) => {
  if ((0,shared_esm_bundler/* isArray */.kJ)(trigger)) {
    return trigger.includes(type);
  }
  return trigger === type;
};
const whenTrigger = (trigger, type, handler) => {
  return (e) => {
    isTriggerType((0,external_Vue_.unref)(trigger), type) && handler(e);
  };
};


//# sourceMappingURL=utils.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-forward-ref/index.mjs


const FORWARD_REF_INJECTION_KEY = Symbol("elForwardRef");
const useForwardRef = (forwardRef) => {
  const setForwardRef = (el) => {
    forwardRef.value = el;
  };
  (0,external_Vue_.provide)(FORWARD_REF_INJECTION_KEY, {
    setForwardRef
  });
};
const useForwardRefDirective = (setForwardRef) => {
  return {
    mounted(el) {
      setForwardRef(el);
    },
    updated(el) {
      setForwardRef(el);
    },
    unmounted() {
      setForwardRef(null);
    }
  };
};


//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/utils/error.mjs
var error = __webpack_require__(9361);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/slot/src/only-child.mjs








const NAME = "ElOnlyChild";
const OnlyChild = (0,external_Vue_.defineComponent)({
  name: NAME,
  setup(_, {
    slots,
    attrs
  }) {
    var _a;
    const forwardRefInjection = (0,external_Vue_.inject)(FORWARD_REF_INJECTION_KEY);
    const forwardRefDirective = useForwardRefDirective((_a = forwardRefInjection == null ? void 0 : forwardRefInjection.setForwardRef) != null ? _a : shared_esm_bundler/* NOOP */.dG);
    return () => {
      var _a2;
      const defaultSlot = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, attrs);
      if (!defaultSlot)
        return null;
      if (defaultSlot.length > 1) {
        (0,error/* debugWarn */.N)(NAME, "requires exact only one valid child.");
        return null;
      }
      const firstLegitNode = findFirstLegitChild(defaultSlot);
      if (!firstLegitNode) {
        (0,error/* debugWarn */.N)(NAME, "no valid child node found");
        return null;
      }
      return (0,external_Vue_.withDirectives)((0,external_Vue_.cloneVNode)(firstLegitNode, attrs), [[forwardRefDirective]]);
    };
  }
});
function findFirstLegitChild(node) {
  if (!node)
    return null;
  const children = node;
  for (const child of children) {
    if ((0,shared_esm_bundler/* isObject */.Kn)(child)) {
      switch (child.type) {
        case external_Vue_.Comment:
          continue;
        case external_Vue_.Text:
        case "svg":
          return wrapTextContent(child);
        case external_Vue_.Fragment:
          return findFirstLegitChild(child.children);
        default:
          return child;
      }
    }
    return wrapTextContent(child);
  }
  return null;
}
function wrapTextContent(s) {
  const ns = (0,use_namespace/* useNamespace */.s)("only-child");
  return (0,external_Vue_.createVNode)("span", {
    "class": ns.e("content")
  }, [s]);
}


//# sourceMappingURL=only-child.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/trigger2.mjs














const trigger2_default_ = {
  name: "ElPopperTrigger",
  inheritAttrs: false
};
const trigger2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...trigger2_default_,
  props: usePopperTriggerProps,
  setup(__props, { expose }) {
    const props = __props;
    const { role, triggerRef } = (0,external_Vue_.inject)(POPPER_INJECTION_KEY, void 0);
    useForwardRef(triggerRef);
    const ariaControls = (0,external_Vue_.computed)(() => {
      return ariaHaspopup.value ? props.id : void 0;
    });
    const ariaDescribedby = (0,external_Vue_.computed)(() => {
      if (role && role.value === "tooltip") {
        return props.open && props.id ? props.id : void 0;
      }
      return void 0;
    });
    const ariaHaspopup = (0,external_Vue_.computed)(() => {
      if (role && role.value !== "tooltip") {
        return role.value;
      }
      return void 0;
    });
    const ariaExpanded = (0,external_Vue_.computed)(() => {
      return ariaHaspopup.value ? `${props.open}` : void 0;
    });
    let virtualTriggerAriaStopWatch = void 0;
    (0,external_Vue_.onMounted)(() => {
      (0,external_Vue_.watch)(() => props.virtualRef, (virtualEl) => {
        if (virtualEl) {
          triggerRef.value = (0,core/* unrefElement */.NXq)(virtualEl);
        }
      }, {
        immediate: true
      });
      (0,external_Vue_.watch)(() => triggerRef.value, (el, prevEl) => {
        virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
        virtualTriggerAriaStopWatch = void 0;
        if ((0,types/* isElement */.kK)(el)) {
          ;
          [
            "onMouseenter",
            "onMouseleave",
            "onClick",
            "onKeydown",
            "onFocus",
            "onBlur",
            "onContextmenu"
          ].forEach((eventName) => {
            var _a;
            const handler = props[eventName];
            if (handler) {
              ;
              el.addEventListener(eventName.slice(2).toLowerCase(), handler);
              (_a = prevEl == null ? void 0 : prevEl.removeEventListener) == null ? void 0 : _a.call(prevEl, eventName.slice(2).toLowerCase(), handler);
            }
          });
          virtualTriggerAriaStopWatch = (0,external_Vue_.watch)([ariaControls, ariaDescribedby, ariaHaspopup, ariaExpanded], (watches) => {
            ;
            [
              "aria-controls",
              "aria-describedby",
              "aria-haspopup",
              "aria-expanded"
            ].forEach((key, idx) => {
              (0,isNil/* default */.Z)(watches[idx]) ? el.removeAttribute(key) : el.setAttribute(key, watches[idx]);
            });
          }, { immediate: true });
        }
        if ((0,types/* isElement */.kK)(prevEl)) {
          ;
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((key) => prevEl.removeAttribute(key));
        }
      }, {
        immediate: true
      });
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      virtualTriggerAriaStopWatch == null ? void 0 : virtualTriggerAriaStopWatch();
      virtualTriggerAriaStopWatch = void 0;
    });
    expose({
      triggerRef
    });
    return (_ctx, _cache) => {
      return !_ctx.virtualTriggering ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)((0,external_Vue_.unref)(OnlyChild), (0,external_Vue_.mergeProps)({ key: 0 }, _ctx.$attrs, {
        "aria-controls": (0,external_Vue_.unref)(ariaControls),
        "aria-describedby": (0,external_Vue_.unref)(ariaDescribedby),
        "aria-expanded": (0,external_Vue_.unref)(ariaExpanded),
        "aria-haspopup": (0,external_Vue_.unref)(ariaHaspopup)
      }), {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"])) : (0,external_Vue_.createCommentVNode)("v-if", true);
    };
  }
});
var ElPopperTrigger = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(trigger2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]);


//# sourceMappingURL=trigger2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/trigger.mjs












const trigger_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: ElPopperTrigger
  },
  props: useTooltipTriggerProps,
  setup(props) {
    const ns = (0,use_namespace/* useNamespace */.s)("tooltip");
    const { controlled, id, open, onOpen, onClose, onToggle } = (0,external_Vue_.inject)(TOOLTIP_INJECTION_KEY, void 0);
    const triggerRef = (0,external_Vue_.ref)(null);
    const stopWhenControlledOrDisabled = () => {
      if ((0,external_Vue_.unref)(controlled) || props.disabled) {
        return true;
      }
    };
    const trigger = (0,external_Vue_.toRef)(props, "trigger");
    const onMouseenter = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onOpen));
    const onMouseleave = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "hover", onClose));
    const onClick = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "click", (e) => {
      if (e.button === 0) {
        onToggle(e);
      }
    }));
    const onFocus = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onOpen));
    const onBlur = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "focus", onClose));
    const onContextMenu = composeEventHandlers(stopWhenControlledOrDisabled, whenTrigger(trigger, "contextmenu", (e) => {
      e.preventDefault();
      onToggle(e);
    }));
    const onKeydown = composeEventHandlers(stopWhenControlledOrDisabled, (e) => {
      const { code } = e;
      if (props.triggerKeys.includes(code)) {
        e.preventDefault();
        onToggle(e);
      }
    });
    return {
      onBlur,
      onContextMenu,
      onFocus,
      onMouseenter,
      onMouseleave,
      onClick,
      onKeydown,
      open,
      id,
      triggerRef,
      ns
    };
  }
});
function trigger_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_popper_trigger = (0,external_Vue_.resolveComponent)("el-popper-trigger");
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper_trigger, {
    id: _ctx.id,
    "virtual-ref": _ctx.virtualRef,
    open: _ctx.open,
    "virtual-triggering": _ctx.virtualTriggering,
    class: (0,external_Vue_.normalizeClass)(_ctx.ns.e("trigger")),
    onBlur: _ctx.onBlur,
    onClick: _ctx.onClick,
    onContextmenu: _ctx.onContextMenu,
    onFocus: _ctx.onFocus,
    onMouseenter: _ctx.onMouseenter,
    onMouseleave: _ctx.onMouseleave,
    onKeydown: _ctx.onKeydown
  }, {
    default: (0,external_Vue_.withCtx)(() => [
      (0,external_Vue_.renderSlot)(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ElTooltipTrigger = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(trigger_sfc_main, [["render", trigger_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);


//# sourceMappingURL=trigger.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-model-toggle/index.mjs






const _prop = (0,runtime/* buildProp */.l0)({
  type: (0,runtime/* definePropType */.Cq)(Boolean),
  default: null
});
const _event = (0,runtime/* buildProp */.l0)({
  type: (0,runtime/* definePropType */.Cq)(Function)
});
const createModelToggleComposable = (name) => {
  const updateEventKey = `update:${name}`;
  const updateEventKeyRaw = `onUpdate:${name}`;
  const useModelToggleEmits2 = [updateEventKey];
  const useModelToggleProps2 = {
    [name]: _prop,
    [updateEventKeyRaw]: _event
  };
  const useModelToggle2 = ({
    indicator,
    toggleReason,
    shouldHideWhenRouteChanges,
    shouldProceed,
    onShow,
    onHide
  }) => {
    const instance = (0,external_Vue_.getCurrentInstance)();
    const { emit } = instance;
    const props = instance.props;
    const hasUpdateHandler = (0,external_Vue_.computed)(() => (0,shared_esm_bundler/* isFunction */.mf)(props[updateEventKeyRaw]));
    const isModelBindingAbsent = (0,external_Vue_.computed)(() => props[name] === null);
    const doShow = (event) => {
      if (indicator.value === true) {
        return;
      }
      indicator.value = true;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if ((0,shared_esm_bundler/* isFunction */.mf)(onShow)) {
        onShow(event);
      }
    };
    const doHide = (event) => {
      if (indicator.value === false) {
        return;
      }
      indicator.value = false;
      if (toggleReason) {
        toggleReason.value = event;
      }
      if ((0,shared_esm_bundler/* isFunction */.mf)(onHide)) {
        onHide(event);
      }
    };
    const show = (event) => {
      if (props.disabled === true || (0,shared_esm_bundler/* isFunction */.mf)(shouldProceed) && !shouldProceed())
        return;
      const shouldEmit = hasUpdateHandler.value && shared/* isClient */.C5;
      if (shouldEmit) {
        emit(updateEventKey, true);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doShow(event);
      }
    };
    const hide = (event) => {
      if (props.disabled === true || !shared/* isClient */.C5)
        return;
      const shouldEmit = hasUpdateHandler.value && shared/* isClient */.C5;
      if (shouldEmit) {
        emit(updateEventKey, false);
      }
      if (isModelBindingAbsent.value || !shouldEmit) {
        doHide(event);
      }
    };
    const onChange = (val) => {
      if (!(0,shared/* isBoolean */.jn)(val))
        return;
      if (props.disabled && val) {
        if (hasUpdateHandler.value) {
          emit(updateEventKey, false);
        }
      } else if (indicator.value !== val) {
        if (val) {
          doShow();
        } else {
          doHide();
        }
      }
    };
    const toggle = () => {
      if (indicator.value) {
        hide();
      } else {
        show();
      }
    };
    (0,external_Vue_.watch)(() => props[name], onChange);
    if (shouldHideWhenRouteChanges && instance.appContext.config.globalProperties.$route !== void 0) {
      (0,external_Vue_.watch)(() => ({
        ...instance.proxy.$route
      }), () => {
        if (shouldHideWhenRouteChanges.value && indicator.value) {
          hide();
        }
      });
    }
    (0,external_Vue_.onMounted)(() => {
      onChange(props[name]);
    });
    return {
      hide,
      show,
      toggle,
      hasUpdateHandler
    };
  };
  return {
    useModelToggle: useModelToggle2,
    useModelToggleProps: useModelToggleProps2,
    useModelToggleEmits: useModelToggleEmits2
  };
};
const { useModelToggle, useModelToggleProps, useModelToggleEmits } = createModelToggleComposable("modelValue");


//# sourceMappingURL=index.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/arrow.mjs



const usePopperArrowProps = (0,runtime/* buildProps */.o8)({
  arrowOffset: {
    type: Number,
    default: 5
  }
});


//# sourceMappingURL=arrow.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/popper/src/arrow2.mjs








const arrow2_default_ = {
  name: "ElPopperArrow",
  inheritAttrs: false
};
const arrow2_sfc_main = /* @__PURE__ */ (0,external_Vue_.defineComponent)({
  ...arrow2_default_,
  props: usePopperArrowProps,
  setup(__props, { expose }) {
    const props = __props;
    const ns = (0,use_namespace/* useNamespace */.s)("popper");
    const { arrowOffset, arrowRef } = (0,external_Vue_.inject)(POPPER_CONTENT_INJECTION_KEY, void 0);
    (0,external_Vue_.watch)(() => props.arrowOffset, (val) => {
      arrowOffset.value = val;
    });
    (0,external_Vue_.onBeforeUnmount)(() => {
      arrowRef.value = void 0;
    });
    expose({
      arrowRef
    });
    return (_ctx, _cache) => {
      return (0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
        ref_key: "arrowRef",
        ref: arrowRef,
        class: (0,external_Vue_.normalizeClass)((0,external_Vue_.unref)(ns).e("arrow")),
        "data-popper-arrow": ""
      }, null, 2);
    };
  }
});
var ElPopperArrow = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(arrow2_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);


//# sourceMappingURL=arrow2.mjs.map

// EXTERNAL MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-id/index.mjs
var use_id = __webpack_require__(8504);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/src/tooltip2.mjs




















const { useModelToggleProps: tooltip2_useModelToggleProps, useModelToggle: tooltip2_useModelToggle, useModelToggleEmits: tooltip2_useModelToggleEmits } = createModelToggleComposable("visible");
const tooltip2_sfc_main = (0,external_Vue_.defineComponent)({
  name: "ElTooltip",
  components: {
    ElPopper: ElPopper,
    ElPopperArrow: ElPopperArrow,
    ElTooltipContent: ElTooltipContent,
    ElTooltipTrigger: ElTooltipTrigger
  },
  props: {
    ...popper/* usePopperProps */.V,
    ...tooltip2_useModelToggleProps,
    ...useTooltipContentProps,
    ...useTooltipTriggerProps,
    ...usePopperArrowProps,
    ...useTooltipProps
  },
  emits: [
    ...tooltip2_useModelToggleEmits,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(props, { emit }) {
    usePopperContainer();
    const compatShowAfter = (0,external_Vue_.computed)(() => {
      if (!(0,types/* isUndefined */.o8)(props.openDelay)) {
        (0,error/* debugWarn */.N)("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead");
      }
      return props.openDelay || props.showAfter;
    });
    const compatShowArrow = (0,external_Vue_.computed)(() => {
      if (!(0,types/* isUndefined */.o8)(props.visibleArrow)) {
        (0,error/* debugWarn */.N)("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead");
      }
      return (0,shared/* isBoolean */.jn)(props.visibleArrow) ? props.visibleArrow : props.showArrow;
    });
    const id = (0,use_id/* useId */.M)();
    const popperRef = (0,external_Vue_.ref)(null);
    const contentRef = (0,external_Vue_.ref)(null);
    const updatePopper = () => {
      var _a;
      const popperComponent = (0,external_Vue_.unref)(popperRef);
      if (popperComponent) {
        (_a = popperComponent.popperInstanceRef) == null ? void 0 : _a.update();
      }
    };
    const open = (0,external_Vue_.ref)(false);
    const toggleReason = (0,external_Vue_.ref)(void 0);
    const { show, hide, hasUpdateHandler } = tooltip2_useModelToggle({
      indicator: open,
      toggleReason
    });
    const { onOpen, onClose } = useDelayedToggle({
      showAfter: compatShowAfter,
      hideAfter: (0,external_Vue_.toRef)(props, "hideAfter"),
      open: show,
      close: hide
    });
    const controlled = (0,external_Vue_.computed)(() => (0,shared/* isBoolean */.jn)(props.visible) && !hasUpdateHandler.value);
    (0,external_Vue_.provide)(TOOLTIP_INJECTION_KEY, {
      controlled,
      id,
      open: (0,external_Vue_.readonly)(open),
      trigger: (0,external_Vue_.toRef)(props, "trigger"),
      onOpen: (event) => {
        onOpen(event);
      },
      onClose: (event) => {
        onClose(event);
      },
      onToggle: (event) => {
        if ((0,external_Vue_.unref)(open)) {
          onClose(event);
        } else {
          onOpen(event);
        }
      },
      onShow: () => {
        emit("show", toggleReason.value);
      },
      onHide: () => {
        emit("hide", toggleReason.value);
      },
      onBeforeShow: () => {
        emit("before-show", toggleReason.value);
      },
      onBeforeHide: () => {
        emit("before-hide", toggleReason.value);
      },
      updatePopper
    });
    (0,external_Vue_.watch)(() => props.disabled, (disabled) => {
      if (disabled && open.value) {
        open.value = false;
      }
    });
    const isFocusInsideContent = () => {
      var _a, _b;
      const popperContent = (_b = (_a = contentRef.value) == null ? void 0 : _a.contentRef) == null ? void 0 : _b.popperContentRef;
      return popperContent && popperContent.contains(document.activeElement);
    };
    (0,external_Vue_.onDeactivated)(() => open.value && hide());
    return {
      compatShowAfter,
      compatShowArrow,
      popperRef,
      contentRef,
      open,
      hide,
      isFocusInsideContent,
      updatePopper,
      onOpen,
      onClose
    };
  }
});
const _hoisted_1 = ["innerHTML"];
const _hoisted_2 = { key: 1 };
function tooltip2_sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tooltip_trigger = (0,external_Vue_.resolveComponent)("el-tooltip-trigger");
  const _component_el_popper_arrow = (0,external_Vue_.resolveComponent)("el-popper-arrow");
  const _component_el_tooltip_content = (0,external_Vue_.resolveComponent)("el-tooltip-content");
  const _component_el_popper = (0,external_Vue_.resolveComponent)("el-popper");
  return (0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper, {
    ref: "popperRef",
    role: _ctx.role
  }, {
    default: (0,external_Vue_.withCtx)(() => [
      (0,external_Vue_.createVNode)(_component_el_tooltip_trigger, {
        disabled: _ctx.disabled,
        trigger: _ctx.trigger,
        "trigger-keys": _ctx.triggerKeys,
        "virtual-ref": _ctx.virtualRef,
        "virtual-triggering": _ctx.virtualTriggering
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          _ctx.$slots.default ? (0,external_Vue_.renderSlot)(_ctx.$slots, "default", { key: 0 }) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      (0,external_Vue_.createVNode)(_component_el_tooltip_content, {
        ref: "contentRef",
        "aria-label": _ctx.ariaLabel,
        "boundaries-padding": _ctx.boundariesPadding,
        content: _ctx.content,
        disabled: _ctx.disabled,
        effect: _ctx.effect,
        enterable: _ctx.enterable,
        "fallback-placements": _ctx.fallbackPlacements,
        "hide-after": _ctx.hideAfter,
        "gpu-acceleration": _ctx.gpuAcceleration,
        offset: _ctx.offset,
        persistent: _ctx.persistent,
        "popper-class": _ctx.popperClass,
        "popper-style": _ctx.popperStyle,
        placement: _ctx.placement,
        "popper-options": _ctx.popperOptions,
        pure: _ctx.pure,
        "raw-content": _ctx.rawContent,
        "reference-el": _ctx.referenceEl,
        "trigger-target-el": _ctx.triggerTargetEl,
        "show-after": _ctx.compatShowAfter,
        strategy: _ctx.strategy,
        teleported: _ctx.teleported,
        transition: _ctx.transition,
        "virtual-triggering": _ctx.virtualTriggering,
        "z-index": _ctx.zIndex,
        "append-to": _ctx.appendTo
      }, {
        default: (0,external_Vue_.withCtx)(() => [
          (0,external_Vue_.renderSlot)(_ctx.$slots, "content", {}, () => [
            _ctx.rawContent ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", {
              key: 0,
              innerHTML: _ctx.content
            }, null, 8, _hoisted_1)) : ((0,external_Vue_.openBlock)(), (0,external_Vue_.createElementBlock)("span", _hoisted_2, (0,external_Vue_.toDisplayString)(_ctx.content), 1))
          ]),
          _ctx.compatShowArrow ? ((0,external_Vue_.openBlock)(), (0,external_Vue_.createBlock)(_component_el_popper_arrow, {
            key: 0,
            "arrow-offset": _ctx.arrowOffset
          }, null, 8, ["arrow-offset"])) : (0,external_Vue_.createCommentVNode)("v-if", true)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var Tooltip = /* @__PURE__ */ (0,plugin_vue_export_helper/* default */.Z)(tooltip2_sfc_main, [["render", tooltip2_sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);


//# sourceMappingURL=tooltip2.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/components/tooltip/index.mjs






const ElTooltip = (0,install/* withInstall */.nz)(Tooltip);


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 8669:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ EVENT_CODE)
/* harmony export */ });
const EVENT_CODE = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};


//# sourceMappingURL=aria.mjs.map


/***/ }),

/***/ 861:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* binding */ useGlobalConfig)
});

// UNUSED EXPORTS: provideGlobalConfig

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__(311);
;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/tokens/config-provider.mjs
const config_provider_configProviderContextKey = Symbol();


//# sourceMappingURL=config-provider.mjs.map

;// CONCATENATED MODULE: ../../node_modules/.pnpm/element-plus@2.2.14_vue@3.2.37/node_modules/element-plus/es/hooks/use-global-config/index.mjs







const globalConfig = (0,external_Vue_.ref)();
function useGlobalConfig(key, defaultValue = void 0) {
  const config = (0,external_Vue_.getCurrentInstance)() ? (0,external_Vue_.inject)(config_provider_configProviderContextKey, globalConfig) : globalConfig;
  if (key) {
    return (0,external_Vue_.computed)(() => {
      var _a, _b;
      return (_b = (_a = config.value) == null ? void 0 : _a[key]) != null ? _b : defaultValue;
    });
  } else {
    return config;
  }
}
const provideGlobalConfig = (config, app, global = false) => {
  var _a;
  const inSetup = !!getCurrentInstance();
  const oldConfig = inSetup ? useGlobalConfig() : void 0;
  const provideFn = (_a = app == null ? void 0 : app.provide) != null ? _a : inSetup ? provide : void 0;
  if (!provideFn) {
    debugWarn("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const context = computed(() => {
    const cfg = unref(config);
    if (!(oldConfig == null ? void 0 : oldConfig.value))
      return cfg;
    return mergeConfig(oldConfig.value, cfg);
  });
  provideFn(configProviderContextKey, context);
  if (global || !globalConfig.value) {
    globalConfig.value = context.value;
  }
  return context;
};
const mergeConfig = (a, b) => {
  var _a;
  const keys = [.../* @__PURE__ */ new Set([...keysOf(a), ...keysOf(b)])];
  const obj = {};
  for (const key of keys) {
    obj[key] = (_a = b[key]) != null ? _a : a[key];
  }
  return obj;
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 8504:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useId)
/* harmony export */ });
/* unused harmony export ID_INJECTION_KEY */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5055);
/* harmony import */ var _use_global_config_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(861);
/* harmony import */ var _use_namespace_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1201);
/* harmony import */ var _utils_error_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9361);







const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
};
const ID_INJECTION_KEY = Symbol("elIdInjection");
const useId = (deterministicId) => {
  const idInjection = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(ID_INJECTION_KEY, defaultIdInjection);
  if (!_vueuse_core__WEBPACK_IMPORTED_MODULE_1__/* .isClient */ .C5 && idInjection === defaultIdInjection) {
    (0,_utils_error_mjs__WEBPACK_IMPORTED_MODULE_2__/* .debugWarn */ .N)("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  }
  const namespace = (0,_use_global_config_index_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useGlobalConfig */ .W)("namespace", _use_namespace_index_mjs__WEBPACK_IMPORTED_MODULE_4__/* .defaultNamespace */ .t);
  const idRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(deterministicId) || `${namespace.value}-id-${idInjection.prefix}-${idInjection.current++}`);
  return idRef;
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 1201:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useNamespace),
/* harmony export */   "t": () => (/* binding */ defaultNamespace)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _use_global_config_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(861);



const defaultNamespace = "el";
const statePrefix = "is-";
const _bem = (namespace, block, blockSuffix, element, modifier) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
const useNamespace = (block) => {
  const globalConfig = (0,_use_global_config_index_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalConfig */ .W)("namespace");
  const namespace = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => globalConfig.value || defaultNamespace);
  const b = (blockSuffix = "") => _bem((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(namespace), block, blockSuffix, "", "");
  const e = (element) => element ? _bem((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(namespace), block, "", element, "") : "";
  const m = (modifier) => modifier ? _bem((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(namespace), block, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(namespace), block, blockSuffix, element, "") : "";
  const em = (element, modifier) => element && modifier ? _bem((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(namespace), block, "", element, modifier) : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(namespace), block, blockSuffix, "", modifier) : "";
  const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(namespace), block, blockSuffix, element, modifier) : "";
  const is = (name, ...args) => {
    const state = args.length >= 1 ? args[0] : true;
    return name && state ? `${statePrefix}${name}` : "";
  };
  const cssVar = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarBlock = (object) => {
    const styles = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };
  const cssVarName = (name) => `--${namespace.value}-${name}`;
  const cssVarBlockName = (name) => `--${namespace.value}-${block}-${name}`;
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName
  };
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 1029:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ useZIndex)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var _use_global_config_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(861);



const zIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(0);
const useZIndex = () => {
  const initialZIndex = (0,_use_global_config_index_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalConfig */ .W)("zIndex", 2e3);
  const currentZIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    zIndex.value++;
    return currentZIndex.value;
  };
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ 1100:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ formContextKey),
/* harmony export */   "K": () => (/* binding */ formItemContextKey)
/* harmony export */ });
const formContextKey = Symbol("formContextKey");
const formItemContextKey = Symbol("formItemContextKey");


//# sourceMappingURL=form.mjs.map


/***/ }),

/***/ 7137:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C2": () => (/* binding */ getStyle),
/* harmony export */   "IV": () => (/* binding */ removeClass),
/* harmony export */   "Nn": () => (/* binding */ addUnit),
/* harmony export */   "cn": () => (/* binding */ addClass),
/* harmony export */   "pv": () => (/* binding */ hasClass)
/* harmony export */ });
/* unused harmony exports classNameToArray, removeStyle, setStyle */
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5055);
/* harmony import */ var _error_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9361);
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7084);







const SCOPE = "utils/dom/style";
const classNameToArray = (cls = "") => cls.split(" ").filter((item) => !!item.trim());
const hasClass = (el, cls) => {
  if (!el || !cls)
    return false;
  if (cls.includes(" "))
    throw new Error("className should not contain space.");
  return el.classList.contains(cls);
};
const addClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.add(...classNameToArray(cls));
};
const removeClass = (el, cls) => {
  if (!el || !cls.trim())
    return;
  el.classList.remove(...classNameToArray(cls));
};
const getStyle = (element, styleName) => {
  var _a;
  if (!_vueuse_core__WEBPACK_IMPORTED_MODULE_0__/* .isClient */ .C5 || !element || !styleName)
    return "";
  let key = (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__/* .camelize */ ._A)(styleName);
  if (key === "float")
    key = "cssFloat";
  try {
    const style = element.style[key];
    if (style)
      return style;
    const computed = (_a = document.defaultView) == null ? void 0 : _a.getComputedStyle(element, "");
    return computed ? computed[key] : "";
  } catch (e) {
    return element.style[key];
  }
};
const setStyle = (element, styleName, value) => {
  if (!element || !styleName)
    return;
  if (isObject(styleName)) {
    entriesOf(styleName).forEach(([prop, value2]) => setStyle(element, prop, value2));
  } else {
    const key = camelize(styleName);
    element.style[key] = value;
  }
};
const removeStyle = (element, style) => {
  if (!element || !style)
    return;
  if (isObject(style)) {
    keysOf(style).forEach((prop) => removeStyle(element, prop));
  } else {
    setStyle(element, style, "");
  }
};
function addUnit(value, defaultUnit = "px") {
  if (!value)
    return "";
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__/* .isString */ .HD)(value)) {
    return value;
  } else if ((0,_vueuse_core__WEBPACK_IMPORTED_MODULE_0__/* .isNumber */ .hj)(value)) {
    return `${value}${defaultUnit}`;
  }
  (0,_error_mjs__WEBPACK_IMPORTED_MODULE_2__/* .debugWarn */ .N)(SCOPE, "binding value must be a string or number");
}


//# sourceMappingURL=style.mjs.map


/***/ }),

/***/ 9361:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ debugWarn),
/* harmony export */   "_": () => (/* binding */ throwError)
/* harmony export */ });



class ElementPlusError extends Error {
  constructor(m) {
    super(m);
    this.name = "ElementPlusError";
  }
}
function throwError(scope, m) {
  throw new ElementPlusError(`[${scope}] ${m}`);
}
function debugWarn(scope, message) {
  if (false) {}
}


//# sourceMappingURL=error.mjs.map


/***/ }),

/***/ 1679:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "kK": () => (/* binding */ isElement),
/* harmony export */   "o8": () => (/* binding */ isUndefined)
/* harmony export */ });
/* unused harmony exports isEmpty, isPropAbsent */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);






const isUndefined = (val) => val === void 0;
const isEmpty = (val) => !val && val !== 0 || isArray(val) && val.length === 0 || isObject(val) && !Object.keys(val).length;
const isElement = (e) => {
  if (typeof Element === "undefined")
    return false;
  return e instanceof Element;
};
const isPropAbsent = (prop) => {
  return isNil(prop);
};


//# sourceMappingURL=types.mjs.map


/***/ }),

/***/ 5576:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dp": () => (/* binding */ withNoopInstall),
/* harmony export */   "nz": () => (/* binding */ withInstall)
/* harmony export */ });
/* unused harmony exports withInstallDirective, withInstallFunction */
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7084);


const withInstall = (main, extra) => {
  ;
  main.install = (app) => {
    for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;
      main[key] = comp;
    }
  }
  return main;
};
const withInstallFunction = (fn, name) => {
  ;
  fn.install = (app) => {
    ;
    fn._context = app._context;
    app.config.globalProperties[name] = fn;
  };
  return fn;
};
const withInstallDirective = (directive, name) => {
  ;
  directive.install = (app) => {
    app.directive(name, directive);
  };
  return directive;
};
const withNoopInstall = (component) => {
  ;
  component.install = _vue_shared__WEBPACK_IMPORTED_MODULE_0__/* .NOOP */ .dG;
  return component;
};


//# sourceMappingURL=install.mjs.map


/***/ }),

/***/ 2242:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cq": () => (/* binding */ definePropType),
/* harmony export */   "l0": () => (/* binding */ buildProp),
/* harmony export */   "o8": () => (/* binding */ buildProps)
/* harmony export */ });
/* unused harmony exports epPropKey, isEpProp */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony import */ var lodash_unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9808);
/* harmony import */ var _vue_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7084);






const epPropKey = "__epPropKey";
const definePropType = (val) => val;
const isEpProp = (val) => (0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(val) && !!val[epPropKey];
const buildProp = (prop, key) => {
  if (!(0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__/* .isObject */ .Kn)(prop) || isEpProp(prop))
    return prop;
  const { values, required, default: defaultValue, type, validator } = prop;
  const _validator = values || validator ? (val) => {
    let valid = false;
    let allowedValues = [];
    if (values) {
      allowedValues = Array.from(values);
      if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__/* .hasOwn */ .RI)(prop, "default")) {
        allowedValues.push(defaultValue);
      }
      valid || (valid = allowedValues.includes(val));
    }
    if (validator)
      valid || (valid = validator(val));
    if (!valid && allowedValues.length > 0) {
      const allowValuesText = [...new Set(allowedValues)].map((value) => JSON.stringify(value)).join(", ");
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.warn)(`Invalid prop: validation failed${key ? ` for prop "${key}"` : ""}. Expected one of [${allowValuesText}], got value ${JSON.stringify(val)}.`);
    }
    return valid;
  } : void 0;
  const epProp = {
    type,
    required: !!required,
    validator: _validator,
    [epPropKey]: true
  };
  if ((0,_vue_shared__WEBPACK_IMPORTED_MODULE_1__/* .hasOwn */ .RI)(prop, "default"))
    epProp.default = defaultValue;
  return epProp;
};
const buildProps = (props) => (0,lodash_unified__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(Object.entries(props).map(([key, option]) => [
  key,
  buildProp(option, key)
]));


//# sourceMappingURL=runtime.mjs.map


/***/ }),

/***/ 9808:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */
function fromPairs(pairs) {
  var index = -1,
      length = pairs == null ? 0 : pairs.length,
      result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fromPairs);


/***/ }),

/***/ 9330:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isNil);


/***/ }),

/***/ 5957:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isVue3": () => (/* binding */ isVue3)
/* harmony export */ });
/* unused harmony exports set, del, Vue2, isVue2, install */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "getCurrentInstance")) __webpack_require__.d(__webpack_exports__, { "getCurrentInstance": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "getCurrentScope")) __webpack_require__.d(__webpack_exports__, { "getCurrentScope": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentScope; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "nextTick")) __webpack_require__.d(__webpack_exports__, { "nextTick": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.nextTick; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "onMounted")) __webpack_require__.d(__webpack_exports__, { "onMounted": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.onMounted; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "onScopeDispose")) __webpack_require__.d(__webpack_exports__, { "onScopeDispose": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.onScopeDispose; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "ref")) __webpack_require__.d(__webpack_exports__, { "ref": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.ref; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "unref")) __webpack_require__.d(__webpack_exports__, { "unref": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.unref; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(vue__WEBPACK_IMPORTED_MODULE_0__, "watch")) __webpack_require__.d(__webpack_exports__, { "watch": function() { return vue__WEBPACK_IMPORTED_MODULE_0__.watch; } });


var isVue2 = false
var isVue3 = true
var Vue2 = (/* unused pure expression or super */ null && (undefined))

function install() {}

function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key)
    target.splice(key, 1, val)
    return val
  }
  target[key] = val
  return val
}

function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1)
    return
  }
  delete target[key]
}





/***/ }),

/***/ 6110:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p7": () => (/* binding */ createRouter),
/* harmony export */   "r5": () => (/* binding */ createWebHashHistory),
/* harmony export */   "tv": () => (/* binding */ useRouter)
/* harmony export */ });
/* unused harmony exports NavigationFailureType, RouterLink, RouterView, START_LOCATION, createMemoryHistory, createRouterMatcher, createWebHistory, isNavigationFailure, loadRouteLocation, matchedRouteKey, onBeforeRouteLeave, onBeforeRouteUpdate, parseQuery, routeLocationKey, routerKey, routerViewLocationKey, stringifyQuery, useLink, useRoute, viewDepthKey */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(311);
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */



const isBrowser = typeof window !== 'undefined';

function isESModule(obj) {
    return obj.__esModule || obj[Symbol.toStringTag] === 'Module';
}
const assign = Object.assign;
function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
        const value = params[key];
        newParams[key] = isArray(value)
            ? value.map(fn)
            : fn(value);
    }
    return newParams;
}
const noop = () => { };
/**
 * Typesafe alternative to Array.isArray
 * https://github.com/microsoft/TypeScript/pull/48228
 */
const isArray = Array.isArray;

function warn(msg) {
    // avoid using ...args as it breaks in older Edge builds
    const args = Array.from(arguments).slice(1);
    console.warn.apply(console, ['[Vue Router warn]: ' + msg].concat(args));
}

const TRAILING_SLASH_RE = /\/$/;
const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE, '');
/**
 * Transforms an URI into a normalized history location
 *
 * @param parseQuery
 * @param location - URI to normalize
 * @param currentLocation - current absolute location. Allows resolving relative
 * paths. Must start with `/`. Defaults to `/`
 * @returns a normalized history location
 */
function parseURL(parseQuery, location, currentLocation = '/') {
    let path, query = {}, searchString = '', hash = '';
    // Could use URL and URLSearchParams but IE 11 doesn't support it
    // TODO: move to new URL()
    const hashPos = location.indexOf('#');
    let searchPos = location.indexOf('?');
    // the hash appears before the search, so it's not part of the search string
    if (hashPos < searchPos && hashPos >= 0) {
        searchPos = -1;
    }
    if (searchPos > -1) {
        path = location.slice(0, searchPos);
        searchString = location.slice(searchPos + 1, hashPos > -1 ? hashPos : location.length);
        query = parseQuery(searchString);
    }
    if (hashPos > -1) {
        path = path || location.slice(0, hashPos);
        // keep the # character
        hash = location.slice(hashPos, location.length);
    }
    // no search and no query
    path = resolveRelativePath(path != null ? path : location, currentLocation);
    // empty path means a relative query or hash `?foo=f`, `#thing`
    return {
        fullPath: path + (searchString && '?') + searchString + hash,
        path,
        query,
        hash,
    };
}
/**
 * Stringifies a URL object
 *
 * @param stringifyQuery
 * @param location
 */
function stringifyURL(stringifyQuery, location) {
    const query = location.query ? stringifyQuery(location.query) : '';
    return location.path + (query && '?') + query + (location.hash || '');
}
/**
 * Strips off the base from the beginning of a location.pathname in a non
 * case-sensitive way.
 *
 * @param pathname - location.pathname
 * @param base - base to strip off
 */
function stripBase(pathname, base) {
    // no base or base is not found at the beginning
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
        return pathname;
    return pathname.slice(base.length) || '/';
}
/**
 * Checks if two RouteLocation are equal. This means that both locations are
 * pointing towards the same {@link RouteRecord} and that all `params`, `query`
 * parameters and `hash` are the same
 *
 * @param a - first {@link RouteLocation}
 * @param b - second {@link RouteLocation}
 */
function isSameRouteLocation(stringifyQuery, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return (aLastIndex > -1 &&
        aLastIndex === bLastIndex &&
        isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) &&
        isSameRouteLocationParams(a.params, b.params) &&
        stringifyQuery(a.query) === stringifyQuery(b.query) &&
        a.hash === b.hash);
}
/**
 * Check if two `RouteRecords` are equal. Takes into account aliases: they are
 * considered equal to the `RouteRecord` they are aliasing.
 *
 * @param a - first {@link RouteRecord}
 * @param b - second {@link RouteRecord}
 */
function isSameRouteRecord(a, b) {
    // since the original record has an undefined value for aliasOf
    // but all aliases point to the original record, this will always compare
    // the original record
    return (a.aliasOf || a) === (b.aliasOf || b);
}
function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
        return false;
    for (const key in a) {
        if (!isSameRouteLocationParamsValue(a[key], b[key]))
            return false;
    }
    return true;
}
function isSameRouteLocationParamsValue(a, b) {
    return isArray(a)
        ? isEquivalentArray(a, b)
        : isArray(b)
            ? isEquivalentArray(b, a)
            : a === b;
}
/**
 * Check if two arrays are the same or if an array with one single entry is the
 * same as another primitive value. Used to check query and parameters
 *
 * @param a - array of values
 * @param b - array of values or a single value
 */
function isEquivalentArray(a, b) {
    return isArray(b)
        ? a.length === b.length && a.every((value, i) => value === b[i])
        : a.length === 1 && a[0] === b;
}
/**
 * Resolves a relative path that starts with `.`.
 *
 * @param to - path location we are resolving
 * @param from - currentLocation.path, should start with `/`
 */
function resolveRelativePath(to, from) {
    if (to.startsWith('/'))
        return to;
    if (false) {}
    if (!to)
        return from;
    const fromSegments = from.split('/');
    const toSegments = to.split('/');
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
        segment = toSegments[toPosition];
        // we stay on the same position
        if (segment === '.')
            continue;
        // go up in the from array
        if (segment === '..') {
            // we can't go below zero but we still need to increment toPosition
            if (position > 1)
                position--;
            // continue
        }
        // we reached a non relative path, we stop here
        else
            break;
    }
    return (fromSegments.slice(0, position).join('/') +
        '/' +
        toSegments
            // ensure we use at least the last element in the toSegments
            .slice(toPosition - (toPosition === toSegments.length ? 1 : 0))
            .join('/'));
}

var NavigationType;
(function (NavigationType) {
    NavigationType["pop"] = "pop";
    NavigationType["push"] = "push";
})(NavigationType || (NavigationType = {}));
var NavigationDirection;
(function (NavigationDirection) {
    NavigationDirection["back"] = "back";
    NavigationDirection["forward"] = "forward";
    NavigationDirection["unknown"] = "";
})(NavigationDirection || (NavigationDirection = {}));
/**
 * Starting location for Histories
 */
const START = '';
// Generic utils
/**
 * Normalizes a base by removing any trailing slash and reading the base tag if
 * present.
 *
 * @param base - base to normalize
 */
function normalizeBase(base) {
    if (!base) {
        if (isBrowser) {
            // respect <base> tag
            const baseEl = document.querySelector('base');
            base = (baseEl && baseEl.getAttribute('href')) || '/';
            // strip full URL origin
            base = base.replace(/^\w+:\/\/[^\/]+/, '');
        }
        else {
            base = '/';
        }
    }
    // ensure leading slash when it was removed by the regex above avoid leading
    // slash with hash because the file could be read from the disk like file://
    // and the leading slash would cause problems
    if (base[0] !== '/' && base[0] !== '#')
        base = '/' + base;
    // remove the trailing slash so all other method can just do `base + fullPath`
    // to build an href
    return removeTrailingSlash(base);
}
// remove any character before the hash
const BEFORE_HASH_RE = /^[^#]+#/;
function createHref(base, location) {
    return base.replace(BEFORE_HASH_RE, '#') + location;
}

function getElementPosition(el, offset) {
    const docRect = document.documentElement.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    return {
        behavior: offset.behavior,
        left: elRect.left - docRect.left - (offset.left || 0),
        top: elRect.top - docRect.top - (offset.top || 0),
    };
}
const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset,
});
function scrollToPosition(position) {
    let scrollToOptions;
    if ('el' in position) {
        const positionEl = position.el;
        const isIdSelector = typeof positionEl === 'string' && positionEl.startsWith('#');
        /**
         * `id`s can accept pretty much any characters, including CSS combinators
         * like `>` or `~`. It's still possible to retrieve elements using
         * `document.getElementById('~')` but it needs to be escaped when using
         * `document.querySelector('#\\~')` for it to be valid. The only
         * requirements for `id`s are them to be unique on the page and to not be
         * empty (`id=""`). Because of that, when passing an id selector, it should
         * be properly escaped for it to work with `querySelector`. We could check
         * for the id selector to be simple (no CSS combinators `+ >~`) but that
         * would make things inconsistent since they are valid characters for an
         * `id` but would need to be escaped when using `querySelector`, breaking
         * their usage and ending up in no selector returned. Selectors need to be
         * escaped:
         *
         * - `#1-thing` becomes `#\31 -thing`
         * - `#with~symbols` becomes `#with\\~symbols`
         *
         * - More information about  the topic can be found at
         *   https://mathiasbynens.be/notes/html5-id-class.
         * - Practical example: https://mathiasbynens.be/demo/html5-id
         */
        if (false) {}
        const el = typeof positionEl === 'string'
            ? isIdSelector
                ? document.getElementById(positionEl.slice(1))
                : document.querySelector(positionEl)
            : positionEl;
        if (!el) {
            ( false) &&
                0;
            return;
        }
        scrollToOptions = getElementPosition(el, position);
    }
    else {
        scrollToOptions = position;
    }
    if ('scrollBehavior' in document.documentElement.style)
        window.scrollTo(scrollToOptions);
    else {
        window.scrollTo(scrollToOptions.left != null ? scrollToOptions.left : window.pageXOffset, scrollToOptions.top != null ? scrollToOptions.top : window.pageYOffset);
    }
}
function getScrollKey(path, delta) {
    const position = history.state ? history.state.position - delta : -1;
    return position + path;
}
const scrollPositions = new Map();
function saveScrollPosition(key, scrollPosition) {
    scrollPositions.set(key, scrollPosition);
}
function getSavedScrollPosition(key) {
    const scroll = scrollPositions.get(key);
    // consume it so it's not used again
    scrollPositions.delete(key);
    return scroll;
}
// TODO: RFC about how to save scroll position
/**
 * ScrollBehavior instance used by the router to compute and restore the scroll
 * position when navigating.
 */
// export interface ScrollHandler<ScrollPositionEntry extends HistoryStateValue, ScrollPosition extends ScrollPositionEntry> {
//   // returns a scroll position that can be saved in history
//   compute(): ScrollPositionEntry
//   // can take an extended ScrollPositionEntry
//   scroll(position: ScrollPosition): void
// }
// export const scrollHandler: ScrollHandler<ScrollPosition> = {
//   compute: computeScroll,
//   scroll: scrollToPosition,
// }

let createBaseLocation = () => location.protocol + '//' + location.host;
/**
 * Creates a normalized history location from a window.location object
 * @param location -
 */
function createCurrentLocation(base, location) {
    const { pathname, search, hash } = location;
    // allows hash bases like #, /#, #/, #!, #!/, /#!/, or even /folder#end
    const hashPos = base.indexOf('#');
    if (hashPos > -1) {
        let slicePos = hash.includes(base.slice(hashPos))
            ? base.slice(hashPos).length
            : 1;
        let pathFromHash = hash.slice(slicePos);
        // prepend the starting slash to hash so the url starts with /#
        if (pathFromHash[0] !== '/')
            pathFromHash = '/' + pathFromHash;
        return stripBase(pathFromHash, '');
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
}
function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    // TODO: should it be a stack? a Dict. Check if the popstate listener
    // can trigger twice
    let pauseState = null;
    const popStateHandler = ({ state, }) => {
        const to = createCurrentLocation(base, location);
        const from = currentLocation.value;
        const fromState = historyState.value;
        let delta = 0;
        if (state) {
            currentLocation.value = to;
            historyState.value = state;
            // ignore the popstate and reset the pauseState
            if (pauseState && pauseState === from) {
                pauseState = null;
                return;
            }
            delta = fromState ? state.position - fromState.position : 0;
        }
        else {
            replace(to);
        }
        // console.log({ deltaFromCurrent })
        // Here we could also revert the navigation by calling history.go(-delta)
        // this listener will have to be adapted to not trigger again and to wait for the url
        // to be updated before triggering the listeners. Some kind of validation function would also
        // need to be passed to the listeners so the navigation can be accepted
        // call all listeners
        listeners.forEach(listener => {
            listener(currentLocation.value, from, {
                delta,
                type: NavigationType.pop,
                direction: delta
                    ? delta > 0
                        ? NavigationDirection.forward
                        : NavigationDirection.back
                    : NavigationDirection.unknown,
            });
        });
    };
    function pauseListeners() {
        pauseState = currentLocation.value;
    }
    function listen(callback) {
        // setup the listener and prepare teardown callbacks
        listeners.push(callback);
        const teardown = () => {
            const index = listeners.indexOf(callback);
            if (index > -1)
                listeners.splice(index, 1);
        };
        teardowns.push(teardown);
        return teardown;
    }
    function beforeUnloadListener() {
        const { history } = window;
        if (!history.state)
            return;
        history.replaceState(assign({}, history.state, { scroll: computeScrollPosition() }), '');
    }
    function destroy() {
        for (const teardown of teardowns)
            teardown();
        teardowns = [];
        window.removeEventListener('popstate', popStateHandler);
        window.removeEventListener('beforeunload', beforeUnloadListener);
    }
    // setup the listeners and prepare teardown callbacks
    window.addEventListener('popstate', popStateHandler);
    window.addEventListener('beforeunload', beforeUnloadListener);
    return {
        pauseListeners,
        listen,
        destroy,
    };
}
/**
 * Creates a state object
 */
function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
        back,
        current,
        forward,
        replaced,
        position: window.history.length,
        scroll: computeScroll ? computeScrollPosition() : null,
    };
}
function useHistoryStateNavigation(base) {
    const { history, location } = window;
    // private variables
    const currentLocation = {
        value: createCurrentLocation(base, location),
    };
    const historyState = { value: history.state };
    // build current history entry as this is a fresh navigation
    if (!historyState.value) {
        changeLocation(currentLocation.value, {
            back: null,
            current: currentLocation.value,
            forward: null,
            // the length is off by one, we need to decrease it
            position: history.length - 1,
            replaced: true,
            // don't add a scroll as the user may have an anchor and we want
            // scrollBehavior to be triggered without a saved position
            scroll: null,
        }, true);
    }
    function changeLocation(to, state, replace) {
        /**
         * if a base tag is provided and we are on a normal domain, we have to
         * respect the provided `base` attribute because pushState() will use it and
         * potentially erase anything before the `#` like at
         * https://github.com/vuejs/router/issues/685 where a base of
         * `/folder/#` but a base of `/` would erase the `/folder/` section. If
         * there is no host, the `<base>` tag makes no sense and if there isn't a
         * base tag we can just use everything after the `#`.
         */
        const hashIndex = base.indexOf('#');
        const url = hashIndex > -1
            ? (location.host && document.querySelector('base')
                ? base
                : base.slice(hashIndex)) + to
            : createBaseLocation() + base + to;
        try {
            // BROWSER QUIRK
            // NOTE: Safari throws a SecurityError when calling this function 100 times in 30 seconds
            history[replace ? 'replaceState' : 'pushState'](state, '', url);
            historyState.value = state;
        }
        catch (err) {
            if ((false)) {}
            else {
                console.error(err);
            }
            // Force the navigation, this also resets the call count
            location[replace ? 'replace' : 'assign'](url);
        }
    }
    function replace(to, data) {
        const state = assign({}, history.state, buildState(historyState.value.back, 
        // keep back and forward entries but override current position
        to, historyState.value.forward, true), data, { position: historyState.value.position });
        changeLocation(to, state, true);
        currentLocation.value = to;
    }
    function push(to, data) {
        // Add to current entry the information of where we are going
        // as well as saving the current position
        const currentState = assign({}, 
        // use current history state to gracefully handle a wrong call to
        // history.replaceState
        // https://github.com/vuejs/router/issues/366
        historyState.value, history.state, {
            forward: to,
            scroll: computeScrollPosition(),
        });
        if (false) {}
        changeLocation(currentState.current, currentState, true);
        const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
        changeLocation(to, state, false);
        currentLocation.value = to;
    }
    return {
        location: currentLocation,
        state: historyState,
        push,
        replace,
    };
}
/**
 * Creates an HTML5 history. Most common history for single page applications.
 *
 * @param base -
 */
function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
        if (!triggerListeners)
            historyListeners.pauseListeners();
        history.go(delta);
    }
    const routerHistory = assign({
        // it's overridden right after
        location: '',
        base,
        go,
        createHref: createHref.bind(null, base),
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: () => historyNavigation.location.value,
    });
    Object.defineProperty(routerHistory, 'state', {
        enumerable: true,
        get: () => historyNavigation.state.value,
    });
    return routerHistory;
}

/**
 * Creates a in-memory based history. The main purpose of this history is to handle SSR. It starts in a special location that is nowhere.
 * It's up to the user to replace that location with the starter location by either calling `router.push` or `router.replace`.
 *
 * @param base - Base applied to all urls, defaults to '/'
 * @returns a history object that can be passed to the router constructor
 */
function createMemoryHistory(base = '') {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location) {
        position++;
        if (position === queue.length) {
            // we are at the end, we can simply append a new entry
            queue.push(location);
        }
        else {
            // we are in the middle, we remove everything from here in the queue
            queue.splice(position);
            queue.push(location);
        }
    }
    function triggerListeners(to, from, { direction, delta }) {
        const info = {
            direction,
            delta,
            type: NavigationType.pop,
        };
        for (const callback of listeners) {
            callback(to, from, info);
        }
    }
    const routerHistory = {
        // rewritten by Object.defineProperty
        location: START,
        // TODO: should be kept in queue
        state: {},
        base,
        createHref: createHref.bind(null, base),
        replace(to) {
            // remove current entry and decrement position
            queue.splice(position--, 1);
            setLocation(to);
        },
        push(to, data) {
            setLocation(to);
        },
        listen(callback) {
            listeners.push(callback);
            return () => {
                const index = listeners.indexOf(callback);
                if (index > -1)
                    listeners.splice(index, 1);
            };
        },
        destroy() {
            listeners = [];
            queue = [START];
            position = 0;
        },
        go(delta, shouldTrigger = true) {
            const from = this.location;
            const direction = 
            // we are considering delta === 0 going forward, but in abstract mode
            // using 0 for the delta doesn't make sense like it does in html5 where
            // it reloads the page
            delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
            position = Math.max(0, Math.min(position + delta, queue.length - 1));
            if (shouldTrigger) {
                triggerListeners(this.location, from, {
                    direction,
                    delta,
                });
            }
        },
    };
    Object.defineProperty(routerHistory, 'location', {
        enumerable: true,
        get: () => queue[position],
    });
    return routerHistory;
}

/**
 * Creates a hash history. Useful for web applications with no host (e.g. `file://`) or when configuring a server to
 * handle any URL is not possible.
 *
 * @param base - optional base to provide. Defaults to `location.pathname + location.search` If there is a `<base>` tag
 * in the `head`, its value will be ignored in favor of this parameter **but note it affects all the history.pushState()
 * calls**, meaning that if you use a `<base>` tag, it's `href` value **has to match this parameter** (ignoring anything
 * after the `#`).
 *
 * @example
 * ```js
 * // at https://example.com/folder
 * createWebHashHistory() // gives a url of `https://example.com/folder#`
 * createWebHashHistory('/folder/') // gives a url of `https://example.com/folder/#`
 * // if the `#` is provided in the base, it won't be added by `createWebHashHistory`
 * createWebHashHistory('/folder/#/app/') // gives a url of `https://example.com/folder/#/app/`
 * // you should avoid doing this because it changes the original url and breaks copying urls
 * createWebHashHistory('/other-folder/') // gives a url of `https://example.com/other-folder/#`
 *
 * // at file:///usr/etc/folder/index.html
 * // for locations with no `host`, the base is ignored
 * createWebHashHistory('/iAmIgnored') // gives a url of `file:///usr/etc/folder/index.html#`
 * ```
 */
function createWebHashHistory(base) {
    // Make sure this implementation is fine in terms of encoding, specially for IE11
    // for `file://`, directly use the pathname and ignore the base
    // location.pathname contains an initial `/` even at the root: `https://example.com`
    base = location.host ? base || location.pathname + location.search : '';
    // allow the user to provide a `#` in the middle: `/base/#/app`
    if (!base.includes('#'))
        base += '#';
    if (false) {}
    return createWebHistory(base);
}

function isRouteLocation(route) {
    return typeof route === 'string' || (route && typeof route === 'object');
}
function isRouteName(name) {
    return typeof name === 'string' || typeof name === 'symbol';
}

/**
 * Initial route location where the router is. Can be used in navigation guards
 * to differentiate the initial navigation.
 *
 * @example
 * ```js
 * import { START_LOCATION } from 'vue-router'
 *
 * router.beforeEach((to, from) => {
 *   if (from === START_LOCATION) {
 *     // initial navigation
 *   }
 * })
 * ```
 */
const START_LOCATION_NORMALIZED = {
    path: '/',
    name: undefined,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: undefined,
};

const NavigationFailureSymbol = Symbol(( false) ? 0 : '');
/**
 * Enumeration with all possible types for navigation failures. Can be passed to
 * {@link isNavigationFailure} to check for specific failures.
 */
var NavigationFailureType;
(function (NavigationFailureType) {
    /**
     * An aborted navigation is a navigation that failed because a navigation
     * guard returned `false` or called `next(false)`
     */
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    /**
     * A cancelled navigation is a navigation that failed because a more recent
     * navigation finished started (not necessarily finished).
     */
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    /**
     * A duplicated navigation is a navigation that failed because it was
     * initiated while already being at the exact same location.
     */
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
})(NavigationFailureType || (NavigationFailureType = {}));
// DEV only debug messages
const ErrorTypeMessages = {
    [1 /* ErrorTypes.MATCHER_NOT_FOUND */]({ location, currentLocation }) {
        return `No match for\n ${JSON.stringify(location)}${currentLocation
            ? '\nwhile being at\n' + JSON.stringify(currentLocation)
            : ''}`;
    },
    [2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */]({ from, to, }) {
        return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4 /* ErrorTypes.NAVIGATION_ABORTED */]({ from, to }) {
        return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8 /* ErrorTypes.NAVIGATION_CANCELLED */]({ from, to }) {
        return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16 /* ErrorTypes.NAVIGATION_DUPLICATED */]({ from, to }) {
        return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    },
};
function createRouterError(type, params) {
    // keep full error messages in cjs versions
    if (false) {}
    else {
        return assign(new Error(), {
            type,
            [NavigationFailureSymbol]: true,
        }, params);
    }
}
function isNavigationFailure(error, type) {
    return (error instanceof Error &&
        NavigationFailureSymbol in error &&
        (type == null || !!(error.type & type)));
}
const propertiesToLog = ['params', 'query', 'hash'];
function stringifyRoute(to) {
    if (typeof to === 'string')
        return to;
    if ('path' in to)
        return to.path;
    const location = {};
    for (const key of propertiesToLog) {
        if (key in to)
            location[key] = to[key];
    }
    return JSON.stringify(location, null, 2);
}

// default pattern for a param: non greedy everything but /
const BASE_PARAM_PATTERN = '[^/]+?';
const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true,
};
// Special Regex characters that must be escaped in static tokens
const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
/**
 * Creates a path parser from an array of Segments (a segment is an array of Tokens)
 *
 * @param segments - array of segments returned by tokenizePath
 * @param extraOptions - optional options for the regexp
 * @returns a PathParser
 */
function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    // the amount of scores is the same as the length of segments except for the root segment "/"
    const score = [];
    // the regexp as a string
    let pattern = options.start ? '^' : '';
    // extracted keys
    const keys = [];
    for (const segment of segments) {
        // the root segment needs special treatment
        const segmentScores = segment.length ? [] : [90 /* PathScore.Root */];
        // allow trailing slash
        if (options.strict && !segment.length)
            pattern += '/';
        for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
            const token = segment[tokenIndex];
            // resets the score if we are inside a sub segment /:a-other-:b
            let subSegmentScore = 40 /* PathScore.Segment */ +
                (options.sensitive ? 0.25 /* PathScore.BonusCaseSensitive */ : 0);
            if (token.type === 0 /* TokenType.Static */) {
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    pattern += '/';
                pattern += token.value.replace(REGEX_CHARS_RE, '\\$&');
                subSegmentScore += 40 /* PathScore.Static */;
            }
            else if (token.type === 1 /* TokenType.Param */) {
                const { value, repeatable, optional, regexp } = token;
                keys.push({
                    name: value,
                    repeatable,
                    optional,
                });
                const re = regexp ? regexp : BASE_PARAM_PATTERN;
                // the user provided a custom regexp /:id(\\d+)
                if (re !== BASE_PARAM_PATTERN) {
                    subSegmentScore += 10 /* PathScore.BonusCustomRegExp */;
                    // make sure the regexp is valid before using it
                    try {
                        new RegExp(`(${re})`);
                    }
                    catch (err) {
                        throw new Error(`Invalid custom RegExp for param "${value}" (${re}): ` +
                            err.message);
                    }
                }
                // when we repeat we must take care of the repeating leading slash
                let subPattern = repeatable ? `((?:${re})(?:/(?:${re}))*)` : `(${re})`;
                // prepend the slash if we are starting a new segment
                if (!tokenIndex)
                    subPattern =
                        // avoid an optional / if there are more segments e.g. /:p?-static
                        // or /:p?-:p2
                        optional && segment.length < 2
                            ? `(?:/${subPattern})`
                            : '/' + subPattern;
                if (optional)
                    subPattern += '?';
                pattern += subPattern;
                subSegmentScore += 20 /* PathScore.Dynamic */;
                if (optional)
                    subSegmentScore += -8 /* PathScore.BonusOptional */;
                if (repeatable)
                    subSegmentScore += -20 /* PathScore.BonusRepeatable */;
                if (re === '.*')
                    subSegmentScore += -50 /* PathScore.BonusWildcard */;
            }
            segmentScores.push(subSegmentScore);
        }
        // an empty array like /home/ -> [[{home}], []]
        // if (!segment.length) pattern += '/'
        score.push(segmentScores);
    }
    // only apply the strict bonus to the last score
    if (options.strict && options.end) {
        const i = score.length - 1;
        score[i][score[i].length - 1] += 0.7000000000000001 /* PathScore.BonusStrict */;
    }
    // TODO: dev only warn double trailing slash
    if (!options.strict)
        pattern += '/?';
    if (options.end)
        pattern += '$';
    // allow paths like /dynamic to only match dynamic or dynamic/... but not dynamic_something_else
    else if (options.strict)
        pattern += '(?:/|$)';
    const re = new RegExp(pattern, options.sensitive ? '' : 'i');
    function parse(path) {
        const match = path.match(re);
        const params = {};
        if (!match)
            return null;
        for (let i = 1; i < match.length; i++) {
            const value = match[i] || '';
            const key = keys[i - 1];
            params[key.name] = value && key.repeatable ? value.split('/') : value;
        }
        return params;
    }
    function stringify(params) {
        let path = '';
        // for optional parameters to allow to be empty
        let avoidDuplicatedSlash = false;
        for (const segment of segments) {
            if (!avoidDuplicatedSlash || !path.endsWith('/'))
                path += '/';
            avoidDuplicatedSlash = false;
            for (const token of segment) {
                if (token.type === 0 /* TokenType.Static */) {
                    path += token.value;
                }
                else if (token.type === 1 /* TokenType.Param */) {
                    const { value, repeatable, optional } = token;
                    const param = value in params ? params[value] : '';
                    if (isArray(param) && !repeatable) {
                        throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
                    }
                    const text = isArray(param)
                        ? param.join('/')
                        : param;
                    if (!text) {
                        if (optional) {
                            // if we have more than one optional param like /:a?-static we don't need to care about the optional param
                            if (segment.length < 2) {
                                // remove the last slash as we could be at the end
                                if (path.endsWith('/'))
                                    path = path.slice(0, -1);
                                // do not append a slash on the next iteration
                                else
                                    avoidDuplicatedSlash = true;
                            }
                        }
                        else
                            throw new Error(`Missing required param "${value}"`);
                    }
                    path += text;
                }
            }
        }
        // avoid empty path when we have multiple optional params
        return path || '/';
    }
    return {
        re,
        score,
        keys,
        parse,
        stringify,
    };
}
/**
 * Compares an array of numbers as used in PathParser.score and returns a
 * number. This function can be used to `sort` an array
 *
 * @param a - first array of numbers
 * @param b - second array of numbers
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 * should be sorted first
 */
function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
        const diff = b[i] - a[i];
        // only keep going if diff === 0
        if (diff)
            return diff;
        i++;
    }
    // if the last subsegment was Static, the shorter segments should be sorted first
    // otherwise sort the longest segment first
    if (a.length < b.length) {
        return a.length === 1 && a[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */
            ? -1
            : 1;
    }
    else if (a.length > b.length) {
        return b.length === 1 && b[0] === 40 /* PathScore.Static */ + 40 /* PathScore.Segment */
            ? 1
            : -1;
    }
    return 0;
}
/**
 * Compare function that can be used with `sort` to sort an array of PathParser
 *
 * @param a - first PathParser
 * @param b - second PathParser
 * @returns 0 if both are equal, < 0 if a should be sorted first, > 0 if b
 */
function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
        const comp = compareScoreArray(aScore[i], bScore[i]);
        // do not return if both are equal
        if (comp)
            return comp;
        i++;
    }
    if (Math.abs(bScore.length - aScore.length) === 1) {
        if (isLastScoreNegative(aScore))
            return 1;
        if (isLastScoreNegative(bScore))
            return -1;
    }
    // if a and b share the same score entries but b has more, sort b first
    return bScore.length - aScore.length;
    // this is the ternary version
    // return aScore.length < bScore.length
    //   ? 1
    //   : aScore.length > bScore.length
    //   ? -1
    //   : 0
}
/**
 * This allows detecting splats at the end of a path: /home/:id(.*)*
 *
 * @param score - score to check
 * @returns true if the last entry is negative
 */
function isLastScoreNegative(score) {
    const last = score[score.length - 1];
    return score.length > 0 && last[last.length - 1] < 0;
}

const ROOT_TOKEN = {
    type: 0 /* TokenType.Static */,
    value: '',
};
const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
// After some profiling, the cache seems to be unnecessary because tokenizePath
// (the slowest part of adding a route) is very fast
// const tokenCache = new Map<string, Token[][]>()
function tokenizePath(path) {
    if (!path)
        return [[]];
    if (path === '/')
        return [[ROOT_TOKEN]];
    if (!path.startsWith('/')) {
        throw new Error(( false)
            ? 0
            : `Invalid path "${path}"`);
    }
    // if (tokenCache.has(path)) return tokenCache.get(path)!
    function crash(message) {
        throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0 /* TokenizerState.Static */;
    let previousState = state;
    const tokens = [];
    // the segment will always be valid because we get into the initial state
    // with the leading /
    let segment;
    function finalizeSegment() {
        if (segment)
            tokens.push(segment);
        segment = [];
    }
    // index on the path
    let i = 0;
    // char at index
    let char;
    // buffer of the value read
    let buffer = '';
    // custom regexp for a param
    let customRe = '';
    function consumeBuffer() {
        if (!buffer)
            return;
        if (state === 0 /* TokenizerState.Static */) {
            segment.push({
                type: 0 /* TokenType.Static */,
                value: buffer,
            });
        }
        else if (state === 1 /* TokenizerState.Param */ ||
            state === 2 /* TokenizerState.ParamRegExp */ ||
            state === 3 /* TokenizerState.ParamRegExpEnd */) {
            if (segment.length > 1 && (char === '*' || char === '+'))
                crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
            segment.push({
                type: 1 /* TokenType.Param */,
                value: buffer,
                regexp: customRe,
                repeatable: char === '*' || char === '+',
                optional: char === '*' || char === '?',
            });
        }
        else {
            crash('Invalid state to consume buffer');
        }
        buffer = '';
    }
    function addCharToBuffer() {
        buffer += char;
    }
    while (i < path.length) {
        char = path[i++];
        if (char === '\\' && state !== 2 /* TokenizerState.ParamRegExp */) {
            previousState = state;
            state = 4 /* TokenizerState.EscapeNext */;
            continue;
        }
        switch (state) {
            case 0 /* TokenizerState.Static */:
                if (char === '/') {
                    if (buffer) {
                        consumeBuffer();
                    }
                    finalizeSegment();
                }
                else if (char === ':') {
                    consumeBuffer();
                    state = 1 /* TokenizerState.Param */;
                }
                else {
                    addCharToBuffer();
                }
                break;
            case 4 /* TokenizerState.EscapeNext */:
                addCharToBuffer();
                state = previousState;
                break;
            case 1 /* TokenizerState.Param */:
                if (char === '(') {
                    state = 2 /* TokenizerState.ParamRegExp */;
                }
                else if (VALID_PARAM_RE.test(char)) {
                    addCharToBuffer();
                }
                else {
                    consumeBuffer();
                    state = 0 /* TokenizerState.Static */;
                    // go back one character if we were not modifying
                    if (char !== '*' && char !== '?' && char !== '+')
                        i--;
                }
                break;
            case 2 /* TokenizerState.ParamRegExp */:
                // TODO: is it worth handling nested regexp? like :p(?:prefix_([^/]+)_suffix)
                // it already works by escaping the closing )
                // https://paths.esm.dev/?p=AAMeJbiAwQEcDKbAoAAkP60PG2R6QAvgNaA6AFACM2ABuQBB#
                // is this really something people need since you can also write
                // /prefix_:p()_suffix
                if (char === ')') {
                    // handle the escaped )
                    if (customRe[customRe.length - 1] == '\\')
                        customRe = customRe.slice(0, -1) + char;
                    else
                        state = 3 /* TokenizerState.ParamRegExpEnd */;
                }
                else {
                    customRe += char;
                }
                break;
            case 3 /* TokenizerState.ParamRegExpEnd */:
                // same as finalizing a param
                consumeBuffer();
                state = 0 /* TokenizerState.Static */;
                // go back one character if we were not modifying
                if (char !== '*' && char !== '?' && char !== '+')
                    i--;
                customRe = '';
                break;
            default:
                crash('Unknown state');
                break;
        }
    }
    if (state === 2 /* TokenizerState.ParamRegExp */)
        crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    // tokenCache.set(path, tokens)
    return tokens;
}

function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    // warn against params with the same name
    if ((false)) {}
    const matcher = assign(parser, {
        record,
        parent,
        // these needs to be populated by the parent
        children: [],
        alias: [],
    });
    if (parent) {
        // both are aliases or both are not aliases
        // we don't want to mix them because the order is used when
        // passing originalRecord in Matcher.addRoute
        if (!matcher.record.aliasOf === !parent.record.aliasOf)
            parent.children.push(matcher);
    }
    return matcher;
}

/**
 * Creates a Router Matcher.
 *
 * @internal
 * @param routes - array of initial routes
 * @param globalOptions - global route options
 */
function createRouterMatcher(routes, globalOptions) {
    // normalized ordered array of matchers
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
        return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
        // used later on to remove by name
        const isRootAdd = !originalRecord;
        const mainNormalizedRecord = normalizeRouteRecord(record);
        if ((false)) {}
        // we might be the child of an alias
        mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
        const options = mergeOptions(globalOptions, record);
        // generate an array of records to correctly handle aliases
        const normalizedRecords = [
            mainNormalizedRecord,
        ];
        if ('alias' in record) {
            const aliases = typeof record.alias === 'string' ? [record.alias] : record.alias;
            for (const alias of aliases) {
                normalizedRecords.push(assign({}, mainNormalizedRecord, {
                    // this allows us to hold a copy of the `components` option
                    // so that async components cache is hold on the original record
                    components: originalRecord
                        ? originalRecord.record.components
                        : mainNormalizedRecord.components,
                    path: alias,
                    // we might be the child of an alias
                    aliasOf: originalRecord
                        ? originalRecord.record
                        : mainNormalizedRecord,
                    // the aliases are always of the same kind as the original since they
                    // are defined on the same record
                }));
            }
        }
        let matcher;
        let originalMatcher;
        for (const normalizedRecord of normalizedRecords) {
            const { path } = normalizedRecord;
            // Build up the path for nested routes if the child isn't an absolute
            // route. Only add the / delimiter if the child path isn't empty and if the
            // parent path doesn't have a trailing slash
            if (parent && path[0] !== '/') {
                const parentPath = parent.record.path;
                const connectingSlash = parentPath[parentPath.length - 1] === '/' ? '' : '/';
                normalizedRecord.path =
                    parent.record.path + (path && connectingSlash + path);
            }
            if (false) {}
            // create the object before hand so it can be passed to children
            matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
            if (false)
                {}
            // if we are an alias we must tell the original record that we exist
            // so we can be removed
            if (originalRecord) {
                originalRecord.alias.push(matcher);
                if ((false)) {}
            }
            else {
                // otherwise, the first record is the original and others are aliases
                originalMatcher = originalMatcher || matcher;
                if (originalMatcher !== matcher)
                    originalMatcher.alias.push(matcher);
                // remove the route if named and only for the top record (avoid in nested calls)
                // this works because the original record is the first one
                if (isRootAdd && record.name && !isAliasRecord(matcher))
                    removeRoute(record.name);
            }
            if (mainNormalizedRecord.children) {
                const children = mainNormalizedRecord.children;
                for (let i = 0; i < children.length; i++) {
                    addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
                }
            }
            // if there was no original record, then the first one was not an alias and all
            // other alias (if any) need to reference this record when adding children
            originalRecord = originalRecord || matcher;
            // TODO: add normalized records for more flexibility
            // if (parent && isAliasRecord(originalRecord)) {
            //   parent.children.push(originalRecord)
            // }
            insertMatcher(matcher);
        }
        return originalMatcher
            ? () => {
                // since other matchers are aliases, they should be removed by the original matcher
                removeRoute(originalMatcher);
            }
            : noop;
    }
    function removeRoute(matcherRef) {
        if (isRouteName(matcherRef)) {
            const matcher = matcherMap.get(matcherRef);
            if (matcher) {
                matcherMap.delete(matcherRef);
                matchers.splice(matchers.indexOf(matcher), 1);
                matcher.children.forEach(removeRoute);
                matcher.alias.forEach(removeRoute);
            }
        }
        else {
            const index = matchers.indexOf(matcherRef);
            if (index > -1) {
                matchers.splice(index, 1);
                if (matcherRef.record.name)
                    matcherMap.delete(matcherRef.record.name);
                matcherRef.children.forEach(removeRoute);
                matcherRef.alias.forEach(removeRoute);
            }
        }
    }
    function getRoutes() {
        return matchers;
    }
    function insertMatcher(matcher) {
        let i = 0;
        while (i < matchers.length &&
            comparePathParserScore(matcher, matchers[i]) >= 0 &&
            // Adding children with empty path should still appear before the parent
            // https://github.com/vuejs/router/issues/1124
            (matcher.record.path !== matchers[i].record.path ||
                !isRecordChildOf(matcher, matchers[i])))
            i++;
        matchers.splice(i, 0, matcher);
        // only add the original record to the name map
        if (matcher.record.name && !isAliasRecord(matcher))
            matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location, currentLocation) {
        let matcher;
        let params = {};
        let path;
        let name;
        if ('name' in location && location.name) {
            matcher = matcherMap.get(location.name);
            if (!matcher)
                throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
                    location,
                });
            name = matcher.record.name;
            params = assign(
            // paramsFromLocation is a new object
            paramsFromLocation(currentLocation.params, 
            // only keep params that exist in the resolved location
            // TODO: only keep optional params coming from a parent record
            matcher.keys.filter(k => !k.optional).map(k => k.name)), location.params);
            // throws if cannot be stringified
            path = matcher.stringify(params);
        }
        else if ('path' in location) {
            // no need to resolve the path with the matcher as it was provided
            // this also allows the user to control the encoding
            path = location.path;
            if (false) {}
            matcher = matchers.find(m => m.re.test(path));
            // matcher should have a value after the loop
            if (matcher) {
                // TODO: dev warning of unused params if provided
                // we know the matcher works because we tested the regexp
                params = matcher.parse(path);
                name = matcher.record.name;
            }
            // location is a relative path
        }
        else {
            // match by name or path of current route
            matcher = currentLocation.name
                ? matcherMap.get(currentLocation.name)
                : matchers.find(m => m.re.test(currentLocation.path));
            if (!matcher)
                throw createRouterError(1 /* ErrorTypes.MATCHER_NOT_FOUND */, {
                    location,
                    currentLocation,
                });
            name = matcher.record.name;
            // since we are navigating to the same location, we don't need to pick the
            // params like when `name` is provided
            params = assign({}, currentLocation.params, location.params);
            path = matcher.stringify(params);
        }
        const matched = [];
        let parentMatcher = matcher;
        while (parentMatcher) {
            // reversed order so parents are at the beginning
            matched.unshift(parentMatcher.record);
            parentMatcher = parentMatcher.parent;
        }
        return {
            name,
            path,
            params,
            matched,
            meta: mergeMetaFields(matched),
        };
    }
    // add initial routes
    routes.forEach(route => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
}
function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
        if (key in params)
            newParams[key] = params[key];
    }
    return newParams;
}
/**
 * Normalizes a RouteRecordRaw. Creates a copy
 *
 * @param record
 * @returns the normalized version
 */
function normalizeRouteRecord(record) {
    return {
        path: record.path,
        redirect: record.redirect,
        name: record.name,
        meta: record.meta || {},
        aliasOf: undefined,
        beforeEnter: record.beforeEnter,
        props: normalizeRecordProps(record),
        children: record.children || [],
        instances: {},
        leaveGuards: new Set(),
        updateGuards: new Set(),
        enterCallbacks: {},
        components: 'components' in record
            ? record.components || null
            : record.component && { default: record.component },
    };
}
/**
 * Normalize the optional `props` in a record to always be an object similar to
 * components. Also accept a boolean for components.
 * @param record
 */
function normalizeRecordProps(record) {
    const propsObject = {};
    // props does not exist on redirect records but we can set false directly
    const props = record.props || false;
    if ('component' in record) {
        propsObject.default = props;
    }
    else {
        // NOTE: we could also allow a function to be applied to every component.
        // Would need user feedback for use cases
        for (const name in record.components)
            propsObject[name] = typeof props === 'boolean' ? props : props[name];
    }
    return propsObject;
}
/**
 * Checks if a record or any of its parent is an alias
 * @param record
 */
function isAliasRecord(record) {
    while (record) {
        if (record.record.aliasOf)
            return true;
        record = record.parent;
    }
    return false;
}
/**
 * Merge meta fields of an array of records
 *
 * @param matched - array of matched records
 */
function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
}
function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
        options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
}
function isSameParam(a, b) {
    return (a.name === b.name &&
        a.optional === b.optional &&
        a.repeatable === b.repeatable);
}
/**
 * Check if a path and its alias have the same required params
 *
 * @param a - original record
 * @param b - alias record
 */
function checkSameParams(a, b) {
    for (const key of a.keys) {
        if (!key.optional && !b.keys.find(isSameParam.bind(null, key)))
            return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
    for (const key of b.keys) {
        if (!key.optional && !a.keys.find(isSameParam.bind(null, key)))
            return warn(`Alias "${b.record.path}" and the original record: "${a.record.path}" should have the exact same param named "${key.name}"`);
    }
}
/**
 * A route with a name and a child with an empty path without a name should warn when adding the route
 *
 * @param mainNormalizedRecord - RouteRecordNormalized
 * @param parent - RouteRecordMatcher
 */
function checkChildMissingNameWithEmptyPath(mainNormalizedRecord, parent) {
    if (parent &&
        parent.record.name &&
        !mainNormalizedRecord.name &&
        !mainNormalizedRecord.path) {
        warn(`The route named "${String(parent.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
    }
}
function checkMissingParamsInAbsolutePath(record, parent) {
    for (const key of parent.keys) {
        if (!record.keys.find(isSameParam.bind(null, key)))
            return warn(`Absolute path "${record.record.path}" should have the exact same param named "${key.name}" as its parent "${parent.record.path}".`);
    }
}
function isRecordChildOf(record, parent) {
    return parent.children.some(child => child === record || isRecordChildOf(record, child));
}

/**
 * Encoding Rules ␣ = Space Path: ␣ " < > # ? { } Query: ␣ " < > # & = Hash: ␣ "
 * < > `
 *
 * On top of that, the RFC3986 (https://tools.ietf.org/html/rfc3986#section-2.2)
 * defines some extra characters to be encoded. Most browsers do not encode them
 * in encodeURI https://github.com/whatwg/url/issues/369, so it may be safer to
 * also encode `!'()*`. Leaving unencoded only ASCII alphanumeric(`a-zA-Z0-9`)
 * plus `-._~`. This extra safety should be applied to query by patching the
 * string returned by encodeURIComponent encodeURI also encodes `[\]^`. `\`
 * should be encoded to avoid ambiguity. Browsers (IE, FF, C) transform a `\`
 * into a `/` if directly typed in. The _backtick_ (`````) should also be
 * encoded everywhere because some browsers like FF encode it when directly
 * written while others don't. Safari and IE don't encode ``"<>{}``` in hash.
 */
// const EXTRA_RESERVED_RE = /[!'()*]/g
// const encodeReservedReplacer = (c: string) => '%' + c.charCodeAt(0).toString(16)
const HASH_RE = /#/g; // %23
const AMPERSAND_RE = /&/g; // %26
const SLASH_RE = /\//g; // %2F
const EQUAL_RE = /=/g; // %3D
const IM_RE = /\?/g; // %3F
const PLUS_RE = /\+/g; // %2B
/**
 * NOTE: It's not clear to me if we should encode the + symbol in queries, it
 * seems to be less flexible than not doing so and I can't find out the legacy
 * systems requiring this for regular requests like text/html. In the standard,
 * the encoding of the plus character is only mentioned for
 * application/x-www-form-urlencoded
 * (https://url.spec.whatwg.org/#urlencoded-parsing) and most browsers seems lo
 * leave the plus character as is in queries. To be more flexible, we allow the
 * plus character on the query but it can also be manually encoded by the user.
 *
 * Resources:
 * - https://url.spec.whatwg.org/#urlencoded-parsing
 * - https://stackoverflow.com/questions/1634271/url-encoding-the-space-character-or-20
 */
const ENC_BRACKET_OPEN_RE = /%5B/g; // [
const ENC_BRACKET_CLOSE_RE = /%5D/g; // ]
const ENC_CARET_RE = /%5E/g; // ^
const ENC_BACKTICK_RE = /%60/g; // `
const ENC_CURLY_OPEN_RE = /%7B/g; // {
const ENC_PIPE_RE = /%7C/g; // |
const ENC_CURLY_CLOSE_RE = /%7D/g; // }
const ENC_SPACE_RE = /%20/g; // }
/**
 * Encode characters that need to be encoded on the path, search and hash
 * sections of the URL.
 *
 * @internal
 * @param text - string to encode
 * @returns encoded string
 */
function commonEncode(text) {
    return encodeURI('' + text)
        .replace(ENC_PIPE_RE, '|')
        .replace(ENC_BRACKET_OPEN_RE, '[')
        .replace(ENC_BRACKET_CLOSE_RE, ']');
}
/**
 * Encode characters that need to be encoded on the hash section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeHash(text) {
    return commonEncode(text)
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^');
}
/**
 * Encode characters that need to be encoded query values on the query
 * section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeQueryValue(text) {
    return (commonEncode(text)
        // Encode the space as +, encode the + to differentiate it from the space
        .replace(PLUS_RE, '%2B')
        .replace(ENC_SPACE_RE, '+')
        .replace(HASH_RE, '%23')
        .replace(AMPERSAND_RE, '%26')
        .replace(ENC_BACKTICK_RE, '`')
        .replace(ENC_CURLY_OPEN_RE, '{')
        .replace(ENC_CURLY_CLOSE_RE, '}')
        .replace(ENC_CARET_RE, '^'));
}
/**
 * Like `encodeQueryValue` but also encodes the `=` character.
 *
 * @param text - string to encode
 */
function encodeQueryKey(text) {
    return encodeQueryValue(text).replace(EQUAL_RE, '%3D');
}
/**
 * Encode characters that need to be encoded on the path section of the URL.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodePath(text) {
    return commonEncode(text).replace(HASH_RE, '%23').replace(IM_RE, '%3F');
}
/**
 * Encode characters that need to be encoded on the path section of the URL as a
 * param. This function encodes everything {@link encodePath} does plus the
 * slash (`/`) character. If `text` is `null` or `undefined`, returns an empty
 * string instead.
 *
 * @param text - string to encode
 * @returns encoded string
 */
function encodeParam(text) {
    return text == null ? '' : encodePath(text).replace(SLASH_RE, '%2F');
}
/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
function decode(text) {
    try {
        return decodeURIComponent('' + text);
    }
    catch (err) {
        ( false) && 0;
    }
    return '' + text;
}

/**
 * Transforms a queryString into a {@link LocationQuery} object. Accept both, a
 * version with the leading `?` and without Should work as URLSearchParams

 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
function parseQuery(search) {
    const query = {};
    // avoid creating an object with an empty key and empty value
    // because of split('&')
    if (search === '' || search === '?')
        return query;
    const hasLeadingIM = search[0] === '?';
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split('&');
    for (let i = 0; i < searchParams.length; ++i) {
        // pre decode the + into space
        const searchParam = searchParams[i].replace(PLUS_RE, ' ');
        // allow the = character
        const eqPos = searchParam.indexOf('=');
        const key = decode(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
        const value = eqPos < 0 ? null : decode(searchParam.slice(eqPos + 1));
        if (key in query) {
            // an extra variable for ts types
            let currentValue = query[key];
            if (!isArray(currentValue)) {
                currentValue = query[key] = [currentValue];
            }
            currentValue.push(value);
        }
        else {
            query[key] = value;
        }
    }
    return query;
}
/**
 * Stringifies a {@link LocationQueryRaw} object. Like `URLSearchParams`, it
 * doesn't prepend a `?`
 *
 * @internal
 *
 * @param query - query object to stringify
 * @returns string version of the query without the leading `?`
 */
function stringifyQuery(query) {
    let search = '';
    for (let key in query) {
        const value = query[key];
        key = encodeQueryKey(key);
        if (value == null) {
            // only null adds the value
            if (value !== undefined) {
                search += (search.length ? '&' : '') + key;
            }
            continue;
        }
        // keep null values
        const values = isArray(value)
            ? value.map(v => v && encodeQueryValue(v))
            : [value && encodeQueryValue(value)];
        values.forEach(value => {
            // skip undefined values in arrays as if they were not present
            // smaller code than using filter
            if (value !== undefined) {
                // only append & with non-empty search
                search += (search.length ? '&' : '') + key;
                if (value != null)
                    search += '=' + value;
            }
        });
    }
    return search;
}
/**
 * Transforms a {@link LocationQueryRaw} into a {@link LocationQuery} by casting
 * numbers into strings, removing keys with an undefined value and replacing
 * undefined with null in arrays
 *
 * @param query - query object to normalize
 * @returns a normalized query object
 */
function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
        const value = query[key];
        if (value !== undefined) {
            normalizedQuery[key] = isArray(value)
                ? value.map(v => (v == null ? null : '' + v))
                : value == null
                    ? value
                    : '' + value;
        }
    }
    return normalizedQuery;
}

/**
 * RouteRecord being rendered by the closest ancestor Router View. Used for
 * `onBeforeRouteUpdate` and `onBeforeRouteLeave`. rvlm stands for Router View
 * Location Matched
 *
 * @internal
 */
const matchedRouteKey = Symbol(( false) ? 0 : '');
/**
 * Allows overriding the router view depth to control which component in
 * `matched` is rendered. rvd stands for Router View Depth
 *
 * @internal
 */
const viewDepthKey = Symbol(( false) ? 0 : '');
/**
 * Allows overriding the router instance returned by `useRouter` in tests. r
 * stands for router
 *
 * @internal
 */
const routerKey = Symbol(( false) ? 0 : '');
/**
 * Allows overriding the current route returned by `useRoute` in tests. rl
 * stands for route location
 *
 * @internal
 */
const routeLocationKey = Symbol(( false) ? 0 : '');
/**
 * Allows overriding the current route used by router-view. Internally this is
 * used when the `route` prop is passed.
 *
 * @internal
 */
const routerViewLocationKey = Symbol(( false) ? 0 : '');

/**
 * Create a list of callbacks that can be reset. Used to create before and after navigation guards list
 */
function useCallbacks() {
    let handlers = [];
    function add(handler) {
        handlers.push(handler);
        return () => {
            const i = handlers.indexOf(handler);
            if (i > -1)
                handlers.splice(i, 1);
        };
    }
    function reset() {
        handlers = [];
    }
    return {
        add,
        list: () => handlers,
        reset,
    };
}

function registerGuard(record, name, guard) {
    const removeFromList = () => {
        record[name].delete(guard);
    };
    onUnmounted(removeFromList);
    onDeactivated(removeFromList);
    onActivated(() => {
        record[name].add(guard);
    });
    record[name].add(guard);
}
/**
 * Add a navigation guard that triggers whenever the component for the current
 * location is about to be left. Similar to {@link beforeRouteLeave} but can be
 * used in any component. The guard is removed when the component is unmounted.
 *
 * @param leaveGuard - {@link NavigationGuard}
 */
function onBeforeRouteLeave(leaveGuard) {
    if (false) {}
    const activeRecord = inject(matchedRouteKey, 
    // to avoid warning
    {}).value;
    if (!activeRecord) {
        ( false) &&
            0;
        return;
    }
    registerGuard(activeRecord, 'leaveGuards', leaveGuard);
}
/**
 * Add a navigation guard that triggers whenever the current location is about
 * to be updated. Similar to {@link beforeRouteUpdate} but can be used in any
 * component. The guard is removed when the component is unmounted.
 *
 * @param updateGuard - {@link NavigationGuard}
 */
function onBeforeRouteUpdate(updateGuard) {
    if (false) {}
    const activeRecord = inject(matchedRouteKey, 
    // to avoid warning
    {}).value;
    if (!activeRecord) {
        ( false) &&
            0;
        return;
    }
    registerGuard(activeRecord, 'updateGuards', updateGuard);
}
function guardToPromiseFn(guard, to, from, record, name) {
    // keep a reference to the enterCallbackArray to prevent pushing callbacks if a new navigation took place
    const enterCallbackArray = record &&
        // name is defined if record is because of the function overload
        (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
        const next = (valid) => {
            if (valid === false) {
                reject(createRouterError(4 /* ErrorTypes.NAVIGATION_ABORTED */, {
                    from,
                    to,
                }));
            }
            else if (valid instanceof Error) {
                reject(valid);
            }
            else if (isRouteLocation(valid)) {
                reject(createRouterError(2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */, {
                    from: to,
                    to: valid,
                }));
            }
            else {
                if (enterCallbackArray &&
                    // since enterCallbackArray is truthy, both record and name also are
                    record.enterCallbacks[name] === enterCallbackArray &&
                    typeof valid === 'function') {
                    enterCallbackArray.push(valid);
                }
                resolve();
            }
        };
        // wrapping with Promise.resolve allows it to work with both async and sync guards
        const guardReturn = guard.call(record && record.instances[name], to, from, ( false) ? 0 : next);
        let guardCall = Promise.resolve(guardReturn);
        if (guard.length < 3)
            guardCall = guardCall.then(next);
        if (false) {}
        guardCall.catch(err => reject(err));
    });
}
function canOnlyBeCalledOnce(next, to, from) {
    let called = 0;
    return function () {
        if (called++ === 1)
            warn(`The "next" callback was called more than once in one navigation guard when going from "${from.fullPath}" to "${to.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`);
        // @ts-expect-error: we put it in the original one because it's easier to check
        next._called = true;
        if (called === 1)
            next.apply(null, arguments);
    };
}
function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
        if (false) {}
        for (const name in record.components) {
            let rawComponent = record.components[name];
            if ((false)) {}
            // skip update and leave guards if the route component is not mounted
            if (guardType !== 'beforeRouteEnter' && !record.instances[name])
                continue;
            if (isRouteComponent(rawComponent)) {
                // __vccOpts is added by vue-class-component and contain the regular options
                const options = rawComponent.__vccOpts || rawComponent;
                const guard = options[guardType];
                guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
            }
            else {
                // start requesting the chunk already
                let componentPromise = rawComponent();
                if (false) {}
                guards.push(() => componentPromise.then(resolved => {
                    if (!resolved)
                        return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
                    const resolvedComponent = isESModule(resolved)
                        ? resolved.default
                        : resolved;
                    // replace the function with the resolved component
                    // cannot be null or undefined because we went into the for loop
                    record.components[name] = resolvedComponent;
                    // __vccOpts is added by vue-class-component and contain the regular options
                    const options = resolvedComponent.__vccOpts || resolvedComponent;
                    const guard = options[guardType];
                    return guard && guardToPromiseFn(guard, to, from, record, name)();
                }));
            }
        }
    }
    return guards;
}
/**
 * Allows differentiating lazy components from functional components and vue-class-component
 * @internal
 *
 * @param component
 */
function isRouteComponent(component) {
    return (typeof component === 'object' ||
        'displayName' in component ||
        'props' in component ||
        '__vccOpts' in component);
}
/**
 * Ensures a route is loaded so it can be passed as o prop to `<RouterView>`.
 *
 * @param route - resolved route to load
 */
function loadRouteLocation(route) {
    return route.matched.every(record => record.redirect)
        ? Promise.reject(new Error('Cannot load a route that redirects.'))
        : Promise.all(route.matched.map(record => record.components &&
            Promise.all(Object.keys(record.components).reduce((promises, name) => {
                const rawComponent = record.components[name];
                if (typeof rawComponent === 'function' &&
                    !('displayName' in rawComponent)) {
                    promises.push(rawComponent().then(resolved => {
                        if (!resolved)
                            return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}". Ensure you passed a function that returns a promise.`));
                        const resolvedComponent = isESModule(resolved)
                            ? resolved.default
                            : resolved;
                        // replace the function with the resolved component
                        // cannot be null or undefined because we went into the for loop
                        record.components[name] = resolvedComponent;
                        return;
                    }));
                }
                return promises;
            }, [])))).then(() => route);
}

// TODO: we could allow currentRoute as a prop to expose `isActive` and
// `isExactActive` behavior should go through an RFC
function useLink(props) {
    const router = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(routerKey);
    const currentRoute = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(routeLocationKey);
    const route = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => router.resolve((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(props.to)));
    const activeRecordIndex = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
        const { matched } = route.value;
        const { length } = matched;
        const routeMatched = matched[length - 1];
        const currentMatched = currentRoute.matched;
        if (!routeMatched || !currentMatched.length)
            return -1;
        const index = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
        if (index > -1)
            return index;
        // possible parent record
        const parentRecordPath = getOriginalPath(matched[length - 2]);
        return (
        // we are dealing with nested routes
        length > 1 &&
            // if the parent and matched route have the same path, this link is
            // referring to the empty child. Or we currently are on a different
            // child of the same parent
            getOriginalPath(routeMatched) === parentRecordPath &&
            // avoid comparing the child with its parent
            currentMatched[currentMatched.length - 1].path !== parentRecordPath
            ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2]))
            : index);
    });
    const isActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => activeRecordIndex.value > -1 &&
        includesParams(currentRoute.params, route.value.params));
    const isExactActive = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => activeRecordIndex.value > -1 &&
        activeRecordIndex.value === currentRoute.matched.length - 1 &&
        isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
        if (guardEvent(e)) {
            return router[(0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(props.replace) ? 'replace' : 'push']((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(props.to)
            // avoid uncaught errors are they are logged anyway
            ).catch(noop);
        }
        return Promise.resolve();
    }
    // devtools only
    if (false) {}
    return {
        route,
        href: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => route.value.href),
        isActive,
        isExactActive,
        navigate,
    };
}
const RouterLinkImpl = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
        to: {
            type: [String, Object],
            required: true,
        },
        replace: Boolean,
        activeClass: String,
        // inactiveClass: String,
        exactActiveClass: String,
        custom: Boolean,
        ariaCurrentValue: {
            type: String,
            default: 'page',
        },
    },
    useLink,
    setup(props, { slots }) {
        const link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(useLink(props));
        const { options } = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(routerKey);
        const elClass = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => ({
            [getLinkClass(props.activeClass, options.linkActiveClass, 'router-link-active')]: link.isActive,
            // [getLinkClass(
            //   props.inactiveClass,
            //   options.linkInactiveClass,
            //   'router-link-inactive'
            // )]: !link.isExactActive,
            [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, 'router-link-exact-active')]: link.isExactActive,
        }));
        return () => {
            const children = slots.default && slots.default(link);
            return props.custom
                ? children
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)('a', {
                    'aria-current': link.isExactActive
                        ? props.ariaCurrentValue
                        : null,
                    href: link.href,
                    // this would override user added attrs but Vue will still add
                    // the listener so we end up triggering both
                    onClick: link.navigate,
                    class: elClass.value,
                }, children);
        };
    },
});
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to render a link that triggers a navigation on click.
 */
const RouterLink = RouterLinkImpl;
function guardEvent(e) {
    // don't redirect with control keys
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        return;
    // don't redirect when preventDefault called
    if (e.defaultPrevented)
        return;
    // don't redirect on right click
    if (e.button !== undefined && e.button !== 0)
        return;
    // don't redirect if `target="_blank"`
    // @ts-expect-error getAttribute does exist
    if (e.currentTarget && e.currentTarget.getAttribute) {
        // @ts-expect-error getAttribute exists
        const target = e.currentTarget.getAttribute('target');
        if (/\b_blank\b/i.test(target))
            return;
    }
    // this may be a Weex event which doesn't have this method
    if (e.preventDefault)
        e.preventDefault();
    return true;
}
function includesParams(outer, inner) {
    for (const key in inner) {
        const innerValue = inner[key];
        const outerValue = outer[key];
        if (typeof innerValue === 'string') {
            if (innerValue !== outerValue)
                return false;
        }
        else {
            if (!isArray(outerValue) ||
                outerValue.length !== innerValue.length ||
                innerValue.some((value, i) => value !== outerValue[i]))
                return false;
        }
    }
    return true;
}
/**
 * Get the original path value of a record by following its aliasOf
 * @param record
 */
function getOriginalPath(record) {
    return record ? (record.aliasOf ? record.aliasOf.path : record.path) : '';
}
/**
 * Utility class to get the active class based on defaults.
 * @param propClass
 * @param globalClass
 * @param defaultClass
 */
const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null
    ? propClass
    : globalClass != null
        ? globalClass
        : defaultClass;

const RouterViewImpl = /*#__PURE__*/ (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
    name: 'RouterView',
    // #674 we manually inherit them
    inheritAttrs: false,
    props: {
        name: {
            type: String,
            default: 'default',
        },
        route: Object,
    },
    // Better compat for @vue/compat users
    // https://github.com/vuejs/router/issues/1315
    compatConfig: { MODE: 3 },
    setup(props, { attrs, slots }) {
        ( false) && 0;
        const injectedRoute = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(routerViewLocationKey);
        const routeToDisplay = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.route || injectedRoute.value);
        const injectedDepth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(viewDepthKey, 0);
        // The depth changes based on empty components option, which allows passthrough routes e.g. routes with children
        // that are used to reuse the `path` property
        const depth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
            let initialDepth = (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(injectedDepth);
            const { matched } = routeToDisplay.value;
            let matchedRoute;
            while ((matchedRoute = matched[initialDepth]) &&
                !matchedRoute.components) {
                initialDepth++;
            }
            return initialDepth;
        });
        const matchedRouteRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => routeToDisplay.value.matched[depth.value]);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(viewDepthKey, (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => depth.value + 1));
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(matchedRouteKey, matchedRouteRef);
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.provide)(routerViewLocationKey, routeToDisplay);
        const viewRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
        // watch at the same time the component instance, the route record we are
        // rendering, and the name
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
            // copy reused instances
            if (to) {
                // this will update the instance for new instances as well as reused
                // instances when navigating to a new route
                to.instances[name] = instance;
                // the component instance is reused for a different route or name so
                // we copy any saved update or leave guards. With async setup, the
                // mounting component will mount before the matchedRoute changes,
                // making instance === oldInstance, so we check if guards have been
                // added before. This works because we remove guards when
                // unmounting/deactivating components
                if (from && from !== to && instance && instance === oldInstance) {
                    if (!to.leaveGuards.size) {
                        to.leaveGuards = from.leaveGuards;
                    }
                    if (!to.updateGuards.size) {
                        to.updateGuards = from.updateGuards;
                    }
                }
            }
            // trigger beforeRouteEnter next callbacks
            if (instance &&
                to &&
                // if there is no instance but to and from are the same this might be
                // the first visit
                (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
                (to.enterCallbacks[name] || []).forEach(callback => callback(instance));
            }
        }, { flush: 'post' });
        return () => {
            const route = routeToDisplay.value;
            // we need the value at the time we render because when we unmount, we
            // navigated to a different location so the value is different
            const currentName = props.name;
            const matchedRoute = matchedRouteRef.value;
            const ViewComponent = matchedRoute && matchedRoute.components[currentName];
            if (!ViewComponent) {
                return normalizeSlot(slots.default, { Component: ViewComponent, route });
            }
            // props from route configuration
            const routePropsOption = matchedRoute.props[currentName];
            const routeProps = routePropsOption
                ? routePropsOption === true
                    ? route.params
                    : typeof routePropsOption === 'function'
                        ? routePropsOption(route)
                        : routePropsOption
                : null;
            const onVnodeUnmounted = vnode => {
                // remove the instance reference to prevent leak
                if (vnode.component.isUnmounted) {
                    matchedRoute.instances[currentName] = null;
                }
            };
            const component = (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)(ViewComponent, assign({}, routeProps, attrs, {
                onVnodeUnmounted,
                ref: viewRef,
            }));
            if (false) {}
            return (
            // pass the vnode to the slot as a prop.
            // h and <component :is="..."> both accept vnodes
            normalizeSlot(slots.default, { Component: component, route }) ||
                component);
        };
    },
});
function normalizeSlot(slot, data) {
    if (!slot)
        return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
}
// export the public type for h/tsx inference
// also to avoid inline import() in generated d.ts files
/**
 * Component to display the current route the user is at.
 */
const RouterView = RouterViewImpl;
// warn against deprecated usage with <transition> & <keep-alive>
// due to functional component being no longer eager in Vue 3
function warnDeprecatedUsage() {
    const instance = getCurrentInstance();
    const parentName = instance.parent && instance.parent.type.name;
    if (parentName &&
        (parentName === 'KeepAlive' || parentName.includes('Transition'))) {
        const comp = parentName === 'KeepAlive' ? 'keep-alive' : 'transition';
        warn(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.\n` +
            `Use slot props instead:\n\n` +
            `<router-view v-slot="{ Component }">\n` +
            `  <${comp}>\n` +
            `    <component :is="Component" />\n` +
            `  </${comp}>\n` +
            `</router-view>`);
    }
}

/**
 * Copies a route location and removes any problematic properties that cannot be shown in devtools (e.g. Vue instances).
 *
 * @param routeLocation - routeLocation to format
 * @param tooltip - optional tooltip
 * @returns a copy of the routeLocation
 */
function formatRouteLocation(routeLocation, tooltip) {
    const copy = assign({}, routeLocation, {
        // remove variables that can contain vue instances
        matched: routeLocation.matched.map(matched => omit(matched, ['instances', 'children', 'aliasOf'])),
    });
    return {
        _custom: {
            type: null,
            readOnly: true,
            display: routeLocation.fullPath,
            tooltip,
            value: copy,
        },
    };
}
function formatDisplay(display) {
    return {
        _custom: {
            display,
        },
    };
}
// to support multiple router instances
let routerId = 0;
function addDevtools(app, router, matcher) {
    // Take over router.beforeEach and afterEach
    // make sure we are not registering the devtool twice
    if (router.__hasDevtools)
        return;
    router.__hasDevtools = true;
    // increment to support multiple router instances
    const id = routerId++;
    setupDevtoolsPlugin({
        id: 'org.vuejs.router' + (id ? '.' + id : ''),
        label: 'Vue Router',
        packageName: 'vue-router',
        homepage: 'https://router.vuejs.org',
        logo: 'https://router.vuejs.org/logo.png',
        componentStateTypes: ['Routing'],
        app,
    }, api => {
        if (typeof api.now !== 'function') {
            console.warn('[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.');
        }
        // display state added by the router
        api.on.inspectComponent((payload, ctx) => {
            if (payload.instanceData) {
                payload.instanceData.state.push({
                    type: 'Routing',
                    key: '$route',
                    editable: false,
                    value: formatRouteLocation(router.currentRoute.value, 'Current Route'),
                });
            }
        });
        // mark router-link as active and display tags on router views
        api.on.visitComponentTree(({ treeNode: node, componentInstance }) => {
            if (componentInstance.__vrv_devtools) {
                const info = componentInstance.__vrv_devtools;
                node.tags.push({
                    label: (info.name ? `${info.name.toString()}: ` : '') + info.path,
                    textColor: 0,
                    tooltip: 'This component is rendered by &lt;router-view&gt;',
                    backgroundColor: PINK_500,
                });
            }
            // if multiple useLink are used
            if (isArray(componentInstance.__vrl_devtools)) {
                componentInstance.__devtoolsApi = api;
                componentInstance.__vrl_devtools.forEach(devtoolsData => {
                    let backgroundColor = ORANGE_400;
                    let tooltip = '';
                    if (devtoolsData.isExactActive) {
                        backgroundColor = LIME_500;
                        tooltip = 'This is exactly active';
                    }
                    else if (devtoolsData.isActive) {
                        backgroundColor = BLUE_600;
                        tooltip = 'This link is active';
                    }
                    node.tags.push({
                        label: devtoolsData.route.path,
                        textColor: 0,
                        tooltip,
                        backgroundColor,
                    });
                });
            }
        });
        watch(router.currentRoute, () => {
            // refresh active state
            refreshRoutesView();
            api.notifyComponentUpdate();
            api.sendInspectorTree(routerInspectorId);
            api.sendInspectorState(routerInspectorId);
        });
        const navigationsLayerId = 'router:navigations:' + id;
        api.addTimelineLayer({
            id: navigationsLayerId,
            label: `Router${id ? ' ' + id : ''} Navigations`,
            color: 0x40a8c4,
        });
        // const errorsLayerId = 'router:errors'
        // api.addTimelineLayer({
        //   id: errorsLayerId,
        //   label: 'Router Errors',
        //   color: 0xea5455,
        // })
        router.onError((error, to) => {
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'Error during Navigation',
                    subtitle: to.fullPath,
                    logType: 'error',
                    time: api.now(),
                    data: { error },
                    groupId: to.meta.__navigationId,
                },
            });
        });
        // attached to `meta` and used to group events
        let navigationId = 0;
        router.beforeEach((to, from) => {
            const data = {
                guard: formatDisplay('beforeEach'),
                from: formatRouteLocation(from, 'Current Location during this navigation'),
                to: formatRouteLocation(to, 'Target location'),
            };
            // Used to group navigations together, hide from devtools
            Object.defineProperty(to.meta, '__navigationId', {
                value: navigationId++,
            });
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    time: api.now(),
                    title: 'Start of navigation',
                    subtitle: to.fullPath,
                    data,
                    groupId: to.meta.__navigationId,
                },
            });
        });
        router.afterEach((to, from, failure) => {
            const data = {
                guard: formatDisplay('afterEach'),
            };
            if (failure) {
                data.failure = {
                    _custom: {
                        type: Error,
                        readOnly: true,
                        display: failure ? failure.message : '',
                        tooltip: 'Navigation Failure',
                        value: failure,
                    },
                };
                data.status = formatDisplay('❌');
            }
            else {
                data.status = formatDisplay('✅');
            }
            // we set here to have the right order
            data.from = formatRouteLocation(from, 'Current Location during this navigation');
            data.to = formatRouteLocation(to, 'Target location');
            api.addTimelineEvent({
                layerId: navigationsLayerId,
                event: {
                    title: 'End of navigation',
                    subtitle: to.fullPath,
                    time: api.now(),
                    data,
                    logType: failure ? 'warning' : 'default',
                    groupId: to.meta.__navigationId,
                },
            });
        });
        /**
         * Inspector of Existing routes
         */
        const routerInspectorId = 'router-inspector:' + id;
        api.addInspector({
            id: routerInspectorId,
            label: 'Routes' + (id ? ' ' + id : ''),
            icon: 'book',
            treeFilterPlaceholder: 'Search routes',
        });
        function refreshRoutesView() {
            // the routes view isn't active
            if (!activeRoutesPayload)
                return;
            const payload = activeRoutesPayload;
            // children routes will appear as nested
            let routes = matcher.getRoutes().filter(route => !route.parent);
            // reset match state to false
            routes.forEach(resetMatchStateOnRouteRecord);
            // apply a match state if there is a payload
            if (payload.filter) {
                routes = routes.filter(route => 
                // save matches state based on the payload
                isRouteMatching(route, payload.filter.toLowerCase()));
            }
            // mark active routes
            routes.forEach(route => markRouteRecordActive(route, router.currentRoute.value));
            payload.rootNodes = routes.map(formatRouteRecordForInspector);
        }
        let activeRoutesPayload;
        api.on.getInspectorTree(payload => {
            activeRoutesPayload = payload;
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                refreshRoutesView();
            }
        });
        /**
         * Display information about the currently selected route record
         */
        api.on.getInspectorState(payload => {
            if (payload.app === app && payload.inspectorId === routerInspectorId) {
                const routes = matcher.getRoutes();
                const route = routes.find(route => route.record.__vd_id === payload.nodeId);
                if (route) {
                    payload.state = {
                        options: formatRouteRecordMatcherForStateInspector(route),
                    };
                }
            }
        });
        api.sendInspectorTree(routerInspectorId);
        api.sendInspectorState(routerInspectorId);
    });
}
function modifierForKey(key) {
    if (key.optional) {
        return key.repeatable ? '*' : '?';
    }
    else {
        return key.repeatable ? '+' : '';
    }
}
function formatRouteRecordMatcherForStateInspector(route) {
    const { record } = route;
    const fields = [
        { editable: false, key: 'path', value: record.path },
    ];
    if (record.name != null) {
        fields.push({
            editable: false,
            key: 'name',
            value: record.name,
        });
    }
    fields.push({ editable: false, key: 'regexp', value: route.re });
    if (route.keys.length) {
        fields.push({
            editable: false,
            key: 'keys',
            value: {
                _custom: {
                    type: null,
                    readOnly: true,
                    display: route.keys
                        .map(key => `${key.name}${modifierForKey(key)}`)
                        .join(' '),
                    tooltip: 'Param keys',
                    value: route.keys,
                },
            },
        });
    }
    if (record.redirect != null) {
        fields.push({
            editable: false,
            key: 'redirect',
            value: record.redirect,
        });
    }
    if (route.alias.length) {
        fields.push({
            editable: false,
            key: 'aliases',
            value: route.alias.map(alias => alias.record.path),
        });
    }
    if (Object.keys(route.record.meta).length) {
        fields.push({
            editable: false,
            key: 'meta',
            value: route.record.meta,
        });
    }
    fields.push({
        key: 'score',
        editable: false,
        value: {
            _custom: {
                type: null,
                readOnly: true,
                display: route.score.map(score => score.join(', ')).join(' | '),
                tooltip: 'Score used to sort routes',
                value: route.score,
            },
        },
    });
    return fields;
}
/**
 * Extracted from tailwind palette
 */
const PINK_500 = 0xec4899;
const BLUE_600 = 0x2563eb;
const LIME_500 = 0x84cc16;
const CYAN_400 = 0x22d3ee;
const ORANGE_400 = 0xfb923c;
// const GRAY_100 = 0xf4f4f5
const DARK = 0x666666;
function formatRouteRecordForInspector(route) {
    const tags = [];
    const { record } = route;
    if (record.name != null) {
        tags.push({
            label: String(record.name),
            textColor: 0,
            backgroundColor: CYAN_400,
        });
    }
    if (record.aliasOf) {
        tags.push({
            label: 'alias',
            textColor: 0,
            backgroundColor: ORANGE_400,
        });
    }
    if (route.__vd_match) {
        tags.push({
            label: 'matches',
            textColor: 0,
            backgroundColor: PINK_500,
        });
    }
    if (route.__vd_exactActive) {
        tags.push({
            label: 'exact',
            textColor: 0,
            backgroundColor: LIME_500,
        });
    }
    if (route.__vd_active) {
        tags.push({
            label: 'active',
            textColor: 0,
            backgroundColor: BLUE_600,
        });
    }
    if (record.redirect) {
        tags.push({
            label: typeof record.redirect === 'string'
                ? `redirect: ${record.redirect}`
                : 'redirects',
            textColor: 0xffffff,
            backgroundColor: DARK,
        });
    }
    // add an id to be able to select it. Using the `path` is not possible because
    // empty path children would collide with their parents
    let id = record.__vd_id;
    if (id == null) {
        id = String(routeRecordId++);
        record.__vd_id = id;
    }
    return {
        id,
        label: record.path,
        tags,
        children: route.children.map(formatRouteRecordForInspector),
    };
}
//  incremental id for route records and inspector state
let routeRecordId = 0;
const EXTRACT_REGEXP_RE = /^\/(.*)\/([a-z]*)$/;
function markRouteRecordActive(route, currentRoute) {
    // no route will be active if matched is empty
    // reset the matching state
    const isExactActive = currentRoute.matched.length &&
        isSameRouteRecord(currentRoute.matched[currentRoute.matched.length - 1], route.record);
    route.__vd_exactActive = route.__vd_active = isExactActive;
    if (!isExactActive) {
        route.__vd_active = currentRoute.matched.some(match => isSameRouteRecord(match, route.record));
    }
    route.children.forEach(childRoute => markRouteRecordActive(childRoute, currentRoute));
}
function resetMatchStateOnRouteRecord(route) {
    route.__vd_match = false;
    route.children.forEach(resetMatchStateOnRouteRecord);
}
function isRouteMatching(route, filter) {
    const found = String(route.re).match(EXTRACT_REGEXP_RE);
    route.__vd_match = false;
    if (!found || found.length < 3) {
        return false;
    }
    // use a regexp without $ at the end to match nested routes better
    const nonEndingRE = new RegExp(found[1].replace(/\$$/, ''), found[2]);
    if (nonEndingRE.test(filter)) {
        // mark children as matches
        route.children.forEach(child => isRouteMatching(child, filter));
        // exception case: `/`
        if (route.record.path !== '/' || filter === '/') {
            route.__vd_match = route.re.test(filter);
            return true;
        }
        // hide the / route
        return false;
    }
    const path = route.record.path.toLowerCase();
    const decodedPath = decode(path);
    // also allow partial matching on the path
    if (!filter.startsWith('/') &&
        (decodedPath.includes(filter) || path.includes(filter)))
        return true;
    if (decodedPath.startsWith(filter) || path.startsWith(filter))
        return true;
    if (route.record.name && String(route.record.name).includes(filter))
        return true;
    return route.children.some(child => isRouteMatching(child, filter));
}
function omit(obj, keys) {
    const ret = {};
    for (const key in obj) {
        if (!keys.includes(key)) {
            // @ts-expect-error
            ret[key] = obj[key];
        }
    }
    return ret;
}

/**
 * Creates a Router instance that can be used by a Vue app.
 *
 * @param options - {@link RouterOptions}
 */
function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery;
    const routerHistory = options.history;
    if (false)
        {}
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = (0,vue__WEBPACK_IMPORTED_MODULE_0__.shallowRef)(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    // leave the scrollRestoration if no scrollBehavior is provided
    if (isBrowser && options.scrollBehavior && 'scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    const normalizeParams = applyToParams.bind(null, paramValue => '' + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = 
    // @ts-expect-error: intentionally avoid the type check
    applyToParams.bind(null, decode);
    function addRoute(parentOrRoute, route) {
        let parent;
        let record;
        if (isRouteName(parentOrRoute)) {
            parent = matcher.getRecordMatcher(parentOrRoute);
            record = route;
        }
        else {
            record = parentOrRoute;
        }
        return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
        const recordMatcher = matcher.getRecordMatcher(name);
        if (recordMatcher) {
            matcher.removeRoute(recordMatcher);
        }
        else if ((false)) {}
    }
    function getRoutes() {
        return matcher.getRoutes().map(routeMatcher => routeMatcher.record);
    }
    function hasRoute(name) {
        return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
        // const objectLocation = routerLocationAsObject(rawLocation)
        // we create a copy to modify it later
        currentLocation = assign({}, currentLocation || currentRoute.value);
        if (typeof rawLocation === 'string') {
            const locationNormalized = parseURL(parseQuery$1, rawLocation, currentLocation.path);
            const matchedRoute = matcher.resolve({ path: locationNormalized.path }, currentLocation);
            const href = routerHistory.createHref(locationNormalized.fullPath);
            if ((false)) {}
            // locationNormalized is always a new object
            return assign(locationNormalized, matchedRoute, {
                params: decodeParams(matchedRoute.params),
                hash: decode(locationNormalized.hash),
                redirectedFrom: undefined,
                href,
            });
        }
        let matcherLocation;
        // path could be relative in object as well
        if ('path' in rawLocation) {
            if (false) {}
            matcherLocation = assign({}, rawLocation, {
                path: parseURL(parseQuery$1, rawLocation.path, currentLocation.path).path,
            });
        }
        else {
            // remove any nullish param
            const targetParams = assign({}, rawLocation.params);
            for (const key in targetParams) {
                if (targetParams[key] == null) {
                    delete targetParams[key];
                }
            }
            // pass encoded values to the matcher so it can produce encoded path and fullPath
            matcherLocation = assign({}, rawLocation, {
                params: encodeParams(rawLocation.params),
            });
            // current location params are decoded, we need to encode them in case the
            // matcher merges the params
            currentLocation.params = encodeParams(currentLocation.params);
        }
        const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
        const hash = rawLocation.hash || '';
        if (false) {}
        // decoding them) the matcher might have merged current location params so
        // we need to run the decoding again
        matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
        const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
            hash: encodeHash(hash),
            path: matchedRoute.path,
        }));
        const href = routerHistory.createHref(fullPath);
        if ((false)) {}
        return assign({
            fullPath,
            // keep the hash encoded so fullPath is effectively path + encodedQuery +
            // hash
            hash,
            query: 
            // if the user is using a custom query lib like qs, we might have
            // nested objects, so we keep the query as is, meaning it can contain
            // numbers at `$route.query`, but at the point, the user will have to
            // use their own type anyway.
            // https://github.com/vuejs/router/issues/328#issuecomment-649481567
            stringifyQuery$1 === stringifyQuery
                ? normalizeQuery(rawLocation.query)
                : (rawLocation.query || {}),
        }, matchedRoute, {
            redirectedFrom: undefined,
            href,
        });
    }
    function locationAsObject(to) {
        return typeof to === 'string'
            ? parseURL(parseQuery$1, to, currentRoute.value.path)
            : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
        if (pendingLocation !== to) {
            return createRouterError(8 /* ErrorTypes.NAVIGATION_CANCELLED */, {
                from,
                to,
            });
        }
    }
    function push(to) {
        return pushWithRedirect(to);
    }
    function replace(to) {
        return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
        const lastMatched = to.matched[to.matched.length - 1];
        if (lastMatched && lastMatched.redirect) {
            const { redirect } = lastMatched;
            let newTargetLocation = typeof redirect === 'function' ? redirect(to) : redirect;
            if (typeof newTargetLocation === 'string') {
                newTargetLocation =
                    newTargetLocation.includes('?') || newTargetLocation.includes('#')
                        ? (newTargetLocation = locationAsObject(newTargetLocation))
                        : // force empty params
                            { path: newTargetLocation };
                // @ts-expect-error: force empty params when a string is passed to let
                // the router parse them again
                newTargetLocation.params = {};
            }
            if (false) {}
            return assign({
                query: to.query,
                hash: to.hash,
                // avoid transferring params if the redirect has a path
                params: 'path' in newTargetLocation ? {} : to.params,
            }, newTargetLocation);
        }
    }
    function pushWithRedirect(to, redirectedFrom) {
        const targetLocation = (pendingLocation = resolve(to));
        const from = currentRoute.value;
        const data = to.state;
        const force = to.force;
        // to could be a string where `replace` is a function
        const replace = to.replace === true;
        const shouldRedirect = handleRedirectRecord(targetLocation);
        if (shouldRedirect)
            return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
                state: data,
                force,
                replace,
            }), 
            // keep original redirectedFrom if it exists
            redirectedFrom || targetLocation);
        // if it was a redirect we already called `pushWithRedirect` above
        const toLocation = targetLocation;
        toLocation.redirectedFrom = redirectedFrom;
        let failure;
        if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
            failure = createRouterError(16 /* ErrorTypes.NAVIGATION_DUPLICATED */, { to: toLocation, from });
            // trigger scroll to allow scrolling to the same anchor
            handleScroll(from, from, 
            // this is a push, the only way for it to be triggered from a
            // history.listen is with a redirect, which makes it become a push
            true, 
            // This cannot be the first navigation because the initial location
            // cannot be manually navigated to
            false);
        }
        return (failure ? Promise.resolve(failure) : navigate(toLocation, from))
            .catch((error) => isNavigationFailure(error)
            ? // navigation redirects still mark the router as ready
                isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)
                    ? error
                    : markAsReady(error) // also returns the error
            : // reject any unknown error
                triggerError(error, toLocation, from))
            .then((failure) => {
            if (failure) {
                if (isNavigationFailure(failure, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
                    if (false) {}
                    return pushWithRedirect(
                    // keep options
                    assign({
                        // preserve an existing replace but allow the redirect to override it
                        replace,
                    }, locationAsObject(failure.to), {
                        state: data,
                        force,
                    }), 
                    // preserve the original redirectedFrom if any
                    redirectedFrom || toLocation);
                }
            }
            else {
                // if we fail we don't finalize the navigation
                failure = finalizeNavigation(toLocation, from, true, replace, data);
            }
            triggerAfterEach(toLocation, from, failure);
            return failure;
        });
    }
    /**
     * Helper to reject and skip all navigation guards if a new navigation happened
     * @param to
     * @param from
     */
    function checkCanceledNavigationAndReject(to, from) {
        const error = checkCanceledNavigation(to, from);
        return error ? Promise.reject(error) : Promise.resolve();
    }
    // TODO: refactor the whole before guards by internally using router.beforeEach
    function navigate(to, from) {
        let guards;
        const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
        // all components here have been resolved once because we are leaving
        guards = extractComponentsGuards(leavingRecords.reverse(), 'beforeRouteLeave', to, from);
        // leavingRecords is already reversed
        for (const record of leavingRecords) {
            record.leaveGuards.forEach(guard => {
                guards.push(guardToPromiseFn(guard, to, from));
            });
        }
        const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
        guards.push(canceledNavigationCheck);
        // run the queue of per route beforeRouteLeave guards
        return (runGuardQueue(guards)
            .then(() => {
            // check global guards beforeEach
            guards = [];
            for (const guard of beforeGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            .then(() => {
            // check in components beforeRouteUpdate
            guards = extractComponentsGuards(updatingRecords, 'beforeRouteUpdate', to, from);
            for (const record of updatingRecords) {
                record.updateGuards.forEach(guard => {
                    guards.push(guardToPromiseFn(guard, to, from));
                });
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check the route beforeEnter
            guards = [];
            for (const record of to.matched) {
                // do not trigger beforeEnter on reused views
                if (record.beforeEnter && !from.matched.includes(record)) {
                    if (isArray(record.beforeEnter)) {
                        for (const beforeEnter of record.beforeEnter)
                            guards.push(guardToPromiseFn(beforeEnter, to, from));
                    }
                    else {
                        guards.push(guardToPromiseFn(record.beforeEnter, to, from));
                    }
                }
            }
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // NOTE: at this point to.matched is normalized and does not contain any () => Promise<Component>
            // clear existing enterCallbacks, these are added by extractComponentsGuards
            to.matched.forEach(record => (record.enterCallbacks = {}));
            // check in-component beforeRouteEnter
            guards = extractComponentsGuards(enteringRecords, 'beforeRouteEnter', to, from);
            guards.push(canceledNavigationCheck);
            // run the queue of per route beforeEnter guards
            return runGuardQueue(guards);
        })
            .then(() => {
            // check global guards beforeResolve
            guards = [];
            for (const guard of beforeResolveGuards.list()) {
                guards.push(guardToPromiseFn(guard, to, from));
            }
            guards.push(canceledNavigationCheck);
            return runGuardQueue(guards);
        })
            // catch any navigation canceled
            .catch(err => isNavigationFailure(err, 8 /* ErrorTypes.NAVIGATION_CANCELLED */)
            ? err
            : Promise.reject(err)));
    }
    function triggerAfterEach(to, from, failure) {
        // navigation is confirmed, call afterGuards
        // TODO: wrap with error handlers
        for (const guard of afterGuards.list())
            guard(to, from, failure);
    }
    /**
     * - Cleans up any navigation guards
     * - Changes the url if necessary
     * - Calls the scrollBehavior
     */
    function finalizeNavigation(toLocation, from, isPush, replace, data) {
        // a more recent navigation took place
        const error = checkCanceledNavigation(toLocation, from);
        if (error)
            return error;
        // only consider as push if it's not the first navigation
        const isFirstNavigation = from === START_LOCATION_NORMALIZED;
        const state = !isBrowser ? {} : history.state;
        // change URL only if the user did a push/replace and if it's not the initial navigation because
        // it's just reflecting the url
        if (isPush) {
            // on the initial navigation, we want to reuse the scroll position from
            // history state if it exists
            if (replace || isFirstNavigation)
                routerHistory.replace(toLocation.fullPath, assign({
                    scroll: isFirstNavigation && state && state.scroll,
                }, data));
            else
                routerHistory.push(toLocation.fullPath, data);
        }
        // accept current navigation
        currentRoute.value = toLocation;
        handleScroll(toLocation, from, isPush, isFirstNavigation);
        markAsReady();
    }
    let removeHistoryListener;
    // attach listener to history to trigger navigations
    function setupListeners() {
        // avoid setting up listeners twice due to an invalid first navigation
        if (removeHistoryListener)
            return;
        removeHistoryListener = routerHistory.listen((to, _from, info) => {
            if (!router.listening)
                return;
            // cannot be a redirect route because it was in history
            const toLocation = resolve(to);
            // due to dynamic routing, and to hash history with manual navigation
            // (manually changing the url or calling history.hash = '#/somewhere'),
            // there could be a redirect record in history
            const shouldRedirect = handleRedirectRecord(toLocation);
            if (shouldRedirect) {
                pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
                return;
            }
            pendingLocation = toLocation;
            const from = currentRoute.value;
            // TODO: should be moved to web history?
            if (isBrowser) {
                saveScrollPosition(getScrollKey(from.fullPath, info.delta), computeScrollPosition());
            }
            navigate(toLocation, from)
                .catch((error) => {
                if (isNavigationFailure(error, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
                    return error;
                }
                if (isNavigationFailure(error, 2 /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */)) {
                    // Here we could call if (info.delta) routerHistory.go(-info.delta,
                    // false) but this is bug prone as we have no way to wait the
                    // navigation to be finished before calling pushWithRedirect. Using
                    // a setTimeout of 16ms seems to work but there is not guarantee for
                    // it to work on every browser. So Instead we do not restore the
                    // history entry and trigger a new navigation as requested by the
                    // navigation guard.
                    // the error is already handled by router.push we just want to avoid
                    // logging the error
                    pushWithRedirect(error.to, toLocation
                    // avoid an uncaught rejection, let push call triggerError
                    )
                        .then(failure => {
                        // manual change in hash history #916 ending up in the URL not
                        // changing but it was changed by the manual url change, so we
                        // need to manually change it ourselves
                        if (isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ |
                            16 /* ErrorTypes.NAVIGATION_DUPLICATED */) &&
                            !info.delta &&
                            info.type === NavigationType.pop) {
                            routerHistory.go(-1, false);
                        }
                    })
                        .catch(noop);
                    // avoid the then branch
                    return Promise.reject();
                }
                // do not restore history on unknown direction
                if (info.delta) {
                    routerHistory.go(-info.delta, false);
                }
                // unrecognized error, transfer to the global handler
                return triggerError(error, toLocation, from);
            })
                .then((failure) => {
                failure =
                    failure ||
                        finalizeNavigation(
                        // after navigation, all matched components are resolved
                        toLocation, from, false);
                // revert the navigation
                if (failure) {
                    if (info.delta &&
                        // a new navigation has been triggered, so we do not want to revert, that will change the current history
                        // entry while a different route is displayed
                        !isNavigationFailure(failure, 8 /* ErrorTypes.NAVIGATION_CANCELLED */)) {
                        routerHistory.go(-info.delta, false);
                    }
                    else if (info.type === NavigationType.pop &&
                        isNavigationFailure(failure, 4 /* ErrorTypes.NAVIGATION_ABORTED */ | 16 /* ErrorTypes.NAVIGATION_DUPLICATED */)) {
                        // manual change in hash history #916
                        // it's like a push but lacks the information of the direction
                        routerHistory.go(-1, false);
                    }
                }
                triggerAfterEach(toLocation, from, failure);
            })
                .catch(noop);
        });
    }
    // Initialization and Errors
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    /**
     * Trigger errorHandlers added via onError and throws the error as well
     *
     * @param error - error to throw
     * @param to - location we were navigating to when the error happened
     * @param from - location we were navigating from when the error happened
     * @returns the error as a rejected promise
     */
    function triggerError(error, to, from) {
        markAsReady(error);
        const list = errorHandlers.list();
        if (list.length) {
            list.forEach(handler => handler(error, to, from));
        }
        else {
            if ((false)) {}
            console.error(error);
        }
        return Promise.reject(error);
    }
    function isReady() {
        if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
            return Promise.resolve();
        return new Promise((resolve, reject) => {
            readyHandlers.add([resolve, reject]);
        });
    }
    function markAsReady(err) {
        if (!ready) {
            // still not ready if an error happened
            ready = !err;
            setupListeners();
            readyHandlers
                .list()
                .forEach(([resolve, reject]) => (err ? reject(err) : resolve()));
            readyHandlers.reset();
        }
        return err;
    }
    // Scroll behavior
    function handleScroll(to, from, isPush, isFirstNavigation) {
        const { scrollBehavior } = options;
        if (!isBrowser || !scrollBehavior)
            return Promise.resolve();
        const scrollPosition = (!isPush && getSavedScrollPosition(getScrollKey(to.fullPath, 0))) ||
            ((isFirstNavigation || !isPush) &&
                history.state &&
                history.state.scroll) ||
            null;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)()
            .then(() => scrollBehavior(to, from, scrollPosition))
            .then(position => position && scrollToPosition(position))
            .catch(err => triggerError(err, to, from));
    }
    const go = (delta) => routerHistory.go(delta);
    let started;
    const installedApps = new Set();
    const router = {
        currentRoute,
        listening: true,
        addRoute,
        removeRoute,
        hasRoute,
        getRoutes,
        resolve,
        options,
        push,
        replace,
        go,
        back: () => go(-1),
        forward: () => go(1),
        beforeEach: beforeGuards.add,
        beforeResolve: beforeResolveGuards.add,
        afterEach: afterGuards.add,
        onError: errorHandlers.add,
        isReady,
        install(app) {
            const router = this;
            app.component('RouterLink', RouterLink);
            app.component('RouterView', RouterView);
            app.config.globalProperties.$router = router;
            Object.defineProperty(app.config.globalProperties, '$route', {
                enumerable: true,
                get: () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(currentRoute),
            });
            // this initial navigation is only necessary on client, on server it doesn't
            // make sense because it will create an extra unnecessary navigation and could
            // lead to problems
            if (isBrowser &&
                // used for the initial navigation client side to avoid pushing
                // multiple times when the router is used in multiple apps
                !started &&
                currentRoute.value === START_LOCATION_NORMALIZED) {
                // see above
                started = true;
                push(routerHistory.location).catch(err => {
                    if ((false))
                        {}
                });
            }
            const reactiveRoute = {};
            for (const key in START_LOCATION_NORMALIZED) {
                // @ts-expect-error: the key matches
                reactiveRoute[key] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => currentRoute.value[key]);
            }
            app.provide(routerKey, router);
            app.provide(routeLocationKey, (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(reactiveRoute));
            app.provide(routerViewLocationKey, currentRoute);
            const unmountApp = app.unmount;
            installedApps.add(app);
            app.unmount = function () {
                installedApps.delete(app);
                // the router is not attached to an app anymore
                if (installedApps.size < 1) {
                    // invalidate the current navigation
                    pendingLocation = START_LOCATION_NORMALIZED;
                    removeHistoryListener && removeHistoryListener();
                    removeHistoryListener = null;
                    currentRoute.value = START_LOCATION_NORMALIZED;
                    started = false;
                    ready = false;
                }
                unmountApp();
            };
            if (false) {}
        },
    };
    return router;
}
function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
}
function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
        const recordFrom = from.matched[i];
        if (recordFrom) {
            if (to.matched.find(record => isSameRouteRecord(record, recordFrom)))
                updatingRecords.push(recordFrom);
            else
                leavingRecords.push(recordFrom);
        }
        const recordTo = to.matched[i];
        if (recordTo) {
            // the type doesn't matter because we are comparing per reference
            if (!from.matched.find(record => isSameRouteRecord(record, recordTo))) {
                enteringRecords.push(recordTo);
            }
        }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
}

/**
 * Returns the router instance. Equivalent to using `$router` inside
 * templates.
 */
function useRouter() {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.inject)(routerKey);
}
/**
 * Returns the current route location. Equivalent to using `$route` inside
 * templates.
 */
function useRoute() {
    return inject(routeLocationKey);
}




/***/ })

}]);