//331. Verify Preorder Serialization Of Binary Tree
//one way to serialize a binary tree is to use preorder traversal
//when we encounter a non-null node, we recored the node's value
//if it is a null node, we reocrd using a sentinel value such as '#'

//for example, "9,3,4,#,#,1,#,#,2,#,6,#,#" - where # represents a null node
//given a string of comma-seperated values 'preorder'
//return true if it is a correct preorder traversal serialization of a binary tree

//it is guaranteed that each comma-seperated value in the string must be either an integer or character '#' - representing null pointer
//for example, it could never contain two consecutive commas, such as "1..3"
var verifyPreorderSerialization = (preorder) => {
    let empty = 1;

    for (let node of preorder.split(",")) {
        if (empty > 0) {
            //adding # - meaning removing an empty slot
            //NULL prevents from creating more than node

            //adding num - meaning removing an empty slot & creating 2 more empty slots
            //left and right child 
            if (node === '#') empty--;
            else empty++; //
        } else {
            return false;
        }
    }
    return empty < 1;
}
verifyPreorderSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#"); //true
//empty = 1

//"9, 3, 4, #, #, 1, #, #, 2, #, 6, #, #"
// n
//empty = 1 -> 2

//    n
//empty = 1 -> 2 -> 3

//       n
//empty = 1 -> 2 -> 3 -> 4

//          n
//empty = 1 -> 2 -> 3 -> 4 -> 3

//             n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2

//                n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3

//                   n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3 -> 2

//                      n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3 -> 2 -> 1

//                          n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3 -> 2 -> 1 -> 2

//                              n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3 -> 2 -> 1 -> 2 -> 1

//                                  n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3 -> 2 -> 1 -> 2 -> 1 -> 2

//                                       n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3 -> 2 -> 1 -> 2 -> 1 -> 2 -> 1

//                                            n
//empty = 1 -> 2 -> 3 -> 4 -> 3 -> 2 -> 3 -> 2 -> 1 -> 2 -> 1 -> 2 -> 1 -> 0
//true


verifyPreorderSerialization("1,#"); //false

verifyPreorderSerialization("9,#,#,1"); //false
//empty = 1

//"9, #, #, 1"
// n
//empty = 1 -> 2

//    n
//empty = 1 -> 2 -> 1

//       n
//empty = 1 -> 2 -> 1 -> 0

//           n
//empty = 1 -> 2 -> 1 -> 0 -> 1
//false
