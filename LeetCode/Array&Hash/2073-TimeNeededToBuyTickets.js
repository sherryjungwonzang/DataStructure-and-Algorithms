//2073. Time Needed To Buy Tickets
//there are n people in a line queing to buy tickets, where the 0th person is at the front of the line
//and the (n - 1)th person is at the back of the line
//given a 0-indexed integer array tickets of lenth n where the number of tickets that the i_th person would like to buy is tickets[i]

//each person takes exactly 1 second to buy a ticket
//a person can only buy 1 ticket at a time and has to go back to the end of the line in order to buy more tickets
//if a person does not have any tickets left to buy, the person will leave the line
//return the time taken for the person at position k to finish buying tickets
var timeBuyTickets = (tickets, k) => {
    let time = 0;

    while (tickets[k] !== 0) { //if [k] = 0, meaning took tickes
        for (let i = 0; i < tickets.length; i++) {
            //took tickes
            if (tickets[k] === 0) return time;

            if (tickets[i] !== 0) {
                tickets[i] = tickets[i] - 1; //buying ticket

                time++;
            }
        }
    }

    return time;
}
timeBuyTickets([2,3,2], 2); //6
//In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1]
//In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0]
//The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds

//[2] != 0 -> still tickets are there
//[2, 3, 2] ------------------------------>  [1, 3, 2]  ------------------------------> [1, 2, 1]
// ^                                             ^                                             ^
//i = 0 -> tickets[0] = 2                   i = 1 -> tickets[1] = 3                     i = 2 -> tickets[2] = 2
//buying ticket -> tickets[0] = 2 -> 1      buying ticket -> tickets[1] = 3 -> 2        buying ticket -> tickets[2] = 2 -> 1
//time = 0 -> 1                             -> 2                                        -> 3
//first round is done

//second round starts
//[2] != 0 -> still tickets are there
//[1, 2, 1] ------------------------------>  [0, 2, 1]  ------------------------------> [0, 1, 1]
// ^                                             ^                                             ^
//i = 0 -> tickets[0] = 1                   i = 1 -> tickets[1] = 2                     i = 2 -> tickets[2] = 1
//buying ticket -> tickets[0] = 1 -> 0      buying ticket -> tickets[1] = 2 -> 1        buying ticket -> tickets[2] = 1 -> 0
//time = 3 -> 4                             -> 5                                        -> 6

//[0, 1, 0] -> [2] does not have tickets anymore
//time = 6

timeBuyTickets([5,1,1,1], 0); //8
//In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0]
//In the next 4 passes, only the person in position 0 is buying tickets
//The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds

//[0] != 0 -> still tickets are there
//[5, 1, 1, 1] ------------------------------>  [4, 1, 1, 1]  ------------------------------> [4, 0, 1, 1] ------------------------------> [4, 0, 0, 1]
// ^                                                ^                                                ^                                               ^
//i = 0 -> tickets[0] = 5                   i = 1 -> tickets[1] = 1                         i = 2 -> tickets[2] = 1                         i = 2 -> tickets[3] = 1
//buying ticket -> tickets[0] = 5 -> 4      buying ticket -> tickets[1] = 1 -> 0            buying ticket -> tickets[2] = 1 -> 0            buying ticket -> tickets[3] = 1 -> 0
//time = 0 -> 1                             -> 2                                            -> 3                                            -> 4
//first round is done

//second round starts
//[4, 0, 0, 0] ------------------------------>  [3, 0, 0, 0]  ------------------------------> [3, 0, 0, 0] ------------------------------> [3, 0, 0, 0]
// ^                                                ^                                                ^                                               ^
//i = 0 -> tickets[0] = 4                       no ticket remains                             no ticket remains                             no ticket remains
//buying ticket -> tickets[0] = 4 -> 3              
//time = 4 -> 5     

//third round starts
//[3, 0, 0, 0] ------------------------------>  [3, 0, 0, 0]  ------------------------------> [3, 0, 0, 0] ------------------------------> [3, 0, 0, 0]
// ^                                                ^                                                ^                                               ^
//i = 0 -> tickets[0] = 3                       no ticket remains                             no ticket remains                             no ticket remains
//buying ticket -> tickets[0] = 3 -> 2              
//time = 5 -> 6  

//fourth round starts
//[2, 0, 0, 0] ------------------------------>  [3, 0, 0, 0]  ------------------------------> [3, 0, 0, 0] ------------------------------> [3, 0, 0, 0]
// ^                                                ^                                                ^                                               ^
//i = 0 -> tickets[0] = 2                       no ticket remains                             no ticket remains                             no ticket remains
//buying ticket -> tickets[0] = 2 -> 1
//time = 6 -> 7  

//fifth round starts
//[1, 0, 0, 0] ------------------------------>  [3, 0, 0, 0]  ------------------------------> [3, 0, 0, 0] ------------------------------> [3, 0, 0, 0]
// ^                                                ^                                                ^                                               ^
//i = 0 -> tickets[0] = 1                       no ticket remains                             no ticket remains                             no ticket remains
//buying ticket -> tickets[0] = 1 -> 0
//time = 7 -> 8  

//[0, 0, 0, 0] -> [0] does not have tickets anymore
//time = 8
