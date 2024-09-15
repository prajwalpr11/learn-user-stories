//interface for a Bank Account, indicates the type for Bank Account
interface BankAccount {
    name: string,
    age: number,
    accountNumber: string,
    balance: number
}

/**
 * Bank class that manages all bank Accounts
 */
export default class bank {
    //Array to store all bank accounts in bank
    private accounts: BankAccount[] = [];

    /**
     * Method to find Account number in the Bank
     * @param {string} accountNumber  Account number of the bank account to find
     * @returns bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(acc => acc.accountNumber === accountNumber);
    }

    /**
     *  Create new Account with unique account number
     * @param name --Name of the customer
     * @param age --Age of the customer
     * @param accountNumber --account number of the customer
     * @returns BankAccount - created bank account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isExistingAccount = this.findAccount(accountNumber);
        if (isExistingAccount) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name,
            age,
            accountNumber,
            balance: 0
        }
        this.accounts.push(account);
        return account;
    }

    /**
     * Deposits amount into the Account
     * @param accountNumber -- Account number of the Account for the money to be deposited
     * @param amount -- amount to be deposited
     */
    public depositAmount(accountNumber: string, amount: number) {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Please enter a valid amount");
        }
        account.balance += amount;
    }

    /**
     * Withdraws amount from the Account
     * @param accountNumber -- Account number of the Account for the money to be deposited
     * @param amount -- amount to be deposited
     */
    public withdrawAmount(accountNumber: string, amount: number) {
        const account = this.findAccount(accountNumber);
        if (!account) {
            throw new Error("Account not found");
        }
        if (amount <= 0) {
            throw new Error("Please enter a valid amount");
        }
        if (amount > account.balance) {
            throw new Error("Entered amount is greater than the current balance");
        }
        account.balance -= amount;
    }



}