export const toRna = (dnaString) => {
  if (/[^A|T|C|G]/gm.test(dnaString)) throw Error('Invalid input DNA.');
  return dnaString
    .split('')
    .map((letter) => {
      switch (letter) {
        case 'G':
          return 'C';
        case 'C':
          return 'G';
        case 'T':
          return 'A';
        case 'A':
          return 'U';
      }
    })
    .join('');
};
