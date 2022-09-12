const fs = require('fs');

console.log(global);
console.log("GIT Test");

global.hello = () => {
  global.console.log('hello');
};

global.hello();
hello();
