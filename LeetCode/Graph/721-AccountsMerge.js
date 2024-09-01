//721. Accounts Merge
//givena  list of 'accounts' where each element accounts[i] is a list of strings
//where the first element accounts[i][0] is a name and the rest of the elements are emails representing emails of the account

//now, we would like to merfe these accounts
//two accounts definitely belong to the same person if there is some common email to both accounts
//note that even if two accounts have the same name, they may belong to different people as people could have the same name
//a person can have any number of accounts initially, but all of their accounts definitely have the same name

//after merging the accounts, return the accounts in the following format:
//the first element of each account is the name and the rest of the elements are emails in sorted order
//the accounts themselves can be returned in any order

//Approach:
//using Graph and DFS
var accountsMerge = (accounts) => {
    let adjList = new Map();
    let visited = new Set();
    let res = [];

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 2; j < accounts[i].length; j++) { //limited to person who has two emails
            let firstToSecond = adjList.get(accounts[i][1]) || []; //check first email whether there is or not
            firstToSecond.push(accounts[i][j]); //add second email
            adjList.set(accounts[i][1], firstToSecond); //connecting each email address - (first, second)

            let secondToFirst = adjList.get(accounts[i][j]) || []; //check second email whether there is or not
            secondToFirst.push(accounts[i][1]); //add first email
            adjList.set(accounts[i][j], secondToFirst); //connecting each email address - (second, first)
        } 
    };

    for (let i = 0; i < accounts.length; i++) {
        //based on first email
        if (!visited.has(accounts[i][1])) {
            let result = dfs(accounts[i][1], []);

            result.sort(); //sorting

            res.push([accounts[i][0], ...result]); //matching with name and emails
        }
    }

    //DFS
    function dfs(email, result) {
        visited.add(email);
        result.push(email);

        let neighbors = adjList.get(email) || [];

        for (neigh of neighbors) {
            if (!visited.has(neigh)) dfs(neigh, result);
        }
        
        return result;
    };


    return res;
}
accountsMerge([["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]); 
//["John","johnsmith@mail.com","john_newyork@mail.com"]
//["John","johnsmith@mail.com","john00@mail.com"]
//["Mary","mary@mail.com"]
//["John","johnnybravo@mail.com"]

//i = 0, j = 2 
//[0][1] = "johnsmith@mail.com" -> not in adjList
//push [0][2] -> firstToSecond = [ "john_newyork@mail.com" ]
//adjList = { "johnsmith@mail.com" :  "john_newyork@mail.com" }
//---------------------------------------------------------------------
//[0][2] = "john_newyork@mail.com" -> not in adjList
//push [0][1] -> secondToFirst = [ "johnsmith@mail.com" ]
//adjList = { "johnsmith@mail.com" :  "john_newyork@mail.com" 
//           "john_newyork@mail.com" : "johnsmith@mail.com"
//}

//i = 1, j = 2 
//[1][1] = "johnsmith@mail.com" -> in adjList
//push [1][2] -> firstToSecond = [ "john_newyork@mail.com", "john00@mail.com" ]
//adjList = { "johnsmith@mail.com" :  "john_newyork@mail.com", "john00@mail.com"
//           "john_newyork@mail.com" : "johnsmith@mail.com"
//}
//---------------------------------------------------------------------
//[1][2] = "john00@mail.com" -> not in adjList
//push [1][1] -> secondToFirst = [ "johnsmith@mail.com" ]
//adjList = { "johnsmith@mail.com" :  [ "john_newyork@mail.com", "john00@mail.com" ]
//           "john_newyork@mail.com" : [ "johnsmith@mail.com" ]
//           "john00@mail.com" : [ "johnsmith@mail.com" ]
//}


//adjList = { "johnsmith@mail.com" :  [ "john_newyork@mail.com", "john00@mail.com" ]
//           "john_newyork@mail.com" : [ "johnsmith@mail.com" ]
//           "john00@mail.com" : [ "johnsmith@mail.com" ]
//}

//i = 0 -> [0][1] = "johnsmith@mail.com"
//visited = { }
//result = dfs("johnsmith@mail.com", [])

//starting with dfs("johnsmith@mail.com", [])
//visited = { "johnsmith@mail.com" }
//result = { "johnsmith@mail.com" }
//neighbor: "john_newyork@mail.com" -> dfs("john_newyork@mail.com", "johnsmith@mail.com")
//          "john00@mail.com" -> dfs("john00@mail.com", "johnsmith@mail.com")

//dfs("john_newyork@mail.com", "johnsmith@mail.com")
//visited = { "johnsmith@mail.com" , "john_newyork@mail.com" }
//result = { "johnsmith@mail.com" , "john_newyork@mail.com"  }
//neighbor: "johnsmith@mail.com" -> aleady in visited

//dfs("john00@mail.com", "johnsmith@mail.com")
//visited = { "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com" }
//result = { "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com" }
//neighbor: "johnsmith@mail.com" -> aleady in visited

//dfs("johnsmith@mail.com", []) -> return = [ "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com" ]
//-> res = ['John'|| "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com" ]
//-> sorting: ['John'|| "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com" ]

//i = 1 -> [1][1] = "johnsmith@mail.com" -> visited has

//i = 2 -> [2][1] = "mary@mail.com"
//dfs("mary@mail.com", [])
//visited = { "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com", "mary@mail.com" }
//result = { "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com", "mary@mail.com" }
//neighbor: []
//dfs("mary@mail.com", []) -> return = [ "mary@mail.com" ]
//-> res = ['John'|| "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com", 
//          'Mary' || "mary@mail.com",
//]

//i = 3 -> [3][1] = "johnnybravo@mail.com"
//dfs("johnnybravo@mail.com" [])
//visited = { "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com", "mary@mail.com", "johnnybravo@mail.com" }
//result = { "johnsmith@mail.com" , "john_newyork@mail.com", "john00@mail.com", "mary@mail.com", "johnnybravo@mail.com" }
//neighbor: []
//dfs("johnnybravo@mail.com" []) -> return = [ "johnnybravo@mail.com"]
//-> res = ['John'|| "john00@mail.com", "john_newyork@mail.com", "johnsmith@mail.com"
//          'Mary' || "mary@mail.com",
//          'John' || "johnnybravo@mail.com"
//]

accountsMerge([["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]); 
//[["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
