//705. Design HashSet
//design a hashset without using any builkd-in hash table libraries
//implement MyHashSet class:
//void add(key): inserts the value into the Hashset
//bool contains(key): returns whether the valye key exists int he hashset or not
//void remove(key): removes the value key in the hashset - if key does not exist in the hashset, do nothing
var MyHashSet = () => {
    this.hashSet = {};
};

MyHashSet.prototype.add = (key) => {
    this.hashSet[key] = key;
};

MyHashSet.prototype.remove = (key) => {
    delete this.hashSet[key];
};

MyHashSet.prototype.contains = (key) =>  {
    return key in this.hashSet;
};

//Input: ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
//[[], [1], [2], [1], [3], [2], [2], [2], [2]]
//Output: [null, null, null, true, false, null, true, null, false]

//MyHashSet myHashSet = new MyHashSet();
//myHashSet.add(1);      // set = [1]
//myHashSet.add(2);      // set = [1, 2]
//myHashSet.contains(1); // return True
//myHashSet.contains(3); // return False, (not found)
//myHashSet.add(2);      // set = [1, 2]
//myHashSet.contains(2); // return True
//myHashSet.remove(2);   // set = [1]
//myHashSet.contains(2); // return False, (already removed)
