//Container with Most Water
//given an integer array height of length n
//n vertical lines drawn such that the two end points i-th line
//-> (i, 0) and (i, height[i])
//find two lines: together with x-axis from a container contains the most water
//return the max amount of water a container can store


//Approach: Two pointers
//regardless of the inside bars, only the outside ones
//basically find the highest product between length and shorter height
//two pointers: left and right
//at each new index change, calculate the shortest side and the area
//update the result based on the new area and current result
//update the left or right index
var maxArea = (height) => {
    let result = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right) {
        //calculate the shortest side and the area
        let shortestSide = Math.min(height[left], height[right]);
        let area = (right - left) * shortestSide;

        //compare area and result to update the result
        result = Math.max(area, result);

        //update the left or right index
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return result;
}



//another solution
var maxArea = (height) => {
    let l = 0;
    let r = height.length - 1;
    let result = 0;

    while(l < r) {
        let h = Math.min(height[l], height[r]);
        let area = h * (r - l);
        result = Math.max(area, result);

        if (height[l] < height[r]){
            l++;
        } else {
            r--;
        }
    }
    return result;
}


//another solution
var maxArea = (H) => {
    let ans = 0;
    let i = 0;
    let j = H.length - 1;

    while(i < j) {
        ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i));
        H[i] <= H[j] ? i++ : j--;
    }
    return ans;

}
