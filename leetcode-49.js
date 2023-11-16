var groupAnagrams = function (strs) {
    const map = {};

    for (const word of strs) {
        const sorted_word = word.split('').sort().join('');
        map[sorted_word] = map[sorted_word] || [];
        map[sorted_word].push(word);
    }

    return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
