//1.1 Is Unique
//implement an algorithm to determine if a string has all unique characters
//Test file
import {describe, expect, test} from '@jest/globals'

const isUnique = require('./1');

test('string = "avocado"', () => {
    expect(isUnique('avocado')).toBe(false)
})

test('string = "cucumber"', () => {
    expect(isUnique('cucumber')).toBe(false)
})

test('string = "apple"', () => {
    expect(isUnique('apple')).toBe(false)
})

test('string = "pickle"', () => {
    expect(isUnique('pickle')).toBe(false)
})
