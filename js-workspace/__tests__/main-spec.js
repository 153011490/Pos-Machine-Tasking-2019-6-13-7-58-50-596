const printReceipt = require('../main');
it ("should return receipt when call printReceipt given ['0001','0003', '0005', '0003']", () => {
  expect(printReceipt(['0001','0003', '0005', '0003'])).toBe('Receipts\n' +
      '------------------------------------------------------------\n' +
      'Coca Cola\t3\t1\n' +
      'Pepsi-Cola\t5\t2\n' +
      'Dr Pepper\t7\t1\n' +
      '------------------------------------------------------------\n' +
      'Price: 20');
});

it ("should return [ERROR]: barcode is not found when call printReceipt given ['10001','0003', '0005', '0003']", () => {
  expect(printReceipt(['10001','0003', '0005', '0003'])).toBe("[ERROR]: barcode is not found");
});