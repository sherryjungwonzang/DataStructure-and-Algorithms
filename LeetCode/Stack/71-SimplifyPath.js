//71. Simplify Path
//given a string 'path' which is an absolute path - starting with a slash '/' to a file or directory in a Unix style file systemn
//convert it to the simplified canonical path

//in a Unix-style file system, a period '.' refers to the current directory
//a double period '..' referes to the directory up a level
//any multiple consecutive slashes '//' are treated as a single slash '/'
//for this problem, any other format of periods such as '...' are treated as file/directory names

//the canonical path should have the following format:
//the path starts with a single slash '/'
//any two directories are separated by a single slash '/'
//the path does not end with a trailing '/'
//the path only contains the directories on the path from the root directory to the target file ot director - no period or double period

//return the simplified canonical path
var simplifyPath = (path) => {
    //creating stack
    let stack = [];

    //separating based on "/"
    path = path.split("/");

    //loop through for adding into stack
    for (let i = 0; i < path.length; i++) {
        if (path[i] === "." || path[i] === "") {
            continue;
        } else if (path[i] === "..") {
            stack.pop();
        } else {
            stack.push(path[i]);
        }
    }
    return "/" + stack.join("/");
}
//TC: O(n)
//SC: O(n)
simplifyPath("/home/"); // "/home/" - Note that there is no trailing slash after the last directory name.

simplifyPath("/../"); // "/" - Going one level up from the root directory is a no-op, as the root level is the highest level you can go

simplifyPath("/home//foo/"); // "/home/foo" - In the canonical path, multiple consecutive slashes are replaced by a single one.
