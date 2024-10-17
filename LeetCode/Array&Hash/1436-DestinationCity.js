
//1436. Destination City
//given the array 'paths' where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi
//return the destination city, that is, the city without any path outgoing to another city
//it is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city

//Approach:
//using hash table
var desitnationCity = (paths) => {
    let departure = new Set();

    //store departure cities
    for (let path of paths) departure.add(path[0]);

    //finding the destination cities
    for (let path of paths) {
        //city without any path outgoing to another city
        if (!departure.has(path[1])) return path[1];
    }

    return ""; 
}
//TC: O(n)
//SC: O(n)
desitnationCity(paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]); //"Sao Paulo"
//[["London", "New York"],["New York", "Lima"],["Lima", "Sao Paulo"]]
//      ^                       ^                  ^
//depature = {
//  London,
//  New York,
//  Lima
//}

//checking destination city from [0]
//New York is in hash table
//Lima is in hash table
//but Sao Paulo is not in hash table -> no path ongoing to another city

desitnationCity(paths = [["B","C"],["D","B"],["C","A"]]); //"A"
//[["B", "C"],["D", "B"],["C", "A"]]
//   ^          ^           ^
//depature = {
//  B,
//  D,
//  C
//}

//checking destination city from [0]
//C is in hash table
//B is in hash table
//but A is not in hash table -> no path ongoing to another city

desitnationCity(paths = [["A","Z"]]); //"Z"
