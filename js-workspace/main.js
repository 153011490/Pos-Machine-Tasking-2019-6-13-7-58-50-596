function isBarCodeValid(barCode){
    if(typeof(getItemById(barCode))=="undefined"){
        return false;
    }
    return true;
}

function getItemById(id) {
    let itemsDB = [
      {"id": "0001", "name": "Coca Cola", "price": 3},
      {"id": "0002", "name": "Diet Coke", "price": 4},
      {"id": "0003", "name": "Pepsi-Cola", "price": 5},
      {"id": "0004", "name": "Mountain Dew", "price": 6},
      {"id": "0005", "name": "Dr Pepper", "price": 7},
      {"id": "0006", "name": "Sprite", "price": 8},
      {"id": "0007", "name": "Diet Pepsi", "price": 9},
      {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
      {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
      {"id": "0010", "name": "Fanta", "price": 12}
    ];
    let item={};
    for(let index=0;index<itemsDB.length;index++){
        if(id==itemsDB[index].id){
            item=itemsDB[index];
            return item;
        }
    }
    return item;
  }

function convertToItemList(barCodes) {
    let itemList = [];
    barCodes=barCodes.sort();
    for(let i=0;i<barCodes.length;i+=count){
        var count=0;
        if(isBarCodeValid(barCodes[i])){
            for (let j = i; j < barCodes.length; j++) {  
                if (barCodes[i] == barCodes[j]) {  
                    count++;  
                }  
            }  
            itemList.push({"ID":barCodes[i],"count":count});  
        }else{
            return "[ERROR]: barcode is not found";
        }
    }
    return itemList;
  }
  
  function getReceiptByItemList(itemList) {
    let total = 0;
    let receipt = '';
    receipt += 'Receipts\n' +'------------------------------------------------------------\n';
    for(let i=0;i<itemList.length;i++){
        let item=getItemById(itemList[i].ID);
        receipt += item['name'] + '  ' + item['price'] + '  ' + itemList[i].count + '\n';
        total += item['price']*itemList[i].count;
    }
    receipt += ('------------------------------------------------------------\nPrice: ' + total);
    return receipt;
  }
  
  function printReceipt(barcodeList) {
    let itemList = convertToItemList(barcodeList);
    if(itemList.indexOf('[ERROR]')!=-1){
        return itemList;
    }
    let receipt = getReceiptByItemList(itemList);
    return receipt;
  }

  module.exports = printReceipt;