//38. Count and Say
//the count-and-say sequence is a sequence of digit strings defined by the recursive formula:
//countAndSay(1) = "1"
//countAndSay(n) is the way "say" the digit string from countAndSay(n - 1) - which is then converted into a different digit string

//to determine how "say" a digit string, split it into the minimal number of substring
//such that each substring contains exactly one unique digit
//then for each substring, say the number of digits
//then say the digit
//finally, concatenate every said digit

//ex) "3322251"
//two 3's, three 2's one 5 and one 1
//2 3 + 3 2 + 1 5 + 1 1
//"23321511"

//given a positive integer 'n'
//return the n_th term of the count-and-say sequence

//Approach:
//using recursion
var countAndSay = (n) => {
  //setting base case
  if (n === 1) return "1";

  //otherwise - recalculate the string with recursion
  let str = countAndSay(n - 1);

  //setting the res to store the result string
  let res = "";
  let count = 0;
  let prev;

  //checking the repetitions - looping through
  for (let s of str) {
    //if prev is null
    if (!prev) {
      //updating prev as s
      prev = s;
      count++;
      continue;
    }

    //if prev is not null
    if (prev === s) { //equal to s
      count++;
    } else { //if prev is not equal to s
      //updating res
      res += count + prev;
      prev = s;
      //setting count as 1
      count = 1;
    }
  }
  return res;
}
countAndSay(1); //"1" - this is the base case

countAndSay(4); //"1211"
//countAndSay(1) = "1"
//countAndSay(2) = say "1" = one 1 = "11"
//countAndSay(3) = say "11" = two 1's = "21"
//countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
