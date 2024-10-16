//2591. Distribute Money To Maximum Children
//given an integer money denoting the amount of money (in dollars) that you have and another integer children denoting the number of children that you must distribute the money to
//you have to distribute the money according to the following rules:
//all money must be distributed
//everyone must receive at least 1 dollar
//nobody receives 4 dollars
//return the maximum number of children who may receive exactly 8 dollars if you distribute the money according to the aforementioned rules
//if there is no way to distribute the money, return -1

//Approach:
//using Greedy algorithm
var distributeMoney = (money, children) => {
    let res = -1;

    //distribution
    for (let i = 0; i <= Math.floor(money / 8) && i <= children; i++) {
        let restMoney = money - i * 8;
        let restChildren = children - i;

        //done with distribution
        if (restMoney >= restChildren && !(restMoney === 4 && restChildren === 1) && !(restMoney > 0 && restChildren === 0)) res = i;
    }

    return res;
}
distributeMoney(money = 20, children = 3); //1
//i = 0 -> money = 20 - 0 * 8 = 20
//         children = 3 - 0 = 3

//i = 1 -> money = 20 - 1 * 8 = 12
//         children = 3 - 1 = 2

//i = 2 -> money = 20 - 2 * 8 = 4
//         children = 3 - 2 = 1
//money left 4 and not allowable to receive 4 -> res = 0 -> 1

distributeMoney(money = 16, children = 2); //2
//i = 0 -> money = 16 - 0 * 8 = 16
//         children = 2 - 0 = 2

//i = 1 -> money = 16 - 1 * 8 = 8
//         children = 2 - 1 = 1

//i = 2 -> money = 16 - 2 * 8 = 0
//         children = 2 - 2 = 0
//money left 0 and no children to distrubte -> res = 0 -> 2
