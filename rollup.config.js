const path = require("path");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const alias = require("rollup-plugin-alias");
const babel = require("rollup-plugin-babel");
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");
const { terser } = require("rollup-plugin-terser");
const replace = require("rollup-plugin-replace");
const pkg = require("./package.json");

const pathResolve = dir => path.resolve(__dirname, dir);
const version = process.env.VERSION || pkg.version;

const banner =
    "/*!\n" +
    ` * hyProgress.js v${version}\n` +
    ` * (c) 2018-${new Date().getFullYear()} Hyhello\n` +
    " * Released under the MIT License.\n" +
    " */";
const env = process.env.NODE_ENV || "development";
const config = {
    input: "app/index.js",
    output: [
        {
            format: "umd",
            name: "Progress",
            file: pkg.main,
            sourceMap: true,
            banner: banner
        }
    ],
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        alias({
            "@": pathResolve("app")
        }),
        babel({
            externalHelpers: true,
            exclude: "node_modules/**"
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify(env)
        })
        // terser({
        //     output: {
        //       ascii_only: true // 仅输出ascii字符
        //     },
        //     compress: {
        //       pure_funcs: ['console.log'] // 去掉console.log函数
        //     }
        // })
    ]
};

if (env === "development") {
    config.plugins.push(
        serve({
            open: true, // 是否打开浏览器
            contentBase: "./", // 入口html的文件位置
            historyApiFallback: true, // Set to true to return index.html instead of 404
            host: "localhost",
            port: 9527
        }),
        livereload({
            watch: "dist/" //监听文件夹;
        })
    );
}

module.exports = config;
