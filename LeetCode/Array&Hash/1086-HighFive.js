//1086. High Five
//given a list of the scores of different students, 'items'
//where items[i] = [ID_i, score_i] represents one score from a student with ID_i
//calculate each student's top five average

//return the answer as an array of pairs 'result'
//where result[j] = [ID_j, topFiveAverage_j] represents the student with ID_j and their top five scores
//and dividing it by 5 using integer division

//Approach:
//using frequency map and Object.keys
var highFive = (items) => {
    //creating freq map
    let scoresMap = {};

    for (let [id, score] of items) {
        //filling the freq map
        if (!scoresMap[id]) { //not containing the id
            scoresMap[id] = [score];
        } else {
            scoresMap[id].push(score);
        }
    }

    //setting res array
    let res = [];

    //looping through the keys of object - Object.keys()
    Object.keys(scoresMap).map((key) => {
        //extracting key values of objects
        let values = scoresMap[key];

        //sorting values in descending order
        values = values.sort((a, b) => b - a);

        //declaring the top five values
        let topFive = 0;

        //looping through values to find top five
        for (let i = 0; i < 5; i++) {
            topFive += values[i];
        }

        //setting the average values of topFive
        let avg = Math.floor(topFive / 5);

        res.push([key, avg]);
    });
    return res;
}
highFive([ [1,91], [1,92], [2,93], [2,97], [1,60], [2,77], [1,65], [1, 87], [1,100], [2,100], [2,76] ]); //[ [1,87], [2,88] ]
//student with ID=1 got scores 91, 92, 60, 65, 87, 100
//their top five average is (100 + 92 + 91 + 87 + 65) / 5 = 87
//student with ID=2 got scores 93, 97, 77, 76, 100
//their top five average is (100 + 97 + 93 + 77 + 76) / 5 = 88.6
//with integer division their average converts to 88
