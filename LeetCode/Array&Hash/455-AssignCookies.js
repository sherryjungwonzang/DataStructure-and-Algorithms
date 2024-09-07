//455. Assign Cookies
//assume you are an awesome parent and want to give your children some cookies
//but you should give each child at most one cookie
//each child i has a greed factor g[i], which is the min size of a cookie that the child will be content with
//and each cookie j has a size s[j]
//if s[j] >= g[i], we can assign the cookie j to the child i and the child i will be content
//your goal is to maximize the numvber of your content children and out put the max number

//Approach:
//using sorting and comparison
var assignCookies = (g, s) => {
    //sorting
    g.sort((a, b) => a - b); //greedy degree 
    s.sort((a, b) => a - b); //cookies num

    let index = 0;
    let count = 0;

    while (index < s.length && count < g.length) {
        if (s[index] >= g[count]) count++;
        
        index++;
    }

    return count;
}
assignCookies(g = [1, 2, 3], s = [1, 1]); //1
//You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3
//And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content

//index = 0 -> 1 -> 2
//count = 0 -> 1
//sorting g = [1, 2, 3], s = [1, 1]
//             ^              ^
//1 = 1 -> count++

//sorting g = [1, 2, 3], s = [1, 1]
//                ^              ^
//2 > 1 -> continue

//sorting g = [1, 2, 3], s = [1, 1]
//                   ^              ^

assignCookies(g = [1, 1, 1, 4, 2, 1], s = [3, 1, 4, 2]); //4
//index = 0 -> 1 -> 2 -> 3 -> 4
//count = 0 -> 1 -> 2 -> 3 -> 
//g = [1, 1, 1, 4, 2, 1], s = [3, 1, 4, 2]

//sorting -> g = [1, 1, 1, 1, 2, 4], s = [1, 2, 3, 4]
//                ^                       ^ 
//1 = 1 -> count++

//sorting -> g = [1, 1, 1, 1, 2, 4], s = [1, 2, 3, 4]
//                   ^                       ^ 
//1 < 2 -> count++

//sorting -> g = [1, 1, 1, 1, 2, 4], s = [1, 2, 3, 4]
//                      ^                       ^ 
//1 < 3 -> count++

//sorting -> g = [1, 1, 1, 1, 2, 4], s = [1, 2, 3, 4]
//                         ^                       ^ 
//1 < 4 -> count++

//sorting -> g = [1, 1, 1, 1, 2, 4], s = [1, 2, 3, 4]
//                            ^                       ^ 

assignCookies(g = [1, 2], s = [1, 2, 3])
//You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2
//You have 3 cookies and their sizes are big enough to gratify all of the children
