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

    //creating a GRAPH and setting adjList
    for (let i = 0; i < accounts.length; i++) {
        for (let j = 2; j < accounts[i].length; j++) {
            let arr1 = adjList.get(accounts[i][1]) || [];
            arr1.push(accounts[i][j]);
            adjList.set(accounts[i][1], arr1); //setting adjList

            let arr2 = adjList.get(accounts[i][j]) || [];
            arr2.push(accounts[i][1]);
            adjList.set(accounts[i][j], arr2);
        }
    };

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

    for (let i = 0; i < accounts.length; i++) {
        if (!visited.has(accounts[i][1])) {
            let result = dfs(accounts[i][1], []);

            result.sort(); //sorting
            res.push([accounts[i][0], ...result]); //matching with name and emails
        }
    }
    return res;
}
accountsMerge([["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]); 
//[["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
//The first and second John's are the same person as they have the common email "johnsmith@mail.com".
//The third John and Mary are different people as none of their email addresses are used by other accounts.
//We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted

accountsMerge([["Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"],["Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"],["Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"],["Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"],["Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co"]]); 
//[["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co","Fern1@m.co","Fern5@m.co"]]
