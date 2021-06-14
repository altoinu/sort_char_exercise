export const removeNonLetters = function(value) {
	
	return value ? value.replace(/[^\w]/gi, '') : '';
	
};