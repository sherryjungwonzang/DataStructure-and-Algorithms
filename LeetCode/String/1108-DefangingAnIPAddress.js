//1108. Defanging An IP Address
//given a valid (IPv4) IP address
//return a defanged version of that IP address
//a defanced IP addree replaces every period "." with "[.]"

//Approach:
//using reges and replace()
var defangingIP = (address) => {
    //replacing . with [.]
    return address.replace(/\./g, "[.]"); 
}
defangingIP("1.1.1.1"); //"1[.]1[.]1[.]1"
//"1 . 1 . 1 . 1"
//   ^   ^   ^

defangingIP("255.100.50.0"); //"255[.]100[.]50[.]0"
//"255 . 100 . 50 . 0"
//     ^     ^    ^
