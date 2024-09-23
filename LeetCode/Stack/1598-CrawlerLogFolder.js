//1598. Crawler Log Folder
//the leetcode file system keeps a log each time some user performs a change folder operation
//the operations are described below:
//"../": move to the parent folder of the current folder
//"./": remain in the same folder
//"x/": move to the child folder named x - this folder guaranteed to always exist

//given a list of strings logs where logs[i] is the operation performed by the user at the i_th step
//the file system starts in the main folder, then the operations in logs are performed
//return the min number of operations needed to go back to the main folder after the change folder operations

//Apparoach:
//using stack
var crawlerLogFolder = (logs) => {
    let stack = [];

    for (let log of logs) {
        //go back to parent folder - pop()
        if (log === "../") {
            if (stack.length > 0) stack.pop(); //otherwise, means alreay in main
        } else if (log !== "./") { //adding new path element
            stack.push(log);
        }
    }

    return stack.length;
}
//TC: O(n)
//SC: O(n)
crawlerLogFolder(["d1/","d2/","../","d21/","./"]); //2
//stack = []

//["d1/", "d2/", "../", "d21/", "./"]
//   ^
//not ./ -> stack = [ "d1/",  ]

//["d1/", "d2/", "../", "d21/", "./"]
//          ^
//not ./ -> stack = [ "d1/", "d2/",  ]

//["d1/", "d2/", "../", "d21/", "./"]
//                ^
//stack length > 0 -> pop 
//stack = [ "d1/",   ]

//["d1/", "d2/", "../", "d21/", "./"]
//                        ^
//not ./ -> stack = [ "d1/", "d21/",  ]

//["d1/", "d2/", "../", "d21/", "./"]
//                               ^
//./ -> stack = [ "d1/", "d21/"]
//2

crawlerLogFolder(["d1/","d2/","./","d3/","../","d31/"]); //3
//stack = []

//["d1/", "d2/", "./", "d3/", "../", "d31/"]
//   ^
//not ./ -> stack = [ "d1/",  ]

//["d1/", "d2/", "./", "d3/", "../", "d31/"]
//          ^
//not ./ -> stack = [ "d1/", "d2/",  ]

//["d1/", "d2/", "./", "d3/", "../", "d31/"]
//                ^
//./ -> stack = [ "d1/", "d2/"]

//["d1/", "d2/", "./", "d3/", "../", "d31/"]
//                       ^
//not ./ -> stack = [ "d1/", "d2/", "d3/",  ]

//["d1/", "d2/", "./", "d3/", "../", "d31/"]
//                              ^
//stack length > 0 -> pop 
//stack = [ "d1/", "d2/",  ]

//["d1/", "d2/", "./", "d3/", "../", "d31/"]
//                                      ^
//not ./ -> stack = [ "d1/", "d2/", "d31/",  ]
//3

crawlerLogFolder(["d1/","../","../","../"]); //0
