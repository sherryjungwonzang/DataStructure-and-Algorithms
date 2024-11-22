//1773. Count Items Matching A Rule
//given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item
//also given a rule represented by two strings, ruleKey and ruleValue
//the ith item is said to match the rule if one of the following is true:
//ruleKey == "type" and ruleValue == typei
//ruleKey == "color" and ruleValue == colori
//ruleKey == "name" and ruleValue == namei
//return the number of items that match the given rule
var countItems = (items, ruleKey, ruleValue) => {
    let keys = ['type', 'color', 'name'];
    let keyIndex = keys.indexOf(ruleKey);
    let count = 0; //count matching

    for (let i = 0; i < items.length; i++) {
        if (items[i][keyIndex] === ruleValue) count++;
    }

    return count;
}
countItems(items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"); //1 - ["computer","silver","lenovo"]
//keyIndex = "color" -> [1]

//   type    color  name
//[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
//             ^
//[0][1] = "blue" != "silver"

//[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
//                                          ^
//[1][1] = "silver" = "silver"
//count = 0 -> 1

//[["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
//                                                                    ^
//[2][1] = "gold" != "silver"
//count = 0 -> 1 -> 1

countItems(items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"); //2 - ["phone","blue","pixel"] and ["phone","gold","iphone"]
//keyIndex = "type" -> [0]

//[["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
//     ^
//[0][0] = "phone" = "phone"
//count = 0 -> 1

//[["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
//                               ^
//[1][0] = "computer" != "phone"
//count = 0 -> 1 -> 1

//[["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
//                                                            ^
//[2][0] = "phone" = "phone"
//count = 0 -> 1 -> 1 -> 2
