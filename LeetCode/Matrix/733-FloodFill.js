//733. Flood Fill
//an image is represented by an m x n integer grid 'image' - where image[i][j] represents the pixel value of the image
//also given three integers, sr, sc and color
//should perform a flood fill on the image starting from the pixel image[sr][sc]

//to perform a flood fill, consider the starting pixel
//plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel
//plus any pixels connected 4-directionally to those pixels also with the same color
//replace the color of all the aforementioned pixels with color

//return the modified image after performing the flood fill

//Approach:
//using DFS with recursive in all directions
var floodFill = (image, sr, sc, color) => {
    //startng point
    const startPoint = image[sr][sc];

    //DFS function - recursive call
    function recurse(image, sr, sc) {
        if (sr < 0 || sr > image.length - 1 || sc < 0 || sc > image[0].length - 1
            || image[sr][sc] !== startPoint || image[sr][sc] === color) return image; //no need to carry recursive calls

        //update value
        image[sr][sc] = color;

        //recursive call - four directions
        recurse(image, sr + 1, sc);
        recurse(image, sr - 1, sc);
        recurse(image, sr, sc + 1);
        recurse(image, sr, sc - 1);

        return image;
    }
    return recurse(image, sr, sc);
}
//TC: O(m * n) - loop through every position within boards
//SC: O(m * n)
floodFill([[1,1,1], [1,1,0], [1,0,1]], 1, 1, 2); //[[2,2,2], [2,2,0], [2,0,1]]
//From the center of the image with position (sr, sc) = (1, 1), all pixels connected by a path of the same color as the starting pixel are colored with the new color.
//Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

//1   1   1
//1   1   0 --> [sr][sc] = [1, 1]
//1   0   1
//original = 1
//color = 2
//checking all 4 directions and only move to '1' and change it to 2

floodFill([[0,0,0],[0,0,0]], 0, 0, 0); //[[0,0,0],[0,0,0]] - the starting pixel is already colored 0, so no changes are made to the image.
//0   0   0 --> [sr][sc] = [0, 0]
//0   0   0 
//0   0   0
//original = 0
//color = 0
//already everything is set to 0 -> so nothing has changed
