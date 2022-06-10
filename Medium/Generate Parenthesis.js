//Generate Parenthesis
//given n pairs of parenthesis
//to generate all combinations of well-formed parenthesis
/*
ex:
n=1: ()
n=2:
(()), ()()
n=3:
((())), (()()), (())(), ()(()), ()()()
*/

//Approach: Back-tracking with DFS
var generateParenthesis = (n) => {
    const output = [];

    const dfs = (str, open, close) => {
        //close parenthesis can not be more than open parenthesis
        //at any given time to stay valid
        if (open > close) return;

        //Base Case
        //we have n pairs of parenthesis
        if (open === 0 && close === 0) {
            output.push(str);
            return;
        }

        //Insert open parenthesis and search for the next valid insertion
        if (open > 0) {
            dfs(`${str}(`, open - 1, close);
        }

        //Insert close parenthesis and search for the next valid insertion
        if (close > 0) {
            dfs(`${str})`, open, close - 1);
        }
    };
    dfs('', n, n);
    return output;
}






//Approach: Back Tracking
const generateParenthesis = (n) => {
    const res = [];

    const go = (l, r, s) => {
        if (s.length === 2 * n) {
            res.push(s);
            return;
        }

        if (l < n) go (l + 1, r, s + '(');

        if (r < l) go (l, r + 1, s + ')');
    };

    go (0, 0, '');
    return res;
};


//another solution
const generateParenthesis = (n) => {
    const res = [];

    const go = (l, r, s) => { //l: left remaining, r: right remaining
        if (l > r) return; //validate by the num of '(' should be always >= ')'

        if (l === 0 && r === 0) {
            res.push(s);
            return;
        }

        if (l > 0) go (l - 1, r, s + '(');
        if (r > 0) go (l, r - 1, s + ')');
    };
    go(n, n, '');
    return res;
}
