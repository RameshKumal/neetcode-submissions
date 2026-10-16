class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        const tempAns: string = strs[0];
        let finalAns: string = "";
        let isPrefix: boolean = true;

        for (let i = 0; i < tempAns.length; i++) {
            for (let char of strs) {
                if (tempAns[i] !== char[i]) {
                    isPrefix = false;
                    break
                }
            }
            if(isPrefix)
                finalAns += tempAns[i];
        }

        return finalAns.length ? finalAns : "";
    }
}
