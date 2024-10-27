//433. Minimum Genetic Mutation
//a gene string can be represented by an 8-character long string, with choices from 'A', 'C', 'G', and 'T'
//suppose we need to investigate a mutation from a gene string startGene to a gene string endGene where one mutation is defined as one single character changed in the gene string
//for example, "AACCGGTT" --> "AACCGGTA" is one mutation
//there is also a gene bank bank that records all the valid gene mutations
//a gene must be in bank to make it a valid gene string

//given the two gene strings startGene and endGene and the gene bank bank
//return the minimum number of mutations needed to mutate from startGene to endGene
//if there is no such a mutation, return -1
//Note that the starting point is assumed to be valid, so it might not be included in the bank

//Approach:
//using BFS
var minGeneticMutation = (startGene, endGene, bank) => {
    let choices = ['A', 'C', 'G', 'T'];
    let visited = new Set([startGene]);
    let queue = [startGene];
    let count = 0;

    //BFS
    while (queue.length) {
        let len = queue.length;

        for (let i = 0; i < len; i++) {
            let curr = queue.shift();

            //mutation done
            if (curr === endGene) return count;

            //checking all mutations
            for (let choice of choices) {
                for (let j = 0; j < curr.length; j++) {
                    let mutation = curr.substring(0, j) + choice + curr.substring(j + 1);

                    if (!visited.has(mutation) && bank.includes(mutation)) {
                        queue.push(mutation);

                        visited.add(mutation);
                    }
                }
            }
        }

        count++;
    }

    return -1;
}
//TC: O(b) - bank lenght
//SC: O(1)
minGeneticMutation(startGene = "AACCGGTT", endGene = "AACCGGTA", bank = ["AACCGGTA"]); //1
//visited = { AACCGGTT }
//queue = [ AACCGGTT,  ]
//curr = AACCGGTT
//choices = ['A', 'C', 'G', 'T']                                                    choices = ['A', 'C', 'G', 'T']
//            ^                                                                                      ^
//mutation = '' + 'A' + ACCGGTT = AACCGGTT -> j = 0                                 '' + 'C' + ACCGGTT = CACCGGTT -> j = 0
//           'A' + 'A' + CCGGTT = AACCGGTT -> j = 1                                 'A' + 'C' + CCGGTT = ACCCGGTT -> j = 1
//           'AA' + 'A' + CGGTT = AAACGGTT -> j = 2                                 'AA' + 'C' + CGGTT = AACCGGTT -> j = 2
//           'AAC' + 'A' + GGTT = AACAGGTT -> j = 3                                 'AAC' + 'C' + GGTT = AACCGGTT -> j = 3          ...
//           'AACC' + 'A' + GTT = AACCAGTT -> j = 4                                 'AACC' + 'C' + GTT = AACCCGTT -> j = 4
//           'AACCG' + 'A' + TT = AACCGATT -> j = 5                                 'AACCG' + 'C' + TT = AACCGCTT -> j = 5
//           'AACCGG' + 'A' + T = AACCGGAT -> j = 6                                 'AACCGG' + 'C' + T = AACCGGCT -> j = 6
//           'AACCGGT' + 'A' + '' = AACCGGTA -> j = 7: included in bank             'AACCGGT' + 'C' + '' = AACCGGTC -> j = 7
//queue = [ AACCGGTA,  ]
//visited = { AACCGGTT, AACCGGTA }
//count = 0 -> 1

//queue = [ AACCGGTA,  ]
//curr = AACCGGTT, AACCGGTA
//AACCGGTA = endGene
//1

minGeneticMutation(startGene = "AACCGGTT", endGene = "AAACGGTA", bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]); //2
