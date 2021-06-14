//let assert = require('assert');
import assert from 'assert';
import {
	removeNonLetters,
	convertToLowerCase,
	sortLetters
} from '../src/index.js';


describe('removeNonLetters', () => {
	it('should remove punctuation', () => {
		assert.equal(removeNonLetters('Hello! World? F@o#o$B%a^r'), 'HelloWorldFooBar');
	})
});

describe('convertToLowerCase', () => {
	it('should convert to lower letter characters', () => {
		assert.equal(convertToLowerCase('AAABBBCCC'), 'aaabbbccc');
		assert.equal(convertToLowerCase('Hello! World? F@o#o$B%a^r'), 'hello! world? f@o#o$b%a^r');
	})
});

describe('sortLetters', () => {
	it.skip('should sort letters', () => {
	});
});
