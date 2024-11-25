//1678. Goal Parser Interpretation
//you own a Goal Parser that can interpret a string command
//the command consists of an alphabet of "G", "()" and/or "(al)" in some order
//the Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al"
//the interpreted strings are then concatenated in the original order

//given the string command
//return the Goal Parser's interpretation of command

//Approach:
//using replace, replaceAll
var goalParser = (command) => {
    return command.replaceAll("()", "o").replaceAll("(al)", "al");
}
goalParser("G()(al)"); //"Goal"
//G () (al)
//   ^
//() -> replace to "o"

//G o (al)
//      ^
//(al) -> replace to "al"

//Goal

goalParser("G()()()()(al)"); //"Gooooal"
//G () () () () (al)
//  ^   ^  ^  ^
//() -> replace to "o"

//G o o o o (al)
//           ^
//(al) -> replace to "al"

//Gooooal

goalParser("(al)G(al)()()G"); //"alGalooG"
