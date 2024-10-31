//1103. Distribute Candies To People
//we distribute some number of candies, to a row of n = num_people people in the following way:
//we then give 1 candy to the first person, 2 candies to the second person, and so on until we give n candies to the last person
//then, we go back to the start of the row, giving n + 1 candies to the first person, n + 2 candies to the second person, and so on until we give 2 * n candies to the last person
//this process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies
//the last person will receive all of our remaining candies (not necessarily one more than the previous gift)
//return an array (of length num_people and sum candies) that represents the final distribution of candies
var distributeCandies = (candies, num_people) => {
    let res = new Array(num_people).fill(0);
    let candy = 1;

    //distributing
    while (candies > 0) {
        //if candies left, start again from the first person
        for (let i = 0; i < num_people && candies > 0; i++) {
            res[i] += Math.min(candy, candies);

            //reducing from the total candies
            candies -= candy;

            candy++;
        }
    }

    return res;
}
distributeCandies(candies = 7, num_people = 4); //[1,2,3,1]
//candies = 7
//candy = 1
//res = [0, 0, 0, 0]

//i = 0 -> min(1, 7) = 1
//res = [1, 0, 0, 0]
//candies = 7 -> 6
//candy = 1 -> 2

//i = 1 -> min(2, 6) = 2
//res = [1, 2, 0, 0]
//candies = 7 -> 6 -> 4
//candy = 1 -> 2 -> 3

//i = 2 -> min(3, 4) = 3
//res = [1, 2, 3, 0]
//candies = 7 -> 6 -> 4 -> 1
//candy = 1 -> 2 -> 3 -> 4

//i = 3 -> min(4, 1) = 1
//res = [1, 2, 3, 1]
//candies = 7 -> 6 -> 4 -> 1 -> -3
//candy = 1 -> 2 -> 3 -> 4 -> 5

//res = [1, 2, 3, 1]

distributeCandies(candies = 10, num_people = 3); //[5,2,3]
//candies = 10
//candy = 1
//res = [0, 0, 0]

//i = 0 -> min(1, 10) = 1
//res = [1, 0, 0]
//candies = 10 -> 9
//candy = 1 -> 2

//i = 1 -> min(2, 9) = 2
//res = [1, 2, 0]
//candies = 10 -> 9 -> 7
//candy = 1 -> 2 -> 3

//i = 2 -> min(3, 7) = 3
//res = [1, 2, 3]
//candies = 10 -> 9 -> 7 -> 4
//candy = 1 -> 2 -> 3 -> 4

//candies are left - starting from first person again
//i = 3 -> min(4, 4) = 4
//res = [5, 2, 3]
//candies = 10 -> 9 -> 7 -> 4 -> 0
//candy = 1 -> 2 -> 3 -> 4 -> 5

//res = [5, 2, 3]
