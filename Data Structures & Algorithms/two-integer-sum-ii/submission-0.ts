class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let low = 0;
        let high = numbers.length - 1;

        while(low < high){
            if(numbers[low] + numbers[high] > target){
                high--;
            }else if(numbers[low] + numbers[high] < target){
                low++;
            }else{
                return[low+1, high+1]
            }
        }
    }
}
