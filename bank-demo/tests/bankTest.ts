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

try {
    bank.depositAmount("1234", 200);
    if (account.balance === 200) {
        console.log("Deposit Senario 1 passed");
    } else {
        console.log("Deposit Senario 1 failed");
    }
} catch (_) {
    console.log("Deposit Senario 1 failed");
}

try {
    bank.depositAmount("3332", 200);
    console.log("Deposit Senario 2 failed");
} catch (_) {
    console.log("Deposit Senario 2 passed");
}

try {
    bank.depositAmount("1234", -1);
    console.log("Deposit Senario 3 failed");
} catch (_) {
    console.log("Deposit Senario 3 passed");
}

try {
    bank.depositAmount("1234", 0);
    console.log("Deposit Senario 4 failed");
} catch (_) {
    console.log("Deposit Senario 4 passed");
}