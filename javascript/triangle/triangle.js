export class Triangle {
  constructor(...sides) {
    if (
      sides.some((s) => s <= 0) ||
      sides[0] + sides[1] <= sides[2] ||
      sides[0] + sides[2] <= sides[1] ||
      sides[1] + sides[2] <= sides[0]
    ) {
      this._validTriangle = false
    } else {
      this._validTriangle = true
      ;[this._a, this._b, this._c] = sides
    }
  }

  isEquilateral() {
    return this._validTriangle && this._a === this._b && this._b === this._c
  }

  isIsosceles() {
    return (
      this._validTriangle &&
      (this._a === this._b || this._b === this._c || this._a === this._c)
    )
  }

  isScalene() {
    return this._validTriangle && !this.isIsosceles()
  }
}
