//187. Repeated DNA Sequences
//the DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C'. 'G' and 'T'
//for example, "ACGAATTCCG" is a DNA sequence
//when studying DNA, it is useful to identify repeated sequence within the DNA
//given a string 's' that represents a DNA sequence
//return all 10-letter long sequences that occur more than once in a DNA molecule
//you may return the answer in any order

//Approach:
//using Set()
var repeatedDNASequence = (s) => {
    let visited = new Set();
    let res = new Set();

    for (let i = 0; i <= s.length - 10; i++) {
        let str = s.substring(i, i + 10);
        visited.has(str) ? res.add(str) : visited.add(str);
    }
    return [...res];
}
repeatedDNASequence("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"); //["AAAAACCCCC","CCCCCAAAAA"]

repeatedDNASequence("AAAAAAAAAAAAA"); //["AAAAAAAAAA"]
