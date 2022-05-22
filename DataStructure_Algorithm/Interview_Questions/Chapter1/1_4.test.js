//1.4 Palindrome Permutation
//given a string, to check if it is a permutation of a palindrome
//palindrome is a word or phrase that is the same forwards and backwards
//permutation is a rearrangement of letters
//palindrome does not need to be limited to just dictionary words
//can ignore casing and non-letter characters
//Test file with Jest
import {describe, expect, test} from '@jest/globals'

const isPalindromePermutation = require('./1');

test('string = "taco cat"', () => {
    expect(isPalindromePermutation('taco cat')).toBe(true)
})

test('string = "taco catt"', () => {
    expect(isPalindromePermutation('taco cat')).toBe(false)
})

test('string = "p o p"', () => {
    expect(isPalindromePermutation('p o p')).toBe(true)
})
