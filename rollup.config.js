import resolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";
import typescript from "rollup-plugin-typescript2";

const packages = ["react-baseline-inputs", "formik-inputs"];

export default packages.map(name => {
  const pkg = require(`./packages/${name}/package.json`);

  return {
    input: `packages/${name}/src/index.ts`,
    output: [
      {
        file: `packages/${name}/${pkg.main}`,
        format: "cjs",
        sourcemap: true
      },
      {
        file: `packages/${name}/${pkg.module}`,
        format: "es",
        sourcemap: true
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {})
    ],
    plugins: [
      resolve(),
      typescript({
        typescript: require("typescript"),
        tsconfig: `./packages/${name}/tsconfig.json`
      }),
      sourcemaps()
    ]
  };
});
