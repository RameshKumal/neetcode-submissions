class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const tempAns: string = strs[0];
        let finalAns: string = "";

        for (let i = 0; i < tempAns.length; i++) {
            for (let char of strs) {
                if (i === char.length || tempAns[i] !== char[i]) {
                    return finalAns;
                }
            }
                finalAns += tempAns[i];
        }

        return finalAns
    }
}
