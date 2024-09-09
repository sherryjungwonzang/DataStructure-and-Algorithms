//860. Lemonade Change
//at a lemonade stand, each lemonade costs $5
//customers are standing in a queue to buy from you and order one at a time - in the order specified by bills
//each customer will only buy ony lemonade and pay with either $5, $10, or $20 bill
//you must provide the correct change to each customer so that the net transaction is that the customer pays $5
//you do not have any change in hand at first
//given an integer array bills where bills[i] is the bill the i_th customer pays
//return true if you can provide every customer with the correct change or false otherwise

//Approach:
//using greedy algorithm
var lemonadeChange = (bills) => {
    //collecting dollars - $5, $10
    let five = 0;
    let ten = 0;

    for (let bill of bills) {
        //$5
        if (bill === 5) five++;

        //$10
        else if (bill === 10) {
            if (five >= 1) {
                five--;
                ten++;
            }
            else return false;
        }

        //$20
        else {
            if (five >= 1 && ten >= 1) {
                ten--;
                five--;
            }
            else if (five >= 3) five -= 3; //change three $5 to $20
            else return false;
        }
    }

    return true;
}
//TC: O(n)
//SC: O(1)
lemonadeChange([5, 5, 5, 10, 20]); //true
//[5, 5, 5, 10, 20]
// ^  ^  ^
//five = 0 -> 1 -> 2 -> 3
//ten = 0

//[5, 5, 5, 10, 20]
//           ^
//five = 0 -> 1 -> 2 -> 3 -> 2
//ten = 0 -> 1
//receive $10 and give $5

//[5, 5, 5, 10, 20]
//               ^
//five = 0 -> 1 -> 2 -> 3 -> 2 -> 1
//ten = 0 -> 1 -> 0
//receive $20 and give $5 and $10

lemonadeChange([5,5,10,10,20]); //false
//[5, 5, 10, 10, 20]
// ^  ^ 
//five = 0 -> 1 -> 2
//ten = 0

//[5, 5, 10, 10, 20]
//        ^ 
//five = 0 -> 1 -> 2 -> 1
//ten = 0 -> 1
//receive $10 and give $5

//[5, 5, 10, 10, 20]
//            ^ 
//five = 0 -> 1 -> 2 -> 1 -> 0
//ten = 0 -> 1 -> 2
//receive $10 and give $5

//[5, 5, 10, 10, 20]
//                ^ 
//five = 0 -> 1 -> 2 -> 1 -> 0
//ten = 0 -> 1 -> 2
//only two $10 left and not enough as change
