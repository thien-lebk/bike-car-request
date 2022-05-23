const Util = (array, key) => {
  let length = array.length;
  const arrayFilter = array.filter((item) => item[key]);
  if (arrayFilter.length) {
    length = [...arrayFilter].reduce(
      (previousValue, currentValue) => {
        const arrayFilter = currentValue[key].filter((item) => item[key]);
        let arrayLength = currentValue[key].length;
        if (arrayFilter.length) {
          arrayLength = totalChildren(currentValue[key], key);
        }
        return previousValue + arrayLength;
      },
      length
    );
  }
  return length;
};
export default Util;
