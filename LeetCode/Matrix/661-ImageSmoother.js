//661. Image Smoother
//an image smoother is a filer of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells
//if one or more of the surrounding cells of a cell is not present, we do not consider it in the average

//given an m x n integer matrix img - representing the grayscale of an image
//return the image after applying the smoother on each cell of it
var imageSmoother = (img) => {
    let m = img.length; //row
    let n = img[0].length; //col
    let res = new Array(m).fill(0).map(() => new Array(n).fill(0)); //to collect new image

    //traversing
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let sum = 0;
            let count = 0;

            //iterating all valid indices
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    //valid neighbor
                    if (x >= 0 && x < m && y >= 0 && y < n) {
                        sum += img[x][y];

                        count += 1;
                    }
                }
            } 

            res[i][j] = Math.floor(sum / count); //average
        }
    }

    return res;
}
//TC: O(m x n)
//SC: O(m x n)
imageSmoother(img = [[100,200,100],[200,50,200],[100,200,100]]); //[[137,141,137],[141,138,141],[137,141,137]]
// 100 200 100      137 141 137
// 200 50  200  ->  141 138 141
// 100 200 100      137 141 137

//res = [ 0, 0, 0           [ 0, 0, 0
//        0, 0, 0     ->      0, 0, 0    
//        0, 0, 0 ]           0, 0, 0 ]

//i = 0, j = 0 -> x = -1 <= 1, y = -1 <= 1
//sum = 0 -> 100 -> 300 -> 500 -> 550
//count = 0 -> 1 ->  2 ->   3 ->   4
//x = 0 | 0 | 1 | 1
//y = 0 | 1 | 0 | 1
//avg = 550 / 4 = floor(137.5)

//i = 0, j = 1 -> x = -1 <= 1, y = 0 <= 2
//sum = 0 -> 100 -> 300 -> 400 -> 600 -> 650 -> 850
//count = 0 -> 1 ->  2 ->  3 ->   4 ->   5 ->    6
//x = 0 | 0 | 0 | 1 | 1 | 1
//y = 0 | 1 | 2 | 0 | 1 | 2
//avg = 850 / 6 = floor(141.6)

//i = 0, j = 2 -> x = -1 <= 1, y = 1 <= 3
//sum = 0 -> 200 -> 300 -> 350 -> 550
//count = 0 -> 1 ->  2 ->  3 ->   4 
//x = 0 | 0 | 1 | 1 
//y = 1 | 2 | 1 | 2 
//avg = 550 / 4 = floor(137.5)

//i = 1, j = 0 -> x = 0 <= 2, y = -1 <= 1
//sum = 0 -> 100 -> 300 -> 500 -> 550 -> 650 -> 850
//count = 0 -> 1 ->  2 ->  3 ->   4 ->   5 ->    6
//x = 0 | 0 | 1 | 1 | 2 | 2
//y = 0 | 1 | 0 | 1 | 0 | 1
//avg = 850 / 6 = floor(141.6)

//i = 1, j = 1 -> x = 0 <= 2, y = 0 <= 2
//sum = 0 -> 100 -> 300 -> 400 -> 600 -> 650 -> 850 -> 950 -> 1150 -> 1250
//count = 0 -> 1 ->  2 ->  3 ->   4 ->   5 ->    6 ->   7 ->   8 ->    9
//x = 0 | 0 | 0 | 1 | 1 | 1 | 2 | 2 | 2
//y = 0 | 1 | 2 | 0 | 1 | 2 | 0 | 1 | 2
//avg = 1250 / 9 = floor(138.8)

//i = 1, j = 2 -> x = 0 <= 2, y = 1 <= 3
//sum = 0 -> 200 -> 300 -> 350 -> 550 -> 750 -> 750
//count = 0 -> 1 ->  2 ->  3 ->   4 ->   5 ->    6
//x = 0 | 0 | 1 | 1 | 2 | 2
//y = 1 | 2 | 1 | 2 | 1 | 0
//avg = 850 / 6 = floor(141.6)

//i = 2, j = 0 -> x = 1 <= 3, y = -1 <= 0
//sum = 0 -> 200 -> 250 -> 350 -> 550
//count = 0 -> 1 ->  2 ->   3 ->   4
//x = 1 | 1 | 2 | 2
//y = 0 | 1 | 0 | 1
//avg = 550 / 4 = floor(137.5)

//i = 2, j = 1 -> x = 1 <= 3, y = 0 <= 2
//sum = 0 -> 200 -> 250 -> 450 -> 550 -> 750 -> 850
//count = 0 -> 1 ->  2 ->  3 ->   4 ->   5 ->    6
//x = 1 | 1 | 1 | 2 | 2 | 2
//y = 0 | 1 | 2 | 0 | 1 | 2
//avg = 850 / 6 = floor(141.6)

//i = 2, j = 2 -> x = 1 <= 3, y = 1 <= 3
//sum = 0 -> 50 -> 250 -> 450 -> 550
//count = 0 -> 1 ->  2 ->   3 ->   4
//x = 1 | 1 | 2 | 2
//y = 1 | 2 | 1 | 2
//avg = 550 / 4 = floor(137.5)

imageSmoother(img = [[1,1,1],[1,0,1],[1,1,1]]); //[[0,0,0],[0,0,0],[0,0,0]]
// 1 1 1     0 0 0
// 1 0 1  -> 0 0 0
// 1 1 1     0 0 0

