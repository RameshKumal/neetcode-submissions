class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (!nums.length) return 0
        nums.sort((a,b) => a-b);
        let res = 0;
        let curr = nums[0];
        let streak = 0;
        let i = 0;

        while(i < nums.length){
            if(nums[i] !== curr){            
               curr = nums[i];
               streak = 0
            }

            //To handle duplicates
            while(i < nums.length && nums[i] === curr){
                i++;
            }
            streak++;
            curr++;
            res = Math.max(streak, res);
        }
        return res;
    }
}
