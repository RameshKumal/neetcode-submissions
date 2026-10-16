class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const resultArr = Array.from(nums);
        for(let num of nums){
            resultArr.push(num)
        }
        return resultArr;
    }
}
