//832. Flipping An Image
//given an m x n binary matrix image
//flip the image horizontally, then invert it, and return the resulting image
//to flip an image horizontally means that each row of the image is reversed
//for example, flipping [1,1,0] horizontally results in [0,1,1]

//to invert an image means that each 0 is replaced by 1 and each 1 is replaced by 0
//for example, inverting [0,1,1] results in [1,0,0]

//Approach:
//using two pointers
var flippingAnImage = (image) => {
    for (let i = 0; i < image.length; i++) {
        //two pointers
        let left = 0;
        let right = image[i].length - 1;

        while (left <= right) {
            if (left === right) {
                image[i][left] = image[i][left] === 0 ? 1 : 0;
            } else {
                //flipping
                [image[i][left], image[i][right]] = [image[i][right], image[i][left]];
                image[i][left] = image[i][left] === 0 ? 1 : 0;
                image[i][right] = image[i][right] === 0 ? 1 : 0;
            }

            left++;
            right--;
        }
    }
    return image;
}
flippingAnImage(image = [[1,1,0],[1,0,1],[0,0,0]]); //[[1,0,0],[0,1,0],[1,1,1]]
//First reverse each row: [[0,1,1],[1,0,1],[0,0,0]]
//Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

//1 1 0     1 0 0
//1 0 1  -> 0 1 0
//0 0 0     1 1 1

flippingAnImage(image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]); //[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
//First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]
//Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

//1 1 0 0      1 1 0 0
//1 0 0 1      0 1 1 0
//0 1 1 1  ->  0 0 0 1
//1 0 1 0      1 0 1 0
