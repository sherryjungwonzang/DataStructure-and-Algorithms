//Isomorphic Strings
//given two strings: s and t
//if s can be replaced to get t, it is isomorphic

//Approach: using Map
//using map to record the key-val pairs in s and t
//if we never met it before, we record the (s[i], t[i]) pair in map
//if we met s[i] before, we compare the value of s[i] with t[i], which are supposed to be the same
//need to check whether map.values() contain duplicate value
//if map.value contain duplicate value, means that multiple keys map to a same value
var isIsomorphic = (s, t) => {
    if (s.length != t.length) return false;

    let m = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!m.has(s[i])) {
            m.set(s[i], t[i]);
        } else {
            if (m.get(s[i])  != t[i]) return false;
        }
    }
    return new Set([...m.values()]).size === m.size;
};


//Approach: using Map and Set
const isIsomorphic = (s, t) => {
    let map = new Map();
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];

        if (map.has(sChar)) {
            if (map.get(sChar) !== tChar) return false;
        } else {
            if (set.has(tChar)) return false;
            map.set(sChar, tChar);
            set.add(tChar);
        }
    }
    return true;
}
