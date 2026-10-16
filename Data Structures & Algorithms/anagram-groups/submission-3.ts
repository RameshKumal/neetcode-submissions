class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const res: Record<string, string[]> = {};

        for(let str of strs){
            const count: number[] = Array(26).fill(0);
            for(let char of str){
                count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1
            }
            const key = count.join(",");
            if(!res[key]){
                res[key] = [];
            }
                res[key].push(str)
        }
        return Object.values(res)
    }
}
