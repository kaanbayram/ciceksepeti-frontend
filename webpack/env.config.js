const path = require('path');

const outputConfig = {
    destPath: "../dist"
};

const entryConfig = [
    "./src/index.tsx"
];


const copyPluginPatterns = {
    patterns: [
        // { from: "./src/assets/svg/16", to: "svg/16" },
        { from: "./src/assets/fonts", to: "fonts" },
        // { from: "./src/assets/images", to: "images" }

    ]
};


const devServer = {
    static: {
        directory: path.join(__dirname, './dist'),
    },
};


const scssConfig = {
    destFileName: "css/app.min.css"
};

const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    }
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;