//2070. Most Beautiful Item For Each Query
//given a 2D integer array 'items' where items[i] = [price_i, beauty_i] denotes the price and beauty of an item respectively
//also given a 0-indexed integer array queries
//for each queries[j], you want to determine the max beauty of an item whose price is less than or equal to queries[j]
//if no such item exists, then the answer to this query is 0
//return an array answer of the same length as queries where answer[j] is the answer to the j_th quert

//Approach:
//using Binary Search
var beautifulItem = (items, queries) => {
    //sorting
    items.sort((a, b) => a[0] -  b[0]);

    let n = items.length;
    let max = items[0][1];

    //changing the [1] value based on the max value from prev[i] on sorted array
    for (let i = 0; i < n; i++) {
        max = Math.max(max, items[i][1]);
        items[i][1] = max; //updating
    }

    let res = [];
    
    //find the beautiful items
    for (let q of queries) {
        let left = 0;
        let right = n - 1;
        let beautiful = 0;

        //binary search
        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);

            if (items[mid][0] <= q) { //find the beautiful item
                beautiful = items[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        res.push(beautiful);
    }

    return res;
}
beautifulItem(items = [[1,2],[3,2],[2,4],[5,6],[3,5]], queries = [1,2,3,4,5,6]); //[2,4,5,5,6,6]
//- For queries[0]=1, [1,2] is the only item which has price <= 1. Hence, the answer for this query is 2.
//- For queries[1]=2, the items which can be considered are [1,2] and [2,4]. 
//The maximum beauty among them is 4.
//- For queries[2]=3 and queries[3]=4, the items which can be considered are [1,2], [3,2], [2,4], and [3,5].
//The maximum beauty among them is 5.
//- For queries[4]=5 and queries[5]=6, all items can be considered.
//Hence, the answer for them is the maximum beauty of all items, i.e., 6

beautifulItem(items = [[1,2],[1,2],[1,3],[1,4]], queries = [1]); //[4]
//The price of every item is equal to 1, so we choose the item with the maximum beauty 4. 
//Note that multiple items can have the same price and/or beauty

beautifulItem(items = [[10,1000]], queries = [5]); //[0]
//No item has a price less than or equal to 5, so no item can be chosen.
//Hence, the answer to the query is 0
