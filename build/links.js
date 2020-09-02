export function stylesheet(href) {
    return {
        rel: 'stylesheet',
        href,
    };
}

export function icon(href) {
    return {
        rel: 'icon',
        type: 'image/x-icon',
        href,
    };
}

export function pngIcon(size, baseUrl = '') {
    return {
        rel: 'icon',
        type: 'image/png',
        href: `${baseUrl}/favicon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
    };
}

export function appleTouchIcon(size, baseUrl = '') {
    return {
        rel: 'apple-touch-icon',
        href: `${baseUrl}/apple-icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
    };
}

export function androidIcon(size, baseUrl = '') {
    return {
        rel: 'icon',
        type: 'image/png',
        href: `${baseUrl}/android-icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
    };
}
