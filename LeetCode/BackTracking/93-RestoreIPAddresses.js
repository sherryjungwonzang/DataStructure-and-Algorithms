//93. Restore IP addresses
//a valid IP address consists of exactly four integers separated  by single dots
//each integer is between 0 and 255 and connect have leading zeros
//for example, "0.1.2.201" and "192.168.1.1" are valid IP addresses,
//but "0.011.255.245" and "192.168@1.1" are invalid IP addresses

//given a string 's' containing only digits
//return all possible valid IP addresses that can be formed by inserting dots into s
//you are not allowed to reorder or remove any digits in s
//you many return the valid IP addresses in any order

//Approach:
//using DFS with backtracking
var restoreIPAddresses = (s) => {
    let res = [];

    //DFS
    function dfs(arr, str) {
        //base case
        if (arr.length === 3) {
            if (isValid(str)) res.push([...arr, str]);

            return;
        }

        for (let i = 1; i < 4; i++) {
            let subStr = str.slice(0, i);

            if (!isValid(subStr)) continue;

            dfs([...arr, subStr], str.slice(i));
        }
    };

    //checking validation
    function isValid(str) {
        //not valid cases
        if (+str > 255 || !str.length) return false;
        if (str.length >= 2 && str[0] === '0') return false;

        return true;
    };

    dfs([], s);

    return res.map(x => x.join('.'));
}
restoreIPAddresses("25525511135"); //["255.255.11.135","255.255.111.35"]

restoreIPAddresses("0000"); //["0.0.0.0"]

restoreIPAddresses("101023"); //["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
