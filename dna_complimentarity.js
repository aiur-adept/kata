function trans(x) {
  switch(x) {
      case 'A': return 'T';
      case 'C': return 'G';
      case 'T': return 'A';
      case 'G': return 'C';
  }
}

function dnaStrand(dna){
  return Array.from(dna).map(trans).join('');
}

const data = 'ACTATCGAT';

// should output 'TGATAGCTA'
console.log(dnaStrand(data));
