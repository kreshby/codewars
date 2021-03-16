const FilterString = function (...value) {
  let result = '';
  const newArray = Array.from(...value);
  newArray.forEach((element) => {
    if (!Number.isNaN(Number(element))) {
      result += element;
    }
  });
  return Number(result);
};
console.log(FilterString('aa1bb2cc3dd'));
