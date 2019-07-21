const path = require("path");

/**
 * See: https://github.com/facebook/metro/issues/7#issuecomment-508129053
 */

module.exports = {
  projectRoot: path.resolve(__dirname),
  watchFolders: [path.resolve(__dirname, "../src")],
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (_, name) => path.resolve(__dirname, "node_modules", name)
      }
    )
  }
};
