var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1;
    let high = n;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      let ans = isBadVersion(mid);

      if (ans) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return low;
  };
};
