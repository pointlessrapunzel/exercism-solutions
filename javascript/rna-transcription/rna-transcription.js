//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const MAP = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
}

export const toRna = (dna = '') => {
  if (!dna) return ''

  let rna = ''
  for (const nucl of dna) {
    rna += MAP[nucl]
  }

  return rna
};
