const COLORS: string[] = [
  'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'
]


export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    if (colors.length < 2) throw new Error('At least two colors need to be present')
    this.colors = colors.slice(0, 2)
  }
  value = (): number => +this.colors.map(c => COLORS.indexOf(c)).join('')
}
