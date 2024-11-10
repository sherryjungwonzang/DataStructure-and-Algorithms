//1518. Water Bottles
//there are numBottles water bottles that are initially full of water
//you can exchange numExchange empty water bottles from the market with one full water bottle
//the operation of drinking a full water bottle turns it into an empty bottle

//given the two integers numBottles and numExchange
//return the maximum number of water bottles you can drink
var waterBottles = (numBottles, numExchange) => {
    let emptyBottle = 0;
    let count = 0;

    while (numBottles) {
        //drinking full bottle
        count += numBottles;

        //filling empty bottle
        emptyBottle += numBottles;

        //exchanging empty bottles
        numBottles = Math.floor(emptyBottle / numExchange);

        //store non-exchanged bottles
        emptyBottle = emptyBottle % numExchange;
    }

    return count;
}
waterBottles(numBottles = 9, numExchange = 3); //13 - 9 + 3 + 1 = 13
//numBottles = 9        -----> count = 0 -> 9
//                             emptyBottle = 0 -> 9
//                             numBottles = 9 -> floor(9 / 3) = 3 -> can exchange 3 bottles
//                             emptyBottle = 9 % 3 = 0 -> there is no left empty bottles

//numBottles = 3        -----> count = 9 -> 12
//                             emptyBottle = 0 -> 3
//                             numBottles = 3 -> floor(3 / 3) = 1 -> can exchange 1 bottle
//                             emptyBottle = 3 % 3 = 0 -> there is no left empty bottles

//numBottles = 1        -----> count = 12 -> 13
//                             emptyBottle = 0 -> 1
//                             numBottles = 1 -> floor(1 / 3) = 0 -> can exchange 0 bottle
//                             emptyBottle = 1 % 3 = 0 -> there is no left empty bottles

//count = 13

waterBottles(numBottles = 15, numExchange = 4); //19 - 15 + 3 + 1 = 19
//numBottles = 15        -----> count = 0 -> 15
//                              emptyBottle = 0 -> 15
//                              numBottles = 15 -> floor(15 / 4) = 3 -> can exchange 3 bottles
//                              emptyBottle = 15 % 4 = 3 -> there are 3 left bottles

//numBottles = 3        -----> count = 15 -> 18
//                             emptyBottle = 3 -> 6
//                             numBottles = 6 -> floor(6 / 4) = 1 -> can exchange 1 bottle
//                             emptyBottle = 6 % 4 = 2 -> there are 2 left bottles

//numBottles = 1        -----> count = 18 -> 19
//                             emptyBottle = 2 -> 3
//                             numBottles = 2 -> floor(3 / 4) = 0 -> can exchange 0 bottle
//                             emptyBottle = 3 % 4 = 3 -> there are 3 left bottles

//count = 19


