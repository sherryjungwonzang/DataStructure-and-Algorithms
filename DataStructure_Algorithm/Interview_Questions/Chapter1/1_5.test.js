//1.5 One Away
//there are three types of edits
//be performed on strings: insert a character, remove a character or replace a character
//given two strings
//to check if they are one edit or zero edits away
//Test file with Jest
import {describe, expect, test} from '@jest/globals'

const isValid = require('./1');

test('One removal', () => {
    expect(isValid('pale', 'pae')).toBe(true)
})

test('Two removal', () => {
    expect(isValid('pale', 'pa')).toBe(false)
})

test('One insertion', () => {
    expect(isValid('pale', 'palye')).toBe(true)
})

test('Two insertions', () => {
    expect(isValid('pale', 'pjalye')).toBe(false)
})


test('One replacement', () => {
    expect(isValid('pale', 'paye')).toBe(true)
})

test('Two replacements', () => {
    expect(isValid('pale', 'puye')).toBe(false)
})

test('No edits', () => {
    expect(isValid('pale', 'pale')).toBe(true)
})
