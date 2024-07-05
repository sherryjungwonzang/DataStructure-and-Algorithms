//441. Arranging Coins
//you have n coins and you want to build a staircase with these coins
//the staircase consists of 'k' rows where the i_th row has exactly i coins
//the last row of the staircase may be incomplete

//given the integer 'n'
//return the number of complete rows of the staircase you will build
var arrangingCoins = (n) => {
    let stairs = 0;

    while (stairs <= n) {
        n -= stairs;
        stairs++;
    }

    return stairs - 1;
}
arrangingCoins(5); //2 - Because the 3rd row is incomplete, we return 2
//$
//$ $
//$ $ _

//stairs = 0 || n = 5
//         1        5
//         2        4
//         3        2
//stairs - 1 = 2

arrangingCoins(8); //3 - Because the 4th row is incomplete, we return 3
//$
//$ $
//$ $ $
//$ $ _ _

//stairs = 0 || n = 8
//         1        8
//         2        7
//         3        5
//         4        1

//stairs - 1 = 3
