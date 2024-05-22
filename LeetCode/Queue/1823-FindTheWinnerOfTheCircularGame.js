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
//using Queue approach - FIFO
//shift off the first element and add to the end
//.shift() - remove the first element from the queue
//.push() - add the element at then end
var circularGame = (n, k) => {
    //create a queue
    let queue = [];

    //populating queue with the number of friends
    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }

    while (queue.length > 1) {
        //set the goal to remove
        let toRemove = k - 1;

        //shift off the queue
        while (toRemove > 0) {
            //add the first element that shift off from the queue at the end
            queue.push(queue.shift());

            //decrement toRemove
            toRemove--;
        }
        //remove the current friend from the queue - the first element
        queue.shift();
    }
    return queue.shift();
}
circularGame(5, 2); //3
//[1, 2, 3, 4, 5] - shift 1 and add to the end
//[2, 3, 4, 5, 1] - removing the first value within the queue
//[3, 4, 5, 1] - move along by k-1 friends and shift to the end
//[4, 5, 1, 3] - removing the first value within the queue
//[5, 1, 3] - move along by k-1 friends and shift to the end
//[1, 3, 5] - removing the first value within the queue
//[3, 5] - move along by k-1 friends and shift to the end
//[5, 3] - removing the first value within the queue
//[3]

circularGame(6, 5); //1
//The friends leave in this order: 5, 4, 6, 2, 3. The winner is friend 1.
//[1, 2, 3, 4, 5, 6] - shift 4 and add to the end
//[1, 2, 3, 5, 6, 4] - removing the fourth value within the queue '5'
//[1, 2, 3, 6, 4] - move along by k-1 friends and shift to the end
//[1, 2, 3, 4, 6] - removing the fourth value within the queue '4'
//[1, 2, 3, 6] - move along by k-1 friends and shift to the end
//[1, 2, 3] - removing the fourth value within the queue '6'
