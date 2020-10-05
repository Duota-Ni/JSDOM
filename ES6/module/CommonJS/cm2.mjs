//Explicitly name files with the .mjs extension. All other files, such as .js will be interpreted as CommonJS, which is the default if type is not defined in package.json.
//使用 .mjs 扩展名显式命名文件。所有其他文件（如 .js）将被解释为 CommonJS，如果在包.json 中未定义类型，则默认为 CommonJS。
import {sum} from './cm1.mjs';
console.log(sum(3,7));