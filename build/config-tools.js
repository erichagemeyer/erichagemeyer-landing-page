import fs from 'fs';

export function saveConfigFile(path, config) {
    const configJson = JSON.stringify(config, null, 4);
    if (path) {
        fs.writeFile(path, configJson, (err) => {
            if (err) {
                console.log(`Unable to save file to ${path}`);
            } else {
                console.log(`Saved webpack config as ${path}`);
            }
        });
    }
}

export function patchUrlLoaderLimit(config, limit) {
    for (const rule of config.module.rules) {
        if ('test.png'.match(rule.test)) {
            const loader = rule.use.find((loader) => loader.loader === 'url-loader');
            loader.options = loader.options || {};
            loader.options.limit = limit;
        }
    }
}
