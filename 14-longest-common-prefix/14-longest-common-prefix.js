/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return '';
    
    for(let i = 0; i < strs[0].length; i++) {
        for(let k of strs) {
            if(k[i] !== strs[0][i]) return k.slice(0, i);
        }
    }
    return strs[0];
};