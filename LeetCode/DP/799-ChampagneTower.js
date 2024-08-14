//799. Champagne Tower
//we stack glasses in a pyramid - where the first row has 1 glass, the second row has 2 glasses and so on until the 100th row
//each glass holds one cup of champagne

//then, some chamgpane is poured into the first glass at the top
//when the topmost glass is full, any excess liquid poured withh fall equally to the flass immdediately to the left and right of it
//when those glasses become full, any excess chamgpagne will fail equally to the left and right of those glasses and so on
//A glass at the bottom row has its excess champagne fall on the floor

//for example,
//after one cup of champagne is poured, the top most glass is full
//after two cups of champagne are poured, the two glasses on the second row are half full
//after three cups of champagne are poured, those two cups become full - there are 3 full glasses total now
//after four cups of champagne are poured, the third row has the middle glass half full, and the two outside glasses are a quarter full

//now after pouring some non-negative integer cups of champagne
//return how full the j_th glass is the i_th row is (both i and j are 0-indexed)

//Approach:
//using DP with 2D array
var champagneTower = (poured, query_row, query_glass) => {
    //dp
    let tower = new Array(query_row + 1).fill(0).map(() => new Array(query_row + 1).fill(0));

    //base case
    tower[0][0] = poured;

    //traversing
    for (let row = 0; row < query_row; row++) {
        for (let glass = 0; glass <= row; glass) {
            //overflow formula
            let overflow = (tower[row][glass] - 1) / 2.0;

            //overflow to left and right
            if (overflow > 0) {
                tower[row + 1][glass] += overflow;
                tower[row + 1][glass + 1] += overflow;
            }
        }
    }

    return Math.min(1, tower[query_row][query_glass]); //cannot be more than 1
}
champagneTower(2,1,1); //0.50000
//We poured 2 cups of champange to the top glass of the tower (which is indexed as (0, 0))
//There is one cup of excess liquid. The glass indexed as (1, 0) and the glass indexed as (1, 1) will share the excess liquid equally, and each will get half cup of champange

//tower = [0, 0]   ->  [2, 0] 
//        [0, 0]       [0, 0] 

//row = 0, glass = 0
//overflow = (tower[0][0] - 1) / 2.0 = 0.5
//tower = [2,     0]
//        [0.5, 0.5]

//min(1, tower[1][1]) = (1, 0.5) = 0.5

champagneTower(1,1,1); //0.00000
//We poured 1 cup of champange to the top glass of the tower (which is indexed as (0, 0))
//There will be no excess liquid so all the glasses under the top glass will remain empty

//tower = [1, 0]
//        [0, 0]

champagneTower(100000009, 33, 17); //1.00000
