//let assert = require('assert');
import assert from 'assert';
import { removeNonLetters } from '../src/index.js';


describe('removeNonLetters', () => {
	it('should remove punctuation', () => {
		assert.equal(removeNonLetters('Hello! World? F@o#o$B%a^r'), 'HelloWorldFooBar');
	})
});
