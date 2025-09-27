// Write a function to group anagrams from an array of strings.
const arr = ["bat", "eat","tea", "tab"];

const groupAnagrams = (arr) => {
	const map = new Map();

	for (const word of arr) {
		const key = word.split("").sort().join("");

		if (!map.has(key)) map.set(key, []);
		map.get(key).push(word);
	}

	return [...map.values()];
};

console.log(groupAnagrams(arr));