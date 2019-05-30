import mockRequire from "mock-require";
mockRequire(
  "fork-ts-checker-webpack-plugin",
  require("../fork-ts-checker-webpack-plugin/lib")
);
mockRequire("webpack", require("../repos/vuetify/node_modules/webpack"));

import webpack from "webpack";
import webpackConfig from "../repos/vuetify/packages/vuetify/build/webpack.dev.config";
import { resolve } from "path";

webpackConfig.context = resolve(
  __dirname,
  "../repos/vuetify/packages/vuetify/"
);

const compiler = webpack(webpackConfig);

compiler.run((...args: any[]) => {
  console.log(args);
});
