//1.3 URLify
//to replace all spaces in a string with %20
//string has sufficient space at the end to hold the additional characters
//given the true length of the string

const replaceUrlSpace = (str) => {
    const convertToArray = str.trim().split('');
    for (let i in convertToArray) {
        if(convertToArray[i] === " ") {
            convertToArray[i] = "%20";
        }
    }
    return convertToArray.join('');
}

console.log(replaceUrlSpace("Sherry J Z")) //Sherry%20J%20Z
