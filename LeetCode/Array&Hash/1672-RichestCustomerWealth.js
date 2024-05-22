//1672. Richest Customer Wealth
//given an m x n integer grid 'accounts'
//where accounts[i][j] is the amount of money the i_th customer has in the j_th bank
//return the wealth that the richest customer has

//a customer's wealth is the amount of money they have in all their bank accounts
//the richest customer is the customer that has the max wealth
var richestWealth = (accounts) => {
    let wealth = 0; //updating wealth with sum 

    for (let total of accounts) {
        let currWealth = sum(total);
        wealth = Math.max(wealth, currWealth);
    }

    //helper function for calculating sum
    function sum (arr) {
        let sum = 0;

        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    };

    return wealth;
}
richestWealth([[1,2,3],[3,2,1]]); //6
//Both customers are considered the richest with a wealth of 6 each, so return 6

richestWealth([[1,5],[7,3],[3,5]]); //10

richestWealth([[2,8,7],[7,1,3],[1,9,5]]); //17
