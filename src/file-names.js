const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArr = [];
  let finalArr = [];

  for (let name of names) {
      if (newArr.includes(name)) {
          let value = newArr.reduce((val, item) =>{
              if (name === item) return val + 1;
              else return val;
          }, 0);

          newArr.push(name);
          finalArr.push([name, value]);
      } else {
          if(name.includes('(') && name.includes(')')) {
              let subNum = +(name.slice(name.indexOf('(') + 1, name.indexOf(')')));
              let subName = name.slice(0, name.indexOf('('));

              if (newArr.includes(subName)) {
                  let count = newArr.reduce((val, item) => {
                      if (item === subName) return val + 1;
                      else return val;
                  }, 0)
                  if (subNum > count) {
                      newArr.push(name);
                      finalArr.push([name, 0]);
                  } else {
                      newArr.push(name);
                      finalArr.push([name, 1]);
                  }
              } else {
                  newArr.push(name);
                  finalArr.push([name, 1]);
              }
          } else {
              newArr.push(name);
              finalArr.push([name, 0]);
          }
      }
  }

  return finalArr.map(item => {
      if (!item[1]) return item[0];
      else return `${item[0]}(${item[1]})`;
  });
}

module.exports = {
  renameFiles
};
