//948. Bag Of Tokens
//you start with an initial power of 'power', an initial score of 0 and a bag of tokens given as an integer array 'tokens'
//where each tokens[i] denotes the value of token

//goal is to maximize the total score by strategically playing these tokens
//in one move, you can play an unplayed toekn in one of the two ways - but not both for the same token

//face-up: if your current power is at least tokens[i], you may play toekn, losing tokens[i] power and gaining score 1
//face-down: if your current score is at least 1, you may play token, gaining tokens[i] power and losing score 1
//return the max possible score you can achieve after playing any number of tokens

//Approach:
//using two pointers
var bagOfTokens = (tokens, power) => {
    //sorting
    tokens.sort((a, b) => a - b);

    let score = 0;
    let maxScore = 0;
    let left = 0;
    let right = tokens.length - 1;

    //two pointers
    while (left <= right) {
        if (power >= tokens[left]) { //face-up - token exchange
            power -= tokens[left];
            score++;
            left++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) { //face-down 0 not sufficient for the token - reverse token
            power += tokens[right];
            score--;
            right--;
        } else {
            break;
        }
    }

    return maxScore;
}
bagOfTokens([100,200,300,400], 200); //2
//Play the tokens in this order to get a score of 2:
//Play token0 (100) face-up, reducing power to 100 and increasing score to 1
//Play token3 (400) face-down, increasing power to 500 and reducing score to 0
//Play token1 (200) face-up, reducing power to 300 and increasing score to 1
//Play token2 (300) face-up, reducing power to 0 and increasing score to 2
//The maximum score achievable is 2

//sorting: [100, 200, 300, 400]
//           L              R
//power = 200
//score = 0
//maxScore = 0

//power > left -> power - 100
//power = 200 -> 100
//score = 0 -> 1
//maxScore 0 -> (0, 1) = 1

//[100, 200, 300, 400]
//       L         R
//score > 1 @ power is not greater than left
//power + right - 100 + 400 = 500
//power = 200 -> 100 -> 500
//score = 0 -> 1 -> 0

//[100, 200, 300, 400]
//       L    R
//power > left
//power = 200 -> 100 -> 500 -> 500 - 200 = 300
//score = 0 -> 1 -> 0 -> 1
//maxScore 0 -> (0, 1) = 1 -> (1, 1) = 1

//[100, 200, 300, 400]
//            LR
//score > 0 and power is greater than left
//power = 200 -> 100 -> 500 -> 300 -> 300 - 300 = 0
//score = 0 -> 1 -> 0 -> 1 -> 2
//maxScore 0 -> (0, 1) = 1 -> (1, 1) = 1 -> (1, 2) = 2

bagOfTokens([200, 100], 150); //1
// Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1
//There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1

//sorting: [100, 200]
//          L     R
//power = 150
//score = 0
//maxScore = 0

//power is greater than left
//power = 150 -> 150 - 100 = 50
//score = 0 -> 1
//maxScore = 0 -> (0, 1) = 1

//[100, 200]
//      LR
//score > 0
//power = 150 -> 50 -> 50 + 200 = 250
//score = 0 -> 1 -> 0

//[100, 200]
//  R    L -> break

bagOfTokens([100], 50); //0 - Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0] (100)
