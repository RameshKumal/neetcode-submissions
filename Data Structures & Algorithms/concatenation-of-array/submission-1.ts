class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const resultArr: number[] = []
        for(let i = 0; i < 2; i++){
            for(let num of nums){
                resultArr.push(num)
            }
        }
        return resultArr;
    }
}
