/*
in the nearest parent package.json file, add the top-level "type" field with a value of "module". This will ensure that all .js and .mjs files are interpreted as ES modules. You can interpret individual files as CommonJS by using the .cjs extension.
在最近的package.json 文件，添加值为"模块"的顶级"type"字段。这将确保所有 .js 和 .mjs 文件都解释为 ES 模块。您可以使用 .cjs 扩展名将单个文件解释为 CommonJS。
// package.json
{
  "type": "module"
}

*/
import {sum} from './m1.js';
console.log(sum(3,7));