//1475. Final Prices With A Special Discount In A Shop
//given an integer array prices where prices[i] is the price of the i_th item in a shop
//there is a special discount for items in the shop
//if you buy tge i_th item, then you will receive a discount equivalent to prices[i]
//where j is the min index such that j > i and prices[j] <= prices[i]
//otherwise, you will not receive any discount at all
//return an integer array answer where answer[i] is the final price you will pay for the i_th item of the shop. considering the special discount

//Approach:
//using stack
var finalPriceWithSpecialDiscount = (prices) => {
    let stack = [];

    while (prices.length) {
        let curr = prices[0];

        //for comparison
        prices.shift();

        //find the prices lower than curr
        let lower = prices.find((p) => p <= curr);

        stack.push(lower ? curr - lower : curr);
    };

    return stack;
}
finalPriceWithSpecialDiscount([8,4,6,2,3]); //[4,2,4,2,3]
//[8, 4, 6, 2, 3] -> [4, 6, 2, 3]
// ^                  ^ 
//curr = 8          lower    8 >= 4 -> discount    
//stack = [8 - 4 = 4,  ]

//[4, 6, 2, 3] -> [6, 2, 3]
// ^               ^  ^
//curr = 4       lower    4 >= 6 -> no discount  || 4 >= 2 -> discount
//stack = [8 - 4 = 4, 4 - 2 = 2,  ]

//[6, 2, 3] -> [2, 3]
// ^            ^  
//curr = 6    lower    6 >= 2 -> discount
//stack = [8 - 4 = 4, 4 - 2 = 2, 6 - 2 = 4,  ]

//[2, 3] -> [3]
// ^         ^  
//curr = 2  lower    2 >= 3 -> no discount
//stack = [8 - 4 = 4, 4 - 2 = 2, 6 - 2 = 4,  2, ]

//[3] -> []
// ^          
//curr = 3  
//stack = [8 - 4 = 4, 4 - 2 = 2, 6 - 2 = 4,  2, 3]
//[4, 2, 4, 2, 3]

finalPriceWithSpecialDiscount([1,2,3,4,5]); //[1,2,3,4,5] - no discount at all
//[1, 2, 3, 4, 5] -> [2, 3, 4, 5]
// ^                  ^  ^  ^  ^
//curr = 1          lower    1 >= 2 -> no discount || 1 >= 3 -> no discount || 1 >= 4 -> no discount || 1 >= 5 -> no discount
//stack = [1,  ]

//[2, 3, 4, 5] -> [3, 4, 5]
// ^               ^  ^  ^
//curr = 2       lower   2 >= 3 -> no discount || 2 >= 4 -> no discount || 2 >= 5 -> no discount
//stack = [1, 2,  ]

//[3, 4, 5] -> [4, 5]
// ^            ^  ^ 
//curr = 3     lower  3 >= 4 -> no discount || 3 >= 5 -> no discount
//stack = [1, 2, 3,   ]

//[4, 5] -> [5]
// ^         ^   
//curr = 4  lower 4 >= 5 -> no discount
//stack = [1, 2, 3, 4,  ]

//[5] -> []
// ^        
//curr = 5 
//stack = [1, 2, 3, 4, 5]

finalPriceWithSpecialDiscount([10,1,1,6]); //[9,0,1,6]
