export class Matrix {
  #rows
  #cols

  constructor(string) {
    // splitting input str on \n
    const rows = string.split('\n')
    // splitting every row on space and turning values to numbers
    this.#rows = rows.map((r) => r.split(' ').map((val) => +val))

    this.#cols = []

    for (const row of this.#rows) {
      for (let i = 0; i < row.length; i++) {
        if (!this.#cols[i]) this.#cols.push([])
        this.#cols[i].push(row[i])
      }
    }
  }

  get rows() {
    return this.#rows
  }

  get columns() {
    return this.#cols
  }
}
