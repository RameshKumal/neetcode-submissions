class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const eleMap: Map<number, number> = new Map();
        const resultArr: number[] = [];
        const resultSet: Set<number> = new Set();
        //store elements count in map 

        for(let ele of nums){
            if(!eleMap.has(ele)){
                eleMap.set(ele, 0);
            }
            eleMap.set(ele, eleMap.get(ele) + 1)
        }
        nums.sort((a,b) => eleMap.get(b) - eleMap.get(a))
        console.log(nums)
        for(let ele of nums){
            if(resultArr.length == k ) break
            if(resultArr[resultArr.length - 1] !== ele && 
            !resultSet.has(ele)){
                resultArr.push(ele)
                resultSet.add(ele)
            }

        }
        return resultArr;
    }
}
