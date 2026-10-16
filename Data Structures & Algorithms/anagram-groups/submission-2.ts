class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const resultMap: Map<string, string[]> = new Map()
        for(let ele of strs){
            const key = ele.split("").sort().join()
            if(!resultMap.has(key)){
                resultMap.set(key, [ele])
            }else{
                const group = resultMap.get(key)
                group.push(ele)
                resultMap.set(key, group)
            }
        }
        return[...resultMap.values()]
    }
}
