//904. Fruit into baskets
//you are visiting a farm that has a single row of fruit trees arranged from left to right
//the trees are represented by an integer array 'fruits' - where fruits[i] is the type of fruit the i_th tree produces

//want to collect as much fruit as possible
//the owner has some stritct rules that you must follow:

///only have two baskets and each basket can only hold a single type of fruit
//there is no limit on the amount of fruit each basket can hold
//starting from any tree of your choice, you must pick exactly one fruit from every tree(including the start tree) while moving to the right
//the picked fruits must for in one of your baskets
//once you reach a tree with fruit that cannot fit in your baskets, you must stop

//given the integer array 'fruits'
//return the max number of fruits you can pick

//Approach:
//using sliding window and map
var fruitsBaskets = (fruits) => {
    //base case
    let basketLimit = 2;
    if (!fruits || !fruits.length) return 0;
    if (fruits.length < basketLimit) return fruits.length;

    let total = 0;
    let currWindow = 0;
    let left = 0;
    let right = 0;
    let basket = new Map(); //using map for tracking fruits

    while(right < fruits.length) {
        //adding fruit into the basket
        basket.set(fruits[right], basket.get(fruits[right]) ? basket.get(fruits[right]) + 1 : 1);
        currWindow++; //increasing the window size

        //if window size oveflows 2 - need to shrink window from left side
        while(basket.size > basketLimit) {
            let leftFruit = fruits[left];
            let removedAmount = basket.get(leftFruit) - 1;

            //remove fruits from the basket
            if (removedAmount === 0) basket.delete(leftFruit);
            else basket.set(leftFruit, removedAmount);

            //shrinking currWindows and move slow pointer
            currWindow--;
            left++;
        }
        total = Math.max(currWindow, total);
        right++;
    }
    return total;
}
//TC: O(n)
//SC: O(1)
fruitsBaskets([1,2,1]); //3 - we can pick from all 3 trees

fruitsBaskets([0,1,2,2]); //3 - we can pick from trees [1,2,2]
//if we had started at the first tree, we would only pick from trees [0,1]

fruitsBaskets([1,2,3,2,2]); //4 - we can pick from trees [2,3,2,2]
//if we had start at the first tree, we would only pick frp, trees [1,2]
