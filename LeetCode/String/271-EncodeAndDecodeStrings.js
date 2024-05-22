//271. Encode and Decode Strings
//design an algorithm to encode a list of strings to a string
//the encoded string is then sent over the network
//and decoded back to the original list of strings

//strs in machine 2 should be the same as strs in machine 1
//implement the encode and decode methods
//not allowed to solve the problem using any serialize methods

//Approach:
//using .join() - to encode
//using .split() - to decode
var encode = (strs) => {
    if (!strs.length) return null;

    return strs.join("-encodeStr");
}

var decode = (s) => {
    if (s === null) return [];

    return s.split("-encodeStr-")
}
encodeDecode(["Hello", "World"]); //["Hello", "World"]
//encode: "-encodeStr-" -> "Hello World"
//decode: "Hello" "World"

//explanation:
//Machine 1:
//Codec encoder = new Codec();
//String msg = encoder.encode(strs);
//Machine1 --- msg ---> Machine2

//Machine2:
//Codec decoder = new Codec();
//String[] strs = decoder.decode(msg);

encodeDecode([""]); //[""]
