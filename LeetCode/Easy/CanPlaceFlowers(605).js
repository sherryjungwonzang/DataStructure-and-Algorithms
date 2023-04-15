//605. Can Place Flowers
//have a long flowerbed in which some of the plots are planted and some are not
//but, flowers cannot be planted in adjacent plots

//given an integer array 'flowerbed' containing 0's and 1's
//where 0 means empty and 1 means not empty, and an integer n
//return true if n new flowers can be planted in the flowerbed without violating the no-adjacent flowers rule and false otherwise
var canPlaceFlowers = (flowerbed, n) => {
  let i = 0;

  //when n is 0 -> while loop is done
  while(i < flowerbed.length &&  n !== 0) {
    //need to check both left and right -> whether it is 0 or not
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      //when we find both are 0 -> decreasing n & moving i
      n--;
      i++;
    }
    //otherwise just move i
    i++;
  }
  return n === 0;
}
canPlaceFlowers([1,0,0,0,1], 1); //true
//[1, 0, 0, 0, 1], n = 1
//       ^
//1 != 0
//0, left: 1, right: 0 -> i move
//0, left: 0, right: 0 -> decrease n and move i

//n = 0
//return TRUE

canPlaceFlowers([1,0,0,0,1], 2); //false
//[1, 0, 0 , 0, 1], n = 2
//              ^
//1 != 0
//0, left: 1, right: 0 -> i move
//0, left: 0, right: 0 -> decrease n and move i

//n = 1
//0, left: 0, right: 1 -> move i
//1 != 0
//return FALSE
