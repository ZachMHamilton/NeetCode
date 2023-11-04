var groupAnagrams = function(strs) {
  // use an object
  const obj = {};
  // loop thru strings
  for (let str of strs) {
      // sort them
      const key = str.split('').sort().join('');
      // if obj[key] doesnt exist
      if (!obj[key]) {
          // add to obj as key with value being an array containing string
          obj[key] = [str];
      }
      // else
      else {
          // push string to key value array
          obj[key].push(str);
      }
  }
  // return an array of the values from obj
  return Object.values(obj);
};