//547. Number of Provinces
//there are 'n' cities
//some of them are connected while some are noe
//if city 'a' is connected directly with city 'b' - and city b is connected directly with city 'c'
//then city a is connected indirectly with city c

//a province is a group of directly or indirectly connected cities and no other cities outside of the group

//you are given an n x n matrix isConnected - where isConnected[i][j] = 1
//if the i_th city and the j_th city are directly connected
//and isConnected[i][j] = 0 otherwise
var numProvinces = (isConnected) => {
    let adj = {};

    //loop through rows and columns
    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected[0].length; j++) {
            //current value
            let val = isConnected[i][j];

            //there is a connection
            if (val === 1) {
                if (!adj[i]) {
                    adj[i] = [j];
                } else {
                    adj[i].push(j);
                }
            }
        }
    }

    //graph reversal
    let count = 0;
    let visited = new Set();

    //loop keys
    for (let key in adj) {
        //keys within object always string
        let keyNum = parseInt(key);
        count += dfs(keyNum);
    }

    //DFS function
    function dfs(currNode) {
        if (visited.has(currNode)) return 0;

        visited.add(currNode);

        let neighbors = adj[currNode];

        for (let n of neighbors) {
            dfs(n);
        }
        return 1;
    } 
    return count;
}
numProvinces([[1,1,0], [1,1,0], [0,0,1]]); //2


numProvinces([1,0,0], [0,1,0], [0,0,1]); //3
