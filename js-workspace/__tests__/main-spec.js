const printReceipt = require('../main');
it ("should return receipt when call printReceipt given ['0001','0003', '0005', '0003']", () => {
  expect(printReceipt(['0001','0003', '0005', '0003'])).toBe('Receipts\n' +
      '------------------------------------------------------------\n' +
      'Coca Cola  3  1\n' +
      'Pepsi-Cola  5  2\n' +
      'Dr Pepper  7  1\n' +
      '------------------------------------------------------------\n' +
      'Price: 20');
});