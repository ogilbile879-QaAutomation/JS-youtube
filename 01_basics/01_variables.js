const accountId = 14453;
let accountEmail ="hitesh@google.com";
var accountPWD = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2;  //not Allowed
console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "roshma@google.com";
console.log(accountPWD);

console.table([accountId,accountEmail,accountPWD,accountCity,accountState]);
