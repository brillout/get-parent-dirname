const get_parent_dirname = require('../..'); // npm install @brillout/get-parent-dirname

module.exports = () => {detour()};

function detour() {
    // It doesn't matter how many functions are called
    // between our parent module `papa` and our child module `baby`
    run();
}

function run() {
    // Will print the path of the directory of the `papa` module
    console.log(get_parent_dirname());
}
