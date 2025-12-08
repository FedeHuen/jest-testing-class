function processData(data, callback) {
  return data.map(item => callback(item));
}

function filterData(data, predicate) {
  return data.filter(predicate);
}

function calculateTotal(items, getPrice) {
  return items.reduce((total, item) => {
    return total + getPrice(item);
  }, 0);
}

module.exports = { processData, filterData, calculateTotal };

