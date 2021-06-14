export const removeNonLetters = function(value) {

	return value ? value.replace(/[^\w]/gi, '') : '';

};

export const convertToLowerCase = function(text) {

	return text ? text.toLowerCase() : null;

};
