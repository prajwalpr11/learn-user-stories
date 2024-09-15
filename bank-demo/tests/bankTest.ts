import Bank from "../src/bank";

//setup
const bank = new Bank();

//scenario 1
const account = bank.createAccount("Prajwal Prasad", 28, "1234");
if (account.accountNumber === "1234") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

try {
    bank.createAccount("Prajwal Prasad", 28, "1234");
    console.log("Scenario 2 failed")
} catch (_) {
    console.log("Scenario 2 passed");
}