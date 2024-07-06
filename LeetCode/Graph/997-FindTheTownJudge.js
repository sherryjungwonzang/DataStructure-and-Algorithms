//997. Find The Town Judge
//in a town, there are n ppl labeled from 1 to n
//there is a rumor that one of these people is secretly the twon judge

//if the town judge exists, then:
//1. the town judge trust nobody
//2. everybody (except for the town judge) trusts the town judge
//3. there are exactly one person that satisfied properties 1 and 2

//given an array 'trust' where trust[i] = [a_i, b_i]
//representing that the person labeled a_i trusts the person labeled b_i
//if a trust relationship does not exist in trust array, then such a trust relationship does not exist
//return the label of the town judge if the town judge exists and can be identified
//or return -1 otherwise

//Approach:
//using graph
var findTownJudge = (n, trust) => {
    //making array to track the trusted ppl
    let trusted = new Array(n + 1).fill(0); 

    //traversing trust graph relationship
    for (let [i, j] of trust) {
        trusted[i] -= 1; //trust someone else than himself | is not judge town
        trusted[j] += 1; //has been trusted by another | has a change to be the judge tower
    }

    //traversing trusted array
    for (let i = 1; i < trusted.length; i++) {
        if ((n - 1) === trusted[i]) return i;
    }

    return -1;
}
//TC: O(n) - the total number of ppl living in the town
//SC: O(n) - the total number of ppl living in the town
findTownJudge(2, [[1,2]]); //2

findTownJudge(3, [[1,3], [2,3]]); //2

findTownJudge(3, [[[1,3], [2,3], [3,1]]]); //-1
