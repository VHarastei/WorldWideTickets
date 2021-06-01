exports.transformSeeder = (arr) => {
  return arr.map((item) => {
    const keys = Object.keys(item);
    keys.forEach((key) => {
      if (key.includes('Id') || key.includes('id')) {
        item[key] = (item[key] - 1) * 10 + 5;
      }
    });
    return item;
  });
};
