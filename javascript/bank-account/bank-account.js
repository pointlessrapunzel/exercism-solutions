export class BankAccount {
  // WORKS ONLY IN es2021
  #balance;
  #closed;

  constructor() {
    this.#balance = 0;
    this.#closed = true;
  }

  open() {
    if (!this.#closed) throw new ValueError();
    this.#closed = false;
  }

  close() {
    if (this.#closed) throw new ValueError();
    this.#closed = true;
    this.#balance = 0;
  }

  deposit(amount) {
    if (this.#closed) throw new ValueError();
    if (amount <= 0) throw new ValueError();
    this.#balance += amount
  }

  withdraw(amount) {
    if (this.#closed) throw new ValueError();
    if (amount <=0 || amount > this.#balance) throw new ValueError();
    this.#balance -= amount;
  }

  get balance() {
    if (this.#closed) throw new ValueError();
    return this.#balance;
  }

}

export class ValueError extends Error {

  constructor() {
    super('Bank account error');
  }

}