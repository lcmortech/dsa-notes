const intersection = (a, b) => {
  const result = [];
  for (let item of b) {
    if (a.includes(item)) {
      result.push(item);
    }
  }
  return result;
};