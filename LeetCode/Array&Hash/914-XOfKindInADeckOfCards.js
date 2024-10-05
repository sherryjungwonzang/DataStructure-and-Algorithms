//914. X Of Kind In A Deck Of Cards
//given an integer array 'deck' where deck[i] represents the number written on the ith card
//partition the cards into one or more groups such that:
//each group has exactly x cards where x > 1, and:
//all the cards in one group have the same integer written on them
//return true if such partition is possible, or false otherwise

//Aproach:
//using hash map and GCD(greatest common divisor)
var deckOfCards = (deck) => {
    let map = {};

    //checking frequency
    deck.forEach(d => {
        map[d] = (map[d] || 0) + 1;
    });

    //arranging by frequency
    let groups = Object.values(map);
    let group = groups[0];

    //checking gcd
    for (let i = 1; i < groups.length; i++) {
        group = gcd(group, groups[i]);

        //having no gcd
        if (group < 2) return false;
    }

    //greatest common divisor
    
    function gcd(a, b) {
        let num1 = a;
        let num2 = b;
    
        while (num2 !== 0) {
            let div = num1 % num2;
    
            num1 = num2;
                
            num2 = div;
        }
    
        return num1;
    }

        
    //for reference
    // function gcd(a, b) {
    //     //base case
    //     if (b === 0) return a;

    //     return gcd(b, a % b);
    // }

    return group >= 2;
}
deckOfCards([1,2,3,4,4,3,2,1]); //true - [1,1],[2,2],[3,3],[4,4]
//map = {
//  1: 2,
//  2: 2,   
//  3: 2,
//  4: 2
//}

//groups = [2, 2, 2, 2]
//          ^
//        group

//i = 1 -> group = gcd(2, 2)
//gcd(2, 2): num1 = 2 -> 2
//           num2 = 2 -> 0
//           div = 2 % 2 = 0
//2 >= 2 -> true

//i = 2 -> group = gcd(2, 2)
//gcd(2, 2): num1 = 2 -> 2
//           num2 = 2 -> 0
//           div = 2 % 2 = 0
//2 >= 2 -> true

//i = 3 -> group = gcd(2, 2)
//gcd(2, 2): num1 = 2 -> 2
//           num2 = 2 -> 0
//           div = 2 % 2 = 0
//2 >= 2 -> true

//true

deckOfCards([1,1,1,2,2,2,3,3]); //false - no possible partition
//map = {
//  1: 3,
//  2: 3,   
//  3: 2
//}

//groups = [3, 3, 2]
//          ^
//        group

//i = 1 -> group = gcd(3, 3)
//gcd(3, 3): num1 = 3 -> 3
//           num2 = 3 -> 0
//           div = 3 % 3 = 0
//3 > 2 -> true

//i = 2 -> group = gcd(3, 2)
//gcd(3, 2): num1 = 3 -> 2 -> 1
//           num2 = 2 -> 1 -> 0
//           div = 3 % 2 = 1 || 2 % 1 = 0
//1 < 2 -> false

//false
