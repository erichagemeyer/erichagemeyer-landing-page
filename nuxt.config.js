import path from 'path';
import * as links from './build/links';
import { saveConfigFile, patchUrlLoaderLimit } from './build/config-tools';

const BARLOW_FONT_URL = 'https://fonts.googleapis.com/css2?family=Barlow:wght@400;600&display=swap';
const ANIMATE_CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css';
// eslint-disable-next-line prettier/prettier
const MERRIWEATHER_FONT_URL = 'https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&display=swap';

const APPLE_TOUCH_SIZES = [57, 60, 72, 76, 114, 120, 144, 152, 180];

const PNG_ICON_SIZES = [32, 96, 16];
const ANDROID_ICON_SIZES = [192];

const ICON_DIR = 'icons';

const PRIMARY_COLOR = '#fe6a56';

export default {
    mode: 'universal',
    srcDir: 'src',
    /*
     ** Headers of the page
     */
    head: {
        titleTemplate(titleChunk) {
            const rootTitle = 'Eric Hagemeyer';
            return titleChunk ? `${titleChunk} - ${rootTitle}` : rootTitle;
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
            {
                name: 'msapplication-TileColor',
                content: '#ffffff',
            },
            {
                name: 'msapplication-TileImage',
                content: '/icons/ms-icon-144x144.png',
            },
            {
                name: 'theme-color',
                content: '#ffffff',
            },
        ],
        link: [
            {
                rel: 'manifest',
                href: '/manifest.json',
            },
            links.icon('/favicon.ico'),
            links.stylesheet(BARLOW_FONT_URL),
            links.stylesheet(MERRIWEATHER_FONT_URL),
            links.stylesheet(ANIMATE_CSS_URL),
            ...APPLE_TOUCH_SIZES.map((size) => links.appleTouchIcon(size, ICON_DIR)),
            ...PNG_ICON_SIZES.map((size) => links.pngIcon(size, ICON_DIR)),
            ...ANDROID_ICON_SIZES.map((size) => links.androidIcon(size, ICON_DIR)),
        ],
    },
    globalName: 'erichagemeyer',
    /*
     ** Customize the progress-bar color
     */
    loading: { color: PRIMARY_COLOR },
    /*
     ** Global CSS
     */
    css: ['~/assets/style.scss'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        '@nuxtjs/vuetify',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [],
    /*
     ** vuetify module configuration
     ** https://github.com/nuxt-community/vuetify-module
     */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        defaultAssets: {
            font: false,
        },
        treeShake: {
            loaderOptions: {
                progressiveImages: true,
            },
        },
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: PRIMARY_COLOR,
                },
                dark: {
                    primary: PRIMARY_COLOR,
                },
            },
        },
    },
    /*
     ** Build configuration
     */
    build: {
        extractCSS: true,
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Add rule for yaml file loading
            config.module.rules.push({
                test: /\.ya?ml$/,
                use: 'js-yaml-loader',
            });

            // Add rule for markdown loading
            config.module.rules.push({
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
            });

            config.module.rules.push({
                enforce: 'pre',
                test: /\.txt$/,
                use: 'raw-loader',
                include: path.resolve(__dirname, 'src/jobs'),
            });

            // Add eslint-loader when dev client to fix formatting issues automatically
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                    options: { fix: true },
                });
            }

            // update url-loader limit
            const URL_LOADER_LIMIT = 2 ** 13; // ~8kb
            patchUrlLoaderLimit(config, URL_LOADER_LIMIT);

            // save config to file for debugging
            saveConfigFile(process.env.SAVE_WEBPACK_CONFIG, config);
        },
    },
};
