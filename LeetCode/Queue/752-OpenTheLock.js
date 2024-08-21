//752. Open the lock
//you have a lock in front of you with 4 circular wheels
//each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
//the wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'
//each move consists of turning one wheel one slot

//the lock initially starts at '0000' - a string representing the state of the 4 wheels
//you are given a list of 'deadends' dead ends, meaning if the lock displays any of these codes
//the wheels of the lock will stop turning and you will be unable to open it

//given a 'target' representing the value of the wheels that will unlock the lock
//return the minimum total number of turns required to open the lock
//or -1 if it is impossible

//Approach:
//using queue with BFS
var openLock = (deadends, target) => {
    //variables
    let deadendSet = new Set(deadends);
    let visited = new Set(["0000"]);
    let queue = [["0000", 0]];

    //BFS
    while (queue.length) {
        //extracting curr combination by shift()
        let [curr, count] = queue.shift();

        if (curr === target) return count;
        if (deadendSet.has(curr)) continue;

        //create all possible combinations - move one wheel, one slot at a time
        for (let combo of possibleCombo(curr)) {
            if (!visited.has(combo)) {
                visited.add(combo);
                queue.push([combo, count + 1]);
            }
        }
    }

    //possible turns starting from 1000, 0100, 0010, 0001, 9000, 0900, 0090, 0009
    function possibleCombo(str) {
        //to store all combinations
        let ans = [];

        for (let i = 0; i < str.length; i++) {
            //slice, combine and do modulo
            //converting string to integer -> '+'
            ans.push(str.slice(0, i) + ((+str[i] + 1) % 10) + str.slice(i + 1)); //forwards
            ans.push(str.slice(0, i) + ((+str[i] + 9) % 10) + str.slice(i + 1)); //backwards
        }

        return ans;
    };

    return -1;
}

openLock(["0201","0101","0102","1212","2002"], "0202"); //6 
//A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
//Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
//because the wheels of the lock become stuck after the display becomes the dead end "0102"

openLock([["8888"], "0009"]); //1
//We can turn the last wheel in reverse to move from "0000" -> "0009"
