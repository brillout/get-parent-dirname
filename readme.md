<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.






-->
Get the path of the directory of the parent module.

### Usage Example

~~~js
// /example/baby/index.js

const get_parent_dirname = require('@brillout/get-parent-dirname'); // npm install @brillout/get-parent-dirname

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
~~~

~~~js
// /example/papa/index.js

const baby = require('../baby');

baby();
~~~

Running `/example/papa/index.js` will print the absolute path of the `/example/papa` directory.

<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Edit `/readme.template.md` instead.






-->
