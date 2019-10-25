import * as path from "path";
import typescript from "rollup-plugin-typescript2";

const packages = ["react-baseline-inputs", "formik-inputs"];

export default packages.map(name => {
  const pkg = require(`./packages/${name}/package.json`);

  return {
    input: `packages/${name}/src/index.ts`,
    output: [
      { file: `packages/${name}/${pkg.main}`, format: "cjs" },
      { file: `packages/${name}/${pkg.module}`, format: "es" }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      typescript({
        typescript: require("typescript"),
        tsconfig: `./packages/${name}/tsconfig.json`
      })
    ]
  };
});
