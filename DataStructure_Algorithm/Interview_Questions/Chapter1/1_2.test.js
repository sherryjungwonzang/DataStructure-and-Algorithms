//1.2 Check permutation
//given two strings, wrtie a method to decide if one is a permutation of the other
//Test file with Jest
import {describe, expect, test} from '@jest/globals'

const isPermutation = require('./1');

test('s1 = ="done", s2 = "node"', () => {
    expect(isPermutation("done", "node")).toBe(true)
})

test('s1 = ="octopus", s2 = "cotosup"', () => {
    expect(isPermutation("octopus", "cotosup")).toBe(true)
})

test('s1 = ="cat", s2 = "cath"', () => {
    expect(isPermutation("cat", "cath")).toBe(false)
})

test('s1 = ="fish", s2 = "shift"', () => {
    expect(isPermutation("fish", "shift")).toBe(false)
})
