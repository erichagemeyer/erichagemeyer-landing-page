export const GOOGLE_FONT_HOST = 'https://fonts.googleapis.com';

export function toFontString(name, styles) {
    let fontString = name.replace(' ', '+');

    if (Array.isArray(styles) && styles.length) {
        const styleString = styles.join(',');
        fontString += `:${styleString}`;
    }

    return fontString;
}

export function toFontsString(fonts) {
    const fontsString = Object.entries(fonts)
        .map((args) => toFontString(...args))
        .join('|');

    return fontsString;
}

export function googleFontUrl(fonts) {
    const fontString = Object.entries(fonts)
        .map((args) => toFontString(...args))
        .join('|');

    return `${GOOGLE_FONT_HOST}/css?family=${fontString}&display=swap`;
}
