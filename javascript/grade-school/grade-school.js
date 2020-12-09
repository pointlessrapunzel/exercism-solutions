export class GradeSchool {
  #roster

  constructor() {
    this.#roster = {}
  }

  roster() {
    return Object.keys(this.#roster).reduce((acc, key) => {
      acc[key] = this.#roster[key].slice()
      return acc
    }, {})
  }

  add(name, grade) {
    if (!this.#roster[grade]) this.#roster[grade] = []
    this.#roster[grade].push(name)
    this.#roster[grade].sort()
  }

  grade(grade) {
    const students = this.#roster[grade]
    if (!students) return []
    return students.slice()
  }
}
