//1700. Number Of Students Unable To Eat Lunch
//the school cafeteria offers circular and square sandwiches at lunch break - referred to by numbers 0 and 1 respectively
//all students stand in a queue
//each student either prefers square of circular sandwiches

//the number of sandwiches in the cafeteria is equal to the num of students
//the sandwiches are placed in a stack
//if the student at the front of the queue prefers the sanewich on the top of the stack, they will take it and leave the queue
//otherwise, they will leave it and go to the queue's end

//this continues until non of the queue students want to take the top sandwich and are thus unable to eat
//given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack 
//i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue)
//return the number of students that are unable to eat

//Approach:
//using queue
var unableToEachLunch = (students, sandwiches) => {
    let count = 0; //non taking sandwitches

    while (count < students.length && students.length) {
        //take sandwitch and leave the line
        if (students[0] === sandwiches[0]) {
            count = 0; //reset

            students.shift(); //leaving the queue
            sandwiches.shift(); //leaving the stack
        } else { //not taking sandwiches
            count++;

            //put student to the end of queue
            students.push(students.shift());
        }
    }

    return students.length;
}
unableToEachLunch(students = [1,1,0,0], sandwiches = [0,1,0,1]); //0
//count = 0

//students = [1, 1, 0, 0] || sandwiches = [0, 1, 0, 1]
//            ^                            ^            -> not taking
//count = 0 -> 1

//students = [1, 0, 0, 1] || sandwiches = [0, 1, 0, 1]
//            ^                            ^            -> not taking
//count = 0 -> 1 -> 2

//students = [0, 0, 1, 1] || sandwiches = [0, 1, 0, 1]
//            ^                            ^            -> taking
//count = 0 -> 1 -> 2 -> 0

//students = [0, 1, 1] || sandwiches = [1, 0, 1]
//            ^                         ^            -> not taking
//count = 0 -> 1 -> 2 -> 0 -> 1

//students = [1, 1, 0] || sandwiches = [1, 0, 1]
//            ^                         ^            -> taking
//count = 0 -> 1 -> 2 -> 0 -> 1 -> 0

//students = [1, 0] || sandwiches = [0, 1]
//            ^                      ^            -> not taking
//count = 0 -> 1 -> 2 -> 0 -> 1 -> 0 -> 1

//students = [0, 1] || sandwiches = [0, 1]
//            ^                      ^            -> taking
//count = 0 -> 1 -> 2 -> 0 -> 1 -> 0 -> 1 -> 0

//students = [1] || sandwiches = [1]
//            ^                   ^            -> taking
//count = 0 -> 1 -> 2 -> 0 -> 1 -> 0 -> 1 -> 0 -> 0

//students = [] || sandwiches = []
//all are able to eat

unableToEachLunch(students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]); //3
//count = 0

//students = [1, 1, 1, 0, 0, 1] || sandwiches = [1, 0, 0, 0, 1, 1]
//            ^                                  ^            ->  taking
//count = 0 -> 0

//students = [1, 1, 0, 0, 1] || sandwiches = [0, 0, 0, 1, 1]
//            ^                               ^            ->  not taking
//count = 0 -> 0 -> 1

//students = [1, 0, 0, 1, 1] || sandwiches = [0, 0, 0, 1, 1]
//            ^                               ^            ->  not taking
//count = 0 -> 0 -> 1 -> 2

//students = [0, 0, 1, 1, 1] || sandwiches = [0, 0, 0, 1, 1]
//            ^                               ^            ->   taking
//count = 0 -> 0 -> 1 -> 2 -> 0

//students = [0, 1, 1, 1] || sandwiches = [0, 0, 1, 1]
//            ^                            ^            ->   taking
//count = 0 -> 0 -> 1 -> 2 -> 0 -> 0

//students = [1, 1, 1] || sandwiches = [0, 1, 1]
//            ^                         ^            -> not taking
//count = 0 -> 0 -> 1 -> 2 -> 0 -> 0 -> 1

//students = [1, 1, 1] || sandwiches = [0, 1, 1]
//            ^                         ^            -> not taking
//count = 0 -> 0 -> 1 -> 2 -> 0 -> 0 -> 1 -> 2

//students = [1, 1, 1] || sandwiches = [0, 1, 1]
//            ^                         ^            -> not taking
//count = 0 -> 0 -> 1 -> 2 -> 0 -> 0 -> 1 -> 2 -> 3

//count = students length: infitnite loop
//3 are not able to eat lunch
