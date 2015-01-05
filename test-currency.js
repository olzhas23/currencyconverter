var currency = require('./my_module/index');

console.log('50 Cannadian Dollars equals this amount of US dollars');
console.log(currency.canadianToUS(50));

console.log("30 US dollars equals this amount of Canadian dollars");
console.log(currency.USToCanadian(30));
