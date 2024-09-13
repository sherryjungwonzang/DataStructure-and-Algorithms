//925. Long Pressed Name
//your friend is typing his name into a keyboard
//sometimes, when typing a character c, the key might get long pressed
//and the character will be typed 1 or more times
//you examine the typed characters of the keyboard
//return true if it is possible that it was your friends name, with some characters (possibly none) being long pressed

//Approach:
//using two pointers
var longPressedName = (name, typed) => {
    let left = 0;

    for (let right = 0; right < typed.length; right++) {
        if (typed[right] === name[left]) left++;
        else if (typed[right] === name[left - 1]) continue; //long pressed
        else return false;
    }

    return left === name.length;
}
longPressedName("alex", "aaleex"); //true - 'a' and 'e' in 'alex' were long pressed
// a l e x           a a l e e x
// L                 R
//a = a -> move left

// a l e x           a a l e e x
//   L                 R
//l != a but a[R] = [L-1]a -> continue

// a l e x           a a l e e x
//   L                   R
//l = l -> move left

// a l e x           a a l e e x
//     L                   R
//e = e -> move left

// a l e x           a a l e e x
//       L                   R
//x != e but [R]e = [L-1]e -> continue

// a l e x           a a l e e x
//       L                     R
//x = x -> move left
//true

longPressedName("saeed", "ssaaedd"); //false - 'e' must have been pressed twice, but it was not in the typed output
// s a e e d         s s a a e d d
// L                 R
//s = s -> move left

// s a e e d         s s a a e d d
//   L                 R
//s != a but [R]s = [L-1]s -> continue

// s a e e d         s s a a e d d
//   L                   R
//a = a -> move left

// s a e e d         s s a a e d d
//     L                   R
//e != a but [R]a = [L-1]a -> continue

// s a e e d         s s a a e d d
//     L                     R
//e = e -> move left

// s a e e d         s s a a e d d
//       L                     R
//e != d but [R]d = [L-1]e -> False
