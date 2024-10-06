//717. 1bit And 2bit Characters
//we have two special characters:
//the first character can be represented by one bit 0
//the second character can be represented by two bits (10 or 11)
//given a binary array bits that ends with 0
//return true if the last character must be a one-bit character
var oneTwoBitsChars = (bits) => {
    let i = 0;

    while (i < bits.length - 1) {
        if (bits[i] === 1) i++; //meaning 2 bits

        i++; //1bit - 1 jusmp default || 2 bits - 2 jumps
    }

    return bits[i] === 0;
}
oneTwoBitsChars([1,0,0]); //true - The only way to decode it is two-bit character and one-bit character - So the last character is one-bit character
//[1, 0, 0]
// ^
//i = "1" -> jump  twice

//[1, 0, 0]
//       ^
//bits[2] = 0 -> true

oneTwoBitsChars([1,1,1,0]); //false - The only way to decode it is two-bit character and two-bit character - So the last character is not one-bit characte
//[1, 1, 1, 0]
// ^
//i = "1" -> jump  twice

//[1, 1, 1, 0]
//       ^
//i = "1" -> jump  twice

//[1, 1, 1, 0]
//            ^
//bits[4] = null -> false
