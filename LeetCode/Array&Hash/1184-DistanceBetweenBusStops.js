//1184. Distance Between Bus Stops
//a bus has n stops numbered from 0 to n - 1 that form a circle
//we know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n
//the bus goes along both directions i.e. clockwise and counterclockwise
//return the shortest distance between the given start and destination stops
var distanceBusStops = (distance, start, destination) => {
    //base case
    if (start > destination) [start, destination] = [destination, start];

    let total = distance.reduce((a, b) => a + b);
    let route = distance.slice(start, destination).reduce((a, b) => a + b);

    //compare shortest
    return Math.min(route, total - route);
}
distanceBusStops(distance = [1,2,3,4], start = 0, destination = 1); //1
//  0 ------ 1
//  |        |
//  |        |
//  3 ------ 2

//total = 1 + 2 + 3 + 4 = 10
//route = slice(0, 1) = 1
//total - route = 10 - 1 = 9
//min(1, 9) = 1

distanceBusStops(distance = [1,2,3,4], start = 0, destination = 2); //3
//  0 ------ 1
//  |        |
//  |        |
//  3 ------ 2

//total = 1 + 2 + 3 + 4 = 10
//route = slice(0, 2) = 1 + 2 = 3
//total - route = 10 - 3 = 7
//min(3, 7) = 3

distanceBusStops(distance = [1,2,3,4], start = 0, destination = 3); //4
//  0 ------ 1
//  |        |
//  |        |
//  3 ------ 2

//total = 1 + 2 + 3 + 4 = 10
//route = slice(0, 3) = 1 + 2 + 3 = 6
//total - route = 10 - 6 = 4
//min(6, 4) = 4
