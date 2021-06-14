export const removeNonLetters = function(text) {

	return text ? text.replace(/[^\w]/gi, '') : '';

};

export const convertToLowerCase = function(text) {

	return text ? text.toLowerCase() : null;

};

function randRange(min, max) {

	return Math.floor(Math.random() * (max - min)) + min;

}

function split(text) {

	// *** using middle char as pivot
	// let pivotIndex = Math.floor(text.length / 2);
	// *** using last char as pivot
	// let pivotIndex = text.length - 1;
	// *** using random char as pivot
	let pivotIndex = randRange(0, text.length);
	let pivot = text.charAt(pivotIndex);

	// check each letter and put separate to ones before and after pivot 
	let before = [];
	let after = [];

	for (let i = 0; i <= text.length - 1; i++) {

		if (i != pivotIndex) {

			let targetChar = text.charAt(i);

			if (targetChar <= pivot)
				before.push(targetChar);
			else
				after.push(targetChar);

		}

	}

	let result = {
		pivot: pivot,
		before: before.join(''),
		after: after.join('')
	};

	//console.log(result);

	return result;

}

function quicksort(text) {

	// If 1 or 0 chars, no sorting needed
	if (text.length <= 1)
		return text;

	let splitText = split(text);

	// recursively sort before and after texts
	let sortedBeforeText = quicksort(splitText.before);
	let sortedAfterText = quicksort(splitText.after);

	// then combine results
	let sortCompletedText = sortedBeforeText + splitText.pivot + sortedAfterText;
	//console.log(sortCompletedText);

	return sortCompletedText;

}

export const sortLetters = function(text) {

	return quicksort(text);

};

export const main = function(text) {
	
	console.log(text);

	// remove punctuations (replace everything that's not a letter)
	let sortTargetText = removeNonLetters(text);
	// lower case
	sortTargetText = convertToLowerCase(sortTargetText);

	let sortCompletedText = sortLetters(sortTargetText);
	console.log(sortCompletedText);

	return sortCompletedText;
	
};

