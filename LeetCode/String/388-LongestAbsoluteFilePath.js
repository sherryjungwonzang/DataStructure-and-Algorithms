//388. Longest Absolute File Path
//here, we have dir as the only directory in the root
//dir contains two subdirectories, subdir1 and subdir2
//subdir1 contains a file file1.ext and subdirectory subsubdir1
//subdir2 contains a subdirectory subsubdir2, which contains a file file2.ext

//in text form, it looks like this (with ⟶ representing the tab character):
//dir
//⟶ subdir1
//⟶ ⟶ file1.ext
//⟶ ⟶ subsubdir1
//⟶ subdir2
//⟶ ⟶ subsubdir2
//⟶ ⟶ ⟶ file2.ext

//if we were to write this representation in code, it will look like this: "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
//note that the '\n' and '\t' are the new-line and tab characters
//every file and directory has a unique absolute path in the file system, which is the order of directories that must be opened to reach the file/directory itself all concatenated by '/'s
//using the above example, the absolute path to file2.ext is "dir/subdir2/subsubdir2/file2.ext"
//each directory name consists of letters, digits, and/or spaces
//each file name is of the form name.extension, where name and extension consist of letters, digits, and/or spaces

//given a string input representing the file system in the explained format
//return the length of the longest absolute path to a file in the abstracted file system
//if there is no file in the system, return 0
var absoluteFilePath = (input) => {
    let longest = 0;
    let map = { 0: 0 };
    let lines = input.split("\n"); //based on \n it is separating
    console.log(lines)
    console.log('--')

    for (let line of lines) {
        let fileName = line.replace(/\t/g, "");
        console.log(line, fileName)
        console.log('==')

        let depth = line.length - fileName.length;
        console.log(line.length, fileName.length, depth)
        console.log('++')
        
        //meaning reached out to file
        if (fileName.includes('.')) longest = Math.max(longest, map[depth] + fileName.length); 
        else map[depth + 1] = map[depth] + fileName.length + 1; //directory

        console.log(longest)
        console.log('^^')
        console.log(map)
        console.log('##')
    }

    return longest;
}
//TC: O(n)
//SC: O(n)
absoluteFilePath(input = "dir\ntsubdir1\n\tsubdir2\n\t\tfile.ext"); //20
//map = { 0: 0 }
//longest = 0

//lines = [ 'dir', '\tsubdir1', '\tsubdir2', '\t\tfile.ext' ]
//            ^
//line = dir || fileName = dir -> depth = 3 - 3 = 0
//directory: there is no '.' -> map[1] = map[0] + 3 + 1 = 4
//map = { 0: 0, 1: 4, }

//lines = [ 'dir', '\tsubdir1', '\tsubdir2', '\t\tfile.ext' ]
//                      ^
//line = _subdir1 || fileName = subdir1 -> depth = 8 - 7 = 1
//directory: there is no '.' -> map[2] = map[1] + 7 + 1 = 12
//map = { 0: 0, 1: 4, 2: 12, }

//lines = [ 'dir', '\tsubdir1', '\tsubdir2', '\t\tfile.ext' ]
//                                   ^
//line = _subdir2 || fileName = subdir2 -> depth = 8 - 7 = 1
//directory: there is no '.' -> map[2] = map[1] + 7 + 1 = 12
//map = { 0: 0, 1: 4, 2: 12, }

//lines = [ 'dir', '\tsubdir1', '\tsubdir2', '\t\tfile.ext' ]
//                                                   ^
//line = __file.ext || fileName = file.ext -> depth = 10 - 8 = 2
//file: there is '.' -> longest = max(0, map[2] + 8) = 20
//map = { 0: 0, 1: 4, 2: 12 }

//20

absoluteFilePath(input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"); //32
//"dir/subdir1/file1.ext" of length 21
//"dir/subdir2/subsubdir2/file2.ext" of length 32
//we return 32 since it is the longest absolute path to a file

absoluteFilePath("a"); //0
