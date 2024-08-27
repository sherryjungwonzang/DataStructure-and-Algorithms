//134. Gas Station
//There are n gas stations along a circular route, where the amount of gas at the i_th station is gas[i]
//you have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the i_th station to its next station (i + 1)_th station
//you begin the journey with an empty tank at one of the gas stations

//given two integer arrays 'gas' and 'cost'
//return the starting gas station's index if you can travel around the circuit once in the clockwise directions
//otherwise, return -1

//Approach:
//using Greedy algorithm
var gasStation = (gas, cost) => {
    let currTank = 0;
    let totalTank = 0;
    let station = 0;

    for (let i = 0; i < gas.length; i++) {
        currTank += gas[i] - cost[i];
        totalTank += gas[i] - cost[i];

        if (currTank < 0) {
            currTank = 0; //reset the curr gas
            station = i + 1; //updating the start index to the next station
        }
    }

    return totalTank < 0 ? -1 : station;
}
gasStation(gas = [1,2,3,4,5], cost = [3,4,5,1,2]); //3
//Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
//Travel to station 4. Your tank = 4 - 1 + 5 = 8
//Travel to station 0. Your tank = 8 - 2 + 1 = 7
//Travel to station 1. Your tank = 7 - 3 + 2 = 6
//Travel to station 2. Your tank = 6 - 4 + 3 = 5
//Travel to station 3. The cost is 5. Your gas is just enough to travel back to station 3

//gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
//       ^                       ^
//currTank = 0 -> -2
//totalTank = 0 -> -2
//currTank < 0 -> reset 0
//currTank = 0 -> -2 -> 0
//station = 0 -> 1

//gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
//          ^                       ^
//currTank = 0 -> -2 -> 0 -> -2
//totalTank = 0 -> -2 -> -4
//currTank < 0 -> reset 0
//currTank = 0 -> -2 -> 0 -> -2 -> 0
//station = 0 -> 1 -> 2

//gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
//             ^                       ^
//currTank = 0 -> -2 -> 0 -> -2 -> 0 -> -2
//totalTank = 0 -> -2 -> -4 -> -6
//currTank < 0 -> reset 0
//currTank = 0 -> -2 -> 0 -> -2 -> 0 -> -2 -> 0
//station = 0 -> 1 -> 2 -> 3

//gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
//                ^                       ^
//currTank = 0 -> -2 -> 0 -> -2 -> 0 -> -2 -> 0 -> 3
//totalTank = 0 -> -2 -> -4 -> -6 -> -3

//gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
//                   ^                       ^
//currTank = 0 -> -2 -> 0 -> -2 -> 0 -> -2 -> 0 -> 3 -> 6
//totalTank = 0 -> -2 -> -4 -> -6 -> -3 -> 0

//totalTank = 0 -> return station

gasStation(gas = [2,3,4], cost = [3,4,3]); //-1
//You can't start at station 0 or 1, as there is not enough gas to travel to the next station
//Let's start at station 2 and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
//Travel to station 0. Your tank = 4 - 3 + 2 = 3
//Travel to station 1. Your tank = 3 - 3 + 3 = 3
//You cannot travel back to station 2, as it requires 4 unit of gas but you only have 3

//gas = [2, 3, 4], cost = [3, 4, 3]
//       ^                 ^
//currTank = 0 -> -1
//totalTank = 0 -> -1
//currTank < 0 -> reset 0
//currTank = 0 -> -1 -> 0
//station = 0 -> 1

//gas = [2, 3, 4], cost = [3, 4, 3]
//          ^                 ^
//currTank = 0 -> -1 -> 0 -> -1
//totalTank = 0 -> -1 -> -2
//currTank < 0 -> reset 0
//currTank = 0 -> -1 -> 0 -> -1 -> 0
//station = 0 -> 1 -> 2

//gas = [2, 3, 4], cost = [3, 4, 3]
//             ^                 ^
//currTank = 0 -> -1 -> 0 -> -1 -> 0 -> 1
//totalTank = 0 -> -1 -> -2 -> -1
//station = 0 -> 1 -> 2

//totalTank < 0 -> return -1



