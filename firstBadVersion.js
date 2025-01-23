var solution = function (isBadVersion) {
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) {
        // mid is bad, so search the left side
        right = mid;
      } else {
        // mid is good, so search the right side
        left = mid + 1;
      }
    }

    // At the end, left == right, pointing to the first bad version
    return left;
  };
};
