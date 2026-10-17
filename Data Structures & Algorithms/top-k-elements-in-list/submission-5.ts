class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {};
        const resultArr: number[] = [];
        //creating array of array which will have the array[n]
        //length greater then nums array length.
        const freq: number[][] = Array.from({ length: nums.length + 1 }, () => []);
        for (let n of nums) {
            count[n] = (count[n] || 0) + 1;
        }
        for (const n in count) {
            //storing the all the nums with same count in one array.
            //e.g.,[1,2,2,3,3] =>[[],[1],[2,3]]
            freq[count[n]].push(parseInt(n));
        }
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                resultArr.push(n);
                if(resultArr.length === k) return resultArr;
            }
        }
    }
}
