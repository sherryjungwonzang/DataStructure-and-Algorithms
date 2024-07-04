//2125. Number Of Laser Beams In A Bank
//anti-theft security devices are activated inside a bank
//given a 0-indexed binary string array 'bank' -  representing the floor plan of tha bank, which is an m x n 2D matrix
//bank[i] represents the i_th row, consisting of '0's and '1's
//'0' means the cell is empty, while '1' means the cell has a security device

//there is a one laser beam between any two security devices if both conditions are met:
//the two devices are located on two different rows: r1 and r2 - r1 < r2
//for each row i where r1 < i < r2 - there are no security devices in the i_th row

//laser beams are independent
//return the total number of laser beams in the bank
var laserBeams = (bank) => {
    let m = bank.length;
    let n = bank[0].length;
    let curr = 0;
    let prev = 0;
    let total = 0;

    //iterating row
    for (let i = 0; i < m; i++) {
        curr = 0; //reset the count of devices for each row

        //iterating col
        for (let j = 0; j < n; j++) {
            if (bank[i][j] === "1") curr++; //collecting the num of security devices
        }

        //if there is security devices in curr row
        if (curr !== 0) {
            total += curr * prev;
            prev = curr;
        }
    }
    return total;
}
laserBeams(bank = ["011001","000000","010100","001000"]); //8
//* bank[0][1] -- bank[2][1]
//* bank[0][1] -- bank[2][3]
//* bank[0][2] -- bank[2][1]
//* bank[0][2] -- bank[2][3]
//* bank[0][5] -- bank[2][1]
//* bank[0][5] -- bank[2][3]
//* bank[2][1] -- bank[3][2]
//* bank[2][3] -- bank[3][2]

laserBeams(bank = ["000","111","000"]); //0

