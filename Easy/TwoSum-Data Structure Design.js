//Two Sum - Data Structure
//design a data structure that accepts a stream of integers
//check if it has a pair of integers that sum up to a particluar value

//TwoSum(): initialized the TwoSum object with an empty array
//.add(): adds number to the data structure
//.find(): returns true if there exists anu pair of numbers whose sum is equal to value


//Approach: Map
var TwoSum = () => {
    this.map = new Map();
}

TwoSum.prototype.add = function(number) {
    const count = this.map.get(number) || 0;
    this.map.set(number, count + 1);
};

TwoSum.prototype.find = function(value) {
    for (let [key, val] of this.map) {
        const diff = value - key;
        const isKeyEqual = diff === key;

        if ((isKeyEqual && val > 1) || (!isKeyEqual && this.map.has(diff))) {
            return true;
        }
    }
    return false;
};
