//1.3 URLify
//to replace all spaces in a string with %20
//string has sufficient space at the end to hold the additional characters
//given the true length of the string
//Test file with Jest
import {describe, expect, test} from '@jest/globals'

const replaceSpaces = require('./1');

test('string = "Mr John Smith", length = 13', () => {
    expect(replaceSpaces("Mr John Smith", 13)).toBe("Mr%20John%20Smith")
})
