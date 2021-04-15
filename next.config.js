const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
    webpack: (config, options) => {
        const { dev, isServer } = options;

        // Do not run type checking twice:
        if (dev && isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }

        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: "empty",
            };
        }

        return config;
    },
};
