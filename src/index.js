module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;

    var obj = {};
    for (var i = 0; i < array.length; i++) {
        obj[array[i]] = true;
    }

    var count = 1;
    for (var key in obj) {
        if (!obj[key - 1]) {
            var curr = +key;
            var temp = 1;
            while (obj[curr + 1]) {
                curr++;
                temp++;
            }
            count = Math.max(count, temp);
        }
    }
    return count;
};
