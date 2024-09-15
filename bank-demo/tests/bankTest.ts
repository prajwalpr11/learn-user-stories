import Bank from "../src/bank";

//setup
const bank = new Bank();

//scenario 1 Create Account
const account = bank.createAccount("Prajwal Prasad", 28, "1234");
if (account.accountNumber === "1234") {
    console.log("Scenario 1 passed");
} else {
    console.log("Scenario 1 failed");
}

//scenario 2 Create Account
try {
    bank.createAccount("Prajwal Prasad", 28, "1234");
    console.log("Scenario 2 failed")
} catch (_) {
    console.log("Scenario 2 passed");
}

//scenario 1 Deposit Amount
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

//scenario 2 Deposit Amount
try {
    bank.depositAmount("3332", 200);
    console.log("Deposit Senario 2 failed");
} catch (_) {
    console.log("Deposit Senario 2 passed");
}

//scenario 3 Deposit Amount
try {
    bank.depositAmount("1234", -1);
    console.log("Deposit Senario 3 failed");
} catch (_) {
    console.log("Deposit Senario 3 passed");
}

//scenario 4 Deposit Amount
try {
    bank.depositAmount("1234", 0);
    console.log("Deposit Senario 4 failed");
} catch (_) {
    console.log("Deposit Senario 4 passed");
}

//scenario 1 withdraw Amount 
try {
    bank.depositAmount("1234", 1000);
    bank.withdrawAmount("1234", 1000);
    if (account.balance === 200) {
        console.log("Withdraw Senario 1 passed");
    } else {
        console.log("Withdraw Senario 1 failed");
    }
} catch (_) {
    console.log("Withdraw Senario 1 failed");
}

//scenario 2 withdraw Amount 
try {
    bank.withdrawAmount("3332", 200);
    console.log("Withdraw Senario 2 failed");
} catch (_) {
    console.log("Withdraw Senario 2 passed");
}

//scenario 3 withdraw Amount 
try {
    bank.withdrawAmount("1234", -1);
    console.log("Withdraw Senario 3 failed");
} catch (_) {
    console.log("Withdraw Senario 3 passed");
}

//scenario 4 withdraw Amount 
try {
    bank.withdrawAmount("1234", 0);
    console.log("Withdraw Senario 4 failed");
} catch (_) {
    console.log("Withdraw Senario 4 passed");
}

//scenario 5 withdraw Amount 
try {
    bank.withdrawAmount("1234", 1200);
    console.log("Withdraw Senario 5 failed");
} catch (_) {
    console.log("Withdraw Senario 5 passed");
}