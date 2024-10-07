//812. Largest Triangle Area
//given an array of points on the X-Y plane points where points[i] = [x_i, y_i]
//return the area of the largest triangle that can be formed by any three different points
var largestTriangleArea = (points) => {
    let m = points.length;
    let maxArea = 0;

    //traversing three points
    for (let i = 0; i < m; i++) {
        for (let j = i + 1; j < m; j++) {
            for (let k = j + 1; k < m; k++) {
                let area = areaCalculation(points[i], points[j], points[k]);

                //updating
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    //calculating area
    function areaCalculation (a, b, c) {
        //setting x and y value
        let [xAreaA, yAreaA] = a;
        let [xAreaB, yAreaB] = b;
        let [xAreaC, yAreaC] = c;

        //calculating each area
        let areaA = xAreaA * (yAreaB - yAreaC); 
        let areaB = xAreaB * (yAreaC - yAreaA); 
        let areaC = xAreaC * (yAreaA - yAreaB); 

        return Math.abs((areaA + areaB + areaC) / 2);
    }

    return maxArea;
}
largestTriangleArea([[0,0],[0,1],[1,0],[0,2],[2,0]]); //2.00000
//[ [0,0], [0,1], [1,0], [0,2], [2,0] ]                         [ [0,0], [0,1], [1,0], [0,2], [2,0] ]
//    i      j      k                                                      i      j      k        
//areaA = 0 * (1 - 0) = 0                                       areaA = 0 * (0 - 2) = 0
//areaB = 0 * (0 - 0) = 0 -> abs(-1) / 2 = 0.5                  areaB = 1 * (1 - 2) = -1 -> abs(-1) / 2 = 0.5
//areaC = 1 * (0 - 1) = -1                                      areaC = 0 * (1 - 0) = 0
//maxArea = 0 -> 0.5                                            maxArea = 0 -> 0.5 -> 0.5 -> 1 -> 1 -> 1 -> 2 -> 2

//[ [0,0], [0,1], [1,0], [0,2], [2,0] ]                         [ [0,0], [0,1], [1,0], [0,2], [2,0] ]
//    i      j             k                                               i      j             k   
//areaA = 0 * (1 - 2) = 0                                       areaA = 0 * (0 - 0) = 0
//areaB = 0 * (0 - 2) = 0 -> abs(0) / 2 = 0                     areaB = 1 * (1 - 0) = 1 -> abs(3) / 2 = 1.5
//areaC = 0 * (0 - 1) = 0                                       areaC = 2 * (1 - 0) = 2 
//maxArea = 0 -> 0.5 -> 0.5                                     maxArea = 0 -> 0.5 -> 0.5 -> 1 -> 1 -> 1 -> 2 -> 2 -> 2

//[ [0,0], [0,1], [1,0], [0,2], [2,0] ]                         [ [0,0], [0,1], [1,0], [0,2], [2,0] ]
//    i      j                    k                                        i             j      k   
//areaA = 0 * (1 - 0) = 0                                       areaA = 1 * (2 - 0) = 2
//areaB = 0 * (0 - 0) = 0 -> abs(-2) / 2 = 1                    areaB = 0 * (0 - 0) = 0 -> abs(2 - 4) / 2 = 1
//areaC = 2 * (0 - 1) = -2                                      areaC = 2 * (0 - 2) = -4
//maxArea = 0 -> 0.5 -> 0.5 -> 1                                maxArea = 0 -> 0.5 -> 0.5 -> 1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2

//[ [0,0], [0,1], [1,0], [0,2], [2,0] ]                         [ [0,0], [0,1], [1,0], [0,2], [2,0] ]
//    i             j      k                                                      i      j      k   
//areaA = 0 * (0 - 2) = 0                                       areaA = 1 * (2 - 0) = 2
//areaB = 1 * (0 - 2) = 2 -> abs(2) / 2 = 1                     areaB = 1 * (0 - 0) = 0 -> abs(2 - 4) / 2 = 1
//areaC = 0 * (0 - 0) = 0                                       areaC = 2 * (0 - 2) = -4
//maxArea = 0 -> 0.5 -> 0.5 -> 1 -> 1                           maxArea = 0 -> 0.5 -> 0.5 -> 1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 2

//[ [0,0], [0,1], [1,0], [0,2], [2,0] ]
//    i             j             k
//areaA = 0 * (0 - 0) = 0
//areaB = 1 * (0 - 0) = 0 -> abs(0) / 2 = 0
//areaC = 2 * (0 - 0) = 0
//maxArea = 0 -> 0.5 -> 0.5 -> 1 -> 1 -> 1

//[ [0,0], [0,1], [1,0], [0,2], [2,0] ]
//    i                    j      k
//areaA = 0 * (2 - 0) = 0
//areaB = 1 * (0 - 0) = 0 -> abs(-4) / 2 = 2
//areaC = 2 * (0 - 2) = -4
//maxArea = 0 -> 0.5 -> 0.5 -> 1 -> 1 -> 1 -> 2

//2 - [0,0], [0,2], [2,0]

largestTriangleArea([[1,0],[0,0],[0,1]]); //0.50000
