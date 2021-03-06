'use strict';

const fs = require('fs');

export function buyF35(money: number, tempMoney: number, myData: any[]) {
  
  const cost: number = 4000;
  
  if(money < cost + 1000) {
    console.log(`\r\nYou cant purchase upgrade/Aircraft, if you would left with less than 1000$`);
  } else {
    myData[1] === ''
      ? myData[1] += 'F35,0'
      : myData[1] += '_F35,0';

    money -= cost;

    myData[5] = money;

    console.log(`\r\nYou just spent ${tempMoney - money}$ to buy an F35 fighter`);
    
    fs.writeFileSync('./gameData/myCarrier.txt', myData.join(';'));
    
    console.log(`\r\nYou have ${money}$ left!`);
  }
}
