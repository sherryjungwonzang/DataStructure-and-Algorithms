//1823. Find the winner of the circular game
//there are 'n' frineds are playing a game
//the friends are sitting in a circle and are numbered from 1 to n in clockwise order
//more formally, moving clockwise from the i_th friend brings you to the (i + 1)_th friend for 1 <= i < n
//and moving clockwise from the n_th friend brings you to the 1st friend

//start at 1st friend
//count the next 'k' friend in the clockwise direction including the friend you started at
//the counting wraps around the circle and may count some friends more than once
//the last friend you counted leaves the circle and loses the game
//if there is still more thann one friend in the circle, go back to step2 starting from the friend immediately clockwise of the friend who just lost and repeat
//else, the last friend in the circle wins the game

//given the number of friends, 'n', and an integer 'k'
//return the winnder of the game

//Approach:
//using Queue with FIFO
var circularGame = (n, k) => {
    //create a queue - shift off the first element and add to the end
    let queue = [];

    //populating queue with the number of friends
    for (let i = 1; i <= n; i++) queue.push(i);

    //FIFO
    while (queue.length > 1) {
        let toRemove = k - 1; //the position needs to remove

        //shift off the queue
        while (toRemove > 0) {
            let curr = queue.shift();
            
            queue.push(curr); //add the first element that shift off from the queue at the end

            //decrement toRemove
            toRemove--;
        }
        
        queue.shift(); //remove the current friend from the queue - the first element
    }

    return queue.shift();
}
circularGame(5, 2); //3
//queue = [ ]
//populating the queue -> queue = [1, 2, 3, 4, 5]

//toRemove = 2 - 1 = 1
//curr = 1 -> queue = [2, 3, 4, 5, 1]
//toRemove = 2 - 1 = 1 -> 0
//shift: 2 -> queue = [3, 4, 5, 1]

//toRemove = 1
//curr = 3 -> queue = [4, 5, 1, 3]
//toRemove = 1 -> 0
//shift: 4 -> queue = [5, 1, 3]

//toRemove = 1
//curr = 5 -> queue = [1, 3, 5]
//toRemove = 1 -> 0
//shift: 1 -> queue = [3, 5]

//toRemove = 1
//curr = 3 -> queue = [5, 3]
//toRemove = 1 -> 0
//shift: 5 -> queue = [3]
//[3]

circularGame(6, 5); //1
//queue = [ ]
//populating the queue -> queue = [1, 2, 3, 4, 5, 6]

//toRemove = 5 - 1 = 4
//curr = 1 -> queue = [2, 3, 4, 5, 6, 1]
//toRemove = 4 -> 3
//curr = 2 -> queue = [3, 4, 5, 6, 1, 2]
//toRemove = 4 -> 3 -> 2
//curr = 3 -> queue = [4, 5, 6, 1, 2, 3]
//toRemove = 4 -> 3 -> 2 -> 1
//curr = 4 -> queue = [5, 6, 1, 2, 3, 4]
//toRemove = 4 -> 3 -> 2 -> 1 -> 0
//shift: 5 -> queue = [6, 1, 2, 3, 4]

//toRemove = 4
//curr = 6 -> queue = [1, 2, 3, 4, 6]
//toRemove = 4 -> 3
//curr = 1 -> queue = [2, 3, 4, 6, 1]
//toRemove = 4 -> 3 -> 2
//curr = 2 -> queue = [3, 4, 6, 1, 2]
//toRemove = 4 -> 3 -> 2 -> 1
//curr = 3 -> queue = [4, 6, 1, 2, 3]
//toRemove = 4 -> 3 -> 2 -> 1 -> 0
//shift: 4 -> queue = [6, 1, 2, 3]

//toRemove = 4
//curr = 6 -> queue = [1, 2, 3, 6]
//toRemove = 4 -> 3
//curr = 1 -> queue = [2, 3, 6, 1]
//toRemove = 4 -> 3 -> 2
//curr = 2 -> queue = [3, 6, 1, 2]
//toRemove = 4 -> 3 -> 2 -> 1
//curr = 3 -> queue = [6, 1, 2, 3]
//toRemove = 4 -> 3 -> 2 -> 1 -> 0
//shift: 6 -> queue = [1, 2, 3]

//[1]
