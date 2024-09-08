//492. Construct The Rectangle
//a web developer needs to know how to design a web page's size
//so, given a specific rectangular web page's area, your job by now is to design a rectangular web pages,
//whose length L and width W satisfy the following requirements:
//1. the area of the rectangular web page you designed must equal to the given target area
//2. the width W should not be larger than the length L, which means L >= W
//3. difference between length L and width W are the length and width of the web page you designed in sequence
//return an array [L, W] where L an W are the length and width of the web page you designed in sequence
var constructRectangle = (area) => {
    let mid = Math.floor(Math.sqrt(area));

    while (mid !== 1) {
        if (area % mid === 0) return [area / mid, mid];

        mid--;
    }

    return [area, 1];
}
constructRectangle(4); //[2, 2] - all the possible ways to construct it are [1,4], [2,2], [4,1]
//mid = floor(sqrt(4)) = 2
//4 % 2 = 0 -> [4 / 2, 2] = [2, 2]

constructRectangle(37); //[37, 1]
//mid = floor(sqrt(37)) = 6
//37 % 6 = 1 -> [37, 1]

constructRectangle(122122); //[427, 286]
