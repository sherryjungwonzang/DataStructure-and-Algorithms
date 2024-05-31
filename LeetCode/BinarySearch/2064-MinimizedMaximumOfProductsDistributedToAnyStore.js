//2064. Minimized Maximum of Products Distributed To Any Store
//given an integer 'n' - indicating there are n specialty retail stores
//there are m product types of varying amounts, which are given as 0-indexed integer array 'quantities'
//where quantities[i] represents the number of products of the i_th product type

//you need to distribute all products to the retail stores following these rules:
//a store can only given at most one product type but can be given amount of it
//after distribution, each store will have been given some number of products (possibly 0)
//let x represent the max number of products given to any store
//you want x to be as small as possible - for example
//you want to minimize the maximum number of products that are given to any store
//return the minimum possible x

//Approach:
//using binary search
var minimizedMaxProductsDistributedToAnyStore = (n, quantities) => {
    let low = 1;
    let high = Math.max(...quantities);

    //binary search
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let store = 0;

        for (let i = 0; i < quantities.length; i++) {
            store += Math.ceil(quantities[i] / mid);
        }

        if (store <= n) high = mid - 1;
        else low = mid + 1;
    }
    
    return low;
}
minimizedMaxProductsDistributedToAnyStore(6, [11, 6]); //3
//- The 11 products of type 0 are distributed to the first four stores in these amounts: 2, 3, 3, 3
//- The 6 products of type 1 are distributed to the other two stores in these amounts: 3, 3
//The maximum number of products given to any store is max(2, 3, 3, 3, 3, 3) = 3

minimizedMaxProductsDistributedToAnyStore(7, [15, 10, 10]); //5
//- The 15 products of type 0 are distributed to the first three stores in these amounts: 5, 5, 5
//- The 10 products of type 1 are distributed to the next two stores in these amounts: 5, 5
//- The 10 products of type 2 are distributed to the last two stores in these amounts: 5, 5
//The maximum number of products given to any store is max(5, 5, 5, 5, 5, 5, 5) = 5

minimizedMaxProductsDistributedToAnyStore(1, [100000]); //100000
//- The 100000 products of type 0 are distributed to the only store.
//The maximum number of products given to any store is max(100000) = 100000
