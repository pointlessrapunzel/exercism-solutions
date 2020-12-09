export const rows = (rowCount = 0) => {
  if (rowCount === 0) return []
  const result = [[1]]

  for (let i = 1; i < rowCount; i++) {
    const newRow = []

    for (let j = 0; j < i + 1; j++) {
      const prevLeft = result[i - 1][j - 1] || 0
      const prevRight = result[i - 1][j] || 0
      newRow.push(prevLeft + prevRight)
    }

    result.push(newRow)
  }

  return result
}
